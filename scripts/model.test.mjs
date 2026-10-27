import test from "node:test";
import assert from "node:assert/strict";
import {
  safeUrl,
  imagesFor,
  visibleProjects,
  filterProjects,
  videoEmbed,
} from "../src/model.js";
import { readFileSync } from "node:fs";
const projects = JSON.parse(
  readFileSync(new URL("../src/projects.json", import.meta.url)),
);
test("preserves all recovered work and artwork", () => {
  assert.equal(projects.length, 17);
  assert.equal(new Set(projects.map((p) => p.id)).size, 17);
  for (const p of projects) assert.ok(imagesFor(p).length > 0);
});
test("hides unpublished work and supports numeric legacy ids", () => {
  assert.deepEqual(
    visibleProjects([
      { id: 42, title: "A" },
      { id: 2, hidden: true },
    ]).map((p) => p.id),
    ["42"],
  );
});
test("deduplicates artwork and rejects unsafe URLs", () => {
  assert.deepEqual(
    imagesFor({
      imgUrl: "https://example.com/a.jpg",
      images: [
        "javascript:alert(1)",
        { url: "https://example.com/a.jpg" },
        "https://example.com/b.jpg",
      ],
    }),
    ["https://example.com/a.jpg", "https://example.com/b.jpg"],
  );
  assert.equal(safeUrl("data:text/html,hi"), "");
});
test("combines case-insensitive search and category", () => {
  const p = [
    { title: "Blue Brand", cat: "branding", client: "Example" },
    { title: "Blue web", cat: "web" },
  ];
  assert.equal(filterProjects(p, "branding", "EXAMPLE").length, 1);
  assert.equal(filterProjects(p, "web", "Brand").length, 0);
});
test("embeds only supported validated video IDs", () => {
  assert.equal(
    videoEmbed("https://youtu.be/dQw4w9WgXcQ"),
    "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  );
  assert.equal(
    videoEmbed("https://youtube.com.evil.test/watch?v=dQw4w9WgXcQ"),
    "",
  );
  assert.equal(
    videoEmbed("https://vimeo.com/1234"),
    "https://player.vimeo.com/video/1234",
  );
});

test("curated packaging assets are complete and remain available with remote content", async () => {
  const { mergePortfolio } = await import("../src/model.js");
  const curated = JSON.parse(
    readFileSync(new URL("../src/featured-projects.json", import.meta.url)),
  );
  assert.equal(curated.length, 23);
  assert.equal(
    curated
      .filter((p) => p.cat === "packaging")
      .reduce((sum, p) => sum + p.images.length, 0),
    94,
  );
  for (const p of curated) {
    assert.equal(p.gallery.length, p.images.length);
    for (const image of imagesFor(p)) {
      assert.ok(
        readFileSync(new URL("../public" + image, import.meta.url)).length,
      );
      assert.ok(p.gallery.find((g) => g.src === image)?.caption);
    }
  }
  const combined = mergePortfolio(curated, [{ ...curated[0], hidden: true }]);
  assert.equal(combined.length, 23);
  assert.equal(visibleProjects(combined).length, 22);
  assert.equal(mergePortfolio(curated, projects).length, 40);
  assert.equal(curated.flatMap(p => p.gallery).filter(g => g.kind === "artwork").length, 51);
});

test("Orbit source coverage and carton panel geometry stay valid", () => {
  const curated = JSON.parse(readFileSync(new URL("../src/featured-projects.json", import.meta.url)));
  const manifest = JSON.parse(readFileSync(new URL("../docs/orbit-artwork-manifest.json", import.meta.url)));
  assert.equal(manifest.length, 24);
  assert.equal(new Set(manifest.map(item => item.source)).size, 24);
  for (const item of manifest) {
    const project = curated.find(p => p.id === item.project);
    assert.ok(project?.gallery.some(g => g.src === item.output && g.kind === "artwork"));
  }
  const cartons = curated.flatMap(p => p.gallery).filter(g => g.carton);
  assert.equal(cartons.length, 12);
  for (const {carton, width, height} of cartons) {
    for (const key of ["front", "side", "flap"]) {
      const [x,y,w,h] = carton[key];
      assert.ok(x >= 0 && y >= 0 && w > 0 && h > 0 && x+w <= 100 && y+h <= 100);
    }
    const ratio = carton.front[2] * width / (carton.front[3] * height);
    assert.ok(Math.abs(ratio - carton.size[0] / carton.size[2]) < .01, carton.label);
  }
});

test("legacy profile migration corrects identity and preserves subsequent admin changes", async () => {
  const { migrateProfile } = await import("../src/profile-migration.js");
  const old = {
    experience: [
      { company: "VIVID", role: "Creative Director" },
      { company: "Self-Employed", role: "Computer Trainer" },
      {
        company: "WithUs Visa Consultancy",
        role: "Senior Documentation Executive",
      },
      { company: "Nazrul & Brothers Ltd", role: "Executive - Graphic Design" },
    ],
    about: { bio1: "Old name", photoUrl: "https://example.com/photo.jpg" },
    skills: [{ name: "Computer Training" }, { name: "Adobe Photoshop" }],
  };
  const profile = JSON.parse(readFileSync(new URL("../src/profile.json", import.meta.url)));
  const upgraded = migrateProfile(old, profile);
  assert.deepEqual(
    upgraded.experience.map((x) => x.company),
    ["NAZRUL & BROTHERS", "WithUs Visa Consultancy", "VIVID"],
  );
  assert.match(upgraded.about.bio1, /MD\. AL-AMIN ALI/);
  assert.equal(upgraded.about.photoUrl, old.about.photoUrl);
  assert.deepEqual(upgraded.skills, [{ name: "Adobe Photoshop" }]);
  const edited = {
    ...upgraded,
    about: { ...upgraded.about, bio1: "A new biography" },
  };
  assert.deepEqual(migrateProfile(edited, profile), edited);
});
