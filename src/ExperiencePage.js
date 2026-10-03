import "./ExperiencePage.css";
import { t as e } from "./vendor.js";
import { w as t } from "./main.js";
import { t as n } from "./useReveal.js";
import { t as r } from "./SEO.js";
var i = {
    page: `_page_1e5cs_1`,
    hero: `_hero_1e5cs_2`,
    heroBg: `_heroBg_1e5cs_3`,
    heroInner: `_heroInner_1e5cs_4`,
    heroTitle: `_heroTitle_1e5cs_5`,
    heroSub: `_heroSub_1e5cs_7`,
    heroStats: `_heroStats_1e5cs_8`,
    heroStat: `_heroStat_1e5cs_8`,
    sn: `_sn_1e5cs_10`,
    sl: `_sl_1e5cs_11`,
    content: `_content_1e5cs_13`,
    col: `_col_1e5cs_16`,
    colHeader: `_colHeader_1e5cs_17`,
    colIcon: `_colIcon_1e5cs_18`,
    colTitle: `_colTitle_1e5cs_20`,
    colSub: `_colSub_1e5cs_21`,
    timeline: `_timeline_1e5cs_24`,
    item: `_item_1e5cs_27`,
    dot: `_dot_1e5cs_28`,
    dotEdu: `_dotEdu_1e5cs_30`,
    dotCourse: `_dotCourse_1e5cs_32`,
    card: `_card_1e5cs_35`,
    period: `_period_1e5cs_38`,
    role: `_role_1e5cs_40`,
    company: `_company_1e5cs_41`,
    desc: `_desc_1e5cs_43`,
    grade: `_grade_1e5cs_44`,
    gradePurple: `_gradePurple_1e5cs_45`,
    tags: `_tags_1e5cs_46`,
    tag: `_tag_1e5cs_46`,
    tagPurple: `_tagPurple_1e5cs_48`,
  },
  a = e();
