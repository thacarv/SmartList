(function () {
  const c = document.createElement("link").relList;
  if (c && c.supports && c.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) f(d);
  new MutationObserver((d) => {
    for (const y of d)
      if (y.type === "childList")
        for (const S of y.addedNodes)
          S.tagName === "LINK" && S.rel === "modulepreload" && f(S);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(d) {
    const y = {};
    return (
      d.integrity && (y.integrity = d.integrity),
      d.referrerPolicy && (y.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (y.credentials = "include")
        : d.crossOrigin === "anonymous"
        ? (y.credentials = "omit")
        : (y.credentials = "same-origin"),
      y
    );
  }
  function f(d) {
    if (d.ep) return;
    d.ep = !0;
    const y = r(d);
    fetch(d.href, y);
  }
})();
var _f = { exports: {} },
  Uu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yd;
function lm() {
  if (Yd) return Uu;
  Yd = 1;
  var i = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.fragment");
  function r(f, d, y) {
    var S = null;
    if (
      (y !== void 0 && (S = "" + y),
      d.key !== void 0 && (S = "" + d.key),
      "key" in d)
    ) {
      y = {};
      for (var _ in d) _ !== "key" && (y[_] = d[_]);
    } else y = d;
    return (
      (d = y.ref),
      { $$typeof: i, type: f, key: S, ref: d !== void 0 ? d : null, props: y }
    );
  }
  return (Uu.Fragment = c), (Uu.jsx = r), (Uu.jsxs = r), Uu;
}
var Ld;
function am() {
  return Ld || ((Ld = 1), (_f.exports = lm())), _f.exports;
}
var $ = am(),
  zf = { exports: {} },
  tt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gd;
function um() {
  if (Gd) return tt;
  Gd = 1;
  var i = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    f = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    y = Symbol.for("react.consumer"),
    S = Symbol.for("react.context"),
    _ = Symbol.for("react.forward_ref"),
    z = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    O = Symbol.for("react.lazy"),
    C = Symbol.iterator;
  function Y(m) {
    return m === null || typeof m != "object"
      ? null
      : ((m = (C && m[C]) || m["@@iterator"]),
        typeof m == "function" ? m : null);
  }
  var L = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    H = Object.assign,
    w = {};
  function q(m, x, G) {
    (this.props = m),
      (this.context = x),
      (this.refs = w),
      (this.updater = G || L);
  }
  (q.prototype.isReactComponent = {}),
    (q.prototype.setState = function (m, x) {
      if (typeof m != "object" && typeof m != "function" && m != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, m, x, "setState");
    }),
    (q.prototype.forceUpdate = function (m) {
      this.updater.enqueueForceUpdate(this, m, "forceUpdate");
    });
  function ct() {}
  ct.prototype = q.prototype;
  function nt(m, x, G) {
    (this.props = m),
      (this.context = x),
      (this.refs = w),
      (this.updater = G || L);
  }
  var P = (nt.prototype = new ct());
  (P.constructor = nt), H(P, q.prototype), (P.isPureReactComponent = !0);
  var bt = Array.isArray,
    F = { H: null, A: null, T: null, S: null, V: null },
    At = Object.prototype.hasOwnProperty;
  function _t(m, x, G, B, Z, ft) {
    return (
      (G = ft.ref),
      { $$typeof: i, type: m, key: x, ref: G !== void 0 ? G : null, props: ft }
    );
  }
  function Ht(m, x) {
    return _t(m.type, x, void 0, void 0, void 0, m.props);
  }
  function ae(m) {
    return typeof m == "object" && m !== null && m.$$typeof === i;
  }
  function Zl(m) {
    var x = { "=": "=0", ":": "=2" };
    return (
      "$" +
      m.replace(/[=:]/g, function (G) {
        return x[G];
      })
    );
  }
  var He = /\/+/g;
  function wt(m, x) {
    return typeof m == "object" && m !== null && m.key != null
      ? Zl("" + m.key)
      : x.toString(36);
  }
  function El() {}
  function Tl(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (
          (typeof m.status == "string"
            ? m.then(El, El)
            : ((m.status = "pending"),
              m.then(
                function (x) {
                  m.status === "pending" &&
                    ((m.status = "fulfilled"), (m.value = x));
                },
                function (x) {
                  m.status === "pending" &&
                    ((m.status = "rejected"), (m.reason = x));
                }
              )),
          m.status)
        ) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
        }
    }
    throw m;
  }
  function Qt(m, x, G, B, Z) {
    var ft = typeof m;
    (ft === "undefined" || ft === "boolean") && (m = null);
    var W = !1;
    if (m === null) W = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          W = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case i:
            case c:
              W = !0;
              break;
            case O:
              return (W = m._init), Qt(W(m._payload), x, G, B, Z);
          }
      }
    if (W)
      return (
        (Z = Z(m)),
        (W = B === "" ? "." + wt(m, 0) : B),
        bt(Z)
          ? ((G = ""),
            W != null && (G = W.replace(He, "$&/") + "/"),
            Qt(Z, x, G, "", function (Fe) {
              return Fe;
            }))
          : Z != null &&
            (ae(Z) &&
              (Z = Ht(
                Z,
                G +
                  (Z.key == null || (m && m.key === Z.key)
                    ? ""
                    : ("" + Z.key).replace(He, "$&/") + "/") +
                  W
              )),
            x.push(Z)),
        1
      );
    W = 0;
    var ue = B === "" ? "." : B + ":";
    if (bt(m))
      for (var pt = 0; pt < m.length; pt++)
        (B = m[pt]), (ft = ue + wt(B, pt)), (W += Qt(B, x, G, ft, Z));
    else if (((pt = Y(m)), typeof pt == "function"))
      for (m = pt.call(m), pt = 0; !(B = m.next()).done; )
        (B = B.value), (ft = ue + wt(B, pt++)), (W += Qt(B, x, G, ft, Z));
    else if (ft === "object") {
      if (typeof m.then == "function") return Qt(Tl(m), x, G, B, Z);
      throw (
        ((x = String(m)),
        Error(
          "Objects are not valid as a React child (found: " +
            (x === "[object Object]"
              ? "object with keys {" + Object.keys(m).join(", ") + "}"
              : x) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return W;
  }
  function U(m, x, G) {
    if (m == null) return m;
    var B = [],
      Z = 0;
    return (
      Qt(m, B, "", "", function (ft) {
        return x.call(G, ft, Z++);
      }),
      B
    );
  }
  function j(m) {
    if (m._status === -1) {
      var x = m._result;
      (x = x()),
        x.then(
          function (G) {
            (m._status === 0 || m._status === -1) &&
              ((m._status = 1), (m._result = G));
          },
          function (G) {
            (m._status === 0 || m._status === -1) &&
              ((m._status = 2), (m._result = G));
          }
        ),
        m._status === -1 && ((m._status = 0), (m._result = x));
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var J =
    typeof reportError == "function"
      ? reportError
      : function (m) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var x = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof m == "object" &&
                m !== null &&
                typeof m.message == "string"
                  ? String(m.message)
                  : String(m),
              error: m,
            });
            if (!window.dispatchEvent(x)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", m);
            return;
          }
          console.error(m);
        };
  function vt() {}
  return (
    (tt.Children = {
      map: U,
      forEach: function (m, x, G) {
        U(
          m,
          function () {
            x.apply(this, arguments);
          },
          G
        );
      },
      count: function (m) {
        var x = 0;
        return (
          U(m, function () {
            x++;
          }),
          x
        );
      },
      toArray: function (m) {
        return (
          U(m, function (x) {
            return x;
          }) || []
        );
      },
      only: function (m) {
        if (!ae(m))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return m;
      },
    }),
    (tt.Component = q),
    (tt.Fragment = r),
    (tt.Profiler = d),
    (tt.PureComponent = nt),
    (tt.StrictMode = f),
    (tt.Suspense = z),
    (tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F),
    (tt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (m) {
        return F.H.useMemoCache(m);
      },
    }),
    (tt.cache = function (m) {
      return function () {
        return m.apply(null, arguments);
      };
    }),
    (tt.cloneElement = function (m, x, G) {
      if (m == null)
        throw Error(
          "The argument must be a React element, but you passed " + m + "."
        );
      var B = H({}, m.props),
        Z = m.key,
        ft = void 0;
      if (x != null)
        for (W in (x.ref !== void 0 && (ft = void 0),
        x.key !== void 0 && (Z = "" + x.key),
        x))
          !At.call(x, W) ||
            W === "key" ||
            W === "__self" ||
            W === "__source" ||
            (W === "ref" && x.ref === void 0) ||
            (B[W] = x[W]);
      var W = arguments.length - 2;
      if (W === 1) B.children = G;
      else if (1 < W) {
        for (var ue = Array(W), pt = 0; pt < W; pt++)
          ue[pt] = arguments[pt + 2];
        B.children = ue;
      }
      return _t(m.type, Z, void 0, void 0, ft, B);
    }),
    (tt.createContext = function (m) {
      return (
        (m = {
          $$typeof: S,
          _currentValue: m,
          _currentValue2: m,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (m.Provider = m),
        (m.Consumer = { $$typeof: y, _context: m }),
        m
      );
    }),
    (tt.createElement = function (m, x, G) {
      var B,
        Z = {},
        ft = null;
      if (x != null)
        for (B in (x.key !== void 0 && (ft = "" + x.key), x))
          At.call(x, B) &&
            B !== "key" &&
            B !== "__self" &&
            B !== "__source" &&
            (Z[B] = x[B]);
      var W = arguments.length - 2;
      if (W === 1) Z.children = G;
      else if (1 < W) {
        for (var ue = Array(W), pt = 0; pt < W; pt++)
          ue[pt] = arguments[pt + 2];
        Z.children = ue;
      }
      if (m && m.defaultProps)
        for (B in ((W = m.defaultProps), W)) Z[B] === void 0 && (Z[B] = W[B]);
      return _t(m, ft, void 0, void 0, null, Z);
    }),
    (tt.createRef = function () {
      return { current: null };
    }),
    (tt.forwardRef = function (m) {
      return { $$typeof: _, render: m };
    }),
    (tt.isValidElement = ae),
    (tt.lazy = function (m) {
      return { $$typeof: O, _payload: { _status: -1, _result: m }, _init: j };
    }),
    (tt.memo = function (m, x) {
      return { $$typeof: g, type: m, compare: x === void 0 ? null : x };
    }),
    (tt.startTransition = function (m) {
      var x = F.T,
        G = {};
      F.T = G;
      try {
        var B = m(),
          Z = F.S;
        Z !== null && Z(G, B),
          typeof B == "object" &&
            B !== null &&
            typeof B.then == "function" &&
            B.then(vt, J);
      } catch (ft) {
        J(ft);
      } finally {
        F.T = x;
      }
    }),
    (tt.unstable_useCacheRefresh = function () {
      return F.H.useCacheRefresh();
    }),
    (tt.use = function (m) {
      return F.H.use(m);
    }),
    (tt.useActionState = function (m, x, G) {
      return F.H.useActionState(m, x, G);
    }),
    (tt.useCallback = function (m, x) {
      return F.H.useCallback(m, x);
    }),
    (tt.useContext = function (m) {
      return F.H.useContext(m);
    }),
    (tt.useDebugValue = function () {}),
    (tt.useDeferredValue = function (m, x) {
      return F.H.useDeferredValue(m, x);
    }),
    (tt.useEffect = function (m, x, G) {
      var B = F.H;
      if (typeof G == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return B.useEffect(m, x);
    }),
    (tt.useId = function () {
      return F.H.useId();
    }),
    (tt.useImperativeHandle = function (m, x, G) {
      return F.H.useImperativeHandle(m, x, G);
    }),
    (tt.useInsertionEffect = function (m, x) {
      return F.H.useInsertionEffect(m, x);
    }),
    (tt.useLayoutEffect = function (m, x) {
      return F.H.useLayoutEffect(m, x);
    }),
    (tt.useMemo = function (m, x) {
      return F.H.useMemo(m, x);
    }),
    (tt.useOptimistic = function (m, x) {
      return F.H.useOptimistic(m, x);
    }),
    (tt.useReducer = function (m, x, G) {
      return F.H.useReducer(m, x, G);
    }),
    (tt.useRef = function (m) {
      return F.H.useRef(m);
    }),
    (tt.useState = function (m) {
      return F.H.useState(m);
    }),
    (tt.useSyncExternalStore = function (m, x, G) {
      return F.H.useSyncExternalStore(m, x, G);
    }),
    (tt.useTransition = function () {
      return F.H.useTransition();
    }),
    (tt.version = "19.1.0"),
    tt
  );
}
var Xd;
function Xf() {
  return Xd || ((Xd = 1), (zf.exports = um())), zf.exports;
}
var $t = Xf(),
  Df = { exports: {} },
  Mu = {},
  Uf = { exports: {} },
  Mf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wd;
function nm() {
  return (
    wd ||
      ((wd = 1),
      (function (i) {
        function c(U, j) {
          var J = U.length;
          U.push(j);
          t: for (; 0 < J; ) {
            var vt = (J - 1) >>> 1,
              m = U[vt];
            if (0 < d(m, j)) (U[vt] = j), (U[J] = m), (J = vt);
            else break t;
          }
        }
        function r(U) {
          return U.length === 0 ? null : U[0];
        }
        function f(U) {
          if (U.length === 0) return null;
          var j = U[0],
            J = U.pop();
          if (J !== j) {
            U[0] = J;
            t: for (var vt = 0, m = U.length, x = m >>> 1; vt < x; ) {
              var G = 2 * (vt + 1) - 1,
                B = U[G],
                Z = G + 1,
                ft = U[Z];
              if (0 > d(B, J))
                Z < m && 0 > d(ft, B)
                  ? ((U[vt] = ft), (U[Z] = J), (vt = Z))
                  : ((U[vt] = B), (U[G] = J), (vt = G));
              else if (Z < m && 0 > d(ft, J))
                (U[vt] = ft), (U[Z] = J), (vt = Z);
              else break t;
            }
          }
          return j;
        }
        function d(U, j) {
          var J = U.sortIndex - j.sortIndex;
          return J !== 0 ? J : U.id - j.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var y = performance;
          i.unstable_now = function () {
            return y.now();
          };
        } else {
          var S = Date,
            _ = S.now();
          i.unstable_now = function () {
            return S.now() - _;
          };
        }
        var z = [],
          g = [],
          O = 1,
          C = null,
          Y = 3,
          L = !1,
          H = !1,
          w = !1,
          q = !1,
          ct = typeof setTimeout == "function" ? setTimeout : null,
          nt = typeof clearTimeout == "function" ? clearTimeout : null,
          P = typeof setImmediate < "u" ? setImmediate : null;
        function bt(U) {
          for (var j = r(g); j !== null; ) {
            if (j.callback === null) f(g);
            else if (j.startTime <= U)
              f(g), (j.sortIndex = j.expirationTime), c(z, j);
            else break;
            j = r(g);
          }
        }
        function F(U) {
          if (((w = !1), bt(U), !H))
            if (r(z) !== null) (H = !0), At || ((At = !0), wt());
            else {
              var j = r(g);
              j !== null && Qt(F, j.startTime - U);
            }
        }
        var At = !1,
          _t = -1,
          Ht = 5,
          ae = -1;
        function Zl() {
          return q ? !0 : !(i.unstable_now() - ae < Ht);
        }
        function He() {
          if (((q = !1), At)) {
            var U = i.unstable_now();
            ae = U;
            var j = !0;
            try {
              t: {
                (H = !1), w && ((w = !1), nt(_t), (_t = -1)), (L = !0);
                var J = Y;
                try {
                  e: {
                    for (
                      bt(U), C = r(z);
                      C !== null && !(C.expirationTime > U && Zl());

                    ) {
                      var vt = C.callback;
                      if (typeof vt == "function") {
                        (C.callback = null), (Y = C.priorityLevel);
                        var m = vt(C.expirationTime <= U);
                        if (((U = i.unstable_now()), typeof m == "function")) {
                          (C.callback = m), bt(U), (j = !0);
                          break e;
                        }
                        C === r(z) && f(z), bt(U);
                      } else f(z);
                      C = r(z);
                    }
                    if (C !== null) j = !0;
                    else {
                      var x = r(g);
                      x !== null && Qt(F, x.startTime - U), (j = !1);
                    }
                  }
                  break t;
                } finally {
                  (C = null), (Y = J), (L = !1);
                }
                j = void 0;
              }
            } finally {
              j ? wt() : (At = !1);
            }
          }
        }
        var wt;
        if (typeof P == "function")
          wt = function () {
            P(He);
          };
        else if (typeof MessageChannel < "u") {
          var El = new MessageChannel(),
            Tl = El.port2;
          (El.port1.onmessage = He),
            (wt = function () {
              Tl.postMessage(null);
            });
        } else
          wt = function () {
            ct(He, 0);
          };
        function Qt(U, j) {
          _t = ct(function () {
            U(i.unstable_now());
          }, j);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (U) {
            U.callback = null;
          }),
          (i.unstable_forceFrameRate = function (U) {
            0 > U || 125 < U
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Ht = 0 < U ? Math.floor(1e3 / U) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return Y;
          }),
          (i.unstable_next = function (U) {
            switch (Y) {
              case 1:
              case 2:
              case 3:
                var j = 3;
                break;
              default:
                j = Y;
            }
            var J = Y;
            Y = j;
            try {
              return U();
            } finally {
              Y = J;
            }
          }),
          (i.unstable_requestPaint = function () {
            q = !0;
          }),
          (i.unstable_runWithPriority = function (U, j) {
            switch (U) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                U = 3;
            }
            var J = Y;
            Y = U;
            try {
              return j();
            } finally {
              Y = J;
            }
          }),
          (i.unstable_scheduleCallback = function (U, j, J) {
            var vt = i.unstable_now();
            switch (
              (typeof J == "object" && J !== null
                ? ((J = J.delay),
                  (J = typeof J == "number" && 0 < J ? vt + J : vt))
                : (J = vt),
              U)
            ) {
              case 1:
                var m = -1;
                break;
              case 2:
                m = 250;
                break;
              case 5:
                m = 1073741823;
                break;
              case 4:
                m = 1e4;
                break;
              default:
                m = 5e3;
            }
            return (
              (m = J + m),
              (U = {
                id: O++,
                callback: j,
                priorityLevel: U,
                startTime: J,
                expirationTime: m,
                sortIndex: -1,
              }),
              J > vt
                ? ((U.sortIndex = J),
                  c(g, U),
                  r(z) === null &&
                    U === r(g) &&
                    (w ? (nt(_t), (_t = -1)) : (w = !0), Qt(F, J - vt)))
                : ((U.sortIndex = m),
                  c(z, U),
                  H || L || ((H = !0), At || ((At = !0), wt()))),
              U
            );
          }),
          (i.unstable_shouldYield = Zl),
          (i.unstable_wrapCallback = function (U) {
            var j = Y;
            return function () {
              var J = Y;
              Y = j;
              try {
                return U.apply(this, arguments);
              } finally {
                Y = J;
              }
            };
          });
      })(Mf)),
    Mf
  );
}
var Qd;
function im() {
  return Qd || ((Qd = 1), (Uf.exports = nm())), Uf.exports;
}
var Nf = { exports: {} },
  Kt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zd;
function cm() {
  if (Zd) return Kt;
  Zd = 1;
  var i = Xf();
  function c(z) {
    var g = "https://react.dev/errors/" + z;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var O = 2; O < arguments.length; O++)
        g += "&args[]=" + encodeURIComponent(arguments[O]);
    }
    return (
      "Minified React error #" +
      z +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var f = {
      d: {
        f: r,
        r: function () {
          throw Error(c(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    d = Symbol.for("react.portal");
  function y(z, g, O) {
    var C =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: C == null ? null : "" + C,
      children: z,
      containerInfo: g,
      implementation: O,
    };
  }
  var S = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function _(z, g) {
    if (z === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    (Kt.createPortal = function (z, g) {
      var O =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(c(299));
      return y(z, g, null, O);
    }),
    (Kt.flushSync = function (z) {
      var g = S.T,
        O = f.p;
      try {
        if (((S.T = null), (f.p = 2), z)) return z();
      } finally {
        (S.T = g), (f.p = O), f.d.f();
      }
    }),
    (Kt.preconnect = function (z, g) {
      typeof z == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        f.d.C(z, g));
    }),
    (Kt.prefetchDNS = function (z) {
      typeof z == "string" && f.d.D(z);
    }),
    (Kt.preinit = function (z, g) {
      if (typeof z == "string" && g && typeof g.as == "string") {
        var O = g.as,
          C = _(O, g.crossOrigin),
          Y = typeof g.integrity == "string" ? g.integrity : void 0,
          L = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        O === "style"
          ? f.d.S(z, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: C,
              integrity: Y,
              fetchPriority: L,
            })
          : O === "script" &&
            f.d.X(z, {
              crossOrigin: C,
              integrity: Y,
              fetchPriority: L,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (Kt.preinitModule = function (z, g) {
      if (typeof z == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var O = _(g.as, g.crossOrigin);
            f.d.M(z, {
              crossOrigin: O,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && f.d.M(z);
    }),
    (Kt.preload = function (z, g) {
      if (
        typeof z == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var O = g.as,
          C = _(O, g.crossOrigin);
        f.d.L(z, O, {
          crossOrigin: C,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (Kt.preloadModule = function (z, g) {
      if (typeof z == "string")
        if (g) {
          var O = _(g.as, g.crossOrigin);
          f.d.m(z, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: O,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else f.d.m(z);
    }),
    (Kt.requestFormReset = function (z) {
      f.d.r(z);
    }),
    (Kt.unstable_batchedUpdates = function (z, g) {
      return z(g);
    }),
    (Kt.useFormState = function (z, g, O) {
      return S.H.useFormState(z, g, O);
    }),
    (Kt.useFormStatus = function () {
      return S.H.useHostTransitionStatus();
    }),
    (Kt.version = "19.1.0"),
    Kt
  );
}
var Vd;
function fm() {
  if (Vd) return Nf.exports;
  Vd = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (c) {
        console.error(c);
      }
  }
  return i(), (Nf.exports = cm()), Nf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kd;
function sm() {
  if (Kd) return Mu;
  Kd = 1;
  var i = im(),
    c = Xf(),
    r = fm();
  function f(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function d(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function y(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function S(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function _(t) {
    if (y(t) !== t) throw Error(f(188));
  }
  function z(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = y(t)), e === null)) throw Error(f(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var u = l.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((a = u.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === l) return _(u), t;
          if (n === a) return _(u), e;
          n = n.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) (l = u), (a = n);
      else {
        for (var s = !1, o = u.child; o; ) {
          if (o === l) {
            (s = !0), (l = u), (a = n);
            break;
          }
          if (o === a) {
            (s = !0), (a = u), (l = n);
            break;
          }
          o = o.sibling;
        }
        if (!s) {
          for (o = n.child; o; ) {
            if (o === l) {
              (s = !0), (l = n), (a = u);
              break;
            }
            if (o === a) {
              (s = !0), (a = n), (l = u);
              break;
            }
            o = o.sibling;
          }
          if (!s) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? t : e;
  }
  function g(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = g(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var O = Object.assign,
    C = Symbol.for("react.element"),
    Y = Symbol.for("react.transitional.element"),
    L = Symbol.for("react.portal"),
    H = Symbol.for("react.fragment"),
    w = Symbol.for("react.strict_mode"),
    q = Symbol.for("react.profiler"),
    ct = Symbol.for("react.provider"),
    nt = Symbol.for("react.consumer"),
    P = Symbol.for("react.context"),
    bt = Symbol.for("react.forward_ref"),
    F = Symbol.for("react.suspense"),
    At = Symbol.for("react.suspense_list"),
    _t = Symbol.for("react.memo"),
    Ht = Symbol.for("react.lazy"),
    ae = Symbol.for("react.activity"),
    Zl = Symbol.for("react.memo_cache_sentinel"),
    He = Symbol.iterator;
  function wt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (He && t[He]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var El = Symbol.for("react.client.reference");
  function Tl(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === El ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case H:
        return "Fragment";
      case q:
        return "Profiler";
      case w:
        return "StrictMode";
      case F:
        return "Suspense";
      case At:
        return "SuspenseList";
      case ae:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case L:
          return "Portal";
        case P:
          return (t.displayName || "Context") + ".Provider";
        case nt:
          return (t._context.displayName || "Context") + ".Consumer";
        case bt:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case _t:
          return (
            (e = t.displayName || null), e !== null ? e : Tl(t.type) || "Memo"
          );
        case Ht:
          (e = t._payload), (t = t._init);
          try {
            return Tl(t(e));
          } catch {}
      }
    return null;
  }
  var Qt = Array.isArray,
    U = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    j = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    J = { pending: !1, data: null, method: null, action: null },
    vt = [],
    m = -1;
  function x(t) {
    return { current: t };
  }
  function G(t) {
    0 > m || ((t.current = vt[m]), (vt[m] = null), m--);
  }
  function B(t, e) {
    m++, (vt[m] = t.current), (t.current = e);
  }
  var Z = x(null),
    ft = x(null),
    W = x(null),
    ue = x(null);
  function pt(t, e) {
    switch ((B(W, e), B(ft, t), B(Z, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? dd(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = dd(e)), (t = hd(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    G(Z), B(Z, t);
  }
  function Fe() {
    G(Z), G(ft), G(W);
  }
  function ri(t) {
    t.memoizedState !== null && B(ue, t);
    var e = Z.current,
      l = hd(e, t.type);
    e !== l && (B(ft, t), B(Z, l));
  }
  function qu(t) {
    ft.current === t && (G(Z), G(ft)),
      ue.current === t && (G(ue), (Ou._currentValue = J));
  }
  var oi = Object.prototype.hasOwnProperty,
    di = i.unstable_scheduleCallback,
    hi = i.unstable_cancelCallback,
    Hh = i.unstable_shouldYield,
    qh = i.unstable_requestPaint,
    ze = i.unstable_now,
    Bh = i.unstable_getCurrentPriorityLevel,
    Vf = i.unstable_ImmediatePriority,
    Kf = i.unstable_UserBlockingPriority,
    Bu = i.unstable_NormalPriority,
    jh = i.unstable_LowPriority,
    Jf = i.unstable_IdlePriority,
    Yh = i.log,
    Lh = i.unstable_setDisableYieldValue,
    xa = null,
    ne = null;
  function We(t) {
    if (
      (typeof Yh == "function" && Lh(t),
      ne && typeof ne.setStrictMode == "function")
    )
      try {
        ne.setStrictMode(xa, t);
      } catch {}
  }
  var ie = Math.clz32 ? Math.clz32 : wh,
    Gh = Math.log,
    Xh = Math.LN2;
  function wh(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((Gh(t) / Xh) | 0)) | 0;
  }
  var ju = 256,
    Yu = 4194304;
  function Al(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Lu(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      n = t.suspendedLanes,
      s = t.pingedLanes;
    t = t.warmLanes;
    var o = a & 134217727;
    return (
      o !== 0
        ? ((a = o & ~n),
          a !== 0
            ? (u = Al(a))
            : ((s &= o),
              s !== 0
                ? (u = Al(s))
                : l || ((l = o & ~t), l !== 0 && (u = Al(l)))))
        : ((o = a & ~n),
          o !== 0
            ? (u = Al(o))
            : s !== 0
            ? (u = Al(s))
            : l || ((l = a & ~t), l !== 0 && (u = Al(l)))),
      u === 0
        ? 0
        : e !== 0 &&
          e !== u &&
          (e & n) === 0 &&
          ((n = u & -u),
          (l = e & -e),
          n >= l || (n === 32 && (l & 4194048) !== 0))
        ? e
        : u
    );
  }
  function Ca(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Qh(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
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
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function kf() {
    var t = ju;
    return (ju <<= 1), (ju & 4194048) === 0 && (ju = 256), t;
  }
  function $f() {
    var t = Yu;
    return (Yu <<= 1), (Yu & 62914560) === 0 && (Yu = 4194304), t;
  }
  function yi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ha(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function Zh(t, e, l, a, u, n) {
    var s = t.pendingLanes;
    (t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0);
    var o = t.entanglements,
      h = t.expirationTimes,
      E = t.hiddenUpdates;
    for (l = s & ~l; 0 < l; ) {
      var D = 31 - ie(l),
        N = 1 << D;
      (o[D] = 0), (h[D] = -1);
      var T = E[D];
      if (T !== null)
        for (E[D] = null, D = 0; D < T.length; D++) {
          var A = T[D];
          A !== null && (A.lane &= -536870913);
        }
      l &= ~N;
    }
    a !== 0 && Ff(t, a, 0),
      n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(s & ~e));
  }
  function Ff(t, e, l) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - ie(e);
    (t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 4194090));
  }
  function Wf(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - ie(l),
        u = 1 << a;
      (u & e) | (t[a] & e) && (t[a] |= e), (l &= ~u);
    }
  }
  function mi(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function vi(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Pf() {
    var t = j.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : xd(t.type));
  }
  function Vh(t, e) {
    var l = j.p;
    try {
      return (j.p = t), e();
    } finally {
      j.p = l;
    }
  }
  var Pe = Math.random().toString(36).slice(2),
    Zt = "__reactFiber$" + Pe,
    Ft = "__reactProps$" + Pe,
    Vl = "__reactContainer$" + Pe,
    Si = "__reactEvents$" + Pe,
    Kh = "__reactListeners$" + Pe,
    Jh = "__reactHandles$" + Pe,
    If = "__reactResources$" + Pe,
    qa = "__reactMarker$" + Pe;
  function gi(t) {
    delete t[Zt], delete t[Ft], delete t[Si], delete t[Kh], delete t[Jh];
  }
  function Kl(t) {
    var e = t[Zt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[Vl] || l[Zt])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = Sd(t); t !== null; ) {
            if ((l = t[Zt])) return l;
            t = Sd(t);
          }
        return e;
      }
      (t = l), (l = t.parentNode);
    }
    return null;
  }
  function Jl(t) {
    if ((t = t[Zt] || t[Vl])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Ba(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function kl(t) {
    var e = t[If];
    return (
      e ||
        (e = t[If] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function qt(t) {
    t[qa] = !0;
  }
  var ts = new Set(),
    es = {};
  function Ol(t, e) {
    $l(t, e), $l(t + "Capture", e);
  }
  function $l(t, e) {
    for (es[t] = e, t = 0; t < e.length; t++) ts.add(e[t]);
  }
  var kh = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    ls = {},
    as = {};
  function $h(t) {
    return oi.call(as, t)
      ? !0
      : oi.call(ls, t)
      ? !1
      : kh.test(t)
      ? (as[t] = !0)
      : ((ls[t] = !0), !1);
  }
  function Gu(t, e, l) {
    if ($h(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function Xu(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function qe(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  var bi, us;
  function Fl(t) {
    if (bi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        (bi = (e && e[1]) || ""),
          (us =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      bi +
      t +
      us
    );
  }
  var pi = !1;
  function Ei(t, e) {
    if (!t || pi) return "";
    pi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var N = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(N.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(N, []);
                } catch (A) {
                  var T = A;
                }
                Reflect.construct(t, [], N);
              } else {
                try {
                  N.call();
                } catch (A) {
                  T = A;
                }
                t.call(N.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                T = A;
              }
              (N = t()) &&
                typeof N.catch == "function" &&
                N.catch(function () {});
            }
          } catch (A) {
            if (A && T && typeof A.stack == "string") return [A.stack, T.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = a.DetermineComponentFrameRoot(),
        s = n[0],
        o = n[1];
      if (s && o) {
        var h = s.split(`
`),
          E = o.split(`
`);
        for (
          u = a = 0;
          a < h.length && !h[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; u < E.length && !E[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (a === h.length || u === E.length)
          for (
            a = h.length - 1, u = E.length - 1;
            1 <= a && 0 <= u && h[a] !== E[u];

          )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (h[a] !== E[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || h[a] !== E[u])) {
                  var D =
                    `
` + h[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      D.includes("<anonymous>") &&
                      (D = D.replace("<anonymous>", t.displayName)),
                    D
                  );
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      (pi = !1), (Error.prepareStackTrace = l);
    }
    return (l = t ? t.displayName || t.name : "") ? Fl(l) : "";
  }
  function Fh(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Fl(t.type);
      case 16:
        return Fl("Lazy");
      case 13:
        return Fl("Suspense");
      case 19:
        return Fl("SuspenseList");
      case 0:
      case 15:
        return Ei(t.type, !1);
      case 11:
        return Ei(t.type.render, !1);
      case 1:
        return Ei(t.type, !0);
      case 31:
        return Fl("Activity");
      default:
        return "";
    }
  }
  function ns(t) {
    try {
      var e = "";
      do (e += Fh(t)), (t = t.return);
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function ye(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function is(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Wh(t) {
    var e = is(t) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      a = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var u = l.get,
        n = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (s) {
            (a = "" + s), n.call(this, s);
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (s) {
            a = "" + s;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function wu(t) {
    t._valueTracker || (t._valueTracker = Wh(t));
  }
  function cs(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = "";
    return (
      t && (a = is(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function Qu(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Ph = /[\n"\\]/g;
  function me(t) {
    return t.replace(Ph, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ti(t, e, l, a, u, n, s, o) {
    (t.name = ""),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (t.type = s)
        : t.removeAttribute("type"),
      e != null
        ? s === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + ye(e))
          : t.value !== "" + ye(e) && (t.value = "" + ye(e))
        : (s !== "submit" && s !== "reset") || t.removeAttribute("value"),
      e != null
        ? Ai(t, s, ye(e))
        : l != null
        ? Ai(t, s, ye(l))
        : a != null && t.removeAttribute("value"),
      u == null && n != null && (t.defaultChecked = !!n),
      u != null &&
        (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      o != null &&
      typeof o != "function" &&
      typeof o != "symbol" &&
      typeof o != "boolean"
        ? (t.name = "" + ye(o))
        : t.removeAttribute("name");
  }
  function fs(t, e, l, a, u, n, s, o) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (t.type = n),
      e != null || l != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || e != null)) return;
      (l = l != null ? "" + ye(l) : ""),
        (e = e != null ? "" + ye(e) : l),
        o || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? u),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = o ? t.checked : !!a),
      (t.defaultChecked = !!a),
      s != null &&
        typeof s != "function" &&
        typeof s != "symbol" &&
        typeof s != "boolean" &&
        (t.name = s);
  }
  function Ai(t, e, l) {
    (e === "number" && Qu(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function Wl(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var u = 0; u < l.length; u++) e["$" + l[u]] = !0;
      for (l = 0; l < t.length; l++)
        (u = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== u && (t[l].selected = u),
          u && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + ye(l), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === l) {
          (t[u].selected = !0), a && (t[u].defaultSelected = !0);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function ss(t, e, l) {
    if (
      e != null &&
      ((e = "" + ye(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + ye(l) : "";
  }
  function rs(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (Qt(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (e = l);
    }
    (l = ye(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== "" && a !== null && (t.value = a);
  }
  function Pl(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Ih = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function os(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : a
      ? t.setProperty(e, l)
      : typeof l != "number" || l === 0 || Ih.has(e)
      ? e === "float"
        ? (t.cssFloat = l)
        : (t[e] = ("" + l).trim())
      : (t[e] = l + "px");
  }
  function ds(t, e, l) {
    if (e != null && typeof e != "object") throw Error(f(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
            ? (t.cssFloat = "")
            : (t[a] = ""));
      for (var u in e)
        (a = e[u]), e.hasOwnProperty(u) && l[u] !== a && os(t, u, a);
    } else for (var n in e) e.hasOwnProperty(n) && os(t, n, e[n]);
  }
  function Oi(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var t0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    e0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Zu(t) {
    return e0.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Ri = null;
  function _i(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Il = null,
    ta = null;
  function hs(t) {
    var e = Jl(t);
    if (e && (t = e.stateNode)) {
      var l = t[Ft] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Ti(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + me("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var u = a[Ft] || null;
                if (!u) throw Error(f(90));
                Ti(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              (a = l[e]), a.form === t.form && cs(a);
          }
          break t;
        case "textarea":
          ss(t, l.value, l.defaultValue);
          break t;
        case "select":
          (e = l.value), e != null && Wl(t, !!l.multiple, e, !1);
      }
    }
  }
  var zi = !1;
  function ys(t, e, l) {
    if (zi) return t(e, l);
    zi = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((zi = !1),
        (Il !== null || ta !== null) &&
          (Mn(), Il && ((e = Il), (t = ta), (ta = Il = null), hs(e), t)))
      )
        for (e = 0; e < t.length; e++) hs(t[e]);
    }
  }
  function ja(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[Ft] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
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
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(f(231, e, typeof l));
    return l;
  }
  var Be = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Di = !1;
  if (Be)
    try {
      var Ya = {};
      Object.defineProperty(Ya, "passive", {
        get: function () {
          Di = !0;
        },
      }),
        window.addEventListener("test", Ya, Ya),
        window.removeEventListener("test", Ya, Ya);
    } catch {
      Di = !1;
    }
  var Ie = null,
    Ui = null,
    Vu = null;
  function ms() {
    if (Vu) return Vu;
    var t,
      e = Ui,
      l = e.length,
      a,
      u = "value" in Ie ? Ie.value : Ie.textContent,
      n = u.length;
    for (t = 0; t < l && e[t] === u[t]; t++);
    var s = l - t;
    for (a = 1; a <= s && e[l - a] === u[n - a]; a++);
    return (Vu = u.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Ku(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Ju() {
    return !0;
  }
  function vs() {
    return !1;
  }
  function Wt(t) {
    function e(l, a, u, n, s) {
      (this._reactName = l),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = s),
        (this.currentTarget = null);
      for (var o in t)
        t.hasOwnProperty(o) && ((l = t[o]), (this[o] = l ? l(n) : n[o]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Ju
          : vs),
        (this.isPropagationStopped = vs),
        this
      );
    }
    return (
      O(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Ju));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Ju));
        },
        persist: function () {},
        isPersistent: Ju,
      }),
      e
    );
  }
  var Rl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ku = Wt(Rl),
    La = O({}, Rl, { view: 0, detail: 0 }),
    l0 = Wt(La),
    Mi,
    Ni,
    Ga,
    $u = O({}, La, {
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
      getModifierState: Ci,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Ga &&
              (Ga && t.type === "mousemove"
                ? ((Mi = t.screenX - Ga.screenX), (Ni = t.screenY - Ga.screenY))
                : (Ni = Mi = 0),
              (Ga = t)),
            Mi);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Ni;
      },
    }),
    Ss = Wt($u),
    a0 = O({}, $u, { dataTransfer: 0 }),
    u0 = Wt(a0),
    n0 = O({}, La, { relatedTarget: 0 }),
    xi = Wt(n0),
    i0 = O({}, Rl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    c0 = Wt(i0),
    f0 = O({}, Rl, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    s0 = Wt(f0),
    r0 = O({}, Rl, { data: 0 }),
    gs = Wt(r0),
    o0 = {
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
    d0 = {
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
    h0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function y0(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = h0[t])
      ? !!e[t]
      : !1;
  }
  function Ci() {
    return y0;
  }
  var m0 = O({}, La, {
      key: function (t) {
        if (t.key) {
          var e = o0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Ku(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? d0[t.keyCode] || "Unidentified"
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
      getModifierState: Ci,
      charCode: function (t) {
        return t.type === "keypress" ? Ku(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Ku(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    v0 = Wt(m0),
    S0 = O({}, $u, {
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
    bs = Wt(S0),
    g0 = O({}, La, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ci,
    }),
    b0 = Wt(g0),
    p0 = O({}, Rl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    E0 = Wt(p0),
    T0 = O({}, $u, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    A0 = Wt(T0),
    O0 = O({}, Rl, { newState: 0, oldState: 0 }),
    R0 = Wt(O0),
    _0 = [9, 13, 27, 32],
    Hi = Be && "CompositionEvent" in window,
    Xa = null;
  Be && "documentMode" in document && (Xa = document.documentMode);
  var z0 = Be && "TextEvent" in window && !Xa,
    ps = Be && (!Hi || (Xa && 8 < Xa && 11 >= Xa)),
    Es = " ",
    Ts = !1;
  function As(t, e) {
    switch (t) {
      case "keyup":
        return _0.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Os(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var ea = !1;
  function D0(t, e) {
    switch (t) {
      case "compositionend":
        return Os(e);
      case "keypress":
        return e.which !== 32 ? null : ((Ts = !0), Es);
      case "textInput":
        return (t = e.data), t === Es && Ts ? null : t;
      default:
        return null;
    }
  }
  function U0(t, e) {
    if (ea)
      return t === "compositionend" || (!Hi && As(t, e))
        ? ((t = ms()), (Vu = Ui = Ie = null), (ea = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return ps && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var M0 = {
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
  function Rs(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!M0[t.type] : e === "textarea";
  }
  function _s(t, e, l, a) {
    Il ? (ta ? ta.push(a) : (ta = [a])) : (Il = a),
      (e = Bn(e, "onChange")),
      0 < e.length &&
        ((l = new ku("onChange", "change", null, l, a)),
        t.push({ event: l, listeners: e }));
  }
  var wa = null,
    Qa = null;
  function N0(t) {
    cd(t, 0);
  }
  function Fu(t) {
    var e = Ba(t);
    if (cs(e)) return t;
  }
  function zs(t, e) {
    if (t === "change") return e;
  }
  var Ds = !1;
  if (Be) {
    var qi;
    if (Be) {
      var Bi = "oninput" in document;
      if (!Bi) {
        var Us = document.createElement("div");
        Us.setAttribute("oninput", "return;"),
          (Bi = typeof Us.oninput == "function");
      }
      qi = Bi;
    } else qi = !1;
    Ds = qi && (!document.documentMode || 9 < document.documentMode);
  }
  function Ms() {
    wa && (wa.detachEvent("onpropertychange", Ns), (Qa = wa = null));
  }
  function Ns(t) {
    if (t.propertyName === "value" && Fu(Qa)) {
      var e = [];
      _s(e, Qa, t, _i(t)), ys(N0, e);
    }
  }
  function x0(t, e, l) {
    t === "focusin"
      ? (Ms(), (wa = e), (Qa = l), wa.attachEvent("onpropertychange", Ns))
      : t === "focusout" && Ms();
  }
  function C0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Fu(Qa);
  }
  function H0(t, e) {
    if (t === "click") return Fu(e);
  }
  function q0(t, e) {
    if (t === "input" || t === "change") return Fu(e);
  }
  function B0(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ce = typeof Object.is == "function" ? Object.is : B0;
  function Za(t, e) {
    if (ce(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var u = l[a];
      if (!oi.call(e, u) || !ce(t[u], e[u])) return !1;
    }
    return !0;
  }
  function xs(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Cs(t, e) {
    var l = xs(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e))
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = xs(l);
    }
  }
  function Hs(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? Hs(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function qs(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Qu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Qu(t.document);
    }
    return e;
  }
  function ji(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var j0 = Be && "documentMode" in document && 11 >= document.documentMode,
    la = null,
    Yi = null,
    Va = null,
    Li = !1;
  function Bs(t, e, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Li ||
      la == null ||
      la !== Qu(a) ||
      ((a = la),
      "selectionStart" in a && ji(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Va && Za(Va, a)) ||
        ((Va = a),
        (a = Bn(Yi, "onSelect")),
        0 < a.length &&
          ((e = new ku("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = la))));
  }
  function _l(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var aa = {
      animationend: _l("Animation", "AnimationEnd"),
      animationiteration: _l("Animation", "AnimationIteration"),
      animationstart: _l("Animation", "AnimationStart"),
      transitionrun: _l("Transition", "TransitionRun"),
      transitionstart: _l("Transition", "TransitionStart"),
      transitioncancel: _l("Transition", "TransitionCancel"),
      transitionend: _l("Transition", "TransitionEnd"),
    },
    Gi = {},
    js = {};
  Be &&
    ((js = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete aa.animationend.animation,
      delete aa.animationiteration.animation,
      delete aa.animationstart.animation),
    "TransitionEvent" in window || delete aa.transitionend.transition);
  function zl(t) {
    if (Gi[t]) return Gi[t];
    if (!aa[t]) return t;
    var e = aa[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in js) return (Gi[t] = e[l]);
    return t;
  }
  var Ys = zl("animationend"),
    Ls = zl("animationiteration"),
    Gs = zl("animationstart"),
    Y0 = zl("transitionrun"),
    L0 = zl("transitionstart"),
    G0 = zl("transitioncancel"),
    Xs = zl("transitionend"),
    ws = new Map(),
    Xi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Xi.push("scrollEnd");
  function Ae(t, e) {
    ws.set(t, e), Ol(e, [t]);
  }
  var Qs = new WeakMap();
  function ve(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Qs.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: ns(e) }), Qs.set(t, e), e);
    }
    return { value: t, source: e, stack: ns(e) };
  }
  var Se = [],
    ua = 0,
    wi = 0;
  function Wu() {
    for (var t = ua, e = (wi = ua = 0); e < t; ) {
      var l = Se[e];
      Se[e++] = null;
      var a = Se[e];
      Se[e++] = null;
      var u = Se[e];
      Se[e++] = null;
      var n = Se[e];
      if (((Se[e++] = null), a !== null && u !== null)) {
        var s = a.pending;
        s === null ? (u.next = u) : ((u.next = s.next), (s.next = u)),
          (a.pending = u);
      }
      n !== 0 && Zs(l, u, n);
    }
  }
  function Pu(t, e, l, a) {
    (Se[ua++] = t),
      (Se[ua++] = e),
      (Se[ua++] = l),
      (Se[ua++] = a),
      (wi |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function Qi(t, e, l, a) {
    return Pu(t, e, l, a), Iu(t);
  }
  function na(t, e) {
    return Pu(t, null, null, e), Iu(t);
  }
  function Zs(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var u = !1, n = t.return; n !== null; )
      (n.childLanes |= l),
        (a = n.alternate),
        a !== null && (a.childLanes |= l),
        n.tag === 22 &&
          ((t = n.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = n),
        (n = n.return);
    return t.tag === 3
      ? ((n = t.stateNode),
        u &&
          e !== null &&
          ((u = 31 - ie(l)),
          (t = n.hiddenUpdates),
          (a = t[u]),
          a === null ? (t[u] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        n)
      : null;
  }
  function Iu(t) {
    if (50 < vu) throw ((vu = 0), ($c = null), Error(f(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var ia = {};
  function X0(t, e, l, a) {
    (this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function fe(t, e, l, a) {
    return new X0(t, e, l, a);
  }
  function Zi(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function je(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = fe(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function Vs(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function tn(t, e, l, a, u, n) {
    var s = 0;
    if (((a = t), typeof t == "function")) Zi(t) && (s = 1);
    else if (typeof t == "string")
      s = Qy(t, l, Z.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case ae:
          return (t = fe(31, l, e, u)), (t.elementType = ae), (t.lanes = n), t;
        case H:
          return Dl(l.children, u, n, e);
        case w:
          (s = 8), (u |= 24);
          break;
        case q:
          return (
            (t = fe(12, l, e, u | 2)), (t.elementType = q), (t.lanes = n), t
          );
        case F:
          return (t = fe(13, l, e, u)), (t.elementType = F), (t.lanes = n), t;
        case At:
          return (t = fe(19, l, e, u)), (t.elementType = At), (t.lanes = n), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case ct:
              case P:
                s = 10;
                break t;
              case nt:
                s = 9;
                break t;
              case bt:
                s = 11;
                break t;
              case _t:
                s = 14;
                break t;
              case Ht:
                (s = 16), (a = null);
                break t;
            }
          (s = 29),
            (l = Error(f(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (e = fe(s, l, e, u)), (e.elementType = t), (e.type = a), (e.lanes = n), e
    );
  }
  function Dl(t, e, l, a) {
    return (t = fe(7, t, a, e)), (t.lanes = l), t;
  }
  function Vi(t, e, l) {
    return (t = fe(6, t, null, e)), (t.lanes = l), t;
  }
  function Ki(t, e, l) {
    return (
      (e = fe(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var ca = [],
    fa = 0,
    en = null,
    ln = 0,
    ge = [],
    be = 0,
    Ul = null,
    Ye = 1,
    Le = "";
  function Ml(t, e) {
    (ca[fa++] = ln), (ca[fa++] = en), (en = t), (ln = e);
  }
  function Ks(t, e, l) {
    (ge[be++] = Ye), (ge[be++] = Le), (ge[be++] = Ul), (Ul = t);
    var a = Ye;
    t = Le;
    var u = 32 - ie(a) - 1;
    (a &= ~(1 << u)), (l += 1);
    var n = 32 - ie(e) + u;
    if (30 < n) {
      var s = u - (u % 5);
      (n = (a & ((1 << s) - 1)).toString(32)),
        (a >>= s),
        (u -= s),
        (Ye = (1 << (32 - ie(e) + u)) | (l << u) | a),
        (Le = n + t);
    } else (Ye = (1 << n) | (l << u) | a), (Le = t);
  }
  function Ji(t) {
    t.return !== null && (Ml(t, 1), Ks(t, 1, 0));
  }
  function ki(t) {
    for (; t === en; )
      (en = ca[--fa]), (ca[fa] = null), (ln = ca[--fa]), (ca[fa] = null);
    for (; t === Ul; )
      (Ul = ge[--be]),
        (ge[be] = null),
        (Le = ge[--be]),
        (ge[be] = null),
        (Ye = ge[--be]),
        (ge[be] = null);
  }
  var kt = null,
    Ot = null,
    rt = !1,
    Nl = null,
    De = !1,
    $i = Error(f(519));
  function xl(t) {
    var e = Error(f(418, ""));
    throw (ka(ve(e, t)), $i);
  }
  function Js(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Zt] = t), (e[Ft] = a), l)) {
      case "dialog":
        ut("cancel", e), ut("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ut("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < gu.length; l++) ut(gu[l], e);
        break;
      case "source":
        ut("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ut("error", e), ut("load", e);
        break;
      case "details":
        ut("toggle", e);
        break;
      case "input":
        ut("invalid", e),
          fs(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          wu(e);
        break;
      case "select":
        ut("invalid", e);
        break;
      case "textarea":
        ut("invalid", e), rs(e, a.value, a.defaultValue, a.children), wu(e);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      od(e.textContent, l)
        ? (a.popover != null && (ut("beforetoggle", e), ut("toggle", e)),
          a.onScroll != null && ut("scroll", e),
          a.onScrollEnd != null && ut("scrollend", e),
          a.onClick != null && (e.onclick = jn),
          (e = !0))
        : (e = !1),
      e || xl(t);
  }
  function ks(t) {
    for (kt = t.return; kt; )
      switch (kt.tag) {
        case 5:
        case 13:
          De = !1;
          return;
        case 27:
        case 3:
          De = !0;
          return;
        default:
          kt = kt.return;
      }
  }
  function Ka(t) {
    if (t !== kt) return !1;
    if (!rt) return ks(t), (rt = !0), !1;
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || df(t.type, t.memoizedProps))),
        (l = !l)),
      l && Ot && xl(t),
      ks(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(f(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((l = t.data), l === "/$")) {
              if (e === 0) {
                Ot = Re(t.nextSibling);
                break t;
              }
              e--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || e++;
          t = t.nextSibling;
        }
        Ot = null;
      }
    } else
      e === 27
        ? ((e = Ot), ml(t.type) ? ((t = vf), (vf = null), (Ot = t)) : (Ot = e))
        : (Ot = kt ? Re(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Ja() {
    (Ot = kt = null), (rt = !1);
  }
  function $s() {
    var t = Nl;
    return (
      t !== null &&
        (te === null ? (te = t) : te.push.apply(te, t), (Nl = null)),
      t
    );
  }
  function ka(t) {
    Nl === null ? (Nl = [t]) : Nl.push(t);
  }
  var Fi = x(null),
    Cl = null,
    Ge = null;
  function tl(t, e, l) {
    B(Fi, e._currentValue), (e._currentValue = l);
  }
  function Xe(t) {
    (t._currentValue = Fi.current), G(Fi);
  }
  function Wi(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function Pi(t, e, l, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var s = u.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var o = n;
          n = u;
          for (var h = 0; h < e.length; h++)
            if (o.context === e[h]) {
              (n.lanes |= l),
                (o = n.alternate),
                o !== null && (o.lanes |= l),
                Wi(n.return, l, t),
                a || (s = null);
              break t;
            }
          n = o.next;
        }
      } else if (u.tag === 18) {
        if (((s = u.return), s === null)) throw Error(f(341));
        (s.lanes |= l),
          (n = s.alternate),
          n !== null && (n.lanes |= l),
          Wi(s, l, t),
          (s = null);
      } else s = u.child;
      if (s !== null) s.return = u;
      else
        for (s = u; s !== null; ) {
          if (s === t) {
            s = null;
            break;
          }
          if (((u = s.sibling), u !== null)) {
            (u.return = s.return), (s = u);
            break;
          }
          s = s.return;
        }
      u = s;
    }
  }
  function $a(t, e, l, a) {
    t = null;
    for (var u = e, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var s = u.alternate;
        if (s === null) throw Error(f(387));
        if (((s = s.memoizedProps), s !== null)) {
          var o = u.type;
          ce(u.pendingProps.value, s.value) ||
            (t !== null ? t.push(o) : (t = [o]));
        }
      } else if (u === ue.current) {
        if (((s = u.alternate), s === null)) throw Error(f(387));
        s.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(Ou) : (t = [Ou]));
      }
      u = u.return;
    }
    t !== null && Pi(e, t, l, a), (e.flags |= 262144);
  }
  function an(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ce(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Hl(t) {
    (Cl = t),
      (Ge = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Vt(t) {
    return Fs(Cl, t);
  }
  function un(t, e) {
    return Cl === null && Hl(t), Fs(t, e);
  }
  function Fs(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), Ge === null)) {
      if (t === null) throw Error(f(308));
      (Ge = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else Ge = Ge.next = e;
    return l;
  }
  var w0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                });
            };
          },
    Q0 = i.unstable_scheduleCallback,
    Z0 = i.unstable_NormalPriority,
    xt = {
      $$typeof: P,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ii() {
    return { controller: new w0(), data: new Map(), refCount: 0 };
  }
  function Fa(t) {
    t.refCount--,
      t.refCount === 0 &&
        Q0(Z0, function () {
          t.controller.abort();
        });
  }
  var Wa = null,
    tc = 0,
    sa = 0,
    ra = null;
  function V0(t, e) {
    if (Wa === null) {
      var l = (Wa = []);
      (tc = 0),
        (sa = lf()),
        (ra = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return tc++, e.then(Ws, Ws), e;
  }
  function Ws() {
    if (--tc === 0 && Wa !== null) {
      ra !== null && (ra.status = "fulfilled");
      var t = Wa;
      (Wa = null), (sa = 0), (ra = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function K0(t, e) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          l.push(u);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var u = 0; u < l.length; u++) (0, l[u])(e);
        },
        function (u) {
          for (a.status = "rejected", a.reason = u, u = 0; u < l.length; u++)
            (0, l[u])(void 0);
        }
      ),
      a
    );
  }
  var Ps = U.S;
  U.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      V0(t, e),
      Ps !== null && Ps(t, e);
  };
  var ql = x(null);
  function ec() {
    var t = ql.current;
    return t !== null ? t : gt.pooledCache;
  }
  function nn(t, e) {
    e === null ? B(ql, ql.current) : B(ql, e.pool);
  }
  function Is() {
    var t = ec();
    return t === null ? null : { parent: xt._currentValue, pool: t };
  }
  var Pa = Error(f(460)),
    tr = Error(f(474)),
    cn = Error(f(542)),
    lc = { then: function () {} };
  function er(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function fn() {}
  function lr(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(fn, fn), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), ur(t), t);
      default:
        if (typeof e.status == "string") e.then(fn, fn);
        else {
          if (((t = gt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(f(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var u = e;
                  (u.status = "fulfilled"), (u.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var u = e;
                  (u.status = "rejected"), (u.reason = a);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), ur(t), t);
        }
        throw ((Ia = e), Pa);
    }
  }
  var Ia = null;
  function ar() {
    if (Ia === null) throw Error(f(459));
    var t = Ia;
    return (Ia = null), t;
  }
  function ur(t) {
    if (t === Pa || t === cn) throw Error(f(483));
  }
  var el = !1;
  function ac(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function uc(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function ll(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function al(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (ot & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)),
        (a.pending = e),
        (e = Iu(t)),
        Zs(t, null, l),
        e
      );
    }
    return Pu(t, a, e, l), Iu(t);
  }
  function tu(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), Wf(t, l);
    }
  }
  function nc(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var u = null,
        n = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var s = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          n === null ? (u = n = s) : (n = n.next = s), (l = l.next);
        } while (l !== null);
        n === null ? (u = n = e) : (n = n.next = e);
      } else u = n = e;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l);
      return;
    }
    (t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e);
  }
  var ic = !1;
  function eu() {
    if (ic) {
      var t = ra;
      if (t !== null) throw t;
    }
  }
  function lu(t, e, l, a) {
    ic = !1;
    var u = t.updateQueue;
    el = !1;
    var n = u.firstBaseUpdate,
      s = u.lastBaseUpdate,
      o = u.shared.pending;
    if (o !== null) {
      u.shared.pending = null;
      var h = o,
        E = h.next;
      (h.next = null), s === null ? (n = E) : (s.next = E), (s = h);
      var D = t.alternate;
      D !== null &&
        ((D = D.updateQueue),
        (o = D.lastBaseUpdate),
        o !== s &&
          (o === null ? (D.firstBaseUpdate = E) : (o.next = E),
          (D.lastBaseUpdate = h)));
    }
    if (n !== null) {
      var N = u.baseState;
      (s = 0), (D = E = h = null), (o = n);
      do {
        var T = o.lane & -536870913,
          A = T !== o.lane;
        if (A ? (it & T) === T : (a & T) === T) {
          T !== 0 && T === sa && (ic = !0),
            D !== null &&
              (D = D.next =
                {
                  lane: 0,
                  tag: o.tag,
                  payload: o.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var k = t,
              V = o;
            T = e;
            var mt = l;
            switch (V.tag) {
              case 1:
                if (((k = V.payload), typeof k == "function")) {
                  N = k.call(mt, N, T);
                  break t;
                }
                N = k;
                break t;
              case 3:
                k.flags = (k.flags & -65537) | 128;
              case 0:
                if (
                  ((k = V.payload),
                  (T = typeof k == "function" ? k.call(mt, N, T) : k),
                  T == null)
                )
                  break t;
                N = O({}, N, T);
                break t;
              case 2:
                el = !0;
            }
          }
          (T = o.callback),
            T !== null &&
              ((t.flags |= 64),
              A && (t.flags |= 8192),
              (A = u.callbacks),
              A === null ? (u.callbacks = [T]) : A.push(T));
        } else
          (A = {
            lane: T,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            D === null ? ((E = D = A), (h = N)) : (D = D.next = A),
            (s |= T);
        if (((o = o.next), o === null)) {
          if (((o = u.shared.pending), o === null)) break;
          (A = o),
            (o = A.next),
            (A.next = null),
            (u.lastBaseUpdate = A),
            (u.shared.pending = null);
        }
      } while (!0);
      D === null && (h = N),
        (u.baseState = h),
        (u.firstBaseUpdate = E),
        (u.lastBaseUpdate = D),
        n === null && (u.shared.lanes = 0),
        (ol |= s),
        (t.lanes = s),
        (t.memoizedState = N);
    }
  }
  function nr(t, e) {
    if (typeof t != "function") throw Error(f(191, t));
    t.call(e);
  }
  function ir(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) nr(l[t], e);
  }
  var oa = x(null),
    sn = x(0);
  function cr(t, e) {
    (t = ke), B(sn, t), B(oa, e), (ke = t | e.baseLanes);
  }
  function cc() {
    B(sn, ke), B(oa, oa.current);
  }
  function fc() {
    (ke = sn.current), G(oa), G(sn);
  }
  var ul = 0,
    et = null,
    ht = null,
    Mt = null,
    rn = !1,
    da = !1,
    Bl = !1,
    on = 0,
    au = 0,
    ha = null,
    J0 = 0;
  function zt() {
    throw Error(f(321));
  }
  function sc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ce(t[l], e[l])) return !1;
    return !0;
  }
  function rc(t, e, l, a, u, n) {
    return (
      (ul = n),
      (et = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (U.H = t === null || t.memoizedState === null ? Zr : Vr),
      (Bl = !1),
      (n = l(a, u)),
      (Bl = !1),
      da && (n = sr(e, l, a, u)),
      fr(t),
      n
    );
  }
  function fr(t) {
    U.H = Sn;
    var e = ht !== null && ht.next !== null;
    if (((ul = 0), (Mt = ht = et = null), (rn = !1), (au = 0), (ha = null), e))
      throw Error(f(300));
    t === null ||
      Bt ||
      ((t = t.dependencies), t !== null && an(t) && (Bt = !0));
  }
  function sr(t, e, l, a) {
    et = t;
    var u = 0;
    do {
      if ((da && (ha = null), (au = 0), (da = !1), 25 <= u))
        throw Error(f(301));
      if (((u += 1), (Mt = ht = null), t.updateQueue != null)) {
        var n = t.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (U.H = ty), (n = e(l, a));
    } while (da);
    return n;
  }
  function k0() {
    var t = U.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? uu(e) : e),
      (t = t.useState()[0]),
      (ht !== null ? ht.memoizedState : null) !== t && (et.flags |= 1024),
      e
    );
  }
  function oc() {
    var t = on !== 0;
    return (on = 0), t;
  }
  function dc(t, e, l) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l);
  }
  function hc(t) {
    if (rn) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      rn = !1;
    }
    (ul = 0), (Mt = ht = et = null), (da = !1), (au = on = 0), (ha = null);
  }
  function Pt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Mt === null ? (et.memoizedState = Mt = t) : (Mt = Mt.next = t), Mt;
  }
  function Nt() {
    if (ht === null) {
      var t = et.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ht.next;
    var e = Mt === null ? et.memoizedState : Mt.next;
    if (e !== null) (Mt = e), (ht = t);
    else {
      if (t === null)
        throw et.alternate === null ? Error(f(467)) : Error(f(310));
      (ht = t),
        (t = {
          memoizedState: ht.memoizedState,
          baseState: ht.baseState,
          baseQueue: ht.baseQueue,
          queue: ht.queue,
          next: null,
        }),
        Mt === null ? (et.memoizedState = Mt = t) : (Mt = Mt.next = t);
    }
    return Mt;
  }
  function yc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function uu(t) {
    var e = au;
    return (
      (au += 1),
      ha === null && (ha = []),
      (t = lr(ha, t, e)),
      (e = et),
      (Mt === null ? e.memoizedState : Mt.next) === null &&
        ((e = e.alternate),
        (U.H = e === null || e.memoizedState === null ? Zr : Vr)),
      t
    );
  }
  function dn(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return uu(t);
      if (t.$$typeof === P) return Vt(t);
    }
    throw Error(f(438, String(t)));
  }
  function mc(t) {
    var e = null,
      l = et.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = et.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = yc()), (et.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = Zl;
    return e.index++, l;
  }
  function we(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function hn(t) {
    var e = Nt();
    return vc(e, ht, t);
  }
  function vc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var u = t.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var s = u.next;
        (u.next = n.next), (n.next = s);
      }
      (e.baseQueue = u = n), (a.pending = null);
    }
    if (((n = t.baseState), u === null)) t.memoizedState = n;
    else {
      e = u.next;
      var o = (s = null),
        h = null,
        E = e,
        D = !1;
      do {
        var N = E.lane & -536870913;
        if (N !== E.lane ? (it & N) === N : (ul & N) === N) {
          var T = E.revertLane;
          if (T === 0)
            h !== null &&
              (h = h.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: E.action,
                  hasEagerState: E.hasEagerState,
                  eagerState: E.eagerState,
                  next: null,
                }),
              N === sa && (D = !0);
          else if ((ul & T) === T) {
            (E = E.next), T === sa && (D = !0);
            continue;
          } else
            (N = {
              lane: 0,
              revertLane: E.revertLane,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null,
            }),
              h === null ? ((o = h = N), (s = n)) : (h = h.next = N),
              (et.lanes |= T),
              (ol |= T);
          (N = E.action),
            Bl && l(n, N),
            (n = E.hasEagerState ? E.eagerState : l(n, N));
        } else
          (T = {
            lane: N,
            revertLane: E.revertLane,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          }),
            h === null ? ((o = h = T), (s = n)) : (h = h.next = T),
            (et.lanes |= N),
            (ol |= N);
        E = E.next;
      } while (E !== null && E !== e);
      if (
        (h === null ? (s = n) : (h.next = o),
        !ce(n, t.memoizedState) && ((Bt = !0), D && ((l = ra), l !== null)))
      )
        throw l;
      (t.memoizedState = n),
        (t.baseState = s),
        (t.baseQueue = h),
        (a.lastRenderedState = n);
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Sc(t) {
    var e = Nt(),
      l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      u = l.pending,
      n = e.memoizedState;
    if (u !== null) {
      l.pending = null;
      var s = (u = u.next);
      do (n = t(n, s.action)), (s = s.next);
      while (s !== u);
      ce(n, e.memoizedState) || (Bt = !0),
        (e.memoizedState = n),
        e.baseQueue === null && (e.baseState = n),
        (l.lastRenderedState = n);
    }
    return [n, a];
  }
  function rr(t, e, l) {
    var a = et,
      u = Nt(),
      n = rt;
    if (n) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var s = !ce((ht || u).memoizedState, l);
    s && ((u.memoizedState = l), (Bt = !0)), (u = u.queue);
    var o = hr.bind(null, a, u, t);
    if (
      (nu(2048, 8, o, [t]),
      u.getSnapshot !== e || s || (Mt !== null && Mt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ya(9, yn(), dr.bind(null, a, u, l, e), null),
        gt === null)
      )
        throw Error(f(349));
      n || (ul & 124) !== 0 || or(a, e, l);
    }
    return l;
  }
  function or(t, e, l) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = et.updateQueue),
      e === null
        ? ((e = yc()), (et.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t));
  }
  function dr(t, e, l, a) {
    (e.value = l), (e.getSnapshot = a), yr(e) && mr(t);
  }
  function hr(t, e, l) {
    return l(function () {
      yr(e) && mr(t);
    });
  }
  function yr(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ce(t, l);
    } catch {
      return !0;
    }
  }
  function mr(t) {
    var e = na(t, 2);
    e !== null && he(e, t, 2);
  }
  function gc(t) {
    var e = Pt();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), Bl)) {
        We(!0);
        try {
          l();
        } finally {
          We(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: we,
        lastRenderedState: t,
      }),
      e
    );
  }
  function vr(t, e, l, a) {
    return (t.baseState = l), vc(t, ht, typeof a == "function" ? a : we);
  }
  function $0(t, e, l, a, u) {
    if (vn(t)) throw Error(f(485));
    if (((t = e.action), t !== null)) {
      var n = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (s) {
          n.listeners.push(s);
        },
      };
      U.T !== null ? l(!0) : (n.isTransition = !1),
        a(n),
        (l = e.pending),
        l === null
          ? ((n.next = e.pending = n), Sr(e, n))
          : ((n.next = l.next), (e.pending = l.next = n));
    }
  }
  function Sr(t, e) {
    var l = e.action,
      a = e.payload,
      u = t.state;
    if (e.isTransition) {
      var n = U.T,
        s = {};
      U.T = s;
      try {
        var o = l(u, a),
          h = U.S;
        h !== null && h(s, o), gr(t, e, o);
      } catch (E) {
        bc(t, e, E);
      } finally {
        U.T = n;
      }
    } else
      try {
        (n = l(u, a)), gr(t, e, n);
      } catch (E) {
        bc(t, e, E);
      }
  }
  function gr(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            br(t, e, a);
          },
          function (a) {
            return bc(t, e, a);
          }
        )
      : br(t, e, l);
  }
  function br(t, e, l) {
    (e.status = "fulfilled"),
      (e.value = l),
      pr(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), Sr(t, l)));
  }
  function bc(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = l), pr(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function pr(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Er(t, e) {
    return e;
  }
  function Tr(t, e) {
    if (rt) {
      var l = gt.formState;
      if (l !== null) {
        t: {
          var a = et;
          if (rt) {
            if (Ot) {
              e: {
                for (var u = Ot, n = De; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break e;
                  }
                  if (((u = Re(u.nextSibling)), u === null)) {
                    u = null;
                    break e;
                  }
                }
                (n = u.data), (u = n === "F!" || n === "F" ? u : null);
              }
              if (u) {
                (Ot = Re(u.nextSibling)), (a = u.data === "F!");
                break t;
              }
            }
            xl(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = Pt()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Er,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = Xr.bind(null, et, a)),
      (a.dispatch = l),
      (a = gc(!1)),
      (n = Oc.bind(null, et, !1, a.queue)),
      (a = Pt()),
      (u = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = u),
      (l = $0.bind(null, et, u, n, l)),
      (u.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function Ar(t) {
    var e = Nt();
    return Or(e, ht, t);
  }
  function Or(t, e, l) {
    if (
      ((e = vc(t, e, Er)[0]),
      (t = hn(we)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = uu(e);
      } catch (s) {
        throw s === Pa ? cn : s;
      }
    else a = e;
    e = Nt();
    var u = e.queue,
      n = u.dispatch;
    return (
      l !== e.memoizedState &&
        ((et.flags |= 2048), ya(9, yn(), F0.bind(null, u, l), null)),
      [a, n, t]
    );
  }
  function F0(t, e) {
    t.action = e;
  }
  function Rr(t) {
    var e = Nt(),
      l = ht;
    if (l !== null) return Or(e, l, t);
    Nt(), (e = e.memoizedState), (l = Nt());
    var a = l.queue.dispatch;
    return (l.memoizedState = t), [e, a, !1];
  }
  function ya(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = et.updateQueue),
      e === null && ((e = yc()), (et.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function yn() {
    return { destroy: void 0, resource: void 0 };
  }
  function _r() {
    return Nt().memoizedState;
  }
  function mn(t, e, l, a) {
    var u = Pt();
    (a = a === void 0 ? null : a),
      (et.flags |= t),
      (u.memoizedState = ya(1 | e, yn(), l, a));
  }
  function nu(t, e, l, a) {
    var u = Nt();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    ht !== null && a !== null && sc(a, ht.memoizedState.deps)
      ? (u.memoizedState = ya(e, n, l, a))
      : ((et.flags |= t), (u.memoizedState = ya(1 | e, n, l, a)));
  }
  function zr(t, e) {
    mn(8390656, 8, t, e);
  }
  function Dr(t, e) {
    nu(2048, 8, t, e);
  }
  function Ur(t, e) {
    return nu(4, 2, t, e);
  }
  function Mr(t, e) {
    return nu(4, 4, t, e);
  }
  function Nr(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function xr(t, e, l) {
    (l = l != null ? l.concat([t]) : null), nu(4, 4, Nr.bind(null, e, t), l);
  }
  function pc() {}
  function Cr(t, e) {
    var l = Nt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && sc(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function Hr(t, e) {
    var l = Nt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && sc(e, a[1])) return a[0];
    if (((a = t()), Bl)) {
      We(!0);
      try {
        t();
      } finally {
        We(!1);
      }
    }
    return (l.memoizedState = [a, e]), a;
  }
  function Ec(t, e, l) {
    return l === void 0 || (ul & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = Yo()), (et.lanes |= t), (ol |= t), l);
  }
  function qr(t, e, l, a) {
    return ce(l, e)
      ? l
      : oa.current !== null
      ? ((t = Ec(t, l, a)), ce(t, e) || (Bt = !0), t)
      : (ul & 42) === 0
      ? ((Bt = !0), (t.memoizedState = l))
      : ((t = Yo()), (et.lanes |= t), (ol |= t), e);
  }
  function Br(t, e, l, a, u) {
    var n = j.p;
    j.p = n !== 0 && 8 > n ? n : 8;
    var s = U.T,
      o = {};
    (U.T = o), Oc(t, !1, e, l);
    try {
      var h = u(),
        E = U.S;
      if (
        (E !== null && E(o, h),
        h !== null && typeof h == "object" && typeof h.then == "function")
      ) {
        var D = K0(h, a);
        iu(t, e, D, de(t));
      } else iu(t, e, a, de(t));
    } catch (N) {
      iu(t, e, { then: function () {}, status: "rejected", reason: N }, de());
    } finally {
      (j.p = n), (U.T = s);
    }
  }
  function W0() {}
  function Tc(t, e, l, a) {
    if (t.tag !== 5) throw Error(f(476));
    var u = jr(t).queue;
    Br(
      t,
      u,
      e,
      J,
      l === null
        ? W0
        : function () {
            return Yr(t), l(a);
          }
    );
  }
  function jr(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: J,
      baseState: J,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: we,
        lastRenderedState: J,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: we,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Yr(t) {
    var e = jr(t).next.queue;
    iu(t, e, {}, de());
  }
  function Ac() {
    return Vt(Ou);
  }
  function Lr() {
    return Nt().memoizedState;
  }
  function Gr() {
    return Nt().memoizedState;
  }
  function P0(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = de();
          t = ll(l);
          var a = al(e, t, l);
          a !== null && (he(a, e, l), tu(a, e, l)),
            (e = { cache: Ii() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function I0(t, e, l) {
    var a = de();
    (l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      vn(t)
        ? wr(e, l)
        : ((l = Qi(t, e, l, a)), l !== null && (he(l, t, a), Qr(l, e, a)));
  }
  function Xr(t, e, l) {
    var a = de();
    iu(t, e, l, a);
  }
  function iu(t, e, l, a) {
    var u = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (vn(t)) wr(e, u);
    else {
      var n = t.alternate;
      if (
        t.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = e.lastRenderedReducer), n !== null)
      )
        try {
          var s = e.lastRenderedState,
            o = n(s, l);
          if (((u.hasEagerState = !0), (u.eagerState = o), ce(o, s)))
            return Pu(t, e, u, 0), gt === null && Wu(), !1;
        } catch {
        } finally {
        }
      if (((l = Qi(t, e, u, a)), l !== null))
        return he(l, t, a), Qr(l, e, a), !0;
    }
    return !1;
  }
  function Oc(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: lf(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      vn(t))
    ) {
      if (e) throw Error(f(479));
    } else (e = Qi(t, l, a, 2)), e !== null && he(e, t, 2);
  }
  function vn(t) {
    var e = t.alternate;
    return t === et || (e !== null && e === et);
  }
  function wr(t, e) {
    da = rn = !0;
    var l = t.pending;
    l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e);
  }
  function Qr(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), Wf(t, l);
    }
  }
  var Sn = {
      readContext: Vt,
      use: dn,
      useCallback: zt,
      useContext: zt,
      useEffect: zt,
      useImperativeHandle: zt,
      useLayoutEffect: zt,
      useInsertionEffect: zt,
      useMemo: zt,
      useReducer: zt,
      useRef: zt,
      useState: zt,
      useDebugValue: zt,
      useDeferredValue: zt,
      useTransition: zt,
      useSyncExternalStore: zt,
      useId: zt,
      useHostTransitionStatus: zt,
      useFormState: zt,
      useActionState: zt,
      useOptimistic: zt,
      useMemoCache: zt,
      useCacheRefresh: zt,
    },
    Zr = {
      readContext: Vt,
      use: dn,
      useCallback: function (t, e) {
        return (Pt().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: Vt,
      useEffect: zr,
      useImperativeHandle: function (t, e, l) {
        (l = l != null ? l.concat([t]) : null),
          mn(4194308, 4, Nr.bind(null, e, t), l);
      },
      useLayoutEffect: function (t, e) {
        return mn(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        mn(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = Pt();
        e = e === void 0 ? null : e;
        var a = t();
        if (Bl) {
          We(!0);
          try {
            t();
          } finally {
            We(!1);
          }
        }
        return (l.memoizedState = [a, e]), a;
      },
      useReducer: function (t, e, l) {
        var a = Pt();
        if (l !== void 0) {
          var u = l(e);
          if (Bl) {
            We(!0);
            try {
              l(e);
            } finally {
              We(!1);
            }
          }
        } else u = e;
        return (
          (a.memoizedState = a.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u,
          }),
          (a.queue = t),
          (t = t.dispatch = I0.bind(null, et, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Pt();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = gc(t);
        var e = t.queue,
          l = Xr.bind(null, et, e);
        return (e.dispatch = l), [t.memoizedState, l];
      },
      useDebugValue: pc,
      useDeferredValue: function (t, e) {
        var l = Pt();
        return Ec(l, t, e);
      },
      useTransition: function () {
        var t = gc(!1);
        return (
          (t = Br.bind(null, et, t.queue, !0, !1)),
          (Pt().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var a = et,
          u = Pt();
        if (rt) {
          if (l === void 0) throw Error(f(407));
          l = l();
        } else {
          if (((l = e()), gt === null)) throw Error(f(349));
          (it & 124) !== 0 || or(a, e, l);
        }
        u.memoizedState = l;
        var n = { value: l, getSnapshot: e };
        return (
          (u.queue = n),
          zr(hr.bind(null, a, n, t), [t]),
          (a.flags |= 2048),
          ya(9, yn(), dr.bind(null, a, n, l, e), null),
          l
        );
      },
      useId: function () {
        var t = Pt(),
          e = gt.identifierPrefix;
        if (rt) {
          var l = Le,
            a = Ye;
          (l = (a & ~(1 << (32 - ie(a) - 1))).toString(32) + l),
            (e = "«" + e + "R" + l),
            (l = on++),
            0 < l && (e += "H" + l.toString(32)),
            (e += "»");
        } else (l = J0++), (e = "«" + e + "r" + l.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Ac,
      useFormState: Tr,
      useActionState: Tr,
      useOptimistic: function (t) {
        var e = Pt();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l),
          (e = Oc.bind(null, et, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: mc,
      useCacheRefresh: function () {
        return (Pt().memoizedState = P0.bind(null, et));
      },
    },
    Vr = {
      readContext: Vt,
      use: dn,
      useCallback: Cr,
      useContext: Vt,
      useEffect: Dr,
      useImperativeHandle: xr,
      useInsertionEffect: Ur,
      useLayoutEffect: Mr,
      useMemo: Hr,
      useReducer: hn,
      useRef: _r,
      useState: function () {
        return hn(we);
      },
      useDebugValue: pc,
      useDeferredValue: function (t, e) {
        var l = Nt();
        return qr(l, ht.memoizedState, t, e);
      },
      useTransition: function () {
        var t = hn(we)[0],
          e = Nt().memoizedState;
        return [typeof t == "boolean" ? t : uu(t), e];
      },
      useSyncExternalStore: rr,
      useId: Lr,
      useHostTransitionStatus: Ac,
      useFormState: Ar,
      useActionState: Ar,
      useOptimistic: function (t, e) {
        var l = Nt();
        return vr(l, ht, t, e);
      },
      useMemoCache: mc,
      useCacheRefresh: Gr,
    },
    ty = {
      readContext: Vt,
      use: dn,
      useCallback: Cr,
      useContext: Vt,
      useEffect: Dr,
      useImperativeHandle: xr,
      useInsertionEffect: Ur,
      useLayoutEffect: Mr,
      useMemo: Hr,
      useReducer: Sc,
      useRef: _r,
      useState: function () {
        return Sc(we);
      },
      useDebugValue: pc,
      useDeferredValue: function (t, e) {
        var l = Nt();
        return ht === null ? Ec(l, t, e) : qr(l, ht.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Sc(we)[0],
          e = Nt().memoizedState;
        return [typeof t == "boolean" ? t : uu(t), e];
      },
      useSyncExternalStore: rr,
      useId: Lr,
      useHostTransitionStatus: Ac,
      useFormState: Rr,
      useActionState: Rr,
      useOptimistic: function (t, e) {
        var l = Nt();
        return ht !== null
          ? vr(l, ht, t, e)
          : ((l.baseState = t), [t, l.queue.dispatch]);
      },
      useMemoCache: mc,
      useCacheRefresh: Gr,
    },
    ma = null,
    cu = 0;
  function gn(t) {
    var e = cu;
    return (cu += 1), ma === null && (ma = []), lr(ma, t, e);
  }
  function fu(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function bn(t, e) {
    throw e.$$typeof === C
      ? Error(f(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          f(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function Kr(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Jr(t) {
    function e(b, v) {
      if (t) {
        var p = b.deletions;
        p === null ? ((b.deletions = [v]), (b.flags |= 16)) : p.push(v);
      }
    }
    function l(b, v) {
      if (!t) return null;
      for (; v !== null; ) e(b, v), (v = v.sibling);
      return null;
    }
    function a(b) {
      for (var v = new Map(); b !== null; )
        b.key !== null ? v.set(b.key, b) : v.set(b.index, b), (b = b.sibling);
      return v;
    }
    function u(b, v) {
      return (b = je(b, v)), (b.index = 0), (b.sibling = null), b;
    }
    function n(b, v, p) {
      return (
        (b.index = p),
        t
          ? ((p = b.alternate),
            p !== null
              ? ((p = p.index), p < v ? ((b.flags |= 67108866), v) : p)
              : ((b.flags |= 67108866), v))
          : ((b.flags |= 1048576), v)
      );
    }
    function s(b) {
      return t && b.alternate === null && (b.flags |= 67108866), b;
    }
    function o(b, v, p, M) {
      return v === null || v.tag !== 6
        ? ((v = Vi(p, b.mode, M)), (v.return = b), v)
        : ((v = u(v, p)), (v.return = b), v);
    }
    function h(b, v, p, M) {
      var X = p.type;
      return X === H
        ? D(b, v, p.props.children, M, p.key)
        : v !== null &&
          (v.elementType === X ||
            (typeof X == "object" &&
              X !== null &&
              X.$$typeof === Ht &&
              Kr(X) === v.type))
        ? ((v = u(v, p.props)), fu(v, p), (v.return = b), v)
        : ((v = tn(p.type, p.key, p.props, null, b.mode, M)),
          fu(v, p),
          (v.return = b),
          v);
    }
    function E(b, v, p, M) {
      return v === null ||
        v.tag !== 4 ||
        v.stateNode.containerInfo !== p.containerInfo ||
        v.stateNode.implementation !== p.implementation
        ? ((v = Ki(p, b.mode, M)), (v.return = b), v)
        : ((v = u(v, p.children || [])), (v.return = b), v);
    }
    function D(b, v, p, M, X) {
      return v === null || v.tag !== 7
        ? ((v = Dl(p, b.mode, M, X)), (v.return = b), v)
        : ((v = u(v, p)), (v.return = b), v);
    }
    function N(b, v, p) {
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return (v = Vi("" + v, b.mode, p)), (v.return = b), v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Y:
            return (
              (p = tn(v.type, v.key, v.props, null, b.mode, p)),
              fu(p, v),
              (p.return = b),
              p
            );
          case L:
            return (v = Ki(v, b.mode, p)), (v.return = b), v;
          case Ht:
            var M = v._init;
            return (v = M(v._payload)), N(b, v, p);
        }
        if (Qt(v) || wt(v))
          return (v = Dl(v, b.mode, p, null)), (v.return = b), v;
        if (typeof v.then == "function") return N(b, gn(v), p);
        if (v.$$typeof === P) return N(b, un(b, v), p);
        bn(b, v);
      }
      return null;
    }
    function T(b, v, p, M) {
      var X = v !== null ? v.key : null;
      if (
        (typeof p == "string" && p !== "") ||
        typeof p == "number" ||
        typeof p == "bigint"
      )
        return X !== null ? null : o(b, v, "" + p, M);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Y:
            return p.key === X ? h(b, v, p, M) : null;
          case L:
            return p.key === X ? E(b, v, p, M) : null;
          case Ht:
            return (X = p._init), (p = X(p._payload)), T(b, v, p, M);
        }
        if (Qt(p) || wt(p)) return X !== null ? null : D(b, v, p, M, null);
        if (typeof p.then == "function") return T(b, v, gn(p), M);
        if (p.$$typeof === P) return T(b, v, un(b, p), M);
        bn(b, p);
      }
      return null;
    }
    function A(b, v, p, M, X) {
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return (b = b.get(p) || null), o(v, b, "" + M, X);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case Y:
            return (
              (b = b.get(M.key === null ? p : M.key) || null), h(v, b, M, X)
            );
          case L:
            return (
              (b = b.get(M.key === null ? p : M.key) || null), E(v, b, M, X)
            );
          case Ht:
            var lt = M._init;
            return (M = lt(M._payload)), A(b, v, p, M, X);
        }
        if (Qt(M) || wt(M)) return (b = b.get(p) || null), D(v, b, M, X, null);
        if (typeof M.then == "function") return A(b, v, p, gn(M), X);
        if (M.$$typeof === P) return A(b, v, p, un(v, M), X);
        bn(v, M);
      }
      return null;
    }
    function k(b, v, p, M) {
      for (
        var X = null, lt = null, Q = v, K = (v = 0), Yt = null;
        Q !== null && K < p.length;
        K++
      ) {
        Q.index > K ? ((Yt = Q), (Q = null)) : (Yt = Q.sibling);
        var st = T(b, Q, p[K], M);
        if (st === null) {
          Q === null && (Q = Yt);
          break;
        }
        t && Q && st.alternate === null && e(b, Q),
          (v = n(st, v, K)),
          lt === null ? (X = st) : (lt.sibling = st),
          (lt = st),
          (Q = Yt);
      }
      if (K === p.length) return l(b, Q), rt && Ml(b, K), X;
      if (Q === null) {
        for (; K < p.length; K++)
          (Q = N(b, p[K], M)),
            Q !== null &&
              ((v = n(Q, v, K)),
              lt === null ? (X = Q) : (lt.sibling = Q),
              (lt = Q));
        return rt && Ml(b, K), X;
      }
      for (Q = a(Q); K < p.length; K++)
        (Yt = A(Q, b, K, p[K], M)),
          Yt !== null &&
            (t &&
              Yt.alternate !== null &&
              Q.delete(Yt.key === null ? K : Yt.key),
            (v = n(Yt, v, K)),
            lt === null ? (X = Yt) : (lt.sibling = Yt),
            (lt = Yt));
      return (
        t &&
          Q.forEach(function (pl) {
            return e(b, pl);
          }),
        rt && Ml(b, K),
        X
      );
    }
    function V(b, v, p, M) {
      if (p == null) throw Error(f(151));
      for (
        var X = null, lt = null, Q = v, K = (v = 0), Yt = null, st = p.next();
        Q !== null && !st.done;
        K++, st = p.next()
      ) {
        Q.index > K ? ((Yt = Q), (Q = null)) : (Yt = Q.sibling);
        var pl = T(b, Q, st.value, M);
        if (pl === null) {
          Q === null && (Q = Yt);
          break;
        }
        t && Q && pl.alternate === null && e(b, Q),
          (v = n(pl, v, K)),
          lt === null ? (X = pl) : (lt.sibling = pl),
          (lt = pl),
          (Q = Yt);
      }
      if (st.done) return l(b, Q), rt && Ml(b, K), X;
      if (Q === null) {
        for (; !st.done; K++, st = p.next())
          (st = N(b, st.value, M)),
            st !== null &&
              ((v = n(st, v, K)),
              lt === null ? (X = st) : (lt.sibling = st),
              (lt = st));
        return rt && Ml(b, K), X;
      }
      for (Q = a(Q); !st.done; K++, st = p.next())
        (st = A(Q, b, K, st.value, M)),
          st !== null &&
            (t &&
              st.alternate !== null &&
              Q.delete(st.key === null ? K : st.key),
            (v = n(st, v, K)),
            lt === null ? (X = st) : (lt.sibling = st),
            (lt = st));
      return (
        t &&
          Q.forEach(function (em) {
            return e(b, em);
          }),
        rt && Ml(b, K),
        X
      );
    }
    function mt(b, v, p, M) {
      if (
        (typeof p == "object" &&
          p !== null &&
          p.type === H &&
          p.key === null &&
          (p = p.props.children),
        typeof p == "object" && p !== null)
      ) {
        switch (p.$$typeof) {
          case Y:
            t: {
              for (var X = p.key; v !== null; ) {
                if (v.key === X) {
                  if (((X = p.type), X === H)) {
                    if (v.tag === 7) {
                      l(b, v.sibling),
                        (M = u(v, p.props.children)),
                        (M.return = b),
                        (b = M);
                      break t;
                    }
                  } else if (
                    v.elementType === X ||
                    (typeof X == "object" &&
                      X !== null &&
                      X.$$typeof === Ht &&
                      Kr(X) === v.type)
                  ) {
                    l(b, v.sibling),
                      (M = u(v, p.props)),
                      fu(M, p),
                      (M.return = b),
                      (b = M);
                    break t;
                  }
                  l(b, v);
                  break;
                } else e(b, v);
                v = v.sibling;
              }
              p.type === H
                ? ((M = Dl(p.props.children, b.mode, M, p.key)),
                  (M.return = b),
                  (b = M))
                : ((M = tn(p.type, p.key, p.props, null, b.mode, M)),
                  fu(M, p),
                  (M.return = b),
                  (b = M));
            }
            return s(b);
          case L:
            t: {
              for (X = p.key; v !== null; ) {
                if (v.key === X)
                  if (
                    v.tag === 4 &&
                    v.stateNode.containerInfo === p.containerInfo &&
                    v.stateNode.implementation === p.implementation
                  ) {
                    l(b, v.sibling),
                      (M = u(v, p.children || [])),
                      (M.return = b),
                      (b = M);
                    break t;
                  } else {
                    l(b, v);
                    break;
                  }
                else e(b, v);
                v = v.sibling;
              }
              (M = Ki(p, b.mode, M)), (M.return = b), (b = M);
            }
            return s(b);
          case Ht:
            return (X = p._init), (p = X(p._payload)), mt(b, v, p, M);
        }
        if (Qt(p)) return k(b, v, p, M);
        if (wt(p)) {
          if (((X = wt(p)), typeof X != "function")) throw Error(f(150));
          return (p = X.call(p)), V(b, v, p, M);
        }
        if (typeof p.then == "function") return mt(b, v, gn(p), M);
        if (p.$$typeof === P) return mt(b, v, un(b, p), M);
        bn(b, p);
      }
      return (typeof p == "string" && p !== "") ||
        typeof p == "number" ||
        typeof p == "bigint"
        ? ((p = "" + p),
          v !== null && v.tag === 6
            ? (l(b, v.sibling), (M = u(v, p)), (M.return = b), (b = M))
            : (l(b, v), (M = Vi(p, b.mode, M)), (M.return = b), (b = M)),
          s(b))
        : l(b, v);
    }
    return function (b, v, p, M) {
      try {
        cu = 0;
        var X = mt(b, v, p, M);
        return (ma = null), X;
      } catch (Q) {
        if (Q === Pa || Q === cn) throw Q;
        var lt = fe(29, Q, null, b.mode);
        return (lt.lanes = M), (lt.return = b), lt;
      } finally {
      }
    };
  }
  var va = Jr(!0),
    kr = Jr(!1),
    pe = x(null),
    Ue = null;
  function nl(t) {
    var e = t.alternate;
    B(Ct, Ct.current & 1),
      B(pe, t),
      Ue === null &&
        (e === null || oa.current !== null || e.memoizedState !== null) &&
        (Ue = t);
  }
  function $r(t) {
    if (t.tag === 22) {
      if ((B(Ct, Ct.current), B(pe, t), Ue === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Ue = t);
      }
    } else il();
  }
  function il() {
    B(Ct, Ct.current), B(pe, pe.current);
  }
  function Qe(t) {
    G(pe), Ue === t && (Ue = null), G(Ct);
  }
  var Ct = x(0);
  function pn(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || mf(l))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function Rc(t, e, l, a) {
    (e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : O({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var _c = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = de(),
        u = ll(a);
      (u.payload = e),
        l != null && (u.callback = l),
        (e = al(t, u, a)),
        e !== null && (he(e, t, a), tu(e, t, a));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = de(),
        u = ll(a);
      (u.tag = 1),
        (u.payload = e),
        l != null && (u.callback = l),
        (e = al(t, u, a)),
        e !== null && (he(e, t, a), tu(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = de(),
        a = ll(l);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = al(t, a, l)),
        e !== null && (he(e, t, l), tu(e, t, l));
    },
  };
  function Fr(t, e, l, a, u, n, s) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, n, s)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Za(l, a) || !Za(u, n)
        : !0
    );
  }
  function Wr(t, e, l, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && _c.enqueueReplaceState(e, e.state, null);
  }
  function jl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e) a !== "ref" && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = O({}, l));
      for (var u in t) l[u] === void 0 && (l[u] = t[u]);
    }
    return l;
  }
  var En =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function Pr(t) {
    En(t);
  }
  function Ir(t) {
    console.error(t);
  }
  function to(t) {
    En(t);
  }
  function Tn(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function eo(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function zc(t, e, l) {
    return (
      (l = ll(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Tn(t, e);
      }),
      l
    );
  }
  function lo(t) {
    return (t = ll(t)), (t.tag = 3), t;
  }
  function ao(t, e, l, a) {
    var u = l.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      (t.payload = function () {
        return u(n);
      }),
        (t.callback = function () {
          eo(e, l, a);
        });
    }
    var s = l.stateNode;
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (t.callback = function () {
        eo(e, l, a),
          typeof u != "function" &&
            (dl === null ? (dl = new Set([this])) : dl.add(this));
        var o = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: o !== null ? o : "",
        });
      });
  }
  function ey(t, e, l, a, u) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && $a(e, l, u, !0),
        (l = pe.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              Ue === null ? Wc() : l.alternate === null && Rt === 0 && (Rt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = u),
              a === lc
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                  Ic(t, a, u)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === lc
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                  Ic(t, a, u)),
              !1
            );
        }
        throw Error(f(435, l.tag));
      }
      return Ic(t, a, u), Wc(), !1;
    }
    if (rt)
      return (
        (e = pe.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = u),
            a !== $i && ((t = Error(f(422), { cause: a })), ka(ve(t, l))))
          : (a !== $i && ((e = Error(f(423), { cause: a })), ka(ve(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (a = ve(a, l)),
            (u = zc(t.stateNode, a, u)),
            nc(t, u),
            Rt !== 4 && (Rt = 2)),
        !1
      );
    var n = Error(f(520), { cause: a });
    if (
      ((n = ve(n, l)),
      mu === null ? (mu = [n]) : mu.push(n),
      Rt !== 4 && (Rt = 2),
      e === null)
    )
      return !0;
    (a = ve(a, l)), (l = e);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = u & -u),
            (l.lanes |= t),
            (t = zc(l.stateNode, a, t)),
            nc(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (n = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (dl === null || !dl.has(n)))))
          )
            return (
              (l.flags |= 65536),
              (u &= -u),
              (l.lanes |= u),
              (u = lo(u)),
              ao(u, t, l, a),
              nc(l, u),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var uo = Error(f(461)),
    Bt = !1;
  function Lt(t, e, l, a) {
    e.child = t === null ? kr(e, null, l, a) : va(e, t.child, l, a);
  }
  function no(t, e, l, a, u) {
    l = l.render;
    var n = e.ref;
    if ("ref" in a) {
      var s = {};
      for (var o in a) o !== "ref" && (s[o] = a[o]);
    } else s = a;
    return (
      Hl(e),
      (a = rc(t, e, l, s, n, u)),
      (o = oc()),
      t !== null && !Bt
        ? (dc(t, e, u), Ze(t, e, u))
        : (rt && o && Ji(e), (e.flags |= 1), Lt(t, e, a, u), e.child)
    );
  }
  function io(t, e, l, a, u) {
    if (t === null) {
      var n = l.type;
      return typeof n == "function" &&
        !Zi(n) &&
        n.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = n), co(t, e, n, a, u))
        : ((t = tn(l.type, null, a, e, e.mode, u)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((n = t.child), !qc(t, u))) {
      var s = n.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Za), l(s, a) && t.ref === e.ref)
      )
        return Ze(t, e, u);
    }
    return (
      (e.flags |= 1),
      (t = je(n, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function co(t, e, l, a, u) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (Za(n, a) && t.ref === e.ref)
        if (((Bt = !1), (e.pendingProps = a = n), qc(t, u)))
          (t.flags & 131072) !== 0 && (Bt = !0);
        else return (e.lanes = t.lanes), Ze(t, e, u);
    }
    return Dc(t, e, l, a, u);
  }
  function fo(t, e, l) {
    var a = e.pendingProps,
      u = a.children,
      n = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((a = n !== null ? n.baseLanes | l : l), t !== null)) {
          for (u = e.child = t.child, n = 0; u !== null; )
            (n = n | u.lanes | u.childLanes), (u = u.sibling);
          e.childLanes = n & ~a;
        } else (e.childLanes = 0), (e.child = null);
        return so(t, e, a, l);
      }
      if ((l & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && nn(e, n !== null ? n.cachePool : null),
          n !== null ? cr(e, n) : cc(),
          $r(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          so(t, e, n !== null ? n.baseLanes | l : l, l)
        );
    } else
      n !== null
        ? (nn(e, n.cachePool), cr(e, n), il(), (e.memoizedState = null))
        : (t !== null && nn(e, null), cc(), il());
    return Lt(t, e, u, l), e.child;
  }
  function so(t, e, l, a) {
    var u = ec();
    return (
      (u = u === null ? null : { parent: xt._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: l, cachePool: u }),
      t !== null && nn(e, null),
      cc(),
      $r(e),
      t !== null && $a(t, e, a, !0),
      null
    );
  }
  function An(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Dc(t, e, l, a, u) {
    return (
      Hl(e),
      (l = rc(t, e, l, a, void 0, u)),
      (a = oc()),
      t !== null && !Bt
        ? (dc(t, e, u), Ze(t, e, u))
        : (rt && a && Ji(e), (e.flags |= 1), Lt(t, e, l, u), e.child)
    );
  }
  function ro(t, e, l, a, u, n) {
    return (
      Hl(e),
      (e.updateQueue = null),
      (l = sr(e, a, l, u)),
      fr(t),
      (a = oc()),
      t !== null && !Bt
        ? (dc(t, e, n), Ze(t, e, n))
        : (rt && a && Ji(e), (e.flags |= 1), Lt(t, e, l, n), e.child)
    );
  }
  function oo(t, e, l, a, u) {
    if ((Hl(e), e.stateNode === null)) {
      var n = ia,
        s = l.contextType;
      typeof s == "object" && s !== null && (n = Vt(s)),
        (n = new l(a, n)),
        (e.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = _c),
        (e.stateNode = n),
        (n._reactInternals = e),
        (n = e.stateNode),
        (n.props = a),
        (n.state = e.memoizedState),
        (n.refs = {}),
        ac(e),
        (s = l.contextType),
        (n.context = typeof s == "object" && s !== null ? Vt(s) : ia),
        (n.state = e.memoizedState),
        (s = l.getDerivedStateFromProps),
        typeof s == "function" && (Rc(e, l, s, a), (n.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((s = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          s !== n.state && _c.enqueueReplaceState(n, n.state, null),
          lu(e, a, n, u),
          eu(),
          (n.state = e.memoizedState)),
        typeof n.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      n = e.stateNode;
      var o = e.memoizedProps,
        h = jl(l, o);
      n.props = h;
      var E = n.context,
        D = l.contextType;
      (s = ia), typeof D == "object" && D !== null && (s = Vt(D));
      var N = l.getDerivedStateFromProps;
      (D =
        typeof N == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (o = e.pendingProps !== o),
        D ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((o || E !== s) && Wr(e, n, a, s)),
        (el = !1);
      var T = e.memoizedState;
      (n.state = T),
        lu(e, a, n, u),
        eu(),
        (E = e.memoizedState),
        o || T !== E || el
          ? (typeof N == "function" && (Rc(e, l, N, a), (E = e.memoizedState)),
            (h = el || Fr(e, l, h, a, T, E, s))
              ? (D ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = E)),
            (n.props = a),
            (n.state = E),
            (n.context = s),
            (a = h))
          : (typeof n.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1));
    } else {
      (n = e.stateNode),
        uc(t, e),
        (s = e.memoizedProps),
        (D = jl(l, s)),
        (n.props = D),
        (N = e.pendingProps),
        (T = n.context),
        (E = l.contextType),
        (h = ia),
        typeof E == "object" && E !== null && (h = Vt(E)),
        (o = l.getDerivedStateFromProps),
        (E =
          typeof o == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((s !== N || T !== h) && Wr(e, n, a, h)),
        (el = !1),
        (T = e.memoizedState),
        (n.state = T),
        lu(e, a, n, u),
        eu();
      var A = e.memoizedState;
      s !== N ||
      T !== A ||
      el ||
      (t !== null && t.dependencies !== null && an(t.dependencies))
        ? (typeof o == "function" && (Rc(e, l, o, a), (A = e.memoizedState)),
          (D =
            el ||
            Fr(e, l, D, a, T, A, h) ||
            (t !== null && t.dependencies !== null && an(t.dependencies)))
            ? (E ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(a, A, h),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(a, A, h)),
              typeof n.componentDidUpdate == "function" && (e.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (s === t.memoizedProps && T === t.memoizedState) ||
                (e.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (s === t.memoizedProps && T === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = A)),
          (n.props = a),
          (n.state = A),
          (n.context = h),
          (a = D))
        : (typeof n.componentDidUpdate != "function" ||
            (s === t.memoizedProps && T === t.memoizedState) ||
            (e.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (s === t.memoizedProps && T === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (n = a),
      An(t, e),
      (a = (e.flags & 128) !== 0),
      n || a
        ? ((n = e.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = va(e, t.child, null, u)),
              (e.child = va(e, null, l, u)))
            : Lt(t, e, l, u),
          (e.memoizedState = n.state),
          (t = e.child))
        : (t = Ze(t, e, u)),
      t
    );
  }
  function ho(t, e, l, a) {
    return Ja(), (e.flags |= 256), Lt(t, e, l, a), e.child;
  }
  var Uc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Mc(t) {
    return { baseLanes: t, cachePool: Is() };
  }
  function Nc(t, e, l) {
    return (t = t !== null ? t.childLanes & ~l : 0), e && (t |= Ee), t;
  }
  function yo(t, e, l) {
    var a = e.pendingProps,
      u = !1,
      n = (e.flags & 128) !== 0,
      s;
    if (
      ((s = n) ||
        (s =
          t !== null && t.memoizedState === null ? !1 : (Ct.current & 2) !== 0),
      s && ((u = !0), (e.flags &= -129)),
      (s = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (rt) {
        if ((u ? nl(e) : il(), rt)) {
          var o = Ot,
            h;
          if ((h = o)) {
            t: {
              for (h = o, o = De; h.nodeType !== 8; ) {
                if (!o) {
                  o = null;
                  break t;
                }
                if (((h = Re(h.nextSibling)), h === null)) {
                  o = null;
                  break t;
                }
              }
              o = h;
            }
            o !== null
              ? ((e.memoizedState = {
                  dehydrated: o,
                  treeContext: Ul !== null ? { id: Ye, overflow: Le } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (h = fe(18, null, null, 0)),
                (h.stateNode = o),
                (h.return = e),
                (e.child = h),
                (kt = e),
                (Ot = null),
                (h = !0))
              : (h = !1);
          }
          h || xl(e);
        }
        if (
          ((o = e.memoizedState),
          o !== null && ((o = o.dehydrated), o !== null))
        )
          return mf(o) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        Qe(e);
      }
      return (
        (o = a.children),
        (a = a.fallback),
        u
          ? (il(),
            (u = e.mode),
            (o = On({ mode: "hidden", children: o }, u)),
            (a = Dl(a, u, l, null)),
            (o.return = e),
            (a.return = e),
            (o.sibling = a),
            (e.child = o),
            (u = e.child),
            (u.memoizedState = Mc(l)),
            (u.childLanes = Nc(t, s, l)),
            (e.memoizedState = Uc),
            a)
          : (nl(e), xc(e, o))
      );
    }
    if (
      ((h = t.memoizedState), h !== null && ((o = h.dehydrated), o !== null))
    ) {
      if (n)
        e.flags & 256
          ? (nl(e), (e.flags &= -257), (e = Cc(t, e, l)))
          : e.memoizedState !== null
          ? (il(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (il(),
            (u = a.fallback),
            (o = e.mode),
            (a = On({ mode: "visible", children: a.children }, o)),
            (u = Dl(u, o, l, null)),
            (u.flags |= 2),
            (a.return = e),
            (u.return = e),
            (a.sibling = u),
            (e.child = a),
            va(e, t.child, null, l),
            (a = e.child),
            (a.memoizedState = Mc(l)),
            (a.childLanes = Nc(t, s, l)),
            (e.memoizedState = Uc),
            (e = u));
      else if ((nl(e), mf(o))) {
        if (((s = o.nextSibling && o.nextSibling.dataset), s)) var E = s.dgst;
        (s = E),
          (a = Error(f(419))),
          (a.stack = ""),
          (a.digest = s),
          ka({ value: a, source: null, stack: null }),
          (e = Cc(t, e, l));
      } else if (
        (Bt || $a(t, e, l, !1), (s = (l & t.childLanes) !== 0), Bt || s)
      ) {
        if (
          ((s = gt),
          s !== null &&
            ((a = l & -l),
            (a = (a & 42) !== 0 ? 1 : mi(a)),
            (a = (a & (s.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== h.retryLane))
        )
          throw ((h.retryLane = a), na(t, a), he(s, t, a), uo);
        o.data === "$?" || Wc(), (e = Cc(t, e, l));
      } else
        o.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = h.treeContext),
            (Ot = Re(o.nextSibling)),
            (kt = e),
            (rt = !0),
            (Nl = null),
            (De = !1),
            t !== null &&
              ((ge[be++] = Ye),
              (ge[be++] = Le),
              (ge[be++] = Ul),
              (Ye = t.id),
              (Le = t.overflow),
              (Ul = e)),
            (e = xc(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return u
      ? (il(),
        (u = a.fallback),
        (o = e.mode),
        (h = t.child),
        (E = h.sibling),
        (a = je(h, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = h.subtreeFlags & 65011712),
        E !== null ? (u = je(E, u)) : ((u = Dl(u, o, l, null)), (u.flags |= 2)),
        (u.return = e),
        (a.return = e),
        (a.sibling = u),
        (e.child = a),
        (a = u),
        (u = e.child),
        (o = t.child.memoizedState),
        o === null
          ? (o = Mc(l))
          : ((h = o.cachePool),
            h !== null
              ? ((E = xt._currentValue),
                (h = h.parent !== E ? { parent: E, pool: E } : h))
              : (h = Is()),
            (o = { baseLanes: o.baseLanes | l, cachePool: h })),
        (u.memoizedState = o),
        (u.childLanes = Nc(t, s, l)),
        (e.memoizedState = Uc),
        a)
      : (nl(e),
        (l = t.child),
        (t = l.sibling),
        (l = je(l, { mode: "visible", children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((s = e.deletions),
          s === null ? ((e.deletions = [t]), (e.flags |= 16)) : s.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function xc(t, e) {
    return (
      (e = On({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function On(t, e) {
    return (
      (t = fe(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function Cc(t, e, l) {
    return (
      va(e, t.child, null, l),
      (t = xc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function mo(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Wi(t.return, e, l);
  }
  function Hc(t, e, l, a, u) {
    var n = t.memoizedState;
    n === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: u,
        })
      : ((n.isBackwards = e),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = a),
        (n.tail = l),
        (n.tailMode = u));
  }
  function vo(t, e, l) {
    var a = e.pendingProps,
      u = a.revealOrder,
      n = a.tail;
    if ((Lt(t, e, a.children, l), (a = Ct.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && mo(t, l, e);
          else if (t.tag === 19) mo(t, l, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      a &= 1;
    }
    switch ((B(Ct, a), u)) {
      case "forwards":
        for (l = e.child, u = null; l !== null; )
          (t = l.alternate),
            t !== null && pn(t) === null && (u = l),
            (l = l.sibling);
        (l = u),
          l === null
            ? ((u = e.child), (e.child = null))
            : ((u = l.sibling), (l.sibling = null)),
          Hc(e, !1, u, l, n);
        break;
      case "backwards":
        for (l = null, u = e.child, e.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && pn(t) === null)) {
            e.child = u;
            break;
          }
          (t = u.sibling), (u.sibling = l), (l = u), (u = t);
        }
        Hc(e, !0, l, null, n);
        break;
      case "together":
        Hc(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Ze(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (ol |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if (($a(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(f(153));
    if (e.child !== null) {
      for (
        t = e.child, l = je(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (l = l.sibling = je(t, t.pendingProps)),
          (l.return = e);
      l.sibling = null;
    }
    return e.child;
  }
  function qc(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && an(t)));
  }
  function ly(t, e, l) {
    switch (e.tag) {
      case 3:
        pt(e, e.stateNode.containerInfo),
          tl(e, xt, t.memoizedState.cache),
          Ja();
        break;
      case 27:
      case 5:
        ri(e);
        break;
      case 4:
        pt(e, e.stateNode.containerInfo);
        break;
      case 10:
        tl(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (nl(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
            ? yo(t, e, l)
            : (nl(e), (t = Ze(t, e, l)), t !== null ? t.sibling : null);
        nl(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || ($a(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          u)
        ) {
          if (a) return vo(t, e, l);
          e.flags |= 128;
        }
        if (
          ((u = e.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          B(Ct, Ct.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), fo(t, e, l);
      case 24:
        tl(e, xt, t.memoizedState.cache);
    }
    return Ze(t, e, l);
  }
  function So(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Bt = !0;
      else {
        if (!qc(t, l) && (e.flags & 128) === 0) return (Bt = !1), ly(t, e, l);
        Bt = (t.flags & 131072) !== 0;
      }
    else (Bt = !1), rt && (e.flags & 1048576) !== 0 && Ks(e, ln, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType,
            u = a._init;
          if (((a = u(a._payload)), (e.type = a), typeof a == "function"))
            Zi(a)
              ? ((t = jl(a, t)), (e.tag = 1), (e = oo(null, e, a, t, l)))
              : ((e.tag = 0), (e = Dc(null, e, a, t, l)));
          else {
            if (a != null) {
              if (((u = a.$$typeof), u === bt)) {
                (e.tag = 11), (e = no(null, e, a, t, l));
                break t;
              } else if (u === _t) {
                (e.tag = 14), (e = io(null, e, a, t, l));
                break t;
              }
            }
            throw ((e = Tl(a) || a), Error(f(306, e, "")));
          }
        }
        return e;
      case 0:
        return Dc(t, e, e.type, e.pendingProps, l);
      case 1:
        return (a = e.type), (u = jl(a, e.pendingProps)), oo(t, e, a, u, l);
      case 3:
        t: {
          if ((pt(e, e.stateNode.containerInfo), t === null))
            throw Error(f(387));
          a = e.pendingProps;
          var n = e.memoizedState;
          (u = n.element), uc(t, e), lu(e, a, null, l);
          var s = e.memoizedState;
          if (
            ((a = s.cache),
            tl(e, xt, a),
            a !== n.cache && Pi(e, [xt], l, !0),
            eu(),
            (a = s.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: a, isDehydrated: !1, cache: s.cache }),
              (e.updateQueue.baseState = n),
              (e.memoizedState = n),
              e.flags & 256)
            ) {
              e = ho(t, e, a, l);
              break t;
            } else if (a !== u) {
              (u = ve(Error(f(424)), e)), ka(u), (e = ho(t, e, a, l));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Ot = Re(t.firstChild),
                  kt = e,
                  rt = !0,
                  Nl = null,
                  De = !0,
                  l = kr(e, null, a, l),
                  e.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((Ja(), a === u)) {
              e = Ze(t, e, l);
              break t;
            }
            Lt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          An(t, e),
          t === null
            ? (l = Ed(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : rt ||
                ((l = e.type),
                (t = e.pendingProps),
                (a = Yn(W.current).createElement(l)),
                (a[Zt] = e),
                (a[Ft] = t),
                Xt(a, l, t),
                qt(a),
                (e.stateNode = a))
            : (e.memoizedState = Ed(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          ri(e),
          t === null &&
            rt &&
            ((a = e.stateNode = gd(e.type, e.pendingProps, W.current)),
            (kt = e),
            (De = !0),
            (u = Ot),
            ml(e.type) ? ((vf = u), (Ot = Re(a.firstChild))) : (Ot = u)),
          Lt(t, e, e.pendingProps.children, l),
          An(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            rt &&
            ((u = a = Ot) &&
              ((a = My(a, e.type, e.pendingProps, De)),
              a !== null
                ? ((e.stateNode = a),
                  (kt = e),
                  (Ot = Re(a.firstChild)),
                  (De = !1),
                  (u = !0))
                : (u = !1)),
            u || xl(e)),
          ri(e),
          (u = e.type),
          (n = e.pendingProps),
          (s = t !== null ? t.memoizedProps : null),
          (a = n.children),
          df(u, n) ? (a = null) : s !== null && df(u, s) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((u = rc(t, e, k0, null, null, l)), (Ou._currentValue = u)),
          An(t, e),
          Lt(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            rt &&
            ((t = l = Ot) &&
              ((l = Ny(l, e.pendingProps, De)),
              l !== null
                ? ((e.stateNode = l), (kt = e), (Ot = null), (t = !0))
                : (t = !1)),
            t || xl(e)),
          null
        );
      case 13:
        return yo(t, e, l);
      case 4:
        return (
          pt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = va(e, null, a, l)) : Lt(t, e, a, l),
          e.child
        );
      case 11:
        return no(t, e, e.type, e.pendingProps, l);
      case 7:
        return Lt(t, e, e.pendingProps, l), e.child;
      case 8:
        return Lt(t, e, e.pendingProps.children, l), e.child;
      case 12:
        return Lt(t, e, e.pendingProps.children, l), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          tl(e, e.type, a.value),
          Lt(t, e, a.children, l),
          e.child
        );
      case 9:
        return (
          (u = e.type._context),
          (a = e.pendingProps.children),
          Hl(e),
          (u = Vt(u)),
          (a = a(u)),
          (e.flags |= 1),
          Lt(t, e, a, l),
          e.child
        );
      case 14:
        return io(t, e, e.type, e.pendingProps, l);
      case 15:
        return co(t, e, e.type, e.pendingProps, l);
      case 19:
        return vo(t, e, l);
      case 31:
        return (
          (a = e.pendingProps),
          (l = e.mode),
          (a = { mode: a.mode, children: a.children }),
          t === null
            ? ((l = On(a, l)),
              (l.ref = e.ref),
              (e.child = l),
              (l.return = e),
              (e = l))
            : ((l = je(t.child, a)),
              (l.ref = e.ref),
              (e.child = l),
              (l.return = e),
              (e = l)),
          e
        );
      case 22:
        return fo(t, e, l);
      case 24:
        return (
          Hl(e),
          (a = Vt(xt)),
          t === null
            ? ((u = ec()),
              u === null &&
                ((u = gt),
                (n = Ii()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= l),
                (u = n)),
              (e.memoizedState = { parent: a, cache: u }),
              ac(e),
              tl(e, xt, u))
            : ((t.lanes & l) !== 0 && (uc(t, e), lu(e, null, null, l), eu()),
              (u = t.memoizedState),
              (n = e.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (e.memoizedState = u),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = u),
                  tl(e, xt, a))
                : ((a = n.cache),
                  tl(e, xt, a),
                  a !== u.cache && Pi(e, [xt], l, !0))),
          Lt(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function Ve(t) {
    t.flags |= 4;
  }
  function go(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !_d(e))) {
      if (
        ((e = pe.current),
        e !== null &&
          ((it & 4194048) === it
            ? Ue !== null
            : ((it & 62914560) !== it && (it & 536870912) === 0) || e !== Ue))
      )
        throw ((Ia = lc), tr);
      t.flags |= 8192;
    }
  }
  function Rn(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? $f() : 536870912), (t.lanes |= e), (pa |= e));
  }
  function su(t, e) {
    if (!rt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), (e = e.sibling);
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Tt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var u = t.child; u !== null; )
        (l |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 65011712),
          (a |= u.flags & 65011712),
          (u.return = t),
          (u = u.sibling);
    else
      for (u = t.child; u !== null; )
        (l |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = t),
          (u = u.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = l), e;
  }
  function ay(t, e, l) {
    var a = e.pendingProps;
    switch ((ki(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Tt(e), null;
      case 1:
        return Tt(e), null;
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Xe(xt),
          Fe(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ka(e)
              ? Ve(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), $s())),
          Tt(e),
          null
        );
      case 26:
        return (
          (l = e.memoizedState),
          t === null
            ? (Ve(e),
              l !== null ? (Tt(e), go(e, l)) : (Tt(e), (e.flags &= -16777217)))
            : l
            ? l !== t.memoizedState
              ? (Ve(e), Tt(e), go(e, l))
              : (Tt(e), (e.flags &= -16777217))
            : (t.memoizedProps !== a && Ve(e), Tt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        qu(e), (l = W.current);
        var u = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== a && Ve(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return Tt(e), null;
          }
          (t = Z.current),
            Ka(e) ? Js(e) : ((t = gd(u, a, l)), (e.stateNode = t), Ve(e));
        }
        return Tt(e), null;
      case 5:
        if ((qu(e), (l = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && Ve(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return Tt(e), null;
          }
          if (((t = Z.current), Ka(e))) Js(e);
          else {
            switch (((u = Yn(W.current)), t)) {
              case 1:
                t = u.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                t = u.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    t = u.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    t = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    (t = u.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof a.is == "string"
                        ? u.createElement("select", { is: a.is })
                        : u.createElement("select")),
                      a.multiple
                        ? (t.multiple = !0)
                        : a.size && (t.size = a.size);
                    break;
                  default:
                    t =
                      typeof a.is == "string"
                        ? u.createElement(l, { is: a.is })
                        : u.createElement(l);
                }
            }
            (t[Zt] = e), (t[Ft] = a);
            t: for (u = e.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === e) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === e) break t;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            e.stateNode = t;
            t: switch ((Xt(t, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Ve(e);
          }
        }
        return Tt(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && Ve(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(f(166));
          if (((t = W.current), Ka(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (a = null),
              (u = kt),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            (t[Zt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                od(t.nodeValue, l)
              )),
              t || xl(e);
          } else (t = Yn(t).createTextNode(a)), (t[Zt] = e), (e.stateNode = t);
        }
        return Tt(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = Ka(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(f(318));
              if (
                ((u = e.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(f(317));
              u[Zt] = e;
            } else
              Ja(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Tt(e), (u = !1);
          } else
            (u = $s()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return e.flags & 256 ? (Qe(e), e) : (Qe(e), null);
        }
        if ((Qe(e), (e.flags & 128) !== 0)) return (e.lanes = l), e;
        if (
          ((l = a !== null), (t = t !== null && t.memoizedState !== null), l)
        ) {
          (a = e.child),
            (u = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (u = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (n = a.memoizedState.cachePool.pool),
            n !== u && (a.flags |= 2048);
        }
        return (
          l !== t && l && (e.child.flags |= 8192),
          Rn(e, e.updateQueue),
          Tt(e),
          null
        );
      case 4:
        return Fe(), t === null && cf(e.stateNode.containerInfo), Tt(e), null;
      case 10:
        return Xe(e.type), Tt(e), null;
      case 19:
        if ((G(Ct), (u = e.memoizedState), u === null)) return Tt(e), null;
        if (((a = (e.flags & 128) !== 0), (n = u.rendering), n === null))
          if (a) su(u, !1);
          else {
            if (Rt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((n = pn(t)), n !== null)) {
                  for (
                    e.flags |= 128,
                      su(u, !1),
                      t = n.updateQueue,
                      e.updateQueue = t,
                      Rn(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;

                  )
                    Vs(l, t), (l = l.sibling);
                  return B(Ct, (Ct.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            u.tail !== null &&
              ze() > Dn &&
              ((e.flags |= 128), (a = !0), su(u, !1), (e.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = pn(n)), t !== null)) {
              if (
                ((e.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Rn(e, t),
                su(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !rt)
              )
                return Tt(e), null;
            } else
              2 * ze() - u.renderingStartTime > Dn &&
                l !== 536870912 &&
                ((e.flags |= 128), (a = !0), su(u, !1), (e.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = e.child), (e.child = n))
            : ((t = u.last),
              t !== null ? (t.sibling = n) : (e.child = n),
              (u.last = n));
        }
        return u.tail !== null
          ? ((e = u.tail),
            (u.rendering = e),
            (u.tail = e.sibling),
            (u.renderingStartTime = ze()),
            (e.sibling = null),
            (t = Ct.current),
            B(Ct, a ? (t & 1) | 2 : t & 1),
            e)
          : (Tt(e), null);
      case 22:
      case 23:
        return (
          Qe(e),
          fc(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Tt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Tt(e),
          (l = e.updateQueue),
          l !== null && Rn(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && G(ql),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Xe(xt),
          Tt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function uy(t, e) {
    switch ((ki(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Xe(xt),
          Fe(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return qu(e), null;
      case 13:
        if (
          (Qe(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(f(340));
          Ja();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return G(Ct), null;
      case 4:
        return Fe(), null;
      case 10:
        return Xe(e.type), null;
      case 22:
      case 23:
        return (
          Qe(e),
          fc(),
          t !== null && G(ql),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return Xe(xt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function bo(t, e) {
    switch ((ki(e), e.tag)) {
      case 3:
        Xe(xt), Fe();
        break;
      case 26:
      case 27:
      case 5:
        qu(e);
        break;
      case 4:
        Fe();
        break;
      case 13:
        Qe(e);
        break;
      case 19:
        G(Ct);
        break;
      case 10:
        Xe(e.type);
        break;
      case 22:
      case 23:
        Qe(e), fc(), t !== null && G(ql);
        break;
      case 24:
        Xe(xt);
    }
  }
  function ru(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var n = l.create,
              s = l.inst;
            (a = n()), (s.destroy = a);
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (o) {
      St(e, e.return, o);
    }
  }
  function cl(t, e, l) {
    try {
      var a = e.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            var s = a.inst,
              o = s.destroy;
            if (o !== void 0) {
              (s.destroy = void 0), (u = e);
              var h = l,
                E = o;
              try {
                E();
              } catch (D) {
                St(u, h, D);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (D) {
      St(e, e.return, D);
    }
  }
  function po(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        ir(e, l);
      } catch (a) {
        St(t, t.return, a);
      }
    }
  }
  function Eo(t, e, l) {
    (l.props = jl(t.type, t.memoizedProps)), (l.state = t.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      St(t, e, a);
    }
  }
  function ou(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? (t.refCleanup = l(a)) : (l.current = a);
      }
    } catch (u) {
      St(t, e, u);
    }
  }
  function Me(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          St(t, e, u);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (u) {
          St(t, e, u);
        }
      else l.current = null;
  }
  function To(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (u) {
      St(t, t.return, u);
    }
  }
  function Bc(t, e, l) {
    try {
      var a = t.stateNode;
      Ry(a, t.type, l, e), (a[Ft] = e);
    } catch (u) {
      St(t, t.return, u);
    }
  }
  function Ao(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && ml(t.type)) ||
      t.tag === 4
    );
  }
  function jc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Ao(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && ml(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Yc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
              ? l.ownerDocument.body
              : l
            ).insertBefore(t, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = jn));
    else if (
      a !== 4 &&
      (a === 27 && ml(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Yc(t, e, l), t = t.sibling; t !== null; )
        Yc(t, e, l), (t = t.sibling);
  }
  function _n(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && ml(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (_n(t, e, l), t = t.sibling; t !== null; )
        _n(t, e, l), (t = t.sibling);
  }
  function Oo(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      Xt(e, a, l), (e[Zt] = t), (e[Ft] = l);
    } catch (n) {
      St(t, t.return, n);
    }
  }
  var Ke = !1,
    Dt = !1,
    Lc = !1,
    Ro = typeof WeakSet == "function" ? WeakSet : Set,
    jt = null;
  function ny(t, e) {
    if (((t = t.containerInfo), (rf = Zn), (t = qs(t)), ji(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var u = a.anchorOffset,
              n = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, n.nodeType;
            } catch {
              l = null;
              break t;
            }
            var s = 0,
              o = -1,
              h = -1,
              E = 0,
              D = 0,
              N = t,
              T = null;
            e: for (;;) {
              for (
                var A;
                N !== l || (u !== 0 && N.nodeType !== 3) || (o = s + u),
                  N !== n || (a !== 0 && N.nodeType !== 3) || (h = s + a),
                  N.nodeType === 3 && (s += N.nodeValue.length),
                  (A = N.firstChild) !== null;

              )
                (T = N), (N = A);
              for (;;) {
                if (N === t) break e;
                if (
                  (T === l && ++E === u && (o = s),
                  T === n && ++D === a && (h = s),
                  (A = N.nextSibling) !== null)
                )
                  break;
                (N = T), (T = N.parentNode);
              }
              N = A;
            }
            l = o === -1 || h === -1 ? null : { start: o, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      of = { focusedElem: t, selectionRange: l }, Zn = !1, jt = e;
      jt !== null;

    )
      if (
        ((e = jt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (jt = t);
      else
        for (; jt !== null; ) {
          switch (((e = jt), (n = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                (t = void 0),
                  (l = e),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (a = l.stateNode);
                try {
                  var k = jl(l.type, u, l.elementType === l.type);
                  (t = a.getSnapshotBeforeUpdate(k, n)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (V) {
                  St(l, l.return, V);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  yf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      yf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(f(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (jt = t);
            break;
          }
          jt = e.return;
        }
  }
  function _o(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        fl(t, l), a & 4 && ru(5, l);
        break;
      case 1:
        if ((fl(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (s) {
              St(l, l.return, s);
            }
          else {
            var u = jl(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (s) {
              St(l, l.return, s);
            }
          }
        a & 64 && po(l), a & 512 && ou(l, l.return);
        break;
      case 3:
        if ((fl(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            ir(t, e);
          } catch (s) {
            St(l, l.return, s);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Oo(l);
      case 26:
      case 5:
        fl(t, l), e === null && a & 4 && To(l), a & 512 && ou(l, l.return);
        break;
      case 12:
        fl(t, l);
        break;
      case 13:
        fl(t, l),
          a & 4 && Uo(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = yy.bind(null, l)), xy(t, l))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || Ke), !a)) {
          (e = (e !== null && e.memoizedState !== null) || Dt), (u = Ke);
          var n = Dt;
          (Ke = a),
            (Dt = e) && !n ? sl(t, l, (l.subtreeFlags & 8772) !== 0) : fl(t, l),
            (Ke = u),
            (Dt = n);
        }
        break;
      case 30:
        break;
      default:
        fl(t, l);
    }
  }
  function zo(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), zo(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && gi(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Et = null,
    It = !1;
  function Je(t, e, l) {
    for (l = l.child; l !== null; ) Do(t, e, l), (l = l.sibling);
  }
  function Do(t, e, l) {
    if (ne && typeof ne.onCommitFiberUnmount == "function")
      try {
        ne.onCommitFiberUnmount(xa, l);
      } catch {}
    switch (l.tag) {
      case 26:
        Dt || Me(l, e),
          Je(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        Dt || Me(l, e);
        var a = Et,
          u = It;
        ml(l.type) && ((Et = l.stateNode), (It = !1)),
          Je(t, e, l),
          pu(l.stateNode),
          (Et = a),
          (It = u);
        break;
      case 5:
        Dt || Me(l, e);
      case 6:
        if (
          ((a = Et),
          (u = It),
          (Et = null),
          Je(t, e, l),
          (Et = a),
          (It = u),
          Et !== null)
        )
          if (It)
            try {
              (Et.nodeType === 9
                ? Et.body
                : Et.nodeName === "HTML"
                ? Et.ownerDocument.body
                : Et
              ).removeChild(l.stateNode);
            } catch (n) {
              St(l, e, n);
            }
          else
            try {
              Et.removeChild(l.stateNode);
            } catch (n) {
              St(l, e, n);
            }
        break;
      case 18:
        Et !== null &&
          (It
            ? ((t = Et),
              vd(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                l.stateNode
              ),
              Du(t))
            : vd(Et, l.stateNode));
        break;
      case 4:
        (a = Et),
          (u = It),
          (Et = l.stateNode.containerInfo),
          (It = !0),
          Je(t, e, l),
          (Et = a),
          (It = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Dt || cl(2, l, e), Dt || cl(4, l, e), Je(t, e, l);
        break;
      case 1:
        Dt ||
          (Me(l, e),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && Eo(l, e, a)),
          Je(t, e, l);
        break;
      case 21:
        Je(t, e, l);
        break;
      case 22:
        (Dt = (a = Dt) || l.memoizedState !== null), Je(t, e, l), (Dt = a);
        break;
      default:
        Je(t, e, l);
    }
  }
  function Uo(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Du(t);
      } catch (l) {
        St(e, e.return, l);
      }
  }
  function iy(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Ro()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Ro()),
          e
        );
      default:
        throw Error(f(435, t.tag));
    }
  }
  function Gc(t, e) {
    var l = iy(t);
    e.forEach(function (a) {
      var u = my.bind(null, t, a);
      l.has(a) || (l.add(a), a.then(u, u));
    });
  }
  function se(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var u = l[a],
          n = t,
          s = e,
          o = s;
        t: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (ml(o.type)) {
                (Et = o.stateNode), (It = !1);
                break t;
              }
              break;
            case 5:
              (Et = o.stateNode), (It = !1);
              break t;
            case 3:
            case 4:
              (Et = o.stateNode.containerInfo), (It = !0);
              break t;
          }
          o = o.return;
        }
        if (Et === null) throw Error(f(160));
        Do(n, s, u),
          (Et = null),
          (It = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) Mo(e, t), (e = e.sibling);
  }
  var Oe = null;
  function Mo(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        se(e, t),
          re(t),
          a & 4 && (cl(3, t, t.return), ru(3, t), cl(5, t, t.return));
        break;
      case 1:
        se(e, t),
          re(t),
          a & 512 && (Dt || l === null || Me(l, l.return)),
          a & 64 &&
            Ke &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var u = Oe;
        if (
          (se(e, t),
          re(t),
          a & 512 && (Dt || l === null || Me(l, l.return)),
          a & 4)
        ) {
          var n = l !== null ? l.memoizedState : null;
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (l = t.memoizedProps),
                    (u = u.ownerDocument || u);
                  e: switch (a) {
                    case "title":
                      (n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[qa] ||
                          n[Zt] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(a)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title")
                          )),
                        Xt(n, a, l),
                        (n[Zt] = t),
                        qt(n),
                        (a = n);
                      break t;
                    case "link":
                      var s = Od("link", "href", u).get(a + (l.href || ""));
                      if (s) {
                        for (var o = 0; o < s.length; o++)
                          if (
                            ((n = s[o]),
                            n.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              n.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              n.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              n.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            s.splice(o, 1);
                            break e;
                          }
                      }
                      (n = u.createElement(a)),
                        Xt(n, a, l),
                        u.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (s = Od("meta", "content", u).get(
                          a + (l.content || "")
                        ))
                      ) {
                        for (o = 0; o < s.length; o++)
                          if (
                            ((n = s[o]),
                            n.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              n.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              n.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              n.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            s.splice(o, 1);
                            break e;
                          }
                      }
                      (n = u.createElement(a)),
                        Xt(n, a, l),
                        u.head.appendChild(n);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  (n[Zt] = t), qt(n), (a = n);
                }
                t.stateNode = a;
              } else Rd(u, t.type, t.stateNode);
            else t.stateNode = Ad(u, a, t.memoizedProps);
          else
            n !== a
              ? (n === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : n.count--,
                a === null
                  ? Rd(u, t.type, t.stateNode)
                  : Ad(u, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                Bc(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        se(e, t),
          re(t),
          a & 512 && (Dt || l === null || Me(l, l.return)),
          l !== null && a & 4 && Bc(t, t.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (se(e, t),
          re(t),
          a & 512 && (Dt || l === null || Me(l, l.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            Pl(u, "");
          } catch (A) {
            St(t, t.return, A);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), Bc(t, u, l !== null ? l.memoizedProps : u)),
          a & 1024 && (Lc = !0);
        break;
      case 6:
        if ((se(e, t), re(t), a & 4)) {
          if (t.stateNode === null) throw Error(f(162));
          (a = t.memoizedProps), (l = t.stateNode);
          try {
            l.nodeValue = a;
          } catch (A) {
            St(t, t.return, A);
          }
        }
        break;
      case 3:
        if (
          ((Xn = null),
          (u = Oe),
          (Oe = Ln(e.containerInfo)),
          se(e, t),
          (Oe = u),
          re(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Du(e.containerInfo);
          } catch (A) {
            St(t, t.return, A);
          }
        Lc && ((Lc = !1), No(t));
        break;
      case 4:
        (a = Oe),
          (Oe = Ln(t.stateNode.containerInfo)),
          se(e, t),
          re(t),
          (Oe = a);
        break;
      case 12:
        se(e, t), re(t);
        break;
      case 13:
        se(e, t),
          re(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Kc = ze()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Gc(t, a)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null,
          E = Ke,
          D = Dt;
        if (
          ((Ke = E || u),
          (Dt = D || h),
          se(e, t),
          (Dt = D),
          (Ke = E),
          re(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = u ? e._visibility & -2 : e._visibility | 1,
              u && (l === null || h || Ke || Dt || Yl(t)),
              l = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                h = l = e;
                try {
                  if (((n = h.stateNode), u))
                    (s = n.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none");
                  else {
                    o = h.stateNode;
                    var N = h.memoizedProps.style,
                      T =
                        N != null && N.hasOwnProperty("display")
                          ? N.display
                          : null;
                    o.style.display =
                      T == null || typeof T == "boolean" ? "" : ("" + T).trim();
                  }
                } catch (A) {
                  St(h, h.return, A);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                h = e;
                try {
                  h.stateNode.nodeValue = u ? "" : h.memoizedProps;
                } catch (A) {
                  St(h, h.return, A);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), (e = e.return);
            }
            l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), Gc(t, l))));
        break;
      case 19:
        se(e, t),
          re(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Gc(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        se(e, t), re(t);
    }
  }
  function re(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (Ao(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var u = l.stateNode,
              n = jc(t);
            _n(t, n, u);
            break;
          case 5:
            var s = l.stateNode;
            l.flags & 32 && (Pl(s, ""), (l.flags &= -33));
            var o = jc(t);
            _n(t, o, s);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo,
              E = jc(t);
            Yc(t, E, h);
            break;
          default:
            throw Error(f(161));
        }
      } catch (D) {
        St(t, t.return, D);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function No(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        No(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function fl(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) _o(t, e.alternate, e), (e = e.sibling);
  }
  function Yl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          cl(4, e, e.return), Yl(e);
          break;
        case 1:
          Me(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && Eo(e, e.return, l),
            Yl(e);
          break;
        case 27:
          pu(e.stateNode);
        case 26:
        case 5:
          Me(e, e.return), Yl(e);
          break;
        case 22:
          e.memoizedState === null && Yl(e);
          break;
        case 30:
          Yl(e);
          break;
        default:
          Yl(e);
      }
      t = t.sibling;
    }
  }
  function sl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        u = t,
        n = e,
        s = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          sl(u, n, l), ru(4, n);
          break;
        case 1:
          if (
            (sl(u, n, l),
            (a = n),
            (u = a.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (E) {
              St(a, a.return, E);
            }
          if (((a = n), (u = a.updateQueue), u !== null)) {
            var o = a.stateNode;
            try {
              var h = u.shared.hiddenCallbacks;
              if (h !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < h.length; u++)
                  nr(h[u], o);
            } catch (E) {
              St(a, a.return, E);
            }
          }
          l && s & 64 && po(n), ou(n, n.return);
          break;
        case 27:
          Oo(n);
        case 26:
        case 5:
          sl(u, n, l), l && a === null && s & 4 && To(n), ou(n, n.return);
          break;
        case 12:
          sl(u, n, l);
          break;
        case 13:
          sl(u, n, l), l && s & 4 && Uo(u, n);
          break;
        case 22:
          n.memoizedState === null && sl(u, n, l), ou(n, n.return);
          break;
        case 30:
          break;
        default:
          sl(u, n, l);
      }
      e = e.sibling;
    }
  }
  function Xc(t, e) {
    var l = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && Fa(l));
  }
  function wc(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Fa(t));
  }
  function Ne(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) xo(t, e, l, a), (e = e.sibling);
  }
  function xo(t, e, l, a) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ne(t, e, l, a), u & 2048 && ru(9, e);
        break;
      case 1:
        Ne(t, e, l, a);
        break;
      case 3:
        Ne(t, e, l, a),
          u & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Fa(t)));
        break;
      case 12:
        if (u & 2048) {
          Ne(t, e, l, a), (t = e.stateNode);
          try {
            var n = e.memoizedProps,
              s = n.id,
              o = n.onPostCommit;
            typeof o == "function" &&
              o(
                s,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (h) {
            St(e, e.return, h);
          }
        } else Ne(t, e, l, a);
        break;
      case 13:
        Ne(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        (n = e.stateNode),
          (s = e.alternate),
          e.memoizedState !== null
            ? n._visibility & 2
              ? Ne(t, e, l, a)
              : du(t, e)
            : n._visibility & 2
            ? Ne(t, e, l, a)
            : ((n._visibility |= 2),
              Sa(t, e, l, a, (e.subtreeFlags & 10256) !== 0)),
          u & 2048 && Xc(s, e);
        break;
      case 24:
        Ne(t, e, l, a), u & 2048 && wc(e.alternate, e);
        break;
      default:
        Ne(t, e, l, a);
    }
  }
  function Sa(t, e, l, a, u) {
    for (u = u && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var n = t,
        s = e,
        o = l,
        h = a,
        E = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Sa(n, s, o, h, u), ru(8, s);
          break;
        case 23:
          break;
        case 22:
          var D = s.stateNode;
          s.memoizedState !== null
            ? D._visibility & 2
              ? Sa(n, s, o, h, u)
              : du(n, s)
            : ((D._visibility |= 2), Sa(n, s, o, h, u)),
            u && E & 2048 && Xc(s.alternate, s);
          break;
        case 24:
          Sa(n, s, o, h, u), u && E & 2048 && wc(s.alternate, s);
          break;
        default:
          Sa(n, s, o, h, u);
      }
      e = e.sibling;
    }
  }
  function du(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          u = a.flags;
        switch (a.tag) {
          case 22:
            du(l, a), u & 2048 && Xc(a.alternate, a);
            break;
          case 24:
            du(l, a), u & 2048 && wc(a.alternate, a);
            break;
          default:
            du(l, a);
        }
        e = e.sibling;
      }
  }
  var hu = 8192;
  function ga(t) {
    if (t.subtreeFlags & hu)
      for (t = t.child; t !== null; ) Co(t), (t = t.sibling);
  }
  function Co(t) {
    switch (t.tag) {
      case 26:
        ga(t),
          t.flags & hu &&
            t.memoizedState !== null &&
            Vy(Oe, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        ga(t);
        break;
      case 3:
      case 4:
        var e = Oe;
        (Oe = Ln(t.stateNode.containerInfo)), ga(t), (Oe = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = hu), (hu = 16777216), ga(t), (hu = e))
            : ga(t));
        break;
      default:
        ga(t);
    }
  }
  function Ho(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function yu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (jt = a), Bo(a, t);
        }
      Ho(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) qo(t), (t = t.sibling);
  }
  function qo(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        yu(t), t.flags & 2048 && cl(9, t, t.return);
        break;
      case 3:
        yu(t);
        break;
      case 12:
        yu(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), zn(t))
          : yu(t);
        break;
      default:
        yu(t);
    }
  }
  function zn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (jt = a), Bo(a, t);
        }
      Ho(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          cl(8, e, e.return), zn(e);
          break;
        case 22:
          (l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), zn(e));
          break;
        default:
          zn(e);
      }
      t = t.sibling;
    }
  }
  function Bo(t, e) {
    for (; jt !== null; ) {
      var l = jt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          cl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Fa(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (jt = a);
      else
        t: for (l = t; jt !== null; ) {
          a = jt;
          var u = a.sibling,
            n = a.return;
          if ((zo(a), a === l)) {
            jt = null;
            break t;
          }
          if (u !== null) {
            (u.return = n), (jt = u);
            break t;
          }
          jt = n;
        }
    }
  }
  var cy = {
      getCacheForType: function (t) {
        var e = Vt(xt),
          l = e.data.get(t);
        return l === void 0 && ((l = t()), e.data.set(t, l)), l;
      },
    },
    fy = typeof WeakMap == "function" ? WeakMap : Map,
    ot = 0,
    gt = null,
    at = null,
    it = 0,
    dt = 0,
    oe = null,
    rl = !1,
    ba = !1,
    Qc = !1,
    ke = 0,
    Rt = 0,
    ol = 0,
    Ll = 0,
    Zc = 0,
    Ee = 0,
    pa = 0,
    mu = null,
    te = null,
    Vc = !1,
    Kc = 0,
    Dn = 1 / 0,
    Un = null,
    dl = null,
    Gt = 0,
    hl = null,
    Ea = null,
    Ta = 0,
    Jc = 0,
    kc = null,
    jo = null,
    vu = 0,
    $c = null;
  function de() {
    if ((ot & 2) !== 0 && it !== 0) return it & -it;
    if (U.T !== null) {
      var t = sa;
      return t !== 0 ? t : lf();
    }
    return Pf();
  }
  function Yo() {
    Ee === 0 && (Ee = (it & 536870912) === 0 || rt ? kf() : 536870912);
    var t = pe.current;
    return t !== null && (t.flags |= 32), Ee;
  }
  function he(t, e, l) {
    ((t === gt && (dt === 2 || dt === 9)) || t.cancelPendingCommit !== null) &&
      (Aa(t, 0), yl(t, it, Ee, !1)),
      Ha(t, l),
      ((ot & 2) === 0 || t !== gt) &&
        (t === gt &&
          ((ot & 2) === 0 && (Ll |= l), Rt === 4 && yl(t, it, Ee, !1)),
        xe(t));
  }
  function Lo(t, e, l) {
    if ((ot & 6) !== 0) throw Error(f(327));
    var a = (!l && (e & 124) === 0 && (e & t.expiredLanes) === 0) || Ca(t, e),
      u = a ? oy(t, e) : Pc(t, e, !0),
      n = a;
    do {
      if (u === 0) {
        ba && !a && yl(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), n && !sy(l))) {
          (u = Pc(t, e, !1)), (n = !1);
          continue;
        }
        if (u === 2) {
          if (((n = e), t.errorRecoveryDisabledLanes & n)) var s = 0;
          else
            (s = t.pendingLanes & -536870913),
              (s = s !== 0 ? s : s & 536870912 ? 536870912 : 0);
          if (s !== 0) {
            e = s;
            t: {
              var o = t;
              u = mu;
              var h = o.current.memoizedState.isDehydrated;
              if ((h && (Aa(o, s).flags |= 256), (s = Pc(o, s, !1)), s !== 2)) {
                if (Qc && !h) {
                  (o.errorRecoveryDisabledLanes |= n), (Ll |= n), (u = 4);
                  break t;
                }
                (n = te),
                  (te = u),
                  n !== null && (te === null ? (te = n) : te.push.apply(te, n));
              }
              u = s;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Aa(t, 0), yl(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (n = u), n)) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              yl(a, e, Ee, !rl);
              break t;
            case 2:
              te = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && ((u = Kc + 300 - ze()), 10 < u)) {
            if ((yl(a, e, Ee, !rl), Lu(a, 0, !0) !== 0)) break t;
            a.timeoutHandle = yd(
              Go.bind(null, a, l, te, Un, Vc, e, Ee, Ll, pa, rl, n, 2, -0, 0),
              u
            );
            break t;
          }
          Go(a, l, te, Un, Vc, e, Ee, Ll, pa, rl, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    xe(t);
  }
  function Go(t, e, l, a, u, n, s, o, h, E, D, N, T, A) {
    if (
      ((t.timeoutHandle = -1),
      (N = e.subtreeFlags),
      (N & 8192 || (N & 16785408) === 16785408) &&
        ((Au = { stylesheets: null, count: 0, unsuspend: Zy }),
        Co(e),
        (N = Ky()),
        N !== null))
    ) {
      (t.cancelPendingCommit = N(
        Jo.bind(null, t, e, n, l, a, u, s, o, h, D, 1, T, A)
      )),
        yl(t, n, s, !E);
      return;
    }
    Jo(t, e, n, l, a, u, s, o, h);
  }
  function sy(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var u = l[a],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!ce(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        (l.return = e), (e = l);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function yl(t, e, l, a) {
    (e &= ~Zc),
      (e &= ~Ll),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var u = e; 0 < u; ) {
      var n = 31 - ie(u),
        s = 1 << n;
      (a[n] = -1), (u &= ~s);
    }
    l !== 0 && Ff(t, l, e);
  }
  function Mn() {
    return (ot & 6) === 0 ? (Su(0), !1) : !0;
  }
  function Fc() {
    if (at !== null) {
      if (dt === 0) var t = at.return;
      else (t = at), (Ge = Cl = null), hc(t), (ma = null), (cu = 0), (t = at);
      for (; t !== null; ) bo(t.alternate, t), (t = t.return);
      at = null;
    }
  }
  function Aa(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && ((t.timeoutHandle = -1), zy(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      Fc(),
      (gt = t),
      (at = l = je(t.current, null)),
      (it = e),
      (dt = 0),
      (oe = null),
      (rl = !1),
      (ba = Ca(t, e)),
      (Qc = !1),
      (pa = Ee = Zc = Ll = ol = Rt = 0),
      (te = mu = null),
      (Vc = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var u = 31 - ie(a),
          n = 1 << u;
        (e |= t[u]), (a &= ~n);
      }
    return (ke = e), Wu(), l;
  }
  function Xo(t, e) {
    (et = null),
      (U.H = Sn),
      e === Pa || e === cn
        ? ((e = ar()), (dt = 3))
        : e === tr
        ? ((e = ar()), (dt = 4))
        : (dt =
            e === uo
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (oe = e),
      at === null && ((Rt = 1), Tn(t, ve(e, t.current)));
  }
  function wo() {
    var t = U.H;
    return (U.H = Sn), t === null ? Sn : t;
  }
  function Qo() {
    var t = U.A;
    return (U.A = cy), t;
  }
  function Wc() {
    (Rt = 4),
      rl || ((it & 4194048) !== it && pe.current !== null) || (ba = !0),
      ((ol & 134217727) === 0 && (Ll & 134217727) === 0) ||
        gt === null ||
        yl(gt, it, Ee, !1);
  }
  function Pc(t, e, l) {
    var a = ot;
    ot |= 2;
    var u = wo(),
      n = Qo();
    (gt !== t || it !== e) && ((Un = null), Aa(t, e)), (e = !1);
    var s = Rt;
    t: do
      try {
        if (dt !== 0 && at !== null) {
          var o = at,
            h = oe;
          switch (dt) {
            case 8:
              Fc(), (s = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              pe.current === null && (e = !0);
              var E = dt;
              if (((dt = 0), (oe = null), Oa(t, o, h, E), l && ba)) {
                s = 0;
                break t;
              }
              break;
            default:
              (E = dt), (dt = 0), (oe = null), Oa(t, o, h, E);
          }
        }
        ry(), (s = Rt);
        break;
      } catch (D) {
        Xo(t, D);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Ge = Cl = null),
      (ot = a),
      (U.H = u),
      (U.A = n),
      at === null && ((gt = null), (it = 0), Wu()),
      s
    );
  }
  function ry() {
    for (; at !== null; ) Zo(at);
  }
  function oy(t, e) {
    var l = ot;
    ot |= 2;
    var a = wo(),
      u = Qo();
    gt !== t || it !== e
      ? ((Un = null), (Dn = ze() + 500), Aa(t, e))
      : (ba = Ca(t, e));
    t: do
      try {
        if (dt !== 0 && at !== null) {
          e = at;
          var n = oe;
          e: switch (dt) {
            case 1:
              (dt = 0), (oe = null), Oa(t, e, n, 1);
              break;
            case 2:
            case 9:
              if (er(n)) {
                (dt = 0), (oe = null), Vo(e);
                break;
              }
              (e = function () {
                (dt !== 2 && dt !== 9) || gt !== t || (dt = 7), xe(t);
              }),
                n.then(e, e);
              break t;
            case 3:
              dt = 7;
              break t;
            case 4:
              dt = 5;
              break t;
            case 7:
              er(n)
                ? ((dt = 0), (oe = null), Vo(e))
                : ((dt = 0), (oe = null), Oa(t, e, n, 7));
              break;
            case 5:
              var s = null;
              switch (at.tag) {
                case 26:
                  s = at.memoizedState;
                case 5:
                case 27:
                  var o = at;
                  if (!s || _d(s)) {
                    (dt = 0), (oe = null);
                    var h = o.sibling;
                    if (h !== null) at = h;
                    else {
                      var E = o.return;
                      E !== null ? ((at = E), Nn(E)) : (at = null);
                    }
                    break e;
                  }
              }
              (dt = 0), (oe = null), Oa(t, e, n, 5);
              break;
            case 6:
              (dt = 0), (oe = null), Oa(t, e, n, 6);
              break;
            case 8:
              Fc(), (Rt = 6);
              break t;
            default:
              throw Error(f(462));
          }
        }
        dy();
        break;
      } catch (D) {
        Xo(t, D);
      }
    while (!0);
    return (
      (Ge = Cl = null),
      (U.H = a),
      (U.A = u),
      (ot = l),
      at !== null ? 0 : ((gt = null), (it = 0), Wu(), Rt)
    );
  }
  function dy() {
    for (; at !== null && !Hh(); ) Zo(at);
  }
  function Zo(t) {
    var e = So(t.alternate, t, ke);
    (t.memoizedProps = t.pendingProps), e === null ? Nn(t) : (at = e);
  }
  function Vo(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = ro(l, e, e.pendingProps, e.type, void 0, it);
        break;
      case 11:
        e = ro(l, e, e.pendingProps, e.type.render, e.ref, it);
        break;
      case 5:
        hc(e);
      default:
        bo(l, e), (e = at = Vs(e, ke)), (e = So(l, e, ke));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Nn(t) : (at = e);
  }
  function Oa(t, e, l, a) {
    (Ge = Cl = null), hc(e), (ma = null), (cu = 0);
    var u = e.return;
    try {
      if (ey(t, u, e, l, it)) {
        (Rt = 1), Tn(t, ve(l, t.current)), (at = null);
        return;
      }
    } catch (n) {
      if (u !== null) throw ((at = u), n);
      (Rt = 1), Tn(t, ve(l, t.current)), (at = null);
      return;
    }
    e.flags & 32768
      ? (rt || a === 1
          ? (t = !0)
          : ba || (it & 536870912) !== 0
          ? (t = !1)
          : ((rl = t = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = pe.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        Ko(e, t))
      : Nn(e);
  }
  function Nn(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Ko(e, rl);
        return;
      }
      t = e.return;
      var l = ay(e.alternate, e, ke);
      if (l !== null) {
        at = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        at = e;
        return;
      }
      at = e = t;
    } while (e !== null);
    Rt === 0 && (Rt = 5);
  }
  function Ko(t, e) {
    do {
      var l = uy(t.alternate, t);
      if (l !== null) {
        (l.flags &= 32767), (at = l);
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        at = t;
        return;
      }
      at = t = l;
    } while (t !== null);
    (Rt = 6), (at = null);
  }
  function Jo(t, e, l, a, u, n, s, o, h) {
    t.cancelPendingCommit = null;
    do xn();
    while (Gt !== 0);
    if ((ot & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (
        ((n = e.lanes | e.childLanes),
        (n |= wi),
        Zh(t, l, n, s, o, h),
        t === gt && ((at = gt = null), (it = 0)),
        (Ea = e),
        (hl = t),
        (Ta = l),
        (Jc = n),
        (kc = u),
        (jo = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            vy(Bu, function () {
              return Po(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = U.T), (U.T = null), (u = j.p), (j.p = 2), (s = ot), (ot |= 4);
        try {
          ny(t, e, l);
        } finally {
          (ot = s), (j.p = u), (U.T = a);
        }
      }
      (Gt = 1), ko(), $o(), Fo();
    }
  }
  function ko() {
    if (Gt === 1) {
      Gt = 0;
      var t = hl,
        e = Ea,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        (l = U.T), (U.T = null);
        var a = j.p;
        j.p = 2;
        var u = ot;
        ot |= 4;
        try {
          Mo(e, t);
          var n = of,
            s = qs(t.containerInfo),
            o = n.focusedElem,
            h = n.selectionRange;
          if (
            s !== o &&
            o &&
            o.ownerDocument &&
            Hs(o.ownerDocument.documentElement, o)
          ) {
            if (h !== null && ji(o)) {
              var E = h.start,
                D = h.end;
              if ((D === void 0 && (D = E), "selectionStart" in o))
                (o.selectionStart = E),
                  (o.selectionEnd = Math.min(D, o.value.length));
              else {
                var N = o.ownerDocument || document,
                  T = (N && N.defaultView) || window;
                if (T.getSelection) {
                  var A = T.getSelection(),
                    k = o.textContent.length,
                    V = Math.min(h.start, k),
                    mt = h.end === void 0 ? V : Math.min(h.end, k);
                  !A.extend && V > mt && ((s = mt), (mt = V), (V = s));
                  var b = Cs(o, V),
                    v = Cs(o, mt);
                  if (
                    b &&
                    v &&
                    (A.rangeCount !== 1 ||
                      A.anchorNode !== b.node ||
                      A.anchorOffset !== b.offset ||
                      A.focusNode !== v.node ||
                      A.focusOffset !== v.offset)
                  ) {
                    var p = N.createRange();
                    p.setStart(b.node, b.offset),
                      A.removeAllRanges(),
                      V > mt
                        ? (A.addRange(p), A.extend(v.node, v.offset))
                        : (p.setEnd(v.node, v.offset), A.addRange(p));
                  }
                }
              }
            }
            for (N = [], A = o; (A = A.parentNode); )
              A.nodeType === 1 &&
                N.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
            for (
              typeof o.focus == "function" && o.focus(), o = 0;
              o < N.length;
              o++
            ) {
              var M = N[o];
              (M.element.scrollLeft = M.left), (M.element.scrollTop = M.top);
            }
          }
          (Zn = !!rf), (of = rf = null);
        } finally {
          (ot = u), (j.p = a), (U.T = l);
        }
      }
      (t.current = e), (Gt = 2);
    }
  }
  function $o() {
    if (Gt === 2) {
      Gt = 0;
      var t = hl,
        e = Ea,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        (l = U.T), (U.T = null);
        var a = j.p;
        j.p = 2;
        var u = ot;
        ot |= 4;
        try {
          _o(t, e.alternate, e);
        } finally {
          (ot = u), (j.p = a), (U.T = l);
        }
      }
      Gt = 3;
    }
  }
  function Fo() {
    if (Gt === 4 || Gt === 3) {
      (Gt = 0), qh();
      var t = hl,
        e = Ea,
        l = Ta,
        a = jo;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Gt = 5)
        : ((Gt = 0), (Ea = hl = null), Wo(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (
        (u === 0 && (dl = null),
        vi(l),
        (e = e.stateNode),
        ne && typeof ne.onCommitFiberRoot == "function")
      )
        try {
          ne.onCommitFiberRoot(xa, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = U.T), (u = j.p), (j.p = 2), (U.T = null);
        try {
          for (var n = t.onRecoverableError, s = 0; s < a.length; s++) {
            var o = a[s];
            n(o.value, { componentStack: o.stack });
          }
        } finally {
          (U.T = e), (j.p = u);
        }
      }
      (Ta & 3) !== 0 && xn(),
        xe(t),
        (u = t.pendingLanes),
        (l & 4194090) !== 0 && (u & 42) !== 0
          ? t === $c
            ? vu++
            : ((vu = 0), ($c = t))
          : (vu = 0),
        Su(0);
    }
  }
  function Wo(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Fa(e)));
  }
  function xn(t) {
    return ko(), $o(), Fo(), Po();
  }
  function Po() {
    if (Gt !== 5) return !1;
    var t = hl,
      e = Jc;
    Jc = 0;
    var l = vi(Ta),
      a = U.T,
      u = j.p;
    try {
      (j.p = 32 > l ? 32 : l), (U.T = null), (l = kc), (kc = null);
      var n = hl,
        s = Ta;
      if (((Gt = 0), (Ea = hl = null), (Ta = 0), (ot & 6) !== 0))
        throw Error(f(331));
      var o = ot;
      if (
        ((ot |= 4),
        qo(n.current),
        xo(n, n.current, s, l),
        (ot = o),
        Su(0, !1),
        ne && typeof ne.onPostCommitFiberRoot == "function")
      )
        try {
          ne.onPostCommitFiberRoot(xa, n);
        } catch {}
      return !0;
    } finally {
      (j.p = u), (U.T = a), Wo(t, e);
    }
  }
  function Io(t, e, l) {
    (e = ve(l, e)),
      (e = zc(t.stateNode, e, 2)),
      (t = al(t, e, 2)),
      t !== null && (Ha(t, 2), xe(t));
  }
  function St(t, e, l) {
    if (t.tag === 3) Io(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Io(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (dl === null || !dl.has(a)))
          ) {
            (t = ve(l, t)),
              (l = lo(2)),
              (a = al(e, l, 2)),
              a !== null && (ao(l, a, e, t), Ha(a, 2), xe(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Ic(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new fy();
      var u = new Set();
      a.set(e, u);
    } else (u = a.get(e)), u === void 0 && ((u = new Set()), a.set(e, u));
    u.has(l) ||
      ((Qc = !0), u.add(l), (t = hy.bind(null, t, e, l)), e.then(t, t));
  }
  function hy(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      gt === t &&
        (it & l) === l &&
        (Rt === 4 || (Rt === 3 && (it & 62914560) === it && 300 > ze() - Kc)
          ? (ot & 2) === 0 && Aa(t, 0)
          : (Zc |= l),
        pa === it && (pa = 0)),
      xe(t);
  }
  function td(t, e) {
    e === 0 && (e = $f()), (t = na(t, e)), t !== null && (Ha(t, e), xe(t));
  }
  function yy(t) {
    var e = t.memoizedState,
      l = 0;
    e !== null && (l = e.retryLane), td(t, l);
  }
  function my(t, e) {
    var l = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          u = t.memoizedState;
        u !== null && (l = u.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    a !== null && a.delete(e), td(t, l);
  }
  function vy(t, e) {
    return di(t, e);
  }
  var Cn = null,
    Ra = null,
    tf = !1,
    Hn = !1,
    ef = !1,
    Gl = 0;
  function xe(t) {
    t !== Ra &&
      t.next === null &&
      (Ra === null ? (Cn = Ra = t) : (Ra = Ra.next = t)),
      (Hn = !0),
      tf || ((tf = !0), gy());
  }
  function Su(t, e) {
    if (!ef && Hn) {
      ef = !0;
      do
        for (var l = !1, a = Cn; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var s = a.suspendedLanes,
                o = a.pingedLanes;
              (n = (1 << (31 - ie(42 | t) + 1)) - 1),
                (n &= u & ~(s & ~o)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((l = !0), ud(a, n));
          } else
            (n = it),
              (n = Lu(
                a,
                a === gt ? n : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (n & 3) === 0 || Ca(a, n) || ((l = !0), ud(a, n));
          a = a.next;
        }
      while (l);
      ef = !1;
    }
  }
  function Sy() {
    ed();
  }
  function ed() {
    Hn = tf = !1;
    var t = 0;
    Gl !== 0 && (_y() && (t = Gl), (Gl = 0));
    for (var e = ze(), l = null, a = Cn; a !== null; ) {
      var u = a.next,
        n = ld(a, e);
      n === 0
        ? ((a.next = null),
          l === null ? (Cn = u) : (l.next = u),
          u === null && (Ra = l))
        : ((l = a), (t !== 0 || (n & 3) !== 0) && (Hn = !0)),
        (a = u);
    }
    Su(t);
  }
  function ld(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        u = t.expirationTimes,
        n = t.pendingLanes & -62914561;
      0 < n;

    ) {
      var s = 31 - ie(n),
        o = 1 << s,
        h = u[s];
      h === -1
        ? ((o & l) === 0 || (o & a) !== 0) && (u[s] = Qh(o, e))
        : h <= e && (t.expiredLanes |= o),
        (n &= ~o);
    }
    if (
      ((e = gt),
      (l = it),
      (l = Lu(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (a = t.callbackNode),
      l === 0 ||
        (t === e && (dt === 2 || dt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && hi(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Ca(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && hi(a), vi(l))) {
        case 2:
        case 8:
          l = Kf;
          break;
        case 32:
          l = Bu;
          break;
        case 268435456:
          l = Jf;
          break;
        default:
          l = Bu;
      }
      return (
        (a = ad.bind(null, t)),
        (l = di(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && hi(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function ad(t, e) {
    if (Gt !== 0 && Gt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var l = t.callbackNode;
    if (xn() && t.callbackNode !== l) return null;
    var a = it;
    return (
      (a = Lu(
        t,
        t === gt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (Lo(t, a, e),
          ld(t, ze()),
          t.callbackNode != null && t.callbackNode === l
            ? ad.bind(null, t)
            : null)
    );
  }
  function ud(t, e) {
    if (xn()) return null;
    Lo(t, e, !0);
  }
  function gy() {
    Dy(function () {
      (ot & 6) !== 0 ? di(Vf, Sy) : ed();
    });
  }
  function lf() {
    return Gl === 0 && (Gl = kf()), Gl;
  }
  function nd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Zu("" + t);
  }
  function id(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function by(t, e, l, a, u) {
    if (e === "submit" && l && l.stateNode === u) {
      var n = nd((u[Ft] || null).action),
        s = a.submitter;
      s &&
        ((e = (e = s[Ft] || null)
          ? nd(e.formAction)
          : s.getAttribute("formAction")),
        e !== null && ((n = e), (s = null)));
      var o = new ku("action", "action", null, a, u);
      t.push({
        event: o,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Gl !== 0) {
                  var h = s ? id(u, s) : new FormData(u);
                  Tc(
                    l,
                    { pending: !0, data: h, method: u.method, action: n },
                    null,
                    h
                  );
                }
              } else
                typeof n == "function" &&
                  (o.preventDefault(),
                  (h = s ? id(u, s) : new FormData(u)),
                  Tc(
                    l,
                    { pending: !0, data: h, method: u.method, action: n },
                    n,
                    h
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var af = 0; af < Xi.length; af++) {
    var uf = Xi[af],
      py = uf.toLowerCase(),
      Ey = uf[0].toUpperCase() + uf.slice(1);
    Ae(py, "on" + Ey);
  }
  Ae(Ys, "onAnimationEnd"),
    Ae(Ls, "onAnimationIteration"),
    Ae(Gs, "onAnimationStart"),
    Ae("dblclick", "onDoubleClick"),
    Ae("focusin", "onFocus"),
    Ae("focusout", "onBlur"),
    Ae(Y0, "onTransitionRun"),
    Ae(L0, "onTransitionStart"),
    Ae(G0, "onTransitionCancel"),
    Ae(Xs, "onTransitionEnd"),
    $l("onMouseEnter", ["mouseout", "mouseover"]),
    $l("onMouseLeave", ["mouseout", "mouseover"]),
    $l("onPointerEnter", ["pointerout", "pointerover"]),
    $l("onPointerLeave", ["pointerout", "pointerover"]),
    Ol(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Ol(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Ol("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ol(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ol(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ol(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var gu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Ty = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(gu)
    );
  function cd(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        u = a.event;
      a = a.listeners;
      t: {
        var n = void 0;
        if (e)
          for (var s = a.length - 1; 0 <= s; s--) {
            var o = a[s],
              h = o.instance,
              E = o.currentTarget;
            if (((o = o.listener), h !== n && u.isPropagationStopped()))
              break t;
            (n = o), (u.currentTarget = E);
            try {
              n(u);
            } catch (D) {
              En(D);
            }
            (u.currentTarget = null), (n = h);
          }
        else
          for (s = 0; s < a.length; s++) {
            if (
              ((o = a[s]),
              (h = o.instance),
              (E = o.currentTarget),
              (o = o.listener),
              h !== n && u.isPropagationStopped())
            )
              break t;
            (n = o), (u.currentTarget = E);
            try {
              n(u);
            } catch (D) {
              En(D);
            }
            (u.currentTarget = null), (n = h);
          }
      }
    }
  }
  function ut(t, e) {
    var l = e[Si];
    l === void 0 && (l = e[Si] = new Set());
    var a = t + "__bubble";
    l.has(a) || (fd(e, t, 2, !1), l.add(a));
  }
  function nf(t, e, l) {
    var a = 0;
    e && (a |= 4), fd(l, t, a, e);
  }
  var qn = "_reactListening" + Math.random().toString(36).slice(2);
  function cf(t) {
    if (!t[qn]) {
      (t[qn] = !0),
        ts.forEach(function (l) {
          l !== "selectionchange" && (Ty.has(l) || nf(l, !1, t), nf(l, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[qn] || ((e[qn] = !0), nf("selectionchange", !1, e));
    }
  }
  function fd(t, e, l, a) {
    switch (xd(e)) {
      case 2:
        var u = $y;
        break;
      case 8:
        u = Fy;
        break;
      default:
        u = Ef;
    }
    (l = u.bind(null, e, l, t)),
      (u = void 0),
      !Di ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: u })
          : t.addEventListener(e, l, !0)
        : u !== void 0
        ? t.addEventListener(e, l, { passive: u })
        : t.addEventListener(e, l, !1);
  }
  function ff(t, e, l, a, u) {
    var n = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var s = a.tag;
        if (s === 3 || s === 4) {
          var o = a.stateNode.containerInfo;
          if (o === u) break;
          if (s === 4)
            for (s = a.return; s !== null; ) {
              var h = s.tag;
              if ((h === 3 || h === 4) && s.stateNode.containerInfo === u)
                return;
              s = s.return;
            }
          for (; o !== null; ) {
            if (((s = Kl(o)), s === null)) return;
            if (((h = s.tag), h === 5 || h === 6 || h === 26 || h === 27)) {
              a = n = s;
              continue t;
            }
            o = o.parentNode;
          }
        }
        a = a.return;
      }
    ys(function () {
      var E = n,
        D = _i(l),
        N = [];
      t: {
        var T = ws.get(t);
        if (T !== void 0) {
          var A = ku,
            k = t;
          switch (t) {
            case "keypress":
              if (Ku(l) === 0) break t;
            case "keydown":
            case "keyup":
              A = v0;
              break;
            case "focusin":
              (k = "focus"), (A = xi);
              break;
            case "focusout":
              (k = "blur"), (A = xi);
              break;
            case "beforeblur":
            case "afterblur":
              A = xi;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              A = Ss;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = u0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = b0;
              break;
            case Ys:
            case Ls:
            case Gs:
              A = c0;
              break;
            case Xs:
              A = E0;
              break;
            case "scroll":
            case "scrollend":
              A = l0;
              break;
            case "wheel":
              A = A0;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = s0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = bs;
              break;
            case "toggle":
            case "beforetoggle":
              A = R0;
          }
          var V = (e & 4) !== 0,
            mt = !V && (t === "scroll" || t === "scrollend"),
            b = V ? (T !== null ? T + "Capture" : null) : T;
          V = [];
          for (var v = E, p; v !== null; ) {
            var M = v;
            if (
              ((p = M.stateNode),
              (M = M.tag),
              (M !== 5 && M !== 26 && M !== 27) ||
                p === null ||
                b === null ||
                ((M = ja(v, b)), M != null && V.push(bu(v, M, p))),
              mt)
            )
              break;
            v = v.return;
          }
          0 < V.length &&
            ((T = new A(T, k, null, l, D)), N.push({ event: T, listeners: V }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((T = t === "mouseover" || t === "pointerover"),
            (A = t === "mouseout" || t === "pointerout"),
            T &&
              l !== Ri &&
              (k = l.relatedTarget || l.fromElement) &&
              (Kl(k) || k[Vl]))
          )
            break t;
          if (
            (A || T) &&
            ((T =
              D.window === D
                ? D
                : (T = D.ownerDocument)
                ? T.defaultView || T.parentWindow
                : window),
            A
              ? ((k = l.relatedTarget || l.toElement),
                (A = E),
                (k = k ? Kl(k) : null),
                k !== null &&
                  ((mt = y(k)),
                  (V = k.tag),
                  k !== mt || (V !== 5 && V !== 27 && V !== 6)) &&
                  (k = null))
              : ((A = null), (k = E)),
            A !== k)
          ) {
            if (
              ((V = Ss),
              (M = "onMouseLeave"),
              (b = "onMouseEnter"),
              (v = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((V = bs),
                (M = "onPointerLeave"),
                (b = "onPointerEnter"),
                (v = "pointer")),
              (mt = A == null ? T : Ba(A)),
              (p = k == null ? T : Ba(k)),
              (T = new V(M, v + "leave", A, l, D)),
              (T.target = mt),
              (T.relatedTarget = p),
              (M = null),
              Kl(D) === E &&
                ((V = new V(b, v + "enter", k, l, D)),
                (V.target = p),
                (V.relatedTarget = mt),
                (M = V)),
              (mt = M),
              A && k)
            )
              e: {
                for (V = A, b = k, v = 0, p = V; p; p = _a(p)) v++;
                for (p = 0, M = b; M; M = _a(M)) p++;
                for (; 0 < v - p; ) (V = _a(V)), v--;
                for (; 0 < p - v; ) (b = _a(b)), p--;
                for (; v--; ) {
                  if (V === b || (b !== null && V === b.alternate)) break e;
                  (V = _a(V)), (b = _a(b));
                }
                V = null;
              }
            else V = null;
            A !== null && sd(N, T, A, V, !1),
              k !== null && mt !== null && sd(N, mt, k, V, !0);
          }
        }
        t: {
          if (
            ((T = E ? Ba(E) : window),
            (A = T.nodeName && T.nodeName.toLowerCase()),
            A === "select" || (A === "input" && T.type === "file"))
          )
            var X = zs;
          else if (Rs(T))
            if (Ds) X = q0;
            else {
              X = C0;
              var lt = x0;
            }
          else
            (A = T.nodeName),
              !A ||
              A.toLowerCase() !== "input" ||
              (T.type !== "checkbox" && T.type !== "radio")
                ? E && Oi(E.elementType) && (X = zs)
                : (X = H0);
          if (X && (X = X(t, E))) {
            _s(N, X, l, D);
            break t;
          }
          lt && lt(t, T, E),
            t === "focusout" &&
              E &&
              T.type === "number" &&
              E.memoizedProps.value != null &&
              Ai(T, "number", T.value);
        }
        switch (((lt = E ? Ba(E) : window), t)) {
          case "focusin":
            (Rs(lt) || lt.contentEditable === "true") &&
              ((la = lt), (Yi = E), (Va = null));
            break;
          case "focusout":
            Va = Yi = la = null;
            break;
          case "mousedown":
            Li = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Li = !1), Bs(N, l, D);
            break;
          case "selectionchange":
            if (j0) break;
          case "keydown":
          case "keyup":
            Bs(N, l, D);
        }
        var Q;
        if (Hi)
          t: {
            switch (t) {
              case "compositionstart":
                var K = "onCompositionStart";
                break t;
              case "compositionend":
                K = "onCompositionEnd";
                break t;
              case "compositionupdate":
                K = "onCompositionUpdate";
                break t;
            }
            K = void 0;
          }
        else
          ea
            ? As(t, l) && (K = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              (K = "onCompositionStart");
        K &&
          (ps &&
            l.locale !== "ko" &&
            (ea || K !== "onCompositionStart"
              ? K === "onCompositionEnd" && ea && (Q = ms())
              : ((Ie = D),
                (Ui = "value" in Ie ? Ie.value : Ie.textContent),
                (ea = !0))),
          (lt = Bn(E, K)),
          0 < lt.length &&
            ((K = new gs(K, t, null, l, D)),
            N.push({ event: K, listeners: lt }),
            Q ? (K.data = Q) : ((Q = Os(l)), Q !== null && (K.data = Q)))),
          (Q = z0 ? D0(t, l) : U0(t, l)) &&
            ((K = Bn(E, "onBeforeInput")),
            0 < K.length &&
              ((lt = new gs("onBeforeInput", "beforeinput", null, l, D)),
              N.push({ event: lt, listeners: K }),
              (lt.data = Q))),
          by(N, t, E, l, D);
      }
      cd(N, e);
    });
  }
  function bu(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function Bn(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var u = t,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = ja(t, l)),
          u != null && a.unshift(bu(t, u, n)),
          (u = ja(t, e)),
          u != null && a.push(bu(t, u, n))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function _a(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function sd(t, e, l, a, u) {
    for (var n = e._reactName, s = []; l !== null && l !== a; ) {
      var o = l,
        h = o.alternate,
        E = o.stateNode;
      if (((o = o.tag), h !== null && h === a)) break;
      (o !== 5 && o !== 26 && o !== 27) ||
        E === null ||
        ((h = E),
        u
          ? ((E = ja(l, n)), E != null && s.unshift(bu(l, E, h)))
          : u || ((E = ja(l, n)), E != null && s.push(bu(l, E, h)))),
        (l = l.return);
    }
    s.length !== 0 && t.push({ event: e, listeners: s });
  }
  var Ay = /\r\n?/g,
    Oy = /\u0000|\uFFFD/g;
  function rd(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Ay,
        `
`
      )
      .replace(Oy, "");
  }
  function od(t, e) {
    return (e = rd(e)), rd(t) === e;
  }
  function jn() {}
  function yt(t, e, l, a, u, n) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || Pl(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            Pl(t, "" + a);
        break;
      case "className":
        Xu(t, "class", a);
        break;
      case "tabIndex":
        Xu(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Xu(t, l, a);
        break;
      case "style":
        ds(t, a, n);
        break;
      case "data":
        if (e !== "object") {
          Xu(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        (a = Zu("" + a)), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (l === "formAction"
              ? (e !== "input" && yt(t, e, "name", u.name, u, null),
                yt(t, e, "formEncType", u.formEncType, u, null),
                yt(t, e, "formMethod", u.formMethod, u, null),
                yt(t, e, "formTarget", u.formTarget, u, null))
              : (yt(t, e, "encType", u.encType, u, null),
                yt(t, e, "method", u.method, u, null),
                yt(t, e, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        (a = Zu("" + a)), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = jn);
        break;
      case "onScroll":
        a != null && ut("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ut("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (u.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (l = Zu("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "" + a)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(l, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(l)
          : t.setAttribute(l, a);
        break;
      case "popover":
        ut("beforetoggle", t), ut("toggle", t), Gu(t, "popover", a);
        break;
      case "xlinkActuate":
        qe(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        qe(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        qe(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        qe(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        qe(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        qe(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        qe(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        qe(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        qe(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Gu(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = t0.get(l) || l), Gu(t, l, a));
    }
  }
  function sf(t, e, l, a, u, n) {
    switch (l) {
      case "style":
        ds(t, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (u.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Pl(t, a)
          : (typeof a == "number" || typeof a == "bigint") && Pl(t, "" + a);
        break;
      case "onScroll":
        a != null && ut("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ut("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = jn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!es.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((u = l.endsWith("Capture")),
              (e = l.slice(2, u ? l.length - 7 : void 0)),
              (n = t[Ft] || null),
              (n = n != null ? n[l] : null),
              typeof n == "function" && t.removeEventListener(e, n, u),
              typeof a == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, u);
              break t;
            }
            l in t
              ? (t[l] = a)
              : a === !0
              ? t.setAttribute(l, "")
              : Gu(t, l, a);
          }
    }
  }
  function Xt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ut("error", t), ut("load", t);
        var a = !1,
          u = !1,
          n;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var s = l[n];
            if (s != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, e));
                default:
                  yt(t, e, n, s, l, null);
              }
          }
        u && yt(t, e, "srcSet", l.srcSet, l, null),
          a && yt(t, e, "src", l.src, l, null);
        return;
      case "input":
        ut("invalid", t);
        var o = (n = s = u = null),
          h = null,
          E = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var D = l[a];
            if (D != null)
              switch (a) {
                case "name":
                  u = D;
                  break;
                case "type":
                  s = D;
                  break;
                case "checked":
                  h = D;
                  break;
                case "defaultChecked":
                  E = D;
                  break;
                case "value":
                  n = D;
                  break;
                case "defaultValue":
                  o = D;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (D != null) throw Error(f(137, e));
                  break;
                default:
                  yt(t, e, a, D, l, null);
              }
          }
        fs(t, n, o, h, E, s, u, !1), wu(t);
        return;
      case "select":
        ut("invalid", t), (a = s = n = null);
        for (u in l)
          if (l.hasOwnProperty(u) && ((o = l[u]), o != null))
            switch (u) {
              case "value":
                n = o;
                break;
              case "defaultValue":
                s = o;
                break;
              case "multiple":
                a = o;
              default:
                yt(t, e, u, o, l, null);
            }
        (e = n),
          (l = s),
          (t.multiple = !!a),
          e != null ? Wl(t, !!a, e, !1) : l != null && Wl(t, !!a, l, !0);
        return;
      case "textarea":
        ut("invalid", t), (n = u = a = null);
        for (s in l)
          if (l.hasOwnProperty(s) && ((o = l[s]), o != null))
            switch (s) {
              case "value":
                a = o;
                break;
              case "defaultValue":
                u = o;
                break;
              case "children":
                n = o;
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(f(91));
                break;
              default:
                yt(t, e, s, o, l, null);
            }
        rs(t, a, u, n), wu(t);
        return;
      case "option":
        for (h in l)
          if (l.hasOwnProperty(h) && ((a = l[h]), a != null))
            switch (h) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                yt(t, e, h, a, l, null);
            }
        return;
      case "dialog":
        ut("beforetoggle", t), ut("toggle", t), ut("cancel", t), ut("close", t);
        break;
      case "iframe":
      case "object":
        ut("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < gu.length; a++) ut(gu[a], t);
        break;
      case "image":
        ut("error", t), ut("load", t);
        break;
      case "details":
        ut("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ut("error", t), ut("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (E in l)
          if (l.hasOwnProperty(E) && ((a = l[E]), a != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, e));
              default:
                yt(t, e, E, a, l, null);
            }
        return;
      default:
        if (Oi(e)) {
          for (D in l)
            l.hasOwnProperty(D) &&
              ((a = l[D]), a !== void 0 && sf(t, e, D, a, l, void 0));
          return;
        }
    }
    for (o in l)
      l.hasOwnProperty(o) && ((a = l[o]), a != null && yt(t, e, o, a, l, null));
  }
  function Ry(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          s = null,
          o = null,
          h = null,
          E = null,
          D = null;
        for (A in l) {
          var N = l[A];
          if (l.hasOwnProperty(A) && N != null)
            switch (A) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = N;
              default:
                a.hasOwnProperty(A) || yt(t, e, A, null, a, N);
            }
        }
        for (var T in a) {
          var A = a[T];
          if (((N = l[T]), a.hasOwnProperty(T) && (A != null || N != null)))
            switch (T) {
              case "type":
                n = A;
                break;
              case "name":
                u = A;
                break;
              case "checked":
                E = A;
                break;
              case "defaultChecked":
                D = A;
                break;
              case "value":
                s = A;
                break;
              case "defaultValue":
                o = A;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null) throw Error(f(137, e));
                break;
              default:
                A !== N && yt(t, e, T, A, a, N);
            }
        }
        Ti(t, s, o, h, E, D, n, u);
        return;
      case "select":
        A = s = o = T = null;
        for (n in l)
          if (((h = l[n]), l.hasOwnProperty(n) && h != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                A = h;
              default:
                a.hasOwnProperty(n) || yt(t, e, n, null, a, h);
            }
        for (u in a)
          if (
            ((n = a[u]),
            (h = l[u]),
            a.hasOwnProperty(u) && (n != null || h != null))
          )
            switch (u) {
              case "value":
                T = n;
                break;
              case "defaultValue":
                o = n;
                break;
              case "multiple":
                s = n;
              default:
                n !== h && yt(t, e, u, n, a, h);
            }
        (e = o),
          (l = s),
          (a = A),
          T != null
            ? Wl(t, !!l, T, !1)
            : !!a != !!l &&
              (e != null ? Wl(t, !!l, e, !0) : Wl(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        A = T = null;
        for (o in l)
          if (
            ((u = l[o]),
            l.hasOwnProperty(o) && u != null && !a.hasOwnProperty(o))
          )
            switch (o) {
              case "value":
                break;
              case "children":
                break;
              default:
                yt(t, e, o, null, a, u);
            }
        for (s in a)
          if (
            ((u = a[s]),
            (n = l[s]),
            a.hasOwnProperty(s) && (u != null || n != null))
          )
            switch (s) {
              case "value":
                T = u;
                break;
              case "defaultValue":
                A = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(f(91));
                break;
              default:
                u !== n && yt(t, e, s, u, a, n);
            }
        ss(t, T, A);
        return;
      case "option":
        for (var k in l)
          if (
            ((T = l[k]),
            l.hasOwnProperty(k) && T != null && !a.hasOwnProperty(k))
          )
            switch (k) {
              case "selected":
                t.selected = !1;
                break;
              default:
                yt(t, e, k, null, a, T);
            }
        for (h in a)
          if (
            ((T = a[h]),
            (A = l[h]),
            a.hasOwnProperty(h) && T !== A && (T != null || A != null))
          )
            switch (h) {
              case "selected":
                t.selected =
                  T && typeof T != "function" && typeof T != "symbol";
                break;
              default:
                yt(t, e, h, T, a, A);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var V in l)
          (T = l[V]),
            l.hasOwnProperty(V) &&
              T != null &&
              !a.hasOwnProperty(V) &&
              yt(t, e, V, null, a, T);
        for (E in a)
          if (
            ((T = a[E]),
            (A = l[E]),
            a.hasOwnProperty(E) && T !== A && (T != null || A != null))
          )
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(f(137, e));
                break;
              default:
                yt(t, e, E, T, a, A);
            }
        return;
      default:
        if (Oi(e)) {
          for (var mt in l)
            (T = l[mt]),
              l.hasOwnProperty(mt) &&
                T !== void 0 &&
                !a.hasOwnProperty(mt) &&
                sf(t, e, mt, void 0, a, T);
          for (D in a)
            (T = a[D]),
              (A = l[D]),
              !a.hasOwnProperty(D) ||
                T === A ||
                (T === void 0 && A === void 0) ||
                sf(t, e, D, T, a, A);
          return;
        }
    }
    for (var b in l)
      (T = l[b]),
        l.hasOwnProperty(b) &&
          T != null &&
          !a.hasOwnProperty(b) &&
          yt(t, e, b, null, a, T);
    for (N in a)
      (T = a[N]),
        (A = l[N]),
        !a.hasOwnProperty(N) ||
          T === A ||
          (T == null && A == null) ||
          yt(t, e, N, T, a, A);
  }
  var rf = null,
    of = null;
  function Yn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function dd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function hd(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function df(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var hf = null;
  function _y() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === hf
        ? !1
        : ((hf = t), !0)
      : ((hf = null), !1);
  }
  var yd = typeof setTimeout == "function" ? setTimeout : void 0,
    zy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    md = typeof Promise == "function" ? Promise : void 0,
    Dy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof md < "u"
        ? function (t) {
            return md.resolve(null).then(t).catch(Uy);
          }
        : yd;
  function Uy(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function ml(t) {
    return t === "head";
  }
  function vd(t, e) {
    var l = e,
      a = 0,
      u = 0;
    do {
      var n = l.nextSibling;
      if ((t.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === "/$")) {
          if (0 < a && 8 > a) {
            l = a;
            var s = t.ownerDocument;
            if ((l & 1 && pu(s.documentElement), l & 2 && pu(s.body), l & 4))
              for (l = s.head, pu(l), s = l.firstChild; s; ) {
                var o = s.nextSibling,
                  h = s.nodeName;
                s[qa] ||
                  h === "SCRIPT" ||
                  h === "STYLE" ||
                  (h === "LINK" && s.rel.toLowerCase() === "stylesheet") ||
                  l.removeChild(s),
                  (s = o);
              }
          }
          if (u === 0) {
            t.removeChild(n), Du(e);
            return;
          }
          u--;
        } else
          l === "$" || l === "$?" || l === "$!"
            ? u++
            : (a = l.charCodeAt(0) - 48);
      else a = 0;
      l = n;
    } while (l);
    Du(e);
  }
  function yf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          yf(l), gi(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function My(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var u = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[qa])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((n = t.getAttribute("rel")),
                n === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                t.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((n = t.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === n) return t;
      } else return t;
      if (((t = Re(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Ny(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = Re(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function mf(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function xy(t, e) {
    var l = t.ownerDocument;
    if (t.data !== "$?" || l.readyState === "complete") e();
    else {
      var a = function () {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function Re(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var vf = null;
  function Sd(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (e === 0) return t;
          e--;
        } else l === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function gd(t, e, l) {
    switch (((e = Yn(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(f(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(f(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function pu(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    gi(t);
  }
  var Te = new Map(),
    bd = new Set();
  function Ln(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var $e = j.d;
  j.d = { f: Cy, r: Hy, D: qy, C: By, L: jy, m: Yy, X: Gy, S: Ly, M: Xy };
  function Cy() {
    var t = $e.f(),
      e = Mn();
    return t || e;
  }
  function Hy(t) {
    var e = Jl(t);
    e !== null && e.tag === 5 && e.type === "form" ? Yr(e) : $e.r(t);
  }
  var za = typeof document > "u" ? null : document;
  function pd(t, e, l) {
    var a = za;
    if (a && typeof e == "string" && e) {
      var u = me(e);
      (u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof l == "string" && (u += '[crossorigin="' + l + '"]'),
        bd.has(u) ||
          (bd.add(u),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(u) === null &&
            ((e = a.createElement("link")),
            Xt(e, "link", t),
            qt(e),
            a.head.appendChild(e)));
    }
  }
  function qy(t) {
    $e.D(t), pd("dns-prefetch", t, null);
  }
  function By(t, e) {
    $e.C(t, e), pd("preconnect", t, e);
  }
  function jy(t, e, l) {
    $e.L(t, e, l);
    var a = za;
    if (a && t && e) {
      var u = 'link[rel="preload"][as="' + me(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((u += '[imagesrcset="' + me(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (u += '[imagesizes="' + me(l.imageSizes) + '"]'))
        : (u += '[href="' + me(t) + '"]');
      var n = u;
      switch (e) {
        case "style":
          n = Da(t);
          break;
        case "script":
          n = Ua(t);
      }
      Te.has(n) ||
        ((t = O(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l
        )),
        Te.set(n, t),
        a.querySelector(u) !== null ||
          (e === "style" && a.querySelector(Eu(n))) ||
          (e === "script" && a.querySelector(Tu(n))) ||
          ((e = a.createElement("link")),
          Xt(e, "link", t),
          qt(e),
          a.head.appendChild(e)));
    }
  }
  function Yy(t, e) {
    $e.m(t, e);
    var l = za;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        u =
          'link[rel="modulepreload"][as="' + me(a) + '"][href="' + me(t) + '"]',
        n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ua(t);
      }
      if (
        !Te.has(n) &&
        ((t = O({ rel: "modulepreload", href: t }, e)),
        Te.set(n, t),
        l.querySelector(u) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Tu(n))) return;
        }
        (a = l.createElement("link")),
          Xt(a, "link", t),
          qt(a),
          l.head.appendChild(a);
      }
    }
  }
  function Ly(t, e, l) {
    $e.S(t, e, l);
    var a = za;
    if (a && t) {
      var u = kl(a).hoistableStyles,
        n = Da(t);
      e = e || "default";
      var s = u.get(n);
      if (!s) {
        var o = { loading: 0, preload: null };
        if ((s = a.querySelector(Eu(n)))) o.loading = 5;
        else {
          (t = O({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = Te.get(n)) && Sf(t, l);
          var h = (s = a.createElement("link"));
          qt(h),
            Xt(h, "link", t),
            (h._p = new Promise(function (E, D) {
              (h.onload = E), (h.onerror = D);
            })),
            h.addEventListener("load", function () {
              o.loading |= 1;
            }),
            h.addEventListener("error", function () {
              o.loading |= 2;
            }),
            (o.loading |= 4),
            Gn(s, e, a);
        }
        (s = { type: "stylesheet", instance: s, count: 1, state: o }),
          u.set(n, s);
      }
    }
  }
  function Gy(t, e) {
    $e.X(t, e);
    var l = za;
    if (l && t) {
      var a = kl(l).hoistableScripts,
        u = Ua(t),
        n = a.get(u);
      n ||
        ((n = l.querySelector(Tu(u))),
        n ||
          ((t = O({ src: t, async: !0 }, e)),
          (e = Te.get(u)) && gf(t, e),
          (n = l.createElement("script")),
          qt(n),
          Xt(n, "link", t),
          l.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function Xy(t, e) {
    $e.M(t, e);
    var l = za;
    if (l && t) {
      var a = kl(l).hoistableScripts,
        u = Ua(t),
        n = a.get(u);
      n ||
        ((n = l.querySelector(Tu(u))),
        n ||
          ((t = O({ src: t, async: !0, type: "module" }, e)),
          (e = Te.get(u)) && gf(t, e),
          (n = l.createElement("script")),
          qt(n),
          Xt(n, "link", t),
          l.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function Ed(t, e, l, a) {
    var u = (u = W.current) ? Ln(u) : null;
    if (!u) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = Da(l.href)),
            (l = kl(u).hoistableStyles),
            (a = l.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = Da(l.href);
          var n = kl(u).hoistableStyles,
            s = n.get(t);
          if (
            (s ||
              ((u = u.ownerDocument || u),
              (s = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(t, s),
              (n = u.querySelector(Eu(t))) &&
                !n._p &&
                ((s.instance = n), (s.state.loading = 5)),
              Te.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Te.set(t, l),
                n || wy(u, t, l, s.state))),
            e && a === null)
          )
            throw Error(f(528, ""));
          return s;
        }
        if (e && a !== null) throw Error(f(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Ua(l)),
              (l = kl(u).hoistableScripts),
              (a = l.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(f(444, t));
    }
  }
  function Da(t) {
    return 'href="' + me(t) + '"';
  }
  function Eu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Td(t) {
    return O({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function wy(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Xt(e, "link", l),
        qt(e),
        t.head.appendChild(e));
  }
  function Ua(t) {
    return '[src="' + me(t) + '"]';
  }
  function Tu(t) {
    return "script[async]" + t;
  }
  function Ad(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + me(l.href) + '"]');
          if (a) return (e.instance = a), qt(a), a;
          var u = O({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            qt(a),
            Xt(a, "style", u),
            Gn(a, l.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          u = Da(l.href);
          var n = t.querySelector(Eu(u));
          if (n) return (e.state.loading |= 4), (e.instance = n), qt(n), n;
          (a = Td(l)),
            (u = Te.get(u)) && Sf(a, u),
            (n = (t.ownerDocument || t).createElement("link")),
            qt(n);
          var s = n;
          return (
            (s._p = new Promise(function (o, h) {
              (s.onload = o), (s.onerror = h);
            })),
            Xt(n, "link", a),
            (e.state.loading |= 4),
            Gn(n, l.precedence, t),
            (e.instance = n)
          );
        case "script":
          return (
            (n = Ua(l.src)),
            (u = t.querySelector(Tu(n)))
              ? ((e.instance = u), qt(u), u)
              : ((a = l),
                (u = Te.get(n)) && ((a = O({}, l)), gf(a, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                qt(u),
                Xt(u, "link", a),
                t.head.appendChild(u),
                (e.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Gn(a, l.precedence, t));
    return e.instance;
  }
  function Gn(t, e, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = a.length ? a[a.length - 1] : null,
        n = u,
        s = 0;
      s < a.length;
      s++
    ) {
      var o = a[s];
      if (o.dataset.precedence === e) n = o;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(t, n.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function Sf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function gf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Xn = null;
  function Od(t, e, l) {
    if (Xn === null) {
      var a = new Map(),
        u = (Xn = new Map());
      u.set(l, a);
    } else (u = Xn), (a = u.get(l)), a || ((a = new Map()), u.set(l, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), l = l.getElementsByTagName(t), u = 0;
      u < l.length;
      u++
    ) {
      var n = l[u];
      if (
        !(
          n[qa] ||
          n[Zt] ||
          (t === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var s = n.getAttribute(e) || "";
        s = t + s;
        var o = a.get(s);
        o ? o.push(n) : a.set(s, [n]);
      }
    }
    return a;
  }
  function Rd(t, e, l) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function Qy(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function _d(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Au = null;
  function Zy() {}
  function Vy(t, e, l) {
    if (Au === null) throw Error(f(475));
    var a = Au;
    if (
      e.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var u = Da(l.href),
          n = t.querySelector(Eu(u));
        if (n) {
          (t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (a.count++, (a = wn.bind(a)), t.then(a, a)),
            (e.state.loading |= 4),
            (e.instance = n),
            qt(n);
          return;
        }
        (n = t.ownerDocument || t),
          (l = Td(l)),
          (u = Te.get(u)) && Sf(l, u),
          (n = n.createElement("link")),
          qt(n);
        var s = n;
        (s._p = new Promise(function (o, h) {
          (s.onload = o), (s.onerror = h);
        })),
          Xt(n, "link", l),
          (e.instance = n);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (a.count++,
          (e = wn.bind(a)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function Ky() {
    if (Au === null) throw Error(f(475));
    var t = Au;
    return (
      t.stylesheets && t.count === 0 && bf(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var l = setTimeout(function () {
              if ((t.stylesheets && bf(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend;
                (t.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function wn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) bf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Qn = null;
  function bf(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Qn = new Map()),
        e.forEach(Jy, t),
        (Qn = null),
        wn.call(t));
  }
  function Jy(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Qn.get(t);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), Qn.set(t, l);
        for (
          var u = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var s = u[n];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") &&
            (l.set(s.dataset.precedence, s), (a = s));
        }
        a && l.set(null, a);
      }
      (u = e.instance),
        (s = u.getAttribute("data-precedence")),
        (n = l.get(s) || a),
        n === a && l.set(null, u),
        l.set(s, u),
        this.count++,
        (a = wn.bind(this)),
        u.addEventListener("load", a),
        u.addEventListener("error", a),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(u, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var Ou = {
    $$typeof: P,
    Provider: null,
    Consumer: null,
    _currentValue: J,
    _currentValue2: J,
    _threadCount: 0,
  };
  function ky(t, e, l, a, u, n, s, o) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = yi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = yi(0)),
      (this.hiddenUpdates = yi(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = s),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = o),
      (this.incompleteTransitions = new Map());
  }
  function zd(t, e, l, a, u, n, s, o, h, E, D, N) {
    return (
      (t = new ky(t, e, l, s, o, h, E, N)),
      (e = 1),
      n === !0 && (e |= 24),
      (n = fe(3, null, null, e)),
      (t.current = n),
      (n.stateNode = t),
      (e = Ii()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (n.memoizedState = { element: a, isDehydrated: l, cache: e }),
      ac(n),
      t
    );
  }
  function Dd(t) {
    return t ? ((t = ia), t) : ia;
  }
  function Ud(t, e, l, a, u, n) {
    (u = Dd(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = ll(e)),
      (a.payload = { element: l }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (l = al(t, a, e)),
      l !== null && (he(l, t, e), tu(l, t, e));
  }
  function Md(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function pf(t, e) {
    Md(t, e), (t = t.alternate) && Md(t, e);
  }
  function Nd(t) {
    if (t.tag === 13) {
      var e = na(t, 67108864);
      e !== null && he(e, t, 67108864), pf(t, 67108864);
    }
  }
  var Zn = !0;
  function $y(t, e, l, a) {
    var u = U.T;
    U.T = null;
    var n = j.p;
    try {
      (j.p = 2), Ef(t, e, l, a);
    } finally {
      (j.p = n), (U.T = u);
    }
  }
  function Fy(t, e, l, a) {
    var u = U.T;
    U.T = null;
    var n = j.p;
    try {
      (j.p = 8), Ef(t, e, l, a);
    } finally {
      (j.p = n), (U.T = u);
    }
  }
  function Ef(t, e, l, a) {
    if (Zn) {
      var u = Tf(a);
      if (u === null) ff(t, e, a, Vn, l), Cd(t, a);
      else if (Py(u, t, e, l, a)) a.stopPropagation();
      else if ((Cd(t, a), e & 4 && -1 < Wy.indexOf(t))) {
        for (; u !== null; ) {
          var n = Jl(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var s = Al(n.pendingLanes);
                  if (s !== 0) {
                    var o = n;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; s; ) {
                      var h = 1 << (31 - ie(s));
                      (o.entanglements[1] |= h), (s &= ~h);
                    }
                    xe(n), (ot & 6) === 0 && ((Dn = ze() + 500), Su(0));
                  }
                }
                break;
              case 13:
                (o = na(n, 2)), o !== null && he(o, n, 2), Mn(), pf(n, 2);
            }
          if (((n = Tf(a)), n === null && ff(t, e, a, Vn, l), n === u)) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else ff(t, e, a, null, l);
    }
  }
  function Tf(t) {
    return (t = _i(t)), Af(t);
  }
  var Vn = null;
  function Af(t) {
    if (((Vn = null), (t = Kl(t)), t !== null)) {
      var e = y(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = S(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Vn = t), null;
  }
  function xd(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Bh()) {
          case Vf:
            return 2;
          case Kf:
            return 8;
          case Bu:
          case jh:
            return 32;
          case Jf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Of = !1,
    vl = null,
    Sl = null,
    gl = null,
    Ru = new Map(),
    _u = new Map(),
    bl = [],
    Wy =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Cd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        vl = null;
        break;
      case "dragenter":
      case "dragleave":
        Sl = null;
        break;
      case "mouseover":
      case "mouseout":
        gl = null;
        break;
      case "pointerover":
      case "pointerout":
        Ru.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _u.delete(e.pointerId);
    }
  }
  function zu(t, e, l, a, u, n) {
    return t === null || t.nativeEvent !== n
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [u],
        }),
        e !== null && ((e = Jl(e)), e !== null && Nd(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        u !== null && e.indexOf(u) === -1 && e.push(u),
        t);
  }
  function Py(t, e, l, a, u) {
    switch (e) {
      case "focusin":
        return (vl = zu(vl, t, e, l, a, u)), !0;
      case "dragenter":
        return (Sl = zu(Sl, t, e, l, a, u)), !0;
      case "mouseover":
        return (gl = zu(gl, t, e, l, a, u)), !0;
      case "pointerover":
        var n = u.pointerId;
        return Ru.set(n, zu(Ru.get(n) || null, t, e, l, a, u)), !0;
      case "gotpointercapture":
        return (
          (n = u.pointerId), _u.set(n, zu(_u.get(n) || null, t, e, l, a, u)), !0
        );
    }
    return !1;
  }
  function Hd(t) {
    var e = Kl(t.target);
    if (e !== null) {
      var l = y(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = S(l)), e !== null)) {
            (t.blockedOn = e),
              Vh(t.priority, function () {
                if (l.tag === 13) {
                  var a = de();
                  a = mi(a);
                  var u = na(l, a);
                  u !== null && he(u, l, a), pf(l, a);
                }
              });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Kn(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = Tf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        (Ri = a), l.target.dispatchEvent(a), (Ri = null);
      } else return (e = Jl(l)), e !== null && Nd(e), (t.blockedOn = l), !1;
      e.shift();
    }
    return !0;
  }
  function qd(t, e, l) {
    Kn(t) && l.delete(e);
  }
  function Iy() {
    (Of = !1),
      vl !== null && Kn(vl) && (vl = null),
      Sl !== null && Kn(Sl) && (Sl = null),
      gl !== null && Kn(gl) && (gl = null),
      Ru.forEach(qd),
      _u.forEach(qd);
  }
  function Jn(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Of ||
        ((Of = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Iy)));
  }
  var kn = null;
  function Bd(t) {
    kn !== t &&
      ((kn = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        kn === t && (kn = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            u = t[e + 2];
          if (typeof a != "function") {
            if (Af(a || l) === null) continue;
            break;
          }
          var n = Jl(l);
          n !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Tc(n, { pending: !0, data: u, method: l.method, action: a }, a, u));
        }
      }));
  }
  function Du(t) {
    function e(h) {
      return Jn(h, t);
    }
    vl !== null && Jn(vl, t),
      Sl !== null && Jn(Sl, t),
      gl !== null && Jn(gl, t),
      Ru.forEach(e),
      _u.forEach(e);
    for (var l = 0; l < bl.length; l++) {
      var a = bl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < bl.length && ((l = bl[0]), l.blockedOn === null); )
      Hd(l), l.blockedOn === null && bl.shift();
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var u = l[a],
          n = l[a + 1],
          s = u[Ft] || null;
        if (typeof n == "function") s || Bd(l);
        else if (s) {
          var o = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (s = n[Ft] || null))) o = s.formAction;
            else if (Af(u) !== null) continue;
          } else o = s.action;
          typeof o == "function" ? (l[a + 1] = o) : (l.splice(a, 3), (a -= 3)),
            Bd(l);
        }
      }
  }
  function Rf(t) {
    this._internalRoot = t;
  }
  ($n.prototype.render = Rf.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(f(409));
      var l = e.current,
        a = de();
      Ud(l, a, t, e, null, null);
    }),
    ($n.prototype.unmount = Rf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          Ud(t.current, 2, null, t, null, null), Mn(), (e[Vl] = null);
        }
      });
  function $n(t) {
    this._internalRoot = t;
  }
  $n.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Pf();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < bl.length && e !== 0 && e < bl[l].priority; l++);
      bl.splice(l, 0, t), l === 0 && Hd(t);
    }
  };
  var jd = c.version;
  if (jd !== "19.1.0") throw Error(f(527, jd, "19.1.0"));
  j.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(f(188))
        : ((t = Object.keys(t).join(",")), Error(f(268, t)));
    return (
      (t = z(e)),
      (t = t !== null ? g(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var tm = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fn.isDisabled && Fn.supportsFiber)
      try {
        (xa = Fn.inject(tm)), (ne = Fn);
      } catch {}
  }
  return (
    (Mu.createRoot = function (t, e) {
      if (!d(t)) throw Error(f(299));
      var l = !1,
        a = "",
        u = Pr,
        n = Ir,
        s = to,
        o = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (n = e.onCaughtError),
          e.onRecoverableError !== void 0 && (s = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (o = e.unstable_transitionCallbacks)),
        (e = zd(t, 1, !1, null, null, l, a, u, n, s, o, null)),
        (t[Vl] = e.current),
        cf(t),
        new Rf(e)
      );
    }),
    (Mu.hydrateRoot = function (t, e, l) {
      if (!d(t)) throw Error(f(299));
      var a = !1,
        u = "",
        n = Pr,
        s = Ir,
        o = to,
        h = null,
        E = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (u = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (n = l.onUncaughtError),
          l.onCaughtError !== void 0 && (s = l.onCaughtError),
          l.onRecoverableError !== void 0 && (o = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (h = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (E = l.formState)),
        (e = zd(t, 1, !0, e, l ?? null, a, u, n, s, o, h, E)),
        (e.context = Dd(null)),
        (l = e.current),
        (a = de()),
        (a = mi(a)),
        (u = ll(a)),
        (u.callback = null),
        al(l, u, a),
        (l = a),
        (e.current.lanes = l),
        Ha(e, l),
        xe(e),
        (t[Vl] = e.current),
        cf(t),
        new $n(e)
      );
    }),
    (Mu.version = "19.1.0"),
    Mu
  );
}
var Jd;
function rm() {
  if (Jd) return Df.exports;
  Jd = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (c) {
        console.error(c);
      }
  }
  return i(), (Df.exports = sm()), Df.exports;
}
var om = rm();
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dm = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  hm = (i) =>
    i.replace(/^([A-Z])|[\s-_]+(\w)/g, (c, r, f) =>
      f ? f.toUpperCase() : r.toLowerCase()
    ),
  kd = (i) => {
    const c = hm(i);
    return c.charAt(0).toUpperCase() + c.slice(1);
  },
  fh = (...i) =>
    i
      .filter((c, r, f) => !!c && c.trim() !== "" && f.indexOf(c) === r)
      .join(" ")
      .trim(),
  ym = (i) => {
    for (const c in i)
      if (c.startsWith("aria-") || c === "role" || c === "title") return !0;
  };
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var mm = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vm = $t.forwardRef(
  (
    {
      color: i = "currentColor",
      size: c = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: f,
      className: d = "",
      children: y,
      iconNode: S,
      ..._
    },
    z
  ) =>
    $t.createElement(
      "svg",
      {
        ref: z,
        ...mm,
        width: c,
        height: c,
        stroke: i,
        strokeWidth: f ? (Number(r) * 24) / Number(c) : r,
        className: fh("lucide", d),
        ...(!y && !ym(_) && { "aria-hidden": "true" }),
        ..._,
      },
      [
        ...S.map(([g, O]) => $t.createElement(g, O)),
        ...(Array.isArray(y) ? y : [y]),
      ]
    )
);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const li = (i, c) => {
  const r = $t.forwardRef(({ className: f, ...d }, y) =>
    $t.createElement(vm, {
      ref: y,
      iconNode: c,
      className: fh(`lucide-${dm(kd(i))}`, `lucide-${i}`, f),
      ...d,
    })
  );
  return (r.displayName = kd(i)), r;
};
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sm = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M8 12h8", key: "1wcyev" }],
  ],
  gm = li("circle-minus", Sm);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bm = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M8 12h8", key: "1wcyev" }],
    ["path", { d: "M12 8v8", key: "napkw2" }],
  ],
  pm = li("circle-plus", bm);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Em = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
  Tm = li("search", Em);
/**
 * @license lucide-react v0.513.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Am = [
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ],
  Om = li("trash", Am);
function Rm(i) {
  return $.jsx("div", {
    className: "top-menu",
    children: $.jsxs("div", {
      className: "search-bar",
      children: [
        $.jsxs("div", {
          className: "list-name",
          children: [
            $.jsx("img", {
              src: "./assets/tartarugas-em-compras.png",
              alt: "",
            }),
            $.jsx("h3", { children: "SmartList" }),
          ],
        }),
        $.jsxs("div", {
          className: `search-area ${i.searching ? "searching" : ""}`,
          children: [
            $.jsx("div", {
              className: "search-icon",
              children: $.jsx(Tm, { color: "#333333" }),
            }),
            $.jsx("input", {
              onFocus: i.onSearchClick,
              type: "text",
              placeholder: "Adicionar item",
              value: i.inputValue,
              onChange: (c) => {
                i.onChangeEvent(c.target.value);
              },
            }),
          ],
        }),
      ],
    }),
  });
}
function _m({
  notSearching: i,
  searching: c,
  onAddItemSubmit: r,
  searchArray: f,
}) {
  function d(y) {
    return y.split(" ").slice(0, 9).join(" ");
  }
  return $.jsxs("div", {
    className: `dropdown ${c ? "down" : ""}`,
    children: [
      $.jsx("div", {
        className: "dropdown-content",
        children: f.map((y) =>
          $.jsxs(
            "div",
            {
              onClick: () => r(y.id, y.nome_completo, parseFloat(y.valor)),
              className: "dropdown-item",
              children: [
                $.jsx("div", {
                  className: "nome-completo",
                  children: $.jsx("h3", { children: d(y.nome_completo) }),
                }),
                $.jsx("div", {
                  className: "valor-item",
                  children: $.jsxs("p", { children: ["R$", y.valor] }),
                }),
              ],
            },
            y.id
          )
        ),
      }),
      $.jsx("div", { onClick: i, className: "background" }),
    ],
  });
}
function sh(i, c) {
  return function () {
    return i.apply(c, arguments);
  };
}
const { toString: zm } = Object.prototype,
  { getPrototypeOf: wf } = Object,
  { iterator: ai, toStringTag: rh } = Symbol,
  ui = ((i) => (c) => {
    const r = zm.call(c);
    return i[r] || (i[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  _e = (i) => ((i = i.toLowerCase()), (c) => ui(c) === i),
  ni = (i) => (c) => typeof c === i,
  { isArray: Ma } = Array,
  xu = ni("undefined");
function Dm(i) {
  return (
    i !== null &&
    !xu(i) &&
    i.constructor !== null &&
    !xu(i.constructor) &&
    ee(i.constructor.isBuffer) &&
    i.constructor.isBuffer(i)
  );
}
const oh = _e("ArrayBuffer");
function Um(i) {
  let c;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (c = ArrayBuffer.isView(i))
      : (c = i && i.buffer && oh(i.buffer)),
    c
  );
}
const Mm = ni("string"),
  ee = ni("function"),
  dh = ni("number"),
  ii = (i) => i !== null && typeof i == "object",
  Nm = (i) => i === !0 || i === !1,
  Wn = (i) => {
    if (ui(i) !== "object") return !1;
    const c = wf(i);
    return (
      (c === null ||
        c === Object.prototype ||
        Object.getPrototypeOf(c) === null) &&
      !(rh in i) &&
      !(ai in i)
    );
  },
  xm = _e("Date"),
  Cm = _e("File"),
  Hm = _e("Blob"),
  qm = _e("FileList"),
  Bm = (i) => ii(i) && ee(i.pipe),
  jm = (i) => {
    let c;
    return (
      i &&
      ((typeof FormData == "function" && i instanceof FormData) ||
        (ee(i.append) &&
          ((c = ui(i)) === "formdata" ||
            (c === "object" &&
              ee(i.toString) &&
              i.toString() === "[object FormData]"))))
    );
  },
  Ym = _e("URLSearchParams"),
  [Lm, Gm, Xm, wm] = ["ReadableStream", "Request", "Response", "Headers"].map(
    _e
  ),
  Qm = (i) =>
    i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Cu(i, c, { allOwnKeys: r = !1 } = {}) {
  if (i === null || typeof i > "u") return;
  let f, d;
  if ((typeof i != "object" && (i = [i]), Ma(i)))
    for (f = 0, d = i.length; f < d; f++) c.call(null, i[f], f, i);
  else {
    const y = r ? Object.getOwnPropertyNames(i) : Object.keys(i),
      S = y.length;
    let _;
    for (f = 0; f < S; f++) (_ = y[f]), c.call(null, i[_], _, i);
  }
}
function hh(i, c) {
  c = c.toLowerCase();
  const r = Object.keys(i);
  let f = r.length,
    d;
  for (; f-- > 0; ) if (((d = r[f]), c === d.toLowerCase())) return d;
  return null;
}
const Xl =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  yh = (i) => !xu(i) && i !== Xl;
function qf() {
  const { caseless: i } = (yh(this) && this) || {},
    c = {},
    r = (f, d) => {
      const y = (i && hh(c, d)) || d;
      Wn(c[y]) && Wn(f)
        ? (c[y] = qf(c[y], f))
        : Wn(f)
        ? (c[y] = qf({}, f))
        : Ma(f)
        ? (c[y] = f.slice())
        : (c[y] = f);
    };
  for (let f = 0, d = arguments.length; f < d; f++)
    arguments[f] && Cu(arguments[f], r);
  return c;
}
const Zm = (i, c, r, { allOwnKeys: f } = {}) => (
    Cu(
      c,
      (d, y) => {
        r && ee(d) ? (i[y] = sh(d, r)) : (i[y] = d);
      },
      { allOwnKeys: f }
    ),
    i
  ),
  Vm = (i) => (i.charCodeAt(0) === 65279 && (i = i.slice(1)), i),
  Km = (i, c, r, f) => {
    (i.prototype = Object.create(c.prototype, f)),
      (i.prototype.constructor = i),
      Object.defineProperty(i, "super", { value: c.prototype }),
      r && Object.assign(i.prototype, r);
  },
  Jm = (i, c, r, f) => {
    let d, y, S;
    const _ = {};
    if (((c = c || {}), i == null)) return c;
    do {
      for (d = Object.getOwnPropertyNames(i), y = d.length; y-- > 0; )
        (S = d[y]), (!f || f(S, i, c)) && !_[S] && ((c[S] = i[S]), (_[S] = !0));
      i = r !== !1 && wf(i);
    } while (i && (!r || r(i, c)) && i !== Object.prototype);
    return c;
  },
  km = (i, c, r) => {
    (i = String(i)),
      (r === void 0 || r > i.length) && (r = i.length),
      (r -= c.length);
    const f = i.indexOf(c, r);
    return f !== -1 && f === r;
  },
  $m = (i) => {
    if (!i) return null;
    if (Ma(i)) return i;
    let c = i.length;
    if (!dh(c)) return null;
    const r = new Array(c);
    for (; c-- > 0; ) r[c] = i[c];
    return r;
  },
  Fm = (
    (i) => (c) =>
      i && c instanceof i
  )(typeof Uint8Array < "u" && wf(Uint8Array)),
  Wm = (i, c) => {
    const f = (i && i[ai]).call(i);
    let d;
    for (; (d = f.next()) && !d.done; ) {
      const y = d.value;
      c.call(i, y[0], y[1]);
    }
  },
  Pm = (i, c) => {
    let r;
    const f = [];
    for (; (r = i.exec(c)) !== null; ) f.push(r);
    return f;
  },
  Im = _e("HTMLFormElement"),
  t1 = (i) =>
    i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, f, d) {
      return f.toUpperCase() + d;
    }),
  $d = (
    ({ hasOwnProperty: i }) =>
    (c, r) =>
      i.call(c, r)
  )(Object.prototype),
  e1 = _e("RegExp"),
  mh = (i, c) => {
    const r = Object.getOwnPropertyDescriptors(i),
      f = {};
    Cu(r, (d, y) => {
      let S;
      (S = c(d, y, i)) !== !1 && (f[y] = S || d);
    }),
      Object.defineProperties(i, f);
  },
  l1 = (i) => {
    mh(i, (c, r) => {
      if (ee(i) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
        return !1;
      const f = i[r];
      if (ee(f)) {
        if (((c.enumerable = !1), "writable" in c)) {
          c.writable = !1;
          return;
        }
        c.set ||
          (c.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  a1 = (i, c) => {
    const r = {},
      f = (d) => {
        d.forEach((y) => {
          r[y] = !0;
        });
      };
    return Ma(i) ? f(i) : f(String(i).split(c)), r;
  },
  u1 = () => {},
  n1 = (i, c) => (i != null && Number.isFinite((i = +i)) ? i : c);
function i1(i) {
  return !!(i && ee(i.append) && i[rh] === "FormData" && i[ai]);
}
const c1 = (i) => {
    const c = new Array(10),
      r = (f, d) => {
        if (ii(f)) {
          if (c.indexOf(f) >= 0) return;
          if (!("toJSON" in f)) {
            c[d] = f;
            const y = Ma(f) ? [] : {};
            return (
              Cu(f, (S, _) => {
                const z = r(S, d + 1);
                !xu(z) && (y[_] = z);
              }),
              (c[d] = void 0),
              y
            );
          }
        }
        return f;
      };
    return r(i, 0);
  },
  f1 = _e("AsyncFunction"),
  s1 = (i) => i && (ii(i) || ee(i)) && ee(i.then) && ee(i.catch),
  vh = ((i, c) =>
    i
      ? setImmediate
      : c
      ? ((r, f) => (
          Xl.addEventListener(
            "message",
            ({ source: d, data: y }) => {
              d === Xl && y === r && f.length && f.shift()();
            },
            !1
          ),
          (d) => {
            f.push(d), Xl.postMessage(r, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (r) => setTimeout(r))(
    typeof setImmediate == "function",
    ee(Xl.postMessage)
  ),
  r1 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Xl)
      : (typeof process < "u" && process.nextTick) || vh,
  o1 = (i) => i != null && ee(i[ai]),
  R = {
    isArray: Ma,
    isArrayBuffer: oh,
    isBuffer: Dm,
    isFormData: jm,
    isArrayBufferView: Um,
    isString: Mm,
    isNumber: dh,
    isBoolean: Nm,
    isObject: ii,
    isPlainObject: Wn,
    isReadableStream: Lm,
    isRequest: Gm,
    isResponse: Xm,
    isHeaders: wm,
    isUndefined: xu,
    isDate: xm,
    isFile: Cm,
    isBlob: Hm,
    isRegExp: e1,
    isFunction: ee,
    isStream: Bm,
    isURLSearchParams: Ym,
    isTypedArray: Fm,
    isFileList: qm,
    forEach: Cu,
    merge: qf,
    extend: Zm,
    trim: Qm,
    stripBOM: Vm,
    inherits: Km,
    toFlatObject: Jm,
    kindOf: ui,
    kindOfTest: _e,
    endsWith: km,
    toArray: $m,
    forEachEntry: Wm,
    matchAll: Pm,
    isHTMLForm: Im,
    hasOwnProperty: $d,
    hasOwnProp: $d,
    reduceDescriptors: mh,
    freezeMethods: l1,
    toObjectSet: a1,
    toCamelCase: t1,
    noop: u1,
    toFiniteNumber: n1,
    findKey: hh,
    global: Xl,
    isContextDefined: yh,
    isSpecCompliantForm: i1,
    toJSONObject: c1,
    isAsyncFn: f1,
    isThenable: s1,
    setImmediate: vh,
    asap: r1,
    isIterable: o1,
  };
function I(i, c, r, f, d) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = i),
    (this.name = "AxiosError"),
    c && (this.code = c),
    r && (this.config = r),
    f && (this.request = f),
    d && ((this.response = d), (this.status = d.status ? d.status : null));
}
R.inherits(I, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: R.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Sh = I.prototype,
  gh = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((i) => {
  gh[i] = { value: i };
});
Object.defineProperties(I, gh);
Object.defineProperty(Sh, "isAxiosError", { value: !0 });
I.from = (i, c, r, f, d, y) => {
  const S = Object.create(Sh);
  return (
    R.toFlatObject(
      i,
      S,
      function (z) {
        return z !== Error.prototype;
      },
      (_) => _ !== "isAxiosError"
    ),
    I.call(S, i.message, c, r, f, d),
    (S.cause = i),
    (S.name = i.name),
    y && Object.assign(S, y),
    S
  );
};
const d1 = null;
function Bf(i) {
  return R.isPlainObject(i) || R.isArray(i);
}
function bh(i) {
  return R.endsWith(i, "[]") ? i.slice(0, -2) : i;
}
function Fd(i, c, r) {
  return i
    ? i
        .concat(c)
        .map(function (d, y) {
          return (d = bh(d)), !r && y ? "[" + d + "]" : d;
        })
        .join(r ? "." : "")
    : c;
}
function h1(i) {
  return R.isArray(i) && !i.some(Bf);
}
const y1 = R.toFlatObject(R, {}, null, function (c) {
  return /^is[A-Z]/.test(c);
});
function ci(i, c, r) {
  if (!R.isObject(i)) throw new TypeError("target must be an object");
  (c = c || new FormData()),
    (r = R.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (w, q) {
        return !R.isUndefined(q[w]);
      }
    ));
  const f = r.metaTokens,
    d = r.visitor || O,
    y = r.dots,
    S = r.indexes,
    z = (r.Blob || (typeof Blob < "u" && Blob)) && R.isSpecCompliantForm(c);
  if (!R.isFunction(d)) throw new TypeError("visitor must be a function");
  function g(H) {
    if (H === null) return "";
    if (R.isDate(H)) return H.toISOString();
    if (R.isBoolean(H)) return H.toString();
    if (!z && R.isBlob(H))
      throw new I("Blob is not supported. Use a Buffer instead.");
    return R.isArrayBuffer(H) || R.isTypedArray(H)
      ? z && typeof Blob == "function"
        ? new Blob([H])
        : Buffer.from(H)
      : H;
  }
  function O(H, w, q) {
    let ct = H;
    if (H && !q && typeof H == "object") {
      if (R.endsWith(w, "{}"))
        (w = f ? w : w.slice(0, -2)), (H = JSON.stringify(H));
      else if (
        (R.isArray(H) && h1(H)) ||
        ((R.isFileList(H) || R.endsWith(w, "[]")) && (ct = R.toArray(H)))
      )
        return (
          (w = bh(w)),
          ct.forEach(function (P, bt) {
            !(R.isUndefined(P) || P === null) &&
              c.append(
                S === !0 ? Fd([w], bt, y) : S === null ? w : w + "[]",
                g(P)
              );
          }),
          !1
        );
    }
    return Bf(H) ? !0 : (c.append(Fd(q, w, y), g(H)), !1);
  }
  const C = [],
    Y = Object.assign(y1, {
      defaultVisitor: O,
      convertValue: g,
      isVisitable: Bf,
    });
  function L(H, w) {
    if (!R.isUndefined(H)) {
      if (C.indexOf(H) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      C.push(H),
        R.forEach(H, function (ct, nt) {
          (!(R.isUndefined(ct) || ct === null) &&
            d.call(c, ct, R.isString(nt) ? nt.trim() : nt, w, Y)) === !0 &&
            L(ct, w ? w.concat(nt) : [nt]);
        }),
        C.pop();
    }
  }
  if (!R.isObject(i)) throw new TypeError("data must be an object");
  return L(i), c;
}
function Wd(i) {
  const c = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g, function (f) {
    return c[f];
  });
}
function Qf(i, c) {
  (this._pairs = []), i && ci(i, this, c);
}
const ph = Qf.prototype;
ph.append = function (c, r) {
  this._pairs.push([c, r]);
};
ph.toString = function (c) {
  const r = c
    ? function (f) {
        return c.call(this, f, Wd);
      }
    : Wd;
  return this._pairs
    .map(function (d) {
      return r(d[0]) + "=" + r(d[1]);
    }, "")
    .join("&");
};
function m1(i) {
  return encodeURIComponent(i)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Eh(i, c, r) {
  if (!c) return i;
  const f = (r && r.encode) || m1;
  R.isFunction(r) && (r = { serialize: r });
  const d = r && r.serialize;
  let y;
  if (
    (d
      ? (y = d(c, r))
      : (y = R.isURLSearchParams(c) ? c.toString() : new Qf(c, r).toString(f)),
    y)
  ) {
    const S = i.indexOf("#");
    S !== -1 && (i = i.slice(0, S)),
      (i += (i.indexOf("?") === -1 ? "?" : "&") + y);
  }
  return i;
}
class Pd {
  constructor() {
    this.handlers = [];
  }
  use(c, r, f) {
    return (
      this.handlers.push({
        fulfilled: c,
        rejected: r,
        synchronous: f ? f.synchronous : !1,
        runWhen: f ? f.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(c) {
    this.handlers[c] && (this.handlers[c] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(c) {
    R.forEach(this.handlers, function (f) {
      f !== null && c(f);
    });
  }
}
const Th = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  v1 = typeof URLSearchParams < "u" ? URLSearchParams : Qf,
  S1 = typeof FormData < "u" ? FormData : null,
  g1 = typeof Blob < "u" ? Blob : null,
  b1 = {
    isBrowser: !0,
    classes: { URLSearchParams: v1, FormData: S1, Blob: g1 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Zf = typeof window < "u" && typeof document < "u",
  jf = (typeof navigator == "object" && navigator) || void 0,
  p1 =
    Zf &&
    (!jf || ["ReactNative", "NativeScript", "NS"].indexOf(jf.product) < 0),
  E1 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  T1 = (Zf && window.location.href) || "http://localhost",
  A1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Zf,
        hasStandardBrowserEnv: p1,
        hasStandardBrowserWebWorkerEnv: E1,
        navigator: jf,
        origin: T1,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Jt = { ...A1, ...b1 };
function O1(i, c) {
  return ci(
    i,
    new Jt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (r, f, d, y) {
          return Jt.isNode && R.isBuffer(r)
            ? (this.append(f, r.toString("base64")), !1)
            : y.defaultVisitor.apply(this, arguments);
        },
      },
      c
    )
  );
}
function R1(i) {
  return R.matchAll(/\w+|\[(\w*)]/g, i).map((c) =>
    c[0] === "[]" ? "" : c[1] || c[0]
  );
}
function _1(i) {
  const c = {},
    r = Object.keys(i);
  let f;
  const d = r.length;
  let y;
  for (f = 0; f < d; f++) (y = r[f]), (c[y] = i[y]);
  return c;
}
function Ah(i) {
  function c(r, f, d, y) {
    let S = r[y++];
    if (S === "__proto__") return !0;
    const _ = Number.isFinite(+S),
      z = y >= r.length;
    return (
      (S = !S && R.isArray(d) ? d.length : S),
      z
        ? (R.hasOwnProp(d, S) ? (d[S] = [d[S], f]) : (d[S] = f), !_)
        : ((!d[S] || !R.isObject(d[S])) && (d[S] = []),
          c(r, f, d[S], y) && R.isArray(d[S]) && (d[S] = _1(d[S])),
          !_)
    );
  }
  if (R.isFormData(i) && R.isFunction(i.entries)) {
    const r = {};
    return (
      R.forEachEntry(i, (f, d) => {
        c(R1(f), d, r, 0);
      }),
      r
    );
  }
  return null;
}
function z1(i, c, r) {
  if (R.isString(i))
    try {
      return (c || JSON.parse)(i), R.trim(i);
    } catch (f) {
      if (f.name !== "SyntaxError") throw f;
    }
  return (r || JSON.stringify)(i);
}
const Hu = {
  transitional: Th,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (c, r) {
      const f = r.getContentType() || "",
        d = f.indexOf("application/json") > -1,
        y = R.isObject(c);
      if ((y && R.isHTMLForm(c) && (c = new FormData(c)), R.isFormData(c)))
        return d ? JSON.stringify(Ah(c)) : c;
      if (
        R.isArrayBuffer(c) ||
        R.isBuffer(c) ||
        R.isStream(c) ||
        R.isFile(c) ||
        R.isBlob(c) ||
        R.isReadableStream(c)
      )
        return c;
      if (R.isArrayBufferView(c)) return c.buffer;
      if (R.isURLSearchParams(c))
        return (
          r.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          c.toString()
        );
      let _;
      if (y) {
        if (f.indexOf("application/x-www-form-urlencoded") > -1)
          return O1(c, this.formSerializer).toString();
        if ((_ = R.isFileList(c)) || f.indexOf("multipart/form-data") > -1) {
          const z = this.env && this.env.FormData;
          return ci(
            _ ? { "files[]": c } : c,
            z && new z(),
            this.formSerializer
          );
        }
      }
      return y || d ? (r.setContentType("application/json", !1), z1(c)) : c;
    },
  ],
  transformResponse: [
    function (c) {
      const r = this.transitional || Hu.transitional,
        f = r && r.forcedJSONParsing,
        d = this.responseType === "json";
      if (R.isResponse(c) || R.isReadableStream(c)) return c;
      if (c && R.isString(c) && ((f && !this.responseType) || d)) {
        const S = !(r && r.silentJSONParsing) && d;
        try {
          return JSON.parse(c);
        } catch (_) {
          if (S)
            throw _.name === "SyntaxError"
              ? I.from(_, I.ERR_BAD_RESPONSE, this, null, this.response)
              : _;
        }
      }
      return c;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Jt.classes.FormData, Blob: Jt.classes.Blob },
  validateStatus: function (c) {
    return c >= 200 && c < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
R.forEach(["delete", "get", "head", "post", "put", "patch"], (i) => {
  Hu.headers[i] = {};
});
const D1 = R.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  U1 = (i) => {
    const c = {};
    let r, f, d;
    return (
      i &&
        i
          .split(
            `
`
          )
          .forEach(function (S) {
            (d = S.indexOf(":")),
              (r = S.substring(0, d).trim().toLowerCase()),
              (f = S.substring(d + 1).trim()),
              !(!r || (c[r] && D1[r])) &&
                (r === "set-cookie"
                  ? c[r]
                    ? c[r].push(f)
                    : (c[r] = [f])
                  : (c[r] = c[r] ? c[r] + ", " + f : f));
          }),
      c
    );
  },
  Id = Symbol("internals");
function Nu(i) {
  return i && String(i).trim().toLowerCase();
}
function Pn(i) {
  return i === !1 || i == null ? i : R.isArray(i) ? i.map(Pn) : String(i);
}
function M1(i) {
  const c = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let f;
  for (; (f = r.exec(i)); ) c[f[1]] = f[2];
  return c;
}
const N1 = (i) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());
function xf(i, c, r, f, d) {
  if (R.isFunction(f)) return f.call(this, c, r);
  if ((d && (c = r), !!R.isString(c))) {
    if (R.isString(f)) return c.indexOf(f) !== -1;
    if (R.isRegExp(f)) return f.test(c);
  }
}
function x1(i) {
  return i
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (c, r, f) => r.toUpperCase() + f);
}
function C1(i, c) {
  const r = R.toCamelCase(" " + c);
  ["get", "set", "has"].forEach((f) => {
    Object.defineProperty(i, f + r, {
      value: function (d, y, S) {
        return this[f].call(this, c, d, y, S);
      },
      configurable: !0,
    });
  });
}
let le = class {
  constructor(c) {
    c && this.set(c);
  }
  set(c, r, f) {
    const d = this;
    function y(_, z, g) {
      const O = Nu(z);
      if (!O) throw new Error("header name must be a non-empty string");
      const C = R.findKey(d, O);
      (!C || d[C] === void 0 || g === !0 || (g === void 0 && d[C] !== !1)) &&
        (d[C || z] = Pn(_));
    }
    const S = (_, z) => R.forEach(_, (g, O) => y(g, O, z));
    if (R.isPlainObject(c) || c instanceof this.constructor) S(c, r);
    else if (R.isString(c) && (c = c.trim()) && !N1(c)) S(U1(c), r);
    else if (R.isObject(c) && R.isIterable(c)) {
      let _ = {},
        z,
        g;
      for (const O of c) {
        if (!R.isArray(O))
          throw TypeError("Object iterator must return a key-value pair");
        _[(g = O[0])] = (z = _[g])
          ? R.isArray(z)
            ? [...z, O[1]]
            : [z, O[1]]
          : O[1];
      }
      S(_, r);
    } else c != null && y(r, c, f);
    return this;
  }
  get(c, r) {
    if (((c = Nu(c)), c)) {
      const f = R.findKey(this, c);
      if (f) {
        const d = this[f];
        if (!r) return d;
        if (r === !0) return M1(d);
        if (R.isFunction(r)) return r.call(this, d, f);
        if (R.isRegExp(r)) return r.exec(d);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(c, r) {
    if (((c = Nu(c)), c)) {
      const f = R.findKey(this, c);
      return !!(f && this[f] !== void 0 && (!r || xf(this, this[f], f, r)));
    }
    return !1;
  }
  delete(c, r) {
    const f = this;
    let d = !1;
    function y(S) {
      if (((S = Nu(S)), S)) {
        const _ = R.findKey(f, S);
        _ && (!r || xf(f, f[_], _, r)) && (delete f[_], (d = !0));
      }
    }
    return R.isArray(c) ? c.forEach(y) : y(c), d;
  }
  clear(c) {
    const r = Object.keys(this);
    let f = r.length,
      d = !1;
    for (; f--; ) {
      const y = r[f];
      (!c || xf(this, this[y], y, c, !0)) && (delete this[y], (d = !0));
    }
    return d;
  }
  normalize(c) {
    const r = this,
      f = {};
    return (
      R.forEach(this, (d, y) => {
        const S = R.findKey(f, y);
        if (S) {
          (r[S] = Pn(d)), delete r[y];
          return;
        }
        const _ = c ? x1(y) : String(y).trim();
        _ !== y && delete r[y], (r[_] = Pn(d)), (f[_] = !0);
      }),
      this
    );
  }
  concat(...c) {
    return this.constructor.concat(this, ...c);
  }
  toJSON(c) {
    const r = Object.create(null);
    return (
      R.forEach(this, (f, d) => {
        f != null && f !== !1 && (r[d] = c && R.isArray(f) ? f.join(", ") : f);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([c, r]) => c + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(c) {
    return c instanceof this ? c : new this(c);
  }
  static concat(c, ...r) {
    const f = new this(c);
    return r.forEach((d) => f.set(d)), f;
  }
  static accessor(c) {
    const f = (this[Id] = this[Id] = { accessors: {} }).accessors,
      d = this.prototype;
    function y(S) {
      const _ = Nu(S);
      f[_] || (C1(d, S), (f[_] = !0));
    }
    return R.isArray(c) ? c.forEach(y) : y(c), this;
  }
};
le.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
R.reduceDescriptors(le.prototype, ({ value: i }, c) => {
  let r = c[0].toUpperCase() + c.slice(1);
  return {
    get: () => i,
    set(f) {
      this[r] = f;
    },
  };
});
R.freezeMethods(le);
function Cf(i, c) {
  const r = this || Hu,
    f = c || r,
    d = le.from(f.headers);
  let y = f.data;
  return (
    R.forEach(i, function (_) {
      y = _.call(r, y, d.normalize(), c ? c.status : void 0);
    }),
    d.normalize(),
    y
  );
}
function Oh(i) {
  return !!(i && i.__CANCEL__);
}
function Na(i, c, r) {
  I.call(this, i ?? "canceled", I.ERR_CANCELED, c, r),
    (this.name = "CanceledError");
}
R.inherits(Na, I, { __CANCEL__: !0 });
function Rh(i, c, r) {
  const f = r.config.validateStatus;
  !r.status || !f || f(r.status)
    ? i(r)
    : c(
        new I(
          "Request failed with status code " + r.status,
          [I.ERR_BAD_REQUEST, I.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r
        )
      );
}
function H1(i) {
  const c = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
  return (c && c[1]) || "";
}
function q1(i, c) {
  i = i || 10;
  const r = new Array(i),
    f = new Array(i);
  let d = 0,
    y = 0,
    S;
  return (
    (c = c !== void 0 ? c : 1e3),
    function (z) {
      const g = Date.now(),
        O = f[y];
      S || (S = g), (r[d] = z), (f[d] = g);
      let C = y,
        Y = 0;
      for (; C !== d; ) (Y += r[C++]), (C = C % i);
      if (((d = (d + 1) % i), d === y && (y = (y + 1) % i), g - S < c)) return;
      const L = O && g - O;
      return L ? Math.round((Y * 1e3) / L) : void 0;
    }
  );
}
function B1(i, c) {
  let r = 0,
    f = 1e3 / c,
    d,
    y;
  const S = (g, O = Date.now()) => {
    (r = O), (d = null), y && (clearTimeout(y), (y = null)), i.apply(null, g);
  };
  return [
    (...g) => {
      const O = Date.now(),
        C = O - r;
      C >= f
        ? S(g, O)
        : ((d = g),
          y ||
            (y = setTimeout(() => {
              (y = null), S(d);
            }, f - C)));
    },
    () => d && S(d),
  ];
}
const ti = (i, c, r = 3) => {
    let f = 0;
    const d = q1(50, 250);
    return B1((y) => {
      const S = y.loaded,
        _ = y.lengthComputable ? y.total : void 0,
        z = S - f,
        g = d(z),
        O = S <= _;
      f = S;
      const C = {
        loaded: S,
        total: _,
        progress: _ ? S / _ : void 0,
        bytes: z,
        rate: g || void 0,
        estimated: g && _ && O ? (_ - S) / g : void 0,
        event: y,
        lengthComputable: _ != null,
        [c ? "download" : "upload"]: !0,
      };
      i(C);
    }, r);
  },
  th = (i, c) => {
    const r = i != null;
    return [(f) => c[0]({ lengthComputable: r, total: i, loaded: f }), c[1]];
  },
  eh =
    (i) =>
    (...c) =>
      R.asap(() => i(...c)),
  j1 = Jt.hasStandardBrowserEnv
    ? ((i, c) => (r) => (
        (r = new URL(r, Jt.origin)),
        i.protocol === r.protocol &&
          i.host === r.host &&
          (c || i.port === r.port)
      ))(
        new URL(Jt.origin),
        Jt.navigator && /(msie|trident)/i.test(Jt.navigator.userAgent)
      )
    : () => !0,
  Y1 = Jt.hasStandardBrowserEnv
    ? {
        write(i, c, r, f, d, y) {
          const S = [i + "=" + encodeURIComponent(c)];
          R.isNumber(r) && S.push("expires=" + new Date(r).toGMTString()),
            R.isString(f) && S.push("path=" + f),
            R.isString(d) && S.push("domain=" + d),
            y === !0 && S.push("secure"),
            (document.cookie = S.join("; "));
        },
        read(i) {
          const c = document.cookie.match(
            new RegExp("(^|;\\s*)(" + i + ")=([^;]*)")
          );
          return c ? decodeURIComponent(c[3]) : null;
        },
        remove(i) {
          this.write(i, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function L1(i) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}
function G1(i, c) {
  return c ? i.replace(/\/?\/$/, "") + "/" + c.replace(/^\/+/, "") : i;
}
function _h(i, c, r) {
  let f = !L1(c);
  return i && (f || r == !1) ? G1(i, c) : c;
}
const lh = (i) => (i instanceof le ? { ...i } : i);
function Ql(i, c) {
  c = c || {};
  const r = {};
  function f(g, O, C, Y) {
    return R.isPlainObject(g) && R.isPlainObject(O)
      ? R.merge.call({ caseless: Y }, g, O)
      : R.isPlainObject(O)
      ? R.merge({}, O)
      : R.isArray(O)
      ? O.slice()
      : O;
  }
  function d(g, O, C, Y) {
    if (R.isUndefined(O)) {
      if (!R.isUndefined(g)) return f(void 0, g, C, Y);
    } else return f(g, O, C, Y);
  }
  function y(g, O) {
    if (!R.isUndefined(O)) return f(void 0, O);
  }
  function S(g, O) {
    if (R.isUndefined(O)) {
      if (!R.isUndefined(g)) return f(void 0, g);
    } else return f(void 0, O);
  }
  function _(g, O, C) {
    if (C in c) return f(g, O);
    if (C in i) return f(void 0, g);
  }
  const z = {
    url: y,
    method: y,
    data: y,
    baseURL: S,
    transformRequest: S,
    transformResponse: S,
    paramsSerializer: S,
    timeout: S,
    timeoutMessage: S,
    withCredentials: S,
    withXSRFToken: S,
    adapter: S,
    responseType: S,
    xsrfCookieName: S,
    xsrfHeaderName: S,
    onUploadProgress: S,
    onDownloadProgress: S,
    decompress: S,
    maxContentLength: S,
    maxBodyLength: S,
    beforeRedirect: S,
    transport: S,
    httpAgent: S,
    httpsAgent: S,
    cancelToken: S,
    socketPath: S,
    responseEncoding: S,
    validateStatus: _,
    headers: (g, O, C) => d(lh(g), lh(O), C, !0),
  };
  return (
    R.forEach(Object.keys(Object.assign({}, i, c)), function (O) {
      const C = z[O] || d,
        Y = C(i[O], c[O], O);
      (R.isUndefined(Y) && C !== _) || (r[O] = Y);
    }),
    r
  );
}
const zh = (i) => {
    const c = Ql({}, i);
    let {
      data: r,
      withXSRFToken: f,
      xsrfHeaderName: d,
      xsrfCookieName: y,
      headers: S,
      auth: _,
    } = c;
    (c.headers = S = le.from(S)),
      (c.url = Eh(
        _h(c.baseURL, c.url, c.allowAbsoluteUrls),
        i.params,
        i.paramsSerializer
      )),
      _ &&
        S.set(
          "Authorization",
          "Basic " +
            btoa(
              (_.username || "") +
                ":" +
                (_.password ? unescape(encodeURIComponent(_.password)) : "")
            )
        );
    let z;
    if (R.isFormData(r)) {
      if (Jt.hasStandardBrowserEnv || Jt.hasStandardBrowserWebWorkerEnv)
        S.setContentType(void 0);
      else if ((z = S.getContentType()) !== !1) {
        const [g, ...O] = z
          ? z
              .split(";")
              .map((C) => C.trim())
              .filter(Boolean)
          : [];
        S.setContentType([g || "multipart/form-data", ...O].join("; "));
      }
    }
    if (
      Jt.hasStandardBrowserEnv &&
      (f && R.isFunction(f) && (f = f(c)), f || (f !== !1 && j1(c.url)))
    ) {
      const g = d && y && Y1.read(y);
      g && S.set(d, g);
    }
    return c;
  },
  X1 = typeof XMLHttpRequest < "u",
  w1 =
    X1 &&
    function (i) {
      return new Promise(function (r, f) {
        const d = zh(i);
        let y = d.data;
        const S = le.from(d.headers).normalize();
        let { responseType: _, onUploadProgress: z, onDownloadProgress: g } = d,
          O,
          C,
          Y,
          L,
          H;
        function w() {
          L && L(),
            H && H(),
            d.cancelToken && d.cancelToken.unsubscribe(O),
            d.signal && d.signal.removeEventListener("abort", O);
        }
        let q = new XMLHttpRequest();
        q.open(d.method.toUpperCase(), d.url, !0), (q.timeout = d.timeout);
        function ct() {
          if (!q) return;
          const P = le.from(
              "getAllResponseHeaders" in q && q.getAllResponseHeaders()
            ),
            F = {
              data:
                !_ || _ === "text" || _ === "json"
                  ? q.responseText
                  : q.response,
              status: q.status,
              statusText: q.statusText,
              headers: P,
              config: i,
              request: q,
            };
          Rh(
            function (_t) {
              r(_t), w();
            },
            function (_t) {
              f(_t), w();
            },
            F
          ),
            (q = null);
        }
        "onloadend" in q
          ? (q.onloadend = ct)
          : (q.onreadystatechange = function () {
              !q ||
                q.readyState !== 4 ||
                (q.status === 0 &&
                  !(q.responseURL && q.responseURL.indexOf("file:") === 0)) ||
                setTimeout(ct);
            }),
          (q.onabort = function () {
            q &&
              (f(new I("Request aborted", I.ECONNABORTED, i, q)), (q = null));
          }),
          (q.onerror = function () {
            f(new I("Network Error", I.ERR_NETWORK, i, q)), (q = null);
          }),
          (q.ontimeout = function () {
            let bt = d.timeout
              ? "timeout of " + d.timeout + "ms exceeded"
              : "timeout exceeded";
            const F = d.transitional || Th;
            d.timeoutErrorMessage && (bt = d.timeoutErrorMessage),
              f(
                new I(
                  bt,
                  F.clarifyTimeoutError ? I.ETIMEDOUT : I.ECONNABORTED,
                  i,
                  q
                )
              ),
              (q = null);
          }),
          y === void 0 && S.setContentType(null),
          "setRequestHeader" in q &&
            R.forEach(S.toJSON(), function (bt, F) {
              q.setRequestHeader(F, bt);
            }),
          R.isUndefined(d.withCredentials) ||
            (q.withCredentials = !!d.withCredentials),
          _ && _ !== "json" && (q.responseType = d.responseType),
          g && (([Y, H] = ti(g, !0)), q.addEventListener("progress", Y)),
          z &&
            q.upload &&
            (([C, L] = ti(z)),
            q.upload.addEventListener("progress", C),
            q.upload.addEventListener("loadend", L)),
          (d.cancelToken || d.signal) &&
            ((O = (P) => {
              q &&
                (f(!P || P.type ? new Na(null, i, q) : P),
                q.abort(),
                (q = null));
            }),
            d.cancelToken && d.cancelToken.subscribe(O),
            d.signal &&
              (d.signal.aborted ? O() : d.signal.addEventListener("abort", O)));
        const nt = H1(d.url);
        if (nt && Jt.protocols.indexOf(nt) === -1) {
          f(new I("Unsupported protocol " + nt + ":", I.ERR_BAD_REQUEST, i));
          return;
        }
        q.send(y || null);
      });
    },
  Q1 = (i, c) => {
    const { length: r } = (i = i ? i.filter(Boolean) : []);
    if (c || r) {
      let f = new AbortController(),
        d;
      const y = function (g) {
        if (!d) {
          (d = !0), _();
          const O = g instanceof Error ? g : this.reason;
          f.abort(
            O instanceof I ? O : new Na(O instanceof Error ? O.message : O)
          );
        }
      };
      let S =
        c &&
        setTimeout(() => {
          (S = null), y(new I(`timeout ${c} of ms exceeded`, I.ETIMEDOUT));
        }, c);
      const _ = () => {
        i &&
          (S && clearTimeout(S),
          (S = null),
          i.forEach((g) => {
            g.unsubscribe
              ? g.unsubscribe(y)
              : g.removeEventListener("abort", y);
          }),
          (i = null));
      };
      i.forEach((g) => g.addEventListener("abort", y));
      const { signal: z } = f;
      return (z.unsubscribe = () => R.asap(_)), z;
    }
  },
  Z1 = function* (i, c) {
    let r = i.byteLength;
    if (r < c) {
      yield i;
      return;
    }
    let f = 0,
      d;
    for (; f < r; ) (d = f + c), yield i.slice(f, d), (f = d);
  },
  V1 = async function* (i, c) {
    for await (const r of K1(i)) yield* Z1(r, c);
  },
  K1 = async function* (i) {
    if (i[Symbol.asyncIterator]) {
      yield* i;
      return;
    }
    const c = i.getReader();
    try {
      for (;;) {
        const { done: r, value: f } = await c.read();
        if (r) break;
        yield f;
      }
    } finally {
      await c.cancel();
    }
  },
  ah = (i, c, r, f) => {
    const d = V1(i, c);
    let y = 0,
      S,
      _ = (z) => {
        S || ((S = !0), f && f(z));
      };
    return new ReadableStream(
      {
        async pull(z) {
          try {
            const { done: g, value: O } = await d.next();
            if (g) {
              _(), z.close();
              return;
            }
            let C = O.byteLength;
            if (r) {
              let Y = (y += C);
              r(Y);
            }
            z.enqueue(new Uint8Array(O));
          } catch (g) {
            throw (_(g), g);
          }
        },
        cancel(z) {
          return _(z), d.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  fi =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Dh = fi && typeof ReadableStream == "function",
  J1 =
    fi &&
    (typeof TextEncoder == "function"
      ? (
          (i) => (c) =>
            i.encode(c)
        )(new TextEncoder())
      : async (i) => new Uint8Array(await new Response(i).arrayBuffer())),
  Uh = (i, ...c) => {
    try {
      return !!i(...c);
    } catch {
      return !1;
    }
  },
  k1 =
    Dh &&
    Uh(() => {
      let i = !1;
      const c = new Request(Jt.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (i = !0), "half";
        },
      }).headers.has("Content-Type");
      return i && !c;
    }),
  uh = 64 * 1024,
  Yf = Dh && Uh(() => R.isReadableStream(new Response("").body)),
  ei = { stream: Yf && ((i) => i.body) };
fi &&
  ((i) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((c) => {
      !ei[c] &&
        (ei[c] = R.isFunction(i[c])
          ? (r) => r[c]()
          : (r, f) => {
              throw new I(
                `Response type '${c}' is not supported`,
                I.ERR_NOT_SUPPORT,
                f
              );
            });
    });
  })(new Response());
const $1 = async (i) => {
    if (i == null) return 0;
    if (R.isBlob(i)) return i.size;
    if (R.isSpecCompliantForm(i))
      return (
        await new Request(Jt.origin, { method: "POST", body: i }).arrayBuffer()
      ).byteLength;
    if (R.isArrayBufferView(i) || R.isArrayBuffer(i)) return i.byteLength;
    if ((R.isURLSearchParams(i) && (i = i + ""), R.isString(i)))
      return (await J1(i)).byteLength;
  },
  F1 = async (i, c) => {
    const r = R.toFiniteNumber(i.getContentLength());
    return r ?? $1(c);
  },
  W1 =
    fi &&
    (async (i) => {
      let {
        url: c,
        method: r,
        data: f,
        signal: d,
        cancelToken: y,
        timeout: S,
        onDownloadProgress: _,
        onUploadProgress: z,
        responseType: g,
        headers: O,
        withCredentials: C = "same-origin",
        fetchOptions: Y,
      } = zh(i);
      g = g ? (g + "").toLowerCase() : "text";
      let L = Q1([d, y && y.toAbortSignal()], S),
        H;
      const w =
        L &&
        L.unsubscribe &&
        (() => {
          L.unsubscribe();
        });
      let q;
      try {
        if (
          z &&
          k1 &&
          r !== "get" &&
          r !== "head" &&
          (q = await F1(O, f)) !== 0
        ) {
          let F = new Request(c, { method: "POST", body: f, duplex: "half" }),
            At;
          if (
            (R.isFormData(f) &&
              (At = F.headers.get("content-type")) &&
              O.setContentType(At),
            F.body)
          ) {
            const [_t, Ht] = th(q, ti(eh(z)));
            f = ah(F.body, uh, _t, Ht);
          }
        }
        R.isString(C) || (C = C ? "include" : "omit");
        const ct = "credentials" in Request.prototype;
        H = new Request(c, {
          ...Y,
          signal: L,
          method: r.toUpperCase(),
          headers: O.normalize().toJSON(),
          body: f,
          duplex: "half",
          credentials: ct ? C : void 0,
        });
        let nt = await fetch(H, Y);
        const P = Yf && (g === "stream" || g === "response");
        if (Yf && (_ || (P && w))) {
          const F = {};
          ["status", "statusText", "headers"].forEach((ae) => {
            F[ae] = nt[ae];
          });
          const At = R.toFiniteNumber(nt.headers.get("content-length")),
            [_t, Ht] = (_ && th(At, ti(eh(_), !0))) || [];
          nt = new Response(
            ah(nt.body, uh, _t, () => {
              Ht && Ht(), w && w();
            }),
            F
          );
        }
        g = g || "text";
        let bt = await ei[R.findKey(ei, g) || "text"](nt, i);
        return (
          !P && w && w(),
          await new Promise((F, At) => {
            Rh(F, At, {
              data: bt,
              headers: le.from(nt.headers),
              status: nt.status,
              statusText: nt.statusText,
              config: i,
              request: H,
            });
          })
        );
      } catch (ct) {
        throw (
          (w && w(),
          ct && ct.name === "TypeError" && /Load failed|fetch/i.test(ct.message)
            ? Object.assign(new I("Network Error", I.ERR_NETWORK, i, H), {
                cause: ct.cause || ct,
              })
            : I.from(ct, ct && ct.code, i, H))
        );
      }
    }),
  Lf = { http: d1, xhr: w1, fetch: W1 };
R.forEach(Lf, (i, c) => {
  if (i) {
    try {
      Object.defineProperty(i, "name", { value: c });
    } catch {}
    Object.defineProperty(i, "adapterName", { value: c });
  }
});
const nh = (i) => `- ${i}`,
  P1 = (i) => R.isFunction(i) || i === null || i === !1,
  Mh = {
    getAdapter: (i) => {
      i = R.isArray(i) ? i : [i];
      const { length: c } = i;
      let r, f;
      const d = {};
      for (let y = 0; y < c; y++) {
        r = i[y];
        let S;
        if (
          ((f = r),
          !P1(r) && ((f = Lf[(S = String(r)).toLowerCase()]), f === void 0))
        )
          throw new I(`Unknown adapter '${S}'`);
        if (f) break;
        d[S || "#" + y] = f;
      }
      if (!f) {
        const y = Object.entries(d).map(
          ([_, z]) =>
            `adapter ${_} ` +
            (z === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let S = c
          ? y.length > 1
            ? `since :
` +
              y.map(nh).join(`
`)
            : " " + nh(y[0])
          : "as no adapter specified";
        throw new I(
          "There is no suitable adapter to dispatch the request " + S,
          "ERR_NOT_SUPPORT"
        );
      }
      return f;
    },
    adapters: Lf,
  };
function Hf(i) {
  if (
    (i.cancelToken && i.cancelToken.throwIfRequested(),
    i.signal && i.signal.aborted)
  )
    throw new Na(null, i);
}
function ih(i) {
  return (
    Hf(i),
    (i.headers = le.from(i.headers)),
    (i.data = Cf.call(i, i.transformRequest)),
    ["post", "put", "patch"].indexOf(i.method) !== -1 &&
      i.headers.setContentType("application/x-www-form-urlencoded", !1),
    Mh.getAdapter(i.adapter || Hu.adapter)(i).then(
      function (f) {
        return (
          Hf(i),
          (f.data = Cf.call(i, i.transformResponse, f)),
          (f.headers = le.from(f.headers)),
          f
        );
      },
      function (f) {
        return (
          Oh(f) ||
            (Hf(i),
            f &&
              f.response &&
              ((f.response.data = Cf.call(i, i.transformResponse, f.response)),
              (f.response.headers = le.from(f.response.headers)))),
          Promise.reject(f)
        );
      }
    )
  );
}
const Nh = "1.10.0",
  si = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (i, c) => {
    si[i] = function (f) {
      return typeof f === i || "a" + (c < 1 ? "n " : " ") + i;
    };
  }
);
const ch = {};
si.transitional = function (c, r, f) {
  function d(y, S) {
    return (
      "[Axios v" +
      Nh +
      "] Transitional option '" +
      y +
      "'" +
      S +
      (f ? ". " + f : "")
    );
  }
  return (y, S, _) => {
    if (c === !1)
      throw new I(
        d(S, " has been removed" + (r ? " in " + r : "")),
        I.ERR_DEPRECATED
      );
    return (
      r &&
        !ch[S] &&
        ((ch[S] = !0),
        console.warn(
          d(
            S,
            " has been deprecated since v" +
              r +
              " and will be removed in the near future"
          )
        )),
      c ? c(y, S, _) : !0
    );
  };
};
si.spelling = function (c) {
  return (r, f) => (console.warn(`${f} is likely a misspelling of ${c}`), !0);
};
function I1(i, c, r) {
  if (typeof i != "object")
    throw new I("options must be an object", I.ERR_BAD_OPTION_VALUE);
  const f = Object.keys(i);
  let d = f.length;
  for (; d-- > 0; ) {
    const y = f[d],
      S = c[y];
    if (S) {
      const _ = i[y],
        z = _ === void 0 || S(_, y, i);
      if (z !== !0)
        throw new I("option " + y + " must be " + z, I.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new I("Unknown option " + y, I.ERR_BAD_OPTION);
  }
}
const In = { assertOptions: I1, validators: si },
  Ce = In.validators;
let wl = class {
  constructor(c) {
    (this.defaults = c || {}),
      (this.interceptors = { request: new Pd(), response: new Pd() });
  }
  async request(c, r) {
    try {
      return await this._request(c, r);
    } catch (f) {
      if (f instanceof Error) {
        let d = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(d)
          : (d = new Error());
        const y = d.stack ? d.stack.replace(/^.+\n/, "") : "";
        try {
          f.stack
            ? y &&
              !String(f.stack).endsWith(y.replace(/^.+\n.+\n/, "")) &&
              (f.stack +=
                `
` + y)
            : (f.stack = y);
        } catch {}
      }
      throw f;
    }
  }
  _request(c, r) {
    typeof c == "string" ? ((r = r || {}), (r.url = c)) : (r = c || {}),
      (r = Ql(this.defaults, r));
    const { transitional: f, paramsSerializer: d, headers: y } = r;
    f !== void 0 &&
      In.assertOptions(
        f,
        {
          silentJSONParsing: Ce.transitional(Ce.boolean),
          forcedJSONParsing: Ce.transitional(Ce.boolean),
          clarifyTimeoutError: Ce.transitional(Ce.boolean),
        },
        !1
      ),
      d != null &&
        (R.isFunction(d)
          ? (r.paramsSerializer = { serialize: d })
          : In.assertOptions(
              d,
              { encode: Ce.function, serialize: Ce.function },
              !0
            )),
      r.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (r.allowAbsoluteUrls = !0)),
      In.assertOptions(
        r,
        {
          baseUrl: Ce.spelling("baseURL"),
          withXsrfToken: Ce.spelling("withXSRFToken"),
        },
        !0
      ),
      (r.method = (r.method || this.defaults.method || "get").toLowerCase());
    let S = y && R.merge(y.common, y[r.method]);
    y &&
      R.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (H) => {
          delete y[H];
        }
      ),
      (r.headers = le.concat(S, y));
    const _ = [];
    let z = !0;
    this.interceptors.request.forEach(function (w) {
      (typeof w.runWhen == "function" && w.runWhen(r) === !1) ||
        ((z = z && w.synchronous), _.unshift(w.fulfilled, w.rejected));
    });
    const g = [];
    this.interceptors.response.forEach(function (w) {
      g.push(w.fulfilled, w.rejected);
    });
    let O,
      C = 0,
      Y;
    if (!z) {
      const H = [ih.bind(this), void 0];
      for (
        H.unshift.apply(H, _),
          H.push.apply(H, g),
          Y = H.length,
          O = Promise.resolve(r);
        C < Y;

      )
        O = O.then(H[C++], H[C++]);
      return O;
    }
    Y = _.length;
    let L = r;
    for (C = 0; C < Y; ) {
      const H = _[C++],
        w = _[C++];
      try {
        L = H(L);
      } catch (q) {
        w.call(this, q);
        break;
      }
    }
    try {
      O = ih.call(this, L);
    } catch (H) {
      return Promise.reject(H);
    }
    for (C = 0, Y = g.length; C < Y; ) O = O.then(g[C++], g[C++]);
    return O;
  }
  getUri(c) {
    c = Ql(this.defaults, c);
    const r = _h(c.baseURL, c.url, c.allowAbsoluteUrls);
    return Eh(r, c.params, c.paramsSerializer);
  }
};
R.forEach(["delete", "get", "head", "options"], function (c) {
  wl.prototype[c] = function (r, f) {
    return this.request(
      Ql(f || {}, { method: c, url: r, data: (f || {}).data })
    );
  };
});
R.forEach(["post", "put", "patch"], function (c) {
  function r(f) {
    return function (y, S, _) {
      return this.request(
        Ql(_ || {}, {
          method: c,
          headers: f ? { "Content-Type": "multipart/form-data" } : {},
          url: y,
          data: S,
        })
      );
    };
  }
  (wl.prototype[c] = r()), (wl.prototype[c + "Form"] = r(!0));
});
let tv = class xh {
  constructor(c) {
    if (typeof c != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function (y) {
      r = y;
    });
    const f = this;
    this.promise.then((d) => {
      if (!f._listeners) return;
      let y = f._listeners.length;
      for (; y-- > 0; ) f._listeners[y](d);
      f._listeners = null;
    }),
      (this.promise.then = (d) => {
        let y;
        const S = new Promise((_) => {
          f.subscribe(_), (y = _);
        }).then(d);
        return (
          (S.cancel = function () {
            f.unsubscribe(y);
          }),
          S
        );
      }),
      c(function (y, S, _) {
        f.reason || ((f.reason = new Na(y, S, _)), r(f.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(c) {
    if (this.reason) {
      c(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(c) : (this._listeners = [c]);
  }
  unsubscribe(c) {
    if (!this._listeners) return;
    const r = this._listeners.indexOf(c);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const c = new AbortController(),
      r = (f) => {
        c.abort(f);
      };
    return (
      this.subscribe(r),
      (c.signal.unsubscribe = () => this.unsubscribe(r)),
      c.signal
    );
  }
  static source() {
    let c;
    return {
      token: new xh(function (d) {
        c = d;
      }),
      cancel: c,
    };
  }
};
function ev(i) {
  return function (r) {
    return i.apply(null, r);
  };
}
function lv(i) {
  return R.isObject(i) && i.isAxiosError === !0;
}
const Gf = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Gf).forEach(([i, c]) => {
  Gf[c] = i;
});
function Ch(i) {
  const c = new wl(i),
    r = sh(wl.prototype.request, c);
  return (
    R.extend(r, wl.prototype, c, { allOwnKeys: !0 }),
    R.extend(r, c, null, { allOwnKeys: !0 }),
    (r.create = function (d) {
      return Ch(Ql(i, d));
    }),
    r
  );
}
const Ut = Ch(Hu);
Ut.Axios = wl;
Ut.CanceledError = Na;
Ut.CancelToken = tv;
Ut.isCancel = Oh;
Ut.VERSION = Nh;
Ut.toFormData = ci;
Ut.AxiosError = I;
Ut.Cancel = Ut.CanceledError;
Ut.all = function (c) {
  return Promise.all(c);
};
Ut.spread = ev;
Ut.isAxiosError = lv;
Ut.mergeConfig = Ql;
Ut.AxiosHeaders = le;
Ut.formToJSON = (i) => Ah(R.isHTMLForm(i) ? new FormData(i) : i);
Ut.getAdapter = Mh.getAdapter;
Ut.HttpStatusCode = Gf;
Ut.default = Ut;
const {
  Axios: rv,
  AxiosError: ov,
  CanceledError: dv,
  isCancel: hv,
  CancelToken: yv,
  VERSION: mv,
  all: vv,
  Cancel: Sv,
  isAxiosError: gv,
  spread: bv,
  toFormData: pv,
  AxiosHeaders: Ev,
  HttpStatusCode: Tv,
  formToJSON: Av,
  getAdapter: Ov,
  mergeConfig: Rv,
} = Ut;
function av({ onAddItemSubmit: i }) {
  const [c, r] = $t.useState(!1),
    [f, d] = $t.useState([]),
    [y, S] = $t.useState([]),
    [_, z] = $t.useState("Adicionar item");
  $t.useEffect(() => {
    (async () => {
      try {
        const w = await Ut.get("https://cybernow.com.br/SmartList/api/");
        S(w.data);
      } catch (w) {
        console.log("Error fetching products: ", w);
      }
    })();
  }, []);
  function g() {
    r(!0);
  }
  function O() {
    r(!1), z("");
  }
  function C(H) {
    z(H.toLowerCase()), L(_);
  }
  function Y(H) {
    return H.sort((q, ct) => {
      const nt = q.nome_completo.toUpperCase(),
        P = ct.nome_completo.toUpperCase();
      return nt < P ? -1 : nt > P ? 1 : 0;
    });
  }
  function L(H) {
    let w = y
        .filter((P) => {
          if (H !== "") return P.nome_completo.toLowerCase().includes(H);
        })
        .slice(0, 50),
      q = [],
      ct = w.filter((P) => {
        let bt = P.nome_completo.toLowerCase().startsWith(H);
        if (bt) return bt;
        q.push(P);
      }),
      nt = Y(ct).concat(Y(q));
    d(nt);
  }
  return $.jsxs("div", {
    className: "menu-main",
    children: [
      $.jsx(Rm, {
        className: "component",
        searching: c,
        onSearchClick: g,
        onChangeEvent: C,
        inputValue: _,
      }),
      $.jsx(_m, {
        notSearching: O,
        searching: c,
        onAddItemSubmit: i,
        searchArray: f,
      }),
    ],
  });
}
function uv(i) {
  function c(r) {
    const f = ["aproximadamente", "aprox"];
    let d = new RegExp(
        "\\d+(?:[.,]\\d+)?\\s*(?<!\\p{L})(?:kg|g|l|ml|dz|unidades|unidade|unds|litros|litro)(?!\\p{L})",
        "giu"
      ),
      y = r.toLowerCase().replace(".", "");
    for (let _ in f) (_ = f[_]), y.includes(_) && (y = y.replace(_, ""));
    let S;
    try {
      S = y.match(d)[0].replace(" ", "");
    } catch {
      S = "produto";
    }
    return (y = y.split(d)[0].trim().toUpperCase()), [y, S];
  }
  return $.jsx("div", {
    className: "list-main",
    children: i.itemList.map((r) =>
      $.jsxs(
        "div",
        {
          className: `list-item ${r.isChecked ? "checked" : null}`,
          children: [
            $.jsx("div", {
              onClick: () => i.onItemClick(r.id, r.price),
              className: "item-container",
              children: $.jsxs("div", {
                className: "item-description",
                children: [
                  $.jsx("h2", { children: c(r.item)[0] }),
                  $.jsx("div", {
                    className: "item-price",
                    children: $.jsxs("h3", {
                      children: ["R$ ", r.price, "/", c(r.item)[1]],
                    }),
                  }),
                ],
              }),
            }),
            $.jsxs("div", {
              className: "item-count",
              children: [
                $.jsx("div", {
                  onClick: () => i.onExcludeClick(r.id),
                  className: `controls ${r.isChecked ? "shown" : ""}`,
                  children:
                    r.count === 1
                      ? $.jsx(Om, { color: "#333333" })
                      : $.jsx(gm, { color: "#333333" }),
                }),
                $.jsx("span", { children: r.count }),
                $.jsx("div", {
                  onClick: () => i.onPlusClick(r.id),
                  className: `controls ${r.isChecked ? "shown" : ""}`,
                  children: $.jsx(pm, { color: "#333333" }),
                }),
              ],
            }),
          ],
        },
        r.id
      )
    ),
  });
}
function nv({ itemList: i, finalPrice: c, currentValue: r }) {
  return (
    (c = parseFloat(c).toFixed(2)),
    (r = parseFloat(r).toFixed(2)),
    $.jsxs("div", {
      className: "bottom-text-value ",
      children: [
        $.jsxs("h3", {
          children: [i.filter((f) => f.isChecked === !0).length, "/", i.length],
        }),
        $.jsxs("h3", { children: ["R$ ", r] }),
        $.jsxs("h3", { children: ["R$ ", c] }),
      ],
    })
  );
}
function iv({
  itemList: i,
  setItemList: c,
  finalPrice: r,
  setFinalPrice: f,
  currentValue: d,
  setCurrentValue: y,
}) {
  function S(C) {
    const Y = i.map((L) =>
      L.id === C ? (_(L), { ...L, isChecked: !L.isChecked }) : L
    );
    c(Y);
  }
  function _(C) {
    const Y = C.price * C.count,
      L = C.isChecked
        ? parseFloat(d) - parseFloat(Y)
        : parseFloat(d) + parseFloat(Y);
    y(L), console.log(d);
  }
  function z(C, Y) {
    const L = Y
      ? parseFloat(r) + parseFloat(C.price)
      : parseFloat(r) - parseFloat(C.price);
    console.log(L), console.log(typeof L), f(L);
  }
  function g(C) {
    const Y = i
      .map((L) => {
        if (L.id === C && L.isChecked == !1) {
          if ((z(L, !1), L.count === 1)) return { ...L, toExclude: !0 };
          const H = L.count - 1;
          return { ...L, count: H };
        }
        return L;
      })
      .filter((L) => L.toExclude === !1);
    c(Y);
  }
  function O(C) {
    const Y = i.map((L) => {
      if (L.id === C && L.isChecked == !1) {
        const H = L.count + 1;
        return z(L, !0), { ...L, count: H };
      }
      return L;
    });
    c(Y);
  }
  return $.jsxs("div", {
    children: [
      $.jsx(uv, {
        itemList: i,
        onItemClick: S,
        onExcludeClick: g,
        onPlusClick: O,
      }),
      $.jsx(nv, { itemList: i, finalPrice: r, currentValue: d }),
    ],
  });
}
function cv() {
  const [i, c] = $t.useState(JSON.parse(localStorage.getItem("items")) || []),
    [r, f] = $t.useState(JSON.parse(localStorage.getItem("finalPrice")) || 0),
    [d, y] = $t.useState(JSON.parse(localStorage.getItem("currentValue")) || 0);
  function S(_, z, g) {
    const O = {
        id: _,
        item: z,
        price: g,
        count: 1,
        isChecked: !1,
        toExclude: !1,
      },
      C = parseFloat(r) + parseFloat(g);
    for (z in i) if (i[z].id === O.id) return;
    c([...i, O]), f(C);
  }
  return (
    $t.useEffect(() => {
      localStorage.setItem("items", JSON.stringify(i)),
        localStorage.setItem("finalPrice", JSON.stringify(r)),
        localStorage.setItem("currentValue", JSON.stringify(d));
    }, [i, r, d]),
    $.jsx($.Fragment, {
      children: $.jsxs("div", {
        className: "application",
        children: [
          $.jsx(av, { onAddItemSubmit: S, itemList: i }),
          $.jsx(iv, {
            itemList: i,
            setItemList: c,
            finalPrice: r,
            setFinalPrice: f,
            currentValue: d,
            setCurrentValue: y,
          }),
        ],
      }),
    })
  );
}
om.createRoot(document.getElementById("root")).render(
  $.jsx($t.StrictMode, { children: $.jsx(cv, {}) })
);
