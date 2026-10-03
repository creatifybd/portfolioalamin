import "./HomePage.css";
import { a as e } from "./rolldown-runtime.js";
import { a as t, f as n, t as r } from "./vendor.js";
import { C as i, S as a, b as o, x as s } from "./firebase.js";
import {
  C as c,
  S as l,
  _ as u,
  a as d,
  b as f,
  c as p,
  d as m,
  f as ee,
  g as te,
  h,
  i as ne,
  j as re,
  l as ie,
  m as g,
  n as ae,
  o as oe,
  p as _,
  r as v,
  s as y,
  t as b,
  u as x,
  v as se,
  w as S,
  x as ce,
  y as le,
} from "./main.js";
import { t as C } from "./useReveal.js";
import { t as ue } from "./SEO.js";
function de(e, t) {
  let n,
    r = () => {
      let { currentTime: r } = t,
        i = (r === null ? 0 : r.value) / 100;
      (n !== i && e(i), (n = i));
    };
  return (h.preUpdate(r, !0), () => g(r));
}
function fe(...e) {
  let t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    a = e[2 + n],
    o = e[3 + n],
    s = _(i, a, o);
  return t ? s(r) : s;
}
i();
function pe(e, t, n = {}) {
  let r = e.get(),
    i = null,
    o = r,
    s,
    c = typeof r == `string` ? r.replace(/[\d.-]/g, ``) : void 0,
    l = () => {
      (i && (i.stop(), (i = null)), (e.animation = void 0));
    },
    u = () => {
      let t = me(e.get()),
        r = me(o);
      if (t === r) {
        l();
        return;
      }
      let c = i ? i.getGeneratorVelocity() : e.getVelocity();
      (l(),
        (i = new m(
          a(
            a(
              {
                keyframes: [t, r],
                velocity: c,
                type: `spring`,
                restDelta: 0.001,
                restSpeed: 0.01,
              },
              n,
            ),
            {},
            { onUpdate: s },
          ),
        )));
    },
    d = () => {
      var t, n;
      (u(),
        (e.animation = (t = i) == null ? void 0 : t),
        (n = e.events.animationStart) == null || n.notify(),
        i == null ||
          i.then(() => {
            var t;
            ((e.animation = void 0),
              (t = e.events.animationComplete) == null || t.notify());
          }));
    };
  if (
    (e.attach((e, t) => {
      ((o = e), (s = (e) => t(w(e, c))), h.postRender(d));
    }, l),
    oe(t))
  ) {
    let r = n.skipInitialAnimation === !0,
      i = t.on(`change`, (t) => {
        r ? ((r = !1), e.jump(w(t, c), !1)) : e.set(w(t, c));
      }),
      a = e.on(`destroy`, i);
    return () => {
      (i(), a());
    };
  }
  return l;
}
function w(e, t) {
  return t ? e + t : e;
}
function me(e) {
  return typeof e == `number` ? e : parseFloat(e);
}
function T(e) {
  return typeof window > `u` ? !1 : e ? x() : ie();
}
var he = 50,
  ge = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  _e = () => ({ time: 0, x: ge(), y: ge() }),
  ve = {
    x: { length: `Width`, position: `Left` },
    y: { length: `Height`, position: `Top` },
  };
