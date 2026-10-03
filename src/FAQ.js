import "./FAQ.css";
import { a as e } from "./rolldown-runtime.js";
import { f as t, t as n } from "./vendor.js";
import { w as r } from "./main.js";
import { t as i } from "./useReveal.js";
var a = e(t(), 1),
  o = {
    section: `_section_161se_1`,
    inner: `_inner_161se_2`,
    list: `_list_161se_3`,
    item: `_item_161se_5`,
    open: `_open_161se_13`,
    question: `_question_161se_15`,
    icon: `_icon_161se_26`,
    answer: `_answer_161se_35`,
  },
  s = n();
function c({ item: e }) {
  let [t, n] = (0, a.useState)(!1);
  return (0, s.jsxs)(`div`, {
    className: `${o.item} ${t ? o.open : ``}`,
    children: [
      (0, s.jsxs)(`button`, {
        className: o.question,
        onClick: () => n((e) => !e),
        "aria-expanded": t,
        children: [
          (0, s.jsx)(`span`, { children: e.q }),
          (0, s.jsx)(`div`, {
            className: o.icon,
            children: (0, s.jsx)(`i`, {
              className: `fas fa-${t ? `minus` : `plus`}`,
            }),
          }),
        ],
      }),
      (0, s.jsx)(`div`, {
        className: o.answer,
        children: (0, s.jsx)(`p`, { children: e.a }),
      }),
    ],
  });
}
function l({ page: e = `home`, title: t = `Frequently Asked Questions` }) {
  let n = i(),
    { data: a } = r(),
    l = ((a.faq || {})[e] || []).filter((e) => !e.hidden);
  if (!l.length) return null;
  let u = {
    "@context": `https://schema.org`,
    "@type": `FAQPage`,
    mainEntity: l.map((e) => ({
      "@type": `Question`,
      name: e.q,
      acceptedAnswer: { "@type": `Answer`, text: e.a },
    })),
  };
  return (0, s.jsxs)(`section`, {
    className: o.section,
    children: [
      (0, s.jsx)(`script`, {
        type: `application/ld+json`,
        dangerouslySetInnerHTML: { __html: JSON.stringify(u) },
      }),
      (0, s.jsxs)(`div`, {
        className: o.inner,
        children: [
          (0, s.jsxs)(`div`, {
            ref: n,
            className: `reveal`,
            children: [
              (0, s.jsx)(`div`, {
                className: `section-label`,
                children: `FAQ`,
              }),
              (0, s.jsx)(`h2`, { className: `section-title`, children: t }),
            ],
          }),
          (0, s.jsx)(`div`, {
            className: o.list,
            children: l.map((e) => (0, s.jsx)(c, { item: e }, e.id)),
          }),
        ],
      }),
    ],
  });
}
export { l as t };
