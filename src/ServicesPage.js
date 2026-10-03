import "./ServicesPage.css";
import { t as e } from "./vendor.js";
import { w as t } from "./main.js";
import { t as n } from "./useReveal.js";
import { t as r } from "./FAQ.js";
import { t as i } from "./SEO.js";
var a = {
    page: `_page_evtzl_1`,
    inner: `_inner_evtzl_2`,
    hero: `_hero_evtzl_4`,
    heroBg: `_heroBg_evtzl_5`,
    heroInner: `_heroInner_evtzl_6`,
    heroTitle: `_heroTitle_evtzl_7`,
    heroSub: `_heroSub_evtzl_9`,
    heroCta: `_heroCta_evtzl_10`,
    servicesSection: `_servicesSection_evtzl_13`,
    servicesGrid: `_servicesGrid_evtzl_14`,
    serviceCard: `_serviceCard_evtzl_18`,
    serviceIcon: `_serviceIcon_evtzl_20`,
    serviceTitle: `_serviceTitle_evtzl_22`,
    serviceDesc: `_serviceDesc_evtzl_23`,
    serviceBtn: `_serviceBtn_evtzl_24`,
    processSection: `_processSection_evtzl_27`,
    processGrid: `_processGrid_evtzl_28`,
    step: `_step_evtzl_32`,
    stepNum: `_stepNum_evtzl_34`,
    stepIcon: `_stepIcon_evtzl_35`,
    stepTitle: `_stepTitle_evtzl_37`,
    stepDesc: `_stepDesc_evtzl_38`,
    stepArrow: `_stepArrow_evtzl_39`,
    toolsSection: `_toolsSection_evtzl_41`,
    toolsGrid: `_toolsGrid_evtzl_42`,
    toolItem: `_toolItem_evtzl_43`,
    toolImg: `_toolImg_evtzl_45`,
    toolEmoji: `_toolEmoji_evtzl_46`,
    toolName: `_toolName_evtzl_47`,
    ctaSection: `_ctaSection_evtzl_49`,
    ctaInner: `_ctaInner_evtzl_50`,
    ctaTitle: `_ctaTitle_evtzl_51`,
    ctaSub: `_ctaSub_evtzl_52`,
    ctaBtns: `_ctaBtns_evtzl_53`,
    ctaPrimary: `_ctaPrimary_evtzl_54`,
    ctaSecondary: `_ctaSecondary_evtzl_56`,
  },
  o = e(),
  s = [
    {
      icon: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/240px-Adobe_Illustrator_CC_icon.svg.png`,
      name: `Illustrator`,
    },
    {
      icon: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/240px-Adobe_Photoshop_CC_icon.svg.png`,
      name: `Photoshop`,
    },
    {
      icon: `https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Youtube_logo.png/320px-Youtube_logo.png`,
      name: `Video Editing`,
    },
    { name: `Canva Pro`, emoji: `🎨` },
    { name: `Figma`, emoji: `🖼️` },
    { name: `ChatGPT`, emoji: `🤖` },
    { name: `Midjourney`, emoji: `✨` },
    { name: `DALL-E`, emoji: `🎭` },
  ],
  c = [
    {
      num: `01`,
      icon: `fas fa-comments`,
      title: `Discovery & Brief`,
      desc: `We discuss your goals, target audience, brand vision, and project requirements in detail.`,
    },
    {
      num: `02`,
      icon: `fas fa-pencil-ruler`,
      title: `Design & Create`,
      desc: `I craft initial concepts and designs, applying creativity and expertise to bring your vision to life.`,
    },
    {
      num: `03`,
      icon: `fas fa-sync-alt`,
      title: `Review & Revise`,
      desc: `You review the work, share feedback, and I refine until you're completely satisfied.`,
    },
    {
      num: `04`,
      icon: `fas fa-check-circle`,
      title: `Deliver & Launch`,
      desc: `Final files delivered in all required formats, ready for immediate use or launch.`,
    },
  ];
