!
function(t) {
    function e(r) {
        if (i[r]) return i[r].exports;
        var o = i[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return t[r].call(o.exports, o, o.exports, e),
        o.loaded = !0,
        o.exports
    }
    var i = {};
    return e.m = t,
    e.c = i,
    e.p = "",
    e(0)
} ([function(t, e, i) {
    i(1),
    t.exports = i(4)
},
function(t, e, i) {
    var r, o; (function(n, a) {
        "use strict";
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(t) {
            return typeof t
        }: function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": typeof t
        }; !
        function(n, a) {
            "object" == s(e) && "undefined" != typeof t ? t.exports = a() : (r = a, o = "function" == typeof r ? r.call(e, i, e, t) : r, !(void 0 !== o && (t.exports = o)))
        } (void 0,
        function() {
            function t(t) {
                return "function" == typeof t || "object" == ("undefined" == typeof t ? "undefined": s(t)) && null !== t
            }
            function e(t) {
                return "function" == typeof t
            }
            function r(t) {
                J = t
            }
            function o(t) {
                K = t
            }
            function l() {
                return function() {
                    return n.nextTick(p)
                }
            }
            function u() {
                return "undefined" != typeof Z ?
                function() {
                    Z(p)
                }: f()
            }
            function c() {
                var t = 0,
                e = new tt(p),
                i = document.createTextNode("");
                return e.observe(i, {
                    characterData: !0
                }),
                function() {
                    i.data = t = ++t % 2
                }
            }
            function h() {
                var t = new MessageChannel;
                return t.port1.onmessage = p,
                function() {
                    return t.port2.postMessage(0)
                }
            }
            function f() {
                var t = setTimeout;
                return function() {
                    return t(p, 1)
                }
            }
            function p() {
                for (var t = 0; t < q; t += 2) {
                    var e = rt[t],
                    i = rt[t + 1];
                    e(i),
                    rt[t] = void 0,
                    rt[t + 1] = void 0
                }
                q = 0
            }
            function d() {
                try {
                    var t = i(3);
                    return Z = t.runOnLoop || t.runOnContext,
                    u()
                } catch(t) {
                    return f()
                }
            }
            function v(t, e) {
                var i = arguments,
                r = this,
                o = new this.constructor(y);
                void 0 === o[nt] && S(o);
                var n = r._state;
                return n ? !
                function() {
                    var t = i[n - 1];
                    K(function() {
                        return I(n, o, t, r._result)
                    })
                } () : R(r, o, t, e),
                o
            }
            function g(t) {
                var e = this;
                if (t && "object" == ("undefined" == typeof t ? "undefined": s(t)) && t.constructor === e) return t;
                var i = new e(y);
                return x(i, t),
                i
            }
            function y() {}
            function m() {
                return new TypeError("You cannot resolve a promise with itself")
            }
            function _() {
                return new TypeError("A promises callback cannot return that same promise.")
            }
            function w(t) {
                try {
                    return t.then
                } catch(t) {
                    return ut.error = t,
                    ut
                }
            }
            function b(t, e, i, r) {
                try {
                    t.call(e, i, r)
                } catch(t) {
                    return t
                }
            }
            function L(t, e, i) {
                K(function(t) {
                    var r = !1,
                    o = b(i, e,
                    function(i) {
                        r || (r = !0, e !== i ? x(t, i) : E(t, i))
                    },
                    function(e) {
                        r || (r = !0, A(t, e))
                    },
                    "Settle: " + (t._label || " unknown promise")); ! r && o && (r = !0, A(t, o))
                },
                t)
            }
            function T(t, e) {
                e._state === st ? E(t, e._result) : e._state === lt ? A(t, e._result) : R(e, void 0,
                function(e) {
                    return x(t, e)
                },
                function(e) {
                    return A(t, e)
                })
            }
            function M(t, i, r) {
                i.constructor === t.constructor && r === v && i.constructor.resolve === g ? T(t, i) : r === ut ? (A(t, ut.error), ut.error = null) : void 0 === r ? E(t, i) : e(r) ? L(t, i, r) : E(t, i)
            }
            function x(e, i) {
                e === i ? A(e, m()) : t(i) ? M(e, i, w(i)) : E(e, i)
            }
            function P(t) {
                t._onerror && t._onerror(t._result),
                O(t)
            }
            function E(t, e) {
                t._state === at && (t._result = e, t._state = st, 0 !== t._subscribers.length && K(O, t))
            }
            function A(t, e) {
                t._state === at && (t._state = lt, t._result = e, K(P, t))
            }
            function R(t, e, i, r) {
                var o = t._subscribers,
                n = o.length;
                t._onerror = null,
                o[n] = e,
                o[n + st] = i,
                o[n + lt] = r,
                0 === n && t._state && K(O, t)
            }
            function O(t) {
                var e = t._subscribers,
                i = t._state;
                if (0 !== e.length) {
                    for (var r = void 0,
                    o = void 0,
                    n = t._result,
                    a = 0; a < e.length; a += 3) r = e[a],
                    o = e[a + i],
                    r ? I(i, r, o, n) : o(n);
                    t._subscribers.length = 0
                }
            }
            function C() {
                this.error = null
            }
            function D(t, e) {
                try {
                    return t(e)
                } catch(t) {
                    return ct.error = t,
                    ct
                }
            }
            function I(t, i, r, o) {
                var n = e(r),
                a = void 0,
                s = void 0,
                l = void 0,
                u = void 0;
                if (n) {
                    if (a = D(r, o), a === ct ? (u = !0, s = a.error, a.error = null) : l = !0, i === a) return void A(i, _())
                } else a = o,
                l = !0;
                i._state !== at || (n && l ? x(i, a) : u ? A(i, s) : t === st ? E(i, a) : t === lt && A(i, a))
            }
            function B(t, e) {
                try {
                    e(function(e) {
                        x(t, e)
                    },
                    function(e) {
                        A(t, e)
                    })
                } catch(e) {
                    A(t, e)
                }
            }
            function V() {
                return ht++
            }
            function S(t) {
                t[nt] = ht++,
                t._state = void 0,
                t._result = void 0,
                t._subscribers = []
            }
            function F(t, e) {
                this._instanceConstructor = t,
                this.promise = new t(y),
                this.promise[nt] || S(this.promise),
                Y(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? E(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && E(this.promise, this._result))) : A(this.promise, N())
            }
            function N() {
                return new Error("Array Methods must be provided an Array")
            }
            function j(t) {
                return new F(this, t).promise
            }
            function U(t) {
                var e = this;
                return new e(Y(t) ?
                function(i, r) {
                    for (var o = t.length,
                    n = 0; n < o; n++) e.resolve(t[n]).then(i, r)
                }: function(t, e) {
                    return e(new TypeError("You must pass an array to race."))
                })
            }
            function k(t) {
                var e = this,
                i = new e(y);
                return A(i, t),
                i
            }
            function G() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }
            function W() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }
            function X(t) {
                this[nt] = V(),
                this._result = this._state = void 0,
                this._subscribers = [],
                y !== t && ("function" != typeof t && G(), this instanceof X ? B(this, t) : W())
            }
            function z() {
                var t = void 0;
                if ("undefined" != typeof a) t = a;
                else if ("undefined" != typeof self) t = self;
                else try {
                    t = Function("return this")()
                } catch(t) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var e = t.Promise;
                if (e) {
                    var i = null;
                    try {
                        i = Object.prototype.toString.call(e.resolve())
                    } catch(t) {}
                    if ("[object Promise]" === i && !e.cast) return
                }
                t.Promise = X
            }
            var H = void 0;
            H = Array.isArray ? Array.isArray: function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            };
            var Y = H,
            q = 0,
            Z = void 0,
            J = void 0,
            K = function(t, e) {
                rt[q] = t,
                rt[q + 1] = e,
                q += 2,
                2 === q && (J ? J(p) : ot())
            },
            $ = "undefined" != typeof window ? window: void 0,
            Q = $ || {},
            tt = Q.MutationObserver || Q.WebKitMutationObserver,
            et = "undefined" == typeof self && "undefined" != typeof n && "[object process]" === {}.toString.call(n),
            it = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
            rt = new Array(1e3),
            ot = void 0;
            ot = et ? l() : tt ? c() : it ? h() : void 0 === $ ? d() : f();
            var nt = Math.random().toString(36).substring(16),
            at = void 0,
            st = 1,
            lt = 2,
            ut = new C,
            ct = new C,
            ht = 0;
            return F.prototype._enumerate = function() {
                for (var t = this.length,
                e = this._input,
                i = 0; this._state === at && i < t; i++) this._eachEntry(e[i], i)
            },
            F.prototype._eachEntry = function(t, e) {
                var i = this._instanceConstructor,
                r = i.resolve;
                if (r === g) {
                    var o = w(t);
                    if (o === v && t._state !== at) this._settledAt(t._state, e, t._result);
                    else if ("function" != typeof o) this._remaining--,
                    this._result[e] = t;
                    else if (i === X) {
                        var n = new i(y);
                        M(n, t, o),
                        this._willSettleAt(n, e)
                    } else this._willSettleAt(new i(function(e) {
                        return e(t)
                    }), e)
                } else this._willSettleAt(r(t), e)
            },
            F.prototype._settledAt = function(t, e, i) {
                var r = this.promise;
                r._state === at && (this._remaining--, t === lt ? A(r, i) : this._result[e] = i),
                0 === this._remaining && E(r, this._result)
            },
            F.prototype._willSettleAt = function(t, e) {
                var i = this;
                R(t, void 0,
                function(t) {
                    return i._settledAt(st, e, t)
                },
                function(t) {
                    return i._settledAt(lt, e, t)
                })
            },
            X.all = j,
            X.race = U,
            X.resolve = g,
            X.reject = k,
            X._setScheduler = r,
            X._setAsap = o,
            X._asap = K,
            X.prototype = {
                constructor: X,
                then: v,
                catch: function(t) {
                    return this.then(null, t)
                }
            },
            X.polyfill = z,
            X.Promise = X,
            X.polyfill(),
            X
        })
    }).call(e, i(2),
    function() {
        return this
    } ())
},
function(t, e) {
    "use strict";
    function i() {
        throw new Error("setTimeout has not been defined")
    }
    function r() {
        throw new Error("clearTimeout has not been defined")
    }
    function o(t) {
        if (c === setTimeout) return setTimeout(t, 0);
        if ((c === i || !c) && setTimeout) return c = setTimeout,
        setTimeout(t, 0);
        try {
            return c(t, 0)
        } catch(e) {
            try {
                return c.call(null, t, 0)
            } catch(e) {
                return c.call(this, t, 0)
            }
        }
    }
    function n(t) {
        if (h === clearTimeout) return clearTimeout(t);
        if ((h === r || !h) && clearTimeout) return h = clearTimeout,
        clearTimeout(t);
        try {
            return h(t)
        } catch(e) {
            try {
                return h.call(null, t)
            } catch(e) {
                return h.call(this, t)
            }
        }
    }
    function a() {
        v && p && (v = !1, p.length ? d = p.concat(d) : g = -1, d.length && s())
    }
    function s() {
        if (!v) {
            var t = o(a);
            v = !0;
            for (var e = d.length; e;) {
                for (p = d, d = []; ++g < e;) p && p[g].run();
                g = -1,
                e = d.length
            }
            p = null,
            v = !1,
            n(t)
        }
    }
    function l(t, e) {
        this.fun = t,
        this.array = e
    }
    function u() {}
    var c, h, f = t.exports = {}; !
    function() {
        try {
            c = "function" == typeof setTimeout ? setTimeout: i
        } catch(t) {
            c = i
        }
        try {
            h = "function" == typeof clearTimeout ? clearTimeout: r
        } catch(t) {
            h = r
        }
    } ();
    var p, d = [],
    v = !1,
    g = -1;
    f.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
        d.push(new l(t, e)),
        1 !== d.length || v || o(s)
    },
    l.prototype.run = function() {
        this.fun.apply(null, this.array)
    },
    f.title = "browser",
    f.browser = !0,
    f.env = {},
    f.argv = [],
    f.version = "",
    f.versions = {},
    f.on = u,
    f.addListener = u,
    f.once = u,
    f.off = u,
    f.removeListener = u,
    f.removeAllListeners = u,
    f.emit = u,
    f.prependListener = u,
    f.prependOnceListener = u,
    f.listeners = function(t) {
        return []
    },
    f.binding = function(t) {
        throw new Error("process.binding is not supported")
    },
    f.cwd = function() {
        return "/"
    },
    f.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    },
    f.umask = function() {
        return 0
    }
},
function(t, e) {},
function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(5),
    o = i(6);
    i(56),
    function() {
        function t() {
            i.resize(window.innerWidth, window.innerHeight)
        }
        var e = new o.GlobeOptions;
        e.satellite = !0,
        e.level = 3,
        e.lonlat = "auto";
        var i = o.
    default.getInstance(e);
        i.placeAt(document.body),
        window.globe = i,
        window.kernel = r.
    default,
        window.addEventListener("resize", t, !1),
        t()
    } ()
},
function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = 6378137,
    r = 500,
    o = r / i,
    n = Math.PI * r,
    a = 156543.03392800014,
    s = a * o,
    l = function() {
        function t() {}
        return t
    } ();
    l.gl = null,
    l.idCounter = 0,
    l.version = "0.6.0",
    l.SCALE_FACTOR = o,
    l.REAL_EARTH_RADIUS = i,
    l.EARTH_RADIUS = r,
    l.MAX_RESOLUTION = s,
    l.MAX_REAL_RESOLUTION = a,
    l.MAX_PROJECTED_COORD = n,
    l.BASE_LEVEL = 6,
    l.MAX_LEVEL = 18,
    l.MIN_LEVEL = 2,
    l.MIN_PITCH_LEVEL = 8,
    l.proxy = "",
    e.
default = l
},
function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(5),
    o = i(7),
    n = i(8),
    a = i(9),
    s = i(20),
    l = i(22),
    u = i(23),
    c = i(24),
    h = i(40),
    f = i(41),
    p = i(44),
    d = i(48),
    v = i(51),
    g = i(19),
    y = i(49),
    m = o.
default.isMobile() ? 11 : 3,
    _ = [116.3975, 39.9085],
    w = function() {
        function t() {
            this.pauseRendering = !1,
            this.satellite = !0,
            this.level = "auto",
            this.lonlat = "auto",
            this.key = ""
        }
        return t
    } ();
    e.GlobeOptions = w;
    var b = function() {
        function t(t, e) {
            var i = this;
            this.canvas = t,
            this.options = e,
            this.renderer = null,
            this.scene = null,
            this.camera = null,
            this.tiledLayer = null,
            this.labelLayer = null,
            this.trafficLayer = null,
            this.poiLayer = null,
            this.routeLayer = null,
            this.locationGraphic = null,
            this.debugStopRefreshTiles = !1,
            this.REFRESH_INTERVAL = 150,
            this.lastRefreshTimestamp = -1,
            this.lastRefreshCameraCore = null,
            this.eventHandler = null,
            this.allRefreshCount = 0,
            this.realRefreshCount = 0,
            this.afterRenderCallbacks = [],
            this.gl = null,
            this.options || (this.options = new w),
            this.renderer = new n.
        default(t, this._onBeforeRender.bind(this), this._onAfterRender.bind(this)),
            this.gl = this.renderer.gl,
            this.scene = new s.
        default;
            var l = t.width / t.height,
            g = this.options.level >= 0 ? this.options.level: m,
            b = this.options.lonlat && 2 === this.options.lonlat.length ? this.options.lonlat: _;
            this.camera = new a.
        default(t, 30, l, 1, 2 * r.
        default.EARTH_RADIUS, g, b, e.resolutionFactor),
            this.renderer.setScene(this.scene),
            this.renderer.setCamera(this.camera),
            this.options.satellite ? this._setTiledLayer(new c.GoogleTiledLayer("Default"), this.options.pauseRendering) : this._setTiledLayer(new h.AutonaviTiledLayer, this.options.pauseRendering);
            var L = f.
        default.getInstance();
            this.scene.add(L),
            this.routeLayer = v.
        default.getInstance(this.camera, this.options.key),
            this.scene.add(this.routeLayer),
            this.poiLayer = d.
        default.getInstance(),
            this.poiLayer.globe = this,
            this.scene.add(this.poiLayer),
            this.locationGraphic = p.
        default.getInstance(this),
            this.scene.add(this.locationGraphic),
            this.eventHandler = new u.
        default(this),
            this.options.pauseRendering !== !0 && this.renderer.resumeRendering();
            var T = function(t) {
                t && i.afterRenderCallbacks.push(function() {
                    i.updateUserLocation(t)
                })
            };
            y.
        default.getCurrentPosition(!1).then(T).then(function() {
                o.
            default.isMobile() && y.
            default.getCurrentPosition(!0).then(T)
            })
        }
        return t.getInstance = function(e) {
            if (!this.globe) {
                var i = document.createElement("canvas");
                i.width = document.documentElement.clientWidth,
                i.height = document.documentElement.clientHeight,
                this.globe = new t(i, e)
            }
            return this.globe
        },
        t.prototype.placeAt = function(t) {
            this.canvas.parentNode ? this.canvas.parentNode !== t && t.appendChild(this.canvas) : t.appendChild(this.canvas)
        },
        t.prototype.resize = function(t, e) {
            this.canvas.width = t,
            this.canvas.height = e,
            this.camera.setAspect(this.canvas.width / this.canvas.height),
            o.
        default.publish("extent-change")
        },
        t.prototype.updateUserLocation = function(t) {
            this.locationGraphic.setLonLat(t.lon, t.lat);
            var e = this.camera.getLonlat(),
            i = e[0],
            r = e[1];
            "auto" === this.options.lonlat && (i = t.lon, r = t.lat);
            var o = this.getLevel();
            "auto" === this.options.level && (o = 8, o = t.accuracy <= 100 ? 16 : t.accuracy <= 1e3 ? 13 : 11),
            this.centerTo(i, r, o)
        },
        t.prototype.getLonlat = function() {
            return this.camera.getLonlat()
        },
        t.prototype.isRenderingPaused = function() {
            return this.renderer.isRenderingPaused()
        },
        t.prototype.pauseRendering = function() {
            this.renderer.pauseRendering()
        },
        t.prototype.resumeRendering = function() {
            this.renderer.resumeRendering(),
            this.refresh(!0)
        },
        t.prototype._setTiledLayer = function(t, e) {
            if (void 0 === e && (e = !1), l.
        default.clear(), this.tiledLayer) {
                var i = this.scene.remove(this.tiledLayer);
                i || console.error("this.scene.remove(this.tiledLayer)失败"),
                this.scene.tiledLayer = null
            }
            t.globe = this,
            this.tiledLayer = t,
            this.scene.add(this.tiledLayer, !0),
            e || this.refresh(!0)
        },
        t.prototype.showLabelLayer = function() {
            this.labelLayer && (this.labelLayer.visible = !0)
        },
        t.prototype.hideLabelLayer = function() {
            this.labelLayer && (this.labelLayer.visible = !1)
        },
        t.prototype.showTrafficLayer = function() {
            this.trafficLayer && (this.trafficLayer.visible = !0)
        },
        t.prototype.hideTrafficLayer = function() {
            this.trafficLayer && (this.trafficLayer.visible = !1)
        },
        t.prototype.getLevel = function() {
            return this.camera.getLevel()
        },
        t.prototype.zoomIn = function() {
            this.setLevel(this.getLevel() + 1)
        },
        t.prototype.setLevel = function(t) {
            this.camera && this.camera.setLevel(t)
        },
        t.prototype.centerTo = function(t, e, i) {
            return void 0 === i && (i = this.getLevel()),
            this.camera.centerTo(t, e, i)
        },
        t.prototype.animateTo = function(t, e, i, r) {
            return void 0 === i && (i = this.getLevel()),
            void 0 === r && (r = 1e3),
            this.camera.animateTo(t, e, i, r)
        },
        t.prototype.setExtent = function(t) {
            return this.camera.setExtent(t)
        },
        t.prototype.animateToExtent = function(t, e) {
            return void 0 === e && (e = 1e3),
            this.camera.animateToExtent(t, e)
        },
        t.prototype.isAnimating = function() {
            return this.camera.isAnimating()
        },
        t.prototype.animateToLevel = function(t, e) {
            this.isAnimating() || (t < r.
        default.MIN_LEVEL && (t = r.
        default.MIN_LEVEL), t > r.
        default.MAX_LEVEL && (t = r.
        default.MAX_LEVEL), t !== this.getLevel() && this.camera.animateToLevel(t, e))
        },
        t.prototype.animateOut = function(t) {
            this.animateToLevel(this.getLevel() - 1, t)
        },
        t.prototype.animateIn = function(t) {
            this.animateToLevel(this.getLevel() + 1, t)
        },
        t.prototype._onBeforeRender = function(t) {
            this.refresh()
        },
        t.prototype._onAfterRender = function(t) {
            this.afterRenderCallbacks.forEach(function(t) {
                return t()
            }),
            this.afterRenderCallbacks = []
        },
        t.prototype.logRefreshInfo = function() {
            console.log(this.realRefreshCount, this.allRefreshCount, this.realRefreshCount / this.allRefreshCount)
        },
        t.prototype.refresh = function(t) {
            void 0 === t && (t = !1),
            this.allRefreshCount++;
            var e = Date.now();
            if (this.camera.update(t), this.tiledLayer && this.scene && this.camera && !this.debugStopRefreshTiles) {
                var i = this.camera.getCameraCore(),
                r = !1;
                if (r = !!t || !this.isRenderingPaused() && (!i.equals(this.lastRefreshCameraCore) && e - this.lastRefreshTimestamp >= this.REFRESH_INTERVAL), this.tiledLayer.updateSubLayerCount(), r && (this.realRefreshCount++, this.lastRefreshTimestamp = e, this.lastRefreshCameraCore = i, this.tiledLayer.refresh()), this.tiledLayer.updateTileVisibility(), !this.isRenderingPaused()) {
                    var o = !(!this.labelLayer || !this.labelLayer.visible),
                    n = !(!this.trafficLayer || !this.trafficLayer.visible);
                    if (o || n) {
                        var a = this.tiledLayer.getLastLevelVisibleTileGrids();
                        o && this.labelLayer.updateTiles(this.getLevel(), a),
                        n && this.trafficLayer.updateTiles(this.getLevel(), a)
                    }
                }
            }
        },
        t.prototype.getExtent = function() {
            var t = [],
            e = this.tiledLayer.getExtent();
            e && t.push(e);
            var i = this.camera.getExtent();
            return i && t.push(i),
            0 === t.length ? null: 1 === t.length ? t[0] : g.
        default.intersect(t)
        },
        t.prototype.pick = function(t, e) {
            var i = this.camera.getPickInfoByCanvas(t, e, !1),
            r = i.line;
            this.scene.pickByWorldLine(r)
        },
        t.prototype.test = function() {
            this.debugStopRefreshTiles = !0,
            this.labelLayer.hideAllTiles(),
            this.tiledLayer.children.forEach(function(t) {
                return t.hideAllTiles()
            });
            var t = this.tiledLayer.children[this.tiledLayer.children.length - 1];
            return t.visible = !0,
            t.children[0].visible = !0,
            t
        },
        t
    } ();
    b.globe = null,
    e.
default = b
},
function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(5),
    o = {},
    n = function() {
        function t() {}
        return t.isNumber = function(t) {
            return "number" == typeof t
        },
        t.isInteger = function(t) {
            var e = !1,
            i = this.isNumber(t);
            if (i) {
                var r = parseFloat(t),
                o = parseInt(t);
                e = r === o
            } else e = !1;
            return e
        },
        t.isPositive = function(t) {
            return t > 0
        },
        t.isNegative = function(t) {
            return t < 0
        },
        t.isNonNegative = function(t) {
            return t >= 0
        },
        t.isNonPositive = function(t) {
            return t <= 0
        },
        t.isPositiveInteger = function(t) {
            return this.isPositive(t) && this.isInteger(t)
        },
        t.isNonNegativeInteger = function(t) {
            return this.isNonNegative(t) && this.isInteger(t)
        },
        t.isArray = function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        },
        t.isFunction = function(t) {
            return "function" == typeof t
        },
        t.forEach = function(t, e) {
            return this.isFunction(t.forEach) ? t.forEach(e) : Array.prototype.forEach.call(t, e)
        },
        t.filter = function(t, e) {
            return this.isFunction(t.filter) ? t.filter(e) : Array.prototype.filter.call(t, e)
        },
        t.map = function(t, e) {
            return this.isFunction(t.map) ? t.map(e) : Array.prototype.map.call(t, e)
        },
        t.some = function(t, e) {
            return this.isFunction(t.some) ? t.some(e) : Array.prototype.some.call(t, e)
        },
        t.every = function(t, e) {
            return this.isFunction(t.every) ? t.every(e) : Array.prototype.every.call(t, e)
        },
        t.filterRepeatArray = function(t) {
            for (var e = t.map(function(t) {
                return t
            }), i = []; e.length > 0;) {
                var r = e[0],
                o = i.some(function(t) {
                    return r.equals(t)
                });
                o || i.push(r),
                e.splice(0, 1)
            }
            return i
        },
        t.isMobile = function() {
            return !! window.navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|IEMobile|Opera Mini/i)
        },
        t.isWindows = function() {
            var t = window.navigator.platform;
            return 0 === t.toLowerCase().indexOf("win")
        },
        t.wrapUrlWithProxy = function(t) {
            return r.
        default.proxy ? r.
        default.proxy + "?" + t: t
        },
        t.subscribe = function(t, e) {
            o[t] || (o[t] = []),
            o[t].push(e)
        },
        t.publish = function(t, e) {
            var i = o[t];
            i && i.length > 0 && i.forEach(function(t) {
                t(e)
            })
        },
        t
    } ();
    e.
