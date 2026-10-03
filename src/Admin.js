import "./Admin.css";
import { a as e } from "./rolldown-runtime.js";
import { f as t, t as n } from "./vendor.js";
import { C as r, S as i, b as a, d as o, h as s, x as c } from "./firebase.js";
import {
  A as l,
  D as u,
  E as d,
  M as f,
  T as p,
  k as m,
  w as h,
} from "./main.js";
var g = e(t(), 1),
  _ = {
    wrap: `_wrap_1fss2_1`,
    loading: `_loading_1fss2_2`,
    header: `_header_1fss2_3`,
    badge: `_badge_1fss2_5`,
    sub: `_sub_1fss2_6`,
    empty: `_empty_1fss2_8`,
    layout: `_layout_1fss2_12`,
    list: `_list_1fss2_15`,
    msgItem: `_msgItem_1fss2_16`,
    active: `_active_1fss2_18`,
    unread: `_unread_1fss2_19`,
    msgAvatar: `_msgAvatar_1fss2_20`,
    msgPreview: `_msgPreview_1fss2_21`,
    msgTop: `_msgTop_1fss2_22`,
    msgName: `_msgName_1fss2_23`,
    msgTime: `_msgTime_1fss2_24`,
    msgSub: `_msgSub_1fss2_25`,
    msgSnippet: `_msgSnippet_1fss2_26`,
    unreadDot: `_unreadDot_1fss2_27`,
    delBtn: `_delBtn_1fss2_28`,
    detail: `_detail_1fss2_33`,
    detailHeader: `_detailHeader_1fss2_34`,
    detailAvatar: `_detailAvatar_1fss2_35`,
    detailName: `_detailName_1fss2_36`,
    detailMeta: `_detailMeta_1fss2_37`,
    emailLink: `_emailLink_1fss2_38`,
    serviceTag: `_serviceTag_1fss2_40`,
    detailBody: `_detailBody_1fss2_41`,
    detailActions: `_detailActions_1fss2_42`,
    replyBtn: `_replyBtn_1fss2_43`,
    delDetailBtn: `_delDetailBtn_1fss2_45`,
    noSelect: `_noSelect_1fss2_48`,
  },
  v = n();
