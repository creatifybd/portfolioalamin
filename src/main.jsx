import { f as getReact, d as getDOM } from "./vendor.js";
import profile from "./profile.json";
import savedProjects from "./projects.json";
import curatedProjects from "./featured-projects.json";
import CartonStudy from "./CartonStudy.jsx";
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
const NAME = "MD. AL-AMIN ALI",
  EMAIL = "binashad7@gmail.com";
// Art direction lives around the original artwork, never inside it.
function productTone(project, image = "") {
  if (/homecare-(06|08|12|13|20|25|26)/.test(image)) {
    return /homecare-25/.test(image) ? "citrus" : "amber";
  }
  if (/glasso|flush|nova|supreme/.test(project.id)) return "glacier";
  if (/sharo|nolive/.test(project.id)) return "lilac";
  if (/rio|revx|elite|optima/.test(project.id)) return "ember";
  if (/orbit/.test(project.id)) return "amber";
  return "citrus";
}
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
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(
        ".project-card, .background-grid, .expertise-row, .case-study > div",
      )
      .forEach((el) => {
        el.classList.add("reveal-ready");
        observer.observe(el);
      });
    return () => observer.disconnect();
  }, [path, data]);
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
            ["about", "About"],
            ["work", "Work"],
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
            <About data={data} />
            <Work projects={projects} go={go} loadState={loadState} />
            <Expertise data={data} />
            <Background data={data} />
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
function Work({ projects, go, loadState }) {
  const [category, setCategory] = useState("all"),
    [query, setQuery] = useState("");
  const [limit, setLimit] = useState(8);
  useEffect(() => setLimit(8), [category, query]);
  const cats = [...new Set(projects.map((p) => p.cat))];
  const filtered = filterProjects(projects, category, query);
  const ordered = [...filtered].sort(
    (a, b) => Number(!!b.featured) - Number(!!a.featured),
  );
  return (
    <section id="work" className="work section-wrap">
      <div className="section-top">
        <span className="eyebrow">02 / Portfolio</span>
        <span className="eyebrow">
          {String(projects.length).padStart(2, "0")} projects
        </span>
      </div>
      <div className="work-heading">
        <h2>
          Selected work<span className="blue">.</span>
        </h2>
        <p>
          Brand identities, packaging, advertising and websites.
          <br />
          Explore the projects and the thinking behind them.
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
        {Math.min(limit, filtered.length)} of {filtered.length} projects shown
      </p>
      {loadState === "offline" && (
        <p className="connection-note" role="status">
          Showing the saved portfolio. Latest updates are temporarily
          unavailable.
        </p>
      )}
      <div className="project-grid">
        {ordered.slice(0, limit).map((p, i) => (
          <a
            className={`project-card card-${i % 4} ${p.cat === "web" ? "web-card" : p.cat === "advertising" ? "campaign-card" : ""}`}
            href={`/project/${encodeURIComponent(p.id)}`}
            key={p.id}
            onClick={(e) => {
              e.preventDefault();
              go(`/project/${encodeURIComponent(p.id)}`);
            }}
          >
            <div className={`project-art ${p.cat === "packaging" ? "product-stage" : ""}`} data-tone={productTone(p, imagesFor(p)[0])}>
              {p.cat === "web" && (
                <div className="browser-bar">
                  <span>● ● ●</span>
                  <small>
                    {safeUrl(p.siteUrl)
                      ? new URL(safeUrl(p.siteUrl)).hostname
                      : "Website project"}
                  </small>
                  <span>↗</span>
                </div>
              )}
              <Artwork src={imagesFor(p)[0]} alt={p.title} eager={i < 2} />
              <span className="project-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="project-open" aria-hidden="true">
                <Arrow diagonal />
              </span>
              {imagesFor(p).length > 1 && (
                <span className="image-count">
                  {imagesFor(p).length} views{p.gallery?.some(g => g.kind === "artwork") ? " · Artwork included" : ""}
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
      {ordered.length > limit && <div className="load-projects"><span>{Math.min(limit, ordered.length)} / {ordered.length} projects</span><button className="button" onClick={() => setLimit(n => n + 8)}>Show more projects <Arrow /></button></div>}
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
        <span>{Math.min(limit, ordered.length)} of {ordered.length} projects</span>
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
        <span className="eyebrow">01 / About me</span>
        <span className="eyebrow">Designer · Developer · AI artist</span>
      </div>
      <div className="about-grid">
        <div className="portrait-wrap">
          <Artwork src={photo} alt={NAME} eager />
          <div className="portrait-label">
            <span>Al-Amin</span>
            <span>Bangladesh ↗</span>
          </div>
        </div>
        <div className="about-copy">
          <p className="intro-role eyebrow">
            Graphic designer &amp; website developer
          </p>
          <h1>
            MD. AL-AMIN
            <br />
            <span>
              ALI<span className="blue">.</span>
            </span>
          </h1>
          <p className="bio-lead">
            {about.bio1 ||
              "Graphic designer, website developer and AI artist based in Bangladesh."}
          </p>
          
          <div className="about-links">
            <a className="button solid" href="#work">
              Explore my work <Arrow diagonal />
            </a>
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

    </section>
  );
}
function Background({ data }) {
  const experience = (data.experience || []).filter(x => !x.hidden);
  const education = (data.education || []).filter(x => !x.hidden);
  return <section className="career section-wrap" aria-label="Professional background">
    <div className="section-top"><span className="eyebrow">04 / Background</span><span className="eyebrow">Experience & education</span></div>
    {data.about?.bio2 && <p className="career-intro">{data.about.bio2}</p>}
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
  </section>;
}
function Expertise({ data }) {
  const skills = (data.skills || []).filter((x) => !x.hidden);
  return (
    <section id="expertise" className="expertise section-wrap">
      <div className="section-top">
        <span className="eyebrow">03 / Expertise</span>
        <span className="eyebrow">Creative & technical</span>
      </div>
      <h2>Creative expertise<span className="blue">.</span></h2>
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
        <span className="eyebrow">05 / Contact</span>
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
  const cartons = project?.gallery?.filter(item => item.carton) || [];
  const [zoomed, setZoomed] = useState(false);
  useEffect(() => setZoomed(false), [lightbox]);
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
      {imgs.some(img => project.gallery?.find(g => g.src === img)?.kind === "artwork") && (
        <nav className="project-chapters" aria-label="Project presentation chapters">
          <a href="#mockups">01 / Mockup presentation</a>
          {cartons.length > 0 && <a href="#cartons">02 / Carton studies</a>}
          <a href="#artwork">{cartons.length ? "03" : "02"} / Original artwork</a>
        </nav>
      )}
      {[
        {id: "mockups", title: "The finished form", subtitle: "Mockup presentation", flat: false},
        {id: "cartons"},
        {id: "artwork", title: "Behind the packaging", subtitle: "Original artwork", flat: true}
      ].map(group => {
        if (group.id === "cartons") return cartons.length > 0 ? <CartonStudy key={project.id} items={cartons} onOpen={src => setLightbox(imgs.indexOf(src))} /> : null;
        const entries = imgs.map((img, index) => ({img, index, meta: project.gallery?.find(g => g.src === img)}))
          .filter(item => (item.meta?.kind === "artwork") === group.flat);
        if (!entries.length) return null;
        const hasArtwork = imgs.some(img => project.gallery?.find(g => g.src === img)?.kind === "artwork");
        return <section id={group.id} className="presentation-chapter" key={group.id} aria-label={group.subtitle}>
          {hasArtwork && <header className="chapter-heading">
            <div><span className="eyebrow">{group.flat ? (cartons.length ? "03" : "02") : "01"} / {group.subtitle}</span><h2>{group.title}</h2></div>
            <p>{group.flat ? "Explore the supplied labels, reverse panels and dielines. Open an image and zoom in to inspect the details." : "See the packaging in context, then explore the original design artwork below."}</p>
          </header>}
          <div className={group.flat ? "project-gallery artwork-gallery" : project.cat === "packaging" ? "project-gallery packaging-gallery" : project.cat === "advertising" ? "project-gallery campaign-gallery" : "project-gallery"}>
            {entries.map(({img, index, meta}) => <figure key={img} data-tone={productTone(project, img)} className={group.flat && meta?.width > meta?.height ? "artwork-wide" : ""}>
              <button className={!group.flat && project.cat === "packaging" ? "product-stage" : "artwork-surface"}
                onClick={() => setLightbox(index)} aria-label={`View image ${index + 1} full screen`}>
                <Artwork src={img} alt={meta?.caption || `${project.title} — image ${index + 1}`} eager={index === 0} />
                <span className="gallery-expand" aria-hidden="true">⤢</span>
              </button>
              <figcaption><span className="eyebrow">{group.flat ? "Artwork" : "View"} {String(entries.findIndex(e => e.img === img) + 1).padStart(2,"0")}</span><span className="artwork-caption">{meta?.caption}</span></figcaption>
            </figure>)}
          </div>
        </section>;
      })}

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
      {project.relatedProjects?.length > 0 && <aside className="related-packaging" aria-label="Related projects">
        <span className="eyebrow">Explore related projects</span>
        {project.relatedProjects.map(id => { const item = projects.find(p => p.id === id); return item ? <a key={id} className="button" href={`/project/${id}`} onClick={e => {e.preventDefault();go(`/project/${id}`);}}>{item.title} <Arrow diagonal /></a> : null; })}
      </aside>}
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
          <button className="lightbox-zoom" onClick={() => setZoomed(value => !value)} aria-pressed={zoomed}>{zoomed ? "Fit to screen" : "Zoom details +"}</button>
          <div className={`lightbox-viewport ${zoomed ? "is-zoomed" : ""}`} key={`${lightbox}-${zoomed}`}>
            <Artwork src={imgs[lightbox]} alt={project.gallery?.find(g => g.src === imgs[lightbox])?.caption || `${project.title} — image ${lightbox + 1}`} eager />
          </div>
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