default = n
},
function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(5),
    o = function() {
        function t(t, e, i) {
            this.canvas = t,
            this.onBeforeRender = e,
            this.onAfterRender = i,
            this.scene = null,
            this.camera = null,
            this.renderingPaused = !0,
            this.gl = null,
            this.gl = this._getWebGLContext(this.canvas),
            r.
        default.gl = this.gl,
            this.gl || console.debug("浏览器不支持WebGL或将WebGL禁用!");
            var o = this.gl;
            o.clear(o.COLOR_BUFFER_BIT | o.DEPTH_BUFFER_BIT),
            o.clearColor(0, 0, 0, 1),
            o.enable(o.DEPTH_TEST),
            o.depthFunc(o.LEQUAL),
            o.depthMask(!0),
            o.enable(o.CULL_FACE),
            o.frontFace(o.CCW),
            o.cullFace(o.BACK)
        }
        return t.prototype._getWebGLContext = function(t) {
            var e = null;
            try {
                for (var i = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], r = 0; r < i.length && !(e = t.getContext(i[r], {
                    antialias: !0
                })); r++);
            } catch(t) {
                console.error(t)
            }
            return e
        },
        t.prototype.render = function(t, e) {
            var i = this.gl;
            i.viewport(0, 0, this.canvas.width, this.canvas.height),
            i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT),
            i.clearColor(0, 0, 0, 1);
            try {
                e.update()
            } catch(t) {
                console.error(t)
            }
            try {
                this.onBeforeRender && this.onBeforeRender(this)
            } catch(t) {
                console.error(t)
            }
            try {
                this.renderingPaused || t.draw(e)
            } catch(t) {
                console.error(t)
            }
            try {
                this.onAfterRender && this.onAfterRender(this)
            } catch(t) {
                console.error(t)
            }
        },
        t.prototype.setScene = function(t) {
            this.scene = t
        },
        t.prototype.setCamera = function(t) {
            this.camera = t
        },
        t.prototype._tick = function() {
            this.scene && this.camera && this.render(this.scene, this.camera),
            window.requestAnimationFrame(this._tick.bind(this))
        },
        t.prototype.isRenderingPaused = function() {
            return this.renderingPaused
        },
        t.prototype.pauseRendering = function() {
            this.renderingPaused = !0
        },
        t.prototype.resumeRendering = function() {
            this.renderingPaused = !1,
            this._tick()
        },
        t
    } ();
    e.
default = o
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(5),
    n = i(7),
    a = i(10),
    s = i(11),
    l = i(12),
    u = i(13),
    c = i(14),
    h = i(16),
    f = i(17),
    p = i(18),
    d = i(19),
    v = function() {
        function t(t, e, i, r, o, n) {
            this.fov = t,
            this.aspect = e,
            this.near = i,
            this.far = r,
            this.floatLevel = o,
            this.matrix = n
        }
        return t.prototype.getFov = function() {
            return this.fov
        },
        t.prototype.getAspect = function() {
            return this.aspect
        },
        t.prototype.getNear = function() {
            return this.near
        },
        t.prototype.getFar = function() {
            return this.far
        },
        t.prototype.getFloatLevel = function() {
            return this.floatLevel
        },
        t.prototype.getMatrix = function() {
            return this.matrix
        },
        t.prototype.equals = function(t) {
            return !! t && (this.fov === t.getFov() && this.aspect === t.getAspect() && this.near === t.getNear() && this.far === t.getFar() && this.floatLevel === t.getFloatLevel() && this.matrix.equals(t.getMatrix()))
        },
        t
    } ();
    e.CameraCore = v;
    var g = {}; !
    function() {
        for (var t = 0; t <= o.
    default.MAX_LEVEL; t++) g[t] = o.
    default.MAX_REAL_RESOLUTION / Math.pow(2, t)
    } ();
    var y = function(t) {
        function e(e, i, r, o, n, s, l, u) {
            void 0 === i && (i = 45),
            void 0 === r && (r = 1),
            void 0 === o && (o = 1),
            void 0 === n && (n = 100),
            void 0 === s && (s = 3),
            void 0 === l && (l = [0, 0]),
            void 0 === u && (u = Math.pow(2, .375295));
            var c = t.call(this) || this;
            return c.canvas = e,
            c.fov = i,
            c.aspect = r,
            c.near = o,
            c.far = n,
            c.animationDuration = 200,
            c.nearFactor = .6,
            c.maxPitch = 40,
            c.isZeroPitch = !0,
            c.level = -1,
            c.floatLevel = -2,
            c.lastFloatLevel = -3,
            c.lastFov = -1,
            c.lastAspect = -1,
            c.lastNear = -1,
            c.lastFar = -1,
            c.lonlatsOfBoundary = null,
            c.animating = !1,
            c.eventEmitter = null,
            u > 0 || (u = Math.pow(2, .375295)),
            c.resolutionFactor1 = u,
            c.resolutionFactor2 = 2 * c.resolutionFactor1,
            c.eventEmitter = new a.EventEmitter,
            c.lonlatsOfBoundary = [],
            c.initFov = c.fov,
            c.lastMatrix = new f.
        default,
            c.lastMatrix.setUniqueValue(0),
            c.projMatrix = new f.
        default,
            c._rawSetPerspectiveMatrix(c.fov, c.aspect, c.near, c.far),
            c._initCameraPosition(s, l[0], l[1]),
            c.update(!0),
            c
        }
        return r(e, t),
        e.prototype.getExtent = function() {
            var t = null;
            if (this.isEarthFullOverlapScreen()) {
                var e = [],
                i = [];
                this.lonlatsOfBoundary.forEach(function(t) {
                    e.push(t[0]),
                    i.push(t[1])
                });
                var r = Math.min.apply(Math, e),
                o = Math.max.apply(Math, e),
                n = Math.min.apply(Math, i),
                a = Math.max.apply(Math, i);
                t = new d.
            default(r, n, o, a)
            }
            return t
        },
        e.prototype.getEventEmitter = function() {
            return this.eventEmitter
        },
        e.prototype.isEarthFullOverlapScreen = function() {
            return 8 === this.lonlatsOfBoundary.length
        },
        e.prototype.getTileGridsOfBoundary = function(t, e) {
            var i = this.lonlatsOfBoundary.map(function(e) {
                return h.
            default.getTileGridByGeo(e[0], e[1], t)
            });
            return e ? n.
        default.filterRepeatArray(i):
            i
        },
        e.prototype.toJson = function() {
            function t(t) {
                return t ? t.toJson() : null
            }
            var e = {
                matrix: t(this.matrix),
                isZeroPitch: this.isZeroPitch,
                level: this.level,
                floatLevel: this.floatLevel,
                lastFloatLevel: this.lastFloatLevel,
                lastMatrix: t(this.lastMatrix),
                lastFov: this.lastFov,
                lastAspect: this.lastAspect,
                lastNear: this.lastNear,
                lastFar: this.lastFar,
                viewMatrix: t(this.viewMatrix),
                projMatrix: t(this.projMatrix),
                projViewMatrix: t(this.projViewMatrix),
                matrixForDraw: t(this.matrixForDraw),
                viewMatrixForDraw: t(this.viewMatrixForDraw),
                projMatrixForDraw: t(this.projMatrixForDraw),
                projViewMatrixForDraw: t(this.projViewMatrixForDraw),
                animating: this.animating
            };
            return e
        },
        e.prototype.toJsonString = function() {
            return JSON.stringify(this.toJson())
        },
        e.prototype.fromJson = function(t) {
            this.matrix = f.
        default.fromJson(t.matrix),
            this.isZeroPitch = t.isZeroPitch,
            this.level = t.level,
            this.floatLevel = t.floatLevel,
            this.lastFloatLevel = t.lastFloatLevel,
            this.lastMatrix = f.
        default.fromJson(t.lastMatrix),
            this.lastFov = t.lastFov,
            this.lastAspect = t.lastAspect,
            this.lastNear = t.lastNear,
            this.lastFar = t.lastFar,
            this.viewMatrix = f.
        default.fromJson(t.viewMatrix),
            this.projMatrix = f.
        default.fromJson(t.projMatrix),
            this.projViewMatrix = f.
        default.fromJson(t.projViewMatrix),
            this.matrixForDraw = f.
        default.fromJson(t.matrixForDraw),
            this.viewMatrixForDraw = f.
        default.fromJson(t.viewMatrixForDraw),
            this.projMatrixForDraw = f.
        default.fromJson(t.projMatrixForDraw),
            this.projViewMatrixForDraw = f.
        default.fromJson(t.projViewMatrixForDraw),
            this.animating = t.animating,
            this.update(!0)
        },
        e.prototype.fromJsonString = function(t) {
            this.fromJson(JSON.parse(t))
        },
        e.prototype._setPerspectiveMatrix = function(t, e, i, r) {
            this._rawSetPerspectiveMatrix(t, e, i, r),
            this._updateFar()
        },
        e.prototype._rawSetPerspectiveMatrix = function(t, e, i, r, o) {
            void 0 === o && (o = this.projMatrix),
            this.projMatrix === o && (this.fov = t, this.aspect = e, this.near = i, this.far = r);
            var n = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            a = t * Math.PI / 180 / 2,
            s = 1 / Math.tan(a),
            l = 1 / (i - r);
            n[0] = s / e,
            n[5] = s,
            n[10] = (r + i) * l,
            n[11] = -1,
            n[14] = 2 * i * r * l,
            n[15] = 0,
            o.setElements(n[0], n[1], n[2], n[3], n[4], n[5], n[6], n[7], n[8], n[9], n[10], n[11], n[12], n[13], n[14], n[15])
        },
        e.prototype._setFov = function(t) {
            if (! (t > 0)) throw "invalid fov:" + t;
            this._setPerspectiveMatrix(t, this.aspect, this.near, this.far)
        },
        e.prototype.setAspect = function(t) {
            if (! (t > 0)) throw "invalid aspect:" + t;
            this._setPerspectiveMatrix(this.fov, t, this.near, this.far),
            this.setLevel(this.level, !0)
        },
        e.prototype._updateFar = function() {},
        e.prototype._getMinimalFar = function(t) {
            var e = u.
        default.fromVertice(t).getLength(),
            i = Math.sqrt(e * e - o.
        default.EARTH_RADIUS * o.
        default.EARTH_RADIUS);
            return i *= 1.05
        },
        e.prototype.update = function(t) {
            void 0 === t && (t = !1);
            var e = this._updateCore(t);
            return e && this._updateTileGridsOfBoundary(),
            e
        },
        e.prototype._updateCore = function(t) {
            void 0 === t && (t = !1);
            var e = t || this._isNeedUpdate();
            return e && (this._normalUpdate(), this._updateProjViewMatrixForDraw()),
            this.lastFov = this.fov,
            this.lastAspect = this.aspect,
            this.lastNear = this.near,
            this.lastFar = this.far,
            this.lastFloatLevel = this.floatLevel,
            this.lastMatrix.setMatrixByOther(this.matrix),
            e
        },
        e.prototype._updateTileGridsOfBoundary = function() {
            var t = this,
            e = [],
            i = [[ - 1, 1], [ - 1, 0], [ - 1, -1], [1, 1], [1, 0], [1, -1], [0, 1], [0, -1]];
            i.forEach(function(i) {
                var r = t._getPickLonLatByNDC(i[0], i[1]);
                r && r.length > 0 && e.push(r)
            }),
            this.lonlatsOfBoundary = e
        },
        e.prototype.getCameraCore = function() {
            return new v(this.fov, this.aspect, this.near, this.far, this.floatLevel, this.matrix.clone())
        },
        e.prototype._isNeedUpdate = function() {
            return this.fov !== this.lastFov || this.aspect !== this.lastAspect || this.near !== this.lastNear || this.far !== this.lastFar || this.floatLevel !== this.lastFloatLevel || !this.matrix.equals(this.lastMatrix)
        },
        e.prototype.getProjViewMatrixForDraw = function() {
            return this.projViewMatrixForDraw
        },
        e.prototype._normalUpdate = function() {
            this.viewMatrix = this.matrix.getInverseMatrix(),
            this._updateFar(),
            this.projViewMatrix = this.projMatrix.multiplyMatrix(this.viewMatrix)
        },
        e.prototype._updateProjViewMatrixForDraw = function() {
            this.matrixForDraw = this.matrix.clone();
            var t = this._updatePositionAndFov(this.matrixForDraw),
            e = this.aspect,
            i = this.near,
            r = this.far;
            this.projMatrixForDraw = new f.
        default,
            this._rawSetPerspectiveMatrix(t, e, i, r, this.projMatrixForDraw),
            this.viewMatrixForDraw = this.matrixForDraw.getInverseMatrix(),
            this.projViewMatrixForDraw = this.projMatrixForDraw.multiplyMatrix(this.viewMatrixForDraw)
        },
        e.prototype._updatePositionAndFov = function(t) {
            var e = this.animating ? this.floatLevel: this.level,
            i = this._getSafeThresholdLevelForNear();
            if (e > i) {
                this._updatePositionByLevel(i, t);
                var r = e - i,
                o = this._calculateFovByDeltaLevel(this.initFov, r);
                return o
            }
            return this._updatePositionByLevel(e, t),
            this.initFov
        },
        e.prototype._getSafeThresholdLevelForNear = function() {
            var t = this.near * this.nearFactor,
            e = this._calculateResolutionAndBestDisplayLevelByDistance2EarthSurface(t),
            i = e[1];
            return i
        },
        e.prototype._calculateDeltaLevelByFov = function(t, e) {
            var i = s.
        default.degreeToRadian(t),
            r = i / 2,
            o = Math.tan(r),
            n = s.
        default.degreeToRadian(e),
            a = n / 2,
            l = Math.tan(a),
            u = s.
        default.log2(o / l);
            return u
        },
        e.prototype._calculateFovByDeltaLevel = function(t, e) {
            var i = s.
        default.degreeToRadian(t),
            r = i / 2,
            o = Math.tan(r),
            n = o / Math.pow(2, e),
            a = Math.atan(n),
            l = 2 * a,
            u = s.
        default.radianToDegree(l);
            return u
        },
        e.prototype.getResolution = function() {
            var t = this.measureXYResolutionAndBestDisplayLevel(),
            e = t.resolutionX,
            i = (t.bestDisplayLevelFloatX, t.resolutionY);
            t.bestDisplayLevelFloatY;
            return (e + i) / 2 / this.resolutionFactor1
        },
        e.prototype.getResolutionInWorld = function() {
            return this.getResolution() / o.
        default.SCALE_FACTOR
        },
        e.prototype.getResolutionInWorld2 = function() {
            return g.hasOwnProperty(this.level) ? g[this.level] : o.
        default.MAX_REAL_RESOLUTION / Math.pow(2, this.level)
        },
        e.prototype.measureXYResolutionAndBestDisplayLevel = function() {
            var t = this.matrix.getPosition(),
            e = u.
        default.fromVertice(t),
            i = new c.
        default(t, e),
            r = this._getPickCartesianCoordInEarthByLine(i),
            n = r[0],
            a = this._convertVerticeFromWorldToNDC(n),
            l = s.
        default.convertPointFromNdcToCanvas(this.canvas.width, this.canvas.height, a.x, a.y),
            h = l[0],
            f = l[1],
            p = 10,
            d = this.getPickCartesianCoordInEarthByCanvas(h - p, f),
            v = u.
        default.fromVertice(d[0]),
            g = this.getPickCartesianCoordInEarthByCanvas(h + p, f),
            y = u.
        default.fromVertice(g[0]),
            m = u.
        default.getRadianOfTwoVectors(v, y),
            _ = m * o.
        default.EARTH_RADIUS / (2 * p) * this.resolutionFactor1,
            w = this._calculateLevelByResolution(_),
            b = this.getPickCartesianCoordInEarthByCanvas(h, f + p),
            L = u.
        default.fromVertice(b[0]),
            T = this.getPickCartesianCoordInEarthByCanvas(h, f - p),
            M = u.
        default.fromVertice(T[0]),
            x = u.
        default.getRadianOfTwoVectors(L, M),
            P = x * o.
        default.EARTH_RADIUS / (2 * p) * this.resolutionFactor1,
            E = this._calculateLevelByResolution(P);
            return {
                resolutionX: _,
                bestDisplayLevelFloatX: w,
                resolutionY: P,
                bestDisplayLevelFloatY: E
            }
        },
        e.prototype.calculateCurrentResolutionAndBestDisplayLevel = function() {
            var t = this.getDistance2EarthOrigin();
            return this._calculateResolutionAndBestDisplayLevelByDistance2EarthOrigin(t)
        },
        e.prototype._calculateResolutionAndBestDisplayLevelByDistance2EarthOrigin = function(t) {
            var e = s.
        default.degreeToRadian(this.fov / 2),
            i = Math.atan(2 / this.canvas.height * Math.tan(e)),
            r = Math.asin(t * Math.sin(i) / o.
        default.EARTH_RADIUS),
            n = r - i,
            a = n * o.
        default.EARTH_RADIUS * this.resolutionFactor2,
            l = this._calculateLevelByResolution(a);
            return [a, l]
        },
        e.prototype._calculateResolutionAndBestDisplayLevelByDistance2EarthSurface = function(t) {
            var e = t + o.
        default.EARTH_RADIUS;
            return this._calculateResolutionAndBestDisplayLevelByDistance2EarthOrigin(e)
        },
        e.prototype._calculateDistance2EarthSurfaceByBestDisplayLevel = function(t) {
            return this._calculateDistance2EarthOriginByBestDisplayLevel(t) - o.
        default.EARTH_RADIUS
        },
        e.prototype._calculateDistance2EarthOriginByBestDisplayLevel = function(t) {
            var e = this._calculateResolutionByLevel(t);
            return this._calculateDistance2EarthOriginByResolution(e)
        },
        e.prototype._calculateDistance2EarthOriginByResolution = function(t) {
            t /= this.resolutionFactor2;
            var e = s.
        default.degreeToRadian(this.fov / 2),
            i = Math.atan(2 / this.canvas.height * Math.tan(e)),
            r = t / o.
        default.EARTH_RADIUS,
            n = i + r,
            a = o.
        default.EARTH_RADIUS * Math.sin(n) / Math.sin(i);
            return a
        },
        e.prototype._calculateLevelByResolution = function(t) {
            var e = o.
        default.MAX_RESOLUTION / t,
            i = s.
        default.log2(e);
            return i
        },
        e.prototype._calculateResolutionByLevel = function(t) {
            return o.
        default.MAX_RESOLUTION / Math.pow(2, t)
        },
        e.prototype.getVertice = function() {
            var t = u.
        default.fromVertice(this.getPosition());
            t.setLength(o.
        default.EARTH_RADIUS);
            var e = t.getVertice();
            return e
        },
        e.prototype.getLonlat = function() {
            var t = this.getVertice(),
            e = s.
        default.cartesianCoordToGeographic(t);
            return e
        },
        e.prototype.getLevel = function() {
            return this.level
        },
        e.prototype.setLevel = function(t, e) {
            if (void 0 === e && (e = !1), !n.
        default.isNonNegativeInteger(t)) throw "invalid level:" + t;
            t < o.
        default.MIN_LEVEL && (t = o.
        default.MIN_LEVEL),
            t > o.
        default.MAX_LEVEL && (t = o.
        default.MAX_LEVEL);
            var i = this.level,
            r = t !== this.level; (r || e) && (this._updatePositionByLevel(t, this.matrix), this.level = t, this.floatLevel = t),
            r && n.
        default.publish("level-change", {
                oldLevel: i,
                newLevel: this.level
            })
        },
        e.prototype._initCameraPosition = function(t, e, i) {
            var r = this._calculateDistance2EarthOriginByBestDisplayLevel(t),
            o = s.
        default.geographicToCartesianCoord(e, i, r),
            n = new l.
        default(0, 0, 0),
            a = this.getLightDirection().getOpposite();
            a.setLength(r),
            this._look(o, n),
            this.setLevel(t)
        },
        e.prototype._updatePositionByLevel = function(t, e) {
            var i = this._getDirectionIntersectPointWithEarth(e);
            if (0 === i.length) throw "no intersect";
            var r = i[0],
            o = this._calculateDistance2EarthSurfaceByBestDisplayLevel(t),
            n = e.getVectorZ();
            n.setLength(o);
            var a = u.
        default.verticePlusVector(r, n);
            e.setPosition(a)
        },
        e.prototype.setDeltaPitch = function(t) {
            if (! (this.level < o.
        default.MIN_PITCH_LEVEL) && this.isEarthFullOverlapScreen()) {
                var e = this.getPitch(),
                i = e + t;
                if (! (i > this.maxPitch) && (i < 0 && (i = 0), t = i - e, 0 !== t)) {
                    var r = this._getDirectionIntersectPointWithEarth(this.matrix);
                    if (0 === r.length) throw "no intersects";
                    var n = r[0],
                    a = s.
                default.degreeToRadian(t),
                    l = this.matrix.clone();
                    l.setPosition(n),
                    l.localRotateX(a),
                    this._updatePositionByLevel(this.level, l),
                    this.isZeroPitch = 0 === i,
                    this.matrix = l
                }
            }
        },
        e.prototype.getPitch = function() {
            if (this.isZeroPitch) return 0;
            var t = this._getDirectionIntersectPointWithEarth(this.matrix);
            if (0 === t.length) throw "no intersects";
            var e = t[0],
            i = u.
        default.fromVertice(e),
            r = i.getLength(),
            o = u.
        default.verticeMinusVertice(this.getPosition(), e),
            n = o.getLength(),
            a = i.dot(o) / (r * n),
            l = s.
        default.acosSafely(a),
            c = i.cross(o),
            h = this.matrix.getVectorX();
            l = c.dot(h) ? Math.abs(l) : -Math.abs(l);
            var f = s.
        default.radianToDegree(l);
            if (f >= 90) throw "Invalid pitch: " + f;
            return f
        },
        e.prototype.getPickInfoByCanvas = function(t, e, i) {
            void 0 === i && (i = !1);
            var r = {
                line: null,
                vertices: []
            };
            this._updateCore();
            var o = this.matrix,
            n = this.viewMatrix,
            a = this.projMatrix,
            s = this.projViewMatrix;
            this.matrix = this.matrixForDraw,
            this.viewMatrix = this.viewMatrixForDraw,
            this.projMatrix = this.projMatrixForDraw,
            this.projViewMatrix = this.projViewMatrixForDraw;
            var l = this._getPickDirectionByCanvas(t, e),
            u = this.getPosition();
            return r.line = new c.
        default(u, l),
            i && (r.vertices = this._getPickCartesianCoordInEarthByLine(r.line)),
            this.matrix = o,
            this.viewMatrix = n,
            this.projMatrix = a,
            this.projViewMatrix = s,
            r
        },
        e.prototype.getPickCartesianCoordInEarthByCanvas = function(t, e) {
            var i = this.getPickInfoByCanvas(t, e, !0);
            return i.vertices
        },
        e.prototype.getLightDirection = function() {
            var t = this.matrix.getVectorZ(),
            e = new u.
        default( - t.x, -t.y, -t.z);
            return e.normalize(),
            e
        },
        e.prototype.getDistance2EarthSurface = function() {
            var t = this.getPosition(),
            e = u.
        default.fromVertice(t).getLength() - o.
        default.EARTH_RADIUS;
            return e
        },
        e.prototype.getDistance2EarthOrigin = function() {
            var t = this.getPosition();
            return u.
        default.fromVertice(t).getLength()
        },
        e.prototype.isAnimating = function() {
            return this.animating
        },
        e.prototype.centerTo = function(t, e, i) {
            if (void 0 === i && (i = this.getLevel()), i !== this.getLevel()) {
                var r = this._safelyGetNewPositonByLevel(i),
                o = u.
            default.fromVertice(r).getLength();
                this._setPositionByLonLatDistance(t, e, o)
            } else this._setPositionByLonLatDistance(t, e);
            this.setLevel(i, !0)
        },
        e.prototype.animateTo = function(t, e, i, r) {
            var o = this;
            void 0 === i && (i = this.getLevel()),
            void 0 === r && (r = 1e3);
            var n = new Promise(function(n, a) {
                if (o.isAnimating()) return void a("be animating");
                var s = o.getLonlat(),
                l = s[0],
                c = s[1],
                h = 1e3 / 60,
                f = Math.floor(r / h),
                p = -1,
                d = (t - l) / f,
                v = (e - c) / f,
                g = 0,
                y = 0;
                if (i !== o.level) {
                    g = (i - o.level) / f;
                    var m = o.getDistance2EarthOrigin(),
                    _ = o._safelyGetNewPositonByLevel(i),
                    w = u.
                default.fromVertice(_).getLength();
                    y = (w - m) / f
                }
                o.animating = !0;
                var b = function(a) {
                    p < 0 && (p = a);
                    var s = a - p;
                    s >= r ? (o.animating = !1, o.floatLevel = i, o.centerTo(t, e, i), n()) : (o.floatLevel += g, o._setPositionByDeltaLonLatDistance(d, v, y), requestAnimationFrame(b))
                };
                requestAnimationFrame(b)
            });
            return n
        },
        e.prototype.animateToLevel = function(t, e) {
            var i = this;
            if (!this.isAnimating()) {
                if (!n.
            default.isNonNegativeInteger(t)) throw "invalid level:" + t;
                var r = this._safelyGetNewPositonByLevel(t),
                o = this.getPosition(),
                a = this.animationDuration,
                s = 1e3 / 60,
                u = Math.floor(a / s),
                c = (r.x - o.x) / u,
                h = (r.y - o.y) / u,
                f = (r.z - o.z) / u,
                p = (t - this.level) / u,
                d = -1;
                this.floatLevel = this.level,
                this.animating = !0;
                var v = function(r) {
                    d < 0 && (d = r);
                    var o = r - d;
                    if (o >= a) i.animating = !1,
                    i.floatLevel = t,
                    i.setLevel(t),
                    e && e();
                    else {
                        i.floatLevel += p;
                        var n = i.getPosition();
                        i.setPosition(new l.
                    default(n.x + c, n.y + h, n.z + f)),
                        requestAnimationFrame(v)
                    }
                };
                requestAnimationFrame(v)
            }
        },
        e.prototype.setExtent = function(t) {
            if (t) {
                var e = this._calculateLonLatLevelByExtent(t),
                i = e[0],
                r = e[1],
                o = e[2];
                this.centerTo(i, r, o)
            }
        },
        e.prototype.animateToExtent = function(t, e) {
            void 0 === e && (e = 1e3);
            var i = this._calculateLonLatLevelByExtent(t),
            r = i[0],
            o = i[1],
            n = i[2];
            return this.animateTo(r, o, n, e)
        },
        e.prototype._safelyGetNewPositonByLevel = function(t) {
            var e = this.matrix.clone();
            this._updatePositionByLevel(t, e);
            var i = e.getPosition();
            return i
        },
        e.prototype._setPositionByLonLatDistance = function(t, e, i) {
            var r = this.getLonlat(),
            o = r[0],
            n = r[1],
            a = t - o,
            s = e - n;
            this._setPositionByDeltaLonLatDistance(a, s),
            i > 0 && this._setPositionByDistanceFromOrigin2Camera(i)
        },
        e.prototype._setPositionByDeltaLonLatDistance = function(t, e, i) {
            var r = s.
        default.degreeToRadian(t),
            o = s.
        default.degreeToRadian(e);
            this.worldRotateY(r);
            var n = u.
        default.fromVertice(this.getPosition()),
            a = new u.
        default(0, 1, 0),
            l = n.cross(a);
            if (this.worldRotateByVector(o, l), i > 0 || i < 0) {
                var c = u.
            default.fromVertice(this.getPosition()),
                h = c.getLength() + i;
                c.setLength(h);
                var f = c.getVertice();
                this.setPosition(f)
            }
        },
        e.prototype._setPositionByDistanceFromOrigin2Camera = function(t) {
            var e = u.
        default.fromVertice(this.getPosition());
            e.setLength(t);
            var i = e.getVertice();
            this.setPosition(i)
        },
        e.prototype._safelyGetValidLevel = function(t) {
            return t > o.
        default.MAX_LEVEL ? t = o.
        default.MAX_LEVEL:
            t < o.
        default.MIN_LEVEL && (t = o.
        default.MIN_LEVEL),
            t
        },
        e.prototype._calculateLonLatLevelByExtent = function(t) {
            var e = (t.getMinLon() + t.getMaxLon()) / 2,
            i = (t.getMinLat() + t.getMaxLat()) / 2,
            r = t.getMaxLon() - t.getMinLon(),
            n = s.
        default.degreeToRadian(r),
            a = o.
        default.EARTH_RADIUS * n,
            l = a / this.canvas.width,
            u = this._calculateLevelByResolution(l),
            c = Math.floor(u);
            return c = this._safelyGetValidLevel(c),
            [e, i, c]
        },
        e.prototype._look = function(t, e, i) {
            void 0 === i && (i = new u.
        default(0, 1, 0));
            var r = t.clone(),
            o = e.clone(),
            n = i.clone(),
            a = new u.
        default(r.x - o.x, r.y - o.y, r.z - o.z);
            a.normalize();
            var s = n.cross(a).normalize(),
            l = a.cross(s).normalize();
            this.matrix.setVectorX(s),
            this.matrix.setVectorY(l),
            this.matrix.setVectorZ(a),
            this.matrix.setPosition(r),
            this.matrix.setLastRowDefault(),
            this._updateFar()
        },
        e.prototype._lookAt = function(t, e) {
            var i = t.clone(),
            r = this.getPosition();
            this._look(r, i, e)
        },
        e.prototype._getPickDirectionByCanvas = function(t, e) {
            var i = s.
        default.convertPointFromCanvasToNDC(this.canvas.width, this.canvas.height, t, e),
            r = this._getPickDirectionByNDC(i[0], i[1]);
            return r
        },
        e.prototype._getDirectionIntersectPointWithEarth = function(t) {
            var e = t.getVectorZ().getOpposite(),
            i = t.getPosition(),
            r = new c.
        default(i, e),
            o = this._getPickCartesianCoordInEarthByLine(r);
            return o
        },
        e.prototype._getPickDirectionByNDC = function(t, e) {
            var i = new l.
        default(t, e, .499),
            r = this._convertVerticeFromNdcToWorld(i),
            o = this.getPosition(),
            n = u.
        default.verticeMinusVertice(r, o);
            return n.normalize(),
            n
        },
        e.prototype._getPickCartesianCoordInEarthByLine = function(t) {
            var e = [],
            i = s.
        default.getLineIntersectPointWithEarth(t);
            if (0 === i.length) e = [];
            else if (1 == i.length) e = i;
            else if (2 == i.length) {
                var r = i[0],
                o = i[1],
                n = this.getPosition(),
                a = s.
            default.getLengthFromVerticeToVertice(n, r),
                l = s.
            default.getLengthFromVerticeToVertice(n, o);
                e = a <= l ? [r, o] : [o, r]
            }
            return e
        },
        e.prototype._getPickLonLatByNDC = function(t, e) {
            var i = null,
            r = this._getPickCartesianCoordInEarthByNDC(t, e);
            return r.length > 0 && (i = s.
        default.cartesianCoordToGeographic(r[0])),
            i
        },
        e.prototype._getPickCartesianCoordInEarthByNDC = function(t, e) {
            var i = this._getPickDirectionByNDC(t, e),
            r = this.getPosition(),
            o = new c.
        default(r, i),
            n = this._getPickCartesianCoordInEarthByLine(o);
            return n
        },
        e.prototype._getPlanXOZ = function() {
            var t = this.getPosition(),
            e = this.getLightDirection(),
            i = s.
        default.getCrossPlaneByLine(t, e);
            return i
        },
        e.prototype._convertVerticeFromWorldToNDC = function(t) {
            var e = [t.x, t.y, t.z, 1],
            i = this.projViewMatrix.multiplyColumn(e),
            r = i[3],
            o = [];
            o[0] = i[0] / r,
            o[1] = i[1] / r,
            o[2] = i[2] / r,
            o[3] = 1;
            var n = new l.
        default(o[0], o[1], o[2]);
            return n
        },
        e.prototype._convertVerticeFromNdcToWorld = function(t) {
            var e = [t.x, t.y, t.z, 1],
            i = this.projMatrix.getInverseMatrix(),
            r = i.multiplyColumn(e),
            o = r[0] / r[3],
            n = r[1] / r[3],
            a = r[2] / r[3],
            s = 1,
            u = [o, n, a, s],
            c = this.matrix.multiplyColumn(u),
            h = new l.
        default(c[0], c[1], c[2]);
            return h
        },
        e.prototype._convertVerticeFromCameraToWorld = function(t) {
            var e = t.clone(),
            i = [e.x, e.y, e.z, 1],
            r = this.matrix.multiplyColumn(i),
            o = new l.
        default(r[0], r[1], r[2]);
            return o
        },
        e.prototype._convertVectorFromCameraToWorld = function(t) {
            var e = t.clone(),
            i = e.getVertice(),
            r = this._convertVerticeFromCameraToWorld(i),
            o = this.getPosition(),
            n = u.
        default.verticeMinusVertice(r, o);
            return n.normalize(),
            n
        },
        e.prototype._isWorldVerticeVisibleInCanvas = function(t, e) {
            void 0 === e && (e = {});
            var i = "number" == typeof e.threshold ? Math.abs(e.threshold) : 1,
            r = this.getPosition(),
            o = u.
        default.verticeMinusVertice(t, r),
            n = new c.
        default(r, o),
            a = this._getPickCartesianCoordInEarthByLine(n);
            if (a.length > 0) {
                var h = a[0],
                f = s.
            default.getLengthFromVerticeToVertice(r, t),
                p = s.
            default.getLengthFromVerticeToVertice(r, h);
                if (f < p + 5) {
                    e.verticeInNDC instanceof l.
                default || (e.verticeInNDC = this._convertVerticeFromWorldToNDC(t));
                    var d = e.verticeInNDC.x >= -1 && e.verticeInNDC.x <= 1 && e.verticeInNDC.y >= -i && e.verticeInNDC.y <= 1;
                    return d
                }
            }
            return ! 1
        },
        e.prototype._isGeoVisibleInCanvas = function(t, e, i) {
            var r = s.
        default.geographicToCartesianCoord(t, e),
            o = this._isWorldVerticeVisibleInCanvas(r, i);
            return o
        },
        e.prototype.getVisibleTilesByLevel = function(t, e) {
            function i(t) {
                return !! (t.area >= 5e3 && t.clockwise && t.visibleCount >= 1)
            }
            function r(r, o) {
                var s = [],
                l = new h.
            default(t, r, o),
                u = this._getTileVisibleInfo(l.level, l.row, l.column, e),
                c = i(u);
                if (c) {
                    l.visibleInfo = u,
                    s.push(l);
                    for (var f, p = 0,
                    d = o; p < n && (p++, l = h.
                default.getTileGridByBrother(t, r, d, h.TileGridPosition.LEFT, a), d = l.column, u = this._getTileVisibleInfo(l.level, l.row, l.column, e), f = i(u));) l.visibleInfo = u,
                    s.push(l);
                    for (var v = 0,
                    g = o; v < n && (v++, l = h.
                default.getTileGridByBrother(t, r, g, h.TileGridPosition.RIGHT, a), g = l.column, u = this._getTileVisibleInfo(l.level, l.row, l.column, e), f = i(u));) l.visibleInfo = u,
                    s.push(l)
                }
                return s
            }
            if (void 0 === e && (e = {}), !(t >= 0)) throw "invalid level";
            var o = [],
            n = Math.min(10, Math.pow(2, t) - 1),
            a = {
                maxSize: Math.pow(2, t)
            },
            s = null,
            l = this._getVerticalVisibleCenterInfo();
            s = h.
        default.isValidLatitude(l.lat) ? h.
        default.getTileGridByGeo(l.lon, l.lat, t) : new h.
        default(t, 0, 0);
            var u = r.bind(this),
            c = u(s.row, s.column);
            o = o.concat(c);
            for (var f, p = 0,
            d = s.row; p < n && (p++, f = h.
        default.getTileGridByBrother(t, d, s.column, h.TileGridPosition.BOTTOM, a), d = f.row, c = u(f.row, f.column), c.length > 0);) o = o.concat(c);
            for (var v = 0,
            g = s.row; v < n && (v++, f = h.
        default.getTileGridByBrother(t, g, s.column, h.TileGridPosition.TOP, a), g = f.row, c = u(f.row, f.column), c.length > 0);) o = o.concat(c);
            return o
        },
        e.prototype._getTileVisibleInfo = function(t, e, i, r) {
            if (! (t >= 0)) throw "invalid level";
            if (! (e >= 0)) throw "invalid row";
            if (! (i >= 0)) throw "invalid column";
            var o = "number" == typeof r.threshold ? Math.abs(r.threshold) : 1;
            r.threshold = o;
            var n = {
                lb: {
                    lon: null,
                    lat: null,
                    verticeInWorld: null,
                    verticeInNDC: null,
                    visible: !1
                },
                lt: {
                    lon: null,
                    lat: null,
                    verticeInWorld: null,
                    verticeInNDC: null,
                    visible: !1
                },
                rt: {
                    lon: null,
                    lat: null,
                    verticeInWorld: null,
                    verticeInNDC: null,
                    visible: !1
                },
                rb: {
                    lon: null,
                    lat: null,
                    verticeInWorld: null,
                    verticeInNDC: null,
                    visible: !1
                },
                Egeo: null,
                visibleCount: 0,
                clockwise: !1,
                width: null,
                height: null,
                area: null
            };
            n.Egeo = s.
        default.getTileGeographicEnvelopByGrid(t, e, i);
            var a = n.Egeo.minLon,
            l = n.Egeo.maxLon,
            c = n.Egeo.minLat,
            h = n.Egeo.maxLat;
            n.lb.lon = a,
            n.lb.lat = c,
            n.lb.verticeInWorld = s.
        default.geographicToCartesianCoord(n.lb.lon, n.lb.lat),
            n.lb.verticeInNDC = this._convertVerticeFromWorldToNDC(n.lb.verticeInWorld),
            n.lb.visible = this._isWorldVerticeVisibleInCanvas(n.lb.verticeInWorld, {
                verticeInNDC: n.lb.verticeInNDC,
                threshold: o
            }),
            n.lb.visible && n.visibleCount++,
            n.lt.lon = a,
            n.lt.lat = h,
            n.lt.verticeInWorld = s.
        default.geographicToCartesianCoord(n.lt.lon, n.lt.lat),
            n.lt.verticeInNDC = this._convertVerticeFromWorldToNDC(n.lt.verticeInWorld),
            n.lt.visible = this._isWorldVerticeVisibleInCanvas(n.lt.verticeInWorld, {
                verticeInNDC: n.lt.verticeInNDC,
                threshold: o
            }),
            n.lt.visible && n.visibleCount++,
            n.rt.lon = l,
            n.rt.lat = h,
            n.rt.verticeInWorld = s.
        default.geographicToCartesianCoord(n.rt.lon, n.rt.lat),
            n.rt.verticeInNDC = this._convertVerticeFromWorldToNDC(n.rt.verticeInWorld),
            n.rt.visible = this._isWorldVerticeVisibleInCanvas(n.rt.verticeInWorld, {
                verticeInNDC: n.rt.verticeInNDC,
                threshold: o
            }),
            n.rt.visible && n.visibleCount++,
            n.rb.lon = l,
            n.rb.lat = c,
            n.rb.verticeInWorld = s.
        default.geographicToCartesianCoord(n.rb.lon, n.rb.lat),
            n.rb.verticeInNDC = this._convertVerticeFromWorldToNDC(n.rb.verticeInWorld),
            n.rb.visible = this._isWorldVerticeVisibleInCanvas(n.rb.verticeInWorld, {
                verticeInNDC: n.rb.verticeInNDC,
                threshold: o
            }),
            n.rb.visible && n.visibleCount++;
            var f = [n.lb.verticeInNDC, n.lt.verticeInNDC, n.rt.verticeInNDC, n.rb.verticeInNDC],
            p = u.
        default.verticeMinusVertice(f[3], f[0]);
            p.z = 0;
            var d = u.
        default.verticeMinusVertice(f[1], f[0]);
            d.z = 0;
            var v = p.cross(d);
            n.clockwise = v.z > 0;
            var g = Math.sqrt(Math.pow(f[1].x - f[2].x, 2) + Math.pow(f[1].y - f[2].y, 2)) * this.canvas.width / 2,
            y = Math.sqrt(Math.pow(f[0].x - f[3].x, 2) + Math.pow(f[0].y - f[3].y, 2)) * this.canvas.width / 2;
            n.width = Math.floor((g + y) / 2);
            var m = Math.sqrt(Math.pow(f[0].x - f[1].x, 2) + Math.pow(f[0].y - f[1].y, 2)) * this.canvas.height / 2,
            _ = Math.sqrt(Math.pow(f[2].x - f[3].x, 2) + Math.pow(f[2].y - f[3].y, 2)) * this.canvas.height / 2;
            return n.height = Math.floor((m + _) / 2),
            n.area = n.width * n.height,
            n
        },
        e.prototype._getVerticalVisibleCenterInfo = function() {
            var t, e = {
                ndcY: null,
                pIntersect: null,
                lon: null,
                lat: null
            };
            if (this.isZeroPitch) e.ndcY = 0;
            else {
                var i, r = 10,
                o = 2 / r,
                n = 1,
                a = -1;
                for (i = 1; i >= -1; i -= o) if (t = this._getPickCartesianCoordInEarthByNDC(0, i), t.length > 0) {
                    n = i;
                    break
                }
                for (i = -1; i <= 1; i += o) if (t = this._getPickCartesianCoordInEarthByNDC(0, i), t.length > 0) {
                    a = i;
                    break
                }
                e.ndcY = (n + a) / 2
            }
            t = this._getPickCartesianCoordInEarthByNDC(0, e.ndcY),
            e.pIntersect = t[0];
            var l = s.
        default.cartesianCoordToGeographic(e.pIntersect);
            return e.lon = l[0],
            e.lat = l[1],
            e
        },
        e
    } (p.
default);
    e.
