/********************************************
 * REVOLUTION 5.0 EXTENSION - NAVIGATION
 * @version: 1.0.2 (18.08.2015)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
 *********************************************/
! function() {
    var t = jQuery.fn.revolution,
        e = t.is_mobile();
    jQuery.extend(!0, t, {
        hideUnHideNav: function(t) {
            var e = t.c.width(),
                i = t.navigation.arrows,
                a = t.navigation.bullets,
                n = t.navigation.thumbnails,
                s = t.navigation.tabs;
            h(i) && y(t.c.find(".tparrows"), i.hide_under, e, i.hide_over), h(a) && y(t.c.find(".tp-bullets"), a.hide_under, e, a.hide_over), h(n) && y(t.c.parent().find(".tp-thumbs"), n.hide_under, e, n.hide_over), h(s) && y(t.c.parent().find(".tp-tabs"), s.hide_under, e, s.hide_over), x(t)
        },
        resizeThumbsTabs: function(t) {
            if (t.navigation && t.navigation.tabs.enable || t.navigation && t.navigation.thumbnails.enable) {
                var e = (jQuery(window).width() - 480) / 500,
                    i = new punchgs.TimelineLite,
                    n = t.navigation.tabs,
                    s = t.navigation.thumbnails;
                i.pause(), e = e > 1 ? 1 : 0 > e ? 0 : e, h(n) && n.width > n.min_width && a(e, i, t.c, n, t.slideamount, "tab"), h(s) && s.width > s.min_width && a(e, i, t.c, s, t.slideamount, "thumb"), i.play(), x(t)
            }
            return !0
        },
        manageNavigation: function(e) {
            var a = t.getHorizontalOffset(e.c.parent(), "left"),
                n = t.getHorizontalOffset(e.c.parent(), "right");
            h(e.navigation.bullets) && ("fullscreen" != e.sliderLayout && "fullwidth" != e.sliderLayout && (e.navigation.bullets.h_offset_old = void 0 === e.navigation.bullets.h_offset_old ? e.navigation.bullets.h_offset : e.navigation.bullets.h_offset_old, e.navigation.bullets.h_offset = "center" === e.navigation.bullets.h_align ? e.navigation.bullets.h_offset_old + a / 2 - n / 2 : e.navigation.bullets.h_offset_old + a - n), m(e.c.find(".tp-bullets"), e.navigation.bullets)), h(e.navigation.thumbnails) && m(e.c.parent().find(".tp-thumbs"), e.navigation.thumbnails), h(e.navigation.tabs) && m(e.c.parent().find(".tp-tabs"), e.navigation.tabs), h(e.navigation.arrows) && ("fullscreen" != e.sliderLayout && "fullwidth" != e.sliderLayout && (e.navigation.arrows.left.h_offset_old = void 0 === e.navigation.arrows.left.h_offset_old ? e.navigation.arrows.left.h_offset : e.navigation.arrows.left.h_offset_old, e.navigation.arrows.left.h_offset = "right" === e.navigation.arrows.left.h_align ? e.navigation.arrows.left.h_offset_old + n : e.navigation.arrows.left.h_offset_old + a, e.navigation.arrows.right.h_offset_old = void 0 === e.navigation.arrows.right.h_offset_old ? e.navigation.arrows.right.h_offset : e.navigation.arrows.right.h_offset_old, e.navigation.arrows.right.h_offset = "right" === e.navigation.arrows.right.h_align ? e.navigation.arrows.right.h_offset_old + n : e.navigation.arrows.right.h_offset_old + a), m(e.c.find(".tp-leftarrow.tparrows"), e.navigation.arrows.left), m(e.c.find(".tp-rightarrow.tparrows"), e.navigation.arrows.right)), h(e.navigation.thumbnails) && i(e.c.parent().find(".tp-thumbs"), e.navigation.thumbnails), h(e.navigation.tabs) && i(e.c.parent().find(".tp-tabs"), e.navigation.tabs)
        },
        createNavigation: function(t, a) {
            var n = t.parent(),
                o = a.navigation.arrows,
                p = a.navigation.bullets,
                g = a.navigation.thumbnails,
                v = a.navigation.tabs,
                m = h(o),
                w = h(p),
                x = h(g),
                y = h(v);
            s(t, a), r(t, a), m && f(t, o, a), a.li.each(function() {
                var e = jQuery(this);
                w && b(t, p, e, a), x && _(t, g, e, "tp-thumb", a), y && _(t, v, e, "tp-tab", a)
            }), t.bind("revolution.slide.onafterswap revolution.nextslide.waiting", function() {
                var e = 0 == t.find(".next-revslide").length ? t.find(".active-revslide").data("index") : t.find(".next-revslide").data("index");
                t.find(".tp-bullet").each(function() {
                    var t = jQuery(this);
                    t.data("liref") === e ? t.addClass("selected") : t.removeClass("selected")
                }), n.find(".tp-thumb, .tp-tab").each(function() {
                    var t = jQuery(this);
                    t.data("liref") === e ? (t.addClass("selected"), t.hasClass("tp-tab") ? i(n.find(".tp-tabs"), v) : i(n.find(".tp-thumbs"), g)) : t.removeClass("selected")
                });
                var s = 0,
                    r = !1;
                a.thumbs && jQuery.each(a.thumbs, function(t, i) {
                    s = r === !1 ? t : s, r = i.id === e || t === e ? !0 : r
                });
                var d = s > 0 ? s - 1 : a.slideamount - 1,
                    l = s + 1 == a.slideamount ? 0 : s + 1;
                if (o.enable === !0) {
                    var h = o.tmp;
                    jQuery.each(a.thumbs[d].params, function(t, e) {
                        h = h.replace(e.from, e.to)
                    }), o.left.j.html(h), h = o.tmp, jQuery.each(a.thumbs[l].params, function(t, e) {
                        h = h.replace(e.from, e.to)
                    }), o.right.j.html(h), punchgs.TweenLite.set(o.left.j.find(".tp-arr-imgholder"), {
                        backgroundImage: "url(" + a.thumbs[d].src + ")"
                    }), punchgs.TweenLite.set(o.right.j.find(".tp-arr-imgholder"), {
                        backgroundImage: "url(" + a.thumbs[l].src + ")"
                    })
                }
            }), l(o), l(p), l(g), l(v), n.on("mouseenter mousemove", function() {
                n.hasClass("tp-mouseover") || (n.addClass("tp-mouseover"), punchgs.TweenLite.killDelayedCallsTo(c), m && o.hide_onleave && c(n.find(".tparrows"), o, "show"), w && p.hide_onleave && c(n.find(".tp-bullets"), p, "show"), x && g.hide_onleave && c(n.find(".tp-thumbs"), g, "show"), y && v.hide_onleave && c(n.find(".tp-tabs"), v, "show"), e && (n.removeClass("tp-mouseover"), u(t, a)))
            }), n.on("mouseleave", function() {
                n.removeClass("tp-mouseover"), u(t, a)
            }), m && o.hide_onleave && c(n.find(".tparrows"), o, "hide", 0), w && p.hide_onleave && c(n.find(".tp-bullets"), p, "hide", 0), x && g.hide_onleave && c(n.find(".tp-thumbs"), g, "hide", 0), y && v.hide_onleave && c(n.find(".tp-tabs"), v, "hide", 0), x && d(n.find(".tp-thumbs"), a), y && d(n.find(".tp-tabs"), a), "carousel" === a.sliderType && d(t, a, !0), "on" == a.navigation.touch.touchenabled && d(t, a, "swipebased")
        }
    });
    var i = function(t, e) {
            var i = (t.hasClass("tp-thumbs") ? ".tp-thumbs" : ".tp-tabs", t.hasClass("tp-thumbs") ? ".tp-thumb-mask" : ".tp-tab-mask"),
                a = t.hasClass("tp-thumbs") ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                n = t.hasClass("tp-thumbs") ? ".tp-thumb" : ".tp-tab",
                s = t.find(i),
                r = s.find(a),
                o = e.direction,
                d = "vertical" === o ? s.find(n).first().outerHeight(!0) + e.space : s.find(n).first().outerWidth(!0) + e.space,
                l = "vertical" === o ? s.height() : s.width(),
                h = parseInt(s.find(n + ".selected").data("liindex"), 0),
                p = l / d,
                u = "vertical" === o ? s.height() : s.width(),
                c = 0 - h * d,
                f = "vertical" === o ? r.height() : r.width(),
                g = 0 - (f - u) > c ? 0 - (f - u) : g > 0 ? 0 : c,
                v = r.data("offset");
            p > 2 && (g = 0 >= c - (v + d) ? 0 - d > c - (v + d) ? v : g + d : g, g = d > c - d + v + l && c + (Math.round(p) - 2) * d < v ? c + (Math.round(p) - 2) * d : g), g = 0 - (f - u) > g ? 0 - (f - u) : g > 0 ? 0 : g, "vertical" !== o && s.width() >= r.width() && (g = 0), "vertical" === o && s.height() >= r.height() && (g = 0), t.hasClass("dragged") || ("vertical" === o ? r.data("tmmove", punchgs.TweenLite.to(r, .5, {
                top: g + "px",
                ease: punchgs.Power3.easeInOut
            })) : r.data("tmmove", punchgs.TweenLite.to(r, .5, {
                left: g + "px",
                ease: punchgs.Power3.easeInOut
            })), r.data("offset", g))
        },
        a = function(t, e, i, a, n, s) {
            var r = i.parent().find(".tp-" + s + "s"),
                o = r.find(".tp-" + s + "s-inner-wrapper"),
                d = r.find(".tp-" + s + "-mask"),
                l = a.width * t < a.min_width ? a.min_width : Math.round(a.width * t),
                h = Math.round(l / a.width * a.height),
                p = "vertical" === a.direction ? l : l * n + a.space * (n - 1),
                u = "vertical" === a.direction ? h * n + a.space * (n - 1) : h,
                c = "vertical" === a.direction ? {
                    width: l + "px"
                } : {
                    height: h + "px"
                };
            e.add(punchgs.TweenLite.set(r, c)), e.add(punchgs.TweenLite.set(o, {
                width: p + "px",
                height: u + "px"
            })), e.add(punchgs.TweenLite.set(d, {
                width: p + "px",
                height: u + "px"
            }));
            var f = o.find(".tp-" + s);
            return f && jQuery.each(f, function(t, i) {
                "vertical" === a.direction ? e.add(punchgs.TweenLite.set(i, {
                    top: t * (h + parseInt(void 0 === a.space ? 0 : a.space, 0)),
                    width: l + "px",
                    height: h + "px"
                })) : "horizontal" === a.direction && e.add(punchgs.TweenLite.set(i, {
                    left: t * (l + parseInt(void 0 === a.space ? 0 : a.space, 0)),
                    width: l + "px",
                    height: h + "px"
                }))
            }), e
        },
        n = function(t) {
            var e = 0,
                i = 0,
                a = 0,
                n = 0,
                s = 1,
                r = 1,
                o = 1;
            return "detail" in t && (i = t.detail), "wheelDelta" in t && (i = -t.wheelDelta / 120), "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = i, i = 0), a = e * s, n = i * s, "deltaY" in t && (n = t.deltaY), "deltaX" in t && (a = t.deltaX), (a || n) && t.deltaMode && (1 == t.deltaMode ? (a *= r, n *= r) : (a *= o, n *= o)), a && !e && (e = 1 > a ? -1 : 1), n && !i && (i = 1 > n ? -1 : 1), n = navigator.userAgent.match(/mozilla/i) ? 10 * n : n, (n > 300 || -300 > n) && (n /= 10), {
                spinX: e,
                spinY: i,
                pixelX: a,
                pixelY: n
            }
        },
        s = function(e, i) {
            "on" === i.navigation.keyboardNavigation && jQuery(document).keydown(function(a) {
                ("horizontal" == i.navigation.keyboard_direction && 39 == a.keyCode || "vertical" == i.navigation.keyboard_direction && 40 == a.keyCode) && (i.sc_indicator = "arrow", t.callingNewSlide(i, e, 1)), ("horizontal" == i.navigation.keyboard_direction && 37 == a.keyCode || "vertical" == i.navigation.keyboard_direction && 38 == a.keyCode) && (i.sc_indicator = "arrow", t.callingNewSlide(i, e, -1))
            })
        },
        r = function(e, i) {
            if ("on" === i.navigation.mouseScrollNavigation) {
                var a = navigator.userAgent.match(/mozilla/i) ? -29 : -49,
                    s = navigator.userAgent.match(/mozilla/i) ? 29 : 49;
                e.on("mousewheel DOMMouseScroll", function(r) {
                    var o = n(r.originalEvent),
                        d = e.find(".tp-revslider-slidesli.active-revslide").index(),
                        l = e.find(".tp-revslider-slidesli.processing-revslide").index(),
                        h = -1 != d && 0 == d || -1 != l && 0 == l ? !0 : !1,
                        p = -1 != d && d == i.slideamount - 1 || 1 != l && l == i.slideamount - 1 ? !0 : !1;
                    if (-1 == l) {
                        if (o.pixelY < a) {
                            if (!h) return i.sc_indicator = "arrow", t.callingNewSlide(i, e, -1), !1
                        } else if (o.pixelY > s && !p) return i.sc_indicator = "arrow", t.callingNewSlide(i, e, 1), !1
                    } else if (!p) return !1;
                    r.preventDefault()
                })
            }
        },
        o = function(t, i, a) {
            return t = e ? jQuery(a.target).closest("." + t).length || jQuery(a.srcElement).closest("." + t).length : jQuery(a.toElement).closest("." + t).length || jQuery(a.originalTarget).closest("." + t).length, t === !0 || 1 === t ? 1 : 0
        },
        d = function(i, a, n) {
            i.data("opt", a);
            var s = a.carousel;
            jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"), s.Limit = "endless";
            var r = (e || "Firefox" === t.get_browser(), i),
                d = "vertical" === a.navigation.thumbnails.direction || "vertical" === a.navigation.tabs.direction ? "none" : "vertical",
                l = a.navigation.touch.swipe_direction || "horizontal";
            d = "swipebased" == n && "vertical" == l ? "none" : n ? "vertical" : d, jQuery.fn.swipetp || (jQuery.fn.swipetp = jQuery.fn.swipe), jQuery.fn.swipetp.defaults && jQuery.fn.swipetp.defaults.excludedElements || (jQuery.fn.swipetp.defaults || (jQuery.fn.swipetp.defaults = new Object), jQuery.fn.swipetp.defaults.excludedElements = "label, button, input, select, textarea, a, .noSwipe"), r.swipetp({
                allowPageScroll: d,
                triggerOnTouchLeave: !0,
                excludeElements: jQuery.fn.swipetp.defaults.excludedElements,
                swipeStatus: function(e, n, r, d) {
                    var h = o("rev_slider_wrapper", i, e),
                        p = o("tp-thumbs", i, e),
                        u = o("tp-tabs", i, e),
                        c = jQuery(this).attr("class"),
                        f = c.match(/tp-tabs|tp-thumb/gi) ? !0 : !1;
                    if ("carousel" === a.sliderType && (("move" === n || "end" === n || "cancel" == n) && a.dragStartedOverSlider && !a.dragStartedOverThumbs && !a.dragStartedOverTabs || "start" === n && h > 0 && 0 === p && 0 === u)) switch (a.dragStartedOverSlider = !0, d = r && r.match(/left|up/g) ? Math.round(-1 * d) : d = Math.round(1 * d), n) {
                        case "start":
                            void 0 !== s.positionanim && (s.positionanim.kill(), s.slide_globaloffset = "off" === s.infinity ? s.slide_offset : t.simp(s.slide_offset, s.maxwidth)), s.overpull = "none", s.wrap.addClass("dragged");
                            break;
                        case "move":
                            if (s.slide_offset = "off" === s.infinity ? s.slide_globaloffset + d : t.simp(s.slide_globaloffset + d, s.maxwidth), "off" === s.infinity) {
                                var g = "center" === s.horizontal_align ? (s.wrapwidth / 2 - s.slide_width / 2 - s.slide_offset) / s.slide_width : (0 - s.slide_offset) / s.slide_width;
                                "none" !== s.overpull && 0 !== s.overpull || !(0 > g || g > a.slideamount - 1) ? g >= 0 && g <= a.slideamount - 1 && (g >= 0 && d > s.overpull || g <= a.slideamount - 1 && d < s.overpull) && (s.overpull = 0) : s.overpull = d, s.slide_offset = 0 > g ? s.slide_offset + (s.overpull - d) / 1.1 + Math.sqrt(Math.abs((s.overpull - d) / 1.1)) : g > a.slideamount - 1 ? s.slide_offset + (s.overpull - d) / 1.1 - Math.sqrt(Math.abs((s.overpull - d) / 1.1)) : s.slide_offset
                            }
                            t.organiseCarousel(a, r, !0, !0);
                            break;
                        case "end":
                        case "cancel":
                            s.slide_globaloffset = s.slide_offset, s.wrap.removeClass("dragged"), t.carouselToEvalPosition(a, r), a.dragStartedOverSlider = !1, a.dragStartedOverThumbs = !1, a.dragStartedOverTabs = !1
                    } else {
                        if (("move" !== n && "end" !== n && "cancel" != n || a.dragStartedOverSlider || !a.dragStartedOverThumbs && !a.dragStartedOverTabs) && !("start" === n && h > 0 && (p > 0 || u > 0))) {
                            if ("end" == n && !f) {
                                if (a.sc_indicator = "arrow", "horizontal" == l && "left" == r || "vertical" == l && "up" == r) return t.callingNewSlide(a, a.c, 1), !1;
                                if ("horizontal" == l && "right" == r || "vertical" == l && "down" == r) return t.callingNewSlide(a, a.c, -1), !1
                            }
                            return a.dragStartedOverSlider = !1, a.dragStartedOverThumbs = !1, a.dragStartedOverTabs = !1, !0
                        }
                        p > 0 && (a.dragStartedOverThumbs = !0), u > 0 && (a.dragStartedOverTabs = !0);
                        var v = a.dragStartedOverThumbs ? ".tp-thumbs" : ".tp-tabs",
                            m = a.dragStartedOverThumbs ? ".tp-thumb-mask" : ".tp-tab-mask",
                            b = a.dragStartedOverThumbs ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                            w = a.dragStartedOverThumbs ? ".tp-thumb" : ".tp-tab",
                            _ = a.dragStartedOverThumbs ? a.navigation.thumbnails : a.navigation.tabs;
                        d = r && r.match(/left|up/g) ? Math.round(-1 * d) : d = Math.round(1 * d);
                        var x = i.parent().find(m),
                            y = x.find(b),
                            T = _.direction,
                            L = "vertical" === T ? y.height() : y.width(),
                            j = "vertical" === T ? x.height() : x.width(),
                            C = "vertical" === T ? x.find(w).first().outerHeight(!0) + _.space : x.find(w).first().outerWidth(!0) + _.space,
                            S = void 0 === y.data("offset") ? 0 : parseInt(y.data("offset"), 0),
                            k = 0;
                        switch (n) {
                            case "start":
                                i.parent().find(v).addClass("dragged"), S = "vertical" === T ? y.position().top : y.position().left, y.data("offset", S), y.data("tmmove") && y.data("tmmove").pause();
                                break;
                            case "move":
                                if (j >= L) return !1;
                                k = S + d, k = k > 0 ? "horizontal" === T ? k - y.width() * (k / y.width() * k / y.width()) : k - y.height() * (k / y.height() * k / y.height()) : k;
                                var O = "vertical" === T ? 0 - (y.height() - x.height()) : 0 - (y.width() - x.width());
                                k = O > k ? "horizontal" === T ? k + y.width() * (k - O) / y.width() * (k - O) / y.width() : k + y.height() * (k - O) / y.height() * (k - O) / y.height() : k, "vertical" === T ? punchgs.TweenLite.set(y, {
                                    top: k + "px"
                                }) : punchgs.TweenLite.set(y, {
                                    left: k + "px"
                                });
                                break;
                            case "end":
                            case "cancel":
                                if (f) return k = S + d, k = "vertical" === T ? k < 0 - (y.height() - x.height()) ? 0 - (y.height() - x.height()) : k : k < 0 - (y.width() - x.width()) ? 0 - (y.width() - x.width()) : k, k = k > 0 ? 0 : k, k = Math.abs(d) > C / 10 ? 0 >= d ? Math.floor(k / C) * C : Math.ceil(k / C) * C : 0 > d ? Math.ceil(k / C) * C : Math.floor(k / C) * C, k = "vertical" === T ? k < 0 - (y.height() - x.height()) ? 0 - (y.height() - x.height()) : k : k < 0 - (y.width() - x.width()) ? 0 - (y.width() - x.width()) : k, k = k > 0 ? 0 : k, "vertical" === T ? punchgs.TweenLite.to(y, .5, {
                                    top: k + "px",
                                    ease: punchgs.Power3.easeOut
                                }) : punchgs.TweenLite.to(y, .5, {
                                    left: k + "px",
                                    ease: punchgs.Power3.easeOut
                                }), k = k ? k : "vertical" === T ? y.position().top : y.position().left, y.data("offset", k), y.data("distance", d), setTimeout(function() {
                                    a.dragStartedOverSlider = !1, a.dragStartedOverThumbs = !1, a.dragStartedOverTabs = !1
                                }, 100), i.parent().find(v).removeClass("dragged"), !1
                        }
                    }
                }
            })
        },
        l = function(t) {
            t.hide_delay = jQuery.isNumeric(parseInt(t.hide_delay, 0)) ? t.hide_delay / 1e3 : .2, t.hide_delay_mobile = jQuery.isNumeric(parseInt(t.hide_delay_mobile, 0)) ? t.hide_delay_mobile / 1e3 : .2
        },
        h = function(t) {
            return t && t.enable
        },
        p = function(t) {
            return t && t.enable && t.hide_onleave === !0 && (void 0 === t.position ? !0 : !t.position.match(/outer/g))
        },
        u = function(t, i) {
            var a = t.parent();
            p(i.navigation.arrows) && punchgs.TweenLite.delayedCall(e ? i.navigation.arrows.hide_delay_mobile : i.navigation.arrows.hide_delay, c, [a.find(".tparrows"), i.navigation.arrows, "hide"]), p(i.navigation.bullets) && punchgs.TweenLite.delayedCall(e ? i.navigation.bullets.hide_delay_mobile : i.navigation.bullets.hide_delay, c, [a.find(".tp-bullets"), i.navigation.bullets, "hide"]), p(i.navigation.thumbnails) && punchgs.TweenLite.delayedCall(e ? i.navigation.thumbnails.hide_delay_mobile : i.navigation.thumbnails.hide_delay, c, [a.find(".tp-thumbs"), i.navigation.thumbnails, "hide"]), p(i.navigation.tabs) && punchgs.TweenLite.delayedCall(e ? i.navigation.tabs.hide_delay_mobile : i.navigation.tabs.hide_delay, c, [a.find(".tp-tabs"), i.navigation.tabs, "hide"])
        },
        c = function(t, e, i, a) {
            switch (a = void 0 === a ? .5 : a, i) {
                case "show":
                    punchgs.TweenLite.to(t, a, {
                        autoAlpha: 1,
                        ease: punchgs.Power3.easeInOut,
                        overwrite: "auto"
                    });
                    break;
                case "hide":
                    punchgs.TweenLite.to(t, a, {
                        autoAlpha: 0,
                        ease: punchgs.Power3.easeInOu,
                        overwrite: "auto"
                    })
            }
        },
        f = function(t, e, i) {
            e.style = void 0 === e.style ? "" : e.style, e.left.style = void 0 === e.left.style ? "" : e.left.style, e.right.style = void 0 === e.right.style ? "" : e.right.style, 0 === t.find(".tp-leftarrow.tparrows").length && t.append('<div class="tp-leftarrow tparrows ' + e.style + " " + e.left.style + '">' + e.tmp + "</div>"), 0 === t.find(".tp-rightarrow.tparrows").length && t.append('<div class="tp-rightarrow tparrows ' + e.style + " " + e.right.style + '">' + e.tmp + "</div>");
            var a = t.find(".tp-leftarrow.tparrows"),
                n = t.find(".tp-rightarrow.tparrows");
            n.click(function() {
                i.sc_indicator = "arrow", t.revnext()
            }), a.click(function() {
                i.sc_indicator = "arrow", t.revprev()
            }), e.right.j = t.find(".tp-rightarrow.tparrows"), e.left.j = t.find(".tp-leftarrow.tparrows"), e.padding_top = parseInt(i.carousel.padding_top || 0, 0), e.padding_bottom = parseInt(i.carousel.padding_bottom || 0, 0), m(a, e.left), m(n, e.right), ("outer-left" == e.position || "outer-right" == e.position) && (i.outernav = !0)
        },
        g = function(t, e) {
            var i = t.outerHeight(!0),
                a = (t.outerWidth(!0), "top" === e.v_align ? {
                    top: "0px",
                    y: Math.round(e.v_offset) + "px"
                } : "center" === e.v_align ? {
                    top: "50%",
                    y: Math.round(0 - i / 2 + e.v_offset) + "px"
                } : {
                    top: "100%",
                    y: Math.round(0 - (i + e.v_offset)) + "px"
                });
            t.hasClass("outer-bottom") || punchgs.TweenLite.set(t, a)
        },
        v = function(t, e) {
            var i = (t.outerHeight(!0), t.outerWidth(!0)),
                a = "left" === e.h_align ? {
                    left: "0px",
                    x: Math.round(e.h_offset) + "px"
                } : "center" === e.h_align ? {
                    left: "50%",
                    x: Math.round(0 - i / 2 + e.h_offset) + "px"
                } : {
                    left: "100%",
                    x: Math.round(0 - (i + e.h_offset)) + "px"
                };
            punchgs.TweenLite.set(t, a)
        },
        m = function(t, e) {
            var i = t.closest(".tp-simpleresponsive").length > 0 ? t.closest(".tp-simpleresponsive") : t.closest(".tp-revslider-mainul").length > 0 ? t.closest(".tp-revslider-mainul") : t.closest(".rev_slider_wrapper").length > 0 ? t.closest(".rev_slider_wrapper") : t.parent().find(".tp-revslider-mainul"),
                a = i.width(),
                n = i.height();
            if (g(t, e), v(t, e), "outer-left" !== e.position || "fullwidth" != e.sliderLayout && "fullscreen" != e.sliderLayout ? "outer-right" !== e.position || "fullwidth" != e.sliderLayout && "fullscreen" != e.sliderLayout || punchgs.TweenLite.set(t, {
                    right: 0 - t.outerWidth() + "px",
                    x: e.h_offset + "px"
                }) : punchgs.TweenLite.set(t, {
                    left: 0 - t.outerWidth() + "px",
                    x: e.h_offset + "px"
                }), t.hasClass("tp-thumbs") || t.hasClass("tp-tabs")) {
                var s = t.data("wr_padding"),
                    r = t.data("maxw"),
                    o = t.data("maxh"),
                    d = t.find(t.hasClass("tp-thumbs") ? ".tp-thumb-mask" : ".tp-tab-mask"),
                    l = parseInt(e.padding_top || 0, 0),
                    h = parseInt(e.padding_bottom || 0, 0);
                r > a && "outer-left" !== e.position && "outer-right" !== e.position ? (punchgs.TweenLite.set(t, {
                    left: "0px",
                    x: 0,
                    maxWidth: a - 2 * s + "px"
                }), punchgs.TweenLite.set(d, {
                    maxWidth: a - 2 * s + "px"
                })) : (punchgs.TweenLite.set(t, {
                    maxWidth: r + "px"
                }), punchgs.TweenLite.set(d, {
                    maxWidth: r + "px"
                })), o + 2 * s > n && "outer-bottom" !== e.position && "outer-top" !== e.position ? (punchgs.TweenLite.set(t, {
                    top: "0px",
                    y: 0,
                    maxHeight: l + h + (n - 2 * s) + "px"
                }), punchgs.TweenLite.set(d, {
                    maxHeight: l + h + (n - 2 * s) + "px"
                })) : (punchgs.TweenLite.set(t, {
                    maxHeight: o + "px"
                }), punchgs.TweenLite.set(d, {
                    maxHeight: o + "px"
                })), "outer-left" !== e.position && "outer-right" !== e.position && (l = 0, h = 0), e.span === !0 && "vertical" === e.direction ? (punchgs.TweenLite.set(t, {
                    maxHeight: l + h + (n - 2 * s) + "px",
                    height: l + h + (n - 2 * s) + "px",
                    top: 0 - l,
                    y: 0
                }), g(d, e)) : e.span === !0 && "horizontal" === e.direction && (punchgs.TweenLite.set(t, {
                    maxWidth: "100%",
                    width: a - 2 * s + "px",
                    left: 0,
                    x: 0
                }), v(d, e))
            }
        },
        b = function(t, e, i, a) {
            0 === t.find(".tp-bullets").length && (e.style = void 0 === e.style ? "" : e.style, t.append('<div class="tp-bullets ' + e.style + " " + e.direction + '"></div>'));
            var n = t.find(".tp-bullets"),
                s = i.data("index"),
                r = e.tmp;
            jQuery.each(a.thumbs[i.index()].params, function(t, e) {
                r = r.replace(e.from, e.to)
            }), n.append('<div class="justaddedbullet tp-bullet">' + r + "</div>");
            var o = t.find(".justaddedbullet"),
                d = t.find(".tp-bullet").length,
                l = o.outerWidth() + parseInt(void 0 === e.space ? 0 : e.space, 0),
                h = o.outerHeight() + parseInt(void 0 === e.space ? 0 : e.space, 0);
            "vertical" === e.direction ? (o.css({
                top: (d - 1) * h + "px",
                left: "0px"
            }), n.css({
                height: (d - 1) * h + o.outerHeight(),
                width: o.outerWidth()
            })) : (o.css({
                left: (d - 1) * l + "px",
                top: "0px"
            }), n.css({
                width: (d - 1) * l + o.outerWidth(),
                height: o.outerHeight()
            })), o.find(".tp-bullet-image").css({
                backgroundImage: "url(" + a.thumbs[i.index()].src + ")"
            }), o.data("liref", s), o.click(function() {
                a.sc_indicator = "bullet", t.revcallslidewithid(s), t.find(".tp-bullet").removeClass("selected"), jQuery(this).addClass("selected")
            }), o.removeClass("justaddedbullet"), e.padding_top = parseInt(a.carousel.padding_top || 0, 0), e.padding_bottom = parseInt(a.carousel.padding_bottom || 0, 0), ("outer-left" == e.position || "outer-right" == e.position) && (a.outernav = !0), m(n, e)
        },
        w = function(t, e) {
            e = parseFloat(e), t = t.replace("#", "");
            var i = parseInt(t.substring(0, 2), 16),
                a = parseInt(t.substring(2, 4), 16),
                n = parseInt(t.substring(4, 6), 16),
                s = "rgba(" + i + "," + a + "," + n + "," + e + ")";
            return s
        },
        _ = function(t, e, i, a, n) {
            var s = "tp-thumb" === a ? ".tp-thumbs" : ".tp-tabs",
                r = "tp-thumb" === a ? ".tp-thumb-mask" : ".tp-tab-mask",
                o = "tp-thumb" === a ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                d = "tp-thumb" === a ? ".tp-thumb" : ".tp-tab",
                l = "tp-thumb" === a ? ".tp-thumb-image" : ".tp-tab-image";
            if (e.visibleAmount = e.visibleAmount > n.slideamount ? n.slideamount : e.visibleAmount, e.sliderLayout = n.sliderLayout, 0 === t.parent().find(s).length) {
                e.style = void 0 === e.style ? "" : e.style;
                var h = e.span === !0 ? "tp-span-wrapper" : "",
                    p = '<div class="' + a + "s " + h + " " + e.position + " " + e.style + '"><div class="' + a + '-mask"><div class="' + a + 's-inner-wrapper" style="position:relative;"></div></div></div>';
                "outer-top" === e.position ? t.parent().prepend(p) : "outer-bottom" === e.position ? t.after(p) : t.append(p), e.padding_top = parseInt(n.carousel.padding_top || 0, 0), e.padding_bottom = parseInt(n.carousel.padding_bottom || 0, 0), ("outer-left" == e.position || "outer-right" == e.position) && (n.outernav = !0)
            }
            var u = i.data("index"),
                c = t.parent().find(s),
                f = c.find(r),
                g = f.find(o),
                v = "horizontal" === e.direction ? e.width * e.visibleAmount + e.space * (e.visibleAmount - 1) : e.width,
                b = "horizontal" === e.direction ? e.height : e.height * e.visibleAmount + e.space * (e.visibleAmount - 1),
                _ = e.tmp;
            jQuery.each(n.thumbs[i.index()].params, function(t, e) {
                _ = _.replace(e.from, e.to)
            }), g.append('<div data-liindex="' + i.index() + '" data-liref="' + u + '" class="justaddedthumb ' + a + '" style="width:' + e.width + "px;height:" + e.height + 'px;">' + _ + "</div>");
            var x = c.find(".justaddedthumb"),
                y = c.find(d).length,
                T = x.outerWidth() + parseInt(void 0 === e.space ? 0 : e.space, 0),
                L = x.outerHeight() + parseInt(void 0 === e.space ? 0 : e.space, 0);
            x.find(l).css({
                backgroundImage: "url(" + n.thumbs[i.index()].src + ")"
            }), "vertical" === e.direction ? (x.css({
                top: (y - 1) * L + "px",
                left: "0px"
            }), g.css({
                height: (y - 1) * L + x.outerHeight(),
                width: x.outerWidth()
            })) : (x.css({
                left: (y - 1) * T + "px",
                top: "0px"
            }), g.css({
                width: (y - 1) * T + x.outerWidth(),
                height: x.outerHeight()
            })), c.data("maxw", v), c.data("maxh", b), c.data("wr_padding", e.wrapper_padding);
            var j = "outer-top" === e.position || "outer-bottom" === e.position ? "relative" : "absolute",
                C = "outer-top" !== e.position && "outer-bottom" !== e.position || "center" !== e.h_align ? "0" : "auto";
            f.css({
                maxWidth: v + "px",
                maxHeight: b + "px",
                overflow: "hidden",
                position: "relative"
            }), c.css({
                maxWidth: v + "px",
                margin: C,
                maxHeight: b + "px",
                overflow: "visible",
                position: j,
                background: w(e.wrapper_color, e.wrapper_opacity),
                padding: e.wrapper_padding + "px",
                boxSizing: "contet-box"
            }), x.click(function() {
                n.sc_indicator = "bullet";
                var e = t.parent().find(o).data("distance");
                e = void 0 === e ? 0 : e, Math.abs(e) < 10 && (t.revcallslidewithid(u), t.parent().find(s).removeClass("selected"), jQuery(this).addClass("selected"))
            }), x.removeClass("justaddedthumb"), m(c, e)
        },
        x = function(t) {
            var e = t.c.parent().find(".outer-top"),
                i = t.c.parent().find(".outer-bottom");
            t.top_outer = e.hasClass("tp-forcenotvisible") ? 0 : e.outerHeight() || 0, t.bottom_outer = i.hasClass("tp-forcenotvisible") ? 0 : i.outerHeight() || 0
        },
        y = function(t, e, i, a) {
            e > i || i > a ? t.addClass("tp-forcenotvisible") : t.removeClass("tp-forcenotvisible")
        }
}(jQuery);