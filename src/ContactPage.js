import "./ContactPage.css";
import { a as e } from "./rolldown-runtime.js";
import { f as t, t as n } from "./vendor.js";
import { C as r, S as i, x as a } from "./firebase.js";
import { j as o, w as s } from "./main.js";
import { t as c } from "./useReveal.js";
import { t as l } from "./FAQ.js";
import { t as u } from "./SEO.js";
var d = e(t(), 1),
  f = {
    page: `_page_sly03_1`,
    hero: `_hero_sly03_4`,
    heroBg: `_heroBg_sly03_5`,
    heroInner: `_heroInner_sly03_6`,
    heroTitle: `_heroTitle_sly03_7`,
    heroSub: `_heroSub_sly03_9`,
    availBadge: `_availBadge_sly03_10`,
    availDot: `_availDot_sly03_11`,
    pulse: `_pulse_sly03_1`,
    content: `_content_sly03_15`,
    infoWrap: `_infoWrap_sly03_19`,
    infoItems: `_infoItems_sly03_20`,
    infoItem: `_infoItem_sly03_20`,
    infoIcon: `_infoIcon_sly03_22`,
    waCta: `_waCta_sly03_28`,
    socials: `_socials_sly03_37`,
    social: `_social_sly03_37`,
    responseInfo: `_responseInfo_sly03_41`,
    form: `_form_sly03_46`,
    row: `_row_sly03_47`,
    field: `_field_sly03_49`,
    success: `_success_sly03_57`,
    error: `_error_sly03_58`,
  },
  p = n();