default = y
},
function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
        function t() {
            this.events = null,
            this.events = {}
        }
        return t.prototype.emit = function(t, e) {
            var i = this.events[t];
            i && i.forEach(function(t) {
                t(e)
            })
        },
        t.prototype.on = function(t, e) {
            return this.addEventListener(t, e)
        },
        t.prototype.addEventListener = function(t, e) {
            var i = this,
            r = this.events[t];
            r ? r.push(e) : this.events[t] = [e];
            var o = {};
            return o.remove = function() {
                return i.removeEventListener(t, e)
            },
            o
        },
        t.prototype.removeEventListener = function(t, e) {
            var i = this.events[t];
            if (i) {
                var r = i.indexOf(e);
                r >= 0 && i.splice(r, 1)
            }
        },
        t.prototype.removeAllEventListeners = function(t) {
            t ? this.events[t] = [] : this.events = {}
        },
        t
    } ();
    e.EventEmitter = i
},
function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(5),
    o = i(7),
    n = i(12),
    a = i(13),
    s = i(14),
    l = i(15);
    Math.log2 || (Math.log2 = function(t) {
        return Math.log(t) / Math.log(2)
    });
    var u = {}; !
    function(t) {
        t[0] = 1;
        for (var e = 1; e <= 20; e++) t[e] = t[e - 1] << 1,
        t[ - e] = 1 / t[e]
    } (u);
    var c = 57.29577951308232,
    h = .017453292519943295,
    f = function() {
        function t() {}
        return t.getRealValueInWorld = function(t) {
            return t / r.
        default.SCALE_FACTOR
        },
        t.pow2 = function(t) {
            var e = t.toString();
            return u.hasOwnProperty(e) ? u[e] : Math.pow(2, t)
        },
        t.log2 = function(t) {
            return Math.log2(t)
        },
        t.izZero = function(t) {
            if (!o.
        default.isNumber(t)) throw "invalid value";
            return Math.abs(t) < 1e-6
        },
        t.isPowerOfTwo = function(t) {
            return 0 === (t & t - 1) && 0 !== t
        },
        t.asinSafely = function(t) {
            return t > 1 && (t = 1),
            t < -1 && (t = -1),
            Math.asin(t)
        },
        t.acosSafely = function(t) {
            return t > 1 && (t = 1),
            t < -1 && (t = -1),
            Math.acos(t)
        },
        t.numerationSystemTo10 = function(t, e) {
            for (var i = 0,
            r = 0; r < e.length; r++) {
                var o = e.length - 1 - r,
                n = parseInt(e[r]);
                i += n * Math.pow(t, o)
            }
            return i
        },
        t.numerationSystemFrom10 = function(t, e) {
            return e.toString(t)
        },
        t.numerationSystemChange = function(t, e, i) {
            var r = this.numerationSystemTo10(t, i),
            o = this.numerationSystemFrom10(e, r);
            return o
        },
        t.getTriangleArea = function(t, e, i) {
            var r = t.clone(),
            o = e.clone(),
            n = i.clone(),
            l = a.
        default.verticeMinusVertice(n, o),
            u = new s.
        default(o, l),
            c = this.getLengthFromVerticeToLine(r, u),
            h = this.getLengthFromVerticeToVertice(o, n),
            f = .5 * h * c;
            return f
        },
        t.getLengthFromVerticeToVertice = function(t, e) {
            var i = t.clone(),
            r = e.clone(),
            o = Math.pow(i.x - r.x, 2) + Math.pow(i.y - r.y, 2) + Math.pow(i.z - r.z, 2),
            n = Math.sqrt(o);
            return n
        },
        t.getLengthFromVerticeToLine = function(t, e) {
            var i = t.clone(),
            r = e.clone(),
            o = i.x,
            n = i.y,
            a = i.z,
            s = r.vertice,
            l = s.x,
            u = s.y,
            c = s.z,
            h = r.vector;
            h.normalize();
            var f = h.x,
            p = h.y,
            d = h.z,
            v = (n - u) * d - p * (a - c),
            g = (a - c) * f - d * (o - l),
            y = (o - l) * p - f * (n - u);
            return Math.sqrt(v * v + g * g + y * y)
        },
        t.getLengthFromVerticeToPlan = function(t, e) {
            var i = t.clone(),
            r = e.clone(),
            o = i.x,
            n = i.y,
            a = i.z,
            s = r.A,
            l = r.B,
            u = r.C,
            c = r.D,
            h = Math.abs(s * o + l * n + u * a + c),
            f = Math.sqrt(s * s + l * l + u * u),
            p = h / f;
            return p
        },
        t.getVerticeVerticalIntersectPointWidthPlan = function(t, e) {
            var i = t.clone(),
            r = e.clone(),
            o = i.x,
            s = i.y,
            l = i.z,
            u = new a.
        default(r.A, r.B, r.C);
            u.normalize();
            var c = u.x,
            h = u.y,
            f = u.z,
            p = r.D * c / r.A,
            d = -(c * o + h * s + f * l + p),
            v = d * c + o,
            g = d * h + s,
            y = d * f + l,
            m = new n.
        default(v, g, y);
            return m
        },
        t.getIntersectPointByLineAdPlan = function(t, e) {
            var i = t.clone(),
            r = e.clone();
            i.vector.normalize();
            var o = r.A,
            a = r.B,
            s = r.C,
            l = r.D,
            u = i.vertice.x,
            c = i.vertice.y,
            h = i.vertice.z,
            f = i.vector.x,
            p = i.vector.y,
            d = i.vector.z,
            v = -(o * u + a * c + s * h + l) / (o * f + a * p + s * d),
            g = v * f + u,
            y = v * p + c,
            m = v * d + h,
            _ = new n.
        default(g, y, m);
            return _
        },
        t.getLineIntersectPointWithEarth = function(t) {
            var e = [],
            i = t.clone(),
            o = i.vertice,
            a = i.vector;
            a.normalize();
            var s = r.
        default.EARTH_RADIUS,
            l = a.x,
            u = a.y,
            c = a.z,
            h = o.x,
            f = o.y,
            p = o.z,
            d = l * l,
            v = u * u,
            g = c * c,
            y = s * s,
            m = l * f,
            _ = l * p,
            w = u * h,
            b = u * p,
            L = c * h,
            T = c * f,
            M = m * w + _ * L + b * T,
            x = m * m + _ * _ + w * w + b * b + L * L + T * T,
            P = d + v + g,
            E = 8 * M - 4 * x + 4 * y * P;
            if (E < 0) e = [];
            else {
                var A = l * h + u * f + c * p,
                R = d + v + g;
                if (0 == E) {
                    var O = -A / R,
                    C = O * l + h,
                    D = O * u + f,
                    I = O * c + p,
                    B = new n.
                default(C, D, I);
                    e.push(B)
                } else if (E > 0) {
                    var V = Math.sqrt(E),
                    S = ( - 2 * A + V) / (2 * R),
                    F = S * l + h,
                    N = S * u + f,
                    j = S * c + p,
                    U = new n.
                default(F, N, j);
                    e.push(U);
                    var k = ( - 2 * A - V) / (2 * R),
                    G = k * l + h,
                    W = k * u + f,
                    X = k * c + p,
                    z = new n.
                default(G, W, X);
                    e.push(z)
                }
            }
            return e
        },
        t.getCrossPlaneByLine = function(t, e) {
            var i = t.clone(),
            r = e.clone();
            r.normalize();
            var o = r.x,
            n = r.y,
            a = r.z,
            s = i.x,
            u = i.y,
            c = i.z,
            h = -(o * s + n * u + a * c),
            f = new l.
        default(o, n, a, h);
            return f
        },
        t.convertPointFromCanvasToNDC = function(t, e, i, r) {
            if (!o.
        default.isNumber(i)) throw "invalid canvasX";
            if (!o.
        default.isNumber(r)) throw "invalid canvasY";
            var n = 2 * i / t - 1,
            a = 1 - 2 * r / e;
            return [n, a]
        },
        t.convertPointFromNdcToCanvas = function(t, e, i, r) {
            if (!o.
        default.isNumber(i)) throw "invalid ndcX";
            if (!o.
        default.isNumber(r)) throw "invalid ndcY";
            var n = (1 + i) * t / 2,
            a = (1 - r) * e / 2;
            return [n, a]
        },
        t.geographicToCartesianCoord = function(t, e, i) {
            if (void 0 === i && (i = r.
        default.EARTH_RADIUS), !(t >= -180.001 && t <= 180.001)) throw "invalid lon";
            if (! (e >= -90.001 && e <= 90.001)) throw "invalid lat";
            var o = this.degreeToRadian(t),
            a = this.degreeToRadian(e),
            s = Math.sin(o),
            l = Math.cos(o),
            u = Math.sin(a),
            c = Math.cos(a),
            h = i * s * c,
            f = i * u,
            p = i * l * c;
            return new n.
        default(h, f, p)
        },
        t.cartesianCoordToGeographic = function(t) {
            var e = t.clone(),
            i = e.x,
            o = e.y,
            n = e.z,
            a = o / r.
        default.EARTH_RADIUS,
            s = this.asinSafely(a),
            l = Math.cos(s),
            u = i / (r.
        default.EARTH_RADIUS * l);
            u > 1 && (u = 1),
            u < -1 && (u = -1);
            var c = n / (r.
        default.EARTH_RADIUS * l);
            c > 1 && (c = 1),
            c < -1 && (c = -1);
            var h = this.asinSafely(u);
            h = u >= 0 ? c >= 0 ? h: Math.PI - h: c >= 0 ? h: -h - Math.PI;
            var f = this.radianToDegree(s),
            p = this.radianToDegree(h);
            return [p, f]
        },
        t.degreeToRadian = function(t) {
            return t * h
        },
        t.radianToDegree = function(t) {
            return t * c
        },
        t.getRealArcDistanceBetweenLonLats = function(t, e, i, o) {
            var n = this.degreeToRadian(e),
            a = this.degreeToRadian(o),
            s = a - n,
            l = this.degreeToRadian(i - t),
            u = Math.sin(s / 2),
            c = Math.sin(l / 2),
            h = u * u + Math.cos(n) * Math.cos(a) * c * c,
            f = 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)),
            p = r.
        default.REAL_EARTH_RADIUS * f;
            return p
        },
        t.webMercatorXToRadianLon = function(t) {
            return t / r.
        default.EARTH_RADIUS
        },
        t.webMercatorXToDegreeLon = function(t) {
            var e = this.webMercatorXToRadianLon(t);
            return this.radianToDegree(e)
        },
        t.webMercatorYToRadianLat = function(t) {
            if (!o.
        default.isNumber(t)) throw "invalid y";
            var e = t / r.
        default.EARTH_RADIUS,
            i = Math.pow(Math.E, e),
            n = Math.atan(i),
            a = 2 * n - Math.PI / 2;
            return a
        },
        t.webMercatorYToDegreeLat = function(t) {
            var e = this.webMercatorYToRadianLat(t);
            return this.radianToDegree(e)
        },
        t.webMercatorToRadianGeographic = function(t, e) {
            var i = this.webMercatorXToRadianLon(t),
            r = this.webMercatorYToRadianLat(e);
            return [i, r]
        },
        t.webMercatorToDegreeGeographic = function(t, e) {
            var i = this.webMercatorXToDegreeLon(t),
            r = this.webMercatorYToDegreeLat(e);
            return [i, r]
        },
        t.radianLonToWebMercatorX = function(t, e) {
            if (void 0 === e && (e = !1), !(o.
        default.isNumber(t) && t <= Math.PI + .001 && t >= -(Math.PI + .001))) throw "invalid radianLog";
            return e ? r.
        default.REAL_EARTH_RADIUS * t: r.
        default.EARTH_RADIUS * t
        },
        t.degreeLonToWebMercatorX = function(t, e) {
            if (void 0 === e && (e = !1), !(o.
        default.isNumber(t) && t <= 180.001 && t >= -180.001)) throw "invalid degreeLog";
            var i = this.degreeToRadian(t);
            return this.radianLonToWebMercatorX(i, e)
        },
        t.radianLatToWebMercatorY = function(t, e) {
            if (void 0 === e && (e = !1), !(t <= Math.PI / 2 + .001 && t >= -(Math.PI / 2 + .001))) throw "invalid radianLat";
            var i = Math.PI / 4 + t / 2,
            o = Math.tan(i),
            n = Math.log(o);
            return e ? r.
        default.REAL_EARTH_RADIUS * n: r.
        default.EARTH_RADIUS * n
        },
        t.degreeLatToWebMercatorY = function(t, e) {
            if (void 0 === e && (e = !1), !(t <= 90.001 && t >= -90.001)) throw "invalid degreeLat";
            var i = this.degreeToRadian(t);
            return this.radianLatToWebMercatorY(i, e)
        },
        t.radianGeographicToWebMercator = function(t, e) {
            var i = this.radianLonToWebMercatorX(t),
            r = this.radianLatToWebMercatorY(e);
            return [i, r]
        },
        t.degreeGeographicToWebMercator = function(t, e) {
            var i = this.degreeLonToWebMercatorX(t),
            r = this.degreeLatToWebMercatorY(e);
            return [i, r]
        },
        t.getTileWebMercatorEnvelopeByGrid = function(t, e, i) {
            var o = r.
        default.MAX_PROJECTED_COORD,
            n = 2 * o / Math.pow(2, t),
            a = -o + i * n,
            s = a + n,
            l = o - e * n,
            u = l - n,
            c = {
                minX: a,
                minY: u,
                maxX: s,
                maxY: l
            };
            return c
        },
        t.getTileGeographicEnvelopByGrid = function(t, e, i) {
            var r = this.getTileWebMercatorEnvelopeByGrid(t, e, i),
            o = this.webMercatorToDegreeGeographic(r.minX, r.minY),
            n = this.webMercatorToDegreeGeographic(r.maxX, r.maxY),
            a = {
                minLon: o[0],
                minLat: o[1],
                maxLon: n[0],
                maxLat: n[1]
            };
            return a
        },
        t.getTileCartesianEnvelopByGrid = function(t, e, i) {
            var r = this.getTileGeographicEnvelopByGrid(t, e, i),
            o = r.minLon,
            n = r.minLat,
            a = r.maxLon,
            s = r.maxLat,
            l = this.geographicToCartesianCoord(o, n),
            u = this.geographicToCartesianCoord(o, s),
            c = this.geographicToCartesianCoord(a, s),
            h = this.geographicToCartesianCoord(a, n),
            f = {
                pLeftBottom: l,
                pLeftTop: u,
                pRightTop: c,
                pRightBottom: h,
                minLon: o,
                minLat: n,
                maxLon: a,
                maxLat: s
            };
            return f
        },
        t.getGeographicTileCenter = function(t, e, i) {
            var r = this.getTileGeographicEnvelopByGrid(t, e, i),
            o = r.minLon,
            n = r.minLat,
            a = r.maxLon,
            s = r.maxLat,
            l = (o + a) / 2,
            u = (n + s) / 2,
            c = [l, u];
            return c
        },
        t.getCartesianTileCenter = function(t, e, i) {
            var r = this.getGeographicTileCenter(t, e, i),
            o = this.geographicToCartesianCoord(r[0], r[1]);
            return o
        },
        t.quad = function(t, e, i, r) {
            for (var o = [], n = 0; n < r; n++) if (0 === n) o.push(t);
            else if (n === r - 1) o.push(i);
            else {
                var a = n / r,
                s = (1 - a) * (1 - a),
                l = 2 * a * (1 - a),
                u = a * a,
                c = s * t[0] + l * e[0] + u * i[0],
                h = s * t[1] + l * e[1] + u * i[1];
                o.push([c, h])
            }
            return o
        },
        t.calculateNormals = function(t, e) {
            for (var i = 0,
            r = 1,
            o = 2,
            n = [], a = 0; a < t.length; a += 3) n[a + i] = 0,
            n[a + r] = 0,
            n[a + o] = 0;
            for (var a = 0; a < e.length; a += 3) {
                var s = [],
                l = [],
                u = [];
                s[i] = t[3 * e[a + 2] + i] - t[3 * e[a + 1] + i],
                s[r] = t[3 * e[a + 2] + r] - t[3 * e[a + 1] + r],
                s[o] = t[3 * e[a + 2] + o] - t[3 * e[a + 1] + o],
                l[i] = t[3 * e[a] + i] - t[3 * e[a + 1] + i],
                l[r] = t[3 * e[a] + r] - t[3 * e[a + 1] + r],
                l[o] = t[3 * e[a] + o] - t[3 * e[a + 1] + o],
                u[i] = s[r] * l[o] - s[o] * l[r],
                u[r] = s[o] * l[i] - s[i] * l[o],
                u[o] = s[i] * l[r] - s[r] * l[i];
                for (var c = 0; c < 3; c++) n[3 * e[a + c] + i] = n[3 * e[a + c] + i] + u[i],
                n[3 * e[a + c] + r] = n[3 * e[a + c] + r] + u[r],
                n[3 * e[a + c] + o] = n[3 * e[a + c] + o] + u[o]
            }
            for (var a = 0; a < t.length; a += 3) {
                var h = [];
                h[i] = n[a + i],
                h[r] = n[a + r],
                h[o] = n[a + o];
                var f = Math.sqrt(h[i] * h[i] + h[r] * h[r] + h[o] * h[o]);
                0 == f && (f = 1),
                h[i] = h[i] / f,
                h[r] = h[r] / f,
                h[o] = h[o] / f,
                n[a + i] = h[i],
                n[a + r] = h[r],
                n[a + o] = h[o]
            }
            return n
        },
        t.intersectTriangle = function(t, e, i, r, o) {
            var n, s, l = a.
        default.verticeMinusVertice(r, i),
            u = a.
        default.verticeMinusVertice(o, i),
            c = e.cross(u),
            h = l.dot(c),
            f = null;
            if (h > 0 ? f = a.
        default.verticeMinusVertice(t, i) : (f = a.
        default.verticeMinusVertice(i, t), h = -h), h < 1e-4) return ! 1;
            if (n = f.dot(c), n < 0 || n > h) return ! 1;
            var p = f.cross(l);
            return s = e.dot(p),
            !(s < 0 || n + s > h)
        },
        t.convertWorldVerticeToLocalVertice = function(t, e, i) {
            i || (i = e.getInverseMatrix());
            var r = t.getArray();
            r.push(1);
            var o = i.multiplyColumn(r),
            a = new n.
        default(o[0], o[1], o[2]);
            return a
        },
        t.convertWorldVectorToLocalVector = function(t, e, i) {
            i || (i = e.getInverseMatrix());
            var r = new n.
        default(0, 0, 0),
            o = t.getVertice(),
            s = this.convertWorldVerticeToLocalVertice(r, e, i),
            l = this.convertWorldVerticeToLocalVertice(o, e, i),
            u = a.
        default.verticeMinusVertice(l, s);
            return u.normalize(),
            u
        },
        t.convertWorldLineToLocalLine = function(t, e, i) {
            i || (i = e.getInverseMatrix());
            var r = this.convertWorldVerticeToLocalVertice(t.vertice, e, i),
            o = this.convertWorldVectorToLocalVector(t.vector, e, i),
            n = new s.
        default(r, o);
            return n
        },
        t
    } ();
    e.
