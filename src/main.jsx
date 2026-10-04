import { f as getReact, d as getDOM } from "./vendor.js";
import profile from "./profile.json";
import savedProjects from "./projects.json";
import curatedProjects from "./featured-projects.json";
import { mergePortfolio } from "./model.js";
import { readConfig, sendMessage } from "./api.js";
import {
  safeUrl,
  imagesFor,
  visibleProjects,
  filterProjects,
  categoryName,
  videoEmbed,
} from "./model.js";
import "./portfolio.css";
const React = getReact();
const { useState, useEffect, useRef, Suspense, lazy } = React;
const Admin = lazy(() => import("./StudioAdmin.jsx"));
const NAME = "Al-Amin Bin Ashad Ali",
  EMAIL = "binashad7@gmail.com";
function Arrow({ diagonal = false, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      {...props}
    >
      {diagonal ? (
        <path d="M5 19 19 5M5 5h14v14" />
      ) : (
        <path d="M4 12h16m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}
function useRoute() {
  const [path, setPath] = useState(location.pathname);
  useEffect(() => {
    const update = () => setPath(location.pathname);
    addEventListener("popstate", update);
    return () => removeEventListener("popstate", update);
  }, []);
  const go = (path) => {
    history.pushState({}, "", path);
    setPath(path);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  return [path, go];
}
function Artwork({ src, alt, eager = false, ...props }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);
  return src && !failed ? (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      {...props}
    />
  ) : (
    <div className="artwork-fallback">
      <span>Image unavailable</span>
      <span>{alt}</span>
    </div>
  );
}
function App() {
  const [data, setData] = useState({
      ...profile,
      portfolio: mergePortfolio(curatedProjects, savedProjects),
    }),
    [loadState, setLoadState] = useState("loading"),
    [path, go] = useRoute(),
    [menu, setMenu] = useState(false);
  const projects = visibleProjects(data.portfolio);
  const match = path.match(/^\/project\/(.+)$/);
  let selected;
  try {
    selected =
      match && projects.find((p) => p.id === decodeURIComponent(match[1]));
  } catch {}
  useEffect(() => {
    let active = true;
    readConfig()
      .then((remote) => {
        if (active) {
          setData({
            ...profile,
            ...remote,
            about: { ...profile.about, ...remote.about },
            hero: { ...profile.hero, ...remote.hero },
            portfolio: mergePortfolio(
              curatedProjects,
              Array.isArray(remote.portfolio)
                ? remote.portfolio
                : savedProjects,
            ),
          });
          setLoadState("ready");
        }
      })
      .catch(() => active && setLoadState("offline"));
    return () => {
      active = false;
    };
  }, []);
  useEffect(() => {
    document.body.classList.toggle("menu-open", menu);
    return () => document.body.classList.remove("menu-open");
  }, [menu]);
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") setMenu(false);
    };
    addEventListener("keydown", close);
    return () => removeEventListener("keydown", close);
  }, []);
  useEffect(() => {
    const label = selected
      ? selected.title
      : path === "/admin"
        ? "Studio admin"
        : "Graphic Designer & Website Developer";
    document.title = `${label} — ${NAME}`;
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute(
        "href",
        `https://portfolio-alamin-79c1d.web.app${match ? path : "/"}`,
      );
  }, [path, selected]);
  useEffect(() => {
    if (!match && path !== "/admin") {
      const section =
        {
          "/portfolio": "work",
          "/about": "about",
          "/experience": "experience",
          "/skills": "expertise",
          "/services": "expertise",
          "/contact": "contact",
        }[path] || location.hash.slice(1);
      if (section)
        requestAnimationFrame(() =>
          document.getElementById(section)?.scrollIntoView(),
        );
    }
  }, [path]);
  function section(event, id) {
    event.preventDefault();
    setMenu(false);
    if (path !== "/") {
      go(`/#${id}`);
    } else {
      history.replaceState({}, "", `/#${id}`);
      document.getElementById(id)?.scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    }
  }
  if (path === "/admin")
    return (
      <Suspense
        fallback={<main className="admin-loading">Opening studio…</main>}
      >
        <Admin />
      </Suspense>
    );
  const isProject = !!match;
  const known =
    path === "/" ||
    path.startsWith("/#") ||
    [
      "/portfolio",
      "/about",
      "/experience",
      "/skills",
      "/services",
      "/contact",
    ].includes(path) ||
    isProject;
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <a
          href="/"
          className="wordmark"
          onClick={(e) => {
            e.preventDefault();
            setMenu(false);
            go("/");
          }}
          aria-label="Al-Amin home"
        >
          al-amin<span className="brand-dot">®</span>
        </a>
        <nav
          className={menu ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          {[
            ["work", "Work"],
            ["about", "About"],
            ["expertise", "Expertise"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <a key={id} href={`/#${id}`} onClick={(e) => section(e, id)}>
              {label}
              <span>↗</span>
            </a>
          ))}
        </nav>
        <a className="header-contact" href={`mailto:${EMAIL}`}>
          Get in touch <Arrow diagonal />
        </a>
        <button
          className="menu-toggle"
          aria-expanded={menu}
          aria-label={menu ? "Close navigation" : "Open navigation"}
          onClick={() => setMenu(!menu)}
        >
          {menu ? "Close" : "Menu"} <span>{menu ? "−" : "+"}</span>
        </button>
      </header>
      <main id="main-content">
        {!known ? (
          <section className="not-found">
            <span className="eyebrow">404 / Page not found</span>
            <h1>
              Back to
              <br />
              the work.
            </h1>
            <a
              className="button solid"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                go("/");
              }}
            >
              View portfolio <Arrow />
            </a>
          </section>
        ) : isProject ? (
          <Project
            project={selected}
            projects={projects}
            loading={loadState === "loading"}
            go={go}
          />
        ) : (
          <>
            <Hero data={data} projects={projects} go={go} section={section} />
            <Work projects={projects} go={go} loadState={loadState} />
            <About data={data} />
            <Expertise data={data} />
            <Contact />
          </>
        )}
      </main>
      <footer className="footer">
        <a
          className="wordmark"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            go("/");
          }}
        >
          al-amin<span className="brand-dot">®</span>
        </a>
        <p>
          © {new Date().getFullYear()} {NAME}
        </p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