function y(e) {
  if (!e) return ``;
  let t = e.toDate ? e.toDate() : new Date(e),
    n = Date.now() - t.getTime(),
    r = Math.floor(n / 6e4);
  if (r < 1) return `Just now`;
  if (r < 60) return `${r}m ago`;
  let i = Math.floor(r / 60);
  return i < 24
    ? `${i}h ago`
    : t.toLocaleDateString(`en-GB`, {
        day: `numeric`,
        month: `short`,
        year: `numeric`,
      });
}
function ee() {
  let [e, t] = (0, g.useState)([]),
    [n, r] = (0, g.useState)(null),
    [i, a] = (0, g.useState)(!0);
  (0, g.useEffect)(
    () =>
      u((e) => {
        (t(e), a(!1));
      }),
    [],
  );
  let o = e.filter((e) => !e.read).length;
  function s(e) {
    return f.apply(this, arguments);
  }
  function f() {
    return (
      (f = c(function* (e) {
        (r(e), e.read || (yield l(e.id)));
      })),
      f.apply(this, arguments)
    );
  }
  function p(e, t) {
    return m.apply(this, arguments);
  }
  function m() {
    return (
      (m = c(function* (e, t) {
        (t.stopPropagation(),
          window.confirm(`Delete this message?`) &&
            (yield d(e), (n == null ? void 0 : n.id) === e && r(null)));
      })),
      m.apply(this, arguments)
    );
  }
  return i
    ? (0, v.jsxs)(`div`, {
        className: _.loading,
        children: [
          (0, v.jsx)(`i`, { className: `fas fa-spinner fa-spin` }),
          ` Loading messages…`,
        ],
      })
    : (0, v.jsxs)(`div`, {
        className: _.wrap,
        children: [
          (0, v.jsxs)(`div`, {
            className: _.header,
            children: [
              (0, v.jsxs)(`h3`, {
                children: [
                  (0, v.jsx)(`i`, { className: `fas fa-inbox` }),
                  ` Inbox`,
                  o > 0 &&
                    (0, v.jsxs)(`span`, {
                      className: _.badge,
                      children: [o, ` new`],
                    }),
                ],
              }),
              (0, v.jsxs)(`p`, {
                className: _.sub,
                children: [
                  e.length,
                  ` total message`,
                  e.length === 1 ? `` : `s`,
                ],
              }),
            ],
          }),
          e.length === 0
            ? (0, v.jsxs)(`div`, {
                className: _.empty,
                children: [
                  (0, v.jsx)(`i`, { className: `fas fa-envelope-open` }),
                  (0, v.jsxs)(`p`, {
                    children: [
                      `No messages yet.`,
                      (0, v.jsx)(`br`, {}),
                      `Messages from the contact form will appear here.`,
                    ],
                  }),
                ],
              })
            : (0, v.jsxs)(`div`, {
                className: _.layout,
                children: [
                  (0, v.jsx)(`div`, {
                    className: _.list,
                    children: e.map((e) => {
                      var t;
                      return (0, v.jsxs)(
                        `div`,
                        {
                          className: `${_.msgItem} ${e.read ? `` : _.unread} ${(n == null ? void 0 : n.id) === e.id ? _.active : ``}`,
                          onClick: () => s(e),
                          children: [
                            (0, v.jsx)(`div`, {
                              className: _.msgAvatar,
                              children: (e.name || `?`).charAt(0).toUpperCase(),
                            }),
                            (0, v.jsxs)(`div`, {
                              className: _.msgPreview,
                              children: [
                                (0, v.jsxs)(`div`, {
                                  className: _.msgTop,
                                  children: [
                                    (0, v.jsx)(`span`, {
                                      className: _.msgName,
                                      children: e.name || `Unknown`,
                                    }),
                                    (0, v.jsx)(`span`, {
                                      className: _.msgTime,
                                      children: y(e.createdAt),
                                    }),
                                  ],
                                }),
                                (0, v.jsx)(`div`, {
                                  className: _.msgSub,
                                  children: e.email || ``,
                                }),
                                (0, v.jsxs)(`div`, {
                                  className: _.msgSnippet,
                                  children: [
                                    (t = e.message) == null
                                      ? void 0
                                      : t.slice(0, 70),
                                    `…`,
                                  ],
                                }),
                              ],
                            }),
                            !e.read &&
                              (0, v.jsx)(`div`, { className: _.unreadDot }),
                            (0, v.jsx)(`button`, {
                              className: _.delBtn,
                              onClick: (t) => p(e.id, t),
                              title: `Delete`,
                              children: (0, v.jsx)(`i`, {
                                className: `fas fa-trash`,
                              }),
                            }),
                          ],
                        },
                        e.id,
                      );
                    }),
                  }),
                  (0, v.jsx)(`div`, {
                    className: _.detail,
                    children: n
                      ? (0, v.jsxs)(v.Fragment, {
                          children: [
                            (0, v.jsxs)(`div`, {
                              className: _.detailHeader,
                              children: [
                                (0, v.jsx)(`div`, {
                                  className: _.detailAvatar,
                                  children: (n.name || `?`)
                                    .charAt(0)
                                    .toUpperCase(),
                                }),
                                (0, v.jsxs)(`div`, {
                                  children: [
                                    (0, v.jsx)(`div`, {
                                      className: _.detailName,
                                      children: n.name,
                                    }),
                                    (0, v.jsxs)(`div`, {
                                      className: _.detailMeta,
                                      children: [
                                        n.email &&
                                          (0, v.jsx)(`a`, {
                                            href: `mailto:${n.email}`,
                                            className: _.emailLink,
                                            children: n.email,
                                          }),
                                        (0, v.jsx)(`span`, { children: `·` }),
                                        (0, v.jsx)(`span`, {
                                          children: y(n.createdAt),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            n.service &&
                              (0, v.jsxs)(`div`, {
                                className: _.serviceTag,
                                children: [
                                  (0, v.jsx)(`i`, { className: `fas fa-tag` }),
                                  ` `,
                                  n.service,
                                ],
                              }),
                            (0, v.jsx)(`div`, {
                              className: _.detailBody,
                              children: n.message,
                            }),
                            (0, v.jsxs)(`div`, {
                              className: _.detailActions,
                              children: [
                                n.email &&
                                  (0, v.jsxs)(`a`, {
                                    href: `mailto:${n.email}?subject=Re: Your inquiry&body=Hi ${n.name},%0D%0A%0D%0AThank you for reaching out!`,
                                    className: _.replyBtn,
                                    children: [
                                      (0, v.jsx)(`i`, {
                                        className: `fas fa-reply`,
                                      }),
                                      ` Reply via Email`,
                                    ],
                                  }),
                                (0, v.jsxs)(`button`, {
                                  className: _.delDetailBtn,
                                  onClick: (e) => p(n.id, e),
                                  children: [
                                    (0, v.jsx)(`i`, {
                                      className: `fas fa-trash`,
                                    }),
                                    ` Delete`,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, v.jsxs)(`div`, {
                          className: _.noSelect,
                          children: [
                            (0, v.jsx)(`i`, {
                              className: `fas fa-envelope-open-text`,
                            }),
                            (0, v.jsx)(`p`, {
                              children: `Select a message to read`,
                            }),
                          ],
                        }),
                  }),
                ],
              }),
        ],
      });
}
var b = {
    overlay: `_overlay_dw8zo_1`,
    panel: `_panel_dw8zo_2`,
    sidebar: `_sidebar_dw8zo_4`,
    sidebarLogo: `_sidebarLogo_dw8zo_5`,
    navBtn: `_navBtn_dw8zo_8`,
    active: `_active_dw8zo_10`,
    navBadge: `_navBadge_dw8zo_13`,
    content: `_content_dw8zo_15`,
    topBar: `_topBar_dw8zo_16`,
    topActions: `_topActions_dw8zo_18`,
    savedMsg: `_savedMsg_dw8zo_19`,
    saveBtn: `_saveBtn_dw8zo_20`,
    logoutBtn: `_logoutBtn_dw8zo_23`,
    closeBtn: `_closeBtn_dw8zo_25`,
    body: `_body_dw8zo_28`,
    card: `_card_dw8zo_30`,
    optNote: `_optNote_dw8zo_32`,
    statGrid: `_statGrid_dw8zo_34`,
    stat: `_stat_dw8zo_34`,
    statNum: `_statNum_dw8zo_36`,
    statLbl: `_statLbl_dw8zo_37`,
    guide: `_guide_dw8zo_39`,
    field: `_field_dw8zo_43`,
    input: `_input_dw8zo_45`,
    textarea: `_textarea_dw8zo_47`,
    row2: `_row2_dw8zo_49`,
    row3: `_row3_dw8zo_50`,
    imgRow: `_imgRow_dw8zo_52`,
    fileBtn: `_fileBtn_dw8zo_53`,
    preview: `_preview_dw8zo_55`,
    uploading: `_uploading_dw8zo_56`,
    hint: `_hint_dw8zo_57`,
    addBtn: `_addBtn_dw8zo_59`,
    cancelEditBtn: `_cancelEditBtn_dw8zo_61`,
    listItem: `_listItem_dw8zo_64`,
    dimmed: `_dimmed_dw8zo_66`,
    editing: `_editing_dw8zo_67`,
    listInfo: `_listInfo_dw8zo_68`,
    listActions: `_listActions_dw8zo_71`,
    actionBtn: `_actionBtn_dw8zo_72`,
    editBtn: `_editBtn_dw8zo_74`,
    danger: `_danger_dw8zo_75`,
    thumb: `_thumb_dw8zo_76`,
    toggleRow: `_toggleRow_dw8zo_78`,
    toggle: `_toggle_dw8zo_78`,
    toggleOn: `_toggleOn_dw8zo_80`,
    toggleOff: `_toggleOff_dw8zo_81`,
    userBadge: `_userBadge_dw8zo_83`,
    setupSteps: `_setupSteps_dw8zo_88`,
    step: `_step_dw8zo_89`,
    link: `_link_dw8zo_92`,
    code: `_code_dw8zo_94`,
    noteBox: `_noteBox_dw8zo_95`,
    mobileSidebarToggle: `_mobileSidebarToggle_dw8zo_99`,
    sidebarDrawer: `_sidebarDrawer_dw8zo_100`,
    sidebarDrawerBg: `_sidebarDrawerBg_dw8zo_101`,
    sidebarDrawerPanel: `_sidebarDrawerPanel_dw8zo_102`,
    slideIn: `_slideIn_dw8zo_1`,
    hideXs: `_hideXs_dw8zo_104`,
    viewSiteBtn: `_viewSiteBtn_dw8zo_116`,
    videoGuide: `_videoGuide_dw8zo_130`,
    panelWrap: `_panelWrap_dw8zo_150`,
    geminiToggleBtn: `_geminiToggleBtn_dw8zo_157`,
    geminiActive: `_geminiActive_dw8zo_169`,
    sidebarGemini: `_sidebarGemini_dw8zo_171`,
    sidebarGeminiBadge: `_sidebarGeminiBadge_dw8zo_176`,
    claudeToggleBtn: `_claudeToggleBtn_dw8zo_188`,
    claudeActive: `_claudeActive_dw8zo_199`,
    keyBox: `_keyBox_dw8zo_202`,
    keyStatus: `_keyStatus_dw8zo_208`,
    keyStatusDot: `_keyStatusDot_dw8zo_213`,
    keyRow: `_keyRow_dw8zo_216`,
    keyRevealBtn: `_keyRevealBtn_dw8zo_220`,
    keyActions: `_keyActions_dw8zo_228`,
    keyStatusRow: `_keyStatusRow_dw8zo_233`,
    clearKeyBtn: `_clearKeyBtn_dw8zo_240`,
    aiGuideBlock: `_aiGuideBlock_dw8zo_250`,
    aiGuideTitle: `_aiGuideTitle_dw8zo_256`,
    aiGuideBadge: `_aiGuideBadge_dw8zo_265`,
    listHeader: `_listHeader_dw8zo_273`,
    countBadge: `_countBadge_dw8zo_278`,
    addNewBtn: `_addNewBtn_dw8zo_284`,
    addNewActive: `_addNewActive_dw8zo_292`,
    inlineForm: `_inlineForm_dw8zo_299`,
    expandDown: `_expandDown_dw8zo_1`,
    selectedItem: `_selectedItem_dw8zo_315`,
    expandedItem: `_expandedItem_dw8zo_323`,
    savedFlash: `_savedFlash_dw8zo_332`,
    savedPulse: `_savedPulse_dw8zo_1`,
    editBtnActive: `_editBtnActive_dw8zo_342`,
    multiImgRow: `_multiImgRow_dw8zo_349`,
    multiImgThumb: `_multiImgThumb_dw8zo_352`,
    multiImgRemove: `_multiImgRemove_dw8zo_358`,
    multiImgMain: `_multiImgMain_dw8zo_365`,
    previewImg: `_previewImg_dw8zo_380`,
    form: `_form_dw8zo_382`,
    newsletterItem: `_newsletterItem_dw8zo_394`,
    newsletterActions: `_newsletterActions_dw8zo_395`,
  },
  x = {
    wrap: `_wrap_l6mv9_1`,
    statsGrid: `_statsGrid_l6mv9_4`,
    statCard: `_statCard_l6mv9_5`,
    statIcon: `_statIcon_l6mv9_10`,
    statVal: `_statVal_l6mv9_11`,
    statLabel: `_statLabel_l6mv9_12`,
    statSub: `_statSub_l6mv9_13`,
    gaHeader: `_gaHeader_l6mv9_16`,
    gaTitle: `_gaTitle_l6mv9_21`,
    connected: `_connected_l6mv9_25`,
    openGA: `_openGA_l6mv9_26`,
    gaGrid: `_gaGrid_l6mv9_35`,
    gaCard: `_gaCard_l6mv9_36`,
    gaCardText: `_gaCardText_l6mv9_44`,
    gaCardLabel: `_gaCardLabel_l6mv9_45`,
    gaCardSub: `_gaCardSub_l6mv9_46`,
    embedSection: `_embedSection_l6mv9_49`,
    embedToggle: `_embedToggle_l6mv9_50`,
    embedWrap: `_embedWrap_l6mv9_57`,
    embedLoading: `_embedLoading_l6mv9_62`,
    gaIframe: `_gaIframe_l6mv9_68`,
    eventsNote: `_eventsNote_l6mv9_74`,
  },
  S = `G-7CG50BBNZ0`,
  C = `7CG50BBNZ0`,
  w = [
    {
      icon: `fas fa-satellite-dish`,
      label: `Realtime`,
      sub: `এখন কতজন active`,
      color: `#22c55e`,
      url: `https://analytics.google.com/analytics/web/#/p${C}/realtime/overview`,
    },
    {
      icon: `fas fa-users`,
      label: `Audience`,
      sub: `Visitor demographics`,
      color: `#3b82f6`,
      url: `https://analytics.google.com/analytics/web/#/p${C}/reports/explorer?params=_u..nav%3Dmaui&r=user-demographics-detail`,
    },
    {
      icon: `fas fa-chart-line`,
      label: `Traffic`,
      sub: `Sessions & pageviews`,
      color: `#a855f7`,
      url: `https://analytics.google.com/analytics/web/#/p${C}/reports/explorer?params=_u..nav%3Dmaui&r=lifecycle-traffic-acquisition-v2`,
    },
    {
      icon: `fas fa-file-alt`,
      label: `Top Pages`,
      sub: `Most visited pages`,
      color: `#f59e0b`,
      url: `https://analytics.google.com/analytics/web/#/p${C}/reports/explorer?params=_u..nav%3Dmaui&r=all-pages-and-screens`,
    },
    {
      icon: `fas fa-mouse-pointer`,
      label: `Events`,
      sub: `hire_me, cv_download`,
      color: `#ef4444`,
      url: `https://analytics.google.com/analytics/web/#/p${C}/reports/explorer?params=_u..nav%3Dmaui&r=key-events`,
    },
    {
      icon: `fas fa-globe`,
      label: `Geo Report`,
      sub: `Visitor locations`,
      color: `#14b8a6`,
      url: `https://analytics.google.com/analytics/web/#/p${C}/reports/explorer?params=_u..nav%3Dmaui&r=user-demographics-detail&collectionId=user`,
    },
  ];
function T({ icon: e, label: t, value: n, sub: r, color: i }) {
  return (0, v.jsxs)(`div`, {
    className: x.statCard,
    style: { "--c": i },
    children: [
      (0, v.jsx)(`div`, {
        className: x.statIcon,
        children: (0, v.jsx)(`i`, { className: e }),
      }),
      (0, v.jsx)(`div`, { className: x.statVal, children: n }),
      (0, v.jsx)(`div`, { className: x.statLabel, children: t }),
      (0, v.jsx)(`div`, { className: x.statSub, children: r }),
    ],
  });
}
function te() {
  let [e, t] = (0, g.useState)([]),
    [n, r] = (0, g.useState)(!1),
    [i, a] = (0, g.useState)(!0);
  (0, g.useEffect)(() => u((e) => t(e || [])), []);
  let o = e.length,
    s = e.filter((e) => !e.read).length;
  return (0, v.jsxs)(`div`, {
    className: x.wrap,
    children: [
      (0, v.jsxs)(`div`, {
        className: x.statsGrid,
        children: [
          (0, v.jsx)(T, {
            icon: `fas fa-envelope`,
            label: `Total Messages`,
            value: o,
            sub: `Contact form`,
            color: `#22c55e`,
          }),
          (0, v.jsx)(T, {
            icon: `fas fa-envelope-open`,
            label: `Unread`,
            value: s,
            sub: `Waiting reply`,
            color: `#f59e0b`,
          }),
          (0, v.jsx)(T, {
            icon: `fas fa-rss`,
            label: `Newsletter`,
            value: `Firebase`,
            sub: `Check subscribers`,
            color: `#3b82f6`,
          }),
          (0, v.jsx)(T, {
            icon: `fas fa-eye`,
            label: `Page Views`,
            value: `GA4 ↓`,
            sub: `See links below`,
            color: `#a855f7`,
          }),
        ],
      }),
      (0, v.jsxs)(`div`, {
        className: x.gaHeader,
        children: [
          (0, v.jsxs)(`div`, {
            className: x.gaTitle,
            children: [
              (0, v.jsxs)(`svg`, {
                width: `18`,
                height: `18`,
                viewBox: `0 0 24 24`,
                fill: `none`,
                children: [
                  (0, v.jsx)(`path`, {
                    d: `M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z`,
                    fill: `#4285F4`,
                  }),
                  (0, v.jsx)(`path`, {
                    d: `M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z`,
                    fill: `#34A853`,
                  }),
                  (0, v.jsx)(`path`, {
                    d: `M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z`,
                    fill: `#FBBC05`,
                  }),
                  (0, v.jsx)(`path`, {
                    d: `M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z`,
                    fill: `#EA4335`,
                  }),
                ],
              }),
              `Google Analytics 4`,
              (0, v.jsxs)(`span`, {
                className: x.connected,
                children: [`● `, S],
              }),
            ],
          }),
          (0, v.jsxs)(`a`, {
            href: `https://analytics.google.com`,
            target: `_blank`,
            rel: `noreferrer`,
            className: x.openGA,
            children: [
              (0, v.jsx)(`i`, { className: `fas fa-external-link-alt` }),
              ` Open GA4`,
            ],
          }),
        ],
      }),
      (0, v.jsx)(`div`, {
        className: x.gaGrid,
        children: w.map((e) =>
          (0, v.jsxs)(
            `a`,
            {
              href: e.url,
              target: `_blank`,
              rel: `noreferrer`,
              className: x.gaCard,
              style: { "--c": e.color },
              children: [
                (0, v.jsx)(`i`, { className: e.icon }),
                (0, v.jsxs)(`div`, {
                  className: x.gaCardText,
                  children: [
                    (0, v.jsx)(`div`, {
                      className: x.gaCardLabel,
                      children: e.label,
                    }),
                    (0, v.jsx)(`div`, {
                      className: x.gaCardSub,
                      children: e.sub,
                    }),
                  ],
                }),
                (0, v.jsx)(`i`, {
                  className: `fas fa-arrow-right`,
                  style: {
                    marginLeft: `auto`,
                    fontSize: `0.7rem`,
                    opacity: 0.5,
                  },
                }),
              ],
            },
            e.label,
          ),
        ),
      }),
      (0, v.jsxs)(`div`, {
        className: x.embedSection,
        children: [
          (0, v.jsxs)(`button`, {
            className: x.embedToggle,
            onClick: () => {
              (r((e) => !e), a(!0));
            },
            children: [
              (0, v.jsx)(`i`, {
                className: `fas fa-${n ? `compress-alt` : `expand-alt`}`,
              }),
              n ? `Hide` : `Embed`,
              ` GA4 Dashboard`,
            ],
          }),
          n &&
            (0, v.jsxs)(`div`, {
              className: x.embedWrap,
              children: [
                i &&
                  (0, v.jsxs)(`div`, {
                    className: x.embedLoading,
                    children: [
                      (0, v.jsx)(`i`, { className: `fas fa-spinner fa-spin` }),
                      (0, v.jsx)(`span`, {
                        children: `Loading Google Analytics…`,
                      }),
                      (0, v.jsx)(`p`, {
                        style: {
                          fontSize: `0.72rem`,
                          opacity: 0.6,
                          marginTop: 8,
                        },
                        children: `Login prompt আসলে Google account দিয়ে login করুন।`,
                      }),
                    ],
                  }),
                (0, v.jsx)(`iframe`, {
                  src: `https://analytics.google.com/analytics/web/#/p${C}/reports/reportinghub`,
                  title: `Google Analytics 4`,
                  className: x.gaIframe,
                  style: { opacity: +!i },
                  onLoad: () => a(!1),
                  allow: `same-origin`,
                }),
              ],
            }),
        ],
      }),
      (0, v.jsxs)(`div`, {
        className: x.eventsNote,
        children: [
          (0, v.jsx)(`i`, {
            className: `fas fa-info-circle`,
            style: { color: `var(--green)` },
          }),
          (0, v.jsxs)(`div`, {
            children: [
              (0, v.jsx)(`strong`, { children: `Tracked Events:` }),
              ` hire_me_click · cv_download · portfolio_view · blog_read · newsletter_subscribe · tool_use`,
            ],
          }),
        ],
      }),
    ],
  });
}
r();
var E = [`label`],
  D = [`label`],
  O = [
    { key: `dashboard`, label: `Dashboard`, icon: `fas fa-tachometer-alt` },
    { key: `insights`, label: `Insights`, icon: `fas fa-chart-bar` },
    { key: `blog`, label: `Blog`, icon: `fas fa-pen-nib` },
    { key: `faq`, label: `FAQ`, icon: `fas fa-question-circle` },
    { key: `messages`, label: `Messages`, icon: `fas fa-inbox` },
    { key: `hero`, label: `Hero Section`, icon: `fas fa-home` },
    { key: `about`, label: `About`, icon: `fas fa-user` },
    { key: `services`, label: `Services`, icon: `fas fa-cogs` },
    { key: `experience`, label: `Experience`, icon: `fas fa-briefcase` },
    { key: `education`, label: `Education`, icon: `fas fa-graduation-cap` },
    { key: `courses`, label: `Training & Courses`, icon: `fas fa-book-open` },
    { key: `portfolio`, label: `Portfolio`, icon: `fas fa-images` },
    { key: `skills`, label: `Skills`, icon: `fas fa-chart-bar` },
    { key: `testimonials`, label: `Testimonials`, icon: `fas fa-quote-right` },
    { key: `fbpages`, label: `Facebook Pages`, icon: `fab fa-facebook-f` },
    { key: `social`, label: `Social Links`, icon: `fas fa-share-alt` },
    { key: `visibility`, label: `Visibility`, icon: `fas fa-eye` },
    { key: `platforms`, label: `Review Platforms`, icon: `fas fa-star` },
    { key: `emailjs`, label: `Email Notifications`, icon: `fas fa-bell` },
    { key: `theme`, label: `🎨 Theme`, icon: `fas fa-palette` },
  ];
function k({ label: e, children: t }) {
  return (0, v.jsxs)(`div`, {
    className: b.field,
    children: [(0, v.jsx)(`label`, { children: e }), t],
  });
}
function A(e) {
  let { label: t } = e,
    n = a(e, E);
  return (0, v.jsx)(k, {
    label: t,
    children: (0, v.jsx)(`input`, i({ className: b.input }, n)),
  });
}
function ne(e) {
  let { label: t } = e,
    n = a(e, D);
  return (0, v.jsx)(k, {
    label: t,
    children: (0, v.jsx)(`textarea`, i({ className: b.textarea }, n)),
  });
}
function re({ label: e, url: t, onUrl: n }) {
  let [r, i] = (0, g.useState)(!1),
    { apiKeys: a } = h();
  function o(e) {
    return s.apply(this, arguments);
  }
  function s() {
    return (
      (s = c(function* (e) {
        let t = e.target.files[0];
        if (t) {
          i(!0);
          try {
            n((yield f(t, a == null ? void 0 : a.imgbb_key)).url);
          } catch (e) {
            alert(`ImgBB upload failed: ` + e.message);
          }
          i(!1);
        }
      })),
      s.apply(this, arguments)
    );
  }
  return (0, v.jsxs)(k, {
    label: e,
    children: [
      (0, v.jsxs)(`div`, {
        className: b.imgRow,
        children: [
          (0, v.jsxs)(`label`, {
            className: b.fileBtn,
            children: [
              (0, v.jsx)(`i`, { className: `fas fa-upload` }),
              ` Choose Image`,
              (0, v.jsx)(`input`, {
                type: `file`,
                accept: `image/*`,
                onChange: o,
                style: { display: `none` },
              }),
            ],
          }),
          (0, v.jsx)(`input`, {
            className: b.input,
            value: t || ``,
            onChange: (e) => n(e.target.value),
            placeholder: `or paste image URL`,
          }),
        ],
      }),
      r &&
        (0, v.jsxs)(`span`, {
          className: b.uploading,
          children: [
            (0, v.jsx)(`i`, { className: `fas fa-spinner fa-spin` }),
            ` Uploading...`,
          ],
        }),
      t &&
        (0, v.jsx)(`img`, {
          loading: `lazy`,
          src: t,
          className: b.preview,
          alt: `Preview`,
          role: `img`,
        }),
    ],
  });
}
var ie = [
    {
      id: `dark-green`,
      name: `Dark Green`,
      desc: `Default — Professional`,
      bg: `#060a0f`,
      bg2: `#0d1117`,
      bg3: `#111820`,
      accent: `#22c55e`,
      accent2: `#16a34a`,
      white: `#f0f4f8`,
      gray: `#8892a4`,
      border: `rgba(34,197,94,0.18)`,
    },
    {
      id: `dark-blue`,
      name: `Ocean Dark`,
      desc: `Deep blue professional`,
      bg: `#040b14`,
      bg2: `#0a1628`,
      bg3: `#0f1f38`,
      accent: `#3b82f6`,
      accent2: `#2563eb`,
      white: `#e8f0fe`,
      gray: `#6b7fa3`,
      border: `rgba(59,130,246,0.18)`,
    },
    {
      id: `dark-purple`,
      name: `Purple Dusk`,
      desc: `Creative violet dark`,
      bg: `#0a040f`,
      bg2: `#120a1e`,
      bg3: `#1a1028`,
      accent: `#a855f7`,
      accent2: `#9333ea`,
      white: `#f3e8ff`,
      gray: `#9280a4`,
      border: `rgba(168,85,247,0.18)`,
    },
    {
      id: `dark-orange`,
      name: `Ember Dark`,
      desc: `Warm amber creative`,
      bg: `#0f0800`,
      bg2: `#1a1000`,
      bg3: `#231700`,
      accent: `#f59e0b`,
      accent2: `#d97706`,
      white: `#fef3c7`,
      gray: `#a09060`,
      border: `rgba(245,158,11,0.18)`,
    },
    {
      id: `dark-red`,
      name: `Ruby Dark`,
      desc: `Bold red energy`,
      bg: `#0f0404`,
      bg2: `#1a0808`,
      bg3: `#230f0f`,
      accent: `#ef4444`,
      accent2: `#dc2626`,
      white: `#fde8e8`,
      gray: `#a07070`,
      border: `rgba(239,68,68,0.18)`,
    },
    {
      id: `dark-teal`,
      name: `Teal Night`,
      desc: `Calm teal dark`,
      bg: `#020d0d`,
      bg2: `#041818`,
      bg3: `#071f1f`,
      accent: `#14b8a6`,
      accent2: `#0d9488`,
      white: `#e0f7f5`,
      gray: `#60a098`,
      border: `rgba(20,184,166,0.18)`,
    },
  ],
  j = [
    {
      id: `light-green`,
      name: `Fresh White`,
      desc: `Clean professional`,
      bg: `#f5f7fa`,
      bg2: `#ffffff`,
      bg3: `#eef1f6`,
      accent: `#16a34a`,
      accent2: `#15803d`,
      white: `#111827`,
      gray: `#4b5563`,
      border: `rgba(17,24,39,0.12)`,
    },
    {
      id: `light-blue`,
      name: `Sky Light`,
      desc: `Corporate clear blue`,
      bg: `#f0f4ff`,
      bg2: `#ffffff`,
      bg3: `#e8eeff`,
      accent: `#2563eb`,
      accent2: `#1d4ed8`,
      white: `#0f172a`,
      gray: `#475569`,
      border: `rgba(37,99,235,0.12)`,
    },
    {
      id: `light-purple`,
      name: `Lavender`,
      desc: `Creative soft purple`,
      bg: `#f9f5ff`,
      bg2: `#ffffff`,
      bg3: `#f0ebff`,
      accent: `#7c3aed`,
      accent2: `#6d28d9`,
      white: `#1e0a3c`,
      gray: `#5b4e78`,
      border: `rgba(124,58,237,0.12)`,
    },
    {
      id: `light-orange`,
      name: `Warm Sand`,
      desc: `Warm editorial`,
      bg: `#fdf7f0`,
      bg2: `#ffffff`,
      bg3: `#faeedd`,
      accent: `#c2410c`,
      accent2: `#9a3412`,
      white: `#1c0a00`,
      gray: `#6b4c30`,
      border: `rgba(194,65,12,0.12)`,
    },
    {
      id: `light-rose`,
      name: `Rose Light`,
      desc: `Elegant soft pink`,
      bg: `#fff5f7`,
      bg2: `#ffffff`,
      bg3: `#ffe8ed`,
      accent: `#e11d48`,
      accent2: `#be123c`,
      white: `#1a0010`,
      gray: `#6b3040`,
      border: `rgba(225,29,72,0.12)`,
    },
    {
      id: `light-teal`,
      name: `Mint Fresh`,
      desc: `Fresh teal light`,
      bg: `#f0fafa`,
      bg2: `#ffffff`,
      bg3: `#e0f7f5`,
      accent: `#0d9488`,
      accent2: `#0f766e`,
      white: `#00201f`,
      gray: `#2d6b68`,
      border: `rgba(13,148,136,0.12)`,
    },
  ];
function M(e, t) {
  try {
    return `rgba(${parseInt(e.slice(1, 3), 16)},${parseInt(e.slice(3, 5), 16)},${parseInt(e.slice(5, 7), 16)},${t})`;
  } catch (t) {
    return e;
  }
}
function ae(e, t) {
  let n = document.documentElement;
  (n.style.setProperty(`--bg`, e.bg),
    n.style.setProperty(`--bg2`, e.bg2),
    n.style.setProperty(`--bg3`, e.bg3),
    n.style.setProperty(`--green`, e.accent),
    n.style.setProperty(`--green2`, e.accent2),
    n.style.setProperty(`--white`, e.white),
    n.style.setProperty(`--gray`, e.gray),
    n.style.setProperty(`--border`, e.border),
    t
      ? (n.removeAttribute(`data-theme`),
        (document.body.style.background = e.bg),
        (document.body.style.color = e.white))
      : (n.setAttribute(`data-theme`, `light`),
        (document.body.style.background = e.bg),
        (document.body.style.color = e.white)));
  try {
    localStorage.setItem(
      `alamin_theme`,
      JSON.stringify({ preset: e, isDark: t }),
    );
  } catch (e) {}
}
function oe() {
  let [e, t] = (0, g.useState)(() => {
      try {
        var e;
        return (
          ((e = JSON.parse(localStorage.getItem(`alamin_theme`))) == null ||
          (e = e.preset) == null
            ? void 0
            : e.id) || `dark-green`
        );
      } catch (e) {
        return `dark-green`;
      }
    }),
    [n, r] = (0, g.useState)(!1),
    [a, o] = (0, g.useState)(!1),
    [s, c] = (0, g.useState)({
      isDark: !0,
      bg: `#060a0f`,
      bg2: `#0d1117`,
      bg3: `#111820`,
      accent: `#22c55e`,
      accent2: `#16a34a`,
      white: `#f0f4f8`,
      gray: `#8892a4`,
      border: `rgba(34,197,94,0.18)`,
    });
  function l(e, n) {
    (t(e.id), r(!1), ae(e, n));
  }
  function u() {
    (ae(i({ id: `custom`, name: `Custom` }, s), s.isDark),
      t(`custom`),
      o(!0),
      setTimeout(() => o(!1), 2500));
  }
  let d = (t) => ({
    background: t.bg,
    border: e === t.id ? `2px solid ${t.accent}` : `2px solid transparent`,
    borderRadius: 10,
    padding: `10px 10px 8px`,
    cursor: `pointer`,
    transition: `all 0.2s`,
    position: `relative`,
    userSelect: `none`,
  });
  return (0, v.jsxs)(`div`, {
    children: [
      (0, v.jsx)(`p`, {
        style: {
          color: `var(--gray)`,
          fontSize: `0.83rem`,
          marginBottom: `1.5rem`,
          lineHeight: 1.6,
        },
        children: `Website এর সম্পূর্ণ color theme এখান থেকে পরিবর্তন করুন। সাথে সাথে preview দেখবেন।`,
      }),
      (0, v.jsxs)(`h4`, {
        style: {
          fontSize: `0.82rem`,
          fontWeight: 700,
          color: `var(--white)`,
          marginBottom: `0.8rem`,
          display: `flex`,
          alignItems: `center`,
          gap: 7,
        },
        children: [
          (0, v.jsx)(`i`, {
            className: `fas fa-moon`,
            style: { color: `var(--green)` },
          }),
          ` Dark Themes`,
        ],
      }),
      (0, v.jsx)(`div`, {
        style: {
          display: `grid`,
          gridTemplateColumns: `repeat(3,1fr)`,
          gap: 8,
          marginBottom: `1.5rem`,
        },
        children: ie.map((t) =>
          (0, v.jsxs)(
            `div`,
            {
              onClick: () => l(t, !0),
              style: d(t),
              children: [
                e === t.id &&
                  (0, v.jsx)(`span`, {
                    style: {
                      position: `absolute`,
                      top: 6,
                      right: 6,
                      background: t.accent,
                      color: `#000`,
                      borderRadius: `50%`,
                      width: 16,
                      height: 16,
                      display: `flex`,
                      alignItems: `center`,
                      justifyContent: `center`,
                      fontSize: `0.55rem`,
                      fontWeight: 900,
                    },
                    children: `✓`,
                  }),
                (0, v.jsxs)(`div`, {
                  style: { display: `flex`, gap: 4, marginBottom: 6 },
                  children: [
                    (0, v.jsx)(`div`, {
                      style: {
                        width: 14,
                        height: 14,
                        borderRadius: `50%`,
                        background: t.bg3,
                        border: `1px solid ${t.accent}33`,
                      },
                    }),
                    (0, v.jsx)(`div`, {
                      style: {
                        width: 14,
                        height: 14,
                        borderRadius: `50%`,
                        background: t.accent,
                      },
                    }),
                    (0, v.jsx)(`div`, {
                      style: {
                        width: 14,
                        height: 14,
                        borderRadius: `50%`,
                        background: t.bg2,
                        border: `1px solid ${t.accent}22`,
                      },
                    }),
                  ],
                }),
                (0, v.jsx)(`div`, {
                  style: {
                    fontSize: `0.68rem`,
                    fontWeight: 700,
                    color: t.white,
                    lineHeight: 1.2,
                  },
                  children: t.name,
                }),
                (0, v.jsx)(`div`, {
                  style: { fontSize: `0.58rem`, color: t.gray, marginTop: 2 },
                  children: t.desc,
                }),
              ],
            },
            t.id,
          ),
        ),
      }),
      (0, v.jsxs)(`h4`, {
        style: {
          fontSize: `0.82rem`,
          fontWeight: 700,
          color: `var(--white)`,
          marginBottom: `0.8rem`,
          display: `flex`,
          alignItems: `center`,
          gap: 7,
        },
        children: [
          (0, v.jsx)(`i`, {
            className: `fas fa-sun`,
            style: { color: `var(--green)` },
          }),
          ` Light Themes`,
        ],
      }),
      (0, v.jsx)(`div`, {
        style: {
          display: `grid`,
          gridTemplateColumns: `repeat(3,1fr)`,
          gap: 8,
          marginBottom: `1.5rem`,
        },
        children: j.map((t) =>
          (0, v.jsxs)(
            `div`,
            {
              onClick: () => l(t, !1),
              style: d(t),
              children: [
                e === t.id &&
                  (0, v.jsx)(`span`, {
                    style: {
                      position: `absolute`,
                      top: 6,
                      right: 6,
                      background: t.accent,
                      color: `#fff`,
                      borderRadius: `50%`,
                      width: 16,
                      height: 16,
                      display: `flex`,
                      alignItems: `center`,
                      justifyContent: `center`,
                      fontSize: `0.55rem`,
                      fontWeight: 900,
                    },
                    children: `✓`,
                  }),
                (0, v.jsxs)(`div`, {
                  style: { display: `flex`, gap: 4, marginBottom: 6 },
                  children: [
                    (0, v.jsx)(`div`, {
                      style: {
                        width: 14,
                        height: 14,
                        borderRadius: `50%`,
                        background: t.bg3,
                        border: `1px solid ${t.accent}33`,
                      },
                    }),
                    (0, v.jsx)(`div`, {
                      style: {
                        width: 14,
                        height: 14,
                        borderRadius: `50%`,
                        background: t.accent,
                      },
                    }),
                    (0, v.jsx)(`div`, {
                      style: {
                        width: 14,
                        height: 14,
                        borderRadius: `50%`,
                        background: t.bg2,
                        border: `1px solid ${t.accent}22`,
                      },
                    }),
                  ],
                }),
                (0, v.jsx)(`div`, {
                  style: {
                    fontSize: `0.68rem`,
                    fontWeight: 700,
                    color: t.white,
                    lineHeight: 1.2,
                  },
                  children: t.name,
                }),
                (0, v.jsx)(`div`, {
                  style: { fontSize: `0.58rem`, color: t.gray, marginTop: 2 },
                  children: t.desc,
                }),
              ],
            },
            t.id,
          ),
        ),
      }),
      (0, v.jsxs)(`div`, {
        style: {
          border: `1px solid var(--border)`,
          borderRadius: 12,
          overflow: `hidden`,
        },
        children: [
          (0, v.jsxs)(`button`, {
            onClick: () => r((e) => !e),
            style: {
              width: `100%`,
              padding: `11px 16px`,
              background: `var(--bg2)`,
              border: `none`,
              color: `var(--white)`,
              cursor: `pointer`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `space-between`,
              fontSize: `0.82rem`,
              fontWeight: 700,
              textAlign: `left`,
            },
            children: [
              (0, v.jsxs)(`span`, {
                children: [
                  (0, v.jsx)(`i`, {
                    className: `fas fa-sliders-h`,
                    style: { color: `var(--green)`, marginRight: 8 },
                  }),
                  ` Custom Theme Builder`,
                ],
              }),
              (0, v.jsx)(`i`, {
                className: `fas fa-chevron-${n ? `up` : `down`}`,
                style: { color: `var(--gray)`, fontSize: `0.72rem` },
              }),
            ],
          }),
          n &&
            (0, v.jsxs)(`div`, {
              style: {
                padding: `1.2rem`,
                background: `var(--bg3)`,
                display: `flex`,
                flexDirection: `column`,
                gap: `0.9rem`,
              },
              children: [
                (0, v.jsxs)(`div`, {
                  style: { display: `flex`, gap: 8 },
                  children: [
                    (0, v.jsx)(`button`, {
                      onClick: () => c((e) => i(i({}, e), {}, { isDark: !0 })),
                      style: {
                        flex: 1,
                        padding: `7px`,
                        borderRadius: 8,
                        border: `none`,
                        cursor: `pointer`,
                        background: s.isDark ? `var(--green)` : `var(--bg2)`,
                        color: s.isDark ? `#000` : `var(--gray)`,
                        fontWeight: 700,
                        fontSize: `0.75rem`,
                      },
                      children: `🌙 Dark`,
                    }),
                    (0, v.jsx)(`button`, {
                      onClick: () => c((e) => i(i({}, e), {}, { isDark: !1 })),
                      style: {
                        flex: 1,
                        padding: `7px`,
                        borderRadius: 8,
                        border: `none`,
                        cursor: `pointer`,
                        background: s.isDark ? `var(--bg2)` : `var(--green)`,
                        color: s.isDark ? `var(--gray)` : `#000`,
                        fontWeight: 700,
                        fontSize: `0.75rem`,
                      },
                      children: `☀️ Light`,
                    }),
                  ],
                }),
                (0, v.jsx)(`div`, {
                  style: {
                    display: `grid`,
                    gridTemplateColumns: `1fr 1fr`,
                    gap: 8,
                  },
                  children: [
                    { key: `bg`, label: `Background` },
                    { key: `bg2`, label: `Card BG` },
                    { key: `bg3`, label: `Surface` },
                    { key: `accent`, label: `Accent Color` },
                    { key: `accent2`, label: `Accent Hover` },
                    { key: `white`, label: `Text Color` },
                    { key: `gray`, label: `Muted Text` },
                  ].map(({ key: e, label: t }) => {
                    var n;
                    return (0, v.jsxs)(
                      `div`,
                      {
                        style: {
                          display: `flex`,
                          flexDirection: `column`,
                          gap: 3,
                        },
                        children: [
                          (0, v.jsx)(`label`, {
                            style: {
                              fontSize: `0.62rem`,
                              color: `var(--gray)`,
                              fontWeight: 600,
                              textTransform: `uppercase`,
                              letterSpacing: `0.05em`,
                            },
                            children: t,
                          }),
                          (0, v.jsxs)(`div`, {
                            style: {
                              display: `flex`,
                              gap: 5,
                              alignItems: `center`,
                            },
                            children: [
                              (0, v.jsx)(`input`, {
                                type: `color`,
                                value:
                                  (n = s[e]) != null && n.startsWith(`#`)
                                    ? s[e]
                                    : `#22c55e`,
                                onChange: (t) => {
                                  let n = t.target.value;
                                  c((t) =>
                                    i(
                                      i({}, t),
                                      {},
                                      { [e]: n },
                                      e === `accent`
                                        ? { border: M(n, 0.18) }
                                        : {},
                                    ),
                                  );
                                },
                                style: {
                                  width: 32,
                                  height: 26,
                                  borderRadius: 5,
                                  border: `1px solid var(--border)`,
                                  cursor: `pointer`,
                                  padding: 1,
                                  background: `transparent`,
                                },
                              }),
                              (0, v.jsx)(`input`, {
                                type: `text`,
                                value: s[e] || ``,
                                onChange: (t) =>
                                  c((n) =>
                                    i(i({}, n), {}, { [e]: t.target.value }),
                                  ),
                                style: {
                                  flex: 1,
                                  padding: `4px 6px`,
                                  borderRadius: 5,
                                  border: `1px solid var(--border)`,
                                  background: `var(--bg)`,
                                  color: `var(--white)`,
                                  fontSize: `0.65rem`,
                                  fontFamily: `monospace`,
                                },
                              }),
                            ],
                          }),
                        ],
                      },
                      e,
                    );
                  }),
                }),
                (0, v.jsxs)(`div`, {
                  style: {
                    borderRadius: 10,
                    padding: 12,
                    background: s.bg,
                    border: `1px solid ${s.accent}33`,
                  },
                  children: [
                    (0, v.jsx)(`div`, {
                      style: {
                        fontSize: `0.58rem`,
                        color: s.gray,
                        marginBottom: 6,
                        fontWeight: 600,
                        textTransform: `uppercase`,
                        letterSpacing: `0.1em`,
                      },
                      children: `Live Preview`,
                    }),
                    (0, v.jsxs)(`div`, {
                      style: {
                        background: s.bg2,
                        borderRadius: 8,
                        padding: 10,
                        border: `1px solid ${s.accent}22`,
                      },
                      children: [
                        (0, v.jsx)(`div`, {
                          style: {
                            fontSize: `0.82rem`,
                            fontWeight: 800,
                            color: s.white,
                            marginBottom: 3,
                          },
                          children: `Al-Amin`,
                        }),
                        (0, v.jsx)(`div`, {
                          style: {
                            fontSize: `0.65rem`,
                            color: s.gray,
                            marginBottom: 8,
                          },
                          children: `Graphic Designer & AI Expert`,
                        }),
                        (0, v.jsxs)(`div`, {
                          style: { display: `flex`, gap: 6 },
                          children: [
                            (0, v.jsx)(`div`, {
                              style: {
                                background: s.accent,
                                color: `#000`,
                                padding: `4px 10px`,
                                borderRadius: 5,
                                fontSize: `0.62rem`,
                                fontWeight: 700,
                              },
                              children: `Hire Me`,
                            }),
                            (0, v.jsx)(`div`, {
                              style: {
                                background: `transparent`,
                                color: s.accent,
                                border: `1px solid ${s.accent}55`,
                                padding: `4px 10px`,
                                borderRadius: 5,
                                fontSize: `0.62rem`,
                              },
                              children: `Portfolio`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, v.jsx)(`div`, {
                      style: {
                        marginTop: 8,
                        background: s.bg3,
                        borderRadius: 6,
                        padding: `6px 10px`,
                        border: `1px solid ${s.border}`,
                      },
                      children: (0, v.jsx)(`div`, {
                        style: { fontSize: `0.62rem`, color: s.gray },
                        children: `Section background preview`,
                      }),
                    }),
                  ],
                }),
                (0, v.jsx)(`button`, {
                  onClick: u,
                  style: {
                    padding: `10px`,
                    borderRadius: 8,
                    background: `var(--green)`,
                    border: `none`,
                    color: `#000`,
                    fontWeight: 700,
                    cursor: `pointer`,
                    fontSize: `0.82rem`,
                    transition: `all 0.2s`,
                  },
                  children: a
                    ? `✓ Applied Successfully!`
                    : `Apply Custom Theme`,
                }),
              ],
            }),
        ],
      }),
      (0, v.jsx)(`p`, {
        style: {
          color: `var(--gray)`,
          fontSize: `0.68rem`,
          marginTop: `1rem`,
          textAlign: `center`,
          lineHeight: 1.5,
        },
        children: `Theme browser এ save হয়। Reset করতে Dark Green preset select করুন।`,
      }),
    ],
  });
}
function se({ sec: e, setSec: t, onClose: n, unreadCount: r }) {
  return (0, v.jsxs)(v.Fragment, {
    children: [
      (0, v.jsxs)(`div`, {
        className: b.sidebarLogo,
        children: [`Admin`, (0, v.jsx)(`span`, { children: `.` })],
      }),
      (0, v.jsx)(`nav`, {
        children: O.map((i) =>
          (0, v.jsxs)(
            `button`,
            {
              className: `${b.navBtn} ${e === i.key ? b.active : ``}`,
              onClick: () => {
                (t(i.key), n == null || n());
              },
              children: [
                (0, v.jsx)(`i`, { className: i.icon }),
                (0, v.jsx)(`span`, { children: i.label }),
                i.key === `messages` &&
                  r > 0 &&
                  (0, v.jsx)(`span`, { className: b.navBadge, children: r }),
              ],
            },
            i.key,
          ),
        ),
      }),
      (0, v.jsx)(`div`, {
        className: b.sidebarGemini,
        children: (0, v.jsx)(`div`, {
          className: b.sidebarGeminiBadge,
          children: `🤖 Groq + Google AI`,
        }),
      }),
    ],
  });
}
function ce({ onClose: e }) {
  var t, n, r, a, l, u, d, f, _, y, x, S, C, w, T, E, D, ie, j;
  let {
      data: M,
      setData: ae,
      save: ce,
      saving: N,
      authUser: ue,
      apiKeys: F,
      updateApiKeys: de,
    } = h(),
    [I, fe] = (0, g.useState)(`dashboard`),
    [pe, me] = (0, g.useState)(!1),
    [he, ge] = (0, g.useState)(!1),
    [_e, ve] = (0, g.useState)(!1),
    [L, ye] = (0, g.useState)(``),
    [R, be] = (0, g.useState)(``),
    [z, xe] = (0, g.useState)(``),
    [B, Se] = (0, g.useState)(``),
    [V, Ce] = (0, g.useState)(``),
    [we, Te] = (0, g.useState)(``),
    [H, Ee] = (0, g.useState)(``),
    [U, De] = (0, g.useState)(``),
    [W, Oe] = (0, g.useState)(``),
    [G, ke] = (0, g.useState)(``),
    [K, Ae] = (0, g.useState)(
      (F == null ? void 0 : F.emailjs_sub_template) || ``,
    ),
    [je, Me] = (0, g.useState)((F == null ? void 0 : F.ai_avatar) || ``);
  (0, g.useEffect)(() => {
    F &&
      (ye(F.groq || ``),
      be(F.gemini || ``),
      xe(F.gh_token || ``),
      Se(F.gh_repo || ``),
      Ce(F.openrouter || ``),
      Ee(F.emailjs || ``),
      De(F.emailjs_service || ``),
      Oe(F.emailjs_contact_template || ``),
      ke(F.emailjs_nl_template || ``),
      Ae(F.emailjs_sub_template || ``),
      Me(F.ai_avatar || ``),
      Te(F.imgbb_key || ``));
  }, [F]);
  function Ne() {
    return Pe.apply(this, arguments);
  }
  function Pe() {
    return (
      (Pe = c(function* () {
        let e = {};
        if (
          (L.trim() && (e.groq = L.trim()),
          R.trim() && (e.gemini = R.trim()),
          z.trim() && (e.gh_token = z.trim()),
          B.trim() && (e.gh_repo = B.trim()),
          V.trim() && (e.openrouter = V.trim()),
          H.trim() &&
            ((e.emailjs = H.trim()), (window.__emailjsKey = H.trim())),
          U.trim() && (e.emailjs_service = U.trim()),
          W.trim() && (e.emailjs_contact_template = W.trim()),
          G.trim() && (e.emailjs_nl_template = G.trim()),
          K.trim() && (e.emailjs_sub_template = K.trim()),
          (e.ai_avatar = je.trim()),
          (e.imgbb_key = we.trim()),
          Object.keys(e).length === 0)
        ) {
          alert(`কমপক্ষে একটা key দাও।`);
          return;
        }
        try {
          (yield de(e)) === !1
            ? alert(`Save failed! Firestore rules check করো।`)
            : (ve(!0), setTimeout(() => ve(!1), 3e3));
        } catch (e) {
          alert(`Error: ` + e.message);
        }
      })),
      Pe.apply(this, arguments)
    );
  }
  function q(e) {
    return Fe.apply(this, arguments);
  }
  function Fe() {
    return (
      (Fe = c(function* (e) {
        try {
          yield de({ [e]: `` });
        } catch (e) {
          alert(`Error clearing key: ` + e.message);
        }
      })),
      Fe.apply(this, arguments)
    );
  }
  let [Ie, Le] = (0, g.useState)(0);
  (0, g.useEffect)(
    () =>
      o(s(p, `messages`), (e) => {
        let t = e.docs.filter((e) => !e.data().read).length;
        Le(t);
      }),
    [],
  );
  let [Re, ze] = (0, g.useState)(!1),
    [Be, Ve] = (0, g.useState)(!1);
  function J(e, t) {
    ae((n) => i(i({}, n), {}, { [e]: t }));
  }
  function Y(e, t) {
    J(`hero`, i(i({}, M.hero), {}, { [e]: t }));
  }
  function He(e, t) {
    J(`about`, i(i({}, M.about), {}, { [e]: t }));
  }
  function Ue() {
    return We.apply(this, arguments);
  }
  function We() {
    return (
      (We = c(function* () {
        let e = yield ce(M);
        (me(!0),
          setTimeout(() => me(!1), 3e3),
          e ||
            alert(`Save failed. Check Firebase config and Firestore rules.`));
      })),
      We.apply(this, arguments)
    );
  }
  function Ge() {
    return Ke.apply(this, arguments);
  }
  function Ke() {
    return (
      (Ke = c(function* () {
        (yield m(), e());
      })),
      Ke.apply(this, arguments)
    );
  }
  function X(e, t) {
    J(e, [...(M[e] || []), i({ id: `${e}_${Date.now()}` }, t)]);
  }
  function Z(e, t) {
    J(
      e,
      (M[e] || []).filter((e) => e.id !== t),
    );
  }
  function Q(e, t) {
    J(
      e,
      (M[e] || []).map((e) =>
        e.id === t ? i(i({}, e), {}, { hidden: !e.hidden }) : e,
      ),
    );
  }
  function $(e, t, n) {
    J(
      e,
      (M[e] || []).map((e) => (e.id === t ? i(i({}, e), n) : e)),
    );
  }
  return (0, v.jsxs)(`div`, {
    className: b.overlay,
    children: [
      (0, v.jsx)(`div`, {
        className: b.panelWrap,
        children: (0, v.jsxs)(`div`, {
          className: b.panel,
          children: [
            (0, v.jsx)(`aside`, {
              className: b.sidebar,
              children: (0, v.jsx)(se, { sec: I, setSec: fe, unreadCount: Ie }),
            }),
            he &&
              (0, v.jsxs)(`div`, {
                className: b.sidebarDrawer,
                children: [
                  (0, v.jsx)(`div`, {
                    className: b.sidebarDrawerBg,
                    onClick: () => ge(!1),
                  }),
                  (0, v.jsx)(`div`, {
                    className: b.sidebarDrawerPanel,
                    children: (0, v.jsx)(se, {
                      sec: I,
                      setSec: fe,
                      onClose: () => ge(!1),
                      unreadCount: Ie,
                    }),
                  }),
                ],
              }),
            (0, v.jsxs)(`div`, {
              className: b.content,
              children: [
                (0, v.jsxs)(`div`, {
                  className: b.topBar,
                  children: [
                    (0, v.jsxs)(`div`, {
                      style: {
                        display: `flex`,
                        alignItems: `center`,
                        gap: `10px`,
                      },
                      children: [
                        (0, v.jsx)(`button`, {
                          className: b.mobileSidebarToggle,
                          onClick: () => ge(!0),
                          children: (0, v.jsx)(`i`, {
                            className: `fas fa-bars`,
                          }),
                        }),
                        (0, v.jsx)(`h1`, {
                          children:
                            (t = O.find((e) => e.key === I)) == null
                              ? void 0
                              : t.label,
                        }),
                      ],
                    }),
                    (0, v.jsxs)(`div`, {
                      className: b.topActions,
                      children: [
                        pe &&
                          (0, v.jsxs)(`span`, {
                            className: b.savedMsg,
                            children: [
                              (0, v.jsx)(`i`, { className: `fas fa-check` }),
                              ` Saved!`,
                            ],
                          }),
                        (0, v.jsx)(`button`, {
                          className: b.saveBtn,
                          onClick: Ue,
                          disabled: N,
                          children: N
                            ? (0, v.jsxs)(v.Fragment, {
                                children: [
                                  (0, v.jsx)(`i`, {
                                    className: `fas fa-spinner fa-spin`,
                                  }),
                                  ` Saving…`,
                                ],
                              })
                            : (0, v.jsxs)(v.Fragment, {
                                children: [
                                  (0, v.jsx)(`i`, {
                                    className: `fas fa-cloud-upload-alt`,
                                  }),
                                  ` Save`,
                                ],
                              }),
                        }),
                        (0, v.jsxs)(`a`, {
                          href: `https://portfolio-alamin-79c1d.web.app`,
                          target: `_blank`,
                          rel: `noreferrer`,
                          className: b.viewSiteBtn,
                          title: `View Website`,
                          children: [
                            (0, v.jsx)(`i`, {
                              className: `fas fa-external-link-alt`,
                            }),
                            (0, v.jsx)(`span`, {
                              className: b.hideXs,
                              children: ` View Site`,
                            }),
                          ],
                        }),
                        (0, v.jsxs)(`button`, {
                          className: `${b.geminiToggleBtn} ${Re ? b.geminiActive : ``}`,
                          onClick: () => ze((e) => !e),
                          title: `Groq AI — Content Writer`,
                          children: [
                            (0, v.jsxs)(`svg`, {
                              width: `16`,
                              height: `16`,
                              viewBox: `0 0 24 24`,
                              fill: `none`,
                              children: [
                                (0, v.jsx)(`path`, {
                                  d: `M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z`,
                                  fill: `url(#gnav)`,
                                }),
                                (0, v.jsx)(`defs`, {
                                  children: (0, v.jsxs)(`linearGradient`, {
                                    id: `gnav`,
                                    x1: `2`,
                                    y1: `2`,
                                    x2: `22`,
                                    y2: `22`,
                                    children: [
                                      (0, v.jsx)(`stop`, {
                                        stopColor: `#4285F4`,
                                      }),
                                      (0, v.jsx)(`stop`, {
                                        offset: `1`,
                                        stopColor: `#9B72CB`,
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, v.jsx)(`span`, {
                              className: b.hideXs,
                              children: `Groq AI`,
                            }),
                          ],
                        }),
                        (0, v.jsxs)(`button`, {
                          className: `${b.claudeToggleBtn} ${Be ? b.claudeActive : ``}`,
                          onClick: () => Ve((e) => !e),
                          title: `Google AI — Code Engineer`,
                          children: [
                            (0, v.jsx)(`svg`, {
                              width: `14`,
                              height: `14`,
                              viewBox: `0 0 24 24`,
                              fill: `none`,
                              children: (0, v.jsx)(`path`, {
                                d: `M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3l2 5h5l-4 3 1.5 5L12 15l-4.5 3L9 13 5 10h5l2-5z`,
                                fill: `#D97757`,
                              }),
                            }),
                            (0, v.jsx)(`span`, {
                              className: b.hideXs,
                              children: `Google AI Code`,
                            }),
                          ],
                        }),
                        (0, v.jsxs)(`button`, {
                          className: b.logoutBtn,
                          onClick: Ge,
                          children: [
                            (0, v.jsx)(`i`, {
                              className: `fas fa-sign-out-alt`,
                            }),
                            (0, v.jsx)(`span`, {
                              className: b.hideXs,
                              children: ` Logout`,
                            }),
                          ],
                        }),
                        (0, v.jsx)(`button`, {
                          className: b.closeBtn,
                          onClick: e,
                          children: (0, v.jsx)(`i`, {
                            className: `fas fa-times`,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, v.jsxs)(`div`, {
                  className: b.body,
                  children: [
                    I === `dashboard` &&
                      (0, v.jsxs)(`div`, {
                        children: [
                          ue &&
                            (0, v.jsxs)(`div`, {
                              className: b.userBadge,
                              children: [
                                (0, v.jsx)(`i`, {
                                  className: `fas fa-user-check`,
                                }),
                                `Logged in as `,
                                (0, v.jsx)(`strong`, { children: ue.email }),
                              ],
                            }),
                          (0, v.jsx)(`div`, {
                            className: b.statGrid,
                            children: [
                              {
                                n:
                                  (n = M.portfolio) == null ? void 0 : n.length,
                                l: `Projects`,
                                i: `fas fa-images`,
                              },
                              {
                                n: (r = M.services) == null ? void 0 : r.length,
                                l: `Services`,
                                i: `fas fa-cogs`,
                              },
                              {
                                n: (a = M.skills) == null ? void 0 : a.length,
                                l: `Skills`,
                                i: `fas fa-chart-bar`,
                              },
                              {
                                n:
                                  (l = M.testimonials) == null
                                    ? void 0
                                    : l.length,
                                l: `Testimonials`,
                                i: `fas fa-quote-right`,
                              },
                              {
                                n:
                                  (u = M.experience) == null
                                    ? void 0
                                    : u.length,
                                l: `Experience`,
                                i: `fas fa-briefcase`,
                              },
                              {
                                n:
                                  (d = M.education) == null ? void 0 : d.length,
                                l: `Education`,
                                i: `fas fa-graduation-cap`,
                              },
                              {
                                n:
                                  (f = M.facebookPages) == null
                                    ? void 0
                                    : f.length,
                                l: `FB Pages`,
                                i: `fab fa-facebook`,
                              },
                            ].map(({ n: e, l: t, i: n }) =>
                              (0, v.jsxs)(
                                `div`,
                                {
                                  className: b.stat,
                                  children: [
                                    (0, v.jsx)(`i`, {
                                      className: n,
                                      style: {
                                        color: `var(--green)`,
                                        opacity: 0.5,
                                        marginBottom: `6px`,
                                      },
                                    }),
                                    (0, v.jsx)(`div`, {
                                      className: b.statNum,
                                      children: e || 0,
                                    }),
                                    (0, v.jsx)(`div`, {
                                      className: b.statLbl,
                                      children: t,
                                    }),
                                  ],
                                },
                                t,
                              ),
                            ),
                          }),
                          (0, v.jsxs)(`div`, {
                            className: b.card,
                            children: [
                              (0, v.jsx)(`h3`, { children: `🔐 Admin Access` }),
                              (0, v.jsxs)(`div`, {
                                className: b.guide,
                                children: [
                                  (0, v.jsxs)(`p`, {
                                    children: [
                                      `🌐 `,
                                      (0, v.jsx)(`b`, { children: `URL:` }),
                                      ` Go to `,
                                      (0, v.jsx)(`code`, {
                                        style: { color: `var(--green)` },
                                        children: `yoursite.com/admin`,
                                      }),
                                      ` to open admin login`,
                                    ],
                                  }),
                                  (0, v.jsxs)(`p`, {
                                    children: [
                                      `⌨️ `,
                                      (0, v.jsx)(`b`, {
                                        children: `Shortcut:`,
                                      }),
                                      ` Press `,
                                      (0, v.jsx)(`code`, {
                                        style: { color: `var(--green)` },
                                        children: `Ctrl + Shift + A`,
                                      }),
                                      ` anywhere on the site`,
                                    ],
                                  }),
                                  (0, v.jsxs)(`p`, {
                                    children: [
                                      `🖼️ `,
                                      (0, v.jsx)(`b`, { children: `Images:` }),
                                      ` Full quality upload — no compression. Use image editor to adjust position/zoom`,
                                    ],
                                  }),
                                  (0, v.jsxs)(`p`, {
                                    children: [
                                      `📹 `,
                                      (0, v.jsx)(`b`, { children: `Videos:` }),
                                      ` Upload to YouTube (Unlisted) → Share → Embed → copy the embed URL`,
                                    ],
                                  }),
                                  (0, v.jsxs)(`p`, {
                                    children: [
                                      `📨 `,
                                      (0, v.jsx)(`b`, {
                                        children: `Messages:`,
                                      }),
                                      ` Client messages appear in the Messages tab in real-time`,
                                    ],
                                  }),
                                  (0, v.jsxs)(`p`, {
                                    children: [
                                      `💾 `,
                                      (0, v.jsx)(`b`, { children: `Save:` }),
                                      ` Always click Save after making changes`,
                                    ],
                                  }),
                                  (0, v.jsxs)(`p`, {
                                    children: [
                                      `✏️ `,
                                      (0, v.jsx)(`b`, { children: `Edit:` }),
                                      ` Click the edit icon on any item to modify it`,
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    I === `insights` &&
                      (0, v.jsxs)(`div`, {
                        className: b.card,
                        children: [
                          (0, v.jsx)(`h3`, { children: `📊 Website Insights` }),
                          (0, v.jsx)(te, {}),
                        ],
                      }),
                    I === `blog` &&
                      (0, v.jsx)(P, {
                        title: `Blog Post`,
                        listKey: `blog`,
                        data: M,
                        addItem: X,
                        removeItem: Z,
                        toggleHidden: Q,
                        editItem: $,
                        fields: [
                          {
                            key: `title`,
                            label: `Post Title`,
                            ph: `5 Graphic Design Trends in 2026`,
                          },
                          {
                            key: `topic`,
                            label: `Topic`,
                            type: `select`,
                            options: [
                              { v: `Graphic Design`, l: `Graphic Design` },
                              { v: `AI & Design`, l: `AI & Design` },
                              { v: `Web Design`, l: `Web Design` },
                              { v: `Tutorials`, l: `Tutorials` },
                              { v: `Career Tips`, l: `Career Tips` },
                            ],
                          },
                          {
                            key: `excerpt`,
                            label: `Short Excerpt`,
                            type: `textarea`,
                            ph: `Brief description for preview...`,
                          },
                          {
                            key: `content`,
                            label: `Full Content`,
                            type: `textarea`,
                            ph: `Write your full article here...`,
                          },
                          {
                            key: `coverUrl`,
                            label: `Cover Image URL`,
                            ph: `https://...`,
                          },
                          {
                            key: `tags`,
                            label: `Tags (comma-separated)`,
                            ph: `design, tips, tutorial`,
                            transform: (e) =>
                              e
                                .split(`,`)
                                .map((e) => e.trim())
                                .filter(Boolean),
                            display: (e) =>
                              Array.isArray(e) ? e.join(`, `) : e,
                          },
                          {
                            key: `readTime`,
                            label: `Read Time (minutes)`,
                            ph: `5`,
                          },
                          {
                            key: `publishedAt`,
                            label: `Published Date`,
                            type: `date`,
                          },
                        ],
                        defaultItem: {
                          title: ``,
                          topic: `Graphic Design`,
                          excerpt: ``,
                          content: ``,
                          coverUrl: ``,
                          tags: [],
                          readTime: `5`,
                          publishedAt: new Date().toISOString().split(`T`)[0],
                          hidden: !1,
                        },
                        displayKey: `title`,
                        subKey: `topic`,
                      }),
                    I === `faq` &&
                      (0, v.jsxs)(`div`, {
                        className: b.card,
                        children: [
                          (0, v.jsx)(`h3`, { children: `❓ FAQ Management` }),
                          (0, v.jsx)(`p`, {
                            style: {
                              color: `var(--gray)`,
                              fontSize: `0.85rem`,
                              marginBottom: `1.5rem`,
                            },
                            children: `প্রতিটি page এর FAQ আলাদাভাবে manage করুন। Changes save করলে সব page এ দেখাবে।`,
                          }),
                          [`home`, `services`, `about`, `contact`].map((e) =>
                            (0, v.jsxs)(
                              `div`,
                              {
                                style: { marginBottom: `2rem` },
                                children: [
                                  (0, v.jsxs)(`div`, {
                                    style: {
                                      display: `flex`,
                                      alignItems: `center`,
                                      gap: `10px`,
                                      marginBottom: `1rem`,
                                    },
                                    children: [
                                      (0, v.jsx)(`h4`, {
                                        style: {
                                          margin: 0,
                                          textTransform: `capitalize`,
                                          fontFamily: `var(--font-display)`,
                                        },
                                        children:
                                          e === `home`
                                            ? `🏠 Homepage`
                                            : e === `services`
                                              ? `⚙️ Services`
                                              : e === `about`
                                                ? `👤 About`
                                                : `📩 Contact`,
                                      }),
                                      (0, v.jsx)(`button`, {
                                        className: b.addBtn,
                                        onClick: () => {
                                          let t = i({}, M.faq || {});
                                          (t[e] || (t[e] = []),
                                            (t[e] = [
                                              ...t[e],
                                              {
                                                id: `f${e}_${Date.now()}`,
                                                q: `নতুন প্রশ্ন`,
                                                a: `উত্তর এখানে লিখুন`,
                                                hidden: !1,
                                              },
                                            ]),
                                            J(`faq`, t));
                                        },
                                        children: `+ Add FAQ`,
                                      }),
                                    ],
                                  }),
                                  (0, v.jsx)(P, {
                                    title: `FAQ`,
                                    listKey: `faq_${e}`,
                                    data: {
                                      [`faq_${e}`]: (M.faq || {})[e] || [],
                                    },
                                    addItem: () => {},
                                    removeItem: (t, n) => {
                                      let r = i({}, M.faq || {});
                                      ((r[e] = (r[e] || []).filter(
                                        (e) => e.id !== n,
                                      )),
                                        J(`faq`, r));
                                    },
                                    toggleHidden: (t, n) => {
                                      let r = i({}, M.faq || {});
                                      ((r[e] = (r[e] || []).map((e) =>
                                        e.id === n
                                          ? i(
                                              i({}, e),
                                              {},
                                              { hidden: !e.hidden },
                                            )
                                          : e,
                                      )),
                                        J(`faq`, r));
                                    },
                                    editItem: (t, n, r, a) => {
                                      let o = i({}, M.faq || {});
                                      ((o[e] = (o[e] || []).map((e) =>
                                        e.id === n
                                          ? i(i({}, e), {}, { [r]: a })
                                          : e,
                                      )),
                                        J(`faq`, o));
                                    },
                                    fields: [
                                      {
                                        key: `q`,
                                        label: `Question (প্রশ্ন)`,
                                        ph: `আপনার প্রশ্ন লিখুন`,
                                      },
                                      {
                                        key: `a`,
                                        label: `Answer (উত্তর)`,
                                        type: `textarea`,
                                        ph: `উত্তর এখানে লিখুন`,
                                      },
                                    ],
                                    defaultItem: { q: ``, a: ``, hidden: !1 },
                                    displayKey: `q`,
                                    subKey: `a`,
                                    hideAddBtn: !0,
                                  }),
                                ],
                              },
                              e,
                            ),
                          ),
                        ],
                      }),
                    I === `messages` && (0, v.jsx)(ee, {}),
                    I === `hero` &&
                      (0, v.jsxs)(`div`, {
                        className: b.card,
                        children: [
                          (0, v.jsxs)(`h3`, {
                            children: [
                              `Hero Section `,
                              (0, v.jsx)(`span`, {
                                className: b.optNote,
                                children: `— all fields optional`,
                              }),
                            ],
                          }),
                          (0, v.jsx)(re, {
                            label: `Profile Photo`,
                            url: (_ = M.hero) == null ? void 0 : _.photoUrl,
                            onUrl: (e) => Y(`photoUrl`, e),
                          }),
                          (0, v.jsx)(k, {
                            label: `Typewriter Roles (comma-separated)`,
                            children: (0, v.jsx)(`input`, {
                              className: b.input,
                              value:
                                ((y = M.hero) == null ||
                                (y = y.typewriterTexts) == null
                                  ? void 0
                                  : y.join(`, `)) || ``,
                              onChange: (e) =>
                                Y(
                                  `typewriterTexts`,
                                  e.target.value
                                    .split(`,`)
                                    .map((e) => e.trim()),
                                ),
                            }),
                          }),
                          (0, v.jsx)(ne, {
                            label: `Description`,
                            value:
                              ((x = M.hero) == null ? void 0 : x.description) ||
                              ``,
                            onChange: (e) => Y(`description`, e.target.value),
                            rows: 3,
                          }),
                          (0, v.jsxs)(`div`, {
                            className: b.row3,
                            children: [
                              (0, v.jsx)(A, {
                                label: `Years of Exp.`,
                                type: `number`,
                                value:
                                  ((S = M.hero) == null
                                    ? void 0
                                    : S.statYears) || ``,
                                onChange: (e) =>
                                  Y(`statYears`, +e.target.value),
                              }),
                              (0, v.jsx)(A, {
                                label: `Projects Done`,
                                type: `number`,
                                value:
                                  ((C = M.hero) == null
                                    ? void 0
                                    : C.statProjects) || ``,
                                onChange: (e) =>
                                  Y(`statProjects`, +e.target.value),
                              }),
                              (0, v.jsx)(A, {
                                label: `Happy Clients`,
                                type: `number`,
                                value:
                                  ((w = M.hero) == null
                                    ? void 0
                                    : w.statClients) || ``,
                                onChange: (e) =>
                                  Y(`statClients`, +e.target.value),
                              }),
                            ],
                          }),
                          (0, v.jsx)(A, {
                            label: `CV Download URL`,
                            value:
                              ((T = M.hero) == null ? void 0 : T.cvLink) || ``,
                            onChange: (e) => Y(`cvLink`, e.target.value),
                            placeholder: `https://drive.google.com/uc?id=...`,
                          }),
                        ],
                      }),
                    I === `about` &&
                      (0, v.jsxs)(`div`, {
                        className: b.card,
                        children: [
                          (0, v.jsxs)(`h3`, {
                            children: [
                              `About Section `,
                              (0, v.jsx)(`span`, {
                                className: b.optNote,
                                children: `— all fields optional`,
                              }),
                            ],
                          }),
                          (0, v.jsx)(re, {
                            label: `About Photo`,
                            url: (E = M.about) == null ? void 0 : E.photoUrl,
                            onUrl: (e) => He(`photoUrl`, e),
                          }),
                          (0, v.jsx)(ne, {
                            label: `Bio Paragraph 1`,
                            value:
                              ((D = M.about) == null ? void 0 : D.bio1) || ``,
                            onChange: (e) => He(`bio1`, e.target.value),
                            rows: 4,
                          }),
                          (0, v.jsx)(ne, {
                            label: `Bio Paragraph 2`,
                            value:
                              ((ie = M.about) == null ? void 0 : ie.bio2) || ``,
                            onChange: (e) => He(`bio2`, e.target.value),
                            rows: 4,
                          }),
                          (0, v.jsx)(A, {
                            label: `Skill Tags (comma-separated)`,
                            value:
                              ((j = M.about) == null || (j = j.tags) == null
                                ? void 0
                                : j.join(`, `)) || ``,
                            onChange: (e) =>
                              He(
                                `tags`,
                                e.target.value.split(`,`).map((e) => e.trim()),
                              ),
                          }),
                        ],
                      }),
                    I === `services` &&
                      (0, v.jsx)(P, {
                        title: `Service`,
                        listKey: `services`,
                        data: M,
                        addItem: X,
                        removeItem: Z,
                        toggleHidden: Q,
                        editItem: $,
                        fields: [
                          {
                            key: `title`,
                            label: `Service Title`,
                            ph: `e.g. Graphic Design`,
                          },
                          {
                            key: `icon`,
                            label: `FontAwesome Icon`,
                            ph: `fas fa-palette`,
                          },
                          {
                            key: `desc`,
                            label: `Description`,
                            type: `textarea`,
                          },
                        ],
                        defaultItem: {
                          title: ``,
                          icon: `fas fa-star`,
                          desc: ``,
                          hidden: !1,
                        },
                        displayKey: `title`,
                        subKey: `icon`,
                      }),
                    I === `experience` &&
                      (0, v.jsx)(P, {
                        title: `Work Experience`,
                        listKey: `experience`,
                        data: M,
                        addItem: X,
                        removeItem: Z,
                        toggleHidden: Q,
                        editItem: $,
                        fields: [
                          {
                            key: `role`,
                            label: `Job Title`,
                            ph: `e.g. Creative Director`,
                          },
                          {
                            key: `company`,
                            label: `Company`,
                            ph: `e.g. VIVID`,
                          },
                          {
                            key: `period`,
                            label: `Period`,
                            ph: `e.g. 2019 – 2024`,
                          },
                          {
                            key: `desc`,
                            label: `Description`,
                            type: `textarea`,
                          },
                          {
                            key: `tags`,
                            label: `Tags (comma-separated)`,
                            transform: (e) => e.split(`,`).map((e) => e.trim()),
                            display: (e) =>
                              Array.isArray(e) ? e.join(`, `) : e,
                          },
                        ],
                        defaultItem: {
                          role: ``,
                          company: ``,
                          period: ``,
                          desc: ``,
                          tags: [],
                          hidden: !1,
                        },
                        displayKey: `role`,
                        subKey: `company`,
                      }),
                    I === `courses` &&
                      (0, v.jsx)(P, {
                        title: `Course`,
                        listKey: `courses`,
                        data: M,
                        addItem: X,
                        removeItem: Z,
                        toggleHidden: Q,
                        editItem: $,
                        fields: [
                          {
                            key: `title`,
                            label: `Course / Training Title`,
                            ph: `Adobe Illustrator Masterclass`,
                          },
                          {
                            key: `institute`,
                            label: `Institute / Platform`,
                            ph: `Udemy, Coursera, Local Institute...`,
                          },
                          { key: `period`, label: `Year / Period`, ph: `2022` },
                          {
                            key: `cert`,
                            label: `Certificate / Grade (optional)`,
                            ph: `Certificate of Completion`,
                          },
                          {
                            key: `desc`,
                            label: `Description (optional)`,
                            type: `textarea`,
                          },
                          {
                            key: `tags`,
                            label: `Skills (comma-separated)`,
                            ph: `Illustrator, Vector Design, Typography`,
                            transform: (e) =>
                              e
                                .split(`,`)
                                .map((e) => e.trim())
                                .filter(Boolean),
                            display: (e) =>
                              Array.isArray(e) ? e.join(`, `) : e,
                          },
                        ],
                        defaultItem: {
                          title: ``,
                          institute: ``,
                          period: ``,
                          cert: ``,
                          desc: ``,
                          tags: [],
                          hidden: !1,
                        },
                        displayKey: `title`,
                        subKey: `institute`,
                      }),
                    I === `education` &&
                      (0, v.jsx)(P, {
                        title: `Education`,
                        listKey: `education`,
                        data: M,
                        addItem: X,
                        removeItem: Z,
                        toggleHidden: Q,
                        editItem: $,
                        fields: [
                          {
                            key: `degree`,
                            label: `Degree / Certificate`,
                            ph: `e.g. BBA Accounting`,
                          },
                          {
                            key: `institution`,
                            label: `Institution`,
                            ph: `e.g. University Name`,
                          },
                          {
                            key: `period`,
                            label: `Year / Period`,
                            ph: `e.g. 2020`,
                          },
                          {
                            key: `grade`,
                            label: `Grade / GPA`,
                            ph: `e.g. GPA 4.17`,
                          },
                        ],
                        defaultItem: {
                          degree: ``,
                          institution: ``,
                          period: ``,
                          grade: ``,
                          hidden: !1,
                        },
                        displayKey: `degree`,
                        subKey: `institution`,
                      }),
                    I === `portfolio` &&
                      (0, v.jsx)(le, {
                        data: M,
                        addItem: X,
                        removeItem: Z,
                        toggleHidden: Q,
                        editItem: $,
                      }),
                    I === `skills` &&
                      (0, v.jsx)(P, {
                        title: `Skill`,
                        listKey: `skills`,
                        data: M,
                        addItem: X,
                        removeItem: Z,
                        toggleHidden: () => {},
                        editItem: $,
                        noHide: !0,
                        fields: [
                          {
                            key: `name`,
                            label: `Skill Name`,
                            ph: `e.g. Adobe Illustrator`,
                          },
                          {
                            key: `pct`,
                            label: `Proficiency %`,
                            type: `number`,
                          },
                          {
                            key: `cat`,
                            label: `Category`,
                            type: `select`,
                            options: [
                              { v: `design`, l: `Design Tools` },
                              { v: `ai`, l: `AI & Technology` },
                              { v: `office`, l: `Office & Docs` },
                              { v: `soft`, l: `Soft Skills` },
                            ],
                          },
                        ],
                        defaultItem: { name: ``, pct: 85, cat: `design` },
                        displayKey: `name`,
                        subKey: `pct`,
                      }),
                    I === `testimonials` &&
                      (0, v.jsx)(P, {
                        title: `Testimonial`,
                        listKey: `testimonials`,
                        data: M,
                        addItem: X,
                        removeItem: Z,
                        toggleHidden: Q,
                        editItem: $,
                        fields: [
                          { key: `name`, label: `Client Name`, ph: `John Doe` },
                          {
                            key: `role`,
                            label: `Role & Company`,
                            ph: `CEO, Company — Country`,
                          },
                          {
                            key: `text`,
                            label: `Review Text`,
                            type: `textarea`,
                          },
                          {
                            key: `stars`,
                            label: `Stars (1–5)`,
                            type: `number`,
                          },
                          {
                            key: `platform`,
                            label: `Platform`,
                            type: `select`,
                            options: [
                              { v: `fiverr`, l: `Fiverr` },
                              { v: `upwork`, l: `Upwork` },
                              { v: `behance`, l: `Behance` },
                              { v: `linkedin`, l: `LinkedIn` },
                              { v: `google`, l: `Google` },
                              { v: `direct`, l: `Direct Client` },
                              { v: `other`, l: `Other` },
                            ],
                          },
                          {
                            key: `profileUrl`,
                            label: `Client Profile / Review URL (optional)`,
                            ph: `https://fiverr.com/...`,
                          },
                        ],
                        defaultItem: {
                          name: ``,
                          role: ``,
                          text: ``,
                          stars: 5,
                          platform: `fiverr`,
                          profileUrl: ``,
                          hidden: !1,
                        },
                        displayKey: `name`,
                        subKey: `role`,
                      }),
                    I === `platforms` &&
                      (0, v.jsx)(P, {
                        title: `Review Platform`,
                        listKey: `platformLinks`,
                        data: M,
                        addItem: X,
                        removeItem: Z,
                        toggleHidden: Q,
                        editItem: $,
                        fields: [
                          {
                            key: `label`,
                            label: `Button Label`,
                            ph: `See My Fiverr Reviews`,
                          },
                          {
                            key: `platform`,
                            label: `Platform`,
                            type: `select`,
                            options: [
                              { v: `fiverr`, l: `Fiverr` },
                              { v: `upwork`, l: `Upwork` },
                              { v: `behance`, l: `Behance` },
                              { v: `linkedin`, l: `LinkedIn` },
                              { v: `google`, l: `Google` },
                              { v: `direct`, l: `Direct` },
                              { v: `other`, l: `Other` },
                            ],
                          },
                          {
                            key: `url`,
                            label: `Profile/Review Page URL`,
                            ph: `https://fiverr.com/yourprofile/reviews`,
                          },
                        ],
                        defaultItem: {
                          label: ``,
                          platform: `fiverr`,
                          url: ``,
                          hidden: !1,
                        },
                        displayKey: `label`,
                        subKey: `platform`,
                      }),
                    I === `fbpages` &&
                      (0, v.jsx)(P, {
                        title: `Facebook Page`,
                        listKey: `facebookPages`,
                        data: M,
                        addItem: X,
                        removeItem: Z,
                        toggleHidden: Q,
                        editItem: $,
                        fields: [
                          {
                            key: `name`,
                            label: `Page Name`,
                            ph: `My Design Studio`,
                          },
                          {
                            key: `url`,
                            label: `Facebook Page URL`,
                            ph: `https://facebook.com/page`,
                          },
                          {
                            key: `followers`,
                            label: `Followers (e.g. 5.2K)`,
                            ph: `5.2K`,
                          },
                          {
                            key: `category`,
                            label: `Category`,
                            ph: `Design Studio`,
                          },
                          {
                            key: `coverUrl`,
                            label: `Cover Image URL`,
                            ph: `https://...`,
                          },
                        ],
                        defaultItem: {
                          name: ``,
                          url: ``,
                          followers: `0`,
                          category: ``,
                          coverUrl: ``,
                          hidden: !1,
                        },
                        displayKey: `name`,
                        subKey: `category`,
                      }),
                    I === `social` &&
                      (0, v.jsxs)(`div`, {
                        className: b.card,
                        children: [
                          (0, v.jsxs)(`h3`, {
                            children: [
                              `Social Media & Contact `,
                              (0, v.jsx)(`span`, {
                                className: b.optNote,
                                children: `— all optional`,
                              }),
                            ],
                          }),
                          [
                            {
                              k: `fb`,
                              l: `Facebook URL`,
                              ph: `https://facebook.com/...`,
                            },
                            {
                              k: `li`,
                              l: `LinkedIn URL`,
                              ph: `https://linkedin.com/in/...`,
                            },
                            {
                              k: `ig`,
                              l: `Instagram URL`,
                              ph: `https://instagram.com/...`,
                            },
                            {
                              k: `beh`,
                              l: `Behance URL`,
                              ph: `https://behance.net/...`,
                            },
                            {
                              k: `wa`,
                              l: `WhatsApp Number (with +880)`,
                              ph: `+8801731186929`,
                            },
                            {
                              k: `yt`,
                              l: `YouTube Channel URL`,
                              ph: `https://youtube.com/@...`,
                            },
                          ].map(({ k: e, l: t, ph: n }) => {
                            var r;
                            return (0, v.jsx)(
                              A,
                              {
                                label: t,
                                value:
                                  ((r = M.social) == null ? void 0 : r[e]) ||
                                  ``,
                                onChange: (t) =>
                                  J(
                                    `social`,
                                    i(
                                      i({}, M.social),
                                      {},
                                      { [e]: t.target.value },
                                    ),
                                  ),
                                placeholder: n,
                              },
                              e,
                            );
                          }),
                        ],
                      }),
                    I === `visibility` &&
                      (0, v.jsxs)(`div`, {
                        className: b.card,
                        children: [
                          (0, v.jsx)(`h3`, { children: `Section Visibility` }),
                          (0, v.jsx)(`p`, {
                            className: b.hint,
                            children: `Show or hide entire sections on the website.`,
                          }),
                          [
                            {
                              key: `experience`,
                              label: `Work Experience Section`,
                            },
                            { key: `education`, label: `Education Section` },
                            {
                              key: `facebookPages`,
                              label: `Facebook Pages Section`,
                            },
                          ].map(({ key: e, label: t }) => {
                            var n;
                            let r =
                              ((n = M.sectionVisibility) == null
                                ? void 0
                                : n[e]) !== !1;
                            return (0, v.jsxs)(
                              `div`,
                              {
                                className: b.toggleRow,
                                children: [
                                  (0, v.jsx)(`span`, { children: t }),
                                  (0, v.jsxs)(`button`, {
                                    className: `${b.toggle} ${r ? b.toggleOn : b.toggleOff}`,
                                    onClick: () =>
                                      J(
                                        `sectionVisibility`,
                                        i(
                                          i({}, M.sectionVisibility),
                                          {},
                                          { [e]: !r },
                                        ),
                                      ),
                                    children: [
                                      (0, v.jsx)(`i`, {
                                        className: `fas fa-${r ? `eye` : `eye-slash`}`,
                                      }),
                                      ` `,
                                      r ? `Visible` : `Hidden`,
                                    ],
                                  }),
                                ],
                              },
                              e,
                            );
                          }),
                        ],
                      }),
                    I === `theme` && (0, v.jsx)(oe, {}),
                    I === `gemini` &&
                      (0, v.jsxs)(`div`, {
                        children: [
                          (0, v.jsxs)(`div`, {
                            className: b.card,
                            children: [
                              (0, v.jsx)(`h3`, {
                                children: `🤖 AI Keys Status`,
                              }),
                              (0, v.jsxs)(`div`, {
                                style: {
                                  display: `flex`,
                                  flexDirection: `column`,
                                  gap: `10px`,
                                },
                                children: [
                                  (0, v.jsxs)(`div`, {
                                    className: b.keyStatusRow,
                                    children: [
                                      (0, v.jsx)(`span`, {
                                        className: b.keyStatusDot,
                                        style: {
                                          background:
                                            F != null && F.groq
                                              ? `#22c55e`
                                              : `#f59e0b`,
                                        },
                                      }),
                                      (0, v.jsxs)(`span`, {
                                        children: [
                                          (0, v.jsx)(`b`, {
                                            children: `Groq AI (Content):`,
                                          }),
                                          ` `,
                                          F != null && F.groq
                                            ? `Active ...${F.groq.slice(-6)}`
                                            : `Not set`,
                                        ],
                                      }),
                                      (F == null ? void 0 : F.groq) &&
                                        (0, v.jsx)(`button`, {
                                          className: b.clearKeyBtn,
                                          onClick: () => q(`groq`),
                                          children: `Clear`,
                                        }),
                                    ],
                                  }),
                                  (0, v.jsxs)(`div`, {
                                    className: b.keyStatusRow,
                                    children: [
                                      (0, v.jsx)(`span`, {
                                        className: b.keyStatusDot,
                                        style: {
                                          background:
                                            F != null && F.gemini
                                              ? `#22c55e`
                                              : `#f59e0b`,
                                        },
                                      }),
                                      (0, v.jsxs)(`span`, {
                                        children: [
                                          (0, v.jsx)(`b`, {
                                            children: `Google AI (Code):`,
                                          }),
                                          ` `,
                                          F != null && F.gemini
                                            ? `Active ...${F.gemini.slice(-6)}`
                                            : `Not set`,
                                        ],
                                      }),
                                      (F == null ? void 0 : F.gemini) &&
                                        (0, v.jsx)(`button`, {
                                          className: b.clearKeyBtn,
                                          onClick: () => q(`gemini`),
                                          children: `Clear`,
                                        }),
                                    ],
                                  }),
                                  (0, v.jsxs)(`div`, {
                                    className: b.keyStatusRow,
                                    children: [
                                      (0, v.jsx)(`span`, {
                                        className: b.keyStatusDot,
                                        style: {
                                          background:
                                            F != null && F.openrouter
                                              ? `#22c55e`
                                              : `#f59e0b`,
                                        },
                                      }),
                                      (0, v.jsxs)(`span`, {
                                        children: [
                                          (0, v.jsx)(`b`, {
                                            children: `OpenRouter (Backup):`,
                                          }),
                                          ` `,
                                          F != null && F.openrouter
                                            ? `Active ...${F.openrouter.slice(-6)}`
                                            : `Not set`,
                                        ],
                                      }),
                                      (F == null ? void 0 : F.openrouter) &&
                                        (0, v.jsx)(`button`, {
                                          className: b.clearKeyBtn,
                                          onClick: () => q(`openrouter`),
                                          children: `Clear`,
                                        }),
                                    ],
                                  }),
                                  (0, v.jsxs)(`div`, {
                                    className: b.keyStatusRow,
                                    children: [
                                      (0, v.jsx)(`span`, {
                                        className: b.keyStatusDot,
                                        style: {
                                          background:
                                            F != null && F.gh_token
                                              ? `#22c55e`
                                              : `#f59e0b`,
                                        },
                                      }),
                                      (0, v.jsxs)(`span`, {
                                        children: [
                                          (0, v.jsx)(`b`, {
                                            children: `GitHub Token:`,
                                          }),
                                          ` `,
                                          F != null && F.gh_token
                                            ? `Active ...${F.gh_token.slice(-6)}`
                                            : `Not set`,
                                        ],
                                      }),
                                      (F == null ? void 0 : F.gh_token) &&
                                        (0, v.jsx)(`button`, {
                                          className: b.clearKeyBtn,
                                          onClick: () => q(`gh_token`),
                                          children: `Clear`,
                                        }),
                                    ],
                                  }),
                                  (0, v.jsxs)(`div`, {
                                    className: b.keyStatusRow,
                                    children: [
                                      (0, v.jsx)(`span`, {
                                        className: b.keyStatusDot,
                                        style: {
                                          background:
                                            F != null && F.gh_repo
                                              ? `#22c55e`
                                              : `#f59e0b`,
                                        },
                                      }),
                                      (0, v.jsxs)(`span`, {
                                        children: [
                                          (0, v.jsx)(`b`, {
                                            children: `GitHub Repo:`,
                                          }),
                                          ` `,
                                          F != null && F.gh_repo
                                            ? `Active (${F.gh_repo})`
                                            : `Not set (Default: binashad7-bit/portfolio-alamin)`,
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, v.jsxs)(`div`, {
                                    className: b.keyStatusRow,
                                    children: [
                                      (0, v.jsx)(`span`, {
                                        className: b.keyStatusDot,
                                        style: {
                                          background:
                                            F != null && F.emailjs
                                              ? `#22c55e`
                                              : `#f59e0b`,
                                        },
                                      }),
                                      (0, v.jsxs)(`span`, {
                                        children: [
                                          (0, v.jsx)(`b`, {
                                            children: `EmailJS Key:`,
                                          }),
                                          ` `,
                                          F != null && F.emailjs
                                            ? `Active ...${F.emailjs.slice(-6)}`
                                            : `Not set`,
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, v.jsxs)(`div`, {
                                    className: b.keyStatusRow,
                                    children: [
                                      (0, v.jsx)(`span`, {
                                        className: b.keyStatusDot,
                                        style: {
                                          background:
                                            F != null && F.emailjs_service
                                              ? `#22c55e`
                                              : `#f59e0b`,
                                        },
                                      }),
                                      (0, v.jsxs)(`span`, {
                                        children: [
                                          (0, v.jsx)(`b`, {
                                            children: `Service ID:`,
                                          }),
                                          ` `,
                                          F != null && F.emailjs_service
                                            ? `Active (${F.emailjs_service})`
                                            : `Not set`,
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, v.jsxs)(`div`, {
                                    className: b.keyStatusRow,
                                    children: [
                                      (0, v.jsx)(`span`, {
                                        className: b.keyStatusDot,
                                        style: {
                                          background:
                                            F != null &&
                                            F.emailjs_contact_template
                                              ? `#22c55e`
                                              : `#f59e0b`,
                                        },
                                      }),
                                      (0, v.jsxs)(`span`, {
                                        children: [
                                          (0, v.jsx)(`b`, {
                                            children: `Contact Template:`,
                                          }),
                                          ` `,
                                          F != null &&
                                          F.emailjs_contact_template
                                            ? `Active (${F.emailjs_contact_template})`
                                            : `Not set`,
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, v.jsxs)(`div`, {
                                    className: b.keyStatusRow,
                                    children: [
                                      (0, v.jsx)(`span`, {
                                        className: b.keyStatusDot,
                                        style: {
                                          background:
                                            F != null && F.emailjs_nl_template
                                              ? `#22c55e`
                                              : `#f59e0b`,
                                        },
                                      }),
                                      (0, v.jsxs)(`span`, {
                                        children: [
                                          (0, v.jsx)(`b`, {
                                            children: `NL Template:`,
                                          }),
                                          ` `,
                                          F != null && F.emailjs_nl_template
                                            ? `Active (${F.emailjs_nl_template})`
                                            : `Not set`,
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, v.jsxs)(`div`, {
                                    className: b.keyStatusRow,
                                    children: [
                                      (0, v.jsx)(`span`, {
                                        className: b.keyStatusDot,
                                        style: {
                                          background:
                                            F != null && F.emailjs_sub_template
                                              ? `#22c55e`
                                              : `#f59e0b`,
                                        },
                                      }),
                                      (0, v.jsxs)(`span`, {
                                        children: [
                                          (0, v.jsx)(`b`, {
                                            children: `Sub Template:`,
                                          }),
                                          ` `,
                                          F != null && F.emailjs_sub_template
                                            ? `Active (${F.emailjs_sub_template})`
                                            : `Not set`,
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, v.jsxs)(`div`, {
                                    className: b.keyStatusRow,
                                    children: [
                                      (0, v.jsx)(`span`, {
                                        className: b.keyStatusDot,
                                        style: {
                                          background:
                                            F != null && F.ai_avatar
                                              ? `#22c55e`
                                              : `#f59e0b`,
                                        },
                                      }),
                                      (0, v.jsxs)(`span`, {
                                        children: [
                                          (0, v.jsx)(`b`, {
                                            children: `AI Avatar:`,
                                          }),
                                          ` `,
                                          F != null && F.ai_avatar
                                            ? `Custom image set`
                                            : `Default (Misir Ali)`,
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, v.jsxs)(`div`, {
                                    className: b.keyStatusRow,
                                    children: [
                                      (0, v.jsx)(`span`, {
                                        className: b.keyStatusDot,
                                        style: {
                                          background:
                                            F != null && F.imgbb_key
                                              ? `#22c55e`
                                              : `#f59e0b`,
                                        },
                                      }),
                                      (0, v.jsxs)(`span`, {
                                        children: [
                                          (0, v.jsx)(`b`, {
                                            children: `ImgBB Key:`,
                                          }),
                                          ` `,
                                          F != null && F.imgbb_key
                                            ? `Active ...${F.imgbb_key.slice(-6)}`
                                            : `Using default`,
                                        ],
                                      }),
                                      (F == null ? void 0 : F.imgbb_key) &&
                                        (0, v.jsx)(`button`, {
                                          className: b.clearKeyBtn,
                                          onClick: () => q(`imgbb_key`),
                                          children: `Clear`,
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, v.jsx)(`p`, {
                                className: b.hint,
                                style: { marginTop: `0.8rem` },
                                children: `✅ Keys Firebase এ save হয় — সব device এ sync হয়।`,
                              }),
                            ],
                          }),
                          (0, v.jsxs)(`div`, {
                            className: b.card,
                            children: [
                              (0, v.jsx)(`h3`, {
                                children: `🔑 Update API Keys`,
                              }),
                              (0, v.jsx)(k, {
                                label: `Groq API Key (Content AI — লেখালেখির জন্য)`,
                                children: (0, v.jsx)(`input`, {
                                  className: b.input,
                                  type: `password`,
                                  value: L,
                                  onChange: (e) => ye(e.target.value),
                                  placeholder: `gsk_... (console.groq.com থেকে নাও — Free!)`,
                                }),
                              }),
                              (0, v.jsx)(k, {
                                label: `Google AI API Key (Code AI — feature implement এর জন্য)`,
                                children: (0, v.jsx)(`input`, {
                                  className: b.input,
                                  type: `password`,
                                  value: R,
                                  onChange: (e) => be(e.target.value),
                                  placeholder: `AIzaSy... (aistudio.google.com/apikey থেকে নাও — Free!)`,
                                }),
                              }),
                              (0, v.jsx)(k, {
                                label: `OpenRouter API Key (Ultimate Backup — Mistral/Llama/Free models)`,
                                children: (0, v.jsx)(`input`, {
                                  className: b.input,
                                  type: `password`,
                                  value: V,
                                  onChange: (e) => Ce(e.target.value),
                                  placeholder: `sk-or-v1-... (openrouter.ai থেকে নাও)`,
                                }),
                              }),
                              (0, v.jsx)(k, {
                                label: `GitHub Personal Access Token (for Code AI push/deploy)`,
                                children: (0, v.jsx)(`input`, {
                                  className: b.input,
                                  type: `password`,
                                  value: z,
                                  onChange: (e) => xe(e.target.value),
                                  placeholder: `ghp_... (GitHub Settings -> Developer Settings -> PAT)`,
                                }),
                              }),
                              (0, v.jsx)(k, {
                                label: `GitHub Repo Path`,
                                children: (0, v.jsx)(`input`, {
                                  className: b.input,
                                  type: `text`,
                                  value: B,
                                  onChange: (e) => Se(e.target.value),
                                  placeholder: `username/repo-name (Default: binashad7-bit/portfolio-alamin)`,
                                }),
                              }),
                              (0, v.jsx)(k, {
                                label: `EmailJS Public Key`,
                                children: (0, v.jsx)(`input`, {
                                  className: b.input,
                                  type: `password`,
                                  value: H,
                                  onChange: (e) => Ee(e.target.value),
                                  placeholder: `Account → Public Key`,
                                }),
                              }),
                              (0, v.jsx)(k, {
                                label: `EmailJS Service ID`,
                                children: (0, v.jsx)(`input`, {
                                  className: b.input,
                                  type: `text`,
                                  value: U,
                                  onChange: (e) => De(e.target.value),
                                  placeholder: `e.g. service_xxxx`,
                                }),
                              }),
                              (0, v.jsx)(k, {
                                label: `Contact Form Template ID`,
                                children: (0, v.jsx)(`input`, {
                                  className: b.input,
                                  type: `text`,
                                  value: W,
                                  onChange: (e) => Oe(e.target.value),
                                  placeholder: `e.g. template_contact`,
                                }),
                              }),
                              (0, v.jsx)(k, {
                                label: `Weekly Newsletter Template ID`,
                                children: (0, v.jsx)(`input`, {
                                  className: b.input,
                                  type: `text`,
                                  value: G,
                                  onChange: (e) => ke(e.target.value),
                                  placeholder: `e.g. template_newsletter`,
                                }),
                              }),
                              (0, v.jsx)(k, {
                                label: `Subscription Confirmation Template ID`,
                                children: (0, v.jsx)(`input`, {
                                  className: b.input,
                                  type: `text`,
                                  value: K,
                                  onChange: (e) => Ae(e.target.value),
                                  placeholder: `e.g. template_welcome`,
                                }),
                              }),
                              (0, v.jsxs)(`div`, {
                                style: {
                                  marginTop: `1.5rem`,
                                  borderTop: `1px solid rgba(34,197,94,0.1)`,
                                  paddingTop: `1.5rem`,
                                },
                                children: [
                                  (0, v.jsx)(`h3`, {
                                    children: `🎨 AI Chatbot Branding`,
                                  }),
                                  (0, v.jsx)(re, {
                                    label: `AI Avatar Image`,
                                    url: je,
                                    onUrl: (e) => Me(e),
                                  }),
                                ],
                              }),
                              (0, v.jsxs)(`div`, {
                                style: { marginTop: `1rem` },
                                children: [
                                  (0, v.jsx)(`h3`, {
                                    children: `🖼️ Image Hosting`,
                                  }),
                                  (0, v.jsx)(k, {
                                    label: `ImgBB API Key (Optional — default will be used if empty)`,
                                    children: (0, v.jsx)(`input`, {
                                      className: b.input,
                                      type: `password`,
                                      value: we,
                                      onChange: (e) => Te(e.target.value),
                                      placeholder: `API Key from api.imgbb.com`,
                                    }),
                                  }),
                                ],
                              }),
                              (0, v.jsxs)(`div`, {
                                className: b.keyActions,
                                children: [
                                  _e &&
                                    (0, v.jsxs)(`span`, {
                                      className: b.savedMsg,
                                      children: [
                                        (0, v.jsx)(`i`, {
                                          className: `fas fa-check`,
                                        }),
                                        ` Saved to Firebase!`,
                                      ],
                                    }),
                                  (0, v.jsxs)(`button`, {
                                    className: b.addBtn,
                                    onClick: Ne,
                                    disabled:
                                      !L.trim() &&
                                      !R.trim() &&
                                      !z.trim() &&
                                      !B.trim() &&
                                      !V.trim() &&
                                      !H.trim() &&
                                      !U.trim() &&
                                      !W.trim() &&
                                      !G.trim() &&
                                      !K.trim(),
                                    children: [
                                      (0, v.jsx)(`i`, {
                                        className: `fas fa-cloud-upload-alt`,
                                      }),
                                      ` Save to Firebase`,
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, v.jsxs)(`div`, {
                            className: b.card,
                            children: [
                              (0, v.jsx)(`h3`, {
                                children: `📋 Free API Keys কীভাবে নেবে`,
                              }),
                              (0, v.jsxs)(`div`, {
                                className: b.aiGuideBlock,
                                children: [
                                  (0, v.jsxs)(`div`, {
                                    className: b.aiGuideTitle,
                                    style: { color: `#f97316` },
                                    children: [
                                      `🟠 Groq Key — Content AI`,
                                      (0, v.jsx)(`span`, {
                                        className: b.aiGuideBadge,
                                        style: {
                                          background: `rgba(249,115,22,0.1)`,
                                          color: `#f97316`,
                                        },
                                        children: `14,400 requests/day free`,
                                      }),
                                    ],
                                  }),
                                  (0, v.jsxs)(`div`, {
                                    className: b.setupSteps,
                                    children: [
                                      (0, v.jsxs)(`div`, {
                                        className: b.step,
                                        children: [
                                          (0, v.jsx)(`span`, { children: `1` }),
                                          (0, v.jsxs)(`span`, {
                                            children: [
                                              (0, v.jsx)(`a`, {
                                                href: `https://console.groq.com`,
                                                target: `_blank`,
                                                rel: `noreferrer`,
                                                className: b.link,
                                                children: `console.groq.com`,
                                              }),
                                              ` → Sign up`,
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, v.jsxs)(`div`, {
                                        className: b.step,
                                        children: [
                                          (0, v.jsx)(`span`, { children: `2` }),
                                          (0, v.jsx)(`span`, {
                                            children: `API Keys → Create API Key → Copy`,
                                          }),
                                        ],
                                      }),
                                      (0, v.jsxs)(`div`, {
                                        className: b.step,
                                        children: [
                                          (0, v.jsx)(`span`, { children: `3` }),
                                          (0, v.jsx)(`span`, {
                                            children: `উপরে Groq field এ paste → Save to Firebase`,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, v.jsxs)(`div`, {
                                className: b.aiGuideBlock,
                                style: { marginTop: `1rem` },
                                children: [
                                  (0, v.jsxs)(`div`, {
                                    className: b.aiGuideTitle,
                                    style: { color: `#4285F4` },
                                    children: [
                                      `🔵 Google AI Key — Code AI`,
                                      (0, v.jsx)(`span`, {
                                        className: b.aiGuideBadge,
                                        style: {
                                          background: `rgba(66,133,244,0.1)`,
                                          color: `#4285F4`,
                                        },
                                        children: `1,500 requests/day free`,
                                      }),
                                    ],
                                  }),
                                  (0, v.jsxs)(`div`, {
                                    className: b.setupSteps,
                                    children: [
                                      (0, v.jsxs)(`div`, {
                                        className: b.step,
                                        children: [
                                          (0, v.jsx)(`span`, { children: `1` }),
                                          (0, v.jsxs)(`span`, {
                                            children: [
                                              (0, v.jsx)(`a`, {
                                                href: `https://aistudio.google.com/apikey`,
                                                target: `_blank`,
                                                rel: `noreferrer`,
                                                className: b.link,
                                                children: `aistudio.google.com/apikey`,
                                              }),
                                              ` → Login`,
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, v.jsxs)(`div`, {
                                        className: b.step,
                                        children: [
                                          (0, v.jsx)(`span`, { children: `2` }),
                                          (0, v.jsxs)(`span`, {
                                            children: [
                                              `Create API key → `,
                                              (0, v.jsx)(`b`, {
                                                children: `Create in new project`,
                                              }),
                                              ` → Copy`,
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, v.jsxs)(`div`, {
                                        className: b.step,
                                        children: [
                                          (0, v.jsx)(`span`, { children: `3` }),
                                          (0, v.jsx)(`span`, {
                                            children: `উপরে Google AI field এ paste → Save to Firebase`,
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
                    I === `emailjs` &&
                      (0, v.jsxs)(`div`, {
                        className: b.card,
                        children: [
                          (0, v.jsxs)(`h3`, {
                            children: [
                              (0, v.jsx)(`i`, { className: `fas fa-bell` }),
                              ` Email Notification Setup`,
                            ],
                          }),
                          (0, v.jsxs)(`div`, {
                            className: b.guide,
                            style: { marginBottom: `1.2rem` },
                            children: [
                              (0, v.jsxs)(`p`, {
                                children: [
                                  `When a client sends a message, email notifications are sent via `,
                                  (0, v.jsx)(`b`, { children: `EmailJS` }),
                                  ` (free plan: 200 emails/month).`,
                                ],
                              }),
                              (0, v.jsxs)(`p`, {
                                children: [
                                  `📧 Notifications go to: `,
                                  (0, v.jsx)(`b`, {
                                    style: { color: `var(--green)` },
                                    children: `binashad7@gmail.com, alaminbinashadali777@gmail.com, alaminashiq46800864@gmail.com`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, v.jsxs)(`div`, {
                            className: b.setupSteps,
                            children: [
                              (0, v.jsxs)(`div`, {
                                className: b.step,
                                children: [
                                  (0, v.jsx)(`span`, { children: `1` }),
                                  ` Go to `,
                                  (0, v.jsx)(`a`, {
                                    href: `https://www.emailjs.com`,
                                    target: `_blank`,
                                    rel: `noreferrer`,
                                    className: b.link,
                                    children: `emailjs.com`,
                                  }),
                                  ` → Create free account`,
                                ],
                              }),
                              (0, v.jsxs)(`div`, {
                                className: b.step,
                                children: [
                                  (0, v.jsx)(`span`, { children: `2` }),
                                  ` Add Email Service (Gmail) → note the `,
                                  (0, v.jsx)(`b`, { children: `Service ID` }),
                                ],
                              }),
                              (0, v.jsxs)(`div`, {
                                className: b.step,
                                children: [
                                  (0, v.jsx)(`span`, { children: `3` }),
                                  ` Create Email Template → note the `,
                                  (0, v.jsx)(`b`, { children: `Template ID` }),
                                ],
                              }),
                              (0, v.jsxs)(`div`, {
                                className: b.step,
                                children: [
                                  (0, v.jsx)(`span`, { children: `4` }),
                                  ` Copy your `,
                                  (0, v.jsx)(`b`, { children: `Public Key` }),
                                  ` from Account settings`,
                                ],
                              }),
                              (0, v.jsxs)(`div`, {
                                className: b.step,
                                children: [
                                  (0, v.jsx)(`span`, { children: `5` }),
                                  ` Update `,
                                  (0, v.jsx)(`code`, {
                                    className: b.code,
                                    children: `src/firebase.js`,
                                  }),
                                  ` → replace `,
                                  (0, v.jsx)(`code`, {
                                    className: b.code,
                                    children: `YOUR_EMAILJS_PUBLIC_KEY`,
                                  }),
                                  ` and the service/template IDs`,
                                ],
                              }),
                            ],
                          }),
                          (0, v.jsxs)(`div`, {
                            className: b.noteBox,
                            children: [
                              (0, v.jsx)(`i`, {
                                className: `fas fa-info-circle`,
                              }),
                              (0, v.jsx)(`span`, {
                                children: `All messages are also stored in Firebase Firestore → Messages tab above. You can always read them there even without email setup.`,
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
      Re &&
        (0, v.jsx)(GeminiPanel, { onClose: () => ze(!1), onApply: () => {} }),
      Be && (0, v.jsx)(ClaudeEditor, { onClose: () => Ve(!1) }),
    ],
  });
}
function N({
  fields: e,
  form: t,
  setForm: n,
  onSave: r,
  onCancel: a,
  title: o,
  isEdit: s,
}) {
  function c(e) {
    let n = t[e.key];
    return e.display
      ? e.display(n)
      : Array.isArray(n)
        ? n.join(`, `)
        : n == null
          ? ``
          : n;
  }
  function l(e, t) {
    let r = e.transform ? e.transform(t) : t;
    n((t) => i(i({}, t), {}, { [e.key]: r }));
  }
  return (0, v.jsxs)(`div`, {
    className: b.inlineForm,
    "data-inline-form": `true`,
    children: [
      e.map((e) =>
        e.type === `textarea`
          ? (0, v.jsx)(
              k,
              {
                label: e.label,
                children: (0, v.jsx)(`textarea`, {
                  className: b.textarea,
                  value: c(e),
                  onChange: (t) => l(e, t.target.value),
                  rows: 3,
                  placeholder: e.ph || ``,
                }),
              },
              e.key,
            )
          : e.type === `select`
            ? (0, v.jsx)(
                k,
                {
                  label: e.label,
                  children: (0, v.jsx)(`select`, {
                    className: b.input,
                    value: t[e.key] || ``,
                    onChange: (t) => l(e, t.target.value),
                    children: e.options.map((e) =>
                      (0, v.jsx)(`option`, { value: e.v, children: e.l }, e.v),
                    ),
                  }),
                },
                e.key,
              )
            : e.type === `checkbox`
              ? (0, v.jsxs)(
                  `div`,
                  {
                    style: {
                      display: `flex`,
                      alignItems: `center`,
                      gap: `10px`,
                      margin: `0.4rem 0`,
                    },
                    children: [
                      (0, v.jsx)(`input`, {
                        type: `checkbox`,
                        checked: !!t[e.key],
                        onChange: (t) =>
                          n((n) =>
                            i(i({}, n), {}, { [e.key]: t.target.checked }),
                          ),
                        style: {
                          width: `16px`,
                          height: `16px`,
                          accentColor: `var(--green)`,
                          cursor: `pointer`,
                        },
                      }),
                      (0, v.jsx)(`label`, {
                        style: {
                          fontSize: `0.82rem`,
                          color: `var(--gray)`,
                          cursor: `pointer`,
                        },
                        children: e.label,
                      }),
                    ],
                  },
                  e.key,
                )
              : (0, v.jsx)(
                  k,
                  {
                    label: e.label,
                    children: (0, v.jsx)(`input`, {
                      className: b.input,
                      type: e.type || `text`,
                      value: c(e),
                      onChange: (t) => l(e, t.target.value),
                      placeholder: e.ph || ``,
                    }),
                  },
                  e.key,
                ),
      ),
      (0, v.jsxs)(`div`, {
        style: { display: `flex`, gap: `8px`, marginTop: `8px` },
        children: [
          (0, v.jsxs)(`button`, {
            className: b.addBtn,
            onClick: r,
            children: [
              (0, v.jsx)(`i`, { className: `fas fa-check` }),
              ` `,
              s ? `Update` : `Add ${o}`,
            ],
          }),
          (0, v.jsx)(`button`, {
            className: b.cancelEditBtn,
            onClick: a,
            children: `Cancel`,
          }),
        ],
      }),
    ],
  });
}
function P({
  title: e,
  listKey: t,
  data: n,
  fields: r,
  defaultItem: a,
  addItem: o,
  removeItem: s,
  toggleHidden: c,
  editItem: l,
  noHide: u,
  displayKey: d,
  subKey: f,
  hideAddBtn: p,
}) {
  let [m, h] = (0, g.useState)(i({}, a)),
    [_, y] = (0, g.useState)(null),
    [ee, x] = (0, g.useState)(null),
    [S, C] = (0, g.useState)(null),
    w = n[t] || [],
    T = (0, g.useRef)(null);
  (0, g.useEffect)(() => {
    function e(e) {
      T.current && !T.current.contains(e.target) && (x(null), y(null));
    }
    return (
      document.addEventListener(`mousedown`, e),
      () => document.removeEventListener(`mousedown`, e)
    );
  }, []);
  function te() {
    (o(t, i({}, m)), h(i({}, a)), y(null));
  }
  function E() {
    let e = _;
    (l(t, e, i({}, m)),
      y(null),
      h(i({}, a)),
      x(e),
      C(e),
      setTimeout(() => C(null), 1200));
  }
  function D(e) {
    let t = {};
    (r.forEach((n) => {
      var r;
      t[n.key] = (r = e[n.key]) == null ? a[n.key] : r;
    }),
      h(t),
      y(e.id),
      x(e.id));
  }
  function O() {
    (y(null), h(i({}, a)));
  }
  return (0, v.jsxs)(`div`, {
    className: b.card,
    ref: T,
    children: [
      (0, v.jsxs)(`div`, {
        className: b.listHeader,
        children: [
          (0, v.jsxs)(`h3`, {
            children: [
              e,
              `s `,
              (0, v.jsx)(`span`, {
                className: b.countBadge,
                children: w.length,
              }),
            ],
          }),
          (0, v.jsxs)(`button`, {
            className: `${b.addNewBtn} ${_ === `new` ? b.addNewActive : ``}`,
            onClick: () => {
              (y(_ === `new` ? null : `new`), x(null), h(i({}, a)));
            },
            children: [
              (0, v.jsx)(`i`, {
                className: `fas fa-${_ === `new` ? `times` : `plus`}`,
              }),
              _ === `new` ? `Cancel` : `Add ${e}`,
            ],
          }),
        ],
      }),
      _ === `new` &&
        (0, v.jsx)(N, {
          fields: r,
          form: m,
          setForm: h,
          onSave: te,
          onCancel: O,
          title: e,
          isEdit: !1,
        }),
      w.length === 0 &&
        _ !== `new` &&
        (0, v.jsxs)(`p`, {
          className: b.hint,
          children: [`No items yet. Click "Add `, e, `" to get started.`],
        }),
      w.map((n) => {
        let i = ee === n.id,
          a = _ === n.id,
          o = S === n.id;
        return (0, v.jsxs)(
          `div`,
          {
            onMouseDown: () => x(n.id),
            style: { cursor: `pointer` },
            children: [
              (0, v.jsxs)(`div`, {
                className: [
                  b.listItem,
                  n.hidden ? b.dimmed : ``,
                  i ? b.selectedItem : ``,
                  a ? b.expandedItem : ``,
                  o ? b.savedFlash : ``,
                ]
                  .filter(Boolean)
                  .join(` `),
                children: [
                  (0, v.jsxs)(`div`, {
                    className: b.listInfo,
                    style: { flex: 1, minWidth: 0 },
                    children: [
                      (0, v.jsx)(`strong`, { children: n[d] || `(untitled)` }),
                      (0, v.jsx)(`span`, {
                        children: f === `pct` ? `${n.pct}%` : n[f] || ``,
                      }),
                    ],
                  }),
                  (0, v.jsxs)(`div`, {
                    className: b.listActions,
                    children: [
                      (0, v.jsx)(`button`, {
                        className: `${b.actionBtn} ${b.editBtn} ${a ? b.editBtnActive : ``}`,
                        onMouseDown: (e) => e.stopPropagation(),
                        onClick: () => {
                          (x(n.id), a ? O() : D(n));
                        },
                        title: a ? `Close` : `Edit`,
                        children: (0, v.jsx)(`i`, {
                          className: `fas fa-${a ? `times` : `pen`}`,
                        }),
                      }),
                      !u &&
                        (0, v.jsx)(`button`, {
                          className: b.actionBtn,
                          onMouseDown: (e) => e.stopPropagation(),
                          onClick: () => {
                            (x(n.id), c(t, n.id));
                          },
                          title: n.hidden ? `Show` : `Hide`,
                          children: (0, v.jsx)(`i`, {
                            className: `fas fa-${n.hidden ? `eye` : `eye-slash`}`,
                          }),
                        }),
                      (0, v.jsx)(`button`, {
                        className: `${b.actionBtn} ${b.danger}`,
                        onMouseDown: (e) => e.stopPropagation(),
                        onClick: () => {
                          (x(n.id),
                            window.confirm(`Delete "${n[d]}"?`) && s(t, n.id));
                        },
                        title: `Delete`,
                        children: (0, v.jsx)(`i`, {
                          className: `fas fa-trash`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              a &&
                (0, v.jsx)(`div`, {
                  onMouseDown: (e) => e.stopPropagation(),
                  children: (0, v.jsx)(N, {
                    fields: r,
                    form: m,
                    setForm: h,
                    onSave: E,
                    onCancel: O,
                    title: e,
                    isEdit: !0,
                  }),
                }),
            ],
          },
          n.id,
        );
      }),
    ],
  });
}
function le({
  data: e,
  addItem: t,
  removeItem: n,
  toggleHidden: r,
  editItem: a,
}) {
  const { apiKeys } = h();
  let [o, s] = (0, g.useState)({
      title: ``,
      cat: `graphic`,
      imgUrl: ``,
      images: [],
      videoUrl: ``,
      siteUrl: ``,
      aspectRatio: `match`,
      showLiveBtn: !0,
      hidden: !1,
    }),
    [l, u] = (0, g.useState)(null),
    [d, p] = (0, g.useState)(null),
    [m, h] = (0, g.useState)(null),
    [_, y] = (0, g.useState)(!1),
    ee = (0, g.useRef)(null),
    x = e.portfolio || [];
  function S(e) {
    return C.apply(this, arguments);
  }
  function C() {
    return (
      (C = c(function* (e) {
        let t = e.target.files[0];
        if (t) {
          y(!0);
          try {
            var n;
            let e = yield f(t, (n = apiKeys) == null ? void 0 : n.imgbb_key);
            s((t) =>
              t.imgUrl
                ? i(i({}, t), {}, { images: [...(t.images || []), e.url] })
                : i(i({}, t), {}, { imgUrl: e.url }),
            );
          } catch (e) {
            alert(`Upload failed: ` + e.message);
          }
          y(!1);
        }
      })),
      C.apply(this, arguments)
    );
  }
  function w(e) {
    (u(e.id),
      p(e.id),
      s({
        title: e.title || ``,
        cat: e.cat || `graphic`,
        imgUrl: e.imgUrl || ``,
        images: e.images || [],
        videoUrl: e.videoUrl || ``,
        siteUrl: e.siteUrl || ``,
        aspectRatio: e.aspectRatio || `16:9`,
        showLiveBtn: e.showLiveBtn !== !1,
        hidden: e.hidden || !1,
      }));
  }
  function T() {
    (u(null),
      s({
        title: ``,
        cat: `graphic`,
        imgUrl: ``,
        images: [],
        videoUrl: ``,
        siteUrl: ``,
        aspectRatio: `match`,
        showLiveBtn: !0,
        hidden: !1,
      }));
  }
  function te() {
    (t(`portfolio`, i({}, o)),
      s({
        title: ``,
        cat: `graphic`,
        imgUrl: ``,
        images: [],
        videoUrl: ``,
        siteUrl: ``,
        aspectRatio: `match`,
        showLiveBtn: !0,
        hidden: !1,
      }),
      u(null));
  }
  function E() {
    let e = l;
    (a(`portfolio`, e, i({}, o)),
      u(null),
      p(e),
      h(e),
      setTimeout(() => h(null), 1200));
  }
  let D = (e, t) =>
    (0, v.jsxs)(`div`, {
      className: b.inlineForm,
      onMouseDown: (e) => e.stopPropagation(),
      children: [
        (0, v.jsxs)(`div`, {
          className: b.row2,
          children: [
            (0, v.jsx)(k, {
              label: `Project Title`,
              children: (0, v.jsx)(`input`, {
                className: b.input,
                value: o.title,
                onChange: (e) =>
                  s((t) => i(i({}, t), {}, { title: e.target.value })),
                placeholder: `Project name`,
              }),
            }),
            (0, v.jsx)(k, {
              label: `Category`,
              children: (0, v.jsxs)(`select`, {
                className: b.input,
                value: o.cat,
                onChange: (e) =>
                  s((t) => i(i({}, t), {}, { cat: e.target.value })),
                children: [
                  (0, v.jsx)(`option`, {
                    value: `graphic`,
                    children: `Graphic Design`,
                  }),
                  (0, v.jsx)(`option`, {
                    value: `web`,
                    children: `Web Design`,
                  }),
                  (0, v.jsx)(`option`, { value: `video`, children: `Video` }),
                  (0, v.jsx)(`option`, {
                    value: `ai`,
                    children: `AI Projects`,
                  }),
                  (0, v.jsx)(`option`, {
                    value: `branding`,
                    children: `Branding`,
                  }),
                ],
              }),
            }),
          ],
        }),
        (0, v.jsx)(k, {
          label: `Aspect Ratio`,
          children: (0, v.jsxs)(`select`, {
            className: b.input,
            value: o.aspectRatio || `match`,
            onChange: (e) =>
              s((t) => i(i({}, t), {}, { aspectRatio: e.target.value })),
            children: [
              (0, v.jsx)(`option`, {
                value: `match`,
                children: `✨ Match Media — auto detect from image`,
              }),
              (0, v.jsx)(`option`, {
                value: `16:9`,
                children: `16:9 — Landscape (YouTube, Web)`,
              }),
              (0, v.jsx)(`option`, {
                value: `4:3`,
                children: `4:3 — Standard Photo`,
              }),
              (0, v.jsx)(`option`, {
                value: `1:1`,
                children: `1:1 — Square (Instagram)`,
              }),
              (0, v.jsx)(`option`, {
                value: `4:5`,
                children: `4:5 — Portrait (Instagram)`,
              }),
              (0, v.jsx)(`option`, {
                value: `9:16`,
                children: `9:16 — Story / Reel`,
              }),
              (0, v.jsx)(`option`, {
                value: `3:2`,
                children: `3:2 — DSLR Photo`,
              }),
              (0, v.jsx)(`option`, {
                value: `2:3`,
                children: `2:3 — Portrait Print`,
              }),
              (0, v.jsx)(`option`, {
                value: `21:9`,
                children: `21:9 — Ultrawide Banner`,
              }),
              (0, v.jsx)(`option`, {
                value: `free`,
                children: `Free — Auto fit`,
              }),
            ],
          }),
        }),
        (0, v.jsxs)(k, {
          label: `Images (multiple add করতে পারো — slideshow হবে)`,
          children: [
            (0, v.jsxs)(`div`, {
              className: b.imgRow,
              children: [
                (0, v.jsxs)(`label`, {
                  className: b.fileBtn,
                  children: [
                    (0, v.jsx)(`i`, { className: `fas fa-upload` }),
                    ` Choose Image`,
                    (0, v.jsx)(`input`, {
                      type: `file`,
                      accept: `image/*`,
                      onChange: S,
                      style: { display: `none` },
                    }),
                  ],
                }),
                (0, v.jsx)(`input`, {
                  className: b.input,
                  value: o.imgUrl,
                  onChange: (e) =>
                    s((t) => i(i({}, t), {}, { imgUrl: e.target.value })),
                  placeholder: `Main image URL`,
                }),
              ],
            }),
            _ &&
              (0, v.jsxs)(`span`, {
                className: b.uploading,
                children: [
                  (0, v.jsx)(`i`, { className: `fas fa-spinner fa-spin` }),
                  ` Uploading…`,
                ],
              }),
            [o.imgUrl, ...(o.images || [])].filter(Boolean).length > 0 &&
              (0, v.jsx)(`div`, {
                className: b.multiImgRow,
                children: [o.imgUrl, ...(o.images || [])]
                  .filter(Boolean)
                  .map((e, t) =>
                    (0, v.jsxs)(
                      `div`,
                      {
                        className: b.multiImgThumb,
                        children: [
                          (0, v.jsx)(`img`, {
                            loading: `lazy`,
                            src: e,
                            alt: `Portfolio image preview`,
                          }),
                          (0, v.jsx)(`button`, {
                            className: b.multiImgRemove,
                            onClick: () => {
                              if (t === 0) {
                                let e = o.images || [];
                                s((t) =>
                                  i(
                                    i({}, t),
                                    {},
                                    { imgUrl: e[0] || ``, images: e.slice(1) },
                                  ),
                                );
                              } else
                                s((e) =>
                                  i(
                                    i({}, e),
                                    {},
                                    {
                                      images: (e.images || []).filter(
                                        (e, n) => n !== t - 1,
                                      ),
                                    },
                                  ),
                                );
                            },
                            children: `×`,
                          }),
                          t === 0 &&
                            (0, v.jsx)(`span`, {
                              className: b.multiImgMain,
                              children: `Main`,
                            }),
                        ],
                      },
                      t,
                    ),
                  ),
              }),
            (0, v.jsxs)(`div`, {
              style: { marginTop: `6px`, display: `flex`, gap: `6px` },
              children: [
                (0, v.jsx)(`input`, {
                  className: b.input,
                  placeholder: `Extra image URL যোগ করো…`,
                  id: `extraImgUrl`,
                  onKeyDown: (e) => {
                    e.key === `Enter` &&
                      e.target.value.trim() &&
                      (s((t) =>
                        i(
                          i({}, t),
                          {},
                          {
                            images: [
                              ...(t.images || []),
                              e.target.value.trim(),
                            ],
                          },
                        ),
                      ),
                      (e.target.value = ``));
                  },
                }),
                (0, v.jsx)(`button`, {
                  className: b.addBtn,
                  style: { whiteSpace: `nowrap`, padding: `0 12px` },
                  onClick: () => {
                    let e = document.getElementById(`extraImgUrl`);
                    e.value.trim() &&
                      (s((t) =>
                        i(
                          i({}, t),
                          {},
                          { images: [...(t.images || []), e.value.trim()] },
                        ),
                      ),
                      (e.value = ``));
                  },
                  children: `+ Add`,
                }),
              ],
            }),
            (0, v.jsx)(`p`, {
              style: {
                fontSize: `0.68rem`,
                color: `var(--gray)`,
                marginTop: `4px`,
              },
              children: `Enter চাপো বা "+ Add" click করো · Multiple images = auto slideshow`,
            }),
          ],
        }),
        (0, v.jsx)(k, {
          label: `Live Website URL`,
          children: (0, v.jsx)(`input`, {
            className: b.input,
            value: o.siteUrl,
            onChange: (e) =>
              s((t) => i(i({}, t), {}, { siteUrl: e.target.value })),
            placeholder: `https://yourproject.com`,
          }),
        }),
        (0, v.jsxs)(`div`, {
          style: {
            display: `flex`,
            alignItems: `center`,
            gap: `10px`,
            margin: `0.3rem 0 0.5rem`,
          },
          children: [
            (0, v.jsx)(`input`, {
              type: `checkbox`,
              checked: o.showLiveBtn !== !1,
              onChange: (e) =>
                s((t) => i(i({}, t), {}, { showLiveBtn: e.target.checked })),
              style: {
                width: `16px`,
                height: `16px`,
                accentColor: `var(--green)`,
                cursor: `pointer`,
              },
            }),
            (0, v.jsx)(`label`, {
              style: {
                fontSize: `0.82rem`,
                color: `var(--gray)`,
                cursor: `pointer`,
              },
              children: `"View Live" button দেখাও`,
            }),
          ],
        }),
        (0, v.jsx)(k, {
          label: `Video URL (YouTube/Vimeo)`,
          children: (0, v.jsx)(`input`, {
            className: b.input,
            value: o.videoUrl,
            onChange: (e) =>
              s((t) => i(i({}, t), {}, { videoUrl: e.target.value })),
            placeholder: `https://youtu.be/...`,
          }),
        }),
        (0, v.jsxs)(`div`, {
          style: { display: `flex`, gap: `8px`, marginTop: `8px` },
          children: [
            (0, v.jsxs)(`button`, {
              className: b.addBtn,
              onClick: e,
              children: [
                (0, v.jsx)(`i`, { className: `fas fa-check` }),
                ` Save`,
              ],
            }),
            (0, v.jsx)(`button`, {
              className: b.cancelEditBtn,
              onClick: t,
              children: `Cancel`,
            }),
          ],
        }),
      ],
    });
  return (0, v.jsx)(`div`, {
    ref: ee,
    children: (0, v.jsxs)(`div`, {
      className: b.card,
      children: [
        (0, v.jsxs)(`div`, {
          className: b.listHeader,
          children: [
            (0, v.jsxs)(`h3`, {
              children: [
                `Projects `,
                (0, v.jsx)(`span`, {
                  className: b.countBadge,
                  children: x.length,
                }),
              ],
            }),
            (0, v.jsxs)(`button`, {
              className: `${b.addNewBtn} ${l === `new` ? b.addNewActive : ``}`,
              onClick: () => {
                (u(l === `new` ? null : `new`),
                  p(null),
                  s({
                    title: ``,
                    cat: `graphic`,
                    imgUrl: ``,
                    videoUrl: ``,
                    siteUrl: ``,
                    aspectRatio: `16:9`,
                    showLiveBtn: !0,
                    hidden: !1,
                  }));
              },
              children: [
                (0, v.jsx)(`i`, {
                  className: `fas fa-${l === `new` ? `times` : `plus`}`,
                }),
                l === `new` ? `Cancel` : `Add Project`,
              ],
            }),
          ],
        }),
        l === `new` && D(te, () => u(null)),
        x.length === 0 &&
          l !== `new` &&
          (0, v.jsx)(`p`, { className: b.hint, children: `No projects yet.` }),
        x.map((e) => {
          let t = d === e.id,
            i = l === e.id,
            a = m === e.id;
          return (0, v.jsxs)(
            `div`,
            {
              onMouseDown: () => p(e.id),
              style: { cursor: `pointer` },
              children: [
                (0, v.jsxs)(`div`, {
                  className: [
                    b.listItem,
                    e.hidden ? b.dimmed : ``,
                    t ? b.selectedItem : ``,
                    i ? b.expandedItem : ``,
                    a ? b.savedFlash : ``,
                  ]
                    .filter(Boolean)
                    .join(` `),
                  children: [
                    e.imgUrl &&
                      (0, v.jsx)(`img`, {
                        loading: `lazy`,
                        src: e.imgUrl,
                        className: b.thumb,
                        alt: e.title || `Portfolio thumbnail`,
                      }),
                    (0, v.jsxs)(`div`, {
                      className: b.listInfo,
                      children: [
                        (0, v.jsx)(`strong`, {
                          children: e.title || `(untitled)`,
                        }),
                        (0, v.jsxs)(`span`, {
                          style: { fontSize: `0.72rem` },
                          children: [e.cat, ` · `, e.aspectRatio || `16:9`],
                        }),
                      ],
                    }),
                    (0, v.jsxs)(`div`, {
                      className: b.listActions,
                      children: [
                        (0, v.jsx)(`button`, {
                          className: `${b.actionBtn} ${b.editBtn} ${i ? b.editBtnActive : ``}`,
                          onMouseDown: (e) => e.stopPropagation(),
                          onClick: () => {
                            (p(e.id), i ? T() : w(e));
                          },
                          title: i ? `Close` : `Edit`,
                          children: (0, v.jsx)(`i`, {
                            className: `fas fa-${i ? `times` : `pen`}`,
                          }),
                        }),
                        (0, v.jsx)(`button`, {
                          className: b.actionBtn,
                          onMouseDown: (e) => e.stopPropagation(),
                          onClick: () => {
                            (p(e.id), r(`portfolio`, e.id));
                          },
                          title: e.hidden ? `Show` : `Hide`,
                          children: (0, v.jsx)(`i`, {
                            className: `fas fa-${e.hidden ? `eye` : `eye-slash`}`,
                          }),
                        }),
                        (0, v.jsx)(`button`, {
                          className: `${b.actionBtn} ${b.danger}`,
                          onMouseDown: (e) => e.stopPropagation(),
                          onClick: () => {
                            (p(e.id),
                              window.confirm(`Delete "${e.title}"?`) &&
                                n(`portfolio`, e.id));
                          },
                          title: `Delete`,
                          children: (0, v.jsx)(`i`, {
                            className: `fas fa-trash`,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                i &&
                  (0, v.jsx)(`div`, {
                    onMouseDown: (e) => e.stopPropagation(),
                    children: D(E, T),
                  }),
              ],
            },
            e.id,
          );
        }),
      ],
    }),
  });
}
export { ce as default };