default = f
},
function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
        function t(t, e, i) {
            void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            this.x = t,
            this.y = e,
            this.z = i
        }
        return t.prototype.getArray = function() {
            return [this.x, this.y, this.z]
        },
        t.prototype.clone = function() {
            return new t(this.x, this.y, this.z)
        },
        t.prototype.getOpposite = function() {
            return new t( - this.x, -this.y, -this.z)
        },
        t
    } ();
    e.
default = i
},
function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(12),
    o = function() {
        function t(t, e, i) {
            void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            this.x = t,
            this.y = e,
            this.z = i
        }
        return t.fromVertice = function(e) {
            return new t(e.x, e.y, e.z)
        },
        t.verticeMinusVertice = function(e, i) {
            return new t(e.x - i.x, e.y - i.y, e.z - i.z)
        },
        t.verticePlusVector = function(t, e) {
            return new r.
        default(t.x + e.x, t.y + e.y, t.z + e.z)
        },
        t.getRadianOfTwoVectors = function(t, e) {
            if (t.isZeroLength() || e.isZeroLength()) return 0;
            var i = t.clone().normalize(),
            r = e.clone().normalize(),
            o = i.dot(r);
            o < -1 && (o = -1),
            o > 1 && (o = 1);
            var n = Math.acos(o);
            return n
        },
        t.prototype.getVertice = function() {
            return new r.
        default(this.x, this.y, this.z)
        },
        t.prototype.getArray = function() {
            return [this.x, this.y, this.z]
        },
        t.prototype.clone = function() {
            return new t(this.x, this.y, this.z)
        },
        t.prototype.getOpposite = function() {
            return new t( - this.x, -this.y, -this.z)
        },
        t.prototype.getLength = function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        t.prototype.isZeroLength = function() {
            return 0 === this.x && 0 === this.y && 0 === this.z
        },
        t.prototype.normalize = function() {
            var t = this.getLength();
            return Math.abs(t) >= 1e-6 ? (this.x /= t, this.y /= t, this.z /= t) : (this.x = 0, this.y = 0, this.z = 0),
            this
        },
        t.prototype.setLength = function(t) {
            return this.normalize(),
            this.x *= t,
            this.y *= t,
            this.z *= t,
            this
        },
        t.prototype.getRandomVerticalVector = function() {
            var e, i = this.getLength();
            if (0 === i) e = new t(0, 0, 0);
            else {
                var r, o, n;
                0 !== this.x ? (o = 1, n = 0, r = -this.y / this.x) : 0 !== this.y ? (n = 1, r = 0, o = -this.z / this.y) : 0 !== this.z && (r = 1, o = 0, n = -this.x / this.z),
                e = new t(r, o, n),
                e.normalize()
            }
            return e
        },
        t.prototype.cross = function(e) {
            var i = this.y * e.z - this.z * e.y,
            r = this.z * e.x - this.x * e.z,
            o = this.x * e.y - this.y * e.x;
            return new t(i, r, o)
        },
        t.prototype.dot = function(e) {
            if (! (e instanceof t)) throw "invalid other";
            return this.x * e.x + this.y * e.y + this.z * e.z
        },
        t
    } ();
    e.
default = o
},
function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
        function t(t, e) {
            this.vertice = t.clone(),
            this.vector = e.clone(),
            this.vector.normalize()
        }
        return t.prototype.setVertice = function(t) {
            return this.vertice = t.clone(),
            this
        },
        t.prototype.setVector = function(t) {
            return this.vector = t.clone(),
            this.vector.normalize(),
            this
        },
        t.prototype.clone = function() {
            var e = new t(this.vertice, this.vector);
            return e
        },
        t
    } ();
    e.
default = i
},
function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
        function t(t, e, i, r) {
            this.A = t,
            this.B = e,
            this.C = i,
            this.D = r
        }
        return t.prototype.clone = function() {
            var e = new t(this.A, this.B, this.C, this.D);
            return e
        },
        t
    } ();
    e.
default = i
},
function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r, o = i(5),
    n = i(11); !
    function(t) {
        t[t.LEFT_TOP = 0] = "LEFT_TOP",
        t[t.RIGHT_TOP = 1] = "RIGHT_TOP",
        t[t.LEFT_BOTTOM = 2] = "LEFT_BOTTOM",
        t[t.RIGHT_BOTTOM = 3] = "RIGHT_BOTTOM",
        t[t.LEFT = 4] = "LEFT",
        t[t.RIGHT = 5] = "RIGHT",
        t[t.TOP = 6] = "TOP",
        t[t.BOTTOM = 7] = "BOTTOM"
    } (r = e.TileGridPosition || (e.TileGridPosition = {}));
    var a = n.
default.webMercatorYToDegreeLat(o.
default.MAX_PROJECTED_COORD),
    s = function() {
        function t(t, e, i) {
            this.level = t,
            this.row = e,
            this.column = i,
            this.Egeo = null
        }
        return t.prototype.equals = function(t) {
            return t && this.level === t.level && this.row === t.row && this.column === t.column
        },
        t.prototype.getEgeo = function() {
            return this.Egeo || (this.Egeo = n.
        default.getTileGeographicEnvelopByGrid(this.level, this.row, this.column)),
            this.Egeo
        },
        t.prototype.getLeftTopTag = function() {
            return this.level + "_" + this.row + "_" + this.column
        },
        t.prototype.getRightTopTag = function() {
            return this.level + "_" + this.row + "_" + (this.column + 1)
        },
        t.prototype.getLeftBottomTag = function() {
            return this.level + "_" + (this.row + 1) + "_" + this.column
        },
        t.prototype.getRightBottomTag = function() {
            return this.level + "_" + (this.row + 1) + "_" + (this.column + 1)
        },
        t.prototype.getLeft = function() {
            return t.getTileGridByBrother(this.level, this.row, this.column, r.LEFT)
        },
        t.prototype.getRight = function() {
            return t.getTileGridByBrother(this.level, this.row, this.column, r.RIGHT)
        },
        t.prototype.getTop = function() {
            return t.getTileGridByBrother(this.level, this.row, this.column, r.TOP)
        },
        t.prototype.getBottom = function() {
            return t.getTileGridByBrother(this.level, this.row, this.column, r.BOTTOM)
        },
        t.prototype.getParent = function() {
            return t.getTileGridAncestor(this.level - 1, this.level, this.row, this.column)
        },
        t.prototype.getAncestor = function(e) {
            return t.getTileGridAncestor(e, this.level, this.row, this.column)
        },
        t.getTileGridByParent = function(e, i, o, n) {
            var a = e + 1,
            s = -1,
            l = -1;
            if (n === r.LEFT_TOP) s = 2 * i,
            l = 2 * o;
            else if (n === r.RIGHT_TOP) s = 2 * i,
            l = 2 * o + 1;
            else if (n === r.LEFT_BOTTOM) s = 2 * i + 1,
            l = 2 * o;
            else {
                if (n !== r.RIGHT_BOTTOM) throw "invalid position";
                s = 2 * i + 1,
                l = 2 * o + 1
            }
            return new t(a, s, l)
        },
        t.getTilePositionOfParent = function(t, e, i, o) {
            var n = null;
            o = o || this.getTileGridAncestor(t - 1, t, e, i);
            var a = this.getTileGridByParent(o.level, o.row, o.column, r.LEFT_TOP);
            return a.row === e ? a.column === i ? n = r.LEFT_TOP: a.column + 1 === i && (n = r.RIGHT_TOP) : a.row + 1 === e && (a.column === i ? n = r.LEFT_BOTTOM: a.column + 1 === i && (n = r.RIGHT_BOTTOM)),
            n
        },
        t.getTileGridByBrother = function(e, i, o, n, a) {
            a = a || {};
            var s = new t(e, i, o);
            if (n === r.LEFT) if (0 === o) {
                var l = a.maxSize || Math.pow(2, e);
                s.column = l - 1
            } else s.column = o - 1;
            else if (n === r.RIGHT) {
                var l = a.maxSize || Math.pow(2, e);
                o === l - 1 ? s.column = 0 : s.column = o + 1
            } else if (n === r.TOP) if (0 === i) {
                var l = a.maxSize || Math.pow(2, e);
                s.row = l - 1
            } else s.row = i - 1;
            else {
                if (n !== r.BOTTOM) throw "invalid position";
                var l = a.maxSize || Math.pow(2, e);
                i === l - 1 ? s.row = 0 : s.row = i + 1
            }
            return s
        },
        t.getTileGridAncestor = function(e, i, r, o) {
            var n = null;
            if (e < i) {
                var a = i - e,
                s = Math.pow(2, a),
                l = Math.floor(r / s),
                u = Math.floor(o / s);
                n = new t(e, l, u)
            } else e === i && (n = new t(i, r, o));
            return n
        },
        t.isValidLatitude = function(t) {
            return t >= -a && t <= a
        },
        t.getTileGridByGeo = function(e, i, r) {
            if (! (e >= -180 && e <= 180)) throw "invalid lon: " + e;
            var a = n.
        default.degreeGeographicToWebMercator(e, i),
            s = a[0],
            l = a[1],
            u = s + o.
        default.MAX_PROJECTED_COORD,
            c = o.
        default.MAX_PROJECTED_COORD - l,
            h = o.
        default.MAX_PROJECTED_COORD / Math.pow(2, r - 1),
            f = Math.floor(c / h),
            p = Math.floor(u / h);
            return new t(r, f, p)
        },
        t
    } ();
    e.
default = s
},
function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(7),
    o = i(12),
    n = i(13),
    a = function() {
        function t(t, e, i, r, o, n, a, s, l, u, c, h, f, p, d, v) {
            void 0 === t && (t = 1),
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === r && (r = 0),
            void 0 === o && (o = 0),
            void 0 === n && (n = 1),
            void 0 === a && (a = 0),
            void 0 === s && (s = 0),
            void 0 === l && (l = 0),
            void 0 === u && (u = 0),
            void 0 === c && (c = 1),
            void 0 === h && (h = 0),
            void 0 === f && (f = 0),
            void 0 === p && (p = 0),
            void 0 === d && (d = 0),
            void 0 === v && (v = 1),
            this.elements = new Float64Array(16),
            this.setElements(t, e, i, r, o, n, a, s, l, u, c, h, f, p, d, v)
        }
        return t.prototype.getFloat32Array = function() {
            return new Float32Array(this.elements)
        },
        t.prototype.equals = function(t) {
            return this === t || r.
        default.every(this.elements,
            function(e, i) {
                return e === t.elements[i]
            })
        },
        t.prototype.toJson = function() {
            var t = [];
            return r.
        default.forEach(this.elements,
            function(e) {
                t.push(e)
            }),
            {
                elements: t
            }
        },
        t.prototype.fromJson = function(t) {
            var e = this;
            t.elements.forEach(function(t, i) {
                e.elements[i] = t
            })
        },
        t.fromJson = function(e) {
            if (!e) return null;
            var i = new t;
            return i.fromJson(e),
            i
        },
        t.prototype.setElements = function(t, e, i, r, o, n, a, s, l, u, c, h, f, p, d, v) {
            var g = arguments.length;
            if (g < 16) throw "invalid arguments:arguments length error";
            var y = this.elements;
            return y[0] = t,
            y[4] = e,
            y[8] = i,
            y[12] = r,
            y[1] = o,
            y[5] = n,
            y[9] = a,
            y[13] = s,
            y[2] = l,
            y[6] = u,
            y[10] = c,
            y[14] = h,
            y[3] = f,
            y[7] = p,
            y[11] = d,
            y[15] = v,
            this
        },
        t.prototype.setVectorX = function(t) {
            this.elements[0] = t.x,
            this.elements[1] = t.y,
            this.elements[2] = t.z
        },
        t.prototype.getVectorX = function() {
            return new n.
        default(this.elements[0], this.elements[1], this.elements[2])
        },
        t.prototype.setVectorY = function(t) {
            this.elements[4] = t.x,
            this.elements[5] = t.y,
            this.elements[6] = t.z
        },
        t.prototype.getVectorY = function() {
            return new n.
        default(this.elements[4], this.elements[5], this.elements[6])
        },
        t.prototype.setVectorZ = function(t) {
            this.elements[8] = t.x,
            this.elements[9] = t.y,
            this.elements[10] = t.z
        },
        t.prototype.getVectorZ = function() {
            return new n.
        default(this.elements[8], this.elements[9], this.elements[10]);
        },
        t.prototype.setPosition = function(t) {
            this.elements[12] = t.x,
            this.elements[13] = t.y,
            this.elements[14] = t.z
        },
        t.prototype.getPosition = function() {
            return new o.
        default(this.elements[12], this.elements[13], this.elements[14])
        },
        t.prototype.setLastRowDefault = function() {
            this.elements[3] = 0,
            this.elements[7] = 0,
            this.elements[11] = 0,
            this.elements[15] = 1
        },
        t.prototype.transpose = function() {
            var t = this.getTransposeMatrix();
            this.setMatrixByOther(t)
        },
        t.prototype.getTransposeMatrix = function() {
            var e = new t;
            return e.elements[0] = this.elements[0],
            e.elements[4] = this.elements[1],
            e.elements[8] = this.elements[2],
            e.elements[12] = this.elements[3],
            e.elements[1] = this.elements[4],
            e.elements[5] = this.elements[5],
            e.elements[9] = this.elements[6],
            e.elements[13] = this.elements[7],
            e.elements[2] = this.elements[8],
            e.elements[6] = this.elements[9],
            e.elements[10] = this.elements[10],
            e.elements[14] = this.elements[11],
            e.elements[3] = this.elements[12],
            e.elements[7] = this.elements[13],
            e.elements[11] = this.elements[14],
            e.elements[15] = this.elements[15],
            e
        },
        t.prototype.inverse = function() {
            var t = this.getInverseMatrix();
            this.setMatrixByOther(t)
        },
        t.prototype.getInverseMatrix = function() {
            var e = this.elements,
            i = new t,
            r = i.elements,
            o = e[0],
            n = e[1],
            a = e[2],
            s = e[3],
            l = e[4],
            u = e[5],
            c = e[6],
            h = e[7],
            f = e[8],
            p = e[9],
            d = e[10],
            v = e[11],
            g = e[12],
            y = e[13],
            m = e[14],
            _ = e[15],
            w = o * u - n * l,
            b = o * c - a * l,
            L = o * h - s * l,
            T = n * c - a * u,
            M = n * h - s * u,
            x = a * h - s * c,
            P = f * y - p * g,
            E = f * m - d * g,
            A = f * _ - v * g,
            R = p * m - d * y,
            O = p * _ - v * y,
            C = d * _ - v * m,
            D = w * C - b * O + L * R + T * A - M * E + x * P;
            return D ? (D = 1 / D, r[0] = (u * C - c * O + h * R) * D, r[1] = ( - n * C + a * O - s * R) * D, r[2] = (y * x - m * M + _ * T) * D, r[3] = ( - p * x + d * M - v * T) * D, r[4] = ( - l * C + c * A - h * E) * D, r[5] = (o * C - a * A + s * E) * D, r[6] = ( - g * x + m * L - _ * b) * D, r[7] = (f * x - d * L + v * b) * D, r[8] = (l * O - u * A + h * P) * D, r[9] = ( - o * O + n * A - s * P) * D, r[10] = (g * M - y * L + _ * w) * D, r[11] = ( - f * M + p * L - v * w) * D, r[12] = ( - l * R + u * E - c * P) * D, r[13] = (o * R - n * E + a * P) * D, r[14] = ( - g * T + y * b - m * w) * D, r[15] = (f * T - p * b + d * w) * D, i) : (console.log("can't get inverse matrix"), null)
        },
        t.prototype.setMatrixByOther = function(t) {
            for (var e = 0; e < t.elements.length; e++) this.elements[e] = t.elements[e]
        },
        t.prototype.setUnitMatrix = function() {
            this.setElements(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        },
        t.prototype.setUniqueValue = function(t) {
            for (var e = this.elements.length,
            i = 0; i < e; i++) this.elements[i] = t
        },
        t.prototype.isUnitMatrix = function() {
            for (var t = this.elements,
            e = 0; e < t.length; e++) if (e % 4 === 0) {
                if (1 != t[e]) return ! 1
            } else if (0 !== t[e]) return ! 1;
            return ! 0
        },
        t.prototype.clone = function() {
            return new t(this.elements[0], this.elements[4], this.elements[8], this.elements[12], this.elements[1], this.elements[5], this.elements[9], this.elements[13], this.elements[2], this.elements[6], this.elements[10], this.elements[14], this.elements[3], this.elements[7], this.elements[11], this.elements[15])
        },
        t.prototype.multiplyMatrix = function(e) {
            var i = this.elements,
            r = e.elements,
            o = i[0] * r[0] + i[4] * r[1] + i[8] * r[2] + i[12] * r[3],
            n = i[0] * r[4] + i[4] * r[5] + i[8] * r[6] + i[12] * r[7],
            a = i[0] * r[8] + i[4] * r[9] + i[8] * r[10] + i[12] * r[11],
            s = i[0] * r[12] + i[4] * r[13] + i[8] * r[14] + i[12] * r[15],
            l = i[1] * r[0] + i[5] * r[1] + i[9] * r[2] + i[13] * r[3],
            u = i[1] * r[4] + i[5] * r[5] + i[9] * r[6] + i[13] * r[7],
            c = i[1] * r[8] + i[5] * r[9] + i[9] * r[10] + i[13] * r[11],
            h = i[1] * r[12] + i[5] * r[13] + i[9] * r[14] + i[13] * r[15],
            f = i[2] * r[0] + i[6] * r[1] + i[10] * r[2] + i[14] * r[3],
            p = i[2] * r[4] + i[6] * r[5] + i[10] * r[6] + i[14] * r[7],
            d = i[2] * r[8] + i[6] * r[9] + i[10] * r[10] + i[14] * r[11],
            v = i[2] * r[12] + i[6] * r[13] + i[10] * r[14] + i[14] * r[15],
            g = i[3] * r[0] + i[7] * r[1] + i[11] * r[2] + i[15] * r[3],
            y = i[3] * r[4] + i[7] * r[5] + i[11] * r[6] + i[15] * r[7],
            m = i[3] * r[8] + i[7] * r[9] + i[11] * r[10] + i[15] * r[11],
            _ = i[3] * r[12] + i[7] * r[13] + i[11] * r[14] + i[15] * r[15];
            return new t(o, n, a, s, l, u, c, h, f, p, d, v, g, y, m, _)
        },
        t.prototype.multiplyColumn = function(t) {
            var e = 4 == t.length;
            if (!e) throw "invalid c";
            var i = this.elements,
            r = t,
            o = i[0] * r[0] + i[4] * r[1] + i[8] * r[2] + i[12] * r[3],
            n = i[1] * r[0] + i[5] * r[1] + i[9] * r[2] + i[13] * r[3],
            a = i[2] * r[0] + i[6] * r[1] + i[10] * r[2] + i[14] * r[3],
            s = i[3] * r[0] + i[7] * r[1] + i[11] * r[2] + i[15] * r[3];
            return [o, n, a, s]
        },
        t.prototype.hasNaN = function() {
            return r.
        default.some(this.elements,
            function(t) {
                return isNaN(t)
            })
        },
        t.prototype.divide = function(t) {
            if (0 === t) throw "invalid a:a is 0";
            if (0 !== t) for (var e = 0,
            i = this.elements.length; e < i; e++) this.elements[e] /= t
        },
        t.prototype.worldTranslate = function(t, e, i) {
            this.elements[12] += t,
            this.elements[13] += e,
            this.elements[14] += i
        },
        t.prototype.localTranslate = function(t, e, i) {
            var r = [t, e, i, 1],
            o = this.multiplyColumn(r),
            n = this.getPosition();
            this.worldTranslate(o[0] - n.x, o[1] - n.y, o[2] - n.z)
        },
        t.prototype.worldScale = function(e, i, r) {
            e = void 0 !== e ? e: 1,
            i = void 0 !== i ? i: 1,
            r = void 0 !== r ? r: 1;
            var o = new t(e, 0, 0, 0, 0, i, 0, 0, 0, 0, r, 0, 0, 0, 0, 1),
            n = o.multiplyMatrix(this);
            this.setMatrixByOther(n)
        },
        t.prototype.localScale = function(t, e, i) {
            var r = this.getPosition();
            this.setPosition(new o.
        default(0, 0, 0)),
            this.worldScale(t, e, i),
            this.setPosition(r)
        },
        t.prototype.worldRotateX = function(e) {
            var i = Math.cos(e),
            r = Math.sin(e),
            o = new t(1, 0, 0, 0, 0, i, -r, 0, 0, r, i, 0, 0, 0, 0, 1),
            n = o.multiplyMatrix(this);
            this.setMatrixByOther(n)
        },
        t.prototype.worldRotateY = function(e) {
            var i = Math.cos(e),
            r = Math.sin(e),
            o = new t(i, 0, r, 0, 0, 1, 0, 0, -r, 0, i, 0, 0, 0, 0, 1),
            n = o.multiplyMatrix(this);
            this.setMatrixByOther(n)
        },
        t.prototype.worldRotateZ = function(e) {
            var i = Math.cos(e),
            r = Math.sin(e),
            o = new t(i, -r, 0, 0, r, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            n = o.multiplyMatrix(this);
            this.setMatrixByOther(n)
        },
        t.prototype.worldRotateByVector = function(e, i) {
            var r, o, n, a, s, l, u, c, h, f, p, d, v, g = i.x,
            y = i.y,
            m = i.z;
            o = Math.sin(e),
            n = Math.cos(e),
            r = Math.sqrt(g * g + y * y + m * m),
            g /= r,
            y /= r,
            m /= r,
            a = g * g,
            s = y * y,
            l = m * m,
            u = g * y,
            c = y * m,
            h = m * g,
            f = g * o,
            p = y * o,
            d = m * o,
            v = 1 - n;
            var _ = v * a + n,
            w = v * u - d,
            b = v * h + p,
            L = 0,
            T = v * u + d,
            M = v * s + n,
            x = v * c - f,
            P = 0,
            E = v * h - p,
            A = v * c + f,
            R = v * l + n,
            O = 0,
            C = 0,
            D = 0,
            I = 0,
            B = 1,
            V = new t(_, w, b, L, T, M, x, P, E, A, R, O, C, D, I, B),
            S = V.multiplyMatrix(this);
            this.setMatrixByOther(S)
        },
        t.prototype.localRotateX = function(t) {
            var e = this.getPosition();
            this.setPosition(new o.
        default(0, 0, 0));
            var i = this.getVectorX();
            this.worldRotateByVector(t, i),
            this.setPosition(e)
        },
        t.prototype.localRotateY = function(t) {
            var e = this.getPosition();
            this.setPosition(new o.
        default(0, 0, 0));
            var i = this.getVectorY();
            this.worldRotateByVector(t, i),
            this.setPosition(e)
        },
        t.prototype.localRotateZ = function(t) {
            var e = this.getPosition();
            this.setPosition(new o.
        default(0, 0, 0));
            var i = this.getVectorZ();
            this.worldRotateByVector(t, i),
            this.setPosition(e)
        },
        t.prototype.localRotateByVector = function(t, e) {
            var i = e.getArray();
            i.push(1);
            var r = this.multiplyColumn(i),
            a = new n.
        default(r[0], r[1], r[2]),
            s = this.getPosition();
            this.setPosition(new o.
        default(0, 0, 0)),
            this.worldRotateByVector(t, a),
            this.setPosition(s)
        },
        t
    } ();
    e.
default = a
},
function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(17),
    o = function() {
        function t() {
            this.matrix = new r.
        default
        }
        return t.prototype.setMatrix = function(t) {
            this.matrix = t
        },
        t.prototype.getMatrix = function() {
            return this.matrix
        },
        t.prototype.cloneMatrix = function() {
            return this.matrix.clone()
        },
        t.prototype.setVectorX = function(t) {
            this.matrix.setVectorX(t)
        },
        t.prototype.getVectorX = function() {
            return this.matrix.getVectorX()
        },
        t.prototype.setVectorY = function(t) {
            this.matrix.setVectorY(t)
        },
        t.prototype.getVectorY = function() {
            return this.matrix.getVectorY()
        },
        t.prototype.setVectorZ = function(t) {
            this.matrix.setVectorZ(t)
        },
        t.prototype.getVectorZ = function() {
            return this.matrix.getVectorZ()
        },
        t.prototype.setPosition = function(t) {
            this.matrix.setPosition(t)
        },
        t.prototype.getPosition = function() {
            return this.matrix.getPosition()
        },
        t.prototype.worldTranslate = function(t, e, i) {
            this.matrix.worldTranslate(t, e, i)
        },
        t.prototype.localTranslate = function(t, e, i) {
            this.matrix.localTranslate(t, e, i)
        },
        t.prototype.worldScale = function(t, e, i) {
            this.matrix.worldScale(t, e, i)
        },
        t.prototype.localScale = function(t, e, i) {
            this.matrix.localScale(t, e, i)
        },
        t.prototype.worldRotateX = function(t) {
            this.matrix.worldRotateX(t)
        },
        t.prototype.worldRotateY = function(t) {
            this.matrix.worldRotateY(t)
        },
        t.prototype.worldRotateZ = function(t) {
            this.matrix.worldRotateZ(t)
        },
        t.prototype.worldRotateByVector = function(t, e) {
            this.matrix.worldRotateByVector(t, e)
        },
        t.prototype.localRotateX = function(t) {
            this.matrix.localRotateX(t)
        },
        t.prototype.localRotateY = function(t) {
            this.matrix.localRotateY(t)
        },
        t.prototype.localRotateZ = function(t) {
            this.matrix.localRotateZ(t)
        },
        t.prototype.localRotateByVector = function(t, e) {
            this.matrix.localRotateByVector(t, e)
        },
        t.prototype.getXAxisDirection = function() {
            var t = this.matrix.getVectorX();
            return t.normalize(),
            t
        },
        t.prototype.getYAxisDirection = function() {
            var t = this.matrix.getVectorY();
            return t.normalize(),
            t
        },
        t.prototype.getZAxisDirection = function() {
            var t = this.matrix.getVectorZ();
            return t.normalize(),
            t
        },
        t
    } ();
    e.
default = o
},
function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
        function t(t, e, i, r) {
            this.minLon = t,
            this.minLat = e,
            this.maxLon = i,
            this.maxLat = r
        }
        return t.prototype.clone = function() {
            return new t(this.minLon, this.minLat, this.maxLon, this.maxLat)
        },
        t.prototype.getMinLon = function() {
            return this.minLon
        },
        t.prototype.getMinLat = function() {
            return this.minLat
        },
        t.prototype.getMaxLon = function() {
            return this.maxLon
        },
        t.prototype.getMaxLat = function() {
            return this.maxLat
        },
        t.prototype.toJson = function() {
            return [this.minLon, this.minLat, this.maxLon, this.maxLat]
        },
        t.merge = function(e, i) {
            var r = null;
            if (1 === e.length) r = e[0].clone();
            else if (e.length > 1) {
                var o = [],
                n = [],
                a = [],
                s = [];
                if (e.forEach(function(t) {
                    o.push(t.getMinLon()),
                    n.push(t.getMinLat()),
                    a.push(t.getMaxLon()),
                    s.push(t.getMaxLat())
                }), i) {
                    var l = Math.min.apply(Math, o),
                    u = Math.min.apply(Math, n),
                    c = Math.max.apply(Math, a),
                    h = Math.max.apply(Math, s);
                    r = new t(l, u, c, h)
                } else {
                    var l = Math.max.apply(Math, o),
                    u = Math.max.apply(Math, n),
                    c = Math.min.apply(Math, a),
                    h = Math.min.apply(Math, s);
                    l < c && u < h && (r = new t(l, u, c, h))
                }
            }
            return r
        },
        t.union = function(t) {
            return this.merge(t, !0)
        },
        t.intersect = function(t) {
            return this.merge(t, !1)
        },
        t.fromLonlats = function(e) {
            if (e.length <= 1) return null;
            var i = [],
            r = [];
            e.forEach(function(t) {
                i.push(t[0]),
                r.push(t[1])
            });
            var o = Math.min.apply(Math, i),
            n = Math.min.apply(Math, r),
            a = Math.max.apply(Math, i),
            s = Math.max.apply(Math, r),
            l = new t(o, n, a, s);
            return l
        },
        t
    } ();
    e.