function Hero({ data, projects, go, section }) {
  const spotlight =
    projects.find((p) => p.featured && imagesFor(p).length) ||
    projects.find((p) => p.cat === "branding") ||
    projects[0];
  return (
    <section className="hero">
      <div className="hero-meta">
        <span className="eyebrow">Independent creative portfolio</span>
        <span className="location">
          Narayanganj, Bangladesh <span className="status-dot" />
        </span>
      </div>
      <div className="hero-title">
        <h1>
          Graphic designer
          <span className="title-second">
            <span className="ampersand">&</span> web developer
            <span className="period">.</span>
          </span>
        </h1>
        <span className="hero-star" aria-hidden="true">
          ✳
        </span>
      </div>
      <div className="hero-bottom">
        <div className="hero-intro">
          <span className="eyebrow">Al-Amin Bin Ashad Ali</span>
          <p>
            Brand identity. Graphic design.
            <br />
            Digital experiences.
          </p>
          <a
            className="text-link"
            href="#work"
            onClick={(e) => section(e, "work")}
          >
            Explore my work <Arrow />
          </a>
        </div>
        {spotlight && (
          <a
            className="hero-preview"
            href={`/project/${encodeURIComponent(spotlight.id)}`}
            onClick={(e) => {
              e.preventDefault();
              go(`/project/${encodeURIComponent(spotlight.id)}`);
            }}
          >
            <div className="preview-art">
              <Artwork
                src={imagesFor(spotlight)[0]}
                alt={spotlight.title}
                eager
              />
            </div>
            <span>
              <small>In the portfolio</small>
              {spotlight.title}
            </span>
            <Arrow diagonal />
          </a>
        )}
        <a
          className="scroll-cue"
          href="#work"
          onClick={(e) => section(e, "work")}
          aria-label="Scroll to portfolio"
        >
          ↓
        </a>
      </div>
      <div className="discipline-strip" aria-hidden="true">
        <span>Brand identity</span>
        <b>✳</b>
        <span>Graphic design</span>
        <b>✳</b>
        <span>Web development</span>
        <b>✳</b>
        <span>AI artwork</span>
      </div>
    </section>
  );
}
function Work({ projects, go, loadState }) {
  const [category, setCategory] = useState("all"),
    [query, setQuery] = useState("");
  const cats = [...new Set(projects.map((p) => p.cat))];
  const filtered = filterProjects(projects, category, query);
  const ordered = [...filtered].sort(
    (a, b) => Number(!!b.featured) - Number(!!a.featured),
  );
  return (
    <section id="work" className="work section-wrap">
      <div className="section-top">
        <span className="eyebrow">01 / Portfolio</span>
        <span className="eyebrow">
          {String(projects.length).padStart(2, "0")} projects
        </span>
      </div>
      <div className="work-heading">
        <h2>
          The work<span className="blue">.</span>
        </h2>
        <p>
          Graphic design, brand identities
          <br />
          and digital work.
        </p>
      </div>
      <div className="work-controls">
        <div className="filters" aria-label="Filter portfolio">
          <button
            className={category === "all" ? "active" : ""}
            aria-pressed={category === "all"}
            onClick={() => setCategory("all")}
          >
            All work <sup>{projects.length}</sup>
          </button>
          {cats.map((cat) => (
            <button
              key={cat}
              className={category === cat ? "active" : ""}
              aria-pressed={category === cat}
              onClick={() => setCategory(cat)}
            >
              {categoryName(cat)}{" "}
              <sup>{projects.filter((p) => p.cat === cat).length}</sup>
            </button>
          ))}
        </div>
        <label className="search">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <circle cx="10" cy="10" r="6" />
            <path d="m15 15 5 5" />
          </svg>
          <input
            aria-label="Search portfolio"
            placeholder="Search projects"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button onClick={() => setQuery("")} aria-label="Clear search">
              ×
            </button>
          )}
        </label>
      </div>
      <p className="sr-only" role="status">
        {filtered.length} projects shown
      </p>
      {loadState === "offline" && (
        <p className="connection-note" role="status">
          Showing the saved portfolio. Latest updates are temporarily
          unavailable.
        </p>
      )}
      <div className="project-grid">
        {ordered.map((p, i) => (
          <a
            className={`project-card card-${i % 4}`}
            href={`/project/${encodeURIComponent(p.id)}`}
            key={p.id}
            onClick={(e) => {
              e.preventDefault();
              go(`/project/${encodeURIComponent(p.id)}`);
            }}
          >
            <div className="project-art">
              <Artwork src={imagesFor(p)[0]} alt={p.title} eager={i < 2} />
              <span className="project-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="project-open" aria-hidden="true">
                <Arrow diagonal />
              </span>
              {imagesFor(p).length > 1 && (
                <span className="image-count">
                  {imagesFor(p).length} images
                </span>
              )}
            </div>
            <div className="project-caption">
              <h3>{p.title}</h3>
              <span>{categoryName(p.cat)}</span>
            </div>
          </a>
        ))}
      </div>
      {!filtered.length && (
        <div className="empty-state">
          <h3>
            {projects.length
              ? "No matching projects."
              : "Portfolio updates are on the way."}
          </h3>
          {projects.length > 0 && (
            <button
              className="button"
              onClick={() => {
                setCategory("all");
                setQuery("");
              }}
            >
              Reset filters <Arrow />
            </button>
          )}
        </div>
      )}
      <div className="work-end">
        <span>End of portfolio</span>
        <span className="end-mark" aria-hidden="true">
          ✳
        </span>
        <a href="#contact">Discuss a project ↗</a>
      </div>
    </section>
  );
}
function About({ data }) {
  const about = data.about || {},
    photo = safeUrl(about.photoUrl) || safeUrl(data.hero?.photoUrl);
  const experience = (data.experience || []).filter((x) => !x.hidden);
  const education = (data.education || []).filter((x) => !x.hidden);
  return (
    <section id="about" className="about section-wrap">
      <div className="section-top">
        <span className="eyebrow">02 / The person behind the work</span>
        <span className="eyebrow">Designer · Developer · AI artist</span>
      </div>
      <div className="about-grid">
        <div className="portrait-wrap">
          <Artwork src={photo} alt={NAME} />
          <div className="portrait-label">
            <span>Al-Amin</span>
            <span>Bangladesh ↗</span>
          </div>
        </div>
        <div className="about-copy">
          <h2>
            Al-Amin
            <br />
            <span>Bin Ashad Ali.</span>
          </h2>
          <p className="bio-lead">
            {about.bio1 ||
              "Graphic designer, website developer and AI artist based in Bangladesh."}
          </p>
          {about.bio2 && <p>{about.bio2}</p>}
          <div className="about-links">
            {safeUrl(data.hero?.cvLink) && (
              <a
                className="button"
                href={safeUrl(data.hero.cvLink)}
                target="_blank"
                rel="noopener noreferrer"
              >
                View résumé <Arrow diagonal />
              </a>
            )}
            <a href={`mailto:${EMAIL}`} className="text-link">
              Get in touch <Arrow diagonal />
            </a>
          </div>
          <div className="social-links">
            {[
              ["fb", "Facebook"],
              ["li", "LinkedIn"],
              ["ig", "Instagram"],
              ["beh", "Behance"],
            ].map(
              ([key, label]) =>
                safeUrl(data.social?.[key]) && (
                  <a
                    key={key}
                    href={safeUrl(data.social[key])}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label} ↗
                  </a>
                ),
            )}
          </div>
        </div>
      </div>
      <div id="experience" className="background-grid">
        <div>
          <h3 className="subheading">
            Experience <span>↗</span>
          </h3>
          {experience.map((x, i) => (
            <details key={x.id || i} className="timeline" open={i === 0}>
              <summary>
                <span>
                  <strong>{x.role}</strong>
                  <small>{x.company}</small>
                </span>
                <span className="timeline-period">
                  {x.period}
                  <b>+</b>
                </span>
              </summary>
              <p>{x.desc}</p>
              {x.tags?.length > 0 && (
                <div className="tags">
                  {x.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              )}
            </details>
          ))}
        </div>
        <div>
          <h3 className="subheading">
            Education <span>↗</span>
          </h3>
          {education.map((x, i) => (
            <div key={x.id || i} className="education">
              <span className="eyebrow">{x.period}</span>
              <h4>{x.degree}</h4>
              <p>
                {x.institution}
                {x.grade && ` · ${x.grade}`}
              </p>
            </div>
          ))}
          {(data.courses || []).filter((x) => !x.hidden).length > 0 && (
            <details className="courses">
              <summary>
                Training & professional development <span>+</span>
              </summary>
              {data.courses
                .filter((x) => !x.hidden)
                .map((x, i) => (
                  <div key={x.id || i}>
                    <strong>{x.title || x.name}</strong>
                    <p>
                      {x.institute || x.institution || x.platform || x.provider}
                      {(x.period || x.year) && ` · ${x.period || x.year}`}
                    </p>
                    {x.desc && <p>{x.desc}</p>}
                  </div>
                ))}
            </details>
          )}
        </div>
      </div>
    </section>
  );
}
function Expertise({ data }) {
  const skills = (data.skills || []).filter((x) => !x.hidden);
  return (
    <section id="expertise" className="expertise section-wrap">
      <div className="section-top">
        <span className="eyebrow">03 / Expertise</span>
        <span className="eyebrow">Creative & technical</span>
      </div>
      <h2>
        Design meets
        <br />
        <span className="outline-type">development.</span>
      </h2>
      <div className="expertise-rows">
        {[
          [
            "Graphic design",
            "Brand identities, packaging, print and social media design.",
          ],
          [
            "Website development",
            "Responsive websites, portfolio experiences and digital interfaces.",
          ],
          [
            "AI & motion",
            "AI artwork, visual exploration, video editing and motion graphics.",
          ],
        ].map(([title, desc], i) => (
          <div className="expertise-row" key={title}>
            <span className="eyebrow">0{i + 1}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
            <Arrow diagonal />
          </div>
        ))}
      </div>
      <div className="tools">
        <span className="eyebrow">Skills & tools</span>
        <div>
          {skills.map((x, i) => (
            <span key={x.id || i}>{x.name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
function Contact() {
  const [status, setStatus] = useState(""),
    [error, setError] = useState("");
  async function submit(e) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    if (values.website) return;
    setStatus("sending");
    setError("");
    try {
      await sendMessage(values);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError(
        "Your message could not be sent. Please email me directly or try again.",
      );
    }
  }
  return (
    <section id="contact" className="contact section-wrap">
      <div className="section-top">
        <span className="eyebrow">04 / Contact</span>
        <span className="eyebrow">Narayanganj, Bangladesh</span>
      </div>
      <div className="contact-heading">
        <h2>
          Have a project
          <br />
          in mind<span>?</span>
        </h2>
        <Arrow diagonal />
      </div>
      <div className="contact-grid">
        <div className="contact-details">
          <a className="email-link" href={`mailto:${EMAIL}`}>
            {EMAIL}
            <Arrow diagonal />
          </a>
          <a href="tel:+8801731186929">+880 1731-186929</a>
          <a
            href="https://wa.me/8801731186929"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp ↗
          </a>
          <a
            href="https://www.fiverr.com/binashad?public_mode=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fiverr profile ↗
          </a>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="form-pair">
            <label>
              Your name
              <input
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                placeholder="Name"
              />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={200}
                placeholder="Email"
              />
            </label>
          </div>
          <label>
            Tell me about your project
            <textarea
              name="message"
              required
              maxLength={5000}
              rows={3}
              placeholder="A little about what you have in mind…"
            />
          </label>
          <label className="honeypot" aria-hidden="true">
            Website
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
          <button className="button light" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send enquiry"}
            <Arrow />
          </button>
          <p role="status">
            {status === "sent"
              ? "Thank you. Your message has been received."
              : error}
          </p>
        </form>
      </div>
    </section>
  );
}
function Project({ project, projects, loading, go }) {
  const [lightbox, setLightbox] = useState(-1),
    dialog = useRef(null),
    backFocus = useRef(null);
  const imgs = project ? imagesFor(project) : [];
  useEffect(() => {
    setLightbox(-1);
  }, [project?.id]);
  useEffect(() => {
    if (lightbox < 0) return;
    backFocus.current = document.activeElement;
    dialog.current?.showModal();
    const before = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.current?.close();
      document.body.style.overflow = before;
      backFocus.current?.focus();
    };
  }, [lightbox >= 0]);
  if (!project)
    return (
      <section className="not-found">
        <h1>{loading ? "Opening project…" : "Project not found."}</h1>
        <a
          href="/#work"
          onClick={(e) => {
            e.preventDefault();
            go("/#work");
          }}
        >
          Return to portfolio ↗
        </a>
      </section>
    );
  const next =
      projects[
        (projects.findIndex((p) => p.id === project.id) + 1) % projects.length
      ],
    embed = videoEmbed(project.videoUrl);
  return (
    <article className="project-page section-wrap">
      <a
        className="back-link"
        href="/#work"
        onClick={(e) => {
          e.preventDefault();
          go("/#work");
        }}
      >
        ← All projects
      </a>
      <div className="project-title">
        <span className="eyebrow">{categoryName(project.cat)}</span>
        <h1>{project.title}</h1>
      </div>
      <div className="project-description">
        <p>{project.desc || project.description || ""}</p>
        <div>
          {project.client && (
            <p>
              <small>Client</small>
              {project.client}
            </p>
          )}
          {project.year && (
            <p>
              <small>Year</small>
              {project.year}
            </p>
          )}
          {project.tech?.length > 0 && (
            <div className="tags">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          )}
          {safeUrl(project.siteUrl) && project.showLiveBtn !== false && (
            <a
              className="button"
              href={safeUrl(project.siteUrl)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit project <Arrow diagonal />
            </a>
          )}
        </div>
      </div>
      {project.caseStudy?.length > 0 && (
        <section className="case-study" aria-label="Project design details">
          {project.caseStudy.map((section, i) => (
            <div key={i}>
              <span className="eyebrow">0{i + 1} / Process & presentation</span>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </div>
          ))}
        </section>
      )}
      <div
        className={
          project.cat === "packaging"
            ? "project-gallery packaging-gallery"
            : "project-gallery"
        }
      >
        {imgs.map((img, i) => (
          <figure key={img}>
            <button
              onClick={() => setLightbox(i)}
              aria-label={`View image ${i + 1} full screen`}
            >
              <Artwork
                src={img}
                alt={
                  project.gallery?.find((g) => g.src === img)?.caption ||
                  `${project.title} — image ${i + 1}`
                }
                eager={i === 0}
              />
              <span className="gallery-expand" aria-hidden="true">
                ⤢
              </span>
            </button>
            <figcaption>
              {String(i + 1).padStart(2, "0")} /{" "}
              {String(imgs.length).padStart(2, "0")}
              <span className="artwork-caption">
                {project.gallery?.find((g) => g.src === img)?.caption}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      {embed ? (
        <iframe
          className="project-video"
          src={embed}
          title={`${project.title} video`}
          allow="fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        safeUrl(project.videoUrl) && (
          <a
            className="button"
            href={safeUrl(project.videoUrl)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch video <Arrow diagonal />
          </a>
        )
      )}
      {!imgs.length && !project.videoUrl && (
        <p className="empty-state">
          Artwork for this project is being updated.
        </p>
      )}
      {next && next.id !== project.id && (
        <a
          className="next-project"
          href={`/project/${encodeURIComponent(next.id)}`}
          onClick={(e) => {
            e.preventDefault();
            go(`/project/${encodeURIComponent(next.id)}`);
          }}
        >
          <span className="eyebrow">Next project</span>
          <h2>{next.title}</h2>
          <Arrow diagonal />
        </a>
      )}
      {lightbox >= 0 && (
        <dialog
          ref={dialog}
          className="lightbox"
          aria-label={project.title}
          onCancel={(e) => {
            e.preventDefault();
            setLightbox(-1);
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightbox(-1);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") {
              e.preventDefault();
              setLightbox((lightbox + 1) % imgs.length);
            }
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              setLightbox((lightbox + imgs.length - 1) % imgs.length);
            }
          }}
        >
          <button
            className="lightbox-close"
            autoFocus
            onClick={() => setLightbox(-1)}
            aria-label="Close full screen image"
          >
            Close ×
          </button>
          <Artwork
            src={imgs[lightbox]}
            alt={`${project.title} — image ${lightbox + 1}`}
            eager
          />
          <div className="lightbox-controls">
            <button
              disabled={imgs.length < 2}
              aria-label="Previous image"
              onClick={() =>
                setLightbox((lightbox + imgs.length - 1) % imgs.length)
              }
            >
              ←
            </button>
            <span aria-live="polite">
              {lightbox + 1} / {imgs.length}
            </span>
            <button
              disabled={imgs.length < 2}
              aria-label="Next image"
              onClick={() => setLightbox((lightbox + 1) % imgs.length)}
            >
              →
            </button>
          </div>
        </dialog>
      )}
    </article>
  );
}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }
  static getDerivedStateFromError() {
    return { error: true };
  }
  render() {
    return this.state.error ? (
      <main className="not-found">
        <h1>Something went wrong.</h1>
        <p>Please reload the page or contact me directly.</p>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </main>
    ) : (
      this.props.children
    );
  }
}
getDOM()
  .createRoot(document.getElementById("root"))
  .render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>,
  );
