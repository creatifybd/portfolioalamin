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