default = i
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(21),
    n = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return r(e, t),
        e.prototype.pickByWorldLine = function(t) {
            for (var e = this.children.length,
            i = e - 1; i >= 0; i--) {
                var r = this.children[i];
                if (r instanceof o.PickableGraphicGroup) {
                    var n = r,
                    a = n.pickByWorldLine(t, !0);
                    if (a) return a
                }
            }
            return null
        },
        e
    } (o.
default);
    e.
default = n
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(5),
    n = function() {
        function t() {
            this.visible = !0,
            this.id = ++o.
        default.idCounter,
            this.children = []
        }
        return t.prototype.add = function(t, e) {
            void 0 === e && (e = !1),
            e ? this.children.unshift(t) : this.children.push(t),
            t.parent = this
        },
        t.prototype.remove = function(t) {
            var e = this.findChildIndex(t);
            return e >= 0 && (this.children.splice(e, 1), !0)
        },
        t.prototype.clear = function() {
            for (var t = 0,
            e = this.children.length,
            i = null; t < e; t++) i = this.children[t],
            i.destroy();
            this.children = []
        },
        t.prototype.destroy = function() {
            this.parent = null,
            this.clear()
        },
        t.prototype.findChildIndex = function(t) {
            for (var e = this.children.length,
            i = 0; i < e; i++) {
                var r = this.children[i];
                if (t === r) return i
            }
            return - 1
        },
        t.prototype.findChildById = function(t) {
            for (var e = 0,
            i = this.children.length,
            r = null; e < i; e++) if (r = this.children[e], r.id === t) return {
                index: e,
                graphic: r
            };
            return null
        },
        t.prototype.shouldDraw = function() {
            return this.visible && this.children.length > 0
        },
        t.prototype.moveChildToLastPosition = function(t) {
            var e = this.findChildIndex(t);
            this.children.splice(e, 1),
            this.children.push(t)
        },
        t.prototype.draw = function(t) {
            this.shouldDraw() && (this.onBeforeDraw(), this.onDraw(t), this.onAfterDraw())
        },
        t.prototype.onBeforeDraw = function() {},
        t.prototype.onDraw = function(t) {
            this.children.forEach(function(e) {
                e.shouldDraw(t) && e.draw(t)
            })
        },
        t.prototype.onAfterDraw = function() {},
        t
    } (),
    a = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.pickListener = null,
            e
        }
        return r(e, t),
        e.prototype.pickByLocalLine = function(t, e) {
            void 0 === e && (e = !1);
            for (var i = this.children.length,
            r = i - 1; r >= 0; r--) {
                var o = this.children[r];
                if (o.ifIntersectLocalLine(t)) return e && this.onPick(o),
                o
            }
            return null
        },
        e.prototype.pickByWorldLine = function(t, e) {
            void 0 === e && (e = !1);
            for (var i = this.children.length,
            r = i - 1; r >= 0; r--) {
                var o = this.children[r];
                if (o.ifIntersectWorldLine(t)) return e && this.onPick(o),
                o
            }
            return null
        },
        e.prototype.onPick = function(t) {
            this.moveChildToLastPosition(t),
            this.pickListener && this.pickListener(t)
        },
        e.prototype.hasPickListener = function() {
            return !! this.pickListener
        },
        e.prototype.setPickListener = function(t) {
            this.pickListener = t
        },
        e
    } (n);
    e.PickableGraphicGroup = a,
    e.
default = n
},
function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = {
        MAX_LEVEL: 4,
        images: {},
        add: function(t, e) {
            this.images[t] = e
        },
        get: function(t) {
            return this.images[t]
        },
        remove: function(t) {
            delete this.images[t]
        },
        clear: function() {
            this.images = {}
        },
        getCount: function() {
            var t = 0;
            for (var e in this.images) this.images.hasOwnProperty(e) && t++;
            return t
        }
    };
    e.
default = i
},
function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(7),
    o = i(11),
    n = i(13),
    a = function() {
        function t(t) {
            this.globe = t,
            this.down = !1,
            this.dragGeo = null,
            this.previousX = -1,
            this.previousY = -1,
            this.twoTouchDistance = -1,
            this.oldTime = -1,
            this.lastTime = -1,
            this.startTime = -1,
            this.endTime = -1,
            this.resizeListener = null,
            this.bodyKeydownListener = null,
            this.endTime = this.startTime = this.lastTime = this.oldTime = Date.now(),
            this._bindEvents()
        }
        return t.prototype.destroy = function() {
            var t = this;
            this.globe = null;
            var e = ["touchstart", "touchend", "touchmove", "mousedown", "mouseup", "mousemove", "dblclick", "mousewheel", "DOMMouseScroll"];
            e.forEach(function(e) {
                t.globe.canvas.removeEventListener(e)
            }),
            this.bodyKeydownListener && document.body.removeEventListener("keydown", this.bodyKeydownListener),
            this.bodyKeydownListener = null
        },
        t.prototype._bindEvents = function() {
            r.
        default.isMobile() ? (this.globe.canvas.addEventListener("touchstart", this._onTouchStart.bind(this), !1), this.globe.canvas.addEventListener("touchend", this._onTouchEnd.bind(this), !1), this.globe.canvas.addEventListener("touchmove", this._onTouchMove.bind(this), !1)) : (this.globe.canvas.addEventListener("mousedown", this._onMouseDown.bind(this), !1), this.globe.canvas.addEventListener("mouseup", this._onMouseUp.bind(this), !1), this.globe.canvas.addEventListener("mousemove", this._onMouseMove.bind(this), !1), this.globe.canvas.addEventListener("click", this._onClick.bind(this), !1), this.globe.canvas.addEventListener("dblclick", this._onDbClick.bind(this), !1), this.globe.canvas.addEventListener("mousewheel", this._onMouseWheel.bind(this), !1), this.globe.canvas.addEventListener("DOMMouseScroll", this._onMouseWheel.bind(this), !1), this.bodyKeydownListener = this._onKeyDown.bind(this), document.body.addEventListener("keydown", this.bodyKeydownListener, !1))
        },
        t.prototype.moveLonLatToCanvas = function(t, e, i, r) {
            var n = this.globe.camera.getPickCartesianCoordInEarthByCanvas(i, r);
            if (n.length > 0) {
                var a = o.
            default.cartesianCoordToGeographic(n[0]),
                s = a[0],
                l = a[1];
                this._moveGeo(t, e, s, l)
            }
        },
        t.prototype._moveGeo = function(t, e, i, r) {
            if (t !== i || e !== r) {
                var a = o.
            default.geographicToCartesianCoord(t, e),
                s = n.
            default.fromVertice(a),
                l = o.
            default.geographicToCartesianCoord(i, r),
                u = n.
            default.fromVertice(l),
                c = s.cross(u),
                h = -n.
            default.getRadianOfTwoVectors(s, u);
                this.globe.camera.worldRotateByVector(h, c)
            }
        },
        t.prototype._handleSingleClick = function(t, e) {
            this.globe.pick(t, e)
        },
        t.prototype._handleMouseDownOrTouchStart = function(t, e) {
            this.down = !0,
            this.previousX = t,
            this.previousY = e;
            var i = this.globe.camera.getPickCartesianCoordInEarthByCanvas(this.previousX, this.previousY);
            i.length > 0 && (this.dragGeo = o.
        default.cartesianCoordToGeographic(i[0]))
        },
        t.prototype._handleMouseMoveOrTouchMove = function(t, e) {
            var i = this.globe;
            if (i && !i.isAnimating() && this.down) {
                var r = i.camera.getPickCartesianCoordInEarthByCanvas(t, e);
                if (r.length > 0) {
                    if (this.dragGeo) {
                        var n = o.
                    default.cartesianCoordToGeographic(r[0]);
                        this._moveGeo(this.dragGeo[0], this.dragGeo[1], n[0], n[1])
                    } else this.dragGeo = o.
                default.cartesianCoordToGeographic(r[0]);
                    this.previousX = t,
                    this.previousY = e,
                    this.globe.canvas.style.cursor = "pointer"
                } else this.previousX = -1,
                this.previousY = -1,
                this.dragGeo = null,
                this.globe.canvas.style.cursor = "default"
            }
        },
        t.prototype._handleMouseUpOrTouchEnd = function() {
            this.down = !1,
            this.previousX = -1,
            this.previousY = -1,
            this.dragGeo = null,
            this.globe.canvas && (this.globe.canvas.style.cursor = "default"),
            r.
        default.publish("extent-change")
        },
        t.prototype._onMouseDown = function(t) {
            var e = this.globe;
            if (e && !e.isAnimating()) {
                var i = t.layerX || t.offsetX,
                r = t.layerY || t.offsetY;
                this._handleMouseDownOrTouchStart(i, r)
            }
        },
        t.prototype._onMouseMove = function(t) {
            if (this.down && !this.globe.isAnimating()) {
                var e = t.layerX || t.offsetX,
                i = t.layerY || t.offsetY;
                this._handleMouseMoveOrTouchMove(e, i)
            }
        },
        t.prototype._onMouseUp = function() {
            this._handleMouseUpOrTouchEnd()
        },
        t.prototype._onClick = function(t) {
            var e = t.layerX || t.offsetX,
            i = t.layerY || t.offsetY;
            this._handleSingleClick(e, i)
        },
        t.prototype._onDbClick = function(t) {
            var e = this.globe;
            if (e && !e.isAnimating()) {
                var i = t.layerX || t.offsetX,
                r = t.layerY || t.offsetY,
                n = e.camera.getPickCartesianCoordInEarthByCanvas(i, r);
                if (e.zoomIn(), n.length >= 1) {
                    var a = n[0],
                    s = o.
                default.cartesianCoordToGeographic(a),
                    l = s[0],
                    u = s[1];
                    e.zoomIn(),
                    this.moveLonLatToCanvas(l, u, i, r)
                }
            }
        },
        t.prototype._onMouseWheel = function(t) {
            var e = this.globe;
            if (e && !e.isAnimating()) {
                var i, o = 0;
                t.wheelDelta ? (i = t.wheelDelta, o = parseInt(i / 120)) : t.detail && (i = t.detail, o = -parseInt(i / 3));
                var n = e.getLevel() + o;
                n >= 0 && e.animateToLevel(n,
                function() {
                    r.
                default.publish("extent-change")
                })
            }
        },
        t.prototype._onKeyDown = function(t) {
            var e = this.globe;
            if (e && !e.isAnimating()) {
                var i = 2,
                r = e.camera,
                o = void 0 !== t.keyCode ? t.keyCode: t.which;
                38 === o ? r.setDeltaPitch(i) : 40 === o && r.setDeltaPitch( - i)
            }
        },
        t.prototype._onTouchZero = function(t) {
            this.twoTouchDistance = -1;
            var e = this.previousX,
            i = this.previousY;
            this._handleMouseUpOrTouchEnd(),
            this.endTime = Date.now();
            var r = this.endTime - this.startTime;
            if (r <= 200) {
                var o = this.endTime - this.lastTime;
                if (o < 300) this.lastTime = this.oldTime,
                this.globe.zoomIn();
                else {
                    this.lastTime = this.endTime;
                    var n = this.globe.canvas.getBoundingClientRect(),
                    a = n.left,
                    s = n.top,
                    l = e - a,
                    u = i - s;
                    this._handleSingleClick(l, u)
                }
            }
        },
        t.prototype._onTouchOne = function(t) {
            this.twoTouchDistance = -1;
            var e = t.targetTouches[0],
            i = e.pageX,
            r = e.pageY;
            this._handleMouseDownOrTouchStart(i, r),
            this.startTime = Date.now()
        },
        t.prototype._onTouchTwo = function(t) {
            this.down = !0,
            this.previousX = -1,
            this.previousY = -1,
            this.dragGeo = null;
            var e = t.targetTouches[0],
            i = e.pageX,
            r = e.pageY,
            o = t.targetTouches[1],
            n = o.pageX,
            a = o.pageY;
            this.twoTouchDistance = Math.sqrt((i - n) * (i - n) + (r - a) * (r - a))
        },
        t.prototype._onTouchMulti = function() {
            this.down = !0,
            this.previousX = -1,
            this.previousY = -1,
            this.dragGeo = null,
            this.twoTouchDistance = -1
        },
        t.prototype._onTouchStart = function(t) {
            var e = this.globe;
            if (e && !e.isAnimating()) {
                var i = t.targetTouches.length;
                0 === i ? this._onTouchZero(t) : 1 === i ? this._onTouchOne(t) : 2 === i ? this._onTouchTwo(t) : this._onTouchMulti()
            }
        },
        t.prototype._onTouchMoveOne = function(t) {
            var e = t.targetTouches[0],
            i = e.pageX,
            r = e.pageY;
            this._handleMouseMoveOrTouchMove(i, r)
        },
        t.prototype._onTouchMoveTwo = function(t) {
            var e = this,
            i = t.targetTouches[0],
            r = i.pageX,
            o = i.pageY,
            n = t.targetTouches[1],
            a = n.pageX,
            s = n.pageY,
            l = Math.sqrt((r - a) * (r - a) + (o - s) * (o - s)),
            u = l / this.twoTouchDistance;
            u >= 1.3 ? this.globe.animateIn(function() {
                e.twoTouchDistance = l
            }) : u <= .7 && this.globe.animateOut(function() {
                e.twoTouchDistance = l
            })
        },
        t.prototype._onTouchMove = function(t) {
            if (t.preventDefault(), this.down && !this.globe.isAnimating()) {
                var e = t.targetTouches.length;
                1 === e ? this._onTouchMoveOne(t) : 2 === e && this._onTouchMoveTwo(t)
            }
        },
        t.prototype._onTouchEnd = function(t) {
            var e = t.targetTouches.length;
            0 === e ? this._onTouchZero(t) : 1 === e ? this._onTouchOne(t) : 2 === e ? this._onTouchTwo(t) : this._onTouchMulti()
        },
        t
    } ();
    e.
default = a
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(25),
    n = i(39),
    a = function(t) {
        function e(e) {
            void 0 === e && (e = "Default");
            var i = t.call(this, e) || this;
            return i.idx = 0,
            i
        }
        return r(e, t),
        e.prototype.getTileUrl = function(t, e, i) {
            void 0 === this.idx && (this.idx = 0);
            var r = "y";
            switch (this.style) {
            case "Satellite":
                r = "s";
                break;
            case "Road":
                r = "m";
                break;
            case "RoadOnly":
                r = "h";
                break;
            case "Terrain":
                r = "p";
                break;
            case "TerrainOnly":
                r = "t"
            }
            var o = "//mt" + this.idx + ".google.cn/maps/vt?lyrs=" + r + "&hl=zh-CN&gl=CN&&x=" + i + "&y=" + e + "&z=" + t;
            return this.idx++,
            this.idx >= 4 && (this.idx = 0),
            o
        },
        e
    } (o.
default);
    e.GoogleTiledLayer = a;
    var s = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.idx = 0,
            e
        }
        return r(e, t),
        e.prototype.getTileUrl = function(t, e, i) {
            void 0 === this.idx && (this.idx = 0);
            var r = "//mt" + this.idx + ".google.cn/vt/imgtp=png32&lyrs=h@365000000&hl=zh-CN&gl=cn&x=" + i + "&y=" + e + "&z=" + t + "&s=Galil";
            return this.idx++,
            this.idx >= 4 && (this.idx = 0),
            r
        },
        e
    } (n.
default);
    e.GoogleLabelLayer = s
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(5),
    n = i(7),
    a = i(26),
    s = i(21),
    l = i(38),
    u = function(t) {
        function e(e) {
            void 0 === e && (e = "");
            var i = t.call(this) || this;
            i.style = e,
            i.imageRequestOptimizeDeltaLevel = 2,
            i.globe = null;
            var r = new l.
        default(0);
            i.add(r);
            var o = new l.
        default(1);
            return i.add(o),
            i
        }
        return r(e, t),
        e.prototype.destroy = function() {
            this.globe = null,
            t.prototype.destroy.call(this)
        },
        e.prototype._checkSubLayer1 = function() {
            var t = this.children[1];
            if (t && 1 === t.getLevel() && 4 !== t.children.length) {
                t.children = [];
                for (var e = 0; e <= 1; e++) for (var i = 0; i <= 1; i++) {
                    var r = {
                        level: 1,
                        row: e,
                        column: i,
                        url: ""
                    };
                    r.url = this.getTileUrl(r.level, r.row, r.column);
                    var o = a.
                default.getInstance(r.level, r.row, r.column, r.url);
                    t.add(o)
                }
            }
        },
        e.prototype.refresh = function() {
            if (this.globe) {
                this._checkSubLayer1();
                var t = this.globe.camera,
                e = this.globe.getLevel(),
                i = {
                    threshold: 1
                };
                i.threshold = 1;
                var r, o = t.getVisibleTilesByLevel(e, i),
                a = [],
                s = o;
                for (r = e; r >= 2; r--) a[r] = s,
                s = s.map(function(t) {
                    return t.getParent()
                }),
                s = n.
            default.filterRepeatArray(s);
                for (r = 2; r <= e; r++) {
                    var l = e === r || e - r > this.imageRequestOptimizeDeltaLevel;
                    this.children[r].updateTiles(r, a[r], l)
                }
            }
        },
        e.prototype.updateSubLayerCount = function() {
            if (this.globe) {
                var t, e, i = this.globe.getLevel(),
                r = this.children.length,
                o = i + 1 - r;
                if (o > 0) for (t = 0; t < o; t++) e = new l.
            default(t + r),
                this.add(e);
                else if (o < 0) for (o *= -1, t = 0; t < o; t++) {
                    var n = this.children.length - 1;
                    if (! (n >= 2)) break;
                    e = this.children[n],
                    this.remove(e)
                }
            }
        },
        e.prototype._getReadyTile = function(t) {
            var e = t.level,
            i = t.row,
            r = t.column,
            o = this.children[e].findTile(e, i, r);
            return 1 === e ? o: o && o.isReady() ? o: this._getReadyTile(t.getParent())
        },
        e.prototype.updateTileVisibility = function() {
            var t = this;
            if (this.globe) {
                var e = this.globe.getLevel();
                this.children.forEach(function(t) {
                    t.showAllTiles()
                });
                var i = e - this.imageRequestOptimizeDeltaLevel - 1;
                if (i >= 1) {
                    var r = this.globe.camera,
                    o = r.getTileGridsOfBoundary(i, !1);
                    if (8 === o.length) {
                        o = n.
                    default.filterRepeatArray(o);
                        for (var a = 0; a <= i; a++) this.children[a].hideAllTiles();
                        o.forEach(function(e) {
                            var i = t._getReadyTile(e);
                            i && (i.setVisible(!0), i.parent.visible = !0)
                        })
                    }
                }
            }
        },
        e.prototype.onDraw = function(e) {
            var i = this.globe && this.globe.gl;
            if (i) {
                var r = a.
            default.findProgram();
                if (r) {
                    r.use();
                    var n = e.getProjViewMatrixForDraw(),
                    s = r.getUniformLocation("uPMVMatrix");
                    i.uniformMatrix4fv(s, !1, n.getFloat32Array()),
                    i.activeTexture(o.
                default.gl.TEXTURE0);
                    var l = r.getUniformLocation("uSampler");
                    i.uniform1i(l, 0),
                    i.depthFunc(o.
                default.gl.ALWAYS),
                    t.prototype.onDraw.call(this, e),
                    i.depthFunc(o.
                default.gl.LEQUAL)
                }
            }
        },
        e.prototype.getExtent = function() {
            if (this.globe.isRenderingPaused()) return null;
            var t = this.children[this.children.length - 1];
            return t.getExtent()
        },
        e.prototype.wrapUrlWithProxy = function(t) {
            return n.
        default.wrapUrlWithProxy(t)
        },
        e.prototype.getLastLevelVisibleTileGrids = function() {
            var t = null,
            e = this.children[this.children.length - 1];
            return e && (t = e.getVisibleTileGrids()),
            t
        },
        e.prototype.logVisibleTiles = function() {
            var t = [];
            this.children.forEach(function(e) {
                var i = e.children.length,
                r = e.getShouldDrawTilesCount();
                t.push({
                    level: e.getLevel(),
                    allCount: i,
                    visibleCount: r
                })
            }),
            console.table(t)
        },
        e
    } (s.
default);
    e.
