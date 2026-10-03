import "./AboutPage.css";
import { t as e } from "./vendor.js";
import { w as t } from "./main.js";
import { t as n } from "./useReveal.js";
import { t as r } from "./FAQ.js";
import { t as i } from "./SEO.js";
var a = {
    page: `_page_1q3pr_1`,
    hero: `_hero_1q3pr_4`,
    heroBg: `_heroBg_1q3pr_5`,
    heroInner: `_heroInner_1q3pr_6`,
    photoWrap: `_photoWrap_1q3pr_10`,
    photo: `_photo_1q3pr_10`,
    photoPlaceholder: `_photoPlaceholder_1q3pr_13`,
    photoGlow: `_photoGlow_1q3pr_14`,
    availBadge: `_availBadge_1q3pr_15`,
    availDot: `_availDot_1q3pr_16`,
    pulse: `_pulse_1q3pr_1`,
    bioWrap: `_bioWrap_1q3pr_20`,
    name: `_name_1q3pr_21`,
    titleRow: `_titleRow_1q3pr_23`,
    titleBadge: `_titleBadge_1q3pr_25`,
    bio: `_bio_1q3pr_20`,
    heroCtas: `_heroCtas_1q3pr_27`,
    ctaPrimary: `_ctaPrimary_1q3pr_29`,
    ctaSecondary: `_ctaSecondary_1q3pr_31`,
    statsSection: `_statsSection_1q3pr_35`,
    statsGrid: `_statsGrid_1q3pr_36`,
    stat: `_stat_1q3pr_35`,
    statNum: `_statNum_1q3pr_41`,
    statLabel: `_statLabel_1q3pr_42`,
    tagsSection: `_tagsSection_1q3pr_45`,
    inner: `_inner_1q3pr_46`,
    tagsCloud: `_tagsCloud_1q3pr_47`,
    tag: `_tag_1q3pr_45`,
    fadeInUp: `_fadeInUp_1q3pr_1`,
    valuesSection: `_valuesSection_1q3pr_53`,
    valuesGrid: `_valuesGrid_1q3pr_54`,
    valueCard: `_valueCard_1q3pr_57`,
    valueIcon: `_valueIcon_1q3pr_59`,
    valueTitle: `_valueTitle_1q3pr_61`,
    valueDesc: `_valueDesc_1q3pr_62`,
    ctaSection: `_ctaSection_1q3pr_65`,
    ctaInner: `_ctaInner_1q3pr_66`,
    ctaTitle: `_ctaTitle_1q3pr_67`,
    ctaSub: `_ctaSub_1q3pr_68`,
    ctaBtns: `_ctaBtns_1q3pr_69`,
    ctaWa: `_ctaWa_1q3pr_70`,
  },
  o = e();
