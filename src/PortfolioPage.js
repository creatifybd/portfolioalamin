import "./PortfolioPage.css";
import { a as e } from "./rolldown-runtime.js";
import { f as t, t as n } from "./vendor.js";
import { w as r } from "./main.js";
import { t as i } from "./useReveal.js";
import { t as a } from "./SEO.js";
var o = e(t(), 1),
  s = {
    page: `_page_1pdid_2`,
    hero: `_hero_1pdid_5`,
    heroBg: `_heroBg_1pdid_10`,
    heroInner: `_heroInner_1pdid_16`,
    heroTitle: `_heroTitle_1pdid_17`,
    heroSub: `_heroSub_1pdid_22`,
    heroStats: `_heroStats_1pdid_25`,
    heroStat: `_heroStat_1pdid_25`,
    heroStatNum: `_heroStatNum_1pdid_38`,
    heroStatLabel: `_heroStatLabel_1pdid_39`,
    searchWrap: `_searchWrap_1pdid_42`,
    search: `_search_1pdid_42`,
    filterBar: `_filterBar_1pdid_60`,
    filterInner: `_filterInner_1pdid_65`,
    filterBtn: `_filterBtn_1pdid_74`,
    filterActive: `_filterActive_1pdid_85`,
    filterCount: `_filterCount_1pdid_90`,
    content: `_content_1pdid_97`,
    featuredSection: `_featuredSection_1pdid_100`,
    sectionHead: `_sectionHead_1pdid_101`,
    sectionHeadTitle: `_sectionHeadTitle_1pdid_102`,
    featuredGrid: `_featuredGrid_1pdid_108`,
    featCard: `_featCard_1pdid_115`,
    featImgWrap: `_featImgWrap_1pdid_122`,
    featOverlay: `_featOverlay_1pdid_124`,
    featViewBtn: `_featViewBtn_1pdid_131`,
    featLiveBtn: `_featLiveBtn_1pdid_140`,
    featBadge: `_featBadge_1pdid_143`,
    featImgCount: `_featImgCount_1pdid_149`,
    featInfo: `_featInfo_1pdid_155`,
    featTitle: `_featTitle_1pdid_156`,
    featDesc: `_featDesc_1pdid_157`,
    resultBar: `_resultBar_1pdid_160`,
    resultCount: `_resultCount_1pdid_161`,
    grid: `_grid_1pdid_164`,
    chrome: `_chrome_1pdid_167`,
    dots: `_dots_1pdid_168`,
    urlBar: `_urlBar_1pdid_173`,
    arBadge: `_arBadge_1pdid_175`,
    card: `_card_1pdid_178`,
    imgWrap: `_imgWrap_1pdid_187`,
    slideshow: `_slideshow_1pdid_190`,
    slide: `_slide_1pdid_190`,
    slideBg: `_slideBg_1pdid_192`,
    slideImg: `_slideImg_1pdid_193`,
    fullBtn: `_fullBtn_1pdid_195`,
    slideBtn: `_slideBtn_1pdid_198`,
    slidePrev: `_slidePrev_1pdid_201`,
    slideNext: `_slideNext_1pdid_202`,
    slideDots: `_slideDots_1pdid_203`,
    dot: `_dot_1pdid_168`,
    dotActive: `_dotActive_1pdid_205`,
    slideCount: `_slideCount_1pdid_206`,
    overlay: `_overlay_1pdid_209`,
    overlayBtns: `_overlayBtns_1pdid_211`,
    overlayBtn: `_overlayBtn_1pdid_211`,
    catBadge: `_catBadge_1pdid_216`,
    imgCountBadge: `_imgCountBadge_1pdid_217`,
    cardInfo: `_cardInfo_1pdid_219`,
    cardTitle: `_cardTitle_1pdid_220`,
    noImg: `_noImg_1pdid_223`,
    empty: `_empty_1pdid_226`,
    emptyReset: `_emptyReset_1pdid_230`,
    modal: `_modal_1pdid_233`,
    fadeIn: `_fadeIn_1pdid_1`,
    modalInner: `_modalInner_1pdid_236`,
    slideUp: `_slideUp_1pdid_1`,
    modalClose: `_modalClose_1pdid_239`,
    modalPrev: `_modalPrev_1pdid_242`,
    modalNext: `_modalNext_1pdid_242`,
    modalBody: `_modalBody_1pdid_247`,
    modalImgWrap: `_modalImgWrap_1pdid_248`,
    modalInfo: `_modalInfo_1pdid_251`,
    modalCatBadge: `_modalCatBadge_1pdid_253`,
    modalTitle: `_modalTitle_1pdid_254`,
    modalDesc: `_modalDesc_1pdid_255`,
    modalTags: `_modalTags_1pdid_257`,
    modalTag: `_modalTag_1pdid_257`,
    modalActions: `_modalActions_1pdid_260`,
    modalBtn: `_modalBtn_1pdid_261`,
    modalBtnRed: `_modalBtnRed_1pdid_263`,
    modalBtnGreen: `_modalBtnGreen_1pdid_265`,
    modalNav: `_modalNav_1pdid_268`,
    modalNavBtn: `_modalNavBtn_1pdid_269`,
    modalNavBtnNext: `_modalNavBtnNext_1pdid_271`,
    lightbox: `_lightbox_1pdid_274`,
    lbClose: `_lbClose_1pdid_275`,
    lbContent: `_lbContent_1pdid_277`,
    lbImg: `_lbImg_1pdid_278`,
    lbIn: `_lbIn_1pdid_1`,
    lbNav: `_lbNav_1pdid_280`,
    lbPrev: `_lbPrev_1pdid_282`,
    lbNext: `_lbNext_1pdid_283`,
    lbCounter: `_lbCounter_1pdid_284`,
    lbVideo: `_lbVideo_1pdid_285`,
  },
  c = n(),
  l = [
    { key: `all`, label: `All Work`, icon: `fas fa-th` },
    { key: `graphic`, label: `Graphic Design`, icon: `fas fa-palette` },
    { key: `web`, label: `Web Design`, icon: `fas fa-laptop-code` },
    { key: `branding`, label: `Branding`, icon: `fas fa-copyright` },
    { key: `video`, label: `Video`, icon: `fas fa-film` },
    { key: `ai`, label: `AI Projects`, icon: `fas fa-robot` },
  ],
  u = {
    graphic: `Graphic Design`,
    web: `Web Design`,
    video: `Video`,
    ai: `AI Projects`,
    branding: `Branding`,
  },
  d = {
    graphic: `#22c55e`,
    web: `#3b82f6`,
    branding: `#f59e0b`,
    video: `#ef4444`,
    ai: `#8b5cf6`,
    all: `#22c55e`,
  };
