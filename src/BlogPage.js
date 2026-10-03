import "./BlogPage.css";
import { a as e } from "./rolldown-runtime.js";
import { a as t, f as n, t as r } from "./vendor.js";
import { w as i } from "./main.js";
import { t as a } from "./useReveal.js";
import { t as o } from "./SEO.js";
var s = e(n(), 1),
  c = {
    page: `_page_kvq4s_1`,
    hero: `_hero_kvq4s_2`,
    heroBg: `_heroBg_kvq4s_3`,
    heroInner: `_heroInner_kvq4s_4`,
    heroTitle: `_heroTitle_kvq4s_5`,
    heroSub: `_heroSub_kvq4s_7`,
    topicsBar: `_topicsBar_kvq4s_9`,
    topicsInner: `_topicsInner_kvq4s_10`,
    topicBtn: `_topicBtn_kvq4s_12`,
    topicActive: `_topicActive_kvq4s_14`,
    content: `_content_kvq4s_16`,
    grid: `_grid_kvq4s_17`,
    card: `_card_kvq4s_21`,
    cover: `_cover_kvq4s_23`,
    coverPlaceholder: `_coverPlaceholder_kvq4s_24`,
    cardBody: `_cardBody_kvq4s_25`,
    meta: `_meta_kvq4s_26`,
    topic: `_topic_kvq4s_9`,
    date: `_date_kvq4s_28`,
    title: `_title_kvq4s_29`,
    excerpt: `_excerpt_kvq4s_30`,
    readMore: `_readMore_kvq4s_31`,
    empty: `_empty_kvq4s_34`,
  },
  l = r(),
  u = [
    `All`,
    `Graphic Design`,
    `AI & Design`,
    `Web Design`,
    `Tutorials`,
    `Career Tips`,
  ];
function d({ post: e, idx: n }) {
  var r;
  return (0, l.jsxs)(t, {
    ref: a(),
    to: `/blog/${e.id}`,
    className: `reveal ${c.card}`,
    style: { transitionDelay: `${n * 0.07}s` },
    children: [
      e.coverUrl &&
        (0, l.jsx)(`img`, {
          loading: `lazy`,
          src: e.coverUrl,
          alt: e.title,
          className: c.cover,
        }),
      !e.coverUrl &&
        (0, l.jsx)(`div`, {
          className: c.coverPlaceholder,
          children: (0, l.jsx)(`i`, { className: `fas fa-pen-nib` }),
        }),
      (0, l.jsxs)(`div`, {
        className: c.cardBody,
        children: [
          (0, l.jsxs)(`div`, {
            className: c.meta,
            children: [
              (0, l.jsx)(`span`, {
                className: c.topic,
                children: e.topic || `Design`,
              }),
              (0, l.jsx)(`span`, {
                className: c.date,
                children: e.publishedAt
                  ? new Date(e.publishedAt).toLocaleDateString(`en-US`, {
                      month: `short`,
                      day: `numeric`,
                      year: `numeric`,
                    })
                  : ``,
              }),
            ],
          }),
          (0, l.jsx)(`h2`, { className: c.title, children: e.title }),
          (0, l.jsxs)(`p`, {
            className: c.excerpt,
            children: [
              e.excerpt || ((r = e.content) == null ? void 0 : r.slice(0, 120)),
              `…`,
            ],
          }),
          (0, l.jsxs)(`div`, {
            className: c.readMore,
            children: [
              `Read Article `,
              (0, l.jsx)(`i`, { className: `fas fa-arrow-right` }),
            ],
          }),
        ],
      }),
    ],
  });
}
function f() {
  let { data: e } = i(),
    [t, n] = (0, s.useState)(`All`),
    r = a(),
    f = (e.blog || []).filter(
      (e) => !e.hidden && (t === `All` || e.topic === t),
    );
  return (0, l.jsxs)(`main`, {
    className: c.page,
    id: `main-content`,
    role: `main`,
    children: [
      (0, l.jsx)(o, {
        title: `Design & AI Tips Blog — Al-Amin Bin Ashad Ali | Graphic Designer Bangladesh`,
        description: `Professional graphic design tips, AI tools guide, freelancing insights, logo design tutorials — free resources for designers and freelancers. Based on 8+ years of experience.`,
        url: `/blog`,
        keywords: `graphic design blog, AI design tips, logo design tutorial, canva tips, freelance design tips, design career bangladesh`,
      }),
      (0, l.jsxs)(`section`, {
        className: c.hero,
        children: [
          (0, l.jsx)(`div`, { className: c.heroBg }),
          (0, l.jsx)(`div`, {
            className: c.heroInner,
            children: (0, l.jsxs)(`div`, {
              ref: r,
              className: `reveal`,
              children: [
                (0, l.jsx)(`div`, {
                  className: `section-label`,
                  children: `Insights & Ideas`,
                }),
                (0, l.jsxs)(`h1`, {
                  className: c.heroTitle,
                  children: [
                    `Design `,
                    (0, l.jsx)(`span`, { children: `Blog` }),
                  ],
                }),
                (0, l.jsx)(`p`, {
                  className: c.heroSub,
                  children: `Tips, tutorials and insights from 8+ years of professional design experience.`,
                }),
              ],
            }),
          }),
        ],
      }),
      (0, l.jsx)(`div`, {
        className: c.topicsBar,
        children: (0, l.jsx)(`div`, {
          className: c.topicsInner,
          children: u.map((e) =>
            (0, l.jsx)(
              `button`,
              {
                className: `${c.topicBtn} ${t === e ? c.topicActive : ``}`,
                onClick: () => n(e),
                children: e,
              },
              e,
            ),
          ),
        }),
      }),
      (0, l.jsx)(`div`, {
        className: c.content,
        children:
          f.length === 0
            ? (0, l.jsxs)(`div`, {
                className: c.empty,
                children: [
                  (0, l.jsx)(`i`, { className: `fas fa-pen-nib` }),
                  (0, l.jsx)(`h3`, { children: `No articles yet` }),
                  (0, l.jsx)(`p`, {
                    children: `New articles coming soon! Check back later.`,
                  }),
                ],
              })
            : (0, l.jsx)(`div`, {
                className: c.grid,
                children: f.map((e, t) =>
                  (0, l.jsx)(d, { post: e, idx: t }, e.id),
                ),
              }),
      }),
    ],
  });
}
export { f as default };
