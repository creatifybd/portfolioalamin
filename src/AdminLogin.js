import "./AdminLogin.css";
import { a as e } from "./rolldown-runtime.js";
import { f as t, t as n } from "./vendor.js";
import { x as r } from "./firebase.js";
import { O as i } from "./main.js";
var a = e(t(), 1),
  o = {
    overlay: `_overlay_1oqxq_1`,
    modal: `_modal_1oqxq_9`,
    popIn: `_popIn_1oqxq_1`,
    closeBtn: `_closeBtn_1oqxq_21`,
    lockIcon: `_lockIcon_1oqxq_29`,
    error: `_error_1oqxq_49`,
    googleBtn: `_googleBtn_1oqxq_58`,
    allowedNote: `_allowedNote_1oqxq_72`,
  },
  s = n();
function c({ onClose: e, onSuccess: t }) {
  let [n, c] = (0, a.useState)(!1),
    [l, u] = (0, a.useState)(``);
  function d() {
    return f.apply(this, arguments);
  }
  function f() {
    return (
      (f = r(function* () {
        (c(!0), u(``));
        try {
          (yield i(), t());
        } catch (e) {
          e.message === `unauthorized`
            ? u(`এই Google account এর Admin access নেই।`)
            : u(`Login failed. Please try again.`);
        }
        c(!1);
      })),
      f.apply(this, arguments)
    );
  }
  return (0, s.jsx)(`div`, {
    className: o.overlay,
    onClick: (t) => t.target === t.currentTarget && e(),
    children: (0, s.jsxs)(`div`, {
      className: o.modal,
      children: [
        (0, s.jsx)(`button`, {
          className: o.closeBtn,
          onClick: e,
          children: (0, s.jsx)(`i`, { className: `fas fa-times` }),
        }),
        (0, s.jsx)(`div`, {
          className: o.lockIcon,
          children: (0, s.jsx)(`i`, { className: `fas fa-lock` }),
        }),
        (0, s.jsx)(`h2`, { children: `Admin Access` }),
        (0, s.jsx)(`p`, {
          children: `Authorized accounts only. Sign in with your Google account to continue.`,
        }),
        l &&
          (0, s.jsxs)(`div`, {
            className: o.error,
            children: [
              (0, s.jsx)(`i`, { className: `fas fa-exclamation-circle` }),
              ` `,
              l,
            ],
          }),
        (0, s.jsx)(`button`, {
          className: o.googleBtn,
          onClick: d,
          disabled: n,
          children: n
            ? (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(`i`, { className: `fas fa-spinner fa-spin` }),
                  ` Signing in…`,
                ],
              })
            : (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsxs)(`svg`, {
                    width: `18`,
                    height: `18`,
                    viewBox: `0 0 48 48`,
                    children: [
                      (0, s.jsx)(`path`, {
                        fill: `#EA4335`,
                        d: `M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z`,
                      }),
                      (0, s.jsx)(`path`, {
                        fill: `#4285F4`,
                        d: `M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z`,
                      }),
                      (0, s.jsx)(`path`, {
                        fill: `#FBBC05`,
                        d: `M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z`,
                      }),
                      (0, s.jsx)(`path`, {
                        fill: `#34A853`,
                        d: `M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z`,
                      }),
                    ],
                  }),
                  `Continue with Google`,
                ],
              }),
        }),
        (0, s.jsxs)(`div`, {
          className: o.allowedNote,
          children: [
            (0, s.jsx)(`i`, { className: `fas fa-shield-alt` }),
            `Only authorized emails can access admin panel`,
          ],
        }),
      ],
    }),
  });
}
export { c as default };
