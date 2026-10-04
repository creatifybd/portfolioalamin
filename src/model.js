export const categories = {
  branding: "Brand identity",
  graphic: "Graphic design",
  web: "Web design",
  video: "Motion & video",
  ai: "AI artwork",
  packaging: "Packaging",
};
export function safeUrl(value) {
  if (typeof value !== "string" || !value.trim()) return "";
  if (/^\/work\/[a-z0-9-]+\.webp$/.test(value)) return value;
  try {
    const u = new URL(value);
    return ["https:", "http:"].includes(u.protocol) ? u.href : "";
  } catch {
    return "";
  }
}
export function imagesFor(project) {
  return [
    ...new Set(
      [project.imgUrl, ...(Array.isArray(project.images) ? project.images : [])]
        .map((x) => safeUrl(typeof x === "string" ? x : x?.url))
        .filter(Boolean),
    ),
  ];
}
export function visibleProjects(items) {
  return (Array.isArray(items) ? items : [])
    .filter((p) => p && p.hidden !== true)
    .map((p, i) => ({
      ...p,
      id: String(p.id ?? `project-${i}`),
      title: p.title || "Untitled project",
      cat: p.cat || "graphic",
    }));
}
export function categoryName(key) {
  return categories[key] || key;
}
export function filterProjects(items, category, query) {
  const q = query.trim().toLowerCase();
  return items.filter(
    (p) =>
      (category === "all" || p.cat === category) &&
      [p.title, p.desc, p.description, p.client, ...(p.tech || [])]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(q),
  );
}
export function videoEmbed(value) {
  const url = safeUrl(value);
  if (!url || url.startsWith("/")) return "";
  const u = new URL(url);
  if (
    [
      "youtube.com",
      "www.youtube.com",
      "youtu.be",
      "www.youtube-nocookie.com",
    ].includes(u.hostname)
  ) {
    const id =
      u.hostname === "youtu.be"
        ? u.pathname.slice(1)
        : u.searchParams.get("v") || u.pathname.split("/").pop();
    return /^[\w-]{11}$/.test(id)
      ? `https://www.youtube-nocookie.com/embed/${id}`
      : "";
  }
  if (["vimeo.com", "player.vimeo.com"].includes(u.hostname)) {
    const id = u.pathname.split("/").pop();
    return /^\d+$/.test(id) ? `https://player.vimeo.com/video/${id}` : "";
  }
  return "";
}

export function mergePortfolio(curated, remote) {
  const overrides = Array.isArray(remote) ? remote : [];
  const ids = new Set(overrides.map((p) => String(p.id)));
  return [...curated.filter((p) => !ids.has(String(p.id))), ...overrides];
}
