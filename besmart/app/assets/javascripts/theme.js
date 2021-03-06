function MaterialSelectfield(e) {
    "use strict";
    this.element_ = e, this.init()
}

function OxyColorPicker(e) {
    "use strict";
    this.element_ = e, this.selectedColors = [], this.stylesheet = document.querySelector('link[title="main"]'), this.isMinified = -1 !== this.stylesheet.href.indexOf(".min"), this.stylesheetUrl = this.stylesheet.href.replace(this.stylesheet.href.substring(this.stylesheet.href.lastIndexOf("/") + 1), ""), this.stylesheetUrl = this.stylesheetUrl.replace("colors/", ""), this.styleLink = document.querySelector(".mdl-gen__style .mdl-gen__style-link"), this.styleLink.textContent = '<link rel="stylesheet" href="' + this.stylesheet.href.substring(this.stylesheet.href.lastIndexOf("assets")) + '">', this.init()
}
if (function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = "length" in e && e.length,
                n = J.type(e);
            return "function" === n || J.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function i(e, t, n) {
            if (J.isFunction(t)) return J.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return J.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (oe.test(t)) return J.filter(t, e, n);
                t = J.filter(t, e)
            }
            return J.grep(e, function(e) {
                return G.call(t, e) >= 0 !== n
            })
        }

        function s(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function r(e) {
            var t = fe[e] = {};
            return J.each(e.match(pe) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function a() {
            $.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), J.ready()
        }

        function o() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = J.expando + o.uid++
        }

        function l(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(be, "-$1").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : ye.test(n) ? J.parseJSON(n) : n
                    } catch (s) {}
                    _e.set(e, t, n)
                } else n = void 0;
            return n
        }

        function d() {
            return !0
        }

        function u() {
            return !1
        }

        function c() {
            try {
                return $.activeElement
            } catch (e) {}
        }

        function h(e, t) {
            return J.nodeName(e, "table") && J.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function p(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function f(e) {
            var t = Me.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function m(e, t) {
            for (var n = 0, i = e.length; i > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
        }

        function g(e, t) {
            var n, i, s, r, a, o, l, d;
            if (1 === t.nodeType) {
                if (ve.hasData(e) && (r = ve.access(e), a = ve.set(t, r), d = r.events)) {
                    delete a.handle, a.events = {};
                    for (s in d)
                        for (n = 0, i = d[s].length; i > n; n++) J.event.add(t, s, d[s][n])
                }
                _e.hasData(e) && (o = _e.access(e), l = J.extend({}, o), _e.set(t, l))
            }
        }

        function v(e, t) {
            var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && J.nodeName(e, t) ? J.merge([e], n) : n
        }

        function _(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Ee.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }

        function y(t, n) {
            var i, s = J(n.createElement(t)).appendTo(n.body),
                r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(s[0])) ? i.display : J.css(s[0], "display");
            return s.detach(), r
        }

        function b(e) {
            var t = $,
                n = je[e];
            return n || (n = y(e, t), "none" !== n && n || (Be = (Be || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Be[0].contentDocument, t.write(), t.close(), n = y(e, t), Be.detach()), je[e] = n), n
        }

        function C(e, t, n) {
            var i, s, r, a, o = e.style;
            return n = n || We(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || J.contains(e.ownerDocument, e) || (a = J.style(e, t)), qe.test(a) && ze.test(t) && (i = o.width, s = o.minWidth, r = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = n.width, o.width = i, o.minWidth = s, o.maxWidth = r)), void 0 !== a ? a + "" : a
        }

        function w(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function x(e, t) {
            if (t in e) return t;
            for (var n = t[0].toUpperCase() + t.slice(1), i = t, s = Ke.length; s--;)
                if (t = Ke[s] + n, t in e) return t;
            return i
        }

        function E(e, t, n) {
            var i = Xe.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function T(e, t, n, i, s) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += J.css(e, n + we[r], !0, s)), i ? ("content" === n && (a -= J.css(e, "padding" + we[r], !0, s)), "margin" !== n && (a -= J.css(e, "border" + we[r] + "Width", !0, s))) : (a += J.css(e, "padding" + we[r], !0, s), "padding" !== n && (a += J.css(e, "border" + we[r] + "Width", !0, s)));
            return a
        }

        function S(e, t, n) {
            var i = !0,
                s = "width" === t ? e.offsetWidth : e.offsetHeight,
                r = We(e),
                a = "border-box" === J.css(e, "boxSizing", !1, r);
            if (0 >= s || null == s) {
                if (s = C(e, t, r), (0 > s || null == s) && (s = e.style[t]), qe.test(s)) return s;
                i = a && (Q.boxSizingReliable() || s === e.style[t]), s = parseFloat(s) || 0
            }
            return s + T(e, t, n || (a ? "border" : "content"), i, r) + "px"
        }

        function L(e, t) {
            for (var n, i, s, r = [], a = 0, o = e.length; o > a; a++) i = e[a], i.style && (r[a] = ve.get(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && xe(i) && (r[a] = ve.access(i, "olddisplay", b(i.nodeName)))) : (s = xe(i), "none" === n && s || ve.set(i, "olddisplay", s ? n : J.css(i, "display"))));
            for (a = 0; o > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
            return e
        }

        function A(e, t, n, i, s) {
            return new A.prototype.init(e, t, n, i, s)
        }

        function I() {
            return setTimeout(function() {
                Qe = void 0
            }), Qe = J.now()
        }

        function P(e, t) {
            var n, i = 0,
                s = {
                    height: e
                };
            for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = we[i], s["margin" + n] = s["padding" + n] = e;
            return t && (s.opacity = s.width = e), s
        }

        function O(e, t, n) {
            for (var i, s = (nt[t] || []).concat(nt["*"]), r = 0, a = s.length; a > r; r++)
                if (i = s[r].call(n, t, e)) return i
        }

        function k(e, t, n) {
            var i, s, r, a, o, l, d, u, c = this,
                h = {},
                p = e.style,
                f = e.nodeType && xe(e),
                m = ve.get(e, "fxshow");
            n.queue || (o = J._queueHooks(e, "fx"), null == o.unqueued && (o.unqueued = 0, l = o.empty.fire, o.empty.fire = function() {
                o.unqueued || l()
            }), o.unqueued++, c.always(function() {
                c.always(function() {
                    o.unqueued--, J.queue(e, "fx").length || o.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], d = J.css(e, "display"), u = "none" === d ? ve.get(e, "olddisplay") || b(e.nodeName) : d, "inline" === u && "none" === J.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (s = t[i], Ze.exec(s)) {
                    if (delete t[i], r = r || "toggle" === s, s === (f ? "hide" : "show")) {
                        if ("show" !== s || !m || void 0 === m[i]) continue;
                        f = !0
                    }
                    h[i] = m && m[i] || J.style(e, i)
                } else d = void 0;
            if (J.isEmptyObject(h)) "inline" === ("none" === d ? b(e.nodeName) : d) && (p.display = d);
            else {
                m ? "hidden" in m && (f = m.hidden) : m = ve.access(e, "fxshow", {}), r && (m.hidden = !f), f ? J(e).show() : c.done(function() {
                    J(e).hide()
                }), c.done(function() {
                    var t;
                    ve.remove(e, "fxshow");
                    for (t in h) J.style(e, t, h[t])
                });
                for (i in h) a = O(f ? m[i] : 0, i, c), i in m || (m[i] = a.start, f && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function N(e, t) {
            var n, i, s, r, a;
            for (n in e)
                if (i = J.camelCase(n), s = t[i], r = e[n], J.isArray(r) && (s = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), a = J.cssHooks[i], a && "expand" in a) {
                    r = a.expand(r), delete e[i];
                    for (n in r) n in e || (e[n] = r[n], t[n] = s)
                } else t[i] = s
        }

        function R(e, t, n) {
            var i, s, r = 0,
                a = tt.length,
                o = J.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (s) return !1;
                    for (var t = Qe || I(), n = Math.max(0, d.startTime + d.duration - t), i = n / d.duration || 0, r = 1 - i, a = 0, l = d.tweens.length; l > a; a++) d.tweens[a].run(r);
                    return o.notifyWith(e, [d, r, n]), 1 > r && l ? n : (o.resolveWith(e, [d]), !1)
                },
                d = o.promise({
                    elem: e,
                    props: J.extend({}, t),
                    opts: J.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Qe || I(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = J.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
                        return d.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? d.tweens.length : 0;
                        if (s) return this;
                        for (s = !0; i > n; n++) d.tweens[n].run(1);
                        return t ? o.resolveWith(e, [d, t]) : o.rejectWith(e, [d, t]), this
                    }
                }),
                u = d.props;
            for (N(u, d.opts.specialEasing); a > r; r++)
                if (i = tt[r].call(d, e, u, d.opts)) return i;
            return J.map(u, O, d), J.isFunction(d.opts.start) && d.opts.start.call(e, d), J.fx.timer(J.extend(l, {
                elem: e,
                anim: d,
                queue: d.opts.queue
            })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
        }

        function D(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, s = 0,
                    r = t.toLowerCase().match(pe) || [];
                if (J.isFunction(n))
                    for (; i = r[s++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function M(e, t, n, i) {
            function s(o) {
                var l;
                return r[o] = !0, J.each(e[o] || [], function(e, o) {
                    var d = o(t, n, i);
                    return "string" != typeof d || a || r[d] ? a ? !(l = d) : void 0 : (t.dataTypes.unshift(d), s(d), !1)
                }), l
            }
            var r = {},
                a = e === yt;
            return s(t.dataTypes[0]) || !r["*"] && s("*")
        }

        function H(e, t) {
            var n, i, s = J.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((s[n] ? e : i || (i = {}))[n] = t[n]);
            return i && J.extend(!0, e, i), e
        }

        function F(e, t, n) {
            for (var i, s, r, a, o = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (s in o)
                    if (o[s] && o[s].test(i)) {
                        l.unshift(s);
                        break
                    }
            if (l[0] in n) r = l[0];
            else {
                for (s in n) {
                    if (!l[0] || e.converters[s + " " + l[0]]) {
                        r = s;
                        break
                    }
                    a || (a = s)
                }
                r = r || a
            }
            return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
        }

        function B(e, t, n, i) {
            var s, r, a, o, l, d = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (a in e.converters) d[a.toLowerCase()] = e.converters[a];
            for (r = u.shift(); r;)
                if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (a = d[l + " " + r] || d["* " + r], !a)
                    for (s in d)
                        if (o = s.split(" "), o[1] === r && (a = d[l + " " + o[0]] || d["* " + o[0]])) {
                            a === !0 ? a = d[s] : d[s] !== !0 && (r = o[0], u.unshift(o[1]));
                            break
                        }
                if (a !== !0)
                    if (a && e["throws"]) t = a(t);
                    else try {
                        t = a(t)
                    } catch (c) {
                        return {
                            state: "parsererror",
                            error: a ? c : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function j(e, t, n, i) {
            var s;
            if (J.isArray(t)) J.each(t, function(t, s) {
                n || Et.test(e) ? i(e, s) : j(e + "[" + ("object" == typeof s ? t : "") + "]", s, n, i)
            });
            else if (n || "object" !== J.type(t)) i(e, t);
            else
                for (s in t) j(e + "[" + s + "]", t[s], n, i)
        }

        function z(e) {
            return J.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var q = [],
            W = q.slice,
            U = q.concat,
            X = q.push,
            G = q.indexOf,
            V = {},
            Y = V.toString,
            K = V.hasOwnProperty,
            Q = {},
            $ = e.document,
            Z = "2.1.4",
            J = function(e, t) {
                return new J.fn.init(e, t)
            },
            ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            te = /^-ms-/,
            ne = /-([\da-z])/gi,
            ie = function(e, t) {
                return t.toUpperCase()
            };
        J.fn = J.prototype = {
            jquery: Z,
            constructor: J,
            selector: "",
            length: 0,
            toArray: function() {
                return W.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : W.call(this)
            },
            pushStack: function(e) {
                var t = J.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return J.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(J.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(W.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: X,
            sort: q.sort,
            splice: q.splice
        }, J.extend = J.fn.extend = function() {
            var e, t, n, i, s, r, a = arguments[0] || {},
                o = 1,
                l = arguments.length,
                d = !1;
            for ("boolean" == typeof a && (d = a, a = arguments[o] || {}, o++), "object" == typeof a || J.isFunction(a) || (a = {}), o === l && (a = this, o--); l > o; o++)
                if (null != (e = arguments[o]))
                    for (t in e) n = a[t], i = e[t], a !== i && (d && i && (J.isPlainObject(i) || (s = J.isArray(i))) ? (s ? (s = !1, r = n && J.isArray(n) ? n : []) : r = n && J.isPlainObject(n) ? n : {}, a[t] = J.extend(d, r, i)) : void 0 !== i && (a[t] = i));
            return a
        }, J.extend({
            expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === J.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                return !J.isArray(e) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(e) {
                return "object" !== J.type(e) || e.nodeType || J.isWindow(e) ? !1 : e.constructor && !K.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                var t, n = eval;
                e = J.trim(e), e && (1 === e.indexOf("use strict") ? (t = $.createElement("script"), t.text = e, $.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function(e) {
                return e.replace(te, "ms-").replace(ne, ie)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, i) {
                var s, r = 0,
                    a = e.length,
                    o = n(e);
                if (i) {
                    if (o)
                        for (; a > r && (s = t.apply(e[r], i), s !== !1); r++);
                    else
                        for (r in e)
                            if (s = t.apply(e[r], i), s === !1) break
                } else if (o)
                    for (; a > r && (s = t.call(e[r], r, e[r]), s !== !1); r++);
                else
                    for (r in e)
                        if (s = t.call(e[r], r, e[r]), s === !1) break; return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ee, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? J.merge(i, "string" == typeof e ? [e] : e) : X.call(i, e)), i
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : G.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, s = e.length; n > i; i++) e[s++] = t[i];
                return e.length = s, e
            },
            grep: function(e, t, n) {
                for (var i, s = [], r = 0, a = e.length, o = !n; a > r; r++) i = !t(e[r], r), i !== o && s.push(e[r]);
                return s
            },
            map: function(e, t, i) {
                var s, r = 0,
                    a = e.length,
                    o = n(e),
                    l = [];
                if (o)
                    for (; a > r; r++) s = t(e[r], r, i), null != s && l.push(s);
                else
                    for (r in e) s = t(e[r], r, i), null != s && l.push(s);
                return U.apply([], l)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, s;
                return "string" == typeof t && (n = e[t], t = e, e = n), J.isFunction(e) ? (i = W.call(arguments, 2), s = function() {
                    return e.apply(t || this, i.concat(W.call(arguments)))
                }, s.guid = e.guid = e.guid || J.guid++, s) : void 0
            },
            now: Date.now,
            support: Q
        }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            V["[object " + t + "]"] = t.toLowerCase()
        });
        var se = function(e) {
            function t(e, t, n, i) {
                var s, r, a, o, l, d, c, p, f, m;
                if ((t ? t.ownerDocument || t : j) !== k && O(t), t = t || k, n = n || [], o = t.nodeType, "string" != typeof e || !e || 1 !== o && 9 !== o && 11 !== o) return n;
                if (!i && R) {
                    if (11 !== o && (s = _e.exec(e)))
                        if (a = s[1]) {
                            if (9 === o) {
                                if (r = t.getElementById(a), !r || !r.parentNode) return n;
                                if (r.id === a) return n.push(r), n
                            } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && F(t, r) && r.id === a) return n.push(r), n
                        } else {
                            if (s[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = s[3]) && C.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), n
                        }
                    if (C.qsa && (!D || !D.test(e))) {
                        if (p = c = B, f = t, m = 1 !== o && e, 1 === o && "object" !== t.nodeName.toLowerCase()) {
                            for (d = T(e), (c = t.getAttribute("id")) ? p = c.replace(be, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = d.length; l--;) d[l] = p + h(d[l]);
                            f = ye.test(e) && u(t.parentNode) || t, m = d.join(",")
                        }
                        if (m) try {
                            return Z.apply(n, f.querySelectorAll(m)), n
                        } catch (g) {} finally {
                            c || t.removeAttribute("id")
                        }
                    }
                }
                return L(e.replace(le, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[B] = !0, e
            }

            function s(e) {
                var t = k.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function r(e, t) {
                for (var n = e.split("|"), i = e.length; i--;) w.attrHandle[n[i]] = t
            }

            function a(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function o(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function d(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var s, r = e([], n.length, t), a = r.length; a--;) n[s = r[a]] && (n[s] = !(i[s] = n[s]))
                    })
                })
            }

            function u(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function c() {}

            function h(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
            }

            function p(e, t, n) {
                var i = t.dir,
                    s = n && "parentNode" === i,
                    r = q++;
                return t.first ? function(t, n, r) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || s) return e(t, n, r)
                } : function(t, n, a) {
                    var o, l, d = [z, r];
                    if (a) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || s) && e(t, n, a)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || s) {
                                if (l = t[B] || (t[B] = {}), (o = l[i]) && o[0] === z && o[1] === r) return d[2] = o[2];
                                if (l[i] = d, d[2] = e(t, n, a)) return !0
                            }
                }
            }

            function f(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var s = e.length; s--;)
                        if (!e[s](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, n, i) {
                for (var s = 0, r = n.length; r > s; s++) t(e, n[s], i);
                return i
            }

            function g(e, t, n, i, s) {
                for (var r, a = [], o = 0, l = e.length, d = null != t; l > o; o++)(r = e[o]) && (!n || n(r, i, s)) && (a.push(r), d && t.push(o));
                return a
            }

            function v(e, t, n, s, r, a) {
                return s && !s[B] && (s = v(s)), r && !r[B] && (r = v(r, a)), i(function(i, a, o, l) {
                    var d, u, c, h = [],
                        p = [],
                        f = a.length,
                        v = i || m(t || "*", o.nodeType ? [o] : o, []),
                        _ = !e || !i && t ? v : g(v, h, e, o, l),
                        y = n ? r || (i ? e : f || s) ? [] : a : _;
                    if (n && n(_, y, o, l), s)
                        for (d = g(y, p), s(d, [], o, l), u = d.length; u--;)(c = d[u]) && (y[p[u]] = !(_[p[u]] = c));
                    if (i) {
                        if (r || e) {
                            if (r) {
                                for (d = [], u = y.length; u--;)(c = y[u]) && d.push(_[u] = c);
                                r(null, y = [], d, l)
                            }
                            for (u = y.length; u--;)(c = y[u]) && (d = r ? ee(i, c) : h[u]) > -1 && (i[d] = !(a[d] = c))
                        }
                    } else y = g(y === a ? y.splice(f, y.length) : y), r ? r(null, a, y, l) : Z.apply(a, y)
                })
            }

            function _(e) {
                for (var t, n, i, s = e.length, r = w.relative[e[0].type], a = r || w.relative[" "], o = r ? 1 : 0, l = p(function(e) {
                        return e === t
                    }, a, !0), d = p(function(e) {
                        return ee(t, e) > -1
                    }, a, !0), u = [function(e, n, i) {
                        var s = !r && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : d(e, n, i));
                        return t = null, s
                    }]; s > o; o++)
                    if (n = w.relative[e[o].type]) u = [p(f(u), n)];
                    else {
                        if (n = w.filter[e[o].type].apply(null, e[o].matches), n[B]) {
                            for (i = ++o; s > i && !w.relative[e[i].type]; i++);
                            return v(o > 1 && f(u), o > 1 && h(e.slice(0, o - 1).concat({
                                value: " " === e[o - 2].type ? "*" : ""
                            })).replace(le, "$1"), n, i > o && _(e.slice(o, i)), s > i && _(e = e.slice(i)), s > i && h(e))
                        }
                        u.push(n)
                    }
                return f(u)
            }

            function y(e, n) {
                var s = n.length > 0,
                    r = e.length > 0,
                    a = function(i, a, o, l, d) {
                        var u, c, h, p = 0,
                            f = "0",
                            m = i && [],
                            v = [],
                            _ = A,
                            y = i || r && w.find.TAG("*", d),
                            b = z += null == _ ? 1 : Math.random() || .1,
                            C = y.length;
                        for (d && (A = a !== k && a); f !== C && null != (u = y[f]); f++) {
                            if (r && u) {
                                for (c = 0; h = e[c++];)
                                    if (h(u, a, o)) {
                                        l.push(u);
                                        break
                                    }
                                d && (z = b)
                            }
                            s && ((u = !h && u) && p--, i && m.push(u))
                        }
                        if (p += f, s && f !== p) {
                            for (c = 0; h = n[c++];) h(m, v, a, o);
                            if (i) {
                                if (p > 0)
                                    for (; f--;) m[f] || v[f] || (v[f] = Q.call(l));
                                v = g(v)
                            }
                            Z.apply(l, v), d && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                        }
                        return d && (z = b, A = _), m
                    };
                return s ? i(a) : a
            }
            var b, C, w, x, E, T, S, L, A, I, P, O, k, N, R, D, M, H, F, B = "sizzle" + 1 * new Date,
                j = e.document,
                z = 0,
                q = 0,
                W = n(),
                U = n(),
                X = n(),
                G = function(e, t) {
                    return e === t && (P = !0), 0
                },
                V = 1 << 31,
                Y = {}.hasOwnProperty,
                K = [],
                Q = K.pop,
                $ = K.push,
                Z = K.push,
                J = K.slice,
                ee = function(e, t) {
                    for (var n = 0, i = e.length; i > n; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                se = ie.replace("w", "w#"),
                re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + se + "))|)" + ne + "*\\]",
                ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                oe = new RegExp(ne + "+", "g"),
                le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                de = new RegExp("^" + ne + "*," + ne + "*"),
                ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                he = new RegExp(ae),
                pe = new RegExp("^" + se + "$"),
                fe = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + re),
                    PSEUDO: new RegExp("^" + ae),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                me = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                _e = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                be = /'|\\/g,
                Ce = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                we = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                xe = function() {
                    O()
                };
            try {
                Z.apply(K = J.call(j.childNodes), j.childNodes), K[j.childNodes.length].nodeType
            } catch (Ee) {
                Z = {
                    apply: K.length ? function(e, t) {
                        $.apply(e, J.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            C = t.support = {}, E = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, O = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : j;
                return i !== k && 9 === i.nodeType && i.documentElement ? (k = i, N = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), R = !E(i), C.attributes = s(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), C.getElementsByTagName = s(function(e) {
                    return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
                }), C.getElementsByClassName = ve.test(i.getElementsByClassName), C.getById = s(function(e) {
                    return N.appendChild(e).id = B, !i.getElementsByName || !i.getElementsByName(B).length
                }), C.getById ? (w.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && R) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, w.filter.ID = function(e) {
                    var t = e.replace(Ce, we);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete w.find.ID, w.filter.ID = function(e) {
                    var t = e.replace(Ce, we);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), w.find.TAG = C.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : C.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        s = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[s++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, w.find.CLASS = C.getElementsByClassName && function(e, t) {
                    return R ? t.getElementsByClassName(e) : void 0
                }, M = [], D = [], (C.qsa = ve.test(i.querySelectorAll)) && (s(function(e) {
                    N.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || D.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + B + "-]").length || D.push("~="), e.querySelectorAll(":checked").length || D.push(":checked"), e.querySelectorAll("a#" + B + "+*").length || D.push(".#.+[+~]")
                }), s(function(e) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && D.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), D.push(",.*:")
                })), (C.matchesSelector = ve.test(H = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && s(function(e) {
                    C.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), M.push("!=", ae)
                }), D = D.length && new RegExp(D.join("|")), M = M.length && new RegExp(M.join("|")), t = ve.test(N.compareDocumentPosition), F = t || ve.test(N.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, G = t ? function(e, t) {
                    if (e === t) return P = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !C.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === j && F(j, e) ? -1 : t === i || t.ownerDocument === j && F(j, t) ? 1 : I ? ee(I, e) - ee(I, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return P = !0, 0;
                    var n, s = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        l = [e],
                        d = [t];
                    if (!r || !o) return e === i ? -1 : t === i ? 1 : r ? -1 : o ? 1 : I ? ee(I, e) - ee(I, t) : 0;
                    if (r === o) return a(e, t);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (n = t; n = n.parentNode;) d.unshift(n);
                    for (; l[s] === d[s];) s++;
                    return s ? a(l[s], d[s]) : l[s] === j ? -1 : d[s] === j ? 1 : 0
                }, i) : k
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== k && O(e), n = n.replace(ce, "='$1']"), C.matchesSelector && R && (!M || !M.test(n)) && (!D || !D.test(n))) try {
                    var i = H.call(e, n);
                    if (i || C.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (s) {}
                return t(n, k, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== k && O(e), F(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== k && O(e);
                var n = w.attrHandle[t.toLowerCase()],
                    i = n && Y.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !R) : void 0;
                return void 0 !== i ? i : C.attributes || !R ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    s = 0;
                if (P = !C.detectDuplicates, I = !C.sortStable && e.slice(0), e.sort(G), P) {
                    for (; t = e[s++];) t === e[s] && (i = n.push(s));
                    for (; i--;) e.splice(n[i], 1)
                }
                return I = null, e
            }, x = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    s = e.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
                    } else if (3 === s || 4 === s) return e.nodeValue
                } else
                    for (; t = e[i++];) n += x(t);
                return n
            }, w = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: fe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Ce, we), e[3] = (e[3] || e[4] || e[5] || "").replace(Ce, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && he.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Ce, we).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = W[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(s) {
                            var r = t.attr(s, e);
                            return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, i, s) {
                        var r = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            o = "of-type" === t;
                        return 1 === i && 0 === s ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var d, u, c, h, p, f, m = r !== a ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = o && t.nodeName.toLowerCase(),
                                _ = !l && !o;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (c = t; c = c[m];)
                                            if (o ? c.nodeName.toLowerCase() === v : 1 === c.nodeType) return !1;
                                        f = m = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [a ? g.firstChild : g.lastChild], a && _) {
                                    for (u = g[B] || (g[B] = {}), d = u[e] || [], p = d[0] === z && d[1], h = d[0] === z && d[2], c = p && g.childNodes[p]; c = ++p && c && c[m] || (h = p = 0) || f.pop();)
                                        if (1 === c.nodeType && ++h && c === t) {
                                            u[e] = [z, p, h];
                                            break
                                        }
                                } else if (_ && (d = (t[B] || (t[B] = {}))[e]) && d[0] === z) h = d[1];
                                else
                                    for (;
                                        (c = ++p && c && c[m] || (h = p = 0) || f.pop()) && ((o ? c.nodeName.toLowerCase() !== v : 1 !== c.nodeType) || !++h || (_ && ((c[B] || (c[B] = {}))[e] = [z, h]), c !== t)););
                                return h -= s, h === i || h % i === 0 && h / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var s, r = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return r[B] ? r(n) : r.length > 1 ? (s = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, s = r(e, n), a = s.length; a--;) i = ee(e, s[a]), e[i] = !(t[i] = s[a])
                        }) : function(e) {
                            return r(e, 0, s)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            s = S(e.replace(le, "$1"));
                        return s[B] ? i(function(e, t, n, i) {
                            for (var r, a = s(e, null, i, []), o = e.length; o--;)(r = a[o]) && (e[o] = !(t[o] = r))
                        }) : function(e, i, r) {
                            return t[0] = e, s(t, null, r, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(Ce, we),
                            function(t) {
                                return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(Ce, we).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = R ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === N
                    },
                    focus: function(e) {
                        return e === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !w.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ge.test(e.nodeName)
                    },
                    input: function(e) {
                        return me.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: d(function() {
                        return [0]
                    }),
                    last: d(function(e, t) {
                        return [t - 1]
                    }),
                    eq: d(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: d(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: d(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: d(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: d(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, w.pseudos.nth = w.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) w.pseudos[b] = o(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) w.pseudos[b] = l(b);
            return c.prototype = w.filters = w.pseudos, w.setFilters = new c, T = t.tokenize = function(e, n) {
                var i, s, r, a, o, l, d, u = U[e + " "];
                if (u) return n ? 0 : u.slice(0);
                for (o = e, l = [], d = w.preFilter; o;) {
                    (!i || (s = de.exec(o))) && (s && (o = o.slice(s[0].length) || o), l.push(r = [])), i = !1, (s = ue.exec(o)) && (i = s.shift(), r.push({
                        value: i,
                        type: s[0].replace(le, " ")
                    }), o = o.slice(i.length));
                    for (a in w.filter) !(s = fe[a].exec(o)) || d[a] && !(s = d[a](s)) || (i = s.shift(), r.push({
                        value: i,
                        type: a,
                        matches: s
                    }), o = o.slice(i.length));
                    if (!i) break
                }
                return n ? o.length : o ? t.error(e) : U(e, l).slice(0)
            }, S = t.compile = function(e, t) {
                var n, i = [],
                    s = [],
                    r = X[e + " "];
                if (!r) {
                    for (t || (t = T(e)), n = t.length; n--;) r = _(t[n]), r[B] ? i.push(r) : s.push(r);
                    r = X(e, y(s, i)), r.selector = e
                }
                return r
            }, L = t.select = function(e, t, n, i) {
                var s, r, a, o, l, d = "function" == typeof e && e,
                    c = !i && T(e = d.selector || e);
                if (n = n || [], 1 === c.length) {
                    if (r = c[0] = c[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && C.getById && 9 === t.nodeType && R && w.relative[r[1].type]) {
                        if (t = (w.find.ID(a.matches[0].replace(Ce, we), t) || [])[0], !t) return n;
                        d && (t = t.parentNode), e = e.slice(r.shift().value.length)
                    }
                    for (s = fe.needsContext.test(e) ? 0 : r.length; s-- && (a = r[s], !w.relative[o = a.type]);)
                        if ((l = w.find[o]) && (i = l(a.matches[0].replace(Ce, we), ye.test(r[0].type) && u(t.parentNode) || t))) {
                            if (r.splice(s, 1), e = i.length && h(r), !e) return Z.apply(n, i), n;
                            break
                        }
                }
                return (d || S(e, c))(i, t, !R, n, ye.test(e) && u(t.parentNode) || t), n
            }, C.sortStable = B.split("").sort(G).join("") === B, C.detectDuplicates = !!P, O(), C.sortDetached = s(function(e) {
                return 1 & e.compareDocumentPosition(k.createElement("div"))
            }), s(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), C.attributes && s(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || r("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
            }), s(function(e) {
                return null == e.getAttribute("disabled")
            }) || r(te, function(e, t, n) {
                var i;
                return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        J.find = se, J.expr = se.selectors, J.expr[":"] = J.expr.pseudos, J.unique = se.uniqueSort, J.text = se.getText, J.isXMLDoc = se.isXML, J.contains = se.contains;
        var re = J.expr.match.needsContext,
            ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            oe = /^.[^:#\[\.,]*$/;
        J.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? J.find.matchesSelector(i, e) ? [i] : [] : J.find.matches(e, J.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, J.fn.extend({
            find: function(e) {
                var t, n = this.length,
                    i = [],
                    s = this;
                if ("string" != typeof e) return this.pushStack(J(e).filter(function() {
                    for (t = 0; n > t; t++)
                        if (J.contains(s[t], this)) return !0
                }));
                for (t = 0; n > t; t++) J.find(e, s[t], i);
                return i = this.pushStack(n > 1 ? J.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && re.test(e) ? J(e) : e || [], !1).length
            }
        });
        var le, de = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ue = J.fn.init = function(e, t) {
                var n, i;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : de.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof J ? t[0] : t, J.merge(this, J.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : $, !0)), ae.test(n[1]) && J.isPlainObject(t))
                            for (n in t) J.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    return i = $.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = $, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : J.isFunction(e) ? "undefined" != typeof le.ready ? le.ready(e) : e(J) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), J.makeArray(e, this))
            };
        ue.prototype = J.fn, le = J($);
        var ce = /^(?:parents|prev(?:Until|All))/,
            he = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        J.extend({
            dir: function(e, t, n) {
                for (var i = [], s = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (s && J(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), J.fn.extend({
            has: function(e) {
                var t = J(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; n > e; e++)
                        if (J.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, s = this.length, r = [], a = re.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; s > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && J.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
                return this.pushStack(r.length > 1 ? J.unique(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? G.call(J(e), this[0]) : G.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(J.unique(J.merge(this.get(), J(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), J.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return J.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return J.dir(e, "parentNode", n)
            },
            next: function(e) {
                return s(e, "nextSibling")
            },
            prev: function(e) {
                return s(e, "previousSibling")
            },
            nextAll: function(e) {
                return J.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return J.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return J.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return J.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return J.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return J.sibling(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || J.merge([], e.childNodes)
            }
        }, function(e, t) {
            J.fn[e] = function(n, i) {
                var s = J.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (s = J.filter(i, s)), this.length > 1 && (he[e] || J.unique(s), ce.test(e) && s.reverse()), this.pushStack(s)
            }
        });
        var pe = /\S+/g,
            fe = {};
        J.Callbacks = function(e) {
            e = "string" == typeof e ? fe[e] || r(e) : J.extend({}, e);
            var t, n, i, s, a, o, l = [],
                d = !e.once && [],
                u = function(r) {
                    for (t = e.memory && r, n = !0, o = s || 0, s = 0, a = l.length, i = !0; l && a > o; o++)
                        if (l[o].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                            t = !1;
                            break
                        }
                    i = !1, l && (d ? d.length && u(d.shift()) : t ? l = [] : c.disable())
                },
                c = {
                    add: function() {
                        if (l) {
                            var n = l.length;
                            ! function r(t) {
                                J.each(t, function(t, n) {
                                    var i = J.type(n);
                                    "function" === i ? e.unique && c.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                                })
                            }(arguments), i ? a = l.length : t && (s = n, u(t))
                        }
                        return this
                    },
                    remove: function() {
                        return l && J.each(arguments, function(e, t) {
                            for (var n;
                                (n = J.inArray(t, l, n)) > -1;) l.splice(n, 1), i && (a >= n && a--, o >= n && o--)
                        }), this
                    },
                    has: function(e) {
                        return e ? J.inArray(e, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], a = 0, this
                    },
                    disable: function() {
                        return l = d = t = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return d = void 0, t || c.disable(), this
                    },
                    locked: function() {
                        return !d
                    },
                    fireWith: function(e, t) {
                        return !l || n && !d || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? d.push(t) : u(t)), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return c
        }, J.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", J.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", J.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", J.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return J.Deferred(function(n) {
                                J.each(t, function(t, r) {
                                    var a = J.isFunction(e[t]) && e[t];
                                    s[r[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && J.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? J.extend(e, i) : i
                        }
                    },
                    s = {};
                return i.pipe = i.then, J.each(t, function(e, r) {
                    var a = r[2],
                        o = r[3];
                    i[r[1]] = a.add, o && a.add(function() {
                        n = o
                    }, t[1 ^ e][2].disable, t[2][2].lock), s[r[0]] = function() {
                        return s[r[0] + "With"](this === s ? i : this, arguments), this
                    }, s[r[0] + "With"] = a.fireWith
                }), i.promise(s), e && e.call(s, s), s
            },
            when: function(e) {
                var t, n, i, s = 0,
                    r = W.call(arguments),
                    a = r.length,
                    o = 1 !== a || e && J.isFunction(e.promise) ? a : 0,
                    l = 1 === o ? e : J.Deferred(),
                    d = function(e, n, i) {
                        return function(s) {
                            n[e] = this, i[e] = arguments.length > 1 ? W.call(arguments) : s, i === t ? l.notifyWith(n, i) : --o || l.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a); a > s; s++) r[s] && J.isFunction(r[s].promise) ? r[s].promise().done(d(s, i, r)).fail(l.reject).progress(d(s, n, t)) : --o;
                return o || l.resolveWith(i, r), l.promise()
            }
        });
        var me;
        J.fn.ready = function(e) {
            return J.ready.promise().done(e), this
        }, J.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? J.readyWait++ : J.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0, e !== !0 && --J.readyWait > 0 || (me.resolveWith($, [J]), J.fn.triggerHandler && (J($).triggerHandler("ready"), J($).off("ready"))))
            }
        }), J.ready.promise = function(t) {
            return me || (me = J.Deferred(), "complete" === $.readyState ? setTimeout(J.ready) : ($.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), me.promise(t)
        }, J.ready.promise();
        var ge = J.access = function(e, t, n, i, s, r, a) {
            var o = 0,
                l = e.length,
                d = null == n;
            if ("object" === J.type(n)) {
                s = !0;
                for (o in n) J.access(e, t, o, n[o], !0, r, a)
            } else if (void 0 !== i && (s = !0, J.isFunction(i) || (a = !0), d && (a ? (t.call(e, i), t = null) : (d = t, t = function(e, t, n) {
                    return d.call(J(e), n)
                })), t))
                for (; l > o; o++) t(e[o], n, a ? i : i.call(e[o], o, t(e[o], n)));
            return s ? e : d ? t.call(e) : l ? t(e[0], n) : r
        };
        J.acceptData = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }, o.uid = 1, o.accepts = J.acceptData, o.prototype = {
            key: function(e) {
                if (!o.accepts(e)) return 0;
                var t = {},
                    n = e[this.expando];
                if (!n) {
                    n = o.uid++;
                    try {
                        t[this.expando] = {
                            value: n
                        }, Object.defineProperties(e, t)
                    } catch (i) {
                        t[this.expando] = n, J.extend(e, t)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}), n
            },
            set: function(e, t, n) {
                var i, s = this.key(e),
                    r = this.cache[s];
                if ("string" == typeof t) r[t] = n;
                else if (J.isEmptyObject(r)) J.extend(this.cache[s], t);
                else
                    for (i in t) r[i] = t[i];
                return r
            },
            get: function(e, t) {
                var n = this.cache[this.key(e)];
                return void 0 === t ? n : n[t]
            },
            access: function(e, t, n) {
                var i;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, J.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i, s, r = this.key(e),
                    a = this.cache[r];
                if (void 0 === t) this.cache[r] = {};
                else {
                    J.isArray(t) ? i = t.concat(t.map(J.camelCase)) : (s = J.camelCase(t), t in a ? i = [t, s] : (i = s, i = i in a ? [i] : i.match(pe) || [])), n = i.length;
                    for (; n--;) delete a[i[n]]
                }
            },
            hasData: function(e) {
                return !J.isEmptyObject(this.cache[e[this.expando]] || {})
            },
            discard: function(e) {
                e[this.expando] && delete this.cache[e[this.expando]]
            }
        };
        var ve = new o,
            _e = new o,
            ye = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            be = /([A-Z])/g;
        J.extend({
            hasData: function(e) {
                return _e.hasData(e) || ve.hasData(e)
            },
            data: function(e, t, n) {
                return _e.access(e, t, n)
            },
            removeData: function(e, t) {
                _e.remove(e, t)
            },
            _data: function(e, t, n) {
                return ve.access(e, t, n)
            },
            _removeData: function(e, t) {
                ve.remove(e, t)
            }
        }), J.fn.extend({
            data: function(e, t) {
                var n, i, s, r = this[0],
                    a = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (s = _e.get(r), 1 === r.nodeType && !ve.get(r, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = J.camelCase(i.slice(5)), l(r, i, s[i])));
                        ve.set(r, "hasDataAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof e ? this.each(function() {
                    _e.set(this, e)
                }) : ge(this, function(t) {
                    var n, i = J.camelCase(e);
                    if (r && void 0 === t) {
                        if (n = _e.get(r, e), void 0 !== n) return n;
                        if (n = _e.get(r, i), void 0 !== n) return n;
                        if (n = l(r, i, void 0), void 0 !== n) return n
                    } else this.each(function() {
                        var n = _e.get(this, i);
                        _e.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && _e.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    _e.remove(this, e)
                })
            }
        }), J.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = ve.get(e, t), n && (!i || J.isArray(n) ? i = ve.access(e, t, J.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = J.queue(e, t),
                    i = n.length,
                    s = n.shift(),
                    r = J._queueHooks(e, t),
                    a = function() {
                        J.dequeue(e, t)
                    };
                "inprogress" === s && (s = n.shift(), i--), s && ("fx" === t && n.unshift("inprogress"), delete r.stop, s.call(e, a, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return ve.get(e, n) || ve.access(e, n, {
                    empty: J.Callbacks("once memory").add(function() {
                        ve.remove(e, [t + "queue", n])
                    })
                })
            }
        }), J.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? J.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = J.queue(this, e, t);
                    J._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && J.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    J.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    s = J.Deferred(),
                    r = this,
                    a = this.length,
                    o = function() {
                        --i || s.resolveWith(r, [r])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ve.get(r[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(o));
                return o(), s.promise(t)
            }
        });
        var Ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            we = ["Top", "Right", "Bottom", "Left"],
            xe = function(e, t) {
                return e = t || e, "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e)
            },
            Ee = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = $.createDocumentFragment(),
                t = e.appendChild($.createElement("div")),
                n = $.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Te = "undefined";
        Q.focusinBubbles = "onfocusin" in e;
        var Se = /^key/,
            Le = /^(?:mouse|pointer|contextmenu)|click/,
            Ae = /^(?:focusinfocus|focusoutblur)$/,
            Ie = /^([^.]*)(?:\.(.+)|)$/;
        J.event = {
            global: {},
            add: function(e, t, n, i, s) {
                var r, a, o, l, d, u, c, h, p, f, m, g = ve.get(e);
                if (g)
                    for (n.handler && (r = n, n = r.handler, s = r.selector), n.guid || (n.guid = J.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
                            return typeof J !== Te && J.event.triggered !== t.type ? J.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(pe) || [""], d = t.length; d--;) o = Ie.exec(t[d]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p && (c = J.event.special[p] || {}, p = (s ? c.delegateType : c.bindType) || p, c = J.event.special[p] || {}, u = J.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: s,
                        needsContext: s && J.expr.match.needsContext.test(s),
                        namespace: f.join(".")
                    }, r), (h = l[p]) || (h = l[p] = [], h.delegateCount = 0, c.setup && c.setup.call(e, i, f, a) !== !1 || e.addEventListener && e.addEventListener(p, a, !1)), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), s ? h.splice(h.delegateCount++, 0, u) : h.push(u), J.event.global[p] = !0)
            },
            remove: function(e, t, n, i, s) {
                var r, a, o, l, d, u, c, h, p, f, m, g = ve.hasData(e) && ve.get(e);
                if (g && (l = g.events)) {
                    for (t = (t || "").match(pe) || [""], d = t.length; d--;)
                        if (o = Ie.exec(t[d]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p) {
                            for (c = J.event.special[p] || {}, p = (i ? c.delegateType : c.bindType) || p, h = l[p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = h.length; r--;) u = h[r], !s && m !== u.origType || n && n.guid !== u.guid || o && !o.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, c.remove && c.remove.call(e, u));
                            a && !h.length && (c.teardown && c.teardown.call(e, f, g.handle) !== !1 || J.removeEvent(e, p, g.handle), delete l[p])
                        } else
                            for (p in l) J.event.remove(e, p + t[d], n, i, !0);
                    J.isEmptyObject(l) && (delete g.handle, ve.remove(e, "events"))
                }
            },
            trigger: function(t, n, i, s) {
                var r, a, o, l, d, u, c, h = [i || $],
                    p = K.call(t, "type") ? t.type : t,
                    f = K.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = o = i = i || $, 3 !== i.nodeType && 8 !== i.nodeType && !Ae.test(p + J.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), d = p.indexOf(":") < 0 && "on" + p, t = t[J.expando] ? t : new J.Event(p, "object" == typeof t && t), t.isTrigger = s ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : J.makeArray(n, [t]), c = J.event.special[p] || {}, s || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                    if (!s && !c.noBubble && !J.isWindow(i)) {
                        for (l = c.delegateType || p, Ae.test(l + p) || (a = a.parentNode); a; a = a.parentNode) h.push(a), o = a;
                        o === (i.ownerDocument || $) && h.push(o.defaultView || o.parentWindow || e)
                    }
                    for (r = 0;
                        (a = h[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : c.bindType || p, u = (ve.get(a, "events") || {})[t.type] && ve.get(a, "handle"), u && u.apply(a, n), u = d && a[d], u && u.apply && J.acceptData(a) && (t.result = u.apply(a, n), t.result === !1 && t.preventDefault());
                    return t.type = p, s || t.isDefaultPrevented() || c._default && c._default.apply(h.pop(), n) !== !1 || !J.acceptData(i) || d && J.isFunction(i[p]) && !J.isWindow(i) && (o = i[d], o && (i[d] = null), J.event.triggered = p, i[p](), J.event.triggered = void 0, o && (i[d] = o)), t.result
                }
            },
            dispatch: function(e) {
                e = J.event.fix(e);
                var t, n, i, s, r, a = [],
                    o = W.call(arguments),
                    l = (ve.get(this, "events") || {})[e.type] || [],
                    d = J.event.special[e.type] || {};
                if (o[0] = e, e.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, e) !== !1) {
                    for (a = J.event.handlers.call(this, e, l), t = 0;
                        (s = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = s.elem, n = 0;
                            (r = s.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, i = ((J.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, o), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return d.postDispatch && d.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, s, r, a = [],
                    o = t.delegateCount,
                    l = e.target;
                if (o && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l !== this; l = l.parentNode || this)
                        if (l.disabled !== !0 || "click" !== e.type) {
                            for (i = [], n = 0; o > n; n++) r = t[n], s = r.selector + " ", void 0 === i[s] && (i[s] = r.needsContext ? J(s, this).index(l) >= 0 : J.find(s, this, null, [l]).length), i[s] && i.push(r);
                            i.length && a.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return o < t.length && a.push({
                    elem: this,
                    handlers: t.slice(o)
                }), a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, s, r = t.button;
                    return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || $, i = n.documentElement, s = n.body, e.pageX = t.clientX + (i && i.scrollLeft || s && s.scrollLeft || 0) - (i && i.clientLeft || s && s.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || s && s.scrollTop || 0) - (i && i.clientTop || s && s.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[J.expando]) return e;
                var t, n, i, s = e.type,
                    r = e,
                    a = this.fixHooks[s];
                for (a || (this.fixHooks[s] = a = Le.test(s) ? this.mouseHooks : Se.test(s) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new J.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
                return e.target || (e.target = $), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, r) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== c() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === c() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return J.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var s = J.extend(new J.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? J.event.trigger(s, null, t) : J.event.dispatch.call(t, s), s.isDefaultPrevented() && n.preventDefault()
            }
        }, J.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }, J.Event = function(e, t) {
            return this instanceof J.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? d : u) : this.type = e, t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(e, t)
        }, J.Event.prototype = {
            isDefaultPrevented: u,
            isPropagationStopped: u,
            isImmediatePropagationStopped: u,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = d, e && e.preventDefault && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = d, e && e.stopPropagation && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = d, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, J.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            J.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        s = e.relatedTarget,
                        r = e.handleObj;
                    return (!s || s !== i && !J.contains(i, s)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), Q.focusinBubbles || J.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                J.event.simulate(t, e.target, J.event.fix(e), !0)
            };
            J.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        s = ve.access(i, t);
                    s || i.addEventListener(e, n, !0), ve.access(i, t, (s || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        s = ve.access(i, t) - 1;
                    s ? ve.access(i, t, s) : (i.removeEventListener(e, n, !0), ve.remove(i, t))
                }
            }
        }), J.fn.extend({
            on: function(e, t, n, i, s) {
                var r, a;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (a in e) this.on(a, t, n, e[a], s);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = u;
                else if (!i) return this;
                return 1 === s && (r = i, i = function(e) {
                    return J().off(e), r.apply(this, arguments)
                }, i.guid = r.guid || (r.guid = J.guid++)), this.each(function() {
                    J.event.add(this, e, i, n, t)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, s;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, J(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (s in e) this.off(s, t, e[s]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = u), this.each(function() {
                    J.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    J.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? J.event.trigger(e, t, n, !0) : void 0
            }
        });
        var Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Oe = /<([\w:]+)/,
            ke = /<|&#?\w+;/,
            Ne = /<(?:script|style|link)/i,
            Re = /checked\s*(?:[^=]|=\s*.checked.)/i,
            De = /^$|\/(?:java|ecma)script/i,
            Me = /^true\/(.*)/,
            He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Fe = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Fe.optgroup = Fe.option, Fe.tbody = Fe.tfoot = Fe.colgroup = Fe.caption = Fe.thead, Fe.th = Fe.td, J.extend({
            clone: function(e, t, n) {
                var i, s, r, a, o = e.cloneNode(!0),
                    l = J.contains(e.ownerDocument, e);
                if (!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e)))
                    for (a = v(o), r = v(e), i = 0, s = r.length; s > i; i++) _(r[i], a[i]);
                if (t)
                    if (n)
                        for (r = r || v(e), a = a || v(o), i = 0, s = r.length; s > i; i++) g(r[i], a[i]);
                    else g(e, o);
                return a = v(o, "script"), a.length > 0 && m(a, !l && v(e, "script")), o
            },
            buildFragment: function(e, t, n, i) {
                for (var s, r, a, o, l, d, u = t.createDocumentFragment(), c = [], h = 0, p = e.length; p > h; h++)
                    if (s = e[h], s || 0 === s)
                        if ("object" === J.type(s)) J.merge(c, s.nodeType ? [s] : s);
                        else if (ke.test(s)) {
                    for (r = r || u.appendChild(t.createElement("div")), a = (Oe.exec(s) || ["", ""])[1].toLowerCase(), o = Fe[a] || Fe._default, r.innerHTML = o[1] + s.replace(Pe, "<$1></$2>") + o[2], d = o[0]; d--;) r = r.lastChild;
                    J.merge(c, r.childNodes), r = u.firstChild, r.textContent = ""
                } else c.push(t.createTextNode(s));
                for (u.textContent = "", h = 0; s = c[h++];)
                    if ((!i || -1 === J.inArray(s, i)) && (l = J.contains(s.ownerDocument, s), r = v(u.appendChild(s), "script"), l && m(r), n))
                        for (d = 0; s = r[d++];) De.test(s.type || "") && n.push(s);
                return u
            },
            cleanData: function(e) {
                for (var t, n, i, s, r = J.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                    if (J.acceptData(n) && (s = n[ve.expando], s && (t = ve.cache[s]))) {
                        if (t.events)
                            for (i in t.events) r[i] ? J.event.remove(n, i) : J.removeEvent(n, i, t.handle);
                        ve.cache[s] && delete ve.cache[s]
                    }
                    delete _e.cache[n[_e.expando]]
                }
            }
        }), J.fn.extend({
            text: function(e) {
                return ge(this, function(e) {
                    return void 0 === e ? J.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = h(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = h(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? J.filter(e, this) : this, s = 0; null != (n = i[s]); s++) t || 1 !== n.nodeType || J.cleanData(v(n)), n.parentNode && (t && J.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (J.cleanData(v(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return J.clone(this, e, t)
                })
            },
            html: function(e) {
                return ge(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Ne.test(e) && !Fe[(Oe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Pe, "<$1></$2>");
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (J.cleanData(v(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (s) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode, J.cleanData(v(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = U.apply([], e);
                var n, i, s, r, a, o, l = 0,
                    d = this.length,
                    u = this,
                    c = d - 1,
                    h = e[0],
                    m = J.isFunction(h);
                if (m || d > 1 && "string" == typeof h && !Q.checkClone && Re.test(h)) return this.each(function(n) {
                    var i = u.eq(n);
                    m && (e[0] = h.call(this, n, i.html())), i.domManip(e, t)
                });
                if (d && (n = J.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                    for (s = J.map(v(n, "script"), p), r = s.length; d > l; l++) a = n, l !== c && (a = J.clone(a, !0, !0), r && J.merge(s, v(a, "script"))), t.call(this[l], a, l);
                    if (r)
                        for (o = s[s.length - 1].ownerDocument, J.map(s, f), l = 0; r > l; l++) a = s[l], De.test(a.type || "") && !ve.access(a, "globalEval") && J.contains(o, a) && (a.src ? J._evalUrl && J._evalUrl(a.src) : J.globalEval(a.textContent.replace(He, "")))
                }
                return this
            }
        }), J.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            J.fn[e] = function(e) {
                for (var n, i = [], s = J(e), r = s.length - 1, a = 0; r >= a; a++) n = a === r ? this : this.clone(!0), J(s[a])[t](n), X.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Be, je = {},
            ze = /^margin/,
            qe = new RegExp("^(" + Ce + ")(?!px)[a-z%]+$", "i"),
            We = function(t) {
                return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
            };
        ! function() {
            function t() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", s.appendChild(r);
                var t = e.getComputedStyle(a, null);
                n = "1%" !== t.top, i = "4px" === t.width, s.removeChild(r)
            }
            var n, i, s = $.documentElement,
                r = $.createElement("div"),
                a = $.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(a), e.getComputedStyle && J.extend(Q, {
                pixelPosition: function() {
                    return t(), n
                },
                boxSizingReliable: function() {
                    return null == i && t(), i
                },
                reliableMarginRight: function() {
                    var t, n = a.appendChild($.createElement("div"));
                    return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", s.appendChild(r), t = !parseFloat(e.getComputedStyle(n, null).marginRight), s.removeChild(r), a.removeChild(n), t
                }
            }))
        }(), J.swap = function(e, t, n, i) {
            var s, r, a = {};
            for (r in t) a[r] = e.style[r], e.style[r] = t[r];
            s = n.apply(e, i || []);
            for (r in t) e.style[r] = a[r];
            return s
        };
        var Ue = /^(none|table(?!-c[ea]).+)/,
            Xe = new RegExp("^(" + Ce + ")(.*)$", "i"),
            Ge = new RegExp("^([+-])=(" + Ce + ")", "i"),
            Ve = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ye = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Ke = ["Webkit", "O", "Moz", "ms"];
        J.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = C(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var s, r, a, o = J.camelCase(t),
                        l = e.style;
                    return t = J.cssProps[o] || (J.cssProps[o] = x(l, o)), a = J.cssHooks[t] || J.cssHooks[o], void 0 === n ? a && "get" in a && void 0 !== (s = a.get(e, !1, i)) ? s : l[t] : (r = typeof n, "string" === r && (s = Ge.exec(n)) && (n = (s[1] + 1) * s[2] + parseFloat(J.css(e, t)), r = "number"), null != n && n === n && ("number" !== r || J.cssNumber[o] || (n += "px"), Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n)), void 0)
                }
            },
            css: function(e, t, n, i) {
                var s, r, a, o = J.camelCase(t);
                return t = J.cssProps[o] || (J.cssProps[o] = x(e.style, o)), a = J.cssHooks[t] || J.cssHooks[o], a && "get" in a && (s = a.get(e, !0, n)), void 0 === s && (s = C(e, t, i)), "normal" === s && t in Ye && (s = Ye[t]), "" === n || n ? (r = parseFloat(s), n === !0 || J.isNumeric(r) ? r || 0 : s) : s
            }
        }), J.each(["height", "width"], function(e, t) {
            J.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? Ue.test(J.css(e, "display")) && 0 === e.offsetWidth ? J.swap(e, Ve, function() {
                        return S(e, t, i)
                    }) : S(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var s = i && We(e);
                    return E(e, n, i ? T(e, t, i, "border-box" === J.css(e, "boxSizing", !1, s), s) : 0)
                }
            }
        }), J.cssHooks.marginRight = w(Q.reliableMarginRight, function(e, t) {
            return t ? J.swap(e, {
                display: "inline-block"
            }, C, [e, "marginRight"]) : void 0
        }), J.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            J.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, s = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) s[e + we[i] + t] = r[i] || r[i - 2] || r[0];
                    return s
                }
            }, ze.test(e) || (J.cssHooks[e + t].set = E)
        }), J.fn.extend({
            css: function(e, t) {
                return ge(this, function(e, t, n) {
                    var i, s, r = {},
                        a = 0;
                    if (J.isArray(t)) {
                        for (i = We(e), s = t.length; s > a; a++) r[t[a]] = J.css(e, t[a], !1, i);
                        return r
                    }
                    return void 0 !== n ? J.style(e, t, n) : J.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return L(this, !0)
            },
            hide: function() {
                return L(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    xe(this) ? J(this).show() : J(this).hide()
                })
            }
        }), J.Tween = A, A.prototype = {
            constructor: A,
            init: function(e, t, n, i, s, r) {
                this.elem = e, this.prop = n, this.easing = s || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (J.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = A.propHooks[this.prop];
                return e && e.get ? e.get(this) : A.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = A.propHooks[this.prop];
                return this.options.duration ? this.pos = t = J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : A.propHooks._default.set(this), this
            }
        }, A.prototype.init.prototype = A.prototype, A.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, J.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, J.fx = A.prototype.init, J.fx.step = {};
        var Qe, $e, Ze = /^(?:toggle|show|hide)$/,
            Je = new RegExp("^(?:([+-])=|)(" + Ce + ")([a-z%]*)$", "i"),
            et = /queueHooks$/,
            tt = [k],
            nt = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        s = Je.exec(t),
                        r = s && s[3] || (J.cssNumber[e] ? "" : "px"),
                        a = (J.cssNumber[e] || "px" !== r && +i) && Je.exec(J.css(n.elem, e)),
                        o = 1,
                        l = 20;
                    if (a && a[3] !== r) {
                        r = r || a[3], s = s || [], a = +i || 1;
                        do o = o || ".5", a /= o, J.style(n.elem, e, a + r); while (o !== (o = n.cur() / i) && 1 !== o && --l)
                    }
                    return s && (a = n.start = +a || +i || 0, n.unit = r, n.end = s[1] ? a + (s[1] + 1) * s[2] : +s[2]), n
                }]
            };
        J.Animation = J.extend(R, {
                tweener: function(e, t) {
                    J.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, i = 0, s = e.length; s > i; i++) n = e[i], nt[n] = nt[n] || [], nt[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? tt.unshift(e) : tt.push(e)
                }
            }), J.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? J.extend({}, e) : {
                    complete: n || !n && t || J.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !J.isFunction(t) && t
                };
                return i.duration = J.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in J.fx.speeds ? J.fx.speeds[i.duration] : J.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    J.isFunction(i.old) && i.old.call(this), i.queue && J.dequeue(this, i.queue)
                }, i
            }, J.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(xe).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var s = J.isEmptyObject(e),
                        r = J.speed(t, n, i),
                        a = function() {
                            var t = R(this, J.extend({}, e), r);
                            (s || ve.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, s || r.queue === !1 ? this.each(a) : this.queue(r.queue, a);
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            s = null != e && e + "queueHooks",
                            r = J.timers,
                            a = ve.get(this);
                        if (s) a[s] && a[s].stop && i(a[s]);
                        else
                            for (s in a) a[s] && a[s].stop && et.test(s) && i(a[s]);
                        for (s = r.length; s--;) r[s].elem !== this || null != e && r[s].queue !== e || (r[s].anim.stop(n), t = !1, r.splice(s, 1));
                        (t || !n) && J.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = ve.get(this),
                            i = n[e + "queue"],
                            s = n[e + "queueHooks"],
                            r = J.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, J.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), J.each(["toggle", "show", "hide"], function(e, t) {
                var n = J.fn[t];
                J.fn[t] = function(e, i, s) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, i, s)
                }
            }), J.each({
                slideDown: P("show"),
                slideUp: P("hide"),
                slideToggle: P("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                J.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), J.timers = [], J.fx.tick = function() {
                var e, t = 0,
                    n = J.timers;
                for (Qe = J.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                n.length || J.fx.stop(), Qe = void 0
            }, J.fx.timer = function(e) {
                J.timers.push(e), e() ? J.fx.start() : J.timers.pop()
            }, J.fx.interval = 13, J.fx.start = function() {
                $e || ($e = setInterval(J.fx.tick, J.fx.interval))
            }, J.fx.stop = function() {
                clearInterval($e), $e = null
            }, J.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, J.fn.delay = function(e, t) {
                return e = J.fx ? J.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            function() {
                var e = $.createElement("input"),
                    t = $.createElement("select"),
                    n = t.appendChild($.createElement("option"));
                e.type = "checkbox", Q.checkOn = "" !== e.value, Q.optSelected = n.selected, t.disabled = !0, Q.optDisabled = !n.disabled, e = $.createElement("input"), e.value = "t", e.type = "radio", Q.radioValue = "t" === e.value
            }();
        var it, st, rt = J.expr.attrHandle;
        J.fn.extend({
            attr: function(e, t) {
                return ge(this, J.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    J.removeAttr(this, e)
                })
            }
        }), J.extend({
            attr: function(e, t, n) {
                var i, s, r = e.nodeType;
                if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute === Te ? J.prop(e, t, n) : (1 === r && J.isXMLDoc(e) || (t = t.toLowerCase(), i = J.attrHooks[t] || (J.expr.match.bool.test(t) ? st : it)), void 0 === n ? i && "get" in i && null !== (s = i.get(e, t)) ? s : (s = J.find.attr(e, t), null == s ? void 0 : s) : null !== n ? i && "set" in i && void 0 !== (s = i.set(e, n, t)) ? s : (e.setAttribute(t, n + ""), n) : void J.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, i, s = 0,
                    r = t && t.match(pe);
                if (r && 1 === e.nodeType)
                    for (; n = r[s++];) i = J.propFix[n] || n, J.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!Q.radioValue && "radio" === t && J.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), st = {
            set: function(e, t, n) {
                return t === !1 ? J.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, J.each(J.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = rt[t] || J.find.attr;
            rt[t] = function(e, t, i) {
                var s, r;
                return i || (r = rt[t], rt[t] = s, s = null != n(e, t, i) ? t.toLowerCase() : null, rt[t] = r), s
            }
        });
        var at = /^(?:input|select|textarea|button)$/i;
        J.fn.extend({
            prop: function(e, t) {
                return ge(this, J.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[J.propFix[e] || e]
                })
            }
        }), J.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, t, n) {
                var i, s, r, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return r = 1 !== a || !J.isXMLDoc(e), r && (t = J.propFix[t] || t, s = J.propHooks[t]), void 0 !== n ? s && "set" in s && void 0 !== (i = s.set(e, n, t)) ? i : e[t] = n : s && "get" in s && null !== (i = s.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
                    }
                }
            }
        }), Q.optSelected || (J.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }
        }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            J.propFix[this.toLowerCase()] = this
        });
        var ot = /[\t\r\n\f]/g;
        J.fn.extend({
            addClass: function(e) {
                var t, n, i, s, r, a, o = "string" == typeof e && e,
                    l = 0,
                    d = this.length;
                if (J.isFunction(e)) return this.each(function(t) {
                    J(this).addClass(e.call(this, t, this.className))
                });
                if (o)
                    for (t = (e || "").match(pe) || []; d > l; l++)
                        if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ot, " ") : " ")) {
                            for (r = 0; s = t[r++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                            a = J.trim(i), n.className !== a && (n.className = a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, s, r, a, o = 0 === arguments.length || "string" == typeof e && e,
                    l = 0,
                    d = this.length;
                if (J.isFunction(e)) return this.each(function(t) {
                    J(this).removeClass(e.call(this, t, this.className))
                });
                if (o)
                    for (t = (e || "").match(pe) || []; d > l; l++)
                        if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ot, " ") : "")) {
                            for (r = 0; s = t[r++];)
                                for (; i.indexOf(" " + s + " ") >= 0;) i = i.replace(" " + s + " ", " ");
                            a = e ? J.trim(i) : "", n.className !== a && (n.className = a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : J.isFunction(e) ? this.each(function(n) {
                    J(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var t, i = 0, s = J(this), r = e.match(pe) || []; t = r[i++];) s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                    else(n === Te || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ot, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        });
        var lt = /\r/g;
        J.fn.extend({
            val: function(e) {
                var t, n, i, s = this[0]; {
                    if (arguments.length) return i = J.isFunction(e), this.each(function(n) {
                        var s;
                        1 === this.nodeType && (s = i ? e.call(this, n, J(this).val()) : e, null == s ? s = "" : "number" == typeof s ? s += "" : J.isArray(s) && (s = J.map(s, function(e) {
                            return null == e ? "" : e + ""
                        })), t = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
                    });
                    if (s) return t = J.valHooks[s.type] || J.valHooks[s.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(s, "value")) ? n : (n = s.value, "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n)
                }
            }
        }), J.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = J.find.attr(e, "value");
                        return null != t ? t : J.trim(J.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, s = e.selectedIndex, r = "select-one" === e.type || 0 > s, a = r ? null : [], o = r ? s + 1 : i.length, l = 0 > s ? o : r ? s : 0; o > l; l++)
                            if (n = i[l], (n.selected || l === s) && (Q.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !J.nodeName(n.parentNode, "optgroup"))) {
                                if (t = J(n).val(), r) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, s = e.options, r = J.makeArray(t), a = s.length; a--;) i = s[a], (i.selected = J.inArray(i.value, r) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), J.each(["radio", "checkbox"], function() {
            J.valHooks[this] = {
                set: function(e, t) {
                    return J.isArray(t) ? e.checked = J.inArray(J(e).val(), t) >= 0 : void 0
                }
            }, Q.checkOn || (J.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            J.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), J.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var dt = J.now(),
            ut = /\?/;
        J.parseJSON = function(e) {
            return JSON.parse(e + "")
        }, J.parseXML = function(e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
                n = new DOMParser, t = n.parseFromString(e, "text/xml")
            } catch (i) {
                t = void 0
            }
            return (!t || t.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + e), t
        };
        var ct = /#.*$/,
            ht = /([?&])_=[^&]*/,
            pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            mt = /^(?:GET|HEAD)$/,
            gt = /^\/\//,
            vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            _t = {},
            yt = {},
            bt = "*/".concat("*"),
            Ct = e.location.href,
            wt = vt.exec(Ct.toLowerCase()) || [];
        J.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ct,
                type: "GET",
                isLocal: ft.test(wt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": bt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": J.parseJSON,
                    "text xml": J.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? H(H(e, J.ajaxSettings), t) : H(J.ajaxSettings, e)
            },
            ajaxPrefilter: D(_t),
            ajaxTransport: D(yt),
            ajax: function(e, t) {
                function n(e, t, n, a) {
                    var l, u, v, _, b, w = t;
                    2 !== y && (y = 2, o && clearTimeout(o), i = void 0, r = a || "", C.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (_ = F(c, C, n)), _ = B(c, _, C, l), l ? (c.ifModified && (b = C.getResponseHeader("Last-Modified"), b && (J.lastModified[s] = b), b = C.getResponseHeader("etag"), b && (J.etag[s] = b)), 204 === e || "HEAD" === c.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = _.state, u = _.data, v = _.error, l = !v)) : (v = w, (e || !w) && (w = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (t || w) + "", l ? f.resolveWith(h, [u, w, C]) : f.rejectWith(h, [C, w, v]), C.statusCode(g), g = void 0, d && p.trigger(l ? "ajaxSuccess" : "ajaxError", [C, c, l ? u : v]), m.fireWith(h, [C, w]), d && (p.trigger("ajaxComplete", [C, c]), --J.active || J.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, s, r, a, o, l, d, u, c = J.ajaxSetup({}, t),
                    h = c.context || c,
                    p = c.context && (h.nodeType || h.jquery) ? J(h) : J.event,
                    f = J.Deferred(),
                    m = J.Callbacks("once memory"),
                    g = c.statusCode || {},
                    v = {},
                    _ = {},
                    y = 0,
                    b = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === y) {
                                if (!a)
                                    for (a = {}; t = pt.exec(r);) a[t[1].toLowerCase()] = t[2];
                                t = a[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === y ? r : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return y || (e = _[n] = _[n] || e, v[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return y || (c.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > y)
                                    for (t in e) g[t] = [g[t], e[t]];
                                else C.always(e[C.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || b;
                            return i && i.abort(t), n(0, t), this
                        }
                    };
                if (f.promise(C).complete = m.add, C.success = C.done, C.error = C.fail, c.url = ((e || c.url || Ct) + "").replace(ct, "").replace(gt, wt[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = J.trim(c.dataType || "*").toLowerCase().match(pe) || [""], null == c.crossDomain && (l = vt.exec(c.url.toLowerCase()), c.crossDomain = !(!l || l[1] === wt[1] && l[2] === wt[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (wt[3] || ("http:" === wt[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = J.param(c.data, c.traditional)), M(_t, c, t, C), 2 === y) return C;
                d = J.event && c.global, d && 0 === J.active++ && J.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !mt.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (ut.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = ht.test(s) ? s.replace(ht, "$1_=" + dt++) : s + (ut.test(s) ? "&" : "?") + "_=" + dt++)), c.ifModified && (J.lastModified[s] && C.setRequestHeader("If-Modified-Since", J.lastModified[s]), J.etag[s] && C.setRequestHeader("If-None-Match", J.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && C.setRequestHeader("Content-Type", c.contentType), C.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : c.accepts["*"]);
                for (u in c.headers) C.setRequestHeader(u, c.headers[u]);
                if (c.beforeSend && (c.beforeSend.call(h, C, c) === !1 || 2 === y)) return C.abort();
                b = "abort";
                for (u in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) C[u](c[u]);
                if (i = M(yt, c, t, C)) {
                    C.readyState = 1, d && p.trigger("ajaxSend", [C, c]), c.async && c.timeout > 0 && (o = setTimeout(function() {
                        C.abort("timeout")
                    }, c.timeout));
                    try {
                        y = 1, i.send(v, n)
                    } catch (w) {
                        if (!(2 > y)) throw w;
                        n(-1, w)
                    }
                } else n(-1, "No Transport");
                return C
            },
            getJSON: function(e, t, n) {
                return J.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return J.get(e, void 0, t, "script")
            }
        }), J.each(["get", "post"], function(e, t) {
            J[t] = function(e, n, i, s) {
                return J.isFunction(n) && (s = s || i, i = n, n = void 0), J.ajax({
                    url: e,
                    type: t,
                    dataType: s,
                    data: n,
                    success: i
                })
            }
        }), J._evalUrl = function(e) {
            return J.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, J.fn.extend({
            wrapAll: function(e) {
                var t;
                return J.isFunction(e) ? this.each(function(t) {
                    J(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = J(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this)
            },
            wrapInner: function(e) {
                return J.isFunction(e) ? this.each(function(t) {
                    J(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = J(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = J.isFunction(e);
                return this.each(function(n) {
                    J(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
                }).end()
            }
        }), J.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0
        }, J.expr.filters.visible = function(e) {
            return !J.expr.filters.hidden(e)
        };
        var xt = /%20/g,
            Et = /\[\]$/,
            Tt = /\r?\n/g,
            St = /^(?:submit|button|image|reset|file)$/i,
            Lt = /^(?:input|select|textarea|keygen)/i;
        J.param = function(e, t) {
            var n, i = [],
                s = function(e, t) {
                    t = J.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery && !J.isPlainObject(e)) J.each(e, function() {
                s(this.name, this.value)
            });
            else
                for (n in e) j(n, e[n], t, s);
            return i.join("&").replace(xt, "+")
        }, J.fn.extend({
            serialize: function() {
                return J.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = J.prop(this, "elements");
                    return e ? J.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !J(this).is(":disabled") && Lt.test(this.nodeName) && !St.test(e) && (this.checked || !Ee.test(e))
                }).map(function(e, t) {
                    var n = J(this).val();
                    return null == n ? null : J.isArray(n) ? J.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Tt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Tt, "\r\n")
                    }
                }).get()
            }
        }), J.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (e) {}
        };
        var At = 0,
            It = {},
            Pt = {
                0: 200,
                1223: 204
            },
            Ot = J.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function() {
            for (var e in It) It[e]()
        }), Q.cors = !!Ot && "withCredentials" in Ot, Q.ajax = Ot = !!Ot, J.ajaxTransport(function(e) {
            var t;
            return Q.cors || Ot && !e.crossDomain ? {
                send: function(n, i) {
                    var s, r = e.xhr(),
                        a = ++At;
                    if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) r[s] = e.xhrFields[s];
                    e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (s in n) r.setRequestHeader(s, n[s]);
                    t = function(e) {
                        return function() {
                            t && (delete It[a], t = r.onload = r.onerror = null, "abort" === e ? r.abort() : "error" === e ? i(r.status, r.statusText) : i(Pt[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
                                text: r.responseText
                            } : void 0, r.getAllResponseHeaders()))
                        }
                    }, r.onload = t(), r.onerror = t("error"), t = It[a] = t("abort");
                    try {
                        r.send(e.hasContent && e.data || null)
                    } catch (o) {
                        if (t) throw o
                    }
                },
                abort: function() {
                    t && t()
                }
            } : void 0
        }), J.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return J.globalEval(e), e
                }
            }
        }), J.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), J.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(i, s) {
                        t = J("<script>").prop({
                            async: !0,
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && s("error" === e.type ? 404 : 200, e.type)
                        }), $.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var kt = [],
            Nt = /(=)\?(?=&|$)|\?\?/;
        J.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = kt.pop() || J.expando + "_" + dt++;
                return this[e] = !0, e
            }
        }), J.ajaxPrefilter("json jsonp", function(t, n, i) {
            var s, r, a, o = t.jsonp !== !1 && (Nt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Nt.test(t.data) && "data");
            return o || "jsonp" === t.dataTypes[0] ? (s = t.jsonpCallback = J.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(Nt, "$1" + s) : t.jsonp !== !1 && (t.url += (ut.test(t.url) ? "&" : "?") + t.jsonp + "=" + s), t.converters["script json"] = function() {
                return a || J.error(s + " was not called"), a[0]
            }, t.dataTypes[0] = "json", r = e[s], e[s] = function() {
                a = arguments
            }, i.always(function() {
                e[s] = r, t[s] && (t.jsonpCallback = n.jsonpCallback, kt.push(s)), a && J.isFunction(r) && r(a[0]), a = r = void 0
            }), "script") : void 0
        }), J.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || $;
            var i = ae.exec(e),
                s = !n && [];
            return i ? [t.createElement(i[1])] : (i = J.buildFragment([e], t, s), s && s.length && J(s).remove(), J.merge([], i.childNodes))
        };
        var Rt = J.fn.load;
        J.fn.load = function(e, t, n) {
            if ("string" != typeof e && Rt) return Rt.apply(this, arguments);
            var i, s, r, a = this,
                o = e.indexOf(" ");
            return o >= 0 && (i = J.trim(e.slice(o)), e = e.slice(0, o)), J.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (s = "POST"), a.length > 0 && J.ajax({
                url: e,
                type: s,
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments, a.html(i ? J("<div>").append(J.parseHTML(e)).find(i) : e)
            }).complete(n && function(e, t) {
                a.each(n, r || [e.responseText, t, e])
            }), this
        }, J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            J.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), J.expr.filters.animated = function(e) {
            return J.grep(J.timers, function(t) {
                return e === t.elem
            }).length
        };
        var Dt = e.document.documentElement;
        J.offset = {
            setOffset: function(e, t, n) {
                var i, s, r, a, o, l, d, u = J.css(e, "position"),
                    c = J(e),
                    h = {};
                "static" === u && (e.style.position = "relative"), o = c.offset(), r = J.css(e, "top"), l = J.css(e, "left"), d = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, d ? (i = c.position(), a = i.top, s = i.left) : (a = parseFloat(r) || 0, s = parseFloat(l) || 0), J.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (h.top = t.top - o.top + a), null != t.left && (h.left = t.left - o.left + s), "using" in t ? t.using.call(e, h) : c.css(h)
            }
        }, J.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    J.offset.setOffset(this, e, t)
                });
                var t, n, i = this[0],
                    s = {
                        top: 0,
                        left: 0
                    },
                    r = i && i.ownerDocument;
                if (r) return t = r.documentElement, J.contains(t, i) ? (typeof i.getBoundingClientRect !== Te && (s = i.getBoundingClientRect()), n = z(r), {
                    top: s.top + n.pageYOffset - t.clientTop,
                    left: s.left + n.pageXOffset - t.clientLeft
                }) : s
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === J.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), J.nodeName(e[0], "html") || (i = e.offset()), i.top += J.css(e[0], "borderTopWidth", !0), i.left += J.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - i.top - J.css(n, "marginTop", !0),
                        left: t.left - i.left - J.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || Dt; e && !J.nodeName(e, "html") && "static" === J.css(e, "position");) e = e.offsetParent;
                    return e || Dt
                })
            }
        }), J.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, n) {
            var i = "pageYOffset" === n;
            J.fn[t] = function(s) {
                return ge(this, function(t, s, r) {
                    var a = z(t);
                    return void 0 === r ? a ? a[n] : t[s] : void(a ? a.scrollTo(i ? e.pageXOffset : r, i ? r : e.pageYOffset) : t[s] = r)
                }, t, s, arguments.length, null)
            }
        }), J.each(["top", "left"], function(e, t) {
            J.cssHooks[t] = w(Q.pixelPosition, function(e, n) {
                return n ? (n = C(e, t), qe.test(n) ? J(e).position()[t] + "px" : n) : void 0
            })
        }), J.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            J.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                J.fn[i] = function(i, s) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        a = n || (i === !0 || s === !0 ? "margin" : "border");
                    return ge(this, function(t, n, i) {
                        var s;
                        return J.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === i ? J.css(t, n, a) : J.style(t, n, i, a)
                    }, t, r ? i : void 0, r, null)
                }
            })
        }), J.fn.size = function() {
            return this.length
        }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return J
        });
        var Mt = e.jQuery,
            Ht = e.$;
        return J.noConflict = function(t) {
            return e.$ === J && (e.$ = Ht), t && e.jQuery === J && (e.jQuery = Mt), J
        }, typeof t === Te && (e.jQuery = e.$ = J), J
    }), ! function(e) {
        e.flexslider = function(t, n) {
            var i = e(t);
            i.vars = e.extend({}, e.flexslider.defaults, n);
            var s, r = i.vars.namespace,
                a = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                o = ("ontouchstart" in window || a || window.DocumentTouch && document instanceof DocumentTouch) && i.vars.touch,
                l = "click touchend MSPointerUp keyup",
                d = "",
                u = "vertical" === i.vars.direction,
                c = i.vars.reverse,
                h = i.vars.itemWidth > 0,
                p = "fade" === i.vars.animation,
                f = "" !== i.vars.asNavFor,
                m = {},
                g = !0;
            e.data(t, "flexslider", i), m = {
                init: function() {
                    i.animating = !1, i.currentSlide = parseInt(i.vars.startAt ? i.vars.startAt : 0, 10), isNaN(i.currentSlide) && (i.currentSlide = 0), i.animatingTo = i.currentSlide, i.atEnd = 0 === i.currentSlide || i.currentSlide === i.last, i.containerSelector = i.vars.selector.substr(0, i.vars.selector.search(" ")), i.slides = e(i.vars.selector, i), i.container = e(i.containerSelector, i), i.count = i.slides.length, i.syncExists = e(i.vars.sync).length > 0, "slide" === i.vars.animation && (i.vars.animation = "swing"), i.prop = u ? "top" : "marginLeft", i.args = {}, i.manualPause = !1, i.stopped = !1, i.started = !1, i.startTimeout = null, i.transitions = !i.vars.video && !p && i.vars.useCSS && function() {
                        var e = document.createElement("div"),
                            t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var n in t)
                            if (void 0 !== e.style[t[n]]) return i.pfx = t[n].replace("Perspective", "").toLowerCase(), i.prop = "-" + i.pfx + "-transform", !0;
                        return !1
                    }(), i.ensureAnimationEnd = "", "" !== i.vars.controlsContainer && (i.controlsContainer = e(i.vars.controlsContainer).length > 0 && e(i.vars.controlsContainer)), "" !== i.vars.manualControls && (i.manualControls = e(i.vars.manualControls).length > 0 && e(i.vars.manualControls)), "" !== i.vars.customDirectionNav && (i.customDirectionNav = 2 === e(i.vars.customDirectionNav).length && e(i.vars.customDirectionNav)), i.vars.randomize && (i.slides.sort(function() {
                        return Math.round(Math.random()) - .5
                    }), i.container.empty().append(i.slides)), i.doMath(), i.setup("init"), i.vars.controlNav && m.controlNav.setup(), i.vars.directionNav && m.directionNav.setup(), i.vars.keyboard && (1 === e(i.containerSelector).length || i.vars.multipleKeyboard) && e(document).bind("keyup", function(e) {
                        var t = e.keyCode;
                        if (!i.animating && (39 === t || 37 === t)) {
                            var n = 39 === t ? i.getTarget("next") : 37 === t ? i.getTarget("prev") : !1;
                            i.flexAnimate(n, i.vars.pauseOnAction)
                        }
                    }), i.vars.mousewheel && i.bind("mousewheel", function(e, t, n, s) {
                        e.preventDefault();
                        var r = i.getTarget(0 > t ? "next" : "prev");
                        i.flexAnimate(r, i.vars.pauseOnAction)
                    }), i.vars.pausePlay && m.pausePlay.setup(), i.vars.slideshow && i.vars.pauseInvisible && m.pauseInvisible.init(), i.vars.slideshow && (i.vars.pauseOnHover && i.hover(function() {
                        i.manualPlay || i.manualPause || i.pause()
                    }, function() {
                        i.manualPause || i.manualPlay || i.stopped || i.play()
                    }), i.vars.pauseInvisible && m.pauseInvisible.isHidden() || (i.vars.initDelay > 0 ? i.startTimeout = setTimeout(i.play, i.vars.initDelay) : i.play())), f && m.asNav.setup(), o && i.vars.touch && m.touch(), (!p || p && i.vars.smoothHeight) && e(window).bind("resize orientationchange focus", m.resize), i.find("img").attr("draggable", "false"), setTimeout(function() {
                        i.vars.start(i)
                    }, 200)
                },
                asNav: {
                    setup: function() {
                        i.asNav = !0, i.animatingTo = Math.floor(i.currentSlide / i.move), i.currentItem = i.currentSlide, i.slides.removeClass(r + "active-slide").eq(i.currentItem).addClass(r + "active-slide"), a ? (t._slider = i, i.slides.each(function() {
                            var t = this;
                            t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", function(e) {
                                e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                            }, !1), t.addEventListener("MSGestureTap", function(t) {
                                t.preventDefault();
                                var n = e(this),
                                    s = n.index();
                                e(i.vars.asNavFor).data("flexslider").animating || n.hasClass("active") || (i.direction = i.currentItem < s ? "next" : "prev", i.flexAnimate(s, i.vars.pauseOnAction, !1, !0, !0))
                            })
                        })) : i.slides.on(l, function(t) {
                            t.preventDefault();
                            var n = e(this),
                                s = n.index(),
                                a = n.offset().left - e(i).scrollLeft();
                            0 >= a && n.hasClass(r + "active-slide") ? i.flexAnimate(i.getTarget("prev"), !0) : e(i.vars.asNavFor).data("flexslider").animating || n.hasClass(r + "active-slide") || (i.direction = i.currentItem < s ? "next" : "prev", i.flexAnimate(s, i.vars.pauseOnAction, !1, !0, !0))
                        })
                    }
                },
                controlNav: {
                    setup: function() {
                        i.manualControls ? m.controlNav.setupManual() : m.controlNav.setupPaging()
                    },
                    setupPaging: function() {
                        var t, n, s = "thumbnails" === i.vars.controlNav ? "control-thumbs" : "control-paging",
                            a = 1;
                        if (i.controlNavScaffold = e('<ol class="' + r + "control-nav " + r + s + '"></ol>'), i.pagingCount > 1)
                            for (var o = 0; o < i.pagingCount; o++) {
                                if (n = i.slides.eq(o), t = "thumbnails" === i.vars.controlNav ? '<img src="' + n.attr("data-thumb") + '"/>' : "<a>" + a + "</a>", "thumbnails" === i.vars.controlNav && !0 === i.vars.thumbCaptions) {
                                    var u = n.attr("data-thumbcaption");
                                    "" !== u && void 0 !== u && (t += '<span class="' + r + 'caption">' + u + "</span>")
                                }
                                i.controlNavScaffold.append("<li>" + t + "</li>"), a++
                            }
                        i.controlsContainer ? e(i.controlsContainer).append(i.controlNavScaffold) : i.append(i.controlNavScaffold), m.controlNav.set(), m.controlNav.active(), i.controlNavScaffold.delegate("a, img", l, function(t) {
                            if (t.preventDefault(), "" === d || d === t.type) {
                                var n = e(this),
                                    s = i.controlNav.index(n);
                                n.hasClass(r + "active") || (i.direction = s > i.currentSlide ? "next" : "prev", i.flexAnimate(s, i.vars.pauseOnAction))
                            }
                            "" === d && (d = t.type), m.setToClearWatchedEvent()
                        })
                    },
                    setupManual: function() {
                        i.controlNav = i.manualControls, m.controlNav.active(), i.controlNav.bind(l, function(t) {
                            if (t.preventDefault(), "" === d || d === t.type) {
                                var n = e(this),
                                    s = i.controlNav.index(n);
                                n.hasClass(r + "active") || (i.direction = s > i.currentSlide ? "next" : "prev", i.flexAnimate(s, i.vars.pauseOnAction))
                            }
                            "" === d && (d = t.type), m.setToClearWatchedEvent()
                        })
                    },
                    set: function() {
                        var t = "thumbnails" === i.vars.controlNav ? "img" : "a";
                        i.controlNav = e("." + r + "control-nav li " + t, i.controlsContainer ? i.controlsContainer : i)
                    },
                    active: function() {
                        i.controlNav.removeClass(r + "active").eq(i.animatingTo).addClass(r + "active")
                    },
                    update: function(t, n) {
                        i.pagingCount > 1 && "add" === t ? i.controlNavScaffold.append(e("<li><a>" + i.count + "</a></li>")) : 1 === i.pagingCount ? i.controlNavScaffold.find("li").remove() : i.controlNav.eq(n).closest("li").remove(), m.controlNav.set(), i.pagingCount > 1 && i.pagingCount !== i.controlNav.length ? i.update(n, t) : m.controlNav.active()
                    }
                },
                directionNav: {
                    setup: function() {
                        var t = e('<ul class="' + r + 'direction-nav"><li class="' + r + 'nav-prev"><a class="' + r + 'prev" href="#">' + i.vars.prevText + '</a></li><li class="' + r + 'nav-next"><a class="' + r + 'next" href="#">' + i.vars.nextText + "</a></li></ul>");
                        i.customDirectionNav ? i.directionNav = i.customDirectionNav : i.controlsContainer ? (e(i.controlsContainer).append(t), i.directionNav = e("." + r + "direction-nav li a", i.controlsContainer)) : (i.append(t), i.directionNav = e("." + r + "direction-nav li a", i)), m.directionNav.update(), i.directionNav.bind(l, function(t) {
                            t.preventDefault();
                            var n;
                            ("" === d || d === t.type) && (n = i.getTarget(e(this).hasClass(r + "next") ? "next" : "prev"), i.flexAnimate(n, i.vars.pauseOnAction)), "" === d && (d = t.type), m.setToClearWatchedEvent()
                        })
                    },
                    update: function() {
                        var e = r + "disabled";
                        1 === i.pagingCount ? i.directionNav.addClass(e).attr("tabindex", "-1") : i.vars.animationLoop ? i.directionNav.removeClass(e).removeAttr("tabindex") : 0 === i.animatingTo ? i.directionNav.removeClass(e).filter("." + r + "prev").addClass(e).attr("tabindex", "-1") : i.animatingTo === i.last ? i.directionNav.removeClass(e).filter("." + r + "next").addClass(e).attr("tabindex", "-1") : i.directionNav.removeClass(e).removeAttr("tabindex")
                    }
                },
                pausePlay: {
                    setup: function() {
                        var t = e('<div class="' + r + 'pauseplay"><a></a></div>');
                        i.controlsContainer ? (i.controlsContainer.append(t), i.pausePlay = e("." + r + "pauseplay a", i.controlsContainer)) : (i.append(t), i.pausePlay = e("." + r + "pauseplay a", i)), m.pausePlay.update(i.vars.slideshow ? r + "pause" : r + "play"), i.pausePlay.bind(l, function(t) {
                            t.preventDefault(), ("" === d || d === t.type) && (e(this).hasClass(r + "pause") ? (i.manualPause = !0, i.manualPlay = !1, i.pause()) : (i.manualPause = !1, i.manualPlay = !0, i.play())), "" === d && (d = t.type), m.setToClearWatchedEvent()
                        })
                    },
                    update: function(e) {
                        "play" === e ? i.pausePlay.removeClass(r + "pause").addClass(r + "play").html(i.vars.playText) : i.pausePlay.removeClass(r + "play").addClass(r + "pause").html(i.vars.pauseText)
                    }
                },
                touch: function() {
                    function e(e) {
                        e.stopPropagation(), i.animating ? e.preventDefault() : (i.pause(), t._gesture.addPointer(e.pointerId), w = 0, d = u ? i.h : i.w, m = Number(new Date), l = h && c && i.animatingTo === i.last ? 0 : h && c ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : h && i.currentSlide === i.last ? i.limit : h ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide : c ? (i.last - i.currentSlide + i.cloneOffset) * d : (i.currentSlide + i.cloneOffset) * d)
                    }

                    function n(e) {
                        e.stopPropagation();
                        var n = e.target._slider;
                        if (n) {
                            var i = -e.translationX,
                                s = -e.translationY;
                            return w += u ? s : i, f = w, y = u ? Math.abs(w) < Math.abs(-i) : Math.abs(w) < Math.abs(-s), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                                t._gesture.stop()
                            }) : void((!y || Number(new Date) - m > 500) && (e.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (f = w / (0 === n.currentSlide && 0 > w || n.currentSlide === n.last && w > 0 ? Math.abs(w) / d + 2 : 1)), n.setProps(l + f, "setTouch"))))
                        }
                    }

                    function s(e) {
                        e.stopPropagation();
                        var t = e.target._slider;
                        if (t) {
                            if (t.animatingTo === t.currentSlide && !y && null !== f) {
                                var n = c ? -f : f,
                                    i = t.getTarget(n > 0 ? "next" : "prev");
                                t.canAdvance(i) && (Number(new Date) - m < 550 && Math.abs(n) > 50 || Math.abs(n) > d / 2) ? t.flexAnimate(i, t.vars.pauseOnAction) : p || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
                            }
                            r = null, o = null, f = null, l = null, w = 0
                        }
                    }
                    var r, o, l, d, f, m, g, v, _, y = !1,
                        b = 0,
                        C = 0,
                        w = 0;
                    a ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", e, !1), t._slider = i, t.addEventListener("MSGestureChange", n, !1), t.addEventListener("MSGestureEnd", s, !1)) : (g = function(e) {
                        i.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (i.pause(), d = u ? i.h : i.w, m = Number(new Date), b = e.touches[0].pageX, C = e.touches[0].pageY, l = h && c && i.animatingTo === i.last ? 0 : h && c ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : h && i.currentSlide === i.last ? i.limit : h ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide : c ? (i.last - i.currentSlide + i.cloneOffset) * d : (i.currentSlide + i.cloneOffset) * d, r = u ? C : b, o = u ? b : C, t.addEventListener("touchmove", v, !1), t.addEventListener("touchend", _, !1))
                    }, v = function(e) {
                        b = e.touches[0].pageX, C = e.touches[0].pageY, f = u ? r - C : r - b, y = u ? Math.abs(f) < Math.abs(b - o) : Math.abs(f) < Math.abs(C - o);
                        var t = 500;
                        (!y || Number(new Date) - m > t) && (e.preventDefault(), !p && i.transitions && (i.vars.animationLoop || (f /= 0 === i.currentSlide && 0 > f || i.currentSlide === i.last && f > 0 ? Math.abs(f) / d + 2 : 1), i.setProps(l + f, "setTouch")))
                    }, _ = function(e) {
                        if (t.removeEventListener("touchmove", v, !1), i.animatingTo === i.currentSlide && !y && null !== f) {
                            var n = c ? -f : f,
                                s = i.getTarget(n > 0 ? "next" : "prev");
                            i.canAdvance(s) && (Number(new Date) - m < 550 && Math.abs(n) > 50 || Math.abs(n) > d / 2) ? i.flexAnimate(s, i.vars.pauseOnAction) : p || i.flexAnimate(i.currentSlide, i.vars.pauseOnAction, !0)
                        }
                        t.removeEventListener("touchend", _, !1), r = null, o = null, f = null, l = null
                    }, t.addEventListener("touchstart", g, !1))
                },
                resize: function() {
                    !i.animating && i.is(":visible") && (h || i.doMath(), p ? m.smoothHeight() : h ? (i.slides.width(i.computedW), i.update(i.pagingCount), i.setProps()) : u ? (i.viewport.height(i.h), i.setProps(i.h, "setTotal")) : (i.vars.smoothHeight && m.smoothHeight(), i.newSlides.width(i.computedW), i.setProps(i.computedW, "setTotal")))
                },
                smoothHeight: function(e) {
                    if (!u || p) {
                        var t = p ? i : i.viewport;
                        e ? t.animate({
                            height: i.slides.eq(i.animatingTo).height()
                        }, e) : t.height(i.slides.eq(i.animatingTo).height())
                    }
                },
                sync: function(t) {
                    var n = e(i.vars.sync).data("flexslider"),
                        s = i.animatingTo;
                    switch (t) {
                        case "animate":
                            n.flexAnimate(s, i.vars.pauseOnAction, !1, !0);
                            break;
                        case "play":
                            n.playing || n.asNav || n.play();
                            break;
                        case "pause":
                            n.pause()
                    }
                },
                uniqueID: function(t) {
                    return t.filter("[id]").add(t.find("[id]")).each(function() {
                        var t = e(this);
                        t.attr("id", t.attr("id") + "_clone")
                    }), t
                },
                pauseInvisible: {
                    visProp: null,
                    init: function() {
                        var e = m.pauseInvisible.getHiddenProp();
                        if (e) {
                            var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
                            document.addEventListener(t, function() {
                                m.pauseInvisible.isHidden() ? i.startTimeout ? clearTimeout(i.startTimeout) : i.pause() : i.started ? i.play() : i.vars.initDelay > 0 ? setTimeout(i.play, i.vars.initDelay) : i.play()
                            })
                        }
                    },
                    isHidden: function() {
                        var e = m.pauseInvisible.getHiddenProp();
                        return e ? document[e] : !1
                    },
                    getHiddenProp: function() {
                        var e = ["webkit", "moz", "ms", "o"];
                        if ("hidden" in document) return "hidden";
                        for (var t = 0; t < e.length; t++)
                            if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                        return null
                    }
                },
                setToClearWatchedEvent: function() {
                    clearTimeout(s), s = setTimeout(function() {
                        d = ""
                    }, 3e3)
                }
            }, i.flexAnimate = function(t, n, s, a, l) {
                if (i.vars.animationLoop || t === i.currentSlide || (i.direction = t > i.currentSlide ? "next" : "prev"), f && 1 === i.pagingCount && (i.direction = i.currentItem < t ? "next" : "prev"), !i.animating && (i.canAdvance(t, l) || s) && i.is(":visible")) {
                    if (f && a) {
                        var d = e(i.vars.asNavFor).data("flexslider");
                        if (i.atEnd = 0 === t || t === i.count - 1, d.flexAnimate(t, !0, !1, !0, l), i.direction = i.currentItem < t ? "next" : "prev", d.direction = i.direction, Math.ceil((t + 1) / i.visible) - 1 === i.currentSlide || 0 === t) return i.currentItem = t, i.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), !1;
                        i.currentItem = t, i.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), t = Math.floor(t / i.visible)
                    }
                    if (i.animating = !0, i.animatingTo = t, n && i.pause(), i.vars.before(i), i.syncExists && !l && m.sync("animate"), i.vars.controlNav && m.controlNav.active(), h || i.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), i.atEnd = 0 === t || t === i.last, i.vars.directionNav && m.directionNav.update(), t === i.last && (i.vars.end(i), i.vars.animationLoop || i.pause()), p) o ? (i.slides.eq(i.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }), i.slides.eq(t).css({
                        opacity: 1,
                        zIndex: 2
                    }), i.wrapup(y)) : (i.slides.eq(i.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, i.vars.animationSpeed, i.vars.easing), i.slides.eq(t).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, i.vars.animationSpeed, i.vars.easing, i.wrapup));
                    else {
                        var g, v, _, y = u ? i.slides.filter(":first").height() : i.computedW;
                        h ? (g = i.vars.itemMargin, _ = (i.itemW + g) * i.move * i.animatingTo, v = _ > i.limit && 1 !== i.visible ? i.limit : _) : v = 0 === i.currentSlide && t === i.count - 1 && i.vars.animationLoop && "next" !== i.direction ? c ? (i.count + i.cloneOffset) * y : 0 : i.currentSlide === i.last && 0 === t && i.vars.animationLoop && "prev" !== i.direction ? c ? 0 : (i.count + 1) * y : c ? (i.count - 1 - t + i.cloneOffset) * y : (t + i.cloneOffset) * y, i.setProps(v, "", i.vars.animationSpeed), i.transitions ? (i.vars.animationLoop && i.atEnd || (i.animating = !1, i.currentSlide = i.animatingTo), i.container.unbind("webkitTransitionEnd transitionend"), i.container.bind("webkitTransitionEnd transitionend", function() {
                            clearTimeout(i.ensureAnimationEnd), i.wrapup(y)
                        }), clearTimeout(i.ensureAnimationEnd), i.ensureAnimationEnd = setTimeout(function() {
                            i.wrapup(y)
                        }, i.vars.animationSpeed + 100)) : i.container.animate(i.args, i.vars.animationSpeed, i.vars.easing, function() {
                            i.wrapup(y)
                        })
                    }
                    i.vars.smoothHeight && m.smoothHeight(i.vars.animationSpeed)
                }
            }, i.wrapup = function(e) {
                p || h || (0 === i.currentSlide && i.animatingTo === i.last && i.vars.animationLoop ? i.setProps(e, "jumpEnd") : i.currentSlide === i.last && 0 === i.animatingTo && i.vars.animationLoop && i.setProps(e, "jumpStart")), i.animating = !1, i.currentSlide = i.animatingTo, i.vars.after(i)
            }, i.animateSlides = function() {
                !i.animating && g && i.flexAnimate(i.getTarget("next"))
            }, i.pause = function() {
                clearInterval(i.animatedSlides), i.animatedSlides = null, i.playing = !1, i.vars.pausePlay && m.pausePlay.update("play"), i.syncExists && m.sync("pause")
            }, i.play = function() {
                i.playing && clearInterval(i.animatedSlides), i.animatedSlides = i.animatedSlides || setInterval(i.animateSlides, i.vars.slideshowSpeed), i.started = i.playing = !0, i.vars.pausePlay && m.pausePlay.update("pause"), i.syncExists && m.sync("play")
            }, i.stop = function() {
                i.pause(), i.stopped = !0
            }, i.canAdvance = function(e, t) {
                var n = f ? i.pagingCount - 1 : i.last;
                return t ? !0 : f && i.currentItem === i.count - 1 && 0 === e && "prev" === i.direction ? !0 : f && 0 === i.currentItem && e === i.pagingCount - 1 && "next" !== i.direction ? !1 : e !== i.currentSlide || f ? i.vars.animationLoop ? !0 : i.atEnd && 0 === i.currentSlide && e === n && "next" !== i.direction ? !1 : i.atEnd && i.currentSlide === n && 0 === e && "next" === i.direction ? !1 : !0 : !1
            }, i.getTarget = function(e) {
                return i.direction = e, "next" === e ? i.currentSlide === i.last ? 0 : i.currentSlide + 1 : 0 === i.currentSlide ? i.last : i.currentSlide - 1
            }, i.setProps = function(e, t, n) {
                var s = function() {
                    var n = e ? e : (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo,
                        s = function() {
                            if (h) return "setTouch" === t ? e : c && i.animatingTo === i.last ? 0 : c ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : i.animatingTo === i.last ? i.limit : n;
                            switch (t) {
                                case "setTotal":
                                    return c ? (i.count - 1 - i.currentSlide + i.cloneOffset) * e : (i.currentSlide + i.cloneOffset) * e;
                                case "setTouch":
                                    return c ? e : e;
                                case "jumpEnd":
                                    return c ? e : i.count * e;
                                case "jumpStart":
                                    return c ? i.count * e : e;
                                default:
                                    return e
                            }
                        }();
                    return -1 * s + "px"
                }();
                i.transitions && (s = u ? "translate3d(0," + s + ",0)" : "translate3d(" + s + ",0,0)", n = void 0 !== n ? n / 1e3 + "s" : "0s", i.container.css("-" + i.pfx + "-transition-duration", n), i.container.css("transition-duration", n)), i.args[i.prop] = s, (i.transitions || void 0 === n) && i.container.css(i.args), i.container.css("transform", s)
            }, i.setup = function(t) {
                if (p) i.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                }), "init" === t && (o ? i.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + i.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(i.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : 0 == i.vars.fadeFirstSlide ? i.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(i.currentSlide).css({
                    zIndex: 2
                }).css({
                    opacity: 1
                }) : i.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(i.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, i.vars.animationSpeed, i.vars.easing)), i.vars.smoothHeight && m.smoothHeight();
                else {
                    var n, s;
                    "init" === t && (i.viewport = e('<div class="' + r + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(i).append(i.container), i.cloneCount = 0, i.cloneOffset = 0, c && (s = e.makeArray(i.slides).reverse(), i.slides = e(s), i.container.empty().append(i.slides))), i.vars.animationLoop && !h && (i.cloneCount = 2, i.cloneOffset = 1, "init" !== t && i.container.find(".clone").remove(), i.container.append(m.uniqueID(i.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(m.uniqueID(i.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), i.newSlides = e(i.vars.selector, i), n = c ? i.count - 1 - i.currentSlide + i.cloneOffset : i.currentSlide + i.cloneOffset, u && !h ? (i.container.height(200 * (i.count + i.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                        i.newSlides.css({
                            display: "block"
                        }), i.doMath(), i.viewport.height(i.h), i.setProps(n * i.h, "init")
                    }, "init" === t ? 100 : 0)) : (i.container.width(200 * (i.count + i.cloneCount) + "%"), i.setProps(n * i.computedW, "init"), setTimeout(function() {
                        i.doMath(), i.newSlides.css({
                            width: i.computedW,
                            "float": "left",
                            display: "block"
                        }), i.vars.smoothHeight && m.smoothHeight()
                    }, "init" === t ? 100 : 0))
                }
                h || i.slides.removeClass(r + "active-slide").eq(i.currentSlide).addClass(r + "active-slide"), i.vars.init(i)
            }, i.doMath = function() {
                var e = i.slides.first(),
                    t = i.vars.itemMargin,
                    n = i.vars.minItems,
                    s = i.vars.maxItems;
                i.w = void 0 === i.viewport ? i.width() : i.viewport.width(), i.h = e.height(), i.boxPadding = e.outerWidth() - e.width(), h ? (i.itemT = i.vars.itemWidth + t, i.minW = n ? n * i.itemT : i.w, i.maxW = s ? s * i.itemT - t : i.w, i.itemW = i.minW > i.w ? (i.w - t * (n - 1)) / n : i.maxW < i.w ? (i.w - t * (s - 1)) / s : i.vars.itemWidth > i.w ? i.w : i.vars.itemWidth, i.visible = Math.floor(i.w / i.itemW), i.move = i.vars.move > 0 && i.vars.move < i.visible ? i.vars.move : i.visible, i.pagingCount = Math.ceil((i.count - i.visible) / i.move + 1), i.last = i.pagingCount - 1, i.limit = 1 === i.pagingCount ? 0 : i.vars.itemWidth > i.w ? i.itemW * (i.count - 1) + t * (i.count - 1) : (i.itemW + t) * i.count - i.w - t) : (i.itemW = i.w, i.pagingCount = i.count, i.last = i.count - 1), i.computedW = i.itemW - i.boxPadding
            }, i.update = function(e, t) {
                i.doMath(), h || (e < i.currentSlide ? i.currentSlide += 1 : e <= i.currentSlide && 0 !== e && (i.currentSlide -= 1), i.animatingTo = i.currentSlide), i.vars.controlNav && !i.manualControls && ("add" === t && !h || i.pagingCount > i.controlNav.length ? m.controlNav.update("add") : ("remove" === t && !h || i.pagingCount < i.controlNav.length) && (h && i.currentSlide > i.last && (i.currentSlide -= 1, i.animatingTo -= 1), m.controlNav.update("remove", i.last))), i.vars.directionNav && m.directionNav.update()
            }, i.addSlide = function(t, n) {
                var s = e(t);
                i.count += 1, i.last = i.count - 1, u && c ? void 0 !== n ? i.slides.eq(i.count - n).after(s) : i.container.prepend(s) : void 0 !== n ? i.slides.eq(n).before(s) : i.container.append(s), i.update(n, "add"), i.slides = e(i.vars.selector + ":not(.clone)", i), i.setup(), i.vars.added(i)
            }, i.removeSlide = function(t) {
                var n = isNaN(t) ? i.slides.index(e(t)) : t;
                i.count -= 1, i.last = i.count - 1, isNaN(t) ? e(t, i.slides).remove() : u && c ? i.slides.eq(i.last).remove() : i.slides.eq(t).remove(), i.doMath(), i.update(n, "remove"), i.slides = e(i.vars.selector + ":not(.clone)", i), i.setup(), i.vars.removed(i)
            }, m.init()
        }, e(window).blur(function(e) {
            focused = !1
        }).focus(function(e) {
            focused = !0
        }), e.flexslider.defaults = {
            namespace: "flex-",
            selector: ".slides > li",
            animation: "fade",
            easing: "swing",
            direction: "horizontal",
            reverse: !1,
            animationLoop: !0,
            smoothHeight: !1,
            startAt: 0,
            slideshow: !0,
            slideshowSpeed: 7e3,
            animationSpeed: 600,
            initDelay: 0,
            randomize: !1,
            fadeFirstSlide: !0,
            thumbCaptions: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            pauseInvisible: !0,
            useCSS: !0,
            touch: !0,
            video: !1,
            controlNav: !0,
            directionNav: !0,
            prevText: "Previous",
            nextText: "Next",
            keyboard: !0,
            multipleKeyboard: !1,
            mousewheel: !1,
            pausePlay: !1,
            pauseText: "Pause",
            playText: "Play",
            controlsContainer: "",
            manualControls: "",
            customDirectionNav: "",
            sync: "",
            asNavFor: "",
            itemWidth: 0,
            itemMargin: 0,
            minItems: 1,
            maxItems: 0,
            move: 0,
            allowOneSlide: !0,
            start: function() {},
            before: function() {},
            after: function() {},
            end: function() {},
            added: function() {},
            removed: function() {},
            init: function() {}
        }, e.fn.flexslider = function(t) {
            if (void 0 === t && (t = {}), "object" == typeof t) return this.each(function() {
                var n = e(this),
                    i = t.selector ? t.selector : ".slides > li",
                    s = n.find(i);
                1 === s.length && t.allowOneSlide === !0 || 0 === s.length ? (s.fadeIn(400), t.start && t.start(n)) : void 0 === n.data("flexslider") && new e.flexslider(this, t)
            });
            var n = e(this).data("flexslider");
            switch (t) {
                case "play":
                    n.play();
                    break;
                case "pause":
                    n.pause();
                    break;
                case "stop":
                    n.stop();
                    break;
                case "next":
                    n.flexAnimate(n.getTarget("next"), !0);
                    break;
                case "prev":
                case "previous":
                    n.flexAnimate(n.getTarget("prev"), !0);
                    break;
                default:
                    "number" == typeof t && n.flexAnimate(t, !0)
            }
        }
    }(jQuery), function() {
        "use strict";

        function e() {}

        function t(e, t) {
            for (var n = e.length; n--;)
                if (e[n].listener === t) return n;
            return -1
        }
        var n = e.prototype;
        n.getListeners = function(e) {
            var t, n, i = this._getEvents();
            if ("object" == typeof e) {
                t = {};
                for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
            } else t = i[e] || (i[e] = []);
            return t
        }, n.flattenListeners = function(e) {
            var t, n = [];
            for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
            return n
        }, n.getListenersAsObject = function(e) {
            var t, n = this.getListeners(e);
            return n instanceof Array && (t = {}, t[e] = n), t || n
        }, n.addListener = function(e, n) {
            var i, s = this.getListenersAsObject(e),
                r = "object" == typeof n;
            for (i in s) s.hasOwnProperty(i) && -1 === t(s[i], n) && s[i].push(r ? n : {
                listener: n,
                once: !1
            });
            return this
        }, n.on = n.addListener, n.addOnceListener = function(e, t) {
            return this.addListener(e, {
                listener: t,
                once: !0
            })
        }, n.once = n.addOnceListener, n.defineEvent = function(e) {
            return this.getListeners(e), this
        }, n.defineEvents = function(e) {
            for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
            return this
        }, n.removeListener = function(e, n) {
            var i, s, r = this.getListenersAsObject(e);
            for (s in r) r.hasOwnProperty(s) && (i = t(r[s], n), -1 !== i && r[s].splice(i, 1));
            return this
        }, n.off = n.removeListener, n.addListeners = function(e, t) {
            return this.manipulateListeners(!1, e, t)
        }, n.removeListeners = function(e, t) {
            return this.manipulateListeners(!0, e, t)
        }, n.manipulateListeners = function(e, t, n) {
            var i, s, r = e ? this.removeListener : this.addListener,
                a = e ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp)
                for (i = n.length; i--;) r.call(this, t, n[i]);
            else
                for (i in t) t.hasOwnProperty(i) && (s = t[i]) && ("function" == typeof s ? r.call(this, i, s) : a.call(this, i, s));
            return this
        }, n.removeEvent = function(e) {
            var t, n = typeof e,
                i = this._getEvents();
            if ("string" === n) delete i[e];
            else if ("object" === n)
                for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
            else delete this._events;
            return this
        }, n.emitEvent = function(e, t) {
            var n, i, s, r, a = this.getListenersAsObject(e);
            for (s in a)
                if (a.hasOwnProperty(s))
                    for (i = a[s].length; i--;) n = a[s][i], r = n.listener.apply(this, t || []), (r === this._getOnceReturnValue() || n.once === !0) && this.removeListener(e, a[s][i].listener);
            return this
        }, n.trigger = n.emitEvent, n.emit = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t)
        }, n.setOnceReturnValue = function(e) {
            return this._onceReturnValue = e, this
        }, n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, n._getEvents = function() {
            return this._events || (this._events = {})
        }, "function" == typeof define && define.amd ? define(function() {
            return e
        }) : "undefined" != typeof module && module.exports ? module.exports = e : this.EventEmitter = e
    }.call(this), function(e) {
        "use strict";
        var t = document.documentElement,
            n = function() {};
        t.addEventListener ? n = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : t.attachEvent && (n = function(t, n, i) {
            t[n + i] = i.handleEvent ? function() {
                var t = e.event;
                t.target = t.target || t.srcElement, i.handleEvent.call(i, t)
            } : function() {
                var n = e.event;
                n.target = n.target || n.srcElement, i.call(t, n)
            }, t.attachEvent("on" + n, t[n + i])
        });
        var i = function() {};
        t.removeEventListener ? i = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : t.detachEvent && (i = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var s = {
            bind: n,
            unbind: i
        };
        "function" == typeof define && define.amd ? define(s) : e.eventie = s
    }(this), function(e) {
        "use strict";

        function t(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function n(e) {
            return "[object Array]" === l.call(e)
        }

        function i(e) {
            var t = [];
            if (n(e)) t = e;
            else if ("number" == typeof e.length)
                for (var i = 0, s = e.length; s > i; i++) t.push(e[i]);
            else t.push(e);
            return t
        }

        function s(e, n) {
            function s(e, n, a) {
                if (!(this instanceof s)) return new s(e, n);
                "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = i(e), this.options = t({}, this.options), "function" == typeof n ? a = n : t(this.options, n), a && this.on("always", a), this.getImages(), r && (this.jqDeferred = new r.Deferred);
                var o = this;
                setTimeout(function() {
                    o.check()
                })
            }

            function l(e) {
                this.img = e
            }
            s.prototype = new e, s.prototype.options = {}, s.prototype.getImages = function() {
                this.images = [];
                for (var e = 0, t = this.elements.length; t > e; e++) {
                    var n = this.elements[e];
                    "IMG" === n.nodeName && this.addImage(n);
                    for (var i = n.querySelectorAll("img"), s = 0, r = i.length; r > s; s++) {
                        var a = i[s];
                        this.addImage(a)
                    }
                }
            }, s.prototype.addImage = function(e) {
                var t = new l(e);
                this.images.push(t)
            }, s.prototype.check = function() {
                function e(e, s) {
                    return t.options.debug && o && a.log("confirm", e, s), t.progress(e), n++, n === i && t.complete(), !0
                }
                var t = this,
                    n = 0,
                    i = this.images.length;
                if (this.hasAnyBroken = !1, !i) return void this.complete();
                for (var s = 0; i > s; s++) {
                    var r = this.images[s];
                    r.on("confirm", e), r.check()
                }
            }, s.prototype.progress = function(e) {
                this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
                var t = this;
                setTimeout(function() {
                    t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify(t, e)
                })
            }, s.prototype.complete = function() {
                var e = this.hasAnyBroken ? "fail" : "done";
                this.isComplete = !0;
                var t = this;
                setTimeout(function() {
                    if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                        var n = t.hasAnyBroken ? "reject" : "resolve";
                        t.jqDeferred[n](t)
                    }
                })
            }, r && (r.fn.imagesLoaded = function(e, t) {
                var n = new s(this, e, t);
                return n.jqDeferred.promise(r(this))
            });
            var d = {};
            return l.prototype = new e, l.prototype.check = function() {
                var e = d[this.img.src];
                if (e) return void this.useCached(e);
                if (d[this.img.src] = this, this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
                var t = this.proxyImage = new Image;
                n.bind(t, "load", this), n.bind(t, "error", this), t.src = this.img.src
            }, l.prototype.useCached = function(e) {
                if (e.isConfirmed) this.confirm(e.isLoaded, "cached was confirmed");
                else {
                    var t = this;
                    e.on("confirm", function(e) {
                        return t.confirm(e.isLoaded, "cache emitted confirmed"), !0
                    })
                }
            }, l.prototype.confirm = function(e, t) {
                this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
            }, l.prototype.handleEvent = function(e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }, l.prototype.onload = function() {
                this.confirm(!0, "onload"), this.unbindProxyEvents()
            }, l.prototype.onerror = function() {
                this.confirm(!1, "onerror"), this.unbindProxyEvents()
            }, l.prototype.unbindProxyEvents = function() {
                n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this)
            }, s
        }
        var r = e.jQuery,
            a = e.console,
            o = "undefined" != typeof a,
            l = Object.prototype.toString;
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], s) : e.imagesLoaded = s(e.EventEmitter, e.eventie)
    }(window), function(e, t) {
        "use strict";

        function n(e, t, n, i, s, r, a) {
            var o;
            if (a = "number" == typeof a ? a : 0, e.css(n, i + r), o = e.width(), o >= t) {
                if (e.css(n, ""), o === t) return {
                    match: "exact",
                    size: parseFloat((parseFloat(i) - .1).toFixed(3))
                };
                var l = t - a,
                    d = o - t;
                return {
                    match: "estimate",
                    size: parseFloat((parseFloat(i) - ("word-spacing" === n && a && l > d ? 0 : s)).toFixed(3))
                }
            }
            return o
        }

        function i(e, i, s, r, a) {
            var o = e.clone(!0).addClass("bigtext-cloned").css({
                    fontFamily: e.css("font-family"),
                    textTransform: e.css("text-transform"),
                    wordSpacing: e.css("word-spacing"),
                    letterSpacing: e.css("letter-spacing"),
                    position: "absolute",
                    left: l.DEBUG_MODE ? 0 : -9999,
                    top: l.DEBUG_MODE ? 0 : -9999
                }).appendTo(document.body),
                d = [],
                u = [],
                c = [],
                h = [];
            return i.css("float", "left").each(function() {
                var e, i, o = t(this),
                    u = l.supports.wholeNumberFontSizeOnly ? [8, 4, 1] : [8, 4, 1, .1];
                if (o.hasClass(l.EXEMPT_CLASS)) return d.push(null), h.push(null), void c.push(!1);
                var p = 32,
                    f = parseFloat(o.css("font-size")),
                    m = (o.width() / f).toFixed(6);
                i = parseInt(s / m, 10) - p;
                e: for (var g = 0, v = u.length; v > g; g++) t: for (var _ = 1, y = 10; y >= _; _++) {
                    if (i + _ * u[g] > r) {
                        i = r;
                        break e
                    }
                    if (e = n(o, s, "font-size", i + _ * u[g], u[g], "px", e), "number" != typeof e) {
                        if (i = e.size, "exact" === e.match) break e;
                        break t
                    }
                }
                h.push(s / i), i > r ? (d.push(r), c.push(!1)) : a && a > i ? (d.push(a), c.push(!0)) : (d.push(i), c.push(!1))
            }).each(function(e) {
                var i, r = t(this),
                    a = 0,
                    o = 1;
                if (r.hasClass(l.EXEMPT_CLASS)) return void u.push(null);
                r.css("font-size", d[e] + "px");
                for (var c = 1, h = 3; h > c; c += o)
                    if (i = n(r, s, "word-spacing", c, o, "px", i), "number" != typeof i) {
                        a = i.size;
                        break
                    }
                r.css("font-size", ""), u.push(a)
            }).removeAttr("style"), l.DEBUG_MODE ? o.css({
                "background-color": "rgba(255,255,255,.4)"
            }) : o.remove(), {
                fontSizes: d,
                wordSpacings: u,
                ratios: h,
                minFontSizes: c
            }
        }
        var s = 0,
            r = t("head"),
            a = e.BigText,
            o = t.fn.bigtext,
            l = {
                DEBUG_MODE: !1,
                DEFAULT_MIN_FONT_SIZE_PX: null,
                DEFAULT_MAX_FONT_SIZE_PX: 528,
                GLOBAL_STYLE_ID: "bigtext-style",
                STYLE_ID: "bigtext-id",
                LINE_CLASS_PREFIX: "bigtext-line",
                EXEMPT_CLASS: "bigtext-exempt",
                noConflict: function(n) {
                    return n && (t.fn.bigtext = o, e.BigText = a), l
                },
                supports: {
                    wholeNumberFontSizeOnly: function() {
                        if (!("getComputedStyle" in e)) return !0;
                        var n = t("<div/>").css({
                                position: "absolute",
                                "font-size": "14.1px"
                            }).insertBefore(t("script").eq(0)),
                            i = e.getComputedStyle(n[0], null),
                            s = i && "14px" === i.getPropertyValue("font-size");
                        return n.remove(), s
                    }()
                },
                init: function() {
                    t("#" + l.GLOBAL_STYLE_ID).length || r.append(l.generateStyleTag(l.GLOBAL_STYLE_ID, [".bigtext * { white-space: nowrap; } .bigtext > * { display: block; }", ".bigtext ." + l.EXEMPT_CLASS + ", .bigtext ." + l.EXEMPT_CLASS + " * { white-space: normal; }"]))
                },
                bindResize: function(n, i) {
                    var s;
                    t(e).unbind(n).bind(n, function() {
                        s && clearTimeout(s), s = setTimeout(i, 100)
                    })
                },
                getStyleId: function(e) {
                    return l.STYLE_ID + "-" + e
                },
                generateStyleTag: function(e, n) {
                    return t("<style>" + n.join("\n") + "</style>").attr("id", e)
                },
                clearCss: function(e) {
                    var n = l.getStyleId(e);
                    t("#" + n).remove()
                },
                generateCss: function(e, t, n, i) {
                    var s = [];
                    l.clearCss(e);
                    for (var r = 0, a = t.length; a > r; r++) s.push("#" + e + " ." + l.LINE_CLASS_PREFIX + r + " {" + (i[r] ? " white-space: normal;" : "") + (t[r] ? " font-size: " + t[r] + "px;" : "") + (n[r] ? " word-spacing: " + n[r] + "px;" : "") + "}");
                    return l.generateStyleTag(l.getStyleId(e), s)
                },
                jQueryMethod: function(e) {
                    return l.init(), e = t.extend({
                        minfontsize: l.DEFAULT_MIN_FONT_SIZE_PX,
                        maxfontsize: l.DEFAULT_MAX_FONT_SIZE_PX,
                        childSelector: "",
                        resize: !0
                    }, e || {}), this.each(function() {
                        var n = t(this).addClass("bigtext"),
                            a = n.width(),
                            o = n.attr("id"),
                            d = e.childSelector ? n.find(e.childSelector) : n.children();
                        o || (o = "bigtext-id" + s++, n.attr("id", o)), e.resize && l.bindResize("resize.bigtext-event-" + o, function() {
                            l.jQueryMethod.call(t("#" + o), e)
                        }), l.clearCss(o), d.addClass(function(e, t) {
                            return [t.replace(new RegExp("\\b" + l.LINE_CLASS_PREFIX + "\\d+\\b"), ""), l.LINE_CLASS_PREFIX + e].join(" ")
                        });
                        var u = i(n, d, a, e.maxfontsize, e.minfontsize);
                        r.append(l.generateCss(o, u.fontSizes, u.wordSpacings, u.minFontSizes))
                    }), this.trigger("bigtext:complete")
                }
            };
        t.fn.bigtext = l.jQueryMethod, e.BigText = l
    }(this, jQuery), function(e, t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(e.jQuery)
    }(this, function(e) {
        function t(e) {
            if (e in c.style) return e;
            for (var t = ["Moz", "Webkit", "O", "ms"], n = e.charAt(0).toUpperCase() + e.substr(1), i = 0; i < t.length; ++i) {
                var s = t[i] + n;
                if (s in c.style) return s
            }
        }

        function n() {
            return c.style[h.transform] = "", c.style[h.transform] = "rotateY(90deg)", "" !== c.style[h.transform]
        }

        function i(e) {
            return "string" == typeof e && this.parse(e), this
        }

        function s(e, t, n) {
            t === !0 ? e.queue(n) : t ? e.queue(t, n) : e.each(function() {
                n.call(this)
            })
        }

        function r(t) {
            var n = [];
            return e.each(t, function(t) {
                t = e.camelCase(t), t = e.transit.propertyMap[t] || e.cssProps[t] || t, t = l(t), h[t] && (t = l(h[t])), -1 === e.inArray(t, n) && n.push(t)
            }), n
        }

        function a(t, n, i, s) {
            var a = r(t);
            e.cssEase[i] && (i = e.cssEase[i]);
            var o = "" + u(n) + " " + i;
            parseInt(s, 10) > 0 && (o += " " + u(s));
            var l = [];
            return e.each(a, function(e, t) {
                l.push(t + " " + o)
            }), l.join(", ")
        }

        function o(t, n) {
            n || (e.cssNumber[t] = !0), e.transit.propertyMap[t] = h.transform, e.cssHooks[t] = {
                get: function(n) {
                    var i = e(n).css("transit:transform");
                    return i.get(t)
                },
                set: function(n, i) {
                    var s = e(n).css("transit:transform");
                    s.setFromString(t, i), e(n).css({
                        "transit:transform": s
                    })
                }
            }
        }

        function l(e) {
            return e.replace(/([A-Z])/g, function(e) {
                return "-" + e.toLowerCase()
            })
        }

        function d(e, t) {
            return "string" != typeof e || e.match(/^[\-0-9\.]+$/) ? "" + e + t : e
        }

        function u(t) {
            var n = t;
            return "string" != typeof n || n.match(/^[\-0-9\.]+/) || (n = e.fx.speeds[n] || e.fx.speeds._default), d(n, "ms")
        }
        e.transit = {
            version: "0.9.12",
            propertyMap: {
                marginLeft: "margin",
                marginRight: "margin",
                marginBottom: "margin",
                marginTop: "margin",
                paddingLeft: "padding",
                paddingRight: "padding",
                paddingBottom: "padding",
                paddingTop: "padding"
            },
            enabled: !0,
            useTransitionEnd: !1
        };
        var c = document.createElement("div"),
            h = {},
            p = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
        h.transition = t("transition"), h.transitionDelay = t("transitionDelay"), h.transform = t("transform"), h.transformOrigin = t("transformOrigin"), h.filter = t("Filter"), h.transform3d = n();
        var f = {
                transition: "transitionend",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                WebkitTransition: "webkitTransitionEnd",
                msTransition: "MSTransitionEnd"
            },
            m = h.transitionEnd = f[h.transition] || null;
        for (var g in h) h.hasOwnProperty(g) && "undefined" == typeof e.support[g] && (e.support[g] = h[g]);
        return c = null, e.cssEase = {
            _default: "ease",
            "in": "ease-in",
            out: "ease-out",
            "in-out": "ease-in-out",
            snap: "cubic-bezier(0,1,.5,1)",
            easeInCubic: "cubic-bezier(.550,.055,.675,.190)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
        }, e.cssHooks["transit:transform"] = {
            get: function(t) {
                return e(t).data("transform") || new i
            },
            set: function(t, n) {
                var s = n;
                s instanceof i || (s = new i(s)), "WebkitTransform" !== h.transform || p ? t.style[h.transform] = s.toString() : t.style[h.transform] = s.toString(!0), e(t).data("transform", s)
            }
        }, e.cssHooks.transform = {
            set: e.cssHooks["transit:transform"].set
        }, e.cssHooks.filter = {
            get: function(e) {
                return e.style[h.filter]
            },
            set: function(e, t) {
                e.style[h.filter] = t
            }
        }, e.fn.jquery < "1.8" && (e.cssHooks.transformOrigin = {
            get: function(e) {
                return e.style[h.transformOrigin]
            },
            set: function(e, t) {
                e.style[h.transformOrigin] = t
            }
        }, e.cssHooks.transition = {
            get: function(e) {
                return e.style[h.transition]
            },
            set: function(e, t) {
                e.style[h.transition] = t
            }
        }), o("scale"), o("scaleX"), o("scaleY"), o("translate"), o("rotate"), o("rotateX"), o("rotateY"), o("rotate3d"), o("perspective"), o("skewX"), o("skewY"), o("x", !0), o("y", !0), i.prototype = {
            setFromString: function(e, t) {
                var n = "string" == typeof t ? t.split(",") : t.constructor === Array ? t : [t];
                n.unshift(e), i.prototype.set.apply(this, n)
            },
            set: function(e) {
                var t = Array.prototype.slice.apply(arguments, [1]);
                this.setter[e] ? this.setter[e].apply(this, t) : this[e] = t.join(",")
            },
            get: function(e) {
                return this.getter[e] ? this.getter[e].apply(this) : this[e] || 0
            },
            setter: {
                rotate: function(e) {
                    this.rotate = d(e, "deg")
                },
                rotateX: function(e) {
                    this.rotateX = d(e, "deg")
                },
                rotateY: function(e) {
                    this.rotateY = d(e, "deg")
                },
                scale: function(e, t) {
                    void 0 === t && (t = e), this.scale = e + "," + t
                },
                skewX: function(e) {
                    this.skewX = d(e, "deg")
                },
                skewY: function(e) {
                    this.skewY = d(e, "deg")
                },
                perspective: function(e) {
                    this.perspective = d(e, "px")
                },
                x: function(e) {
                    this.set("translate", e, null)
                },
                y: function(e) {
                    this.set("translate", null, e)
                },
                translate: function(e, t) {
                    void 0 === this._translateX && (this._translateX = 0), void 0 === this._translateY && (this._translateY = 0), null !== e && void 0 !== e && (this._translateX = d(e, "px")), null !== t && void 0 !== t && (this._translateY = d(t, "px")), this.translate = this._translateX + "," + this._translateY
                }
            },
            getter: {
                x: function() {
                    return this._translateX || 0
                },
                y: function() {
                    return this._translateY || 0
                },
                scale: function() {
                    var e = (this.scale || "1,1").split(",");
                    return e[0] && (e[0] = parseFloat(e[0])), e[1] && (e[1] = parseFloat(e[1])), e[0] === e[1] ? e[0] : e
                },
                rotate3d: function() {
                    for (var e = (this.rotate3d || "0,0,0,0deg").split(","), t = 0; 3 >= t; ++t) e[t] && (e[t] = parseFloat(e[t]));
                    return e[3] && (e[3] = d(e[3], "deg")), e
                }
            },
            parse: function(e) {
                var t = this;
                e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(e, n, i) {
                    t.setFromString(n, i)
                })
            },
            toString: function(e) {
                var t = [];
                for (var n in this)
                    if (this.hasOwnProperty(n)) {
                        if (!h.transform3d && ("rotateX" === n || "rotateY" === n || "perspective" === n || "transformOrigin" === n)) continue;
                        "_" !== n[0] && (e && "scale" === n ? t.push(n + "3d(" + this[n] + ",1)") : e && "translate" === n ? t.push(n + "3d(" + this[n] + ",0)") : t.push(n + "(" + this[n] + ")"))
                    }
                return t.join(" ")
            }
        }, e.fn.transition = e.fn.transit = function(t, n, i, r) {
            var o = this,
                l = 0,
                d = !0,
                c = e.extend(!0, {}, t);
            "function" == typeof n && (r = n, n = void 0), "object" == typeof n && (i = n.easing, l = n.delay || 0, d = "undefined" == typeof n.queue ? !0 : n.queue, r = n.complete, n = n.duration), "function" == typeof i && (r = i, i = void 0), "undefined" != typeof c.easing && (i = c.easing, delete c.easing), "undefined" != typeof c.duration && (n = c.duration, delete c.duration), "undefined" != typeof c.complete && (r = c.complete, delete c.complete), "undefined" != typeof c.queue && (d = c.queue, delete c.queue), "undefined" != typeof c.delay && (l = c.delay, delete c.delay), "undefined" == typeof n && (n = e.fx.speeds._default), "undefined" == typeof i && (i = e.cssEase._default), n = u(n);
            var p = a(c, n, i, l),
                f = e.transit.enabled && h.transition,
                g = f ? parseInt(n, 10) + parseInt(l, 10) : 0;
            if (0 === g) {
                var v = function(e) {
                    o.css(c), r && r.apply(o), e && e()
                };
                return s(o, d, v), o
            }
            var _ = {},
                y = function(t) {
                    var n = !1,
                        i = function() {
                            n && o.unbind(m, i), g > 0 && o.each(function() {
                                this.style[h.transition] = _[this] || null
                            }), "function" == typeof r && r.apply(o), "function" == typeof t && t()
                        };
                    g > 0 && m && e.transit.useTransitionEnd ? (n = !0, o.bind(m, i)) : window.setTimeout(i, g), o.each(function() {
                        g > 0 && (this.style[h.transition] = p), e(this).css(c)
                    })
                },
                b = function(e) {
                    this.offsetWidth, y(e)
                };
            return s(o, d, b), this
        }, e.transit.getTransitionValue = a, e
    }), function() {
        "use strict";

        function e(i) {
            if (!i) throw new Error("No options passed to Waypoint constructor");
            if (!i.element) throw new Error("No element option passed to Waypoint constructor");
            if (!i.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + t, this.options = e.Adapter.extend({}, e.defaults, i), this.element = this.options.element, this.adapter = new e.Adapter(this.element), this.callback = i.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = e.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = e.Context.findOrCreateByElement(this.options.context), e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), n[this.key] = this, t += 1
        }
        var t = 0,
            n = {};
        e.prototype.queueTrigger = function(e) {
            this.group.queueTrigger(this, e)
        }, e.prototype.trigger = function(e) {
            this.enabled && this.callback && this.callback.apply(this, e)
        }, e.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete n[this.key]
        }, e.prototype.disable = function() {
            return this.enabled = !1, this
        }, e.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0, this
        }, e.prototype.next = function() {
            return this.group.next(this)
        }, e.prototype.previous = function() {
            return this.group.previous(this)
        }, e.invokeAll = function(e) {
            var t = [];
            for (var i in n) t.push(n[i]);
            for (var s = 0, r = t.length; r > s; s++) t[s][e]()
        }, e.destroyAll = function() {
            e.invokeAll("destroy")
        }, e.disableAll = function() {
            e.invokeAll("disable")
        }, e.enableAll = function() {
            e.invokeAll("enable")
        }, e.refreshAll = function() {
            e.Context.refreshAll()
        }, e.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, e.viewportWidth = function() {
            return document.documentElement.clientWidth
        }, e.adapters = [], e.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, e.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = e
    }(), function() {
        "use strict";

        function e(e) {
            window.setTimeout(e, 1e3 / 60)
        }

        function t(e) {
            this.element = e, this.Adapter = s.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, e.waypointContextKey = this.key, i[e.waypointContextKey] = this, n += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        var n = 0,
            i = {},
            s = window.Waypoint,
            r = window.onload;
        t.prototype.add = function(e) {
            var t = e.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[t][e.key] = e, this.refresh()
        }, t.prototype.checkEmpty = function() {
            var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                t = this.Adapter.isEmptyObject(this.waypoints.vertical);
            e && t && (this.adapter.off(".waypoints"), delete i[this.key])
        }, t.prototype.createThrottledResizeHandler = function() {
            function e() {
                t.handleResize(), t.didResize = !1
            }
            var t = this;
            this.adapter.on("resize.waypoints", function() {
                t.didResize || (t.didResize = !0, s.requestAnimationFrame(e))
            })
        }, t.prototype.createThrottledScrollHandler = function() {
            function e() {
                t.handleScroll(), t.didScroll = !1
            }
            var t = this;
            this.adapter.on("scroll.waypoints", function() {
                (!t.didScroll || s.isTouch) && (t.didScroll = !0, s.requestAnimationFrame(e))
            })
        }, t.prototype.handleResize = function() {
            s.Context.refreshAll();
        }, t.prototype.handleScroll = function() {
            var e = {},
                t = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var n in t) {
                var i = t[n],
                    s = i.newScroll > i.oldScroll,
                    r = s ? i.forward : i.backward;
                for (var a in this.waypoints[n]) {
                    var o = this.waypoints[n][a],
                        l = i.oldScroll < o.triggerPoint,
                        d = i.newScroll >= o.triggerPoint,
                        u = l && d,
                        c = !l && !d;
                    (u || c) && (o.queueTrigger(r), e[o.group.id] = o.group)
                }
            }
            for (var h in e) e[h].flushTriggers();
            this.oldScroll = {
                x: t.horizontal.newScroll,
                y: t.vertical.newScroll
            }
        }, t.prototype.innerHeight = function() {
            return this.element == this.element.window ? s.viewportHeight() : this.adapter.innerHeight()
        }, t.prototype.remove = function(e) {
            delete this.waypoints[e.axis][e.key], this.checkEmpty()
        }, t.prototype.innerWidth = function() {
            return this.element == this.element.window ? s.viewportWidth() : this.adapter.innerWidth()
        }, t.prototype.destroy = function() {
            var e = [];
            for (var t in this.waypoints)
                for (var n in this.waypoints[t]) e.push(this.waypoints[t][n]);
            for (var i = 0, s = e.length; s > i; i++) e[i].destroy()
        }, t.prototype.refresh = function() {
            var e, t = this.element == this.element.window,
                n = t ? void 0 : this.adapter.offset(),
                i = {};
            this.handleScroll(), e = {
                horizontal: {
                    contextOffset: t ? 0 : n.left,
                    contextScroll: t ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: t ? 0 : n.top,
                    contextScroll: t ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (var r in e) {
                var a = e[r];
                for (var o in this.waypoints[r]) {
                    var l, d, u, c, h, p = this.waypoints[r][o],
                        f = p.options.offset,
                        m = p.triggerPoint,
                        g = 0,
                        v = null == m;
                    p.element !== p.element.window && (g = p.adapter.offset()[a.offsetProp]), "function" == typeof f ? f = f.apply(p) : "string" == typeof f && (f = parseFloat(f), p.options.offset.indexOf("%") > -1 && (f = Math.ceil(a.contextDimension * f / 100))), l = a.contextScroll - a.contextOffset, p.triggerPoint = g + l - f, d = m < a.oldScroll, u = p.triggerPoint >= a.oldScroll, c = d && u, h = !d && !u, !v && c ? (p.queueTrigger(a.backward), i[p.group.id] = p.group) : !v && h ? (p.queueTrigger(a.forward), i[p.group.id] = p.group) : v && a.oldScroll >= p.triggerPoint && (p.queueTrigger(a.forward), i[p.group.id] = p.group)
                }
            }
            return s.requestAnimationFrame(function() {
                for (var e in i) i[e].flushTriggers()
            }), this
        }, t.findOrCreateByElement = function(e) {
            return t.findByElement(e) || new t(e)
        }, t.refreshAll = function() {
            for (var e in i) i[e].refresh()
        }, t.findByElement = function(e) {
            return i[e.waypointContextKey]
        }, window.onload = function() {
            r && r(), t.refreshAll()
        }, s.requestAnimationFrame = function(t) {
            var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e;
            n.call(window, t)
        }, s.Context = t
    }(), function() {
        "use strict";

        function e(e, t) {
            return e.triggerPoint - t.triggerPoint
        }

        function t(e, t) {
            return t.triggerPoint - e.triggerPoint
        }

        function n(e) {
            this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
        }
        var i = {
                vertical: {},
                horizontal: {}
            },
            s = window.Waypoint;
        n.prototype.add = function(e) {
            this.waypoints.push(e)
        }, n.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, n.prototype.flushTriggers = function() {
            for (var n in this.triggerQueues) {
                var i = this.triggerQueues[n],
                    s = "up" === n || "left" === n;
                i.sort(s ? t : e);
                for (var r = 0, a = i.length; a > r; r += 1) {
                    var o = i[r];
                    (o.options.continuous || r === i.length - 1) && o.trigger([n])
                }
            }
            this.clearTriggerQueues()
        }, n.prototype.next = function(t) {
            this.waypoints.sort(e);
            var n = s.Adapter.inArray(t, this.waypoints),
                i = n === this.waypoints.length - 1;
            return i ? null : this.waypoints[n + 1]
        }, n.prototype.previous = function(t) {
            this.waypoints.sort(e);
            var n = s.Adapter.inArray(t, this.waypoints);
            return n ? this.waypoints[n - 1] : null
        }, n.prototype.queueTrigger = function(e, t) {
            this.triggerQueues[t].push(e)
        }, n.prototype.remove = function(e) {
            var t = s.Adapter.inArray(e, this.waypoints);
            t > -1 && this.waypoints.splice(t, 1)
        }, n.prototype.first = function() {
            return this.waypoints[0]
        }, n.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, n.findOrCreate = function(e) {
            return i[e.axis][e.name] || new n(e)
        }, s.Group = n
    }(), function() {
        "use strict";

        function e(e) {
            return e === e.window
        }

        function t(t) {
            return e(t) ? t : t.defaultView
        }

        function n(e) {
            this.element = e, this.handlers = {}
        }
        var i = window.Waypoint;
        n.prototype.innerHeight = function() {
            var t = e(this.element);
            return t ? this.element.innerHeight : this.element.clientHeight
        }, n.prototype.innerWidth = function() {
            var t = e(this.element);
            return t ? this.element.innerWidth : this.element.clientWidth
        }, n.prototype.off = function(e, t) {
            function n(e, t, n) {
                for (var i = 0, s = t.length - 1; s > i; i++) {
                    var r = t[i];
                    n && n !== r || e.removeEventListener(r)
                }
            }
            var i = e.split("."),
                s = i[0],
                r = i[1],
                a = this.element;
            if (r && this.handlers[r] && s) n(a, this.handlers[r][s], t), this.handlers[r][s] = [];
            else if (s)
                for (var o in this.handlers) n(a, this.handlers[o][s] || [], t), this.handlers[o][s] = [];
            else if (r && this.handlers[r]) {
                for (var l in this.handlers[r]) n(a, this.handlers[r][l], t);
                this.handlers[r] = {}
            }
        }, n.prototype.offset = function() {
            if (!this.element.ownerDocument) return null;
            var e = this.element.ownerDocument.documentElement,
                n = t(this.element.ownerDocument),
                i = {
                    top: 0,
                    left: 0
                };
            return this.element.getBoundingClientRect && (i = this.element.getBoundingClientRect()), {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }
        }, n.prototype.on = function(e, t) {
            var n = e.split("."),
                i = n[0],
                s = n[1] || "__default",
                r = this.handlers[s] = this.handlers[s] || {},
                a = r[i] = r[i] || [];
            a.push(t), this.element.addEventListener(i, t)
        }, n.prototype.outerHeight = function(t) {
            var n, i = this.innerHeight();
            return t && !e(this.element) && (n = window.getComputedStyle(this.element), i += parseInt(n.marginTop, 10), i += parseInt(n.marginBottom, 10)), i
        }, n.prototype.outerWidth = function(t) {
            var n, i = this.innerWidth();
            return t && !e(this.element) && (n = window.getComputedStyle(this.element), i += parseInt(n.marginLeft, 10), i += parseInt(n.marginRight, 10)), i
        }, n.prototype.scrollLeft = function() {
            var e = t(this.element);
            return e ? e.pageXOffset : this.element.scrollLeft
        }, n.prototype.scrollTop = function() {
            var e = t(this.element);
            return e ? e.pageYOffset : this.element.scrollTop
        }, n.extend = function() {
            function e(e, t) {
                if ("object" == typeof e && "object" == typeof t)
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }
            for (var t = Array.prototype.slice.call(arguments), n = 1, i = t.length; i > n; n++) e(t[0], t[n]);
            return t[0]
        }, n.inArray = function(e, t, n) {
            return null == t ? -1 : t.indexOf(e, n)
        }, n.isEmptyObject = function(e) {
            for (var t in e) return !1;
            return !0
        }, i.adapters.push({
            name: "noframework",
            Adapter: n
        }), i.Adapter = n
    }(), function(e) {
        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
    }(function(e) {
        function t(t) {
            return !t || void 0 !== t.allowPageScroll || void 0 === t.swipe && void 0 === t.swipeStatus || (t.allowPageScroll = u), void 0 !== t.click && void 0 === t.tap && (t.tap = t.click), t || (t = {}), t = e.extend({}, e.fn.swipetp.defaults, t), this.each(function() {
                var i = e(this),
                    s = i.data(A);
                s || (s = new n(this, t), i.data(A, s))
            })
        }

        function n(t, n) {
            function i(t) {
                if (!(de() || e(t.target).closest(n.excludedElements, Ue).length > 0)) {
                    var i, s = t.originalEvent ? t.originalEvent : t,
                        r = s.touches,
                        a = r ? r[0] : s;
                    return Xe = C, r ? Ge = r.length : t.preventDefault(), De = 0, Me = null, qe = null, He = 0, Fe = 0, Be = 0, je = 1, ze = 0, Ve = fe(), We = ve(), oe(), !r || Ge === n.fingers || n.fingers === y || W() ? (ce(0, a), Ye = Se(), 2 == Ge && (ce(1, r[1]), Fe = Be = be(Ve[0].start, Ve[1].start)), (n.swipeStatus || n.pinchStatus) && (i = D(s, Xe))) : i = !1, i === !1 ? (Xe = E, D(s, Xe), i) : (n.hold && (et = setTimeout(e.proxy(function() {
                        Ue.trigger("hold", [s.target]), n.hold && (i = n.hold.call(Ue, s, s.target))
                    }, this), n.longTapThreshold)), ue(!0), null)
                }
            }

            function I(e) {
                var t = e.originalEvent ? e.originalEvent : e;
                if (Xe !== x && Xe !== E && !le()) {
                    var i, s = t.touches,
                        r = s ? s[0] : t,
                        a = he(r);
                    if (Ke = Se(), s && (Ge = s.length), n.hold && clearTimeout(et), Xe = w, 2 == Ge && (0 == Fe ? (ce(1, s[1]), Fe = Be = be(Ve[0].start, Ve[1].start)) : (he(s[1]), Be = be(Ve[0].end, Ve[1].end), qe = we(Ve[0].end, Ve[1].end)), je = Ce(Fe, Be), ze = Math.abs(Fe - Be)), Ge === n.fingers || n.fingers === y || !s || W()) {
                        if (Me = Te(a.start, a.end), z(e, Me), De = xe(a.start, a.end), He = ye(), me(Me, De), (n.swipeStatus || n.pinchStatus) && (i = D(t, Xe)), !n.triggerOnTouchEnd || n.triggerOnTouchLeave) {
                            var o = !0;
                            if (n.triggerOnTouchLeave) {
                                var l = Le(this);
                                o = Ae(a.end, l)
                            }!n.triggerOnTouchEnd && o ? Xe = R(w) : n.triggerOnTouchLeave && !o && (Xe = R(x)), (Xe == E || Xe == x) && D(t, Xe)
                        }
                    } else Xe = E, D(t, Xe);
                    i === !1 && (Xe = E, D(t, Xe))
                }
            }

            function P(e) {
                var t = e.originalEvent ? e.originalEvent : e,
                    i = t.touches;
                return i && i.length ? (ae(), !0) : (le() && (Ge = $e), Ke = Se(), He = ye(), F() || !H() ? (Xe = E, D(t, Xe)) : n.triggerOnTouchEnd || 0 == n.triggerOnTouchEnd && Xe === w ? (e.preventDefault(), Xe = x, D(t, Xe)) : !n.triggerOnTouchEnd && Q() ? (Xe = x, M(t, Xe, f)) : Xe === w && (Xe = E, D(t, Xe)), ue(!1), null)
            }

            function O() {
                Ge = 0, Ke = 0, Ye = 0, Fe = 0, Be = 0, je = 1, oe(), ue(!1)
            }

            function k(e) {
                var t = e.originalEvent ? e.originalEvent : e;
                n.triggerOnTouchLeave && (Xe = R(x), D(t, Xe))
            }

            function N() {
                Ue.unbind(Pe, i), Ue.unbind(Re, O), Ue.unbind(Oe, I), Ue.unbind(ke, P), Ne && Ue.unbind(Ne, k), ue(!1)
            }

            function R(e) {
                var t = e,
                    i = j(),
                    s = H(),
                    r = F();
                return !i || r ? t = E : !s || e != w || n.triggerOnTouchEnd && !n.triggerOnTouchLeave ? !s && e == x && n.triggerOnTouchLeave && (t = E) : t = x, t
            }

            function D(e, t) {
                var n, i = e.touches;
                return V() || G() || U() || W() ? ((V() || G()) && (n = M(e, t, h)), (U() || W()) && n !== !1 && (n = M(e, t, p))) : se() && n !== !1 ? n = M(e, t, m) : re() && n !== !1 ? n = M(e, t, g) : ie() && n !== !1 && (n = M(e, t, f)), t === E && O(e), t === x && (i ? i.length || O(e) : O(e)), n
            }

            function M(t, i, u) {
                var c;
                if (u == h) {
                    if (Ue.trigger("swipeStatus", [i, Me || null, De || 0, He || 0, Ge, Ve]), n.swipeStatus && (c = n.swipeStatus.call(Ue, t, i, Me || null, De || 0, He || 0, Ge, Ve), c === !1)) return !1;
                    if (i == x && X()) {
                        if (Ue.trigger("swipe", [Me, De, He, Ge, Ve]), n.swipe && (c = n.swipe.call(Ue, t, Me, De, He, Ge, Ve), c === !1)) return !1;
                        switch (Me) {
                            case s:
                                Ue.trigger("swipeLeft", [Me, De, He, Ge, Ve]), n.swipeLeft && (c = n.swipeLeft.call(Ue, t, Me, De, He, Ge, Ve));
                                break;
                            case r:
                                Ue.trigger("swipeRight", [Me, De, He, Ge, Ve]), n.swipeRight && (c = n.swipeRight.call(Ue, t, Me, De, He, Ge, Ve));
                                break;
                            case a:
                                Ue.trigger("swipeUp", [Me, De, He, Ge, Ve]), n.swipeUp && (c = n.swipeUp.call(Ue, t, Me, De, He, Ge, Ve));
                                break;
                            case o:
                                Ue.trigger("swipeDown", [Me, De, He, Ge, Ve]), n.swipeDown && (c = n.swipeDown.call(Ue, t, Me, De, He, Ge, Ve))
                        }
                    }
                }
                if (u == p) {
                    if (Ue.trigger("pinchStatus", [i, qe || null, ze || 0, He || 0, Ge, je, Ve]), n.pinchStatus && (c = n.pinchStatus.call(Ue, t, i, qe || null, ze || 0, He || 0, Ge, je, Ve), c === !1)) return !1;
                    if (i == x && q()) switch (qe) {
                        case l:
                            Ue.trigger("pinchIn", [qe || null, ze || 0, He || 0, Ge, je, Ve]), n.pinchIn && (c = n.pinchIn.call(Ue, t, qe || null, ze || 0, He || 0, Ge, je, Ve));
                            break;
                        case d:
                            Ue.trigger("pinchOut", [qe || null, ze || 0, He || 0, Ge, je, Ve]), n.pinchOut && (c = n.pinchOut.call(Ue, t, qe || null, ze || 0, He || 0, Ge, je, Ve))
                    }
                }
                return u == f ? (i === E || i === x) && (clearTimeout(Je), clearTimeout(et), $() && !ee() ? (Ze = Se(), Je = setTimeout(e.proxy(function() {
                    Ze = null, Ue.trigger("tap", [t.target]), n.tap && (c = n.tap.call(Ue, t, t.target))
                }, this), n.doubleTapThreshold)) : (Ze = null, Ue.trigger("tap", [t.target]), n.tap && (c = n.tap.call(Ue, t, t.target)))) : u == m ? (i === E || i === x) && (clearTimeout(Je), Ze = null, Ue.trigger("doubletap", [t.target]), n.doubleTap && (c = n.doubleTap.call(Ue, t, t.target))) : u == g && (i === E || i === x) && (clearTimeout(Je), Ze = null, Ue.trigger("longtap", [t.target]), n.longTap && (c = n.longTap.call(Ue, t, t.target))), c
            }

            function H() {
                var e = !0;
                return null !== n.threshold && (e = De >= n.threshold), e
            }

            function F() {
                var e = !1;
                return null !== n.cancelThreshold && null !== Me && (e = ge(Me) - De >= n.cancelThreshold), e
            }

            function B() {
                return null !== n.pinchThreshold ? ze >= n.pinchThreshold : !0
            }

            function j() {
                var e;
                return e = n.maxTimeThreshold && He >= n.maxTimeThreshold ? !1 : !0
            }

            function z(e, t) {
                if (n.preventDefaultEvents !== !1)
                    if (n.allowPageScroll === u) e.preventDefault();
                    else {
                        var i = n.allowPageScroll === c;
                        switch (t) {
                            case s:
                                (n.swipeLeft && i || !i && n.allowPageScroll != v) && e.preventDefault();
                                break;
                            case r:
                                (n.swipeRight && i || !i && n.allowPageScroll != v) && e.preventDefault();
                                break;
                            case a:
                                (n.swipeUp && i || !i && n.allowPageScroll != _) && e.preventDefault();
                                break;
                            case o:
                                (n.swipeDown && i || !i && n.allowPageScroll != _) && e.preventDefault()
                        }
                    }
            }

            function q() {
                var e = Y(),
                    t = K(),
                    n = B();
                return e && t && n
            }

            function W() {
                return !!(n.pinchStatus || n.pinchIn || n.pinchOut)
            }

            function U() {
                return !(!q() || !W())
            }

            function X() {
                var e = j(),
                    t = H(),
                    n = Y(),
                    i = K(),
                    s = F(),
                    r = !s && i && n && t && e;
                return r
            }

            function G() {
                return !!(n.swipe || n.swipeStatus || n.swipeLeft || n.swipeRight || n.swipeUp || n.swipeDown)
            }

            function V() {
                return !(!X() || !G())
            }

            function Y() {
                return Ge === n.fingers || n.fingers === y || !T
            }

            function K() {
                return 0 !== Ve[0].end.x
            }

            function Q() {
                return !!n.tap
            }

            function $() {
                return !!n.doubleTap
            }

            function Z() {
                return !!n.longTap
            }

            function J() {
                if (null == Ze) return !1;
                var e = Se();
                return $() && e - Ze <= n.doubleTapThreshold
            }

            function ee() {
                return J()
            }

            function te() {
                return (1 === Ge || !T) && (isNaN(De) || De < n.threshold)
            }

            function ne() {
                return He > n.longTapThreshold && b > De
            }

            function ie() {
                return !(!te() || !Q())
            }

            function se() {
                return !(!J() || !$())
            }

            function re() {
                return !(!ne() || !Z())
            }

            function ae() {
                Qe = Se(), $e = event.touches.length + 1
            }

            function oe() {
                Qe = 0, $e = 0
            }

            function le() {
                var e = !1;
                if (Qe) {
                    var t = Se() - Qe;
                    t <= n.fingerReleaseThreshold && (e = !0)
                }
                return e
            }

            function de() {
                return !(Ue.data(A + "_intouch") !== !0)
            }

            function ue(e) {
                e === !0 ? (Ue.bind(Oe, I), Ue.bind(ke, P), Ne && Ue.bind(Ne, k)) : (Ue.unbind(Oe, I, !1), Ue.unbind(ke, P, !1), Ne && Ue.unbind(Ne, k, !1)), Ue.data(A + "_intouch", e === !0)
            }

            function ce(e, t) {
                var n = void 0 !== t.identifier ? t.identifier : 0;
                return Ve[e].identifier = n, Ve[e].start.x = Ve[e].end.x = t.pageX || t.clientX, Ve[e].start.y = Ve[e].end.y = t.pageY || t.clientY, Ve[e]
            }

            function he(e) {
                var t = void 0 !== e.identifier ? e.identifier : 0,
                    n = pe(t);
                return n.end.x = e.pageX || e.clientX, n.end.y = e.pageY || e.clientY, n
            }

            function pe(e) {
                for (var t = 0; t < Ve.length; t++)
                    if (Ve[t].identifier == e) return Ve[t]
            }

            function fe() {
                for (var e = [], t = 0; 5 >= t; t++) e.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                });
                return e
            }

            function me(e, t) {
                t = Math.max(t, ge(e)), We[e].distance = t
            }

            function ge(e) {
                return We[e] ? We[e].distance : void 0
            }

            function ve() {
                var e = {};
                return e[s] = _e(s), e[r] = _e(r), e[a] = _e(a), e[o] = _e(o), e
            }

            function _e(e) {
                return {
                    direction: e,
                    distance: 0
                }
            }

            function ye() {
                return Ke - Ye
            }

            function be(e, t) {
                var n = Math.abs(e.x - t.x),
                    i = Math.abs(e.y - t.y);
                return Math.round(Math.sqrt(n * n + i * i))
            }

            function Ce(e, t) {
                var n = t / e * 1;
                return n.toFixed(2)
            }

            function we() {
                return 1 > je ? d : l
            }

            function xe(e, t) {
                return Math.round(Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)))
            }

            function Ee(e, t) {
                var n = e.x - t.x,
                    i = t.y - e.y,
                    s = Math.atan2(i, n),
                    r = Math.round(180 * s / Math.PI);
                return 0 > r && (r = 360 - Math.abs(r)), r
            }

            function Te(e, t) {
                var n = Ee(e, t);
                return 45 >= n && n >= 0 ? s : 360 >= n && n >= 315 ? s : n >= 135 && 225 >= n ? r : n > 45 && 135 > n ? o : a
            }

            function Se() {
                var e = new Date;
                return e.getTime()
            }

            function Le(t) {
                t = e(t);
                var n = t.offset(),
                    i = {
                        left: n.left,
                        right: n.left + t.outerWidth(),
                        top: n.top,
                        bottom: n.top + t.outerHeight()
                    };
                return i
            }

            function Ae(e, t) {
                return e.x > t.left && e.x < t.right && e.y > t.top && e.y < t.bottom
            }
            var Ie = T || L || !n.fallbackToMouseEvents,
                Pe = Ie ? L ? S ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                Oe = Ie ? L ? S ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                ke = Ie ? L ? S ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                Ne = Ie ? null : "mouseleave",
                Re = L ? S ? "MSPointerCancel" : "pointercancel" : "touchcancel",
                De = 0,
                Me = null,
                He = 0,
                Fe = 0,
                Be = 0,
                je = 1,
                ze = 0,
                qe = 0,
                We = null,
                Ue = e(t),
                Xe = "start",
                Ge = 0,
                Ve = null,
                Ye = 0,
                Ke = 0,
                Qe = 0,
                $e = 0,
                Ze = 0,
                Je = null,
                et = null;
            try {
                Ue.bind(Pe, i), Ue.bind(Re, O)
            } catch (tt) {
                e.error("events not supported " + Pe + "," + Re + " on jQuery.swipetp")
            }
            this.enable = function() {
                return Ue.bind(Pe, i), Ue.bind(Re, O), Ue
            }, this.disable = function() {
                return N(), Ue
            }, this.destroy = function() {
                N(), Ue.data(A, null), Ue = null
            }, this.option = function(t, i) {
                if (void 0 !== n[t]) {
                    if (void 0 === i) return n[t];
                    n[t] = i
                } else e.error("Option " + t + " does not exist on jQuery.swipetp.options");
                return null
            }
        }
        var i = "1.6.9",
            s = "left",
            r = "right",
            a = "up",
            o = "down",
            l = "in",
            d = "out",
            u = "none",
            c = "auto",
            h = "swipe",
            p = "pinch",
            f = "tap",
            m = "doubletap",
            g = "longtap",
            v = "horizontal",
            _ = "vertical",
            y = "all",
            b = 10,
            C = "start",
            w = "move",
            x = "end",
            E = "cancel",
            T = "ontouchstart" in window,
            S = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
            L = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            A = "TouchSwipe",
            I = {
                fingers: 1,
                threshold: 75,
                cancelThreshold: null,
                pinchThreshold: 20,
                maxTimeThreshold: null,
                fingerReleaseThreshold: 250,
                longTapThreshold: 500,
                doubleTapThreshold: 200,
                swipe: null,
                swipeLeft: null,
                swipeRight: null,
                swipeUp: null,
                swipeDown: null,
                swipeStatus: null,
                pinchIn: null,
                pinchOut: null,
                pinchStatus: null,
                click: null,
                tap: null,
                doubleTap: null,
                longTap: null,
                hold: null,
                triggerOnTouchEnd: !0,
                triggerOnTouchLeave: !1,
                allowPageScroll: "auto",
                fallbackToMouseEvents: !0,
                excludedElements: "label, button, input, select, textarea, a, .noSwipe",
                preventDefaultEvents: !0
            };
        e.fn.swipetp = function(n) {
            var i = e(this),
                s = i.data(A);
            if (s && "string" == typeof n) {
                if (s[n]) return s[n].apply(this, Array.prototype.slice.call(arguments, 1));
                e.error("Method " + n + " does not exist on jQuery.swipetp")
            } else if (!(s || "object" != typeof n && n)) return t.apply(this, arguments);
            return i
        }, e.fn.swipetp.version = i, e.fn.swipetp.defaults = I, e.fn.swipetp.phases = {
            PHASE_START: C,
            PHASE_MOVE: w,
            PHASE_END: x,
            PHASE_CANCEL: E
        }, e.fn.swipetp.directions = {
            LEFT: s,
            RIGHT: r,
            UP: a,
            DOWN: o,
            IN: l,
            OUT: d
        }, e.fn.swipetp.pageScroll = {
            NONE: u,
            HORIZONTAL: v,
            VERTICAL: _,
            AUTO: c
        }, e.fn.swipetp.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            ALL: y
        }
    }), "undefined" == typeof console) {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {}
}
if (1 == window.tplogs) try {
    console.groupCollapsed("ThemePunch GreenSocks Logs")
} catch (e) {}
var oldgs = window.GreenSockGlobals;
oldgs_queue = window._gsQueue;
var punchgs = window.GreenSockGlobals = {};
if (1 == window.tplogs) try {
    console.info("Build GreenSock SandBox for ThemePunch Plugins"), console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin")
} catch (e) {}! function(e, t) {
    "use strict";
    var n = e.GreenSockGlobals = e.GreenSockGlobals || e;
    if (!n.TweenLite) {
        var i, s, r, a, o, l = function(e) {
                var t, i = e.split("."),
                    s = n;
                for (t = 0; i.length > t; t++) s[i[t]] = s = s[i[t]] || {};
                return s
            },
            d = l("com.greensock"),
            u = 1e-10,
            c = function(e) {
                var t, n = [],
                    i = e.length;
                for (t = 0; t !== i; n.push(e[t++]));
                return n
            },
            h = function() {},
            p = function() {
                var e = Object.prototype.toString,
                    t = e.call([]);
                return function(n) {
                    return null != n && (n instanceof Array || "object" == typeof n && !!n.push && e.call(n) === t)
                }
            }(),
            f = {},
            m = function(i, s, r, a) {
                this.sc = f[i] ? f[i].sc : [], f[i] = this, this.gsClass = null, this.func = r;
                var o = [];
                this.check = function(d) {
                    for (var u, c, h, p, g = s.length, v = g; --g > -1;)(u = f[s[g]] || new m(s[g], [])).gsClass ? (o[g] = u.gsClass, v--) : d && u.sc.push(this);
                    if (0 === v && r)
                        for (c = ("com.greensock." + i).split("."), h = c.pop(), p = l(c.join("."))[h] = this.gsClass = r.apply(r, o), a && (n[h] = p, "function" == typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + i.split(".").pop(), [], function() {
                                return p
                            }) : i === t && "undefined" != typeof module && module.exports && (module.exports = p)), g = 0; this.sc.length > g; g++) this.sc[g].check()
                }, this.check(!0)
            },
            g = e._gsDefine = function(e, t, n, i) {
                return new m(e, t, n, i)
            },
            v = d._class = function(e, t, n) {
                return t = t || function() {}, g(e, [], function() {
                    return t
                }, n), t
            };
        g.globals = n;
        var _ = [0, 0, 1, 1],
            y = [],
            b = v("easing.Ease", function(e, t, n, i) {
                this._func = e, this._type = n || 0, this._power = i || 0, this._params = t ? _.concat(t) : _
            }, !0),
            C = b.map = {},
            w = b.register = function(e, t, n, i) {
                for (var s, r, a, o, l = t.split(","), u = l.length, c = (n || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
                    for (r = l[u], s = i ? v("easing." + r, null, !0) : d.easing[r] || {}, a = c.length; --a > -1;) o = c[a], C[r + "." + o] = C[o + r] = s[o] = e.getRatio ? e : e[o] || new e
            };
        for (r = b.prototype, r._calcEnd = !1, r.getRatio = function(e) {
                if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                var t = this._type,
                    n = this._power,
                    i = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
                return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i), 1 === t ? 1 - i : 2 === t ? i : .5 > e ? i / 2 : 1 - i / 2
            }, i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = i.length; --s > -1;) r = i[s] + ",Power" + s, w(new b(null, null, 1, s), r, "easeOut", !0), w(new b(null, null, 2, s), r, "easeIn" + (0 === s ? ",easeNone" : "")), w(new b(null, null, 3, s), r, "easeInOut");
        C.linear = d.easing.Linear.easeIn, C.swing = d.easing.Quad.easeInOut;
        var x = v("events.EventDispatcher", function(e) {
            this._listeners = {}, this._eventTarget = e || this
        });
        r = x.prototype, r.addEventListener = function(e, t, n, i, s) {
            s = s || 0;
            var r, l, d = this._listeners[e],
                u = 0;
            for (null == d && (this._listeners[e] = d = []), l = d.length; --l > -1;) r = d[l], r.c === t && r.s === n ? d.splice(l, 1) : 0 === u && s > r.pr && (u = l + 1);
            d.splice(u, 0, {
                c: t,
                s: n,
                up: i,
                pr: s
            }), this !== a || o || a.wake()
        }, r.removeEventListener = function(e, t) {
            var n, i = this._listeners[e];
            if (i)
                for (n = i.length; --n > -1;)
                    if (i[n].c === t) return void i.splice(n, 1)
        }, r.dispatchEvent = function(e) {
            var t, n, i, s = this._listeners[e];
            if (s)
                for (t = s.length, n = this._eventTarget; --t > -1;) i = s[t], i && (i.up ? i.c.call(i.s || n, {
                    type: e,
                    target: n
                }) : i.c.call(i.s || n))
        };
        var E = e.requestAnimationFrame,
            T = e.cancelAnimationFrame,
            S = Date.now || function() {
                return (new Date).getTime()
            },
            L = S();
        for (i = ["ms", "moz", "webkit", "o"], s = i.length; --s > -1 && !E;) E = e[i[s] + "RequestAnimationFrame"], T = e[i[s] + "CancelAnimationFrame"] || e[i[s] + "CancelRequestAnimationFrame"];
        v("Ticker", function(e, t) {
            var n, i, s, r, l, d = this,
                c = S(),
                p = t !== !1 && E,
                f = 500,
                m = 33,
                g = "tick",
                v = function(e) {
                    var t, a, o = S() - L;
                    o > f && (c += o - m), L += o, d.time = (L - c) / 1e3, t = d.time - l, (!n || t > 0 || e === !0) && (d.frame++, l += t + (t >= r ? .004 : r - t), a = !0), e !== !0 && (s = i(v)), a && d.dispatchEvent(g)
                };
            x.call(d), d.time = d.frame = 0, d.tick = function() {
                v(!0)
            }, d.lagSmoothing = function(e, t) {
                f = e || 1 / u, m = Math.min(t, f, 0)
            }, d.sleep = function() {
                null != s && (p && T ? T(s) : clearTimeout(s), i = h, s = null, d === a && (o = !1))
            }, d.wake = function() {
                null !== s ? d.sleep() : d.frame > 10 && (L = S() - f + 5), i = 0 === n ? h : p && E ? E : function(e) {
                    return setTimeout(e, 0 | 1e3 * (l - d.time) + 1)
                }, d === a && (o = !0), v(2)
            }, d.fps = function(e) {
                return arguments.length ? (n = e, r = 1 / (n || 60), l = this.time + r, void d.wake()) : n
            }, d.useRAF = function(e) {
                return arguments.length ? (d.sleep(), p = e, void d.fps(n)) : p
            }, d.fps(e), setTimeout(function() {
                p && 5 > d.frame && d.useRAF(!1)
            }, 1500)
        }), r = d.Ticker.prototype = new d.events.EventDispatcher, r.constructor = d.Ticker;
        var A = v("core.Animation", function(e, t) {
            if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, W) {
                o || a.wake();
                var n = this.vars.useFrames ? q : W;
                n.add(this, n._time), this.vars.paused && this.paused(!0)
            }
        });
        a = A.ticker = new d.Ticker, r = A.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
        var I = function() {
            o && S() - L > 2e3 && a.wake(), setTimeout(I, 2e3)
        };
        I(), r.play = function(e, t) {
            return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
        }, r.pause = function(e, t) {
            return null != e && this.seek(e, t), this.paused(!0)
        }, r.resume = function(e, t) {
            return null != e && this.seek(e, t), this.paused(!1)
        }, r.seek = function(e, t) {
            return this.totalTime(Number(e), t !== !1)
        }, r.restart = function(e, t) {
            return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
        }, r.reverse = function(e, t) {
            return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
        }, r.render = function() {}, r.invalidate = function() {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, r.isActive = function() {
            var e, t = this._timeline,
                n = this._startTime;
            return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= n && n + this.totalDuration() / this._timeScale > e
        }, r._enabled = function(e, t) {
            return o || a.wake(), this._gc = !e, this._active = this.isActive(), t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
        }, r._kill = function() {
            return this._enabled(!1, !1)
        }, r.kill = function(e, t) {
            return this._kill(e, t), this
        }, r._uncache = function(e) {
            for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
            return this
        }, r._swapSelfInParams = function(e) {
            for (var t = e.length, n = e.concat(); --t > -1;) "{self}" === e[t] && (n[t] = this);
            return n
        }, r._callback = function(e) {
            var t = this.vars;
            t[e].apply(t[e + "Scope"] || t.callbackScope || this, t[e + "Params"] || y)
        }, r.eventCallback = function(e, t, n, i) {
            if ("on" === (e || "").substr(0, 2)) {
                var s = this.vars;
                if (1 === arguments.length) return s[e];
                null == t ? delete s[e] : (s[e] = t, s[e + "Params"] = p(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, s[e + "Scope"] = i), "onUpdate" === e && (this._onUpdate = t)
            }
            return this
        }, r.delay = function(e) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
        }, r.duration = function(e) {
            return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, r.totalDuration = function(e) {
            return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
        }, r.time = function(e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
        }, r.totalTime = function(e, t, n) {
            if (o || a.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > e && !n && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var i = this._totalDuration,
                        s = this._timeline;
                    if (e > i && !n && (e = i), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? i - e : e) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                        for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (this.render(e, t, !1), R.length && X())
            }
            return this
        }, r.progress = r.totalProgress = function(e, t) {
            return arguments.length ? this.totalTime(this.duration() * e, t) : this._time / this.duration()
        }, r.startTime = function(e) {
            return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
        }, r.endTime = function(e) {
            return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
        }, r.timeScale = function(e) {
            if (!arguments.length) return this._timeScale;
            if (e = e || u, this._timeline && this._timeline.smoothChildTiming) {
                var t = this._pauseTime,
                    n = t || 0 === t ? t : this._timeline.totalTime();
                this._startTime = n - (n - this._startTime) * this._timeScale / e
            }
            return this._timeScale = e, this._uncache(!1)
        }, r.reversed = function(e) {
            return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, r.paused = function(e) {
            if (!arguments.length) return this._paused;
            var t, n, i = this._timeline;
            return e != this._paused && i && (o || e || a.wake(), t = i.rawTime(), n = t - this._pauseTime, !e && i.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 !== n && this._initted && this.duration() && this.render(i.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, !0, !0)), this._gc && !e && this._enabled(!0, !1), this
        };
        var P = v("core.SimpleTimeline", function(e) {
            A.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        r = P.prototype = new A, r.constructor = P, r.kill()._gc = !1, r._first = r._last = r._recent = null, r._sortChildren = !1, r.add = r.insert = function(e, t) {
            var n, i;
            if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), n = this._last, this._sortChildren)
                for (i = e._startTime; n && n._startTime > i;) n = n._prev;
            return n ? (e._next = n._next, n._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = n, this._recent = e, this._timeline && this._uncache(!0), this
        }, r._remove = function(e, t) {
            return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, r.render = function(e, t, n) {
            var i, s = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = e; s;) i = s._next, (s._active || e >= s._startTime && !s._paused) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (e - s._startTime) * s._timeScale, t, n) : s.render((e - s._startTime) * s._timeScale, t, n)), s = i
        }, r.rawTime = function() {
            return o || a.wake(), this._totalTime
        };
        var O = v("TweenLite", function(t, n, i) {
                if (A.call(this, n, i), this.render = O.prototype.render, null == t) throw "Cannot tween a null target.";
                this.target = t = "string" != typeof t ? t : O.selector(t) || t;
                var s, r, a, o = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? z[O.defaultOverwrite] : "number" == typeof l ? l >> 0 : z[l], (o || t instanceof Array || t.push && p(t)) && "number" != typeof t[0])
                    for (this._targets = a = c(t), this._propLookup = [], this._siblings = [], s = 0; a.length > s; s++) r = a[s], r ? "string" != typeof r ? r.length && r !== e && r[0] && (r[0] === e || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(s--, 1), this._targets = a = a.concat(c(r))) : (this._siblings[s] = G(r, this, !1), 1 === l && this._siblings[s].length > 1 && Y(r, this, null, 1, this._siblings[s])) : (r = a[s--] = O.selector(r), "string" == typeof r && a.splice(s + 1, 1)) : a.splice(s--, 1);
                else this._propLookup = {}, this._siblings = G(t, this, !1), 1 === l && this._siblings.length > 1 && Y(t, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === n && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -u, this.render(-this._delay))
            }, !0),
            k = function(t) {
                return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
            },
            N = function(e, t) {
                var n, i = {};
                for (n in e) j[n] || n in t && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!H[n] || H[n] && H[n]._autoCSS) || (i[n] = e[n], delete e[n]);
                e.css = i
            };
        r = O.prototype = new A, r.constructor = O, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, O.version = "1.17.0", O.defaultEase = r._ease = new b(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = a, O.autoSleep = 120, O.lagSmoothing = function(e, t) {
            a.lagSmoothing(e, t)
        }, O.selector = e.$ || e.jQuery || function(t) {
            var n = e.$ || e.jQuery;
            return n ? (O.selector = n, n(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
        };
        var R = [],
            D = {},
            M = O._internals = {
                isArray: p,
                isSelector: k,
                lazyTweens: R
            },
            H = O._plugins = {},
            F = M.tweenLookup = {},
            B = 0,
            j = M.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1
            },
            z = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            q = A._rootFramesTimeline = new P,
            W = A._rootTimeline = new P,
            U = 30,
            X = M.lazyRender = function() {
                var e, t = R.length;
                for (D = {}; --t > -1;) e = R[t], e && e._lazy !== !1 && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                R.length = 0
            };
        W._startTime = a.time, q._startTime = a.frame, W._active = q._active = !0, setTimeout(X, 1), A._updateRoot = O.render = function() {
            var e, t, n;
            if (R.length && X(), W.render((a.time - W._startTime) * W._timeScale, !1, !1), q.render((a.frame - q._startTime) * q._timeScale, !1, !1), R.length && X(), a.frame >= U) {
                U = a.frame + (parseInt(O.autoSleep, 10) || 120);
                for (n in F) {
                    for (t = F[n].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
                    0 === t.length && delete F[n]
                }
                if (n = W._first, (!n || n._paused) && O.autoSleep && !q._first && 1 === a._listeners.tick.length) {
                    for (; n && n._paused;) n = n._next;
                    n || a.sleep()
                }
            }
        }, a.addEventListener("tick", A._updateRoot);
        var G = function(e, t, n) {
                var i, s, r = e._gsTweenID;
                if (F[r || (e._gsTweenID = r = "t" + B++)] || (F[r] = {
                        target: e,
                        tweens: []
                    }), t && (i = F[r].tweens, i[s = i.length] = t, n))
                    for (; --s > -1;) i[s] === t && i.splice(s, 1);
                return F[r].tweens
            },
            V = function(e, t, n, i) {
                var s, r, a = e.vars.onOverwrite;
                return a && (s = a(e, t, n, i)), a = O.onOverwrite, a && (r = a(e, t, n, i)), s !== !1 && r !== !1
            },
            Y = function(e, t, n, i, s) {
                var r, a, o, l;
                if (1 === i || i >= 4) {
                    for (l = s.length, r = 0; l > r; r++)
                        if ((o = s[r]) !== t) o._gc || o._kill(null, e, t) && (a = !0);
                        else if (5 === i) break;
                    return a
                }
                var d, c = t._startTime + u,
                    h = [],
                    p = 0,
                    f = 0 === t._duration;
                for (r = s.length; --r > -1;)(o = s[r]) === t || o._gc || o._paused || (o._timeline !== t._timeline ? (d = d || K(t, 0, f), 0 === K(o, d, f) && (h[p++] = o)) : c >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > c && ((f || !o._initted) && 2e-10 >= c - o._startTime || (h[p++] = o)));
                for (r = p; --r > -1;)
                    if (o = h[r], 2 === i && o._kill(n, e, t) && (a = !0), 2 !== i || !o._firstPT && o._initted) {
                        if (2 !== i && !V(o, t)) continue;
                        o._enabled(!1, !1) && (a = !0)
                    }
                return a
            },
            K = function(e, t, n) {
                for (var i = e._timeline, s = i._timeScale, r = e._startTime; i._timeline;) {
                    if (r += i._startTime, s *= i._timeScale, i._paused) return -100;
                    i = i._timeline
                }
                return r /= s, r > t ? r - t : n && r === t || !e._initted && 2 * u > r - t ? u : (r += e.totalDuration() / e._timeScale / s) > t + u ? 0 : r - t - u
            };
        r._init = function() {
            var e, t, n, i, s, r = this.vars,
                a = this._overwrittenProps,
                o = this._duration,
                l = !!r.immediateRender,
                d = r.ease;
            if (r.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {};
                for (i in r.startAt) s[i] = r.startAt[i];
                if (s.overwrite = !1, s.immediateRender = !0, s.lazy = l && r.lazy !== !1, s.startAt = s.delay = null, this._startAt = O.to(this.target, 0, s), l)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== o) return
            } else if (r.runBackwards && 0 !== o)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    0 !== this._time && (l = !1), n = {};
                    for (i in r) j[i] && "autoCSS" !== i || (n[i] = r[i]);
                    if (n.overwrite = 0, n.data = "isFromStart", n.lazy = l && r.lazy !== !1, n.immediateRender = l, this._startAt = O.to(this.target, 0, n), l) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = d = d ? d instanceof b ? d : "function" == typeof d ? new b(d, r.easeParams) : C[d] || O.defaultEase : O.defaultEase, r.easeParams instanceof Array && d.config && (this._ease = d.config.apply(d, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], a ? a[e] : null) && (t = !0);
            else t = this._initProps(this.target, this._propLookup, this._siblings, a);
            if (t && O._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
            this._onUpdate = r.onUpdate, this._initted = !0
        }, r._initProps = function(t, n, i, s) {
            var r, a, o, l, d, u;
            if (null == t) return !1;
            D[t._gsTweenID] && X(), this.vars.css || t.style && t !== e && t.nodeType && H.css && this.vars.autoCSS !== !1 && N(this.vars, t);
            for (r in this.vars) {
                if (u = this.vars[r], j[r]) u && (u instanceof Array || u.push && p(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[r] = u = this._swapSelfInParams(u, this));
                else if (H[r] && (l = new H[r])._onInitTween(t, this.vars[r], this)) {
                    for (this._firstPT = d = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: r,
                            pg: !0,
                            pr: l._priority
                        }, a = l._overwriteProps.length; --a > -1;) n[l._overwriteProps[a]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = n[r] = d = {
                    _next: this._firstPT,
                    t: t,
                    p: r,
                    f: "function" == typeof t[r],
                    n: r,
                    pg: !1,
                    pr: 0
                }, d.s = d.f ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(t[r]), d.c = "string" == typeof u && "=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * Number(u.substr(2)) : Number(u) - d.s || 0;
                d && d._next && (d._next._prev = d)
            }
            return s && this._kill(s, t) ? this._initProps(t, n, i, s) : this._overwrite > 1 && this._firstPT && i.length > 1 && Y(t, this, n, this._overwrite, i) ? (this._kill(n, t), this._initProps(t, n, i, s)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (D[t._gsTweenID] = !0), o)
        }, r.render = function(e, t, n) {
            var i, s, r, a, o = this._time,
                l = this._duration,
                d = this._rawPrevTime;
            if (e >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (i = !0, s = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (e = 0), (0 === e || 0 > d || d === u && "isPause" !== this.data) && d !== e && (n = !0, d > u && (s = "onReverseComplete")), this._rawPrevTime = a = !t || e || d === e ? e : u);
            else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && d > 0) && (s = "onReverseComplete", i = this._reversed), 0 > e && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || n) && (d >= 0 && (d !== u || "isPause" !== this.data) && (n = !0), this._rawPrevTime = a = !t || e || d === e ? e : u)), this._initted || (n = !0);
            else if (this._totalTime = this._time = e, this._easeType) {
                var c = e / l,
                    h = this._easeType,
                    p = this._easePower;
                (1 === h || 3 === h && c >= .5) && (c = 1 - c), 3 === h && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), this.ratio = 1 === h ? 1 - c : 2 === h ? c : .5 > e / l ? c / 2 : 1 - c / 2
            } else this.ratio = this._ease.getRatio(e / l);
            if (this._time !== o || n) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = d, R.push(this), void(this._lazy = [e, t]);
                    this._time && !i ? this.ratio = this._ease.getRatio(this._time / l) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && e >= 0 && (this._active = !0), 0 === o && (this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                this._onUpdate && (0 > e && this._startAt && e !== -1e-4 && this._startAt.render(e, t, n), t || (this._time !== o || i) && this._callback("onUpdate")), s && (!this._gc || n) && (0 > e && this._startAt && !this._onUpdate && e !== -1e-4 && this._startAt.render(e, t, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[s] && this._callback(s), 0 === l && this._rawPrevTime === u && a !== u && (this._rawPrevTime = 0))
            }
        }, r._kill = function(e, t, n) {
            if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            t = "string" != typeof t ? t || this._targets || this.target : O.selector(t) || t;
            var i, s, r, a, o, l, d, u, c, h = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline;
            if ((p(t) || k(t)) && "number" != typeof t[0])
                for (i = t.length; --i > -1;) this._kill(e, t[i], n) && (l = !0);
            else {
                if (this._targets) {
                    for (i = this._targets.length; --i > -1;)
                        if (t === this._targets[i]) {
                            o = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[i] = e ? this._overwrittenProps[i] || {} : "all";
                            break
                        }
                } else {
                    if (t !== this.target) return !1;
                    o = this._propLookup, s = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                }
                if (o) {
                    if (d = e || o, u = e !== s && "all" !== s && e !== o && ("object" != typeof e || !e._tempKill), n && (O.onOverwrite || this.vars.onOverwrite)) {
                        for (r in d) o[r] && (c || (c = []), c.push(r));
                        if ((c || !e) && !V(this, n, t, c)) return !1
                    }
                    for (r in d)(a = o[r]) && (h && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(d) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[r]), u && (s[r] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }, r.invalidate = function() {
            return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -u, this.render(-this._delay)), this
        }, r._enabled = function(e, t) {
            if (o || a.wake(), e && this._gc) {
                var n, i = this._targets;
                if (i)
                    for (n = i.length; --n > -1;) this._siblings[n] = G(i[n], this, !0);
                else this._siblings = G(this.target, this, !0)
            }
            return A.prototype._enabled.call(this, e, t), this._notifyPluginsOfEnabled && this._firstPT ? O._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
        }, O.to = function(e, t, n) {
            return new O(e, t, n)
        }, O.from = function(e, t, n) {
            return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new O(e, t, n)
        }, O.fromTo = function(e, t, n, i) {
            return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new O(e, t, i)
        }, O.delayedCall = function(e, t, n, i, s) {
            return new O(t, 0, {
                delay: e,
                onComplete: t,
                onCompleteParams: n,
                callbackScope: i,
                onReverseComplete: t,
                onReverseCompleteParams: n,
                immediateRender: !1,
                lazy: !1,
                useFrames: s,
                overwrite: 0
            })
        }, O.set = function(e, t) {
            return new O(e, 0, t)
        }, O.getTweensOf = function(e, t) {
            if (null == e) return [];
            e = "string" != typeof e ? e : O.selector(e) || e;
            var n, i, s, r;
            if ((p(e) || k(e)) && "number" != typeof e[0]) {
                for (n = e.length, i = []; --n > -1;) i = i.concat(O.getTweensOf(e[n], t));
                for (n = i.length; --n > -1;)
                    for (r = i[n], s = n; --s > -1;) r === i[s] && i.splice(n, 1)
            } else
                for (i = G(e).concat(), n = i.length; --n > -1;)(i[n]._gc || t && !i[n].isActive()) && i.splice(n, 1);
            return i
        }, O.killTweensOf = O.killDelayedCallsTo = function(e, t, n) {
            "object" == typeof t && (n = t, t = !1);
            for (var i = O.getTweensOf(e, t), s = i.length; --s > -1;) i[s]._kill(n, e)
        };
        var Q = v("plugins.TweenPlugin", function(e, t) {
            this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = Q.prototype
        }, !0);
        if (r = Q.prototype, Q.version = "1.10.1", Q.API = 2, r._firstPT = null, r._addTween = function(e, t, n, i, s, r) {
                var a, o;
                return null != i && (a = "number" == typeof i || "=" !== i.charAt(1) ? Number(i) - Number(n) : parseInt(i.charAt(0) + "1", 10) * Number(i.substr(2))) ? (this._firstPT = o = {
                    _next: this._firstPT,
                    t: e,
                    p: t,
                    s: n,
                    c: a,
                    f: "function" == typeof e[t],
                    n: s || t,
                    r: r
                }, o._next && (o._next._prev = o), o) : void 0
            }, r.setRatio = function(e) {
                for (var t, n = this._firstPT, i = 1e-6; n;) t = n.c * e + n.s, n.r ? t = Math.round(t) : i > t && t > -i && (t = 0), n.f ? n.t[n.p](t) : n.t[n.p] = t, n = n._next
            }, r._kill = function(e) {
                var t, n = this._overwriteProps,
                    i = this._firstPT;
                if (null != e[this._propName]) this._overwriteProps = [];
                else
                    for (t = n.length; --t > -1;) null != e[n[t]] && n.splice(t, 1);
                for (; i;) null != e[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
                return !1
            }, r._roundProps = function(e, t) {
                for (var n = this._firstPT; n;)(e[this._propName] || null != n.n && e[n.n.split(this._propName + "_").join("")]) && (n.r = t), n = n._next
            }, O._onPluginEvent = function(e, t) {
                var n, i, s, r, a, o = t._firstPT;
                if ("_onInitAllProps" === e) {
                    for (; o;) {
                        for (a = o._next, i = s; i && i.pr > o.pr;) i = i._next;
                        (o._prev = i ? i._prev : r) ? o._prev._next = o: s = o, (o._next = i) ? i._prev = o : r = o, o = a
                    }
                    o = t._firstPT = s
                }
                for (; o;) o.pg && "function" == typeof o.t[e] && o.t[e]() && (n = !0), o = o._next;
                return n
            }, Q.activate = function(e) {
                for (var t = e.length; --t > -1;) e[t].API === Q.API && (H[(new e[t])._propName] = e[t]);
                return !0
            }, g.plugin = function(e) {
                if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                var t, n = e.propName,
                    i = e.priority || 0,
                    s = e.overwriteProps,
                    r = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    a = v("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function() {
                        Q.call(this, n, i), this._overwriteProps = s || []
                    }, e.global === !0),
                    o = a.prototype = new Q(n);
                o.constructor = a, a.API = e.API;
                for (t in r) "function" == typeof e[t] && (o[r[t]] = e[t]);
                return a.version = e.version, Q.activate([a]), a
            }, i = e._gsQueue) {
            for (s = 0; i.length > s; s++) i[s]();
            for (r in f) f[r].func || e.console.log("GSAP encountered missing dependency: com.greensock." + r)
        }
        o = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, n) {
            var i = function(e) {
                    t.call(this, e), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var n, i, s = this.vars;
                    for (i in s) n = s[i], l(n) && -1 !== n.join("").indexOf("{self}") && (s[i] = this._swapSelfInParams(n));
                    l(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
                },
                s = 1e-10,
                r = n._internals,
                a = i._internals = {},
                o = r.isSelector,
                l = r.isArray,
                d = r.lazyTweens,
                u = r.lazyRender,
                c = [],
                h = _gsScope._gsDefine.globals,
                p = function(e) {
                    var t, n = {};
                    for (t in e) n[t] = e[t];
                    return n
                },
                f = a.pauseCallback = function(e, t, n, i) {
                    var r, a = e._timeline,
                        o = a._totalTime,
                        l = e._startTime,
                        d = 0 > e._rawPrevTime || 0 === e._rawPrevTime && a._reversed,
                        u = d ? 0 : s,
                        h = d ? s : 0;
                    if (t || !this._forcingPlayhead) {
                        for (a.pause(l), r = e._prev; r && r._startTime === l;) r._rawPrevTime = h, r = r._prev;
                        for (r = e._next; r && r._startTime === l;) r._rawPrevTime = u, r = r._next;
                        t && t.apply(i || a.vars.callbackScope || a, n || c), (this._forcingPlayhead || !a._paused) && a.seek(o)
                    }
                },
                m = function(e) {
                    var t, n = [],
                        i = e.length;
                    for (t = 0; t !== i; n.push(e[t++]));
                    return n
                },
                g = i.prototype = new t;
            return i.version = "1.17.0", g.constructor = i, g.kill()._gc = g._forcingPlayhead = !1, g.to = function(e, t, i, s) {
                var r = i.repeat && h.TweenMax || n;
                return t ? this.add(new r(e, t, i), s) : this.set(e, i, s)
            }, g.from = function(e, t, i, s) {
                return this.add((i.repeat && h.TweenMax || n).from(e, t, i), s)
            }, g.fromTo = function(e, t, i, s, r) {
                var a = s.repeat && h.TweenMax || n;
                return t ? this.add(a.fromTo(e, t, i, s), r) : this.set(e, s, r)
            }, g.staggerTo = function(e, t, s, r, a, l, d, u) {
                var c, h = new i({
                    onComplete: l,
                    onCompleteParams: d,
                    callbackScope: u,
                    smoothChildTiming: this.smoothChildTiming
                });
                for ("string" == typeof e && (e = n.selector(e) || e), e = e || [], o(e) && (e = m(e)), r = r || 0, 0 > r && (e = m(e), e.reverse(), r *= -1), c = 0; e.length > c; c++) s.startAt && (s.startAt = p(s.startAt)), h.to(e[c], t, p(s), c * r);
                return this.add(h, a)
            }, g.staggerFrom = function(e, t, n, i, s, r, a, o) {
                return n.immediateRender = 0 != n.immediateRender, n.runBackwards = !0, this.staggerTo(e, t, n, i, s, r, a, o)
            }, g.staggerFromTo = function(e, t, n, i, s, r, a, o, l) {
                return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, this.staggerTo(e, t, i, s, r, a, o, l)
            }, g.call = function(e, t, i, s) {
                return this.add(n.delayedCall(0, e, t, i), s)
            }, g.set = function(e, t, i) {
                return i = this._parseTimeOrLabel(i, 0, !0), null == t.immediateRender && (t.immediateRender = i === this._time && !this._paused), this.add(new n(e, 0, t), i)
            }, i.exportRoot = function(e, t) {
                e = e || {}, null == e.smoothChildTiming && (e.smoothChildTiming = !0);
                var s, r, a = new i(e),
                    o = a._timeline;
                for (null == t && (t = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, s = o._first; s;) r = s._next, t && s instanceof n && s.target === s.vars.onComplete || a.add(s, s._startTime - s._delay), s = r;
                return o.add(a, 0), a
            }, g.add = function(s, r, a, o) {
                var d, u, c, h, p, f;
                if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, s)), !(s instanceof e)) {
                    if (s instanceof Array || s && s.push && l(s)) {
                        for (a = a || "normal", o = o || 0, d = r, u = s.length, c = 0; u > c; c++) l(h = s[c]) && (h = new i({
                            tweens: h
                        })), this.add(h, d), "string" != typeof h && "function" != typeof h && ("sequence" === a ? d = h._startTime + h.totalDuration() / h._timeScale : "start" === a && (h._startTime -= h.delay())), d += o;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof s) return this.addLabel(s, r);
                    if ("function" != typeof s) throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                    s = n.delayedCall(0, s)
                }
                if (t.prototype.add.call(this, s, r), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (p = this, f = p.rawTime() > s._startTime; p._timeline;) f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                return this
            }, g.remove = function(t) {
                if (t instanceof e) return this._remove(t, !1);
                if (t instanceof Array || t && t.push && l(t)) {
                    for (var n = t.length; --n > -1;) this.remove(t[n]);
                    return this
                }
                return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
            }, g._remove = function(e, n) {
                t.prototype._remove.call(this, e, n);
                var i = this._last;
                return i ? this._time > i._startTime + i._totalDuration / i._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, g.append = function(e, t) {
                return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
            }, g.insert = g.insertMultiple = function(e, t, n, i) {
                return this.add(e, t || 0, n, i)
            }, g.appendMultiple = function(e, t, n, i) {
                return this.add(e, this._parseTimeOrLabel(null, t, !0, e), n, i)
            }, g.addLabel = function(e, t) {
                return this._labels[e] = this._parseTimeOrLabel(t), this
            }, g.addPause = function(e, t, i, s) {
                var r = n.delayedCall(0, f, ["{self}", t, i, s], this);
                return r.data = "isPause", this.add(r, e)
            }, g.removeLabel = function(e) {
                return delete this._labels[e], this
            }, g.getLabelTime = function(e) {
                return null != this._labels[e] ? this._labels[e] : -1
            }, g._parseTimeOrLabel = function(t, n, i, s) {
                var r;
                if (s instanceof e && s.timeline === this) this.remove(s);
                else if (s && (s instanceof Array || s.push && l(s)))
                    for (r = s.length; --r > -1;) s[r] instanceof e && s[r].timeline === this && this.remove(s[r]);
                if ("string" == typeof n) return this._parseTimeOrLabel(n, i && "number" == typeof t && null == this._labels[n] ? t - this.duration() : 0, i);
                if (n = n || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
                else {
                    if (r = t.indexOf("="), -1 === r) return null == this._labels[t] ? i ? this._labels[t] = this.duration() + n : n : this._labels[t] + n;
                    n = parseInt(t.charAt(r - 1) + "1", 10) * Number(t.substr(r + 1)), t = r > 1 ? this._parseTimeOrLabel(t.substr(0, r - 1), 0, i) : this.duration()
                }
                return Number(t) + n
            }, g.seek = function(e, t) {
                return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), t !== !1)
            }, g.stop = function() {
                return this.paused(!0)
            }, g.gotoAndPlay = function(e, t) {
                return this.play(e, t)
            }, g.gotoAndStop = function(e, t) {
                return this.pause(e, t)
            }, g.render = function(e, t, n) {
                this._gc && this._enabled(!0, !1);
                var i, r, a, o, l, c = this._dirty ? this.totalDuration() : this._totalDuration,
                    h = this._time,
                    p = this._startTime,
                    f = this._timeScale,
                    m = this._paused;
                if (e >= c) this._totalTime = this._time = c, this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === e || 0 > this._rawPrevTime || this._rawPrevTime === s) && this._rawPrevTime !== e && this._first && (l = !0, this._rawPrevTime > s && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : s, e = c + 1e-4;
                else if (1e-7 > e)
                    if (this._totalTime = this._time = 0, (0 !== h || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || 0 > e && this._rawPrevTime >= 0)) && (o = "onReverseComplete", r = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = e;
                    else {
                        if (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : s, 0 === e && r)
                            for (i = this._first; i && 0 === i._startTime;) i._duration || (r = !1), i = i._next;
                        e = 0, this._initted || (l = !0)
                    }
                else this._totalTime = this._time = this._rawPrevTime = e;
                if (this._time !== h && this._first || n || l) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== h && e > 0 && (this._active = !0), 0 === h && this.vars.onStart && 0 !== this._time && (t || this._callback("onStart")), this._time >= h)
                        for (i = this._first; i && (a = i._next, !this._paused || m);)(i._active || i._startTime <= this._time && !i._paused && !i._gc) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)), i = a;
                    else
                        for (i = this._last; i && (a = i._prev, !this._paused || m);)(i._active || h >= i._startTime && !i._paused && !i._gc) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)), i = a;
                    this._onUpdate && (t || (d.length && u(), this._callback("onUpdate"))), o && (this._gc || (p === this._startTime || f !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (r && (d.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[o] && this._callback(o)))
                }
            }, g._hasPausedChild = function() {
                for (var e = this._first; e;) {
                    if (e._paused || e instanceof i && e._hasPausedChild()) return !0;
                    e = e._next
                }
                return !1
            }, g.getChildren = function(e, t, i, s) {
                s = s || -9999999999;
                for (var r = [], a = this._first, o = 0; a;) s > a._startTime || (a instanceof n ? t !== !1 && (r[o++] = a) : (i !== !1 && (r[o++] = a), e !== !1 && (r = r.concat(a.getChildren(!0, t, i)), o = r.length))), a = a._next;
                return r
            }, g.getTweensOf = function(e, t) {
                var i, s, r = this._gc,
                    a = [],
                    o = 0;
                for (r && this._enabled(!0, !0), i = n.getTweensOf(e), s = i.length; --s > -1;)(i[s].timeline === this || t && this._contains(i[s])) && (a[o++] = i[s]);
                return r && this._enabled(!1, !0), a
            }, g.recent = function() {
                return this._recent
            }, g._contains = function(e) {
                for (var t = e.timeline; t;) {
                    if (t === this) return !0;
                    t = t.timeline
                }
                return !1
            }, g.shiftChildren = function(e, t, n) {
                n = n || 0;
                for (var i, s = this._first, r = this._labels; s;) s._startTime >= n && (s._startTime += e), s = s._next;
                if (t)
                    for (i in r) r[i] >= n && (r[i] += e);
                return this._uncache(!0)
            }, g._kill = function(e, t) {
                if (!e && !t) return this._enabled(!1, !1);
                for (var n = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), i = n.length, s = !1; --i > -1;) n[i]._kill(e, t) && (s = !0);
                return s
            }, g.clear = function(e) {
                var t = this.getChildren(!1, !0, !0),
                    n = t.length;
                for (this._time = this._totalTime = 0; --n > -1;) t[n]._enabled(!1, !1);
                return e !== !1 && (this._labels = {}), this._uncache(!0)
            }, g.invalidate = function() {
                for (var t = this._first; t;) t.invalidate(), t = t._next;
                return e.prototype.invalidate.call(this)
            }, g._enabled = function(e, n) {
                if (e === this._gc)
                    for (var i = this._first; i;) i._enabled(e, !0), i = i._next;
                return t.prototype._enabled.call(this, e, n)
            }, g.totalTime = function() {
                this._forcingPlayhead = !0;
                var t = e.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, t
            }, g.duration = function(e) {
                return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
            }, g.totalDuration = function(e) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var t, n, i = 0, s = this._last, r = 999999999999; s;) t = s._prev, s._dirty && s.totalDuration(), s._startTime > r && this._sortChildren && !s._paused ? this.add(s, s._startTime - s._delay) : r = s._startTime, 0 > s._startTime && !s._paused && (i -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale), this.shiftChildren(-s._startTime, !1, -9999999999), r = 0), n = s._startTime + s._totalDuration / s._timeScale, n > i && (i = n), s = t;
                        this._duration = this._totalDuration = i, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return 0 !== this.totalDuration() && 0 !== e && this.timeScale(this._totalDuration / e), this
            }, g.paused = function(t) {
                if (!t)
                    for (var n = this._first, i = this._time; n;) n._startTime === i && "isPause" === n.data && (n._rawPrevTime = 0), n = n._next;
                return e.prototype.paused.apply(this, arguments)
            }, g.usesFrames = function() {
                for (var t = this._timeline; t._timeline;) t = t._timeline;
                return t === e._rootFramesTimeline
            }, g.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }, i
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[e]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = t())
    }("TimelineLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(e) {
        var t, n, i, s = _gsScope.GreenSockGlobals || _gsScope,
            r = s.com.greensock,
            a = 2 * Math.PI,
            o = Math.PI / 2,
            l = r._class,
            d = function(t, n) {
                var i = l("easing." + t, function() {}, !0),
                    s = i.prototype = new e;
                return s.constructor = i, s.getRatio = n, i
            },
            u = e.register || function() {},
            c = function(e, t, n, i) {
                var s = l("easing." + e, {
                    easeOut: new t,
                    easeIn: new n,
                    easeInOut: new i
                }, !0);
                return u(s, e), s
            },
            h = function(e, t, n) {
                this.t = e, this.v = t, n && (this.next = n, n.prev = this, this.c = n.v - t, this.gap = n.t - e)
            },
            p = function(t, n) {
                var i = l("easing." + t, function(e) {
                        this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                    s = i.prototype = new e;
                return s.constructor = i, s.getRatio = n, s.config = function(e) {
                    return new i(e)
                }, i
            },
            f = c("Back", p("BackOut", function(e) {
                return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
            }), p("BackIn", function(e) {
                return e * e * ((this._p1 + 1) * e - this._p1)
            }), p("BackInOut", function(e) {
                return 1 > (e *= 2) ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
            })),
            m = l("easing.SlowMo", function(e, t, n) {
                t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = n === !0
            }, !0),
            g = m.prototype = new e;
        return g.constructor = m, g.getRatio = function(e) {
            var t = e + (.5 - e) * this._p;
            return this._p1 > e ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
        }, m.ease = new m(.7, .7), g.config = m.config = function(e, t, n) {
            return new m(e, t, n)
        }, t = l("easing.SteppedEase", function(e) {
            e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
        }, !0), g = t.prototype = new e, g.constructor = t, g.getRatio = function(e) {
            return 0 > e ? e = 0 : e >= 1 && (e = .999999999), (this._p2 * e >> 0) * this._p1
        }, g.config = t.config = function(e) {
            return new t(e)
        }, n = l("easing.RoughEase", function(t) {
            t = t || {};
            for (var n, i, s, r, a, o, l = t.taper || "none", d = [], u = 0, c = 0 | (t.points || 20), p = c, f = t.randomize !== !1, m = t.clamp === !0, g = t.template instanceof e ? t.template : null, v = "number" == typeof t.strength ? .4 * t.strength : .4; --p > -1;) n = f ? Math.random() : 1 / c * p, i = g ? g.getRatio(n) : n, "none" === l ? s = v : "out" === l ? (r = 1 - n, s = r * r * v) : "in" === l ? s = n * n * v : .5 > n ? (r = 2 * n, s = .5 * r * r * v) : (r = 2 * (1 - n), s = .5 * r * r * v), f ? i += Math.random() * s - .5 * s : p % 2 ? i += .5 * s : i -= .5 * s, m && (i > 1 ? i = 1 : 0 > i && (i = 0)), d[u++] = {
                x: n,
                y: i
            };
            for (d.sort(function(e, t) {
                    return e.x - t.x
                }), o = new h(1, 1, null), p = c; --p > -1;) a = d[p], o = new h(a.x, a.y, o);
            this._prev = new h(0, 0, 0 !== o.t ? o : o.next)
        }, !0), g = n.prototype = new e, g.constructor = n, g.getRatio = function(e) {
            var t = this._prev;
            if (e > t.t) {
                for (; t.next && e >= t.t;) t = t.next;
                t = t.prev
            } else
                for (; t.prev && t.t >= e;) t = t.prev;
            return this._prev = t, t.v + (e - t.t) / t.gap * t.c
        }, g.config = function(e) {
            return new n(e)
        }, n.ease = new n, c("Bounce", d("BounceOut", function(e) {
            return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }), d("BounceIn", function(e) {
            return 1 / 2.75 > (e = 1 - e) ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }), d("BounceInOut", function(e) {
            var t = .5 > e;
            return e = t ? 1 - 2 * e : 2 * e - 1, e = 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
        })), c("Circ", d("CircOut", function(e) {
            return Math.sqrt(1 - (e -= 1) * e)
        }), d("CircIn", function(e) {
            return -(Math.sqrt(1 - e * e) - 1)
        }), d("CircInOut", function(e) {
            return 1 > (e *= 2) ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        })), i = function(t, n, i) {
            var s = l("easing." + t, function(e, t) {
                    this._p1 = e >= 1 ? e : 1, this._p2 = (t || i) / (1 > e ? e : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                }, !0),
                r = s.prototype = new e;
            return r.constructor = s, r.getRatio = n, r.config = function(e, t) {
                return new s(e, t)
            }, s
        }, c("Elastic", i("ElasticOut", function(e) {
            return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
        }, .3), i("ElasticIn", function(e) {
            return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2))
        }, .3), i("ElasticInOut", function(e) {
            return 1 > (e *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) + 1
        }, .45)), c("Expo", d("ExpoOut", function(e) {
            return 1 - Math.pow(2, -10 * e)
        }), d("ExpoIn", function(e) {
            return Math.pow(2, 10 * (e - 1)) - .001
        }), d("ExpoInOut", function(e) {
            return 1 > (e *= 2) ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        })), c("Sine", d("SineOut", function(e) {
            return Math.sin(e * o)
        }), d("SineIn", function(e) {
            return -Math.cos(e * o) + 1
        }), d("SineInOut", function(e) {
            return -.5 * (Math.cos(Math.PI * e) - 1)
        })), l("easing.EaseLookup", {
            find: function(t) {
                return e.map[t]
            }
        }, !0), u(s.SlowMo, "SlowMo", "ease,"), u(n, "RoughEase", "ease,"), u(t, "SteppedEase", "ease,"), f
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(e, t) {
            var n, i, s, r, a = function() {
                    e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                },
                o = _gsScope._gsDefine.globals,
                l = {},
                d = a.prototype = new e("css");
            d.constructor = a, a.version = "1.17.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, d = "px", a.suffixMap = {
                top: d,
                right: d,
                bottom: d,
                left: d,
                width: d,
                height: d,
                fontSize: d,
                padding: d,
                margin: d,
                perspective: d,
                lineHeight: ""
            };
            var u, c, h, p, f, m, g = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                _ = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                b = /(?:\d|\-|\+|=|#|\.)*/g,
                C = /opacity *= *([^)]*)/i,
                w = /opacity:([^;]*)/i,
                x = /alpha\(opacity *=.+?\)/i,
                E = /^(rgb|hsl)/,
                T = /([A-Z])/g,
                S = /-([a-z])/gi,
                L = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                A = function(e, t) {
                    return t.toUpperCase()
                },
                I = /(?:Left|Right|Width)/i,
                P = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                k = /,(?=[^\)]*(?:\(|$))/gi,
                N = Math.PI / 180,
                R = 180 / Math.PI,
                D = {},
                M = document,
                H = function(e) {
                    return M.createElementNS ? M.createElementNS("http://www.w3.org/1999/xhtml", e) : M.createElement(e)
                },
                F = H("div"),
                B = H("img"),
                j = a._internals = {
                    _specialProps: l
                },
                z = navigator.userAgent,
                q = function() {
                    var e = z.indexOf("Android"),
                        t = H("a");
                    return h = -1 !== z.indexOf("Safari") && -1 === z.indexOf("Chrome") && (-1 === e || Number(z.substr(e + 8, 1)) > 3), f = h && 6 > Number(z.substr(z.indexOf("Version/") + 8, 1)), p = -1 !== z.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(z) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(z)) && (m = parseFloat(RegExp.$1)), t ? (t.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(t.style.opacity)) : !1
                }(),
                W = function(e) {
                    return C.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                U = function(e) {
                    window.console && console.log(e)
                },
                X = "",
                G = "",
                V = function(e, t) {
                    t = t || F;
                    var n, i, s = t.style;
                    if (void 0 !== s[e]) return e;
                    for (e = e.charAt(0).toUpperCase() + e.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && void 0 === s[n[i] + e];);
                    return i >= 0 ? (G = 3 === i ? "ms" : n[i], X = "-" + G.toLowerCase() + "-", G + e) : null
                },
                Y = M.defaultView ? M.defaultView.getComputedStyle : function() {},
                K = a.getStyle = function(e, t, n, i, s) {
                    var r;
                    return q || "opacity" !== t ? (!i && e.style[t] ? r = e.style[t] : (n = n || Y(e)) ? r = n[t] || n.getPropertyValue(t) || n.getPropertyValue(t.replace(T, "-$1").toLowerCase()) : e.currentStyle && (r = e.currentStyle[t]), null == s || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : s) : W(e)
                },
                Q = j.convertToPixels = function(e, n, i, s, r) {
                    if ("px" === s || !s) return i;
                    if ("auto" === s || !i) return 0;
                    var o, l, d, u = I.test(n),
                        c = e,
                        h = F.style,
                        p = 0 > i;
                    if (p && (i = -i), "%" === s && -1 !== n.indexOf("border")) o = i / 100 * (u ? e.clientWidth : e.clientHeight);
                    else {
                        if (h.cssText = "border:0 solid red;position:" + K(e, "position") + ";line-height:0;", "%" !== s && c.appendChild) h[u ? "borderLeftWidth" : "borderTopWidth"] = i + s;
                        else {
                            if (c = e.parentNode || M.body, l = c._gsCache, d = t.ticker.frame, l && u && l.time === d) return l.width * i / 100;
                            h[u ? "width" : "height"] = i + s
                        }
                        c.appendChild(F), o = parseFloat(F[u ? "offsetWidth" : "offsetHeight"]), c.removeChild(F), u && "%" === s && a.cacheWidths !== !1 && (l = c._gsCache = c._gsCache || {}, l.time = d, l.width = 100 * (o / i)), 0 !== o || r || (o = Q(e, n, i, s, !0))
                    }
                    return p ? -o : o
                },
                $ = j.calculateOffset = function(e, t, n) {
                    if ("absolute" !== K(e, "position", n)) return 0;
                    var i = "left" === t ? "Left" : "Top",
                        s = K(e, "margin" + i, n);
                    return e["offset" + i] - (Q(e, t, parseFloat(s), s.replace(b, "")) || 0)
                },
                Z = function(e, t) {
                    var n, i, s, r = {};
                    if (t = t || Y(e, null))
                        if (n = t.length)
                            for (; --n > -1;) s = t[n], (-1 === s.indexOf("-transform") || Ee === s) && (r[s.replace(S, A)] = t.getPropertyValue(s));
                        else
                            for (n in t)(-1 === n.indexOf("Transform") || xe === n) && (r[n] = t[n]);
                    else if (t = e.currentStyle || e.style)
                        for (n in t) "string" == typeof n && void 0 === r[n] && (r[n.replace(S, A)] = t[n]);
                    return q || (r.opacity = W(e)), i = Me(e, t, !1), r.rotation = i.rotation, r.skewX = i.skewX, r.scaleX = i.scaleX, r.scaleY = i.scaleY, r.x = i.x, r.y = i.y, Se && (r.z = i.z, r.rotationX = i.rotationX, r.rotationY = i.rotationY, r.scaleZ = i.scaleZ), r.filters && delete r.filters, r
                },
                J = function(e, t, n, i, s) {
                    var r, a, o, l = {},
                        d = e.style;
                    for (a in n) "cssText" !== a && "length" !== a && isNaN(a) && (t[a] !== (r = n[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[a] = "auto" !== r || "left" !== a && "top" !== a ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof t[a] || "" === t[a].replace(y, "") ? r : 0 : $(e, a), void 0 !== d[a] && (o = new pe(d, a, d[a], o)));
                    if (i)
                        for (a in i) "className" !== a && (l[a] = i[a]);
                    return {
                        difs: l,
                        firstMPT: o
                    }
                },
                ee = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                te = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                ne = function(e, t, n) {
                    var i = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                        s = ee[t],
                        r = s.length;
                    for (n = n || Y(e, null); --r > -1;) i -= parseFloat(K(e, "padding" + s[r], n, !0)) || 0, i -= parseFloat(K(e, "border" + s[r] + "Width", n, !0)) || 0;
                    return i
                },
                ie = function(e, t) {
                    (null == e || "" === e || "auto" === e || "auto auto" === e) && (e = "0 0");
                    var n = e.split(" "),
                        i = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : n[0],
                        s = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : n[1];
                    return null == s ? s = "center" === i ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === i || isNaN(parseFloat(i)) && -1 === (i + "").indexOf("=")) && (i = "50%"), e = i + " " + s + (n.length > 2 ? " " + n[2] : ""), t && (t.oxp = -1 !== i.indexOf("%"), t.oyp = -1 !== s.indexOf("%"), t.oxr = "=" === i.charAt(1), t.oyr = "=" === s.charAt(1), t.ox = parseFloat(i.replace(y, "")), t.oy = parseFloat(s.replace(y, "")), t.v = e), t || e
                },
                se = function(e, t) {
                    return "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t)
                },
                re = function(e, t) {
                    return null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e)
                },
                ae = function(e, t, n, i) {
                    var s, r, a, o, l, d = 1e-6;
                    return null == e ? o = t : "number" == typeof e ? o = e : (s = 360, r = e.split("_"), l = "=" === e.charAt(1), a = (l ? parseInt(e.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === e.indexOf("rad") ? 1 : R) - (l ? 0 : t), r.length && (i && (i[n] = t + a), -1 !== e.indexOf("short") && (a %= s, a !== a % (s / 2) && (a = 0 > a ? a + s : a - s)), -1 !== e.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * s) % s - (0 | a / s) * s : -1 !== e.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * s) % s - (0 | a / s) * s)), o = t + a), d > o && o > -d && (o = 0), o
                },
                oe = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                le = function(e, t, n) {
                    return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e, 0 | 255 * (1 > 6 * e ? t + 6 * (n - t) * e : .5 > e ? n : 2 > 3 * e ? t + 6 * (n - t) * (2 / 3 - e) : t) + .5
                },
                de = a.parseColor = function(e) {
                    var t, n, i, s, r, a;
                    return e && "" !== e ? "number" == typeof e ? [e >> 16, 255 & e >> 8, 255 & e] : ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), oe[e] ? oe[e] : "#" === e.charAt(0) ? (4 === e.length && (t = e.charAt(1), n = e.charAt(2), i = e.charAt(3), e = "#" + t + t + n + n + i + i), e = parseInt(e.substr(1), 16), [e >> 16, 255 & e >> 8, 255 & e]) : "hsl" === e.substr(0, 3) ? (e = e.match(g), s = Number(e[0]) % 360 / 360, r = Number(e[1]) / 100, a = Number(e[2]) / 100, n = .5 >= a ? a * (r + 1) : a + r - a * r, t = 2 * a - n, e.length > 3 && (e[3] = Number(e[3])), e[0] = le(s + 1 / 3, t, n), e[1] = le(s, t, n), e[2] = le(s - 1 / 3, t, n), e) : (e = e.match(g) || oe.transparent, e[0] = Number(e[0]), e[1] = Number(e[1]), e[2] = Number(e[2]), e.length > 3 && (e[3] = Number(e[3])), e)) : oe.black
                },
                ue = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
            for (d in oe) ue += "|" + d + "\\b";
            ue = RegExp(ue + ")", "gi");
            var ce = function(e, t, n, i) {
                    if (null == e) return function(e) {
                        return e
                    };
                    var s, r = t ? (e.match(ue) || [""])[0] : "",
                        a = e.split(r).join("").match(_) || [],
                        o = e.substr(0, e.indexOf(a[0])),
                        l = ")" === e.charAt(e.length - 1) ? ")" : "",
                        d = -1 !== e.indexOf(" ") ? " " : ",",
                        u = a.length,
                        c = u > 0 ? a[0].replace(g, "") : "";
                    return u ? s = t ? function(e) {
                        var t, h, p, f;
                        if ("number" == typeof e) e += c;
                        else if (i && k.test(e)) {
                            for (f = e.replace(k, "|").split("|"), p = 0; f.length > p; p++) f[p] = s(f[p]);
                            return f.join(",")
                        }
                        if (t = (e.match(ue) || [r])[0], h = e.split(t).join("").match(_) || [], p = h.length, u > p--)
                            for (; u > ++p;) h[p] = n ? h[0 | (p - 1) / 2] : a[p];
                        return o + h.join(d) + d + t + l + (-1 !== e.indexOf("inset") ? " inset" : "")
                    } : function(e) {
                        var t, r, h;
                        if ("number" == typeof e) e += c;
                        else if (i && k.test(e)) {
                            for (r = e.replace(k, "|").split("|"), h = 0; r.length > h; h++) r[h] = s(r[h]);
                            return r.join(",")
                        }
                        if (t = e.match(_) || [], h = t.length, u > h--)
                            for (; u > ++h;) t[h] = n ? t[0 | (h - 1) / 2] : a[h];
                        return o + t.join(d) + l
                    } : function(e) {
                        return e
                    }
                },
                he = function(e) {
                    return e = e.split(","),
                        function(t, n, i, s, r, a, o) {
                            var l, d = (n + "").split(" ");
                            for (o = {}, l = 0; 4 > l; l++) o[e[l]] = d[l] = d[l] || d[(l - 1) / 2 >> 0];
                            return s.parse(t, o, r, a)
                        }
                },
                pe = (j._setPluginRatio = function(e) {
                    this.plugin.setRatio(e);
                    for (var t, n, i, s, r = this.data, a = r.proxy, o = r.firstMPT, l = 1e-6; o;) t = a[o.v], o.r ? t = Math.round(t) : l > t && t > -l && (t = 0), o.t[o.p] = t, o = o._next;
                    if (r.autoRotate && (r.autoRotate.rotation = a.rotation), 1 === e)
                        for (o = r.firstMPT; o;) {
                            if (n = o.t, n.type) {
                                if (1 === n.type) {
                                    for (s = n.xs0 + n.s + n.xs1, i = 1; n.l > i; i++) s += n["xn" + i] + n["xs" + (i + 1)];
                                    n.e = s
                                }
                            } else n.e = n.s + n.xs0;
                            o = o._next
                        }
                }, function(e, t, n, i, s) {
                    this.t = e, this.p = t, this.v = n, this.r = s, i && (i._prev = this, this._next = i)
                }),
                fe = (j._parseToProxy = function(e, t, n, i, s, r) {
                    var a, o, l, d, u, c = i,
                        h = {},
                        p = {},
                        f = n._transform,
                        m = D;
                    for (n._transform = null, D = t, i = u = n.parse(e, t, i, s), D = m, r && (n._transform = f, c && (c._prev = null, c._prev && (c._prev._next = null))); i && i !== c;) {
                        if (1 >= i.type && (o = i.p, p[o] = i.s + i.c, h[o] = i.s, r || (d = new pe(i, "s", o, d, i.r), i.c = 0), 1 === i.type))
                            for (a = i.l; --a > 0;) l = "xn" + a, o = i.p + "_" + l, p[o] = i.data[l], h[o] = i[l], r || (d = new pe(i, l, o, d, i.rxp[l]));
                        i = i._next
                    }
                    return {
                        proxy: h,
                        end: p,
                        firstMPT: d,
                        pt: u
                    }
                }, j.CSSPropTween = function(e, t, i, s, a, o, l, d, u, c, h) {
                    this.t = e, this.p = t, this.s = i, this.c = s, this.n = l || t, e instanceof fe || r.push(this.n), this.r = d, this.type = o || 0, u && (this.pr = u, n = !0), this.b = void 0 === c ? i : c, this.e = void 0 === h ? i + s : h, a && (this._next = a, a._prev = this)
                }),
                me = function(e, t, n, i, s, r) {
                    var a = new fe(e, t, n, i - n, s, -1, r);
                    return a.b = n, a.e = a.xs0 = i, a
                },
                ge = a.parseComplex = function(e, t, n, i, s, r, a, o, l, d) {
                    n = n || r || "", a = new fe(e, t, 0, 0, a, d ? 2 : 1, null, !1, o, n, i), i += "";
                    var c, h, p, f, m, _, y, b, C, w, x, T, S = n.split(", ").join(",").split(" "),
                        L = i.split(", ").join(",").split(" "),
                        A = S.length,
                        I = u !== !1;
                    for ((-1 !== i.indexOf(",") || -1 !== n.indexOf(",")) && (S = S.join(" ").replace(k, ", ").split(" "), L = L.join(" ").replace(k, ", ").split(" "), A = S.length), A !== L.length && (S = (r || "").split(" "), A = S.length), a.plugin = l, a.setRatio = d, c = 0; A > c; c++)
                        if (f = S[c], m = L[c], b = parseFloat(f), b || 0 === b) a.appendXtra("", b, se(m, b), m.replace(v, ""), I && -1 !== m.indexOf("px"), !0);
                        else if (s && ("#" === f.charAt(0) || oe[f] || E.test(f))) T = "," === m.charAt(m.length - 1) ? ")," : ")", f = de(f), m = de(m), C = f.length + m.length > 6, C && !q && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(L[c]).join("transparent")) : (q || (C = !1), a.appendXtra(C ? "rgba(" : "rgb(", f[0], m[0] - f[0], ",", !0, !0).appendXtra("", f[1], m[1] - f[1], ",", !0).appendXtra("", f[2], m[2] - f[2], C ? "," : T, !0), C && (f = 4 > f.length ? 1 : f[3], a.appendXtra("", f, (4 > m.length ? 1 : m[3]) - f, T, !1)));
                    else if (_ = f.match(g)) {
                        if (y = m.match(v), !y || y.length !== _.length) return a;
                        for (p = 0, h = 0; _.length > h; h++) x = _[h], w = f.indexOf(x, p), a.appendXtra(f.substr(p, w - p), Number(x), se(y[h], x), "", I && "px" === f.substr(w + x.length, 2), 0 === h), p = w + x.length;
                        a["xs" + a.l] += f.substr(p)
                    } else a["xs" + a.l] += a.l ? " " + f : f;
                    if (-1 !== i.indexOf("=") && a.data) {
                        for (T = a.xs0 + a.data.s, c = 1; a.l > c; c++) T += a["xs" + c] + a.data["xn" + c];
                        a.e = T + a["xs" + c]
                    }
                    return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                },
                ve = 9;
            for (d = fe.prototype, d.l = d.pr = 0; --ve > 0;) d["xn" + ve] = 0, d["xs" + ve] = "";
            d.xs0 = "", d._next = d._prev = d.xfirst = d.data = d.plugin = d.setRatio = d.rxp = null, d.appendXtra = function(e, t, n, i, s, r) {
                var a = this,
                    o = a.l;
                return a["xs" + o] += r && o ? " " + e : e || "", n || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = i || "", o > 0 ? (a.data["xn" + o] = t + n, a.rxp["xn" + o] = s, a["xn" + o] = t, a.plugin || (a.xfirst = new fe(a, "xn" + o, t, n, a.xfirst || a, 0, a.n, s, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                    s: t + n
                }, a.rxp = {}, a.s = t, a.c = n, a.r = s, a)) : (a["xs" + o] += t + (i || ""), a)
            };
            var _e = function(e, t) {
                    t = t || {}, this.p = t.prefix ? V(e) || e : e, l[e] = l[this.p] = this, this.format = t.formatter || ce(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                },
                ye = j._registerComplexSpecialProp = function(e, t, n) {
                    "object" != typeof t && (t = {
                        parser: n
                    });
                    var i, s, r = e.split(","),
                        a = t.defaultValue;
                    for (n = n || [a], i = 0; r.length > i; i++) t.prefix = 0 === i && t.prefix, t.defaultValue = n[i] || a, s = new _e(r[i], t)
                },
                be = function(e) {
                    if (!l[e]) {
                        var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                        ye(e, {
                            parser: function(e, n, i, s, r, a, d) {
                                var u = o.com.greensock.plugins[t];
                                return u ? (u._cssRegister(), l[i].parse(e, n, i, s, r, a, d)) : (U("Error: " + t + " js file not loaded."), r)
                            }
                        })
                    }
                };
            d = _e.prototype, d.parseComplex = function(e, t, n, i, s, r) {
                var a, o, l, d, u, c, h = this.keyword;
                if (this.multi && (k.test(n) || k.test(t) ? (o = t.replace(k, "|").split("|"), l = n.replace(k, "|").split("|")) : h && (o = [t], l = [n])), l) {
                    for (d = l.length > o.length ? l.length : o.length, a = 0; d > a; a++) t = o[a] = o[a] || this.dflt, n = l[a] = l[a] || this.dflt, h && (u = t.indexOf(h), c = n.indexOf(h), u !== c && (-1 === c ? o[a] = o[a].split(h).join("") : -1 === u && (o[a] += " " + h)));
                    t = o.join(", "), n = l.join(", ")
                }
                return ge(e, this.p, t, n, this.clrs, this.dflt, i, this.pr, s, r)
            }, d.parse = function(e, t, n, i, r, a) {
                return this.parseComplex(e.style, this.format(K(e, this.p, s, !1, this.dflt)), this.format(t), r, a)
            }, a.registerSpecialProp = function(e, t, n) {
                ye(e, {
                    parser: function(e, i, s, r, a, o) {
                        var l = new fe(e, s, 0, 0, a, 2, s, !1, n);
                        return l.plugin = o, l.setRatio = t(e, i, r._tween, s), l
                    },
                    priority: n
                })
            }, a.useSVGTransformAttr = h || p;
            var Ce, we = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                xe = V("transform"),
                Ee = X + "transform",
                Te = V("transformOrigin"),
                Se = null !== V("perspective"),
                Le = j.Transform = function() {
                    this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Se ? a.defaultForce3D || "auto" : !1
                },
                Ae = window.SVGElement,
                Ie = function(e, t, n) {
                    var i, s = M.createElementNS("http://www.w3.org/2000/svg", e),
                        r = /([a-z])([A-Z])/g;
                    for (i in n) s.setAttributeNS(null, i.replace(r, "$1-$2").toLowerCase(), n[i]);
                    return t.appendChild(s), s
                },
                Pe = M.documentElement,
                Oe = function() {
                    var e, t, n, i = m || /Android/i.test(z) && !window.chrome;
                    return M.createElementNS && !i && (e = Ie("svg", Pe), t = Ie("rect", e, {
                        width: 100,
                        height: 50,
                        x: 100
                    }), n = t.getBoundingClientRect().width, t.style[Te] = "50% 50%", t.style[xe] = "scaleX(0.5)", i = n === t.getBoundingClientRect().width && !(p && Se), Pe.removeChild(e)), i
                }(),
                ke = function(e, t, n, i, s) {
                    var r, o, l, d, u, c, h, p, f, m, g, v, _, y, b = e._gsTransform,
                        C = De(e, !0);
                    b && (_ = b.xOrigin, y = b.yOrigin), (!i || 2 > (r = i.split(" ")).length) && (h = e.getBBox(), t = ie(t).split(" "), r = [(-1 !== t[0].indexOf("%") ? parseFloat(t[0]) / 100 * h.width : parseFloat(t[0])) + h.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * h.height : parseFloat(t[1])) + h.y]), n.xOrigin = d = parseFloat(r[0]), n.yOrigin = u = parseFloat(r[1]), i && C !== Re && (c = C[0], h = C[1], p = C[2], f = C[3], m = C[4], g = C[5], v = c * f - h * p, o = d * (f / v) + u * (-p / v) + (p * g - f * m) / v, l = d * (-h / v) + u * (c / v) - (c * g - h * m) / v, d = n.xOrigin = r[0] = o, u = n.yOrigin = r[1] = l), b && (s || s !== !1 && a.defaultSmoothOrigin !== !1 ? (o = d - _, l = u - y, b.xOffset += o * C[0] + l * C[2] - o, b.yOffset += o * C[1] + l * C[3] - l) : b.xOffset = b.yOffset = 0), e.setAttribute("data-svg-origin", r.join(" "))
                },
                Ne = function(e) {
                    return !!(Ae && "function" == typeof e.getBBox && e.getCTM && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM))
                },
                Re = [1, 0, 0, 1, 0, 0],
                De = function(e, t) {
                    var n, i, s, r, a, o = e._gsTransform || new Le,
                        l = 1e5;
                    if (xe ? i = K(e, Ee, null, !0) : e.currentStyle && (i = e.currentStyle.filter.match(P), i = i && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, (o.svg || e.getBBox && Ne(e)) && (n && -1 !== (e.style[xe] + "").indexOf("matrix") && (i = e.style[xe], n = 0), s = e.getAttribute("transform"), n && s && (-1 !== s.indexOf("matrix") ? (i = s, n = 0) : -1 !== s.indexOf("translate") && (i = "matrix(1,0,0,1," + s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", n = 0))), n) return Re;
                    for (s = (i || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], ve = s.length; --ve > -1;) r = Number(s[ve]), s[ve] = (a = r - (r |= 0)) ? (0 | a * l + (0 > a ? -.5 : .5)) / l + r : r;
                    return t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
                },
                Me = j.getTransform = function(e, n, i, r) {
                    if (e._gsTransform && i && !r) return e._gsTransform;
                    var o, l, d, u, c, h, p = i ? e._gsTransform || new Le : new Le,
                        f = 0 > p.scaleX,
                        m = 2e-5,
                        g = 1e5,
                        v = Se ? parseFloat(K(e, Te, n, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
                        _ = parseFloat(a.defaultTransformPerspective) || 0;
                    if (p.svg = !(!e.getBBox || !Ne(e)), p.svg && (ke(e, K(e, Te, s, !1, "50% 50%") + "", p, e.getAttribute("data-svg-origin")), Ce = a.useSVGTransformAttr || Oe), o = De(e), o !== Re) {
                        if (16 === o.length) {
                            var y, b, C, w, x, E = o[0],
                                T = o[1],
                                S = o[2],
                                L = o[3],
                                A = o[4],
                                I = o[5],
                                P = o[6],
                                O = o[7],
                                k = o[8],
                                N = o[9],
                                D = o[10],
                                M = o[12],
                                H = o[13],
                                F = o[14],
                                B = o[11],
                                j = Math.atan2(P, D);
                            p.zOrigin && (F = -p.zOrigin, M = k * F - o[12], H = N * F - o[13], F = D * F + p.zOrigin - o[14]), p.rotationX = j * R, j && (w = Math.cos(-j), x = Math.sin(-j), y = A * w + k * x, b = I * w + N * x, C = P * w + D * x, k = A * -x + k * w, N = I * -x + N * w, D = P * -x + D * w, B = O * -x + B * w, A = y, I = b, P = C), j = Math.atan2(k, D), p.rotationY = j * R, j && (w = Math.cos(-j), x = Math.sin(-j), y = E * w - k * x, b = T * w - N * x, C = S * w - D * x, N = T * x + N * w, D = S * x + D * w, B = L * x + B * w, E = y, T = b, S = C), j = Math.atan2(T, E), p.rotation = j * R, j && (w = Math.cos(-j), x = Math.sin(-j), E = E * w + A * x, b = T * w + I * x, I = T * -x + I * w, P = S * -x + P * w, T = b), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY += 180), p.scaleX = (0 | Math.sqrt(E * E + T * T) * g + .5) / g, p.scaleY = (0 | Math.sqrt(I * I + N * N) * g + .5) / g, p.scaleZ = (0 | Math.sqrt(P * P + D * D) * g + .5) / g, p.skewX = 0, p.perspective = B ? 1 / (0 > B ? -B : B) : 0, p.x = M, p.y = H, p.z = F, p.svg && (p.x -= p.xOrigin - (p.xOrigin * E - p.yOrigin * A), p.y -= p.yOrigin - (p.yOrigin * T - p.xOrigin * I))
                        } else if (!(Se && !r && o.length && p.x === o[4] && p.y === o[5] && (p.rotationX || p.rotationY) || void 0 !== p.x && "none" === K(e, "display", n))) {
                            var z = o.length >= 6,
                                q = z ? o[0] : 1,
                                W = o[1] || 0,
                                U = o[2] || 0,
                                X = z ? o[3] : 1;
                            p.x = o[4] || 0, p.y = o[5] || 0, d = Math.sqrt(q * q + W * W), u = Math.sqrt(X * X + U * U), c = q || W ? Math.atan2(W, q) * R : p.rotation || 0, h = U || X ? Math.atan2(U, X) * R + c : p.skewX || 0, Math.abs(h) > 90 && 270 > Math.abs(h) && (f ? (d *= -1, h += 0 >= c ? 180 : -180, c += 0 >= c ? 180 : -180) : (u *= -1, h += 0 >= h ? 180 : -180)), p.scaleX = d, p.scaleY = u, p.rotation = c, p.skewX = h, Se && (p.rotationX = p.rotationY = p.z = 0, p.perspective = _, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * q + p.yOrigin * U), p.y -= p.yOrigin - (p.xOrigin * W + p.yOrigin * X))
                        }
                        p.zOrigin = v;
                        for (l in p) m > p[l] && p[l] > -m && (p[l] = 0)
                    }
                    return i && (e._gsTransform = p, p.svg && (Ce && e.style[xe] ? t.delayedCall(.001, function() {
                        je(e.style, xe)
                    }) : !Ce && e.getAttribute("transform") && t.delayedCall(.001, function() {
                        e.removeAttribute("transform")
                    }))), p
                },
                He = function(e) {
                    var t, n, i = this.data,
                        s = -i.rotation * N,
                        r = s + i.skewX * N,
                        a = 1e5,
                        o = (0 | Math.cos(s) * i.scaleX * a) / a,
                        l = (0 | Math.sin(s) * i.scaleX * a) / a,
                        d = (0 | Math.sin(r) * -i.scaleY * a) / a,
                        u = (0 | Math.cos(r) * i.scaleY * a) / a,
                        c = this.t.style,
                        h = this.t.currentStyle;
                    if (h) {
                        n = l, l = -d, d = -n, t = h.filter, c.filter = "";
                        var p, f, g = this.t.offsetWidth,
                            v = this.t.offsetHeight,
                            _ = "absolute" !== h.position,
                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + d + ", M22=" + u,
                            w = i.x + g * i.xPercent / 100,
                            x = i.y + v * i.yPercent / 100;
                        if (null != i.ox && (p = (i.oxp ? .01 * g * i.ox : i.ox) - g / 2, f = (i.oyp ? .01 * v * i.oy : i.oy) - v / 2, w += p - (p * o + f * l), x += f - (p * d + f * u)), _ ? (p = g / 2, f = v / 2, y += ", Dx=" + (p - (p * o + f * l) + w) + ", Dy=" + (f - (p * d + f * u) + x) + ")") : y += ", sizingMethod='auto expand')", c.filter = -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? t.replace(O, y) : y + " " + t, (0 === e || 1 === e) && 1 === o && 0 === l && 0 === d && 1 === u && (_ && -1 === y.indexOf("Dx=0, Dy=0") || C.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && c.removeAttribute("filter")), !_) {
                            var E, T, S, L = 8 > m ? 1 : -1;
                            for (p = i.ieOffsetX || 0, f = i.ieOffsetY || 0, i.ieOffsetX = Math.round((g - ((0 > o ? -o : o) * g + (0 > l ? -l : l) * v)) / 2 + w), i.ieOffsetY = Math.round((v - ((0 > u ? -u : u) * v + (0 > d ? -d : d) * g)) / 2 + x), ve = 0; 4 > ve; ve++) T = te[ve], E = h[T], n = -1 !== E.indexOf("px") ? parseFloat(E) : Q(this.t, T, parseFloat(E), E.replace(b, "")) || 0, S = n !== i[T] ? 2 > ve ? -i.ieOffsetX : -i.ieOffsetY : 2 > ve ? p - i.ieOffsetX : f - i.ieOffsetY, c[T] = (i[T] = Math.round(n - S * (0 === ve || 2 === ve ? 1 : L))) + "px"
                        }
                    }
                },
                Fe = j.set3DTransformRatio = j.setTransformRatio = function(e) {
                    var t, n, i, s, r, a, o, l, d, u, c, h, f, m, g, v, _, y, b, C, w, x, E, T = this.data,
                        S = this.t.style,
                        L = T.rotation,
                        A = T.rotationX,
                        I = T.rotationY,
                        P = T.scaleX,
                        O = T.scaleY,
                        k = T.scaleZ,
                        R = T.x,
                        D = T.y,
                        M = T.z,
                        H = T.svg,
                        F = T.perspective,
                        B = T.force3D;
                    if (!((1 !== e && 0 !== e || "auto" !== B || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && B || M || F || I || A) || Ce && H || !Se) return void(L || T.skewX || H ? (L *= N, x = T.skewX * N, E = 1e5, t = Math.cos(L) * P, s = Math.sin(L) * P, n = Math.sin(L - x) * -O, r = Math.cos(L - x) * O, x && "simple" === T.skewType && (_ = Math.tan(x), _ = Math.sqrt(1 + _ * _), n *= _, r *= _, T.skewY && (t *= _, s *= _)), H && (R += T.xOrigin - (T.xOrigin * t + T.yOrigin * n) + T.xOffset, D += T.yOrigin - (T.xOrigin * s + T.yOrigin * r) + T.yOffset, Ce && (T.xPercent || T.yPercent) && (m = this.t.getBBox(), R += .01 * T.xPercent * m.width, D += .01 * T.yPercent * m.height), m = 1e-6, m > R && R > -m && (R = 0), m > D && D > -m && (D = 0)), b = (0 | t * E) / E + "," + (0 | s * E) / E + "," + (0 | n * E) / E + "," + (0 | r * E) / E + "," + R + "," + D + ")", H && Ce ? this.t.setAttribute("transform", "matrix(" + b) : S[xe] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix(" : "matrix(") + b) : S[xe] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix(" : "matrix(") + P + ",0,0," + O + "," + R + "," + D + ")");
                    if (p && (m = 1e-4, m > P && P > -m && (P = k = 2e-5), m > O && O > -m && (O = k = 2e-5), !F || T.z || T.rotationX || T.rotationY || (F = 0)), L || T.skewX) L *= N, g = t = Math.cos(L), v = s = Math.sin(L), T.skewX && (L -= T.skewX * N, g = Math.cos(L), v = Math.sin(L), "simple" === T.skewType && (_ = Math.tan(T.skewX * N), _ = Math.sqrt(1 + _ * _), g *= _, v *= _, T.skewY && (t *= _, s *= _))), n = -v, r = g;
                    else {
                        if (!(I || A || 1 !== k || F || H)) return void(S[xe] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) translate3d(" : "translate3d(") + R + "px," + D + "px," + M + "px)" + (1 !== P || 1 !== O ? " scale(" + P + "," + O + ")" : ""));
                        t = r = 1, n = s = 0
                    }
                    d = 1, i = a = o = l = u = c = 0, h = F ? -1 / F : 0, f = T.zOrigin, m = 1e-6, C = ",", w = "0", L = I * N, L && (g = Math.cos(L), v = Math.sin(L), o = -v, u = h * -v, i = t * v, a = s * v, d = g, h *= g, t *= g, s *= g), L = A * N, L && (g = Math.cos(L), v = Math.sin(L), _ = n * g + i * v, y = r * g + a * v, l = d * v, c = h * v, i = n * -v + i * g, a = r * -v + a * g, d *= g, h *= g, n = _, r = y), 1 !== k && (i *= k, a *= k, d *= k, h *= k), 1 !== O && (n *= O, r *= O, l *= O, c *= O), 1 !== P && (t *= P, s *= P, o *= P, u *= P), (f || H) && (f && (R += i * -f, D += a * -f, M += d * -f + f), H && (R += T.xOrigin - (T.xOrigin * t + T.yOrigin * n) + T.xOffset, D += T.yOrigin - (T.xOrigin * s + T.yOrigin * r) + T.yOffset), m > R && R > -m && (R = w), m > D && D > -m && (D = w), m > M && M > -m && (M = 0)), b = T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix3d(" : "matrix3d(", b += (m > t && t > -m ? w : t) + C + (m > s && s > -m ? w : s) + C + (m > o && o > -m ? w : o), b += C + (m > u && u > -m ? w : u) + C + (m > n && n > -m ? w : n) + C + (m > r && r > -m ? w : r), A || I ? (b += C + (m > l && l > -m ? w : l) + C + (m > c && c > -m ? w : c) + C + (m > i && i > -m ? w : i), b += C + (m > a && a > -m ? w : a) + C + (m > d && d > -m ? w : d) + C + (m > h && h > -m ? w : h) + C) : b += ",0,0,0,0,1,0,", b += R + C + D + C + M + C + (F ? 1 + -M / F : 1) + ")", S[xe] = b
                };
            d = Le.prototype, d.x = d.y = d.z = d.skewX = d.skewY = d.rotation = d.rotationX = d.rotationY = d.zOrigin = d.xPercent = d.yPercent = d.xOffset = d.yOffset = 0, d.scaleX = d.scaleY = d.scaleZ = 1, ye("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(e, t, n, i, r, o, l) {
                    if (i._lastParsedTransform === l) return r;
                    i._lastParsedTransform = l;
                    var d, u, c, h, p, f, m, g, v, _ = e._gsTransform,
                        y = i._transform = Me(e, s, !0, l.parseTransform),
                        b = e.style,
                        C = 1e-6,
                        w = we.length,
                        x = l,
                        E = {},
                        T = "transformOrigin";
                    if ("string" == typeof x.transform && xe) c = F.style, c[xe] = x.transform, c.display = "block", c.position = "absolute", M.body.appendChild(F), d = Me(F, null, !1), M.body.removeChild(F), null != x.xPercent && (d.xPercent = re(x.xPercent, y.xPercent)), null != x.yPercent && (d.yPercent = re(x.yPercent, y.yPercent));
                    else if ("object" == typeof x) {
                        if (d = {
                                scaleX: re(null != x.scaleX ? x.scaleX : x.scale, y.scaleX),
                                scaleY: re(null != x.scaleY ? x.scaleY : x.scale, y.scaleY),
                                scaleZ: re(x.scaleZ, y.scaleZ),
                                x: re(x.x, y.x),
                                y: re(x.y, y.y),
                                z: re(x.z, y.z),
                                xPercent: re(x.xPercent, y.xPercent),
                                yPercent: re(x.yPercent, y.yPercent),
                                perspective: re(x.transformPerspective, y.perspective)
                            }, m = x.directionalRotation, null != m)
                            if ("object" == typeof m)
                                for (c in m) x[c] = m[c];
                            else x.rotation = m;
                            "string" == typeof x.x && -1 !== x.x.indexOf("%") && (d.x = 0, d.xPercent = re(x.x, y.xPercent)), "string" == typeof x.y && -1 !== x.y.indexOf("%") && (d.y = 0, d.yPercent = re(x.y, y.yPercent)), d.rotation = ae("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : "rotationZ" in x ? x.rotationZ : y.rotation, y.rotation, "rotation", E), Se && (d.rotationX = ae("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : y.rotationX || 0, y.rotationX, "rotationX", E), d.rotationY = ae("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : y.rotationY || 0, y.rotationY, "rotationY", E)), d.skewX = null == x.skewX ? y.skewX : ae(x.skewX, y.skewX), d.skewY = null == x.skewY ? y.skewY : ae(x.skewY, y.skewY), (u = d.skewY - y.skewY) && (d.skewX += u, d.rotation += u)
                    }
                    for (Se && null != x.force3D && (y.force3D = x.force3D, f = !0), y.skewType = x.skewType || y.skewType || a.defaultSkewType, p = y.force3D || y.z || y.rotationX || y.rotationY || d.z || d.rotationX || d.rotationY || d.perspective, p || null == x.scale || (d.scaleZ = 1); --w > -1;) n = we[w], h = d[n] - y[n], (h > C || -C > h || null != x[n] || null != D[n]) && (f = !0, r = new fe(y, n, y[n], h, r), n in E && (r.e = E[n]), r.xs0 = 0, r.plugin = o, i._overwriteProps.push(r.n));
                    return h = x.transformOrigin, y.svg && (h || x.svgOrigin) && (g = y.xOffset, v = y.yOffset, ke(e, ie(h), d, x.svgOrigin, x.smoothOrigin), r = me(y, "xOrigin", (_ ? y : d).xOrigin, d.xOrigin, r, T), r = me(y, "yOrigin", (_ ? y : d).yOrigin, d.yOrigin, r, T), (g !== y.xOffset || v !== y.yOffset) && (r = me(y, "xOffset", _ ? g : y.xOffset, y.xOffset, r, T), r = me(y, "yOffset", _ ? v : y.yOffset, y.yOffset, r, T)), h = Ce ? null : "0px 0px"), (h || Se && p && y.zOrigin) && (xe ? (f = !0, n = Te, h = (h || K(e, n, s, !1, "50% 50%")) + "", r = new fe(b, n, 0, 0, r, -1, T), r.b = b[n], r.plugin = o, Se ? (c = y.zOrigin, h = h.split(" "), y.zOrigin = (h.length > 2 && (0 === c || "0px" !== h[2]) ? parseFloat(h[2]) : c) || 0, r.xs0 = r.e = h[0] + " " + (h[1] || "50%") + " 0px", r = new fe(y, "zOrigin", 0, 0, r, -1, r.n), r.b = c, r.xs0 = r.e = y.zOrigin) : r.xs0 = r.e = h) : ie(h + "", y)), f && (i._transformType = y.svg && Ce || !p && 3 !== this._transformType ? 2 : 3), r
                },
                prefix: !0
            }), ye("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), ye("borderRadius", {
                defaultValue: "0px",
                parser: function(e, t, n, r, a) {
                    t = this.format(t);
                    var o, l, d, u, c, h, p, f, m, g, v, _, y, b, C, w, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        E = e.style;
                    for (m = parseFloat(e.offsetWidth), g = parseFloat(e.offsetHeight), o = t.split(" "), l = 0; x.length > l; l++) this.p.indexOf("border") && (x[l] = V(x[l])), c = u = K(e, x[l], s, !1, "0px"), -1 !== c.indexOf(" ") && (u = c.split(" "), c = u[0], u = u[1]), h = d = o[l], p = parseFloat(c), _ = c.substr((p + "").length), y = "=" === h.charAt(1), y ? (f = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), f *= parseFloat(h), v = h.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(h), v = h.substr((f + "").length)), "" === v && (v = i[n] || _), v !== _ && (b = Q(e, "borderLeft", p, _), C = Q(e, "borderTop", p, _), "%" === v ? (c = 100 * (b / m) + "%", u = 100 * (C / g) + "%") : "em" === v ? (w = Q(e, "borderLeft", 1, "em"), c = b / w + "em", u = C / w + "em") : (c = b + "px", u = C + "px"), y && (h = parseFloat(c) + f + v, d = parseFloat(u) + f + v)), a = ge(E, x[l], c + " " + u, h + " " + d, !1, "0px", a);
                    return a
                },
                prefix: !0,
                formatter: ce("0px 0px 0px 0px", !1, !0)
            }), ye("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(e, t, n, i, r, a) {
                    var o, l, d, u, c, h, p = "background-position",
                        f = s || Y(e, null),
                        g = this.format((f ? m ? f.getPropertyValue(p + "-x") + " " + f.getPropertyValue(p + "-y") : f.getPropertyValue(p) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                        v = this.format(t);
                    if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && (h = K(e, "backgroundImage").replace(L, ""), h && "none" !== h)) {
                        for (o = g.split(" "), l = v.split(" "), B.setAttribute("src", h), d = 2; --d > -1;) g = o[d], u = -1 !== g.indexOf("%"), u !== (-1 !== l[d].indexOf("%")) && (c = 0 === d ? e.offsetWidth - B.width : e.offsetHeight - B.height, o[d] = u ? parseFloat(g) / 100 * c + "px" : 100 * (parseFloat(g) / c) + "%");
                        g = o.join(" ")
                    }
                    return this.parseComplex(e.style, g, v, r, a)
                },
                formatter: ie
            }), ye("backgroundSize", {
                defaultValue: "0 0",
                formatter: ie
            }), ye("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), ye("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), ye("transformStyle", {
                prefix: !0
            }), ye("backfaceVisibility", {
                prefix: !0
            }), ye("userSelect", {
                prefix: !0
            }), ye("margin", {
                parser: he("marginTop,marginRight,marginBottom,marginLeft")
            }), ye("padding", {
                parser: he("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), ye("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(e, t, n, i, r, a) {
                    var o, l, d;
                    return 9 > m ? (l = e.currentStyle, d = 8 > m ? " " : ",", o = "rect(" + l.clipTop + d + l.clipRight + d + l.clipBottom + d + l.clipLeft + ")", t = this.format(t).split(",").join(d)) : (o = this.format(K(e, this.p, s, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, o, t, r, a)
                }
            }), ye("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), ye("autoRound,strictUnits", {
                parser: function(e, t, n, i, s) {
                    return s
                }
            }), ye("border", {
                defaultValue: "0px solid #000",
                parser: function(e, t, n, i, r, a) {
                    return this.parseComplex(e.style, this.format(K(e, "borderTopWidth", s, !1, "0px") + " " + K(e, "borderTopStyle", s, !1, "solid") + " " + K(e, "borderTopColor", s, !1, "#000")), this.format(t), r, a)
                },
                color: !0,
                formatter: function(e) {
                    var t = e.split(" ");
                    return t[0] + " " + (t[1] || "solid") + " " + (e.match(ue) || ["#000"])[0]
                }
            }), ye("borderWidth", {
                parser: he("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), ye("float,cssFloat,styleFloat", {
                parser: function(e, t, n, i, s) {
                    var r = e.style,
                        a = "cssFloat" in r ? "cssFloat" : "styleFloat";
                    return new fe(r, a, 0, 0, s, -1, n, !1, 0, r[a], t)
                }
            });
            var Be = function(e) {
                var t, n = this.t,
                    i = n.filter || K(this.data, "filter") || "",
                    s = 0 | this.s + this.c * e;
                100 === s && (-1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (n.removeAttribute("filter"), t = !K(this.data, "filter")) : (n.filter = i.replace(x, ""), t = !0)), t || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + s + ")"), -1 === i.indexOf("pacity") ? 0 === s && this.xn1 || (n.filter = i + " alpha(opacity=" + s + ")") : n.filter = i.replace(C, "opacity=" + s))
            };
            ye("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(e, t, n, i, r, a) {
                    var o = parseFloat(K(e, "opacity", s, !1, "1")),
                        l = e.style,
                        d = "autoAlpha" === n;
                    return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + o), d && 1 === o && "hidden" === K(e, "visibility", s) && 0 !== t && (o = 0), q ? r = new fe(l, "opacity", o, t - o, r) : (r = new fe(l, "opacity", 100 * o, 100 * (t - o), r), r.xn1 = d ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = e, r.plugin = a, r.setRatio = Be), d && (r = new fe(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit"), r.xs0 = "inherit", i._overwriteProps.push(r.n), i._overwriteProps.push(n)), r
                }
            });
            var je = function(e, t) {
                    t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), e.removeProperty(t.replace(T, "-$1").toLowerCase())) : e.removeAttribute(t))
                },
                ze = function(e) {
                    if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                        this.t.setAttribute("class", 0 === e ? this.b : this.e);
                        for (var t = this.data, n = this.t.style; t;) t.v ? n[t.p] = t.v : je(n, t.p), t = t._next;
                        1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            ye("className", {
                parser: function(e, t, i, r, a, o, l) {
                    var d, u, c, h, p, f = e.getAttribute("class") || "",
                        m = e.style.cssText;
                    if (a = r._classNamePT = new fe(e, i, 0, 0, a, 2), a.setRatio = ze, a.pr = -11, n = !0, a.b = f, u = Z(e, s), c = e._gsClassPT) {
                        for (h = {}, p = c.data; p;) h[p.p] = 1, p = p._next;
                        c.setRatio(1)
                    }
                    return e._gsClassPT = a, a.e = "=" !== t.charAt(1) ? t : f.replace(RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", a.e), d = J(e, u, Z(e), l, h), e.setAttribute("class", f), a.data = d.firstMPT, e.style.cssText = m, a = a.xfirst = r.parse(e, d.difs, a, o)
                }
            });
            var qe = function(e) {
                if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var t, n, i, s, r, a = this.t.style,
                        o = l.transform.parse;
                    if ("all" === this.e) a.cssText = "", s = !0;
                    else
                        for (t = this.e.split(" ").join("").split(","), i = t.length; --i > -1;) n = t[i], l[n] && (l[n].parse === o ? s = !0 : n = "transformOrigin" === n ? Te : l[n].p), je(a, n);
                    s && (je(a, xe), r = this.t._gsTransform, r && (r.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                }
            };
            for (ye("clearProps", {
                    parser: function(e, t, i, s, r) {
                        return r = new fe(e, i, 0, 0, r, 2), r.setRatio = qe, r.e = t, r.pr = -10, r.data = s._tween, n = !0, r
                    }
                }), d = "bezier,throwProps,physicsProps,physics2D".split(","), ve = d.length; ve--;) be(d[ve]);
            d = a.prototype, d._firstPT = d._lastParsedTransform = d._transform = null, d._onInitTween = function(e, t, o) {
                if (!e.nodeType) return !1;
                this._target = e, this._tween = o, this._vars = t, u = t.autoRound, n = !1, i = t.suffixMap || a.suffixMap, s = Y(e, ""), r = this._overwriteProps;
                var d, p, m, g, v, _, y, b, C, x = e.style;
                if (c && "" === x.zIndex && (d = K(e, "zIndex", s), ("auto" === d || "" === d) && this._addLazySet(x, "zIndex", 0)), "string" == typeof t && (g = x.cssText, d = Z(e, s), x.cssText = g + ";" + t, d = J(e, d, Z(e)).difs, !q && w.test(t) && (d.opacity = parseFloat(RegExp.$1)), t = d, x.cssText = g), this._firstPT = p = t.className ? l.className.parse(e, t.className, "className", this, null, null, t) : this.parse(e, t, null), this._transformType) {
                    for (C = 3 === this._transformType, xe ? h && (c = !0, "" === x.zIndex && (y = K(e, "zIndex", s), ("auto" === y || "" === y) && this._addLazySet(x, "zIndex", 0)), f && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (C ? "visible" : "hidden"))) : x.zoom = 1, m = p; m && m._next;) m = m._next;
                    b = new fe(e, "transform", 0, 0, null, 2), this._linkCSSP(b, null, m), b.setRatio = xe ? Fe : He, b.data = this._transform || Me(e, s, !0), b.tween = o, b.pr = -1, r.pop()
                }
                if (n) {
                    for (; p;) {
                        for (_ = p._next, m = g; m && m.pr > p.pr;) m = m._next;
                        (p._prev = m ? m._prev : v) ? p._prev._next = p: g = p, (p._next = m) ? m._prev = p : v = p, p = _
                    }
                    this._firstPT = g
                }
                return !0
            }, d.parse = function(e, t, n, r) {
                var a, o, d, c, h, p, f, m, g, v, _ = e.style;
                for (a in t) p = t[a], o = l[a], o ? n = o.parse(e, p, a, this, n, r, t) : (h = K(e, a, s) + "", g = "string" == typeof p, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || g && E.test(p) ? (g || (p = de(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), n = ge(_, a, h, p, !0, "transparent", n, 0, r)) : !g || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (d = parseFloat(h), f = d || 0 === d ? h.substr((d + "").length) : "", ("" === h || "auto" === h) && ("width" === a || "height" === a ? (d = ne(e, a, s), f = "px") : "left" === a || "top" === a ? (d = $(e, a, s), f = "px") : (d = "opacity" !== a ? 0 : 1, f = "")), v = g && "=" === p.charAt(1), v ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), m = p.replace(b, "")) : (c = parseFloat(p), m = g ? p.replace(b, "") : ""), "" === m && (m = a in i ? i[a] : f), p = c || 0 === c ? (v ? c + d : c) + m : t[a], f !== m && "" !== m && (c || 0 === c) && d && (d = Q(e, a, d, f), "%" === m ? (d /= Q(e, a, 100, "%") / 100, t.strictUnits !== !0 && (h = d + "%")) : "em" === m ? d /= Q(e, a, 1, "em") : "px" !== m && (c = Q(e, a, c, m), m = "px"), v && (c || 0 === c) && (p = c + d + m)), v && (c += d), !d && 0 !== d || !c && 0 !== c ? void 0 !== _[a] && (p || "NaN" != p + "" && null != p) ? (n = new fe(_, a, c || d || 0, 0, n, -1, a, !1, 0, h, p), n.xs0 = "none" !== p || "display" !== a && -1 === a.indexOf("Style") ? p : h) : U("invalid " + a + " tween value: " + t[a]) : (n = new fe(_, a, d, c - d, n, 0, a, u !== !1 && ("px" === m || "zIndex" === a), 0, h, p), n.xs0 = m)) : n = ge(_, a, h, p, !0, null, n, 0, r)), r && n && !n.plugin && (n.plugin = r);
                return n
            }, d.setRatio = function(e) {
                var t, n, i, s = this._firstPT,
                    r = 1e-6;
                if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                        for (; s;) {
                            if (t = s.c * e + s.s, s.r ? t = Math.round(t) : r > t && t > -r && (t = 0), s.type)
                                if (1 === s.type)
                                    if (i = s.l, 2 === i) s.t[s.p] = s.xs0 + t + s.xs1 + s.xn1 + s.xs2;
                                    else if (3 === i) s.t[s.p] = s.xs0 + t + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                            else if (4 === i) s.t[s.p] = s.xs0 + t + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                            else if (5 === i) s.t[s.p] = s.xs0 + t + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                            else {
                                for (n = s.xs0 + t + s.xs1, i = 1; s.l > i; i++) n += s["xn" + i] + s["xs" + (i + 1)];
                                s.t[s.p] = n
                            } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(e);
                            else s.t[s.p] = t + s.xs0;
                            s = s._next
                        } else
                            for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(e), s = s._next;
                    else
                        for (; s;) {
                            if (2 !== s.type)
                                if (s.r && -1 !== s.type)
                                    if (t = Math.round(s.s + s.c), s.type) {
                                        if (1 === s.type) {
                                            for (i = s.l, n = s.xs0 + t + s.xs1, i = 1; s.l > i; i++) n += s["xn" + i] + s["xs" + (i + 1)];
                                            s.t[s.p] = n
                                        }
                                    } else s.t[s.p] = t + s.xs0;
                            else s.t[s.p] = s.e;
                            else s.setRatio(e);
                            s = s._next
                        }
            }, d._enableTransforms = function(e) {
                this._transform = this._transform || Me(this._target, s, !0), this._transformType = this._transform.svg && Ce || !e && 3 !== this._transformType ? 2 : 3
            };
            var We = function() {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            d._addLazySet = function(e, t, n) {
                var i = this._firstPT = new fe(e, t, 0, 0, this._firstPT, 2);
                i.e = n, i.setRatio = We, i.data = this
            }, d._linkCSSP = function(e, t, n, i) {
                return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, i = !0), n ? n._next = e : i || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = n), e
            }, d._kill = function(t) {
                var n, i, s, r = t;
                if (t.autoAlpha || t.alpha) {
                    r = {};
                    for (i in t) r[i] = t[i];
                    r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                }
                return t.className && (n = this._classNamePT) && (s = n.xfirst, s && s._prev ? this._linkCSSP(s._prev, n._next, s._prev._prev) : s === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, s._prev), this._classNamePT = null), e.prototype._kill.call(this, r)
            };
            var Ue = function(e, t, n) {
                var i, s, r, a;
                if (e.slice)
                    for (s = e.length; --s > -1;) Ue(e[s], t, n);
                else
                    for (i = e.childNodes, s = i.length; --s > -1;) r = i[s], a = r.type, r.style && (t.push(Z(r)), n && n.push(r)), 1 !== a && 9 !== a && 11 !== a || !r.childNodes.length || Ue(r, t, n)
            };
            return a.cascadeTo = function(e, n, i) {
                var s, r, a, o, l = t.to(e, n, i),
                    d = [l],
                    u = [],
                    c = [],
                    h = [],
                    p = t._internals.reservedProps;
                for (e = l._targets || l.target, Ue(e, u, h), l.render(n, !0, !0), Ue(e, c), l.render(0, !0, !0), l._enabled(!0), s = h.length; --s > -1;)
                    if (r = J(h[s], u[s], c[s]), r.firstMPT) {
                        r = r.difs;
                        for (a in i) p[a] && (r[a] = i[a]);
                        o = {};
                        for (a in r) o[a] = u[s][a];
                        d.push(t.fromTo(h[s], n, o, r))
                    }
                return d
            }, e.activate([a]), a
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[e]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = t())
    }("CSSPlugin");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
! function(e) {
    "use strict";
    var t = e.GreenSockGlobals || e,
        n = function(e) {
            var n, i = e.split("."),
                s = t;
            for (n = 0; i.length > n; n++) s[i[n]] = s = s[i[n]] || {};
            return s
        },
        i = n("com.greensock.utils"),
        s = function(e) {
            var t = e.nodeType,
                n = "";
            if (1 === t || 9 === t || 11 === t) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
            } else if (3 === t || 4 === t) return e.nodeValue;
            return n
        },
        r = document,
        a = r.defaultView ? r.defaultView.getComputedStyle : function() {},
        o = /([A-Z])/g,
        l = function(e, t, n, i) {
            var s;
            return (n = n || a(e, null)) ? (e = n.getPropertyValue(t.replace(o, "-$1").toLowerCase()), s = e || n.length ? e : n[t]) : e.currentStyle && (n = e.currentStyle, s = n[t]), i ? s : parseInt(s, 10) || 0
        },
        d = function(e) {
            return e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]) ? !0 : !1
        },
        u = function(e) {
            var t, n, i, s = [],
                r = e.length;
            for (t = 0; r > t; t++)
                if (n = e[t], d(n))
                    for (i = n.length, i = 0; n.length > i; i++) s.push(n[i]);
                else s.push(n);
            return s
        },
        c = ")eefec303079ad17405c",
        h = /(?:<br>|<br\/>|<br \/>)/gi,
        p = r.all && !r.addEventListener,
        f = "<div style='position:relative;display:inline-block;" + (p ? "*display:inline;*zoom:1;'" : "'"),
        m = function(e) {
            e = e || "";
            var t = -1 !== e.indexOf("++"),
                n = 1;
            return t && (e = e.split("++").join("")),
                function() {
                    return f + (e ? " class='" + e + (t ? n++ : "") + "'>" : ">")
                }
        },
        g = i.SplitText = t.SplitText = function(e, t) {
            if ("string" == typeof e && (e = g.selector(e)), !e) throw "cannot split a null element.";
            this.elements = d(e) ? u(e) : [e], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = t || {}, this.split(t)
        },
        v = function(e, t, n) {
            var i = e.nodeType;
            if (1 === i || 9 === i || 11 === i)
                for (e = e.firstChild; e; e = e.nextSibling) v(e, t, n);
            else(3 === i || 4 === i) && (e.nodeValue = e.nodeValue.split(t).join(n))
        },
        _ = function(e, t) {
            for (var n = t.length; --n > -1;) e.push(t[n])
        },
        y = function(e, t, n, i, o) {
            h.test(e.innerHTML) && (e.innerHTML = e.innerHTML.replace(h, c));
            var d, u, p, f, g, y, b, C, w, x, E, T, S, L, A = s(e),
                I = t.type || t.split || "chars,words,lines",
                P = -1 !== I.indexOf("lines") ? [] : null,
                O = -1 !== I.indexOf("words"),
                k = -1 !== I.indexOf("chars"),
                N = "absolute" === t.position || t.absolute === !0,
                R = N ? "&#173; " : " ",
                D = -999,
                M = a(e),
                H = l(e, "paddingLeft", M),
                F = l(e, "borderBottomWidth", M) + l(e, "borderTopWidth", M),
                B = l(e, "borderLeftWidth", M) + l(e, "borderRightWidth", M),
                j = l(e, "paddingTop", M) + l(e, "paddingBottom", M),
                z = l(e, "paddingLeft", M) + l(e, "paddingRight", M),
                q = l(e, "textAlign", M, !0),
                W = e.clientHeight,
                U = e.clientWidth,
                X = "</div>",
                G = m(t.wordsClass),
                V = m(t.charsClass),
                Y = -1 !== (t.linesClass || "").indexOf("++"),
                K = t.linesClass,
                Q = -1 !== A.indexOf("<"),
                $ = !0,
                Z = [],
                J = [],
                ee = [];
            for (Y && (K = K.split("++").join("")), Q && (A = A.split("<").join("{{LT}}")), d = A.length, f = G(), g = 0; d > g; g++)
                if (b = A.charAt(g), ")" === b && A.substr(g, 20) === c) f += ($ ? X : "") + "<BR/>", $ = !1, g !== d - 20 && A.substr(g + 20, 20) !== c && (f += " " + G(), $ = !0), g += 19;
                else if (" " === b && " " !== A.charAt(g - 1) && g !== d - 1 && A.substr(g - 20, 20) !== c) {
                for (f += $ ? X : "", $ = !1;
                    " " === A.charAt(g + 1);) f += R, g++;
                (")" !== A.charAt(g + 1) || A.substr(g + 1, 20) !== c) && (f += R + G(), $ = !0)
            } else f += k && " " !== b ? V() + b + "</div>" : b;
            for (e.innerHTML = f + ($ ? X : ""), Q && v(e, "{{LT}}", "<"), y = e.getElementsByTagName("*"), d = y.length, C = [], g = 0; d > g; g++) C[g] = y[g];
            if (P || N)
                for (g = 0; d > g; g++) w = C[g], p = w.parentNode === e, (p || N || k && !O) && (x = w.offsetTop, P && p && x !== D && "BR" !== w.nodeName && (u = [], P.push(u), D = x), N && (w._x = w.offsetLeft, w._y = x, w._w = w.offsetWidth, w._h = w.offsetHeight), P && (O !== p && k || (u.push(w), w._x -= H), p && g && (C[g - 1]._wordEnd = !0), "BR" === w.nodeName && w.nextSibling && "BR" === w.nextSibling.nodeName && P.push([])));
            for (g = 0; d > g; g++) w = C[g], p = w.parentNode === e, "BR" !== w.nodeName ? (N && (T = w.style, O || p || (w._x += w.parentNode._x, w._y += w.parentNode._y), T.left = w._x + "px", T.top = w._y + "px", T.position = "absolute", T.display = "block", T.width = w._w + 1 + "px", T.height = w._h + "px"), O ? p && "" !== w.innerHTML ? J.push(w) : k && Z.push(w) : p ? (e.removeChild(w), C.splice(g--, 1), d--) : !p && k && (x = !P && !N && w.nextSibling, e.appendChild(w), x || e.appendChild(r.createTextNode(" ")), Z.push(w))) : P || N ? (e.removeChild(w), C.splice(g--, 1), d--) : O || e.appendChild(w);
            if (P) {
                for (N && (E = r.createElement("div"), e.appendChild(E), S = E.offsetWidth + "px", x = E.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(E)), T = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;) e.removeChild(e.firstChild);
                for (L = !N || !O && !k, g = 0; P.length > g; g++) {
                    for (u = P[g], E = r.createElement("div"), E.style.cssText = "display:block;text-align:" + q + ";position:" + (N ? "absolute;" : "relative;"), K && (E.className = K + (Y ? g + 1 : "")), ee.push(E), d = u.length, y = 0; d > y; y++) "BR" !== u[y].nodeName && (w = u[y], E.appendChild(w), L && (w._wordEnd || O) && E.appendChild(r.createTextNode(" ")), N && (0 === y && (E.style.top = w._y + "px", E.style.left = H + x + "px"), w.style.top = "0px", x && (w.style.left = w._x - x + "px")));
                    0 === d && (E.innerHTML = "&nbsp;"), O || k || (E.innerHTML = s(E).split(String.fromCharCode(160)).join(" ")), N && (E.style.width = S, E.style.height = w._h + "px"), e.appendChild(E)
                }
                e.style.cssText = T
            }
            N && (W > e.clientHeight && (e.style.height = W - j + "px", W > e.clientHeight && (e.style.height = W + F + "px")), U > e.clientWidth && (e.style.width = U - z + "px", U > e.clientWidth && (e.style.width = U + B + "px"))), _(n, Z), _(i, J), _(o, ee)
        },
        b = g.prototype;
    b.split = function(e) {
        this.isSplit && this.revert(), this.vars = e || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var t = this.elements.length; --t > -1;) this._originals[t] = this.elements[t].innerHTML, y(this.elements[t], this.vars, this.chars, this.words, this.lines);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, b.revert = function() {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var e = this._originals.length; --e > -1;) this.elements[e].innerHTML = this._originals[e];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, g.selector = e.$ || e.jQuery || function(t) {
        var n = e.$ || e.jQuery;
        return n ? (g.selector = n, n(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
    }, g.version = "0.3.3"
}(_gsScope),
function(e) {
    "use strict";
    var t = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[e]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (module.exports = t())
}("SplitText");
try {
    window.GreenSockGlobals = null, window._gsQueue = null, window._gsDefine = null, delete window.GreenSockGlobals, delete window._gsQueue, delete window._gsDefine
} catch (e) {}
try {
    window.GreenSockGlobals = oldgs, window._gsQueue = oldgs_queue
} catch (e) {}
if (1 == window.tplogs) try {
        console.groupEnd()
    } catch (e) {}! function(e, t) {
        e.waitForImages = {
            hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
        }, e.expr[":"].uncached = function(t) {
            var n = document.createElement("img");
            return n.src = t.src, e(t).is('img[src!=""]') && !n.complete
        }, e.fn.waitForImages = function(t, n, i) {
            if (e.isPlainObject(arguments[0]) && (n = t.each, i = t.waitForAll, t = t.finished), t = t || e.noop, n = n || e.noop, i = !!i, !e.isFunction(t) || !e.isFunction(n)) throw new TypeError("An invalid callback was supplied.");
            return this.each(function() {
                var s = e(this),
                    r = [];
                if (i) {
                    var a = e.waitForImages.hasImageProperties || [],
                        o = /url\((['"]?)(.*?)\1\)/g;
                    s.find("*").each(function() {
                        var t = e(this);
                        t.is("img:uncached") && r.push({
                            src: t.attr("src"),
                            element: t[0]
                        }), e.each(a, function(e, n) {
                            var i = t.css(n);
                            if (!i) return !0;
                            for (var s; s = o.exec(i);) r.push({
                                src: s[2],
                                element: t[0]
                            })
                        })
                    })
                } else s.find("img:uncached").each(function() {
                    r.push({
                        src: this.src,
                        element: this
                    })
                });
                var l = r.length,
                    d = 0;
                0 == l && t.call(s[0]), e.each(r, function(i, r) {
                    var a = new Image;
                    e(a).bind("load error", function(e) {
                        return d++, n.call(r.element, d, l, "load" == e.type), d == l ? (t.call(s[0]), !1) : void 0
                    }), a.src = r.src
                })
            })
        }
    }(jQuery),
    function(e, t) {
        "use strict";
        e.fn.extend({
            revolution: function(i) {
                var s = {
                    delay: 9e3,
                    responsiveLevels: 4064,
                    gridwidth: 960,
                    gridheight: 500,
                    minHeight: 0,
                    autoHeight: "off",
                    sliderType: "standard",
                    sliderLayout: "auto",
                    fullScreenAutoWidth: "off",
                    fullScreenAlignForce: "off",
                    fullScreenOffsetContainer: "",
                    fullScreenOffset: "0",
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLimit: 0,
                    hideSliderAtLimit: 0,
                    disableProgressBar: "off",
                    stopAtSlide: -1,
                    stopAfterLoops: -1,
                    shadow: 0,
                    dottedOverlay: "none",
                    startDelay: 0,
                    lazyType: "smart",
                    spinner: "spinner0",
                    shuffle: "off",
                    viewPort: {
                        enable: !1,
                        outof: "wait",
                        visible_area: "60%"
                    },
                    fallbacks: {
                        isJoomla: !1,
                        panZoomDisableOnMobile: "off",
                        simplifyAll: "on",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: !0
                    },
                    parallax: {
                        type: "off",
                        levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                        origo: "enterpoint",
                        speed: 400,
                        bgparallax: "on",
                        opacity: "on",
                        disable_onmobile: "off"
                    },
                    carousel: {
                        horizontal_align: "center",
                        vertical_align: "center",
                        infinity: "on",
                        space: 0,
                        maxVisibleItems: 3,
                        stretch: "off",
                        fadeout: "on",
                        maxRotation: 0,
                        minScale: 0,
                        vary_fade: "off",
                        vary_rotation: "on",
                        vary_scale: "off",
                        border_radius: "0px",
                        padding_top: 0,
                        padding_bottom: 0
                    },
                    navigation: {
                        keyboardNavigation: "on",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        onHoverStop: "on",
                        touch: {
                            touchenabled: "off",
                            swipe_treshold: 75,
                            swipe_min_touches: 1,
                            drag_block_vertical: !1,
                            swipe_direction: "horizontal"
                        },
                        arrows: {
                            style: "",
                            enable: !1,
                            hide_onmobile: !1,
                            hide_onleave: !0,
                            hide_delay: 200,
                            hide_delay_mobile: 1200,
                            hide_under: 0,
                            hide_over: 9999,
                            tmp: "",
                            left: {
                                h_align: "left",
                                v_align: "center",
                                h_offset: 20,
                                v_offset: 0
                            },
                            right: {
                                h_align: "right",
                                v_align: "center",
                                h_offset: 20,
                                v_offset: 0
                            }
                        },
                        bullets: {
                            style: "",
                            enable: !1,
                            hide_onmobile: !1,
                            hide_onleave: !0,
                            hide_delay: 200,
                            hide_delay_mobile: 1200,
                            hide_under: 0,
                            hide_over: 9999,
                            direction: "horizontal",
                            h_align: "left",
                            v_align: "center",
                            space: 0,
                            h_offset: 20,
                            v_offset: 0,
                            tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
                        },
                        thumbnails: {
                            style: "",
                            enable: !1,
                            width: 100,
                            height: 50,
                            min_width: 100,
                            wrapper_padding: 2,
                            wrapper_color: "#f5f5f5",
                            wrapper_opacity: 1,
                            tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
                            visibleAmount: 5,
                            hide_onmobile: !1,
                            hide_onleave: !0,
                            hide_delay: 200,
                            hide_delay_mobile: 1200,
                            hide_under: 0,
                            hide_over: 9999,
                            direction: "horizontal",
                            span: !1,
                            position: "inner",
                            space: 2,
                            h_align: "left",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        },
                        tabs: {
                            style: "",
                            enable: !1,
                            width: 100,
                            min_width: 100,
                            height: 50,
                            wrapper_padding: 10,
                            wrapper_color: "#f5f5f5",
                            wrapper_opacity: 1,
                            tmp: '<span class="tp-tab-image"></span>',
                            visibleAmount: 5,
                            hide_onmobile: !1,
                            hide_onleave: !0,
                            hide_delay: 200,
                            hide_delay_mobile: 1200,
                            hide_under: 0,
                            hide_over: 9999,
                            direction: "horizontal",
                            span: !1,
                            space: 0,
                            position: "inner",
                            h_align: "left",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        }
                    },
                    extensions: "extensions/",
                    extensions_suffix: ".min.js",
                    debugMode: !1
                };
                return i = e.extend(!0, {}, s, i), this.each(function() {
                    var s = e(this);
                    "hero" == i.sliderType && s.find(">ul>li").each(function(t) {
                        t > 0 && e(this).remove()
                    }), i.jsFileLocation = i.jsFileLocation || o("themepunch.revolution.min.js"), i.jsFileLocation = i.jsFileLocation + i.extensions, i.scriptsneeded = r(i, s), i.curWinRange = 0, e(this).on("scriptsloaded", function() {
                        return i.modulesfailing ? (s.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.' + i.errorm + "</div>").show(), !1) : (n.migration != t && (i = n.migration(s, i)), punchgs.force3D = !0, "on" !== i.simplifyAll && punchgs.TweenLite.lagSmoothing(1e3, 16), d(s, i), void c(s, i))
                    }), a(s, i.scriptsneeded)
                })
            },
            revaddcallback: function(n) {
                return this.each(function() {
                    var i = e(this);
                    if (i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0) {
                        var s = i.parent().find(".tp-bannertimer"),
                            r = s.data("opt");
                        r.callBackArray === t && (r.callBackArray = new Array), r.callBackArray.push(n)
                    }
                })
            },
            revgetparallaxproc: function() {
                var n = e(this);
                if (n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) {
                    var i = n.parent().find(".tp-bannertimer"),
                        s = i.data("opt");
                    return s.scrollproc
                }
            },
            revdebugmode: function() {
                return this.each(function() {
                    var n = e(this);
                    if (n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) {
                        var i = n.parent().find(".tp-bannertimer"),
                            s = i.data("opt");
                        s.debugMode = !0, g(n, s)
                    }
                })
            },
            revscroll: function(n) {
                return this.each(function() {
                    var i = e(this);
                    i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0 && e("body,html").animate({
                        scrollTop: i.offset().top + opt.li.height() - n + "px"
                    }, {
                        duration: 400
                    })
                })
            },
            revredraw: function(n) {
                return this.each(function() {
                    var n = e(this);
                    if (n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) {
                        var i = n.parent().find(".tp-bannertimer"),
                            s = i.data("opt");
                        g(n, s)
                    }
                })
            },
            revkill: function(i) {
                var s = this,
                    r = e(this);
                if (punchgs.TweenLite.killDelayedCallsTo(showHideNavElements), n.endMoveCaption && punchgs.TweenLite.killDelayedCallsTo(n.endMoveCaption), r != t && r.length > 0 && e("body").find("#" + r.attr("id")).length > 0) {
                    r.data("conthover", 1), r.data("conthover-changed", 1), r.trigger("revolution.slide.onpause");
                    var a = r.parent().find(".tp-bannertimer"),
                        o = a.data("opt");
                    o.tonpause = !0, r.trigger("stoptimer"), punchgs.TweenLite.killTweensOf(r.find("*"), !1), punchgs.TweenLite.killTweensOf(r, !1), r.unbind("hover, mouseover, mouseenter,mouseleave, resize");
                    var l = "resize.revslider-" + r.attr("id");
                    e(window).off(l), r.find("*").each(function() {
                        var n = e(this);
                        n.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), n.off("on, hover, mouseenter,mouseleave,mouseover, resize"), n.data("mySplitText", null), n.data("ctl", null), n.data("tween") != t && n.data("tween").kill(), n.data("kenburn") != t && n.data("kenburn").kill(), n.data("timeline_out") != t && n.data("timeline_out").kill(), n.data("timeline") != t && n.data("timeline").kill(), n.remove(), n.empty(), n = null
                    }), punchgs.TweenLite.killTweensOf(r.find("*"), !1), punchgs.TweenLite.killTweensOf(r, !1), a.remove();
                    try {
                        r.closest(".forcefullwidth_wrapper_tp_banner").remove()
                    } catch (d) {}
                    try {
                        r.closest(".rev_slider_wrapper").remove()
                    } catch (d) {}
                    try {
                        r.remove()
                    } catch (d) {}
                    return r.empty(), r.html(), r = null, o = null, delete s.c, delete s.opt, !0
                }
                return !1
            },
            revpause: function() {
                return this.each(function() {
                    var n = e(this);
                    if (n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) {
                        n.data("conthover", 1), n.data("conthover-changed", 1), n.trigger("revolution.slide.onpause");
                        var i = n.parent().find(".tp-bannertimer"),
                            s = i.data("opt");
                        s.tonpause = !0, n.trigger("stoptimer")
                    }
                })
            },
            revresume: function() {
                return this.each(function() {
                    var n = e(this);
                    if (n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) {
                        n.data("conthover", 0), n.data("conthover-changed", 1), n.trigger("revolution.slide.onresume");
                        var i = n.parent().find(".tp-bannertimer"),
                            s = i.data("opt");
                        s.tonpause = !1, n.trigger("starttimer")
                    }
                })
            },
            revnext: function() {
                return this.each(function() {
                    var i = e(this);
                    if (i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0) {
                        var s = i.parent().find(".tp-bannertimer"),
                            r = s.data("opt");
                        n.callingNewSlide(r, i, 1)
                    }
                })
            },
            revprev: function() {
                return this.each(function() {
                    var i = e(this);
                    if (i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0) {
                        var s = i.parent().find(".tp-bannertimer"),
                            r = s.data("opt");
                        n.callingNewSlide(r, i, -1)
                    }
                })
            },
            revmaxslide: function() {
                return e(this).find(".tp-revslider-mainul >li").length
            },
            revcurrentslide: function() {
                var n = e(this);
                if (n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) {
                    var i = n.parent().find(".tp-bannertimer"),
                        s = i.data("opt");
                    return parseInt(s.act, 0) + 1
                }
            },
            revlastslide: function() {
                return e(this).find(".tp-revslider-mainul >li").length
            },
            revshowslide: function(i) {
                return this.each(function() {
                    var s = e(this);
                    if (s != t && s.length > 0 && e("body").find("#" + s.attr("id")).length > 0) {
                        var r = s.parent().find(".tp-bannertimer"),
                            a = r.data("opt");
                        n.callingNewSlide(a, s, "to" + (i - 1))
                    }
                })
            },
            revcallslidewithid: function(i) {
                return this.each(function() {
                    var s = e(this);
                    if (s != t && s.length > 0 && e("body").find("#" + s.attr("id")).length > 0) {
                        var r = s.parent().find(".tp-bannertimer"),
                            a = r.data("opt");
                        n.callingNewSlide(a, s, i)
                    }
                })
            }
        });
        var n = e.fn.revolution;
        e.extend(!0, n, {
            simp: function(e, t, n) {
                var i = Math.abs(e) - Math.floor(Math.abs(e / t)) * t;
                return n ? i : 0 > e ? -1 * i : i
            },
            iOSVersion: function() {
                var e = !1;
                return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (e = !0) : e = !1, e
            },
            isIE: function(t, n) {
                var i = e('<div style="display:none;"/>').appendTo(e("body"));
                i.html("<!--[if " + (n || "") + " IE " + (t || "") + "]><a>&nbsp;</a><![endif]-->");
                var s = i.find("a").length;
                return i.remove(), s
            },
            is_mobile: function() {
                var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                    t = !1;
                for (var n in e) navigator.userAgent.split(e[n]).length > 1 && (t = !0);
                return t
            },
            callBackHandling: function(t, n, i) {
                try {
                    t.callBackArray && e.each(t.callBackArray, function(e, t) {
                        t && t.inmodule && t.inmodule === n && t.atposition && t.atposition === i && t.callback && t.callback.call()
                    })
                } catch (s) {
                    console.log("Call Back Failed")
                }
            },
            get_browser: function() {
                var e, t = navigator.appName,
                    n = navigator.userAgent,
                    i = n.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
                return i && null != (e = n.match(/version\/([\.\d]+)/i)) && (i[2] = e[1]), i = i ? [i[1], i[2]] : [t, navigator.appVersion, "-?"], i[0]
            },
            get_browser_version: function() {
                var e, t = navigator.appName,
                    n = navigator.userAgent,
                    i = n.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
                return i && null != (e = n.match(/version\/([\.\d]+)/i)) && (i[2] = e[1]), i = i ? [i[1], i[2]] : [t, navigator.appVersion, "-?"], i[1]
            },
            getHorizontalOffset: function(e, t) {
                var n = u(e, ".outer-left"),
                    i = u(e, ".outer-right");
                switch (t) {
                    case "left":
                        return n;
                    case "right":
                        return i;
                    case "both":
                        return n + i
                }
            },
            callingNewSlide: function(t, n, i) {
                var s = n.find(".next-revslide").length > 0 ? n.find(".next-revslide").index() : n.find(".processing-revslide").length > 0 ? n.find(".processing-revslide").index() : n.find(".active-revslide").index(),
                    r = 0;
                n.find(".next-revslide").removeClass("next-revslide"), i && e.isNumeric(i) || i.match(/to/g) ? (1 === i || -1 === i ? (r = s + i, r = 0 > r ? t.slideamount - 1 : r >= t.slideamount ? 0 : r) : (i = e.isNumeric(i) ? i : parseInt(i.split("to")[1], 0), r = 0 > i ? 0 : i > t.slideamount - 1 ? t.slideamount - 1 : i), n.find(".tp-revslider-slidesli:eq(" + r + ")").addClass("next-revslide")) : i && n.find(".tp-revslider-slidesli").each(function() {
                    var t = e(this);
                    t.data("index") === i && t.addClass("next-revslide")
                }), r = n.find(".next-revslide").index(), n.trigger("revolution.nextslide.waiting"), r !== s && -1 != r ? A(n, t) : n.find(".next-revslide").removeClass("next-revslide")
            },
            slotSize: function(n, i) {
                i.slotw = Math.ceil(i.width / i.slots), "fullscreen" == i.sliderLayout ? i.sloth = Math.ceil(e(window).height() / i.slots) : i.sloth = Math.ceil(i.height / i.slots), "on" == i.autoHeight && n !== t && "" !== n && (i.sloth = Math.ceil(n.height() / i.slots))
            },
            setSize: function(n) {
                var i = (n.top_outer || 0) + (n.bottom_outer || 0),
                    s = parseInt(n.carousel.padding_top || 0, 0),
                    r = parseInt(n.carousel.padding_bottom || 0, 0),
                    a = n.gridheight[n.curWinRange];
                if (a = a < n.minHeight ? n.minHeight : a, "fullwidth" == n.sliderLayout && "off" == n.autoHeight && punchgs.TweenLite.set(n.c, {
                        maxHeight: a + "px"
                    }), n.c.css({
                        marginTop: s,
                        marginBottom: r
                    }), n.width = n.ul.width(), n.height = n.ul.height(), v(n), n.height = Math.round(n.gridheight[n.curWinRange] * (n.width / n.gridwidth[n.curWinRange])), n.height > n.gridheight[n.curWinRange] && "on" != n.autoHeight && (n.height = n.gridheight[n.curWinRange]), "fullscreen" == n.sliderLayout) {
                    n.height = n.bw * n.gridheight[n.curWinRange];
                    var o = (n.c.parent().width(), e(window).height());
                    if (n.fullScreenOffsetContainer != t) {
                        try {
                            var l = n.fullScreenOffsetContainer.split(",");
                            l && e.each(l, function(t, n) {
                                o = e(n).length > 0 ? o - e(n).outerHeight(!0) : o
                            })
                        } catch (d) {}
                        try {
                            n.fullScreenOffset.split("%").length > 1 && n.fullScreenOffset != t && n.fullScreenOffset.length > 0 ? o -= e(window).height() * parseInt(n.fullScreenOffset, 0) / 100 : n.fullScreenOffset != t && n.fullScreenOffset.length > 0 && (o -= parseInt(n.fullScreenOffset, 0))
                        } catch (d) {}
                    }
                    o = o < n.minHeight ? n.minHeight : o, o -= i, n.c.parent().height(o), n.c.closest(".rev_slider_wrapper").height(o), n.c.css({
                        height: "100%"
                    }), n.height = o, n.minHeight != t && n.height < n.minHeight && (n.height = n.minHeight)
                } else n.minHeight != t && n.height < n.minHeight && (n.height = n.minHeight), n.c.height(n.height);
                var u = {
                    height: s + r + i + n.height
                };
                n.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(u), n.c.closest(".rev_slider_wrapper").css(u), v(n)
            },
            enterInViewPort: function(i) {
                i.waitForCountDown && (k(i.c, i), i.waitForCountDown = !1), i.waitForFirstSlide && (A(i.c, i), i.waitForFirstSlide = !1), ("playing" == i.sliderlaststatus || i.sliderlaststatus == t) && i.c.trigger("starttimer"), i.lastplayedvideos != t && i.lastplayedvideos.length > 0 && e.each(i.lastplayedvideos, function(e, t) {
                    n.playVideo(t, i)
                })
            },
            leaveViewPort: function(i) {
                i.sliderlaststatus = i.sliderstatus, i.c.trigger("stoptimer"), i.playingvideos != t && i.playingvideos.length > 0 && (i.lastplayedvideos = e.extend(!0, [], i.playingvideos), i.playingvideos && e.each(i.playingvideos, function(e, t) {
                    n.stopVideo && n.stopVideo(t, i)
                }))
            }
        });
        var i = n.is_mobile(),
            s = function(n, i) {
                return e("body").data(n) ? !1 : i.filesystem ? (i.errorm === t && (i.errorm = "<br>Local Filesystem Detected !<br>Put this to your header:"), console.warn("Local Filesystem detected !"), i.errorm = i.errorm + '<br>&lt;script type="text/javascript" src="' + i.jsFileLocation + n + i.extensions_suffix + '"&gt;&lt;/script&gt;', console.warn(i.jsFileLocation + n + i.extensions_suffix + " could not be loaded !"), console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."), console.log(" "), i.modulesfailing = !0, !1) : (e.ajax({
                    url: i.jsFileLocation + n + i.extensions_suffix,
                    dataType: "script",
                    cache: !0,
                    error: function(e) {
                        console.warn("Slider Revolution 5.0 Error !"), console.error("Failure at Loading:" + n + i.extensions_suffix + " on Path:" + i.jsFileLocation), console.info(e)
                    }
                }), void e("body").data(n, !0))
            },
            r = function(i, r) {
                var a = new Object,
                    o = i.navigation;
                return a.kenburns = !1, a.parallax = !1, a.carousel = !1, a.navigation = !1, a.videos = !1, a.actions = !1, a.layeranim = !1, a.migration = !1, r.data("version") && r.data("version").match(/5./gi) ? (r.find("img").each(function() {
                    "on" == e(this).data("kenburns") && (a.kenburns = !0)
                }), ("carousel" == i.sliderType || "on" == o.keyboardNavigation || "on" == o.mouseScrollNavigation || "on" == o.touch.touchenabled || o.arrows.enable || o.bullets.enable || o.thumbnails.enable || o.tabs.enable) && (a.navigation = !0), r.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function() {
                    var n = e(this);
                    (n.data("ytid") != t || n.find("iframe").length > 0 && n.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (a.videos = !0), (n.data("vimeoid") != t || n.find("iframe").length > 0 && n.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (a.videos = !0), n.data("actions") !== t && (a.actions = !0), a.layeranim = !0
                }), r.find("li").each(function() {
                    e(this).data("link") && e(this).data("link") != t && (a.layeranim = !0, a.actions = !0)
                }), !a.videos && (r.find(".rs-background-video-layer").length > 0 || r.find(".tp-videolayer").length > 0 || r.find("iframe").length > 0 || r.find("video").length > 0) && (a.videos = !0), "carousel" == i.sliderType && (a.carousel = !0), ("off" !== i.parallax.type || i.viewPort.enable || "true" == i.viewPort.enable) && (a.parallax = !0)) : (a.kenburns = !0, a.parallax = !0, a.carousel = !1, a.navigation = !0, a.videos = !0, a.actions = !0, a.layeranim = !0, a.migration = !0), "hero" == i.sliderType && (a.carousel = !1, a.navigation = !1), window.location.href.match(/file:/gi) && (a.filesystem = !0, i.filesystem = !0), a.videos && "undefined" == typeof n.isVideoPlaying && s("revolution.extension.video", i), a.carousel && "undefined" == typeof n.prepareCarousel && s("revolution.extension.carousel", i), a.carousel || "undefined" != typeof n.animateSlide || s("revolution.extension.slideanims", i), a.actions && "undefined" == typeof n.checkActions && s("revolution.extension.actions", i), a.layeranim && "undefined" == typeof n.handleStaticLayers && s("revolution.extension.layeranimation", i), a.kenburns && "undefined" == typeof n.stopKenBurn && s("revolution.extension.kenburn", i), a.navigation && "undefined" == typeof n.createNavigation && s("revolution.extension.navigation", i), a.migration && "undefined" == typeof n.migration && s("revolution.extension.migration", i), a.parallax && "undefined" == typeof n.checkForParallax && s("revolution.extension.parallax", i), a
            },
            a = function(e, t) {
                t.filesystem || "undefined" != typeof punchgs && (!t.kenburns || t.kenburns && "undefined" != typeof n.stopKenBurn) && (!t.navigation || t.navigation && "undefined" != typeof n.createNavigation) && (!t.carousel || t.carousel && "undefined" != typeof n.prepareCarousel) && (!t.videos || t.videos && "undefined" != typeof n.resetVideo) && (!t.actions || t.actions && "undefined" != typeof n.checkActions) && (!t.layeranim || t.layeranim && "undefined" != typeof n.handleStaticLayers) && (!t.migration || t.migration && "undefined" != typeof n.migration) && (!t.parallax || t.parallax && "undefined" != typeof n.checkForParallax) && (t.carousel || !t.carousel && "undefined" != typeof n.animateSlide) ? e.trigger("scriptsloaded") : setTimeout(function() {
                    a(e, t)
                }, 50)
            },
            o = function(t) {
                var n = new RegExp("themepunch.revolution.min.js", "gi"),
                    i = "";
                return e("script").each(function() {
                    var t = e(this).attr("src");
                    t && t.match(n) && (i = t)
                }), i = i.replace("jquery.themepunch.revolution.min.js", ""), i = i.replace("jquery.themepunch.revolution.js", ""), i = i.split("?")[0]
            },
            l = function(t) {
                var n = 9999,
                    i = 0,
                    s = 0,
                    r = 0,
                    a = e(window).width();
                t.responsiveLevels && t.responsiveLevels.length && e.each(t.responsiveLevels, function(e, t) {
                    t > a && (0 == i || i > t) && (n = t, r = e, i = t), a > t && t > i && (i = t, s = e)
                }), n > i && (r = s), t.curWinRange = r
            },
            d = function(e, t) {
                t.carousel.maxVisibleItems = t.carousel.maxVisibleItems < 1 ? 999 : t.carousel.maxVisibleItems, t.carousel.vertical_align = "top" === t.carousel.vertical_align ? "0%" : "bottom" === t.carousel.vertical_align ? "100%" : "50%"
            },
            u = function(t, n) {
                var i = 0;
                return t.find(n).each(function() {
                    var t = e(this);
                    !t.hasClass("tp-forcenotvisible") && i < t.outerWidth() && (i = t.outerWidth())
                }), i
            },
            c = function(s, r) {
                if (s == t) return !1;
                if (s.data("aimg") != t && ("enabled" == s.data("aie8") && n.isIE(8) || "enabled" == s.data("amobile") && i) && s.html('<img class="tp-slider-alternative-image" src="' + s.data("aimg") + '">'), s.find(">ul").addClass("tp-revslider-mainul"), r.c = s, r.ul = s.find(".tp-revslider-mainul"), r.cid = s.attr("id"), r.ul.css({
                        visibility: "invisible"
                    }), r.slideamount = r.ul.find(">li").length, r.slayers = s.find(".tp-static-layers"), r.ul.find(">li").each(function(t) {
                        e(this).data("originalindex", t)
                    }), "on" == r.shuffle) {
                    var a = new Object,
                        o = r.ul.find(">li:first-child");
                    a.fstransition = o.data("fstransition"), a.fsmasterspeed = o.data("fsmasterspeed"), a.fsslotamount = o.data("fsslotamount");
                    for (var d = 0; d < r.slideamount; d++) {
                        var u = Math.round(Math.random() * r.slideamount);
                        r.ul.find(">li:eq(" + u + ")").prependTo(r.ul)
                    }
                    var c = r.ul.find(">li:first-child");
                    c.data("fstransition", a.fstransition), c.data("fsmasterspeed", a.fsmasterspeed), c.data("fsslotamount", a.fsslotamount), r.li = r.ul.find(">li")
                }
                if (r.li = r.ul.find(">li"), r.thumbs = new Array, r.slots = 4, r.act = -1, r.firststart = 1, r.loadqueue = new Array, r.syncload = 0, r.conw = s.width(), r.conh = s.height(), r.responsiveLevels.length > 1 ? r.responsiveLevels[0] = 9999 : r.responsiveLevels = 9999, e.each(r.li, function(n, i) {
                        var i = e(i),
                            s = i.find(".rev-slidebg") || i.find("img").first(),
                            a = 0;
                        i.addClass("tp-revslider-slidesli"), i.data("index") === t && i.data("index", "rs-" + Math.round(999999 * Math.random()));
                        var o = new Object;
                        o.params = new Array, o.id = i.data("index"), o.src = i.data("thumb") !== t ? i.data("thumb") : s.data("lazyload") !== t ? s.data("lazyload") : s.attr("src"), i.data("title") !== t && o.params.push({
                            from: RegExp("\\{\\{title\\}\\}", "g"),
                            to: i.data("title")
                        }), i.data("description") !== t && o.params.push({
                            from: RegExp("\\{\\{description\\}\\}", "g"),
                            to: i.data("description")
                        });
                        for (var a = 1; 10 >= a; a++) i.data("param" + a) !== t && o.params.push({
                            from: RegExp("\\{\\{param" + a + "\\}\\}", "g"),
                            to: i.data("param" + a)
                        });
                        if (r.thumbs.push(o), i.data("origindex", i.index()), i.data("link") != t) {
                            var l = i.data("link"),
                                d = i.data("target") || "_self",
                                u = "back" === i.data("slideindex") ? 0 : 60,
                                c = i.data("linktoslide"),
                                h = c;
                            c != t && "next" != c && "prev" != c && r.li.each(function() {
                                var t = e(this);
                                t.data("origindex") + 1 == h && (c = t.index() + 1)
                            }), "slide" != l && (c = "no");
                            var p = '<div class="tp-caption sft slidelink" style="cursor:pointer;width:100%;height:100%;z-index:' + u + ';" data-x="center" data-y="center" ',
                                f = "scroll_under" === c ? '[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]' : '[{"event":"click","action":"jumptoslide","slide":"2","delay":"0.2"}]';
                            p = "no" == c ? p + ' data-start="0">' : p + "data-actions='" + f + '\' data-start="0">', p += '<a style="width:100%;height:100%;display:block"', p = "slide" != l ? p + ' target="' + d + '" href="' + l + '"' : p, p += '><span style="width:100%;height:100%;display:block"></span></a></div>', i.append(p)
                        }
                    }), r.rle = r.responsiveLevels.length || 1, r.gridwidth = h(r.gridwidth, r.rle), r.gridheight = h(r.gridheight, r.rle), "on" == r.simplifyAll && (n.isIE(8) || n.iOSVersion()) && (s.find(".tp-caption").each(function() {
                        var t = e(this);
                        t.removeClass("customin customout").addClass("fadein fadeout"), t.data("splitin", ""), t.data("speed", 400)
                    }), r.li.each(function() {
                        var t = e(this);
                        t.data("transition", "fade"), t.data("masterspeed", 500), t.data("slotamount", 1);
                        var n = t.find(".rev-slidebg") || t.find(">img").first();
                        n.data("kenburns", "off")
                    })), r.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), r.autoHeight = "fullscreen" == r.sliderLayout ? "on" : r.autoHeight, "fullwidth" == r.sliderLayout && "off" == r.autoHeight && s.css({
                        maxHeight: r.gridheight[r.curWinRange] + "px"
                    }), "auto" != r.sliderLayout && 0 == s.closest(".forcefullwidth_wrapper_tp_banner").length && ("fullscreen" !== r.sliderLayout || "on" != r.fullScreenAutoWidth)) {
                    var v = s.parent(),
                        y = v.css("marginBottom"),
                        b = v.css("marginTop");
                    y = y === t ? 0 : y, b = b === t ? 0 : b, v.wrap('<div class="forcefullwidth_wrapper_tp_banner" style="position:relative;width:100%;height:auto;margin-top:' + b + ";margin-bottom:" + y + '"></div>'), s.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + s.height() + 'px"></div>'), s.parent().css({
                        marginTop: "0px",
                        marginBottom: "0px"
                    }), s.parent().css({
                        position: "absolute"
                    })
                }
                if (r.shadow !== t && r.shadow > 0 && (s.parent().addClass("tp-shadow" + r.shadow), s.parent().append('<div class="tp-shadowcover"></div>'), s.parent().find(".tp-shadowcover").css({
                        backgroundColor: s.parent().css("backgroundColor"),
                        backgroundImage: s.parent().css("backgroundImage")
                    })), l(r), !s.hasClass("revslider-initialised")) {
                    s.addClass("revslider-initialised"), s.addClass("tp-simpleresponsive"), s.attr("id") == t && s.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), r.firefox13 = !1, r.ie = !e.support.opacity, r.ie9 = 9 == document.documentMode, r.origcd = r.delay;
                    var C = e.fn.jquery.split("."),
                        w = parseFloat(C[0]),
                        x = parseFloat(C[1]);
                    parseFloat(C[2] || "0");
                    1 == w && 7 > x && s.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + C + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), w > 1 && (r.ie = !1);
                    var E = new Object;
                    E.addedyt = 0, E.addedvim = 0, E.addedvid = 0, s.find(".tp-caption, .rs-background-video-layer").each(function(s) {
                        var a = e(this),
                            o = a.data("autoplayonlyfirsttime"),
                            l = a.data("autoplay");
                        a.hasClass("tp-static-layer") && n.handleStaticLayers && n.handleStaticLayers(a, r);
                        var d = 0;
                        if (a.find("iframe").each(function() {
                                punchgs.TweenLite.set(e(this), {
                                    autoAlpha: 0
                                }), d++
                            }), d > 0 && a.data("iframes", !0), a.hasClass("tp-caption")) {
                            var u = a.hasClass("slidelink") ? "width:100% !important;height:100% !important;" : "";
                            a.wrap('<div class="tp-parallax-wrap" style="' + u + 'position:absolute;visibility:hidden"><div class="tp-loop-wrap" style="' + u + 'position:absolute;"><div class="tp-mask-wrap" style="' + u + 'position:absolute" ></div></div></div>');
                            var c = ["pendulum", "rotate", "slideloop", "pulse", "wave"],
                                h = a.closest(".tp-loop-wrap");
                            e.each(c, function(e, t) {
                                var n = a.find(".rs-" + t),
                                    i = n.data() || "";
                                "" != i && (h.data(i), h.addClass("rs-" + t), n.children(0).unwrap(), a.data("loopanimation", "on"))
                            }), punchgs.TweenLite.set(a, {
                                visibility: "hidden"
                            })
                        }
                        var f = a.data("actions");
                        f !== t && n.checkActions(a, r, f), p(a, r), n.checkVideoApis && (E = n.checkVideoApis(a, r, E)), i && ((1 == o || "true" == o) && (a.data("autoplayonlyfirsttime", "false"), o = !1), (1 == l || "true" == l || "on" == l || "1sttime" == l) && (a.data("autoplay", "off"), l = "off")), (1 == o || "true" == o || "1sttime" == l) && a.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"),
                            (1 == l || "true" == l || "on" == l || "no1sttime" == l) && a.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always")
                    }), s.hover(function() {
                        s.trigger("tp-mouseenter"), r.overcontainer = !0
                    }, function() {
                        s.trigger("tp-mouseleft"), r.overcontainer = !1
                    }), s.on("mouseover", function() {
                        s.trigger("tp-mouseover"), r.overcontainer = !0
                    }), s.find(".tp-caption video").each(function(t) {
                        var n = e(this);
                        n.removeClass("video-js vjs-default-skin"), n.attr("preload", ""), n.css({
                            display: "none"
                        })
                    }), "standard" !== r.sliderType && (r.lazyType = "all"), T(s.find(".tp-static-layers"), r, 0), L(s.find(".tp-static-layers img"), r, function() {
                        s.find(".tp-static-layers img").each(function() {
                            var n = e(this),
                                i = n.data("lazyload") != t ? n.data("lazyload") : n.attr("src"),
                                s = S(r, i);
                            n.attr("src", s.src)
                        })
                    }), r.li.each(function(t) {
                        var n = e(this);
                        ("all" == r.lazyType || "smart" == r.lazyType && (0 == t || 1 == t || t == r.slideamount || t == r.slideamount - 1)) && (T(n, r, t), L(n, r, function() {
                            "carousel" == r.sliderType && punchgs.TweenLite.to(n, 1, {
                                autoAlpha: 1,
                                ease: punchgs.Power3.easeInOut
                            })
                        }))
                    });
                    var I = M("#")[0];
                    if (I.length < 9 && I.split("slide").length > 1) {
                        var P = parseInt(I.split("slide")[1], 0);
                        1 > P && (P = 1), P > r.slideamount && (P = r.slideamount), r.startWithSlide = P - 1
                    }
                    s.append('<div class="tp-loader ' + r.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), 0 === s.find(".tp-bannertimer").length && s.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'), s.find(".tp-bannertimer").css({
                        width: "0%"
                    }), s.find(".tp-bannertimer").data("opt", r), r.ul.css({
                        display: "block"
                    }), _(s, r), "off" !== r.parallax.type && n.checkForParallax(s, r), n.setSize(r), "hero" !== r.sliderType && n.createNavigation(s, r), n.resizeThumbsTabs && n.resizeThumbsTabs(r), f(r);
                    var O = r.viewPort;
                    r.inviewport = !1, O != t && O.enable && (O.visible_area = parseFloat(O.visible_area) / 100, O.visible_area = O.visible_area < .001 ? 100 * O.visible_area : O.visible_area, n.scrollTicker && n.scrollTicker(r, s)), setTimeout(function() {
                        "carousel" == r.sliderType && n.prepareCarousel(r), !O.enable || O.enable && r.inviewport || O.enable && !r.inviewport && "wait" == !O.outof ? A(s, r) : r.waitForFirstSlide = !0, n.manageNavigation && n.manageNavigation(r), r.slideamount > 1 && (!O.enable || O.enable && r.inviewport ? k(s, r) : r.waitForCountDown = !0), setTimeout(function() {
                            s.trigger("revolution.slide.onloaded")
                        }, 100)
                    }, r.startDelay), r.startDelay = 0, e("body").data("rs-fullScreenMode", !1), e(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() {
                        e("body").data("rs-fullScreenMode", !e("body").data("rs-fullScreenMode")), e("body").data("rs-fullScreenMode") && setTimeout(function() {
                            e(window).trigger("resize")
                        }, 200)
                    });
                    var N = "resize.revslider-" + s.attr("id");
                    e(window).on(N, function() {
                        return s == t ? !1 : (0 != e("body").find(s) && f(r), void((s.outerWidth(!0) != r.width || s.is(":hidden") || "fullscreen" == r.sliderLayout && e(window).height() != r.lastwindowheight) && (r.lastwindowheight = e(window).height(), g(s, r))))
                    }), m(s, r), f(r), r.disableFocusListener || "true" == r.disableFocusListener || r.disableFocusListener === !0 || D(s, r)
                }
            },
            h = function(t, n) {
                if (!e.isArray(t)) {
                    var i = t;
                    t = new Array, t.push(i)
                }
                if (t.length < n)
                    for (var i = t[t.length - 1], s = 0; s < n - t.length + 2; s++) t.push(i);
                return t
            },
            p = function(i, s) {
                "sliderenter" === i.data("start") && (s.layersonhover === t && (s.c.on("tp-mouseenter", function() {
                    s.layersonhover && e.each(s.layersonhover, function(e, i) {
                        i.data("animdirection", "in");
                        var r = i.data("timeline_out"),
                            a = "carousel" === s.sliderType ? 0 : s.width / 2 - s.gridwidth[s.curWinRange] * s.bw / 2,
                            o = 0,
                            l = i.closest(".tp-revslider-slidesli");
                        if (l.hasClass("active-revslide") || l.hasClass("processing-revslide")) {
                            r != t && (r.pause(0), r.kill()), n.animateSingleCaption(i, s, a, o, 0, !1, !0);
                            var d = i.data("timeline");
                            i.data("triggerstate", "on"), d.play(0)
                        }
                    })
                }), s.c.on("tp-mouseleft", function() {
                    s.layersonhover && e.each(s.layersonhover, function(e, t) {
                        t.data("animdirection", "out"), t.data("triggered", !0), t.data("triggerstate", "off"), n.stopVideo && n.stopVideo(t, s), n.endMoveCaption && n.endMoveCaption(t, null, null, s)
                    })
                }), s.layersonhover = new Array), s.layersonhover.push(i))
            },
            f = function(t) {
                var i = n.getHorizontalOffset(t.c, "left");
                if ("auto" == t.sliderLayout || "fullscreen" === t.sliderLayout && "on" == t.fullScreenAutoWidth) "fullscreen" == t.sliderLayout && "on" == t.fullScreenAutoWidth ? punchgs.TweenLite.set(t.ul, {
                    left: 0,
                    width: t.c.width()
                }) : punchgs.TweenLite.set(t.ul, {
                    left: i,
                    width: t.c.width() - n.getHorizontalOffset(t.c, "both")
                });
                else {
                    var s = Math.ceil(t.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left - i);
                    punchgs.TweenLite.set(t.c.parent(), {
                        left: 0 - s + "px",
                        width: e(window).width() - n.getHorizontalOffset(t.c, "both")
                    })
                }
                t.slayers && "fullwidth" != t.sliderLayout && "fullscreen" != t.sliderLayout && punchgs.TweenLite.set(t.slayers, {
                    left: i
                })
            },
            m = function(i, s, r) {
                var a = i.parent();
                e(window).width() < s.hideSliderAtLimit ? (i.trigger("stoptimer"), "none" != a.css("display") && a.data("olddisplay", a.css("display")), a.css({
                    display: "none"
                })) : i.is(":hidden") && r && (a.data("olddisplay") != t && "undefined" != a.data("olddisplay") && "none" != a.data("olddisplay") ? a.css({
                    display: a.data("olddisplay")
                }) : a.css({
                    display: "block"
                }), i.trigger("restarttimer"), setTimeout(function() {
                    g(i, s)
                }, 150)), n.hideUnHideNav && n.hideUnHideNav(s)
            },
            g = function(e, i) {
                if (l(i), !n.resizeThumbsTabs || n.resizeThumbsTabs(i) === !0) {
                    if (m(e, i, !0), f(i), "carousel" == i.sliderType && n.prepareCarousel(i, !0), e === t) return !1;
                    n.setSize(i), i.conw = i.c.width(), i.conh = i.c.height();
                    var s = e.find(".active-revslide .slotholder"),
                        r = e.find(".processing-revslide .slotholder");
                    y(e, i, e, 2), "standard" === i.sliderType && (punchgs.TweenLite.set(r.find(".defaultimg"), {
                        opacity: 0
                    }), s.find(".defaultimg").css({
                        opacity: 1
                    })), "carousel" == i.sliderType && i.lastconw != i.conw && (clearTimeout(i.pcartimer), i.pcartimer = setTimeout(function() {
                        n.prepareCarousel(i, !0)
                    }, 100), i.lastconw = i.conw), n.manageNavigation && n.manageNavigation(i), n.animateTheCaptions && n.animateTheCaptions(e.find(".active-revslide"), i, !0), "on" == r.data("kenburns") && n.startKenBurn(r, i, r.data("kbtl").progress()), "on" == s.data("kenburns") && n.startKenBurn(s, i, s.data("kbtl").progress())
                }
            },
            v = function(e) {
                e.bw = e.width / e.gridwidth[e.curWinRange], e.bh = e.height / e.gridheight[e.curWinRange], e.bh > e.bw ? e.bh = e.bw : e.bw = e.bh, (e.bh > 1 || e.bw > 1) && (e.bw = 1, e.bh = 1)
            },
            _ = function(s, r) {
                if (s.find(".tp-caption").each(function() {
                        var n = e(this);
                        n.data("transition") !== t && n.addClass(n.data("transition"))
                    }), r.ul.css({
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        maxHeight: s.parent().css("maxHeight")
                    }), "on" == r.autoHeight && (r.ul.css({
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        maxHeight: "none"
                    }), s.css({
                        maxHeight: "none"
                    }), s.parent().css({
                        maxHeight: "none"
                    })), r.li.each(function(n) {
                        var i = e(this),
                            s = i.data("originalindex");
                        (r.startWithSlide != t && s == r.startWithSlide || r.startWithSlide === t && 0 == n) && i.addClass("next-revslide"), i.css({
                            width: "100%",
                            height: "100%",
                            overflow: "hidden"
                        })
                    }), "carousel" === r.sliderType) {
                    r.ul.css({
                        overflow: "visible"
                    }).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');
                    var a = '<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';
                    r.c.parent().prepend(a), r.c.parent().append(a), n.prepareCarousel(r)
                }
                s.parent().css({
                    overflow: "visible"
                }), r.li.find(">img").each(function(n) {
                    var s = e(this),
                        a = s.closest("li").find(".rs-background-video-layer");
                    s.addClass("defaultimg"), "on" == r.panZoomDisableOnMobile && i && (s.data("kenburns", "off"), s.data("bgfit", "cover")), s.wrap('<div class="slotholder" style="width:100%;height:100%;"></div>');
                    var o = s.data();
                    s.closest(".slotholder").data(o), a.length > 0 && o.bgparallax != t && a.data("bgparallax", o.bgparallax), "none" != r.dottedOverlay && r.dottedOverlay != t && s.closest(".slotholder").append('<div class="tp-dottedoverlay ' + r.dottedOverlay + '"></div>');
                    var l = s.attr("src");
                    o.src = l, o.bgfit = o.bgfit || "cover", o.bgrepeat = o.bgrepeat || "no-repeat", o.bgposition = o.bgposition || "center center";
                    var d = s.closest(".slotholder");
                    s.parent().append('<div class="tp-bgimg defaultimg" style="background-color:' + s.css("backgroundColor") + ";background-repeat:" + o.bgrepeat + ";background-image:url(" + l + ");background-size:" + o.bgfit + ";background-position:" + o.bgposition + ';width:100%;height:100%;"></div>');
                    var u = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + s.get(0).outerHTML);
                    s.replaceWith(u), s = d.find(".tp-bgimg"), s.data(o), s.attr("src", l), ("standard" === r.sliderType || "undefined" === r.sliderType) && s.css({
                        opacity: 0
                    })
                })
            },
            y = function(t, n, i, s) {
                n.removePrepare = n.removePrepare + s, i.find(".slot").each(function() {
                    e(this).remove()
                }), n.transition = 0, n.removePrepare = 0
            },
            b = function(e) {
                var n = e;
                return e != t && e.length > 0 && (n = e.split("?")[0]), n
            },
            C = function(e, t) {
                var n = e.split("/"),
                    i = t.split("/");
                n.pop();
                for (var s = 0; s < i.length; s++) "." != i[s] && (".." == i[s] ? n.pop() : n.push(i[s]));
                return n.join("/")
            },
            w = function(t, n, i) {
                n.syncload--, n.loadqueue && e.each(n.loadqueue, function(e, n) {
                    var s = n.src.replace(/\.\.\/\.\.\//gi, ""),
                        r = self.location.href,
                        a = document.location.origin,
                        o = r.substring(0, r.length - 1) + "/" + s,
                        l = a + "/" + s,
                        d = C(self.location.href, n.src);
                    r = r.substring(0, r.length - 1) + s, a += s, (b(a) === b(decodeURIComponent(t.src)) || b(r) === b(decodeURIComponent(t.src)) || b(d) === b(decodeURIComponent(t.src)) || b(l) === b(decodeURIComponent(t.src)) || b(o) === b(decodeURIComponent(t.src)) || b(n.src) === b(decodeURIComponent(t.src)) || b(n.src).replace(/^.*\/\/[^\/]+/, "") === b(decodeURIComponent(t.src)).replace(/^.*\/\/[^\/]+/, "") || "file://" === window.location.origin && b(t.src).match(new RegExp(s))) && (n.progress = i, n.width = t.width, n.height = t.height)
                }), x(n)
            },
            x = function(t) {
                3 != t.syncload && t.loadqueue && e.each(t.loadqueue, function(e, n) {
                    if (n.progress.match(/prepared/g) && t.syncload <= 3) {
                        t.syncload++;
                        var i = new Image;
                        i.onload = function() {
                            w(this, t, "loaded")
                        }, i.onerror = function() {
                            w(this, t, "failed")
                        }, i.src = n.src, n.progress = "inload"
                    }
                })
            },
            E = function(t, n, i) {
                var s = !1;
                if (n.loadqueue && e.each(n.loadqueue, function(e, n) {
                        n.src === t && (s = !0)
                    }), !s) {
                    var r = new Object;
                    r.src = t, r.prio = i, r.progress = "prepared", n.loadqueue.push(r)
                }
            },
            T = function(n, i, s) {
                n.find("img,.defaultimg").each(function() {
                    var n = e(this),
                        r = n.data("lazyload") !== t && "undefined" !== n.data("lazyload") ? n.data("lazyload") : n.attr("src");
                    n.data("start-to-load", e.now()), E(r, i, s)
                }), x(i)
            },
            S = function(t, n) {
                var i = new Object;
                return t.loadqueue && e.each(t.loadqueue, function(e, t) {
                    t.src == n && (i = t)
                }), i
            },
            L = function(i, s, r) {
                var a = !1;
                i.find("img,.defaultimg").each(function() {
                    var r = e(this),
                        o = r.data("lazyload") != t ? r.data("lazyload") : r.attr("src"),
                        l = S(s, o);
                    if (r.data("loaded") === t && l !== t && l.progress && l.progress.match(/loaded/g)) {
                        if (r.attr("src", l.src), r.hasClass("defaultimg")) n.isIE(8) ? defimg.attr("src", l.src) : r.css({
                            backgroundImage: 'url("' + l.src + '")'
                        }), i.data("owidth", l.width), i.data("oheight", l.height), i.find(".slotholder").data("owidth", l.width), i.find(".slotholder").data("oheight", l.height);
                        else {
                            var d = r.data("ww"),
                                u = r.data("hh");
                            r.data("owidth", l.width), r.data("oheight", l.height), d = d == t || "auto" == d || "" == d ? l.width : d, u = u == t || "auto" == u || "" == u ? l.height : u, r.data("ww", d), r.data("hh", u)
                        }
                        r.data("loaded", !0)
                    }
                    if (l && l.progress && l.progress.match(/inprogress|inload|prepared/g) && (e.now() - r.data("start-to-load") < 5e3 ? a = !0 : console.error(o + "  Could not be loaded !")), 1 == s.youtubeapineeded && (!window.YT || YT.Player == t) && (a = !0, e.now() - s.youtubestarttime > 5e3 && 1 != s.youtubewarning)) {
                        s.youtubewarning = !0;
                        var c = "YouTube Api Could not be loaded !";
                        "https:" === location.protocol && (c += " Please Check and Renew SSL Certificate !"), console.error(c), s.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + c + "</strong></div>")
                    }
                    if (1 == s.vimeoapineeded && !window.Froogaloop && (a = !0, e.now() - s.vimeostarttime > 5e3 && 1 != s.vimeowarning)) {
                        s.vimeowarning = !0;
                        var c = "Vimeo Froogaloop Api Could not be loaded !";
                        "https:" === location.protocol && (c += " Please Check and Renew SSL Certificate !"), console.error(c), s.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + c + "</strong></div>")
                    }
                }), a ? setTimeout(function() {
                    L(i, s, r)
                }, 19) : r()
            },
            A = function(t, i) {
                if (clearTimeout(i.waitWithSwapSlide), t.find(".processing-revslide").length > 0) return i.waitWithSwapSlide = setTimeout(function() {
                    A(t, i)
                }, 150), !1;
                var s = t.find(".active-revslide"),
                    r = t.find(".next-revslide"),
                    a = r.find(".defaultimg");
                return r.index() === s.index() ? (r.removeClass("next-revslide"), !1) : (r.removeClass("next-revslide").addClass("processing-revslide"), "on" == i.stopLoop && r.index() == i.lastslidetoshow - 1 && (t.find(".tp-bannertimer").css({
                    visibility: "hidden"
                }), t.trigger("revolution.slide.onstop"), i.noloopanymore = 1), r.index() === i.slideamount - 1 && (i.looptogo = i.looptogo - 1, i.looptogo <= 0 && (i.stopLoop = "on")), i.tonpause = !0, t.trigger("stoptimer"), i.cd = 0, t.find(".tp-loader").css({
                    display: "block"
                }), T(r, i, 1), void L(r, i, function() {
                    r.find(".rs-background-video-layer").each(function() {
                        var t = e(this);
                        t.hasClass("HasListener") || (t.data("bgvideo", 1), n.manageVideoLayer(t, i)), t.append('<div class="rs-fullvideo-cover"></div>')
                    }), I(i, a, t)
                }))
            },
            I = function(e, i, s) {
                var r = s.find(".active-revslide"),
                    a = s.find(".processing-revslide"),
                    o = r.find(".slotholder"),
                    l = a.find(".slotholder");
                e.tonpause = !1, e.cd = 0, s.trigger("nulltimer"), s.find(".tp-loader").css({
                    display: "none"
                }), n.setSize(e), n.slotSize(i, e), n.manageNavigation && n.manageNavigation(e);
                var d = {};
                d.nextslide = a, d.currentslide = r, s.trigger("revolution.slide.onbeforeswap", d), e.transition = 1, e.videoplaying = !1, a.data("delay") != t ? (e.cd = 0, e.delay = a.data("delay")) : e.delay = e.origcd;
                var u = r.index(),
                    c = a.index();
                e.sdir = u > c ? 1 : 0, "arrow" == e.sc_indicator && (0 == u && c == e.slideamount - 1 && (e.sdir = 1), u == e.slideamount - 1 && 0 == c && (e.sdir = 0)), e.lsdir = e.lsdir === t ? e.sdir : e.lsdir, e.dirc = e.lsdir != e.sdir, e.lsdir = e.sdir, r.index() != a.index() && 1 != e.firststart && n.removeTheCaptions && n.removeTheCaptions(r, e), a.hasClass("rs-pause-timer-once") || a.hasClass("rs-pause-timer-always") ? e.videoplaying = !0 : s.trigger("restarttimer"), a.removeClass("rs-pause-timer-once");
                var h, p;
                if ("carousel" == e.sliderType) p = new punchgs.TimelineLite, n.prepareCarousel(e, p), P(s, e, l, o, a, r, p), e.transition = 0, e.firststart = 0;
                else {
                    p = new punchgs.TimelineLite({
                        onComplete: function() {
                            P(s, e, l, o, a, r, p)
                        }
                    }), p.add(punchgs.TweenLite.set(l.find(".defaultimg"), {
                        opacity: 0
                    })), p.pause(), 1 == e.firststart && (punchgs.TweenLite.set(r, {
                        autoAlpha: 0
                    }), e.firststart = 0), punchgs.TweenLite.set(r, {
                        zIndex: 18
                    }), punchgs.TweenLite.set(a, {
                        autoAlpha: 0,
                        zIndex: 20
                    }), "prepared" == a.data("differentissplayed") && (a.data("differentissplayed", "done"), a.data("transition", a.data("savedtransition")), a.data("slotamount", a.data("savedslotamount")), a.data("masterspeed", a.data("savedmasterspeed"))), a.data("fstransition") != t && "done" != a.data("differentissplayed") && (a.data("savedtransition", a.data("transition")), a.data("savedslotamount", a.data("slotamount")), a.data("savedmasterspeed", a.data("masterspeed")), a.data("transition", a.data("fstransition")), a.data("slotamount", a.data("fsslotamount")), a.data("masterspeed", a.data("fsmasterspeed")), a.data("differentissplayed", "prepared")), a.data("transition") == t && a.data("transition", "random"), h = 0;
                    var f = a.data("transition") !== t ? a.data("transition").split(",") : "fade",
                        m = a.data("nexttransid") == t ? -1 : a.data("nexttransid");
                    "on" == a.data("randomtransition") ? m = Math.round(Math.random() * f.length) : m += 1, m == f.length && (m = 0), a.data("nexttransid", m);
                    var g = f[m];
                    e.ie && ("boxfade" == g && (g = "boxslide"), "slotfade-vertical" == g && (g = "slotzoom-vertical"), "slotfade-horizontal" == g && (g = "slotzoom-horizontal")), n.isIE(8) && (g = 11), p = n.animateSlide(h, g, s, e, a, r, l, o, p), "on" == l.data("kenburns") && (n.startKenBurn(l, e), p.add(punchgs.TweenLite.set(l, {
                        autoAlpha: 0
                    }))), p.pause()
                }
                "off" != e.parallax.type && e.parallax.firstgo == t && n.scrollHandling && (e.parallax.firstgo = !0, e.lastscrolltop = -999, n.scrollHandling(e), setTimeout(function() {
                    e.lastscrolltop = -999, n.scrollHandling(e)
                }, 210), setTimeout(function() {
                    e.lastscrolltop = -999, n.scrollHandling(e)
                }, 420)), n.animateTheCaptions ? n.animateTheCaptions(a, e, null, p) : p != t && setTimeout(function() {
                    p.resume()
                }, 30), punchgs.TweenLite.to(a, .001, {
                    autoAlpha: 1
                })
            },
            P = function(s, r, a, o, l, d, u) {
                "carousel" === r.sliderType || (r.removePrepare = 0, punchgs.TweenLite.to(a.find(".defaultimg"), .001, {
                    zIndex: 20,
                    autoAlpha: 1,
                    onComplete: function() {
                        y(s, r, l, 1)
                    }
                }), l.index() != d.index() && punchgs.TweenLite.to(d, .2, {
                    zIndex: 18,
                    autoAlpha: 0,
                    onComplete: function() {
                        y(s, r, d, 1)
                    }
                })), s.find(".active-revslide").removeClass("active-revslide"), s.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"), r.act = l.index(), ("scroll" == r.parallax.type || "scroll+mouse" == r.parallax.type || "mouse+scroll" == r.parallax.type) && (r.lastscrolltop = -999, n.scrollHandling(r)), u.clear(), o.data("kbtl") != t && (o.data("kbtl").reverse(), o.data("kbtl").timeScale(25)), "on" == a.data("kenburns") && (a.data("kbtl") != t ? (a.data("kbtl").timeScale(1), a.data("kbtl").play()) : n.startKenBurn(a, r)), l.find(".rs-background-video-layer").each(function(t) {
                    if (i) return !1;
                    var s = e(this);
                    n.resetVideo(s, r), punchgs.TweenLite.fromTo(s, 1, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        ease: punchgs.Power3.easeInOut,
                        delay: .2,
                        onComplete: function() {
                            n.animcompleted && n.animcompleted(s, r)
                        }
                    })
                }), d.find(".rs-background-video-layer").each(function(t) {
                    if (i) return !1;
                    var s = e(this);
                    n.stopVideo && (n.resetVideo(s, r), n.stopVideo(s, r)), punchgs.TweenLite.to(s, 1, {
                        autoAlpha: 0,
                        ease: punchgs.Power3.easeInOut,
                        delay: .2
                    })
                });
                var c = {};
                c.slideIndex = l.index() + 1, c.slideLIIndex = l.index(), c.slide = l, c.currentslide = l, c.prevslide = d, s.trigger("revolution.slide.onchange", c), s.trigger("revolution.slide.onafterswap", c)
            },
            O = function(t, n) {
                t.children().each(function() {
                    try {
                        e(this).die("click")
                    } catch (t) {}
                    try {
                        e(this).die("mouseenter")
                    } catch (t) {}
                    try {
                        e(this).die("mouseleave")
                    } catch (t) {}
                    try {
                        e(this).unbind("hover")
                    } catch (t) {}
                });
                try {
                    t.die("click", "mouseenter", "mouseleave")
                } catch (i) {}
                clearInterval(n.cdint), t = null
            },
            k = function(s, r) {
                if (r.cd = 0, r.loop = 0, r.stopAfterLoops != t && r.stopAfterLoops > -1 ? r.looptogo = r.stopAfterLoops : r.looptogo = 9999999, r.stopAtSlide != t && r.stopAtSlide > -1 ? r.lastslidetoshow = r.stopAtSlide : r.lastslidetoshow = 999, r.stopLoop = "off", 0 == r.looptogo && (r.stopLoop = "on"), r.slideamount > 1 && (0 != r.stopAfterLoops || 1 != r.stopAtSlide)) {
                    var a = s.find(".tp-bannertimer");
                    s.on("stoptimer", function() {
                        var t = e(this).find(".tp-bannertimer");
                        t.data("tween").pause(), "on" == r.disableProgressBar && t.css({
                            visibility: "hidden"
                        }), r.sliderstatus = "paused"
                    }), s.on("starttimer", function() {
                        1 != r.conthover && 1 != r.videoplaying && r.width > r.hideSliderAtLimit && 1 != r.tonpause && 1 != r.overnav && (1 === r.noloopanymore || r.viewPort.enable && !r.inviewport || (a.css({
                            visibility: "visible"
                        }), a.data("tween").resume(), r.sliderstatus = "playing")), "on" == r.disableProgressBar && a.css({
                            visibility: "hidden"
                        })
                    }), s.on("restarttimer", function() {
                        var t = e(this).find(".tp-bannertimer");
                        1 === r.noloopanymore || r.viewPort.enable && !r.inviewport || (t.css({
                            visibility: "visible"
                        }), t.data("tween").kill(), t.data("tween", punchgs.TweenLite.fromTo(t, r.delay / 1e3, {
                            width: "0%"
                        }, {
                            force3D: "auto",
                            width: "100%",
                            ease: punchgs.Linear.easeNone,
                            onComplete: o,
                            delay: 1
                        })), r.sliderstatus = "playing"), "on" == r.disableProgressBar && t.css({
                            visibility: "hidden"
                        })
                    }), s.on("nulltimer", function() {
                        a.data("tween").pause(0), "on" == r.disableProgressBar && a.css({
                            visibility: "hidden"
                        }), r.sliderstatus = "paused"
                    });
                    var o = function() {
                        0 == e("body").find(s).length && (O(s, r), clearInterval(r.cdint)), s.trigger("revolution.slide.slideatend"), 1 == s.data("conthover-changed") && (r.conthover = s.data("conthover"), s.data("conthover-changed", 0)), n.callingNewSlide(r, s, 1)
                    };
                    a.data("tween", punchgs.TweenLite.fromTo(a, r.delay / 1e3, {
                        width: "0%"
                    }, {
                        force3D: "auto",
                        width: "100%",
                        ease: punchgs.Linear.easeNone,
                        onComplete: o,
                        delay: 1
                    })), a.data("opt", r), s.trigger("starttimer"), s.on("tp-mouseenter", function() {
                        "on" != r.navigation.onHoverStop || i || (s.trigger("stoptimer"), s.trigger("revolution.slide.onpause"))
                    }), s.on("tp-mouseleft", function() {
                        1 != s.data("conthover") && "on" == r.navigation.onHoverStop && (1 == r.viewPort.enable && r.inviewport || 0 == r.viewPort.enable) && (s.trigger("revolution.slide.onresume"), s.trigger("starttimer"))
                    })
                }
            },
            N = (function() {
                var e, t, n = {
                    hidden: "visibilitychange",
                    webkitHidden: "webkitvisibilitychange",
                    mozHidden: "mozvisibilitychange",
                    msHidden: "msvisibilitychange"
                };
                for (e in n)
                    if (e in document) {
                        t = n[e];
                        break
                    }
                return function(n) {
                    return n && document.addEventListener(t, n), !document[e]
                }
            }(), function(e) {
                return e == t || e.c == t ? !1 : void(1 != e.windowfocused && (e.windowfocused = !0, punchgs.TweenLite.delayedCall(.3, function() {
                    "on" == e.fallbacks.nextSlideOnWindowFocus && e.c.revnext(), e.c.revredraw(), "playing" == e.lastsliderstatus && e.c.revresume()
                })))
            }),
            R = function(e) {
                e.windowfocused = !1, e.lastsliderstatus = e.sliderstatus, e.c.revpause();
                var t = e.c.find(".active-revslide .slotholder"),
                    i = e.c.find(".processing-revslide .slotholder");
                "on" == i.data("kenburns") && n.stopKenBurn(i, e), "on" == t.data("kenburns") && n.stopKenBurn(t, e)
            },
            D = function(n, i) {
                var s = document.documentMode === t,
                    r = window.chrome;
                s && !r ? e(window).on("focusin", function() {
                    N(i)
                }).on("focusout", function() {
                    R(i)
                }) : window.addEventListener ? (window.addEventListener("focus", function(e) {
                    N(i)
                }, !1), window.addEventListener("blur", function(e) {
                    R(i)
                }, !1)) : (window.attachEvent("focus", function(e) {
                    N(i)
                }), window.attachEvent("blur", function(e) {
                    R(i)
                }))
            },
            M = function(e) {
                for (var t, n = [], i = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_"), s = 0; s < i.length; s++) i[s] = i[s].replace("%3D", "="), t = i[s].split("="), n.push(t[0]), n[t[0]] = t[1];
                return n
            }
    }(jQuery), ! function() {
        "use strict";

        function e(e, t) {
            if (e) {
                if (t.element_.classList.contains(t.CssClasses_.MDL_JS_RIPPLE_EFFECT)) {
                    var n = document.createElement("span");
                    n.classList.add(t.CssClasses_.MDL_RIPPLE_CONTAINER), n.classList.add(t.CssClasses_.MDL_JS_RIPPLE_EFFECT);
                    var i = document.createElement("span");
                    i.classList.add(t.CssClasses_.MDL_RIPPLE), n.appendChild(i), e.appendChild(n)
                }
                e.addEventListener("click", function(n) {
                    n.preventDefault();
                    var i = e.href.split("#")[1],
                        s = t.element_.querySelector("#" + i);
                    t.resetTabState_(), t.resetPanelState_(), e.classList.add(t.CssClasses_.ACTIVE_CLASS), s.classList.add(t.CssClasses_.ACTIVE_CLASS)
                })
            }
        }

        function t(e, t, n, i) {
            if (e) {
                if (i.tabBar_.classList.contains(i.CssClasses_.JS_RIPPLE_EFFECT)) {
                    var s = document.createElement("span");
                    s.classList.add(i.CssClasses_.RIPPLE_CONTAINER), s.classList.add(i.CssClasses_.JS_RIPPLE_EFFECT);
                    var r = document.createElement("span");
                    r.classList.add(i.CssClasses_.RIPPLE), s.appendChild(r), e.appendChild(s)
                }
                e.addEventListener("click", function(s) {
                    s.preventDefault();
                    var r = e.href.split("#")[1],
                        a = i.content_.querySelector("#" + r);
                    i.resetTabState_(t), i.resetPanelState_(n), e.classList.add(i.CssClasses_.IS_ACTIVE), a.classList.add(i.CssClasses_.IS_ACTIVE)
                })
            }
        }
        window.componentHandler = function() {
            function e(e, t) {
                for (var n = 0; n < h.length; n++)
                    if (h[n].className === e) return void 0 !== t && (h[n] = t), h[n];
                return !1
            }

            function t(e) {
                var t = e.getAttribute("data-upgraded");
                return null === t ? [""] : t.split(",")
            }

            function n(e, n) {
                var i = t(e);
                return -1 !== i.indexOf(n)
            }

            function i(t, n) {
                if (void 0 === t && void 0 === n)
                    for (var r = 0; r < h.length; r++) i(h[r].className, h[r].cssClass);
                else {
                    var a = t;
                    if (void 0 === n) {
                        var o = e(a);
                        o && (n = o.cssClass)
                    }
                    for (var l = document.querySelectorAll("." + n), d = 0; d < l.length; d++) s(l[d], a)
                }
            }

            function s(i, s) {
                if (!("object" == typeof i && i instanceof Element)) throw new Error("Invalid argument provided to upgrade MDL element.");
                var r = t(i),
                    a = [];
                if (s) n(i, s) || a.push(e(s));
                else {
                    var o = i.classList;
                    h.forEach(function(e) {
                        o.contains(e.cssClass) && -1 === a.indexOf(e) && !n(i, e.className) && a.push(e)
                    })
                }
                for (var l, d = 0, u = a.length; u > d; d++) {
                    if (l = a[d], !l) throw new Error("Unable to find a registered component for the given class.");
                    r.push(l.className), i.setAttribute("data-upgraded", r.join(","));
                    var c = new l.classConstructor(i);
                    c[m] = l, p.push(c);
                    for (var f = 0, g = l.callbacks.length; g > f; f++) l.callbacks[f](i);
                    l.widget && (i[l.className] = c);
                    var v = document.createEvent("Events");
                    v.initEvent("mdl-componentupgraded", !0, !0), i.dispatchEvent(v)
                }
            }

            function r(e) {
                Array.isArray(e) || (e = "function" == typeof e.item ? Array.prototype.slice.call(e) : [e]);
                for (var t, n = 0, i = e.length; i > n; n++) t = e[n], t instanceof HTMLElement && (t.children.length > 0 && r(t.children), s(t))
            }

            function a(t) {
                var n = {
                    classConstructor: t.constructor,
                    className: t.classAsString,
                    cssClass: t.cssClass,
                    widget: void 0 === t.widget ? !0 : t.widget,
                    callbacks: []
                };
                if (h.forEach(function(e) {
                        if (e.cssClass === n.cssClass) throw new Error("The provided cssClass has already been registered.");
                        if (e.className === n.className) throw new Error("The provided className has already been registered")
                    }), t.constructor.prototype.hasOwnProperty(m)) throw new Error("MDL component classes must not have " + m + " defined as a property.");
                var i = e(t.classAsString, n);
                i || h.push(n)
            }

            function o(t, n) {
                var i = e(t);
                i && i.callbacks.push(n)
            }

            function l() {
                for (var e = 0; e < h.length; e++) i(h[e].className)
            }

            function d(e) {
                for (var t = 0; t < p.length; t++) {
                    var n = p[t];
                    if (n.element_ === e) return n
                }
            }

            function u(e) {
                if (e && e[m].classConstructor.prototype.hasOwnProperty(f)) {
                    e[f]();
                    var t = p.indexOf(e);
                    p.splice(t, 1);
                    var n = e.element_.getAttribute("data-upgraded").split(","),
                        i = n.indexOf(e[m].classAsString);
                    n.splice(i, 1), e.element_.setAttribute("data-upgraded", n.join(","));
                    var s = document.createEvent("Events");
                    s.initEvent("mdl-componentdowngraded", !0, !0), e.element_.dispatchEvent(s)
                }
            }

            function c(e) {
                var t = function(e) {
                    u(d(e))
                };
                if (e instanceof Array || e instanceof NodeList)
                    for (var n = 0; n < e.length; n++) t(e[n]);
                else {
                    if (!(e instanceof Node)) throw new Error("Invalid argument provided to downgrade MDL nodes.");
                    t(e)
                }
            }
            var h = [],
                p = [],
                f = "mdlDowngrade_",
                m = "mdlComponentConfigInternal_";
            return {
                upgradeDom: i,
                upgradeElement: s,
                upgradeElements: r,
                upgradeAllRegistered: l,
                registerUpgradedCallback: o,
                register: a,
                downgradeElements: c
            }
        }(), window.addEventListener("load", function() {
            "classList" in document.createElement("div") && "querySelector" in document && "addEventListener" in window && Array.prototype.forEach ? (document.documentElement.classList.add("mdl-js"), componentHandler.upgradeAllRegistered()) : componentHandler.upgradeElement = componentHandler.register = function() {}
        }), componentHandler.ComponentConfig, componentHandler.Component, Date.now || (Date.now = function() {
            return (new Date).getTime()
        });
        for (var n = ["webkit", "moz"], i = 0; i < n.length && !window.requestAnimationFrame; ++i) {
            var s = n[i];
            window.requestAnimationFrame = window[s + "RequestAnimationFrame"], window.cancelAnimationFrame = window[s + "CancelAnimationFrame"] || window[s + "CancelRequestAnimationFrame"]
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var r = 0;
            window.requestAnimationFrame = function(e) {
                var t = Date.now(),
                    n = Math.max(r + 16, t);
                return setTimeout(function() {
                    e(r = n)
                }, n - t)
            }, window.cancelAnimationFrame = clearTimeout
        }
        var a = function(e) {
            this.element_ = e, this.init()
        };
        window.MaterialButton = a, a.prototype.Constant_ = {}, a.prototype.CssClasses_ = {
            RIPPLE_EFFECT: "mdl-js-ripple-effect",
            RIPPLE_CONTAINER: "mdl-button__ripple-container",
            RIPPLE: "mdl-ripple"
        }, a.prototype.blurHandler_ = function(e) {
            e && this.element_.blur()
        }, a.prototype.disable = function() {
            this.element_.disabled = !0
        }, a.prototype.enable = function() {
            this.element_.disabled = !1
        }, a.prototype.init = function() {
            if (this.element_) {
                if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
                    var e = document.createElement("span");
                    e.classList.add(this.CssClasses_.RIPPLE_CONTAINER), this.rippleElement_ = document.createElement("span"), this.rippleElement_.classList.add(this.CssClasses_.RIPPLE), e.appendChild(this.rippleElement_), this.boundRippleBlurHandler = this.blurHandler_.bind(this), this.rippleElement_.addEventListener("mouseup", this.boundRippleBlurHandler), this.element_.appendChild(e)
                }
                this.boundButtonBlurHandler = this.blurHandler_.bind(this), this.element_.addEventListener("mouseup", this.boundButtonBlurHandler), this.element_.addEventListener("mouseleave", this.boundButtonBlurHandler)
            }
        }, a.prototype.mdlDowngrade_ = function() {
            this.rippleElement_ && this.rippleElement_.removeEventListener("mouseup", this.boundRippleBlurHandler), this.element_.removeEventListener("mouseup", this.boundButtonBlurHandler), this.element_.removeEventListener("mouseleave", this.boundButtonBlurHandler)
        }, componentHandler.register({
            constructor: a,
            classAsString: "MaterialButton",
            cssClass: "mdl-js-button",
            widget: !0
        });
        var o = function(e) {
            this.element_ = e, this.init()
        };
        window.MaterialCheckbox = o, o.prototype.Constant_ = {
            TINY_TIMEOUT: .001
        }, o.prototype.CssClasses_ = {
            INPUT: "mdl-checkbox__input",
            BOX_OUTLINE: "mdl-checkbox__box-outline",
            FOCUS_HELPER: "mdl-checkbox__focus-helper",
            TICK_OUTLINE: "mdl-checkbox__tick-outline",
            RIPPLE_EFFECT: "mdl-js-ripple-effect",
            RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
            RIPPLE_CONTAINER: "mdl-checkbox__ripple-container",
            RIPPLE_CENTER: "mdl-ripple--center",
            RIPPLE: "mdl-ripple",
            IS_FOCUSED: "is-focused",
            IS_DISABLED: "is-disabled",
            IS_CHECKED: "is-checked",
            IS_UPGRADED: "is-upgraded"
        }, o.prototype.onChange_ = function(e) {
            this.updateClasses_()
        }, o.prototype.onFocus_ = function(e) {
            this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
        }, o.prototype.onBlur_ = function(e) {
            this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
        }, o.prototype.onMouseUp_ = function(e) {
            this.blur_()
        }, o.prototype.updateClasses_ = function() {
            this.checkDisabled(), this.checkToggleState()
        }, o.prototype.blur_ = function(e) {
            window.setTimeout(function() {
                this.inputElement_.blur()
            }.bind(this), this.Constant_.TINY_TIMEOUT)
        }, o.prototype.checkToggleState = function() {
            this.inputElement_.checked ? this.element_.classList.add(this.CssClasses_.IS_CHECKED) : this.element_.classList.remove(this.CssClasses_.IS_CHECKED)
        }, o.prototype.checkDisabled = function() {
            this.inputElement_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
        }, o.prototype.disable = function() {
            this.inputElement_.disabled = !0, this.updateClasses_()
        }, o.prototype.enable = function() {
            this.inputElement_.disabled = !1, this.updateClasses_()
        }, o.prototype.check = function() {
            this.inputElement_.checked = !0, this.updateClasses_()
        }, o.prototype.uncheck = function() {
            this.inputElement_.checked = !1, this.updateClasses_()
        }, o.prototype.init = function() {
            if (this.element_) {
                this.inputElement_ = this.element_.querySelector("." + this.CssClasses_.INPUT);
                var e = document.createElement("span");
                e.classList.add(this.CssClasses_.BOX_OUTLINE);
                var t = document.createElement("span");
                t.classList.add(this.CssClasses_.FOCUS_HELPER);
                var n = document.createElement("span");
                if (n.classList.add(this.CssClasses_.TICK_OUTLINE), e.appendChild(n), this.element_.appendChild(t), this.element_.appendChild(e), this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
                    this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), this.rippleContainerElement_ = document.createElement("span"), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER), this.boundRippleMouseUp = this.onMouseUp_.bind(this), this.rippleContainerElement_.addEventListener("mouseup", this.boundRippleMouseUp);
                    var i = document.createElement("span");
                    i.classList.add(this.CssClasses_.RIPPLE), this.rippleContainerElement_.appendChild(i), this.element_.appendChild(this.rippleContainerElement_)
                }
                this.boundInputOnChange = this.onChange_.bind(this), this.boundInputOnFocus = this.onFocus_.bind(this), this.boundInputOnBlur = this.onBlur_.bind(this), this.boundElementMouseUp = this.onMouseUp_.bind(this), this.inputElement_.addEventListener("change", this.boundInputOnChange), this.inputElement_.addEventListener("focus", this.boundInputOnFocus), this.inputElement_.addEventListener("blur", this.boundInputOnBlur), this.element_.addEventListener("mouseup", this.boundElementMouseUp), this.updateClasses_(), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
            }
        }, o.prototype.mdlDowngrade_ = function() {
            this.rippleContainerElement_ && this.rippleContainerElement_.removeEventListener("mouseup", this.boundRippleMouseUp), this.inputElement_.removeEventListener("change", this.boundInputOnChange), this.inputElement_.removeEventListener("focus", this.boundInputOnFocus), this.inputElement_.removeEventListener("blur", this.boundInputOnBlur), this.element_.removeEventListener("mouseup", this.boundElementMouseUp)
        }, componentHandler.register({
            constructor: o,
            classAsString: "MaterialCheckbox",
            cssClass: "mdl-js-checkbox",
            widget: !0
        });
        var l = function(e) {
            this.element_ = e, this.init()
        };
        window.MaterialIconToggle = l, l.prototype.Constant_ = {
            TINY_TIMEOUT: .001
        }, l.prototype.CssClasses_ = {
            INPUT: "mdl-icon-toggle__input",
            JS_RIPPLE_EFFECT: "mdl-js-ripple-effect",
            RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
            RIPPLE_CONTAINER: "mdl-icon-toggle__ripple-container",
            RIPPLE_CENTER: "mdl-ripple--center",
            RIPPLE: "mdl-ripple",
            IS_FOCUSED: "is-focused",
            IS_DISABLED: "is-disabled",
            IS_CHECKED: "is-checked"
        }, l.prototype.onChange_ = function(e) {
            this.updateClasses_()
        }, l.prototype.onFocus_ = function(e) {
            this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
        }, l.prototype.onBlur_ = function(e) {
            this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
        }, l.prototype.onMouseUp_ = function(e) {
            this.blur_()
        }, l.prototype.updateClasses_ = function() {
            this.checkDisabled(), this.checkToggleState()
        }, l.prototype.blur_ = function(e) {
            window.setTimeout(function() {
                this.inputElement_.blur()
            }.bind(this), this.Constant_.TINY_TIMEOUT)
        }, l.prototype.checkToggleState = function() {
            this.inputElement_.checked ? this.element_.classList.add(this.CssClasses_.IS_CHECKED) : this.element_.classList.remove(this.CssClasses_.IS_CHECKED)
        }, l.prototype.checkDisabled = function() {
            this.inputElement_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
        }, l.prototype.disable = function() {
            this.inputElement_.disabled = !0, this.updateClasses_()
        }, l.prototype.enable = function() {
            this.inputElement_.disabled = !1, this.updateClasses_()
        }, l.prototype.check = function() {
            this.inputElement_.checked = !0, this.updateClasses_()
        }, l.prototype.uncheck = function() {
            this.inputElement_.checked = !1, this.updateClasses_()
        }, l.prototype.init = function() {
            if (this.element_) {
                if (this.inputElement_ = this.element_.querySelector("." + this.CssClasses_.INPUT), this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)) {
                    this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), this.rippleContainerElement_ = document.createElement("span"), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER), this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER), this.boundRippleMouseUp = this.onMouseUp_.bind(this), this.rippleContainerElement_.addEventListener("mouseup", this.boundRippleMouseUp);
                    var e = document.createElement("span");
                    e.classList.add(this.CssClasses_.RIPPLE), this.rippleContainerElement_.appendChild(e), this.element_.appendChild(this.rippleContainerElement_)
                }
                this.boundInputOnChange = this.onChange_.bind(this), this.boundInputOnFocus = this.onFocus_.bind(this), this.boundInputOnBlur = this.onBlur_.bind(this), this.boundElementOnMouseUp = this.onMouseUp_.bind(this), this.inputElement_.addEventListener("change", this.boundInputOnChange), this.inputElement_.addEventListener("focus", this.boundInputOnFocus), this.inputElement_.addEventListener("blur", this.boundInputOnBlur), this.element_.addEventListener("mouseup", this.boundElementOnMouseUp), this.updateClasses_(), this.element_.classList.add("is-upgraded")
            }
        }, l.prototype.mdlDowngrade_ = function() {
            this.rippleContainerElement_ && this.rippleContainerElement_.removeEventListener("mouseup", this.boundRippleMouseUp), this.inputElement_.removeEventListener("change", this.boundInputOnChange), this.inputElement_.removeEventListener("focus", this.boundInputOnFocus), this.inputElement_.removeEventListener("blur", this.boundInputOnBlur), this.element_.removeEventListener("mouseup", this.boundElementOnMouseUp)
        }, componentHandler.register({
            constructor: l,
            classAsString: "MaterialIconToggle",
            cssClass: "mdl-js-icon-toggle",
            widget: !0
        });
        var d = function(e) {
            this.element_ = e, this.init()
        };
        window.MaterialMenu = d, d.prototype.Constant_ = {
            TRANSITION_DURATION_SECONDS: .3,
            TRANSITION_DURATION_FRACTION: .8,
            CLOSE_TIMEOUT: 150
        }, d.prototype.Keycodes_ = {
            ENTER: 13,
            ESCAPE: 27,
            SPACE: 32,
            UP_ARROW: 38,
            DOWN_ARROW: 40
        }, d.prototype.CssClasses_ = {
            CONTAINER: "mdl-menu__container",
            OUTLINE: "mdl-menu__outline",
            ITEM: "mdl-menu__item",
            ITEM_RIPPLE_CONTAINER: "mdl-menu__item-ripple-container",
            RIPPLE_EFFECT: "mdl-js-ripple-effect",
            RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
            RIPPLE: "mdl-ripple",
            IS_UPGRADED: "is-upgraded",
            IS_VISIBLE: "is-visible",
            IS_ANIMATING: "is-animating",
            BOTTOM_LEFT: "mdl-menu--bottom-left",
            BOTTOM_RIGHT: "mdl-menu--bottom-right",
            TOP_LEFT: "mdl-menu--top-left",
            TOP_RIGHT: "mdl-menu--top-right",
            UNALIGNED: "mdl-menu--unaligned"
        }, d.prototype.init = function() {
            if (this.element_) {
                var e = document.createElement("div");
                e.classList.add(this.CssClasses_.CONTAINER), this.element_.parentElement.insertBefore(e, this.element_), this.element_.parentElement.removeChild(this.element_), e.appendChild(this.element_), this.container_ = e;
                var t = document.createElement("div");
                t.classList.add(this.CssClasses_.OUTLINE), this.outline_ = t, e.insertBefore(t, this.element_);
                var n = this.element_.getAttribute("for"),
                    i = null;
                n && (i = document.getElementById(n), i && (this.forElement_ = i, i.addEventListener("click", this.handleForClick_.bind(this)), i.addEventListener("keydown", this.handleForKeyboardEvent_.bind(this))));
                var s = this.element_.querySelectorAll("." + this.CssClasses_.ITEM);
                this.boundItemKeydown = this.handleItemKeyboardEvent_.bind(this), this.boundItemClick = this.handleItemClick_.bind(this);
                for (var r = 0; r < s.length; r++) s[r].addEventListener("click", this.boundItemClick), s[r].tabIndex = "-1", s[r].addEventListener("keydown", this.boundItemKeydown);
                if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT))
                    for (this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), r = 0; r < s.length; r++) {
                        var a = s[r],
                            o = document.createElement("span");
                        o.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);
                        var l = document.createElement("span");
                        l.classList.add(this.CssClasses_.RIPPLE), o.appendChild(l), a.appendChild(o), a.classList.add(this.CssClasses_.RIPPLE_EFFECT)
                    }
                this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT) && this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT), this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT) && this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT), this.element_.classList.contains(this.CssClasses_.TOP_LEFT) && this.outline_.classList.add(this.CssClasses_.TOP_LEFT), this.element_.classList.contains(this.CssClasses_.TOP_RIGHT) && this.outline_.classList.add(this.CssClasses_.TOP_RIGHT), this.element_.classList.contains(this.CssClasses_.UNALIGNED) && this.outline_.classList.add(this.CssClasses_.UNALIGNED), e.classList.add(this.CssClasses_.IS_UPGRADED)
            }
        }, d.prototype.handleForClick_ = function(e) {
            if (this.element_ && this.forElement_) {
                var t = this.forElement_.getBoundingClientRect(),
                    n = this.forElement_.parentElement.getBoundingClientRect();
                this.element_.classList.contains(this.CssClasses_.UNALIGNED) || (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT) ? (this.container_.style.right = n.right - t.right + "px", this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + "px") : this.element_.classList.contains(this.CssClasses_.TOP_LEFT) ? (this.container_.style.left = this.forElement_.offsetLeft + "px", this.container_.style.bottom = n.bottom - t.top + "px") : this.element_.classList.contains(this.CssClasses_.TOP_RIGHT) ? (this.container_.style.right = n.right - t.right + "px", this.container_.style.bottom = n.bottom - t.top + "px") : (this.container_.style.left = this.forElement_.offsetLeft + "px", this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + "px"))
            }
            this.toggle(e)
        }, d.prototype.handleForKeyboardEvent_ = function(e) {
            if (this.element_ && this.container_ && this.forElement_) {
                var t = this.element_.querySelectorAll("." + this.CssClasses_.ITEM + ":not([disabled])");
                t && t.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE) && (e.keyCode === this.Keycodes_.UP_ARROW ? (e.preventDefault(), t[t.length - 1].focus()) : e.keyCode === this.Keycodes_.DOWN_ARROW && (e.preventDefault(), t[0].focus()))
            }
        }, d.prototype.handleItemKeyboardEvent_ = function(e) {
            if (this.element_ && this.container_) {
                var t = this.element_.querySelectorAll("." + this.CssClasses_.ITEM + ":not([disabled])");
                if (t && t.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
                    var n = Array.prototype.slice.call(t).indexOf(e.target);
                    if (e.keyCode === this.Keycodes_.UP_ARROW) e.preventDefault(), n > 0 ? t[n - 1].focus() : t[t.length - 1].focus();
                    else if (e.keyCode === this.Keycodes_.DOWN_ARROW) e.preventDefault(), t.length > n + 1 ? t[n + 1].focus() : t[0].focus();
                    else if (e.keyCode === this.Keycodes_.SPACE || e.keyCode === this.Keycodes_.ENTER) {
                        e.preventDefault();
                        var i = new MouseEvent("mousedown");
                        e.target.dispatchEvent(i), i = new MouseEvent("mouseup"), e.target.dispatchEvent(i), e.target.click()
                    } else e.keyCode === this.Keycodes_.ESCAPE && (e.preventDefault(), this.hide())
                }
            }
        }, d.prototype.handleItemClick_ = function(e) {
            null !== e.target.getAttribute("disabled") ? e.stopPropagation() : (this.closing_ = !0, window.setTimeout(function(e) {
                this.hide(), this.closing_ = !1
            }.bind(this), this.Constant_.CLOSE_TIMEOUT))
        }, d.prototype.applyClip_ = function(e, t) {
            this.element_.style.clip = this.element_.classList.contains(this.CssClasses_.UNALIGNED) ? null : this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT) ? "rect(0 " + t + "px 0 " + t + "px)" : this.element_.classList.contains(this.CssClasses_.TOP_LEFT) ? "rect(" + e + "px 0 " + e + "px 0)" : this.element_.classList.contains(this.CssClasses_.TOP_RIGHT) ? "rect(" + e + "px " + t + "px " + e + "px " + t + "px)" : null
        }, d.prototype.addAnimationEndListener_ = function() {
            var e = function() {
                this.element_.removeEventListener("transitionend", e), this.element_.removeEventListener("webkitTransitionEnd", e), this.element_.classList.remove(this.CssClasses_.IS_ANIMATING)
            }.bind(this);
            this.element_.addEventListener("transitionend", e), this.element_.addEventListener("webkitTransitionEnd", e)
        }, d.prototype.show = function(e) {
            if (this.element_ && this.container_ && this.outline_) {
                var t = this.element_.getBoundingClientRect().height,
                    n = this.element_.getBoundingClientRect().width;
                this.container_.style.width = n + "px", this.container_.style.height = t + "px", this.outline_.style.width = n + "px", this.outline_.style.height = t + "px";
                for (var i = this.Constant_.TRANSITION_DURATION_SECONDS * this.Constant_.TRANSITION_DURATION_FRACTION, s = this.element_.querySelectorAll("." + this.CssClasses_.ITEM), r = 0; r < s.length; r++) {
                    var a = null;
                    a = this.element_.classList.contains(this.CssClasses_.TOP_LEFT) || this.element_.classList.contains(this.CssClasses_.TOP_RIGHT) ? (t - s[r].offsetTop - s[r].offsetHeight) / t * i + "s" : s[r].offsetTop / t * i + "s", s[r].style.transitionDelay = a
                }
                this.applyClip_(t, n), window.requestAnimationFrame(function() {
                    this.element_.classList.add(this.CssClasses_.IS_ANIMATING), this.element_.style.clip = "rect(0 " + n + "px " + t + "px 0)", this.container_.classList.add(this.CssClasses_.IS_VISIBLE)
                }.bind(this)), this.addAnimationEndListener_();
                var o = function(t) {
                    t === e || this.closing_ || (document.removeEventListener("click", o), this.hide())
                }.bind(this);
                document.addEventListener("click", o)
            }
        }, d.prototype.hide = function() {
            if (this.element_ && this.container_ && this.outline_) {
                for (var e = this.element_.querySelectorAll("." + this.CssClasses_.ITEM), t = 0; t < e.length; t++) e[t].style.transitionDelay = null;
                var n = this.element_.getBoundingClientRect().height,
                    i = this.element_.getBoundingClientRect().width;
                this.element_.classList.add(this.CssClasses_.IS_ANIMATING), this.applyClip_(n, i), this.container_.classList.remove(this.CssClasses_.IS_VISIBLE), this.addAnimationEndListener_()
            }
        }, d.prototype.toggle = function(e) {
            this.container_.classList.contains(this.CssClasses_.IS_VISIBLE) ? this.hide() : this.show(e)
        }, d.prototype.mdlDowngrade_ = function() {
            for (var e = this.element_.querySelectorAll("." + this.CssClasses_.ITEM), t = 0; t < e.length; t++) e[t].removeEventListener("click", this.boundItemClick), e[t].removeEventListener("keydown", this.boundItemKeydown)
        }, componentHandler.register({
            constructor: d,
            classAsString: "MaterialMenu",
            cssClass: "mdl-js-menu",
            widget: !0
        });
        var u = function(e) {
            this.element_ = e, this.init()
        };
        window.MaterialProgress = u, u.prototype.Constant_ = {}, u.prototype.CssClasses_ = {
            INDETERMINATE_CLASS: "mdl-progress__indeterminate"
        }, u.prototype.setProgress = function(e) {
            this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS) || (this.progressbar_.style.width = e + "%")
        }, u.prototype.setBuffer = function(e) {
            this.bufferbar_.style.width = e + "%", this.auxbar_.style.width = 100 - e + "%"
        }, u.prototype.init = function() {
            if (this.element_) {
                var e = document.createElement("div");
                e.className = "progressbar bar bar1", this.element_.appendChild(e), this.progressbar_ = e, e = document.createElement("div"), e.className = "bufferbar bar bar2", this.element_.appendChild(e), this.bufferbar_ = e, e = document.createElement("div"), e.className = "auxbar bar bar3", this.element_.appendChild(e), this.auxbar_ = e, this.progressbar_.style.width = "0%", this.bufferbar_.style.width = "100%", this.auxbar_.style.width = "0%", this.element_.classList.add("is-upgraded")
            }
        }, u.prototype.mdlDowngrade_ = function() {
            for (; this.element_.firstChild;) this.element_.removeChild(this.element_.firstChild)
        }, componentHandler.register({
            constructor: u,
            classAsString: "MaterialProgress",
            cssClass: "mdl-js-progress",
            widget: !0
        });
        var c = function(e) {
            this.element_ = e, this.init()
        };
        window.MaterialRadio = c, c.prototype.Constant_ = {
            TINY_TIMEOUT: .001
        }, c.prototype.CssClasses_ = {
            IS_FOCUSED: "is-focused",
            IS_DISABLED: "is-disabled",
            IS_CHECKED: "is-checked",
            IS_UPGRADED: "is-upgraded",
            JS_RADIO: "mdl-js-radio",
            RADIO_BTN: "mdl-radio__button",
            RADIO_OUTER_CIRCLE: "mdl-radio__outer-circle",
            RADIO_INNER_CIRCLE: "mdl-radio__inner-circle",
            RIPPLE_EFFECT: "mdl-js-ripple-effect",
            RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
            RIPPLE_CONTAINER: "mdl-radio__ripple-container",
            RIPPLE_CENTER: "mdl-ripple--center",
            RIPPLE: "mdl-ripple"
        }, c.prototype.onChange_ = function(e) {
            for (var t = document.getElementsByClassName(this.CssClasses_.JS_RADIO), n = 0; n < t.length; n++) {
                var i = t[n].querySelector("." + this.CssClasses_.RADIO_BTN);
                i.getAttribute("name") === this.btnElement_.getAttribute("name") && t[n].MaterialRadio.updateClasses_()
            }
        }, c.prototype.onFocus_ = function(e) {
            this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
        }, c.prototype.onBlur_ = function(e) {
            this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
        }, c.prototype.onMouseup_ = function(e) {
            this.blur_()
        }, c.prototype.updateClasses_ = function() {
            this.checkDisabled(), this.checkToggleState()
        }, c.prototype.blur_ = function(e) {
            window.setTimeout(function() {
                this.btnElement_.blur()
            }.bind(this), this.Constant_.TINY_TIMEOUT)
        }, c.prototype.checkDisabled = function() {
            this.btnElement_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
        }, c.prototype.checkToggleState = function() {
            this.btnElement_.checked ? this.element_.classList.add(this.CssClasses_.IS_CHECKED) : this.element_.classList.remove(this.CssClasses_.IS_CHECKED)
        }, c.prototype.disable = function() {
            this.btnElement_.disabled = !0, this.updateClasses_()
        }, c.prototype.enable = function() {
            this.btnElement_.disabled = !1, this.updateClasses_()
        }, c.prototype.check = function() {
            this.btnElement_.checked = !0, this.updateClasses_()
        }, c.prototype.uncheck = function() {
            this.btnElement_.checked = !1, this.updateClasses_()
        }, c.prototype.init = function() {
            if (this.element_) {
                this.btnElement_ = this.element_.querySelector("." + this.CssClasses_.RADIO_BTN);
                var e = document.createElement("span");
                e.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);
                var t = document.createElement("span");
                t.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE), this.element_.appendChild(e), this.element_.appendChild(t);
                var n;
                if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
                    this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), n = document.createElement("span"), n.classList.add(this.CssClasses_.RIPPLE_CONTAINER), n.classList.add(this.CssClasses_.RIPPLE_EFFECT), n.classList.add(this.CssClasses_.RIPPLE_CENTER), n.addEventListener("mouseup", this.onMouseup_.bind(this));
                    var i = document.createElement("span");
                    i.classList.add(this.CssClasses_.RIPPLE), n.appendChild(i), this.element_.appendChild(n)
                }
                this.btnElement_.addEventListener("change", this.onChange_.bind(this)), this.btnElement_.addEventListener("focus", this.onFocus_.bind(this)), this.btnElement_.addEventListener("blur", this.onBlur_.bind(this)), this.element_.addEventListener("mouseup", this.onMouseup_.bind(this)), this.updateClasses_(), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
            }
        }, componentHandler.register({
            constructor: c,
            classAsString: "MaterialRadio",
            cssClass: "mdl-js-radio",
            widget: !0
        });
        var h = function(e) {
            this.element_ = e, this.isIE_ = window.navigator.msPointerEnabled, this.init()
        };
        window.MaterialSlider = h, h.prototype.Constant_ = {}, h.prototype.CssClasses_ = {
            IE_CONTAINER: "mdl-slider__ie-container",
            SLIDER_CONTAINER: "mdl-slider__container",
            BACKGROUND_FLEX: "mdl-slider__background-flex",
            BACKGROUND_LOWER: "mdl-slider__background-lower",
            BACKGROUND_UPPER: "mdl-slider__background-upper",
            IS_LOWEST_VALUE: "is-lowest-value",
            IS_UPGRADED: "is-upgraded"
        }, h.prototype.onInput_ = function(e) {
            this.updateValueStyles_()
        }, h.prototype.onChange_ = function(e) {
            this.updateValueStyles_()
        }, h.prototype.onMouseUp_ = function(e) {
            e.target.blur()
        }, h.prototype.onContainerMouseDown_ = function(e) {
            if (e.target === this.element_.parentElement) {
                e.preventDefault();
                var t = new MouseEvent("mousedown", {
                    target: e.target,
                    buttons: e.buttons,
                    clientX: e.clientX,
                    clientY: this.element_.getBoundingClientRect().y
                });
                this.element_.dispatchEvent(t)
            }
        }, h.prototype.updateValueStyles_ = function(e) {
            var t = (this.element_.value - this.element_.min) / (this.element_.max - this.element_.min);
            0 === t ? this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE) : this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE), this.isIE_ || (this.backgroundLower_.style.flex = t, this.backgroundLower_.style.webkitFlex = t, this.backgroundUpper_.style.flex = 1 - t, this.backgroundUpper_.style.webkitFlex = 1 - t)
        }, h.prototype.disable = function() {
            this.element_.disabled = !0
        }, h.prototype.enable = function() {
            this.element_.disabled = !1
        }, h.prototype.change = function(e) {
            "undefined" != typeof e && (this.element_.value = e), this.updateValueStyles_()
        }, h.prototype.init = function() {
            if (this.element_) {
                if (this.isIE_) {
                    var e = document.createElement("div");
                    e.classList.add(this.CssClasses_.IE_CONTAINER), this.element_.parentElement.insertBefore(e, this.element_), this.element_.parentElement.removeChild(this.element_), e.appendChild(this.element_)
                } else {
                    var t = document.createElement("div");
                    t.classList.add(this.CssClasses_.SLIDER_CONTAINER), this.element_.parentElement.insertBefore(t, this.element_), this.element_.parentElement.removeChild(this.element_), t.appendChild(this.element_);
                    var n = document.createElement("div");
                    n.classList.add(this.CssClasses_.BACKGROUND_FLEX), t.appendChild(n), this.backgroundLower_ = document.createElement("div"), this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER), n.appendChild(this.backgroundLower_), this.backgroundUpper_ = document.createElement("div"), this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER), n.appendChild(this.backgroundUpper_)
                }
                this.boundInputHandler = this.onInput_.bind(this), this.boundChangeHandler = this.onChange_.bind(this), this.boundMouseUpHandler = this.onMouseUp_.bind(this), this.boundContainerMouseDownHandler = this.onContainerMouseDown_.bind(this), this.element_.addEventListener("input", this.boundInputHandler), this.element_.addEventListener("change", this.boundChangeHandler), this.element_.addEventListener("mouseup", this.boundMouseUpHandler), this.element_.parentElement.addEventListener("mousedown", this.boundContainerMouseDownHandler), this.updateValueStyles_(), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
            }
        }, h.prototype.mdlDowngrade_ = function() {
            this.element_.removeEventListener("input", this.boundInputHandler), this.element_.removeEventListener("change", this.boundChangeHandler), this.element_.removeEventListener("mouseup", this.boundMouseUpHandler), this.element_.parentElement.removeEventListener("mousedown", this.boundContainerMouseDownHandler)
        }, componentHandler.register({
            constructor: h,
            classAsString: "MaterialSlider",
            cssClass: "mdl-js-slider",
            widget: !0
        });
        var p = function(e) {
            this.element_ = e, this.init()
        };
        window.MaterialSpinner = p, p.prototype.Constant_ = {
            MDL_SPINNER_LAYER_COUNT: 4
        }, p.prototype.CssClasses_ = {
            MDL_SPINNER_LAYER: "mdl-spinner__layer",
            MDL_SPINNER_CIRCLE_CLIPPER: "mdl-spinner__circle-clipper",
            MDL_SPINNER_CIRCLE: "mdl-spinner__circle",
            MDL_SPINNER_GAP_PATCH: "mdl-spinner__gap-patch",
            MDL_SPINNER_LEFT: "mdl-spinner__left",
            MDL_SPINNER_RIGHT: "mdl-spinner__right"
        }, p.prototype.createLayer = function(e) {
            var t = document.createElement("div");
            t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER), t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER + "-" + e);
            var n = document.createElement("div");
            n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER), n.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);
            var i = document.createElement("div");
            i.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);
            var s = document.createElement("div");
            s.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER), s.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);
            for (var r = [n, i, s], a = 0; a < r.length; a++) {
                var o = document.createElement("div");
                o.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE), r[a].appendChild(o)
            }
            t.appendChild(n), t.appendChild(i), t.appendChild(s), this.element_.appendChild(t)
        }, p.prototype.stop = function() {
            this.element_.classList.remove("is-active")
        }, p.prototype.start = function() {
            this.element_.classList.add("is-active")
        }, p.prototype.init = function() {
            if (this.element_) {
                for (var e = 1; e <= this.Constant_.MDL_SPINNER_LAYER_COUNT; e++) this.createLayer(e);
                this.element_.classList.add("is-upgraded")
            }
        }, componentHandler.register({
            constructor: p,
            classAsString: "MaterialSpinner",
            cssClass: "mdl-js-spinner",
            widget: !0
        });
        var f = function(e) {
            this.element_ = e, this.init()
        };
        window.MaterialSwitch = f, f.prototype.Constant_ = {
            TINY_TIMEOUT: .001
        }, f.prototype.CssClasses_ = {
            INPUT: "mdl-switch__input",
            TRACK: "mdl-switch__track",
            THUMB: "mdl-switch__thumb",
            FOCUS_HELPER: "mdl-switch__focus-helper",
            RIPPLE_EFFECT: "mdl-js-ripple-effect",
            RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
            RIPPLE_CONTAINER: "mdl-switch__ripple-container",
            RIPPLE_CENTER: "mdl-ripple--center",
            RIPPLE: "mdl-ripple",
            IS_FOCUSED: "is-focused",
            IS_DISABLED: "is-disabled",
            IS_CHECKED: "is-checked"
        }, f.prototype.onChange_ = function(e) {
            this.updateClasses_()
        }, f.prototype.onFocus_ = function(e) {
            this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
        }, f.prototype.onBlur_ = function(e) {
            this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
        }, f.prototype.onMouseUp_ = function(e) {
            this.blur_()
        }, f.prototype.updateClasses_ = function() {
            this.checkDisabled(), this.checkToggleState()
        }, f.prototype.blur_ = function(e) {
            window.setTimeout(function() {
                this.inputElement_.blur()
            }.bind(this), this.Constant_.TINY_TIMEOUT)
        }, f.prototype.checkDisabled = function() {
            this.inputElement_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
        }, f.prototype.checkToggleState = function() {
            this.inputElement_.checked ? this.element_.classList.add(this.CssClasses_.IS_CHECKED) : this.element_.classList.remove(this.CssClasses_.IS_CHECKED)
        }, f.prototype.disable = function() {
            this.inputElement_.disabled = !0, this.updateClasses_()
        }, f.prototype.enable = function() {
            this.inputElement_.disabled = !1, this.updateClasses_()
        }, f.prototype.on = function() {
            this.inputElement_.checked = !0, this.updateClasses_()
        }, f.prototype.off = function() {
            this.inputElement_.checked = !1, this.updateClasses_()
        }, f.prototype.init = function() {
            if (this.element_) {
                this.inputElement_ = this.element_.querySelector("." + this.CssClasses_.INPUT);
                var e = document.createElement("div");
                e.classList.add(this.CssClasses_.TRACK);
                var t = document.createElement("div");
                t.classList.add(this.CssClasses_.THUMB);
                var n = document.createElement("span");
                if (n.classList.add(this.CssClasses_.FOCUS_HELPER), t.appendChild(n), this.element_.appendChild(e), this.element_.appendChild(t), this.boundMouseUpHandler = this.onMouseUp_.bind(this), this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
                    this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), this.rippleContainerElement_ = document.createElement("span"), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER), this.rippleContainerElement_.addEventListener("mouseup", this.boundMouseUpHandler);
                    var i = document.createElement("span");
                    i.classList.add(this.CssClasses_.RIPPLE), this.rippleContainerElement_.appendChild(i), this.element_.appendChild(this.rippleContainerElement_)
                }
                this.boundChangeHandler = this.onChange_.bind(this), this.boundFocusHandler = this.onFocus_.bind(this), this.boundBlurHandler = this.onBlur_.bind(this), this.inputElement_.addEventListener("change", this.boundChangeHandler), this.inputElement_.addEventListener("focus", this.boundFocusHandler), this.inputElement_.addEventListener("blur", this.boundBlurHandler), this.element_.addEventListener("mouseup", this.boundMouseUpHandler), this.updateClasses_(), this.element_.classList.add("is-upgraded")
            }
        }, f.prototype.mdlDowngrade_ = function() {
            this.rippleContainerElement_ && this.rippleContainerElement_.removeEventListener("mouseup", this.boundMouseUpHandler), this.inputElement_.removeEventListener("change", this.boundChangeHandler), this.inputElement_.removeEventListener("focus", this.boundFocusHandler), this.inputElement_.removeEventListener("blur", this.boundBlurHandler), this.element_.removeEventListener("mouseup", this.boundMouseUpHandler)
        }, componentHandler.register({
            constructor: f,
            classAsString: "MaterialSwitch",
            cssClass: "mdl-js-switch",
            widget: !0
        });
        var m = function(e) {
            this.element_ = e, this.init()
        };
        window.MaterialTabs = m, m.prototype.Constant_ = {}, m.prototype.CssClasses_ = {
            TAB_CLASS: "mdl-tabs__tab",
            PANEL_CLASS: "mdl-tabs__panel",
            ACTIVE_CLASS: "is-active",
            UPGRADED_CLASS: "is-upgraded",
            MDL_JS_RIPPLE_EFFECT: "mdl-js-ripple-effect",
            MDL_RIPPLE_CONTAINER: "mdl-tabs__ripple-container",
            MDL_RIPPLE: "mdl-ripple",
            MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events"
        }, m.prototype.initTabs_ = function() {
            this.element_.classList.contains(this.CssClasses_.MDL_JS_RIPPLE_EFFECT) && this.element_.classList.add(this.CssClasses_.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS), this.tabs_ = this.element_.querySelectorAll("." + this.CssClasses_.TAB_CLASS), this.panels_ = this.element_.querySelectorAll("." + this.CssClasses_.PANEL_CLASS);
            for (var t = 0; t < this.tabs_.length; t++) new e(this.tabs_[t], this);
            this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS)
        }, m.prototype.resetTabState_ = function() {
            for (var e = 0; e < this.tabs_.length; e++) this.tabs_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)
        }, m.prototype.resetPanelState_ = function() {
            for (var e = 0; e < this.panels_.length; e++) this.panels_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)
        }, m.prototype.init = function() {
            this.element_ && this.initTabs_()
        }, componentHandler.register({
            constructor: m,
            classAsString: "MaterialTabs",
            cssClass: "mdl-js-tabs"
        });
        var g = function(e) {
            this.element_ = e, this.maxRows = this.Constant_.NO_MAX_ROWS, this.init()
        };
        window.MaterialTextfield = g, g.prototype.Constant_ = {
            NO_MAX_ROWS: -1,
            MAX_ROWS_ATTRIBUTE: "maxrows"
        }, g.prototype.CssClasses_ = {
            LABEL: "mdl-textfield__label",
            INPUT: "mdl-textfield__input",
            IS_DIRTY: "is-dirty",
            IS_FOCUSED: "is-focused",
            IS_DISABLED: "is-disabled",
            IS_INVALID: "is-invalid",
            IS_UPGRADED: "is-upgraded"
        }, g.prototype.onKeyDown_ = function(e) {
            var t = e.target.value.split("\n").length;
            13 === e.keyCode && t >= this.maxRows && e.preventDefault()
        }, g.prototype.onFocus_ = function(e) {
            this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
        }, g.prototype.onBlur_ = function(e) {
            this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
        }, g.prototype.updateClasses_ = function() {
            this.checkDisabled(), this.checkValidity(), this.checkDirty()
        }, g.prototype.checkDisabled = function() {
            this.input_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
        }, g.prototype.checkValidity = function() {
            this.input_.validity.valid ? this.element_.classList.remove(this.CssClasses_.IS_INVALID) : this.element_.classList.add(this.CssClasses_.IS_INVALID)
        }, g.prototype.checkDirty = function() {
            this.input_.value && this.input_.value.length > 0 ? this.element_.classList.add(this.CssClasses_.IS_DIRTY) : this.element_.classList.remove(this.CssClasses_.IS_DIRTY)
        }, g.prototype.disable = function() {
            this.input_.disabled = !0, this.updateClasses_()
        }, g.prototype.enable = function() {
            this.input_.disabled = !1, this.updateClasses_()
        }, g.prototype.change = function(e) {
            e && (this.input_.value = e), this.updateClasses_()
        }, g.prototype.init = function() {
            this.element_ && (this.label_ = this.element_.querySelector("." + this.CssClasses_.LABEL), this.input_ = this.element_.querySelector("." + this.CssClasses_.INPUT), this.input_ && (this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE) && (this.maxRows = parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE), 10), isNaN(this.maxRows) && (this.maxRows = this.Constant_.NO_MAX_ROWS)), this.boundUpdateClassesHandler = this.updateClasses_.bind(this), this.boundFocusHandler = this.onFocus_.bind(this), this.boundBlurHandler = this.onBlur_.bind(this), this.input_.addEventListener("input", this.boundUpdateClassesHandler), this.input_.addEventListener("focus", this.boundFocusHandler), this.input_.addEventListener("blur", this.boundBlurHandler), this.maxRows !== this.Constant_.NO_MAX_ROWS && (this.boundKeyDownHandler = this.onKeyDown_.bind(this), this.input_.addEventListener("keydown", this.boundKeyDownHandler)), this.updateClasses_(), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)))
        }, g.prototype.mdlDowngrade_ = function() {
            this.input_.removeEventListener("input", this.boundUpdateClassesHandler), this.input_.removeEventListener("focus", this.boundFocusHandler), this.input_.removeEventListener("blur", this.boundBlurHandler), this.boundKeyDownHandler && this.input_.removeEventListener("keydown", this.boundKeyDownHandler)
        }, componentHandler.register({
            constructor: g,
            classAsString: "MaterialTextfield",
            cssClass: "mdl-js-textfield",
            widget: !0
        });
        var v = function(e) {
            this.element_ = e, this.init()
        };
        window.MaterialTooltip = v, v.prototype.Constant_ = {}, v.prototype.CssClasses_ = {
            IS_ACTIVE: "is-active"
        }, v.prototype.handleMouseEnter_ = function(e) {
            e.stopPropagation();
            var t = e.target.getBoundingClientRect(),
                n = t.left + t.width / 2,
                i = -1 * (this.element_.offsetWidth / 2);
            0 > n + i ? (this.element_.style.left = 0, this.element_.style.marginLeft = 0) : (this.element_.style.left = n + "px", this.element_.style.marginLeft = i + "px"), this.element_.style.top = t.top + t.height + 10 + "px", this.element_.classList.add(this.CssClasses_.IS_ACTIVE), window.addEventListener("scroll", this.boundMouseLeaveHandler, !1), window.addEventListener("touchmove", this.boundMouseLeaveHandler, !1)
        }, v.prototype.handleMouseLeave_ = function(e) {
            e.stopPropagation(), this.element_.classList.remove(this.CssClasses_.IS_ACTIVE), window.removeEventListener("scroll", this.boundMouseLeaveHandler), window.removeEventListener("touchmove", this.boundMouseLeaveHandler, !1)
        }, v.prototype.init = function() {
            if (this.element_) {
                var e = this.element_.getAttribute("for");
                e && (this.forElement_ = document.getElementById(e)), this.forElement_ && (this.forElement_.getAttribute("tabindex") || this.forElement_.setAttribute("tabindex", "0"), this.boundMouseEnterHandler = this.handleMouseEnter_.bind(this), this.boundMouseLeaveHandler = this.handleMouseLeave_.bind(this), this.forElement_.addEventListener("mouseenter", this.boundMouseEnterHandler, !1), this.forElement_.addEventListener("click", this.boundMouseEnterHandler, !1), this.forElement_.addEventListener("blur", this.boundMouseLeaveHandler), this.forElement_.addEventListener("touchstart", this.boundMouseEnterHandler, !1), this.forElement_.addEventListener("mouseleave", this.boundMouseLeaveHandler))
            }
        }, v.prototype.mdlDowngrade_ = function() {
            this.forElement_ && (this.forElement_.removeEventListener("mouseenter", this.boundMouseEnterHandler, !1), this.forElement_.removeEventListener("click", this.boundMouseEnterHandler, !1), this.forElement_.removeEventListener("touchstart", this.boundMouseEnterHandler, !1), this.forElement_.removeEventListener("mouseleave", this.boundMouseLeaveHandler))
        }, componentHandler.register({
            constructor: v,
            classAsString: "MaterialTooltip",
            cssClass: "mdl-tooltip"
        });
        var _ = function(e) {
            this.element_ = e, this.init()
        };
        window.MaterialLayout = _, _.prototype.Constant_ = {
            MAX_WIDTH: "(max-width: 1024px)",
            TAB_SCROLL_PIXELS: 100,
            MENU_ICON: "menu",
            CHEVRON_LEFT: "chevron_left",
            CHEVRON_RIGHT: "chevron_right"
        }, _.prototype.Mode_ = {
            STANDARD: 0,
            SEAMED: 1,
            WATERFALL: 2,
            SCROLL: 3
        }, _.prototype.CssClasses_ = {
            CONTAINER: "mdl-layout__container",
            HEADER: "mdl-layout__header",
            DRAWER: "mdl-layout__drawer",
            CONTENT: "mdl-layout__content",
            DRAWER_BTN: "mdl-layout__drawer-button",
            ICON: "material-icons",
            JS_RIPPLE_EFFECT: "mdl-js-ripple-effect",
            RIPPLE_CONTAINER: "mdl-layout__tab-ripple-container",
            RIPPLE: "mdl-ripple",
            RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
            HEADER_SEAMED: "mdl-layout__header--seamed",
            HEADER_WATERFALL: "mdl-layout__header--waterfall",
            HEADER_SCROLL: "mdl-layout__header--scroll",
            FIXED_HEADER: "mdl-layout--fixed-header",
            OBFUSCATOR: "mdl-layout__obfuscator",
            TAB_BAR: "mdl-layout__tab-bar",
            TAB_CONTAINER: "mdl-layout__tab-bar-container",
            TAB: "mdl-layout__tab",
            TAB_BAR_BUTTON: "mdl-layout__tab-bar-button",
            TAB_BAR_LEFT_BUTTON: "mdl-layout__tab-bar-left-button",
            TAB_BAR_RIGHT_BUTTON: "mdl-layout__tab-bar-right-button",
            PANEL: "mdl-layout__tab-panel",
            HAS_DRAWER: "has-drawer",
            HAS_TABS: "has-tabs",
            HAS_SCROLLING_HEADER: "has-scrolling-header",
            CASTING_SHADOW: "is-casting-shadow",
            IS_COMPACT: "is-compact",
            IS_SMALL_SCREEN: "is-small-screen",
            IS_DRAWER_OPEN: "is-visible",
            IS_ACTIVE: "is-active",
            IS_UPGRADED: "is-upgraded",
            IS_ANIMATING: "is-animating",
            ON_LARGE_SCREEN: "mdl-layout--large-screen-only",
            ON_SMALL_SCREEN: "mdl-layout--small-screen-only"
        }, _.prototype.contentScrollHandler_ = function() {
            this.header_.classList.contains(this.CssClasses_.IS_ANIMATING) || (this.content_.scrollTop > 0 && !this.header_.classList.contains(this.CssClasses_.IS_COMPACT) ? (this.header_.classList.add(this.CssClasses_.CASTING_SHADOW), this.header_.classList.add(this.CssClasses_.IS_COMPACT), this.header_.classList.add(this.CssClasses_.IS_ANIMATING)) : this.content_.scrollTop <= 0 && this.header_.classList.contains(this.CssClasses_.IS_COMPACT) && (this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW), this.header_.classList.remove(this.CssClasses_.IS_COMPACT), this.header_.classList.add(this.CssClasses_.IS_ANIMATING)))
        }, _.prototype.screenSizeHandler_ = function() {
            this.screenSizeMediaQuery_.matches ? this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN) : (this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN), this.drawer_ && this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN))
        }, _.prototype.drawerToggleHandler_ = function() {
            this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN)
        }, _.prototype.headerTransitionEndHandler_ = function() {
            this.header_.classList.remove(this.CssClasses_.IS_ANIMATING)
        }, _.prototype.headerClickHandler_ = function() {
            this.header_.classList.contains(this.CssClasses_.IS_COMPACT) && (this.header_.classList.remove(this.CssClasses_.IS_COMPACT), this.header_.classList.add(this.CssClasses_.IS_ANIMATING))
        }, _.prototype.resetTabState_ = function(e) {
            for (var t = 0; t < e.length; t++) e[t].classList.remove(this.CssClasses_.IS_ACTIVE)
        }, _.prototype.resetPanelState_ = function(e) {
            for (var t = 0; t < e.length; t++) e[t].classList.remove(this.CssClasses_.IS_ACTIVE)
        }, _.prototype.init = function() {
            if (this.element_) {
                var e = document.createElement("div");
                e.classList.add(this.CssClasses_.CONTAINER), this.element_.parentElement.insertBefore(e, this.element_), this.element_.parentElement.removeChild(this.element_), e.appendChild(this.element_);
                for (var n = this.element_.childNodes, i = 0; i < n.length; i++) {
                    var s = n[i];
                    s.classList && s.classList.contains(this.CssClasses_.HEADER) && (this.header_ = s), s.classList && s.classList.contains(this.CssClasses_.DRAWER) && (this.drawer_ = s), s.classList && s.classList.contains(this.CssClasses_.CONTENT) && (this.content_ = s)
                }
                this.header_ && (this.tabBar_ = this.header_.querySelector("." + this.CssClasses_.TAB_BAR));
                var r = this.Mode_.STANDARD;
                this.screenSizeMediaQuery_ = window.matchMedia(this.Constant_.MAX_WIDTH), this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this)), this.screenSizeHandler_(), this.header_ && (this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED) ? r = this.Mode_.SEAMED : this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL) ? (r = this.Mode_.WATERFALL, this.header_.addEventListener("transitionend", this.headerTransitionEndHandler_.bind(this)), this.header_.addEventListener("click", this.headerClickHandler_.bind(this))) : this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL) && (r = this.Mode_.SCROLL, e.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER)), r === this.Mode_.STANDARD ? (this.header_.classList.add(this.CssClasses_.CASTING_SHADOW), this.tabBar_ && this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW)) : r === this.Mode_.SEAMED || r === this.Mode_.SCROLL ? (this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW), this.tabBar_ && this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW)) : r === this.Mode_.WATERFALL && (this.content_.addEventListener("scroll", this.contentScrollHandler_.bind(this)), this.contentScrollHandler_()));
                var a = function(e) {
                    e.preventDefault()
                };
                if (this.drawer_) {
                    var o = document.createElement("div");
                    o.classList.add(this.CssClasses_.DRAWER_BTN), this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN) ? o.classList.add(this.CssClasses_.ON_LARGE_SCREEN) : this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN) && o.classList.add(this.CssClasses_.ON_SMALL_SCREEN);
                    var l = document.createElement("i");
                    l.classList.add(this.CssClasses_.ICON), l.textContent = this.Constant_.MENU_ICON, o.appendChild(l), o.addEventListener("click", this.drawerToggleHandler_.bind(this)), this.element_.classList.add(this.CssClasses_.HAS_DRAWER), this.drawer_.addEventListener("mousewheel", a), this.element_.classList.contains(this.CssClasses_.FIXED_HEADER) ? this.header_.insertBefore(o, this.header_.firstChild) : this.element_.insertBefore(o, this.content_);
                    var d = document.createElement("div");
                    d.classList.add(this.CssClasses_.OBFUSCATOR), this.element_.appendChild(d), d.addEventListener("click", this.drawerToggleHandler_.bind(this)), d.addEventListener("mousewheel", a)
                }
                if (this.header_ && this.tabBar_) {
                    this.element_.classList.add(this.CssClasses_.HAS_TABS);
                    var u = document.createElement("div");
                    u.classList.add(this.CssClasses_.TAB_CONTAINER), this.header_.insertBefore(u, this.tabBar_), this.header_.removeChild(this.tabBar_);
                    var c = document.createElement("div");
                    c.classList.add(this.CssClasses_.TAB_BAR_BUTTON), c.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);
                    var h = document.createElement("i");
                    h.classList.add(this.CssClasses_.ICON), h.textContent = this.Constant_.CHEVRON_LEFT, c.appendChild(h), c.addEventListener("click", function() {
                        this.tabBar_.scrollLeft -= this.Constant_.TAB_SCROLL_PIXELS
                    }.bind(this));
                    var p = document.createElement("div");
                    p.classList.add(this.CssClasses_.TAB_BAR_BUTTON), p.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);
                    var f = document.createElement("i");
                    f.classList.add(this.CssClasses_.ICON), f.textContent = this.Constant_.CHEVRON_RIGHT, p.appendChild(f), p.addEventListener("click", function() {
                        this.tabBar_.scrollLeft += this.Constant_.TAB_SCROLL_PIXELS
                    }.bind(this)), u.appendChild(c), u.appendChild(this.tabBar_), u.appendChild(p);
                    var m = function() {
                        this.tabBar_.scrollLeft > 0 ? c.classList.add(this.CssClasses_.IS_ACTIVE) : c.classList.remove(this.CssClasses_.IS_ACTIVE), this.tabBar_.scrollLeft < this.tabBar_.scrollWidth - this.tabBar_.offsetWidth ? p.classList.add(this.CssClasses_.IS_ACTIVE) : p.classList.remove(this.CssClasses_.IS_ACTIVE)
                    }.bind(this);
                    this.tabBar_.addEventListener("scroll", m), m(), this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT) && this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
                    for (var g = this.tabBar_.querySelectorAll("." + this.CssClasses_.TAB), v = this.content_.querySelectorAll("." + this.CssClasses_.PANEL), _ = 0; _ < g.length; _++) new t(g[_], g, v, this)
                }
                this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
            }
        }, componentHandler.register({
            constructor: _,
            classAsString: "MaterialLayout",
            cssClass: "mdl-js-layout"
        });
        var y = function(e) {
            this.element_ = e, this.init()
        };
        window.MaterialDataTable = y, y.prototype.Constant_ = {}, y.prototype.CssClasses_ = {
            DATA_TABLE: "mdl-data-table",
            SELECTABLE: "mdl-data-table--selectable",
            IS_SELECTED: "is-selected",
            IS_UPGRADED: "is-upgraded"
        }, y.prototype.selectRow_ = function(e, t, n) {
            return t ? function() {
                e.checked ? t.classList.add(this.CssClasses_.IS_SELECTED) : t.classList.remove(this.CssClasses_.IS_SELECTED)
            }.bind(this) : n ? function() {
                var t, i;
                if (e.checked)
                    for (t = 0; t < n.length; t++) i = n[t].querySelector("td").querySelector(".mdl-checkbox"), i.MaterialCheckbox.check(), n[t].classList.add(this.CssClasses_.IS_SELECTED);
                else
                    for (t = 0; t < n.length; t++) i = n[t].querySelector("td").querySelector(".mdl-checkbox"), i.MaterialCheckbox.uncheck(), n[t].classList.remove(this.CssClasses_.IS_SELECTED)
            }.bind(this) : void 0
        }, y.prototype.createCheckbox_ = function(e, t) {
            var n = document.createElement("label");
            n.classList.add("mdl-checkbox"), n.classList.add("mdl-js-checkbox"), n.classList.add("mdl-js-ripple-effect"), n.classList.add("mdl-data-table__select");
            var i = document.createElement("input");
            return i.type = "checkbox", i.classList.add("mdl-checkbox__input"), e ? i.addEventListener("change", this.selectRow_(i, e)) : t && i.addEventListener("change", this.selectRow_(i, null, t)), n.appendChild(i), componentHandler.upgradeElement(n, "MaterialCheckbox"), n
        }, y.prototype.init = function() {
            if (this.element_) {
                var e = this.element_.querySelector("th"),
                    t = this.element_.querySelector("tbody").querySelectorAll("tr");
                if (this.element_.classList.contains(this.CssClasses_.SELECTABLE)) {
                    var n = document.createElement("th"),
                        i = this.createCheckbox_(null, t);
                    n.appendChild(i), e.parentElement.insertBefore(n, e);
                    for (var s = 0; s < t.length; s++) {
                        var r = t[s].querySelector("td");
                        if (r) {
                            var a = document.createElement("td"),
                                o = this.createCheckbox_(t[s]);
                            a.appendChild(o), t[s].insertBefore(a, r)
                        }
                    }
                }
                this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
            }
        }, componentHandler.register({
            constructor: y,
            classAsString: "MaterialDataTable",
            cssClass: "mdl-js-data-table"
        });
        var b = function(e) {
            this.element_ = e, this.init()
        };
        window.MaterialRipple = b, b.prototype.Constant_ = {
            INITIAL_SCALE: "scale(0.0001, 0.0001)",
            INITIAL_SIZE: "1px",
            INITIAL_OPACITY: "0.4",
            FINAL_OPACITY: "0",
            FINAL_SCALE: ""
        }, b.prototype.CssClasses_ = {
            RIPPLE_CENTER: "mdl-ripple--center",
            RIPPLE_EFFECT_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
            RIPPLE: "mdl-ripple",
            IS_ANIMATING: "is-animating",
            IS_VISIBLE: "is-visible"
        }, b.prototype.downHandler_ = function(e) {
            if (!this.rippleElement_.style.width && !this.rippleElement_.style.height) {
                var t = this.element_.getBoundingClientRect();
                this.boundHeight = t.height, this.boundWidth = t.width, this.rippleSize_ = 2 * Math.sqrt(t.width * t.width + t.height * t.height) + 2, this.rippleElement_.style.width = this.rippleSize_ + "px", this.rippleElement_.style.height = this.rippleSize_ + "px"
            }
            if (this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE), "mousedown" === e.type && this.ignoringMouseDown_) this.ignoringMouseDown_ = !1;
            else {
                "touchstart" === e.type && (this.ignoringMouseDown_ = !0);
                var n = this.getFrameCount();
                if (n > 0) return;
                this.setFrameCount(1);
                var i, s, r = e.currentTarget.getBoundingClientRect();
                if (0 === e.clientX && 0 === e.clientY) i = Math.round(r.width / 2), s = Math.round(r.height / 2);
                else {
                    var a = e.clientX ? e.clientX : e.touches[0].clientX,
                        o = e.clientY ? e.clientY : e.touches[0].clientY;
                    i = Math.round(a - r.left), s = Math.round(o - r.top)
                }
                this.setRippleXY(i, s), this.setRippleStyles(!0), window.requestAnimationFrame(this.animFrameHandler.bind(this))
            }
        }, b.prototype.upHandler_ = function(e) {
            e && 2 !== e.detail && this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE), window.setTimeout(function() {
                this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)
            }.bind(this), 0)
        }, b.prototype.init = function() {
            if (this.element_) {
                var e = this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);
                this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS) || (this.rippleElement_ = this.element_.querySelector("." + this.CssClasses_.RIPPLE), this.frameCount_ = 0, this.rippleSize_ = 0, this.x_ = 0, this.y_ = 0, this.ignoringMouseDown_ = !1, this.boundDownHandler = this.downHandler_.bind(this), this.element_.addEventListener("mousedown", this.boundDownHandler), this.element_.addEventListener("touchstart", this.boundDownHandler), this.boundUpHandler = this.upHandler_.bind(this), this.element_.addEventListener("mouseup", this.boundUpHandler), this.element_.addEventListener("mouseleave", this.boundUpHandler), this.element_.addEventListener("touchend", this.boundUpHandler), this.element_.addEventListener("blur", this.boundUpHandler), this.getFrameCount = function() {
                    return this.frameCount_
                }, this.setFrameCount = function(e) {
                    this.frameCount_ = e
                }, this.getRippleElement = function() {
                    return this.rippleElement_
                }, this.setRippleXY = function(e, t) {
                    this.x_ = e, this.y_ = t
                }, this.setRippleStyles = function(t) {
                    if (null !== this.rippleElement_) {
                        var n, i, s, r = "translate(" + this.x_ + "px, " + this.y_ + "px)";
                        t ? (i = this.Constant_.INITIAL_SCALE, s = this.Constant_.INITIAL_SIZE) : (i = this.Constant_.FINAL_SCALE, s = this.rippleSize_ + "px", e && (r = "translate(" + this.boundWidth / 2 + "px, " + this.boundHeight / 2 + "px)")), n = "translate(-50%, -50%) " + r + i, this.rippleElement_.style.webkitTransform = n, this.rippleElement_.style.msTransform = n, this.rippleElement_.style.transform = n, t ? this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING) : this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)
                    }
                }, this.animFrameHandler = function() {
                    this.frameCount_-- > 0 ? window.requestAnimationFrame(this.animFrameHandler.bind(this)) : this.setRippleStyles(!1)
                })
            }
        }, b.prototype.mdlDowngrade_ = function() {
            this.element_.removeEventListener("mousedown", this.boundDownHandler), this.element_.removeEventListener("touchstart", this.boundDownHandler), this.element_.removeEventListener("mouseup", this.boundUpHandler), this.element_.removeEventListener("mouseleave", this.boundUpHandler), this.element_.removeEventListener("touchend", this.boundUpHandler), this.element_.removeEventListener("blur", this.boundUpHandler)
        }, componentHandler.register({
            constructor: b,
            classAsString: "MaterialRipple",
            cssClass: "mdl-js-ripple-effect",
            widget: !1
        })
    }(),
    function(e) {
        "use strict";
        e(window).on("load", function() {
            e(".oxy-bigtext").bigtext({
                minfontsize: 16
            }), e(".oxy-animation").each(function() {
                var t = e(this),
                    n = t.attr("data-os-animation"),
                    i = t.attr("data-os-animation-delay");
                t.css({
                    "-webkit-animation-delay": i,
                    "-moz-animation-delay": i,
                    "animation-delay": i
                }), new Waypoint({
                    context: e(".mdl-layout__content")[0],
                    element: t[0],
                    handler: function() {
                        t.addClass("animated").addClass(n)
                    },
                    offset: "90%"
                })
            })
        }), e(document).ready(function(e) {
            function t(t) {
                var n = e(t),
                    i = "false" === n.attr("data-flex-slideshow") ? !1 : !0,
                    s = n.attr("data-flex-animation") ? n.attr("data-flex-animation") : "slide",
                    r = n.attr("data-flex-speed") ? n.attr("data-flex-speed") : 7e3,
                    a = n.attr("data-flex-sliderdirection") ? n.attr("data-flex-sliderdirection") : "horizontal",
                    o = n.attr("data-flex-duration") ? n.attr("data-flex-duration") : 600,
                    l = "hide" === n.attr("data-flex-directions") ? !1 : !0,
                    d = "thumbnails" === n.attr("data-flex-controls") ? "thumbnails" : "hide" === n.attr("data-flex-controls") ? !1 : !0,
                    u = "inside" === n.attr("data-flex-controlsposition") ? "flex-controls-inside" : "flex-controls-outside",
                    c = n.attr("data-flex-controlsalign") ? "flex-controls-" + n.attr("data-flex-controlsalign") : "flex-controls-center",
                    h = n.attr("data-flex-controlsvertical") ? "flex-controls-" + n.attr("data-flex-controlsvertical") : "",
                    p = n.attr("data-flex-itemwidth") ? parseInt(n.attr("data-flex-itemwidth"), 10) : 0,
                    f = n.attr("data-flex-itemmax") ? parseInt(n.attr("data-flex-itemmax"), 0) : 0,
                    m = n.attr("data-flex-itemmin") ? parseInt(n.attr("data-flex-itemmin"), 0) : 0,
                    g = "alternate" === n.attr("data-flex-captionhorizontal") ? "flex-caption-alternate" : "flex-caption-" + n.attr("data-flex-captionhorizontal");
                n.addClass(u).addClass(c).addClass(h).addClass(g), n.flexslider({
                    slideshow: i,
                    animation: s,
                    direction: a,
                    slideshowSpeed: parseInt(r),
                    animationSpeed: parseInt(o),
                    itemWidth: p,
                    minItems: m,
                    maxItems: f,
                    controlNav: d,
                    directionNav: l,
                    prevText: "",
                    nextText: "",
                    smoothHeight: !0,
                    useCSS: !1
                })
            }
            e("main").scroll(function(t) {
                t.target.scrollTop > 1 ? e(".oxy-layout__header").addClass("oxy-layout__header--scrolled") : e(".oxy-layout__header").removeClass("oxy-layout__header--scrolled")
            }), e(".oxy-background-parallax").parallax(), e(".flexslider[id]").each(function() {
                var n = this;
                e(this).imagesLoaded().done(function() {
                    t(n)
                })
            }), e(".oxy-button-fab").click(function() {
                e(".oxy-product-cart").toggleClass("is-visible")
            }), e("#side-cart-obfuscator").click(function() {
                e(".oxy-product-cart").toggleClass("is-visible")
            });
            var n = e(".oxy-js-button-shopping-cart"),
                i = "animated bounceInUp";
            e(n).addClass(i).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                n.removeClass(i)
            });
            var s = e(".mdl-navigation__link--submenu");
            e(s).click(function(t) {
                e(this).toggleClass("is-open").siblings().removeClass("is-open"), t.preventDefault()
            }), e(".oxy-js-button-add-product").click(function() {
                var t = this,
                    n = e(t),
                    i = "tada animated",
                    s = "rubberBand animated";
                t.pending || (t.pending = !0, n.addClass(i).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    n.removeClass(i), n.addClass("oxy-button-add-product--pending");
                    var r = n.offset().top,
                        a = n.offset().left,
                        o = n.clone().offset({
                            top: r,
                            left: a
                        }).addClass("oxy-button-add-product--clone").appendTo(e("body")),
                        l = e(".oxy-js-button-shopping-cart"),
                        d = l.offset().top + l.height() / 2 - o.height() / 2,
                        u = l.offset().left + l.width() / 2 - o.width() / 2,
                        c = Math.floor(Math.sqrt(Math.pow(r - d, 2) + Math.pow(a - u, 2))),
                        h = 600 + Math.floor(c / 3);
                    o.transition({
                        top: d,
                        left: u,
                        easing: "easeInOutQuart",
                        duration: h,
                        complete: function() {
                            o.remove(), t.pending = !1, l.addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                                l.removeClass(s);
                                var e = parseInt(l.attr("data-badge")) + 1;
                                l.attr("data-badge", e)
                            }), n.removeClass("oxy-button-add-product--pending").addClass("oxy-button-add-product--added")
                            location.href = (document.URL ? document.URL : window.location.href);
                        }
                    })
                }))
            }), e("body").on("click", ".oxy-alert--action", function() {
                e(this).parent().animate({
                    opacity: 0
                }, 500, function() {
                    e(this).remove()
                })
            })
        })
    }(jQuery),
    function(e) {
        e.fn.parallax = function() {
            var t = e(window).width();
            return this.each(function() {
                function n(n) {
                    var s;
                    s = 601 > t ? i.height() > 0 ? i.height() : i.children("img").height() : i.height() > 0 ? i.height() : 500;
                    var r = i.children("img").first(),
                        a = r.height(),
                        o = a - s,
                        l = i.offset().top + s,
                        d = i.offset().top,
                        u = e(window).scrollTop(),
                        c = window.innerHeight,
                        h = u + c,
                        p = (h - d) / (s + c),
                        f = Math.round(o * p);
                    n && r.css("display", "block"), l > u && u + c > d && r.css("transform", "translate3D(-50%," + f + "px, 0)")
                }
                var i = e(this);
                i.children("img").one("load", function() {
                    n(!0)
                }).each(function() {
                    this.complete && e(this).load()
                }), e(".mdl-layout__content").scroll(function() {
                    t = e(".mdl-layout__content").width(), n(!1)
                }), e(".mdl-layout__content").resize(function() {
                    t = e(".mdl-layout__content").width(), n(!1)
                })
            })
        }
    }(jQuery), jQuery(document).ready(function(e) {
        "use strict";
        e(".google-map").each(function() {
            function t() {
                var e = [{
                        stylers: [{
                            saturation: -100
                        }]
                    }],
                    t = {
                        zoom: parseInt(s.map_zoom, 10),
                        scrollwheel: !1,
                        draggable: "on" === s.map_scrollable,
                        mapTypeId: google.maps.MapTypeId[s.map_type]
                    };
                return "blackwhite" === s.map_style && (t.styles = e), new google.maps.Map(i[0], t)
            }

            function n(e, t) {
                if ("show" === s.marker) {
                    var n = {
                            url: s.markerURL,
                            size: new google.maps.Size(48, 48),
                            origin: new google.maps.Point(0, 0),
                            anchor: new google.maps.Point(24, 48)
                        },
                        i = new google.maps.Marker({
                            position: e,
                            icon: n,
                            map: r
                        });
                    if (a.extend(e), void 0 !== s.label[t]) {
                        var o = new google.maps.InfoWindow({
                            content: s.label[t]
                        });
                        google.maps.event.addListener(i, "click", function() {
                            o.open(r, this)
                        })
                    }
                }
            }
            var i = e(this),
                s = window[i.attr("id")],
                r = t(),
                a = new google.maps.LatLngBounds,
                o = !s.auto_center;
            if (o && void 0 !== s.center_latlng) {
                var l = s.center_latlng.split(","),
                    d = new google.maps.LatLng(l[0], l[1]);
                r.setCenter(d)
            }
            if (s.address) {
                var u = 0;
                e.each(s.address, function(e, t) {
                    var i = new google.maps.Geocoder;
                    i.geocode({
                        address: t
                    }, function(t, i) {
                        if (i === google.maps.GeocoderStatus.OK) {
                            if (void 0 !== t[0]) {
                                var l = t[0].geometry.location,
                                    d = new google.maps.LatLng(l.lat(), l.lng());
                                n(d, e)
                            }
                            u++, o || u !== s.address.length || r.fitBounds(a)
                        }
                    })
                })
            } else if (void 0 !== s.latlng) {
                for (var c = 0; c < s.latlng.length; c++) {
                    var h = s.latlng[c].split(","),
                        p = new google.maps.LatLng(h[0], h[1]);
                    n(p, c)
                }
                o || r.fitBounds(a)
            }
            var f = google.maps.event.addListener(r, "bounds_changed", function() {
                this.setZoom(parseInt(s.map_zoom, 10)), google.maps.event.removeListener(f)
            })
        })
    }), jQuery(document).ready(function() {
        jQuery("#homepage-slider").revolution({
            jsFileLocation: "/assets/js/",
            extensions: "revolution-extensions/",
            sliderType: "standard",
            sliderLayout: "auto",
            dottedOverlay: "none",
            delay: 7e3,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: !1
                },
                arrows: {
                    style: "hades",
                    enable: !0,
                    hide_onmobile: !0,
                    hide_under: 600,
                    hide_onleave: !0,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '<div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"></div></div></div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    }
                }
            },
            viewPort: {
                enable: !0,
                outof: "pause",
                visible_area: "80%"
            },
            responsiveLevels: [1240, 1024, 778, 480],
            gridwidth: [1170, 1024, 778, 480],
            gridheight: [700, 600, 500, 400],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 400,
                bgparallax: "on",
                levels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0]
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "on",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: !1,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: !1
            }
        })
    }), MaterialSelectfield.prototype.Constant_ = {}, MaterialSelectfield.prototype.CssClasses_ = {
        SELECT: "mdl-selectfield__select"
    }, MaterialSelectfield.prototype.init = function() {
        "use strict";
        if (this.element_ && (this.select_ = this.element_.querySelector("." + this.CssClasses_.SELECT), null !== this.select_)) {
            this.button_ = document.createElement("a"), this.button_.classList.add("mdl-select__button"), this.button_.classList.add("mdl-button"), this.button_.classList.add("mdl-js-button"), this.button_.innerHTML = this.select_.value, this.button_.addEventListener("click", this.clickMenu_.bind(this)), this.menu_ = document.createElement("ul"), this.menu_.classList.add("mdl-select__menu"), this.menu_.classList.add("mdl-menu"), this.menu_.classList.add("mdl-menu--bottom-left"), this.menu_.classList.add("mdl-js-menu"), this.menu_.classList.add("mdl-js-ripple-effect");
            for (var e = this.select_.querySelectorAll("option"), t = 0; t < e.length; t++) {
                var n = document.createElement("li");
                n.classList.add("mdl-menu__item"), e[t].value === this.select_.value && (this.button_.innerHTML = e[t].innerHTML), n.innerHTML = e[t].innerHTML, n.addEventListener("click", this.clickMenuItem_.bind(this)), this.menu_.appendChild(n)
            }
            this.element_.appendChild(this.button_), this.element_.appendChild(this.menu_), componentHandler.upgradeElement(this.menu_, "MaterialMenu")
        }
    }, MaterialSelectfield.prototype.clickMenu_ = function(e) {
        "use strict";
        this.menu_.MaterialMenu.show();
        var t = function(n) {
            n !== e && (document.removeEventListener("click", t), this.menu_.MaterialMenu.hide())
        }.bind(this);
        document.addEventListener("click", t)
    }, MaterialSelectfield.prototype.clickMenuItem_ = function(e) {
        "use strict";
        this.select_.selectedIndex = Array.prototype.indexOf.call(e.target.parentElement.childNodes, e.target);
        var t = new Event("change");
        this.select_.dispatchEvent(t);
        var n = this.select_.options[this.select_.selectedIndex];
        this.button_.innerHTML = n.innerHTML
    }, componentHandler.register({
        constructor: MaterialSelectfield,
        classAsString: "MaterialSelectfield",
        cssClass: "mdl-js-selectfield"
    }), OxyColorPicker.prototype.Constant_ = {
        COLORS: ["Cyan", "Teal", "Green", "Light Green", "Lime", "Yellow", "Amber", "Orange", "Brown", "Blue Grey", "Grey", "Deep Orange", "Red", "Pink", "Purple", "Deep Purple", "Indigo", "Blue", "Light Blue"],
        FORBIDDEN_ACCENTS: ["blue-grey", "brown", "grey"]
    }, OxyColorPicker.prototype.CssClasses_ = {
        COLOR_BLOCK: "oxy-colorpicker__color-block",
        COLOR_BLOCK_SELECTED: "oxy-colorpicker__color-block--selected",
        COLOR_BLOCK_DISABLED: "oxy-colorpicker__color-block--disabled"
    }, OxyColorPicker.prototype.init = function() {
        "use strict";
        if (this.element_)
            for (var e in this.Constant_.COLORS) {
                var t = this.Constant_.COLORS[e].toLowerCase().replace(" ", "-"),
                    n = document.createElement("div");
                n.classList.add("mdl-color--" + t + "-500"), n.classList.add(this.CssClasses_.COLOR_BLOCK), n.colorName = t, n.disabled = !1, n.addEventListener("click", this.clickColorBlock_.bind(this)), this.element_.appendChild(n)
            }
    }, OxyColorPicker.prototype.clickColorBlock_ = function(e) {
        "use strict";
        if (2 === this.selectedColors.length) {
            for (var t in this.selectedColors)
                for (this.selectedColors[t].classList.remove(this.CssClasses_.COLOR_BLOCK_SELECTED); this.selectedColors[t].firstChild;) this.selectedColors[t].removeChild(this.selectedColors[t].firstChild);
            this.selectedColors = []
        }
        if (!e.target.disabled && -1 === this.selectedColors.indexOf(e.target)) {
            var n = document.createElement("div");
            n.classList.add("oxy-colorpicker__label"), n.innerHTML = 0 === this.selectedColors.length ? "P" : "A", e.target.appendChild(n), e.target.classList.add(this.CssClasses_.COLOR_BLOCK_SELECTED), this.selectedColors.push(e.target)
        }
        if (2 === this.selectedColors.length) {
            this.stylesheet.setAttribute("title", "oldmain");
            var i = this.isMinified ? ".min.css" : ".css",
                s = this.stylesheetUrl + "colors/style." + this.selectedColors[0].colorName.replace("-", "_") + "-" + this.selectedColors[1].colorName.replace("-", "_") + i;
            sessionStorage.skin = s;
            var r = document.createElement("link");
            r.setAttribute("rel", "stylesheet"), r.setAttribute("type", "text/css"), r.setAttribute("title", "main"), r.setAttribute("href", s), document.getElementsByTagName("head")[0].appendChild(r);
            var a, o = document.styleSheets;
            document.body.classList.remove("fadeIn", "animated");
            var l = this,
                d = setInterval(function() {
                    if (!a)
                        for (var e in o) "main" === o[e].title && (a = o[e]);
                    a && a.cssRules.length > 0 && (document.body.classList.add("animated", "fadeIn"), l.stylesheet.parentNode.removeChild(l.stylesheet), l.stylesheet = r, l.styleLink.textContent = '<link rel="stylesheet" href="' + l.stylesheet.href.substring(l.stylesheet.href.lastIndexOf("assets")) + '">', clearInterval(d))
                }, 10)
        }
        for (var u = this.element_.childNodes, c = 0; c < u.length; c++) 1 === this.selectedColors.length ? -1 !== this.Constant_.FORBIDDEN_ACCENTS.indexOf(u[c].colorName) && (u[c].classList.add(this.CssClasses_.COLOR_BLOCK_DISABLED), u[c].disabled = !0) : (u[c].classList.remove(this.CssClasses_.COLOR_BLOCK_DISABLED), u[c].disabled = !1)
    }, componentHandler.register({
        constructor: OxyColorPicker,
        classAsString: "OxyColorPicker",
        cssClass: "oxy-js-colorpicker"
    });