function f(e) {
  if (!e) return ``;
  let t = e.match(/(?:youtu\.be\/|[?&]v=|shorts\/)([A-Za-z0-9_-]{11})/);
  if (t) return `https://www.youtube.com/embed/${t[1]}`;
  let n = e.match(/vimeo\.com\/(\d+)/);
  return n ? `https://player.vimeo.com/video/${n[1]}` : e;
}
function p({ images: e, startIndex: t, onClose: n }) {
  let [r, i] = (0, o.useState)(t);
  ((0, o.useRef)(null), (0, o.useRef)(null));
  let a = e.length;
  return (
    (0, o.useEffect)(() => {
      let e = (e) => {
        (e.key === `Escape` && n(),
          e.key === `ArrowLeft` && i((e) => (e - 1 + a) % a),
          e.key === `ArrowRight` && i((e) => (e + 1) % a));
      };
      return (
        document.addEventListener(`keydown`, e),
        () => document.removeEventListener(`keydown`, e)
      );
    }, [a]),
    (0, c.jsxs)(`div`, {
      className: s.lightbox,
      onClick: (e) => e.target === e.currentTarget && n(),
      children: [
        (0, c.jsx)(`button`, {
          className: s.lbClose,
          onClick: n,
          children: (0, c.jsx)(`i`, { className: `fas fa-times` }),
        }),
        (0, c.jsx)(`div`, {
          className: s.lbContent,
          children: (0, c.jsx)(
            `img`,
            { loading: `lazy`, src: e[r], alt: ``, className: s.lbImg },
            r,
          ),
        }),
        a > 1 &&
          (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)(`button`, {
                className: `${s.lbNav} ${s.lbPrev}`,
                onClick: () => i((e) => (e - 1 + a) % a),
                children: (0, c.jsx)(`i`, { className: `fas fa-chevron-left` }),
              }),
              (0, c.jsx)(`button`, {
                className: `${s.lbNav} ${s.lbNext}`,
                onClick: () => i((e) => (e + 1) % a),
                children: (0, c.jsx)(`i`, {
                  className: `fas fa-chevron-right`,
                }),
              }),
              (0, c.jsxs)(`div`, {
                className: s.lbCounter,
                children: [r + 1, ` / `, a],
              }),
            ],
          }),
      ],
    })
  );
}
function m({ url: e, onClose: t }) {
  let n = f(e),
    r = n.includes(`?`) ? `${n}&autoplay=1` : `${n}?autoplay=1`;
  return (0, c.jsxs)(`div`, {
    className: s.lightbox,
    onClick: (e) => e.target === e.currentTarget && t(),
    children: [
      (0, c.jsx)(`button`, {
        className: s.lbClose,
        onClick: t,
        children: (0, c.jsx)(`i`, { className: `fas fa-times` }),
      }),
      (0, c.jsx)(`div`, {
        className: s.lbVideo,
        children: (0, c.jsx)(`iframe`, {
          src: r,
          allowFullScreen: !0,
          allow: `autoplay; fullscreen`,
          style: { width: `100%`, height: `100%`, border: `none` },
        }),
      }),
    ],
  });
}
function h({ images: e, onFullscreen: t }) {
  let [n, r] = (0, o.useState)(0),
    [i, a] = (0, o.useState)(null),
    l = (0, o.useRef)(null),
    u = (0, o.useRef)(null),
    d = e.length;
  function f(e) {
    e !== n &&
      (a(n),
      r(e),
      clearTimeout(u.current),
      (u.current = setTimeout(() => a(null), 750)));
  }
  let p = (0, o.useCallback)(() => {
    (clearInterval(l.current),
      d > 1 &&
        (l.current = setInterval(() => {
          r((e) => {
            let t = (e + 1) % d;
            return (
              a(e),
              clearTimeout(u.current),
              (u.current = setTimeout(() => a(null), 750)),
              t
            );
          });
        }, 3500)));
  }, [d]);
  (0, o.useEffect)(
    () => (
      p(),
      () => {
        (clearInterval(l.current), clearTimeout(u.current));
      }
    ),
    [p],
  );
  function m(e, t) {
    (t.stopPropagation(), clearInterval(l.current), f((n + e + d) % d), p());
  }
  return (0, c.jsxs)(`div`, {
    className: s.slideshow,
    children: [
      e.map((e, t) =>
        (0, c.jsxs)(
          `div`,
          {
            className: s.slide,
            style: {
              opacity: +(t === n),
              zIndex: t === n ? 2 : +(t === i),
              transform: t === n ? `scale(1)` : `scale(1.04)`,
              transition:
                t === n || t === i
                  ? `opacity 0.7s ease, transform 0.7s ease`
                  : `none`,
            },
            children: [
              (0, c.jsx)(`div`, {
                className: s.slideBg,
                style: { backgroundImage: `url(${e})` },
              }),
              (0, c.jsx)(`img`, {
                src: e,
                alt: `Portfolio project by Al-Amin Bin Ashad Ali — Graphic Designer Bangladesh`,
                className: s.slideImg,
                loading: `lazy`,
              }),
            ],
          },
          t,
        ),
      ),
      (0, c.jsx)(`button`, {
        className: s.fullBtn,
        onClick: (e) => {
          (e.stopPropagation(), t(n));
        },
        children: (0, c.jsx)(`i`, { className: `fas fa-expand-alt` }),
      }),
      d > 1 &&
        (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(`button`, {
              className: `${s.slideBtn} ${s.slidePrev}`,
              onClick: (e) => m(-1, e),
              children: (0, c.jsx)(`i`, { className: `fas fa-chevron-left` }),
            }),
            (0, c.jsx)(`button`, {
              className: `${s.slideBtn} ${s.slideNext}`,
              onClick: (e) => m(1, e),
              children: (0, c.jsx)(`i`, { className: `fas fa-chevron-right` }),
            }),
            (0, c.jsx)(`div`, {
              className: s.slideDots,
              children: e.map((e, t) =>
                (0, c.jsx)(
                  `button`,
                  {
                    className: `${s.dot} ${t === n ? s.dotActive : ``}`,
                    onClick: (e) => {
                      (e.stopPropagation(),
                        clearInterval(l.current),
                        f(t),
                        p());
                    },
                  },
                  t,
                ),
              ),
            }),
            (0, c.jsxs)(`div`, {
              className: s.slideCount,
              children: [n + 1, `/`, d],
            }),
          ],
        }),
    ],
  });
}
function g({
  item: e,
  onClose: t,
  onPrev: n,
  onNext: r,
  hasPrev: i,
  hasNext: a,
}) {
  let l = [e.imgUrl, ...(e.images || [])].filter(Boolean),
    [f, g] = (0, o.useState)(null),
    [_, v] = (0, o.useState)(!1),
    y = d[e.cat] || `#22c55e`;
  return (
    (0, o.useEffect)(() => {
      let e = (e) => {
        (e.key === `Escape` && t(),
          e.key === `ArrowLeft` && i && n(),
          e.key === `ArrowRight` && a && r());
      };
      return (
        document.addEventListener(`keydown`, e),
        () => document.removeEventListener(`keydown`, e)
      );
    }, [i, a]),
    (0, c.jsxs)(c.Fragment, {
      children: [
        (0, c.jsx)(`div`, {
          className: s.modal,
          onClick: (e) => e.target === e.currentTarget && t(),
          children: (0, c.jsxs)(`div`, {
            className: s.modalInner,
            children: [
              (0, c.jsx)(`button`, {
                className: s.modalClose,
                onClick: t,
                children: (0, c.jsx)(`i`, { className: `fas fa-times` }),
              }),
              i &&
                (0, c.jsx)(`button`, {
                  className: s.modalPrev,
                  onClick: n,
                  children: (0, c.jsx)(`i`, {
                    className: `fas fa-chevron-left`,
                  }),
                }),
              a &&
                (0, c.jsx)(`button`, {
                  className: s.modalNext,
                  onClick: r,
                  children: (0, c.jsx)(`i`, {
                    className: `fas fa-chevron-right`,
                  }),
                }),
              (0, c.jsxs)(`div`, {
                className: s.modalBody,
                children: [
                  (0, c.jsx)(`div`, {
                    className: s.modalImgWrap,
                    children:
                      l.length > 0
                        ? (0, c.jsx)(h, {
                            images: l,
                            onFullscreen: (e) => g(e),
                          })
                        : (0, c.jsx)(`div`, {
                            className: s.noImg,
                            children: (0, c.jsx)(`i`, {
                              className: `fas fa-image`,
                            }),
                          }),
                  }),
                  (0, c.jsxs)(`div`, {
                    className: s.modalInfo,
                    children: [
                      (0, c.jsxs)(`div`, {
                        className: s.modalCatBadge,
                        style: {
                          background: y + `18`,
                          color: y,
                          borderColor: y + `30`,
                        },
                        children: [
                          (0, c.jsx)(`i`, { className: `fas fa-tag` }),
                          ` `,
                          u[e.cat] || e.cat,
                        ],
                      }),
                      (0, c.jsx)(`h2`, {
                        className: s.modalTitle,
                        children: e.title,
                      }),
                      e.desc &&
                        (0, c.jsx)(`p`, {
                          className: s.modalDesc,
                          children: e.desc,
                        }),
                      Array.isArray(e.tags) &&
                        e.tags.length > 0 &&
                        (0, c.jsx)(`div`, {
                          className: s.modalTags,
                          children: e.tags.map((e, t) =>
                            (0, c.jsx)(
                              `span`,
                              { className: s.modalTag, children: e },
                              t,
                            ),
                          ),
                        }),
                      (0, c.jsxs)(`div`, {
                        className: s.modalActions,
                        children: [
                          l.length > 0 &&
                            (0, c.jsxs)(`button`, {
                              className: s.modalBtn,
                              onClick: () => g(0),
                              children: [
                                (0, c.jsx)(`i`, {
                                  className: `fas fa-expand-alt`,
                                }),
                                ` Full Screen`,
                              ],
                            }),
                          e.videoUrl &&
                            (0, c.jsxs)(`button`, {
                              className: `${s.modalBtn} ${s.modalBtnRed}`,
                              onClick: () => v(!0),
                              children: [
                                (0, c.jsx)(`i`, { className: `fas fa-play` }),
                                ` Watch Video`,
                              ],
                            }),
                          e.siteUrl &&
                            e.showLiveBtn !== !1 &&
                            (0, c.jsxs)(`a`, {
                              href: e.siteUrl,
                              target: `_blank`,
                              rel: `noreferrer`,
                              className: `${s.modalBtn} ${s.modalBtnGreen}`,
                              children: [
                                (0, c.jsx)(`i`, {
                                  className: `fas fa-external-link-alt`,
                                }),
                                ` View Live`,
                              ],
                            }),
                        ],
                      }),
                      (0, c.jsxs)(`div`, {
                        className: s.modalNav,
                        children: [
                          i &&
                            (0, c.jsxs)(`button`, {
                              className: s.modalNavBtn,
                              onClick: n,
                              children: [
                                (0, c.jsx)(`i`, {
                                  className: `fas fa-arrow-left`,
                                }),
                                ` Previous`,
                              ],
                            }),
                          a &&
                            (0, c.jsxs)(`button`, {
                              className: `${s.modalNavBtn} ${s.modalNavBtnNext}`,
                              onClick: r,
                              children: [
                                `Next `,
                                (0, c.jsx)(`i`, {
                                  className: `fas fa-arrow-right`,
                                }),
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
        }),
        f !== null &&
          (0, c.jsx)(p, { images: l, startIndex: f, onClose: () => g(null) }),
        _ && (0, c.jsx)(m, { url: e.videoUrl, onClose: () => v(!1) }),
      ],
    })
  );
}
function _({ item: e, onClick: t }) {
  let n = i(),
    r = [e.imgUrl, ...(e.images || [])].filter(Boolean),
    [a, l] = (0, o.useState)(null),
    f = d[e.cat] || `#22c55e`;
  return (0, c.jsxs)(c.Fragment, {
    children: [
      (0, c.jsxs)(`div`, {
        ref: n,
        className: `reveal ${s.featCard}`,
        onClick: () => t(e),
        children: [
          (0, c.jsxs)(`div`, {
            className: s.featImgWrap,
            children: [
              r.length > 0
                ? (0, c.jsx)(h, {
                    images: r,
                    onFullscreen: (e) => {
                      l(e);
                    },
                  })
                : (0, c.jsx)(`div`, {
                    className: s.noImg,
                    children: (0, c.jsx)(`i`, { className: `fas fa-image` }),
                  }),
              (0, c.jsxs)(`div`, {
                className: s.featOverlay,
                children: [
                  (0, c.jsxs)(`button`, {
                    className: s.featViewBtn,
                    onClick: (n) => {
                      (n.stopPropagation(), t(e));
                    },
                    children: [
                      (0, c.jsx)(`i`, { className: `fas fa-eye` }),
                      ` View Project`,
                    ],
                  }),
                  e.siteUrl &&
                    e.showLiveBtn !== !1 &&
                    (0, c.jsxs)(`a`, {
                      href: e.siteUrl,
                      target: `_blank`,
                      rel: `noreferrer`,
                      className: `${s.featViewBtn} ${s.featLiveBtn}`,
                      onClick: (e) => e.stopPropagation(),
                      children: [
                        (0, c.jsx)(`i`, {
                          className: `fas fa-external-link-alt`,
                        }),
                        ` Live`,
                      ],
                    }),
                ],
              }),
              (0, c.jsx)(`div`, {
                className: s.featBadge,
                style: { background: f },
                children: u[e.cat] || e.cat,
              }),
              r.length > 1 &&
                (0, c.jsxs)(`div`, {
                  className: s.featImgCount,
                  children: [
                    (0, c.jsx)(`i`, { className: `fas fa-images` }),
                    ` `,
                    r.length,
                  ],
                }),
            ],
          }),
          (0, c.jsxs)(`div`, {
            className: s.featInfo,
            children: [
              (0, c.jsx)(`h3`, { className: s.featTitle, children: e.title }),
              e.desc &&
                (0, c.jsx)(`p`, { className: s.featDesc, children: e.desc }),
            ],
          }),
        ],
      }),
      a !== null &&
        (0, c.jsx)(p, { images: r, startIndex: a, onClose: () => l(null) }),
    ],
  });
}
function v({ item: e, onClick: t }) {
  let n = i(),
    [r, a] = (0, o.useState)(null),
    l = [e.imgUrl, ...(e.images || [])].filter(Boolean),
    f = d[e.cat] || `#22c55e`;
  return (0, c.jsxs)(c.Fragment, {
    children: [
      (0, c.jsxs)(`div`, {
        ref: n,
        className: `reveal ${s.card}`,
        onClick: () => t(e),
        children: [
          (0, c.jsxs)(`div`, {
            className: s.chrome,
            children: [
              (0, c.jsxs)(`div`, {
                className: s.dots,
                children: [
                  (0, c.jsx)(`span`, {}),
                  (0, c.jsx)(`span`, {}),
                  (0, c.jsx)(`span`, {}),
                ],
              }),
              (0, c.jsxs)(`div`, {
                className: s.urlBar,
                children: [
                  (0, c.jsx)(`i`, {
                    className: `fas fa-tag`,
                    style: { color: f },
                  }),
                  (0, c.jsx)(`span`, {
                    style: { color: f, fontWeight: 600 },
                    children: u[e.cat] || e.cat,
                  }),
                ],
              }),
              l.length > 1 &&
                (0, c.jsxs)(`div`, {
                  className: s.arBadge,
                  children: [
                    (0, c.jsx)(`i`, {
                      className: `fas fa-images`,
                      style: { marginRight: 3 },
                    }),
                    l.length,
                  ],
                }),
            ],
          }),
          (0, c.jsxs)(`div`, {
            className: s.imgWrap,
            children: [
              l.length > 0
                ? (0, c.jsx)(h, { images: l, onFullscreen: (e) => a(e) })
                : (0, c.jsx)(`div`, {
                    className: s.noImg,
                    children: (0, c.jsx)(`i`, { className: `fas fa-image` }),
                  }),
              (0, c.jsx)(`div`, {
                className: s.overlay,
                children: (0, c.jsxs)(`div`, {
                  className: s.overlayBtns,
                  children: [
                    (0, c.jsxs)(`button`, {
                      className: s.overlayBtn,
                      onClick: (n) => {
                        (n.stopPropagation(), t(e));
                      },
                      children: [
                        (0, c.jsx)(`i`, { className: `fas fa-eye` }),
                        ` View`,
                      ],
                    }),
                    e.siteUrl &&
                      e.showLiveBtn !== !1 &&
                      (0, c.jsxs)(`a`, {
                        href: e.siteUrl,
                        target: `_blank`,
                        rel: `noreferrer`,
                        className: s.overlayBtn,
                        onClick: (e) => e.stopPropagation(),
                        children: [
                          (0, c.jsx)(`i`, {
                            className: `fas fa-external-link-alt`,
                          }),
                          ` Live`,
                        ],
                      }),
                  ],
                }),
              }),
            ],
          }),
          (0, c.jsx)(`div`, {
            className: s.cardInfo,
            children: (0, c.jsx)(`h3`, {
              className: s.cardTitle,
              children: e.title,
            }),
          }),
        ],
      }),
      r !== null &&
        (0, c.jsx)(p, { images: l, startIndex: r, onClose: () => a(null) }),
    ],
  });
}
function y() {
  let { data: e } = r(),
    [t, n] = (0, o.useState)(`all`),
    [f, p] = (0, o.useState)(``),
    [m, h] = (0, o.useState)(null),
    y = i(),
    b = (e.portfolio || []).filter((e) => !e.hidden),
    x = b.filter((e) => e.featured),
    S = b.filter(
      (e) =>
        (t === `all` || e.cat === t) &&
        (f === `` || e.title.toLowerCase().includes(f.toLowerCase())),
    ),
    C = m ? S.findIndex((e) => e.id === m.id) : -1;
  function w(e) {
    (h(e),
      (document.body.style.overflow = `hidden`),
      window.gtag &&
        window.gtag(`event`, `portfolio_view`, { event_label: e.title }));
  }
  function T() {
    (h(null), (document.body.style.overflow = ``));
  }
  function E() {
    C > 0 && h(S[C - 1]);
  }
  function D() {
    C < S.length - 1 && h(S[C + 1]);
  }
  let O = {};
  return (
    l.forEach((e) => {
      O[e.key] =
        e.key === `all` ? b.length : b.filter((t) => t.cat === e.key).length;
    }),
    (0, c.jsxs)(`main`, {
      className: s.page,
      id: `main-content`,
      role: `main`,
      children: [
        (0, c.jsx)(a, {
          title: `Portfolio — 200+ Graphic Design, Branding & AI Projects`,
          description: `Explore Al-Amin Bin Ashad Ali's portfolio of 200+ creative projects — logo design, brand identity, web design, AI art, social media graphics & video editing from Bangladesh.`,
          url: `/portfolio`,
          keywords: `Al-Amin portfolio, graphic design portfolio Bangladesh, logo design portfolio, brand identity portfolio, AI art portfolio Bangladesh, web design portfolio, social media design portfolio`,
          type: `website`,
        }),
        (0, c.jsxs)(`section`, {
          className: s.hero,
          children: [
            (0, c.jsx)(`div`, { className: s.heroBg }),
            (0, c.jsxs)(`div`, {
              className: s.heroInner,
              children: [
                (0, c.jsxs)(`div`, {
                  ref: y,
                  className: `reveal`,
                  children: [
                    (0, c.jsx)(`div`, {
                      className: `section-label`,
                      children: `Creative Work`,
                    }),
                    (0, c.jsxs)(`h1`, {
                      className: s.heroTitle,
                      children: [
                        `My `,
                        (0, c.jsx)(`span`, { children: `Portfolio` }),
                      ],
                    }),
                    (0, c.jsxs)(`p`, {
                      className: s.heroSub,
                      children: [
                        b.length,
                        ` projects spanning Graphic Design, Branding, Web Design, AI & Video Production`,
                      ],
                    }),
                  ],
                }),
                (0, c.jsx)(`div`, {
                  className: s.heroStats,
                  children: l
                    .filter((e) => e.key !== `all` && O[e.key] > 0)
                    .map((e) =>
                      (0, c.jsxs)(
                        `div`,
                        {
                          className: s.heroStat,
                          style: { "--stat-color": d[e.key] },
                          onClick: () => n(e.key),
                          children: [
                            (0, c.jsx)(`i`, { className: e.icon }),
                            (0, c.jsx)(`span`, {
                              className: s.heroStatNum,
                              children: O[e.key],
                            }),
                            (0, c.jsx)(`span`, {
                              className: s.heroStatLabel,
                              children: e.label,
                            }),
                          ],
                        },
                        e.key,
                      ),
                    ),
                }),
                (0, c.jsx)(`div`, {
                  className: s.searchWrap,
                  children: (0, c.jsxs)(`div`, {
                    className: s.search,
                    children: [
                      (0, c.jsx)(`i`, { className: `fas fa-search` }),
                      (0, c.jsx)(`input`, {
                        type: `text`,
                        placeholder: `Search projects by name…`,
                        value: f,
                        onChange: (e) => p(e.target.value),
                      }),
                      f &&
                        (0, c.jsx)(`button`, {
                          onClick: () => p(``),
                          children: (0, c.jsx)(`i`, {
                            className: `fas fa-times`,
                          }),
                        }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
        (0, c.jsx)(`div`, {
          className: s.filterBar,
          children: (0, c.jsx)(`div`, {
            className: s.filterInner,
            children: l.map((e) =>
              (0, c.jsxs)(
                `button`,
                {
                  className: `${s.filterBtn} ${t === e.key ? s.filterActive : ``}`,
                  style: t === e.key ? { "--btn-color": d[e.key] } : {},
                  onClick: () => {
                    (n(e.key), p(``));
                  },
                  children: [
                    (0, c.jsx)(`i`, { className: e.icon }),
                    (0, c.jsx)(`span`, { children: e.label }),
                    (0, c.jsx)(`span`, {
                      className: s.filterCount,
                      children: O[e.key],
                    }),
                  ],
                },
                e.key,
              ),
            ),
          }),
        }),
        (0, c.jsxs)(`div`, {
          className: s.content,
          children: [
            x.length > 0 &&
              t === `all` &&
              f === `` &&
              (0, c.jsxs)(`div`, {
                className: s.featuredSection,
                children: [
                  (0, c.jsx)(`div`, {
                    className: s.sectionHead,
                    children: (0, c.jsxs)(`h2`, {
                      className: s.sectionHeadTitle,
                      children: [
                        (0, c.jsx)(`i`, { className: `fas fa-star` }),
                        ` Featured Projects`,
                      ],
                    }),
                  }),
                  (0, c.jsx)(`div`, {
                    className: s.featuredGrid,
                    children: x
                      .slice(0, 3)
                      .map((e) => (0, c.jsx)(_, { item: e, onClick: w }, e.id)),
                  }),
                ],
              }),
            (0, c.jsx)(`div`, {
              className: s.resultBar,
              children: (0, c.jsx)(`span`, {
                className: s.resultCount,
                children: f
                  ? `"${f}" — ${S.length} result${S.length === 1 ? `` : `s`}`
                  : t === `all`
                    ? `All ${S.length} Projects`
                    : `${u[t]} — ${S.length} Project${S.length === 1 ? `` : `s`}`,
              }),
            }),
            S.length === 0
              ? (0, c.jsxs)(`div`, {
                  className: s.empty,
                  children: [
                    (0, c.jsx)(`i`, { className: `fas fa-search` }),
                    (0, c.jsx)(`h3`, { children: `No projects found` }),
                    (0, c.jsx)(`p`, {
                      children: `Try a different search or category`,
                    }),
                    (0, c.jsx)(`button`, {
                      className: s.emptyReset,
                      onClick: () => {
                        (p(``), n(`all`));
                      },
                      children: `Reset Filters`,
                    }),
                  ],
                })
              : (0, c.jsx)(`div`, {
                  className: s.grid,
                  children: S.map((e) =>
                    (0, c.jsx)(v, { item: e, onClick: w }, e.id),
                  ),
                }),
          ],
        }),
        m &&
          (0, c.jsx)(g, {
            item: m,
            onClose: T,
            onPrev: E,
            onNext: D,
            hasPrev: C > 0,
            hasNext: C < S.length - 1,
          }),
      ],
    })
  );
}
export { y as default };
