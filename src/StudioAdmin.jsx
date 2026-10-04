import { f as getReact } from "./vendor.js";
import {
  watchAuth,
  login,
  logout,
  readConfig,
  saveConfig,
  uploadImage,
  watchMessages,
  markRead,
} from "./api.js";
import { categories, imagesFor, mergePortfolio } from "./model.js";
import curatedProjects from "./featured-projects.json";
import "./studio.css";
const React = getReact(),
  { useState, useEffect } = React;
function Field({ label, value, onChange, multiline = false }) {
  return (
    <label>
      {label}
      {multiline ? (
        <textarea
          rows={4}
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input value={value || ""} onChange={(e) => onChange(e.target.value)} />
      )}
    </label>
  );
}
export default function StudioAdmin() {
  const [user, setUser] = useState(null),
    [authReady, setAuthReady] = useState(false),
    [data, setData] = useState(null),
    [tab, setTab] = useState("portfolio"),
    [selected, setSelected] = useState(0),
    [notice, setNotice] = useState(""),
    [busy, setBusy] = useState(false),
    [dirty, setDirty] = useState(false);
  useEffect(
    () =>
      watchAuth((u) => {
        setUser(u);
        setAuthReady(true);
      }),
    [],
  );
  useEffect(() => {
    if (!user) {
      setData(null);
      return;
    }
    let active = true;
    readConfig()
      .then((d) => {
        if (active)
          setData({
            ...d,
            portfolio: mergePortfolio(curatedProjects, d.portfolio),
          });
      })
      .catch((e) => setNotice(`Could not load your content: ${e.message}`));
    return () => {
      active = false;
    };
  }, [user]);
  useEffect(() => {
    const warn = (e) => {
      if (dirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    addEventListener("beforeunload", warn);
    return () => removeEventListener("beforeunload", warn);
  }, [dirty]);
  const update = (key, value) => {
    setData((d) => ({ ...d, [key]: value }));
    setDirty(true);
    setNotice("");
  };
  const projects = data?.portfolio || [],
    project = projects[selected];
  const edit = (patch) =>
    update(
      "portfolio",
      projects.map((p, i) => (i === selected ? { ...p, ...patch } : p)),
    );
  async function action(fn) {
    setBusy(true);
    setNotice("");
    try {
      await fn();
    } catch (e) {
      setNotice(e.message || "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }
  async function save() {
    await action(async () => {
      const keys =
        tab === "portfolio"
          ? ["portfolio"]
          : [
              "about",
              "hero",
              "social",
              "experience",
              "education",
              "skills",
              "courses",
            ];
      const patch = Object.fromEntries(
        keys.filter((k) => data[k] !== undefined).map((k) => [k, data[k]]),
      );
      if (tab === "portfolio" && projects.some((p) => !p.title?.trim()))
        throw Error("Every project needs a title.");
      await saveConfig(patch);
      setDirty(false);
      setNotice("Saved. Your portfolio is updated.");
    });
  }
  function switchTab(next) {
    if (dirty && !confirm("Discard unsaved changes and reload your content?"))
      return;
    if (dirty) {
      action(async () => {
        const fresh = await readConfig();
        setData({
          ...fresh,
          portfolio: mergePortfolio(curatedProjects, fresh.portfolio),
        });
        setDirty(false);
        setTab(next);
      });
    } else setTab(next);
  }
  return (
    <main className="studio">
      <fieldset disabled={busy}>
        <header>
          <a href="/">al-amin® / Studio</a>
          {user && (
            <button
              disabled={busy}
              onClick={() => {
                if (!dirty || confirm("Sign out and discard unsaved changes?"))
                  logout();
              }}
            >
              Sign out
            </button>
          )}
        </header>
        <h1>
          Portfolio studio<span>.</span>
        </h1>
        <p>Manage your work and the story behind it.</p>
        <p role="status" className="studio-notice">
          {notice}
        </p>
        {!authReady ? (
          <p>Checking sign-in…</p>
        ) : !user ? (
          <section className="studio-login">
            <h2>Welcome back.</h2>
            <p>
              Sign in with your authorized Google account to edit your
              portfolio.
            </p>
            <button
              className="button"
              disabled={busy}
              onClick={() => action(login)}
            >
              Sign in with Google ↗
            </button>
          </section>
        ) : !data ? (
          <p>Loading your content…</p>
        ) : (
          <>
            <div className="studio-toolbar">
              <div>
                <button
                  aria-pressed={tab === "portfolio"}
                  onClick={() => switchTab("portfolio")}
                >
                  Projects
                </button>
                <button
                  aria-pressed={tab === "profile"}
                  onClick={() => switchTab("profile")}
                >
                  Profile
                </button>
                <button
                  aria-pressed={tab === "messages"}
                  onClick={() => switchTab("messages")}
                >
                  Enquiries
                </button>
              </div>
              <button
                className="button"
                disabled={busy || !dirty || tab === "messages"}
                onClick={save}
              >
                {busy ? "Working…" : dirty ? "Save changes" : "Saved"}
              </button>
            </div>
            {tab === "messages" ? (
              <Inbox />
            ) : tab === "portfolio" ? (
              <div className="studio-layout">
                <aside>
                  <button
                    className="button"
                    disabled={busy}
                    onClick={() => {
                      update("portfolio", [
                        ...projects,
                        {
                          id: crypto.randomUUID(),
                          title: "Untitled project",
                          cat: "graphic",
                          images: [],
                          hidden: true,
                        },
                      ]);
                      setSelected(projects.length);
                    }}
                  >
                    Add project +
                  </button>
                  <p>New projects are hidden until you publish them.</p>
                  {projects.map((p, i) => (
                    <button
                      key={p.id || i}
                      className={selected === i ? "selected" : ""}
                      onClick={() => setSelected(i)}
                    >
                      {String(i + 1).padStart(2, "0")} / {p.title}
                      {p.hidden ? " · Hidden" : ""}
                    </button>
                  ))}
                </aside>
                {project ? (
                  <section className="studio-editor">
                    <div className="studio-actions">
                      <button
                        disabled={selected === 0 || busy}
                        onClick={() => {
                          const arr = [...projects];
                          [arr[selected - 1], arr[selected]] = [
                            arr[selected],
                            arr[selected - 1],
                          ];
                          update("portfolio", arr);
                          setSelected(selected - 1);
                        }}
                      >
                        Move up ↑
                      </button>
                      <button
                        disabled={selected === projects.length - 1 || busy}
                        onClick={() => {
                          const arr = [...projects];
                          [arr[selected + 1], arr[selected]] = [
                            arr[selected],
                            arr[selected + 1],
                          ];
                          update("portfolio", arr);
                          setSelected(selected + 1);
                        }}
                      >
                        Move down ↓
                      </button>
                      <button
                        disabled={busy}
                        onClick={() => {
                          if (
                            confirm(
                              `Hide or remove “${project.title}” from the portfolio? Imported projects remain in the editor as hidden. This applies when you save.`,
                            )
                          ) {
                            update(
                              "portfolio",
                              curatedProjects.some((p) => p.id === project.id)
                                ? projects.map((p, i) =>
                                    i === selected ? { ...p, hidden: true } : p,
                                  )
                                : projects.filter((_, i) => i !== selected),
                            );
                            setSelected(0);
                          }
                        }}
                      >
                        Remove
                      </button>
                    </div>
                    {project.caseStudy?.map((section, i) => (
                      <div key={i}>
                        <Field
                          label={`Case study ${i + 1}: heading`}
                          value={section.title}
                          onChange={(title) =>
                            edit({
                              caseStudy: project.caseStudy.map((x, j) =>
                                i === j ? { ...x, title } : x,
                              ),
                            })
                          }
                        />
                        <Field
                          label="Case study details"
                          multiline
                          value={section.text}
                          onChange={(text) =>
                            edit({
                              caseStudy: project.caseStudy.map((x, j) =>
                                i === j ? { ...x, text } : x,
                              ),
                            })
                          }
                        />
                      </div>
                    ))}
                    {project.gallery?.map((item, i) => (
                      <Field
                        key={item.src}
                        label={`Artwork ${i + 1} caption`}
                        multiline
                        value={item.caption}
                        onChange={(caption) =>
                          edit({
                            gallery: project.gallery.map((x, j) =>
                              i === j ? { ...x, caption } : x,
                            ),
                          })
                        }
                      />
                    ))}
                    <Field
                      label="Project title"
                      value={project.title}
                      onChange={(title) => edit({ title })}
                    />
                    <label>
                      Category
                      <select
                        value={project.cat || "graphic"}
                        onChange={(e) => edit({ cat: e.target.value })}
                      >
                        {Object.entries(categories).map(([key, name]) => (
                          <option key={key} value={key}>
                            {name}
                          </option>
                        ))}
                      </select>
                    </label>
                    <Field
                      label="Project story"
                      multiline
                      value={project.desc || project.description}
                      onChange={(desc) => edit({ desc })}
                    />
                    <div className="studio-pair">
                      <Field
                        label="Client"
                        value={project.client}
                        onChange={(client) => edit({ client })}
                      />
                      <Field
                        label="Year"
                        value={project.year}
                        onChange={(year) => edit({ year })}
                      />
                    </div>
                    <Field
                      label="Skills / tools (comma separated)"
                      value={(project.tech || []).join(", ")}
                      onChange={(v) =>
                        edit({ tech: v.split(",").map((s) => s.trim()) })
                      }
                    />
                    <Field
                      label="Cover image URL"
                      value={project.imgUrl}
                      onChange={(imgUrl) => edit({ imgUrl })}
                    />
                    <Field
                      label="Gallery image URLs (one per line, in display order)"
                      multiline
                      value={(project.images || [])
                        .map((x) => (typeof x === "string" ? x : x.url))
                        .join("\n")}
                      onChange={(v) => edit({ images: v.split("\n") })}
                    />
                    <label>
                      Upload artwork
                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/gif"
                        disabled={busy}
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file)
                            action(async () => {
                              const url = await uploadImage(file);
                              edit({
                                images: [...(project.images || []), url],
                              });
                              setNotice(
                                "Image uploaded. Save changes to publish it.",
                              );
                            });
                          e.target.value = "";
                        }}
                      />
                    </label>
                    <div className="studio-thumbnails">
                      {imagesFor(project).map((src) => (
                        <img
                          key={src}
                          src={src}
                          alt="Project artwork preview"
                          loading="lazy"
                        />
                      ))}
                    </div>
                    <Field
                      label="Live website URL"
                      value={project.siteUrl}
                      onChange={(siteUrl) => edit({ siteUrl })}
                    />
                    <Field
                      label="Video URL (YouTube, Vimeo or external link)"
                      value={project.videoUrl}
                      onChange={(videoUrl) => edit({ videoUrl })}
                    />
                    <label className="studio-check">
                      <input
                        type="checkbox"
                        checked={!!project.featured}
                        onChange={(e) => edit({ featured: e.target.checked })}
                      />
                      Featured project
                    </label>
                    <label className="studio-check">
                      <input
                        type="checkbox"
                        checked={!!project.hidden}
                        onChange={(e) => edit({ hidden: e.target.checked })}
                      />
                      Hidden from public portfolio
                    </label>
                  </section>
                ) : (
                  <p>Add your first project.</p>
                )}
              </div>
            ) : (
              <section className="studio-editor profile-editor">
                <h2>About you</h2>
                {[
                  ["bio1", "Introduction"],
                  ["bio2", "More about you"],
                  ["photoUrl", "Portrait URL"],
                ].map(([key, label]) => (
                  <Field
                    key={key}
                    label={label}
                    multiline={key !== "photoUrl"}
                    value={data.about?.[key]}
                    onChange={(v) =>
                      update("about", { ...data.about, [key]: v })
                    }
                  />
                ))}
                <Field
                  label="Résumé URL"
                  value={data.hero?.cvLink}
                  onChange={(cvLink) =>
                    update("hero", { ...data.hero, cvLink })
                  }
                />
                <h2>Social profiles</h2>
                {[
                  ["fb", "Facebook"],
                  ["li", "LinkedIn"],
                  ["ig", "Instagram"],
                  ["beh", "Behance"],
                ].map(([key, label]) => (
                  <Field
                    key={key}
                    label={label}
                    value={data.social?.[key]}
                    onChange={(v) =>
                      update("social", { ...data.social, [key]: v })
                    }
                  />
                ))}
                {[
                  ["experience", ["role", "company", "period", "desc"]],
                  ["education", ["degree", "institution", "period", "grade"]],
                  ["skills", ["name"]],
                  ["courses", ["title", "institute", "period", "desc"]],
                ].map(([key, fields]) => (
                  <section key={key}>
                    <h2>{key[0].toUpperCase() + key.slice(1)}</h2>
                    {(data[key] || []).map((item, i) => (
                      <details key={item.id || i}>
                        <summary>{item[fields[0]] || "New entry"}</summary>
                        {fields.map((field) => (
                          <Field
                            key={field}
                            label={field}
                            multiline={field === "desc"}
                            value={item[field]}
                            onChange={(value) =>
                              update(
                                key,
                                data[key].map((x, j) =>
                                  j === i ? { ...x, [field]: value } : x,
                                ),
                              )
                            }
                          />
                        ))}
                        <label className="studio-check">
                          <input
                            type="checkbox"
                            checked={!!item.hidden}
                            onChange={(e) =>
                              update(
                                key,
                                data[key].map((x, j) =>
                                  j === i
                                    ? { ...x, hidden: e.target.checked }
                                    : x,
                                ),
                              )
                            }
                          />
                          Hidden
                        </label>
                      </details>
                    ))}
                    <button
                      onClick={() =>
                        update(key, [
                          ...(data[key] || []),
                          { id: crypto.randomUUID(), [fields[0]]: "New entry" },
                        ])
                      }
                    >
                      Add entry +
                    </button>
                  </section>
                ))}
              </section>
            )}
          </>
        )}
      </fieldset>
    </main>
  );
}

function Inbox() {
  const [messages, setMessages] = useState(null),
    [error, setError] = useState("");
  useEffect(() => watchMessages(setMessages, (e) => setError(e.message)), []);
  return (
    <section className="studio-inbox">
      <h2>Project enquiries</h2>
      <p role="status">{error}</p>
      {!messages ? (
        <p>Loading messages…</p>
      ) : !messages.length ? (
        <p>No enquiries yet.</p>
      ) : (
        messages.map((m) => (
          <details key={m.id}>
            <summary>
              {m.read ? "" : "● "}
              {m.name} ·{" "}
              {m.createdAt?.toDate?.().toLocaleDateString() || "Recent"}
            </summary>
            <a href={`mailto:${encodeURIComponent(m.email || "")}`}>
              {m.email}
            </a>
            <p style={{ whiteSpace: "pre-wrap" }}>{m.message}</p>
            {!m.read && (
              <button
                onClick={() => markRead(m.id).catch((e) => setError(e.message))}
              >
                Mark as read
              </button>
            )}
          </details>
        ))
      )}
    </section>
  );
}