default = u
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(5),
    n = i(19),
    a = i(11),
    s = i(27),
    l = i(30),
    u = i(33),
    c = i(37),
    h = i(35),
    f = i(16),
    p = function() {
        function t(t, e, i, r) {
            this.level = t,
            this.row = e,
            this.column = i,
            this.url = r,
            this.minLon = null,
            this.minLat = null,
            this.maxLon = null,
            this.maxLat = null,
            this.minX = null,
            this.minY = null,
            this.maxX = null,
            this.maxY = null,
            this.segment = 1,
            this._setTileInfo(),
            this._handleGlobeTile(),
            this.material = new l.
        default(this.level, this.url)
        }
        return t.prototype._setTileInfo = function() {
            var t = a.
        default.getTileGeographicEnvelopByGrid(this.level, this.row, this.column);
            this.minLon = t.minLon,
            this.minLat = t.minLat,
            this.maxLon = t.maxLon,
            this.maxLat = t.maxLat;
            var e = a.
        default.degreeGeographicToWebMercator(this.minLon, this.minLat),
            i = a.
        default.degreeGeographicToWebMercator(this.maxLon, this.maxLat);
            this.minX = e[0],
            this.minY = e[1],
            this.maxX = i[0],
            this.maxY = i[1]
        },
        t.prototype._handleGlobeTile = function() {
            var t = o.
        default.BASE_LEVEL;
            if (this.level < t) {
                var e = t - this.level;
                this.segment = Math.pow(2, e)
            } else this.segment = 1;
            this._handleTile()
        },
        t.prototype._handleTile = function() {
            this.visible = !0;
            var t, e, i = [],
            r = [],
            n = [],
            s = [],
            l = [],
            f = (this.maxX - this.minX) / this.segment,
            p = (this.maxY - this.minY) / this.segment,
            d = 1 / this.segment,
            v = 0,
            g = [],
            y = [],
            m = [],
            _ = [];
            for (t = 0; t <= this.segment; t++) {
                g.push(this.minX + t * f),
                y.push(this.maxY - t * p);
                var w = t * d;
                m.push(w),
                _.push(1 - w)
            }
            var b = 0;
            for (t = 0; t <= this.segment; t++) for (e = 0; e <= this.segment; e++) {
                var L = g[e],
                T = y[t],
                M = 0,
                x = a.
            default.webMercatorToDegreeGeographic(L, T),
                P = a.
            default.geographicToCartesianCoord(x[0], x[1], o.
            default.EARTH_RADIUS + M + v).getArray();
                n = n.concat(P),
                l = l.concat(m[e], _[t]);
                var E = new c.
            default({
                    p:
                    P,
                    i: b,
                    uv: [m[e], _[t]]
                });
                i.push(E),
                b++
            }
            for (t = 0; t < this.segment; t++) for (e = 0; e < this.segment; e++) {
                var A = (this.segment + 1) * t + e,
                R = (this.segment + 1) * (t + 1) + e,
                O = R + 1,
                C = A + 1;
                s = s.concat(A, R, O),
                s = s.concat(O, C, A);
                var D = i[A],
                I = i[R],
                B = i[O],
                V = i[C],
                S = new h.
            default(D, I, B),
                F = new h.
            default(B, V, D);
                r.push(S, F)
            }
            this.geometry = new u.
        default(i, r)
        },
        t
    } (),
    d = function(t) {
        function e(e, i, r) {
            var o = t.call(this, e, i) || this;
            return o.geometry = e,
            o.material = i,
            o.tileInfo = r,
            o
        }
        return r(e, t),
        e.getInstance = function(t, i, r, o) {
            var n = new p(t, i, r, o);
            return new e(n.geometry, n.material, n)
        },
        e.prototype.updateShaderUniforms = function(t) {},
        e.prototype.getExtent = function() {
            var t = this.tileInfo;
            new f.
        default(t.level, t.row, t.column);
            return new n.
        default(this.tileInfo.minLon, this.tileInfo.minLat, this.tileInfo.maxLon, this.tileInfo.maxLat)
        },
        e.prototype.shouldDraw = function(e) {
            return this.tileInfo.visible && t.prototype.shouldDraw.call(this, e)
        },
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.subTiledLayer = null
        },
        e
    } (s.
default);
    e.
default = d
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(5),
    n = i(28),
    a = i(29),
    s = "\nattribute vec3 aPosition;\nattribute vec2 aUV;\nvarying vec2 vUV;\nuniform mat4 uPMVMatrix;\n\nvoid main()\n{\n\tgl_Position = uPMVMatrix * vec4(aPosition,1.0);\n\tvUV = aUV;\n}\n",
    l = "\nprecision mediump float;\nvarying vec2 vUV;\nuniform sampler2D uSampler;\n\nvoid main()\n{\n\tgl_FragColor = texture2D(uSampler, vec2(vUV.s, vUV.t));\n}\n",
    u = function(t) {
        function e(e, i, r) {
            void 0 === r && (r = null);
            var o = t.call(this, e, i, r) || this;
            return o.geometry = e,
            o.material = i,
            o.attributes = r,
            o.geometry.calculateVBO(),
            o.geometry.calculateIBO(),
            o.geometry.calculateUVBO(),
            o
        }
        return r(e, t),
        e.prototype.isGeometryReady = function() {
            return !! this.geometry.vbo && !!this.geometry.ibo && !!this.geometry.uvbo
        },
        e.prototype.isReady = function() {
            return this.isGeometryReady() && t.prototype.isReady.call(this)
        },
        e.findProgram = function() {
            return n.
        default.findProgram(s, l)
        },
        e.prototype.createProgram = function() {
            return n.
        default.getProgram(s, l)
        },
        e.prototype.updateShaderUniforms = function(t) {
            var e = o.
        default.gl,
            i = t.getProjViewMatrixForDraw().multiplyMatrix(this.geometry.getMatrix()),
            r = this.program.getUniformLocation("uPMVMatrix");
            e.uniformMatrix4fv(r, !1, i.getFloat32Array()),
            e.activeTexture(o.
        default.gl.TEXTURE0);
            var n = this.program.getUniformLocation("uSampler");
            e.uniform1i(n, 0)
        },
        e.prototype.onDraw = function(t) {
            var e = o.
        default.gl;
            this.updateShaderUniforms(t);
            var i = this.program.getAttribLocation("aPosition");
            this.program.enableVertexAttribArray("aPosition"),
            this.geometry.vbo.bind(),
            e.vertexAttribPointer(i, 3, o.
        default.gl.FLOAT, !1, 0, 0);
            var r = this.program.getAttribLocation("aUV");
            this.program.enableVertexAttribArray("aUV"),
            this.geometry.uvbo.bind(),
            e.vertexAttribPointer(r, 2, o.
        default.gl.FLOAT, !1, 0, 0),
            e.bindTexture(o.
        default.gl.TEXTURE_2D, this.material.texture),
            this.geometry.ibo.bind();
            var n = 3 * this.geometry.triangles.length;
            e.drawElements(o.
        default.gl.TRIANGLES, n, o.
        default.gl.UNSIGNED_SHORT, 0)
        },
        e.prototype.ifIntersectLocalLine = function(t) {
            return !! this.geometry && this.geometry.ifIntersectLocalLine(t)
        },
        e.prototype.ifIntersectWorldLine = function(t) {
            return !! this.geometry && this.geometry.ifIntersectWorldLine(t)
        },
        e
    } (a.
default);
    e.
default = u
},
function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(5),
    o = function() {
        function t(t, e) {
            this.vs = t,
            this.fs = e,
            this.ready = !1,
            this.activeInfosObject = {},
            this._init()
        }
        return t.getProgram = function(e, i) {
            var r = t.findProgram(e, i);
            return r || (r = new t(e, i), t.programs.push(r)),
            r
        },
        t.findProgram = function(e, i) {
            var r = null;
            return t.programs.some(function(t) {
                return t.vs === e && t.fs === i && (r = t, !0)
            }),
            r
        },
        t.prototype.use = function() {
            this.ready && t.currentProgram !== this && (r.
        default.gl.useProgram(this.program), t.currentProgram = this)
        },
        t.prototype.updateActiveAttribInfos = function() {
            for (var t, e = r.
        default.gl.getProgramParameter(this.program, r.
        default.gl.ACTIVE_ATTRIBUTES), i = 0; i < e; i++) t = r.
        default.gl.getActiveAttrib(this.program, i),
            t.loc = r.
        default.gl.getAttribLocation(this.program, t.name),
            t.isAttribute = !0,
            this.activeInfosObject[t.name] = t
        },
        t.prototype.updateActiveUniformInfos = function() {
            for (var t, e = r.
        default.gl.getProgramParameter(this.program, r.
        default.gl.ACTIVE_UNIFORMS), i = 0; i < e; i++) t = r.
        default.gl.getActiveUniform(this.program, i),
            t.loc = r.
        default.gl.getUniformLocation(this.program, t.name),
            t.isAttribute = !1,
            this.activeInfosObject[t.name] = t
        },
        t.prototype.getLocation = function(t) {
            var e = -1,
            i = this.activeInfosObject[t];
            return i && (e = i.loc),
            e
        },
        t.prototype.getAttribLocation = function(t) {
            var e = -1,
            i = this.activeInfosObject[t];
            return i && i.isAttribute && (e = i.loc),
            e
        },
        t.prototype.getUniformLocation = function(t) {
            var e, i = this.activeInfosObject[t];
            return i && !i.isAttribute && (e = i.loc),
            e
        },
        t.prototype.getVertexAttrib = function() {},
        t.prototype.getUniform = function(t) {
            var e, i = this.getUniformLocation(t);
            return i && (e = r.
        default.gl.getUniform(this.program, i)),
            e
        },
        t.prototype.enableVertexAttribArray = function(t) {
            var e = this.activeInfosObject[t];
            if (e && e.isAttribute && e.isEnabled !== !0) {
                var i = e.loc;
                r.
            default.gl.enableVertexAttribArray(i),
                e.isEnabled = !0
            }
        },
        t.prototype.disableVertexAttribArray = function(t) {
            var e = this.activeInfosObject[t];
            if (e && e.isAttribute && e.isEnabled !== !1) {
                var i = e.loc;
                r.
            default.gl.disableVertexAttribArray(i),
                e.isEnabled = !1
            }
        },
        t.prototype._init = function() {
            var t = this._getShader(r.
        default.gl.VERTEX_SHADER, this.vs);
            if (t) {
                var e = this._getShader(r.
            default.gl.FRAGMENT_SHADER, this.fs);
                if (e) {
                    if (this.program = r.
                default.gl.createProgram(), r.
                default.gl.attachShader(this.program, t), r.
                default.gl.attachShader(this.program, e), r.
                default.gl.linkProgram(this.program), !r.
                default.gl.getProgramParameter(this.program, r.
                default.gl.LINK_STATUS)) return console.error("Could not link program!"),
                    r.
                default.gl.deleteProgram(this.program),
                    r.
                default.gl.deleteShader(t),
                    r.
                default.gl.deleteShader(e),
                    void(this.program = null);
                    this.updateActiveAttribInfos(),
                    this.updateActiveUniformInfos(),
                    this.ready = !0
                }
            }
        },
        t.prototype._getShader = function(t, e) {
            var i = r.
        default.gl.createShader(t);
            return r.
        default.gl.shaderSource(i, e),
            r.
        default.gl.compileShader(i),
            r.
        default.gl.getShaderParameter(i, r.
        default.gl.COMPILE_STATUS) ? i: (console.error("create shader failed", r.
        default.gl.getShaderInfoLog(i)), r.
        default.gl.deleteShader(i), null)
        },
        t
    } ();
    o.programs = [],
    e.
default = o
},
function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(5),
    o = function() {
        function t(t, e, i) {
            void 0 === t && (t = null),
            void 0 === e && (e = null),
            void 0 === i && (i = null),
            this.geometry = t,
            this.material = e,
            this.attributes = i,
            this.visible = !0,
            this.id = ++r.
        default.idCounter,
            this.parent = null,
            this.program = this.createProgram()
        }
        return t.prototype.setVisible = function(t) {
            this.visible = t
        },
        t.prototype.isReady = function() {
            return !! (this.geometry && this.material && this.material.isReady())
        },
        t.prototype.shouldDraw = function(t) {
            return this.visible && this.isReady()
        },
        t.prototype.draw = function(t) {
            this.shouldDraw(t) && (this.program.use(), this.onDraw(t))
        },
        t.prototype.destroy = function() {
            this.parent = null,
            this.geometry && this.geometry.destroy(),
            this.material && this.material.destroy(),
            this.geometry = null,
            this.material = null
        },
        t
    } ();
    e.
default = o
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(31),
    n = i(22),
    a = function(t) {
        function e(e, i) {
            var r = t.call(this, i, !0) || this;
            return r.level = e >= 0 ? e: 20,
            r
        }
        return r(e, t),
        e.prototype.onLoad = function() {
            this.level <= n.
        default.MAX_LEVEL && n.
        default.add(this.image.src, this.image),
            t.prototype.onLoad.call(this)
        },
        e
    } (o.
default);
    e.
default = a
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(5),
    n = i(32),
    a = i(22),
    s = function(t) {
        function e(e, i) {
            void 0 === e && (e = null),
            void 0 === i && (i = !1);
            var r = t.call(this) || this;
            return r.flipY = i,
            r.ready = !1,
            r.deleted = !1,
            r.texture = o.
        default.gl.createTexture(),
            e && r.setImageOrUrl(e),
            r
        }
        return r(e, t),
        e.prototype.isReady = function() {
            return this.ready && !this.deleted
        },
        e.prototype.setImageOrUrl = function(t) {
            t && (t instanceof Image && t.width > 0 && t.height > 0 ? this.setImage(t) : "string" == typeof t && this.setImageUrl(t))
        },
        e.prototype.setImage = function(t) {
            t.width > 0 && t.height > 0 && (this.ready = !1, this.image = t, this.onLoad())
        },
        e.prototype.setImageUrl = function(t) {
            var e = a.
        default.get(t);
            e ? this.setImage(e) : (this.ready = !1, this.image = new Image, this.image.crossOrigin = "anonymous", this.image.onload = this.onLoad.bind(this), this.image.src = t)
        },
        e.prototype.onLoad = function() {
            if (!this.deleted) {
                var t = o.
            default.gl;
                t.bindTexture(t.TEXTURE_2D, this.texture),
                this.flipY ? t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, 1) : t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, 0),
                t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, this.image),
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR),
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                this.ready = !0
            }
        },
        e.prototype.destroy = function() {
            var t = o.
        default.gl;
            this.texture && t.deleteTexture(this.texture),
            this.image && !this.ready && (this.image.src = ""),
            this.ready = !1,
            this.texture = null,
            this.deleted = !0
        },
        e
    } (n.
default);
    e.
default = s
},
function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
        function t() {}
        return t
    } ();
    e.
default = i
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(34),
    n = function(t) {
        function e(e, i) {
            var r = t.call(this) || this;
            return r.vertices = e,
            r.triangles = i,
            r
        }
        return r(e, t),
        e
    } (o.
default);
    e.
default = n
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(5),
    n = i(35),
    a = i(18),
    s = i(36),
    l = i(12),
    u = i(11),
    c = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.vertices = null,
            e.triangles = null,
            e.vbo = null,
            e.ibo = null,
            e.nbo = null,
            e.uvbo = null,
            e.cbo = null,
            e.box = null,
            e.vertices = [],
            e.triangles = [],
            e
        }
        return r(e, t),
        e.buildPlane = function(t, e, i, r) {
            var o = new n.
        default(t, e, i),
            a = new n.
        default(i, e, r);
            return [o, a]
        },
        e.buildMesh = function(t, i, r, o) {
            var n = new e;
            return n.vertices = [t, i, r, o],
            n.triangles = this.buildPlane(t, i, r, o),
            n
        },
        e.prototype.updateBox = function(t) {
            void 0 === t && (t = !1);
            var e = this.triangles.length,
            i = this.vertices.length;
            if (0 === e || i <= 3) return void(this.box = null);
            if (!this.box || t) {
                for (var r = -(1 / 0), o = -(1 / 0), n = -(1 / 0), a = 1 / 0, s = 1 / 0, u = 1 / 0, c = 0; c < i; c++) {
                    var h = this.vertices[c],
                    f = h.p,
                    p = f[0],
                    d = f[1],
                    v = f[2];
                    p > r && (r = p),
                    d > o && (o = d),
                    v > n && (n = v),
                    p < a && (a = p),
                    d < s && (s = d),
                    v < u && (u = v)
                }
                var g = r - a,
                y = o - s,
                m = n - u,
                _ = Math.sqrt(g * g + y * y + m * m),
                w = new l.
            default((r + a) / 2, (o + s) / 2, (n + u) / 2);
                this.box = {
                    center: w,
                    radius: _
                }
            }
        },
        e.prototype.ifIntersectWorldLine = function(t) {
            var e = u.
        default.convertWorldLineToLocalLine(t, this.matrix);
            return this.ifIntersectLocalLine(e)
        },
        e.prototype.ifIntersectLocalLine = function(t) {
            if (this.updateBox(!1), !this.box) return ! 1;
            var e = u.
        default.getLengthFromVerticeToLine(this.box.center, t);
            if (e > this.box.radius) return ! 1;
            for (var i = this.triangles.length,
            r = 0; r < i; r++) {
                var o = this.triangles[r],
                n = new l.
            default(o.v1.p[0], o.v1.p[1], o.v1.p[2]),
                a = new l.
            default(o.v2.p[0], o.v2.p[1], o.v2.p[2]),
                s = new l.
            default(o.v3.p[0], o.v3.p[1], o.v3.p[2]),
                c = u.
            default.intersectTriangle(t.vertice, t.vector, n, a, s);
                if (c) return ! 0
            }
            return ! 1
        },
        e.prototype.buildTriangles = function() {
            this.vertices = [],
            this.triangles = []
        },
        e.prototype.calculateVBO = function(t) {
            if (void 0 === t && (t = !1), !this.vbo || t) {
                for (var e, i = [], r = 0, n = this.vertices.length; r < n; r++) e = this.vertices[r],
                i.push(e.p[0]),
                i.push(e.p[1]),
                i.push(e.p[2]);
                this.vbo || (this.vbo = new s.
            default(o.
            default.gl.ARRAY_BUFFER)),
                this.vbo.bind(),
                this.vbo.bufferData(i, o.
            default.gl.STATIC_DRAW, !0)
            }
            return this.vbo
        },
        e.prototype.calculateIBO = function(t) {
            if (void 0 === t && (t = !1), !this.ibo || t) {
                for (var e, i = [], r = 0, n = this.triangles.length; r < n; r++) e = this.triangles[r],
                i.push(e.v1.i),
                i.push(e.v2.i),
                i.push(e.v3.i);
                this.ibo || (this.ibo = new s.
            default(o.
            default.gl.ELEMENT_ARRAY_BUFFER)),
                this.ibo.bind(),
                this.ibo.bufferData(i, o.
            default.gl.STATIC_DRAW, !0)
            }
            return this.ibo
        },
        e.prototype.calculateNBO = function(t) {
            if (void 0 === t && (t = !1), !this.nbo || t) {
                for (var e, i = [], r = 0, n = this.vertices.length; r < n; r++) e = this.vertices[r],
                i.push(e.n[0]),
                i.push(e.n[1]),
                i.push(e.n[2]);
                this.nbo || (this.nbo = new s.
            default(o.
            default.gl.ARRAY_BUFFER)),
                this.nbo.bind(),
                this.nbo.bufferData(i, o.
            default.gl.STATIC_DRAW, !0)
            }
            return this.nbo
        },
        e.prototype.calculateUVBO = function(t) {
            if (void 0 === t && (t = !1), !this.uvbo || t) {
                for (var e, i = [], r = 0, n = this.vertices.length; r < n; r++) e = this.vertices[r],
                i.push(e.uv[0]),
                i.push(e.uv[1]);
                this.uvbo || (this.uvbo = new s.
            default(o.
            default.gl.ARRAY_BUFFER)),
                this.uvbo.bind(),
                this.uvbo.bufferData(i, o.
            default.gl.STATIC_DRAW, !0)
            }
            return this.uvbo
        },
        e.prototype.calculateCBO = function(t) {
            if (void 0 === t && (t = !1), !this.cbo || t) {
                for (var e, i = [], r = 0, n = this.vertices.length; r < n; r++) e = this.vertices[r],
                i.push(e.c[0]),
                i.push(e.c[1]),
                i.push(e.c[2]);
                this.cbo || (this.cbo = new s.
            default(o.
            default.gl.ARRAY_BUFFER)),
                this.cbo.bind(),
                this.cbo.bufferData(i, o.
            default.gl.STATIC_DRAW, !0)
            }
            return this.cbo
        },
        e.prototype.destroy = function() {
            this.vbo && this.vbo.destroy(),
            this.ibo && this.ibo.destroy(),
            this.nbo && this.nbo.destroy(),
            this.cbo && this.cbo.destroy(),
            this.uvbo && this.uvbo.destroy(),
            this.vbo = null,
            this.ibo = null,
            this.nbo = null,
            this.cbo = null,
            this.uvbo = null,
            this.vertices = [],
            this.triangles = []
        },
        e
    } (a.
default);
    e.
default = c
},
function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
        function t(t, e, i) {
            this.v1 = t,
            this.v2 = e,
            this.v3 = i
        }
        return t.prototype.setColor = function(t) {
            this.v1.c = this.v2.c = this.v3.c = t
        },
        t.assembleQuad = function(e, i, r, o) {
            return [new t(e, i, r), new t(r, i, o)]
        },
        t
    } ();
    e.
default = i
},
function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(5),
    o = 200,
    n = [],
    a = function() {
        function t(t) {
            this.target = t,
            n.length > 0 ? this.buffer = n.pop() : this.buffer = r.
        default.gl.createBuffer(),
            this.buffer = r.
        default.gl.createBuffer()
        }
        return t.prototype.bind = function() {
            r.
        default.gl.bindBuffer(this.target, this.buffer)
        },
        t.prototype.bufferData = function(t, e, i) {
            void 0 === i && (i = !1),
            i || this.bind();
            var o = r.
        default.gl;
            this.target === r.
        default.gl.ARRAY_BUFFER ? o.bufferData(r.
        default.gl.ARRAY_BUFFER, new Float32Array(t), e) : this.target === r.
        default.gl.ELEMENT_ARRAY_BUFFER && o.bufferData(r.
        default.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(t), e)
        },
        t.prototype.destroy = function() {
            this.buffer && (n.length < o ? n.push(this.buffer) : r.
        default.gl.deleteBuffer(this.buffer), r.
        default.gl.deleteBuffer(this.buffer)),
            this.buffer = null
        },
        t
    } ();
    e.
default = a
},
function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
        function t(t) {
            this.i = t.i,
            this.p = t.p,
            this.uv = t.uv,
            this.n = t.n,
            this.c = t.c
        }
        return t.prototype.clone = function() {
            var e = {};
            return e.i = this.i,
            e.p = this.p.slice(),
            e.uv = this.uv.slice(),
            e.n = this.n.slice(),
            e.c = this.c.slice(),
            new t(e)
        },
        t
    } ();
    e.
default = i
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(19),
    n = i(16),
    a = i(21),
    s = i(26),
    l = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.level = e,
            i
        }
        return r(e, t),
        e.prototype.getLevel = function() {
            return this.level
        },
        e.prototype.showAllTiles = function() {
            this.visible = !0,
            this.children.forEach(function(t) {
                t.setVisible(!0)
            })
        },
        e.prototype.hideAllTiles = function() {
            this.visible = !1,
            this.children.forEach(function(t) {
                t.setVisible(!1)
            })
        },
        e.prototype.add = function(e) {
            e.tileInfo.level === this.level && (t.prototype.add.call(this, e), e.subTiledLayer = this)
        },
        e.prototype.findTile = function(t, e, i) {
            for (var r = this.children.length,
            o = 0; o < r; o++) {
                var n = this.children[o];
                if (n.tileInfo.level === t && n.tileInfo.row === e && n.tileInfo.column === i) return n
            }
            return null
        },
        e.prototype.updateTiles = function(t, e, i) {
            function r(t, e, i, r) {
                for (var o = {
                    isExist: !1,
                    index: -1
                },
                n = 0; n < t.length; n++) {
                    var a = t[n];
                    if (a.level === e && a.row === i && a.column === r) return o.isExist = !0,
                    o.index = n,
                    o
                }
                return o
            }
            this.level = t;
            var o, n, a = [];
            for (o = 0; o < this.children.length; o++) {
                n = this.children[o];
                var l = r(e, n.tileInfo.level, n.tileInfo.row, n.tileInfo.column),
                u = l.isExist;
                u ? e.splice(l.index, 1) : a.push(n)
            }
            for (; a.length > 0;) {
                var c = this.remove(a[0]);
                a.splice(0, 1),
                c || console.debug("subTiledLayer.remove(tilesNeedDelete[0])失败")
            }
            if (i) for (o = 0; o < e.length; o++) {
                var h = e[o],
                f = {
                    level: h.level,
                    row: h.row,
                    column: h.column,
                    url: ""
                };
                f.url = this.getTileUrl(f.level, f.row, f.column),
                n = s.
            default.getInstance(f.level, f.row, f.column, f.url),
                this.add(n)
            }
        },
        e.prototype.getTileUrl = function(t, e, i) {
            return this.parent && "function" == typeof this.parent.getTileUrl ? this.parent.getTileUrl(t, e, i) : ""
        },
        e.prototype.checkIfAllTilesLoaded = function() {
            for (var t = 0; t < this.children.length; t++) {
                var e = this.children[t];
                if (e) {
                    var i = e.material.isReady();
                    if (!i) return ! 1
                }
            }
            return ! 0
        },
        e.prototype.getExtent = function() {
            return o.
        default.union(this.getExtents())
        },
        e.prototype.getExtents = function() {
            return this.children.map(function(t) {
                return t.getExtent()
            })
        },
        e.prototype.getVisibleTileGrids = function() {
            var t = [];
            return this.visible && this.children.forEach(function(e) {
                e.visible && t.push(new n.
            default(e.tileInfo.level, e.tileInfo.row, e.tileInfo.column))
            }),
            t
        },
        e.prototype.getShouldDrawTilesCount = function() {
            return this.visible ? this.children.filter(function(t) {
                return t.visible && t.isReady()
            }).length: 0
        },
        e
    } (a.
default);
    e.
