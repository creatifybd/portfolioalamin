import "./SkillsPage.css";
import { t as e } from "./vendor.js";
import { w as t } from "./main.js";
import { t as n } from "./useReveal.js";
import { t as r } from "./SEO.js";
var i = {
    page: `_page_1vd2a_1`,
    hero: `_hero_1vd2a_2`,
    heroBg: `_heroBg_1vd2a_3`,
    heroInner: `_heroInner_1vd2a_4`,
    heroTitle: `_heroTitle_1vd2a_5`,
    heroSub: `_heroSub_1vd2a_7`,
    heroStats: `_heroStats_1vd2a_8`,
    heroStat: `_heroStat_1vd2a_8`,
    heroStatNum: `_heroStatNum_1vd2a_11`,
    heroStatLabel: `_heroStatLabel_1vd2a_12`,
    content: `_content_1vd2a_14`,
    catSection: `_catSection_1vd2a_17`,
    catHeader: `_catHeader_1vd2a_18`,
    catIcon: `_catIcon_1vd2a_19`,
    catTitle: `_catTitle_1vd2a_21`,
    catSub: `_catSub_1vd2a_22`,
    skillsList: `_skillsList_1vd2a_24`,
    skillItem: `_skillItem_1vd2a_25`,
    skillTop: `_skillTop_1vd2a_26`,
    skillName: `_skillName_1vd2a_27`,
    skillPct: `_skillPct_1vd2a_28`,
    skillBar: `_skillBar_1vd2a_29`,
    skillFill: `_skillFill_1vd2a_30`,
    ctaSection: `_ctaSection_1vd2a_32`,
    ctaInner: `_ctaInner_1vd2a_33`,
    ctaTitle: `_ctaTitle_1vd2a_34`,
    ctaSub: `_ctaSub_1vd2a_35`,
    ctaBtns: `_ctaBtns_1vd2a_36`,
    ctaPrimary: `_ctaPrimary_1vd2a_37`,
    ctaSecondary: `_ctaSecondary_1vd2a_39`,
  },
  a = e(),
  o = {
    design: `Design Tools`,
    ai: `AI & Technology`,
    office: `Office & Productivity`,
    soft: `Soft Skills`,
  },
  s = {
    design: `fas fa-palette`,
    ai: `fas fa-robot`,
    office: `fas fa-file-alt`,
    soft: `fas fa-heart`,
  },
  c = { design: `#22c55e`, ai: `#8b5cf6`, office: `#3b82f6`, soft: `#f59e0b` };
