// Upgrade legacy Firestore content once; subsequent admin edits remain editable.
export function migrateProfile(data = {}, profile) {
  if (data.profileRevision >= 2) return data;
  const companies = [/nazrul/i, /withus/i, /vivid/i];
  return {
    ...data,
    profileRevision: 2,
    about: {
      ...profile.about,
      ...data.about,
      bio1: profile.about.bio1,
      bio2: profile.about.bio2,
      tags: (data.about?.tags || profile.about.tags).filter(
        (x) => !/train|educator/i.test(x),
      ),
    },
    experience: companies.map((pattern, i) => ({
      ...profile.experience[i],
      ...(data.experience || []).find((x) => pattern.test(x.company)),
      company: profile.experience[i].company,
    })),
    skills: (data.skills || profile.skills).filter(
      (x) => !/train|educator/i.test(x.name),
    ),
  };
}