default = l
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(5),
    n = i(26),
    a = i(38),
    s = function(t) {
        function e() {
            var e = t.call(this, -1) || this;
            return e.minLevel = 4,
            e
        }
        return r(e, t),
        e.prototype.onDraw = function(e) {
            var i = n.
        default.findProgram();
            if (i) {
                i.use();
                var r = o.
            default.gl;
                r.enable(r.BLEND),
                r.blendFunc(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA);
                var a = e.getProjViewMatrixForDraw(),
                s = i.getUniformLocation("uPMVMatrix");
                r.uniformMatrix4fv(s, !1, a.getFloat32Array()),
                r.activeTexture(r.TEXTURE0);
                var l = i.getUniformLocation("uSampler");
                r.uniform1i(l, 0),
                r.depthFunc(r.ALWAYS),
                t.prototype.onDraw.call(this, e),
                r.depthFunc(r.LEQUAL),
                r.disable(r.BLEND)
            }
        },
        e.prototype.updateTiles = function(e, i) {
            var r = this,
            o = i.filter(function(t) {
                return t.level >= r.minLevel
            });
            t.prototype.updateTiles.call(this, e, o, !0)
        },
        e
    } (a.
default);
    e.
default = s
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(25),
    n = i(39),
    a = function(t) {
        function e(e) {
            void 0 === e && (e = "Default");
            var i = t.call(this, e) || this;
            return i.idx = 1,
            i
        }
        return r(e, t),
        e.prototype.getTileUrl = function(t, e, i) {
            void 0 === this.idx && (this.idx = 1);
            var r = "";
            return r = "Satellite" === this.style ? "//webst0" + this.idx + ".is.autonavi.com/appmaptile?style=6&x=" + i + "&y=" + e + "&z=" + t: "//webst0" + this.idx + ".is.autonavi.com/appmaptile?style=7&x=" + i + "&y=" + e + "&z=" + t,
            this.idx++,
            this.idx >= 5 && (this.idx = 1),
            r
        },
        e
    } (o.
default);
    e.AutonaviTiledLayer = a;
    var s = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.idx = 1,
            e
        }
        return r(e, t),
        e.prototype.getTileUrl = function(t, e, i) {
            void 0 === this.idx && (this.idx = 1);
            var r = "//webst0" + this.idx + ".is.autonavi.com/appmaptile?style=8&x=" + i + "&y=" + e + "&z=" + t;
            return this.idx++,
            this.idx >= 5 && (this.idx = 1),
            r
        },
        e
    } (n.
default);
    e.AutonaviLabelLayer = s
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(5),
    n = i(27),
    a = i(42),
    s = i(31),
    l = i(13),
    u = i(43),
    c = function(t) {
        function e(e, i) {
            var r = t.call(this, e, i) || this;
            return r.geometry = e,
            r.material = i,
            r
        }
        return r(e, t),
        e.getInstance = function() {
            var t = new a.
        default,
            i = new s.
        default(u, !1);
            return new e(t, i)
        },
        e.prototype.shouldDraw = function(e) {
            return ! e.isEarthFullOverlapScreen() && t.prototype.shouldDraw.call(this, e)
        },
        e.prototype.onDraw = function(e) {
            var i = o.
        default.gl;
            i.disable(o.
        default.gl.DEPTH_TEST),
            i.depthMask(!1),
            i.enable(o.
        default.gl.BLEND),
            i.blendFunc(o.
        default.gl.SRC_ALPHA, o.
        default.gl.ONE_MINUS_SRC_ALPHA),
            this.geometry.getMatrix().setUnitMatrix();
            var r = o.
        default.EARTH_RADIUS,
            n = e.getDistance2EarthOrigin(),
            a = Math.sqrt(n * n - r * r),
            s = a / n,
            u = a * s,
            c = e.getLightDirection().setLength(u),
            h = l.
        default.verticePlusVector(e.getPosition(), c);
            this.geometry.setPosition(h),
            this.geometry.setVectorX(e.getVectorX()),
            this.geometry.setVectorY(e.getVectorY()),
            this.geometry.setVectorZ(e.getVectorZ()),
            this.geometry.localScale(s, s, s),
            t.prototype.onDraw.call(this, e),
            i.enable(o.
        default.gl.DEPTH_TEST),
            i.depthMask(!0),
            i.disable(o.
        default.gl.BLEND)
        },
        e
    } (n.
default);
    e.
default = c
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(5),
    n = i(37),
    a = i(35),
    s = i(34),
    l = i(12),
    u = i(17),
    c = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.segment = 360,
            e.radius1 = .99 * o.
        default.EARTH_RADIUS,
            e.radius2 = 1.01 * o.
        default.EARTH_RADIUS,
            e.buildTriangles(),
            e
        }
        return r(e, t),
        e.prototype.buildTriangles = function() {
            this.vertices = [],
            this.triangles = [];
            var t = new u.
        default;
            t.setPosition(new l.
        default(0, this.radius1, 0));
            var e = [],
            i = new u.
        default;
            i.setPosition(new l.
        default(0, this.radius2, 0));
            for (var r = [], o = 2 * -Math.PI / this.segment, s = 1 / this.segment, c = 0, h = 0; h <= this.segment; h++) {
                if (c = s * h, c > 1 && (c = 1), e.push(new n.
            default({
                    i:
                    h,
                    p: t.getPosition().getArray(),
                    uv: [c, 1]
                })), r.push(new n.
            default({
                    i:
                    this.segment + 1 + h,
                    p: i.getPosition().getArray(),
                    uv: [c, 0]
                })), h > 0) {
                    var f = r[h - 1],
                    p = e[h - 1],
                    d = r[h],
                    v = e[h]; (g = this.triangles).push.apply(g, a.
                default.assembleQuad(f, p, d, v))
                }
                t.worldRotateZ(o),
                i.worldRotateZ(o)
            } (y = this.vertices).push.apply(y, e.concat(r));
            var g, y
        }, e
    } (s.
default);
    e.
default = c
},
function(t, e, i) {
    t.exports = i.p + "f42e74f3a391873a7d0d2ec2ae63eff9.png"
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(45),
    n = i(46),
    a = i(47),
    s = function(t) {
        function e(e, i) {
            var r = t.call(this, e) || this;
            return r.globe = i,
            r
        }
        return r(e, t),
        e.prototype.setLonLat = function(t, e) {
            this.setLonlats([[t, e]])
        },
        e.prototype.destroy = function() {
            this.globe = null,
            t.prototype.destroy.call(this)
        },
        e.prototype.isReady = function() {
            return this.globe && this.globe.camera.isEarthFullOverlapScreen() && t.prototype.isReady.call(this)
        },
        e.getInstance = function(t) {
            var i = new n.
        default(a, 24);
            return new e(i, t)
        },
        e
    } (o.
default);
    e.
default = s
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(5),
    n = i(11),
    a = i(28),
    s = i(29),
    l = i(36),
    u = "\nattribute vec3 aPosition;\nuniform mat4 uPMVMatrix;\nuniform float uSize;\n\nvoid main(void) {\n  gl_Position = uPMVMatrix * vec4(aPosition, 1.0);\n  gl_PointSize = uSize;\n}\n",
    c = "\nprecision mediump float;\nuniform sampler2D uSampler;\n\nvoid main()\n{\n\tvec4 color = texture2D(uSampler, vec2(gl_PointCoord.x, gl_PointCoord.y));\n  if(color.a == 0.0){\n    discard;\n  }\n  gl_FragColor = color;\n}\n",
    h = function(t) {
        function e(e) {
            var i = t.call(this, null, e) || this;
            return i.material = e,
            i.vbo = null,
            i.vertices = null,
            i.vbo = new l.
        default(o.
        default.gl.ARRAY_BUFFER),
            i.vertices = [],
            i
        }
        return r(e, t),
        e.prototype.createProgram = function() {
            return a.
        default.getProgram(u, c)
        },
        e.prototype.isReady = function() {
            return !! (this.vertices.length > 0 && this.material && this.material.isReady())
        },
        e.prototype.onDraw = function(t) {
            var e = o.
        default.gl;
            e.disable(o.
        default.gl.DEPTH_TEST),
            e.depthMask(!1),
            e.enable(o.
        default.gl.BLEND),
            e.blendFunc(o.
        default.gl.SRC_ALPHA, o.
        default.gl.ONE_MINUS_SRC_ALPHA);
            var i = this.program.getAttribLocation("aPosition");
            this.program.enableVertexAttribArray("aPosition"),
            this.vbo.bind();
            var r = [];
            this.vertices.map(function(t) {
                r.push(t.x, t.y, t.z)
            }),
            this.vbo.bufferData(r, o.
        default.gl.DYNAMIC_DRAW, !0),
            e.vertexAttribPointer(i, 3, o.
        default.gl.FLOAT, !1, 0, 0);
            var n = t.getProjViewMatrixForDraw(),
            a = this.program.getUniformLocation("uPMVMatrix");
            e.uniformMatrix4fv(a, !1, n.getFloat32Array());
            var s = this.program.getUniformLocation("uSize");
            e.uniform1f(s, this.material.size);
            var l = this.program.getUniformLocation("uSampler");
            e.activeTexture(e.TEXTURE0),
            e.bindTexture(e.TEXTURE_2D, this.material.texture),
            e.uniform1i(l, 0),
            e.drawArrays(e.POINTS, 0, r.length / 3),
            e.enable(e.DEPTH_TEST),
            e.depthMask(!0),
            e.disable(e.BLEND)
        },
        e.prototype.setLonlats = function(t) {
            var i = this;
            e.prototype.clear.apply(this),
            this.vertices = [],
            t.forEach(function(t) {
                var e = n.
            default.geographicToCartesianCoord(t[0], t[1], o.
            default.EARTH_RADIUS + .001);
                i.vertices.push(e)
            })
        },
        e.prototype.clear = function() {
            this.vertices = []
        },
        e
    } (s.
default);
    e.
default = h
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(31),
    n = function(t) {
        function e(e, i) {
            void 0 === i && (i = 16);
            var r = t.call(this, e, !1) || this;
            return r.size = i,
            r
        }
        return r(e, t),
        e
    } (o.
default);
    e.
default = n
},
function(t, e, i) {
    t.exports = i.p + "0a1a7c4881e6fd01b9ef9772a7e1b2f3.png"
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(5),
    n = i(7),
    a = i(11),
    s = i(13),
    l = i(37),
    u = i(34),
    c = i(27),
    h = i(21),
    f = i(31),
    p = i(49),
    d = i(19),
    v = i(50),
    g = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.keyword = null,
            e.searchExtentMode = !1,
            e.globe = null,
            e.currentHighLightPoi = null,
            e.highlightListener = null,
            e.unHighlightListener = null,
            e.iconsWidth = 874,
            e.iconsHeight = 524,
            e.iconsRow = 6,
            e.iconsColumn = 10,
            e.MAX_POI_COUNT = e.iconsColumn,
            e.validPinIconWidth = 50,
            e.validPinIconHeight = 70,
            e.normalMaterialRow = 3,
            e.highLightMaterialRow = 1,
            e.pinIconWidth = e.iconsWidth / e.iconsColumn,
            e.pinIconHeight = e.iconsHeight / e.iconsRow,
            e.pinIconDeltaU = e.pinIconWidth / e.iconsWidth,
            e.pinIconDeltaV = e.pinIconHeight / e.iconsHeight,
            e.validPinIconDeltaU = e.validPinIconWidth / e.iconsWidth,
            e.validPinIconDeltaV = e.validPinIconHeight / e.iconsHeight,
            e.validPinIconOffsetU = (e.pinIconDeltaU - e.validPinIconDeltaU) / 2,
            e.validPinIconOffsetV = (e.pinIconDeltaV - e.validPinIconDeltaV) / 2,
            e.poiPixelWidth = 30,
            e.poiPixelHeight = 42,
            n.
        default.subscribe("extent-change",
            function() {
                e.searchExtentMode && e.keyword && e.search(e.keyword)
            }),
            n.
        default.subscribe("level-change",
            function() {
                if (e.children.length > 0) {
                    var t = e.globe.camera.getResolution();
                    e.children.forEach(function(e) {
                        var i = t / e.geometry.resolution;
                        e.geometry.localScale(i, i, i),
                        e.geometry.resolution = t
                    })
                }
            }),
            e.setPickListener(function(t) {
                e.currentHighLightPoi !== t && (e.unHighlightPoi(), e.highlightPoi(t))
            }),
            e
        }
        return r(e, t),
        e.getInstance = function() {
            return new e
        },
        e.prototype._getUV = function(t, e) {
            var i = this.pinIconDeltaV * t + this.validPinIconOffsetV,
            r = i + this.validPinIconDeltaV,
            o = this.pinIconDeltaU * e + this.validPinIconOffsetU,
            n = o + this.validPinIconDeltaU,
            a = [o, i],
            s = [o, r],
            l = [n, i],
            u = [n, r];
            return [a, s, l, u]
        },
        e.prototype.getHighlightPoi = function() {
            return this.currentHighLightPoi
        },
        e.prototype.highlightPoi = function(t) {
            this.currentHighLightPoi !== t && (this.unHighlightPoi(), this.currentHighLightPoi = t, this._updateMaterial(this.currentHighLightPoi, this.highLightMaterialRow), this.moveChildToLastPosition(this.currentHighLightPoi), this.highlightListener && this.highlightListener(this.currentHighLightPoi))
        },
        e.prototype.unHighlightPoi = function() {
            this.currentHighLightPoi && (this._updateMaterial(this.currentHighLightPoi, this.normalMaterialRow), this.currentHighLightPoi = null, this.unHighlightListener && this.unHighlightListener())
        },
        e.prototype.setHighlightListener = function(t) {
            this.highlightListener = t
        },
        e.prototype.setUnHighlightListener = function(t) {
            this.unHighlightListener = t
        },
        e.prototype._updateMaterial = function(t, e) {
            var i = t.columnIndex,
            r = this._getUV(e, i),
            o = t.geometry.vertices,
            n = o[0],
            a = o[1],
            s = o[2],
            l = o[3];
            n.uv = r[0],
            a.uv = r[1],
            s.uv = r[2],
            l.uv = r[3],
            t.geometry.calculateUVBO(!0)
        },
        e.prototype.shouldDraw = function() {
            return this.globe && this.globe.camera.isEarthFullOverlapScreen() && t.prototype.shouldDraw.call(this)
        },
        e.prototype.onBeforeDraw = function() {
            var t = o.
        default.gl;
            t.disable(t.DEPTH_TEST),
            t.enable(o.
        default.gl.BLEND),
            t.blendFunc(o.
        default.gl.SRC_ALPHA, o.
        default.gl.ONE_MINUS_SRC_ALPHA)
        },
        e.prototype.onAfterDraw = function() {
            var t = o.
        default.gl;
            t.enable(t.DEPTH_TEST),
            t.disable(o.
        default.gl.BLEND)
        },
        e.prototype.destroy = function() {
            this.globe = null,
            t.prototype.destroy.call(this)
        },
        e.prototype.clear = function() {
            this.currentHighLightPoi = null,
            t.prototype.clear.call(this)
        },
        e.prototype.clearAll = function() {
            this.clear(),
            this.keyword = null
        },
        e.prototype._addPoi = function(t, e, i, r, n) {
            var h = this.globe.camera.getMatrix().clone(),
            p = a.
        default.geographicToCartesianCoord(t, e, o.
        default.EARTH_RADIUS + .001);
            h.setPosition(p);
            var d = new s.
        default(1, 0, 0),
            g = i * this.poiPixelWidth / 2;
            d.setLength(g);
            var y = d.getVertice(),
            m = d.getOpposite().getVertice(),
            _ = new s.
        default(0, 1, 0),
            w = i * this.poiPixelHeight;
            _.setLength(w);
            var b = s.
        default.verticePlusVector(m, _),
            L = s.
        default.verticePlusVector(y, _),
            T = this._getUV(this.normalMaterialRow, n),
            M = new l.
        default({
                i:
                0,
                p: b.getArray(),
                uv: T[0]
            }),
            x = new l.
        default({
                i:
                1,
                p: m.getArray(),
                uv: T[1]
            }),
            P = new l.
        default({
                i:
                2,
                p: L.getArray(),
                uv: T[2]
            }),
            E = new l.
        default({
                i:
                3,
                p: y.getArray(),
                uv: T[3]
            }),
            A = u.
        default.buildMesh(M, x, P, E);
            A.setMatrix(h);
            var R = new f.
        default(v),
            O = new c.
        default(A, R, r);
            return O.geometry.resolution = i,
            O.columnIndex = n,
            this.add(O),
            O
        },
        e.prototype._showPois = function(t) {
            var e = this;
            this.clear();
            var i = t.detail.pois || [];
            if (0 !== i.length) {
                i.length > this.MAX_POI_COUNT && (i = i.slice(0, this.MAX_POI_COUNT));
                var r = i.map(function(t) {
                    var e = parseFloat(t.pointx),
                    i = parseFloat(t.pointy);
                    return [e, i]
                });
                if (r.length > 1) {
                    var o = d.
                default.fromLonlats(r);
                    this.globe.setExtent(o)
                } else {
                    var n = r[0];
                    this.globe.centerTo(n[0], n[1])
                }
                var a = this.globe.camera.getResolution();
                t.detail.graphics = i.map(function(t, i) {
                    var r = parseFloat(t.pointx),
                    o = parseFloat(t.pointy);
                    return e._addPoi(r, o, a, t, i)
                })
            }
        },
        e.prototype.search = function(t) {
            var e = this;
            this.searchExtentMode = !0,
            this.clearAll(),
            this.keyword = t;
            var i = this.globe.getLevel();
            if (i >= 10) {
                var r = this.globe.getExtent();
                r && p.
            default.searchByExtent(t, i, r).then(function(t) {
                    e._showPois(t)
                })
            }
        },
        e.prototype.searchNearby = function(t, e, i, r, o) {
            var n = this;
            return void 0 === i && (i = "Auto"),
            void 0 === r && (r = 50),
            void 0 === o && (o = 0),
            this.clearAll(),
            this.keyword = t,
            this.searchExtentMode = !1,
            p.
        default.searchNearby(t, e, i, !1, r, o).then(function(t) {
                return n._showPois(t),
                t
            })
        },
        e.prototype.searchByCurrentCity = function(t, e, i, r) {
            var o = this;
            return void 0 === e && (e = "Auto"),
            void 0 === i && (i = 50),
            void 0 === r && (r = 0),
            this.clearAll(),
            this.keyword = t,
            p.
        default.searchByCurrentCity(t, e, i, r).then(function(t) {
                return t && (t.location || (t.location = o.globe.getLonlat())),
                o._showPois(t),
                t
            })
        },
        e
    } (h.PickableGraphicGroup);
    e.
