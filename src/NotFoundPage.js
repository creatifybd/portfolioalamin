import "./NotFoundPage.css";
import { t as e } from "./vendor.js";
import { t } from "./useReveal.js";
var n = {
    page: `_page_1oddi_1`,
    inner: `_inner_1oddi_2`,
    code: `_code_1oddi_3`,
    icon: `_icon_1oddi_4`,
    spin: `_spin_1oddi_1`,
    title: `_title_1oddi_6`,
    sub: `_sub_1oddi_7`,
    actions: `_actions_1oddi_8`,
    links: `_links_1oddi_9`,
    quickLinks: `_quickLinks_1oddi_10`,
    quickLink: `_quickLink_1oddi_10`,
  },
  r = e();
function i() {
  let e = t();
  return (0, r.jsx)(`main`, {
    className: n.page,
    children: (0, r.jsxs)(`div`, {
      ref: e,
      className: `reveal ${n.inner}`,
      children: [
        (0, r.jsx)(`div`, { className: n.code, children: `404` }),
        (0, r.jsx)(`div`, {
          className: n.icon,
          children: (0, r.jsx)(`i`, { className: `fas fa-compass` }),
        }),
        (0, r.jsx)(`h1`, { className: n.title, children: `Page Not Found` }),
        (0, r.jsx)(`p`, {
          className: n.sub,
          children: `The page you're looking for doesn't exist. It may have been removed or the URL is incorrect.`,
        }),
        (0, r.jsxs)(`div`, {
          className: n.actions,
          children: [
            (0, r.jsxs)(`a`, {
              href: `/`,
              className: `btn-primary`,
              children: [
                (0, r.jsx)(`i`, { className: `fas fa-home` }),
                ` Homepage`,
              ],
            }),
            (0, r.jsxs)(`a`, {
              href: `/portfolio`,
              className: `btn-outline`,
              children: [
                (0, r.jsx)(`i`, { className: `fas fa-eye` }),
                ` Portfolio`,
              ],
            }),
            (0, r.jsxs)(`a`, {
              href: `/contact`,
              className: `btn-outline`,
              children: [
                (0, r.jsx)(`i`, { className: `fas fa-envelope` }),
                ` Contact`,
              ],
            }),
          ],
        }),
        (0, r.jsxs)(`div`, {
          className: n.links,
          children: [
            (0, r.jsx)(`p`, { children: `Or visit these pages:` }),
            (0, r.jsx)(`div`, {
              className: n.quickLinks,
              children: [
                [`/about`, `About`],
                [`/services`, `Services`],
                [`/blog`, `Blog`],
              ].map(([e, t]) =>
                (0, r.jsx)(
                  `a`,
                  { href: e, className: n.quickLink, children: t },
                  e,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
export { i as default };