function l({ skill: e, idx: t }) {
  let r = n(),
    o = c[e.cat] || `#22c55e`;
  return (0, a.jsxs)(`div`, {
    ref: r,
    className: `reveal ${i.skillItem}`,
    style: { transitionDelay: `${t * 0.05}s` },
    children: [
      (0, a.jsxs)(`div`, {
        className: i.skillTop,
        children: [
          (0, a.jsx)(`span`, { className: i.skillName, children: e.name }),
          (0, a.jsxs)(`span`, {
            className: i.skillPct,
            style: { color: o },
            children: [e.pct, `%`],
          }),
        ],
      }),
      (0, a.jsx)(`div`, {
        className: i.skillBar,
        children: (0, a.jsx)(`div`, {
          className: i.skillFill,
          style: { width: `${e.pct}%`, background: o },
        }),
      }),
    ],
  });
}
function u() {
  let { data: e } = t(),
    u = e.skills || [],
    d = n(),
    f = [`design`, `ai`, `office`, `soft`];
  return (0, a.jsxs)(`main`, {
    className: i.page,
    id: `main-content`,
    role: `main`,
    children: [
      (0, a.jsx)(r, {
        title: `Skills — Design, AI & Digital Expertise`,
        description: `Al-Amin's skills: Adobe Illustrator, Photoshop, Canva Pro, Figma, Midjourney, ChatGPT, MS Office and more. 8+ years of professional expertise.`,
        url: `/skills`,
        keywords: `graphic design skills, adobe illustrator expert, photoshop expert, canva expert, midjourney expert, AI design skills`,
      }),
      (0, a.jsxs)(`section`, {
        className: i.hero,
        children: [
          (0, a.jsx)(`div`, { className: i.heroBg }),
          (0, a.jsxs)(`div`, {
            className: i.heroInner,
            children: [
              (0, a.jsxs)(`div`, {
                ref: d,
                className: `reveal`,
                children: [
                  (0, a.jsx)(`div`, {
                    className: `section-label`,
                    children: `Expertise`,
                  }),
                  (0, a.jsxs)(`h1`, {
                    className: i.heroTitle,
                    children: [
                      `Skills & `,
                      (0, a.jsx)(`span`, { children: `Proficiency` }),
                    ],
                  }),
                  (0, a.jsx)(`p`, {
                    className: i.heroSub,
                    children: `8+ years of hands-on experience across design, AI tools, and digital marketing — continuously learning and growing.`,
                  }),
                ],
              }),
              (0, a.jsx)(`div`, {
                className: i.heroStats,
                children: f.map((e) => {
                  let t = u.filter((t) => t.cat === e).length;
                  if (!t) return null;
                  let n = c[e];
                  return (0, a.jsxs)(
                    `div`,
                    {
                      className: i.heroStat,
                      style: { "--c": n },
                      children: [
                        (0, a.jsx)(`i`, { className: s[e] }),
                        (0, a.jsx)(`span`, {
                          className: i.heroStatNum,
                          children: t,
                        }),
                        (0, a.jsx)(`span`, {
                          className: i.heroStatLabel,
                          children: o[e],
                        }),
                      ],
                    },
                    e,
                  );
                }),
              }),
            ],
          }),
        ],
      }),
      (0, a.jsx)(`div`, {
        className: i.content,
        children: f.map((e) => {
          let t = u.filter((t) => t.cat === e && !t.hidden);
          if (!t.length) return null;
          let n = c[e];
          return (0, a.jsxs)(
            `section`,
            {
              className: i.catSection,
              children: [
                (0, a.jsxs)(`div`, {
                  className: i.catHeader,
                  style: { "--c": n },
                  children: [
                    (0, a.jsx)(`div`, {
                      className: i.catIcon,
                      children: (0, a.jsx)(`i`, { className: s[e] }),
                    }),
                    (0, a.jsxs)(`div`, {
                      children: [
                        (0, a.jsx)(`h2`, {
                          className: i.catTitle,
                          children: o[e],
                        }),
                        (0, a.jsxs)(`p`, {
                          className: i.catSub,
                          children: [t.length, ` skills`],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(`div`, {
                  className: i.skillsList,
                  children: t.map((e, t) =>
                    (0, a.jsx)(l, { skill: e, idx: t }, e.id || t),
                  ),
                }),
              ],
            },
            e,
          );
        }),
      }),
      (0, a.jsx)(`section`, {
        className: i.ctaSection,
        children: (0, a.jsxs)(`div`, {
          className: i.ctaInner,
          children: [
            (0, a.jsx)(`h2`, {
              className: i.ctaTitle,
              children: `Need these skills for your project?`,
            }),
            (0, a.jsx)(`p`, {
              className: i.ctaSub,
              children: `Let's work together to bring your vision to life.`,
            }),
            (0, a.jsxs)(`div`, {
              className: i.ctaBtns,
              children: [
                (0, a.jsxs)(`a`, {
                  href: `/contact`,
                  className: i.ctaPrimary,
                  children: [
                    (0, a.jsx)(`i`, { className: `fas fa-paper-plane` }),
                    ` Get in Touch`,
                  ],
                }),
                (0, a.jsxs)(`a`, {
                  href: `/portfolio`,
                  className: i.ctaSecondary,
                  children: [
                    (0, a.jsx)(`i`, { className: `fas fa-eye` }),
                    ` See My Work`,
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { u as default };
