import { n as e } from "./rolldown-runtime.js";
function t(e) {
  "@babel/helpers - typeof";
  return (
    (t =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    t(e)
  );
}
var n = e(() => {});
function r(e, n) {
  if (t(e) != `object` || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(e, n || `default`);
    if (t(i) != `object`) return i;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (n === `string` ? String : Number)(e);
}
var i = e(() => {
  n();
});
function a(e) {
  var n = r(e, `string`);
  return t(n) == `symbol` ? n : n + ``;
}
var o = e(() => {
  (n(), i());
});
function s(e, t, n) {
  return (
    (t = a(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var c = e(() => {
  o();
});
function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? l(Object(n), !0).forEach(function (t) {
          s(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : l(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
var d = e(() => {
  c();
});
d();
function f(e, t, n, r, i, a, o) {
  try {
    var s = e[a](o),
      c = s.value;
  } catch (e) {
    n(e);
    return;
  }
  s.done ? t(c) : Promise.resolve(c).then(r, i);
}
function p(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, i) {
      var a = e.apply(t, n);
      function o(e) {
        f(a, r, i, o, s, `next`, e);
      }
      function s(e) {
        f(a, r, i, o, s, `throw`, e);
      }
      o(void 0);
    });
  };
}
function m(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
function h(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.includes(n) || ({}.propertyIsEnumerable.call(e, n) && (i[n] = e[n])));
  }
  return i;
}
var g = () => void 0,
  ee = function (e) {
    let t = [],
      n = 0;
    for (let r = 0; r < e.length; r++) {
      let i = e.charCodeAt(r);
      i < 128
        ? (t[n++] = i)
        : i < 2048
          ? ((t[n++] = (i >> 6) | 192), (t[n++] = (i & 63) | 128))
          : (i & 64512) == 55296 &&
              r + 1 < e.length &&
              (e.charCodeAt(r + 1) & 64512) == 56320
            ? ((i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023)),
              (t[n++] = (i >> 18) | 240),
              (t[n++] = ((i >> 12) & 63) | 128),
              (t[n++] = ((i >> 6) & 63) | 128),
              (t[n++] = (i & 63) | 128))
            : ((t[n++] = (i >> 12) | 224),
              (t[n++] = ((i >> 6) & 63) | 128),
              (t[n++] = (i & 63) | 128));
    }
    return t;
  },
  te = function (e) {
    let t = [],
      n = 0,
      r = 0;
    for (; n < e.length;) {
      let i = e[n++];
      if (i < 128) t[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        let a = e[n++];
        t[r++] = String.fromCharCode(((i & 31) << 6) | (a & 63));
      } else if (i > 239 && i < 365) {
        let a = e[n++],
          o = e[n++],
          s = e[n++],
          c =
            (((i & 7) << 18) | ((a & 63) << 12) | ((o & 63) << 6) | (s & 63)) -
            65536;
        ((t[r++] = String.fromCharCode(55296 + (c >> 10))),
          (t[r++] = String.fromCharCode(56320 + (c & 1023))));
      } else {
        let a = e[n++],
          o = e[n++];
        t[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((a & 63) << 6) | (o & 63),
        );
      }
    }
    return t.join(``);
  },
  ne = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`,
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + `+/=`;
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + `-_.`;
    },
    HAS_NATIVE_SUPPORT: typeof atob == `function`,
    encodeByteArray(e, t) {
      if (!Array.isArray(e))
        throw Error(`encodeByteArray takes an array as a parameter`);
      this.init_();
      let n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let t = 0; t < e.length; t += 3) {
        let i = e[t],
          a = t + 1 < e.length,
          o = a ? e[t + 1] : 0,
          s = t + 2 < e.length,
          c = s ? e[t + 2] : 0,
          l = i >> 2,
          u = ((i & 3) << 4) | (o >> 4),
          d = ((o & 15) << 2) | (c >> 6),
          f = c & 63;
        (s || ((f = 64), a || (d = 64)), r.push(n[l], n[u], n[d], n[f]));
      }
      return r.join(``);
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(e)
        : this.encodeByteArray(ee(e), t);
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : te(this.decodeStringToByteArray(e, t));
    },
    decodeStringToByteArray(e, t) {
      this.init_();
      let n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let t = 0; t < e.length;) {
        let i = n[e.charAt(t++)],
          a = t < e.length ? n[e.charAt(t)] : 0;
        ++t;
        let o = t < e.length ? n[e.charAt(t)] : 64;
        ++t;
        let s = t < e.length ? n[e.charAt(t)] : 64;
        if ((++t, i == null || a == null || o == null || s == null))
          throw new re();
        let c = (i << 2) | (a >> 4);
        if ((r.push(c), o !== 64)) {
          let e = ((a << 4) & 240) | (o >> 2);
          if ((r.push(e), s !== 64)) {
            let e = ((o << 6) & 192) | s;
            r.push(e);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        ((this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {}));
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
          ((this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
            (this.charToByteMap_[this.byteToCharMap_[e]] = e),
            (this.byteToCharMapWebSafe_[e] =
              this.ENCODED_VALS_WEBSAFE.charAt(e)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
            e >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)));
      }
    },
  },
  re = class extends Error {
    constructor() {
      (super(...arguments), (this.name = `DecodeBase64StringError`));
    }
  },
  ie = function (e) {
    let t = ee(e);
    return ne.encodeByteArray(t, !0);
  },
  _ = function (e) {
    return ie(e).replace(/\./g, ``);
  },
  ae = function (e) {
    try {
      return ne.decodeString(e, !0);
    } catch (e) {
      console.error(`base64Decode failed: `, e);
    }
    return null;
  };
function oe() {
  if (typeof self < `u`) return self;
  if (typeof window < `u`) return window;
  if (typeof global < `u`) return global;
  throw Error(`Unable to locate global object.`);
}
var se = () => oe().__FIREBASE_DEFAULTS__,
  ce = () => {
    if (typeof process > `u`) return;
    let e = {}.__FIREBASE_DEFAULTS__;
    if (e) return JSON.parse(e);
  },
  v = () => {
    if (typeof document > `u`) return;
    let e;
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch (e) {
      return;
    }
    let t = e && ae(e[1]);
    return t && JSON.parse(t);
  },
  le = () => {
    try {
      return g() || se() || ce() || v();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  },
  ue = (e) => {
    var t;
    return (t = le()) == null || (t = t.emulatorHosts) == null ? void 0 : t[e];
  },
  de = (e) => {
    let t = ue(e);
    if (!t) return;
    let n = t.lastIndexOf(`:`);
    if (n <= 0 || n + 1 === t.length)
      throw Error(`Invalid host ${t} with no separate hostname and port!`);
    let r = parseInt(t.substring(n + 1), 10);
    return t[0] === `[` ? [t.substring(1, n - 1), r] : [t.substring(0, n), r];
  },
  fe = () => {
    var e;
    return (e = le()) == null ? void 0 : e.config;
  },
  pe = (e) => {
    var t;
    return (t = le()) == null ? void 0 : t[`_${e}`];
  },
  me = class {
    constructor() {
      ((this.reject = () => {}),
        (this.resolve = () => {}),
        (this.promise = new Promise((e, t) => {
          ((this.resolve = e), (this.reject = t));
        })));
    }
    wrapCallback(e) {
      return (t, n) => {
        (t ? this.reject(t) : this.resolve(n),
          typeof e == `function` &&
            (this.promise.catch(() => {}), e.length === 1 ? e(t) : e(t, n)));
      };
    }
  };
function he(e, t) {
  if (e.uid)
    throw Error(
      `The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.`,
    );
  let n = { alg: `none`, type: `JWT` },
    r = t || `demo-project`,
    i = e.iat || 0,
    a = e.sub || e.user_id;
  if (!a) throw Error(`mockUserToken must contain 'sub' or 'user_id' field!`);
  let o = u(
    {
      iss: `https://securetoken.google.com/${r}`,
      aud: r,
      iat: i,
      exp: i + 3600,
      auth_time: i,
      sub: a,
      user_id: a,
      firebase: { sign_in_provider: `custom`, identities: {} },
    },
    e,
  );
  return [_(JSON.stringify(n)), _(JSON.stringify(o)), ``].join(`.`);
}
function y() {
  return typeof navigator < `u` && typeof navigator.userAgent == `string`
    ? navigator.userAgent
    : ``;
}
function ge() {
  return (
    typeof window < `u` &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y())
  );
}
function _e() {
  var e;
  let t = (e = le()) == null ? void 0 : e.forceEnvironment;
  if (t === `node`) return !0;
  if (t === `browser`) return !1;
  try {
    return (
      Object.prototype.toString.call(global.process) === `[object process]`
    );
  } catch (e) {
    return !1;
  }
}
function ve() {
  return typeof navigator < `u` && navigator.userAgent === `Cloudflare-Workers`;
}
function ye() {
  let e =
    typeof chrome == `object`
      ? chrome.runtime
      : typeof browser == `object`
        ? browser.runtime
        : void 0;
  return typeof e == `object` && e.id !== void 0;
}
function be() {
  return typeof navigator == `object` && navigator.product === `ReactNative`;
}
function xe() {
  let e = y();
  return e.indexOf(`MSIE `) >= 0 || e.indexOf(`Trident/`) >= 0;
}
function Se() {
  return (
    !_e() &&
    !!navigator.userAgent &&
    navigator.userAgent.includes(`Safari`) &&
    !navigator.userAgent.includes(`Chrome`)
  );
}
function Ce() {
  try {
    return typeof indexedDB == `object`;
  } catch (e) {
    return !1;
  }
}
function we() {
  return new Promise((e, t) => {
    try {
      let n = !0,
        r = `validate-browser-context-for-indexeddb-analytics-module`,
        i = self.indexedDB.open(r);
      ((i.onsuccess = () => {
        (i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0));
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var e;
          t(((e = i.error) == null ? void 0 : e.message) || ``);
        }));
    } catch (e) {
      t(e);
    }
  });
}
var Te = `FirebaseError`,
  Ee = class e extends Error {
    constructor(t, n, r) {
      (super(n),
        (this.code = t),
        (this.customData = r),
        (this.name = Te),
        Object.setPrototypeOf(this, e.prototype),
        Error.captureStackTrace &&
          Error.captureStackTrace(this, De.prototype.create));
    }
  },
  De = class {
    constructor(e, t, n) {
      ((this.service = e), (this.serviceName = t), (this.errors = n));
    }
    create(e, ...t) {
      let n = t[0] || {},
        r = `${this.service}/${e}`,
        i = this.errors[e],
        a = i ? Oe(i, n) : `Error`;
      return new Ee(r, `${this.serviceName}: ${a} (${r}).`, n);
    }
  };
function Oe(e, t) {
  return e.replace(ke, (e, n) => {
    let r = t[n];
    return r == null ? `<${n}?>` : String(r);
  });
}
var ke = /\{\$([^}]+)}/g;
function Ae(e) {
  for (let t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
function je(e, t) {
  if (e === t) return !0;
  let n = Object.keys(e),
    r = Object.keys(t);
  for (let i of n) {
    if (!r.includes(i)) return !1;
    let n = e[i],
      a = t[i];
    if (Me(n) && Me(a)) {
      if (!je(n, a)) return !1;
    } else if (n !== a) return !1;
  }
  for (let e of r) if (!n.includes(e)) return !1;
  return !0;
}
function Me(e) {
  return typeof e == `object` && !!e;
}
function Ne(e) {
  let t = [];
  for (let [n, r] of Object.entries(e))
    Array.isArray(r)
      ? r.forEach((e) => {
          t.push(encodeURIComponent(n) + `=` + encodeURIComponent(e));
        })
      : t.push(encodeURIComponent(n) + `=` + encodeURIComponent(r));
  return t.length ? `&` + t.join(`&`) : ``;
}
function Pe(e) {
  let t = {};
  return (
    e
      .replace(/^\?/, ``)
      .split(`&`)
      .forEach((e) => {
        if (e) {
          let [n, r] = e.split(`=`);
          t[decodeURIComponent(n)] = decodeURIComponent(r);
        }
      }),
    t
  );
}
function Fe(e) {
  let t = e.indexOf(`?`);
  if (!t) return ``;
  let n = e.indexOf(`#`, t);
  return e.substring(t, n > 0 ? n : void 0);
}
function b(e, t) {
  let n = new x(e, t);
  return n.subscribe.bind(n);
}
var x = class {
  constructor(e, t) {
    ((this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = t),
      this.task
        .then(() => {
          e(this);
        })
        .catch((e) => {
          this.error(e);
        }));
  }
  next(e) {
    this.forEachObserver((t) => {
      t.next(e);
    });
  }
  error(e) {
    (this.forEachObserver((t) => {
      t.error(e);
    }),
      this.close(e));
  }
  complete() {
    (this.forEachObserver((e) => {
      e.complete();
    }),
      this.close());
  }
  subscribe(e, t, n) {
    let r;
    if (e === void 0 && t === void 0 && n === void 0)
      throw Error(`Missing Observer.`);
    ((r = Ie(e, [`next`, `error`, `complete`])
      ? e
      : { next: e, error: t, complete: n }),
      r.next === void 0 && (r.next = Le),
      r.error === void 0 && (r.error = Le),
      r.complete === void 0 && (r.complete = Le));
    let i = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? r.error(this.finalError) : r.complete();
          } catch (e) {}
        }),
      this.observers.push(r),
      i
    );
  }
  unsubscribeOne(e) {
    this.observers === void 0 ||
      this.observers[e] === void 0 ||
      (delete this.observers[e],
      --this.observerCount,
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(e) {
    if (!this.finalized)
      for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e);
  }
  sendOne(e, t) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          t(this.observers[e]);
        } catch (e) {
          typeof console < `u` && console.error && console.error(e);
        }
    });
  }
  close(e) {
    this.finalized ||
      ((this.finalized = !0),
      e !== void 0 && (this.finalError = e),
      this.task.then(() => {
        ((this.observers = void 0), (this.onNoObservers = void 0));
      }));
  }
};
function Ie(e, t) {
  if (typeof e != `object` || !e) return !1;
  for (let n of t) if (n in e && typeof e[n] == `function`) return !0;
  return !1;
}
function Le() {}
function S(e) {
  return e && e._delegate ? e._delegate : e;
}
function Re(e) {
  try {
    return (
      e.startsWith(`http://`) || e.startsWith(`https://`)
        ? new URL(e).hostname
        : e
    ).endsWith(`.cloudworkstations.dev`);
  } catch (e) {
    return !1;
  }
}
function ze(e) {
  return Be.apply(this, arguments);
}
function Be() {
  return (
    (Be = p(function* (e) {
      return (yield fetch(e, { credentials: `include` })).ok;
    })),
    Be.apply(this, arguments)
  );
}
var Ve = class {
    constructor(e, t, n) {
      ((this.name = e),
        (this.instanceFactory = t),
        (this.type = n),
        (this.multipleInstances = !1),
        (this.serviceProps = {}),
        (this.instantiationMode = `LAZY`),
        (this.onInstanceCreated = null));
    }
    setInstantiationMode(e) {
      return ((this.instantiationMode = e), this);
    }
    setMultipleInstances(e) {
      return ((this.multipleInstances = e), this);
    }
    setServiceProps(e) {
      return ((this.serviceProps = e), this);
    }
    setInstanceCreatedCallback(e) {
      return ((this.onInstanceCreated = e), this);
    }
  },
  He = `[DEFAULT]`,
  Ue = class {
    constructor(e, t) {
      ((this.name = e),
        (this.container = t),
        (this.component = null),
        (this.instances = new Map()),
        (this.instancesDeferred = new Map()),
        (this.instancesOptions = new Map()),
        (this.onInitCallbacks = new Map()));
    }
    get(e) {
      let t = this.normalizeInstanceIdentifier(e);
      if (!this.instancesDeferred.has(t)) {
        let e = new me();
        if (
          (this.instancesDeferred.set(t, e),
          this.isInitialized(t) || this.shouldAutoInitialize())
        )
          try {
            let n = this.getOrInitializeService({ instanceIdentifier: t });
            n && e.resolve(n);
          } catch (e) {}
      }
      return this.instancesDeferred.get(t).promise;
    }
    getImmediate(e) {
      var t;
      let n = this.normalizeInstanceIdentifier(
          e == null ? void 0 : e.identifier,
        ),
        r = (t = e == null ? void 0 : e.optional) == null ? !1 : t;
      if (this.isInitialized(n) || this.shouldAutoInitialize())
        try {
          return this.getOrInitializeService({ instanceIdentifier: n });
        } catch (e) {
          if (r) return null;
          throw e;
        }
      else if (r) return null;
      else throw Error(`Service ${this.name} is not available`);
    }
    getComponent() {
      return this.component;
    }
    setComponent(e) {
      if (e.name !== this.name)
        throw Error(
          `Mismatching Component ${e.name} for Provider ${this.name}.`,
        );
      if (this.component)
        throw Error(`Component for ${this.name} has already been provided`);
      if (((this.component = e), this.shouldAutoInitialize())) {
        if (Ge(e))
          try {
            this.getOrInitializeService({ instanceIdentifier: He });
          } catch (e) {}
        for (let [e, t] of this.instancesDeferred.entries()) {
          let n = this.normalizeInstanceIdentifier(e);
          try {
            let e = this.getOrInitializeService({ instanceIdentifier: n });
            t.resolve(e);
          } catch (e) {}
        }
      }
    }
    clearInstance(e = He) {
      (this.instancesDeferred.delete(e),
        this.instancesOptions.delete(e),
        this.instances.delete(e));
    }
    delete() {
      var e = this;
      return p(function* () {
        let t = Array.from(e.instances.values());
        yield Promise.all([
          ...t.filter((e) => `INTERNAL` in e).map((e) => e.INTERNAL.delete()),
          ...t.filter((e) => `_delete` in e).map((e) => e._delete()),
        ]);
      })();
    }
    isComponentSet() {
      return this.component != null;
    }
    isInitialized(e = He) {
      return this.instances.has(e);
    }
    getOptions(e = He) {
      return this.instancesOptions.get(e) || {};
    }
    initialize(e = {}) {
      let { options: t = {} } = e,
        n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
      if (this.isInitialized(n))
        throw Error(`${this.name}(${n}) has already been initialized`);
      if (!this.isComponentSet())
        throw Error(`Component ${this.name} has not been registered yet`);
      let r = this.getOrInitializeService({
        instanceIdentifier: n,
        options: t,
      });
      for (let [e, t] of this.instancesDeferred.entries())
        n === this.normalizeInstanceIdentifier(e) && t.resolve(r);
      return r;
    }
    onInit(e, t) {
      var n;
      let r = this.normalizeInstanceIdentifier(t),
        i = (n = this.onInitCallbacks.get(r)) == null ? new Set() : n;
      (i.add(e), this.onInitCallbacks.set(r, i));
      let a = this.instances.get(r);
      return (
        a && e(a, r),
        () => {
          i.delete(e);
        }
      );
    }
    invokeOnInitCallbacks(e, t) {
      let n = this.onInitCallbacks.get(t);
      if (n)
        for (let r of n)
          try {
            r(e, t);
          } catch (e) {}
    }
    getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
      let n = this.instances.get(e);
      if (
        !n &&
        this.component &&
        ((n = this.component.instanceFactory(this.container, {
          instanceIdentifier: We(e),
          options: t,
        })),
        this.instances.set(e, n),
        this.instancesOptions.set(e, t),
        this.invokeOnInitCallbacks(n, e),
        this.component.onInstanceCreated)
      )
        try {
          this.component.onInstanceCreated(this.container, e, n);
        } catch (e) {}
      return n || null;
    }
    normalizeInstanceIdentifier(e = He) {
      return this.component ? (this.component.multipleInstances ? e : He) : e;
    }
    shouldAutoInitialize() {
      return (
        !!this.component && this.component.instantiationMode !== `EXPLICIT`
      );
    }
  };
function We(e) {
  return e === He ? void 0 : e;
}
function Ge(e) {
  return e.instantiationMode === `EAGER`;
}
var Ke = class {
    constructor(e) {
      ((this.name = e), (this.providers = new Map()));
    }
    addComponent(e) {
      let t = this.getProvider(e.name);
      if (t.isComponentSet())
        throw Error(
          `Component ${e.name} has already been registered with ${this.name}`,
        );
      t.setComponent(e);
    }
    addOrOverwriteComponent(e) {
      (this.getProvider(e.name).isComponentSet() &&
        this.providers.delete(e.name),
        this.addComponent(e));
    }
    getProvider(e) {
      if (this.providers.has(e)) return this.providers.get(e);
      let t = new Ue(e, this);
      return (this.providers.set(e, t), t);
    }
    getProviders() {
      return Array.from(this.providers.values());
    }
  },
  qe = [],
  C;
(function (e) {
  ((e[(e.DEBUG = 0)] = `DEBUG`),
    (e[(e.VERBOSE = 1)] = `VERBOSE`),
    (e[(e.INFO = 2)] = `INFO`),
    (e[(e.WARN = 3)] = `WARN`),
    (e[(e.ERROR = 4)] = `ERROR`),
    (e[(e.SILENT = 5)] = `SILENT`));
})(C || (C = {}));
var Je = {
    debug: C.DEBUG,
    verbose: C.VERBOSE,
    info: C.INFO,
    warn: C.WARN,
    error: C.ERROR,
    silent: C.SILENT,
  },
  Ye = C.INFO,
  Xe = {
    [C.DEBUG]: `log`,
    [C.VERBOSE]: `log`,
    [C.INFO]: `info`,
    [C.WARN]: `warn`,
    [C.ERROR]: `error`,
  },
  Ze = (e, t, ...n) => {
    if (t < e.logLevel) return;
    let r = new Date().toISOString(),
      i = Xe[t];
    if (i) console[i](`[${r}]  ${e.name}:`, ...n);
    else
      throw Error(
        `Attempted to log a message with an invalid logType (value: ${t})`,
      );
  },
  Qe = class {
    constructor(e) {
      ((this.name = e),
        (this._logLevel = Ye),
        (this._logHandler = Ze),
        (this._userLogHandler = null),
        qe.push(this));
    }
    get logLevel() {
      return this._logLevel;
    }
    set logLevel(e) {
      if (!(e in C))
        throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
      this._logLevel = e;
    }
    setLogLevel(e) {
      this._logLevel = typeof e == `string` ? Je[e] : e;
    }
    get logHandler() {
      return this._logHandler;
    }
    set logHandler(e) {
      if (typeof e != `function`)
        throw TypeError("Value assigned to `logHandler` must be a function");
      this._logHandler = e;
    }
    get userLogHandler() {
      return this._userLogHandler;
    }
    set userLogHandler(e) {
      this._userLogHandler = e;
    }
    debug(...e) {
      (this._userLogHandler && this._userLogHandler(this, C.DEBUG, ...e),
        this._logHandler(this, C.DEBUG, ...e));
    }
    log(...e) {
      (this._userLogHandler && this._userLogHandler(this, C.VERBOSE, ...e),
        this._logHandler(this, C.VERBOSE, ...e));
    }
    info(...e) {
      (this._userLogHandler && this._userLogHandler(this, C.INFO, ...e),
        this._logHandler(this, C.INFO, ...e));
    }
    warn(...e) {
      (this._userLogHandler && this._userLogHandler(this, C.WARN, ...e),
        this._logHandler(this, C.WARN, ...e));
    }
    error(...e) {
      (this._userLogHandler && this._userLogHandler(this, C.ERROR, ...e),
        this._logHandler(this, C.ERROR, ...e));
    }
  },
  $e = (e, t) => t.some((t) => e instanceof t),
  et,
  w;
function tt() {
  return (
    et ||
    (et = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function nt() {
  return (
    w ||
    (w = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
var rt = new WeakMap(),
  it = new WeakMap(),
  at = new WeakMap(),
  ot = new WeakMap(),
  st = new WeakMap();
function ct(e) {
  let t = new Promise((t, n) => {
    let r = () => {
        (e.removeEventListener(`success`, i),
          e.removeEventListener(`error`, a));
      },
      i = () => {
        (t(mt(e.result)), r());
      },
      a = () => {
        (n(e.error), r());
      };
    (e.addEventListener(`success`, i), e.addEventListener(`error`, a));
  });
  return (
    t
      .then((t) => {
        t instanceof IDBCursor && rt.set(t, e);
      })
      .catch(() => {}),
    st.set(t, e),
    t
  );
}
function lt(e) {
  if (it.has(e)) return;
  let t = new Promise((t, n) => {
    let r = () => {
        (e.removeEventListener(`complete`, i),
          e.removeEventListener(`error`, a),
          e.removeEventListener(`abort`, a));
      },
      i = () => {
        (t(), r());
      },
      a = () => {
        (n(e.error || new DOMException(`AbortError`, `AbortError`)), r());
      };
    (e.addEventListener(`complete`, i),
      e.addEventListener(`error`, a),
      e.addEventListener(`abort`, a));
  });
  it.set(e, t);
}
var ut = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === `done`) return it.get(e);
      if (t === `objectStoreNames`) return e.objectStoreNames || at.get(e);
      if (t === `store`)
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return mt(e[t]);
  },
  set(e, t, n) {
    return ((e[t] = n), !0);
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === `done` || t === `store`)
      ? !0
      : t in e;
  },
};
function dt(e) {
  ut = e(ut);
}
function ft(e) {
  return e === IDBDatabase.prototype.transaction &&
    !(`objectStoreNames` in IDBTransaction.prototype)
    ? function (t, ...n) {
        let r = e.call(ht(this), t, ...n);
        return (at.set(r, t.sort ? t.sort() : [t]), mt(r));
      }
    : nt().includes(e)
      ? function (...t) {
          return (e.apply(ht(this), t), mt(rt.get(this)));
        }
      : function (...t) {
          return mt(e.apply(ht(this), t));
        };
}
function pt(e) {
  return typeof e == `function`
    ? ft(e)
    : (e instanceof IDBTransaction && lt(e),
      $e(e, tt()) ? new Proxy(e, ut) : e);
}
function mt(e) {
  if (e instanceof IDBRequest) return ct(e);
  if (ot.has(e)) return ot.get(e);
  let t = pt(e);
  return (t !== e && (ot.set(e, t), st.set(t, e)), t);
}
var ht = (e) => st.get(e);
d();
function gt(e, t, { blocked: n, upgrade: r, blocking: i, terminated: a } = {}) {
  let o = indexedDB.open(e, t),
    s = mt(o);
  return (
    r &&
      o.addEventListener(`upgradeneeded`, (e) => {
        r(mt(o.result), e.oldVersion, e.newVersion, mt(o.transaction), e);
      }),
    n && o.addEventListener(`blocked`, (e) => n(e.oldVersion, e.newVersion, e)),
    s
      .then((e) => {
        (a && e.addEventListener(`close`, () => a()),
          i &&
            e.addEventListener(`versionchange`, (e) =>
              i(e.oldVersion, e.newVersion, e),
            ));
      })
      .catch(() => {}),
    s
  );
}
var _t = [`get`, `getKey`, `getAll`, `getAllKeys`, `count`],
  vt = [`put`, `add`, `delete`, `clear`],
  yt = new Map();
function bt(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == `string`)) return;
  if (yt.get(t)) return yt.get(t);
  let n = t.replace(/FromIndex$/, ``),
    r = t !== n,
    i = vt.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || _t.includes(n))
  )
    return;
  let a = (function () {
    var e = p(function* (e, ...t) {
      let a = this.transaction(e, i ? `readwrite` : `readonly`),
        o = a.store;
      return (
        r && (o = o.index(t.shift())),
        (yield Promise.all([o[n](...t), i && a.done]))[0]
      );
    });
    return function (t) {
      return e.apply(this, arguments);
    };
  })();
  return (yt.set(t, a), a);
}
(dt((e) =>
  u(
    u({}, e),
    {},
    {
      get: (t, n, r) => bt(t, n) || e.get(t, n, r),
      has: (t, n) => !!bt(t, n) || e.has(t, n),
    },
  ),
),
  d());
var xt = class {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((e) => {
        if (St(e)) {
          let t = e.getImmediate();
          return `${t.library}/${t.version}`;
        } else return null;
      })
      .filter((e) => e)
      .join(` `);
  }
};
function St(e) {
  let t = e.getComponent();
  return (t == null ? void 0 : t.type) === `VERSION`;
}
var Ct = `@firebase/app`,
  wt = `0.14.11`,
  Tt = new Qe(`@firebase/app`),
  Et = `@firebase/app-compat`,
  Dt = `@firebase/analytics-compat`,
  Ot = `@firebase/analytics`,
  kt = `@firebase/app-check-compat`,
  At = `@firebase/app-check`,
  jt = `@firebase/auth`,
  Mt = `@firebase/auth-compat`,
  Nt = `@firebase/database`,
  Pt = `@firebase/data-connect`,
  Ft = `@firebase/database-compat`,
  It = `@firebase/functions`,
  Lt = `@firebase/functions-compat`,
  Rt = `@firebase/installations`,
  zt = `@firebase/installations-compat`,
  Bt = `@firebase/messaging`,
  Vt = `@firebase/messaging-compat`,
  Ht = `@firebase/performance`,
  Ut = `@firebase/performance-compat`,
  Wt = `@firebase/remote-config`,
  T = `@firebase/remote-config-compat`,
  Gt = `@firebase/storage`,
  Kt = `@firebase/storage-compat`,
  qt = `@firebase/firestore`,
  Jt = `@firebase/ai`,
  Yt = `@firebase/firestore-compat`,
  Xt = `firebase`,
  Zt = `12.12.0`,
  Qt = `[DEFAULT]`,
  $t = {
    [Ct]: `fire-core`,
    [Et]: `fire-core-compat`,
    [Ot]: `fire-analytics`,
    [Dt]: `fire-analytics-compat`,
    [At]: `fire-app-check`,
    [kt]: `fire-app-check-compat`,
    [jt]: `fire-auth`,
    [Mt]: `fire-auth-compat`,
    [Nt]: `fire-rtdb`,
    [Pt]: `fire-data-connect`,
    [Ft]: `fire-rtdb-compat`,
    [It]: `fire-fn`,
    [Lt]: `fire-fn-compat`,
    [Rt]: `fire-iid`,
    [zt]: `fire-iid-compat`,
    [Bt]: `fire-fcm`,
    [Vt]: `fire-fcm-compat`,
    [Ht]: `fire-perf`,
    [Ut]: `fire-perf-compat`,
    [Wt]: `fire-rc`,
    [T]: `fire-rc-compat`,
    [Gt]: `fire-gcs`,
    [Kt]: `fire-gcs-compat`,
    [qt]: `fire-fst`,
    [Yt]: `fire-fst-compat`,
    [Jt]: `fire-vertex`,
    "fire-js": `fire-js`,
    [Xt]: `fire-js-all`,
  },
  en = new Map(),
  tn = new Map(),
  nn = new Map();
function rn(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    Tt.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n,
    );
  }
}
function an(e) {
  let t = e.name;
  if (nn.has(t))
    return (
      Tt.debug(`There were multiple attempts to register component ${t}.`),
      !1
    );
  nn.set(t, e);
  for (let t of en.values()) rn(t, e);
  for (let t of tn.values()) rn(t, e);
  return !0;
}
function on(e, t) {
  let n = e.container.getProvider(`heartbeat`).getImmediate({ optional: !0 });
  return (n && n.triggerHeartbeat(), e.container.getProvider(t));
}
function sn(e) {
  return e == null ? !1 : e.settings !== void 0;
}
var cn = new De(`app`, `Firebase`, {
    "no-app": `No Firebase App '{$appName}' has been created - call initializeApp() first`,
    "bad-app-name": `Illegal App name: '{$appName}'`,
    "duplicate-app": `Firebase App named '{$appName}' already exists with different options or config`,
    "app-deleted": `Firebase App named '{$appName}' already deleted`,
    "server-app-deleted": `Firebase Server App has been deleted`,
    "no-options": `Need to provide options, when not being deployed to hosting via source.`,
    "invalid-app-argument": `firebase.{$appName}() takes either no argument or a Firebase App instance.`,
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open": `Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.`,
    "idb-get": `Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.`,
    "idb-set": `Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.`,
    "idb-delete": `Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.`,
    "finalization-registry-not-supported": `FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.`,
    "invalid-server-app-environment": `FirebaseServerApp is not for use in browser environments.`,
  }),
  ln = class {
    constructor(e, t, n) {
      ((this._isDeleted = !1),
        (this._options = u({}, e)),
        (this._config = u({}, t)),
        (this._name = t.name),
        (this._automaticDataCollectionEnabled =
          t.automaticDataCollectionEnabled),
        (this._container = n),
        this.container.addComponent(new Ve(`app`, () => this, `PUBLIC`)));
    }
    get automaticDataCollectionEnabled() {
      return (this.checkDestroyed(), this._automaticDataCollectionEnabled);
    }
    set automaticDataCollectionEnabled(e) {
      (this.checkDestroyed(), (this._automaticDataCollectionEnabled = e));
    }
    get name() {
      return (this.checkDestroyed(), this._name);
    }
    get options() {
      return (this.checkDestroyed(), this._options);
    }
    get config() {
      return (this.checkDestroyed(), this._config);
    }
    get container() {
      return this._container;
    }
    get isDeleted() {
      return this._isDeleted;
    }
    set isDeleted(e) {
      this._isDeleted = e;
    }
    checkDestroyed() {
      if (this.isDeleted)
        throw cn.create(`app-deleted`, { appName: this._name });
    }
  },
  un = Zt;
function dn(e, t = {}) {
  let n = e;
  typeof t != `object` && (t = { name: t });
  let r = u({ name: Qt, automaticDataCollectionEnabled: !0 }, t),
    i = r.name;
  if (typeof i != `string` || !i)
    throw cn.create(`bad-app-name`, { appName: String(i) });
  if ((n || (n = fe()), !n)) throw cn.create(`no-options`);
  let a = en.get(i);
  if (a) {
    if (je(n, a.options) && je(r, a.config)) return a;
    throw cn.create(`duplicate-app`, { appName: i });
  }
  let o = new Ke(i);
  for (let e of nn.values()) o.addComponent(e);
  let s = new ln(n, r, o);
  return (en.set(i, s), s);
}
function fn(e = Qt) {
  let t = en.get(e);
  if (!t && e === `[DEFAULT]` && fe()) return dn();
  if (!t) throw cn.create(`no-app`, { appName: e });
  return t;
}
function pn(e, t, n) {
  var r;
  let i = (r = $t[e]) == null ? e : r;
  n && (i += `-${n}`);
  let a = i.match(/\s|\//),
    o = t.match(/\s|\//);
  if (a || o) {
    let e = [`Unable to register library "${i}" with version "${t}":`];
    (a &&
      e.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`,
      ),
      a && o && e.push(`and`),
      o &&
        e.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`,
        ),
      Tt.warn(e.join(` `)));
    return;
  }
  an(new Ve(`${i}-version`, () => ({ library: i, version: t }), `VERSION`));
}
var mn = `firebase-heartbeat-database`,
  hn = 1,
  gn = `firebase-heartbeat-store`,
  _n = null;
function vn() {
  return (
    _n ||
      (_n = gt(mn, hn, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              try {
                e.createObjectStore(gn);
              } catch (e) {
                console.warn(e);
              }
          }
        },
      }).catch((e) => {
        throw cn.create(`idb-open`, { originalErrorMessage: e.message });
      })),
    _n
  );
}
function yn(e) {
  return bn.apply(this, arguments);
}
function bn() {
  return (
    (bn = p(function* (e) {
      try {
        let t = (yield vn()).transaction(gn),
          n = yield t.objectStore(gn).get(Sn(e));
        return (yield t.done, n);
      } catch (e) {
        if (e instanceof Ee) Tt.warn(e.message);
        else {
          let t = cn.create(`idb-get`, {
            originalErrorMessage: e == null ? void 0 : e.message,
          });
          Tt.warn(t.message);
        }
      }
    })),
    bn.apply(this, arguments)
  );
}
function E(e, t) {
  return xn.apply(this, arguments);
}
function xn() {
  return (
    (xn = p(function* (e, t) {
      try {
        let n = (yield vn()).transaction(gn, `readwrite`);
        (yield n.objectStore(gn).put(t, Sn(e)), yield n.done);
      } catch (e) {
        if (e instanceof Ee) Tt.warn(e.message);
        else {
          let t = cn.create(`idb-set`, {
            originalErrorMessage: e == null ? void 0 : e.message,
          });
          Tt.warn(t.message);
        }
      }
    })),
    xn.apply(this, arguments)
  );
}
function Sn(e) {
  return `${e.name}!${e.options.appId}`;
}
var Cn = 1024,
  wn = 30,
  Tn = class {
    constructor(e) {
      ((this.container = e), (this._heartbeatsCache = null));
      let t = this.container.getProvider(`app`).getImmediate();
      ((this._storage = new On(t)),
        (this._heartbeatsCachePromise = this._storage
          .read()
          .then((e) => ((this._heartbeatsCache = e), e))));
    }
    triggerHeartbeat() {
      var e = this;
      return p(function* () {
        try {
          var t;
          let r = e.container
              .getProvider(`platform-logger`)
              .getImmediate()
              .getPlatformInfoString(),
            i = En();
          if (
            ((t = e._heartbeatsCache) == null ? void 0 : t.heartbeats) == null
          ) {
            var n;
            if (
              ((e._heartbeatsCache = yield e._heartbeatsCachePromise),
              ((n = e._heartbeatsCache) == null ? void 0 : n.heartbeats) ==
                null)
            )
              return;
          }
          if (
            e._heartbeatsCache.lastSentHeartbeatDate === i ||
            e._heartbeatsCache.heartbeats.some((e) => e.date === i)
          )
            return;
          if (
            (e._heartbeatsCache.heartbeats.push({ date: i, agent: r }),
            e._heartbeatsCache.heartbeats.length > wn)
          ) {
            let t = An(e._heartbeatsCache.heartbeats);
            e._heartbeatsCache.heartbeats.splice(t, 1);
          }
          return e._storage.overwrite(e._heartbeatsCache);
        } catch (e) {
          Tt.warn(e);
        }
      })();
    }
    getHeartbeatsHeader() {
      var e = this;
      return p(function* () {
        try {
          var t;
          if (
            (e._heartbeatsCache === null && (yield e._heartbeatsCachePromise),
            ((t = e._heartbeatsCache) == null ? void 0 : t.heartbeats) ==
              null || e._heartbeatsCache.heartbeats.length === 0)
          )
            return ``;
          let n = En(),
            { heartbeatsToSend: r, unsentEntries: i } = Dn(
              e._heartbeatsCache.heartbeats,
            ),
            a = _(JSON.stringify({ version: 2, heartbeats: r }));
          return (
            (e._heartbeatsCache.lastSentHeartbeatDate = n),
            i.length > 0
              ? ((e._heartbeatsCache.heartbeats = i),
                yield e._storage.overwrite(e._heartbeatsCache))
              : ((e._heartbeatsCache.heartbeats = []),
                e._storage.overwrite(e._heartbeatsCache)),
            a
          );
        } catch (e) {
          return (Tt.warn(e), ``);
        }
      })();
    }
  };
function En() {
  return new Date().toISOString().substring(0, 10);
}
function Dn(e, t = Cn) {
  let n = [],
    r = e.slice();
  for (let i of e) {
    let e = n.find((e) => e.agent === i.agent);
    if (!e) {
      if ((n.push({ agent: i.agent, dates: [i.date] }), kn(n) > t)) {
        n.pop();
        break;
      }
    } else if ((e.dates.push(i.date), kn(n) > t)) {
      e.dates.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
var On = class {
  constructor(e) {
    ((this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()));
  }
  runIndexedDBEnvironmentCheck() {
    return p(function* () {
      return Ce()
        ? we()
            .then(() => !0)
            .catch(() => !1)
        : !1;
    })();
  }
  read() {
    var e = this;
    return p(function* () {
      if (yield e._canUseIndexedDBPromise) {
        let t = yield yn(e.app);
        return t != null && t.heartbeats ? t : { heartbeats: [] };
      } else return { heartbeats: [] };
    })();
  }
  overwrite(e) {
    var t = this;
    return p(function* () {
      if (yield t._canUseIndexedDBPromise) {
        var n;
        let r = yield t.read();
        return E(t.app, {
          lastSentHeartbeatDate:
            (n = e.lastSentHeartbeatDate) == null ? r.lastSentHeartbeatDate : n,
          heartbeats: e.heartbeats,
        });
      } else return;
    })();
  }
  add(e) {
    var t = this;
    return p(function* () {
      if (yield t._canUseIndexedDBPromise) {
        var n;
        let r = yield t.read();
        return E(t.app, {
          lastSentHeartbeatDate:
            (n = e.lastSentHeartbeatDate) == null ? r.lastSentHeartbeatDate : n,
          heartbeats: [...r.heartbeats, ...e.heartbeats],
        });
      } else return;
    })();
  }
};
function kn(e) {
  return _(JSON.stringify({ version: 2, heartbeats: e })).length;
}
function An(e) {
  if (e.length === 0) return -1;
  let t = 0,
    n = e[0].date;
  for (let r = 1; r < e.length; r++)
    e[r].date < n && ((n = e[r].date), (t = r));
  return t;
}
function jn(e) {
  (an(new Ve(`platform-logger`, (e) => new xt(e), `PRIVATE`)),
    an(new Ve(`heartbeat`, (e) => new Tn(e), `PRIVATE`)),
    pn(Ct, wt, e),
    pn(Ct, wt, `esm2020`),
    pn(`fire-js`, ``));
}
(jn(``), pn(`firebase`, `12.12.1`, `app`));
var Mn =
    typeof globalThis < `u`
      ? globalThis
      : typeof window < `u`
        ? window
        : typeof global < `u`
          ? global
          : typeof self < `u`
            ? self
            : {},
  Nn = {},
  Pn,
  Fn;
(function () {
  var e;
  function t(e, t) {
    function n() {}
    ((n.prototype = t.prototype),
      (e.F = t.prototype),
      (e.prototype = new n()),
      (e.prototype.constructor = e),
      (e.D = function (e, n, r) {
        for (
          var i = Array(arguments.length - 2), a = 2;
          a < arguments.length;
          a++
        )
          i[a - 2] = arguments[a];
        return t.prototype[n].apply(e, i);
      }));
  }
  function n() {
    this.blockSize = -1;
  }
  function r() {
    ((this.blockSize = -1),
      (this.blockSize = 64),
      (this.g = [, , , ,]),
      (this.C = Array(this.blockSize)),
      (this.o = this.h = 0),
      this.u());
  }
  (t(r, n),
    (r.prototype.u = function () {
      ((this.g[0] = 1732584193),
        (this.g[1] = 4023233417),
        (this.g[2] = 2562383102),
        (this.g[3] = 271733878),
        (this.o = this.h = 0));
    }));
  function i(e, t, n) {
    n || (n = 0);
    let r = Array(16);
    if (typeof t == `string`)
      for (var i = 0; i < 16; ++i)
        r[i] =
          t.charCodeAt(n++) |
          (t.charCodeAt(n++) << 8) |
          (t.charCodeAt(n++) << 16) |
          (t.charCodeAt(n++) << 24);
    else
      for (i = 0; i < 16; ++i)
        r[i] = t[n++] | (t[n++] << 8) | (t[n++] << 16) | (t[n++] << 24);
    ((t = e.g[0]), (n = e.g[1]), (i = e.g[2]));
    let a = e.g[3],
      o;
    ((o = (t + (a ^ (n & (i ^ a))) + r[0] + 3614090360) & 4294967295),
      (t = n + (((o << 7) & 4294967295) | (o >>> 25))),
      (o = (a + (i ^ (t & (n ^ i))) + r[1] + 3905402710) & 4294967295),
      (a = t + (((o << 12) & 4294967295) | (o >>> 20))),
      (o = (i + (n ^ (a & (t ^ n))) + r[2] + 606105819) & 4294967295),
      (i = a + (((o << 17) & 4294967295) | (o >>> 15))),
      (o = (n + (t ^ (i & (a ^ t))) + r[3] + 3250441966) & 4294967295),
      (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
      (o = (t + (a ^ (n & (i ^ a))) + r[4] + 4118548399) & 4294967295),
      (t = n + (((o << 7) & 4294967295) | (o >>> 25))),
      (o = (a + (i ^ (t & (n ^ i))) + r[5] + 1200080426) & 4294967295),
      (a = t + (((o << 12) & 4294967295) | (o >>> 20))),
      (o = (i + (n ^ (a & (t ^ n))) + r[6] + 2821735955) & 4294967295),
      (i = a + (((o << 17) & 4294967295) | (o >>> 15))),
      (o = (n + (t ^ (i & (a ^ t))) + r[7] + 4249261313) & 4294967295),
      (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
      (o = (t + (a ^ (n & (i ^ a))) + r[8] + 1770035416) & 4294967295),
      (t = n + (((o << 7) & 4294967295) | (o >>> 25))),
      (o = (a + (i ^ (t & (n ^ i))) + r[9] + 2336552879) & 4294967295),
      (a = t + (((o << 12) & 4294967295) | (o >>> 20))),
      (o = (i + (n ^ (a & (t ^ n))) + r[10] + 4294925233) & 4294967295),
      (i = a + (((o << 17) & 4294967295) | (o >>> 15))),
      (o = (n + (t ^ (i & (a ^ t))) + r[11] + 2304563134) & 4294967295),
      (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
      (o = (t + (a ^ (n & (i ^ a))) + r[12] + 1804603682) & 4294967295),
      (t = n + (((o << 7) & 4294967295) | (o >>> 25))),
      (o = (a + (i ^ (t & (n ^ i))) + r[13] + 4254626195) & 4294967295),
      (a = t + (((o << 12) & 4294967295) | (o >>> 20))),
      (o = (i + (n ^ (a & (t ^ n))) + r[14] + 2792965006) & 4294967295),
      (i = a + (((o << 17) & 4294967295) | (o >>> 15))),
      (o = (n + (t ^ (i & (a ^ t))) + r[15] + 1236535329) & 4294967295),
      (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
      (o = (t + (i ^ (a & (n ^ i))) + r[1] + 4129170786) & 4294967295),
      (t = n + (((o << 5) & 4294967295) | (o >>> 27))),
      (o = (a + (n ^ (i & (t ^ n))) + r[6] + 3225465664) & 4294967295),
      (a = t + (((o << 9) & 4294967295) | (o >>> 23))),
      (o = (i + (t ^ (n & (a ^ t))) + r[11] + 643717713) & 4294967295),
      (i = a + (((o << 14) & 4294967295) | (o >>> 18))),
      (o = (n + (a ^ (t & (i ^ a))) + r[0] + 3921069994) & 4294967295),
      (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
      (o = (t + (i ^ (a & (n ^ i))) + r[5] + 3593408605) & 4294967295),
      (t = n + (((o << 5) & 4294967295) | (o >>> 27))),
      (o = (a + (n ^ (i & (t ^ n))) + r[10] + 38016083) & 4294967295),
      (a = t + (((o << 9) & 4294967295) | (o >>> 23))),
      (o = (i + (t ^ (n & (a ^ t))) + r[15] + 3634488961) & 4294967295),
      (i = a + (((o << 14) & 4294967295) | (o >>> 18))),
      (o = (n + (a ^ (t & (i ^ a))) + r[4] + 3889429448) & 4294967295),
      (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
      (o = (t + (i ^ (a & (n ^ i))) + r[9] + 568446438) & 4294967295),
      (t = n + (((o << 5) & 4294967295) | (o >>> 27))),
      (o = (a + (n ^ (i & (t ^ n))) + r[14] + 3275163606) & 4294967295),
      (a = t + (((o << 9) & 4294967295) | (o >>> 23))),
      (o = (i + (t ^ (n & (a ^ t))) + r[3] + 4107603335) & 4294967295),
      (i = a + (((o << 14) & 4294967295) | (o >>> 18))),
      (o = (n + (a ^ (t & (i ^ a))) + r[8] + 1163531501) & 4294967295),
      (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
      (o = (t + (i ^ (a & (n ^ i))) + r[13] + 2850285829) & 4294967295),
      (t = n + (((o << 5) & 4294967295) | (o >>> 27))),
      (o = (a + (n ^ (i & (t ^ n))) + r[2] + 4243563512) & 4294967295),
      (a = t + (((o << 9) & 4294967295) | (o >>> 23))),
      (o = (i + (t ^ (n & (a ^ t))) + r[7] + 1735328473) & 4294967295),
      (i = a + (((o << 14) & 4294967295) | (o >>> 18))),
      (o = (n + (a ^ (t & (i ^ a))) + r[12] + 2368359562) & 4294967295),
      (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
      (o = (t + (n ^ i ^ a) + r[5] + 4294588738) & 4294967295),
      (t = n + (((o << 4) & 4294967295) | (o >>> 28))),
      (o = (a + (t ^ n ^ i) + r[8] + 2272392833) & 4294967295),
      (a = t + (((o << 11) & 4294967295) | (o >>> 21))),
      (o = (i + (a ^ t ^ n) + r[11] + 1839030562) & 4294967295),
      (i = a + (((o << 16) & 4294967295) | (o >>> 16))),
      (o = (n + (i ^ a ^ t) + r[14] + 4259657740) & 4294967295),
      (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
      (o = (t + (n ^ i ^ a) + r[1] + 2763975236) & 4294967295),
      (t = n + (((o << 4) & 4294967295) | (o >>> 28))),
      (o = (a + (t ^ n ^ i) + r[4] + 1272893353) & 4294967295),
      (a = t + (((o << 11) & 4294967295) | (o >>> 21))),
      (o = (i + (a ^ t ^ n) + r[7] + 4139469664) & 4294967295),
      (i = a + (((o << 16) & 4294967295) | (o >>> 16))),
      (o = (n + (i ^ a ^ t) + r[10] + 3200236656) & 4294967295),
      (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
      (o = (t + (n ^ i ^ a) + r[13] + 681279174) & 4294967295),
      (t = n + (((o << 4) & 4294967295) | (o >>> 28))),
      (o = (a + (t ^ n ^ i) + r[0] + 3936430074) & 4294967295),
      (a = t + (((o << 11) & 4294967295) | (o >>> 21))),
      (o = (i + (a ^ t ^ n) + r[3] + 3572445317) & 4294967295),
      (i = a + (((o << 16) & 4294967295) | (o >>> 16))),
      (o = (n + (i ^ a ^ t) + r[6] + 76029189) & 4294967295),
      (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
      (o = (t + (n ^ i ^ a) + r[9] + 3654602809) & 4294967295),
      (t = n + (((o << 4) & 4294967295) | (o >>> 28))),
      (o = (a + (t ^ n ^ i) + r[12] + 3873151461) & 4294967295),
      (a = t + (((o << 11) & 4294967295) | (o >>> 21))),
      (o = (i + (a ^ t ^ n) + r[15] + 530742520) & 4294967295),
      (i = a + (((o << 16) & 4294967295) | (o >>> 16))),
      (o = (n + (i ^ a ^ t) + r[2] + 3299628645) & 4294967295),
      (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
      (o = (t + (i ^ (n | ~a)) + r[0] + 4096336452) & 4294967295),
      (t = n + (((o << 6) & 4294967295) | (o >>> 26))),
      (o = (a + (n ^ (t | ~i)) + r[7] + 1126891415) & 4294967295),
      (a = t + (((o << 10) & 4294967295) | (o >>> 22))),
      (o = (i + (t ^ (a | ~n)) + r[14] + 2878612391) & 4294967295),
      (i = a + (((o << 15) & 4294967295) | (o >>> 17))),
      (o = (n + (a ^ (i | ~t)) + r[5] + 4237533241) & 4294967295),
      (n = i + (((o << 21) & 4294967295) | (o >>> 11))),
      (o = (t + (i ^ (n | ~a)) + r[12] + 1700485571) & 4294967295),
      (t = n + (((o << 6) & 4294967295) | (o >>> 26))),
      (o = (a + (n ^ (t | ~i)) + r[3] + 2399980690) & 4294967295),
      (a = t + (((o << 10) & 4294967295) | (o >>> 22))),
      (o = (i + (t ^ (a | ~n)) + r[10] + 4293915773) & 4294967295),
      (i = a + (((o << 15) & 4294967295) | (o >>> 17))),
      (o = (n + (a ^ (i | ~t)) + r[1] + 2240044497) & 4294967295),
      (n = i + (((o << 21) & 4294967295) | (o >>> 11))),
      (o = (t + (i ^ (n | ~a)) + r[8] + 1873313359) & 4294967295),
      (t = n + (((o << 6) & 4294967295) | (o >>> 26))),
      (o = (a + (n ^ (t | ~i)) + r[15] + 4264355552) & 4294967295),
      (a = t + (((o << 10) & 4294967295) | (o >>> 22))),
      (o = (i + (t ^ (a | ~n)) + r[6] + 2734768916) & 4294967295),
      (i = a + (((o << 15) & 4294967295) | (o >>> 17))),
      (o = (n + (a ^ (i | ~t)) + r[13] + 1309151649) & 4294967295),
      (n = i + (((o << 21) & 4294967295) | (o >>> 11))),
      (o = (t + (i ^ (n | ~a)) + r[4] + 4149444226) & 4294967295),
      (t = n + (((o << 6) & 4294967295) | (o >>> 26))),
      (o = (a + (n ^ (t | ~i)) + r[11] + 3174756917) & 4294967295),
      (a = t + (((o << 10) & 4294967295) | (o >>> 22))),
      (o = (i + (t ^ (a | ~n)) + r[2] + 718787259) & 4294967295),
      (i = a + (((o << 15) & 4294967295) | (o >>> 17))),
      (o = (n + (a ^ (i | ~t)) + r[9] + 3951481745) & 4294967295),
      (e.g[0] = (e.g[0] + t) & 4294967295),
      (e.g[1] =
        (e.g[1] + (i + (((o << 21) & 4294967295) | (o >>> 11)))) & 4294967295),
      (e.g[2] = (e.g[2] + i) & 4294967295),
      (e.g[3] = (e.g[3] + a) & 4294967295));
  }
  ((r.prototype.v = function (e, t) {
    t === void 0 && (t = e.length);
    let n = t - this.blockSize,
      r = this.C,
      a = this.h,
      o = 0;
    for (; o < t;) {
      if (a == 0) for (; o <= n;) (i(this, e, o), (o += this.blockSize));
      if (typeof e == `string`) {
        for (; o < t;)
          if (((r[a++] = e.charCodeAt(o++)), a == this.blockSize)) {
            (i(this, r), (a = 0));
            break;
          }
      } else
        for (; o < t;)
          if (((r[a++] = e[o++]), a == this.blockSize)) {
            (i(this, r), (a = 0));
            break;
          }
    }
    ((this.h = a), (this.o += t));
  }),
    (r.prototype.A = function () {
      var e = Array(
        (this.h < 56 ? this.blockSize : this.blockSize * 2) - this.h,
      );
      e[0] = 128;
      for (var t = 1; t < e.length - 8; ++t) e[t] = 0;
      t = this.o * 8;
      for (var n = e.length - 8; n < e.length; ++n)
        ((e[n] = t & 255), (t /= 256));
      for (this.v(e), e = Array(16), t = 0, n = 0; n < 4; ++n)
        for (let r = 0; r < 32; r += 8) e[t++] = (this.g[n] >>> r) & 255;
      return e;
    }));
  function a(e, t) {
    var n = s;
    return Object.prototype.hasOwnProperty.call(n, e) ? n[e] : (n[e] = t(e));
  }
  function o(e, t) {
    this.h = t;
    let n = [],
      r = !0;
    for (let i = e.length - 1; i >= 0; i--) {
      let a = e[i] | 0;
      (r && a == t) || ((n[i] = a), (r = !1));
    }
    this.g = n;
  }
  var s = {};
  function c(e) {
    return -128 <= e && e < 128
      ? a(e, function (e) {
          return new o([e | 0], e < 0 ? -1 : 0);
        })
      : new o([e | 0], e < 0 ? -1 : 0);
  }
  function l(e) {
    if (isNaN(e) || !isFinite(e)) return d;
    if (e < 0) return g(l(-e));
    let t = [],
      n = 1;
    for (let r = 0; e >= n; r++) ((t[r] = (e / n) | 0), (n *= 4294967296));
    return new o(t, 0);
  }
  function u(e, t) {
    if (e.length == 0) throw Error(`number format error: empty string`);
    if (((t = t || 10), t < 2 || 36 < t))
      throw Error(`radix out of range: ` + t);
    if (e.charAt(0) == `-`) return g(u(e.substring(1), t));
    if (e.indexOf(`-`) >= 0)
      throw Error(`number format error: interior "-" character`);
    let n = l(Math.pow(t, 8)),
      r = d;
    for (let a = 0; a < e.length; a += 8) {
      var i = Math.min(8, e.length - a);
      let o = parseInt(e.substring(a, a + i), t);
      i < 8
        ? ((i = l(Math.pow(t, i))), (r = r.j(i).add(l(o))))
        : ((r = r.j(n)), (r = r.add(l(o))));
    }
    return r;
  }
  var d = c(0),
    f = c(1),
    p = c(16777216);
  ((e = o.prototype),
    (e.m = function () {
      if (h(this)) return -g(this).m();
      let e = 0,
        t = 1;
      for (let n = 0; n < this.g.length; n++) {
        let r = this.i(n);
        ((e += (r >= 0 ? r : 4294967296 + r) * t), (t *= 4294967296));
      }
      return e;
    }),
    (e.toString = function (e) {
      if (((e = e || 10), e < 2 || 36 < e))
        throw Error(`radix out of range: ` + e);
      if (m(this)) return `0`;
      if (h(this)) return `-` + g(this).toString(e);
      let t = l(Math.pow(e, 6));
      var n = this;
      let r = ``;
      for (;;) {
        let i = re(n, t).g;
        n = ee(n, i.j(t));
        let a = ((n.g.length > 0 ? n.g[0] : n.h) >>> 0).toString(e);
        if (((n = i), m(n))) return a + r;
        for (; a.length < 6;) a = `0` + a;
        r = a + r;
      }
    }),
    (e.i = function (e) {
      return e < 0 ? 0 : e < this.g.length ? this.g[e] : this.h;
    }));
  function m(e) {
    if (e.h != 0) return !1;
    for (let t = 0; t < e.g.length; t++) if (e.g[t] != 0) return !1;
    return !0;
  }
  function h(e) {
    return e.h == -1;
  }
  e.l = function (e) {
    return ((e = ee(this, e)), h(e) ? -1 : +!m(e));
  };
  function g(e) {
    let t = e.g.length,
      n = [];
    for (let r = 0; r < t; r++) n[r] = ~e.g[r];
    return new o(n, ~e.h).add(f);
  }
  ((e.abs = function () {
    return h(this) ? g(this) : this;
  }),
    (e.add = function (e) {
      let t = Math.max(this.g.length, e.g.length),
        n = [],
        r = 0;
      for (let i = 0; i <= t; i++) {
        let t = r + (this.i(i) & 65535) + (e.i(i) & 65535),
          a = (t >>> 16) + (this.i(i) >>> 16) + (e.i(i) >>> 16);
        ((r = a >>> 16), (t &= 65535), (a &= 65535), (n[i] = (a << 16) | t));
      }
      return new o(n, n[n.length - 1] & -2147483648 ? -1 : 0);
    }));
  function ee(e, t) {
    return e.add(g(t));
  }
  e.j = function (e) {
    if (m(this) || m(e)) return d;
    if (h(this)) return h(e) ? g(this).j(g(e)) : g(g(this).j(e));
    if (h(e)) return g(this.j(g(e)));
    if (this.l(p) < 0 && e.l(p) < 0) return l(this.m() * e.m());
    let t = this.g.length + e.g.length,
      n = [];
    for (var r = 0; r < 2 * t; r++) n[r] = 0;
    for (r = 0; r < this.g.length; r++)
      for (let t = 0; t < e.g.length; t++) {
        let i = this.i(r) >>> 16,
          a = this.i(r) & 65535,
          o = e.i(t) >>> 16,
          s = e.i(t) & 65535;
        ((n[2 * r + 2 * t] += a * s),
          te(n, 2 * r + 2 * t),
          (n[2 * r + 2 * t + 1] += i * s),
          te(n, 2 * r + 2 * t + 1),
          (n[2 * r + 2 * t + 1] += a * o),
          te(n, 2 * r + 2 * t + 1),
          (n[2 * r + 2 * t + 2] += i * o),
          te(n, 2 * r + 2 * t + 2));
      }
    for (e = 0; e < t; e++) n[e] = (n[2 * e + 1] << 16) | n[2 * e];
    for (e = t; e < 2 * t; e++) n[e] = 0;
    return new o(n, 0);
  };
  function te(e, t) {
    for (; (e[t] & 65535) != e[t];)
      ((e[t + 1] += e[t] >>> 16), (e[t] &= 65535), t++);
  }
  function ne(e, t) {
    ((this.g = e), (this.h = t));
  }
  function re(e, t) {
    if (m(t)) throw Error(`division by zero`);
    if (m(e)) return new ne(d, d);
    if (h(e)) return ((t = re(g(e), t)), new ne(g(t.g), g(t.h)));
    if (h(t)) return ((t = re(e, g(t))), new ne(g(t.g), t.h));
    if (e.g.length > 30) {
      if (h(e) || h(t))
        throw Error(`slowDivide_ only works with positive integers.`);
      for (var n = f, r = t; r.l(e) <= 0;) ((n = ie(n)), (r = ie(r)));
      var i = _(n, 1),
        a = _(r, 1);
      for (r = _(r, 2), n = _(n, 2); !m(r);) {
        var o = a.add(r);
        (o.l(e) <= 0 && ((i = i.add(n)), (a = o)),
          (r = _(r, 1)),
          (n = _(n, 1)));
      }
      return ((t = ee(e, i.j(t))), new ne(i, t));
    }
    for (i = d; e.l(t) >= 0;) {
      for (
        n = Math.max(1, Math.floor(e.m() / t.m())),
          r = Math.ceil(Math.log(n) / Math.LN2),
          r = r <= 48 ? 1 : Math.pow(2, r - 48),
          a = l(n),
          o = a.j(t);
        h(o) || o.l(e) > 0;
      )
        ((n -= r), (a = l(n)), (o = a.j(t)));
      (m(a) && (a = f), (i = i.add(a)), (e = ee(e, o)));
    }
    return new ne(i, e);
  }
  ((e.B = function (e) {
    return re(this, e).h;
  }),
    (e.and = function (e) {
      let t = Math.max(this.g.length, e.g.length),
        n = [];
      for (let r = 0; r < t; r++) n[r] = this.i(r) & e.i(r);
      return new o(n, this.h & e.h);
    }),
    (e.or = function (e) {
      let t = Math.max(this.g.length, e.g.length),
        n = [];
      for (let r = 0; r < t; r++) n[r] = this.i(r) | e.i(r);
      return new o(n, this.h | e.h);
    }),
    (e.xor = function (e) {
      let t = Math.max(this.g.length, e.g.length),
        n = [];
      for (let r = 0; r < t; r++) n[r] = this.i(r) ^ e.i(r);
      return new o(n, this.h ^ e.h);
    }));
  function ie(e) {
    let t = e.g.length + 1,
      n = [];
    for (let r = 0; r < t; r++) n[r] = (e.i(r) << 1) | (e.i(r - 1) >>> 31);
    return new o(n, e.h);
  }
  function _(e, t) {
    let n = t >> 5;
    t %= 32;
    let r = e.g.length - n,
      i = [];
    for (let a = 0; a < r; a++)
      i[a] =
        t > 0 ? (e.i(a + n) >>> t) | (e.i(a + n + 1) << (32 - t)) : e.i(a + n);
    return new o(i, e.h);
  }
  ((r.prototype.digest = r.prototype.A),
    (r.prototype.reset = r.prototype.u),
    (r.prototype.update = r.prototype.v),
    (Fn = Nn.Md5 = r),
    (o.prototype.add = o.prototype.add),
    (o.prototype.multiply = o.prototype.j),
    (o.prototype.modulo = o.prototype.B),
    (o.prototype.compare = o.prototype.l),
    (o.prototype.toNumber = o.prototype.m),
    (o.prototype.toString = o.prototype.toString),
    (o.prototype.getBits = o.prototype.i),
    (o.fromNumber = l),
    (o.fromString = u),
    (Pn = Nn.Integer = o));
}).apply(
  Mn === void 0
    ? typeof self < `u`
      ? self
      : typeof window < `u`
        ? window
        : {}
    : Mn,
);
var In =
    typeof globalThis < `u`
      ? globalThis
      : typeof window < `u`
        ? window
        : typeof global < `u`
          ? global
          : typeof self < `u`
            ? self
            : {},
  Ln = {},
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn;
((function () {
  var e,
    t = Object.defineProperty;
  function n(e) {
    e = [
      typeof globalThis == `object` && globalThis,
      e,
      typeof window == `object` && window,
      typeof self == `object` && self,
      typeof In == `object` && In,
    ];
    for (var t = 0; t < e.length; ++t) {
      var n = e[t];
      if (n && n.Math == Math) return n;
    }
    throw Error(`Cannot find global object`);
  }
  var r = n(this);
  function i(e, n) {
    if (n)
      a: {
        var i = r;
        e = e.split(`.`);
        for (var a = 0; a < e.length - 1; a++) {
          var o = e[a];
          if (!(o in i)) break a;
          i = i[o];
        }
        ((e = e[e.length - 1]),
          (a = i[e]),
          (n = n(a)),
          n != a &&
            n != null &&
            t(i, e, { configurable: !0, writable: !0, value: n }));
      }
  }
  (i(`Symbol.dispose`, function (e) {
    return e || Symbol(`Symbol.dispose`);
  }),
    i(`Array.prototype.values`, function (e) {
      return (
        e ||
        function () {
          return this[Symbol.iterator]();
        }
      );
    }),
    i(`Object.entries`, function (e) {
      return (
        e ||
        function (e) {
          var t = [],
            n;
          for (n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.push([n, e[n]]);
          return t;
        }
      );
    }));
  var a = a || {},
    o = this || self;
  function s(e) {
    var t = typeof e;
    return (t == `object` && e != null) || t == `function`;
  }
  function c(e, t, n) {
    return e.call.apply(e.bind, arguments);
  }
  function l(e, t, n) {
    return ((l = c), l.apply(null, arguments));
  }
  function u(e, t) {
    var n = Array.prototype.slice.call(arguments, 1);
    return function () {
      var t = n.slice();
      return (t.push.apply(t, arguments), e.apply(this, t));
    };
  }
  function d(e, t) {
    function n() {}
    ((n.prototype = t.prototype),
      (e.Z = t.prototype),
      (e.prototype = new n()),
      (e.prototype.constructor = e),
      (e.Ob = function (e, n, r) {
        for (
          var i = Array(arguments.length - 2), a = 2;
          a < arguments.length;
          a++
        )
          i[a - 2] = arguments[a];
        return t.prototype[n].apply(e, i);
      }));
  }
  var f =
    typeof AsyncContext < `u` && typeof AsyncContext.Snapshot == `function`
      ? (e) => e && AsyncContext.Snapshot.wrap(e)
      : (e) => e;
  function p(e) {
    let t = e.length;
    if (t > 0) {
      let n = Array(t);
      for (let r = 0; r < t; r++) n[r] = e[r];
      return n;
    }
    return [];
  }
  function m(e, t) {
    for (let t = 1; t < arguments.length; t++) {
      let r = arguments[t];
      var n = typeof r;
      if (
        ((n =
          n == `object` ? (r ? (Array.isArray(r) ? `array` : n) : `null`) : n),
        n == `array` || (n == `object` && typeof r.length == `number`))
      ) {
        n = e.length || 0;
        let t = r.length || 0;
        e.length = n + t;
        for (let i = 0; i < t; i++) e[n + i] = r[i];
      } else e.push(r);
    }
  }
  class h {
    constructor(e, t) {
      ((this.i = e), (this.j = t), (this.h = 0), (this.g = null));
    }
    get() {
      let e;
      return (
        this.h > 0
          ? (this.h--, (e = this.g), (this.g = e.next), (e.next = null))
          : (e = this.i()),
        e
      );
    }
  }
  function g(e) {
    o.setTimeout(() => {
      throw e;
    }, 0);
  }
  function ee() {
    var e = ae;
    let t = null;
    return (
      e.g &&
        ((t = e.g), (e.g = e.g.next), e.g || (e.h = null), (t.next = null)),
      t
    );
  }
  class te {
    constructor() {
      this.h = this.g = null;
    }
    add(e, t) {
      let n = ne.get();
      (n.set(e, t), this.h ? (this.h.next = n) : (this.g = n), (this.h = n));
    }
  }
  var ne = new h(
    () => new re(),
    (e) => e.reset(),
  );
  class re {
    constructor() {
      this.next = this.g = this.h = null;
    }
    set(e, t) {
      ((this.h = e), (this.g = t), (this.next = null));
    }
    reset() {
      this.next = this.g = this.h = null;
    }
  }
  let ie,
    _ = !1,
    ae = new te(),
    oe = () => {
      let e = Promise.resolve(void 0);
      ie = () => {
        e.then(se);
      };
    };
  function se() {
    for (var e; (e = ee());) {
      try {
        e.h.call(e.g);
      } catch (e) {
        g(e);
      }
      var t = ne;
      (t.j(e), t.h < 100 && (t.h++, (e.next = t.g), (t.g = e)));
    }
    _ = !1;
  }
  function ce() {
    ((this.u = this.u), (this.C = this.C));
  }
  ((ce.prototype.u = !1),
    (ce.prototype.dispose = function () {
      this.u || ((this.u = !0), this.N());
    }),
    (ce.prototype[Symbol.dispose] = function () {
      this.dispose();
    }),
    (ce.prototype.N = function () {
      if (this.C) for (; this.C.length;) this.C.shift()();
    }));
  function v(e, t) {
    ((this.type = e), (this.g = this.target = t), (this.defaultPrevented = !1));
  }
  v.prototype.h = function () {
    this.defaultPrevented = !0;
  };
  var le = (function () {
    if (!o.addEventListener || !Object.defineProperty) return !1;
    var e = !1,
      t = Object.defineProperty({}, `passive`, {
        get: function () {
          e = !0;
        },
      });
    try {
      let e = () => {};
      (o.addEventListener(`test`, e, t), o.removeEventListener(`test`, e, t));
    } catch (e) {}
    return e;
  })();
  function ue(e) {
    return /^[\s\xa0]*$/.test(e);
  }
  function de(e, t) {
    (v.call(this, e ? e.type : ``),
      (this.relatedTarget = this.g = this.target = null),
      (this.button =
        this.screenY =
        this.screenX =
        this.clientY =
        this.clientX =
          0),
      (this.key = ``),
      (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
      (this.state = null),
      (this.pointerId = 0),
      (this.pointerType = ``),
      (this.i = null),
      e && this.init(e, t));
  }
  (d(de, v),
    (de.prototype.init = function (e, t) {
      let n = (this.type = e.type),
        r =
          e.changedTouches && e.changedTouches.length
            ? e.changedTouches[0]
            : null;
      ((this.target = e.target || e.srcElement),
        (this.g = t),
        (t = e.relatedTarget),
        t ||
          (n == `mouseover`
            ? (t = e.fromElement)
            : n == `mouseout` && (t = e.toElement)),
        (this.relatedTarget = t),
        r
          ? ((this.clientX = r.clientX === void 0 ? r.pageX : r.clientX),
            (this.clientY = r.clientY === void 0 ? r.pageY : r.clientY),
            (this.screenX = r.screenX || 0),
            (this.screenY = r.screenY || 0))
          : ((this.clientX = e.clientX === void 0 ? e.pageX : e.clientX),
            (this.clientY = e.clientY === void 0 ? e.pageY : e.clientY),
            (this.screenX = e.screenX || 0),
            (this.screenY = e.screenY || 0)),
        (this.button = e.button),
        (this.key = e.key || ``),
        (this.ctrlKey = e.ctrlKey),
        (this.altKey = e.altKey),
        (this.shiftKey = e.shiftKey),
        (this.metaKey = e.metaKey),
        (this.pointerId = e.pointerId || 0),
        (this.pointerType = e.pointerType),
        (this.state = e.state),
        (this.i = e),
        e.defaultPrevented && de.Z.h.call(this));
    }),
    (de.prototype.h = function () {
      de.Z.h.call(this);
      let e = this.i;
      e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
    }));
  var fe = `closure_listenable_` + ((Math.random() * 1e6) | 0),
    pe = 0;
  function me(e, t, n, r, i) {
    ((this.listener = e),
      (this.proxy = null),
      (this.src = t),
      (this.type = n),
      (this.capture = !!r),
      (this.ha = i),
      (this.key = ++pe),
      (this.da = this.fa = !1));
  }
  function he(e) {
    ((e.da = !0),
      (e.listener = null),
      (e.proxy = null),
      (e.src = null),
      (e.ha = null));
  }
  function y(e, t, n) {
    for (let r in e) t.call(n, e[r], r, e);
  }
  function ge(e, t) {
    for (let n in e) t.call(void 0, e[n], n, e);
  }
  function _e(e) {
    let t = {};
    for (let n in e) t[n] = e[n];
    return t;
  }
  let ve =
    `constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf`.split(
      ` `,
    );
  function ye(e, t) {
    let n, r;
    for (let t = 1; t < arguments.length; t++) {
      for (n in ((r = arguments[t]), r)) e[n] = r[n];
      for (let t = 0; t < ve.length; t++)
        ((n = ve[t]),
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]));
    }
  }
  function be(e) {
    ((this.src = e), (this.g = {}), (this.h = 0));
  }
  be.prototype.add = function (e, t, n, r, i) {
    let a = e.toString();
    ((e = this.g[a]), e || ((e = this.g[a] = []), this.h++));
    let o = Se(e, t, r, i);
    return (
      o > -1
        ? ((t = e[o]), n || (t.fa = !1))
        : ((t = new me(t, this.src, a, !!r, i)), (t.fa = n), e.push(t)),
      t
    );
  };
  function xe(e, t) {
    let n = t.type;
    if (n in e.g) {
      var r = e.g[n],
        i = Array.prototype.indexOf.call(r, t, void 0),
        a;
      ((a = i >= 0) && Array.prototype.splice.call(r, i, 1),
        a && (he(t), e.g[n].length == 0 && (delete e.g[n], e.h--)));
    }
  }
  function Se(e, t, n, r) {
    for (let i = 0; i < e.length; ++i) {
      let a = e[i];
      if (!a.da && a.listener == t && a.capture == !!n && a.ha == r) return i;
    }
    return -1;
  }
  var Ce = `closure_lm_` + ((Math.random() * 1e6) | 0),
    we = {};
  function Te(e, t, n, r, i) {
    if (r && r.once) return Oe(e, t, n, r, i);
    if (Array.isArray(t)) {
      for (let a = 0; a < t.length; a++) Te(e, t[a], n, r, i);
      return null;
    }
    return (
      (n = Fe(n)),
      e && e[fe]
        ? e.J(t, n, s(r) ? !!r.capture : !!r, i)
        : Ee(e, t, n, !1, r, i)
    );
  }
  function Ee(e, t, n, r, i, a) {
    if (!t) throw Error(`Invalid event type`);
    let o = s(i) ? !!i.capture : !!i,
      c = Ne(e);
    if ((c || (e[Ce] = c = new be(e)), (n = c.add(t, n, r, o, a)), n.proxy))
      return n;
    if (
      ((r = De()),
      (n.proxy = r),
      (r.src = e),
      (r.listener = n),
      e.addEventListener)
    )
      (le || (i = o),
        i === void 0 && (i = !1),
        e.addEventListener(t.toString(), r, i));
    else if (e.attachEvent) e.attachEvent(je(t.toString()), r);
    else if (e.addListener && e.removeListener) e.addListener(r);
    else throw Error(`addEventListener and attachEvent are unavailable.`);
    return n;
  }
  function De() {
    function e(n) {
      return t.call(e.src, e.listener, n);
    }
    let t = Me;
    return e;
  }
  function Oe(e, t, n, r, i) {
    if (Array.isArray(t)) {
      for (let a = 0; a < t.length; a++) Oe(e, t[a], n, r, i);
      return null;
    }
    return (
      (n = Fe(n)),
      e && e[fe]
        ? e.K(t, n, s(r) ? !!r.capture : !!r, i)
        : Ee(e, t, n, !0, r, i)
    );
  }
  function ke(e, t, n, r, i) {
    if (Array.isArray(t))
      for (var a = 0; a < t.length; a++) ke(e, t[a], n, r, i);
    else
      ((r = s(r) ? !!r.capture : !!r),
        (n = Fe(n)),
        e && e[fe]
          ? ((e = e.i),
            (a = String(t).toString()),
            a in e.g &&
              ((t = e.g[a]),
              (n = Se(t, n, r, i)),
              n > -1 &&
                (he(t[n]),
                Array.prototype.splice.call(t, n, 1),
                t.length == 0 && (delete e.g[a], e.h--))))
          : e &&
            (e = Ne(e)) &&
            ((t = e.g[t.toString()]),
            (e = -1),
            t && (e = Se(t, n, r, i)),
            (n = e > -1 ? t[e] : null) && Ae(n)));
  }
  function Ae(e) {
    if (typeof e != `number` && e && !e.da) {
      var t = e.src;
      if (t && t[fe]) xe(t.i, e);
      else {
        var n = e.type,
          r = e.proxy;
        (t.removeEventListener
          ? t.removeEventListener(n, r, e.capture)
          : t.detachEvent
            ? t.detachEvent(je(n), r)
            : t.addListener && t.removeListener && t.removeListener(r),
          (n = Ne(t))
            ? (xe(n, e), n.h == 0 && ((n.src = null), (t[Ce] = null)))
            : he(e));
      }
    }
  }
  function je(e) {
    return e in we ? we[e] : (we[e] = `on` + e);
  }
  function Me(e, t) {
    if (e.da) e = !0;
    else {
      t = new de(t, this);
      let n = e.listener,
        r = e.ha || e.src;
      (e.fa && Ae(e), (e = n.call(r, t)));
    }
    return e;
  }
  function Ne(e) {
    return ((e = e[Ce]), e instanceof be ? e : null);
  }
  var Pe = `__closure_events_fn_` + ((Math.random() * 1e9) >>> 0);
  function Fe(e) {
    return typeof e == `function`
      ? e
      : (e[Pe] ||
          (e[Pe] = function (t) {
            return e.handleEvent(t);
          }),
        e[Pe]);
  }
  function b() {
    (ce.call(this), (this.i = new be(this)), (this.M = this), (this.G = null));
  }
  (d(b, ce),
    (b.prototype[fe] = !0),
    (b.prototype.removeEventListener = function (e, t, n, r) {
      ke(this, e, t, n, r);
    }));
  function x(e, t) {
    var n,
      r = e.G;
    if (r) for (n = []; r; r = r.G) n.push(r);
    if (((e = e.M), (r = t.type || t), typeof t == `string`)) t = new v(t, e);
    else if (t instanceof v) t.target = t.target || e;
    else {
      var i = t;
      ((t = new v(r, e)), ye(t, i));
    }
    i = !0;
    let a, o;
    if (n)
      for (o = n.length - 1; o >= 0; o--)
        ((a = t.g = n[o]), (i = Ie(a, r, !0, t) && i));
    if (
      ((a = t.g = e), (i = Ie(a, r, !0, t) && i), (i = Ie(a, r, !1, t) && i), n)
    )
      for (o = 0; o < n.length; o++)
        ((a = t.g = n[o]), (i = Ie(a, r, !1, t) && i));
  }
  ((b.prototype.N = function () {
    if ((b.Z.N.call(this), this.i)) {
      var e = this.i;
      for (let t in e.g) {
        let n = e.g[t];
        for (let e = 0; e < n.length; e++) he(n[e]);
        (delete e.g[t], e.h--);
      }
    }
    this.G = null;
  }),
    (b.prototype.J = function (e, t, n, r) {
      return this.i.add(String(e), t, !1, n, r);
    }),
    (b.prototype.K = function (e, t, n, r) {
      return this.i.add(String(e), t, !0, n, r);
    }));
  function Ie(e, t, n, r) {
    if (((t = e.i.g[String(t)]), !t)) return !0;
    t = t.concat();
    let i = !0;
    for (let a = 0; a < t.length; ++a) {
      let o = t[a];
      if (o && !o.da && o.capture == n) {
        let t = o.listener,
          n = o.ha || o.src;
        (o.fa && xe(e.i, o), (i = t.call(n, r) !== !1 && i));
      }
    }
    return i && !r.defaultPrevented;
  }
  function Le(e, t) {
    if (typeof e != `function`)
      if (e && typeof e.handleEvent == `function`) e = l(e.handleEvent, e);
      else throw Error(`Invalid listener argument`);
    return Number(t) > 2147483647 ? -1 : o.setTimeout(e, t || 0);
  }
  function S(e) {
    e.g = Le(() => {
      ((e.g = null), e.i && ((e.i = !1), S(e)));
    }, e.l);
    let t = e.h;
    ((e.h = null), e.m.apply(null, t));
  }
  class Re extends ce {
    constructor(e, t) {
      (super(),
        (this.m = e),
        (this.l = t),
        (this.h = null),
        (this.i = !1),
        (this.g = null));
    }
    j(e) {
      ((this.h = arguments), this.g ? (this.i = !0) : S(this));
    }
    N() {
      (super.N(),
        this.g &&
          (o.clearTimeout(this.g),
          (this.g = null),
          (this.i = !1),
          (this.h = null)));
    }
  }
  function ze(e) {
    (ce.call(this), (this.h = e), (this.g = {}));
  }
  d(ze, ce);
  var Be = [];
  function Ve(e) {
    (y(
      e.g,
      function (e, t) {
        this.g.hasOwnProperty(t) && Ae(e);
      },
      e,
    ),
      (e.g = {}));
  }
  ((ze.prototype.N = function () {
    (ze.Z.N.call(this), Ve(this));
  }),
    (ze.prototype.handleEvent = function () {
      throw Error(`EventHandler.handleEvent not implemented`);
    }));
  var He = o.JSON.stringify,
    Ue = o.JSON.parse,
    We = class {
      stringify(e) {
        return o.JSON.stringify(e, void 0);
      }
      parse(e) {
        return o.JSON.parse(e, void 0);
      }
    };
  function Ge() {}
  function Ke() {}
  var qe = { OPEN: `a`, hb: `b`, ERROR: `c`, tb: `d` };
  function C() {
    v.call(this, `d`);
  }
  d(C, v);
  function Je() {
    v.call(this, `c`);
  }
  d(Je, v);
  var Ye = {},
    Xe = null;
  function Ze() {
    return (Xe = Xe || new b());
  }
  Ye.Ia = `serverreachability`;
  function Qe(e) {
    v.call(this, Ye.Ia, e);
  }
  d(Qe, v);
  function $e(e) {
    let t = Ze();
    x(t, new Qe(t));
  }
  Ye.STAT_EVENT = `statevent`;
  function et(e, t) {
    (v.call(this, Ye.STAT_EVENT, e), (this.stat = t));
  }
  d(et, v);
  function w(e) {
    let t = Ze();
    x(t, new et(t, e));
  }
  Ye.Ja = `timingevent`;
  function tt(e, t) {
    (v.call(this, Ye.Ja, e), (this.size = t));
  }
  d(tt, v);
  function nt(e, t) {
    if (typeof e != `function`)
      throw Error(`Fn must not be null and must be a function`);
    return o.setTimeout(function () {
      e();
    }, t);
  }
  function rt() {
    this.g = !0;
  }
  rt.prototype.ua = function () {
    this.g = !1;
  };
  function it(e, t, n, r, i, a) {
    e.info(function () {
      if (e.g)
        if (a) {
          var o = ``,
            s = a.split(`&`);
          for (let e = 0; e < s.length; e++) {
            var c = s[e].split(`=`);
            if (c.length > 1) {
              let e = c[0];
              c = c[1];
              let t = e.split(`_`);
              o =
                t.length >= 2 && t[1] == `type`
                  ? o + (e + `=` + c + `&`)
                  : o + (e + `=redacted&`);
            }
          }
        } else o = null;
      else o = a;
      return (
        `XMLHTTP REQ (` +
        r +
        `) [attempt ` +
        i +
        `]: ` +
        t +
        `
` +
        n +
        `
` +
        o
      );
    });
  }
  function at(e, t, n, r, i, a, o) {
    e.info(function () {
      return (
        `XMLHTTP RESP (` +
        r +
        `) [ attempt ` +
        i +
        `]: ` +
        t +
        `
` +
        n +
        `
` +
        a +
        ` ` +
        o
      );
    });
  }
  function ot(e, t, n, r) {
    e.info(function () {
      return `XMLHTTP TEXT (` + t + `): ` + ct(e, n) + (r ? ` ` + r : ``);
    });
  }
  function st(e, t) {
    e.info(function () {
      return `TIMEOUT: ` + t;
    });
  }
  rt.prototype.info = function () {};
  function ct(e, t) {
    if (!e.g) return t;
    if (!t) return null;
    try {
      let a = JSON.parse(t);
      if (a) {
        for (e = 0; e < a.length; e++)
          if (Array.isArray(a[e])) {
            var n = a[e];
            if (!(n.length < 2)) {
              var r = n[1];
              if (Array.isArray(r) && !(r.length < 1)) {
                var i = r[0];
                if (i != `noop` && i != `stop` && i != `close`)
                  for (let e = 1; e < r.length; e++) r[e] = ``;
              }
            }
          }
      }
      return He(a);
    } catch (e) {
      return t;
    }
  }
  var lt = {
      NO_ERROR: 0,
      cb: 1,
      qb: 2,
      pb: 3,
      kb: 4,
      ob: 5,
      rb: 6,
      Ga: 7,
      TIMEOUT: 8,
      ub: 9,
    },
    ut = {
      ib: `complete`,
      Fb: `success`,
      ERROR: `error`,
      Ga: `abort`,
      xb: `ready`,
      yb: `readystatechange`,
      TIMEOUT: `timeout`,
      sb: `incrementaldata`,
      wb: `progress`,
      lb: `downloadprogress`,
      Nb: `uploadprogress`,
    },
    dt;
  function ft() {}
  (d(ft, Ge),
    (ft.prototype.g = function () {
      return new XMLHttpRequest();
    }),
    (dt = new ft()));
  function pt(e) {
    return encodeURIComponent(String(e));
  }
  function mt(e) {
    var t = 1;
    e = e.split(`:`);
    let n = [];
    for (; t > 0 && e.length;) (n.push(e.shift()), t--);
    return (e.length && n.push(e.join(`:`)), n);
  }
  function ht(e, t, n, r) {
    ((this.j = e),
      (this.i = t),
      (this.l = n),
      (this.S = r || 1),
      (this.V = new ze(this)),
      (this.H = 45e3),
      (this.J = null),
      (this.o = !1),
      (this.u = this.B = this.A = this.M = this.F = this.T = this.D = null),
      (this.G = []),
      (this.g = null),
      (this.C = 0),
      (this.m = this.v = null),
      (this.X = -1),
      (this.K = !1),
      (this.P = 0),
      (this.O = null),
      (this.W = this.L = this.U = this.R = !1),
      (this.h = new gt()));
  }
  function gt() {
    ((this.i = null), (this.g = ``), (this.h = !1));
  }
  var _t = {},
    vt = {};
  function yt(e, t, n) {
    ((e.M = 1), (e.A = Gt(Vt(t))), (e.u = n), (e.R = !0), bt(e, null));
  }
  function bt(e, t) {
    ((e.F = Date.now()), wt(e), (e.B = Vt(e.A)));
    var n = e.B,
      r = e.S;
    (Array.isArray(r) || (r = [String(r)]),
      on(n.i, `t`, r),
      (e.C = 0),
      (n = e.j.L),
      (e.h = new gt()),
      (e.g = N(e.j, n ? t : null, !e.u)),
      e.P > 0 && (e.O = new Re(l(e.Y, e, e.g), e.P)),
      (t = e.V),
      (n = e.g),
      (r = e.ba));
    var i = `readystatechange`;
    Array.isArray(i) || (i && (Be[0] = i.toString()), (i = Be));
    for (let e = 0; e < i.length; e++) {
      let a = Te(n, i[e], r || t.handleEvent, !1, t.h || t);
      if (!a) break;
      t.g[a.key] = a;
    }
    ((t = e.J ? _e(e.J) : {}),
      e.u
        ? (e.v || (e.v = `POST`),
          (t[`Content-Type`] = `application/x-www-form-urlencoded`),
          e.g.ea(e.B, e.v, e.u, t))
        : ((e.v = `GET`), e.g.ea(e.B, e.v, null, t)),
      $e(),
      it(e.i, e.v, e.B, e.l, e.S, e.u));
  }
  ((ht.prototype.ba = function (e) {
    e = e.target;
    let t = this.O;
    t && Dn(e) == 3 ? t.j() : this.Y(e);
  }),
    (ht.prototype.Y = function (e) {
      try {
        if (e == this.g)
          a: {
            let s = Dn(this.g),
              c = this.g.ya(),
              l = this.g.ca();
            if (
              !(s < 3) &&
              (s != 3 || (this.g && (this.h.h || this.g.la() || On(this.g))))
            ) {
              (this.K || s != 4 || c == 7 || $e(c == 8 || l <= 0 ? 3 : 2),
                Et(this));
              var t = this.g.ca();
              this.X = t;
              var n = xt(this);
              if (
                ((this.o = t == 200),
                at(this.i, this.v, this.B, this.l, this.S, s, t),
                this.o)
              ) {
                if (this.U && !this.L) {
                  b: {
                    if (this.g) {
                      var r,
                        i = this.g;
                      if (
                        (r = i.g
                          ? i.g.getResponseHeader(`X-HTTP-Initial-Response`)
                          : null) &&
                        !ue(r)
                      ) {
                        var a = r;
                        break b;
                      }
                    }
                    a = null;
                  }
                  if ((e = a))
                    (ot(
                      this.i,
                      this.l,
                      e,
                      `Initial handshake response via X-HTTP-Initial-Response`,
                    ),
                      (this.L = !0),
                      kt(this, e));
                  else {
                    ((this.o = !1), (this.m = 3), w(12), Ot(this), Dt(this));
                    break a;
                  }
                }
                if (this.R) {
                  e = !0;
                  let t;
                  for (; !this.K && this.C < n.length;)
                    if (((t = Ct(this, n)), t == vt)) {
                      (s == 4 && ((this.m = 4), w(14), (e = !1)),
                        ot(this.i, this.l, null, `[Incomplete Response]`));
                      break;
                    } else if (t == _t) {
                      ((this.m = 4),
                        w(15),
                        ot(this.i, this.l, n, `[Invalid Chunk]`),
                        (e = !1));
                      break;
                    } else (ot(this.i, this.l, t, null), kt(this, t));
                  if (
                    (St(this) &&
                      this.C != 0 &&
                      ((this.h.g = this.h.g.slice(this.C)), (this.C = 0)),
                    s != 4 ||
                      n.length != 0 ||
                      this.h.h ||
                      ((this.m = 1), w(16), (e = !1)),
                    (this.o = this.o && e),
                    !e)
                  )
                    (ot(this.i, this.l, n, `[Invalid Chunked Response]`),
                      Ot(this),
                      Dt(this));
                  else if (n.length > 0 && !this.W) {
                    this.W = !0;
                    var o = this.j;
                    o.g == this &&
                      o.aa &&
                      !o.P &&
                      (o.j.info(
                        `Great, no buffering proxy detected. Bytes received: ` +
                          n.length,
                      ),
                      Xn(o),
                      (o.P = !0),
                      w(11));
                  }
                } else (ot(this.i, this.l, n, null), kt(this, n));
                (s == 4 && Ot(this),
                  this.o &&
                    !this.K &&
                    (s == 4 ? k(this.j, this) : ((this.o = !1), wt(this))));
              } else
                (kn(this.g),
                  t == 400 && n.indexOf(`Unknown SID`) > 0
                    ? ((this.m = 3), w(12))
                    : ((this.m = 0), w(13)),
                  Ot(this),
                  Dt(this));
            }
          }
      } catch (e) {}
    }));
  function xt(e) {
    if (!St(e)) return e.g.la();
    let t = On(e.g);
    if (t === ``) return ``;
    let n = ``,
      r = t.length,
      i = Dn(e.g) == 4;
    if (!e.h.i) {
      if (typeof TextDecoder > `u`) return (Ot(e), Dt(e), ``);
      e.h.i = new o.TextDecoder();
    }
    for (let a = 0; a < r; a++)
      ((e.h.h = !0), (n += e.h.i.decode(t[a], { stream: !(i && a == r - 1) })));
    return ((t.length = 0), (e.h.g += n), (e.C = 0), e.h.g);
  }
  function St(e) {
    return e.g ? e.v == `GET` && e.M != 2 && e.j.Aa : !1;
  }
  function Ct(e, t) {
    var n = e.C,
      r = t.indexOf(
        `
`,
        n,
      );
    return r == -1
      ? vt
      : ((n = Number(t.substring(n, r))),
        isNaN(n)
          ? _t
          : ((r += 1),
            r + n > t.length
              ? vt
              : ((t = t.slice(r, r + n)), (e.C = r + n), t)));
  }
  ht.prototype.cancel = function () {
    ((this.K = !0), Ot(this));
  };
  function wt(e) {
    ((e.T = Date.now() + e.H), Tt(e, e.H));
  }
  function Tt(e, t) {
    if (e.D != null) throw Error(`WatchDog timer not null`);
    e.D = nt(l(e.aa, e), t);
  }
  function Et(e) {
    e.D && (o.clearTimeout(e.D), (e.D = null));
  }
  ht.prototype.aa = function () {
    this.D = null;
    let e = Date.now();
    e - this.T >= 0
      ? (st(this.i, this.B),
        this.M != 2 && ($e(), w(17)),
        Ot(this),
        (this.m = 2),
        Dt(this))
      : Tt(this, this.T - e);
  };
  function Dt(e) {
    e.j.I == 0 || e.K || k(e.j, e);
  }
  function Ot(e) {
    Et(e);
    var t = e.O;
    (t && typeof t.dispose == `function` && t.dispose(),
      (e.O = null),
      Ve(e.V),
      e.g && ((t = e.g), (e.g = null), t.abort(), t.dispose()));
  }
  function kt(e, t) {
    try {
      var n = e.j;
      if (n.I != 0 && (n.g == e || Pt(n.h, e))) {
        if (!e.L && Pt(n.h, e) && n.I == 3) {
          try {
            var r = n.Ba.g.parse(t);
          } catch (e) {
            r = null;
          }
          if (Array.isArray(r) && r.length == 3) {
            var i = r;
            if (i[0] == 0) {
              a: if (!n.v) {
                if (n.g)
                  if (n.g.F + 3e3 < e.F) (Qn(n), Nn(n));
                  else break a;
                (O(n), w(18));
              }
            } else
              ((n.xa = i[1]),
                0 < n.xa - n.K &&
                  i[2] < 37500 &&
                  n.F &&
                  n.A == 0 &&
                  !n.C &&
                  (n.C = nt(l(n.Va, n), 6e3)));
            Nt(n.h) <= 1 && n.ta && (n.ta = void 0);
          } else A(n, 11);
        } else if (((e.L || n.g == e) && Qn(n), !ue(t)))
          for (i = n.Ba.g.parse(t), t = 0; t < i.length; t++) {
            let l = i[t],
              u = l[0];
            if (!(u <= n.K))
              if (((n.K = u), (l = l[1]), n.I == 2))
                if (l[0] == `c`) {
                  ((n.M = l[1]), (n.ba = l[2]));
                  let t = l[3];
                  t != null && ((n.ka = t), n.j.info(`VER=` + n.ka));
                  let i = l[4];
                  i != null && ((n.za = i), n.j.info(`SVER=` + n.za));
                  let u = l[5];
                  (u != null &&
                    typeof u == `number` &&
                    u > 0 &&
                    ((r = 1.5 * u),
                    (n.O = r),
                    n.j.info(`backChannelRequestTimeoutMs_=` + r)),
                    (r = n));
                  let d = e.g;
                  if (d) {
                    let e = d.g
                      ? d.g.getResponseHeader(`X-Client-Wire-Protocol`)
                      : null;
                    if (e) {
                      var a = r.h;
                      a.g ||
                        (e.indexOf(`spdy`) == -1 &&
                          e.indexOf(`quic`) == -1 &&
                          e.indexOf(`h2`) == -1) ||
                        ((a.j = a.l),
                        (a.g = new Set()),
                        a.h && (Ft(a, a.h), (a.h = null)));
                    }
                    if (r.G) {
                      let e = d.g
                        ? d.g.getResponseHeader(`X-HTTP-Session-Id`)
                        : null;
                      e && ((r.wa = e), T(r.J, r.G, e));
                    }
                  }
                  ((n.I = 3),
                    n.l && n.l.ra(),
                    n.aa &&
                      ((n.T = Date.now() - e.F),
                      n.j.info(`Handshake RTT: ` + n.T + `ms`)),
                    (r = n));
                  var o = e;
                  if (((r.na = M(r, r.L ? r.ba : null, r.W)), o.L)) {
                    It(r.h, o);
                    var s = o,
                      c = r.O;
                    (c && (s.H = c), s.D && (Et(s), wt(s)), (r.g = o));
                  } else Yn(r);
                  n.i.length > 0 && Fn(n);
                } else (l[0] != `stop` && l[0] != `close`) || A(n, 7);
              else
                n.I == 3 &&
                  (l[0] == `stop` || l[0] == `close`
                    ? l[0] == `stop`
                      ? A(n, 7)
                      : Mn(n)
                    : l[0] != `noop` && n.l && n.l.qa(l),
                  (n.A = 0));
          }
      }
      $e(4);
    } catch (e) {}
  }
  var At = class {
    constructor(e, t) {
      ((this.g = e), (this.map = t));
    }
  };
  function jt(e) {
    ((this.l = e || 10),
      o.PerformanceNavigationTiming
        ? ((e = o.performance.getEntriesByType(`navigation`)),
          (e =
            e.length > 0 &&
            (e[0].nextHopProtocol == `hq` || e[0].nextHopProtocol == `h2`)))
        : (e = !!(
            o.chrome &&
            o.chrome.loadTimes &&
            o.chrome.loadTimes() &&
            o.chrome.loadTimes().wasFetchedViaSpdy
          )),
      (this.j = e ? this.l : 1),
      (this.g = null),
      this.j > 1 && (this.g = new Set()),
      (this.h = null),
      (this.i = []));
  }
  function Mt(e) {
    return e.h ? !0 : e.g ? e.g.size >= e.j : !1;
  }
  function Nt(e) {
    return e.h ? 1 : e.g ? e.g.size : 0;
  }
  function Pt(e, t) {
    return e.h ? e.h == t : e.g ? e.g.has(t) : !1;
  }
  function Ft(e, t) {
    e.g ? e.g.add(t) : (e.h = t);
  }
  function It(e, t) {
    e.h && e.h == t ? (e.h = null) : e.g && e.g.has(t) && e.g.delete(t);
  }
  jt.prototype.cancel = function () {
    if (((this.i = Lt(this)), this.h)) (this.h.cancel(), (this.h = null));
    else if (this.g && this.g.size !== 0) {
      for (let e of this.g.values()) e.cancel();
      this.g.clear();
    }
  };
  function Lt(e) {
    if (e.h != null) return e.i.concat(e.h.G);
    if (e.g != null && e.g.size !== 0) {
      let t = e.i;
      for (let n of e.g.values()) t = t.concat(n.G);
      return t;
    }
    return p(e.i);
  }
  var Rt = RegExp(
    `^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$`,
  );
  function zt(e, t) {
    if (e) {
      e = e.split(`&`);
      for (let n = 0; n < e.length; n++) {
        let r = e[n].indexOf(`=`),
          i,
          a = null;
        (r >= 0
          ? ((i = e[n].substring(0, r)), (a = e[n].substring(r + 1)))
          : (i = e[n]),
          t(i, a ? decodeURIComponent(a.replace(/\+/g, ` `)) : ``));
      }
    }
  }
  function Bt(e) {
    ((this.g = this.o = this.j = ``),
      (this.u = null),
      (this.m = this.h = ``),
      (this.l = !1));
    let t;
    e instanceof Bt
      ? ((this.l = e.l),
        Ht(this, e.j),
        (this.o = e.o),
        (this.g = e.g),
        Ut(this, e.u),
        (this.h = e.h),
        Wt(this, sn(e.i)),
        (this.m = e.m))
      : e && (t = String(e).match(Rt))
        ? ((this.l = !1),
          Ht(this, t[1] || ``, !0),
          (this.o = Kt(t[2] || ``)),
          (this.g = Kt(t[3] || ``, !0)),
          Ut(this, t[4]),
          (this.h = Kt(t[5] || ``, !0)),
          Wt(this, t[6] || ``, !0),
          (this.m = Kt(t[7] || ``)))
        : ((this.l = !1), (this.i = new en(null, this.l)));
  }
  ((Bt.prototype.toString = function () {
    let e = [];
    var t = this.j;
    t && e.push(qt(t, Yt, !0), `:`);
    var n = this.g;
    return (
      (n || t == `file`) &&
        (e.push(`//`),
        (t = this.o) && e.push(qt(t, Yt, !0), `@`),
        e.push(pt(n).replace(/%25([0-9a-fA-F]{2})/g, `%$1`)),
        (n = this.u),
        n != null && e.push(`:`, String(n))),
      (n = this.h) &&
        (this.g && n.charAt(0) != `/` && e.push(`/`),
        e.push(qt(n, n.charAt(0) == `/` ? Zt : Xt, !0))),
      (n = this.i.toString()) && e.push(`?`, n),
      (n = this.m) && e.push(`#`, qt(n, $t)),
      e.join(``)
    );
  }),
    (Bt.prototype.resolve = function (e) {
      let t = Vt(this),
        n = !!e.j;
      (n ? Ht(t, e.j) : (n = !!e.o),
        n ? (t.o = e.o) : (n = !!e.g),
        n ? (t.g = e.g) : (n = e.u != null));
      var r = e.h;
      if (n) Ut(t, e.u);
      else if ((n = !!e.h)) {
        if (r.charAt(0) != `/`)
          if (this.g && !this.h) r = `/` + r;
          else {
            var i = t.h.lastIndexOf(`/`);
            i != -1 && (r = t.h.slice(0, i + 1) + r);
          }
        if (((i = r), i == `..` || i == `.`)) r = ``;
        else if (i.indexOf(`./`) != -1 || i.indexOf(`/.`) != -1) {
          ((r = i.lastIndexOf(`/`, 0) == 0), (i = i.split(`/`)));
          let e = [];
          for (let t = 0; t < i.length;) {
            let n = i[t++];
            n == `.`
              ? r && t == i.length && e.push(``)
              : n == `..`
                ? ((e.length > 1 || (e.length == 1 && e[0] != ``)) && e.pop(),
                  r && t == i.length && e.push(``))
                : (e.push(n), (r = !0));
          }
          r = e.join(`/`);
        } else r = i;
      }
      return (
        n ? (t.h = r) : (n = e.i.toString() !== ``),
        n ? Wt(t, sn(e.i)) : (n = !!e.m),
        n && (t.m = e.m),
        t
      );
    }));
  function Vt(e) {
    return new Bt(e);
  }
  function Ht(e, t, n) {
    ((e.j = n ? Kt(t, !0) : t), e.j && (e.j = e.j.replace(/:$/, ``)));
  }
  function Ut(e, t) {
    if (t) {
      if (((t = Number(t)), isNaN(t) || t < 0))
        throw Error(`Bad port number ` + t);
      e.u = t;
    } else e.u = null;
  }
  function Wt(e, t, n) {
    t instanceof en
      ? ((e.i = t), ln(e.i, e.l))
      : (n || (t = qt(t, Qt)), (e.i = new en(t, e.l)));
  }
  function T(e, t, n) {
    e.i.set(t, n);
  }
  function Gt(e) {
    return (
      T(
        e,
        `zx`,
        Math.floor(Math.random() * 2147483648).toString(36) +
          Math.abs(
            Math.floor(Math.random() * 2147483648) ^ Date.now(),
          ).toString(36),
      ),
      e
    );
  }
  function Kt(e, t) {
    return e
      ? t
        ? decodeURI(e.replace(/%25/g, `%2525`))
        : decodeURIComponent(e)
      : ``;
  }
  function qt(e, t, n) {
    return typeof e == `string`
      ? ((e = encodeURI(e).replace(t, Jt)),
        n && (e = e.replace(/%25([0-9a-fA-F]{2})/g, `%$1`)),
        e)
      : null;
  }
  function Jt(e) {
    return (
      (e = e.charCodeAt(0)),
      `%` + ((e >> 4) & 15).toString(16) + (e & 15).toString(16)
    );
  }
  var Yt = /[#\/\?@]/g,
    Xt = /[#\?:]/g,
    Zt = /[#\?]/g,
    Qt = /[#\?@]/g,
    $t = /#/g;
  function en(e, t) {
    ((this.h = this.g = null), (this.i = e || null), (this.j = !!t));
  }
  function tn(e) {
    e.g ||
      ((e.g = new Map()),
      (e.h = 0),
      e.i &&
        zt(e.i, function (t, n) {
          e.add(decodeURIComponent(t.replace(/\+/g, ` `)), n);
        }));
  }
  ((e = en.prototype),
    (e.add = function (e, t) {
      (tn(this), (this.i = null), (e = cn(this, e)));
      let n = this.g.get(e);
      return (n || this.g.set(e, (n = [])), n.push(t), (this.h += 1), this);
    }));
  function nn(e, t) {
    (tn(e),
      (t = cn(e, t)),
      e.g.has(t) && ((e.i = null), (e.h -= e.g.get(t).length), e.g.delete(t)));
  }
  function rn(e, t) {
    return (tn(e), (t = cn(e, t)), e.g.has(t));
  }
  e.forEach = function (e, t) {
    (tn(this),
      this.g.forEach(function (n, r) {
        n.forEach(function (n) {
          e.call(t, n, r, this);
        }, this);
      }, this));
  };
  function an(e, t) {
    tn(e);
    let n = [];
    if (typeof t == `string`) rn(e, t) && (n = n.concat(e.g.get(cn(e, t))));
    else
      for (e = Array.from(e.g.values()), t = 0; t < e.length; t++)
        n = n.concat(e[t]);
    return n;
  }
  ((e.set = function (e, t) {
    return (
      tn(this),
      (this.i = null),
      (e = cn(this, e)),
      rn(this, e) && (this.h -= this.g.get(e).length),
      this.g.set(e, [t]),
      (this.h += 1),
      this
    );
  }),
    (e.get = function (e, t) {
      return e ? ((e = an(this, e)), e.length > 0 ? String(e[0]) : t) : t;
    }));
  function on(e, t, n) {
    (nn(e, t),
      n.length > 0 &&
        ((e.i = null), e.g.set(cn(e, t), p(n)), (e.h += n.length)));
  }
  e.toString = function () {
    if (this.i) return this.i;
    if (!this.g) return ``;
    let e = [],
      t = Array.from(this.g.keys());
    for (let r = 0; r < t.length; r++) {
      var n = t[r];
      let i = pt(n);
      n = an(this, n);
      for (let t = 0; t < n.length; t++) {
        let r = i;
        (n[t] !== `` && (r += `=` + pt(n[t])), e.push(r));
      }
    }
    return (this.i = e.join(`&`));
  };
  function sn(e) {
    let t = new en();
    return ((t.i = e.i), e.g && ((t.g = new Map(e.g)), (t.h = e.h)), t);
  }
  function cn(e, t) {
    return ((t = String(t)), e.j && (t = t.toLowerCase()), t);
  }
  function ln(e, t) {
    (t &&
      !e.j &&
      (tn(e),
      (e.i = null),
      e.g.forEach(function (e, t) {
        let n = t.toLowerCase();
        t != n && (nn(this, t), on(this, n, e));
      }, e)),
      (e.j = t));
  }
  function un(e, t) {
    let n = new rt();
    if (o.Image) {
      let r = new Image();
      ((r.onload = u(fn, n, `TestLoadImage: loaded`, !0, t, r)),
        (r.onerror = u(fn, n, `TestLoadImage: error`, !1, t, r)),
        (r.onabort = u(fn, n, `TestLoadImage: abort`, !1, t, r)),
        (r.ontimeout = u(fn, n, `TestLoadImage: timeout`, !1, t, r)),
        o.setTimeout(function () {
          r.ontimeout && r.ontimeout();
        }, 1e4),
        (r.src = e));
    } else t(!1);
  }
  function dn(e, t) {
    let n = new rt(),
      r = new AbortController(),
      i = setTimeout(() => {
        (r.abort(), fn(n, `TestPingServer: timeout`, !1, t));
      }, 1e4);
    fetch(e, { signal: r.signal })
      .then((e) => {
        (clearTimeout(i),
          e.ok
            ? fn(n, `TestPingServer: ok`, !0, t)
            : fn(n, `TestPingServer: server error`, !1, t));
      })
      .catch(() => {
        (clearTimeout(i), fn(n, `TestPingServer: error`, !1, t));
      });
  }
  function fn(e, t, n, r, i) {
    try {
      (i &&
        ((i.onload = null),
        (i.onerror = null),
        (i.onabort = null),
        (i.ontimeout = null)),
        r(n));
    } catch (e) {}
  }
  function pn() {
    this.g = new We();
  }
  function mn(e) {
    ((this.i = e.Sb || null), (this.h = e.ab || !1));
  }
  (d(mn, Ge),
    (mn.prototype.g = function () {
      return new hn(this.i, this.h);
    }));
  function hn(e, t) {
    (b.call(this),
      (this.H = e),
      (this.o = t),
      (this.m = void 0),
      (this.status = this.readyState = 0),
      (this.responseType =
        this.responseText =
        this.response =
        this.statusText =
          ``),
      (this.onreadystatechange = null),
      (this.A = new Headers()),
      (this.h = null),
      (this.F = `GET`),
      (this.D = ``),
      (this.g = !1),
      (this.B = this.j = this.l = null),
      (this.v = new AbortController()));
  }
  (d(hn, b),
    (e = hn.prototype),
    (e.open = function (e, t) {
      if (this.readyState != 0)
        throw (this.abort(), Error(`Error reopening a connection`));
      ((this.F = e), (this.D = t), (this.readyState = 1), vn(this));
    }),
    (e.send = function (e) {
      if (this.readyState != 1)
        throw (this.abort(), Error(`need to call open() first. `));
      if (this.v.signal.aborted)
        throw (this.abort(), Error(`Request was aborted.`));
      this.g = !0;
      let t = {
        headers: this.A,
        method: this.F,
        credentials: this.m,
        cache: void 0,
        signal: this.v.signal,
      };
      (e && (t.body = e),
        (this.H || o)
          .fetch(new Request(this.D, t))
          .then(this.Pa.bind(this), this.ga.bind(this)));
    }),
    (e.abort = function () {
      ((this.response = this.responseText = ``),
        (this.A = new Headers()),
        (this.status = 0),
        this.v.abort(),
        this.j && this.j.cancel(`Request was aborted.`).catch(() => {}),
        this.readyState >= 1 &&
          this.g &&
          this.readyState != 4 &&
          ((this.g = !1), _n(this)),
        (this.readyState = 0));
    }),
    (e.Pa = function (e) {
      if (
        this.g &&
        ((this.l = e),
        this.h ||
          ((this.status = this.l.status),
          (this.statusText = this.l.statusText),
          (this.h = e.headers),
          (this.readyState = 2),
          vn(this)),
        this.g && ((this.readyState = 3), vn(this), this.g))
      )
        if (this.responseType === `arraybuffer`)
          e.arrayBuffer().then(this.Na.bind(this), this.ga.bind(this));
        else if (o.ReadableStream !== void 0 && `body` in e) {
          if (((this.j = e.body.getReader()), this.o)) {
            if (this.responseType)
              throw Error(
                `responseType must be empty for "streamBinaryChunks" mode responses.`,
              );
            this.response = [];
          } else
            ((this.response = this.responseText = ``),
              (this.B = new TextDecoder()));
          gn(this);
        } else e.text().then(this.Oa.bind(this), this.ga.bind(this));
    }));
  function gn(e) {
    e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e));
  }
  ((e.Ma = function (e) {
    if (this.g) {
      if (this.o && e.value) this.response.push(e.value);
      else if (!this.o) {
        var t = e.value ? e.value : new Uint8Array();
        (t = this.B.decode(t, { stream: !e.done })) &&
          (this.response = this.responseText += t);
      }
      (e.done ? _n(this) : vn(this), this.readyState == 3 && gn(this));
    }
  }),
    (e.Oa = function (e) {
      this.g && ((this.response = this.responseText = e), _n(this));
    }),
    (e.Na = function (e) {
      this.g && ((this.response = e), _n(this));
    }),
    (e.ga = function () {
      this.g && _n(this);
    }));
  function _n(e) {
    ((e.readyState = 4), (e.l = null), (e.j = null), (e.B = null), vn(e));
  }
  ((e.setRequestHeader = function (e, t) {
    this.A.append(e, t);
  }),
    (e.getResponseHeader = function (e) {
      return (this.h && this.h.get(e.toLowerCase())) || ``;
    }),
    (e.getAllResponseHeaders = function () {
      if (!this.h) return ``;
      let e = [],
        t = this.h.entries();
      for (var n = t.next(); !n.done;)
        ((n = n.value), e.push(n[0] + `: ` + n[1]), (n = t.next()));
      return e.join(`\r
`);
    }));
  function vn(e) {
    e.onreadystatechange && e.onreadystatechange.call(e);
  }
  Object.defineProperty(hn.prototype, `withCredentials`, {
    get: function () {
      return this.m === `include`;
    },
    set: function (e) {
      this.m = e ? `include` : `same-origin`;
    },
  });
  function yn(e) {
    let t = ``;
    return (
      y(e, function (e, n) {
        ((t += n),
          (t += `:`),
          (t += e),
          (t += `\r
`));
      }),
      t
    );
  }
  function bn(e, t, n) {
    a: {
      for (r in n) {
        var r = !1;
        break a;
      }
      r = !0;
    }
    r || ((n = yn(n)), typeof e == `string` || T(e, t, n));
  }
  function E(e) {
    (b.call(this),
      (this.headers = new Map()),
      (this.L = e || null),
      (this.h = !1),
      (this.g = null),
      (this.D = ``),
      (this.o = 0),
      (this.l = ``),
      (this.j = this.B = this.v = this.A = !1),
      (this.m = null),
      (this.F = ``),
      (this.H = !1));
  }
  d(E, b);
  var xn = /^https?$/i,
    Sn = [`POST`, `PUT`];
  ((e = E.prototype),
    (e.Fa = function (e) {
      this.H = e;
    }),
    (e.ea = function (e, t, n, r) {
      if (this.g)
        throw Error(
          `[goog.net.XhrIo] Object is active with another request=` +
            this.D +
            `; newUri=` +
            e,
        );
      ((t = t ? t.toUpperCase() : `GET`),
        (this.D = e),
        (this.l = ``),
        (this.o = 0),
        (this.A = !1),
        (this.h = !0),
        (this.g = this.L ? this.L.g() : dt.g()),
        (this.g.onreadystatechange = f(l(this.Ca, this))));
      try {
        ((this.B = !0), this.g.open(t, String(e), !0), (this.B = !1));
      } catch (e) {
        Cn(this, e);
        return;
      }
      if (((e = n || ``), (n = new Map(this.headers)), r))
        if (Object.getPrototypeOf(r) === Object.prototype)
          for (var i in r) n.set(i, r[i]);
        else if (typeof r.keys == `function` && typeof r.get == `function`)
          for (let e of r.keys()) n.set(e, r.get(e));
        else throw Error(`Unknown input type for opt_headers: ` + String(r));
      ((r = Array.from(n.keys()).find(
        (e) => e.toLowerCase() == `content-type`,
      )),
        (i = o.FormData && e instanceof o.FormData),
        !(Array.prototype.indexOf.call(Sn, t, void 0) >= 0) ||
          r ||
          i ||
          n.set(
            `Content-Type`,
            `application/x-www-form-urlencoded;charset=utf-8`,
          ));
      for (let [e, t] of n) this.g.setRequestHeader(e, t);
      (this.F && (this.g.responseType = this.F),
        `withCredentials` in this.g &&
          this.g.withCredentials !== this.H &&
          (this.g.withCredentials = this.H));
      try {
        (this.m && (clearTimeout(this.m), (this.m = null)),
          (this.v = !0),
          this.g.send(e),
          (this.v = !1));
      } catch (e) {
        Cn(this, e);
      }
    }));
  function Cn(e, t) {
    ((e.h = !1),
      e.g && ((e.j = !0), e.g.abort(), (e.j = !1)),
      (e.l = t),
      (e.o = 5),
      wn(e),
      En(e));
  }
  function wn(e) {
    e.A || ((e.A = !0), x(e, `complete`), x(e, `error`));
  }
  ((e.abort = function (e) {
    this.g &&
      this.h &&
      ((this.h = !1),
      (this.j = !0),
      this.g.abort(),
      (this.j = !1),
      (this.o = e || 7),
      x(this, `complete`),
      x(this, `abort`),
      En(this));
  }),
    (e.N = function () {
      (this.g &&
        (this.h &&
          ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
        En(this, !0)),
        E.Z.N.call(this));
    }),
    (e.Ca = function () {
      this.u || (this.B || this.v || this.j ? Tn(this) : this.Xa());
    }),
    (e.Xa = function () {
      Tn(this);
    }));
  function Tn(e) {
    if (e.h && a !== void 0) {
      if (e.v && Dn(e) == 4) setTimeout(e.Ca.bind(e), 0);
      else if ((x(e, `readystatechange`), Dn(e) == 4)) {
        e.h = !1;
        try {
          let a = e.ca();
          a: switch (a) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var t = !0;
              break a;
            default:
              t = !1;
          }
          var n;
          if (!(n = t)) {
            var r;
            if ((r = a === 0)) {
              let t = String(e.D).match(Rt)[1] || null;
              (!t &&
                o.self &&
                o.self.location &&
                (t = o.self.location.protocol.slice(0, -1)),
                (r = !xn.test(t ? t.toLowerCase() : ``)));
            }
            n = r;
          }
          if (n) (x(e, `complete`), x(e, `success`));
          else {
            e.o = 6;
            try {
              var i = Dn(e) > 2 ? e.g.statusText : ``;
            } catch (e) {
              i = ``;
            }
            ((e.l = i + ` [` + e.ca() + `]`), wn(e));
          }
        } finally {
          En(e);
        }
      }
    }
  }
  function En(e, t) {
    if (e.g) {
      e.m && (clearTimeout(e.m), (e.m = null));
      let n = e.g;
      ((e.g = null), t || x(e, `ready`));
      try {
        n.onreadystatechange = null;
      } catch (e) {}
    }
  }
  e.isActive = function () {
    return !!this.g;
  };
  function Dn(e) {
    return e.g ? e.g.readyState : 0;
  }
  ((e.ca = function () {
    try {
      return Dn(this) > 2 ? this.g.status : -1;
    } catch (e) {
      return -1;
    }
  }),
    (e.la = function () {
      try {
        return this.g ? this.g.responseText : ``;
      } catch (e) {
        return ``;
      }
    }),
    (e.La = function (e) {
      if (this.g) {
        var t = this.g.responseText;
        return (e && t.indexOf(e) == 0 && (t = t.substring(e.length)), Ue(t));
      }
    }));
  function On(e) {
    try {
      if (!e.g) return null;
      if (`response` in e.g) return e.g.response;
      switch (e.F) {
        case ``:
        case `text`:
          return e.g.responseText;
        case `arraybuffer`:
          if (`mozResponseArrayBuffer` in e.g)
            return e.g.mozResponseArrayBuffer;
      }
      return null;
    } catch (e) {
      return null;
    }
  }
  function kn(e) {
    let t = {};
    e = ((e.g && Dn(e) >= 2 && e.g.getAllResponseHeaders()) || ``).split(`\r
`);
    for (let r = 0; r < e.length; r++) {
      if (ue(e[r])) continue;
      var n = mt(e[r]);
      let i = n[0];
      if (((n = n[1]), typeof n != `string`)) continue;
      n = n.trim();
      let a = t[i] || [];
      ((t[i] = a), a.push(n));
    }
    ge(t, function (e) {
      return e.join(`, `);
    });
  }
  ((e.ya = function () {
    return this.o;
  }),
    (e.Ha = function () {
      return typeof this.l == `string` ? this.l : String(this.l);
    }));
  function An(e, t, n) {
    return (n && n.internalChannelParams && n.internalChannelParams[e]) || t;
  }
  function jn(e) {
    ((this.za = 0),
      (this.i = []),
      (this.j = new rt()),
      (this.ba =
        this.na =
        this.J =
        this.W =
        this.g =
        this.wa =
        this.G =
        this.H =
        this.u =
        this.U =
        this.o =
          null),
      (this.Ya = this.V = 0),
      (this.Sa = An(`failFast`, !1, e)),
      (this.F = this.C = this.v = this.m = this.l = null),
      (this.X = !0),
      (this.xa = this.K = -1),
      (this.Y = this.A = this.D = 0),
      (this.Qa = An(`baseRetryDelayMs`, 5e3, e)),
      (this.Za = An(`retryDelaySeedMs`, 1e4, e)),
      (this.Ta = An(`forwardChannelMaxRetries`, 2, e)),
      (this.va = An(`forwardChannelRequestTimeoutMs`, 2e4, e)),
      (this.ma = (e && e.xmlHttpFactory) || void 0),
      (this.Ua = (e && e.Rb) || void 0),
      (this.Aa = (e && e.useFetchStreams) || !1),
      (this.O = void 0),
      (this.L = (e && e.supportsCrossDomainXhr) || !1),
      (this.M = ``),
      (this.h = new jt(e && e.concurrentRequestLimit)),
      (this.Ba = new pn()),
      (this.S = (e && e.fastHandshake) || !1),
      (this.R = (e && e.encodeInitMessageHeaders) || !1),
      this.S && this.R && (this.R = !1),
      (this.Ra = (e && e.Pb) || !1),
      e && e.ua && this.j.ua(),
      e && e.forceLongPolling && (this.X = !1),
      (this.aa = (!this.S && this.X && e && e.detectBufferingProxy) || !1),
      (this.ia = void 0),
      e &&
        e.longPollingTimeout &&
        e.longPollingTimeout > 0 &&
        (this.ia = e.longPollingTimeout),
      (this.ta = void 0),
      (this.T = 0),
      (this.P = !1),
      (this.ja = this.B = null));
  }
  ((e = jn.prototype),
    (e.ka = 8),
    (e.I = 1),
    (e.connect = function (e, t, n, r) {
      (w(0),
        (this.W = e),
        (this.H = t || {}),
        n && r !== void 0 && ((this.H.OSID = n), (this.H.OAID = r)),
        (this.F = this.X),
        (this.J = M(this, null, this.W)),
        Fn(this));
    }));
  function Mn(e) {
    if ((Pn(e), e.I == 3)) {
      var t = e.V++,
        n = Vt(e.J);
      if (
        (T(n, `SID`, e.M),
        T(n, `RID`, t),
        T(n, `TYPE`, `terminate`),
        qn(e, n),
        (t = new ht(e, e.j, t)),
        (t.M = 2),
        (t.A = Gt(Vt(n))),
        (n = !1),
        o.navigator && o.navigator.sendBeacon)
      )
        try {
          n = o.navigator.sendBeacon(t.A.toString(), ``);
        } catch (e) {}
      (!n && o.Image && ((new Image().src = t.A), (n = !0)),
        n || ((t.g = N(t.j, null)), t.g.ea(t.A)),
        (t.F = Date.now()),
        wt(t));
    }
    j(e);
  }
  function Nn(e) {
    e.g && (Xn(e), e.g.cancel(), (e.g = null));
  }
  function Pn(e) {
    (Nn(e),
      e.v && (o.clearTimeout(e.v), (e.v = null)),
      Qn(e),
      e.h.cancel(),
      e.m && (typeof e.m == `number` && o.clearTimeout(e.m), (e.m = null)));
  }
  function Fn(e) {
    if (!Mt(e.h) && !e.m) {
      e.m = !0;
      var t = e.Ea;
      (ie || oe(), _ || (ie(), (_ = !0)), ae.add(t, e), (e.D = 0));
    }
  }
  function D(e, t) {
    return Nt(e.h) >= e.h.j - +!!e.m
      ? !1
      : e.m
        ? ((e.i = t.G.concat(e.i)), !0)
        : e.I == 1 || e.I == 2 || e.D >= (e.Sa ? 0 : e.Ta)
          ? !1
          : ((e.m = nt(l(e.Ea, e, t), $n(e, e.D))), e.D++, !0);
  }
  e.Ea = function (e) {
    if (this.m)
      if (((this.m = null), this.I == 1)) {
        if (!e) {
          ((this.V = Math.floor(Math.random() * 1e5)), (e = this.V++));
          let i = new ht(this, this.j, e),
            a = this.o;
          if (
            (this.U && (a ? ((a = _e(a)), ye(a, this.U)) : (a = this.U)),
            this.u !== null || this.R || ((i.J = a), (a = null)),
            this.S)
          )
            a: {
              for (var t = 0, n = 0; n < this.i.length; n++) {
                b: {
                  var r = this.i[n];
                  if (
                    `__data__` in r.map &&
                    ((r = r.map.__data__), typeof r == `string`)
                  ) {
                    r = r.length;
                    break b;
                  }
                  r = void 0;
                }
                if (r === void 0) break;
                if (((t += r), t > 4096)) {
                  t = n;
                  break a;
                }
                if (t === 4096 || n === this.i.length - 1) {
                  t = n + 1;
                  break a;
                }
              }
              t = 1e3;
            }
          else t = 1e3;
          ((t = Jn(this, i, t)),
            (n = Vt(this.J)),
            T(n, `RID`, e),
            T(n, `CVER`, 22),
            this.G && T(n, `X-HTTP-Session-Id`, this.G),
            qn(this, n),
            a &&
              (this.R
                ? (t = `headers=` + pt(yn(a)) + `&` + t)
                : this.u && bn(n, this.u, a)),
            Ft(this.h, i),
            this.Ra && T(n, `TYPE`, `init`),
            this.S
              ? (T(n, `$req`, t),
                T(n, `SID`, `null`),
                (i.U = !0),
                yt(i, n, null))
              : yt(i, n, t),
            (this.I = 2));
        }
      } else
        this.I == 3 &&
          (e ? Kn(this, e) : this.i.length == 0 || Mt(this.h) || Kn(this));
  };
  function Kn(e, t) {
    var n = t ? t.l : e.V++;
    let r = Vt(e.J);
    (T(r, `SID`, e.M),
      T(r, `RID`, n),
      T(r, `AID`, e.K),
      qn(e, r),
      e.u && e.o && bn(r, e.u, e.o),
      (n = new ht(e, e.j, n, e.D + 1)),
      e.u === null && (n.J = e.o),
      t && (e.i = t.G.concat(e.i)),
      (t = Jn(e, n, 1e3)),
      (n.H = Math.round(e.va * 0.5) + Math.round(e.va * 0.5 * Math.random())),
      Ft(e.h, n),
      yt(n, r, t));
  }
  function qn(e, t) {
    (e.H &&
      y(e.H, function (e, n) {
        T(t, n, e);
      }),
      e.l &&
        y({}, function (e, n) {
          T(t, n, e);
        }));
  }
  function Jn(e, t, n) {
    n = Math.min(e.i.length, n);
    let r = e.l ? l(e.l.Ka, e.l, e) : null;
    a: {
      var i = e.i;
      let t = -1;
      for (;;) {
        let e = [`count=` + n];
        t == -1
          ? n > 0
            ? ((t = i[0].g), e.push(`ofs=` + t))
            : (t = 0)
          : e.push(`ofs=` + t);
        let c = !0;
        for (let l = 0; l < n; l++) {
          var a = i[l].g;
          let n = i[l].map;
          if (((a -= t), a < 0)) ((t = Math.max(0, i[l].g - 100)), (c = !1));
          else
            try {
              a = `req` + a + `_` || ``;
              try {
                var o = n instanceof Map ? n : Object.entries(n);
                for (let [t, n] of o) {
                  let r = n;
                  (s(n) && (r = He(n)),
                    e.push(a + t + `=` + encodeURIComponent(r)));
                }
              } catch (t) {
                throw (e.push(a + `type=_badmap`), t);
              }
            } catch (e) {
              r && r(n);
            }
        }
        if (c) {
          o = e.join(`&`);
          break a;
        }
      }
      o = void 0;
    }
    return ((e = e.i.splice(0, n)), (t.G = e), o);
  }
  function Yn(e) {
    if (!e.g && !e.v) {
      e.Y = 1;
      var t = e.Da;
      (ie || oe(), _ || (ie(), (_ = !0)), ae.add(t, e), (e.A = 0));
    }
  }
  function O(e) {
    return e.g || e.v || e.A >= 3
      ? !1
      : (e.Y++, (e.v = nt(l(e.Da, e), $n(e, e.A))), e.A++, !0);
  }
  ((e.Da = function () {
    if (
      ((this.v = null),
      Zn(this),
      this.aa && !(this.P || this.g == null || this.T <= 0))
    ) {
      var e = 4 * this.T;
      (this.j.info(`BP detection timer enabled: ` + e),
        (this.B = nt(l(this.Wa, this), e)));
    }
  }),
    (e.Wa = function () {
      this.B &&
        ((this.B = null),
        this.j.info(`BP detection timeout reached.`),
        this.j.info(`Buffering proxy detected and switch to long-polling!`),
        (this.F = !1),
        (this.P = !0),
        w(10),
        Nn(this),
        Zn(this));
    }));
  function Xn(e) {
    e.B != null && (o.clearTimeout(e.B), (e.B = null));
  }
  function Zn(e) {
    ((e.g = new ht(e, e.j, `rpc`, e.Y)),
      e.u === null && (e.g.J = e.o),
      (e.g.P = 0));
    var t = Vt(e.na);
    (T(t, `RID`, `rpc`),
      T(t, `SID`, e.M),
      T(t, `AID`, e.K),
      T(t, `CI`, e.F ? `0` : `1`),
      !e.F && e.ia && T(t, `TO`, e.ia),
      T(t, `TYPE`, `xmlhttp`),
      qn(e, t),
      e.u && e.o && bn(t, e.u, e.o),
      e.O && (e.g.H = e.O));
    var n = e.g;
    ((e = e.ba),
      (n.M = 1),
      (n.A = Gt(Vt(t))),
      (n.u = null),
      (n.R = !0),
      bt(n, e));
  }
  e.Va = function () {
    this.C != null && ((this.C = null), Nn(this), O(this), w(19));
  };
  function Qn(e) {
    e.C != null && (o.clearTimeout(e.C), (e.C = null));
  }
  function k(e, t) {
    var n = null;
    if (e.g == t) {
      (Qn(e), Xn(e), (e.g = null));
      var r = 2;
    } else if (Pt(e.h, t)) ((n = t.G), It(e.h, t), (r = 1));
    else return;
    if (e.I != 0) {
      if (t.o)
        if (r == 1) {
          ((n = t.u ? t.u.length : 0), (t = Date.now() - t.F));
          var i = e.D;
          ((r = Ze()), x(r, new tt(r, n)), Fn(e));
        } else Yn(e);
      else if (
        ((i = t.m),
        i == 3 ||
          (i == 0 && t.X > 0) ||
          !((r == 1 && D(e, t)) || (r == 2 && O(e))))
      )
        switch ((n && n.length > 0 && ((t = e.h), (t.i = t.i.concat(n))), i)) {
          case 1:
            A(e, 5);
            break;
          case 4:
            A(e, 10);
            break;
          case 3:
            A(e, 6);
            break;
          default:
            A(e, 2);
        }
    }
  }
  function $n(e, t) {
    let n = e.Qa + Math.floor(Math.random() * e.Za);
    return (e.isActive() || (n *= 2), n * t);
  }
  function A(e, t) {
    if ((e.j.info(`Error code ` + t), t == 2)) {
      var n = l(e.bb, e),
        r = e.Ua;
      let t = !r;
      ((r = new Bt(r || `//www.google.com/images/cleardot.gif`)),
        (o.location && o.location.protocol == `http`) || Ht(r, `https`),
        Gt(r),
        t ? un(r.toString(), n) : dn(r.toString(), n));
    } else w(2);
    ((e.I = 0), e.l && e.l.pa(t), j(e), Pn(e));
  }
  e.bb = function (e) {
    e
      ? (this.j.info(`Successfully pinged google.com`), w(2))
      : (this.j.info(`Failed to ping google.com`), w(1));
  };
  function j(e) {
    if (((e.I = 0), (e.ja = []), e.l)) {
      let t = Lt(e.h);
      ((t.length != 0 || e.i.length != 0) &&
        (m(e.ja, t),
        m(e.ja, e.i),
        (e.h.i.length = 0),
        p(e.i),
        (e.i.length = 0)),
        e.l.oa());
    }
  }
  function M(e, t, n) {
    var r = n instanceof Bt ? Vt(n) : new Bt(n);
    if (r.g != ``) (t && (r.g = t + `.` + r.g), Ut(r, r.u));
    else {
      var i = o.location;
      ((r = i.protocol),
        (t = t ? t + `.` + i.hostname : i.hostname),
        (i = +i.port));
      let e = new Bt(null);
      (r && Ht(e, r), t && (e.g = t), i && Ut(e, i), n && (e.h = n), (r = e));
    }
    return (
      (n = e.G),
      (t = e.wa),
      n && t && T(r, n, t),
      T(r, `VER`, e.ka),
      qn(e, r),
      r
    );
  }
  function N(e, t, n) {
    if (t && !e.L)
      throw Error(`Can't create secondary domain capable XhrIo object.`);
    return (
      (t = e.Aa && !e.ma ? new E(new mn({ ab: n })) : new E(e.ma)),
      t.Fa(e.L),
      t
    );
  }
  e.isActive = function () {
    return !!this.l && this.l.isActive(this);
  };
  function er() {}
  ((e = er.prototype),
    (e.ra = function () {}),
    (e.qa = function () {}),
    (e.pa = function () {}),
    (e.oa = function () {}),
    (e.isActive = function () {
      return !0;
    }),
    (e.Ka = function () {}));
  function tr() {}
  tr.prototype.g = function (e, t) {
    return new nr(e, t);
  };
  function nr(e, t) {
    (b.call(this),
      (this.g = new jn(t)),
      (this.l = e),
      (this.h = (t && t.messageUrlParams) || null),
      (e = (t && t.messageHeaders) || null),
      t &&
        t.clientProtocolHeaderRequired &&
        (e
          ? (e[`X-Client-Protocol`] = `webchannel`)
          : (e = { "X-Client-Protocol": `webchannel` })),
      (this.g.o = e),
      (e = (t && t.initMessageHeaders) || null),
      t &&
        t.messageContentType &&
        (e
          ? (e[`X-WebChannel-Content-Type`] = t.messageContentType)
          : (e = { "X-WebChannel-Content-Type": t.messageContentType })),
      t &&
        t.sa &&
        (e
          ? (e[`X-WebChannel-Client-Profile`] = t.sa)
          : (e = { "X-WebChannel-Client-Profile": t.sa })),
      (this.g.U = e),
      (e = t && t.Qb) && !ue(e) && (this.g.u = e),
      (this.A = (t && t.supportsCrossDomainXhr) || !1),
      (this.v = (t && t.sendRawJson) || !1),
      (t = t && t.httpSessionIdParam) &&
        !ue(t) &&
        ((this.g.G = t),
        (e = this.h),
        e !== null && t in e && ((e = this.h), t in e && delete e[t])),
      (this.j = new ar(this)));
  }
  (d(nr, b),
    (nr.prototype.m = function () {
      ((this.g.l = this.j),
        this.A && (this.g.L = !0),
        this.g.connect(this.l, this.h || void 0));
    }),
    (nr.prototype.close = function () {
      Mn(this.g);
    }),
    (nr.prototype.o = function (e) {
      var t = this.g;
      if (typeof e == `string`) {
        var n = {};
        ((n.__data__ = e), (e = n));
      } else this.v && ((n = {}), (n.__data__ = He(e)), (e = n));
      (t.i.push(new At(t.Ya++, e)), t.I == 3 && Fn(t));
    }),
    (nr.prototype.N = function () {
      ((this.g.l = null),
        delete this.j,
        Mn(this.g),
        delete this.g,
        nr.Z.N.call(this));
    }));
  function rr(e) {
    (C.call(this),
      e.__headers__ &&
        ((this.headers = e.__headers__),
        (this.statusCode = e.__status__),
        delete e.__headers__,
        delete e.__status__));
    var t = e.__sm__;
    if (t) {
      a: {
        for (let n in t) {
          e = n;
          break a;
        }
        e = void 0;
      }
      ((this.i = e) &&
        ((e = this.i), (t = t !== null && e in t ? t[e] : void 0)),
        (this.data = t));
    } else this.data = e;
  }
  d(rr, C);
  function ir() {
    (Je.call(this), (this.status = 1));
  }
  d(ir, Je);
  function ar(e) {
    this.g = e;
  }
  (d(ar, er),
    (ar.prototype.ra = function () {
      x(this.g, `a`);
    }),
    (ar.prototype.qa = function (e) {
      x(this.g, new rr(e));
    }),
    (ar.prototype.pa = function (e) {
      x(this.g, new ir());
    }),
    (ar.prototype.oa = function () {
      x(this.g, `b`);
    }),
    (tr.prototype.createWebChannel = tr.prototype.g),
    (nr.prototype.send = nr.prototype.o),
    (nr.prototype.open = nr.prototype.m),
    (nr.prototype.close = nr.prototype.close),
    (Gn = Ln.createWebChannelTransport =
      function () {
        return new tr();
      }),
    (Wn = Ln.getStatEventTarget =
      function () {
        return Ze();
      }),
    (Un = Ln.Event = Ye),
    (Hn = Ln.Stat =
      {
        jb: 0,
        mb: 1,
        nb: 2,
        Hb: 3,
        Mb: 4,
        Jb: 5,
        Kb: 6,
        Ib: 7,
        Gb: 8,
        Lb: 9,
        PROXY: 10,
        NOPROXY: 11,
        Eb: 12,
        Ab: 13,
        Bb: 14,
        zb: 15,
        Cb: 16,
        Db: 17,
        fb: 18,
        eb: 19,
        gb: 20,
      }),
    (lt.NO_ERROR = 0),
    (lt.TIMEOUT = 8),
    (lt.HTTP_ERROR = 6),
    (Vn = Ln.ErrorCode = lt),
    (ut.COMPLETE = `complete`),
    (Bn = Ln.EventType = ut),
    (Ke.EventType = qe),
    (qe.OPEN = `a`),
    (qe.CLOSE = `b`),
    (qe.ERROR = `c`),
    (qe.MESSAGE = `d`),
    (b.prototype.listen = b.prototype.J),
    (zn = Ln.WebChannel = Ke),
    (Ln.FetchXmlHttpFactory = mn),
    (E.prototype.listenOnce = E.prototype.K),
    (E.prototype.getLastError = E.prototype.Ha),
    (E.prototype.getLastErrorCode = E.prototype.ya),
    (E.prototype.getStatus = E.prototype.ca),
    (E.prototype.getResponseJson = E.prototype.La),
    (E.prototype.getResponseText = E.prototype.la),
    (E.prototype.send = E.prototype.ea),
    (E.prototype.setWithCredentials = E.prototype.Fa),
    (Rn = Ln.XhrIo = E));
}).apply(
  In === void 0
    ? typeof self < `u`
      ? self
      : typeof window < `u`
        ? window
        : {}
    : In,
),
  d());
var D = class {
  constructor(e) {
    this.uid = e;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? `uid:` + this.uid : `anonymous-user`;
  }
  isEqual(e) {
    return e.uid === this.uid;
  }
};
((D.UNAUTHENTICATED = new D(null)),
  (D.GOOGLE_CREDENTIALS = new D(`google-credentials-uid`)),
  (D.FIRST_PARTY = new D(`first-party-uid`)),
  (D.MOCK_USER = new D(`mock-user`)));
var Kn = `12.12.0`;
function qn(e) {
  Kn = e;
}
var Jn = new Qe(`@firebase/firestore`);
function Yn() {
  return Jn.logLevel;
}
function O(e, ...t) {
  if (Jn.logLevel <= C.DEBUG) {
    let n = t.map(Qn);
    Jn.debug(`Firestore (${Kn}): ${e}`, ...n);
  }
}
function Xn(e, ...t) {
  if (Jn.logLevel <= C.ERROR) {
    let n = t.map(Qn);
    Jn.error(`Firestore (${Kn}): ${e}`, ...n);
  }
}
function Zn(e, ...t) {
  if (Jn.logLevel <= C.WARN) {
    let n = t.map(Qn);
    Jn.warn(`Firestore (${Kn}): ${e}`, ...n);
  }
}
function Qn(e) {
  if (typeof e == `string`) return e;
  try {
    return (function (e) {
      return JSON.stringify(e);
    })(e);
  } catch (t) {
    return e;
  }
}
function k(e, t, n) {
  let r = `Unexpected state`;
  (typeof t == `string` ? (r = t) : (n = t), $n(e, r, n));
}
function $n(e, t, n) {
  let r = `FIRESTORE (${Kn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;
  if (n !== void 0)
    try {
      r += ` CONTEXT: ` + JSON.stringify(n);
    } catch (e) {
      r += ` CONTEXT: ` + n;
    }
  throw (Xn(r), Error(r));
}
function A(e, t, n, r) {
  let i = `Unexpected state`;
  (typeof n == `string` ? (i = n) : (r = n), e || $n(t, i, r));
}
function j(e, t) {
  return e;
}
var M = {
    OK: `ok`,
    CANCELLED: `cancelled`,
    UNKNOWN: `unknown`,
    INVALID_ARGUMENT: `invalid-argument`,
    DEADLINE_EXCEEDED: `deadline-exceeded`,
    NOT_FOUND: `not-found`,
    ALREADY_EXISTS: `already-exists`,
    PERMISSION_DENIED: `permission-denied`,
    UNAUTHENTICATED: `unauthenticated`,
    RESOURCE_EXHAUSTED: `resource-exhausted`,
    FAILED_PRECONDITION: `failed-precondition`,
    ABORTED: `aborted`,
    OUT_OF_RANGE: `out-of-range`,
    UNIMPLEMENTED: `unimplemented`,
    INTERNAL: `internal`,
    UNAVAILABLE: `unavailable`,
    DATA_LOSS: `data-loss`,
  },
  N = class extends Ee {
    constructor(e, t) {
      (super(e, t),
        (this.code = e),
        (this.message = t),
        (this.toString = () =>
          `${this.name}: [code=${this.code}]: ${this.message}`));
    }
  },
  er = class {
    constructor() {
      this.promise = new Promise((e, t) => {
        ((this.resolve = e), (this.reject = t));
      });
    }
  },
  tr = class {
    constructor(e, t) {
      ((this.user = t),
        (this.type = `OAuth`),
        (this.headers = new Map()),
        this.headers.set(`Authorization`, `Bearer ${e}`));
    }
  },
  nr = class {
    getToken() {
      return Promise.resolve(null);
    }
    invalidateToken() {}
    start(e, t) {
      e.enqueueRetryable(() => t(D.UNAUTHENTICATED));
    }
    shutdown() {}
  },
  rr = class {
    constructor(e) {
      ((this.token = e), (this.changeListener = null));
    }
    getToken() {
      return Promise.resolve(this.token);
    }
    invalidateToken() {}
    start(e, t) {
      ((this.changeListener = t), e.enqueueRetryable(() => t(this.token.user)));
    }
    shutdown() {
      this.changeListener = null;
    }
  },
  ir = class {
    constructor(e) {
      ((this.t = e),
        (this.currentUser = D.UNAUTHENTICATED),
        (this.i = 0),
        (this.forceRefresh = !1),
        (this.auth = null));
    }
    start(e, t) {
      var n = this;
      A(this.o === void 0, 42304);
      let r = this.i,
        i = (e) => (this.i === r ? Promise.resolve() : ((r = this.i), t(e))),
        a = new er();
      this.o = () => {
        (this.i++,
          (this.currentUser = this.u()),
          a.resolve(),
          (a = new er()),
          e.enqueueRetryable(() => i(this.currentUser)));
      };
      let o = () => {
          let t = a;
          e.enqueueRetryable(
            p(function* () {
              (yield t.promise, yield i(n.currentUser));
            }),
          );
        },
        s = (e) => {
          (O(`FirebaseAuthCredentialsProvider`, `Auth detected`),
            (this.auth = e),
            this.o && (this.auth.addAuthTokenListener(this.o), o()));
        };
      (this.t.onInit((e) => s(e)),
        setTimeout(() => {
          if (!this.auth) {
            let e = this.t.getImmediate({ optional: !0 });
            e
              ? s(e)
              : (O(`FirebaseAuthCredentialsProvider`, `Auth not yet detected`),
                a.resolve(),
                (a = new er()));
          }
        }, 0),
        o());
    }
    getToken() {
      let e = this.i,
        t = this.forceRefresh;
      return (
        (this.forceRefresh = !1),
        this.auth
          ? this.auth
              .getToken(t)
              .then((t) =>
                this.i === e
                  ? t
                    ? (A(typeof t.accessToken == `string`, 31837, { l: t }),
                      new tr(t.accessToken, this.currentUser))
                    : null
                  : (O(
                      `FirebaseAuthCredentialsProvider`,
                      `getToken aborted due to token change.`,
                    ),
                    this.getToken()),
              )
          : Promise.resolve(null)
      );
    }
    invalidateToken() {
      this.forceRefresh = !0;
    }
    shutdown() {
      (this.auth && this.o && this.auth.removeAuthTokenListener(this.o),
        (this.o = void 0));
    }
    u() {
      let e = this.auth && this.auth.getUid();
      return (A(e === null || typeof e == `string`, 2055, { h: e }), new D(e));
    }
  },
  ar = class {
    constructor(e, t, n) {
      ((this.P = e),
        (this.T = t),
        (this.I = n),
        (this.type = `FirstParty`),
        (this.user = D.FIRST_PARTY),
        (this.R = new Map()));
    }
    A() {
      return this.I ? this.I() : null;
    }
    get headers() {
      this.R.set(`X-Goog-AuthUser`, this.P);
      let e = this.A();
      return (
        e && this.R.set(`Authorization`, e),
        this.T && this.R.set(`X-Goog-Iam-Authorization-Token`, this.T),
        this.R
      );
    }
  },
  or = class {
    constructor(e, t, n) {
      ((this.P = e), (this.T = t), (this.I = n));
    }
    getToken() {
      return Promise.resolve(new ar(this.P, this.T, this.I));
    }
    start(e, t) {
      e.enqueueRetryable(() => t(D.FIRST_PARTY));
    }
    shutdown() {}
    invalidateToken() {}
  },
  sr = class {
    constructor(e) {
      ((this.value = e),
        (this.type = `AppCheck`),
        (this.headers = new Map()),
        e &&
          e.length > 0 &&
          this.headers.set(`x-firebase-appcheck`, this.value));
    }
  },
  cr = class {
    constructor(e, t) {
      ((this.V = t),
        (this.forceRefresh = !1),
        (this.appCheck = null),
        (this.m = null),
        (this.p = null),
        sn(e) &&
          e.settings.appCheckToken &&
          (this.p = e.settings.appCheckToken));
    }
    start(e, t) {
      A(this.o === void 0, 3512);
      let n = (e) => {
        e.error != null &&
          O(
            `FirebaseAppCheckTokenProvider`,
            `Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`,
          );
        let n = e.token !== this.m;
        return (
          (this.m = e.token),
          O(
            `FirebaseAppCheckTokenProvider`,
            `Received ${n ? `new` : `existing`} token.`,
          ),
          n ? t(e.token) : Promise.resolve()
        );
      };
      this.o = (t) => {
        e.enqueueRetryable(() => n(t));
      };
      let r = (e) => {
        (O(`FirebaseAppCheckTokenProvider`, `AppCheck detected`),
          (this.appCheck = e),
          this.o && this.appCheck.addTokenListener(this.o));
      };
      (this.V.onInit((e) => r(e)),
        setTimeout(() => {
          if (!this.appCheck) {
            let e = this.V.getImmediate({ optional: !0 });
            e
              ? r(e)
              : O(`FirebaseAppCheckTokenProvider`, `AppCheck not yet detected`);
          }
        }, 0));
    }
    getToken() {
      if (this.p) return Promise.resolve(new sr(this.p));
      let e = this.forceRefresh;
      return (
        (this.forceRefresh = !1),
        this.appCheck
          ? this.appCheck
              .getToken(e)
              .then((e) =>
                e
                  ? (A(typeof e.token == `string`, 44558, { tokenResult: e }),
                    (this.m = e.token),
                    new sr(e.token))
                  : null,
              )
          : Promise.resolve(null)
      );
    }
    invalidateToken() {
      this.forceRefresh = !0;
    }
    shutdown() {
      (this.appCheck && this.o && this.appCheck.removeTokenListener(this.o),
        (this.o = void 0));
    }
  };
function lr(e) {
  let t = typeof self < `u` && (self.crypto || self.msCrypto),
    n = new Uint8Array(e);
  if (t && typeof t.getRandomValues == `function`) t.getRandomValues(n);
  else for (let t = 0; t < e; t++) n[t] = Math.floor(256 * Math.random());
  return n;
}
var ur = class {
  static newId() {
    let e = ``;
    for (; e.length < 20;) {
      let t = lr(40);
      for (let n = 0; n < t.length; ++n)
        e.length < 20 &&
          t[n] < 248 &&
          (e +=
            `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(
              t[n] % 62,
            ));
    }
    return e;
  }
};
function P(e, t) {
  return e < t ? -1 : +(e > t);
}
function dr(e, t) {
  let n = Math.min(e.length, t.length);
  for (let r = 0; r < n; r++) {
    let n = e.charAt(r),
      i = t.charAt(r);
    if (n !== i) return mr(n) === mr(i) ? P(n, i) : mr(n) ? 1 : -1;
  }
  return P(e.length, t.length);
}
var fr = 55296,
  pr = 57343;
function mr(e) {
  let t = e.charCodeAt(0);
  return t >= fr && t <= pr;
}
function hr(e, t, n) {
  return e.length === t.length && e.every((e, r) => n(e, t[r]));
}
var gr = `__name__`,
  _r = class e {
    constructor(e, t, n) {
      (t === void 0
        ? (t = 0)
        : t > e.length && k(637, { offset: t, range: e.length }),
        n === void 0
          ? (n = e.length - t)
          : n > e.length - t && k(1746, { length: n, range: e.length - t }),
        (this.segments = e),
        (this.offset = t),
        (this.len = n));
    }
    get length() {
      return this.len;
    }
    isEqual(t) {
      return e.comparator(this, t) === 0;
    }
    child(t) {
      let n = this.segments.slice(this.offset, this.limit());
      return (
        t instanceof e
          ? t.forEach((e) => {
              n.push(e);
            })
          : n.push(t),
        this.construct(n)
      );
    }
    limit() {
      return this.offset + this.length;
    }
    popFirst(e) {
      return (
        (e = e === void 0 ? 1 : e),
        this.construct(this.segments, this.offset + e, this.length - e)
      );
    }
    popLast() {
      return this.construct(this.segments, this.offset, this.length - 1);
    }
    firstSegment() {
      return this.segments[this.offset];
    }
    lastSegment() {
      return this.get(this.length - 1);
    }
    get(e) {
      return this.segments[this.offset + e];
    }
    isEmpty() {
      return this.length === 0;
    }
    isPrefixOf(e) {
      if (e.length < this.length) return !1;
      for (let t = 0; t < this.length; t++)
        if (this.get(t) !== e.get(t)) return !1;
      return !0;
    }
    isImmediateParentOf(e) {
      if (this.length + 1 !== e.length) return !1;
      for (let t = 0; t < this.length; t++)
        if (this.get(t) !== e.get(t)) return !1;
      return !0;
    }
    forEach(e) {
      for (let t = this.offset, n = this.limit(); t < n; t++)
        e(this.segments[t]);
    }
    toArray() {
      return this.segments.slice(this.offset, this.limit());
    }
    static comparator(t, n) {
      let r = Math.min(t.length, n.length);
      for (let i = 0; i < r; i++) {
        let r = e.compareSegments(t.get(i), n.get(i));
        if (r !== 0) return r;
      }
      return P(t.length, n.length);
    }
    static compareSegments(t, n) {
      let r = e.isNumericId(t),
        i = e.isNumericId(n);
      return r && !i
        ? -1
        : !r && i
          ? 1
          : r && i
            ? e.extractNumericId(t).compare(e.extractNumericId(n))
            : dr(t, n);
    }
    static isNumericId(e) {
      return e.startsWith(`__id`) && e.endsWith(`__`);
    }
    static extractNumericId(e) {
      return Pn.fromString(e.substring(4, e.length - 2));
    }
  },
  F = class e extends _r {
    construct(t, n, r) {
      return new e(t, n, r);
    }
    canonicalString() {
      return this.toArray().join(`/`);
    }
    toString() {
      return this.canonicalString();
    }
    toUriEncodedString() {
      return this.toArray().map(encodeURIComponent).join(`/`);
    }
    static fromString(...t) {
      let n = [];
      for (let e of t) {
        if (e.indexOf(`//`) >= 0)
          throw new N(
            M.INVALID_ARGUMENT,
            `Invalid segment (${e}). Paths must not contain // in them.`,
          );
        n.push(...e.split(`/`).filter((e) => e.length > 0));
      }
      return new e(n);
    }
    static emptyPath() {
      return new e([]);
    }
  },
  vr = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
  yr = class e extends _r {
    construct(t, n, r) {
      return new e(t, n, r);
    }
    static isValidIdentifier(e) {
      return vr.test(e);
    }
    canonicalString() {
      return this.toArray()
        .map(
          (t) => (
            (t = t.replace(/\\/g, `\\\\`).replace(/`/g, "\\`")),
            e.isValidIdentifier(t) || (t = "`" + t + "`"),
            t
          ),
        )
        .join(`.`);
    }
    toString() {
      return this.canonicalString();
    }
    isKeyField() {
      return this.length === 1 && this.get(0) === `__name__`;
    }
    static keyField() {
      return new e([gr]);
    }
    static fromServerFormat(t) {
      let n = [],
        r = ``,
        i = 0,
        a = () => {
          if (r.length === 0)
            throw new N(
              M.INVALID_ARGUMENT,
              `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
            );
          (n.push(r), (r = ``));
        },
        o = !1;
      for (; i < t.length;) {
        let e = t[i];
        if (e === `\\`) {
          if (i + 1 === t.length)
            throw new N(
              M.INVALID_ARGUMENT,
              `Path has trailing escape character: ` + t,
            );
          let e = t[i + 1];
          if (e !== `\\` && e !== `.` && e !== "`")
            throw new N(
              M.INVALID_ARGUMENT,
              `Path has invalid escape sequence: ` + t,
            );
          ((r += e), (i += 2));
        } else
          e === "`"
            ? ((o = !o), i++)
            : e !== `.` || o
              ? ((r += e), i++)
              : (a(), i++);
      }
      if ((a(), o))
        throw new N(M.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
      return new e(n);
    }
    static emptyPath() {
      return new e([]);
    }
  },
  I = class e {
    constructor(e) {
      this.path = e;
    }
    static fromPath(t) {
      return new e(F.fromString(t));
    }
    static fromName(t) {
      return new e(F.fromString(t).popFirst(5));
    }
    static empty() {
      return new e(F.emptyPath());
    }
    get collectionGroup() {
      return this.path.popLast().lastSegment();
    }
    hasCollectionId(e) {
      return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
    }
    getCollectionGroup() {
      return this.path.get(this.path.length - 2);
    }
    getCollectionPath() {
      return this.path.popLast();
    }
    isEqual(e) {
      return e !== null && F.comparator(this.path, e.path) === 0;
    }
    toString() {
      return this.path.toString();
    }
    static comparator(e, t) {
      return F.comparator(e.path, t.path);
    }
    static isDocumentKey(e) {
      return e.length % 2 == 0;
    }
    static fromSegments(t) {
      return new e(new F(t.slice()));
    }
  };
function br(e, t, n) {
  if (!n)
    throw new N(
      M.INVALID_ARGUMENT,
      `Function ${e}() cannot be called with an empty ${t}.`,
    );
}
function xr(e, t, n, r) {
  if (!0 === t && !0 === r)
    throw new N(M.INVALID_ARGUMENT, `${e} and ${n} cannot be used together.`);
}
function Sr(e) {
  if (!I.isDocumentKey(e))
    throw new N(
      M.INVALID_ARGUMENT,
      `Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`,
    );
}
function Cr(e) {
  if (I.isDocumentKey(e))
    throw new N(
      M.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`,
    );
}
function wr(e) {
  return (
    typeof e == `object` &&
    !!e &&
    (Object.getPrototypeOf(e) === Object.prototype ||
      Object.getPrototypeOf(e) === null)
  );
}
function Tr(e) {
  if (e === void 0) return `undefined`;
  if (e === null) return `null`;
  if (typeof e == `string`)
    return (
      e.length > 20 && (e = `${e.substring(0, 20)}...`),
      JSON.stringify(e)
    );
  if (typeof e == `number` || typeof e == `boolean`) return `` + e;
  if (typeof e == `object`) {
    if (e instanceof Array) return `an array`;
    {
      let t = (function (e) {
        return e.constructor ? e.constructor.name : null;
      })(e);
      return t ? `a custom ${t} object` : `an object`;
    }
  }
  return typeof e == `function` ? `a function` : k(12329, { type: typeof e });
}
function Er(e, t) {
  if ((`_delegate` in e && (e = e._delegate), !(e instanceof t))) {
    if (t.name === e.constructor.name)
      throw new N(
        M.INVALID_ARGUMENT,
        `Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?`,
      );
    {
      let n = Tr(e);
      throw new N(
        M.INVALID_ARGUMENT,
        `Expected type '${t.name}', but it was: ${n}`,
      );
    }
  }
  return e;
}
function L(e, t) {
  let n = { typeString: e };
  return (t && (n.value = t), n);
}
function Dr(e, t) {
  if (!wr(e)) throw new N(M.INVALID_ARGUMENT, `JSON must be an object`);
  let n;
  for (let r in t)
    if (t[r]) {
      let i = t[r].typeString,
        a = `value` in t[r] ? { value: t[r].value } : void 0;
      if (!(r in e)) {
        n = `JSON missing required field: '${r}'`;
        break;
      }
      let o = e[r];
      if (i && typeof o !== i) {
        n = `JSON field '${r}' must be a ${i}.`;
        break;
      }
      if (a !== void 0 && o !== a.value) {
        n = `Expected '${r}' field to equal '${a.value}'`;
        break;
      }
    }
  if (n) throw new N(M.INVALID_ARGUMENT, n);
  return !0;
}
var Or = -62135596800,
  kr = 1e6,
  R = class e {
    static now() {
      return e.fromMillis(Date.now());
    }
    static fromDate(t) {
      return e.fromMillis(t.getTime());
    }
    static fromMillis(t) {
      let n = Math.floor(t / 1e3);
      return new e(n, Math.floor((t - 1e3 * n) * kr));
    }
    constructor(e, t) {
      if (((this.seconds = e), (this.nanoseconds = t), t < 0 || t >= 1e9))
        throw new N(
          M.INVALID_ARGUMENT,
          `Timestamp nanoseconds out of range: ` + t,
        );
      if (e < Or || e >= 253402300800)
        throw new N(M.INVALID_ARGUMENT, `Timestamp seconds out of range: ` + e);
    }
    toDate() {
      return new Date(this.toMillis());
    }
    toMillis() {
      return 1e3 * this.seconds + this.nanoseconds / kr;
    }
    _compareTo(e) {
      return this.seconds === e.seconds
        ? P(this.nanoseconds, e.nanoseconds)
        : P(this.seconds, e.seconds);
    }
    isEqual(e) {
      return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
    }
    toString() {
      return (
        `Timestamp(seconds=` +
        this.seconds +
        `, nanoseconds=` +
        this.nanoseconds +
        `)`
      );
    }
    toJSON() {
      return {
        type: e._jsonSchemaVersion,
        seconds: this.seconds,
        nanoseconds: this.nanoseconds,
      };
    }
    static fromJSON(t) {
      if (Dr(t, e._jsonSchema)) return new e(t.seconds, t.nanoseconds);
    }
    valueOf() {
      let e = this.seconds - Or;
      return (
        String(e).padStart(12, `0`) +
        `.` +
        String(this.nanoseconds).padStart(9, `0`)
      );
    }
  };
((R._jsonSchemaVersion = `firestore/timestamp/1.0`),
  (R._jsonSchema = {
    type: L(`string`, R._jsonSchemaVersion),
    seconds: L(`number`),
    nanoseconds: L(`number`),
  }));
var z = class e {
    static fromTimestamp(t) {
      return new e(t);
    }
    static min() {
      return new e(new R(0, 0));
    }
    static max() {
      return new e(new R(253402300799, 999999999));
    }
    constructor(e) {
      this.timestamp = e;
    }
    compareTo(e) {
      return this.timestamp._compareTo(e.timestamp);
    }
    isEqual(e) {
      return this.timestamp.isEqual(e.timestamp);
    }
    toMicroseconds() {
      return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }
    toString() {
      return `SnapshotVersion(` + this.timestamp.toString() + `)`;
    }
    toTimestamp() {
      return this.timestamp;
    }
  },
  Ar = -1,
  jr = class {
    constructor(e, t, n, r) {
      ((this.indexId = e),
        (this.collectionGroup = t),
        (this.fields = n),
        (this.indexState = r));
    }
  };
jr.UNKNOWN_ID = -1;
function Mr(e, t) {
  let n = e.toTimestamp().seconds,
    r = e.toTimestamp().nanoseconds + 1;
  return new Pr(
    z.fromTimestamp(r === 1e9 ? new R(n + 1, 0) : new R(n, r)),
    I.empty(),
    t,
  );
}
function Nr(e) {
  return new Pr(e.readTime, e.key, Ar);
}
var Pr = class e {
  constructor(e, t, n) {
    ((this.readTime = e), (this.documentKey = t), (this.largestBatchId = n));
  }
  static min() {
    return new e(z.min(), I.empty(), Ar);
  }
  static max() {
    return new e(z.max(), I.empty(), Ar);
  }
};
function Fr(e, t) {
  let n = e.readTime.compareTo(t.readTime);
  return n === 0
    ? ((n = I.comparator(e.documentKey, t.documentKey)),
      n === 0 ? P(e.largestBatchId, t.largestBatchId) : n)
    : n;
}
var Ir = `The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.`,
  Lr = class {
    constructor() {
      this.onCommittedListeners = [];
    }
    addOnCommittedListener(e) {
      this.onCommittedListeners.push(e);
    }
    raiseOnCommittedEvent() {
      this.onCommittedListeners.forEach((e) => e());
    }
  };
function Rr(e) {
  return zr.apply(this, arguments);
}
function zr() {
  return (
    (zr = p(function* (e) {
      if (e.code !== M.FAILED_PRECONDITION || e.message !== Ir) throw e;
      O(`LocalStore`, `Unexpectedly lost primary lease`);
    })),
    zr.apply(this, arguments)
  );
}
var B = class e {
  constructor(e) {
    ((this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = void 0),
      (this.error = void 0),
      (this.isDone = !1),
      (this.callbackAttached = !1),
      e(
        (e) => {
          ((this.isDone = !0),
            (this.result = e),
            this.nextCallback && this.nextCallback(e));
        },
        (e) => {
          ((this.isDone = !0),
            (this.error = e),
            this.catchCallback && this.catchCallback(e));
        },
      ));
  }
  catch(e) {
    return this.next(void 0, e);
  }
  next(t, n) {
    return (
      this.callbackAttached && k(59440),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(n, this.error)
          : this.wrapSuccess(t, this.result)
        : new e((e, r) => {
            ((this.nextCallback = (n) => {
              this.wrapSuccess(t, n).next(e, r);
            }),
              (this.catchCallback = (t) => {
                this.wrapFailure(n, t).next(e, r);
              }));
          })
    );
  }
  toPromise() {
    return new Promise((e, t) => {
      this.next(e, t);
    });
  }
  wrapUserFunction(t) {
    try {
      let n = t();
      return n instanceof e ? n : e.resolve(n);
    } catch (t) {
      return e.reject(t);
    }
  }
  wrapSuccess(t, n) {
    return t ? this.wrapUserFunction(() => t(n)) : e.resolve(n);
  }
  wrapFailure(t, n) {
    return t ? this.wrapUserFunction(() => t(n)) : e.reject(n);
  }
  static resolve(t) {
    return new e((e, n) => {
      e(t);
    });
  }
  static reject(t) {
    return new e((e, n) => {
      n(t);
    });
  }
  static waitFor(t) {
    return new e((e, n) => {
      let r = 0,
        i = 0,
        a = !1;
      (t.forEach((t) => {
        (++r,
          t.next(
            () => {
              (++i, a && i === r && e());
            },
            (e) => n(e),
          ));
      }),
        (a = !0),
        i === r && e());
    });
  }
  static or(t) {
    let n = e.resolve(!1);
    for (let r of t) n = n.next((t) => (t ? e.resolve(t) : r()));
    return n;
  }
  static forEach(e, t) {
    let n = [];
    return (
      e.forEach((e, r) => {
        n.push(t.call(this, e, r));
      }),
      this.waitFor(n)
    );
  }
  static mapArray(t, n) {
    return new e((e, r) => {
      let i = t.length,
        a = Array(i),
        o = 0;
      for (let s = 0; s < i; s++) {
        let c = s;
        n(t[c]).next(
          (t) => {
            ((a[c] = t), ++o, o === i && e(a));
          },
          (e) => r(e),
        );
      }
    });
  }
  static doWhile(t, n) {
    return new e((e, r) => {
      let i = () => {
        !0 === t()
          ? n().next(() => {
              i();
            }, r)
          : e();
      };
      i();
    });
  }
};
function Br(e) {
  let t = e.match(/Android ([\d.]+)/i),
    n = t ? t[1].split(`.`).slice(0, 2).join(`.`) : `-1`;
  return Number(n);
}
function Vr(e) {
  return e.name === `IndexedDbTransactionError`;
}
var Hr = class {
  constructor(e, t) {
    ((this.previousValue = e),
      t &&
        ((t.sequenceNumberHandler = (e) => this.ae(e)),
        (this.ue = (e) => t.writeSequenceNumber(e))));
  }
  ae(e) {
    return (
      (this.previousValue = Math.max(e, this.previousValue)),
      this.previousValue
    );
  }
  next() {
    let e = ++this.previousValue;
    return (this.ue && this.ue(e), e);
  }
};
Hr.ce = -1;
var Ur = -1;
function Wr(e) {
  return e == null;
}
function Gr(e) {
  return e === 0 && 1 / e == -1 / 0;
}
function Kr(e) {
  return (
    typeof e == `number` &&
    Number.isInteger(e) &&
    !Gr(e) &&
    e <= 9007199254740991 &&
    e >= -9007199254740991
  );
}
var qr = ``;
function Jr(e) {
  let t = ``;
  for (let n = 0; n < e.length; n++)
    (t.length > 0 && (t = Xr(t)), (t = Yr(e.get(n), t)));
  return Xr(t);
}
function Yr(e, t) {
  let n = t,
    r = e.length;
  for (let t = 0; t < r; t++) {
    let r = e.charAt(t);
    switch (r) {
      case `\0`:
        n += ``;
        break;
      case qr:
        n += ``;
        break;
      default:
        n += r;
    }
  }
  return n;
}
function Xr(e) {
  return e + qr + ``;
}
function Zr(e) {
  let t = 0;
  for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t++;
  return t;
}
function Qr(e, t) {
  for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n]);
}
function $r(e) {
  for (let t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
var V = class e {
    constructor(e, t) {
      ((this.comparator = e), (this.root = t || ti.EMPTY));
    }
    insert(t, n) {
      return new e(
        this.comparator,
        this.root
          .insert(t, n, this.comparator)
          .copy(null, null, ti.BLACK, null, null),
      );
    }
    remove(t) {
      return new e(
        this.comparator,
        this.root
          .remove(t, this.comparator)
          .copy(null, null, ti.BLACK, null, null),
      );
    }
    get(e) {
      let t = this.root;
      for (; !t.isEmpty();) {
        let n = this.comparator(e, t.key);
        if (n === 0) return t.value;
        n < 0 ? (t = t.left) : n > 0 && (t = t.right);
      }
      return null;
    }
    indexOf(e) {
      let t = 0,
        n = this.root;
      for (; !n.isEmpty();) {
        let r = this.comparator(e, n.key);
        if (r === 0) return t + n.left.size;
        r < 0 ? (n = n.left) : ((t += n.left.size + 1), (n = n.right));
      }
      return -1;
    }
    isEmpty() {
      return this.root.isEmpty();
    }
    get size() {
      return this.root.size;
    }
    minKey() {
      return this.root.minKey();
    }
    maxKey() {
      return this.root.maxKey();
    }
    inorderTraversal(e) {
      return this.root.inorderTraversal(e);
    }
    forEach(e) {
      this.inorderTraversal((t, n) => (e(t, n), !1));
    }
    toString() {
      let e = [];
      return (
        this.inorderTraversal((t, n) => (e.push(`${t}:${n}`), !1)),
        `{${e.join(`, `)}}`
      );
    }
    reverseTraversal(e) {
      return this.root.reverseTraversal(e);
    }
    getIterator() {
      return new ei(this.root, null, this.comparator, !1);
    }
    getIteratorFrom(e) {
      return new ei(this.root, e, this.comparator, !1);
    }
    getReverseIterator() {
      return new ei(this.root, null, this.comparator, !0);
    }
    getReverseIteratorFrom(e) {
      return new ei(this.root, e, this.comparator, !0);
    }
  },
  ei = class {
    constructor(e, t, n, r) {
      ((this.isReverse = r), (this.nodeStack = []));
      let i = 1;
      for (; !e.isEmpty();)
        if (((i = t ? n(e.key, t) : 1), t && r && (i *= -1), i < 0))
          e = this.isReverse ? e.left : e.right;
        else {
          if (i === 0) {
            this.nodeStack.push(e);
            break;
          }
          (this.nodeStack.push(e), (e = this.isReverse ? e.right : e.left));
        }
    }
    getNext() {
      let e = this.nodeStack.pop(),
        t = { key: e.key, value: e.value };
      if (this.isReverse)
        for (e = e.left; !e.isEmpty();) (this.nodeStack.push(e), (e = e.right));
      else
        for (e = e.right; !e.isEmpty();) (this.nodeStack.push(e), (e = e.left));
      return t;
    }
    hasNext() {
      return this.nodeStack.length > 0;
    }
    peek() {
      if (this.nodeStack.length === 0) return null;
      let e = this.nodeStack[this.nodeStack.length - 1];
      return { key: e.key, value: e.value };
    }
  },
  ti = class e {
    constructor(t, n, r, i, a) {
      ((this.key = t),
        (this.value = n),
        (this.color = r == null ? e.RED : r),
        (this.left = i == null ? e.EMPTY : i),
        (this.right = a == null ? e.EMPTY : a),
        (this.size = this.left.size + 1 + this.right.size));
    }
    copy(t, n, r, i, a) {
      return new e(
        t == null ? this.key : t,
        n == null ? this.value : n,
        r == null ? this.color : r,
        i == null ? this.left : i,
        a == null ? this.right : a,
      );
    }
    isEmpty() {
      return !1;
    }
    inorderTraversal(e) {
      return (
        this.left.inorderTraversal(e) ||
        e(this.key, this.value) ||
        this.right.inorderTraversal(e)
      );
    }
    reverseTraversal(e) {
      return (
        this.right.reverseTraversal(e) ||
        e(this.key, this.value) ||
        this.left.reverseTraversal(e)
      );
    }
    min() {
      return this.left.isEmpty() ? this : this.left.min();
    }
    minKey() {
      return this.min().key;
    }
    maxKey() {
      return this.right.isEmpty() ? this.key : this.right.maxKey();
    }
    insert(e, t, n) {
      let r = this,
        i = n(e, r.key);
      return (
        (r =
          i < 0
            ? r.copy(null, null, null, r.left.insert(e, t, n), null)
            : i === 0
              ? r.copy(null, t, null, null, null)
              : r.copy(null, null, null, null, r.right.insert(e, t, n))),
        r.fixUp()
      );
    }
    removeMin() {
      if (this.left.isEmpty()) return e.EMPTY;
      let t = this;
      return (
        t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()),
        (t = t.copy(null, null, null, t.left.removeMin(), null)),
        t.fixUp()
      );
    }
    remove(t, n) {
      let r,
        i = this;
      if (n(t, i.key) < 0)
        (i.left.isEmpty() ||
          i.left.isRed() ||
          i.left.left.isRed() ||
          (i = i.moveRedLeft()),
          (i = i.copy(null, null, null, i.left.remove(t, n), null)));
      else {
        if (
          (i.left.isRed() && (i = i.rotateRight()),
          i.right.isEmpty() ||
            i.right.isRed() ||
            i.right.left.isRed() ||
            (i = i.moveRedRight()),
          n(t, i.key) === 0)
        ) {
          if (i.right.isEmpty()) return e.EMPTY;
          ((r = i.right.min()),
            (i = i.copy(r.key, r.value, null, null, i.right.removeMin())));
        }
        i = i.copy(null, null, null, null, i.right.remove(t, n));
      }
      return i.fixUp();
    }
    isRed() {
      return this.color;
    }
    fixUp() {
      let e = this;
      return (
        e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
        e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
        e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
        e
      );
    }
    moveRedLeft() {
      let e = this.colorFlip();
      return (
        e.right.left.isRed() &&
          ((e = e.copy(null, null, null, null, e.right.rotateRight())),
          (e = e.rotateLeft()),
          (e = e.colorFlip())),
        e
      );
    }
    moveRedRight() {
      let e = this.colorFlip();
      return (
        e.left.left.isRed() && ((e = e.rotateRight()), (e = e.colorFlip())),
        e
      );
    }
    rotateLeft() {
      let t = this.copy(null, null, e.RED, null, this.right.left);
      return this.right.copy(null, null, this.color, t, null);
    }
    rotateRight() {
      let t = this.copy(null, null, e.RED, this.left.right, null);
      return this.left.copy(null, null, this.color, null, t);
    }
    colorFlip() {
      let e = this.left.copy(null, null, !this.left.color, null, null),
        t = this.right.copy(null, null, !this.right.color, null, null);
      return this.copy(null, null, !this.color, e, t);
    }
    checkMaxDepth() {
      let e = this.check();
      return Math.pow(2, e) <= this.size + 1;
    }
    check() {
      if (this.isRed() && this.left.isRed())
        throw k(43730, { key: this.key, value: this.value });
      if (this.right.isRed())
        throw k(14113, { key: this.key, value: this.value });
      let e = this.left.check();
      if (e !== this.right.check()) throw k(27949);
      return e + +!this.isRed();
    }
  };
((ti.EMPTY = null),
  (ti.RED = !0),
  (ti.BLACK = !1),
  (ti.EMPTY = new (class {
    constructor() {
      this.size = 0;
    }
    get key() {
      throw k(57766);
    }
    get value() {
      throw k(16141);
    }
    get color() {
      throw k(16727);
    }
    get left() {
      throw k(29726);
    }
    get right() {
      throw k(36894);
    }
    copy(e, t, n, r, i) {
      return this;
    }
    insert(e, t, n) {
      return new ti(e, t);
    }
    remove(e, t) {
      return this;
    }
    isEmpty() {
      return !0;
    }
    inorderTraversal(e) {
      return !1;
    }
    reverseTraversal(e) {
      return !1;
    }
    minKey() {
      return null;
    }
    maxKey() {
      return null;
    }
    isRed() {
      return !1;
    }
    checkMaxDepth() {
      return !0;
    }
    check() {
      return 0;
    }
  })()));
var H = class e {
    constructor(e) {
      ((this.comparator = e), (this.data = new V(this.comparator)));
    }
    has(e) {
      return this.data.get(e) !== null;
    }
    first() {
      return this.data.minKey();
    }
    last() {
      return this.data.maxKey();
    }
    get size() {
      return this.data.size;
    }
    indexOf(e) {
      return this.data.indexOf(e);
    }
    forEach(e) {
      this.data.inorderTraversal((t, n) => (e(t), !1));
    }
    forEachInRange(e, t) {
      let n = this.data.getIteratorFrom(e[0]);
      for (; n.hasNext();) {
        let r = n.getNext();
        if (this.comparator(r.key, e[1]) >= 0) return;
        t(r.key);
      }
    }
    forEachWhile(e, t) {
      let n;
      for (
        n =
          t === void 0 ? this.data.getIterator() : this.data.getIteratorFrom(t);
        n.hasNext();
      )
        if (!e(n.getNext().key)) return;
    }
    firstAfterOrEqual(e) {
      let t = this.data.getIteratorFrom(e);
      return t.hasNext() ? t.getNext().key : null;
    }
    getIterator() {
      return new ni(this.data.getIterator());
    }
    getIteratorFrom(e) {
      return new ni(this.data.getIteratorFrom(e));
    }
    add(e) {
      return this.copy(this.data.remove(e).insert(e, !0));
    }
    delete(e) {
      return this.has(e) ? this.copy(this.data.remove(e)) : this;
    }
    isEmpty() {
      return this.data.isEmpty();
    }
    unionWith(e) {
      let t = this;
      return (
        t.size < e.size && ((t = e), (e = this)),
        e.forEach((e) => {
          t = t.add(e);
        }),
        t
      );
    }
    isEqual(t) {
      if (!(t instanceof e) || this.size !== t.size) return !1;
      let n = this.data.getIterator(),
        r = t.data.getIterator();
      for (; n.hasNext();) {
        let e = n.getNext().key,
          t = r.getNext().key;
        if (this.comparator(e, t) !== 0) return !1;
      }
      return !0;
    }
    toArray() {
      let e = [];
      return (
        this.forEach((t) => {
          e.push(t);
        }),
        e
      );
    }
    toString() {
      let e = [];
      return (
        this.forEach((t) => e.push(t)),
        `SortedSet(` + e.toString() + `)`
      );
    }
    copy(t) {
      let n = new e(this.comparator);
      return ((n.data = t), n);
    }
  },
  ni = class {
    constructor(e) {
      this.iter = e;
    }
    getNext() {
      return this.iter.getNext().key;
    }
    hasNext() {
      return this.iter.hasNext();
    }
  },
  ri = class e {
    constructor(e) {
      ((this.fields = e), e.sort(yr.comparator));
    }
    static empty() {
      return new e([]);
    }
    unionWith(t) {
      let n = new H(yr.comparator);
      for (let e of this.fields) n = n.add(e);
      for (let e of t) n = n.add(e);
      return new e(n.toArray());
    }
    covers(e) {
      for (let t of this.fields) if (t.isPrefixOf(e)) return !0;
      return !1;
    }
    isEqual(e) {
      return hr(this.fields, e.fields, (e, t) => e.isEqual(t));
    }
  },
  ii = class extends Error {
    constructor() {
      (super(...arguments), (this.name = `Base64DecodeError`));
    }
  },
  ai = class e {
    constructor(e) {
      this.binaryString = e;
    }
    static fromBase64String(t) {
      return new e(
        (function (e) {
          try {
            return atob(e);
          } catch (e) {
            throw typeof DOMException < `u` && e instanceof DOMException
              ? new ii(`Invalid base64 string: ` + e)
              : e;
          }
        })(t),
      );
    }
    static fromUint8Array(t) {
      return new e(
        (function (e) {
          let t = ``;
          for (let n = 0; n < e.length; ++n) t += String.fromCharCode(e[n]);
          return t;
        })(t),
      );
    }
    [Symbol.iterator]() {
      let e = 0;
      return {
        next: () =>
          e < this.binaryString.length
            ? { value: this.binaryString.charCodeAt(e++), done: !1 }
            : { value: void 0, done: !0 },
      };
    }
    toBase64() {
      return (function (e) {
        return btoa(e);
      })(this.binaryString);
    }
    toUint8Array() {
      return (function (e) {
        let t = new Uint8Array(e.length);
        for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
        return t;
      })(this.binaryString);
    }
    approximateByteSize() {
      return 2 * this.binaryString.length;
    }
    compareTo(e) {
      return P(this.binaryString, e.binaryString);
    }
    isEqual(e) {
      return this.binaryString === e.binaryString;
    }
  };
ai.EMPTY_BYTE_STRING = new ai(``);
var oi = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function si(e) {
  if ((A(!!e, 39018), typeof e == `string`)) {
    let t = 0,
      n = oi.exec(e);
    if ((A(!!n, 46558, { timestamp: e }), n[1])) {
      let e = n[1];
      ((e = (e + `000000000`).substr(0, 9)), (t = Number(e)));
    }
    let r = new Date(e);
    return { seconds: Math.floor(r.getTime() / 1e3), nanos: t };
  }
  return { seconds: U(e.seconds), nanos: U(e.nanos) };
}
function U(e) {
  return typeof e == `number` ? e : typeof e == `string` ? Number(e) : 0;
}
function ci(e) {
  return typeof e == `string` ? ai.fromBase64String(e) : ai.fromUint8Array(e);
}
var li = `server_timestamp`,
  ui = `__type__`,
  di = `__previous_value__`,
  fi = `__local_write_time__`;
function pi(e) {
  var t, n;
  return (
    ((t = ((e == null || (n = e.mapValue) == null ? void 0 : n.fields) || {})[
      ui
    ]) == null
      ? void 0
      : t.stringValue) === li
  );
}
function mi(e) {
  let t = e.mapValue.fields[di];
  return pi(t) ? mi(t) : t;
}
function hi(e) {
  let t = si(e.mapValue.fields[fi].timestampValue);
  return new R(t.seconds, t.nanos);
}
var gi = class {
    constructor(e, t, n, r, i, a, o, s, c, l, u) {
      ((this.databaseId = e),
        (this.appId = t),
        (this.persistenceKey = n),
        (this.host = r),
        (this.ssl = i),
        (this.forceLongPolling = a),
        (this.autoDetectLongPolling = o),
        (this.longPollingOptions = s),
        (this.useFetchStreams = c),
        (this.isUsingEmulator = l),
        (this.apiKey = u));
    }
  },
  _i = `(default)`,
  vi = class e {
    constructor(e, t) {
      ((this.projectId = e), (this.database = t || _i));
    }
    static empty() {
      return new e(``, ``);
    }
    get isDefaultDatabase() {
      return this.database === _i;
    }
    isEqual(t) {
      return (
        t instanceof e &&
        t.projectId === this.projectId &&
        t.database === this.database
      );
    }
  };
function yi(e, t) {
  if (!Object.prototype.hasOwnProperty.apply(e.options, [`projectId`]))
    throw new N(
      M.INVALID_ARGUMENT,
      `"projectId" not provided in firebase.initializeApp.`,
    );
  return new vi(e.options.projectId, t);
}
var bi = `__type__`,
  xi = `__max__`,
  Si = { mapValue: { fields: { __type__: { stringValue: xi } } } },
  Ci = `__vector__`,
  wi = `value`;
function Ti(e) {
  return `nullValue` in e
    ? 0
    : `booleanValue` in e
      ? 1
      : `integerValue` in e || `doubleValue` in e
        ? 2
        : `timestampValue` in e
          ? 3
          : `stringValue` in e
            ? 5
            : `bytesValue` in e
              ? 6
              : `referenceValue` in e
                ? 7
                : `geoPointValue` in e
                  ? 8
                  : `arrayValue` in e
                    ? 9
                    : `mapValue` in e
                      ? pi(e)
                        ? 4
                        : Hi(e)
                          ? 9007199254740991
                          : Bi(e)
                            ? 10
                            : 11
                      : k(28295, { value: e });
}
function Ei(e, t) {
  if (e === t) return !0;
  let n = Ti(e);
  if (n !== Ti(t)) return !1;
  switch (n) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return e.booleanValue === t.booleanValue;
    case 4:
      return hi(e).isEqual(hi(t));
    case 3:
      return (function (e, t) {
        if (
          typeof e.timestampValue == `string` &&
          typeof t.timestampValue == `string` &&
          e.timestampValue.length === t.timestampValue.length
        )
          return e.timestampValue === t.timestampValue;
        let n = si(e.timestampValue),
          r = si(t.timestampValue);
        return n.seconds === r.seconds && n.nanos === r.nanos;
      })(e, t);
    case 5:
      return e.stringValue === t.stringValue;
    case 6:
      return (function (e, t) {
        return ci(e.bytesValue).isEqual(ci(t.bytesValue));
      })(e, t);
    case 7:
      return e.referenceValue === t.referenceValue;
    case 8:
      return (function (e, t) {
        return (
          U(e.geoPointValue.latitude) === U(t.geoPointValue.latitude) &&
          U(e.geoPointValue.longitude) === U(t.geoPointValue.longitude)
        );
      })(e, t);
    case 2:
      return (function (e, t) {
        if (`integerValue` in e && `integerValue` in t)
          return U(e.integerValue) === U(t.integerValue);
        if (`doubleValue` in e && `doubleValue` in t) {
          let n = U(e.doubleValue),
            r = U(t.doubleValue);
          return n === r ? Gr(n) === Gr(r) : isNaN(n) && isNaN(r);
        }
        return !1;
      })(e, t);
    case 9:
      return hr(e.arrayValue.values || [], t.arrayValue.values || [], Ei);
    case 10:
    case 11:
      return (function (e, t) {
        let n = e.mapValue.fields || {},
          r = t.mapValue.fields || {};
        if (Zr(n) !== Zr(r)) return !1;
        for (let e in n)
          if (n.hasOwnProperty(e) && (r[e] === void 0 || !Ei(n[e], r[e])))
            return !1;
        return !0;
      })(e, t);
    default:
      return k(52216, { left: e });
  }
}
function Di(e, t) {
  return (e.values || []).find((e) => Ei(e, t)) !== void 0;
}
function Oi(e, t) {
  if (e === t) return 0;
  let n = Ti(e),
    r = Ti(t);
  if (n !== r) return P(n, r);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return P(e.booleanValue, t.booleanValue);
    case 2:
      return (function (e, t) {
        let n = U(e.integerValue || e.doubleValue),
          r = U(t.integerValue || t.doubleValue);
        return n < r
          ? -1
          : n > r
            ? 1
            : n === r
              ? 0
              : isNaN(n)
                ? isNaN(r)
                  ? 0
                  : -1
                : 1;
      })(e, t);
    case 3:
      return ki(e.timestampValue, t.timestampValue);
    case 4:
      return ki(hi(e), hi(t));
    case 5:
      return dr(e.stringValue, t.stringValue);
    case 6:
      return (function (e, t) {
        let n = ci(e),
          r = ci(t);
        return n.compareTo(r);
      })(e.bytesValue, t.bytesValue);
    case 7:
      return (function (e, t) {
        let n = e.split(`/`),
          r = t.split(`/`);
        for (let e = 0; e < n.length && e < r.length; e++) {
          let t = P(n[e], r[e]);
          if (t !== 0) return t;
        }
        return P(n.length, r.length);
      })(e.referenceValue, t.referenceValue);
    case 8:
      return (function (e, t) {
        let n = P(U(e.latitude), U(t.latitude));
        return n === 0 ? P(U(e.longitude), U(t.longitude)) : n;
      })(e.geoPointValue, t.geoPointValue);
    case 9:
      return Ai(e.arrayValue, t.arrayValue);
    case 10:
      return (function (e, t) {
        var n, r, i, a;
        let o = e.fields || {},
          s = t.fields || {},
          c = (n = o[wi]) == null ? void 0 : n.arrayValue,
          l = (r = s[wi]) == null ? void 0 : r.arrayValue,
          u = P(
            (c == null || (i = c.values) == null ? void 0 : i.length) || 0,
            (l == null || (a = l.values) == null ? void 0 : a.length) || 0,
          );
        return u === 0 ? Ai(c, l) : u;
      })(e.mapValue, t.mapValue);
    case 11:
      return (function (e, t) {
        if (e === Si.mapValue && t === Si.mapValue) return 0;
        if (e === Si.mapValue) return 1;
        if (t === Si.mapValue) return -1;
        let n = e.fields || {},
          r = Object.keys(n),
          i = t.fields || {},
          a = Object.keys(i);
        (r.sort(), a.sort());
        for (let e = 0; e < r.length && e < a.length; ++e) {
          let t = dr(r[e], a[e]);
          if (t !== 0) return t;
          let o = Oi(n[r[e]], i[a[e]]);
          if (o !== 0) return o;
        }
        return P(r.length, a.length);
      })(e.mapValue, t.mapValue);
    default:
      throw k(23264, { he: n });
  }
}
function ki(e, t) {
  if (typeof e == `string` && typeof t == `string` && e.length === t.length)
    return P(e, t);
  let n = si(e),
    r = si(t),
    i = P(n.seconds, r.seconds);
  return i === 0 ? P(n.nanos, r.nanos) : i;
}
function Ai(e, t) {
  let n = e.values || [],
    r = t.values || [];
  for (let e = 0; e < n.length && e < r.length; ++e) {
    let t = Oi(n[e], r[e]);
    if (t) return t;
  }
  return P(n.length, r.length);
}
function ji(e) {
  return Mi(e);
}
function Mi(e) {
  return `nullValue` in e
    ? `null`
    : `booleanValue` in e
      ? `` + e.booleanValue
      : `integerValue` in e
        ? `` + e.integerValue
        : `doubleValue` in e
          ? `` + e.doubleValue
          : `timestampValue` in e
            ? (function (e) {
                let t = si(e);
                return `time(${t.seconds},${t.nanos})`;
              })(e.timestampValue)
            : `stringValue` in e
              ? e.stringValue
              : `bytesValue` in e
                ? (function (e) {
                    return ci(e).toBase64();
                  })(e.bytesValue)
                : `referenceValue` in e
                  ? (function (e) {
                      return I.fromName(e).toString();
                    })(e.referenceValue)
                  : `geoPointValue` in e
                    ? (function (e) {
                        return `geo(${e.latitude},${e.longitude})`;
                      })(e.geoPointValue)
                    : `arrayValue` in e
                      ? (function (e) {
                          let t = `[`,
                            n = !0;
                          for (let r of e.values || [])
                            (n ? (n = !1) : (t += `,`), (t += Mi(r)));
                          return t + `]`;
                        })(e.arrayValue)
                      : `mapValue` in e
                        ? (function (e) {
                            let t = Object.keys(e.fields || {}).sort(),
                              n = `{`,
                              r = !0;
                            for (let i of t)
                              (r ? (r = !1) : (n += `,`),
                                (n += `${i}:${Mi(e.fields[i])}`));
                            return n + `}`;
                          })(e.mapValue)
                        : k(61005, { value: e });
}
function Ni(e) {
  switch (Ti(e)) {
    case 0:
    case 1:
      return 4;
    case 2:
      return 8;
    case 3:
    case 8:
      return 16;
    case 4:
      let t = mi(e);
      return t ? 16 + Ni(t) : 16;
    case 5:
      return 2 * e.stringValue.length;
    case 6:
      return ci(e.bytesValue).approximateByteSize();
    case 7:
      return e.referenceValue.length;
    case 9:
      return (function (e) {
        return (e.values || []).reduce((e, t) => e + Ni(t), 0);
      })(e.arrayValue);
    case 10:
    case 11:
      return (function (e) {
        let t = 0;
        return (
          Qr(e.fields, (e, n) => {
            t += e.length + Ni(n);
          }),
          t
        );
      })(e.mapValue);
    default:
      throw k(13486, { value: e });
  }
}
function Pi(e, t) {
  return {
    referenceValue: `projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`,
  };
}
function Fi(e) {
  return !!e && `integerValue` in e;
}
function Ii(e) {
  return !!e && `arrayValue` in e;
}
function Li(e) {
  return !!e && `nullValue` in e;
}
function Ri(e) {
  return !!e && `doubleValue` in e && isNaN(Number(e.doubleValue));
}
function zi(e) {
  return !!e && `mapValue` in e;
}
function Bi(e) {
  var t, n;
  return (
    ((t = ((e == null || (n = e.mapValue) == null ? void 0 : n.fields) || {})[
      bi
    ]) == null
      ? void 0
      : t.stringValue) === Ci
  );
}
function Vi(e) {
  if (e.geoPointValue) return { geoPointValue: u({}, e.geoPointValue) };
  if (e.timestampValue && typeof e.timestampValue == `object`)
    return { timestampValue: u({}, e.timestampValue) };
  if (e.mapValue) {
    let t = { mapValue: { fields: {} } };
    return (Qr(e.mapValue.fields, (e, n) => (t.mapValue.fields[e] = Vi(n))), t);
  }
  if (e.arrayValue) {
    let t = { arrayValue: { values: [] } };
    for (let n = 0; n < (e.arrayValue.values || []).length; ++n)
      t.arrayValue.values[n] = Vi(e.arrayValue.values[n]);
    return t;
  }
  return u({}, e);
}
function Hi(e) {
  return (((e.mapValue || {}).fields || {}).__type__ || {}).stringValue === xi;
}
var Ui = class e {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new e({ mapValue: {} });
  }
  field(e) {
    if (e.isEmpty()) return this.value;
    {
      let t = this.value;
      for (let n = 0; n < e.length - 1; ++n)
        if (((t = (t.mapValue.fields || {})[e.get(n)]), !zi(t))) return null;
      return ((t = (t.mapValue.fields || {})[e.lastSegment()]), t || null);
    }
  }
  set(e, t) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = Vi(t);
  }
  setAll(e) {
    let t = yr.emptyPath(),
      n = {},
      r = [];
    e.forEach((e, i) => {
      if (!t.isImmediateParentOf(i)) {
        let e = this.getFieldsMap(t);
        (this.applyChanges(e, n, r), (n = {}), (r = []), (t = i.popLast()));
      }
      e ? (n[i.lastSegment()] = Vi(e)) : r.push(i.lastSegment());
    });
    let i = this.getFieldsMap(t);
    this.applyChanges(i, n, r);
  }
  delete(e) {
    let t = this.field(e.popLast());
    zi(t) && t.mapValue.fields && delete t.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return Ei(this.value, e.value);
  }
  getFieldsMap(e) {
    let t = this.value;
    t.mapValue.fields || (t.mapValue = { fields: {} });
    for (let n = 0; n < e.length; ++n) {
      let r = t.mapValue.fields[e.get(n)];
      ((zi(r) && r.mapValue.fields) ||
        ((r = { mapValue: { fields: {} } }), (t.mapValue.fields[e.get(n)] = r)),
        (t = r));
    }
    return t.mapValue.fields;
  }
  applyChanges(e, t, n) {
    Qr(t, (t, n) => (e[t] = n));
    for (let t of n) delete e[t];
  }
  clone() {
    return new e(Vi(this.value));
  }
};
function Wi(e) {
  let t = [];
  return (
    Qr(e.fields, (e, n) => {
      let r = new yr([e]);
      if (zi(n)) {
        let e = Wi(n.mapValue).fields;
        if (e.length === 0) t.push(r);
        else for (let n of e) t.push(r.child(n));
      } else t.push(r);
    }),
    new ri(t)
  );
}
var Gi = class e {
    constructor(e, t, n, r, i, a, o) {
      ((this.key = e),
        (this.documentType = t),
        (this.version = n),
        (this.readTime = r),
        (this.createTime = i),
        (this.data = a),
        (this.documentState = o));
    }
    static newInvalidDocument(t) {
      return new e(t, 0, z.min(), z.min(), z.min(), Ui.empty(), 0);
    }
    static newFoundDocument(t, n, r, i) {
      return new e(t, 1, n, z.min(), r, i, 0);
    }
    static newNoDocument(t, n) {
      return new e(t, 2, n, z.min(), z.min(), Ui.empty(), 0);
    }
    static newUnknownDocument(t, n) {
      return new e(t, 3, n, z.min(), z.min(), Ui.empty(), 2);
    }
    convertToFoundDocument(e, t) {
      return (
        !this.createTime.isEqual(z.min()) ||
          (this.documentType !== 2 && this.documentType !== 0) ||
          (this.createTime = e),
        (this.version = e),
        (this.documentType = 1),
        (this.data = t),
        (this.documentState = 0),
        this
      );
    }
    convertToNoDocument(e) {
      return (
        (this.version = e),
        (this.documentType = 2),
        (this.data = Ui.empty()),
        (this.documentState = 0),
        this
      );
    }
    convertToUnknownDocument(e) {
      return (
        (this.version = e),
        (this.documentType = 3),
        (this.data = Ui.empty()),
        (this.documentState = 2),
        this
      );
    }
    setHasCommittedMutations() {
      return ((this.documentState = 2), this);
    }
    setHasLocalMutations() {
      return ((this.documentState = 1), (this.version = z.min()), this);
    }
    setReadTime(e) {
      return ((this.readTime = e), this);
    }
    get hasLocalMutations() {
      return this.documentState === 1;
    }
    get hasCommittedMutations() {
      return this.documentState === 2;
    }
    get hasPendingWrites() {
      return this.hasLocalMutations || this.hasCommittedMutations;
    }
    isValidDocument() {
      return this.documentType !== 0;
    }
    isFoundDocument() {
      return this.documentType === 1;
    }
    isNoDocument() {
      return this.documentType === 2;
    }
    isUnknownDocument() {
      return this.documentType === 3;
    }
    isEqual(t) {
      return (
        t instanceof e &&
        this.key.isEqual(t.key) &&
        this.version.isEqual(t.version) &&
        this.documentType === t.documentType &&
        this.documentState === t.documentState &&
        this.data.isEqual(t.data)
      );
    }
    mutableCopy() {
      return new e(
        this.key,
        this.documentType,
        this.version,
        this.readTime,
        this.createTime,
        this.data.clone(),
        this.documentState,
      );
    }
    toString() {
      return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
    }
  },
  Ki = class {
    constructor(e, t) {
      ((this.position = e), (this.inclusive = t));
    }
  };
function qi(e, t, n) {
  let r = 0;
  for (let i = 0; i < e.position.length; i++) {
    let a = t[i],
      o = e.position[i];
    if (
      ((r = a.field.isKeyField()
        ? I.comparator(I.fromName(o.referenceValue), n.key)
        : Oi(o, n.data.field(a.field))),
      a.dir === `desc` && (r *= -1),
      r !== 0)
    )
      break;
  }
  return r;
}
function Ji(e, t) {
  if (e === null) return t === null;
  if (
    t === null ||
    e.inclusive !== t.inclusive ||
    e.position.length !== t.position.length
  )
    return !1;
  for (let n = 0; n < e.position.length; n++)
    if (!Ei(e.position[n], t.position[n])) return !1;
  return !0;
}
var Yi = class {
  constructor(e, t = `asc`) {
    ((this.field = e), (this.dir = t));
  }
};
function Xi(e, t) {
  return e.dir === t.dir && e.field.isEqual(t.field);
}
var Zi = class {},
  W = class e extends Zi {
    constructor(e, t, n) {
      (super(), (this.field = e), (this.op = t), (this.value = n));
    }
    static create(t, n, r) {
      return t.isKeyField()
        ? n === `in` || n === `not-in`
          ? this.createKeyFieldInFilter(t, n, r)
          : new aa(t, n, r)
        : n === `array-contains`
          ? new la(t, r)
          : n === `in`
            ? new ua(t, r)
            : n === `not-in`
              ? new da(t, r)
              : n === `array-contains-any`
                ? new fa(t, r)
                : new e(t, n, r);
    }
    static createKeyFieldInFilter(e, t, n) {
      return t === `in` ? new oa(e, n) : new sa(e, n);
    }
    matches(e) {
      let t = e.data.field(this.field);
      return this.op === `!=`
        ? t !== null &&
            t.nullValue === void 0 &&
            this.matchesComparison(Oi(t, this.value))
        : t !== null &&
            Ti(this.value) === Ti(t) &&
            this.matchesComparison(Oi(t, this.value));
    }
    matchesComparison(e) {
      switch (this.op) {
        case `<`:
          return e < 0;
        case `<=`:
          return e <= 0;
        case `==`:
          return e === 0;
        case `!=`:
          return e !== 0;
        case `>`:
          return e > 0;
        case `>=`:
          return e >= 0;
        default:
          return k(47266, { operator: this.op });
      }
    }
    isInequality() {
      return [`<`, `<=`, `>`, `>=`, `!=`, `not-in`].indexOf(this.op) >= 0;
    }
    getFlattenedFilters() {
      return [this];
    }
    getFilters() {
      return [this];
    }
  },
  Qi = class e extends Zi {
    constructor(e, t) {
      (super(), (this.filters = e), (this.op = t), (this.Pe = null));
    }
    static create(t, n) {
      return new e(t, n);
    }
    matches(e) {
      return $i(this)
        ? this.filters.find((t) => !t.matches(e)) === void 0
        : this.filters.find((t) => t.matches(e)) !== void 0;
    }
    getFlattenedFilters() {
      return (
        this.Pe !== null ||
          (this.Pe = this.filters.reduce(
            (e, t) => e.concat(t.getFlattenedFilters()),
            [],
          )),
        this.Pe
      );
    }
    getFilters() {
      return Object.assign([], this.filters);
    }
  };
function $i(e) {
  return e.op === `and`;
}
function ea(e) {
  return ta(e) && $i(e);
}
function ta(e) {
  for (let t of e.filters) if (t instanceof Qi) return !1;
  return !0;
}
function na(e) {
  if (e instanceof W)
    return e.field.canonicalString() + e.op.toString() + ji(e.value);
  if (ea(e)) return e.filters.map((e) => na(e)).join(`,`);
  {
    let t = e.filters.map((e) => na(e)).join(`,`);
    return `${e.op}(${t})`;
  }
}
function ra(e, t) {
  return e instanceof W
    ? (function (e, t) {
        return (
          t instanceof W &&
          e.op === t.op &&
          e.field.isEqual(t.field) &&
          Ei(e.value, t.value)
        );
      })(e, t)
    : e instanceof Qi
      ? (function (e, t) {
          return t instanceof Qi &&
            e.op === t.op &&
            e.filters.length === t.filters.length
            ? e.filters.reduce((e, n, r) => e && ra(n, t.filters[r]), !0)
            : !1;
        })(e, t)
      : void k(19439);
}
function ia(e) {
  return e instanceof W
    ? (function (e) {
        return `${e.field.canonicalString()} ${e.op} ${ji(e.value)}`;
      })(e)
    : e instanceof Qi
      ? (function (e) {
          return (
            e.op.toString() + ` {` + e.getFilters().map(ia).join(` ,`) + `}`
          );
        })(e)
      : `Filter`;
}
var aa = class extends W {
    constructor(e, t, n) {
      (super(e, t, n), (this.key = I.fromName(n.referenceValue)));
    }
    matches(e) {
      let t = I.comparator(e.key, this.key);
      return this.matchesComparison(t);
    }
  },
  oa = class extends W {
    constructor(e, t) {
      (super(e, `in`, t), (this.keys = ca(`in`, t)));
    }
    matches(e) {
      return this.keys.some((t) => t.isEqual(e.key));
    }
  },
  sa = class extends W {
    constructor(e, t) {
      (super(e, `not-in`, t), (this.keys = ca(`not-in`, t)));
    }
    matches(e) {
      return !this.keys.some((t) => t.isEqual(e.key));
    }
  };
function ca(e, t) {
  var n;
  return (((n = t.arrayValue) == null ? void 0 : n.values) || []).map((e) =>
    I.fromName(e.referenceValue),
  );
}
var la = class extends W {
    constructor(e, t) {
      super(e, `array-contains`, t);
    }
    matches(e) {
      let t = e.data.field(this.field);
      return Ii(t) && Di(t.arrayValue, this.value);
    }
  },
  ua = class extends W {
    constructor(e, t) {
      super(e, `in`, t);
    }
    matches(e) {
      let t = e.data.field(this.field);
      return t !== null && Di(this.value.arrayValue, t);
    }
  },
  da = class extends W {
    constructor(e, t) {
      super(e, `not-in`, t);
    }
    matches(e) {
      if (Di(this.value.arrayValue, { nullValue: `NULL_VALUE` })) return !1;
      let t = e.data.field(this.field);
      return (
        t !== null && t.nullValue === void 0 && !Di(this.value.arrayValue, t)
      );
    }
  },
  fa = class extends W {
    constructor(e, t) {
      super(e, `array-contains-any`, t);
    }
    matches(e) {
      let t = e.data.field(this.field);
      return (
        !(!Ii(t) || !t.arrayValue.values) &&
        t.arrayValue.values.some((e) => Di(this.value.arrayValue, e))
      );
    }
  },
  pa = class {
    constructor(e, t = null, n = [], r = [], i = null, a = null, o = null) {
      ((this.path = e),
        (this.collectionGroup = t),
        (this.orderBy = n),
        (this.filters = r),
        (this.limit = i),
        (this.startAt = a),
        (this.endAt = o),
        (this.Te = null));
    }
  };
function ma(e, t = null, n = [], r = [], i = null, a = null, o = null) {
  return new pa(e, t, n, r, i, a, o);
}
function ha(e) {
  let t = j(e);
  if (t.Te === null) {
    let e = t.path.canonicalString();
    (t.collectionGroup !== null && (e += `|cg:` + t.collectionGroup),
      (e += `|f:`),
      (e += t.filters.map((e) => na(e)).join(`,`)),
      (e += `|ob:`),
      (e += t.orderBy
        .map((e) =>
          (function (e) {
            return e.field.canonicalString() + e.dir;
          })(e),
        )
        .join(`,`)),
      Wr(t.limit) || ((e += `|l:`), (e += t.limit)),
      t.startAt &&
        ((e += `|lb:`),
        (e += t.startAt.inclusive ? `b:` : `a:`),
        (e += t.startAt.position.map((e) => ji(e)).join(`,`))),
      t.endAt &&
        ((e += `|ub:`),
        (e += t.endAt.inclusive ? `a:` : `b:`),
        (e += t.endAt.position.map((e) => ji(e)).join(`,`))),
      (t.Te = e));
  }
  return t.Te;
}
function ga(e, t) {
  if (e.limit !== t.limit || e.orderBy.length !== t.orderBy.length) return !1;
  for (let n = 0; n < e.orderBy.length; n++)
    if (!Xi(e.orderBy[n], t.orderBy[n])) return !1;
  if (e.filters.length !== t.filters.length) return !1;
  for (let n = 0; n < e.filters.length; n++)
    if (!ra(e.filters[n], t.filters[n])) return !1;
  return (
    e.collectionGroup === t.collectionGroup &&
    !!e.path.isEqual(t.path) &&
    !!Ji(e.startAt, t.startAt) &&
    Ji(e.endAt, t.endAt)
  );
}
function _a(e) {
  return (
    I.isDocumentKey(e.path) &&
    e.collectionGroup === null &&
    e.filters.length === 0
  );
}
var va = class {
  constructor(
    e,
    t = null,
    n = [],
    r = [],
    i = null,
    a = `F`,
    o = null,
    s = null,
  ) {
    ((this.path = e),
      (this.collectionGroup = t),
      (this.explicitOrderBy = n),
      (this.filters = r),
      (this.limit = i),
      (this.limitType = a),
      (this.startAt = o),
      (this.endAt = s),
      (this.Ee = null),
      (this.Ie = null),
      (this.Re = null),
      this.startAt,
      this.endAt);
  }
};
function ya(e, t, n, r, i, a, o, s) {
  return new va(e, t, n, r, i, a, o, s);
}
function ba(e) {
  return new va(e);
}
function xa(e) {
  return (
    e.filters.length === 0 &&
    e.limit === null &&
    e.startAt == null &&
    e.endAt == null &&
    (e.explicitOrderBy.length === 0 ||
      (e.explicitOrderBy.length === 1 &&
        e.explicitOrderBy[0].field.isKeyField()))
  );
}
function Sa(e) {
  return (
    I.isDocumentKey(e.path) &&
    e.collectionGroup === null &&
    e.filters.length === 0
  );
}
function Ca(e) {
  return e.collectionGroup !== null;
}
function wa(e) {
  let t = j(e);
  if (t.Ee === null) {
    t.Ee = [];
    let e = new Set();
    for (let n of t.explicitOrderBy)
      (t.Ee.push(n), e.add(n.field.canonicalString()));
    let n =
      t.explicitOrderBy.length > 0
        ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir
        : `asc`;
    ((function (e) {
      let t = new H(yr.comparator);
      return (
        e.filters.forEach((e) => {
          e.getFlattenedFilters().forEach((e) => {
            e.isInequality() && (t = t.add(e.field));
          });
        }),
        t
      );
    })(t).forEach((r) => {
      e.has(r.canonicalString()) || r.isKeyField() || t.Ee.push(new Yi(r, n));
    }),
      e.has(yr.keyField().canonicalString()) ||
        t.Ee.push(new Yi(yr.keyField(), n)));
  }
  return t.Ee;
}
function Ta(e) {
  let t = j(e);
  return (t.Ie || (t.Ie = Ea(t, wa(e))), t.Ie);
}
function Ea(e, t) {
  if (e.limitType === `F`)
    return ma(
      e.path,
      e.collectionGroup,
      t,
      e.filters,
      e.limit,
      e.startAt,
      e.endAt,
    );
  {
    t = t.map((e) => {
      let t = e.dir === `desc` ? `asc` : `desc`;
      return new Yi(e.field, t);
    });
    let n = e.endAt ? new Ki(e.endAt.position, e.endAt.inclusive) : null,
      r = e.startAt ? new Ki(e.startAt.position, e.startAt.inclusive) : null;
    return ma(e.path, e.collectionGroup, t, e.filters, e.limit, n, r);
  }
}
function Da(e, t) {
  let n = e.filters.concat([t]);
  return new va(
    e.path,
    e.collectionGroup,
    e.explicitOrderBy.slice(),
    n,
    e.limit,
    e.limitType,
    e.startAt,
    e.endAt,
  );
}
function Oa(e, t) {
  let n = e.explicitOrderBy.concat([t]);
  return new va(
    e.path,
    e.collectionGroup,
    n,
    e.filters.slice(),
    e.limit,
    e.limitType,
    e.startAt,
    e.endAt,
  );
}
function ka(e, t, n) {
  return new va(
    e.path,
    e.collectionGroup,
    e.explicitOrderBy.slice(),
    e.filters.slice(),
    t,
    n,
    e.startAt,
    e.endAt,
  );
}
function Aa(e, t) {
  return ga(Ta(e), Ta(t)) && e.limitType === t.limitType;
}
function ja(e) {
  return `${ha(Ta(e))}|lt:${e.limitType}`;
}
function Ma(e) {
  return `Query(target=${(function (e) {
    let t = e.path.canonicalString();
    return (
      e.collectionGroup !== null &&
        (t += ` collectionGroup=` + e.collectionGroup),
      e.filters.length > 0 &&
        (t += `, filters: [${e.filters.map((e) => ia(e)).join(`, `)}]`),
      Wr(e.limit) || (t += `, limit: ` + e.limit),
      e.orderBy.length > 0 &&
        (t += `, orderBy: [${e.orderBy
          .map((e) =>
            (function (e) {
              return `${e.field.canonicalString()} (${e.dir})`;
            })(e),
          )
          .join(`, `)}]`),
      e.startAt &&
        ((t += `, startAt: `),
        (t += e.startAt.inclusive ? `b:` : `a:`),
        (t += e.startAt.position.map((e) => ji(e)).join(`,`))),
      e.endAt &&
        ((t += `, endAt: `),
        (t += e.endAt.inclusive ? `a:` : `b:`),
        (t += e.endAt.position.map((e) => ji(e)).join(`,`))),
      `Target(${t})`
    );
  })(Ta(e))}; limitType=${e.limitType})`;
}
function Na(e, t) {
  return (
    t.isFoundDocument() &&
    (function (e, t) {
      let n = t.key.path;
      return e.collectionGroup === null
        ? I.isDocumentKey(e.path)
          ? e.path.isEqual(n)
          : e.path.isImmediateParentOf(n)
        : t.key.hasCollectionId(e.collectionGroup) && e.path.isPrefixOf(n);
    })(e, t) &&
    (function (e, t) {
      for (let n of wa(e))
        if (!n.field.isKeyField() && t.data.field(n.field) === null) return !1;
      return !0;
    })(e, t) &&
    (function (e, t) {
      for (let n of e.filters) if (!n.matches(t)) return !1;
      return !0;
    })(e, t) &&
    (function (e, t) {
      return !(
        (e.startAt &&
          !(function (e, t, n) {
            let r = qi(e, t, n);
            return e.inclusive ? r <= 0 : r < 0;
          })(e.startAt, wa(e), t)) ||
        (e.endAt &&
          !(function (e, t, n) {
            let r = qi(e, t, n);
            return e.inclusive ? r >= 0 : r > 0;
          })(e.endAt, wa(e), t))
      );
    })(e, t)
  );
}
function Pa(e) {
  return (
    e.collectionGroup ||
    (e.path.length % 2 == 1
      ? e.path.lastSegment()
      : e.path.get(e.path.length - 2))
  );
}
function Fa(e) {
  return (t, n) => {
    let r = !1;
    for (let i of wa(e)) {
      let e = Ia(i, t, n);
      if (e !== 0) return e;
      r = r || i.field.isKeyField();
    }
    return 0;
  };
}
function Ia(e, t, n) {
  let r = e.field.isKeyField()
    ? I.comparator(t.key, n.key)
    : (function (e, t, n) {
        let r = t.data.field(e),
          i = n.data.field(e);
        return r !== null && i !== null ? Oi(r, i) : k(42886);
      })(e.field, t, n);
  switch (e.dir) {
    case `asc`:
      return r;
    case `desc`:
      return -1 * r;
    default:
      return k(19790, { direction: e.dir });
  }
}
var La = class {
    constructor(e, t) {
      ((this.mapKeyFn = e),
        (this.equalsFn = t),
        (this.inner = {}),
        (this.innerSize = 0));
    }
    get(e) {
      let t = this.mapKeyFn(e),
        n = this.inner[t];
      if (n !== void 0) {
        for (let [t, r] of n) if (this.equalsFn(t, e)) return r;
      }
    }
    has(e) {
      return this.get(e) !== void 0;
    }
    set(e, t) {
      let n = this.mapKeyFn(e),
        r = this.inner[n];
      if (r === void 0)
        return ((this.inner[n] = [[e, t]]), void this.innerSize++);
      for (let n = 0; n < r.length; n++)
        if (this.equalsFn(r[n][0], e)) return void (r[n] = [e, t]);
      (r.push([e, t]), this.innerSize++);
    }
    delete(e) {
      let t = this.mapKeyFn(e),
        n = this.inner[t];
      if (n === void 0) return !1;
      for (let r = 0; r < n.length; r++)
        if (this.equalsFn(n[r][0], e))
          return (
            n.length === 1 ? delete this.inner[t] : n.splice(r, 1),
            this.innerSize--,
            !0
          );
      return !1;
    }
    forEach(e) {
      Qr(this.inner, (t, n) => {
        for (let [t, r] of n) e(t, r);
      });
    }
    isEmpty() {
      return $r(this.inner);
    }
    size() {
      return this.innerSize;
    }
  },
  Ra = new V(I.comparator);
function za() {
  return Ra;
}
var Ba = new V(I.comparator);
function Va(...e) {
  let t = Ba;
  for (let n of e) t = t.insert(n.key, n);
  return t;
}
function Ha(e) {
  let t = Ba;
  return (e.forEach((e, n) => (t = t.insert(e, n.overlayedDocument))), t);
}
function Ua() {
  return Ga();
}
function Wa() {
  return Ga();
}
function Ga() {
  return new La(
    (e) => e.toString(),
    (e, t) => e.isEqual(t),
  );
}
var Ka = new V(I.comparator),
  qa = new H(I.comparator);
function G(...e) {
  let t = qa;
  for (let n of e) t = t.add(n);
  return t;
}
var Ja = new H(P);
function Ya() {
  return Ja;
}
function Xa(e, t) {
  if (e.useProto3Json) {
    if (isNaN(t)) return { doubleValue: `NaN` };
    if (t === 1 / 0) return { doubleValue: `Infinity` };
    if (t === -1 / 0) return { doubleValue: `-Infinity` };
  }
  return { doubleValue: Gr(t) ? `-0` : t };
}
function Za(e) {
  return { integerValue: `` + e };
}
function Qa(e, t) {
  return Kr(t) ? Za(t) : Xa(e, t);
}
var $a = class {
  constructor() {
    this._ = void 0;
  }
};
function eo(e, t, n) {
  return e instanceof ro
    ? (function (e, t) {
        let n = {
          fields: {
            [ui]: { stringValue: li },
            [fi]: {
              timestampValue: { seconds: e.seconds, nanos: e.nanoseconds },
            },
          },
        };
        return (
          t && pi(t) && (t = mi(t)),
          t && (n.fields[di] = t),
          { mapValue: n }
        );
      })(n, t)
    : e instanceof io
      ? ao(e, t)
      : e instanceof oo
        ? so(e, t)
        : (function (e, t) {
            let n = no(e, t),
              r = lo(n) + lo(e.Ae);
            return Fi(n) && Fi(e.Ae) ? Za(r) : Xa(e.serializer, r);
          })(e, t);
}
function to(e, t, n) {
  return e instanceof io ? ao(e, t) : e instanceof oo ? so(e, t) : n;
}
function no(e, t) {
  return e instanceof co
    ? (function (e) {
        return (
          Fi(e) ||
          (function (e) {
            return !!e && `doubleValue` in e;
          })(e)
        );
      })(t)
      ? t
      : { integerValue: 0 }
    : null;
}
var ro = class extends $a {},
  io = class extends $a {
    constructor(e) {
      (super(), (this.elements = e));
    }
  };
function ao(e, t) {
  let n = uo(t);
  for (let t of e.elements) n.some((e) => Ei(e, t)) || n.push(t);
  return { arrayValue: { values: n } };
}
var oo = class extends $a {
  constructor(e) {
    (super(), (this.elements = e));
  }
};
function so(e, t) {
  let n = uo(t);
  for (let t of e.elements) n = n.filter((e) => !Ei(e, t));
  return { arrayValue: { values: n } };
}
var co = class extends $a {
  constructor(e, t) {
    (super(), (this.serializer = e), (this.Ae = t));
  }
};
function lo(e) {
  return U(e.integerValue || e.doubleValue);
}
function uo(e) {
  return Ii(e) && e.arrayValue.values ? e.arrayValue.values.slice() : [];
}
var fo = class {
  constructor(e, t) {
    ((this.field = e), (this.transform = t));
  }
};
function po(e, t) {
  return (
    e.field.isEqual(t.field) &&
    (function (e, t) {
      return (e instanceof io && t instanceof io) ||
        (e instanceof oo && t instanceof oo)
        ? hr(e.elements, t.elements, Ei)
        : e instanceof co && t instanceof co
          ? Ei(e.Ae, t.Ae)
          : e instanceof ro && t instanceof ro;
    })(e.transform, t.transform)
  );
}
var mo = class {
    constructor(e, t) {
      ((this.version = e), (this.transformResults = t));
    }
  },
  ho = class e {
    constructor(e, t) {
      ((this.updateTime = e), (this.exists = t));
    }
    static none() {
      return new e();
    }
    static exists(t) {
      return new e(void 0, t);
    }
    static updateTime(t) {
      return new e(t);
    }
    get isNone() {
      return this.updateTime === void 0 && this.exists === void 0;
    }
    isEqual(e) {
      return (
        this.exists === e.exists &&
        (this.updateTime
          ? !!e.updateTime && this.updateTime.isEqual(e.updateTime)
          : !e.updateTime)
      );
    }
  };
function go(e, t) {
  return e.updateTime === void 0
    ? e.exists === void 0 || e.exists === t.isFoundDocument()
    : t.isFoundDocument() && t.version.isEqual(e.updateTime);
}
var _o = class {};
function vo(e, t) {
  if (!e.hasLocalMutations || (t && t.fields.length === 0)) return null;
  if (t === null)
    return e.isNoDocument()
      ? new Oo(e.key, ho.none())
      : new Co(e.key, e.data, ho.none());
  {
    let n = e.data,
      r = Ui.empty(),
      i = new H(yr.comparator);
    for (let e of t.fields)
      if (!i.has(e)) {
        let t = n.field(e);
        (t === null && e.length > 1 && ((e = e.popLast()), (t = n.field(e))),
          t === null ? r.delete(e) : r.set(e, t),
          (i = i.add(e)));
      }
    return new wo(e.key, r, new ri(i.toArray()), ho.none());
  }
}
function yo(e, t, n) {
  e instanceof Co
    ? (function (e, t, n) {
        let r = e.value.clone(),
          i = Eo(e.fieldTransforms, t, n.transformResults);
        (r.setAll(i),
          t.convertToFoundDocument(n.version, r).setHasCommittedMutations());
      })(e, t, n)
    : e instanceof wo
      ? (function (e, t, n) {
          if (!go(e.precondition, t))
            return void t.convertToUnknownDocument(n.version);
          let r = Eo(e.fieldTransforms, t, n.transformResults),
            i = t.data;
          (i.setAll(To(e)),
            i.setAll(r),
            t.convertToFoundDocument(n.version, i).setHasCommittedMutations());
        })(e, t, n)
      : (function (e, t, n) {
          t.convertToNoDocument(n.version).setHasCommittedMutations();
        })(0, t, n);
}
function bo(e, t, n, r) {
  return e instanceof Co
    ? (function (e, t, n, r) {
        if (!go(e.precondition, t)) return n;
        let i = e.value.clone(),
          a = Do(e.fieldTransforms, r, t);
        return (
          i.setAll(a),
          t.convertToFoundDocument(t.version, i).setHasLocalMutations(),
          null
        );
      })(e, t, n, r)
    : e instanceof wo
      ? (function (e, t, n, r) {
          if (!go(e.precondition, t)) return n;
          let i = Do(e.fieldTransforms, r, t),
            a = t.data;
          return (
            a.setAll(To(e)),
            a.setAll(i),
            t.convertToFoundDocument(t.version, a).setHasLocalMutations(),
            n === null
              ? null
              : n
                  .unionWith(e.fieldMask.fields)
                  .unionWith(e.fieldTransforms.map((e) => e.field))
          );
        })(e, t, n, r)
      : (function (e, t, n) {
          return go(e.precondition, t)
            ? (t.convertToNoDocument(t.version).setHasLocalMutations(), null)
            : n;
        })(e, t, n);
}
function xo(e, t) {
  let n = null;
  for (let r of e.fieldTransforms) {
    let e = t.data.field(r.field),
      i = no(r.transform, e || null);
    i != null && (n === null && (n = Ui.empty()), n.set(r.field, i));
  }
  return n || null;
}
function So(e, t) {
  return (
    e.type === t.type &&
    !!e.key.isEqual(t.key) &&
    !!e.precondition.isEqual(t.precondition) &&
    !!(function (e, t) {
      return (
        (e === void 0 && t === void 0) ||
        (!(!e || !t) && hr(e, t, (e, t) => po(e, t)))
      );
    })(e.fieldTransforms, t.fieldTransforms) &&
    (e.type === 0
      ? e.value.isEqual(t.value)
      : e.type !== 1 ||
        (e.data.isEqual(t.data) && e.fieldMask.isEqual(t.fieldMask)))
  );
}
var Co = class extends _o {
    constructor(e, t, n, r = []) {
      (super(),
        (this.key = e),
        (this.value = t),
        (this.precondition = n),
        (this.fieldTransforms = r),
        (this.type = 0));
    }
    getFieldMask() {
      return null;
    }
  },
  wo = class extends _o {
    constructor(e, t, n, r, i = []) {
      (super(),
        (this.key = e),
        (this.data = t),
        (this.fieldMask = n),
        (this.precondition = r),
        (this.fieldTransforms = i),
        (this.type = 1));
    }
    getFieldMask() {
      return this.fieldMask;
    }
  };
function To(e) {
  let t = new Map();
  return (
    e.fieldMask.fields.forEach((n) => {
      if (!n.isEmpty()) {
        let r = e.data.field(n);
        t.set(n, r);
      }
    }),
    t
  );
}
function Eo(e, t, n) {
  let r = new Map();
  A(e.length === n.length, 32656, { Ve: n.length, de: e.length });
  for (let i = 0; i < n.length; i++) {
    let a = e[i],
      o = a.transform,
      s = t.data.field(a.field);
    r.set(a.field, to(o, s, n[i]));
  }
  return r;
}
function Do(e, t, n) {
  let r = new Map();
  for (let i of e) {
    let e = i.transform,
      a = n.data.field(i.field);
    r.set(i.field, eo(e, a, t));
  }
  return r;
}
var Oo = class extends _o {
    constructor(e, t) {
      (super(),
        (this.key = e),
        (this.precondition = t),
        (this.type = 2),
        (this.fieldTransforms = []));
    }
    getFieldMask() {
      return null;
    }
  },
  ko = class extends _o {
    constructor(e, t) {
      (super(),
        (this.key = e),
        (this.precondition = t),
        (this.type = 3),
        (this.fieldTransforms = []));
    }
    getFieldMask() {
      return null;
    }
  },
  Ao = class {
    constructor(e, t, n, r) {
      ((this.batchId = e),
        (this.localWriteTime = t),
        (this.baseMutations = n),
        (this.mutations = r));
    }
    applyToRemoteDocument(e, t) {
      let n = t.mutationResults;
      for (let t = 0; t < this.mutations.length; t++) {
        let r = this.mutations[t];
        r.key.isEqual(e.key) && yo(r, e, n[t]);
      }
    }
    applyToLocalView(e, t) {
      for (let n of this.baseMutations)
        n.key.isEqual(e.key) && (t = bo(n, e, t, this.localWriteTime));
      for (let n of this.mutations)
        n.key.isEqual(e.key) && (t = bo(n, e, t, this.localWriteTime));
      return t;
    }
    applyToLocalDocumentSet(e, t) {
      let n = Wa();
      return (
        this.mutations.forEach((r) => {
          let i = e.get(r.key),
            a = i.overlayedDocument,
            o = this.applyToLocalView(a, i.mutatedFields);
          o = t.has(r.key) ? null : o;
          let s = vo(a, o);
          (s !== null && n.set(r.key, s),
            a.isValidDocument() || a.convertToNoDocument(z.min()));
        }),
        n
      );
    }
    keys() {
      return this.mutations.reduce((e, t) => e.add(t.key), G());
    }
    isEqual(e) {
      return (
        this.batchId === e.batchId &&
        hr(this.mutations, e.mutations, (e, t) => So(e, t)) &&
        hr(this.baseMutations, e.baseMutations, (e, t) => So(e, t))
      );
    }
  },
  jo = class e {
    constructor(e, t, n, r) {
      ((this.batch = e),
        (this.commitVersion = t),
        (this.mutationResults = n),
        (this.docVersions = r));
    }
    static from(t, n, r) {
      A(t.mutations.length === r.length, 58842, {
        me: t.mutations.length,
        fe: r.length,
      });
      let i = (function () {
          return Ka;
        })(),
        a = t.mutations;
      for (let e = 0; e < a.length; e++) i = i.insert(a[e].key, r[e].version);
      return new e(t, n, r, i);
    }
  },
  Mo = class {
    constructor(e, t) {
      ((this.largestBatchId = e), (this.mutation = t));
    }
    getKey() {
      return this.mutation.key;
    }
    isEqual(e) {
      return e !== null && this.mutation === e.mutation;
    }
    toString() {
      return `Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`;
    }
  },
  No = class {
    constructor(e, t) {
      ((this.count = e), (this.unchangedNames = t));
    }
  },
  K,
  q;
function Po(e) {
  switch (e) {
    case M.OK:
      return k(64938);
    case M.CANCELLED:
    case M.UNKNOWN:
    case M.DEADLINE_EXCEEDED:
    case M.RESOURCE_EXHAUSTED:
    case M.INTERNAL:
    case M.UNAVAILABLE:
    case M.UNAUTHENTICATED:
      return !1;
    case M.INVALID_ARGUMENT:
    case M.NOT_FOUND:
    case M.ALREADY_EXISTS:
    case M.PERMISSION_DENIED:
    case M.FAILED_PRECONDITION:
    case M.ABORTED:
    case M.OUT_OF_RANGE:
    case M.UNIMPLEMENTED:
    case M.DATA_LOSS:
      return !0;
    default:
      return k(15467, { code: e });
  }
}
function Fo(e) {
  if (e === void 0) return (Xn(`GRPC error has no .code`), M.UNKNOWN);
  switch (e) {
    case K.OK:
      return M.OK;
    case K.CANCELLED:
      return M.CANCELLED;
    case K.UNKNOWN:
      return M.UNKNOWN;
    case K.DEADLINE_EXCEEDED:
      return M.DEADLINE_EXCEEDED;
    case K.RESOURCE_EXHAUSTED:
      return M.RESOURCE_EXHAUSTED;
    case K.INTERNAL:
      return M.INTERNAL;
    case K.UNAVAILABLE:
      return M.UNAVAILABLE;
    case K.UNAUTHENTICATED:
      return M.UNAUTHENTICATED;
    case K.INVALID_ARGUMENT:
      return M.INVALID_ARGUMENT;
    case K.NOT_FOUND:
      return M.NOT_FOUND;
    case K.ALREADY_EXISTS:
      return M.ALREADY_EXISTS;
    case K.PERMISSION_DENIED:
      return M.PERMISSION_DENIED;
    case K.FAILED_PRECONDITION:
      return M.FAILED_PRECONDITION;
    case K.ABORTED:
      return M.ABORTED;
    case K.OUT_OF_RANGE:
      return M.OUT_OF_RANGE;
    case K.UNIMPLEMENTED:
      return M.UNIMPLEMENTED;
    case K.DATA_LOSS:
      return M.DATA_LOSS;
    default:
      return k(39323, { code: e });
  }
}
(((q = K || (K = {}))[(q.OK = 0)] = `OK`),
  (q[(q.CANCELLED = 1)] = `CANCELLED`),
  (q[(q.UNKNOWN = 2)] = `UNKNOWN`),
  (q[(q.INVALID_ARGUMENT = 3)] = `INVALID_ARGUMENT`),
  (q[(q.DEADLINE_EXCEEDED = 4)] = `DEADLINE_EXCEEDED`),
  (q[(q.NOT_FOUND = 5)] = `NOT_FOUND`),
  (q[(q.ALREADY_EXISTS = 6)] = `ALREADY_EXISTS`),
  (q[(q.PERMISSION_DENIED = 7)] = `PERMISSION_DENIED`),
  (q[(q.UNAUTHENTICATED = 16)] = `UNAUTHENTICATED`),
  (q[(q.RESOURCE_EXHAUSTED = 8)] = `RESOURCE_EXHAUSTED`),
  (q[(q.FAILED_PRECONDITION = 9)] = `FAILED_PRECONDITION`),
  (q[(q.ABORTED = 10)] = `ABORTED`),
  (q[(q.OUT_OF_RANGE = 11)] = `OUT_OF_RANGE`),
  (q[(q.UNIMPLEMENTED = 12)] = `UNIMPLEMENTED`),
  (q[(q.INTERNAL = 13)] = `INTERNAL`),
  (q[(q.UNAVAILABLE = 14)] = `UNAVAILABLE`),
  (q[(q.DATA_LOSS = 15)] = `DATA_LOSS`));
var Io = null;
function Lo() {
  return new TextEncoder();
}
var Ro = new Pn([4294967295, 4294967295], 0);
function zo(e) {
  let t = Lo().encode(e),
    n = new Fn();
  return (n.update(t), new Uint8Array(n.digest()));
}
function Bo(e) {
  let t = new DataView(e.buffer),
    n = t.getUint32(0, !0),
    r = t.getUint32(4, !0),
    i = t.getUint32(8, !0),
    a = t.getUint32(12, !0);
  return [new Pn([n, r], 0), new Pn([i, a], 0)];
}
var Vo = class e {
    constructor(e, t, n) {
      if (
        ((this.bitmap = e),
        (this.padding = t),
        (this.hashCount = n),
        t < 0 || t >= 8)
      )
        throw new Ho(`Invalid padding: ${t}`);
      if (n < 0 || (e.length > 0 && this.hashCount === 0))
        throw new Ho(`Invalid hash count: ${n}`);
      if (e.length === 0 && t !== 0)
        throw new Ho(`Invalid padding when bitmap length is 0: ${t}`);
      ((this.ge = 8 * e.length - t), (this.pe = Pn.fromNumber(this.ge)));
    }
    ye(e, t, n) {
      let r = e.add(t.multiply(Pn.fromNumber(n)));
      return (
        r.compare(Ro) === 1 && (r = new Pn([r.getBits(0), r.getBits(1)], 0)),
        r.modulo(this.pe).toNumber()
      );
    }
    we(e) {
      return !!(this.bitmap[Math.floor(e / 8)] & (1 << (e % 8)));
    }
    mightContain(e) {
      if (this.ge === 0) return !1;
      let [t, n] = Bo(zo(e));
      for (let e = 0; e < this.hashCount; e++) {
        let r = this.ye(t, n, e);
        if (!this.we(r)) return !1;
      }
      return !0;
    }
    static create(t, n, r) {
      let i = t % 8 == 0 ? 0 : 8 - (t % 8),
        a = new e(new Uint8Array(Math.ceil(t / 8)), i, n);
      return (r.forEach((e) => a.insert(e)), a);
    }
    insert(e) {
      if (this.ge === 0) return;
      let [t, n] = Bo(zo(e));
      for (let e = 0; e < this.hashCount; e++) {
        let r = this.ye(t, n, e);
        this.Se(r);
      }
    }
    Se(e) {
      let t = Math.floor(e / 8),
        n = e % 8;
      this.bitmap[t] |= 1 << n;
    }
  },
  Ho = class extends Error {
    constructor() {
      (super(...arguments), (this.name = `BloomFilterError`));
    }
  },
  Uo = class e {
    constructor(e, t, n, r, i) {
      ((this.snapshotVersion = e),
        (this.targetChanges = t),
        (this.targetMismatches = n),
        (this.documentUpdates = r),
        (this.resolvedLimboDocuments = i));
    }
    static createSynthesizedRemoteEventForCurrentChange(t, n, r) {
      let i = new Map();
      return (
        i.set(t, Wo.createSynthesizedTargetChangeForCurrentChange(t, n, r)),
        new e(z.min(), i, new V(P), za(), G())
      );
    }
  },
  Wo = class e {
    constructor(e, t, n, r, i) {
      ((this.resumeToken = e),
        (this.current = t),
        (this.addedDocuments = n),
        (this.modifiedDocuments = r),
        (this.removedDocuments = i));
    }
    static createSynthesizedTargetChangeForCurrentChange(t, n, r) {
      return new e(r, n, G(), G(), G());
    }
  },
  Go = class {
    constructor(e, t, n, r) {
      ((this.be = e),
        (this.removedTargetIds = t),
        (this.key = n),
        (this.De = r));
    }
  },
  Ko = class {
    constructor(e, t) {
      ((this.targetId = e), (this.Ce = t));
    }
  },
  qo = class {
    constructor(e, t, n = ai.EMPTY_BYTE_STRING, r = null) {
      ((this.state = e),
        (this.targetIds = t),
        (this.resumeToken = n),
        (this.cause = r));
    }
  },
  Jo = class {
    constructor() {
      ((this.ve = 0),
        (this.Fe = Zo()),
        (this.Me = ai.EMPTY_BYTE_STRING),
        (this.xe = !1),
        (this.Oe = !0));
    }
    get current() {
      return this.xe;
    }
    get resumeToken() {
      return this.Me;
    }
    get Ne() {
      return this.ve !== 0;
    }
    get Be() {
      return this.Oe;
    }
    Le(e) {
      e.approximateByteSize() > 0 && ((this.Oe = !0), (this.Me = e));
    }
    ke() {
      let e = G(),
        t = G(),
        n = G();
      return (
        this.Fe.forEach((r, i) => {
          switch (i) {
            case 0:
              e = e.add(r);
              break;
            case 2:
              t = t.add(r);
              break;
            case 1:
              n = n.add(r);
              break;
            default:
              k(38017, { changeType: i });
          }
        }),
        new Wo(this.Me, this.xe, e, t, n)
      );
    }
    qe() {
      ((this.Oe = !1), (this.Fe = Zo()));
    }
    Ke(e, t) {
      ((this.Oe = !0), (this.Fe = this.Fe.insert(e, t)));
    }
    Ue(e) {
      ((this.Oe = !0), (this.Fe = this.Fe.remove(e)));
    }
    $e() {
      this.ve += 1;
    }
    We() {
      (--this.ve, A(this.ve >= 0, 3241, { ve: this.ve }));
    }
    Qe() {
      ((this.Oe = !0), (this.xe = !0));
    }
  },
  Yo = class {
    constructor(e) {
      ((this.Ge = e),
        (this.ze = new Map()),
        (this.je = za()),
        (this.Je = Xo()),
        (this.He = Xo()),
        (this.Ze = new V(P)));
    }
    Xe(e) {
      for (let t of e.be)
        e.De && e.De.isFoundDocument()
          ? this.Ye(t, e.De)
          : this.et(t, e.key, e.De);
      for (let t of e.removedTargetIds) this.et(t, e.key, e.De);
    }
    tt(e) {
      this.forEachTarget(e, (t) => {
        let n = this.nt(t);
        switch (e.state) {
          case 0:
            this.rt(t) && n.Le(e.resumeToken);
            break;
          case 1:
            (n.We(), n.Ne || n.qe(), n.Le(e.resumeToken));
            break;
          case 2:
            (n.We(), n.Ne || this.removeTarget(t));
            break;
          case 3:
            this.rt(t) && (n.Qe(), n.Le(e.resumeToken));
            break;
          case 4:
            this.rt(t) && (this.it(t), n.Le(e.resumeToken));
            break;
          default:
            k(56790, { state: e.state });
        }
      });
    }
    forEachTarget(e, t) {
      e.targetIds.length > 0
        ? e.targetIds.forEach(t)
        : this.ze.forEach((e, n) => {
            this.rt(n) && t(n);
          });
    }
    st(e) {
      let t = e.targetId,
        n = e.Ce.count,
        r = this.ot(t);
      if (r) {
        let i = r.target;
        if (_a(i))
          if (n === 0) {
            let e = new I(i.path);
            this.et(t, e, Gi.newNoDocument(e, z.min()));
          } else A(n === 1, 20013, { expectedCount: n });
        else {
          let r = this._t(t);
          if (r !== n) {
            let n = this.ut(e),
              i = n ? this.ct(n, e, r) : 1;
            if (i !== 0) {
              this.it(t);
              let e =
                i === 2
                  ? `TargetPurposeExistenceFilterMismatchBloom`
                  : `TargetPurposeExistenceFilterMismatch`;
              this.Ze = this.Ze.insert(t, e);
            }
            Io == null ||
              Io.o(
                (function (e, t, n, r, i) {
                  var a, o, s, c, l;
                  let u = {
                      localCacheCount: e,
                      existenceFilterCount: t.count,
                      databaseId: n.database,
                      projectId: n.projectId,
                    },
                    d = t.unchangedNames;
                  return (
                    d &&
                      (u.bloomFilter = {
                        applied: i === 0,
                        hashCount:
                          (a = d == null ? void 0 : d.hashCount) == null
                            ? 0
                            : a,
                        bitmapLength:
                          (o =
                            d == null ||
                            (s = d.bits) == null ||
                            (s = s.bitmap) == null
                              ? void 0
                              : s.length) == null
                            ? 0
                            : o,
                        padding:
                          (c =
                            d == null || (l = d.bits) == null
                              ? void 0
                              : l.padding) == null
                            ? 0
                            : c,
                        mightContain: (e) => {
                          var t;
                          return (t = r == null ? void 0 : r.mightContain(e)) ==
                            null
                            ? !1
                            : t;
                        },
                      }),
                    u
                  );
                })(r, e.Ce, this.Ge.ht(), n, i),
              );
          }
        }
      }
    }
    ut(e) {
      let t = e.Ce.unchangedNames;
      if (!t || !t.bits) return null;
      let {
          bits: { bitmap: n = ``, padding: r = 0 },
          hashCount: i = 0,
        } = t,
        a,
        o;
      try {
        a = ci(n).toUint8Array();
      } catch (e) {
        if (e instanceof ii)
          return (
            Zn(
              `Decoding the base64 bloom filter in existence filter failed (` +
                e.message +
                `); ignoring the bloom filter and falling back to full re-query.`,
            ),
            null
          );
        throw e;
      }
      try {
        o = new Vo(a, r, i);
      } catch (e) {
        return (
          Zn(
            e instanceof Ho
              ? `BloomFilter error: `
              : `Applying bloom filter failed: `,
            e,
          ),
          null
        );
      }
      return o.ge === 0 ? null : o;
    }
    ct(e, t, n) {
      return t.Ce.count === n - this.Pt(e, t.targetId) ? 0 : 2;
    }
    Pt(e, t) {
      let n = this.Ge.getRemoteKeysForTarget(t),
        r = 0;
      return (
        n.forEach((n) => {
          let i = this.Ge.ht(),
            a = `projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;
          e.mightContain(a) || (this.et(t, n, null), r++);
        }),
        r
      );
    }
    Tt(e) {
      let t = new Map();
      this.ze.forEach((n, r) => {
        let i = this.ot(r);
        if (i) {
          if (n.current && _a(i.target)) {
            let t = new I(i.target.path);
            this.Et(t).has(r) ||
              this.It(r, t) ||
              this.et(r, t, Gi.newNoDocument(t, e));
          }
          n.Be && (t.set(r, n.ke()), n.qe());
        }
      });
      let n = G();
      (this.He.forEach((e, t) => {
        let r = !0;
        (t.forEachWhile((e) => {
          let t = this.ot(e);
          return (
            !t || t.purpose === `TargetPurposeLimboResolution` || ((r = !1), !1)
          );
        }),
          r && (n = n.add(e)));
      }),
        this.je.forEach((t, n) => n.setReadTime(e)));
      let r = new Uo(e, t, this.Ze, this.je, n);
      return (
        (this.je = za()),
        (this.Je = Xo()),
        (this.He = Xo()),
        (this.Ze = new V(P)),
        r
      );
    }
    Ye(e, t) {
      if (!this.rt(e)) return;
      let n = this.It(e, t.key) ? 2 : 0;
      (this.nt(e).Ke(t.key, n),
        (this.je = this.je.insert(t.key, t)),
        (this.Je = this.Je.insert(t.key, this.Et(t.key).add(e))),
        (this.He = this.He.insert(t.key, this.Rt(t.key).add(e))));
    }
    et(e, t, n) {
      if (!this.rt(e)) return;
      let r = this.nt(e);
      (this.It(e, t) ? r.Ke(t, 1) : r.Ue(t),
        (this.He = this.He.insert(t, this.Rt(t).delete(e))),
        (this.He = this.He.insert(t, this.Rt(t).add(e))),
        n && (this.je = this.je.insert(t, n)));
    }
    removeTarget(e) {
      this.ze.delete(e);
    }
    _t(e) {
      let t = this.nt(e).ke();
      return (
        this.Ge.getRemoteKeysForTarget(e).size +
        t.addedDocuments.size -
        t.removedDocuments.size
      );
    }
    $e(e) {
      this.nt(e).$e();
    }
    nt(e) {
      let t = this.ze.get(e);
      return (t || ((t = new Jo()), this.ze.set(e, t)), t);
    }
    Rt(e) {
      let t = this.He.get(e);
      return (t || ((t = new H(P)), (this.He = this.He.insert(e, t))), t);
    }
    Et(e) {
      let t = this.Je.get(e);
      return (t || ((t = new H(P)), (this.Je = this.Je.insert(e, t))), t);
    }
    rt(e) {
      let t = this.ot(e) !== null;
      return (
        t || O(`WatchChangeAggregator`, `Detected inactive target`, e),
        t
      );
    }
    ot(e) {
      let t = this.ze.get(e);
      return t && t.Ne ? null : this.Ge.At(e);
    }
    it(e) {
      (this.ze.set(e, new Jo()),
        this.Ge.getRemoteKeysForTarget(e).forEach((t) => {
          this.et(e, t, null);
        }));
    }
    It(e, t) {
      return this.Ge.getRemoteKeysForTarget(e).has(t);
    }
  };
function Xo() {
  return new V(I.comparator);
}
function Zo() {
  return new V(I.comparator);
}
var Qo = { asc: `ASCENDING`, desc: `DESCENDING` },
  $o = {
    "<": `LESS_THAN`,
    "<=": `LESS_THAN_OR_EQUAL`,
    ">": `GREATER_THAN`,
    ">=": `GREATER_THAN_OR_EQUAL`,
    "==": `EQUAL`,
    "!=": `NOT_EQUAL`,
    "array-contains": `ARRAY_CONTAINS`,
    in: `IN`,
    "not-in": `NOT_IN`,
    "array-contains-any": `ARRAY_CONTAINS_ANY`,
  },
  es = { and: `AND`, or: `OR` },
  ts = class {
    constructor(e, t) {
      ((this.databaseId = e), (this.useProto3Json = t));
    }
  };
function ns(e, t) {
  return e.useProto3Json || Wr(t) ? t : { value: t };
}
function rs(e, t) {
  return e.useProto3Json
    ? `${new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, ``).replace(`Z`, ``)}.${(`000000000` + t.nanoseconds).slice(-9)}Z`
    : { seconds: `` + t.seconds, nanos: t.nanoseconds };
}
function is(e, t) {
  return e.useProto3Json ? t.toBase64() : t.toUint8Array();
}
function as(e, t) {
  return rs(e, t.toTimestamp());
}
function os(e) {
  return (
    A(!!e, 49232),
    z.fromTimestamp(
      (function (e) {
        let t = si(e);
        return new R(t.seconds, t.nanos);
      })(e),
    )
  );
}
function ss(e, t) {
  return cs(e, t).canonicalString();
}
function cs(e, t) {
  let n = (function (e) {
    return new F([`projects`, e.projectId, `databases`, e.database]);
  })(e).child(`documents`);
  return t === void 0 ? n : n.child(t);
}
function ls(e) {
  let t = F.fromString(e);
  return (A(Ms(t), 10190, { key: t.toString() }), t);
}
function us(e, t) {
  return ss(e.databaseId, t.path);
}
function ds(e, t) {
  let n = ls(t);
  if (n.get(1) !== e.databaseId.projectId)
    throw new N(
      M.INVALID_ARGUMENT,
      `Tried to deserialize key from different project: ` +
        n.get(1) +
        ` vs ` +
        e.databaseId.projectId,
    );
  if (n.get(3) !== e.databaseId.database)
    throw new N(
      M.INVALID_ARGUMENT,
      `Tried to deserialize key from different database: ` +
        n.get(3) +
        ` vs ` +
        e.databaseId.database,
    );
  return new I(hs(n));
}
function fs(e, t) {
  return ss(e.databaseId, t);
}
function ps(e) {
  let t = ls(e);
  return t.length === 4 ? F.emptyPath() : hs(t);
}
function ms(e) {
  return new F([
    `projects`,
    e.databaseId.projectId,
    `databases`,
    e.databaseId.database,
  ]).canonicalString();
}
function hs(e) {
  return (
    A(e.length > 4 && e.get(4) === `documents`, 29091, { key: e.toString() }),
    e.popFirst(5)
  );
}
function gs(e, t, n) {
  return { name: us(e, t), fields: n.value.mapValue.fields };
}
function _s(e, t) {
  let n;
  if (`targetChange` in t) {
    t.targetChange;
    let r = (function (e) {
        return e === `NO_CHANGE`
          ? 0
          : e === `ADD`
            ? 1
            : e === `REMOVE`
              ? 2
              : e === `CURRENT`
                ? 3
                : e === `RESET`
                  ? 4
                  : k(39313, { state: e });
      })(t.targetChange.targetChangeType || `NO_CHANGE`),
      i = t.targetChange.targetIds || [],
      a = (function (e, t) {
        return e.useProto3Json
          ? (A(t === void 0 || typeof t == `string`, 58123),
            ai.fromBase64String(t || ``))
          : (A(
              t === void 0 || t instanceof Buffer || t instanceof Uint8Array,
              16193,
            ),
            ai.fromUint8Array(t || new Uint8Array()));
      })(e, t.targetChange.resumeToken),
      o = t.targetChange.cause;
    n = new qo(
      r,
      i,
      a,
      (o &&
        (function (e) {
          return new N(
            e.code === void 0 ? M.UNKNOWN : Fo(e.code),
            e.message || ``,
          );
        })(o)) ||
        null,
    );
  } else if (`documentChange` in t) {
    t.documentChange;
    let r = t.documentChange;
    (r.document, r.document.name, r.document.updateTime);
    let i = ds(e, r.document.name),
      a = os(r.document.updateTime),
      o = r.document.createTime ? os(r.document.createTime) : z.min(),
      s = new Ui({ mapValue: { fields: r.document.fields } }),
      c = Gi.newFoundDocument(i, a, o, s);
    n = new Go(r.targetIds || [], r.removedTargetIds || [], c.key, c);
  } else if (`documentDelete` in t) {
    t.documentDelete;
    let r = t.documentDelete;
    r.document;
    let i = ds(e, r.document),
      a = r.readTime ? os(r.readTime) : z.min(),
      o = Gi.newNoDocument(i, a);
    n = new Go([], r.removedTargetIds || [], o.key, o);
  } else if (`documentRemove` in t) {
    t.documentRemove;
    let r = t.documentRemove;
    r.document;
    let i = ds(e, r.document);
    n = new Go([], r.removedTargetIds || [], i, null);
  } else {
    if (!(`filter` in t)) return k(11601, { Vt: t });
    {
      t.filter;
      let e = t.filter;
      e.targetId;
      let { count: r = 0, unchangedNames: i } = e,
        a = new No(r, i),
        o = e.targetId;
      n = new Ko(o, a);
    }
  }
  return n;
}
function vs(e, t) {
  let n;
  if (t instanceof Co) n = { update: gs(e, t.key, t.value) };
  else if (t instanceof Oo) n = { delete: us(e, t.key) };
  else if (t instanceof wo)
    n = { update: gs(e, t.key, t.data), updateMask: js(t.fieldMask) };
  else {
    if (!(t instanceof ko)) return k(16599, { dt: t.type });
    n = { verify: us(e, t.key) };
  }
  return (
    t.fieldTransforms.length > 0 &&
      (n.updateTransforms = t.fieldTransforms.map((e) =>
        (function (e, t) {
          let n = t.transform;
          if (n instanceof ro)
            return {
              fieldPath: t.field.canonicalString(),
              setToServerValue: `REQUEST_TIME`,
            };
          if (n instanceof io)
            return {
              fieldPath: t.field.canonicalString(),
              appendMissingElements: { values: n.elements },
            };
          if (n instanceof oo)
            return {
              fieldPath: t.field.canonicalString(),
              removeAllFromArray: { values: n.elements },
            };
          if (n instanceof co)
            return { fieldPath: t.field.canonicalString(), increment: n.Ae };
          throw k(20930, { transform: t.transform });
        })(0, e),
      )),
    t.precondition.isNone ||
      (n.currentDocument = (function (e, t) {
        return t.updateTime === void 0
          ? t.exists === void 0
            ? k(27497)
            : { exists: t.exists }
          : { updateTime: as(e, t.updateTime) };
      })(e, t.precondition)),
    n
  );
}
function ys(e, t) {
  return e && e.length > 0
    ? (A(t !== void 0, 14353),
      e.map((e) =>
        (function (e, t) {
          let n = e.updateTime ? os(e.updateTime) : os(t);
          return (
            n.isEqual(z.min()) && (n = os(t)),
            new mo(n, e.transformResults || [])
          );
        })(e, t),
      ))
    : [];
}
function bs(e, t) {
  return { documents: [fs(e, t.path)] };
}
function xs(e, t) {
  let n = { structuredQuery: {} },
    r = t.path,
    i;
  (t.collectionGroup === null
    ? ((i = r.popLast()),
      (n.structuredQuery.from = [{ collectionId: r.lastSegment() }]))
    : ((i = r),
      (n.structuredQuery.from = [
        { collectionId: t.collectionGroup, allDescendants: !0 },
      ])),
    (n.parent = fs(e, i)));
  let a = (function (e) {
    if (e.length !== 0) return As(Qi.create(e, `and`));
  })(t.filters);
  a && (n.structuredQuery.where = a);
  let o = (function (e) {
    if (e.length !== 0)
      return e.map((e) =>
        (function (e) {
          return { field: Os(e.field), direction: Ts(e.dir) };
        })(e),
      );
  })(t.orderBy);
  o && (n.structuredQuery.orderBy = o);
  let s = ns(e, t.limit);
  return (
    s !== null && (n.structuredQuery.limit = s),
    t.startAt &&
      (n.structuredQuery.startAt = (function (e) {
        return { before: e.inclusive, values: e.position };
      })(t.startAt)),
    t.endAt &&
      (n.structuredQuery.endAt = (function (e) {
        return { before: !e.inclusive, values: e.position };
      })(t.endAt)),
    { ft: n, parent: i }
  );
}
function Ss(e) {
  let t = ps(e.parent),
    n = e.structuredQuery,
    r = n.from ? n.from.length : 0,
    i = null;
  if (r > 0) {
    A(r === 1, 65062);
    let e = n.from[0];
    e.allDescendants ? (i = e.collectionId) : (t = t.child(e.collectionId));
  }
  let a = [];
  n.where &&
    (a = (function (e) {
      let t = ws(e);
      return t instanceof Qi && ea(t) ? t.getFilters() : [t];
    })(n.where));
  let o = [];
  n.orderBy &&
    (o = (function (e) {
      return e.map((e) =>
        (function (e) {
          return new Yi(
            ks(e.field),
            (function (e) {
              switch (e) {
                case `ASCENDING`:
                  return `asc`;
                case `DESCENDING`:
                  return `desc`;
                default:
                  return;
              }
            })(e.direction),
          );
        })(e),
      );
    })(n.orderBy));
  let s = null;
  n.limit &&
    (s = (function (e) {
      let t;
      return ((t = typeof e == `object` ? e.value : e), Wr(t) ? null : t);
    })(n.limit));
  let c = null;
  n.startAt &&
    (c = (function (e) {
      let t = !!e.before;
      return new Ki(e.values || [], t);
    })(n.startAt));
  let l = null;
  return (
    n.endAt &&
      (l = (function (e) {
        let t = !e.before;
        return new Ki(e.values || [], t);
      })(n.endAt)),
    ya(t, i, o, a, s, `F`, c, l)
  );
}
function Cs(e, t) {
  let n = (function (e) {
    switch (e) {
      case `TargetPurposeListen`:
        return null;
      case `TargetPurposeExistenceFilterMismatch`:
        return `existence-filter-mismatch`;
      case `TargetPurposeExistenceFilterMismatchBloom`:
        return `existence-filter-mismatch-bloom`;
      case `TargetPurposeLimboResolution`:
        return `limbo-document`;
      default:
        return k(28987, { purpose: e });
    }
  })(t.purpose);
  return n == null ? null : { "goog-listen-tags": n };
}
function ws(e) {
  return e.unaryFilter === void 0
    ? e.fieldFilter === void 0
      ? e.compositeFilter === void 0
        ? k(30097, { filter: e })
        : (function (e) {
            return Qi.create(
              e.compositeFilter.filters.map((e) => ws(e)),
              (function (e) {
                switch (e) {
                  case `AND`:
                    return `and`;
                  case `OR`:
                    return `or`;
                  default:
                    return k(1026);
                }
              })(e.compositeFilter.op),
            );
          })(e)
      : (function (e) {
          return W.create(
            ks(e.fieldFilter.field),
            (function (e) {
              switch (e) {
                case `EQUAL`:
                  return `==`;
                case `NOT_EQUAL`:
                  return `!=`;
                case `GREATER_THAN`:
                  return `>`;
                case `GREATER_THAN_OR_EQUAL`:
                  return `>=`;
                case `LESS_THAN`:
                  return `<`;
                case `LESS_THAN_OR_EQUAL`:
                  return `<=`;
                case `ARRAY_CONTAINS`:
                  return `array-contains`;
                case `IN`:
                  return `in`;
                case `NOT_IN`:
                  return `not-in`;
                case `ARRAY_CONTAINS_ANY`:
                  return `array-contains-any`;
                case `OPERATOR_UNSPECIFIED`:
                  return k(58110);
                default:
                  return k(50506);
              }
            })(e.fieldFilter.op),
            e.fieldFilter.value,
          );
        })(e)
    : (function (e) {
        switch (e.unaryFilter.op) {
          case `IS_NAN`:
            let t = ks(e.unaryFilter.field);
            return W.create(t, `==`, { doubleValue: NaN });
          case `IS_NULL`:
            let n = ks(e.unaryFilter.field);
            return W.create(n, `==`, { nullValue: `NULL_VALUE` });
          case `IS_NOT_NAN`:
            let r = ks(e.unaryFilter.field);
            return W.create(r, `!=`, { doubleValue: NaN });
          case `IS_NOT_NULL`:
            let i = ks(e.unaryFilter.field);
            return W.create(i, `!=`, { nullValue: `NULL_VALUE` });
          case `OPERATOR_UNSPECIFIED`:
            return k(61313);
          default:
            return k(60726);
        }
      })(e);
}
function Ts(e) {
  return Qo[e];
}
function Es(e) {
  return $o[e];
}
function Ds(e) {
  return es[e];
}
function Os(e) {
  return { fieldPath: e.canonicalString() };
}
function ks(e) {
  return yr.fromServerFormat(e.fieldPath);
}
function As(e) {
  return e instanceof W
    ? (function (e) {
        if (e.op === `==`) {
          if (Ri(e.value))
            return { unaryFilter: { field: Os(e.field), op: `IS_NAN` } };
          if (Li(e.value))
            return { unaryFilter: { field: Os(e.field), op: `IS_NULL` } };
        } else if (e.op === `!=`) {
          if (Ri(e.value))
            return { unaryFilter: { field: Os(e.field), op: `IS_NOT_NAN` } };
          if (Li(e.value))
            return { unaryFilter: { field: Os(e.field), op: `IS_NOT_NULL` } };
        }
        return {
          fieldFilter: { field: Os(e.field), op: Es(e.op), value: e.value },
        };
      })(e)
    : e instanceof Qi
      ? (function (e) {
          let t = e.getFilters().map((e) => As(e));
          return t.length === 1
            ? t[0]
            : { compositeFilter: { op: Ds(e.op), filters: t } };
        })(e)
      : k(54877, { filter: e });
}
function js(e) {
  let t = [];
  return (
    e.fields.forEach((e) => t.push(e.canonicalString())),
    { fieldPaths: t }
  );
}
function Ms(e) {
  return e.length >= 4 && e.get(0) === `projects` && e.get(2) === `databases`;
}
function Ns(e) {
  return (
    !!e && typeof e._toProto == `function` && e._protoValueType === `ProtoValue`
  );
}
var Ps = class e {
    constructor(
      e,
      t,
      n,
      r,
      i = z.min(),
      a = z.min(),
      o = ai.EMPTY_BYTE_STRING,
      s = null,
    ) {
      ((this.target = e),
        (this.targetId = t),
        (this.purpose = n),
        (this.sequenceNumber = r),
        (this.snapshotVersion = i),
        (this.lastLimboFreeSnapshotVersion = a),
        (this.resumeToken = o),
        (this.expectedCount = s));
    }
    withSequenceNumber(t) {
      return new e(
        this.target,
        this.targetId,
        this.purpose,
        t,
        this.snapshotVersion,
        this.lastLimboFreeSnapshotVersion,
        this.resumeToken,
        this.expectedCount,
      );
    }
    withResumeToken(t, n) {
      return new e(
        this.target,
        this.targetId,
        this.purpose,
        this.sequenceNumber,
        n,
        this.lastLimboFreeSnapshotVersion,
        t,
        null,
      );
    }
    withExpectedCount(t) {
      return new e(
        this.target,
        this.targetId,
        this.purpose,
        this.sequenceNumber,
        this.snapshotVersion,
        this.lastLimboFreeSnapshotVersion,
        this.resumeToken,
        t,
      );
    }
    withLastLimboFreeSnapshotVersion(t) {
      return new e(
        this.target,
        this.targetId,
        this.purpose,
        this.sequenceNumber,
        this.snapshotVersion,
        t,
        this.resumeToken,
        this.expectedCount,
      );
    }
  },
  Fs = class {
    constructor(e) {
      this.yt = e;
    }
  };
function Is(e) {
  let t = Ss({ parent: e.parent, structuredQuery: e.structuredQuery });
  return e.limitType === `LAST` ? ka(t, t.limit, `L`) : t;
}
var Ls = class {
  constructor() {}
  Dt(e, t) {
    (this.Ct(e, t), t.vt());
  }
  Ct(e, t) {
    if (`nullValue` in e) this.Ft(t, 5);
    else if (`booleanValue` in e) (this.Ft(t, 10), t.Mt(+!!e.booleanValue));
    else if (`integerValue` in e) (this.Ft(t, 15), t.Mt(U(e.integerValue)));
    else if (`doubleValue` in e) {
      let n = U(e.doubleValue);
      isNaN(n) ? this.Ft(t, 13) : (this.Ft(t, 15), Gr(n) ? t.Mt(0) : t.Mt(n));
    } else if (`timestampValue` in e) {
      let n = e.timestampValue;
      (this.Ft(t, 20),
        typeof n == `string` && (n = si(n)),
        t.xt(`${n.seconds || ``}`),
        t.Mt(n.nanos || 0));
    } else if (`stringValue` in e) (this.Ot(e.stringValue, t), this.Nt(t));
    else if (`bytesValue` in e)
      (this.Ft(t, 30), t.Bt(ci(e.bytesValue)), this.Nt(t));
    else if (`referenceValue` in e) this.Lt(e.referenceValue, t);
    else if (`geoPointValue` in e) {
      let n = e.geoPointValue;
      (this.Ft(t, 45), t.Mt(n.latitude || 0), t.Mt(n.longitude || 0));
    } else
      `mapValue` in e
        ? Hi(e)
          ? this.Ft(t, 9007199254740991)
          : Bi(e)
            ? this.kt(e.mapValue, t)
            : (this.qt(e.mapValue, t), this.Nt(t))
        : `arrayValue` in e
          ? (this.Kt(e.arrayValue, t), this.Nt(t))
          : k(19022, { Ut: e });
  }
  Ot(e, t) {
    (this.Ft(t, 25), this.$t(e, t));
  }
  $t(e, t) {
    t.xt(e);
  }
  qt(e, t) {
    let n = e.fields || {};
    this.Ft(t, 55);
    for (let e of Object.keys(n)) (this.Ot(e, t), this.Ct(n[e], t));
  }
  kt(e, t) {
    var n;
    let r = e.fields || {};
    this.Ft(t, 53);
    let i = wi,
      a =
        ((n = r[i].arrayValue) == null || (n = n.values) == null
          ? void 0
          : n.length) || 0;
    (this.Ft(t, 15), t.Mt(U(a)), this.Ot(i, t), this.Ct(r[i], t));
  }
  Kt(e, t) {
    let n = e.values || [];
    this.Ft(t, 50);
    for (let e of n) this.Ct(e, t);
  }
  Lt(e, t) {
    (this.Ft(t, 37),
      I.fromName(e).path.forEach((e) => {
        (this.Ft(t, 60), this.$t(e, t));
      }));
  }
  Ft(e, t) {
    e.Mt(t);
  }
  Nt(e) {
    e.Mt(2);
  }
};
Ls.Wt = new Ls();
var Rs = class {
    constructor() {
      this.bn = new zs();
    }
    addToCollectionParentIndex(e, t) {
      return (this.bn.add(t), B.resolve());
    }
    getCollectionParents(e, t) {
      return B.resolve(this.bn.getEntries(t));
    }
    addFieldIndex(e, t) {
      return B.resolve();
    }
    deleteFieldIndex(e, t) {
      return B.resolve();
    }
    deleteAllFieldIndexes(e) {
      return B.resolve();
    }
    createTargetIndexes(e, t) {
      return B.resolve();
    }
    getDocumentsMatchingTarget(e, t) {
      return B.resolve(null);
    }
    getIndexType(e, t) {
      return B.resolve(0);
    }
    getFieldIndexes(e, t) {
      return B.resolve([]);
    }
    getNextCollectionGroupToUpdate(e) {
      return B.resolve(null);
    }
    getMinOffset(e, t) {
      return B.resolve(Pr.min());
    }
    getMinOffsetFromCollectionGroup(e, t) {
      return B.resolve(Pr.min());
    }
    updateCollectionGroup(e, t, n) {
      return B.resolve();
    }
    updateIndexEntries(e, t) {
      return B.resolve();
    }
  },
  zs = class {
    constructor() {
      this.index = {};
    }
    add(e) {
      let t = e.lastSegment(),
        n = e.popLast(),
        r = this.index[t] || new H(F.comparator),
        i = !r.has(n);
      return ((this.index[t] = r.add(n)), i);
    }
    has(e) {
      let t = e.lastSegment(),
        n = e.popLast(),
        r = this.index[t];
      return r && r.has(n);
    }
    getEntries(e) {
      return (this.index[e] || new H(F.comparator)).toArray();
    }
  },
  Bs = {
    didRun: !1,
    sequenceNumbersCollected: 0,
    targetsRemoved: 0,
    documentsRemoved: 0,
  },
  Vs = 41943040,
  Hs = class e {
    static withCacheSize(t) {
      return new e(
        t,
        e.DEFAULT_COLLECTION_PERCENTILE,
        e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT,
      );
    }
    constructor(e, t, n) {
      ((this.cacheSizeCollectionThreshold = e),
        (this.percentileToCollect = t),
        (this.maximumSequenceNumbersToCollect = n));
    }
  };
((Hs.DEFAULT_COLLECTION_PERCENTILE = 10),
  (Hs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3),
  (Hs.DEFAULT = new Hs(
    Vs,
    Hs.DEFAULT_COLLECTION_PERCENTILE,
    Hs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT,
  )),
  (Hs.DISABLED = new Hs(-1, 0, 0)));
var Us = class e {
    constructor(e) {
      this.sr = e;
    }
    next() {
      return ((this.sr += 2), this.sr);
    }
    static _r() {
      return new e(0);
    }
    static ar() {
      return new e(-1);
    }
  },
  Ws = `LruGarbageCollector`,
  Gs = 1048576;
function Ks([e, t], [n, r]) {
  let i = P(e, n);
  return i === 0 ? P(t, r) : i;
}
var qs = class {
    constructor(e) {
      ((this.Pr = e), (this.buffer = new H(Ks)), (this.Tr = 0));
    }
    Er() {
      return ++this.Tr;
    }
    Ir(e) {
      let t = [e, this.Er()];
      if (this.buffer.size < this.Pr) this.buffer = this.buffer.add(t);
      else {
        let e = this.buffer.last();
        Ks(t, e) < 0 && (this.buffer = this.buffer.delete(e).add(t));
      }
    }
    get maxValue() {
      return this.buffer.last()[0];
    }
  },
  Js = class {
    constructor(e, t, n) {
      ((this.garbageCollector = e),
        (this.asyncQueue = t),
        (this.localStore = n),
        (this.Rr = null));
    }
    start() {
      this.garbageCollector.params.cacheSizeCollectionThreshold !== -1 &&
        this.Ar(6e4);
    }
    stop() {
      this.Rr && (this.Rr.cancel(), (this.Rr = null));
    }
    get started() {
      return this.Rr !== null;
    }
    Ar(e) {
      var t = this;
      (O(Ws, `Garbage collection scheduled in ${e}ms`),
        (this.Rr = this.asyncQueue.enqueueAfterDelay(
          `lru_garbage_collection`,
          e,
          p(function* () {
            t.Rr = null;
            try {
              yield t.localStore.collectGarbage(t.garbageCollector);
            } catch (e) {
              Vr(e)
                ? O(
                    Ws,
                    `Ignoring IndexedDB error during garbage collection: `,
                    e,
                  )
                : yield Rr(e);
            }
            yield t.Ar(3e5);
          }),
        )));
    }
  },
  Ys = class {
    constructor(e, t) {
      ((this.Vr = e), (this.params = t));
    }
    calculateTargetCount(e, t) {
      return this.Vr.dr(e).next((e) => Math.floor((t / 100) * e));
    }
    nthSequenceNumber(e, t) {
      if (t === 0) return B.resolve(Hr.ce);
      let n = new qs(t);
      return this.Vr.forEachTarget(e, (e) => n.Ir(e.sequenceNumber))
        .next(() => this.Vr.mr(e, (e) => n.Ir(e)))
        .next(() => n.maxValue);
    }
    removeTargets(e, t, n) {
      return this.Vr.removeTargets(e, t, n);
    }
    removeOrphanedDocuments(e, t) {
      return this.Vr.removeOrphanedDocuments(e, t);
    }
    collect(e, t) {
      return this.params.cacheSizeCollectionThreshold === -1
        ? (O(`LruGarbageCollector`, `Garbage collection skipped; disabled`),
          B.resolve(Bs))
        : this.getCacheSize(e).next((n) =>
            n < this.params.cacheSizeCollectionThreshold
              ? (O(
                  `LruGarbageCollector`,
                  `Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`,
                ),
                Bs)
              : this.gr(e, t),
          );
    }
    getCacheSize(e) {
      return this.Vr.getCacheSize(e);
    }
    gr(e, t) {
      let n,
        r,
        i,
        a,
        o,
        s,
        c,
        l = Date.now();
      return this.calculateTargetCount(e, this.params.percentileToCollect)
        .next(
          (t) => (
            t > this.params.maximumSequenceNumbersToCollect
              ? (O(
                  `LruGarbageCollector`,
                  `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`,
                ),
                (r = this.params.maximumSequenceNumbersToCollect))
              : (r = t),
            (a = Date.now()),
            this.nthSequenceNumber(e, r)
          ),
        )
        .next((r) => ((n = r), (o = Date.now()), this.removeTargets(e, n, t)))
        .next(
          (t) => (
            (i = t),
            (s = Date.now()),
            this.removeOrphanedDocuments(e, n)
          ),
        )
        .next(
          (e) => (
            (c = Date.now()),
            Yn() <= C.DEBUG &&
              O(
                `LruGarbageCollector`,
                `LRU Garbage Collection\n\tCounted targets in ${a - l}ms\n\tDetermined least recently used ${r} in ` +
                  (o - a) +
                  `ms
\tRemoved ${i} targets in ` +
                  (s - o) +
                  `ms
\tRemoved ${e} documents in ` +
                  (c - s) +
                  `ms
Total Duration: ${c - l}ms`,
              ),
            B.resolve({
              didRun: !0,
              sequenceNumbersCollected: r,
              targetsRemoved: i,
              documentsRemoved: e,
            })
          ),
        );
    }
  };
function Xs(e, t) {
  return new Ys(e, t);
}
var Zs = class {
    constructor() {
      ((this.changes = new La(
        (e) => e.toString(),
        (e, t) => e.isEqual(t),
      )),
        (this.changesApplied = !1));
    }
    addEntry(e) {
      (this.assertNotApplied(), this.changes.set(e.key, e));
    }
    removeEntry(e, t) {
      (this.assertNotApplied(),
        this.changes.set(e, Gi.newInvalidDocument(e).setReadTime(t)));
    }
    getEntry(e, t) {
      this.assertNotApplied();
      let n = this.changes.get(t);
      return n === void 0 ? this.getFromCache(e, t) : B.resolve(n);
    }
    getEntries(e, t) {
      return this.getAllFromCache(e, t);
    }
    apply(e) {
      return (
        this.assertNotApplied(),
        (this.changesApplied = !0),
        this.applyChanges(e)
      );
    }
    assertNotApplied() {}
  },
  Qs = class {
    constructor(e, t) {
      ((this.overlayedDocument = e), (this.mutatedFields = t));
    }
  },
  $s = class {
    constructor(e, t, n, r) {
      ((this.remoteDocumentCache = e),
        (this.mutationQueue = t),
        (this.documentOverlayCache = n),
        (this.indexManager = r));
    }
    getDocument(e, t) {
      let n = null;
      return this.documentOverlayCache
        .getOverlay(e, t)
        .next((r) => ((n = r), this.remoteDocumentCache.getEntry(e, t)))
        .next((e) => (n !== null && bo(n.mutation, e, ri.empty(), R.now()), e));
    }
    getDocuments(e, t) {
      return this.remoteDocumentCache
        .getEntries(e, t)
        .next((t) => this.getLocalViewOfDocuments(e, t, G()).next(() => t));
    }
    getLocalViewOfDocuments(e, t, n = G()) {
      let r = Ua();
      return this.populateOverlays(e, r, t).next(() =>
        this.computeViews(e, t, r, n).next((e) => {
          let t = Va();
          return (
            e.forEach((e, n) => {
              t = t.insert(e, n.overlayedDocument);
            }),
            t
          );
        }),
      );
    }
    getOverlayedDocuments(e, t) {
      let n = Ua();
      return this.populateOverlays(e, n, t).next(() =>
        this.computeViews(e, t, n, G()),
      );
    }
    populateOverlays(e, t, n) {
      let r = [];
      return (
        n.forEach((e) => {
          t.has(e) || r.push(e);
        }),
        this.documentOverlayCache.getOverlays(e, r).next((e) => {
          e.forEach((e, n) => {
            t.set(e, n);
          });
        })
      );
    }
    computeViews(e, t, n, r) {
      let i = za(),
        a = Ga(),
        o = (function () {
          return Ga();
        })();
      return (
        t.forEach((e, t) => {
          let o = n.get(t.key);
          r.has(t.key) && (o === void 0 || o.mutation instanceof wo)
            ? (i = i.insert(t.key, t))
            : o === void 0
              ? a.set(t.key, ri.empty())
              : (a.set(t.key, o.mutation.getFieldMask()),
                bo(o.mutation, t, o.mutation.getFieldMask(), R.now()));
        }),
        this.recalculateAndSaveOverlays(e, i).next(
          (e) => (
            e.forEach((e, t) => a.set(e, t)),
            t.forEach((e, t) => {
              var n;
              return o.set(e, new Qs(t, (n = a.get(e)) == null ? null : n));
            }),
            o
          ),
        )
      );
    }
    recalculateAndSaveOverlays(e, t) {
      let n = Ga(),
        r = new V((e, t) => e - t),
        i = G();
      return this.mutationQueue
        .getAllMutationBatchesAffectingDocumentKeys(e, t)
        .next((e) => {
          for (let i of e)
            i.keys().forEach((e) => {
              let a = t.get(e);
              if (a === null) return;
              let o = n.get(e) || ri.empty();
              ((o = i.applyToLocalView(a, o)), n.set(e, o));
              let s = (r.get(i.batchId) || G()).add(e);
              r = r.insert(i.batchId, s);
            });
        })
        .next(() => {
          let a = [],
            o = r.getReverseIterator();
          for (; o.hasNext();) {
            let r = o.getNext(),
              s = r.key,
              c = r.value,
              l = Wa();
            (c.forEach((e) => {
              if (!i.has(e)) {
                let r = vo(t.get(e), n.get(e));
                (r !== null && l.set(e, r), (i = i.add(e)));
              }
            }),
              a.push(this.documentOverlayCache.saveOverlays(e, s, l)));
          }
          return B.waitFor(a);
        })
        .next(() => n);
    }
    recalculateAndSaveOverlaysForDocumentKeys(e, t) {
      return this.remoteDocumentCache
        .getEntries(e, t)
        .next((t) => this.recalculateAndSaveOverlays(e, t));
    }
    getDocumentsMatchingQuery(e, t, n, r) {
      return Sa(t)
        ? this.getDocumentsMatchingDocumentQuery(e, t.path)
        : Ca(t)
          ? this.getDocumentsMatchingCollectionGroupQuery(e, t, n, r)
          : this.getDocumentsMatchingCollectionQuery(e, t, n, r);
    }
    getNextDocuments(e, t, n, r) {
      return this.remoteDocumentCache
        .getAllFromCollectionGroup(e, t, n, r)
        .next((i) => {
          let a =
              r - i.size > 0
                ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                    e,
                    t,
                    n.largestBatchId,
                    r - i.size,
                  )
                : B.resolve(Ua()),
            o = Ar,
            s = i;
          return a.next((t) =>
            B.forEach(
              t,
              (t, n) => (
                o < n.largestBatchId && (o = n.largestBatchId),
                i.get(t)
                  ? B.resolve()
                  : this.remoteDocumentCache.getEntry(e, t).next((e) => {
                      s = s.insert(t, e);
                    })
              ),
            )
              .next(() => this.populateOverlays(e, t, i))
              .next(() => this.computeViews(e, s, t, G()))
              .next((e) => ({ batchId: o, changes: Ha(e) })),
          );
        });
    }
    getDocumentsMatchingDocumentQuery(e, t) {
      return this.getDocument(e, new I(t)).next((e) => {
        let t = Va();
        return (e.isFoundDocument() && (t = t.insert(e.key, e)), t);
      });
    }
    getDocumentsMatchingCollectionGroupQuery(e, t, n, r) {
      let i = t.collectionGroup,
        a = Va();
      return this.indexManager.getCollectionParents(e, i).next((o) =>
        B.forEach(o, (o) => {
          let s = (function (e, t) {
            return new va(
              t,
              null,
              e.explicitOrderBy.slice(),
              e.filters.slice(),
              e.limit,
              e.limitType,
              e.startAt,
              e.endAt,
            );
          })(t, o.child(i));
          return this.getDocumentsMatchingCollectionQuery(e, s, n, r).next(
            (e) => {
              e.forEach((e, t) => {
                a = a.insert(e, t);
              });
            },
          );
        }).next(() => a),
      );
    }
    getDocumentsMatchingCollectionQuery(e, t, n, r) {
      let i;
      return this.documentOverlayCache
        .getOverlaysForCollection(e, t.path, n.largestBatchId)
        .next(
          (a) => (
            (i = a),
            this.remoteDocumentCache.getDocumentsMatchingQuery(e, t, n, i, r)
          ),
        )
        .next((e) => {
          i.forEach((t, n) => {
            let r = n.getKey();
            e.get(r) === null && (e = e.insert(r, Gi.newInvalidDocument(r)));
          });
          let n = Va();
          return (
            e.forEach((e, r) => {
              let a = i.get(e);
              (a !== void 0 && bo(a.mutation, r, ri.empty(), R.now()),
                Na(t, r) && (n = n.insert(e, r)));
            }),
            n
          );
        });
    }
  },
  ec = class {
    constructor(e) {
      ((this.serializer = e), (this.Nr = new Map()), (this.Br = new Map()));
    }
    getBundleMetadata(e, t) {
      return B.resolve(this.Nr.get(t));
    }
    saveBundleMetadata(e, t) {
      return (
        this.Nr.set(
          t.id,
          (function (e) {
            return {
              id: e.id,
              version: e.version,
              createTime: os(e.createTime),
            };
          })(t),
        ),
        B.resolve()
      );
    }
    getNamedQuery(e, t) {
      return B.resolve(this.Br.get(t));
    }
    saveNamedQuery(e, t) {
      return (
        this.Br.set(
          t.name,
          (function (e) {
            return {
              name: e.name,
              query: Is(e.bundledQuery),
              readTime: os(e.readTime),
            };
          })(t),
        ),
        B.resolve()
      );
    }
  },
  tc = class {
    constructor() {
      ((this.overlays = new V(I.comparator)), (this.Lr = new Map()));
    }
    getOverlay(e, t) {
      return B.resolve(this.overlays.get(t));
    }
    getOverlays(e, t) {
      let n = Ua();
      return B.forEach(t, (t) =>
        this.getOverlay(e, t).next((e) => {
          e !== null && n.set(t, e);
        }),
      ).next(() => n);
    }
    saveOverlays(e, t, n) {
      return (
        n.forEach((n, r) => {
          this.St(e, t, r);
        }),
        B.resolve()
      );
    }
    removeOverlaysForBatchId(e, t, n) {
      let r = this.Lr.get(n);
      return (
        r !== void 0 &&
          (r.forEach((e) => (this.overlays = this.overlays.remove(e))),
          this.Lr.delete(n)),
        B.resolve()
      );
    }
    getOverlaysForCollection(e, t, n) {
      let r = Ua(),
        i = t.length + 1,
        a = new I(t.child(``)),
        o = this.overlays.getIteratorFrom(a);
      for (; o.hasNext();) {
        let e = o.getNext().value,
          a = e.getKey();
        if (!t.isPrefixOf(a.path)) break;
        a.path.length === i && e.largestBatchId > n && r.set(e.getKey(), e);
      }
      return B.resolve(r);
    }
    getOverlaysForCollectionGroup(e, t, n, r) {
      let i = new V((e, t) => e - t),
        a = this.overlays.getIterator();
      for (; a.hasNext();) {
        let e = a.getNext().value;
        if (e.getKey().getCollectionGroup() === t && e.largestBatchId > n) {
          let t = i.get(e.largestBatchId);
          (t === null && ((t = Ua()), (i = i.insert(e.largestBatchId, t))),
            t.set(e.getKey(), e));
        }
      }
      let o = Ua(),
        s = i.getIterator();
      for (
        ;
        s.hasNext() &&
        (s.getNext().value.forEach((e, t) => o.set(e, t)), !(o.size() >= r));
      );
      return B.resolve(o);
    }
    St(e, t, n) {
      let r = this.overlays.get(n.key);
      if (r !== null) {
        let e = this.Lr.get(r.largestBatchId).delete(n.key);
        this.Lr.set(r.largestBatchId, e);
      }
      this.overlays = this.overlays.insert(n.key, new Mo(t, n));
      let i = this.Lr.get(t);
      (i === void 0 && ((i = G()), this.Lr.set(t, i)),
        this.Lr.set(t, i.add(n.key)));
    }
  },
  nc = class {
    constructor() {
      this.sessionToken = ai.EMPTY_BYTE_STRING;
    }
    getSessionToken(e) {
      return B.resolve(this.sessionToken);
    }
    setSessionToken(e, t) {
      return ((this.sessionToken = t), B.resolve());
    }
  },
  rc = class {
    constructor() {
      ((this.kr = new H(J.qr)), (this.Kr = new H(J.Ur)));
    }
    isEmpty() {
      return this.kr.isEmpty();
    }
    addReference(e, t) {
      let n = new J(e, t);
      ((this.kr = this.kr.add(n)), (this.Kr = this.Kr.add(n)));
    }
    $r(e, t) {
      e.forEach((e) => this.addReference(e, t));
    }
    removeReference(e, t) {
      this.Wr(new J(e, t));
    }
    Qr(e, t) {
      e.forEach((e) => this.removeReference(e, t));
    }
    Gr(e) {
      let t = new I(new F([])),
        n = new J(t, e),
        r = new J(t, e + 1),
        i = [];
      return (
        this.Kr.forEachInRange([n, r], (e) => {
          (this.Wr(e), i.push(e.key));
        }),
        i
      );
    }
    zr() {
      this.kr.forEach((e) => this.Wr(e));
    }
    Wr(e) {
      ((this.kr = this.kr.delete(e)), (this.Kr = this.Kr.delete(e)));
    }
    jr(e) {
      let t = new I(new F([])),
        n = new J(t, e),
        r = new J(t, e + 1),
        i = G();
      return (
        this.Kr.forEachInRange([n, r], (e) => {
          i = i.add(e.key);
        }),
        i
      );
    }
    containsKey(e) {
      let t = new J(e, 0),
        n = this.kr.firstAfterOrEqual(t);
      return n !== null && e.isEqual(n.key);
    }
  },
  J = class {
    constructor(e, t) {
      ((this.key = e), (this.Jr = t));
    }
    static qr(e, t) {
      return I.comparator(e.key, t.key) || P(e.Jr, t.Jr);
    }
    static Ur(e, t) {
      return P(e.Jr, t.Jr) || I.comparator(e.key, t.key);
    }
  },
  ic = class {
    constructor(e, t) {
      ((this.indexManager = e),
        (this.referenceDelegate = t),
        (this.mutationQueue = []),
        (this.Yn = 1),
        (this.Hr = new H(J.qr)));
    }
    checkEmpty(e) {
      return B.resolve(this.mutationQueue.length === 0);
    }
    addMutationBatch(e, t, n, r) {
      let i = this.Yn;
      (this.Yn++,
        this.mutationQueue.length > 0 &&
          this.mutationQueue[this.mutationQueue.length - 1]);
      let a = new Ao(i, t, n, r);
      this.mutationQueue.push(a);
      for (let t of r)
        ((this.Hr = this.Hr.add(new J(t.key, i))),
          this.indexManager.addToCollectionParentIndex(
            e,
            t.key.path.popLast(),
          ));
      return B.resolve(a);
    }
    lookupMutationBatch(e, t) {
      return B.resolve(this.Zr(t));
    }
    getNextMutationBatchAfterBatchId(e, t) {
      let n = t + 1,
        r = this.Xr(n),
        i = r < 0 ? 0 : r;
      return B.resolve(
        this.mutationQueue.length > i ? this.mutationQueue[i] : null,
      );
    }
    getHighestUnacknowledgedBatchId() {
      return B.resolve(this.mutationQueue.length === 0 ? Ur : this.Yn - 1);
    }
    getAllMutationBatches(e) {
      return B.resolve(this.mutationQueue.slice());
    }
    getAllMutationBatchesAffectingDocumentKey(e, t) {
      let n = new J(t, 0),
        r = new J(t, 1 / 0),
        i = [];
      return (
        this.Hr.forEachInRange([n, r], (e) => {
          let t = this.Zr(e.Jr);
          i.push(t);
        }),
        B.resolve(i)
      );
    }
    getAllMutationBatchesAffectingDocumentKeys(e, t) {
      let n = new H(P);
      return (
        t.forEach((e) => {
          let t = new J(e, 0),
            r = new J(e, 1 / 0);
          this.Hr.forEachInRange([t, r], (e) => {
            n = n.add(e.Jr);
          });
        }),
        B.resolve(this.Yr(n))
      );
    }
    getAllMutationBatchesAffectingQuery(e, t) {
      let n = t.path,
        r = n.length + 1,
        i = n;
      I.isDocumentKey(i) || (i = i.child(``));
      let a = new J(new I(i), 0),
        o = new H(P);
      return (
        this.Hr.forEachWhile((e) => {
          let t = e.key.path;
          return !!n.isPrefixOf(t) && (t.length === r && (o = o.add(e.Jr)), !0);
        }, a),
        B.resolve(this.Yr(o))
      );
    }
    Yr(e) {
      let t = [];
      return (
        e.forEach((e) => {
          let n = this.Zr(e);
          n !== null && t.push(n);
        }),
        t
      );
    }
    removeMutationBatch(e, t) {
      (A(this.ei(t.batchId, `removed`) === 0, 55003),
        this.mutationQueue.shift());
      let n = this.Hr;
      return B.forEach(t.mutations, (r) => {
        let i = new J(r.key, t.batchId);
        return (
          (n = n.delete(i)),
          this.referenceDelegate.markPotentiallyOrphaned(e, r.key)
        );
      }).next(() => {
        this.Hr = n;
      });
    }
    nr(e) {}
    containsKey(e, t) {
      let n = new J(t, 0),
        r = this.Hr.firstAfterOrEqual(n);
      return B.resolve(t.isEqual(r && r.key));
    }
    performConsistencyCheck(e) {
      return (this.mutationQueue.length, B.resolve());
    }
    ei(e, t) {
      return this.Xr(e);
    }
    Xr(e) {
      return this.mutationQueue.length === 0
        ? 0
        : e - this.mutationQueue[0].batchId;
    }
    Zr(e) {
      let t = this.Xr(e);
      return t < 0 || t >= this.mutationQueue.length
        ? null
        : this.mutationQueue[t];
    }
  },
  ac = class {
    constructor(e) {
      ((this.ti = e),
        (this.docs = (function () {
          return new V(I.comparator);
        })()),
        (this.size = 0));
    }
    setIndexManager(e) {
      this.indexManager = e;
    }
    addEntry(e, t) {
      let n = t.key,
        r = this.docs.get(n),
        i = r ? r.size : 0,
        a = this.ti(t);
      return (
        (this.docs = this.docs.insert(n, {
          document: t.mutableCopy(),
          size: a,
        })),
        (this.size += a - i),
        this.indexManager.addToCollectionParentIndex(e, n.path.popLast())
      );
    }
    removeEntry(e) {
      let t = this.docs.get(e);
      t && ((this.docs = this.docs.remove(e)), (this.size -= t.size));
    }
    getEntry(e, t) {
      let n = this.docs.get(t);
      return B.resolve(n ? n.document.mutableCopy() : Gi.newInvalidDocument(t));
    }
    getEntries(e, t) {
      let n = za();
      return (
        t.forEach((e) => {
          let t = this.docs.get(e);
          n = n.insert(
            e,
            t ? t.document.mutableCopy() : Gi.newInvalidDocument(e),
          );
        }),
        B.resolve(n)
      );
    }
    getDocumentsMatchingQuery(e, t, n, r) {
      let i = za(),
        a = t.path,
        o = new I(a.child(`__id-9223372036854775808__`)),
        s = this.docs.getIteratorFrom(o);
      for (; s.hasNext();) {
        let {
          key: e,
          value: { document: o },
        } = s.getNext();
        if (!a.isPrefixOf(e.path)) break;
        e.path.length > a.length + 1 ||
          Fr(Nr(o), n) <= 0 ||
          ((r.has(o.key) || Na(t, o)) &&
            (i = i.insert(o.key, o.mutableCopy())));
      }
      return B.resolve(i);
    }
    getAllFromCollectionGroup(e, t, n, r) {
      k(9500);
    }
    ni(e, t) {
      return B.forEach(this.docs, (e) => t(e));
    }
    newChangeBuffer(e) {
      return new oc(this);
    }
    getSize(e) {
      return B.resolve(this.size);
    }
  },
  oc = class extends Zs {
    constructor(e) {
      (super(), (this.Mr = e));
    }
    applyChanges(e) {
      let t = [];
      return (
        this.changes.forEach((n, r) => {
          r.isValidDocument()
            ? t.push(this.Mr.addEntry(e, r))
            : this.Mr.removeEntry(n);
        }),
        B.waitFor(t)
      );
    }
    getFromCache(e, t) {
      return this.Mr.getEntry(e, t);
    }
    getAllFromCache(e, t) {
      return this.Mr.getEntries(e, t);
    }
  },
  sc = class {
    constructor(e) {
      ((this.persistence = e),
        (this.ri = new La((e) => ha(e), ga)),
        (this.lastRemoteSnapshotVersion = z.min()),
        (this.highestTargetId = 0),
        (this.ii = 0),
        (this.si = new rc()),
        (this.targetCount = 0),
        (this.oi = Us._r()));
    }
    forEachTarget(e, t) {
      return (this.ri.forEach((e, n) => t(n)), B.resolve());
    }
    getLastRemoteSnapshotVersion(e) {
      return B.resolve(this.lastRemoteSnapshotVersion);
    }
    getHighestSequenceNumber(e) {
      return B.resolve(this.ii);
    }
    allocateTargetId(e) {
      return (
        (this.highestTargetId = this.oi.next()),
        B.resolve(this.highestTargetId)
      );
    }
    setTargetsMetadata(e, t, n) {
      return (
        n && (this.lastRemoteSnapshotVersion = n),
        t > this.ii && (this.ii = t),
        B.resolve()
      );
    }
    lr(e) {
      this.ri.set(e.target, e);
      let t = e.targetId;
      (t > this.highestTargetId &&
        ((this.oi = new Us(t)), (this.highestTargetId = t)),
        e.sequenceNumber > this.ii && (this.ii = e.sequenceNumber));
    }
    addTargetData(e, t) {
      return (this.lr(t), (this.targetCount += 1), B.resolve());
    }
    updateTargetData(e, t) {
      return (this.lr(t), B.resolve());
    }
    removeTargetData(e, t) {
      return (
        this.ri.delete(t.target),
        this.si.Gr(t.targetId),
        --this.targetCount,
        B.resolve()
      );
    }
    removeTargets(e, t, n) {
      let r = 0,
        i = [];
      return (
        this.ri.forEach((a, o) => {
          o.sequenceNumber <= t &&
            n.get(o.targetId) === null &&
            (this.ri.delete(a),
            i.push(this.removeMatchingKeysForTargetId(e, o.targetId)),
            r++);
        }),
        B.waitFor(i).next(() => r)
      );
    }
    getTargetCount(e) {
      return B.resolve(this.targetCount);
    }
    getTargetData(e, t) {
      let n = this.ri.get(t) || null;
      return B.resolve(n);
    }
    addMatchingKeys(e, t, n) {
      return (this.si.$r(t, n), B.resolve());
    }
    removeMatchingKeys(e, t, n) {
      this.si.Qr(t, n);
      let r = this.persistence.referenceDelegate,
        i = [];
      return (
        r &&
          t.forEach((t) => {
            i.push(r.markPotentiallyOrphaned(e, t));
          }),
        B.waitFor(i)
      );
    }
    removeMatchingKeysForTargetId(e, t) {
      return (this.si.Gr(t), B.resolve());
    }
    getMatchingKeysForTargetId(e, t) {
      let n = this.si.jr(t);
      return B.resolve(n);
    }
    containsKey(e, t) {
      return B.resolve(this.si.containsKey(t));
    }
  },
  cc = class {
    constructor(e, t) {
      ((this._i = {}),
        (this.overlays = {}),
        (this.ai = new Hr(0)),
        (this.ui = !1),
        (this.ui = !0),
        (this.ci = new nc()),
        (this.referenceDelegate = e(this)),
        (this.li = new sc(this)),
        (this.indexManager = new Rs()),
        (this.remoteDocumentCache = (function (e) {
          return new ac(e);
        })((e) => this.referenceDelegate.hi(e))),
        (this.serializer = new Fs(t)),
        (this.Pi = new ec(this.serializer)));
    }
    start() {
      return Promise.resolve();
    }
    shutdown() {
      return ((this.ui = !1), Promise.resolve());
    }
    get started() {
      return this.ui;
    }
    setDatabaseDeletedListener() {}
    setNetworkEnabled() {}
    getIndexManager(e) {
      return this.indexManager;
    }
    getDocumentOverlayCache(e) {
      let t = this.overlays[e.toKey()];
      return (t || ((t = new tc()), (this.overlays[e.toKey()] = t)), t);
    }
    getMutationQueue(e, t) {
      let n = this._i[e.toKey()];
      return (
        n ||
          ((n = new ic(t, this.referenceDelegate)), (this._i[e.toKey()] = n)),
        n
      );
    }
    getGlobalsCache() {
      return this.ci;
    }
    getTargetCache() {
      return this.li;
    }
    getRemoteDocumentCache() {
      return this.remoteDocumentCache;
    }
    getBundleCache() {
      return this.Pi;
    }
    runTransaction(e, t, n) {
      O(`MemoryPersistence`, `Starting transaction:`, e);
      let r = new lc(this.ai.next());
      return (
        this.referenceDelegate.Ti(),
        n(r)
          .next((e) => this.referenceDelegate.Ei(r).next(() => e))
          .toPromise()
          .then((e) => (r.raiseOnCommittedEvent(), e))
      );
    }
    Ii(e, t) {
      return B.or(Object.values(this._i).map((n) => () => n.containsKey(e, t)));
    }
  },
  lc = class extends Lr {
    constructor(e) {
      (super(), (this.currentSequenceNumber = e));
    }
  },
  uc = class e {
    constructor(e) {
      ((this.persistence = e), (this.Ri = new rc()), (this.Ai = null));
    }
    static Vi(t) {
      return new e(t);
    }
    get di() {
      if (this.Ai) return this.Ai;
      throw k(60996);
    }
    addReference(e, t, n) {
      return (
        this.Ri.addReference(n, t),
        this.di.delete(n.toString()),
        B.resolve()
      );
    }
    removeReference(e, t, n) {
      return (
        this.Ri.removeReference(n, t),
        this.di.add(n.toString()),
        B.resolve()
      );
    }
    markPotentiallyOrphaned(e, t) {
      return (this.di.add(t.toString()), B.resolve());
    }
    removeTarget(e, t) {
      this.Ri.Gr(t.targetId).forEach((e) => this.di.add(e.toString()));
      let n = this.persistence.getTargetCache();
      return n
        .getMatchingKeysForTargetId(e, t.targetId)
        .next((e) => {
          e.forEach((e) => this.di.add(e.toString()));
        })
        .next(() => n.removeTargetData(e, t));
    }
    Ti() {
      this.Ai = new Set();
    }
    Ei(e) {
      let t = this.persistence.getRemoteDocumentCache().newChangeBuffer();
      return B.forEach(this.di, (n) => {
        let r = I.fromPath(n);
        return this.mi(e, r).next((e) => {
          e || t.removeEntry(r, z.min());
        });
      }).next(() => ((this.Ai = null), t.apply(e)));
    }
    updateLimboDocument(e, t) {
      return this.mi(e, t).next((e) => {
        e ? this.di.delete(t.toString()) : this.di.add(t.toString());
      });
    }
    hi(e) {
      return 0;
    }
    mi(e, t) {
      return B.or([
        () => B.resolve(this.Ri.containsKey(t)),
        () => this.persistence.getTargetCache().containsKey(e, t),
        () => this.persistence.Ii(e, t),
      ]);
    }
  },
  dc = class e {
    constructor(e, t) {
      ((this.persistence = e),
        (this.fi = new La(
          (e) => Jr(e.path),
          (e, t) => e.isEqual(t),
        )),
        (this.garbageCollector = Xs(this, t)));
    }
    static Vi(t, n) {
      return new e(t, n);
    }
    Ti() {}
    Ei(e) {
      return B.resolve();
    }
    forEachTarget(e, t) {
      return this.persistence.getTargetCache().forEachTarget(e, t);
    }
    dr(e) {
      let t = this.pr(e);
      return this.persistence
        .getTargetCache()
        .getTargetCount(e)
        .next((e) => t.next((t) => e + t));
    }
    pr(e) {
      let t = 0;
      return this.mr(e, (e) => {
        t++;
      }).next(() => t);
    }
    mr(e, t) {
      return B.forEach(this.fi, (n, r) =>
        this.wr(e, n, r).next((e) => (e ? B.resolve() : t(r))),
      );
    }
    removeTargets(e, t, n) {
      return this.persistence.getTargetCache().removeTargets(e, t, n);
    }
    removeOrphanedDocuments(e, t) {
      let n = 0,
        r = this.persistence.getRemoteDocumentCache(),
        i = r.newChangeBuffer();
      return r
        .ni(e, (r) =>
          this.wr(e, r, t).next((e) => {
            e || (n++, i.removeEntry(r, z.min()));
          }),
        )
        .next(() => i.apply(e))
        .next(() => n);
    }
    markPotentiallyOrphaned(e, t) {
      return (this.fi.set(t, e.currentSequenceNumber), B.resolve());
    }
    removeTarget(e, t) {
      let n = t.withSequenceNumber(e.currentSequenceNumber);
      return this.persistence.getTargetCache().updateTargetData(e, n);
    }
    addReference(e, t, n) {
      return (this.fi.set(n, e.currentSequenceNumber), B.resolve());
    }
    removeReference(e, t, n) {
      return (this.fi.set(n, e.currentSequenceNumber), B.resolve());
    }
    updateLimboDocument(e, t) {
      return (this.fi.set(t, e.currentSequenceNumber), B.resolve());
    }
    hi(e) {
      let t = e.key.toString().length;
      return (e.isFoundDocument() && (t += Ni(e.data.value)), t);
    }
    wr(e, t, n) {
      return B.or([
        () => this.persistence.Ii(e, t),
        () => this.persistence.getTargetCache().containsKey(e, t),
        () => {
          let e = this.fi.get(t);
          return B.resolve(e !== void 0 && e > n);
        },
      ]);
    }
    getCacheSize(e) {
      return this.persistence.getRemoteDocumentCache().getSize(e);
    }
  },
  fc = class e {
    constructor(e, t, n, r) {
      ((this.targetId = e), (this.fromCache = t), (this.Ts = n), (this.Es = r));
    }
    static Is(t, n) {
      let r = G(),
        i = G();
      for (let e of n.docChanges)
        switch (e.type) {
          case 0:
            r = r.add(e.doc.key);
            break;
          case 1:
            i = i.add(e.doc.key);
        }
      return new e(t, n.fromCache, r, i);
    }
  },
  pc = class {
    constructor() {
      this._documentReadCount = 0;
    }
    get documentReadCount() {
      return this._documentReadCount;
    }
    incrementDocumentReadCount(e) {
      this._documentReadCount += e;
    }
  },
  mc = class {
    constructor() {
      ((this.Rs = !1),
        (this.As = !1),
        (this.Vs = 100),
        (this.ds = (function () {
          return Se() ? 8 : Br(y()) > 0 ? 6 : 4;
        })()));
    }
    initialize(e, t) {
      ((this.fs = e), (this.indexManager = t), (this.Rs = !0));
    }
    getDocumentsMatchingQuery(e, t, n, r) {
      let i = { result: null };
      return this.gs(e, t)
        .next((e) => {
          i.result = e;
        })
        .next(() => {
          if (!i.result)
            return this.ps(e, t, r, n).next((e) => {
              i.result = e;
            });
        })
        .next(() => {
          if (i.result) return;
          let n = new pc();
          return this.ys(e, t, n).next((r) => {
            if (((i.result = r), this.As)) return this.ws(e, t, n, r.size);
          });
        })
        .next(() => i.result);
    }
    ws(e, t, n, r) {
      return n.documentReadCount < this.Vs
        ? (Yn() <= C.DEBUG &&
            O(
              `QueryEngine`,
              `SDK will not create cache indexes for query:`,
              Ma(t),
              `since it only creates cache indexes for collection contains`,
              `more than or equal to`,
              this.Vs,
              `documents`,
            ),
          B.resolve())
        : (Yn() <= C.DEBUG &&
            O(
              `QueryEngine`,
              `Query:`,
              Ma(t),
              `scans`,
              n.documentReadCount,
              `local documents and returns`,
              r,
              `documents as results.`,
            ),
          n.documentReadCount > this.ds * r
            ? (Yn() <= C.DEBUG &&
                O(
                  `QueryEngine`,
                  `The SDK decides to create cache indexes for query:`,
                  Ma(t),
                  `as using cache indexes may help improve performance.`,
                ),
              this.indexManager.createTargetIndexes(e, Ta(t)))
            : B.resolve());
    }
    gs(e, t) {
      if (xa(t)) return B.resolve(null);
      let n = Ta(t);
      return this.indexManager.getIndexType(e, n).next((r) =>
        r === 0
          ? null
          : (t.limit !== null &&
              r === 1 &&
              ((t = ka(t, null, `F`)), (n = Ta(t))),
            this.indexManager.getDocumentsMatchingTarget(e, n).next((r) => {
              let i = G(...r);
              return this.fs.getDocuments(e, i).next((r) =>
                this.indexManager.getMinOffset(e, n).next((n) => {
                  let a = this.Ss(t, r);
                  return this.bs(t, a, i, n.readTime)
                    ? this.gs(e, ka(t, null, `F`))
                    : this.Ds(e, a, t, n);
                }),
              );
            })),
      );
    }
    ps(e, t, n, r) {
      return xa(t) || r.isEqual(z.min())
        ? B.resolve(null)
        : this.fs.getDocuments(e, n).next((i) => {
            let a = this.Ss(t, i);
            return this.bs(t, a, n, r)
              ? B.resolve(null)
              : (Yn() <= C.DEBUG &&
                  O(
                    `QueryEngine`,
                    `Re-using previous result from %s to execute query: %s`,
                    r.toString(),
                    Ma(t),
                  ),
                this.Ds(e, a, t, Mr(r, Ar)).next((e) => e));
          });
    }
    Ss(e, t) {
      let n = new H(Fa(e));
      return (
        t.forEach((t, r) => {
          Na(e, r) && (n = n.add(r));
        }),
        n
      );
    }
    bs(e, t, n, r) {
      if (e.limit === null) return !1;
      if (n.size !== t.size) return !0;
      let i = e.limitType === `F` ? t.last() : t.first();
      return !!i && (i.hasPendingWrites || i.version.compareTo(r) > 0);
    }
    ys(e, t, n) {
      return (
        Yn() <= C.DEBUG &&
          O(
            `QueryEngine`,
            `Using full collection scan to execute query:`,
            Ma(t),
          ),
        this.fs.getDocumentsMatchingQuery(e, t, Pr.min(), n)
      );
    }
    Ds(e, t, n, r) {
      return this.fs.getDocumentsMatchingQuery(e, n, r).next(
        (e) => (
          t.forEach((t) => {
            e = e.insert(t.key, t);
          }),
          e
        ),
      );
    }
  },
  hc = `LocalStore`,
  gc = 3e8,
  _c = class {
    constructor(e, t, n, r) {
      ((this.persistence = e),
        (this.Cs = t),
        (this.serializer = r),
        (this.vs = new V(P)),
        (this.Fs = new La((e) => ha(e), ga)),
        (this.Ms = new Map()),
        (this.xs = e.getRemoteDocumentCache()),
        (this.li = e.getTargetCache()),
        (this.Pi = e.getBundleCache()),
        this.Os(n));
    }
    Os(e) {
      ((this.documentOverlayCache =
        this.persistence.getDocumentOverlayCache(e)),
        (this.indexManager = this.persistence.getIndexManager(e)),
        (this.mutationQueue = this.persistence.getMutationQueue(
          e,
          this.indexManager,
        )),
        (this.localDocuments = new $s(
          this.xs,
          this.mutationQueue,
          this.documentOverlayCache,
          this.indexManager,
        )),
        this.xs.setIndexManager(this.indexManager),
        this.Cs.initialize(this.localDocuments, this.indexManager));
    }
    collectGarbage(e) {
      return this.persistence.runTransaction(
        `Collect garbage`,
        `readwrite-primary`,
        (t) => e.collect(t, this.vs),
      );
    }
  };
function vc(e, t, n, r) {
  return new _c(e, t, n, r);
}
function yc(e, t) {
  return bc.apply(this, arguments);
}
function bc() {
  return (
    (bc = p(function* (e, t) {
      let n = j(e);
      return yield n.persistence.runTransaction(
        `Handle user change`,
        `readonly`,
        (e) => {
          let r;
          return n.mutationQueue
            .getAllMutationBatches(e)
            .next(
              (i) => (
                (r = i),
                n.Os(t),
                n.mutationQueue.getAllMutationBatches(e)
              ),
            )
            .next((t) => {
              let i = [],
                a = [],
                o = G();
              for (let e of r) {
                i.push(e.batchId);
                for (let t of e.mutations) o = o.add(t.key);
              }
              for (let e of t) {
                a.push(e.batchId);
                for (let t of e.mutations) o = o.add(t.key);
              }
              return n.localDocuments
                .getDocuments(e, o)
                .next((e) => ({ Ns: e, removedBatchIds: i, addedBatchIds: a }));
            });
        },
      );
    })),
    bc.apply(this, arguments)
  );
}
function xc(e, t) {
  let n = j(e);
  return n.persistence.runTransaction(
    `Acknowledge batch`,
    `readwrite-primary`,
    (e) => {
      let r = t.batch.keys(),
        i = n.xs.newChangeBuffer({ trackRemovals: !0 });
      return (function (e, t, n, r) {
        let i = n.batch,
          a = i.keys(),
          o = B.resolve();
        return (
          a.forEach((e) => {
            o = o
              .next(() => r.getEntry(t, e))
              .next((t) => {
                let a = n.docVersions.get(e);
                (A(a !== null, 48541),
                  t.version.compareTo(a) < 0 &&
                    (i.applyToRemoteDocument(t, n),
                    t.isValidDocument() &&
                      (t.setReadTime(n.commitVersion), r.addEntry(t))));
              });
          }),
          o.next(() => e.mutationQueue.removeMutationBatch(t, i))
        );
      })(n, e, t, i)
        .next(() => i.apply(e))
        .next(() => n.mutationQueue.performConsistencyCheck(e))
        .next(() =>
          n.documentOverlayCache.removeOverlaysForBatchId(
            e,
            r,
            t.batch.batchId,
          ),
        )
        .next(() =>
          n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
            e,
            (function (e) {
              let t = G();
              for (let n = 0; n < e.mutationResults.length; ++n)
                e.mutationResults[n].transformResults.length > 0 &&
                  (t = t.add(e.batch.mutations[n].key));
              return t;
            })(t),
          ),
        )
        .next(() => n.localDocuments.getDocuments(e, r));
    },
  );
}
function Sc(e) {
  let t = j(e);
  return t.persistence.runTransaction(
    `Get last remote snapshot version`,
    `readonly`,
    (e) => t.li.getLastRemoteSnapshotVersion(e),
  );
}
function Cc(e, t) {
  let n = j(e),
    r = t.snapshotVersion,
    i = n.vs;
  return n.persistence
    .runTransaction(`Apply remote event`, `readwrite-primary`, (e) => {
      let a = n.xs.newChangeBuffer({ trackRemovals: !0 });
      i = n.vs;
      let o = [];
      t.targetChanges.forEach((a, s) => {
        let c = i.get(s);
        if (!c) return;
        o.push(
          n.li
            .removeMatchingKeys(e, a.removedDocuments, s)
            .next(() => n.li.addMatchingKeys(e, a.addedDocuments, s)),
        );
        let l = c.withSequenceNumber(e.currentSequenceNumber);
        (t.targetMismatches.get(s) === null
          ? a.resumeToken.approximateByteSize() > 0 &&
            (l = l.withResumeToken(a.resumeToken, r))
          : (l = l
              .withResumeToken(ai.EMPTY_BYTE_STRING, z.min())
              .withLastLimboFreeSnapshotVersion(z.min())),
          (i = i.insert(s, l)),
          (function (e, t, n) {
            return e.resumeToken.approximateByteSize() === 0 ||
              t.snapshotVersion.toMicroseconds() -
                e.snapshotVersion.toMicroseconds() >=
                gc
              ? !0
              : n.addedDocuments.size +
                  n.modifiedDocuments.size +
                  n.removedDocuments.size >
                  0;
          })(c, l, a) && o.push(n.li.updateTargetData(e, l)));
      });
      let s = za(),
        c = G();
      if (
        (t.documentUpdates.forEach((r) => {
          t.resolvedLimboDocuments.has(r) &&
            o.push(n.persistence.referenceDelegate.updateLimboDocument(e, r));
        }),
        o.push(
          wc(e, a, t.documentUpdates).next((e) => {
            ((s = e.Bs), (c = e.Ls));
          }),
        ),
        !r.isEqual(z.min()))
      ) {
        let t = n.li
          .getLastRemoteSnapshotVersion(e)
          .next((t) => n.li.setTargetsMetadata(e, e.currentSequenceNumber, r));
        o.push(t);
      }
      return B.waitFor(o)
        .next(() => a.apply(e))
        .next(() => n.localDocuments.getLocalViewOfDocuments(e, s, c))
        .next(() => s);
    })
    .then((e) => ((n.vs = i), e));
}
function wc(e, t, n) {
  let r = G(),
    i = G();
  return (
    n.forEach((e) => (r = r.add(e))),
    t.getEntries(e, r).next((e) => {
      let r = za();
      return (
        n.forEach((n, a) => {
          let o = e.get(n);
          (a.isFoundDocument() !== o.isFoundDocument() && (i = i.add(n)),
            a.isNoDocument() && a.version.isEqual(z.min())
              ? (t.removeEntry(n, a.readTime), (r = r.insert(n, a)))
              : !o.isValidDocument() ||
                  a.version.compareTo(o.version) > 0 ||
                  (a.version.compareTo(o.version) === 0 && o.hasPendingWrites)
                ? (t.addEntry(a), (r = r.insert(n, a)))
                : O(
                    hc,
                    `Ignoring outdated watch update for `,
                    n,
                    `. Current version:`,
                    o.version,
                    ` Watch version:`,
                    a.version,
                  ));
        }),
        { Bs: r, Ls: i }
      );
    })
  );
}
function Tc(e, t) {
  let n = j(e);
  return n.persistence.runTransaction(
    `Get next mutation batch`,
    `readonly`,
    (e) => (
      t === void 0 && (t = Ur),
      n.mutationQueue.getNextMutationBatchAfterBatchId(e, t)
    ),
  );
}
function Ec(e, t) {
  let n = j(e);
  return n.persistence
    .runTransaction(`Allocate target`, `readwrite`, (e) => {
      let r;
      return n.li
        .getTargetData(e, t)
        .next((i) =>
          i
            ? ((r = i), B.resolve(r))
            : n.li
                .allocateTargetId(e)
                .next(
                  (i) => (
                    (r = new Ps(
                      t,
                      i,
                      `TargetPurposeListen`,
                      e.currentSequenceNumber,
                    )),
                    n.li.addTargetData(e, r).next(() => r)
                  ),
                ),
        );
    })
    .then((e) => {
      let r = n.vs.get(e.targetId);
      return (
        (r === null || e.snapshotVersion.compareTo(r.snapshotVersion) > 0) &&
          ((n.vs = n.vs.insert(e.targetId, e)), n.Fs.set(t, e.targetId)),
        e
      );
    });
}
function Dc(e, t, n) {
  return Oc.apply(this, arguments);
}
function Oc() {
  return (
    (Oc = p(function* (e, t, n) {
      let r = j(e),
        i = r.vs.get(t),
        a = n ? `readwrite` : `readwrite-primary`;
      try {
        n ||
          (yield r.persistence.runTransaction(`Release target`, a, (e) =>
            r.persistence.referenceDelegate.removeTarget(e, i),
          ));
      } catch (e) {
        if (!Vr(e)) throw e;
        O(hc, `Failed to update sequence numbers for target ${t}: ${e}`);
      }
      ((r.vs = r.vs.remove(t)), r.Fs.delete(i.target));
    })),
    Oc.apply(this, arguments)
  );
}
function kc(e, t, n) {
  let r = j(e),
    i = z.min(),
    a = G();
  return r.persistence.runTransaction(`Execute query`, `readwrite`, (e) =>
    (function (e, t, n) {
      let r = j(e),
        i = r.Fs.get(n);
      return i === void 0 ? r.li.getTargetData(t, n) : B.resolve(r.vs.get(i));
    })(r, e, Ta(t))
      .next((t) => {
        if (t)
          return (
            (i = t.lastLimboFreeSnapshotVersion),
            r.li.getMatchingKeysForTargetId(e, t.targetId).next((e) => {
              a = e;
            })
          );
      })
      .next(() =>
        r.Cs.getDocumentsMatchingQuery(e, t, n ? i : z.min(), n ? a : G()),
      )
      .next((e) => (Ac(r, Pa(t), e), { documents: e, ks: a })),
  );
}
function Ac(e, t, n) {
  let r = e.Ms.get(t) || z.min();
  (n.forEach((e, t) => {
    t.readTime.compareTo(r) > 0 && (r = t.readTime);
  }),
    e.Ms.set(t, r));
}
var jc = class {
    constructor() {
      this.activeTargetIds = Ya();
    }
    Qs(e) {
      this.activeTargetIds = this.activeTargetIds.add(e);
    }
    Gs(e) {
      this.activeTargetIds = this.activeTargetIds.delete(e);
    }
    Ws() {
      let e = {
        activeTargetIds: this.activeTargetIds.toArray(),
        updateTimeMs: Date.now(),
      };
      return JSON.stringify(e);
    }
  },
  Mc = class {
    constructor() {
      ((this.vo = new jc()),
        (this.Fo = {}),
        (this.onlineStateHandler = null),
        (this.sequenceNumberHandler = null));
    }
    addPendingMutation(e) {}
    updateMutationState(e, t, n) {}
    addLocalQueryTarget(e, t = !0) {
      return (t && this.vo.Qs(e), this.Fo[e] || `not-current`);
    }
    updateQueryState(e, t, n) {
      this.Fo[e] = t;
    }
    removeLocalQueryTarget(e) {
      this.vo.Gs(e);
    }
    isLocalQueryTarget(e) {
      return this.vo.activeTargetIds.has(e);
    }
    clearQueryState(e) {
      delete this.Fo[e];
    }
    getAllActiveQueryTargets() {
      return this.vo.activeTargetIds;
    }
    isActiveQueryTarget(e) {
      return this.vo.activeTargetIds.has(e);
    }
    start() {
      return ((this.vo = new jc()), Promise.resolve());
    }
    handleUserChange(e, t, n) {}
    setOnlineState(e) {}
    shutdown() {}
    writeSequenceNumber(e) {}
    notifyBundleLoaded(e) {}
  },
  Nc = class {
    Mo(e) {}
    shutdown() {}
  },
  Pc = `ConnectivityMonitor`,
  Fc = class {
    constructor() {
      ((this.xo = () => this.Oo()),
        (this.No = () => this.Bo()),
        (this.Lo = []),
        this.ko());
    }
    Mo(e) {
      this.Lo.push(e);
    }
    shutdown() {
      (window.removeEventListener(`online`, this.xo),
        window.removeEventListener(`offline`, this.No));
    }
    ko() {
      (window.addEventListener(`online`, this.xo),
        window.addEventListener(`offline`, this.No));
    }
    Oo() {
      O(Pc, `Network connectivity changed: AVAILABLE`);
      for (let e of this.Lo) e(0);
    }
    Bo() {
      O(Pc, `Network connectivity changed: UNAVAILABLE`);
      for (let e of this.Lo) e(1);
    }
    static v() {
      return (
        typeof window < `u` &&
        window.addEventListener !== void 0 &&
        window.removeEventListener !== void 0
      );
    }
  },
  Ic = null;
function Lc() {
  return (
    Ic === null
      ? (Ic = (function () {
          return 268435456 + Math.round(2147483648 * Math.random());
        })())
      : Ic++,
    `0x` + Ic.toString(16)
  );
}
var Rc = `RestConnection`,
  zc = {
    BatchGetDocuments: `batchGet`,
    Commit: `commit`,
    RunQuery: `runQuery`,
    RunAggregationQuery: `runAggregationQuery`,
    ExecutePipeline: `executePipeline`,
  },
  Bc = class {
    get qo() {
      return !1;
    }
    constructor(e) {
      ((this.databaseInfo = e), (this.databaseId = e.databaseId));
      let t = e.ssl ? `https` : `http`,
        n = encodeURIComponent(this.databaseId.projectId),
        r = encodeURIComponent(this.databaseId.database);
      ((this.Ko = t + `://` + e.host),
        (this.Uo = `projects/${n}/databases/${r}`),
        (this.$o =
          this.databaseId.database === _i
            ? `project_id=${n}`
            : `project_id=${n}&database_id=${r}`));
    }
    Wo(e, t, n, r, i) {
      let a = Lc(),
        o = this.Qo(e, t.toUriEncodedString());
      O(Rc, `Sending RPC '${e}' ${a}:`, o, n);
      let s = {
        "google-cloud-resource-prefix": this.Uo,
        "x-goog-request-params": this.$o,
      };
      this.Go(s, r, i);
      let { host: c } = new URL(o),
        l = Re(c);
      return this.zo(e, o, s, n, l).then(
        (t) => (O(Rc, `Received RPC '${e}' ${a}: `, t), t),
        (t) => {
          throw (
            Zn(
              Rc,
              `RPC '${e}' ${a} failed with error: `,
              t,
              `url: `,
              o,
              `request:`,
              n,
            ),
            t
          );
        },
      );
    }
    jo(e, t, n, r, i, a) {
      return this.Wo(e, t, n, r, i);
    }
    Go(e, t, n) {
      ((e[`X-Goog-Api-Client`] = (function () {
        return `gl-js/ fire/` + Kn;
      })()),
        (e[`Content-Type`] = `text/plain`),
        this.databaseInfo.appId &&
          (e[`X-Firebase-GMPID`] = this.databaseInfo.appId),
        t && t.headers.forEach((t, n) => (e[n] = t)),
        n && n.headers.forEach((t, n) => (e[n] = t)));
    }
    Qo(e, t) {
      let n = zc[e],
        r = `${this.Ko}/v1/${t}:${n}`;
      return (
        this.databaseInfo.apiKey &&
          (r = `${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),
        r
      );
    }
    terminate() {}
  },
  Vc = class {
    constructor(e) {
      ((this.Jo = e.Jo), (this.Ho = e.Ho));
    }
    Zo(e) {
      this.Xo = e;
    }
    Yo(e) {
      this.e_ = e;
    }
    t_(e) {
      this.n_ = e;
    }
    onMessage(e) {
      this.r_ = e;
    }
    close() {
      this.Ho();
    }
    send(e) {
      this.Jo(e);
    }
    i_() {
      this.Xo();
    }
    s_() {
      this.e_();
    }
    o_(e) {
      this.n_(e);
    }
    __(e) {
      this.r_(e);
    }
  },
  Y = `WebChannelConnection`,
  Hc = (e, t, n) => {
    e.listen(t, (e) => {
      try {
        n(e);
      } catch (e) {
        setTimeout(() => {
          throw e;
        }, 0);
      }
    });
  },
  Uc = class e extends Bc {
    constructor(e) {
      (super(e),
        (this.a_ = []),
        (this.forceLongPolling = e.forceLongPolling),
        (this.autoDetectLongPolling = e.autoDetectLongPolling),
        (this.useFetchStreams = e.useFetchStreams),
        (this.longPollingOptions = e.longPollingOptions));
    }
    static u_() {
      e.c_ ||
        (Hc(Wn(), Un.STAT_EVENT, (e) => {
          e.stat === Hn.PROXY
            ? O(Y, `STAT_EVENT: detected buffering proxy`)
            : e.stat === Hn.NOPROXY &&
              O(Y, `STAT_EVENT: detected no buffering proxy`);
        }),
        (e.c_ = !0));
    }
    zo(e, t, n, r, i) {
      let a = Lc();
      return new Promise((i, o) => {
        let s = new Rn();
        (s.setWithCredentials(!0),
          s.listenOnce(Bn.COMPLETE, () => {
            try {
              switch (s.getLastErrorCode()) {
                case Vn.NO_ERROR:
                  let t = s.getResponseJson();
                  (O(Y, `XHR for RPC '${e}' ${a} received:`, JSON.stringify(t)),
                    i(t));
                  break;
                case Vn.TIMEOUT:
                  (O(Y, `RPC '${e}' ${a} timed out`),
                    o(new N(M.DEADLINE_EXCEEDED, `Request time out`)));
                  break;
                case Vn.HTTP_ERROR:
                  let n = s.getStatus();
                  if (
                    (O(
                      Y,
                      `RPC '${e}' ${a} failed with status:`,
                      n,
                      `response text:`,
                      s.getResponseText(),
                    ),
                    n > 0)
                  ) {
                    let e = s.getResponseJson();
                    Array.isArray(e) && (e = e[0]);
                    let t = e == null ? void 0 : e.error;
                    t && t.status && t.message
                      ? o(
                          new N(
                            (function (e) {
                              let t = e.toLowerCase().replace(/_/g, `-`);
                              return Object.values(M).indexOf(t) >= 0
                                ? t
                                : M.UNKNOWN;
                            })(t.status),
                            t.message,
                          ),
                        )
                      : o(
                          new N(
                            M.UNKNOWN,
                            `Server responded with status ` + s.getStatus(),
                          ),
                        );
                  } else o(new N(M.UNAVAILABLE, `Connection failed.`));
                  break;
                default:
                  k(9055, {
                    l_: e,
                    streamId: a,
                    h_: s.getLastErrorCode(),
                    P_: s.getLastError(),
                  });
              }
            } finally {
              O(Y, `RPC '${e}' ${a} completed.`);
            }
          }));
        let c = JSON.stringify(r);
        (O(Y, `RPC '${e}' ${a} sending request:`, r),
          s.send(t, `POST`, c, n, 15));
      });
    }
    T_(t, n, r) {
      let i = Lc(),
        a = [this.Ko, `/`, `google.firestore.v1.Firestore`, `/`, t, `/channel`],
        o = this.createWebChannelTransport(),
        s = {
          httpSessionIdParam: `gsessionid`,
          initMessageHeaders: {},
          messageUrlParams: {
            database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
          },
          sendRawJson: !0,
          supportsCrossDomainXhr: !0,
          internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
          forceLongPolling: this.forceLongPolling,
          detectBufferingProxy: this.autoDetectLongPolling,
        },
        c = this.longPollingOptions.timeoutSeconds;
      (c !== void 0 && (s.longPollingTimeout = Math.round(1e3 * c)),
        this.useFetchStreams && (s.useFetchStreams = !0),
        this.Go(s.initMessageHeaders, n, r),
        (s.encodeInitMessageHeaders = !0));
      let l = a.join(``);
      O(Y, `Creating RPC '${t}' stream ${i}: ${l}`, s);
      let u = o.createWebChannel(l, s);
      this.E_(u);
      let d = !1,
        f = !1,
        p = new Vc({
          Jo: (e) => {
            f
              ? O(Y, `Not sending because RPC '${t}' stream ${i} is closed:`, e)
              : (d ||
                  (O(Y, `Opening RPC '${t}' stream ${i} transport.`),
                  u.open(),
                  (d = !0)),
                O(Y, `RPC '${t}' stream ${i} sending:`, e),
                u.send(e));
          },
          Ho: () => u.close(),
        });
      return (
        Hc(u, zn.EventType.OPEN, () => {
          f || (O(Y, `RPC '${t}' stream ${i} transport opened.`), p.i_());
        }),
        Hc(u, zn.EventType.CLOSE, () => {
          f ||
            ((f = !0),
            O(Y, `RPC '${t}' stream ${i} transport closed`),
            p.o_(),
            this.I_(u));
        }),
        Hc(u, zn.EventType.ERROR, (e) => {
          f ||
            ((f = !0),
            Zn(
              Y,
              `RPC '${t}' stream ${i} transport errored. Name:`,
              e.name,
              `Message:`,
              e.message,
            ),
            p.o_(new N(M.UNAVAILABLE, `The operation could not be completed`)));
        }),
        Hc(u, zn.EventType.MESSAGE, (e) => {
          if (!f) {
            var n;
            let r = e.data[0];
            A(!!r, 16349);
            let a = r,
              o =
                (a == null ? void 0 : a.error) ||
                ((n = a[0]) == null ? void 0 : n.error);
            if (o) {
              O(Y, `RPC '${t}' stream ${i} received error:`, o);
              let e = o.status,
                n = (function (e) {
                  let t = K[e];
                  if (t !== void 0) return Fo(t);
                })(e),
                r = o.message;
              (e === `NOT_FOUND` &&
                r.includes(`database`) &&
                r.includes(`does not exist`) &&
                r.includes(this.databaseId.database) &&
                Zn(
                  `Database '${this.databaseId.database}' not found. Please check your project configuration.`,
                ),
                n === void 0 &&
                  ((n = M.INTERNAL),
                  (r =
                    `Unknown error status: ` +
                    e +
                    ` with message ` +
                    o.message)),
                (f = !0),
                p.o_(new N(n, r)),
                u.close());
            } else (O(Y, `RPC '${t}' stream ${i} received:`, r), p.__(r));
          }
        }),
        e.u_(),
        setTimeout(() => {
          p.s_();
        }, 0),
        p
      );
    }
    terminate() {
      (this.a_.forEach((e) => e.close()), (this.a_ = []));
    }
    E_(e) {
      this.a_.push(e);
    }
    I_(e) {
      this.a_ = this.a_.filter((t) => t === e);
    }
    Go(e, t, n) {
      (super.Go(e, t, n),
        this.databaseInfo.apiKey &&
          (e[`x-goog-api-key`] = this.databaseInfo.apiKey));
    }
    createWebChannelTransport() {
      return Gn();
    }
  };
function Wc(e) {
  return new Uc(e);
}
function Gc() {
  return typeof document < `u` ? document : null;
}
function Kc(e) {
  return new ts(e, !0);
}
Uc.c_ = !1;
var qc = class {
    constructor(e, t, n = 1e3, r = 1.5, i = 6e4) {
      ((this.Ci = e),
        (this.timerId = t),
        (this.R_ = n),
        (this.A_ = r),
        (this.V_ = i),
        (this.d_ = 0),
        (this.m_ = null),
        (this.f_ = Date.now()),
        this.reset());
    }
    reset() {
      this.d_ = 0;
    }
    g_() {
      this.d_ = this.V_;
    }
    p_(e) {
      this.cancel();
      let t = Math.floor(this.d_ + this.y_()),
        n = Math.max(0, Date.now() - this.f_),
        r = Math.max(0, t - n);
      (r > 0 &&
        O(
          `ExponentialBackoff`,
          `Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`,
        ),
        (this.m_ = this.Ci.enqueueAfterDelay(
          this.timerId,
          r,
          () => ((this.f_ = Date.now()), e()),
        )),
        (this.d_ *= this.A_),
        this.d_ < this.R_ && (this.d_ = this.R_),
        this.d_ > this.V_ && (this.d_ = this.V_));
    }
    w_() {
      this.m_ !== null && (this.m_.skipDelay(), (this.m_ = null));
    }
    cancel() {
      this.m_ !== null && (this.m_.cancel(), (this.m_ = null));
    }
    y_() {
      return (Math.random() - 0.5) * this.d_;
    }
  },
  Jc = `PersistentStream`,
  Yc = class {
    constructor(e, t, n, r, i, a, o, s) {
      ((this.Ci = e),
        (this.S_ = n),
        (this.b_ = r),
        (this.connection = i),
        (this.authCredentialsProvider = a),
        (this.appCheckCredentialsProvider = o),
        (this.listener = s),
        (this.state = 0),
        (this.D_ = 0),
        (this.C_ = null),
        (this.v_ = null),
        (this.stream = null),
        (this.F_ = 0),
        (this.M_ = new qc(e, t)));
    }
    x_() {
      return this.state === 1 || this.state === 5 || this.O_();
    }
    O_() {
      return this.state === 2 || this.state === 3;
    }
    start() {
      ((this.F_ = 0), this.state === 4 ? this.N_() : this.auth());
    }
    stop() {
      var e = this;
      return p(function* () {
        e.x_() && (yield e.close(0));
      })();
    }
    B_() {
      ((this.state = 0), this.M_.reset());
    }
    L_() {
      this.O_() &&
        this.C_ === null &&
        (this.C_ = this.Ci.enqueueAfterDelay(this.S_, 6e4, () => this.k_()));
    }
    q_(e) {
      (this.K_(), this.stream.send(e));
    }
    k_() {
      var e = this;
      return p(function* () {
        if (e.O_()) return e.close(0);
      })();
    }
    K_() {
      this.C_ && (this.C_.cancel(), (this.C_ = null));
    }
    U_() {
      this.v_ && (this.v_.cancel(), (this.v_ = null));
    }
    close(e, t) {
      var n = this;
      return p(function* () {
        (n.K_(),
          n.U_(),
          n.M_.cancel(),
          n.D_++,
          e === 4
            ? t && t.code === M.RESOURCE_EXHAUSTED
              ? (Xn(t.toString()),
                Xn(
                  `Using maximum backoff delay to prevent overloading the backend.`,
                ),
                n.M_.g_())
              : t &&
                t.code === M.UNAUTHENTICATED &&
                n.state !== 3 &&
                (n.authCredentialsProvider.invalidateToken(),
                n.appCheckCredentialsProvider.invalidateToken())
            : n.M_.reset(),
          n.stream !== null && (n.W_(), n.stream.close(), (n.stream = null)),
          (n.state = e),
          yield n.listener.t_(t));
      })();
    }
    W_() {}
    auth() {
      this.state = 1;
      let e = this.Q_(this.D_),
        t = this.D_;
      Promise.all([
        this.authCredentialsProvider.getToken(),
        this.appCheckCredentialsProvider.getToken(),
      ]).then(
        ([e, n]) => {
          this.D_ === t && this.G_(e, n);
        },
        (t) => {
          e(() => {
            let e = new N(
              M.UNKNOWN,
              `Fetching auth token failed: ` + t.message,
            );
            return this.z_(e);
          });
        },
      );
    }
    G_(e, t) {
      let n = this.Q_(this.D_);
      ((this.stream = this.j_(e, t)),
        this.stream.Zo(() => {
          n(() => this.listener.Zo());
        }),
        this.stream.Yo(() => {
          n(
            () => (
              (this.state = 2),
              (this.v_ = this.Ci.enqueueAfterDelay(
                this.b_,
                1e4,
                () => (this.O_() && (this.state = 3), Promise.resolve()),
              )),
              this.listener.Yo()
            ),
          );
        }),
        this.stream.t_((e) => {
          n(() => this.z_(e));
        }),
        this.stream.onMessage((e) => {
          n(() => (++this.F_ == 1 ? this.J_(e) : this.onNext(e)));
        }));
    }
    N_() {
      var e = this;
      ((this.state = 5),
        this.M_.p_(
          p(function* () {
            ((e.state = 0), e.start());
          }),
        ));
    }
    z_(e) {
      return (
        O(Jc, `close with error: ${e}`),
        (this.stream = null),
        this.close(4, e)
      );
    }
    Q_(e) {
      return (t) => {
        this.Ci.enqueueAndForget(() =>
          this.D_ === e
            ? t()
            : (O(Jc, `stream callback skipped by getCloseGuardedDispatcher.`),
              Promise.resolve()),
        );
      };
    }
  },
  Xc = class extends Yc {
    constructor(e, t, n, r, i, a) {
      (super(
        e,
        `listen_stream_connection_backoff`,
        `listen_stream_idle`,
        `health_check_timeout`,
        t,
        n,
        r,
        a,
      ),
        (this.serializer = i));
    }
    j_(e, t) {
      return this.connection.T_(`Listen`, e, t);
    }
    J_(e) {
      return this.onNext(e);
    }
    onNext(e) {
      this.M_.reset();
      let t = _s(this.serializer, e),
        n = (function (e) {
          if (!(`targetChange` in e)) return z.min();
          let t = e.targetChange;
          return t.targetIds && t.targetIds.length
            ? z.min()
            : t.readTime
              ? os(t.readTime)
              : z.min();
        })(e);
      return this.listener.H_(t, n);
    }
    Z_(e) {
      let t = {};
      ((t.database = ms(this.serializer)),
        (t.addTarget = (function (e, t) {
          let n,
            r = t.target;
          if (
            ((n = _a(r) ? { documents: bs(e, r) } : { query: xs(e, r).ft }),
            (n.targetId = t.targetId),
            t.resumeToken.approximateByteSize() > 0)
          ) {
            n.resumeToken = is(e, t.resumeToken);
            let r = ns(e, t.expectedCount);
            r !== null && (n.expectedCount = r);
          } else if (t.snapshotVersion.compareTo(z.min()) > 0) {
            n.readTime = rs(e, t.snapshotVersion.toTimestamp());
            let r = ns(e, t.expectedCount);
            r !== null && (n.expectedCount = r);
          }
          return n;
        })(this.serializer, e)));
      let n = Cs(this.serializer, e);
      (n && (t.labels = n), this.q_(t));
    }
    X_(e) {
      let t = {};
      ((t.database = ms(this.serializer)), (t.removeTarget = e), this.q_(t));
    }
  },
  Zc = class extends Yc {
    constructor(e, t, n, r, i, a) {
      (super(
        e,
        `write_stream_connection_backoff`,
        `write_stream_idle`,
        `health_check_timeout`,
        t,
        n,
        r,
        a,
      ),
        (this.serializer = i));
    }
    get Y_() {
      return this.F_ > 0;
    }
    start() {
      ((this.lastStreamToken = void 0), super.start());
    }
    W_() {
      this.Y_ && this.ea([]);
    }
    j_(e, t) {
      return this.connection.T_(`Write`, e, t);
    }
    J_(e) {
      return (
        A(!!e.streamToken, 31322),
        (this.lastStreamToken = e.streamToken),
        A(!e.writeResults || e.writeResults.length === 0, 55816),
        this.listener.ta()
      );
    }
    onNext(e) {
      (A(!!e.streamToken, 12678),
        (this.lastStreamToken = e.streamToken),
        this.M_.reset());
      let t = ys(e.writeResults, e.commitTime),
        n = os(e.commitTime);
      return this.listener.na(n, t);
    }
    ra() {
      let e = {};
      ((e.database = ms(this.serializer)), this.q_(e));
    }
    ea(e) {
      let t = {
        streamToken: this.lastStreamToken,
        writes: e.map((e) => vs(this.serializer, e)),
      };
      this.q_(t);
    }
  },
  Qc = class {},
  $c = class extends Qc {
    constructor(e, t, n, r) {
      (super(),
        (this.authCredentials = e),
        (this.appCheckCredentials = t),
        (this.connection = n),
        (this.serializer = r),
        (this.ia = !1));
    }
    sa() {
      if (this.ia)
        throw new N(
          M.FAILED_PRECONDITION,
          `The client has already been terminated.`,
        );
    }
    Wo(e, t, n, r) {
      return (
        this.sa(),
        Promise.all([
          this.authCredentials.getToken(),
          this.appCheckCredentials.getToken(),
        ])
          .then(([i, a]) => this.connection.Wo(e, cs(t, n), r, i, a))
          .catch((e) => {
            throw e.name === `FirebaseError`
              ? (e.code === M.UNAUTHENTICATED &&
                  (this.authCredentials.invalidateToken(),
                  this.appCheckCredentials.invalidateToken()),
                e)
              : new N(M.UNKNOWN, e.toString());
          })
      );
    }
    jo(e, t, n, r, i) {
      return (
        this.sa(),
        Promise.all([
          this.authCredentials.getToken(),
          this.appCheckCredentials.getToken(),
        ])
          .then(([a, o]) => this.connection.jo(e, cs(t, n), r, a, o, i))
          .catch((e) => {
            throw e.name === `FirebaseError`
              ? (e.code === M.UNAUTHENTICATED &&
                  (this.authCredentials.invalidateToken(),
                  this.appCheckCredentials.invalidateToken()),
                e)
              : new N(M.UNKNOWN, e.toString());
          })
      );
    }
    terminate() {
      ((this.ia = !0), this.connection.terminate());
    }
  };
function el(e, t, n, r) {
  return new $c(e, t, n, r);
}
var tl = class {
    constructor(e, t) {
      ((this.asyncQueue = e),
        (this.onlineStateHandler = t),
        (this.state = `Unknown`),
        (this.oa = 0),
        (this._a = null),
        (this.aa = !0));
    }
    ua() {
      this.oa === 0 &&
        (this.ca(`Unknown`),
        (this._a = this.asyncQueue.enqueueAfterDelay(
          `online_state_timeout`,
          1e4,
          () => (
            (this._a = null),
            this.la(`Backend didn't respond within 10 seconds.`),
            this.ca(`Offline`),
            Promise.resolve()
          ),
        )));
    }
    ha(e) {
      this.state === `Online`
        ? this.ca(`Unknown`)
        : (this.oa++,
          this.oa >= 1 &&
            (this.Pa(),
            this.la(
              `Connection failed 1 times. Most recent error: ${e.toString()}`,
            ),
            this.ca(`Offline`)));
    }
    set(e) {
      (this.Pa(), (this.oa = 0), e === `Online` && (this.aa = !1), this.ca(e));
    }
    ca(e) {
      e !== this.state && ((this.state = e), this.onlineStateHandler(e));
    }
    la(e) {
      let t = `Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
      this.aa ? (Xn(t), (this.aa = !1)) : O(`OnlineStateTracker`, t);
    }
    Pa() {
      this._a !== null && (this._a.cancel(), (this._a = null));
    }
  },
  nl = `RemoteStore`,
  rl = class {
    constructor(e, t, n, r, i) {
      var a = this;
      ((this.localStore = e),
        (this.datastore = t),
        (this.asyncQueue = n),
        (this.remoteSyncer = {}),
        (this.Ta = []),
        (this.Ea = new Map()),
        (this.Ia = new Set()),
        (this.Ra = []),
        (this.Aa = i),
        this.Aa.Mo((e) => {
          n.enqueueAndForget(
            p(function* () {
              ml(a) &&
                (O(nl, `Restarting streams for network reachability change.`),
                yield (function () {
                  var e = p(function* (e) {
                    let t = j(e);
                    (t.Ia.add(4),
                      yield ol(t),
                      t.Va.set(`Unknown`),
                      t.Ia.delete(4),
                      yield il(t));
                  });
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })()(a));
            }),
          );
        }),
        (this.Va = new tl(n, r)));
    }
  };
function il(e) {
  return al.apply(this, arguments);
}
function al() {
  return (
    (al = p(function* (e) {
      if (ml(e)) for (let t of e.Ra) yield t(!0);
    })),
    al.apply(this, arguments)
  );
}
function ol(e) {
  return sl.apply(this, arguments);
}
function sl() {
  return (
    (sl = p(function* (e) {
      for (let t of e.Ra) yield t(!1);
    })),
    sl.apply(this, arguments)
  );
}
function cl(e, t) {
  let n = j(e);
  n.Ea.has(t.targetId) ||
    (n.Ea.set(t.targetId, t), pl(n) ? fl(n) : Gl(n).O_() && ul(n, t));
}
function ll(e, t) {
  let n = j(e),
    r = Gl(n);
  (n.Ea.delete(t),
    r.O_() && dl(n, t),
    n.Ea.size === 0 && (r.O_() ? r.L_() : ml(n) && n.Va.set(`Unknown`)));
}
function ul(e, t) {
  if (
    (e.da.$e(t.targetId),
    t.resumeToken.approximateByteSize() > 0 ||
      t.snapshotVersion.compareTo(z.min()) > 0)
  ) {
    let n = e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;
    t = t.withExpectedCount(n);
  }
  Gl(e).Z_(t);
}
function dl(e, t) {
  (e.da.$e(t), Gl(e).X_(t));
}
function fl(e) {
  ((e.da = new Yo({
    getRemoteKeysForTarget: (t) => e.remoteSyncer.getRemoteKeysForTarget(t),
    At: (t) => e.Ea.get(t) || null,
    ht: () => e.datastore.serializer.databaseId,
  })),
    Gl(e).start(),
    e.Va.ua());
}
function pl(e) {
  return ml(e) && !Gl(e).x_() && e.Ea.size > 0;
}
function ml(e) {
  return j(e).Ia.size === 0;
}
function hl(e) {
  e.da = void 0;
}
function gl(e) {
  return _l.apply(this, arguments);
}
function _l() {
  return (
    (_l = p(function* (e) {
      e.Va.set(`Online`);
    })),
    _l.apply(this, arguments)
  );
}
function vl(e) {
  return yl.apply(this, arguments);
}
function yl() {
  return (
    (yl = p(function* (e) {
      e.Ea.forEach((t, n) => {
        ul(e, t);
      });
    })),
    yl.apply(this, arguments)
  );
}
function bl(e, t) {
  return xl.apply(this, arguments);
}
function xl() {
  return (
    (xl = p(function* (e, t) {
      (hl(e), pl(e) ? (e.Va.ha(t), fl(e)) : e.Va.set(`Unknown`));
    })),
    xl.apply(this, arguments)
  );
}
function Sl(e, t, n) {
  return Cl.apply(this, arguments);
}
function Cl() {
  return (
    (Cl = p(function* (e, t, n) {
      if ((e.Va.set(`Online`), t instanceof qo && t.state === 2 && t.cause))
        try {
          yield (function () {
            var e = p(function* (e, t) {
              let n = t.cause;
              for (let r of t.targetIds)
                e.Ea.has(r) &&
                  (yield e.remoteSyncer.rejectListen(r, n),
                  e.Ea.delete(r),
                  e.da.removeTarget(r));
            });
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()(e, t);
        } catch (n) {
          (O(nl, `Failed to remove targets %s: %s `, t.targetIds.join(`,`), n),
            yield wl(e, n));
        }
      else if (
        (t instanceof Go
          ? e.da.Xe(t)
          : t instanceof Ko
            ? e.da.st(t)
            : e.da.tt(t),
        !n.isEqual(z.min()))
      )
        try {
          let t = yield Sc(e.localStore);
          n.compareTo(t) >= 0 &&
            (yield (function (e, t) {
              let n = e.da.Tt(t);
              return (
                n.targetChanges.forEach((n, r) => {
                  if (n.resumeToken.approximateByteSize() > 0) {
                    let i = e.Ea.get(r);
                    i && e.Ea.set(r, i.withResumeToken(n.resumeToken, t));
                  }
                }),
                n.targetMismatches.forEach((t, n) => {
                  let r = e.Ea.get(t);
                  r &&
                    (e.Ea.set(
                      t,
                      r.withResumeToken(
                        ai.EMPTY_BYTE_STRING,
                        r.snapshotVersion,
                      ),
                    ),
                    dl(e, t),
                    ul(e, new Ps(r.target, t, n, r.sequenceNumber)));
                }),
                e.remoteSyncer.applyRemoteEvent(n)
              );
            })(e, n));
        } catch (t) {
          (O(nl, `Failed to raise snapshot:`, t), yield wl(e, t));
        }
    })),
    Cl.apply(this, arguments)
  );
}
function wl(e, t, n) {
  return Tl.apply(this, arguments);
}
function Tl() {
  return (
    (Tl = p(function* (e, t, n) {
      if (!Vr(t)) throw t;
      (e.Ia.add(1),
        yield ol(e),
        e.Va.set(`Offline`),
        n || (n = () => Sc(e.localStore)),
        e.asyncQueue.enqueueRetryable(
          p(function* () {
            (O(nl, `Retrying IndexedDB access`),
              yield n(),
              e.Ia.delete(1),
              yield il(e));
          }),
        ));
    })),
    Tl.apply(this, arguments)
  );
}
function El(e, t) {
  return t().catch((n) => wl(e, n, t));
}
function Dl(e) {
  return Ol.apply(this, arguments);
}
function Ol() {
  return (
    (Ol = p(function* (e) {
      let t = j(e),
        n = Kl(t),
        r = t.Ta.length > 0 ? t.Ta[t.Ta.length - 1].batchId : Ur;
      for (; kl(t);)
        try {
          let e = yield Tc(t.localStore, r);
          if (e === null) {
            t.Ta.length === 0 && n.L_();
            break;
          }
          ((r = e.batchId), Al(t, e));
        } catch (e) {
          yield wl(t, e);
        }
      jl(t) && Ml(t);
    })),
    Ol.apply(this, arguments)
  );
}
function kl(e) {
  return ml(e) && e.Ta.length < 10;
}
function Al(e, t) {
  e.Ta.push(t);
  let n = Kl(e);
  n.O_() && n.Y_ && n.ea(t.mutations);
}
function jl(e) {
  return ml(e) && !Kl(e).x_() && e.Ta.length > 0;
}
function Ml(e) {
  Kl(e).start();
}
function Nl(e) {
  return Pl.apply(this, arguments);
}
function Pl() {
  return (
    (Pl = p(function* (e) {
      Kl(e).ra();
    })),
    Pl.apply(this, arguments)
  );
}
function Fl(e) {
  return Il.apply(this, arguments);
}
function Il() {
  return (
    (Il = p(function* (e) {
      let t = Kl(e);
      for (let n of e.Ta) t.ea(n.mutations);
    })),
    Il.apply(this, arguments)
  );
}
function Ll(e, t, n) {
  return Rl.apply(this, arguments);
}
function Rl() {
  return (
    (Rl = p(function* (e, t, n) {
      let r = e.Ta.shift(),
        i = jo.from(r, t, n);
      (yield El(e, () => e.remoteSyncer.applySuccessfulWrite(i)), yield Dl(e));
    })),
    Rl.apply(this, arguments)
  );
}
function zl(e, t) {
  return Bl.apply(this, arguments);
}
function Bl() {
  return (
    (Bl = p(function* (e, t) {
      (t &&
        Kl(e).Y_ &&
        (yield (function () {
          var e = p(function* (e, t) {
            if (
              (function (e) {
                return Po(e) && e !== M.ABORTED;
              })(t.code)
            ) {
              let n = e.Ta.shift();
              (Kl(e).B_(),
                yield El(e, () =>
                  e.remoteSyncer.rejectFailedWrite(n.batchId, t),
                ),
                yield Dl(e));
            }
          });
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()(e, t)),
        jl(e) && Ml(e));
    })),
    Bl.apply(this, arguments)
  );
}
function Vl(e, t) {
  return Hl.apply(this, arguments);
}
function Hl() {
  return (
    (Hl = p(function* (e, t) {
      let n = j(e);
      (n.asyncQueue.verifyOperationInProgress(),
        O(nl, `RemoteStore received new credentials`));
      let r = ml(n);
      (n.Ia.add(3),
        yield ol(n),
        r && n.Va.set(`Unknown`),
        yield n.remoteSyncer.handleCredentialChange(t),
        n.Ia.delete(3),
        yield il(n));
    })),
    Hl.apply(this, arguments)
  );
}
function Ul(e, t) {
  return Wl.apply(this, arguments);
}
function Wl() {
  return (
    (Wl = p(function* (e, t) {
      let n = j(e);
      t
        ? (n.Ia.delete(2), yield il(n))
        : t || (n.Ia.add(2), yield ol(n), n.Va.set(`Unknown`));
    })),
    Wl.apply(this, arguments)
  );
}
function Gl(e) {
  return (
    e.ma ||
      ((e.ma = (function (e, t, n) {
        let r = j(e);
        return (
          r.sa(),
          new Xc(
            t,
            r.connection,
            r.authCredentials,
            r.appCheckCredentials,
            r.serializer,
            n,
          )
        );
      })(e.datastore, e.asyncQueue, {
        Zo: gl.bind(null, e),
        Yo: vl.bind(null, e),
        t_: bl.bind(null, e),
        H_: Sl.bind(null, e),
      })),
      e.Ra.push(
        (function () {
          var t = p(function* (t) {
            t
              ? (e.ma.B_(), pl(e) ? fl(e) : e.Va.set(`Unknown`))
              : (yield e.ma.stop(), hl(e));
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
      )),
    e.ma
  );
}
function Kl(e) {
  return (
    e.fa ||
      ((e.fa = (function (e, t, n) {
        let r = j(e);
        return (
          r.sa(),
          new Zc(
            t,
            r.connection,
            r.authCredentials,
            r.appCheckCredentials,
            r.serializer,
            n,
          )
        );
      })(e.datastore, e.asyncQueue, {
        Zo: () => Promise.resolve(),
        Yo: Nl.bind(null, e),
        t_: zl.bind(null, e),
        ta: Fl.bind(null, e),
        na: Ll.bind(null, e),
      })),
      e.Ra.push(
        (function () {
          var t = p(function* (t) {
            t
              ? (e.fa.B_(), yield Dl(e))
              : (yield e.fa.stop(),
                e.Ta.length > 0 &&
                  (O(
                    nl,
                    `Stopping write stream with ${e.Ta.length} pending writes`,
                  ),
                  (e.Ta = [])));
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
      )),
    e.fa
  );
}
var ql = class e {
  constructor(e, t, n, r, i) {
    ((this.asyncQueue = e),
      (this.timerId = t),
      (this.targetTimeMs = n),
      (this.op = r),
      (this.removalCallback = i),
      (this.deferred = new er()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((e) => {}));
  }
  get promise() {
    return this.deferred.promise;
  }
  static createAndSchedule(t, n, r, i, a) {
    let o = new e(t, n, Date.now() + r, i, a);
    return (o.start(r), o);
  }
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(e) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new N(M.CANCELLED, `Operation cancelled` + (e ? `: ` + e : ``)),
      ));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle === null
        ? Promise.resolve()
        : (this.clearTimeout(),
          this.op().then((e) => this.deferred.resolve(e))),
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null));
  }
};
function Jl(e, t) {
  if ((Xn(`AsyncQueue`, `${t}: ${e}`), Vr(e)))
    return new N(M.UNAVAILABLE, `${t}: ${e}`);
  throw e;
}
var Yl = class e {
    static emptySet(t) {
      return new e(t.comparator);
    }
    constructor(e) {
      ((this.comparator = e
        ? (t, n) => e(t, n) || I.comparator(t.key, n.key)
        : (e, t) => I.comparator(e.key, t.key)),
        (this.keyedMap = Va()),
        (this.sortedSet = new V(this.comparator)));
    }
    has(e) {
      return this.keyedMap.get(e) != null;
    }
    get(e) {
      return this.keyedMap.get(e);
    }
    first() {
      return this.sortedSet.minKey();
    }
    last() {
      return this.sortedSet.maxKey();
    }
    isEmpty() {
      return this.sortedSet.isEmpty();
    }
    indexOf(e) {
      let t = this.keyedMap.get(e);
      return t ? this.sortedSet.indexOf(t) : -1;
    }
    get size() {
      return this.sortedSet.size;
    }
    forEach(e) {
      this.sortedSet.inorderTraversal((t, n) => (e(t), !1));
    }
    add(e) {
      let t = this.delete(e.key);
      return t.copy(t.keyedMap.insert(e.key, e), t.sortedSet.insert(e, null));
    }
    delete(e) {
      let t = this.get(e);
      return t
        ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(t))
        : this;
    }
    isEqual(t) {
      if (!(t instanceof e) || this.size !== t.size) return !1;
      let n = this.sortedSet.getIterator(),
        r = t.sortedSet.getIterator();
      for (; n.hasNext();) {
        let e = n.getNext().key,
          t = r.getNext().key;
        if (!e.isEqual(t)) return !1;
      }
      return !0;
    }
    toString() {
      let e = [];
      return (
        this.forEach((t) => {
          e.push(t.toString());
        }),
        e.length === 0
          ? `DocumentSet ()`
          : `DocumentSet (
  ` +
            e.join(`  
`) +
            `
)`
      );
    }
    copy(t, n) {
      let r = new e();
      return (
        (r.comparator = this.comparator),
        (r.keyedMap = t),
        (r.sortedSet = n),
        r
      );
    }
  },
  Xl = class {
    constructor() {
      this.ga = new V(I.comparator);
    }
    track(e) {
      let t = e.doc.key,
        n = this.ga.get(t);
      n
        ? e.type !== 0 && n.type === 3
          ? (this.ga = this.ga.insert(t, e))
          : e.type === 3 && n.type !== 1
            ? (this.ga = this.ga.insert(t, { type: n.type, doc: e.doc }))
            : e.type === 2 && n.type === 2
              ? (this.ga = this.ga.insert(t, { type: 2, doc: e.doc }))
              : e.type === 2 && n.type === 0
                ? (this.ga = this.ga.insert(t, { type: 0, doc: e.doc }))
                : e.type === 1 && n.type === 0
                  ? (this.ga = this.ga.remove(t))
                  : e.type === 1 && n.type === 2
                    ? (this.ga = this.ga.insert(t, { type: 1, doc: n.doc }))
                    : e.type === 0 && n.type === 1
                      ? (this.ga = this.ga.insert(t, { type: 2, doc: e.doc }))
                      : k(63341, { Vt: e, pa: n })
        : (this.ga = this.ga.insert(t, e));
    }
    ya() {
      let e = [];
      return (
        this.ga.inorderTraversal((t, n) => {
          e.push(n);
        }),
        e
      );
    }
  },
  Zl = class e {
    constructor(e, t, n, r, i, a, o, s, c) {
      ((this.query = e),
        (this.docs = t),
        (this.oldDocs = n),
        (this.docChanges = r),
        (this.mutatedKeys = i),
        (this.fromCache = a),
        (this.syncStateChanged = o),
        (this.excludesMetadataChanges = s),
        (this.hasCachedResults = c));
    }
    static fromInitialDocuments(t, n, r, i, a) {
      let o = [];
      return (
        n.forEach((e) => {
          o.push({ type: 0, doc: e });
        }),
        new e(t, n, Yl.emptySet(n), o, r, i, !0, !1, a)
      );
    }
    get hasPendingWrites() {
      return !this.mutatedKeys.isEmpty();
    }
    isEqual(e) {
      if (!(
        this.fromCache === e.fromCache &&
        this.hasCachedResults === e.hasCachedResults &&
        this.syncStateChanged === e.syncStateChanged &&
        this.mutatedKeys.isEqual(e.mutatedKeys) &&
        Aa(this.query, e.query) &&
        this.docs.isEqual(e.docs) &&
        this.oldDocs.isEqual(e.oldDocs)
      ))
        return !1;
      let t = this.docChanges,
        n = e.docChanges;
      if (t.length !== n.length) return !1;
      for (let e = 0; e < t.length; e++)
        if (t[e].type !== n[e].type || !t[e].doc.isEqual(n[e].doc)) return !1;
      return !0;
    }
  },
  Ql = class {
    constructor() {
      ((this.wa = void 0), (this.Sa = []));
    }
    ba() {
      return this.Sa.some((e) => e.Da());
    }
  },
  $l = class {
    constructor() {
      ((this.queries = eu()),
        (this.onlineState = `Unknown`),
        (this.Ca = new Set()));
    }
    terminate() {
      (function (e, t) {
        let n = j(e),
          r = n.queries;
        ((n.queries = eu()),
          r.forEach((e, n) => {
            for (let e of n.Sa) e.onError(t);
          }));
      })(this, new N(M.ABORTED, `Firestore shutting down`));
    }
  };
function eu() {
  return new La((e) => ja(e), Aa);
}
function tu(e, t) {
  return nu.apply(this, arguments);
}
function nu() {
  return (
    (nu = p(function* (e, t) {
      let n = j(e),
        r = 3,
        i = t.query,
        a = n.queries.get(i);
      a ? !a.ba() && t.Da() && (r = 2) : ((a = new Ql()), (r = +!t.Da()));
      try {
        switch (r) {
          case 0:
            a.wa = yield n.onListen(i, !0);
            break;
          case 1:
            a.wa = yield n.onListen(i, !1);
            break;
          case 2:
            yield n.onFirstRemoteStoreListen(i);
        }
      } catch (e) {
        let n = Jl(e, `Initialization of query '${Ma(t.query)}' failed`);
        t.onError(n);
        return;
      }
      (n.queries.set(i, a),
        a.Sa.push(t),
        t.va(n.onlineState),
        a.wa && t.Fa(a.wa) && su(n));
    })),
    nu.apply(this, arguments)
  );
}
function ru(e, t) {
  return iu.apply(this, arguments);
}
function iu() {
  return (
    (iu = p(function* (e, t) {
      let n = j(e),
        r = t.query,
        i = 3,
        a = n.queries.get(r);
      if (a) {
        let e = a.Sa.indexOf(t);
        e >= 0 &&
          (a.Sa.splice(e, 1),
          a.Sa.length === 0 ? (i = +!t.Da()) : !a.ba() && t.Da() && (i = 2));
      }
      switch (i) {
        case 0:
          return (n.queries.delete(r), n.onUnlisten(r, !0));
        case 1:
          return (n.queries.delete(r), n.onUnlisten(r, !1));
        case 2:
          return n.onLastRemoteStoreUnlisten(r);
        default:
          return;
      }
    })),
    iu.apply(this, arguments)
  );
}
function au(e, t) {
  let n = j(e),
    r = !1;
  for (let e of t) {
    let t = e.query,
      i = n.queries.get(t);
    if (i) {
      for (let t of i.Sa) t.Fa(e) && (r = !0);
      i.wa = e;
    }
  }
  r && su(n);
}
function ou(e, t, n) {
  let r = j(e),
    i = r.queries.get(t);
  if (i) for (let e of i.Sa) e.onError(n);
  r.queries.delete(t);
}
function su(e) {
  e.Ca.forEach((e) => {
    e.next();
  });
}
var cu, lu;
(((lu = cu || (cu = {})).Ma = `default`), (lu.Cache = `cache`));
var uu = class {
    constructor(e, t, n) {
      ((this.query = e),
        (this.xa = t),
        (this.Oa = !1),
        (this.Na = null),
        (this.onlineState = `Unknown`),
        (this.options = n || {}));
    }
    Fa(e) {
      if (!this.options.includeMetadataChanges) {
        let t = [];
        for (let n of e.docChanges) n.type !== 3 && t.push(n);
        e = new Zl(
          e.query,
          e.docs,
          e.oldDocs,
          t,
          e.mutatedKeys,
          e.fromCache,
          e.syncStateChanged,
          !0,
          e.hasCachedResults,
        );
      }
      let t = !1;
      return (
        this.Oa
          ? this.Ba(e) && (this.xa.next(e), (t = !0))
          : this.La(e, this.onlineState) && (this.ka(e), (t = !0)),
        (this.Na = e),
        t
      );
    }
    onError(e) {
      this.xa.error(e);
    }
    va(e) {
      this.onlineState = e;
      let t = !1;
      return (
        this.Na &&
          !this.Oa &&
          this.La(this.Na, e) &&
          (this.ka(this.Na), (t = !0)),
        t
      );
    }
    La(e, t) {
      if (!e.fromCache || !this.Da()) return !0;
      let n = t !== `Offline`;
      return (
        (!this.options.qa || !n) &&
        (!e.docs.isEmpty() || e.hasCachedResults || t === `Offline`)
      );
    }
    Ba(e) {
      if (e.docChanges.length > 0) return !0;
      let t = this.Na && this.Na.hasPendingWrites !== e.hasPendingWrites;
      return (
        !(!e.syncStateChanged && !t) &&
        !0 === this.options.includeMetadataChanges
      );
    }
    ka(e) {
      ((e = Zl.fromInitialDocuments(
        e.query,
        e.docs,
        e.mutatedKeys,
        e.fromCache,
        e.hasCachedResults,
      )),
        (this.Oa = !0),
        this.xa.next(e));
    }
    Da() {
      return this.options.source !== cu.Cache;
    }
  },
  du = class {
    constructor(e) {
      this.key = e;
    }
  },
  fu = class {
    constructor(e) {
      this.key = e;
    }
  },
  pu = class {
    constructor(e, t) {
      ((this.query = e),
        (this.Za = t),
        (this.Xa = null),
        (this.hasCachedResults = !1),
        (this.current = !1),
        (this.Ya = G()),
        (this.mutatedKeys = G()),
        (this.eu = Fa(e)),
        (this.tu = new Yl(this.eu)));
    }
    get nu() {
      return this.Za;
    }
    ru(e, t) {
      let n = t ? t.iu : new Xl(),
        r = t ? t.tu : this.tu,
        i = t ? t.mutatedKeys : this.mutatedKeys,
        a = r,
        o = !1,
        s =
          this.query.limitType === `F` && r.size === this.query.limit
            ? r.last()
            : null,
        c =
          this.query.limitType === `L` && r.size === this.query.limit
            ? r.first()
            : null;
      if (
        (e.inorderTraversal((e, t) => {
          let l = r.get(e),
            u = Na(this.query, t) ? t : null,
            d = !!l && this.mutatedKeys.has(l.key),
            f =
              !!u &&
              (u.hasLocalMutations ||
                (this.mutatedKeys.has(u.key) && u.hasCommittedMutations)),
            p = !1;
          (l && u
            ? l.data.isEqual(u.data)
              ? d !== f && (n.track({ type: 3, doc: u }), (p = !0))
              : this.su(l, u) ||
                (n.track({ type: 2, doc: u }),
                (p = !0),
                ((s && this.eu(u, s) > 0) || (c && this.eu(u, c) < 0)) &&
                  (o = !0))
            : !l && u
              ? (n.track({ type: 0, doc: u }), (p = !0))
              : l &&
                !u &&
                (n.track({ type: 1, doc: l }), (p = !0), (s || c) && (o = !0)),
            p &&
              (u
                ? ((a = a.add(u)), (i = f ? i.add(e) : i.delete(e)))
                : ((a = a.delete(e)), (i = i.delete(e)))));
        }),
        this.query.limit !== null)
      )
        for (; a.size > this.query.limit;) {
          let e = this.query.limitType === `F` ? a.last() : a.first();
          ((a = a.delete(e.key)),
            (i = i.delete(e.key)),
            n.track({ type: 1, doc: e }));
        }
      return { tu: a, iu: n, bs: o, mutatedKeys: i };
    }
    su(e, t) {
      return (
        e.hasLocalMutations && t.hasCommittedMutations && !t.hasLocalMutations
      );
    }
    applyChanges(e, t, n, r) {
      var i;
      let a = this.tu;
      ((this.tu = e.tu), (this.mutatedKeys = e.mutatedKeys));
      let o = e.iu.ya();
      (o.sort(
        (e, t) =>
          (function (e, t) {
            let n = (e) => {
              switch (e) {
                case 0:
                  return 1;
                case 2:
                case 3:
                  return 2;
                case 1:
                  return 0;
                default:
                  return k(20277, { Vt: e });
              }
            };
            return n(e) - n(t);
          })(e.type, t.type) || this.eu(e.doc, t.doc),
      ),
        this.ou(n),
        (r = (i = r) == null ? !1 : i));
      let s = t && !r ? this._u() : [],
        c = this.Ya.size === 0 && this.current && !r ? 1 : 0,
        l = c !== this.Xa;
      return (
        (this.Xa = c),
        o.length !== 0 || l
          ? {
              snapshot: new Zl(
                this.query,
                e.tu,
                a,
                o,
                e.mutatedKeys,
                c === 0,
                l,
                !1,
                !!n && n.resumeToken.approximateByteSize() > 0,
              ),
              au: s,
            }
          : { au: s }
      );
    }
    va(e) {
      return this.current && e === `Offline`
        ? ((this.current = !1),
          this.applyChanges(
            {
              tu: this.tu,
              iu: new Xl(),
              mutatedKeys: this.mutatedKeys,
              bs: !1,
            },
            !1,
          ))
        : { au: [] };
    }
    uu(e) {
      return (
        !this.Za.has(e) && !!this.tu.has(e) && !this.tu.get(e).hasLocalMutations
      );
    }
    ou(e) {
      e &&
        (e.addedDocuments.forEach((e) => (this.Za = this.Za.add(e))),
        e.modifiedDocuments.forEach((e) => {}),
        e.removedDocuments.forEach((e) => (this.Za = this.Za.delete(e))),
        (this.current = e.current));
    }
    _u() {
      if (!this.current) return [];
      let e = this.Ya;
      ((this.Ya = G()),
        this.tu.forEach((e) => {
          this.uu(e.key) && (this.Ya = this.Ya.add(e.key));
        }));
      let t = [];
      return (
        e.forEach((e) => {
          this.Ya.has(e) || t.push(new fu(e));
        }),
        this.Ya.forEach((n) => {
          e.has(n) || t.push(new du(n));
        }),
        t
      );
    }
    cu(e) {
      ((this.Za = e.ks), (this.Ya = G()));
      let t = this.ru(e.documents);
      return this.applyChanges(t, !0);
    }
    lu() {
      return Zl.fromInitialDocuments(
        this.query,
        this.tu,
        this.mutatedKeys,
        this.Xa === 0,
        this.hasCachedResults,
      );
    }
  },
  mu = `SyncEngine`,
  hu = class {
    constructor(e, t, n) {
      ((this.query = e), (this.targetId = t), (this.view = n));
    }
  },
  gu = class {
    constructor(e) {
      ((this.key = e), (this.hu = !1));
    }
  },
  _u = class {
    constructor(e, t, n, r, i, a) {
      ((this.localStore = e),
        (this.remoteStore = t),
        (this.eventManager = n),
        (this.sharedClientState = r),
        (this.currentUser = i),
        (this.maxConcurrentLimboResolutions = a),
        (this.Pu = {}),
        (this.Tu = new La((e) => ja(e), Aa)),
        (this.Eu = new Map()),
        (this.Iu = new Set()),
        (this.Ru = new V(I.comparator)),
        (this.Au = new Map()),
        (this.Vu = new rc()),
        (this.du = {}),
        (this.mu = new Map()),
        (this.fu = Us.ar()),
        (this.onlineState = `Unknown`),
        (this.gu = void 0));
    }
    get isPrimaryClient() {
      return !0 === this.gu;
    }
  };
function vu(e, t) {
  return yu.apply(this, arguments);
}
function yu() {
  return (
    (yu = p(function* (e, t, n = !0) {
      let r = $u(e),
        i,
        a = r.Tu.get(t);
      return (
        a
          ? (r.sharedClientState.addLocalQueryTarget(a.targetId),
            (i = a.view.lu()))
          : (i = yield Su(r, t, n, !0)),
        i
      );
    })),
    yu.apply(this, arguments)
  );
}
function bu(e, t) {
  return xu.apply(this, arguments);
}
function xu() {
  return (
    (xu = p(function* (e, t) {
      yield Su($u(e), t, !0, !1);
    })),
    xu.apply(this, arguments)
  );
}
function Su(e, t, n, r) {
  return Cu.apply(this, arguments);
}
function Cu() {
  return (
    (Cu = p(function* (e, t, n, r) {
      let i = yield Ec(e.localStore, Ta(t)),
        a = i.targetId,
        o = e.sharedClientState.addLocalQueryTarget(a, n),
        s;
      return (
        r && (s = yield wu(e, t, a, o === `current`, i.resumeToken)),
        e.isPrimaryClient && n && cl(e.remoteStore, i),
        s
      );
    })),
    Cu.apply(this, arguments)
  );
}
function wu(e, t, n, r, i) {
  return Tu.apply(this, arguments);
}
function Tu() {
  return (
    (Tu = p(function* (e, t, n, r, i) {
      e.pu = (t, n, r) =>
        (function () {
          var e = p(function* (e, t, n, r) {
            let i = t.view.ru(n);
            i.bs &&
              (i = yield kc(e.localStore, t.query, !1).then(
                ({ documents: e }) => t.view.ru(e, i),
              ));
            let a = r && r.targetChanges.get(t.targetId),
              o = r && r.targetMismatches.get(t.targetId) != null,
              s = t.view.applyChanges(i, e.isPrimaryClient, a, o);
            return (Gu(e, t.targetId, s.au), s.snapshot);
          });
          function t(t, n, r, i) {
            return e.apply(this, arguments);
          }
          return t;
        })()(e, t, n, r);
      let a = yield kc(e.localStore, t, !0),
        o = new pu(t, a.ks),
        s = o.ru(a.documents),
        c = Wo.createSynthesizedTargetChangeForCurrentChange(
          n,
          r && e.onlineState !== `Offline`,
          i,
        ),
        l = o.applyChanges(s, e.isPrimaryClient, c);
      Gu(e, n, l.au);
      let u = new hu(t, n, o);
      return (
        e.Tu.set(t, u),
        e.Eu.has(n) ? e.Eu.get(n).push(t) : e.Eu.set(n, [t]),
        l.snapshot
      );
    })),
    Tu.apply(this, arguments)
  );
}
function Eu(e, t, n) {
  return Du.apply(this, arguments);
}
function Du() {
  return (
    (Du = p(function* (e, t, n) {
      let r = j(e),
        i = r.Tu.get(t),
        a = r.Eu.get(i.targetId);
      if (a.length > 1)
        return (
          r.Eu.set(
            i.targetId,
            a.filter((e) => !Aa(e, t)),
          ),
          void r.Tu.delete(t)
        );
      r.isPrimaryClient
        ? (r.sharedClientState.removeLocalQueryTarget(i.targetId),
          r.sharedClientState.isActiveQueryTarget(i.targetId) ||
            (yield Dc(r.localStore, i.targetId, !1)
              .then(() => {
                (r.sharedClientState.clearQueryState(i.targetId),
                  n && ll(r.remoteStore, i.targetId),
                  Uu(r, i.targetId));
              })
              .catch(Rr)))
        : (Uu(r, i.targetId), yield Dc(r.localStore, i.targetId, !0));
    })),
    Du.apply(this, arguments)
  );
}
function Ou(e, t) {
  return ku.apply(this, arguments);
}
function ku() {
  return (
    (ku = p(function* (e, t) {
      let n = j(e),
        r = n.Tu.get(t),
        i = n.Eu.get(r.targetId);
      n.isPrimaryClient &&
        i.length === 1 &&
        (n.sharedClientState.removeLocalQueryTarget(r.targetId),
        ll(n.remoteStore, r.targetId));
    })),
    ku.apply(this, arguments)
  );
}
function Au(e, t, n) {
  return ju.apply(this, arguments);
}
function ju() {
  return (
    (ju = p(function* (e, t, n) {
      let r = ed(e);
      try {
        let e = yield (function (e, t) {
          let n = j(e),
            r = R.now(),
            i = t.reduce((e, t) => e.add(t.key), G()),
            a,
            o;
          return n.persistence
            .runTransaction(`Locally write mutations`, `readwrite`, (e) => {
              let s = za(),
                c = G();
              return n.xs
                .getEntries(e, i)
                .next((e) => {
                  ((s = e),
                    s.forEach((e, t) => {
                      t.isValidDocument() || (c = c.add(e));
                    }));
                })
                .next(() => n.localDocuments.getOverlayedDocuments(e, s))
                .next((i) => {
                  a = i;
                  let o = [];
                  for (let e of t) {
                    let t = xo(e, a.get(e.key).overlayedDocument);
                    t != null &&
                      o.push(
                        new wo(e.key, t, Wi(t.value.mapValue), ho.exists(!0)),
                      );
                  }
                  return n.mutationQueue.addMutationBatch(e, r, o, t);
                })
                .next((t) => {
                  o = t;
                  let r = t.applyToLocalDocumentSet(a, c);
                  return n.documentOverlayCache.saveOverlays(e, t.batchId, r);
                });
            })
            .then(() => ({ batchId: o.batchId, changes: Ha(a) }));
        })(r.localStore, t);
        (r.sharedClientState.addPendingMutation(e.batchId),
          (function (e, t, n) {
            let r = e.du[e.currentUser.toKey()];
            (r || (r = new V(P)),
              (r = r.insert(t, n)),
              (e.du[e.currentUser.toKey()] = r));
          })(r, e.batchId, n),
          yield Ju(r, e.changes),
          yield Dl(r.remoteStore));
      } catch (e) {
        let t = Jl(e, `Failed to persist write`);
        n.reject(t);
      }
    })),
    ju.apply(this, arguments)
  );
}
function Mu(e, t) {
  return Nu.apply(this, arguments);
}
function Nu() {
  return (
    (Nu = p(function* (e, t) {
      let n = j(e);
      try {
        let e = yield Cc(n.localStore, t);
        (t.targetChanges.forEach((e, t) => {
          let r = n.Au.get(t);
          r &&
            (A(
              e.addedDocuments.size +
                e.modifiedDocuments.size +
                e.removedDocuments.size <=
                1,
              22616,
            ),
            e.addedDocuments.size > 0
              ? (r.hu = !0)
              : e.modifiedDocuments.size > 0
                ? A(r.hu, 14607)
                : e.removedDocuments.size > 0 && (A(r.hu, 42227), (r.hu = !1)));
        }),
          yield Ju(n, e, t));
      } catch (e) {
        yield Rr(e);
      }
    })),
    Nu.apply(this, arguments)
  );
}
function Pu(e, t, n) {
  let r = j(e);
  if ((r.isPrimaryClient && n === 0) || (!r.isPrimaryClient && n === 1)) {
    let e = [];
    (r.Tu.forEach((n, r) => {
      let i = r.view.va(t);
      i.snapshot && e.push(i.snapshot);
    }),
      (function (e, t) {
        let n = j(e);
        n.onlineState = t;
        let r = !1;
        (n.queries.forEach((e, n) => {
          for (let e of n.Sa) e.va(t) && (r = !0);
        }),
          r && su(n));
      })(r.eventManager, t),
      e.length && r.Pu.H_(e),
      (r.onlineState = t),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(t));
  }
}
function Fu(e, t, n) {
  return Iu.apply(this, arguments);
}
function Iu() {
  return (
    (Iu = p(function* (e, t, n) {
      let r = j(e);
      r.sharedClientState.updateQueryState(t, `rejected`, n);
      let i = r.Au.get(t),
        a = i && i.key;
      if (a) {
        let e = new V(I.comparator);
        e = e.insert(a, Gi.newNoDocument(a, z.min()));
        let n = G().add(a);
        (yield Mu(r, new Uo(z.min(), new Map(), new V(P), e, n)),
          (r.Ru = r.Ru.remove(a)),
          r.Au.delete(t),
          qu(r));
      } else
        yield Dc(r.localStore, t, !1)
          .then(() => Uu(r, t, n))
          .catch(Rr);
    })),
    Iu.apply(this, arguments)
  );
}
function Lu(e, t) {
  return Ru.apply(this, arguments);
}
function Ru() {
  return (
    (Ru = p(function* (e, t) {
      let n = j(e),
        r = t.batch.batchId;
      try {
        let e = yield xc(n.localStore, t);
        (Hu(n, r, null),
          Vu(n, r),
          n.sharedClientState.updateMutationState(r, `acknowledged`),
          yield Ju(n, e));
      } catch (e) {
        yield Rr(e);
      }
    })),
    Ru.apply(this, arguments)
  );
}
function zu(e, t, n) {
  return Bu.apply(this, arguments);
}
function Bu() {
  return (
    (Bu = p(function* (e, t, n) {
      let r = j(e);
      try {
        let e = yield (function (e, t) {
          let n = j(e);
          return n.persistence.runTransaction(
            `Reject batch`,
            `readwrite-primary`,
            (e) => {
              let r;
              return n.mutationQueue
                .lookupMutationBatch(e, t)
                .next(
                  (t) => (
                    A(t !== null, 37113),
                    (r = t.keys()),
                    n.mutationQueue.removeMutationBatch(e, t)
                  ),
                )
                .next(() => n.mutationQueue.performConsistencyCheck(e))
                .next(() =>
                  n.documentOverlayCache.removeOverlaysForBatchId(e, r, t),
                )
                .next(() =>
                  n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
                    e,
                    r,
                  ),
                )
                .next(() => n.localDocuments.getDocuments(e, r));
            },
          );
        })(r.localStore, t);
        (Hu(r, t, n),
          Vu(r, t),
          r.sharedClientState.updateMutationState(t, `rejected`, n),
          yield Ju(r, e));
      } catch (e) {
        yield Rr(e);
      }
    })),
    Bu.apply(this, arguments)
  );
}
function Vu(e, t) {
  ((e.mu.get(t) || []).forEach((e) => {
    e.resolve();
  }),
    e.mu.delete(t));
}
function Hu(e, t, n) {
  let r = j(e),
    i = r.du[r.currentUser.toKey()];
  if (i) {
    let e = i.get(t);
    (e && (n ? e.reject(n) : e.resolve(), (i = i.remove(t))),
      (r.du[r.currentUser.toKey()] = i));
  }
}
function Uu(e, t, n = null) {
  e.sharedClientState.removeLocalQueryTarget(t);
  for (let r of e.Eu.get(t)) (e.Tu.delete(r), n && e.Pu.yu(r, n));
  (e.Eu.delete(t),
    e.isPrimaryClient &&
      e.Vu.Gr(t).forEach((t) => {
        e.Vu.containsKey(t) || Wu(e, t);
      }));
}
function Wu(e, t) {
  e.Iu.delete(t.path.canonicalString());
  let n = e.Ru.get(t);
  n !== null &&
    (ll(e.remoteStore, n), (e.Ru = e.Ru.remove(t)), e.Au.delete(n), qu(e));
}
function Gu(e, t, n) {
  for (let r of n)
    r instanceof du
      ? (e.Vu.addReference(r.key, t), Ku(e, r))
      : r instanceof fu
        ? (O(mu, `Document no longer in limbo: ` + r.key),
          e.Vu.removeReference(r.key, t),
          e.Vu.containsKey(r.key) || Wu(e, r.key))
        : k(19791, { wu: r });
}
function Ku(e, t) {
  let n = t.key,
    r = n.path.canonicalString();
  e.Ru.get(n) ||
    e.Iu.has(r) ||
    (O(mu, `New document in limbo: ` + n), e.Iu.add(r), qu(e));
}
function qu(e) {
  for (; e.Iu.size > 0 && e.Ru.size < e.maxConcurrentLimboResolutions;) {
    let t = e.Iu.values().next().value;
    e.Iu.delete(t);
    let n = new I(F.fromString(t)),
      r = e.fu.next();
    (e.Au.set(r, new gu(n)),
      (e.Ru = e.Ru.insert(n, r)),
      cl(
        e.remoteStore,
        new Ps(Ta(ba(n.path)), r, `TargetPurposeLimboResolution`, Hr.ce),
      ));
  }
}
function Ju(e, t, n) {
  return Yu.apply(this, arguments);
}
function Yu() {
  return (
    (Yu = p(function* (e, t, n) {
      let r = j(e),
        i = [],
        a = [],
        o = [];
      r.Tu.isEmpty() ||
        (r.Tu.forEach((e, s) => {
          o.push(
            r.pu(s, t, n).then((e) => {
              if ((e || n) && r.isPrimaryClient) {
                var t;
                let i = e
                  ? !e.fromCache
                  : n == null || (t = n.targetChanges.get(s.targetId)) == null
                    ? void 0
                    : t.current;
                r.sharedClientState.updateQueryState(
                  s.targetId,
                  i ? `current` : `not-current`,
                );
              }
              if (e) {
                i.push(e);
                let t = fc.Is(s.targetId, e);
                a.push(t);
              }
            }),
          );
        }),
        yield Promise.all(o),
        r.Pu.H_(i),
        yield (function () {
          var e = p(function* (e, t) {
            let n = j(e);
            try {
              yield n.persistence.runTransaction(
                `notifyLocalViewChanges`,
                `readwrite`,
                (e) =>
                  B.forEach(t, (t) =>
                    B.forEach(t.Ts, (r) =>
                      n.persistence.referenceDelegate.addReference(
                        e,
                        t.targetId,
                        r,
                      ),
                    ).next(() =>
                      B.forEach(t.Es, (r) =>
                        n.persistence.referenceDelegate.removeReference(
                          e,
                          t.targetId,
                          r,
                        ),
                      ),
                    ),
                  ),
              );
            } catch (e) {
              if (!Vr(e)) throw e;
              O(hc, `Failed to update sequence numbers: ` + e);
            }
            for (let e of t) {
              let t = e.targetId;
              if (!e.fromCache) {
                let e = n.vs.get(t),
                  r = e.snapshotVersion,
                  i = e.withLastLimboFreeSnapshotVersion(r);
                n.vs = n.vs.insert(t, i);
              }
            }
          });
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()(r.localStore, a));
    })),
    Yu.apply(this, arguments)
  );
}
function Xu(e, t) {
  return Zu.apply(this, arguments);
}
function Zu() {
  return (
    (Zu = p(function* (e, t) {
      let n = j(e);
      if (!n.currentUser.isEqual(t)) {
        O(mu, `User change. New user:`, t.toKey());
        let e = yield yc(n.localStore, t);
        ((n.currentUser = t),
          (function (e, t) {
            (e.mu.forEach((e) => {
              e.forEach((e) => {
                e.reject(new N(M.CANCELLED, t));
              });
            }),
              e.mu.clear());
          })(
            n,
            `'waitForPendingWrites' promise is rejected due to a user change.`,
          ),
          n.sharedClientState.handleUserChange(
            t,
            e.removedBatchIds,
            e.addedBatchIds,
          ),
          yield Ju(n, e.Ns));
      }
    })),
    Zu.apply(this, arguments)
  );
}
function Qu(e, t) {
  let n = j(e),
    r = n.Au.get(t);
  if (r && r.hu) return G().add(r.key);
  {
    let e = G(),
      r = n.Eu.get(t);
    if (!r) return e;
    for (let t of r) {
      let r = n.Tu.get(t);
      e = e.unionWith(r.view.nu);
    }
    return e;
  }
}
function $u(e) {
  let t = j(e);
  return (
    (t.remoteStore.remoteSyncer.applyRemoteEvent = Mu.bind(null, t)),
    (t.remoteStore.remoteSyncer.getRemoteKeysForTarget = Qu.bind(null, t)),
    (t.remoteStore.remoteSyncer.rejectListen = Fu.bind(null, t)),
    (t.Pu.H_ = au.bind(null, t.eventManager)),
    (t.Pu.yu = ou.bind(null, t.eventManager)),
    t
  );
}
function ed(e) {
  let t = j(e);
  return (
    (t.remoteStore.remoteSyncer.applySuccessfulWrite = Lu.bind(null, t)),
    (t.remoteStore.remoteSyncer.rejectFailedWrite = zu.bind(null, t)),
    t
  );
}
var td = class {
  constructor() {
    ((this.kind = `memory`), (this.synchronizeTabs = !1));
  }
  initialize(e) {
    var t = this;
    return p(function* () {
      ((t.serializer = Kc(e.databaseInfo.databaseId)),
        (t.sharedClientState = t.Du(e)),
        (t.persistence = t.Cu(e)),
        yield t.persistence.start(),
        (t.localStore = t.vu(e)),
        (t.gcScheduler = t.Fu(e, t.localStore)),
        (t.indexBackfillerScheduler = t.Mu(e, t.localStore)));
    })();
  }
  Fu(e, t) {
    return null;
  }
  Mu(e, t) {
    return null;
  }
  vu(e) {
    return vc(this.persistence, new mc(), e.initialUser, this.serializer);
  }
  Cu(e) {
    return new cc(uc.Vi, this.serializer);
  }
  Du(e) {
    return new Mc();
  }
  terminate() {
    var e = this;
    return p(function* () {
      var t, n;
      ((t = e.gcScheduler) == null || t.stop(),
        (n = e.indexBackfillerScheduler) == null || n.stop(),
        e.sharedClientState.shutdown(),
        yield e.persistence.shutdown());
    })();
  }
};
td.provider = { build: () => new td() };
var nd = class extends td {
    constructor(e) {
      (super(), (this.cacheSizeBytes = e));
    }
    Fu(e, t) {
      A(this.persistence.referenceDelegate instanceof dc, 46915);
      let n = this.persistence.referenceDelegate.garbageCollector;
      return new Js(n, e.asyncQueue, t);
    }
    Cu(e) {
      let t =
        this.cacheSizeBytes === void 0
          ? Hs.DEFAULT
          : Hs.withCacheSize(this.cacheSizeBytes);
      return new cc((e) => dc.Vi(e, t), this.serializer);
    }
  },
  rd = class {
    initialize(e, t) {
      var n = this;
      return p(function* () {
        n.localStore ||
          ((n.localStore = e.localStore),
          (n.sharedClientState = e.sharedClientState),
          (n.datastore = n.createDatastore(t)),
          (n.remoteStore = n.createRemoteStore(t)),
          (n.eventManager = n.createEventManager(t)),
          (n.syncEngine = n.createSyncEngine(t, !e.synchronizeTabs)),
          (n.sharedClientState.onlineStateHandler = (e) =>
            Pu(n.syncEngine, e, 1)),
          (n.remoteStore.remoteSyncer.handleCredentialChange = Xu.bind(
            null,
            n.syncEngine,
          )),
          yield Ul(n.remoteStore, n.syncEngine.isPrimaryClient));
      })();
    }
    createEventManager(e) {
      return (function () {
        return new $l();
      })();
    }
    createDatastore(e) {
      let t = Kc(e.databaseInfo.databaseId),
        n = Wc(e.databaseInfo);
      return el(e.authCredentials, e.appCheckCredentials, n, t);
    }
    createRemoteStore(e) {
      return (function (e, t, n, r, i) {
        return new rl(e, t, n, r, i);
      })(
        this.localStore,
        this.datastore,
        e.asyncQueue,
        (e) => Pu(this.syncEngine, e, 0),
        (function () {
          return Fc.v() ? new Fc() : new Nc();
        })(),
      );
    }
    createSyncEngine(e, t) {
      return (function (e, t, n, r, i, a, o) {
        let s = new _u(e, t, n, r, i, a);
        return (o && (s.gu = !0), s);
      })(
        this.localStore,
        this.remoteStore,
        this.eventManager,
        this.sharedClientState,
        e.initialUser,
        e.maxConcurrentLimboResolutions,
        t,
      );
    }
    terminate() {
      var e = this;
      return p(function* () {
        var t, n;
        (yield (function () {
          var e = p(function* (e) {
            let t = j(e);
            (O(nl, `RemoteStore shutting down.`),
              t.Ia.add(5),
              yield ol(t),
              t.Aa.shutdown(),
              t.Va.set(`Unknown`));
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()(e.remoteStore),
          (t = e.datastore) == null || t.terminate(),
          (n = e.eventManager) == null || n.terminate());
      })();
    }
  };
rd.provider = { build: () => new rd() };
var id = class {
    constructor(e) {
      ((this.observer = e), (this.muted = !1));
    }
    next(e) {
      this.muted || (this.observer.next && this.Ou(this.observer.next, e));
    }
    error(e) {
      this.muted ||
        (this.observer.error
          ? this.Ou(this.observer.error, e)
          : Xn(`Uncaught Error in snapshot listener:`, e.toString()));
    }
    Nu() {
      this.muted = !0;
    }
    Ou(e, t) {
      setTimeout(() => {
        this.muted || e(t);
      }, 0);
    }
  },
  ad = `FirestoreClient`,
  od = class {
    constructor(e, t, n, r, i) {
      var a = this;
      ((this.authCredentials = e),
        (this.appCheckCredentials = t),
        (this.asyncQueue = n),
        (this._databaseInfo = r),
        (this.user = D.UNAUTHENTICATED),
        (this.clientId = ur.newId()),
        (this.authCredentialListener = () => Promise.resolve()),
        (this.appCheckCredentialListener = () => Promise.resolve()),
        (this._uninitializedComponentsProvider = i),
        this.authCredentials.start(
          n,
          (function () {
            var e = p(function* (e) {
              (O(ad, `Received user=`, e.uid),
                yield a.authCredentialListener(e),
                (a.user = e));
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        this.appCheckCredentials.start(
          n,
          (e) => (
            O(ad, `Received new app check token=`, e),
            this.appCheckCredentialListener(e, this.user)
          ),
        ));
    }
    get configuration() {
      return {
        asyncQueue: this.asyncQueue,
        databaseInfo: this._databaseInfo,
        clientId: this.clientId,
        authCredentials: this.authCredentials,
        appCheckCredentials: this.appCheckCredentials,
        initialUser: this.user,
        maxConcurrentLimboResolutions: 100,
      };
    }
    setCredentialChangeListener(e) {
      this.authCredentialListener = e;
    }
    setAppCheckTokenChangeListener(e) {
      this.appCheckCredentialListener = e;
    }
    terminate() {
      var e = this;
      this.asyncQueue.enterRestrictedMode();
      let t = new er();
      return (
        this.asyncQueue.enqueueAndForgetEvenWhileRestricted(
          p(function* () {
            try {
              (e._onlineComponents && (yield e._onlineComponents.terminate()),
                e._offlineComponents &&
                  (yield e._offlineComponents.terminate()),
                e.authCredentials.shutdown(),
                e.appCheckCredentials.shutdown(),
                t.resolve());
            } catch (e) {
              let n = Jl(e, `Failed to shutdown persistence`);
              t.reject(n);
            }
          }),
        ),
        t.promise
      );
    }
  };
function sd(e, t) {
  return cd.apply(this, arguments);
}
function cd() {
  return (
    (cd = p(function* (e, t) {
      (e.asyncQueue.verifyOperationInProgress(),
        O(ad, `Initializing OfflineComponentProvider`));
      let n = e.configuration;
      yield t.initialize(n);
      let r = n.initialUser;
      (e.setCredentialChangeListener(
        (function () {
          var e = p(function* (e) {
            r.isEqual(e) || (yield yc(t.localStore, e), (r = e));
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      ),
        t.persistence.setDatabaseDeletedListener(() => e.terminate()),
        (e._offlineComponents = t));
    })),
    cd.apply(this, arguments)
  );
}
function ld(e, t) {
  return ud.apply(this, arguments);
}
function ud() {
  return (
    (ud = p(function* (e, t) {
      e.asyncQueue.verifyOperationInProgress();
      let n = yield dd(e);
      (O(ad, `Initializing OnlineComponentProvider`),
        yield t.initialize(n, e.configuration),
        e.setCredentialChangeListener((e) => Vl(t.remoteStore, e)),
        e.setAppCheckTokenChangeListener((e, n) => Vl(t.remoteStore, n)),
        (e._onlineComponents = t));
    })),
    ud.apply(this, arguments)
  );
}
function dd(e) {
  return fd.apply(this, arguments);
}
function fd() {
  return (
    (fd = p(function* (e) {
      if (!e._offlineComponents)
        if (e._uninitializedComponentsProvider) {
          O(ad, `Using user provided OfflineComponentProvider`);
          try {
            yield sd(e, e._uninitializedComponentsProvider._offline);
          } catch (t) {
            let n = t;
            if (
              !(function (e) {
                return e.name === `FirebaseError`
                  ? e.code === M.FAILED_PRECONDITION ||
                      e.code === M.UNIMPLEMENTED
                  : !(typeof DOMException < `u` && e instanceof DOMException) ||
                      e.code === 22 ||
                      e.code === 20 ||
                      e.code === 11;
              })(n)
            )
              throw n;
            (Zn(
              `Error using user provided cache. Falling back to memory cache: ` +
                n,
            ),
              yield sd(e, new td()));
          }
        } else
          (O(ad, `Using default OfflineComponentProvider`),
            yield sd(e, new nd(void 0)));
      return e._offlineComponents;
    })),
    fd.apply(this, arguments)
  );
}
function pd(e) {
  return md.apply(this, arguments);
}
function md() {
  return (
    (md = p(function* (e) {
      return (
        e._onlineComponents ||
          (e._uninitializedComponentsProvider
            ? (O(ad, `Using user provided OnlineComponentProvider`),
              yield ld(e, e._uninitializedComponentsProvider._online))
            : (O(ad, `Using default OnlineComponentProvider`),
              yield ld(e, new rd()))),
        e._onlineComponents
      );
    })),
    md.apply(this, arguments)
  );
}
function hd(e) {
  return pd(e).then((e) => e.syncEngine);
}
function gd(e) {
  return _d.apply(this, arguments);
}
function _d() {
  return (
    (_d = p(function* (e) {
      let t = yield pd(e),
        n = t.eventManager;
      return (
        (n.onListen = vu.bind(null, t.syncEngine)),
        (n.onUnlisten = Eu.bind(null, t.syncEngine)),
        (n.onFirstRemoteStoreListen = bu.bind(null, t.syncEngine)),
        (n.onLastRemoteStoreUnlisten = Ou.bind(null, t.syncEngine)),
        n
      );
    })),
    _d.apply(this, arguments)
  );
}
function vd(e, t, n, r) {
  let i = new id(r),
    a = new uu(t, i, n);
  return (
    e.asyncQueue.enqueueAndForget(
      p(function* () {
        return tu(yield gd(e), a);
      }),
    ),
    () => {
      (i.Nu(),
        e.asyncQueue.enqueueAndForget(
          p(function* () {
            return ru(yield gd(e), a);
          }),
        ));
    }
  );
}
function yd(e, t, n = {}) {
  let r = new er();
  return (
    e.asyncQueue.enqueueAndForget(
      p(function* () {
        return (function (e, t, n, r, i) {
          let a = new id({
              next: (s) => {
                (a.Nu(), t.enqueueAndForget(() => ru(e, o)));
                let c = s.docs.has(n);
                !c && s.fromCache
                  ? i.reject(
                      new N(
                        M.UNAVAILABLE,
                        `Failed to get document because the client is offline.`,
                      ),
                    )
                  : c && s.fromCache && r && r.source === `server`
                    ? i.reject(
                        new N(
                          M.UNAVAILABLE,
                          `Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)`,
                        ),
                      )
                    : i.resolve(s);
              },
              error: (e) => i.reject(e),
            }),
            o = new uu(ba(n.path), a, { includeMetadataChanges: !0, qa: !0 });
          return tu(e, o);
        })(yield gd(e), e.asyncQueue, t, n, r);
      }),
    ),
    r.promise
  );
}
function bd(e, t) {
  let n = new er();
  return (
    e.asyncQueue.enqueueAndForget(
      p(function* () {
        return Au(yield hd(e), t, n);
      }),
    ),
    n.promise
  );
}
function xd(e) {
  let t = {};
  return (
    e.timeoutSeconds !== void 0 && (t.timeoutSeconds = e.timeoutSeconds),
    t
  );
}
var Sd = `ComponentProvider`,
  Cd = new Map();
function wd(e, t, n, r, i) {
  return new gi(
    e,
    t,
    n,
    i.host,
    i.ssl,
    i.experimentalForceLongPolling,
    i.experimentalAutoDetectLongPolling,
    xd(i.experimentalLongPollingOptions),
    i.useFetchStreams,
    i.isUsingEmulator,
    r,
  );
}
var Td = `firestore.googleapis.com`,
  Ed = !0,
  Dd = class {
    constructor(e) {
      var t, n;
      if (e.host === void 0) {
        if (e.ssl !== void 0)
          throw new N(
            M.INVALID_ARGUMENT,
            `Can't provide ssl option if host option is not set`,
          );
        ((this.host = Td), (this.ssl = Ed));
      } else ((this.host = e.host), (this.ssl = (t = e.ssl) == null ? Ed : t));
      if (
        ((this.isUsingEmulator = e.emulatorOptions !== void 0),
        (this.credentials = e.credentials),
        (this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties),
        (this.localCache = e.localCache),
        e.cacheSizeBytes === void 0)
      )
        this.cacheSizeBytes = Vs;
      else {
        if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < Gs)
          throw new N(
            M.INVALID_ARGUMENT,
            `cacheSizeBytes must be at least 1048576`,
          );
        this.cacheSizeBytes = e.cacheSizeBytes;
      }
      (xr(
        `experimentalForceLongPolling`,
        e.experimentalForceLongPolling,
        `experimentalAutoDetectLongPolling`,
        e.experimentalAutoDetectLongPolling,
      ),
        (this.experimentalForceLongPolling = !!e.experimentalForceLongPolling),
        this.experimentalForceLongPolling
          ? (this.experimentalAutoDetectLongPolling = !1)
          : e.experimentalAutoDetectLongPolling === void 0
            ? (this.experimentalAutoDetectLongPolling = !0)
            : (this.experimentalAutoDetectLongPolling =
                !!e.experimentalAutoDetectLongPolling),
        (this.experimentalLongPollingOptions = xd(
          (n = e.experimentalLongPollingOptions) == null ? {} : n,
        )),
        (function (e) {
          if (e.timeoutSeconds !== void 0) {
            if (isNaN(e.timeoutSeconds))
              throw new N(
                M.INVALID_ARGUMENT,
                `invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`,
              );
            if (e.timeoutSeconds < 5)
              throw new N(
                M.INVALID_ARGUMENT,
                `invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`,
              );
            if (e.timeoutSeconds > 30)
              throw new N(
                M.INVALID_ARGUMENT,
                `invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`,
              );
          }
        })(this.experimentalLongPollingOptions),
        (this.useFetchStreams = !!e.useFetchStreams));
    }
    isEqual(e) {
      return (
        this.host === e.host &&
        this.ssl === e.ssl &&
        this.credentials === e.credentials &&
        this.cacheSizeBytes === e.cacheSizeBytes &&
        this.experimentalForceLongPolling === e.experimentalForceLongPolling &&
        this.experimentalAutoDetectLongPolling ===
          e.experimentalAutoDetectLongPolling &&
        (function (e, t) {
          return e.timeoutSeconds === t.timeoutSeconds;
        })(
          this.experimentalLongPollingOptions,
          e.experimentalLongPollingOptions,
        ) &&
        this.ignoreUndefinedProperties === e.ignoreUndefinedProperties &&
        this.useFetchStreams === e.useFetchStreams
      );
    }
  },
  Od = class {
    constructor(e, t, n, r) {
      ((this._authCredentials = e),
        (this._appCheckCredentials = t),
        (this._databaseId = n),
        (this._app = r),
        (this.type = `firestore-lite`),
        (this._persistenceKey = `(lite)`),
        (this._settings = new Dd({})),
        (this._settingsFrozen = !1),
        (this._emulatorOptions = {}),
        (this._terminateTask = `notTerminated`));
    }
    get app() {
      if (!this._app)
        throw new N(
          M.FAILED_PRECONDITION,
          `Firestore was not initialized using the Firebase SDK. 'app' is not available`,
        );
      return this._app;
    }
    get _initialized() {
      return this._settingsFrozen;
    }
    get _terminated() {
      return this._terminateTask !== `notTerminated`;
    }
    _setSettings(e) {
      if (this._settingsFrozen)
        throw new N(
          M.FAILED_PRECONDITION,
          `Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.`,
        );
      ((this._settings = new Dd(e)),
        (this._emulatorOptions = e.emulatorOptions || {}),
        e.credentials !== void 0 &&
          (this._authCredentials = (function (e) {
            if (!e) return new nr();
            switch (e.type) {
              case `firstParty`:
                return new or(
                  e.sessionIndex || `0`,
                  e.iamToken || null,
                  e.authTokenFactory || null,
                );
              case `provider`:
                return e.client;
              default:
                throw new N(
                  M.INVALID_ARGUMENT,
                  `makeAuthCredentialsProvider failed due to invalid credential type`,
                );
            }
          })(e.credentials)));
    }
    _getSettings() {
      return this._settings;
    }
    _getEmulatorOptions() {
      return this._emulatorOptions;
    }
    _freezeSettings() {
      return ((this._settingsFrozen = !0), this._settings);
    }
    _delete() {
      return (
        this._terminateTask === `notTerminated` &&
          (this._terminateTask = this._terminate()),
        this._terminateTask
      );
    }
    _restart() {
      var e = this;
      return p(function* () {
        e._terminateTask === `notTerminated`
          ? yield e._terminate()
          : (e._terminateTask = `notTerminated`);
      })();
    }
    toJSON() {
      return {
        app: this._app,
        databaseId: this._databaseId,
        settings: this._settings,
      };
    }
    _terminate() {
      return (
        (function (e) {
          let t = Cd.get(e);
          t && (O(Sd, `Removing Datastore`), Cd.delete(e), t.terminate());
        })(this),
        Promise.resolve()
      );
    }
  };
function kd(e, t, n, r = {}) {
  e = Er(e, Od);
  let i = Re(t),
    a = e._getSettings(),
    o = u(u({}, a), {}, { emulatorOptions: e._getEmulatorOptions() }),
    s = `${t}:${n}`;
  (i && ze(`https://${s}`),
    a.host !== Td &&
      a.host !== s &&
      Zn(
        `Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.`,
      ));
  let c = u(u({}, a), {}, { host: s, ssl: i, emulatorOptions: r });
  if (!je(c, o) && (e._setSettings(c), r.mockUserToken)) {
    let t, n;
    if (typeof r.mockUserToken == `string`)
      ((t = r.mockUserToken), (n = D.MOCK_USER));
    else {
      var l;
      t = he(
        r.mockUserToken,
        (l = e._app) == null ? void 0 : l.options.projectId,
      );
      let i = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!i)
        throw new N(
          M.INVALID_ARGUMENT,
          `mockUserToken must contain 'sub' or 'user_id' field!`,
        );
      n = new D(i);
    }
    e._authCredentials = new rr(new tr(t, n));
  }
}
var Ad = class e {
    constructor(e, t, n) {
      ((this.converter = t),
        (this._query = n),
        (this.type = `query`),
        (this.firestore = e));
    }
    withConverter(t) {
      return new e(this.firestore, t, this._query);
    }
  },
  X = class e {
    constructor(e, t, n) {
      ((this.converter = t),
        (this._key = n),
        (this.type = `document`),
        (this.firestore = e));
    }
    get _path() {
      return this._key.path;
    }
    get id() {
      return this._key.path.lastSegment();
    }
    get path() {
      return this._key.path.canonicalString();
    }
    get parent() {
      return new jd(this.firestore, this.converter, this._key.path.popLast());
    }
    withConverter(t) {
      return new e(this.firestore, t, this._key);
    }
    toJSON() {
      return {
        type: e._jsonSchemaVersion,
        referencePath: this._key.toString(),
      };
    }
    static fromJSON(t, n, r) {
      if (Dr(n, e._jsonSchema))
        return new e(t, r || null, new I(F.fromString(n.referencePath)));
    }
  };
((X._jsonSchemaVersion = `firestore/documentReference/1.0`),
  (X._jsonSchema = {
    type: L(`string`, X._jsonSchemaVersion),
    referencePath: L(`string`),
  }));
var jd = class e extends Ad {
  constructor(e, t, n) {
    (super(e, t, ba(n)), (this._path = n), (this.type = `collection`));
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    let e = this._path.popLast();
    return e.isEmpty() ? null : new X(this.firestore, null, new I(e));
  }
  withConverter(t) {
    return new e(this.firestore, t, this._path);
  }
};
function Md(e, t, ...n) {
  if (((e = S(e)), br(`collection`, `path`, t), e instanceof Od)) {
    let r = F.fromString(t, ...n);
    return (Cr(r), new jd(e, null, r));
  }
  {
    if (!(e instanceof X || e instanceof jd))
      throw new N(
        M.INVALID_ARGUMENT,
        `Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore`,
      );
    let r = e._path.child(F.fromString(t, ...n));
    return (Cr(r), new jd(e.firestore, null, r));
  }
}
function Nd(e, t, ...n) {
  if (
    ((e = S(e)),
    arguments.length === 1 && (t = ur.newId()),
    br(`doc`, `path`, t),
    e instanceof Od)
  ) {
    let r = F.fromString(t, ...n);
    return (Sr(r), new X(e, null, new I(r)));
  }
  {
    if (!(e instanceof X || e instanceof jd))
      throw new N(
        M.INVALID_ARGUMENT,
        `Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore`,
      );
    let r = e._path.child(F.fromString(t, ...n));
    return (
      Sr(r),
      new X(e.firestore, e instanceof jd ? e.converter : null, new I(r))
    );
  }
}
var Pd = `AsyncQueue`,
  Fd = class {
    constructor(e = Promise.resolve()) {
      ((this.Yu = []),
        (this.ec = !1),
        (this.tc = []),
        (this.nc = null),
        (this.rc = !1),
        (this.sc = !1),
        (this.oc = []),
        (this.M_ = new qc(this, `async_queue_retry`)),
        (this._c = () => {
          let e = Gc();
          (e && O(Pd, `Visibility state changed to ` + e.visibilityState),
            this.M_.w_());
        }),
        (this.ac = e));
      let t = Gc();
      t &&
        typeof t.addEventListener == `function` &&
        t.addEventListener(`visibilitychange`, this._c);
    }
    get isShuttingDown() {
      return this.ec;
    }
    enqueueAndForget(e) {
      this.enqueue(e);
    }
    enqueueAndForgetEvenWhileRestricted(e) {
      (this.uc(), this.cc(e));
    }
    enterRestrictedMode(e) {
      if (!this.ec) {
        ((this.ec = !0), (this.sc = e || !1));
        let t = Gc();
        t &&
          typeof t.removeEventListener == `function` &&
          t.removeEventListener(`visibilitychange`, this._c);
      }
    }
    enqueue(e) {
      if ((this.uc(), this.ec)) return new Promise(() => {});
      let t = new er();
      return this.cc(() =>
        this.ec && this.sc
          ? Promise.resolve()
          : (e().then(t.resolve, t.reject), t.promise),
      ).then(() => t.promise);
    }
    enqueueRetryable(e) {
      this.enqueueAndForget(() => (this.Yu.push(e), this.lc()));
    }
    lc() {
      var e = this;
      return p(function* () {
        if (e.Yu.length !== 0) {
          try {
            (yield e.Yu[0](), e.Yu.shift(), e.M_.reset());
          } catch (e) {
            if (!Vr(e)) throw e;
            O(Pd, `Operation failed with retryable error: ` + e);
          }
          e.Yu.length > 0 && e.M_.p_(() => e.lc());
        }
      })();
    }
    cc(e) {
      let t = this.ac.then(
        () => (
          (this.rc = !0),
          e()
            .catch((e) => {
              throw (
                (this.nc = e),
                (this.rc = !1),
                Xn(`INTERNAL UNHANDLED ERROR: `, Id(e)),
                e
              );
            })
            .then((e) => ((this.rc = !1), e))
        ),
      );
      return ((this.ac = t), t);
    }
    enqueueAfterDelay(e, t, n) {
      (this.uc(), this.oc.indexOf(e) > -1 && (t = 0));
      let r = ql.createAndSchedule(this, e, t, n, (e) => this.hc(e));
      return (this.tc.push(r), r);
    }
    uc() {
      this.nc && k(47125, { Pc: Id(this.nc) });
    }
    verifyOperationInProgress() {}
    Tc() {
      var e = this;
      return p(function* () {
        let t;
        do ((t = e.ac), yield t);
        while (t !== e.ac);
      })();
    }
    Ec(e) {
      for (let t of this.tc) if (t.timerId === e) return !0;
      return !1;
    }
    Ic(e) {
      return this.Tc().then(() => {
        this.tc.sort((e, t) => e.targetTimeMs - t.targetTimeMs);
        for (let t of this.tc)
          if ((t.skipDelay(), e !== `all` && t.timerId === e)) break;
        return this.Tc();
      });
    }
    Rc(e) {
      this.oc.push(e);
    }
    hc(e) {
      let t = this.tc.indexOf(e);
      this.tc.splice(t, 1);
    }
  };
function Id(e) {
  let t = e.message || ``;
  return (
    e.stack &&
      (t = e.stack.includes(e.message)
        ? e.stack
        : e.message +
          `
` +
          e.stack),
    t
  );
}
var Ld = class extends Od {
  constructor(e, t, n, r) {
    (super(e, t, n, r),
      (this.type = `firestore`),
      (this._queue = new Fd()),
      (this._persistenceKey = (r == null ? void 0 : r.name) || `[DEFAULT]`));
  }
  _terminate() {
    var e = this;
    return p(function* () {
      if (e._firestoreClient) {
        let t = e._firestoreClient.terminate();
        ((e._queue = new Fd(t)), (e._firestoreClient = void 0), yield t);
      }
    })();
  }
};
function Rd(e, t) {
  let n = typeof e == `object` ? e : fn(),
    r = typeof e == `string` ? e : t || _i,
    i = on(n, `firestore`).getImmediate({ identifier: r });
  if (!i._initialized) {
    let e = de(`firestore`);
    e && kd(i, ...e);
  }
  return i;
}
function zd(e) {
  if (e._terminated)
    throw new N(
      M.FAILED_PRECONDITION,
      `The client has already been terminated.`,
    );
  return (e._firestoreClient || Bd(e), e._firestoreClient);
}
function Bd(e) {
  var t, n, r, i;
  let a = e._freezeSettings(),
    o = wd(
      e._databaseId,
      ((t = e._app) == null ? void 0 : t.options.appId) || ``,
      e._persistenceKey,
      (n = e._app) == null ? void 0 : n.options.apiKey,
      a,
    );
  (e._componentsProvider ||
    ((r = a.localCache) != null &&
      r._offlineComponentProvider &&
      (i = a.localCache) != null &&
      i._onlineComponentProvider &&
      (e._componentsProvider = {
        _offline: a.localCache._offlineComponentProvider,
        _online: a.localCache._onlineComponentProvider,
      })),
    (e._firestoreClient = new od(
      e._authCredentials,
      e._appCheckCredentials,
      e._queue,
      o,
      e._componentsProvider &&
        (function (e) {
          let t = e == null ? void 0 : e._online.build();
          return {
            _offline: e == null ? void 0 : e._offline.build(t),
            _online: t,
          };
        })(e._componentsProvider),
    )));
}
var Vd = class e {
  constructor(e) {
    this._byteString = e;
  }
  static fromBase64String(t) {
    try {
      return new e(ai.fromBase64String(t));
    } catch (e) {
      throw new N(
        M.INVALID_ARGUMENT,
        `Failed to construct data from Base64 string: ` + e,
      );
    }
  }
  static fromUint8Array(t) {
    return new e(ai.fromUint8Array(t));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return `Bytes(base64: ` + this.toBase64() + `)`;
  }
  isEqual(e) {
    return this._byteString.isEqual(e._byteString);
  }
  toJSON() {
    return { type: e._jsonSchemaVersion, bytes: this.toBase64() };
  }
  static fromJSON(t) {
    if (Dr(t, e._jsonSchema)) return e.fromBase64String(t.bytes);
  }
};
((Vd._jsonSchemaVersion = `firestore/bytes/1.0`),
  (Vd._jsonSchema = {
    type: L(`string`, Vd._jsonSchemaVersion),
    bytes: L(`string`),
  }));
var Hd = class {
    constructor(...e) {
      for (let t = 0; t < e.length; ++t)
        if (e[t].length === 0)
          throw new N(
            M.INVALID_ARGUMENT,
            `Invalid field name at argument $(i + 1). Field names must not be empty.`,
          );
      this._internalPath = new yr(e);
    }
    isEqual(e) {
      return this._internalPath.isEqual(e._internalPath);
    }
  },
  Ud = class {
    constructor(e) {
      this._methodName = e;
    }
  },
  Wd = class e {
    constructor(e, t) {
      if (!isFinite(e) || e < -90 || e > 90)
        throw new N(
          M.INVALID_ARGUMENT,
          `Latitude must be a number between -90 and 90, but was: ` + e,
        );
      if (!isFinite(t) || t < -180 || t > 180)
        throw new N(
          M.INVALID_ARGUMENT,
          `Longitude must be a number between -180 and 180, but was: ` + t,
        );
      ((this._lat = e), (this._long = t));
    }
    get latitude() {
      return this._lat;
    }
    get longitude() {
      return this._long;
    }
    isEqual(e) {
      return this._lat === e._lat && this._long === e._long;
    }
    _compareTo(e) {
      return P(this._lat, e._lat) || P(this._long, e._long);
    }
    toJSON() {
      return {
        latitude: this._lat,
        longitude: this._long,
        type: e._jsonSchemaVersion,
      };
    }
    static fromJSON(t) {
      if (Dr(t, e._jsonSchema)) return new e(t.latitude, t.longitude);
    }
  };
((Wd._jsonSchemaVersion = `firestore/geoPoint/1.0`),
  (Wd._jsonSchema = {
    type: L(`string`, Wd._jsonSchemaVersion),
    latitude: L(`number`),
    longitude: L(`number`),
  }));
var Gd = class e {
  constructor(e) {
    this._values = (e || []).map((e) => e);
  }
  toArray() {
    return this._values.map((e) => e);
  }
  isEqual(e) {
    return (function (e, t) {
      if (e.length !== t.length) return !1;
      for (let n = 0; n < e.length; ++n) if (e[n] !== t[n]) return !1;
      return !0;
    })(this._values, e._values);
  }
  toJSON() {
    return { type: e._jsonSchemaVersion, vectorValues: this._values };
  }
  static fromJSON(t) {
    if (Dr(t, e._jsonSchema)) {
      if (
        Array.isArray(t.vectorValues) &&
        t.vectorValues.every((e) => typeof e == `number`)
      )
        return new e(t.vectorValues);
      throw new N(
        M.INVALID_ARGUMENT,
        `Expected 'vectorValues' field to be a number array`,
      );
    }
  }
};
((Gd._jsonSchemaVersion = `firestore/vectorValue/1.0`),
  (Gd._jsonSchema = {
    type: L(`string`, Gd._jsonSchemaVersion),
    vectorValues: L(`object`),
  }));
var Kd = /^__.*__$/,
  qd = class {
    constructor(e, t, n) {
      ((this.data = e), (this.fieldMask = t), (this.fieldTransforms = n));
    }
    toMutation(e, t) {
      return this.fieldMask === null
        ? new Co(e, this.data, t, this.fieldTransforms)
        : new wo(e, this.data, this.fieldMask, t, this.fieldTransforms);
    }
  };
function Jd(e) {
  switch (e) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw k(40011, { dataSource: e });
  }
}
var Yd = class e {
    constructor(e, t, n, r, i, a) {
      ((this.settings = e),
        (this.databaseId = t),
        (this.serializer = n),
        (this.ignoreUndefinedProperties = r),
        i === void 0 && this.Ac(),
        (this.fieldTransforms = i || []),
        (this.fieldMask = a || []));
    }
    get path() {
      return this.settings.path;
    }
    get dataSource() {
      return this.settings.dataSource;
    }
    i(t) {
      return new e(
        u(u({}, this.settings), t),
        this.databaseId,
        this.serializer,
        this.ignoreUndefinedProperties,
        this.fieldTransforms,
        this.fieldMask,
      );
    }
    dc(e) {
      var t;
      let n = (t = this.path) == null ? void 0 : t.child(e),
        r = this.i({ path: n, arrayElement: !1 });
      return (r.mc(e), r);
    }
    fc(e) {
      var t;
      let n = (t = this.path) == null ? void 0 : t.child(e),
        r = this.i({ path: n, arrayElement: !1 });
      return (r.Ac(), r);
    }
    gc(e) {
      return this.i({ path: void 0, arrayElement: !0 });
    }
    yc(e) {
      return lf(
        e,
        this.settings.methodName,
        this.settings.hasConverter || !1,
        this.path,
        this.settings.targetDoc,
      );
    }
    contains(e) {
      return (
        this.fieldMask.find((t) => e.isPrefixOf(t)) !== void 0 ||
        this.fieldTransforms.find((t) => e.isPrefixOf(t.field)) !== void 0
      );
    }
    Ac() {
      if (this.path)
        for (let e = 0; e < this.path.length; e++) this.mc(this.path.get(e));
    }
    mc(e) {
      if (e.length === 0) throw this.yc(`Document fields must not be empty`);
      if (Jd(this.dataSource) && Kd.test(e))
        throw this.yc(`Document fields cannot begin and end with "__"`);
    }
  },
  Xd = class {
    constructor(e, t, n) {
      ((this.databaseId = e),
        (this.ignoreUndefinedProperties = t),
        (this.serializer = n || Kc(e)));
    }
    I(e, t, n, r = !1) {
      return new Yd(
        {
          dataSource: e,
          methodName: t,
          targetDoc: n,
          path: yr.emptyPath(),
          arrayElement: !1,
          hasConverter: r,
        },
        this.databaseId,
        this.serializer,
        this.ignoreUndefinedProperties,
      );
    }
  };
function Zd(e) {
  let t = e._freezeSettings(),
    n = Kc(e._databaseId);
  return new Xd(e._databaseId, !!t.ignoreUndefinedProperties, n);
}
function Qd(e, t, n, r, i, a = {}) {
  let o = e.I(a.merge || a.mergeFields ? 2 : 0, t, n, i);
  af(`Data must be an object, but it was:`, o, r);
  let s = nf(r, o),
    c,
    l;
  if (a.merge) ((c = new ri(o.fieldMask)), (l = o.fieldTransforms));
  else if (a.mergeFields) {
    let e = [];
    for (let r of a.mergeFields) {
      let i = of(t, r, n);
      if (!o.contains(i))
        throw new N(
          M.INVALID_ARGUMENT,
          `Field '${i}' is specified in your field mask but missing from your input data.`,
        );
      uf(e, i) || e.push(i);
    }
    ((c = new ri(e)), (l = o.fieldTransforms.filter((e) => c.covers(e.field))));
  } else ((c = null), (l = o.fieldTransforms));
  return new qd(new Ui(s), c, l);
}
var $d = class e extends Ud {
  _toFieldTransform(e) {
    return new fo(e.path, new ro());
  }
  isEqual(t) {
    return t instanceof e;
  }
};
function ef(e, t, n, r = !1) {
  return tf(n, e.I(r ? 4 : 3, t));
}
function tf(e, t) {
  if (rf((e = S(e)))) return (af(`Unsupported field value:`, t, e), nf(e, t));
  if (e instanceof Ud)
    return (
      (function (e, t) {
        if (!Jd(t.dataSource))
          throw t.yc(
            `${e._methodName}() can only be used with update() and set()`,
          );
        if (!t.path)
          throw t.yc(
            `${e._methodName}() is not currently supported inside arrays`,
          );
        let n = e._toFieldTransform(t);
        n && t.fieldTransforms.push(n);
      })(e, t),
      null
    );
  if (e === void 0 && t.ignoreUndefinedProperties) return null;
  if ((t.path && t.fieldMask.push(t.path), e instanceof Array)) {
    if (t.settings.arrayElement && t.dataSource !== 4)
      throw t.yc(`Nested arrays are not supported`);
    return (function (e, t) {
      let n = [],
        r = 0;
      for (let i of e) {
        let e = tf(i, t.gc(r));
        (e == null && (e = { nullValue: `NULL_VALUE` }), n.push(e), r++);
      }
      return { arrayValue: { values: n } };
    })(e, t);
  }
  return (function (e, t) {
    if ((e = S(e)) === null) return { nullValue: `NULL_VALUE` };
    if (typeof e == `number`) return Qa(t.serializer, e);
    if (typeof e == `boolean`) return { booleanValue: e };
    if (typeof e == `string`) return { stringValue: e };
    if (e instanceof Date) {
      let n = R.fromDate(e);
      return { timestampValue: rs(t.serializer, n) };
    }
    if (e instanceof R) {
      let n = new R(e.seconds, 1e3 * Math.floor(e.nanoseconds / 1e3));
      return { timestampValue: rs(t.serializer, n) };
    }
    if (e instanceof Wd)
      return {
        geoPointValue: { latitude: e.latitude, longitude: e.longitude },
      };
    if (e instanceof Vd) return { bytesValue: is(t.serializer, e._byteString) };
    if (e instanceof X) {
      let n = t.databaseId,
        r = e.firestore._databaseId;
      if (!r.isEqual(n))
        throw t.yc(
          `Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`,
        );
      return {
        referenceValue: ss(
          e.firestore._databaseId || t.databaseId,
          e._key.path,
        ),
      };
    }
    if (e instanceof Gd)
      return (function (e, t) {
        let n = e instanceof Gd ? e.toArray() : e;
        return {
          mapValue: {
            fields: {
              [bi]: { stringValue: Ci },
              [wi]: {
                arrayValue: {
                  values: n.map((e) => {
                    if (typeof e != `number`)
                      throw t.yc(
                        `VectorValues must only contain numeric values.`,
                      );
                    return Xa(t.serializer, e);
                  }),
                },
              },
            },
          },
        };
      })(e, t);
    if (Ns(e)) return e._toProto(t.serializer);
    throw t.yc(`Unsupported field value: ${Tr(e)}`);
  })(e, t);
}
function nf(e, t) {
  let n = {};
  return (
    $r(e)
      ? t.path && t.path.length > 0 && t.fieldMask.push(t.path)
      : Qr(e, (e, r) => {
          let i = tf(r, t.dc(e));
          i != null && (n[e] = i);
        }),
    { mapValue: { fields: n } }
  );
}
function rf(e) {
  return !(
    typeof e != `object` ||
    !e ||
    e instanceof Array ||
    e instanceof Date ||
    e instanceof R ||
    e instanceof Wd ||
    e instanceof Vd ||
    e instanceof X ||
    e instanceof Ud ||
    e instanceof Gd ||
    Ns(e)
  );
}
function af(e, t, n) {
  if (!rf(n) || !wr(n)) {
    let r = Tr(n);
    throw r === `an object` ? t.yc(e + ` a custom object`) : t.yc(e + ` ` + r);
  }
}
function of(e, t, n) {
  if ((t = S(t)) instanceof Hd) return t._internalPath;
  if (typeof t == `string`) return cf(e, t);
  throw lf(`Field path arguments must be of type string or `, e, !1, void 0, n);
}
var sf = RegExp(`[~\\*/\\[\\]]`);
function cf(e, t, n) {
  if (t.search(sf) >= 0)
    throw lf(
      `Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,
      e,
      !1,
      void 0,
      n,
    );
  try {
    return new Hd(...t.split(`.`))._internalPath;
  } catch (r) {
    throw lf(
      `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      e,
      !1,
      void 0,
      n,
    );
  }
}
function lf(e, t, n, r, i) {
  let a = r && !r.isEmpty(),
    o = i !== void 0,
    s = `Function ${t}() called with invalid data`;
  (n && (s += " (via `toFirestore()`)"), (s += `. `));
  let c = ``;
  return (
    (a || o) &&
      ((c += ` (found`),
      a && (c += ` in field ${r}`),
      o && (c += ` in document ${i}`),
      (c += `)`)),
    new N(M.INVALID_ARGUMENT, s + e + c)
  );
}
function uf(e, t) {
  return e.some((e) => e.isEqual(t));
}
var df = class {
    convertValue(e, t = `none`) {
      switch (Ti(e)) {
        case 0:
          return null;
        case 1:
          return e.booleanValue;
        case 2:
          return U(e.integerValue || e.doubleValue);
        case 3:
          return this.convertTimestamp(e.timestampValue);
        case 4:
          return this.convertServerTimestamp(e, t);
        case 5:
          return e.stringValue;
        case 6:
          return this.convertBytes(ci(e.bytesValue));
        case 7:
          return this.convertReference(e.referenceValue);
        case 8:
          return this.convertGeoPoint(e.geoPointValue);
        case 9:
          return this.convertArray(e.arrayValue, t);
        case 11:
          return this.convertObject(e.mapValue, t);
        case 10:
          return this.convertVectorValue(e.mapValue);
        default:
          throw k(62114, { value: e });
      }
    }
    convertObject(e, t) {
      return this.convertObjectMap(e.fields, t);
    }
    convertObjectMap(e, t = `none`) {
      let n = {};
      return (
        Qr(e, (e, r) => {
          n[e] = this.convertValue(r, t);
        }),
        n
      );
    }
    convertVectorValue(e) {
      var t;
      return new Gd(
        (t = e.fields) == null ||
          (t = t[wi].arrayValue) == null ||
          (t = t.values) == null
          ? void 0
          : t.map((e) => U(e.doubleValue)),
      );
    }
    convertGeoPoint(e) {
      return new Wd(U(e.latitude), U(e.longitude));
    }
    convertArray(e, t) {
      return (e.values || []).map((e) => this.convertValue(e, t));
    }
    convertServerTimestamp(e, t) {
      switch (t) {
        case `previous`:
          let n = mi(e);
          return n == null ? null : this.convertValue(n, t);
        case `estimate`:
          return this.convertTimestamp(hi(e));
        default:
          return null;
      }
    }
    convertTimestamp(e) {
      let t = si(e);
      return new R(t.seconds, t.nanos);
    }
    convertDocumentKey(e, t) {
      let n = F.fromString(e);
      A(Ms(n), 9688, { name: e });
      let r = new vi(n.get(1), n.get(3)),
        i = new I(n.popFirst(5));
      return (
        r.isEqual(t) ||
          Xn(
            `Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`,
          ),
        i
      );
    }
  },
  ff = class extends df {
    constructor(e) {
      (super(), (this.firestore = e));
    }
    convertBytes(e) {
      return new Vd(e);
    }
    convertReference(e) {
      let t = this.convertDocumentKey(e, this.firestore._databaseId);
      return new X(this.firestore, null, t);
    }
  };
function pf() {
  return new $d(`serverTimestamp`);
}
d();
var mf = `@firebase/firestore`,
  hf = `4.14.0`;
function gf(e) {
  return (function (e, t) {
    if (typeof e != `object` || !e) return !1;
    let n = e;
    for (let e of t) if (e in n && typeof n[e] == `function`) return !0;
    return !1;
  })(e, [`next`, `error`, `complete`]);
}
var _f = class {
    constructor(e, t, n, r, i) {
      ((this._firestore = e),
        (this._userDataWriter = t),
        (this._key = n),
        (this._document = r),
        (this._converter = i));
    }
    get id() {
      return this._key.path.lastSegment();
    }
    get ref() {
      return new X(this._firestore, this._converter, this._key);
    }
    exists() {
      return this._document !== null;
    }
    data() {
      if (this._document) {
        if (this._converter) {
          let e = new vf(
            this._firestore,
            this._userDataWriter,
            this._key,
            this._document,
            null,
          );
          return this._converter.fromFirestore(e);
        }
        return this._userDataWriter.convertValue(this._document.data.value);
      }
    }
    _fieldsProto() {
      var e, t;
      return (e =
        (t = this._document) == null
          ? void 0
          : t.data.clone().value.mapValue.fields) == null
        ? void 0
        : e;
    }
    get(e) {
      if (this._document) {
        let t = this._document.data.field(of(`DocumentSnapshot.get`, e));
        if (t !== null) return this._userDataWriter.convertValue(t);
      }
    }
  },
  vf = class extends _f {
    data() {
      return super.data();
    }
  };
function yf(e) {
  if (e.limitType === `L` && e.explicitOrderBy.length === 0)
    throw new N(
      M.UNIMPLEMENTED,
      `limitToLast() queries require specifying at least one orderBy() clause`,
    );
}
var bf = class {},
  xf = class extends bf {};
function Sf(e, t, ...n) {
  let r = [];
  (t instanceof bf && r.push(t),
    (r = r.concat(n)),
    (function (e) {
      let t = e.filter((e) => e instanceof wf).length,
        n = e.filter((e) => e instanceof Cf).length;
      if (t > 1 || (t > 0 && n > 0))
        throw new N(
          M.INVALID_ARGUMENT,
          "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.",
        );
    })(r));
  for (let t of r) e = t._apply(e);
  return e;
}
var Cf = class e extends xf {
    constructor(e, t, n) {
      (super(),
        (this._field = e),
        (this._op = t),
        (this._value = n),
        (this.type = `where`));
    }
    static _create(t, n, r) {
      return new e(t, n, r);
    }
    _apply(e) {
      let t = this._parse(e);
      return (
        kf(e._query, t),
        new Ad(e.firestore, e.converter, Da(e._query, t))
      );
    }
    _parse(e) {
      let t = Zd(e.firestore);
      return (function (e, t, n, r, i, a, o) {
        let s;
        if (i.isKeyField()) {
          if (a === `array-contains` || a === `array-contains-any`)
            throw new N(
              M.INVALID_ARGUMENT,
              `Invalid Query. You can't perform '${a}' queries on documentId().`,
            );
          if (a === `in` || a === `not-in`) {
            Of(o, a);
            let t = [];
            for (let n of o) t.push(Df(r, e, n));
            s = { arrayValue: { values: t } };
          } else s = Df(r, e, o);
        } else
          ((a !== `in` && a !== `not-in` && a !== `array-contains-any`) ||
            Of(o, a),
            (s = ef(n, t, o, a === `in` || a === `not-in`)));
        return W.create(i, a, s);
      })(
        e._query,
        `where`,
        t,
        e.firestore._databaseId,
        this._field,
        this._op,
        this._value,
      );
    }
  },
  wf = class e extends bf {
    constructor(e, t) {
      (super(), (this.type = e), (this._queryConstraints = t));
    }
    static _create(t, n) {
      return new e(t, n);
    }
    _parse(e) {
      let t = this._queryConstraints
        .map((t) => t._parse(e))
        .filter((e) => e.getFilters().length > 0);
      return t.length === 1 ? t[0] : Qi.create(t, this._getOperator());
    }
    _apply(e) {
      let t = this._parse(e);
      return t.getFilters().length === 0
        ? e
        : ((function (e, t) {
            let n = e,
              r = t.getFlattenedFilters();
            for (let e of r) (kf(n, e), (n = Da(n, e)));
          })(e._query, t),
          new Ad(e.firestore, e.converter, Da(e._query, t)));
    }
    _getQueryConstraints() {
      return this._queryConstraints;
    }
    _getOperator() {
      return this.type === `and` ? `and` : `or`;
    }
  },
  Tf = class e extends xf {
    constructor(e, t) {
      (super(),
        (this._field = e),
        (this._direction = t),
        (this.type = `orderBy`));
    }
    static _create(t, n) {
      return new e(t, n);
    }
    _apply(e) {
      let t = (function (e, t, n) {
        if (e.startAt !== null)
          throw new N(
            M.INVALID_ARGUMENT,
            `Invalid query. You must not call startAt() or startAfter() before calling orderBy().`,
          );
        if (e.endAt !== null)
          throw new N(
            M.INVALID_ARGUMENT,
            `Invalid query. You must not call endAt() or endBefore() before calling orderBy().`,
          );
        return new Yi(t, n);
      })(e._query, this._field, this._direction);
      return new Ad(e.firestore, e.converter, Oa(e._query, t));
    }
  };
function Ef(e, t = `asc`) {
  let n = t,
    r = of(`orderBy`, e);
  return Tf._create(r, n);
}
function Df(e, t, n) {
  if (typeof (n = S(n)) == `string`) {
    if (n === ``)
      throw new N(
        M.INVALID_ARGUMENT,
        `Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.`,
      );
    if (!Ca(t) && n.indexOf(`/`) !== -1)
      throw new N(
        M.INVALID_ARGUMENT,
        `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`,
      );
    let r = t.path.child(F.fromString(n));
    if (!I.isDocumentKey(r))
      throw new N(
        M.INVALID_ARGUMENT,
        `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`,
      );
    return Pi(e, new I(r));
  }
  if (n instanceof X) return Pi(e, n._key);
  throw new N(
    M.INVALID_ARGUMENT,
    `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Tr(n)}.`,
  );
}
function Of(e, t) {
  if (!Array.isArray(e) || e.length === 0)
    throw new N(
      M.INVALID_ARGUMENT,
      `Invalid Query. A non-empty array is required for '${t.toString()}' filters.`,
    );
}
function kf(e, t) {
  let n = (function (e, t) {
    for (let n of e)
      for (let e of n.getFlattenedFilters())
        if (t.indexOf(e.op) >= 0) return e.op;
    return null;
  })(
    e.filters,
    (function (e) {
      switch (e) {
        case `!=`:
          return [`!=`, `not-in`];
        case `array-contains-any`:
        case `in`:
          return [`not-in`];
        case `not-in`:
          return [`array-contains-any`, `in`, `not-in`, `!=`];
        default:
          return [];
      }
    })(t.op),
  );
  if (n !== null)
    throw n === t.op
      ? new N(
          M.INVALID_ARGUMENT,
          `Invalid query. You cannot use more than one '${t.op.toString()}' filter.`,
        )
      : new N(
          M.INVALID_ARGUMENT,
          `Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`,
        );
}
function Af(e, t, n) {
  let r;
  return (
    (r = e
      ? n && (n.merge || n.mergeFields)
        ? e.toFirestore(t, n)
        : e.toFirestore(t)
      : t),
    r
  );
}
var jf = class {
    constructor(e, t) {
      ((this.hasPendingWrites = e), (this.fromCache = t));
    }
    isEqual(e) {
      return (
        this.hasPendingWrites === e.hasPendingWrites &&
        this.fromCache === e.fromCache
      );
    }
  },
  Mf = class e extends _f {
    constructor(e, t, n, r, i, a) {
      (super(e, t, n, r, a),
        (this._firestore = e),
        (this._firestoreImpl = e),
        (this.metadata = i));
    }
    exists() {
      return super.exists();
    }
    data(e = {}) {
      if (this._document) {
        if (this._converter) {
          let t = new Nf(
            this._firestore,
            this._userDataWriter,
            this._key,
            this._document,
            this.metadata,
            null,
          );
          return this._converter.fromFirestore(t, e);
        }
        return this._userDataWriter.convertValue(
          this._document.data.value,
          e.serverTimestamps,
        );
      }
    }
    get(e, t = {}) {
      if (this._document) {
        let n = this._document.data.field(of(`DocumentSnapshot.get`, e));
        if (n !== null)
          return this._userDataWriter.convertValue(n, t.serverTimestamps);
      }
    }
    toJSON() {
      if (this.metadata.hasPendingWrites)
        throw new N(
          M.FAILED_PRECONDITION,
          `DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().`,
        );
      let t = this._document,
        n = {};
      return (
        (n.type = e._jsonSchemaVersion),
        (n.bundle = ``),
        (n.bundleSource = `DocumentSnapshot`),
        (n.bundleName = this._key.toString()),
        !t || !t.isValidDocument() || !t.isFoundDocument()
          ? n
          : (this._userDataWriter.convertObjectMap(
              t.data.value.mapValue.fields,
              `previous`,
            ),
            (n.bundle = (this._firestore, this.ref.path, `NOT SUPPORTED`)),
            n)
      );
    }
  };
((Mf._jsonSchemaVersion = `firestore/documentSnapshot/1.0`),
  (Mf._jsonSchema = {
    type: L(`string`, Mf._jsonSchemaVersion),
    bundleSource: L(`string`, `DocumentSnapshot`),
    bundleName: L(`string`),
    bundle: L(`string`),
  }));
var Nf = class extends Mf {
    data(e = {}) {
      return super.data(e);
    }
  },
  Pf = class e {
    constructor(e, t, n, r) {
      ((this._firestore = e),
        (this._userDataWriter = t),
        (this._snapshot = r),
        (this.metadata = new jf(r.hasPendingWrites, r.fromCache)),
        (this.query = n));
    }
    get docs() {
      let e = [];
      return (this.forEach((t) => e.push(t)), e);
    }
    get size() {
      return this._snapshot.docs.size;
    }
    get empty() {
      return this.size === 0;
    }
    forEach(e, t) {
      this._snapshot.docs.forEach((n) => {
        e.call(
          t,
          new Nf(
            this._firestore,
            this._userDataWriter,
            n.key,
            n,
            new jf(
              this._snapshot.mutatedKeys.has(n.key),
              this._snapshot.fromCache,
            ),
            this.query.converter,
          ),
        );
      });
    }
    docChanges(e = {}) {
      let t = !!e.includeMetadataChanges;
      if (t && this._snapshot.excludesMetadataChanges)
        throw new N(
          M.INVALID_ARGUMENT,
          `To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().`,
        );
      return (
        (this._cachedChanges &&
          this._cachedChangesIncludeMetadataChanges === t) ||
          ((this._cachedChanges = (function (e, t) {
            if (e._snapshot.oldDocs.isEmpty()) {
              let t = 0;
              return e._snapshot.docChanges.map((n) => {
                let r = new Nf(
                  e._firestore,
                  e._userDataWriter,
                  n.doc.key,
                  n.doc,
                  new jf(
                    e._snapshot.mutatedKeys.has(n.doc.key),
                    e._snapshot.fromCache,
                  ),
                  e.query.converter,
                );
                return (
                  n.doc,
                  { type: `added`, doc: r, oldIndex: -1, newIndex: t++ }
                );
              });
            }
            {
              let n = e._snapshot.oldDocs;
              return e._snapshot.docChanges
                .filter((e) => t || e.type !== 3)
                .map((t) => {
                  let r = new Nf(
                      e._firestore,
                      e._userDataWriter,
                      t.doc.key,
                      t.doc,
                      new jf(
                        e._snapshot.mutatedKeys.has(t.doc.key),
                        e._snapshot.fromCache,
                      ),
                      e.query.converter,
                    ),
                    i = -1,
                    a = -1;
                  return (
                    t.type !== 0 &&
                      ((i = n.indexOf(t.doc.key)), (n = n.delete(t.doc.key))),
                    t.type !== 1 &&
                      ((n = n.add(t.doc)), (a = n.indexOf(t.doc.key))),
                    { type: Ff(t.type), doc: r, oldIndex: i, newIndex: a }
                  );
                });
            }
          })(this, t)),
          (this._cachedChangesIncludeMetadataChanges = t)),
        this._cachedChanges
      );
    }
    toJSON() {
      if (this.metadata.hasPendingWrites)
        throw new N(
          M.FAILED_PRECONDITION,
          `QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().`,
        );
      let t = {};
      ((t.type = e._jsonSchemaVersion),
        (t.bundleSource = `QuerySnapshot`),
        (t.bundleName = ur.newId()),
        this._firestore._databaseId.database,
        this._firestore._databaseId.projectId);
      let n = [],
        r = [],
        i = [];
      return (
        this.docs.forEach((e) => {
          e._document !== null &&
            (n.push(e._document),
            r.push(
              this._userDataWriter.convertObjectMap(
                e._document.data.value.mapValue.fields,
                `previous`,
              ),
            ),
            i.push(e.ref.path));
        }),
        (t.bundle =
          (this._firestore, this.query._query, t.bundleName, `NOT SUPPORTED`)),
        t
      );
    }
  };
function Ff(e) {
  switch (e) {
    case 0:
      return `added`;
    case 2:
    case 3:
      return `modified`;
    case 1:
      return `removed`;
    default:
      return k(61501, { type: e });
  }
}
((Pf._jsonSchemaVersion = `firestore/querySnapshot/1.0`),
  (Pf._jsonSchema = {
    type: L(`string`, Pf._jsonSchemaVersion),
    bundleSource: L(`string`, `QuerySnapshot`),
    bundleName: L(`string`),
    bundle: L(`string`),
  }));
function If(e) {
  e = Er(e, X);
  let t = Er(e.firestore, Ld);
  return yd(zd(t), e._key).then((n) => Hf(t, e, n));
}
function Lf(e, t, n) {
  e = Er(e, X);
  let r = Er(e.firestore, Ld),
    i = Af(e.converter, t, n);
  return Vf(r, [
    Qd(Zd(r), `setDoc`, e._key, i, e.converter !== null, n).toMutation(
      e._key,
      ho.none(),
    ),
  ]);
}
function Rf(e) {
  return Vf(Er(e.firestore, Ld), [new Oo(e._key, ho.none())]);
}
function zf(e, t) {
  let n = Er(e.firestore, Ld),
    r = Nd(e),
    i = Af(e.converter, t);
  return Vf(n, [
    Qd(
      Zd(e.firestore),
      `addDoc`,
      r._key,
      i,
      e.converter !== null,
      {},
    ).toMutation(r._key, ho.exists(!1)),
  ]).then(() => r);
}
function Bf(e, ...t) {
  e = S(e);
  let n = { includeMetadataChanges: !1, source: `default` },
    r = 0;
  typeof t[r] != `object` || gf(t[r]) || (n = t[r++]);
  let i = {
    includeMetadataChanges: n.includeMetadataChanges,
    source: n.source,
  };
  if (gf(t[r])) {
    var a, o, s;
    let e = t[r];
    ((t[r] = (a = e.next) == null ? void 0 : a.bind(e)),
      (t[r + 1] = (o = e.error) == null ? void 0 : o.bind(e)),
      (t[r + 2] = (s = e.complete) == null ? void 0 : s.bind(e)));
  }
  let c, l, u;
  if (e instanceof X)
    ((l = Er(e.firestore, Ld)),
      (u = ba(e._key.path)),
      (c = {
        next: (n) => {
          t[r] && t[r](Hf(l, e, n));
        },
        error: t[r + 1],
        complete: t[r + 2],
      }));
  else {
    let n = Er(e, Ad);
    ((l = Er(n.firestore, Ld)), (u = n._query));
    let i = new ff(l);
    ((c = {
      next: (e) => {
        t[r] && t[r](new Pf(l, i, n, e));
      },
      error: t[r + 1],
      complete: t[r + 2],
    }),
      yf(e._query));
  }
  return vd(zd(l), u, i, c);
}
function Vf(e, t) {
  return bd(zd(e), t);
}
function Hf(e, t, n) {
  let r = n.docs.get(t._key);
  return new Mf(
    e,
    new ff(e),
    t._key,
    r,
    new jf(n.hasPendingWrites, n.fromCache),
    t.converter,
  );
}
((function (e, t = !0) {
  (qn(un),
    an(
      new Ve(
        `firestore`,
        (e, { instanceIdentifier: n, options: r }) => {
          let i = e.getProvider(`app`).getImmediate(),
            a = new Ld(
              new ir(e.getProvider(`auth-internal`)),
              new cr(i, e.getProvider(`app-check-internal`)),
              yi(i, n),
              i,
            );
          return ((r = u({ useFetchStreams: t }, r)), a._setSettings(r), a);
        },
        `PUBLIC`,
      ).setMultipleInstances(!0),
    ),
    pn(mf, hf, e),
    pn(mf, hf, `esm2020`));
})(),
  d());
var Uf = [`providerId`],
  Wf = [`uid`, `auth`, `stsTokenManager`],
  Gf = [`providerId`, `signInMethod`];
function Kf() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
var qf = Kf,
  Jf = new De(`auth`, `Firebase`, Kf()),
  Yf = new Qe(`@firebase/auth`);
function Xf(e, ...t) {
  Yf.logLevel <= C.WARN && Yf.warn(`Auth (${un}): ${e}`, ...t);
}
function Zf(e, ...t) {
  Yf.logLevel <= C.ERROR && Yf.error(`Auth (${un}): ${e}`, ...t);
}
function Qf(e, ...t) {
  throw rp(e, ...t);
}
function $f(e, ...t) {
  return rp(e, ...t);
}
function ep(e, t, n) {
  return new De(`auth`, `Firebase`, u(u({}, qf()), {}, { [t]: n })).create(t, {
    appName: e.name,
  });
}
function tp(e) {
  return ep(
    e,
    `operation-not-supported-in-this-environment`,
    `Operations that alter the current user are not supported in conjunction with FirebaseServerApp`,
  );
}
function np(e, t, n) {
  let r = n;
  if (!(t instanceof r))
    throw (
      r.name !== t.constructor.name && Qf(e, `argument-error`),
      ep(
        e,
        `argument-error`,
        `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`,
      )
    );
}
function rp(e, ...t) {
  if (typeof e != `string`) {
    let n = t[0],
      r = [...t.slice(1)];
    return (r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r));
  }
  return Jf.create(e, ...t);
}
function Z(e, t, ...n) {
  if (!e) throw rp(t, ...n);
}
function ip(e) {
  let t = `INTERNAL ASSERTION FAILED: ` + e;
  throw (Zf(t), Error(t));
}
function ap(e, t) {
  e || ip(t);
}
function op() {
  var e;
  return (
    (typeof self < `u` && ((e = self.location) == null ? void 0 : e.href)) || ``
  );
}
function sp() {
  return cp() === `http:` || cp() === `https:`;
}
function cp() {
  var e;
  return (
    (typeof self < `u` &&
      ((e = self.location) == null ? void 0 : e.protocol)) ||
    null
  );
}
function lp() {
  return typeof navigator < `u` &&
    navigator &&
    `onLine` in navigator &&
    typeof navigator.onLine == `boolean` &&
    (sp() || ye() || `connection` in navigator)
    ? navigator.onLine
    : !0;
}
function up() {
  if (typeof navigator > `u`) return null;
  let e = navigator;
  return (e.languages && e.languages[0]) || e.language || null;
}
var dp = class {
  constructor(e, t) {
    ((this.shortDelay = e),
      (this.longDelay = t),
      ap(t > e, `Short delay should be less than long delay!`),
      (this.isMobile = ge() || be()));
  }
  get() {
    return lp()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
};
function fp(e, t) {
  ap(e.emulator, `Emulator should always be set here`);
  let { url: n } = e.emulator;
  return t ? `${n}${t.startsWith(`/`) ? t.slice(1) : t}` : n;
}
var pp = class {
    static initialize(e, t, n) {
      ((this.fetchImpl = e),
        t && (this.headersImpl = t),
        n && (this.responseImpl = n));
    }
    static fetch() {
      if (this.fetchImpl) return this.fetchImpl;
      if (typeof self < `u` && `fetch` in self) return self.fetch;
      if (typeof globalThis < `u` && globalThis.fetch) return globalThis.fetch;
      if (typeof fetch < `u`) return fetch;
      ip(
        `Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill`,
      );
    }
    static headers() {
      if (this.headersImpl) return this.headersImpl;
      if (typeof self < `u` && `Headers` in self) return self.Headers;
      if (typeof globalThis < `u` && globalThis.Headers)
        return globalThis.Headers;
      if (typeof Headers < `u`) return Headers;
      ip(
        `Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill`,
      );
    }
    static response() {
      if (this.responseImpl) return this.responseImpl;
      if (typeof self < `u` && `Response` in self) return self.Response;
      if (typeof globalThis < `u` && globalThis.Response)
        return globalThis.Response;
      if (typeof Response < `u`) return Response;
      ip(
        `Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill`,
      );
    }
  },
  mp = {
    CREDENTIAL_MISMATCH: `custom-token-mismatch`,
    MISSING_CUSTOM_TOKEN: `internal-error`,
    INVALID_IDENTIFIER: `invalid-email`,
    MISSING_CONTINUE_URI: `internal-error`,
    INVALID_PASSWORD: `wrong-password`,
    MISSING_PASSWORD: `missing-password`,
    INVALID_LOGIN_CREDENTIALS: `invalid-credential`,
    EMAIL_EXISTS: `email-already-in-use`,
    PASSWORD_LOGIN_DISABLED: `operation-not-allowed`,
    INVALID_IDP_RESPONSE: `invalid-credential`,
    INVALID_PENDING_TOKEN: `invalid-credential`,
    FEDERATED_USER_ID_ALREADY_LINKED: `credential-already-in-use`,
    MISSING_REQ_TYPE: `internal-error`,
    EMAIL_NOT_FOUND: `user-not-found`,
    RESET_PASSWORD_EXCEED_LIMIT: `too-many-requests`,
    EXPIRED_OOB_CODE: `expired-action-code`,
    INVALID_OOB_CODE: `invalid-action-code`,
    MISSING_OOB_CODE: `internal-error`,
    CREDENTIAL_TOO_OLD_LOGIN_AGAIN: `requires-recent-login`,
    INVALID_ID_TOKEN: `invalid-user-token`,
    TOKEN_EXPIRED: `user-token-expired`,
    USER_NOT_FOUND: `user-token-expired`,
    TOO_MANY_ATTEMPTS_TRY_LATER: `too-many-requests`,
    PASSWORD_DOES_NOT_MEET_REQUIREMENTS: `password-does-not-meet-requirements`,
    INVALID_CODE: `invalid-verification-code`,
    INVALID_SESSION_INFO: `invalid-verification-id`,
    INVALID_TEMPORARY_PROOF: `invalid-credential`,
    MISSING_SESSION_INFO: `missing-verification-id`,
    SESSION_EXPIRED: `code-expired`,
    MISSING_ANDROID_PACKAGE_NAME: `missing-android-pkg-name`,
    UNAUTHORIZED_DOMAIN: `unauthorized-continue-uri`,
    INVALID_OAUTH_CLIENT_ID: `invalid-oauth-client-id`,
    ADMIN_ONLY_OPERATION: `admin-restricted-operation`,
    INVALID_MFA_PENDING_CREDENTIAL: `invalid-multi-factor-session`,
    MFA_ENROLLMENT_NOT_FOUND: `multi-factor-info-not-found`,
    MISSING_MFA_ENROLLMENT_ID: `missing-multi-factor-info`,
    MISSING_MFA_PENDING_CREDENTIAL: `missing-multi-factor-session`,
    SECOND_FACTOR_EXISTS: `second-factor-already-in-use`,
    SECOND_FACTOR_LIMIT_EXCEEDED: `maximum-second-factor-count-exceeded`,
    BLOCKING_FUNCTION_ERROR_RESPONSE: `internal-error`,
    RECAPTCHA_NOT_ENABLED: `recaptcha-not-enabled`,
    MISSING_RECAPTCHA_TOKEN: `missing-recaptcha-token`,
    INVALID_RECAPTCHA_TOKEN: `invalid-recaptcha-token`,
    INVALID_RECAPTCHA_ACTION: `invalid-recaptcha-action`,
    MISSING_CLIENT_TYPE: `missing-client-type`,
    MISSING_RECAPTCHA_VERSION: `missing-recaptcha-version`,
    INVALID_RECAPTCHA_VERSION: `invalid-recaptcha-version`,
    INVALID_REQ_TYPE: `invalid-req-type`,
  },
  hp = [
    `/v1/accounts:signInWithCustomToken`,
    `/v1/accounts:signInWithEmailLink`,
    `/v1/accounts:signInWithIdp`,
    `/v1/accounts:signInWithPassword`,
    `/v1/accounts:signInWithPhoneNumber`,
    `/v1/token`,
  ],
  gp = new dp(3e4, 6e4);
function Q(e, t) {
  return e.tenantId && !t.tenantId
    ? u(u({}, t), {}, { tenantId: e.tenantId })
    : t;
}
function $(e, t, n, r) {
  return _p.apply(this, arguments);
}
function _p() {
  return (
    (_p = p(function* (e, t, n, r, i = {}) {
      return vp(
        e,
        i,
        p(function* () {
          let i = {},
            a = {};
          r && (t === `GET` ? (a = r) : (i = { body: JSON.stringify(r) }));
          let o = Ne(u({ key: e.config.apiKey }, a)).slice(1),
            s = yield e._getAdditionalHeaders();
          ((s[`Content-Type`] = `application/json`),
            e.languageCode && (s[`X-Firebase-Locale`] = e.languageCode));
          let c = u({ method: t, headers: s }, i);
          return (
            ve() || (c.referrerPolicy = `no-referrer`),
            e.emulatorConfig &&
              Re(e.emulatorConfig.host) &&
              (c.credentials = `include`),
            pp.fetch()(yield Sp(e, e.config.apiHost, n, o), c)
          );
        }),
      );
    })),
    _p.apply(this, arguments)
  );
}
function vp(e, t, n) {
  return yp.apply(this, arguments);
}
function yp() {
  return (
    (yp = p(function* (e, t, n) {
      e._canInitEmulator = !1;
      let r = u(u({}, mp), t);
      try {
        let t = new Tp(e),
          i = yield Promise.race([n(), t.promise]);
        t.clearNetworkTimeout();
        let a = yield i.json();
        if (`needConfirmation` in a)
          throw Ep(e, `account-exists-with-different-credential`, a);
        if (i.ok && !(`errorMessage` in a)) return a;
        {
          let [t, n] = (i.ok ? a.errorMessage : a.error.message).split(` : `);
          if (t === `FEDERATED_USER_ID_ALREADY_LINKED`)
            throw Ep(e, `credential-already-in-use`, a);
          if (t === `EMAIL_EXISTS`) throw Ep(e, `email-already-in-use`, a);
          if (t === `USER_DISABLED`) throw Ep(e, `user-disabled`, a);
          let o = r[t] || t.toLowerCase().replace(/[_\s]+/g, `-`);
          if (n) throw ep(e, o, n);
          Qf(e, o);
        }
      } catch (t) {
        if (t instanceof Ee) throw t;
        Qf(e, `network-request-failed`, { message: String(t) });
      }
    })),
    yp.apply(this, arguments)
  );
}
function bp(e, t, n, r) {
  return xp.apply(this, arguments);
}
function xp() {
  return (
    (xp = p(function* (e, t, n, r, i = {}) {
      let a = yield $(e, t, n, r, i);
      return (
        `mfaPendingCredential` in a &&
          Qf(e, `multi-factor-auth-required`, { _serverResponse: a }),
        a
      );
    })),
    xp.apply(this, arguments)
  );
}
function Sp(e, t, n, r) {
  return Cp.apply(this, arguments);
}
function Cp() {
  return (
    (Cp = p(function* (e, t, n, r) {
      let i = `${t}${n}?${r}`,
        a = e,
        o = a.config.emulator
          ? fp(e.config, i)
          : `${e.config.apiScheme}://${i}`;
      return hp.includes(n) &&
        (yield a._persistenceManagerAvailable,
        a._getPersistenceType() === `COOKIE`)
        ? a._getPersistence()._getFinalTarget(o).toString()
        : o;
    })),
    Cp.apply(this, arguments)
  );
}
function wp(e) {
  switch (e) {
    case `ENFORCE`:
      return `ENFORCE`;
    case `AUDIT`:
      return `AUDIT`;
    case `OFF`:
      return `OFF`;
    default:
      return `ENFORCEMENT_STATE_UNSPECIFIED`;
  }
}
var Tp = class {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(e) {
    ((this.auth = e),
      (this.timer = null),
      (this.promise = new Promise((e, t) => {
        this.timer = setTimeout(
          () => t($f(this.auth, `network-request-failed`)),
          gp.get(),
        );
      })));
  }
};
function Ep(e, t, n) {
  let r = { appName: e.name };
  (n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber));
  let i = $f(e, t, r);
  return ((i.customData._tokenResponse = n), i);
}
function Dp(e) {
  return e !== void 0 && e.enterprise !== void 0;
}
var Op = class {
  constructor(e) {
    if (
      ((this.siteKey = ``),
      (this.recaptchaEnforcementState = []),
      e.recaptchaKey === void 0)
    )
      throw Error(`recaptchaKey undefined`);
    ((this.siteKey = e.recaptchaKey.split(`/`)[3]),
      (this.recaptchaEnforcementState = e.recaptchaEnforcementState));
  }
  getProviderEnforcementState(e) {
    if (
      !this.recaptchaEnforcementState ||
      this.recaptchaEnforcementState.length === 0
    )
      return null;
    for (let t of this.recaptchaEnforcementState)
      if (t.provider && t.provider === e) return wp(t.enforcementState);
    return null;
  }
  isProviderEnabled(e) {
    return (
      this.getProviderEnforcementState(e) === `ENFORCE` ||
      this.getProviderEnforcementState(e) === `AUDIT`
    );
  }
  isAnyProviderEnabled() {
    return (
      this.isProviderEnabled(`EMAIL_PASSWORD_PROVIDER`) ||
      this.isProviderEnabled(`PHONE_PROVIDER`)
    );
  }
};
function kp(e, t) {
  return Ap.apply(this, arguments);
}
function Ap() {
  return (
    (Ap = p(function* (e, t) {
      return $(e, `GET`, `/v2/recaptchaConfig`, Q(e, t));
    })),
    Ap.apply(this, arguments)
  );
}
function jp(e, t) {
  return Mp.apply(this, arguments);
}
function Mp() {
  return (
    (Mp = p(function* (e, t) {
      return $(e, `POST`, `/v1/accounts:delete`, t);
    })),
    Mp.apply(this, arguments)
  );
}
function Np(e, t) {
  return Pp.apply(this, arguments);
}
function Pp() {
  return (
    (Pp = p(function* (e, t) {
      return $(e, `POST`, `/v1/accounts:lookup`, t);
    })),
    Pp.apply(this, arguments)
  );
}
function Fp(e) {
  if (e)
    try {
      let t = new Date(Number(e));
      if (!isNaN(t.getTime())) return t.toUTCString();
    } catch (e) {}
}
function Ip(e) {
  return Lp.apply(this, arguments);
}
function Lp() {
  return (
    (Lp = p(function* (e, t = !1) {
      let n = S(e),
        r = yield n.getIdToken(t),
        i = zp(r);
      Z(i && i.exp && i.auth_time && i.iat, n.auth, `internal-error`);
      let a = typeof i.firebase == `object` ? i.firebase : void 0,
        o = a == null ? void 0 : a.sign_in_provider;
      return {
        claims: i,
        token: r,
        authTime: Fp(Rp(i.auth_time)),
        issuedAtTime: Fp(Rp(i.iat)),
        expirationTime: Fp(Rp(i.exp)),
        signInProvider: o || null,
        signInSecondFactor:
          (a == null ? void 0 : a.sign_in_second_factor) || null,
      };
    })),
    Lp.apply(this, arguments)
  );
}
function Rp(e) {
  return Number(e) * 1e3;
}
function zp(e) {
  let [t, n, r] = e.split(`.`);
  if (t === void 0 || n === void 0 || r === void 0)
    return (Zf(`JWT malformed, contained fewer than 3 sections`), null);
  try {
    let e = ae(n);
    return e
      ? JSON.parse(e)
      : (Zf(`Failed to decode base64 JWT payload`), null);
  } catch (e) {
    return (
      Zf(
        `Caught error parsing JWT payload as JSON`,
        e == null ? void 0 : e.toString(),
      ),
      null
    );
  }
}
function Bp(e) {
  let t = zp(e);
  return (
    Z(t, `internal-error`),
    Z(t.exp !== void 0, `internal-error`),
    Z(t.iat !== void 0, `internal-error`),
    Number(t.exp) - Number(t.iat)
  );
}
function Vp(e, t) {
  return Hp.apply(this, arguments);
}
function Hp() {
  return (
    (Hp = p(function* (e, t, n = !1) {
      if (n) return t;
      try {
        return yield t;
      } catch (t) {
        throw (
          t instanceof Ee &&
            Up(t) &&
            e.auth.currentUser === e &&
            (yield e.auth.signOut()),
          t
        );
      }
    })),
    Hp.apply(this, arguments)
  );
}
function Up({ code: e }) {
  return e === `auth/user-disabled` || e === `auth/user-token-expired`;
}
var Wp = class {
    constructor(e) {
      ((this.user = e),
        (this.isRunning = !1),
        (this.timerId = null),
        (this.errorBackoff = 3e4));
    }
    _start() {
      this.isRunning || ((this.isRunning = !0), this.schedule());
    }
    _stop() {
      this.isRunning &&
        ((this.isRunning = !1),
        this.timerId !== null && clearTimeout(this.timerId));
    }
    getInterval(e) {
      if (e) {
        let e = this.errorBackoff;
        return ((this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), e);
      } else {
        var t;
        this.errorBackoff = 3e4;
        let e =
          ((t = this.user.stsTokenManager.expirationTime) == null ? 0 : t) -
          Date.now() -
          3e5;
        return Math.max(0, e);
      }
    }
    schedule(e = !1) {
      var t = this;
      if (!this.isRunning) return;
      let n = this.getInterval(e);
      this.timerId = setTimeout(
        p(function* () {
          yield t.iteration();
        }),
        n,
      );
    }
    iteration() {
      var e = this;
      return p(function* () {
        try {
          yield e.user.getIdToken(!0);
        } catch (t) {
          (t == null ? void 0 : t.code) === `auth/network-request-failed` &&
            e.schedule(!0);
          return;
        }
        e.schedule();
      })();
    }
  },
  Gp = class {
    constructor(e, t) {
      ((this.createdAt = e), (this.lastLoginAt = t), this._initializeTime());
    }
    _initializeTime() {
      ((this.lastSignInTime = Fp(this.lastLoginAt)),
        (this.creationTime = Fp(this.createdAt)));
    }
    _copy(e) {
      ((this.createdAt = e.createdAt),
        (this.lastLoginAt = e.lastLoginAt),
        this._initializeTime());
    }
    toJSON() {
      return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
    }
  };
function Kp(e) {
  return qp.apply(this, arguments);
}
function qp() {
  return (
    (qp = p(function* (e) {
      var t;
      let n = e.auth,
        r = yield Vp(e, Np(n, { idToken: yield e.getIdToken() }));
      Z(r == null ? void 0 : r.users.length, n, `internal-error`);
      let i = r.users[0];
      e._notifyReloadListener(i);
      let a =
          (t = i.providerUserInfo) != null && t.length
            ? Zp(i.providerUserInfo)
            : [],
        o = Xp(e.providerData, a),
        s = e.isAnonymous,
        c = !(e.email && i.passwordHash) && !(o != null && o.length),
        l = s ? c : !1,
        u = {
          uid: i.localId,
          displayName: i.displayName || null,
          photoURL: i.photoUrl || null,
          email: i.email || null,
          emailVerified: i.emailVerified || !1,
          phoneNumber: i.phoneNumber || null,
          tenantId: i.tenantId || null,
          providerData: o,
          metadata: new Gp(i.createdAt, i.lastLoginAt),
          isAnonymous: l,
        };
      Object.assign(e, u);
    })),
    qp.apply(this, arguments)
  );
}
function Jp(e) {
  return Yp.apply(this, arguments);
}
function Yp() {
  return (
    (Yp = p(function* (e) {
      let t = S(e);
      (yield Kp(t),
        yield t.auth._persistUserIfCurrent(t),
        t.auth._notifyListenersIfCurrent(t));
    })),
    Yp.apply(this, arguments)
  );
}
function Xp(e, t) {
  return [
    ...e.filter((e) => !t.some((t) => t.providerId === e.providerId)),
    ...t,
  ];
}
function Zp(e) {
  return e.map((e) => {
    let { providerId: t } = e,
      n = h(e, Uf);
    return {
      providerId: t,
      uid: n.rawId || ``,
      displayName: n.displayName || null,
      email: n.email || null,
      phoneNumber: n.phoneNumber || null,
      photoURL: n.photoUrl || null,
    };
  });
}
function Qp(e, t) {
  return $p.apply(this, arguments);
}
function $p() {
  return (
    ($p = p(function* (e, t) {
      let n = yield vp(
        e,
        {},
        p(function* () {
          let n = Ne({ grant_type: `refresh_token`, refresh_token: t }).slice(
              1,
            ),
            { tokenApiHost: r, apiKey: i } = e.config,
            a = yield Sp(e, r, `/v1/token`, `key=${i}`),
            o = yield e._getAdditionalHeaders();
          o[`Content-Type`] = `application/x-www-form-urlencoded`;
          let s = { method: `POST`, headers: o, body: n };
          return (
            e.emulatorConfig &&
              Re(e.emulatorConfig.host) &&
              (s.credentials = `include`),
            pp.fetch()(a, s)
          );
        }),
      );
      return {
        accessToken: n.access_token,
        expiresIn: n.expires_in,
        refreshToken: n.refresh_token,
      };
    })),
    $p.apply(this, arguments)
  );
}
function em(e, t) {
  return tm.apply(this, arguments);
}
function tm() {
  return (
    (tm = p(function* (e, t) {
      return $(e, `POST`, `/v2/accounts:revokeToken`, Q(e, t));
    })),
    tm.apply(this, arguments)
  );
}
var nm = class e {
  constructor() {
    ((this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null));
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    (Z(e.idToken, `internal-error`),
      Z(e.idToken !== void 0, `internal-error`),
      Z(e.refreshToken !== void 0, `internal-error`));
    let t =
      `expiresIn` in e && e.expiresIn !== void 0
        ? Number(e.expiresIn)
        : Bp(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
  }
  updateFromIdToken(e) {
    Z(e.length !== 0, `internal-error`);
    let t = Bp(e);
    this.updateTokensAndExpiration(e, null, t);
  }
  getToken(e, t = !1) {
    var n = this;
    return p(function* () {
      return !t && n.accessToken && !n.isExpired
        ? n.accessToken
        : (Z(n.refreshToken, e, `user-token-expired`),
          n.refreshToken
            ? (yield n.refresh(e, n.refreshToken), n.accessToken)
            : null);
    })();
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  refresh(e, t) {
    var n = this;
    return p(function* () {
      let { accessToken: r, refreshToken: i, expiresIn: a } = yield Qp(e, t);
      n.updateTokensAndExpiration(r, i, Number(a));
    })();
  }
  updateTokensAndExpiration(e, t, n) {
    ((this.refreshToken = t || null),
      (this.accessToken = e || null),
      (this.expirationTime = Date.now() + n * 1e3));
  }
  static fromJSON(t, n) {
    let { refreshToken: r, accessToken: i, expirationTime: a } = n,
      o = new e();
    return (
      r &&
        (Z(typeof r == `string`, `internal-error`, { appName: t }),
        (o.refreshToken = r)),
      i &&
        (Z(typeof i == `string`, `internal-error`, { appName: t }),
        (o.accessToken = i)),
      a &&
        (Z(typeof a == `number`, `internal-error`, { appName: t }),
        (o.expirationTime = a)),
      o
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(e) {
    ((this.accessToken = e.accessToken),
      (this.refreshToken = e.refreshToken),
      (this.expirationTime = e.expirationTime));
  }
  _clone() {
    return Object.assign(new e(), this.toJSON());
  }
  _performRefresh() {
    return ip(`not implemented`);
  }
};
function rm(e, t) {
  Z(typeof e == `string` || e === void 0, `internal-error`, { appName: t });
}
var im = class e {
    constructor(e) {
      let { uid: t, auth: n, stsTokenManager: r } = e,
        i = h(e, Wf);
      ((this.providerId = `firebase`),
        (this.proactiveRefresh = new Wp(this)),
        (this.reloadUserInfo = null),
        (this.reloadListener = null),
        (this.uid = t),
        (this.auth = n),
        (this.stsTokenManager = r),
        (this.accessToken = r.accessToken),
        (this.displayName = i.displayName || null),
        (this.email = i.email || null),
        (this.emailVerified = i.emailVerified || !1),
        (this.phoneNumber = i.phoneNumber || null),
        (this.photoURL = i.photoURL || null),
        (this.isAnonymous = i.isAnonymous || !1),
        (this.tenantId = i.tenantId || null),
        (this.providerData = i.providerData ? [...i.providerData] : []),
        (this.metadata = new Gp(
          i.createdAt || void 0,
          i.lastLoginAt || void 0,
        )));
    }
    getIdToken(e) {
      var t = this;
      return p(function* () {
        let n = yield Vp(t, t.stsTokenManager.getToken(t.auth, e));
        return (
          Z(n, t.auth, `internal-error`),
          t.accessToken !== n &&
            ((t.accessToken = n),
            yield t.auth._persistUserIfCurrent(t),
            t.auth._notifyListenersIfCurrent(t)),
          n
        );
      })();
    }
    getIdTokenResult(e) {
      return Ip(this, e);
    }
    reload() {
      return Jp(this);
    }
    _assign(e) {
      this !== e &&
        (Z(this.uid === e.uid, this.auth, `internal-error`),
        (this.displayName = e.displayName),
        (this.photoURL = e.photoURL),
        (this.email = e.email),
        (this.emailVerified = e.emailVerified),
        (this.phoneNumber = e.phoneNumber),
        (this.isAnonymous = e.isAnonymous),
        (this.tenantId = e.tenantId),
        (this.providerData = e.providerData.map((e) => u({}, e))),
        this.metadata._copy(e.metadata),
        this.stsTokenManager._assign(e.stsTokenManager));
    }
    _clone(t) {
      let n = new e(
        u(
          u({}, this),
          {},
          { auth: t, stsTokenManager: this.stsTokenManager._clone() },
        ),
      );
      return (n.metadata._copy(this.metadata), n);
    }
    _onReload(e) {
      (Z(!this.reloadListener, this.auth, `internal-error`),
        (this.reloadListener = e),
        this.reloadUserInfo &&
          (this._notifyReloadListener(this.reloadUserInfo),
          (this.reloadUserInfo = null)));
    }
    _notifyReloadListener(e) {
      this.reloadListener ? this.reloadListener(e) : (this.reloadUserInfo = e);
    }
    _startProactiveRefresh() {
      this.proactiveRefresh._start();
    }
    _stopProactiveRefresh() {
      this.proactiveRefresh._stop();
    }
    _updateTokensIfNecessary(e, t = !1) {
      var n = this;
      return p(function* () {
        let r = !1;
        (e.idToken &&
          e.idToken !== n.stsTokenManager.accessToken &&
          (n.stsTokenManager.updateFromServerResponse(e), (r = !0)),
          t && (yield Kp(n)),
          yield n.auth._persistUserIfCurrent(n),
          r && n.auth._notifyListenersIfCurrent(n));
      })();
    }
    delete() {
      var e = this;
      return p(function* () {
        if (sn(e.auth.app)) return Promise.reject(tp(e.auth));
        let t = yield e.getIdToken();
        return (
          yield Vp(e, jp(e.auth, { idToken: t })),
          e.stsTokenManager.clearRefreshToken(),
          e.auth.signOut()
        );
      })();
    }
    toJSON() {
      return u(
        u(
          {
            uid: this.uid,
            email: this.email || void 0,
            emailVerified: this.emailVerified,
            displayName: this.displayName || void 0,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || void 0,
            phoneNumber: this.phoneNumber || void 0,
            tenantId: this.tenantId || void 0,
            providerData: this.providerData.map((e) => u({}, e)),
            stsTokenManager: this.stsTokenManager.toJSON(),
            _redirectEventId: this._redirectEventId,
          },
          this.metadata.toJSON(),
        ),
        {},
        { apiKey: this.auth.config.apiKey, appName: this.auth.name },
      );
    }
    get refreshToken() {
      return this.stsTokenManager.refreshToken || ``;
    }
    static _fromJSON(t, n) {
      var r, i, a, o, s, c, l, d;
      let f = (r = n.displayName) == null ? void 0 : r,
        p = (i = n.email) == null ? void 0 : i,
        m = (a = n.phoneNumber) == null ? void 0 : a,
        h = (o = n.photoURL) == null ? void 0 : o,
        g = (s = n.tenantId) == null ? void 0 : s,
        ee = (c = n._redirectEventId) == null ? void 0 : c,
        te = (l = n.createdAt) == null ? void 0 : l,
        ne = (d = n.lastLoginAt) == null ? void 0 : d,
        {
          uid: re,
          emailVerified: ie,
          isAnonymous: _,
          providerData: ae,
          stsTokenManager: oe,
        } = n;
      Z(re && oe, t, `internal-error`);
      let se = nm.fromJSON(this.name, oe);
      (Z(typeof re == `string`, t, `internal-error`),
        rm(f, t.name),
        rm(p, t.name),
        Z(typeof ie == `boolean`, t, `internal-error`),
        Z(typeof _ == `boolean`, t, `internal-error`),
        rm(m, t.name),
        rm(h, t.name),
        rm(g, t.name),
        rm(ee, t.name),
        rm(te, t.name),
        rm(ne, t.name));
      let ce = new e({
        uid: re,
        auth: t,
        email: p,
        emailVerified: ie,
        displayName: f,
        isAnonymous: _,
        photoURL: h,
        phoneNumber: m,
        tenantId: g,
        stsTokenManager: se,
        createdAt: te,
        lastLoginAt: ne,
      });
      return (
        ae && Array.isArray(ae) && (ce.providerData = ae.map((e) => u({}, e))),
        ee && (ce._redirectEventId = ee),
        ce
      );
    }
    static _fromIdTokenResponse(t, n, r = !1) {
      return p(function* () {
        let i = new nm();
        i.updateFromServerResponse(n);
        let a = new e({
          uid: n.localId,
          auth: t,
          stsTokenManager: i,
          isAnonymous: r,
        });
        return (yield Kp(a), a);
      })();
    }
    static _fromGetAccountInfoResponse(t, n, r) {
      return p(function* () {
        let i = n.users[0];
        Z(i.localId !== void 0, `internal-error`);
        let a = i.providerUserInfo === void 0 ? [] : Zp(i.providerUserInfo),
          o = !(i.email && i.passwordHash) && !(a != null && a.length),
          s = new nm();
        s.updateFromIdToken(r);
        let c = new e({
            uid: i.localId,
            auth: t,
            stsTokenManager: s,
            isAnonymous: o,
          }),
          l = {
            uid: i.localId,
            displayName: i.displayName || null,
            photoURL: i.photoUrl || null,
            email: i.email || null,
            emailVerified: i.emailVerified || !1,
            phoneNumber: i.phoneNumber || null,
            tenantId: i.tenantId || null,
            providerData: a,
            metadata: new Gp(i.createdAt, i.lastLoginAt),
            isAnonymous:
              !(i.email && i.passwordHash) && !(a != null && a.length),
          };
        return (Object.assign(c, l), c);
      })();
    }
  },
  am = new Map();
function om(e) {
  ap(e instanceof Function, `Expected a class definition`);
  let t = am.get(e);
  return t
    ? (ap(t instanceof e, `Instance stored in cache mismatched with class`), t)
    : ((t = new e()), am.set(e, t), t);
}
var sm = class {
  constructor() {
    ((this.type = `NONE`), (this.storage = {}));
  }
  _isAvailable() {
    return p(function* () {
      return !0;
    })();
  }
  _set(e, t) {
    var n = this;
    return p(function* () {
      n.storage[e] = t;
    })();
  }
  _get(e) {
    var t = this;
    return p(function* () {
      let n = t.storage[e];
      return n === void 0 ? null : n;
    })();
  }
  _remove(e) {
    var t = this;
    return p(function* () {
      delete t.storage[e];
    })();
  }
  _addListener(e, t) {}
  _removeListener(e, t) {}
};
sm.type = `NONE`;
var cm = sm;
function lm(e, t, n) {
  return `firebase:${e}:${t}:${n}`;
}
var um = class e {
  constructor(e, t, n) {
    ((this.persistence = e), (this.auth = t), (this.userKey = n));
    let { config: r, name: i } = this.auth;
    ((this.fullUserKey = lm(this.userKey, r.apiKey, i)),
      (this.fullPersistenceKey = lm(`persistence`, r.apiKey, i)),
      (this.boundEventHandler = t._onStorageEvent.bind(t)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler));
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  getCurrentUser() {
    var e = this;
    return p(function* () {
      let t = yield e.persistence._get(e.fullUserKey);
      if (!t) return null;
      if (typeof t == `string`) {
        let n = yield Np(e.auth, { idToken: t }).catch(() => void 0);
        return n ? im._fromGetAccountInfoResponse(e.auth, n, t) : null;
      }
      return im._fromJSON(e.auth, t);
    })();
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type,
    );
  }
  setPersistence(e) {
    var t = this;
    return p(function* () {
      if (t.persistence === e) return;
      let n = yield t.getCurrentUser();
      if ((yield t.removeCurrentUser(), (t.persistence = e), n))
        return t.setCurrentUser(n);
    })();
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static create(t, n, r = `authUser`) {
    return p(function* () {
      if (!n.length) return new e(om(cm), t, r);
      let i = (yield Promise.all(
          n.map(
            (function () {
              var e = p(function* (e) {
                if (yield e._isAvailable()) return e;
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          ),
        )).filter((e) => e),
        a = i[0] || om(cm),
        o = lm(r, t.config.apiKey, t.name),
        s = null;
      for (let e of n)
        try {
          let n = yield e._get(o);
          if (n) {
            let r;
            if (typeof n == `string`) {
              let e = yield Np(t, { idToken: n }).catch(() => void 0);
              if (!e) break;
              r = yield im._fromGetAccountInfoResponse(t, e, n);
            } else r = im._fromJSON(t, n);
            (e !== a && (s = r), (a = e));
            break;
          }
        } catch (e) {}
      let c = i.filter((e) => e._shouldAllowMigration);
      return !a._shouldAllowMigration || !c.length
        ? new e(a, t, r)
        : ((a = c[0]),
          s && (yield a._set(o, s.toJSON())),
          yield Promise.all(
            n.map(
              (function () {
                var e = p(function* (e) {
                  if (e !== a)
                    try {
                      yield e._remove(o);
                    } catch (e) {}
                });
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          ),
          new e(a, t, r));
    })();
  }
};
function dm(e) {
  let t = e.toLowerCase();
  if (t.includes(`opera/`) || t.includes(`opr/`) || t.includes(`opios/`))
    return `Opera`;
  if (hm(t)) return `IEMobile`;
  if (t.includes(`msie`) || t.includes(`trident/`)) return `IE`;
  if (t.includes(`edge/`)) return `Edge`;
  if (fm(t)) return `Firefox`;
  if (t.includes(`silk/`)) return `Silk`;
  if (_m(t)) return `Blackberry`;
  if (vm(t)) return `Webos`;
  if (pm(t)) return `Safari`;
  if ((t.includes(`chrome/`) || mm(t)) && !t.includes(`edge/`)) return `Chrome`;
  if (gm(t)) return `Android`;
  {
    let t = e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);
    if ((t == null ? void 0 : t.length) === 2) return t[1];
  }
  return `Other`;
}
function fm(e = y()) {
  return /firefox\//i.test(e);
}
function pm(e = y()) {
  let t = e.toLowerCase();
  return (
    t.includes(`safari/`) &&
    !t.includes(`chrome/`) &&
    !t.includes(`crios/`) &&
    !t.includes(`android`)
  );
}
function mm(e = y()) {
  return /crios\//i.test(e);
}
function hm(e = y()) {
  return /iemobile/i.test(e);
}
function gm(e = y()) {
  return /android/i.test(e);
}
function _m(e = y()) {
  return /blackberry/i.test(e);
}
function vm(e = y()) {
  return /webos/i.test(e);
}
function ym(e = y()) {
  return (
    /iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e))
  );
}
function bm(e = y()) {
  var t;
  return ym(e) && !!((t = window.navigator) != null && t.standalone);
}
function xm() {
  return xe() && document.documentMode === 10;
}
function Sm(e = y()) {
  return ym(e) || gm(e) || vm(e) || _m(e) || /windows phone/i.test(e) || hm(e);
}
function Cm(e, t = []) {
  let n;
  switch (e) {
    case `Browser`:
      n = dm(y());
      break;
    case `Worker`:
      n = `${dm(y())}-${e}`;
      break;
    default:
      n = e;
  }
  let r = t.length ? t.join(`,`) : `FirebaseCore-web`;
  return `${n}/JsCore/${un}/${r}`;
}
var wm = class {
  constructor(e) {
    ((this.auth = e), (this.queue = []));
  }
  pushCallback(e, t) {
    let n = (t) =>
      new Promise((n, r) => {
        try {
          n(e(t));
        } catch (e) {
          r(e);
        }
      });
    ((n.onAbort = t), this.queue.push(n));
    let r = this.queue.length - 1;
    return () => {
      this.queue[r] = () => Promise.resolve();
    };
  }
  runMiddleware(e) {
    var t = this;
    return p(function* () {
      if (t.auth.currentUser === e) return;
      let n = [];
      try {
        for (let r of t.queue) (yield r(e), r.onAbort && n.push(r.onAbort));
      } catch (e) {
        n.reverse();
        for (let e of n)
          try {
            e();
          } catch (e) {}
        throw t.auth._errorFactory.create(`login-blocked`, {
          originalMessage: e == null ? void 0 : e.message,
        });
      }
    })();
  }
};
function Tm(e) {
  return Em.apply(this, arguments);
}
function Em() {
  return (
    (Em = p(function* (e, t = {}) {
      return $(e, `GET`, `/v2/passwordPolicy`, Q(e, t));
    })),
    Em.apply(this, arguments)
  );
}
var Dm = 6,
  Om = class {
    constructor(e) {
      var t, n, r, i;
      let a = e.customStrengthOptions;
      ((this.customStrengthOptions = {}),
        (this.customStrengthOptions.minPasswordLength =
          (t = a.minPasswordLength) == null ? Dm : t),
        a.maxPasswordLength &&
          (this.customStrengthOptions.maxPasswordLength = a.maxPasswordLength),
        a.containsLowercaseCharacter !== void 0 &&
          (this.customStrengthOptions.containsLowercaseLetter =
            a.containsLowercaseCharacter),
        a.containsUppercaseCharacter !== void 0 &&
          (this.customStrengthOptions.containsUppercaseLetter =
            a.containsUppercaseCharacter),
        a.containsNumericCharacter !== void 0 &&
          (this.customStrengthOptions.containsNumericCharacter =
            a.containsNumericCharacter),
        a.containsNonAlphanumericCharacter !== void 0 &&
          (this.customStrengthOptions.containsNonAlphanumericCharacter =
            a.containsNonAlphanumericCharacter),
        (this.enforcementState = e.enforcementState),
        this.enforcementState === `ENFORCEMENT_STATE_UNSPECIFIED` &&
          (this.enforcementState = `OFF`),
        (this.allowedNonAlphanumericCharacters =
          (n =
            (r = e.allowedNonAlphanumericCharacters) == null
              ? void 0
              : r.join(``)) == null
            ? ``
            : n),
        (this.forceUpgradeOnSignin =
          (i = e.forceUpgradeOnSignin) == null ? !1 : i),
        (this.schemaVersion = e.schemaVersion));
    }
    validatePassword(e) {
      var t, n, r, i, a, o;
      let s = { isValid: !0, passwordPolicy: this };
      return (
        this.validatePasswordLengthOptions(e, s),
        this.validatePasswordCharacterOptions(e, s),
        s.isValid &&
          (s.isValid = (t = s.meetsMinPasswordLength) == null ? !0 : t),
        s.isValid &&
          (s.isValid = (n = s.meetsMaxPasswordLength) == null ? !0 : n),
        s.isValid &&
          (s.isValid = (r = s.containsLowercaseLetter) == null ? !0 : r),
        s.isValid &&
          (s.isValid = (i = s.containsUppercaseLetter) == null ? !0 : i),
        s.isValid &&
          (s.isValid = (a = s.containsNumericCharacter) == null ? !0 : a),
        s.isValid &&
          (s.isValid =
            (o = s.containsNonAlphanumericCharacter) == null ? !0 : o),
        s
      );
    }
    validatePasswordLengthOptions(e, t) {
      let n = this.customStrengthOptions.minPasswordLength,
        r = this.customStrengthOptions.maxPasswordLength;
      (n && (t.meetsMinPasswordLength = e.length >= n),
        r && (t.meetsMaxPasswordLength = e.length <= r));
    }
    validatePasswordCharacterOptions(e, t) {
      this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1);
      let n;
      for (let r = 0; r < e.length; r++)
        ((n = e.charAt(r)),
          this.updatePasswordCharacterOptionsStatuses(
            t,
            n >= `a` && n <= `z`,
            n >= `A` && n <= `Z`,
            n >= `0` && n <= `9`,
            this.allowedNonAlphanumericCharacters.includes(n),
          ));
    }
    updatePasswordCharacterOptionsStatuses(e, t, n, r, i) {
      (this.customStrengthOptions.containsLowercaseLetter &&
        (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)),
        this.customStrengthOptions.containsUppercaseLetter &&
          (e.containsUppercaseLetter || (e.containsUppercaseLetter = n)),
        this.customStrengthOptions.containsNumericCharacter &&
          (e.containsNumericCharacter || (e.containsNumericCharacter = r)),
        this.customStrengthOptions.containsNonAlphanumericCharacter &&
          (e.containsNonAlphanumericCharacter ||
            (e.containsNonAlphanumericCharacter = i)));
    }
  },
  km = class {
    constructor(e, t, n, r) {
      ((this.app = e),
        (this.heartbeatServiceProvider = t),
        (this.appCheckServiceProvider = n),
        (this.config = r),
        (this.currentUser = null),
        (this.emulatorConfig = null),
        (this.operations = Promise.resolve()),
        (this.authStateSubscription = new jm(this)),
        (this.idTokenSubscription = new jm(this)),
        (this.beforeStateQueue = new wm(this)),
        (this.redirectUser = null),
        (this.isProactiveRefreshEnabled = !1),
        (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
        (this._canInitEmulator = !0),
        (this._isInitialized = !1),
        (this._deleted = !1),
        (this._initializationPromise = null),
        (this._popupRedirectResolver = null),
        (this._errorFactory = Jf),
        (this._agentRecaptchaConfig = null),
        (this._tenantRecaptchaConfigs = {}),
        (this._projectPasswordPolicy = null),
        (this._tenantPasswordPolicies = {}),
        (this._resolvePersistenceManagerAvailable = void 0),
        (this.lastNotifiedUid = void 0),
        (this.languageCode = null),
        (this.tenantId = null),
        (this.settings = { appVerificationDisabledForTesting: !1 }),
        (this.frameworks = []),
        (this.name = e.name),
        (this.clientVersion = r.sdkClientVersion),
        (this._persistenceManagerAvailable = new Promise(
          (e) => (this._resolvePersistenceManagerAvailable = e),
        )));
    }
    _initializeWithPersistence(e, t) {
      var n = this;
      return (
        t && (this._popupRedirectResolver = om(t)),
        (this._initializationPromise = this.queue(
          p(function* () {
            var r, i, a;
            if (
              !n._deleted &&
              ((n.persistenceManager = yield um.create(n, e)),
              (r = n._resolvePersistenceManagerAvailable) == null || r.call(n),
              !n._deleted)
            ) {
              if (
                (i = n._popupRedirectResolver) != null &&
                i._shouldInitProactively
              )
                try {
                  yield n._popupRedirectResolver._initialize(n);
                } catch (e) {}
              (yield n.initializeCurrentUser(t),
                (n.lastNotifiedUid =
                  ((a = n.currentUser) == null ? void 0 : a.uid) || null),
                !n._deleted && (n._isInitialized = !0));
            }
          }),
        )),
        this._initializationPromise
      );
    }
    _onStorageEvent() {
      var e = this;
      return p(function* () {
        if (e._deleted) return;
        let t = yield e.assertedPersistence.getCurrentUser();
        if (!(!e.currentUser && !t)) {
          if (e.currentUser && t && e.currentUser.uid === t.uid) {
            (e._currentUser._assign(t), yield e.currentUser.getIdToken());
            return;
          }
          yield e._updateCurrentUser(t, !0);
        }
      })();
    }
    initializeCurrentUserFromIdToken(e) {
      var t = this;
      return p(function* () {
        try {
          let n = yield Np(t, { idToken: e }),
            r = yield im._fromGetAccountInfoResponse(t, n, e);
          yield t.directlySetCurrentUser(r);
        } catch (e) {
          (console.warn(
            `FirebaseServerApp could not login user with provided authIdToken: `,
            e,
          ),
            yield t.directlySetCurrentUser(null));
        }
      })();
    }
    initializeCurrentUser(e) {
      var t = this;
      return p(function* () {
        if (sn(t.app)) {
          let e = t.app.settings.authIdToken;
          return e
            ? new Promise((n) => {
                setTimeout(() =>
                  t.initializeCurrentUserFromIdToken(e).then(n, n),
                );
              })
            : t.directlySetCurrentUser(null);
        }
        let n = yield t.assertedPersistence.getCurrentUser(),
          r = n,
          i = !1;
        if (e && t.config.authDomain) {
          var a;
          yield t.getOrInitRedirectPersistenceManager();
          let n = (a = t.redirectUser) == null ? void 0 : a._redirectEventId,
            o = r == null ? void 0 : r._redirectEventId,
            s = yield t.tryRedirectSignIn(e);
          (!n || n === o) && s != null && s.user && ((r = s.user), (i = !0));
        }
        if (!r) return t.directlySetCurrentUser(null);
        if (!r._redirectEventId) {
          if (i)
            try {
              yield t.beforeStateQueue.runMiddleware(r);
            } catch (e) {
              ((r = n),
                t._popupRedirectResolver._overrideRedirectResult(t, () =>
                  Promise.reject(e),
                ));
            }
          return r
            ? t.reloadAndSetCurrentUserOrClear(r)
            : t.directlySetCurrentUser(null);
        }
        return (
          Z(t._popupRedirectResolver, t, `argument-error`),
          yield t.getOrInitRedirectPersistenceManager(),
          t.redirectUser &&
          t.redirectUser._redirectEventId === r._redirectEventId
            ? t.directlySetCurrentUser(r)
            : t.reloadAndSetCurrentUserOrClear(r)
        );
      })();
    }
    tryRedirectSignIn(e) {
      var t = this;
      return p(function* () {
        let n = null;
        try {
          n = yield t._popupRedirectResolver._completeRedirectFn(t, e, !0);
        } catch (e) {
          yield t._setRedirectUser(null);
        }
        return n;
      })();
    }
    reloadAndSetCurrentUserOrClear(e) {
      var t = this;
      return p(function* () {
        try {
          yield Kp(e);
        } catch (e) {
          if ((e == null ? void 0 : e.code) !== `auth/network-request-failed`)
            return t.directlySetCurrentUser(null);
        }
        return t.directlySetCurrentUser(e);
      })();
    }
    useDeviceLanguage() {
      this.languageCode = up();
    }
    _delete() {
      var e = this;
      return p(function* () {
        e._deleted = !0;
      })();
    }
    updateCurrentUser(e) {
      var t = this;
      return p(function* () {
        if (sn(t.app)) return Promise.reject(tp(t));
        let n = e ? S(e) : null;
        return (
          n &&
            Z(
              n.auth.config.apiKey === t.config.apiKey,
              t,
              `invalid-user-token`,
            ),
          t._updateCurrentUser(n && n._clone(t))
        );
      })();
    }
    _updateCurrentUser(e, t = !1) {
      var n = this;
      return p(function* () {
        if (!n._deleted)
          return (
            e && Z(n.tenantId === e.tenantId, n, `tenant-id-mismatch`),
            t || (yield n.beforeStateQueue.runMiddleware(e)),
            n.queue(
              p(function* () {
                (yield n.directlySetCurrentUser(e), n.notifyAuthListeners());
              }),
            )
          );
      })();
    }
    signOut() {
      var e = this;
      return p(function* () {
        return sn(e.app)
          ? Promise.reject(tp(e))
          : (yield e.beforeStateQueue.runMiddleware(null),
            (e.redirectPersistenceManager || e._popupRedirectResolver) &&
              (yield e._setRedirectUser(null)),
            e._updateCurrentUser(null, !0));
      })();
    }
    setPersistence(e) {
      var t = this;
      return sn(this.app)
        ? Promise.reject(tp(this))
        : this.queue(
            p(function* () {
              yield t.assertedPersistence.setPersistence(om(e));
            }),
          );
    }
    _getRecaptchaConfig() {
      return this.tenantId == null
        ? this._agentRecaptchaConfig
        : this._tenantRecaptchaConfigs[this.tenantId];
    }
    validatePassword(e) {
      var t = this;
      return p(function* () {
        t._getPasswordPolicyInternal() || (yield t._updatePasswordPolicy());
        let n = t._getPasswordPolicyInternal();
        return n.schemaVersion === t.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
          ? n.validatePassword(e)
          : Promise.reject(
              t._errorFactory.create(
                `unsupported-password-policy-schema-version`,
                {},
              ),
            );
      })();
    }
    _getPasswordPolicyInternal() {
      return this.tenantId === null
        ? this._projectPasswordPolicy
        : this._tenantPasswordPolicies[this.tenantId];
    }
    _updatePasswordPolicy() {
      var e = this;
      return p(function* () {
        let t = new Om(yield Tm(e));
        e.tenantId === null
          ? (e._projectPasswordPolicy = t)
          : (e._tenantPasswordPolicies[e.tenantId] = t);
      })();
    }
    _getPersistenceType() {
      return this.assertedPersistence.persistence.type;
    }
    _getPersistence() {
      return this.assertedPersistence.persistence;
    }
    _updateErrorMap(e) {
      this._errorFactory = new De(`auth`, `Firebase`, e());
    }
    onAuthStateChanged(e, t, n) {
      return this.registerStateListener(this.authStateSubscription, e, t, n);
    }
    beforeAuthStateChanged(e, t) {
      return this.beforeStateQueue.pushCallback(e, t);
    }
    onIdTokenChanged(e, t, n) {
      return this.registerStateListener(this.idTokenSubscription, e, t, n);
    }
    authStateReady() {
      return new Promise((e, t) => {
        if (this.currentUser) e();
        else {
          let n = this.onAuthStateChanged(() => {
            (n(), e());
          }, t);
        }
      });
    }
    revokeAccessToken(e) {
      var t = this;
      return p(function* () {
        if (t.currentUser) {
          let n = {
            providerId: `apple.com`,
            tokenType: `ACCESS_TOKEN`,
            token: e,
            idToken: yield t.currentUser.getIdToken(),
          };
          (t.tenantId != null && (n.tenantId = t.tenantId), yield em(t, n));
        }
      })();
    }
    toJSON() {
      var e;
      return {
        apiKey: this.config.apiKey,
        authDomain: this.config.authDomain,
        appName: this.name,
        currentUser: (e = this._currentUser) == null ? void 0 : e.toJSON(),
      };
    }
    _setRedirectUser(e, t) {
      var n = this;
      return p(function* () {
        let r = yield n.getOrInitRedirectPersistenceManager(t);
        return e === null ? r.removeCurrentUser() : r.setCurrentUser(e);
      })();
    }
    getOrInitRedirectPersistenceManager(e) {
      var t = this;
      return p(function* () {
        if (!t.redirectPersistenceManager) {
          let n = (e && om(e)) || t._popupRedirectResolver;
          (Z(n, t, `argument-error`),
            (t.redirectPersistenceManager = yield um.create(
              t,
              [om(n._redirectPersistence)],
              `redirectUser`,
            )),
            (t.redirectUser =
              yield t.redirectPersistenceManager.getCurrentUser()));
        }
        return t.redirectPersistenceManager;
      })();
    }
    _redirectUserForId(e) {
      var t = this;
      return p(function* () {
        var n, r;
        return (
          t._isInitialized && (yield t.queue(p(function* () {}))),
          ((n = t._currentUser) == null ? void 0 : n._redirectEventId) === e
            ? t._currentUser
            : ((r = t.redirectUser) == null ? void 0 : r._redirectEventId) === e
              ? t.redirectUser
              : null
        );
      })();
    }
    _persistUserIfCurrent(e) {
      var t = this;
      return p(function* () {
        if (e === t.currentUser)
          return t.queue(
            p(function* () {
              return t.directlySetCurrentUser(e);
            }),
          );
      })();
    }
    _notifyListenersIfCurrent(e) {
      e === this.currentUser && this.notifyAuthListeners();
    }
    _key() {
      return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
    }
    _startProactiveRefresh() {
      ((this.isProactiveRefreshEnabled = !0),
        this.currentUser && this._currentUser._startProactiveRefresh());
    }
    _stopProactiveRefresh() {
      ((this.isProactiveRefreshEnabled = !1),
        this.currentUser && this._currentUser._stopProactiveRefresh());
    }
    get _currentUser() {
      return this.currentUser;
    }
    notifyAuthListeners() {
      var e, t;
      if (!this._isInitialized) return;
      this.idTokenSubscription.next(this.currentUser);
      let n =
        (e = (t = this.currentUser) == null ? void 0 : t.uid) == null
          ? null
          : e;
      this.lastNotifiedUid !== n &&
        ((this.lastNotifiedUid = n),
        this.authStateSubscription.next(this.currentUser));
    }
    registerStateListener(e, t, n, r) {
      if (this._deleted) return () => {};
      let i = typeof t == `function` ? t : t.next.bind(t),
        a = !1,
        o = this._isInitialized
          ? Promise.resolve()
          : this._initializationPromise;
      if (
        (Z(o, this, `internal-error`),
        o.then(() => {
          a || i(this.currentUser);
        }),
        typeof t == `function`)
      ) {
        let i = e.addObserver(t, n, r);
        return () => {
          ((a = !0), i());
        };
      } else {
        let n = e.addObserver(t);
        return () => {
          ((a = !0), n());
        };
      }
    }
    directlySetCurrentUser(e) {
      var t = this;
      return p(function* () {
        (t.currentUser &&
          t.currentUser !== e &&
          t._currentUser._stopProactiveRefresh(),
          e && t.isProactiveRefreshEnabled && e._startProactiveRefresh(),
          (t.currentUser = e),
          e
            ? yield t.assertedPersistence.setCurrentUser(e)
            : yield t.assertedPersistence.removeCurrentUser());
      })();
    }
    queue(e) {
      return ((this.operations = this.operations.then(e, e)), this.operations);
    }
    get assertedPersistence() {
      return (
        Z(this.persistenceManager, this, `internal-error`),
        this.persistenceManager
      );
    }
    _logFramework(e) {
      !e ||
        this.frameworks.includes(e) ||
        (this.frameworks.push(e),
        this.frameworks.sort(),
        (this.clientVersion = Cm(
          this.config.clientPlatform,
          this._getFrameworks(),
        )));
    }
    _getFrameworks() {
      return this.frameworks;
    }
    _getAdditionalHeaders() {
      var e = this;
      return p(function* () {
        var t;
        let n = { "X-Client-Version": e.clientVersion };
        e.app.options.appId && (n[`X-Firebase-gmpid`] = e.app.options.appId);
        let r = yield (t = e.heartbeatServiceProvider.getImmediate({
          optional: !0,
        })) == null
          ? void 0
          : t.getHeartbeatsHeader();
        r && (n[`X-Firebase-Client`] = r);
        let i = yield e._getAppCheckToken();
        return (i && (n[`X-Firebase-AppCheck`] = i), n);
      })();
    }
    _getAppCheckToken() {
      var e = this;
      return p(function* () {
        var t;
        if (sn(e.app) && e.app.settings.appCheckToken)
          return e.app.settings.appCheckToken;
        let n = yield (t = e.appCheckServiceProvider.getImmediate({
          optional: !0,
        })) == null
          ? void 0
          : t.getToken();
        return (
          n != null &&
            n.error &&
            Xf(`Error while retrieving App Check token: ${n.error}`),
          n == null ? void 0 : n.token
        );
      })();
    }
  };
function Am(e) {
  return S(e);
}
var jm = class {
    constructor(e) {
      ((this.auth = e),
        (this.observer = null),
        (this.addObserver = b((e) => (this.observer = e))));
    }
    get next() {
      return (
        Z(this.observer, this.auth, `internal-error`),
        this.observer.next.bind(this.observer)
      );
    }
  },
  Mm = {
    loadJS() {
      return p(function* () {
        throw Error(`Unable to load external scripts`);
      })();
    },
    recaptchaV2Script: ``,
    recaptchaEnterpriseScript: ``,
    gapiScript: ``,
  };
function Nm(e) {
  Mm = e;
}
function Pm(e) {
  return Mm.loadJS(e);
}
function Fm() {
  return Mm.recaptchaEnterpriseScript;
}
function Im() {
  return Mm.gapiScript;
}
function Lm(e) {
  return `__${e}${Math.floor(Math.random() * 1e6)}`;
}
var Rm = class {
    constructor() {
      this.enterprise = new zm();
    }
    ready(e) {
      e();
    }
    execute(e, t) {
      return Promise.resolve(`token`);
    }
    render(e, t) {
      return ``;
    }
  },
  zm = class {
    ready(e) {
      e();
    }
    execute(e, t) {
      return Promise.resolve(`token`);
    }
    render(e, t) {
      return ``;
    }
  },
  Bm = `recaptcha-enterprise`,
  Vm = `NO_RECAPTCHA`,
  Hm = class {
    constructor(e) {
      ((this.type = Bm), (this.auth = Am(e)));
    }
    verify(e = `verify`, t = !1) {
      var n = this;
      return p(function* () {
        function r(e) {
          return i.apply(this, arguments);
        }
        function i() {
          return (
            (i = p(function* (e) {
              if (!t) {
                if (e.tenantId == null && e._agentRecaptchaConfig != null)
                  return e._agentRecaptchaConfig.siteKey;
                if (
                  e.tenantId != null &&
                  e._tenantRecaptchaConfigs[e.tenantId] !== void 0
                )
                  return e._tenantRecaptchaConfigs[e.tenantId].siteKey;
              }
              return new Promise(
                (function () {
                  var t = p(function* (t, n) {
                    kp(e, {
                      clientType: `CLIENT_TYPE_WEB`,
                      version: `RECAPTCHA_ENTERPRISE`,
                    })
                      .then((r) => {
                        if (r.recaptchaKey === void 0)
                          n(Error(`recaptcha Enterprise site key undefined`));
                        else {
                          let n = new Op(r);
                          return (
                            e.tenantId == null
                              ? (e._agentRecaptchaConfig = n)
                              : (e._tenantRecaptchaConfigs[e.tenantId] = n),
                            t(n.siteKey)
                          );
                        }
                      })
                      .catch((e) => {
                        n(e);
                      });
                  });
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })(),
              );
            })),
            i.apply(this, arguments)
          );
        }
        function a(t, n, r) {
          let i = window.grecaptcha;
          Dp(i)
            ? i.enterprise.ready(() => {
                i.enterprise
                  .execute(t, { action: e })
                  .then((e) => {
                    n(e);
                  })
                  .catch(() => {
                    n(Vm);
                  });
              })
            : r(Error(`No reCAPTCHA enterprise script loaded.`));
        }
        return n.auth.settings.appVerificationDisabledForTesting
          ? new Rm().execute(`siteKey`, { action: `verify` })
          : new Promise((e, i) => {
              r(n.auth)
                .then((n) => {
                  if (!t && Dp(window.grecaptcha)) a(n, e, i);
                  else {
                    if (typeof window > `u`) {
                      i(
                        Error(`RecaptchaVerifier is only supported in browser`),
                      );
                      return;
                    }
                    let t = Fm();
                    (t.length !== 0 && (t += n),
                      Pm(t)
                        .then(() => {
                          a(n, e, i);
                        })
                        .catch((e) => {
                          i(e);
                        }));
                  }
                })
                .catch((e) => {
                  i(e);
                });
            });
      })();
    }
  };
function Um(e, t, n) {
  return Wm.apply(this, arguments);
}
function Wm() {
  return (
    (Wm = p(function* (e, t, n, r = !1, i = !1) {
      let a = new Hm(e),
        o;
      if (i) o = Vm;
      else
        try {
          o = yield a.verify(n);
        } catch (e) {
          o = yield a.verify(n, !0);
        }
      let s = u({}, t);
      if (n === `mfaSmsEnrollment` || n === `mfaSmsSignIn`) {
        if (`phoneEnrollmentInfo` in s) {
          let e = s.phoneEnrollmentInfo.phoneNumber,
            t = s.phoneEnrollmentInfo.recaptchaToken;
          Object.assign(s, {
            phoneEnrollmentInfo: {
              phoneNumber: e,
              recaptchaToken: t,
              captchaResponse: o,
              clientType: `CLIENT_TYPE_WEB`,
              recaptchaVersion: `RECAPTCHA_ENTERPRISE`,
            },
          });
        } else if (`phoneSignInInfo` in s) {
          let e = s.phoneSignInInfo.recaptchaToken;
          Object.assign(s, {
            phoneSignInInfo: {
              recaptchaToken: e,
              captchaResponse: o,
              clientType: `CLIENT_TYPE_WEB`,
              recaptchaVersion: `RECAPTCHA_ENTERPRISE`,
            },
          });
        }
        return s;
      }
      return (
        r
          ? Object.assign(s, { captchaResp: o })
          : Object.assign(s, { captchaResponse: o }),
        Object.assign(s, { clientType: `CLIENT_TYPE_WEB` }),
        Object.assign(s, { recaptchaVersion: `RECAPTCHA_ENTERPRISE` }),
        s
      );
    })),
    Wm.apply(this, arguments)
  );
}
function Gm(e, t, n, r, i) {
  return Km.apply(this, arguments);
}
function Km() {
  return (
    (Km = p(function* (e, t, n, r, i) {
      if (i === `EMAIL_PASSWORD_PROVIDER`) {
        var a;
        return (a = e._getRecaptchaConfig()) != null &&
          a.isProviderEnabled(`EMAIL_PASSWORD_PROVIDER`)
          ? r(e, yield Um(e, t, n, n === `getOobCode`))
          : r(e, t).catch(
              (function () {
                var i = p(function* (i) {
                  return i.code === `auth/missing-recaptcha-token`
                    ? (console.log(
                        `${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`,
                      ),
                      r(e, yield Um(e, t, n, n === `getOobCode`)))
                    : Promise.reject(i);
                });
                return function (e) {
                  return i.apply(this, arguments);
                };
              })(),
            );
      } else if (i === `PHONE_PROVIDER`) {
        var o;
        return (o = e._getRecaptchaConfig()) != null &&
          o.isProviderEnabled(`PHONE_PROVIDER`)
          ? r(e, yield Um(e, t, n)).catch(
              (function () {
                var i = p(function* (i) {
                  var a;
                  return ((a = e._getRecaptchaConfig()) == null
                    ? void 0
                    : a.getProviderEnforcementState(`PHONE_PROVIDER`)) ===
                    `AUDIT` &&
                    (i.code === `auth/missing-recaptcha-token` ||
                      i.code === `auth/invalid-app-credential`)
                    ? (console.log(
                        `Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`,
                      ),
                      r(e, yield Um(e, t, n, !1, !0)))
                    : Promise.reject(i);
                });
                return function (e) {
                  return i.apply(this, arguments);
                };
              })(),
            )
          : r(e, yield Um(e, t, n, !1, !0));
      } else return Promise.reject(i + ` provider is not supported.`);
    })),
    Km.apply(this, arguments)
  );
}
function qm(e) {
  return Jm.apply(this, arguments);
}
function Jm() {
  return (
    (Jm = p(function* (e) {
      let t = Am(e),
        n = new Op(
          yield kp(t, {
            clientType: `CLIENT_TYPE_WEB`,
            version: `RECAPTCHA_ENTERPRISE`,
          }),
        );
      (t.tenantId == null
        ? (t._agentRecaptchaConfig = n)
        : (t._tenantRecaptchaConfigs[t.tenantId] = n),
        n.isAnyProviderEnabled() && new Hm(t).verify());
    })),
    Jm.apply(this, arguments)
  );
}
function Ym(e, t) {
  let n = on(e, `auth`);
  if (n.isInitialized()) {
    let e = n.getImmediate();
    if (je(n.getOptions(), t == null ? {} : t)) return e;
    Qf(e, `already-initialized`);
  }
  return n.initialize({ options: t });
}
function Xm(e, t) {
  let n = (t == null ? void 0 : t.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(om);
  (t != null && t.errorMap && e._updateErrorMap(t.errorMap),
    e._initializeWithPersistence(
      r,
      t == null ? void 0 : t.popupRedirectResolver,
    ));
}
function Zm(e, t, n) {
  let r = Am(e);
  Z(/^https?:\/\//.test(t), r, `invalid-emulator-scheme`);
  let i = !!(n != null && n.disableWarnings),
    a = Qm(t),
    { host: o, port: s } = $m(t),
    c = s === null ? `` : `:${s}`,
    l = { url: `${a}//${o}${c}/` },
    u = Object.freeze({
      host: o,
      port: s,
      protocol: a.replace(`:`, ``),
      options: Object.freeze({ disableWarnings: i }),
    });
  if (!r._canInitEmulator) {
    (Z(r.config.emulator && r.emulatorConfig, r, `emulator-config-failed`),
      Z(
        je(l, r.config.emulator) && je(u, r.emulatorConfig),
        r,
        `emulator-config-failed`,
      ));
    return;
  }
  ((r.config.emulator = l),
    (r.emulatorConfig = u),
    (r.settings.appVerificationDisabledForTesting = !0),
    Re(o) ? ze(`${a}//${o}${c}`) : i || th());
}
function Qm(e) {
  let t = e.indexOf(`:`);
  return t < 0 ? `` : e.substr(0, t + 1);
}
function $m(e) {
  let t = Qm(e),
    n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
  if (!n) return { host: ``, port: null };
  let r = n[2].split(`@`).pop() || ``,
    i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    let e = i[1];
    return { host: e, port: eh(r.substr(e.length + 1)) };
  } else {
    let [e, t] = r.split(`:`);
    return { host: e, port: eh(t) };
  }
}
function eh(e) {
  if (!e) return null;
  let t = Number(e);
  return isNaN(t) ? null : t;
}
function th() {
  function e() {
    let e = document.createElement(`p`),
      t = e.style;
    ((e.innerText = `Running in emulator mode. Do not use with production credentials.`),
      (t.position = `fixed`),
      (t.width = `100%`),
      (t.backgroundColor = `#ffffff`),
      (t.border = `.1em solid #000000`),
      (t.color = `#b50000`),
      (t.bottom = `0px`),
      (t.left = `0px`),
      (t.margin = `0px`),
      (t.zIndex = `10000`),
      (t.textAlign = `center`),
      e.classList.add(`firebase-emulator-warning`),
      document.body.appendChild(e));
  }
  (typeof console < `u` &&
    typeof console.info == `function` &&
    console.info(
      `WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.`,
    ),
    typeof window < `u` &&
      typeof document < `u` &&
      (document.readyState === `loading`
        ? window.addEventListener(`DOMContentLoaded`, e)
        : e()));
}
var nh = class {
  constructor(e, t) {
    ((this.providerId = e), (this.signInMethod = t));
  }
  toJSON() {
    return ip(`not implemented`);
  }
  _getIdTokenResponse(e) {
    return ip(`not implemented`);
  }
  _linkToIdToken(e, t) {
    return ip(`not implemented`);
  }
  _getReauthenticationResolver(e) {
    return ip(`not implemented`);
  }
};
function rh(e, t) {
  return ih.apply(this, arguments);
}
function ih() {
  return (
    (ih = p(function* (e, t) {
      return $(e, `POST`, `/v1/accounts:signUp`, t);
    })),
    ih.apply(this, arguments)
  );
}
function ah(e, t) {
  return oh.apply(this, arguments);
}
function oh() {
  return (
    (oh = p(function* (e, t) {
      return bp(e, `POST`, `/v1/accounts:signInWithPassword`, Q(e, t));
    })),
    oh.apply(this, arguments)
  );
}
function sh(e, t) {
  return ch.apply(this, arguments);
}
function ch() {
  return (
    (ch = p(function* (e, t) {
      return bp(e, `POST`, `/v1/accounts:signInWithEmailLink`, Q(e, t));
    })),
    ch.apply(this, arguments)
  );
}
function lh(e, t) {
  return uh.apply(this, arguments);
}
function uh() {
  return (
    (uh = p(function* (e, t) {
      return bp(e, `POST`, `/v1/accounts:signInWithEmailLink`, Q(e, t));
    })),
    uh.apply(this, arguments)
  );
}
var dh = class e extends nh {
  constructor(e, t, n, r = null) {
    (super(`password`, n),
      (this._email = e),
      (this._password = t),
      (this._tenantId = r));
  }
  static _fromEmailAndPassword(t, n) {
    return new e(t, n, `password`);
  }
  static _fromEmailAndCode(t, n, r = null) {
    return new e(t, n, `emailLink`, r);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId,
    };
  }
  static fromJSON(e) {
    let t = typeof e == `string` ? JSON.parse(e) : e;
    if (t != null && t.email && t != null && t.password) {
      if (t.signInMethod === `password`)
        return this._fromEmailAndPassword(t.email, t.password);
      if (t.signInMethod === `emailLink`)
        return this._fromEmailAndCode(t.email, t.password, t.tenantId);
    }
    return null;
  }
  _getIdTokenResponse(e) {
    var t = this;
    return p(function* () {
      switch (t.signInMethod) {
        case `password`:
          return Gm(
            e,
            {
              returnSecureToken: !0,
              email: t._email,
              password: t._password,
              clientType: `CLIENT_TYPE_WEB`,
            },
            `signInWithPassword`,
            ah,
            `EMAIL_PASSWORD_PROVIDER`,
          );
        case `emailLink`:
          return sh(e, { email: t._email, oobCode: t._password });
        default:
          Qf(e, `internal-error`);
      }
    })();
  }
  _linkToIdToken(e, t) {
    var n = this;
    return p(function* () {
      switch (n.signInMethod) {
        case `password`:
          return Gm(
            e,
            {
              idToken: t,
              returnSecureToken: !0,
              email: n._email,
              password: n._password,
              clientType: `CLIENT_TYPE_WEB`,
            },
            `signUpPassword`,
            rh,
            `EMAIL_PASSWORD_PROVIDER`,
          );
        case `emailLink`:
          return lh(e, { idToken: t, email: n._email, oobCode: n._password });
        default:
          Qf(e, `internal-error`);
      }
    })();
  }
  _getReauthenticationResolver(e) {
    return this._getIdTokenResponse(e);
  }
};
function fh(e, t) {
  return ph.apply(this, arguments);
}
function ph() {
  return (
    (ph = p(function* (e, t) {
      return bp(e, `POST`, `/v1/accounts:signInWithIdp`, Q(e, t));
    })),
    ph.apply(this, arguments)
  );
}
var mh = `http://localhost`,
  hh = class e extends nh {
    constructor() {
      (super(...arguments), (this.pendingToken = null));
    }
    static _fromParams(t) {
      let n = new e(t.providerId, t.signInMethod);
      return (
        t.idToken || t.accessToken
          ? (t.idToken && (n.idToken = t.idToken),
            t.accessToken && (n.accessToken = t.accessToken),
            t.nonce && !t.pendingToken && (n.nonce = t.nonce),
            t.pendingToken && (n.pendingToken = t.pendingToken))
          : t.oauthToken && t.oauthTokenSecret
            ? ((n.accessToken = t.oauthToken), (n.secret = t.oauthTokenSecret))
            : Qf(`argument-error`),
        n
      );
    }
    toJSON() {
      return {
        idToken: this.idToken,
        accessToken: this.accessToken,
        secret: this.secret,
        nonce: this.nonce,
        pendingToken: this.pendingToken,
        providerId: this.providerId,
        signInMethod: this.signInMethod,
      };
    }
    static fromJSON(t) {
      let n = typeof t == `string` ? JSON.parse(t) : t,
        { providerId: r, signInMethod: i } = n,
        a = h(n, Gf);
      if (!r || !i) return null;
      let o = new e(r, i);
      return (
        (o.idToken = a.idToken || void 0),
        (o.accessToken = a.accessToken || void 0),
        (o.secret = a.secret),
        (o.nonce = a.nonce),
        (o.pendingToken = a.pendingToken || null),
        o
      );
    }
    _getIdTokenResponse(e) {
      return fh(e, this.buildRequest());
    }
    _linkToIdToken(e, t) {
      let n = this.buildRequest();
      return ((n.idToken = t), fh(e, n));
    }
    _getReauthenticationResolver(e) {
      let t = this.buildRequest();
      return ((t.autoCreate = !1), fh(e, t));
    }
    buildRequest() {
      let e = { requestUri: mh, returnSecureToken: !0 };
      if (this.pendingToken) e.pendingToken = this.pendingToken;
      else {
        let t = {};
        (this.idToken && (t.id_token = this.idToken),
          this.accessToken && (t.access_token = this.accessToken),
          this.secret && (t.oauth_token_secret = this.secret),
          (t.providerId = this.providerId),
          this.nonce && !this.pendingToken && (t.nonce = this.nonce),
          (e.postBody = Ne(t)));
      }
      return e;
    }
  };
function gh(e, t) {
  return _h.apply(this, arguments);
}
function _h() {
  return (
    (_h = p(function* (e, t) {
      return $(e, `POST`, `/v1/accounts:sendVerificationCode`, Q(e, t));
    })),
    _h.apply(this, arguments)
  );
}
function vh(e, t) {
  return yh.apply(this, arguments);
}
function yh() {
  return (
    (yh = p(function* (e, t) {
      return bp(e, `POST`, `/v1/accounts:signInWithPhoneNumber`, Q(e, t));
    })),
    yh.apply(this, arguments)
  );
}
function bh(e, t) {
  return xh.apply(this, arguments);
}
function xh() {
  return (
    (xh = p(function* (e, t) {
      let n = yield bp(
        e,
        `POST`,
        `/v1/accounts:signInWithPhoneNumber`,
        Q(e, t),
      );
      if (n.temporaryProof)
        throw Ep(e, `account-exists-with-different-credential`, n);
      return n;
    })),
    xh.apply(this, arguments)
  );
}
var Sh = { USER_NOT_FOUND: `user-not-found` };
function Ch(e, t) {
  return wh.apply(this, arguments);
}
function wh() {
  return (
    (wh = p(function* (e, t) {
      return bp(
        e,
        `POST`,
        `/v1/accounts:signInWithPhoneNumber`,
        Q(e, u(u({}, t), {}, { operation: `REAUTH` })),
        Sh,
      );
    })),
    wh.apply(this, arguments)
  );
}
var Th = class e extends nh {
  constructor(e) {
    (super(`phone`, `phone`), (this.params = e));
  }
  static _fromVerification(t, n) {
    return new e({ verificationId: t, verificationCode: n });
  }
  static _fromTokenResponse(t, n) {
    return new e({ phoneNumber: t, temporaryProof: n });
  }
  _getIdTokenResponse(e) {
    return vh(e, this._makeVerificationRequest());
  }
  _linkToIdToken(e, t) {
    return bh(e, u({ idToken: t }, this._makeVerificationRequest()));
  }
  _getReauthenticationResolver(e) {
    return Ch(e, this._makeVerificationRequest());
  }
  _makeVerificationRequest() {
    let {
      temporaryProof: e,
      phoneNumber: t,
      verificationId: n,
      verificationCode: r,
    } = this.params;
    return e && t
      ? { temporaryProof: e, phoneNumber: t }
      : { sessionInfo: n, code: r };
  }
  toJSON() {
    let e = { providerId: this.providerId };
    return (
      this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber),
      this.params.temporaryProof &&
        (e.temporaryProof = this.params.temporaryProof),
      this.params.verificationCode &&
        (e.verificationCode = this.params.verificationCode),
      this.params.verificationId &&
        (e.verificationId = this.params.verificationId),
      e
    );
  }
  static fromJSON(t) {
    typeof t == `string` && (t = JSON.parse(t));
    let {
      verificationId: n,
      verificationCode: r,
      phoneNumber: i,
      temporaryProof: a,
    } = t;
    return !r && !n && !i && !a
      ? null
      : new e({
          verificationId: n,
          verificationCode: r,
          phoneNumber: i,
          temporaryProof: a,
        });
  }
};
function Eh(e) {
  switch (e) {
    case `recoverEmail`:
      return `RECOVER_EMAIL`;
    case `resetPassword`:
      return `PASSWORD_RESET`;
    case `signIn`:
      return `EMAIL_SIGNIN`;
    case `verifyEmail`:
      return `VERIFY_EMAIL`;
    case `verifyAndChangeEmail`:
      return `VERIFY_AND_CHANGE_EMAIL`;
    case `revertSecondFactorAddition`:
      return `REVERT_SECOND_FACTOR_ADDITION`;
    default:
      return null;
  }
}
function Dh(e) {
  let t = Pe(Fe(e)).link,
    n = t ? Pe(Fe(t)).deep_link_id : null,
    r = Pe(Fe(e)).deep_link_id;
  return (r ? Pe(Fe(r)).link : null) || r || n || t || e;
}
var Oh = class e {
    constructor(e) {
      var t, n, r, i, a, o;
      let s = Pe(Fe(e)),
        c = (t = s.apiKey) == null ? null : t,
        l = (n = s.oobCode) == null ? null : n,
        u = Eh((r = s.mode) == null ? null : r);
      (Z(c && l && u, `argument-error`),
        (this.apiKey = c),
        (this.operation = u),
        (this.code = l),
        (this.continueUrl = (i = s.continueUrl) == null ? null : i),
        (this.languageCode = (a = s.lang) == null ? null : a),
        (this.tenantId = (o = s.tenantId) == null ? null : o));
    }
    static parseLink(t) {
      let n = Dh(t);
      try {
        return new e(n);
      } catch (e) {
        return null;
      }
    }
  },
  kh = class e {
    constructor() {
      this.providerId = e.PROVIDER_ID;
    }
    static credential(e, t) {
      return dh._fromEmailAndPassword(e, t);
    }
    static credentialWithLink(e, t) {
      let n = Oh.parseLink(t);
      return (
        Z(n, `argument-error`),
        dh._fromEmailAndCode(e, n.code, n.tenantId)
      );
    }
  };
((kh.PROVIDER_ID = `password`),
  (kh.EMAIL_PASSWORD_SIGN_IN_METHOD = `password`),
  (kh.EMAIL_LINK_SIGN_IN_METHOD = `emailLink`));
var Ah = class {
    constructor(e) {
      ((this.providerId = e),
        (this.defaultLanguageCode = null),
        (this.customParameters = {}));
    }
    setDefaultLanguage(e) {
      this.defaultLanguageCode = e;
    }
    setCustomParameters(e) {
      return ((this.customParameters = e), this);
    }
    getCustomParameters() {
      return this.customParameters;
    }
  },
  jh = class extends Ah {
    constructor() {
      (super(...arguments), (this.scopes = []));
    }
    addScope(e) {
      return (this.scopes.includes(e) || this.scopes.push(e), this);
    }
    getScopes() {
      return [...this.scopes];
    }
  },
  Mh = class e extends jh {
    constructor() {
      super(`facebook.com`);
    }
    static credential(t) {
      return hh._fromParams({
        providerId: e.PROVIDER_ID,
        signInMethod: e.FACEBOOK_SIGN_IN_METHOD,
        accessToken: t,
      });
    }
    static credentialFromResult(t) {
      return e.credentialFromTaggedObject(t);
    }
    static credentialFromError(t) {
      return e.credentialFromTaggedObject(t.customData || {});
    }
    static credentialFromTaggedObject({ _tokenResponse: t }) {
      if (!t || !(`oauthAccessToken` in t) || !t.oauthAccessToken) return null;
      try {
        return e.credential(t.oauthAccessToken);
      } catch (e) {
        return null;
      }
    }
  };
((Mh.FACEBOOK_SIGN_IN_METHOD = `facebook.com`),
  (Mh.PROVIDER_ID = `facebook.com`));
var Nh = class e extends jh {
  constructor() {
    (super(`google.com`), this.addScope(`profile`));
  }
  static credential(t, n) {
    return hh._fromParams({
      providerId: e.PROVIDER_ID,
      signInMethod: e.GOOGLE_SIGN_IN_METHOD,
      idToken: t,
      accessToken: n,
    });
  }
  static credentialFromResult(t) {
    return e.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return e.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    let { oauthIdToken: n, oauthAccessToken: r } = t;
    if (!n && !r) return null;
    try {
      return e.credential(n, r);
    } catch (e) {
      return null;
    }
  }
};
((Nh.GOOGLE_SIGN_IN_METHOD = `google.com`), (Nh.PROVIDER_ID = `google.com`));
var Ph = class e extends jh {
  constructor() {
    super(`github.com`);
  }
  static credential(t) {
    return hh._fromParams({
      providerId: e.PROVIDER_ID,
      signInMethod: e.GITHUB_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return e.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return e.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !(`oauthAccessToken` in t) || !t.oauthAccessToken) return null;
    try {
      return e.credential(t.oauthAccessToken);
    } catch (e) {
      return null;
    }
  }
};
((Ph.GITHUB_SIGN_IN_METHOD = `github.com`), (Ph.PROVIDER_ID = `github.com`));
var Fh = class e extends jh {
  constructor() {
    super(`twitter.com`);
  }
  static credential(t, n) {
    return hh._fromParams({
      providerId: e.PROVIDER_ID,
      signInMethod: e.TWITTER_SIGN_IN_METHOD,
      oauthToken: t,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(t) {
    return e.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return e.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    let { oauthAccessToken: n, oauthTokenSecret: r } = t;
    if (!n || !r) return null;
    try {
      return e.credential(n, r);
    } catch (e) {
      return null;
    }
  }
};
((Fh.TWITTER_SIGN_IN_METHOD = `twitter.com`), (Fh.PROVIDER_ID = `twitter.com`));
var Ih = class e {
  constructor(e) {
    ((this.user = e.user),
      (this.providerId = e.providerId),
      (this._tokenResponse = e._tokenResponse),
      (this.operationType = e.operationType));
  }
  static _fromIdTokenResponse(t, n, r, i = !1) {
    return p(function* () {
      return new e({
        user: yield im._fromIdTokenResponse(t, r, i),
        providerId: Lh(r),
        _tokenResponse: r,
        operationType: n,
      });
    })();
  }
  static _forOperation(t, n, r) {
    return p(function* () {
      return (
        yield t._updateTokensIfNecessary(r, !0),
        new e({
          user: t,
          providerId: Lh(r),
          _tokenResponse: r,
          operationType: n,
        })
      );
    })();
  }
};
function Lh(e) {
  return e.providerId ? e.providerId : `phoneNumber` in e ? `phone` : null;
}
var Rh = class e extends Ee {
  constructor(t, n, r, i) {
    var a;
    (super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, e.prototype),
      (this.customData = {
        appName: t.name,
        tenantId: (a = t.tenantId) == null ? void 0 : a,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      }));
  }
  static _fromErrorAndOperation(t, n, r, i) {
    return new e(t, n, r, i);
  }
};
function zh(e, t, n, r) {
  return (
    t === `reauthenticate`
      ? n._getReauthenticationResolver(e)
      : n._getIdTokenResponse(e)
  ).catch((n) => {
    throw n.code === `auth/multi-factor-auth-required`
      ? Rh._fromErrorAndOperation(e, n, t, r)
      : n;
  });
}
function Bh(e, t) {
  return Vh.apply(this, arguments);
}
function Vh() {
  return (
    (Vh = p(function* (e, t, n = !1) {
      let r = yield Vp(e, t._linkToIdToken(e.auth, yield e.getIdToken()), n);
      return Ih._forOperation(e, `link`, r);
    })),
    Vh.apply(this, arguments)
  );
}
function Hh(e, t) {
  return Uh.apply(this, arguments);
}
function Uh() {
  return (
    (Uh = p(function* (e, t, n = !1) {
      let { auth: r } = e;
      if (sn(r.app)) return Promise.reject(tp(r));
      let i = `reauthenticate`;
      try {
        let a = yield Vp(e, zh(r, i, t, e), n);
        Z(a.idToken, r, `internal-error`);
        let o = zp(a.idToken);
        Z(o, r, `internal-error`);
        let { sub: s } = o;
        return (Z(e.uid === s, r, `user-mismatch`), Ih._forOperation(e, i, a));
      } catch (e) {
        throw (
          (e == null ? void 0 : e.code) === `auth/user-not-found` &&
            Qf(r, `user-mismatch`),
          e
        );
      }
    })),
    Uh.apply(this, arguments)
  );
}
function Wh(e, t) {
  return Gh.apply(this, arguments);
}
function Gh() {
  return (
    (Gh = p(function* (e, t, n = !1) {
      if (sn(e.app)) return Promise.reject(tp(e));
      let r = `signIn`,
        i = yield zh(e, r, t),
        a = yield Ih._fromIdTokenResponse(e, r, i);
      return (n || (yield e._updateCurrentUser(a.user)), a);
    })),
    Gh.apply(this, arguments)
  );
}
function Kh(e, t) {
  return S(e).setPersistence(t);
}
function qh(e, t, n, r) {
  return S(e).onIdTokenChanged(t, n, r);
}
function Jh(e, t, n) {
  return S(e).beforeAuthStateChanged(t, n);
}
function Yh(e, t, n, r) {
  return S(e).onAuthStateChanged(t, n, r);
}
function Xh(e) {
  return S(e).signOut();
}
function Zh(e, t) {
  return $(e, `POST`, `/v2/accounts/mfaEnrollment:start`, Q(e, t));
}
function Qh(e, t) {
  return $(e, `POST`, `/v2/accounts/mfaEnrollment:finalize`, Q(e, t));
}
function $h(e, t) {
  return $(e, `POST`, `/v2/accounts/mfaEnrollment:start`, Q(e, t));
}
function eg(e, t) {
  return $(e, `POST`, `/v2/accounts/mfaEnrollment:finalize`, Q(e, t));
}
var tg = `__sak`,
  ng = class {
    constructor(e, t) {
      ((this.storageRetriever = e), (this.type = t));
    }
    _isAvailable() {
      try {
        return this.storage
          ? (this.storage.setItem(tg, `1`),
            this.storage.removeItem(tg),
            Promise.resolve(!0))
          : Promise.resolve(!1);
      } catch (e) {
        return Promise.resolve(!1);
      }
    }
    _set(e, t) {
      return (this.storage.setItem(e, JSON.stringify(t)), Promise.resolve());
    }
    _get(e) {
      let t = this.storage.getItem(e);
      return Promise.resolve(t ? JSON.parse(t) : null);
    }
    _remove(e) {
      return (this.storage.removeItem(e), Promise.resolve());
    }
    get storage() {
      return this.storageRetriever();
    }
  },
  rg = 1e3,
  ig = 10,
  ag = class extends ng {
    constructor() {
      (super(() => window.localStorage, `LOCAL`),
        (this.boundEventHandler = (e, t) => this.onStorageEvent(e, t)),
        (this.listeners = {}),
        (this.localCache = {}),
        (this.pollTimer = null),
        (this.fallbackToPolling = Sm()),
        (this._shouldAllowMigration = !0));
    }
    forAllChangedKeys(e) {
      for (let t of Object.keys(this.listeners)) {
        let n = this.storage.getItem(t),
          r = this.localCache[t];
        n !== r && e(t, r, n);
      }
    }
    onStorageEvent(e, t = !1) {
      if (!e.key) {
        this.forAllChangedKeys((e, t, n) => {
          this.notifyListeners(e, n);
        });
        return;
      }
      let n = e.key;
      t ? this.detachListener() : this.stopPolling();
      let r = () => {
          let e = this.storage.getItem(n);
          (!t && this.localCache[n] === e) || this.notifyListeners(n, e);
        },
        i = this.storage.getItem(n);
      xm() && i !== e.newValue && e.newValue !== e.oldValue
        ? setTimeout(r, ig)
        : r();
    }
    notifyListeners(e, t) {
      this.localCache[e] = t;
      let n = this.listeners[e];
      if (n) for (let e of Array.from(n)) e(t && JSON.parse(t));
    }
    startPolling() {
      (this.stopPolling(),
        (this.pollTimer = setInterval(() => {
          this.forAllChangedKeys((e, t, n) => {
            this.onStorageEvent(
              new StorageEvent(`storage`, { key: e, oldValue: t, newValue: n }),
              !0,
            );
          });
        }, rg)));
    }
    stopPolling() {
      this.pollTimer &&
        (clearInterval(this.pollTimer), (this.pollTimer = null));
    }
    attachListener() {
      window.addEventListener(`storage`, this.boundEventHandler);
    }
    detachListener() {
      window.removeEventListener(`storage`, this.boundEventHandler);
    }
    _addListener(e, t) {
      (Object.keys(this.listeners).length === 0 &&
        (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
        this.listeners[e] ||
          ((this.listeners[e] = new Set()),
          (this.localCache[e] = this.storage.getItem(e))),
        this.listeners[e].add(t));
    }
    _removeListener(e, t) {
      (this.listeners[e] &&
        (this.listeners[e].delete(t),
        this.listeners[e].size === 0 && delete this.listeners[e]),
        Object.keys(this.listeners).length === 0 &&
          (this.detachListener(), this.stopPolling()));
    }
    _set(e, t) {
      var n = () => super._set,
        r = this;
      return p(function* () {
        (yield n().call(r, e, t), (r.localCache[e] = JSON.stringify(t)));
      })();
    }
    _get(e) {
      var t = () => super._get,
        n = this;
      return p(function* () {
        let r = yield t().call(n, e);
        return ((n.localCache[e] = JSON.stringify(r)), r);
      })();
    }
    _remove(e) {
      var t = () => super._remove,
        n = this;
      return p(function* () {
        (yield t().call(n, e), delete n.localCache[e]);
      })();
    }
  };
ag.type = `LOCAL`;
var og = ag,
  sg = 1e3;
function cg(e) {
  var t, n;
  let r = e.replace(/[\\^$.*+?()[\]{}|]/g, `\\$&`),
    i = RegExp(`${r}=([^;]+)`);
  return (t = (n = document.cookie.match(i)) == null ? void 0 : n[1]) == null
    ? null
    : t;
}
function lg(e) {
  return `${window.location.protocol === `http:` ? `__dev_` : `__HOST-`}FIREBASE_${e.split(`:`)[3]}`;
}
var ug = class {
  constructor() {
    ((this.type = `COOKIE`), (this.listenerUnsubscribes = new Map()));
  }
  _getFinalTarget(e) {
    let t = new URL(`${window.location.origin}/__cookies__`);
    return (t.searchParams.set(`finalTarget`, e), t);
  }
  _isAvailable() {
    return p(function* () {
      var e;
      return (typeof isSecureContext == `boolean` && !isSecureContext) ||
        typeof navigator > `u` ||
        typeof document > `u`
        ? !1
        : (e = navigator.cookieEnabled) == null
          ? !0
          : e;
    })();
  }
  _set(e, t) {
    return p(function* () {})();
  }
  _get(e) {
    var t = this;
    return p(function* () {
      if (!t._isAvailable()) return null;
      let n = lg(e);
      if (window.cookieStore) {
        let e = yield window.cookieStore.get(n);
        return e == null ? void 0 : e.value;
      }
      return cg(n);
    })();
  }
  _remove(e) {
    var t = this;
    return p(function* () {
      if (!t._isAvailable() || !(yield t._get(e))) return;
      let n = lg(e);
      ((document.cookie = `${n}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`),
        yield fetch(`/__cookies__`, { method: `DELETE` }).catch(() => void 0));
    })();
  }
  _addListener(e, t) {
    if (!this._isAvailable()) return;
    let n = lg(e);
    if (window.cookieStore) {
      let e = (e) => {
        let r = e.changed.find((e) => e.name === n);
        (r && t(r.value), e.deleted.find((e) => e.name === n) && t(null));
      };
      return (
        this.listenerUnsubscribes.set(t, () =>
          window.cookieStore.removeEventListener(`change`, e),
        ),
        window.cookieStore.addEventListener(`change`, e)
      );
    }
    let r = cg(n),
      i = setInterval(() => {
        let e = cg(n);
        e !== r && (t(e), (r = e));
      }, sg);
    this.listenerUnsubscribes.set(t, () => clearInterval(i));
  }
  _removeListener(e, t) {
    let n = this.listenerUnsubscribes.get(t);
    n && (n(), this.listenerUnsubscribes.delete(t));
  }
};
ug.type = `COOKIE`;
var dg = class extends ng {
  constructor() {
    super(() => window.sessionStorage, `SESSION`);
  }
  _addListener(e, t) {}
  _removeListener(e, t) {}
};
dg.type = `SESSION`;
var fg = dg;
function pg(e) {
  return Promise.all(
    e.map(
      (function () {
        var e = p(function* (e) {
          try {
            return { fulfilled: !0, value: yield e };
          } catch (e) {
            return { fulfilled: !1, reason: e };
          }
        });
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
    ),
  );
}
var mg = class e {
  constructor(e) {
    ((this.eventTarget = e),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this)));
  }
  static _getInstance(t) {
    let n = this.receivers.find((e) => e.isListeningto(t));
    if (n) return n;
    let r = new e(t);
    return (this.receivers.push(r), r);
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  handleEvent(e) {
    var t = this;
    return p(function* () {
      let n = e,
        { eventId: r, eventType: i, data: a } = n.data,
        o = t.handlersMap[i];
      if (!(o != null && o.size)) return;
      n.ports[0].postMessage({ status: `ack`, eventId: r, eventType: i });
      let s = yield pg(
        Array.from(o).map(
          (function () {
            var e = p(function* (e) {
              return e(n.origin, a);
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
      );
      n.ports[0].postMessage({
        status: `done`,
        eventId: r,
        eventType: i,
        response: s,
      });
    })();
  }
  _subscribe(e, t) {
    (Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener(`message`, this.boundEventHandler),
      this.handlersMap[e] || (this.handlersMap[e] = new Set()),
      this.handlersMap[e].add(t));
  }
  _unsubscribe(e, t) {
    (this.handlersMap[e] && t && this.handlersMap[e].delete(t),
      (!t || this.handlersMap[e].size === 0) && delete this.handlersMap[e],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener(
          `message`,
          this.boundEventHandler,
        ));
  }
};
mg.receivers = [];
function hg(e = ``, t = 10) {
  let n = ``;
  for (let e = 0; e < t; e++) n += Math.floor(Math.random() * 10);
  return e + n;
}
var gg = class {
  constructor(e) {
    ((this.target = e), (this.handlers = new Set()));
  }
  removeMessageHandler(e) {
    (e.messageChannel &&
      (e.messageChannel.port1.removeEventListener(`message`, e.onMessage),
      e.messageChannel.port1.close()),
      this.handlers.delete(e));
  }
  _send(e, t, n = 50) {
    var r = this;
    return p(function* () {
      let i = typeof MessageChannel < `u` ? new MessageChannel() : null;
      if (!i) throw Error(`connection_unavailable`);
      let a, o;
      return new Promise((s, c) => {
        let l = hg(``, 20);
        i.port1.start();
        let u = setTimeout(() => {
          c(Error(`unsupported_event`));
        }, n);
        ((o = {
          messageChannel: i,
          onMessage(e) {
            let t = e;
            if (t.data.eventId === l)
              switch (t.data.status) {
                case `ack`:
                  (clearTimeout(u),
                    (a = setTimeout(() => {
                      c(Error(`timeout`));
                    }, 3e3)));
                  break;
                case `done`:
                  (clearTimeout(a), s(t.data.response));
                  break;
                default:
                  (clearTimeout(u),
                    clearTimeout(a),
                    c(Error(`invalid_response`)));
                  break;
              }
          },
        }),
          r.handlers.add(o),
          i.port1.addEventListener(`message`, o.onMessage),
          r.target.postMessage({ eventType: e, eventId: l, data: t }, [
            i.port2,
          ]));
      }).finally(() => {
        o && r.removeMessageHandler(o);
      });
    })();
  }
};
function _g() {
  return window;
}
function vg(e) {
  _g().location.href = e;
}
function yg() {
  return (
    _g().WorkerGlobalScope !== void 0 && typeof _g().importScripts == `function`
  );
}
function bg() {
  return xg.apply(this, arguments);
}
function xg() {
  return (
    (xg = p(function* () {
      var e;
      if (!((e = navigator) != null && e.serviceWorker)) return null;
      try {
        return (yield navigator.serviceWorker.ready).active;
      } catch (e) {
        return null;
      }
    })),
    xg.apply(this, arguments)
  );
}
function Sg() {
  var e;
  return (
    ((e = navigator) == null || (e = e.serviceWorker) == null
      ? void 0
      : e.controller) || null
  );
}
function Cg() {
  return yg() ? self : null;
}
var wg = `firebaseLocalStorageDb`,
  Tg = 1,
  Eg = `firebaseLocalStorage`,
  Dg = `fbase_key`,
  Og = class {
    constructor(e) {
      this.request = e;
    }
    toPromise() {
      return new Promise((e, t) => {
        (this.request.addEventListener(`success`, () => {
          e(this.request.result);
        }),
          this.request.addEventListener(`error`, () => {
            t(this.request.error);
          }));
      });
    }
  };
function kg(e, t) {
  return e.transaction([Eg], t ? `readwrite` : `readonly`).objectStore(Eg);
}
function Ag() {
  return new Og(indexedDB.deleteDatabase(wg)).toPromise();
}
function jg() {
  let e = indexedDB.open(wg, Tg);
  return new Promise((t, n) => {
    (e.addEventListener(`error`, () => {
      n(e.error);
    }),
      e.addEventListener(`upgradeneeded`, () => {
        let t = e.result;
        try {
          t.createObjectStore(Eg, { keyPath: Dg });
        } catch (e) {
          n(e);
        }
      }),
      e.addEventListener(
        `success`,
        p(function* () {
          let n = e.result;
          n.objectStoreNames.contains(Eg)
            ? t(n)
            : (n.close(), yield Ag(), t(yield jg()));
        }),
      ));
  });
}
function Mg(e, t, n) {
  return Ng.apply(this, arguments);
}
function Ng() {
  return (
    (Ng = p(function* (e, t, n) {
      return new Og(kg(e, !0).put({ [Dg]: t, value: n })).toPromise();
    })),
    Ng.apply(this, arguments)
  );
}
function Pg(e, t) {
  return Fg.apply(this, arguments);
}
function Fg() {
  return (
    (Fg = p(function* (e, t) {
      let n = yield new Og(kg(e, !1).get(t)).toPromise();
      return n === void 0 ? null : n.value;
    })),
    Fg.apply(this, arguments)
  );
}
function Ig(e, t) {
  return new Og(kg(e, !0).delete(t)).toPromise();
}
var Lg = 800,
  Rg = 3,
  zg = class {
    constructor() {
      ((this.type = `LOCAL`),
        (this._shouldAllowMigration = !0),
        (this.listeners = {}),
        (this.localCache = {}),
        (this.pollTimer = null),
        (this.pendingWrites = 0),
        (this.receiver = null),
        (this.sender = null),
        (this.serviceWorkerReceiverAvailable = !1),
        (this.activeServiceWorker = null),
        (this._workerInitializationPromise =
          this.initializeServiceWorkerMessaging().then(
            () => {},
            () => {},
          )));
    }
    _openDb() {
      var e = this;
      return p(function* () {
        return (e.db || (e.db = yield jg()), e.db);
      })();
    }
    _withRetries(e) {
      var t = this;
      return p(function* () {
        let n = 0;
        for (;;)
          try {
            return yield e(yield t._openDb());
          } catch (e) {
            if (n++ > Rg) throw e;
            t.db && (t.db.close(), (t.db = void 0));
          }
      })();
    }
    initializeServiceWorkerMessaging() {
      var e = this;
      return p(function* () {
        return yg() ? e.initializeReceiver() : e.initializeSender();
      })();
    }
    initializeReceiver() {
      var e = this;
      return p(function* () {
        ((e.receiver = mg._getInstance(Cg())),
          e.receiver._subscribe(
            `keyChanged`,
            (function () {
              var t = p(function* (t, n) {
                return { keyProcessed: (yield e._poll()).includes(n.key) };
              });
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })(),
          ),
          e.receiver._subscribe(
            `ping`,
            (function () {
              var e = p(function* (e, t) {
                return [`keyChanged`];
              });
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
          ));
      })();
    }
    initializeSender() {
      var e = this;
      return p(function* () {
        var t, n;
        if (((e.activeServiceWorker = yield bg()), !e.activeServiceWorker))
          return;
        e.sender = new gg(e.activeServiceWorker);
        let r = yield e.sender._send(`ping`, {}, 800);
        r &&
          (t = r[0]) != null &&
          t.fulfilled &&
          (n = r[0]) != null &&
          n.value.includes(`keyChanged`) &&
          (e.serviceWorkerReceiverAvailable = !0);
      })();
    }
    notifyServiceWorker(e) {
      var t = this;
      return p(function* () {
        if (!(
          !t.sender ||
          !t.activeServiceWorker ||
          Sg() !== t.activeServiceWorker
        ))
          try {
            yield t.sender._send(
              `keyChanged`,
              { key: e },
              t.serviceWorkerReceiverAvailable ? 800 : 50,
            );
          } catch (e) {}
      })();
    }
    _isAvailable() {
      return p(function* () {
        try {
          if (!indexedDB) return !1;
          let e = yield jg();
          return (yield Mg(e, tg, `1`), yield Ig(e, tg), !0);
        } catch (e) {}
        return !1;
      })();
    }
    _withPendingWrite(e) {
      var t = this;
      return p(function* () {
        t.pendingWrites++;
        try {
          yield e();
        } finally {
          t.pendingWrites--;
        }
      })();
    }
    _set(e, t) {
      var n = this;
      return p(function* () {
        return n._withPendingWrite(
          p(function* () {
            return (
              yield n._withRetries((n) => Mg(n, e, t)),
              (n.localCache[e] = t),
              n.notifyServiceWorker(e)
            );
          }),
        );
      })();
    }
    _get(e) {
      var t = this;
      return p(function* () {
        let n = yield t._withRetries((t) => Pg(t, e));
        return ((t.localCache[e] = n), n);
      })();
    }
    _remove(e) {
      var t = this;
      return p(function* () {
        return t._withPendingWrite(
          p(function* () {
            return (
              yield t._withRetries((t) => Ig(t, e)),
              delete t.localCache[e],
              t.notifyServiceWorker(e)
            );
          }),
        );
      })();
    }
    _poll() {
      var e = this;
      return p(function* () {
        let t = yield e._withRetries((e) =>
          new Og(kg(e, !1).getAll()).toPromise(),
        );
        if (!t || e.pendingWrites !== 0) return [];
        let n = [],
          r = new Set();
        if (t.length !== 0)
          for (let { fbase_key: i, value: a } of t)
            (r.add(i),
              JSON.stringify(e.localCache[i]) !== JSON.stringify(a) &&
                (e.notifyListeners(i, a), n.push(i)));
        for (let t of Object.keys(e.localCache))
          e.localCache[t] &&
            !r.has(t) &&
            (e.notifyListeners(t, null), n.push(t));
        return n;
      })();
    }
    notifyListeners(e, t) {
      this.localCache[e] = t;
      let n = this.listeners[e];
      if (n) for (let e of Array.from(n)) e(t);
    }
    startPolling() {
      var e = this;
      (this.stopPolling(),
        (this.pollTimer = setInterval(
          p(function* () {
            return e._poll();
          }),
          Lg,
        )));
    }
    stopPolling() {
      this.pollTimer &&
        (clearInterval(this.pollTimer), (this.pollTimer = null));
    }
    _addListener(e, t) {
      (Object.keys(this.listeners).length === 0 && this.startPolling(),
        this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
        this.listeners[e].add(t));
    }
    _removeListener(e, t) {
      (this.listeners[e] &&
        (this.listeners[e].delete(t),
        this.listeners[e].size === 0 && delete this.listeners[e]),
        Object.keys(this.listeners).length === 0 && this.stopPolling());
    }
  };
zg.type = `LOCAL`;
var Bg = zg;
function Vg(e, t) {
  return $(e, `POST`, `/v2/accounts/mfaSignIn:start`, Q(e, t));
}
function Hg(e, t) {
  return $(e, `POST`, `/v2/accounts/mfaSignIn:finalize`, Q(e, t));
}
function Ug(e, t) {
  return $(e, `POST`, `/v2/accounts/mfaSignIn:finalize`, Q(e, t));
}
(Lm(`rcb`), new dp(3e4, 6e4));
var Wg = `recaptcha`;
function Gg(e, t, n) {
  return Kg.apply(this, arguments);
}
function Kg() {
  return (
    (Kg = p(function* (e, t, n) {
      if (!e._getRecaptchaConfig())
        try {
          yield qm(e);
        } catch (e) {
          console.log(
            `Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.`,
          );
        }
      try {
        let i;
        if (
          ((i = typeof t == `string` ? { phoneNumber: t } : t), `session` in i)
        ) {
          let t = i.session;
          if (`phoneNumber` in i)
            return (
              Z(t.type === `enroll`, e, `internal-error`),
              (yield Gm(
                e,
                {
                  idToken: t.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: i.phoneNumber,
                    clientType: `CLIENT_TYPE_WEB`,
                  },
                },
                `mfaSmsEnrollment`,
                (function () {
                  var e = p(function* (e, t) {
                    return t.phoneEnrollmentInfo.captchaResponse === Vm
                      ? (Z(
                          (n == null ? void 0 : n.type) === Wg,
                          e,
                          `argument-error`,
                        ),
                        Zh(e, yield qg(e, t, n)))
                      : Zh(e, t);
                  });
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
                `PHONE_PROVIDER`,
              ).catch((e) => Promise.reject(e))).phoneSessionInfo.sessionInfo
            );
          {
            var r;
            Z(t.type === `signin`, e, `internal-error`);
            let a =
              ((r = i.multiFactorHint) == null ? void 0 : r.uid) ||
              i.multiFactorUid;
            return (
              Z(a, e, `missing-multi-factor-info`),
              (yield Gm(
                e,
                {
                  mfaPendingCredential: t.credential,
                  mfaEnrollmentId: a,
                  phoneSignInInfo: { clientType: `CLIENT_TYPE_WEB` },
                },
                `mfaSmsSignIn`,
                (function () {
                  var e = p(function* (e, t) {
                    return t.phoneSignInInfo.captchaResponse === Vm
                      ? (Z(
                          (n == null ? void 0 : n.type) === Wg,
                          e,
                          `argument-error`,
                        ),
                        Vg(e, yield qg(e, t, n)))
                      : Vg(e, t);
                  });
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
                `PHONE_PROVIDER`,
              ).catch((e) => Promise.reject(e))).phoneResponseInfo.sessionInfo
            );
          }
        } else
          return (yield Gm(
            e,
            { phoneNumber: i.phoneNumber, clientType: `CLIENT_TYPE_WEB` },
            `sendVerificationCode`,
            (function () {
              var e = p(function* (e, t) {
                return t.captchaResponse === Vm
                  ? (Z(
                      (n == null ? void 0 : n.type) === Wg,
                      e,
                      `argument-error`,
                    ),
                    gh(e, yield qg(e, t, n)))
                  : gh(e, t);
              });
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
            `PHONE_PROVIDER`,
          ).catch((e) => Promise.reject(e))).sessionInfo;
      } finally {
        n == null || n._reset();
      }
    })),
    Kg.apply(this, arguments)
  );
}
function qg(e, t, n) {
  return Jg.apply(this, arguments);
}
function Jg() {
  return (
    (Jg = p(function* (e, t, n) {
      Z(n.type === Wg, e, `argument-error`);
      let r = yield n.verify();
      Z(typeof r == `string`, e, `argument-error`);
      let i = u({}, t);
      if (`phoneEnrollmentInfo` in i) {
        let e = i.phoneEnrollmentInfo.phoneNumber,
          t = i.phoneEnrollmentInfo.captchaResponse,
          n = i.phoneEnrollmentInfo.clientType,
          a = i.phoneEnrollmentInfo.recaptchaVersion;
        return (
          Object.assign(i, {
            phoneEnrollmentInfo: {
              phoneNumber: e,
              recaptchaToken: r,
              captchaResponse: t,
              clientType: n,
              recaptchaVersion: a,
            },
          }),
          i
        );
      } else if (`phoneSignInInfo` in i) {
        let e = i.phoneSignInInfo.captchaResponse,
          t = i.phoneSignInInfo.clientType,
          n = i.phoneSignInInfo.recaptchaVersion;
        return (
          Object.assign(i, {
            phoneSignInInfo: {
              recaptchaToken: r,
              captchaResponse: e,
              clientType: t,
              recaptchaVersion: n,
            },
          }),
          i
        );
      } else return (Object.assign(i, { recaptchaToken: r }), i);
    })),
    Jg.apply(this, arguments)
  );
}
var Yg = class e {
  constructor(t) {
    ((this.providerId = e.PROVIDER_ID), (this.auth = Am(t)));
  }
  verifyPhoneNumber(e, t) {
    return Gg(this.auth, e, S(t));
  }
  static credential(e, t) {
    return Th._fromVerification(e, t);
  }
  static credentialFromResult(t) {
    let n = t;
    return e.credentialFromTaggedObject(n);
  }
  static credentialFromError(t) {
    return e.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    let { phoneNumber: t, temporaryProof: n } = e;
    return t && n ? Th._fromTokenResponse(t, n) : null;
  }
};
((Yg.PROVIDER_ID = `phone`), (Yg.PHONE_SIGN_IN_METHOD = `phone`));
function Xg(e, t) {
  return t
    ? om(t)
    : (Z(e._popupRedirectResolver, e, `argument-error`),
      e._popupRedirectResolver);
}
var Zg = class extends nh {
  constructor(e) {
    (super(`custom`, `custom`), (this.params = e));
  }
  _getIdTokenResponse(e) {
    return fh(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, t) {
    return fh(e, this._buildIdpRequest(t));
  }
  _getReauthenticationResolver(e) {
    return fh(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    let t = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return (e && (t.idToken = e), t);
  }
};
function Qg(e) {
  return Wh(e.auth, new Zg(e), e.bypassAuthState);
}
function $g(e) {
  let { auth: t, user: n } = e;
  return (Z(n, t, `internal-error`), Hh(n, new Zg(e), e.bypassAuthState));
}
function e_(e) {
  return t_.apply(this, arguments);
}
function t_() {
  return (
    (t_ = p(function* (e) {
      let { auth: t, user: n } = e;
      return (Z(n, t, `internal-error`), Bh(n, new Zg(e), e.bypassAuthState));
    })),
    t_.apply(this, arguments)
  );
}
var n_ = class {
    constructor(e, t, n, r, i = !1) {
      ((this.auth = e),
        (this.resolver = n),
        (this.user = r),
        (this.bypassAuthState = i),
        (this.pendingPromise = null),
        (this.eventManager = null),
        (this.filter = Array.isArray(t) ? t : [t]));
    }
    execute() {
      var e = this;
      return new Promise(
        (function () {
          var t = p(function* (t, n) {
            e.pendingPromise = { resolve: t, reject: n };
            try {
              ((e.eventManager = yield e.resolver._initialize(e.auth)),
                yield e.onExecution(),
                e.eventManager.registerConsumer(e));
            } catch (t) {
              e.reject(t);
            }
          });
          return function (e, n) {
            return t.apply(this, arguments);
          };
        })(),
      );
    }
    onAuthEvent(e) {
      var t = this;
      return p(function* () {
        let {
          urlResponse: n,
          sessionId: r,
          postBody: i,
          tenantId: a,
          error: o,
          type: s,
        } = e;
        if (o) {
          t.reject(o);
          return;
        }
        let c = {
          auth: t.auth,
          requestUri: n,
          sessionId: r,
          tenantId: a || void 0,
          postBody: i || void 0,
          user: t.user,
          bypassAuthState: t.bypassAuthState,
        };
        try {
          t.resolve(yield t.getIdpTask(s)(c));
        } catch (e) {
          t.reject(e);
        }
      })();
    }
    onError(e) {
      this.reject(e);
    }
    getIdpTask(e) {
      switch (e) {
        case `signInViaPopup`:
        case `signInViaRedirect`:
          return Qg;
        case `linkViaPopup`:
        case `linkViaRedirect`:
          return e_;
        case `reauthViaPopup`:
        case `reauthViaRedirect`:
          return $g;
        default:
          Qf(this.auth, `internal-error`);
      }
    }
    resolve(e) {
      (ap(this.pendingPromise, `Pending promise was never set`),
        this.pendingPromise.resolve(e),
        this.unregisterAndCleanUp());
    }
    reject(e) {
      (ap(this.pendingPromise, `Pending promise was never set`),
        this.pendingPromise.reject(e),
        this.unregisterAndCleanUp());
    }
    unregisterAndCleanUp() {
      (this.eventManager && this.eventManager.unregisterConsumer(this),
        (this.pendingPromise = null),
        this.cleanUp());
    }
  },
  r_ = new dp(2e3, 1e4);
function i_(e, t, n) {
  return a_.apply(this, arguments);
}
function a_() {
  return (
    (a_ = p(function* (e, t, n) {
      if (sn(e.app))
        return Promise.reject(
          $f(e, `operation-not-supported-in-this-environment`),
        );
      let r = Am(e);
      return (
        np(e, t, Ah),
        new o_(r, `signInViaPopup`, t, Xg(r, n)).executeNotNull()
      );
    })),
    a_.apply(this, arguments)
  );
}
var o_ = class e extends n_ {
  constructor(t, n, r, i, a) {
    (super(t, n, i, a),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      e.currentPopupAction && e.currentPopupAction.cancel(),
      (e.currentPopupAction = this));
  }
  executeNotNull() {
    var e = this;
    return p(function* () {
      let t = yield e.execute();
      return (Z(t, e.auth, `internal-error`), t);
    })();
  }
  onExecution() {
    var e = this;
    return p(function* () {
      ap(e.filter.length === 1, `Popup operations only handle one event`);
      let t = hg();
      ((e.authWindow = yield e.resolver._openPopup(
        e.auth,
        e.provider,
        e.filter[0],
        t,
      )),
        (e.authWindow.associatedEvent = t),
        e.resolver._originValidation(e.auth).catch((t) => {
          e.reject(t);
        }),
        e.resolver._isIframeWebStorageSupported(e.auth, (t) => {
          t || e.reject($f(e.auth, `web-storage-unsupported`));
        }),
        e.pollUserCancellation());
    })();
  }
  get eventId() {
    var e;
    return ((e = this.authWindow) == null ? void 0 : e.associatedEvent) || null;
  }
  cancel() {
    this.reject($f(this.auth, `cancelled-popup-request`));
  }
  cleanUp() {
    (this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (e.currentPopupAction = null));
  }
  pollUserCancellation() {
    let e = () => {
      var t;
      if (
        !((t = this.authWindow) == null || (t = t.window) == null) &&
        t.closed
      ) {
        this.pollId = window.setTimeout(() => {
          ((this.pollId = null),
            this.reject($f(this.auth, `popup-closed-by-user`)));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(e, r_.get());
    };
    e();
  }
};
o_.currentPopupAction = null;
var s_ = `pendingRedirect`,
  c_ = new Map(),
  l_ = class extends n_ {
    constructor(e, t, n = !1) {
      (super(
        e,
        [
          `signInViaRedirect`,
          `linkViaRedirect`,
          `reauthViaRedirect`,
          `unknown`,
        ],
        t,
        void 0,
        n,
      ),
        (this.eventId = null));
    }
    execute() {
      var e = () => super.execute,
        t = this;
      return p(function* () {
        let n = c_.get(t.auth._key());
        if (!n) {
          try {
            let r = (yield u_(t.resolver, t.auth)) ? yield e().call(t) : null;
            n = () => Promise.resolve(r);
          } catch (e) {
            n = () => Promise.reject(e);
          }
          c_.set(t.auth._key(), n);
        }
        return (
          t.bypassAuthState ||
            c_.set(t.auth._key(), () => Promise.resolve(null)),
          n()
        );
      })();
    }
    onAuthEvent(e) {
      var t = () => super.onAuthEvent,
        n = this;
      return p(function* () {
        if (e.type === `signInViaRedirect`) return t().call(n, e);
        if (e.type === `unknown`) {
          n.resolve(null);
          return;
        }
        if (e.eventId) {
          let r = yield n.auth._redirectUserForId(e.eventId);
          if (r) return ((n.user = r), t().call(n, e));
          n.resolve(null);
        }
      })();
    }
    onExecution() {
      return p(function* () {})();
    }
    cleanUp() {}
  };
function u_(e, t) {
  return d_.apply(this, arguments);
}
function d_() {
  return (
    (d_ = p(function* (e, t) {
      let n = m_(t),
        r = p_(e);
      if (!(yield r._isAvailable())) return !1;
      let i = (yield r._get(n)) === `true`;
      return (yield r._remove(n), i);
    })),
    d_.apply(this, arguments)
  );
}
function f_(e, t) {
  c_.set(e._key(), t);
}
function p_(e) {
  return om(e._redirectPersistence);
}
function m_(e) {
  return lm(s_, e.config.apiKey, e.name);
}
function h_(e, t) {
  return g_.apply(this, arguments);
}
function g_() {
  return (
    (g_ = p(function* (e, t, n = !1) {
      if (sn(e.app)) return Promise.reject(tp(e));
      let r = Am(e),
        i = yield new l_(r, Xg(r, t), n).execute();
      return (
        i &&
          !n &&
          (delete i.user._redirectEventId,
          yield r._persistUserIfCurrent(i.user),
          yield r._setRedirectUser(null, t)),
        i
      );
    })),
    g_.apply(this, arguments)
  );
}
var __ = 600 * 1e3,
  v_ = class {
    constructor(e) {
      ((this.auth = e),
        (this.cachedEventUids = new Set()),
        (this.consumers = new Set()),
        (this.queuedRedirectEvent = null),
        (this.hasHandledPotentialRedirect = !1),
        (this.lastProcessedEventTime = Date.now()));
    }
    registerConsumer(e) {
      (this.consumers.add(e),
        this.queuedRedirectEvent &&
          this.isEventForConsumer(this.queuedRedirectEvent, e) &&
          (this.sendToConsumer(this.queuedRedirectEvent, e),
          this.saveEventToCache(this.queuedRedirectEvent),
          (this.queuedRedirectEvent = null)));
    }
    unregisterConsumer(e) {
      this.consumers.delete(e);
    }
    onEvent(e) {
      if (this.hasEventBeenHandled(e)) return !1;
      let t = !1;
      return (
        this.consumers.forEach((n) => {
          this.isEventForConsumer(e, n) &&
            ((t = !0), this.sendToConsumer(e, n), this.saveEventToCache(e));
        }),
        this.hasHandledPotentialRedirect || !x_(e)
          ? t
          : ((this.hasHandledPotentialRedirect = !0),
            t || ((this.queuedRedirectEvent = e), (t = !0)),
            t)
      );
    }
    sendToConsumer(e, t) {
      if (e.error && !b_(e)) {
        var n;
        let r =
          ((n = e.error.code) == null ? void 0 : n.split(`auth/`)[1]) ||
          `internal-error`;
        t.onError($f(this.auth, r));
      } else t.onAuthEvent(e);
    }
    isEventForConsumer(e, t) {
      let n = t.eventId === null || (!!e.eventId && e.eventId === t.eventId);
      return t.filter.includes(e.type) && n;
    }
    hasEventBeenHandled(e) {
      return (
        Date.now() - this.lastProcessedEventTime >= __ &&
          this.cachedEventUids.clear(),
        this.cachedEventUids.has(y_(e))
      );
    }
    saveEventToCache(e) {
      (this.cachedEventUids.add(y_(e)),
        (this.lastProcessedEventTime = Date.now()));
    }
  };
function y_(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId]
    .filter((e) => e)
    .join(`-`);
}
function b_({ type: e, error: t }) {
  return (
    e === `unknown` && (t == null ? void 0 : t.code) === `auth/no-auth-event`
  );
}
function x_(e) {
  switch (e.type) {
    case `signInViaRedirect`:
    case `linkViaRedirect`:
    case `reauthViaRedirect`:
      return !0;
    case `unknown`:
      return b_(e);
    default:
      return !1;
  }
}
function S_(e) {
  return C_.apply(this, arguments);
}
function C_() {
  return (
    (C_ = p(function* (e, t = {}) {
      return $(e, `GET`, `/v1/projects`, t);
    })),
    C_.apply(this, arguments)
  );
}
var w_ = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  T_ = /^https?/;
function E_(e) {
  return D_.apply(this, arguments);
}
function D_() {
  return (
    (D_ = p(function* (e) {
      if (e.config.emulator) return;
      let { authorizedDomains: t } = yield S_(e);
      for (let e of t)
        try {
          if (O_(e)) return;
        } catch (e) {}
      Qf(e, `unauthorized-domain`);
    })),
    D_.apply(this, arguments)
  );
}
function O_(e) {
  let t = op(),
    { protocol: n, hostname: r } = new URL(t);
  if (e.startsWith(`chrome-extension://`)) {
    let i = new URL(e);
    return i.hostname === `` && r === ``
      ? n === `chrome-extension:` &&
          e.replace(`chrome-extension://`, ``) ===
            t.replace(`chrome-extension://`, ``)
      : n === `chrome-extension:` && i.hostname === r;
  }
  if (!T_.test(n)) return !1;
  if (w_.test(e)) return r === e;
  let i = e.replace(/\./g, `\\.`);
  return RegExp(`^(.+\\.` + i + `|` + i + `)$`, `i`).test(r);
}
var k_ = new dp(3e4, 6e4);
function A_() {
  let e = _g().___jsl;
  if (e != null && e.H) {
    for (let t of Object.keys(e.H))
      if (
        ((e.H[t].r = e.H[t].r || []),
        (e.H[t].L = e.H[t].L || []),
        (e.H[t].r = [...e.H[t].L]),
        e.CP)
      )
        for (let t = 0; t < e.CP.length; t++) e.CP[t] = null;
  }
}
function j_(e) {
  return new Promise((t, n) => {
    var r, i;
    function a() {
      (A_(),
        gapi.load(`gapi.iframes`, {
          callback: () => {
            t(gapi.iframes.getContext());
          },
          ontimeout: () => {
            (A_(), n($f(e, `network-request-failed`)));
          },
          timeout: k_.get(),
        }));
    }
    if (!((r = _g().gapi) == null || (r = r.iframes) == null) && r.Iframe)
      t(gapi.iframes.getContext());
    else if ((i = _g().gapi) != null && i.load) a();
    else {
      let t = Lm(`iframefcb`);
      return (
        (_g()[t] = () => {
          gapi.load ? a() : n($f(e, `network-request-failed`));
        }),
        Pm(`${Im()}?onload=${t}`).catch((e) => n(e))
      );
    }
  }).catch((e) => {
    throw ((M_ = null), e);
  });
}
var M_ = null;
function N_(e) {
  return ((M_ = M_ || j_(e)), M_);
}
var P_ = new dp(5e3, 15e3),
  F_ = `__/auth/iframe`,
  I_ = `emulator/auth/iframe`,
  L_ = {
    style: { position: `absolute`, top: `-100px`, width: `1px`, height: `1px` },
    "aria-hidden": `true`,
    tabindex: `-1`,
  },
  R_ = new Map([
    [`identitytoolkit.googleapis.com`, `p`],
    [`staging-identitytoolkit.sandbox.googleapis.com`, `s`],
    [`test-identitytoolkit.sandbox.googleapis.com`, `t`],
  ]);
function z_(e) {
  let t = e.config;
  Z(t.authDomain, e, `auth-domain-config-required`);
  let n = t.emulator ? fp(t, I_) : `https://${e.config.authDomain}/${F_}`,
    r = { apiKey: t.apiKey, appName: e.name, v: un },
    i = R_.get(e.config.apiHost);
  i && (r.eid = i);
  let a = e._getFrameworks();
  return (a.length && (r.fw = a.join(`,`)), `${n}?${Ne(r).slice(1)}`);
}
function B_(e) {
  return V_.apply(this, arguments);
}
function V_() {
  return (
    (V_ = p(function* (e) {
      let t = yield N_(e),
        n = _g().gapi;
      return (
        Z(n, e, `internal-error`),
        t.open(
          {
            where: document.body,
            url: z_(e),
            messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
            attributes: L_,
            dontclear: !0,
          },
          (t) =>
            new Promise(
              (function () {
                var n = p(function* (n, r) {
                  yield t.restyle({ setHideOnLeave: !1 });
                  let i = $f(e, `network-request-failed`),
                    a = _g().setTimeout(() => {
                      r(i);
                    }, P_.get());
                  function o() {
                    (_g().clearTimeout(a), n(t));
                  }
                  t.ping(o).then(o, () => {
                    r(i);
                  });
                });
                return function (e, t) {
                  return n.apply(this, arguments);
                };
              })(),
            ),
        )
      );
    })),
    V_.apply(this, arguments)
  );
}
var H_ = { location: `yes`, resizable: `yes`, statusbar: `yes`, toolbar: `no` },
  U_ = 500,
  W_ = 600,
  G_ = `_blank`,
  K_ = `http://localhost`,
  q_ = class {
    constructor(e) {
      ((this.window = e), (this.associatedEvent = null));
    }
    close() {
      if (this.window)
        try {
          this.window.close();
        } catch (e) {}
    }
  };
function J_(e, t, n, r = U_, i = W_) {
  let a = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString(),
    s = ``,
    c = u(
      u({}, H_),
      {},
      { width: r.toString(), height: i.toString(), top: a, left: o },
    ),
    l = y().toLowerCase();
  (n && (s = mm(l) ? G_ : n), fm(l) && ((t = t || K_), (c.scrollbars = `yes`)));
  let d = Object.entries(c).reduce((e, [t, n]) => `${e}${t}=${n},`, ``);
  if (bm(l) && s !== `_self`) return (Y_(t || ``, s), new q_(null));
  let f = window.open(t || ``, s, d);
  Z(f, e, `popup-blocked`);
  try {
    f.focus();
  } catch (e) {}
  return new q_(f);
}
function Y_(e, t) {
  let n = document.createElement(`a`);
  ((n.href = e), (n.target = t));
  let r = document.createEvent(`MouseEvent`);
  (r.initMouseEvent(
    `click`,
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null,
  ),
    n.dispatchEvent(r));
}
var X_ = `__/auth/handler`,
  Z_ = `emulator/auth/handler`,
  Q_ = `fac`;
function $_(e, t, n, r, i, a) {
  return ev.apply(this, arguments);
}
function ev() {
  return (
    (ev = p(function* (e, t, n, r, i, a) {
      (Z(e.config.authDomain, e, `auth-domain-config-required`),
        Z(e.config.apiKey, e, `invalid-api-key`));
      let o = {
        apiKey: e.config.apiKey,
        appName: e.name,
        authType: n,
        redirectUrl: r,
        v: un,
        eventId: i,
      };
      if (t instanceof Ah) {
        (t.setDefaultLanguage(e.languageCode),
          (o.providerId = t.providerId || ``),
          Ae(t.getCustomParameters()) ||
            (o.customParameters = JSON.stringify(t.getCustomParameters())));
        for (let [e, t] of Object.entries(a || {})) o[e] = t;
      }
      if (t instanceof jh) {
        let e = t.getScopes().filter((e) => e !== ``);
        e.length > 0 && (o.scopes = e.join(`,`));
      }
      e.tenantId && (o.tid = e.tenantId);
      let s = o;
      for (let e of Object.keys(s)) s[e] === void 0 && delete s[e];
      let c = yield e._getAppCheckToken(),
        l = c ? `#${Q_}=${encodeURIComponent(c)}` : ``;
      return `${tv(e)}?${Ne(s).slice(1)}${l}`;
    })),
    ev.apply(this, arguments)
  );
}
function tv({ config: e }) {
  return e.emulator ? fp(e, Z_) : `https://${e.authDomain}/${X_}`;
}
var nv = `webStorageSupport`,
  rv = class {
    constructor() {
      ((this.eventManagers = {}),
        (this.iframes = {}),
        (this.originValidationPromises = {}),
        (this._redirectPersistence = fg),
        (this._completeRedirectFn = h_),
        (this._overrideRedirectResult = f_));
    }
    _openPopup(e, t, n, r) {
      var i = this;
      return p(function* () {
        var a;
        return (
          ap(
            (a = i.eventManagers[e._key()]) == null ? void 0 : a.manager,
            `_initialize() not called before _openPopup()`,
          ),
          J_(e, yield $_(e, t, n, op(), r), hg())
        );
      })();
    }
    _openRedirect(e, t, n, r) {
      var i = this;
      return p(function* () {
        return (
          yield i._originValidation(e),
          vg(yield $_(e, t, n, op(), r)),
          new Promise(() => {})
        );
      })();
    }
    _initialize(e) {
      let t = e._key();
      if (this.eventManagers[t]) {
        let { manager: e, promise: n } = this.eventManagers[t];
        return e
          ? Promise.resolve(e)
          : (ap(n, `If manager is not set, promise should be`), n);
      }
      let n = this.initAndGetManager(e);
      return (
        (this.eventManagers[t] = { promise: n }),
        n.catch(() => {
          delete this.eventManagers[t];
        }),
        n
      );
    }
    initAndGetManager(e) {
      var t = this;
      return p(function* () {
        let n = yield B_(e),
          r = new v_(e);
        return (
          n.register(
            `authEvent`,
            (t) => (
              Z(t == null ? void 0 : t.authEvent, e, `invalid-auth-event`),
              { status: r.onEvent(t.authEvent) ? `ACK` : `ERROR` }
            ),
            gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
          ),
          (t.eventManagers[e._key()] = { manager: r }),
          (t.iframes[e._key()] = n),
          r
        );
      })();
    }
    _isIframeWebStorageSupported(e, t) {
      this.iframes[e._key()].send(
        nv,
        { type: nv },
        (n) => {
          var r;
          let i = n == null || (r = n[0]) == null ? void 0 : r[nv];
          (i !== void 0 && t(!!i), Qf(e, `internal-error`));
        },
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
      );
    }
    _originValidation(e) {
      let t = e._key();
      return (
        this.originValidationPromises[t] ||
          (this.originValidationPromises[t] = E_(e)),
        this.originValidationPromises[t]
      );
    }
    get _shouldInitProactively() {
      return Sm() || pm() || ym();
    }
  },
  iv = class {
    constructor(e) {
      this.factorId = e;
    }
    _process(e, t, n) {
      switch (t.type) {
        case `enroll`:
          return this._finalizeEnroll(e, t.credential, n);
        case `signin`:
          return this._finalizeSignIn(e, t.credential);
        default:
          return ip(`unexpected MultiFactorSessionType`);
      }
    }
  },
  av = class e extends iv {
    constructor(e) {
      (super(`phone`), (this.credential = e));
    }
    static _fromCredential(t) {
      return new e(t);
    }
    _finalizeEnroll(e, t, n) {
      return Qh(e, {
        idToken: t,
        displayName: n,
        phoneVerificationInfo: this.credential._makeVerificationRequest(),
      });
    }
    _finalizeSignIn(e, t) {
      return Hg(e, {
        mfaPendingCredential: t,
        phoneVerificationInfo: this.credential._makeVerificationRequest(),
      });
    }
  },
  ov = class {
    constructor() {}
    static assertion(e) {
      return av._fromCredential(e);
    }
  };
ov.FACTOR_ID = `phone`;
var sv = class {
  static assertionForEnrollment(e, t) {
    return cv._fromSecret(e, t);
  }
  static assertionForSignIn(e, t) {
    return cv._fromEnrollmentId(e, t);
  }
  static generateSecret(e) {
    return p(function* () {
      var t;
      let n = e;
      Z(((t = n.user) == null ? void 0 : t.auth) !== void 0, `internal-error`);
      let r = yield $h(n.user.auth, {
        idToken: n.credential,
        totpEnrollmentInfo: {},
      });
      return lv._fromStartTotpMfaEnrollmentResponse(r, n.user.auth);
    })();
  }
};
sv.FACTOR_ID = `totp`;
var cv = class e extends iv {
    constructor(e, t, n) {
      (super(`totp`),
        (this.otp = e),
        (this.enrollmentId = t),
        (this.secret = n));
    }
    static _fromSecret(t, n) {
      return new e(n, void 0, t);
    }
    static _fromEnrollmentId(t, n) {
      return new e(n, t);
    }
    _finalizeEnroll(e, t, n) {
      var r = this;
      return p(function* () {
        return (
          Z(r.secret !== void 0, e, `argument-error`),
          eg(e, {
            idToken: t,
            displayName: n,
            totpVerificationInfo: r.secret._makeTotpVerificationInfo(r.otp),
          })
        );
      })();
    }
    _finalizeSignIn(e, t) {
      var n = this;
      return p(function* () {
        Z(n.enrollmentId !== void 0 && n.otp !== void 0, e, `argument-error`);
        let r = { verificationCode: n.otp };
        return Ug(e, {
          mfaPendingCredential: t,
          mfaEnrollmentId: n.enrollmentId,
          totpVerificationInfo: r,
        });
      })();
    }
  },
  lv = class e {
    constructor(e, t, n, r, i, a, o) {
      ((this.sessionInfo = a),
        (this.auth = o),
        (this.secretKey = e),
        (this.hashingAlgorithm = t),
        (this.codeLength = n),
        (this.codeIntervalSeconds = r),
        (this.enrollmentCompletionDeadline = i));
    }
    static _fromStartTotpMfaEnrollmentResponse(t, n) {
      return new e(
        t.totpSessionInfo.sharedSecretKey,
        t.totpSessionInfo.hashingAlgorithm,
        t.totpSessionInfo.verificationCodeLength,
        t.totpSessionInfo.periodSec,
        new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),
        t.totpSessionInfo.sessionInfo,
        n,
      );
    }
    _makeTotpVerificationInfo(e) {
      return { sessionInfo: this.sessionInfo, verificationCode: e };
    }
    generateQrCodeUrl(e, t) {
      let n = !1;
      if (((uv(e) || uv(t)) && (n = !0), n)) {
        if (uv(e)) {
          var r;
          e =
            ((r = this.auth.currentUser) == null ? void 0 : r.email) ||
            `unknownuser`;
        }
        uv(t) && (t = this.auth.name);
      }
      return `otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`;
    }
  };
function uv(e) {
  return e === void 0 || (e == null ? void 0 : e.length) === 0;
}
var dv = `@firebase/auth`,
  fv = `1.13.0`,
  pv = class {
    constructor(e) {
      ((this.auth = e), (this.internalListeners = new Map()));
    }
    getUid() {
      var e;
      return (
        this.assertAuthConfigured(),
        ((e = this.auth.currentUser) == null ? void 0 : e.uid) || null
      );
    }
    getToken(e) {
      var t = this;
      return p(function* () {
        return (
          t.assertAuthConfigured(),
          yield t.auth._initializationPromise,
          t.auth.currentUser
            ? { accessToken: yield t.auth.currentUser.getIdToken(e) }
            : null
        );
      })();
    }
    addAuthTokenListener(e) {
      if ((this.assertAuthConfigured(), this.internalListeners.has(e))) return;
      let t = this.auth.onIdTokenChanged((t) => {
        e((t == null ? void 0 : t.stsTokenManager.accessToken) || null);
      });
      (this.internalListeners.set(e, t), this.updateProactiveRefresh());
    }
    removeAuthTokenListener(e) {
      this.assertAuthConfigured();
      let t = this.internalListeners.get(e);
      t &&
        (this.internalListeners.delete(e), t(), this.updateProactiveRefresh());
    }
    assertAuthConfigured() {
      Z(
        this.auth._initializationPromise,
        `dependent-sdk-initialized-before-auth`,
      );
    }
    updateProactiveRefresh() {
      this.internalListeners.size > 0
        ? this.auth._startProactiveRefresh()
        : this.auth._stopProactiveRefresh();
    }
  };
function mv(e) {
  switch (e) {
    case `Node`:
      return `node`;
    case `ReactNative`:
      return `rn`;
    case `Worker`:
      return `webworker`;
    case `Cordova`:
      return `cordova`;
    case `WebExtension`:
      return `web-extension`;
    default:
      return;
  }
}
function hv(e) {
  (an(
    new Ve(
      `auth`,
      (t, { options: n }) => {
        let r = t.getProvider(`app`).getImmediate(),
          i = t.getProvider(`heartbeat`),
          a = t.getProvider(`app-check-internal`),
          { apiKey: o, authDomain: s } = r.options;
        Z(o && !o.includes(`:`), `invalid-api-key`, { appName: r.name });
        let c = new km(r, i, a, {
          apiKey: o,
          authDomain: s,
          clientPlatform: e,
          apiHost: `identitytoolkit.googleapis.com`,
          tokenApiHost: `securetoken.googleapis.com`,
          apiScheme: `https`,
          sdkClientVersion: Cm(e),
        });
        return (Xm(c, n), c);
      },
      `PUBLIC`,
    )
      .setInstantiationMode(`EXPLICIT`)
      .setInstanceCreatedCallback((e, t, n) => {
        e.getProvider(`auth-internal`).initialize();
      }),
  ),
    an(
      new Ve(
        `auth-internal`,
        (e) => ((e) => new pv(e))(Am(e.getProvider(`auth`).getImmediate())),
        `PRIVATE`,
      ).setInstantiationMode(`EXPLICIT`),
    ),
    pn(dv, fv, mv(e)),
    pn(dv, fv, `esm2020`));
}
var gv = pe(`authIdTokenMaxAge`) || 300,
  _v = null,
  vv = (e) =>
    (function () {
      var t = p(function* (t) {
        let n = t && (yield t.getIdTokenResult()),
          r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
        if (r && r > gv) return;
        let i = n == null ? void 0 : n.token;
        _v !== i &&
          ((_v = i),
          yield fetch(e, {
            method: i ? `POST` : `DELETE`,
            headers: i ? { Authorization: `Bearer ${i}` } : {},
          }));
      });
      return function (e) {
        return t.apply(this, arguments);
      };
    })();
function yv(e = fn()) {
  let t = on(e, `auth`);
  if (t.isInitialized()) return t.getImmediate();
  let n = Ym(e, { popupRedirectResolver: rv, persistence: [Bg, og, fg] }),
    r = pe(`authTokenSyncURL`);
  if (r && typeof isSecureContext == `boolean` && isSecureContext) {
    let e = new URL(r, location.origin);
    if (location.origin === e.origin) {
      let t = vv(e.toString());
      (Jh(n, t, () => t(n.currentUser)), qh(n, (e) => t(e)));
    }
  }
  let i = ue(`auth`);
  return (i && Zm(n, `http://${i}`), n);
}
function bv() {
  var e, t;
  return (e =
    (t = document.getElementsByTagName(`head`)) == null ? void 0 : t[0]) == null
    ? document
    : e;
}
(Nm({
  loadJS(e) {
    return new Promise((t, n) => {
      let r = document.createElement(`script`);
      (r.setAttribute(`src`, e),
        (r.onload = t),
        (r.onerror = (e) => {
          let t = $f(`internal-error`);
          ((t.customData = e), n(t));
        }),
        (r.type = `text/javascript`),
        (r.charset = `UTF-8`),
        bv().appendChild(r));
    });
  },
  gapiScript: `https://apis.google.com/js/api.js`,
  recaptchaV2Script: `https://www.google.com/recaptcha/api.js`,
  recaptchaEnterpriseScript: `https://www.google.com/recaptcha/enterprise.js?render=`,
}),
  hv(`Browser`));
export {
  d as C,
  u as S,
  c as T,
  Rd as _,
  Kh as a,
  h as b,
  zf as c,
  Bf as d,
  Ef as f,
  Nd as g,
  Md as h,
  Yh as i,
  Rf as l,
  Lf as m,
  og as n,
  i_ as o,
  Sf as p,
  yv as r,
  Xh as s,
  Nh as t,
  If as u,
  pf as v,
  s as w,
  p as x,
  dn as y,
};
