function Np(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s && Object.defineProperty(e, i, s.get ? s : { enumerable: !0, get: () => r[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i) if (s.type === "childList") for (const l of s.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function Tp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $c = { exports: {} },
  Ps = {},
  Oc = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ui = Symbol.for("react.element"),
  Pp = Symbol.for("react.portal"),
  bp = Symbol.for("react.fragment"),
  Mp = Symbol.for("react.strict_mode"),
  Ip = Symbol.for("react.profiler"),
  Lp = Symbol.for("react.provider"),
  $p = Symbol.for("react.context"),
  Op = Symbol.for("react.forward_ref"),
  zp = Symbol.for("react.suspense"),
  Rp = Symbol.for("react.memo"),
  Dp = Symbol.for("react.lazy"),
  nu = Symbol.iterator;
function Ap(e) {
  return e === null || typeof e != "object" ? null : ((e = (nu && e[nu]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var zc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Rc = Object.assign,
  Dc = {};
function hr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Dc), (this.updater = n || zc);
}
hr.prototype.isReactComponent = {};
hr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
hr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ac() {}
Ac.prototype = hr.prototype;
function Vo(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Dc), (this.updater = n || zc);
}
var Ho = (Vo.prototype = new Ac());
Ho.constructor = Vo;
Rc(Ho, hr.prototype);
Ho.isPureReactComponent = !0;
var ru = Array.isArray,
  Bc = Object.prototype.hasOwnProperty,
  Wo = { current: null },
  Fc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vc(e, t, n) {
  var r,
    i = {},
    s = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (s = "" + t.key), t))
      Bc.call(t, r) && !Fc.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var o = Array(a), c = 0; c < a; c++) o[c] = arguments[c + 2];
    i.children = o;
  }
  if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return { $$typeof: ui, type: e, key: s, ref: l, props: i, _owner: Wo.current };
}
function Bp(e, t) {
  return { $$typeof: ui, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Uo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ui;
}
function Fp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var iu = /\/+/g;
function Js(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Fp("" + e.key) : t.toString(36);
}
function Ri(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (s) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ui:
          case Pp:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + Js(l, 0) : r),
      ru(i)
        ? ((n = ""),
          e != null && (n = e.replace(iu, "$&/") + "/"),
          Ri(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (Uo(i) && (i = Bp(i, n + (!i.key || (l && l.key === i.key) ? "" : ("" + i.key).replace(iu, "$&/") + "/") + e)), t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), ru(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var o = r + Js(s, a);
      l += Ri(s, t, n, o, i);
    }
  else if (((o = Ap(e)), typeof o == "function"))
    for (e = o.call(e), a = 0; !(s = e.next()).done; ) (s = s.value), (o = r + Js(s, a++)), (l += Ri(s, t, n, o, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function _i(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ri(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Vp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Fe = { current: null },
  Di = { transition: null },
  Hp = { ReactCurrentDispatcher: Fe, ReactCurrentBatchConfig: Di, ReactCurrentOwner: Wo };
function Hc() {
  throw Error("act(...) is not supported in production builds of React.");
}
U.Children = {
  map: _i,
  forEach: function (e, t, n) {
    _i(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      _i(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      _i(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Uo(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
U.Component = hr;
U.Fragment = bp;
U.Profiler = Ip;
U.PureComponent = Vo;
U.StrictMode = Mp;
U.Suspense = zp;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hp;
U.act = Hc;
U.cloneElement = function (e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Rc({}, e.props),
    i = e.key,
    s = e.ref,
    l = e._owner;
  if (t != null) {
    if ((t.ref !== void 0 && ((s = t.ref), (l = Wo.current)), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps))
      var a = e.type.defaultProps;
    for (o in t) Bc.call(t, o) && !Fc.hasOwnProperty(o) && (r[o] = t[o] === void 0 && a !== void 0 ? a[o] : t[o]);
  }
  var o = arguments.length - 2;
  if (o === 1) r.children = n;
  else if (1 < o) {
    a = Array(o);
    for (var c = 0; c < o; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: ui, type: e.type, key: i, ref: s, props: r, _owner: l };
};
U.createContext = function (e) {
  return (
    (e = {
      $$typeof: $p,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Lp, _context: e }),
    (e.Consumer = e)
  );
};
U.createElement = Vc;
U.createFactory = function (e) {
  var t = Vc.bind(null, e);
  return (t.type = e), t;
};
U.createRef = function () {
  return { current: null };
};
U.forwardRef = function (e) {
  return { $$typeof: Op, render: e };
};
U.isValidElement = Uo;
U.lazy = function (e) {
  return { $$typeof: Dp, _payload: { _status: -1, _result: e }, _init: Vp };
};
U.memo = function (e, t) {
  return { $$typeof: Rp, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function (e) {
  var t = Di.transition;
  Di.transition = {};
  try {
    e();
  } finally {
    Di.transition = t;
  }
};
U.unstable_act = Hc;
U.useCallback = function (e, t) {
  return Fe.current.useCallback(e, t);
};
U.useContext = function (e) {
  return Fe.current.useContext(e);
};
U.useDebugValue = function () {};
U.useDeferredValue = function (e) {
  return Fe.current.useDeferredValue(e);
};
U.useEffect = function (e, t) {
  return Fe.current.useEffect(e, t);
};
U.useId = function () {
  return Fe.current.useId();
};
U.useImperativeHandle = function (e, t, n) {
  return Fe.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function (e, t) {
  return Fe.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function (e, t) {
  return Fe.current.useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
  return Fe.current.useMemo(e, t);
};
U.useReducer = function (e, t, n) {
  return Fe.current.useReducer(e, t, n);
};
U.useRef = function (e) {
  return Fe.current.useRef(e);
};
U.useState = function (e) {
  return Fe.current.useState(e);
};
U.useSyncExternalStore = function (e, t, n) {
  return Fe.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function () {
  return Fe.current.useTransition();
};
U.version = "18.3.1";
Oc.exports = U;
var E = Oc.exports;
const B = Tp(E),
  Wp = Np({ __proto__: null, default: B }, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Up = E,
  Gp = Symbol.for("react.element"),
  qp = Symbol.for("react.fragment"),
  Kp = Object.prototype.hasOwnProperty,
  Qp = Up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Yp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wc(e, t, n) {
  var r,
    i = {},
    s = null,
    l = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Kp.call(t, r) && !Yp.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Gp, type: e, key: s, ref: l, props: i, _owner: Qp.current };
}
Ps.Fragment = qp;
Ps.jsx = Wc;
Ps.jsxs = Wc;
$c.exports = Ps;
var u = $c.exports,
  Dl = {},
  Uc = { exports: {} },
  et = {},
  Gc = { exports: {} },
  qc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(S, N) {
    var M = S.length;
    S.push(N);
    e: for (; 0 < M; ) {
      var R = (M - 1) >>> 1,
        H = S[R];
      if (0 < i(H, N)) (S[R] = N), (S[M] = H), (M = R);
      else break e;
    }
  }
  function n(S) {
    return S.length === 0 ? null : S[0];
  }
  function r(S) {
    if (S.length === 0) return null;
    var N = S[0],
      M = S.pop();
    if (M !== N) {
      S[0] = M;
      e: for (var R = 0, H = S.length, ge = H >>> 1; R < ge; ) {
        var Se = 2 * (R + 1) - 1,
          Oe = S[Se],
          ve = Se + 1,
          J = S[ve];
        if (0 > i(Oe, M)) ve < H && 0 > i(J, Oe) ? ((S[R] = J), (S[ve] = M), (R = ve)) : ((S[R] = Oe), (S[Se] = M), (R = Se));
        else if (ve < H && 0 > i(J, M)) (S[R] = J), (S[ve] = M), (R = ve);
        else break e;
      }
    }
    return N;
  }
  function i(S, N) {
    var M = S.sortIndex - N.sortIndex;
    return M !== 0 ? M : S.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var o = [],
    c = [],
    f = 1,
    p = null,
    h = 3,
    v = !1,
    _ = !1,
    x = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(S) {
    for (var N = n(c); N !== null; ) {
      if (N.callback === null) r(c);
      else if (N.startTime <= S) r(c), (N.sortIndex = N.expirationTime), t(o, N);
      else break;
      N = n(c);
    }
  }
  function y(S) {
    if (((x = !1), m(S), !_))
      if (n(o) !== null) (_ = !0), V(w);
      else {
        var N = n(c);
        N !== null && we(y, N.startTime - S);
      }
  }
  function w(S, N) {
    (_ = !1), x && ((x = !1), g(T), (T = -1)), (v = !0);
    var M = h;
    try {
      for (m(N), p = n(o); p !== null && (!(p.expirationTime > N) || (S && !I())); ) {
        var R = p.callback;
        if (typeof R == "function") {
          (p.callback = null), (h = p.priorityLevel);
          var H = R(p.expirationTime <= N);
          (N = e.unstable_now()), typeof H == "function" ? (p.callback = H) : p === n(o) && r(o), m(N);
        } else r(o);
        p = n(o);
      }
      if (p !== null) var ge = !0;
      else {
        var Se = n(c);
        Se !== null && we(y, Se.startTime - N), (ge = !1);
      }
      return ge;
    } finally {
      (p = null), (h = M), (v = !1);
    }
  }
  var C = !1,
    P = null,
    T = -1,
    b = 5,
    k = -1;
  function I() {
    return !(e.unstable_now() - k < b);
  }
  function z() {
    if (P !== null) {
      var S = e.unstable_now();
      k = S;
      var N = !0;
      try {
        N = P(!0, S);
      } finally {
        N ? L() : ((C = !1), (P = null));
      }
    } else C = !1;
  }
  var L;
  if (typeof d == "function")
    L = function () {
      d(z);
    };
  else if (typeof MessageChannel < "u") {
    var O = new MessageChannel(),
      A = O.port2;
    (O.port1.onmessage = z),
      (L = function () {
        A.postMessage(null);
      });
  } else
    L = function () {
      j(z, 0);
    };
  function V(S) {
    (P = S), C || ((C = !0), L());
  }
  function we(S, N) {
    T = j(function () {
      S(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (S) {
      S.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      _ || v || ((_ = !0), V(w));
    }),
    (e.unstable_forceFrameRate = function (S) {
      0 > S || 125 < S
        ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported")
        : (b = 0 < S ? Math.floor(1e3 / S) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(o);
    }),
    (e.unstable_next = function (S) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = h;
      }
      var M = h;
      h = N;
      try {
        return S();
      } finally {
        h = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (S, N) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var M = h;
      h = S;
      try {
        return N();
      } finally {
        h = M;
      }
    }),
    (e.unstable_scheduleCallback = function (S, N, M) {
      var R = e.unstable_now();
      switch ((typeof M == "object" && M !== null ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? R + M : R)) : (M = R), S)) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return (
        (H = M + H),
        (S = { id: f++, callback: N, priorityLevel: S, startTime: M, expirationTime: H, sortIndex: -1 }),
        M > R
          ? ((S.sortIndex = M), t(c, S), n(o) === null && S === n(c) && (x ? (g(T), (T = -1)) : (x = !0), we(y, M - R)))
          : ((S.sortIndex = H), t(o, S), _ || v || ((_ = !0), V(w))),
        S
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (S) {
      var N = h;
      return function () {
        var M = h;
        h = N;
        try {
          return S.apply(this, arguments);
        } finally {
          h = M;
        }
      };
    });
})(qc);
Gc.exports = qc;
var Xp = Gc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zp = E,
  Je = Xp;
function $(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Kc = new Set(),
  Wr = {};
function Ln(e, t) {
  ar(e, t), ar(e + "Capture", t);
}
function ar(e, t) {
  for (Wr[e] = t, e = 0; e < t.length; e++) Kc.add(t[e]);
}
var At = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Al = Object.prototype.hasOwnProperty,
  Jp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  su = {},
  lu = {};
function em(e) {
  return Al.call(lu, e) ? !0 : Al.call(su, e) ? !1 : Jp.test(e) ? (lu[e] = !0) : ((su[e] = !0), !1);
}
function tm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function nm(e, t, n, r) {
  if (t === null || typeof t > "u" || tm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ve(e, t, n, r, i, s, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = l);
}
var Te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Te[e] = new Ve(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Te[t] = new Ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Te[e] = new Ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  Te[e] = new Ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Te[e] = new Ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Te[e] = new Ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Te[e] = new Ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Te[e] = new Ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Te[e] = new Ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Go = /[\-:]([a-z])/g;
function qo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Go, qo);
    Te[t] = new Ve(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(Go, qo);
  Te[t] = new Ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Go, qo);
  Te[t] = new Ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Te[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Te.xlinkHref = new Ve("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  Te[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ko(e, t, n, r) {
  var i = Te.hasOwnProperty(t) ? Te[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (nm(t, n, i, r) && (n = null),
    r || i === null
      ? em(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type), (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ht = Zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  yi = Symbol.for("react.element"),
  Vn = Symbol.for("react.portal"),
  Hn = Symbol.for("react.fragment"),
  Qo = Symbol.for("react.strict_mode"),
  Bl = Symbol.for("react.profiler"),
  Qc = Symbol.for("react.provider"),
  Yc = Symbol.for("react.context"),
  Yo = Symbol.for("react.forward_ref"),
  Fl = Symbol.for("react.suspense"),
  Vl = Symbol.for("react.suspense_list"),
  Xo = Symbol.for("react.memo"),
  qt = Symbol.for("react.lazy"),
  Xc = Symbol.for("react.offscreen"),
  ou = Symbol.iterator;
function wr(e) {
  return e === null || typeof e != "object" ? null : ((e = (ou && e[ou]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var ue = Object.assign,
  el;
function br(e) {
  if (el === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      el = (t && t[1]) || "";
    }
  return (
    `
` +
    el +
    e
  );
}
var tl = !1;
function nl(e, t) {
  if (!e || tl) return "";
  tl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          s = r.stack.split(`
`),
          l = i.length - 1,
          a = s.length - 1;
        1 <= l && 0 <= a && i[l] !== s[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (i[l] !== s[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || i[l] !== s[a])) {
                var o =
                  `
` + i[l].replace(" at new ", " at ");
                return e.displayName && o.includes("<anonymous>") && (o = o.replace("<anonymous>", e.displayName)), o;
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (tl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? br(e) : "";
}
function rm(e) {
  switch (e.tag) {
    case 5:
      return br(e.type);
    case 16:
      return br("Lazy");
    case 13:
      return br("Suspense");
    case 19:
      return br("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = nl(e.type, !1)), e;
    case 11:
      return (e = nl(e.type.render, !1)), e;
    case 1:
      return (e = nl(e.type, !0)), e;
    default:
      return "";
  }
}
function Hl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Hn:
      return "Fragment";
    case Vn:
      return "Portal";
    case Bl:
      return "Profiler";
    case Qo:
      return "StrictMode";
    case Fl:
      return "Suspense";
    case Vl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Yc:
        return (e.displayName || "Context") + ".Consumer";
      case Qc:
        return (e._context.displayName || "Context") + ".Provider";
      case Yo:
        var t = e.render;
        return (e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e;
      case Xo:
        return (t = e.displayName || null), t !== null ? t : Hl(e.type) || "Memo";
      case qt:
        (t = e._payload), (e = e._init);
        try {
          return Hl(e(t));
        } catch {}
    }
  return null;
}
function im(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (e = t.render), (e = e.displayName || e.name || ""), t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Hl(t);
    case 8:
      return t === Qo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function dn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Zc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function sm(e) {
  var t = Zc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), s.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function xi(e) {
  e._valueTracker || (e._valueTracker = sm(e));
}
function Jc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = Zc(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Yi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Wl(e, t) {
  var n = t.checked;
  return ue({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function au(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = dn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    });
}
function ed(e, t) {
  (t = t.checked), t != null && Ko(e, "checked", t, !1);
}
function Ul(e, t) {
  ed(e, t);
  var n = dn(t.value),
    r = t.type;
  if (n != null)
    r === "number" ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Gl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Gl(e, t.type, dn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function uu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name), n !== "" && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== "" && (e.name = n);
}
function Gl(e, t, n) {
  (t !== "number" || Yi(e.ownerDocument) !== e) &&
    (n == null ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Mr = Array.isArray;
function er(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + dn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ql(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error($(91));
  return ue({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function cu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error($(92));
      if (Mr(n)) {
        if (1 < n.length) throw Error($(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: dn(n) };
}
function td(e, t) {
  var n = dn(t.value),
    r = dn(t.defaultValue);
  n != null && ((n = "" + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function du(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function nd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Kl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? nd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var wi,
  rd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        wi = wi || document.createElement("div"), wi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = wi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ur(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $r = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  lm = ["Webkit", "ms", "Moz", "O"];
Object.keys($r).forEach(function (e) {
  lm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($r[t] = $r[e]);
  });
});
function id(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || ($r.hasOwnProperty(e) && $r[e])
    ? ("" + t).trim()
    : t + "px";
}
function sd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = id(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var om = ue(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ql(e, t) {
  if (t) {
    if (om[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error($(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error($(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error($(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error($(62));
  }
}
function Yl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Xl = null;
function Zo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Zl = null,
  tr = null,
  nr = null;
function fu(e) {
  if ((e = fi(e))) {
    if (typeof Zl != "function") throw Error($(280));
    var t = e.stateNode;
    t && ((t = $s(t)), Zl(e.stateNode, e.type, t));
  }
}
function ld(e) {
  tr ? (nr ? nr.push(e) : (nr = [e])) : (tr = e);
}
function od() {
  if (tr) {
    var e = tr,
      t = nr;
    if (((nr = tr = null), fu(e), t)) for (e = 0; e < t.length; e++) fu(t[e]);
  }
}
function ad(e, t) {
  return e(t);
}
function ud() {}
var rl = !1;
function cd(e, t, n) {
  if (rl) return e(t, n);
  rl = !0;
  try {
    return ad(e, t, n);
  } finally {
    (rl = !1), (tr !== null || nr !== null) && (ud(), od());
  }
}
function Gr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = $s(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error($(231, t, typeof n));
  return n;
}
var Jl = !1;
if (At)
  try {
    var Sr = {};
    Object.defineProperty(Sr, "passive", {
      get: function () {
        Jl = !0;
      },
    }),
      window.addEventListener("test", Sr, Sr),
      window.removeEventListener("test", Sr, Sr);
  } catch {
    Jl = !1;
  }
function am(e, t, n, r, i, s, l, a, o) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (f) {
    this.onError(f);
  }
}
var Or = !1,
  Xi = null,
  Zi = !1,
  eo = null,
  um = {
    onError: function (e) {
      (Or = !0), (Xi = e);
    },
  };
function cm(e, t, n, r, i, s, l, a, o) {
  (Or = !1), (Xi = null), am.apply(um, arguments);
}
function dm(e, t, n, r, i, s, l, a, o) {
  if ((cm.apply(this, arguments), Or)) {
    if (Or) {
      var c = Xi;
      (Or = !1), (Xi = null);
    } else throw Error($(198));
    Zi || ((Zi = !0), (eo = c));
  }
}
function $n(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function dd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function pu(e) {
  if ($n(e) !== e) throw Error($(188));
}
function fm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = $n(e)), t === null)) throw Error($(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return pu(i), e;
        if (s === r) return pu(i), t;
        s = s.sibling;
      }
      throw Error($(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var l = !1, a = i.child; a; ) {
        if (a === n) {
          (l = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (l = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = s.child; a; ) {
          if (a === n) {
            (l = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (l = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error($(189));
      }
    }
    if (n.alternate !== r) throw Error($(190));
  }
  if (n.tag !== 3) throw Error($(188));
  return n.stateNode.current === n ? e : t;
}
function fd(e) {
  return (e = fm(e)), e !== null ? pd(e) : null;
}
function pd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = pd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var md = Je.unstable_scheduleCallback,
  mu = Je.unstable_cancelCallback,
  pm = Je.unstable_shouldYield,
  mm = Je.unstable_requestPaint,
  fe = Je.unstable_now,
  hm = Je.unstable_getCurrentPriorityLevel,
  Jo = Je.unstable_ImmediatePriority,
  hd = Je.unstable_UserBlockingPriority,
  Ji = Je.unstable_NormalPriority,
  gm = Je.unstable_LowPriority,
  gd = Je.unstable_IdlePriority,
  bs = null,
  Ct = null;
function vm(e) {
  if (Ct && typeof Ct.onCommitFiberRoot == "function")
    try {
      Ct.onCommitFiberRoot(bs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var yt = Math.clz32 ? Math.clz32 : xm,
  _m = Math.log,
  ym = Math.LN2;
function xm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((_m(e) / ym) | 0)) | 0;
}
var Si = 64,
  ji = 4194304;
function Ir(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function es(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~i;
    a !== 0 ? (r = Ir(a)) : ((s &= l), s !== 0 && (r = Ir(s)));
  } else (l = n & ~i), l !== 0 ? (r = Ir(l)) : s !== 0 && (r = Ir(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))) return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - yt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function wm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Sm(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var l = 31 - yt(s),
      a = 1 << l,
      o = i[l];
    o === -1 ? (!(a & n) || a & r) && (i[l] = wm(a, t)) : o <= t && (e.expiredLanes |= a), (s &= ~a);
  }
}
function to(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function vd() {
  var e = Si;
  return (Si <<= 1), !(Si & 4194240) && (Si = 64), e;
}
function il(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ci(e, t, n) {
  (e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - yt(t)), (e[t] = n);
}
function jm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - yt(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function ea(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - yt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var Z = 0;
function _d(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var yd,
  ta,
  xd,
  wd,
  Sd,
  no = !1,
  ki = [],
  tn = null,
  nn = null,
  rn = null,
  qr = new Map(),
  Kr = new Map(),
  Qt = [],
  km =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function hu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      tn = null;
      break;
    case "dragenter":
    case "dragleave":
      nn = null;
      break;
    case "mouseover":
    case "mouseout":
      rn = null;
      break;
    case "pointerover":
    case "pointerout":
      qr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Kr.delete(t.pointerId);
  }
}
function jr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }),
      t !== null && ((t = fi(t)), t !== null && ta(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Em(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (tn = jr(tn, e, t, n, r, i)), !0;
    case "dragenter":
      return (nn = jr(nn, e, t, n, r, i)), !0;
    case "mouseover":
      return (rn = jr(rn, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return qr.set(s, jr(qr.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (s = i.pointerId), Kr.set(s, jr(Kr.get(s) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function jd(e) {
  var t = Sn(e.target);
  if (t !== null) {
    var n = $n(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = dd(n)), t !== null)) {
          (e.blockedOn = t),
            Sd(e.priority, function () {
              xd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ai(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ro(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Xl = r), n.target.dispatchEvent(r), (Xl = null);
    } else return (t = fi(n)), t !== null && ta(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function gu(e, t, n) {
  Ai(e) && n.delete(t);
}
function Cm() {
  (no = !1),
    tn !== null && Ai(tn) && (tn = null),
    nn !== null && Ai(nn) && (nn = null),
    rn !== null && Ai(rn) && (rn = null),
    qr.forEach(gu),
    Kr.forEach(gu);
}
function kr(e, t) {
  e.blockedOn === t && ((e.blockedOn = null), no || ((no = !0), Je.unstable_scheduleCallback(Je.unstable_NormalPriority, Cm)));
}
function Qr(e) {
  function t(i) {
    return kr(i, e);
  }
  if (0 < ki.length) {
    kr(ki[0], e);
    for (var n = 1; n < ki.length; n++) {
      var r = ki[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    tn !== null && kr(tn, e), nn !== null && kr(nn, e), rn !== null && kr(rn, e), qr.forEach(t), Kr.forEach(t), n = 0;
    n < Qt.length;
    n++
  )
    (r = Qt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Qt.length && ((n = Qt[0]), n.blockedOn === null); ) jd(n), n.blockedOn === null && Qt.shift();
}
var rr = Ht.ReactCurrentBatchConfig,
  ts = !0;
function Nm(e, t, n, r) {
  var i = Z,
    s = rr.transition;
  rr.transition = null;
  try {
    (Z = 1), na(e, t, n, r);
  } finally {
    (Z = i), (rr.transition = s);
  }
}
function Tm(e, t, n, r) {
  var i = Z,
    s = rr.transition;
  rr.transition = null;
  try {
    (Z = 4), na(e, t, n, r);
  } finally {
    (Z = i), (rr.transition = s);
  }
}
function na(e, t, n, r) {
  if (ts) {
    var i = ro(e, t, n, r);
    if (i === null) ml(e, t, r, ns, n), hu(e, r);
    else if (Em(i, e, t, n, r)) r.stopPropagation();
    else if ((hu(e, r), t & 4 && -1 < km.indexOf(e))) {
      for (; i !== null; ) {
        var s = fi(i);
        if ((s !== null && yd(s), (s = ro(e, t, n, r)), s === null && ml(e, t, r, ns, n), s === i)) break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else ml(e, t, r, null, n);
  }
}
var ns = null;
function ro(e, t, n, r) {
  if (((ns = null), (e = Zo(r)), (e = Sn(e)), e !== null))
    if (((t = $n(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = dd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ns = e), null;
}
function kd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (hm()) {
        case Jo:
          return 1;
        case hd:
          return 4;
        case Ji:
        case gm:
          return 16;
        case gd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xt = null,
  ra = null,
  Bi = null;
function Ed() {
  if (Bi) return Bi;
  var e,
    t = ra,
    n = t.length,
    r,
    i = "value" in Xt ? Xt.value : Xt.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[s - r]; r++);
  return (Bi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Fi(e) {
  var t = e.keyCode;
  return "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ei() {
  return !0;
}
function vu() {
  return !1;
}
function tt(e) {
  function t(n, r, i, s, l) {
    (this._reactName = n), (this._targetInst = i), (this.type = r), (this.nativeEvent = s), (this.target = l), (this.currentTarget = null);
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Ei : vu),
      (this.isPropagationStopped = vu),
      this
    );
  }
  return (
    ue(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ei));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ei));
      },
      persist: function () {},
      isPersistent: Ei,
    }),
    t
  );
}
var gr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ia = tt(gr),
  di = ue({}, gr, { view: 0, detail: 0 }),
  Pm = tt(di),
  sl,
  ll,
  Er,
  Ms = ue({}, di, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: sa,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Er &&
            (Er && e.type === "mousemove" ? ((sl = e.screenX - Er.screenX), (ll = e.screenY - Er.screenY)) : (ll = sl = 0), (Er = e)),
          sl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ll;
    },
  }),
  _u = tt(Ms),
  bm = ue({}, Ms, { dataTransfer: 0 }),
  Mm = tt(bm),
  Im = ue({}, di, { relatedTarget: 0 }),
  ol = tt(Im),
  Lm = ue({}, gr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $m = tt(Lm),
  Om = ue({}, gr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  zm = tt(Om),
  Rm = ue({}, gr, { data: 0 }),
  yu = tt(Rm),
  Dm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Am = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Bm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Fm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Bm[e]) ? !!t[e] : !1;
}
function sa() {
  return Fm;
}
var Vm = ue({}, di, {
    key: function (e) {
      if (e.key) {
        var t = Dm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Fi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Am[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: sa,
    charCode: function (e) {
      return e.type === "keypress" ? Fi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? Fi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  Hm = tt(Vm),
  Wm = ue({}, Ms, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  xu = tt(Wm),
  Um = ue({}, di, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sa,
  }),
  Gm = tt(Um),
  qm = ue({}, gr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Km = tt(qm),
  Qm = ue({}, Ms, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ym = tt(Qm),
  Xm = [9, 13, 27, 32],
  la = At && "CompositionEvent" in window,
  zr = null;
At && "documentMode" in document && (zr = document.documentMode);
var Zm = At && "TextEvent" in window && !zr,
  Cd = At && (!la || (zr && 8 < zr && 11 >= zr)),
  wu = " ",
  Su = !1;
function Nd(e, t) {
  switch (e) {
    case "keyup":
      return Xm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Td(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Wn = !1;
function Jm(e, t) {
  switch (e) {
    case "compositionend":
      return Td(t);
    case "keypress":
      return t.which !== 32 ? null : ((Su = !0), wu);
    case "textInput":
      return (e = t.data), e === wu && Su ? null : e;
    default:
      return null;
  }
}
function e0(e, t) {
  if (Wn) return e === "compositionend" || (!la && Nd(e, t)) ? ((e = Ed()), (Bi = ra = Xt = null), (Wn = !1), e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Cd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var t0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ju(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!t0[e.type] : t === "textarea";
}
function Pd(e, t, n, r) {
  ld(r), (t = rs(t, "onChange")), 0 < t.length && ((n = new ia("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var Rr = null,
  Yr = null;
function n0(e) {
  Bd(e, 0);
}
function Is(e) {
  var t = qn(e);
  if (Jc(t)) return e;
}
function r0(e, t) {
  if (e === "change") return t;
}
var bd = !1;
if (At) {
  var al;
  if (At) {
    var ul = "oninput" in document;
    if (!ul) {
      var ku = document.createElement("div");
      ku.setAttribute("oninput", "return;"), (ul = typeof ku.oninput == "function");
    }
    al = ul;
  } else al = !1;
  bd = al && (!document.documentMode || 9 < document.documentMode);
}
function Eu() {
  Rr && (Rr.detachEvent("onpropertychange", Md), (Yr = Rr = null));
}
function Md(e) {
  if (e.propertyName === "value" && Is(Yr)) {
    var t = [];
    Pd(t, Yr, e, Zo(e)), cd(n0, t);
  }
}
function i0(e, t, n) {
  e === "focusin" ? (Eu(), (Rr = t), (Yr = n), Rr.attachEvent("onpropertychange", Md)) : e === "focusout" && Eu();
}
function s0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Is(Yr);
}
function l0(e, t) {
  if (e === "click") return Is(t);
}
function o0(e, t) {
  if (e === "input" || e === "change") return Is(t);
}
function a0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var wt = typeof Object.is == "function" ? Object.is : a0;
function Xr(e, t) {
  if (wt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Al.call(t, i) || !wt(e[i], t[i])) return !1;
  }
  return !0;
}
function Cu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Nu(e, t) {
  var n = Cu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Cu(n);
  }
}
function Id(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Id(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ld() {
  for (var e = window, t = Yi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Yi(e.document);
  }
  return t;
}
function oa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function u0(e) {
  var t = Ld(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Id(n.ownerDocument.documentElement, n)) {
    if (r !== null && oa(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)), !e.extend && s > r && ((i = r), (r = s), (s = i)), (i = Nu(n, s));
        var l = Nu(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var c0 = At && "documentMode" in document && 11 >= document.documentMode,
  Un = null,
  io = null,
  Dr = null,
  so = !1;
function Tu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  so ||
    Un == null ||
    Un !== Yi(r) ||
    ((r = Un),
    "selectionStart" in r && oa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })),
    (Dr && Xr(Dr, r)) ||
      ((Dr = r),
      (r = rs(io, "onSelect")),
      0 < r.length && ((t = new ia("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = Un))));
}
function Ci(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var Gn = {
    animationend: Ci("Animation", "AnimationEnd"),
    animationiteration: Ci("Animation", "AnimationIteration"),
    animationstart: Ci("Animation", "AnimationStart"),
    transitionend: Ci("Transition", "TransitionEnd"),
  },
  cl = {},
  $d = {};
At &&
  (($d = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Gn.animationend.animation, delete Gn.animationiteration.animation, delete Gn.animationstart.animation),
  "TransitionEvent" in window || delete Gn.transitionend.transition);
function Ls(e) {
  if (cl[e]) return cl[e];
  if (!Gn[e]) return e;
  var t = Gn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in $d) return (cl[e] = t[n]);
  return e;
}
var Od = Ls("animationend"),
  zd = Ls("animationiteration"),
  Rd = Ls("animationstart"),
  Dd = Ls("transitionend"),
  Ad = new Map(),
  Pu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function pn(e, t) {
  Ad.set(e, t), Ln(t, [e]);
}
for (var dl = 0; dl < Pu.length; dl++) {
  var fl = Pu[dl],
    d0 = fl.toLowerCase(),
    f0 = fl[0].toUpperCase() + fl.slice(1);
  pn(d0, "on" + f0);
}
pn(Od, "onAnimationEnd");
pn(zd, "onAnimationIteration");
pn(Rd, "onAnimationStart");
pn("dblclick", "onDoubleClick");
pn("focusin", "onFocus");
pn("focusout", "onBlur");
pn(Dd, "onTransitionEnd");
ar("onMouseEnter", ["mouseout", "mouseover"]);
ar("onMouseLeave", ["mouseout", "mouseover"]);
ar("onPointerEnter", ["pointerout", "pointerover"]);
ar("onPointerLeave", ["pointerout", "pointerover"]);
Ln("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ln("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ln("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ln("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ln("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Lr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  p0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));
function bu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), dm(r, t, void 0, e), (e.currentTarget = null);
}
function Bd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            o = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), o !== s && i.isPropagationStopped())) break e;
          bu(i, a, c), (s = o);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (((a = r[l]), (o = a.instance), (c = a.currentTarget), (a = a.listener), o !== s && i.isPropagationStopped())) break e;
          bu(i, a, c), (s = o);
        }
    }
  }
  if (Zi) throw ((e = eo), (Zi = !1), (eo = null), e);
}
function ne(e, t) {
  var n = t[co];
  n === void 0 && (n = t[co] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Fd(t, e, 2, !1), n.add(r));
}
function pl(e, t, n) {
  var r = 0;
  t && (r |= 4), Fd(n, e, r, t);
}
var Ni = "_reactListening" + Math.random().toString(36).slice(2);
function Zr(e) {
  if (!e[Ni]) {
    (e[Ni] = !0),
      Kc.forEach(function (n) {
        n !== "selectionchange" && (p0.has(n) || pl(n, !1, e), pl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ni] || ((t[Ni] = !0), pl("selectionchange", !1, t));
  }
}
function Fd(e, t, n, r) {
  switch (kd(t)) {
    case 1:
      var i = Nm;
      break;
    case 4:
      i = Tm;
      break;
    default:
      i = na;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Jl || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function ml(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var o = l.tag;
            if ((o === 3 || o === 4) && ((o = l.stateNode.containerInfo), o === i || (o.nodeType === 8 && o.parentNode === i))) return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = Sn(a)), l === null)) return;
          if (((o = l.tag), o === 5 || o === 6)) {
            r = s = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  cd(function () {
    var c = s,
      f = Zo(n),
      p = [];
    e: {
      var h = Ad.get(e);
      if (h !== void 0) {
        var v = ia,
          _ = e;
        switch (e) {
          case "keypress":
            if (Fi(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Hm;
            break;
          case "focusin":
            (_ = "focus"), (v = ol);
            break;
          case "focusout":
            (_ = "blur"), (v = ol);
            break;
          case "beforeblur":
          case "afterblur":
            v = ol;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = _u;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Mm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Gm;
            break;
          case Od:
          case zd:
          case Rd:
            v = $m;
            break;
          case Dd:
            v = Km;
            break;
          case "scroll":
            v = Pm;
            break;
          case "wheel":
            v = Ym;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = zm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = xu;
        }
        var x = (t & 4) !== 0,
          j = !x && e === "scroll",
          g = x ? (h !== null ? h + "Capture" : null) : h;
        x = [];
        for (var d = c, m; d !== null; ) {
          m = d;
          var y = m.stateNode;
          if ((m.tag === 5 && y !== null && ((m = y), g !== null && ((y = Gr(d, g)), y != null && x.push(Jr(d, y, m)))), j)) break;
          d = d.return;
        }
        0 < x.length && ((h = new v(h, _, null, n, f)), p.push({ event: h, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          h && n !== Xl && (_ = n.relatedTarget || n.fromElement) && (Sn(_) || _[Bt]))
        )
          break e;
        if (
          (v || h) &&
          ((h = f.window === f ? f : (h = f.ownerDocument) ? h.defaultView || h.parentWindow : window),
          v
            ? ((_ = n.relatedTarget || n.toElement),
              (v = c),
              (_ = _ ? Sn(_) : null),
              _ !== null && ((j = $n(_)), _ !== j || (_.tag !== 5 && _.tag !== 6)) && (_ = null))
            : ((v = null), (_ = c)),
          v !== _)
        ) {
          if (
            ((x = _u),
            (y = "onMouseLeave"),
            (g = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") && ((x = xu), (y = "onPointerLeave"), (g = "onPointerEnter"), (d = "pointer")),
            (j = v == null ? h : qn(v)),
            (m = _ == null ? h : qn(_)),
            (h = new x(y, d + "leave", v, n, f)),
            (h.target = j),
            (h.relatedTarget = m),
            (y = null),
            Sn(f) === c && ((x = new x(g, d + "enter", _, n, f)), (x.target = m), (x.relatedTarget = j), (y = x)),
            (j = y),
            v && _)
          )
            t: {
              for (x = v, g = _, d = 0, m = x; m; m = Fn(m)) d++;
              for (m = 0, y = g; y; y = Fn(y)) m++;
              for (; 0 < d - m; ) (x = Fn(x)), d--;
              for (; 0 < m - d; ) (g = Fn(g)), m--;
              for (; d--; ) {
                if (x === g || (g !== null && x === g.alternate)) break t;
                (x = Fn(x)), (g = Fn(g));
              }
              x = null;
            }
          else x = null;
          v !== null && Mu(p, h, v, x, !1), _ !== null && j !== null && Mu(p, j, _, x, !0);
        }
      }
      e: {
        if (
          ((h = c ? qn(c) : window), (v = h.nodeName && h.nodeName.toLowerCase()), v === "select" || (v === "input" && h.type === "file"))
        )
          var w = r0;
        else if (ju(h))
          if (bd) w = o0;
          else {
            w = s0;
            var C = i0;
          }
        else (v = h.nodeName) && v.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (w = l0);
        if (w && (w = w(e, c))) {
          Pd(p, w, n, f);
          break e;
        }
        C && C(e, h, c), e === "focusout" && (C = h._wrapperState) && C.controlled && h.type === "number" && Gl(h, "number", h.value);
      }
      switch (((C = c ? qn(c) : window), e)) {
        case "focusin":
          (ju(C) || C.contentEditable === "true") && ((Un = C), (io = c), (Dr = null));
          break;
        case "focusout":
          Dr = io = Un = null;
          break;
        case "mousedown":
          so = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (so = !1), Tu(p, n, f);
          break;
        case "selectionchange":
          if (c0) break;
        case "keydown":
        case "keyup":
          Tu(p, n, f);
      }
      var P;
      if (la)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else Wn ? Nd(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Cd &&
          n.locale !== "ko" &&
          (Wn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Wn && (P = Ed())
            : ((Xt = f), (ra = "value" in Xt ? Xt.value : Xt.textContent), (Wn = !0))),
        (C = rs(c, T)),
        0 < C.length &&
          ((T = new yu(T, e, null, n, f)),
          p.push({ event: T, listeners: C }),
          P ? (T.data = P) : ((P = Td(n)), P !== null && (T.data = P)))),
        (P = Zm ? Jm(e, n) : e0(e, n)) &&
          ((c = rs(c, "onBeforeInput")),
          0 < c.length && ((f = new yu("onBeforeInput", "beforeinput", null, n, f)), p.push({ event: f, listeners: c }), (f.data = P)));
    }
    Bd(p, t);
  });
}
function Jr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function rs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s), (s = Gr(e, n)), s != null && r.unshift(Jr(e, s, i)), (s = Gr(e, t)), s != null && r.push(Jr(e, s, i))),
      (e = e.return);
  }
  return r;
}
function Fn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Mu(e, t, n, r, i) {
  for (var s = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      o = a.alternate,
      c = a.stateNode;
    if (o !== null && o === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c), i ? ((o = Gr(n, s)), o != null && l.unshift(Jr(n, o, a))) : i || ((o = Gr(n, s)), o != null && l.push(Jr(n, o, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var m0 = /\r\n?/g,
  h0 = /\u0000|\uFFFD/g;
function Iu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      m0,
      `
`
    )
    .replace(h0, "");
}
function Ti(e, t, n) {
  if (((t = Iu(t)), Iu(e) !== t && n)) throw Error($(425));
}
function is() {}
var lo = null,
  oo = null;
function ao(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
  );
}
var uo = typeof setTimeout == "function" ? setTimeout : void 0,
  g0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Lu = typeof Promise == "function" ? Promise : void 0,
  v0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Lu < "u"
      ? function (e) {
          return Lu.resolve(null).then(e).catch(_0);
        }
      : uo;
function _0(e) {
  setTimeout(function () {
    throw e;
  });
}
function hl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Qr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Qr(t);
}
function sn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function $u(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var vr = Math.random().toString(36).slice(2),
  Et = "__reactFiber$" + vr,
  ei = "__reactProps$" + vr,
  Bt = "__reactContainer$" + vr,
  co = "__reactEvents$" + vr,
  y0 = "__reactListeners$" + vr,
  x0 = "__reactHandles$" + vr;
function Sn(e) {
  var t = e[Et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Bt] || n[Et])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = $u(e); e !== null; ) {
          if ((n = e[Et])) return n;
          e = $u(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function fi(e) {
  return (e = e[Et] || e[Bt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function qn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error($(33));
}
function $s(e) {
  return e[ei] || null;
}
var fo = [],
  Kn = -1;
function mn(e) {
  return { current: e };
}
function re(e) {
  0 > Kn || ((e.current = fo[Kn]), (fo[Kn] = null), Kn--);
}
function te(e, t) {
  Kn++, (fo[Kn] = e.current), (e.current = t);
}
var fn = {},
  $e = mn(fn),
  Ge = mn(!1),
  Nn = fn;
function ur(e, t) {
  var n = e.type.contextTypes;
  if (!n) return fn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = i)), i
  );
}
function qe(e) {
  return (e = e.childContextTypes), e != null;
}
function ss() {
  re(Ge), re($e);
}
function Ou(e, t, n) {
  if ($e.current !== fn) throw Error($(168));
  te($e, t), te(Ge, n);
}
function Vd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error($(108, im(e) || "Unknown", i));
  return ue({}, n, r);
}
function ls(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || fn), (Nn = $e.current), te($e, e), te(Ge, Ge.current), !0
  );
}
function zu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error($(169));
  n ? ((e = Vd(e, t, Nn)), (r.__reactInternalMemoizedMergedChildContext = e), re(Ge), re($e), te($e, e)) : re(Ge), te(Ge, n);
}
var Ot = null,
  Os = !1,
  gl = !1;
function Hd(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e);
}
function w0(e) {
  (Os = !0), Hd(e);
}
function hn() {
  if (!gl && Ot !== null) {
    gl = !0;
    var e = 0,
      t = Z;
    try {
      var n = Ot;
      for (Z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ot = null), (Os = !1);
    } catch (i) {
      throw (Ot !== null && (Ot = Ot.slice(e + 1)), md(Jo, hn), i);
    } finally {
      (Z = t), (gl = !1);
    }
  }
  return null;
}
var Qn = [],
  Yn = 0,
  os = null,
  as = 0,
  it = [],
  st = 0,
  Tn = null,
  zt = 1,
  Rt = "";
function yn(e, t) {
  (Qn[Yn++] = as), (Qn[Yn++] = os), (os = e), (as = t);
}
function Wd(e, t, n) {
  (it[st++] = zt), (it[st++] = Rt), (it[st++] = Tn), (Tn = e);
  var r = zt;
  e = Rt;
  var i = 32 - yt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - yt(t) + i;
  if (30 < s) {
    var l = i - (i % 5);
    (s = (r & ((1 << l) - 1)).toString(32)), (r >>= l), (i -= l), (zt = (1 << (32 - yt(t) + i)) | (n << i) | r), (Rt = s + e);
  } else (zt = (1 << s) | (n << i) | r), (Rt = e);
}
function aa(e) {
  e.return !== null && (yn(e, 1), Wd(e, 1, 0));
}
function ua(e) {
  for (; e === os; ) (os = Qn[--Yn]), (Qn[Yn] = null), (as = Qn[--Yn]), (Qn[Yn] = null);
  for (; e === Tn; ) (Tn = it[--st]), (it[st] = null), (Rt = it[--st]), (it[st] = null), (zt = it[--st]), (it[st] = null);
}
var Ze = null,
  Xe = null,
  se = !1,
  _t = null;
function Ud(e, t) {
  var n = lt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ru(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Ze = e), (Xe = sn(t.firstChild)), !0) : !1
      );
    case 6:
      return (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (Ze = e), (Xe = null), !0) : !1;
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Tn !== null ? { id: zt, overflow: Rt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = lt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ze = e),
            (Xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function po(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function mo(e) {
  if (se) {
    var t = Xe;
    if (t) {
      var n = t;
      if (!Ru(e, t)) {
        if (po(e)) throw Error($(418));
        t = sn(n.nextSibling);
        var r = Ze;
        t && Ru(e, t) ? Ud(r, n) : ((e.flags = (e.flags & -4097) | 2), (se = !1), (Ze = e));
      }
    } else {
      if (po(e)) throw Error($(418));
      (e.flags = (e.flags & -4097) | 2), (se = !1), (Ze = e);
    }
  }
}
function Du(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ze = e;
}
function Pi(e) {
  if (e !== Ze) return !1;
  if (!se) return Du(e), (se = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== "head" && t !== "body" && !ao(e.type, e.memoizedProps))),
    t && (t = Xe))
  ) {
    if (po(e)) throw (Gd(), Error($(418)));
    for (; t; ) Ud(e, t), (t = sn(t.nextSibling));
  }
  if ((Du(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error($(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Xe = sn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Xe = null;
    }
  } else Xe = Ze ? sn(e.stateNode.nextSibling) : null;
  return !0;
}
function Gd() {
  for (var e = Xe; e; ) e = sn(e.nextSibling);
}
function cr() {
  (Xe = Ze = null), (se = !1);
}
function ca(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
var S0 = Ht.ReactCurrentBatchConfig;
function Cr(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error($(309));
        var r = n.stateNode;
      }
      if (!r) throw Error($(147, e));
      var i = r,
        s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s
        ? t.ref
        : ((t = function (l) {
            var a = i.refs;
            l === null ? delete a[s] : (a[s] = l);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error($(284));
    if (!n._owner) throw Error($(290, e));
  }
  return e;
}
function bi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error($(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
  );
}
function Au(e) {
  var t = e._init;
  return t(e._payload);
}
function qd(e) {
  function t(g, d) {
    if (e) {
      var m = g.deletions;
      m === null ? ((g.deletions = [d]), (g.flags |= 16)) : m.push(d);
    }
  }
  function n(g, d) {
    if (!e) return null;
    for (; d !== null; ) t(g, d), (d = d.sibling);
    return null;
  }
  function r(g, d) {
    for (g = new Map(); d !== null; ) d.key !== null ? g.set(d.key, d) : g.set(d.index, d), (d = d.sibling);
    return g;
  }
  function i(g, d) {
    return (g = un(g, d)), (g.index = 0), (g.sibling = null), g;
  }
  function s(g, d, m) {
    return (
      (g.index = m),
      e
        ? ((m = g.alternate), m !== null ? ((m = m.index), m < d ? ((g.flags |= 2), d) : m) : ((g.flags |= 2), d))
        : ((g.flags |= 1048576), d)
    );
  }
  function l(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, d, m, y) {
    return d === null || d.tag !== 6 ? ((d = jl(m, g.mode, y)), (d.return = g), d) : ((d = i(d, m)), (d.return = g), d);
  }
  function o(g, d, m, y) {
    var w = m.type;
    return w === Hn
      ? f(g, d, m.props.children, y, m.key)
      : d !== null && (d.elementType === w || (typeof w == "object" && w !== null && w.$$typeof === qt && Au(w) === d.type))
      ? ((y = i(d, m.props)), (y.ref = Cr(g, d, m)), (y.return = g), y)
      : ((y = Ki(m.type, m.key, m.props, null, g.mode, y)), (y.ref = Cr(g, d, m)), (y.return = g), y);
  }
  function c(g, d, m, y) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== m.containerInfo || d.stateNode.implementation !== m.implementation
      ? ((d = kl(m, g.mode, y)), (d.return = g), d)
      : ((d = i(d, m.children || [])), (d.return = g), d);
  }
  function f(g, d, m, y, w) {
    return d === null || d.tag !== 7 ? ((d = Cn(m, g.mode, y, w)), (d.return = g), d) : ((d = i(d, m)), (d.return = g), d);
  }
  function p(g, d, m) {
    if ((typeof d == "string" && d !== "") || typeof d == "number") return (d = jl("" + d, g.mode, m)), (d.return = g), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case yi:
          return (m = Ki(d.type, d.key, d.props, null, g.mode, m)), (m.ref = Cr(g, null, d)), (m.return = g), m;
        case Vn:
          return (d = kl(d, g.mode, m)), (d.return = g), d;
        case qt:
          var y = d._init;
          return p(g, y(d._payload), m);
      }
      if (Mr(d) || wr(d)) return (d = Cn(d, g.mode, m, null)), (d.return = g), d;
      bi(g, d);
    }
    return null;
  }
  function h(g, d, m, y) {
    var w = d !== null ? d.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number") return w !== null ? null : a(g, d, "" + m, y);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case yi:
          return m.key === w ? o(g, d, m, y) : null;
        case Vn:
          return m.key === w ? c(g, d, m, y) : null;
        case qt:
          return (w = m._init), h(g, d, w(m._payload), y);
      }
      if (Mr(m) || wr(m)) return w !== null ? null : f(g, d, m, y, null);
      bi(g, m);
    }
    return null;
  }
  function v(g, d, m, y, w) {
    if ((typeof y == "string" && y !== "") || typeof y == "number") return (g = g.get(m) || null), a(d, g, "" + y, w);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case yi:
          return (g = g.get(y.key === null ? m : y.key) || null), o(d, g, y, w);
        case Vn:
          return (g = g.get(y.key === null ? m : y.key) || null), c(d, g, y, w);
        case qt:
          var C = y._init;
          return v(g, d, m, C(y._payload), w);
      }
      if (Mr(y) || wr(y)) return (g = g.get(m) || null), f(d, g, y, w, null);
      bi(d, y);
    }
    return null;
  }
  function _(g, d, m, y) {
    for (var w = null, C = null, P = d, T = (d = 0), b = null; P !== null && T < m.length; T++) {
      P.index > T ? ((b = P), (P = null)) : (b = P.sibling);
      var k = h(g, P, m[T], y);
      if (k === null) {
        P === null && (P = b);
        break;
      }
      e && P && k.alternate === null && t(g, P), (d = s(k, d, T)), C === null ? (w = k) : (C.sibling = k), (C = k), (P = b);
    }
    if (T === m.length) return n(g, P), se && yn(g, T), w;
    if (P === null) {
      for (; T < m.length; T++) (P = p(g, m[T], y)), P !== null && ((d = s(P, d, T)), C === null ? (w = P) : (C.sibling = P), (C = P));
      return se && yn(g, T), w;
    }
    for (P = r(g, P); T < m.length; T++)
      (b = v(P, g, T, m[T], y)),
        b !== null &&
          (e && b.alternate !== null && P.delete(b.key === null ? T : b.key),
          (d = s(b, d, T)),
          C === null ? (w = b) : (C.sibling = b),
          (C = b));
    return (
      e &&
        P.forEach(function (I) {
          return t(g, I);
        }),
      se && yn(g, T),
      w
    );
  }
  function x(g, d, m, y) {
    var w = wr(m);
    if (typeof w != "function") throw Error($(150));
    if (((m = w.call(m)), m == null)) throw Error($(151));
    for (var C = (w = null), P = d, T = (d = 0), b = null, k = m.next(); P !== null && !k.done; T++, k = m.next()) {
      P.index > T ? ((b = P), (P = null)) : (b = P.sibling);
      var I = h(g, P, k.value, y);
      if (I === null) {
        P === null && (P = b);
        break;
      }
      e && P && I.alternate === null && t(g, P), (d = s(I, d, T)), C === null ? (w = I) : (C.sibling = I), (C = I), (P = b);
    }
    if (k.done) return n(g, P), se && yn(g, T), w;
    if (P === null) {
      for (; !k.done; T++, k = m.next())
        (k = p(g, k.value, y)), k !== null && ((d = s(k, d, T)), C === null ? (w = k) : (C.sibling = k), (C = k));
      return se && yn(g, T), w;
    }
    for (P = r(g, P); !k.done; T++, k = m.next())
      (k = v(P, g, T, k.value, y)),
        k !== null &&
          (e && k.alternate !== null && P.delete(k.key === null ? T : k.key),
          (d = s(k, d, T)),
          C === null ? (w = k) : (C.sibling = k),
          (C = k));
    return (
      e &&
        P.forEach(function (z) {
          return t(g, z);
        }),
      se && yn(g, T),
      w
    );
  }
  function j(g, d, m, y) {
    if (
      (typeof m == "object" && m !== null && m.type === Hn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case yi:
          e: {
            for (var w = m.key, C = d; C !== null; ) {
              if (C.key === w) {
                if (((w = m.type), w === Hn)) {
                  if (C.tag === 7) {
                    n(g, C.sibling), (d = i(C, m.props.children)), (d.return = g), (g = d);
                    break e;
                  }
                } else if (C.elementType === w || (typeof w == "object" && w !== null && w.$$typeof === qt && Au(w) === C.type)) {
                  n(g, C.sibling), (d = i(C, m.props)), (d.ref = Cr(g, C, m)), (d.return = g), (g = d);
                  break e;
                }
                n(g, C);
                break;
              } else t(g, C);
              C = C.sibling;
            }
            m.type === Hn
              ? ((d = Cn(m.props.children, g.mode, y, m.key)), (d.return = g), (g = d))
              : ((y = Ki(m.type, m.key, m.props, null, g.mode, y)), (y.ref = Cr(g, d, m)), (y.return = g), (g = y));
          }
          return l(g);
        case Vn:
          e: {
            for (C = m.key; d !== null; ) {
              if (d.key === C)
                if (d.tag === 4 && d.stateNode.containerInfo === m.containerInfo && d.stateNode.implementation === m.implementation) {
                  n(g, d.sibling), (d = i(d, m.children || [])), (d.return = g), (g = d);
                  break e;
                } else {
                  n(g, d);
                  break;
                }
              else t(g, d);
              d = d.sibling;
            }
            (d = kl(m, g.mode, y)), (d.return = g), (g = d);
          }
          return l(g);
        case qt:
          return (C = m._init), j(g, d, C(m._payload), y);
      }
      if (Mr(m)) return _(g, d, m, y);
      if (wr(m)) return x(g, d, m, y);
      bi(g, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        d !== null && d.tag === 6
          ? (n(g, d.sibling), (d = i(d, m)), (d.return = g), (g = d))
          : (n(g, d), (d = jl(m, g.mode, y)), (d.return = g), (g = d)),
        l(g))
      : n(g, d);
  }
  return j;
}
var dr = qd(!0),
  Kd = qd(!1),
  us = mn(null),
  cs = null,
  Xn = null,
  da = null;
function fa() {
  da = Xn = cs = null;
}
function pa(e) {
  var t = us.current;
  re(us), (e._currentValue = t);
}
function ho(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ir(e, t) {
  (cs = e),
    (da = Xn = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Ue = !0), (e.firstContext = null));
}
function ut(e) {
  var t = e._currentValue;
  if (da !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Xn === null)) {
      if (cs === null) throw Error($(308));
      (Xn = e), (cs.dependencies = { lanes: 0, firstContext: e });
    } else Xn = Xn.next = e;
  return t;
}
var jn = null;
function ma(e) {
  jn === null ? (jn = [e]) : jn.push(e);
}
function Qd(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? ((n.next = n), ma(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), Ft(e, r);
}
function Ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Kt = !1;
function ha(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Yd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Dt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ln(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), q & 2)) {
    var i = r.pending;
    return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), Ft(e, n);
  }
  return (i = r.interleaved), i === null ? ((t.next = t), ma(r)) : ((t.next = i.next), (i.next = t)), (r.interleaved = t), Ft(e, n);
}
function Vi(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ea(e, n);
  }
}
function Bu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        s === null ? (i = s = l) : (s = s.next = l), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: s, shared: r.shared, effects: r.effects }), (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function ds(e, t, n, r) {
  var i = e.updateQueue;
  Kt = !1;
  var s = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var o = a,
      c = o.next;
    (o.next = null), l === null ? (s = c) : (l.next = c), (l = o);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== l && (a === null ? (f.firstBaseUpdate = c) : (a.next = c), (f.lastBaseUpdate = o)));
  }
  if (s !== null) {
    var p = i.baseState;
    (l = 0), (f = c = o = null), (a = s);
    do {
      var h = a.lane,
        v = a.eventTime;
      if ((r & h) === h) {
        f !== null && (f = f.next = { eventTime: v, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
        e: {
          var _ = e,
            x = a;
          switch (((h = t), (v = n), x.tag)) {
            case 1:
              if (((_ = x.payload), typeof _ == "function")) {
                p = _.call(v, p, h);
                break e;
              }
              p = _;
              break e;
            case 3:
              _.flags = (_.flags & -65537) | 128;
            case 0:
              if (((_ = x.payload), (h = typeof _ == "function" ? _.call(v, p, h) : _), h == null)) break e;
              p = ue({}, p, h);
              break e;
            case 2:
              Kt = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && ((e.flags |= 64), (h = i.effects), h === null ? (i.effects = [a]) : h.push(a));
      } else
        (v = { eventTime: v, lane: h, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
          f === null ? ((c = f = v), (o = p)) : (f = f.next = v),
          (l |= h);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (h = a), (a = h.next), (h.next = null), (i.lastBaseUpdate = h), (i.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (o = p), (i.baseState = o), (i.firstBaseUpdate = c), (i.lastBaseUpdate = f), (t = i.shared.interleaved), t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (bn |= l), (e.lanes = l), (e.memoizedState = p);
  }
}
function Fu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function")) throw Error($(191, i));
        i.call(r);
      }
    }
}
var pi = {},
  Nt = mn(pi),
  ti = mn(pi),
  ni = mn(pi);
function kn(e) {
  if (e === pi) throw Error($(174));
  return e;
}
function ga(e, t) {
  switch ((te(ni, t), te(ti, e), te(Nt, pi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Kl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Kl(t, e));
  }
  re(Nt), te(Nt, t);
}
function fr() {
  re(Nt), re(ti), re(ni);
}
function Xd(e) {
  kn(ni.current);
  var t = kn(Nt.current),
    n = Kl(t, e.type);
  t !== n && (te(ti, e), te(Nt, n));
}
function va(e) {
  ti.current === e && (re(Nt), re(ti));
}
var oe = mn(0);
function fs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var vl = [];
function _a() {
  for (var e = 0; e < vl.length; e++) vl[e]._workInProgressVersionPrimary = null;
  vl.length = 0;
}
var Hi = Ht.ReactCurrentDispatcher,
  _l = Ht.ReactCurrentBatchConfig,
  Pn = 0,
  ae = null,
  ye = null,
  je = null,
  ps = !1,
  Ar = !1,
  ri = 0,
  j0 = 0;
function be() {
  throw Error($(321));
}
function ya(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!wt(e[n], t[n])) return !1;
  return !0;
}
function xa(e, t, n, r, i, s) {
  if (
    ((Pn = s),
    (ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Hi.current = e === null || e.memoizedState === null ? N0 : T0),
    (e = n(r, i)),
    Ar)
  ) {
    s = 0;
    do {
      if (((Ar = !1), (ri = 0), 25 <= s)) throw Error($(301));
      (s += 1), (je = ye = null), (t.updateQueue = null), (Hi.current = P0), (e = n(r, i));
    } while (Ar);
  }
  if (((Hi.current = ms), (t = ye !== null && ye.next !== null), (Pn = 0), (je = ye = ae = null), (ps = !1), t)) throw Error($(300));
  return e;
}
function wa() {
  var e = ri !== 0;
  return (ri = 0), e;
}
function kt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return je === null ? (ae.memoizedState = je = e) : (je = je.next = e), je;
}
function ct() {
  if (ye === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ye.next;
  var t = je === null ? ae.memoizedState : je.next;
  if (t !== null) (je = t), (ye = e);
  else {
    if (e === null) throw Error($(310));
    (ye = e),
      (e = { memoizedState: ye.memoizedState, baseState: ye.baseState, baseQueue: ye.baseQueue, queue: ye.queue, next: null }),
      je === null ? (ae.memoizedState = je = e) : (je = je.next = e);
  }
  return je;
}
function ii(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yl(e) {
  var t = ct(),
    n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = ye,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = s.next), (s.next = l);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (l = null),
      o = null,
      c = s;
    do {
      var f = c.lane;
      if ((Pn & f) === f)
        o !== null && (o = o.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var p = { lane: f, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
        o === null ? ((a = o = p), (l = r)) : (o = o.next = p), (ae.lanes |= f), (bn |= f);
      }
      c = c.next;
    } while (c !== null && c !== s);
    o === null ? (l = r) : (o.next = a),
      wt(r, t.memoizedState) || (Ue = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = o),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (ae.lanes |= s), (bn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function xl(e) {
  var t = ct(),
    n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (s = e(s, l.action)), (l = l.next);
    while (l !== i);
    wt(s, t.memoizedState) || (Ue = !0), (t.memoizedState = s), t.baseQueue === null && (t.baseState = s), (n.lastRenderedState = s);
  }
  return [s, r];
}
function Zd() {}
function Jd(e, t) {
  var n = ae,
    r = ct(),
    i = t(),
    s = !wt(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Ue = !0)),
    (r = r.queue),
    Sa(nf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (je !== null && je.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), si(9, tf.bind(null, n, r, i, t), void 0, null), ke === null)) throw Error($(349));
    Pn & 30 || ef(n, t, i);
  }
  return i;
}
function ef(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ae.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function tf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), rf(t) && sf(e);
}
function nf(e, t, n) {
  return n(function () {
    rf(t) && sf(e);
  });
}
function rf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !wt(e, n);
  } catch {
    return !0;
  }
}
function sf(e) {
  var t = Ft(e, 1);
  t !== null && xt(t, e, 1, -1);
}
function Vu(e) {
  var t = kt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ii, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = C0.bind(null, ae, e)),
    [t.memoizedState, e]
  );
}
function si(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ae.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function lf() {
  return ct().memoizedState;
}
function Wi(e, t, n, r) {
  var i = kt();
  (ae.flags |= e), (i.memoizedState = si(1 | t, n, void 0, r === void 0 ? null : r));
}
function zs(e, t, n, r) {
  var i = ct();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ye !== null) {
    var l = ye.memoizedState;
    if (((s = l.destroy), r !== null && ya(r, l.deps))) {
      i.memoizedState = si(t, n, s, r);
      return;
    }
  }
  (ae.flags |= e), (i.memoizedState = si(1 | t, n, s, r));
}
function Hu(e, t) {
  return Wi(8390656, 8, e, t);
}
function Sa(e, t) {
  return zs(2048, 8, e, t);
}
function of(e, t) {
  return zs(4, 2, e, t);
}
function af(e, t) {
  return zs(4, 4, e, t);
}
function uf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function cf(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), zs(4, 4, uf.bind(null, t, e), n);
}
function ja() {}
function df(e, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ya(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function ff(e, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ya(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function pf(e, t, n) {
  return Pn & 21
    ? (wt(n, t) || ((n = vd()), (ae.lanes |= n), (bn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = n));
}
function k0(e, t) {
  var n = Z;
  (Z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = _l.transition;
  _l.transition = {};
  try {
    e(!1), t();
  } finally {
    (Z = n), (_l.transition = r);
  }
}
function mf() {
  return ct().memoizedState;
}
function E0(e, t, n) {
  var r = an(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), hf(e))) gf(t, n);
  else if (((n = Qd(e, t, n, r)), n !== null)) {
    var i = Be();
    xt(n, e, r, i), vf(n, t, r);
  }
}
function C0(e, t, n) {
  var r = an(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (hf(e)) gf(t, i);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && ((s = t.lastRenderedReducer), s !== null))
      try {
        var l = t.lastRenderedState,
          a = s(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), wt(a, l))) {
          var o = t.interleaved;
          o === null ? ((i.next = i), ma(t)) : ((i.next = o.next), (o.next = i)), (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Qd(e, t, i, r)), n !== null && ((i = Be()), xt(n, e, r, i), vf(n, t, r));
  }
}
function hf(e) {
  var t = e.alternate;
  return e === ae || (t !== null && t === ae);
}
function gf(e, t) {
  Ar = ps = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function vf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ea(e, n);
  }
}
var ms = {
    readContext: ut,
    useCallback: be,
    useContext: be,
    useEffect: be,
    useImperativeHandle: be,
    useInsertionEffect: be,
    useLayoutEffect: be,
    useMemo: be,
    useReducer: be,
    useRef: be,
    useState: be,
    useDebugValue: be,
    useDeferredValue: be,
    useTransition: be,
    useMutableSource: be,
    useSyncExternalStore: be,
    useId: be,
    unstable_isNewReconciler: !1,
  },
  N0 = {
    readContext: ut,
    useCallback: function (e, t) {
      return (kt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ut,
    useEffect: Hu,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Wi(4194308, 4, uf.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Wi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Wi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = kt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = kt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
        (r.queue = e),
        (e = e.dispatch = E0.bind(null, ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = kt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Vu,
    useDebugValue: ja,
    useDeferredValue: function (e) {
      return (kt().memoizedState = e);
    },
    useTransition: function () {
      var e = Vu(!1),
        t = e[0];
      return (e = k0.bind(null, e[1])), (kt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ae,
        i = kt();
      if (se) {
        if (n === void 0) throw Error($(407));
        n = n();
      } else {
        if (((n = t()), ke === null)) throw Error($(349));
        Pn & 30 || ef(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (i.queue = s), Hu(nf.bind(null, r, s, e), [e]), (r.flags |= 2048), si(9, tf.bind(null, r, s, n, t), void 0, null), n;
    },
    useId: function () {
      var e = kt(),
        t = ke.identifierPrefix;
      if (se) {
        var n = Rt,
          r = zt;
        (n = (r & ~(1 << (32 - yt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ri++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = j0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  T0 = {
    readContext: ut,
    useCallback: df,
    useContext: ut,
    useEffect: Sa,
    useImperativeHandle: cf,
    useInsertionEffect: of,
    useLayoutEffect: af,
    useMemo: ff,
    useReducer: yl,
    useRef: lf,
    useState: function () {
      return yl(ii);
    },
    useDebugValue: ja,
    useDeferredValue: function (e) {
      var t = ct();
      return pf(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = yl(ii)[0],
        t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Zd,
    useSyncExternalStore: Jd,
    useId: mf,
    unstable_isNewReconciler: !1,
  },
  P0 = {
    readContext: ut,
    useCallback: df,
    useContext: ut,
    useEffect: Sa,
    useImperativeHandle: cf,
    useInsertionEffect: of,
    useLayoutEffect: af,
    useMemo: ff,
    useReducer: xl,
    useRef: lf,
    useState: function () {
      return xl(ii);
    },
    useDebugValue: ja,
    useDeferredValue: function (e) {
      var t = ct();
      return ye === null ? (t.memoizedState = e) : pf(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = xl(ii)[0],
        t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Zd,
    useSyncExternalStore: Jd,
    useId: mf,
    unstable_isNewReconciler: !1,
  };
function gt(e, t) {
  if (e && e.defaultProps) {
    (t = ue({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function go(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ue({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Rs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? $n(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      i = an(e),
      s = Dt(r, i);
    (s.payload = t), n != null && (s.callback = n), (t = ln(e, s, i)), t !== null && (xt(t, e, i, r), Vi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      i = an(e),
      s = Dt(r, i);
    (s.tag = 1), (s.payload = t), n != null && (s.callback = n), (t = ln(e, s, i)), t !== null && (xt(t, e, i, r), Vi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Be(),
      r = an(e),
      i = Dt(n, r);
    (i.tag = 2), t != null && (i.callback = t), (t = ln(e, i, r)), t !== null && (xt(t, e, r, n), Vi(t, e, r));
  },
};
function Wu(e, t, n, r, i, s, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Xr(n, r) || !Xr(i, s)
      : !0
  );
}
function _f(e, t, n) {
  var r = !1,
    i = fn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = ut(s))
      : ((i = qe(t) ? Nn : $e.current), (r = t.contextTypes), (s = (r = r != null) ? ur(e, i) : fn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Rs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = i), (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Uu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Rs.enqueueReplaceState(t, t.state, null);
}
function vo(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), ha(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? (i.context = ut(s)) : ((s = qe(t) ? Nn : $e.current), (i.context = ur(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (go(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
      t !== i.state && Rs.enqueueReplaceState(i, i.state, null),
      ds(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function pr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += rm(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function wl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function _o(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var b0 = typeof WeakMap == "function" ? WeakMap : Map;
function yf(e, t, n) {
  (n = Dt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      gs || ((gs = !0), (To = r)), _o(e, t);
    }),
    n
  );
}
function xf(e, t, n) {
  (n = Dt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        _o(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        _o(e, t), typeof r != "function" && (on === null ? (on = new Set([this])) : on.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
      }),
    n
  );
}
function Gu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new b0();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = W0.bind(null, e, t, n)), t.then(e, e));
}
function qu(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ku(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Dt(-1, 1)), (t.tag = 2), ln(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var M0 = Ht.ReactCurrentOwner,
  Ue = !1;
function Ae(e, t, n, r) {
  t.child = e === null ? Kd(t, null, n, r) : dr(t, e.child, n, r);
}
function Qu(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    ir(t, i),
    (r = xa(e, t, n, r, s, i)),
    (n = wa()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Vt(e, t, i))
      : (se && n && aa(t), (t.flags |= 1), Ae(e, t, r, i), t.child)
  );
}
function Yu(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !Ma(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), wf(e, t, s, r, i))
      : ((e = Ki(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var l = s.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Xr), n(l, r) && e.ref === t.ref)) return Vt(e, t, i);
  }
  return (t.flags |= 1), (e = un(s, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function wf(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Xr(s, r) && e.ref === t.ref)
      if (((Ue = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0)) e.flags & 131072 && (Ue = !0);
      else return (t.lanes = e.lanes), Vt(e, t, i);
  }
  return yo(e, t, n, r, i);
}
function Sf(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), te(Jn, Qe), (Qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          te(Jn, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = s !== null ? s.baseLanes : n), te(Jn, Qe), (Qe |= r);
    }
  else s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n), te(Jn, Qe), (Qe |= r);
  return Ae(e, t, i, n), t.child;
}
function jf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function yo(e, t, n, r, i) {
  var s = qe(n) ? Nn : $e.current;
  return (
    (s = ur(t, s)),
    ir(t, i),
    (n = xa(e, t, n, r, s, i)),
    (r = wa()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Vt(e, t, i))
      : (se && r && aa(t), (t.flags |= 1), Ae(e, t, n, i), t.child)
  );
}
function Xu(e, t, n, r, i) {
  if (qe(n)) {
    var s = !0;
    ls(t);
  } else s = !1;
  if ((ir(t, i), t.stateNode === null)) Ui(e, t), _f(t, n, r), vo(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var o = l.context,
      c = n.contextType;
    typeof c == "object" && c !== null ? (c = ut(c)) : ((c = qe(n) ? Nn : $e.current), (c = ur(t, c)));
    var f = n.getDerivedStateFromProps,
      p = typeof f == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || o !== c) && Uu(t, l, r, c)),
      (Kt = !1);
    var h = t.memoizedState;
    (l.state = h),
      ds(t, r, l, i),
      (o = t.memoizedState),
      a !== r || h !== o || Ge.current || Kt
        ? (typeof f == "function" && (go(t, n, f, r), (o = t.memoizedState)),
          (a = Kt || Wu(t, n, a, r, h, o, c))
            ? (p ||
                (typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" && l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = o)),
          (l.props = r),
          (l.state = o),
          (l.context = c),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
  } else {
    (l = t.stateNode),
      Yd(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : gt(t.type, a)),
      (l.props = c),
      (p = t.pendingProps),
      (h = l.context),
      (o = n.contextType),
      typeof o == "object" && o !== null ? (o = ut(o)) : ((o = qe(n) ? Nn : $e.current), (o = ur(t, o)));
    var v = n.getDerivedStateFromProps;
    (f = typeof v == "function" || typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function") ||
      ((a !== p || h !== o) && Uu(t, l, r, o)),
      (Kt = !1),
      (h = t.memoizedState),
      (l.state = h),
      ds(t, r, l, i);
    var _ = t.memoizedState;
    a !== p || h !== _ || Ge.current || Kt
      ? (typeof v == "function" && (go(t, n, v, r), (_ = t.memoizedState)),
        (c = Kt || Wu(t, n, c, r, h, _, o) || !1)
          ? (f ||
              (typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, _, o),
              typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, _, o)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" || (a === e.memoizedProps && h === e.memoizedState) || (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" || (a === e.memoizedProps && h === e.memoizedState) || (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = _)),
        (l.props = r),
        (l.state = _),
        (l.context = o),
        (r = c))
      : (typeof l.componentDidUpdate != "function" || (a === e.memoizedProps && h === e.memoizedState) || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || (a === e.memoizedProps && h === e.memoizedState) || (t.flags |= 1024),
        (r = !1));
  }
  return xo(e, t, n, r, s, i);
}
function xo(e, t, n, r, i, s) {
  jf(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && zu(t, n, !1), Vt(e, t, s);
  (r = t.stateNode), (M0.current = t);
  var a = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l ? ((t.child = dr(t, e.child, null, s)), (t.child = dr(t, null, a, s))) : Ae(e, t, a, s),
    (t.memoizedState = r.state),
    i && zu(t, n, !0),
    t.child
  );
}
function kf(e) {
  var t = e.stateNode;
  t.pendingContext ? Ou(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ou(e, t.context, !1), ga(e, t.containerInfo);
}
function Zu(e, t, n, r, i) {
  return cr(), ca(i), (t.flags |= 256), Ae(e, t, n, r), t.child;
}
var wo = { dehydrated: null, treeContext: null, retryLane: 0 };
function So(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ef(e, t, n) {
  var r = t.pendingProps,
    i = oe.current,
    s = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? ((s = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
    te(oe, i & 1),
    e === null)
  )
    return (
      mo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((l = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && s !== null ? ((s.childLanes = 0), (s.pendingProps = l)) : (s = Bs(l, r, 0, null)),
              (e = Cn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = So(n)),
              (t.memoizedState = wo),
              e)
            : ka(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null))) return I0(e, t, l, r, a, i, n);
  if (s) {
    (s = r.fallback), (l = t.mode), (i = e.child), (a = i.sibling);
    var o = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = o), (t.deletions = null))
        : ((r = un(i, o)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = un(a, s)) : ((s = Cn(s, l, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (l = e.child.memoizedState),
      (l = l === null ? So(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
      (s.memoizedState = l),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = wo),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = un(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ka(e, t) {
  return (t = Bs({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Mi(e, t, n, r) {
  return r !== null && ca(r), dr(t, e.child, null, n), (e = ka(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function I0(e, t, n, r, i, s, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = wl(Error($(422)))), Mi(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = Bs({ mode: "visible", children: r.children }, i, 0, null)),
        (s = Cn(s, i, l, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && dr(t, e.child, null, l),
        (t.child.memoizedState = So(l)),
        (t.memoizedState = wo),
        s);
  if (!(t.mode & 1)) return Mi(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error($(419))), (r = wl(s, r, void 0)), Mi(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), Ue || a)) {
    if (((r = ke), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i), i !== 0 && i !== s.retryLane && ((s.retryLane = i), Ft(e, i), xt(r, e, i, -1));
    }
    return ba(), (r = wl(Error($(421)))), Mi(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = U0.bind(null, e)), (i._reactRetry = t), null)
    : ((e = s.treeContext),
      (Xe = sn(i.nextSibling)),
      (Ze = t),
      (se = !0),
      (_t = null),
      e !== null && ((it[st++] = zt), (it[st++] = Rt), (it[st++] = Tn), (zt = e.id), (Rt = e.overflow), (Tn = t)),
      (t = ka(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ju(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ho(e.return, t, n);
}
function Sl(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
    : ((s.isBackwards = t), (s.rendering = null), (s.renderingStartTime = 0), (s.last = r), (s.tail = n), (s.tailMode = i));
}
function Cf(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Ae(e, t, r.children, n), (r = oe.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ju(e, n, t);
        else if (e.tag === 19) Ju(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((te(oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; ) (e = n.alternate), e !== null && fs(e) === null && (i = n), (n = n.sibling);
        (n = i), n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)), Sl(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && fs(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Sl(t, !0, n, null, s);
        break;
      case "together":
        Sl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ui(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Vt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (bn |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error($(153));
  if (t.child !== null) {
    for (e = t.child, n = un(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = un(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function L0(e, t, n) {
  switch (t.tag) {
    case 3:
      kf(t), cr();
      break;
    case 5:
      Xd(t);
      break;
    case 1:
      qe(t.type) && ls(t);
      break;
    case 4:
      ga(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      te(us, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (te(oe, oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ef(e, t, n)
          : (te(oe, oe.current & 1), (e = Vt(e, t, n)), e !== null ? e.sibling : null);
      te(oe, oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Cf(e, t, n);
        t.flags |= 128;
      }
      if (((i = t.memoizedState), i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)), te(oe, oe.current), r))
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Sf(e, t, n);
  }
  return Vt(e, t, n);
}
var Nf, jo, Tf, Pf;
Nf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
jo = function () {};
Tf = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), kn(Nt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Wl(e, i)), (r = Wl(e, r)), (s = []);
        break;
      case "select":
        (i = ue({}, i, { value: void 0 })), (r = ue({}, r, { value: void 0 })), (s = []);
        break;
      case "textarea":
        (i = ql(e, i)), (r = ql(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = is);
    }
    Ql(n, r);
    var l;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Wr.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
    for (c in r) {
      var o = r[c];
      if (((a = i != null ? i[c] : void 0), r.hasOwnProperty(c) && o !== a && (o != null || a != null)))
        if (c === "style")
          if (a) {
            for (l in a) !a.hasOwnProperty(l) || (o && o.hasOwnProperty(l)) || (n || (n = {}), (n[l] = ""));
            for (l in o) o.hasOwnProperty(l) && a[l] !== o[l] && (n || (n = {}), (n[l] = o[l]));
          } else n || (s || (s = []), s.push(c, n)), (n = o);
        else
          c === "dangerouslySetInnerHTML"
            ? ((o = o ? o.__html : void 0), (a = a ? a.__html : void 0), o != null && a !== o && (s = s || []).push(c, o))
            : c === "children"
            ? (typeof o != "string" && typeof o != "number") || (s = s || []).push(c, "" + o)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Wr.hasOwnProperty(c)
                ? (o != null && c === "onScroll" && ne("scroll", e), s || a === o || (s = []))
                : (s = s || []).push(c, o));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Pf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Nr(e, t) {
  if (!se)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function Me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags & 14680064), (r |= i.flags & 14680064), (i.return = e), (i = i.sibling);
  else
    for (i = e.child; i !== null; ) (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function $0(e, t, n) {
  var r = t.pendingProps;
  switch ((ua(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Me(t), null;
    case 1:
      return qe(t.type) && ss(), Me(t), null;
    case 3:
      return (
        (r = t.stateNode),
        fr(),
        re(Ge),
        re($e),
        _a(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Pi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), _t !== null && (Mo(_t), (_t = null)))),
        jo(e, t),
        Me(t),
        null
      );
    case 5:
      va(t);
      var i = kn(ni.current);
      if (((n = t.type), e !== null && t.stateNode != null)) Tf(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error($(166));
          return Me(t), null;
        }
        if (((e = kn(Nt.current)), Pi(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Et] = t), (r[ei] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ne("cancel", r), ne("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ne("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Lr.length; i++) ne(Lr[i], r);
              break;
            case "source":
              ne("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ne("error", r), ne("load", r);
              break;
            case "details":
              ne("toggle", r);
              break;
            case "input":
              au(r, s), ne("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }), ne("invalid", r);
              break;
            case "textarea":
              cu(r, s), ne("invalid", r);
          }
          Ql(n, s), (i = null);
          for (var l in s)
            if (s.hasOwnProperty(l)) {
              var a = s[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && Ti(r.textContent, a, e), (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 && Ti(r.textContent, a, e), (i = ["children", "" + a]))
                : Wr.hasOwnProperty(l) && a != null && l === "onScroll" && ne("scroll", r);
            }
          switch (n) {
            case "input":
              xi(r), uu(r, s, !0);
              break;
            case "textarea":
              xi(r), du(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = is);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = nd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)), n === "select" && ((l = e), r.multiple ? (l.multiple = !0) : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Et] = t),
            (e[ei] = r),
            Nf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Yl(n, r)), n)) {
              case "dialog":
                ne("cancel", e), ne("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ne("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Lr.length; i++) ne(Lr[i], e);
                i = r;
                break;
              case "source":
                ne("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ne("error", e), ne("load", e), (i = r);
                break;
              case "details":
                ne("toggle", e), (i = r);
                break;
              case "input":
                au(e, r), (i = Wl(e, r)), ne("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }), (i = ue({}, r, { value: void 0 })), ne("invalid", e);
                break;
              case "textarea":
                cu(e, r), (i = ql(e, r)), ne("invalid", e);
                break;
              default:
                i = r;
            }
            Ql(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var o = a[s];
                s === "style"
                  ? sd(e, o)
                  : s === "dangerouslySetInnerHTML"
                  ? ((o = o ? o.__html : void 0), o != null && rd(e, o))
                  : s === "children"
                  ? typeof o == "string"
                    ? (n !== "textarea" || o !== "") && Ur(e, o)
                    : typeof o == "number" && Ur(e, "" + o)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Wr.hasOwnProperty(s) ? o != null && s === "onScroll" && ne("scroll", e) : o != null && Ko(e, s, o, l));
              }
            switch (n) {
              case "input":
                xi(e), uu(e, r, !1);
                break;
              case "textarea":
                xi(e), du(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null ? er(e, !!r.multiple, s, !1) : r.defaultValue != null && er(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = is);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Me(t), null;
    case 6:
      if (e && t.stateNode != null) Pf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error($(166));
        if (((n = kn(ni.current)), kn(Nt.current), Pi(t))) {
          if (((r = t.stateNode), (n = t.memoizedProps), (r[Et] = t), (s = r.nodeValue !== n) && ((e = Ze), e !== null)))
            switch (e.tag) {
              case 3:
                Ti(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ti(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Et] = t), (t.stateNode = r);
      }
      return Me(t), null;
    case 13:
      if ((re(oe), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
        if (se && Xe !== null && t.mode & 1 && !(t.flags & 128)) Gd(), cr(), (t.flags |= 98560), (s = !1);
        else if (((s = Pi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error($(318));
            if (((s = t.memoizedState), (s = s !== null ? s.dehydrated : null), !s)) throw Error($(317));
            s[Et] = t;
          } else cr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Me(t), (s = !1);
        } else _t !== null && (Mo(_t), (_t = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || oe.current & 1 ? xe === 0 && (xe = 3) : ba())),
          t.updateQueue !== null && (t.flags |= 4),
          Me(t),
          null);
    case 4:
      return fr(), jo(e, t), e === null && Zr(t.stateNode.containerInfo), Me(t), null;
    case 10:
      return pa(t.type._context), Me(t), null;
    case 17:
      return qe(t.type) && ss(), Me(t), null;
    case 19:
      if ((re(oe), (s = t.memoizedState), s === null)) return Me(t), null;
      if (((r = (t.flags & 128) !== 0), (l = s.rendering), l === null))
        if (r) Nr(s, !1);
        else {
          if (xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = fs(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Nr(s, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (l = s.alternate),
                    l === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = l.childLanes),
                        (s.lanes = l.lanes),
                        (s.child = l.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = l.memoizedProps),
                        (s.memoizedState = l.memoizedState),
                        (s.updateQueue = l.updateQueue),
                        (s.type = l.type),
                        (e = l.dependencies),
                        (s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return te(oe, (oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null && fe() > mr && ((t.flags |= 128), (r = !0), Nr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = fs(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Nr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !l.alternate && !se)
            )
              return Me(t), null;
          } else 2 * fe() - s.renderingStartTime > mr && n !== 1073741824 && ((t.flags |= 128), (r = !0), Nr(s, !1), (t.lanes = 4194304));
        s.isBackwards ? ((l.sibling = t.child), (t.child = l)) : ((n = s.last), n !== null ? (n.sibling = l) : (t.child = l), (s.last = l));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = fe()),
          (t.sibling = null),
          (n = oe.current),
          te(oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Me(t), null);
    case 22:
    case 23:
      return (
        Pa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Qe & 1073741824 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error($(156, t.tag));
}
function O0(e, t) {
  switch ((ua(t), t.tag)) {
    case 1:
      return qe(t.type) && ss(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return fr(), re(Ge), re($e), _a(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
    case 5:
      return va(t), null;
    case 13:
      if ((re(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error($(340));
        cr();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return re(oe), null;
    case 4:
      return fr(), null;
    case 10:
      return pa(t.type._context), null;
    case 22:
    case 23:
      return Pa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ii = !1,
  Le = !1,
  z0 = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function Zn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ce(e, t, r);
      }
    else n.current = null;
}
function ko(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var ec = !1;
function R0(e, t) {
  if (((lo = ts), (e = Ld()), oa(e))) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            o = -1,
            c = 0,
            f = 0,
            p = e,
            h = null;
          t: for (;;) {
            for (
              var v;
              p !== n || (i !== 0 && p.nodeType !== 3) || (a = l + i),
                p !== s || (r !== 0 && p.nodeType !== 3) || (o = l + r),
                p.nodeType === 3 && (l += p.nodeValue.length),
                (v = p.firstChild) !== null;

            )
              (h = p), (p = v);
            for (;;) {
              if (p === e) break t;
              if ((h === n && ++c === i && (a = l), h === s && ++f === r && (o = l), (v = p.nextSibling) !== null)) break;
              (p = h), (h = p.parentNode);
            }
            p = v;
          }
          n = a === -1 || o === -1 ? null : { start: a, end: o };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (oo = { focusedElem: e, selectionRange: n }, ts = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (D = e);
    else
      for (; D !== null; ) {
        t = D;
        try {
          var _ = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (_ !== null) {
                  var x = _.memoizedProps,
                    j = _.memoizedState,
                    g = t.stateNode,
                    d = g.getSnapshotBeforeUpdate(t.elementType === t.type ? x : gt(t.type, x), j);
                  g.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1 ? (m.textContent = "") : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error($(163));
            }
        } catch (y) {
          ce(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (D = e);
          break;
        }
        D = t.return;
      }
  return (_ = ec), (ec = !1), _;
}
function Br(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && ko(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ds(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Eo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function bf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), bf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[Et], delete t[ei], delete t[co], delete t[y0], delete t[x0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Mf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function tc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Mf(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Co(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = is));
  else if (r !== 4 && ((e = e.child), e !== null)) for (Co(e, t, n), e = e.sibling; e !== null; ) Co(e, t, n), (e = e.sibling);
}
function No(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null)) for (No(e, t, n), e = e.sibling; e !== null; ) No(e, t, n), (e = e.sibling);
}
var Ee = null,
  vt = !1;
function Wt(e, t, n) {
  for (n = n.child; n !== null; ) If(e, t, n), (n = n.sibling);
}
function If(e, t, n) {
  if (Ct && typeof Ct.onCommitFiberUnmount == "function")
    try {
      Ct.onCommitFiberUnmount(bs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Le || Zn(n, t);
    case 6:
      var r = Ee,
        i = vt;
      (Ee = null),
        Wt(e, t, n),
        (Ee = r),
        (vt = i),
        Ee !== null &&
          (vt
            ? ((e = Ee), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ee.removeChild(n.stateNode));
      break;
    case 18:
      Ee !== null &&
        (vt
          ? ((e = Ee), (n = n.stateNode), e.nodeType === 8 ? hl(e.parentNode, n) : e.nodeType === 1 && hl(e, n), Qr(e))
          : hl(Ee, n.stateNode));
      break;
    case 4:
      (r = Ee), (i = vt), (Ee = n.stateNode.containerInfo), (vt = !0), Wt(e, t, n), (Ee = r), (vt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Le && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next;
        do {
          var s = i,
            l = s.destroy;
          (s = s.tag), l !== void 0 && (s & 2 || s & 4) && ko(n, t, l), (i = i.next);
        } while (i !== r);
      }
      Wt(e, t, n);
      break;
    case 1:
      if (!Le && (Zn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (a) {
          ce(n, t, a);
        }
      Wt(e, t, n);
      break;
    case 21:
      Wt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((Le = (r = Le) || n.memoizedState !== null), Wt(e, t, n), (Le = r)) : Wt(e, t, n);
      break;
    default:
      Wt(e, t, n);
  }
}
function nc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new z0()),
      t.forEach(function (r) {
        var i = G0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function ft(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ee = a.stateNode), (vt = !1);
              break e;
            case 3:
              (Ee = a.stateNode.containerInfo), (vt = !0);
              break e;
            case 4:
              (Ee = a.stateNode.containerInfo), (vt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ee === null) throw Error($(160));
        If(s, l, i), (Ee = null), (vt = !1);
        var o = i.alternate;
        o !== null && (o.return = null), (i.return = null);
      } catch (c) {
        ce(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Lf(t, e), (t = t.sibling);
}
function Lf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ft(t, e), jt(e), r & 4)) {
        try {
          Br(3, e, e.return), Ds(3, e);
        } catch (x) {
          ce(e, e.return, x);
        }
        try {
          Br(5, e, e.return);
        } catch (x) {
          ce(e, e.return, x);
        }
      }
      break;
    case 1:
      ft(t, e), jt(e), r & 512 && n !== null && Zn(n, n.return);
      break;
    case 5:
      if ((ft(t, e), jt(e), r & 512 && n !== null && Zn(n, n.return), e.flags & 32)) {
        var i = e.stateNode;
        try {
          Ur(i, "");
        } catch (x) {
          ce(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          l = n !== null ? n.memoizedProps : s,
          a = e.type,
          o = e.updateQueue;
        if (((e.updateQueue = null), o !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && ed(i, s), Yl(a, l);
            var c = Yl(a, s);
            for (l = 0; l < o.length; l += 2) {
              var f = o[l],
                p = o[l + 1];
              f === "style" ? sd(i, p) : f === "dangerouslySetInnerHTML" ? rd(i, p) : f === "children" ? Ur(i, p) : Ko(i, f, p, c);
            }
            switch (a) {
              case "input":
                Ul(i, s);
                break;
              case "textarea":
                td(i, s);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var v = s.value;
                v != null
                  ? er(i, !!s.multiple, v, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null ? er(i, !!s.multiple, s.defaultValue, !0) : er(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[ei] = s;
          } catch (x) {
            ce(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((ft(t, e), jt(e), r & 4)) {
        if (e.stateNode === null) throw Error($(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (x) {
          ce(e, e.return, x);
        }
      }
      break;
    case 3:
      if ((ft(t, e), jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Qr(t.containerInfo);
        } catch (x) {
          ce(e, e.return, x);
        }
      break;
    case 4:
      ft(t, e), jt(e);
      break;
    case 13:
      ft(t, e),
        jt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s || (i.alternate !== null && i.alternate.memoizedState !== null) || (Na = fe())),
        r & 4 && nc(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null), e.mode & 1 ? ((Le = (c = Le) || f), ft(t, e), (Le = c)) : ft(t, e), jt(e), r & 8192)
      ) {
        if (((c = e.memoizedState !== null), (e.stateNode.isHidden = c) && !f && e.mode & 1))
          for (D = e, f = e.child; f !== null; ) {
            for (p = D = f; D !== null; ) {
              switch (((h = D), (v = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Br(4, h, h.return);
                  break;
                case 1:
                  Zn(h, h.return);
                  var _ = h.stateNode;
                  if (typeof _.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r), (_.props = t.memoizedProps), (_.state = t.memoizedState), _.componentWillUnmount();
                    } catch (x) {
                      ce(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Zn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    ic(p);
                    continue;
                  }
              }
              v !== null ? ((v.return = h), (D = v)) : ic(p);
            }
            f = f.sibling;
          }
        e: for (f = null, p = e; ; ) {
          if (p.tag === 5) {
            if (f === null) {
              f = p;
              try {
                (i = p.stateNode),
                  c
                    ? ((s = i.style),
                      typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : (s.display = "none"))
                    : ((a = p.stateNode),
                      (o = p.memoizedProps.style),
                      (l = o != null && o.hasOwnProperty("display") ? o.display : null),
                      (a.style.display = id("display", l)));
              } catch (x) {
                ce(e, e.return, x);
              }
            }
          } else if (p.tag === 6) {
            if (f === null)
              try {
                p.stateNode.nodeValue = c ? "" : p.memoizedProps;
              } catch (x) {
                ce(e, e.return, x);
              }
          } else if (((p.tag !== 22 && p.tag !== 23) || p.memoizedState === null || p === e) && p.child !== null) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            f === p && (f = null), (p = p.return);
          }
          f === p && (f = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      ft(t, e), jt(e), r & 4 && nc(e);
      break;
    case 21:
      break;
    default:
      ft(t, e), jt(e);
  }
}
function jt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Mf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error($(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ur(i, ""), (r.flags &= -33));
          var s = tc(e);
          No(e, s, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = tc(e);
          Co(e, a, l);
          break;
        default:
          throw Error($(161));
      }
    } catch (o) {
      ce(e, e.return, o);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function D0(e, t, n) {
  (D = e), $f(e);
}
function $f(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var i = D,
      s = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Ii;
      if (!l) {
        var a = i.alternate,
          o = (a !== null && a.memoizedState !== null) || Le;
        a = Ii;
        var c = Le;
        if (((Ii = l), (Le = o) && !c))
          for (D = i; D !== null; )
            (l = D), (o = l.child), l.tag === 22 && l.memoizedState !== null ? sc(i) : o !== null ? ((o.return = l), (D = o)) : sc(i);
        for (; s !== null; ) (D = s), $f(s), (s = s.sibling);
        (D = i), (Ii = a), (Le = c);
      }
      rc(e);
    } else i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (D = s)) : rc(e);
  }
}
function rc(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Le || Ds(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Le)
                if (n === null) r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : gt(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var s = t.updateQueue;
              s !== null && Fu(t, s, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Fu(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var o = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    o.autoFocus && n.focus();
                    break;
                  case "img":
                    o.src && (n.src = o.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var f = c.memoizedState;
                  if (f !== null) {
                    var p = f.dehydrated;
                    p !== null && Qr(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error($(163));
          }
        Le || (t.flags & 512 && Eo(t));
      } catch (h) {
        ce(t, t.return, h);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function ic(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function sc(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ds(4, t);
          } catch (o) {
            ce(t, n, o);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (o) {
              ce(t, i, o);
            }
          }
          var s = t.return;
          try {
            Eo(t);
          } catch (o) {
            ce(t, s, o);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Eo(t);
          } catch (o) {
            ce(t, l, o);
          }
      }
    } catch (o) {
      ce(t, t.return, o);
    }
    if (t === e) {
      D = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (D = a);
      break;
    }
    D = t.return;
  }
}
var A0 = Math.ceil,
  hs = Ht.ReactCurrentDispatcher,
  Ea = Ht.ReactCurrentOwner,
  at = Ht.ReactCurrentBatchConfig,
  q = 0,
  ke = null,
  me = null,
  Ne = 0,
  Qe = 0,
  Jn = mn(0),
  xe = 0,
  li = null,
  bn = 0,
  As = 0,
  Ca = 0,
  Fr = null,
  We = null,
  Na = 0,
  mr = 1 / 0,
  $t = null,
  gs = !1,
  To = null,
  on = null,
  Li = !1,
  Zt = null,
  vs = 0,
  Vr = 0,
  Po = null,
  Gi = -1,
  qi = 0;
function Be() {
  return q & 6 ? fe() : Gi !== -1 ? Gi : (Gi = fe());
}
function an(e) {
  return e.mode & 1
    ? q & 2 && Ne !== 0
      ? Ne & -Ne
      : S0.transition !== null
      ? (qi === 0 && (qi = vd()), qi)
      : ((e = Z), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : kd(e.type))), e)
    : 1;
}
function xt(e, t, n, r) {
  if (50 < Vr) throw ((Vr = 0), (Po = null), Error($(185)));
  ci(e, n, r),
    (!(q & 2) || e !== ke) &&
      (e === ke && (!(q & 2) && (As |= n), xe === 4 && Yt(e, Ne)),
      Ke(e, r),
      n === 1 && q === 0 && !(t.mode & 1) && ((mr = fe() + 500), Os && hn()));
}
function Ke(e, t) {
  var n = e.callbackNode;
  Sm(e, t);
  var r = es(e, e === ke ? Ne : 0);
  if (r === 0) n !== null && mu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && mu(n), t === 1))
      e.tag === 0 ? w0(lc.bind(null, e)) : Hd(lc.bind(null, e)),
        v0(function () {
          !(q & 6) && hn();
        }),
        (n = null);
    else {
      switch (_d(r)) {
        case 1:
          n = Jo;
          break;
        case 4:
          n = hd;
          break;
        case 16:
          n = Ji;
          break;
        case 536870912:
          n = gd;
          break;
        default:
          n = Ji;
      }
      n = Vf(n, Of.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Of(e, t) {
  if (((Gi = -1), (qi = 0), q & 6)) throw Error($(327));
  var n = e.callbackNode;
  if (sr() && e.callbackNode !== n) return null;
  var r = es(e, e === ke ? Ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = _s(e, r);
  else {
    t = r;
    var i = q;
    q |= 2;
    var s = Rf();
    (ke !== e || Ne !== t) && (($t = null), (mr = fe() + 500), En(e, t));
    do
      try {
        V0();
        break;
      } catch (a) {
        zf(e, a);
      }
    while (!0);
    fa(), (hs.current = s), (q = i), me !== null ? (t = 0) : ((ke = null), (Ne = 0), (t = xe));
  }
  if (t !== 0) {
    if ((t === 2 && ((i = to(e)), i !== 0 && ((r = i), (t = bo(e, i)))), t === 1)) throw ((n = li), En(e, 0), Yt(e, r), Ke(e, fe()), n);
    if (t === 6) Yt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) && !B0(i) && ((t = _s(e, r)), t === 2 && ((s = to(e)), s !== 0 && ((r = s), (t = bo(e, s)))), t === 1))
      )
        throw ((n = li), En(e, 0), Yt(e, r), Ke(e, fe()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error($(345));
        case 2:
          xn(e, We, $t);
          break;
        case 3:
          if ((Yt(e, r), (r & 130023424) === r && ((t = Na + 500 - fe()), 10 < t))) {
            if (es(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Be(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = uo(xn.bind(null, e, We, $t), t);
            break;
          }
          xn(e, We, $t);
          break;
        case 4:
          if ((Yt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - yt(r);
            (s = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~s);
          }
          if (
            ((r = i),
            (r = fe() - r),
            (r =
              (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * A0(r / 1960)) -
              r),
            10 < r)
          ) {
            e.timeoutHandle = uo(xn.bind(null, e, We, $t), r);
            break;
          }
          xn(e, We, $t);
          break;
        case 5:
          xn(e, We, $t);
          break;
        default:
          throw Error($(329));
      }
    }
  }
  return Ke(e, fe()), e.callbackNode === n ? Of.bind(null, e) : null;
}
function bo(e, t) {
  var n = Fr;
  return (
    e.current.memoizedState.isDehydrated && (En(e, t).flags |= 256), (e = _s(e, t)), e !== 2 && ((t = We), (We = n), t !== null && Mo(t)), e
  );
}
function Mo(e) {
  We === null ? (We = e) : We.push.apply(We, e);
}
function B0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!wt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Yt(e, t) {
  for (t &= ~Ca, t &= ~As, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - yt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function lc(e) {
  if (q & 6) throw Error($(327));
  sr();
  var t = es(e, 0);
  if (!(t & 1)) return Ke(e, fe()), null;
  var n = _s(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = to(e);
    r !== 0 && ((t = r), (n = bo(e, r)));
  }
  if (n === 1) throw ((n = li), En(e, 0), Yt(e, t), Ke(e, fe()), n);
  if (n === 6) throw Error($(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), xn(e, We, $t), Ke(e, fe()), null;
}
function Ta(e, t) {
  var n = q;
  q |= 1;
  try {
    return e(t);
  } finally {
    (q = n), q === 0 && ((mr = fe() + 500), Os && hn());
  }
}
function Mn(e) {
  Zt !== null && Zt.tag === 0 && !(q & 6) && sr();
  var t = q;
  q |= 1;
  var n = at.transition,
    r = Z;
  try {
    if (((at.transition = null), (Z = 1), e)) return e();
  } finally {
    (Z = r), (at.transition = n), (q = t), !(q & 6) && hn();
  }
}
function Pa() {
  (Qe = Jn.current), re(Jn);
}
function En(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), g0(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var r = n;
      switch ((ua(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ss();
          break;
        case 3:
          fr(), re(Ge), re($e), _a();
          break;
        case 5:
          va(r);
          break;
        case 4:
          fr();
          break;
        case 13:
          re(oe);
          break;
        case 19:
          re(oe);
          break;
        case 10:
          pa(r.type._context);
          break;
        case 22:
        case 23:
          Pa();
      }
      n = n.return;
    }
  if (((ke = e), (me = e = un(e.current, null)), (Ne = Qe = t), (xe = 0), (li = null), (Ca = As = bn = 0), (We = Fr = null), jn !== null)) {
    for (t = 0; t < jn.length; t++)
      if (((n = jn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var l = s.next;
          (s.next = i), (r.next = l);
        }
        n.pending = r;
      }
    jn = null;
  }
  return e;
}
function zf(e, t) {
  do {
    var n = me;
    try {
      if ((fa(), (Hi.current = ms), ps)) {
        for (var r = ae.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ps = !1;
      }
      if (((Pn = 0), (je = ye = ae = null), (Ar = !1), (ri = 0), (Ea.current = null), n === null || n.return === null)) {
        (xe = 1), (li = t), (me = null);
        break;
      }
      e: {
        var s = e,
          l = n.return,
          a = n,
          o = t;
        if (((t = Ne), (a.flags |= 32768), o !== null && typeof o == "object" && typeof o.then == "function")) {
          var c = o,
            f = a,
            p = f.tag;
          if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = f.alternate;
            h
              ? ((f.updateQueue = h.updateQueue), (f.memoizedState = h.memoizedState), (f.lanes = h.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var v = qu(l);
          if (v !== null) {
            (v.flags &= -257), Ku(v, l, a, s, t), v.mode & 1 && Gu(s, c, t), (t = v), (o = c);
            var _ = t.updateQueue;
            if (_ === null) {
              var x = new Set();
              x.add(o), (t.updateQueue = x);
            } else _.add(o);
            break e;
          } else {
            if (!(t & 1)) {
              Gu(s, c, t), ba();
              break e;
            }
            o = Error($(426));
          }
        } else if (se && a.mode & 1) {
          var j = qu(l);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), Ku(j, l, a, s, t), ca(pr(o, a));
            break e;
          }
        }
        (s = o = pr(o, a)), xe !== 4 && (xe = 2), Fr === null ? (Fr = [s]) : Fr.push(s), (s = l);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var g = yf(s, o, t);
              Bu(s, g);
              break e;
            case 1:
              a = o;
              var d = s.type,
                m = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (m !== null && typeof m.componentDidCatch == "function" && (on === null || !on.has(m))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var y = xf(s, a, t);
                Bu(s, y);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Af(n);
    } catch (w) {
      (t = w), me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Rf() {
  var e = hs.current;
  return (hs.current = ms), e === null ? ms : e;
}
function ba() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4), ke === null || (!(bn & 268435455) && !(As & 268435455)) || Yt(ke, Ne);
}
function _s(e, t) {
  var n = q;
  q |= 2;
  var r = Rf();
  (ke !== e || Ne !== t) && (($t = null), En(e, t));
  do
    try {
      F0();
      break;
    } catch (i) {
      zf(e, i);
    }
  while (!0);
  if ((fa(), (q = n), (hs.current = r), me !== null)) throw Error($(261));
  return (ke = null), (Ne = 0), xe;
}
function F0() {
  for (; me !== null; ) Df(me);
}
function V0() {
  for (; me !== null && !pm(); ) Df(me);
}
function Df(e) {
  var t = Ff(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps), t === null ? Af(e) : (me = t), (Ea.current = null);
}
function Af(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = O0(n, t)), n !== null)) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (xe = 6), (me = null);
        return;
      }
    } else if (((n = $0(n, t, Qe)), n !== null)) {
      me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  xe === 0 && (xe = 5);
}
function xn(e, t, n) {
  var r = Z,
    i = at.transition;
  try {
    (at.transition = null), (Z = 1), H0(e, t, n, r);
  } finally {
    (at.transition = i), (Z = r);
  }
  return null;
}
function H0(e, t, n, r) {
  do sr();
  while (Zt !== null);
  if (q & 6) throw Error($(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error($(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (jm(e, s),
    e === ke && ((me = ke = null), (Ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Li ||
      ((Li = !0),
      Vf(Ji, function () {
        return sr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = at.transition), (at.transition = null);
    var l = Z;
    Z = 1;
    var a = q;
    (q |= 4),
      (Ea.current = null),
      R0(e, n),
      Lf(n, e),
      u0(oo),
      (ts = !!lo),
      (oo = lo = null),
      (e.current = n),
      D0(n),
      mm(),
      (q = a),
      (Z = l),
      (at.transition = s);
  } else e.current = n;
  if ((Li && ((Li = !1), (Zt = e), (vs = i)), (s = e.pendingLanes), s === 0 && (on = null), vm(n.stateNode), Ke(e, fe()), t !== null))
    for (r = e.onRecoverableError, n = 0; n < t.length; n++) (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (gs) throw ((gs = !1), (e = To), (To = null), e);
  return vs & 1 && e.tag !== 0 && sr(), (s = e.pendingLanes), s & 1 ? (e === Po ? Vr++ : ((Vr = 0), (Po = e))) : (Vr = 0), hn(), null;
}
function sr() {
  if (Zt !== null) {
    var e = _d(vs),
      t = at.transition,
      n = Z;
    try {
      if (((at.transition = null), (Z = 16 > e ? 16 : e), Zt === null)) var r = !1;
      else {
        if (((e = Zt), (Zt = null), (vs = 0), q & 6)) throw Error($(331));
        var i = q;
        for (q |= 4, D = e.current; D !== null; ) {
          var s = D,
            l = s.child;
          if (D.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var o = 0; o < a.length; o++) {
                var c = a[o];
                for (D = c; D !== null; ) {
                  var f = D;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Br(8, f, s);
                  }
                  var p = f.child;
                  if (p !== null) (p.return = f), (D = p);
                  else
                    for (; D !== null; ) {
                      f = D;
                      var h = f.sibling,
                        v = f.return;
                      if ((bf(f), f === c)) {
                        D = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = v), (D = h);
                        break;
                      }
                      D = v;
                    }
                }
              }
              var _ = s.alternate;
              if (_ !== null) {
                var x = _.child;
                if (x !== null) {
                  _.child = null;
                  do {
                    var j = x.sibling;
                    (x.sibling = null), (x = j);
                  } while (x !== null);
                }
              }
              D = s;
            }
          }
          if (s.subtreeFlags & 2064 && l !== null) (l.return = s), (D = l);
          else
            e: for (; D !== null; ) {
              if (((s = D), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Br(9, s, s.return);
                }
              var g = s.sibling;
              if (g !== null) {
                (g.return = s.return), (D = g);
                break e;
              }
              D = s.return;
            }
        }
        var d = e.current;
        for (D = d; D !== null; ) {
          l = D;
          var m = l.child;
          if (l.subtreeFlags & 2064 && m !== null) (m.return = l), (D = m);
          else
            e: for (l = d; D !== null; ) {
              if (((a = D), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ds(9, a);
                  }
                } catch (w) {
                  ce(a, a.return, w);
                }
              if (a === l) {
                D = null;
                break e;
              }
              var y = a.sibling;
              if (y !== null) {
                (y.return = a.return), (D = y);
                break e;
              }
              D = a.return;
            }
        }
        if (((q = i), hn(), Ct && typeof Ct.onPostCommitFiberRoot == "function"))
          try {
            Ct.onPostCommitFiberRoot(bs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Z = n), (at.transition = t);
    }
  }
  return !1;
}
function oc(e, t, n) {
  (t = pr(n, t)), (t = yf(e, t, 1)), (e = ln(e, t, 1)), (t = Be()), e !== null && (ci(e, 1, t), Ke(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) oc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        oc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" && (on === null || !on.has(r)))
        ) {
          (e = pr(n, e)), (e = xf(t, e, 1)), (t = ln(t, e, 1)), (e = Be()), t !== null && (ci(t, 1, e), Ke(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function W0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Be()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ke === e && (Ne & n) === n && (xe === 4 || (xe === 3 && (Ne & 130023424) === Ne && 500 > fe() - Na) ? En(e, 0) : (Ca |= n)),
    Ke(e, t);
}
function Bf(e, t) {
  t === 0 && (e.mode & 1 ? ((t = ji), (ji <<= 1), !(ji & 130023424) && (ji = 4194304)) : (t = 1));
  var n = Be();
  (e = Ft(e, t)), e !== null && (ci(e, t, n), Ke(e, n));
}
function U0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Bf(e, n);
}
function G0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error($(314));
  }
  r !== null && r.delete(t), Bf(e, n);
}
var Ff;
Ff = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ge.current) Ue = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ue = !1), L0(e, t, n);
      Ue = !!(e.flags & 131072);
    }
  else (Ue = !1), se && t.flags & 1048576 && Wd(t, as, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ui(e, t), (e = t.pendingProps);
      var i = ur(t, $e.current);
      ir(t, n), (i = xa(null, t, r, e, i, n));
      var s = wa();
      return (
        (t.flags |= 1),
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            qe(r) ? ((s = !0), ls(t)) : (s = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            ha(t),
            (i.updater = Rs),
            (t.stateNode = i),
            (i._reactInternals = t),
            vo(t, r, e, n),
            (t = xo(null, t, r, !0, s, n)))
          : ((t.tag = 0), se && s && aa(t), Ae(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ui(e, t), (e = t.pendingProps), (i = r._init), (r = i(r._payload)), (t.type = r), (i = t.tag = K0(r)), (e = gt(r, e)), i)
        ) {
          case 0:
            t = yo(null, t, r, e, n);
            break e;
          case 1:
            t = Xu(null, t, r, e, n);
            break e;
          case 11:
            t = Qu(null, t, r, e, n);
            break e;
          case 14:
            t = Yu(null, t, r, gt(r.type, e), n);
            break e;
        }
        throw Error($(306, r, ""));
      }
      return t;
    case 0:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : gt(r, i)), yo(e, t, r, i, n);
    case 1:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : gt(r, i)), Xu(e, t, r, i, n);
    case 3:
      e: {
        if ((kf(t), e === null)) throw Error($(387));
        (r = t.pendingProps), (s = t.memoizedState), (i = s.element), Yd(e, t), ds(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = pr(Error($(423)), t)), (t = Zu(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = pr(Error($(424)), t)), (t = Zu(e, t, r, n, i));
            break e;
          } else
            for (Xe = sn(t.stateNode.containerInfo.firstChild), Ze = t, se = !0, _t = null, n = Kd(t, null, r, n), t.child = n; n; )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((cr(), r === i)) {
            t = Vt(e, t, n);
            break e;
          }
          Ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Xd(t),
        e === null && mo(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (l = i.children),
        ao(r, i) ? (l = null) : s !== null && ao(r, s) && (t.flags |= 32),
        jf(e, t),
        Ae(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && mo(t), null;
    case 13:
      return Ef(e, t, n);
    case 4:
      return ga(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = dr(t, null, r, n)) : Ae(e, t, r, n), t.child;
    case 11:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : gt(r, i)), Qu(e, t, r, i, n);
    case 7:
      return Ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (l = i.value),
          te(us, r._currentValue),
          (r._currentValue = l),
          s !== null)
        )
          if (wt(s.value, l)) {
            if (s.children === i.children && !Ge.current) {
              t = Vt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                l = s.child;
                for (var o = a.firstContext; o !== null; ) {
                  if (o.context === r) {
                    if (s.tag === 1) {
                      (o = Dt(-1, n & -n)), (o.tag = 2);
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var f = c.pending;
                        f === null ? (o.next = o) : ((o.next = f.next), (f.next = o)), (c.pending = o);
                      }
                    }
                    (s.lanes |= n), (o = s.alternate), o !== null && (o.lanes |= n), ho(s.return, n, t), (a.lanes |= n);
                    break;
                  }
                  o = o.next;
                }
              } else if (s.tag === 10) l = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((l = s.return), l === null)) throw Error($(341));
                (l.lanes |= n), (a = l.alternate), a !== null && (a.lanes |= n), ho(l, n, t), (l = s.sibling);
              } else l = s.child;
              if (l !== null) l.return = s;
              else
                for (l = s; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((s = l.sibling), s !== null)) {
                    (s.return = l.return), (l = s);
                    break;
                  }
                  l = l.return;
                }
              s = l;
            }
        Ae(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (i = t.type), (r = t.pendingProps.children), ir(t, n), (i = ut(i)), (r = r(i)), (t.flags |= 1), Ae(e, t, r, n), t.child;
    case 14:
      return (r = t.type), (i = gt(r, t.pendingProps)), (i = gt(r.type, i)), Yu(e, t, r, i, n);
    case 15:
      return wf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : gt(r, i)),
        Ui(e, t),
        (t.tag = 1),
        qe(r) ? ((e = !0), ls(t)) : (e = !1),
        ir(t, n),
        _f(t, r, i),
        vo(t, r, i, n),
        xo(null, t, r, !0, e, n)
      );
    case 19:
      return Cf(e, t, n);
    case 22:
      return Sf(e, t, n);
  }
  throw Error($(156, t.tag));
};
function Vf(e, t) {
  return md(e, t);
}
function q0(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function lt(e, t, n, r) {
  return new q0(e, t, n, r);
}
function Ma(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function K0(e) {
  if (typeof e == "function") return Ma(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Yo)) return 11;
    if (e === Xo) return 14;
  }
  return 2;
}
function un(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = lt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ki(e, t, n, r, i, s) {
  var l = 2;
  if (((r = e), typeof e == "function")) Ma(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Hn:
        return Cn(n.children, i, s, t);
      case Qo:
        (l = 8), (i |= 8);
        break;
      case Bl:
        return (e = lt(12, n, t, i | 2)), (e.elementType = Bl), (e.lanes = s), e;
      case Fl:
        return (e = lt(13, n, t, i)), (e.elementType = Fl), (e.lanes = s), e;
      case Vl:
        return (e = lt(19, n, t, i)), (e.elementType = Vl), (e.lanes = s), e;
      case Xc:
        return Bs(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qc:
              l = 10;
              break e;
            case Yc:
              l = 9;
              break e;
            case Yo:
              l = 11;
              break e;
            case Xo:
              l = 14;
              break e;
            case qt:
              (l = 16), (r = null);
              break e;
          }
        throw Error($(130, e == null ? e : typeof e, ""));
    }
  return (t = lt(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t;
}
function Cn(e, t, n, r) {
  return (e = lt(7, e, r, t)), (e.lanes = n), e;
}
function Bs(e, t, n, r) {
  return (e = lt(22, e, r, t)), (e.elementType = Xc), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function jl(e, t, n) {
  return (e = lt(6, e, null, t)), (e.lanes = n), e;
}
function kl(e, t, n) {
  return (
    (t = lt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function Q0(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = il(0)),
    (this.expirationTimes = il(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = il(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ia(e, t, n, r, i, s, l, a, o) {
  return (
    (e = new Q0(e, t, n, a, o)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = lt(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
    ha(s),
    e
  );
}
function Y0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Vn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Hf(e) {
  if (!e) return fn;
  e = e._reactInternals;
  e: {
    if ($n(e) !== e || e.tag !== 1) throw Error($(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error($(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (qe(n)) return Vd(e, n, t);
  }
  return t;
}
function Wf(e, t, n, r, i, s, l, a, o) {
  return (
    (e = Ia(n, r, !0, e, i, s, l, a, o)),
    (e.context = Hf(null)),
    (n = e.current),
    (r = Be()),
    (i = an(n)),
    (s = Dt(r, i)),
    (s.callback = t ?? null),
    ln(n, s, i),
    (e.current.lanes = i),
    ci(e, i, r),
    Ke(e, r),
    e
  );
}
function Fs(e, t, n, r) {
  var i = t.current,
    s = Be(),
    l = an(i);
  return (
    (n = Hf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Dt(s, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ln(i, t, l)),
    e !== null && (xt(e, i, l, s), Vi(e, i, l)),
    l
  );
}
function ys(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ac(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function La(e, t) {
  ac(e, t), (e = e.alternate) && ac(e, t);
}
function X0() {
  return null;
}
var Uf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function $a(e) {
  this._internalRoot = e;
}
Vs.prototype.render = $a.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error($(409));
  Fs(e, t, null, null);
};
Vs.prototype.unmount = $a.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mn(function () {
      Fs(null, e, null, null);
    }),
      (t[Bt] = null);
  }
};
function Vs(e) {
  this._internalRoot = e;
}
Vs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = wd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
    Qt.splice(n, 0, e), n === 0 && jd(e);
  }
};
function Oa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Hs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function uc() {}
function Z0(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = ys(l);
        s.call(c);
      };
    }
    var l = Wf(t, r, e, 0, null, !1, !1, "", uc);
    return (e._reactRootContainer = l), (e[Bt] = l.current), Zr(e.nodeType === 8 ? e.parentNode : e), Mn(), l;
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = ys(o);
      a.call(c);
    };
  }
  var o = Ia(e, 0, !1, null, null, !1, !1, "", uc);
  return (
    (e._reactRootContainer = o),
    (e[Bt] = o.current),
    Zr(e.nodeType === 8 ? e.parentNode : e),
    Mn(function () {
      Fs(t, o, n, r);
    }),
    o
  );
}
function Ws(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var l = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var o = ys(l);
        a.call(o);
      };
    }
    Fs(t, l, e, i);
  } else l = Z0(n, t, e, i, r);
  return ys(l);
}
yd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ir(t.pendingLanes);
        n !== 0 && (ea(t, n | 1), Ke(t, fe()), !(q & 6) && ((mr = fe() + 500), hn()));
      }
      break;
    case 13:
      Mn(function () {
        var r = Ft(e, 1);
        if (r !== null) {
          var i = Be();
          xt(r, e, 1, i);
        }
      }),
        La(e, 1);
  }
};
ta = function (e) {
  if (e.tag === 13) {
    var t = Ft(e, 134217728);
    if (t !== null) {
      var n = Be();
      xt(t, e, 134217728, n);
    }
    La(e, 134217728);
  }
};
xd = function (e) {
  if (e.tag === 13) {
    var t = an(e),
      n = Ft(e, t);
    if (n !== null) {
      var r = Be();
      xt(n, e, t, r);
    }
    La(e, t);
  }
};
wd = function () {
  return Z;
};
Sd = function (e, t) {
  var n = Z;
  try {
    return (Z = e), t();
  } finally {
    Z = n;
  }
};
Zl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ul(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = $s(r);
            if (!i) throw Error($(90));
            Jc(r), Ul(r, i);
          }
        }
      }
      break;
    case "textarea":
      td(e, n);
      break;
    case "select":
      (t = n.value), t != null && er(e, !!n.multiple, t, !1);
  }
};
ad = Ta;
ud = Mn;
var J0 = { usingClientEntryPoint: !1, Events: [fi, qn, $s, ld, od, Ta] },
  Tr = { findFiberByHostInstance: Sn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
  eh = {
    bundleType: Tr.bundleType,
    version: Tr.version,
    rendererPackageName: Tr.rendererPackageName,
    rendererConfig: Tr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ht.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = fd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Tr.findFiberByHostInstance || X0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $i = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$i.isDisabled && $i.supportsFiber)
    try {
      (bs = $i.inject(eh)), (Ct = $i);
    } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J0;
et.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Oa(t)) throw Error($(200));
  return Y0(e, t, null, n);
};
et.createRoot = function (e, t) {
  if (!Oa(e)) throw Error($(299));
  var n = !1,
    r = "",
    i = Uf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ia(e, 1, !1, null, null, n, !1, r, i)),
    (e[Bt] = t.current),
    Zr(e.nodeType === 8 ? e.parentNode : e),
    new $a(t)
  );
};
et.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error($(188)) : ((e = Object.keys(e).join(",")), Error($(268, e)));
  return (e = fd(t)), (e = e === null ? null : e.stateNode), e;
};
et.flushSync = function (e) {
  return Mn(e);
};
et.hydrate = function (e, t, n) {
  if (!Hs(t)) throw Error($(200));
  return Ws(null, e, t, !0, n);
};
et.hydrateRoot = function (e, t, n) {
  if (!Oa(e)) throw Error($(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    l = Uf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Wf(t, null, e, 1, n ?? null, i, !1, s, l)),
    (e[Bt] = t.current),
    Zr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Vs(t);
};
et.render = function (e, t, n) {
  if (!Hs(t)) throw Error($(200));
  return Ws(null, e, t, !1, n);
};
et.unmountComponentAtNode = function (e) {
  if (!Hs(e)) throw Error($(40));
  return e._reactRootContainer
    ? (Mn(function () {
        Ws(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Bt] = null);
        });
      }),
      !0)
    : !1;
};
et.unstable_batchedUpdates = Ta;
et.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Hs(n)) throw Error($(200));
  if (e == null || e._reactInternals === void 0) throw Error($(38));
  return Ws(e, t, n, !1, r);
};
et.version = "18.3.1-next-f1338f8080-20240426";
function Gf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gf);
    } catch (e) {
      console.error(e);
    }
}
Gf(), (Uc.exports = et);
var th = Uc.exports,
  cc = th;
(Dl.createRoot = cc.createRoot), (Dl.hydrateRoot = cc.hydrateRoot);
function dc(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function za(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u" ? (e[n] = t[n]) : dc(t[n]) && dc(e[n]) && Object.keys(t[n]).length > 0 && za(e[n], t[n]);
    });
}
const qf = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
};
function Tt() {
  const e = typeof document < "u" ? document : {};
  return za(e, qf), e;
}
const nh = {
  document: qf,
  navigator: { userAgent: "" },
  location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function He() {
  const e = typeof window < "u" ? window : {};
  return za(e, nh), e;
}
function rh(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function ih(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function Io(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function xs() {
  return Date.now();
}
function sh(e) {
  const t = He();
  let n;
  return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n;
}
function lh(e, t) {
  t === void 0 && (t = "x");
  const n = He();
  let r, i, s;
  const l = sh(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = l.transform || l.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (s = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((s =
          l.MozTransform ||
          l.OTransform ||
          l.MsTransform ||
          l.msTransform ||
          l.transform ||
          l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = s.toString().split(","))),
    t === "x" && (n.WebKitCSSMatrix ? (i = s.m41) : r.length === 16 ? (i = parseFloat(r[12])) : (i = parseFloat(r[4]))),
    t === "y" && (n.WebKitCSSMatrix ? (i = s.m42) : r.length === 16 ? (i = parseFloat(r[13])) : (i = parseFloat(r[5]))),
    i || 0
  );
}
function Oi(e) {
  return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object";
}
function oh(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Ye() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !oh(r)) {
      const i = Object.keys(Object(r)).filter((s) => t.indexOf(s) < 0);
      for (let s = 0, l = i.length; s < l; s += 1) {
        const a = i[s],
          o = Object.getOwnPropertyDescriptor(r, a);
        o !== void 0 &&
          o.enumerable &&
          (Oi(e[a]) && Oi(r[a])
            ? r[a].__swiper__
              ? (e[a] = r[a])
              : Ye(e[a], r[a])
            : !Oi(e[a]) && Oi(r[a])
            ? ((e[a] = {}), r[a].__swiper__ ? (e[a] = r[a]) : Ye(e[a], r[a]))
            : (e[a] = r[a]));
      }
    }
  }
  return e;
}
function zi(e, t, n) {
  e.style.setProperty(t, n);
}
function Kf(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = He(),
    s = -t.translate;
  let l = null,
    a;
  const o = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"), i.cancelAnimationFrame(t.cssModeFrameID);
  const c = n > s ? "next" : "prev",
    f = (h, v) => (c === "next" && h >= v) || (c === "prev" && h <= v),
    p = () => {
      (a = new Date().getTime()), l === null && (l = a);
      const h = Math.max(Math.min((a - l) / o, 1), 0),
        v = 0.5 - Math.cos(h * Math.PI) / 2;
      let _ = s + v * (n - s);
      if ((f(_, n) && (_ = n), t.wrapperEl.scrollTo({ [r]: _ }), f(_, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: _ });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(p);
    };
  p();
}
function ot(e, t) {
  t === void 0 && (t = "");
  const n = He(),
    r = [...e.children];
  return n.HTMLSlotElement && e instanceof HTMLSlotElement && r.push(...e.assignedElements()), t ? r.filter((i) => i.matches(t)) : r;
}
function ah(e, t) {
  var r, i;
  const n = [t];
  for (; n.length > 0; ) {
    const s = n.shift();
    if (e === s) return !0;
    n.push(
      ...s.children,
      ...(((r = s.shadowRoot) == null ? void 0 : r.children) || []),
      ...(((i = s.assignedElements) == null ? void 0 : i.call(s)) || [])
    );
  }
}
function uh(e, t) {
  const n = He();
  let r = t.contains(e);
  return !r && n.HTMLSlotElement && t instanceof HTMLSlotElement && ((r = [...t.assignedElements()].includes(e)), r || (r = ah(e, t))), r;
}
function ws(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function Ss(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : rh(t))), n;
}
function ch(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function dh(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function Jt(e, t) {
  return He().getComputedStyle(e, null).getPropertyValue(t);
}
function js(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1);
    return n;
  }
}
function Qf(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
  return n;
}
function Lo(e, t, n) {
  const r = He();
  return (
    e[t === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(r.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) +
    parseFloat(r.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom"))
  );
}
function Mt(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
}
function fh(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let s = ot(e.el, `.${r[i]}`)[0];
          s || ((s = Ss("div", r[i])), (s.className = r[i]), e.el.append(s)), (n[i] = s), (t[i] = s);
        }
      }),
    n
  );
}
function Pr(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function Ra(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const s = "swiper-pagination";
  n({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (d) => d,
      formatFractionTotal: (d) => d,
      bulletClass: `${s}-bullet`,
      bulletActiveClass: `${s}-bullet-active`,
      modifierClass: `${s}-`,
      currentClass: `${s}-current`,
      totalClass: `${s}-total`,
      hiddenClass: `${s}-hidden`,
      progressbarFillClass: `${s}-progressbar-fill`,
      progressbarOppositeClass: `${s}-progressbar-opposite`,
      clickableClass: `${s}-clickable`,
      lockClass: `${s}-lock`,
      horizontalClass: `${s}-horizontal`,
      verticalClass: `${s}-vertical`,
      paginationDisabledClass: `${s}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] });
  let l,
    a = 0;
  function o() {
    return !t.params.pagination.el || !t.pagination.el || (Array.isArray(t.pagination.el) && t.pagination.el.length === 0);
  }
  function c(d, m) {
    const { bulletActiveClass: y } = t.params.pagination;
    d &&
      ((d = d[`${m === "prev" ? "previous" : "next"}ElementSibling`]),
      d &&
        (d.classList.add(`${y}-${m}`),
        (d = d[`${m === "prev" ? "previous" : "next"}ElementSibling`]),
        d && d.classList.add(`${y}-${m}-${m}`)));
  }
  function f(d, m, y) {
    if (((d = d % y), (m = m % y), m === d + 1)) return "next";
    if (m === d - 1) return "previous";
  }
  function p(d) {
    const m = d.target.closest(Pr(t.params.pagination.bulletClass));
    if (!m) return;
    d.preventDefault();
    const y = js(m) * t.params.slidesPerGroup;
    if (t.params.loop) {
      if (t.realIndex === y) return;
      const w = f(t.realIndex, y, t.slides.length);
      w === "next" ? t.slideNext() : w === "previous" ? t.slidePrev() : t.slideToLoop(y);
    } else t.slideTo(y);
  }
  function h() {
    const d = t.rtl,
      m = t.params.pagination;
    if (o()) return;
    let y = t.pagination.el;
    y = Mt(y);
    let w, C;
    const P = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
      T = t.params.loop ? Math.ceil(P / t.params.slidesPerGroup) : t.snapGrid.length;
    if (
      (t.params.loop
        ? ((C = t.previousRealIndex || 0),
          (w = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex))
        : typeof t.snapIndex < "u"
        ? ((w = t.snapIndex), (C = t.previousSnapIndex))
        : ((C = t.previousIndex || 0), (w = t.activeIndex || 0)),
      m.type === "bullets" && t.pagination.bullets && t.pagination.bullets.length > 0)
    ) {
      const b = t.pagination.bullets;
      let k, I, z;
      if (
        (m.dynamicBullets &&
          ((l = Lo(b[0], t.isHorizontal() ? "width" : "height")),
          y.forEach((L) => {
            L.style[t.isHorizontal() ? "width" : "height"] = `${l * (m.dynamicMainBullets + 4)}px`;
          }),
          m.dynamicMainBullets > 1 &&
            C !== void 0 &&
            ((a += w - (C || 0)), a > m.dynamicMainBullets - 1 ? (a = m.dynamicMainBullets - 1) : a < 0 && (a = 0)),
          (k = Math.max(w - a, 0)),
          (I = k + (Math.min(b.length, m.dynamicMainBullets) - 1)),
          (z = (I + k) / 2)),
        b.forEach((L) => {
          const O = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((A) => `${m.bulletActiveClass}${A}`)]
            .map((A) => (typeof A == "string" && A.includes(" ") ? A.split(" ") : A))
            .flat();
          L.classList.remove(...O);
        }),
        y.length > 1)
      )
        b.forEach((L) => {
          const O = js(L);
          O === w ? L.classList.add(...m.bulletActiveClass.split(" ")) : t.isElement && L.setAttribute("part", "bullet"),
            m.dynamicBullets &&
              (O >= k && O <= I && L.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),
              O === k && c(L, "prev"),
              O === I && c(L, "next"));
        });
      else {
        const L = b[w];
        if (
          (L && L.classList.add(...m.bulletActiveClass.split(" ")),
          t.isElement &&
            b.forEach((O, A) => {
              O.setAttribute("part", A === w ? "bullet-active" : "bullet");
            }),
          m.dynamicBullets)
        ) {
          const O = b[k],
            A = b[I];
          for (let V = k; V <= I; V += 1) b[V] && b[V].classList.add(...`${m.bulletActiveClass}-main`.split(" "));
          c(O, "prev"), c(A, "next");
        }
      }
      if (m.dynamicBullets) {
        const L = Math.min(b.length, m.dynamicMainBullets + 4),
          O = (l * L - l) / 2 - z * l,
          A = d ? "right" : "left";
        b.forEach((V) => {
          V.style[t.isHorizontal() ? A : "top"] = `${O}px`;
        });
      }
    }
    y.forEach((b, k) => {
      if (
        (m.type === "fraction" &&
          (b.querySelectorAll(Pr(m.currentClass)).forEach((I) => {
            I.textContent = m.formatFractionCurrent(w + 1);
          }),
          b.querySelectorAll(Pr(m.totalClass)).forEach((I) => {
            I.textContent = m.formatFractionTotal(T);
          })),
        m.type === "progressbar")
      ) {
        let I;
        m.progressbarOpposite ? (I = t.isHorizontal() ? "vertical" : "horizontal") : (I = t.isHorizontal() ? "horizontal" : "vertical");
        const z = (w + 1) / T;
        let L = 1,
          O = 1;
        I === "horizontal" ? (L = z) : (O = z),
          b.querySelectorAll(Pr(m.progressbarFillClass)).forEach((A) => {
            (A.style.transform = `translate3d(0,0,0) scaleX(${L}) scaleY(${O})`), (A.style.transitionDuration = `${t.params.speed}ms`);
          });
      }
      m.type === "custom" && m.renderCustom
        ? ((b.innerHTML = m.renderCustom(t, w + 1, T)), k === 0 && i("paginationRender", b))
        : (k === 0 && i("paginationRender", b), i("paginationUpdate", b)),
        t.params.watchOverflow && t.enabled && b.classList[t.isLocked ? "add" : "remove"](m.lockClass);
    });
  }
  function v() {
    const d = t.params.pagination;
    if (o()) return;
    const m =
      t.virtual && t.params.virtual.enabled
        ? t.virtual.slides.length
        : t.grid && t.params.grid.rows > 1
        ? t.slides.length / Math.ceil(t.params.grid.rows)
        : t.slides.length;
    let y = t.pagination.el;
    y = Mt(y);
    let w = "";
    if (d.type === "bullets") {
      let C = t.params.loop ? Math.ceil(m / t.params.slidesPerGroup) : t.snapGrid.length;
      t.params.freeMode && t.params.freeMode.enabled && C > m && (C = m);
      for (let P = 0; P < C; P += 1)
        d.renderBullet
          ? (w += d.renderBullet.call(t, P, d.bulletClass))
          : (w += `<${d.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${d.bulletClass}"></${d.bulletElement}>`);
    }
    d.type === "fraction" &&
      (d.renderFraction
        ? (w = d.renderFraction.call(t, d.currentClass, d.totalClass))
        : (w = `<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`)),
      d.type === "progressbar" &&
        (d.renderProgressbar
          ? (w = d.renderProgressbar.call(t, d.progressbarFillClass))
          : (w = `<span class="${d.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      y.forEach((C) => {
        d.type !== "custom" && (C.innerHTML = w || ""),
          d.type === "bullets" && t.pagination.bullets.push(...C.querySelectorAll(Pr(d.bulletClass)));
      }),
      d.type !== "custom" && i("paginationRender", y[0]);
  }
  function _() {
    t.params.pagination = fh(t, t.originalParams.pagination, t.params.pagination, { el: "swiper-pagination" });
    const d = t.params.pagination;
    if (!d.el) return;
    let m;
    typeof d.el == "string" && t.isElement && (m = t.el.querySelector(d.el)),
      !m && typeof d.el == "string" && (m = [...document.querySelectorAll(d.el)]),
      m || (m = d.el),
      !(!m || m.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof d.el == "string" &&
          Array.isArray(m) &&
          m.length > 1 &&
          ((m = [...t.el.querySelectorAll(d.el)]), m.length > 1 && (m = m.find((y) => Qf(y, ".swiper")[0] === t.el))),
        Array.isArray(m) && m.length === 1 && (m = m[0]),
        Object.assign(t.pagination, { el: m }),
        (m = Mt(m)),
        m.forEach((y) => {
          d.type === "bullets" && d.clickable && y.classList.add(...(d.clickableClass || "").split(" ")),
            y.classList.add(d.modifierClass + d.type),
            y.classList.add(t.isHorizontal() ? d.horizontalClass : d.verticalClass),
            d.type === "bullets" &&
              d.dynamicBullets &&
              (y.classList.add(`${d.modifierClass}${d.type}-dynamic`), (a = 0), d.dynamicMainBullets < 1 && (d.dynamicMainBullets = 1)),
            d.type === "progressbar" && d.progressbarOpposite && y.classList.add(d.progressbarOppositeClass),
            d.clickable && y.addEventListener("click", p),
            t.enabled || y.classList.add(d.lockClass);
        }));
  }
  function x() {
    const d = t.params.pagination;
    if (o()) return;
    let m = t.pagination.el;
    m &&
      ((m = Mt(m)),
      m.forEach((y) => {
        y.classList.remove(d.hiddenClass),
          y.classList.remove(d.modifierClass + d.type),
          y.classList.remove(t.isHorizontal() ? d.horizontalClass : d.verticalClass),
          d.clickable && (y.classList.remove(...(d.clickableClass || "").split(" ")), y.removeEventListener("click", p));
      })),
      t.pagination.bullets && t.pagination.bullets.forEach((y) => y.classList.remove(...d.bulletActiveClass.split(" ")));
  }
  r("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return;
    const d = t.params.pagination;
    let { el: m } = t.pagination;
    (m = Mt(m)),
      m.forEach((y) => {
        y.classList.remove(d.horizontalClass, d.verticalClass), y.classList.add(t.isHorizontal() ? d.horizontalClass : d.verticalClass);
      });
  }),
    r("init", () => {
      t.params.pagination.enabled === !1 ? g() : (_(), v(), h());
    }),
    r("activeIndexChange", () => {
      typeof t.snapIndex > "u" && h();
    }),
    r("snapIndexChange", () => {
      h();
    }),
    r("snapGridLengthChange", () => {
      v(), h();
    }),
    r("destroy", () => {
      x();
    }),
    r("enable disable", () => {
      let { el: d } = t.pagination;
      d && ((d = Mt(d)), d.forEach((m) => m.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)));
    }),
    r("lock unlock", () => {
      h();
    }),
    r("click", (d, m) => {
      const y = m.target,
        w = Mt(t.pagination.el);
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        w &&
        w.length > 0 &&
        !y.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (t.navigation && ((t.navigation.nextEl && y === t.navigation.nextEl) || (t.navigation.prevEl && y === t.navigation.prevEl)))
          return;
        const C = w[0].classList.contains(t.params.pagination.hiddenClass);
        i(C === !0 ? "paginationShow" : "paginationHide"), w.forEach((P) => P.classList.toggle(t.params.pagination.hiddenClass));
      }
    });
  const j = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass);
      let { el: d } = t.pagination;
      d && ((d = Mt(d)), d.forEach((m) => m.classList.remove(t.params.pagination.paginationDisabledClass))), _(), v(), h();
    },
    g = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      let { el: d } = t.pagination;
      d && ((d = Mt(d)), d.forEach((m) => m.classList.add(t.params.pagination.paginationDisabledClass))), x();
    };
  Object.assign(t.pagination, { enable: j, disable: g, render: v, update: h, init: _, destroy: x });
}
function Da(e) {
  let { swiper: t, extendParams: n, on: r } = e;
  n({ parallax: { enabled: !1 } });
  const i =
      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
    s = (o, c) => {
      const { rtl: f } = t,
        p = f ? -1 : 1,
        h = o.getAttribute("data-swiper-parallax") || "0";
      let v = o.getAttribute("data-swiper-parallax-x"),
        _ = o.getAttribute("data-swiper-parallax-y");
      const x = o.getAttribute("data-swiper-parallax-scale"),
        j = o.getAttribute("data-swiper-parallax-opacity"),
        g = o.getAttribute("data-swiper-parallax-rotate");
      if (
        (v || _ ? ((v = v || "0"), (_ = _ || "0")) : t.isHorizontal() ? ((v = h), (_ = "0")) : ((_ = h), (v = "0")),
        v.indexOf("%") >= 0 ? (v = `${parseInt(v, 10) * c * p}%`) : (v = `${v * c * p}px`),
        _.indexOf("%") >= 0 ? (_ = `${parseInt(_, 10) * c}%`) : (_ = `${_ * c}px`),
        typeof j < "u" && j !== null)
      ) {
        const m = j - (j - 1) * (1 - Math.abs(c));
        o.style.opacity = m;
      }
      let d = `translate3d(${v}, ${_}, 0px)`;
      if (typeof x < "u" && x !== null) {
        const m = x - (x - 1) * (1 - Math.abs(c));
        d += ` scale(${m})`;
      }
      if (g && typeof g < "u" && g !== null) {
        const m = g * c * -1;
        d += ` rotate(${m}deg)`;
      }
      o.style.transform = d;
    },
    l = () => {
      const { el: o, slides: c, progress: f, snapGrid: p, isElement: h } = t,
        v = ot(o, i);
      t.isElement && v.push(...ot(t.hostEl, i)),
        v.forEach((_) => {
          s(_, f);
        }),
        c.forEach((_, x) => {
          let j = _.progress;
          t.params.slidesPerGroup > 1 && t.params.slidesPerView !== "auto" && (j += Math.ceil(x / 2) - f * (p.length - 1)),
            (j = Math.min(Math.max(j, -1), 1)),
            _.querySelectorAll(`${i}, [data-swiper-parallax-rotate]`).forEach((g) => {
              s(g, j);
            });
        });
    },
    a = function (o) {
      o === void 0 && (o = t.params.speed);
      const { el: c, hostEl: f } = t,
        p = [...c.querySelectorAll(i)];
      t.isElement && p.push(...f.querySelectorAll(i)),
        p.forEach((h) => {
          let v = parseInt(h.getAttribute("data-swiper-parallax-duration"), 10) || o;
          o === 0 && (v = 0), (h.style.transitionDuration = `${v}ms`);
        });
    };
  r("beforeInit", () => {
    t.params.parallax.enabled && ((t.params.watchSlidesProgress = !0), (t.originalParams.watchSlidesProgress = !0));
  }),
    r("init", () => {
      t.params.parallax.enabled && l();
    }),
    r("setTranslate", () => {
      t.params.parallax.enabled && l();
    }),
    r("setTransition", (o, c) => {
      t.params.parallax.enabled && a(c);
    });
}
function Aa(e) {
  let { swiper: t, extendParams: n, on: r, emit: i, params: s } = e;
  (t.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    n({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let l,
    a,
    o = s && s.autoplay ? s.autoplay.delay : 3e3,
    c = s && s.autoplay ? s.autoplay.delay : 3e3,
    f,
    p = new Date().getTime(),
    h,
    v,
    _,
    x,
    j,
    g,
    d;
  function m(S) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (S.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener("transitionend", m), !(d || (S.detail && S.detail.bySwiperTouchMove)) && k()));
  }
  const y = () => {
      if (t.destroyed || !t.autoplay.running) return;
      t.autoplay.paused ? (h = !0) : h && ((c = f), (h = !1));
      const S = t.autoplay.paused ? f : p + c - new Date().getTime();
      (t.autoplay.timeLeft = S),
        i("autoplayTimeLeft", S, S / o),
        (a = requestAnimationFrame(() => {
          y();
        }));
    },
    w = () => {
      let S;
      return (
        t.virtual && t.params.virtual.enabled
          ? (S = t.slides.find((M) => M.classList.contains("swiper-slide-active")))
          : (S = t.slides[t.activeIndex]),
        S ? parseInt(S.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    C = (S) => {
      if (t.destroyed || !t.autoplay.running) return;
      cancelAnimationFrame(a), y();
      let N = typeof S > "u" ? t.params.autoplay.delay : S;
      (o = t.params.autoplay.delay), (c = t.params.autoplay.delay);
      const M = w();
      !Number.isNaN(M) && M > 0 && typeof S > "u" && ((N = M), (o = M), (c = M)), (f = N);
      const R = t.params.speed,
        H = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev(R, !0, !0), i("autoplay"))
                : t.params.autoplay.stopOnLastSlide || (t.slideTo(t.slides.length - 1, R, !0, !0), i("autoplay"))
              : !t.isEnd || t.params.loop || t.params.rewind
              ? (t.slideNext(R, !0, !0), i("autoplay"))
              : t.params.autoplay.stopOnLastSlide || (t.slideTo(0, R, !0, !0), i("autoplay")),
            t.params.cssMode &&
              ((p = new Date().getTime()),
              requestAnimationFrame(() => {
                C();
              })));
        };
      return (
        N > 0
          ? (clearTimeout(l),
            (l = setTimeout(() => {
              H();
            }, N)))
          : requestAnimationFrame(() => {
              H();
            }),
        N
      );
    },
    P = () => {
      (p = new Date().getTime()), (t.autoplay.running = !0), C(), i("autoplayStart");
    },
    T = () => {
      (t.autoplay.running = !1), clearTimeout(l), cancelAnimationFrame(a), i("autoplayStop");
    },
    b = (S, N) => {
      if (t.destroyed || !t.autoplay.running) return;
      clearTimeout(l), S || (g = !0);
      const M = () => {
        i("autoplayPause"), t.params.autoplay.waitForTransition ? t.wrapperEl.addEventListener("transitionend", m) : k();
      };
      if (((t.autoplay.paused = !0), N)) {
        j && (f = t.params.autoplay.delay), (j = !1), M();
        return;
      }
      (f = (f || t.params.autoplay.delay) - (new Date().getTime() - p)), !(t.isEnd && f < 0 && !t.params.loop) && (f < 0 && (f = 0), M());
    },
    k = () => {
      (t.isEnd && f < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((p = new Date().getTime()), g ? ((g = !1), C(f)) : C(), (t.autoplay.paused = !1), i("autoplayResume"));
    },
    I = () => {
      if (t.destroyed || !t.autoplay.running) return;
      const S = Tt();
      S.visibilityState === "hidden" && ((g = !0), b(!0)), S.visibilityState === "visible" && k();
    },
    z = (S) => {
      S.pointerType === "mouse" && ((g = !0), (d = !0), !(t.animating || t.autoplay.paused) && b(!0));
    },
    L = (S) => {
      S.pointerType === "mouse" && ((d = !1), t.autoplay.paused && k());
    },
    O = () => {
      t.params.autoplay.pauseOnMouseEnter && (t.el.addEventListener("pointerenter", z), t.el.addEventListener("pointerleave", L));
    },
    A = () => {
      t.el && typeof t.el != "string" && (t.el.removeEventListener("pointerenter", z), t.el.removeEventListener("pointerleave", L));
    },
    V = () => {
      Tt().addEventListener("visibilitychange", I);
    },
    we = () => {
      Tt().removeEventListener("visibilitychange", I);
    };
  r("init", () => {
    t.params.autoplay.enabled && (O(), V(), P());
  }),
    r("destroy", () => {
      A(), we(), t.autoplay.running && T();
    }),
    r("_freeModeStaticRelease", () => {
      (_ || g) && k();
    }),
    r("_freeModeNoMomentumRelease", () => {
      t.params.autoplay.disableOnInteraction ? T() : b(!0, !0);
    }),
    r("beforeTransitionStart", (S, N, M) => {
      t.destroyed || !t.autoplay.running || (M || !t.params.autoplay.disableOnInteraction ? b(!0, !0) : T());
    }),
    r("sliderFirstMove", () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          T();
          return;
        }
        (v = !0),
          (_ = !1),
          (g = !1),
          (x = setTimeout(() => {
            (g = !0), (_ = !0), b(!0);
          }, 200));
      }
    }),
    r("touchEnd", () => {
      if (!(t.destroyed || !t.autoplay.running || !v)) {
        if ((clearTimeout(x), clearTimeout(l), t.params.autoplay.disableOnInteraction)) {
          (_ = !1), (v = !1);
          return;
        }
        _ && t.params.cssMode && k(), (_ = !1), (v = !1);
      }
    }),
    r("slideChange", () => {
      t.destroyed || !t.autoplay.running || (j = !0);
    }),
    Object.assign(t.autoplay, { start: P, stop: T, pause: b, resume: k });
}
const ph = "_information_e3zk5_1",
  mh = "_information_wrapper_e3zk5_13",
  hh = "_text_and_swiper_wrapper_e3zk5_31",
  gh = "_img_e3zk5_53",
  vh = "_information_text_e3zk5_61",
  _h = "_text_e3zk5_31",
  yh = "_button_e3zk5_99",
  xh = "_swiper_e3zk5_133",
  wh = "_information_mission_e3zk5_143",
  Sh = "_btns_e3zk5_183",
  jh = "_br_e3zk5_203",
  pt = {
    information: ph,
    information_wrapper: mh,
    text_and_swiper_wrapper: hh,
    img: gh,
    information_text: vh,
    text: _h,
    button: yh,
    swiper: xh,
    information_mission: wh,
    btns: Sh,
    br: jh,
  };
let El;
function kh() {
  const e = He(),
    t = Tt();
  return {
    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
    touch: !!("ontouchstart" in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
  };
}
function Yf() {
  return El || (El = kh()), El;
}
let Cl;
function Eh(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = Yf(),
    r = He(),
    i = r.navigator.platform,
    s = t || r.navigator.userAgent,
    l = { ios: !1, android: !1 },
    a = r.screen.width,
    o = r.screen.height,
    c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let f = s.match(/(iPad).*OS\s([\d_]+)/);
  const p = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    h = !f && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    v = i === "Win32";
  let _ = i === "MacIntel";
  const x = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !f && _ && n.touch && x.indexOf(`${a}x${o}`) >= 0 && ((f = s.match(/(Version)\/([\d.]+)/)), f || (f = [0, 1, "13_0_0"]), (_ = !1)),
    c && !v && ((l.os = "android"), (l.android = !0)),
    (f || h || p) && ((l.os = "ios"), (l.ios = !0)),
    l
  );
}
function Xf(e) {
  return e === void 0 && (e = {}), Cl || (Cl = Eh(e)), Cl;
}
let Nl;
function Ch() {
  const e = He(),
    t = Xf();
  let n = !1;
  function r() {
    const a = e.navigator.userAgent.toLowerCase();
    return a.indexOf("safari") >= 0 && a.indexOf("chrome") < 0 && a.indexOf("android") < 0;
  }
  if (r()) {
    const a = String(e.navigator.userAgent);
    if (a.includes("Version/")) {
      const [o, c] = a
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((f) => Number(f));
      n = o < 16 || (o === 16 && c < 2);
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
    s = r(),
    l = s || (i && t.ios);
  return { isSafari: n || s, needPerspectiveFix: n, need3dFix: l, isWebView: i };
}
function Zf() {
  return Nl || (Nl = Ch()), Nl;
}
function Nh(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = He();
  let s = null,
    l = null;
  const a = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
    },
    o = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((s = new ResizeObserver((p) => {
          l = i.requestAnimationFrame(() => {
            const { width: h, height: v } = t;
            let _ = h,
              x = v;
            p.forEach((j) => {
              let { contentBoxSize: g, contentRect: d, target: m } = j;
              (m && m !== t.el) || ((_ = d ? d.width : (g[0] || g).inlineSize), (x = d ? d.height : (g[0] || g).blockSize));
            }),
              (_ !== h || x !== v) && a();
          });
        })),
        s.observe(t.el));
    },
    c = () => {
      l && i.cancelAnimationFrame(l), s && s.unobserve && t.el && (s.unobserve(t.el), (s = null));
    },
    f = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      o();
      return;
    }
    i.addEventListener("resize", a), i.addEventListener("orientationchange", f);
  }),
    n("destroy", () => {
      c(), i.removeEventListener("resize", a), i.removeEventListener("orientationchange", f);
    });
}
function Th(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const s = [],
    l = He(),
    a = function (f, p) {
      p === void 0 && (p = {});
      const h = l.MutationObserver || l.WebkitMutationObserver,
        v = new h((_) => {
          if (t.__preventObserver__) return;
          if (_.length === 1) {
            i("observerUpdate", _[0]);
            return;
          }
          const x = function () {
            i("observerUpdate", _[0]);
          };
          l.requestAnimationFrame ? l.requestAnimationFrame(x) : l.setTimeout(x, 0);
        });
      v.observe(f, {
        attributes: typeof p.attributes > "u" ? !0 : p.attributes,
        childList: t.isElement || (typeof p.childList > "u" ? !0 : p).childList,
        characterData: typeof p.characterData > "u" ? !0 : p.characterData,
      }),
        s.push(v);
    },
    o = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const f = Qf(t.hostEl);
          for (let p = 0; p < f.length; p += 1) a(f[p]);
        }
        a(t.hostEl, { childList: t.params.observeSlideChildren }), a(t.wrapperEl, { attributes: !1 });
      }
    },
    c = () => {
      s.forEach((f) => {
        f.disconnect();
      }),
        s.splice(0, s.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), r("init", o), r("destroy", c);
}
var Ph = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((s) => {
        r.eventsListeners[s] || (r.eventsListeners[s] = []), r.eventsListeners[s][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var s = arguments.length, l = new Array(s), a = 0; a < s; a++) l[a] = arguments[a];
      t.apply(r, l);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, s) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) && n.eventsListeners[r].splice(s, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
    return (
      typeof s[0] == "string" || Array.isArray(s[0])
        ? ((t = s[0]), (n = s.slice(1, s.length)), (r = e))
        : ((t = s[0].events), (n = s[0].data), (r = s[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((o) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((c) => {
            c.apply(r, [o, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[o] &&
            e.eventsListeners[o].forEach((c) => {
              c.apply(r, n);
            });
      }),
      e
    );
  },
};
function bh() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null ? (t = e.params.width) : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null ? (n = e.params.height) : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t = t - parseInt(Jt(r, "padding-left") || 0, 10) - parseInt(Jt(r, "padding-right") || 0, 10)),
      (n = n - parseInt(Jt(r, "padding-top") || 0, 10) - parseInt(Jt(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }));
}
function Mh() {
  const e = this;
  function t(k, I) {
    return parseFloat(k.getPropertyValue(e.getDirectionLabel(I)) || 0);
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: s, rtlTranslate: l, wrongRTL: a } = e,
    o = e.virtual && n.virtual.enabled,
    c = o ? e.virtual.slides.length : e.slides.length,
    f = ot(i, `.${e.params.slideClass}, swiper-slide`),
    p = o ? e.virtual.slides.length : f.length;
  let h = [];
  const v = [],
    _ = [];
  let x = n.slidesOffsetBefore;
  typeof x == "function" && (x = n.slidesOffsetBefore.call(e));
  let j = n.slidesOffsetAfter;
  typeof j == "function" && (j = n.slidesOffsetAfter.call(e));
  const g = e.snapGrid.length,
    d = e.slidesGrid.length;
  let m = n.spaceBetween,
    y = -x,
    w = 0,
    C = 0;
  if (typeof s > "u") return;
  typeof m == "string" && m.indexOf("%") >= 0
    ? (m = (parseFloat(m.replace("%", "")) / 100) * s)
    : typeof m == "string" && (m = parseFloat(m)),
    (e.virtualSize = -m),
    f.forEach((k) => {
      l ? (k.style.marginLeft = "") : (k.style.marginRight = ""), (k.style.marginBottom = ""), (k.style.marginTop = "");
    }),
    n.centeredSlides && n.cssMode && (zi(r, "--swiper-centered-offset-before", ""), zi(r, "--swiper-centered-offset-after", ""));
  const P = n.grid && n.grid.rows > 1 && e.grid;
  P ? e.grid.initSlides(f) : e.grid && e.grid.unsetSlides();
  let T;
  const b =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter((k) => typeof n.breakpoints[k].slidesPerView < "u").length > 0;
  for (let k = 0; k < p; k += 1) {
    T = 0;
    let I;
    if ((f[k] && (I = f[k]), P && e.grid.updateSlide(k, I, f), !(f[k] && Jt(I, "display") === "none"))) {
      if (n.slidesPerView === "auto") {
        b && (f[k].style[e.getDirectionLabel("width")] = "");
        const z = getComputedStyle(I),
          L = I.style.transform,
          O = I.style.webkitTransform;
        if ((L && (I.style.transform = "none"), O && (I.style.webkitTransform = "none"), n.roundLengths))
          T = e.isHorizontal() ? Lo(I, "width") : Lo(I, "height");
        else {
          const A = t(z, "width"),
            V = t(z, "padding-left"),
            we = t(z, "padding-right"),
            S = t(z, "margin-left"),
            N = t(z, "margin-right"),
            M = z.getPropertyValue("box-sizing");
          if (M && M === "border-box") T = A + S + N;
          else {
            const { clientWidth: R, offsetWidth: H } = I;
            T = A + V + we + S + N + (H - R);
          }
        }
        L && (I.style.transform = L), O && (I.style.webkitTransform = O), n.roundLengths && (T = Math.floor(T));
      } else
        (T = (s - (n.slidesPerView - 1) * m) / n.slidesPerView),
          n.roundLengths && (T = Math.floor(T)),
          f[k] && (f[k].style[e.getDirectionLabel("width")] = `${T}px`);
      f[k] && (f[k].swiperSlideSize = T),
        _.push(T),
        n.centeredSlides
          ? ((y = y + T / 2 + w / 2 + m),
            w === 0 && k !== 0 && (y = y - s / 2 - m),
            k === 0 && (y = y - s / 2 - m),
            Math.abs(y) < 1 / 1e3 && (y = 0),
            n.roundLengths && (y = Math.floor(y)),
            C % n.slidesPerGroup === 0 && h.push(y),
            v.push(y))
          : (n.roundLengths && (y = Math.floor(y)),
            (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup === 0 && h.push(y),
            v.push(y),
            (y = y + T + m)),
        (e.virtualSize += T + m),
        (w = T),
        (C += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, s) + j),
    l && a && (n.effect === "slide" || n.effect === "coverflow") && (r.style.width = `${e.virtualSize + m}px`),
    n.setWrapperSize && (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + m}px`),
    P && e.grid.updateWrapperSize(T, h),
    !n.centeredSlides)
  ) {
    const k = [];
    for (let I = 0; I < h.length; I += 1) {
      let z = h[I];
      n.roundLengths && (z = Math.floor(z)), h[I] <= e.virtualSize - s && k.push(z);
    }
    (h = k), Math.floor(e.virtualSize - s) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - s);
  }
  if (o && n.loop) {
    const k = _[0] + m;
    if (n.slidesPerGroup > 1) {
      const I = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup),
        z = k * n.slidesPerGroup;
      for (let L = 0; L < I; L += 1) h.push(h[h.length - 1] + z);
    }
    for (let I = 0; I < e.virtual.slidesBefore + e.virtual.slidesAfter; I += 1)
      n.slidesPerGroup === 1 && h.push(h[h.length - 1] + k), v.push(v[v.length - 1] + k), (e.virtualSize += k);
  }
  if ((h.length === 0 && (h = [0]), m !== 0)) {
    const k = e.isHorizontal() && l ? "marginLeft" : e.getDirectionLabel("marginRight");
    f.filter((I, z) => (!n.cssMode || n.loop ? !0 : z !== f.length - 1)).forEach((I) => {
      I.style[k] = `${m}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let k = 0;
    _.forEach((z) => {
      k += z + (m || 0);
    }),
      (k -= m);
    const I = k > s ? k - s : 0;
    h = h.map((z) => (z <= 0 ? -x : z > I ? I + j : z));
  }
  if (n.centerInsufficientSlides) {
    let k = 0;
    _.forEach((z) => {
      k += z + (m || 0);
    }),
      (k -= m);
    const I = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0);
    if (k + I < s) {
      const z = (s - k - I) / 2;
      h.forEach((L, O) => {
        h[O] = L - z;
      }),
        v.forEach((L, O) => {
          v[O] = L + z;
        });
    }
  }
  if (
    (Object.assign(e, { slides: f, snapGrid: h, slidesGrid: v, slidesSizesGrid: _ }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    zi(r, "--swiper-centered-offset-before", `${-h[0]}px`),
      zi(r, "--swiper-centered-offset-after", `${e.size / 2 - _[_.length - 1] / 2}px`);
    const k = -e.snapGrid[0],
      I = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((z) => z + k)), (e.slidesGrid = e.slidesGrid.map((z) => z + I));
  }
  if (
    (p !== c && e.emit("slidesLengthChange"),
    h.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
    v.length !== d && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !o && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const k = `${n.containerModifierClass}backface-hidden`,
      I = e.el.classList.contains(k);
    p <= n.maxBackfaceHiddenSlides ? I || e.el.classList.add(k) : I && e.el.classList.remove(k);
  }
}
function Ih(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    s;
  typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
  const l = (a) => (r ? t.slides[t.getSlideIndexByData(a)] : t.slides[a]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((a) => {
        n.push(a);
      });
    else
      for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
        const a = t.activeIndex + s;
        if (a > t.slides.length && !r) break;
        n.push(l(a));
      }
  else n.push(l(t.activeIndex));
  for (s = 0; s < n.length; s += 1)
    if (typeof n[s] < "u") {
      const a = n[s].offsetHeight;
      i = a > i ? a : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function Lh() {
  const e = this,
    t = e.slides,
    n = e.isElement ? (e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop) : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset = (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - n - e.cssOverflowAdjustment();
}
const fc = (e, t, n) => {
  t && !e.classList.contains(n) ? e.classList.add(n) : !t && e.classList.contains(n) && e.classList.remove(n);
};
function $h(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: s } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let l = -e;
  i && (l = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
  let a = n.spaceBetween;
  typeof a == "string" && a.indexOf("%") >= 0
    ? (a = (parseFloat(a.replace("%", "")) / 100) * t.size)
    : typeof a == "string" && (a = parseFloat(a));
  for (let o = 0; o < r.length; o += 1) {
    const c = r[o];
    let f = c.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (f -= r[0].swiperSlideOffset);
    const p = (l + (n.centeredSlides ? t.minTranslate() : 0) - f) / (c.swiperSlideSize + a),
      h = (l - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - f) / (c.swiperSlideSize + a),
      v = -(l - f),
      _ = v + t.slidesSizesGrid[o],
      x = v >= 0 && v <= t.size - t.slidesSizesGrid[o],
      j = (v >= 0 && v < t.size - 1) || (_ > 1 && _ <= t.size) || (v <= 0 && _ >= t.size);
    j && (t.visibleSlides.push(c), t.visibleSlidesIndexes.push(o)),
      fc(c, j, n.slideVisibleClass),
      fc(c, x, n.slideFullyVisibleClass),
      (c.progress = i ? -p : p),
      (c.originalProgress = i ? -h : h);
  }
}
function Oh(e) {
  const t = this;
  if (typeof e > "u") {
    const f = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * f) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: s, isEnd: l, progressLoop: a } = t;
  const o = s,
    c = l;
  if (r === 0) (i = 0), (s = !0), (l = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const f = Math.abs(e - t.minTranslate()) < 1,
      p = Math.abs(e - t.maxTranslate()) < 1;
    (s = f || i <= 0), (l = p || i >= 1), f && (i = 0), p && (i = 1);
  }
  if (n.loop) {
    const f = t.getSlideIndexByData(0),
      p = t.getSlideIndexByData(t.slides.length - 1),
      h = t.slidesGrid[f],
      v = t.slidesGrid[p],
      _ = t.slidesGrid[t.slidesGrid.length - 1],
      x = Math.abs(e);
    x >= h ? (a = (x - h) / _) : (a = (x + _ - v) / _), a > 1 && (a -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: a, isBeginning: s, isEnd: l }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) && t.updateSlidesProgress(e),
    s && !o && t.emit("reachBeginning toEdge"),
    l && !c && t.emit("reachEnd toEdge"),
    ((o && !s) || (c && !l)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
const Tl = (e, t, n) => {
  t && !e.classList.contains(n) ? e.classList.add(n) : !t && e.classList.contains(n) && e.classList.remove(n);
};
function zh() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    s = e.virtual && n.virtual.enabled,
    l = e.grid && n.grid && n.grid.rows > 1,
    a = (p) => ot(r, `.${n.slideClass}${p}, swiper-slide${p}`)[0];
  let o, c, f;
  if (s)
    if (n.loop) {
      let p = i - e.virtual.slidesBefore;
      p < 0 && (p = e.virtual.slides.length + p),
        p >= e.virtual.slides.length && (p -= e.virtual.slides.length),
        (o = a(`[data-swiper-slide-index="${p}"]`));
    } else o = a(`[data-swiper-slide-index="${i}"]`);
  else
    l
      ? ((o = t.find((p) => p.column === i)), (f = t.find((p) => p.column === i + 1)), (c = t.find((p) => p.column === i - 1)))
      : (o = t[i]);
  o &&
    (l ||
      ((f = dh(o, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !f && (f = t[0]),
      (c = ch(o, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c === 0 && (c = t[t.length - 1]))),
    t.forEach((p) => {
      Tl(p, p === o, n.slideActiveClass), Tl(p, p === f, n.slideNextClass), Tl(p, p === c, n.slidePrevClass);
    }),
    e.emitSlidesClasses();
}
const Qi = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot && ((i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)), i && i.remove());
            })),
        i && i.remove();
    }
  },
  Pl = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  $o = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const l = i,
        a = [l - t];
      a.push(...Array.from({ length: t }).map((o, c) => l + r + c)),
        e.slides.forEach((o, c) => {
          a.includes(o.column) && Pl(e, c);
        });
      return;
    }
    const s = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let l = i - t; l <= s + t; l += 1) {
        const a = ((l % n) + n) % n;
        (a < i || a > s) && Pl(e, a);
      }
    else for (let l = Math.max(i - t, 0); l <= Math.min(s + t, n - 1); l += 1) l !== i && (l > s || l < i) && Pl(e, l);
  };
function Rh(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let s = 0; s < t.length; s += 1)
    typeof t[s + 1] < "u"
      ? r >= t[s] && r < t[s + 1] - (t[s + 1] - t[s]) / 2
        ? (i = s)
        : r >= t[s] && r < t[s + 1] && (i = s + 1)
      : r >= t[s] && (i = s);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function Dh(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: s, realIndex: l, snapIndex: a } = t;
  let o = e,
    c;
  const f = (v) => {
    let _ = v - t.virtual.slidesBefore;
    return _ < 0 && (_ = t.virtual.slides.length + _), _ >= t.virtual.slides.length && (_ -= t.virtual.slides.length), _;
  };
  if ((typeof o > "u" && (o = Rh(t)), r.indexOf(n) >= 0)) c = r.indexOf(n);
  else {
    const v = Math.min(i.slidesPerGroupSkip, o);
    c = v + Math.floor((o - v) / i.slidesPerGroup);
  }
  if ((c >= r.length && (c = r.length - 1), o === s && !t.params.loop)) {
    c !== a && ((t.snapIndex = c), t.emit("snapIndexChange"));
    return;
  }
  if (o === s && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = f(o);
    return;
  }
  const p = t.grid && i.grid && i.grid.rows > 1;
  let h;
  if (t.virtual && i.virtual.enabled && i.loop) h = f(o);
  else if (p) {
    const v = t.slides.find((x) => x.column === o);
    let _ = parseInt(v.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(_) && (_ = Math.max(t.slides.indexOf(v), 0)), (h = Math.floor(_ / i.grid.rows));
  } else if (t.slides[o]) {
    const v = t.slides[o].getAttribute("data-swiper-slide-index");
    v ? (h = parseInt(v, 10)) : (h = o);
  } else h = o;
  Object.assign(t, { previousSnapIndex: a, snapIndex: c, previousRealIndex: l, realIndex: h, previousIndex: s, activeIndex: o }),
    t.initialized && $o(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) && (l !== h && t.emit("realIndexChange"), t.emit("slideChange"));
}
function Ah(e, t) {
  const n = this,
    r = n.params;
  let i = e.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((a) => {
      !i && a.matches && a.matches(`.${r.slideClass}, swiper-slide`) && (i = a);
    });
  let s = !1,
    l;
  if (i) {
    for (let a = 0; a < n.slides.length; a += 1)
      if (n.slides[a] === i) {
        (s = !0), (l = a);
        break;
      }
  }
  if (i && s)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10))
        : (n.clickedIndex = l);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide && n.clickedIndex !== void 0 && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide();
}
var Bh = {
  updateSize: bh,
  updateSlides: Mh,
  updateAutoHeight: Ih,
  updateSlidesOffset: Lh,
  updateSlidesProgress: $h,
  updateProgress: Oh,
  updateSlidesClasses: zh,
  updateActiveIndex: Dh,
  updateClickedSlide: Ah,
};
function Fh(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: s } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let l = lh(s, e);
  return (l += t.cssOverflowAdjustment()), r && (l = -l), l || 0;
}
function Vh(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: s, progress: l } = n;
  let a = 0,
    o = 0;
  const c = 0;
  n.isHorizontal() ? (a = r ? -e : e) : (o = e),
    i.roundLengths && ((a = Math.floor(a)), (o = Math.floor(o))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? a : o),
    i.cssMode
      ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -a : -o)
      : i.virtualTranslate ||
        (n.isHorizontal() ? (a -= n.cssOverflowAdjustment()) : (o -= n.cssOverflowAdjustment()),
        (s.style.transform = `translate3d(${a}px, ${o}px, ${c}px)`));
  let f;
  const p = n.maxTranslate() - n.minTranslate();
  p === 0 ? (f = 0) : (f = (e - n.minTranslate()) / p), f !== l && n.updateProgress(e), n.emit("setTranslate", n.translate, t);
}
function Hh() {
  return -this.snapGrid[0];
}
function Wh() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Uh(e, t, n, r, i) {
  e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), n === void 0 && (n = !0), r === void 0 && (r = !0);
  const s = this,
    { params: l, wrapperEl: a } = s;
  if (s.animating && l.preventInteractionOnTransition) return !1;
  const o = s.minTranslate(),
    c = s.maxTranslate();
  let f;
  if ((r && e > o ? (f = o) : r && e < c ? (f = c) : (f = e), s.updateProgress(f), l.cssMode)) {
    const p = s.isHorizontal();
    if (t === 0) a[p ? "scrollLeft" : "scrollTop"] = -f;
    else {
      if (!s.support.smoothScroll) return Kf({ swiper: s, targetPosition: -f, side: p ? "left" : "top" }), !0;
      a.scrollTo({ [p ? "left" : "top"]: -f, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (s.setTransition(0), s.setTranslate(f), n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd")))
      : (s.setTransition(t),
        s.setTranslate(f),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = function (h) {
              !s ||
                s.destroyed ||
                (h.target === this &&
                  (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd),
                  (s.onTranslateToWrapperTransitionEnd = null),
                  delete s.onTranslateToWrapperTransitionEnd,
                  (s.animating = !1),
                  n && s.emit("transitionEnd")));
            }),
          s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))),
    !0
  );
}
var Gh = { getTranslate: Fh, setTranslate: Vh, minTranslate: Hh, maxTranslate: Wh, translateTo: Uh };
function qh(e, t) {
  const n = this;
  n.params.cssMode || ((n.wrapperEl.style.transitionDuration = `${e}ms`), (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function Jf(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: s, previousIndex: l } = t;
  let a = r;
  if ((a || (s > l ? (a = "next") : s < l ? (a = "prev") : (a = "reset")), t.emit(`transition${i}`), n && s !== l)) {
    if (a === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`), a === "next" ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`);
  }
}
function Kh(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode || (r.autoHeight && n.updateAutoHeight(), Jf({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function Qh(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1), !r.cssMode && (n.setTransition(0), Jf({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var Yh = { setTransition: qh, transitionStart: Kh, transitionEnd: Qh };
function Xh(e, t, n, r, i) {
  e === void 0 && (e = 0), n === void 0 && (n = !0), typeof e == "string" && (e = parseInt(e, 10));
  const s = this;
  let l = e;
  l < 0 && (l = 0);
  const { params: a, snapGrid: o, slidesGrid: c, previousIndex: f, activeIndex: p, rtlTranslate: h, wrapperEl: v, enabled: _ } = s;
  if ((!_ && !r && !i) || s.destroyed || (s.animating && a.preventInteractionOnTransition)) return !1;
  typeof t > "u" && (t = s.params.speed);
  const x = Math.min(s.params.slidesPerGroupSkip, l);
  let j = x + Math.floor((l - x) / s.params.slidesPerGroup);
  j >= o.length && (j = o.length - 1);
  const g = -o[j];
  if (a.normalizeSlideIndex)
    for (let P = 0; P < c.length; P += 1) {
      const T = -Math.floor(g * 100),
        b = Math.floor(c[P] * 100),
        k = Math.floor(c[P + 1] * 100);
      typeof c[P + 1] < "u" ? (T >= b && T < k - (k - b) / 2 ? (l = P) : T >= b && T < k && (l = P + 1)) : T >= b && (l = P);
    }
  if (
    s.initialized &&
    l !== p &&
    ((!s.allowSlideNext && (h ? g > s.translate && g > s.minTranslate() : g < s.translate && g < s.minTranslate())) ||
      (!s.allowSlidePrev && g > s.translate && g > s.maxTranslate() && (p || 0) !== l))
  )
    return !1;
  l !== (f || 0) && n && s.emit("beforeSlideChangeStart"), s.updateProgress(g);
  let d;
  l > p ? (d = "next") : l < p ? (d = "prev") : (d = "reset");
  const m = s.virtual && s.params.virtual.enabled;
  if (!(m && i) && ((h && -g === s.translate) || (!h && g === s.translate)))
    return (
      s.updateActiveIndex(l),
      a.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      a.effect !== "slide" && s.setTranslate(g),
      d !== "reset" && (s.transitionStart(n, d), s.transitionEnd(n, d)),
      !1
    );
  if (a.cssMode) {
    const P = s.isHorizontal(),
      T = h ? g : -g;
    if (t === 0)
      m && ((s.wrapperEl.style.scrollSnapType = "none"), (s._immediateVirtual = !0)),
        m && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
          ? ((s._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              v[P ? "scrollLeft" : "scrollTop"] = T;
            }))
          : (v[P ? "scrollLeft" : "scrollTop"] = T),
        m &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""), (s._immediateVirtual = !1);
          });
    else {
      if (!s.support.smoothScroll) return Kf({ swiper: s, targetPosition: T, side: P ? "left" : "top" }), !0;
      v.scrollTo({ [P ? "left" : "top"]: T, behavior: "smooth" });
    }
    return !0;
  }
  const C = Zf().isSafari;
  return (
    m && !i && C && s.isElement && s.virtual.update(!1, !1, l),
    s.setTransition(t),
    s.setTranslate(g),
    s.updateActiveIndex(l),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", t, r),
    s.transitionStart(n, d),
    t === 0
      ? s.transitionEnd(n, d)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (T) {
            !s ||
              s.destroyed ||
              (T.target === this &&
                (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                (s.onSlideToWrapperTransitionEnd = null),
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(n, d)));
          }),
        s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)),
    !0
  );
}
function Zh(e, t, n, r) {
  e === void 0 && (e = 0), n === void 0 && (n = !0), typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  if (i.destroyed) return;
  typeof t > "u" && (t = i.params.speed);
  const s = i.grid && i.params.grid && i.params.grid.rows > 1;
  let l = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) l = l + i.virtual.slidesBefore;
    else {
      let a;
      if (s) {
        const h = l * i.params.grid.rows;
        a = i.slides.find((v) => v.getAttribute("data-swiper-slide-index") * 1 === h).column;
      } else a = i.getSlideIndexByData(l);
      const o = s ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
        { centeredSlides: c } = i.params;
      let f = i.params.slidesPerView;
      f === "auto"
        ? (f = i.slidesPerViewDynamic())
        : ((f = Math.ceil(parseFloat(i.params.slidesPerView, 10))), c && f % 2 === 0 && (f = f + 1));
      let p = o - a < f;
      if ((c && (p = p || a < Math.ceil(f / 2)), r && c && i.params.slidesPerView !== "auto" && !s && (p = !1), p)) {
        const h = c ? (a < i.activeIndex ? "prev" : "next") : a - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
        i.loopFix({
          direction: h,
          slideTo: !0,
          activeSlideIndex: h === "next" ? a + 1 : a - o + 1,
          slideRealIndex: h === "next" ? i.realIndex : void 0,
        });
      }
      if (s) {
        const h = l * i.params.grid.rows;
        l = i.slides.find((v) => v.getAttribute("data-swiper-slide-index") * 1 === h).column;
      } else l = i.getSlideIndexByData(l);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(l, t, n, r);
    }),
    i
  );
}
function Jh(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: s, animating: l } = r;
  if (!i || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  let a = s.slidesPerGroup;
  s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const o = r.activeIndex < s.slidesPerGroupSkip ? 1 : a,
    c = r.virtual && s.virtual.enabled;
  if (s.loop) {
    if (l && !c && s.loopPreventsSliding) return !1;
    if ((r.loopFix({ direction: "next" }), (r._clientLeft = r.wrapperEl.clientLeft), r.activeIndex === r.slides.length - 1 && s.cssMode))
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + o, e, t, n);
        }),
        !0
      );
  }
  return s.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + o, e, t, n);
}
function eg(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    { params: i, snapGrid: s, slidesGrid: l, rtlTranslate: a, enabled: o, animating: c } = r;
  if (!o || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  const f = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (c && !f && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const p = a ? r.translate : -r.translate;
  function h(d) {
    return d < 0 ? -Math.floor(Math.abs(d)) : Math.floor(d);
  }
  const v = h(p),
    _ = s.map((d) => h(d)),
    x = i.freeMode && i.freeMode.enabled;
  let j = s[_.indexOf(v) - 1];
  if (typeof j > "u" && (i.cssMode || x)) {
    let d;
    s.forEach((m, y) => {
      v >= m && (d = y);
    }),
      typeof d < "u" && (j = x ? s[d] : s[d > 0 ? d - 1 : d]);
  }
  let g = 0;
  if (
    (typeof j < "u" &&
      ((g = l.indexOf(j)),
      g < 0 && (g = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((g = g - r.slidesPerViewDynamic("previous", !0) + 1), (g = Math.max(g, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const d = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
    return r.slideTo(d, e, t, n);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(g, e, t, n);
      }),
      !0
    );
  return r.slideTo(g, e, t, n);
}
function tg(e, t, n) {
  t === void 0 && (t = !0);
  const r = this;
  if (!r.destroyed) return typeof e > "u" && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n);
}
function ng(e, t, n, r) {
  t === void 0 && (t = !0), r === void 0 && (r = 0.5);
  const i = this;
  if (i.destroyed) return;
  typeof e > "u" && (e = i.params.speed);
  let s = i.activeIndex;
  const l = Math.min(i.params.slidesPerGroupSkip, s),
    a = l + Math.floor((s - l) / i.params.slidesPerGroup),
    o = i.rtlTranslate ? i.translate : -i.translate;
  if (o >= i.snapGrid[a]) {
    const c = i.snapGrid[a],
      f = i.snapGrid[a + 1];
    o - c > (f - c) * r && (s += i.params.slidesPerGroup);
  } else {
    const c = i.snapGrid[a - 1],
      f = i.snapGrid[a];
    o - c <= (f - c) * r && (s -= i.params.slidesPerGroup);
  }
  return (s = Math.max(s, 0)), (s = Math.min(s, i.slidesGrid.length - 1)), i.slideTo(s, e, t, n);
}
function rg() {
  const e = this;
  if (e.destroyed) return;
  const { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    s;
  const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (s = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 || i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(ot(n, `${l}[data-swiper-slide-index="${s}"]`)[0])),
            Io(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(ot(n, `${l}[data-swiper-slide-index="${s}"]`)[0])),
          Io(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var ig = { slideTo: Xh, slideToLoop: Zh, slideNext: Jh, slidePrev: eg, slideReset: tg, slideToClosest: ng, slideToClickedSlide: rg };
function sg(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  const i = () => {
      ot(r, `.${n.slideClass}, swiper-slide`).forEach((p, h) => {
        p.setAttribute("data-swiper-slide-index", h);
      });
    },
    s = t.grid && n.grid && n.grid.rows > 1,
    l = n.slidesPerGroup * (s ? n.grid.rows : 1),
    a = t.slides.length % l !== 0,
    o = s && t.slides.length % n.grid.rows !== 0,
    c = (f) => {
      for (let p = 0; p < f; p += 1) {
        const h = t.isElement ? Ss("swiper-slide", [n.slideBlankClass]) : Ss("div", [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(h);
      }
    };
  if (a) {
    if (n.loopAddBlankSlides) {
      const f = l - (t.slides.length % l);
      c(f), t.recalcSlides(), t.updateSlides();
    } else
      ws(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else if (o) {
    if (n.loopAddBlankSlides) {
      const f = n.grid.rows - (t.slides.length % n.grid.rows);
      c(f), t.recalcSlides(), t.updateSlides();
    } else
      ws(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else i();
  t.loopFix({ slideRealIndex: e, direction: n.centeredSlides ? void 0 : "next" });
}
function lg(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: s,
    byController: l,
    byMousewheel: a,
  } = e === void 0 ? {} : e;
  const o = this;
  if (!o.params.loop) return;
  o.emit("beforeLoopFix");
  const { slides: c, allowSlidePrev: f, allowSlideNext: p, slidesEl: h, params: v } = o,
    { centeredSlides: _ } = v;
  if (((o.allowSlidePrev = !0), (o.allowSlideNext = !0), o.virtual && v.virtual.enabled)) {
    n &&
      (!v.centeredSlides && o.snapIndex === 0
        ? o.slideTo(o.virtual.slides.length, 0, !1, !0)
        : v.centeredSlides && o.snapIndex < v.slidesPerView
        ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
        : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
      (o.allowSlidePrev = f),
      (o.allowSlideNext = p),
      o.emit("loopFix");
    return;
  }
  let x = v.slidesPerView;
  x === "auto" ? (x = o.slidesPerViewDynamic()) : ((x = Math.ceil(parseFloat(v.slidesPerView, 10))), _ && x % 2 === 0 && (x = x + 1));
  const j = v.slidesPerGroupAuto ? x : v.slidesPerGroup;
  let g = j;
  g % j !== 0 && (g += j - (g % j)), (g += v.loopAdditionalSlides), (o.loopedSlides = g);
  const d = o.grid && v.grid && v.grid.rows > 1;
  c.length < x + g
    ? ws(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : d && v.grid.fill === "row" && ws("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const m = [],
    y = [];
  let w = o.activeIndex;
  typeof s > "u" ? (s = o.getSlideIndex(c.find((L) => L.classList.contains(v.slideActiveClass)))) : (w = s);
  const C = r === "next" || !r,
    P = r === "prev" || !r;
  let T = 0,
    b = 0;
  const k = d ? Math.ceil(c.length / v.grid.rows) : c.length,
    z = (d ? c[s].column : s) + (_ && typeof i > "u" ? -x / 2 + 0.5 : 0);
  if (z < g) {
    T = Math.max(g - z, j);
    for (let L = 0; L < g - z; L += 1) {
      const O = L - Math.floor(L / k) * k;
      if (d) {
        const A = k - O - 1;
        for (let V = c.length - 1; V >= 0; V -= 1) c[V].column === A && m.push(V);
      } else m.push(k - O - 1);
    }
  } else if (z + x > k - g) {
    b = Math.max(z - (k - g * 2), j);
    for (let L = 0; L < b; L += 1) {
      const O = L - Math.floor(L / k) * k;
      d
        ? c.forEach((A, V) => {
            A.column === O && y.push(V);
          })
        : y.push(O);
    }
  }
  if (
    ((o.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      o.__preventObserver__ = !1;
    }),
    P &&
      m.forEach((L) => {
        (c[L].swiperLoopMoveDOM = !0), h.prepend(c[L]), (c[L].swiperLoopMoveDOM = !1);
      }),
    C &&
      y.forEach((L) => {
        (c[L].swiperLoopMoveDOM = !0), h.append(c[L]), (c[L].swiperLoopMoveDOM = !1);
      }),
    o.recalcSlides(),
    v.slidesPerView === "auto"
      ? o.updateSlides()
      : d &&
        ((m.length > 0 && P) || (y.length > 0 && C)) &&
        o.slides.forEach((L, O) => {
          o.grid.updateSlide(O, L, o.slides);
        }),
    v.watchSlidesProgress && o.updateSlidesOffset(),
    n)
  ) {
    if (m.length > 0 && P) {
      if (typeof t > "u") {
        const L = o.slidesGrid[w],
          A = o.slidesGrid[w + T] - L;
        a
          ? o.setTranslate(o.translate - A)
          : (o.slideTo(w + Math.ceil(T), 0, !1, !0),
            i &&
              ((o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - A),
              (o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - A)));
      } else if (i) {
        const L = d ? m.length / v.grid.rows : m.length;
        o.slideTo(o.activeIndex + L, 0, !1, !0), (o.touchEventsData.currentTranslate = o.translate);
      }
    } else if (y.length > 0 && C)
      if (typeof t > "u") {
        const L = o.slidesGrid[w],
          A = o.slidesGrid[w - b] - L;
        a
          ? o.setTranslate(o.translate - A)
          : (o.slideTo(w - b, 0, !1, !0),
            i &&
              ((o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - A),
              (o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - A)));
      } else {
        const L = d ? y.length / v.grid.rows : y.length;
        o.slideTo(o.activeIndex - L, 0, !1, !0);
      }
  }
  if (((o.allowSlidePrev = f), (o.allowSlideNext = p), o.controller && o.controller.control && !l)) {
    const L = { slideRealIndex: t, direction: r, setTranslate: i, activeSlideIndex: s, byController: !0 };
    Array.isArray(o.controller.control)
      ? o.controller.control.forEach((O) => {
          !O.destroyed && O.params.loop && O.loopFix({ ...L, slideTo: O.params.slidesPerView === v.slidesPerView ? n : !1 });
        })
      : o.controller.control instanceof o.constructor &&
        o.controller.control.params.loop &&
        o.controller.control.loopFix({ ...L, slideTo: o.controller.control.params.slidesPerView === v.slidesPerView ? n : !1 });
  }
  o.emit("loopFix");
}
function og() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const s = typeof i.swiperSlideIndex > "u" ? i.getAttribute("data-swiper-slide-index") * 1 : i.swiperSlideIndex;
    r[s] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var ag = { loopCreate: sg, loopFix: lg, loopDestroy: og };
function ug(e) {
  const t = this;
  if (!t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode) return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function cg() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var dg = { setGrabCursor: ug, unsetGrabCursor: cg };
function fg(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === Tt() || r === He()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function pc(e, t, n) {
  const r = He(),
    { params: i } = e,
    s = i.edgeSwipeDetection,
    l = i.edgeSwipeThreshold;
  return s && (n <= l || n >= r.innerWidth - l) ? (s === "prevent" ? (t.preventDefault(), !0) : !1) : !0;
}
function pg(e) {
  const t = this,
    n = Tt();
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  const i = t.touchEventsData;
  if (r.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
    i.pointerId = r.pointerId;
  } else r.type === "touchstart" && r.targetTouches.length === 1 && (i.touchId = r.targetTouches[0].identifier);
  if (r.type === "touchstart") {
    pc(t, r, r.targetTouches[0].pageX);
    return;
  }
  const { params: s, touches: l, enabled: a } = t;
  if (!a || (!s.simulateTouch && r.pointerType === "mouse") || (t.animating && s.preventInteractionOnTransition)) return;
  !t.animating && s.cssMode && s.loop && t.loopFix();
  let o = r.target;
  if (
    (s.touchEventsTarget === "wrapper" && !uh(o, t.wrapperEl)) ||
    ("which" in r && r.which === 3) ||
    ("button" in r && r.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const c = !!s.noSwipingClass && s.noSwipingClass !== "",
    f = r.composedPath ? r.composedPath() : r.path;
  c && r.target && r.target.shadowRoot && f && (o = f[0]);
  const p = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    h = !!(r.target && r.target.shadowRoot);
  if (s.noSwiping && (h ? fg(p, o) : o.closest(p))) {
    t.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !o.closest(s.swipeHandler)) return;
  (l.currentX = r.pageX), (l.currentY = r.pageY);
  const v = l.currentX,
    _ = l.currentY;
  if (!pc(t, r, v)) return;
  Object.assign(i, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
    (l.startX = v),
    (l.startY = _),
    (i.touchStartTime = xs()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    s.threshold > 0 && (i.allowThresholdMove = !1);
  let x = !0;
  o.matches(i.focusableElements) && ((x = !1), o.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== o &&
      (r.pointerType === "mouse" || (r.pointerType !== "mouse" && !o.matches(i.focusableElements))) &&
      n.activeElement.blur();
  const j = x && t.allowTouchMove && s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || j) && !o.isContentEditable && r.preventDefault(),
    s.freeMode && s.freeMode.enabled && t.freeMode && t.animating && !s.cssMode && t.freeMode.onTouchStart(),
    t.emit("touchStart", r);
}
function mg(e) {
  const t = Tt(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: s, rtlTranslate: l, enabled: a } = n;
  if (!a || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let o = e;
  if ((o.originalEvent && (o = o.originalEvent), o.type === "pointermove" && (r.touchId !== null || o.pointerId !== r.pointerId))) return;
  let c;
  if (o.type === "touchmove") {
    if (((c = [...o.changedTouches].find((C) => C.identifier === r.touchId)), !c || c.identifier !== r.touchId)) return;
  } else c = o;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", o);
    return;
  }
  const f = c.pageX,
    p = c.pageY;
  if (o.preventedByNestedSwiper) {
    (s.startX = f), (s.startY = p);
    return;
  }
  if (!n.allowTouchMove) {
    o.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched && (Object.assign(s, { startX: f, startY: p, currentX: f, currentY: p }), (r.touchStartTime = xs()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if ((p < s.startY && n.translate <= n.maxTranslate()) || (p > s.startY && n.translate >= n.minTranslate())) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if ((f < s.startX && n.translate <= n.maxTranslate()) || (f > s.startX && n.translate >= n.minTranslate())) return;
  }
  if (
    (t.activeElement &&
      t.activeElement.matches(r.focusableElements) &&
      t.activeElement !== o.target &&
      o.pointerType !== "mouse" &&
      t.activeElement.blur(),
    t.activeElement && o.target === t.activeElement && o.target.matches(r.focusableElements))
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  r.allowTouchCallbacks && n.emit("touchMove", o),
    (s.previousX = s.currentX),
    (s.previousY = s.currentY),
    (s.currentX = f),
    (s.currentY = p);
  const h = s.currentX - s.startX,
    v = s.currentY - s.startY;
  if (n.params.threshold && Math.sqrt(h ** 2 + v ** 2) < n.params.threshold) return;
  if (typeof r.isScrolling > "u") {
    let C;
    (n.isHorizontal() && s.currentY === s.startY) || (n.isVertical() && s.currentX === s.startX)
      ? (r.isScrolling = !1)
      : h * h + v * v >= 25 &&
        ((C = (Math.atan2(Math.abs(v), Math.abs(h)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal() ? C > i.touchAngle : 90 - C > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", o),
    typeof r.startMoving > "u" && (s.currentX !== s.startX || s.currentY !== s.startY) && (r.startMoving = !0),
    r.isScrolling || (o.type === "touchmove" && r.preventTouchMoveFromPointerMove))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1), !i.cssMode && o.cancelable && o.preventDefault(), i.touchMoveStopPropagation && !i.nested && o.stopPropagation();
  let _ = n.isHorizontal() ? h : v,
    x = n.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  i.oneWayMovement && ((_ = Math.abs(_) * (l ? 1 : -1)), (x = Math.abs(x) * (l ? 1 : -1))),
    (s.diff = _),
    (_ *= i.touchRatio),
    l && ((_ = -_), (x = -x));
  const j = n.touchesDirection;
  (n.swipeDirection = _ > 0 ? "prev" : "next"), (n.touchesDirection = x > 0 ? "prev" : "next");
  const g = n.params.loop && !i.cssMode,
    d = (n.touchesDirection === "next" && n.allowSlideNext) || (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!r.isMoved) {
    if ((g && d && n.loopFix({ direction: n.swipeDirection }), (r.startTranslate = n.getTranslate()), n.setTransition(0), n.animating)) {
      const C = new window.CustomEvent("transitionend", { bubbles: !0, cancelable: !0, detail: { bySwiperTouchMove: !0 } });
      n.wrapperEl.dispatchEvent(C);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor && (n.allowSlideNext === !0 || n.allowSlidePrev === !0) && n.setGrabCursor(!0),
      n.emit("sliderFirstMove", o);
  }
  let m;
  if (
    (new Date().getTime(),
    i._loopSwapReset !== !1 && r.isMoved && r.allowThresholdMove && j !== n.touchesDirection && g && d && Math.abs(_) >= 1)
  ) {
    Object.assign(s, { startX: f, startY: p, currentX: f, currentY: p, startTranslate: r.currentTranslate }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate);
    return;
  }
  n.emit("sliderMove", o), (r.isMoved = !0), (r.currentTranslate = _ + r.startTranslate);
  let y = !0,
    w = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (w = 0),
    _ > 0
      ? (g &&
          d &&
          !m &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() -
                n.slidesSizesGrid[n.activeIndex + 1] -
                (i.slidesPerView !== "auto" && n.slides.length - i.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.activeIndex + 1] + n.params.spaceBetween
                  : 0) -
                n.params.spaceBetween
              : n.minTranslate()) &&
          n.loopFix({ direction: "prev", setTranslate: !0, activeSlideIndex: 0 }),
        r.currentTranslate > n.minTranslate() &&
          ((y = !1), i.resistance && (r.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + _) ** w)))
      : _ < 0 &&
        (g &&
          d &&
          !m &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                n.params.spaceBetween +
                (i.slidesPerView !== "auto" && n.slides.length - i.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] + n.params.spaceBetween
                  : 0)
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length - (i.slidesPerView === "auto" ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((y = !1), i.resistance && (r.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - _) ** w))),
    y && (o.preventedByNestedSwiper = !0),
    !n.allowSlideNext && n.swipeDirection === "next" && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev && n.swipeDirection === "prev" && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev && !n.allowSlideNext && (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(_) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (r.currentTranslate = r.startTranslate),
          (s.diff = n.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) || i.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function hg(e) {
  const t = this,
    n = t.touchEventsData;
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  let i;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (((i = [...r.changedTouches].find((w) => w.identifier === n.touchId)), !i || i.identifier !== n.touchId)) return;
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return;
    i = r;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(r.type) &&
    !(["pointercancel", "contextmenu"].includes(r.type) && (t.browser.isSafari || t.browser.isWebView))
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const { params: l, touches: a, rtlTranslate: o, slidesGrid: c, enabled: f } = t;
  if (!f || (!l.simulateTouch && r.pointerType === "mouse")) return;
  if ((n.allowTouchCallbacks && t.emit("touchEnd", r), (n.allowTouchCallbacks = !1), !n.isTouched)) {
    n.isMoved && l.grabCursor && t.setGrabCursor(!1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  l.grabCursor && n.isMoved && n.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
  const p = xs(),
    h = p - n.touchStartTime;
  if (t.allowClick) {
    const w = r.path || (r.composedPath && r.composedPath());
    t.updateClickedSlide((w && w[0]) || r.target, w),
      t.emit("tap click", r),
      h < 300 && p - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", r);
  }
  if (
    ((n.lastClickTime = xs()),
    Io(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (a.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let v;
  if ((l.followFinger ? (v = o ? t.translate : -t.translate) : (v = -n.currentTranslate), l.cssMode)) return;
  if (l.freeMode && l.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: v });
    return;
  }
  const _ = v >= -t.maxTranslate() && !t.params.loop;
  let x = 0,
    j = t.slidesSizesGrid[0];
  for (let w = 0; w < c.length; w += w < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
    const C = w < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
    typeof c[w + C] < "u"
      ? (_ || (v >= c[w] && v < c[w + C])) && ((x = w), (j = c[w + C] - c[w]))
      : (_ || v >= c[w]) && ((x = w), (j = c[c.length - 1] - c[c.length - 2]));
  }
  let g = null,
    d = null;
  l.rewind &&
    (t.isBeginning
      ? (d = l.virtual && l.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1)
      : t.isEnd && (g = 0));
  const m = (v - c[x]) / j,
    y = x < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
  if (h > l.longSwipesMs) {
    if (!l.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" && (m >= l.longSwipesRatio ? t.slideTo(l.rewind && t.isEnd ? g : x + y) : t.slideTo(x)),
      t.swipeDirection === "prev" &&
        (m > 1 - l.longSwipesRatio
          ? t.slideTo(x + y)
          : d !== null && m < 0 && Math.abs(m) > l.longSwipesRatio
          ? t.slideTo(d)
          : t.slideTo(x));
  } else {
    if (!l.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation && (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(x + y)
        : t.slideTo(x)
      : (t.swipeDirection === "next" && t.slideTo(g !== null ? g : x + y), t.swipeDirection === "prev" && t.slideTo(d !== null ? d : x));
  }
}
function mc() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e,
    l = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
  const a = l && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !a
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !l
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
}
function gg(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function vg() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const s = e.maxTranslate() - e.minTranslate();
  s === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / s),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function _g(e) {
  const t = this;
  Qi(t, e.target), !(t.params.cssMode || (t.params.slidesPerView !== "auto" && !t.params.autoHeight)) && t.update();
}
function yg() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0), e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const ep = (e, t) => {
  const n = Tt(),
    { params: r, el: i, wrapperEl: s, device: l } = e,
    a = !!r.nested,
    o = t === "on" ? "addEventListener" : "removeEventListener",
    c = t;
  !i ||
    typeof i == "string" ||
    (n[o]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: a }),
    i[o]("touchstart", e.onTouchStart, { passive: !1 }),
    i[o]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[o]("touchmove", e.onTouchMove, { passive: !1, capture: a }),
    n[o]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
    n[o]("touchend", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[o]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[o]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) && i[o]("click", e.onClick, !0),
    r.cssMode && s[o]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", mc, !0)
      : e[c]("observerUpdate", mc, !0),
    i[o]("load", e.onLoad, { capture: !0 }));
};
function xg() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = pg.bind(e)),
    (e.onTouchMove = mg.bind(e)),
    (e.onTouchEnd = hg.bind(e)),
    (e.onDocumentTouchStart = yg.bind(e)),
    t.cssMode && (e.onScroll = vg.bind(e)),
    (e.onClick = gg.bind(e)),
    (e.onLoad = _g.bind(e)),
    ep(e, "on");
}
function wg() {
  ep(this, "off");
}
var Sg = { attachEvents: xg, detachEvents: wg };
const hc = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function jg() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    s = r.breakpoints;
  if (!s || (s && Object.keys(s).length === 0)) return;
  const l = Tt(),
    a = r.breakpointsBase === "window" || !r.breakpointsBase ? r.breakpointsBase : "container",
    o = ["window", "container"].includes(r.breakpointsBase) || !r.breakpointsBase ? e.el : l.querySelector(r.breakpointsBase),
    c = e.getBreakpoint(s, a, o);
  if (!c || e.currentBreakpoint === c) return;
  const p = (c in s ? s[c] : void 0) || e.originalParams,
    h = hc(e, r),
    v = hc(e, p),
    _ = e.params.grabCursor,
    x = p.grabCursor,
    j = r.enabled;
  h && !v
    ? (i.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`), e.emitContainerClasses())
    : !h &&
      v &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((p.grid.fill && p.grid.fill === "column") || (!p.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    _ && !x ? e.unsetGrabCursor() : !_ && x && e.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((C) => {
      if (typeof p[C] > "u") return;
      const P = r[C] && r[C].enabled,
        T = p[C] && p[C].enabled;
      P && !T && e[C].disable(), !P && T && e[C].enable();
    });
  const g = p.direction && p.direction !== r.direction,
    d = r.loop && (p.slidesPerView !== r.slidesPerView || g),
    m = r.loop;
  g && n && e.changeDirection(), Ye(e.params, p);
  const y = e.params.enabled,
    w = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    j && !y ? e.disable() : !j && y && e.enable(),
    (e.currentBreakpoint = c),
    e.emit("_beforeBreakpoint", p),
    n &&
      (d
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !m && w
        ? (e.loopCreate(t), e.updateSlides())
        : m && !w && e.loopDestroy()),
    e.emit("breakpoint", p);
}
function kg(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let r = !1;
  const i = He(),
    s = t === "window" ? i.innerHeight : n.clientHeight,
    l = Object.keys(e).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const o = parseFloat(a.substr(1));
        return { value: s * o, point: a };
      }
      return { value: a, point: a };
    });
  l.sort((a, o) => parseInt(a.value, 10) - parseInt(o.value, 10));
  for (let a = 0; a < l.length; a += 1) {
    const { point: o, value: c } = l[a];
    t === "window" ? i.matchMedia(`(min-width: ${c}px)`).matches && (r = o) : c <= n.clientWidth && (r = o);
  }
  return r || "max";
}
var Eg = { setBreakpoint: jg, getBreakpoint: kg };
function Cg(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function Ng() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: s } = e,
    l = Cg(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        { "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column" },
        { android: s.android },
        { ios: s.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...l), i.classList.add(...t), e.emitContainerClasses();
}
function Tg() {
  const e = this,
    { el: t, classNames: n } = e;
  !t || typeof t == "string" || (t.classList.remove(...n), e.emitContainerClasses());
}
var Pg = { addClasses: Ng, removeClasses: Tg };
function bg() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      s = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > s;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var Mg = { checkOverflow: bg },
  Oo = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Ig(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      s = r[i];
    if (typeof s != "object" || s === null) {
      Ye(t, r);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0),
      !(i in e && "enabled" in s))
    ) {
      Ye(t, r);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0), e[i] || (e[i] = { enabled: !1 }), Ye(t, r);
  };
}
const bl = {
    eventsEmitter: Ph,
    update: Bh,
    translate: Gh,
    transition: Yh,
    slide: ig,
    loop: ag,
    grabCursor: dg,
    events: Sg,
    breakpoints: Eg,
    checkOverflow: Mg,
    classes: Pg,
  },
  Ml = {};
let Ba = class Lt {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s];
    i.length === 1 && i[0].constructor && Object.prototype.toString.call(i[0]).slice(8, -1) === "Object" ? (n = i[0]) : ([t, n] = i),
      n || (n = {}),
      (n = Ye({}, n)),
      t && !n.el && (n.el = t);
    const l = Tt();
    if (n.el && typeof n.el == "string" && l.querySelectorAll(n.el).length > 1) {
      const f = [];
      return (
        l.querySelectorAll(n.el).forEach((p) => {
          const h = Ye({}, n, { el: p });
          f.push(new Lt(h));
        }),
        f
      );
    }
    const a = this;
    (a.__swiper__ = !0),
      (a.support = Yf()),
      (a.device = Xf({ userAgent: n.userAgent })),
      (a.browser = Zf()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
    const o = {};
    a.modules.forEach((f) => {
      f({ params: n, swiper: a, extendParams: Ig(n, o), on: a.on.bind(a), once: a.once.bind(a), off: a.off.bind(a), emit: a.emit.bind(a) });
    });
    const c = Ye({}, Oo, o);
    return (
      (a.params = Ye({}, c, Ml, n)),
      (a.originalParams = Ye({}, a.params)),
      (a.passedParams = Ye({}, n)),
      a.params &&
        a.params.on &&
        Object.keys(a.params.on).forEach((f) => {
          a.on(f, a.params.on[f]);
        }),
      a.params && a.params.onAny && a.onAny(a.params.onAny),
      Object.assign(a, {
        enabled: a.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return a.params.direction === "horizontal";
        },
        isVertical() {
          return a.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      a.emit("_swiper"),
      a.params.init && a.init(),
      a
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = ot(n, `.${r.slideClass}, swiper-slide`),
      s = js(i[0]);
    return js(t) - s;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(this.slides.find((n) => n.getAttribute("data-swiper-slide-index") * 1 === t));
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = ot(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled || ((t.enabled = !0), t.params.grabCursor && t.setGrabCursor(), t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled && ((t.enabled = !1), t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      l = (r.maxTranslate() - i) * t + i;
    r.translateTo(l, typeof n > "u" ? 0 : n), r.updateActiveIndex(), r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className.split(" ").filter((r) => r.indexOf("swiper") === 0 || r.indexOf(t.params.containerModifierClass) === 0);
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter((r) => r.indexOf("swiper-slide") === 0 || r.indexOf(n.params.slideClass) === 0)
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const r = this,
      { params: i, slides: s, slidesGrid: l, slidesSizesGrid: a, size: o, activeIndex: c } = r;
    let f = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let p = s[c] ? Math.ceil(s[c].swiperSlideSize) : 0,
        h;
      for (let v = c + 1; v < s.length; v += 1) s[v] && !h && ((p += Math.ceil(s[v].swiperSlideSize)), (f += 1), p > o && (h = !0));
      for (let v = c - 1; v >= 0; v -= 1) s[v] && !h && ((p += s[v].swiperSlideSize), (f += 1), p > o && (h = !0));
    } else if (t === "current") for (let p = c + 1; p < s.length; p += 1) (n ? l[p] + a[p] - l[c] < o : l[p] - l[c] < o) && (f += 1);
    else for (let p = c - 1; p >= 0; p -= 1) l[c] - l[p] < o && (f += 1);
    return f;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
        l.complete && Qi(t, l);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const l = t.rtlTranslate ? t.translate * -1 : t.translate,
        a = Math.min(Math.max(l, t.maxTranslate()), t.minTranslate());
      t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let s;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode) i(), r.autoHeight && t.updateAutoHeight();
    else {
      if ((r.slidesPerView === "auto" || r.slidesPerView > 1) && t.isEnd && !r.centeredSlides) {
        const l = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        s = t.slideTo(l.length - 1, 0, !1, !0);
      } else s = t.slideTo(t.activeIndex, 0, !1, !0);
      s || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((s) => {
          t === "vertical" ? (s.style.width = "") : (s.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`), (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`), (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r)) return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName === n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0);
    const i = () => `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let l = r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(i()) : ot(r, i())[0];
    return (
      !l &&
        n.params.createElements &&
        ((l = Ss("div", n.params.wrapperClass)),
        r.append(l),
        ot(r, `.${n.params.slideClass}`).forEach((a) => {
          l.append(a);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: l,
        slidesEl: n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : l,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || Jt(r, "direction") === "rtl",
        rtlTranslate: n.params.direction === "horizontal" && (r.dir.toLowerCase() === "rtl" || Jt(r, "direction") === "rtl"),
        wrongRTL: Jt(l, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(n.params.initialSlide + n.virtual.slidesBefore, 0, n.params.runCallbacksOnInit, !1, !0)
        : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((s) => {
        s.complete
          ? Qi(n, s)
          : s.addEventListener("load", (l) => {
              Qi(n, l.target);
            });
      }),
      $o(n),
      (n.initialized = !0),
      $o(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: s, wrapperEl: l, slides: a } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          s && typeof s != "string" && s.removeAttribute("style"),
          l && l.removeAttribute("style"),
          a &&
            a.length &&
            a.forEach((o) => {
              o.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass),
                o.removeAttribute("style"),
                o.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((o) => {
          r.off(o);
        }),
        t !== !1 && (r.el && typeof r.el != "string" && (r.el.swiper = null), ih(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    Ye(Ml, t);
  }
  static get extendedDefaults() {
    return Ml;
  }
  static get defaults() {
    return Oo;
  }
  static installModule(t) {
    Lt.prototype.__modules__ || (Lt.prototype.__modules__ = []);
    const n = Lt.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t) ? (t.forEach((n) => Lt.installModule(n)), Lt) : (Lt.installModule(t), Lt);
  }
};
Object.keys(bl).forEach((e) => {
  Object.keys(bl[e]).forEach((t) => {
    Ba.prototype[t] = bl[e][t];
  });
});
Ba.use([Nh, Th]);
const tp = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function In(e) {
  return (
    typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object" && !e.__swiper__
  );
}
function lr(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : In(t[r]) && In(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : lr(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function np(e) {
  return e === void 0 && (e = {}), e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u";
}
function rp(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function ip(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function sp(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function Lg(e) {
  return e === void 0 && (e = ""), e ? (e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}`) : "swiper-wrapper";
}
function $g(e) {
  let { swiper: t, slides: n, passedParams: r, changedParams: i, nextEl: s, prevEl: l, scrollbarEl: a, paginationEl: o } = e;
  const c = i.filter((b) => b !== "children" && b !== "direction" && b !== "wrapperClass"),
    { params: f, pagination: p, navigation: h, scrollbar: v, virtual: _, thumbs: x } = t;
  let j, g, d, m, y, w, C, P;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    !r.thumbs.swiper.destroyed &&
    f.thumbs &&
    (!f.thumbs.swiper || f.thumbs.swiper.destroyed) &&
    (j = !0),
    i.includes("controller") && r.controller && r.controller.control && f.controller && !f.controller.control && (g = !0),
    i.includes("pagination") && r.pagination && (r.pagination.el || o) && (f.pagination || f.pagination === !1) && p && !p.el && (d = !0),
    i.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || a) && (f.scrollbar || f.scrollbar === !1) && v && !v.el && (m = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || l) &&
      (r.navigation.nextEl || s) &&
      (f.navigation || f.navigation === !1) &&
      h &&
      !h.prevEl &&
      !h.nextEl &&
      (y = !0);
  const T = (b) => {
    t[b] &&
      (t[b].destroy(),
      b === "navigation"
        ? (t.isElement && (t[b].prevEl.remove(), t[b].nextEl.remove()),
          (f[b].prevEl = void 0),
          (f[b].nextEl = void 0),
          (t[b].prevEl = void 0),
          (t[b].nextEl = void 0))
        : (t.isElement && t[b].el.remove(), (f[b].el = void 0), (t[b].el = void 0)));
  };
  i.includes("loop") && t.isElement && (f.loop && !r.loop ? (w = !0) : !f.loop && r.loop ? (C = !0) : (P = !0)),
    c.forEach((b) => {
      if (In(f[b]) && In(r[b]))
        Object.assign(f[b], r[b]),
          (b === "navigation" || b === "pagination" || b === "scrollbar") && "enabled" in r[b] && !r[b].enabled && T(b);
      else {
        const k = r[b];
        (k === !0 || k === !1) && (b === "navigation" || b === "pagination" || b === "scrollbar") ? k === !1 && T(b) : (f[b] = r[b]);
      }
    }),
    c.includes("controller") &&
      !g &&
      t.controller &&
      t.controller.control &&
      f.controller &&
      f.controller.control &&
      (t.controller.control = f.controller.control),
    i.includes("children") && n && _ && f.virtual.enabled
      ? ((_.slides = n), _.update(!0))
      : i.includes("virtual") && _ && f.virtual.enabled && (n && (_.slides = n), _.update(!0)),
    i.includes("children") && n && f.loop && (P = !0),
    j && x.init() && x.update(!0),
    g && (t.controller.control = f.controller.control),
    d &&
      (t.isElement &&
        (!o || typeof o == "string") &&
        ((o = document.createElement("div")), o.classList.add("swiper-pagination"), o.part.add("pagination"), t.el.appendChild(o)),
      o && (f.pagination.el = o),
      p.init(),
      p.render(),
      p.update()),
    m &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")), a.classList.add("swiper-scrollbar"), a.part.add("scrollbar"), t.el.appendChild(a)),
      a && (f.scrollbar.el = a),
      v.init(),
      v.updateSize(),
      v.setTranslate()),
    y &&
      (t.isElement &&
        ((!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-next"),
          (s.innerHTML = t.hostEl.constructor.nextButtonSvg),
          s.part.add("button-next"),
          t.el.appendChild(s)),
        (!l || typeof l == "string") &&
          ((l = document.createElement("div")),
          l.classList.add("swiper-button-prev"),
          (l.innerHTML = t.hostEl.constructor.prevButtonSvg),
          l.part.add("button-prev"),
          t.el.appendChild(l))),
      s && (f.navigation.nextEl = s),
      l && (f.navigation.prevEl = l),
      h.init(),
      h.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (w || P) && t.loopDestroy(),
    (C || P) && t.loopCreate(),
    t.update();
}
function Og(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  lr(n, Oo), (n._emitClasses = !0), (n.init = !1);
  const s = {},
    l = tp.map((o) => o.replace(/_/, "")),
    a = Object.assign({}, e);
  return (
    Object.keys(a).forEach((o) => {
      typeof e[o] > "u" ||
        (l.indexOf(o) >= 0
          ? In(e[o])
            ? ((n[o] = {}), (i[o] = {}), lr(n[o], e[o]), lr(i[o], e[o]))
            : ((n[o] = e[o]), (i[o] = e[o]))
          : o.search(/on[A-Z]/) === 0 && typeof e[o] == "function"
          ? t
            ? (r[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
            : (n.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
          : (s[o] = e[o]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((o) => {
      n[o] === !0 && (n[o] = {}), n[o] === !1 && delete n[o];
    }),
    { params: n, passedParams: i, rest: s, events: r }
  );
}
function zg(e, t) {
  let { el: n, nextEl: r, prevEl: i, paginationEl: s, scrollbarEl: l, swiper: a } = e;
  np(t) &&
    r &&
    i &&
    ((a.params.navigation.nextEl = r),
    (a.originalParams.navigation.nextEl = r),
    (a.params.navigation.prevEl = i),
    (a.originalParams.navigation.prevEl = i)),
    rp(t) && s && ((a.params.pagination.el = s), (a.originalParams.pagination.el = s)),
    ip(t) && l && ((a.params.scrollbar.el = l), (a.originalParams.scrollbar.el = l)),
    a.init(n);
}
function Rg(e, t, n, r, i) {
  const s = [];
  if (!t) return s;
  const l = (o) => {
    s.indexOf(o) < 0 && s.push(o);
  };
  if (n && r) {
    const o = r.map(i),
      c = n.map(i);
    o.join("") !== c.join("") && l("children"), r.length !== n.length && l("children");
  }
  return (
    tp
      .filter((o) => o[0] === "_")
      .map((o) => o.replace(/_/, ""))
      .forEach((o) => {
        if (o in e && o in t)
          if (In(e[o]) && In(t[o])) {
            const c = Object.keys(e[o]),
              f = Object.keys(t[o]);
            c.length !== f.length
              ? l(o)
              : (c.forEach((p) => {
                  e[o][p] !== t[o][p] && l(o);
                }),
                f.forEach((p) => {
                  e[o][p] !== t[o][p] && l(o);
                }));
          } else e[o] !== t[o] && l(o);
      }),
    s
  );
}
const Dg = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate());
};
function ks() {
  return (
    (ks = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ks.apply(this, arguments)
  );
}
function lp(e) {
  return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide");
}
function op(e) {
  const t = [];
  return (
    B.Children.toArray(e).forEach((n) => {
      lp(n) ? t.push(n) : n.props && n.props.children && op(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function Ag(e) {
  const t = [],
    n = { "container-start": [], "container-end": [], "wrapper-start": [], "wrapper-end": [] };
  return (
    B.Children.toArray(e).forEach((r) => {
      if (lp(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot]) n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = op(r.props.children);
        i.length > 0 ? i.forEach((s) => t.push(s)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function Bg(e, t, n) {
  if (!n) return null;
  const r = (f) => {
      let p = f;
      return f < 0 ? (p = t.length + f) : p >= t.length && (p = p - t.length), p;
    },
    i = e.isHorizontal() ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` } : { top: `${n.offset}px` },
    { from: s, to: l } = n,
    a = e.params.loop ? -t.length : 0,
    o = e.params.loop ? t.length * 2 : t.length,
    c = [];
  for (let f = a; f < o; f += 1) f >= s && f <= l && c.push(t[r(f)]);
  return c.map((f, p) => B.cloneElement(f, { swiper: e, style: i, key: f.props.virtualIndex || f.key || `slide-${p}` }));
}
function Hr(e, t) {
  return typeof window > "u" ? E.useEffect(e, t) : E.useLayoutEffect(e, t);
}
const gc = E.createContext(null),
  Fg = E.createContext(null),
  On = E.forwardRef(function (e, t) {
    let { className: n, tag: r = "div", wrapperTag: i = "div", children: s, onSwiper: l, ...a } = e === void 0 ? {} : e,
      o = !1;
    const [c, f] = E.useState("swiper"),
      [p, h] = E.useState(null),
      [v, _] = E.useState(!1),
      x = E.useRef(!1),
      j = E.useRef(null),
      g = E.useRef(null),
      d = E.useRef(null),
      m = E.useRef(null),
      y = E.useRef(null),
      w = E.useRef(null),
      C = E.useRef(null),
      P = E.useRef(null),
      { params: T, passedParams: b, rest: k, events: I } = Og(a),
      { slides: z, slots: L } = Ag(s),
      O = () => {
        _(!v);
      };
    Object.assign(T.on, {
      _containerClasses(N, M) {
        f(M);
      },
    });
    const A = () => {
      Object.assign(T.on, I), (o = !0);
      const N = { ...T };
      if ((delete N.wrapperClass, (g.current = new Ba(N)), g.current.virtual && g.current.params.virtual.enabled)) {
        g.current.virtual.slides = z;
        const M = { cache: !1, slides: z, renderExternal: h, renderExternalUpdate: !1 };
        lr(g.current.params.virtual, M), lr(g.current.originalParams.virtual, M);
      }
    };
    j.current || A(), g.current && g.current.on("_beforeBreakpoint", O);
    const V = () => {
        o ||
          !I ||
          !g.current ||
          Object.keys(I).forEach((N) => {
            g.current.on(N, I[N]);
          });
      },
      we = () => {
        !I ||
          !g.current ||
          Object.keys(I).forEach((N) => {
            g.current.off(N, I[N]);
          });
      };
    E.useEffect(() => () => {
      g.current && g.current.off("_beforeBreakpoint", O);
    }),
      E.useEffect(() => {
        !x.current && g.current && (g.current.emitSlidesClasses(), (x.current = !0));
      }),
      Hr(() => {
        if ((t && (t.current = j.current), !!j.current))
          return (
            g.current.destroyed && A(),
            zg(
              { el: j.current, nextEl: y.current, prevEl: w.current, paginationEl: C.current, scrollbarEl: P.current, swiper: g.current },
              T
            ),
            l && !g.current.destroyed && l(g.current),
            () => {
              g.current && !g.current.destroyed && g.current.destroy(!0, !1);
            }
          );
      }, []),
      Hr(() => {
        V();
        const N = Rg(b, d.current, z, m.current, (M) => M.key);
        return (
          (d.current = b),
          (m.current = z),
          N.length &&
            g.current &&
            !g.current.destroyed &&
            $g({
              swiper: g.current,
              slides: z,
              passedParams: b,
              changedParams: N,
              nextEl: y.current,
              prevEl: w.current,
              scrollbarEl: P.current,
              paginationEl: C.current,
            }),
          () => {
            we();
          }
        );
      }),
      Hr(() => {
        Dg(g.current);
      }, [p]);
    function S() {
      return T.virtual ? Bg(g.current, z, p) : z.map((N, M) => B.cloneElement(N, { swiper: g.current, swiperSlideIndex: M }));
    }
    return B.createElement(
      r,
      ks({ ref: j, className: sp(`${c}${n ? ` ${n}` : ""}`) }, k),
      B.createElement(
        Fg.Provider,
        { value: g.current },
        L["container-start"],
        B.createElement(i, { className: Lg(T.wrapperClass) }, L["wrapper-start"], S(), L["wrapper-end"]),
        np(T) &&
          B.createElement(
            B.Fragment,
            null,
            B.createElement("div", { ref: w, className: "swiper-button-prev" }),
            B.createElement("div", { ref: y, className: "swiper-button-next" })
          ),
        ip(T) && B.createElement("div", { ref: P, className: "swiper-scrollbar" }),
        rp(T) && B.createElement("div", { ref: C, className: "swiper-pagination" }),
        L["container-end"]
      )
    );
  });
On.displayName = "Swiper";
const pe = E.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: s,
    zoom: l,
    lazy: a,
    virtualIndex: o,
    swiperSlideIndex: c,
    ...f
  } = e === void 0 ? {} : e;
  const p = E.useRef(null),
    [h, v] = E.useState("swiper-slide"),
    [_, x] = E.useState(!1);
  function j(y, w, C) {
    w === p.current && v(C);
  }
  Hr(() => {
    if ((typeof c < "u" && (p.current.swiperSlideIndex = c), t && (t.current = p.current), !(!p.current || !s))) {
      if (s.destroyed) {
        h !== "swiper-slide" && v("swiper-slide");
        return;
      }
      return (
        s.on("_slideClass", j),
        () => {
          s && s.off("_slideClass", j);
        }
      );
    }
  }),
    Hr(() => {
      s && p.current && !s.destroyed && v(s.getSlideClasses(p.current));
    }, [s]);
  const g = {
      isActive: h.indexOf("swiper-slide-active") >= 0,
      isVisible: h.indexOf("swiper-slide-visible") >= 0,
      isPrev: h.indexOf("swiper-slide-prev") >= 0,
      isNext: h.indexOf("swiper-slide-next") >= 0,
    },
    d = () => (typeof r == "function" ? r(g) : r),
    m = () => {
      x(!0);
    };
  return B.createElement(
    n,
    ks({ ref: p, className: sp(`${h}${i ? ` ${i}` : ""}`), "data-swiper-slide-index": o, onLoad: m }, f),
    l &&
      B.createElement(
        gc.Provider,
        { value: g },
        B.createElement(
          "div",
          { className: "swiper-zoom-container", "data-swiper-zoom": typeof l == "number" ? l : void 0 },
          d(),
          a && !_ && B.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !l && B.createElement(gc.Provider, { value: g }, d(), a && !_ && B.createElement("div", { className: "swiper-lazy-preloader" }))
  );
});
pe.displayName = "SwiperSlide";
const Vg = "_h1_1y93k_1",
  Hg = "_h2_small_1y93k_25",
  Wg = "_h2_big_1y93k_47",
  Ug = "_h3_1y93k_69",
  Gg = "_h4_1y93k_87",
  Ce = { h1: Vg, h2_small: Hg, h2_big: Wg, h3: Ug, h4: Gg };
function Fa({ texts: e }) {
  return u.jsx("h1", { className: Ce.h1, children: e.map((t, n) => u.jsxs(B.Fragment, { children: [t, u.jsx("br", {})] }, n)) });
}
function qg({ text: e }) {
  return u.jsx("h1", { className: Ce.h1, style: { color: "white" }, children: e });
}
function Kg() {
  return u.jsxs("h1", {
    className: Ce.h1,
    children: [
      "Строим каркасные дома в Москве, области и дальнем Подмосковье ",
      u.jsx("br", { className: Ce.br }),
      " ",
      u.jsx("br", { className: Ce.br }),
      "От 2,8 млн рублей за дом под ключ ",
      u.jsx("br", { className: Ce.br }),
      " ",
      u.jsx("br", { className: Ce.br }),
      "Срок строительства - 90 дней ",
      u.jsx("br", { className: Ce.br }),
      " ",
      u.jsx("br", { className: Ce.br }),
      "Гарантия на конструктив ",
      u.jsx("br", { className: Ce.br }),
      " ",
      u.jsx("br", { className: Ce.br }),
      "Поможем с участком и ипотекой ",
      u.jsx("br", { className: Ce.br }),
      " ",
      u.jsx("br", { className: Ce.br }),
    ],
  });
}
function Va({ text: e, size: t }) {
  return u.jsx("h2", { className: t == "small" ? Ce.h2_small : Ce.h2_big, children: e });
}
function Qg({ texts: e }) {
  return u.jsx("h3", { className: Ce.h3, children: e.map((t, n) => u.jsxs(B.Fragment, { children: [t, u.jsx("br", {})] }, n)) });
}
function ap({ texts: e, color: t }) {
  return u.jsx("h4", {
    className: Ce.h4,
    style: { color: t },
    children: e.map((n, r) => u.jsxs(B.Fragment, { children: [n, u.jsx("br", {})] }, r)),
  });
}
const Yg = "_medium_button_1f37q_1",
  zo = { medium_button: Yg };
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function oi() {
  return (
    (oi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    oi.apply(this, arguments)
  );
}
var en;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(en || (en = {}));
const vc = "popstate";
function Xg(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: l, hash: a } = r.location;
    return Ro("", { pathname: s, search: l, hash: a }, (i.state && i.state.usr) || null, (i.state && i.state.key) || "default");
  }
  function n(r, i) {
    return typeof i == "string" ? i : Es(i);
  }
  return Jg(t, n, null, e);
}
function he(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function up(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Zg() {
  return Math.random().toString(36).substr(2, 8);
}
function _c(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ro(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    oi({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? _r(t) : t, {
      state: n,
      key: (t && t.key) || r || Zg(),
    })
  );
}
function Es(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function _r(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function Jg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    l = i.history,
    a = en.Pop,
    o = null,
    c = f();
  c == null && ((c = 0), l.replaceState(oi({}, l.state, { idx: c }), ""));
  function f() {
    return (l.state || { idx: null }).idx;
  }
  function p() {
    a = en.Pop;
    let j = f(),
      g = j == null ? null : j - c;
    (c = j), o && o({ action: a, location: x.location, delta: g });
  }
  function h(j, g) {
    a = en.Push;
    let d = Ro(x.location, j, g);
    c = f() + 1;
    let m = _c(d, c),
      y = x.createHref(d);
    try {
      l.pushState(m, "", y);
    } catch (w) {
      if (w instanceof DOMException && w.name === "DataCloneError") throw w;
      i.location.assign(y);
    }
    s && o && o({ action: a, location: x.location, delta: 1 });
  }
  function v(j, g) {
    a = en.Replace;
    let d = Ro(x.location, j, g);
    c = f();
    let m = _c(d, c),
      y = x.createHref(d);
    l.replaceState(m, "", y), s && o && o({ action: a, location: x.location, delta: 0 });
  }
  function _(j) {
    let g = i.location.origin !== "null" ? i.location.origin : i.location.href,
      d = typeof j == "string" ? j : Es(j);
    return (d = d.replace(/ $/, "%20")), he(g, "No window.location.(origin|href) available to create URL for href: " + d), new URL(d, g);
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(i, l);
    },
    listen(j) {
      if (o) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(vc, p),
        (o = j),
        () => {
          i.removeEventListener(vc, p), (o = null);
        }
      );
    },
    createHref(j) {
      return t(i, j);
    },
    createURL: _,
    encodeLocation(j) {
      let g = _(j);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: h,
    replace: v,
    go(j) {
      return l.go(j);
    },
  };
  return x;
}
var yc;
(function (e) {
  (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(yc || (yc = {}));
function ev(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? _r(t) : t,
    i = Ha(r.pathname || "/", n);
  if (i == null) return null;
  let s = cp(e);
  tv(s);
  let l = null;
  for (let a = 0; l == null && a < s.length; ++a) {
    let o = pv(i);
    l = cv(s[a], o);
  }
  return l;
}
function cp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, l, a) => {
    let o = { relativePath: a === void 0 ? s.path || "" : a, caseSensitive: s.caseSensitive === !0, childrenIndex: l, route: s };
    o.relativePath.startsWith("/") &&
      (he(
        o.relativePath.startsWith(r),
        'Absolute route path "' +
          o.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (o.relativePath = o.relativePath.slice(r.length)));
    let c = cn([r, o.relativePath]),
      f = n.concat(o);
    s.children &&
      s.children.length > 0 &&
      (he(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')),
      cp(s.children, t, f, c)),
      !(s.path == null && !s.index) && t.push({ path: c, score: av(c, s.index), routesMeta: f });
  };
  return (
    e.forEach((s, l) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, l);
      else for (let o of dp(s.path)) i(s, l, o);
    }),
    t
  );
}
function dp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let l = dp(r.join("/")),
    a = [];
  return (
    a.push(...l.map((o) => (o === "" ? s : [s, o].join("/")))), i && a.push(...l), a.map((o) => (e.startsWith("/") && o === "" ? "/" : o))
  );
}
function tv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : uv(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const nv = /^:[\w-]+$/,
  rv = 3,
  iv = 2,
  sv = 1,
  lv = 10,
  ov = -2,
  xc = (e) => e === "*";
function av(e, t) {
  let n = e.split("/"),
    r = n.length;
  return n.some(xc) && (r += ov), t && (r += iv), n.filter((i) => !xc(i)).reduce((i, s) => i + (nv.test(s) ? rv : s === "" ? sv : lv), r);
}
function uv(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function cv(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    s = [];
  for (let l = 0; l < n.length; ++l) {
    let a = n[l],
      o = l === n.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      f = dv({ path: a.relativePath, caseSensitive: a.caseSensitive, end: o }, c);
    if (!f) return null;
    Object.assign(r, f.params);
    let p = a.route;
    s.push({ params: r, pathname: cn([i, f.pathname]), pathnameBase: vv(cn([i, f.pathnameBase])), route: p }),
      f.pathnameBase !== "/" && (i = cn([i, f.pathnameBase]));
  }
  return s;
}
function dv(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = fv(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    l = s.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((c, f, p) => {
      let { paramName: h, isOptional: v } = f;
      if (h === "*") {
        let x = a[p] || "";
        l = s.slice(0, s.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const _ = a[p];
      return v && !_ ? (c[h] = void 0) : (c[h] = (_ || "").replace(/%2F/g, "/")), c;
    }, {}),
    pathname: s,
    pathnameBase: l,
    pattern: e,
  };
}
function fv(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    up(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(/\/:([\w-]+)(\?)?/g, (l, a, o) => (r.push({ paramName: a, isOptional: o != null }), o ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }), (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function pv(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      up(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Ha(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function mv(e, t) {
  t === void 0 && (t = "/");
  let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? _r(e) : e;
  return { pathname: n ? (n.startsWith("/") ? n : hv(n, t)) : t, search: _v(r), hash: yv(i) };
}
function hv(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Il(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function gv(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function fp(e, t) {
  let n = gv(e);
  return t ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase)) : n.map((r) => r.pathnameBase);
}
function pp(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = _r(e))
    : ((i = oi({}, e)),
      he(!i.pathname || !i.pathname.includes("?"), Il("?", "pathname", "search", i)),
      he(!i.pathname || !i.pathname.includes("#"), Il("#", "pathname", "hash", i)),
      he(!i.search || !i.search.includes("#"), Il("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    l = s ? "/" : i.pathname,
    a;
  if (l == null) a = n;
  else {
    let p = t.length - 1;
    if (!r && l.startsWith("..")) {
      let h = l.split("/");
      for (; h[0] === ".."; ) h.shift(), (p -= 1);
      i.pathname = h.join("/");
    }
    a = p >= 0 ? t[p] : "/";
  }
  let o = mv(i, a),
    c = l && l !== "/" && l.endsWith("/"),
    f = (s || l === ".") && n.endsWith("/");
  return !o.pathname.endsWith("/") && (c || f) && (o.pathname += "/"), o;
}
const cn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  vv = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  _v = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  yv = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function xv(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const mp = ["post", "put", "patch", "delete"];
new Set(mp);
const wv = ["get", ...mp];
new Set(wv);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ai() {
  return (
    (ai = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ai.apply(this, arguments)
  );
}
const Wa = E.createContext(null),
  Sv = E.createContext(null),
  zn = E.createContext(null),
  Us = E.createContext(null),
  Rn = E.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  hp = E.createContext(null);
function jv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  mi() || he(!1);
  let { basename: r, navigator: i } = E.useContext(zn),
    { hash: s, pathname: l, search: a } = vp(e, { relative: n }),
    o = l;
  return r !== "/" && (o = l === "/" ? r : cn([r, l])), i.createHref({ pathname: o, search: a, hash: s });
}
function mi() {
  return E.useContext(Us) != null;
}
function yr() {
  return mi() || he(!1), E.useContext(Us).location;
}
function gp(e) {
  E.useContext(zn).static || E.useLayoutEffect(e);
}
function kv() {
  let { isDataRoute: e } = E.useContext(Rn);
  return e ? Rv() : Ev();
}
function Ev() {
  mi() || he(!1);
  let e = E.useContext(Wa),
    { basename: t, future: n, navigator: r } = E.useContext(zn),
    { matches: i } = E.useContext(Rn),
    { pathname: s } = yr(),
    l = JSON.stringify(fp(i, n.v7_relativeSplatPath)),
    a = E.useRef(!1);
  return (
    gp(() => {
      a.current = !0;
    }),
    E.useCallback(
      function (c, f) {
        if ((f === void 0 && (f = {}), !a.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let p = pp(c, JSON.parse(l), s, f.relative === "path");
        e == null && t !== "/" && (p.pathname = p.pathname === "/" ? t : cn([t, p.pathname])),
          (f.replace ? r.replace : r.push)(p, f.state, f);
      },
      [t, r, l, s, e]
    )
  );
}
function vp(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = E.useContext(zn),
    { matches: i } = E.useContext(Rn),
    { pathname: s } = yr(),
    l = JSON.stringify(fp(i, r.v7_relativeSplatPath));
  return E.useMemo(() => pp(e, JSON.parse(l), s, n === "path"), [e, l, s, n]);
}
function Cv(e, t) {
  return Nv(e, t);
}
function Nv(e, t, n, r) {
  mi() || he(!1);
  let { navigator: i } = E.useContext(zn),
    { matches: s } = E.useContext(Rn),
    l = s[s.length - 1],
    a = l ? l.params : {};
  l && l.pathname;
  let o = l ? l.pathnameBase : "/";
  l && l.route;
  let c = yr(),
    f;
  if (t) {
    var p;
    let j = typeof t == "string" ? _r(t) : t;
    o === "/" || ((p = j.pathname) != null && p.startsWith(o)) || he(!1), (f = j);
  } else f = c;
  let h = f.pathname || "/",
    v = h;
  if (o !== "/") {
    let j = o.replace(/^\//, "").split("/");
    v = "/" + h.replace(/^\//, "").split("/").slice(j.length).join("/");
  }
  let _ = ev(e, { pathname: v }),
    x = Iv(
      _ &&
        _.map((j) =>
          Object.assign({}, j, {
            params: Object.assign({}, a, j.params),
            pathname: cn([o, i.encodeLocation ? i.encodeLocation(j.pathname).pathname : j.pathname]),
            pathnameBase:
              j.pathnameBase === "/" ? o : cn([o, i.encodeLocation ? i.encodeLocation(j.pathnameBase).pathname : j.pathnameBase]),
          })
        ),
      s,
      n,
      r
    );
  return t && x
    ? E.createElement(
        Us.Provider,
        { value: { location: ai({ pathname: "/", search: "", hash: "", state: null, key: "default" }, f), navigationType: en.Pop } },
        x
      )
    : x;
}
function Tv() {
  let e = zv(),
    t = xv(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return E.createElement(
    E.Fragment,
    null,
    E.createElement("h2", null, "Unexpected Application Error!"),
    E.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? E.createElement("pre", { style: i }, n) : null,
    null
  );
}
const Pv = E.createElement(Tv, null);
class bv extends E.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : { error: t.error !== void 0 ? t.error : n.error, location: n.location, revalidation: t.revalidation || n.revalidation };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0
      ? E.createElement(
          Rn.Provider,
          { value: this.props.routeContext },
          E.createElement(hp.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function Mv(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = E.useContext(Wa);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    E.createElement(Rn.Provider, { value: t }, r)
  );
}
function Iv(e, t, n, r) {
  var i;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
    var s;
    if ((s = n) != null && s.errors) e = n.matches;
    else return null;
  }
  let l = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let f = l.findIndex((p) => p.route.id && (a == null ? void 0 : a[p.route.id]) !== void 0);
    f >= 0 || he(!1), (l = l.slice(0, Math.min(l.length, f + 1)));
  }
  let o = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < l.length; f++) {
      let p = l[f];
      if (((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (c = f), p.route.id)) {
        let { loaderData: h, errors: v } = n,
          _ = p.route.loader && h[p.route.id] === void 0 && (!v || v[p.route.id] === void 0);
        if (p.route.lazy || _) {
          (o = !0), c >= 0 ? (l = l.slice(0, c + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((f, p, h) => {
    let v,
      _ = !1,
      x = null,
      j = null;
    n &&
      ((v = a && p.route.id ? a[p.route.id] : void 0),
      (x = p.route.errorElement || Pv),
      o && (c < 0 && h === 0 ? ((_ = !0), (j = null)) : c === h && ((_ = !0), (j = p.route.hydrateFallbackElement || null))));
    let g = t.concat(l.slice(0, h + 1)),
      d = () => {
        let m;
        return (
          v
            ? (m = x)
            : _
            ? (m = j)
            : p.route.Component
            ? (m = E.createElement(p.route.Component, null))
            : p.route.element
            ? (m = p.route.element)
            : (m = f),
          E.createElement(Mv, { match: p, routeContext: { outlet: f, matches: g, isDataRoute: n != null }, children: m })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || h === 0)
      ? E.createElement(bv, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: v,
          children: d(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var _p = (function (e) {
    return (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator"), (e.UseNavigateStable = "useNavigate"), e;
  })(_p || {}),
  Cs = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Cs || {});
function Lv(e) {
  let t = E.useContext(Wa);
  return t || he(!1), t;
}
function $v(e) {
  let t = E.useContext(Sv);
  return t || he(!1), t;
}
function Ov(e) {
  let t = E.useContext(Rn);
  return t || he(!1), t;
}
function yp(e) {
  let t = Ov(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || he(!1), n.route.id;
}
function zv() {
  var e;
  let t = E.useContext(hp),
    n = $v(Cs.UseRouteError),
    r = yp(Cs.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Rv() {
  let { router: e } = Lv(_p.UseNavigateStable),
    t = yp(Cs.UseNavigateStable),
    n = E.useRef(!1);
  return (
    gp(() => {
      n.current = !0;
    }),
    E.useCallback(
      function (i, s) {
        s === void 0 && (s = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, ai({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
function wn(e) {
  he(!1);
}
function Dv(e) {
  let { basename: t = "/", children: n = null, location: r, navigationType: i = en.Pop, navigator: s, static: l = !1, future: a } = e;
  mi() && he(!1);
  let o = t.replace(/^\/*/, "/"),
    c = E.useMemo(() => ({ basename: o, navigator: s, static: l, future: ai({ v7_relativeSplatPath: !1 }, a) }), [o, a, s, l]);
  typeof r == "string" && (r = _r(r));
  let { pathname: f = "/", search: p = "", hash: h = "", state: v = null, key: _ = "default" } = r,
    x = E.useMemo(() => {
      let j = Ha(f, o);
      return j == null ? null : { location: { pathname: j, search: p, hash: h, state: v, key: _ }, navigationType: i };
    }, [o, f, p, h, v, _, i]);
  return x == null ? null : E.createElement(zn.Provider, { value: c }, E.createElement(Us.Provider, { children: n, value: x }));
}
function Av(e) {
  let { children: t, location: n } = e;
  return Cv(Do(t), n);
}
new Promise(() => {});
function Do(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    E.Children.forEach(e, (r, i) => {
      if (!E.isValidElement(r)) return;
      let s = [...t, i];
      if (r.type === E.Fragment) {
        n.push.apply(n, Do(r.props.children, s));
        return;
      }
      r.type !== wn && he(!1), !r.props.index || !r.props.children || he(!1);
      let l = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = Do(r.props.children, s)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ao() {
  return (
    (Ao = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ao.apply(this, arguments)
  );
}
function Bv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++) (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Fv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Vv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Fv(e);
}
const Hv = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
  Wv = "6";
try {
  window.__reactRouterVersion = Wv;
} catch {}
const Uv = "startTransition",
  wc = Wp[Uv];
function Gv(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    s = E.useRef();
  s.current == null && (s.current = Xg({ window: i, v5Compat: !0 }));
  let l = s.current,
    [a, o] = E.useState({ action: l.action, location: l.location }),
    { v7_startTransition: c } = r || {},
    f = E.useCallback(
      (p) => {
        c && wc ? wc(() => o(p)) : o(p);
      },
      [o, c]
    );
  return (
    E.useLayoutEffect(() => l.listen(f), [l, f]),
    E.createElement(Dv, { basename: t, children: n, location: a.location, navigationType: a.action, navigator: l, future: r })
  );
}
const qv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
  Kv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ie = E.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: l,
        state: a,
        target: o,
        to: c,
        preventScrollReset: f,
        unstable_viewTransition: p,
      } = t,
      h = Bv(t, Hv),
      { basename: v } = E.useContext(zn),
      _,
      x = !1;
    if (typeof c == "string" && Kv.test(c) && ((_ = c), qv))
      try {
        let m = new URL(window.location.href),
          y = c.startsWith("//") ? new URL(m.protocol + c) : new URL(c),
          w = Ha(y.pathname, v);
        y.origin === m.origin && w != null ? (c = w + y.search + y.hash) : (x = !0);
      } catch {}
    let j = jv(c, { relative: i }),
      g = Qv(c, { replace: l, state: a, target: o, preventScrollReset: f, relative: i, unstable_viewTransition: p });
    function d(m) {
      r && r(m), m.defaultPrevented || g(m);
    }
    return E.createElement("a", Ao({}, h, { href: _ || j, onClick: x || s ? r : d, ref: n, target: o }));
  });
var Sc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Sc || (Sc = {}));
var jc;
(function (e) {
  (e.UseFetcher = "useFetcher"), (e.UseFetchers = "useFetchers"), (e.UseScrollRestoration = "useScrollRestoration");
})(jc || (jc = {}));
function Qv(e, t) {
  let { target: n, replace: r, state: i, preventScrollReset: s, relative: l, unstable_viewTransition: a } = t === void 0 ? {} : t,
    o = kv(),
    c = yr(),
    f = vp(e, { relative: l });
  return E.useCallback(
    (p) => {
      if (Vv(p, n)) {
        p.preventDefault();
        let h = r !== void 0 ? r : Es(c) === Es(f);
        o(e, { replace: h, state: i, preventScrollReset: s, relative: l, unstable_viewTransition: a });
      }
    },
    [c, o, f, r, i, n, e, s, l, a]
  );
}
function or({ link: e, text: t, zoom: n = 1, stateModalForm: r, setStateModalForm: i }) {
  return r && i
    ? u.jsx("button", {
        className: zo.medium_button,
        style: { zoom: n },
        onClick: () => {
          i(!0);
        },
        children: t,
      })
    : u.jsx(Ie, {
        to: r ? "" : e,
        className: zo.medium_button,
        style: { zoom: n },
        onClick: () => {
          window.scrollTo(0, 0);
        },
        children: t,
      });
}
function Ll({ link: e, text: t, zoom: n, state: r, setActiveTab: i }) {
  return u.jsx(Ie, {
    className: zo.medium_button,
    style: { zoom: n },
    to: e,
    onClick: () => {
      i(r), window.scrollTo(0, 0);
    },
    children: t,
  });
}
function Yv() {
  return u.jsx("section", {
    id: "about",
    className: pt.information,
    children: u.jsxs("div", {
      className: pt.information_wrapper,
      children: [
        u.jsxs("div", {
          className: pt.text_and_swiper_wrapper,
          children: [
            u.jsxs("div", {
              className: pt.information_text,
              children: [u.jsx(Kg, {}), u.jsx(or, { text: "Каталог", link: "/catalog", zoom: 1 })],
            }),
            u.jsxs(On, {
              className: pt.swiper,
              spaceBetween: 10,
              slidesPerView: 1,
              modules: [Ra, Aa, Da],
              pagination: { clickable: !0, type: "bullets" },
              autoplay: { delay: 5e3 },
              parallax: !0,
              loop: !0,
              children: [
                u.jsx(pe, {
                  children: u.jsx("img", {
                    className: pt.img,
                    style: { width: "100%", height: "100%" },
                    src: "./img/information1.jpg",
                    alt: "information",
                  }),
                }),
                u.jsx(pe, {
                  children: u.jsx("img", {
                    className: pt.img,
                    style: { width: "100%", height: "100%" },
                    src: "./img/information2.jpg",
                    alt: "information",
                  }),
                }),
                u.jsx(pe, {
                  children: u.jsx("img", {
                    className: pt.img,
                    style: { width: "100%", height: "100%" },
                    src: "./img/information3.jpg",
                    alt: "information",
                  }),
                }),
                u.jsx(pe, {
                  children: u.jsx("img", {
                    className: pt.img,
                    style: { width: "100%", height: "100%" },
                    src: "./img/information4.jpg",
                    alt: "information",
                  }),
                }),
                u.jsx(pe, {
                  children: u.jsx("img", {
                    className: pt.img,
                    style: { width: "100%", height: "100%" },
                    src: "./img/information5.jpg",
                    alt: "information",
                  }),
                }),
              ],
            }),
          ],
        }),
        u.jsxs("div", {
          className: pt.information_mission,
          children: [
            u.jsx(Va, { text: "Наши преимущества", size: "small" }),
            u.jsx(Qg, {
              texts: [
                "С 2016 года честно и надежно строим дома, в которых хочется жить. Свой дом — это просто!",
                " Фиксированная стоимость в договоре – без переплат",
                "Собственное бригады – контроль качества на всех этапах",
                "Строим по одобренной технологии с утеплением до -30°C",
                "Фиксируем стоимость на этапе проектирования",
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Xv = "_section_1afv4_1",
  Zv = "_tile_1afv4_13",
  Jv = "_wrapper_1afv4_55",
  e1 = "_tile_figure_1afv4_67",
  mt = { section: Xv, tile: Zv, wrapper: Jv, tile_figure: e1 };
var kc = function (e, t) {
    var n, r;
    e = e.toString();
    for (
      var i = t.rules, s = t.generateMask(e), l = t.transform, a = e.length, o = s.length, c = 0, f = "", p = 0;
      p < Math.min(a, o);
      p++
    ) {
      var h = s.charAt(p),
        v = e.charAt(c),
        _ = i.get(h);
      _ ? (c++, _.test(v) ? (f += v) : (p--, a--)) : (h === v ? c++ : a++, (f += h));
    }
    var x = 0;
    if (l) {
      var j = f;
      (f = l(j)),
        (x =
          ((n = f == null ? void 0 : f.length) !== null && n !== void 0 ? n : 0) -
          ((r = j == null ? void 0 : j.length) !== null && r !== void 0 ? r : 0));
    }
    return { maskedValue: f, mask: s, transformOffset: x };
  },
  t1 = function (e, t) {
    var n = kc(e, t),
      r = n.maskedValue,
      i = n.mask,
      s = n.transformOffset,
      l = kc(r ?? "", t),
      a = l.maskedValue,
      o = l.mask;
    return r !== a
      ? (typeof console < "u" &&
          (console == null ||
            console.error(
              "mask applied to value should not change when applied again",
              "-> before: " + e,
              "-> after: " + r + " (mask: " + i + ")",
              "-> again: " + a + " (mask: " + o + ")"
            )),
        { maskedValue: e, mask: i, transformOffset: 0 })
      : { maskedValue: r, mask: i, transformOffset: s };
  },
  xp = function (e, t) {
    var n;
    if (!t) return e;
    var r = t.rules,
      i = t.generateMask(e),
      s = (n = i == null ? void 0 : i.length) !== null && n !== void 0 ? n : 0;
    return e
      .split("")
      .filter(function (l, a) {
        return a < s && r.has(i[a]);
      })
      .join("");
  },
  n1 = function (e, t) {
    var n = t.keepMask,
      r = n ? e : xp(e, t);
    return r;
  },
  r1 = function (e) {
    var t,
      n,
      r,
      i,
      s,
      l,
      a,
      o,
      c,
      f,
      p,
      h,
      v,
      _,
      x,
      j,
      g,
      d,
      m,
      y,
      w,
      C,
      P,
      T,
      b,
      k,
      I = e.displayValue,
      z = e.oldDisplayValue,
      L = e.valueBeforeMask,
      O = e.newMask,
      A = e.oldMask,
      V = e.cursorPosition,
      we = e.lastWentBack,
      S = (t = A == null ? void 0 : A.generateMask(z)) !== null && t !== void 0 ? t : "",
      N = (n = O == null ? void 0 : O.generateMask(I)) !== null && n !== void 0 ? n : "",
      M = S.split("").filter(function (Zs, Pe) {
        return (z == null ? void 0 : z[Pe]) && (A ? A.rules.has(Zs) : !0);
      }).length,
      R = N.split("").filter(function (Zs, Pe) {
        return (I == null ? void 0 : I[Pe]) && (O ? O.rules.has(Zs) : !0);
      }).length;
    if (M === R && I === z) {
      var H = (r = I == null ? void 0 : I.length) !== null && r !== void 0 ? r : 0,
        ge = (i = L == null ? void 0 : L.length) !== null && i !== void 0 ? i : 0;
      if (H > ge) {
        for (var Se = V + H - ge, Oe = !0, ve = !we, J = 0; Oe; ) {
          var nt = Se + J + (ve ? -1 : 0),
            Dn =
              nt >= 0 && nt < ((s = N == null ? void 0 : N.length) !== null && s !== void 0 ? s : 0)
                ? N == null
                  ? void 0
                  : N.charAt(nt)
                : void 0;
          if (!Dn) Oe = !1;
          else {
            var Pt = (l = O == null ? void 0 : O.rules) === null || l === void 0 ? void 0 : l.get(Dn);
            Pt ? (Oe = !1) : (J = ve ? J - 1 : J + 1);
          }
        }
        var An = Math.max(Math.min(Se + J, (a = I == null ? void 0 : I.length) !== null && a !== void 0 ? a : 0), 0);
        return { position: An, wentBack: ve };
      } else if (H < ge) {
        var ze = { ignored: 0, idx: 0 },
          Ks = (
            (h =
              (p =
                (f =
                  L == null
                    ? void 0
                    : L.substring(
                        0,
                        Math.min(
                          (o = L == null ? void 0 : L.length) !== null && o !== void 0 ? o : 0,
                          (c = N == null ? void 0 : N.length) !== null && c !== void 0 ? c : 0,
                          V
                        )
                      )) === null || f === void 0
                  ? void 0
                  : f.split("")) === null || p === void 0
                ? void 0
                : p.reduce(function (Pe, bt) {
                    for (
                      var gn,
                        vn,
                        de = Pe.ignored,
                        _e = Pe.idx,
                        Re = (gn = N == null ? void 0 : N.length) !== null && gn !== void 0 ? gn : 0;
                      _e < Re;

                    ) {
                      if (_e >= V) return Pe;
                      var ie = N == null ? void 0 : N.charAt(_e),
                        St = (vn = O == null ? void 0 : O.rules) === null || vn === void 0 ? void 0 : vn.get(ie);
                      if (St) return St.test(bt) ? { ignored: de, idx: _e + 1 } : { ignored: de + 1, idx: _e };
                      if (ie === bt) return { ignored: de, idx: _e + 1 };
                      _e++;
                    }
                    return { ignored: de, idx: _e + 1 };
                  }, ze)) !== null && h !== void 0
              ? h
              : ze
          ).ignored,
          An = Math.max(Math.min(V - Ks, (v = I == null ? void 0 : I.length) !== null && v !== void 0 ? v : 0), 0);
        return { position: An, wentBack: we };
      } else return { position: V, wentBack: we };
    } else if (M <= R) {
      for (
        var hi = R - M,
          Bn = Math.max(Math.min(V - hi, (_ = z == null ? void 0 : z.length) !== null && _ !== void 0 ? _ : 0), 0),
          jp =
            S == null
              ? void 0
              : S.substring(0, Math.max(Bn, 0))
                  .split("")
                  .filter(function (Pe, bt) {
                    return (z == null ? void 0 : z[bt]) && (A ? !A.rules.has(Pe) : !1);
                  }).length,
          kp =
            N == null
              ? void 0
              : N.substring(0, Math.max(Bn, 0))
                  .split("")
                  .filter(function (Pe, bt) {
                    return (I == null ? void 0 : I[bt]) && (O ? !O.rules.has(Pe) : !1);
                  }).length,
          Qs = kp - jp,
          Qa = Math.max(
            ((x = L == null ? void 0 : L.length) !== null && x !== void 0 ? x : 0) -
              ((j = I == null ? void 0 : I.length) !== null && j !== void 0 ? j : 0),
            0
          ),
          ze = { ignored: 0, exceeded: 0, staticAdded: 0, idx: 0 },
          Ys =
            (d =
              (g = L == null ? void 0 : L.split("")) === null || g === void 0
                ? void 0
                : g.reduce(function (Pe, bt) {
                    for (
                      var gn,
                        vn,
                        de = Pe.ignored,
                        _e = Pe.exceeded,
                        Re = Pe.staticAdded,
                        ie = Pe.idx,
                        St = (gn = N == null ? void 0 : N.length) !== null && gn !== void 0 ? gn : 0;
                      ie < St;

                    ) {
                      var dt = N == null ? void 0 : N.charAt(ie),
                        vi = (vn = O == null ? void 0 : O.rules) === null || vn === void 0 ? void 0 : vn.get(dt);
                      if (vi) {
                        if (vi.test(bt)) return { ignored: de, exceeded: _e, staticAdded: Re, idx: ie + 1 };
                        var _n = ie > Bn + Qs - Qa && ie < V ? de + 1 : de;
                        return { ignored: _n, exceeded: _e, staticAdded: !_n && ie < V ? Re - 1 : Re, idx: ie };
                      } else {
                        if (dt === bt) {
                          var _n = ie > Bn + Qs - Qa && ie < V ? de + 1 : de;
                          return { ignored: _n, exceeded: _e, staticAdded: Re, idx: ie + 1 };
                        } else ie < V && (Re = Re + 1);
                        ie++;
                      }
                    }
                    return { ignored: de, exceeded: _e + 1, staticAdded: Re, idx: ie + 1 };
                  }, ze)) !== null && d !== void 0
              ? d
              : ze,
          Ya = Ys.ignored,
          Ep = Ya === void 0 ? 0 : Ya,
          Xa = Ys.exceeded,
          Za = Xa === void 0 ? 0 : Xa,
          Ja = Ys.staticAdded,
          Cp = Ja === void 0 ? 0 : Ja,
          gi = Bn,
          xr = Qs;
        gi - xr - Za < Bn + hi;

      ) {
        var nt = gi - Za;
        if (nt < 0) {
          gi++;
          continue;
        }
        var eu = N == null ? void 0 : N[nt];
        if (!eu) break;
        var Xs = O ? O.rules.has(eu) : !0;
        Xs || xr++, gi++;
      }
      return (
        (xr = Math.max(Cp, xr, 0)),
        { position: Math.min(V + xr - Ep, (m = N == null ? void 0 : N.length) !== null && m !== void 0 ? m : 0), wentBack: we }
      );
    } else {
      var J =
          (P =
            (C =
              (w =
                L == null ? void 0 : L.substring(0, Math.min(V, (y = L == null ? void 0 : L.length) !== null && y !== void 0 ? y : 0))) ===
                null || w === void 0
                ? void 0
                : w.split("")) === null || C === void 0
              ? void 0
              : C.reduce(function (de, _e, Re) {
                  var ie,
                    St = N == null ? void 0 : N[Re],
                    dt = (ie = O == null ? void 0 : O.rules) === null || ie === void 0 ? void 0 : ie.get(St);
                  return dt ? (dt.test(_e) ? de : de - 1) : St === _e ? de : de + 1;
                }, 0)) !== null && P !== void 0
            ? P
            : 0,
        ze = { dynamic: 0, idx: 0 },
        Xs = (
          (b =
            (T = L == null ? void 0 : L.split("")) === null || T === void 0
              ? void 0
              : T.reduce(function (de, _e) {
                  for (
                    var Re, ie, St = de.dynamic, dt = de.idx, vi = (Re = N == null ? void 0 : N.length) !== null && Re !== void 0 ? Re : 0;
                    dt < vi;

                  ) {
                    var _n = N == null ? void 0 : N[dt],
                      tu = (ie = O == null ? void 0 : O.rules) === null || ie === void 0 ? void 0 : ie.get(_n);
                    if (tu) return tu.test(_e) ? { dynamic: St + 1, idx: dt + 1 } : de;
                    if (_n === _e) return { dynamic: St, idx: dt + 1 };
                    dt++;
                  }
                  return de;
                }, ze)) !== null && b !== void 0
            ? b
            : ze
        ).dynamic,
        hi = Math.max(R - Xs, 0),
        Se = Math.max(Math.min(V + J + hi, (k = I == null ? void 0 : I.length) !== null && k !== void 0 ? k : 0), 0);
      return { position: Se, wentBack: we };
    }
  },
  Ua = { getExpectedCursorPos: r1, mask: t1, processValue: n1, unmask: xp },
  i1 = new Map([
    ["A", /[A-Za-z]/],
    ["9", /\d/],
    ["?", /\w/],
  ]),
  Gs = function (e) {
    return {
      rules: i1,
      generateMask: function () {
        return e;
      },
    };
  },
  s1 = Ua.getExpectedCursorPos,
  l1 = Ua.mask,
  o1 = Ua.processValue,
  a1 = function (e) {
    var t,
      n = e.outerValue,
      r = e.maskGenerator,
      i = e.onChange,
      s = e.getCursorPosition,
      l = e.setCursorPosition,
      a = e.keepMask,
      o = B.useRef(n),
      c = B.useRef(n),
      f = B.useRef(n),
      p = B.useRef((t = n == null ? void 0 : n.length) !== null && t !== void 0 ? t : 0),
      h = B.useRef(n),
      v = B.useRef(!1),
      _ = B.useRef(r),
      x = B.useRef(r),
      j = B.useState(n),
      g = j[0],
      d = j[1],
      m = B.useState(g),
      y = m[0],
      w = m[1],
      C = B.useState(y),
      P = C[0],
      T = C[1],
      b = B.useState(),
      k = b[0],
      I = b[1],
      z = B.useState(!1),
      L = z[0],
      O = z[1],
      A = B.useCallback(
        function (S, N) {
          if (N && s) {
            if (S && r) {
              var M = s(),
                R = M <= (S == null ? void 0 : S.length) ? (S == null ? void 0 : S.substring(M)) : void 0;
              if (R) {
                for (var H = r.generateMask(S), ge = "", Se = 0, Oe = H == null ? void 0 : H.charAt(Se); Oe && !r.rules.has(Oe); )
                  (ge += Oe), Se++, (Oe = H == null ? void 0 : H.charAt(Se));
                if (ge) {
                  for (var ve = "", J = ge; J && S.startsWith(ve) && !R.startsWith(J); )
                    (ve += J == null ? void 0 : J.charAt(0)), (J = J.substring(1));
                  J && S.startsWith(ve) && R.startsWith(J) && (S = S.substring(0, M) + S.substring(M + J.length));
                }
              }
            }
            var nt = s();
            (p.current = nt), (h.current = S), O(!0);
          }
          if ((S ?? "").trim() === "") return w(""), d(""), (_.current = void 0), (o.current = ""), { displayValue: "" };
          if (r) {
            var Dn = l1(S, r),
              Pt = Dn.maskedValue,
              H = Dn.mask,
              An = Dn.transformOffset,
              ze = o1(Pt ?? "", r);
            if ((w(Pt ?? void 0), d(ze ?? void 0), (_.current = r), (o.current = ze ?? void 0), An && N && s)) {
              var nt = s(),
                Ks = nt + An;
              (p.current = Ks), (h.current = S), O(!0);
            }
            return { displayValue: Pt, mask: H };
          } else return w(S), d(S), (_.current = void 0), (o.current = S ?? void 0), { displayValue: S };
        },
        [r, s]
      ),
      V = B.useCallback(
        function (S) {
          var N,
            M = S.displayValue,
            R = S.oldDisplayValue,
            H = S.newMask,
            ge = S.oldMask,
            Se = S.force;
          if (l && s) {
            var Oe = s1({
                displayValue: M,
                oldDisplayValue: R,
                valueBeforeMask: (N = h.current) !== null && N !== void 0 ? N : "",
                newMask: H,
                oldMask: ge,
                cursorPosition: p.current,
                lastWentBack: v.current,
              }),
              ve = Oe.position,
              J = Oe.wentBack,
              nt = J === void 0 ? !1 : J;
            (Se || p.current !== ve) && ((p.current = ve), l(ve)), (v.current = nt);
          }
        },
        [l, s]
      );
    B.useEffect(
      function () {
        var S = ((r == null ? void 0 : r.generateMask) && (r == null ? void 0 : r.generateMask(g ?? ""))) || void 0;
        (S !== k || n !== o.current) && (I(S), (o.current = n), (S !== k || n !== g) && A(n ?? ""));
      },
      [k, I, r, n, g, A]
    ),
      B.useEffect(
        function () {
          g !== c.current && ((c.current = g), A(g ?? ""), !a && i && i(g ?? ""));
        },
        [g, r, A, a, i]
      ),
      B.useEffect(
        function () {
          if (y !== f.current) {
            var S = A(y ?? "").displayValue;
            (S ?? "") === (y ?? "") && ((f.current = S ?? void 0), a && i && i(S ?? ""));
          }
        },
        [y, A, a, i]
      ),
      B.useEffect(
        function () {
          var S,
            N = s ? s() : p.current,
            M = N !== p.current;
          y === f.current &&
            (P !== f.current || M || L) &&
            (O(!1),
            T(f.current),
            (x.current = _.current),
            V({
              displayValue: (S = f.current) !== null && S !== void 0 ? S : "",
              oldDisplayValue: P ?? "",
              newMask: _.current,
              oldMask: x.current,
              force: M,
            }));
        },
        [P, y, L, s, V]
      );
    var we = B.useMemo(
      function () {
        return {
          displayValue: y,
          setDisplayValue: function (S) {
            A(S, !0);
          },
        };
      },
      [y, A]
    );
    return we;
  },
  u1 = function (e, t) {
    return (
      B.useEffect(
        function () {
          [e, t].forEach(function (n) {
            n && (typeof n == "function" ? n(e.current || null) : (n.current = e.current || null));
          });
        },
        [e, t]
      ),
      e
    );
  },
  c1 = function (e) {
    var t = e.maskGenerator,
      n = e.value,
      r = e.onChange,
      i = e.keepMask,
      s = e.ref,
      l = e.getCursorPosition,
      a = e.setCursorPosition,
      o = B.useRef(null),
      c = u1(o, s),
      f = B.useCallback(
        function () {
          var x = c == null ? void 0 : c.current;
          return l(x ?? void 0);
        },
        [c, l]
      ),
      p = B.useCallback(
        function (x) {
          var j = c == null ? void 0 : c.current;
          a(x, j ?? void 0);
        },
        [c, a]
      ),
      h = a1({ outerValue: n, maskGenerator: t, getCursorPosition: f, setCursorPosition: p, onChange: r, keepMask: i }),
      v = h.displayValue,
      _ = h.setDisplayValue;
    return { displayValue: v, setDisplayValue: _, ref: c };
  },
  d1 = function (e) {
    var t = e.maskGenerator,
      n = e.value,
      r = e.onChange,
      i = e.keepMask,
      s = e.ref,
      l = B.useCallback(function (v) {
        var _,
          x = (_ = v == null ? void 0 : v.selectionStart) !== null && _ !== void 0 ? _ : 0;
        return x;
      }, []),
      a = B.useCallback(function (v, _) {
        _ && ((_.selectionStart = v), (_.selectionEnd = v));
      }, []),
      o = c1({ value: n, maskGenerator: t, getCursorPosition: l, setCursorPosition: a, onChange: r, keepMask: i, ref: s }),
      c = o.displayValue,
      f = o.setDisplayValue,
      p = o.ref,
      h = B.useCallback(
        function (v) {
          var _, x;
          return f((x = (_ = v == null ? void 0 : v.target) === null || _ === void 0 ? void 0 : _.value) !== null && x !== void 0 ? x : "");
        },
        [f]
      );
    return { value: c, onChange: h, ref: p };
  },
  Bo = function () {
    return (
      (Bo =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }),
      Bo.apply(this, arguments)
    );
  },
  f1 = function (e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n;
  },
  qs = B.forwardRef(function (e, t) {
    var n = e.maskGenerator,
      r = e.value,
      i = e.onChange,
      s = e.keepMask,
      l = f1(e, ["maskGenerator", "value", "onChange", "keepMask"]),
      a = d1({ maskGenerator: n, value: r != null ? "".concat(r) : void 0, onChange: i, keepMask: s, ref: t });
    return B.createElement("input", Bo({}, l, a));
  });
const p1 = "_position_error_first_input_1ca7h_1",
  m1 = "_position_error_second_input_1ca7h_11",
  h1 = "_feedBack_1ca7h_21",
  g1 = "_modal_1ca7h_29",
  v1 = "_modal_wrapper_1ca7h_57",
  _1 = "_modal_btn_close_1ca7h_87",
  y1 = "_complete_1ca7h_105",
  x1 = "_failure_1ca7h_143",
  w1 = "_modal_text_1ca7h_181",
  S1 = "_wrapper_1ca7h_243",
  j1 = "_main_img_1ca7h_261",
  k1 = "_form_1ca7h_271",
  E1 = "_header_1ca7h_293",
  C1 = "_text_input_1ca7h_307",
  N1 = "_menu_1ca7h_327",
  T1 = "_flag_1ca7h_353",
  P1 = "_arrow_1ca7h_369",
  b1 = "_telephone_code_1ca7h_381",
  M1 = "_phone_input_1ca7h_399",
  I1 = "_btn_submit_1ca7h_421",
  L1 = "_loader_1ca7h_489",
  $1 = "_load3_1ca7h_1",
  O1 = "_block_1ca7h_583",
  z1 = "_none_1ca7h_591",
  R1 = "_flex_1ca7h_599",
  D1 = "_privacy_policy_1ca7h_607",
  A1 = "_img_1ca7h_647",
  B1 = "_imgs_1ca7h_657",
  F1 = "_touch_1ca7h_669",
  V1 = "_buttons_1ca7h_685",
  H1 = "_error_text_1ca7h_715",
  W1 = "_menu_button_1ca7h_761",
  U1 = "_country_name_1ca7h_787",
  G1 = "_country_code_and_flag_1ca7h_799",
  q1 = "_form_btn_close_1ca7h_815",
  K1 = "_required_1ca7h_843",
  Q1 = "_error_1ca7h_715",
  W = {
    position_error_first_input: p1,
    position_error_second_input: m1,
    feedBack: h1,
    modal: g1,
    modal_wrapper: v1,
    modal_btn_close: _1,
    complete: y1,
    failure: x1,
    modal_text: w1,
    wrapper: S1,
    main_img: j1,
    form: k1,
    header: E1,
    text_input: C1,
    menu: N1,
    flag: T1,
    arrow: P1,
    telephone_code: b1,
    phone_input: M1,
    btn_submit: I1,
    loader: L1,
    load3: $1,
    block: O1,
    none: z1,
    flex: R1,
    privacy_policy: D1,
    img: A1,
    imgs: B1,
    touch: F1,
    buttons: V1,
    error_text: H1,
    menu_button: W1,
    country_name: U1,
    country_code_and_flag: G1,
    form_btn_close: q1,
    required: K1,
    error: Q1,
  };
let $l = "http://likehouse-back.ru/api";
const wp = async (e, t, n) => {
  const r = { method: e, headers: { "Content-Type": "application/json" } };
  ($l = ""), t != "" && ((r.body = t), ($l = "http://likehouse-back.ru/api"));
  const i = await fetch($l + n, r);
  try {
    return i.json();
  } catch (s) {
    console.log(s);
  }
};
async function Ga(e) {
  return await wp("POST", e, "/sendemailNew");
}
async function Y1() {
  return await wp("GET", "", "./1c_site.json");
}
const Ol = { loading: "Загрузка...", success: "Спасибо! Скоро мы с вами свяжемся", failure: "Что-то пошло не так..." };
async function X1(e, t, n, r) {
  e.preventDefault();
  const i = e.nativeEvent.target,
    s = Z1(i, t, n, r),
    l = i.childNodes[2].value;
  if ((r(Ol.loading), s === 0)) {
    const a = new FormData(i),
      o = l;
    a.set("user_phone", o);
    const f = { first_name: a.get("user_name"), telephone: l };
    (await Ga(JSON.stringify(f))).success ? (r(Ol.success), i.reset()) : r(Ol.failure);
  } else r("");
}
function Z1(e, t, n, r) {
  let i = 0;
  const s = [e.childNodes[1], e.childNodes[2]];
  Ec(e.childNodes[2], t, n), Ec(e.childNodes[1], t, n);
  let l = { inputName: "", inputPhone: "" };
  for (let a = 0; a < s.length; a++) {
    const o = s[a];
    console.log(o),
      o.name === "user_name" &&
        (o.value.length > 25 && ((l = { ...l, inputName: "Слишком длинное значение" }), i++),
        o.value.trim() === "" && ((l = { ...l, inputName: "Обязательное поле" }), i++)),
      o.name === "user_phone" &&
        (o.value === "" && ((l = { ...l, inputPhone: "Обязательное поле" }), i++),
        o.value.length < 18 && o.value.length > 0 && ((l = { ...l, inputPhone: "Слишком короткое значение" }), i++));
  }
  return r(""), t(l), i;
}
function Ec(e, t, n) {
  e.name === "user_phone" ? t({ ...n, inputPhone: "" }) : e.name === "user_name" && t({ ...n, inputName: "" });
}
const J1 = "_modal_xuxjm_1",
  e_ = "_modal_wrapper_xuxjm_37",
  t_ = "_modal_btn_close_xuxjm_61",
  n_ = "_complete_xuxjm_79",
  r_ = "_failure_xuxjm_117",
  i_ = "_modal_text_xuxjm_155",
  s_ = "_none_xuxjm_163",
  l_ = "_flex_xuxjm_171",
  Ut = { modal: J1, modal_wrapper: e_, modal_btn_close: t_, complete: n_, failure: r_, modal_text: i_, none: s_, flex: l_ };
function qa({ fetchStatus: e, setFetchStatus: t, setBodyStyle: n }) {
  return u.jsx("div", {
    className: `${Ut.modal} ${e === "Спасибо! Скоро мы с вами свяжемся" || e === "Что-то пошло не так..." ? Ut.flex : Ut.none}`,
    children: u.jsxs("div", {
      className: Ut.modal_wrapper,
      children: [
        u.jsx("img", {
          src: "../icons/crestikBlack.svg",
          alt: "",
          className: Ut.modal_btn_close,
          onClick: () => {
            t(""), n("");
          },
        }),
        u.jsx("div", { className: e === "Спасибо! Скоро мы с вами свяжемся" ? Ut.complete : Ut.failure }),
        u.jsx("div", { className: Ut.modal_text, children: e }),
      ],
    }),
  });
}
const o_ = Gs("+7 (999) 999-99-99");
function a_({ stateModal: e, setStateModal: t, setBodyStyle: n }) {
  const [r, i] = E.useState(""),
    [s, l] = E.useState(""),
    [a, o] = E.useState({ inputName: "", inputPhone: "" });
  return (
    E.useEffect(() => {
      n(e ? "hidden" : "");
    }),
    u.jsxs("div", {
      className: `${W.feedBack} ${e ? W.flex : W.none}`,
      children: [
        u.jsx("div", {
          className: W.wrapper,
          children: u.jsxs("form", {
            className: W.form,
            onSubmit: (c) => X1(c, o, a, l),
            children: [
              u.jsx("div", { className: W.header, children: "Оставьте заявку" }),
              u.jsx("input", {
                className: `${W.text_input} ${W.required} ${a.inputName != "" ? W.error : ""}`,
                name: "user_name",
                type: "text",
                placeholder: "Ваше имя",
                onChange: () => {
                  o({ inputName: "", inputPhone: "" }), l("");
                },
              }),
              u.jsx(qs, {
                maskGenerator: o_,
                className: `${W.phone_input} ${W.required} ${a.inputPhone != "" ? W.error : ""}`,
                name: "user_phone",
                type: "tel",
                placeholder: "+7 (999) 999-99-99",
                value: r,
                onChange: () => {
                  o({ inputName: "", inputPhone: "" }), l("");
                },
              }),
              u.jsxs("button", {
                type: "submit",
                className: W.btn_submit,
                children: [
                  u.jsx("div", { className: s === "Загрузка..." ? `${W.loader} ${W.block}` : `${W.loader} ${W.none}` }),
                  u.jsx("div", { className: s === "Загрузка..." ? W.none : W.block, children: "Отправить" }),
                ],
              }),
              u.jsxs("div", {
                className: W.imgs,
                children: [
                  u.jsx("a", {
                    href: "https://t.me/+79300358074",
                    children: u.jsx("img", { src: "./icons/TelegramGreyIcon.svg", alt: "", className: W.img }),
                  }),
                  u.jsx("a", {
                    href: "https://wa.me/79300358074",
                    children: u.jsx("img", { src: "./icons/WhatsappGreyIcon.svg", alt: "", className: W.img }),
                  }),
                ],
              }),
              u.jsx("div", {
                className: `${W.error_text} ${W.position_error_first_input} ${a.inputName == "Обязательное поле" ? W.block : W.none}`,
                children: "Обязательное поле",
              }),
              u.jsx("div", {
                className: `${W.error_text} ${W.position_error_first_input} ${
                  a.inputName == "Слишком длинное значение" ? W.block : W.none
                }`,
                children: "Слишком длинное значение",
              }),
              u.jsx("div", {
                className: `${W.error_text} ${W.position_error_second_input} ${a.inputPhone == "Обязательное поле" ? W.block : W.none}`,
                children: "Обязательное поле",
              }),
              u.jsx("div", {
                className: `${W.error_text} ${W.position_error_second_input} ${
                  a.inputPhone == "Слишком короткое значение" ? W.block : W.none
                }`,
                children: "Слишком короткое значение",
              }),
              u.jsx("div", {
                className: W.form_btn_close,
                onClick: () => t(!1),
                children: u.jsx("img", { src: "./icons/cross.svg", alt: "" }),
              }),
            ],
          }),
        }),
        u.jsx(qa, { fetchStatus: s, setFetchStatus: l, setBodyStyle: n }),
      ],
    })
  );
}
function u_({ setBodyStyle: e }) {
  const [t, n] = E.useState(!1);
  return u.jsxs(u.Fragment, {
    children: [
      u.jsxs("section", {
        className: mt.section,
        children: [
          u.jsx(Va, { text: "Почему выбирают строить со СТРОИТ?", size: "big" }),
          u.jsxs("div", {
            className: mt.wrapper,
            children: [
              u.jsxs("div", {
                className: mt.tile,
                children: [
                  u.jsxs("div", {
                    className: mt.tile_figure,
                    children: [
                      u.jsx("h3", { children: "Комплектация" }),
                      u.jsxs("p", {
                        className: mt.text,
                        children: [
                          "Можно выбрать вариант дома на любой бюджет и самому рассчитать финальную цену ",
                          u.jsx("br", {}),
                          " в калькуляторе.",
                        ],
                      }),
                    ],
                  }),
                  u.jsx(or, { text: "Выбрать свой дом", link: "/catalog", zoom: 1 }),
                ],
              }),
              u.jsxs("div", {
                className: mt.tile,
                children: [
                  u.jsxs("div", {
                    className: mt.tile_figure,
                    children: [
                      u.jsx("h3", { children: "Строим 8 лет" }),
                      u.jsx("p", {
                        className: mt.text,
                        children:
                          "Сделали счастливыми уже более 830 семей. Предлагаем широкий выбор домов, адаптированных под ваш бюджет. У нас опытные бригады, проверенные технологии, только лучшие материалы и подрядчики. На каждом этапе выполняется технический надзор.",
                      }),
                    ],
                  }),
                  u.jsx(or, { text: "Задать вопрос о строительстве", link: "https://wa.clck.bar/79251047452", zoom: 1 }),
                ],
              }),
              u.jsxs("div", {
                className: mt.tile,
                children: [
                  u.jsxs("div", {
                    className: mt.tile_figure,
                    children: [
                      u.jsx("h3", { children: "Под ключ в 1 ипотеку" }),
                      u.jsxs("p", {
                        className: mt.text,
                        children: [
                          "Мы предлагаем готовые решения «под ключ»: участки и дома с отделкой и коммуникациями. Вы можете приобрести их в рамках одной ипотечной программы.",
                          " ",
                        ],
                      }),
                    ],
                  }),
                  u.jsx(or, { text: "Рассчитать ипотеку", link: "", stateModalForm: !0, setStateModalForm: n, zoom: 1 }),
                ],
              }),
            ],
          }),
        ],
      }),
      u.jsx(a_, { stateModal: t, setStateModal: n, setBodyStyle: e }),
    ],
  });
}
const c_ = "_section_unq8i_1",
  d_ = "_wrapper_unq8i_13",
  f_ = "_tile_unq8i_29",
  Gt = { section: c_, wrapper: d_, tile: f_ };
function p_({ setActiveTab: e }) {
  return u.jsxs("section", {
    className: Gt.section,
    children: [
      u.jsx(Va, { text: "Каталог готовых проектов", size: "big" }),
      u.jsx("div", {
        className: Gt.wrapper,
        children: u.jsxs(On, {
          slidesPerView: 1,
          spaceBetween: 50,
          loop: !0,
          breakpoints: { 960: { slidesPerView: 2 } },
          style: { width: "100%" },
          children: [
            u.jsx(pe, {
              style: { width: "100%" },
              children: u.jsxs("div", {
                className: Gt.tile,
                children: [
                  u.jsx("img", { src: "./img/catalog_1.jpg", alt: "" }),
                  u.jsx("p", { className: Gt.name, children: "1 этаж" }),
                  u.jsx(Ll, { text: "Зайти", link: "/catalog", zoom: 0.5, setActiveTab: e, state: { type: "cottage" } }),
                ],
              }),
            }),
            u.jsx(pe, {
              style: { width: "100%" },
              children: u.jsxs("div", {
                className: Gt.tile,
                children: [
                  u.jsx("img", { src: "./img/catalog_3.jpg", alt: "" }),
                  u.jsx("p", { className: Gt.name, children: "2 этажа" }),
                  u.jsx(Ll, { text: "Зайти", link: "/catalog", zoom: 0.5, setActiveTab: e, state: { type: "two-storey house" } }),
                ],
              }),
            }),
            u.jsx(pe, {
              style: { width: "100%" },
              children: u.jsxs("div", {
                className: Gt.tile,
                children: [
                  u.jsx("img", { src: "./img/catalog_2.jpg", alt: "" }),
                  u.jsx("p", { className: Gt.name, children: "Бани" }),
                  u.jsx(Ll, { text: "Зайти", link: "/catalog", zoom: 0.5, setActiveTab: e, state: { type: "bathhouse" } }),
                ],
              }),
            }),
          ],
        }),
      }),
      u.jsx("div", { id: "catalog", style: { position: "absolute", top: "-100px" } }),
    ],
  });
}
const m_ = "_section_1r1c4_1",
  h_ = "_wrapper_1r1c4_13",
  g_ = "_text_and_swiper_wrapper_1r1c4_31",
  v_ = "_img_1r1c4_53",
  __ = "_block_text_1r1c4_61",
  y_ = "_text_1r1c4_31",
  x_ = "_button_1r1c4_97",
  w_ = "_swiper_1r1c4_133",
  It = { section: m_, wrapper: h_, text_and_swiper_wrapper: g_, img: v_, block_text: __, text: y_, button: x_, swiper: w_ };
function S_() {
  return u.jsx("section", {
    className: It.section,
    children: u.jsxs("div", {
      className: It.text_and_swiper_wrapper,
      children: [
        u.jsxs("div", {
          className: It.block_text,
          children: [
            u.jsx(Fa, { texts: ["Дома, которые мы построили для наших клиентов"] }),
            u.jsx(or, { text: "Смотреть больше", link: "/built_houses", zoom: 1 }),
          ],
        }),
        u.jsxs(On, {
          className: It.swiper,
          spaceBetween: 10,
          slidesPerView: 1,
          modules: [Ra, Aa, Da],
          pagination: { clickable: !0, type: "bullets" },
          autoplay: { delay: 5e3 },
          parallax: !0,
          loop: !0,
          children: [
            u.jsx(pe, {
              children: u.jsx("img", { className: It.img, style: { width: "100%", height: "100%" }, src: "./img/built1_new.jpg", alt: "" }),
            }),
            u.jsx(pe, {
              children: u.jsx("img", { className: It.img, style: { width: "100%", height: "100%" }, src: "./img/built2_new.jpg", alt: "" }),
            }),
            u.jsx(pe, {
              children: u.jsx("img", { className: It.img, style: { width: "100%", height: "100%" }, src: "./img/built3_new.jpg", alt: "" }),
            }),
            u.jsx(pe, {
              children: u.jsx("img", { className: It.img, style: { width: "100%", height: "100%" }, src: "./img/built4_new.jpg", alt: "" }),
            }),
            u.jsx(pe, {
              children: u.jsx("img", { className: It.img, style: { width: "100%", height: "100%" }, src: "./img/built5.jpg", alt: "" }),
            }),
          ],
        }),
      ],
    }),
  });
}
const j_ = "_section_1mk5b_1",
  k_ = "_text_and_swiper_wrapper_1mk5b_17",
  E_ = "_input_1mk5b_57",
  C_ = "_subtitle_1mk5b_73",
  N_ = "_img_1mk5b_83",
  T_ = "_block_text_1mk5b_91",
  P_ = "_text_1mk5b_17",
  b_ = "_submit_1mk5b_125",
  M_ = "_loader_1mk5b_159",
  I_ = "_wrapper_1mk5b_179",
  L_ = "_load3_1mk5b_1",
  $_ = "_block_1mk5b_91",
  O_ = "_none_1mk5b_293",
  z_ = "_error_text_1mk5b_301",
  R_ = "_position_error_second_input_1mk5b_349",
  D_ = "_position_error_first_input_1mk5b_359",
  A_ = "_flex_1mk5b_411",
  B_ = "_img_wrap_1mk5b_467",
  K = {
    section: j_,
    text_and_swiper_wrapper: k_,
    input: E_,
    subtitle: C_,
    img: N_,
    block_text: T_,
    text: P_,
    submit: b_,
    loader: M_,
    wrapper: I_,
    load3: L_,
    block: $_,
    none: O_,
    error_text: z_,
    position_error_second_input: R_,
    position_error_first_input: D_,
    flex: A_,
    img_wrap: B_,
  },
  zl = { loading: "Загрузка...", success: "Спасибо! Скоро мы с вами свяжемся", failure: "Что-то пошло не так..." };
async function F_(e, t, n, r, i) {
  e.preventDefault();
  const s = e.nativeEvent.target,
    l = V_(s, t, n, r),
    a = s.childNodes[1].value;
  if ((r(zl.loading), l === 0)) {
    const o = new FormData(s);
    o.set("user_phone", a);
    const f = { first_name: o.get("user_name"), telephoneCode: "", telephone: a };
    (await Ga(JSON.stringify(f))).success ? (r(zl.success), s.reset()) : r(zl.failure), i("hidden");
  } else r("");
}
function V_(e, t, n, r) {
  let i = 0;
  const s = [e.childNodes[0], e.childNodes[1]];
  Cc(e.childNodes[1], t, n), Cc(e.childNodes[0], t, n);
  let l = { inputName: "", inputPhone: "" };
  for (let a = 0; a < s.length; a++) {
    const o = s[a];
    o.name === "user_name" &&
      (o.value.length > 25 && ((l = { ...l, inputName: "Слишком длинное значение" }), i++),
      o.value.trim() === "" && ((l = { ...l, inputName: "Обязательное поле" }), i++)),
      o.name === "user_phone" &&
        (o.value === "" && ((l = { ...l, inputPhone: "Обязательное поле" }), i++),
        o.value.length < 18 && o.value.length > 0 && ((l = { ...l, inputPhone: "Слишком короткое значение" }), i++));
  }
  return r(""), t(l), i;
}
function Cc(e, t, n) {
  e.name === "user_phone" ? t({ ...n, inputPhone: "" }) : e.name === "user_name" && t({ ...n, inputName: "" });
}
const H_ = Gs("+7 (999) 999-99-99");
function W_({ setBodyStyle: e }) {
  const [t, n] = E.useState(""),
    [r, i] = E.useState(""),
    [s, l] = E.useState({ inputName: "", inputPhone: "" });
  return u.jsxs("section", {
    className: K.section,
    children: [
      u.jsxs("div", {
        className: K.text_and_swiper_wrapper,
        children: [
          u.jsxs("div", {
            className: K.block_text,
            children: [
              u.jsx(qg, { text: "Запись на экскурсию" }),
              u.jsxs("div", {
                className: K.wrapper,
                children: [
                  u.jsx(ap, {
                    color: "white",
                    texts: [
                      "Хотите увидеть строительный процесс лично?",
                      "Запишитесь на экскурсию на реальный объект.",
                      " Вы увидите качество материалов, пообщаетесь с технологом и обсудите стоимость дома.",
                    ],
                  }),
                  u.jsxs("form", {
                    className: K.form,
                    onSubmit: (a) => F_(a, l, s, i, e),
                    children: [
                      u.jsx("input", {
                        className: K.input,
                        type: "text",
                        placeholder: "Ваше имя",
                        name: "user_name",
                        onChange: () => {
                          l({ inputName: "", inputPhone: "" }), i("");
                        },
                      }),
                      u.jsx(qs, {
                        className: K.input,
                        maskGenerator: H_,
                        name: "user_phone",
                        type: "tel",
                        placeholder: "+7 (999) 999-99-99",
                        value: t,
                        onChange: () => {
                          l({ inputName: "", inputPhone: "" }), i("");
                        },
                      }),
                      u.jsxs("button", {
                        type: "submit",
                        className: K.submit,
                        children: [
                          u.jsx("div", { className: r === "Загрузка..." ? `${K.loader} ${K.block}` : `${K.loader} ${K.none}` }),
                          u.jsx("div", { className: r === "Загрузка..." ? K.none : K.block, children: "Записаться" }),
                        ],
                      }),
                      u.jsx("div", {
                        className: `${K.error_text} ${K.position_error_first_input} ${
                          s.inputName == "Обязательное поле" ? K.block : K.none
                        }`,
                        children: "Обязательное поле",
                      }),
                      u.jsx("div", {
                        className: `${K.error_text} ${K.position_error_first_input} ${
                          s.inputName == "Слишком длинное значение" ? K.block : K.none
                        }`,
                        children: "Слишком длинное значение",
                      }),
                      u.jsx("div", {
                        className: `${K.error_text} ${K.position_error_second_input} ${
                          s.inputPhone == "Обязательное поле" ? K.block : K.none
                        }`,
                        children: "Обязательное поле",
                      }),
                      u.jsx("div", {
                        className: `${K.error_text} ${K.position_error_second_input} ${
                          s.inputPhone == "Слишком короткое значение" ? K.block : K.none
                        }`,
                        children: "Слишком короткое значение",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          u.jsx("div", { className: K.img_wrap, children: u.jsx("img", { className: K.img, src: "./img/record.jpg", alt: "" }) }),
        ],
      }),
      u.jsx(qa, { fetchStatus: r, setFetchStatus: i, setBodyStyle: e }),
      u.jsx("div", { id: "record", style: { position: "absolute", top: "-100px" } }),
    ],
  });
}
const U_ = "_section_113pu_1",
  G_ = "_text_and_swiper_wrapper_113pu_13",
  q_ = "_input_113pu_35",
  K_ = "_subtitle_113pu_49",
  Q_ = "_img_113pu_59",
  Y_ = "_submit_113pu_67",
  X_ = "_block_text_113pu_95",
  Z_ = "_text_113pu_13",
  J_ = "_button_113pu_131",
  ey = "_wrapper_113pu_177",
  ty = "_loader_113pu_253",
  ny = "_load3_113pu_1",
  ry = "_block_113pu_95",
  iy = "_none_113pu_379",
  sy = "_error_text_113pu_387",
  ly = "_position_error_second_input_113pu_435",
  oy = "_position_error_first_input_113pu_445",
  ay = "_flex_113pu_497",
  uy = "_img_wrap_113pu_553",
  Q = {
    section: U_,
    text_and_swiper_wrapper: G_,
    input: q_,
    subtitle: K_,
    img: Q_,
    submit: Y_,
    block_text: X_,
    text: Z_,
    button: J_,
    wrapper: ey,
    loader: ty,
    load3: ny,
    block: ry,
    none: iy,
    error_text: sy,
    position_error_second_input: ly,
    position_error_first_input: oy,
    flex: ay,
    img_wrap: uy,
  },
  Rl = { loading: "Загрузка...", success: "Спасибо! Скоро мы с вами свяжемся", failure: "Что-то пошло не так..." };
async function cy(e, t, n, r, i) {
  e.preventDefault();
  const s = e.nativeEvent.target,
    l = dy(s, t, n, r),
    a = s.childNodes[1].value;
  if ((r(Rl.loading), l === 0)) {
    const o = new FormData(s);
    o.set("user_phone", a);
    const f = { first_name: o.get("user_name"), telephoneCode: "", telephone: a };
    (await Ga(JSON.stringify(f))).success ? (r(Rl.success), s.reset()) : r(Rl.failure), i("hidden");
  } else r("");
}
function dy(e, t, n, r) {
  let i = 0;
  const s = [e.childNodes[0], e.childNodes[1]];
  Nc(e.childNodes[1], t, n), Nc(e.childNodes[0], t, n);
  let l = { inputName: "", inputPhone: "" };
  for (let a = 0; a < s.length; a++) {
    const o = s[a];
    o.name === "user_name" &&
      (o.value.length > 25 && ((l = { ...l, inputName: "Слишком длинное значение" }), i++),
      o.value.trim() === "" && ((l = { ...l, inputName: "Обязательное поле" }), i++)),
      o.name === "user_phone" &&
        (o.value === "" && ((l = { ...l, inputPhone: "Обязательное поле" }), i++),
        o.value.length < 18 && o.value.length > 0 && ((l = { ...l, inputPhone: "Слишком короткое значение" }), i++));
  }
  return r(""), t(l), i;
}
function Nc(e, t, n) {
  e.name === "user_phone" ? t({ ...n, inputPhone: "" }) : e.name === "user_name" && t({ ...n, inputName: "" });
}
const fy = Gs("+7 (999) 999-99-99");
function py({ positionImg: e, setBodyStyle: t }) {
  const [n, r] = E.useState(""),
    [i, s] = E.useState(""),
    [l, a] = E.useState({ inputName: "", inputPhone: "" });
  return u.jsxs("section", {
    className: Q.section,
    children: [
      u.jsxs("div", {
        className: Q.text_and_swiper_wrapper,
        children: [
          u.jsxs("div", {
            className: Q.block_text,
            children: [
              u.jsx(Fa, { texts: ["Ваш дом с участком ближе, чем кажется!"] }),
              u.jsxs("div", {
                className: Q.wrapper,
                children: [
                  u.jsx(ap, {
                    color: "black",
                    texts: [
                      "Не нашли землю? Бесплатно подберем идеальный вариант! ",
                      "Оформление дома и участка — в одну ипотеку без хлопот.  ",
                    ],
                  }),
                  u.jsxs("form", {
                    className: Q.form,
                    onSubmit: (o) => cy(o, a, l, s, t),
                    children: [
                      u.jsx("input", {
                        className: Q.input,
                        type: "text",
                        placeholder: "Ваше имя",
                        name: "user_name",
                        onChange: () => {
                          a({ inputName: "", inputPhone: "" }), s("");
                        },
                      }),
                      u.jsx(qs, {
                        className: Q.input,
                        maskGenerator: fy,
                        name: "user_phone",
                        type: "tel",
                        placeholder: "+7 (999) 999-99-99",
                        value: n,
                        onChange: () => {
                          a({ inputName: "", inputPhone: "" }), s("");
                        },
                      }),
                      u.jsxs("button", {
                        type: "submit",
                        className: Q.submit,
                        children: [
                          u.jsx("div", { className: i === "Загрузка..." ? `${Q.loader} ${Q.block}` : `${Q.loader} ${Q.none}` }),
                          u.jsx("div", { className: i === "Загрузка..." ? Q.none : Q.block, children: "Подробнее" }),
                        ],
                      }),
                      u.jsx("div", {
                        className: `${Q.error_text} ${Q.position_error_first_input} ${
                          l.inputName == "Обязательное поле" ? Q.block : Q.none
                        }`,
                        children: "Обязательное поле",
                      }),
                      u.jsx("div", {
                        className: `${Q.error_text} ${Q.position_error_first_input} ${
                          l.inputName == "Слишком длинное значение" ? Q.block : Q.none
                        }`,
                        children: "Слишком длинное значение",
                      }),
                      u.jsx("div", {
                        className: `${Q.error_text} ${Q.position_error_second_input} ${
                          l.inputPhone == "Обязательное поле" ? Q.block : Q.none
                        }`,
                        children: "Обязательное поле",
                      }),
                      u.jsx("div", {
                        className: `${Q.error_text} ${Q.position_error_second_input} ${
                          l.inputPhone == "Слишком короткое значение" ? Q.block : Q.none
                        }`,
                        children: "Слишком короткое значение",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          u.jsx("div", { className: Q.img_wrap, children: u.jsx("img", { className: Q.img, src: `./img/plotHouse_${e}.jpg`, alt: "" }) }),
        ],
      }),
      u.jsx(qa, { fetchStatus: i, setFetchStatus: s, setBodyStyle: t }),
    ],
  });
}
function my({ positionImg: e, setActiveTab: t, setBodyStyle: n }) {
  return (
    E.useEffect(() => {
      const r = window.scrollY;
      window.scrollBy(0, -r), (document.title = "Каркасные дома | Строит Дома");
    }, []),
    u.jsxs(u.Fragment, {
      children: [
        u.jsx(Yv, {}),
        u.jsx(u_, { setBodyStyle: n }),
        u.jsx(p_, { setActiveTab: t }),
        u.jsx(S_, {}),
        u.jsx(W_, { setBodyStyle: n }),
        u.jsx(py, { positionImg: e, setBodyStyle: n }),
      ],
    })
  );
}
const hy = "_nav_x9l37_1",
  gy = "_nav_blue_x9l37_19",
  vy = "_wrapper_x9l37_27",
  _y = "_menu_button_x9l37_43",
  yy = "_links_x9l37_61",
  xy = "_link_x9l37_61",
  wy = "_menu_links_x9l37_85",
  Sy = "_icons_x9l37_97",
  jy = "_icon_x9l37_97",
  ky = "_close_button_x9l37_137",
  Ey = "_page_icons_x9l37_197",
  Cy = "_page_icon_x9l37_197",
  Ny = "_page_nav_x9l37_239",
  Ty = "_page_wrapper_x9l37_259",
  Py = "_page_menu_x9l37_275",
  by = "_page_link_to_main_page_x9l37_291",
  My = "_item_title_x9l37_307",
  Iy = "_item_link_x9l37_315",
  Ly = "_overlay_x9l37_339",
  $y = "_menu_x9l37_43",
  Oy = "_phone_x9l37_399",
  zy = "_burger_x9l37_499",
  Ry = "_visible_x9l37_543",
  Dy = "_notVisible_x9l37_555",
  Ay = "_block_x9l37_565",
  Y = {
    nav: hy,
    nav_blue: gy,
    wrapper: vy,
    menu_button: _y,
    links: yy,
    link: xy,
    menu_links: wy,
    icons: Sy,
    icon: jy,
    close_button: ky,
    page_icons: Ey,
    page_icon: Cy,
    page_nav: Ny,
    page_wrapper: Ty,
    page_menu: Py,
    page_link_to_main_page: by,
    item_title: My,
    item_link: Iy,
    overlay: Ly,
    menu: $y,
    phone: Oy,
    burger: zy,
    visible: Ry,
    notVisible: Dy,
    block: Ay,
  };
function By({ scroll: e, setBodyStyle: t }) {
  const [n, r] = E.useState(!1),
    i = () => {
      window.scrollTo(0, 0);
    };
  return yr().pathname == "/"
    ? u.jsxs("nav", {
        className: `${Y.nav} ${e > 93 ? Y.nav_blue : ""}`,
        children: [
          u.jsx("div", {
            className: "container",
            children: u.jsxs("div", {
              className: Y.wrapper,
              children: [
                u.jsxs("div", {
                  className: Y.menu_button,
                  children: [
                    u.jsx("img", {
                      className: Y.burger,
                      src: "./icons/MenuIcon.svg",
                      alt: "MenuIcon",
                      onClick: () => {
                        r(!0), t("hidden");
                      },
                    }),
                    u.jsxs("div", {
                      className: Y.links,
                      children: [
                        u.jsx(Ie, { to: "/", className: Y.link, onClick: i, children: "Главная" }),
                        u.jsx(Ie, { to: "/catalog", className: Y.link, onClick: i, children: "Каталог" }),
                        u.jsx(Ie, { to: "/built_houses", className: Y.link, onClick: i, children: "Построенные дома" }),
                        u.jsx("a", { href: "#contacts", className: Y.link, children: "Контакты" }),
                      ],
                    }),
                  ],
                }),
                Fo(),
                Vy(),
              ],
            }),
          }),
          Fy(n, r, t),
        ],
      })
    : u.jsx("nav", {
        className: Y.page_nav,
        children: u.jsx("div", {
          className: "container",
          children: u.jsxs("div", {
            className: Y.page_wrapper,
            children: [
              u.jsx("div", {
                className: Y.page_menu,
                children: u.jsx(Ie, { to: "/", className: Y.page_link_to_main_page, children: "На главную" }),
              }),
              Fo(),
            ],
          }),
        }),
      });
}
function Fy(e, t, n) {
  let r = Y.overlay,
    i = Y.menu;
  return (
    e && ((r = `${Y.overlay} ${Y.block}`), (i = `${Y.menu} ${Y.visible}`)),
    u.jsxs(u.Fragment, {
      children: [
        u.jsx("div", { className: r, onClick: () => t(!1) }),
        u.jsxs("div", {
          className: i,
          children: [
            u.jsxs("div", {
              className: Y.menu_links,
              children: [
                u.jsx("a", {
                  href: "#about",
                  className: Y.link,
                  onClick: () => {
                    t(!1), n("");
                  },
                  children: "О нас",
                }),
                u.jsx("a", {
                  href: "#catalog",
                  className: Y.link,
                  onClick: () => {
                    t(!1), n("");
                  },
                  children: "Каталог",
                }),
                u.jsx("a", {
                  href: "#record",
                  className: Y.link,
                  onClick: () => {
                    t(!1), n("");
                  },
                  children: "Запись на экскурсию",
                }),
                u.jsx(Fo, {}),
              ],
            }),
            u.jsx("button", {
              className: Y.close_button,
              onClick: () => {
                t(!1), n("");
              },
              children: " ",
            }),
          ],
        }),
      ],
    })
  );
}
function Fo() {
  return u.jsxs("div", {
    className: Y.icons,
    children: [
      u.jsx("a", {
        target: "_blank",
        href: "https://teleg.run/Like_House_org",
        className: Y.icon,
        children: u.jsx("img", { src: "./icons/TelegramIcon.svg", alt: "" }),
      }),
      u.jsx("a", {
        target: "_blank",
        href: "https://wa.clck.bar/79251047452",
        className: Y.icon,
        children: u.jsx("img", { src: "./icons/WhatsappIcon.svg", alt: "" }),
      }),
      u.jsx("a", {
        id: "phone",
        href: "tel:+74951277452",
        className: `${Y.icon} ${Y.phone}`,
        children: u.jsx("img", { src: "./icons/PhoneIcon.svg", alt: "" }),
      }),
    ],
  });
}
function Vy() {
  return u.jsxs("div", {
    className: Y.item_title,
    children: [
      u.jsx("a", { className: Y.item_link, href: "tel:+79197843396 ", children: "+7 919 784-33-96" }),
      " ",
      u.jsx("br", {}),
      u.jsx("span", { children: "(WhatsApp)" }),
    ],
  });
}
const Hy = "_payment_1jm1q_1",
  Wy = "_payment_header_1jm1q_9",
  Uy = "_payment_subtitle_1jm1q_23",
  Gy = "_payment_item_1jm1q_39",
  qy = "_payment_item_text_1jm1q_47",
  Ky = "_payment_item_descr_1jm1q_81",
  De = { payment: Hy, payment_header: Wy, payment_subtitle: Uy, payment_item: Gy, payment_item_text: qy, payment_item_descr: Ky };
function Qy() {
  return (
    E.useEffect(() => {
      const e = window.scrollY;
      window.scrollBy(0, -e);
    }, []),
    u.jsxs(u.Fragment, {
      children: [
        u.jsx("div", {
          className: De.payment,
          children: u.jsxs("div", {
            className: "container",
            children: [
              u.jsx("div", { className: De.payment_header, children: "Оплата домов и бань" }),
              u.jsx("div", {
                className: De.payment_subtitle,
                children: "ДЛЯ ВАШЕГО УДОБСТВА И УВЕРЕННОСТИ В КАЧЕСТВЕ НАШИХ РАБОТ ВСЕ ОПЛАТЫ ЗА УСЛУГИ РАЗДЕЛЕНЫ НА 4 ЭТАПА",
              }),
              u.jsxs("div", {
                children: [
                  u.jsxs("div", {
                    className: De.payment_item,
                    children: [
                      u.jsxs("div", {
                        className: De.payment_item_text,
                        children: ["01 ЭТАП ", u.jsx("span", { children: "30 000 руб." })],
                      }),
                      u.jsx("div", {
                        className: De.payment_item_descr,
                        children: "Первоначальная сумма предоплаты производится при заключении договора строительства",
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className: De.payment_item,
                    children: [
                      u.jsxs("div", { className: De.payment_item_text, children: ["02 ЭТАП ", u.jsx("span", { children: "45%" })] }),
                      u.jsx("div", {
                        className: De.payment_item_descr,
                        children: "Вторая часть предоплаты производится после установки фундамента и завоза материала на ваш участок",
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className: De.payment_item,
                    children: [
                      u.jsxs("div", { className: De.payment_item_text, children: ["03 ЭТАП ", u.jsx("span", { children: "45%" })] }),
                      u.jsx("div", {
                        className: De.payment_item_descr,
                        children: "Третья часть предоплаты производится после сборки каркаса и завоза оставшихся материала на ваш участок",
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className: De.payment_item,
                    children: [
                      u.jsxs("div", { className: De.payment_item_text, children: ["04 ЭТАП ", u.jsx("span", { children: "10%" })] }),
                      u.jsx("div", {
                        className: De.payment_item_descr,
                        children:
                          "Оставшаяся часть оплаты производится после выполнения всех работ согласно договору строительства,проверки домаотделом контроля качества по чек листам и подписания акта выполненных работ.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        u.jsx("div", {
          className: "stylePagehelp",
          children: u.jsxs("div", {
            className: "stylePagecontainer",
            children: [
              u.jsx("div", { className: "stylePagehelp__header", children: "Поможем с ипотекой" }),
              u.jsxs("div", {
                className: "stylePagehelp__wrapper",
                children: [
                  u.jsx("img", { src: "./pages/8x11Images/01.jpg", alt: "" }),
                  u.jsxs("div", {
                    className: "stylePagehelp__items",
                    children: [
                      u.jsxs("div", {
                        className: "stylePagehelp__item",
                        children: [u.jsx("span", { children: "98%" }), " положительных заявок"],
                      }),
                      u.jsx("div", { className: "stylePageline2" }),
                      u.jsxs("div", {
                        className: "stylePagehelp__item",
                        children: ["Ипотека для семей с детьми ", u.jsx("span", { children: "от 6%" })],
                      }),
                      u.jsx("div", { className: "stylePageline2" }),
                      u.jsxs("div", {
                        className: "stylePagehelp__item",
                        children: ["Одобрение", u.jsx("span", { children: " от 1 дня" })],
                      }),
                      u.jsx("div", { className: "stylePageline2" }),
                      u.jsxs("div", {
                        className: "stylePagehelp__item",
                        children: ["Комбо-ипотека с лимитом до ", u.jsx("span", { children: " 30 млн рублей " })],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        u.jsx("div", {
          id: "mortgage",
          className: "stylePagemortgage",
          children: u.jsxs("div", {
            className: "stylePagecontainer",
            children: [
              u.jsx("div", { className: "stylePagepayment__header", children: "Рассчитать ипотеку" }),
              u.jsx("iframe", { src: "https://ipoteka.domclick.ru/calc-reg/calculator.html?prod=6", frameBorder: "0" }),
            ],
          }),
        }),
        u.jsx("div", {
          className: "stylePagematernalCapital",
          children: u.jsxs("div", {
            className: "stylePagecontainer",
            children: [
              u.jsx("div", { className: "stylePagepayment__header", children: "Материнский капитал" }),
              u.jsx("div", {
                className: "stylePagepayment__subtitle",
                children: "ДЛЯ ИСПОЛЬЗОВАНИЯ МАТЕРИНСКОГО КАПИТАЛА НА СТРОИТЕЛЬСТВО ДОМА ВАМ НЕОБХОДИМО:",
              }),
              u.jsxs("div", {
                className: "stylePagematernalCapital__items",
                children: [
                  u.jsxs("div", {
                    className: "stylePagematernalCapital__item",
                    children: [
                      u.jsx("div", { className: "stylePagematernalCapital__item-number", children: "01" }),
                      u.jsx("div", {
                        className: "stylePagematernalCapital__item-text",
                        children:
                          "Иметь в наличии участок (деньги по Материнскому капиталу выделяются только на строительство жилого дома ИЖС)",
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className: "stylePagematernalCapital__item",
                    children: [
                      u.jsx("div", { className: "stylePagematernalCapital__item-number", children: "02" }),
                      u.jsx("div", {
                        className: "stylePagematernalCapital__item-text",
                        children:
                          "Заключить договор на строительство дома (при себе иметь паспорт РФ, сертификат на Материнский капитал или его копию)",
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className: "stylePagematernalCapital__item",
                    children: [
                      u.jsx("div", { className: "stylePagematernalCapital__item-number", children: "03" }),
                      u.jsx("div", {
                        className: "stylePagematernalCapital__item-text",
                        children: "Обратиться в Пенсионный фонд с договором на строительство дома",
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className: "stylePagematernalCapital__item",
                    children: [
                      u.jsx("div", { className: "stylePagematernalCapital__item-number", children: "04" }),
                      u.jsx("div", {
                        className: "stylePagematernalCapital__item-text",
                        children:
                          "После перечисления Пенсионным фондом денежных средств материнского капитала на расчетный счет Компании, доплатить оставшуюся сумму по договору на строительство дома",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const Yy = [
    "Фундамент ? ЖБ сваи (длинна 3000 мм сечение 150х150 мм)",
    "Обработка огнебиозащита ? Нижний венец дома",
    "Обвязка ? Брус 150х150 мм",
    "Перекрытие этажа ? Доска сечением 45х195 мм (+-5мм) калиброванная камерной сушки",
    "Наружные стены ? Доска сечением 45х145 мм (+-5мм) калиброванная камерной сушки",
    "Внутренние несущие стены ? Доска сечением 45х145 мм (+-5мм) калиброванная камерной сушки",
    "Перегородки ? Доска сечением 45х95 мм (+-5мм) калиброванная камерной сушки",
    "Обрешётка ? Доска 25х100/25х150 мм",
    "Наружная отделка стен ? «Доска штиль, 16х136 мм",
    "Внутренняя отделка стен ? «Доска штиль, 16х136 мм",
    "Полы ? Шпунтованная доска или фанера толщина 36 мм",
    "Отделка потолка ? «Доска штиль, 16х136 мм",
    "Материал кровля ? Металлочерепица (0,5 мм)",
    "Водосточная система ? Döcke PREMIUM или аналог, цвет на выбор",
    "Стропильная система ? Доска сечением 45х145 мм (+-5мм) калиброванная камерной сушки",
    "Окна ? Оконные блоки ПВХ двухкамерные (профиль 70мм) (размеры по проекту) с москитными сетками, отливами, наличниками, тепло сберегающее покрытие",
    "Двери межкомнатные ? Деревянные филёнчатые, наличники",
    "Двери входные ? Дверные блоки ПВХ (размеры по проекту), усиленный дверной профиль, двухкамерный стеклопакет (размеры по проекту), наличники",
    "Терраса по проекту ? Покрытие Террасная доска",
    "Утепление наружных стен ? ROCKWOOL КАРКАС БАТТС в 3 слоя (150 мм), с укладкой гидроизоляции и пароизоляции ОНДУТИС",
    "Шумоизоляция ? ROCKWOOL КАРКАС БАТТС Внутренние несущие стены (150мм) и перегородки (100мм), Междуэтажное перекрытие (100 мм)",
    "Утепление цокольного перекрытия ? ROCKWOOL КАРКАС БАТТС в 4 слоя (200 мм),с укладкой гидроизоляции и пароизоляции ОНДУТИС",
    "Утепление перекрытия второго этажа ? ROCKWOOL КАРКАС БАТТС в 3 слоя (150 мм), с укладкой гидроизоляции и пароизоляции ОНДУТИС",
    "Лестница внутренняя ? Из строганной доски",
    "Высота первого этажа ? 2400 мм",
    "Высота второго этажа ? 2400 мм",
  ],
  Xy = [
    "Фундамент ? ЖБ сваи (длинна 3000 мм сечение 150х150 мм)",
    "Обработка огнебиозащита ? Нижний венец дома",
    "Обвязка ? Брус 150х150 мм",
    "Перекрытие этажа ? Доска сечением 45х195 мм (+-5мм) калиброванная камерной сушки",
    "Перекрытие чердачное ? Доска сечением 45х145 мм (+-5мм) калиброванная камерной сушки",
    "Наружные стены ? Доска сечением 45х145 мм (+-5мм) калиброванная камерной сушки",
    "Внутренние несущие стены ? Доска сечением 45х145 мм (+-5мм) калиброванная камерной сушки",
    "Перегородки ? Доска сечением 45х95 мм (+-5мм) калиброванная камерной сушки",
    "Обрешётка ? Доска 25х100/25х150 мм",
    "Наружная отделка стен ? «Доска штиль, 16х136 мм",
    "Внутренняя отделка стен ? «Доска штиль, 16х136 мм",
    "Полы ? Шпунтованная доска или фанера толщина 36 мм",
    "Отделка потолка ? «Доска штиль, 16х136 мм",
    "Материал кровля ? Металлочерепица (0,5 мм)",
    "Водосточная система ? Döcke PREMIUM или аналог, цвет на выбор",
    "Стропильная система ? Доска сечением 45х145 мм (+-5мм) калиброванная камерной сушки",
    "Окна ? Оконные блоки ПВХ двухкамерные (профиль 70мм) (размеры по проекту) с москитными сетками, отливами, наличниками, тепло сберегающее покрытие",
    "Двери межкомнатные ? Деревянные филёнчатые, наличники",
    "Двери входные ? Дверные блоки ПВХ (размеры по проекту), усиленный дверной профиль, двухкамерный стеклопакет (размеры по проекту), наличники",
    "Терраса по проекту ? Покрытие Террасная доска",
    "Утепление наружных стен ? ROCKWOOL КАРКАС БАТТС в 3 слоя (150 мм), с укладкой гидроизоляции и пароизоляции ОНДУТИС",
    "Шумоизоляция ? ROCKWOOL КАРКАС БАТТС Внутренние несущие стены (150мм) и перегородки (100мм)",
    "Утепление цокольного перекрытия ? ROCKWOOL КАРКАС БАТТС в 4 слоя (200 мм),с укладкой гидроизоляции и пароизоляции ОНДУТИС",
    "Утепление чердачного перекрытия ? ROCKWOOL КАРКАС БАТТС в 3 слоя (150 мм), с укладкой гидроизоляции и пароизоляции ОНДУТИС",
    "Высота этажа ? 2700 мм",
  ],
  Zy = [
    "Фундамент ? ЖБ сваи (длинна 3000 мм сечение 150х150 мм)",
    "Обработка огнебиозащита ? нижний венец дома",
    "Обвязка ? брус 150х150 мм",
    "Перекрытие цокольное ? доска сечением 50х150 мм",
    "Перекрытие чердачное ? доска сечением 45х145 мм",
    "Наружные стены ? доска сечением 50х150 мм",
    "Внутренние несущие стены ? доска сечением 50х150 мм",
    "Перегородки ? доска сечением 50х100 мм",
    "Обрешётка ? доска 25х100/25х150 мм",
    "Наружная отделка стен ? «Доска штиль, 16х136 мм",
    "Внутренняя отделка стен ? «Доска штиль, 16х136 мм",
    "Отделка парной ? «Липа»",
    "Полы ? Шпунтованная доска или фанера толщина 36 мм",
    "Отделка потолка ? «Доска штиль, 16х136 мм,",
    "Материал кровля ? металлочерепица Grand line (0,45мм)",
    "Водосточная система ? Döcke PREMIUM или аналог, цвет на выбор",
    "Стропильная система ? доска сечением 45х145 мм строганная камерной сушки",
    "Окна ? оконные блоки ПВХ Novotex двухкамерные (размеры по проекту) с москитными сетками, отливами, наличниками, тепло сберегающее покрытие",
    "Двери межкомнатные ? деревянные филёнчатые, наличники",
    "Дверь входная ? Дверные блоки ПВХ (размеры по проекту), профиль BrusBox, двухкамерный стеклопакет (размеры по проекту), наличники",
    "Терраса по проекту ? Покрытие Террасная доска",
    "Утепление наружных стен ? ROCKWOOL КАРКАС БАТТС в 3 слоя (150 мм), с укладкой гидроизоляции и пароизоляции ОНДУТИС",
    "Шумоизоляция ? не предусмотрено",
    "Утепление цокольного перекрытия ? ROCKWOOL КАРКАС БАТТС в 3 слоя (200 мм),с укладкой гидроизоляции и пароизоляции ОНДУТИС",
    "Утепление перекрытия первого этажа ? ROCKWOOL КАРКАС БАТТС в 3 слоя (150 мм), с укладкой гидроизоляции и пароизоляции ОНДУТИС",
    "Высота первого этажа ? 2400 мм",
    "Водосточная система ? цвет на выбор",
    "Снегозадержатели ? не предусмотрено",
  ],
  Jy = [
    "Фундамент ? ЖБ сваи (длинна 3000 мм сечение 150х150 мм)",
    "Обработка огнебиозащита ? Нижний венец дома",
    "Обвязка ? Брус 150х150 мм",
    "Перекрытие этажа ? Доска сечением 45х195 мм (+-5мм) калиброванная камерной сушки",
    "Перекрытие чердачное ? Доска сечением 45х145 мм (+-5мм) калиброванная камерной сушки",
    "Наружные стены ? Доска сечением 45х145 мм (+-5мм) калиброванная камерной сушки",
    "Внутренние несущие стены ? Доска сечением 45х145 мм (+-5мм) калиброванная камерной сушки",
    "Перегородки ? Доска сечением 45х95 мм (+-5мм) калиброванная камерной сушки",
    "Обрешётка ? Доска 25х100/25х150 мм",
    "Наружная отделка стен ? «Доска штиль, 16х136 мм",
    "Внутренняя отделка стен ? «Доска штиль, 16х136 мм",
    "Полы ? Шпунтованная доска или фанера толщина 36 мм",
    "Отделка потолка ? «Доска штиль, 16х136 мм",
    "Материал кровля ? Металлочерепица (0,5 мм)",
    "Водосточная система ? Döcke PREMIUM или аналог, цвет на выбор",
    "Стропильная система ? Доска сечением 45х145 мм (+-5мм) калиброванная камерной сушки",
    "Окна ? Оконные блоки ПВХ двухкамерные (профиль 70мм) (размеры по проекту) с москитными сетками, отливами, наличниками, тепло сберегающее покрытие",
    "Двери межкомнатные ? Деревянные филёнчатые, наличники",
    "Двери входные ? Дверные блоки ПВХ (размеры по проекту), усиленный дверной профиль, двухкамерный стеклопакет (размеры по проекту), наличники",
    "Терраса по проекту ? Покрытие Террасная доска",
    "Утепление наружных стен ? ROCKWOOL КАРКАС БАТТС в 3 слоя (150 мм), с укладкой гидроизоляции и пароизоляции ОНДУТИС",
    "Шумоизоляция ? ROCKWOOL КАРКАС БАТТС Внутренние несущие стены (150мм) и перегородки (100мм), Междуэтажное перекрытие (100 мм)",
    "Утепление цокольного перекрытия ? ROCKWOOL КАРКАС БАТТС в 4 слоя (200 мм),с укладкой гидроизоляции и пароизоляции ОНДУТИС",
    "Утепление перекрытия второго этажа ? ROCKWOOL КАРКАС БАТТС в 3 слоя (150 мм), с укладкой гидроизоляции и пароизоляции ОНДУТИС",
    "Лестница внутренняя ? Из строганной доски",
    "Высота первого этажа ? 2600 мм",
    "Высота второго этажа ? 2600 мм",
  ],
  ex = [
    "Фундамент ? ЖБ сваи (длинна 3000 мм сечение 150х150 мм)",
    "Обработка огнебиозащита ? Нижний венец дома",
    "Обвязка ? Брус 150х150 мм",
    "Перекрытие этажа ? Доска сечением 45х195 мм (+-5мм) калиброванная камерной сушки",
    "Наружные стены ? Доска сечением 45х145 мм (+-5мм) калиброванная камерной сушки",
    "Внутренние несущие стены ? Доска сечением 45х145 мм (+-5мм) калиброванная камерной сушки",
    "Перегородки ? Доска сечением 45х95 мм (+-5мм) калиброванная камерной сушки",
    "Обрешётка ? Доска 25х100/25х150 мм",
    "Наружная отделка стен ? «Доска штиль, 16х136 мм",
    "Внутренняя отделка стен ? «Доска штиль, 16х136 мм",
    "Полы ? Шпунтованная доска или фанера толщина 36 мм",
    "Отделка потолка ? «Доска штиль, 16х136 мм",
    "Материал кровля ? Металлочерепица (0,5 мм)",
    "Водосточная система ? Döcke PREMIUM или аналог, цвет на выбор",
    "Стропильная система ? Доска сечением 45х195 мм (+ - 5 мм)",
    "Окна ? Оконные блоки ПВХ двухкамерные (профиль 70мм) (размеры по проекту) с москитными сетками, отливами, наличниками, тепло сберегающее покрытие",
    "Двери межкомнатные ? Деревянные филёнчатые, наличники",
    "Двери входные ? Дверные блоки ПВХ (размеры по проекту), усиленный дверной профиль, двухкамерный стеклопакет (размеры по проекту), наличники",
    "Терраса по проекту ? Покрытие Террасная доска",
    "Утепление наружных стен ? ROCKWOOL КАРКАС БАТТС в 3 слоя (150 мм), с укладкой гидроизоляции и пароизоляции ОНДУТИС",
    "Шумоизоляция ? ROCKWOOL КАРКАС БАТТС Внутренние несущие стены (150мм) и перегородки (100мм), Междуэтажное перекрытие (100 мм)",
    "Утепление цокольного перекрытия ? ROCKWOOL КАРКАС БАТТС в 4 слоя (200 мм),с укладкой гидроизоляции и пароизоляции ОНДУТИС",
    "Утепление перекрытия первого этажа ? ROCKWOOL КАРКАС БАТТС в 2 слоя (100 мм), с укладкой гидроизоляции и пароизоляции ОНДУТИС",
    "Утепление перекрытия второго этажа ? ROCKWOOL КАРКАС БАТТС в 3 слоя (150 мм), с укладкой гидроизоляции и пароизоляции ОНДУТИС",
    "Высота этажа ? 2700 мм",
  ],
  tx = {
    "mutually exclusive": {
      "000000101": ["000000102", "000000105"],
      "000000102": ["000000101", "000000105", "000000144"],
      "000000105": ["000000102", "000000144"],
      "000000107": ["000000108"],
      "000000108": ["000000107"],
      "000000109": ["000000110"],
      "000000110": ["000000109"],
      "000000114": ["000000138"],
      "000000120": ["000000121"],
      "000000121": ["000000120"],
      "000000124": ["000000125"],
      "000000125": ["000000124"],
      "000000130": ["000000131"],
      "000000131": ["000000130", "000000138"],
      "000000133": ["000000134", "000000135"],
      "000000134": ["000000133", "000000135"],
      "000000135": ["000000134", "000000133"],
      "000000138": ["000000114", "000000131", "000000122"],
      "000000144": ["000000102", "000000105"],
    },
    "cant choose without": { "000000131": ["000000122"], "000000138": ["000000130"], "000000101": ["000000144"] },
    "cant be removed without": { "000000130": ["000000138"], "000000122": ["000000131"] },
  },
  Ns = [
    {
      img: "./img/Видовой_кадр_01_6x6.jpg",
      alt: "firstTile",
      information: [
        "Размер: 6x6",
        "Площадь: 71.25 м2",
        "Количество спален: 2",
        "Количество санузлов: 1",
        "Кухня-гостиная: 16 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: ["../pages/6x6Images/02.jpg", "../pages/6x6Images/01.jpg", "../pages/6x6Images/03.jpg", "../pages/6x6Images/04.jpg"],
      videos: [{ id: "456239458", oid: "209572384" }],
      coust: "0",
      mortgage: "0",
      type: "two-storey house",
      link: "atticus-6x6",
      typeHouse: "Аттикус",
      code: "000000003",
      houseName: "Аттикус 6x6",
    },
    {
      img: "./img/Видовой_кадр_01_7x7.jpg",
      alt: "firstTile",
      information: [
        "Размер: 7x7",
        "Площадь: 99.25 м2",
        "Количество спален: 4",
        "Количество санузлов: 2",
        "Кухня-гостиная: 22 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: ["../pages/7x7Images/01.jpg", "../pages/7x7Images/02.jpg", "../pages/7x7Images/03.jpg", "../pages/7x7Images/04.jpg"],
      videos: [],
      coust: "0",
      mortgage: "0",
      type: "two-storey house",
      link: "circuit-7x7",
      typeHouse: "Контур ",
      code: "000000033",
      houseName: "Контур  7х7",
    },
    {
      img: "./img/Видовой_кадр_01_7x7_с_котельной.jpg",
      alt: "firstTile",
      information: [
        "Размер: 7x7 с котельной",
        "Площадь: 101.75 м2",
        "Количество спален: 3",
        "Количество санузлов: 2",
        "Кухня-гостиная: 22 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: [
        "../pages/7x7WithBoilerRoomImages/01.jpg",
        "../pages/7x7WithBoilerRoomImages/02.jpg",
        "../pages/7x7WithBoilerRoomImages/03.jpg",
        "../pages/7x7WithBoilerRoomImages/04.jpg",
      ],
      videos: [],
      coust: "0",
      mortgage: "0",
      type: "two-storey house",
      link: "circuit-7x7_with_boiler_room",
      typeHouse: "Контур ",
      code: "000000034",
      houseName: "Контур  7x7 с котельной",
    },
    {
      img: "./img/Видовой_кадр_01_6x7.jpg",
      alt: "firstTile",
      information: [
        "Размер: 6x7",
        "Площадь: 90.75 м2",
        "Количество спален: 4",
        "Количество санузлов: 1",
        "Кухня-гостиная: 19 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: ["../pages/6x7Images/01.jpg", "../pages/6x7Images/02.jpg", "../pages/6x7Images/03.jpg", "../pages/6x7Images/04.jpg"],
      videos: [],
      coust: "0",
      mortgage: "0",
      type: "two-storey house",
      link: "atticus-6x7",
      typeHouse: "Аттикус",
      code: "000000004",
      houseName: "Аттикус 6х7",
    },
    {
      img: "./img/Видовой_кадр_01_8x11.jpg",
      alt: "firstTile",
      information: [
        "Размер: 8x11",
        "Площадь: 168 м2",
        "Количество спален: 4",
        "Количество санузлов: 2",
        "Кухня-гостиная: 24.14 м2",
        "Котельная: 6.24 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: ["../pages/8x11Images/01.jpg", "../pages/8x11Images/02.jpg", "../pages/8x11Images/03.jpg", "../pages/8x11Images/04.jpg"],
      videos: [{ id: "456239457", oid: "209572384" }],
      coust: "0",
      mortgage: "0",
      type: "two-storey house",
      link: "schwartz-8x11",
      typeHouse: "Контур",
      code: "000000035",
      houseName: "Контур 8x11",
    },
    {
      img: "./img/Видовой_кадр_01_8x11.8.jpg",
      alt: "firstTile",
      information: [
        "Размер: 8x11.8",
        "Площадь: 183.2 м2",
        "Количество спален: 4",
        "Количество санузлов: 2",
        "Кухня-гостиная: 28 м2",
        "Котельная: 6.16 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: [
        "../pages/8x11.8Images/01.jpg",
        "../pages/8x11.8Images/02.jpg",
        "../pages/8x11.8Images/03.jpg",
        "../pages/8x11.8Images/04.jpg",
      ],
      videos: [],
      coust: "0",
      mortgage: "0",
      type: "two-storey house",
      link: "schwartz-8x11.8",
      typeHouse: "Контур",
      code: "000000007",
      houseName: "Контур 8x11.8",
    },
    {
      img: "./img/Видовой_кадр_01_7.5х10.png",
      alt: "firstTile",
      information: [
        "Размер: 7.5x10",
        "Площадь: 141.6 м2",
        "Количество спален: 4",
        "Количество санузлов: 2",
        "Кухня: 15.95 м2",
        "Гостиная: 22.97 м2",
        "Котельная: 8.73 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: [
        "../pages/7.5x10Images/01.png",
        "../pages/7.5x10Images/02.jpg",
        "../pages/7.5x10Images/03.jpg",
        "../pages/7.5x10Images/04.jpg",
      ],
      videos: [],
      coust: "0",
      mortgage: "0",
      type: "two-storey house",
      link: "gazebo-7.5x10",
      typeHouse: "Бельведер",
      code: "000000036",
      houseName: "Бельведер 7.5x10",
    },
    {
      img: "./img/Видовой_кадр_01_8.5x11.jpg",
      alt: "firstTile",
      information: [
        "Размер: 8.5x11",
        "Площадь: 155.06 м2",
        "Количество спален: 4",
        "Количество санузлов: 2",
        "Кухня: 17.65 м2",
        "Гостиная: 27.53 м2",
        "Котельная: 6.12 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: [
        "../pages/8.5х11Images/01.jpg",
        "../pages/8.5х11Images/02.jpg",
        "../pages/8.5х11Images/03.jpg",
        "../pages/8.5х11Images/04.jpg",
      ],
      videos: [],
      coust: "0",
      mortgage: "0",
      type: "two-storey house",
      link: "gazebo-8.5x11",
      typeHouse: "Бельведер",
      code: "000000037",
      houseName: "Бельведер 8.5x11",
    },
    {
      img: "./img/Видовой_кадр_01_9.5x10.jpg",
      alt: "firstTile",
      information: [
        "Размер: 9.5x10",
        "Площадь: 166.84 м2",
        "Количество спален: 5",
        "Количество санузлов: 2",
        "Кухня - столовая: 15.22 м2",
        "Гостиная: 29.56 м2",
        "Котельная: 6.17 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: [
        "../pages/9.5x10Images/01.jpg",
        "../pages/9.5x10Images/02.jpg",
        "../pages/9.5x10Images/03.jpg",
        "../pages/9.5x10Images/04.jpg",
      ],
      videos: [],
      coust: "0",
      mortgage: "0",
      type: "two-storey house",
      link: "gazebo-9.5x10",
      typeHouse: "Бельведер",
      code: "000000038",
      houseName: "Бельведер 9.5x10",
    },
    {
      img: "./img/Видовой_кадр_01_9.5x12.jpg",
      alt: "firstTile",
      information: [
        "Размер: 9.5x12",
        "Площадь: 194.25 м2",
        "Количество спален: 5",
        "Количество санузлов: 2",
        "Кухня - столовая: 21.25 м2",
        "Гостиная: 32.17 м2",
        "Котельная: 6.12 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: [
        "../pages/9.5x12Images/01.jpg",
        "../pages/9.5x12Images/02.jpg",
        "../pages/9.5x12Images/03.jpg",
        "../pages/9.5x12Images/04.jpg",
      ],
      videos: [],
      coust: "0",
      mortgage: "0",
      type: "two-storey house",
      link: "gazebo-9.5x12",
      typeHouse: "Бельведер",
      code: "000000039",
      houseName: "Бельведер 9.5x12",
    },
    {
      img: "./img/Видовой_кадр_01_8x10.jpg",
      alt: "firstTile",
      information: [
        "Размер: 8x10",
        "Площадь: 95.25 м2",
        "Количество спален: 3",
        "Количество санузлов: 1",
        "Кухня-гостиная: 26.64 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: ["../pages/8x10Images/01.jpg", "../pages/8x10Images/02.jpg", "../pages/8x10Images/03.jpg"],
      videos: [
        { id: "456239429", oid: "209572384" },
        { id: "456239455", oid: "209572384" },
        { id: "456239461", oid: "209572384" },
        { id: "456239468", oid: "209572384" },
      ],
      coust: "0",
      mortgage: "0",
      type: "cottage",
      link: "nordic-8x10",
      typeHouse: "Нордик",
      code: "000000013",
      houseName: "Нордик 8x10",
    },
    {
      img: "./img/Видовой_кадр_01_8x10_(2_спальни).jpg",
      alt: "firstTile",
      information: [
        "Размер: 8x10 с двумя спальнями",
        "Площадь: 95.25 м2",
        "Количество спален: 2",
        "Количество санузлов: 1",
        "Кухня-гостиная: 29.44 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: ["../pages/8х10_2BedroomsImages/01.jpg", "../pages/8х10_2BedroomsImages/02.jpg", "../pages/8х10_2BedroomsImages/03.jpg"],
      videos: [{ id: "456239451", oid: "209572384" }],
      coust: "0",
      mortgage: "0",
      type: "cottage",
      link: "nordic-8x10_2_bedrooms",
      typeHouse: "Нордик",
      code: "000000041",
      houseName: "Нордик 8x10 с двумя спальнями",
    },
    {
      img: "./img/Видовой_кадр_01_8x12.jpg",
      alt: "firstTile",
      information: [
        "Размер: 8x12",
        "Площадь: 109.25 м2",
        "Количество спален: 3",
        "Количество санузлов: 2",
        "Кухня-гостиная: 27 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: ["../pages/8x12Images/01.jpg", "../pages/8x12Images/02.jpg", "../pages/8x12Images/03.jpg"],
      videos: [
        { id: "456239450", oid: "209572384" },
        { id: "456239465", oid: "209572384" },
      ],
      coust: "0",
      mortgage: "0",
      type: "cottage",
      link: "nordic-8x12",
      typeHouse: "Нордик",
      code: "000000019",
      houseName: "Нордик 8x12",
    },
    {
      img: "./img/Видовой_кадр_01_8x13_nordic.jpg",
      alt: "firstTile",
      information: [
        "Размер: 8x13",
        "Площадь: 116.25 м2",
        "Количество спален: 3",
        "Количество санузлов: 2",
        "Кухня-гостиная: 30.09 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: ["../pages/8x13_nordicImages/01.jpg", "../pages/8x13_nordicImages/02.jpg", "../pages/8x13_nordicImages/03.jpg"],
      videos: [],
      coust: "0",
      mortgage: "0",
      type: "cottage",
      link: "nordic-8x13",
      typeHouse: "Нордик",
      code: "000000016",
      houseName: "Нордик 8x13",
    },
    {
      img: "./img/Видовой_кадр_01_8x13_nordic2.jpg",
      alt: "firstTile",
      information: [
        "Размер: 8x13 с боковой верандой",
        "Площадь: 108 м2",
        "Количество спален: 3",
        "Количество санузлов: 2",
        "Кухня-гостиная: 31.58 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: ["../pages/8x13_nordic_2Images/01.jpg", "../pages/8x13_nordic_2Images/02.jpg", "../pages/8x13_nordic_2Images/03.jpg"],
      videos: [],
      coust: "0",
      mortgage: "0",
      type: "cottage",
      link: "nordic-8x13-2",
      typeHouse: "Нордик",
      code: "000000042",
      houseName: "Нордик 8x13 с боковой верандой",
    },
    {
      img: "./img/Видовой_кадр_01_7x8.jpg",
      alt: "firstTile",
      information: [
        "Размер: 7x8",
        "Площадь: 114.45 м2",
        "Количество спален: 5",
        "Количество санузлов: 2",
        "Кухня-гостиная: 21 м2",
        "Котельная: 6 м2 (ГОСТ)",
        "Сроки строительства: 60 дней",
      ],
      imgs: ["../pages/7x8Images/01.jpg", "../pages/7x8Images/02.jpg", "../pages/7x8Images/03.jpg", "../pages/7x8Images/04.jpg"],
      videos: [],
      coust: "0",
      mortgage: "0",
      type: "two-storey house",
      link: "quadrus-7x8",
      typeHouse: "Квадрус",
      code: "000000031",
      houseName: "Квадрус 7х8",
    },
    {
      img: "./img/Видовой_кадр_01_7x10.jpg",
      alt: "firstTile",
      information: [
        "Размер: 7x10",
        "Площадь: 138.75 м2",
        "Количество спален: 5",
        "Количество санузлов: 2",
        "Кухня-гостиная: 24 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: [
        "../pages/7x10Images/01.jpg",
        "../pages/7x10Images/02.jpg",
        "../pages/7x10Images/03.jpg",
        "../pages/7x10Images/04.jpg",
        "../pages/7x10Images/05.jpg",
        "../pages/7x10Images/06.jpg",
      ],
      videos: [{ id: "456239454", oid: "209572384" }],
      coust: "0",
      mortgage: "0",
      type: "two-storey house",
      link: "quadrus-7x10",
      typeHouse: "Квадрус",
      code: "000000043",
      houseName: "Квадрус 7х10",
    },
    {
      img: "./img/Видовой_кадр_01_8x8.jpg",
      alt: "firstTile",
      information: [
        "Размер: 8x8",
        "Площадь: 131.7 м2",
        "Количество спален: 5",
        "Количество санузлов: 2",
        "Кухня-гостиная: 24 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: ["../pages/8x8Images/01.jpg", "../pages/8x8Images/02.jpg", "../pages/8x8Images/03.jpg", "../pages/8x8Images/04.jpg"],
      videos: [],
      coust: "0",
      mortgage: "0",
      type: "two-storey house",
      link: "quadrus-8x8",
      typeHouse: "Квадрус",
      code: "000000001",
      houseName: "Квадрус 8x8",
    },
    {
      img: "./img/Видовой_кадр_01_8x9.jpg",
      alt: "firstTile",
      information: [
        "Размер: 8x9",
        "Площадь: 148.25 м2",
        "Количество спален: 5",
        "Количество санузлов: 2",
        "Кухня-гостиная: 28 м2",
        "Котельная: 6 м2 (ГОСТ)",
        "Сроки строительства: 60 дней",
      ],
      imgs: ["../pages/8x9Images/01.jpg", "../pages/8x9Images/02.jpg", "../pages/8x9Images/03.jpg", "../pages/8x9Images/04.jpg"],
      videos: [{ id: "456239473", oid: "209572384" }],
      coust: "0",
      mortgage: "0",
      type: "two-storey house",
      link: "quadrus-8x9",
      typeHouse: "Квадрус",
      code: "000000005",
      houseName: "Квадрус 8x9",
    },
    {
      img: "./img/Видовой_кадр_01_9.5x14.jpg",
      alt: "firstTile",
      information: [
        "Размер: 9.5x14",
        "Площадь: 125.3 м2",
        "Количество спален: 3",
        "Количество санузлов: 2",
        "Кухня-гостиная: 43 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: ["../pages/9.5x14Images/01.jpg", "../pages/9.5x14Images/02.jpg", "../pages/9.5x14Images/03.jpg"],
      videos: [{ id: "456239456", oid: "209572384" }],
      coust: "0",
      mortgage: "0",
      type: "cottage",
      link: "architect-9.5x14",
      typeHouse: "Архитект",
      code: "000000045",
      houseName: "Архитект 9.5x14",
    },
    {
      img: "./img/Видовой_кадр_01_9.5x13.jpg",
      alt: "firstTile",
      information: [
        "Размер: 9.5x13",
        "Площадь: 120.93 м2",
        "Количество спален: 3",
        "Количество санузлов: 2",
        "Кухня-гостиная: 38.11 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: ["../pages/9.5x13Images/01.jpg", "../pages/9.5x13Images/02.jpg", "../pages/9.5x13Images/03.jpg"],
      videos: [],
      coust: "0",
      mortgage: "0",
      type: "cottage",
      link: "architect-9.5x13",
      typeHouse: "Архитект",
      code: "000000044",
      houseName: "Архитект 9.5x13",
    },
    {
      img: "./img/Видовой_кадр_01_8.5x12.jpg",
      alt: "firstTile",
      information: [
        "Размер: 8.5x12",
        "Площадь: 95.11 м2",
        "Количество спален: 3",
        "Количество санузлов: 2",
        "Кухня-гостиная: 28.75 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: ["../pages/8.5x12Images/01.jpg", "../pages/8.5x12Images/02.jpg", "../pages/8.5x12Images/03.jpg"],
      videos: [],
      coust: "0",
      mortgage: "0",
      type: "cottage",
      link: "architect-8.5x12",
      typeHouse: "Архитект",
      code: "000000046",
      houseName: "Архитект 8.5x12",
    },
    {
      img: "./img/Видовой_кадр_01_7x8_cottage.jpg",
      alt: "firstTile",
      information: [
        "Размер: 7x8",
        "Площадь: 69.7 м2",
        "Количество спален: 2",
        "Количество санузлов: 1",
        "Кухня-гостиная: 20.1 м2",
        "Сроки строительства: 30 дней",
      ],
      imgs: ["../pages/7x8CottageImages/01.jpg", "../pages/7x8CottageImages/02.jpg", "../pages/7x8CottageImages/03.jpg"],
      videos: [],
      coust: "0",
      mortgage: "0",
      type: "cottage",
      link: "compactus-7x8_cottage",
      typeHouse: "Компактус",
      code: "000000008",
      houseName: "Компактус 7х8",
    },
    {
      img: "./img/Видовой_кадр_01_5x7.jpg",
      alt: "firstTile",
      information: [
        "Размер: 5x7",
        "Площадь: 43.5 м2",
        "Количество спален: 1",
        "Количество санузлов: 1",
        "Кухня-гостиная: 15.7 м2",
        "Сроки строительства: 30 дней",
      ],
      imgs: ["../pages/5x7Images/01.jpg", "../pages/5x7Images/02.jpg", "../pages/5x7Images/03.jpg"],
      videos: [],
      coust: "0",
      mortgage: "0",
      type: "cottage",
      link: "compactus-5x7",
      typeHouse: "Компактус",
      code: "000000047",
      houseName: "Компактус 5x7",
    },
    {
      img: "./img/Видовой_кадр_01_7x7_atticus.jpg",
      alt: "firstTile",
      information: [
        "Размер: 7x7",
        "Площадь: 101.75 м2",
        "Количество спален: 4",
        "Количество санузлов: 1",
        "Кухня-гостиная: 22.27 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: [
        "../pages/7x7_atticusImages/01.jpg",
        "../pages/7x7_atticusImages/02.jpg",
        "../pages/7x7_atticusImages/03.jpg",
        "../pages/7x7_atticusImages/04.jpg",
      ],
      videos: [],
      coust: "0",
      mortgage: "0",
      type: "two-storey house",
      link: "atticus-7x7",
      typeHouse: "Аттикус",
      code: "000000014",
      houseName: "Аттикус 7x7",
    },
    {
      img: "./img/Видовой_кадр_02_5x6_bathhouse.jpg",
      alt: "twentyFourthTile",
      information: [
        "Размер: 5x6",
        "Площадь: 41 м2",
        "Парная: 6 м2",
        "Количество санузлов: 1",
        "Комната отдыха: 15 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: ["../pages/5x6BathImage/07.jpg", "../pages/5x6BathImage/05.jpg", "../pages/5x6BathImage/06.jpg"],
      videos: [],
      coust: "0",
      type: "bathhouse",
      link: "bath-5x6",
      typeHouse: "Бани",
      code: "000000050",
      houseName: "Баня 5х6",
    },
    {
      img: "./img/Видовой_кадр_01_8x7_bathhouse.jpg",
      alt: "twentyFifthTile",
      information: [
        "Размер: 8x7",
        "Площадь: 53 м2",
        "Парная: 6 м2",
        "Количество санузлов: 1",
        "Комната отдыха: 17 м2",
        "Сроки строительства: 60 дней",
      ],
      imgs: ["../pages/8x7BathImage/01.jpg", "../pages/8x7BathImage/02.jpg"],
      videos: [],
      coust: "Скоро будет доступна",
      type: "bathhouse",
      link: "bath-8x7",
      typeHouse: "Бани",
      code: "000000097",
      houseName: "Баня 8х7",
    },
  ],
  nx = "_catalog_ti0b3_1",
  rx = "_inner_ti0b3_13",
  ix = "_header_ti0b3_33",
  sx = "_menu_wrapper_ti0b3_49",
  lx = "_text_ti0b3_63",
  ox = "_tile_ti0b3_93",
  ax = "_tile_img_ti0b3_113",
  ux = "_tile_text_ti0b3_123",
  cx = "_tile_link_ti0b3_145",
  dx = "_category_header_ti0b3_169",
  fx = "_line_ti0b3_181",
  px = "_small_btn_ti0b3_197",
  mx = "_container_enlargement_ti0b3_247",
  hx = "_wrapper_ti0b3_345",
  gx = "_change_bg_ti0b3_605",
  X = {
    catalog: nx,
    inner: rx,
    header: ix,
    menu_wrapper: sx,
    text: lx,
    tile: ox,
    tile_img: ax,
    tile_text: ux,
    tile_link: cx,
    category_header: dx,
    line: fx,
    small_btn: px,
    container_enlargement: mx,
    wrapper: hx,
    change_bg: gx,
  },
  vx = async (e) => {
    const t = await Y1();
    e(t);
  };
function _x(e) {
  const t = [];
  return (
    e.forEach((n) => {
      t.indexOf(n.typeHouse) == -1 && t.push(n.typeHouse);
    }),
    t
  );
}
function Tc(e) {
  const t = [];
  return (
    _x(e).forEach((n, r) => {
      r = 1e4 + r;
      const i = { typeHouse: n, code: r.toString() };
      t.push(i),
        e.forEach((s) => {
          s.typeHouse == n && t.push(s);
        });
    }),
    t
  );
}
function yx(e) {
  let t = [],
    n = "";
  return (
    e.type != "all"
      ? Tc(Ns).forEach((r, i) => {
          if (r.type == e.type) {
            const s = t.filter((l) => l.typeHouse == n);
            if (s.length === 0 || n != r.typeHouse) {
              n = r.typeHouse;
              const l = { typeHouse: r.typeHouse, code: i.toString() };
              t.push(l);
            } else if (s[0].typeHouse != n) {
              i = 9999 + i;
              const l = { typeHouse: r.typeHouse, code: i.toString() };
              t.push(l);
            }
            t.push(r);
          }
        })
      : (t = [...Tc(Ns)]),
    t
  );
}
function Sp(e) {
  const t = [];
  return (
    e == null ||
      e.split("").forEach((n, r) => {
        ((e == null ? void 0 : e.length) - r == 7 || (e == null ? void 0 : e.length) - r == 4) && (n = n + " "), t.push(n);
      }),
    t.join("")
  );
}
function xx({ setActiveTab: e, activeTab: t }) {
  const [n, r] = E.useState(),
    [i, s] = E.useState({ type: "all" });
  E.useEffect(() => {
    vx(r), s({ type: t.type });
  }, [t]),
    n &&
      Ns.forEach((a) => {
        let o = 0;
        n.Дома.forEach((c) => {
          c.ДомКод == a.code &&
            c.Разделы.forEach((f) => {
              f.Раздел == "Отделка фасада" && (o = o + f.Подразделы[0].Стоимость),
                f.Раздел == "Внутренняя отделка и комфорт" && (o = o + f.Подразделы[0].Стоимость),
                f.Раздел == "Общестрой" && (o = o + f.Подразделы[0].Стоимость),
                f.Раздел == "Фундамент" && (o = o + f.Подразделы[0].Стоимость),
                f.Раздел == "Веранда" && (o = o + f.Подразделы[0].Стоимость);
            });
        }),
          o == 0
            ? (a.coust = "Скоро будет доступна")
            : (a.type != "bathhouse" && (a.mortgage = (o / 5).toString()), (a.coust = o.toString()));
      });
  function l() {
    return u.jsx("div", { className: X.inner, children: yx(i).map((a) => wx(a)) }, 1000001);
  }
  return u.jsx("div", {
    className: X.catalog,
    children: u.jsxs("div", {
      className: X.wrapper,
      children: [
        u.jsx("div", { className: X.header, children: "Каталог" }),
        u.jsxs("div", {
          className: X.menu_wrapper,
          children: [
            u.jsx("button", {
              className: `${X.text} ${i.type === "all" ? X.change_bg : ""}`,
              "data-modal": "all",
              onClick: () => e({ type: "all" }),
              children: "Весь каталог",
            }),
            u.jsx("button", {
              className: `${X.text} ${i.type === "cottage" ? X.change_bg : ""}`,
              "data-modal": "cottage",
              onClick: () => e({ type: "cottage" }),
              children: "1 этаж. дома",
            }),
            u.jsx("button", {
              className: `${X.text} ${i.type === "two-storey house" ? X.change_bg : ""}`,
              "data-modal": "two-storey house",
              onClick: () => e({ type: "two-storey house" }),
              children: "2 этаж. дома",
            }),
            u.jsx("button", {
              className: `${X.text} ${i.type === "bathhouse" ? X.change_bg : ""}`,
              "data-modal": "bathhouse",
              onClick: () => e({ type: "bathhouse" }),
              children: "Бани",
            }),
          ],
        }),
        u.jsx(l, {}),
      ],
    }),
  });
}
function wx(e) {
  switch (Object.keys(e).length) {
    case 12:
      return Sx(e);
    case 11:
      return jx(e);
    case 2:
      return kx(e);
  }
}
function Sx(e) {
  var t;
  if (!(!e.coust || !e.mortgage))
    return u.jsx(
      B.Fragment,
      {
        children: u.jsxs(Ie, {
          to: `/catalog/${e.link}`,
          state: { task: e },
          className: X.tile,
          children: [
            u.jsx(On, {
              style: { width: "100%" },
              slidesPerView: 1,
              className: X.tile_img,
              spaceBetween: 50,
              loop: !0,
              children:
                (t = e.imgs) == null
                  ? void 0
                  : t.map((n, r) => u.jsx(pe, { children: u.jsx("img", { className: X.tile_img, src: n, alt: "slide" }) }, r)),
            }),
            u.jsx("div", { className: X.tile_text, children: e.information ? e.information[0] : !1 }),
            u.jsx("div", { className: X.tile_text, children: e.information ? e.information[1] : !1 }),
            u.jsxs("div", { className: X.tile_text, id: e.code, children: ["Стоимость: ", Sp(e.coust), " руб."] }),
            u.jsx("button", { className: X.small_btn, children: "Рассчитать стоимость" }),
          ],
        }),
      },
      e.code
    );
}
function jx(e) {
  var t;
  if (e.coust)
    return u.jsx(
      B.Fragment,
      {
        children: u.jsxs(Ie, {
          to: `/catalog/${e.link}`,
          state: { task: e },
          className: X.tile,
          children: [
            u.jsx(On, {
              style: { width: "100%" },
              slidesPerView: 1,
              className: X.tile_img,
              spaceBetween: 50,
              loop: !0,
              children:
                (t = e.imgs) == null
                  ? void 0
                  : t.map((n, r) => u.jsx(pe, { children: u.jsx("img", { className: X.tile_img, src: n, alt: "slide" }) }, r)),
            }),
            u.jsx("div", { className: X.tile_text, children: e.information ? e.information[0] : !1 }),
            u.jsx("div", { className: X.tile_text, children: e.information ? e.information[1] : !1 }),
            u.jsxs("div", {
              className: X.tile_text,
              id: e.code,
              children: ["Стоимость: ", e.coust === "Скоро будет доступна" ? "Скоро будет доступна" : Sp(e.coust) + " руб."],
            }),
            u.jsx("div", { className: X.tile_link, children: u.jsx("img", { src: "./icons/textSvg.svg", alt: "link" }) }),
          ],
        }),
      },
      e.code
    );
}
function kx(e) {
  return u.jsx(
    B.Fragment,
    { children: u.jsxs("div", { className: X.category_header, children: [e.typeHouse, " ", u.jsx("div", { className: X.line })] }) },
    e.code
  );
}
const Ex = "_information_1q3sa_1",
  Cx = "_information_wrapper_1q3sa_13",
  Nx = "_text_and_swiper_wrapper_1q3sa_31",
  Tx = "_img_1q3sa_53",
  Px = "_information_text_1q3sa_61",
  bx = "_text_1q3sa_31",
  Mx = "_button_1q3sa_97",
  Ix = "_swiper_1q3sa_131",
  Lx = "_information_mission_1q3sa_141",
  $x = "_table_1q3sa_181",
  Ox = "_table_img_1q3sa_195",
  zx = "_br_1q3sa_205",
  rt = {
    information: Ex,
    information_wrapper: Cx,
    text_and_swiper_wrapper: Nx,
    img: Tx,
    information_text: Px,
    text: bx,
    button: Mx,
    swiper: Ix,
    information_mission: Lx,
    table: $x,
    table_img: Ox,
    br: zx,
  },
  Rx = [
    "built6.jpg",
    "built7.jpg",
    "built8.jpg",
    "built9.jpg",
    "built10.jpg",
    "built11.jpg",
    "built12.jpg",
    "built13.jpg",
    "built14.jpg",
    "built15.jpg",
    "built17.jpg",
    "built18.jpg",
    "built19.jpg",
    "built20.jpg",
    "built21.jpg",
    "built22.jpg",
    "built23.jpg",
    "built24.jpg",
    "built25.jpg",
    "built26.jpg",
    "built27.jpg",
    "built28.jpg",
    "built29.jpg",
    "built30.jpg",
    "built31.jpg",
    "built32.jpg",
    "built33.jpg",
    "built34.jpg",
    "built35.jpg",
    "built36.jpg",
    "built37.jpg",
    "built38.jpg",
    "built39.jpg",
    "built40.jpg",
    "built41.jpg",
    "built42.jpg",
    "built43.jpg",
    "built44.jpg",
    "built45.jpg",
    "built46.jpg",
    "built47.jpg",
    "built48.jpg",
    "built49.jpg",
    "built50.jpg",
    "built51.jpg",
    "built52.jpg",
    "built53.jpg",
    "built54.jpg",
    "built55.jpg",
    "built56.jpg",
    "built57.jpg",
    "built58.jpg",
    "built59.jpg",
    "built60.jpg",
    "built61.jpg",
    "built62.jpg",
    "built63.jpg",
    "built64.jpg",
    "built65.jpg",
    "built66.jpg",
    "built67.jpg",
    "built68.jpg",
    "built69.jpg",
    "built70.jpg",
    "built71.jpg",
    "built72.jpg",
    "built73.jpg",
    "built74.jpg",
    "built75.jpg",
  ];
function Dx() {
  return u.jsx("section", {
    className: rt.information,
    children: u.jsxs("div", {
      className: rt.information_wrapper,
      children: [
        u.jsxs("div", {
          className: rt.text_and_swiper_wrapper,
          children: [
            u.jsxs("div", {
              className: rt.information_text,
              children: [
                u.jsx(Fa, { texts: ["Дома, которые мы построили для наших клиентов"] }),
                u.jsx(or, { text: "Выбрать дом", link: "/catalog", zoom: 1 }),
              ],
            }),
            u.jsxs(On, {
              className: rt.swiper,
              spaceBetween: 10,
              slidesPerView: 1,
              modules: [Ra, Aa, Da],
              pagination: { clickable: !0, type: "bullets" },
              autoplay: { delay: 5e3 },
              parallax: !0,
              loop: !0,
              children: [
                u.jsx(pe, {
                  children: u.jsx("img", {
                    className: rt.img,
                    style: { width: "100%", height: "100%" },
                    src: "./img/built1_new.jpg",
                    alt: "",
                  }),
                }),
                u.jsx(pe, {
                  children: u.jsx("img", {
                    className: rt.img,
                    style: { width: "100%", height: "100%" },
                    src: "./img/built2_new.jpg",
                    alt: "",
                  }),
                }),
                u.jsx(pe, {
                  children: u.jsx("img", {
                    className: rt.img,
                    style: { width: "100%", height: "100%" },
                    src: "./img/built3_new.jpg",
                    alt: "",
                  }),
                }),
                u.jsx(pe, {
                  children: u.jsx("img", {
                    className: rt.img,
                    style: { width: "100%", height: "100%" },
                    src: "./img/built4_new.jpg",
                    alt: "",
                  }),
                }),
                u.jsx(pe, {
                  children: u.jsx("img", { className: rt.img, style: { width: "100%", height: "100%" }, src: "./img/built5.jpg", alt: "" }),
                }),
              ],
            }),
          ],
        }),
        u.jsx("div", {
          className: rt.table,
          children: Rx.map((e) => u.jsx("div", { children: u.jsx("img", { className: rt.table_img, src: "./img/" + e, alt: "img" }) })),
        }),
      ],
    }),
  });
}
const Ax = "_modal_us1gq_1",
  Bx = "_wrapper_us1gq_27",
  Fx = "_required_us1gq_137",
  Vx = "_error_us1gq_145",
  Hx = "_error_text_us1gq_153",
  Wx = "_position_error_first_input_us1gq_199",
  Ux = "_position_error_second_input_us1gq_209",
  Gx = "_loader_us1gq_261",
  qx = "_load3_us1gq_1",
  Kx = "_orders_us1gq_355",
  Qx = "_button_close_us1gq_363",
  Yx = "_feedback_modal_us1gq_425",
  Xx = "_feedback_modal_wrapper_us1gq_453",
  Zx = "_feedback_modal_btn_close_us1gq_483",
  Jx = "_complete_us1gq_501",
  ew = "_failure_us1gq_539",
  tw = "_feedback_modal_text_us1gq_577",
  nw = "_orders_wrapper_us1gq_795",
  rw = "_orders_item_us1gq_807",
  iw = "_visible_us1gq_965",
  sw = "_invisible_us1gq_975",
  lw = "_none_us1gq_985",
  ow = "_block_us1gq_993",
  G = {
    modal: Ax,
    wrapper: Bx,
    required: Fx,
    error: Vx,
    error_text: Hx,
    position_error_first_input: Wx,
    position_error_second_input: Ux,
    loader: Gx,
    load3: qx,
    orders: Kx,
    button_close: Qx,
    feedback_modal: Yx,
    feedback_modal_wrapper: Xx,
    feedback_modal_btn_close: Zx,
    complete: Jx,
    failure: ew,
    feedback_modal_text: tw,
    orders_wrapper: nw,
    orders_item: rw,
    visible: iw,
    invisible: sw,
    none: lw,
    block: ow,
  };
function aw(e, t) {
  const n = [],
    r = (Number(e) + t).toString();
  return (
    r.split("").forEach((i, s) => {
      (r.length - s == 7 || r.length - s == 4) && (i = i + " "), n.push(i);
    }),
    n.join("")
  );
}
const Pc = { loading: "Загрузка...", success: "Спасибо! Скоро мы с вами свяжемся", failure: "Что-то пошло не так..." };
async function uw(e, t, n, r) {
  e.preventDefault();
  const i = e.nativeEvent.target,
    s = await cw(i, t, n, r);
  r(Pc.loading), s === 0 ? (r(""), r(Pc.success), i.reset()) : (r(""), i.reset());
}
async function cw(e, t, n, r) {
  let i = 0;
  const s = [e.childNodes[1].childNodes[2], e.childNodes[2].childNodes[2]];
  bc(e.childNodes[1].childNodes[2], t, n), bc(e.childNodes[2].childNodes[2], t, n);
  let l = { inputName: "", inputPhone: "" };
  for (let a = 0; a < s.length; a++) {
    const o = s[a];
    o.name === "user_name" &&
      (o.value.length > 25 && ((l = { ...l, inputName: "Слишком длинное значение" }), i++),
      o.value.trim() === "" && ((l = { ...l, inputName: "Обязательное поле" }), i++)),
      o.name === "user_phone" &&
        (o.value === "" && ((l = { ...l, inputPhone: "Обязательное поле" }), i++),
        o.value.length < 15 && o.value.length > 0 && ((l = { ...l, inputPhone: "Слишком короткое значение" }), i++));
  }
  return r(""), t(l), i;
}
function bc(e, t, n) {
  e.name === "user_phone" ? t({ ...n, inputPhone: "" }) : e.name === "user_name" && t({ ...n, inputName: "" });
}
const dw = Gs("+7 999 999 99 99");
function fw({ stateModalForm: e, setStateModalForm: t, listActiveAdditionalServices: n, coustHouse: r, priceAdditionalServices: i }) {
  const [s, l] = E.useState(""),
    [a, o] = E.useState(""),
    [c, f] = E.useState({ inputName: "", inputPhone: "" });
  return u.jsxs("div", {
    className: `${G.modal} ${e ? G.visible : G.invisible}`,
    children: [
      u.jsxs("div", {
        className: G.wrapper,
        children: [
          u.jsxs("form", {
            method: "post",
            onSubmit: (p) => uw(p, f, c, l),
            children: [
              u.jsx("label", { children: u.jsx("div", { children: "Получить предложение" }) }),
              u.jsxs("label", {
                children: [
                  u.jsx("p", { children: "Введите имя" }),
                  " ",
                  u.jsx("input", {
                    type: "text",
                    name: "user_name",
                    className: `${G.required} ${c.inputName != "" ? G.error : ""}`,
                    onChange: () => {
                      f({ inputName: "", inputPhone: "" }), l("");
                    },
                  }),
                ],
              }),
              u.jsxs("label", {
                children: [
                  u.jsx("p", { children: "Введите номер WhatsApp" }),
                  " ",
                  u.jsx(qs, {
                    maskGenerator: dw,
                    className: `${G.required} ${c.inputPhone != "" ? G.error : ""}`,
                    style: { paddingLeft: "70px" },
                    name: "user_phone",
                    type: "tel",
                    placeholder: "+7 999 999 99 99",
                    value: a,
                    onChange: () => {
                      f({ inputName: "", inputPhone: "" }), l("");
                    },
                    "data-phonemask": "+7",
                  }),
                ],
              }),
              u.jsxs("button", {
                type: "submit",
                children: [
                  u.jsx("div", { className: s === "Загрузка..." ? `${G.loader} ${G.block}` : ` ${G.loader} ${G.none}` }),
                  u.jsx("div", { className: s === "Загрузка..." ? G.none : G.block, children: "Потдвердить" }),
                ],
              }),
              u.jsx("div", {
                className: `${G.error_text} ${G.position_error_first_input} ${
                  c.inputName == "Обязательное поле" || c.inputName == "Слишком длинное значение" ? G.visible : G.invisible
                }`,
                children: c.inputName,
              }),
              u.jsx("div", {
                className: `${G.error_text} ${G.position_error_second_input} ${
                  c.inputPhone == "Такого номера в Whatsapp нету" ||
                  c.inputPhone == "Слишком короткое значение" ||
                  c.inputPhone == "Обязательное поле"
                    ? G.visible
                    : G.invisible
                }`,
                children: c.inputPhone,
              }),
            ],
          }),
          u.jsxs("div", {
            className: G.orders,
            children: [
              u.jsx("p", { children: "Вы выбрали:" }),
              u.jsx("div", {
                className: G.orders_wrapper,
                children: n.map((p, h) =>
                  u.jsx(
                    B.Fragment,
                    { children: u.jsxs("div", { className: G.orders_item, children: [h + 1, ". ", p.name, " - ", p.count] }) },
                    h
                  )
                ),
              }),
              u.jsx("p", { children: `Итого: ${aw(r, i)} руб.` }),
            ],
          }),
          u.jsx("button", { className: G.button_close, onClick: () => t(!1) }),
        ],
      }),
      u.jsx("div", {
        className: ` ${G.modal}
          ${s === "Спасибо! Скоро мы с вами свяжемся" || s === "Что-то пошло не так..." ? "" : G.none}
        `,
        children: u.jsxs("div", {
          className: G.modal_wrapper,
          children: [
            u.jsx("img", { src: "./icons/crestikBlack.svg", alt: "", className: G.modal_btn_close, onClick: () => l("") }),
            u.jsx("div", { className: s === "Спасибо! Скоро мы с вами свяжемся" ? G.complete : G.failure }),
            u.jsx("div", { className: G.modal_text, children: s }),
          ],
        }),
      }),
    ],
  });
}
const pw = "_invisible_95pu5_1",
  mw = "_modal_95pu5_11",
  hw = "_modal_wrapper_95pu5_31",
  gw = "_button_close_95pu5_45",
  vw = "_img_95pu5_107",
  _w = "_slider_95pu5_119",
  yw = "_button_right_95pu5_127",
  xw = "_button_left_95pu5_167",
  ww = "_modal_big_95pu5_245",
  Sw = "_none_95pu5_317",
  jw = "_block_95pu5_325",
  ht = {
    invisible: pw,
    modal: mw,
    modal_wrapper: hw,
    button_close: gw,
    img: vw,
    slider: _w,
    button_right: yw,
    button_left: xw,
    modal_big: ww,
    none: Sw,
    block: jw,
  };
function kw({ stateModalImg: e, house: t, setStateModalImg: n, activeImgIndex: r, setActiveImgIndex: i }) {
  let s = ht.invisible;
  return (
    e && (s = ""),
    u.jsx("div", {
      className: `${ht.modal} ${s}`,
      children: u.jsxs("div", {
        className: ht.modal_wrapper,
        children: [
          u.jsx("button", { className: ht.button_close, onClick: () => n(!1), children: " " }),
          t.imgs
            ? t.imgs.map((l, a) => {
                a += 123234432;
                let o = ht.none;
                return (
                  t.imgs && t.imgs[r] == l && (o = ht.block),
                  u.jsx("img", { className: `${ht.img} ${ht.slider} ${ht.modal_big} ${o}`, src: l, alt: "" }, a)
                );
              })
            : !1,
          u.jsx("button", {
            className: ht.button_right,
            onClick: () => {
              const l = r + 1;
              t.imgs && l >= t.imgs.length ? i(0) : i(l);
            },
            children: u.jsx("img", { src: "../icons/NextArrow.png", alt: "next" }),
          }),
          u.jsx("button", {
            className: ht.button_left,
            onClick: () => {
              const l = r - 1;
              t.imgs && l < 0 ? i(t.imgs.length - 1) : i(l);
            },
            children: u.jsx("img", { src: "../icons/PrevArrow.png", alt: "prev" }),
          }),
        ],
      }),
    })
  );
}
const Ew = "_header_19fxx_1",
  Cw = "_information_19fxx_15",
  Nw = "_information_header_19fxx_25",
  Tw = "_information_carousel_19fxx_39",
  Pw = "_information_carousel_item_19fxx_51",
  bw = "_information_carousel_right_19fxx_63",
  Mw = "_information_carousel_left_19fxx_103",
  Iw = "_information_carousel_wrapper_field_19fxx_143",
  Lw = "_information_carousel_field_19fxx_159",
  $w = "_information_carousel_field_img_19fxx_173",
  Ow = "_basicConf_items_19fxx_195",
  zw = "_line_19fxx_209",
  Rw = "_basicConf_19fxx_195",
  Dw = "_basicConf_item_19fxx_195",
  Aw = "_basicConf_item_name_19fxx_243",
  Bw = "_basicConf_item_key_19fxx_257",
  Fw = "_coust_19fxx_271",
  Vw = "_information_texts_19fxx_311",
  Hw = "_information_text_19fxx_311",
  Ww = "_buttons_wrapper_19fxx_333",
  Uw = "_button_19fxx_333",
  Gw = "_order_19fxx_387",
  qw = "_information_wrapper_19fxx_431",
  Kw = "_active_19fxx_705",
  Qw = "_blue_19fxx_717",
  Yw = "_orange_19fxx_729",
  Xw = "_none_19fxx_741",
  ee = {
    header: Ew,
    information: Cw,
    information_header: Nw,
    information_carousel: Tw,
    information_carousel_item: Pw,
    information_carousel_right: bw,
    information_carousel_left: Mw,
    information_carousel_wrapper_field: Iw,
    information_carousel_field: Lw,
    information_carousel_field_img: $w,
    basicConf_items: Ow,
    line: zw,
    basicConf: Rw,
    basicConf_item: Dw,
    basicConf_item_name: Aw,
    basicConf_item_key: Bw,
    coust: Fw,
    information_texts: Vw,
    information_text: Hw,
    buttons_wrapper: Ww,
    button: Uw,
    order: Gw,
    information_wrapper: qw,
    active: Kw,
    blue: Qw,
    orange: Yw,
    none: Xw,
  },
  Zw = "_header_oxd0c_1",
  Jw = "_btn_inactive_oxd0c_17",
  eS = "_btn_active_oxd0c_45",
  tS = "_service_oxd0c_73",
  nS = "_button_oxd0c_83",
  rS = "_text_oxd0c_111",
  iS = "_input_oxd0c_129",
  le = { header: Zw, btn_inactive: Jw, btn_active: eS, service: tS, button: nS, text: rS, input: iS };
function sS(e, t, n) {
  const r = [];
  return (
    t["mutually exclusive"][e].forEach((i) => {
      const s = n.find((l) => l.code == i);
      s !== void 0 && r.push(s);
    }),
    r
  );
}
function lS(e, t, n) {
  const r = [];
  return (
    t["cant choose without"][e].forEach((i) => {
      n.Разделы.forEach((s) => {
        s.Подразделы.forEach((l) => {
          i == l.Код && r.push({ name: l.Подраздел, code: l.Код, count: 1, coust: l.Стоимость });
        });
      });
    }),
    r
  );
}
function oS(e, t, n) {
  const r = [];
  return (
    t["cant be removed without"][e].forEach((i) => {
      const s = n.find((l) => l.code == i);
      s !== void 0 && r.push(s);
    }),
    r
  );
}
function Ka(e, t, n, r, i, s, l, a, o, c = -1, f = 1) {
  const p = [],
    h = [];
  r["mutually exclusive"][e] && p.push(...sS(e, r, i));
  let v = i.filter((d) => !p.includes(d));
  r["cant choose without"][e] &&
    ([...lS(e, r, l)].forEach((d) => {
      i.findIndex((m) => m.code == d.code) == -1 && h.push(d);
    }),
    v.push(...h)),
    c != -1 && (v = v.filter((d) => d.code != e)),
    e === "000000126" ? (v = v.filter((d) => d.code != "000000127")) : e === "000000127" && (v = v.filter((d) => d.code != "000000126"));
  const _ = { name: t, code: e, count: f, coust: n };
  v.push(_);
  const x = v.filter(
      (d) =>
        d.code == "000000144" ||
        d.code == "000000105" ||
        d.code == "000000101" ||
        d.code == "000000102" ||
        d.code == "000000132" ||
        d.code == "000000150" ||
        d.code == "000000147"
    ),
    g = v
      .filter(
        (d) =>
          d.code !== "000000144" &&
          d.code !== "000000105" &&
          d.code !== "000000101" &&
          d.code !== "000000102" &&
          d.code !== "000000132" &&
          d.code !== "000000150" &&
          d.code !== "000000147"
      )
      .reduce((d, m) => d + m.coust * m.count, 0);
  o(x), a(g), s([...v]);
}
function Ts(e, t, n, r, i, s, l) {
  let a = t.filter((v) => v.code != e);
  const o = t.findIndex((v) => v.code == "000000144");
  if (
    (typeof n["mutually exclusive"][e] < "u" &&
      o === -1 &&
      n["mutually exclusive"][e].findIndex((v) => v === "000000144") !== -1 &&
      a.push({ code: r.code, name: r.name, count: r.count, coust: r.coust }),
    n["cant be removed without"][e])
  ) {
    const v = [...oS(e, n, t)];
    a = t.filter((_) => !v.includes(_));
  }
  if (e === "000000144") return;
  const c = a.filter((v) => v.code !== e),
    f = c.filter(
      (v) =>
        v.code == "000000144" ||
        v.code == "000000105" ||
        v.code == "000000101" ||
        v.code == "000000102" ||
        v.code == "000000132" ||
        v.code == "000000150" ||
        v.code == "000000147"
    ),
    h = c
      .filter(
        (v) =>
          v.code !== "000000144" &&
          v.code !== "000000105" &&
          v.code !== "000000101" &&
          v.code !== "000000102" &&
          v.code !== "000000132" &&
          v.code !== "000000150" &&
          v.code !== "000000147"
      )
      .reduce((v, _) => v + _.coust * _.count, 0);
  l(f), s(h), i(c.filter((v) => v.count != 0));
}
const aS = (e, t, n, r, i, s, l, a, o, c, f) => {
    e.target instanceof HTMLButtonElement &&
      (e.target.classList[0] === le.btn_inactive
        ? Ka(t, n, r, s, i, a, c, o, f)
        : e.target.classList[0] === le.btn_active && Ts(t, i, s, l, a, o, f));
  },
  uS = (e, t, n, r, i, s, l, a, o, c, f) => {
    if (e.target instanceof HTMLDivElement) {
      const p = e.target.children[0];
      p instanceof HTMLButtonElement &&
        (p.classList[0] === le.btn_inactive ? Ka(t, n, r, s, i, a, c, o, f) : p.classList[0] === le.btn_active && Ts(t, i, s, l, a, o, f));
    }
  };
function Mc(e, t, n, r, i, s, l, a, o, c, f, p) {
  var h;
  if (e.target instanceof HTMLInputElement) {
    const v = (h = e.target.parentElement) == null ? void 0 : h.previousSibling;
    let _ = 0;
    if (isNaN(e.target.valueAsNumber)) (_ = 0), (e.target.valueAsNumber = 0), n({ Скважина: 0, Колодец: 0 }), Ts(r, s, l, a, o, c, p);
    else if (e.target.valueAsNumber > 0) {
      _ = 0;
      let x = 0;
      v.getAttribute("id") === "000000126"
        ? ((x = s.findIndex((j) => j.code === "000000126")),
          e.target.valueAsNumber >= 100 && (e.target.valueAsNumber = 100),
          (_ = t.Скважина),
          n({ Колодец: 0, Скважина: e.target.valueAsNumber }))
        : v.getAttribute("id") === "000000127" &&
          ((x = s.findIndex((j) => j.code === "000000127")),
          e.target.valueAsNumber >= 10 && (e.target.valueAsNumber = 10),
          (_ = t.Колодец),
          n({ Скважина: 0, Колодец: e.target.valueAsNumber })),
        Ka(r, i, _, l, s, o, f, c, p, x, e.target.valueAsNumber);
    } else e.target.valueAsNumber == 0 && (n({ Скважина: 0, Колодец: 0 }), Ts(r, s, l, a, o, c, p));
  }
}
function cS(e, t, n, r, i, s, l, a, o, c) {
  return u.jsx("div", {
    className: le.services,
    children: e.Разделы.map((f, p) => {
      if (
        f.Раздел != "Общестрой" &&
        f.Раздел != "Несортированно (технический раздел)" &&
        f.Раздел !== "Веранда" &&
        f.Раздел !== "Фундамент"
      )
        return (
          (p = 19192 + p),
          u.jsxs(
            B.Fragment,
            {
              children: [
                u.jsx("div", { className: le.header, children: f.Раздел }),
                f.Подразделы.map((h, v) => {
                  let _ = le.btn_inactive;
                  return (
                    (v = 95959 + v),
                    i.forEach((x) => {
                      h.Код == x.code && (_ = le.btn_active);
                    }),
                    h.Подраздел === "Колодец (кольцо)"
                      ? u.jsx(
                          B.Fragment,
                          {
                            children: u.jsxs("div", {
                              className: le.service,
                              children: [
                                u.jsx("div", {
                                  className: le.button,
                                  id: h.Код,
                                  children: u.jsx("button", { className: n.Колодец ? le.btn_active : le.btn_inactive }),
                                }),
                                u.jsxs("div", {
                                  className: le.text,
                                  children: [
                                    "Устройство колодца ",
                                    u.jsx("b", { children: "(колец)" }),
                                    u.jsx("input", {
                                      className: le.input,
                                      type: "number",
                                      min: "0",
                                      max: "10",
                                      value: n.Колодец,
                                      onInput: (x) => Mc(x, t, r, h.Код, h.Подраздел, i, l, o, s, a, e, c),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          v
                        )
                      : h.Подраздел === "Скважина (метр)"
                      ? u.jsx(
                          B.Fragment,
                          {
                            children: u.jsxs("div", {
                              className: le.service,
                              children: [
                                u.jsx("div", {
                                  className: le.button,
                                  id: h.Код,
                                  children: u.jsx("button", { className: n.Скважина ? le.btn_active : le.btn_inactive }),
                                }),
                                u.jsxs("div", {
                                  className: le.text,
                                  children: [
                                    "Скважина Пластик ",
                                    u.jsx("b", { children: "(метров)" }),
                                    u.jsx("input", {
                                      className: le.input,
                                      type: "number",
                                      min: "0",
                                      max: "100",
                                      value: n.Скважина,
                                      onInput: (x) => Mc(x, t, r, h.Код, h.Подраздел, i, l, o, s, a, e, c),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          v
                        )
                      : h.Код === "000000132"
                      ? void 0
                      : u.jsx(
                          B.Fragment,
                          {
                            children: u.jsxs("div", {
                              className: le.service,
                              children: [
                                u.jsx("div", {
                                  className: le.button,
                                  id: h.Код,
                                  onClick: (x) => uS(x, h.Код, h.Подраздел, h.Стоимость, i, l, o, s, a, e, c),
                                  children: u.jsx("button", {
                                    className: _,
                                    value: h.Стоимость,
                                    onClick: (x) => aS(x, h.Код, h.Подраздел, h.Стоимость, i, l, o, s, a, e, c),
                                  }),
                                }),
                                u.jsxs("div", { className: le.text, children: [h.Подраздел, " + ", h.Стоимость.toString(), " руб."] }),
                              ],
                            }),
                          },
                          v
                        )
                  );
                }),
              ],
            },
            p
          )
        );
    }),
  });
}
function dS() {
  const e = yr(),
    [t, n] = E.useState(),
    [r, i] = E.useState(),
    [s, l] = E.useState("0"),
    [a, o] = E.useState([]),
    [c, f] = E.useState(0),
    [p, h] = E.useState([]),
    [v, _] = E.useState(0),
    [x, j] = E.useState(!1),
    [g, d] = E.useState(!1),
    [m, y] = E.useState({ name: "", code: "", count: 0, coust: 0 }),
    [w, C] = E.useState({ Колодец: 0, Скважина: 0 }),
    [P, T] = E.useState({ Колодец: 0, Скважина: 0 }),
    b = () => {
      const O = e.pathname.split("/")[2],
        A = Ns.filter((V) => V.link === O)[0];
      return i(A), A;
    },
    k = "./../1c_site.json",
    I = async (O) => {
      const A = b();
      (await (await fetch(O, { method: "GET" })).json()).Дома.forEach((S) => {
        if (S.ДомКод == (A == null ? void 0 : A.code)) {
          n(S);
          const N = [];
          S.Разделы.forEach((M) => {
            if (M.Код === "000000008") {
              let R = 0,
                H = 0;
              M.Подразделы.forEach((ge) => {
                ge.Код === "000000126" && (H = ge.Стоимость), ge.Код === "000000127" && (R = ge.Стоимость);
              }),
                C({ Колодец: R, Скважина: H });
            }
            M.Код === "000000002" &&
              M.Подразделы.forEach((R) => {
                R.Код === "000000144" &&
                  (N.push({ name: R.Подраздел, code: R.Код, count: 1, coust: R.Стоимость }),
                  y({ name: R.Подраздел, code: R.Код, count: 1, coust: R.Стоимость }));
              }),
              M.Код === "000000003" &&
                M.Подразделы.forEach((R) => {
                  R.Код === "000000132" && N.push({ name: R.Подраздел, code: R.Код, count: 1, coust: R.Стоимость });
                }),
              M.Раздел === "Фундамент" &&
                M.Подразделы.forEach((R) => {
                  R.Код === "000000147" && N.push({ name: R.Подраздел, code: R.Код, count: 1, coust: R.Стоимость });
                }),
              M.Раздел === "Веранда" &&
                M.Подразделы.forEach((R) => {
                  R.Код === "000000150" && N.push({ name: R.Подраздел, code: R.Код, count: 1, coust: R.Стоимость });
                }),
              M.Раздел === "Общестрой" && l(M.Подразделы[0].Стоимость.toString());
          }),
            A.coust &&
              (f(
                N.filter(
                  (M) =>
                    M.code !== "000000144" &&
                    M.code !== "000000105" &&
                    M.code !== "000000101" &&
                    M.code !== "000000102" &&
                    M.code !== "000000132" &&
                    M.code !== "000000150" &&
                    M.code !== "000000147"
                ).reduce((M, R) => M + R.coust, 0)
              ),
              o([
                ...a,
                ...N.filter(
                  (M) =>
                    M.code == "000000144" ||
                    M.code == "000000105" ||
                    M.code == "000000101" ||
                    M.code == "000000102" ||
                    M.code == "000000132" ||
                    M.code == "000000150" ||
                    M.code == "000000147"
                ),
              ])),
            h([...N]);
        }
      });
    },
    z = () => {
      const O = window.scrollY;
      window.scrollBy(0, -O);
    };
  E.useEffect(() => {
    I(k), z();
  }, []),
    E.useEffect(() => {
      document.title = r == null ? void 0 : r.houseName;
    });
  function L() {
    if (!(!t && s))
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx("div", { className: ee.header, children: "Дополнительные услуги" }),
          t && s ? cS(t, w, P, T, p, h, tx, f, m, o) : u.jsx("div", { children: "Пока не добавили" }),
        ],
      });
  }
  return u.jsxs(B.Fragment, {
    children: [
      u.jsx("div", {
        className: ee.information,
        children: u.jsxs("div", {
          className: "container",
          children: [
            u.jsx("div", { className: ee.information_header, children: r ? r.houseName : "Загружается!" }),
            u.jsxs("div", {
              className: ee.information_wrapper,
              children: [
                u.jsxs("div", {
                  className: ee.information_carousel,
                  children: [
                    u.jsx("img", {
                      src: r != null && r.imgs ? r.imgs[v] : "",
                      className: ee.information_carousel_item,
                      "data-modal": "imgs",
                      onClick: () => j(!0),
                    }),
                    u.jsx("button", {
                      className: ee.information_carousel_right,
                      onClick: () => (r ? Lc(v, _, r, "plus") : !1),
                      children: u.jsx("img", { src: "../icons/NextArrow.png", alt: "next" }),
                    }),
                    u.jsx("button", {
                      className: ee.information_carousel_left,
                      onClick: () => (r ? Lc(v, _, r, "minus") : !1),
                      children: u.jsx("img", { src: "../icons/PrevArrow.png", alt: "prev" }),
                    }),
                    r ? mS(r, v, j, _) : u.jsx("div", { children: "Загружается" }),
                  ],
                }),
                s && r ? pS(r) : u.jsx("div", { children: "Загружается" }),
              ],
            }),
          ],
        }),
      }),
      u.jsx("div", {
        className: ee.basicConf,
        children: u.jsxs("div", {
          className: "container",
          children: [u.jsx("div", { className: ee.header, children: "Базовая комплектация проекта" }), r ? hS(r) : !1, L()],
        }),
      }),
      u.jsxs("div", {
        className: ee.coust,
        children: ["Стоимость дома", u.jsx("span", { children: s == "Скоро будет доступна" ? ": Скоро будет" : `: ${Ic(fS(s, a))} руб.` })],
      }),
      u.jsxs("div", {
        className: ee.order,
        children: [
          "Дополнительные услуги",
          u.jsx("span", { children: s == "Скоро будет доступна" ? ": Скоро будет" : `: ${Ic(c.toString())} руб.` }),
        ],
      }),
      u.jsx("button", {
        className: ee.order,
        style: { display: "none" },
        onClick: () => d(!0),
        children: "Получить коммерческое предложение",
      }),
      u.jsx("div", { id: "id", className: ee.none, children: r == null ? void 0 : r.code }),
      r && s
        ? u.jsx(fw, { stateModalForm: g, setStateModalForm: d, listActiveAdditionalServices: p, coustHouse: s, priceAdditionalServices: c })
        : !1,
      r ? u.jsx(kw, { stateModalImg: x, house: r, setStateModalImg: j, activeImgIndex: v, setActiveImgIndex: _ }) : !1,
    ],
  });
}
function Ic(e) {
  const t = [];
  return (
    e.split("").forEach((n, r) => {
      (e.length - r == 7 || e.length - r == 4) && (n = n + " "), t.push(n);
    }),
    t.join("")
  );
}
function fS(e, t) {
  return (t.reduce((i, s) => i + s.coust * s.count, 0) + Number(e)).toString();
}
function pS(e) {
  return u.jsx("div", {
    className: ee.information_texts,
    children: e.information
      ? e.information.map(
          (t, n) => (
            (n = 10140 + n),
            t.split(":")[0] === "Размер" &&
              (e.type != "bathhouse"
                ? (t = t.split(":")[0] + " дома: " + t.split(":")[1].split(" ")[1])
                : (t = t.split(":")[0] + " бани: " + t.split(":")[1].split(" ")[1])),
            t.split(":")[0] === "Площадь" &&
              (e.type != "bathhouse"
                ? (t = t.split(":")[0] + " дома: " + t.split(":")[1])
                : (t = t.split(":")[0] + " бани: " + t.split(":")[1])),
            u.jsx("div", { className: ee.information_text, children: t }, n)
          )
        )
      : !1,
  });
}
function mS(e, t, n, r) {
  let i = 0;
  return (
    e.imgs && t > 1 && t < e.imgs.length - 1 ? (i = -180 * (t - 1)) : e.imgs && t == e.imgs.length - 1 && (i = -180 * (t - 2)),
    window.innerWidth < 960 && (i = i / 2),
    u.jsx("div", {
      className: ee.information_carousel_wrapper_field,
      children: u.jsx("div", {
        className: ee.information_carousel_field,
        style: { transform: `translateX(${i}px)` },
        children: e.imgs
          ? e.imgs.map((s, l) => {
              let a = "";
              return (
                l == t && (a = ee.active),
                (l = 10201 + l),
                u.jsx(
                  "img",
                  {
                    className: `${ee.information_carousel_field_img}  ${a}`,
                    src: s,
                    alt: "",
                    onClick: () => {
                      r(l - 10201), n(!0);
                    },
                  },
                  l
                )
              );
            })
          : !1,
      }),
    })
  );
}
function hS(e) {
  let t = [];
  switch (e.type) {
    case "two-storey house":
      e.typeHouse === "Клевер" || e.typeHouse === "Шварц" || e.typeHouse === "Эркерия" || e.typeHouse === "Классик" ? (t = Jy) : (t = Yy);
      break;
    case "cottage":
      switch (e.typeHouse) {
        case "Архитект":
          t = ex;
          break;
        default:
          t = Xy;
          break;
      }
      break;
    case "bathhouse":
      t = Zy;
      break;
  }
  return u.jsxs("div", {
    className: ee.basicConf_items,
    children: [
      t.map((n, r) => {
        r = 200212 + r;
        const i = n.split(" ? ");
        return u.jsxs(
          B.Fragment,
          {
            children: [
              u.jsx("div", { className: ee.line }),
              u.jsxs("div", {
                className: ee.basicConf_item,
                children: [
                  u.jsx("div", { className: ee.basicConf_item_name, children: i[0] }),
                  u.jsx("div", { className: ee.basicConf_item_key, children: i[1] }),
                ],
              }),
            ],
          },
          r
        );
      }),
      u.jsx("div", { className: ee.line }),
    ],
  });
}
function Lc(e, t, n, r) {
  let i = 0;
  r == "plus" ? (i = e + 1) : (i = e - 1), n.imgs && i >= n.imgs.length ? (i = 0) : n.imgs && i < 0 && (i = n.imgs.length - 1), t(i);
}
const gS = "_text_d46u3_1",
  vS = { text: gS };
function _S() {
  return u.jsx(u.Fragment, { children: u.jsx("div", { className: vS.text, children: "Ведутся технические работы" }) });
}
const yS = "_footer_1q7zf_1",
  xS = "_wrapper_mob_1q7zf_9",
  wS = "_wrapper_desc_1q7zf_27",
  SS = "_item_1q7zf_35",
  jS = "_line_1q7zf_45",
  kS = "_title_1q7zf_59",
  ES = "_link_1q7zf_69",
  CS = "_text_1q7zf_81",
  NS = "_subtext_1q7zf_91",
  TS = "_right_side_1q7zf_143",
  PS = "_item_tel_1q7zf_157",
  F = {
    footer: yS,
    wrapper_mob: xS,
    wrapper_desc: wS,
    item: SS,
    line: jS,
    title: kS,
    link: ES,
    text: CS,
    subtext: NS,
    right_side: TS,
    item_tel: PS,
  };
function bS() {
  return u.jsxs("footer", {
    id: "contacts",
    className: F.footer,
    children: [
      u.jsxs("div", {
        className: F.wrapper_mob,
        children: [
          u.jsxs("div", {
            className: F.item,
            children: [
              u.jsx("h3", { className: F.title, children: "Разделы" }),
              u.jsx(Ie, { className: F.link, to: "/catalog", children: "Каталог" }),
              u.jsx(Ie, { className: F.link, to: "built_houses", children: "Построенные дома" }),
              u.jsx(Ie, { className: F.link, to: "/stub", children: "Новости" }),
              u.jsx(Ie, { className: F.link, to: "/stub", children: "Технология" }),
            ],
          }),
          u.jsx("div", { className: F.line }),
          u.jsxs("div", {
            className: F.item,
            children: [
              u.jsx("h3", { className: F.title, children: "Соц. сети" }),
              u.jsxs("a", { className: F.link, href: "https://t.me/stroitdoma", children: ["Telegram", " "] }),
              " ",
              u.jsx("br", {}),
              u.jsxs("a", { className: F.link, href: "https://www.instagram.com/stroitdoma_pro", children: ["Instagram", " "] }),
              " ",
              u.jsx("br", {}),
              u.jsxs("a", { className: F.link, href: "https://www.youtube.com/@stroitdoma_pro", children: ["YouTube", " "] }),
              " ",
              u.jsx("br", {}),
              u.jsxs("a", { className: F.link, href: "https://vk.com/stroitdoma_pro", children: ["ВКонтакте", " "] }),
              " ",
              u.jsx("br", {}),
            ],
          }),
          u.jsx("div", { className: F.line }),
          u.jsxs("div", {
            className: F.item_tel,
            children: [
              u.jsxs("p", {
                className: F.text,
                children: [
                  "Телефон: ",
                  u.jsx("br", {}),
                  " ",
                  u.jsx("br", {}),
                  u.jsx("a", { className: F.link, href: "tel:+74953747477", children: "+7(495)374-74-77" }),
                  " ",
                  u.jsx("br", {}),
                  u.jsx("br", {}),
                  " ",
                  u.jsx("a", { className: F.link, href: "tel:+79197843396", children: "+7(919)784-33-96" }),
                  " ",
                  u.jsx("br", {}),
                  " ",
                  u.jsx("br", {}),
                  "Мессенджеры: ",
                  u.jsx("br", {}),
                  u.jsx("br", {}),
                  " ",
                  u.jsx("a", { className: F.link, href: "https://wa.me/79197843396", children: "Whatsapp" }),
                  " ",
                  u.jsx("br", {}),
                  " ",
                  u.jsx("a", { className: F.link, href: "https://t.me/+79197843396", children: "Telegram" }),
                  " ",
                  u.jsx("br", {}),
                  " ",
                  u.jsx("br", {}),
                  " Адрес офиса: ",
                  u.jsx("br", {}),
                  " ",
                  u.jsx("br", {}),
                  " г. Подольск, Февральская ул., д. 57с1, оф. 107",
                ],
              }),
              u.jsxs("p", {
                className: F.subtext,
                children: ["2017-2025 CТРОИТ ", u.jsx("br", {}), " ИНН 9721078560 ", u.jsx("br", {}), " ОГРН 1197746218130"],
              }),
            ],
          }),
        ],
      }),
      u.jsxs("div", {
        className: F.wrapper_desc,
        children: [
          u.jsxs("div", {
            className: F.item,
            children: [
              u.jsx("h3", { className: F.title, children: "Разделы" }),
              u.jsx(Ie, { className: F.link, to: "/catalog", children: "Каталог" }),
              u.jsx(Ie, { className: F.link, to: "/built_houses", children: "Построенные дома" }),
              u.jsx(Ie, { className: F.link, to: "/stub", children: "Новости" }),
              u.jsx(Ie, { className: F.link, to: "/stub", children: "Технология" }),
            ],
          }),
          u.jsx("div", { className: F.line }),
          u.jsxs("div", {
            className: F.right_side,
            children: [
              u.jsxs("div", {
                className: F.item,
                children: [
                  u.jsx("h3", { className: F.title, children: "Соц. сети" }),
                  u.jsxs("a", { className: F.link, href: "https://t.me/stroitdoma", children: ["Telegram", " "] }),
                  " ",
                  u.jsx("br", {}),
                  u.jsxs("a", { className: F.link, href: "https://www.instagram.com/stroitdoma.pro", children: ["Instagram", " "] }),
                  " ",
                  u.jsx("br", {}),
                  u.jsxs("a", { className: F.link, href: "https://www.youtube.com/@stroitdoma_pro", children: ["YouTube", " "] }),
                  " ",
                  u.jsx("br", {}),
                  u.jsxs("a", { className: F.link, href: "https://vk.com/stroitdoma_pro", children: ["ВКонтакте", " "] }),
                  " ",
                  u.jsx("br", {}),
                ],
              }),
              u.jsxs("div", {
                className: F.item_tel,
                children: [
                  u.jsxs("p", {
                    className: F.text,
                    children: [
                      "Телефон: ",
                      u.jsx("br", {}),
                      " ",
                      u.jsx("br", {}),
                      u.jsx("a", { className: F.link, href: "tel:+74953747477", children: "+7(495)374-74-77" }),
                      " ",
                      u.jsx("br", {}),
                      u.jsx("br", {}),
                      " ",
                      u.jsx("a", { className: F.link, href: "tel:+79197843396", children: "+7(919)784-33-96" }),
                      " ",
                      u.jsx("br", {}),
                      " ",
                      u.jsx("br", {}),
                      "Мессенджеры: ",
                      u.jsx("br", {}),
                      u.jsx("br", {}),
                      " ",
                      u.jsx("a", { className: F.link, href: "https://wa.me/79300358074", children: "Whatsapp" }),
                      " ",
                      u.jsx("br", {}),
                      " ",
                      u.jsx("a", { className: F.link, href: "https://t.me/+79300358074", children: "Telegram" }),
                      " ",
                      u.jsx("br", {}),
                      " ",
                      u.jsx("br", {}),
                      " Адрес офиса: ",
                      u.jsx("br", {}),
                      " ",
                      u.jsx("br", {}),
                      " г. Подольск, Февральская ул., д. 57с1, оф. 107",
                    ],
                  }),
                  u.jsxs("p", {
                    className: F.subtext,
                    children: ["2017-2025 CТРОИТ ", u.jsx("br", {}), " ИНН 9721078560 ", u.jsx("br", {}), " ОГРН 1197746218130"],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function MS() {
  const [e, t] = E.useState(0),
    [n, r] = E.useState(""),
    i = () => {
      t(window.scrollY);
    };
  E.useEffect(() => (window.addEventListener("scroll", i), () => window.removeEventListener("scroll", i)), []),
    E.useEffect(() => {
      document.body.style.overflow = n;
    });
  const [s, l] = E.useState("vert"),
    [a, o] = E.useState({ type: "all" });
  return (
    E.useEffect(() => {
      const c = window.innerWidth;
      c > 480 && c < 961 ? l("gor") : l("vert");
    }, []),
    E.useEffect(() => {
      document.body.style.overflow = n;
    }),
    u.jsxs(Gv, {
      children: [
        u.jsx(By, { setBodyStyle: r, scroll: e }),
        u.jsxs(Av, {
          children: [
            u.jsx(wn, { path: "/:anchor?", element: u.jsx(my, { positionImg: s, setActiveTab: o, setBodyStyle: r }) }),
            u.jsx(wn, { path: "/catalog", element: u.jsx(xx, { setActiveTab: o, activeTab: a }) }),
            u.jsx(wn, { path: "/built_houses", element: u.jsx(Dx, {}) }),
            u.jsx(wn, { path: "/catalog/:houseName?", element: u.jsx(dS, {}) }),
            u.jsx(wn, { path: "/stub", element: u.jsx(_S, {}) }),
            u.jsx(wn, { path: "/payment", element: u.jsx(Qy, {}) }),
          ],
        }),
        u.jsx(bS, {}),
      ],
    })
  );
}
Dl.createRoot(document.getElementById("root")).render(u.jsx(E.StrictMode, { children: u.jsx(MS, {}) }));