r();
function m() {
  let { data: e } = s(),
    [t, n] = (0, d.useState)({
      name: ``,
      email: ``,
      service: ``,
      message: ``,
      _hp: ``,
    }),
    [r, m] = (0, d.useState)(null),
    h = c(),
    g = c(),
    _ = e.social || {},
    v = `https://wa.me/${(_.wa || `+8801731186929`).replace(/\D/g, ``)}`;
  function y(e) {
    return b.apply(this, arguments);
  }
  function b() {
    return (
      (b = a(function* (e) {
        if ((e.preventDefault(), !t._hp && !(!t.name || !t.message))) {
          m(`sending`);
          try {
            (yield o(t),
              m(`success`),
              n({ name: ``, email: ``, service: ``, message: `` }),
              setTimeout(() => m(null), 6e3));
          } catch (e) {
            (m(`error`), setTimeout(() => m(null), 5e3));
          }
        }
      })),
      b.apply(this, arguments)
    );
  }
  return (0, p.jsxs)(`main`, {
    className: f.page,
    id: `main-content`,
    role: `main`,
    children: [
      (0, p.jsx)(u, {
        title: `Contact — Hire Me for Your Project`,
        description: `Get in touch with Al-Amin for graphic design, logo design, web design or AI creative projects. Quick response guaranteed. WhatsApp: +880 1731-186929`,
        url: `/contact`,
        keywords: `hire graphic designer bangladesh, contact designer bangladesh, freelance designer bangladesh, graphic design quote`,
      }),
      (0, p.jsxs)(`section`, {
        className: f.hero,
        children: [
          (0, p.jsx)(`div`, { className: f.heroBg }),
          (0, p.jsx)(`div`, {
            className: f.heroInner,
            children: (0, p.jsxs)(`div`, {
              ref: h,
              className: `reveal`,
              children: [
                (0, p.jsx)(`div`, {
                  className: `section-label`,
                  children: `Get in Touch`,
                }),
                (0, p.jsxs)(`h1`, {
                  className: f.heroTitle,
                  children: [
                    `Let's Work `,
                    (0, p.jsx)(`span`, { children: `Together` }),
                  ],
                }),
                (0, p.jsx)(`p`, {
                  className: f.heroSub,
                  children: `Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.`,
                }),
                (0, p.jsxs)(`div`, {
                  className: f.availBadge,
                  children: [
                    (0, p.jsx)(`span`, { className: f.availDot }),
                    ` Currently available for new projects`,
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      (0, p.jsxs)(`div`, {
        className: f.content,
        children: [
          (0, p.jsxs)(`div`, {
            ref: h,
            className: `reveal ${f.infoWrap}`,
            children: [
              (0, p.jsxs)(`div`, {
                className: f.infoItems,
                children: [
                  (0, p.jsxs)(`div`, {
                    className: f.infoItem,
                    children: [
                      (0, p.jsx)(`div`, {
                        className: f.infoIcon,
                        children: (0, p.jsx)(`i`, {
                          className: `fas fa-envelope`,
                        }),
                      }),
                      (0, p.jsxs)(`div`, {
                        children: [
                          (0, p.jsx)(`span`, { children: `Email` }),
                          (0, p.jsx)(`strong`, {
                            children: `binashad7@gmail.com`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, p.jsxs)(`div`, {
                    className: f.infoItem,
                    children: [
                      (0, p.jsx)(`div`, {
                        className: f.infoIcon,
                        children: (0, p.jsx)(`i`, {
                          className: `fas fa-map-marker-alt`,
                        }),
                      }),
                      (0, p.jsxs)(`div`, {
                        children: [
                          (0, p.jsx)(`span`, { children: `Location` }),
                          (0, p.jsx)(`strong`, {
                            children: `Narayanganj, Bangladesh`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, p.jsxs)(`a`, {
                href: v,
                target: `_blank`,
                rel: `noreferrer`,
                className: f.waCta,
                children: [
                  (0, p.jsx)(`i`, { className: `fab fa-whatsapp` }),
                  (0, p.jsxs)(`div`, {
                    children: [
                      (0, p.jsx)(`span`, { children: `Chat on WhatsApp` }),
                      (0, p.jsx)(`small`, { children: `+880 1731-186929` }),
                    ],
                  }),
                ],
              }),
              (0, p.jsxs)(`div`, {
                className: f.socials,
                children: [
                  _.fb &&
                    _.fb !== `#` &&
                    (0, p.jsx)(`a`, {
                      href: _.fb,
                      target: `_blank`,
                      rel: `noreferrer`,
                      className: f.social,
                      children: (0, p.jsx)(`i`, {
                        className: `fab fa-facebook-f`,
                      }),
                    }),
                  _.li &&
                    _.li !== `#` &&
                    (0, p.jsx)(`a`, {
                      href: _.li,
                      target: `_blank`,
                      rel: `noreferrer`,
                      className: f.social,
                      children: (0, p.jsx)(`i`, {
                        className: `fab fa-linkedin-in`,
                      }),
                    }),
                  _.ig &&
                    _.ig !== `#` &&
                    (0, p.jsx)(`a`, {
                      href: _.ig,
                      target: `_blank`,
                      rel: `noreferrer`,
                      className: f.social,
                      children: (0, p.jsx)(`i`, {
                        className: `fab fa-instagram`,
                      }),
                    }),
                  _.beh &&
                    _.beh !== `#` &&
                    (0, p.jsx)(`a`, {
                      href: _.beh,
                      target: `_blank`,
                      rel: `noreferrer`,
                      className: f.social,
                      children: (0, p.jsx)(`i`, {
                        className: `fab fa-behance`,
                      }),
                    }),
                  _.yt &&
                    _.yt !== `#` &&
                    (0, p.jsx)(`a`, {
                      href: _.yt,
                      target: `_blank`,
                      rel: `noreferrer`,
                      className: f.social,
                      children: (0, p.jsx)(`i`, {
                        className: `fab fa-youtube`,
                      }),
                    }),
                ],
              }),
              (0, p.jsxs)(`div`, {
                className: f.responseInfo,
                children: [
                  (0, p.jsx)(`i`, { className: `fas fa-clock` }),
                  (0, p.jsxs)(`span`, {
                    children: [
                      `Average response time: `,
                      (0, p.jsx)(`strong`, { children: `within 24 hours` }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, p.jsx)(`div`, {
            ref: g,
            className: `reveal`,
            children: (0, p.jsxs)(`form`, {
              className: f.form,
              onSubmit: y,
              children: [
                (0, p.jsx)(`div`, {
                  style: {
                    position: `absolute`,
                    left: `-9999px`,
                    opacity: 0,
                    height: 0,
                    overflow: `hidden`,
                  },
                  "aria-hidden": `true`,
                  children: (0, p.jsx)(`input`, {
                    type: `text`,
                    name: `website`,
                    tabIndex: -1,
                    autoComplete: `off`,
                    value: t._hp || ``,
                    onChange: (e) =>
                      n((t) => i(i({}, t), {}, { _hp: e.target.value })),
                  }),
                }),
                (0, p.jsxs)(`div`, {
                  className: f.row,
                  children: [
                    (0, p.jsxs)(`div`, {
                      className: f.field,
                      children: [
                        (0, p.jsx)(`label`, { children: `Your Name` }),
                        (0, p.jsx)(`input`, {
                          type: `text`,
                          placeholder: `John Doe`,
                          value: t.name,
                          onChange: (e) =>
                            n((t) => i(i({}, t), {}, { name: e.target.value })),
                        }),
                      ],
                    }),
                    (0, p.jsxs)(`div`, {
                      className: f.field,
                      children: [
                        (0, p.jsx)(`label`, { children: `Email Address` }),
                        (0, p.jsx)(`input`, {
                          type: `email`,
                          placeholder: `john@example.com`,
                          value: t.email,
                          onChange: (e) =>
                            n((t) =>
                              i(i({}, t), {}, { email: e.target.value }),
                            ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, p.jsxs)(`div`, {
                  className: f.field,
                  children: [
                    (0, p.jsx)(`label`, { children: `Service Needed` }),
                    (0, p.jsxs)(`select`, {
                      value: t.service,
                      onChange: (e) =>
                        n((t) => i(i({}, t), {}, { service: e.target.value })),
                      children: [
                        (0, p.jsx)(`option`, {
                          value: ``,
                          children: `Select a service`,
                        }),
                        (0, p.jsx)(`option`, { children: `Graphic Design` }),
                        (0, p.jsx)(`option`, { children: `Website Design` }),
                        (0, p.jsx)(`option`, { children: `Video Editing` }),
                        (0, p.jsx)(`option`, { children: `AI Solutions` }),
                        (0, p.jsx)(`option`, { children: `Brand Identity` }),
                        (0, p.jsx)(`option`, { children: `Other` }),
                      ],
                    }),
                  ],
                }),
                (0, p.jsxs)(`div`, {
                  className: f.field,
                  children: [
                    (0, p.jsx)(`label`, { children: `Message` }),
                    (0, p.jsx)(`textarea`, {
                      placeholder: `Tell me about your project...`,
                      rows: 5,
                      value: t.message,
                      onChange: (e) =>
                        n((t) => i(i({}, t), {}, { message: e.target.value })),
                    }),
                  ],
                }),
                r === `success` &&
                  (0, p.jsxs)(`div`, {
                    className: f.success,
                    children: [
                      (0, p.jsx)(`i`, { className: `fas fa-check-circle` }),
                      ` Message sent! I'll get back to you soon.`,
                    ],
                  }),
                r === `error` &&
                  (0, p.jsxs)(`div`, {
                    className: f.error,
                    children: [
                      (0, p.jsx)(`i`, {
                        className: `fas fa-exclamation-circle`,
                      }),
                      ` Failed to send. Please try WhatsApp instead.`,
                    ],
                  }),
                (0, p.jsx)(`button`, {
                  type: `submit`,
                  className: `btn-primary`,
                  disabled: r === `sending`,
                  children:
                    r === `sending`
                      ? (0, p.jsxs)(p.Fragment, {
                          children: [
                            (0, p.jsx)(`i`, {
                              className: `fas fa-spinner fa-spin`,
                            }),
                            ` Sending…`,
                          ],
                        })
                      : (0, p.jsxs)(p.Fragment, {
                          children: [
                            (0, p.jsx)(`i`, {
                              className: `fas fa-paper-plane`,
                            }),
                            ` Send Message`,
                          ],
                        }),
                }),
              ],
            }),
          }),
        ],
      }),
      (0, p.jsx)(l, { page: `contact`, title: `Contact FAQ` }),
    ],
  });
}
export { m as default };
