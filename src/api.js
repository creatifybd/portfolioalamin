import profile from "./profile.json";
import { migrateProfile } from "./profile-migration.js";
import {
  C as initFirestore,
  T as initHelpers,
  y as initializeApp,
  _ as getFirestore,
  r as getAuth,
  g as doc,
  u as getDoc,
  m as setDoc,
  i as onAuthStateChanged,
  t as GoogleAuthProvider,
  o as signInWithPopup,
  s as signOut,
  h as collection,
  c as addDoc,
  v as serverTimestamp,
  d as onSnapshot,
  p as query,
  f as orderBy,
} from "./firebase.js";
initFirestore();
initHelpers();
const app = initializeApp({
  apiKey: "AIzaSyCsdBzEBL-6lVMQ6MV1MxxuTpSBzE8jYxg",
  authDomain: "portfolio-alamin-79c1d.firebaseapp.com",
  projectId: "portfolio-alamin-79c1d",
  storageBucket: "portfolio-alamin-79c1d.firebasestorage.app",
  messagingSenderId: "1071926494881",
  appId: "1:1071926494881:web:207e27f6fdeb46739dd2e0",
});
const db = getFirestore(app),
  auth = getAuth(app);
const admins = [
  "binashad7@gmail.com",
  "alaminbinashadali777@gmail.com",
  "alaminashiq46800864@gmail.com",
];
export const allowed = (user) => !!user && admins.includes(user.email);
export const watchAuth = (callback) =>
  onAuthStateChanged(auth, (user) => callback(allowed(user) ? user : null));
export async function login() {
  const result = await signInWithPopup(auth, new GoogleAuthProvider());
  if (!allowed(result.user)) {
    await signOut(auth);
    throw Error("This Google account does not have admin access.");
  }
  return result.user;
}
export const logout = () => signOut(auth);
export async function readConfig() {
  const result = await getDoc(doc(db, "site", "config"));
  return migrateProfile(result.exists() ? result.data() : {}, profile);
}
export async function saveConfig(patch) {
  if (!allowed(auth.currentUser))
    throw Error("Sign in with an authorized account.");
  const current = await getDoc(doc(db, "site", "config"));
  const raw = current.exists() ? current.data() : {};
  const migrated = migrateProfile(raw, profile);
  const migration =
    raw.profileRevision >= 2
      ? {}
      : {
          about: migrated.about,
          experience: migrated.experience,
          skills: migrated.skills,
        };
  await setDoc(
    doc(db, "site", "config"),
    { ...migration, ...patch, profileRevision: 2 },
    { merge: true },
  );
}
export async function sendMessage(form) {
  if (form.website) return;
  await addDoc(collection(db, "messages"), {
    name: form.name.trim(),
    email: form.email.trim(),
    message: form.message.trim(),
    service: form.service || "Portfolio enquiry",
    read: false,
    createdAt: serverTimestamp(),
  });
}
export async function uploadImage(file) {
  if (!allowed(auth.currentUser)) throw Error("Admin sign-in required.");
  if (
    !["image/jpeg", "image/png", "image/webp", "image/gif"].includes(
      file.type,
    ) ||
    file.size > 20 * 1024 * 1024
  )
    throw Error("Choose a JPG, PNG, WebP or GIF smaller than 20 MB.");
  const settings = await getDoc(doc(db, "site", "apikeys"));
  const key = settings.data()?.imgbb_key;
  if (!key)
    throw Error("Image upload is not configured. Use a hosted image URL.");
  const body = new FormData();
  body.append("image", file);
  const response = await fetch(
    `https://api.imgbb.com/1/upload?key=${encodeURIComponent(key)}`,
    { method: "POST", body },
  );
  const data = await response.json();
  if (!response.ok || !data.success)
    throw Error("Image upload failed. Try again.");
  return data.data.url;
}

export function watchMessages(callback, onError) {
  if (!allowed(auth.currentUser)) throw Error("Admin sign-in required.");
  return onSnapshot(
    query(collection(db, "messages"), orderBy("createdAt", "desc")),
    (snapshot) =>
      callback(snapshot.docs.map((item) => ({ ...item.data(), id: item.id }))),
    onError,
  );
}
export async function markRead(id) {
  if (!allowed(auth.currentUser)) throw Error("Admin sign-in required.");
  await setDoc(doc(db, "messages", id), { read: true }, { merge: true });
}