function o({ item: e, idx: t }) {
  return (0, a.jsxs)(`div`, {
    ref: n(),
    className: `reveal ${i.item}`,
    style: { transitionDelay: `${t * 0.08}s` },
    children: [
      (0, a.jsx)(`div`, {
        className: i.dot,
        children: (0, a.jsx)(`i`, { className: `fas fa-briefcase` }),
      }),
      (0, a.jsxs)(`div`, {
        className: i.card,
        children: [
          (0, a.jsx)(`div`, { className: i.period, children: e.period }),
          (0, a.jsx)(`h3`, { className: i.role, children: e.role }),
          (0, a.jsxs)(`div`, {
            className: i.company,
            children: [
              (0, a.jsx)(`i`, { className: `fas fa-building` }),
              e.company,
            ],
          }),
          e.desc && (0, a.jsx)(`p`, { className: i.desc, children: e.desc }),
          Array.isArray(e.tags) &&
            e.tags.length > 0 &&
            (0, a.jsx)(`div`, {
              className: i.tags,
              children: e.tags.map((e, t) =>
                (0, a.jsx)(`span`, { className: i.tag, children: e }, t),
              ),
            }),
        ],
      }),
    ],
  });
}
function s({ item: e, idx: t }) {
  return (0, a.jsxs)(`div`, {
    ref: n(),
    className: `reveal ${i.item}`,
    style: { transitionDelay: `${t * 0.08}s` },
    children: [
      (0, a.jsx)(`div`, {
        className: `${i.dot} ${i.dotEdu}`,
        children: (0, a.jsx)(`i`, { className: `fas fa-graduation-cap` }),
      }),
      (0, a.jsxs)(`div`, {
        className: i.card,
        children: [
          (0, a.jsx)(`div`, { className: i.period, children: e.period }),
          (0, a.jsx)(`h3`, { className: i.role, children: e.degree }),
          (0, a.jsxs)(`div`, {
            className: i.company,
            children: [
              (0, a.jsx)(`i`, { className: `fas fa-university` }),
              e.institution,
            ],
          }),
          e.grade &&
            (0, a.jsx)(`span`, { className: i.grade, children: e.grade }),
        ],
      }),
    ],
  });
}
function c({ item: e, idx: t }) {
  return (0, a.jsxs)(`div`, {
    ref: n(),
    className: `reveal ${i.item}`,
    style: { transitionDelay: `${t * 0.08}s` },
    children: [
      (0, a.jsx)(`div`, {
        className: `${i.dot} ${i.dotCourse}`,
        children: (0, a.jsx)(`i`, { className: `fas fa-book-open` }),
      }),
      (0, a.jsxs)(`div`, {
        className: i.card,
        children: [
          (0, a.jsx)(`div`, { className: i.period, children: e.period }),
          (0, a.jsx)(`h3`, { className: i.role, children: e.title }),
          (0, a.jsxs)(`div`, {
            className: i.company,
            children: [
              (0, a.jsx)(`i`, { className: `fas fa-chalkboard-teacher` }),
              e.institute,
            ],
          }),
          e.cert &&
            (0, a.jsx)(`span`, {
              className: `${i.grade} ${i.gradePurple}`,
              children: e.cert,
            }),
          e.desc && (0, a.jsx)(`p`, { className: i.desc, children: e.desc }),
          Array.isArray(e.tags) &&
            e.tags.length > 0 &&
            (0, a.jsx)(`div`, {
              className: i.tags,
              children: e.tags.map((e, t) =>
                (0, a.jsx)(
                  `span`,
                  { className: `${i.tag} ${i.tagPurple}`, children: e },
                  t,
                ),
              ),
            }),
        ],
      }),
    ],
  });
}
function l() {
  let { data: e } = t(),
    l = n(),
    u = (e.experience || [])
      .filter((e) => !e.hidden)
      .sort((e, t) => {
        var n, r;
        return (
          parseInt(
            ((n = (t.period || `0`).match(/\d{4}/)) == null ? void 0 : n[0]) ||
              0,
          ) -
          parseInt(
            ((r = (e.period || `0`).match(/\d{4}/)) == null ? void 0 : r[0]) ||
              0,
          )
        );
      }),
    d = (e.education || [])
      .filter((e) => !e.hidden)
      .sort((e, t) => {
        var n, r;
        return (
          parseInt(
            ((n = (t.period || `0`).match(/\d{4}/)) == null ? void 0 : n[0]) ||
              0,
          ) -
          parseInt(
            ((r = (e.period || `0`).match(/\d{4}/)) == null ? void 0 : r[0]) ||
              0,
          )
        );
      }),
    f = (e.courses || []).filter((e) => !e.hidden);
  return (0, a.jsxs)(`main`, {
    className: i.page,
    id: `main-content`,
    role: `main`,
    children: [
      (0, a.jsx)(r, {
        title: `Experience — 8+ Years Creative Career`,
        description: `Al-Amin's career journey: Creative Director at VIVID, Senior Documentation Executive at WithUs Visa, Computer Trainer with 150+ students.`,
        url: `/experience`,
        keywords: `graphic designer experience, creative director bangladesh, computer trainer bangladesh, work history designer`,
      }),
      (0, a.jsxs)(`section`, {
        className: i.hero,
        children: [
          (0, a.jsx)(`div`, { className: i.heroBg }),
          (0, a.jsxs)(`div`, {
            className: i.heroInner,
            children: [
              (0, a.jsxs)(`div`, {
                ref: l,
                className: `reveal`,
                children: [
                  (0, a.jsx)(`div`, {
                    className: `section-label`,
                    children: `Career & Learning`,
                  }),
                  (0, a.jsxs)(`h1`, {
                    className: i.heroTitle,
                    children: [
                      `My `,
                      (0, a.jsx)(`span`, { children: `Journey` }),
                    ],
                  }),
                  (0, a.jsx)(`p`, {
                    className: i.heroSub,
                    children: `8+ years of professional experience, continuous learning, and a passion for creative excellence.`,
                  }),
                ],
              }),
              (0, a.jsxs)(`div`, {
                className: i.heroStats,
                children: [
                  (0, a.jsxs)(`div`, {
                    className: i.heroStat,
                    children: [
                      (0, a.jsx)(`span`, { className: i.sn, children: `8+` }),
                      (0, a.jsx)(`span`, {
                        className: i.sl,
                        children: `Years Experience`,
                      }),
                    ],
                  }),
                  (0, a.jsxs)(`div`, {
                    className: i.heroStat,
                    children: [
                      (0, a.jsx)(`span`, {
                        className: i.sn,
                        children: u.length,
                      }),
                      (0, a.jsx)(`span`, {
                        className: i.sl,
                        children: `Roles Held`,
                      }),
                    ],
                  }),
                  (0, a.jsxs)(`div`, {
                    className: i.heroStat,
                    children: [
                      (0, a.jsx)(`span`, {
                        className: i.sn,
                        children: d.length,
                      }),
                      (0, a.jsx)(`span`, {
                        className: i.sl,
                        children: `Qualifications`,
                      }),
                    ],
                  }),
                  (0, a.jsxs)(`div`, {
                    className: i.heroStat,
                    children: [
                      (0, a.jsx)(`span`, {
                        className: i.sn,
                        children: f.length,
                      }),
                      (0, a.jsx)(`span`, {
                        className: i.sl,
                        children: `Courses`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, a.jsxs)(`div`, {
        className: i.content,
        children: [
          (0, a.jsxs)(`div`, {
            className: i.col,
            children: [
              (0, a.jsxs)(`div`, {
                className: i.colHeader,
                children: [
                  (0, a.jsx)(`div`, {
                    className: i.colIcon,
                    style: {
                      background: `rgba(34,197,94,0.1)`,
                      borderColor: `rgba(34,197,94,0.25)`,
                    },
                    children: (0, a.jsx)(`i`, {
                      className: `fas fa-briefcase`,
                      style: { color: `#22c55e` },
                    }),
                  }),
                  (0, a.jsxs)(`div`, {
                    children: [
                      (0, a.jsx)(`h2`, {
                        className: i.colTitle,
                        children: `Work Experience`,
                      }),
                      (0, a.jsx)(`p`, {
                        className: i.colSub,
                        children: `Professional career timeline`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(`div`, {
                className: i.timeline,
                children: u.map((e, t) =>
                  (0, a.jsx)(o, { item: e, idx: t }, e.id || t),
                ),
              }),
            ],
          }),
          (0, a.jsxs)(`div`, {
            className: i.col,
            children: [
              (0, a.jsxs)(`div`, {
                className: i.colHeader,
                children: [
                  (0, a.jsx)(`div`, {
                    className: i.colIcon,
                    style: {
                      background: `rgba(59,130,246,0.1)`,
                      borderColor: `rgba(59,130,246,0.25)`,
                    },
                    children: (0, a.jsx)(`i`, {
                      className: `fas fa-graduation-cap`,
                      style: { color: `#3b82f6` },
                    }),
                  }),
                  (0, a.jsxs)(`div`, {
                    children: [
                      (0, a.jsx)(`h2`, {
                        className: i.colTitle,
                        children: `Education`,
                      }),
                      (0, a.jsx)(`p`, {
                        className: i.colSub,
                        children: `Academic qualifications`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(`div`, {
                className: i.timeline,
                children: d.map((e, t) =>
                  (0, a.jsx)(s, { item: e, idx: t }, e.id || t),
                ),
              }),
              f.length > 0 &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsxs)(`div`, {
                      className: i.colHeader,
                      style: { marginTop: `2.5rem` },
                      children: [
                        (0, a.jsx)(`div`, {
                          className: i.colIcon,
                          style: {
                            background: `rgba(167,139,250,0.1)`,
                            borderColor: `rgba(167,139,250,0.25)`,
                          },
                          children: (0, a.jsx)(`i`, {
                            className: `fas fa-book-open`,
                            style: { color: `#a78bfa` },
                          }),
                        }),
                        (0, a.jsxs)(`div`, {
                          children: [
                            (0, a.jsx)(`h2`, {
                              className: i.colTitle,
                              children: `Training & Courses`,
                            }),
                            (0, a.jsx)(`p`, {
                              className: i.colSub,
                              children: `Self-taught & online learning`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)(`div`, {
                      className: i.timeline,
                      children: f.map((e, t) =>
                        (0, a.jsx)(c, { item: e, idx: t }, e.id || t),
                      ),
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { l as default };
