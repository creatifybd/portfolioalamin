import "./global.css";
const __vite__mapDeps = () => [];
import { a as e, i as t, n, r, t as i } from "./rolldown-runtime.js";
import {
  a,
  c as o,
  d as s,
  f as c,
  i as l,
  n as u,
  o as d,
  r as f,
  s as p,
  t as m,
  u as h,
} from "./vendor.js";
import {
  C as g,
  S as _,
  T as v,
  _ as y,
  a as b,
  b as x,
  c as S,
  d as ee,
  f as te,
  g as C,
  h as ne,
  i as re,
  l as ie,
  m as ae,
  n as oe,
  o as se,
  p as ce,
  r as le,
  s as ue,
  t as de,
  u as fe,
  v as pe,
  w as me,
  x as w,
  y as he,
} from "./firebase.js";
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === `use-credentials`
        ? (t.credentials = `include`)
        : e.crossOrigin === `anonymous`
          ? (t.credentials = `omit`)
          : (t.credentials = `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var ge = i((e, t) => {
    (function (n, r) {
      typeof define == `function` && define.amd
        ? define(r)
        : typeof e == `object`
          ? (t.exports = r())
          : (n.NProgress = r());
    })(e, function () {
      var e = {};
      e.version = `0.2.0`;
      var t = (e.settings = {
        minimum: 0.08,
        easing: `ease`,
        positionUsing: ``,
        speed: 200,
        trickle: !0,
        trickleRate: 0.02,
        trickleSpeed: 800,
        showSpinner: !0,
        barSelector: `[role="bar"]`,
        spinnerSelector: `[role="spinner"]`,
        parent: `body`,
        template: `<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>`,
      });
      ((e.configure = function (e) {
        var n, r;
        for (n in e)
          ((r = e[n]), r !== void 0 && e.hasOwnProperty(n) && (t[n] = r));
        return this;
      }),
        (e.status = null),
        (e.set = function (r) {
          var s = e.isStarted();
          ((r = n(r, t.minimum, 1)), (e.status = r === 1 ? null : r));
          var c = e.render(!s),
            l = c.querySelector(t.barSelector),
            u = t.speed,
            d = t.easing;
          return (
            c.offsetWidth,
            a(function (n) {
              (t.positionUsing === `` &&
                (t.positionUsing = e.getPositioningCSS()),
                o(l, i(r, u, d)),
                r === 1
                  ? (o(c, { transition: `none`, opacity: 1 }),
                    c.offsetWidth,
                    setTimeout(function () {
                      (o(c, {
                        transition: `all ` + u + `ms linear`,
                        opacity: 0,
                      }),
                        setTimeout(function () {
                          (e.remove(), n());
                        }, u));
                    }, u))
                  : setTimeout(n, u));
            }),
            this
          );
        }),
        (e.isStarted = function () {
          return typeof e.status == `number`;
        }),
        (e.start = function () {
          e.status || e.set(0);
          var n = function () {
            setTimeout(function () {
              e.status && (e.trickle(), n());
            }, t.trickleSpeed);
          };
          return (t.trickle && n(), this);
        }),
        (e.done = function (t) {
          return !t && !e.status
            ? this
            : e.inc(0.3 + 0.5 * Math.random()).set(1);
        }),
        (e.inc = function (t) {
          var r = e.status;
          return r
            ? (typeof t != `number` &&
                (t = (1 - r) * n(Math.random() * r, 0.1, 0.95)),
              (r = n(r + t, 0, 0.994)),
              e.set(r))
            : e.start();
        }),
        (e.trickle = function () {
          return e.inc(Math.random() * t.trickleRate);
        }),
        (function () {
          var t = 0,
            n = 0;
          e.promise = function (r) {
            return !r || r.state() === `resolved`
              ? this
              : (n === 0 && e.start(),
                t++,
                n++,
                r.always(function () {
                  (n--, n === 0 ? ((t = 0), e.done()) : e.set((t - n) / t));
                }),
                this);
          };
        })(),
        (e.render = function (n) {
          if (e.isRendered()) return document.getElementById(`nprogress`);
          c(document.documentElement, `nprogress-busy`);
          var i = document.createElement(`div`);
          ((i.id = `nprogress`), (i.innerHTML = t.template));
          var a = i.querySelector(t.barSelector),
            s = n ? `-100` : r(e.status || 0),
            l = document.querySelector(t.parent),
            u;
          return (
            o(a, {
              transition: `all 0 linear`,
              transform: `translate3d(` + s + `%,0,0)`,
            }),
            t.showSpinner ||
              ((u = i.querySelector(t.spinnerSelector)), u && d(u)),
            l != document.body && c(l, `nprogress-custom-parent`),
            l.appendChild(i),
            i
          );
        }),
        (e.remove = function () {
          (l(document.documentElement, `nprogress-busy`),
            l(document.querySelector(t.parent), `nprogress-custom-parent`));
          var e = document.getElementById(`nprogress`);
          e && d(e);
        }),
        (e.isRendered = function () {
          return !!document.getElementById(`nprogress`);
        }),
        (e.getPositioningCSS = function () {
          var e = document.body.style,
            t =
              `WebkitTransform` in e
                ? `Webkit`
                : `MozTransform` in e
                  ? `Moz`
                  : `msTransform` in e
                    ? `ms`
                    : `OTransform` in e
                      ? `O`
                      : ``;
          return t + `Perspective` in e
            ? `translate3d`
            : t + `Transform` in e
              ? `translate`
              : `margin`;
        }));
      function n(e, t, n) {
        return e < t ? t : e > n ? n : e;
      }
      function r(e) {
        return (-1 + e) * 100;
      }
      function i(e, n, i) {
        var a =
          t.positionUsing === `translate3d`
            ? { transform: `translate3d(` + r(e) + `%,0,0)` }
            : t.positionUsing === `translate`
              ? { transform: `translate(` + r(e) + `%,0)` }
              : { "margin-left": r(e) + `%` };
        return ((a.transition = `all ` + n + `ms ` + i), a);
      }
      var a = (function () {
          var e = [];
          function t() {
            var n = e.shift();
            n && n(t);
          }
          return function (n) {
            (e.push(n), e.length == 1 && t());
          };
        })(),
        o = (function () {
          var e = [`Webkit`, `O`, `Moz`, `ms`],
            t = {};
          function n(e) {
            return e
              .replace(/^-ms-/, `ms-`)
              .replace(/-([\da-z])/gi, function (e, t) {
                return t.toUpperCase();
              });
          }
          function r(t) {
            var n = document.body.style;
            if (t in n) return t;
            for (
              var r = e.length, i = t.charAt(0).toUpperCase() + t.slice(1), a;
              r--;
            )
              if (((a = e[r] + i), a in n)) return a;
            return t;
          }
          function i(e) {
            return ((e = n(e)), t[e] || (t[e] = r(e)));
          }
          function a(e, t, n) {
            ((t = i(t)), (e.style[t] = n));
          }
          return function (e, t) {
            var n = arguments,
              r,
              i;
            if (n.length == 2)
              for (r in t)
                ((i = t[r]), i !== void 0 && t.hasOwnProperty(r) && a(e, r, i));
            else a(e, n[1], n[2]);
          };
        })();
      function s(e, t) {
        return (typeof e == `string` ? e : u(e)).indexOf(` ` + t + ` `) >= 0;
      }
      function c(e, t) {
        var n = u(e),
          r = n + t;
        s(n, t) || (e.className = r.substring(1));
      }
      function l(e, t) {
        var n = u(e),
          r;
        s(e, t) &&
          ((r = n.replace(` ` + t + ` `, ` `)),
          (e.className = r.substring(1, r.length - 1)));
      }
      function u(e) {
        return (` ` + (e.className || ``) + ` `).replace(/\s+/gi, ` `);
      }
      function d(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      }
      return e;
    });
  }),
  T = e(c(), 1),
  _e = e(s(), 1),
  ve = e(ge(), 1);
g();
var ye = he({
    apiKey: `AIzaSyCsdBzEBL-6lVMQ6MV1MxxuTpSBzE8jYxg`,
    authDomain: `portfolio-alamin-79c1d.firebaseapp.com`,
    projectId: `portfolio-alamin-79c1d`,
    storageBucket: `portfolio-alamin-79c1d.firebasestorage.app`,
    messagingSenderId: `1071926494881`,
    appId: `1:1071926494881:web:207e27f6fdeb46739dd2e0`,
    measurementId: `G-7CG50BBNZ0`,
  }),
  be = y(ye),
  xe = le(ye),
  Se = new de();
b(xe, oe).catch(console.error);
var Ce = [
  `binashad7@gmail.com`,
  `alaminbinashadali777@gmail.com`,
  `alaminashiq46800864@gmail.com`,
];
function we(e, t) {
  return Te.apply(this, arguments);
}
function Te() {
  return (
    (Te = w(function* (e, t) {
      var n;
      let r = t;
      if (!r)
        throw Error(
          `Configure your image upload key in the admin settings first.`,
        );
      let i = new FormData();
      i.append(`image`, e);
      let a = yield (yield fetch(`https://api.imgbb.com/1/upload?key=${r}`, {
        method: `POST`,
        body: i,
      })).json();
      if (!a.success)
        throw Error(
          ((n = a.error) == null ? void 0 : n.message) || `ImgBB upload failed`,
        );
      return {
        url: a.data.url,
        displayUrl: a.data.display_url,
        size: a.data.size,
      };
    })),
    Te.apply(this, arguments)
  );
}
function Ee() {
  return De.apply(this, arguments);
}
function De() {
  return (
    (De = w(function* () {
      let e = yield se(xe, Se),
        t = e.user.email;
      if (!Ce.includes(t)) throw (yield ue(xe), Error(`unauthorized`));
      return e.user;
    })),
    De.apply(this, arguments)
  );
}
function Oe() {
  return ke.apply(this, arguments);
}
function ke() {
  return (
    (ke = w(function* () {
      yield ue(xe);
    })),
    ke.apply(this, arguments)
  );
}
function Ae(e) {
  return re(xe, (t) => {
    e(t && Ce.includes(t.email) ? t : null);
  });
}
function je() {
  return Me.apply(this, arguments);
}
function Me() {
  return (
    (Me = w(function* () {
      try {
        let e = yield fe(C(be, `site`, `config`));
        return e.exists() ? e.data() : null;
      } catch (e) {
        return null;
      }
    })),
    Me.apply(this, arguments)
  );
}
function Ne(e) {
  return Pe.apply(this, arguments);
}
function Pe() {
  return (
    (Pe = w(function* (e) {
      try {
        return (yield ae(C(be, `site`, `config`), e), !0);
      } catch (e) {
        return !1;
      }
    })),
    Pe.apply(this, arguments)
  );
}
function Fe(e) {
  return Ie.apply(this, arguments);
}
function Ie() {
  return (
    (Ie = w(function* (e) {
      try {
        return (yield S(
          ne(be, `messages`),
          _(_({}, e), {}, { read: !1, createdAt: pe() }),
        )).id;
      } catch (e) {
        throw e;
      }
    })),
    Ie.apply(this, arguments)
  );
}
function Le(e) {
  return ee(ce(ne(be, `messages`), te(`createdAt`, `desc`)), (t) => {
    e(t.docs.map((e) => _({ id: e.id }, e.data())));
  });
}
function Re(e) {
  return ze.apply(this, arguments);
}
function ze() {
  return (
    (ze = w(function* (e) {
      yield ae(C(be, `messages`, e), { read: !0 }, { merge: !0 });
    })),
    ze.apply(this, arguments)
  );
}
function Be(e) {
  return Ve.apply(this, arguments);
}
function Ve() {
  return (
    (Ve = w(function* (e) {
      yield ie(C(be, `messages`, e));
    })),
    Ve.apply(this, arguments)
  );
}
function He(e) {
  return Ue.apply(this, arguments);
}
function Ue() {
  return (
    (Ue = w(function* (e) {
      try {
        return (yield ae(C(be, `site`, `apikeys`), e, { merge: !0 }), !0);
      } catch (e) {
        return !1;
      }
    })),
    Ue.apply(this, arguments)
  );
}
function We() {
  return Ge.apply(this, arguments);
}
function Ge() {
  return (
    (Ge = w(function* () {
      try {
        let e = yield fe(C(be, `site`, `apikeys`));
        return e.exists() ? e.data() : {};
      } catch (e) {
        return {};
      }
    })),
    Ge.apply(this, arguments)
  );
}
function Ke(e) {
  return ee(
    C(be, `site`, `apikeys`),
    (t) => {
      e(t.exists() ? t.data() : {});
    },
    () => e({}),
  );
}
function qe(e) {
  return Je.apply(this, arguments);
}
function Je() {
  return (
    (Je = w(function* (e) {
      try {
        return (yield ae(C(be, `site`, `client_keys`), e, { merge: !0 }), !0);
      } catch (e) {
        return !1;
      }
    })),
    Je.apply(this, arguments)
  );
}
function Ye() {
  return Xe.apply(this, arguments);
}
function Xe() {
  return (
    (Xe = w(function* () {
      try {
        let e = yield fe(C(be, `site`, `client_keys`));
        return e.exists() ? e.data() : {};
      } catch (e) {
        return {};
      }
    })),
    Xe.apply(this, arguments)
  );
}
function Ze(e) {
  return ee(
    C(be, `site`, `client_keys`),
    (t) => {
      e(t.exists() ? t.data() : {});
    },
    () => e({}),
  );
}
v();
var Qe = {
    hero: {
      photoUrl: ``,
      typewriterTexts: [
        `Strategic Brand Identity Specialist`,
        `Expert AI Solutions Architect`,
        `Creative Director & Visual Storyteller`,
        `Digital Transformation Consultant`,
      ],
      description: `Transforming businesses through strategic design and cutting-edge AI integration. 8+ years of experience delivering premium visual solutions that drive growth and engagement.`,
      statYears: 8,
      statProjects: 200,
      statClients: 50,
      statStudents: 150,
      cvLink: `#`,
    },
    about: {
      bio1: `I'm Al-Amin Bin Ashad Ali — a passionate Graphic Designer, AI Expert, and Creative Director with over 8 years of hands-on industry experience. From leading creative teams at VIVID to managing design operations at WithUs Visa Consultancy and Nazrul & Brothers Ltd, I've built a career around turning bold ideas into compelling visual stories that drive real results for clients worldwide.`,
      bio2: `Beyond design, I'm a dedicated Computer Trainer who has empowered 150+ students with practical digital skills. I combine deep expertise in graphic design, AI-powered tools, brand identity, website design, video production, and social media marketing — delivering next-level creative solutions that help businesses stand out in competitive markets.`,
      photoUrl: `https://i.ibb.co/5Xcnf9mm/592997003-2565949163762644-8587364915638335487-n.jpg`,
      tags: [
        `Graphic Design`,
        `AI Expert`,
        `Brand Identity`,
        `Website Design`,
        `Video Editing`,
        `Social Media Marketing`,
        `Computer Trainer`,
        `Creative Direction`,
        `Facebook Page Management`,
      ],
    },
    services: [
      {
        id: `s1`,
        title: `Graphic Design`,
        icon: `fas fa-palette`,
        desc: `From logos and brand identities to marketing materials and social media graphics — I craft visually stunning designs that communicate your brand's story with impact and precision.`,
        hidden: !1,
      },
      {
        id: `s2`,
        title: `AI-Powered Design`,
        icon: `fas fa-robot`,
        desc: `Leveraging cutting-edge AI tools to supercharge the creative process — generating unique concepts, automating workflows, and delivering innovative design solutions faster than ever before.`,
        hidden: !1,
      },
      {
        id: `s3`,
        title: `Website Design`,
        icon: `fas fa-laptop-code`,
        desc: `Clean, modern, and conversion-focused website designs. I create pixel-perfect UI layouts and fully responsive web designs that look great on every device and leave a lasting impression.`,
        hidden: !1,
      },
      {
        id: `s4`,
        title: `Video Editing & Motion`,
        icon: `fas fa-film`,
        desc: `Professional video editing, motion graphics, and visual storytelling that captivate audiences. From promotional reels to social media content — I bring your brand to life through motion.`,
        hidden: !1,
      },
      {
        id: `s5`,
        title: `Brand Identity & Strategy`,
        icon: `fas fa-copyright`,
        desc: `Complete brand identity systems including logo design, color palettes, typography, brand guidelines, and visual strategy — everything your business needs to build a memorable and consistent brand presence.`,
        hidden: !1,
      },
      {
        id: `s6`,
        title: `Social Media Marketing`,
        icon: `fas fa-bullhorn`,
        desc: `Strategic social media content creation and Facebook page management that grows your audience, boosts engagement, and converts followers into loyal customers for your business.`,
        hidden: !1,
      },
    ],
    experience: [
      {
        id: `e1`,
        role: `Executive - Graphic Design`,
        company: `Nazrul & Brothers Ltd`,
        period: `2026 – Present`,
        desc: `Leading all graphic design operations including brand visual development, website design, and Facebook page management. Responsible for creating high-impact marketing materials and maintaining consistent brand identity across all digital and print platforms.`,
        tags: [
          `Graphic Design`,
          `Website Design`,
          `Facebook Page Management`,
          `Social Media Marketing`,
        ],
        hidden: !1,
      },
      {
        id: `e2`,
        role: `Senior Documentation Executive`,
        company: `WithUs Visa Consultancy`,
        period: `2024 – 2026`,
        desc: `Led and supervised the entire documentation team, overseeing end-to-end documentation processes for visa consultancy services. Designed all client-facing marketing materials, managed social media creative assets, and played a key role in establishing the brand's professional visual identity.`,
        tags: [
          `Documentation`,
          `Team Lead`,
          `Graphic Design`,
          `Social Media Marketing`,
        ],
        hidden: !1,
      },
      {
        id: `e3`,
        role: `Creative Director`,
        company: `VIVID`,
        period: `2019 – 2024`,
        desc: `Spearheaded all creative and marketing initiatives as Creative Director over a 5-year tenure. Built and managed a high-performing creative team, developed comprehensive brand guidelines for diverse clients, designed promotional materials across print and digital media, and drove the agency's creative vision from concept to execution.`,
        tags: [
          `Creative Direction`,
          `Branding`,
          `Team Management`,
          `Marketing`,
          `Graphic Design`,
        ],
        hidden: !1,
      },
      {
        id: `e4`,
        role: `Computer Trainer & Digital Skills Educator`,
        company: `Self-Employed / Freelance`,
        period: `2019 – Present`,
        desc: `Trained 150+ students in practical computer skills, graphic design fundamentals, digital marketing, and AI tools. Passionate about empowering the next generation of digital professionals through hands-on, result-oriented training programs.`,
        tags: [
          `Computer Training`,
          `Graphic Design Education`,
          `Digital Skills`,
          `AI Tools`,
        ],
        hidden: !1,
      },
    ],
    education: [
      {
        id: `edu1`,
        degree: `BBA (Accounting)`,
        institution: `Hazi Misir Ali University`,
        period: `2020 – 2021 Session`,
        grade: ``,
        hidden: !1,
      },
      {
        id: `edu2`,
        degree: `HSC — Business Studies`,
        institution: `Govt. Tolaram College`,
        period: `2020`,
        grade: `GPA 4.17`,
        hidden: !1,
      },
      {
        id: `edu3`,
        degree: `SSC — Business Studies`,
        institution: `Joygobinda High School`,
        period: `2018`,
        grade: `GPA 4.00`,
        hidden: !1,
      },
    ],
    portfolio: [
      {
        id: `p1`,
        title: `LuxeBrand — Full Identity System`,
        cat: `branding`,
        imgUrl: `https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80&fm=webp`,
        videoUrl: ``,
        siteUrl: `https://behance.net`,
        aspectRatio: `1:1`,
        tech: [`illustrator`, `photoshop`, `figma`],
        hidden: !1,
      },
      {
        id: `p2`,
        title: `NovaTech — SaaS Website Design`,
        cat: `web`,
        imgUrl: `https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80&fm=webp`,
        videoUrl: ``,
        siteUrl: `https://dribbble.com`,
        aspectRatio: `16:9`,
        tech: [`figma`, `react`, `firebase`],
        hidden: !1,
      },
      {
        id: `p3`,
        title: `Social Media Campaign Kit`,
        cat: `graphic`,
        imgUrl: `https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=80&fm=webp`,
        videoUrl: ``,
        siteUrl: ``,
        tech: [`canva`, `photoshop`],
        hidden: !1,
      },
      {
        id: `p4`,
        title: `AI Art Series — Dreamscapes`,
        cat: `ai`,
        imgUrl: `https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=900&q=80&fm=webp`,
        videoUrl: ``,
        siteUrl: ``,
        tech: [`midjourney`, `photoshop`],
        hidden: !1,
      },
      {
        id: `p5`,
        title: `Promotional Brand Reel`,
        cat: `video`,
        imgUrl: `https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&q=80&fm=webp`,
        videoUrl: `https://www.youtube.com/embed/dQw4w9WgXcQ`,
        siteUrl: ``,
        tech: [`premiere`, `aftereffects`],
        hidden: !1,
      },
      {
        id: `p6`,
        title: `E-Commerce Store — FreshMart`,
        cat: `web`,
        imgUrl: `https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=900&q=80&fm=webp`,
        videoUrl: ``,
        siteUrl: `https://dribbble.com`,
        tech: [`figma`, `react`],
        hidden: !1,
      },
      {
        id: `p7`,
        title: `Corporate Annual Report`,
        cat: `graphic`,
        imgUrl: `https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&q=80&fm=webp`,
        videoUrl: ``,
        siteUrl: ``,
        tech: [`illustrator`, `photoshop`],
        hidden: !1,
      },
      {
        id: `p8`,
        title: `HealthAI — Logo & Brand Kit`,
        cat: `branding`,
        imgUrl: `https://images.unsplash.com/photo-1634942537034-2531766767d1?w=900&q=80&fm=webp`,
        videoUrl: ``,
        siteUrl: `https://behance.net`,
        tech: [`illustrator`, `figma`, `midjourney`],
        hidden: !1,
      },
    ],
    skills: [
      { id: `sk1`, name: `Adobe Illustrator`, pct: 95, cat: `design` },
      { id: `sk2`, name: `Adobe Photoshop`, pct: 92, cat: `design` },
      { id: `sk3`, name: `Canva Pro`, pct: 98, cat: `design` },
      { id: `sk4`, name: `Figma`, pct: 82, cat: `design` },
      {
        id: `sk5`,
        name: `AI Image Generation (Midjourney / DALL-E)`,
        pct: 90,
        cat: `ai`,
      },
      {
        id: `sk6`,
        name: `ChatGPT & AI Prompt Engineering`,
        pct: 95,
        cat: `ai`,
      },
      { id: `sk7`, name: `Stable Diffusion & ComfyUI`, pct: 78, cat: `ai` },
      { id: `sk8`, name: `MS Office Suite`, pct: 95, cat: `office` },
      { id: `sk9`, name: `Documentation Management`, pct: 97, cat: `office` },
      { id: `sk10`, name: `Team Leadership`, pct: 88, cat: `soft` },
      { id: `sk11`, name: `Client Communication`, pct: 92, cat: `soft` },
      { id: `sk12`, name: `Computer Training`, pct: 93, cat: `soft` },
    ],
    testimonials: [
      {
        id: `t1`,
        name: `James Carter`,
        role: `CEO, Carter Digital — USA`,
        text: `Al-Amin delivered an absolutely stunning brand identity for our startup. His creativity and attention to detail are unmatched. He understood our vision from the very first brief and exceeded every expectation.`,
        stars: 5,
        platform: `fiverr`,
        profileUrl: ``,
        hidden: !1,
      },
      {
        id: `t2`,
        name: `Priya Sharma`,
        role: `Marketing Manager, TechNova — India`,
        text: `Outstanding graphic design work! He understood our vision perfectly and translated it into beautiful visuals that performed incredibly well across all our campaigns. Very professional and timely delivery.`,
        stars: 5,
        platform: `upwork`,
        profileUrl: ``,
        hidden: !1,
      },
      {
        id: `t3`,
        name: `Ahmed Hassan`,
        role: `Business Owner — Dubai, UAE`,
        text: `Top-quality video editing and social media content. Al-Amin is highly skilled, communicates very well throughout the project, and always delivers on time.`,
        stars: 5,
        platform: `direct`,
        profileUrl: ``,
        hidden: !1,
      },
      {
        id: `t4`,
        name: `Sarah Mitchell`,
        role: `Founder, GreenLife Co. — UK`,
        text: `Working with Al-Amin on our AI-generated product imagery was a game-changer. He knows exactly how to prompt and refine AI tools to get photorealistic, on-brand results.`,
        stars: 5,
        platform: `fiverr`,
        profileUrl: ``,
        hidden: !1,
      },
    ],
    facebookPages: [
      {
        id: `fb1`,
        name: `Al-Amin Creative Studio`,
        url: `https://facebook.com`,
        followers: `5.2K`,
        category: `Design Studio`,
        coverUrl: ``,
        hidden: !1,
      },
      {
        id: `fb2`,
        name: `Digital Art by Al-Amin`,
        url: `https://facebook.com`,
        followers: `3.8K`,
        category: `Artist Page`,
        coverUrl: ``,
        hidden: !1,
      },
      {
        id: `fb3`,
        name: `AI Design Hub BD`,
        url: `https://facebook.com`,
        followers: `2.1K`,
        category: `AI & Technology`,
        coverUrl: ``,
        hidden: !1,
      },
    ],
    blog: [
      {
        id: `blog_001`,
        title: `AI Design Tools ২০২৬: Midjourney, DALL-E ও Adobe Firefly দিয়ে কাজ করার Complete Guide`,
        topic: `AI & Design`,
        excerpt: `Midjourney, DALL-E 3 ও Adobe Firefly — বাংলাদেশের Graphic Designer দের জন্য সেরা AI design tools কোনটা? ২০২৬ সালে আমার ব্যক্তিগত অভিজ্ঞতা থেকে complete guide।`,
        content: `## AI Design Tools ২০২৬: Midjourney, DALL-E 3 ও Adobe Firefly — Complete Guide

AI এখন আর ভবিষ্যতের কথা না। এটা graphic design এর বর্তমান।

২০২৬ সালে যারা AI tools শিখছেন, তারা এগিয়ে যাচ্ছেন। যারা শিখছেন না, তারা পিছিয়ে পড়ছেন। এটা কঠিন সত্যি, কিন্তু সত্যি।

আমি নিয়মিত AI tools ব্যবহার করি। আজ সবচেয়ে গুরুত্বপূর্ণ তিনটা tool নিয়ে honest review দিচ্ছি।

---

## Midjourney V7 — Image Generation এ সেরা

Midjourney এখনও AI image generation এর সেরা tool। V7 এ photorealism এতটাই advanced যে real photography থেকে আলাদা করা কঠিন।

**Best for:**
- Brand concept visualization
- Social media creative content
- Client কে idea দেখানোর moodboard

**Price:** Basic plan $10/month থেকে শুরু।

**বাংলাদেশ থেকে কিভাবে ব্যবহার করবেন:** Discord এ login করে Midjourney bot এ prompt দিন। Payment এর জন্য Wise বা বিশ্বস্ত কারো international card ব্যবহার করতে হবে।

---

## DALL-E 3 (ChatGPT) — Conversational AI Design

DALL-E 3 এর সুবিধা হলো ChatGPT এর সাথে integration। Chat করতে করতে image refine করা যায়।

**Best for:**
- Quick concept ideation
- Illustration ও infographic
- Client presentation এর rough mockup

**Price:** ChatGPT Plus ($20/month) এর সাথে included।

---

## Adobe Firefly — Commercial Safety এর জন্য সেরা

Adobe Firefly শুধুমাত্র licensed content দিয়ে trained। Client delivery তে copyright নিয়ে চিন্তা নেই।

Photoshop এবং Illustrator এর সাথে directly integrated। Professional workflow এ সবচেয়ে convenient।

**Best for:**
- Client delivery এর commercial assets
- Photo editing ও background removal
- Photoshop এর Generative Fill ব্যবহার

---

## আমার Workflow

আমি নিজে এই combination ব্যবহার করি:

1. **Concept phase:** Midjourney দিয়ে initial ideas explore করি
2. **Refinement:** Adobe Illustrator/Photoshop এ final polish
3. **Client delivery:** Adobe Firefly দিয়ে commercial-safe assets
4. **Quick content:** Canva Magic Studio দিয়ে fast turnaround

---

## একটা গুরুত্বপূর্ণ কথা

AI tools design fundamentals replace করে না। Color theory, typography, composition না জানলে AI দিয়েও professional result পাবেন না।

AI হলো আপনার assistant। Creativity এর replacement নয়।

এই tools শিখুন। কিন্তু আগে design এর basics শক্ত করুন।`,
        tags: [
          `AI design tools 2026`,
          `Midjourney Bangladesh`,
          `Adobe Firefly tutorial`,
          `DALL-E 3 Bangladesh`,
          `AI graphic design Bangladesh`,
          `AI design tools Bangla`,
          `graphic design AI 2026`,
        ],
        readTime: `7`,
        publishedAt: `2026-04-01`,
        coverUrl: `https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_002`,
        title: `Professional Logo Design করার সম্পূর্ণ Guide: ৭টি ধাপে Perfect Logo তৈরি করুন`,
        topic: `Graphic Design`,
        excerpt: `Professional logo design করার ৭টি ধাপ বিস্তারিত বাংলায়। Client briefing থেকে final delivery পর্যন্ত — Bangladesh এর graphic designer দের জন্য practical logo design guide।`,
        content: `## Professional Logo Design করার সম্পূর্ণ ৭ ধাপ

Logo শুধু একটা সুন্দর symbol না। এটা একটা business এর পরিচয়, তার গল্প, তার promise।

ভালো logo design করতে হলে process জানতে হয়। আমি এই ৭টা ধাপ follow করি।

---

## ধাপ ১: Client Brief নিন ভালো করে

কাজ শুরুর আগে client কে সম্পূর্ণভাবে বুঝুন।

**অবশ্যই জানতে হবে:**
- Business টা কী করে? Target audience কে?
- Competitor দের logo কেমন?
- Logo কোথায় কোথায় ব্যবহার হবে? (website, print, signage, product)
- Color বা style এর কোনো preference আছে?
- Budget এবং timeline কত?

এই তথ্য ছাড়া কাজ শুরু করলে পরে অনেক সমস্যা হবে।

---

## ধাপ ২: Research করুন

Brief নেওয়ার পর industry research করুন।

Competitor দের logo দেখুন — differentiate করার জন্য, copy করার জন্য না। Behance, Dribbble এ inspiration নিন। Reference আর copy এর পার্থক্য জানুন।

---

## ধাপ ৩: Sketch করুন

সরাসরি computer এ যাবেন না। কাগজে আগে sketch করুন।

১৫-২০টা rough idea sketch করুন। দ্রুত করুন। Judge করবেন না। সেরা ৩-৫টা বেছে নিন। Sketching creativity কে মুক্ত করে।

---

## ধাপ ৪: Digital Execution

Adobe Illustrator এ কাজ শুরু করুন। Logo অবশ্যই vector format এ হতে হবে।

**মনে রাখবেন:**
- Simple রাখুন। Complex logo scale এ ভালো দেখায় না
- Black and white এ test করুন প্রথমে
- ছোট size এ কেমন দেখাচ্ছে দেখুন (favicon size এও দেখুন)

---

## ধাপ ৫: Color ও Typography

Color psychology বুঝে color choose করুন। Brand এর personality অনুযায়ী।

Font selection এ সতর্ক থাকুন। Free font ব্যবহার করলে commercial license আছে কিনা verify করুন। Google Fonts safe।

---

## ধাপ ৬: Client কে Present করুন

৩টার বেশি option দেবেন না। বেশি দিলে client confused হয়।

প্রতিটা concept এর পেছনে কারণ বলুন। "এই color এজন্য, এই shape এজন্য।" Client তখন value বোঝে এবং সিদ্ধান্ত নিতে পারে।

---

## ধাপ ৭: Revision ও Final Delivery

Revision process এর অংশ। Personal attack মনে করবেন না।

**Final delivery তে দিন:**
- Vector files: AI, EPS, SVG
- Raster files: PNG (transparent), JPG
- Color variations: Full color, Black, White, Reversed
- Mini usage guideline

এই complete package দিলে client অনেক satisfied থাকে এবং আপনাকে refer করে অন্যদের কাছে।`,
        tags: [
          `logo design Bangladesh`,
          `professional logo design guide`,
          `logo design steps Bangla`,
          `logo designer Bangladesh`,
          `logo design tips`,
          `logo design process`,
          `কিভাবে logo design করবেন`,
        ],
        readTime: `8`,
        publishedAt: `2026-04-02`,
        coverUrl: `https://images.pexels.com/photos/374894/pexels-photo-374894.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_003`,
        title: `Canva Pro vs Adobe Illustrator: বাংলাদেশের Freelancer দের জন্য কোনটা Best? (২০২৬)`,
        topic: `Graphic Design`,
        excerpt: `Canva Pro নাকি Adobe Illustrator — Bangladesh এর freelancer দের জন্য কোনটা best? দুটোর সুবিধা, অসুবিধা, price ও use case বিস্তারিত তুলনা।`,
        content: `## Canva Pro vs Adobe Illustrator: ২০২৬ সালে কোনটা শিখবেন?

প্রতি সপ্তাহে এই প্রশ্নটা পাই। আমার সরাসরি জবাব:

**দুটো আলাদা tool, দুটো আলাদা purpose।**

---

## Canva ২০২৬ সালে কোথায় এসেছে?

Canva Visual Suite ২০২৬ সালে অনেক powerful। AI Magic Design, background removal, text-to-image, presentation, video, website — সব এক জায়গায়।

এটা আর শুধু amateur tool না।

**Canva যেখানে সেরা:**
- Social media posts ও stories
- Presentation ও pitch deck
- Email newsletter graphics
- YouTube thumbnail
- Quick turnaround content

**Canva যেখানে পারে না:**
- Complex logo design (vector editing limited)
- Large format print (resolution issue)
- Custom illustration
- Packaging design (proper bleed/CMYK নেই)

---

## Adobe Illustrator কেন শিখবেন?

Illustrator হলো vector design এর industry standard। Professional logo, brand identity, packaging, publication design — সব Illustrator এ।

**Illustrator যেখানে Canva হারবে না:**
- Logo ও brand identity
- Packaging ও print design
- Complex illustration
- Scalable graphics

---

## কার জন্য কোনটা?

**Canva দিয়ে শুরু করুন যদি:**
- এখনই income শুরু করতে চান
- Social media content বানাতে চান
- Design এ নতুন

**Illustrator শিখুন যদি:**
- Long term professional career চান
- Logo ও brand design করতে চান
- Serious freelancer হতে চান

**আদর্শ হলো দুটোই শেখা।** আমি নিজে দুটোই ব্যবহার করি। Canva দিয়ে quick content, Illustrator দিয়ে serious work।

---

## একটা সত্যি কথা

Tool matter করে। কিন্তু চিন্তাশক্তি আর creativity বেশি matter করে।

Canva তেও অনেকে professional quality কাজ করেন। Illustrator এও অনেকে খারাপ কাজ করেন।

Tool এর পেছনে না দৌড়িয়ে আগে basics শিখুন।`,
        tags: [
          `Canva Pro vs Adobe Illustrator`,
          `Canva Pro Bangladesh`,
          `Adobe Illustrator Bangladesh`,
          `graphic design software Bangladesh`,
          `Canva vs Illustrator Bangla`,
          `freelancer design tools Bangladesh`,
        ],
        readTime: `7`,
        publishedAt: `2026-04-03`,
        coverUrl: `https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_004`,
        title: `Brand Identity Design: Startup এর জন্য Complete Brand System তৈরির Step-by-Step Guide`,
        topic: `Graphic Design`,
        excerpt: `Startup এর জন্য complete brand identity system কিভাবে তৈরি করবেন? Logo, color, typography, brand guideline — step by step বাংলায় brand design guide।`,
        content: `## Brand Identity Design: Startup এর জন্য Complete Brand System কিভাবে তৈরি করবেন

Brand identity মানে শুধু logo না।

Logo হলো brand identity এর একটা অংশ। Complete brand system এ থাকে — logo, color palette, typography, imagery style, brand voice, usage guidelines।

এই সব মিলিয়ে একটা coherent identity তৈরি হয় যা মানুষের মনে গেঁথে যায়।

---

## কেন Brand Identity এত Important?

একটা example দিই।

দুটো restaurant আছে। একটায় সব কিছু random — menu design আলাদা, signage আলাদা, packaging আলাদা। আরেকটায় সব কিছু consistent — একই color, একই font, একই feel।

কোনটায় বেশি professional মনে হবে?

Consistency trust তৈরি করে। Trust business তৈরি করে।

---

## Brand Identity System এর ৬টা উপাদান

### ১. Logo System

শুধু একটা logo না। একটা complete logo system থাকা উচিত:
- Primary logo (full version)
- Secondary logo (simplified)
- Icon/mark (social media, favicon)
- Different color versions

### ২. Color Palette

**Primary colors:** ২-৩টা main color। Brand এর personality represent করে।
**Secondary colors:** ৩-৪টা supporting color।
**Neutral colors:** Background ও text এর জন্য।

**গুরুত্বপূর্ণ:** প্রতিটা color এর HEX, RGB, CMYK code document করুন।

### ৩. Typography

- **Display font:** Headlines, titles
- **Body font:** Paragraphs, descriptions
- **Accent font:** Special elements (optional)

Maximum ২-৩টা font। বেশি হলে messy দেখায়।

### ৪. Photography ও Imagery Style

Brand কোন ধরনের imagery ব্যবহার করবে? Real photos? Illustration? Icons?

Consistent imagery style brand কে instantly recognizable করে।

### ৫. Brand Voice ও Tone

Design visual. কিন্তু brand এর একটা personality আছে। সেটা কেমন?

Formal নাকি friendly? Professional নাকি playful? Bengali নাকি English?

এই guidelines থাকলে copywriting ও consistent হয়।

### ৬. Brand Guidelines Document

সব কিছু document করুন। কে কোথায় কিভাবে brand assets ব্যবহার করবে।

---

## Startup রা যে ভুল করেন

অনেক startup logo বানিয়েই brand identity করা হয়ে গেছে মনে করেন। এই ভুল পরে অনেক সমস্যা তৈরি করে।

প্রথম থেকেই সঠিক foundation তৈরি করুন। পরে ঠিক করা আরো কঠিন ও ব্যয়বহুল।`,
        tags: [
          `brand identity design Bangladesh`,
          `brand system design`,
          `startup branding Bangladesh`,
          `logo brand identity`,
          `brand guidelines Bangladesh`,
          `brand design guide Bangla`,
        ],
        readTime: `8`,
        publishedAt: `2026-04-04`,
        coverUrl: `https://images.pexels.com/photos/7598018/pexels-photo-7598018.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_005`,
        title: `বাংলাদেশ থেকে International Client পাওয়ার ১০টি Proven উপায় | Freelance Graphic Designer Guide`,
        topic: `Career Tips`,
        excerpt: `বাংলাদেশ থেকে international client পাওয়ার ১০টি proven উপায়। Fiverr, Upwork, LinkedIn — কোথায় কিভাবে approach করলে foreign client পাওয়া যায়? Real experience sharing।`,
        content: `## বাংলাদেশ থেকে International Client পাওয়ার Proven উপায়

International client পাওয়া কি সত্যিই সম্ভব বাংলাদেশ থেকে?

হ্যাঁ। সম্ভব।

বাংলাদেশ এখন globally freelancing এ অনেক এগিয়েছে। Upwork, Fiverr — দুটো platform এই বাংলাদেশি freelancers active এবং সফল।

কিন্তু randomly কাজ করলে হবে না। Strategy দরকার।

---

## কোথা থেকে Client আসে?

**Fiverr:** Gig based। Client এসে খোঁজে। সবচেয়ে easy entry point।

**Upwork:** Proposal based। Client কে আপনাকে apply করতে হবে। Competition বেশি কিন্তু rate ভালো।

**LinkedIn:** Professional network। Direct outreach করা যায়। Long-term relationship এর জন্য সেরা।

**99designs:** Design specific। Contest ও direct work দুটোই।

**Direct referral:** Existing client এর মাধ্যমে। সবচেয়ে quality client এখান থেকে আসে।

---

## Fiverr এ সফল হওয়ার Tips (২০২৬)

**Gig title:** Keyword rich। যেমন: "Professional Logo Design for Your Business"

**Gig description:** Clear, benefit-focused। কি পাবে client, কেন আপনাকে hire করবে।

**Portfolio images:** High quality mockup। Professional দেখাতে হবে।

**Pricing:** Starting too low করবেন না। Value establish করুন।

**Response time:** যত দ্রুত reply, algorithm তত বেশি push করে।

---

## Portfolio যা দেখে Client সিদ্ধান্ত নেয়

International client আপনার portfolio দেখে সিদ্ধান্ত নেয়।

**Behance:** Free portfolio platform। Design community সবচেয়ে বেশি এখানে।

**Personal website:** সবচেয়ে professional। আপনার নিজের domain এ।

**Dribbble:** High quality design showcase।

Portfolio তে real client work এর পাশাপাশি concept work রাখুন। Show করুন আপনি কি করতে পারেন।

---

## Language ও Communication

International client এর সাথে English এ যোগাযোগ করতে হবে।

Grammar perfect না হলেও চলবে। কিন্তু clearly বোঝা যেতে হবে।

Quick response, professional tone, clear communication — এই তিনটা থাকলে client satisfied থাকে।

---

## সবচেয়ে গুরুত্বপূর্ণ কথা

First order আসতে সময় লাগবে। হতাশ হবেন না।

এই সময়ে নিজেকে তৈরি করুন। Portfolio শক্তিশালী করুন। Skills improve করুন।

সঠিক সময়ে সঠিক preparation থাকলে opportunity এলে কাজে লাগাতে পারবেন।`,
        tags: [
          `international client Bangladesh`,
          `freelance graphic designer Bangladesh`,
          `Fiverr Bangladesh guide`,
          `Upwork Bangladesh designer`,
          `international freelancing Bangladesh`,
          `বিদেশি client পাওয়ার উপায়`,
        ],
        readTime: `9`,
        publishedAt: `2026-04-05`,
        coverUrl: `https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_006`,
        title: `Social Media Design Strategy ২০২৬: Engagement বাড়ানোর Proven Visual Content Tips`,
        topic: `Graphic Design`,
        excerpt: `২০২৬ সালে social media design strategy কি হওয়া উচিত? Facebook, Instagram, LinkedIn এর জন্য engagement বাড়ানোর proven visual content tips — Bangladesh context এ।`,
        content: `## Social Media Design Strategy ২০২৬: Engagement বাড়ানোর Proven Tips

Social media এ শুধু post দিলেই হয় না। কেউ দেখে না।

Algorithm এখন অনেক smart। Quality content কে push করে, generic content কে bury করে।

ভালো design সেই quality এর প্রথম শর্ত।

---

## ২০২৬ সালে কোন Platform এ কেমন Design

**Facebook:**
- Video এর reach সবচেয়ে বেশি
- Carousel post এ engagement ভালো
- Cover photo এবং profile photo professional রাখুন

**Instagram:**
- Visual quality সবচেয়ে matter করে
- Feed এর color theme consistent রাখুন
- Reels এর organic reach এখনও ভালো

**LinkedIn:**
- Professional tone maintain করুন
- Infographic ও document post ভালো perform করে
- Personal story + professional insight combination কাজ করে

---

## Effective Social Media Post Design এর ৫টা Rule

### Rule 1: Thumb Stop করতে হবে

মানুষ scroll করে। আপনার post দেখে scroll থামাতে হবে।

Bold headline, bright color, interesting visual — এর যেকোনো একটা থাকতে হবে।

### Rule 2: One Message, One Post

একটা post এ একটাই message। বেশি message দিলে কোনোটাই মনে থাকে না।

### Rule 3: Brand Consistency

Color, font, style — সব post এ consistent। মানুষ দেখলেই চিনতে পারবে এটা আপনার post।

### Rule 4: Text কম, Visual বেশি

Social media visual medium। ছবি বা graphic এ মানুষ আগে নজর দেয়, তারপর text পড়ে।

### Rule 5: Call to Action থাকতে হবে

"Share করুন", "Link এ click করুন", "Comment করুন" — কোনো action না থাকলে মানুষ কিছু করবে না।

---

## Size Guide ২০২৬

| Platform | Post Size | Story Size |
|----------|-----------|------------|
| Instagram | 1080×1080 px | 1080×1920 px |
| Facebook | 1200×628 px | 1080×1920 px |
| LinkedIn | 1200×627 px | 1080×1920 px |
| Twitter/X | 1200×675 px | 1080×1920 px |

---

## Tools যা আমি ব্যবহার করি

- **Adobe Illustrator:** Complex designs
- **Adobe Photoshop:** Photo-based posts
- **Canva:** Quick content

সব ক্ষেত্রে template ব্যবহার করা যায়। কিন্তু customize করুন। Generic template দেখে মানুষ বোঝে।`,
        tags: [
          `social media design Bangladesh 2026`,
          `Facebook design tips Bangladesh`,
          `Instagram design tips`,
          `social media visual content`,
          `social media post design Bangla`,
          `engagement বাড়ানো design`,
        ],
        readTime: `8`,
        publishedAt: `2026-04-06`,
        coverUrl: `https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_007`,
        title: `Color Theory in Graphic Design: Professional Designer এর মতো Color Choose করুন`,
        topic: `Tutorials`,
        excerpt: `Color theory শিখুন professional designer এর মতো। Color wheel, harmony, psychology — graphic design এ সঠিক color choose করার complete guide বাংলায়।`,
        content: `## Color Theory in Graphic Design: সঠিক Color Choose করুন Professional এর মতো

Color blindly choose করবেন না।

অনেক designer কাজ করেন instinct দিয়ে। কিন্তু professional designer জানেন কেন এই color এখানে কাজ করে।

Color theory সেই "কেন" এর উত্তর দেয়।

---

## Color Wheel বোঝাটা জরুরি

Color wheel এ তিনটা category:

**Primary colors:** Red, Blue, Yellow — এগুলো mix করে বাকি সব তৈরি।

**Secondary colors:** Green, Orange, Purple — Primary দুটো মিলিয়ে।

**Tertiary colors:** Primary ও Secondary এর mix।

---

## Color Harmony — কোন Colors একসাথে কাজ করে?

**Complementary:** Color wheel এ opposite। Strong contrast। Logo এ dramatic effect।

**Analogous:** Color wheel এ পাশাপাশি। Natural, harmonious। Landscape photography তে এই palette।

**Triadic:** তিনটা সমান দূরত্বে। Vibrant কিন্তু balanced।

**Monochromatic:** একটাই color এর different shade। Sophisticated এবং elegant।

---

## Color Psychology — Brands কেন এই Colors ব্যবহার করে?

**লাল:** Energy, urgency, passion। Food brand, sale announcement এ ব্যবহার হয়। McDonald's, Coca-Cola।

**নীল:** Trust, reliability, calm। Bank, tech company, healthcare। Facebook, Samsung, PayPal।

**সবুজ:** Nature, health, growth। Organic product, finance, wellness। WhatsApp, Whole Foods।

**হলুদ:** Optimism, energy, attention। Caution এও। McDonald's, IKEA।

**কালো:** Luxury, sophistication, power। Premium brand এ। Chanel, Apple।

**সাদা:** Purity, cleanliness, simplicity। Healthcare, minimalist brand।

---

## বাংলাদেশ Context এ Color

আমাদের culture এ কিছু বিশেষত্ব আছে।

সবুজ আমাদের কাছে ইসলামিক পরিচয়ের সাথে যুক্ত। Islamic brand এ সবুজ automatically trustworthy।

লাল-সবুজ আমাদের জাতীয় পরিচয়ের রঙ। Patriotic brand এ এই combination powerful।

---

## Practical Tips

- Maximum ৩টা primary color। বেশি হলে chaotic দেখায়
- Black and white এ আগে design করুন। Contrast ঠিক থাকলে color দিন
- Client এর industry convention দেখুন। কিন্তু blindly follow করবেন না
- Color blindness test করুন। ১০% মানুষ কোনো না কোনো color blindness এ ভোগেন

Color এ কখনো accident হওয়া উচিত না।`,
        tags: [
          `color theory graphic design Bangla`,
          `color psychology design`,
          `color choice design Bangladesh`,
          `design color guide`,
          `graphic design color tips`,
          `রঙের theory design`,
        ],
        readTime: `10`,
        publishedAt: `2026-04-07`,
        coverUrl: `https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_008`,
        title: `২০২৬ সালের Top ১০ Graphic Design Trends: এখনই জানুন, পিছিয়ে পড়বেন না`,
        topic: `Graphic Design`,
        excerpt: `২০২৬ সালের top ১০ graphic design trends এখনই জানুন। AI-assisted design, retro aesthetics, human-centered design — বাংলাদেশের designer দের জন্য trend update।`,
        content: `## ২০২৬ সালের Top Graphic Design Trends: এখনই জানুন

Design industry প্রতিদিন evolve হচ্ছে। ২০২৬ সালে যে trends গুলো dominant সেগুলো জানা দরকার।

এটা শুধু নতুন কিছু follow করার জন্য না। Client দের কাছে relevant থাকার জন্য।

---

## ১. AI-Human Collaboration

সবচেয়ে বড় trend। AI শুধু tool না — এটা workflow এর অংশ হয়ে গেছে।

Best designers এখন AI কে starting point হিসেবে ব্যবহার করছেন। AI দিয়ে concept generate করে, তারপর human creativity দিয়ে refine করছেন।

Output: আগের চেয়ে অনেক দ্রুত, অনেক diverse।

---

## ২. Maximalism এর Return

Minimalism অনেকদিন ধরে dominant ছিলো। ২০২৬ এ maximalism ফিরে আসছে।

Bold patterns, rich textures, expressive typography। Brands চাইছে আলাদা দেখাতে।

---

## ৩. Motion Design Everywhere

Static image এর যুগ শেষ হয়নি। কিন্তু motion design এর demand অনেক বেড়েছে।

Logo animation, micro-interactions, animated social posts — এগুলোর demand ২০২৬ এ highest।

---

## ৪. Authentic Photography

Stock photo এর polish এড়িয়ে যাচ্ছে brands। Real, authentic, slightly imperfect — এই aesthetic।

Real মানুষ, real situation। Consumer এর সাথে genuine connection।

---

## ৫. Dark Mode Design

App, website, marketing material — সব জায়গায় dark mode এখন standard।

Dark background এ design করা এখন must-know skill।

---

## ৬. Variable Fonts

Typography এ variable fonts বড় shift আনছে। একটাই font file এ multiple weights, widths, styles।

Design flexible, file size ছোট।

---

## ৭. Sustainable Design

Eco-friendly brands এর জন্য sustainable visual identity তৈরি হচ্ছে।

Earth tones, natural textures, organic shapes — এই aesthetic।

---

## Bangladesh Designer দের জন্য কোনটা Relevant?

সব trend একসাথে follow করার দরকার নেই।

**Most relevant এখনই:**
- AI-Human Collaboration (productivity বাড়াবে)
- Motion Design (high demand, few local designers)
- Dark Mode Design (every app needs it)

এই তিনটায় focus করুন। বাকিগুলো ধীরে ধীরে শিখুন।`,
        tags: [
          `graphic design trends 2026`,
          `design trends Bangladesh 2026`,
          `logo trends 2026`,
          `branding trends 2026`,
          `graphic design 2026 Bangladesh`,
          `design trend Bangla`,
        ],
        readTime: `8`,
        publishedAt: `2026-04-08`,
        coverUrl: `https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_009`,
        title: `Adobe Photoshop Tutorial: Beginner থেকে Professional পর্যন্ত Complete Guide বাংলায়`,
        topic: `Tutorials`,
        excerpt: `Adobe Photoshop শিখুন beginner থেকে professional পর্যন্ত। Tools, retouching, manipulation — বাংলাদেশের graphic designer দের জন্য সম্পূর্ণ Photoshop tutorial বাংলায়।`,
        content: `## Adobe Photoshop Complete Guide: Beginner থেকে শুরু করুন

Photoshop শিখতে ভয় পাবেন না।

অনেকে মনে করেন Photoshop অনেক কঠিন। বাস্তবে basics শিখতে ২-৩ মাস যথেষ্ট।

আমি নিজে যেভাবে শিখেছি সেই পথটা share করছি।

---

## Photoshop কেন শিখবেন?

Graphic design এ Photoshop অপরিহার্য। Photo editing, digital manipulation, UI mockup, marketing material — সব জায়গায় Photoshop।

Adobe এর প্রায় সব tool এর সাথে Photoshop integrate। Illustrator, InDesign, Premiere — সব।

---

## শুরুর আগে

Photoshop subscription এর দরকার নেই শুরুতে। Adobe এর free trial আছে।

অথবা older version গুলো কম দামে পাওয়া যায়। শেখার জন্য latest version না হলেও চলে।

---

## প্রথম মাসে কী শিখবেন?

### Week 1-2: Interface ও Basic Tools

- Layers panel বোঝা (সবচেয়ে গুরুত্বপূর্ণ)
- Selection tools: Marquee, Lasso, Magic Wand
- Crop ও Straighten
- Basic color adjustments

### Week 3-4: Photo Editing Essentials

- Adjustment Layers: Levels, Curves, Hue/Saturation
- Background removal: Background Eraser, Pen Tool
- Spot Healing Brush, Clone Stamp
- Layer Masks বোঝা

---

## দ্বিতীয় মাসে কী শিখবেন?

- Pen Tool mastery (সবচেয়ে valuable skill)
- Non-destructive editing workflow
- Smart Objects
- Text ও typography effects
- Blend Modes
- Generative AI features (২০২৬ এ অনেক powerful)

---

## Best Free Resources

**YouTube: PiXimperfect** — Professional Photoshop tutorials, clear explanation

**YouTube: Phlearn** — Photo retouching এ excellent

**Adobe Learn Page:** Official tutorials, সবচেয়ে accurate

**Practice projects:** অন্যদের কাজ recreate করুন। সবচেয়ে দ্রুত শেখার উপায়।

---

## কতদিনে Professional হওয়া যাবে?

Basics: ২-৩ মাস
Professional editing: ৬-১২ মাস
Master level: কয়েক বছরের practice

কিন্তু মনে রাখবেন — শেখা কখনো শেষ হয় না। Software নিজেই প্রতিদিন evolve হচ্ছে।`,
        tags: [
          `Adobe Photoshop tutorial Bangla`,
          `Photoshop শেখার guide`,
          `photo editing Bangladesh`,
          `Photoshop beginner guide Bangla`,
          `Photoshop tutorial বাংলা`,
          `photo editing tips Bangla`,
        ],
        readTime: `9`,
        publishedAt: `2026-04-09`,
        coverUrl: `https://images.pexels.com/photos/1337386/pexels-photo-1337386.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_010`,
        title: `Product Packaging Design Guide: আপনার Product কে Shelf এ Stand Out করুন`,
        topic: `Graphic Design`,
        excerpt: `Product packaging design guide বাংলায়। Label design, box design, mockup — Bangladesh এর ব্যবসায়ীদের জন্য packaging design এর complete guide ও cost breakdown।`,
        content: `## Product Packaging Design Guide: আপনার Product কে Shelf এ Stand Out করুন

Packaging design একটা underrated skill।

অনেক graphic designer logo আর social media design করেন। Packaging design এ competition কম। কিন্তু demand অনেক।

বাংলাদেশে local businesses বাড়ছে, e-commerce বাড়ছে। সবার packaging দরকার।

---

## কেন Packaging Design এত Important?

গবেষণা বলে — purchasing decision এর বড় অংশ packaging দেখে হয়। Supermarket এ গেলে নিজেই খেয়াল করুন কোন product এ হাত যাচ্ছে।

সুন্দর packaging মানুষকে product টা try করতে উৎসাহিত করে।

---

## Packaging Design শুরু করার আগে

**Client কে যা জিজ্ঞেস করুন:**
- Product কোথায় sell হবে? Online, retail, wholesale?
- Target customer কে?
- Competitor দের packaging কেমন?
- প্রতিটা unit এর approximate packaging budget?
- Printing কোথায় হবে? (local printer নাকি overseas)

---

## Technical Requirements

**Print specs জানতে হবে:**
- Bleed: সাধারণত ৩-৫mm
- Safe zone: Text ও important elements এর জন্য
- Color mode: CMYK (screen এ RGB দেখে কাজ করবেন না)
- Resolution: ৩০০ DPI minimum
- File format: PDF/X-1a বা PDF/X-4

---

## Packaging Design এর Elements

### Structure/Shape

Box, pouch, bottle label, wrapper — structure আগে decide করুন। Structure অনুযায়ী design।

### Hierarchy

কোন তথ্য সবচেয়ে আগে চোখে পড়বে? Brand name? Product name? Key benefit?

Primary, secondary, tertiary information এর clear hierarchy।

### Color ও Material

Printing process বোঝুন। CMYK এ সব color exactly same দেখায় না।

Matte, glossy, kraft — material packaging এর feel সম্পূর্ণ বদলে দেয়।

---

## বাংলাদেশের Local Businesses এর জন্য Tips

Local printer সাথে কথা বলুন আগে। তারা কোন file format নেয়, কোন size support করে — এসব জেনে তারপর design করুন।

অনেকে design করে তারপর printing এ গিয়ে সমস্যায় পড়েন।`,
        tags: [
          `packaging design Bangladesh`,
          `product packaging Bangladesh`,
          `label design Bangladesh`,
          `product design guide`,
          `packaging designer Bangladesh`,
          `packaging design tips Bangla`,
        ],
        readTime: `8`,
        publishedAt: `2026-04-10`,
        coverUrl: `https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_011`,
        title: `Typography Guide: সঠিক Font দিয়ে Design কে Professional করুন | Complete Bangla Tutorial`,
        topic: `Tutorials`,
        excerpt: `Typography দিয়ে design কে professional করুন। Font pairing, hierarchy, readability — graphic design এ সঠিক font selection এর complete guide বাংলায়।`,
        content: `আপনি কি কখনো ভেবেছেন কেন Coca-Cola এর font এবং Apple এর font সম্পূর্ণ আলাদা? কারণ তারা দুটো সম্পূর্ণ ভিন্ন personality express করে।

Typography design এর সবচেয়ে underrated কিন্তু অত্যন্ত powerful element। আমি designer হিসেবে typography কে সবসময় design এর backbone মনে করি।

**Typography এর Basic Types**

**Serif Fonts:**
Letters এর শেষে ছোট decorative strokes থাকে। Classic, trustworthy, traditional feel দেয়।
Examples: Times New Roman, Georgia, Garamond
Use: Law firms, banks, academic publications, luxury brands

**Sans-Serif Fonts:**
Clean, no decorative strokes। Modern, clean, approachable।
Examples: Helvetica, Arial, Roboto, Inter
Use: Tech companies, startups, modern brands, digital media

**Script/Handwriting Fonts:**
Handwritten style। Personal, creative, elegant।
Examples: Pacifico, Dancing Script, Brush Script
Use: Bakeries, wedding brands, beauty, personal brands

**Display Fonts:**
Decorative, attention-grabbing। High impact, unique।
Use: Headlines only, never body text। Event posters, limited edition products

**Monospace Fonts:**
Equal width characters। Technical, precise, code-like।
Examples: Courier, Monaco
Use: Tech documentation, coding content, retro aesthetics

**Typography এর Key Principles**

**Hierarchy:**
H1 (biggest): Page/section title
H2 (medium): Section headings
H3 (smaller): Subsections
Body: Regular reading text
Caption: Small supporting text

এই hierarchy follow করলে readers automatically most important information আগে পড়বেন।

**Contrast:**
Different weights (bold, regular, light) এবং sizes mix করুন। But একই font family থেকে। এটা visual interest তৈরি করে।

**Spacing:**
Letter spacing (tracking), line spacing (leading), এবং word spacing — এগুলো readability এ massive impact ফেলে।

সাধারণ rule: Line height = font size × 1.4-1.6

**Font Pairing Tips**

দুটো font pairing করার সহজ rules:
1. Serif + Sans-Serif সবচেয়ে safe combination
2. Same designer এর fonts usually pair ভালো করে
3. High contrast বা very similar — এর মাঝামাঝি avoid করুন

Popular pairings:
- Playfair Display + Source Sans Pro
- Montserrat + Merriweather
- Raleway + Lato

**Free এবং Paid Fonts**

**Free (Google Fonts):** Inter, Roboto, Open Sans, Lato, Montserrat — সবই high quality এবং commercially free।

**Paid (Adobe Fonts, Monotype):** Helvetica Neue, Futura, Gotham — premium brands এর choice।

**বাংলা Typography**

বাংলাদেশের clients এর জন্য বাংলা typography equally important। SolaimanLipi, Kalpurush, Hind Siliguri — এগুলো popular Bangla fonts।

বাংলা এবং English একসাথে ব্যবহার করতে হলে visually compatible fonts choose করুন।

**Typography Mistakes যা Avoid করবেন**

1. Too many fonts (maximum ২টা per design)
2. All caps for long text (reading কঠিন হয়)
3. Very light font weight on dark background
4. Default font (Arial, Times) ব্যবহার করা
5. Word এর মাঝে double space দেওয়া

**প্রফেশনাল Typography Design**

আমার প্রতিটা design এ typography carefully chosen। আপনার brand এর জন্য perfect font combination find করতে আমার সাথে যোগাযোগ করুন।`,
        tags: [
          `typography design Bangla`,
          `font selection guide Bangladesh`,
          `typography tutorial বাংলা`,
          `graphic design fonts Bangladesh`,
          `font choice design tips`,
          `typography শেখার guide`,
        ],
        readTime: `8`,
        publishedAt: `2026-04-11`,
        coverUrl: `https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_012`,
        title: `Facebook Page Design Guide: Professional Cover Photo ও Posts দিয়ে Business Grow করুন`,
        topic: `Graphic Design`,
        excerpt: `Facebook page design করুন professionally। Cover photo size, post design, brand consistency — Bangladesh এর small business দের জন্য Facebook page optimization guide।`,
        content: `বাংলাদেশে Facebook ব্যবহারকারীর সংখ্যা ৩ কোটি ছাড়িয়ে গেছে। এই বিশাল audience কে properly engage করতে হলে আপনার Facebook page কে professional এবং visually attractive করতে হবে।

আমি বহু businesses এর Facebook page design করেছি। আজ সেই অভিজ্ঞতা থেকে practical tips share করব।

**Facebook Page এর Visual Elements**

**Profile Picture (170×170px):**
Square format। Logo use করুন। সাদা background এ clearly visible হতে হবে। Thumbnail size এও recognizable হওয়া জরুরি।

**Cover Photo (820×312px):**
Facebook Page এর সবচেয়ে valuable visual space। প্রথমেই চোখে পড়ে। এখানে থাকবে:
- Business এর core message
- Key service বা product visual
- Contact information বা CTA
- Brand colors এবং style

**Mobile View Important:**
Cover photo এর center portion mobile এ দেখা যায়। Important elements center এ রাখুন।

**Professional Cover Photo Design Tips**

**Simple এবং Clear:** একটাই main message। Multiple messages confusion তৈরি করে।

**High Contrast Text:** Background এ text clearly readable হতে হবে।

**Brand Consistency:** Website এবং other materials এর সাথে same colors এবং fonts।

**Regular Update:** Seasonal offers, new products, events — cover photo update করুন।

**Post Design Best Practices**

**Consistent Template:**
প্রতিটা post এর জন্য template তৈরি করুন। Same color scheme, logo placement, এবং font। এতে feed দেখতে professional এবং branded লাগে।

**Image Sizes:**
- Square post: 1080×1080px
- Landscape: 1200×630px
- Stories: 1080×1920px
- Video thumbnail: 1280×720px

**Text on Image:**
Maximum ২০% area text হওয়া উচিত। Facebook text-heavy images এর reach কমিয়ে দেয়।

**Post Types যা ভালো Perform করে**

১. **Before/After Posts:** আপনার কাজের impact দেখান
২. **Tips এবং Tutorials:** Educational content সবসময় share হয়
৩. **Behind the Scenes:** Process দেখান, authenticity বাড়ে
৪. **Client Testimonials:** Social proof সবচেয়ে powerful
৫. **Offers এবং Promotions:** Clear CTA সহ

**Bangladeshi Facebook Audience কে Target করার Tips**

বাংলাদেশের Facebook audience এর জন্য:
- বাংলায় content বেশি engage করে
- Local reference এবং cultural connection powerful
- Evening (৮টা-১১টা) সবচেয়ে active time
- Video content এখন অনেক বেশি reach পাচ্ছে
- Reels/Short video এ invest করুন

**Facebook Page এর Cover Photos আমি Design করি**

আমার portfolio তে Facebook page design এর অনেক example আছে। Coaching centers, businesses, এবং personal brands — সব ধরনের page এর জন্য professional design provide করি।

আজই contact করুন এবং আপনার Facebook page কে professional করুন।`,
        tags: [
          `Facebook page design Bangladesh`,
          `Facebook cover photo design`,
          `Facebook business page design`,
          `social media design Bangladesh`,
          `Facebook page professional`,
          `Facebook design tips Bangla`,
        ],
        readTime: `7`,
        publishedAt: `2026-04-12`,
        coverUrl: `https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_013`,
        title: `Professional Poster Design Guide: Eye-Catching Poster তৈরির Complete Tutorial বাংলায়`,
        topic: `Tutorials`,
        excerpt: `Eye-catching poster design করুন step by step। Event poster, promotional poster, social media poster — বাংলাদেশের designer দের জন্য professional poster design tutorial।`,
        content: `Poster design হলো graphic design এর সবচেয়ে classic এবং challenging form। Limited space এ maximum information এবং visual impact deliver করতে হয়।

আমি বাংলাদেশে schools, colleges, coaching centers, businesses এবং events এর জন্য শত শত poster design করেছি। আজ সেই অভিজ্ঞতার essence share করছি।

**একটি Effective Poster এর Anatomy**

**Headline (সবচেয়ে বড়):**
First thing যা viewer দেখবে। এক বা দুই word। Curiosity বা urgency তৈরি করুন।

**Subheadline:**
Headline এর context দেয়। Slightly ছোট।

**Body Information:**
Details, date, time, venue, contact। Clean এবং scannable।

**Visual Element:**
Strong image বা illustration। Headline এর complement করবে।

**Call to Action:**
"Register Now," "Call Today," "Visit Website" — specific action।

**Logo/Branding:**
সবার শেষে কিন্তু clearly visible।

**Visual Hierarchy — সবচেয়ে গুরুত্বপূর্ণ Principle**

Viewer এর চোখ কোথায় আগে যাবে সেটা আপনি control করবেন।

Size: বড় element আগে দেখা যায়
Color: Bright বা contrasting color attention টানে
Position: Center বা top এ থাকা elements আগে দেখা যায়
Space: White space দিয়ে important elements highlight হয়

**Color Selection for Posters**

Event type অনুযায়ী color:
- Educational events: Blue, green (trust, growth)
- Religious events: Green, white (purity, peace)
- Business events: Navy, gold (professional, premium)
- Entertainment: Vibrant, bold colors (energy, excitement)
- Health campaigns: Green, orange (health, action)

**Bangladesh এ Popular Poster Types এবং Design Tips**

**Admission Poster (ভর্তি বিজ্ঞপ্তি):**
School, college, coaching এর জন্য। Bold headline, institution logo prominent, key dates clear। বাংলায় লিখুন।

**Event Poster:**
Speaker বা performer এর photo prominent রাখুন। Date, time, venue — সবার আগে।

**Business Promotion:**
Product বা service এর visual সবচেয়ে বড়। Offer/discount bold এবং eye-catching।

**Ramadan/Eid Poster:**
Islamic geometric patterns, crescent motifs। Green এবং gold traditional choice।

**Common Poster Design Mistakes**

১. Too much text — poster এ novel লেখার দরকার নেই
২. Too many fonts — maximum ২টা
৩. Low resolution images — minimum 300 DPI for print
৪. No clear hierarchy — সব কিছু same size
৅. Ignoring bleed এবং safe zone — print এ edges cut হয়

**Poster Design Software**

Adobe Illustrator: Professional print posters
Adobe Photoshop: Photo-based posters
Canva: Quick social media posters

**Print Specifications**

A4 poster: 210×297mm, 300 DPI, CMYK
A3 poster: 297×420mm, 300 DPI, CMYK
Banner: Depends on actual size, 72-150 DPI

**আমার Poster Design Service**

আমি social media poster থেকে large format print poster পর্যন্ত সব ধরনের poster design করি। Fast delivery এবং unlimited revisions সহ।

আপনার event বা business এর জন্য attractive poster দরকার? আজই message করুন।`,
        tags: [
          `poster design Bangladesh`,
          `event poster design Bangla`,
          `poster design tutorial`,
          `social media poster Bangladesh`,
          `poster design tips Bangla`,
          `admission poster design Bangladesh`,
        ],
        readTime: `7`,
        publishedAt: `2026-04-13`,
        coverUrl: `https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_014`,
        title: `Fiverr Graphic Design Gig Rank করানোর Complete Guide (২০২৬ Updated)`,
        topic: `Career Tips`,
        excerpt: `Fiverr graphic design gig rank করানোর complete guide ২০২৬ সালের জন্য updated। Gig title, description, SEO, tags — Bangladesh থেকে Fiverr এ সফল হওয়ার proven tips।`,
        content: `Fiverr এ বাংলাদেশ থেকে অনেক talented designers আছেন। কিন্তু talent থাকলেই Fiverr এ সফল হওয়া যায় না — সঠিক strategy দরকার।

আমি Fiverr এর algorithm এবং successful sellers দের strategy analyze করেছি। আজ সেই insights share করব।

**Fiverr Algorithm কীভাবে কাজ করে?**

Fiverr এর search algorithm primarily কয়েকটা factor দেখে:

১. **Gig Relevance:** Title, description, এবং tags search query এর সাথে কতটা match করে
২. **Seller Performance:** Response rate, order completion rate, reviews
৩. **Conversion Rate:** Gig visit হলে কতজন actually order করে
৪. **Recent Activity:** নতুন এবং active gigs priority পায়

**Perfect Gig Title তৈরি**

Gig title এ primary keyword সবার আগে রাখুন।

Bad title: "I will create a beautiful logo for your business"
Good title: "I will design a professional logo and brand identity for your business"

Search করুন: Fiverr এ "logo design" লিখলে কোন titles top এ আসে। সেগুলো analyze করুন।

**Gig Description Optimization**

প্রথম ১-২ লাইন সবচেয়ে গুরুত্বপূর্ণ। Client কে বলুন তারা কী পাবেন।

Format:
- Opening: Client এর problem address করুন
- Middle: আপনার solution এবং expertise
- Features: Bullet points এ deliverables
- Closing: CTA এবং why choose me

Keywords naturally use করুন। কিন্তু keyword stuffing করবেন না।

**Gig Images — সবচেয়ে গুরুত্বপূর্ণ**

Fiverr এ image ই first impression। ৩টা image এবং ১টা video (optional কিন্তু highly recommended)।

Image 1: আপনার best work showcase
Image 2: Process বা different style examples
Image 3: What's included infographic

Video: আপনার process দেখান। Video থাকলে conversion rate ৩৫% পর্যন্ত বাড়তে পারে।

**Pricing Strategy**

৩টা package:
- **Basic ($5-15):** Simple, quick version
- **Standard ($25-50):** Full service
- **Premium ($75-150+):** Complete package with extras

নতুন seller: শুরুতে competitive price রাখুন। Reviews আসলে বাড়ান।

**Tags Selection**

৫টা tags। Research করুন কোন tags সবচেয়ে বেশি searched। Mix করুন high competition এবং low competition tags।

Tools: Fiverr search suggestion, Google Keyword Planner

**First Orders পাওয়ার Strategies**

১. **Buyer Requests:** প্রতিদিন Buyers' Requests section check করুন এবং relevant requests এ apply করুন।

২. **Social Promotion:** নিজের Fiverr gig link social media তে share করুন।

৩. **Competitive Pricing:** প্রথম ১০টা review এর জন্য price কম রাখুন।

৪. **Quick Response:** Message আসলে ৩০ মিনিটের মধ্যে reply করুন।

৫. **Mutual Relationship:** অন্য sellers দের সাথে সম্পর্ক তৈরি করুন।

**Review পাওয়ার Tips**

- প্রতিটা order এ expected এর বেশি deliver করুন
- Clear communication maintain করুন
- Deadline এর আগে deliver করুন
- Order complete হলে politely review request করুন

**Common Mistakes**

১. Incomplete profile রাখা
২. Poor English writing
৩. Over-promising এবং under-delivering
৪. Review কিনতে চেষ্টা করা (account ban হবে)
৫. একটাই niche তে সব করার চেষ্টা

**বাস্তব Expectation**

Fiverr এ সফলতা রাতারাতি আসে না। প্রথম ৩-৬ মাস patience দরকার। Consistently quality deliver করুন এবং reviews collect করুন।

আমি নিজে Narayanganj, Bangladesh এ বসে international clients এর কাজ করি। আপনিও পারবেন — শুধু সঠিক strategy দরকার।`,
        tags: [
          `Fiverr gig rank 2026`,
          `Fiverr graphic design Bangladesh`,
          `Fiverr tips Bangla 2026`,
          `Fiverr gig optimize`,
          `Fiverr Bangladesh guide 2026`,
          `Fiverr থেকে আয়`,
        ],
        readTime: `9`,
        publishedAt: `2026-04-14`,
        coverUrl: `https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_015`,
        title: `Business Card Design Guide: First Impression তৈরির Professional Tips ও Tricks`,
        topic: `Graphic Design`,
        excerpt: `Professional business card design করুন। Size, layout, font, color — first impression তৈরির জন্য effective business card design এর complete guide ও Bangladesh এর printing tips।`,
        content: `Digital age এও business card এর relevance শেষ হয়নি। বরং যেহেতু সবাই digital হয়ে গেছে, তাই একটি premium physical business card এখন আরো বেশি memorable।

আমি বহু professionals এবং businesses এর জন্য business card design করেছি। আজ সেই experience share করব।

**Standard Business Card Specifications**

Size: 85mm × 55mm (standard) অথবা 3.5" × 2" (US standard)
Resolution: 300 DPI minimum
Color mode: CMYK (print এর জন্য)
Bleed: 3mm চারদিকে
Safe zone: Edge থেকে 5mm ভেতরে

**Business Card Design Principles**

**Minimalism:**
Less is more। একটি business card এ সব কিছু দেওয়ার চেষ্টা করবেন না। Essential information only।

**Hierarchy:**
আপনার নাম সবচেয়ে prominent। Title দ্বিতীয়। Contact information তৃতীয়।

**White Space:**
Breathing room দিন। Crowded card unprofessional দেখায়।

**Essential Information:**
- আপনার নাম
- Title/Position
- Company name
- Phone number
- Email
- Website (optional)
- Social media handle (optional)

**Premium Business Card Types**

**Standard (Matte/Glossy):**
Classic, affordable, widely used।

**Thick Card Stock:**
Premium feel, 400-600 GSM। Luxury impression।

**Spot UV:**
Specific areas glossy, বাকি matte। Logo বা name highlight হয়।

**Foil Stamping:**
Gold বা silver metallic effect। Very premium।

**Die-Cut:**
Unusual shapes। Memorable কিন্তু expensive।

**QR Code Integration:**
Modern business cards এ QR code রাখুন যা portfolio website বা LinkedIn এ link করে।

**Design Tips for Bangladeshi Professionals**

Bangla এবং English দুটো information রাখতে চাইলে double-sided card ব্যবহার করুন।

Industry অনুযায়ী style:
- Corporate/Finance: Conservative, dark colors, serif fonts
- Creative/Design: Bold, unique, shows personality
- Tech: Clean, modern, minimal
- Medical: Clean, trustworthy, professional

**File Preparation for Printing**

Adobe Illustrator বা InDesign এ design করুন। PDF/X-1a format এ export করুন। CMYK color mode ensure করুন।

বাংলাদেশের print vendors সাধারণত PDF চান। কিছু ভালো print shops:
- Dhaka এ PQS, Century Printers
- Online: Canva Print, Moo.com (international)

**Business Card Design Service**

আমি professional business card design করি যা আপনার brand personality reflect করে এবং print-ready files deliver করি।

Single sided, double sided, অথবা special finish — সব ধরনের business card design নিয়ে কথা বলতে আজই contact করুন।`,
        tags: [
          `business card design Bangladesh`,
          `visiting card design`,
          `professional business card`,
          `business card design tips`,
          `visiting card Bangladesh`,
          `business card design Bangla`,
        ],
        readTime: `6`,
        publishedAt: `2026-04-15`,
        coverUrl: `https://images.pexels.com/photos/4466175/pexels-photo-4466175.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_016`,
        title: `Midjourney Prompting Guide: Professional AI Art তৈরির Advanced Tips ও Tricks ২০২৬`,
        topic: `AI & Design`,
        excerpt: `Midjourney prompting master করুন। Advanced prompts, parameters, style guide — professional AI art তৈরির জন্য ২০২৬ সালের updated Midjourney tips ও tricks।`,
        content: `Midjourney এখন ১৯ মিলিয়ন registered users এর Discord server নিয়ে AI image generation এ lead করছে। V6.1 এবং V7 update এ images এতটাই realistic যে professional photography থেকে আলাদা করা কঠিন।

আমি Midjourney regularly ব্যবহার করি clients এর জন্য concept visualization, mood boards, এবং creative assets তৈরিতে। আজ আমার prompting knowledge share করব।

**Midjourney কীভাবে Access করবেন**

Midjourney এখন web interface (midjourney.com) এবং Discord দুটোতেই available।

Plans:
- Basic: $10/month (~200 images)
- Standard: $30/month (unlimited relaxed)
- Pro: $60/month (unlimited, fast, stealth)

**Effective Prompt Structure**

একটি strong Midjourney prompt এর formula:

[Subject] + [Setting/Environment] + [Style/Mood] + [Lighting] + [Camera/Lens] + [Technical Parameters]

Example:
"Professional graphic designer working at desk, modern office, golden hour lighting, shot with 85mm lens, cinematic, photorealistic --ar 16:9 --v 6.1"

**Subject Description Tips**

Specific হোন। "Man" নয়, "Young professional Bangladeshi man in business casual"।

Adjectives carefully choose করুন: Confident, elegant, minimalist, vibrant, dramatic।

**Style Keywords**

Design styles:
- "minimalist design" — clean, simple
- "flat design" — 2D, no shadows
- "material design" — Google's style
- "skeuomorphic" — realistic textures
- "brutalist design" — raw, bold

Art styles:
- "by Hayao Miyazaki" — anime style
- "watercolor illustration" — soft, artistic
- "vector art" — clean lines
- "photorealistic" — lifelike

**Lighting Keywords**

- "golden hour" — warm, soft sunset light
- "studio lighting" — professional, controlled
- "dramatic lighting" — high contrast
- "soft natural light" — diffused, gentle
- "neon lights" — colorful, urban

**Technical Parameters**

--ar (Aspect Ratio):
- --ar 1:1 (square)
- --ar 16:9 (widescreen)
- --ar 9:16 (portrait/story)
- --ar 4:5 (Instagram)

--v (Version):
- --v 6.1 (current stable)
- --v 7 (latest, most detailed)

--q (Quality):
- --q 0.5 (faster, less detail)
- --q 1 (default)
- --q 2 (more detail, slower)

--s (Stylize):
- --s 0 (photorealistic)
- --s 100 (balanced)
- --s 1000 (very artistic)

**Advanced Techniques**

**Negative Prompts (--no):**
--no blur, text, watermark, distorted faces

**Image Prompting:**
Upload a reference image URL before text prompt। Midjourney এটা style reference হিসেবে use করবে।

**Style Reference (--sref):**
Specific style consistently maintain করতে।

**Character Reference (--cref):**
Same character বারবার generate করতে।

**Remix Mode:**
Generated image কে modify করতে।

**Bangladesh এর Designers এর জন্য Practical Uses**

আমি Midjourney use করি:
- Client এর product visualization
- Social media creative concepts
- Mood boards এবং style guides
- Marketing campaign visuals
- Presentation backgrounds

**Copyright Consideration**

Midjourney generated images commercially use করা যায় (paid plan এ)। কিন্তু specific real person বা trademarked brand copy করা avoid করুন।

**AI Art কি Designer দের replace করবে?**

না। AI tool হলো brush — আপনার creativity এবং design knowledge এর বিকল্প নয়। AI দিয়ে generated raw output কে professional design এ রূপান্তর করতে designer এর skill দরকার।

AI আপনার speed বাড়াবে, replace করবে না।`,
        tags: [
          `Midjourney prompts guide`,
          `Midjourney Bangladesh`,
          `AI art tutorial Bangla`,
          `Midjourney tips 2026`,
          `AI image generation guide`,
          `Midjourney v7 prompts`,
        ],
        readTime: `10`,
        publishedAt: `2026-04-16`,
        coverUrl: `https://images.pexels.com/photos/8438937/pexels-photo-8438937.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_017`,
        title: `Graphic Designer Portfolio তৈরির Complete Guide: Clients Impress করার Proven Tips`,
        topic: `Career Tips`,
        excerpt: `Graphic designer portfolio তৈরি করুন যা client impress করে। Behance, personal website, project selection — Bangladesh এর designer দের জন্য portfolio building guide।`,
        content: `Client সিদ্ধান্ত নেন মাত্র কয়েক মিনিটে। আপনার portfolio এই কয়েক মিনিটে তাদের convince করতে হবে।

আমি অনেক designers দের portfolio দেখেছি এবং নিজেও বহু বছর ধরে portfolio build করেছি। আজ সেই experience share করছি।

**Portfolio কেন গুরুত্বপূর্ণ?**

Resume বলে আপনি কী করতে পারেন। Portfolio দেখায় আপনি আসলে কতটা ভালো। Clients portfolio দেখেই decide করেন।

**Portfolio Platform Options**

**Personal Website (Best):**
আপনার নিজের website — সবচেয়ে professional। পুরো control আপনার। SEO benefit পাবেন।

**Behance:**
Adobe এর platform। Design community তে well-known। Free।

**Dribbble:**
High-quality design showcase। Invitation only (বা paid)।

**LinkedIn:**
Professional network। Featured section এ portfolio link দিন।

**Instagram:**
Visual portfolio। Regular posting দরকার।

**কতটা কাজ রাখবেন?**

Less is more। ১৫-২০টি best work। ৫০টি average কাজের চেয়ে ১০টি excellent কাজ অনেক বেশি effective।

Quality > Quantity — এটা portfolio এর সবচেয়ে important rule।

**Case Studies তৈরি করুন**

Simple image upload এর বাইরে যান। প্রতিটি প্রধান project এর জন্য case study:

- Client এর problem কী ছিল?
- আপনি কীভাবে approach করলেন?
- Process এবং decisions
- Final result এবং client feedback

এতে আপনার thinking process দেখা যায় যা junior designer দের থেকে senior আলাদা করে।

**Niche Portfolio vs General Portfolio**

শুরুতে niche না করলেও চলে। কিন্তু experience বাড়ার সাথে niche focus portfolio বেশি effective।

Restaurant branding specialist? শুধু restaurant কাজ দেখান।
Tech startup logo designer? Tech companies র কাজ দেখান।

**Portfolio কে Regularly Update করুন**

প্রতি ৩ মাসে পুরনো weak কাজ সরান এবং নতুন ভালো কাজ যোগ করুন। Stagnant portfolio clients কে negative signal দেয়।

**Personal Work বা Concept Projects**

Client কাজ না থাকলে self-initiated projects করুন। Local brands এর rebrand করুন (exercise হিসেবে)। এগুলোও portfolio এ রাখা যায় — clearly "concept project" label করে।

**Portfolio Design নিজেই**

Portfolio website এর design নিজেই আপনার capability দেখায়। Clean, modern, easy to navigate। Mobile responsive হতে হবে অবশ্যই।

**Common Portfolio Mistakes**

১. সব কাজ upload করা
২. Context ছাড়া শুধু images
৩. Outdated work রাখা
৪. Poor presentation (bad mockups)
৫. No contact information

**Professional Mockups Use করুন**

Freepik, Mockup World, Unblast — এখানে free এবং premium mockups পাবেন। Logo design কে business card এ, t-shirt এ, signage এ দেখান।

Mockup দিয়ে present করলে client সহজে real-world application visualize করতে পারে।

**আমার Portfolio Website**

আমার নিজের portfolio website এই পেজ — সব কাজ এখানে দেখতে পাবেন। Projects, services, এবং contact সব organized আছে।

আপনিও কি professional portfolio দরকার? Contact করুন।`,
        tags: [
          `graphic design portfolio Bangladesh`,
          `designer portfolio guide`,
          `portfolio tips Bangla`,
          `Behance portfolio`,
          `graphic designer career Bangladesh`,
          `portfolio তৈরির guide`,
        ],
        readTime: `8`,
        publishedAt: `2026-04-17`,
        coverUrl: `https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_018`,
        title: `Business Brochure Design Guide: Effective Marketing Material তৈরির Step-by-Step Tutorial`,
        topic: `Graphic Design`,
        excerpt: `Effective business brochure design করুন। Layout, content structure, print spec — Bangladesh এর business দের জন্য marketing brochure design এর complete guide।`,
        content: `Digital marketing এর যুগেও physical brochure এর effectiveness কমেনি। Trade fairs, meetings, client visits — সব জায়গায় একটি well-designed brochure আপনার business কে represent করে।

**Brochure Types**

**Tri-fold (সবচেয়ে common):**
A4 paper কে তিনভাগে ভাঁজ করলে ৬টা panel পাওয়া যায়। Cost-effective এবং versatile।

**Bi-fold:**
A4 কে দুইভাগে ভাঁজ — ৪টা panel। Simple এবং clean।

**Z-fold:**
Accordion style fold। Unique presentation।

**Booklet:**
Multiple pages stapled। Detailed product catalogs এর জন্য।

**Brochure Design Planning**

Content Plan করুন আগে, Design পরে।

কোন panel এ কী থাকবে:
- Cover: Headline, strong visual, brand
- Inside panels: Services/products, features, benefits
- Back cover: Contact information, CTA

**Design Principles**

**Visual Flow:** Reader এর চোখ কোথা থেকে শুরু করে কোথায় যাবে পরিকল্পনা করুন।

**Consistency:** Same color palette, font family সব panels এ।

**White Space:** Crowded brochure পড়তে কেউ চায় না।

**High Quality Images:** Professional product বা lifestyle photos।

**Print Considerations**

Resolution: 300 DPI
Color: CMYK
Bleed: 3mm
File format: PDF/X-1a

Paper: 130-170 GSM coated paper সাধারণত ব্যবহৃত হয়।
Finish: Matte lamination professional look দেয়। Glossy বেশি vibrant।

**Content Writing Tips**

- Headlines: Benefit-focused। "Save 50%" not "We offer discounts"
- Body: Clear, concise, jargon-free
- CTA: Specific এবং clear action
- Contact: Phone, email, website, address সব

**বাংলাদেশের Businesses এর জন্য Brochure Design**

Medical clinics, educational institutions, real estate, restaurants, NGOs — সব sector এ brochure effective।

Bilingual (Bangla + English) brochure বাংলাদেশে বেশি relevant কারণ mixed audience থাকে।

**আমার Brochure Design Service**

আমি complete brochure design service provide করি — content consultation থেকে print-ready file delivery পর্যন্ত। Local printing vendors এর সাথে coordination ও করতে পারি।

আপনার business এর জন্য professional brochure দরকার? Contact করুন।`,
        tags: [
          `brochure design Bangladesh`,
          `marketing material design`,
          `brochure design tips Bangla`,
          `business brochure Bangladesh`,
          `print design Bangladesh`,
          `brochure design guide`,
        ],
        readTime: `7`,
        publishedAt: `2026-04-18`,
        coverUrl: `https://images.pexels.com/photos/6177602/pexels-photo-6177602.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_019`,
        title: `UI/UX Design Basics: App ও Website Design এর Fundamental Principles বাংলায়`,
        topic: `Web Design`,
        excerpt: `UI/UX design এর fundamentals শিখুন বাংলায়। User research, wireframe, prototype, Figma — app ও website design এর basic থেকে advanced principles বিস্তারিত।`,
        content: `আপনি কি কখনো একটি app use করতে গিয়ে frustrated হয়েছেন? কোন button কোথায় তা খুঁজে পাচ্ছিলেন না? এটাই bad UX design।

আর app টি যদি visually unattractive হয়? এটা bad UI design।

আমি graphic designer হিসেবে UI/UX principles নিয়ে কাজ করি। আজ beginners দের জন্য basics explain করব।

**UI vs UX — পার্থক্য কী?**

**UI (User Interface Design):**
Visual elements — colors, fonts, icons, buttons, layout। App বা website কেমন দেখায়।

**UX (User Experience Design):**
Overall experience — navigation, user journey, ease of use। App বা website কতটা সহজে use করা যায়।

Simple analogy: একটি সুন্দর restaurant (UI) কিন্তু খারাপ service (UX) — overall experience খারাপ।

**UI Design Principles**

**Visual Hierarchy:**
Important elements বড় এবং prominent। Less important smaller।

**Consistency:**
একই action সব জায়গায় same button এ। Users predict করতে পারে।

**Contrast:**
Text এবং background এ adequate contrast। Accessibility important।

**Whitespace:**
Screen crowded না করা। Breathing room দেওয়া।

**Color Psychology:**
Brand colors consistently use করুন। Action buttons (CTA) এর জন্য distinct color।

**UX Design Principles**

**User-Centered Design:**
User কে সবসময় center এ রাখুন। User এর need বুঝুন।

**Simplicity:**
Fewer steps better। Complex task simple করুন।

**Feedback:**
User এর action এর response দিন। Button click হলে visual feedback।

**Error Prevention:**
Errors হওয়ার আগে prevent করুন। Confirmation dialogs।

**Accessibility:**
Screen reader support, keyboard navigation, color blind friendly।

**Design Process**

1. **Research:** User research, competitor analysis
2. **Wireframe:** Basic layout sketch (low-fidelity)
3. **Prototype:** Clickable mockup (mid-fidelity)
4. **UI Design:** Final visual design (high-fidelity)
5. **Testing:** User testing এবং iteration

**Tools for UI/UX Design**

**Figma (most popular):** Collaborative, web-based, free tier available
**Adobe XD:** Adobe ecosystem এ integrate
**Sketch:** Mac only, professional standard
**InVision:** Prototyping focused

**Mobile-First Design**

২০২৬ সালে ৬০%+ web traffic mobile থেকে আসে। Mobile design আগে করুন, desktop পরে।

Touch target minimum 44×44px। Thumb-friendly navigation।

**Graphic Designer এবং UI/UX**

একজন graphic designer UI/UX এ transition করতে পারেন। Visual design skills already আছে — UX thinking এবং tools শিখতে হবে।

আমি web এবং app এর UI design করি। আপনার digital product এর জন্য visual design দরকার হলে contact করুন।`,
        tags: [
          `UI UX design Bangladesh`,
          `app design basics Bangla`,
          `web design Bangladesh`,
          `UI design tutorial Bangla`,
          `UX design principles`,
          `UI UX শেখার guide`,
        ],
        readTime: `8`,
        publishedAt: `2026-04-19`,
        coverUrl: `https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_020`,
        title: `Ramadan ও Eid Special Design: Festive Season এ Business Promote করার Visual Guide`,
        topic: `Graphic Design`,
        excerpt: `Ramadan ও Eid এর জন্য special design ideas। Islamic aesthetic, festive color, social media post — Bangladesh এর business দের জন্য festive season design guide।`,
        content: `বাংলাদেশে Ramadan এবং Eid দুটো সবচেয়ে বড় shopping season। Businesses এই সময়ে massive promotion করে থাকে। সঠিক visual design এই promotion কে effective করে।

আমি প্রতি বছর বহু businesses এর Ramadan এবং Eid special design করি। আমার অভিজ্ঞতা থেকে বলছি।

**Festive Season Design এর গুরুত্ব**

এই সময়ে consumer spending সবচেয়ে বেশি। আপনার brand কে audience এর সাথে emotionally connect করার সুযোগ। Competitors ও design করছে — আপনাকে stand out করতে হবে।

**Ramadan Design Aesthetics**

**Color Palette:**
- Primary: Deep green, royal blue, gold, burgundy
- Accent: White, cream, silver
- Avoid: Very bright neon colors — spiritual mood নষ্ট করে

**Visual Elements:**
- Crescent moon এবং star
- Mosque silhouette
- Lanterns (fanoos)
- Islamic geometric patterns
- Arabic calligraphy (যদি appropriate হয়)
- Dates, prayer beads (tasbih)

**Typography:**
- Elegant, refined fonts
- Arabic-inspired calligraphy fonts (decoratively)
- Bangla এবং English duality

**Eid Special Design**

Eid al-Fitr (Eid-ul-Fitr):
- Joyful, celebratory mood
- Brighter colors allowed
- Family, celebration themes
- "Eid Mubarak" prominent

Eid al-Adha (Eid-ul-Adha / Qurbani Eid):
- Sacrifice theme
- Green, white dominant
- Community, giving themes

**Design Types for Ramadan/Eid**

**Social Media Posts:**
- Iftar time notification
- Sehri reminder
- Daily Ramadan quotes
- Eid wishes post
- Offer announcements

**Festive Offer Banners:**
- Clear discount percentage
- Time-limited feel (urgency)
- Product showcase
- CTA button

**Profile/Cover Photo Update:**
- Temporary festive frame
- Brand logo with Ramadan touch
- Consistent with overall campaign

**Sahri/Iftar Time Graphics:**
Bangladesh এর prayer times graphic সহ poster — অনেক popular এবং widely shared। Al-Amin এর portfolio তেও এই ধরনের design আছে।

**Campaign Planning Timeline**

- Ramadan শুরুর ২ সপ্তাহ আগে: Campaign planning শুরু
- ১ সপ্তাহ আগে: Designs ready করুন
- Ramadan শুরু: Daily content শুরু
- শেষ ১০ রাত: Special Laylatul Qadr content
- Eid এর ৩ দিন আগে: Eid wishes campaign

**বাংলাদেশের Context**

বাংলাদেশের audience Bangla content বেশি engage করে। "রমজান মোবারক," "ঈদ মুবারক" বাংলায় লিখুন। Local cultural references ব্যবহার করুন।

**আমার Festive Design Service**

আমি প্রতি বছর Ramadan এবং Eid এর complete social media design package তৈরি করি। Cover photo, posts, stories — সব কিছু included।

আগামী festive season এর জন্য advance booking নিচ্ছি। Contact করুন।`,
        tags: [
          `Ramadan design Bangladesh`,
          `Eid poster design`,
          `festive design Bangladesh`,
          `Eid Mubarak design`,
          `Ramadan social media design`,
          `ইসলামিক design Bangladesh`,
        ],
        readTime: `7`,
        publishedAt: `2026-04-20`,
        coverUrl: `https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_021`,
        title: `Design Client Management Guide: Difficult Clients Handle করার Professional Tips`,
        topic: `Career Tips`,
        excerpt: `Difficult design clients handle করার professional tips। Scope creep, unlimited revision, late payment — Bangladesh এর freelance designer দের জন্য client management guide।`,
        content: `Designer হিসেবে আমাদের দুটো skill দরকার: design skill এবং client management skill। অনেক talented designers client management এর অভাবে ব্যর্থ হন।

আমি ৮+ বছরে local এবং international অনেক ধরনের client এর সাথে কাজ করেছি। আজ সেই অভিজ্ঞতা share করব।

**Client Management এর শুরু: Proper Briefing**

Project শুরুর আগে thorough briefing session। লিখিত brief নিন।

Brief এ থাকবে:
- Project scope এবং deliverables
- Timeline এবং deadlines
- Budget
- Revision policy
- Reference examples (what they like)
- Target audience
- Brand guidelines (যদি থাকে)

লিখিত brief না থাকলে misunderstanding inevitable।

**Expectation Setting**

শুরুতেই clearly বলুন:
- কতটা revision included
- Timeline কত
- কোন format এ deliver করবেন
- Payment terms

Over-promise করবেন না। Under-promise এবং over-deliver করুন।

**Revision Management**

Unlimited revision চাইলে project never end হয়।

Standard practice: ২-৩ rounds of revision included। Additional revision charged।

Revision clearly define করুন: "Revision" মানে minor changes, complete redesign নয়।

Revision চাইলে লিখিতভাবে নিন — verbal feedback ভুল communication এর বড় source।

**Difficult Client Types এবং Solutions**

**"Unlimited Revision" Client:**
Contract এ revision policy clearly লিখুন। Additional revision এর charge upfront discuss করুন।

**"Just Make it Pop" Client:**
Structure করা questions দিয়ে তাদের থেকে specific feedback বের করুন। "কোন color বেশি prefer করেন? কোন reference design ভালো লেগেছে?"

**"Copy Competitor" Client:**
Copyright এবং plagiarism এর risk explain করুন। Inspiration নেওয়া এবং copy করার পার্থক্য বোঝান।

**Budget Issue:**
Scope adjust করুন। Less deliverables কম budget এ।

**"Late Feedback" Client:**
Deadline এ feedback না পেলে project pause করুন। Delay তাদের কারণে হলে deadline extend করুন সেই delay যোগ করে।

**Payment Protection**

- 50% advance payment নিন সবসময়
- Milestone based payment (বড় project এর জন্য)
- Final files delivery কেবল full payment এর পরে
- PayPal বা bank transfer — trackable method ব্যবহার করুন

**Communication Best Practices**

- সব communication documented রাখুন (email বেশি safe)
- Response time set করুন (24 hours এর মধ্যে reply)
- Professional tone maintain করুন এমনকি difficult situations এ
- Good news এবং bad news উভয়ই promptly share করুন

**Saying No**

No বলতে শিখুন। Bad client, unrealistic deadline, বা below-market budget — এগুলো থেকে দূরে থাকুন।

Politely decline করার script:
"Thank you for reaching out. Currently I'm fully booked / This project isn't the right fit for my expertise / The budget doesn't match my current rates. I wish you success with the project."

**Long-term Client Relationship**

Best clients হলো repeat clients এবং referrals। Relationship build করুন।

- Project শেষে follow up করুন
- Occasional check-in message
- Special client discounts
- Birthday বা festival greetings

**উপসংহার**

Client management একটা skill — practice করলে improve হয়। শুরুতে mistakes হবে কিন্তু প্রতিটা challenge থেকে শিখুন।

Design এবং client management দুটোতেই দক্ষ হলে আপনি truly successful freelancer হতে পারবেন।`,
        tags: [
          `client management freelancer Bangladesh`,
          `difficult clients handle`,
          `freelance tips Bangladesh`,
          `design client tips Bangla`,
          `freelance designer guide`,
          `client management design`,
        ],
        readTime: `9`,
        publishedAt: `2026-04-21`,
        coverUrl: `https://images.pexels.com/photos/7648340/pexels-photo-7648340.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_022`,
        title: `AI কি Graphic Designer দের চাকরি নেবে? সত্যিটা যা কেউ বলছে না (২০২৬)`,
        topic: `AI & Design`,
        excerpt: `AI কি সত্যিই graphic designer দের চাকরি নেবে? ২০২৬ সালের বাস্তবতা, আমার ৮ বছরের অভিজ্ঞতা থেকে honest opinion। AI tools কিভাবে ব্যবহার করবেন — সম্পূর্ণ guide।`,
        content: `## AI কি Graphic Designer দের চাকরি নেবে? ২০২৬ এর বাস্তবতা

এই প্রশ্নটা এখন সবার মুখে। AI দেখে অনেক designer ভয় পাচ্ছেন।

আমি নিজে AI tools দিয়ে কাজ করি। আমার অভিজ্ঞতা থেকে সত্যিটা বলছি।

---

## ভয়টা কোথা থেকে আসছে?

AI দিয়ে এখন মাত্র কয়েক সেকেন্ডে এমন image বানানো যাচ্ছে যেটা বানাতে আগে ঘণ্টার পর ঘণ্টা লাগতো।

Canva র AI দিয়ে সাধারণ মানুষও এখন মোটামুটি একটা poster বানাতে পারছে। তাহলে designer দের কি দরকার আর?

---

## সত্যিটা হলো

AI একটা tool। অনেক powerful tool। কিন্তু tool এর নিজস্ব কোনো চিন্তা নেই, বিচারবোধ নেই।

**একটা উদাহরণ:**

একজন client এর restaurant এর জন্য logo দরকার। AI দিয়ে তিনি কিছু logo generate করলেন। দেখতে সুন্দর। কিন্তু সেই logo গুলো তার brand এর গল্প বলছে না।

তার restaurant এর পেছনে তার মায়ের recipe র কথা আছে, পারিবারিক ঐতিহ্যের কথা আছে। এই আবেগ AI capture করতে পারে না।

এটাই পার্থক্য।

---

## AI যা পারে

- দ্রুত concept তৈরি করা
- Multiple variation দেওয়া
- Reference image generate করা
- Repetitive কাজ করা

## AI যা পারে না

- Client এর সাথে বসে তার গল্প শোনা
- Brand এর emotion বোঝা
- Strategic brand decision নেওয়া
- Cultural sensitivity বোঝা
- Client কে convince করা

---

## তাহলে কে টিকে থাকবে?

**যারা AI কে embrace করবে, তারা।**
যারা AI কে ignore করবে, তারা পিছিয়ে পড়বে।

এটা সহজ equation।

AI tools শিখুন। Midjourney, Adobe Firefly, ChatGPT — এগুলো আপনার assistant।

কিন্তু শুধু AI শিখলে হবে না। Design fundamentals মজবুত করুন। Color theory, typography, brand strategy — এই জিনিসগুলো AI replace করতে পারবে না।

---

## এখনই করুন

১. Midjourney এর free tier দিয়ে experiment করুন
২. Adobe Firefly (free) ব্যবহার করুন
৩. AI output কে Illustrator এ refine করতে শিখুন

AI কে ভয় না, AI কে সঙ্গী করুন।`,
        tags: [
          `AI graphic designer চাকরি`,
          `AI design replace designer`,
          `AI vs designer Bangladesh`,
          `graphic design future AI`,
          `AI design Bangladesh 2026`,
          `AI চাকরি নেবে কিনা`,
        ],
        readTime: `7`,
        publishedAt: `2026-04-22`,
        coverUrl: `https://images.pexels.com/photos/8386365/pexels-photo-8386365.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_023`,
        title: `মাসে ৳৫০,০০০ Graphic Design Freelancing থেকে আয় করা কি সম্ভব? Honest Guide`,
        topic: `Career Tips`,
        excerpt: `বাংলাদেশে বসে graphic design freelancing থেকে মাসে ৫০ হাজার টাকা আয় কি সম্ভব? আমার personal journey ও students দের success story থেকে honest income guide।`,
        content: `## Graphic Design Freelancing Career: শুরু থেকে সফলতার Complete Guide

Freelancing মানে শুধু ঘরে বসে কাজ করা না। এটা একটা business চালানো।

অনেকে ভাবেন laptop আর internet থাকলেই freelancing শুরু করা যায়। সেটা সত্যি। কিন্তু সফল হতে হলে আরো অনেক কিছু লাগে।

---

## সত্যিকারের Expectation

Freelancing এ প্রথম কয়েক মাস অনেক কঠিন। Order আসে না। মনে হয় কিছু হচ্ছে না।

এই সময়টা অনেকে হাল ছেড়ে দেন। এটাই সবচেয়ে বড় ভুল।

**প্রথম ৩-৬ মাসে করণীয়:**
- Portfolio তৈরি করুন (৫-১০টা quality project)
- Skills improve করতে থাকুন
- Fiverr, Upwork profile optimize করুন
- Buyer requests এ apply করুন

---

## কোন Services এর চাহিদা সবচেয়ে বেশি?

২০২৬ সালে graphic design এ এই services এর demand বেশি:

**Logo Design & Brand Identity:**
Client দের কাছে সবচেয়ে বেশি চাওয়া হয়। শিখতে সময় লাগে, কিন্তু long-term সবচেয়ে ভালো return।

**Social Media Design:**
Regular কাজ পাওয়া যায়। Monthly retainer করলে stable income।

**Packaging Design:**
Competition কম, rate ভালো। বাংলাদেশের local business এ demand বাড়ছে।

**AI-assisted Design:**
নতুন field। Demand দ্রুত বাড়ছে। এখনই শিখলে এগিয়ে থাকবেন।

---

## কোথায় Client পাবেন?

**International:**
- Fiverr (beginners এর জন্য সবচেয়ে easy)
- Upwork (বেশি competition, কিন্তু rate ভালো)
- 99designs (design specific)

**Local:**
- Facebook Groups (Bangladesh এ অনেক active)
- LinkedIn (corporate client)
- Direct referral (সবচেয়ে quality client)

Local market কে ignore করবেন না। বাংলাদেশে professional design এর demand প্রতিদিন বাড়ছে।

---

## Pricing — কত নেবেন?

নিজেকে undervalue করবেন না।

শুরুতে competitive rate রাখুন। কিন্তু "free তে করে দিই" mentality থেকে বের হোন।

আপনার সময় আর skill এর একটা মূল্য আছে। সেই মূল্য নিজেই নির্ধারণ করুন।

---

## Long-term Success এর Formula

Quality + Consistency + Communication = Success

একটাও miss করলে হবে না।

**Quality:** প্রতিটা কাজ best effort দিন।
**Consistency:** নিয়মিত কাজ করুন, নিয়মিত শিখুন।
**Communication:** Client কে regularly update করুন। Deadline মেনে চলুন।

Freelancing marathon। Sprint না।`,
        tags: [
          `freelancing income Bangladesh`,
          `graphic design income Bangladesh`,
          `মাসে ৫০ হাজার আয়`,
          `Fiverr income Bangladesh`,
          `freelancing salary Bangladesh`,
          `graphic design career income`,
        ],
        readTime: `8`,
        publishedAt: `2026-04-23`,
        coverUrl: `https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_024`,
        title: `Canva দিয়ে Professional Design করা কি সম্ভব? ২০২৬ সালের Honest Review`,
        topic: `Graphic Design`,
        excerpt: `২০২৬ সালে Canva দিয়ে কি professional graphic design করা যায়? নিজে ব্যবহার করে honest review — কোন কাজে Canva best, কোথায় Illustrator দরকার।`,
        content: `## Canva দিয়ে Professional Design করা কি সম্ভব? ২০২৬ সালের Honest Review

প্রতি সপ্তাহে কেউ না কেউ এই প্রশ্নটা করেন।

"Canva দিয়ে কি professional কাজ হয়? নাকি Illustrator শিখতেই হবে?"

সরাসরি উত্তর দিচ্ছি।

---

## হ্যাঁ, Canva দিয়ে Professional কাজ হয়। কিন্তু সব কাজ না।

---

## Canva ২০২৬ সালে কোথায় এসেছে?

Canva এখন আর শুধু template tool না। Canva Visual Suite 2026 এ আছে:

- AI Magic Design — text থেকে complete design
- Background Removal (AI powered)
- Text to Image Generation
- Brand Kit — colors, fonts, logos সব এক জায়গায়
- Team collaboration
- Website builder
- Video editor

এটা এখন একটা complete creative suite।

---

## Canva যেখানে সেরা

- Social media posts ও stories
- Presentation ও pitch deck
- Email newsletter graphics
- YouTube thumbnail
- Simple event poster
- Quick turnaround content

এই কাজগুলোতে Canva Illustrator এর চেয়ে অনেক দ্রুত।

---

## Canva যেখানে পারে না

- Complex logo design (vector editing limited)
- Large format print (resolution problem)
- Custom illustration
- Packaging design (proper bleed/CMYK support নেই)
- Professional brand identity system

---

## আমি কি Canva ব্যবহার করি?

হ্যাঁ। Client এর social media content, quick mockup, presentation — এই কাজগুলো Canva তেই করি।

কিন্তু logo design, brand identity, packaging — এগুলো Adobe Illustrator এ।

---

## নতুনদের জন্য পরামর্শ

**এখনই income শুরু করতে চাইলে:** Canva দিয়ে শুরু করুন।

**Long-term professional career চাইলে:** Illustrator শিখুন।

**আদর্শ:** দুটোই শিখুন।

---

## একটা কথা মনে রাখবেন

Tool important। কিন্তু creative thinking বেশি important।

Canva ব্যবহার করে অনেকে professional quality কাজ deliver করেন। Illustrator ব্যবহার করেও অনেকে খারাপ কাজ করেন।

Tool এর পেছনে না দৌড়িয়ে আগে design fundamentals শিখুন।`,
        tags: [
          `Canva professional design Bangladesh`,
          `Canva review 2026`,
          `Canva vs Illustrator Bangladesh`,
          `Canva income Bangladesh`,
          `Canva design tips Bangla`,
          `Canva দিয়ে আয়`,
        ],
        readTime: `6`,
        publishedAt: `2026-04-24`,
        coverUrl: `https://images.pexels.com/photos/6177608/pexels-photo-6177608.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_025`,
        title: `Logo Design এর সঠিক মূল্য কত? Client এর সাথে Price Negotiation এর Complete Guide`,
        topic: `Career Tips`,
        excerpt: `Logo design এ কত টাকা নেওয়া উচিত? Bangladesh এর market rate, client negotiation tips, pricing strategy — freelance graphic designer দের জন্য complete pricing guide।`,
        content: `## Logo Design এর সঠিক Price কত? Client Negotiation এর Complete Guide

"ভাই, একটা logo করে দেন। বাজেট ৫০০ টাকা।"

এই situation প্রায় সব designer এর জীবনে আসে। এই মুহূর্তে কী করবেন?

---

## আগে বুঝুন: Logo Design এ আসলে কতটা সময় যায়?

একটা proper logo design করতে:

- Client briefing: ৩০-৪৫ মিনিট
- Research ও inspiration: ১-২ ঘণ্টা
- Sketching: ৩০-৬০ মিনিট
- Digital execution: ২-৪ ঘণ্টা
- Client presentation: ৩০ মিনিট
- Revision: ১-২ ঘণ্টা
- Final delivery preparation: ৩০ মিনিট

**মোট: ৬-১০ ঘণ্টা।**

এটা বোঝার পর নিজেই হিসাব করুন ৫০০ টাকায় ঘণ্টায় কত হয়।

---

## বাংলাদেশের Market Rate ২০২৬

এটা approximate। Experience ও quality অনুযায়ী পরিবর্তন হয়।

**Logo Design:**
- Basic (text-based, simple): ৳২,০০০–৳৫,০০০
- Standard (concept-based, versatile): ৳৫,০০০–৳১৫,০০০
- Premium (brand identity সহ): ৳১৫,০০০–৳৫০,০০০+

**International Market (Fiverr/Upwork):**
- Entry level: $25–$50
- Mid level: $100–$300
- Senior level: $500+

---

## Low Budget Client Handle করার স্মার্ট উপায়

দাম কমাবেন না। Scope কমান।

**উদাহরণ:**

Client বললেন ৳২,০০০ budget।

আপনি বলুন: "৳২,০০০ এ আমি একটা simple text-based logo করতে পারি। ৩টা font variation দেবো। Full brand identity এর জন্য ৳৮,০০০ লাগবে।"

এভাবে budget maintain করে কাজ পেলেও আপনি undervalue হলেন না।

---

## Revision নিয়ে Clear থাকুন

শুরুতেই বলুন: "আমার package এ ২ rounds of revision included। এর পর প্রতি revision এ [amount] charge হবে।"

এটা বলা মানে professional। অনেক client এর কাছে এটা trust বাড়ায়।

---

## সবচেয়ে গুরুত্বপূর্ণ কথা

নিজের কাজকে সম্মান না করলে client ও করবে না।

আপনার skill আছে, সময় আছে, creativity আছে। এর একটা মূল্য আছে।

সেই মূল্য নিজেই নির্ধারণ করুন। অন্যকে করতে দেবেন না।`,
        tags: [
          `logo design price Bangladesh`,
          `freelance rate Bangladesh`,
          `design pricing guide Bangla`,
          `logo design cost Bangladesh`,
          `client negotiation tips`,
          `design price কত নেবেন`,
        ],
        readTime: `6`,
        publishedAt: `2026-04-25`,
        coverUrl: `https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_026`,
        title: `ChatGPT দিয়ে Graphic Design করা যায়? ২০২৬ সালের Honest Review ও Tips`,
        topic: `AI & Design`,
        excerpt: `ChatGPT দিয়ে কি graphic design কাজ করা যায়? GPT-4o image generation নিজে ব্যবহার করে honest review — সুবিধা, সীমাবদ্ধতা ও কোন কাজে use করবেন।`,
        content: `## ChatGPT দিয়ে Graphic Design করা যায়? ২০২৬ সালের Honest Review

ChatGPT এখন শুধু লেখালেখির tool না।

GPT-4o দিয়ে এখন directly image তৈরি করা যাচ্ছে। Design community তে এটা নিয়ে অনেক আলোচনা।

নিজে ব্যবহার করে দেখেছি। Honest review দিচ্ছি।

---

## ChatGPT Image Generation এর সুবিধা

**Conversational prompting:** Midjourney তে perfect prompt একবারে লিখতে হয়। ChatGPT তে chat করতে করতে refine করা যায়।

"এই image বানাও" → দেখলাম → "background পরিবর্তন করো" → দেখলাম → "logo টা বড় করো"

এই iteration style অনেক সময় বাঁচায়।

---

## ChatGPT Image Generation এর সমস্যা

**Text rendering দুর্বল:** Logo design এ accurate typography দরকার। ChatGPT এখনও এখানে struggle করে।

**Character consistency নেই:** একই character কে multiple image এ consistently দেখাতে পারে না।

**Commercial use নিয়ে সতর্কতা:** Client work এ use করার আগে OpenAI এর terms of service ভালো করে পড়ুন।

---

## আমি কোন কাজে ChatGPT ব্যবহার করি?

- Initial concept brainstorming
- Client কে rough idea দেখানো
- Social media background ও illustration
- Presentation এর visual content

## কোন কাজে করি না?

- Logo design (text accuracy নেই)
- Print material (resolution control নেই)
- Brand identity (consistency নেই)

---

## Midjourney vs ChatGPT — কোনটা ভালো?

**দুটোর use case আলাদা।**

Midjourney: Artistic quality সেরা, complex visual এর জন্য best।
ChatGPT: Quick iteration, conversational workflow এর জন্য।

**আদর্শ:** দুটোই শিখুন। বিভিন্ন কাজে বিভিন্ন tool।

---

## Designer দের জন্য সত্যিকারের পরামর্শ

AI tools শুধু use করলেই হবে না। বুঝতে হবে কোন tool কোন কাজে কতটা suitable।

Tool এর raw output কে professional design এ রূপ দেওয়াটাই আপনার কাজ।

AI ছাড়া designer = slow
Designer ছাড়া AI = soulless

দুটো মিলিয়েই সেরা কাজ হয়।`,
        tags: [
          `ChatGPT graphic design Bangladesh`,
          `ChatGPT image generation 2026`,
          `AI design tools Bangladesh`,
          `ChatGPT vs Midjourney`,
          `ChatGPT design review Bangla`,
          `ChatGPT design tips`,
        ],
        readTime: `7`,
        publishedAt: `2026-04-26`,
        coverUrl: `https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_027`,
        title: `নতুন Graphic Designer দের ৭টা Common ভুল এবং কিভাবে এড়াবেন`,
        topic: `Career Tips`,
        excerpt: `নতুন graphic designer রা যে ৭টা common ভুল করেন। Portfolio, pricing, client handling — আমার ৮ বছরের experience থেকে beginners দের জন্য honest career advice।`,
        content: `## নতুন Graphic Designer রা যে ৭টা ভুল করেন

৮ বছরে অনেক নতুন designer দেখেছি।

কেউ খুব দ্রুত সফল হয়েছে। কেউ অনেক চেষ্টা করেও এগোতে পারেনি। পার্থক্যটা সাধারণত skills এ না — attitude আর approach এ।

একই ভুলগুলো বারবার দেখেছি। আজ সরাসরি বলছি।

---

## ভুল ১: Skills না শিখে Client খোঁজা

Fiverr account খুলে gig বানানো ঠিক আছে। কিন্তু portfolio না থাকলে, skills মজবুত না হলে — order আসলেও deliver করতে পারবেন না।

**করণীয়:** আগে শিখুন। তারপর বিক্রি করুন।

---

## ভুল ২: নিজেকে অনেক কম দামে বিক্রি করা

"আপাতত কম নিই, পরে বাড়াবো" — এই চিন্তাটা সমস্যা তৈরি করে।

একবার কম rate দিলে সেই client আর বেশি দিতে রাজি হন না। আর সেই client তাদের circle এ আপনাকে সেই rate এই recommend করেন।

**করণীয়:** শুরু থেকেই fair price রাখুন। Quality justify করুন।

---

## ভুল ৩: Client এর Feedback কে Personal Attack মনে করা

নিজের কাজ সবার কাছে সেরা মনে হয়। কিন্তু client এর perspective ও জরুরি।

Feedback মানে attack না। Feedback মানে improvement এর সুযোগ।

**করণীয়:** Objectively শুনুন। আবেগ সরিয়ে রাখুন।

---

## ভুল ৪: শুধু একটা Platform এ Depend করা

শুধু Fiverr বা শুধু Facebook। Platform এ কোনো সমস্যা হলে সব বন্ধ।

**করণীয়:** Multiple platforms এ থাকুন। Portfolio website বানান।

---

## ভুল ৫: Plagiarism ও Copy করা

অন্যের কাজ দেখে হুবহু বানানো। এটা নৈতিকভাবে ভুল এবং practically ক্ষতিকর।

Client eventually বুঝতে পারেন। একবার reputation নষ্ট হলে ফেরানো কঠিন।

**করণীয়:** Inspire নিন। Copy করবেন না।

---

## ভুল ৬: Unlimited Revision Offer করা

"Satisfaction guarantee until happy" — এই offer আপনাকে শেষ করে ফেলবে।

**করণীয়:** শুরুতেই বলুন কত rounds of revision included।

---

## ভুল ৭: শেখা বন্ধ করা

এই industry তে একদিন শেখা বন্ধ করলে পরের দিন থেকে পিছিয়ে পড়া শুরু।

Software update হয়। Trends change হয়। AI নতুন কিছু নিয়ে আসে।

**করণীয়:** প্রতিদিন কিছু না কিছু নতুন শিখুন।

---

Successful হওয়া মানে সব সময় perfect কাজ করা না। মানে হলো ভুল থেকে শিখে এগিয়ে যাওয়া।`,
        tags: [
          `নতুন designer mistakes Bangladesh`,
          `beginner designer tips Bangla`,
          `graphic design mistakes`,
          `design career tips Bangladesh`,
          `freelance designer mistakes`,
          `নতুন designer guide`,
        ],
        readTime: `7`,
        publishedAt: `2026-04-27`,
        coverUrl: `https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_028`,
        title: `Adobe Illustrator শেখার সেরা Free Resources ২০২৬: কোনো Paid Course ছাড়াই শিখুন`,
        topic: `Tutorials`,
        excerpt: `Adobe Illustrator শিখুন সম্পূর্ণ free তে — কোনো paid course ছাড়াই। YouTube channels, official tutorials, practice resources — আমার নিজের শেখার পথ share করছি।`,
        content: `## Adobe Illustrator শেখার সেরা Free Resources ২০২৬

একটা কথা দিয়ে শুরু করি।

Illustrator শিখতে আমি কোনো paid course কিনিনি।

আজকে যা জানি সব YouTube, Adobe এর official tutorials, আর হাতে কলমে practice থেকে।

---

## Best Free YouTube Channels

### Dansky
Illustrator এর basics থেকে advanced — এই channel এ সব আছে। Visually এত clear যে ভাষা barrier হয় না।

### Logos By Nick
Logo design focused। Real world logo বানানো শেখায়। Practical কাজের জন্য excellent।

### Satori Graphics
Design theory আর Illustrator combine করে শেখায়। Theory বোঝার জন্য সেরা।

---

## Adobe এর Official Resources

**adobe.com/learn** — সবচেয়ে accurate tutorials। Software নিজে তৈরি করেছে যারা তাদের কাছ থেকে শেখা।

---

## Practice এর জন্য

**Vecteezy:** Free vector download করুন, দেখুন কিভাবে বানানো। এভাবে অনেক technique শেখা যায়।

**Daily Logo Challenge:** প্রতিদিন একটা logo prompt দেয়। Practice এর জন্য perfect।

**Behance ও Dribbble:** Top designers এর কাজ দেখুন। Aspire করুন।

---

## বাংলায় শিখতে চাইলে

YouTube এ "Adobe Illustrator Bangla" সার্চ করুন। এখন অনেক ভালো বাংলা content আছে।

---

## Realistic Timeline

**Basic tool mastery:** ২-৩ মাস (প্রতিদিন ১ ঘণ্টা practice)
**Professional quality কাজ:** ৬-১২ মাস
**Expert level:** কয়েক বছর

---

## সবচেয়ে গুরুত্বপূর্ণ

Resource এর অভাব নেই। Consistency এর অভাব।

প্রতিদিন ১ ঘণ্টা করে ৩ মাস practice করুন। কোনো paid course দরকার নেই।

শুরু করুন আজই।`,
        tags: [
          `Adobe Illustrator free resources`,
          `Illustrator শেখার free উপায়`,
          `graphic design free course Bangladesh`,
          `Illustrator tutorial বাংলা free`,
          `design শেখার free resources`,
          `Adobe Illustrator Bangladesh free`,
        ],
        readTime: `6`,
        publishedAt: `2026-04-28`,
        coverUrl: `https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_029`,
        title: `Digital Marketing এ Graphic Design এর ভূমিকা: Business Owner দের জন্য Complete Guide`,
        topic: `Graphic Design`,
        excerpt: `Graphic design কিভাবে business এর digital marketing সফল করে? Visual content, brand identity, social media design — Bangladesh এর business owner দের জন্য practical guide।`,
        content: `## ব্যবসায় Graphic Design এর ভূমিকা: Business Owner দের জন্য Guide

আমার পরিচিত একজন ব্যবসায়ী আছেন। খুব ভালো product। কিন্তু sales নেই।

একদিন তার Facebook page দেখলাম। Product এর ছবি ভালো না, font mismatched, color random।

তাকে design এ invest করতে বললাম।

তিনি বললেন, "design এ কি হবে? Product ভালো হলেই তো কাজ হওয়ার কথা।"

এই ভুল ধারণাটাই তাকে পিছিয়ে রাখছিলো।

---

## মানুষ কিনে কেন?

Research বলে — purchasing decision এর বড় অংশ নির্ভর করে visual element এর উপর।

Product যতই ভালো হোক — মানুষ প্রথমে দেখে, তারপর কেনে।

সুন্দর packaging এর average product বেশি বিক্রি হয়। এটা দুঃখজনক হলেও সত্যি।

---

## Design কিভাবে Business কে Help করে?

### First Impression

কোনো business এর প্রথম impression তৈরি হয় visual থেকে। Logo, color, font — এগুলো দেখেই মানুষ decide করে trust করবে কিনা।

### Brand Recognition

Consistent design মানুষের মনে brand গেঁথে দেয়। আপনার brand color দেখলে মানুষ যেন instantly চিনতে পারে।

### Social Media Reach

ভালো design এর post বেশি share হয়। বেশি reach মানে বেশি potential customer।

### Price Justification

Professional design product এর perceived value বাড়ায়। একই product সুন্দর packaging এ বেশি দামে বিক্রি হয়।

---

## বাংলাদেশের Small Business দের জন্য Practical Advice

**Logo:** একবার ভালো logo বানান। বছরের পর বছর ব্যবহার হবে।

**Social Media:** Consistent template তৈরি করুন। প্রতিটা post আলাদা style না।

**Business Card:** Professional business card আপনার credibility বাড়ায়।

**Packaging:** Product sell হলে packaging এ invest করুন।

---

## Design কে Expense না, Investment মনে করুন

সেই ব্যবসায়ী এখন professional design ব্যবহার করছেন। তার sales বেড়েছে।

Design এ সঠিক investment সঠিক return দেয়।`,
        tags: [
          `digital marketing design Bangladesh`,
          `business design importance`,
          `brand design business Bangladesh`,
          `social media design business`,
          `marketing design tips Bangla`,
          `ব্যবসায় design এর গুরুত্ব`,
        ],
        readTime: `7`,
        publishedAt: `2026-04-29`,
        coverUrl: `https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_030`,
        title: `Midjourney V7 Review বাংলাদেশ থেকে: Worth It নাকি নয়? সৎ মূল্যায়ন`,
        topic: `AI & Design`,
        excerpt: `Midjourney V7 কি Bangladesh এর designer দের জন্য worth it? নিজে ব্যবহার করে detailed review — features, price, limitations ও কিভাবে payment করবেন।`,
        content: `## Midjourney V7 Review ২০২৬: বাংলাদেশ থেকে Worth It?

Midjourney V7 release এর পর design community তে অনেক আলোচনা।

কয়েক সপ্তাহ নিজে ব্যবহার করেছি। Honest review দিচ্ছি।

---

## V7 এ কী নতুন?

**Photorealism:** V6 এর তুলনায় অনেক উন্নত। এখন যে images generate হচ্ছে সেগুলো professional photography থেকে আলাদা করা কঠিন।

**Character Consistency:** আগে একই character কে multiple image এ consistent রাখা কঠিন ছিলো। V7 এ অনেক better।

**Draft Mode:** দ্রুত low quality preview। Time save হয়।

**Personalization:** আপনার style শিখতে পারে। বেশি ব্যবহার করলে আপনার preference অনুযায়ী output দেয়।

---

## আমি কিভাবে ব্যবহার করি?

Client এর project এ concept visualization এ।

Client যখন বলেন "আমি চাই এই ধরনের feel" — তখন Midjourney দিয়ে কয়েকটা concept দেখাই। Client সাথে সাথে বুঝতে পারেন। Design process অনেক smooth হয়।

---

## বাংলাদেশ থেকে Payment করবেন কিভাবে?

International card দরকার। Wise card বা Payoneer card দিয়ে payment করা যায়।

কেউ কেউ বিশ্বস্ত কারো মাধ্যমে payment করেন।

---

## Free Alternatives

Budget না থাকলে:
- **Leonardo.ai** — Free tier আছে, quality ভালো
- **Adobe Firefly** — Creative Cloud subscribers free, commercial safe
- **Bing Image Creator** — DALL-E 3 based, free

---

## Worth It?

Professional designer হিসেবে কাজ করলে — **হ্যাঁ।**

Basic Plan: $10/month। একটা client project এ use করলেই ROI recover।

শুধু experiment করতে চাইলে — free alternatives দিয়ে শুরু করুন।

---

## শেষ কথা

Midjourney V7 clearly এখন পর্যন্ত সেরা AI image generator।

কিন্তু এটা শুধু tool। Tool দিয়ে ভালো কাজ করতে হলে design fundamentals জানতে হবে।

Tool এ invest করার আগে skills এ invest করুন।`,
        tags: [
          `Midjourney V7 review Bangladesh`,
          `Midjourney worth it Bangladesh`,
          `Midjourney subscription Bangladesh`,
          `AI image generator review Bangla`,
          `Midjourney 2026 review`,
          `Midjourney V7 Bangla`,
        ],
        readTime: `7`,
        publishedAt: `2026-04-29`,
        coverUrl: `https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_031`,
        title: `Fiverr এ প্রথম Order পাওয়ার Real Story: যা শিখেছিলাম যা আর কেউ বলে না`,
        topic: `Career Tips`,
        excerpt: `Fiverr এ প্রথম order পাওয়ার real story — ৩ মাস wait এর পর। কি শিখেছিলাম, কোন ভুল করেছিলাম — নতুন Fiverr freelancer দের জন্য honest experience sharing।`,
        content: `## Fiverr এ প্রথম Order পাওয়ার গল্প ও যা শিখেছিলাম

প্রথম Fiverr order এর কথা এখনো মনে আছে।

Gig বানিয়েছিলাম। তারপর অপেক্ষা। এক সপ্তাহ। দুই সপ্তাহ। একমাস। কোনো order নেই।

মনে হচ্ছিলো Fiverr এ হয়তো আমার জন্য না।

তারপর একদিন notification এলো। First order।

একটা ছোট social media post design। দাম অনেক কম। কিন্তু সেই মুহূর্তের অনুভূতি এখনো মনে আছে।

---

## প্রথম Order থেকে যা শিখেছিলাম

Client চেয়েছিলেন "something professional and clean।"

আমি বানিয়েছিলাম আমার কাছে যা professional মনে হয়েছে। Client এর feedback এলো: "Not exactly what I had in mind।"

তৃতীয় revision এ client happy হলেন।

**শিক্ষা:** Client এর "professional" আর আমার "professional" এক না। আগেই detail জানতে হবে।

---

## Fiverr Success এর Timeline (Realistic)

এটা আমার বা অন্য কারো specific timeline না — এটা একটা realistic pattern:

- **Month 1:** 0 orders, অনেক frustration (normal)
- **Month 2-3:** First order, তারপর ধীরে ধীরে আরো
- **Month 4-6:** Regular orders, Level 1 seller
- **Month 7-12:** Consistent income, Level 2 seller

প্রতিটার জন্য timeline আলাদা হতে পারে। কিন্তু consistent থাকলে এগিয়ে যাওয়া যায়।

---

## প্রথম ৩ মাসে Order না আসলে কী করবেন?

**হাল ছাড়বেন না।**

এই সময়টা কাজে লাগান:
- Portfolio improve করুন
- Gig description optimize করুন (keyword research করুন)
- Buyer Requests এ apply করুন
- Skills আরো মজবুত করুন
- Social media তে work share করুন

---

## একটা জিনিস যা সবচেয়ে বেশি Help করে

**Quick response time।**

Fiverr এ message আসলে দ্রুত reply করুন। Algorithm এটাকে factor করে।

সকালে উঠে একবার, রাতে ঘুমানোর আগে একবার check করুন।

---

## সত্যিকারের Expectation

Fiverr এ success আসে। কিন্তু রাতারাতি না।

Consistent থাকুন। Quality maintain করুন। Communicate professionally।

ধীরে ধীরে হবে। ইন শা আল্লাহ।`,
        tags: [
          `Fiverr first order Bangladesh`,
          `Fiverr শুরু করার guide`,
          `Fiverr success story Bangla`,
          `Fiverr tips beginners Bangladesh`,
          `Fiverr graphic design order`,
          `Fiverr প্রথম order`,
        ],
        readTime: `7`,
        publishedAt: `2026-04-30`,
        coverUrl: `https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_032`,
        title: `Instagram থেকে Design Client পাওয়ার Complete Strategy Guide ২০২৬`,
        topic: `Graphic Design`,
        excerpt: `Instagram থেকে graphic design client পাওয়ার proven strategy ২০২৬। Content mix, hashtags, Reels — Bangladesh এর freelance designer দের জন্য Instagram business guide।`,
        content: `## Instagram থেকে Design Client পাওয়ার Complete Strategy ২০২৬

Instagram কে অনেকে personal photo sharing platform মনে করেন।

আমার কাছে এটা একটা business tool। এখান থেকে design client পাওয়া সম্ভব।

কিন্তু randomly post করলে হবে না। Strategy দরকার।

---

## Profile Optimize করুন প্রথমে

**Username:** সহজ, মনে রাখার মতো।

**Bio:** Clearly বলুন আপনি কী করেন।
"Graphic Designer | Logo & Brand Identity | DM করুন"

**Profile photo:** আপনার professional photo। Brand কে human করে।

**Link in bio:** Portfolio website বা WhatsApp link।

---

## Content Strategy: তিন ধরনের Content

**Portfolio Content (40%):**
আপনার কাজ দেখান। Before/After সবচেয়ে effective।

**Educational Content (40%):**
Design tips, quick tutorials, industry insights। এটা আপনার expertise prove করে।

**Personal Content (20%):**
কাজের পেছনের গল্প, আপনার journey, challenges। মানুষ মানুষকে follow করে।

---

## Consistency

প্রতিদিন post করতে হবে এমন না।

কিন্তু সপ্তাহে অন্তত ৩-৪টা post regular রাখুন।

Feed এর color theme consistent রাখুন। একটা brand এর মতো।

---

## Reels এ Focus করুন

২০২৬ এ Reels এর organic reach সবচেয়ে ভালো।

**কোন Reels ভালো perform করে:**
- Design process time-lapse
- "How I designed this logo"
- Before/After transformation
- Quick design tips

---

## Hashtag Strategy

Generic hashtags এ competition বেশি। Niche hashtags ব্যবহার করুন।

**Bangladesh specific:** #bangladeshdesigner, #logobangladesh, #designerbangladesh

**Niche:** আপনার service অনুযায়ী specific hashtags

---

## Realistic Result

Consistent থাকলে ৩-৬ মাসে meaningful results শুরু হয়।

কিন্তু মনে রাখবেন — follower count দিয়ে business measure করবেন না।

১০,০০০ unfocused follower এর চেয়ে ৫০০ targeted follower অনেক বেশি valuable।`,
        tags: [
          `Instagram design client Bangladesh`,
          `Instagram business design 2026`,
          `Instagram freelancing Bangladesh`,
          `social media client পাওয়া`,
          `Instagram designer tips Bangla`,
          `Instagram থেকে আয়`,
        ],
        readTime: `8`,
        publishedAt: `2026-04-30`,
        coverUrl: `https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_033`,
        title: `একজন Freelance Graphic Designer এর Real Daily Routine: Behind the Scenes`,
        topic: `Career Tips`,
        excerpt: `একজন freelance graphic designer এর সারাদিন কেমন কাটে? সকাল থেকে রাত — real routine, challenges ও behind the scenes। Freelancing reality Bangladesh context এ।`,
        content: `## একজন Freelance Graphic Designer এর Real Daily Routine

"Designer দের কাজ তো মজার — সারাদিন creative কাজ।"

এই কথাটা শুনলে হাসি পায়।

সত্যি বলছি — একজন professional designer এর দিনের অনেকটা সময় যায় client communication এ, revisions এ, আর অদেখা backend কাজে।

---

## আমার একটা সাধারণ কর্মদিন

**সকাল ৮টা — শুরু**

ফজরের নামাজ, নাস্তা শেষে প্রথম কাজ — messages check করা। Client এর কোনো message আছে কিনা, নতুন কোনো inquiry এসেছে কিনা।

**সকাল ৯টা–১২টা — Deep Work**

এই সময়টা সবচেয়ে productive। Phone notification off। Distraction ছাড়া design করি।

নতুন project এর research, concept development, execution — এই সময়ে।

**দুপুর ১২টা–২টা — Communication**

Client call, email reply, নতুন project briefing। এই সময়টা পুরোটাই client management।

এই অংশটা outsider রা দেখে না। কিন্তু freelancing এর অনেকটা সময় এখানে যায়।

**বিকাল ২টা–৫টা — Revision ও Delivery**

সকালের কাজ review। Feedback অনুযায়ী revision। Approved কাজ deliver।

**সন্ধ্যা ৫টা–৭টা — Learning**

YouTube এ নতুন tutorial, industry news, design inspiration। এই সময়টা নিজের।

**রাত ৭টার পর — Family Time**

কাজ বন্ধ। Freelancing এর একটা বড় ফাঁদ হলো work-life balance নষ্ট করা। আমি সচেতনভাবে এটা maintain করি।

---

## Reality Check

সব দিন এত smooth যায় না।

কখনো deadline চাপে রাত ২টায় কাজ করতে হয়। কখনো client গায়েব হন। কখনো পুরো দিন কাজ করেও মনে হয় কিছু হয়নি।

এই সবকিছু মিলিয়েই এই profession।

---

## তবুও কেন ভালো লাগে?

কারণ নিজের সময়ের মালিক নিজে।

এই freedom টার জন্যই সব ঝামেলা সহ্য হয়।`,
        tags: [
          `freelance designer daily routine Bangladesh`,
          `graphic designer life Bangladesh`,
          `freelancer routine Bangla`,
          `designer কাজের ধরন`,
          `freelancing reality Bangladesh`,
          `freelance life Bangla`,
        ],
        readTime: `7`,
        publishedAt: `2026-05-01`,
        coverUrl: `https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_034`,
        title: `Color Psychology in Design: McDonald's লাল কেন, Facebook নীল কেন? বিজ্ঞানসম্মত ব্যাখ্যা`,
        topic: `Tutorials`,
        excerpt: `McDonald's লাল-হলুদ কেন? Facebook নীল কেন? Color psychology in design — brand color choice এর science বাংলায়। Business ও design উভয়ের জন্য practical color guide।`,
        content: `## Color Psychology: McDonald's লাল কেন, Facebook নীল কেন?

একটা প্রশ্ন দিয়ে শুরু করি।

McDonald's লাল-হলুদ কেন? Accident নয়।

লাল মানুষের ক্ষুধা বাড়ায় — research সেটাই বলে। হলুদ energy আর সুখের অনুভূতি দেয়। দুটো মিলিয়ে — "আমি ক্ষুধার্ত, এখানে এলে ভালো লাগবে।"

এটা psychology। এটা science।

---

## রঙের অর্থ

**লাল:** শক্তি, জরুরিতা, আবেগ। Sale announcement, food brand এ কাজ করে। McDonald's, Coca-Cola, KFC।

**নীল:** বিশ্বাস, নিরাপত্তা, পেশাদারিত্ব। Bank, tech company, healthcare। Facebook, Samsung, PayPal।

**সবুজ:** প্রকৃতি, স্বাস্থ্য, growth। Organic product, finance, wellness। WhatsApp, Whole Foods।

**হলুদ:** আনন্দ, আশাবাদ, মনোযোগ। কিন্তু অতিরিক্ত হলুদ anxiety তৈরি করে।

**কালো:** বিলাসিতা, পরিশীলতা, ক্ষমতা। Luxury brand এ। Chanel, Apple (black products)।

**সাদা:** বিশুদ্ধতা, পরিষ্কার, সরলতা। Healthcare, minimalist brand।

---

## বাংলাদেশের Cultural Context

Color psychology পশ্চিমা research এর উপর বেশি নির্ভরশীল। আমাদের culture এ কিছু পার্থক্য আছে।

**সবুজ:** আমাদের কাছে ইসলামিক পরিচয়ের সাথে যুক্ত। Islamic brand এ সবুজ automatically trustworthy।

**লাল-সবুজ:** জাতীয় পরিচয়ের রঙ। Patriotic brand এ powerful।

---

## Practical Tips

১. Client এর target audience বোঝার পর color choose করুন। নিজের পছন্দে না।

২. Industry convention দেখুন। কিন্তু blindly follow করবেন না। Competitor থেকে আলাদা হওয়ার সুযোগও আছে।

৩. Black and white এ design দেখুন আগে। Contrast ঠিক থাকলে color দিন।

৪. Maximum ৩টা primary color। বেশি হলে chaotic।

৫. Color blindness এর কথা মনে রাখুন। ১০% মানুষ কোনো না কোনো color blindness এ ভোগেন।

---

## এটা শুধু Design এর কথা না

আপনি যদি ব্যবসায়ী হন — নিজের brand এর color choose করার আগে এই psychology মাথায় রাখুন।

Color কখনো accident হওয়া উচিত না।`,
        tags: [
          `color psychology design Bangla`,
          `brand color psychology Bangladesh`,
          `color theory Bangla`,
          `রঙের মনোবিজ্ঞান design`,
          `brand color meaning`,
          `color choice business Bangladesh`,
        ],
        readTime: `8`,
        publishedAt: `2026-05-01`,
        coverUrl: `https://images.pexels.com/photos/1389460/pexels-photo-1389460.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_035`,
        title: `HSC পরীক্ষার পর Graphic Design Career শুরু করুন: Complete Beginner's Guide ২০২৬`,
        topic: `Career Tips`,
        excerpt: `HSC পরীক্ষার পর graphic design career শুরু করার complete guide। কোথায় শিখবেন, কিভাবে শুরু করবেন, income কেমন হবে — Bangladesh এর students দের জন্য career roadmap।`,
        content: `## HSC পরে Graphic Design Career: Complete Beginner's Guide ২০২৬

HSC পরীক্ষা শেষ হওয়ার পর একটা অদ্ভুত সময় আসে।

University ভর্তি হতে কয়েক মাস বাকি। পরীক্ষার চাপ নেই। কিন্তু করার কিছু নেই মনে হচ্ছে।

এই সময়টা অনেকে নষ্ট করেন। আমি চাই আপনি না করুন।

---

## এই Gap Time এ কী করবেন?

Graphic Design শিখুন।

৩-৪ মাস সময় আছে। এই সময়ে basics শিখে ফেলা সম্ভব।

---

## কেন Graphic Design?

এটা এমন একটা skill যেটা:
- Laptop আর internet থাকলে বাড়ি থেকে করা যায়
- University পড়ার পাশাপাশিও করা যায়
- বাংলাদেশ এবং internationally দুটোতেই কাজ করা যায়
- Demand প্রতি বছর বাড়ছে

---

## কোথা থেকে শুরু করবেন?

**Step 1: Canva দিয়ে শুরু করুন**
YouTube এ "Canva tutorial Bangla" সার্চ করুন। ৭ দিনে basics শিখুন।

**Step 2: Adobe Illustrator এর Free Trial নিন**
২২ দিনের free trial। এই সময়ে basics শিখুন।

**Step 3: Practice Projects করুন**
বন্ধুর birthday poster, পরিচিত কারো business এর social media post। Real কাজ করুন।

**Step 4: Portfolio তৈরি করুন**
Behance এ upload করুন। ৫-১০টা project হলেই শুরু করা যাবে।

**Step 5: Fiverr Account খুলুন**
কাজ পেতে সময় লাগবে। কিন্তু শুরু করতে হবে।

---

## University পড়া বন্ধ করতে হবে কি?

না।

University পড়ুন। পাশাপাশি skill develop করুন।

Degree আছে এবং practical skill আছে — এই combination job market এ অনেক এগিয়ে রাখে।

---

## একটা সত্যি কথা

৩-৪ মাসে professional designer হওয়া যাবে না। কিন্তু শুরু করা যাবে।

এই industry তে বয়স বা শিক্ষাগত যোগ্যতার চেয়ে skill ও portfolio বেশি matter করে।

আজই শুরু করুন। ইন শা আল্লাহ সামনে ভালো কিছু আছে।`,
        tags: [
          `HSC পরে career Bangladesh`,
          `graphic design career Bangladesh youth`,
          `design শেখা HSC পরে`,
          `young designer Bangladesh`,
          `HSC gap time productive`,
          `graphic design শুরু করা`,
        ],
        readTime: `7`,
        publishedAt: `2026-05-01`,
        coverUrl: `https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_036`,
        title: `ChatGPT যেভাবে জন্ম নিয়েছিল: রাত ১১টায় একটা ছোট্ট Launch, তারপর যা হলো পুরো পৃথিবী দেখলো`,
        topic: `AI & Design`,
        excerpt: `২০২২ সালের ৩০ নভেম্বর রাতে OpenAI একটা 'demo' launch করেছিল। ভেবেছিল হয়তো কিছু developer দেখবে। ৫ দিনে ১০ লাখ user। এই গল্পটা শুনতে হবে।`,
        content: `২০২২ সালের নভেম্বরের শেষ দিকে OpenAI এর একটা ছোট্ট team কিছু একটা launch করার প্রস্তুতি নিচ্ছিলো।

এটা ছিল তখন শুধু "Chat With GPT-3.5" — একটা prototype। Sam Altman নিজেই পরে স্বীকার করেছেন, তারা শুধু developers দের কাছে একটা demo দেখাতে চেয়েছিলেন। কোনো বড় ambition ছিল না সেদিন।

৩০ নভেম্বর ২০২২। রাত। ChatGPT launch হলো।

পাঁচ দিনে ১০ লাখ user।

দুই মাসে ১০ কোটি।

ইন্টারনেটের ইতিহাসে এত দ্রুত এত বড় কোনো platform এত মানুষের কাছে পৌঁছায়নি।

---

## শুরুটা কোথায়?

২০১৫ সাল। San Francisco এ একটা dinner table এ বসে কয়েকজন মিলে সিদ্ধান্ত নিল — AI কে শুধু কোম্পানির হাতে ছেড়ে দেওয়া যাবে না। এটাকে সবার জন্য উন্মুক্ত রাখতে হবে।

সেই dinner এ ছিলেন Sam Altman, Elon Musk, Greg Brockman, Ilya Sutskever সহ আরো কয়েকজন।

তারা মিলে গড়লেন OpenAI। Non-profit হিসেবে। লক্ষ্য একটাই — AGI (Artificial General Intelligence) তৈরি করা, কিন্তু পুরো মানবজাতির জন্য।

শুরুতে মাত্র ৮ জন। একটা room। অনেক বড় স্বপ্ন।

---

## GPT থেকে ChatGPT — যে journey টা কেউ ভাবেনি

OpenAI প্রথমে শুধু research করতো। GPT-1, GPT-2, GPT-3 — এগুলো ছিল powerful কিন্তু "boring" tool। Developer রা ব্যবহার করতো, সাধারণ মানুষ বুঝতো না।

তারপর ২০২২ সালে OpenAI এর একটা team খেয়াল করলো — API এর playground এ মানুষ জায়গায় জায়গায় model এর সাথে "কথা বলছে"। এটা দেখে আইডিয়া এলো।

কী হবে যদি এই conversational experience টাকে একটা product হিসেবে দেওয়া যায়?

সেই ভাবনা থেকেই ChatGPT।

Sam Altman পরে লিখেছেন, চাইলে আগেই launch করতে পারতেন। কিন্তু সেটা সঠিক মনে হয়নি। Model আরো ভালো করা দরকার ছিল। আর তাছাড়া তারা জানতেন না — এই launch কি পৃথিবী বদলে দেবে, নাকি চুপচাপ হারিয়ে যাবে।

---

## সেই রাতের গল্প

Launch এর আগের রাতে Sam Altman নিজেও ঠিক জানতেন না কী হবে।

"We always knew, abstractly, that at some point we would hit a tipping point. But we didn't know what the moment would be," — পরে এক সাক্ষাৎকারে বলেছিলেন তিনি।

Launch হলো। ঘণ্টার মধ্যে লাখো মানুষ try করতে শুরু করলো। Server crash করলো বারবার। Team সারারাত জেগে কাজ করলো।

পাঁচ দিনে ১০ লাখ sign-up।

Google এ তখন "code red" ঘোষণা হলো। Google এর co-founders Larry Page আর Sergey Brin — যারা ২০১৯ এ retire করেছিলেন — emergency meeting এ ডাকা হলো।

---

## এখন ChatGPT কোথায়?

২০২৬ সালে ChatGPT শুধু একটা chatbot না। এটা এখন:

- GPT-4o দিয়ে real-time voice, image, video analysis
- Deep Research — hours এর research মিনিটে
- Memory — আপনাকে চেনে, আপনার preferences মনে রাখে
- Operator integrations — হাজারো third-party app এর সাথে connected

OpenAI এর valuation এখন $300 billion এর বেশি। Revenue $4 billion+ annually।

---

## আমার কাছে এই গল্পের যে অর্থ

একটা "demo" পৃথিবী বদলে দিয়েছে।

Sam Altman এবং তার team মনে করেননি ChatGPT এত বড় হবে। কিন্তু সময়মতো, সঠিক জিনিসটা করেছিলেন।

এই গল্পটা শুধু tech history না। এটা একটা reminder — কখনো জানা যায় না কোন ছোট্ট কাজটা পৃথিবী বদলে দেবে।

তাই শুরু করুন। ভয় পাবেন না।`,
        tags: [
          `ChatGPT invention story`,
          `OpenAI history`,
          `Sam Altman Bangladesh`,
          `ChatGPT কিভাবে তৈরি হলো`,
          `AI history Bangla`,
        ],
        readTime: `9`,
        publishedAt: `2026-04-01`,
        coverUrl: `https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_037`,
        title: `Elon Musk: ১২ বছরে একটা Game তৈরি, তারপর Mars এ যাওয়ার স্বপ্ন — এই মানুষটা আসলে কে?`,
        topic: `AI & Design`,
        excerpt: `দক্ষিণ আফ্রিকার একটা ছেলে ১২ বছরে game বানিয়ে বিক্রি করেছিল। আজ তার net worth $809 billion। SpaceX, Tesla, xAI — এই মানুষের গল্পটা সত্যিকারের science fiction।`,
        content: `Pretoria, South Africa। ১৯৮৩ সাল।

একটা ছেলে computer এ বসে game বানাচ্ছে। নাম তার Elon। বয়স ১২।

Game টার নাম "Blastar" — একটা basic space shooter। তিনি সেটা একটা computer magazine কে বিক্রি করলেন। পেলেন $500।

সেই ছেলেটাই আজকে পৃথিবীর সবচেয়ে ধনী মানুষ। Net worth $809 billion (Forbes, April 2026)।

---

## South Africa থেকে California — যে পথটা সহজ ছিল না

Elon Musk এর শৈশব সুখের ছিল না। বাবা-মায়ের divorce। school এ bully এর শিকার। একবার এতটাই মারা খেয়েছিলেন যে hospital এ ভর্তি হতে হয়েছিল।

কিন্তু books তাঁকে বাঁচিয়েছিল। ছোটবেলায় দিনে ১০ ঘণ্টা বই পড়তেন।

১৮ বছর বয়সে Canada তে চলে আসলেন। কারণ? South Africa এর বাধ্যতামূলক military service তে apartheid regime কে support করতে চাননি।

তারপর Canada থেকে University of Pennsylvania। Physics আর Economics — দুটো degree।

তারপর California।

---

## PayPal, তারপর সব শুরু

১৯৯৫ সালে তিনি Stanford এ PhD শুরু করলেন। ২ দিন পরে drop out করলেন।

কারণ? Internet revolution এর ঢেউ দেখলেন। সেই ঢেউতে চাপতে চাইলেন।

প্রথম company: Zip2 — city guide software। ১৯৯৯ সালে Compaq কিনে নিল $307 million এ।

তারপর X.com — online payment। পরে এটাই হলো PayPal। eBay কিনে নিল $1.5 billion এ।

Elon Musk এর কাছে ছিল $180 million।

বেশিরভাগ মানুষ এই টাকা দিয়ে আরামে বসে থাকতেন।

Elon Musk করলেন উল্টোটা।

---

## সবাই পাগল বলেছিল

২০০২ সালে তিনি SpaceX প্রতিষ্ঠা করলেন। লক্ষ্য — মানুষকে Mars এ নিয়ে যাওয়া।

সবাই হাসলো।

NASA এর এক সাবেক কর্মকর্তা বললেন, "এই ছেলে rocket science জানে না।"

SpaceX প্রথম তিনটা rocket launch fail করলো। Elon এর শেষ টাকা শেষ হয়ে যাচ্ছিলো।

চতুর্থ launch এ rocket orbit এ পৌঁছালো।

২০০৪ সালে তিনি Tesla এ invest করলেন — তখন একটা tiny electric car startup।

২০০৮ সালে SpaceX আর Tesla দুটোই প্রায় bankrupt। তিনি বলেছিলেন পরে, "আমি mentally exhaustion এর কাছাকাছি ছিলাম।"

কিন্তু থামেননি।

---

## ২০২৬ সালের Elon Musk

আজ SpaceX পৃথিবীর সবচেয়ে valuable private company।

Tesla বিশ্বের leading electric vehicle company।

Starlink — ৭,০০০ satellite দিয়ে পুরো পৃথিবীতে internet।

xAI — Grok AI দিয়ে OpenAI কে challenge।

Neuralink — মানুষের brain এ chip।

২০২৬ এর ফেব্রুয়ারিতে SpaceX আর xAI এক হয়ে গেছে — একটা $1.25 trillion entity।

---

## যে মানুষটাকে বুঝতে হবে

Elon Musk controversial। তাঁর অনেক কথা মানুষ পছন্দ করে না। আমিও সব কিছুতে agree করি না।

কিন্তু একটা কথা বলতেই হবে — এই মানুষটা "impossible" শব্দটাকে চ্যালেঞ্জ করেন।

Reusable rocket? Impossible ছিল। SpaceX করেছে।
Mass market electric car? Impossible ছিল। Tesla করেছে।
Global satellite internet? Impossible ছিল। Starlink করেছে।

তাঁর philosophy টা simple: যদি physics এর law না ভাঙে, তাহলে সম্ভব।

এই চিন্তাটা আমার কাজে অনেক impact করেছে।`,
        tags: [
          `Elon Musk biography Bangla`,
          `SpaceX story`,
          `Tesla history`,
          `Elon Musk net worth 2026`,
          `entrepreneur story Bangladesh`,
        ],
        readTime: `10`,
        publishedAt: `2026-04-02`,
        coverUrl: `https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_038`,
        title: `Claude AI এর পেছনের গল্প: যে কারণে OpenAI ভেঙে বেরিয়ে Dario Amodei নতুন কোম্পানি বানালেন`,
        topic: `AI & Design`,
        excerpt: `OpenAI এর VP of Research ছিলেন। ভালো salary, বড় position। তারপর হঠাৎ ছেড়ে দিলেন। নতুন কোম্পানি বানালেন। আজ Anthropic এর valuation $380 billion। Claude AI এর পেছনের এই গল্পটা অসাধারণ।`,
        content: `২০২০ সালের ডিসেম্বর।

Dario Amodei OpenAI এর VP of Research। Silicon Valley এর সবচেয়ে coveted position গুলোর একটা।

তিনি resign করলেন।

কেন?

---

## দ্বিমত — যে কারণে OpenAI ভাঙলো

OpenAI যত বড় হচ্ছিলো, তত commercial pressure বাড়ছিলো। Microsoft ছিল বড় investor। Revenue দরকার। Product দরকার।

Dario Amodei এবং তাঁর কিছু colleagues মনে করতেন — AI এর safety নিয়ে আরো বেশি সতর্ক থাকা দরকার। Powerful AI যদি সঠিকভাবে না বানানো হয়, সেটা পৃথিবীর জন্য বিপজ্জনক হতে পারে।

এই দ্বিমত থেকেই জন্ম নিলো Anthropic।

২০২১ সালের জানুয়ারিতে Dario Amodei, তাঁর বোন Daniela Amodei এবং আরো ১৩ জন former OpenAI researcher মিলে Anthropic প্রতিষ্ঠা করলেন।

---

## Claude কে?

Claude — AI টার নাম Claude Shannon এর নামে। তিনি Information Theory এর জনক।

Anthropic ২০২২ সালেই Claude এর প্রথম version তৈরি করে ফেলেছিল — ChatGPT launch এর আগেই। কিন্তু release করেনি। কারণ আরো safety testing দরকার ছিল।

মার্চ ২০২৩ এ Claude publicly launch হলো।

---

## Constitutional AI — যে idea টা Claude কে আলাদা করে

Anthropic একটা নতুন পদ্ধতিতে Claude কে train করেছে — "Constitutional AI"।

সহজ করে বললে: Claude কে একটা "constitution" দেওয়া হয়েছে — কিছু principles, কিছু values। Claude সেই principles দেখে নিজেই judge করে কোনটা ভালো উত্তর, কোনটা harmful।

এই approach টা Claude কে অন্য AI দের চেয়ে আলাদা করে তুলেছে — বেশি consistent, বেশি trustworthy।

---

## Anthropic এর অবিশ্বাস্য growth

২০২৩: Revenue ছিল $100 million।
২০২৪: $1 billion।
২০২৫ এর মাঝামাঝি: $4.5 billion annualized।

Dario নিজে বলেছেন এটা "fastest growing software company in history at this scale।"

Amazon invest করেছে কয়েক billion। Google invest করেছে।

February 2026 এ Anthropic এর valuation $380 billion।

---

## একটা সাহসী সিদ্ধান্ত

২০২৬ এর ফেব্রুয়ারিতে আরেকটা ঘটনা ঘটলো।

US Department of Defense চাইলো Claude কে domestic surveillance এ ব্যবহার করতে।

Dario Amodei refuse করলেন।

DoD Anthropic কে "supply chain risk" label করে দিলো। US military contractors কে Anthropic এর সাথে কাজ করতে বারণ করা হলো।

কিন্তু Dario তাঁর principles এ অটল থাকলেন।

---

## এই গল্পটা কেন important?

কারণ Dario Amodei দেখিয়েছেন — money এর চেয়ে mission বড় হতে পারে।

OpenAI এর comfortable position ছেড়ে এসে নতুন কিছু বানানো সহজ ছিল না। কিন্তু তিনি বিশ্বাস করতেন যে AI কে সঠিকভাবে বানানো দরকার।

সেই বিশ্বাস থেকেই Claude। সেই বিশ্বাস থেকেই Anthropic।

Conviction দিয়ে চললে কোথায় পৌঁছানো যায় — এটাই এই গল্পের শিক্ষা।`,
        tags: [
          `Claude AI Anthropic story`,
          `Dario Amodei biography`,
          `Anthropic history Bangla`,
          `AI safety story`,
          `Claude AI Bangladesh`,
        ],
        readTime: `8`,
        publishedAt: `2026-04-03`,
        coverUrl: `https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_039`,
        title: `Google Gemini: ChatGPT এর ভয়ে 'Code Red' থেকে শুরু, এখন Gemini 3.1 — কিভাবে এতদূর?`,
        topic: `AI & Design`,
        excerpt: `২০২২ সালে ChatGPT দেখে Google panic করলো। Larry Page-Sergey Brin emergency meeting এ ডাকা হলো। সেই ভয় থেকেই জন্ম Gemini। এখন Gemini 3.1 Pro। পুরো journey টা জানুন।`,
        content: `নভেম্বর ২০২২। ChatGPT launch হলো।

Google এর headquarters এ আতঙ্ক।

"Code Red" ঘোষণা করা হলো — Google এর ইতিহাসে বিরল একটা event।

২০১৯ সালে retire করা co-founders Larry Page আর Sergey Brin কে emergency meeting এ ডাকা হলো। বছরের পর বছর Google কে AI research এ এগিয়ে থাকতে দেখেছেন। কিন্তু একটা startup এর chatbot হঠাৎ সব আলোচনার কেন্দ্রে।

এই আতঙ্ক থেকেই জন্ম নিলো — Gemini।

---

## Google তো আগেই AI তে ছিল, তাহলে?

এটাই interesting part।

Google আসলে AI research এ OpenAI এর চেয়ে অনেক আগে থেকেই ছিল। Transformer architecture — যে technology এর উপর ভিত্তি করে ChatGPT বানানো — সেটা Google এর researchers দের তৈরি।

কিন্তু Google "move fast" করেনি। কারণ ভয় ছিল — AI chatbot যদি ভুল তথ্য দেয়, Google এর search engine এর reputation নষ্ট হবে।

সেই সতর্কতাই Google কে পিছিয়ে দিলো।

---

## Bard থেকে Gemini — একটা rebranding এর গল্প

২০২৩ সালের ফেব্রুয়ারিতে Google launch করলো "Bard"।

এটা ছিল সৎ কথা বলতে গেলে — disappointing। First demo তে Bard ভুল তথ্য দিলো। Google এর share price এক দিনে $100 billion drop করলো।

কিন্তু Google থামেনি।

December 2023 এ launch হলো Gemini — নতুন নামে, নতুন model, নতুন capabilities।

February 2024 এ Bard এর নাম বদলে হলো Gemini।

---

## ২০২৫-২৬ এ Gemini কোথায়?

Gemini এর journey এখন অনেক এগিয়েছে।

November 2025: Gemini 3 Pro launch। Google বললো এটা তাদের "most intelligent model।"

February 2026: Gemini 3.1 Pro। ARC-AGI-2 benchmark এ score 77.1% — Gemini 3 Pro এর দ্বিগুণের বেশি।

January 2026: Apple ঘোষণা দিলো upcoming Siri তে Gemini model ব্যবহার হবে।

March 2026: Gemini CLI — developers দের জন্য terminal এ সরাসরি।

---

## "Nano Banana" — একটা ভাইরাল moment

২০২৫ এর আগস্টে Google একটা নতুন image generation model secretly test করছিলো।

Arena platform এ anonymous হিসেবে রাখা হয়েছিল। Nickname দেওয়া হলো "Nano Banana" — একজন product manager এর nickname থেকে।

Model টা viral হয়ে গেল। Photorealistic "3D figurine" images দেখে internet পাগল।

পরে reveal হলো এটাই Gemini 2.5 Flash Image।

---

## Google কি ChatGPT কে overtake করবে?

সৎ উত্তর — কেউ জানে না।

কিন্তু ২০২৬ সালে এই race অনেক tight।

OpenAI GPT-5 নিয়ে কাজ করছে। Google Gemini 3.1 এ এগিয়ে যাচ্ছে। Anthropic Claude 4 এর পরের model এ।

এই competition আমাদের জন্য ভালো। কারণ প্রতিযোগিতায় tools ভালো হয়, দাম কমে।

Designer হিসেবে আমি এই race টা enjoy করি — কারণ প্রতি কয়েক মাসে নতুন tool আসে যা আমার কাজ সহজ করে।`,
        tags: [
          `Google Gemini history Bangla`,
          `Gemini 3 Bangladesh`,
          `Google AI story`,
          `Gemini vs ChatGPT`,
          `AI Bangladesh 2026`,
        ],
        readTime: `8`,
        publishedAt: `2026-04-04`,
        coverUrl: `https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_040`,
        title: `SpaceX: যে কোম্পানি ৩ বার ব্যর্থ হয়েও হাল ছাড়েনি, আজ NASA এর চেয়ে এগিয়ে`,
        topic: `AI & Design`,
        excerpt: `SpaceX এর প্রথম ৩টা rocket launch fail হয়েছিল। Elon Musk বলেছিলেন চতুর্থটাও fail করলে সব শেষ। কিন্তু চতুর্থটা orbit এ পৌঁছালো। এই failure to success এর গল্পটা আপনাকে অনুপ্রাণিত করবে।`,
        content: `২০০৬। Kwaj Atoll, Pacific Ocean।

SpaceX এর প্রথম rocket — Falcon 1 — launch pad এ।

৩৩ সেকেন্ড পর crash।

কারণ: একটা fuel leak।

---

## ব্যর্থতার তিন বছর

SpaceX ২০০২ সালে Elon Musk তাঁর PayPal থেকে পাওয়া $100 million দিয়ে শুরু করেছিলেন।

লক্ষ্য ছিল — reusable rocket বানানো। Rocket কে airplane এর মতো বারবার ব্যবহার করা।

সবাই বলেছিল impossible।

২০০৬ এর প্রথম launch fail।
২০০৭ এর দ্বিতীয় launch fail।
২০০৮ এর তৃতীয় launch fail।

Elon Musk এর account প্রায় শূন্য।

তিনি পরে বলেছেন, "যদি চতুর্থ launch ও fail হতো, তাহলে SpaceX শেষ হয়ে যেতো।"

---

## সেই ঐতিহাসিক চতুর্থ launch

সেপ্টেম্বর ২০০৮।

Falcon 1 চতুর্থবার launch হলো।

Orbit এ পৌঁছালো।

ইতিহাসে প্রথমবার কোনো privately funded liquid-fuel rocket orbit এ পৌঁছালো।

সেই মুহূর্তে SpaceX এর team কান্নায় ভেঙে পড়েছিলো।

Elon Musk বলেছিলেন, "As God is my bloody witness, I am hell-bent on making it work।"

---

## Reusable Rocket — যে concept পৃথিবী বদলে দিলো

আগে rocket ছিল একবার use করার জিনিস। একটা launch এ $65 million বা তার বেশি খরচ।

SpaceX এর idea ছিল — rocket কে land করাও, আবার ব্যবহার করো।

সবাই বলেছিল impossible।

২০১৫ সালে Falcon 9 rocket launch হলো, তারপর সফলভাবে land করলো।

এটা ছিল rocket industry এর সবচেয়ে বড় revolution।

একটা Falcon 9 rocket এখন ২০+ বার ব্যবহার হয়েছে।

---

## Starlink — পৃথিবীর মাথার উপর internet

২০১৫ সালে SpaceX শুরু করলো Starlink — satellite internet project।

আজ ২০২৬ সালে ৭,০০০+ working Starlink satellite পৃথিবীকে ঘিরে আছে।

Bangladesh সহ পৃথিবীর প্রত্যন্ত অঞ্চলে high-speed internet পৌঁছে দিচ্ছে।

---

## Starship — Mars এর স্বপ্ন

SpaceX এর সবচেয়ে ambitious project — Starship।

Fully reusable, ১০০+ জন passenger নিতে পারবে, Mars এ যাবে।

২০২৬ সালে Starship Version 3 এর test চলছে।

Elon Musk বলেছেন — ৩ বছরের মধ্যে Starship ঘণ্টায় একটার বেশি launch করতে পারবে।

---

## Graphic Designer হিসেবে আমি কী শিখলাম

SpaceX এর গল্পটা আমার কাছে একটা জিনিস শেখায়।

Failure আসবে। তিনটা, চারটা, পাঁচটা — আসতে থাকবে।

কিন্তু প্রতিটা failure থেকে শেখা গেলে, শেষটা সফল হয়।

আমার design career এও এটা হয়েছে। অনেক rejection পেয়েছি। কিন্তু প্রতিটা rejection থেকে শিখেছি।

SpaceX এর story টা শুধু rocket এর গল্প না। এটা persistence এর গল্প।`,
        tags: [
          `SpaceX history Bangla`,
          `Elon Musk rocket story`,
          `space technology Bangladesh`,
          `failure success story`,
          `SpaceX case study`,
        ],
        readTime: `9`,
        publishedAt: `2026-04-05`,
        coverUrl: `https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_041`,
        title: `Midjourney কারা বানিয়েছে? ১১ জনের একটা Team, আর $0 Funding — পৃথিবীর সবচেয়ে Popular AI Art Tool এর অবাক করা গল্প`,
        topic: `AI & Design`,
        excerpt: `OpenAI এর হাজারো employee। Google এর বিলিয়ন ডলার বাজেট। আর Midjourney? মাত্র ১১ জন। কোনো বাইরের funding নেই। তবুও পৃথিবীর সেরা AI image generator। এই গল্পটা অবিশ্বাস্য।`,
        content: `San Francisco এ একটা ছোট্ট independent lab।

মাত্র ১১ জন কাজ করেন।

কোনো VC funding নেই। কোনো বড় corporate backup নেই।

এই lab এর নাম Midjourney।

আর এই lab এর তৈরি AI image generator এখন পৃথিবীর সবচেয়ে popular।

---

## David Holz — যে মানুষটা এটা বানালেন

David Holz Midjourney এর founder।

আগে তিনি Leap Motion এ কাজ করতেন — hand gesture technology company।

তারপর সিদ্ধান্ত নিলেন — AI দিয়ে human creativity কে amplify করা সম্ভব।

২০২২ সালের মার্চে Midjourney public beta শুরু হলো।

Discord এ। Bot হিসেবে।

---

## কেন Discord?

অনেকেই প্রশ্ন করেছেন — professional AI tool Discord এ কেন?

David Holz এর উত্তর ছিল সহজ। Community।

Discord এ launch করলে users একসাথে দেখতে পাবে একে অপরের creations। inspire হবে। learn করবে। এটাই হবে সবচেয়ে powerful marketing।

সেই idea টা কাজ করেছে।

---

## ১১ জনের team, কোটি টাকার revenue

Midjourney কখনো বাইরে থেকে funding নেয়নি।

সব revenue আসে subscription থেকে।

David Holz বলেছেন — company profitable। আর শুধু profitable না, অত্যন্ত profitable।

Exact revenue তিনি কখনো বলেননি। কিন্তু analysts estimate করেছেন ২০২৩ সালে $200 million+ revenue।

১১ জন মানুষের team এর জন্য এটা অবিশ্বাস্য।

---

## Midjourney V7 — এখন কোথায়?

২০২৬ সালে Midjourney V7 launch হয়েছে।

Photorealism এখন এতটাই advanced যে professional photography থেকে আলাদা করা কঠিন।

Character consistency — একই character কে multiple scene এ consistent রাখা।

Draft mode — দ্রুত preview।

Personalization — আপনার style শিখে নেয়।

---

## Designer হিসেবে আমি Midjourney কে কিভাবে দেখি

Midjourney আমার workflow বদলে দিয়েছে।

আগে client কে concept বোঝাতে অনেক সময় লাগতো। এখন Midjourney দিয়ে ৫ মিনিটে ৫টা concept দেখাই।

Client সাথে সাথে বোঝেন। Process smooth হয়।

কিন্তু সবচেয়ে বড় কথা — Midjourney এর এই গল্পটা আমাকে শিখিয়েছে।

ছোট team ও বড় কিছু বানাতে পারে। বড় funding ছাড়াও।

দরকার শুধু right idea আর execution।`,
        tags: [
          `Midjourney history Bangla`,
          `AI art tool story`,
          `Midjourney founder`,
          `AI image generator Bangladesh`,
          `design AI tools story`,
        ],
        readTime: `7`,
        publishedAt: `2026-04-06`,
        coverUrl: `https://images.pexels.com/photos/1212693/pexels-photo-1212693.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_042`,
        title: `Adobe এর ৪০ বছরের যাত্রা: Garage থেকে $230 Billion Company — Photoshop কিভাবে Design জগৎ বদলালো`,
        topic: `Graphic Design`,
        excerpt: `১৯৮২ সালে দুইজন engineer এর garage এ শুরু হয়েছিল Adobe। আজ Photoshop, Illustrator, Premiere — পুরো creative industry চলে Adobe তে। এই ৪০ বছরের journey টা জানুন।`,
        content: `১৯৮২ সাল। Los Altos, California।

John Warnock এবং Charles Geschke — দুইজন Xerox PARC এর researcher।

তারা তাদের bosses কে একটা idea pitch করেছিলেন। Bosses reject করেছিলেন।

তখন তারা নিজেরাই করার সিদ্ধান্ত নিলেন।

Warnock এর বাড়ির garage এ শুরু হলো Adobe Systems।

Initial investment: $2.5 million — venture capital থেকে।

---

## PostScript — যে invention printing বদলালো

Adobe এর প্রথম product ছিল PostScript।

এটা একটা programming language — কিন্তু printer এর জন্য। এটা দিয়ে computer এ যা দেখা যায়, printer ঠিক সেটাই print করতে পারে।

Apple এর Steve Jobs দেখলেন। Amazed হলেন।

Apple আর Adobe মিলে "Desktop Publishing Revolution" শুরু হলো।

Laser printer এ beautiful document print করা সম্ভব হলো প্রথমবার।

---

## Photoshop এর জন্ম — একটা ভাইয়ের project

১৯৮৭ সাল। Thomas Knoll নামে একজন PhD student University of Michigan এ।

তিনি একটা program লিখলেন যেটা grayscale image display করতে পারে।

তাঁর ভাই John Knoll — যিনি Industrial Light & Magic এ কাজ করতেন — দেখলেন। বললেন এটা আরো develop করো।

দুই ভাই মিলে বানালেন "Display"। তারপর নাম দিলেন "Photoshop"।

Adobe ১৯৮৯ সালে license নিলো।

১৯৯০ সালের ফেব্রুয়ারিতে Photoshop 1.0 launch হলো — শুধু Mac এর জন্য।

---

## Illustrator — Vector Design এর revolution

১৯৮৭ সালে Adobe launch করলো Illustrator।

এটা ছিল first professional vector graphics software।

Logo design, typography, illustration — সব বদলে গেলো।

আগে designer দের হাতে আঁকতে হতো। এখন computer এ perfect shapes বানানো সম্ভব।

---

## Creative Cloud — subscription model এর shift

২০১২ সালে Adobe একটা বড় সিদ্ধান্ত নিলো।

Photoshop, Illustrator সহ সব software কে একটা subscription service এ নিয়ে এলো — Creative Cloud।

অনেকে রাগ করেছিলেন। কারণ আগে একবার কিনলেই হতো।

কিন্তু এই decision Adobe কে financially অনেক stronger করেছে।

---

## Adobe আজ কোথায়?

২০২৬ সালে Adobe এর market cap $230 billion এর কাছাকাছি।

AI integration এ Adobe এখন Firefly নিয়ে এগিয়ে যাচ্ছে।

Photoshop এর Generative Fill — AI দিয়ে image এ কিছু add বা remove করা।

Adobe Firefly — text থেকে image, তবে commercial safe।

---

## Designer হিসেবে আমার কথা

আমি Illustrator আর Photoshop ছাড়া professional কাজ imagine করতে পারি না।

কিন্তু এই tools গুলো এমনিতে আসেনি। দুইজন মানুষের একটা garage এ বসে স্বপ্ন দেখা থেকে এসেছে।

এই গল্পটা মনে করিয়ে দেয় — সঠিক tool ছাড়া creative work সম্ভব না। আর সেই tools বানানোর পেছনেও আছে অনেক মানুষের অনেক পরিশ্রম।`,
        tags: [
          `Adobe history Bangla`,
          `Photoshop invention story`,
          `Adobe Illustrator history`,
          `graphic design history`,
          `Adobe Bangladesh`,
        ],
        readTime: `8`,
        publishedAt: `2026-04-07`,
        coverUrl: `https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_043`,
        title: `AI দিয়ে আমি যেভাবে ৩ ঘণ্টার কাজ ৩০ মিনিটে করি — আমার Real Workflow Share করছি`,
        topic: `AI & Design`,
        excerpt: `অনেকে মনে করেন AI use করা মানে কাজে ফাঁকি দেওয়া। আমি মনে করি উল্টোটা। AI আমার সময় বাঁচায়, তাই আরো creative কাজে বেশি সময় দিতে পারি। আমার actual workflow টা share করছি।`,
        content: `একটা সত্যি কথা বলি।

আমার একজন client আছেন যার প্রতি সপ্তাহে ৩-৪টা social media post design দরকার। আগে প্রতিটাতে ২-৩ ঘণ্টা লাগতো।

এখন লাগে ৪০-৫০ মিনিট।

AI এর কারণে।

---

## আমার workflow কেমন?

**Step 1: ChatGPT দিয়ে Brief তৈরি**

Client call এর পর আমি ChatGPT কে বলি — "এই client এর জন্য একটা social media post এর creative brief তৈরি করো।" তারপর সেই brief নিয়ে নিজে refine করি।

৩০ মিনিটের কাজ হয় ৫ মিনিটে।

**Step 2: Midjourney দিয়ে Concept**

Client কে idea দেখানোর আগে Midjourney তে ৩-৪টা concept generate করি।

Client দেখে বলেন "এই direction এ যাও।"

আগে এই concept phase এ ঘণ্টা লাগতো। এখন ১৫ মিনিট।

**Step 3: Adobe Illustrator এ Final Execution**

AI generated concept কে reference হিসেবে নিয়ে Illustrator এ final design করি।

এটা সবচেয়ে important step। AI এর output directly deliver করি না। সেটাকে আমার creativity দিয়ে বানাই।

**Step 4: Adobe Firefly দিয়ে Polish**

যদি কোনো background দরকার হয় বা কোনো element generate করতে হয় — Firefly ব্যবহার করি। Commercial safe।

---

## যে জায়গায় AI ব্যবহার করি না

Logo এর final delivery তে AI generated কিছু দিই না।

কারণ logo এর সাথে brand এর emotion জড়িত। সেটা AI বুঝতে পারে না।

Client এর সাথে conversation করে, তার business বুঝে, তার audience বুঝে logo বানাই।

AI সেই "বোঝার" কাজটা করতে পারে না।

---

## AI নিয়ে একটা সৎ কথা

অনেকে মনে করেন AI শিখলেই কাজ হয়ে যায়।

সত্যটা হলো — AI tool। Tool ভালো হলে কাজ ভালো হয়, কিন্তু craftsman ভালো না হলে tool কোনো কাজে আসে না।

Design fundamentals না জানলে Midjourney দিয়েও professional কাজ হবে না।

AI শিখুন। কিন্তু আগে design শিখুন।

---

## আপনার জন্য Quick Start

যদি এখনো AI workflow শুরু না করে থাকেন:

১. ChatGPT দিয়ে শুরু করুন — caption writing, brief preparation
২. Adobe Firefly try করুন — free, commercial safe
৩. Canva Magic Studio — quick content এর জন্য

এই তিনটা দিয়ে শুরু করলে productivity অনেক বাড়বে।`,
        tags: [
          `AI design workflow Bangladesh`,
          `AI productivity designer`,
          `Midjourney workflow`,
          `ChatGPT design`,
          `AI tools designer Bangladesh 2026`,
        ],
        readTime: `7`,
        publishedAt: `2026-04-08`,
        coverUrl: `https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_044`,
        title: `Canva এর সাফল্যের গল্প: একজন Australian মেয়ে যেভাবে $26 Billion Company বানালেন`,
        topic: `Graphic Design`,
        excerpt: `Melanie Perkins কে investors বারবার না বলেছিল। ১০০ এরও বেশি VC reject করেছিল। তবুও থামেননি। আজ Canva এর valuation $26 billion। এই গল্পটা শুনলে অবাক হয়ে যাবেন।`,
        content: `Perth, Australia। ২০০৬ সাল।

Melanie Perkins তখন university student। বয়স ১৯।

তিনি অন্য students কে Photoshop শেখাতেন। কিন্তু খুব frustrated হতেন।

"Software গুলো এত complex কেন? এত সহজ কাজের জন্য এত কিছু শিখতে হবে কেন?"

এই frustration থেকেই একটা idea এলো।

---

## শুরুটা Yearbook দিয়ে

সরাসরি Canva বানাননি। প্রথমে বানালেন "Fusion Books" — school yearbook design tool।

Students online এ নিজেরাই yearbook design করতে পারবে।

এটা চলতে শুরু করলো। Australia, Canada, New Zealand এ।

কিন্তু Melanie এর স্বপ্ন ছিল বড়।

---

## ১০০+ VC rejection

San Francisco গেলেন investment এর জন্য।

৩ বছরে ১০০+ VC reject করেছে।

"আপনার idea ভালো না।"
"Market টা ছোট।"
"Adobe কে compete করতে পারবেন না।"

একটা meeting এ গেলেন। শুনলেন investor ঐদিন কite surf এর fan।

পরের meeting এর আগে Melanie kite surfing শিখলেন।

Meeting শুরু হলো kite surfing নিয়ে কথা দিয়ে। Investor engaged হলেন।

Canva তার প্রথম $3 million investment পেলো।

---

## ২০১৩: Canva Launch

Canva officially launch হলো।

Idea ছিল simple — drag and drop design। Template ব্যবহার করো। Export করো।

Professional designers হাসলেন। "এটা real design না।"

কিন্তু লাখো সাধারণ মানুষ যারা design করতে চেয়েছিলেন কিন্তু পারতেন না — তারা Canva এ এলেন।

---

## Canva আজ কোথায়?

২০২৬ সালে Canva Visual Suite একটা complete creative platform।

Monthly active users: ১৫০ million এর বেশি।

Valuation: $26 billion।

AI Magic Design, video editor, website builder, presentation — সব এক জায়গায়।

---

## Melanie Perkins আজ

Forbes এর মতে তিনি অন্যতম youngest female billionaire।

কিন্তু তাঁর story টা money এর না। এটা persistence এর।

১০০ বার না শুনেছেন। ১০১তে হ্যাঁ পেয়েছেন।

---

## Designer হিসেবে আমার মতামত

Canva আমার কাজকে সহজ করেছে, replace করেনি।

Quick social media content, presentation, simple design — এগুলো Canva তে করি।

Complex brand work, logo, packaging — সেটা Illustrator এ।

Canva এর গল্পটা আমাকে শিখিয়েছে — সঠিক problem solve করলে বাজার আসে নিজেই।`,
        tags: [
          `Canva founding story`,
          `Melanie Perkins biography`,
          `Canva success story Bangla`,
          `startup story Bangladesh`,
          `design tool history`,
        ],
        readTime: `7`,
        publishedAt: `2026-04-09`,
        coverUrl: `https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_045`,
        title: `AI কি সত্যিই আপনার Job নিয়ে নেবে? McKinsey, World Economic Forum এর Latest Report কী বলছে`,
        topic: `AI & Design`,
        excerpt: `২০২৬ সালে AI নিয়ে সবচেয়ে বড় ভয় — চাকরি হারানো। McKinsey, WEF এর সর্বশেষ reports এ কী আছে? কোন jobs safe, কোনটা নয়? Graphic Designer দের জন্য বাস্তবটা কী?`,
        content: `Dario Amodei — Anthropic এর CEO — ২০২৫ সালে একটা statement দিলেন।

AI হয়তো ৫০% entry-level white-collar jobs eliminate করতে পারে।

Finance, law, consulting — এই সব ক্ষেত্রে।

পুরো tech world এ এটা নিয়ে আলোচনা শুরু হলো।

সত্যিটা কী?

---

## WEF Future of Jobs Report ২০২৫ কী বলে?

World Economic Forum এর report অনুযায়ী:

২০৩০ সালের মধ্যে প্রায় ৮৫ মিলিয়ন jobs displacement হতে পারে AI এবং automation এর কারণে।

কিন্তু একই সময়ে ৯৭ মিলিয়ন নতুন jobs তৈরি হবে।

Net positive। কিন্তু transition কঠিন।

---

## কোন jobs সবচেয়ে বেশি risk এ?

**High risk:**
- Data entry এবং basic processing
- Repetitive writing এবং template-based content
- Basic customer service
- Simple coding এবং testing
- Basic accounting এবং bookkeeping

**Lower risk:**
- Creative strategy এবং concept development
- Complex client relationship management
- Cultural sensitivity এবং local context
- Physical skilled work (plumbing, electrician)
- Emotional intelligence এর কাজ

---

## Graphic Designer দের জন্য বাস্তবতা

সত্যি কথা হলো — কিছু design কাজ AI করবে।

Template design, basic social media content, stock illustration — এগুলো AI করতে পারে।

কিন্তু brand strategy, client consultation, cultural adaptation, complex visual storytelling — এগুলো AI করতে পারে না।

যে designers শুধু template fill করে — তারা সমস্যায় পড়বে।

যে designers strategic thinking করে, client এর সাথে relationship বানায়, AI কে tool হিসেবে ব্যবহার করে — তারা আরো শক্তিশালী হবে।

---

## বাংলাদেশের Context এ

আমাদের দেশে এখনো professional design এর demand supply এর চেয়ে অনেক বেশি।

Local businesses digital হচ্ছে। E-commerce বাড়ছে। Social media marketing বাড়ছে।

একটা capable designer এর চাহিদা ২০২৬ সালে ২০২০ সালের চেয়ে অনেক বেশি।

---

## আমার পরামর্শ

AI কে ignore করলে বিপদ।
AI কে ভয় পেলেও বিপদ।

সঠিক approach হলো — AI কে সঙ্গী করা।

AI যা করতে পারে সেটা AI করুক। আপনি সেই সময়টা দিন higher-value কাজে।

Client relationship। Strategic thinking। Creative problem solving।

এগুলো AI করতে পারে না। এগুলোতে invest করুন।`,
        tags: [
          `AI job Bangladesh 2026`,
          `AI চাকরি নেবে কিনা`,
          `graphic design future AI`,
          `AI employment report`,
          `designer career AI`,
        ],
        readTime: `8`,
        publishedAt: `2026-04-10`,
        coverUrl: `https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_046`,
        title: `Steve Jobs এবং Apple: একটা Garage থেকে $3 Trillion Company — Design Philosophy যা সব কিছু বদলালো`,
        topic: `Graphic Design`,
        excerpt: `Steve Jobs একজন Graphic Designer ছিলেন না। কিন্তু তাঁর design philosophy আজ পুরো tech industry কে প্রভাবিত করছে। 'Simplicity is the ultimate sophistication' — এই একটা লাইন কতটা powerful?`,
        content: `১৯৭৬ সাল। Cupertino, California।

Steve Jobs এর পাড়ার একটা garage।

দুজন Steve — Jobs আর Wozniak — মিলে একটা computer বানাচ্ছেন।

সেই garage থেকে যা শুরু হয়েছিল, আজ সেটার নাম Apple। Market cap: $3 trillion এর বেশি।

কিন্তু Apple এর সাফল্যের পেছনে শুধু technology না। ছিল design।

---

## Jobs এর Calligraphy Class — যে class পুরো typography বদলালো

Reed College থেকে drop out করার পর Steve Jobs একটা calligraphy class করেছিলেন। শুধু interest থেকে।

সেই class থেকে তিনি শিখেছিলেন typeface, spacing, beautiful letterforms।

বছর পরে যখন Macintosh বানাচ্ছিলেন — সেই calligraphy knowledge থেকে Mac এ এলো multiple fonts, proportional spacing।

"If I had never dropped in on that single course in college, the Mac would have never had multiple typefaces," — বলেছিলেন Jobs।

---

## "Simplicity is the ultimate sophistication"

এই লাইনটা Apple এর first marketing brochure এ ছিল।

Jobs এর design philosophy এই এক লাইনে।

তিনি বিশ্বাস করতেন — simple design করা কঠিন। Complex করা সহজ।

iPhone এর first version এ কোনো button ছিল না। একটাই home button।

Competitors বললো — user রা confused হবে।

User রা confused হয়নি। iPhone পৃথিবী বদলে দিলো।

---

## Design Meeting এ Jobs কেমন ছিলেন?

Jobs design এ obsessive ছিলেন।

Apple এর former employees বলেছেন — তিনি product এর ভেতরের circuit board দেখতে চাইতেন beautiful হোক। যেখানে কেউ দেখবে না।

কারণ তাঁর কাছে beauty ছিল একটা principle — visible হোক বা না হোক।

---

## Jobs পরবর্তী Apple

Jobs ২০১১ সালে মারা গেছেন।

কিন্তু Apple এর design DNA আজও বেঁচে আছে।

Jony Ive — যিনি Jobs এর সাথে iPhone, iPad, MacBook design করেছিলেন — পরে OpenAI তে গেছেন Altman এর সাথে AI device বানাতে।

Apple আর OpenAI একসাথে — ভবিষ্যতের device কেমন হবে?

---

## Designer হিসেবে আমি কী শিখলাম

Jobs এর গল্প থেকে আমি একটা জিনিস শিখেছি।

সবচেয়ে ভালো design সেটা — যেটা দেখলে মনে হয় "এটা এমনই হওয়ার কথা ছিল।"

Extra কিছু নেই। কম কিছু নেই।

Logo design করার সময় এই philosophy follow করি।

যতটুকু দরকার ঠিক ততটুকু। একটু বেশি না।`,
        tags: [
          `Steve Jobs design philosophy`,
          `Apple design story`,
          `design philosophy Bangla`,
          `minimalist design`,
          `Steve Jobs Bangladesh`,
        ],
        readTime: `9`,
        publishedAt: `2026-04-11`,
        coverUrl: `https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_047`,
        title: `Typography এর ইতিহাস: Gutenberg থেকে Variable Fonts পর্যন্ত — যে যাত্রা ৫০০ বছরের`,
        topic: `Tutorials`,
        excerpt: `আজকে আমরা যে fonts ব্যবহার করি সেগুলোর পেছনে আছে ৫০০ বছরের ইতিহাস। Gutenberg এর printing press থেকে আজকের Variable Fonts পর্যন্ত — এই journey টা জানলে typography কে নতুনভাবে দেখবেন।`,
        content: `১৪৫০ সাল। Mainz, Germany।

Johannes Gutenberg একটা machine বানালেন — movable type printing press।

এর আগে বই লেখা হতো হাতে। একটা বই copy করতে লাগতো মাসের পর মাস।

Gutenberg এর machine এ সপ্তাহে শত শত বই print করা সম্ভব হলো।

এটাই ছিল typography এর জন্ম।

---

## প্রথম Typefaces

Gutenberg এর type ছিল handwriting এর মতো — Blackletter নামে।

তারপর Italy থেকে এলো Roman type — আরো clear, আরো readable।

Nicolas Jenson, Aldus Manutius — এই Renaissance era এর typographers যে typeface বানালেন, সেগুলোর descendant আজও ব্যবহার হচ্ছে।

Garamond? ১৬ শতকের typeface। আজও।

---

## Helvetica — পৃথিবীর সবচেয়ে famous font

১৯৫৭ সাল। Switzerland।

Max Miedinger এবং Eduard Hoffmann মিলে বানালেন Helvetica।

Clean, neutral, versatile।

আজ Helvetica আছে:
- New York City subway sign এ
- NASA এর logo তে
- Toyota, Panasonic, American Airlines এর brand এ

---

## Digital Typography Revolution

১৯৮০ এর দশকে Apple Macintosh আর PostScript একসাথে এলো।

Designer রা computer এ type করে দেখতে পেলেন কেমন print হবে।

Adobe এর font library তৈরি হলো।

তারপর internet এ Google Fonts — হাজারো font free তে।

---

## ২০২৬ এ Variable Fonts

এখন typography এ সবচেয়ে exciting development — Variable Fonts।

একটাই font file। কিন্তু সেটা stretch হয়, weight change হয়, width change হয়।

Axis দিয়ে control করা যায় — weight, width, optical size।

Design আরো flexible। File size ছোট।

---

## Designer হিসেবে Typography কেন জানতে হবে?

একটা সত্যি কথা — typography ভালো না জানলে design শুধু "pretty picture" থাকে।

Font এর history জানলে বুঝতে পারবেন কোন font কোথায় কাজ করে।

Serif font কেন trust এর feel দেয়? Blackletter কেন traditional মনে হয়? Sans-serif কেন modern?

এই প্রশ্নগুলোর উত্তর আছে typography এর ইতিহাসে।

জানুন। Design ভালো হবে।`,
        tags: [
          `typography history Bangla`,
          `font history design`,
          `typography tutorial Bangla`,
          `Gutenberg design`,
          `variable fonts Bangladesh`,
        ],
        readTime: `8`,
        publishedAt: `2026-04-12`,
        coverUrl: `https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_048`,
        title: `Freelancing Bangladesh ২০২৬: Reality Check — কতজন সত্যিই সফল হচ্ছেন?`,
        topic: `Career Tips`,
        excerpt: `বাংলাদেশে freelancing নিয়ে অনেক romance আছে। কিন্তু reality কী? কতজন সত্যিই stable income করছেন? কোথায় সবচেয়ে বেশি সুযোগ? সৎ বিশ্লেষণ দিচ্ছি।`,
        content: `বাংলাদেশ এখন world এ top freelancing countries এর একটি।

এটা fact। গর্বের বিষয়।

কিন্তু আরেকটা fact আছে যেটা কম বলা হয় — অধিকাংশ freelancer stable income করতে পারেন না প্রথম ১-২ বছরে।

Reality check করা দরকার।

---

## বাংলাদেশে Freelancing এর বর্তমান চিত্র

বাংলাদেশ সরকারের তথ্য অনুযায়ী, ২০২৫ সালে বাংলাদেশে ৬ লাখের বেশি registered freelancer আছেন।

Fiverr, Upwork সহ বিভিন্ন platform এ active।

Annual freelancing income: $700 million+ (Basis estimate)।

কিন্তু এই income সমানভাবে distribute না।

---

## কারা সত্যিই ভালো করছেন?

যারা consistently income করছেন তাদের কিছু common characteristics:

**Specialized skills:** শুধু "graphic designer" না। "Logo designer for restaurants" বা "Brand identity for e-commerce" — এভাবে specialized।

**English communication:** সহজ, clear English। Grammar perfect না হলেও চলে, কিন্তু understandable হতে হবে।

**Long-term client relationships:** একই client কে বারবার কাজ দেওয়া। New client খোঁজা থেকে অনেক সহজ।

**Consistent portfolio update:** প্রতি মাসে portfolio তে কিছু নতুন add করা।

---

## সবচেয়ে বেশি demand যে services এ

২০২৬ সালে বাংলাদেশি freelancers এর জন্য সবচেয়ে বেশি demand:

**Graphic Design:**
- Logo ও Brand Identity
- Social Media Design (ongoing)
- Packaging Design

**Digital Marketing:**
- Social Media Management
- Content Creation
- SEO

**Tech:**
- Web Development
- App Development
- AI-assisted services

---

## কেন অনেকে fail করেন?

আমি অনেক beginners কে দেখেছি।

Most common mistake: Skills তৈরির আগেই client খোঁজা।

দ্বিতীয় mistake: Pricing ঠিক না করা — too low হলে sustainable না, too high হলে order আসে না।

তৃতীয় mistake: হাল ছেড়ে দেওয়া প্রথম ৩ মাসে।

---

## আমার সৎ পরামর্শ

Freelancing কঠিন। রাতারাতি হয় না।

কিন্তু সঠিক পথে গেলে, ১-২ বছরে একটা stable income তৈরি করা সম্ভব।

প্রথম ৬ মাস invest করুন — skills এ, portfolio এ, learning এ।

Freelancing marathon। Sprint না।

ইন শা আল্লাহ।`,
        tags: [
          `freelancing Bangladesh 2026`,
          `Bangladesh freelancer statistics`,
          `freelancing reality Bangladesh`,
          `graphic design freelance BD`,
          `online income Bangladesh`,
        ],
        readTime: `8`,
        publishedAt: `2026-04-13`,
        coverUrl: `https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_049`,
        title: `Behind the Design: Bangladesh এর Top Brands এর Logo কিভাবে তৈরি হয়?`,
        topic: `Graphic Design`,
        excerpt: `Grameenphone, bKash, Pathao, Shohoz — এই brands গুলোর logo দেখেছেন। কিন্তু জানেন কি কিভাবে এগুলো তৈরি হয়েছিল? বাংলাদেশের বড় brands এর design process এর behind-the-scenes।`,
        content: `যখনই কোনো Bangladesh এর বড় brand এর logo দেখি, মাথায় একটা প্রশ্ন আসে।

এটা কে বানিয়েছে? কতটা সময় লেগেছে? কতটা iteration হয়েছে?

Design জগতে আমি যে জিনিসটা সবচেয়ে আকর্ষণীয় মনে করি — সেটা হলো এই process।

---

## Professional Logo Design কিভাবে কাজ করে?

একটা বড় company যখন নতুন logo চায়, তখন কী হয়?

**Phase 1: Discovery**

Design agency client এর সাথে ৩-৫ টা meeting করে।

Company কী করে? History কী? Target audience কে? Competitors কেমন? কোন emotion convey করতে চায়?

এই phase এ কোনো design হয় না। শুধু শোনা।

**Phase 2: Research**

Industry research। Competitor analysis। Color psychology research। Cultural significance research (বাংলাদেশের context এ বিশেষভাবে গুরুত্বপূর্ণ)।

**Phase 3: Concept Development**

Designer রা ৫০-১০০ টা rough sketch করেন। তারপর সেরা ৫-১০ টা refine করেন।

এই stage এ AI tools এখন অনেক help করছে concept exploration এ।

**Phase 4: Presentation**

৩-৫ টা direction client কে দেখানো হয়। প্রতিটার পেছনে rationale explain করা হয়।

**Phase 5: Refinement**

Client এর feedback নিয়ে selected direction refine করা।

Multiple revision। কখনো কখনো মাসের পর মাস।

**Phase 6: Final Delivery**

Vector files, style guide, usage guidelines সহ complete brand package।

---

## বাংলাদেশের Context এ Design এর Challenges

আমাদের দেশে design এ কিছু unique challenges আছে:

**Bilingual requirement:** Logo কে Bengali আর English দুভাষায় কাজ করতে হবে।

**Cultural sensitivity:** রঙের meaning আমাদের culture এ আলাদা। সবুজ-লাল আমাদের জাতীয় identity।

**Digital + Print:** Website থেকে billboard — সব জায়গায় logo কাজ করতে হবে।

---

## ছোট Business এর জন্য

বড় brand এর মতো লাখ টাকা budget নেই — এটা বাস্তব।

কিন্তু process একই।

ছোট budget এ করলেও:
- Brief ঠিকমতো করুন
- Minimum ৩টা concept দেখুন
- Brand guideline নিন

এই তিনটা থাকলে অনেক ভালো হয়।`,
        tags: [
          `Bangladesh brand logo design`,
          `logo design case study Bangladesh`,
          `brand identity Bangladesh`,
          `Grameenphone logo`,
          `Bangladesh graphic design`,
        ],
        readTime: `7`,
        publishedAt: `2026-04-14`,
        coverUrl: `https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_050`,
        title: `AI Art বনাম Human Art: কোনটা কি বেশি 'Real'? একজন Designer এর সৎ মতামত`,
        topic: `AI & Design`,
        excerpt: `AI generated art কি art? নাকি এটা শুধু computation? Artists রা AI কে নিয়ে যা বলছেন — এবং আমি কী মনে করি। বিতর্কটা interesting।`,
        content: `২০২৩ সালে Colorado State Fair এর art competition।

Jason Allen নামে একজন ব্যক্তি জিতলেন।

তাঁর art টা ছিল Midjourney দিয়ে generate করা।

Artists দের মধ্যে ঝড় উঠলো।

"এটা cheating।"
"AI art, art না।"
"Human creativity এর সাথে এটা তুলনীয় না।"

বিতর্কটা এখনো চলছে। আমার মতামত share করছি।

---

## "Art কী" — এই প্রশ্নটাই কঠিন

Photography আসার সময় painters বলেছিলেন — "Photography art না। Machine এ click করলে art হয় না।"

তারপর photography নিজেই art form হয়ে গেছে।

Film আসার সময় বলা হয়েছিল — "এটা real theater না।"

তারপর cinema পৃথিবীর সবচেয়ে powerful art form হয়েছে।

AI art নিয়ে debate টা নতুন না। এটা একটা পুরনো pattern।

---

## AI Art এ কী আছে?

Midjourney বা DALL-E দিয়ে image বানানো কি শুধু "একটা বোতাম টিপা"?

না।

একটা ভালো AI image এর পেছনে আছে:

- Prompt engineering — কি লিখলে কী result আসবে জানতে হবে
- Aesthetic sense — কোন result টা ভালো সেটা বুঝতে হবে
- Iteration — ৫০-১০০ বার try করে সেরাটা বাছতে হবে
- Post-processing — Photoshop বা Illustrator এ final polish

---

## Human Art এ কী আছে?

Human artist এর art এ আছে:

- Personal experience এবং emotion
- Cultural context এবং memory
- Intentional decision making
- Physical skill (যদি traditional art হয়)
- Unique perspective

---

## আমার সৎ মতামত

AI art এবং Human art দুটো আলাদা জিনিস।

একটাকে দিয়ে অন্যটাকে replace করার চেষ্টা ভুল।

AI art powerful tool। কিছু কাজে এটা human art এর চেয়ে faster, cheaper।

কিন্তু যে art এর পেছনে মানুষের story আছে, struggle আছে, emotion আছে — সেটার value আলাদা।

---

## Designer হিসেবে আমি কোথায় দাঁড়াই?

Client work এ AI আমার assistant।

কিন্তু যখন আমি নিজের জন্য কিছু বানাই — নিজের হাতে করি।

কারণ সেই process এ আনন্দ আছে। শেখা আছে।

AI সেই আনন্দটা দিতে পারে না।`,
        tags: [
          `AI art vs human art`,
          `AI generated art Bangladesh`,
          `artificial intelligence art debate`,
          `creative AI Bangladesh`,
          `design AI debate`,
        ],
        readTime: `7`,
        publishedAt: `2026-04-15`,
        coverUrl: `https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_051`,
        title: `Color Grading থেকে Viral: কিভাবে একটা Photo এর Color বদলে Social Media Reach ৩ গুণ বাড়ে`,
        topic: `Tutorials`,
        excerpt: `Instagram এ কিছু post হাজার হাজার like পায়, কিছু পায় না। পার্থক্য অনেক সময় শুধু color। Color grading এর science এবং technique — বিস্তারিত guide।`,
        content: `একটা experiment করুন।

আপনার Instagram feed এ সবচেয়ে বেশি engagement পাওয়া ১০টা post দেখুন।

তারপর সবচেয়ে কম engagement পাওয়া ১০টা।

Pattern লক্ষ্য করবেন — সফল posts গুলোতে color consistent। Moody। Purposeful।

Color grading শুধু "pretty করা" না। এটা psychology।

---

## Color Grading কী?

Color grading মানে একটা image এর color এবং tone systematically পরিবর্তন করা।

সহজ করে বললে — একটা photo কে দেখলে যে "feel" আসে সেটা নিয়ন্ত্রণ করা।

Warm colors → energy, happiness, hunger
Cool colors → calm, trust, melancholy
Desaturated → sophisticated, editorial, moody

---

## Instagram এ কোন Colors ভালো কাজ করে?

২০২৬ সালে data দেখলে বোঝা যায়:

**High engagement:**
- Warm tones (gold, amber, warm orange)
- Earth tones (brown, terracotta)
- Bold, high contrast images

**Lower engagement:**
- Muddy, unclear colors
- Too cold without purpose
- Flat, unedited photos

তবে niche অনুযায়ী এটা ভিন্ন। Fashion brand এ dark moody, food brand এ warm bright।

---

## Beginner এর জন্য Simple Color Grading

**Step 1: Exposure আগে ঠিক করুন**

Color grading শুরু করার আগে exposure, contrast, highlights, shadows ঠিক করুন।

**Step 2: White Balance**

Photo টা কি warm দেখাবে নাকি cool? এই decision আগে নিন।

**Step 3: Hue/Saturation**

Skin tone protect করুন। Background এর color adjust করুন।

**Step 4: Color Grading (Shadows/Midtones/Highlights)**

Shadows এ cool (blue/teal) দিলে → moody effect
Highlights এ warm (yellow/orange) দিলে → filmic look

**Step 5: Consistent Preset বানান**

একবার ভালো grading করলে সেটা Lightroom preset হিসেবে save করুন। সব post এ apply করুন।

এটাই feed consistency তৈরি করে।

---

## Practical Tools

**Lightroom (Mobile):** Free, most powerful
**VSCO:** Great presets
**Snapseed:** Selective editing এ excellent

---

## শেষ কথা

Color grading শিখতে ১-২ সপ্তাহ লাগে basic level এ।

কিন্তু master হতে লাগে বছর।

Start করুন আজই। প্রতিদিন একটা photo edit করুন।

Practice ই একমাত্র পথ।`,
        tags: [
          `color grading tutorial Bangla`,
          `photo editing social media`,
          `Instagram color tips Bangladesh`,
          `color grading Photoshop`,
          `photo editing Bangladesh`,
        ],
        readTime: `7`,
        publishedAt: `2026-04-16`,
        coverUrl: `https://images.pexels.com/photos/3255761/pexels-photo-3255761.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_052`,
        title: `Social Media Algorithm ২০২৬: Facebook, Instagram, LinkedIn কিভাবে আপনার Content দেখায় বা লুকায়`,
        topic: `Graphic Design`,
        excerpt: `আপনার post এ অনেক পরিশ্রম করেছেন। কিন্তু কেউ দেখছে না। কারণটা algorithm। ২০২৬ সালে প্রতিটা platform এর algorithm কিভাবে কাজ করে — বিস্তারিত জানুন।`,
        content: `আপনি ঘণ্টা ধরে একটা post তৈরি করলেন।

Publish করলেন।

১৫টা like।

কিন্তু পাশের page হয়তো একটা ভিডিও দিলো — ১০,০০০ view।

কেন?

Algorithm।

---

## Algorithm আসলে কী?

Algorithm হলো rules এর একটা set যেটা determine করে কোন content কাকে দেখাবে।

Platform এর goal: মানুষকে যতক্ষণ সম্ভব platform এ রাখা।

তাই algorithm সেই content push করে যেটা দেখলে মানুষ বেশিক্ষণ থাকে।

---

## Facebook Algorithm ২০২৬

Facebook এখন "meaningful interactions" কে সবচেয়ে বেশি value দেয়।

**What gets pushed:**
- Long comments (এটা বড় signal)
- Shares (বাইরে শেয়ার হলে বড় বুস্ট)
- Video (বিশেষত ৩ মিনিটের বেশি)
- Reels (এখনো high organic reach)

**What gets suppressed:**
- External links (Facebook মানুষকে বাইরে পাঠাতে চায় না)
- "Like/Share করুন" — এই কথা সরাসরি বললে reach কমে

**Tip:** Post এর প্রথম ১ ঘণ্টায় যদি engagement ভালো আসে, Facebook আরো বেশি মানুষকে দেখায়।

---

## Instagram Algorithm ২০২৬

Instagram এখন interest-based। আপনাকে কতজন follow করেন সেটা কম important।

**What gets pushed:**
- Reels (সবচেয়ে বেশি organic reach)
- Saves (এটা strongest signal)
- Shares to Stories
- Comments (বিশেষত back-and-forth conversation)

**What gets suppressed:**
- Low quality image
- Stock photos (Instagram detect করতে পারে)
- Posting too frequently

**Tip:** Reels এ first 3 seconds সবচেয়ে important। মানুষ scroll না করলে তবেই reach বাড়ে।

---

## LinkedIn Algorithm ২০২৬

LinkedIn এখন personal story কে সবচেয়ে বেশি push করে।

**What gets pushed:**
- Personal experience sharing
- Controversial or thought-provoking opinion
- Carousel posts (document format)
- Early engagement (প্রথম ৩ ঘণ্টা crucial)

**What gets suppressed:**
- External links in post body
- Too many hashtags (৩-৫টা enough)
- Pure promotional content

---

## Designer হিসেবে আমার Strategy

প্রতিটা platform এর জন্য আলাদা approach।

Facebook: Community building, longer posts, stories
Instagram: Visual portfolio, Reels, educational content
LinkedIn: Professional journey, case studies, industry opinion

একটা content সব জায়গায় একইভাবে post করলে কোথাও ভালো হয় না।

Tailor করুন। Platform বুঝে কাজ করুন।`,
        tags: [
          `social media algorithm 2026`,
          `Facebook algorithm Bangladesh`,
          `Instagram algorithm tips`,
          `social media reach Bangladesh`,
          `content marketing Bangladesh`,
        ],
        readTime: `8`,
        publishedAt: `2026-04-17`,
        coverUrl: `https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_053`,
        title: `Graphic Design এর ভবিষ্যৎ: ২০৩০ সালে Designer এর কাজ কেমন হবে?`,
        topic: `Career Tips`,
        excerpt: `২০২৬ সালে বসে ২০৩০ এর design industry কেমন হবে সেটা predict করা কঠিন। কিন্তু trends দেখলে কিছু বোঝা যায়। আমার analysis।`,
        content: `২০১৫ সালে যদি কেউ বলতো — ২০২৬ সালে AI দিয়ে ১০ সেকেন্ডে professional image বানানো যাবে — কেউ বিশ্বাস করতো না।

২০২৬ সালে বসে ২০৩০ predict করাও তাই কঠিন।

কিন্তু কিছু trends এত স্পষ্ট যে ignore করা যায় না।

---

## Trend 1: AI Collaborator হবে, Tool না

এখন AI হলো tool — আপনি command দেন, AI কাজ করে।

২০৩০ এ AI হবে collaborator। আপনি বললেন "একটা brand identity বানাতে চাই" — AI আপনাকে প্রশ্ন করবে, suggest করবে, আপনি refine করবেন।

Adobe, Figma — সব এদিকে যাচ্ছে।

---

## Trend 2: 3D এবং Spatial Design

Apple Vision Pro, Meta Quest — AR/VR device বাড়ছে।

২০৩০ এ হয়তো designer দের 3D space এ design করতে হবে।

Screen নয়, environment।

এখন থেকে 3D design শেখা শুরু করলে এগিয়ে থাকবেন।

---

## Trend 3: Motion Design Everywhere

Static image এর চেয়ে animated content এর demand বাড়ছে।

২০৩০ এ হয়তো প্রতিটা logo animated থাকবে, প্রতিটা brand element motion থাকবে।

After Effects, Rive, Lottie — এগুলো শেখা relevant হবে।

---

## Trend 4: Hyper-Personalization

AI দিয়ে এখন হাজারো মানুষকে personalized content দেওয়া সম্ভব।

২০৩০ এ design হয়তো automatic হবে per-user।

Designer এর role হবে — সেই system design করা। Individual piece না।

---

## Trend 5: Ethical Design

AI deepfake, manipulation এর যুগে ethical design একটা competitive advantage হবে।

Authentic, transparent, honest design।

Brand যারা এটা মানবে — তারা trust জিতবে।

---

## Bangladesh এর জন্য সুযোগ কোথায়?

Global market এ বাংলাদেশি designers এর জন্য সুযোগ বাড়ছে।

কারণ:
- Cost advantage এখনো আছে
- English communication improving
- AI tools সবার জন্য সমান সুযোগ দিয়েছে

২০৩০ সালে যে বাংলাদেশি designer AI দিয়ে দক্ষ, motion design জানেন, 3D করতে পারেন — তাঁর জন্য global market অনেক বড়।

---

## এখনই শুরু করুন

২০৩০ দূরে না। ৪ বছর।

আজ থেকে শুরু করুন:
- AI tools ভালোভাবে শিখুন
- Motion design basics শিখুন
- English writing improve করুন
- International community তে যোগ দিন

ইন শা আল্লাহ সামনে অনেক সুযোগ আছে।`,
        tags: [
          `design future 2030`,
          `graphic design career future`,
          `AI design 2030`,
          `designer future Bangladesh`,
          `design trends 2030`,
        ],
        readTime: `8`,
        publishedAt: `2026-04-18`,
        coverUrl: `https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_054`,
        title: `Fiverr থেকে $10,000: বাংলাদেশের একজন Designer এর Real Journey — কী করেছেন, কী ভুল করেছেন`,
        topic: `Career Tips`,
        excerpt: `এটা কোনো overnight success story না। এটা ২ বছরের কঠিন পরিশ্রমের গল্প। Fiverr এ $10,000 earn করতে কী লেগেছে — সব কিছু honestly বলছি।`,
        content: `Fiverr এ $10,000 earn — এই headline দেখলে অনেকেই think করেন overnight হয়েছে।

বাস্তবে এই journey ছিল ২ বছরের।

অনেক rejection ছিল। অনেক revision ছিল। অনেক রাত জাগা ছিল।

কিন্তু শেষে হয়েছে।

কিভাবে — সেটাই বলছি।

---

## শুরুটা হলো যেভাবে

Fiverr account খুললাম। Logo design এর gig দিলাম।

প্রথম ৬ সপ্তাহ — একটাও order নেই।

Frustrating ছিল। মনে হচ্ছিলো হয়তো হবে না।

কিন্তু এই সময়টাকে নষ্ট করিনি।

---

## প্রথম ৬ সপ্তাহে কী করলাম

**Portfolio বানালাম:** Practice project করলাম। Real client ছিল না, কিন্তু real brief নিয়ে কাজ করলাম। Restaurant এর logo, tech startup এর brand identity।

**Gig optimize করলাম:** Title, description, tags — keyword research করে।

**Buyer Request এ apply করলাম:** প্রতিদিন ১০টা।

**Price কমালাম না:** অনেকে suggest করেছিল $5 এ দাও। করিনি। $25 রাখলাম।

---

## প্রথম Order

৬ সপ্তাহ পর একটা notification।

$25 এর একটা logo order।

সেই order টা নিয়ে এতটাই serious হলাম যে ৩ দিন কাজ করলাম।

Client ৫ star দিলেন।

সেই ৫ star টা algorithm কে signal দিলো। পরের সপ্তাহে আরো ৩টা order।

---

## Scale করার সময়

৬ মাস পর consistently month এ ৫-৮টা order আসছে।

এই সময়ে কিছু সিদ্ধান্ত নিলাম:

**Package তৈরি করলাম:** Basic ($45), Standard ($120), Premium ($250)।

**Upsell করলাম:** Logo সাথে brand guideline, social media kit।

**Long-term client relationship বানালাম:** ৩-৪ জন client ছিলেন যারা প্রতি মাসে কাজ দিতেন।

---

## কোথায় সবচেয়ে বেশি ভুল করলাম

**Unlimited revision offer:** শুরুতে "unlimited revision" দিতাম। এটা ভুল ছিল। পরে ২ rounds revision করলাম।

**সব কাজ নিতাম:** Quality দিতে পারতাম না। পরে নিজের niche fix করলাম — only brand identity।

**Client qualify করতাম না:** কিছু client এর সাথে কাজ করা আরো কঠিন হয়েছিল। এখন আগেই কিছু প্রশ্ন করি।

---

## $10,000 পার হলে কী পেলাম?

Money ছাড়াও পেলাম:

Confidence — নিজের skill এ বিশ্বাস।
Portfolio — real client এর real work।
Network — কিছু client এখনো যোগাযোগ করেন।

সবচেয়ে বড় কথা — প্রমাণিত হলো যে বাংলাদেশ থেকে বসে international market এ কাজ করা সম্ভব।

আলহামদুলিল্লাহ।`,
        tags: [
          `Fiverr success Bangladesh`,
          `Fiverr $10000 earn`,
          `freelancing success story Bangladesh`,
          `Fiverr graphic design Bangladesh`,
          `online income story Bangladesh`,
        ],
        readTime: `8`,
        publishedAt: `2026-04-19`,
        coverUrl: `https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
      {
        id: `blog_055`,
        title: `Neuralink: মানুষের মস্তিষ্কে Chip — কতটা Real, কতটা Science Fiction?`,
        topic: `AI & Design`,
        excerpt: `Elon Musk এর Neuralink ইতোমধ্যে মানুষের brain এ chip লাগিয়েছে। প্রথম patient computer চালাচ্ছেন শুধু চিন্তা দিয়ে। এটা কি সত্যিই সম্ভব? ভবিষ্যৎটা কেমন হবে?`,
        content: `জানুয়ারি ২০২৪।

একজন মানুষের brain এ সার্জারি করা হলো।

তাঁর skull এ লাগানো হলো একটা chip — মাত্র একটা coin এর সমান।

নাম: Neuralink N1।

এর পর থেকে তিনি শুধু চিন্তা দিয়ে computer চালাচ্ছেন।

এটা science fiction না। এটা ২০২৪ সালের বাস্তবতা।

---

## Neuralink কী?

Neuralink হলো Elon Musk এর neurotechnology company। ২০১৬ সালে প্রতিষ্ঠিত।

লক্ষ্য: Human brain আর computer এর মধ্যে direct communication।

N1 chip এ আছে ১,০২৪টা electrode। এগুলো brain এর electrical signal পড়তে পারে।

---

## প্রথম Patient এর গল্প

Noland Arbaugh — প্রথম Neuralink patient।

২০২৩ সালে একটা accident এ তিনি paralyzed হয়ে গেছিলেন।

January 2024 এ Neuralink chip বসানো হলো।

তারপর তিনি শুধু চিন্তা করে cursor move করলেন। Chess খেললেন। Video game খেললেন।

"এটা like using the force," — বলেছিলেন তিনি।

---

## এটা কিভাবে কাজ করে?

Brain এ যখন আপনি কিছু করার "ভাবেন", neurons fire করে — electrical signal তৈরি হয়।

Neuralink chip সেই signal ধরে। Computer এ পাঠায়।

Computer সেটা action এ convert করে।

---

## কতটা Safe?

এই প্রশ্নটাই সবচেয়ে important।

প্রথম patient এ chip লাগানোর পর কিছু issue হয়েছিল — কিছু electrode কাজ করা বন্ধ করেছিল।

Neuralink বলেছে এটা fix করা হয়েছে।

কিন্তু long-term safety এখনো unknown।

FDA (US food and drug authority) human trial এর permission দিয়েছে। তবে এটা experimental পর্যায়ে।

---

## ভবিষ্যৎ কী?

Elon Musk এর vision অনেক বড়।

শুধু paralyzed মানুষের জন্য না। সুস্থ মানুষের জন্যও।

তিনি বলেছেন — ভবিষ্যতে মানুষ Neuralink দিয়ে:
- Super fast information access করতে পারবে
- Direct brain-to-brain communication করতে পারবে
- Memory store করতে পারবে
- AI এর সাথে "merge" হতে পারবে

---

## Design জগতে এর Impact?

Interesting একটা question।

যদি someday designer রা শুধু চিন্তা করে design করতে পারেন — mouse, keyboard ছাড়া?

Creative process কতটা বদলে যাবে?

আমার মনে হয় — এটা এলে design আরো intuitive হবে। Tool এর barrier কমবে।

কিন্তু creative thinking এর জায়গা নেবে না।

Neuralink একটা fascinating topic। আমি personally closely follow করি।

ভবিষ্যৎটা অবাক করার মতো।`,
        tags: [
          `Neuralink brain chip`,
          `brain computer interface`,
          `Neuralink Bangladesh`,
          `Elon Musk Neuralink 2026`,
          `future technology Bangladesh`,
        ],
        readTime: `8`,
        publishedAt: `2026-04-20`,
        coverUrl: `https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp`,
        hidden: !1,
      },
    ],
    courses: [
      {
        id: `c1`,
        title: `Graphic Design & Visual Communication`,
        institute: `Self-Taught — Online Research & Practice`,
        period: `2018 – Present`,
        cert: `Self-Certified`,
        desc: `Mastered Adobe Illustrator, Photoshop, and Canva Pro through extensive online research, tutorials, and hands-on practice. Developed expertise in logo design, brand identity, typography, color theory, and social media graphics.`,
        tags: [
          `Adobe Illustrator`,
          `Adobe Photoshop`,
          `Canva Pro`,
          `Logo Design`,
          `Typography`,
          `Color Theory`,
        ],
        hidden: !1,
      },
      {
        id: `c2`,
        title: `Website Design & UI/UX`,
        institute: `Self-Taught — Online Research & Practice`,
        period: `2020 – Present`,
        cert: `Self-Certified`,
        desc: `Learned modern web design principles, UI/UX fundamentals, and responsive design through online research, YouTube tutorials, and real-world project experience. Skilled in creating pixel-perfect, conversion-focused web layouts.`,
        tags: [
          `UI/UX Design`,
          `Responsive Design`,
          `Figma`,
          `Web Layouts`,
          `Landing Pages`,
        ],
        hidden: !1,
      },
      {
        id: `c3`,
        title: `MS Office Suite — Advanced`,
        institute: `Self-Taught — Online Research & Practice`,
        period: `2017 – Present`,
        cert: `Self-Certified`,
        desc: `Acquired advanced proficiency in Microsoft Word, Excel, and PowerPoint through online resources and practical application in professional documentation, data management, and presentations.`,
        tags: [
          `MS Word`,
          `MS Excel`,
          `MS PowerPoint`,
          `Documentation`,
          `Data Management`,
        ],
        hidden: !1,
      },
      {
        id: `c4`,
        title: `AI Tools & Prompt Engineering`,
        institute: `Self-Taught — Online Research & Practice`,
        period: `2022 – Present`,
        cert: `Self-Certified`,
        desc: `Developed deep expertise in AI-powered creative tools through continuous online research and experimentation. Proficient in Midjourney, DALL-E, Stable Diffusion, ChatGPT, and AI prompt engineering for design workflows.`,
        tags: [
          `Midjourney`,
          `DALL-E`,
          `Stable Diffusion`,
          `ChatGPT`,
          `Prompt Engineering`,
          `AI Workflows`,
        ],
        hidden: !1,
      },
      {
        id: `c5`,
        title: `Social Media Marketing & Facebook Ads`,
        institute: `Self-Taught — Online Research & Practice`,
        period: `2019 – Present`,
        cert: `Self-Certified`,
        desc: `Learned social media marketing strategies, Facebook page management, content planning, and digital advertising through extensive online research and real-world client projects.`,
        tags: [
          `Facebook Marketing`,
          `Social Media Strategy`,
          `Content Planning`,
          `Page Management`,
        ],
        hidden: !1,
      },
    ],
    social: {
      fb: `#`,
      li: `#`,
      ig: `#`,
      beh: `#`,
      wa: `+8801731186929`,
      yt: `#`,
    },
    platformLinks: [
      {
        id: `pl1`,
        platform: `fiverr`,
        label: `Fiverr Reviews`,
        url: `https://fiverr.com`,
        hidden: !1,
      },
      {
        id: `pl2`,
        platform: `behance`,
        label: `Behance`,
        url: `https://behance.net`,
        hidden: !0,
      },
    ],
    sectionVisibility: { experience: !0, education: !0, facebookPages: !0 },
  },
  E = m();
Qe.portfolio = [];
Qe.testimonials = [];
g();
var $e = (0, T.createContext)(null),
  et = {};
function tt({ children: e }) {
  let [t, n] = (0, T.useState)(Qe),
    [r, i] = (0, T.useState)(!0),
    [a, o] = (0, T.useState)(!1),
    [s, c] = (0, T.useState)(null),
    [l, u] = (0, T.useState)(!0),
    [d, f] = (0, T.useState)({});
  ((0, T.useEffect)(
    () =>
      Ae((e) => {
        (c(e), u(!1));
      }),
    [],
  ),
    (0, T.useEffect)(() => {
      je()
        .then(
          (function () {
            var e = w(function* (e) {
              if (e) {
                let t = p(Qe, e);
                (!t.courses || t.courses.length === 0) &&
                  (t.courses = Qe.courses || []);
                let r = e.blog || [],
                  i = Qe.blog || [];
                new Set(r.map((e) => e.id));
                let a = i.map((e) => {
                    let t = r.find((t) => t.id === e.id);
                    return t
                      ? _(
                          _(_({}, e), t),
                          {},
                          { hidden: t.hidden === void 0 ? e.hidden : t.hidden },
                        )
                      : e;
                  }),
                  o = r.filter((e) => !i.find((t) => t.id === e.id));
                ((t.blog = [...a, ...o]), n(t));
              }
              i(!1);
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        )
        .catch(() => {
          i(!1);
        });
    }, []),
    (0, T.useEffect)(() => {
      Ye().then((e) => {
        (f((t) => _(_({}, t), e)),
          (et = _(_({}, et), e)),
          e.emailjs &&
            ((window.__emailjsKey = e.emailjs),
            window.emailjs && window.emailjs.init({ publicKey: e.emailjs })),
          e.groq && (window._gk = e.groq),
          e.gemini && (window._mk = e.gemini));
      });
      let e = Ze((e) => {
        (f((t) => _(_({}, t), e)),
          (et = _(_({}, et), e)),
          e.emailjs &&
            ((window.__emailjsKey = e.emailjs),
            window.emailjs && window.emailjs.init({ publicKey: e.emailjs })),
          window.dispatchEvent(
            new CustomEvent(`api_keys_updated`, { detail: e }),
          ));
      });
      let t = () => {};
      if (s) {
        We()
          .then((e) => {
            (f((t) => _(_({}, t), e)), (et = _(_({}, et), e)));
          })
          .catch(() => {});
        t = Ke((e) => {
          (f((t) => _(_({}, t), e)), (et = _(_({}, et), e)));
        });
      }
      return () => {
        (e(), t());
      };
    }, [s]));
  function p(e, t) {
    let n = _({}, e);
    for (let r of Object.keys(t))
      Array.isArray(t[r])
        ? (n[r] = t[r])
        : t[r] !== null && typeof t[r] == `object`
          ? (n[r] = p(e[r] || {}, t[r]))
          : t[r] !== void 0 && t[r] !== null && (n[r] = t[r]);
    return n;
  }
  function m(e) {
    return h.apply(this, arguments);
  }
  function h() {
    return (
      (h = w(function* (e) {
        o(!0);
        let t = yield Ne(e);
        return (o(!1), t);
      })),
      h.apply(this, arguments)
    );
  }
  function g(e) {
    return v.apply(this, arguments);
  }
  function v() {
    return (
      (v = w(function* (e) {
        let t = [
            `emailjs`,
            `emailjs_service`,
            `emailjs_contact_template`,
            `emailjs_nl_template`,
            `emailjs_sub_template`,
          ],
          n = {},
          r = {};
        Object.keys(e).forEach((i) => {
          t.includes(i) ? (n[i] = e[i]) : (r[i] = e[i]);
        });
        let i = _(_({}, et), e);
        ((et = i), f(i));
        let a = !0;
        if (Object.keys(n).length > 0) {
          let e = yield qe(n);
          a = a && e;
        }
        if (Object.keys(r).length > 0) {
          let e = yield He(r);
          a = a && e;
        }
        return (
          window.dispatchEvent(
            new CustomEvent(`api_keys_updated`, { detail: i }),
          ),
          a
        );
      })),
      v.apply(this, arguments)
    );
  }
  function y(e, t) {
    n((n) => _(_({}, n), {}, { [e]: t }));
  }
  return (0, E.jsx)($e.Provider, {
    value: {
      data: t,
      setData: n,
      update: y,
      save: m,
      saving: a,
      loading: r,
      authUser: s,
      authLoading: l,
      apiKeys: d,
      updateApiKeys: g,
    },
    children: e,
  });
}
function nt() {
  return (0, T.useContext)($e);
}
var D = {
    nav: `_nav_158pr_1`,
    scrolled: `_scrolled_158pr_15`,
    inner: `_inner_158pr_24`,
    logo: `_logo_158pr_34`,
    links: `_links_158pr_42`,
    link: `_link_158pr_42`,
    activeLink: `_activeLink_158pr_60`,
    dropdownContainer: `_dropdownContainer_158pr_64`,
    dropdownMenu: `_dropdownMenu_158pr_68`,
    showDropdown: `_showDropdown_158pr_85`,
    dropdownInner: `_dropdownInner_158pr_91`,
    dropdownLink: `_dropdownLink_158pr_97`,
    dropIcon: `_dropIcon_158pr_111`,
    dropLabel: `_dropLabel_158pr_123`,
    dropDesc: `_dropDesc_158pr_129`,
    actions: `_actions_158pr_134`,
    themeBtn: `_themeBtn_158pr_140`,
    waIconBtn: `_waIconBtn_158pr_140`,
    cta: `_cta_158pr_156`,
    hamburger: `_hamburger_158pr_173`,
    badge: `_badge_158pr_191`,
    mobileOverlay: `_mobileOverlay_158pr_208`,
    mobileMenu: `_mobileMenu_158pr_219`,
  },
  rt = (0, T.createContext)({});
function it(e) {
  let t = (0, T.useRef)(null);
  return (t.current === null && (t.current = e()), t.current);
}
var at = typeof window < `u` ? T.useLayoutEffect : T.useEffect,
  ot = (0, T.createContext)(null);
function st(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ct(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
var lt = (e, t, n) => (n > t ? t : n < e ? e : n),
  ut = () => {},
  dt = {},
  ft = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function pt(e) {
  return typeof e == `object` && !!e;
}
var mt = (e) => /^0[^.\s]+$/u.test(e);
function ht(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var gt = (e) => e,
  _t = (e, t) => (n) => t(e(n)),
  vt = (...e) => e.reduce(_t),
  yt = (e, t, n) => {
    let r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  bt = class {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return (st(this.subscriptions, e), () => ct(this.subscriptions, e));
    }
    notify(e, t, n) {
      let r = this.subscriptions.length;
      if (r)
        if (r === 1) this.subscriptions[0](e, t, n);
        else
          for (let i = 0; i < r; i++) {
            let r = this.subscriptions[i];
            r && r(e, t, n);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  },
  xt = (e) => e * 1e3,
  St = (e) => e / 1e3;
function Ct(e, t) {
  return t ? (1e3 / t) * e : 0;
}
var wt = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Tt = 1e-7,
  Et = 12;
function Dt(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do ((o = t + (n - t) / 2), (a = wt(o, r, i) - e), a > 0 ? (n = o) : (t = o));
  while (Math.abs(a) > Tt && ++s < Et);
  return o;
}
function Ot(e, t, n, r) {
  if (e === t && n === r) return gt;
  let i = (t) => Dt(t, 0, 1, e, n);
  return (e) => (e === 0 || e === 1 ? e : wt(i(e), t, r));
}
var kt = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  At = (e) => (t) => 1 - e(1 - t),
  jt = Ot(0.33, 1.53, 0.69, 0.99),
  Mt = At(jt),
  Nt = kt(Mt),
  Pt = (e) =>
    e >= 1
      ? 1
      : (e *= 2) < 1
        ? 0.5 * Mt(e)
        : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Ft = (e) => 1 - Math.sin(Math.acos(e)),
  It = At(Ft),
  Lt = kt(Ft),
  Rt = Ot(0.42, 0, 1, 1),
  zt = Ot(0, 0, 0.58, 1),
  Bt = Ot(0.42, 0, 0.58, 1),
  Vt = (e) => Array.isArray(e) && typeof e[0] != `number`,
  Ht = (e) => Array.isArray(e) && typeof e[0] == `number`,
  Ut = {
    linear: gt,
    easeIn: Rt,
    easeInOut: Bt,
    easeOut: zt,
    circIn: Ft,
    circInOut: Lt,
    circOut: It,
    backIn: Mt,
    backInOut: Nt,
    backOut: jt,
    anticipate: Pt,
  },
  Wt = (e) => typeof e == `string`,
  Gt = (e) => {
    if (Ht(e)) {
      e.length;
      let [t, n, r, i] = e;
      return Ot(t, n, r, i);
    } else if (Wt(e)) return (Ut[e], `${e}`, Ut[e]);
    return e;
  },
  Kt = [
    `setup`,
    `read`,
    `resolveKeyframes`,
    `preUpdate`,
    `update`,
    `preRender`,
    `render`,
    `postRender`,
  ],
  qt = { value: null, addProjectionMetrics: null };
function Jt(e, t) {
  let n = new Set(),
    r = new Set(),
    i = !1,
    a = !1,
    o = new WeakSet(),
    s = { delta: 0, timestamp: 0, isProcessing: !1 },
    c = 0;
  function l(t) {
    (o.has(t) && (u.schedule(t), e()), c++, t(s));
  }
  let u = {
    schedule: (e, t = !1, a = !1) => {
      let s = a && i ? n : r;
      return (t && o.add(e), s.add(e), e);
    },
    cancel: (e) => {
      (r.delete(e), o.delete(e));
    },
    process: (e) => {
      if (((s = e), i)) {
        a = !0;
        return;
      }
      i = !0;
      let o = n;
      ((n = r),
        (r = o),
        n.forEach(l),
        t && qt.value && qt.value.frameloop[t].push(c),
        (c = 0),
        n.clear(),
        (i = !1),
        a && ((a = !1), u.process(e)));
    },
  };
  return u;
}
var Yt = 40;
function Xt(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = () => (n = !0),
    o = Kt.reduce((e, n) => ((e[n] = Jt(a, t ? n : void 0)), e), {}),
    {
      setup: s,
      read: c,
      resolveKeyframes: l,
      preUpdate: u,
      update: d,
      preRender: f,
      render: p,
      postRender: m,
    } = o,
    h = () => {
      let a = dt.useManualTiming,
        o = a ? i.timestamp : performance.now();
      ((n = !1),
        a ||
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, Yt), 1)),
        (i.timestamp = o),
        (i.isProcessing = !0),
        s.process(i),
        c.process(i),
        l.process(i),
        u.process(i),
        d.process(i),
        f.process(i),
        p.process(i),
        m.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(h)));
    },
    g = () => {
      ((n = !0), (r = !0), i.isProcessing || e(h));
    };
  return {
    schedule: Kt.reduce((e, t) => {
      let r = o[t];
      return (
        (e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i))),
        e
      );
    }, {}),
    cancel: (e) => {
      for (let t = 0; t < Kt.length; t++) o[Kt[t]].cancel(e);
    },
    state: i,
    steps: o,
  };
}
var {
    schedule: O,
    cancel: Zt,
    state: k,
    steps: Qt,
  } = Xt(typeof requestAnimationFrame < `u` ? requestAnimationFrame : gt, !0),
  $t;
function en() {
  $t = void 0;
}
var A = {
    now: () => (
      $t === void 0 &&
        A.set(
          k.isProcessing || dt.useManualTiming
            ? k.timestamp
            : performance.now(),
        ),
      $t
    ),
    set: (e) => {
      (($t = e), queueMicrotask(en));
    },
  },
  tn = { layout: 0, mainThread: 0, waapi: 0 },
  nn = (e) => (t) => typeof t == `string` && t.startsWith(e),
  rn = nn(`--`),
  an = nn(`var(--`),
  on = (e) => (an(e) ? sn.test(e.split(`/*`)[0].trim()) : !1),
  sn =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function cn(e) {
  return typeof e == `string` ? e.split(`/*`)[0].includes(`var(--`) : !1;
}
g();
var ln = {
    test: (e) => typeof e == `number`,
    parse: parseFloat,
    transform: (e) => e,
  },
  un = _(_({}, ln), {}, { transform: (e) => lt(0, 1, e) }),
  dn = _(_({}, ln), {}, { default: 1 }),
  fn = (e) => Math.round(e * 1e5) / 1e5,
  pn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function mn(e) {
  return e == null;
}
var hn =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  gn = (e, t) => (n) =>
    !!(
      (typeof n == `string` && hn.test(n) && n.startsWith(e)) ||
      (t && !mn(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  _n = (e, t, n) => (r) => {
    if (typeof r != `string`) return r;
    let [i, a, o, s] = r.match(pn);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(a),
      [n]: parseFloat(o),
      alpha: s === void 0 ? 1 : parseFloat(s),
    };
  };
g();
var vn = (e) => lt(0, 255, e),
  yn = _(_({}, ln), {}, { transform: (e) => Math.round(vn(e)) }),
  bn = {
    test: gn(`rgb`, `red`),
    parse: _n(`red`, `green`, `blue`),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      `rgba(` +
      yn.transform(e) +
      `, ` +
      yn.transform(t) +
      `, ` +
      yn.transform(n) +
      `, ` +
      fn(un.transform(r)) +
      `)`,
  };
function xn(e) {
  let t = ``,
    n = ``,
    r = ``,
    i = ``;
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
var Sn = { test: gn(`#`), parse: xn, transform: bn.transform };
g();
var Cn = (e) => ({
    test: (t) =>
      typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  wn = Cn(`deg`),
  Tn = Cn(`%`),
  j = Cn(`px`),
  En = Cn(`vh`),
  Dn = Cn(`vw`),
  On = _(
    _({}, Tn),
    {},
    {
      parse: (e) => Tn.parse(e) / 100,
      transform: (e) => Tn.transform(e * 100),
    },
  ),
  kn = {
    test: gn(`hsl`, `hue`),
    parse: _n(`hue`, `saturation`, `lightness`),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      `hsla(` +
      Math.round(e) +
      `, ` +
      Tn.transform(fn(t)) +
      `, ` +
      Tn.transform(fn(n)) +
      `, ` +
      fn(un.transform(r)) +
      `)`,
  },
  M = {
    test: (e) => bn.test(e) || Sn.test(e) || kn.test(e),
    parse: (e) =>
      bn.test(e) ? bn.parse(e) : kn.test(e) ? kn.parse(e) : Sn.parse(e),
    transform: (e) =>
      typeof e == `string`
        ? e
        : e.hasOwnProperty(`red`)
          ? bn.transform(e)
          : kn.transform(e),
    getAnimatableNone: (e) => {
      let t = M.parse(e);
      return ((t.alpha = 0), M.transform(t));
    },
  },
  An =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function jn(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == `string` &&
    (((t = e.match(pn)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(An)) == null ? void 0 : n.length) || 0) >
      0
  );
}
var Mn = `number`,
  Nn = `color`,
  Pn = `var`,
  Fn = `var(`,
  In = "${}",
  Ln =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Rn(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    a = 0;
  return {
    values: n,
    split: t
      .replace(
        Ln,
        (e) => (
          M.test(e)
            ? (r.color.push(a), i.push(Nn), n.push(M.parse(e)))
            : e.startsWith(Fn)
              ? (r.var.push(a), i.push(Pn), n.push(e))
              : (r.number.push(a), i.push(Mn), n.push(parseFloat(e))),
          ++a,
          In
        ),
      )
      .split(In),
    indexes: r,
    types: i,
  };
}
function zn(e) {
  return Rn(e).values;
}
function Bn({ split: e, types: t }) {
  let n = e.length;
  return (r) => {
    let i = ``;
    for (let a = 0; a < n; a++)
      if (((i += e[a]), r[a] !== void 0)) {
        let e = t[a];
        e === Mn
          ? (i += fn(r[a]))
          : e === Nn
            ? (i += M.transform(r[a]))
            : (i += r[a]);
      }
    return i;
  };
}
function Vn(e) {
  return Bn(Rn(e));
}
var Hn = (e) =>
    typeof e == `number` ? 0 : M.test(e) ? M.getAnimatableNone(e) : e,
  Un = (e, t) =>
    typeof e == `number`
      ? t != null && t.trim().endsWith(`/`)
        ? e
        : 0
      : Hn(e);
function Wn(e) {
  let t = Rn(e);
  return Bn(t)(t.values.map((e, n) => Un(e, t.split[n])));
}
var Gn = { test: jn, parse: zn, createTransformer: Vn, getAnimatableNone: Wn };
function Kn(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function qn({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    a = 0,
    o = 0;
  if (!t) i = a = o = n;
  else {
    let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - r;
    ((i = Kn(s, r, e + 1 / 3)), (a = Kn(s, r, e)), (o = Kn(s, r, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Jn(e, t) {
  return (n) => (n > 0 ? t : e);
}
var N = (e, t, n) => e + (t - e) * n;
g();
var Yn = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Xn = [Sn, bn, kn],
  Zn = (e) => Xn.find((t) => t.test(e));
function Qn(e) {
  let t = Zn(e);
  if ((`${e}`, !t)) return !1;
  let n = t.parse(e);
  return (t === kn && (n = qn(n)), n);
}
var $n = (e, t) => {
    let n = Qn(e),
      r = Qn(t);
    if (!n || !r) return Jn(e, t);
    let i = _({}, n);
    return (e) => (
      (i.red = Yn(n.red, r.red, e)),
      (i.green = Yn(n.green, r.green, e)),
      (i.blue = Yn(n.blue, r.blue, e)),
      (i.alpha = N(n.alpha, r.alpha, e)),
      bn.transform(i)
    );
  },
  er = new Set([`none`, `hidden`]);
function tr(e, t) {
  return er.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
g();
function nr(e, t) {
  return (n) => N(e, t, n);
}
function rr(e) {
  return typeof e == `number`
    ? nr
    : typeof e == `string`
      ? on(e)
        ? Jn
        : M.test(e)
          ? $n
          : sr
      : Array.isArray(e)
        ? ir
        : typeof e == `object`
          ? M.test(e)
            ? $n
            : ar
          : Jn;
}
function ir(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => rr(e)(e, t[n]));
  return (e) => {
    for (let t = 0; t < r; t++) n[t] = i[t](e);
    return n;
  };
}
function ar(e, t) {
  let n = _(_({}, e), t),
    r = {};
  for (let i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = rr(e[i])(e[i], t[i]));
  return (e) => {
    for (let t in r) n[t] = r[t](e);
    return n;
  };
}
function or(e, t) {
  let n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let a = 0; a < t.values.length; a++) {
    var i;
    let o = t.types[a],
      s = e.indexes[o][r[o]];
    ((n[a] = (i = e.values[s]) == null ? 0 : i), r[o]++);
  }
  return n;
}
var sr = (e, t) => {
  let n = Gn.createTransformer(t),
    r = Rn(e),
    i = Rn(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (er.has(e) && !i.values.length) || (er.has(t) && !r.values.length)
      ? tr(e, t)
      : vt(ir(or(r, i), i.values), n)
    : (`${e}${t}`, Jn(e, t));
};
function cr(e, t, n) {
  return typeof e == `number` && typeof t == `number` && typeof n == `number`
    ? N(e, t, n)
    : rr(e)(e, t);
}
var lr = (e) => {
    let t = ({ timestamp: t }) => e(t);
    return {
      start: (e = !0) => O.update(t, e),
      stop: () => Zt(t),
      now: () => (k.isProcessing ? k.timestamp : A.now()),
    };
  },
  ur = (e, t, n = 10) => {
    let r = ``,
      i = Math.max(Math.round(t / n), 2);
    for (let t = 0; t < i; t++)
      r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + `, `;
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  dr = 2e4;
function fr(e) {
  let t = 0,
    n = e.next(t);
  for (; !n.done && t < 2e4;) ((t += 50), (n = e.next(t)));
  return t >= 2e4 ? 1 / 0 : t;
}
g();
function pr(e, t = 100, n) {
  let r = n(_(_({}, e), {}, { keyframes: [0, t] })),
    i = Math.min(fr(r), dr);
  return {
    type: `keyframes`,
    ease: (e) => r.next(i * e).value / t,
    duration: St(i),
  };
}
g();
var P = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function mr(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var hr = 12;
function gr(e, t, n) {
  let r = n;
  for (let n = 1; n < hr; n++) r -= e(r) / t(r);
  return r;
}
var _r = 0.001;
function vr({
  duration: e = P.duration,
  bounce: t = P.bounce,
  velocity: n = P.velocity,
  mass: r = P.mass,
}) {
  let i, a;
  P.maxDuration;
  let o = 1 - t;
  ((o = lt(P.minDamping, P.maxDamping, o)),
    (e = lt(P.minDuration, P.maxDuration, St(e))),
    o < 1
      ? ((i = (t) => {
          let r = t * o,
            i = r * e,
            a = r - n,
            s = mr(t, o),
            c = Math.exp(-i);
          return _r - (a / s) * c;
        }),
        (a = (t) => {
          let r = t * o * e,
            a = r * n + n,
            s = Math.pow(o, 2) * Math.pow(t, 2) * e,
            c = Math.exp(-r),
            l = mr(Math.pow(t, 2), o);
          return ((-i(t) + _r > 0 ? -1 : 1) * ((a - s) * c)) / l;
        }))
      : ((i = (t) => {
          let r = Math.exp(-t * e),
            i = (t - n) * e + 1;
          return -_r + r * i;
        }),
        (a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)))));
  let s = 5 / e,
    c = gr(i, a, s);
  if (((e = xt(e)), isNaN(c)))
    return { stiffness: P.stiffness, damping: P.damping, duration: e };
  {
    let t = Math.pow(c, 2) * r;
    return { stiffness: t, damping: o * 2 * Math.sqrt(r * t), duration: e };
  }
}
var yr = [`duration`, `bounce`],
  br = [`stiffness`, `damping`, `mass`];
function xr(e, t) {
  return t.some((t) => e[t] !== void 0);
}
function Sr(e) {
  let t = _(
    {
      velocity: P.velocity,
      stiffness: P.stiffness,
      damping: P.damping,
      mass: P.mass,
      isResolvedFromDuration: !1,
    },
    e,
  );
  if (!xr(e, br) && xr(e, yr))
    if (((t.velocity = 0), e.visualDuration)) {
      let n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        a = 2 * lt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = _(_({}, t), {}, { mass: P.mass, stiffness: i, damping: a });
    } else {
      let n = vr(_(_({}, e), {}, { velocity: 0 }));
      ((t = _(_(_({}, t), n), {}, { mass: P.mass })),
        (t.isResolvedFromDuration = !0));
    }
  return t;
}
function Cr(e = P.visualDuration, t = P.bounce) {
  let n =
      typeof e == `object`
        ? e
        : { visualDuration: e, keyframes: [0, 1], bounce: t },
    { restSpeed: r, restDelta: i } = n,
    a = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    s = { done: !1, value: a },
    {
      stiffness: c,
      damping: l,
      mass: u,
      duration: d,
      velocity: f,
      isResolvedFromDuration: p,
    } = Sr(_(_({}, n), {}, { velocity: -St(n.velocity || 0) })),
    m = f || 0,
    h = l / (2 * Math.sqrt(c * u)),
    g = o - a,
    v = St(Math.sqrt(c / u)),
    y = Math.abs(g) < 5;
  (r || (r = y ? P.restSpeed.granular : P.restSpeed.default),
    i || (i = y ? P.restDelta.granular : P.restDelta.default));
  let b, x, S, ee, te, C;
  if (h < 1)
    ((S = mr(v, h)),
      (ee = (m + h * v * g) / S),
      (b = (e) =>
        o -
        Math.exp(-h * v * e) * (ee * Math.sin(S * e) + g * Math.cos(S * e))),
      (te = h * v * ee + g * S),
      (C = h * v * g - ee * S),
      (x = (e) =>
        Math.exp(-h * v * e) * (te * Math.sin(S * e) + C * Math.cos(S * e))));
  else if (h === 1) {
    b = (e) => o - Math.exp(-v * e) * (g + (m + v * g) * e);
    let e = m + v * g;
    x = (t) => Math.exp(-v * t) * (v * e * t - m);
  } else {
    let e = v * Math.sqrt(h * h - 1);
    b = (t) => {
      let n = Math.exp(-h * v * t),
        r = Math.min(e * t, 300);
      return (
        o - (n * ((m + h * v * g) * Math.sinh(r) + e * g * Math.cosh(r))) / e
      );
    };
    let t = (m + h * v * g) / e,
      n = h * v * t - g * e,
      r = h * v * g - t * e;
    x = (t) => {
      let i = Math.exp(-h * v * t),
        a = Math.min(e * t, 300);
      return i * (n * Math.sinh(a) + r * Math.cosh(a));
    };
  }
  let ne = {
    calculatedDuration: (p && d) || null,
    velocity: (e) => xt(x(e)),
    next: (e) => {
      if (!p && h < 1) {
        let t = Math.exp(-h * v * e),
          n = Math.sin(S * e),
          a = Math.cos(S * e),
          c = o - t * (ee * n + g * a),
          l = xt(t * (te * n + C * a));
        return (
          (s.done = Math.abs(l) <= r && Math.abs(o - c) <= i),
          (s.value = s.done ? o : c),
          s
        );
      }
      let t = b(e);
      if (p) s.done = e >= d;
      else {
        let n = xt(x(e));
        s.done = Math.abs(n) <= r && Math.abs(o - t) <= i;
      }
      return ((s.value = s.done ? o : t), s);
    },
    toString: () => {
      let e = Math.min(fr(ne), dr),
        t = ur((t) => ne.next(e * t).value, e, 30);
      return e + `ms ` + t;
    },
    toTransition: () => {},
  };
  return ne;
}
Cr.applyToOptions = (e) => {
  let t = pr(e, 100, Cr);
  return (
    (e.ease = t.ease),
    (e.duration = xt(t.duration)),
    (e.type = `keyframes`),
    e
  );
};
var wr = 5;
function Tr(e, t, n) {
  let r = Math.max(t - wr, 0);
  return Ct(n - e(r), t - r);
}
function Er({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  let d = e[0],
    f = { done: !1, value: d },
    p = (e) => (s !== void 0 && e < s) || (c !== void 0 && e > c),
    m = (e) =>
      s === void 0
        ? c
        : c === void 0 || Math.abs(s - e) < Math.abs(c - e)
          ? s
          : c,
    h = n * t,
    g = d + h,
    _ = o === void 0 ? g : o(g);
  _ !== g && (h = _ - d);
  let v = (e) => -h * Math.exp(-e / r),
    y = (e) => _ + v(e),
    b = (e) => {
      let t = v(e),
        n = y(e);
      ((f.done = Math.abs(t) <= l), (f.value = f.done ? _ : n));
    },
    x,
    S,
    ee = (e) => {
      p(f.value) &&
        ((x = e),
        (S = Cr({
          keyframes: [f.value, m(f.value)],
          velocity: Tr(y, e, f.value),
          damping: i,
          stiffness: a,
          restDelta: l,
          restSpeed: u,
        })));
    };
  return (
    ee(0),
    {
      calculatedDuration: null,
      next: (e) => {
        let t = !1;
        return (
          !S && x === void 0 && ((t = !0), b(e), ee(e)),
          x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f)
        );
      },
    }
  );
}
function Dr(e, t, n) {
  let r = [],
    i = n || dt.mix || cr,
    a = e.length - 1;
  for (let n = 0; n < a; n++) {
    let a = i(e[n], e[n + 1]);
    (t && (a = vt(Array.isArray(t) ? t[n] || gt : t, a)), r.push(a));
  }
  return r;
}
function Or(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let a = e.length;
  if ((t.length, a === 1)) return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  let o = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = Dr(t, r, i),
    c = s.length,
    l = (n) => {
      if (o && n < e[0]) return t[0];
      let r = 0;
      if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = yt(e[r], e[r + 1], n);
      return s[r](i);
    };
  return n ? (t) => l(lt(e[0], e[a - 1], t)) : l;
}
function kr(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = yt(0, t, r);
    e.push(N(n, 1, i));
  }
}
function Ar(e) {
  let t = [0];
  return (kr(t, e.length - 1), t);
}
function jr(e, t) {
  return e.map((e) => e * t);
}
function Mr(e, t) {
  return e.map(() => t || Bt).splice(0, e.length - 1);
}
function Nr({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = `easeInOut`,
}) {
  let i = Vt(r) ? r.map(Gt) : Gt(r),
    a = { done: !1, value: t[0] },
    o = Or(jr(n && n.length === t.length ? n : Ar(t), e), t, {
      ease: Array.isArray(i) ? i : Mr(t, i),
    });
  return {
    calculatedDuration: e,
    next: (t) => ((a.value = o(t)), (a.done = t >= e), a),
  };
}
var Pr = (e) => e !== null;
function Fr(e, { repeat: t, repeatType: n = `loop` }, r, i = 1) {
  let a = e.filter(Pr),
    o = i < 0 || (t && n !== `loop` && t % 2 == 1) ? 0 : a.length - 1;
  return !o || r === void 0 ? a[o] : r;
}
var Ir = { decay: Er, inertia: Er, tween: Nr, keyframes: Nr, spring: Cr };
function Lr(e) {
  typeof e.type == `string` && (e.type = Ir[e.type]);
}
var Rr = class {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(e, t) {
    return this.finished.then(e, t);
  }
};
g();
var zr = (e) => e / 100,
  Br = class extends Rr {
    constructor(e) {
      (super(),
        (this.state = `idle`),
        (this.startTime = null),
        (this.isStopped = !1),
        (this.currentTime = 0),
        (this.holdTime = null),
        (this.playbackSpeed = 1),
        (this.delayState = { done: !1, value: void 0 }),
        (this.stop = () => {
          var e, t;
          let { motionValue: n } = this.options;
          (n && n.updatedAt !== A.now() && this.tick(A.now()),
            (this.isStopped = !0),
            this.state !== `idle` &&
              (this.teardown(),
              (e = (t = this.options).onStop) == null || e.call(t)));
        }),
        tn.mainThread++,
        (this.options = e),
        this.initAnimation(),
        this.play(),
        e.autoplay === !1 && this.pause());
    }
    initAnimation() {
      let { options: e } = this;
      Lr(e);
      let {
          type: t = Nr,
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: a = 0,
        } = e,
        { keyframes: o } = e,
        s = t || Nr;
      s !== Nr &&
        typeof o[0] != `number` &&
        ((this.mixKeyframes = vt(zr, cr(o[0], o[1]))), (o = [0, 100]));
      let c = s(_(_({}, e), {}, { keyframes: o }));
      (i === `mirror` &&
        (this.mirroredGenerator = s(
          _(_({}, e), {}, { keyframes: [...o].reverse(), velocity: -a }),
        )),
        c.calculatedDuration === null && (c.calculatedDuration = fr(c)));
      let { calculatedDuration: l } = c;
      ((this.calculatedDuration = l),
        (this.resolvedDuration = l + r),
        (this.totalDuration = this.resolvedDuration * (n + 1) - r),
        (this.generator = c));
    }
    updateTime(e) {
      let t = Math.round(e - this.startTime) * this.playbackSpeed;
      this.holdTime === null
        ? (this.currentTime = t)
        : (this.currentTime = this.holdTime);
    }
    tick(e, t = !1) {
      let {
        generator: n,
        totalDuration: r,
        mixKeyframes: i,
        mirroredGenerator: a,
        resolvedDuration: o,
        calculatedDuration: s,
      } = this;
      if (this.startTime === null) return n.next(0);
      let {
        delay: c = 0,
        keyframes: l,
        repeat: u,
        repeatType: d,
        repeatDelay: f,
        type: p,
        onUpdate: m,
        finalKeyframe: h,
      } = this.options;
      (this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - r / this.speed, this.startTime)),
        t ? (this.currentTime = e) : this.updateTime(e));
      let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
        _ = this.playbackSpeed >= 0 ? g < 0 : g > r;
      ((this.currentTime = Math.max(g, 0)),
        this.state === `finished` &&
          this.holdTime === null &&
          (this.currentTime = r));
      let v = this.currentTime,
        y = n;
      if (u) {
        let e = Math.min(this.currentTime, r) / o,
          t = Math.floor(e),
          n = e % 1;
        (!n && e >= 1 && (n = 1),
          n === 1 && t--,
          (t = Math.min(t, u + 1)),
          t % 2 &&
            (d === `reverse`
              ? ((n = 1 - n), f && (n -= f / o))
              : d === `mirror` && (y = a)),
          (v = lt(0, 1, n) * o));
      }
      let b;
      (_
        ? ((this.delayState.value = l[0]), (b = this.delayState))
        : (b = y.next(v)),
        i && !_ && (b.value = i(b.value)));
      let { done: x } = b;
      !_ &&
        s !== null &&
        (x =
          this.playbackSpeed >= 0
            ? this.currentTime >= r
            : this.currentTime <= 0);
      let S =
        this.holdTime === null &&
        (this.state === `finished` || (this.state === `running` && x));
      return (
        S && p !== Er && (b.value = Fr(l, this.options, h, this.speed)),
        m && m(b.value),
        S && this.finish(),
        b
      );
    }
    then(e, t) {
      return this.finished.then(e, t);
    }
    get duration() {
      return St(this.calculatedDuration);
    }
    get iterationDuration() {
      let { delay: e = 0 } = this.options || {};
      return this.duration + St(e);
    }
    get time() {
      return St(this.currentTime);
    }
    set time(e) {
      ((e = xt(e)),
        (this.currentTime = e),
        this.startTime === null ||
        this.holdTime !== null ||
        this.playbackSpeed === 0
          ? (this.holdTime = e)
          : this.driver &&
            (this.startTime = this.driver.now() - e / this.playbackSpeed),
        this.driver
          ? this.driver.start(!1)
          : ((this.startTime = 0),
            (this.state = `paused`),
            (this.holdTime = e),
            this.tick(e)));
    }
    getGeneratorVelocity() {
      let e = this.currentTime;
      if (e <= 0) return this.options.velocity || 0;
      if (this.generator.velocity) return this.generator.velocity(e);
      let t = this.generator.next(e).value;
      return Tr((e) => this.generator.next(e).value, e, t);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let t = this.playbackSpeed !== e;
      (t && this.driver && this.updateTime(A.now()),
        (this.playbackSpeed = e),
        t && this.driver && (this.time = St(this.currentTime)));
    }
    play() {
      var e, t;
      if (this.isStopped) return;
      let { driver: n = lr, startTime: r } = this.options;
      (this.driver || (this.driver = n((e) => this.tick(e))),
        (e = (t = this.options).onPlay) == null || e.call(t));
      let i = this.driver.now();
      (this.state === `finished`
        ? (this.updateFinished(), (this.startTime = i))
        : this.holdTime === null
          ? this.startTime || (this.startTime = r == null ? i : r)
          : (this.startTime = i - this.holdTime),
        this.state === `finished` &&
          this.speed < 0 &&
          (this.startTime += this.calculatedDuration),
        (this.holdTime = null),
        (this.state = `running`),
        this.driver.start());
    }
    pause() {
      ((this.state = `paused`),
        this.updateTime(A.now()),
        (this.holdTime = this.currentTime));
    }
    complete() {
      (this.state !== `running` && this.play(),
        (this.state = `finished`),
        (this.holdTime = null));
    }
    finish() {
      var e, t;
      (this.notifyFinished(),
        this.teardown(),
        (this.state = `finished`),
        (e = (t = this.options).onComplete) == null || e.call(t));
    }
    cancel() {
      var e, t;
      ((this.holdTime = null),
        (this.startTime = 0),
        this.tick(0),
        this.teardown(),
        (e = (t = this.options).onCancel) == null || e.call(t));
    }
    teardown() {
      ((this.state = `idle`),
        this.stopDriver(),
        (this.startTime = this.holdTime = null),
        tn.mainThread--);
    }
    stopDriver() {
      this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(e) {
      return ((this.startTime = 0), this.tick(e, !0));
    }
    attachTimeline(e) {
      var t;
      return (
        this.options.allowFlatten &&
          ((this.options.type = `keyframes`),
          (this.options.ease = `linear`),
          this.initAnimation()),
        (t = this.driver) == null || t.stop(),
        e.observe(this)
      );
    }
  };
function Vr(e) {
  for (let t = 1; t < e.length; t++) e[t] != null || (e[t] = e[t - 1]);
}
var Hr = (e) => (e * 180) / Math.PI,
  Ur = (e) => Gr(Hr(Math.atan2(e[1], e[0]))),
  Wr = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Ur,
    rotateZ: Ur,
    skewX: (e) => Hr(Math.atan(e[1])),
    skewY: (e) => Hr(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  Gr = (e) => ((e %= 360), e < 0 && (e += 360), e),
  Kr = Ur,
  qr = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  Jr = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  Yr = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: qr,
    scaleY: Jr,
    scale: (e) => (qr(e) + Jr(e)) / 2,
    rotateX: (e) => Gr(Hr(Math.atan2(e[6], e[5]))),
    rotateY: (e) => Gr(Hr(Math.atan2(-e[2], e[0]))),
    rotateZ: Kr,
    rotate: Kr,
    skewX: (e) => Hr(Math.atan(e[4])),
    skewY: (e) => Hr(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function Xr(e) {
  return +!!e.includes(`scale`);
}
function Zr(e, t) {
  if (!e || e === `none`) return Xr(t);
  let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),
    r,
    i;
  if (n) ((r = Yr), (i = n));
  else {
    let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = Wr), (i = t));
  }
  if (!i) return Xr(t);
  let a = r[t],
    o = i[1].split(`,`).map($r);
  return typeof a == `function` ? a(o) : o[a];
}
var Qr = (e, t) => {
  let { transform: n = `none` } = getComputedStyle(e);
  return Zr(n, t);
};
function $r(e) {
  return parseFloat(e.trim());
}
var ei = [
    `transformPerspective`,
    `x`,
    `y`,
    `z`,
    `translateX`,
    `translateY`,
    `translateZ`,
    `scale`,
    `scaleX`,
    `scaleY`,
    `rotate`,
    `rotateX`,
    `rotateY`,
    `rotateZ`,
    `skew`,
    `skewX`,
    `skewY`,
  ],
  ti = new Set(ei),
  ni = (e) => e === ln || e === j,
  ri = new Set([`x`, `y`, `z`]),
  ii = ei.filter((e) => !ri.has(e));
function ai(e) {
  let t = [];
  return (
    ii.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith(`scale`)));
    }),
    t
  );
}
var oi = {
  width: (
    { x: e },
    { paddingLeft: t = `0`, paddingRight: n = `0`, boxSizing: r },
  ) => {
    let i = e.max - e.min;
    return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n);
  },
  height: (
    { y: e },
    { paddingTop: t = `0`, paddingBottom: n = `0`, boxSizing: r },
  ) => {
    let i = e.max - e.min;
    return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n);
  },
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => Zr(t, `x`),
  y: (e, { transform: t }) => Zr(t, `y`),
};
((oi.translateX = oi.x), (oi.translateY = oi.y));
var si = new Set(),
  ci = !1,
  li = !1,
  ui = !1;
function di() {
  if (li) {
    let e = Array.from(si).filter((e) => e.needsMeasurement),
      t = new Set(e.map((e) => e.element)),
      n = new Map();
    (t.forEach((e) => {
      let t = ai(e);
      t.length && (n.set(e, t), e.render());
    }),
      e.forEach((e) => e.measureInitialState()),
      t.forEach((e) => {
        e.render();
        let t = n.get(e);
        t &&
          t.forEach(([t, n]) => {
            var r;
            (r = e.getValue(t)) == null || r.set(n);
          });
      }),
      e.forEach((e) => e.measureEndState()),
      e.forEach((e) => {
        e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
      }));
  }
  ((li = !1), (ci = !1), si.forEach((e) => e.complete(ui)), si.clear());
}
function fi() {
  si.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (li = !0));
  });
}
function pi() {
  ((ui = !0), fi(), di(), (ui = !1));
}
var mi = class {
    constructor(e, t, n, r, i, a = !1) {
      ((this.state = `pending`),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.unresolvedKeyframes = [...e]),
        (this.onComplete = t),
        (this.name = n),
        (this.motionValue = r),
        (this.element = i),
        (this.isAsync = a));
    }
    scheduleResolve() {
      ((this.state = `scheduled`),
        this.isAsync
          ? (si.add(this),
            ci || ((ci = !0), O.read(fi), O.resolveKeyframes(di)))
          : (this.readKeyframes(), this.complete()));
    }
    readKeyframes() {
      let {
        unresolvedKeyframes: e,
        name: t,
        element: n,
        motionValue: r,
      } = this;
      if (e[0] === null) {
        let i = r == null ? void 0 : r.get(),
          a = e[e.length - 1];
        if (i !== void 0) e[0] = i;
        else if (n && t) {
          let r = n.readValue(t, a);
          r != null && (e[0] = r);
        }
        (e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]));
      }
      Vr(e);
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(e = !1) {
      ((this.state = `complete`),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
        si.delete(this));
    }
    cancel() {
      this.state === `scheduled` && (si.delete(this), (this.state = `pending`));
    }
    resume() {
      this.state === `pending` && this.scheduleResolve();
    }
  },
  hi = (e) => e.startsWith(`--`);
function gi(e, t, n) {
  hi(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
var _i = {};
function vi(e, t) {
  let n = ht(e);
  return () => {
    var e;
    return (e = _i[t]) == null ? n() : e;
  };
}
var yi = vi(() => window.ScrollTimeline !== void 0, `scrollTimeline`),
  bi = vi(() => window.ViewTimeline !== void 0, `viewTimeline`),
  xi = vi(() => {
    try {
      document
        .createElement(`div`)
        .animate({ opacity: 0 }, { easing: `linear(0, 1)` });
    } catch (e) {
      return !1;
    }
    return !0;
  }, `linearEasing`),
  Si = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Ci = {
    linear: `linear`,
    ease: `ease`,
    easeIn: `ease-in`,
    easeOut: `ease-out`,
    easeInOut: `ease-in-out`,
    circIn: Si([0, 0.65, 0.55, 1]),
    circOut: Si([0.55, 0, 1, 0.45]),
    backIn: Si([0.31, 0.01, 0.66, -0.59]),
    backOut: Si([0.33, 1.53, 0.69, 0.99]),
  };
function wi(e, t) {
  if (e)
    return typeof e == `function`
      ? xi()
        ? ur(e, t)
        : `ease-out`
      : Ht(e)
        ? Si(e)
        : Array.isArray(e)
          ? e.map((e) => wi(e, t) || Ci.easeOut)
          : Ci[e];
}
function Ti(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: o = `loop`,
    ease: s = `easeOut`,
    times: c,
  } = {},
  l = void 0,
) {
  let u = { [t]: n };
  c && (u.offset = c);
  let d = wi(s, i);
  (Array.isArray(d) && (u.easing = d), qt.value && tn.waapi++);
  let f = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? `linear` : d,
    fill: `both`,
    iterations: a + 1,
    direction: o === `reverse` ? `alternate` : `normal`,
  };
  l && (f.pseudoElement = l);
  let p = e.animate(u, f);
  return (
    qt.value &&
      p.finished.finally(() => {
        tn.waapi--;
      }),
    p
  );
}
function Ei(e) {
  return typeof e == `function` && `applyToOptions` in e;
}
var Di = [`type`];
function Oi(e) {
  let { type: t } = e,
    n = x(e, Di);
  return Ei(t) && xi()
    ? t.applyToOptions(n)
    : (n.duration != null || (n.duration = 300),
      n.ease != null || (n.ease = `easeOut`),
      n);
}
var ki = class extends Rr {
    constructor(e) {
      if (
        (super(),
        (this.finishedTime = null),
        (this.isStopped = !1),
        (this.manualStartTime = null),
        !e)
      )
        return;
      let {
        element: t,
        name: n,
        keyframes: r,
        pseudoElement: i,
        allowFlatten: a = !1,
        finalKeyframe: o,
        onComplete: s,
      } = e;
      ((this.isPseudoElement = !!i),
        (this.allowFlatten = a),
        (this.options = e),
        e.type);
      let c = Oi(e);
      ((this.animation = Ti(t, n, r, c, i)),
        c.autoplay === !1 && this.animation.pause(),
        (this.animation.onfinish = () => {
          if (((this.finishedTime = this.time), !i)) {
            let e = Fr(r, this.options, o, this.speed);
            (this.updateMotionValue && this.updateMotionValue(e),
              gi(t, n, e),
              this.animation.cancel());
          }
          (s == null || s(), this.notifyFinished());
        }));
    }
    play() {
      this.isStopped ||
        ((this.manualStartTime = null),
        this.animation.play(),
        this.state === `finished` && this.updateFinished());
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      var e, t;
      (e = (t = this.animation).finish) == null || e.call(t);
    }
    cancel() {
      try {
        this.animation.cancel();
      } catch (e) {}
    }
    stop() {
      if (this.isStopped) return;
      this.isStopped = !0;
      let { state: e } = this;
      e === `idle` ||
        e === `finished` ||
        (this.updateMotionValue
          ? this.updateMotionValue()
          : this.commitStyles(),
        this.isPseudoElement || this.cancel());
    }
    commitStyles() {
      var e;
      let t = (e = this.options) == null ? void 0 : e.element;
      if (!this.isPseudoElement && t != null && t.isConnected) {
        var n, r;
        (n = (r = this.animation).commitStyles) == null || n.call(r);
      }
    }
    get duration() {
      var e, t;
      let n =
        ((e = this.animation.effect) == null ||
        (t = e.getComputedTiming) == null
          ? void 0
          : t.call(e).duration) || 0;
      return St(Number(n));
    }
    get iterationDuration() {
      let { delay: e = 0 } = this.options || {};
      return this.duration + St(e);
    }
    get time() {
      return St(Number(this.animation.currentTime) || 0);
    }
    set time(e) {
      let t = this.finishedTime !== null;
      ((this.manualStartTime = null),
        (this.finishedTime = null),
        (this.animation.currentTime = xt(e)),
        t && this.animation.pause());
    }
    get speed() {
      return this.animation.playbackRate;
    }
    set speed(e) {
      (e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e));
    }
    get state() {
      return this.finishedTime === null ? this.animation.playState : `finished`;
    }
    get startTime() {
      var e;
      return (e = this.manualStartTime) == null
        ? Number(this.animation.startTime)
        : e;
    }
    set startTime(e) {
      this.manualStartTime = this.animation.startTime = e;
    }
    attachTimeline({ timeline: e, rangeStart: t, rangeEnd: n, observe: r }) {
      if (this.allowFlatten) {
        var i;
        (i = this.animation.effect) == null ||
          i.updateTiming({ easing: `linear` });
      }
      return (
        (this.animation.onfinish = null),
        e && yi()
          ? ((this.animation.timeline = e),
            t && (this.animation.rangeStart = t),
            n && (this.animation.rangeEnd = n),
            gt)
          : r(this)
      );
    }
  },
  Ai = { anticipate: Pt, backInOut: Nt, circInOut: Lt };
function ji(e) {
  return e in Ai;
}
function Mi(e) {
  typeof e.ease == `string` && ji(e.ease) && (e.ease = Ai[e.ease]);
}
g();
var Ni = [`motionValue`, `onUpdate`, `onComplete`, `element`],
  Pi = 10,
  Fi = class extends ki {
    constructor(e) {
      (Mi(e),
        Lr(e),
        super(e),
        e.startTime !== void 0 &&
          e.autoplay !== !1 &&
          (this.startTime = e.startTime),
        (this.options = e));
    }
    updateMotionValue(e) {
      let t = this.options,
        { motionValue: n, onUpdate: r, onComplete: i, element: a } = t,
        o = x(t, Ni);
      if (!n) return;
      if (e !== void 0) {
        n.set(e);
        return;
      }
      let s = new Br(_(_({}, o), {}, { autoplay: !1 })),
        c = Math.max(Pi, A.now() - this.startTime),
        l = lt(0, Pi, c - Pi),
        u = s.sample(c).value,
        { name: d } = this.options;
      (a && d && gi(a, d, u),
        n.setWithVelocity(s.sample(Math.max(0, c - l)).value, u, l),
        s.stop());
    }
  },
  Ii = (e, t) =>
    t === `zIndex`
      ? !1
      : !!(
          typeof e == `number` ||
          Array.isArray(e) ||
          (typeof e == `string` &&
            (Gn.test(e) || e === `0`) &&
            !e.startsWith(`url(`))
        );
function Li(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Ri(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === `display` || t === `visibility`) return !0;
  let a = e[e.length - 1],
    o = Ii(i, t),
    s = Ii(a, t);
  return (
    `${t}${i}${a}${o ? a : i}`,
    !o || !s ? !1 : Li(e) || ((n === `spring` || Ei(n)) && r)
  );
}
function zi(e) {
  ((e.duration = 0), (e.type = `keyframes`));
}
var Bi = new Set([`opacity`, `clipPath`, `filter`, `transform`]),
  Vi = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Hi(e) {
  for (let t = 0; t < e.length; t++)
    if (typeof e[t] == `string` && Vi.test(e[t])) return !0;
  return !1;
}
var Ui = new Set([
    `color`,
    `backgroundColor`,
    `outlineColor`,
    `fill`,
    `stroke`,
    `borderColor`,
    `borderTopColor`,
    `borderRightColor`,
    `borderBottomColor`,
    `borderLeftColor`,
  ]),
  Wi = ht(() => Object.hasOwnProperty.call(Element.prototype, `animate`));
function Gi(e) {
  var t;
  let {
    motionValue: n,
    name: r,
    repeatDelay: i,
    repeatType: a,
    damping: o,
    type: s,
    keyframes: c,
  } = e;
  if (
    !(
      (n == null || (t = n.owner) == null ? void 0 : t.current) instanceof
      HTMLElement
    )
  )
    return !1;
  let { onUpdate: l, transformTemplate: u } = n.owner.getProps();
  return (
    Wi() &&
    r &&
    (Bi.has(r) || (Ui.has(r) && Hi(c))) &&
    (r !== `transform` || !u) &&
    !l &&
    !i &&
    a !== `mirror` &&
    o !== 0 &&
    s !== `inertia`
  );
}
g();
var Ki = [
    `autoplay`,
    `delay`,
    `type`,
    `repeat`,
    `repeatDelay`,
    `repeatType`,
    `keyframes`,
    `name`,
    `motionValue`,
    `element`,
  ],
  qi = 40,
  Ji = class extends Rr {
    constructor(e) {
      var t;
      let {
          autoplay: n = !0,
          delay: r = 0,
          type: i = `keyframes`,
          repeat: a = 0,
          repeatDelay: o = 0,
          repeatType: s = `loop`,
          keyframes: c,
          name: l,
          motionValue: u,
          element: d,
        } = e,
        f = x(e, Ki);
      (super(),
        (this.stop = () => {
          var e;
          if (this._animation) {
            var t;
            (this._animation.stop(),
              (t = this.stopTimeline) == null || t.call(this));
          }
          (e = this.keyframeResolver) == null || e.cancel();
        }),
        (this.createdAt = A.now()));
      let p = _(
          {
            autoplay: n,
            delay: r,
            type: i,
            repeat: a,
            repeatDelay: o,
            repeatType: s,
            name: l,
            motionValue: u,
            element: d,
          },
          f,
        ),
        m = (d == null ? void 0 : d.KeyframeResolver) || mi;
      ((this.keyframeResolver = new m(
        c,
        (e, t, n) => this.onKeyframesResolved(e, t, p, !n),
        l,
        u,
        d,
      )),
        (t = this.keyframeResolver) == null || t.scheduleResolve());
    }
    onKeyframesResolved(e, t, n, r) {
      var i;
      this.keyframeResolver = void 0;
      let {
        name: a,
        type: o,
        velocity: s,
        delay: c,
        isHandoff: l,
        onUpdate: u,
      } = n;
      this.resolvedAt = A.now();
      let d = !0;
      Ri(e, a, o, s) ||
        ((d = !1),
        (dt.instantAnimations || !c) && (u == null || u(Fr(e, n, t))),
        (e[0] = e[e.length - 1]),
        zi(n),
        (n.repeat = 0));
      let f = _(
          _(
            {
              startTime: r
                ? this.resolvedAt && this.resolvedAt - this.createdAt > qi
                  ? this.resolvedAt
                  : this.createdAt
                : void 0,
              finalKeyframe: t,
            },
            n,
          ),
          {},
          { keyframes: e },
        ),
        p = d && !l && Gi(f),
        m =
          (i = f.motionValue) == null || (i = i.owner) == null
            ? void 0
            : i.current,
        h;
      if (p)
        try {
          h = new Fi(_(_({}, f), {}, { element: m }));
        } catch (e) {
          h = new Br(f);
        }
      else h = new Br(f);
      (h.finished
        .then(() => {
          this.notifyFinished();
        })
        .catch(gt),
        this.pendingTimeline &&
          ((this.stopTimeline = h.attachTimeline(this.pendingTimeline)),
          (this.pendingTimeline = void 0)),
        (this._animation = h));
    }
    get finished() {
      return this._animation ? this.animation.finished : this._finished;
    }
    then(e, t) {
      return this.finished.finally(e).then(() => {});
    }
    get animation() {
      if (!this._animation) {
        var e;
        ((e = this.keyframeResolver) == null || e.resume(), pi());
      }
      return this._animation;
    }
    get duration() {
      return this.animation.duration;
    }
    get iterationDuration() {
      return this.animation.iterationDuration;
    }
    get time() {
      return this.animation.time;
    }
    set time(e) {
      this.animation.time = e;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(e) {
      this.animation.speed = e;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(e) {
      return (
        this._animation
          ? (this.stopTimeline = this.animation.attachTimeline(e))
          : (this.pendingTimeline = e),
        () => this.stop()
      );
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      var e;
      (this._animation && this.animation.cancel(),
        (e = this.keyframeResolver) == null || e.cancel());
    }
  };
function Yi(e, t, n, r = 0, i = 1) {
  let a = Array.from(e)
      .sort((e, t) => e.sortNodePosition(t))
      .indexOf(t),
    o = e.size,
    s = (o - 1) * r;
  return typeof n == `function` ? n(a, o) : i === 1 ? a * r : s - a * r;
}
var Xi = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Zi(e) {
  let t = Xi.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n == null ? r : n}`, i];
}
function Qi(e, t, n = 1) {
  `${e}`;
  let [r, i] = Zi(e);
  if (!r) return;
  let a = window.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    let e = a.trim();
    return ft(e) ? parseFloat(e) : e;
  }
  return on(i) ? Qi(i, t, n + 1) : i;
}
var $i = { type: `spring`, stiffness: 500, damping: 25, restSpeed: 10 },
  ea = (e) => ({
    type: `spring`,
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  ta = { type: `keyframes`, duration: 0.8 },
  na = { type: `keyframes`, ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  ra = (e, { keyframes: t }) =>
    t.length > 2
      ? ta
      : ti.has(e)
        ? e.startsWith(`scale`)
          ? ea(t[1])
          : $i
        : na;
g();
var ia = [`inherit`];
function aa(e, t) {
  if (e != null && e.inherit && t) {
    let { inherit: n } = e,
      r = x(e, ia);
    return _(_({}, t), r);
  }
  return e;
}
function oa(e, t) {
  var n, r;
  let i =
    (n =
      (r = e == null ? void 0 : e[t]) == null
        ? e == null
          ? void 0
          : e.default
        : r) == null
      ? e
      : n;
  return i === e ? i : aa(i, e);
}
var sa = new Set([
  `when`,
  `delay`,
  `delayChildren`,
  `staggerChildren`,
  `staggerDirection`,
  `repeat`,
  `repeatType`,
  `repeatDelay`,
  `from`,
  `elapsed`,
]);
function ca(e) {
  for (let t in e) if (!sa.has(t)) return !0;
  return !1;
}
g();
var la =
  (e, t, n, r = {}, i, a) =>
  (o) => {
    let s = oa(r, e) || {},
      c = s.delay || r.delay || 0,
      { elapsed: l = 0 } = r;
    l -= xt(c);
    let u = _(
      _(
        {
          keyframes: Array.isArray(n) ? n : [null, n],
          ease: `easeOut`,
          velocity: t.getVelocity(),
        },
        s,
      ),
      {},
      {
        delay: -l,
        onUpdate: (e) => {
          (t.set(e), s.onUpdate && s.onUpdate(e));
        },
        onComplete: () => {
          (o(), s.onComplete && s.onComplete());
        },
        name: e,
        motionValue: t,
        element: a ? void 0 : i,
      },
    );
    (ca(s) || Object.assign(u, ra(e, u)),
      u.duration && (u.duration = xt(u.duration)),
      u.repeatDelay && (u.repeatDelay = xt(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from));
    let d = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        (zi(u), u.delay === 0 && (d = !0)),
      (dt.instantAnimations ||
        dt.skipAnimations ||
        (i != null && i.shouldSkipAnimations)) &&
        ((d = !0), zi(u), (u.delay = 0)),
      (u.allowFlatten = !s.type && !s.ease),
      d && !a && t.get() !== void 0)
    ) {
      let e = Fr(u.keyframes, s);
      if (e !== void 0) {
        O.update(() => {
          (u.onUpdate(e), u.onComplete());
        });
        return;
      }
    }
    return s.isSync ? new Br(u) : new Ji(u);
  };
function ua(e) {
  let t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((e, n) => {
        ((t[0][n] = e.get()), (t[1][n] = e.getVelocity()));
      }),
    t
  );
}
function da(e, t, n, r) {
  if (typeof t == `function`) {
    let [i, a] = ua(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  if (
    (typeof t == `string` && (t = e.variants && e.variants[t]),
    typeof t == `function`)
  ) {
    let [i, a] = ua(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  return t;
}
function fa(e, t, n) {
  let r = e.getProps();
  return da(r, t, n === void 0 ? r.custom : n, e);
}
var pa = new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...ei]),
  ma = 30,
  ha = (e) => !isNaN(parseFloat(e)),
  ga = { current: void 0 },
  _a = class {
    constructor(e, t = {}) {
      ((this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (e) => {
          let t = A.now();
          if (
            (this.updatedAt !== t && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(e),
            this.current !== this.prev)
          ) {
            var n;
            if (
              ((n = this.events.change) == null || n.notify(this.current),
              this.dependents)
            )
              for (let e of this.dependents) e.dirty();
          }
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = t.owner));
    }
    setCurrent(e) {
      ((this.current = e),
        (this.updatedAt = A.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = ha(this.current)));
    }
    setPrevFrameValue(e = this.current) {
      ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
    }
    onChange(e) {
      return this.on(`change`, e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new bt());
      let n = this.events[e].add(t);
      return e === `change`
        ? () => {
            (n(),
              O.read(() => {
                this.events.change.getSize() || this.stop();
              }));
          }
        : n;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      ((this.passiveEffect = e), (this.stopPassiveEffect = t));
    }
    set(e) {
      this.passiveEffect
        ? this.passiveEffect(e, this.updateAndNotify)
        : this.updateAndNotify(e);
    }
    setWithVelocity(e, t, n) {
      (this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n));
    }
    jump(e, t = !0) {
      (this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
    dirty() {
      var e;
      (e = this.events.change) == null || e.notify(this.current);
    }
    addDependent(e) {
      (this.dependents || (this.dependents = new Set()),
        this.dependents.add(e));
    }
    removeDependent(e) {
      this.dependents && this.dependents.delete(e);
    }
    get() {
      return (ga.current && ga.current.push(this), this.current);
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = A.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        e - this.updatedAt > ma
      )
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, ma);
      return Ct(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          ((this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify());
        }).then(() => {
          (this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation());
        })
      );
    }
    stop() {
      (this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation());
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      var e, t;
      ((e = this.dependents) == null || e.clear(),
        (t = this.events.destroy) == null || t.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
  };
function va(e, t) {
  return new _a(e, t);
}
var ya = (e) => Array.isArray(e);
g();
var ba = [`transitionEnd`, `transition`];
function xa(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, va(n));
}
function Sa(e) {
  return ya(e) ? e[e.length - 1] || 0 : e;
}
function Ca(e, t) {
  let n = fa(e, t) || {},
    { transitionEnd: r = {}, transition: i = {} } = n,
    a = x(n, ba);
  a = _(_({}, a), r);
  for (let t in a) xa(e, t, Sa(a[t]));
}
var F = (e) => !!(e && e.getVelocity);
function wa(e) {
  return !!(F(e) && e.add);
}
function Ta(e, t) {
  let n = e.getValue(`willChange`);
  if (wa(n)) return n.add(t);
  if (!n && dt.WillChange) {
    let n = new dt.WillChange(`auto`);
    (e.addValue(`willChange`, n), n.add(t));
  }
}
function Ea(e) {
  return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var Da = `data-` + Ea(`framerAppearId`);
function Oa(e) {
  return e.props[Da];
}
g();
var ka = [`transition`, `transitionEnd`];
function Aa({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function ja(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a, transitionEnd: o } = t,
    s = x(t, ka),
    c = e.getDefaultTransition();
  a = a ? aa(a, c) : c;
  let l = a == null ? void 0 : a.reduceMotion;
  r && (a = r);
  let u = [],
    d = i && e.animationState && e.animationState.getState()[i];
  for (let t in s) {
    var f;
    let r = e.getValue(t, (f = e.latestValues[t]) == null ? null : f),
      i = s[t];
    if (i === void 0 || (d && Aa(d, t))) continue;
    let o = _({ delay: n }, oa(a || {}, t)),
      c = r.get();
    if (
      c !== void 0 &&
      !r.isAnimating() &&
      !Array.isArray(i) &&
      i === c &&
      !o.velocity
    ) {
      O.update(() => r.set(i));
      continue;
    }
    let p = !1;
    if (window.MotionHandoffAnimation) {
      let n = Oa(e);
      if (n) {
        let e = window.MotionHandoffAnimation(n, t, O);
        e !== null && ((o.startTime = e), (p = !0));
      }
    }
    Ta(e, t);
    let m = l == null ? e.shouldReduceMotion : l;
    r.start(la(t, r, i, m && pa.has(t) ? { type: !1 } : o, e, p));
    let h = r.animation;
    h && u.push(h);
  }
  if (o) {
    let t = () =>
      O.update(() => {
        o && Ca(e, o);
      });
    u.length ? Promise.all(u).then(t) : t();
  }
  return u;
}
g();
function Ma(e, t, n = {}) {
  var r;
  let i = fa(
      e,
      t,
      n.type === `exit`
        ? (r = e.presenceContext) == null
          ? void 0
          : r.custom
        : void 0,
    ),
    { transition: a = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (a = n.transitionOverride);
  let o = i ? () => Promise.all(ja(e, i, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (r = 0) => {
            let {
              delayChildren: i = 0,
              staggerChildren: o,
              staggerDirection: s,
            } = a;
            return Na(e, t, r, i, o, s, n);
          }
        : () => Promise.resolve(),
    { when: c } = a;
  if (c) {
    let [e, t] = c === `beforeChildren` ? [o, s] : [s, o];
    return e().then(() => t());
  } else return Promise.all([o(), s(n.delay)]);
}
function Na(e, t, n = 0, r = 0, i = 0, a = 1, o) {
  let s = [];
  for (let c of e.variantChildren)
    (c.notify(`AnimationStart`, t),
      s.push(
        Ma(
          c,
          t,
          _(
            _({}, o),
            {},
            {
              delay:
                n +
                (typeof r == `function` ? 0 : r) +
                Yi(e.variantChildren, c, r, i, a),
            },
          ),
        ).then(() => c.notify(`AnimationComplete`, t)),
      ));
  return Promise.all(s);
}
function Pa(e, t, n = {}) {
  e.notify(`AnimationStart`, t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((t) => Ma(e, t, n));
    r = Promise.all(i);
  } else if (typeof t == `string`) r = Ma(e, t, n);
  else {
    let i = typeof t == `function` ? fa(e, t, n.custom) : t;
    r = Promise.all(ja(e, i, n));
  }
  return r.then(() => {
    e.notify(`AnimationComplete`, t);
  });
}
var Fa = { test: (e) => e === `auto`, parse: (e) => e },
  Ia = (e) => (t) => t.test(e),
  La = [ln, j, Tn, wn, Dn, En, Fa],
  Ra = (e) => La.find(Ia(e));
function za(e) {
  return typeof e == `number`
    ? e === 0
    : e === null
      ? !0
      : e === `none` || e === `0` || mt(e);
}
g();
var Ba = new Set([`brightness`, `contrast`, `saturate`, `opacity`]);
function Va(e) {
  let [t, n] = e.slice(0, -1).split(`(`);
  if (t === `drop-shadow`) return e;
  let [r] = n.match(pn) || [];
  if (!r) return e;
  let i = n.replace(r, ``),
    a = +!!Ba.has(t);
  return (r !== n && (a *= 100), t + `(` + a + i + `)`);
}
var Ha = /\b([a-z-]*)\(.*?\)/gu,
  Ua = _(
    _({}, Gn),
    {},
    {
      getAnimatableNone: (e) => {
        let t = e.match(Ha);
        return t ? t.map(Va).join(` `) : e;
      },
    },
  );
g();
var Wa = _(
  _({}, Gn),
  {},
  {
    getAnimatableNone: (e) => {
      let t = Gn.parse(e);
      return Gn.createTransformer(e)(
        t.map((e) =>
          typeof e == `number`
            ? 0
            : typeof e == `object`
              ? _(_({}, e), {}, { alpha: 1 })
              : e,
        ),
      );
    },
  },
);
g();
var Ga = _(_({}, ln), {}, { transform: Math.round }),
  Ka = {
    rotate: wn,
    rotateX: wn,
    rotateY: wn,
    rotateZ: wn,
    scale: dn,
    scaleX: dn,
    scaleY: dn,
    scaleZ: dn,
    skew: wn,
    skewX: wn,
    skewY: wn,
    distance: j,
    translateX: j,
    translateY: j,
    translateZ: j,
    x: j,
    y: j,
    z: j,
    perspective: j,
    transformPerspective: j,
    opacity: un,
    originX: On,
    originY: On,
    originZ: j,
  };
g();
var qa = _(
  _(
    {
      borderWidth: j,
      borderTopWidth: j,
      borderRightWidth: j,
      borderBottomWidth: j,
      borderLeftWidth: j,
      borderRadius: j,
      borderTopLeftRadius: j,
      borderTopRightRadius: j,
      borderBottomRightRadius: j,
      borderBottomLeftRadius: j,
      width: j,
      maxWidth: j,
      height: j,
      maxHeight: j,
      top: j,
      right: j,
      bottom: j,
      left: j,
      inset: j,
      insetBlock: j,
      insetBlockStart: j,
      insetBlockEnd: j,
      insetInline: j,
      insetInlineStart: j,
      insetInlineEnd: j,
      padding: j,
      paddingTop: j,
      paddingRight: j,
      paddingBottom: j,
      paddingLeft: j,
      paddingBlock: j,
      paddingBlockStart: j,
      paddingBlockEnd: j,
      paddingInline: j,
      paddingInlineStart: j,
      paddingInlineEnd: j,
      margin: j,
      marginTop: j,
      marginRight: j,
      marginBottom: j,
      marginLeft: j,
      marginBlock: j,
      marginBlockStart: j,
      marginBlockEnd: j,
      marginInline: j,
      marginInlineStart: j,
      marginInlineEnd: j,
      fontSize: j,
      backgroundPositionX: j,
      backgroundPositionY: j,
    },
    Ka,
  ),
  {},
  { zIndex: Ga, fillOpacity: un, strokeOpacity: un, numOctaves: Ga },
);
g();
var Ja = _(
    _({}, qa),
    {},
    {
      color: M,
      backgroundColor: M,
      outlineColor: M,
      fill: M,
      stroke: M,
      borderColor: M,
      borderTopColor: M,
      borderRightColor: M,
      borderBottomColor: M,
      borderLeftColor: M,
      filter: Ua,
      WebkitFilter: Ua,
      mask: Wa,
      WebkitMask: Wa,
    },
  ),
  Ya = (e) => Ja[e],
  Xa = new Set([Ua, Wa]);
function Za(e, t) {
  let n = Ya(e);
  return (
    Xa.has(n) || (n = Gn),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
var Qa = new Set([`auto`, `none`, `0`]);
function $a(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i;) {
    let t = e[r];
    (typeof t == `string` && !Qa.has(t) && Rn(t).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (let r of t) e[r] = Za(n, i);
}
var eo = class extends mi {
  constructor(e, t, n, r, i) {
    super(e, t, n, r, i, !0);
  }
  readKeyframes() {
    let { unresolvedKeyframes: e, element: t, name: n } = this;
    if (!t || !t.current) return;
    super.readKeyframes();
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (typeof r == `string` && ((r = r.trim()), on(r))) {
        let i = Qi(r, t.current);
        (i !== void 0 && (e[n] = i),
          n === e.length - 1 && (this.finalKeyframe = r));
      }
    }
    if ((this.resolveNoneKeyframes(), !pa.has(n) || e.length !== 2)) return;
    let [r, i] = e,
      a = Ra(r),
      o = Ra(i);
    if (cn(r) !== cn(i) && oi[n]) {
      this.needsMeasurement = !0;
      return;
    }
    if (a !== o)
      if (ni(a) && ni(o))
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          typeof n == `string` && (e[t] = parseFloat(n));
        }
      else oi[n] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    let { unresolvedKeyframes: e, name: t } = this,
      n = [];
    for (let t = 0; t < e.length; t++) (e[t] === null || za(e[t])) && n.push(t);
    n.length && $a(e, n, t);
  }
  measureInitialState() {
    let { element: e, unresolvedKeyframes: t, name: n } = this;
    if (!e || !e.current) return;
    (n === `height` && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = oi[n](
        e.measureViewportBox(),
        window.getComputedStyle(e.current),
      )),
      (t[0] = this.measuredOrigin));
    let r = t[t.length - 1];
    r !== void 0 && e.getValue(n, r).jump(r, !1);
  }
  measureEndState() {
    var e;
    let { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    let i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    let a = r.length - 1,
      o = r[a];
    ((r[a] = oi[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
      (e = this.removedTransforms) != null &&
        e.length &&
        this.removedTransforms.forEach(([e, n]) => {
          t.getValue(e).set(n);
        }),
      this.resolveNoneKeyframes());
  }
};
function to(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == `string`) {
    var r;
    let i = document;
    t && (i = t.current);
    let a = (r = n == null ? void 0 : n[e]) == null ? i.querySelectorAll(e) : r;
    return a ? Array.from(a) : [];
  }
  return Array.from(e).filter((e) => e != null);
}
var no = (e, t) => (t && typeof e == `number` ? t.transform(e) : e);
function ro(e) {
  return pt(e) && `offsetHeight` in e && !(`ownerSVGElement` in e);
}
var { schedule: io, cancel: ao } = Xt(queueMicrotask, !1),
  oo = { x: !1, y: !1 };
function so() {
  return oo.x || oo.y;
}
function co(e) {
  return e === `x` || e === `y`
    ? oo[e]
      ? null
      : ((oo[e] = !0),
        () => {
          oo[e] = !1;
        })
    : oo.x || oo.y
      ? null
      : ((oo.x = oo.y = !0),
        () => {
          oo.x = oo.y = !1;
        });
}
g();
function lo(e, t) {
  let n = to(e),
    r = new AbortController();
  return [
    n,
    _(_({ passive: !0 }, t), {}, { signal: r.signal }),
    () => r.abort(),
  ];
}
function uo(e) {
  return !(e.pointerType === `touch` || so());
}
function fo(e, t, n = {}) {
  let [r, i, a] = lo(e, n);
  return (
    r.forEach((e) => {
      let n = !1,
        r = !1,
        a,
        o = () => {
          e.removeEventListener(`pointerleave`, u);
        },
        s = (e) => {
          (a && (a(e), (a = void 0)), o());
        },
        c = (e) => {
          ((n = !1),
            window.removeEventListener(`pointerup`, c),
            window.removeEventListener(`pointercancel`, c),
            r && ((r = !1), s(e)));
        },
        l = () => {
          ((n = !0),
            window.addEventListener(`pointerup`, c, i),
            window.addEventListener(`pointercancel`, c, i));
        },
        u = (e) => {
          if (e.pointerType !== `touch`) {
            if (n) {
              r = !0;
              return;
            }
            s(e);
          }
        };
      (e.addEventListener(
        `pointerenter`,
        (n) => {
          if (!uo(n)) return;
          r = !1;
          let o = t(e, n);
          typeof o == `function` &&
            ((a = o), e.addEventListener(`pointerleave`, u, i));
        },
        i,
      ),
        e.addEventListener(`pointerdown`, l, i));
    }),
    a
  );
}
var po = (e, t) => (t ? (e === t ? !0 : po(e, t.parentElement)) : !1),
  mo = (e) =>
    e.pointerType === `mouse`
      ? typeof e.button != `number` || e.button <= 0
      : e.isPrimary !== !1,
  ho = new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`]);
function go(e) {
  return ho.has(e.tagName) || e.isContentEditable === !0;
}
var _o = new Set([`INPUT`, `SELECT`, `TEXTAREA`]);
function vo(e) {
  return _o.has(e.tagName) || e.isContentEditable === !0;
}
var yo = new WeakSet();
function bo(e) {
  return (t) => {
    t.key === `Enter` && e(t);
  };
}
function xo(e, t) {
  e.dispatchEvent(
    new PointerEvent(`pointer` + t, { isPrimary: !0, bubbles: !0 }),
  );
}
var So = (e, t) => {
  let n = e.currentTarget;
  if (!n) return;
  let r = bo(() => {
    if (yo.has(n)) return;
    xo(n, `down`);
    let e = bo(() => {
      xo(n, `up`);
    });
    (n.addEventListener(`keyup`, e, t),
      n.addEventListener(`blur`, () => xo(n, `cancel`), t));
  });
  (n.addEventListener(`keydown`, r, t),
    n.addEventListener(`blur`, () => n.removeEventListener(`keydown`, r), t));
};
function Co(e) {
  return mo(e) && !so();
}
var wo = new WeakSet();
function To(e, t, n = {}) {
  let [r, i, a] = lo(e, n),
    o = (e) => {
      let r = e.currentTarget;
      if (!Co(e) || wo.has(e)) return;
      (yo.add(r), n.stopPropagation && wo.add(e));
      let a = t(r, e),
        o = (e, t) => {
          (window.removeEventListener(`pointerup`, s),
            window.removeEventListener(`pointercancel`, c),
            yo.has(r) && yo.delete(r),
            Co(e) && typeof a == `function` && a(e, { success: t }));
        },
        s = (e) => {
          o(
            e,
            r === window ||
              r === document ||
              n.useGlobalTarget ||
              po(r, e.target),
          );
        },
        c = (e) => {
          o(e, !1);
        };
      (window.addEventListener(`pointerup`, s, i),
        window.addEventListener(`pointercancel`, c, i));
    };
  return (
    r.forEach((e) => {
      ((n.useGlobalTarget ? window : e).addEventListener(`pointerdown`, o, i),
        ro(e) &&
          (e.addEventListener(`focus`, (e) => So(e, i)),
          !go(e) && !e.hasAttribute(`tabindex`) && (e.tabIndex = 0)));
    }),
    a
  );
}
function Eo(e) {
  return pt(e) && `ownerSVGElement` in e;
}
var Do = new WeakMap(),
  Oo,
  ko = (e, t, n) => (r, i) =>
    i && i[0]
      ? i[0][e + `Size`]
      : Eo(r) && `getBBox` in r
        ? r.getBBox()[t]
        : r[n],
  Ao = ko(`inline`, `width`, `offsetWidth`),
  jo = ko(`block`, `height`, `offsetHeight`);
function Mo({ target: e, borderBoxSize: t }) {
  var n;
  (n = Do.get(e)) == null ||
    n.forEach((n) => {
      n(e, {
        get width() {
          return Ao(e, t);
        },
        get height() {
          return jo(e, t);
        },
      });
    });
}
function No(e) {
  e.forEach(Mo);
}
function Po() {
  typeof ResizeObserver > `u` || (Oo = new ResizeObserver(No));
}
function Fo(e, t) {
  Oo || Po();
  let n = to(e);
  return (
    n.forEach((e) => {
      let n = Do.get(e);
      (n || ((n = new Set()), Do.set(e, n)),
        n.add(t),
        Oo == null || Oo.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = Do.get(e);
        (n == null || n.delete(t),
          (n != null && n.size) || Oo == null || Oo.unobserve(e));
      });
    }
  );
}
var Io = new Set(),
  Lo;
function Ro() {
  ((Lo = () => {
    let e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    Io.forEach((t) => t(e));
  }),
    window.addEventListener(`resize`, Lo));
}
function zo(e) {
  return (
    Io.add(e),
    Lo || Ro(),
    () => {
      (Io.delete(e),
        !Io.size &&
          typeof Lo == `function` &&
          (window.removeEventListener(`resize`, Lo), (Lo = void 0)));
    }
  );
}
function Bo(e, t) {
  return typeof e == `function` ? zo(e) : Fo(e, t);
}
function Vo(e) {
  return Eo(e) && e.tagName === `svg`;
}
var Ho = [...La, M, Gn],
  Uo = (e) => Ho.find(Ia(e)),
  Wo = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Go = () => ({ x: Wo(), y: Wo() }),
  Ko = () => ({ min: 0, max: 0 }),
  I = () => ({ x: Ko(), y: Ko() }),
  qo = new WeakMap();
function Jo(e) {
  return typeof e == `object` && !!e && typeof e.start == `function`;
}
function Yo(e) {
  return typeof e == `string` || Array.isArray(e);
}
var Xo = [
    `animate`,
    `whileInView`,
    `whileFocus`,
    `whileHover`,
    `whileTap`,
    `whileDrag`,
    `exit`,
  ],
  Zo = [`initial`, ...Xo];
function Qo(e) {
  return Jo(e.animate) || Zo.some((t) => Yo(e[t]));
}
function $o(e) {
  return !!(Qo(e) || e.variants);
}
function es(e, t, n) {
  for (let r in t) {
    let i = t[r],
      a = n[r];
    if (F(i)) e.addValue(r, i);
    else if (F(a)) e.addValue(r, va(i, { owner: e }));
    else if (a !== i)
      if (e.hasValue(r)) {
        let t = e.getValue(r);
        t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
      } else {
        let t = e.getStaticValue(r);
        e.addValue(r, va(t === void 0 ? i : t, { owner: e }));
      }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
var ts = { current: null },
  ns = { current: !1 },
  rs = typeof window < `u`;
function is() {
  if (((ns.current = !0), rs))
    if (window.matchMedia) {
      let e = window.matchMedia(`(prefers-reduced-motion)`),
        t = () => (ts.current = e.matches);
      (e.addEventListener(`change`, t), t());
    } else ts.current = !1;
}
g();
var as = [`willChange`],
  os = [
    `AnimationStart`,
    `AnimationComplete`,
    `Update`,
    `BeforeLayoutMeasure`,
    `LayoutMeasure`,
    `LayoutAnimationStart`,
    `LayoutAnimationComplete`,
  ],
  ss = {};
function cs(e) {
  ss = e;
}
function ls() {
  return ss;
}
var us = class {
    scrapeMotionValuesFromProps(e, t, n) {
      return {};
    }
    constructor(
      {
        parent: e,
        props: t,
        presenceContext: n,
        reducedMotionConfig: r,
        skipAnimations: i,
        blockInitialAnimation: a,
        visualState: o,
      },
      s = {},
    ) {
      ((this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.shouldSkipAnimations = !1),
        (this.values = new Map()),
        (this.KeyframeResolver = mi),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.hasBeenMounted = !1),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify(`Update`, this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection,
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          let e = A.now();
          this.renderScheduledAt < e &&
            ((this.renderScheduledAt = e), O.render(this.render, !1, !0));
        }));
      let { latestValues: c, renderState: l } = o;
      ((this.latestValues = c),
        (this.baseTarget = _({}, c)),
        (this.initialValues = t.initial ? _({}, c) : {}),
        (this.renderState = l),
        (this.parent = e),
        (this.props = t),
        (this.presenceContext = n),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.skipAnimationsConfig = i),
        (this.options = s),
        (this.blockInitialAnimation = !!a),
        (this.isControllingVariants = Qo(t)),
        (this.isVariantNode = $o(t)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current)));
      let u = this.scrapeMotionValuesFromProps(t, {}, this),
        { willChange: d } = u,
        f = x(u, as);
      for (let e in f) {
        let t = f[e];
        c[e] !== void 0 && F(t) && t.set(c[e]);
      }
    }
    mount(e) {
      var t, n;
      if (this.hasBeenMounted)
        for (let e in this.initialValues) {
          var r;
          ((r = this.values.get(e)) == null || r.jump(this.initialValues[e]),
            (this.latestValues[e] = this.initialValues[e]));
        }
      ((this.current = e),
        qo.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
        this.reducedMotionConfig === `never`
          ? (this.shouldReduceMotion = !1)
          : this.reducedMotionConfig === `always`
            ? (this.shouldReduceMotion = !0)
            : (ns.current || is(), (this.shouldReduceMotion = ts.current)),
        (this.shouldSkipAnimations =
          (t = this.skipAnimationsConfig) == null ? !1 : t),
        (n = this.parent) == null || n.addChild(this),
        this.update(this.props, this.presenceContext),
        (this.hasBeenMounted = !0));
    }
    unmount() {
      var e;
      (this.projection && this.projection.unmount(),
        Zt(this.notifyUpdate),
        Zt(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        (e = this.parent) == null || e.removeChild(this));
      for (let e in this.events) this.events[e].clear();
      for (let e in this.features) {
        let t = this.features[e];
        t && (t.unmount(), (t.isMounted = !1));
      }
      this.current = null;
    }
    addChild(e) {
      (this.children.add(e),
        this.enteringChildren != null || (this.enteringChildren = new Set()),
        this.enteringChildren.add(e));
    }
    removeChild(e) {
      (this.children.delete(e),
        this.enteringChildren && this.enteringChildren.delete(e));
    }
    bindToMotionValue(e, t) {
      if (
        (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
        t.accelerate && Bi.has(e) && this.current instanceof HTMLElement)
      ) {
        let {
            factory: n,
            keyframes: r,
            times: i,
            ease: a,
            duration: o,
          } = t.accelerate,
          s = new ki({
            element: this.current,
            name: e,
            keyframes: r,
            times: i,
            ease: a,
            duration: xt(o),
          }),
          c = n(s);
        this.valueSubscriptions.set(e, () => {
          (c(), s.cancel());
        });
        return;
      }
      let n = ti.has(e);
      n && this.onBindTransform && this.onBindTransform();
      let r = t.on(`change`, (t) => {
          ((this.latestValues[e] = t),
            this.props.onUpdate && O.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender());
        }),
        i;
      (typeof window < `u` &&
        window.MotionCheckAppearSync &&
        (i = window.MotionCheckAppearSync(this, e, t)),
        this.valueSubscriptions.set(e, () => {
          (r(), i && i(), t.owner && t.stop());
        }));
    }
    sortNodePosition(e) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current);
    }
    updateFeatures() {
      let e = `animation`;
      for (e in ss) {
        let t = ss[e];
        if (!t) continue;
        let { isEnabled: n, Feature: r } = t;
        if (
          (!this.features[e] &&
            r &&
            n(this.props) &&
            (this.features[e] = new r(this)),
          this.features[e])
        ) {
          let t = this.features[e];
          t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : I();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    update(e, t) {
      ((e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t));
      for (let t = 0; t < os.length; t++) {
        let n = os[t];
        this.propEventSubscriptions[n] &&
          (this.propEventSubscriptions[n](),
          delete this.propEventSubscriptions[n]);
        let r = e[`on` + n];
        r && (this.propEventSubscriptions[n] = this.on(n, r));
      }
      ((this.prevMotionValues = es(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
        this.prevMotionValues,
      )),
        this.handleChildMotionValue && this.handleChildMotionValue());
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
          ? this.parent.getClosestVariantNode()
          : void 0;
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode();
      if (t)
        return (
          t.variantChildren && t.variantChildren.add(e),
          () => t.variantChildren.delete(e)
        );
    }
    addValue(e, t) {
      let n = this.values.get(e);
      t !== n &&
        (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        (this.latestValues[e] = t.get()));
    }
    removeValue(e) {
      this.values.delete(e);
      let t = this.valueSubscriptions.get(e);
      (t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState));
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let n = this.values.get(e);
      return (
        n === void 0 &&
          t !== void 0 &&
          ((n = va(t === null ? void 0 : t, { owner: this })),
          this.addValue(e, n)),
        n
      );
    }
    readValue(e, t) {
      var n;
      let r =
        this.latestValues[e] !== void 0 || !this.current
          ? this.latestValues[e]
          : (n = this.getBaseTargetFromProps(this.props, e)) == null
            ? this.readValueFromInstance(this.current, e, this.options)
            : n;
      return (
        r != null &&
          (typeof r == `string` && (ft(r) || mt(r))
            ? (r = parseFloat(r))
            : !Uo(r) && Gn.test(t) && (r = Za(e, t)),
          this.setBaseTarget(e, F(r) ? r.get() : r)),
        F(r) ? r.get() : r
      );
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      let { initial: t } = this.props,
        n;
      if (typeof t == `string` || typeof t == `object`) {
        var r;
        let i = da(
          this.props,
          t,
          (r = this.presenceContext) == null ? void 0 : r.custom,
        );
        i && (n = i[e]);
      }
      if (t && n !== void 0) return n;
      let i = this.getBaseTargetFromProps(this.props, e);
      return i !== void 0 && !F(i)
        ? i
        : this.initialValues[e] !== void 0 && n === void 0
          ? void 0
          : this.baseTarget[e];
    }
    on(e, t) {
      return (
        this.events[e] || (this.events[e] = new bt()),
        this.events[e].add(t)
      );
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
    }
    scheduleRenderMicrotask() {
      io.render(this.render);
    }
  },
  ds = class extends us {
    constructor() {
      (super(...arguments), (this.KeyframeResolver = eo));
    }
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      let n = e.style;
      return n ? n[t] : void 0;
    }
    removeValueFromRenderState(e, { vars: t, style: n }) {
      (delete t[e], delete n[e]);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      let { children: e } = this.props;
      F(e) &&
        (this.childSubscription = e.on(`change`, (e) => {
          this.current && (this.current.textContent = `${e}`);
        }));
    }
  },
  fs = class {
    constructor(e) {
      ((this.isMounted = !1), (this.node = e));
    }
    update() {}
  };
function ps({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function ms({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function hs(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function gs(e) {
  return e === void 0 || e === 1;
}
function _s({ scale: e, scaleX: t, scaleY: n }) {
  return !gs(e) || !gs(t) || !gs(n);
}
function vs(e) {
  return (
    _s(e) ||
    ys(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function ys(e) {
  return bs(e.x) || bs(e.y);
}
function bs(e) {
  return e && e !== `0%`;
}
function xs(e, t, n) {
  return n + t * (e - n);
}
function Ss(e, t, n, r, i) {
  return (i !== void 0 && (e = xs(e, i, r)), xs(e, n, r) + t);
}
function Cs(e, t = 0, n = 1, r, i) {
  ((e.min = Ss(e.min, t, n, r, i)), (e.max = Ss(e.max, t, n, r, i)));
}
function ws(e, { x: t, y: n }) {
  (Cs(e.x, t.translate, t.scale, t.originPoint),
    Cs(e.y, n.translate, n.scale, n.originPoint));
}
var Ts = 0.999999999999,
  Es = 1.0000000000001;
function Ds(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let a, o;
  for (let c = 0; c < i; c++) {
    ((a = n[c]), (o = a.projectionDelta));
    let { visualElement: i } = a.options;
    if (
      !(i && i.props.style && i.props.style.display === `contents`) &&
      (r &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        (Os(e.x, -a.scroll.offset.x), Os(e.y, -a.scroll.offset.y)),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), ws(e, o)),
      r && vs(a.latestValues))
    ) {
      var s;
      js(e, a.latestValues, (s = a.layout) == null ? void 0 : s.layoutBox);
    }
  }
  (t.x < Es && t.x > Ts && (t.x = 1), t.y < Es && t.y > Ts && (t.y = 1));
}
function Os(e, t) {
  ((e.min += t), (e.max += t));
}
function ks(e, t, n, r, i = 0.5) {
  Cs(e, t, n, N(e.min, e.max, i), r);
}
function As(e, t) {
  return typeof e == `string` ? (parseFloat(e) / 100) * (t.max - t.min) : e;
}
function js(e, t, n) {
  let r = n == null ? e : n;
  (ks(e.x, As(t.x, r.x), t.scaleX, t.scale, t.originX),
    ks(e.y, As(t.y, r.y), t.scaleY, t.scale, t.originY));
}
function Ms(e, t) {
  return ps(hs(e.getBoundingClientRect(), t));
}
function Ns(e, t, n) {
  let r = Ms(e, n),
    { scroll: i } = t;
  return (i && (Os(r.x, i.offset.x), Os(r.y, i.offset.y)), r);
}
var Ps = {
    x: `translateX`,
    y: `translateY`,
    z: `translateZ`,
    transformPerspective: `perspective`,
  },
  Fs = ei.length;
function Is(e, t, n) {
  let r = ``,
    i = !0;
  for (let a = 0; a < Fs; a++) {
    let o = ei[a],
      s = e[o];
    if (s === void 0) continue;
    let c = !0;
    if (typeof s == `number`) c = s === +!!o.startsWith(`scale`);
    else {
      let e = parseFloat(s);
      c = o.startsWith(`scale`) ? e === 1 : e === 0;
    }
    if (!c || n) {
      let e = no(s, qa[o]);
      if (!c) {
        i = !1;
        let t = Ps[o] || o;
        r += `${t}(${e}) `;
      }
      n && (t[o] = e);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, i ? `` : r)) : i && (r = `none`), r);
}
function Ls(e, t, n) {
  let { style: r, vars: i, transformOrigin: a } = e,
    o = !1,
    s = !1;
  for (let e in t) {
    let n = t[e];
    if (ti.has(e)) {
      o = !0;
      continue;
    } else if (rn(e)) {
      i[e] = n;
      continue;
    } else {
      let t = no(n, qa[e]);
      e.startsWith(`origin`) ? ((s = !0), (a[e] = t)) : (r[e] = t);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = Is(t, e.transform, n))
        : r.transform && (r.transform = `none`)),
    s)
  ) {
    let { originX: e = `50%`, originY: t = `50%`, originZ: n = 0 } = a;
    r.transformOrigin = `${e} ${t} ${n}`;
  }
}
function Rs(e, { style: t, vars: n }, r, i) {
  let a = e.style,
    o;
  for (o in t) a[o] = t[o];
  for (o in (i == null || i.applyProjectionStyles(a, r), n))
    a.setProperty(o, n[o]);
}
function zs(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var Bs = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == `string`)
        if (j.test(e)) e = parseFloat(e);
        else return e;
      return `${zs(e, t.target.x)}% ${zs(e, t.target.y)}%`;
    },
  },
  Vs = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = Gn.parse(e);
      if (i.length > 5) return r;
      let a = Gn.createTransformer(e),
        o = typeof i[0] == `number` ? 0 : 1,
        s = n.x.scale * t.x,
        c = n.y.scale * t.y;
      ((i[0 + o] /= s), (i[1 + o] /= c));
      let l = N(s, c, 0.5);
      return (
        typeof i[2 + o] == `number` && (i[2 + o] /= l),
        typeof i[3 + o] == `number` && (i[3 + o] /= l),
        a(i)
      );
    },
  };
g();
var Hs = {
  borderRadius: _(
    _({}, Bs),
    {},
    {
      applyTo: [
        `borderTopLeftRadius`,
        `borderTopRightRadius`,
        `borderBottomLeftRadius`,
        `borderBottomRightRadius`,
      ],
    },
  ),
  borderTopLeftRadius: Bs,
  borderTopRightRadius: Bs,
  borderBottomLeftRadius: Bs,
  borderBottomRightRadius: Bs,
  boxShadow: Vs,
};
function Us(e, { layout: t, layoutId: n }) {
  return (
    ti.has(e) ||
    e.startsWith(`origin`) ||
    ((t || n !== void 0) && (!!Hs[e] || e === `opacity`))
  );
}
function Ws(e, t, n) {
  let r = e.style,
    i = t == null ? void 0 : t.style,
    a = {};
  if (!r) return a;
  for (let t in r) {
    var o;
    (F(r[t]) ||
      (i && F(i[t])) ||
      Us(t, e) ||
      (n == null || (o = n.getValue(t)) == null ? void 0 : o.liveStyle) !==
        void 0) &&
      (a[t] = r[t]);
  }
  return a;
}
function Gs(e) {
  return window.getComputedStyle(e);
}
var Ks = class extends ds {
    constructor() {
      (super(...arguments), (this.type = `html`), (this.renderInstance = Rs));
    }
    readValueFromInstance(e, t) {
      if (ti.has(t)) {
        var n;
        return (n = this.projection) != null && n.isProjecting
          ? Xr(t)
          : Qr(e, t);
      } else {
        let n = Gs(e),
          r = (rn(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == `string` ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return Ms(e, t);
    }
    build(e, t, n) {
      Ls(e, t, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return Ws(e, t, n);
    }
  },
  qs = { offset: `stroke-dashoffset`, array: `stroke-dasharray` },
  Js = { offset: `strokeDashoffset`, array: `strokeDasharray` };
function Ys(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let a = i ? qs : Js;
  ((e[a.offset] = `${-r}`), (e[a.array] = `${t} ${n}`));
}
var Xs = [
    `attrX`,
    `attrY`,
    `attrScale`,
    `pathLength`,
    `pathSpacing`,
    `pathOffset`,
  ],
  Zs = [`offsetDistance`, `offsetPath`, `offsetRotate`, `offsetAnchor`];
function Qs(e, t, n, r, i) {
  let {
    attrX: a,
    attrY: o,
    attrScale: s,
    pathLength: c,
    pathSpacing: l = 1,
    pathOffset: u = 0,
  } = t;
  if ((Ls(e, x(t, Xs), r), n)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  let { attrs: d, style: f } = e;
  if (
    (d.transform && ((f.transform = d.transform), delete d.transform),
    f.transform || d.transformOrigin)
  ) {
    var p;
    ((f.transformOrigin = (p = d.transformOrigin) == null ? `50% 50%` : p),
      delete d.transformOrigin);
  }
  if (f.transform) {
    var m;
    ((f.transformBox =
      (m = i == null ? void 0 : i.transformBox) == null ? `fill-box` : m),
      delete d.transformBox);
  }
  for (let e of Zs) d[e] !== void 0 && ((f[e] = d[e]), delete d[e]);
  (a !== void 0 && (d.x = a),
    o !== void 0 && (d.y = o),
    s !== void 0 && (d.scale = s),
    c !== void 0 && Ys(d, c, l, u, !1));
}
var $s = new Set([
    `baseFrequency`,
    `diffuseConstant`,
    `kernelMatrix`,
    `kernelUnitLength`,
    `keySplines`,
    `keyTimes`,
    `limitingConeAngle`,
    `markerHeight`,
    `markerWidth`,
    `numOctaves`,
    `targetX`,
    `targetY`,
    `surfaceScale`,
    `specularConstant`,
    `specularExponent`,
    `stdDeviation`,
    `tableValues`,
    `viewBox`,
    `gradientTransform`,
    `pathLength`,
    `startOffset`,
    `textLength`,
    `lengthAdjust`,
  ]),
  ec = (e) => typeof e == `string` && e.toLowerCase() === `svg`;
function tc(e, t, n, r) {
  Rs(e, t, void 0, r);
  for (let n in t.attrs) e.setAttribute($s.has(n) ? n : Ea(n), t.attrs[n]);
}
function nc(e, t, n) {
  let r = Ws(e, t, n);
  for (let n in e)
    if (F(e[n]) || F(t[n])) {
      let t =
        ei.indexOf(n) === -1
          ? n
          : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
      r[t] = e[n];
    }
  return r;
}
var rc = class extends ds {
    constructor() {
      (super(...arguments),
        (this.type = `svg`),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = I));
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (ti.has(t)) {
        let e = Ya(t);
        return (e && e.default) || 0;
      }
      return ((t = $s.has(t) ? t : Ea(t)), e.getAttribute(t));
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return nc(e, t, n);
    }
    build(e, t, n) {
      Qs(e, t, this.isSVGTag, n.transformTemplate, n.style);
    }
    renderInstance(e, t, n, r) {
      tc(e, t, n, r);
    }
    mount(e) {
      ((this.isSVGTag = ec(e.tagName)), super.mount(e));
    }
  },
  ic = Zo.length;
function ac(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    let t = (e.parent && ac(e.parent)) || {};
    return (e.props.initial !== void 0 && (t.initial = e.props.initial), t);
  }
  let t = {};
  for (let n = 0; n < ic; n++) {
    let r = Zo[n],
      i = e.props[r];
    (Yo(i) || i === !1) && (t[r] = i);
  }
  return t;
}
function oc(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
g();
var sc = [`transition`, `transitionEnd`],
  cc = [...Xo].reverse(),
  lc = Xo.length;
function uc(e) {
  return (t) =>
    Promise.all(t.map(({ animation: t, options: n }) => Pa(e, t, n)));
}
function dc(e) {
  let t = uc(e),
    n = mc(),
    r = !0,
    i = !1,
    a = (t) => (n, r) => {
      var i;
      let a = fa(
        e,
        r,
        t === `exit`
          ? (i = e.presenceContext) == null
            ? void 0
            : i.custom
          : void 0,
      );
      if (a) {
        let { transition: e, transitionEnd: t } = a,
          r = x(a, sc);
        n = _(_(_({}, n), r), t);
      }
      return n;
    };
  function o(n) {
    t = n(e);
  }
  function s(o) {
    let { props: s } = e,
      c = ac(e.parent) || {},
      l = [],
      u = new Set(),
      d = {},
      f = 1 / 0;
    for (let t = 0; t < lc; t++) {
      let p = cc[t],
        m = n[p],
        h = s[p] === void 0 ? c[p] : s[p],
        g = Yo(h),
        v = p === o ? m.isActive : null;
      v === !1 && (f = t);
      let y = h === c[p] && h !== s[p] && g;
      if (
        (y && (r || i) && e.manuallyAnimateOnMount && (y = !1),
        (m.protectedKeys = _({}, d)),
        (!m.isActive && v === null) ||
          (!h && !m.prevProp) ||
          Jo(h) ||
          typeof h == `boolean`)
      )
        continue;
      if (p === `exit` && m.isActive && v !== !0) {
        m.prevResolvedValues && (d = _(_({}, d), m.prevResolvedValues));
        continue;
      }
      let b = fc(m.prevProp, h),
        x = b || (p === o && m.isActive && !y && g) || (t > f && g),
        S = !1,
        ee = Array.isArray(h) ? h : [h],
        te = ee.reduce(a(p), {});
      v === !1 && (te = {});
      let { prevResolvedValues: C = {} } = m,
        ne = _(_({}, C), te),
        re = (t) => {
          ((x = !0),
            u.has(t) && ((S = !0), u.delete(t)),
            (m.needsAnimating[t] = !0));
          let n = e.getValue(t);
          n && (n.liveStyle = !1);
        };
      for (let e in ne) {
        let t = te[e],
          n = C[e];
        if (d.hasOwnProperty(e)) continue;
        let r = !1;
        ((r = ya(t) && ya(n) ? !oc(t, n) : t !== n),
          r
            ? t == null
              ? u.add(e)
              : re(e)
            : t !== void 0 && u.has(e)
              ? re(e)
              : (m.protectedKeys[e] = !0));
      }
      ((m.prevProp = h),
        (m.prevResolvedValues = te),
        m.isActive && (d = _(_({}, d), te)),
        (r || i) && e.blockInitialAnimation && (x = !1));
      let ie = y && b;
      x &&
        (!ie || S) &&
        l.push(
          ...ee.map((t) => {
            let n = { type: p };
            if (
              typeof t == `string` &&
              (r || i) &&
              !ie &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              let { parent: r } = e,
                i = fa(r, t);
              if (r.enteringChildren && i) {
                let { delayChildren: t } = i.transition || {};
                n.delay = Yi(r.enteringChildren, e, t);
              }
            }
            return { animation: t, options: n };
          }),
        );
    }
    if (u.size) {
      let t = {};
      if (typeof s.initial != `boolean`) {
        let n = fa(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
        n && n.transition && (t.transition = n.transition);
      }
      (u.forEach((n) => {
        let r = e.getBaseTarget(n),
          i = e.getValue(n);
        (i && (i.liveStyle = !0), (t[n] = r == null ? null : r));
      }),
        l.push({ animation: t }));
    }
    let p = !!l.length;
    return (
      r &&
        (s.initial === !1 || s.initial === s.animate) &&
        !e.manuallyAnimateOnMount &&
        (p = !1),
      (r = !1),
      (i = !1),
      p ? t(l) : Promise.resolve()
    );
  }
  function c(t, r) {
    var i;
    if (n[t].isActive === r) return Promise.resolve();
    ((i = e.variantChildren) == null ||
      i.forEach((e) => {
        var n;
        return (n = e.animationState) == null ? void 0 : n.setActive(t, r);
      }),
      (n[t].isActive = r));
    let a = s(t);
    for (let e in n) n[e].protectedKeys = {};
    return a;
  }
  return {
    animateChanges: s,
    setActive: c,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      ((n = mc()), (i = !0));
    },
  };
}
function fc(e, t) {
  return typeof t == `string` ? t !== e : Array.isArray(t) ? !oc(t, e) : !1;
}
function pc(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function mc() {
  return {
    animate: pc(!0),
    whileInView: pc(),
    whileHover: pc(),
    whileTap: pc(),
    whileDrag: pc(),
    whileFocus: pc(),
    exit: pc(),
  };
}
function hc(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function gc(e, t) {
  (hc(e.x, t.x), hc(e.y, t.y));
}
function _c(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
var vc = 1e-4,
  yc = 1 - vc,
  bc = 1 + vc,
  xc = 0.01,
  Sc = 0 - xc,
  Cc = 0 + xc;
function L(e) {
  return e.max - e.min;
}
function wc(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Tc(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = N(t.min, t.max, e.origin)),
    (e.scale = L(n) / L(t)),
    (e.translate = N(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= yc && e.scale <= bc) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Sc && e.translate <= Cc) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function Ec(e, t, n, r) {
  (Tc(e.x, t.x, n.x, r ? r.originX : void 0),
    Tc(e.y, t.y, n.y, r ? r.originY : void 0));
}
function Dc(e, t, n, r = 0) {
  ((e.min = (r ? N(n.min, n.max, r) : n.min) + t.min), (e.max = e.min + L(t)));
}
function Oc(e, t, n, r) {
  (Dc(e.x, t.x, n.x, r == null ? void 0 : r.x),
    Dc(e.y, t.y, n.y, r == null ? void 0 : r.y));
}
function kc(e, t, n, r = 0) {
  let i = r ? N(n.min, n.max, r) : n.min;
  ((e.min = t.min - i), (e.max = e.min + L(t)));
}
function Ac(e, t, n, r) {
  (kc(e.x, t.x, n.x, r == null ? void 0 : r.x),
    kc(e.y, t.y, n.y, r == null ? void 0 : r.y));
}
function jc(e, t, n, r, i) {
  return (
    (e -= t),
    (e = xs(e, 1 / n, r)),
    i !== void 0 && (e = xs(e, 1 / i, r)),
    e
  );
}
function Mc(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (
    (Tn.test(t) &&
      ((t = parseFloat(t)), (t = N(o.min, o.max, t / 100) - o.min)),
    typeof t != `number`)
  )
    return;
  let s = N(a.min, a.max, r);
  (e === a && (s -= t),
    (e.min = jc(e.min, t, n, s, i)),
    (e.max = jc(e.max, t, n, s, i)));
}
function Nc(e, t, [n, r, i], a, o) {
  Mc(e, t[n], t[r], t[i], t.scale, a, o);
}
var Pc = [`x`, `scaleX`, `originX`],
  Fc = [`y`, `scaleY`, `originY`];
function Ic(e, t, n, r) {
  (Nc(e.x, t, Pc, n ? n.x : void 0, r ? r.x : void 0),
    Nc(e.y, t, Fc, n ? n.y : void 0, r ? r.y : void 0));
}
function Lc(e) {
  return e.translate === 0 && e.scale === 1;
}
function Rc(e) {
  return Lc(e.x) && Lc(e.y);
}
function zc(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Bc(e, t) {
  return zc(e.x, t.x) && zc(e.y, t.y);
}
function Vc(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Hc(e, t) {
  return Vc(e.x, t.x) && Vc(e.y, t.y);
}
function Uc(e) {
  return L(e.x) / L(e.y);
}
function Wc(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
function Gc(e) {
  return [e(`x`), e(`y`)];
}
function Kc(e, t, n) {
  let r = ``,
    i = e.x.translate / t.x,
    a = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: e,
      rotate: t,
      rotateX: i,
      rotateY: a,
      skewX: o,
      skewY: s,
    } = n;
    (e && (r = `perspective(${e}px) ${r}`),
      t && (r += `rotate(${t}deg) `),
      i && (r += `rotateX(${i}deg) `),
      a && (r += `rotateY(${a}deg) `),
      o && (r += `skewX(${o}deg) `),
      s && (r += `skewY(${s}deg) `));
  }
  let s = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return ((s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || `none`);
}
var qc = [
    `borderTopLeftRadius`,
    `borderTopRightRadius`,
    `borderBottomLeftRadius`,
    `borderBottomRightRadius`,
  ],
  Jc = qc.length,
  Yc = (e) => (typeof e == `string` ? parseFloat(e) : e),
  Xc = (e) => typeof e == `number` || j.test(e);
function Zc(e, t, n, r, i, a) {
  if (i) {
    var o, s;
    ((e.opacity = N(0, (o = n.opacity) == null ? 1 : o, $c(r))),
      (e.opacityExit = N((s = t.opacity) == null ? 1 : s, 0, el(r))));
  } else if (a) {
    var c, l;
    e.opacity = N(
      (c = t.opacity) == null ? 1 : c,
      (l = n.opacity) == null ? 1 : l,
      r,
    );
  }
  for (let i = 0; i < Jc; i++) {
    let a = qc[i],
      o = Qc(t, a),
      s = Qc(n, a);
    (o === void 0 && s === void 0) ||
      (o || (o = 0),
      s || (s = 0),
      o === 0 || s === 0 || Xc(o) === Xc(s)
        ? ((e[a] = Math.max(N(Yc(o), Yc(s), r), 0)),
          (Tn.test(s) || Tn.test(o)) && (e[a] += `%`))
        : (e[a] = s));
  }
  (t.rotate || n.rotate) && (e.rotate = N(t.rotate || 0, n.rotate || 0, r));
}
function Qc(e, t) {
  return e[t] === void 0 ? e.borderRadius : e[t];
}
var $c = tl(0, 0.5, It),
  el = tl(0.5, 0.95, gt);
function tl(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(yt(e, t, r)));
}
function nl(e, t, n) {
  let r = F(e) ? e : va(e);
  return (r.start(la(``, r, t, n)), r.animation);
}
function rl(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
var il = (e, t) => e.depth - t.depth,
  al = class {
    constructor() {
      ((this.children = []), (this.isDirty = !1));
    }
    add(e) {
      (st(this.children, e), (this.isDirty = !0));
    }
    remove(e) {
      (ct(this.children, e), (this.isDirty = !0));
    }
    forEach(e) {
      (this.isDirty && this.children.sort(il),
        (this.isDirty = !1),
        this.children.forEach(e));
    }
  };
function ol(e, t) {
  let n = A.now(),
    r = ({ timestamp: i }) => {
      let a = i - n;
      a >= t && (Zt(r), e(a - t));
    };
  return (O.setup(r, !0), () => Zt(r));
}
function sl(e) {
  return F(e) ? e.get() : e;
}
var cl = class {
    constructor() {
      this.members = [];
    }
    add(e) {
      st(this.members, e);
      for (let t = this.members.length - 1; t >= 0; t--) {
        let n = this.members[t];
        if (n === e || n === this.lead || n === this.prevLead) continue;
        let r = n.instance;
        (!r || r.isConnected === !1) &&
          !n.snapshot &&
          (ct(this.members, n), n.unmount());
      }
      e.scheduleRender();
    }
    remove(e) {
      if (
        (ct(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead)
      ) {
        let e = this.members[this.members.length - 1];
        e && this.promote(e);
      }
    }
    relegate(e) {
      for (let n = this.members.indexOf(e) - 1; n >= 0; n--) {
        var t;
        let e = this.members[n];
        if (
          e.isPresent !== !1 &&
          ((t = e.instance) == null ? void 0 : t.isConnected) !== !1
        )
          return (this.promote(e), !0);
      }
      return !1;
    }
    promote(e, t) {
      let n = this.lead;
      if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
        (n.updateSnapshot(), e.scheduleRender());
        let { layoutDependency: i } = n.options,
          { layoutDependency: a } = e.options;
        if (i === void 0 || i !== a) {
          var r;
          ((e.resumeFrom = n),
            t && (n.preserveOpacity = !0),
            n.snapshot &&
              ((e.snapshot = n.snapshot),
              (e.snapshot.latestValues = n.animationValues || n.latestValues)),
            (r = e.root) != null && r.isUpdating && (e.isLayoutDirty = !0));
        }
        e.options.crossfade === !1 && n.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((e) => {
        var t, n, r, i, a;
        ((t = (n = e.options).onExitComplete) == null || t.call(n),
          (r = e.resumingFrom) == null ||
            (a = (i = r.options).onExitComplete) == null ||
            a.call(i));
      });
    }
    scheduleRender() {
      this.members.forEach((e) => e.instance && e.scheduleRender(!1));
    }
    removeLeadSnapshot() {
      var e;
      (e = this.lead) != null && e.snapshot && (this.lead.snapshot = void 0);
    }
  },
  ll = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
g();
var ul = { nodes: 0, calculatedTargetDeltas: 0, calculatedProjections: 0 },
  dl = [``, `X`, `Y`, `Z`],
  fl = 1e3,
  pl = 0;
function ml(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function hl(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  let { visualElement: t } = e.options;
  if (!t) return;
  let n = Oa(t);
  if (window.MotionHasOptimisedAnimation(n, `transform`)) {
    let { layout: t, layoutId: r } = e.options;
    window.MotionCancelOptimisedAnimation(n, `transform`, O, !(t || r));
  }
  let { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && hl(r);
}
function gl({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(e = {}, n = t == null ? void 0 : t()) {
      ((this.id = pl++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            qt.value &&
              (ul.nodes =
                ul.calculatedTargetDeltas =
                ul.calculatedProjections =
                  0),
            this.nodes.forEach(yl),
            this.nodes.forEach(Ol),
            this.nodes.forEach(kl),
            this.nodes.forEach(bl),
            qt.addProjectionMetrics && qt.addProjectionMetrics(ul));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = e),
        (this.root = n ? n.root || n : this),
        (this.path = n ? [...n.path, n] : []),
        (this.parent = n),
        (this.depth = n ? n.depth + 1 : 0));
      for (let e = 0; e < this.path.length; e++)
        this.path[e].shouldResetTransform = !0;
      this.root === this && (this.nodes = new al());
    }
    addEventListener(e, t) {
      return (
        this.eventHandlers.has(e) || this.eventHandlers.set(e, new bt()),
        this.eventHandlers.get(e).add(t)
      );
    }
    notifyListeners(e, ...t) {
      let n = this.eventHandlers.get(e);
      n && n.notify(...t);
    }
    hasListeners(e) {
      return this.eventHandlers.has(e);
    }
    mount(t) {
      if (this.instance) return;
      ((this.isSVG = Eo(t) && !Vo(t)), (this.instance = t));
      let { layoutId: n, layout: r, visualElement: i } = this.options;
      if (
        (i && !i.current && i.mount(t),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0),
        e)
      ) {
        let n,
          r = 0,
          i = () => (this.root.updateBlockedByResize = !1);
        (O.read(() => {
          r = window.innerWidth;
        }),
          e(t, () => {
            let e = window.innerWidth;
            e !== r &&
              ((r = e),
              (this.root.updateBlockedByResize = !0),
              n && n(),
              (n = ol(i, 250)),
              ll.hasAnimatedSinceResize &&
                ((ll.hasAnimatedSinceResize = !1), this.nodes.forEach(Dl)));
          }));
      }
      (n && this.root.registerSharedNode(n, this),
        this.options.animate !== !1 &&
          i &&
          (n || r) &&
          this.addEventListener(
            `didUpdate`,
            ({
              delta: e,
              hasLayoutChanged: t,
              hasRelativeLayoutChanged: n,
              layout: r,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              let a = this.options.transition || i.getDefaultTransition() || Il,
                { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } =
                  i.getProps(),
                c = !this.targetLayout || !Hc(this.targetLayout, r),
                l = !t && n;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                l ||
                (t && (c || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                let t = _(
                  _({}, oa(a, `layout`)),
                  {},
                  { onPlay: o, onComplete: s },
                );
                ((i.shouldReduceMotion || this.options.layoutRoot) &&
                  ((t.delay = 0), (t.type = !1)),
                  this.startAnimation(t),
                  this.setAnimationOrigin(e, l));
              } else
                (t || Dl(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = r;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      let e = this.getStack();
      (e && e.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Zt(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Al),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: e } = this.options;
      return e && e.getProps().transformTemplate;
    }
    willUpdate(e = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          hl(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let e = 0; e < this.path.length; e++) {
        let t = this.path[e];
        ((t.shouldResetTransform = !0),
          (typeof t.latestValues.x == `string` ||
            typeof t.latestValues.y == `string`) &&
            (t.isLayoutDirty = !0),
          t.updateScroll(`snapshot`),
          t.options.layoutRoot && t.willUpdate(!1));
      }
      let { layoutId: t, layout: n } = this.options;
      if (t === void 0 && !n) return;
      let r = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = r
        ? r(this.latestValues, ``)
        : void 0),
        this.updateSnapshot(),
        e && this.notifyListeners(`willUpdate`));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        let e = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          e && this.nodes.forEach(Cl),
          this.nodes.forEach(Sl));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(wl);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(Tl),
            this.nodes.forEach(El),
            this.nodes.forEach(_l),
            this.nodes.forEach(vl))
          : this.nodes.forEach(wl),
        this.clearAllSnapshots());
      let e = A.now();
      ((k.delta = lt(0, 1e3 / 60, e - k.timestamp)),
        (k.timestamp = e),
        (k.isProcessing = !0),
        Qt.update.process(k),
        Qt.preRender.process(k),
        Qt.render.process(k),
        (k.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), io.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(xl), this.sharedNodes.forEach(jl));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        O.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      O.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !L(this.snapshot.measuredBox.x) &&
          !L(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
      let e = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = I()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners(`measure`, this.layout.layoutBox));
      let { visualElement: t } = this.options;
      t &&
        t.notify(
          `LayoutMeasure`,
          this.layout.layoutBox,
          e ? e.layoutBox : void 0,
        );
    }
    updateScroll(e = `measure`) {
      let t = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === e &&
          (t = !1),
        t && this.instance)
      ) {
        let t = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: e,
          isRoot: t,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : t,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      let e =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        t = this.projectionDelta && !Rc(this.projectionDelta),
        n = this.getTransformTemplate(),
        r = n ? n(this.latestValues, ``) : void 0,
        a = r !== this.prevTransformTemplateValue;
      e &&
        this.instance &&
        (t || vs(this.latestValues) || a) &&
        (i(this.instance, r),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(e = !0) {
      let t = this.measurePageBox(),
        n = this.removeElementScroll(t);
      return (
        e && (n = this.removeTransform(n)),
        Bl(n),
        {
          animationId: this.root.animationId,
          measuredBox: t,
          layoutBox: n,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var e;
      let { visualElement: t } = this.options;
      if (!t) return I();
      let n = t.measureViewportBox();
      if (!(((e = this.scroll) != null && e.wasRoot) || this.path.some(Hl))) {
        let { scroll: e } = this.root;
        e && (Os(n.x, e.offset.x), Os(n.y, e.offset.y));
      }
      return n;
    }
    removeElementScroll(e) {
      var t;
      let n = I();
      if ((gc(n, e), (t = this.scroll) != null && t.wasRoot)) return n;
      for (let t = 0; t < this.path.length; t++) {
        let r = this.path[t],
          { scroll: i, options: a } = r;
        r !== this.root &&
          i &&
          a.layoutScroll &&
          (i.wasRoot && gc(n, e), Os(n.x, i.offset.x), Os(n.y, i.offset.y));
      }
      return n;
    }
    applyTransform(e, t = !1, n) {
      let r = n || I();
      gc(r, e);
      for (let e = 0; e < this.path.length; e++) {
        var i;
        let n = this.path[e];
        (!t &&
          n.options.layoutScroll &&
          n.scroll &&
          n !== n.root &&
          (Os(r.x, -n.scroll.offset.x), Os(r.y, -n.scroll.offset.y)),
          vs(n.latestValues) &&
            js(
              r,
              n.latestValues,
              (i = n.layout) == null ? void 0 : i.layoutBox,
            ));
      }
      if (vs(this.latestValues)) {
        var a;
        js(
          r,
          this.latestValues,
          (a = this.layout) == null ? void 0 : a.layoutBox,
        );
      }
      return r;
    }
    removeTransform(e) {
      let t = I();
      gc(t, e);
      for (let e = 0; e < this.path.length; e++) {
        var n;
        let r = this.path[e];
        if (!vs(r.latestValues)) continue;
        let i;
        (r.instance &&
          (_s(r.latestValues) && r.updateSnapshot(),
          (i = I()),
          gc(i, r.measurePageBox())),
          Ic(
            t,
            r.latestValues,
            (n = r.snapshot) == null ? void 0 : n.layoutBox,
            i,
          ));
      }
      return (vs(this.latestValues) && Ic(t, this.latestValues), t);
    }
    setTargetDelta(e) {
      ((this.targetDelta = e),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(e) {
      this.options = _(
        _(_({}, this.options), e),
        {},
        { crossfade: e.crossfade === void 0 ? !0 : e.crossfade },
      );
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== k.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(e = !1) {
      var t;
      let n = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = n.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = n.isSharedProjectionDirty));
      let r = !!this.resumingFrom || this !== n;
      if (!(
        e ||
        (r && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        ((t = this.parent) != null && t.isProjectionDirty) ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      let { layout: i, layoutId: a } = this.options;
      if (!this.layout || !(i || a)) return;
      this.resolvedRelativeTargetAt = k.timestamp;
      let o = this.getClosestProjectingParent();
      (o &&
        this.linkedParentVersion !== o.layoutVersion &&
        !o.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && o && o.layout
            ? this.createRelativeTarget(
                o,
                this.layout.layoutBox,
                o.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = I()), (this.targetWithTransforms = I())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Oc(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : gc(this.target, this.layout.layoutBox),
                ws(this.target, this.targetDelta))
              : gc(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            o &&
            !!o.resumingFrom == !!this.resumingFrom &&
            !o.options.layoutScroll &&
            o.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(o, this.target, o.target)
              : (this.relativeParent = this.relativeTarget = void 0)),
          qt.value && ul.calculatedTargetDeltas++));
    }
    getClosestProjectingParent() {
      if (!(
        !this.parent ||
        _s(this.parent.latestValues) ||
        ys(this.parent.latestValues)
      ))
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(e, t, n) {
      ((this.relativeParent = e),
        (this.linkedParentVersion = e.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = I()),
        (this.relativeTargetOrigin = I()),
        Ac(
          this.relativeTargetOrigin,
          t,
          n,
          this.options.layoutAnchor || void 0,
        ),
        gc(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var e;
      let t = this.getLead(),
        n = !!this.resumingFrom || this !== t,
        r = !0;
      if (
        ((this.isProjectionDirty ||
          ((e = this.parent) != null && e.isProjectionDirty)) &&
          (r = !1),
        n &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (r = !1),
        this.resolvedRelativeTargetAt === k.timestamp && (r = !1),
        r)
      )
        return;
      let { layout: i, layoutId: a } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(i || a))
      )
        return;
      gc(this.layoutCorrected, this.layout.layoutBox);
      let o = this.treeScale.x,
        s = this.treeScale.y;
      (Ds(this.layoutCorrected, this.treeScale, this.path, n),
        t.layout &&
          !t.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((t.target = t.layout.layoutBox), (t.targetWithTransforms = I())));
      let { target: c } = t;
      if (!c) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (_c(this.prevProjectionDelta.x, this.projectionDelta.x),
          _c(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Ec(this.projectionDelta, this.layoutCorrected, c, this.latestValues),
        (this.treeScale.x !== o ||
          this.treeScale.y !== s ||
          !Wc(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Wc(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners(`projectionUpdate`, c)),
        qt.value && ul.calculatedProjections++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(e = !0) {
      var t;
      if (((t = this.options.visualElement) == null || t.scheduleRender(), e)) {
        let e = this.getStack();
        e && e.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Go()),
        (this.projectionDelta = Go()),
        (this.projectionDeltaWithTransform = Go()));
    }
    setAnimationOrigin(e, t = !1) {
      let n = this.snapshot,
        r = n ? n.latestValues : {},
        i = _({}, this.latestValues),
        a = Go();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !t));
      let o = I(),
        s =
          (n ? n.source : void 0) !==
          (this.layout ? this.layout.source : void 0),
        c = this.getStack(),
        l = !c || c.members.length <= 1,
        u = !!(s && !l && this.options.crossfade === !0 && !this.path.some(Fl));
      this.animationProgress = 0;
      let d;
      ((this.mixTargetDelta = (t) => {
        let n = t / 1e3;
        (Ml(a.x, e.x, n),
          Ml(a.y, e.y, n),
          this.setTargetDelta(a),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ac(
              o,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            Pl(this.relativeTarget, this.relativeTargetOrigin, o, n),
            d && Bc(this.relativeTarget, d) && (this.isProjectionDirty = !1),
            d || (d = I()),
            gc(d, this.relativeTarget)),
          s &&
            ((this.animationValues = i), Zc(i, r, this.latestValues, n, u, l)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = n));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(e) {
      var t, n;
      (this.notifyListeners(`animationStart`),
        (t = this.currentAnimation) == null || t.stop(),
        (n = this.resumingFrom) == null ||
          (n = n.currentAnimation) == null ||
          n.stop(),
        this.pendingAnimation &&
          (Zt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = O.update(() => {
          ((ll.hasAnimatedSinceResize = !0),
            tn.layout++,
            this.motionValue || (this.motionValue = va(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = nl(
              this.motionValue,
              [0, 1e3],
              _(
                _({}, e),
                {},
                {
                  velocity: 0,
                  isSync: !0,
                  onUpdate: (t) => {
                    (this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t));
                  },
                  onStop: () => {
                    tn.layout--;
                  },
                  onComplete: () => {
                    (tn.layout--,
                      e.onComplete && e.onComplete(),
                      this.completeAnimation());
                  },
                },
              ),
            )),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let e = this.getStack();
      (e && e.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners(`animationComplete`));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(fl),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      let e = this.getLead(),
        { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
      if (!(!t || !n || !r)) {
        if (
          this !== e &&
          this.layout &&
          r &&
          Vl(this.options.animationType, this.layout.layoutBox, r.layoutBox)
        ) {
          n = this.target || I();
          let t = L(this.layout.layoutBox.x);
          ((n.x.min = e.target.x.min), (n.x.max = n.x.min + t));
          let r = L(this.layout.layoutBox.y);
          ((n.y.min = e.target.y.min), (n.y.max = n.y.min + r));
        }
        (gc(t, n),
          js(t, i),
          Ec(this.projectionDeltaWithTransform, this.layoutCorrected, t, i));
      }
    }
    registerSharedNode(e, t) {
      (this.sharedNodes.has(e) || this.sharedNodes.set(e, new cl()),
        this.sharedNodes.get(e).add(t));
      let n = t.options.initialPromotionConfig;
      t.promote({
        transition: n ? n.transition : void 0,
        preserveFollowOpacity:
          n && n.shouldPreserveFollowOpacity
            ? n.shouldPreserveFollowOpacity(t)
            : void 0,
      });
    }
    isLead() {
      let e = this.getStack();
      return e ? e.lead === this : !0;
    }
    getLead() {
      var e;
      let { layoutId: t } = this.options;
      return (t && ((e = this.getStack()) == null ? void 0 : e.lead)) || this;
    }
    getPrevLead() {
      var e;
      let { layoutId: t } = this.options;
      return t ? ((e = this.getStack()) == null ? void 0 : e.prevLead) : void 0;
    }
    getStack() {
      let { layoutId: e } = this.options;
      if (e) return this.root.sharedNodes.get(e);
    }
    promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
      let r = this.getStack();
      (r && r.promote(this, n),
        e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        t && this.setOptions({ transition: t }));
    }
    relegate() {
      let e = this.getStack();
      return e ? e.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: e } = this.options;
      if (!e) return;
      let t = !1,
        { latestValues: n } = e;
      if (
        ((n.z ||
          n.rotate ||
          n.rotateX ||
          n.rotateY ||
          n.rotateZ ||
          n.skewX ||
          n.skewY) &&
          (t = !0),
        !t)
      )
        return;
      let r = {};
      n.z && ml(`z`, e, r, this.animationValues);
      for (let t = 0; t < dl.length; t++)
        (ml(`rotate${dl[t]}`, e, r, this.animationValues),
          ml(`skew${dl[t]}`, e, r, this.animationValues));
      e.render();
      for (let t in r)
        (e.setStaticValue(t, r[t]),
          this.animationValues && (this.animationValues[t] = r[t]));
      e.scheduleRender();
    }
    applyProjectionStyles(e, t) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        e.visibility = `hidden`;
        return;
      }
      let n = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (e.visibility = ``),
          (e.opacity = ``),
          (e.pointerEvents = sl(t == null ? void 0 : t.pointerEvents) || ``),
          (e.transform = n ? n(this.latestValues, ``) : `none`));
        return;
      }
      let r = this.getLead();
      if (!this.projectionDelta || !this.layout || !r.target) {
        (this.options.layoutId &&
          ((e.opacity =
            this.latestValues.opacity === void 0
              ? 1
              : this.latestValues.opacity),
          (e.pointerEvents = sl(t == null ? void 0 : t.pointerEvents) || ``)),
          this.hasProjected &&
            !vs(this.latestValues) &&
            ((e.transform = n ? n({}, ``) : `none`), (this.hasProjected = !1)));
        return;
      }
      e.visibility = ``;
      let i = r.animationValues || r.latestValues;
      this.applyTransformsToTarget();
      let a = Kc(this.projectionDeltaWithTransform, this.treeScale, i);
      (n && (a = n(i, a)), (e.transform = a));
      let { x: o, y: s } = this.projectionDelta;
      if (
        ((e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`),
        r.animationValues)
      ) {
        var c, l;
        e.opacity =
          r === this
            ? (c = (l = i.opacity) == null ? this.latestValues.opacity : l) ==
              null
              ? 1
              : c
            : this.preserveOpacity
              ? this.latestValues.opacity
              : i.opacityExit;
      } else
        e.opacity =
          r === this
            ? i.opacity === void 0
              ? ``
              : i.opacity
            : i.opacityExit === void 0
              ? 0
              : i.opacityExit;
      for (let t in Hs) {
        if (i[t] === void 0) continue;
        let { correct: n, applyTo: o, isCSSVariable: s } = Hs[t],
          c = a === `none` ? i[t] : n(i[t], r);
        if (o) {
          let t = o.length;
          for (let n = 0; n < t; n++) e[o[n]] = c;
        } else
          s ? (this.options.visualElement.renderState.vars[t] = c) : (e[t] = c);
      }
      this.options.layoutId &&
        (e.pointerEvents =
          r === this ? sl(t == null ? void 0 : t.pointerEvents) || `` : `none`);
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((e) => {
        var t;
        return (t = e.currentAnimation) == null ? void 0 : t.stop();
      }),
        this.root.nodes.forEach(Sl),
        this.root.sharedNodes.clear());
    }
  };
}
function _l(e) {
  e.updateLayout();
}
function vl(e) {
  var t;
  let n = ((t = e.resumeFrom) == null ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners(`didUpdate`)) {
    let { layoutBox: t, measuredBox: r } = e.layout,
      { animationType: i } = e.options,
      a = n.source !== e.layout.source;
    if (i === `size`)
      Gc((e) => {
        let r = a ? n.measuredBox[e] : n.layoutBox[e],
          i = L(r);
        ((r.min = t[e].min), (r.max = r.min + i));
      });
    else if (i === `x` || i === `y`) {
      let e = i === `x` ? `y` : `x`;
      hc(a ? n.measuredBox[e] : n.layoutBox[e], t[e]);
    } else
      Vl(i, n.layoutBox, t) &&
        Gc((r) => {
          let i = a ? n.measuredBox[r] : n.layoutBox[r],
            o = L(t[r]);
          ((i.max = i.min + o),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[r].max = e.relativeTarget[r].min + o)));
        });
    let o = Go();
    Ec(o, t, n.layoutBox);
    let s = Go();
    a ? Ec(s, e.applyTransform(r, !0), n.measuredBox) : Ec(s, t, n.layoutBox);
    let c = !Rc(o),
      l = !1;
    if (!e.resumeFrom) {
      let r = e.getClosestProjectingParent();
      if (r && !r.resumeFrom) {
        let { snapshot: i, layout: a } = r;
        if (i && a) {
          let o = e.options.layoutAnchor || void 0,
            s = I();
          Ac(s, n.layoutBox, i.layoutBox, o);
          let c = I();
          (Ac(c, t, a.layoutBox, o),
            Hc(s, c) || (l = !0),
            r.options.layoutRoot &&
              ((e.relativeTarget = c),
              (e.relativeTargetOrigin = s),
              (e.relativeParent = r)));
        }
      }
    }
    e.notifyListeners(`didUpdate`, {
      layout: t,
      snapshot: n,
      delta: s,
      layoutDelta: o,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: l,
    });
  } else if (e.isLead()) {
    let { onExitComplete: t } = e.options;
    t && t();
  }
  e.options.transition = void 0;
}
function yl(e) {
  (qt.value && ul.nodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)));
}
function bl(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function xl(e) {
  e.clearSnapshot();
}
function Sl(e) {
  e.clearMeasurements();
}
function Cl(e) {
  ((e.isLayoutDirty = !0), e.updateLayout());
}
function wl(e) {
  e.isLayoutDirty = !1;
}
function Tl(e) {
  e.isAnimationBlocked &&
    e.layout &&
    !e.isLayoutDirty &&
    ((e.snapshot = e.layout), (e.isLayoutDirty = !0));
}
function El(e) {
  let { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`),
    e.resetTransform());
}
function Dl(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function Ol(e) {
  e.resolveTargetDelta();
}
function kl(e) {
  e.calcProjection();
}
function Al(e) {
  e.resetSkewAndRotation();
}
function jl(e) {
  e.removeLeadSnapshot();
}
function Ml(e, t, n) {
  ((e.translate = N(t.translate, 0, n)),
    (e.scale = N(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Nl(e, t, n, r) {
  ((e.min = N(t.min, n.min, r)), (e.max = N(t.max, n.max, r)));
}
function Pl(e, t, n, r) {
  (Nl(e.x, t.x, n.x, r), Nl(e.y, t.y, n.y, r));
}
function Fl(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var Il = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Ll = (e) =>
    typeof navigator < `u` &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Rl = Ll(`applewebkit/`) && !Ll(`chrome/`) ? Math.round : gt;
function zl(e) {
  ((e.min = Rl(e.min)), (e.max = Rl(e.max)));
}
function Bl(e) {
  (zl(e.x), zl(e.y));
}
function Vl(e, t, n) {
  return (
    e === `position` || (e === `preserve-aspect` && !wc(Uc(t), Uc(n), 0.2))
  );
}
function Hl(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
var Ul = gl({
    attachResizeListener: (e, t) => rl(e, `resize`, t),
    measureScroll: () => {
      var e, t;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((e = document.body) == null ? void 0 : e.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((t = document.body) == null ? void 0 : t.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  Wl = { current: void 0 },
  Gl = gl({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Wl.current) {
        let e = new Ul({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (Wl.current = e));
      }
      return Wl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t === void 0 ? `none` : t;
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === `fixed`,
  }),
  Kl = (0, T.createContext)({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: `never`,
  });
function ql(e = !0) {
  let t = (0, T.useContext)(ot);
  if (t === null) return [!0, null];
  let { isPresent: n, onExitComplete: r, register: i } = t,
    a = (0, T.useId)();
  (0, T.useEffect)(() => {
    if (e) return i(a);
  }, [e]);
  let o = (0, T.useCallback)(() => e && r && r(a), [a, r, e]);
  return !n && r ? [!1, o] : [!0];
}
var Jl = (0, T.createContext)({ strict: !1 }),
  Yl = {
    animation: [
      `animate`,
      `variants`,
      `whileHover`,
      `whileTap`,
      `exit`,
      `whileInView`,
      `whileFocus`,
      `whileDrag`,
    ],
    exit: [`exit`],
    drag: [`drag`, `dragControls`],
    focus: [`whileFocus`],
    hover: [`whileHover`, `onHoverStart`, `onHoverEnd`],
    tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
    pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
    inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`],
    layout: [`layout`, `layoutId`],
  },
  Xl = !1;
function Zl() {
  if (Xl) return;
  let e = {};
  for (let t in Yl) e[t] = { isEnabled: (e) => Yl[t].some((t) => !!e[t]) };
  (cs(e), (Xl = !0));
}
function Ql() {
  return (Zl(), ls());
}
g();
function $l(e) {
  let t = Ql();
  for (let n in e) t[n] = _(_({}, t[n]), e[n]);
  cs(t);
}
var eu = new Set(
  `animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(
    `.`,
  ),
);
function tu(e) {
  return (
    e.startsWith(`while`) ||
    (e.startsWith(`drag`) && e !== `draggable`) ||
    e.startsWith(`layout`) ||
    e.startsWith(`onTap`) ||
    e.startsWith(`onPan`) ||
    e.startsWith(`onLayout`) ||
    eu.has(e)
  );
}
var nu = r({ default: () => ru }),
  ru,
  iu = n(() => {
    throw (
      (ru = {}),
      Error(
        `Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`,
      )
    );
  }),
  au = (e) => !tu(e);
function ou(e) {
  typeof e == `function` && (au = (t) => (t.startsWith(`on`) ? !tu(t) : e(t)));
}
try {
  ou((iu(), t(nu)).default);
} catch (e) {}
function su(e, t, n) {
  let r = {};
  for (let i in e)
    (i === `values` && typeof e.values == `object`) ||
      F(e[i]) ||
      ((au(i) ||
        (n === !0 && tu(i)) ||
        (!t && !tu(i)) ||
        (e.draggable && i.startsWith(`onDrag`))) &&
        (r[i] = e[i]));
  return r;
}
var cu = (0, T.createContext)({});
function lu(e, t) {
  if (Qo(e)) {
    let { initial: t, animate: n } = e;
    return {
      initial: t === !1 || Yo(t) ? t : void 0,
      animate: Yo(n) ? n : void 0,
    };
  }
  return e.inherit === !1 ? {} : t;
}
function uu(e) {
  let { initial: t, animate: n } = lu(e, (0, T.useContext)(cu));
  return (0, T.useMemo)(() => ({ initial: t, animate: n }), [du(t), du(n)]);
}
function du(e) {
  return Array.isArray(e) ? e.join(` `) : e;
}
var fu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function pu(e, t, n) {
  for (let r in t) !F(t[r]) && !Us(r, n) && (e[r] = t[r]);
}
function mu({ transformTemplate: e }, t) {
  return (0, T.useMemo)(() => {
    let n = fu();
    return (Ls(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function hu(e, t) {
  let n = e.style || {},
    r = {};
  return (pu(r, n, e), Object.assign(r, mu(e, t)), r);
}
function gu(e, t) {
  let n = {},
    r = hu(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`),
      (r.touchAction =
        e.drag === !0 ? `none` : `pan-${e.drag === `x` ? `y` : `x`}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
g();
var _u = () => _(_({}, fu()), {}, { attrs: {} });
g();
function vu(e, t, n, r) {
  let i = (0, T.useMemo)(() => {
    let n = _u();
    return (
      Qs(n, t, ec(r), e.transformTemplate, e.style),
      _(_({}, n.attrs), {}, { style: _({}, n.style) })
    );
  }, [t]);
  if (e.style) {
    let t = {};
    (pu(t, e.style, e), (i.style = _(_({}, t), i.style)));
  }
  return i;
}
var yu = [
  `animate`,
  `circle`,
  `defs`,
  `desc`,
  `ellipse`,
  `g`,
  `image`,
  `line`,
  `filter`,
  `marker`,
  `mask`,
  `metadata`,
  `path`,
  `pattern`,
  `polygon`,
  `polyline`,
  `rect`,
  `stop`,
  `switch`,
  `symbol`,
  `svg`,
  `text`,
  `tspan`,
  `use`,
  `view`,
];
function bu(e) {
  return typeof e != `string` || e.includes(`-`)
    ? !1
    : !!(yu.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
g();
function xu(e, t, n, { latestValues: r }, i, a = !1, o) {
  let s = ((o == null ? bu(e) : o) ? vu : gu)(t, r, i, e),
    c = su(t, typeof e == `string`, a),
    l = e === T.Fragment ? {} : _(_(_({}, c), s), {}, { ref: n }),
    { children: u } = t,
    d = (0, T.useMemo)(() => (F(u) ? u.get() : u), [u]);
  return (0, T.createElement)(e, _(_({}, l), {}, { children: d }));
}
var Su = [`transitionEnd`, `transition`];
function Cu({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: wu(n, r, i, e), renderState: t() };
}
function wu(e, t, n, r) {
  let i = {},
    a = r(e, {});
  for (let e in a) i[e] = sl(a[e]);
  let { initial: o, animate: s } = e,
    c = Qo(e),
    l = $o(e);
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || o === !1;
  let d = u ? s : o;
  if (d && typeof d != `boolean` && !Jo(d)) {
    let t = Array.isArray(d) ? d : [d];
    for (let n = 0; n < t.length; n++) {
      let r = da(e, t[n]);
      if (r) {
        let { transitionEnd: e, transition: t } = r,
          n = x(r, Su);
        for (let e in n) {
          let t = n[e];
          if (Array.isArray(t)) {
            let e = u ? t.length - 1 : 0;
            t = t[e];
          }
          t !== null && (i[e] = t);
        }
        for (let t in e) i[t] = e[t];
      }
    }
  }
  return i;
}
var Tu = (e) => (t, n) => {
    let r = (0, T.useContext)(cu),
      i = (0, T.useContext)(ot),
      a = () => Cu(e, t, r, i);
    return n ? a() : it(a);
  },
  Eu = Tu({ scrapeMotionValuesFromProps: Ws, createRenderState: fu }),
  Du = Tu({ scrapeMotionValuesFromProps: nc, createRenderState: _u }),
  Ou = Symbol.for(`motionComponentSymbol`);
function ku(e, t, n) {
  let r = (0, T.useRef)(n);
  (0, T.useInsertionEffect)(() => {
    r.current = n;
  });
  let i = (0, T.useRef)(null);
  return (0, T.useCallback)(
    (n) => {
      if (n) {
        var a;
        (a = e.onMount) == null || a.call(e, n);
      }
      let o = r.current;
      if (typeof o == `function`)
        if (n) {
          let e = o(n);
          typeof e == `function` && (i.current = e);
        } else i.current ? (i.current(), (i.current = null)) : o(n);
      else o && (o.current = n);
      t && (n ? t.mount(n) : t.unmount());
    },
    [t],
  );
}
var Au = (0, T.createContext)({});
function ju(e) {
  return (
    e &&
    typeof e == `object` &&
    Object.prototype.hasOwnProperty.call(e, `current`)
  );
}
function Mu(e, t, n, r, i, a) {
  var o, s, c, l;
  let { visualElement: u } = (0, T.useContext)(cu),
    d = (0, T.useContext)(Jl),
    f = (0, T.useContext)(ot),
    p = (0, T.useContext)(Kl),
    m = p.reducedMotion,
    h = p.skipAnimations,
    g = (0, T.useRef)(null),
    _ = (0, T.useRef)(!1);
  ((r = r || d.renderer),
    !g.current &&
      r &&
      ((g.current = r(e, {
        visualState: t,
        parent: u,
        props: n,
        presenceContext: f,
        blockInitialAnimation: f ? f.initial === !1 : !1,
        reducedMotionConfig: m,
        skipAnimations: h,
        isSVG: a,
      })),
      _.current && g.current && (g.current.manuallyAnimateOnMount = !0)));
  let v = g.current,
    y = (0, T.useContext)(Au);
  v &&
    !v.projection &&
    i &&
    (v.type === `html` || v.type === `svg`) &&
    Nu(g.current, n, i, y);
  let b = (0, T.useRef)(!1);
  (0, T.useInsertionEffect)(() => {
    v && b.current && v.update(n, f);
  });
  let x = n[Da],
    S = (0, T.useRef)(
      !!x &&
        typeof window < `u` &&
        !((o = (s = window).MotionHandoffIsComplete) != null && o.call(s, x)) &&
        ((c = (l = window).MotionHasOptimisedAnimation) == null
          ? void 0
          : c.call(l, x)),
    );
  return (
    at(() => {
      ((_.current = !0),
        v &&
          ((b.current = !0),
          (window.MotionIsMounted = !0),
          v.updateFeatures(),
          v.scheduleRenderMicrotask(),
          S.current && v.animationState && v.animationState.animateChanges()));
    }),
    (0, T.useEffect)(() => {
      v &&
        (!S.current && v.animationState && v.animationState.animateChanges(),
        S.current &&
          (queueMicrotask(() => {
            var e, t;
            (e = (t = window).MotionHandoffMarkAsComplete) == null ||
              e.call(t, x);
          }),
          (S.current = !1)),
        (v.enteringChildren = void 0));
    }),
    v
  );
}
function Nu(e, t, n, r) {
  let {
    layoutId: i,
    layout: a,
    drag: o,
    dragConstraints: s,
    layoutScroll: c,
    layoutRoot: l,
    layoutAnchor: u,
    layoutCrossfade: d,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t[`data-framer-portal-id`] ? void 0 : Pu(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && ju(s)),
      visualElement: e,
      animationType: typeof a == `string` ? a : `both`,
      initialPromotionConfig: r,
      crossfade: d,
      layoutScroll: c,
      layoutRoot: l,
      layoutAnchor: u,
    }));
}
function Pu(e) {
  if (e) return e.options.allowProjection === !1 ? Pu(e.parent) : e.projection;
}
g();
function Fu(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
  var a, o;
  r && $l(r);
  let s = n ? n === `svg` : bu(e),
    c = s ? Du : Eu;
  function l(n, a) {
    let o,
      l = _(_(_({}, (0, T.useContext)(Kl)), n), {}, { layoutId: Iu(n) }),
      { isStatic: u } = l,
      d = uu(n),
      f = c(n, u);
    if (!u && typeof window < `u`) {
      Lu(l, r);
      let t = Ru(l);
      ((o = t.MeasureLayout),
        (d.visualElement = Mu(e, f, l, i, t.ProjectionNode, s)));
    }
    return (0, E.jsxs)(cu.Provider, {
      value: d,
      children: [
        o && d.visualElement
          ? (0, E.jsx)(o, _({ visualElement: d.visualElement }, l))
          : null,
        xu(e, n, ku(f, d.visualElement, a), f, u, t, s),
      ],
    });
  }
  l.displayName = `motion.${typeof e == `string` ? e : `create(${(a = (o = e.displayName) == null ? e.name : o) == null ? `` : a})`}`;
  let u = (0, T.forwardRef)(l);
  return ((u[Ou] = e), u);
}
function Iu({ layoutId: e }) {
  let t = (0, T.useContext)(rt).id;
  return t && e !== void 0 ? t + `-` + e : e;
}
function Lu(e, t) {
  (0, T.useContext)(Jl).strict;
}
function Ru(e) {
  let { drag: t, layout: n } = Ql();
  if (!t && !n) return {};
  let r = _(_({}, t), n);
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function zu(e, t) {
  if (typeof Proxy > `u`) return Fu;
  let n = new Map(),
    r = (n, r) => Fu(n, r, e, t);
  return new Proxy((e, t) => r(e, t), {
    get: (i, a) =>
      a === `create`
        ? r
        : (n.has(a) || n.set(a, Fu(a, void 0, e, t)), n.get(a)),
  });
}
var Bu = (e, t) => {
    var n;
    return ((n = t.isSVG) == null ? bu(e) : n)
      ? new rc(t)
      : new Ks(t, { allowProjection: e !== T.Fragment });
  },
  Vu = class extends fs {
    constructor(e) {
      (super(e), e.animationState || (e.animationState = dc(e)));
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps();
      Jo(e) && (this.unmountControls = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {};
      e !== t && this.updateAnimationControlsSubscription();
    }
    unmount() {
      var e;
      (this.node.animationState.reset(),
        (e = this.unmountControls) == null || e.call(this));
    }
  },
  Hu = [`transition`, `transitionEnd`],
  Uu = 0,
  Wu = {
    animation: { Feature: Vu },
    exit: {
      Feature: class extends fs {
        constructor() {
          (super(...arguments), (this.id = Uu++), (this.isExitComplete = !1));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          if (e && n === !1) {
            if (this.isExitComplete) {
              let { initial: e, custom: t } = this.node.getProps();
              if (typeof e == `string`) {
                let n = fa(this.node, e, t);
                if (n) {
                  let { transition: e, transitionEnd: t } = n,
                    i = x(n, Hu);
                  for (let e in i) {
                    var r;
                    (r = this.node.getValue(e)) == null || r.jump(i[e]);
                  }
                }
              }
              (this.node.animationState.reset(),
                this.node.animationState.animateChanges());
            } else this.node.animationState.setActive(`exit`, !1);
            this.isExitComplete = !1;
            return;
          }
          let i = this.node.animationState.setActive(`exit`, !e);
          t &&
            !e &&
            i.then(() => {
              ((this.isExitComplete = !0), t(this.id));
            });
        }
        mount() {
          let { register: e, onExitComplete: t } =
            this.node.presenceContext || {};
          (t && t(this.id), e && (this.unmount = e(this.id)));
        }
        unmount() {}
      },
    },
  };
function Gu(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
var Ku = (e) => (t) => mo(t) && e(t, Gu(t));
function qu(e, t, n, r) {
  return rl(e, t, Ku(n), r);
}
var Ju = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Yu = (e, t) => Math.abs(e - t);
function Xu(e, t) {
  let n = Yu(e.x, t.x),
    r = Yu(e.y, t.y);
  return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2));
}
g();
var Zu = new Set([`auto`, `scroll`]),
  Qu = class {
    constructor(
      e,
      t,
      {
        transformPagePoint: n,
        contextWindow: r = window,
        dragSnapToOrigin: i = !1,
        distanceThreshold: a = 3,
        element: o,
      } = {},
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.lastRawMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.scrollPositions = new Map()),
        (this.removeScrollListeners = null),
        (this.onElementScroll = (e) => {
          this.handleScroll(e.target);
        }),
        (this.onWindowScroll = () => {
          this.handleScroll(window);
        }),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          this.lastRawMoveEventInfo &&
            (this.lastMoveEventInfo = $u(
              this.lastRawMoveEventInfo,
              this.transformPagePoint,
            ));
          let e = td(this.lastMoveEventInfo, this.history),
            t = this.startEvent !== null,
            n = Xu(e.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
          if (!t && !n) return;
          let { point: r } = e,
            { timestamp: i } = k;
          this.history.push(_(_({}, r), {}, { timestamp: i }));
          let { onStart: a, onMove: o } = this.handlers;
          (t ||
            (a && a(this.lastMoveEvent, e),
            (this.startEvent = this.lastMoveEvent)),
            o && o(this.lastMoveEvent, e));
        }),
        (this.handlePointerMove = (e, t) => {
          ((this.lastMoveEvent = e),
            (this.lastRawMoveEventInfo = t),
            (this.lastMoveEventInfo = $u(t, this.transformPagePoint)),
            O.update(this.updatePoint, !0));
        }),
        (this.handlePointerUp = (e, t) => {
          this.end();
          let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
          if (
            ((this.dragSnapToOrigin || !this.startEvent) && i && i(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          let a = td(
            e.type === `pointercancel`
              ? this.lastMoveEventInfo
              : $u(t, this.transformPagePoint),
            this.history,
          );
          (this.startEvent && n && n(e, a), r && r(e, a));
        }),
        !mo(e))
      )
        return;
      ((this.dragSnapToOrigin = i),
        (this.handlers = t),
        (this.transformPagePoint = n),
        (this.distanceThreshold = a),
        (this.contextWindow = r || window));
      let s = $u(Gu(e), this.transformPagePoint),
        { point: c } = s,
        { timestamp: l } = k;
      this.history = [_(_({}, c), {}, { timestamp: l })];
      let { onSessionStart: u } = t;
      (u && u(e, td(s, this.history)),
        (this.removeListeners = vt(
          qu(this.contextWindow, `pointermove`, this.handlePointerMove),
          qu(this.contextWindow, `pointerup`, this.handlePointerUp),
          qu(this.contextWindow, `pointercancel`, this.handlePointerUp),
        )),
        o && this.startScrollTracking(o));
    }
    startScrollTracking(e) {
      let t = e.parentElement;
      for (; t;) {
        let e = getComputedStyle(t);
        ((Zu.has(e.overflowX) || Zu.has(e.overflowY)) &&
          this.scrollPositions.set(t, { x: t.scrollLeft, y: t.scrollTop }),
          (t = t.parentElement));
      }
      (this.scrollPositions.set(window, {
        x: window.scrollX,
        y: window.scrollY,
      }),
        window.addEventListener(`scroll`, this.onElementScroll, {
          capture: !0,
        }),
        window.addEventListener(`scroll`, this.onWindowScroll),
        (this.removeScrollListeners = () => {
          (window.removeEventListener(`scroll`, this.onElementScroll, {
            capture: !0,
          }),
            window.removeEventListener(`scroll`, this.onWindowScroll));
        }));
    }
    handleScroll(e) {
      let t = this.scrollPositions.get(e);
      if (!t) return;
      let n = e === window,
        r = n
          ? { x: window.scrollX, y: window.scrollY }
          : { x: e.scrollLeft, y: e.scrollTop },
        i = { x: r.x - t.x, y: r.y - t.y };
      (i.x === 0 && i.y === 0) ||
        (n
          ? this.lastMoveEventInfo &&
            ((this.lastMoveEventInfo.point.x += i.x),
            (this.lastMoveEventInfo.point.y += i.y))
          : this.history.length > 0 &&
            ((this.history[0].x -= i.x), (this.history[0].y -= i.y)),
        this.scrollPositions.set(e, r),
        O.update(this.updatePoint, !0));
    }
    updateHandlers(e) {
      this.handlers = e;
    }
    end() {
      (this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        Zt(this.updatePoint));
    }
  };
function $u(e, t) {
  return t ? { point: t(e.point) } : e;
}
function ed(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function td({ point: e }, t) {
  return {
    point: e,
    delta: ed(e, rd(t)),
    offset: ed(e, nd(t)),
    velocity: id(t, 0.1),
  };
}
function nd(e) {
  return e[0];
}
function rd(e) {
  return e[e.length - 1];
}
function id(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = rd(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > xt(t)));) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] &&
    e.length > 2 &&
    i.timestamp - r.timestamp > xt(t) * 2 &&
    (r = e[1]);
  let a = St(i.timestamp - r.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  let o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function ad(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? N(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? N(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function od(e, t, n) {
  return {
    min: t === void 0 ? void 0 : e.min + t,
    max: n === void 0 ? void 0 : e.max + n - (e.max - e.min),
  };
}
function sd(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: od(e.x, n, i), y: od(e.y, t, r) };
}
function cd(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function ld(e, t) {
  return { x: cd(e.x, t.x), y: cd(e.y, t.y) };
}
function ud(e, t) {
  let n = 0.5,
    r = L(e),
    i = L(t);
  return (
    i > r
      ? (n = yt(t.min, t.max - r, e.min))
      : r > i && (n = yt(e.min, e.max - i, t.min)),
    lt(0, 1, n)
  );
}
function dd(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var fd = 0.35;
function pd(e = fd) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = fd),
    { x: md(e, `left`, `right`), y: md(e, `top`, `bottom`) }
  );
}
function md(e, t, n) {
  return { min: hd(e, t), max: hd(e, n) };
}
function hd(e, t) {
  return typeof e == `number` ? e : e[t] || 0;
}
g();
var gd = new WeakMap(),
  _d = class {
    constructor(e) {
      ((this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = I()),
        (this.latestPointerEvent = null),
        (this.latestPanInfo = null),
        (this.visualElement = e));
    }
    start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
      let { presenceContext: r } = this.visualElement;
      if (r && r.isPresent === !1) return;
      let i = (e) => {
          (t && this.snapToCursor(Gu(e).point), this.stopAnimation());
        },
        a = (e, t) => {
          let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
          if (
            n &&
            !r &&
            (this.openDragLock && this.openDragLock(),
            (this.openDragLock = co(n)),
            !this.openDragLock)
          )
            return;
          ((this.latestPointerEvent = e),
            (this.latestPanInfo = t),
            (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            Gc((e) => {
              let t = this.getAxisMotionValue(e).get() || 0;
              if (Tn.test(t)) {
                let { projection: n } = this.visualElement;
                if (n && n.layout) {
                  let r = n.layout.layoutBox[e];
                  r && (t = L(r) * (parseFloat(t) / 100));
                }
              }
              this.originPoint[e] = t;
            }),
            i && O.update(() => i(e, t), !1, !0),
            Ta(this.visualElement, `transform`));
          let { animationState: a } = this.visualElement;
          a && a.setActive(`whileDrag`, !0);
        },
        o = (e, t) => {
          ((this.latestPointerEvent = e), (this.latestPanInfo = t));
          let {
            dragPropagation: n,
            dragDirectionLock: r,
            onDirectionLock: i,
            onDrag: a,
          } = this.getProps();
          if (!n && !this.openDragLock) return;
          let { offset: o } = t;
          if (r && this.currentDirection === null) {
            ((this.currentDirection = xd(o)),
              this.currentDirection !== null && i && i(this.currentDirection));
            return;
          }
          (this.updateAxis(`x`, t.point, o),
            this.updateAxis(`y`, t.point, o),
            this.visualElement.render(),
            a && O.update(() => a(e, t), !1, !0));
        },
        s = (e, t) => {
          ((this.latestPointerEvent = e),
            (this.latestPanInfo = t),
            this.stop(e, t),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null));
        },
        c = () => {
          let { dragSnapToOrigin: e } = this.getProps();
          (e || this.constraints) && this.startAnimation({ x: 0, y: 0 });
        },
        { dragSnapToOrigin: l } = this.getProps();
      this.panSession = new Qu(
        e,
        {
          onSessionStart: i,
          onStart: a,
          onMove: o,
          onSessionEnd: s,
          resumeAnimation: c,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: l,
          distanceThreshold: n,
          contextWindow: Ju(this.visualElement),
          element: this.visualElement.current,
        },
      );
    }
    stop(e, t) {
      let n = e || this.latestPointerEvent,
        r = t || this.latestPanInfo,
        i = this.isDragging;
      if ((this.cancel(), !i || !r || !n)) return;
      let { velocity: a } = r;
      this.startAnimation(a);
      let { onDragEnd: o } = this.getProps();
      o && O.postRender(() => o(n, r));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: t } = this.visualElement;
      (e && (e.isAnimationBlocked = !1), this.endPanSession());
      let { dragPropagation: n } = this.getProps();
      (!n &&
        this.openDragLock &&
        (this.openDragLock(), (this.openDragLock = null)),
        t && t.setActive(`whileDrag`, !1));
    }
    endPanSession() {
      (this.panSession && this.panSession.end(), (this.panSession = void 0));
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps();
      if (!n || !bd(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        a = this.originPoint[e] + n[e];
      (this.constraints &&
        this.constraints[e] &&
        (a = ad(a, this.constraints[e], this.elastic[e])),
        i.set(a));
    }
    resolveConstraints() {
      var e;
      let { dragConstraints: t, dragElastic: n } = this.getProps(),
        r =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : (e = this.visualElement.projection) == null
              ? void 0
              : e.layout,
        i = this.constraints;
      (t && ju(t)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : t && r
          ? (this.constraints = sd(r.layoutBox, t))
          : (this.constraints = !1),
        (this.elastic = pd(n)),
        i !== this.constraints &&
          !ju(t) &&
          r &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          Gc((e) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(e) &&
              (this.constraints[e] = dd(r.layoutBox[e], this.constraints[e]));
          }));
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !ju(e)) return !1;
      let n = e.current,
        { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      let i = Ns(n, r.root, this.visualElement.getTransformPagePoint()),
        a = ld(r.layout.layoutBox, i);
      if (t) {
        let e = t(ms(a));
        ((this.hasMutatedConstraints = !!e), e && (a = ps(e)));
      }
      return a;
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: a,
          onDragTransitionEnd: o,
        } = this.getProps(),
        s = this.constraints || {},
        c = Gc((o) => {
          if (!bd(o, t, this.currentDirection)) return;
          let c = (s && s[o]) || {};
          (a === !0 || a === o) && (c = { min: 0, max: 0 });
          let l = r ? 200 : 1e6,
            u = r ? 40 : 1e7,
            d = _(
              _(
                {
                  type: `inertia`,
                  velocity: n ? e[o] : 0,
                  bounceStiffness: l,
                  bounceDamping: u,
                  timeConstant: 750,
                  restDelta: 1,
                  restSpeed: 10,
                },
                i,
              ),
              c,
            );
          return this.startAxisValueAnimation(o, d);
        });
      return Promise.all(c).then(o);
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e);
      return (
        Ta(this.visualElement, e),
        n.start(la(e, n, 0, t, this.visualElement, !1))
      );
    }
    stopAnimation() {
      Gc((e) => this.getAxisMotionValue(e).stop());
    }
    getAxisMotionValue(e) {
      let t = `_drag${e.toUpperCase()}`,
        n = this.visualElement.getProps();
      return (
        n[t] ||
        this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
      );
    }
    snapToCursor(e) {
      Gc((t) => {
        let { drag: n } = this.getProps();
        if (!bd(t, n, this.currentDirection)) return;
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          let { min: n, max: a } = r.layout.layoutBox[t],
            o = i.get() || 0;
          i.set(e[t] - N(n, a, 0.5) + o);
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!ju(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = { x: 0, y: 0 };
      Gc((e) => {
        let t = this.getAxisMotionValue(e);
        if (t && this.constraints !== !1) {
          let n = t.get();
          r[e] = ud({ min: n, max: n }, this.constraints[e]);
        }
      });
      let { transformTemplate: i } = this.visualElement.getProps();
      ((this.visualElement.current.style.transform = i ? i({}, ``) : `none`),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        (this.constraints = !1),
        this.resolveConstraints(),
        Gc((t) => {
          if (!bd(t, e, null)) return;
          let n = this.getAxisMotionValue(t),
            { min: i, max: a } = this.constraints[t];
          n.set(N(i, a, r[t]));
        }),
        this.visualElement.render());
    }
    addListeners() {
      if (!this.visualElement.current) return;
      gd.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = qu(e, `pointerdown`, (t) => {
          let { drag: n, dragListener: r = !0 } = this.getProps(),
            i = t.target,
            a = i !== e && vo(i);
          n && r && !a && this.start(t);
        }),
        n,
        r = () => {
          let { dragConstraints: t } = this.getProps();
          ju(t) &&
            t.current &&
            ((this.constraints = this.resolveRefConstraints()),
            n ||
              (n = yd(e, t.current, () =>
                this.scalePositionWithinConstraints(),
              )));
        },
        { projection: i } = this.visualElement,
        a = i.addEventListener(`measure`, r);
      (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
        O.read(r));
      let o = rl(window, `resize`, () => this.scalePositionWithinConstraints()),
        s = i.addEventListener(
          `didUpdate`,
          ({ delta: e, hasLayoutChanged: t }) => {
            this.isDragging &&
              t &&
              (Gc((t) => {
                let n = this.getAxisMotionValue(t);
                n &&
                  ((this.originPoint[t] += e[t].translate),
                  n.set(n.get() + e[t].translate));
              }),
              this.visualElement.render());
          },
        );
      return () => {
        (o(), t(), a(), s && s(), n && n());
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: a = fd,
          dragMomentum: o = !0,
        } = e;
      return _(
        _({}, e),
        {},
        {
          drag: t,
          dragDirectionLock: n,
          dragPropagation: r,
          dragConstraints: i,
          dragElastic: a,
          dragMomentum: o,
        },
      );
    }
  };
function vd(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function yd(e, t, n) {
  let r = Bo(e, vd(n)),
    i = Bo(t, vd(n));
  return () => {
    (r(), i());
  };
}
function bd(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function xd(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = `y`) : Math.abs(e.x) > t && (n = `x`), n);
}
var Sd = class extends fs {
    constructor(e) {
      (super(e),
        (this.removeGroupControls = gt),
        (this.removeListeners = gt),
        (this.controls = new _d(e)));
    }
    mount() {
      let { dragControls: e } = this.node.getProps();
      (e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || gt));
    }
    update() {
      let { dragControls: e } = this.node.getProps(),
        { dragControls: t } = this.node.prevProps || {};
      e !== t &&
        (this.removeGroupControls(),
        e && (this.removeGroupControls = e.subscribe(this.controls)));
    }
    unmount() {
      (this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession());
    }
  },
  Cd = (e) => (t, n) => {
    e && O.update(() => e(t, n), !1, !0);
  },
  wd = class extends fs {
    constructor() {
      (super(...arguments), (this.removePointerDownListener = gt));
    }
    onPointerDown(e) {
      this.session = new Qu(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: Ju(this.node),
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: e,
        onPanStart: t,
        onPan: n,
        onPanEnd: r,
      } = this.node.getProps();
      return {
        onSessionStart: Cd(e),
        onStart: Cd(t),
        onMove: Cd(n),
        onEnd: (e, t) => {
          (delete this.session, r && O.postRender(() => r(e, t)));
        },
      };
    }
    mount() {
      this.removePointerDownListener = qu(
        this.node.current,
        `pointerdown`,
        (e) => this.onPointerDown(e),
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      (this.removePointerDownListener(), this.session && this.session.end());
    }
  };
g();
var Td = !1,
  Ed = class extends T.Component {
    componentDidMount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: i } = e;
      (i &&
        (t.group && t.group.add(i),
        n && n.register && r && n.register(i),
        Td && i.root.didUpdate(),
        i.addEventListener(`animationComplete`, () => {
          this.safeToRemove();
        }),
        i.setOptions(
          _(
            _({}, i.options),
            {},
            {
              layoutDependency: this.props.layoutDependency,
              onExitComplete: () => this.safeToRemove(),
            },
          ),
        )),
        (ll.hasEverUpdated = !0));
    }
    getSnapshotBeforeUpdate(e) {
      let {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i,
        } = this.props,
        { projection: a } = n;
      return a
        ? ((a.isPresent = i),
          e.layoutDependency !== t &&
            a.setOptions(_(_({}, a.options), {}, { layoutDependency: t })),
          (Td = !0),
          r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i
            ? a.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? a.promote()
              : a.relegate() ||
                O.postRender(() => {
                  let e = a.getStack();
                  (!e || !e.members.length) && this.safeToRemove();
                })),
          null)
        : null;
    }
    componentDidUpdate() {
      let { visualElement: e, layoutAnchor: t } = this.props,
        { projection: n } = e;
      n &&
        ((n.options.layoutAnchor = t),
        n.root.didUpdate(),
        io.postRender(() => {
          !n.currentAnimation && n.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e;
      ((Td = !0),
        r &&
          (r.scheduleCheckAfterUnmount(),
          t && t.group && t.group.remove(r),
          n && n.deregister && n.deregister(r)));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function Dd(e) {
  let [t, n] = ql(),
    r = (0, T.useContext)(rt);
  return (0, E.jsx)(
    Ed,
    _(
      _({}, e),
      {},
      {
        layoutGroup: r,
        switchLayoutGroup: (0, T.useContext)(Au),
        isPresent: t,
        safeToRemove: n,
      },
    ),
  );
}
var Od = {
  pan: { Feature: wd },
  drag: { Feature: Sd, ProjectionNode: Gl, MeasureLayout: Dd },
};
function kd(e, t, n) {
  let { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive(`whileHover`, n === `Start`);
  let i = r[`onHover` + n];
  i && O.postRender(() => i(t, Gu(t)));
}
var Ad = class extends fs {
    mount() {
      let { current: e } = this.node;
      e &&
        (this.unmount = fo(
          e,
          (e, t) => (kd(this.node, t, `Start`), (e) => kd(this.node, e, `End`)),
        ));
    }
    unmount() {}
  },
  jd = class extends fs {
    constructor() {
      (super(...arguments), (this.isActive = !1));
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(`:focus-visible`);
      } catch (t) {
        e = !0;
      }
      !e ||
        !this.node.animationState ||
        (this.node.animationState.setActive(`whileFocus`, !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive(`whileFocus`, !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = vt(
        rl(this.node.current, `focus`, () => this.onFocus()),
        rl(this.node.current, `blur`, () => this.onBlur()),
      );
    }
    unmount() {}
  };
function Md(e, t, n) {
  let { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive(`whileTap`, n === `Start`);
  let i = r[`onTap` + (n === `End` ? `` : n)];
  i && O.postRender(() => i(t, Gu(t)));
}
var Nd = class extends fs {
  mount() {
    let { current: e } = this.node;
    if (!e) return;
    let { globalTapTarget: t, propagate: n } = this.node.props;
    this.unmount = To(
      e,
      (e, t) => (
        Md(this.node, t, `Start`),
        (e, { success: t }) => Md(this.node, e, t ? `End` : `Cancel`)
      ),
      {
        useGlobalTarget: t,
        stopPropagation: (n == null ? void 0 : n.tap) === !1,
      },
    );
  }
  unmount() {}
};
g();
var Pd = [`root`],
  Fd = new WeakMap(),
  Id = new WeakMap(),
  Ld = (e) => {
    let t = Fd.get(e.target);
    t && t(e);
  },
  Rd = (e) => {
    e.forEach(Ld);
  };
function zd(e) {
  let { root: t } = e,
    n = x(e, Pd),
    r = t || document;
  Id.has(r) || Id.set(r, {});
  let i = Id.get(r),
    a = JSON.stringify(n);
  return (
    i[a] || (i[a] = new IntersectionObserver(Rd, _({ root: t }, n))),
    i[a]
  );
}
function Bd(e, t, n) {
  let r = zd(t);
  return (
    Fd.set(e, n),
    r.observe(e),
    () => {
      (Fd.delete(e), r.unobserve(e));
    }
  );
}
var Vd = { some: 0, all: 1 },
  Hd = class extends fs {
    constructor() {
      (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
    }
    startObserver() {
      var e;
      (e = this.stopObserver) == null || e.call(this);
      let { viewport: t = {} } = this.node.getProps(),
        { root: n, margin: r, amount: i = `some`, once: a } = t,
        o = {
          root: n ? n.current : void 0,
          rootMargin: r,
          threshold: typeof i == `number` ? i : Vd[i],
        },
        s = (e) => {
          let { isIntersecting: t } = e;
          if (
            this.isInView === t ||
            ((this.isInView = t), a && !t && this.hasEnteredView)
          )
            return;
          (t && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive(`whileInView`, t));
          let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(),
            i = t ? n : r;
          i && i(e);
        };
      this.stopObserver = Bd(this.node.current, o, s);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > `u`) return;
      let { props: e, prevProps: t } = this.node;
      [`amount`, `margin`, `root`].some(Ud(e, t)) && this.startObserver();
    }
    unmount() {
      var e;
      ((e = this.stopObserver) == null || e.call(this),
        (this.hasEnteredView = !1),
        (this.isInView = !1));
    }
  };
function Ud({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var Wd = {
    inView: { Feature: Hd },
    tap: { Feature: Nd },
    focus: { Feature: jd },
    hover: { Feature: Ad },
  },
  Gd = { layout: { ProjectionNode: Gl, MeasureLayout: Dd } };
g();
var Kd = zu(_(_(_(_({}, Wu), Wd), Od), Gd), Bu);
function qd({ children: e, strength: t = 0.5 }) {
  let n = (0, T.useRef)(null),
    [r, i] = (0, T.useState)({ x: 0, y: 0 }),
    a = (e) => {
      let { clientX: r, clientY: a } = e,
        {
          height: o,
          width: s,
          left: c,
          top: l,
        } = n.current.getBoundingClientRect(),
        u = r - (c + s / 2),
        d = a - (l + o / 2);
      i({ x: u * t, y: d * t });
    },
    o = () => {
      i({ x: 0, y: 0 });
    },
    { x: s, y: c } = r;
  return (0, E.jsx)(Kd.div, {
    style: { position: `relative` },
    ref: n,
    onMouseMove: a,
    onMouseLeave: o,
    animate: { x: s, y: c },
    transition: { type: `spring`, stiffness: 150, damping: 15, mass: 0.1 },
    children: e,
  });
}
var Jd = [
  { href: `/`, label: `HOME`, page: !0 },
  { href: `/portfolio`, label: `WORKS`, page: !0 },
  { href: `/services`, label: `SERVICES`, page: !0 },
  { href: `/about`, label: `ABOUT`, page: !0 },
  { href: `/blog`, label: `BLOG`, page: !0 },
  { href: `/contact`, label: `CONTACT`, page: !0 },
];
function Yd() {
  var e;
  let { data: t } = nt(),
    [n, r] = (0, T.useState)(!1),
    [i, s] = (0, T.useState)(!1),
    [c, l] = (0, T.useState)(null),
    u = o(),
    d = `https://wa.me/${(((e = t.social) == null ? void 0 : e.wa) || `+8801731186929`).replace(/\D/g, ``)}?text=Hi Al-Amin! I visited your portfolio and would like to discuss a project.`,
    [f, p] = (0, T.useState)(() => {
      let e = localStorage.getItem(`alamin_theme`);
      try {
        let t = JSON.parse(e);
        return (t == null ? void 0 : t.isDark) === !1 ? `light` : `dark`;
      } catch (t) {
        return e === `light` ? `light` : `dark`;
      }
    });
  ((0, T.useEffect)(() => {
    document.documentElement.setAttribute(`data-theme`, f);
    let e = { preset: {}, isDark: f === `dark` };
    localStorage.setItem(`alamin_theme`, JSON.stringify(e));
  }, [f]),
    (0, T.useEffect)(() => {
      let e = () => r(window.scrollY > 50);
      return (
        window.addEventListener(`scroll`, e),
        () => window.removeEventListener(`scroll`, e)
      );
    }, []),
    (0, T.useEffect)(() => {
      s(!1);
    }, [u]));
  let m = (e) =>
    e === `/` ? u.pathname === `/` : u.pathname.startsWith(e.replace(`/#`, ``));
  return (0, E.jsxs)(E.Fragment, {
    children: [
      (0, E.jsx)(`header`, {
        className: `${D.nav} ${n ? D.scrolled : ``} glass`,
        children: (0, E.jsxs)(`div`, {
          className: D.inner,
          children: [
            (0, E.jsx)(a, { to: `/`, className: D.logo, children: `Al-Amin` }),
            (0, E.jsx)(`nav`, {
              className: D.links,
              children: Jd.map((e) =>
                e.dropdown
                  ? (0, E.jsxs)(
                      `div`,
                      {
                        className: D.dropdownContainer,
                        onMouseEnter: () => l(e.label),
                        onMouseLeave: () => l(null),
                        children: [
                          (0, E.jsx)(qd, {
                            children: (0, E.jsxs)(`div`, {
                              className: `${D.link} ${c === e.label ? D.activeLink : ``}`,
                              children: [
                                e.label,
                                e.badge &&
                                  (0, E.jsx)(`span`, {
                                    className: D.badge,
                                    children: e.badge,
                                  }),
                                (0, E.jsx)(`i`, {
                                  className: `fas fa-chevron-down`,
                                  style: {
                                    fontSize: `0.65rem`,
                                    marginLeft: `6px`,
                                    opacity: 0.5,
                                  },
                                }),
                              ],
                            }),
                          }),
                          (0, E.jsx)(`div`, {
                            className: `${D.dropdownMenu} ${c === e.label ? D.showDropdown : ``}`,
                            children: (0, E.jsx)(`div`, {
                              className: D.dropdownInner,
                              children: e.dropdown.map((e) =>
                                e.external
                                  ? (0, E.jsxs)(
                                      `a`,
                                      {
                                        href: e.href,
                                        target: `_blank`,
                                        rel: `noreferrer`,
                                        className: D.dropdownLink,
                                        children: [
                                          (0, E.jsx)(`div`, {
                                            className: D.dropIcon,
                                            children: (0, E.jsx)(`i`, {
                                              className: e.icon,
                                            }),
                                          }),
                                          (0, E.jsxs)(`div`, {
                                            children: [
                                              (0, E.jsx)(`div`, {
                                                className: D.dropLabel,
                                                children: e.label,
                                              }),
                                              (0, E.jsx)(`div`, {
                                                className: D.dropDesc,
                                                children: e.desc,
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      e.href,
                                    )
                                  : (0, E.jsxs)(
                                      a,
                                      {
                                        to: e.href,
                                        className: D.dropdownLink,
                                        children: [
                                          (0, E.jsx)(`div`, {
                                            className: D.dropIcon,
                                            children: (0, E.jsx)(`i`, {
                                              className: e.icon,
                                            }),
                                          }),
                                          (0, E.jsxs)(`div`, {
                                            children: [
                                              (0, E.jsx)(`div`, {
                                                className: D.dropLabel,
                                                children: e.label,
                                              }),
                                              (0, E.jsx)(`div`, {
                                                className: D.dropDesc,
                                                children: e.desc,
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      e.href,
                                    ),
                              ),
                            }),
                          }),
                        ],
                      },
                      e.label,
                    )
                  : e.page
                    ? (0, E.jsx)(
                        qd,
                        {
                          children: (0, E.jsx)(a, {
                            to: e.href,
                            className: `${D.link} ${m(e.href) ? D.activeLink : ``}`,
                            children: e.label,
                          }),
                        },
                        e.href,
                      )
                    : (0, E.jsx)(
                        qd,
                        {
                          children: (0, E.jsx)(`a`, {
                            href: e.href,
                            className: D.link,
                            children: e.label,
                          }),
                        },
                        e.href,
                      ),
              ),
            }),
            (0, E.jsxs)(`div`, {
              className: D.actions,
              children: [
                (0, E.jsx)(qd, {
                  children: (0, E.jsx)(`button`, {
                    className: D.themeBtn,
                    onClick: () => p((e) => (e === `dark` ? `light` : `dark`)),
                    title: f === `dark` ? `Light mode` : `Dark mode`,
                    children: (0, E.jsx)(`i`, {
                      className: `fas fa-${f === `dark` ? `sun` : `moon`}`,
                    }),
                  }),
                }),
                (0, E.jsx)(`a`, {
                  href: d,
                  target: `_blank`,
                  rel: `noreferrer`,
                  className: D.waIconBtn,
                  title: `Chat on WhatsApp`,
                  children: (0, E.jsx)(`i`, { className: `fab fa-whatsapp` }),
                }),
                (0, E.jsx)(qd, {
                  children: (0, E.jsx)(`a`, {
                    href: `/contact`,
                    className: D.cta,
                    onClick: () =>
                      window.gtag &&
                      window.gtag(`event`, `hire_me_click`, {
                        event_category: `engagement`,
                      }),
                    children: `HIRE ME`,
                  }),
                }),
                (0, E.jsxs)(`button`, {
                  className: D.hamburger,
                  "aria-label": `Toggle menu`,
                  "aria-expanded": i,
                  onClick: () => s(!0),
                  children: [
                    (0, E.jsx)(`span`, {}),
                    (0, E.jsx)(`span`, {}),
                    (0, E.jsx)(`span`, {}),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      i &&
        (0, E.jsx)(`div`, {
          className: D.mobileOverlay,
          onClick: () => s(!1),
          children: (0, E.jsxs)(`div`, {
            className: D.mobileMenu,
            onClick: (e) => e.stopPropagation(),
            children: [
              (0, E.jsx)(`button`, {
                className: D.mobileClose,
                onClick: () => s(!1),
                children: (0, E.jsx)(`i`, { className: `fas fa-times` }),
              }),
              (0, E.jsx)(`div`, {
                className: D.mobileLogo,
                children: `Al-Amin`,
              }),
              Jd.map((e) =>
                e.dropdown
                  ? (0, E.jsxs)(
                      `div`,
                      {
                        className: D.mobileDropdownGroup,
                        children: [
                          (0, E.jsxs)(`div`, {
                            className: D.mobileDropdownLabel,
                            children: [
                              e.label,
                              ` `,
                              e.badge &&
                                (0, E.jsx)(`span`, {
                                  className: D.badge,
                                  children: e.badge,
                                }),
                            ],
                          }),
                          e.dropdown.map((e) => {
                            let t = e.label === `WhatsApp Chat` ? d : e.href;
                            return e.external || e.label === `WhatsApp Chat`
                              ? (0, E.jsxs)(
                                  `a`,
                                  {
                                    href: t,
                                    target: `_blank`,
                                    rel: `noreferrer`,
                                    className: D.mobileLink,
                                    onClick: () => s(!1),
                                    children: [
                                      (0, E.jsx)(`i`, {
                                        className: e.icon,
                                        style: {
                                          width: `20px`,
                                          fontSize: `0.8rem`,
                                          opacity: 0.7,
                                        },
                                      }),
                                      ` `,
                                      e.label,
                                    ],
                                  },
                                  e.href,
                                )
                              : (0, E.jsxs)(
                                  a,
                                  {
                                    to: e.href,
                                    className: `${D.mobileLink} ${m(e.href) ? D.mobileLinkActive : ``}`,
                                    onClick: () => s(!1),
                                    children: [
                                      (0, E.jsx)(`i`, {
                                        className: e.icon,
                                        style: {
                                          width: `20px`,
                                          fontSize: `0.8rem`,
                                          opacity: 0.7,
                                        },
                                      }),
                                      ` `,
                                      e.label,
                                    ],
                                  },
                                  e.href,
                                );
                          }),
                        ],
                      },
                      e.label,
                    )
                  : e.page
                    ? (0, E.jsx)(
                        a,
                        {
                          to: e.href,
                          className: `${D.mobileLink} ${m(e.href) ? D.mobileLinkActive : ``}`,
                          onClick: () => s(!1),
                          children: e.label,
                        },
                        e.href,
                      )
                    : (0, E.jsx)(
                        `a`,
                        {
                          href: e.href,
                          className: D.mobileLink,
                          onClick: () => s(!1),
                          children: e.label,
                        },
                        e.href,
                      ),
              ),
              (0, E.jsxs)(`a`, {
                href: `/contact`,
                className: D.mobileCta,
                onClick: () => s(!1),
                children: [
                  (0, E.jsx)(`i`, { className: `fas fa-paper-plane` }),
                  ` HIRE ME`,
                ],
              }),
              (0, E.jsxs)(`a`, {
                href: d,
                target: `_blank`,
                rel: `noreferrer`,
                className: D.mobileWa,
                onClick: () => s(!1),
                children: [
                  (0, E.jsx)(`i`, { className: `fab fa-whatsapp` }),
                  ` WHATSAPP CHAT`,
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
var Xd = {
  wrap: `_wrap_997fh_1`,
  waBtn: `_waBtn_997fh_4`,
  waTooltip: `_waTooltip_997fh_14`,
  waPulse: `_waPulse_997fh_1`,
  topBtn: `_topBtn_997fh_35`,
  topVisible: `_topVisible_997fh_45`,
};
function Zd() {
  var e;
  let { data: t } = nt(),
    [n, r] = (0, T.useState)(!1);
  ((((e = t.social) == null ? void 0 : e.wa) || `+8801731186929`).replace(
    /\D/g,
    ``,
  ),
    (0, T.useEffect)(() => {
      let e = () => r(window.scrollY > 400);
      return (
        window.addEventListener(`scroll`, e, { passive: !0 }),
        () => window.removeEventListener(`scroll`, e)
      );
    }, []));
  function i() {
    window.scrollTo({ top: 0, behavior: `smooth` });
  }
  return (0, E.jsx)(`div`, {
    className: Xd.wrap,
    children: (0, E.jsx)(`button`, {
      className: `${Xd.topBtn} ${n ? Xd.topVisible : ``}`,
      onClick: i,
      "aria-label": `Back to top`,
      title: `Back to top`,
      children: (0, E.jsx)(`i`, { className: `fas fa-chevron-up` }),
    }),
  });
}
var R = {
  footer: `_footer_1f5we_1`,
  top: `_top_1f5we_2`,
  logo: `_logo_1f5we_7`,
  tagline: `_tagline_1f5we_8`,
  waLink: `_waLink_1f5we_9`,
  socials: `_socials_1f5we_11`,
  social: `_social_1f5we_11`,
  colTitle: `_colTitle_1f5we_15`,
  linkList: `_linkList_1f5we_16`,
  link: `_link_1f5we_16`,
  contactList: `_contactList_1f5we_19`,
  availBadge: `_availBadge_1f5we_23`,
  availDot: `_availDot_1f5we_24`,
  pulse: `_pulse_1f5we_1`,
  bottom: `_bottom_1f5we_27`,
  hint: `_hint_1f5we_28`,
  copy: `_copy_1f5we_29`,
  adminDot: `_adminDot_1f5we_30`,
  bottomLinks: `_bottomLinks_1f5we_31`,
};
function Qd({ onAdminClick: e }) {
  var t, n;
  let { data: r } = nt(),
    i = r.social || {},
    o = new Date().getFullYear(),
    s = [
      { label: `Home`, href: `/` },
      { label: `About`, href: `/about` },
      { label: `Services`, href: `/services` },
      { label: `Portfolio`, href: `/portfolio` },
      { label: `Blog`, href: `/blog` },
      { label: `Tools`, href: `/services` },
      { label: `Contact`, href: `/contact` },
    ],
    c = [
      { icon: `fab fa-facebook-f`, href: i.fb, label: `Facebook` },
      { icon: `fab fa-linkedin-in`, href: i.li, label: `LinkedIn` },
      { icon: `fab fa-instagram`, href: i.ig, label: `Instagram` },
      { icon: `fab fa-behance`, href: i.beh, label: `Behance` },
      { icon: `fab fa-youtube`, href: i.yt, label: `YouTube` },
    ].filter((e) => e.href && e.href !== `#`);
  return (0, E.jsxs)(`footer`, {
    className: R.footer,
    children: [
      (0, E.jsxs)(`div`, {
        className: R.top,
        children: [
          (0, E.jsxs)(`div`, {
            className: R.brand,
            children: [
              (0, E.jsx)(`div`, { className: R.logo, children: `Al-Amin` }),
              (0, E.jsxs)(`p`, {
                className: R.tagline,
                children: [
                  `Graphic Designer & AI Expert`,
                  (0, E.jsx)(`br`, {}),
                  `Narayanganj, Bangladesh`,
                ],
              }),
              (0, E.jsxs)(`a`, {
                href: `https://wa.me/${(i.wa || `+8801731186929`).replace(/\D/g, ``)}`,
                target: `_blank`,
                rel: `noreferrer`,
                className: R.waLink,
                children: [
                  (0, E.jsx)(`i`, { className: `fab fa-whatsapp` }),
                  ` +880 1731-186929`,
                ],
              }),
              (0, E.jsx)(`div`, {
                className: R.socials,
                children: c.map((e) =>
                  (0, E.jsx)(
                    `a`,
                    {
                      href: e.href,
                      target: `_blank`,
                      rel: `noreferrer`,
                      className: R.social,
                      "aria-label": e.label,
                      children: (0, E.jsx)(`i`, { className: e.icon }),
                    },
                    e.label,
                  ),
                ),
              }),
            ],
          }),
          (0, E.jsxs)(`div`, {
            className: R.linksSection,
            children: [
              (0, E.jsx)(`h4`, {
                className: R.colTitle,
                children: `Quick Links`,
              }),
              (0, E.jsx)(`ul`, {
                className: R.linkList,
                children: s.map((e) =>
                  (0, E.jsx)(
                    `li`,
                    {
                      children: (0, E.jsx)(a, {
                        to: e.href,
                        className: R.link,
                        children: e.label,
                      }),
                    },
                    e.href,
                  ),
                ),
              }),
            ],
          }),
          (0, E.jsxs)(`div`, {
            className: R.servicesSection,
            children: [
              (0, E.jsx)(`h4`, { className: R.colTitle, children: `Services` }),
              (0, E.jsx)(`ul`, {
                className: R.linkList,
                children: r.services
                  .filter((e) => !e.hidden)
                  .slice(0, 7)
                  .map((e) =>
                    (0, E.jsx)(
                      `li`,
                      {
                        children: (0, E.jsx)(a, {
                          to: `/services`,
                          className: R.link,
                          children: e.title,
                        }),
                      },
                      e.id,
                    ),
                  ),
              }),
            ],
          }),
          (0, E.jsxs)(`div`, {
            className: R.contactSection,
            children: [
              (0, E.jsx)(`h4`, { className: R.colTitle, children: `Contact` }),
              (0, E.jsxs)(`ul`, {
                className: R.contactList,
                children: [
                  (0, E.jsxs)(`li`, {
                    children: [
                      (0, E.jsx)(`i`, { className: `fas fa-envelope` }),
                      (0, E.jsx)(`a`, {
                        href: `mailto:${((t = r.social) == null ? void 0 : t.email) || `binashad7@gmail.com`}`,
                        className: R.link,
                        children:
                          ((n = r.social) == null ? void 0 : n.email) ||
                          `binashad7@gmail.com`,
                      }),
                    ],
                  }),
                  (0, E.jsxs)(`li`, {
                    children: [
                      (0, E.jsx)(`i`, { className: `fas fa-phone` }),
                      (0, E.jsx)(`a`, {
                        href: `tel:${(i.wa || `+8801731186929`).replace(/\D/g, ``)}`,
                        className: R.link,
                        children: i.wa || `+880 1731-186929`,
                      }),
                    ],
                  }),
                  (0, E.jsxs)(`li`, {
                    children: [
                      (0, E.jsx)(`i`, { className: `fas fa-map-marker-alt` }),
                      (0, E.jsx)(`span`, {
                        children: `Narayanganj, Bangladesh`,
                      }),
                    ],
                  }),
                  (0, E.jsxs)(`li`, {
                    children: [
                      (0, E.jsx)(`i`, { className: `fas fa-clock` }),
                      (0, E.jsx)(`span`, { children: `Mon–Sat: 9AM–9PM` }),
                    ],
                  }),
                ],
              }),
              (0, E.jsxs)(`div`, {
                className: R.availBadge,
                children: [
                  (0, E.jsx)(`span`, { className: R.availDot }),
                  `Available for new projects`,
                ],
              }),
            ],
          }),
        ],
      }),
      (0, E.jsxs)(`div`, {
        className: R.bottom,
        children: [
          (0, E.jsxs)(`div`, {
            className: R.copy,
            children: [
              `© `,
              o,
              ` Al-Amin Bin Ashad Ali. All rights reserved.`,
              (0, E.jsx)(`span`, {
                onClick: e,
                className: R.adminDot,
                title: ``,
              }),
            ],
          }),
          (0, E.jsxs)(`div`, {
            className: R.bottomLinks,
            children: [
              (0, E.jsx)(a, {
                to: `/services`,
                className: R.link,
                children: `Services`,
              }),
              (0, E.jsx)(a, {
                to: `/blog`,
                className: R.link,
                children: `Blog`,
              }),
              (0, E.jsx)(a, {
                to: `/contact`,
                className: R.link,
                children: `Hire Me`,
              }),
            ],
          }),
          (0, E.jsx)(`div`, { className: R.hint, children: `Crafted with ❤️` }),
        ],
      }),
    ],
  });
}
var $d = ({ pageData: e = {} }) => {
    let t = o(),
      { data: n } = nt(),
      r = `https://portfolio-alamin-79c1d.web.app`,
      i = `${r}${t.pathname}`,
      a = e.title || `Al-Amin Bin Ashad Ali - Graphic Designer & AI Expert`,
      s =
        e.description ||
        `Professional graphic designer and AI expert from Bangladesh. Specializing in brand design, logo design, web design, and artificial intelligence solutions.`,
      c =
        e.keywords ||
        `graphic designer, AI expert, logo design, brand design, web design, Bangladesh, Narayanganj, freelance designer, artificial intelligence`,
      l = e.image || `${r}/og-image.jpg`,
      d = {
        "@context": `https://schema.org`,
        "@type": `Person`,
        name: `Al-Amin Bin Ashad Ali`,
        jobTitle: `Graphic Designer & AI Expert`,
        description: s,
        url: r,
        image: `${r}/hero.png`,
        address: {
          "@type": `PostalAddress`,
          addressLocality: `Narayanganj`,
          addressCountry: `Bangladesh`,
        },
        email: `binashad7@gmail.com`,
        telephone: `+8801731186929`,
        sameAs: [
          `https://facebook.com/alaminbinashad`,
          `https://linkedin.com/in/alaminbinashad`,
          `https://github.com/binashad7-bit`,
        ],
        knowsAbout: [
          `Graphic Design`,
          `Logo Design`,
          `Brand Design`,
          `Web Design`,
          `Artificial Intelligence`,
          `Machine Learning`,
          `UI/UX Design`,
          `Freelancing`,
        ],
        offers: {
          "@type": `Offer`,
          itemOffered: {
            "@type": `Service`,
            name: `Graphic Design & AI Services`,
            description: `Professional graphic design and AI consulting services`,
          },
        },
      },
      f = () => {
        let e = t.pathname;
        if (e === `/portfolio` || e.startsWith(`/portfolio/`)) {
          var r;
          return {
            "@context": `https://schema.org`,
            "@type": `CollectionPage`,
            name: `Portfolio - Al-Amin Bin Ashad Ali`,
            description: `Browse my portfolio of graphic design projects, logo designs, brand identities, and AI projects`,
            url: i,
            mainEntity: {
              "@type": `ItemList`,
              itemListElement:
                ((r = n.portfolio) == null
                  ? void 0
                  : r.map((e, t) => ({
                      "@type": `CreativeWork`,
                      position: t + 1,
                      name: e.title,
                      description: e.description,
                      image: e.image,
                    }))) || [],
            },
          };
        }
        return e === `/services`
          ? {
              "@context": `https://schema.org`,
              "@type": `Service`,
              name: `Graphic Design & AI Services`,
              description: `Professional graphic design and artificial intelligence services`,
              provider: { "@type": `Person`, name: `Al-Amin Bin Ashad Ali` },
              serviceType: [
                `Logo Design`,
                `Brand Design`,
                `Web Design`,
                `AI Consulting`,
                `UI/UX Design`,
              ],
            }
          : e === `/contact`
            ? {
                "@context": `https://schema.org`,
                "@type": `ContactPage`,
                name: `Contact Al-Amin Bin Ashad Ali`,
                description: `Get in touch for graphic design and AI projects`,
                url: i,
              }
            : e === `/blog` || e.startsWith(`/blog/`)
              ? {
                  "@context": `https://schema.org`,
                  "@type": `Blog`,
                  name: `Design & AI Blog - Al-Amin Bin Ashad Ali`,
                  description: `Articles about graphic design, artificial intelligence, freelancing, and creative technology`,
                  url: i,
                }
              : null;
      },
      p = [d],
      m = f();
    return (
      m && p.push(m),
      (0, E.jsxs)(u, {
        children: [
          (0, E.jsx)(`title`, { children: a }),
          (0, E.jsx)(`meta`, { name: `description`, content: s }),
          (0, E.jsx)(`meta`, { name: `keywords`, content: c }),
          (0, E.jsx)(`meta`, {
            name: `author`,
            content: `Al-Amin Bin Ashad Ali`,
          }),
          (0, E.jsx)(`meta`, {
            name: `robots`,
            content: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`,
          }),
          (0, E.jsx)(`link`, { rel: `canonical`, href: i }),
          (0, E.jsx)(`meta`, { property: `og:type`, content: `website` }),
          (0, E.jsx)(`meta`, { property: `og:title`, content: a }),
          (0, E.jsx)(`meta`, { property: `og:description`, content: s }),
          (0, E.jsx)(`meta`, { property: `og:url`, content: i }),
          (0, E.jsx)(`meta`, { property: `og:image`, content: l }),
          (0, E.jsx)(`meta`, { property: `og:image:width`, content: `1200` }),
          (0, E.jsx)(`meta`, { property: `og:image:height`, content: `630` }),
          (0, E.jsx)(`meta`, {
            property: `og:image:alt`,
            content: `Al-Amin Bin Ashad Ali - Graphic Designer & AI Expert`,
          }),
          (0, E.jsx)(`meta`, {
            property: `og:site_name`,
            content: `Al-Amin Portfolio`,
          }),
          (0, E.jsx)(`meta`, { property: `og:locale`, content: `en_US` }),
          (0, E.jsx)(`meta`, {
            name: `twitter:card`,
            content: `summary_large_image`,
          }),
          (0, E.jsx)(`meta`, { name: `twitter:title`, content: a }),
          (0, E.jsx)(`meta`, { name: `twitter:description`, content: s }),
          (0, E.jsx)(`meta`, { name: `twitter:image`, content: l }),
          (0, E.jsx)(`meta`, {
            name: `twitter:creator`,
            content: `@alaminbinashad`,
          }),
          (0, E.jsx)(`meta`, {
            name: `twitter:site`,
            content: `@alaminbinashad`,
          }),
          (0, E.jsx)(`meta`, { name: `theme-color`, content: `#22c55e` }),
          (0, E.jsx)(`meta`, {
            name: `msapplication-TileColor`,
            content: `#22c55e`,
          }),
          (0, E.jsx)(`meta`, {
            name: `apple-mobile-web-app-capable`,
            content: `yes`,
          }),
          (0, E.jsx)(`meta`, {
            name: `apple-mobile-web-app-status-bar-style`,
            content: `default`,
          }),
          (0, E.jsx)(`meta`, {
            name: `apple-mobile-web-app-title`,
            content: `Al-Amin Portfolio`,
          }),
          (0, E.jsx)(`meta`, { name: `geo.region`, content: `BD` }),
          (0, E.jsx)(`meta`, { name: `geo.placename`, content: `Narayanganj` }),
          (0, E.jsx)(`meta`, { name: `ICBM`, content: `23.6238,90.4125` }),
          (0, E.jsx)(`meta`, { name: `language`, content: `English` }),
          (0, E.jsx)(`meta`, { name: `content-language`, content: `en` }),
          (0, E.jsx)(`meta`, { name: `distribution`, content: `global` }),
          (0, E.jsx)(`meta`, { name: `rating`, content: `general` }),
          (0, E.jsx)(`meta`, { name: `revisit-after`, content: `7 days` }),
          p.map((e, t) =>
            (0, E.jsx)(
              `script`,
              { type: `application/ld+json`, children: JSON.stringify(e) },
              t,
            ),
          ),
          (0, E.jsx)(`link`, {
            rel: `preconnect`,
            href: `https://fonts.googleapis.com`,
          }),
          (0, E.jsx)(`link`, {
            rel: `preconnect`,
            href: `https://fonts.gstatic.com`,
            crossOrigin: `anonymous`,
          }),
          (0, E.jsx)(`link`, {
            rel: `preconnect`,
            href: `https://www.googletagmanager.com`,
          }),
          (0, E.jsx)(`link`, {
            rel: `preconnect`,
            href: `https://api.imgbb.com`,
          }),
          (0, E.jsx)(`link`, {
            rel: `preconnect`,
            href: `https://api.emailjs.com`,
          }),
          (0, E.jsx)(`link`, {
            rel: `dns-prefetch`,
            href: `//fonts.googleapis.com`,
          }),
          (0, E.jsx)(`link`, {
            rel: `dns-prefetch`,
            href: `//www.googletagmanager.com`,
          }),
          (0, E.jsx)(`link`, { rel: `dns-prefetch`, href: `//api.imgbb.com` }),
        ],
      })
    );
  },
  ef = (0, T.lazy)(() =>
    h(() => import(`./Admin.js`), __vite__mapDeps([0, 1, 2, 3, 4])),
  ),
  tf = (0, T.lazy)(() =>
    h(() => import(`./AdminLogin.js`), __vite__mapDeps([5, 1, 2, 3, 6])),
  ),
  nf = (0, T.lazy)(() =>
    h(() => import(`./HomePage.js`), __vite__mapDeps([7, 1, 2, 3, 8, 9, 10])),
  ),
  rf = (0, T.lazy)(() =>
    h(
      () => import(`./PortfolioPage.js`),
      __vite__mapDeps([11, 2, 3, 1, 8, 9, 12]),
    ),
  ),
  af = (0, T.lazy)(() =>
    h(
      () => import(`./AboutPage.js`),
      __vite__mapDeps([13, 3, 1, 2, 14, 9, 15, 8, 16]),
    ),
  ),
  of = (0, T.lazy)(() =>
    h(
      () => import(`./ServicesPage.js`),
      __vite__mapDeps([17, 3, 1, 2, 14, 9, 15, 8, 18]),
    ),
  );
((0, T.lazy)(() =>
  h(
    () => import(`./ExperiencePage.js`),
    __vite__mapDeps([19, 3, 1, 2, 8, 9, 20]),
  ),
),
  (0, T.lazy)(() =>
    h(
      () => import(`./SkillsPage.js`),
      __vite__mapDeps([21, 3, 1, 2, 8, 9, 22]),
    ),
  ));
var sf = (0, T.lazy)(() =>
    h(
      () => import(`./ContactPage.js`),
      __vite__mapDeps([23, 1, 2, 3, 14, 9, 15, 8, 24]),
    ),
  ),
  cf = (0, T.lazy)(() =>
    h(() => import(`./BlogPage.js`), __vite__mapDeps([25, 2, 3, 1, 8, 9, 26])),
  ),
  lf = (0, T.lazy)(() =>
    h(
      () => import(`./BlogPostPage.js`),
      __vite__mapDeps([27, 1, 2, 3, 8, 9, 28]),
    ),
  ),
  uf = (0, T.lazy)(() =>
    h(() => import(`./NotFoundPage.js`), __vite__mapDeps([29, 3, 1, 2, 9, 30])),
  );
function df() {
  return (0, E.jsxs)(`div`, {
    style: {
      minHeight: `60vh`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      flexDirection: `column`,
      gap: `1rem`,
    },
    children: [
      (0, E.jsx)(`div`, {
        style: {
          width: `40px`,
          height: `40px`,
          border: `3px solid rgba(34,197,94,0.2)`,
          borderTop: `3px solid #22c55e`,
          borderRadius: `50%`,
          animation: `spin 0.8s linear infinite`,
        },
      }),
      (0, E.jsx)(`style`, {
        children: `@keyframes spin{to{transform:rotate(360deg)}}`,
      }),
    ],
  });
}
var ff = `admin_panel_open`;
ve.default.configure({
  showSpinner: !1,
  trickleSpeed: 200,
  minimum: 0.1,
  easing: `ease`,
  speed: 400,
});
function pf() {
  let { pathname: e } = o();
  return (
    (0, T.useEffect)(() => {
      if (localStorage.getItem(`admin_panel_open`) !== `true`) {
        (ve.default.start(), window.scrollTo(0, 0));
        let t = setTimeout(() => ve.default.done(), 300);
        return (
          window.gtag &&
            (window.gtag(`config`, `G-7CG50BBNZ0`, {
              page_path: e,
              page_title: document.title,
            }),
            window.gtag(`event`, `page_view`, {
              page_path: e,
              page_title: document.title,
              page_location: window.location.href,
            })),
          () => clearTimeout(t)
        );
      }
    }, [e]),
    null
  );
}
function mf() {
  let { authUser: e, authLoading: t } = nt(),
    [n, r] = (0, T.useState)(`idle`);
  ((0, T.useEffect)(() => {
    if (t) return;
    let n =
      localStorage.getItem(ff) === `true` ||
      window.location.pathname === `/admin`;
    n && e ? r(`panel`) : n && !e && (r(`login`), localStorage.removeItem(ff));
  }, [t, e]),
    (0, T.useEffect)(() => {
      n === `panel`
        ? localStorage.setItem(ff, `true`)
        : n === `idle` && localStorage.removeItem(ff);
    }, [n]),
    (0, T.useEffect)(() => {
      let e = (e) => {
        e.ctrlKey && e.shiftKey && e.key === `A` && i();
      };
      return (
        window.addEventListener(`keydown`, e),
        () => window.removeEventListener(`keydown`, e)
      );
    }, [e, t]));
  function i() {
    t || r(e ? `panel` : `login`);
  }
  function a() {
    (r(`idle`), localStorage.removeItem(ff));
  }
  return t
    ? (0, E.jsxs)(`div`, {
        style: {
          position: `fixed`,
          inset: 0,
          background: `var(--bg)`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          flexDirection: `column`,
          gap: `1rem`,
          zIndex: 9999,
        },
        children: [
          (0, E.jsx)(`svg`, {
            width: `36`,
            height: `36`,
            viewBox: `0 0 24 24`,
            fill: `none`,
            style: { animation: `spin 1.2s linear infinite` },
            children: (0, E.jsx)(`path`, {
              d: `M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z`,
              fill: `#22c55e`,
            }),
          }),
          (0, E.jsx)(`span`, {
            style: { fontSize: `0.8rem`, color: `var(--gray)` },
            children: `Loading…`,
          }),
          (0, E.jsx)(`style`, {
            children: `@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`,
          }),
        ],
      })
    : (0, E.jsxs)(E.Fragment, {
        children: [
          (0, E.jsx)($d, {}),
          (0, E.jsx)(`div`, { className: `mesh-bg` }),
          (0, E.jsx)(pf, {}),
          (0, E.jsx)(`a`, {
            href: `#main-content`,
            className: `skip-link`,
            children: `Skip to main content`,
          }),
          (0, E.jsx)(Zd, {}),
          (0, E.jsx)(Yd, { onAdminClick: i }),
          (0, E.jsxs)(p, {
            children: [
              (0, E.jsx)(d, {
                path: `/admin`,
                element: (0, E.jsx)(`main`, {
                  id: `main-content`,
                  style: { minHeight: `60vh`, padding: `140px 24px` },
                  children: (0, E.jsx)(`button`, {
                    onClick: i,
                    children: `Open admin login`,
                  }),
                }),
              }),
              (0, E.jsx)(d, {
                path: `/`,
                element: (0, E.jsxs)(T.Suspense, {
                  fallback: (0, E.jsx)(df, {}),
                  children: [
                    (0, E.jsx)($d, {
                      pageData: {
                        title: `Al-Amin Bin Ashad Ali - Graphic Designer & AI Expert | Portfolio`,
                        description: `Professional graphic designer and AI expert from Bangladesh. Specializing in logo design, brand design, web design, and artificial intelligence solutions. View my portfolio and get in touch for your next project.`,
                        keywords: `graphic designer Bangladesh, AI expert, logo design, brand design, web design, Narayanganj, freelance designer, artificial intelligence, UI/UX design`,
                      },
                    }),
                    (0, E.jsx)(nf, {}),
                  ],
                }),
              }),
              (0, E.jsx)(d, {
                path: `/portfolio`,
                element: (0, E.jsxs)(T.Suspense, {
                  fallback: (0, E.jsx)(df, {}),
                  children: [
                    (0, E.jsx)($d, {
                      pageData: {
                        title: `Portfolio - Graphic Design & AI Projects | Al-Amin Bin Ashad Ali`,
                        description: `Explore my portfolio of graphic design projects, logo designs, brand identities, web designs, and AI projects. Professional design work for clients worldwide.`,
                        keywords: `graphic design portfolio, logo design portfolio, brand design projects, web design portfolio, AI projects, design work Bangladesh`,
                      },
                    }),
                    (0, E.jsx)(rf, {}),
                  ],
                }),
              }),
              (0, E.jsx)(d, {
                path: `/about`,
                element: (0, E.jsxs)(T.Suspense, {
                  fallback: (0, E.jsx)(df, {}),
                  children: [
                    (0, E.jsx)($d, {
                      pageData: {
                        title: `About Me - Al-Amin Bin Ashad Ali | Strategic AI Consultant`,
                        description: `Learn about Al-Amin Bin Ashad Ali — a professional Creative Strategist and AI Expert with 8+ years of experience helping brands grow.`,
                        keywords: `about Al-Amin, strategic AI consultant, creative director, professional background, design expert`,
                      },
                    }),
                    (0, E.jsx)(af, {}),
                  ],
                }),
              }),
              (0, E.jsx)(d, {
                path: `/services`,
                element: (0, E.jsxs)(T.Suspense, {
                  fallback: (0, E.jsx)(df, {}),
                  children: [
                    (0, E.jsx)($d, {
                      pageData: {
                        title: `Solutions & Services | Al-Amin Bin Ashad Ali`,
                        description: `Premium design and AI solutions including brand identity, strategic AI integration, and visual storytelling.`,
                        keywords: `design services, AI solutions, branding expert, creative consulting`,
                      },
                    }),
                    (0, E.jsx)(of, {}),
                  ],
                }),
              }),
              (0, E.jsx)(d, {
                path: `/contact`,
                element: (0, E.jsxs)(T.Suspense, {
                  fallback: (0, E.jsx)(df, {}),
                  children: [
                    (0, E.jsx)($d, {
                      pageData: {
                        title: `Contact Me - Get in Touch | Al-Amin Bin Ashad Ali`,
                        description: `Contact Al-Amin Bin Ashad Ali for graphic design projects, AI consulting, and collaborations. Available for freelance work and partnerships. Reach out via email or phone.`,
                        keywords: `contact designer, hire graphic designer, AI expert contact, freelance work Bangladesh, design collaboration, get in touch`,
                      },
                    }),
                    (0, E.jsx)(sf, {}),
                  ],
                }),
              }),
              (0, E.jsx)(d, {
                path: `/blog`,
                element: (0, E.jsxs)(T.Suspense, {
                  fallback: (0, E.jsx)(df, {}),
                  children: [
                    (0, E.jsx)($d, {
                      pageData: {
                        title: `Design & AI Blog | Al-Amin Bin Ashad Ali`,
                        description: `Read articles about graphic design, artificial intelligence, freelancing tips, design trends, and creative technology. Stay updated with the latest in design and AI.`,
                        keywords: `design blog, AI blog, graphic design articles, freelancing tips, design trends, creative technology blog`,
                      },
                    }),
                    (0, E.jsx)(cf, {}),
                  ],
                }),
              }),
              (0, E.jsx)(d, {
                path: `/blog/:id`,
                element: (0, E.jsx)(T.Suspense, {
                  fallback: (0, E.jsx)(df, {}),
                  children: (0, E.jsx)(lf, {}),
                }),
              }),
              (0, E.jsx)(d, {
                path: `*`,
                element: (0, E.jsxs)(T.Suspense, {
                  fallback: (0, E.jsx)(df, {}),
                  children: [
                    (0, E.jsx)($d, {
                      pageData: {
                        title: `404 - Page Not Found | Al-Amin Bin Ashad Ali`,
                        description: `The page you're looking for doesn't exist. Browse my portfolio, services, or contact me for graphic design and AI projects.`,
                        keywords: `404 error, page not found, Al-Amin portfolio, graphic designer Bangladesh`,
                      },
                    }),
                    (0, E.jsx)(uf, {}),
                  ],
                }),
              }),
            ],
          }),
          (0, E.jsx)(Qd, { onAdminClick: i }),
          n === `login` &&
            (0, E.jsx)(T.Suspense, {
              fallback: (0, E.jsx)(df, {}),
              children: (0, E.jsx)(tf, {
                onClose: () => r(`idle`),
                onSuccess: () => r(`panel`),
              }),
            }),
          n === `panel` &&
            e &&
            (0, E.jsx)(T.Suspense, {
              fallback: (0, E.jsx)(df, {}),
              children: (0, E.jsx)(ef, { onClose: a }),
            }),
        ],
      });
}
function hf() {
  return (0, E.jsx)(f, {
    children: (0, E.jsx)(tt, {
      children: (0, E.jsx)(l, { children: (0, E.jsx)(mf, {}) }),
    }),
  });
}
g();
var gf = -1,
  _f = (e) => {
    addEventListener(
      `pageshow`,
      (t) => {
        t.persisted && ((gf = t.timeStamp), e(t));
      },
      !0,
    );
  },
  vf = (e, t, n, r) => {
    let i, a;
    return (o) => {
      var s;
      t.value >= 0 &&
        (o || r) &&
        ((a = t.value - ((s = i) == null ? 0 : s)),
        (a || i === void 0) &&
          ((i = t.value),
          (t.delta = a),
          (t.rating = ((e, t) =>
            e > t[1] ? `poor` : e > t[0] ? `needs-improvement` : `good`)(
            t.value,
            n,
          )),
          e(t)));
    };
  },
  yf = (e) => {
    requestAnimationFrame(() => requestAnimationFrame(e));
  },
  bf = () => {
    let e = performance.getEntriesByType(`navigation`)[0];
    if (e && e.responseStart > 0 && e.responseStart < performance.now())
      return e;
  },
  xf = () => {
    var e, t;
    return (e = (t = bf()) == null ? void 0 : t.activationStart) == null
      ? 0
      : e;
  },
  Sf = (e, t = -1) => {
    let n = bf(),
      r = `navigate`;
    return (
      gf >= 0
        ? (r = `back-forward-cache`)
        : n &&
          (document.prerendering || xf() > 0
            ? (r = `prerender`)
            : document.wasDiscarded
              ? (r = `restore`)
              : n.type && (r = n.type.replace(/_/g, `-`))),
      {
        name: e,
        value: t,
        rating: `good`,
        delta: 0,
        entries: [],
        id: `v5-${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 0xe8d4a51000}`,
        navigationType: r,
      }
    );
  },
  Cf = new WeakMap();
function wf(e, t) {
  return (Cf.get(e) || Cf.set(e, new t()), Cf.get(e));
}
var Tf = class {
    constructor() {
      (me(this, `t`, void 0), me(this, `i`, 0), me(this, `o`, []));
    }
    h(e) {
      var t;
      if (e.hadRecentInput) return;
      let n = this.o[0],
        r = this.o.at(-1);
      (this.i &&
      n &&
      r &&
      e.startTime - r.startTime < 1e3 &&
      e.startTime - n.startTime < 5e3
        ? ((this.i += e.value), this.o.push(e))
        : ((this.i = e.value), (this.o = [e])),
        (t = this.t) == null || t.call(this, e));
    }
  },
  Ef = (e, t, n = {}) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        let r = new PerformanceObserver((e) => {
          queueMicrotask(() => {
            t(e.getEntries());
          });
        });
        return (r.observe(_({ type: e, buffered: !0 }, n)), r);
      }
    } catch (e) {}
  },
  Df = (e) => {
    let t = !1;
    return () => {
      t || (e(), (t = !0));
    };
  },
  Of = -1,
  kf = new Set(),
  Af = () =>
    document.visibilityState !== `hidden` || document.prerendering ? 1 / 0 : 0,
  jf = (e) => {
    if (document.visibilityState === `hidden`) {
      if (e.type === `visibilitychange`) for (let e of kf) e();
      isFinite(Of) ||
        ((Of = e.type === `visibilitychange` ? e.timeStamp : 0),
        removeEventListener(`prerenderingchange`, jf, !0));
    }
  },
  Mf = () => {
    if (Of < 0) {
      var e;
      let t = xf(),
        n =
          document.prerendering ||
          (e = globalThis.performance
            .getEntriesByType(`visibility-state`)
            .find((e) => e.name === `hidden` && e.startTime >= t)) == null
            ? void 0
            : e.startTime;
      ((Of = n == null ? Af() : n),
        addEventListener(`visibilitychange`, jf, !0),
        addEventListener(`prerenderingchange`, jf, !0),
        _f(() => {
          setTimeout(() => {
            Of = Af();
          });
        }));
    }
    return {
      get firstHiddenTime() {
        return Of;
      },
      onHidden(e) {
        kf.add(e);
      },
    };
  },
  Nf = (e) => {
    document.prerendering ? addEventListener(`prerenderingchange`, e, !0) : e();
  },
  Pf = [1800, 3e3],
  Ff = (e, t = {}) => {
    Nf(() => {
      let n = Mf(),
        r,
        i = Sf(`FCP`),
        a = Ef(`paint`, (e) => {
          for (let t of e)
            t.name === `first-contentful-paint` &&
              (a.disconnect(),
              t.startTime < n.firstHiddenTime &&
                ((i.value = Math.max(t.startTime - xf(), 0)),
                i.entries.push(t),
                r(!0)));
        });
      a &&
        ((r = vf(e, i, Pf, t.reportAllChanges)),
        _f((n) => {
          ((i = Sf(`FCP`)),
            (r = vf(e, i, Pf, t.reportAllChanges)),
            yf(() => {
              ((i.value = performance.now() - n.timeStamp), r(!0));
            }));
        }));
    });
  },
  If = [0.1, 0.25],
  Lf = (e, t = {}) => {
    let n = Mf();
    Ff(
      Df(() => {
        let r,
          i = Sf(`CLS`, 0),
          a = wf(t, Tf),
          o = (e) => {
            for (let t of e) a.h(t);
            a.i > i.value && ((i.value = a.i), (i.entries = a.o), r());
          },
          s = Ef(`layout-shift`, o);
        s &&
          ((r = vf(e, i, If, t.reportAllChanges)),
          n.onHidden(() => {
            (o(s.takeRecords()), r(!0));
          }),
          _f(() => {
            ((a.i = 0),
              (i = Sf(`CLS`, 0)),
              (r = vf(e, i, If, t.reportAllChanges)),
              yf(r));
          }),
          setTimeout(r));
      }),
    );
  },
  Rf = 0,
  zf = 1 / 0,
  Bf = 0,
  Vf = (e) => {
    for (let t of e)
      t.interactionId &&
        ((zf = Math.min(zf, t.interactionId)),
        (Bf = Math.max(Bf, t.interactionId)),
        (Rf = Bf ? (Bf - zf) / 7 + 1 : 0));
  },
  Hf,
  Uf = () => {
    var e;
    return Hf ? Rf : (e = performance.interactionCount) == null ? 0 : e;
  },
  Wf = () => {
    `interactionCount` in performance ||
      Hf ||
      (Hf = Ef(`event`, Vf, { durationThreshold: 0 }));
  },
  Gf = 0,
  Kf = class {
    constructor() {
      (me(this, `l`, []),
        me(this, `u`, new Map()),
        me(this, `m`, void 0),
        me(this, `p`, void 0));
    }
    v() {
      ((Gf = Uf()), (this.l.length = 0), this.u.clear());
    }
    T() {
      let e = Math.min(this.l.length - 1, Math.floor((Uf() - Gf) / 50));
      return this.l[e];
    }
    h(e) {
      var t;
      if (
        ((t = this.m) == null || t.call(this, e),
        !e.interactionId && e.entryType !== `first-input`)
      )
        return;
      let n = this.l.at(-1),
        r = this.u.get(e.interactionId);
      if (r || this.l.length < 10 || e.duration > n.L) {
        var i;
        if (
          (r
            ? e.duration > r.L
              ? ((r.entries = [e]), (r.L = e.duration))
              : e.duration === r.L &&
                e.startTime === r.entries[0].startTime &&
                r.entries.push(e)
            : ((r = { id: e.interactionId, entries: [e], L: e.duration }),
              this.u.set(r.id, r),
              this.l.push(r)),
          this.l.sort((e, t) => t.L - e.L),
          this.l.length > 10)
        ) {
          let e = this.l.splice(10);
          for (let t of e) this.u.delete(t.id);
        }
        (i = this.p) == null || i.call(this, r);
      }
    }
  },
  qf = (e) => {
    let t = globalThis.requestIdleCallback || setTimeout,
      n = globalThis.cancelIdleCallback || clearTimeout;
    if (document.visibilityState === `hidden`) e();
    else {
      let r = Df(e),
        i = -1,
        a = () => {
          (n(i), r());
        };
      (addEventListener(`visibilitychange`, a, { once: !0, capture: !0 }),
        (i = t(() => {
          (removeEventListener(`visibilitychange`, a, { capture: !0 }), r());
        })));
    }
  },
  Jf = [200, 500],
  Yf = (e, t = {}) => {
    if (
      !globalThis.PerformanceEventTiming ||
      !(`interactionId` in PerformanceEventTiming.prototype)
    )
      return;
    let n = Mf();
    Nf(() => {
      var r;
      Wf();
      let i,
        a = Sf(`INP`),
        o = wf(t, Kf),
        s = (e) => {
          qf(() => {
            for (let t of e) o.h(t);
            let t = o.T();
            t &&
              t.L !== a.value &&
              ((a.value = t.L), (a.entries = t.entries), i());
          });
        },
        c = Ef(`event`, s, {
          durationThreshold: (r = t.durationThreshold) == null ? 40 : r,
        });
      ((i = vf(e, a, Jf, t.reportAllChanges)),
        c &&
          (c.observe({ type: `first-input`, buffered: !0 }),
          n.onHidden(() => {
            (s(c.takeRecords()), i(!0));
          }),
          _f(() => {
            (o.v(), (a = Sf(`INP`)), (i = vf(e, a, Jf, t.reportAllChanges)));
          })));
    });
  },
  Xf = class {
    constructor() {
      me(this, `m`, void 0);
    }
    h(e) {
      var t;
      (t = this.m) == null || t.call(this, e);
    }
  },
  Zf = [2500, 4e3],
  Qf = (e, t = {}) => {
    Nf(() => {
      let n = Mf(),
        r,
        i = Sf(`LCP`),
        a = wf(t, Xf),
        o = (e) => {
          t.reportAllChanges || (e = e.slice(-1));
          for (let t of e)
            (a.h(t),
              t.startTime < n.firstHiddenTime &&
                ((i.value = Math.max(t.startTime - xf(), 0)),
                (i.entries = [t]),
                r()));
        },
        s = Ef(`largest-contentful-paint`, o);
      if (s) {
        r = vf(e, i, Zf, t.reportAllChanges);
        let n = Df(() => {
            (o(s.takeRecords()), s.disconnect(), r(!0));
          }),
          a = (e) => {
            e.isTrusted &&
              (qf(n), removeEventListener(e.type, a, { capture: !0 }));
          };
        for (let e of [`keydown`, `click`, `visibilitychange`])
          addEventListener(e, a, { capture: !0 });
        _f((n) => {
          ((i = Sf(`LCP`)),
            (r = vf(e, i, Zf, t.reportAllChanges)),
            yf(() => {
              ((i.value = performance.now() - n.timeStamp), r(!0));
            }));
        });
      }
    });
  },
  $f = [800, 1800],
  ep = (e) => {
    document.prerendering
      ? Nf(() => ep(e))
      : document.readyState === `complete`
        ? setTimeout(e)
        : addEventListener(`load`, () => ep(e), !0);
  },
  tp = (e, t = {}) => {
    let n = Sf(`TTFB`),
      r = vf(e, n, $f, t.reportAllChanges);
    ep(() => {
      let i = bf();
      i &&
        ((n.value = Math.max(i.responseStart - xf(), 0)),
        (n.entries = [i]),
        r(!0),
        _f(() => {
          ((n = Sf(`TTFB`, 0)), (r = vf(e, n, $f, t.reportAllChanges)), r(!0));
        }));
    });
  };
function np({ name: e, delta: t, id: n, value: r }) {
  (window.gtag &&
    gtag(`event`, e, {
      event_category: `Web Vitals`,
      event_label: n,
      value: Math.round(e === `CLS` ? t * 1e3 : t),
      non_interaction: !0,
    }),
    console.log(`[Web Vitals] ${e}:`, {
      value: Math.round(e === `CLS` ? t * 1e3 : t),
      id: n,
      delta: t,
      rating: rp(e, t),
    }));
}
function rp(e, t) {
  if (e === `CLS`)
    return t <= 0.1 ? `good` : t <= 0.25 ? `needs-improvement` : `poor`;
  if (e === `FID`)
    return t <= 100 ? `good` : t <= 300 ? `needs-improvement` : `poor`;
  if (e === `FCP`)
    return t <= 1800 ? `good` : t <= 3e3 ? `needs-improvement` : `poor`;
  if (e === `LCP`)
    return t <= 2500 ? `good` : t <= 4e3 ? `needs-improvement` : `poor`;
  if (e === `TTFB`)
    return t <= 800 ? `good` : t <= 1800 ? `needs-improvement` : `poor`;
}
function ip() {
  (Lf(np),
    Yf(np),
    Ff(np),
    Qf(np),
    tp(np),
    window.addEventListener(`load`, () => {
      setTimeout(() => {
        let e = performance.getEntriesByType(`navigation`)[0];
        if (e) {
          let t = e.loadEventEnd - e.fetchStart;
          gtag(`event`, `page_load_time`, {
            event_category: `Performance`,
            value: Math.round(t),
            non_interaction: !0,
          });
        }
      }, 0);
    }));
}
function ap() {
  if (`PerformanceObserver` in window)
    try {
      (new PerformanceObserver((e) => {
        for (let t of e.getEntries())
          gtag(`event`, `long_task`, {
            event_category: `Performance`,
            value: Math.round(t.duration),
            non_interaction: !0,
          });
      }).observe({ entryTypes: [`longtask`] }),
        new PerformanceObserver((e) => {
          for (let t of e.getEntries())
            (t.initiatorType === `img` ||
              t.initiatorType === `script` ||
              t.initiatorType === `css`) &&
              gtag(`event`, `resource_load`, {
                event_category: `Performance`,
                event_label: t.initiatorType,
                value: Math.round(t.duration),
                non_interaction: !0,
              });
        }).observe({ entryTypes: [`resource`] }));
    } catch (e) {
      console.warn(`Performance Observer not supported:`, e);
    }
  `memory` in performance &&
    setInterval(() => {
      let e = performance.memory,
        t = Math.round(e.usedJSHeapSize / 1048576),
        n = Math.round(e.totalJSHeapSize / 1048576);
      (gtag(`event`, `memory_usage`, {
        event_category: `Performance`,
        value: t,
        custom_parameter_1: n,
        non_interaction: !0,
      }),
        t > 100 && console.warn(`High memory usage: ${t}MB`));
    }, 3e4);
}
function op() {
  if (
    (document.addEventListener(`visibilitychange`, () => {
      document.visibilityState === `hidden`
        ? gtag(`event`, `page_hidden`, {
            event_category: `Engagement`,
            non_interaction: !0,
          })
        : document.visibilityState === `visible` &&
          gtag(`event`, `page_visible`, {
            event_category: `Engagement`,
            non_interaction: !0,
          });
    }),
    window.addEventListener(`beforeunload`, () => {
      gtag(`event`, `page_unload`, {
        event_category: `Engagement`,
        non_interaction: !0,
      });
    }),
    `connection` in navigator)
  ) {
    let e = navigator.connection;
    gtag(`event`, `connection_type`, {
      event_category: `Performance`,
      event_label: e.effectiveType,
      value: e.downlink,
      non_interaction: !0,
    });
  }
  let e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
  gtag(`event`, `device_type`, {
    event_category: `Device`,
    event_label: e ? `mobile` : `desktop`,
    non_interaction: !0,
  });
}
function sp() {
  (ip(),
    ap(),
    op(),
    console.log(`🚀 Performance tracking initialized for SEO optimization`));
}
var z = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__,
  cp = `8.55.2`,
  B = globalThis;
function lp(e, t, n) {
  let r = n || B,
    i = (r.__SENTRY__ = r.__SENTRY__ || {}),
    a = (i[cp] = i[`8.55.2`] || {});
  return a[e] || (a[e] = t());
}
var up = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__,
  dp = `Sentry Logger `,
  fp = [`debug`, `info`, `warn`, `error`, `log`, `assert`, `trace`],
  pp = {};
function mp(e) {
  if (!(`console` in B)) return e();
  let t = B.console,
    n = {},
    r = Object.keys(pp);
  r.forEach((e) => {
    let r = pp[e];
    ((n[e] = t[e]), (t[e] = r));
  });
  try {
    return e();
  } finally {
    r.forEach((e) => {
      t[e] = n[e];
    });
  }
}
function hp() {
  let e = !1,
    t = {
      enable: () => {
        e = !0;
      },
      disable: () => {
        e = !1;
      },
      isEnabled: () => e,
    };
  return (
    up
      ? fp.forEach((n) => {
          t[n] = (...t) => {
            e &&
              mp(() => {
                B.console[n](`${dp}[${n}]:`, ...t);
              });
          };
        })
      : fp.forEach((e) => {
          t[e] = () => void 0;
        }),
    t
  );
}
var V = lp(`logger`, hp);
g();
var gp = 50,
  _p = /\(error: (.*)\)/,
  vp = /captureMessage|captureException/;
function yp(...e) {
  let t = e.sort((e, t) => e[0] - t[0]).map((e) => e[1]);
  return (e, n = 0, r = 0) => {
    let i = [],
      a = e.split(`
`);
    for (let e = n; e < a.length; e++) {
      let n = a[e];
      if (n.length > 1024) continue;
      let o = _p.test(n) ? n.replace(_p, `$1`) : n;
      if (!o.match(/\S*Error: /)) {
        for (let e of t) {
          let t = e(o);
          if (t) {
            i.push(t);
            break;
          }
        }
        if (i.length >= gp + r) break;
      }
    }
    return xp(i.slice(r));
  };
}
function bp(e) {
  return Array.isArray(e) ? yp(...e) : e;
}
function xp(e) {
  if (!e.length) return [];
  let t = Array.from(e);
  return (
    /sentryWrapped/.test(Sp(t).function || ``) && t.pop(),
    t.reverse(),
    vp.test(Sp(t).function || ``) &&
      (t.pop(), vp.test(Sp(t).function || ``) && t.pop()),
    t.slice(0, gp).map((e) =>
      _(
        _({}, e),
        {},
        {
          filename: e.filename || Sp(t).filename,
          function: e.function || `?`,
        },
      ),
    )
  );
}
function Sp(e) {
  return e[e.length - 1] || {};
}
var Cp = `<anonymous>`;
function wp(e) {
  try {
    return !e || typeof e != `function` ? Cp : e.name || Cp;
  } catch (e) {
    return Cp;
  }
}
function Tp(e) {
  let t = e.exception;
  if (t) {
    let e = [];
    try {
      return (
        t.values.forEach((t) => {
          t.stacktrace.frames && e.push(...t.stacktrace.frames);
        }),
        e
      );
    } catch (e) {
      return;
    }
  }
}
var Ep = {},
  Dp = {};
function Op(e, t) {
  ((Ep[e] = Ep[e] || []), Ep[e].push(t));
}
function kp(e, t) {
  if (!Dp[e]) {
    Dp[e] = !0;
    try {
      t();
    } catch (t) {
      up && V.error(`Error while instrumenting ${e}`, t);
    }
  }
}
function Ap(e, t) {
  let n = e && Ep[e];
  if (n)
    for (let r of n)
      try {
        r(t);
      } catch (t) {
        up &&
          V.error(
            `Error while triggering instrumentation handler.\nType: ${e}\nName: ${wp(r)}\nError:`,
            t,
          );
      }
}
var jp = null;
function Mp(e) {
  let t = `error`;
  (Op(t, e), kp(t, Np));
}
function Np() {
  ((jp = B.onerror),
    (B.onerror = function (e, t, n, r, i) {
      return (
        Ap(`error`, { column: r, error: i, line: n, msg: e, url: t }),
        jp ? jp.apply(this, arguments) : !1
      );
    }),
    (B.onerror.__SENTRY_INSTRUMENTED__ = !0));
}
var Pp = null;
function Fp(e) {
  let t = `unhandledrejection`;
  (Op(t, e), kp(t, Ip));
}
function Ip() {
  ((Pp = B.onunhandledrejection),
    (B.onunhandledrejection = function (e) {
      return (Ap(`unhandledrejection`, e), Pp ? Pp.apply(this, arguments) : !0);
    }),
    (B.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0));
}
function Lp() {
  return (Rp(B), B);
}
function Rp(e) {
  let t = (e.__SENTRY__ = e.__SENTRY__ || {});
  return ((t.version = t.version || `8.55.2`), (t[cp] = t[`8.55.2`] || {}));
}
var zp = Object.prototype.toString;
function Bp(e) {
  switch (zp.call(e)) {
    case `[object Error]`:
    case `[object Exception]`:
    case `[object DOMException]`:
    case `[object WebAssembly.Exception]`:
      return !0;
    default:
      return em(e, Error);
  }
}
function Vp(e, t) {
  return zp.call(e) === `[object ${t}]`;
}
function Hp(e) {
  return Vp(e, `ErrorEvent`);
}
function Up(e) {
  return Vp(e, `DOMError`);
}
function Wp(e) {
  return Vp(e, `DOMException`);
}
function Gp(e) {
  return Vp(e, `String`);
}
function Kp(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `__sentry_template_string__` in e &&
    `__sentry_template_values__` in e
  );
}
function qp(e) {
  return (
    e === null || Kp(e) || (typeof e != `object` && typeof e != `function`)
  );
}
function Jp(e) {
  return Vp(e, `Object`);
}
function Yp(e) {
  return typeof Event < `u` && em(e, Event);
}
function Xp(e) {
  return typeof Element < `u` && em(e, Element);
}
function Zp(e) {
  return Vp(e, `RegExp`);
}
function Qp(e) {
  return !!(e && e.then && typeof e.then == `function`);
}
function $p(e) {
  return (
    Jp(e) &&
    `nativeEvent` in e &&
    `preventDefault` in e &&
    `stopPropagation` in e
  );
}
function em(e, t) {
  try {
    return e instanceof t;
  } catch (e) {
    return !1;
  }
}
function tm(e) {
  return !!(typeof e == `object` && e && (e.__isVue || e._isVue));
}
var nm = B,
  rm = 80;
function im(e, t = {}) {
  if (!e) return `<unknown>`;
  try {
    let n = e,
      r = [],
      i = 0,
      a = 0,
      o,
      s = Array.isArray(t) ? t : t.keyAttrs,
      c = (!Array.isArray(t) && t.maxStringLength) || rm;
    for (
      ;
      n &&
      i++ < 5 &&
      ((o = am(n, s)),
      !(o === `html` || (i > 1 && a + r.length * 3 + o.length >= c)));
    )
      (r.push(o), (a += o.length), (n = n.parentNode));
    return r.reverse().join(` > `);
  } catch (e) {
    return `<unknown>`;
  }
}
function am(e, t) {
  let n = e,
    r = [];
  if (!n || !n.tagName) return ``;
  if (nm.HTMLElement && n instanceof HTMLElement && n.dataset) {
    if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
    if (n.dataset.sentryElement) return n.dataset.sentryElement;
  }
  r.push(n.tagName.toLowerCase());
  let i =
    t && t.length
      ? t.filter((e) => n.getAttribute(e)).map((e) => [e, n.getAttribute(e)])
      : null;
  if (i && i.length)
    i.forEach((e) => {
      r.push(`[${e[0]}="${e[1]}"]`);
    });
  else {
    n.id && r.push(`#${n.id}`);
    let e = n.className;
    if (e && Gp(e)) {
      let t = e.split(/\s+/);
      for (let e of t) r.push(`.${e}`);
    }
  }
  for (let e of [`aria-label`, `type`, `name`, `title`, `alt`]) {
    let t = n.getAttribute(e);
    t && r.push(`[${e}="${t}"]`);
  }
  return r.join(``);
}
function om() {
  try {
    return nm.document.location.href;
  } catch (e) {
    return ``;
  }
}
function sm(e) {
  return nm.document && nm.document.querySelector
    ? nm.document.querySelector(e)
    : null;
}
function cm(e) {
  if (!nm.HTMLElement) return null;
  let t = e;
  for (let e = 0; e < 5; e++) {
    if (!t) return null;
    if (t instanceof HTMLElement) {
      if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
      if (t.dataset.sentryElement) return t.dataset.sentryElement;
    }
    t = t.parentNode;
  }
  return null;
}
function lm(e, t = 0) {
  return typeof e != `string` || t === 0 || e.length <= t
    ? e
    : `${e.slice(0, t)}...`;
}
function um(e, t) {
  if (!Array.isArray(e)) return ``;
  let n = [];
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    try {
      tm(r) ? n.push(`[VueViewModel]`) : n.push(String(r));
    } catch (e) {
      n.push(`[value cannot be serialized]`);
    }
  }
  return n.join(t);
}
function dm(e, t, n = !1) {
  return Gp(e)
    ? Zp(t)
      ? t.test(e)
      : Gp(t)
        ? n
          ? e === t
          : e.includes(t)
        : !1
    : !1;
}
function fm(e, t = [], n = !1) {
  return t.some((t) => dm(e, t, n));
}
g();
function pm(e, t, n) {
  if (!(t in e)) return;
  let r = e[t],
    i = n(r);
  typeof i == `function` && hm(i, r);
  try {
    e[t] = i;
  } catch (n) {
    up && V.log(`Failed to replace method "${t}" in object`, e);
  }
}
function mm(e, t, n) {
  try {
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
  } catch (n) {
    up && V.log(`Failed to add non-enumerable property "${t}" to object`, e);
  }
}
function hm(e, t) {
  try {
    ((e.prototype = t.prototype = t.prototype || {}),
      mm(e, `__sentry_original__`, t));
  } catch (e) {}
}
function gm(e) {
  return e.__sentry_original__;
}
function _m(e) {
  if (Bp(e))
    return _({ message: e.message, name: e.name, stack: e.stack }, ym(e));
  if (Yp(e)) {
    let t = _(
      {
        type: e.type,
        target: vm(e.target),
        currentTarget: vm(e.currentTarget),
      },
      ym(e),
    );
    return (
      typeof CustomEvent < `u` && em(e, CustomEvent) && (t.detail = e.detail),
      t
    );
  } else return e;
}
function vm(e) {
  try {
    return Xp(e) ? im(e) : Object.prototype.toString.call(e);
  } catch (e) {
    return `<unknown>`;
  }
}
function ym(e) {
  if (typeof e == `object` && e) {
    let t = {};
    for (let n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t;
  } else return {};
}
function bm(e, t = 40) {
  let n = Object.keys(_m(e));
  n.sort();
  let r = n[0];
  if (!r) return `[object has no keys]`;
  if (r.length >= t) return lm(r, t);
  for (let e = n.length; e > 0; e--) {
    let r = n.slice(0, e).join(`, `);
    if (!(r.length > t)) return e === n.length ? r : lm(r, t);
  }
  return ``;
}
function H(e) {
  return xm(e, new Map());
}
function xm(e, t) {
  if (Sm(e)) {
    let n = t.get(e);
    if (n !== void 0) return n;
    let r = {};
    t.set(e, r);
    for (let n of Object.getOwnPropertyNames(e))
      e[n] !== void 0 && (r[n] = xm(e[n], t));
    return r;
  }
  if (Array.isArray(e)) {
    let n = t.get(e);
    if (n !== void 0) return n;
    let r = [];
    return (
      t.set(e, r),
      e.forEach((e) => {
        r.push(xm(e, t));
      }),
      r
    );
  }
  return e;
}
function Sm(e) {
  if (!Jp(e)) return !1;
  try {
    let t = Object.getPrototypeOf(e).constructor.name;
    return !t || t === `Object`;
  } catch (e) {
    return !0;
  }
}
var Cm = 1e3;
function wm() {
  return Date.now() / Cm;
}
function Tm() {
  let { performance: e } = B;
  if (!e || !e.now) return wm;
  let t = Date.now() - e.now(),
    n = e.timeOrigin == null ? t : e.timeOrigin;
  return () => (n + e.now()) / Cm;
}
var U = Tm(),
  Em = (() => {
    let { performance: e } = B;
    if (!e || !e.now) return;
    let t = 3600 * 1e3,
      n = e.now(),
      r = Date.now(),
      i = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t,
      a = i < t,
      o = e.timing && e.timing.navigationStart,
      s = typeof o == `number` ? Math.abs(o + n - r) : t;
    return a || s < t ? (i <= s ? e.timeOrigin : o) : r;
  })();
g();
function Dm() {
  let e = B,
    t = e.crypto || e.msCrypto,
    n = () => Math.random() * 16;
  try {
    if (t && t.randomUUID) return t.randomUUID().replace(/-/g, ``);
    t &&
      t.getRandomValues &&
      (n = () => {
        let e = new Uint8Array(1);
        return (t.getRandomValues(e), e[0]);
      });
  } catch (e) {}
  return `10000000100040008000100000000000`.replace(/[018]/g, (e) =>
    (e ^ ((n() & 15) >> (e / 4))).toString(16),
  );
}
function Om(e) {
  return e.exception && e.exception.values ? e.exception.values[0] : void 0;
}
function km(e) {
  let { message: t, event_id: n } = e;
  if (t) return t;
  let r = Om(e);
  return r
    ? r.type && r.value
      ? `${r.type}: ${r.value}`
      : r.type || r.value || n || `<unknown>`
    : n || `<unknown>`;
}
function Am(e, t, n) {
  let r = (e.exception = e.exception || {}),
    i = (r.values = r.values || []),
    a = (i[0] = i[0] || {});
  (a.value || (a.value = t || ``), a.type || (a.type = n || `Error`));
}
function jm(e, t) {
  let n = Om(e);
  if (!n) return;
  let r = { type: `generic`, handled: !0 },
    i = n.mechanism;
  if (((n.mechanism = _(_(_({}, r), i), t)), t && `data` in t)) {
    let e = _(_({}, i && i.data), t.data);
    n.mechanism.data = e;
  }
}
function Mm(e) {
  if (Nm(e)) return !0;
  try {
    mm(e, `__sentry_captured__`, !0);
  } catch (e) {}
  return !1;
}
function Nm(e) {
  try {
    return e.__sentry_captured__;
  } catch (e) {}
}
var Pm;
(function (e) {
  ((e[(e.PENDING = 0)] = `PENDING`),
    (e[(e.RESOLVED = 1)] = `RESOLVED`),
    (e[(e.REJECTED = 2)] = `REJECTED`));
})(Pm || (Pm = {}));
function Fm(e) {
  return new Lm((t) => {
    t(e);
  });
}
function Im(e) {
  return new Lm((t, n) => {
    n(e);
  });
}
var Lm = class e {
  constructor(t) {
    (e.prototype.__init.call(this),
      e.prototype.__init2.call(this),
      e.prototype.__init3.call(this),
      e.prototype.__init4.call(this),
      (this._state = Pm.PENDING),
      (this._handlers = []));
    try {
      t(this._resolve, this._reject);
    } catch (e) {
      this._reject(e);
    }
  }
  then(t, n) {
    return new e((e, r) => {
      (this._handlers.push([
        !1,
        (n) => {
          if (!t) e(n);
          else
            try {
              e(t(n));
            } catch (e) {
              r(e);
            }
        },
        (t) => {
          if (!n) r(t);
          else
            try {
              e(n(t));
            } catch (e) {
              r(e);
            }
        },
      ]),
        this._executeHandlers());
    });
  }
  catch(e) {
    return this.then((e) => e, e);
  }
  finally(t) {
    return new e((e, n) => {
      let r, i;
      return this.then(
        (e) => {
          ((i = !1), (r = e), t && t());
        },
        (e) => {
          ((i = !0), (r = e), t && t());
        },
      ).then(() => {
        if (i) {
          n(r);
          return;
        }
        e(r);
      });
    });
  }
  __init() {
    this._resolve = (e) => {
      this._setResult(Pm.RESOLVED, e);
    };
  }
  __init2() {
    this._reject = (e) => {
      this._setResult(Pm.REJECTED, e);
    };
  }
  __init3() {
    this._setResult = (e, t) => {
      if (this._state === Pm.PENDING) {
        if (Qp(t)) {
          t.then(this._resolve, this._reject);
          return;
        }
        ((this._state = e), (this._value = t), this._executeHandlers());
      }
    };
  }
  __init4() {
    this._executeHandlers = () => {
      if (this._state === Pm.PENDING) return;
      let e = this._handlers.slice();
      ((this._handlers = []),
        e.forEach((e) => {
          e[0] ||
            (this._state === Pm.RESOLVED && e[1](this._value),
            this._state === Pm.REJECTED && e[2](this._value),
            (e[0] = !0));
        }));
    };
  }
};
function Rm(e) {
  let t = U(),
    n = {
      sid: Dm(),
      init: !0,
      timestamp: t,
      started: t,
      duration: 0,
      status: `ok`,
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => Vm(n),
    };
  return (e && zm(n, e), n);
}
function zm(e, t = {}) {
  if (
    (t.user &&
      (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
      !e.did &&
        !t.did &&
        (e.did = t.user.id || t.user.email || t.user.username)),
    (e.timestamp = t.timestamp || U()),
    t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
    t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
    t.sid && (e.sid = t.sid.length === 32 ? t.sid : Dm()),
    t.init !== void 0 && (e.init = t.init),
    !e.did && t.did && (e.did = `${t.did}`),
    typeof t.started == `number` && (e.started = t.started),
    e.ignoreDuration)
  )
    e.duration = void 0;
  else if (typeof t.duration == `number`) e.duration = t.duration;
  else {
    let t = e.timestamp - e.started;
    e.duration = t >= 0 ? t : 0;
  }
  (t.release && (e.release = t.release),
    t.environment && (e.environment = t.environment),
    !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
    !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
    typeof t.errors == `number` && (e.errors = t.errors),
    t.status && (e.status = t.status));
}
function Bm(e, t) {
  let n = {};
  (t ? (n = { status: t }) : e.status === `ok` && (n = { status: `exited` }),
    zm(e, n));
}
function Vm(e) {
  return H({
    sid: `${e.sid}`,
    init: e.init,
    started: new Date(e.started * 1e3).toISOString(),
    timestamp: new Date(e.timestamp * 1e3).toISOString(),
    status: e.status,
    errors: e.errors,
    did:
      typeof e.did == `number` || typeof e.did == `string`
        ? `${e.did}`
        : void 0,
    duration: e.duration,
    abnormal_mechanism: e.abnormal_mechanism,
    attrs: {
      release: e.release,
      environment: e.environment,
      ip_address: e.ipAddress,
      user_agent: e.userAgent,
    },
  });
}
function Hm() {
  return Dm();
}
function Um() {
  return Dm().substring(16);
}
g();
function Wm(e, t, n = 2) {
  if (!t || typeof t != `object` || n <= 0) return t;
  if (e && t && Object.keys(t).length === 0) return e;
  let r = _({}, e);
  for (let e in t)
    Object.prototype.hasOwnProperty.call(t, e) &&
      (r[e] = Wm(r[e], t[e], n - 1));
  return r;
}
var Gm = `_sentrySpan`;
function Km(e, t) {
  t ? mm(e, Gm, t) : delete e[Gm];
}
function qm(e) {
  return e[Gm];
}
g();
var Jm = 100,
  Ym = class e {
    constructor() {
      ((this._notifyingListeners = !1),
        (this._scopeListeners = []),
        (this._eventProcessors = []),
        (this._breadcrumbs = []),
        (this._attachments = []),
        (this._user = {}),
        (this._tags = {}),
        (this._extra = {}),
        (this._contexts = {}),
        (this._sdkProcessingMetadata = {}),
        (this._propagationContext = { traceId: Hm(), spanId: Um() }));
    }
    clone() {
      let t = new e();
      return (
        (t._breadcrumbs = [...this._breadcrumbs]),
        (t._tags = _({}, this._tags)),
        (t._extra = _({}, this._extra)),
        (t._contexts = _({}, this._contexts)),
        this._contexts.flags &&
          (t._contexts.flags = { values: [...this._contexts.flags.values] }),
        (t._user = this._user),
        (t._level = this._level),
        (t._session = this._session),
        (t._transactionName = this._transactionName),
        (t._fingerprint = this._fingerprint),
        (t._eventProcessors = [...this._eventProcessors]),
        (t._requestSession = this._requestSession),
        (t._attachments = [...this._attachments]),
        (t._sdkProcessingMetadata = _({}, this._sdkProcessingMetadata)),
        (t._propagationContext = _({}, this._propagationContext)),
        (t._client = this._client),
        (t._lastEventId = this._lastEventId),
        Km(t, qm(this)),
        t
      );
    }
    setClient(e) {
      this._client = e;
    }
    setLastEventId(e) {
      this._lastEventId = e;
    }
    getClient() {
      return this._client;
    }
    lastEventId() {
      return this._lastEventId;
    }
    addScopeListener(e) {
      this._scopeListeners.push(e);
    }
    addEventProcessor(e) {
      return (this._eventProcessors.push(e), this);
    }
    setUser(e) {
      return (
        (this._user = e || {
          email: void 0,
          id: void 0,
          ip_address: void 0,
          username: void 0,
        }),
        this._session && zm(this._session, { user: e }),
        this._notifyScopeListeners(),
        this
      );
    }
    getUser() {
      return this._user;
    }
    getRequestSession() {
      return this._requestSession;
    }
    setRequestSession(e) {
      return ((this._requestSession = e), this);
    }
    setTags(e) {
      return (
        (this._tags = _(_({}, this._tags), e)),
        this._notifyScopeListeners(),
        this
      );
    }
    setTag(e, t) {
      return (
        (this._tags = _(_({}, this._tags), {}, { [e]: t })),
        this._notifyScopeListeners(),
        this
      );
    }
    setExtras(e) {
      return (
        (this._extra = _(_({}, this._extra), e)),
        this._notifyScopeListeners(),
        this
      );
    }
    setExtra(e, t) {
      return (
        (this._extra = _(_({}, this._extra), {}, { [e]: t })),
        this._notifyScopeListeners(),
        this
      );
    }
    setFingerprint(e) {
      return ((this._fingerprint = e), this._notifyScopeListeners(), this);
    }
    setLevel(e) {
      return ((this._level = e), this._notifyScopeListeners(), this);
    }
    setTransactionName(e) {
      return ((this._transactionName = e), this._notifyScopeListeners(), this);
    }
    setContext(e, t) {
      return (
        t === null ? delete this._contexts[e] : (this._contexts[e] = t),
        this._notifyScopeListeners(),
        this
      );
    }
    setSession(e) {
      return (
        e ? (this._session = e) : delete this._session,
        this._notifyScopeListeners(),
        this
      );
    }
    getSession() {
      return this._session;
    }
    update(e) {
      if (!e) return this;
      let t = typeof e == `function` ? e(this) : e,
        [n, r] =
          t instanceof Ym
            ? [t.getScopeData(), t.getRequestSession()]
            : Jp(t)
              ? [e, e.requestSession]
              : [],
        {
          tags: i,
          extra: a,
          user: o,
          contexts: s,
          level: c,
          fingerprint: l = [],
          propagationContext: u,
        } = n || {};
      return (
        (this._tags = _(_({}, this._tags), i)),
        (this._extra = _(_({}, this._extra), a)),
        (this._contexts = _(_({}, this._contexts), s)),
        o && Object.keys(o).length && (this._user = o),
        c && (this._level = c),
        l.length && (this._fingerprint = l),
        u && (this._propagationContext = u),
        r && (this._requestSession = r),
        this
      );
    }
    clear() {
      return (
        (this._breadcrumbs = []),
        (this._tags = {}),
        (this._extra = {}),
        (this._user = {}),
        (this._contexts = {}),
        (this._level = void 0),
        (this._transactionName = void 0),
        (this._fingerprint = void 0),
        (this._requestSession = void 0),
        (this._session = void 0),
        Km(this, void 0),
        (this._attachments = []),
        this.setPropagationContext({ traceId: Hm() }),
        this._notifyScopeListeners(),
        this
      );
    }
    addBreadcrumb(e, t) {
      let n = typeof t == `number` ? t : Jm;
      if (n <= 0) return this;
      let r = _({ timestamp: wm() }, e);
      return (
        this._breadcrumbs.push(r),
        this._breadcrumbs.length > n &&
          ((this._breadcrumbs = this._breadcrumbs.slice(-n)),
          this._client &&
            this._client.recordDroppedEvent(`buffer_overflow`, `log_item`)),
        this._notifyScopeListeners(),
        this
      );
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
      return ((this._breadcrumbs = []), this._notifyScopeListeners(), this);
    }
    addAttachment(e) {
      return (this._attachments.push(e), this);
    }
    clearAttachments() {
      return ((this._attachments = []), this);
    }
    getScopeData() {
      return {
        breadcrumbs: this._breadcrumbs,
        attachments: this._attachments,
        contexts: this._contexts,
        tags: this._tags,
        extra: this._extra,
        user: this._user,
        level: this._level,
        fingerprint: this._fingerprint || [],
        eventProcessors: this._eventProcessors,
        propagationContext: this._propagationContext,
        sdkProcessingMetadata: this._sdkProcessingMetadata,
        transactionName: this._transactionName,
        span: qm(this),
      };
    }
    setSDKProcessingMetadata(e) {
      return (
        (this._sdkProcessingMetadata = Wm(this._sdkProcessingMetadata, e, 2)),
        this
      );
    }
    setPropagationContext(e) {
      return ((this._propagationContext = _({ spanId: Um() }, e)), this);
    }
    getPropagationContext() {
      return this._propagationContext;
    }
    captureException(e, t) {
      let n = t && t.event_id ? t.event_id : Dm();
      if (!this._client)
        return (
          V.warn(`No client configured on scope - will not capture exception!`),
          n
        );
      let r = Error(`Sentry syntheticException`);
      return (
        this._client.captureException(
          e,
          _(
            _({ originalException: e, syntheticException: r }, t),
            {},
            { event_id: n },
          ),
          this,
        ),
        n
      );
    }
    captureMessage(e, t, n) {
      let r = n && n.event_id ? n.event_id : Dm();
      if (!this._client)
        return (
          V.warn(`No client configured on scope - will not capture message!`),
          r
        );
      let i = Error(e);
      return (
        this._client.captureMessage(
          e,
          t,
          _(
            _({ originalException: e, syntheticException: i }, n),
            {},
            { event_id: r },
          ),
          this,
        ),
        r
      );
    }
    captureEvent(e, t) {
      let n = t && t.event_id ? t.event_id : Dm();
      return this._client
        ? (this._client.captureEvent(e, _(_({}, t), {}, { event_id: n }), this),
          n)
        : (V.warn(`No client configured on scope - will not capture event!`),
          n);
    }
    _notifyScopeListeners() {
      this._notifyingListeners ||
        ((this._notifyingListeners = !0),
        this._scopeListeners.forEach((e) => {
          e(this);
        }),
        (this._notifyingListeners = !1));
    }
  };
function Xm() {
  return lp(`defaultCurrentScope`, () => new Ym());
}
function Zm() {
  return lp(`defaultIsolationScope`, () => new Ym());
}
var Qm = class {
  constructor(e, t) {
    let n;
    n = e || new Ym();
    let r;
    ((r = t || new Ym()),
      (this._stack = [{ scope: n }]),
      (this._isolationScope = r));
  }
  withScope(e) {
    let t = this._pushScope(),
      n;
    try {
      n = e(t);
    } catch (e) {
      throw (this._popScope(), e);
    }
    return Qp(n)
      ? n.then(
          (e) => (this._popScope(), e),
          (e) => {
            throw (this._popScope(), e);
          },
        )
      : (this._popScope(), n);
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  _pushScope() {
    let e = this.getScope().clone();
    return (this._stack.push({ client: this.getClient(), scope: e }), e);
  }
  _popScope() {
    return this._stack.length <= 1 ? !1 : !!this._stack.pop();
  }
};
function $m() {
  let e = Rp(Lp());
  return (e.stack = e.stack || new Qm(Xm(), Zm()));
}
function eh(e) {
  return $m().withScope(e);
}
function th(e, t) {
  let n = $m();
  return n.withScope(() => ((n.getStackTop().scope = e), t(e)));
}
function nh(e) {
  return $m().withScope(() => e($m().getIsolationScope()));
}
function rh() {
  return {
    withIsolationScope: nh,
    withScope: eh,
    withSetScope: th,
    withSetIsolationScope: (e, t) => nh(t),
    getCurrentScope: () => $m().getScope(),
    getIsolationScope: () => $m().getIsolationScope(),
  };
}
function ih(e) {
  let t = Rp(e);
  return t.acs ? t.acs : rh();
}
function W() {
  return ih(Lp()).getCurrentScope();
}
function ah() {
  return ih(Lp()).getIsolationScope();
}
function oh() {
  return lp(`globalScope`, () => new Ym());
}
function sh(...e) {
  let t = ih(Lp());
  if (e.length === 2) {
    let [n, r] = e;
    return n ? t.withSetScope(n, r) : t.withScope(r);
  }
  return t.withScope(e[0]);
}
function G() {
  return W().getClient();
}
function ch(e) {
  let { traceId: t, spanId: n, parentSpanId: r } = e.getPropagationContext();
  return H({ trace_id: t, span_id: n, parent_span_id: r });
}
var lh = `_sentryMetrics`;
function uh(e) {
  let t = e[lh];
  if (!t) return;
  let n = {};
  for (let [, [e, r]] of t) (n[e] || (n[e] = [])).push(H(r));
  return n;
}
var dh = `sentry.source`,
  fh = `sentry.sample_rate`,
  ph = `sentry.op`,
  K = `sentry.origin`,
  mh = `sentry.idle_span_finish_reason`,
  hh = `sentry.measurement_unit`,
  gh = `sentry.measurement_value`,
  _h = `sentry.custom_span_name`,
  vh = `sentry.profile_id`,
  yh = `sentry.exclusive_time`;
function bh(e) {
  if (e < 400 && e >= 100) return { code: 1 };
  if (e >= 400 && e < 500)
    switch (e) {
      case 401:
        return { code: 2, message: `unauthenticated` };
      case 403:
        return { code: 2, message: `permission_denied` };
      case 404:
        return { code: 2, message: `not_found` };
      case 409:
        return { code: 2, message: `already_exists` };
      case 413:
        return { code: 2, message: `failed_precondition` };
      case 429:
        return { code: 2, message: `resource_exhausted` };
      case 499:
        return { code: 2, message: `cancelled` };
      default:
        return { code: 2, message: `invalid_argument` };
    }
  if (e >= 500 && e < 600)
    switch (e) {
      case 501:
        return { code: 2, message: `unimplemented` };
      case 503:
        return { code: 2, message: `unavailable` };
      case 504:
        return { code: 2, message: `deadline_exceeded` };
      default:
        return { code: 2, message: `internal_error` };
    }
  return { code: 2, message: `unknown_error` };
}
function xh(e, t) {
  e.setAttribute(`http.response.status_code`, t);
  let n = bh(t);
  n.message !== `unknown_error` && e.setStatus(n);
}
var Sh = `sentry-`,
  Ch = /^sentry-/;
function wh(e) {
  let t = Eh(e);
  if (!t) return;
  let n = Object.entries(t).reduce((e, [t, n]) => {
    if (t.match(Ch)) {
      let r = t.slice(7);
      e[r] = n;
    }
    return e;
  }, {});
  if (Object.keys(n).length > 0) return n;
}
function Th(e) {
  if (e)
    return Oh(
      Object.entries(e).reduce(
        (e, [t, n]) => (n && (e[`${Sh}${t}`] = n), e),
        {},
      ),
    );
}
function Eh(e) {
  if (!(!e || (!Gp(e) && !Array.isArray(e))))
    return Array.isArray(e)
      ? e.reduce((e, t) => {
          let n = Dh(t);
          return (
            Object.entries(n).forEach(([t, n]) => {
              e[t] = n;
            }),
            e
          );
        }, {})
      : Dh(e);
}
function Dh(e) {
  return e
    .split(`,`)
    .map((e) => e.split(`=`).map((e) => decodeURIComponent(e.trim())))
    .reduce((e, [t, n]) => (t && n && (e[t] = n), e), {});
}
function Oh(e) {
  if (Object.keys(e).length !== 0)
    return Object.entries(e).reduce((e, [t, n], r) => {
      let i = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
        a = r === 0 ? i : `${e},${i}`;
      return a.length > 8192
        ? (up &&
            V.warn(
              `Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`,
            ),
          e)
        : a;
    }, ``);
}
var kh = RegExp(`^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$`);
function Ah(e) {
  if (!e) return;
  let t = e.match(kh);
  if (!t) return;
  let n;
  return (
    t[3] === `1` ? (n = !0) : t[3] === `0` && (n = !1),
    { traceId: t[1], parentSampled: n, parentSpanId: t[2] }
  );
}
function jh(e, t) {
  let n = Ah(e),
    r = wh(t);
  if (!n || !n.traceId) return { traceId: Hm(), spanId: Um() };
  let { traceId: i, parentSpanId: a, parentSampled: o } = n;
  return {
    traceId: i,
    parentSpanId: a,
    spanId: Um(),
    sampled: o,
    dsc: r || {},
  };
}
function Mh(e = Hm(), t = Um(), n) {
  let r = ``;
  return (n !== void 0 && (r = n ? `-1` : `-0`), `${e}-${t}${r}`);
}
var Nh = !1;
function Ph(e) {
  let { spanId: t, traceId: n } = e.spanContext(),
    { data: r, op: i, parent_span_id: a, status: o, origin: s } = q(e);
  return H({
    parent_span_id: a,
    span_id: t,
    trace_id: n,
    data: r,
    op: i,
    status: o,
    origin: s,
  });
}
function Fh(e) {
  let { spanId: t, traceId: n, isRemote: r } = e.spanContext();
  return H({
    parent_span_id: r ? t : q(e).parent_span_id,
    span_id: r ? Um() : t,
    trace_id: n,
  });
}
function Ih(e) {
  let { traceId: t, spanId: n } = e.spanContext();
  return Mh(t, n, Vh(e));
}
function Lh(e) {
  return typeof e == `number`
    ? Rh(e)
    : Array.isArray(e)
      ? e[0] + e[1] / 1e9
      : e instanceof Date
        ? Rh(e.getTime())
        : U();
}
function Rh(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function q(e) {
  if (Bh(e)) return e.getSpanJSON();
  try {
    let { spanId: t, traceId: n } = e.spanContext();
    if (zh(e)) {
      let {
        attributes: r,
        startTime: i,
        name: a,
        endTime: o,
        parentSpanId: s,
        status: c,
      } = e;
      return H({
        span_id: t,
        trace_id: n,
        data: r,
        description: a,
        parent_span_id: s,
        start_timestamp: Lh(i),
        timestamp: Lh(o) || void 0,
        status: Hh(c),
        op: r[ph],
        origin: r[K],
        _metrics_summary: uh(e),
      });
    }
    return { span_id: t, trace_id: n };
  } catch (e) {
    return {};
  }
}
function zh(e) {
  let t = e;
  return (
    !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
  );
}
function Bh(e) {
  return typeof e.getSpanJSON == `function`;
}
function Vh(e) {
  let { traceFlags: t } = e.spanContext();
  return t === 1;
}
function Hh(e) {
  if (!(!e || e.code === 0))
    return e.code === 1 ? `ok` : e.message || `unknown_error`;
}
var Uh = `_sentryChildSpans`,
  Wh = `_sentryRootSpan`;
function Gh(e, t) {
  (mm(t, Wh, e[Wh] || e), e[Uh] ? e[Uh].add(t) : mm(e, Uh, new Set([t])));
}
function Kh(e, t) {
  e[Uh] && e[Uh].delete(t);
}
function qh(e) {
  let t = new Set();
  function n(e) {
    if (!t.has(e) && Vh(e)) {
      t.add(e);
      let r = e[Uh] ? Array.from(e[Uh]) : [];
      for (let e of r) n(e);
    }
  }
  return (n(e), Array.from(t));
}
function J(e) {
  return e[Wh] || e;
}
function Y() {
  let e = ih(Lp());
  return e.getActiveSpan ? e.getActiveSpan() : qm(W());
}
function Jh() {
  Nh ||
    (mp(() => {
      console.warn(
        "[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.",
      );
    }),
    (Nh = !0));
}
var Yh = !1;
function Xh() {
  Yh || ((Yh = !0), Mp(Zh), Fp(Zh));
}
function Zh() {
  let e = Y(),
    t = e && J(e);
  if (t) {
    let e = `internal_error`;
    (z && V.log(`[Tracing] Root span: ${e} -> Global error occurred`),
      t.setStatus({ code: 2, message: e }));
  }
}
Zh.tag = `sentry_tracingErrorCallback`;
var Qh = `_sentryScope`,
  $h = `_sentryIsolationScope`;
function eg(e, t, n) {
  e && (mm(e, $h, n), mm(e, Qh, t));
}
function tg(e) {
  return { scope: e[Qh], isolationScope: e[$h] };
}
function ng(e) {
  if (typeof __SENTRY_TRACING__ == `boolean` && !__SENTRY_TRACING__) return !1;
  let t = G(),
    n = e || (t && t.getOptions());
  return (
    !!n && (n.enableTracing || `tracesSampleRate` in n || `tracesSampler` in n)
  );
}
var rg = class {
    constructor(e = {}) {
      ((this._traceId = e.traceId || Hm()), (this._spanId = e.spanId || Um()));
    }
    spanContext() {
      return { spanId: this._spanId, traceId: this._traceId, traceFlags: 0 };
    }
    end(e) {}
    setAttribute(e, t) {
      return this;
    }
    setAttributes(e) {
      return this;
    }
    setStatus(e) {
      return this;
    }
    updateName(e) {
      return this;
    }
    isRecording() {
      return !1;
    }
    addEvent(e, t, n) {
      return this;
    }
    addLink(e) {
      return this;
    }
    addLinks(e) {
      return this;
    }
    recordException(e, t) {}
  },
  ig = `production`,
  ag = `_frozenDsc`;
function og(e, t) {
  mm(e, ag, t);
}
function sg(e, t) {
  let n = t.getOptions(),
    { publicKey: r } = t.getDsn() || {},
    i = H({
      environment: n.environment || `production`,
      release: n.release,
      public_key: r,
      trace_id: e,
    });
  return (t.emit(`createDsc`, i), i);
}
function cg(e, t) {
  let n = t.getPropagationContext();
  return n.dsc || sg(n.traceId, e);
}
function lg(e) {
  let t = G();
  if (!t) return {};
  let n = J(e),
    r = n[ag];
  if (r) return r;
  let i = n.spanContext().traceState,
    a = i && i.get(`sentry.dsc`),
    o = a && wh(a);
  if (o) return o;
  let s = sg(e.spanContext().traceId, t),
    c = q(n),
    l = c.data || {},
    u = l[fh];
  u != null && (s.sample_rate = `${u}`);
  let d = l[dh],
    f = c.description;
  return (
    d !== `url` && f && (s.transaction = f),
    ng() && (s.sampled = String(Vh(n))),
    t.emit(`createDsc`, s, n),
    s
  );
}
function ug(e) {
  if (!z) return;
  let {
      description: t = `< unknown name >`,
      op: n = `< unknown op >`,
      parent_span_id: r,
    } = q(e),
    { spanId: i } = e.spanContext(),
    a = Vh(e),
    o = J(e),
    s = o === e,
    c = `[Tracing] Starting ${a ? `sampled` : `unsampled`} ${s ? `root ` : ``}span`,
    l = [`op: ${n}`, `name: ${t}`, `ID: ${i}`];
  if ((r && l.push(`parent ID: ${r}`), !s)) {
    let { op: e, description: t } = q(o);
    (l.push(`root ID: ${o.spanContext().spanId}`),
      e && l.push(`root op: ${e}`),
      t && l.push(`root description: ${t}`));
  }
  V.log(`${c}
  ${l.join(`
  `)}`);
}
function dg(e) {
  if (!z) return;
  let { description: t = `< unknown name >`, op: n = `< unknown op >` } = q(e),
    { spanId: r } = e.spanContext(),
    i = `[Tracing] Finishing "${n}" ${J(e) === e ? `root ` : ``}span "${t}" with ID ${r}`;
  V.log(i);
}
function fg(e) {
  if (typeof e == `boolean`) return Number(e);
  let t = typeof e == `string` ? parseFloat(e) : e;
  if (typeof t != `number` || isNaN(t) || t < 0 || t > 1) {
    z &&
      V.warn(
        `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`,
      );
    return;
  }
  return t;
}
g();
function pg(e, t) {
  if (!ng(e)) return [!1];
  let n = ah().getScopeData().sdkProcessingMetadata.normalizedRequest,
    r = _(_({}, t), {}, { normalizedRequest: t.normalizedRequest || n }),
    i;
  i =
    typeof e.tracesSampler == `function`
      ? e.tracesSampler(r)
      : r.parentSampled === void 0
        ? e.tracesSampleRate === void 0
          ? 1
          : e.tracesSampleRate
        : r.parentSampled;
  let a = fg(i);
  return a === void 0
    ? (z &&
        V.warn(
          `[Tracing] Discarding transaction because of invalid sample rate.`,
        ),
      [!1])
    : a
      ? Math.random() < a
        ? [!0, a]
        : (z &&
            V.log(
              `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(i)})`,
            ),
          [!1, a])
      : (z &&
          V.log(
            `[Tracing] Discarding transaction because ${typeof e.tracesSampler == `function` ? `tracesSampler returned 0 or false` : `a negative sampling decision was inherited or tracesSampleRate is set to 0`}`,
          ),
        [!1, a]);
}
var mg = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function hg(e) {
  return e === `http` || e === `https`;
}
function gg(e, t = !1) {
  let {
    host: n,
    path: r,
    pass: i,
    port: a,
    projectId: o,
    protocol: s,
    publicKey: c,
  } = e;
  return `${s}://${c}${t && i ? `:${i}` : ``}@${n}${a ? `:${a}` : ``}/${r && `${r}/`}${o}`;
}
function _g(e) {
  let t = mg.exec(e);
  if (!t) {
    mp(() => {
      console.error(`Invalid Sentry Dsn: ${e}`);
    });
    return;
  }
  let [n, r, i = ``, a = ``, o = ``, s = ``] = t.slice(1),
    c = ``,
    l = s,
    u = l.split(`/`);
  if ((u.length > 1 && ((c = u.slice(0, -1).join(`/`)), (l = u.pop())), l)) {
    let e = l.match(/^\d+/);
    e && (l = e[0]);
  }
  return vg({
    host: a,
    pass: i,
    path: c,
    projectId: l,
    port: o,
    protocol: n,
    publicKey: r,
  });
}
function vg(e) {
  return {
    protocol: e.protocol,
    publicKey: e.publicKey || ``,
    pass: e.pass || ``,
    host: e.host,
    port: e.port || ``,
    path: e.path || ``,
    projectId: e.projectId,
  };
}
function yg(e) {
  if (!up) return !0;
  let { port: t, projectId: n, protocol: r } = e;
  return [`protocol`, `publicKey`, `host`, `projectId`].find((t) =>
    e[t] ? !1 : (V.error(`Invalid Sentry Dsn: ${t} missing`), !0),
  )
    ? !1
    : n.match(/^\d+$/)
      ? hg(r)
        ? t && isNaN(parseInt(t, 10))
          ? (V.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1)
          : !0
        : (V.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1)
      : (V.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function bg(e) {
  let t = typeof e == `string` ? _g(e) : vg(e);
  if (!(!t || !yg(t))) return t;
}
function xg() {
  let e = typeof WeakSet == `function`,
    t = e ? new WeakSet() : [];
  function n(n) {
    if (e) return t.has(n) ? !0 : (t.add(n), !1);
    for (let e = 0; e < t.length; e++) if (t[e] === n) return !0;
    return (t.push(n), !1);
  }
  function r(n) {
    if (e) t.delete(n);
    else
      for (let e = 0; e < t.length; e++)
        if (t[e] === n) {
          t.splice(e, 1);
          break;
        }
  }
  return [n, r];
}
function Sg(e, t = 100, n = 1 / 0) {
  try {
    return wg(``, e, t, n);
  } catch (e) {
    return { ERROR: `**non-serializable** (${e})` };
  }
}
function Cg(e, t = 3, n = 100 * 1024) {
  let r = Sg(e, t);
  return Og(r) > n ? Cg(e, t - 1, n) : r;
}
function wg(e, t, n = 1 / 0, r = 1 / 0, i = xg()) {
  let [a, o] = i;
  if (
    t == null ||
    [`boolean`, `string`].includes(typeof t) ||
    (typeof t == `number` && Number.isFinite(t))
  )
    return t;
  let s = Tg(e, t);
  if (!s.startsWith(`[object `)) return s;
  if (t.__sentry_skip_normalization__) return t;
  let c =
    typeof t.__sentry_override_normalization_depth__ == `number`
      ? t.__sentry_override_normalization_depth__
      : n;
  if (c === 0) return s.replace(`object `, ``);
  if (a(t)) return `[Circular ~]`;
  let l = t;
  if (l && typeof l.toJSON == `function`)
    try {
      return wg(``, l.toJSON(), c - 1, r, i);
    } catch (e) {}
  let u = Array.isArray(t) ? [] : {},
    d = 0,
    f = _m(t);
  for (let e in f) {
    if (!Object.prototype.hasOwnProperty.call(f, e)) continue;
    if (d >= r) {
      u[e] = `[MaxProperties ~]`;
      break;
    }
    let t = f[e];
    ((u[e] = wg(e, t, c - 1, r, i)), d++);
  }
  return (o(t), u);
}
function Tg(e, t) {
  try {
    if (e === `domain` && t && typeof t == `object` && t._events)
      return `[Domain]`;
    if (e === `domainEmitter`) return `[DomainEmitter]`;
    if (typeof global < `u` && t === global) return `[Global]`;
    if (typeof window < `u` && t === window) return `[Window]`;
    if (typeof document < `u` && t === document) return `[Document]`;
    if (tm(t)) return `[VueViewModel]`;
    if ($p(t)) return `[SyntheticEvent]`;
    if (typeof t == `number` && !Number.isFinite(t)) return `[${t}]`;
    if (typeof t == `function`) return `[Function: ${wp(t)}]`;
    if (typeof t == `symbol`) return `[${String(t)}]`;
    if (typeof t == `bigint`) return `[BigInt: ${String(t)}]`;
    let n = Eg(t);
    return /^HTML(\w*)Element$/.test(n)
      ? `[HTMLElement: ${n}]`
      : `[object ${n}]`;
  } catch (e) {
    return `**non-serializable** (${e})`;
  }
}
function Eg(e) {
  let t = Object.getPrototypeOf(e);
  return t ? t.constructor.name : `null prototype`;
}
function Dg(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function Og(e) {
  return Dg(JSON.stringify(e));
}
g();
function kg(e, t = []) {
  return [e, t];
}
function Ag(e, t) {
  let [n, r] = e;
  return [n, [...r, t]];
}
function jg(e, t) {
  let n = e[1];
  for (let e of n) {
    let n = e[0].type;
    if (t(e, n)) return !0;
  }
  return !1;
}
function Mg(e) {
  return B.__SENTRY__ && B.__SENTRY__.encodePolyfill
    ? B.__SENTRY__.encodePolyfill(e)
    : new TextEncoder().encode(e);
}
function Ng(e) {
  let [t, n] = e,
    r = JSON.stringify(t);
  function i(e) {
    typeof r == `string`
      ? (r = typeof e == `string` ? r + e : [Mg(r), e])
      : r.push(typeof e == `string` ? Mg(e) : e);
  }
  for (let e of n) {
    let [t, n] = e;
    if (
      (i(`\n${JSON.stringify(t)}\n`),
      typeof n == `string` || n instanceof Uint8Array)
    )
      i(n);
    else {
      let e;
      try {
        e = JSON.stringify(n);
      } catch (t) {
        e = JSON.stringify(Sg(n));
      }
      i(e);
    }
  }
  return typeof r == `string` ? r : Pg(r);
}
function Pg(e) {
  let t = e.reduce((e, t) => e + t.length, 0),
    n = new Uint8Array(t),
    r = 0;
  for (let t of e) (n.set(t, r), (r += t.length));
  return n;
}
function Fg(e) {
  return [{ type: `span` }, e];
}
function Ig(e) {
  let t = typeof e.data == `string` ? Mg(e.data) : e.data;
  return [
    H({
      type: `attachment`,
      length: t.length,
      filename: e.filename,
      content_type: e.contentType,
      attachment_type: e.attachmentType,
    }),
    t,
  ];
}
var Lg = {
  session: `session`,
  sessions: `session`,
  attachment: `attachment`,
  transaction: `transaction`,
  event: `error`,
  client_report: `internal`,
  user_report: `default`,
  profile: `profile`,
  profile_chunk: `profile`,
  replay_event: `replay`,
  replay_recording: `replay`,
  check_in: `monitor`,
  feedback: `feedback`,
  span: `span`,
  statsd: `metric_bucket`,
  raw_security: `security`,
};
function Rg(e) {
  return Lg[e];
}
function zg(e) {
  if (!e || !e.sdk) return;
  let { name: t, version: n } = e.sdk;
  return { name: t, version: n };
}
function Bg(e, t, n, r) {
  let i =
    e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
  return _(
    _(
      _(
        { event_id: e.event_id, sent_at: new Date().toISOString() },
        t && { sdk: t },
      ),
      !!n && r && { dsn: gg(r) },
    ),
    i && { trace: H(_({}, i)) },
  );
}
g();
function Vg(e, t) {
  return t
    ? ((e.sdk = e.sdk || {}),
      (e.sdk.name = e.sdk.name || t.name),
      (e.sdk.version = e.sdk.version || t.version),
      (e.sdk.integrations = [
        ...(e.sdk.integrations || []),
        ...(t.integrations || []),
      ]),
      (e.sdk.packages = [...(e.sdk.packages || []), ...(t.packages || [])]),
      e)
    : e;
}
function Hg(e, t, n, r) {
  let i = zg(n);
  return kg(
    _(
      _({ sent_at: new Date().toISOString() }, i && { sdk: i }),
      !!r && t && { dsn: gg(t) },
    ),
    [
      `aggregates` in e
        ? [{ type: `sessions` }, e]
        : [{ type: `session` }, e.toJSON()],
    ],
  );
}
function Ug(e, t, n, r) {
  let i = zg(n),
    a = e.type && e.type !== `replay_event` ? e.type : `event`;
  Vg(e, n && n.sdk);
  let o = Bg(e, i, r, t);
  return (delete e.sdkProcessingMetadata, kg(o, [[{ type: a }, e]]));
}
function Wg(e, t) {
  function n(e) {
    return !!e.trace_id && !!e.public_key;
  }
  let r = lg(e[0]),
    i = t && t.getDsn(),
    a = t && t.getOptions().tunnel,
    o = _(
      _({ sent_at: new Date().toISOString() }, n(r) && { trace: r }),
      !!a && i && { dsn: gg(i) },
    ),
    s = t && t.getOptions().beforeSendSpan,
    c = s
      ? (e) => {
          let t = s(q(e));
          return (t || Jh(), t);
        }
      : (e) => q(e),
    l = [];
  for (let t of e) {
    let e = c(t);
    e && l.push(Fg(e));
  }
  return kg(o, l);
}
function Gg(e, t, n, r = Y()) {
  let i = r && J(r);
  i &&
    (z &&
      V.log(`[Measurement] Setting measurement on root span: ${e} = ${t} ${n}`),
    i.addEvent(e, { [gh]: t, [hh]: n }));
}
function Kg(e) {
  if (!e || e.length === 0) return;
  let t = {};
  return (
    e.forEach((e) => {
      let n = e.attributes || {},
        r = n[hh],
        i = n[gh];
      typeof r == `string` &&
        typeof i == `number` &&
        (t[e.name] = { value: i, unit: r });
    }),
    t
  );
}
g();
var qg = 1e3,
  Jg = class {
    constructor(e = {}) {
      ((this._traceId = e.traceId || Hm()),
        (this._spanId = e.spanId || Um()),
        (this._startTime = e.startTimestamp || U()),
        (this._attributes = {}),
        this.setAttributes(_({ [K]: `manual`, [ph]: e.op }, e.attributes)),
        (this._name = e.name),
        e.parentSpanId && (this._parentSpanId = e.parentSpanId),
        `sampled` in e && (this._sampled = e.sampled),
        e.endTimestamp && (this._endTime = e.endTimestamp),
        (this._events = []),
        (this._isStandaloneSpan = e.isStandalone),
        this._endTime && this._onSpanEnded());
    }
    addLink(e) {
      return this;
    }
    addLinks(e) {
      return this;
    }
    recordException(e, t) {}
    spanContext() {
      let { _spanId: e, _traceId: t, _sampled: n } = this;
      return { spanId: e, traceId: t, traceFlags: +!!n };
    }
    setAttribute(e, t) {
      return (
        t === void 0 ? delete this._attributes[e] : (this._attributes[e] = t),
        this
      );
    }
    setAttributes(e) {
      return (Object.keys(e).forEach((t) => this.setAttribute(t, e[t])), this);
    }
    updateStartTime(e) {
      this._startTime = Lh(e);
    }
    setStatus(e) {
      return ((this._status = e), this);
    }
    updateName(e) {
      return ((this._name = e), this.setAttribute(dh, `custom`), this);
    }
    end(e) {
      this._endTime || ((this._endTime = Lh(e)), dg(this), this._onSpanEnded());
    }
    getSpanJSON() {
      return H({
        data: this._attributes,
        description: this._name,
        op: this._attributes[ph],
        parent_span_id: this._parentSpanId,
        span_id: this._spanId,
        start_timestamp: this._startTime,
        status: Hh(this._status),
        timestamp: this._endTime,
        trace_id: this._traceId,
        origin: this._attributes[K],
        _metrics_summary: uh(this),
        profile_id: this._attributes[vh],
        exclusive_time: this._attributes[yh],
        measurements: Kg(this._events),
        is_segment: (this._isStandaloneSpan && J(this) === this) || void 0,
        segment_id: this._isStandaloneSpan
          ? J(this).spanContext().spanId
          : void 0,
      });
    }
    isRecording() {
      return !this._endTime && !!this._sampled;
    }
    addEvent(e, t, n) {
      z && V.log(`[Tracing] Adding an event to span:`, e);
      let r = Yg(t) ? t : n || U(),
        i = Yg(t) ? {} : t || {},
        a = { name: e, time: Lh(r), attributes: i };
      return (this._events.push(a), this);
    }
    isStandaloneSpan() {
      return !!this._isStandaloneSpan;
    }
    _onSpanEnded() {
      let e = G();
      if (
        (e && e.emit(`spanEnd`, this),
        !(this._isStandaloneSpan || this === J(this)))
      )
        return;
      if (this._isStandaloneSpan) {
        this._sampled
          ? Qg(Wg([this], e))
          : (z &&
              V.log(
                `[Tracing] Discarding standalone span because its trace was not chosen to be sampled.`,
              ),
            e && e.recordDroppedEvent(`sample_rate`, `span`));
        return;
      }
      let t = this._convertSpanToTransaction();
      t && (tg(this).scope || W()).captureEvent(t);
    }
    _convertSpanToTransaction() {
      if (!Xg(q(this))) return;
      this._name ||
        (z &&
          V.warn(
            "Transaction has no name, falling back to `<unlabeled transaction>`.",
          ),
        (this._name = `<unlabeled transaction>`));
      let { scope: e, isolationScope: t } = tg(this),
        n = (e || W()).getClient() || G();
      if (this._sampled !== !0) {
        (z &&
          V.log(
            `[Tracing] Discarding transaction because its trace was not chosen to be sampled.`,
          ),
          n && n.recordDroppedEvent(`sample_rate`, `transaction`));
        return;
      }
      let r = qh(this)
          .filter((e) => e !== this && !Zg(e))
          .map((e) => q(e))
          .filter(Xg),
        i = this._attributes[dh];
      (delete this._attributes[_h],
        r.forEach((e) => {
          e.data && delete e.data[`sentry.custom_span_name`];
        }));
      let a = _(
          {
            contexts: { trace: Ph(this) },
            spans:
              r.length > qg
                ? r
                    .sort((e, t) => e.start_timestamp - t.start_timestamp)
                    .slice(0, qg)
                : r,
            start_timestamp: this._startTime,
            timestamp: this._endTime,
            transaction: this._name,
            type: `transaction`,
            sdkProcessingMetadata: _(
              { capturedSpanScope: e, capturedSpanIsolationScope: t },
              H({ dynamicSamplingContext: lg(this) }),
            ),
            _metrics_summary: uh(this),
          },
          i && { transaction_info: { source: i } },
        ),
        o = Kg(this._events);
      return (
        o &&
          Object.keys(o).length &&
          (z &&
            V.log(
              `[Measurements] Adding measurements to transaction event`,
              JSON.stringify(o, void 0, 2),
            ),
          (a.measurements = o)),
        a
      );
    }
  };
function Yg(e) {
  return (e && typeof e == `number`) || e instanceof Date || Array.isArray(e);
}
function Xg(e) {
  return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id;
}
function Zg(e) {
  return e instanceof Jg && e.isStandaloneSpan();
}
function Qg(e) {
  let t = G();
  if (!t) return;
  let n = e[1];
  if (!n || n.length === 0) {
    t.recordDroppedEvent(`before_send`, `span`);
    return;
  }
  t.sendEnvelope(e);
}
g();
var $g = `__SENTRY_SUPPRESS_TRACING__`;
function e_(e) {
  let t = i_();
  if (t.startInactiveSpan) return t.startInactiveSpan(e);
  let n = r_(e),
    { forceTransaction: r, parentSpan: i } = e;
  return (
    e.scope
      ? (t) => sh(e.scope, t)
      : i === void 0
        ? (e) => e()
        : (e) => t_(i, e)
  )(() => {
    let t = W(),
      i = s_(t);
    return e.onlyIfParent && !i
      ? new rg()
      : n_({ parentSpan: i, spanArguments: n, forceTransaction: r, scope: t });
  });
}
function t_(e, t) {
  let n = i_();
  return n.withActiveSpan
    ? n.withActiveSpan(e, t)
    : sh((n) => (Km(n, e || void 0), t(n)));
}
function n_({
  parentSpan: e,
  spanArguments: t,
  forceTransaction: n,
  scope: r,
}) {
  if (!ng()) return new rg();
  let i = ah(),
    a;
  if (e && !n) ((a = o_(e, r, t)), Gh(e, a));
  else if (e) {
    let n = lg(e),
      { traceId: i, spanId: o } = e.spanContext(),
      s = Vh(e);
    ((a = a_(_({ traceId: i, parentSpanId: o }, t), r, s)), og(a, n));
  } else {
    let {
      traceId: e,
      dsc: n,
      parentSpanId: o,
      sampled: s,
    } = _(_({}, i.getPropagationContext()), r.getPropagationContext());
    ((a = a_(_({ traceId: e, parentSpanId: o }, t), r, s)), n && og(a, n));
  }
  return (ug(a), eg(a, r, i), a);
}
function r_(e) {
  let t = _({ isStandalone: (e.experimental || {}).standalone }, e);
  if (e.startTime) {
    let n = _({}, t);
    return ((n.startTimestamp = Lh(e.startTime)), delete n.startTime, n);
  }
  return t;
}
function i_() {
  return ih(Lp());
}
function a_(e, t, n) {
  let r = G(),
    i = (r && r.getOptions()) || {},
    { name: a = ``, attributes: o } = e,
    [s, c] = t.getScopeData().sdkProcessingMetadata[$g]
      ? [!1]
      : pg(i, {
          name: a,
          parentSampled: n,
          attributes: o,
          transactionContext: { name: a, parentSampled: n },
        }),
    l = new Jg(
      _(
        _({}, e),
        {},
        { attributes: _({ [dh]: `custom` }, e.attributes), sampled: s },
      ),
    );
  return (
    c !== void 0 && l.setAttribute(fh, c),
    r && r.emit(`spanStart`, l),
    l
  );
}
function o_(e, t, n) {
  let { spanId: r, traceId: i } = e.spanContext(),
    a = t.getScopeData().sdkProcessingMetadata[$g] ? !1 : Vh(e),
    o = a
      ? new Jg(_(_({}, n), {}, { parentSpanId: r, traceId: i, sampled: a }))
      : new rg({ traceId: i });
  Gh(e, o);
  let s = G();
  return (
    s && (s.emit(`spanStart`, o), n.endTimestamp && s.emit(`spanEnd`, o)),
    o
  );
}
function s_(e) {
  let t = qm(e);
  if (!t) return;
  let n = G();
  return (n ? n.getOptions() : {}).parentSpanIsAlwaysRootSpan ? J(t) : t;
}
var c_ = { idleTimeout: 1e3, finalTimeout: 3e4, childSpanTimeout: 15e3 },
  l_ = `heartbeatFailed`,
  u_ = `idleTimeout`,
  d_ = `finalTimeout`,
  f_ = `externalFinish`;
function p_(e, t = {}) {
  let n = new Map(),
    r = !1,
    i,
    a = f_,
    o = !t.disableAutoFinish,
    s = [],
    {
      idleTimeout: c = c_.idleTimeout,
      finalTimeout: l = c_.finalTimeout,
      childSpanTimeout: u = c_.childSpanTimeout,
      beforeSpanEnd: d,
    } = t,
    f = G();
  if (!f || !ng()) return new rg();
  let p = W(),
    m = Y(),
    h = m_(e);
  h.end = new Proxy(h.end, {
    apply(e, t, n) {
      d && d(h);
      let [r, ...i] = n,
        a = Lh(r || U()),
        o = qh(h).filter((e) => e !== h);
      if (!o.length) return (x(a), Reflect.apply(e, t, [a, ...i]));
      let s = o.map((e) => q(e).timestamp).filter((e) => !!e),
        c = s.length ? Math.max(...s) : void 0,
        u = q(h).start_timestamp,
        f = Math.min(
          u ? u + l / 1e3 : 1 / 0,
          Math.max(u || -1 / 0, Math.min(a, c || 1 / 0)),
        );
      return (x(f), Reflect.apply(e, t, [f, ...i]));
    },
  });
  function g() {
    i && (clearTimeout(i), (i = void 0));
  }
  function _(e) {
    (g(),
      (i = setTimeout(() => {
        !r && n.size === 0 && o && ((a = u_), h.end(e));
      }, c)));
  }
  function v(e) {
    i = setTimeout(() => {
      !r && o && ((a = l_), h.end(e));
    }, u);
  }
  function y(e) {
    (g(), n.set(e, !0), v(U() + u / 1e3));
  }
  function b(e) {
    (n.has(e) && n.delete(e), n.size === 0 && _(U() + c / 1e3));
  }
  function x(e) {
    ((r = !0), n.clear(), s.forEach((e) => e()), Km(p, m));
    let t = q(h),
      { start_timestamp: i } = t;
    if (!i) return;
    ((t.data || {})[`sentry.idle_span_finish_reason`] || h.setAttribute(mh, a),
      V.log(`[Tracing] Idle span "${t.op}" finished`));
    let o = qh(h).filter((e) => e !== h),
      u = 0;
    (o.forEach((t) => {
      t.isRecording() &&
        (t.setStatus({ code: 2, message: `cancelled` }),
        t.end(e),
        z &&
          V.log(
            `[Tracing] Cancelling span since span ended early`,
            JSON.stringify(t, void 0, 2),
          ));
      let { timestamp: n = 0, start_timestamp: r = 0 } = q(t),
        i = r <= e,
        a = (l + c) / 1e3,
        o = n - r <= a;
      if (z) {
        let e = JSON.stringify(t, void 0, 2);
        i
          ? o ||
            V.log(
              `[Tracing] Discarding span since it finished after idle span final timeout`,
              e,
            )
          : V.log(
              `[Tracing] Discarding span since it happened after idle span was finished`,
              e,
            );
      }
      (!o || !i) && (Kh(h, t), u++);
    }),
      u > 0 && h.setAttribute(`sentry.idle_span_discarded_spans`, u));
  }
  return (
    s.push(
      f.on(`spanStart`, (e) => {
        r ||
          e === h ||
          q(e).timestamp ||
          (qh(h).includes(e) && y(e.spanContext().spanId));
      }),
    ),
    s.push(
      f.on(`spanEnd`, (e) => {
        r || b(e.spanContext().spanId);
      }),
    ),
    s.push(
      f.on(`idleSpanEnableAutoFinish`, (e) => {
        e === h && ((o = !0), _(), n.size && v());
      }),
    ),
    t.disableAutoFinish || _(),
    setTimeout(() => {
      r ||
        (h.setStatus({ code: 2, message: `deadline_exceeded` }),
        (a = d_),
        h.end());
    }, l),
    h
  );
}
function m_(e) {
  let t = e_(e);
  return (Km(W(), t), z && V.log(`[Tracing] Started span is an idle span`), t);
}
g();
function h_(e, t, n, r = 0) {
  return new Lm((i, a) => {
    let o = e[r];
    if (t === null || typeof o != `function`) i(t);
    else {
      let s = o(_({}, t), n);
      (z &&
        o.id &&
        s === null &&
        V.log(`Event processor "${o.id}" dropped event`),
        Qp(s)
          ? s.then((t) => h_(e, t, n, r + 1).then(i)).then(null, a)
          : h_(e, s, n, r + 1)
              .then(i)
              .then(null, a));
    }
  });
}
var g_, __, v_;
function y_(e) {
  let t = B._sentryDebugIds;
  if (!t) return {};
  let n = Object.keys(t);
  return v_ && n.length === __
    ? v_
    : ((__ = n.length),
      (v_ = n.reduce((n, r) => {
        g_ || (g_ = {});
        let i = g_[r];
        if (i) n[i[0]] = i[1];
        else {
          let i = e(r);
          for (let e = i.length - 1; e >= 0; e--) {
            let a = i[e],
              o = a && a.filename,
              s = t[r];
            if (o && s) {
              ((n[o] = s), (g_[r] = [o, s]));
              break;
            }
          }
        }
        return n;
      }, {})),
      v_);
}
g();
function b_(e, t) {
  let { fingerprint: n, span: r, breadcrumbs: i, sdkProcessingMetadata: a } = t;
  (C_(e, t), r && E_(e, r), D_(e, n), w_(e, i), T_(e, a));
}
function x_(e, t) {
  let {
    extra: n,
    tags: r,
    user: i,
    contexts: a,
    level: o,
    sdkProcessingMetadata: s,
    breadcrumbs: c,
    fingerprint: l,
    eventProcessors: u,
    attachments: d,
    propagationContext: f,
    transactionName: p,
    span: m,
  } = t;
  (S_(e, `extra`, n),
    S_(e, `tags`, r),
    S_(e, `user`, i),
    S_(e, `contexts`, a),
    (e.sdkProcessingMetadata = Wm(e.sdkProcessingMetadata, s, 2)),
    o && (e.level = o),
    p && (e.transactionName = p),
    m && (e.span = m),
    c.length && (e.breadcrumbs = [...e.breadcrumbs, ...c]),
    l.length && (e.fingerprint = [...e.fingerprint, ...l]),
    u.length && (e.eventProcessors = [...e.eventProcessors, ...u]),
    d.length && (e.attachments = [...e.attachments, ...d]),
    (e.propagationContext = _(_({}, e.propagationContext), f)));
}
function S_(e, t, n) {
  e[t] = Wm(e[t], n, 1);
}
function C_(e, t) {
  let {
      extra: n,
      tags: r,
      user: i,
      contexts: a,
      level: o,
      transactionName: s,
    } = t,
    c = H(n);
  c && Object.keys(c).length && (e.extra = _(_({}, c), e.extra));
  let l = H(r);
  l && Object.keys(l).length && (e.tags = _(_({}, l), e.tags));
  let u = H(i);
  u && Object.keys(u).length && (e.user = _(_({}, u), e.user));
  let d = H(a);
  (d && Object.keys(d).length && (e.contexts = _(_({}, d), e.contexts)),
    o && (e.level = o),
    s && e.type !== `transaction` && (e.transaction = s));
}
function w_(e, t) {
  let n = [...(e.breadcrumbs || []), ...t];
  e.breadcrumbs = n.length ? n : void 0;
}
function T_(e, t) {
  e.sdkProcessingMetadata = _(_({}, e.sdkProcessingMetadata), t);
}
function E_(e, t) {
  ((e.contexts = _({ trace: Fh(t) }, e.contexts)),
    (e.sdkProcessingMetadata = _(
      { dynamicSamplingContext: lg(t) },
      e.sdkProcessingMetadata,
    )));
  let n = q(J(t)).description;
  n && !e.transaction && e.type === `transaction` && (e.transaction = n);
}
function D_(e, t) {
  ((e.fingerprint = e.fingerprint
    ? Array.isArray(e.fingerprint)
      ? e.fingerprint
      : [e.fingerprint]
    : []),
    t && (e.fingerprint = e.fingerprint.concat(t)),
    e.fingerprint && !e.fingerprint.length && delete e.fingerprint);
}
g();
function O_(e, t, n, r, i, a) {
  let { normalizeDepth: o = 3, normalizeMaxBreadth: s = 1e3 } = e,
    c = _(
      _({}, t),
      {},
      {
        event_id: t.event_id || n.event_id || Dm(),
        timestamp: t.timestamp || wm(),
      },
    ),
    l = n.integrations || e.integrations.map((e) => e.name);
  (k_(c, e),
    M_(c, l),
    i && i.emit(`applyFrameMetadata`, t),
    t.type === void 0 && A_(c, e.stackParser));
  let u = P_(r, n.captureContext);
  n.mechanism && jm(c, n.mechanism);
  let d = i ? i.getEventProcessors() : [],
    f = oh().getScopeData();
  (a && x_(f, a.getScopeData()), u && x_(f, u.getScopeData()));
  let p = [...(n.attachments || []), ...f.attachments];
  return (
    p.length && (n.attachments = p),
    b_(c, f),
    h_([...d, ...f.eventProcessors], c, n).then(
      (e) => (e && j_(e), typeof o == `number` && o > 0 ? N_(e, o, s) : e),
    )
  );
}
function k_(e, t) {
  let { environment: n, release: r, dist: i, maxValueLength: a = 250 } = t;
  ((e.environment = e.environment || n || `production`),
    !e.release && r && (e.release = r),
    !e.dist && i && (e.dist = i),
    e.message && (e.message = lm(e.message, a)));
  let o = e.exception && e.exception.values && e.exception.values[0];
  o && o.value && (o.value = lm(o.value, a));
  let s = e.request;
  s && s.url && (s.url = lm(s.url, a));
}
function A_(e, t) {
  let n = y_(t);
  try {
    e.exception.values.forEach((e) => {
      e.stacktrace.frames.forEach((e) => {
        n && e.filename && (e.debug_id = n[e.filename]);
      });
    });
  } catch (e) {}
}
function j_(e) {
  let t = {};
  try {
    e.exception.values.forEach((e) => {
      e.stacktrace.frames.forEach((e) => {
        e.debug_id &&
          (e.abs_path
            ? (t[e.abs_path] = e.debug_id)
            : e.filename && (t[e.filename] = e.debug_id),
          delete e.debug_id);
      });
    });
  } catch (e) {}
  if (Object.keys(t).length === 0) return;
  ((e.debug_meta = e.debug_meta || {}),
    (e.debug_meta.images = e.debug_meta.images || []));
  let n = e.debug_meta.images;
  Object.entries(t).forEach(([e, t]) => {
    n.push({ type: `sourcemap`, code_file: e, debug_id: t });
  });
}
function M_(e, t) {
  t.length > 0 &&
    ((e.sdk = e.sdk || {}),
    (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
}
function N_(e, t, n) {
  if (!e) return null;
  let r = _(
    _(
      _(
        _(
          _({}, e),
          e.breadcrumbs && {
            breadcrumbs: e.breadcrumbs.map((e) =>
              _(_({}, e), e.data && { data: Sg(e.data, t, n) }),
            ),
          },
        ),
        e.user && { user: Sg(e.user, t, n) },
      ),
      e.contexts && { contexts: Sg(e.contexts, t, n) },
    ),
    e.extra && { extra: Sg(e.extra, t, n) },
  );
  return (
    e.contexts &&
      e.contexts.trace &&
      r.contexts &&
      ((r.contexts.trace = e.contexts.trace),
      e.contexts.trace.data &&
        (r.contexts.trace.data = Sg(e.contexts.trace.data, t, n))),
    e.spans &&
      (r.spans = e.spans.map((e) =>
        _(_({}, e), e.data && { data: Sg(e.data, t, n) }),
      )),
    e.contexts &&
      e.contexts.flags &&
      r.contexts &&
      (r.contexts.flags = Sg(e.contexts.flags, 3, n)),
    r
  );
}
function P_(e, t) {
  if (!t) return e;
  let n = e ? e.clone() : new Ym();
  return (n.update(t), n);
}
function F_(e) {
  if (e) return I_(e) || R_(e) ? { captureContext: e } : e;
}
function I_(e) {
  return e instanceof Ym || typeof e == `function`;
}
var L_ = [
  `user`,
  `level`,
  `extra`,
  `contexts`,
  `tags`,
  `fingerprint`,
  `requestSession`,
  `propagationContext`,
];
function R_(e) {
  return Object.keys(e).some((e) => L_.includes(e));
}
g();
function z_(e, t) {
  return W().captureException(e, F_(t));
}
function B_(e, t) {
  return W().captureEvent(e, t);
}
function V_(e, t) {
  ah().setContext(e, t);
}
function H_() {
  let e = G();
  return !!e && e.getOptions().enabled !== !1 && !!e.getTransport();
}
function U_(e) {
  let t = G(),
    n = ah(),
    r = W(),
    { release: i, environment: a = ig } = (t && t.getOptions()) || {},
    { userAgent: o } = B.navigator || {},
    s = Rm(
      _(
        _(
          { release: i, environment: a, user: r.getUser() || n.getUser() },
          o && { userAgent: o },
        ),
        e,
      ),
    ),
    c = n.getSession();
  return (
    c && c.status === `ok` && zm(c, { status: `exited` }),
    W_(),
    n.setSession(s),
    r.setSession(s),
    s
  );
}
function W_() {
  let e = ah(),
    t = W(),
    n = t.getSession() || e.getSession();
  (n && Bm(n), G_(), e.setSession(), t.setSession());
}
function G_() {
  let e = ah(),
    t = W(),
    n = G(),
    r = t.getSession() || e.getSession();
  r && n && n.captureSession(r);
}
function K_(e = !1) {
  if (e) {
    W_();
    return;
  }
  G_();
}
var q_ = `7`;
function J_(e) {
  let t = e.protocol ? `${e.protocol}:` : ``,
    n = e.port ? `:${e.port}` : ``;
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ``}/api/`;
}
function Y_(e) {
  return `${J_(e)}${e.projectId}/envelope/`;
}
function X_(e, t) {
  let n = { sentry_version: q_ };
  return (
    e.publicKey && (n.sentry_key = e.publicKey),
    t && (n.sentry_client = `${t.name}/${t.version}`),
    new URLSearchParams(n).toString()
  );
}
function Z_(e, t, n) {
  return t || `${Y_(e)}?${X_(e, n)}`;
}
var Q_ = [];
function $_(e) {
  let t = {};
  return (
    e.forEach((e) => {
      let { name: n } = e,
        r = t[n];
      (r && !r.isDefaultInstance && e.isDefaultInstance) || (t[n] = e);
    }),
    Object.values(t)
  );
}
function ev(e) {
  let t = e.defaultIntegrations || [],
    n = e.integrations;
  t.forEach((e) => {
    e.isDefaultInstance = !0;
  });
  let r;
  if (Array.isArray(n)) r = [...t, ...n];
  else if (typeof n == `function`) {
    let e = n(t);
    r = Array.isArray(e) ? e : [e];
  } else r = t;
  let i = $_(r),
    a = i.findIndex((e) => e.name === `Debug`);
  if (a > -1) {
    let [e] = i.splice(a, 1);
    i.push(e);
  }
  return i;
}
function tv(e, t) {
  let n = {};
  return (
    t.forEach((t) => {
      t && rv(e, t, n);
    }),
    n
  );
}
function nv(e, t) {
  for (let n of t) n && n.afterAllSetup && n.afterAllSetup(e);
}
function rv(e, t, n) {
  if (n[t.name]) {
    z &&
      V.log(`Integration skipped because it was already installed: ${t.name}`);
    return;
  }
  if (
    ((n[t.name] = t),
    Q_.indexOf(t.name) === -1 &&
      typeof t.setupOnce == `function` &&
      (t.setupOnce(), Q_.push(t.name)),
    t.setup && typeof t.setup == `function` && t.setup(e),
    typeof t.preprocessEvent == `function`)
  ) {
    let n = t.preprocessEvent.bind(t);
    e.on(`preprocessEvent`, (t, r) => n(t, r, e));
  }
  if (typeof t.processEvent == `function`) {
    let n = t.processEvent.bind(t),
      r = Object.assign((t, r) => n(t, r, e), { id: t.name });
    e.addEventProcessor(r);
  }
  z && V.log(`Integration installed: ${t.name}`);
}
function iv(e) {
  return e;
}
function av(e, t, n) {
  let r = [
    { type: `client_report` },
    { timestamp: n || wm(), discarded_events: e },
  ];
  return kg(t ? { dsn: t } : {}, [r]);
}
var ov = class extends Error {
  constructor(e, t = `warn`) {
    (super(e), (this.message = e), (this.logLevel = t));
  }
};
g();
var sv = `Not capturing exception because it's already been captured.`,
  cv = class {
    constructor(e) {
      if (
        ((this._options = e),
        (this._integrations = {}),
        (this._numProcessing = 0),
        (this._outcomes = {}),
        (this._hooks = {}),
        (this._eventProcessors = []),
        e.dsn
          ? (this._dsn = bg(e.dsn))
          : z && V.warn(`No DSN provided, client will not send events.`),
        this._dsn)
      ) {
        let t = Z_(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
        this._transport = e.transport(
          _(
            _(
              {
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
              },
              e.transportOptions,
            ),
            {},
            { url: t },
          ),
        );
      }
      let t = [`enableTracing`, `tracesSampleRate`, `tracesSampler`].find(
        (t) => t in e && e[t] == null,
      );
      t &&
        mp(() => {
          console.warn(
            `[Sentry] Deprecation warning: \`${t}\` is set to undefined, which leads to tracing being enabled. In v9, a value of \`undefined\` will result in tracing being disabled.`,
          );
        });
    }
    captureException(e, t, n) {
      let r = Dm();
      if (Mm(e)) return (z && V.log(sv), r);
      let i = _({ event_id: r }, t);
      return (
        this._process(
          this.eventFromException(e, i).then((e) =>
            this._captureEvent(e, i, n),
          ),
        ),
        i.event_id
      );
    }
    captureMessage(e, t, n, r) {
      let i = _({ event_id: Dm() }, n),
        a = Kp(e) ? e : String(e),
        o = qp(e)
          ? this.eventFromMessage(a, t, i)
          : this.eventFromException(e, i);
      return (
        this._process(o.then((e) => this._captureEvent(e, i, r))),
        i.event_id
      );
    }
    captureEvent(e, t, n) {
      let r = Dm();
      if (t && t.originalException && Mm(t.originalException))
        return (z && V.log(sv), r);
      let i = _({ event_id: r }, t),
        a = (e.sdkProcessingMetadata || {}).capturedSpanScope;
      return (this._process(this._captureEvent(e, i, a || n)), i.event_id);
    }
    captureSession(e) {
      typeof e.release == `string`
        ? (this.sendSession(e), zm(e, { init: !1 }))
        : z &&
          V.warn(`Discarded session because of missing or non-string release`);
    }
    getDsn() {
      return this._dsn;
    }
    getOptions() {
      return this._options;
    }
    getSdkMetadata() {
      return this._options._metadata;
    }
    getTransport() {
      return this._transport;
    }
    flush(e) {
      let t = this._transport;
      return t
        ? (this.emit(`flush`),
          this._isClientDoneProcessing(e).then((n) =>
            t.flush(e).then((e) => n && e),
          ))
        : Fm(!0);
    }
    close(e) {
      return this.flush(e).then(
        (e) => ((this.getOptions().enabled = !1), this.emit(`close`), e),
      );
    }
    getEventProcessors() {
      return this._eventProcessors;
    }
    addEventProcessor(e) {
      this._eventProcessors.push(e);
    }
    init() {
      (this._isEnabled() ||
        this._options.integrations.some(({ name: e }) =>
          e.startsWith(`Spotlight`),
        )) &&
        this._setupIntegrations();
    }
    getIntegrationByName(e) {
      return this._integrations[e];
    }
    addIntegration(e) {
      let t = this._integrations[e.name];
      (rv(this, e, this._integrations), t || nv(this, [e]));
    }
    sendEvent(e, t = {}) {
      this.emit(`beforeSendEvent`, e, t);
      let n = Ug(e, this._dsn, this._options._metadata, this._options.tunnel);
      for (let e of t.attachments || []) n = Ag(n, Ig(e));
      let r = this.sendEnvelope(n);
      r && r.then((t) => this.emit(`afterSendEvent`, e, t), null);
    }
    sendSession(e) {
      let t = Hg(e, this._dsn, this._options._metadata, this._options.tunnel);
      this.sendEnvelope(t);
    }
    recordDroppedEvent(e, t, n) {
      if (this._options.sendClientReports) {
        let r = typeof n == `number` ? n : 1,
          i = `${e}:${t}`;
        (z && V.log(`Recording outcome: "${i}"${r > 1 ? ` (${r} times)` : ``}`),
          (this._outcomes[i] = (this._outcomes[i] || 0) + r));
      }
    }
    on(e, t) {
      let n = (this._hooks[e] = this._hooks[e] || []);
      return (
        n.push(t),
        () => {
          let e = n.indexOf(t);
          e > -1 && n.splice(e, 1);
        }
      );
    }
    emit(e, ...t) {
      let n = this._hooks[e];
      n && n.forEach((e) => e(...t));
    }
    sendEnvelope(e) {
      return (
        this.emit(`beforeEnvelope`, e),
        this._isEnabled() && this._transport
          ? this._transport
              .send(e)
              .then(
                null,
                (e) => (z && V.error(`Error while sending envelope:`, e), e),
              )
          : (z && V.error(`Transport disabled`), Fm({}))
      );
    }
    _setupIntegrations() {
      let { integrations: e } = this._options;
      ((this._integrations = tv(this, e)), nv(this, e));
    }
    _updateSessionFromEvent(e, t) {
      let n = t.level === `fatal`,
        r = !1,
        i = t.exception && t.exception.values;
      if (i) {
        r = !0;
        for (let e of i) {
          let t = e.mechanism;
          if (t && t.handled === !1) {
            n = !0;
            break;
          }
        }
      }
      let a = e.status === `ok`;
      ((a && e.errors === 0) || (a && n)) &&
        (zm(
          e,
          _(
            _({}, n && { status: `crashed` }),
            {},
            { errors: e.errors || Number(r || n) },
          ),
        ),
        this.captureSession(e));
    }
    _isClientDoneProcessing(e) {
      return new Lm((t) => {
        let n = 0,
          r = setInterval(() => {
            this._numProcessing == 0
              ? (clearInterval(r), t(!0))
              : ((n += 1), e && n >= e && (clearInterval(r), t(!1)));
          }, 1);
      });
    }
    _isEnabled() {
      return this.getOptions().enabled !== !1 && this._transport !== void 0;
    }
    _prepareEvent(e, t, n = W(), r = ah()) {
      let i = this.getOptions(),
        a = Object.keys(this._integrations);
      return (
        !t.integrations && a.length > 0 && (t.integrations = a),
        this.emit(`preprocessEvent`, e, t),
        e.type || r.setLastEventId(e.event_id || t.event_id),
        O_(i, e, t, n, this, r).then((e) =>
          e === null
            ? e
            : ((e.contexts = _({ trace: ch(n) }, e.contexts)),
              (e.sdkProcessingMetadata = _(
                { dynamicSamplingContext: cg(this, n) },
                e.sdkProcessingMetadata,
              )),
              e),
        )
      );
    }
    _captureEvent(e, t = {}, n) {
      return this._processEvent(e, t, n).then(
        (e) => e.event_id,
        (e) => {
          z &&
            (e instanceof ov && e.logLevel === `log`
              ? V.log(e.message)
              : V.warn(e));
        },
      );
    }
    _processEvent(e, t, n) {
      let r = this.getOptions(),
        { sampleRate: i } = r,
        a = fv(e),
        o = dv(e),
        s = e.type || `error`,
        c = `before send for type \`${s}\``,
        l = i === void 0 ? void 0 : fg(i);
      if (o && typeof l == `number` && Math.random() > l)
        return (
          this.recordDroppedEvent(`sample_rate`, `error`, e),
          Im(
            new ov(
              `Discarding event because it's not included in the random sample (sampling rate = ${i})`,
              `log`,
            ),
          )
        );
      let u = s === `replay_event` ? `replay` : s,
        d = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
      return this._prepareEvent(e, t, n, d)
        .then((n) => {
          if (n === null)
            throw (
              this.recordDroppedEvent(`event_processor`, u, e),
              new ov(
                "An event processor returned `null`, will not send event.",
                `log`,
              )
            );
          return t.data && t.data.__sentry__ === !0
            ? n
            : lv(uv(this, r, n, t), c);
        })
        .then((r) => {
          if (r === null) {
            if ((this.recordDroppedEvent(`before_send`, u, e), a)) {
              let t = 1 + (e.spans || []).length;
              this.recordDroppedEvent(`before_send`, `span`, t);
            }
            throw new ov(`${c} returned \`null\`, will not send event.`, `log`);
          }
          let i = n && n.getSession();
          if ((!a && i && this._updateSessionFromEvent(i, r), a)) {
            let e =
              ((r.sdkProcessingMetadata &&
                r.sdkProcessingMetadata.spanCountBeforeProcessing) ||
                0) - (r.spans ? r.spans.length : 0);
            e > 0 && this.recordDroppedEvent(`before_send`, `span`, e);
          }
          let o = r.transaction_info;
          return (
            a &&
              o &&
              r.transaction !== e.transaction &&
              (r.transaction_info = _(_({}, o), {}, { source: `custom` })),
            this.sendEvent(r, t),
            r
          );
        })
        .then(null, (e) => {
          throw e instanceof ov
            ? e
            : (this.captureException(e, {
                data: { __sentry__: !0 },
                originalException: e,
              }),
              new ov(
                `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`,
              ));
        });
    }
    _process(e) {
      (this._numProcessing++,
        e.then(
          (e) => (this._numProcessing--, e),
          (e) => (this._numProcessing--, e),
        ));
    }
    _clearOutcomes() {
      let e = this._outcomes;
      return (
        (this._outcomes = {}),
        Object.entries(e).map(([e, t]) => {
          let [n, r] = e.split(`:`);
          return { reason: n, category: r, quantity: t };
        })
      );
    }
    _flushOutcomes() {
      z && V.log(`Flushing outcomes...`);
      let e = this._clearOutcomes();
      if (e.length === 0) {
        z && V.log(`No outcomes to send`);
        return;
      }
      if (!this._dsn) {
        z && V.log(`No dsn provided, will not send outcomes`);
        return;
      }
      z && V.log(`Sending outcomes:`, e);
      let t = av(e, this._options.tunnel && gg(this._dsn));
      this.sendEnvelope(t);
    }
  };
function lv(e, t) {
  let n = `${t} must return \`null\` or a valid event.`;
  if (Qp(e))
    return e.then(
      (e) => {
        if (!Jp(e) && e !== null) throw new ov(n);
        return e;
      },
      (e) => {
        throw new ov(`${t} rejected with ${e}`);
      },
    );
  if (!Jp(e) && e !== null) throw new ov(n);
  return e;
}
function uv(e, t, n, r) {
  let { beforeSend: i, beforeSendTransaction: a, beforeSendSpan: o } = t;
  if (dv(n) && i) return i(n, r);
  if (fv(n)) {
    if (n.spans && o) {
      let t = [];
      for (let r of n.spans) {
        let n = o(r);
        n ? t.push(n) : (Jh(), e.recordDroppedEvent(`before_send`, `span`));
      }
      n.spans = t;
    }
    if (a) {
      if (n.spans) {
        let e = n.spans.length;
        n.sdkProcessingMetadata = _(
          _({}, n.sdkProcessingMetadata),
          {},
          { spanCountBeforeProcessing: e },
        );
      }
      return a(n, r);
    }
  }
  return n;
}
function dv(e) {
  return e.type === void 0;
}
function fv(e) {
  return e.type === `transaction`;
}
function pv(e, t) {
  (t.debug === !0 &&
    (z
      ? V.enable()
      : mp(() => {
          console.warn(
            "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.",
          );
        })),
    W().update(t.initialScope));
  let n = new e(t);
  return (mv(n), n.init(), n);
}
function mv(e) {
  W().setClient(e);
}
function hv(e) {
  let t = [];
  function n() {
    return e === void 0 || t.length < e;
  }
  function r(e) {
    return t.splice(t.indexOf(e), 1)[0] || Promise.resolve(void 0);
  }
  function i(e) {
    if (!n())
      return Im(new ov(`Not adding Promise because buffer limit was reached.`));
    let i = e();
    return (
      t.indexOf(i) === -1 && t.push(i),
      i.then(() => r(i)).then(null, () => r(i).then(null, () => {})),
      i
    );
  }
  function a(e) {
    return new Lm((n, r) => {
      let i = t.length;
      if (!i) return n(!0);
      let a = setTimeout(() => {
        e && e > 0 && n(!1);
      }, e);
      t.forEach((e) => {
        Fm(e).then(() => {
          --i || (clearTimeout(a), n(!0));
        }, r);
      });
    });
  }
  return { $: t, add: i, drain: a };
}
g();
var gv = 60 * 1e3;
function _v(e, t = Date.now()) {
  let n = parseInt(`${e}`, 10);
  if (!isNaN(n)) return n * 1e3;
  let r = Date.parse(`${e}`);
  return isNaN(r) ? gv : r - t;
}
function vv(e, t) {
  return e[t] || e.all || 0;
}
function yv(e, t, n = Date.now()) {
  return vv(e, t) > n;
}
function bv(e, { statusCode: t, headers: n }, r = Date.now()) {
  let i = _({}, e),
    a = n && n[`x-sentry-rate-limits`],
    o = n && n[`retry-after`];
  if (a)
    for (let e of a.trim().split(`,`)) {
      let [t, n, , , a] = e.split(`:`, 5),
        o = parseInt(t, 10),
        s = (isNaN(o) ? 60 : o) * 1e3;
      if (!n) i.all = r + s;
      else
        for (let e of n.split(`;`))
          e === `metric_bucket`
            ? (!a || a.split(`;`).includes(`custom`)) && (i[e] = r + s)
            : (i[e] = r + s);
    }
  else o ? (i.all = r + _v(o, r)) : t === 429 && (i.all = r + 60 * 1e3);
  return i;
}
function xv(e, t, n = hv(e.bufferSize || 64)) {
  let r = {},
    i = (e) => n.drain(e);
  function a(i) {
    let a = [];
    if (
      (jg(i, (t, n) => {
        let i = Rg(n);
        if (yv(r, i)) {
          let r = Sv(t, n);
          e.recordDroppedEvent(`ratelimit_backoff`, i, r);
        } else a.push(t);
      }),
      a.length === 0)
    )
      return Fm({});
    let o = kg(i[0], a),
      s = (t) => {
        jg(o, (n, r) => {
          let i = Sv(n, r);
          e.recordDroppedEvent(t, Rg(r), i);
        });
      };
    return n
      .add(() =>
        t({ body: Ng(o) }).then(
          (e) => (
            e.statusCode !== void 0 &&
              (e.statusCode < 200 || e.statusCode >= 300) &&
              z &&
              V.warn(
                `Sentry responded with status code ${e.statusCode} to sent event.`,
              ),
            (r = bv(r, e)),
            e
          ),
          (e) => {
            throw (s(`network_error`), e);
          },
        ),
      )
      .then(
        (e) => e,
        (e) => {
          if (e instanceof ov)
            return (
              z && V.error(`Skipped sending event because buffer is full.`),
              s(`queue_overflow`),
              Fm({})
            );
          throw e;
        },
      );
  }
  return { send: a, flush: i };
}
function Sv(e, t) {
  if (!(t !== `event` && t !== `transaction`))
    return Array.isArray(e) ? e[1] : void 0;
}
function Cv(e, t, n = [t], r = `npm`) {
  let i = e._metadata || {};
  (i.sdk ||
    (i.sdk = {
      name: `sentry.javascript.${t}`,
      packages: n.map((e) => ({ name: `${r}:@sentry/${e}`, version: cp })),
      version: cp,
    }),
    (e._metadata = i));
}
function wv(e = {}) {
  let t = G();
  if (!H_() || !t) return {};
  let n = ih(Lp());
  if (n.getTraceData) return n.getTraceData(e);
  let r = W(),
    i = e.span || Y(),
    a = i ? Ih(i) : Tv(r),
    o = Th(i ? lg(i) : cg(t, r));
  return kh.test(a)
    ? { "sentry-trace": a, baggage: o }
    : (V.warn(`Invalid sentry-trace data. Cannot generate trace data`), {});
}
function Tv(e) {
  let { traceId: t, sampled: n, spanId: r } = e.getPropagationContext();
  return Mh(t, r, n);
}
g();
var Ev = 100;
function Dv(e, t) {
  let n = G(),
    r = ah();
  if (!n) return;
  let { beforeBreadcrumb: i = null, maxBreadcrumbs: a = Ev } = n.getOptions();
  if (a <= 0) return;
  let o = _({ timestamp: wm() }, e),
    s = i ? mp(() => i(o, t)) : o;
  s !== null &&
    (n.emit && n.emit(`beforeAddBreadcrumb`, s, t), r.addBreadcrumb(s, a));
}
var Ov,
  kv = `FunctionToString`,
  Av = new WeakMap(),
  jv = iv(() => ({
    name: kv,
    setupOnce() {
      Ov = Function.prototype.toString;
      try {
        Function.prototype.toString = function (...e) {
          let t = gm(this),
            n = Av.has(G()) && t !== void 0 ? t : this;
          return Ov.apply(n, e);
        };
      } catch (e) {}
    },
    setup(e) {
      Av.set(e, !0);
    },
  })),
  Mv = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/,
    /^ResizeObserver loop completed with undelivered notifications.$/,
    /^Cannot redefine property: googletag$/,
    /^Can't find variable: gmo$/,
    `undefined is not an object (evaluating 'a.L')`,
    `can't redefine non-configurable property "solana"`,
    `vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)`,
    `Can't find variable: _AutofillCallbackHandler`,
    /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/,
    /^Java exception was raised during method invocation$/,
  ],
  Nv = `InboundFilters`,
  Pv = iv((e = {}) => ({
    name: Nv,
    processEvent(t, n, r) {
      return Iv(t, Fv(e, r.getOptions())) ? null : t;
    },
  }));
function Fv(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : Mv),
    ],
    ignoreTransactions: [
      ...(e.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
    ],
    ignoreInternal: e.ignoreInternal === void 0 ? !0 : e.ignoreInternal,
  };
}
function Iv(e, t) {
  return t.ignoreInternal && Hv(e)
    ? (z &&
        V.warn(
          `Event dropped due to being internal Sentry Error.\nEvent: ${km(e)}`,
        ),
      !0)
    : Lv(e, t.ignoreErrors)
      ? (z &&
          V.warn(
            `Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${km(e)}`,
          ),
        !0)
      : Gv(e)
        ? (z &&
            V.warn(
              `Event dropped due to not having an error message, error type or stacktrace.\nEvent: ${km(e)}`,
            ),
          !0)
        : Rv(e, t.ignoreTransactions)
          ? (z &&
              V.warn(
                `Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${km(e)}`,
              ),
            !0)
          : zv(e, t.denyUrls)
            ? (z &&
                V.warn(
                  `Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${km(e)}.\nUrl: ${Wv(e)}`,
                ),
              !0)
            : Bv(e, t.allowUrls)
              ? !1
              : (z &&
                  V.warn(
                    `Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${km(e)}.\nUrl: ${Wv(e)}`,
                  ),
                !0);
}
function Lv(e, t) {
  return e.type || !t || !t.length ? !1 : Vv(e).some((e) => fm(e, t));
}
function Rv(e, t) {
  if (e.type !== `transaction` || !t || !t.length) return !1;
  let n = e.transaction;
  return n ? fm(n, t) : !1;
}
function zv(e, t) {
  if (!t || !t.length) return !1;
  let n = Wv(e);
  return n ? fm(n, t) : !1;
}
function Bv(e, t) {
  if (!t || !t.length) return !0;
  let n = Wv(e);
  return n ? fm(n, t) : !0;
}
function Vv(e) {
  let t = [];
  e.message && t.push(e.message);
  let n;
  try {
    n = e.exception.values[e.exception.values.length - 1];
  } catch (e) {}
  return (
    n &&
      n.value &&
      (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`)),
    t
  );
}
function Hv(e) {
  try {
    return e.exception.values[0].type === `SentryError`;
  } catch (e) {}
  return !1;
}
function Uv(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n && n.filename !== `<anonymous>` && n.filename !== `[native code]`)
      return n.filename || null;
  }
  return null;
}
function Wv(e) {
  try {
    let t;
    try {
      t = e.exception.values[0].stacktrace.frames;
    } catch (e) {}
    return t ? Uv(t) : null;
  } catch (t) {
    return (z && V.error(`Cannot extract url for event ${km(e)}`), null);
  }
}
function Gv(e) {
  return e.type ||
    !e.exception ||
    !e.exception.values ||
    e.exception.values.length === 0
    ? !1
    : !e.message &&
        !e.exception.values.some(
          (e) => e.stacktrace || (e.type && e.type !== `Error`) || e.value,
        );
}
g();
function Kv(e, t, n = 250, r, i, a, o) {
  if (
    !a.exception ||
    !a.exception.values ||
    !o ||
    !em(o.originalException, Error)
  )
    return;
  let s =
    a.exception.values.length > 0
      ? a.exception.values[a.exception.values.length - 1]
      : void 0;
  s &&
    (a.exception.values = Xv(
      qv(e, t, i, o.originalException, r, a.exception.values, s, 0),
      n,
    ));
}
function qv(e, t, n, r, i, a, o, s) {
  if (a.length >= n + 1) return a;
  let c = [...a];
  if (em(r[i], Error)) {
    Jv(o, s);
    let a = e(t, r[i]),
      l = c.length;
    (Yv(a, i, l, s), (c = qv(e, t, n, r[i], i, [a, ...c], a, l)));
  }
  return (
    Array.isArray(r.errors) &&
      r.errors.forEach((r, a) => {
        if (em(r, Error)) {
          Jv(o, s);
          let l = e(t, r),
            u = c.length;
          (Yv(l, `errors[${a}]`, u, s),
            (c = qv(e, t, n, r, i, [l, ...c], l, u)));
        }
      }),
    c
  );
}
function Jv(e, t) {
  ((e.mechanism = e.mechanism || { type: `generic`, handled: !0 }),
    (e.mechanism = _(
      _(
        _({}, e.mechanism),
        e.type === `AggregateError` && { is_exception_group: !0 },
      ),
      {},
      { exception_id: t },
    )));
}
function Yv(e, t, n, r) {
  ((e.mechanism = e.mechanism || { type: `generic`, handled: !0 }),
    (e.mechanism = _(
      _({}, e.mechanism),
      {},
      { type: `chained`, source: t, exception_id: n, parent_id: r },
    )));
}
function Xv(e, t) {
  return e.map((e) => (e.value && (e.value = lm(e.value, t)), e));
}
function Zv(e) {
  if (!e) return {};
  let t = e.match(
    /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,
  );
  if (!t) return {};
  let n = t[6] || ``,
    r = t[8] || ``;
  return {
    host: t[4],
    path: t[5],
    protocol: t[2],
    search: n,
    hash: r,
    relative: t[5] + n + r,
  };
}
function Qv(e) {
  let t = `console`;
  (Op(t, e), kp(t, $v));
}
function $v() {
  `console` in B &&
    fp.forEach(function (e) {
      e in B.console &&
        pm(B.console, e, function (t) {
          return (
            (pp[e] = t),
            function (...t) {
              Ap(`console`, { args: t, level: e });
              let n = pp[e];
              n && n.apply(B.console, t);
            }
          );
        });
    });
}
function ey(e) {
  return e === `warn`
    ? `warning`
    : [`fatal`, `error`, `warning`, `log`, `info`, `debug`].includes(e)
      ? e
      : `log`;
}
var ty = `Dedupe`,
  ny = iv(() => {
    let e;
    return {
      name: ty,
      processEvent(t) {
        if (t.type) return t;
        try {
          if (ry(t, e))
            return (
              z &&
                V.warn(
                  `Event dropped due to being a duplicate of previously captured event.`,
                ),
              null
            );
        } catch (e) {}
        return (e = t);
      },
    };
  });
function ry(e, t) {
  return t ? !!(iy(e, t) || ay(e, t)) : !1;
}
function iy(e, t) {
  let n = e.message,
    r = t.message;
  return !(
    (!n && !r) ||
    (n && !r) ||
    (!n && r) ||
    n !== r ||
    !sy(e, t) ||
    !oy(e, t)
  );
}
function ay(e, t) {
  let n = cy(t),
    r = cy(e);
  return !(
    !n ||
    !r ||
    n.type !== r.type ||
    n.value !== r.value ||
    !sy(e, t) ||
    !oy(e, t)
  );
}
function oy(e, t) {
  let n = Tp(e),
    r = Tp(t);
  if (!n && !r) return !0;
  if ((n && !r) || (!n && r) || ((n = n), (r = r), r.length !== n.length))
    return !1;
  for (let e = 0; e < r.length; e++) {
    let t = r[e],
      i = n[e];
    if (
      t.filename !== i.filename ||
      t.lineno !== i.lineno ||
      t.colno !== i.colno ||
      t.function !== i.function
    )
      return !1;
  }
  return !0;
}
function sy(e, t) {
  let n = e.fingerprint,
    r = t.fingerprint;
  if (!n && !r) return !0;
  if ((n && !r) || (!n && r)) return !1;
  ((n = n), (r = r));
  try {
    return n.join(``) === r.join(``);
  } catch (e) {
    return !1;
  }
}
function cy(e) {
  return e.exception && e.exception.values && e.exception.values[0];
}
g();
function ly(e, t, n, r, i = `auto.http.browser`) {
  if (!e.fetchData) return;
  let a = ng() && t(e.fetchData.url);
  if (e.endTimestamp && a) {
    let t = e.fetchData.__span;
    if (!t) return;
    let n = r[t];
    n && (fy(n, e), delete r[t]);
    return;
  }
  let { method: o, url: s } = e.fetchData,
    c = dy(s),
    l = c ? Zv(c).host : void 0,
    u = !!Y(),
    d =
      a && u
        ? e_({
            name: `${o} ${s}`,
            attributes: {
              url: s,
              type: `fetch`,
              "http.method": o,
              "http.url": c,
              "server.address": l,
              [K]: i,
              [ph]: `http.client`,
            },
          })
        : new rg();
  if (
    ((e.fetchData.__span = d.spanContext().spanId),
    (r[d.spanContext().spanId] = d),
    n(e.fetchData.url))
  ) {
    let t = e.args[0],
      n = e.args[1] || {},
      r = uy(t, n, ng() && u ? d : void 0);
    r && ((e.args[1] = n), (n.headers = r));
  }
  return d;
}
function uy(e, t, n) {
  let r = wv({ span: n }),
    i = r[`sentry-trace`],
    a = r.baggage;
  if (!i) return;
  let o = t.headers || (my(e) ? e.headers : void 0);
  if (!o) return _({}, r);
  if (hy(o)) {
    let e = new Headers(o);
    if ((e.set(`sentry-trace`, i), a)) {
      let t = e.get(`baggage`);
      if (t) {
        let n = py(t);
        e.set(`baggage`, n ? `${n},${a}` : a);
      } else e.set(`baggage`, a);
    }
    return e;
  } else if (Array.isArray(o)) {
    let e = [
      ...o
        .filter((e) => !(Array.isArray(e) && e[0] === `sentry-trace`))
        .map((e) => {
          if (
            Array.isArray(e) &&
            e[0] === `baggage` &&
            typeof e[1] == `string`
          ) {
            let [t, n, ...r] = e;
            return [t, py(n), ...r];
          } else return e;
        }),
      [`sentry-trace`, i],
    ];
    return (a && e.push([`baggage`, a]), e);
  } else {
    let e = `baggage` in o ? o.baggage : void 0,
      t = [];
    return (
      Array.isArray(e)
        ? (t = e
            .map((e) => (typeof e == `string` ? py(e) : e))
            .filter((e) => e === ``))
        : e && t.push(py(e)),
      a && t.push(a),
      _(
        _({}, o),
        {},
        { "sentry-trace": i, baggage: t.length > 0 ? t.join(`,`) : void 0 },
      )
    );
  }
}
function dy(e) {
  try {
    return new URL(e).href;
  } catch (e) {
    return;
  }
}
function fy(e, t) {
  if (t.response) {
    xh(e, t.response.status);
    let n =
      t.response &&
      t.response.headers &&
      t.response.headers.get(`content-length`);
    if (n) {
      let t = parseInt(n);
      t > 0 && e.setAttribute(`http.response_content_length`, t);
    }
  } else t.error && e.setStatus({ code: 2, message: `internal_error` });
  e.end();
}
function py(e) {
  return e
    .split(`,`)
    .filter((e) => !e.split(`=`)[0].startsWith(Sh))
    .join(`,`);
}
function my(e) {
  return typeof Request < `u` && em(e, Request);
}
function hy(e) {
  return typeof Headers < `u` && em(e, Headers);
}
function gy(e) {
  if (e !== void 0) {
    if (e >= 400 && e < 500) return `warning`;
    if (e >= 500) return `error`;
  }
}
var _y = B;
function vy() {
  if (!(`fetch` in _y)) return !1;
  try {
    return (
      new Headers(),
      new Request(`http://www.example.com`),
      new Response(),
      !0
    );
  } catch (e) {
    return !1;
  }
}
function yy(e) {
  return (
    e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
  );
}
function by() {
  if (typeof EdgeRuntime == `string`) return !0;
  if (!vy()) return !1;
  if (yy(_y.fetch)) return !0;
  let e = !1,
    t = _y.document;
  if (t && typeof t.createElement == `function`)
    try {
      let n = t.createElement(`iframe`);
      ((n.hidden = !0),
        t.head.appendChild(n),
        n.contentWindow &&
          n.contentWindow.fetch &&
          (e = yy(n.contentWindow.fetch)),
        t.head.removeChild(n));
    } catch (e) {
      up &&
        V.warn(
          `Could not create sandbox iframe for pure fetch check, bailing to window.fetch: `,
          e,
        );
    }
  return e;
}
g();
function xy(e, t) {
  let n = `fetch`;
  (Op(n, e), kp(n, () => Cy(void 0, t)));
}
function Sy(e) {
  let t = `fetch-body-resolved`;
  (Op(t, e), kp(t, () => Cy(Ey)));
}
function Cy(e, t = !1) {
  (t && !by()) ||
    pm(B, `fetch`, function (t) {
      return function (...n) {
        let r = Error(),
          { method: i, url: a } = ky(n),
          o = {
            args: n,
            fetchData: { method: i, url: a },
            startTimestamp: U() * 1e3,
            virtualError: r,
          };
        return (
          e || Ap(`fetch`, _({}, o)),
          t.apply(B, n).then(
            (function () {
              var t = w(function* (t) {
                return (
                  e
                    ? e(t)
                    : Ap(
                        `fetch`,
                        _(
                          _({}, o),
                          {},
                          { endTimestamp: U() * 1e3, response: t },
                        ),
                      ),
                  t
                );
              });
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            (e) => {
              throw (
                Ap(
                  `fetch`,
                  _(_({}, o), {}, { endTimestamp: U() * 1e3, error: e }),
                ),
                Bp(e) &&
                  e.stack === void 0 &&
                  ((e.stack = r.stack), mm(e, `framesToPop`, 1)),
                e
              );
            },
          )
        );
      };
    });
}
function wy(e, t) {
  return Ty.apply(this, arguments);
}
function Ty() {
  return (
    (Ty = w(function* (e, t) {
      if (e && e.body) {
        let n = e.body,
          r = n.getReader(),
          i = setTimeout(() => {
            n.cancel().then(null, () => {});
          }, 90 * 1e3),
          a = !0;
        for (; a;) {
          let e;
          try {
            e = setTimeout(() => {
              n.cancel().then(null, () => {});
            }, 5e3);
            let { done: i } = yield r.read();
            (clearTimeout(e), i && (t(), (a = !1)));
          } catch (e) {
            a = !1;
          } finally {
            clearTimeout(e);
          }
        }
        (clearTimeout(i), r.releaseLock(), n.cancel().then(null, () => {}));
      }
    })),
    Ty.apply(this, arguments)
  );
}
function Ey(e) {
  let t;
  try {
    t = e.clone();
  } catch (e) {
    return;
  }
  wy(t, () => {
    Ap(`fetch-body-resolved`, { endTimestamp: U() * 1e3, response: e });
  });
}
function Dy(e, t) {
  return !!e && typeof e == `object` && !!e[t];
}
function Oy(e) {
  return typeof e == `string`
    ? e
    : e
      ? Dy(e, `url`)
        ? e.url
        : e.toString
          ? e.toString()
          : ``
      : ``;
}
function ky(e) {
  if (e.length === 0) return { method: `GET`, url: `` };
  if (e.length === 2) {
    let [t, n] = e;
    return {
      url: Oy(t),
      method: Dy(n, `method`) ? String(n.method).toUpperCase() : `GET`,
    };
  }
  let t = e[0];
  return {
    url: Oy(t),
    method: Dy(t, `method`) ? String(t.method).toUpperCase() : `GET`,
  };
}
function Ay() {
  return `npm`;
}
var jy = B;
function My() {
  let e = jy.chrome,
    t = e && e.app && e.app.runtime,
    n = `history` in jy && !!jy.history.pushState && !!jy.history.replaceState;
  return !t && n;
}
g();
var X = B,
  Ny = 0;
function Py() {
  return Ny > 0;
}
function Fy() {
  (Ny++,
    setTimeout(() => {
      Ny--;
    }));
}
function Iy(e, t = {}) {
  function n(e) {
    return typeof e == `function`;
  }
  if (!n(e)) return e;
  try {
    let t = e.__sentry_wrapped__;
    if (t) return typeof t == `function` ? t : e;
    if (gm(e)) return e;
  } catch (t) {
    return e;
  }
  let r = function (...n) {
    try {
      let r = n.map((e) => Iy(e, t));
      return e.apply(this, r);
    } catch (e) {
      throw (
        Fy(),
        sh((r) => {
          (r.addEventProcessor(
            (e) => (
              t.mechanism && (Am(e, void 0, void 0), jm(e, t.mechanism)),
              (e.extra = _(_({}, e.extra), {}, { arguments: n })),
              e
            ),
          ),
            z_(e));
        }),
        e
      );
    }
  };
  try {
    for (let t in e)
      Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
  } catch (e) {}
  (hm(r, e), mm(e, `__sentry_wrapped__`, r));
  try {
    Object.getOwnPropertyDescriptor(r, `name`).configurable &&
      Object.defineProperty(r, `name`, {
        get() {
          return e.name;
        },
      });
  } catch (e) {}
  return r;
}
var Ly = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__;
g();
function Ry(e, t) {
  let n = Vy(e, t),
    r = { type: Ky(t), value: qy(t) };
  return (
    n.length && (r.stacktrace = { frames: n }),
    r.type === void 0 &&
      r.value === `` &&
      (r.value = `Unrecoverable error caught`),
    r
  );
}
function zy(e, t, n, r) {
  let i = G(),
    a = i && i.getOptions().normalizeDepth,
    o = eb(t),
    s = { __serialized__: Cg(t, a) };
  if (o) return { exception: { values: [Ry(e, o)] }, extra: s };
  let c = {
    exception: {
      values: [
        {
          type: Yp(t) ? t.constructor.name : r ? `UnhandledRejection` : `Error`,
          value: Qy(t, { isUnhandledRejection: r }),
        },
      ],
    },
    extra: s,
  };
  if (n) {
    let t = Vy(e, n);
    t.length && (c.exception.values[0].stacktrace = { frames: t });
  }
  return c;
}
function By(e, t) {
  return { exception: { values: [Ry(e, t)] } };
}
function Vy(e, t) {
  let n = t.stacktrace || t.stack || ``,
    r = Uy(t),
    i = Wy(t);
  try {
    return e(n, r, i);
  } catch (e) {}
  return [];
}
var Hy = /Minified React error #\d+;/i;
function Uy(e) {
  return e && Hy.test(e.message) ? 1 : 0;
}
function Wy(e) {
  return typeof e.framesToPop == `number` ? e.framesToPop : 0;
}
function Gy(e) {
  return typeof WebAssembly < `u` && WebAssembly.Exception !== void 0
    ? e instanceof WebAssembly.Exception
    : !1;
}
function Ky(e) {
  let t = e && e.name;
  return !t && Gy(e)
    ? e.message && Array.isArray(e.message) && e.message.length == 2
      ? e.message[0]
      : `WebAssembly.Exception`
    : t;
}
function qy(e) {
  let t = e && e.message;
  return t
    ? t.error && typeof t.error.message == `string`
      ? t.error.message
      : Gy(e) && Array.isArray(e.message) && e.message.length == 2
        ? e.message[1]
        : t
    : `No error message`;
}
function Jy(e, t, n, r) {
  let i = Xy(e, t, (n && n.syntheticException) || void 0, r);
  return (
    jm(i),
    (i.level = `error`),
    n && n.event_id && (i.event_id = n.event_id),
    Fm(i)
  );
}
function Yy(e, t, n = `info`, r, i) {
  let a = Zy(e, t, (r && r.syntheticException) || void 0, i);
  return ((a.level = n), r && r.event_id && (a.event_id = r.event_id), Fm(a));
}
function Xy(e, t, n, r, i) {
  let a;
  if (Hp(t) && t.error) return By(e, t.error);
  if (Up(t) || Wp(t)) {
    let i = t;
    if (`stack` in t) a = By(e, t);
    else {
      let t = i.name || (Up(i) ? `DOMError` : `DOMException`),
        o = i.message ? `${t}: ${i.message}` : t;
      ((a = Zy(e, o, n, r)), Am(a, o));
    }
    return (
      `code` in i &&
        (a.tags = _(_({}, a.tags), {}, { "DOMException.code": `${i.code}` })),
      a
    );
  }
  return Bp(t)
    ? By(e, t)
    : Jp(t) || Yp(t)
      ? ((a = zy(e, t, n, i)), jm(a, { synthetic: !0 }), a)
      : ((a = Zy(e, t, n, r)),
        Am(a, `${t}`, void 0),
        jm(a, { synthetic: !0 }),
        a);
}
function Zy(e, t, n, r) {
  let i = {};
  if (r && n) {
    let r = Vy(e, n);
    (r.length &&
      (i.exception = { values: [{ value: t, stacktrace: { frames: r } }] }),
      jm(i, { synthetic: !0 }));
  }
  if (Kp(t)) {
    let { __sentry_template_string__: e, __sentry_template_values__: n } = t;
    return ((i.logentry = { message: e, params: n }), i);
  }
  return ((i.message = t), i);
}
function Qy(e, { isUnhandledRejection: t }) {
  let n = bm(e),
    r = t ? `promise rejection` : `exception`;
  return Hp(e)
    ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``
    : Yp(e)
      ? `Event \`${$y(e)}\` (type=${e.type}) captured as ${r}`
      : `Object captured as ${r} with keys: ${n}`;
}
function $y(e) {
  try {
    let t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : void 0;
  } catch (e) {}
}
function eb(e) {
  for (let t in e)
    if (Object.prototype.hasOwnProperty.call(e, t)) {
      let n = e[t];
      if (n instanceof Error) return n;
    }
}
g();
function tb(e, { metadata: t, tunnel: n, dsn: r }) {
  return kg(
    _(
      _(
        { event_id: e.event_id, sent_at: new Date().toISOString() },
        t && t.sdk && { sdk: { name: t.sdk.name, version: t.sdk.version } },
      ),
      !!n && !!r && { dsn: gg(r) },
    ),
    [nb(e)],
  );
}
function nb(e) {
  return [{ type: `user_report` }, e];
}
g();
var rb = class extends cv {
    constructor(e) {
      let t = _({ parentSpanIsAlwaysRootSpan: !0 }, e);
      (Cv(t, `browser`, [`browser`], X.SENTRY_SDK_SOURCE || Ay()),
        super(t),
        t.sendClientReports &&
          X.document &&
          X.document.addEventListener(`visibilitychange`, () => {
            X.document.visibilityState === `hidden` && this._flushOutcomes();
          }));
    }
    eventFromException(e, t) {
      return Jy(
        this._options.stackParser,
        e,
        t,
        this._options.attachStacktrace,
      );
    }
    eventFromMessage(e, t = `info`, n) {
      return Yy(
        this._options.stackParser,
        e,
        t,
        n,
        this._options.attachStacktrace,
      );
    }
    captureUserFeedback(e) {
      if (!this._isEnabled()) {
        Ly && V.warn(`SDK not enabled, will not capture user feedback.`);
        return;
      }
      let t = tb(e, {
        metadata: this.getSdkMetadata(),
        dsn: this.getDsn(),
        tunnel: this.getOptions().tunnel,
      });
      this.sendEnvelope(t);
    }
    _prepareEvent(e, t, n) {
      return (
        (e.platform = e.platform || `javascript`),
        super._prepareEvent(e, t, n)
      );
    }
  },
  ib = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__,
  ab = (e, t) => (e > t[1] ? `poor` : e > t[0] ? `needs-improvement` : `good`),
  ob = (e, t, n, r) => {
    let i, a;
    return (o) => {
      t.value >= 0 &&
        (o || r) &&
        ((a = t.value - (i || 0)),
        (a || i === void 0) &&
          ((i = t.value), (t.delta = a), (t.rating = ab(t.value, n)), e(t)));
    };
  },
  Z = B,
  sb = () =>
    `v4-${Date.now()}-${Math.floor(Math.random() * 8999999999999) + 0xe8d4a51000}`,
  cb = (e = !0) => {
    let t =
      Z.performance &&
      Z.performance.getEntriesByType &&
      Z.performance.getEntriesByType(`navigation`)[0];
    if (!e || (t && t.responseStart > 0 && t.responseStart < performance.now()))
      return t;
  },
  lb = () => {
    let e = cb();
    return (e && e.activationStart) || 0;
  },
  ub = (e, t) => {
    let n = cb(),
      r = `navigate`;
    return (
      n &&
        ((Z.document && Z.document.prerendering) || lb() > 0
          ? (r = `prerender`)
          : Z.document && Z.document.wasDiscarded
            ? (r = `restore`)
            : n.type && (r = n.type.replace(/_/g, `-`))),
      {
        name: e,
        value: t === void 0 ? -1 : t,
        rating: `good`,
        delta: 0,
        entries: [],
        id: sb(),
        navigationType: r,
      }
    );
  },
  db = (e, t, n) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        let r = new PerformanceObserver((e) => {
          Promise.resolve().then(() => {
            t(e.getEntries());
          });
        });
        return (
          r.observe(Object.assign({ type: e, buffered: !0 }, n || {})),
          r
        );
      }
    } catch (e) {}
  },
  fb = (e) => {
    let t = (t) => {
      (t.type === `pagehide` ||
        (Z.document && Z.document.visibilityState === `hidden`)) &&
        e(t);
    };
    Z.document &&
      (addEventListener(`visibilitychange`, t, !0),
      addEventListener(`pagehide`, t, !0));
  },
  pb = (e) => {
    let t = !1;
    return () => {
      t || (e(), (t = !0));
    };
  },
  mb = -1,
  hb = () =>
    Z.document.visibilityState === `hidden` && !Z.document.prerendering
      ? 0
      : 1 / 0,
  gb = (e) => {
    Z.document.visibilityState === `hidden` &&
      mb > -1 &&
      ((mb = e.type === `visibilitychange` ? e.timeStamp : 0), vb());
  },
  _b = () => {
    (addEventListener(`visibilitychange`, gb, !0),
      addEventListener(`prerenderingchange`, gb, !0));
  },
  vb = () => {
    (removeEventListener(`visibilitychange`, gb, !0),
      removeEventListener(`prerenderingchange`, gb, !0));
  },
  yb = () => (
    Z.document && mb < 0 && ((mb = hb()), _b()),
    {
      get firstHiddenTime() {
        return mb;
      },
    }
  ),
  bb = (e) => {
    Z.document && Z.document.prerendering
      ? addEventListener(`prerenderingchange`, () => e(), !0)
      : e();
  },
  xb = [1800, 3e3],
  Sb = (e, t = {}) => {
    bb(() => {
      let n = yb(),
        r = ub(`FCP`),
        i,
        a = db(`paint`, (e) => {
          e.forEach((e) => {
            e.name === `first-contentful-paint` &&
              (a.disconnect(),
              e.startTime < n.firstHiddenTime &&
                ((r.value = Math.max(e.startTime - lb(), 0)),
                r.entries.push(e),
                i(!0)));
          });
        });
      a && (i = ob(e, r, xb, t.reportAllChanges));
    });
  },
  Cb = [0.1, 0.25],
  wb = (e, t = {}) => {
    Sb(
      pb(() => {
        let n = ub(`CLS`, 0),
          r,
          i = 0,
          a = [],
          o = (e) => {
            (e.forEach((e) => {
              if (!e.hadRecentInput) {
                let t = a[0],
                  n = a[a.length - 1];
                i &&
                t &&
                n &&
                e.startTime - n.startTime < 1e3 &&
                e.startTime - t.startTime < 5e3
                  ? ((i += e.value), a.push(e))
                  : ((i = e.value), (a = [e]));
              }
            }),
              i > n.value && ((n.value = i), (n.entries = a), r()));
          },
          s = db(`layout-shift`, o);
        s &&
          ((r = ob(e, n, Cb, t.reportAllChanges)),
          fb(() => {
            (o(s.takeRecords()), r(!0));
          }),
          setTimeout(r, 0));
      }),
    );
  },
  Tb = [100, 300],
  Eb = (e, t = {}) => {
    bb(() => {
      let n = yb(),
        r = ub(`FID`),
        i,
        a = (e) => {
          e.startTime < n.firstHiddenTime &&
            ((r.value = e.processingStart - e.startTime),
            r.entries.push(e),
            i(!0));
        },
        o = (e) => {
          e.forEach(a);
        },
        s = db(`first-input`, o);
      ((i = ob(e, r, Tb, t.reportAllChanges)),
        s &&
          fb(
            pb(() => {
              (o(s.takeRecords()), s.disconnect());
            }),
          ));
    });
  },
  Db = 0,
  Ob = 1 / 0,
  kb = 0,
  Ab = (e) => {
    e.forEach((e) => {
      e.interactionId &&
        ((Ob = Math.min(Ob, e.interactionId)),
        (kb = Math.max(kb, e.interactionId)),
        (Db = kb ? (kb - Ob) / 7 + 1 : 0));
    });
  },
  jb,
  Mb = () => (jb ? Db : performance.interactionCount || 0),
  Nb = () => {
    `interactionCount` in performance ||
      jb ||
      (jb = db(`event`, Ab, {
        type: `event`,
        buffered: !0,
        durationThreshold: 0,
      }));
  },
  Pb = [],
  Fb = new Map(),
  Ib = 0,
  Lb = () => Mb() - Ib,
  Rb = () => Pb[Math.min(Pb.length - 1, Math.floor(Lb() / 50))],
  zb = 10,
  Bb = [],
  Vb = (e) => {
    if (
      (Bb.forEach((t) => t(e)),
      !(e.interactionId || e.entryType === `first-input`))
    )
      return;
    let t = Pb[Pb.length - 1],
      n = Fb.get(e.interactionId);
    if (n || Pb.length < zb || (t && e.duration > t.latency)) {
      if (n)
        e.duration > n.latency
          ? ((n.entries = [e]), (n.latency = e.duration))
          : e.duration === n.latency &&
            e.startTime === (n.entries[0] && n.entries[0].startTime) &&
            n.entries.push(e);
      else {
        let t = { id: e.interactionId, latency: e.duration, entries: [e] };
        (Fb.set(t.id, t), Pb.push(t));
      }
      (Pb.sort((e, t) => t.latency - e.latency),
        Pb.length > zb && Pb.splice(zb).forEach((e) => Fb.delete(e.id)));
    }
  },
  Hb = (e) => {
    let t = Z.requestIdleCallback || Z.setTimeout,
      n = -1;
    return (
      (e = pb(e)),
      Z.document && Z.document.visibilityState === `hidden`
        ? e()
        : ((n = t(e)), fb(e)),
      n
    );
  },
  Ub = [200, 500],
  Wb = (e, t = {}) => {
    `PerformanceEventTiming` in Z &&
      `interactionId` in PerformanceEventTiming.prototype &&
      bb(() => {
        Nb();
        let n = ub(`INP`),
          r,
          i = (e) => {
            Hb(() => {
              e.forEach(Vb);
              let t = Rb();
              t &&
                t.latency !== n.value &&
                ((n.value = t.latency), (n.entries = t.entries), r());
            });
          },
          a = db(`event`, i, {
            durationThreshold:
              t.durationThreshold == null ? 40 : t.durationThreshold,
          });
        ((r = ob(e, n, Ub, t.reportAllChanges)),
          a &&
            (a.observe({ type: `first-input`, buffered: !0 }),
            fb(() => {
              (i(a.takeRecords()), r(!0));
            })));
      });
  },
  Gb = [2500, 4e3],
  Kb = {},
  qb = (e, t = {}) => {
    bb(() => {
      let n = yb(),
        r = ub(`LCP`),
        i,
        a = (e) => {
          (t.reportAllChanges || (e = e.slice(-1)),
            e.forEach((e) => {
              e.startTime < n.firstHiddenTime &&
                ((r.value = Math.max(e.startTime - lb(), 0)),
                (r.entries = [e]),
                i());
            }));
        },
        o = db(`largest-contentful-paint`, a);
      if (o) {
        i = ob(e, r, Gb, t.reportAllChanges);
        let n = pb(() => {
          Kb[r.id] ||
            (a(o.takeRecords()), o.disconnect(), (Kb[r.id] = !0), i(!0));
        });
        ([`keydown`, `click`].forEach((e) => {
          Z.document &&
            addEventListener(e, () => Hb(n), { once: !0, capture: !0 });
        }),
          fb(n));
      }
    });
  },
  Jb = [800, 1800],
  Yb = (e) => {
    Z.document && Z.document.prerendering
      ? bb(() => Yb(e))
      : Z.document && Z.document.readyState !== `complete`
        ? addEventListener(`load`, () => Yb(e), !0)
        : setTimeout(e, 0);
  },
  Xb = (e, t = {}) => {
    let n = ub(`TTFB`),
      r = ob(e, n, Jb, t.reportAllChanges);
    Yb(() => {
      let e = cb();
      e &&
        ((n.value = Math.max(e.responseStart - lb(), 0)),
        (n.entries = [e]),
        r(!0));
    });
  },
  Zb = {},
  Qb = {},
  $b,
  ex,
  tx,
  nx,
  rx;
function ix(e, t = !1) {
  return gx(`cls`, e, dx, $b, t);
}
function ax(e, t = !1) {
  return gx(`lcp`, e, px, tx, t);
}
function ox(e) {
  return gx(`fid`, e, fx, ex);
}
function sx(e) {
  return gx(`ttfb`, e, mx, nx);
}
function cx(e) {
  return gx(`inp`, e, hx, rx);
}
function lx(e, t) {
  return (vx(e, t), Qb[e] || (_x(e), (Qb[e] = !0)), yx(e, t));
}
function ux(e, t) {
  let n = Zb[e];
  if (!(!n || !n.length))
    for (let r of n)
      try {
        r(t);
      } catch (t) {
        ib &&
          V.error(
            `Error while triggering instrumentation handler.\nType: ${e}\nName: ${wp(r)}\nError:`,
            t,
          );
      }
}
function dx() {
  return wb(
    (e) => {
      (ux(`cls`, { metric: e }), ($b = e));
    },
    { reportAllChanges: !0 },
  );
}
function fx() {
  return Eb((e) => {
    (ux(`fid`, { metric: e }), (ex = e));
  });
}
function px() {
  return qb(
    (e) => {
      (ux(`lcp`, { metric: e }), (tx = e));
    },
    { reportAllChanges: !0 },
  );
}
function mx() {
  return Xb((e) => {
    (ux(`ttfb`, { metric: e }), (nx = e));
  });
}
function hx() {
  return Wb((e) => {
    (ux(`inp`, { metric: e }), (rx = e));
  });
}
function gx(e, t, n, r, i = !1) {
  vx(e, t);
  let a;
  return (
    Qb[e] || ((a = n()), (Qb[e] = !0)),
    r && t({ metric: r }),
    yx(e, t, i ? a : void 0)
  );
}
function _x(e) {
  let t = {};
  (e === `event` && (t.durationThreshold = 0),
    db(
      e,
      (t) => {
        ux(e, { entries: t });
      },
      t,
    ));
}
function vx(e, t) {
  ((Zb[e] = Zb[e] || []), Zb[e].push(t));
}
function yx(e, t, n) {
  return () => {
    n && n();
    let r = Zb[e];
    if (!r) return;
    let i = r.indexOf(t);
    i !== -1 && r.splice(i, 1);
  };
}
function bx(e) {
  return `duration` in e;
}
function xx(e) {
  if (e == null) throw TypeError(`Cannot destructure ` + e);
}
function Sx() {
  return (
    (Sx = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Sx.apply(null, arguments)
  );
}
g();
function Cx(e) {
  return typeof e == `number` && isFinite(e);
}
function wx(e, t, n, r) {
  let i = Sx({}, (xx(r), r)),
    a = q(e).start_timestamp;
  return (
    a &&
      a > t &&
      typeof e.updateStartTime == `function` &&
      e.updateStartTime(t),
    t_(e, () => {
      let e = e_(_({ startTime: t }, i));
      return (e && e.end(n), e);
    })
  );
}
function Tx(e) {
  let t = G();
  if (!t) return;
  let { name: n, transaction: r, attributes: i, startTime: a } = e,
    { release: o, environment: s } = t.getOptions(),
    c = t.getIntegrationByName(`Replay`),
    l = c && c.getReplayId(),
    u = W(),
    d = u.getUser(),
    f = d === void 0 ? void 0 : d.email || d.id || d.ip_address,
    p;
  try {
    p = u.getScopeData().contexts.profile.profile_id;
  } catch (e) {}
  return e_({
    name: n,
    attributes: _(
      {
        release: o,
        environment: s,
        user: f || void 0,
        profile_id: p || void 0,
        replay_id: l || void 0,
        transaction: r,
        "user_agent.original": Z.navigator && Z.navigator.userAgent,
      },
      i,
    ),
    startTime: a,
    experimental: { standalone: !0 },
  });
}
function Ex() {
  return Z && Z.addEventListener && Z.performance;
}
function Q(e) {
  return e / 1e3;
}
function Dx(e) {
  let t = `unknown`,
    n = `unknown`,
    r = ``;
  for (let i of e) {
    if (i === `/`) {
      [t, n] = e.split(`/`);
      break;
    }
    if (!isNaN(Number(i))) {
      ((t = r === `h` ? `http` : r), (n = e.split(r)[1]));
      break;
    }
    r += i;
  }
  return (r === e && (t = r), { name: t, version: n });
}
function Ox() {
  let e = 0,
    t,
    n;
  if (!Ax()) return;
  let r = !1;
  function i() {
    r || ((r = !0), n && kx(e, t, n), a());
  }
  let a = ix(({ metric: n }) => {
    let r = n.entries[n.entries.length - 1];
    r && ((e = n.value), (t = r));
  }, !0);
  (fb(() => {
    i();
  }),
    setTimeout(() => {
      let e = G();
      if (!e) return;
      let t = e.on(`startNavigationSpan`, () => {
          (i(), t && t());
        }),
        r = Y(),
        a = r && J(r),
        o = a && q(a);
      o && o.op === `pageload` && (n = a.spanContext().spanId);
    }, 0));
}
function kx(e, t, n) {
  ib && V.log(`Sending CLS span (${e})`);
  let r = Q((Em || 0) + ((t && t.startTime) || 0)),
    i = W().getScopeData().transactionName,
    a = Tx({
      name: t ? im(t.sources[0] && t.sources[0].node) : `Layout shift`,
      transaction: i,
      attributes: H({
        [K]: `auto.http.browser.cls`,
        [ph]: `ui.webvital.cls`,
        [yh]: (t && t.duration) || 0,
        "sentry.pageload.span_id": n,
      }),
      startTime: r,
    });
  a && (a.addEvent(`cls`, { [hh]: ``, [gh]: e }), a.end(r));
}
function Ax() {
  try {
    return PerformanceObserver.supportedEntryTypes.includes(`layout-shift`);
  } catch (e) {
    return !1;
  }
}
var jx = 2147483647,
  Mx = 0,
  $ = {},
  Nx,
  Px;
function Fx({ recordClsStandaloneSpans: e }) {
  let t = Ex();
  if (t && Em) {
    t.mark && Z.performance.mark(`sentry-tracing-init`);
    let n = Vx(),
      r = Bx(),
      i = Hx(),
      a = e ? Ox() : zx();
    return () => {
      (n(), r(), i(), a && a());
    };
  }
  return () => void 0;
}
function Ix() {
  lx(`longtask`, ({ entries: e }) => {
    let t = Y();
    if (!t) return;
    let { op: n, start_timestamp: r } = q(t);
    for (let i of e) {
      let e = Q(Em + i.startTime),
        a = Q(i.duration);
      (n === `navigation` && r && e < r) ||
        wx(t, e, e + a, {
          name: `Main UI thread blocked`,
          op: `ui.long-task`,
          attributes: { [K]: `auto.ui.browser.metrics` },
        });
    }
  });
}
function Lx() {
  new PerformanceObserver((e) => {
    let t = Y();
    if (t)
      for (let n of e.getEntries()) {
        if (!n.scripts[0]) continue;
        let e = Q(Em + n.startTime),
          { start_timestamp: r, op: i } = q(t);
        if (i === `navigation` && r && e < r) continue;
        let a = Q(n.duration),
          o = { [K]: `auto.ui.browser.metrics` },
          {
            invoker: s,
            invokerType: c,
            sourceURL: l,
            sourceFunctionName: u,
            sourceCharPosition: d,
          } = n.scripts[0];
        ((o[`browser.script.invoker`] = s),
          (o[`browser.script.invoker_type`] = c),
          l && (o[`code.filepath`] = l),
          u && (o[`code.function`] = u),
          d !== -1 && (o[`browser.script.source_char_position`] = d),
          wx(t, e, e + a, {
            name: `Main UI thread blocked`,
            op: `ui.long-animation-frame`,
            attributes: o,
          }));
      }
  }).observe({ type: `long-animation-frame`, buffered: !0 });
}
function Rx() {
  lx(`event`, ({ entries: e }) => {
    let t = Y();
    if (t) {
      for (let n of e)
        if (n.name === `click`) {
          let e = Q(Em + n.startTime),
            r = Q(n.duration),
            i = {
              name: im(n.target),
              op: `ui.interaction.${n.name}`,
              startTime: e,
              attributes: { [K]: `auto.ui.browser.metrics` },
            },
            a = cm(n.target);
          (a && (i.attributes[`ui.component_name`] = a), wx(t, e, e + r, i));
        }
    }
  });
}
function zx() {
  return ix(({ metric: e }) => {
    let t = e.entries[e.entries.length - 1];
    t && (($.cls = { value: e.value, unit: `` }), (Px = t));
  }, !0);
}
function Bx() {
  return ax(({ metric: e }) => {
    let t = e.entries[e.entries.length - 1];
    t && (($.lcp = { value: e.value, unit: `millisecond` }), (Nx = t));
  }, !0);
}
function Vx() {
  return ox(({ metric: e }) => {
    let t = e.entries[e.entries.length - 1];
    if (!t) return;
    let n = Q(Em),
      r = Q(t.startTime);
    (($.fid = { value: e.value, unit: `millisecond` }),
      ($[`mark.fid`] = { value: n + r, unit: `second` }));
  });
}
function Hx() {
  return sx(({ metric: e }) => {
    e.entries[e.entries.length - 1] &&
      ($.ttfb = { value: e.value, unit: `millisecond` });
  });
}
function Ux(e, t) {
  let n = Ex();
  if (!n || !n.getEntries || !Em) return;
  let r = Q(Em),
    i = n.getEntries(),
    { op: a, start_timestamp: o } = q(e);
  if (
    (i.slice(Mx).forEach((t) => {
      let n = Q(t.startTime),
        i = Q(Math.max(0, t.duration));
      if (!(a === `navigation` && o && r + n < o))
        switch (t.entryType) {
          case `navigation`:
            Gx(e, t, r);
            break;
          case `mark`:
          case `paint`:
          case `measure`: {
            Wx(e, t, n, i, r);
            let a = yb(),
              o = t.startTime < a.firstHiddenTime;
            (t.name === `first-paint` &&
              o &&
              ($.fp = { value: t.startTime, unit: `millisecond` }),
              t.name === `first-contentful-paint` &&
                o &&
                ($.fcp = { value: t.startTime, unit: `millisecond` }));
            break;
          }
          case `resource`:
            Yx(e, t, t.name, n, i, r);
            break;
        }
    }),
    (Mx = Math.max(i.length - 1, 0)),
    Xx(e),
    a === `pageload`)
  ) {
    $x($);
    let n = $[`mark.fid`];
    (n &&
      $.fid &&
      (wx(e, n.value, n.value + Q($.fid.value), {
        name: `first input delay`,
        op: `ui.action`,
        attributes: { [K]: `auto.ui.browser.metrics` },
      }),
      delete $[`mark.fid`]),
      (!(`fcp` in $) || !t.recordClsOnPageloadSpan) && delete $.cls,
      Object.entries($).forEach(([e, t]) => {
        Gg(e, t.value, t.unit);
      }),
      e.setAttribute(`performance.timeOrigin`, r),
      e.setAttribute(`performance.activationStart`, lb()),
      Zx(e));
  }
  ((Nx = void 0), (Px = void 0), ($ = {}));
}
function Wx(e, t, n, r, i) {
  let a = cb(!1),
    o = Q(a ? a.requestStart : 0),
    s = i + Math.max(n, o),
    c = i + n,
    l = c + r,
    u = { [K]: `auto.resource.browser.metrics` };
  (s !== c &&
    ((u[`sentry.browser.measure_happened_before_request`] = !0),
    (u[`sentry.browser.measure_start_time`] = s)),
    s <= l && wx(e, s, l, { name: t.name, op: t.entryType, attributes: u }));
}
function Gx(e, t, n) {
  ([
    `unloadEvent`,
    `redirect`,
    `domContentLoadedEvent`,
    `loadEvent`,
    `connect`,
  ].forEach((r) => {
    Kx(e, t, r, n);
  }),
    Kx(e, t, `secureConnection`, n, `TLS/SSL`),
    Kx(e, t, `fetch`, n, `cache`),
    Kx(e, t, `domainLookup`, n, `DNS`),
    Jx(e, t, n));
}
function Kx(e, t, n, r, i = n) {
  let a = t[qx(n)],
    o = t[`${n}Start`];
  !o ||
    !a ||
    wx(e, r + Q(o), r + Q(a), {
      op: `browser.${i}`,
      name: t.name,
      attributes: { [K]: `auto.ui.browser.metrics` },
    });
}
function qx(e) {
  return e === `secureConnection`
    ? `connectEnd`
    : e === `fetch`
      ? `domainLookupStart`
      : `${e}End`;
}
function Jx(e, t, n) {
  let r = n + Q(t.requestStart),
    i = n + Q(t.responseEnd),
    a = n + Q(t.responseStart);
  t.responseEnd &&
    (wx(e, r, i, {
      op: `browser.request`,
      name: t.name,
      attributes: { [K]: `auto.ui.browser.metrics` },
    }),
    wx(e, a, i, {
      op: `browser.response`,
      name: t.name,
      attributes: { [K]: `auto.ui.browser.metrics` },
    }));
}
function Yx(e, t, n, r, i, a) {
  if (t.initiatorType === `xmlhttprequest` || t.initiatorType === `fetch`)
    return;
  let o = Zv(n),
    s = { [K]: `auto.resource.browser.metrics` };
  (Qx(s, t, `transferSize`, `http.response_transfer_size`),
    Qx(s, t, `encodedBodySize`, `http.response_content_length`),
    Qx(s, t, `decodedBodySize`, `http.decoded_response_content_length`));
  let c = t.deliveryType;
  c != null && (s[`http.response_delivery_type`] = c);
  let l = t.renderBlockingStatus;
  (l && (s[`resource.render_blocking_status`] = l),
    o.protocol && (s[`url.scheme`] = o.protocol.split(`:`).pop()),
    o.host && (s[`server.address`] = o.host),
    (s[`url.same_origin`] = n.includes(Z.location.origin)));
  let { name: u, version: d } = Dx(t.nextHopProtocol);
  ((s[`network.protocol.name`] = u), (s[`network.protocol.version`] = d));
  let f = a + r;
  wx(e, f, f + i, {
    name: n.replace(Z.location.origin, ``),
    op: t.initiatorType ? `resource.${t.initiatorType}` : `resource.other`,
    attributes: s,
  });
}
function Xx(e) {
  let t = Z.navigator;
  if (!t) return;
  let n = t.connection;
  (n &&
    (n.effectiveType &&
      e.setAttribute(`effectiveConnectionType`, n.effectiveType),
    n.type && e.setAttribute(`connectionType`, n.type),
    Cx(n.rtt) && ($[`connection.rtt`] = { value: n.rtt, unit: `millisecond` })),
    Cx(t.deviceMemory) &&
      e.setAttribute(`deviceMemory`, `${t.deviceMemory} GB`),
    Cx(t.hardwareConcurrency) &&
      e.setAttribute(`hardwareConcurrency`, String(t.hardwareConcurrency)));
}
function Zx(e) {
  (Nx &&
    (Nx.element && e.setAttribute(`lcp.element`, im(Nx.element)),
    Nx.id && e.setAttribute(`lcp.id`, Nx.id),
    Nx.url && e.setAttribute(`lcp.url`, Nx.url.trim().slice(0, 200)),
    Nx.loadTime != null && e.setAttribute(`lcp.loadTime`, Nx.loadTime),
    Nx.renderTime != null && e.setAttribute(`lcp.renderTime`, Nx.renderTime),
    e.setAttribute(`lcp.size`, Nx.size)),
    Px &&
      Px.sources &&
      Px.sources.forEach((t, n) =>
        e.setAttribute(`cls.source.${n + 1}`, im(t.node)),
      ));
}
function Qx(e, t, n, r) {
  let i = t[n];
  i != null && i < jx && (e[r] = i);
}
function $x(e) {
  let t = cb(!1);
  if (!t) return;
  let { responseStart: n, requestStart: r } = t;
  r <= n && (e[`ttfb.requestTime`] = { value: n - r, unit: `millisecond` });
}
var eS = 1e3,
  tS,
  nS,
  rS;
function iS(e) {
  (Op(`dom`, e), kp(`dom`, aS));
}
function aS() {
  if (!Z.document) return;
  let e = Ap.bind(null, `dom`),
    t = cS(e, !0);
  (Z.document.addEventListener(`click`, t, !1),
    Z.document.addEventListener(`keypress`, t, !1),
    [`EventTarget`, `Node`].forEach((t) => {
      let n = Z[t],
        r = n && n.prototype;
      !r ||
        !r.hasOwnProperty ||
        !r.hasOwnProperty(`addEventListener`) ||
        (pm(r, `addEventListener`, function (t) {
          return function (n, r, i) {
            if (n === `click` || n == `keypress`)
              try {
                let r = (this.__sentry_instrumentation_handlers__ =
                    this.__sentry_instrumentation_handlers__ || {}),
                  a = (r[n] = r[n] || { refCount: 0 });
                if (!a.handler) {
                  let r = cS(e);
                  ((a.handler = r), t.call(this, n, r, i));
                }
                a.refCount++;
              } catch (e) {}
            return t.call(this, n, r, i);
          };
        }),
        pm(r, `removeEventListener`, function (e) {
          return function (t, n, r) {
            if (t === `click` || t == `keypress`)
              try {
                let n = this.__sentry_instrumentation_handlers__ || {},
                  i = n[t];
                i &&
                  (i.refCount--,
                  i.refCount <= 0 &&
                    (e.call(this, t, i.handler, r),
                    (i.handler = void 0),
                    delete n[t]),
                  Object.keys(n).length === 0 &&
                    delete this.__sentry_instrumentation_handlers__);
              } catch (e) {}
            return e.call(this, t, n, r);
          };
        }));
    }));
}
function oS(e) {
  if (e.type !== nS) return !1;
  try {
    if (!e.target || e.target._sentryId !== rS) return !1;
  } catch (e) {}
  return !0;
}
function sS(e, t) {
  return e === `keypress`
    ? !t || !t.tagName
      ? !0
      : !(
          t.tagName === `INPUT` ||
          t.tagName === `TEXTAREA` ||
          t.isContentEditable
        )
    : !1;
}
function cS(e, t = !1) {
  return (n) => {
    if (!n || n._sentryCaptured) return;
    let r = lS(n);
    if (sS(n.type, r)) return;
    (mm(n, `_sentryCaptured`, !0),
      r && !r._sentryId && mm(r, `_sentryId`, Dm()));
    let i = n.type === `keypress` ? `input` : n.type;
    (oS(n) ||
      (e({ event: n, name: i, global: t }),
      (nS = n.type),
      (rS = r ? r._sentryId : void 0)),
      clearTimeout(tS),
      (tS = Z.setTimeout(() => {
        ((rS = void 0), (nS = void 0));
      }, eS)));
  };
}
function lS(e) {
  try {
    return e.target;
  } catch (e) {
    return null;
  }
}
var uS;
function dS(e) {
  let t = `history`;
  (Op(t, e), kp(t, fS));
}
function fS() {
  if (!My()) return;
  let e = Z.onpopstate;
  Z.onpopstate = function (...t) {
    let n = Z.location.href,
      r = uS;
    if (((uS = n), Ap(`history`, { from: r, to: n }), e))
      try {
        return e.apply(this, t);
      } catch (e) {}
  };
  function t(e) {
    return function (...t) {
      let n = t.length > 2 ? t[2] : void 0;
      if (n) {
        let e = uS,
          t = String(n);
        ((uS = t), Ap(`history`, { from: e, to: t }));
      }
      return e.apply(this, t);
    };
  }
  (pm(Z.history, `pushState`, t), pm(Z.history, `replaceState`, t));
}
var pS = {};
function mS(e) {
  let t = pS[e];
  if (t) return t;
  let n = Z[e];
  if (yy(n)) return (pS[e] = n.bind(Z));
  let r = Z.document;
  if (r && typeof r.createElement == `function`)
    try {
      let t = r.createElement(`iframe`);
      ((t.hidden = !0), r.head.appendChild(t));
      let i = t.contentWindow;
      (i && i[e] && (n = i[e]), r.head.removeChild(t));
    } catch (t) {
      ib &&
        V.warn(
          `Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
          t,
        );
    }
  return n && (pS[e] = n.bind(Z));
}
function hS(e) {
  pS[e] = void 0;
}
var gS = `__sentry_xhr_v3__`;
function _S(e) {
  (Op(`xhr`, e), kp(`xhr`, vS));
}
function vS() {
  if (!Z.XMLHttpRequest) return;
  let e = XMLHttpRequest.prototype;
  ((e.open = new Proxy(e.open, {
    apply(e, t, n) {
      let r = Error(),
        i = U() * 1e3,
        a = Gp(n[0]) ? n[0].toUpperCase() : void 0,
        o = yS(n[1]);
      if (!a || !o) return e.apply(t, n);
      ((t[gS] = { method: a, url: o, request_headers: {} }),
        a === `POST` &&
          o.match(/sentry_key/) &&
          (t.__sentry_own_request__ = !0));
      let s = () => {
        let e = t[gS];
        if (e && t.readyState === 4) {
          try {
            e.status_code = t.status;
          } catch (e) {}
          Ap(`xhr`, {
            endTimestamp: U() * 1e3,
            startTimestamp: i,
            xhr: t,
            virtualError: r,
          });
        }
      };
      return (
        `onreadystatechange` in t && typeof t.onreadystatechange == `function`
          ? (t.onreadystatechange = new Proxy(t.onreadystatechange, {
              apply(e, t, n) {
                return (s(), e.apply(t, n));
              },
            }))
          : t.addEventListener(`readystatechange`, s),
        (t.setRequestHeader = new Proxy(t.setRequestHeader, {
          apply(e, t, n) {
            let [r, i] = n,
              a = t[gS];
            return (
              a && Gp(r) && Gp(i) && (a.request_headers[r.toLowerCase()] = i),
              e.apply(t, n)
            );
          },
        })),
        e.apply(t, n)
      );
    },
  })),
    (e.send = new Proxy(e.send, {
      apply(e, t, n) {
        let r = t[gS];
        return r
          ? (n[0] !== void 0 && (r.body = n[0]),
            Ap(`xhr`, { startTimestamp: U() * 1e3, xhr: t }),
            e.apply(t, n))
          : e.apply(t, n);
      },
    })));
}
function yS(e) {
  if (Gp(e)) return e;
  try {
    return e.toString();
  } catch (e) {}
}
var bS = [],
  xS = new Map();
function SS() {
  if (Ex() && Em) {
    let e = wS();
    return () => {
      e();
    };
  }
  return () => void 0;
}
var CS = {
  click: `click`,
  pointerdown: `click`,
  pointerup: `click`,
  mousedown: `click`,
  mouseup: `click`,
  touchstart: `click`,
  touchend: `click`,
  mouseover: `hover`,
  mouseout: `hover`,
  mouseenter: `hover`,
  mouseleave: `hover`,
  pointerover: `hover`,
  pointerout: `hover`,
  pointerenter: `hover`,
  pointerleave: `hover`,
  dragstart: `drag`,
  dragend: `drag`,
  drag: `drag`,
  dragenter: `drag`,
  dragleave: `drag`,
  dragover: `drag`,
  drop: `drag`,
  keydown: `press`,
  keyup: `press`,
  keypress: `press`,
  input: `press`,
};
function wS() {
  return cx(({ metric: e }) => {
    if (e.value == null) return;
    let t = e.entries.find((t) => t.duration === e.value && CS[t.name]);
    if (!t) return;
    let { interactionId: n } = t,
      r = CS[t.name],
      i = Q(Em + t.startTime),
      a = Q(e.value),
      o = Y(),
      s = o ? J(o) : void 0,
      c = (n == null ? void 0 : xS.get(n)) || s,
      l = c ? q(c).description : W().getScopeData().transactionName,
      u = Tx({
        name: im(t.target),
        transaction: l,
        attributes: H({
          [K]: `auto.http.browser.inp`,
          [ph]: `ui.interaction.${r}`,
          [yh]: t.duration,
        }),
        startTime: i,
      });
    u &&
      (u.addEvent(`inp`, { [hh]: `millisecond`, [gh]: e.value }), u.end(i + a));
  });
}
function TS(e) {
  let t = ({ entries: e }) => {
    let t = Y(),
      n = t && J(t);
    e.forEach((e) => {
      if (!bx(e) || !n) return;
      let t = e.interactionId;
      if (t != null && !xS.has(t)) {
        if (bS.length > 10) {
          let e = bS.shift();
          xS.delete(e);
        }
        (bS.push(t), xS.set(t, n));
      }
    });
  };
  (lx(`event`, t), lx(`first-input`, t));
}
g();
function ES(e, t = mS(`fetch`)) {
  let n = 0,
    r = 0;
  function i(i) {
    let a = i.body.length;
    ((n += a), r++);
    let o = _(
      {
        body: i.body,
        method: `POST`,
        referrerPolicy: `origin`,
        headers: e.headers,
        keepalive: n <= 6e4 && r < 15,
      },
      e.fetchOptions,
    );
    if (!t) return (hS(`fetch`), Im(`No fetch implementation available`));
    try {
      return t(e.url, o).then(
        (e) => (
          (n -= a),
          r--,
          {
            statusCode: e.status,
            headers: {
              "x-sentry-rate-limits": e.headers.get(`X-Sentry-Rate-Limits`),
              "retry-after": e.headers.get(`Retry-After`),
            },
          }
        ),
      );
    } catch (e) {
      return (hS(`fetch`), (n -= a), r--, Im(e));
    }
  }
  return xv(e, i);
}
var DS = 30,
  OS = 50;
function kS(e, t, n, r) {
  let i = { filename: e, function: t === `<anonymous>` ? `?` : t, in_app: !0 };
  return (n !== void 0 && (i.lineno = n), r !== void 0 && (i.colno = r), i);
}
var AS = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
  jS =
    /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  MS = /\((\S*)(?::(\d+))(?::(\d+))\)/,
  NS = [
    DS,
    (e) => {
      let t = AS.exec(e);
      if (t) {
        let [, e, n, r] = t;
        return kS(e, `?`, +n, +r);
      }
      let n = jS.exec(e);
      if (n) {
        if (n[2] && n[2].indexOf(`eval`) === 0) {
          let e = MS.exec(n[2]);
          e && ((n[2] = e[1]), (n[3] = e[2]), (n[4] = e[3]));
        }
        let [e, t] = LS(n[1] || `?`, n[2]);
        return kS(t, e, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0);
      }
    },
  ],
  PS =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
  FS = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
  IS = yp(NS, [
    OS,
    (e) => {
      let t = PS.exec(e);
      if (t) {
        if (t[3] && t[3].indexOf(` > eval`) > -1) {
          let e = FS.exec(t[3]);
          e &&
            ((t[1] = t[1] || `eval`),
            (t[3] = e[1]),
            (t[4] = e[2]),
            (t[5] = ``));
        }
        let e = t[3],
          n = t[1] || `?`;
        return (
          ([n, e] = LS(n, e)),
          kS(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
        );
      }
    },
  ]),
  LS = (e, t) => {
    let n = e.indexOf(`safari-extension`) !== -1,
      r = e.indexOf(`safari-web-extension`) !== -1;
    return n || r
      ? [
          e.indexOf(`@`) === -1 ? `?` : e.split(`@`)[0],
          n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
        ]
      : [e, t];
  };
g();
var RS = 1024,
  zS = `Breadcrumbs`,
  BS = iv((e = {}) => {
    let t = _(
      { console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0 },
      e,
    );
    return {
      name: zS,
      setup(e) {
        (t.console && Qv(US(e)),
          t.dom && iS(HS(e, t.dom)),
          t.xhr && _S(WS(e)),
          t.fetch && xy(GS(e)),
          t.history && dS(KS(e)),
          t.sentry && e.on(`beforeSendEvent`, VS(e)));
      },
    };
  });
function VS(e) {
  return function (t) {
    G() === e &&
      Dv(
        {
          category: `sentry.${t.type === `transaction` ? `transaction` : `event`}`,
          event_id: t.event_id,
          level: t.level,
          message: km(t),
        },
        { event: t },
      );
  };
}
function HS(e, t) {
  return function (n) {
    if (G() !== e) return;
    let r,
      i,
      a = typeof t == `object` ? t.serializeAttribute : void 0,
      o =
        typeof t == `object` && typeof t.maxStringLength == `number`
          ? t.maxStringLength
          : void 0;
    (o &&
      o > RS &&
      (Ly &&
        V.warn(
          `\`dom.maxStringLength\` cannot exceed ${RS}, but a value of ${o} was configured. Sentry will use ${RS} instead.`,
        ),
      (o = RS)),
      typeof a == `string` && (a = [a]));
    try {
      let e = n.event,
        t = qS(e) ? e.target : e;
      ((r = im(t, { keyAttrs: a, maxStringLength: o })), (i = cm(t)));
    } catch (e) {
      r = `<unknown>`;
    }
    if (r.length === 0) return;
    let s = { category: `ui.${n.name}`, message: r };
    (i && (s.data = { "ui.component_name": i }),
      Dv(s, { event: n.event, name: n.name, global: n.global }));
  };
}
function US(e) {
  return function (t) {
    if (G() !== e) return;
    let n = {
      category: `console`,
      data: { arguments: t.args, logger: `console` },
      level: ey(t.level),
      message: um(t.args, ` `),
    };
    if (t.level === `assert`)
      if (t.args[0] === !1)
        ((n.message = `Assertion failed: ${um(t.args.slice(1), ` `) || `console.assert`}`),
          (n.data.arguments = t.args.slice(1)));
      else return;
    Dv(n, { input: t.args, level: t.level });
  };
}
function WS(e) {
  return function (t) {
    if (G() !== e) return;
    let { startTimestamp: n, endTimestamp: r } = t,
      i = t.xhr[gS];
    if (!n || !r || !i) return;
    let { method: a, url: o, status_code: s, body: c } = i,
      l = { method: a, url: o, status_code: s },
      u = { xhr: t.xhr, input: c, startTimestamp: n, endTimestamp: r };
    Dv({ category: `xhr`, data: l, type: `http`, level: gy(s) }, u);
  };
}
function GS(e) {
  return function (t) {
    if (G() !== e) return;
    let { startTimestamp: n, endTimestamp: r } = t;
    if (
      r &&
      !(t.fetchData.url.match(/sentry_key/) && t.fetchData.method === `POST`)
    )
      if (t.error) {
        let e = t.fetchData,
          i = {
            data: t.error,
            input: t.args,
            startTimestamp: n,
            endTimestamp: r,
          };
        Dv({ category: `fetch`, data: e, level: `error`, type: `http` }, i);
      } else {
        let e = t.response,
          i = _(_({}, t.fetchData), {}, { status_code: e && e.status }),
          a = {
            input: t.args,
            response: e,
            startTimestamp: n,
            endTimestamp: r,
          };
        Dv(
          {
            category: `fetch`,
            data: i,
            type: `http`,
            level: gy(i.status_code),
          },
          a,
        );
      }
  };
}
function KS(e) {
  return function (t) {
    if (G() !== e) return;
    let n = t.from,
      r = t.to,
      i = Zv(X.location.href),
      a = n ? Zv(n) : void 0,
      o = Zv(r);
    ((!a || !a.path) && (a = i),
      i.protocol === o.protocol && i.host === o.host && (r = o.relative),
      i.protocol === a.protocol && i.host === a.host && (n = a.relative),
      Dv({ category: `navigation`, data: { from: n, to: r } }));
  };
}
function qS(e) {
  return !!e && !!e.target;
}
g();
var JS =
    `EventTarget.Window.Node.ApplicationCache.AudioTrackList.BroadcastChannel.ChannelMergerNode.CryptoOperation.EventSource.FileReader.HTMLUnknownElement.IDBDatabase.IDBRequest.IDBTransaction.KeyOperation.MediaController.MessagePort.ModalWindow.Notification.SVGElementInstance.Screen.SharedWorker.TextTrack.TextTrackCue.TextTrackList.WebSocket.WebSocketWorker.Worker.XMLHttpRequest.XMLHttpRequestEventTarget.XMLHttpRequestUpload`.split(
      `.`,
    ),
  YS = `BrowserApiErrors`,
  XS = iv((e = {}) => {
    let t = _(
      {
        XMLHttpRequest: !0,
        eventTarget: !0,
        requestAnimationFrame: !0,
        setInterval: !0,
        setTimeout: !0,
      },
      e,
    );
    return {
      name: YS,
      setupOnce() {
        (t.setTimeout && pm(X, `setTimeout`, ZS),
          t.setInterval && pm(X, `setInterval`, ZS),
          t.requestAnimationFrame && pm(X, `requestAnimationFrame`, QS),
          t.XMLHttpRequest &&
            `XMLHttpRequest` in X &&
            pm(XMLHttpRequest.prototype, `send`, $S));
        let e = t.eventTarget;
        e && (Array.isArray(e) ? e : JS).forEach(eC);
      },
    };
  });
function ZS(e) {
  return function (...t) {
    let n = t[0];
    return (
      (t[0] = Iy(n, {
        mechanism: {
          data: { function: wp(e) },
          handled: !1,
          type: `instrument`,
        },
      })),
      e.apply(this, t)
    );
  };
}
function QS(e) {
  return function (t) {
    return e.apply(this, [
      Iy(t, {
        mechanism: {
          data: { function: `requestAnimationFrame`, handler: wp(e) },
          handled: !1,
          type: `instrument`,
        },
      }),
    ]);
  };
}
function $S(e) {
  return function (...t) {
    let n = this;
    return (
      [`onload`, `onerror`, `onprogress`, `onreadystatechange`].forEach((e) => {
        e in n &&
          typeof n[e] == `function` &&
          pm(n, e, function (t) {
            let n = {
                mechanism: {
                  data: { function: e, handler: wp(t) },
                  handled: !1,
                  type: `instrument`,
                },
              },
              r = gm(t);
            return (r && (n.mechanism.data.handler = wp(r)), Iy(t, n));
          });
      }),
      e.apply(this, t)
    );
  };
}
function eC(e) {
  let t = X[e],
    n = t && t.prototype;
  !n ||
    !n.hasOwnProperty ||
    !n.hasOwnProperty(`addEventListener`) ||
    (pm(n, `addEventListener`, function (t) {
      return function (n, r, i) {
        try {
          tC(r) &&
            (r.handleEvent = Iy(r.handleEvent, {
              mechanism: {
                data: { function: `handleEvent`, handler: wp(r), target: e },
                handled: !1,
                type: `instrument`,
              },
            }));
        } catch (e) {}
        return t.apply(this, [
          n,
          Iy(r, {
            mechanism: {
              data: { function: `addEventListener`, handler: wp(r), target: e },
              handled: !1,
              type: `instrument`,
            },
          }),
          i,
        ]);
      };
    }),
    pm(n, `removeEventListener`, function (e) {
      return function (t, n, r) {
        try {
          let i = n.__sentry_wrapped__;
          i && e.call(this, t, i, r);
        } catch (e) {}
        return e.call(this, t, n, r);
      };
    }));
}
function tC(e) {
  return typeof e.handleEvent == `function`;
}
var nC = iv(() => ({
  name: `BrowserSession`,
  setupOnce() {
    if (X.document === void 0) {
      Ly &&
        V.warn(
          "Using the `browserSessionIntegration` in non-browser environments is not supported.",
        );
      return;
    }
    (U_({ ignoreDuration: !0 }),
      K_(),
      dS(({ from: e, to: t }) => {
        e !== void 0 && e !== t && (U_({ ignoreDuration: !0 }), K_());
      }));
  },
}));
g();
var rC = `GlobalHandlers`,
  iC = iv((e = {}) => {
    let t = _({ onerror: !0, onunhandledrejection: !0 }, e);
    return {
      name: rC,
      setupOnce() {
        Error.stackTraceLimit = 50;
      },
      setup(e) {
        (t.onerror && (aC(e), uC(`onerror`)),
          t.onunhandledrejection && (oC(e), uC(`onunhandledrejection`)));
      },
    };
  });
function aC(e) {
  Mp((t) => {
    let { stackParser: n, attachStacktrace: r } = dC();
    if (G() !== e || Py()) return;
    let { msg: i, url: a, line: o, column: s, error: c } = t,
      l = lC(Xy(n, c || i, void 0, r, !1), a, o, s);
    ((l.level = `error`),
      B_(l, {
        originalException: c,
        mechanism: { handled: !1, type: `onerror` },
      }));
  });
}
function oC(e) {
  Fp((t) => {
    let { stackParser: n, attachStacktrace: r } = dC();
    if (G() !== e || Py()) return;
    let i = sC(t),
      a = qp(i) ? cC(i) : Xy(n, i, void 0, r, !0);
    ((a.level = `error`),
      B_(a, {
        originalException: i,
        mechanism: { handled: !1, type: `onunhandledrejection` },
      }));
  });
}
function sC(e) {
  if (qp(e)) return e;
  try {
    if (`reason` in e) return e.reason;
    if (`detail` in e && `reason` in e.detail) return e.detail.reason;
  } catch (e) {}
  return e;
}
function cC(e) {
  return {
    exception: {
      values: [
        {
          type: `UnhandledRejection`,
          value: `Non-Error promise rejection captured with value: ${String(e)}`,
        },
      ],
    },
  };
}
function lC(e, t, n, r) {
  let i = (e.exception = e.exception || {}),
    a = (i.values = i.values || []),
    o = (a[0] = a[0] || {}),
    s = (o.stacktrace = o.stacktrace || {}),
    c = (s.frames = s.frames || []),
    l = r,
    u = n,
    d = Gp(t) && t.length > 0 ? t : om();
  return (
    c.length === 0 &&
      c.push({ colno: l, filename: d, function: `?`, in_app: !0, lineno: u }),
    e
  );
}
function uC(e) {
  Ly && V.log(`Global Handler attached: ${e}`);
}
function dC() {
  let e = G();
  return (
    (e && e.getOptions()) || { stackParser: () => [], attachStacktrace: !1 }
  );
}
g();
var fC = iv(() => ({
    name: `HttpContext`,
    preprocessEvent(e) {
      if (!X.navigator && !X.location && !X.document) return;
      let t = (e.request && e.request.url) || (X.location && X.location.href),
        { referrer: n } = X.document || {},
        { userAgent: r } = X.navigator || {},
        i = _(
          _(_({}, e.request && e.request.headers), n && { Referer: n }),
          r && { "User-Agent": r },
        );
      e.request = _(_(_({}, e.request), t && { url: t }), {}, { headers: i });
    },
  })),
  pC = `cause`,
  mC = 5,
  hC = `LinkedErrors`,
  gC = iv((e = {}) => {
    let t = e.limit || mC,
      n = e.key || pC;
    return {
      name: hC,
      preprocessEvent(e, r, i) {
        let a = i.getOptions();
        Kv(Ry, a.stackParser, a.maxValueLength, n, t, e, r);
      },
    };
  });
g();
function _C(e) {
  let t = [Pv(), jv(), XS(), BS(), iC(), gC(), ny(), fC()];
  return (e.autoSessionTracking !== !1 && t.push(nC()), t);
}
function vC(e = {}) {
  let t = {
    defaultIntegrations: _C(e),
    release:
      typeof __SENTRY_RELEASE__ == `string`
        ? __SENTRY_RELEASE__
        : X.SENTRY_RELEASE && X.SENTRY_RELEASE.id
          ? X.SENTRY_RELEASE.id
          : void 0,
    autoSessionTracking: !0,
    sendClientReports: !0,
  };
  return (
    e.defaultIntegrations == null && delete e.defaultIntegrations,
    _(_({}, t), e)
  );
}
function yC() {
  let e = X.window !== void 0 && X;
  if (!e) return !1;
  let t = e[e.chrome ? `chrome` : `browser`],
    n = t && t.runtime && t.runtime.id,
    r = (X.location && X.location.href) || ``,
    i =
      !!n &&
      X === X.top &&
      [
        `chrome-extension:`,
        `moz-extension:`,
        `ms-browser-extension:`,
        `safari-web-extension:`,
      ].some((e) => r.startsWith(`${e}//`)),
    a = e.nw !== void 0;
  return !!n && !i && !a;
}
function bC(e = {}) {
  let t = vC(e);
  if (!t.skipBrowserExtensionCheck && yC()) {
    mp(() => {
      console.error(
        `[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/`,
      );
    });
    return;
  }
  return (
    Ly &&
      (vy() ||
        V.warn(
          `No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.`,
        )),
    pv(
      rb,
      _(
        _({}, t),
        {},
        {
          stackParser: bp(t.stackParser || IS),
          integrations: ev(t),
          transport: t.transport || ES,
        },
      ),
    )
  );
}
g();
var xC = new WeakMap(),
  SC = new Map(),
  CC = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0,
    trackFetchStreamPerformance: !1,
  };
function wC(e, t) {
  let {
      traceFetch: n,
      traceXHR: r,
      trackFetchStreamPerformance: i,
      shouldCreateSpanForRequest: a,
      enableHTTPTimings: o,
      tracePropagationTargets: s,
    } = _(
      {
        traceFetch: CC.traceFetch,
        traceXHR: CC.traceXHR,
        trackFetchStreamPerformance: CC.trackFetchStreamPerformance,
      },
      t,
    ),
    c = typeof a == `function` ? a : (e) => !0,
    l = (e) => kC(e, s),
    u = {};
  (n &&
    (e.addEventProcessor(
      (e) => (
        e.type === `transaction` &&
          e.spans &&
          e.spans.forEach((e) => {
            if (e.op === `http.client`) {
              let t = SC.get(e.span_id);
              t && ((e.timestamp = t / 1e3), SC.delete(e.span_id));
            }
          }),
        e
      ),
    ),
    i &&
      Sy((e) => {
        if (e.response) {
          let t = xC.get(e.response);
          t && e.endTimestamp && SC.set(t, e.endTimestamp);
        }
      }),
    xy((e) => {
      let t = ly(e, c, l, u);
      if (
        (e.response &&
          e.fetchData.__span &&
          xC.set(e.response, e.fetchData.__span),
        t)
      ) {
        let n = NC(e.fetchData.url),
          r = n ? Zv(n).host : void 0;
        t.setAttributes({ "http.url": n, "server.address": r });
      }
      o && t && EC(t);
    })),
    r &&
      _S((e) => {
        let t = AC(e, c, l, u);
        o && t && EC(t);
      }));
}
function TC(e) {
  return (
    e.entryType === `resource` &&
    `initiatorType` in e &&
    typeof e.nextHopProtocol == `string` &&
    (e.initiatorType === `fetch` || e.initiatorType === `xmlhttprequest`)
  );
}
function EC(e) {
  let { url: t } = q(e).data || {};
  if (!t || typeof t != `string`) return;
  let n = lx(`resource`, ({ entries: r }) => {
    r.forEach((r) => {
      TC(r) &&
        r.name.endsWith(t) &&
        (OC(r).forEach((t) => e.setAttribute(...t)), setTimeout(n));
    });
  });
}
function DC(e = 0) {
  return ((Em || performance.timeOrigin) + e) / 1e3;
}
function OC(e) {
  let { name: t, version: n } = Dx(e.nextHopProtocol),
    r = [];
  return (
    r.push([`network.protocol.version`, n], [`network.protocol.name`, t]),
    Em
      ? [
          ...r,
          [`http.request.redirect_start`, DC(e.redirectStart)],
          [`http.request.fetch_start`, DC(e.fetchStart)],
          [`http.request.domain_lookup_start`, DC(e.domainLookupStart)],
          [`http.request.domain_lookup_end`, DC(e.domainLookupEnd)],
          [`http.request.connect_start`, DC(e.connectStart)],
          [`http.request.secure_connection_start`, DC(e.secureConnectionStart)],
          [`http.request.connection_end`, DC(e.connectEnd)],
          [`http.request.request_start`, DC(e.requestStart)],
          [`http.request.response_start`, DC(e.responseStart)],
          [`http.request.response_end`, DC(e.responseEnd)],
        ]
      : r
  );
}
function kC(e, t) {
  let n = X.location && X.location.href;
  if (n) {
    let r, i;
    try {
      ((r = new URL(e, n)), (i = new URL(n).origin));
    } catch (e) {
      return !1;
    }
    let a = r.origin === i;
    return t ? fm(r.toString(), t) || (a && fm(r.pathname, t)) : a;
  } else {
    let n = !!e.match(/^\/(?!\/)/);
    return t ? fm(e, t) : n;
  }
}
function AC(e, t, n, r) {
  let i = e.xhr,
    a = i && i.__sentry_xhr_v3__;
  if (!i || i.__sentry_own_request__ || !a) return;
  let o = ng() && t(a.url);
  if (e.endTimestamp && o) {
    let e = i.__sentry_xhr_span_id__;
    if (!e) return;
    let t = r[e];
    t &&
      a.status_code !== void 0 &&
      (xh(t, a.status_code), t.end(), delete r[e]);
    return;
  }
  let s = NC(a.url),
    c = s ? Zv(s).host : void 0,
    l = !!Y(),
    u =
      o && l
        ? e_({
            name: `${a.method} ${a.url}`,
            attributes: {
              type: `xhr`,
              "http.method": a.method,
              "http.url": s,
              url: a.url,
              "server.address": c,
              [K]: `auto.http.browser`,
              [ph]: `http.client`,
            },
          })
        : new rg();
  return (
    (i.__sentry_xhr_span_id__ = u.spanContext().spanId),
    (r[i.__sentry_xhr_span_id__] = u),
    n(a.url) && jC(i, ng() && l ? u : void 0),
    u
  );
}
function jC(e, t) {
  let { "sentry-trace": n, baggage: r } = wv({ span: t });
  n && MC(e, n, r);
}
function MC(e, t, n) {
  try {
    (e.setRequestHeader(`sentry-trace`, t),
      n && e.setRequestHeader(`baggage`, n));
  } catch (e) {}
}
function NC(e) {
  try {
    return new URL(e, X.location.origin).href;
  } catch (e) {
    return;
  }
}
function PC() {
  X && X.document
    ? X.document.addEventListener(`visibilitychange`, () => {
        let e = Y();
        if (!e) return;
        let t = J(e);
        if (X.document.hidden && t) {
          let e = `cancelled`,
            { op: n, status: r } = q(t);
          (Ly &&
            V.log(
              `[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`,
            ),
            r || t.setStatus({ code: 2, message: e }),
            t.setAttribute(`sentry.cancellation_reason`, `document.hidden`),
            t.end());
        }
      })
    : Ly &&
      V.warn(
        `[Tracing] Could not set up background tab detection due to lack of global document`,
      );
}
g();
var FC = `BrowserTracing`,
  IC = _(
    _({}, c_),
    {},
    {
      instrumentNavigation: !0,
      instrumentPageLoad: !0,
      markBackgroundSpan: !0,
      enableLongTask: !0,
      enableLongAnimationFrame: !0,
      enableInp: !0,
      _experiments: {},
    },
    CC,
  ),
  LC = (e = {}) => {
    Xh();
    let {
        enableInp: t,
        enableLongTask: n,
        enableLongAnimationFrame: r,
        _experiments: { enableInteractions: i, enableStandaloneClsSpans: a },
        beforeStartSpan: o,
        idleTimeout: s,
        finalTimeout: c,
        childSpanTimeout: l,
        markBackgroundSpan: u,
        traceFetch: d,
        traceXHR: f,
        trackFetchStreamPerformance: p,
        shouldCreateSpanForRequest: m,
        enableHTTPTimings: h,
        instrumentPageLoad: g,
        instrumentNavigation: v,
      } = _(_({}, IC), e),
      y = Fx({ recordClsStandaloneSpans: a || !1 });
    (t && SS(),
      r &&
      B.PerformanceObserver &&
      PerformanceObserver.supportedEntryTypes &&
      PerformanceObserver.supportedEntryTypes.includes(`long-animation-frame`)
        ? Lx()
        : n && Ix(),
      i && Rx());
    let b = { name: void 0, source: void 0 };
    function x(e, t) {
      let n = t.op === `pageload`,
        r = o ? o(t) : t,
        i = r.attributes || {};
      (t.name !== r.name && ((i[dh] = `custom`), (r.attributes = i)),
        (b.name = r.name),
        (b.source = i[dh]));
      let u = p_(r, {
        idleTimeout: s,
        finalTimeout: c,
        childSpanTimeout: l,
        disableAutoFinish: n,
        beforeSpanEnd: (e) => {
          (y(), Ux(e, { recordClsOnPageloadSpan: !a }));
        },
      });
      function d() {
        [`interactive`, `complete`].includes(X.document.readyState) &&
          e.emit(`idleSpanEnableAutoFinish`, u);
      }
      return (
        n &&
          X.document &&
          (X.document.addEventListener(`readystatechange`, () => {
            d();
          }),
          d()),
        u
      );
    }
    return {
      name: FC,
      afterAllSetup(e) {
        let n,
          r = X.location && X.location.href;
        function a() {
          n &&
            !q(n).timestamp &&
            (Ly &&
              V.log(
                `[Tracing] Finishing current active span with op: ${q(n).op}`,
              ),
            n.end());
        }
        (e.on(`startNavigationSpan`, (t) => {
          G() === e && (a(), (n = x(e, _({ op: `navigation` }, t))));
        }),
          e.on(`startPageLoadSpan`, (t, r = {}) => {
            if (G() !== e) return;
            a();
            let i = jh(
              r.sentryTrace || BC(`sentry-trace`),
              r.baggage || BC(`baggage`),
            );
            (W().setPropagationContext(i),
              (n = x(e, _({ op: `pageload` }, t))));
          }),
          e.on(`spanEnd`, (e) => {
            let t = q(e).op;
            if (e !== J(e) || (t !== `navigation` && t !== `pageload`)) return;
            let n = W(),
              r = n.getPropagationContext();
            n.setPropagationContext(
              _(
                _({}, r),
                {},
                {
                  sampled: r.sampled === void 0 ? Vh(e) : r.sampled,
                  dsc: r.dsc || lg(e),
                },
              ),
            );
          }),
          X.location &&
            (g &&
              RC(e, {
                name: X.location.pathname,
                startTime: Em ? Em / 1e3 : void 0,
                attributes: { [dh]: `url`, [K]: `auto.pageload.browser` },
              }),
            v &&
              dS(({ to: t, from: n }) => {
                if (n === void 0 && r && r.indexOf(t) !== -1) {
                  r = void 0;
                  return;
                }
                n !== t &&
                  ((r = void 0),
                  zC(e, {
                    name: X.location.pathname,
                    attributes: { [dh]: `url`, [K]: `auto.navigation.browser` },
                  }));
              })),
          u && PC(),
          i && VC(s, c, l, b),
          t && TS(),
          wC(e, {
            traceFetch: d,
            traceXHR: f,
            trackFetchStreamPerformance: p,
            tracePropagationTargets: e.getOptions().tracePropagationTargets,
            shouldCreateSpanForRequest: m,
            enableHTTPTimings: h,
          }));
      },
    };
  };
function RC(e, t, n) {
  (e.emit(`startPageLoadSpan`, t, n), W().setTransactionName(t.name));
  let r = Y();
  return (r && q(r).op) === `pageload` ? r : void 0;
}
function zC(e, t) {
  (ah().setPropagationContext({ traceId: Hm() }),
    W().setPropagationContext({ traceId: Hm() }),
    e.emit(`startNavigationSpan`, t),
    W().setTransactionName(t.name));
  let n = Y();
  return (n && q(n).op) === `navigation` ? n : void 0;
}
function BC(e) {
  let t = sm(`meta[name=${e}]`);
  return t ? t.getAttribute(`content`) : void 0;
}
function VC(e, t, n, r) {
  let i;
  X.document &&
    addEventListener(
      `click`,
      () => {
        let a = `ui.action.click`,
          o = Y(),
          s = o && J(o);
        if (s) {
          let e = q(s).op;
          if ([`navigation`, `pageload`].includes(e)) {
            Ly &&
              V.warn(
                `[Tracing] Did not create ${a} span because a pageload or navigation span is in progress.`,
              );
            return;
          }
        }
        if (
          (i &&
            (i.setAttribute(mh, `interactionInterrupted`),
            i.end(),
            (i = void 0)),
          !r.name)
        ) {
          Ly &&
            V.warn(
              `[Tracing] Did not create ${a} transaction because _latestRouteName is missing.`,
            );
          return;
        }
        i = p_(
          { name: r.name, op: a, attributes: { [dh]: r.source || `url` } },
          { idleTimeout: e, finalTimeout: t, childSpanTimeout: n },
        );
      },
      { once: !1, capture: !0 },
    );
}
g();
function HC(e) {
  let t = _({}, e);
  return (Cv(t, `react`), V_(`react`, { version: T.version }), bC(t));
}
function UC() {
  let e = `YOUR_SENTRY_DSN`;
  if (e === `YOUR_SENTRY_DSN`) {
    console.log(`Sentry skipped — no DSN configured.`);
    return;
  }
  (HC({
    dsn: e,
    integrations: [LC()],
    environment: `production`,
    tracesSampleRate: 0.1,
    sampleRate: 0.25,
    beforeSend(e) {
      if (e.exception) {
        let t = e.exception.values[0];
        if (
          (t.value && t.value.includes(`NetworkError`)) ||
          (t.stacktrace &&
            t.stacktrace.frames.some(
              (e) => e.filename && e.filename.includes(`chrome-extension://`),
            )) ||
          (t.stacktrace &&
            t.stacktrace.frames.some(
              (e) =>
                e.filename &&
                (e.filename.includes(`googletagmanager.com`) ||
                  e.filename.includes(`google-analytics.com`) ||
                  e.filename.includes(`facebook.net`) ||
                  e.filename.includes(`doubleclick.net`)),
            ))
        )
          return null;
      }
      return e;
    },
    initialScope: {
      tags: {
        component: `portfolio-website`,
        version: `1.0.0`,
        framework: `react`,
      },
      user: { id: `anonymous` },
    },
  }),
    console.log(`🔍 Sentry initialized for error monitoring`));
}
(UC(),
  sp(),
  _e
    .createRoot(document.getElementById(`root`))
    .render((0, E.jsx)(T.StrictMode, { children: (0, E.jsx)(hf, {}) })));
export {
  Re as A,
  it as C,
  Le as D,
  Be as E,
  we as M,
  Ee as O,
  at as S,
  be as T,
  Ct as _,
  ro as a,
  ut as b,
  va as c,
  Br as d,
  Ar as f,
  k as g,
  O as h,
  Bo as i,
  Fe as j,
  Oe as k,
  yi as l,
  Zt as m,
  Kd as n,
  F as o,
  Or as p,
  Kl as r,
  ga as s,
  qd as t,
  bi as u,
  yt as v,
  nt as w,
  lt as x,
  gt as y,
};