function ye(e, t, n, r) {
  let i = n[t],
    { length: a, position: o } = ve[t],
    s = i.current,
    c = n.time;
  ((i.current = Math.abs(e[`scroll${o}`])),
    (i.scrollLength = e[`scroll${a}`] - e[`client${a}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = se(0, i.scrollLength, i.current)));
  let l = r - c;
  i.velocity = l > he ? 0 : u(i.current - s, l);
}
function be(e, t, n) {
  (ye(e, `x`, t, n), ye(e, `y`, t, n), (t.time = n));
}
function xe(e, t) {
  let n = { x: 0, y: 0 },
    r = e;
  for (; r && r !== t;)
    if (d(r))
      ((n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent));
    else if (r.tagName === `svg`) {
      let e = r.getBoundingClientRect();
      r = r.parentElement;
      let t = r.getBoundingClientRect();
      ((n.x += e.left - t.left), (n.y += e.top - t.top));
    } else if (r instanceof SVGGraphicsElement) {
      let { x: e, y: t } = r.getBBox();
      ((n.x += e), (n.y += t));
      let i = null,
        a = r.parentNode;
      for (; !i;) (a.tagName === `svg` && (i = a), (a = r.parentNode));
      r = i;
    } else break;
  return n;
}
var E = { start: 0, center: 0.5, end: 1 };
function Se(e, t, n = 0) {
  let r = 0;
  if ((e in E && (e = E[e]), typeof e == `string`)) {
    let t = parseFloat(e);
    e.endsWith(`px`)
      ? (r = t)
      : e.endsWith(`%`)
        ? (e = t / 100)
        : e.endsWith(`vw`)
          ? (r = (t / 100) * document.documentElement.clientWidth)
          : e.endsWith(`vh`)
            ? (r = (t / 100) * document.documentElement.clientHeight)
            : (e = t);
  }
  return (typeof e == `number` && (r = t * e), n + r);
}
var Ce = [0, 0];
function we(e, t, n, r) {
  let i = Array.isArray(e) ? e : Ce,
    a = 0,
    o = 0;
  return (
    typeof e == `number`
      ? (i = [e, e])
      : typeof e == `string` &&
        ((e = e.trim()),
        (i = e.includes(` `) ? e.split(` `) : [e, E[e] ? e : `0`])),
    (a = Se(i[0], n, r)),
    (o = Se(i[1], t)),
    a - o
  );
}
var D = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  Te = { x: 0, y: 0 };
function Ee(e) {
  return `getBBox` in e && e.tagName !== `svg`
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function De(e, t, n) {
  let { offset: r = D.All } = n,
    { target: i = e, axis: a = `y` } = n,
    o = a === `y` ? `height` : `width`,
    s = i === e ? Te : xe(i, e),
    c = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : Ee(i),
    l = { width: e.clientWidth, height: e.clientHeight };
  t[a].offset.length = 0;
  let u = !t[a].interpolate,
    d = r.length;
  for (let e = 0; e < d; e++) {
    let n = we(r[e], l[o], c[o], s[a]);
    (!u && n !== t[a].interpolatorOffsets[e] && (u = !0), (t[a].offset[e] = n));
  }
  (u &&
    ((t[a].interpolate = _(t[a].offset, ee(r), { clamp: !1 })),
    (t[a].interpolatorOffsets = [...t[a].offset])),
    (t[a].progress = ce(0, 1, t[a].interpolate(t[a].current))));
}
function Oe(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e;)
      ((n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent));
  }
  ((n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight));
}
function ke(e, t, n, r = {}) {
  return {
    measure: (t) => {
      (Oe(e, r.target, n), be(e, n, t), (r.offset || r.target) && De(e, n, r));
    },
    notify: () => t(n),
  };
}
var Ae = [`container`, `trackContentSize`],
  O = new WeakMap(),
  je = new WeakMap(),
  k = new WeakMap(),
  A = new WeakMap(),
  j = new WeakMap(),
  Me = (e) => (e === document.scrollingElement ? window : e);
function Ne(e, t = {}) {
  let { container: n = document.scrollingElement, trackContentSize: r = !1 } =
      t,
    i = o(t, Ae);
  if (!n) return le;
  let a = k.get(n);
  a || ((a = new Set()), k.set(n, a));
  let s = ke(n, e, _e(), i);
  if ((a.add(s), !O.has(n))) {
    let e = () => {
        for (let e of a) e.measure(te.timestamp);
        h.preUpdate(t);
      },
      t = () => {
        for (let e of a) e.notify();
      },
      r = () => h.read(e);
    O.set(n, r);
    let i = Me(n);
    (window.addEventListener(`resize`, r),
      n !== document.documentElement && je.set(n, ne(n, r)),
      i.addEventListener(`scroll`, r),
      r());
  }
  if (r && !j.has(n)) {
    let e = O.get(n),
      t = { width: n.scrollWidth, height: n.scrollHeight };
    A.set(n, t);
    let r = h.read(() => {
      let r = n.scrollWidth,
        i = n.scrollHeight;
      (t.width !== r || t.height !== i) && (e(), (t.width = r), (t.height = i));
    }, !0);
    j.set(n, r);
  }
  let c = O.get(n);
  return (
    h.read(c, !1, !0),
    () => {
      g(c);
      let e = k.get(n);
      if (!e || (e.delete(s), e.size)) return;
      let t = O.get(n);
      if ((O.delete(n), t)) {
        var r;
        (Me(n).removeEventListener(`scroll`, t),
          (r = je.get(n)) == null || r(),
          window.removeEventListener(`resize`, t));
      }
      let i = j.get(n);
      (i && (g(i), j.delete(n)), A.delete(n));
    }
  );
}
var Pe = [
    [D.Enter, `entry`],
    [D.Exit, `exit`],
    [D.Any, `cover`],
    [D.All, `contain`],
  ],
  M = { start: 0, end: 1 };
function Fe(e) {
  let t = e.trim().split(/\s+/);
  if (t.length !== 2) return;
  let n = M[t[0]],
    r = M[t[1]];
  if (!(n === void 0 || r === void 0)) return [n, r];
}
function Ie(e) {
  if (e.length !== 2) return;
  let t = [];
  for (let n of e)
    if (Array.isArray(n)) t.push(n);
    else if (typeof n == `string`) {
      let e = Fe(n);
      if (!e) return;
      t.push(e);
    } else return;
  return t;
}
function Le(e, t) {
  let n = Ie(e);
  if (!n) return !1;
  for (let e = 0; e < 2; e++) {
    let r = n[e],
      i = t[e];
    if (r[0] !== i[0] || r[1] !== i[1]) return !1;
  }
  return !0;
}
function N(e) {
  if (!e) return { rangeStart: `contain 0%`, rangeEnd: `contain 100%` };
  for (let [t, n] of Pe)
    if (Le(e, t)) return { rangeStart: `${n} 0%`, rangeEnd: `${n} 100%` };
}
i();
var Re = [`source`, `container`],
  P = new Map();
function F(e) {
  let t = { value: 0 };
  return {
    currentTime: t,
    cancel: Ne((n) => {
      t.value = n[e.axis].progress * 100;
    }, e),
  };
}
function I(e) {
  var t, n;
  let { source: r, container: i } = e,
    s = o(e, Re),
    { axis: c } = s;
  r && (i = r);
  let l = P.get(i);
  l || ((l = new Map()), P.set(i, l));
  let u = (t = s.target) == null ? `self` : t,
    d = l.get(u);
  d || ((d = {}), l.set(u, d));
  let f = c + ((n = s.offset) == null ? [] : n).join(`,`);
  return (
    d[f] ||
      (s.target && T(s.target)
        ? N(s.offset)
          ? (d[f] = new ViewTimeline({ subject: s.target, axis: c }))
          : (d[f] = F(a({ container: i }, s)))
        : T()
          ? (d[f] = new ScrollTimeline({ source: i, axis: c }))
          : (d[f] = F(a({ container: i }, s)))),
    d[f]
  );
}
i();
function ze(e, t) {
  let n = I(t),
    r = t.target ? N(t.offset) : void 0,
    i = t.target ? T(t.target) && !!r : T();
  return e.attachTimeline(
    a(
      a(
        { timeline: i ? n : void 0 },
        r && i && { rangeStart: r.rangeStart, rangeEnd: r.rangeEnd },
      ),
      {},
      {
        observe: (e) => (
          e.pause(),
          de((t) => {
            e.time = e.iterationDuration * t;
          }, n)
        ),
      },
    ),
  );
}
function Be(e) {
  return e.length === 2;
}
function Ve(e, t) {
  return Be(e)
    ? Ne((n) => {
        e(n[t.axis].progress, n);
      }, t)
    : de(e, I(t));
}
i();
var He = [`axis`, `container`];
function L(e, t = {}) {
  let { axis: n = `y`, container: r = document.scrollingElement } = t,
    i = o(t, He);
  if (!r) return le;
  let s = a({ axis: n, container: r }, i);
  return typeof e == `function` ? Ve(e, s) : ze(e, s);
}
var R = e(n(), 1);
i();
var Ue = [`container`, `target`],
  We = () => ({
    scrollX: p(0),
    scrollY: p(0),
    scrollXProgress: p(0),
    scrollYProgress: p(0),
  }),
  z = (e) => (e ? !e.current : !1);
function B(e, t, n, r) {
  return {
    factory: (i) =>
      L(
        i,
        a(
          a({}, t),
          {},
          {
            axis: e,
            container: (n == null ? void 0 : n.current) || void 0,
            target: (r == null ? void 0 : r.current) || void 0,
          },
        ),
      ),
    times: [0, 1],
    keyframes: [0, 1],
    ease: (e) => e,
    duration: 1,
  };
}
function Ge(e, t) {
  return typeof window > `u` ? !1 : e ? x() && !!N(t) : ie();
}
function Ke(e = {}) {
  let { container: t, target: n } = e,
    r = o(e, Ue),
    i = c(We);
  Ge(n, r.offset) &&
    ((i.scrollXProgress.accelerate = B(`x`, r, t, n)),
    (i.scrollYProgress.accelerate = B(`y`, r, t, n)));
  let s = (0, R.useRef)(null),
    u = (0, R.useRef)(!1),
    d = (0, R.useCallback)(
      () => (
        (s.current = L(
          (e, { x: t, y: n }) => {
            (i.scrollX.set(t.current),
              i.scrollXProgress.set(t.progress),
              i.scrollY.set(n.current),
              i.scrollYProgress.set(n.progress));
          },
          a(
            a({}, r),
            {},
            {
              container: (t == null ? void 0 : t.current) || void 0,
              target: (n == null ? void 0 : n.current) || void 0,
            },
          ),
        )),
        () => {
          var e;
          (e = s.current) == null || e.call(s);
        }
      ),
      [t, n, JSON.stringify(r.offset)],
    );
  return (
    l(() => {
      if (((u.current = !1), z(t) || z(n))) {
        u.current = !0;
        return;
      } else return d();
    }, [d]),
    (0, R.useEffect)(() => {
      if (u.current)
        return (
          f(
            !z(t),
            `Container ref is defined but not hydrated`,
            `use-scroll-ref`,
          ),
          f(!z(n), `Target ref is defined but not hydrated`, `use-scroll-ref`),
          d()
        );
    }, [d]),
    i
  );
}
function V(e) {
  let t = c(() => p(e)),
    { isStatic: n } = (0, R.useContext)(v);
  if (n) {
    let [, n] = (0, R.useState)(e);
    (0, R.useEffect)(() => t.on(`change`, n), []);
  }
  return t;
}
function H(e, t) {
  let n = V(t()),
    r = () => n.set(t());
  return (
    r(),
    l(() => {
      let t = () => h.preRender(r, !1, !0),
        n = e.map((e) => e.on(`change`, t));
      return () => {
        (n.forEach((e) => e()), g(r));
      };
    }),
    n
  );
}
function qe(e) {
  ((y.current = []), e());
  let t = H(y.current, e);
  return ((y.current = void 0), t);
}
i();
function Je(e, t, n, r) {
  if (typeof e == `function`) return qe(e);
  if (n !== void 0 && !Array.isArray(n) && typeof t != `function`)
    return Xe(e, t, n, r);
  let i = typeof t == `function` ? t : fe(t, n, r),
    o = Array.isArray(e) ? Ye(e, i) : Ye([e], ([e]) => i(e)),
    s = Array.isArray(e) ? void 0 : e.accelerate;
  return (
    s &&
      !s.isTransformed &&
      typeof t != `function` &&
      Array.isArray(n) &&
      (r == null ? void 0 : r.clamp) !== !1 &&
      (o.accelerate = a(
        a({}, s),
        {},
        { times: t, keyframes: n, isTransformed: !0 },
        r != null && r.ease ? { ease: r.ease } : {},
      )),
    o
  );
}
function Ye(e, t) {
  let n = c(() => []);
  return H(e, () => {
    n.length = 0;
    let r = e.length;
    for (let t = 0; t < r; t++) n[t] = e[t].get();
    return t(n);
  });
}
function Xe(e, t, n, r) {
  let i = c(() => Object.keys(n)),
    a = c(() => ({}));
  for (let o of i) a[o] = Je(e, t, n[o], r);
  return a;
}
function Ze(e, t = {}) {
  let { isStatic: n } = (0, R.useContext)(v),
    r = () => (oe(e) ? e.get() : e);
  if (n) return Je(r);
  let i = V(r());
  return (
    (0, R.useInsertionEffect)(() => pe(i, e, t), [i, JSON.stringify(t)]),
    i
  );
}
i();
function Qe(e, t = {}) {
  return Ze(e, a({ type: `spring` }, t));
}
var U = {
    hero: `_hero_epqe1_1`,
    bg: `_bg_epqe1_11`,
    grid: `_grid_epqe1_22`,
    inner: `_inner_epqe1_33`,
    tag: `_tag_epqe1_45`,
    dot: `_dot_epqe1_59`,
    pulse: `_pulse_epqe1_1`,
    name: `_name_epqe1_74`,
    typewriter: `_typewriter_epqe1_82`,
    typed: `_typed_epqe1_90`,
    blink: `_blink_epqe1_91`,
    descWrapper: `_descWrapper_epqe1_94`,
    desc: `_desc_epqe1_94`,
    btns: `_btns_epqe1_107`,
    stats: `_stats_epqe1_113`,
    stat: `_stat_epqe1_113`,
    visual: `_visual_epqe1_140`,
    photoWrap: `_photoWrap_epqe1_147`,
    photoFrame: `_photoFrame_epqe1_155`,
    photoPlaceholder: `_photoPlaceholder_epqe1_175`,
    glowRing: `_glowRing_epqe1_189`,
    badge: `_badge_epqe1_200`,
    badge1: `_badge1_epqe1_229`,
    badge2: `_badge2_epqe1_230`,
    text: `_text_epqe1_234`,
  },
  W = r();
function $e() {
  let e = (0, R.useRef)(null);
  return (
    (0, R.useEffect)(() => {
      let t = e.current;
      if (!t) return;
      let n = t.getContext(`2d`),
        r,
        i = [],
        a = () => {
          ((t.width = window.innerWidth), (t.height = window.innerHeight), s());
        };
      window.addEventListener(`resize`, a);
      class o {
        constructor(e, t, n, r, i, a) {
          ((this.x = e),
            (this.y = t),
            (this.dx = n),
            (this.dy = r),
            (this.size = i),
            (this.color = a));
        }
        draw() {
          (n.beginPath(),
            n.arc(this.x, this.y, this.size, 0, Math.PI * 2),
            (n.fillStyle = this.color),
            n.fill());
        }
        update() {
          ((this.x += this.dx),
            (this.y += this.dy),
            this.x > t.width ? (this.x = 0) : this.x < 0 && (this.x = t.width),
            this.y > t.height
              ? (this.y = 0)
              : this.y < 0 && (this.y = t.height));
        }
      }
      function s() {
        i = [];
        let e = (t.width * t.height) / 4e4,
          n =
            !document.documentElement.hasAttribute(`data-theme`) ||
            document.documentElement.getAttribute(`data-theme`) === `dark`
              ? `rgba(255, 255, 255, 0.15)`
              : `rgba(0, 0, 0, 0.05)`;
        for (let r = 0; r < e; r++) {
          let e = Math.random() * 1.5 + 0.5,
            r = Math.random() * t.width,
            a = Math.random() * t.height,
            s = (Math.random() - 0.5) * 0.3,
            c = (Math.random() - 0.5) * 0.3;
          i.push(new o(r, a, s, c, e, n));
        }
      }
      function c() {
        ((r = requestAnimationFrame(c)),
          n.clearRect(0, 0, t.width, t.height),
          i.forEach((e) => {
            (e.update(), e.draw());
          }));
      }
      return (
        a(),
        c(),
        () => {
          (cancelAnimationFrame(r), window.removeEventListener(`resize`, a));
        }
      );
    }, []),
    (0, W.jsx)(`canvas`, {
      ref: e,
      style: {
        position: `absolute`,
        top: 0,
        left: 0,
        width: `100%`,
        height: `100%`,
        zIndex: 1,
        pointerEvents: `none`,
      },
    })
  );
}
function et(e) {
  let [t, n] = (0, R.useState)(``),
    [r, i] = (0, R.useState)(0),
    [a, o] = (0, R.useState)(0),
    [s, c] = (0, R.useState)(!1);
  return (
    (0, R.useEffect)(() => {
      if (!(e != null && e.length)) return;
      let t = e[r] || ``,
        l = setTimeout(
          () => {
            s
              ? (n(t.slice(0, a - 1)),
                a - 1 <= 0
                  ? (c(!1), i((t) => (t + 1) % e.length), o(0))
                  : o((e) => e - 1))
              : (n(t.slice(0, a + 1)),
                a + 1 >= t.length
                  ? setTimeout(() => c(!0), 2e3)
                  : o((e) => e + 1));
          },
          s ? 45 : 85,
        );
      return () => clearTimeout(l);
    }, [a, s, r, e]),
    t
  );
}
function tt({ target: e }) {
  let [t, n] = (0, R.useState)(0);
  return (
    (0, R.useEffect)(() => {
      let t = 0,
        r = e / 60,
        i = setInterval(() => {
          ((t = Math.min(t + r, e)),
            n(Math.round(t)),
            t >= e && clearInterval(i));
        }, 20);
      return () => clearInterval(i);
    }, [e]),
    (0, W.jsxs)(W.Fragment, { children: [t, `+`] })
  );
}
function nt() {
  let { data: e } = S(),
    t = e.hero,
    n = et(t.typewriterTexts),
    [r, i] = (0, R.useState)(!1),
    [a, o] = (0, R.useState)({ x: 0, y: 0 }),
    s = (0, R.useRef)(null);
  return (
    (0, R.useEffect)(() => {
      let e = setTimeout(() => i(!0), 600);
      return () => clearTimeout(e);
    }, []),
    (0, W.jsxs)(`section`, {
      ref: s,
      className: U.hero,
      id: `hero`,
      onMouseMove: (e) => {
        let { clientX: t, clientY: n } = e,
          {
            left: r,
            top: i,
            width: a,
            height: c,
          } = s.current.getBoundingClientRect();
        o({ x: (t - r - a / 2) / 25, y: (n - i - c / 2) / 25 });
      },
      children: [
        (0, W.jsx)($e, {}),
        (0, W.jsx)(`div`, { className: U.bg }),
        (0, W.jsx)(`div`, { className: U.grid }),
        (0, W.jsxs)(`div`, {
          className: U.inner,
          children: [
            (0, W.jsxs)(`div`, {
              className: U.text,
              children: [
                (0, W.jsxs)(`div`, {
                  className: U.tag,
                  children: [
                    (0, W.jsx)(`span`, { className: U.dot }),
                    `Available for Work`,
                  ],
                }),
                (0, W.jsxs)(`h1`, {
                  className: U.name,
                  children: [
                    (0, W.jsx)(`div`, {
                      style: { overflow: `hidden` },
                      children: (0, W.jsx)(`span`, {
                        className: `highlight clip-reveal`,
                        children: `Al-Amin`,
                      }),
                    }),
                    (0, W.jsx)(`div`, {
                      style: { overflow: `hidden` },
                      children: (0, W.jsx)(`span`, {
                        className: `clip-reveal`,
                        style: { animationDelay: `0.2s` },
                        children: `Bin Ashad Ali`
                          .split(` `)
                          .map((e, t) =>
                            (0, W.jsx)(
                              `span`,
                              {
                                className: `word-reveal`,
                                style: { marginRight: `0.3em` },
                                children: (0, W.jsx)(`span`, {
                                  className: `word-inner visible`,
                                  style: {
                                    transitionDelay: `${0.3 + t * 0.1}s`,
                                  },
                                  children: e,
                                }),
                              },
                              t,
                            ),
                          ),
                      }),
                    }),
                  ],
                }),
                (0, W.jsxs)(`p`, {
                  className: U.typewriter,
                  children: [
                    (0, W.jsx)(`span`, { className: U.typed, children: n }),
                    (0, W.jsx)(`span`, { className: U.blink, children: `|` }),
                  ],
                }),
                (0, W.jsx)(`div`, {
                  className: U.descWrapper,
                  children: (0, W.jsx)(`p`, {
                    className: `${U.desc} clip-reveal`,
                    style: { animationDelay: `0.5s` },
                    children: t.description,
                  }),
                }),
                (0, W.jsxs)(`div`, {
                  className: U.btns,
                  children: [
                    (0, W.jsx)(b, {
                      children: (0, W.jsxs)(`a`, {
                        href: `#portfolio`,
                        className: `btn-primary`,
                        children: [
                          (0, W.jsx)(`i`, { className: `fas fa-eye` }),
                          ` View My Work`,
                        ],
                      }),
                    }),
                    (0, W.jsx)(b, {
                      children: (0, W.jsxs)(`a`, {
                        href: `#contact`,
                        className: `btn-outline`,
                        children: [
                          (0, W.jsx)(`i`, { className: `fas fa-paper-plane` }),
                          ` Hire Me`,
                        ],
                      }),
                    }),
                  ],
                }),
                (0, W.jsx)(`div`, {
                  className: U.stats,
                  children: [
                    { label: `Years Exp.`, value: t.statYears },
                    { label: `Projects Done`, value: t.statProjects },
                    { label: `Happy Clients`, value: t.statClients },
                  ].map((e, t) =>
                    (0, W.jsxs)(
                      `div`,
                      {
                        className: `${U.stat} clip-reveal`,
                        style: { animationDelay: `${0.8 + t * 0.1}s` },
                        children: [
                          (0, W.jsx)(`strong`, {
                            children: r
                              ? (0, W.jsx)(tt, { target: e.value })
                              : `0+`,
                          }),
                          (0, W.jsx)(`span`, { children: e.label }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
            (0, W.jsxs)(`div`, {
              className: U.visual,
              style: {
                transform: `translate3d(${a.x}px, ${a.y}px, 0)`,
                transition: `transform 0.2s ease-out`,
              },
              children: [
                (0, W.jsx)(`div`, { className: `${U.glowRing} float-subtle` }),
                (0, W.jsxs)(`div`, {
                  className: U.photoWrap,
                  style: {
                    transform: `translate3d(${a.x * -0.5}px, ${a.y * -0.5}px, 0)`,
                    transition: `transform 0.2s ease-out`,
                  },
                  children: [
                    (0, W.jsx)(`div`, {
                      className: U.photoFrame,
                      children: t.photoUrl
                        ? (0, W.jsx)(`img`, {
                            src: t.photoUrl,
                            alt: `Al-Amin Bin Ashad Ali`,
                            fetchpriority: `high`,
                          })
                        : (0, W.jsxs)(`div`, {
                            className: U.photoPlaceholder,
                            children: [
                              (0, W.jsx)(`i`, { className: `fas fa-user` }),
                              (0, W.jsxs)(`p`, {
                                children: [
                                  `Add photo from`,
                                  (0, W.jsx)(`br`, {}),
                                  `Admin Panel`,
                                ],
                              }),
                            ],
                          }),
                    }),
                    (0, W.jsxs)(`div`, {
                      className: `${U.badge} ${U.badge1} float-subtle`,
                      style: { animationDelay: `0s` },
                      children: [
                        (0, W.jsx)(`i`, { className: `fas fa-star` }),
                        (0, W.jsxs)(`div`, {
                          children: [
                            (0, W.jsx)(`span`, { children: `Rating` }),
                            (0, W.jsx)(`strong`, { children: `5.0 ⭐` }),
                          ],
                        }),
                      ],
                    }),
                    (0, W.jsxs)(`div`, {
                      className: `${U.badge} ${U.badge2} float-subtle`,
                      style: { animationDelay: `1s` },
                      children: [
                        (0, W.jsx)(`i`, { className: `fas fa-briefcase` }),
                        (0, W.jsxs)(`div`, {
                          children: [
                            (0, W.jsx)(`span`, { children: `Status` }),
                            (0, W.jsx)(`strong`, { children: `Open to Work` }),
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
      ],
    })
  );
}
var G = {
  grid: `_grid_1lhxe_1`,
  card: `_card_1lhxe_7`,
  spotlight: `_spotlight_1lhxe_23`,
  num: `_num_1lhxe_39`,
  icon: `_icon_1lhxe_51`,
  title: `_title_1lhxe_81`,
  desc: `_desc_1lhxe_90`,
};
function rt({ s: e, idx: t }) {
  let n = C(),
    [r, i] = (0, R.useState)({ x: 0, y: 0 });
  return (0, W.jsxs)(`div`, {
    ref: n,
    className: `reveal ${G.card}`,
    style: {
      transitionDelay: `${t * 0.1}s`,
      transform: `perspective(1000px) rotateX(${r.y}deg) rotateY(${r.x}deg)`,
      transition: r.x === 0 ? `transform 0.5s ease` : `none`,
    },
    onMouseMove: (e) => {
      let {
        left: t,
        top: n,
        width: r,
        height: a,
      } = e.currentTarget.getBoundingClientRect();
      i({
        x: ((e.clientX - t) / r - 0.5) * 12,
        y: ((e.clientY - n) / a - 0.5) * -12,
        mx: e.clientX - t,
        my: e.clientY - n,
      });
    },
    onMouseLeave: () => i({ x: 0, y: 0 }),
    children: [
      (0, W.jsx)(`div`, {
        className: G.spotlight,
        style: {
          background: `radial-gradient(600px circle at ${r.mx}px ${r.my}px, rgba(34, 197, 94, 0.1), transparent 40%)`,
        },
      }),
      (0, W.jsx)(`div`, {
        className: G.num,
        children: t + 1 < 10 ? `0${t + 1}` : t + 1,
      }),
      (0, W.jsx)(`div`, {
        className: G.icon,
        children: (0, W.jsx)(`i`, { className: e.icon }),
      }),
      (0, W.jsx)(`h3`, { className: G.title, children: e.title }),
      (0, W.jsx)(`p`, { className: G.desc, children: e.desc }),
    ],
  });
}
function it() {
  let { data: e } = S(),
    t = e.services.filter((e) => !e.hidden);
  return (0, W.jsx)(`section`, {
    className: `section`,
    id: `services`,
    children: (0, W.jsxs)(`div`, {
      className: `section-inner`,
      children: [
        (0, W.jsxs)(`div`, {
          ref: C(),
          className: `reveal`,
          style: { textAlign: `center`, marginBottom: `1rem` },
          children: [
            (0, W.jsx)(`div`, {
              className: `section-label`,
              style: { justifyContent: `center` },
              children: `Expertise`,
            }),
            (0, W.jsxs)(`h2`, {
              className: `section-title`,
              children: [
                `Strategic `,
                (0, W.jsx)(`span`, { children: `Solutions` }),
              ],
            }),
          ],
        }),
        (0, W.jsx)(`div`, {
          className: G.grid,
          children: t.map((e, t) => (0, W.jsx)(rt, { s: e, idx: t }, e.id)),
        }),
      ],
    }),
  });
}
var K = {
    section: `_section_ity5l_1`,
    timeline: `_timeline_ity5l_7`,
    track: `_track_ity5l_15`,
    progressBar: `_progressBar_ity5l_27`,
    stepRow: `_stepRow_ity5l_40`,
    stepContent: `_stepContent_ity5l_50`,
    left: `_left_ity5l_64`,
    right: `_right_ity5l_68`,
    dot: `_dot_ity5l_72`,
    num: `_num_ity5l_86`,
    iconBox: `_iconBox_ity5l_96`,
    stepTitle: `_stepTitle_ity5l_103`,
    stepDesc: `_stepDesc_ity5l_110`,
  },
  at = [
    {
      id: 1,
      title: `Discovery & Strategy`,
      desc: `I dive deep into your brand's vision, target audience, and competition to build a solid foundation.`,
      icon: `fas fa-search`,
    },
    {
      id: 2,
      title: `Creative Concepting`,
      desc: `Translating insights into visual concepts, mood boards, and initial sketches that resonate.`,
      icon: `fas fa-lightbulb`,
    },
    {
      id: 3,
      title: `Precision Design`,
      desc: `Crafting the final product with pixel-perfect attention to detail using industry-standard tools.`,
      icon: `fas fa-pen-nib`,
    },
    {
      id: 4,
      title: `Delivery & Support`,
      desc: `Providing all necessary assets and ongoing support to ensure your brand's continued success.`,
      icon: `fas fa-rocket`,
    },
  ],
  ot = () => {
    let e = (0, R.useRef)(null),
      { scrollYProgress: t } = Ke({
        target: e,
        offset: [`start center`, `end center`],
      }),
      n = Qe(t, { stiffness: 100, damping: 30, restDelta: 0.001 });
    return (0, W.jsx)(`section`, {
      className: K.section,
      id: `process`,
      ref: e,
      children: (0, W.jsxs)(`div`, {
        className: `section-inner`,
        children: [
          (0, W.jsxs)(`div`, {
            className: `section-header`,
            style: { marginBottom: `6rem` },
            children: [
              (0, W.jsx)(`span`, { className: `badge`, children: `Workflow` }),
              (0, W.jsxs)(`h2`, {
                className: `section-title`,
                children: [
                  `My Creative `,
                  (0, W.jsx)(`span`, {
                    className: `highlight`,
                    children: `Process`,
                  }),
                ],
              }),
              (0, W.jsx)(`p`, {
                className: `section-desc`,
                children: `A structured approach to turning your ideas into impactful digital realities.`,
              }),
            ],
          }),
          (0, W.jsxs)(`div`, {
            className: K.timeline,
            children: [
              (0, W.jsx)(ae.div, {
                className: K.progressBar,
                style: { scaleY: n },
              }),
              (0, W.jsx)(`div`, { className: K.track }),
              at.map((e, t) =>
                (0, W.jsxs)(
                  `div`,
                  {
                    className: `${K.stepRow} ${t % 2 == 0 ? K.left : K.right}`,
                    children: [
                      (0, W.jsx)(`div`, { className: K.dot }),
                      (0, W.jsxs)(ae.div, {
                        className: K.stepContent,
                        initial: { opacity: 0, x: t % 2 == 0 ? -50 : 50 },
                        whileInView: { opacity: 1, x: 0 },
                        viewport: { once: !0, margin: `-100px` },
                        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                        children: [
                          (0, W.jsxs)(`div`, {
                            className: K.num,
                            children: [`0`, e.id],
                          }),
                          (0, W.jsx)(`div`, {
                            className: K.iconBox,
                            children: (0, W.jsx)(`i`, { className: e.icon }),
                          }),
                          (0, W.jsx)(`h3`, {
                            className: K.stepTitle,
                            children: e.title,
                          }),
                          (0, W.jsx)(`p`, {
                            className: K.stepDesc,
                            children: e.desc,
                          }),
                        ],
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            ],
          }),
        ],
      }),
    });
  },
  q = {
    filters: `_filters_1y6db_1`,
    filterBtn: `_filterBtn_1y6db_2`,
    active: `_active_1y6db_3`,
    masonryGrid: `_masonryGrid_1y6db_6`,
    card: `_card_1y6db_11`,
    chrome: `_chrome_1y6db_21`,
    dots: `_dots_1y6db_22`,
    urlBar: `_urlBar_1y6db_27`,
    arBadge: `_arBadge_1y6db_29`,
    screen: `_screen_1y6db_32`,
    placeholder: `_placeholder_1y6db_41`,
    phIcon: `_phIcon_1y6db_42`,
    playOverlay: `_playOverlay_1y6db_46`,
    playBtn: `_playBtn_1y6db_48`,
    footer: `_footer_1y6db_52`,
    footerMain: `_footerMain_1y6db_53`,
    cat: `_cat_1y6db_54`,
    title: `_title_1y6db_55`,
    techStack: `_techStack_1y6db_57`,
    techIcon: `_techIcon_1y6db_58`,
    liveBtn: `_liveBtn_1y6db_71`,
    liveBtnDim: `_liveBtnDim_1y6db_73`,
    empty: `_empty_1y6db_75`,
    lightbox: `_lightbox_1y6db_79`,
    lightboxInner: `_lightboxInner_1y6db_80`,
    lightboxClose: `_lightboxClose_1y6db_82`,
    slideshow: `_slideshow_1y6db_88`,
    slide: `_slide_1y6db_88`,
    smartSlide: `_smartSlide_1y6db_98`,
    slideBlurBg: `_slideBlurBg_1y6db_105`,
    slideImg: `_slideImg_1y6db_116`,
    fullscreenBtn: `_fullscreenBtn_1y6db_128`,
    slideArrow: `_slideArrow_1y6db_140`,
    slideArrowL: `_slideArrowL_1y6db_150`,
    slideArrowR: `_slideArrowR_1y6db_151`,
    slideDots: `_slideDots_1y6db_154`,
    slideDot: `_slideDot_1y6db_154`,
    slideDotActive: `_slideDotActive_1y6db_163`,
    slideCounter: `_slideCounter_1y6db_166`,
    imgCountBadge: `_imgCountBadge_1y6db_173`,
    imgLightbox: `_imgLightbox_1y6db_180`,
    lbFadeIn: `_lbFadeIn_1y6db_1`,
    imgLbClose: `_imgLbClose_1y6db_189`,
    imgLbContent: `_imgLbContent_1y6db_199`,
    imgLbImg: `_imgLbImg_1y6db_203`,
    lbImgIn: `_lbImgIn_1y6db_1`,
    imgLbNav: `_imgLbNav_1y6db_211`,
    imgLbPrev: `_imgLbPrev_1y6db_220`,
    imgLbNext: `_imgLbNext_1y6db_221`,
    imgLbCounter: `_imgLbCounter_1y6db_223`,
    imgLbDots: `_imgLbDots_1y6db_228`,
    viewAllWrapper: `_viewAllWrapper_1y6db_233`,
    viewAllBtn: `_viewAllBtn_1y6db_234`,
    listView: `_listView_1y6db_240`,
    listHeader: `_listHeader_1y6db_243`,
    listItem: `_listItem_1y6db_253`,
    listColTitle: `_listColTitle_1y6db_265`,
    listCat: `_listCat_1y6db_268`,
    listTitle: `_listTitle_1y6db_276`,
    listColYear: `_listColYear_1y6db_282`,
    listColLink: `_listColLink_1y6db_288`,
    hoverPreview: `_hoverPreview_1y6db_299`,
    previewInner: `_previewInner_1y6db_313`,
    previewTag: `_previewTag_1y6db_323`,
    viewToggles: `_viewToggles_1y6db_338`,
    toggleBtn: `_toggleBtn_1y6db_346`,
    toggleActive: `_toggleActive_1y6db_359`,
  },
  st = [
    { key: `all`, label: `All Work` },
    { key: `graphic`, label: `Graphic Design` },
    { key: `web`, label: `Web Design` },
    { key: `video`, label: `Video` },
    { key: `ai`, label: `AI Projects` },
    { key: `branding`, label: `Branding` },
  ],
  J = {
    graphic: `Graphic Design`,
    web: `Web Design`,
    video: `Video`,
    ai: `AI Projects`,
    branding: `Branding`,
  },
  ct = {
    graphic: `fas fa-palette`,
    web: `fas fa-laptop-code`,
    ai: `fas fa-robot`,
    branding: `fas fa-copyright`,
    video: `fas fa-film`,
  },
  lt = {
    "16:9": { w: 16, h: 9 },
    "4:3": { w: 4, h: 3 },
    "1:1": { w: 1, h: 1 },
    "4:5": { w: 4, h: 5 },
    "9:16": { w: 9, h: 16 },
    "3:2": { w: 3, h: 2 },
    "2:3": { w: 2, h: 3 },
    "21:9": { w: 21, h: 9 },
    free: { w: 0, h: 0 },
  };
function ut(e) {
  if (!e) return ``;
  let t = e.trim();
  if (t.includes(`youtube.com/embed/`) || t.includes(`player.vimeo.com/video/`))
    return t;
  let n = t.match(/(?:youtu\.be\/|[?&]v=|shorts\/)([A-Za-z0-9_-]{11})/);
  if (n) return `https://www.youtube.com/embed/${n[1]}`;
  let r = t.match(/vimeo\.com\/(\d+)/);
  return r ? `https://player.vimeo.com/video/${r[1]}` : t;
}
function dt(e) {
  if (!e || e === `match` || e === `free`) return {};
  let t = lt[e];
  return !t || !t.w || !t.h ? {} : { aspectRatio: `${t.w} / ${t.h}` };
}
function ft({ images: e, startIndex: t, onClose: n }) {
  let [r, i] = (0, R.useState)(t);
  (0, R.useRef)(null);
  let a = e.length,
    o = () => i((e) => (e - 1 + a) % a),
    s = () => i((e) => (e + 1) % a);
  return (
    (0, R.useEffect)(() => {
      function e(e) {
        (e.key === `Escape` && n(),
          e.key === `ArrowLeft` && o(),
          e.key === `ArrowRight` && s());
      }
      return (
        document.addEventListener(`keydown`, e),
        () => document.removeEventListener(`keydown`, e)
      );
    }, []),
    (0, W.jsxs)(`div`, {
      className: q.imgLightbox,
      onClick: (e) => {
        e.target === e.currentTarget && n();
      },
      children: [
        (0, W.jsx)(`button`, {
          className: q.imgLbClose,
          onClick: n,
          children: (0, W.jsx)(`i`, { className: `fas fa-times` }),
        }),
        (0, W.jsx)(`div`, {
          className: q.imgLbContent,
          children: (0, W.jsx)(
            `img`,
            {
              loading: `lazy`,
              src: e[r],
              alt: `Portfolio project by Al-Amin Bin Ashad Ali — Graphic Designer Bangladesh`,
              className: q.imgLbImg,
            },
            r,
          ),
        }),
        a > 1 &&
          (0, W.jsxs)(W.Fragment, {
            children: [
              (0, W.jsx)(`button`, {
                className: `${q.imgLbNav} ${q.imgLbPrev}`,
                onClick: o,
                children: (0, W.jsx)(`i`, { className: `fas fa-chevron-left` }),
              }),
              (0, W.jsx)(`button`, {
                className: `${q.imgLbNav} ${q.imgLbNext}`,
                onClick: s,
                children: (0, W.jsx)(`i`, {
                  className: `fas fa-chevron-right`,
                }),
              }),
              (0, W.jsxs)(`div`, {
                className: q.imgLbCounter,
                children: [r + 1, ` / `, a],
              }),
              (0, W.jsx)(`div`, {
                className: q.imgLbDots,
                children: e.map((e, t) =>
                  (0, W.jsx)(
                    `button`,
                    {
                      className: `${q.imgLbDot} ${t === r ? q.imgLbDotActive : ``}`,
                      onClick: () => i(t),
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
      ],
    })
  );
}
function pt({ url: e, onClose: t }) {
  let n = ut(e),
    r = n.includes(`?`) ? `${n}&autoplay=1&rel=0` : `${n}?autoplay=1&rel=0`;
  return (0, W.jsx)(`div`, {
    className: q.lightbox,
    onClick: (e) => {
      e.target === e.currentTarget && t();
    },
    children: (0, W.jsxs)(`div`, {
      className: q.lightboxInner,
      children: [
        (0, W.jsx)(`button`, {
          className: q.lightboxClose,
          onClick: t,
          children: (0, W.jsx)(`i`, { className: `fas fa-times` }),
        }),
        (0, W.jsx)(`iframe`, {
          src: r,
          title: `Video`,
          allowFullScreen: !0,
          allow: `autoplay; fullscreen`,
          style: { width: `100%`, height: `100%`, border: `none` },
        }),
      ],
    }),
  });
}
function mt({ src: e, active: t, prev: n }) {
  return (0, W.jsxs)(`div`, {
    className: q.smartSlide,
    style: {
      opacity: +!!t,
      zIndex: t ? 2 : +!!n,
      transition: t || n ? `opacity 0.7s ease, transform 0.7s ease` : `none`,
      transform: t ? `scale(1)` : `scale(1.03)`,
    },
    children: [
      (0, W.jsx)(`div`, {
        className: q.slideBlurBg,
        style: { backgroundImage: `url(${e})` },
      }),
      (0, W.jsx)(`img`, {
        src: e,
        alt: `Portfolio design work by Al-Amin Bin Ashad Ali — Graphic Designer Bangladesh`,
        loading: `lazy`,
        className: q.slideImg,
      }),
    ],
  });
}
function ht({ images: e, onOpenLightbox: t }) {
  let [n, r] = (0, R.useState)(0),
    [i, a] = (0, R.useState)(null),
    o = (0, R.useRef)(null),
    s = (0, R.useRef)(null),
    c = e.length;
  function l(e) {
    e !== n &&
      (a(n),
      r(e),
      clearTimeout(s.current),
      (s.current = setTimeout(() => a(null), 750)));
  }
  let u = (0, R.useCallback)(() => {
    (clearInterval(o.current),
      c > 1 &&
        (o.current = setInterval(() => {
          r((e) => {
            let t = (e + 1) % c;
            return (
              a(e),
              clearTimeout(s.current),
              (s.current = setTimeout(() => a(null), 750)),
              t
            );
          });
        }, 3e3)));
  }, [c]);
  (0, R.useEffect)(
    () => (
      u(),
      () => {
        (clearInterval(o.current), clearTimeout(s.current));
      }
    ),
    [u],
  );
  function d(e, t) {
    (t.stopPropagation(), clearInterval(o.current), l((n + e + c) % c), u());
  }
  function f(e, t) {
    (t.stopPropagation(), clearInterval(o.current), l(e), u());
  }
  return (0, W.jsxs)(`div`, {
    className: q.slideshow,
    children: [
      e.map((e, t) =>
        (0, W.jsx)(mt, { src: e, active: t === n, prev: t === i }, t),
      ),
      (0, W.jsx)(`button`, {
        className: q.fullscreenBtn,
        onClick: (e) => {
          (e.stopPropagation(), t(n));
        },
        title: `Full screen`,
        children: (0, W.jsx)(`i`, { className: `fas fa-expand-alt` }),
      }),
      c > 1 &&
        (0, W.jsxs)(W.Fragment, {
          children: [
            (0, W.jsx)(`button`, {
              className: `${q.slideArrow} ${q.slideArrowL}`,
              onClick: (e) => d(-1, e),
              children: (0, W.jsx)(`i`, { className: `fas fa-chevron-left` }),
            }),
            (0, W.jsx)(`button`, {
              className: `${q.slideArrow} ${q.slideArrowR}`,
              onClick: (e) => d(1, e),
              children: (0, W.jsx)(`i`, { className: `fas fa-chevron-right` }),
            }),
            (0, W.jsx)(`div`, {
              className: q.slideDots,
              children: e.map((e, t) =>
                (0, W.jsx)(
                  `button`,
                  {
                    className: `${q.slideDot} ${t === n ? q.slideDotActive : ``}`,
                    onClick: (e) => f(t, e),
                  },
                  t,
                ),
              ),
            }),
            (0, W.jsxs)(`div`, {
              className: q.slideCounter,
              children: [n + 1, `/`, c],
            }),
          ],
        }),
    ],
  });
}
var Y = {
  illustrator: `https://cdn.simpleicons.org/adobeillustrator/22c55e`,
  photoshop: `https://cdn.simpleicons.org/adobephotoshop/22c55e`,
  figma: `https://cdn.simpleicons.org/figma/22c55e`,
  canva: `https://cdn.simpleicons.org/canva/22c55e`,
  react: `https://cdn.simpleicons.org/react/22c55e`,
  firebase: `https://cdn.simpleicons.org/firebase/22c55e`,
  midjourney: `fas fa-magic`,
  premiere: `https://cdn.simpleicons.org/adobepremierepro/22c55e`,
  aftereffects: `https://cdn.simpleicons.org/adobeaftereffects/22c55e`,
};
function gt({ p: e, onMouseEnter: t, onMouseLeave: n }) {
  return (0, W.jsxs)(`div`, {
    className: q.listItem,
    onMouseEnter: (n) => t(n, e),
    onMouseLeave: n,
    children: [
      (0, W.jsxs)(`div`, {
        className: q.listColTitle,
        children: [
          (0, W.jsx)(`span`, {
            className: q.listCat,
            children: J[e.cat] || e.cat,
          }),
          (0, W.jsx)(`h3`, { className: q.listTitle, children: e.title }),
        ],
      }),
      (0, W.jsx)(`div`, {
        className: q.listColYear,
        children: e.year || `2024`,
      }),
      (0, W.jsx)(`div`, {
        className: q.listColLink,
        children: (0, W.jsx)(`i`, { className: `fas fa-arrow-right` }),
      }),
    ],
  });
}
function _t({ active: e, pos: t }) {
  if (!e) return null;
  let n = t.x + 30,
    r = t.y;
  return (
    n + 320 > window.innerWidth && (n = t.x - 320 - 30),
    r + 200 / 2 > window.innerHeight
      ? (r = window.innerHeight - 200 / 2 - 20)
      : r - 200 / 2 < 0 && (r = 120),
    (0, W.jsx)(`div`, {
      className: q.hoverPreview,
      style: {
        left: 0,
        top: 0,
        transform: `translate3d(${n}px, ${r}px, 0) translateY(-50%)`,
      },
      children: (0, W.jsxs)(`div`, {
        className: q.previewInner,
        children: [
          (0, W.jsx)(`img`, { src: e.imgUrl, alt: e.title }),
          (0, W.jsx)(`div`, {
            className: q.previewTag,
            children: J[e.cat] || e.cat,
          }),
        ],
      }),
    })
  );
}
function vt({ p: e, total: t }) {
  let n = C(),
    [r, i] = (0, R.useState)(null),
    [a, o] = (0, R.useState)(!1),
    [s, c] = (0, R.useState)(null),
    l = e.cat === `video` && e.videoUrl,
    u = (e.siteUrl || ``).replace(/^https?:\/\//, ``).replace(/\/$/, ``),
    d = e.aspectRatio || `match`,
    f = !d || d === `match`;
  (0, R.useEffect)(() => {
    if (!f) return;
    let t = [e.imgUrl, ...(e.images || [])].filter(Boolean)[0];
    if (!t) return;
    let n = new Image();
    ((n.onload = () => {
      n.naturalWidth && n.naturalHeight && c(n.naturalWidth / n.naturalHeight);
    }),
      (n.src = t));
  }, [e.imgUrl, f]);
  let p = f ? (s ? { aspectRatio: `${s}` } : { aspectRatio: `4/3` }) : dt(d),
    m = [e.imgUrl, ...(e.images || [])].filter(Boolean);
  return (0, W.jsxs)(W.Fragment, {
    children: [
      (0, W.jsxs)(`div`, {
        ref: n,
        className: `reveal ${q.card}`,
        children: [
          (0, W.jsxs)(`div`, {
            className: q.chrome,
            children: [
              (0, W.jsxs)(`div`, {
                className: q.dots,
                children: [
                  (0, W.jsx)(`span`, {}),
                  (0, W.jsx)(`span`, {}),
                  (0, W.jsx)(`span`, {}),
                ],
              }),
              (0, W.jsxs)(`div`, {
                className: q.urlBar,
                children: [
                  (0, W.jsx)(`i`, { className: `fas fa-lock` }),
                  u || `al-amin.portfolio`,
                ],
              }),
              m.length > 1 &&
                (0, W.jsxs)(`div`, {
                  className: q.imgCountBadge,
                  children: [
                    (0, W.jsx)(`i`, { className: `fas fa-images` }),
                    ` `,
                    m.length,
                  ],
                }),
              d &&
                d !== `free` &&
                d !== `match` &&
                (0, W.jsx)(`div`, { className: q.arBadge, children: d }),
              f &&
                (0, W.jsx)(`div`, {
                  className: q.arBadge,
                  style: {
                    color: `#f59e0b`,
                    borderColor: `rgba(245,158,11,0.3)`,
                  },
                  children: `Auto`,
                }),
            ],
          }),
          (0, W.jsxs)(`div`, {
            className: q.screen,
            style: p,
            children: [
              m.length > 0
                ? (0, W.jsx)(ht, { images: m, onOpenLightbox: (e) => i(e) })
                : (0, W.jsxs)(`div`, {
                    className: q.placeholder,
                    children: [
                      (0, W.jsx)(`div`, {
                        className: q.phIcon,
                        children: (0, W.jsx)(`i`, {
                          className: ct[e.cat] || `fas fa-image`,
                        }),
                      }),
                      (0, W.jsx)(`p`, {
                        children: `Upload screenshot from Admin`,
                      }),
                    ],
                  }),
              l &&
                (0, W.jsx)(`button`, {
                  className: q.playOverlay,
                  onClick: () => o(!0),
                  children: (0, W.jsx)(`div`, {
                    className: q.playBtn,
                    children: (0, W.jsx)(`i`, { className: `fas fa-play` }),
                  }),
                }),
            ],
          }),
          (0, W.jsxs)(`div`, {
            className: q.footer,
            children: [
              (0, W.jsxs)(`div`, {
                className: q.footerMain,
                children: [
                  (0, W.jsx)(`div`, {
                    className: q.cat,
                    children: J[e.cat] || e.cat,
                  }),
                  (0, W.jsx)(`div`, { className: q.title, children: e.title }),
                  e.tech &&
                    e.tech.length > 0 &&
                    (0, W.jsx)(`div`, {
                      className: q.techStack,
                      children: e.tech.map((e) => {
                        var t;
                        return (0, W.jsx)(
                          `div`,
                          {
                            className: q.techIcon,
                            title: e,
                            children:
                              (t = Y[e]) != null && t.startsWith(`http`)
                                ? (0, W.jsx)(`img`, { src: Y[e], alt: e })
                                : (0, W.jsx)(`i`, {
                                    className: Y[e] || `fas fa-code`,
                                  }),
                          },
                          e,
                        );
                      }),
                    }),
                ],
              }),
              e.showLiveBtn !== !1 &&
                e.siteUrl &&
                e.siteUrl !== `#` &&
                (0, W.jsxs)(`a`, {
                  href: e.siteUrl,
                  target: `_blank`,
                  rel: `noreferrer`,
                  className: q.liveBtn,
                  children: [
                    (0, W.jsx)(`i`, { className: `fas fa-external-link-alt` }),
                    ` View Live`,
                  ],
                }),
            ],
          }),
        ],
      }),
      r !== null &&
        (0, W.jsx)(ft, { images: m, startIndex: r, onClose: () => i(null) }),
      a && (0, W.jsx)(pt, { url: e.videoUrl, onClose: () => o(!1) }),
    ],
  });
}
function yt({ limit: e }) {
  let { data: t } = S(),
    [n, r] = (0, R.useState)(`all`),
    [i, a] = (0, R.useState)(`grid`),
    [o, s] = (0, R.useState)(null),
    [c, l] = (0, R.useState)({ x: 0, y: 0 }),
    u = C(),
    d = t.portfolio.filter((e) => !e.hidden && (n === `all` || e.cat === n)),
    f = e && d.length > e;
  return (
    f && (d = d.slice(0, e)),
    (0, W.jsx)(`section`, {
      className: `section`,
      id: `portfolio`,
      style: { background: `var(--bg2)` },
      onMouseMove: (e) => {
        l({ x: e.clientX, y: e.clientY });
      },
      children: (0, W.jsxs)(`div`, {
        className: `section-inner`,
        children: [
          (0, W.jsxs)(`div`, {
            ref: u,
            className: `reveal`,
            style: {
              display: `flex`,
              justifyContent: `space-between`,
              alignItems: `flex-end`,
              marginBottom: `3rem`,
            },
            children: [
              (0, W.jsxs)(`div`, {
                children: [
                  (0, W.jsx)(`div`, {
                    className: `section-label`,
                    children: `My Work`,
                  }),
                  (0, W.jsxs)(`h2`, {
                    className: `section-title`,
                    children: [
                      `Recent `,
                      (0, W.jsx)(`span`, { children: `Projects` }),
                    ],
                  }),
                ],
              }),
              (0, W.jsxs)(`div`, {
                className: q.viewToggles,
                children: [
                  (0, W.jsx)(`button`, {
                    className: `${q.toggleBtn} ${i === `grid` ? q.toggleActive : ``}`,
                    onClick: () => a(`grid`),
                    children: (0, W.jsx)(`i`, { className: `fas fa-th-large` }),
                  }),
                  (0, W.jsx)(`button`, {
                    className: `${q.toggleBtn} ${i === `list` ? q.toggleActive : ``}`,
                    onClick: () => a(`list`),
                    children: (0, W.jsx)(`i`, { className: `fas fa-list` }),
                  }),
                ],
              }),
            ],
          }),
          !e &&
            (0, W.jsx)(`div`, {
              className: q.filters,
              children: st.map((e) =>
                (0, W.jsx)(
                  `button`,
                  {
                    className: `${q.filterBtn} ${n === e.key ? q.active : ``}`,
                    onClick: () => r(e.key),
                    children: e.label,
                  },
                  e.key,
                ),
              ),
            }),
          d.length === 0
            ? (0, W.jsxs)(`div`, {
                className: q.empty,
                children: [
                  (0, W.jsx)(`i`, { className: `fas fa-folder-open` }),
                  (0, W.jsx)(`p`, { children: `No projects yet.` }),
                ],
              })
            : (0, W.jsxs)(W.Fragment, {
                children: [
                  i === `grid`
                    ? (0, W.jsx)(`div`, {
                        className: q.masonryGrid,
                        children: d.map((e) =>
                          (0, W.jsx)(vt, { p: e, total: d.length }, e.id),
                        ),
                      })
                    : (0, W.jsxs)(`div`, {
                        className: q.listView,
                        children: [
                          (0, W.jsxs)(`div`, {
                            className: q.listHeader,
                            children: [
                              (0, W.jsx)(`div`, {
                                className: q.listColTitle,
                                children: `Project`,
                              }),
                              (0, W.jsx)(`div`, {
                                className: q.listColYear,
                                children: `Year`,
                              }),
                              (0, W.jsx)(`div`, { className: q.listColLink }),
                            ],
                          }),
                          d.map((e) =>
                            (0, W.jsx)(
                              gt,
                              {
                                p: e,
                                onMouseEnter: (e, t) => s(t),
                                onMouseLeave: () => s(null),
                              },
                              e.id,
                            ),
                          ),
                        ],
                      }),
                  (0, W.jsx)(_t, { active: o, pos: c }),
                  f &&
                    (0, W.jsx)(`div`, {
                      className: q.viewAllWrapper,
                      children: (0, W.jsxs)(`a`, {
                        href: `/portfolio`,
                        className: q.viewAllBtn,
                        children: [
                          `View All Portfolio `,
                          (0, W.jsx)(`i`, { className: `fas fa-arrow-right` }),
                        ],
                      }),
                    }),
                ],
              }),
        ],
      }),
    })
  );
}
var X = {
    slider: `_slider_1aidz_1`,
    track: `_track_1aidz_2`,
    slide: `_slide_1aidz_1`,
    card: `_card_1aidz_4`,
    quoteIcon: `_quoteIcon_1aidz_5`,
    stars: `_stars_1aidz_6`,
    text: `_text_1aidz_7`,
    bottom: `_bottom_1aidz_9`,
    author: `_author_1aidz_10`,
    humanIcon: `_humanIcon_1aidz_13`,
    humanSvg: `_humanSvg_1aidz_14`,
    name: `_name_1aidz_16`,
    role: `_role_1aidz_17`,
    platformBadge: `_platformBadge_1aidz_20`,
    platformLink: `_platformLink_1aidz_21`,
    platformIcon: `_platformIcon_1aidz_23`,
    dots: `_dots_1aidz_25`,
    dot: `_dot_1aidz_25`,
    active: `_active_1aidz_27`,
    platformLinks: `_platformLinks_1aidz_30`,
    platformLinksLabel: `_platformLinksLabel_1aidz_31`,
    platformLinkBtn: `_platformLinkBtn_1aidz_32`,
    platformBtnIcon: `_platformBtnIcon_1aidz_34`,
    seeReviews: `_seeReviews_1aidz_37`,
    seeReviewsLabel: `_seeReviewsLabel_1aidz_44`,
    seeReviewBtn: `_seeReviewBtn_1aidz_48`,
  },
  bt = {
    fiverr: (0, W.jsx)(`svg`, {
      width: `12`,
      height: `12`,
      viewBox: `0 0 24 24`,
      fill: `white`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, W.jsx)(`path`, {
        d: `M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-1.85c-.2 0-.37.05-.498.15-.13.098-.196.232-.196.4v5.66h-1.318V12.48h-.84v-.988h.84v-.548c0-.526.143-.934.427-1.226.286-.29.68-.436 1.18-.436h1.255v1.01zm-5.792 1.81c0-.695-.145-1.224-.436-1.588-.29-.362-.71-.543-1.264-.543-.536 0-.955.18-1.255.543-.3.364-.45.893-.45 1.588v.48c0 .696.15 1.229.45 1.6.3.37.72.555 1.255.555.554 0 .974-.184 1.264-.553.29-.37.436-.904.436-1.602v-.48zm1.336.454c0 .963-.256 1.73-.766 2.298-.51.568-1.193.852-2.048.852-.563 0-1.056-.13-1.48-.388a2.58 2.58 0 0 1-.986-1.107v1.39H11.47V9.16h1.318v3.307c.26-.462.603-.814 1.03-1.055a2.92 2.92 0 0 1 1.437-.363c.84 0 1.513.29 2.018.87.505.58.757 1.36.757 2.34v.487h.006zM9.58 13.692c0-.695-.145-1.224-.436-1.588-.29-.362-.71-.543-1.264-.543-.536 0-.955.18-1.255.543-.3.364-.45.893-.45 1.588v.48c0 .696.15 1.229.45 1.6.3.37.72.555 1.255.555.554 0 .974-.184 1.264-.553.29-.37.436-.904.436-1.602v-.48zm1.336.454c0 .963-.256 1.73-.766 2.298-.51.568-1.193.852-2.048.852-.563 0-1.056-.13-1.48-.388a2.58 2.58 0 0 1-.986-1.107v1.39H4.318V9.16h1.318v3.307c.26-.462.603-.814 1.03-1.055a2.92 2.92 0 0 1 1.437-.363c.84 0 1.513.29 2.018.87.505.58.757 1.36.757 2.34v.487h.006zM3.24 11.49H1.39V15.9c0 .168.05.295.148.38.1.085.248.127.45.127H3.24v1.01H1.695c-.49 0-.873-.126-1.148-.378C.272 16.788.134 16.42.134 15.9v-4.41H-.81v-.988h.944V9.16h1.318v1.343H3.24v.988z`,
      }),
    }),
    upwork: (0, W.jsx)(`svg`, {
      width: `12`,
      height: `12`,
      viewBox: `0 0 24 24`,
      fill: `white`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, W.jsx)(`path`, {
        d: `M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z`,
      }),
    }),
    behance: (0, W.jsx)(`svg`, {
      width: `12`,
      height: `12`,
      viewBox: `0 0 24 24`,
      fill: `white`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, W.jsx)(`path`, {
        d: `M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.65.673 1.44.673 2.37 0 .75-.13 1.39-.41 1.93-.28.54-.67.98-1.16 1.32-.49.34-1.05.6-1.67.75-.62.15-1.27.23-1.95.23H0V4.51h6.938v-.007zM16.94 6.073h5.52v1.42h-5.52V6.07zm-2.28 7.77c.31.46.77.69 1.38.69.43 0 .79-.11 1.1-.33.3-.22.49-.46.57-.72h2.3c-.37 1.15-1.02 1.97-1.97 2.44-.95.47-2.04.71-3.26.71-.85 0-1.63-.13-2.31-.39-.69-.26-1.27-.63-1.75-1.11-.48-.48-.85-1.06-1.1-1.73-.26-.67-.39-1.41-.39-2.21 0-.78.13-1.5.4-2.17.27-.67.64-1.25 1.12-1.73.49-.48 1.07-.86 1.77-1.13.69-.27 1.45-.41 2.28-.41.93 0 1.75.18 2.44.54.7.36 1.27.84 1.73 1.46.46.61.78 1.32.97 2.11.19.79.25 1.62.17 2.5h-6.83c.04.68.23 1.19.54 1.65zm1.07-6.08c-.34 0-.64.06-.9.18-.26.12-.48.27-.66.47-.18.2-.32.42-.42.67-.1.25-.17.51-.19.79h4.01c-.07-.61-.28-1.08-.62-1.42-.34-.35-.74-.69-1.22-.69zM6.17 10.3c.64 0 1.14-.14 1.5-.42.37-.28.55-.73.55-1.34 0-.34-.06-.62-.19-.84-.12-.22-.3-.38-.5-.5-.2-.11-.44-.19-.7-.23-.26-.04-.53-.06-.8-.06H3.2v3.39h2.97zm.31 4.43c.3 0 .57-.03.84-.08.27-.05.5-.15.7-.29.2-.14.35-.34.47-.58.12-.25.18-.57.18-.96 0-.77-.21-1.31-.64-1.61-.43-.3-.99-.45-1.68-.45H3.2v3.97h3.28z`,
      }),
    }),
    linkedin: (0, W.jsx)(`svg`, {
      width: `12`,
      height: `12`,
      viewBox: `0 0 24 24`,
      fill: `white`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, W.jsx)(`path`, {
        d: `M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z`,
      }),
    }),
    google: (0, W.jsx)(`svg`, {
      width: `12`,
      height: `12`,
      viewBox: `0 0 24 24`,
      fill: `white`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, W.jsx)(`path`, {
        d: `M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z`,
      }),
    }),
    direct: null,
    other: null,
  },
  Z = {
    fiverr: { label: `Fiverr`, color: `#1dbf73`, bg: `#1dbf73` },
    upwork: { label: `Upwork`, color: `#6fda44`, bg: `#6fda44` },
    behance: { label: `Behance`, color: `#1769ff`, bg: `#1769ff` },
    linkedin: { label: `LinkedIn`, color: `#0a66c2`, bg: `#0a66c2` },
    google: { label: `Google`, color: `#4285f4`, bg: `#4285f4` },
    direct: {
      label: `Direct Client`,
      color: `var(--green)`,
      bg: `var(--green)`,
    },
    other: { label: `Client`, color: `var(--gray)`, bg: `var(--gray)` },
  };
function xt({ platform: e, profileUrl: t }) {
  let n = Z[e] || Z.other,
    r = bt[e],
    i = (0, W.jsxs)(`span`, {
      className: X.platformBadge,
      style: {
        background: n.color + `20`,
        border: `1px solid ${n.color}40`,
        color: n.color,
      },
      children: [
        (0, W.jsx)(`span`, {
          className: X.platformIcon,
          style: { background: n.color },
          children: r || (e === `direct` ? `✓` : `★`),
        }),
        n.label,
        t &&
          (0, W.jsx)(`i`, {
            className: `fas fa-external-link-alt`,
            style: { fontSize: `0.6rem`, opacity: 0.7 },
          }),
      ],
    });
  return t
    ? (0, W.jsx)(`a`, {
        href: t,
        target: `_blank`,
        rel: `noreferrer`,
        className: X.platformLink,
        children: i,
      })
    : i;
}
function St({ name: e }) {
  let t = [
      `#22c55e`,
      `#3b82f6`,
      `#f59e0b`,
      `#ec4899`,
      `#8b5cf6`,
      `#06b6d4`,
      `#f97316`,
    ],
    n = t[(e || `?`).charAt(0).toUpperCase().charCodeAt(0) % t.length];
  return (0, W.jsx)(`div`, {
    className: X.humanIcon,
    children: (0, W.jsxs)(`svg`, {
      viewBox: `0 0 40 40`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      className: X.humanSvg,
      children: [
        (0, W.jsx)(`circle`, {
          cx: `20`,
          cy: `20`,
          r: `20`,
          fill: n,
          fillOpacity: `0.12`,
        }),
        (0, W.jsx)(`circle`, {
          cx: `20`,
          cy: `14`,
          r: `7`,
          fill: n,
          fillOpacity: `0.7`,
        }),
        (0, W.jsx)(`path`, {
          d: `M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14`,
          fill: n,
          fillOpacity: `0.5`,
        }),
      ],
    }),
  });
}
function Ct() {
  let { data: e } = S(),
    [t, n] = (0, R.useState)(0),
    r = C(),
    i = (e.testimonials || []).filter((e) => !e.hidden);
  return (
    (0, R.useEffect)(() => {
      if (!i.length) return;
      let e = setInterval(() => n((e) => (e + 1) % i.length), 5e3);
      return () => clearInterval(e);
    }, [i.length]),
    i.length
      ? (0, W.jsx)(`section`, {
          className: `section`,
          id: `clients`,
          children: (0, W.jsxs)(`div`, {
            className: `section-inner`,
            children: [
              (0, W.jsxs)(`div`, {
                ref: r,
                className: `reveal`,
                style: { textAlign: `center` },
                children: [
                  (0, W.jsx)(`div`, {
                    className: `section-label`,
                    style: { justifyContent: `center` },
                    children: `Client Feedback`,
                  }),
                  (0, W.jsxs)(`h2`, {
                    className: `section-title`,
                    children: [
                      `What Clients `,
                      (0, W.jsx)(`span`, { children: `Say` }),
                    ],
                  }),
                ],
              }),
              (0, W.jsx)(`div`, {
                className: X.slider,
                children: (0, W.jsx)(`div`, {
                  className: X.track,
                  style: { transform: `translateX(-` + t * 100 + `%)` },
                  children: i.map((t, n) => {
                    var r;
                    return (0, W.jsx)(
                      `div`,
                      {
                        className: X.slide,
                        children: (0, W.jsxs)(`div`, {
                          className: X.card,
                          children: [
                            (0, W.jsx)(`div`, {
                              className: X.quoteIcon,
                              children: (0, W.jsx)(`i`, {
                                className: `fas fa-quote-left`,
                              }),
                            }),
                            (0, W.jsx)(`div`, {
                              className: X.stars,
                              children: `⭐`.repeat(t.stars || 5),
                            }),
                            (0, W.jsx)(`p`, {
                              className: X.text,
                              children: t.text,
                            }),
                            (0, W.jsxs)(`div`, {
                              className: X.bottom,
                              children: [
                                (0, W.jsxs)(`div`, {
                                  className: X.author,
                                  children: [
                                    (0, W.jsx)(St, { name: t.name }),
                                    (0, W.jsxs)(`div`, {
                                      children: [
                                        (0, W.jsx)(`div`, {
                                          className: X.name,
                                          children: t.name,
                                        }),
                                        (0, W.jsx)(`div`, {
                                          className: X.role,
                                          children: t.role,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (t.platform || t.profileUrl) &&
                                  (0, W.jsx)(xt, {
                                    platform: t.platform || `other`,
                                    profileUrl: t.profileUrl,
                                  }),
                              ],
                            }),
                            ((r = e.platformLinks) == null
                              ? void 0
                              : r.filter((e) => !e.hidden).length) > 0 &&
                              (0, W.jsxs)(`div`, {
                                className: X.seeReviews,
                                children: [
                                  (0, W.jsx)(`span`, {
                                    className: X.seeReviewsLabel,
                                    children: `See reviews on`,
                                  }),
                                  e.platformLinks
                                    .filter((e) => !e.hidden)
                                    .map((e, t) => {
                                      let n = Z[e.platform] || Z.other;
                                      return (0, W.jsxs)(
                                        `a`,
                                        {
                                          href: e.url,
                                          target: `_blank`,
                                          rel: `noreferrer`,
                                          className: X.seeReviewBtn,
                                          style: {
                                            borderColor: n.color + `50`,
                                            color: n.color,
                                          },
                                          children: [
                                            (0, W.jsx)(`span`, {
                                              className: X.platformBtnIcon,
                                              style: { background: n.color },
                                              children:
                                                bt[e.platform] ||
                                                (e.platform === `direct`
                                                  ? `✓`
                                                  : `★`),
                                            }),
                                            e.label || n.label,
                                            (0, W.jsx)(`i`, {
                                              className: `fas fa-external-link-alt`,
                                              style: {
                                                fontSize: `0.55rem`,
                                                opacity: 0.7,
                                              },
                                            }),
                                          ],
                                        },
                                        t,
                                      );
                                    }),
                                ],
                              }),
                          ],
                        }),
                      },
                      t.id || n,
                    );
                  }),
                }),
              }),
              (0, W.jsx)(`div`, {
                className: X.dots,
                children: i.map((e, r) =>
                  (0, W.jsx)(
                    `button`,
                    {
                      className: `${X.dot} ${r === t ? X.active : ``}`,
                      onClick: () => n(r),
                    },
                    r,
                  ),
                ),
              }),
            ],
          }),
        })
      : null
  );
}
var Q = {
  grid: `_grid_1v1er_1`,
  intro: `_intro_1v1er_2`,
  items: `_items_1v1er_3`,
  item: `_item_1v1er_3`,
  icon: `_icon_1v1er_5`,
  socials: `_socials_1v1er_9`,
  social: `_social_1v1er_9`,
  wa: `_wa_1v1er_12`,
  form: `_form_1v1er_14`,
  row: `_row_1v1er_15`,
  field: `_field_1v1er_16`,
  success: `_success_1v1er_24`,
  waCta: `_waCta_1v1er_29`,
  waCtaText: `_waCtaText_1v1er_40`,
  error: `_error_1v1er_43`,
};
i();
function wt() {
  let { data: e } = S(),
    [t, n] = (0, R.useState)({
      name: ``,
      email: ``,
      service: ``,
      message: ``,
      _hp: ``,
    }),
    [r, i] = (0, R.useState)(null),
    o = C(),
    c = C(),
    l = e.social || {},
    u = `https://wa.me/${(l.wa || `+8801731186929`).replace(/\D/g, ``)}`;
  function d(e) {
    return f.apply(this, arguments);
  }
  function f() {
    return (
      (f = s(function* (e) {
        if ((e.preventDefault(), !t._hp && !(!t.name || !t.message))) {
          i(`sending`);
          try {
            yield re(t);
            try {
              let e = window.__emailjsKey || `ZzBijccFb5fucV5h0`;
              e
                ? window.emailjs &&
                  (yield window.emailjs.send(
                    `service_ij73ywl`,
                    `template_ni7r5ap`,
                    {
                      from_name: t.name,
                      from_email: t.email || `Not provided`,
                      service_type: t.service || `Not specified`,
                      message: t.message,
                      to_email: `binashad7@gmail.com`,
                      reply_to: t.email || `binashad7@gmail.com`,
                      sent_time: new Date().toLocaleString(`en-BD`, {
                        timeZone: `Asia/Dhaka`,
                      }),
                      website_url: `https://portfolio-alamin-79c1d.web.app`,
                    },
                    e,
                  ))
                : console.warn(
                    `EmailJS public key not set. Go to Admin → AI Settings.`,
                  );
            } catch (e) {
              console.error(`EmailJS error:`, e);
            }
            (i(`success`),
              n({ name: ``, email: ``, service: ``, message: `` }),
              setTimeout(() => i(null), 6e3));
          } catch (e) {
            (i(`error`), setTimeout(() => i(null), 5e3));
          }
        }
      })),
      f.apply(this, arguments)
    );
  }
  return (0, W.jsx)(`section`, {
    className: `section`,
    id: `contact`,
    children: (0, W.jsx)(`div`, {
      className: `section-inner`,
      children: (0, W.jsxs)(`div`, {
        className: Q.grid,
        children: [
          (0, W.jsxs)(`div`, {
            ref: o,
            className: `reveal`,
            children: [
              (0, W.jsx)(`div`, {
                className: `section-label`,
                children: `Get in Touch`,
              }),
              (0, W.jsxs)(`h2`, {
                className: `section-title`,
                children: [
                  `Let's Work`,
                  (0, W.jsx)(`br`, {}),
                  (0, W.jsx)(`span`, { children: `Together` }),
                ],
              }),
              (0, W.jsx)(`p`, {
                className: Q.intro,
                children: `Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.`,
              }),
              (0, W.jsxs)(`div`, {
                className: Q.items,
                children: [
                  (0, W.jsxs)(`div`, {
                    className: Q.item,
                    children: [
                      (0, W.jsx)(`div`, {
                        className: Q.icon,
                        children: (0, W.jsx)(`i`, {
                          className: `fas fa-envelope`,
                        }),
                      }),
                      (0, W.jsxs)(`div`, {
                        children: [
                          (0, W.jsx)(`span`, { children: `Email` }),
                          (0, W.jsx)(`strong`, {
                            children: `binashad7@gmail.com`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, W.jsxs)(`div`, {
                    className: Q.item,
                    children: [
                      (0, W.jsx)(`div`, {
                        className: Q.icon,
                        children: (0, W.jsx)(`i`, {
                          className: `fas fa-map-marker-alt`,
                        }),
                      }),
                      (0, W.jsxs)(`div`, {
                        children: [
                          (0, W.jsx)(`span`, { children: `Location` }),
                          (0, W.jsx)(`strong`, {
                            children: `Narayanganj, Bangladesh`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, W.jsxs)(`a`, {
                href: u,
                target: `_blank`,
                rel: `noreferrer`,
                className: Q.waCta,
                children: [
                  (0, W.jsx)(`i`, { className: `fab fa-whatsapp` }),
                  (0, W.jsxs)(`div`, {
                    className: Q.waCtaText,
                    children: [
                      (0, W.jsx)(`span`, { children: `Chat on WhatsApp` }),
                      (0, W.jsx)(`small`, { children: `+880 1731-186929` }),
                    ],
                  }),
                ],
              }),
              (0, W.jsxs)(`div`, {
                className: Q.socials,
                children: [
                  l.fb &&
                    l.fb !== `#` &&
                    (0, W.jsx)(`a`, {
                      href: l.fb,
                      target: `_blank`,
                      rel: `noreferrer`,
                      className: Q.social,
                      children: (0, W.jsx)(`i`, {
                        className: `fab fa-facebook-f`,
                      }),
                    }),
                  l.li &&
                    l.li !== `#` &&
                    (0, W.jsx)(`a`, {
                      href: l.li,
                      target: `_blank`,
                      rel: `noreferrer`,
                      className: Q.social,
                      children: (0, W.jsx)(`i`, {
                        className: `fab fa-linkedin-in`,
                      }),
                    }),
                  l.ig &&
                    l.ig !== `#` &&
                    (0, W.jsx)(`a`, {
                      href: l.ig,
                      target: `_blank`,
                      rel: `noreferrer`,
                      className: Q.social,
                      children: (0, W.jsx)(`i`, {
                        className: `fab fa-instagram`,
                      }),
                    }),
                  l.beh &&
                    l.beh !== `#` &&
                    (0, W.jsx)(`a`, {
                      href: l.beh,
                      target: `_blank`,
                      rel: `noreferrer`,
                      className: Q.social,
                      children: (0, W.jsx)(`i`, {
                        className: `fab fa-behance`,
                      }),
                    }),
                  l.yt &&
                    l.yt !== `#` &&
                    (0, W.jsx)(`a`, {
                      href: l.yt,
                      target: `_blank`,
                      rel: `noreferrer`,
                      className: Q.social,
                      children: (0, W.jsx)(`i`, {
                        className: `fab fa-youtube`,
                      }),
                    }),
                ],
              }),
            ],
          }),
          (0, W.jsx)(`div`, {
            ref: c,
            className: `reveal`,
            children: (0, W.jsxs)(`form`, {
              className: Q.form,
              onSubmit: d,
              children: [
                (0, W.jsxs)(`div`, {
                  className: Q.row,
                  children: [
                    (0, W.jsxs)(`div`, {
                      className: Q.field,
                      children: [
                        (0, W.jsx)(`label`, { children: `Your Name` }),
                        (0, W.jsx)(`input`, {
                          type: `text`,
                          placeholder: `John Doe`,
                          required: !0,
                          value: t.name,
                          onChange: (e) =>
                            n((t) => a(a({}, t), {}, { name: e.target.value })),
                        }),
                      ],
                    }),
                    (0, W.jsxs)(`div`, {
                      className: Q.field,
                      children: [
                        (0, W.jsx)(`label`, { children: `Email Address` }),
                        (0, W.jsx)(`input`, {
                          type: `email`,
                          placeholder: `john@example.com`,
                          value: t.email,
                          onChange: (e) =>
                            n((t) =>
                              a(a({}, t), {}, { email: e.target.value }),
                            ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, W.jsxs)(`div`, {
                  className: Q.field,
                  children: [
                    (0, W.jsx)(`label`, { children: `Service Needed` }),
                    (0, W.jsxs)(`select`, {
                      value: t.service,
                      onChange: (e) =>
                        n((t) => a(a({}, t), {}, { service: e.target.value })),
                      children: [
                        (0, W.jsx)(`option`, {
                          value: ``,
                          children: `Select a service`,
                        }),
                        (0, W.jsx)(`option`, { children: `Graphic Design` }),
                        (0, W.jsx)(`option`, { children: `Website Design` }),
                        (0, W.jsx)(`option`, { children: `Video Editing` }),
                        (0, W.jsx)(`option`, { children: `AI Solutions` }),
                        (0, W.jsx)(`option`, { children: `Brand Identity` }),
                        (0, W.jsx)(`option`, { children: `Other` }),
                      ],
                    }),
                  ],
                }),
                (0, W.jsxs)(`div`, {
                  className: Q.field,
                  children: [
                    (0, W.jsx)(`label`, { children: `Message` }),
                    (0, W.jsx)(`textarea`, {
                      placeholder: `Tell me about your project...`,
                      required: !0,
                      value: t.message,
                      onChange: (e) =>
                        n((t) => a(a({}, t), {}, { message: e.target.value })),
                    }),
                  ],
                }),
                r === `success` &&
                  (0, W.jsxs)(`div`, {
                    className: Q.success,
                    children: [
                      (0, W.jsx)(`i`, { className: `fas fa-check-circle` }),
                      ` Message sent! I'll get back to you soon.`,
                    ],
                  }),
                r === `error` &&
                  (0, W.jsxs)(`div`, {
                    className: Q.error,
                    children: [
                      (0, W.jsx)(`i`, {
                        className: `fas fa-exclamation-circle`,
                      }),
                      ` Failed to send. Please try WhatsApp instead.`,
                    ],
                  }),
                (0, W.jsx)(`button`, {
                  type: `submit`,
                  className: `btn-primary`,
                  disabled: r === `sending`,
                  children:
                    r === `sending`
                      ? (0, W.jsxs)(W.Fragment, {
                          children: [
                            (0, W.jsx)(`i`, {
                              className: `fas fa-spinner fa-spin`,
                            }),
                            ` Sending…`,
                          ],
                        })
                      : (0, W.jsxs)(W.Fragment, {
                          children: [
                            (0, W.jsx)(`i`, {
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
    }),
  });
}
var $ = {
  section: `_section_271x6_1`,
  inner: `_inner_271x6_2`,
  header: `_header_271x6_5`,
  title: `_title_271x6_6`,
  sub: `_sub_271x6_8`,
  viewAll: `_viewAll_271x6_9`,
  grid: `_grid_271x6_13`,
  sideCards: `_sideCards_271x6_14`,
  card: `_card_271x6_17`,
  imgWrap: `_imgWrap_271x6_22`,
  topic: `_topic_271x6_25`,
  featuredBadge: `_featuredBadge_271x6_26`,
  cardBody: `_cardBody_271x6_29`,
  meta: `_meta_271x6_30`,
  cardTitle: `_cardTitle_271x6_33`,
  excerpt: `_excerpt_271x6_37`,
  readMore: `_readMore_271x6_41`,
  cta: `_cta_271x6_45`,
  ctaText: `_ctaText_271x6_46`,
  ctaBtn: `_ctaBtn_271x6_49`,
};
function Tt() {
  var e, n, r, i, a, o, s, c;
  let { data: l } = S(),
    u = ((l == null ? void 0 : l.blog) || [])
      .filter((e) => !e.hidden)
      .sort((e, t) => new Date(t.publishedAt) - new Date(e.publishedAt))
      .slice(0, 3);
  if (!u.length) return null;
  function d(e) {
    return new Date(e).toLocaleDateString(`en-US`, {
      month: `short`,
      day: `numeric`,
      year: `numeric`,
    });
  }
  return (0, W.jsx)(`section`, {
    className: $.section,
    id: `blog-preview`,
    children: (0, W.jsxs)(`div`, {
      className: $.inner,
      children: [
        (0, W.jsxs)(`div`, {
          className: $.header,
          children: [
            (0, W.jsxs)(`div`, {
              children: [
                (0, W.jsx)(`div`, {
                  className: `section-label`,
                  children: `Latest from Blog`,
                }),
                (0, W.jsxs)(`h2`, {
                  className: $.title,
                  children: [
                    `Design Tips, AI Updates`,
                    (0, W.jsx)(`br`, {}),
                    `& `,
                    (0, W.jsx)(`span`, { children: `Industry Insights` }),
                  ],
                }),
                (0, W.jsx)(`p`, {
                  className: $.sub,
                  children: `Graphic Design, AI tools আর Freelancing নিয়ে practical বাংলা articles। প্রতি সপ্তাহে নতুন content।`,
                }),
              ],
            }),
            (0, W.jsxs)(t, {
              to: `/blog`,
              className: $.viewAll,
              children: [
                `সব Blog দেখুন `,
                (0, W.jsx)(`i`, { className: `fas fa-arrow-right` }),
              ],
            }),
          ],
        }),
        (0, W.jsxs)(`div`, {
          className: $.grid,
          children: [
            (0, W.jsxs)(t, {
              to: `/blog/${(e = u[0]) == null ? void 0 : e.id}`,
              className: `${$.card} ${$.featured}`,
              children: [
                (0, W.jsxs)(`div`, {
                  className: $.imgWrap,
                  children: [
                    (0, W.jsx)(`img`, {
                      src: (n = u[0]) == null ? void 0 : n.coverUrl,
                      alt: (r = u[0]) == null ? void 0 : r.title,
                      loading: `lazy`,
                    }),
                    (0, W.jsxs)(`div`, {
                      className: $.featuredBadge,
                      children: [
                        (0, W.jsx)(`i`, { className: `fas fa-star` }),
                        ` Featured`,
                      ],
                    }),
                    (0, W.jsx)(`div`, {
                      className: $.topic,
                      children: (i = u[0]) == null ? void 0 : i.topic,
                    }),
                  ],
                }),
                (0, W.jsxs)(`div`, {
                  className: $.cardBody,
                  children: [
                    (0, W.jsxs)(`div`, {
                      className: $.meta,
                      children: [
                        (0, W.jsxs)(`span`, {
                          children: [
                            (0, W.jsx)(`i`, { className: `fas fa-calendar` }),
                            ` `,
                            d((a = u[0]) == null ? void 0 : a.publishedAt),
                          ],
                        }),
                        (0, W.jsxs)(`span`, {
                          children: [
                            (0, W.jsx)(`i`, { className: `fas fa-clock` }),
                            ` `,
                            (o = u[0]) == null ? void 0 : o.readTime,
                            ` min read`,
                          ],
                        }),
                      ],
                    }),
                    (0, W.jsx)(`h3`, {
                      className: $.cardTitle,
                      children: (s = u[0]) == null ? void 0 : s.title,
                    }),
                    (0, W.jsx)(`p`, {
                      className: $.excerpt,
                      children: (c = u[0]) == null ? void 0 : c.excerpt,
                    }),
                    (0, W.jsxs)(`span`, {
                      className: $.readMore,
                      children: [
                        `পড়ুন `,
                        (0, W.jsx)(`i`, { className: `fas fa-arrow-right` }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, W.jsx)(`div`, {
              className: $.sideCards,
              children: u
                .slice(1, 3)
                .map((e) =>
                  (0, W.jsxs)(
                    t,
                    {
                      to: `/blog/${e.id}`,
                      className: $.card,
                      children: [
                        (0, W.jsxs)(`div`, {
                          className: $.imgWrap,
                          style: { height: 160 },
                          children: [
                            (0, W.jsx)(`img`, {
                              src: e.coverUrl,
                              alt: e.title,
                              loading: `lazy`,
                            }),
                            (0, W.jsx)(`div`, {
                              className: $.topic,
                              children: e.topic,
                            }),
                          ],
                        }),
                        (0, W.jsxs)(`div`, {
                          className: $.cardBody,
                          children: [
                            (0, W.jsxs)(`div`, {
                              className: $.meta,
                              children: [
                                (0, W.jsxs)(`span`, {
                                  children: [
                                    (0, W.jsx)(`i`, {
                                      className: `fas fa-calendar`,
                                    }),
                                    ` `,
                                    d(e.publishedAt),
                                  ],
                                }),
                                (0, W.jsxs)(`span`, {
                                  children: [
                                    (0, W.jsx)(`i`, {
                                      className: `fas fa-clock`,
                                    }),
                                    ` `,
                                    e.readTime,
                                    ` min read`,
                                  ],
                                }),
                              ],
                            }),
                            (0, W.jsx)(`h3`, {
                              className: $.cardTitle,
                              children: e.title,
                            }),
                            (0, W.jsxs)(`span`, {
                              className: $.readMore,
                              children: [
                                `পড়ুন `,
                                (0, W.jsx)(`i`, {
                                  className: `fas fa-arrow-right`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
            }),
          ],
        }),
        (0, W.jsxs)(`div`, {
          className: $.cta,
          children: [
            (0, W.jsxs)(`div`, {
              className: $.ctaText,
              children: [
                (0, W.jsx)(`i`, { className: `fas fa-rss` }),
                (0, W.jsxs)(`div`, {
                  children: [
                    (0, W.jsx)(`strong`, { children: `৫৫+ articles` }),
                    ` — Graphic Design, AI Tools, Freelancing Career নিয়ে বাংলায়`,
                  ],
                }),
              ],
            }),
            (0, W.jsxs)(t, {
              to: `/blog`,
              className: $.ctaBtn,
              children: [
                `Blog Explore করুন `,
                (0, W.jsx)(`i`, { className: `fas fa-external-link-alt` }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Et() {
  return (0, W.jsxs)(`main`, {
    children: [
      (0, W.jsx)(ue, {
        title: `Graphic Designer & AI Expert`,
        description: `Al-Amin Bin Ashad Ali — Professional Graphic Designer and AI Expert from Bangladesh. 8+ years creating brands, logos, web designs and AI-powered visual content.`,
        url: `/`,
        keywords: `graphic designer bangladesh, logo designer, AI expert, brand identity designer, web designer bangladesh, social media designer, narayanganj designer`,
      }),
      (0, W.jsx)(nt, {}),
      (0, W.jsx)(it, {}),
      (0, W.jsx)(ot, {}),
      (0, W.jsx)(yt, { limit: 4 }),
      (0, W.jsx)(Ct, {}),
      (0, W.jsx)(Tt, {}),
      (0, W.jsx)(wt, {}),
    ],
  });
}
export { Et as default };