default = g
},
function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(11),
    o = function() {
        function t() {}
        return t.jsonp = function(t, e, i, r, o) {
            function n() {
                delete window[a],
                s.src = "",
                s.parentNode && s.parentNode.removeChild(s),
                s = null
            }
            void 0 === i && (i = ""),
            void 0 === r && (r = "cb"),
            void 0 === o && (o = "QQ");
            var a = o + "_webglobe_callback_" + Math.random().toString().substring(2);
            t += t.indexOf("?") < 0 ? "?": "&",
            t += r + "=window." + a;
            var s = document.createElement("script");
            s.setAttribute("src", t),
            i && s.setAttribute("charset", i),
            s.setAttribute("async", "true"),
            s.setAttribute("defer", "true"),
            document.body.appendChild(s);
            var l = !1;
            return window[a] = function(t) {
                l || e(t),
                n()
            },
            function() {
                l = !0,
                n()
            }
        },
        t.getCityLocation = function() {
            var e = this,
            i = new Promise(function(i) {
                if (e.cityLocation) i(e.cityLocation);
                else {
                    var r = "//apis.map.qq.com/jsapi?qt=gc&output=jsonp";
                    t.jsonp(r,
                    function(t) {
                        console.log("定位：", t);
                        var r = t.detail;
                        t.detail ? (e.cityLocation = {
                            lon: parseFloat(r.pointx),
                            lat: parseFloat(r.pointy),
                            accuracy: 1 / 0,
                            city: r.cname
                        },
                        i(e.cityLocation)) : i(null)
                    })
                }
            });
            return i
        },
        t.getCurrentPosition = function(t) {
            var e = this;
            void 0 === t && (t = !1);
            var i = new Promise(function(i) {
                e.getCityLocation().then(function(r) {
                    t ? navigator.geolocation.getCurrentPosition(function(t) {
                        var o = {
                            lon: t.coords.longitude,
                            lat: t.coords.latitude,
                            accuracy: t.coords.accuracy,
                            city: r.city
                        };
                        e.location = o,
                        i(e.location)
                    },
                    function(t) {
                        console.error(t),
                        i(e.location ? e.location: r)
                    },
                    {
                        enableHighAccuracy: !0
                    }) : i(e.location ? e.location: r)
                })
            });
            return i
        },
        t.createPoiTypes = function() {
            return this._createPoiTypes(this.poiClasses, this.poiTypes),
            this.poiTypes
        },
        t._createPoiTypes = function(t, e) {
            var i = this;
            for (var r in t) if (t.hasOwnProperty(r)) {
                e.push(r);
                var o = t[r];
                o && o.length > 0 && o.forEach(function(t) {
                    "string" == typeof t ? e.push(t) : "object" == typeof t && i._createPoiTypes(t, e)
                })
            }
        },
        t._getStrictSearchType = function(t) {
            for (var e = "POI",
            i = 0; i < this.poiTypes.length; i++) {
                var r = this.poiTypes[i];
                if (r.indexOf(t) >= 0) return e = "Type";
                for (var o = !0,
                n = 0; n < t.length; n++) {
                    var a = t.charAt(n);
                    if (r.indexOf(a) < 0) {
                        o = !1;
                        break
                    }
                }
                if (o) return e = "Type"
            }
            return e
        },
        t._getUrlBySearchType = function(t, e) {
            return "Type" === e ? t += "&qt=rn": "POI" === e && (t += "&qt=poi"),
            t
        },
        t.searchByExtent = function(e, i, r, o, n) {
            var a = r.minLon,
            s = r.minLat,
            l = r.maxLon,
            u = r.maxLat;
            void 0 === o && (o = 50),
            void 0 === n && (n = 0);
            var c = new Promise(function(r) {
                var c = "//apis.map.qq.com/jsapi?qt=syn&wd=" + e + "&pn=" + n + "&rn=" + o + "&output=jsonp&b=" + a + "," + s + "," + l + "," + u + "&l=" + i + "&c=000000";
                t.jsonp(c,
                function(t) {
                    r(t)
                })
            });
            return c
        },
        t.searchByBuffer = function(t, e, i, r, o, n, a) {
            var s = this;
            return void 0 === o && (o = "Auto"),
            void 0 === n && (n = 50),
            void 0 === a && (a = 0),
            "Auto" === o ? (o = this._getStrictSearchType(t), this._rawSearchByBuffer(o, t, e, i, r, n, a).then(function(l) {
                var u = 0;
                if (l && l.detail && l.detail.pois && l.detail.pois.length > 0 && (u = l.detail.pois.length), 0 === u) {
                    if ("Type" === o) return s._rawSearchByBuffer("POI", t, e, i, r, n, a);
                    if ("POI" === o) return s._rawSearchByBuffer("Type", t, e, i, r, n, a)
                }
                return l
            })) : this._rawSearchByBuffer(o, t, e, i, r, n, a)
        },
        t._rawSearchByBuffer = function(e, i, r, o, n, a, s) {
            var l = this;
            void 0 === a && (a = 50),
            void 0 === s && (s = 0);
            var u = new Promise(function(u) {
                var c = "//apis.map.qq.com/jsapi?wd=" + i + "&pn=" + s + "&rn=" + a + "&px=" + r + "&py=" + o + "&r=" + n + "&output=jsonp";
                c = l._getUrlBySearchType(c, e),
                t.jsonp(c,
                function(t) {
                    t && (t.location = [r, o]),
                    u(t)
                })
            });
            return u
        },
        t.searchByCity = function(t, e, i, r, o) {
            var n = this;
            return void 0 === i && (i = "Auto"),
            void 0 === r && (r = 50),
            void 0 === o && (o = 0),
            "Auto" === i ? (i = this._getStrictSearchType(t), this._rawSearchByCity(i, t, e, r, o).then(function(a) {
                var s = 0;
                if (a && a.detail && a.detail.pois && a.detail.pois.length > 0 && (s = a.detail.pois.length), 0 === s) {
                    if ("Type" === i) return n._rawSearchByCity("POI", t, e, r, o);
                    if ("POI" === i) return n._rawSearchByCity("Type", t, e, r, o)
                }
                return a
            })) : this._rawSearchByCity(i, t, e, r, o)
        },
        t._rawSearchByCity = function(e, i, r, o, n) {
            var a = this;
            void 0 === o && (o = 50),
            void 0 === n && (n = 0);
            var s = new Promise(function(s) {
                var l = "//apis.map.qq.com/jsapi?wd=" + i + "&pn=" + n + "&rn=" + o + "&c=" + r + "&output=jsonp";
                l = a._getUrlBySearchType(l, e),
                t.jsonp(l,
                function(t) {
                    t && (a.location ? t.location = [a.location.lon, a.location.lat] : a.cityLocation ? t.location = [a.cityLocation.lon, a.cityLocation.lat] : t.location = null),
                    s(t)
                })
            });
            return s
        },
        t.searchNearby = function(t, e, i, r, o, n) {
            var a = this;
            return void 0 === i && (i = "Auto"),
            void 0 === r && (r = !1),
            void 0 === o && (o = 50),
            void 0 === n && (n = 0),
            this.getCurrentPosition(r).then(function(r) {
                return a.searchByBuffer(t, r.lon, r.lat, e, i, o, n)
            })
        },
        t.searchByCurrentCity = function(t, e, i, r) {
            var o = this;
            return void 0 === e && (e = "Auto"),
            void 0 === i && (i = 50),
            void 0 === r && (r = 0),
            this.getCityLocation().then(function(n) {
                return o.searchByCity(t, n.city, e, i, r)
            })
        },
        t.routeByDriving = function(t, e, i, r, o, n) {
            var a = this;
            void 0 === n && (n = 5);
            var s = new Promise(function(s, l) {
                var u = "//restapi.amap.com/v3/direction/driving?origin=" + t + "," + e + "&destination=" + i + "," + r + "&extensions=all&output=json&key=" + o + "&strategy=" + n,
                c = new XMLHttpRequest;
                c.open("GET", u, !0),
                c.onload = function(t) {
                    var e = a._handleDrivingResult(t.target.responseText);
                    s(e)
                },
                c.onerror = function(t) {
                    l(t)
                },
                c.onabort = function(t) {
                    l(t)
                },
                c.send()
            });
            return s
        },
        t._handleDrivingResult = function(t) {
            var e = this,
            i = JSON.parse(t);
            return i.route && (i.route.type = "driving", i.route.paths && i.route.paths.length > 0 && i.route.paths.forEach(function(t) {
                t.steps && t.steps.forEach(function(t) {
                    return e._parseStepPolyline(t)
                })
            })),
            i
        },
        t.routeByBus = function(t, e, i, r, o, n, a, s) {
            var l = this;
            void 0 === s && (s = 0);
            var u = new Promise(function(s, u) {
                var c = "//restapi.amap.com/v3/direction/transit/integrated?origin=" + t + "," + e + "&destination=" + i + "," + r + "&city=" + o + "&cityd=" + n + "&output=json&key=" + a,
                h = new XMLHttpRequest;
                h.open("GET", c, !0),
                h.onload = function(t) {
                    var e = l._handleBusResult(t.target.responseText);
                    s(e)
                },
                h.onerror = function(t) {
                    u(t)
                },
                h.onabort = function(t) {
                    u(t)
                },
                h.send()
            });
            return u
        },
        t._handleBusResult = function(t) {
            var e = this,
            i = JSON.parse(t);
            return i.route && (i.route.type = "bus", i.route.transits && i.route.transits.length > 0 && i.route.transits.forEach(function(t) {
                var i = 0;
                t.segments.forEach(function(t) {
                    if (t.walking && t.walking.steps && t.walking.steps.length > 0 && (t.walking.lonlats = [], t.walking.steps.forEach(function(r) {
                        if (e._parseStepPolyline(r), (n = t.walking.lonlats).push.apply(n, r.lonlats), r.distance) {
                            var o = parseFloat(r.distance);
                            isNaN(o) || (i += o)
                        }
                        var n
                    }), t.walking.firstLonlat = t.walking.lonlats[0], t.walking.lastLonlat = t.walking.lonlats[t.walking.lonlats.length - 1]), t.bus && t.bus.buslines && t.bus.buslines.length > 0 && (t.bus.lonlats = [], t.bus.buslines.forEach(function(i) {
                        e._parseStepPolyline(i),
                        (o = t.bus.lonlats).push.apply(o, i.lonlats),
                        i.busName = i.name;
                        var r = i.name.indexOf("(");
                        r >= 0 && (i.busName = i.name.slice(0, r));
                        var o
                    }), t.bus.lonlats.length > 0 && (t.bus.firstLonlat = t.bus.lonlats[0], t.bus.lastLonlat = t.bus.lonlats[t.bus.lonlats.length - 1])), t.railway && t.railway.departure_stop && t.railway.arrival_stop) {
                        var r = t.railway.departure_stop.location,
                        o = t.railway.arrival_stop.location;
                        if (t.railway.lonlats = [], r && o) {
                            var n = r.split(" "),
                            a = parseFloat(n[0]),
                            s = parseFloat(n[1]),
                            l = o.split(" "),
                            u = parseFloat(l[0]),
                            c = parseFloat(l[1]);
                            isNaN(a) || isNaN(s) || isNaN(u) || isNaN(c) || (t.railway.lonlats = [[a, s], [u, c]])
                        }
                    }
                });
                var r = parseFloat(t.walking_distance);
                isNaN(r) ? t.walking_distance = i: t.walking_distance = r
            })),
            i
        },
        t.routeByWalking = function(t, e, i, r, o) {
            var n = this,
            a = new Promise(function(a, s) {
                var l = "//restapi.amap.com/v3/direction/walking?origin=" + t + "," + e + "&destination=" + i + "," + r + "&key=" + o,
                u = new XMLHttpRequest;
                u.open("GET", l, !0),
                u.onload = function(t) {
                    var e = n._handleWalkingResult(t.target.responseText);
                    a(e)
                },
                u.onerror = function(t) {
                    s(t)
                },
                u.onabort = function(t) {
                    s(t)
                },
                u.send()
            });
            return a
        },
        t._handleWalkingResult = function(t) {
            var e = this,
            i = JSON.parse(t);
            return i.route && (i.route.type = "walking", i.route.paths && i.route.paths.length > 0 && i.route.paths.forEach(function(t) {
                t && t.steps && t.steps.length > 0 && t.steps.forEach(function(t) {
                    e._parseStepPolyline(t)
                })
            })),
            i
        },
        t._parseStepPolyline = function(t) {
            var e = t.polyline.split(";"),
            i = e.map(function(t) {
                var e = t.split(","),
                i = parseFloat(e[0]),
                r = parseFloat(e[1]);
                return [i, r]
            });
            t.firstLonlat = i[0],
            t.lastLonlat = i[i.length - 1],
            t.lonlats = i
        },
        t.decodeQQPolyline = function(t) {
            for (var e = 2; e < t.length; e++) t[e] = t[e - 2] + t[e] / 1e6;
            return t
        },
        t.qqRouteByDriving = function(e, i, r, o, n, a) {
            var s = "//apis.map.qq.com/ws/direction/v1/driving/?from=" + i + "," + e + "&to=" + o + "," + r + "&output=jsonp&key=" + n;
            a && (s += "&policy=" + a);
            var l = new Promise(function(e) {
                t.jsonp(s,
                function(i) {
                    i.result.routes.forEach(function(e) {
                        t.decodeQQPolyline(e.polyline)
                    }),
                    e(i)
                })
            });
            return l
        },
        t.qqRoute = function(e, i, o, n, a) {
            var s = r.
        default.degreeLonToWebMercatorX(i, !0),
            l = r.
        default.degreeLatToWebMercatorY(o, !0),
            u = r.
        default.degreeLonToWebMercatorX(n, !0),
            c = r.
        default.degreeLatToWebMercatorY(a, !0),
            h = "//apis.map.qq.com/jsapi?qt=" + e + "&start=1$$$$" + s + ", " + l + "$$&dest=1$$$$" + u + ", " + c + "$$&cond=3&mt=2&s=2&fm=0&output=jsonp&pf=jsapi&ref=jsapi",
            f = new Promise(function(e) {
                t.jsonp(h,
                function(t) {
                    console.log(t),
                    e(t)
                },
                "GBK")
            });
            return f
        },
        t
    } ();
    o.cityLocation = null,
    o.location = null,
    o.poiClasses = {
        "美食": ["西餐", "烧烤", "火锅", "海鲜", "素食", "清真", "自助餐", "面包甜点", "冷饮店", "小吃快餐", {
            "中餐厅": ["鲁菜", "粤菜", "湘菜", "川菜", "浙江菜", "安徽菜", "东北菜", "北京菜"],
            "日韩菜": ["日本料理", "韩国料理"],
            "东南亚菜": ["泰国菜"]
        },
        "美食畅饮", "甜点饮品"],
        "购物": ["综合商场", "便利店", "超市", "数码家电", "花鸟鱼虫", "家具家居建材", "农贸市场", "小商品市场", "旧货市场", "体育户外", "服饰鞋包", "图书音像", "眼镜店", "母婴儿童", "珠宝饰品", "化妆品", "礼品", "摄影器材", "拍卖典当行", "古玩字画", "自行车专卖", "烟酒专卖", "文化用品"],
        "生活服务": ["旅行社", "报刊亭", "自来水营业厅", "电力营业厅", "摄影冲印", "洗衣店", "招聘求职", "彩票", "中介机构", "宠物服务", "废品收购站", "福利院养老院", "美容美发", {
            "票务代售": ["飞机票代售", "火车票代售", "汽车票代售", "公交及IC卡"],
            "邮局速递": ["邮局", "速递"],
            "通讯服务": ["中国电信营业厅", "中国网通营业厅", "中国移动营业厅", "中国联通营业厅", "中国铁通营业厅"],
            "家政": ["月嫂保姆", "保洁钟点工", "开锁", "送水", "家电维修", "搬家"]
        }],
        "娱乐休闲": ["洗浴推拿足疗", "KTV", "酒吧", "咖啡厅", "夜总会", "电影院", "剧场音乐厅", "度假疗养", "网吧", {
            "户外活动": ["游乐场", "垂钓园", "采摘园"],
            "游戏棋牌": ["游戏厅", "棋牌室"]
        }],
        "汽车": ["停车场", "汽车销售", "汽车维修", "汽车养护", "洗车场", {
            "加油站": ["中石化", "中石油", "其它加油加气站"],
            "摩托车": ["摩托车服务相关", "销售", "维修", "其它摩托车"]
        }],
        "医疗保健": ["综合医院", "诊所", "急救中心", "药房药店"],
        "酒店宾馆": ["酒店宾馆", "星级酒店", "经济型酒店", "旅馆招待所", "青年旅社", "快捷酒店"],
        "旅游景点": [],
        "文化场馆": ["博物馆", "展览馆", "科技馆", "图书馆", "美术馆", "会展中心"],
        "教育学校": ["大学", "中学", "小学", "幼儿园", "培训", "职业技术学校", "成人教育"],
        "银行金融": ["银行", "自动提款机", "保险公司", "证券公司", "ATM"],
        "基础设施": ["其它基础设施", {
            "交通设施": ["公交车站", "地铁站", "火车站", "长途汽车站", "公交线路", "地铁线路"],
            "公共设施": ["公共厕所", "公用电话", "紧急避难场所"],
            "道路附属": ["收费站", "服务区"]
        }],
        "房产小区": ["商务楼宇", {
            "住宅区": ["住宅小区", "别墅", "宿舍", "社区中心"]
        }]
    },
    o.poiTypes = [],
    o.createPoiTypes(),
    e.
default = o
},
function(t, e, i) {
    t.exports = i.p + "0f1e4f2d34556cdc2a9c4a8bc46f5def.png"
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(5),
    n = i(7),
    a = i(11),
    s = i(12),
    l = i(13),
    u = i(37),
    c = i(34),
    h = i(52),
    f = i(53),
    p = i(46),
    d = i(45),
    v = i(21),
    g = i(49),
    y = i(19),
    m = i(54),
    _ = 80,
    w = i(55),
    b = 80,
    L = function(t) {
        function e(e, i, r, o) {
            var n = t.call(this, null, o) || this;
            return n.originalLonlats = e,
            n.pixelWidth = i,
            n.inflexionPointAngle = 30,
            n._removeDuplicatePoints(n.originalLonlats),
            n.updateGeometry(r),
            n
        }
        return r(e, t),
        e.prototype.updateGeometry = function(t) {
            var e = this._handleCurveJoin(this.originalLonlats, t, this.pixelWidth),
            i = this._getRouteGeometryByLonlats(e, t, this.pixelWidth);
            this.setGeometry(i)
        },
        e.prototype._removeDuplicatePoints = function(t) {
            for (var e = 0; e <= t.length - 2;) {
                var i = t[e],
                r = t[e + 1];
                i[0] === r[0] && i[1] === r[1] ? t.splice(e + 1, 1) : e += 1
            }
        },
        e.prototype._handleCurveJoin = function(t, e, i) {
            for (var r = [].concat(t), n = 1, u = a.
        default.radianToDegree(e * i / o.
        default.EARTH_RADIUS); n <= r.length - 2;) {
                var c = r[n],
                h = r[n - 1],
                f = r[n + 1],
                p = new s.
            default(c[0], c[1], 0),
                d = new s.
            default(h[0], h[1], 0),
                v = new s.
            default(f[0], f[1], 0),
                g = l.
            default.verticeMinusVertice(p, d),
                y = l.
            default.verticeMinusVertice(v, p),
                m = l.
            default.getRadianOfTwoVectors(g, y),
                _ = a.
            default.radianToDegree(m);
                if (_ > this.inflexionPointAngle) {
                    var w = null,
                    b = c,
                    L = null,
                    T = g.getLength(),
                    M = y.getLength(),
                    x = Math.min(T, M),
                    P = Math.min(u, x / 2),
                    E = l.
                default.verticePlusVector(p, g.getOpposite().setLength(P));
                    w = [E.x, E.y];
                    var A = l.
                default.verticePlusVector(p, y.clone().setLength(P));
                    L = [A.x, A.y];
                    var R = a.
                default.quad(w, b, L, 10);
                    r.splice.apply(r, [n, 1].concat(R)),
                    n += R.length
                } else n++
            }
            return r
        },
        e.prototype._getRouteGeometryByLonlats = function(t, e, i) {
            var r = this,
            o = new c.
        default,
            n = t.map(function(t) {
                return {
                    lonlat: t,
                    vertice: a.
                default.geographicToCartesianCoord(t[0], t[1]),
                    start2EndVector: null,
                    v1: null,
                    v3: null
                }
            });
            n.forEach(function(t, e) {
                if (e !== n.length - 1) {
                    var i = n[e + 1];
                    t.start2EndVector = l.
                default.verticeMinusVertice(i.vertice, t.vertice)
                } else {
                    var r = n[e - 1];
                    t.start2EndVector = r.start2EndVector
                }
            });
            var s = 0;
            return n.forEach(function(t, a) {
                var l = r._getRouteVertices(s, t.vertice, t.start2EndVector, e, i);
                if (s = l.startIndex, t.v1 = l.v1, t.v3 = l.v3, o.vertices.push(t.v1, t.v3), 0 !== a) {
                    var u = n[a - 1],
                    h = u.v1,
                    f = u.v3,
                    p = t.v1,
                    d = t.v3,
                    v = c.
                default.buildPlane(p, h, d, f); (g = o.triangles).push.apply(g, v)
                }
                var g
            }), o
        }, e.prototype._getRouteVertices = function(t, e, i, r, o) {
            var n = l.
        default.fromVertice(e),
            a = i.getOpposite(),
            s = r * o / 2,
            c = n.cross(i).setLength(s),
            h = l.
        default.verticePlusVector(e, c).getArray(),
            f = new u.
        default({
                i:
                t++,
                p: h
            }),
            p = n.cross(a).setLength(s),
            d = l.
        default.verticePlusVector(e, p).getArray(),
            v = new u.
        default({
                i:
                t++,
                p: d
            });
            return {
                startIndex: t,
                v1: f,
                v3: v
            }
        },
        e
    } (h.
default),
    T = function(t) {
        function e(e, i) {
            var r = t.call(this) || this;
            return r.camera = e,
            r.key = i,
            r.pixelWidth = 5,
            r.busColor = [82, 153, 255],
            r.drivingColor = [0, 189, 0],
            r.walkingColor = [76, 221, 38],
            r.startLonlat = null,
            r.endLonlat = null,
            r.route = null,
            r.deltaLonlatSquareThreshold = Math.pow(1 / (2 * Math.PI * o.
        default.REAL_EARTH_RADIUS) * 360, 2),
            n.
        default.subscribe("level-change",
            function() {
                if (r.children.length > 0) {
                    var t = r.camera.getResolution();
                    r.children.forEach(function(e) {
                        e instanceof L && e.updateGeometry(t)
                    })
                }
            }),
            r
        }
        return r(e, t),
        e.prototype.test = function(t, e, i) {
            void 0 === t && (t = 5),
            void 0 === e && (e = 100),
            void 0 === i && (i = [0, 255, 0]);
            var r = this.camera.getResolution();
            this._addRouteByLonlats([[90, 0], [120, 0], [120, 40]], r, this.pixelWidth, i)
        },
        e.prototype._addRouteByLonlat = function(t, e, i, r, o, n) {
            var a = this._getLonlatsBySegments(t, e, o);
            return this._addRouteByLonlats(a, i, r, n)
        },
        e.prototype._addRouteByLonlats = function(t, e, i, r) {
            var o = null;
            if (t.length >= 2) {
                var n = t;
                n.length >= 2 && (o = new L(n, i, e, new f.
            default(r)), this.add(o))
            }
            return o
        },
        e.prototype._getLonlatsBySegments = function(t, e, i) {
            for (var r = (e[0] - t[0]) / i, o = (e[1] - t[1]) / i, n = [], a = 0; a < i; a++) {
                var s = [t[0] + r * a, t[1] + o * a];
                n.push(s)
            }
            return n.push(e),
            n
        },
        e.prototype.showPath = function(t) {
            this.route && ("driving" === this.route.type ? this._showDrivingPath(t) : "bus" === this.route.type ? this._showBusPath(t) : "walking" === this.route.type && this._showWalkingPath(t))
        },
        e.prototype.routeByDriving = function(t, e, i, r, o) {
            var n = this;
            return void 0 === o && (o = 5),
            g.
        default.routeByDriving(t, e, i, r, this.key, o).then(function(o) {
                return n._clearAll(),
                o.route && o.route.paths && o.route.paths.length > 0 && (n.startLonlat = [t, e], n.endLonlat = [i, r], n.route = o.route, n.showPath(0)),
                o
            })
        },
        e.prototype._showDrivingPath = function(t) {
            var e = this;
            if (this.route && this.route.paths && this.route.paths.length > 0) {
                var i = this.route.paths[t];
                if (i && i.steps && i.steps.length > 0) {
                    this.clear();
                    var r = [];
                    i.steps.forEach(function(t, e, i) {
                        r.push.apply(r, t.lonlats)
                    });
                    var o = y.
                default.fromLonlats(r);
                    o && (this.camera.setExtent(o), setTimeout(function() {
                        var t = e.camera.getResolution();
                        e._addRouteByLonlats(r, t, e.pixelWidth, e.drivingColor),
                        e._showStartEndPoints()
                    },
                    0))
                }
            }
        },
        e.prototype.routeByBus = function(t, e, i, r, o, n, a) {
            var s = this;
            return void 0 === a && (a = 0),
            g.
        default.routeByBus(t, e, i, r, o, n, this.key, a).then(function(o) {
                return s._clearAll(),
                o.route && o.route.transits && o.route.transits.length > 0 && (s.startLonlat = [t, e], s.endLonlat = [i, r], s.route = o.route, s.showPath(0)),
                o
            })
        },
        e.prototype._showBusPath = function(t) {
            var e = this;
            if (this.route && this.route.transits && this.route.transits.length > 0) {
                var i = this.route.transits[t];
                if (i && i.segments && i.segments.length > 0) {
                    this.clear();
                    var r = [],
                    o = [];
                    i.segments.forEach(function(t) {
                        t.walking && t.walking.lonlats && t.walking.lonlats.length > 0 && (t.walking.lonlats.color = e.walkingColor, o.push(t.walking.lonlats), r.push.apply(r, t.walking.lonlats)),
                        t.bus && t.bus.lonlats && t.bus.lonlats.length > 0 && (t.bus.lonlats.color = e.busColor, o.push(t.bus.lonlats), r.push.apply(r, t.bus.lonlats)),
                        t.railway && t.railway.lonlats && t.railway.lonlats.length > 0 && (t.railway.lonlats.color = e.busColor, o.push(t.railway.lonlats), r.push.apply(r, t.railway.lonlats))
                    });
                    var n = y.
                default.fromLonlats(r);
                    n && (this.camera.setExtent(n), setTimeout(function() {
                        var t = e.camera.getResolution();
                        o.forEach(function(i) {
                            e._addRouteByLonlats(i, t, e.pixelWidth, i.color)
                        }),
                        e._showStartEndPoints()
                    },
                    0))
                }
            }
        },
        e.prototype.routeByWalking = function(t, e, i, r) {
            var o = this;
            return g.
        default.routeByWalking(t, e, i, r, this.key).then(function(n) {
                return o._clearAll(),
                n.route && n.route.paths && n.route.paths.length > 0 && (o.startLonlat = [t, e], o.endLonlat = [i, r], o.route = n.route, o._showWalkingPath(0)),
                n
            })
        },
        e.prototype._showWalkingPath = function(t) {
            var e = this;
            if (this.route && this.route.paths && this.route.paths.length > 0) {
                var i = this.route.paths[t];
                if (i && i.steps && i.steps.length > 0) {
                    this.clear();
                    var r = [];
                    i.steps.forEach(function(t) {
                        r.push.apply(r, t.lonlats)
                    });
                    var o = y.
                default.fromLonlats(r);
                    o && (this.camera.setExtent(o), setTimeout(function() {
                        var t = e.camera.getResolution();
                        e._addRouteByLonlats(r, t, e.pixelWidth, e.walkingColor),
                        e._showStartEndPoints()
                    },
                    0))
                }
            }
        },
        e.prototype._showStartEndPoints = function() {
            if (this.startLonlat) {
                var t = new p.
            default(m, _),
                e = new d.
            default(t);
                e.setLonlats([this.startLonlat]),
                this.add(e)
            }
            if (this.endLonlat) {
                var t = new p.
            default(w, b),
                i = new d.
            default(t);
                i.setLonlats([this.endLonlat]),
                this.add(i)
            }
        },
        e.prototype._clearAll = function() {
            this.startLonlat = null,
            this.endLonlat = null,
            this.route = null,
            this.clear()
        },
        e.prototype.onDraw = function(e) {
            var i = o.
        default.gl;
            i.disable(o.
        default.gl.DEPTH_TEST),
            i.depthMask(!1),
            t.prototype.onDraw.call(this, e),
            i.enable(o.
        default.gl.DEPTH_TEST),
            i.depthMask(!0)
        },
        e.prototype.destroy = function() {
            this.camera = null,
            t.prototype.destroy.call(this)
        },
        e.prototype.test2 = function(t) {
            var e = t.split(";"),
            i = e[0].split(","),
            r = e[1].split(","),
            o = parseFloat(i[0]),
            n = parseFloat(i[1]),
            s = parseFloat(r[0]),
            l = parseFloat(r[1]),
            u = Math.pow(o - s, 2) + Math.pow(n - l, 2),
            c = a.
        default.getRealArcDistanceBetweenLonLats(o, n, s, l);
            return {
                lon1: o,
                lat1: n,
                lon2: s,
                lat2: l,
                s: u,
                distance: c
            }
        },
        e.getInstance = function(t, i) {
            return new e(t, i)
        },
        e
    } (v.
default);
    e.
default = T
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(5),
    n = i(28),
    a = i(29),
    s = "\nattribute vec3 aPosition;\nattribute vec3 aColor;\nvarying vec4 vColor;\nuniform mat4 uPMVMatrix;\n\nvoid main()\n{\n\tgl_Position = uPMVMatrix * vec4(aPosition,1.0);\n\tvColor = vec4(aColor,1.0);\n}\n",
    l = "\nprecision mediump float;\nvarying vec4 vColor;\n\nvoid main()\n{\n\tgl_FragColor = vColor;\n}\n",
    u = function(t) {
        function e(e, i) {
            var r = t.call(this, e, i) || this;
            return r.geometry = e,
            r.material = i,
            r.setGeometry(e),
            r
        }
        return r(e, t),
        e.prototype.setGeometry = function(t) {
            var e = this;
            this.geometry && this.geometry.destroy(),
            this.geometry = t,
            this.geometry && (this.geometry.vertices.forEach(function(t) {
                t.c = e.material.color
            }), this.geometry.calculateVBO(), this.geometry.calculateIBO(), this.geometry.calculateCBO())
        },
        e.prototype.isGeometryReady = function() {
            return !! this.geometry.vbo && !!this.geometry.ibo && !!this.geometry.cbo
        },
        e.prototype.isReady = function() {
            return this.isGeometryReady() && t.prototype.isReady.call(this)
        },
        e.prototype.createProgram = function() {
            return n.
        default.getProgram(s, l)
        },
        e.prototype.updateShaderUniforms = function(t) {
            var e = o.
        default.gl,
            i = t.getProjViewMatrixForDraw().multiplyMatrix(this.geometry.getMatrix()),
            r = this.program.getUniformLocation("uPMVMatrix");
            e.uniformMatrix4fv(r, !1, i.getFloat32Array())
        },
        e.prototype.onDraw = function(t) {
            var e = o.
        default.gl;
            this.updateShaderUniforms(t);
            var i = this.program.getAttribLocation("aPosition");
            this.program.enableVertexAttribArray("aPosition"),
            this.geometry.vbo.bind(),
            e.vertexAttribPointer(i, 3, o.
        default.gl.FLOAT, !1, 0, 0);
            var r = this.program.getAttribLocation("aColor");
            this.program.enableVertexAttribArray("aColor"),
            this.geometry.cbo.bind(),
            e.vertexAttribPointer(r, 3, o.
        default.gl.FLOAT, !1, 0, 0),
            this.geometry.ibo.bind();
            var n = 3 * this.geometry.triangles.length;
            e.drawElements(o.
        default.gl.TRIANGLES, n, o.
        default.gl.UNSIGNED_SHORT, 0)
        },
        e
    } (a.
default);
    e.
default = u
},
function(t, e, i) {
    "use strict";
    var r = this && this.__extends ||
    function() {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function(e, i) {
            function r() {
                this.constructor = e
            }
            t(e, i),
            e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    } ();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(32),
    n = function(t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.color = null,
            i.color = [e[0] / 255, e[1] / 255, e[2] / 255],
            i
        }
        return r(e, t),
        e.prototype.isReady = function() {
            return this.color && this.color.length > 0
        },
        e.prototype.destroy = function() {},
        e
    } (o.
default);
    e.
default = n
},
function(t, e, i) {
    t.exports = i.p + "1e93a1226fa156bb6eeecd8276af7194.png"
},
function(t, e, i) {
    t.exports = i.p + "34bb6835acf6236b7da4eaedd6b3db4e.png"
},
function(t, e) {}]);