function s({ num: e, label: t, icon: r }) {
  return (0, o.jsxs)(`div`, {
    ref: n(),
    className: `reveal ${a.stat}`,
    children: [
      (0, o.jsx)(`i`, { className: r }),
      (0, o.jsx)(`div`, { className: a.statNum, children: e }),
      (0, o.jsx)(`div`, { className: a.statLabel, children: t }),
    ],
  });
}
function c({ icon: e, title: t, desc: r, delay: i }) {
  return (0, o.jsxs)(`div`, {
    ref: n(),
    className: `reveal ${a.valueCard}`,
    style: { transitionDelay: i },
    children: [
      (0, o.jsx)(`div`, {
        className: a.valueIcon,
        children: (0, o.jsx)(`i`, { className: e }),
      }),
      (0, o.jsx)(`h3`, { className: a.valueTitle, children: t }),
      (0, o.jsx)(`p`, { className: a.valueDesc, children: r }),
    ],
  });
}
function l() {
  let { data: e } = t(),
    { bio1: l, bio2: u, photoUrl: d, tags: f = [], cvLink: p } = e.about || {},
    m = n(),
    h = n(),
    g = n(),
    _ = n();
  return (0, o.jsxs)(`main`, {
    className: a.page,
    id: `main-content`,
    role: `main`,
    children: [
      (0, o.jsx)(i, {
        title: `About — Graphic Designer & AI Expert from Bangladesh`,
        description: `Learn about Al-Amin Bin Ashad Ali — 8+ years experience as a Creative Director, Graphic Designer, AI Expert and Computer Trainer in Bangladesh.`,
        url: `/about`,
        keywords: `about al-amin designer, graphic designer bangladesh, creative director bangladesh, computer trainer narayanganj, AI expert bangladesh`,
      }),
      (0, o.jsxs)(`section`, {
        className: a.hero,
        children: [
          (0, o.jsx)(`div`, { className: a.heroBg }),
          (0, o.jsxs)(`div`, {
            className: a.heroInner,
            children: [
              (0, o.jsxs)(`div`, {
                ref: m,
                className: `reveal ${a.photoWrap}`,
                children: [
                  d
                    ? (0, o.jsx)(`img`, {
                        src: d,
                        alt: `Al-Amin`,
                        className: a.photo,
                      })
                    : (0, o.jsx)(`div`, {
                        className: a.photoPlaceholder,
                        children: (0, o.jsx)(`i`, { className: `fas fa-user` }),
                      }),
                  (0, o.jsx)(`div`, { className: a.photoGlow }),
                  (0, o.jsxs)(`div`, {
                    className: a.availBadge,
                    children: [
                      (0, o.jsx)(`span`, { className: a.availDot }),
                      `Available for Projects`,
                    ],
                  }),
                ],
              }),
              (0, o.jsxs)(`div`, {
                ref: h,
                className: `reveal ${a.bioWrap}`,
                children: [
                  (0, o.jsx)(`div`, {
                    className: `section-label`,
                    children: `About Me`,
                  }),
                  (0, o.jsxs)(`h1`, {
                    className: a.name,
                    children: [
                      `Al-Amin `,
                      (0, o.jsx)(`span`, { children: `Bin Ashad Ali` }),
                    ],
                  }),
                  (0, o.jsxs)(`div`, {
                    className: a.titleRow,
                    children: [
                      (0, o.jsxs)(`span`, {
                        className: a.titleBadge,
                        children: [
                          (0, o.jsx)(`i`, { className: `fas fa-palette` }),
                          ` Graphic Designer`,
                        ],
                      }),
                      (0, o.jsxs)(`span`, {
                        className: a.titleBadge,
                        children: [
                          (0, o.jsx)(`i`, { className: `fas fa-robot` }),
                          ` AI Expert`,
                        ],
                      }),
                      (0, o.jsxs)(`span`, {
                        className: a.titleBadge,
                        children: [
                          (0, o.jsx)(`i`, {
                            className: `fas fa-chalkboard-teacher`,
                          }),
                          ` Trainer`,
                        ],
                      }),
                    ],
                  }),
                  l && (0, o.jsx)(`p`, { className: a.bio, children: l }),
                  u && (0, o.jsx)(`p`, { className: a.bio, children: u }),
                  (0, o.jsxs)(`div`, {
                    className: a.heroCtas,
                    children: [
                      p &&
                        p !== `#` &&
                        (0, o.jsxs)(`a`, {
                          href: p,
                          download: !0,
                          className: a.ctaPrimary,
                          onClick: () =>
                            window.gtag &&
                            window.gtag(`event`, `cv_download`, {
                              event_category: `engagement`,
                            }),
                          children: [
                            (0, o.jsx)(`i`, { className: `fas fa-download` }),
                            ` Download CV`,
                          ],
                        }),
                      (0, o.jsxs)(`a`, {
                        href: `/contact`,
                        className: a.ctaSecondary,
                        children: [
                          (0, o.jsx)(`i`, { className: `fas fa-envelope` }),
                          ` Hire Me`,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, o.jsx)(`section`, {
        className: a.statsSection,
        children: (0, o.jsxs)(`div`, {
          className: a.statsGrid,
          children: [
            (0, o.jsx)(s, {
              num: `8+`,
              label: `Years Experience`,
              icon: `fas fa-briefcase`,
            }),
            (0, o.jsx)(s, {
              num: `200+`,
              label: `Projects Done`,
              icon: `fas fa-layer-group`,
            }),
            (0, o.jsx)(s, {
              num: `150+`,
              label: `Students Trained`,
              icon: `fas fa-graduation-cap`,
            }),
            (0, o.jsx)(s, {
              num: `50+`,
              label: `Happy Clients`,
              icon: `fas fa-smile`,
            }),
          ],
        }),
      }),
      f.length > 0 &&
        (0, o.jsx)(`section`, {
          className: a.tagsSection,
          children: (0, o.jsxs)(`div`, {
            className: a.inner,
            children: [
              (0, o.jsxs)(`div`, {
                ref: g,
                className: `reveal`,
                children: [
                  (0, o.jsx)(`div`, {
                    className: `section-label`,
                    children: `Expertise`,
                  }),
                  (0, o.jsxs)(`h2`, {
                    className: `section-title`,
                    children: [
                      `Skills & `,
                      (0, o.jsx)(`span`, { children: `Tools` }),
                    ],
                  }),
                ],
              }),
              (0, o.jsx)(`div`, {
                className: a.tagsCloud,
                children: f.map((e, t) =>
                  (0, o.jsx)(
                    `span`,
                    {
                      className: a.tag,
                      style: { animationDelay: `${t * 0.05}s` },
                      children: e,
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
        }),
      (0, o.jsx)(`section`, {
        className: a.valuesSection,
        children: (0, o.jsxs)(`div`, {
          className: a.inner,
          children: [
            (0, o.jsxs)(`div`, {
              ref: _,
              className: `reveal`,
              children: [
                (0, o.jsx)(`div`, {
                  className: `section-label`,
                  children: `Why Choose Me`,
                }),
                (0, o.jsxs)(`h2`, {
                  className: `section-title`,
                  children: [
                    `My `,
                    (0, o.jsx)(`span`, { children: `Approach` }),
                  ],
                }),
              ],
            }),
            (0, o.jsxs)(`div`, {
              className: a.valuesGrid,
              children: [
                (0, o.jsx)(c, {
                  icon: `fas fa-bullseye`,
                  title: `Result-Focused`,
                  desc: `Every design decision is intentional — made to achieve your business goals, not just look pretty.`,
                  delay: `0s`,
                }),
                (0, o.jsx)(c, {
                  icon: `fas fa-clock`,
                  title: `Always On Time`,
                  desc: `I respect deadlines. Clients can count on me to deliver quality work within agreed timeframes.`,
                  delay: `0.1s`,
                }),
                (0, o.jsx)(c, {
                  icon: `fas fa-comments`,
                  title: `Clear Communication`,
                  desc: `I keep clients in the loop throughout the project — no surprises, no confusion.`,
                  delay: `0.2s`,
                }),
                (0, o.jsx)(c, {
                  icon: `fas fa-lightbulb`,
                  title: `Creative Problem Solver`,
                  desc: `I bring fresh ideas combined with 8+ years of experience to every challenge.`,
                  delay: `0.3s`,
                }),
                (0, o.jsx)(c, {
                  icon: `fas fa-robot`,
                  title: `AI-Powered Workflows`,
                  desc: `I leverage cutting-edge AI tools to deliver higher quality work faster than traditional methods.`,
                  delay: `0.4s`,
                }),
                (0, o.jsx)(c, {
                  icon: `fas fa-handshake`,
                  title: `Long-term Partnership`,
                  desc: `I build relationships, not just projects. Most of my clients come back for more.`,
                  delay: `0.5s`,
                }),
              ],
            }),
          ],
        }),
      }),
      (0, o.jsx)(r, { page: `about`, title: `About FAQ` }),
      (0, o.jsx)(`section`, {
        className: a.ctaSection,
        children: (0, o.jsxs)(`div`, {
          className: a.ctaInner,
          children: [
            (0, o.jsx)(`h2`, {
              className: a.ctaTitle,
              children: `Ready to work together?`,
            }),
            (0, o.jsx)(`p`, {
              className: a.ctaSub,
              children: `Let's turn your ideas into stunning visual experiences.`,
            }),
            (0, o.jsxs)(`div`, {
              className: a.ctaBtns,
              children: [
                (0, o.jsxs)(`a`, {
                  href: `/contact`,
                  className: a.ctaPrimary,
                  children: [
                    (0, o.jsx)(`i`, { className: `fas fa-paper-plane` }),
                    ` Start a Project`,
                  ],
                }),
                (0, o.jsxs)(`a`, {
                  href: `https://wa.me/8801731186929`,
                  target: `_blank`,
                  rel: `noreferrer`,
                  className: a.ctaWa,
                  children: [
                    (0, o.jsx)(`i`, { className: `fab fa-whatsapp` }),
                    ` WhatsApp`,
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
export { l as default };