function l({ item: e, idx: t }) {
  return (0, o.jsxs)(`div`, {
    ref: n(),
    className: `reveal ${a.serviceCard}`,
    style: { transitionDelay: `${t * 0.08}s` },
    children: [
      (0, o.jsx)(`div`, {
        className: a.serviceIcon,
        children: (0, o.jsx)(`i`, { className: e.icon || `fas fa-star` }),
      }),
      (0, o.jsx)(`h3`, { className: a.serviceTitle, children: e.title }),
      (0, o.jsx)(`p`, { className: a.serviceDesc, children: e.desc }),
      (0, o.jsxs)(`a`, {
        href: `/contact`,
        className: a.serviceBtn,
        children: [
          `Get a Quote `,
          (0, o.jsx)(`i`, { className: `fas fa-arrow-right` }),
        ],
      }),
    ],
  });
}
function u({ step: e, idx: t }) {
  return (0, o.jsxs)(`div`, {
    ref: n(),
    className: `reveal ${a.step}`,
    style: { transitionDelay: `${t * 0.1}s` },
    children: [
      (0, o.jsx)(`div`, { className: a.stepNum, children: e.num }),
      (0, o.jsx)(`div`, {
        className: a.stepIcon,
        children: (0, o.jsx)(`i`, { className: e.icon }),
      }),
      (0, o.jsx)(`h3`, { className: a.stepTitle, children: e.title }),
      (0, o.jsx)(`p`, { className: a.stepDesc, children: e.desc }),
      t < c.length - 1 &&
        (0, o.jsx)(`div`, {
          className: a.stepArrow,
          children: (0, o.jsx)(`i`, { className: `fas fa-arrow-right` }),
        }),
    ],
  });
}
function d() {
  let { data: e } = t(),
    d = (e.services || []).filter((e) => !e.hidden),
    f = n(),
    p = n(),
    m = n(),
    h = n();
  return (0, o.jsxs)(`main`, {
    className: a.page,
    id: `main-content`,
    role: `main`,
    children: [
      (0, o.jsx)(i, {
        title: `Services — Design, AI & Marketing`,
        description: `Professional services: Graphic Design, AI-Powered Design, Web Design, Video Editing, Brand Identity & Social Media Marketing. Hire Al-Amin for your project.`,
        url: `/services`,
        keywords: `graphic design services bangladesh, logo design service, brand identity service, web design service, AI design service, video editing service bangladesh`,
      }),
      (0, o.jsxs)(`section`, {
        className: a.hero,
        children: [
          (0, o.jsx)(`div`, { className: a.heroBg }),
          (0, o.jsx)(`div`, {
            className: a.heroInner,
            children: (0, o.jsxs)(`div`, {
              ref: f,
              className: `reveal`,
              children: [
                (0, o.jsx)(`div`, {
                  className: `section-label`,
                  children: `What I Offer`,
                }),
                (0, o.jsxs)(`h1`, {
                  className: a.heroTitle,
                  children: [
                    `Creative `,
                    (0, o.jsx)(`span`, { children: `Services` }),
                  ],
                }),
                (0, o.jsx)(`p`, {
                  className: a.heroSub,
                  children: `Professional design, AI-powered creativity, and strategic brand solutions — tailored to help your business stand out and succeed.`,
                }),
                (0, o.jsxs)(`a`, {
                  href: `/contact`,
                  className: a.heroCta,
                  children: [
                    (0, o.jsx)(`i`, { className: `fas fa-paper-plane` }),
                    ` Start a Project`,
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      (0, o.jsx)(`section`, {
        className: a.servicesSection,
        children: (0, o.jsxs)(`div`, {
          className: a.inner,
          children: [
            (0, o.jsxs)(`div`, {
              ref: p,
              className: `reveal`,
              children: [
                (0, o.jsx)(`div`, {
                  className: `section-label`,
                  children: `My Services`,
                }),
                (0, o.jsxs)(`h2`, {
                  className: `section-title`,
                  children: [
                    `What I `,
                    (0, o.jsx)(`span`, { children: `Do Best` }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)(`div`, {
              className: a.servicesGrid,
              children: d.map((e, t) =>
                (0, o.jsx)(l, { item: e, idx: t }, e.id || t),
              ),
            }),
          ],
        }),
      }),
      (0, o.jsx)(`section`, {
        className: a.processSection,
        children: (0, o.jsxs)(`div`, {
          className: a.inner,
          children: [
            (0, o.jsxs)(`div`, {
              ref: m,
              className: `reveal`,
              children: [
                (0, o.jsx)(`div`, {
                  className: `section-label`,
                  children: `How I Work`,
                }),
                (0, o.jsxs)(`h2`, {
                  className: `section-title`,
                  children: [
                    `Work `,
                    (0, o.jsx)(`span`, { children: `Process` }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)(`div`, {
              className: a.processGrid,
              children: c.map((e, t) => (0, o.jsx)(u, { step: e, idx: t }, t)),
            }),
          ],
        }),
      }),
      (0, o.jsx)(`section`, {
        className: a.toolsSection,
        children: (0, o.jsxs)(`div`, {
          className: a.inner,
          children: [
            (0, o.jsxs)(`div`, {
              ref: h,
              className: `reveal`,
              children: [
                (0, o.jsx)(`div`, {
                  className: `section-label`,
                  children: `My Toolkit`,
                }),
                (0, o.jsxs)(`h2`, {
                  className: `section-title`,
                  children: [
                    `Tools I `,
                    (0, o.jsx)(`span`, { children: `Use` }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)(`div`, {
              className: a.toolsGrid,
              children: s.map((e, t) =>
                (0, o.jsxs)(
                  `div`,
                  {
                    className: a.toolItem,
                    children: [
                      e.icon
                        ? (0, o.jsx)(`img`, {
                            loading: `lazy`,
                            src: e.icon,
                            alt: e.name,
                            className: a.toolImg,
                          })
                        : (0, o.jsx)(`span`, {
                            className: a.toolEmoji,
                            children: e.emoji,
                          }),
                      (0, o.jsx)(`span`, {
                        className: a.toolName,
                        children: e.name,
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
          ],
        }),
      }),
      (0, o.jsx)(`section`, {
        className: a.ctaSection,
        children: (0, o.jsxs)(`div`, {
          className: a.ctaInner,
          children: [
            (0, o.jsx)(`h2`, {
              className: a.ctaTitle,
              children: `Let's create something amazing`,
            }),
            (0, o.jsx)(`p`, {
              className: a.ctaSub,
              children: `Ready to take your brand to the next level? Get in touch today.`,
            }),
            (0, o.jsxs)(`div`, {
              className: a.ctaBtns,
              children: [
                (0, o.jsxs)(`a`, {
                  href: `/contact`,
                  className: a.ctaPrimary,
                  children: [
                    (0, o.jsx)(`i`, { className: `fas fa-envelope` }),
                    ` Contact Me`,
                  ],
                }),
                (0, o.jsxs)(`a`, {
                  href: `/portfolio`,
                  className: a.ctaSecondary,
                  children: [
                    (0, o.jsx)(`i`, { className: `fas fa-eye` }),
                    ` View Portfolio`,
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, o.jsx)(r, { page: `services`, title: `Services FAQ` }),
    ],
  });
}
export { d as default };
