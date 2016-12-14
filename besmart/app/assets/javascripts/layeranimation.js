/********************************************
 * REVOLUTION 5.0 EXTENSION - LAYER ANIMATION
 * @version: 1.1.1 (07.09.2015)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
 *********************************************/
! function() {
    function a(a, e, t, i, n, o, r) {
        var d = a.find(e);
        d.css("borderWidth", o + "px"), d.css(t, 0 - o + "px"), d.css(i, "0px solid transparent"), d.css(n, r)
    }
    var e = jQuery.fn.revolution;
    jQuery.extend(!0, e, {
        animcompleted: function(a, t) {
            var i = a.data("videotype"),
                n = a.data("autoplay"),
                o = a.data("autoplayonlyfirsttime");
            void 0 != i && "none" != i && (1 == n || "true" == n || "on" == n || "1sttime" == n || o ? (e.playVideo(a, t), (o || "1sttime" == n) && (a.data("autoplayonlyfirsttime", !1), a.data("autoplay", "off"))) : "no1sttime" == n && a.data("autoplay", "on"))
        },
        handleStaticLayers: function(a, e) {
            var t = parseInt(a.data("startslide"), 0),
                i = parseInt(a.data("endslide"), 0);
            0 > t && (t = 0), 0 > i && (i = e.slideamount), 0 === t && i === e.slideamount - 1 && (i = e.slideamount + 1), a.data("startslide", t), a.data("endslide", i)
        },
        animateTheCaptions: function(a, t, i, n) {
            var o = "carousel" === t.sliderType ? 0 : t.width / 2 - t.gridwidth[t.curWinRange] * t.bw / 2,
                r = 0,
                d = a.data("index");
            t.layers = t.layers || new Object, t.layers[d] = t.layers[d] || a.find(".tp-caption"), t.layers["static"] = t.layers["static"] || t.c.find(".tp-static-layers").find(".tp-caption");
            var s = new Array;
            if (t.conh = t.c.height(), t.conw = t.c.width(), t.ulw = t.ul.width(), t.ulh = t.ul.height(), t.debugMode) {
                a.addClass("indebugmode"), a.find(".helpgrid").remove(), t.c.find(".hglayerinfo").remove(), a.append('<div class="helpgrid" style="width:' + t.gridwidth[t.curWinRange] * t.bw + "px;height:" + t.gridheight[t.curWinRange] * t.bw + 'px;"></div>');
                var l = a.find(".helpgrid");
                l.append('<div class="hginfo">Zoom:' + Math.round(100 * t.bw) + "% &nbsp;&nbsp;&nbsp; Device Level:" + t.curWinRange + "&nbsp;&nbsp;&nbsp; Grid Preset:" + t.gridwidth[t.curWinRange] + "x" + t.gridheight[t.curWinRange] + "</div>"), t.c.append('<div class="hglayerinfo"></div>'), l.append('<div class="tlhg"></div>')
            }
            s && jQuery.each(s, function() {
                var a = jQuery(this);
                punchgs.TweenLite.set(a.find(".tp-videoposter"), {
                    autoAlpha: 1
                }), punchgs.TweenLite.set(a.find("iframe"), {
                    autoAlpha: 0
                })
            }), t.layers[d] && jQuery.each(t.layers[d], function(a, e) {
                s.push(e)
            }), t.layers["static"] && jQuery.each(t.layers["static"], function(a, e) {
                s.push(e)
            }), s && jQuery.each(s, function(a) {
                e.animateSingleCaption(jQuery(this), t, o, r, a, i)
            });
            var p = jQuery("body").find("#" + t.c.attr("id")).find(".tp-bannertimer");
            p.data("opt", t), void 0 != n && setTimeout(function() {
                n.resume()
            }, 30)
        },
        animateSingleCaption: function(i, o, m, f, w, y, b) {
            var x = y,
                T = p(i, o, "in", !0),
                L = i.data("_pw") || i.closest(".tp-parallax-wrap"),
                W = i.data("_lw") || i.closest(".tp-loop-wrap"),
                C = i.data("_mw") || i.closest(".tp-mask-wrap"),
                j = i.data("responsive") || "on",
                R = i.data("responsive_offset") || "on",
                I = i.data("basealign") || "grid",
                k = "grid" === I ? o.width : o.ulw,
                _ = "grid" === I ? o.height : o.ulh,
                z = jQuery("body").hasClass("rtl");
            if (i.data("_pw") || (i.data("_pw", L), i.data("_lw", W), i.data("_mw", C)), "fullscreen" == o.sliderLayout && (f = _ / 2 - o.gridheight[o.curWinRange] * o.bh / 2), ("on" == o.autoHeight || void 0 != o.minHeight && o.minHeight > 0) && (f = o.conh / 2 - o.gridheight[o.curWinRange] * o.bh / 2), 0 > f && (f = 0), o.debugMode) {
                i.closest("li").find(".helpgrid").css({
                    top: f + "px",
                    left: m + "px"
                });
                var S = o.c.find(".hglayerinfo");
                i.on("hover, mouseenter", function() {
                    var a = "";
                    i.data() && jQuery.each(i.data(), function(e, t) {
                        "object" != typeof t && (a = a + '<span style="white-space:nowrap"><span style="color:#27ae60">' + e + ":</span>" + t + "</span>&nbsp; &nbsp; ")
                    }), S.html(a)
                })
            }
            var Q = l(i.data("visibility"), o)[o.curWinRange] || l(i.data("visibility"), o) || "on";
            if ("off" == Q || k < o.hideCaptionAtLimit && "on" == i.data("captionhidden") || k < o.hideAllCaptionAtLimit ? i.addClass("tp-hidden-caption") : i.removeClass("tp-hidden-caption"), i.data("layertype", "html"), 0 > m && (m = 0), void 0 != i.data("thumbimage") && void 0 == i.data("videoposter") && i.data("videoposter", i.data("thumbimage")), i.hasClass("tp-videolayer") && void 0 != i.data("videoposter") && "on" == i.data("posterOnMobile") && _ISM) {
                var M = l(i.data("videowidth"), o)[o.curWinRange] || l(i.data("videowidth"), o) || "auto",
                    O = l(i.data("videoheight"), o)[o.curWinRange] || l(i.data("videoheight"), o) || "auto";
                M = parseFloat(B), O = parseFloat(F), i.append('<div class="tp-videoposter" style="position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url(' + i.data("videoposter") + '); background-size:cover;background-position:center center;"></div>'), i.css("100%" != M ? {
                    minWidth: M + "px",
                    minHeight: O + "px"
                } : {
                    width: "100%",
                    height: "100%"
                }), i.removeClass("tp-videolayer")
            }
            if (i.find("img").length > 0) {
                var H = i.find("img");
                i.data("layertype", "image"), 0 == H.width() && H.css({
                    width: "auto"
                }), 0 == H.height() && H.css({
                    height: "auto"
                }), void 0 == H.data("ww") && H.width() > 0 && H.data("ww", H.width()), void 0 == H.data("hh") && H.height() > 0 && H.data("hh", H.height());
                var B = H.data("ww"),
                    F = H.data("hh"),
                    A = "slide" == I ? o.ulw : o.gridwidth[o.curWinRange],
                    D = "slide" == I ? o.ulh : o.gridheight[o.curWinRange],
                    B = l(H.data("ww"), o)[o.curWinRange] || l(H.data("ww"), o) || "auto",
                    F = l(H.data("hh"), o)[o.curWinRange] || l(H.data("hh"), o) || "auto",
                    P = "full" === B || "full-proportional" === B,
                    X = "full" === F || "full-proportional" === F;
                if ("full-proportional" === B) {
                    var Y = H.data("owidth"),
                        V = H.data("oheight");
                    V / D > Y / A ? (B = A, F = V * (A / Y)) : (F = D, B = Y * (D / V))
                } else B = P ? A : parseFloat(B), F = X ? D : parseFloat(F);
                void 0 == B && (B = 0), void 0 == F && (F = 0), "off" !== j ? (H.width("grid" != I && P ? B : B * o.bw), H.height("grid" != I && X ? F : F * o.bh)) : (H.width(B), H.height(F))
            }
            if ("slide" === I && (m = 0, f = 0), i.hasClass("tp-videolayer") || i.find("iframe").length > 0 || i.find("video").length > 0) {
                if (i.data("layertype", "video"), e.manageVideoLayer(i, o, y, x), !y && !x) {
                    {
                        i.data("videotype")
                    }
                    e.resetVideo(i, o)
                }
                var N = i.data("aspectratio");
                void 0 != N && N.split(":").length > 1 && e.prepareCoveredVideo(N, o, i);
                var H = i.find("iframe") ? i.find("iframe") : H = i.find("video"),
                    Z = i.find("iframe") ? !1 : !0,
                    $ = i.hasClass("coverscreenvideo");
                H.css({
                    display: "block"
                }), void 0 == i.data("videowidth") && (i.data("videowidth", H.width()), i.data("videoheight", H.height()));
                var G, B = l(i.data("videowidth"), o)[o.curWinRange] || l(i.data("videowidth"), o) || "auto",
                    F = l(i.data("videoheight"), o)[o.curWinRange] || l(i.data("videoheight"), o) || "auto";
                B = parseFloat(B), F = parseFloat(F), void 0 === i.data("cssobj") && (G = c(i, 0), i.data("cssobj", G));
                var U = g(i.data("cssobj"), o);
                if ("auto" == U.lineHeight && (U.lineHeight = U.fontSize + 4), i.hasClass("fullscreenvideo") || $) {
                    m = 0, f = 0, i.data("x", 0), i.data("y", 0);
                    var q = _;
                    "on" == o.autoHeight && (q = o.conh), i.css({
                        width: k,
                        height: q
                    })
                } else punchgs.TweenLite.set(i, {
                    paddingTop: Math.round(U.paddingTop * o.bh) + "px",
                    paddingBottom: Math.round(U.paddingBottom * o.bh) + "px",
                    paddingLeft: Math.round(U.paddingLeft * o.bw) + "px",
                    paddingRight: Math.round(U.paddingRight * o.bw) + "px",
                    marginTop: U.marginTop * o.bh + "px",
                    marginBottom: U.marginBottom * o.bh + "px",
                    marginLeft: U.marginLeft * o.bw + "px",
                    marginRight: U.marginRight * o.bw + "px",
                    borderTopWidth: Math.round(U.borderTopWidth * o.bh) + "px",
                    borderBottomWidth: Math.round(U.borderBottomWidth * o.bh) + "px",
                    borderLeftWidth: Math.round(U.borderLeftWidth * o.bw) + "px",
                    borderRightWidth: Math.round(U.borderRightWidth * o.bw) + "px",
                    width: B * o.bw + "px",
                    height: F * o.bh + "px"
                });
                (0 == Z && !$ || 1 != i.data("forcecover") && !i.hasClass("fullscreenvideo") && !$) && (H.width(B * o.bw), H.height(F * o.bh))
            }
            i.find(".tp-resizeme, .tp-resizeme *").each(function() {
                u(jQuery(this), o, "rekursive", j)
            }), i.hasClass("tp-resizeme") && i.find("*").each(function() {
                u(jQuery(this), o, "rekursive", j)
            }), u(i, o, 0, j);
            var E = i.outerHeight(),
                J = i.css("backgroundColor");
            a(i, ".frontcorner", "left", "borderRight", "borderTopColor", E, J), a(i, ".frontcornertop", "left", "borderRight", "borderBottomColor", E, J), a(i, ".backcorner", "right", "borderLeft", "borderBottomColor", E, J), a(i, ".backcornertop", "right", "borderLeft", "borderTopColor", E, J), "on" == o.fullScreenAlignForce && (m = 0, f = 0);
            var K = i.data("arrobj");
            if (void 0 === K) {
                var K = new Object;
                K.voa = l(i.data("voffset"), o)[o.curWinRange] || l(i.data("voffset"), o)[0], K.hoa = l(i.data("hoffset"), o)[o.curWinRange] || l(i.data("hoffset"), o)[0], K.elx = l(i.data("x"), o)[o.curWinRange] || l(i.data("x"), o)[0], K.ely = l(i.data("y"), o)[o.curWinRange] || l(i.data("y"), o)[0]
            }
            var ae = 0 == K.voa.length ? 0 : K.voa,
                ee = 0 == K.hoa.length ? 0 : K.hoa,
                te = 0 == K.elx.length ? 0 : K.elx,
                ie = 0 == K.ely.length ? 0 : K.ely,
                ne = i.outerWidth(!0),
                oe = i.outerHeight(!0);
            0 == ne && 0 == oe && (ne = o.ulw, oe = o.ulh);
            var re = "off" !== R ? parseInt(ae, 0) * o.bw : parseInt(ae, 0),
                de = "off" !== R ? parseInt(ee, 0) * o.bw : parseInt(ee, 0),
                se = "grid" === I ? o.gridwidth[o.curWinRange] * o.bw : k,
                le = "grid" === I ? o.gridheight[o.curWinRange] * o.bw : _;
            "on" == o.fullScreenAlignForce && (se = o.ulw, le = o.ulh), te = "center" === te || "middle" === te ? se / 2 - ne / 2 + de : "left" === te ? de : "right" === te ? se - ne - de : "off" !== R ? te * o.bw : te, ie = "center" == ie || "middle" == ie ? le / 2 - oe / 2 + re : "top" == ie ? re : "bottom" == ie ? le - oe - re : "off" !== R ? ie * o.bw : ie, z && (te += ne);
            var pe = i.data("lasttriggerstate"),
                he = i.data("triggerstate"),
                ce = i.data("start") || 100,
                ge = i.data("end"),
                me = b ? 0 : "bytrigger" === ce || "sliderenter" === ce ? 0 : parseFloat(ce) / 1e3,
                ue = te + m,
                ve = ie + f,
                fe = i.css("z-Index");
            b || ("reset" == pe && "bytrigger" != ce ? (i.data("triggerstate", "on"), i.data("animdirection", "in"), he = "on") : "reset" == pe && "bytrigger" == ce && (i.data("triggerstate", "off"), i.data("animdirection", "out"), he = "off")), punchgs.TweenLite.set(L, {
                zIndex: fe,
                top: ve,
                left: ue,
                overwrite: "auto"
            }), 0 == T && (x = !0), void 0 == i.data("timeline") || x || (2 != T && i.data("timeline").gotoAndPlay(0), x = !0), !y && i.data("timeline_out") && 2 != T && 0 != T && (i.data("timeline_out").kill(), i.data("outstarted", 0)), b && void 0 != i.data("timeline") && (i.removeData("$anims"), i.data("timeline").pause(0), i.data("timeline").kill(), void 0 != i.data("newhoveranim") && (i.data("newhoveranim").progress(0), i.data("newhoveranim").kill()), i.removeData("timeline"), punchgs.TweenLite.killTweensOf(i), i.unbind("hover"), i.removeClass("rs-hover-ready"), i.removeData("newhoveranim"));
            var we = i.data("timeline") ? i.data("timeline").time() : 0,
                ye = void 0 !== i.data("timeline") ? i.data("timeline").progress() : 0,
                be = i.data("timeline") || new punchgs.TimelineLite({
                    smoothChildTiming: !0
                });
            if (ye = jQuery.isNumeric(ye) ? ye : 0, be.pause(), 1 > ye && 1 != i.data("outstarted") || 2 == T || b) {
                var xe = i;
                if (void 0 != i.data("mySplitText") && i.data("mySplitText").revert(), void 0 != i.data("splitin") && i.data("splitin").match(/chars|words|lines/g) || void 0 != i.data("splitout") && i.data("splitout").match(/chars|words|lines/g)) {
                    var Te = i.find("a").length > 0 ? i.find("a") : i;
                    i.data("mySplitText", new punchgs.SplitText(Te, {
                        type: "lines,words,chars",
                        charsClass: "tp-splitted",
                        wordsClass: "tp-splitted",
                        linesClass: "tp-splitted"
                    })), i.addClass("splitted")
                }
                void 0 !== i.data("mySplitText") && i.data("splitin") && i.data("splitin").match(/chars|words|lines/g) && (xe = i.data("mySplitText")[i.data("splitin")]);
                var Le = new Object,
                    We = void 0 != i.data("transform_in") ? i.data("transform_in").match(/\(R\)/gi) : !1;
                if (!i.data("$anims") || b || We) {
                    var Ce = t(),
                        je = t(),
                        Re = n(),
                        Ie = void 0 !== i.data("transform_hover") || void 0 !== i.data("style_hover");
                    je = d(je, i.data("transform_idle")), Ce = d(je, i.data("transform_in"), 1 == o.sdir), Ie && (Re = d(Re, i.data("transform_hover")), Re = h(Re, i.data("style_hover")), i.data("hover", Re)), Ce.elemdelay = void 0 == i.data("elementdelay") ? 0 : i.data("elementdelay"), je.anim.ease = Ce.anim.ease = Ce.anim.ease || punchgs.Power1.easeInOut, Ie && !i.hasClass("rs-hover-ready") && (i.addClass("rs-hover-ready"), i.hover(function(a) {
                        var e = jQuery(a.currentTarget),
                            t = e.data("hover"),
                            i = e.data("timeline");
                        i && 1 == i.progress() && (void 0 === e.data("newhoveranim") || "none" === e.data("newhoveranim") ? e.data("newhoveranim", punchgs.TweenLite.to(e, t.speed, t.anim)) : (e.data("newhoveranim").progress(0), e.data("newhoveranim").play()))
                    }, function(a) {
                        var e = jQuery(a.currentTarget),
                            t = e.data("timeline");
                        t && 1 == t.progress() && void 0 != e.data("newhoveranim") && e.data("newhoveranim").reverse()
                    })), Le = new Object, Le.f = Ce, Le.r = je, i.data("$anims")
                } else Le = i.data("$anims");
                var ke = s(i.data("mask_in")),
                    _e = new punchgs.TimelineLite;
                if (Le.f.anim.x = Le.f.anim.x * o.bw || r(Le.f.anim.x, o, ne, oe, ve, ue, "horizontal"), Le.f.anim.y = Le.f.anim.y * o.bw || r(Le.f.anim.y, o, ne, oe, ve, ue, "vertical"), 2 != T || b) {
                    if (xe != i) {
                        var ze = Le.r.anim.ease;
                        be.add(punchgs.TweenLite.set(i, Le.r.anim)), Le.r = t(), Le.r.anim.ease = ze
                    }
                    if (Le.f.anim.visibility = "hidden", _e.eventCallback("onStart", function() {
                            punchgs.TweenLite.set(i, {
                                visibility: "visible"
                            }), i.data("iframes") && i.find("iframe").each(function() {
                                punchgs.TweenLite.set(jQuery(this), {
                                    autoAlpha: 1
                                })
                            }), punchgs.TweenLite.set(L, {
                                visibility: "visible"
                            });
                            var a = {};
                            a.layer = i, a.eventtype = "enterstage", a.layertype = i.data("layertype"), a.layersettings = i.data(), o.c.trigger("revolution.layeraction", a)
                        }), _e.eventCallback("onComplete", function() {
                            var a = {};
                            a.layer = i, a.eventtype = "enteredstage", a.layertype = i.data("layertype"), a.layersettings = i.data(), o.c.trigger("revolution.layeraction", a), e.animcompleted(i, o)
                        }), "sliderenter" == ce && o.overcontainer && (me = .6), be.add(_e.staggerFromTo(xe, Le.f.speed, Le.f.anim, Le.r.anim, Le.f.elemdelay), me), ke) {
                        var Se = new Object;
                        Se.ease = Le.r.anim.ease, Se.overflow = ke.anim.overflow = "hidden", Se.x = Se.y = 0, ke.anim.x = ke.anim.x * o.bw || r(ke.anim.x, o, ne, oe, ve, ue, "horizontal"), ke.anim.y = ke.anim.y * o.bw || r(ke.anim.y, o, ne, oe, ve, ue, "vertical"), be.add(punchgs.TweenLite.fromTo(C, Le.f.speed, ke.anim, Se, Ce.elemdelay), me)
                    } else be.add(punchgs.TweenLite.set(C, {
                        overflow: "visible"
                    }, Ce.elemdelay), 0)
                }
                i.data("timeline", be), T = p(i, o, "in"), 0 !== ye && 2 != T || "bytrigger" === ge || b || "sliderleave" == ge || (void 0 == ge || -1 != T && 2 != T || "bytriger" === ge ? punchgs.TweenLite.delayedCall(999999, e.endMoveCaption, [i, C, L, o]) : punchgs.TweenLite.delayedCall(parseInt(i.data("end"), 0) / 1e3, e.endMoveCaption, [i, C, L, o])), be = i.data("timeline"), "on" == i.data("loopanimation") && v(W, o.bw), ("sliderenter" != ce || "sliderenter" == ce && o.overcontainer) && (-1 == T || 1 == T || b || 0 == T && 1 > ye && i.hasClass("rev-static-visbile")) && (1 > ye && ye > 0 || 0 == ye && "bytrigger" != ce && "keep" != pe || 0 == ye && "bytrigger" != ce && "keep" == pe && "on" == he || "bytrigger" == ce && "keep" == pe && "on" == he) && be.resume(we)
            }
            "on" == i.data("loopanimation") && punchgs.TweenLite.set(W, {
                minWidth: ne,
                minHeight: oe
            }), 0 == i.data("slidelink") || 1 != i.data("slidelink") && !i.hasClass("slidelink") ? (punchgs.TweenLite.set(C, {
                width: "auto",
                height: "auto"
            }), i.data("slidelink", 0)) : (punchgs.TweenLite.set(C, {
                width: "100%",
                height: "100%"
            }), i.data("slidelink", 1))
        },
        endMoveCaption: function(a, e, n, o) {
            if (e = e || a.data("_mw"), n = n || a.data("_pw"), a.data("outstarted", 1), a.data("timeline")) a.data("timeline").pause();
            else if (void 0 === a.data("_pw")) return;
            var l = new punchgs.TimelineLite,
                p = new punchgs.TimelineLite,
                h = new punchgs.TimelineLite,
                c = d(t(), a.data("transform_in"), 1 == o.sdir),
                g = a.data("transform_out") ? d(i(), a.data("transform_out"), 1 == o.sdir) : d(i(), a.data("transform_in"), 1 == o.sdir),
                m = a.data("splitout") && a.data("splitout").match(/words|chars|lines/g) ? a.data("mySplitText")[a.data("splitout")] : a,
                u = void 0 == a.data("endelementdelay") ? 0 : a.data("endelementdelay"),
                v = a.innerWidth(),
                f = a.innerHeight(),
                w = n.position();
            a.data("transform_out") && a.data("transform_out").match(/auto:auto/g) && (c.speed = g.speed, c.anim.ease = g.anim.ease, g = c);
            var y = s(a.data("mask_out"));
            g.anim.x = g.anim.x * o.bw || r(g.anim.x, o, v, f, w.top, w.left, "horizontal"), g.anim.y = g.anim.y * o.bw || r(g.anim.y, o, v, f, w.top, w.left, "vertical"), p.eventCallback("onStart", function() {
                var e = {};
                e.layer = a, e.eventtype = "leavestage", e.layertype = a.data("layertype"), e.layersettings = a.data(), o.c.trigger("revolution.layeraction", e)
            }), p.eventCallback("onComplete", function() {
                punchgs.TweenLite.set(a, {
                    visibility: "hidden"
                }), punchgs.TweenLite.set(n, {
                    visibility: "hidden"
                });
                var e = {};
                e.layer = a, e.eventtype = "leftstage", e.layertype = a.data("layertype"), e.layersettings = a.data(), o.c.trigger("revolution.layeraction", e)
            }), l.add(p.staggerTo(m, g.speed, g.anim, u), 0), y ? (y.anim.ease = g.anim.ease, y.anim.overflow = "hidden", y.anim.x = y.anim.x * o.bw || r(y.anim.x, o, v, f, w.top, w.left, "horizontal"), y.anim.y = y.anim.y * o.bw || r(y.anim.y, o, v, f, w.top, w.left, "vertical"), l.add(h.to(e, g.speed, y.anim, u), 0)) : l.add(h.set(e, {
                overflow: "visible",
                overwrite: "auto"
            }, u), 0), a.data("timeline_out", l)
        },
        removeTheCaptions: function(a, t) {
            var i = a.data("index"),
                n = new Array;
            t.layers[i] && jQuery.each(t.layers[i], function(a, e) {
                n.push(e)
            }), t.layers["static"] && jQuery.each(t.layers["static"], function(a, e) {
                n.push(e)
            }), punchgs.TweenLite.killDelayedCallsTo(e.endMoveCaption), n && jQuery.each(n, function() {
                var a = jQuery(this),
                    i = p(a, t, "out");
                0 != i && (f(a), clearTimeout(a.data("videoplaywait")), e.stopVideo && e.stopVideo(a, t), e.endMoveCaption(a, null, null, t), t.playingvideos = [], t.lastplayedvideos = [])
            })
        }
    });
    var t = function() {
            var a = new Object;
            return a.anim = new Object, a.anim.x = 0, a.anim.y = 0, a.anim.z = 0, a.anim.rotationX = 0, a.anim.rotationY = 0, a.anim.rotationZ = 0, a.anim.scaleX = 1, a.anim.scaleY = 1, a.anim.skewX = 0, a.anim.skewY = 0, a.anim.opacity = 1, a.anim.transformOrigin = "50% 50%", a.anim.transformPerspective = 600, a.anim.rotation = 0, a.anim.ease = punchgs.Power3.easeOut, a.anim.force3D = "auto", a.speed = .3, a.anim.autoAlpha = 1, a.anim.visibility = "visible", a.anim.overwrite = "all", a
        },
        i = function() {
            var a = new Object;
            return a.anim = new Object, a.anim.x = 0, a.anim.y = 0, a.anim.z = 0, a
        },
        n = function() {
            var a = new Object;
            return a.anim = new Object, a.speed = .2, a
        },
        o = function(a, e) {
            if (jQuery.isNumeric(parseFloat(a))) return parseFloat(a);
            if (void 0 === a || "inherit" === a) return e;
            if (a.split("{").length > 1) {
                var t = a.split(","),
                    i = parseFloat(t[1].split("}")[0]);
                t = parseFloat(t[0].split("{")[1]), a = Math.random() * (i - t) + t
            }
            return a
        },
        r = function(a, e, t, i, n, o, r) {
            return !jQuery.isNumeric(a) && a.match(/%]/g) ? (a = a.split("[")[1].split("]")[0], "horizontal" == r ? a = (t + 2) * parseInt(a, 0) / 100 : "vertical" == r && (a = (i + 2) * parseInt(a, 0) / 100)) : (a = "layer_left" === a ? 0 - t : "layer_right" === a ? t : a, a = "layer_top" === a ? 0 - i : "layer_bottom" === a ? i : a, a = "left" === a || "stage_left" === a ? 0 - t - o : "right" === a || "stage_right" === a ? e.conw - o : "center" === a || "stage_center" === a ? e.conw / 2 - t / 2 - o : a, a = "top" === a || "stage_top" === a ? 0 - i - n : "bottom" === a || "stage_bottom" === a ? e.conh - n : "middle" === a || "stage_middle" === a ? e.conh / 2 - i / 2 - n : a), a
        },
        d = function(a, e, t) {
            var i = new Object;
            if (i = jQuery.extend(!0, {}, i, a), void 0 === e) return i;
            var n = e.split(";");
            return n && jQuery.each(n, function(a, e) {
                var n = e.split(":"),
                    r = n[0],
                    d = n[1];
                t && void 0 != d && d.length > 0 && d.match(/\(R\)/) && (d = d.replace("(R)", ""), d = "right" === d ? "left" : "left" === d ? "right" : "top" === d ? "bottom" : "bottom" === d ? "top" : d, "[" === d[0] && "-" === d[1] ? d = d.replace("[-", "[") : "[" === d[0] && "-" !== d[1] ? d = d.replace("[", "[-") : "-" === d[0] ? d = d.replace("-", "") : d[0].match(/[1-9]/) && (d = "-" + d)), void 0 != d && (d = d.replace(/\(R\)/, ""), ("rotationX" == r || "rX" == r) && (i.anim.rotationX = o(d, i.anim.rotationX) + "deg"), ("rotationY" == r || "rY" == r) && (i.anim.rotationY = o(d, i.anim.rotationY) + "deg"), ("rotationZ" == r || "rZ" == r) && (i.anim.rotation = o(d, i.anim.rotationZ) + "deg"), ("scaleX" == r || "sX" == r) && (i.anim.scaleX = o(d, i.anim.scaleX)), ("scaleY" == r || "sY" == r) && (i.anim.scaleY = o(d, i.anim.scaleY)), ("opacity" == r || "o" == r) && (i.anim.opacity = o(d, i.anim.opacity)), ("skewX" == r || "skX" == r) && (i.anim.skewX = o(d, i.anim.skewX)), ("skewY" == r || "skY" == r) && (i.anim.skewY = o(d, i.anim.skewY)), "x" == r && (i.anim.x = o(d, i.anim.x)), "y" == r && (i.anim.y = o(d, i.anim.y)), "z" == r && (i.anim.z = o(d, i.anim.z)), ("transformOrigin" == r || "tO" == r) && (i.anim.transformOrigin = d.toString()), ("transformPerspective" == r || "tP" == r) && (i.anim.transformPerspective = parseInt(d, 0)), ("speed" == r || "s" == r) && (i.speed = parseFloat(d) / 1e3), ("ease" == r || "e" == r) && (i.anim.ease = d))
            }), i
        },
        s = function(a) {
            if (void 0 === a) return !1;
            var e = new Object;
            e.anim = new Object;
            var t = a.split(";");
            return t && jQuery.each(t, function(a, t) {
                t = t.split(":");
                var i = t[0],
                    n = t[1];
                "x" == i && (e.anim.x = n), "y" == i && (e.anim.y = n), "s" == i && (e.speed = parseFloat(n) / 1e3), ("e" == i || "ease" == i) && (e.anim.ease = n)
            }), e
        },
        l = function(a, e) {
            if (void 0 == a && (a = 0), !jQuery.isArray(a) && "string" === jQuery.type(a) && (a.split(",").length > 1 || a.split("[").length > 1)) {
                a = a.replace("[", ""), a = a.replace("]", "");
                var t = a.split(a.match(/'/g) ? "'," : ",");
                a = new Array, t && jQuery.each(t, function(e, t) {
                    t = t.replace("'", ""), t = t.replace("'", ""), a.push(t)
                })
            } else {
                var i = a;
                jQuery.isArray(a) || (a = new Array, a.push(i))
            }
            var i = a[a.length - 1];
            if (a.length < e.rle)
                for (var n = 1; n <= e.curWinRange; n++) a.push(i);
            return a
        },
        p = function(a, e, t, i) {
            var n = -1;
            if (a.hasClass("tp-static-layer")) {
                var o = parseInt(a.data("startslide"), 0),
                    r = parseInt(a.data("endslide"), 0),
                    d = e.c.find(".processing-revslide").index(),
                    s = -1 != d ? d : e.c.find(".active-revslide").index();
                s = -1 == s ? 0 : s, "in" === t ? a.hasClass("rev-static-visbile") ? n = r == s || o > s || s > r ? 2 : 0 : s >= o && r >= s || o == s || r == s ? (i || (a.addClass("rev-static-visbile"), a.removeClass("rev-static-hidden")), n = 1) : n = 0 : a.hasClass("rev-static-visbile") ? o > s || s > r ? (n = 2, i || (a.removeClass("rev-static-visbile"), a.addClass("rev-static-hidden"))) : n = 0 : n = 2
            }
            return n
        },
        h = function(a, e) {
            if (void 0 === e) return a;
            e = e.replace("c:", "color:"), e = e.replace("bg:", "background-color:"), e = e.replace("bw:", "border-width:"), e = e.replace("bc:", "border-color:"), e = e.replace("br:", "borderRadius:"), e = e.replace("bs:", "border-style:"), e = e.replace("td:", "text-decoration:");
            var t = e.split(";");
            return t && jQuery.each(t, function(e, t) {
                var i = t.split(":");
                i[0].length > 0 && (a.anim[i[0]] = i[1])
            }), a
        },
        c = function(a, e) {
            var t, i = new Object,
                n = !1;
            if ("rekursive" == e && (t = a.closest(".tp-caption"), t && a.css("fontSize") === t.css("fontSize") && (n = !0)), i.basealign = a.data("basealign") || "grid", i.fontSize = n ? void 0 === t.data("fontsize") ? parseInt(t.css("fontSize"), 0) || 0 : t.data("fontsize") : void 0 === a.data("fontsize") ? parseInt(a.css("fontSize"), 0) || 0 : a.data("fontsize"), i.fontWeight = n ? void 0 === t.data("fontweight") ? parseInt(t.css("fontWeight"), 0) || 0 : t.data("fontweight") : void 0 === a.data("fontweight") ? parseInt(a.css("fontWeight"), 0) || 0 : a.data("fontweight"), i.whiteSpace = n ? void 0 === t.data("whitespace") ? t.css("whitespace") || "normal" : t.data("whitespace") : void 0 === a.data("whitespace") ? a.css("whitespace") || "normal" : a.data("whitespace"), i.lineHeight = n ? void 0 === t.data("lineheight") ? parseInt(t.css("lineHeight"), 0) || 0 : t.data("lineheight") : void 0 === a.data("lineheight") ? parseInt(a.css("lineHeight"), 0) || 0 : a.data("lineheight"), i.letterSpacing = n ? void 0 === t.data("letterspacing") ? parseFloat(t.css("letterSpacing"), 0) || 0 : t.data("letterspacing") : void 0 === a.data("letterspacing") ? parseFloat(a.css("letterSpacing")) || 0 : a.data("letterspacing"), i.paddingTop = void 0 === a.data("paddingtop") ? parseInt(a.css("paddingTop"), 0) || 0 : a.data("paddingtop"), i.paddingBottom = void 0 === a.data("paddingbottom") ? parseInt(a.css("paddingBottom"), 0) || 0 : a.data("paddingbottom"), i.paddingLeft = void 0 === a.data("paddingleft") ? parseInt(a.css("paddingLeft"), 0) || 0 : a.data("paddingleft"), i.paddingRight = void 0 === a.data("paddingright") ? parseInt(a.css("paddingRight"), 0) || 0 : a.data("paddingright"), i.marginTop = void 0 === a.data("margintop") ? parseInt(a.css("marginTop"), 0) || 0 : a.data("margintop"), i.marginBottom = void 0 === a.data("marginbottom") ? parseInt(a.css("marginBottom"), 0) || 0 : a.data("marginbottom"), i.marginLeft = void 0 === a.data("marginleft") ? parseInt(a.css("marginLeft"), 0) || 0 : a.data("marginleft"), i.marginRight = void 0 === a.data("marginright") ? parseInt(a.css("marginRight"), 0) || 0 : a.data("marginright"), i.borderTopWidth = void 0 === a.data("bordertopwidth") ? parseInt(a.css("borderTopWidth"), 0) || 0 : a.data("bordertopwidth"), i.borderBottomWidth = void 0 === a.data("borderbottomwidth") ? parseInt(a.css("borderBottomWidth"), 0) || 0 : a.data("borderbottomwidth"), i.borderLeftWidth = void 0 === a.data("borderleftwidth") ? parseInt(a.css("borderLeftWidth"), 0) || 0 : a.data("borderleftwidth"), i.borderRightWidth = void 0 === a.data("borderrightwidth") ? parseInt(a.css("borderRightWidth"), 0) || 0 : a.data("borderrightwidth"), "rekursive" != e) {
                if (i.color = void 0 === a.data("color") ? "nopredefinedcolor" : a.data("color"), i.whiteSpace = n ? void 0 === t.data("whitespace") ? t.css("whiteSpace") || "nowrap" : t.data("whitespace") : void 0 === a.data("whitespace") ? a.css("whiteSpace") || "nowrap" : a.data("whitespace"), i.minWidth = void 0 === a.data("width") ? parseInt(a.css("minWidth"), 0) || 0 : a.data("width"), i.minHeight = void 0 === a.data("height") ? parseInt(a.css("minHeight"), 0) || 0 : a.data("height"), void 0 != a.data("videowidth") && void 0 != a.data("videoheight")) {
                    var o = a.data("videowidth"),
                        r = a.data("videoheight");
                    o = "100%" === o ? "none" : o, r = "100%" === r ? "none" : r, a.data("width", o), a.data("height", r)
                }
                i.maxWidth = void 0 === a.data("width") ? parseInt(a.css("maxWidth"), 0) || "none" : a.data("width"), i.maxHeight = void 0 === a.data("height") ? parseInt(a.css("maxHeight"), 0) || "none" : a.data("height"), i.wan = void 0 === a.data("wan") ? parseInt(a.css("-webkit-transition"), 0) || "none" : a.data("wan"), i.moan = void 0 === a.data("moan") ? parseInt(a.css("-moz-animation-transition"), 0) || "none" : a.data("moan"), i.man = void 0 === a.data("man") ? parseInt(a.css("-ms-animation-transition"), 0) || "none" : a.data("man"), i.ani = void 0 === a.data("ani") ? parseInt(a.css("transition"), 0) || "none" : a.data("ani")
            }
            return i.styleProps = a.css(["background-color", "border-top-color", "border-bottom-color", "border-right-color", "border-left-color", "border-top-style", "border-bottom-style", "border-left-style", "border-right-style", "border-left-width", "border-right-width", "border-bottom-width", "border-top-width", "color", "text-decoration", "font-style", "border-radius"]), i
        },
        g = function(a, e) {
            var t = new Object;
            return a && jQuery.each(a, function(i, n) {
                t[i] = l(n, e)[e.curWinRange] || a[i]
            }), t
        },
        m = function(a, e, t, i) {
            return a = jQuery.isNumeric(a) ? a * e + "px" : a, a = "full" === a ? i : "auto" === a || "none" === a ? t : a
        },
        u = function(a, e, t, i) {
            var n;
            void 0 === a.data("cssobj") ? (n = c(a, t), a.data("cssobj", n)) : n = a.data("cssobj");
            var o = g(n, e),
                r = e.bw,
                d = e.bh;
            if ("off" === i && (r = 1, d = 1), "auto" == o.lineHeight && (o.lineHeight = o.fontSize + 4), !a.hasClass("tp-splitted")) {
                a.css("-webkit-transition", "none"), a.css("-moz-transition", "none"), a.css("-ms-transition", "none"), a.css("transition", "none");
                var s = void 0 !== a.data("transform_hover") || void 0 !== a.data("style_hover");
                if (s && punchgs.TweenLite.set(a, o.styleProps), punchgs.TweenLite.set(a, {
                        fontSize: Math.round(o.fontSize * r) + "px",
                        fontWeight: o.fontWeight,
                        letterSpacing: Math.floor(o.letterSpacing * r) + "px",
                        paddingTop: Math.round(o.paddingTop * d) + "px",
                        paddingBottom: Math.round(o.paddingBottom * d) + "px",
                        paddingLeft: Math.round(o.paddingLeft * r) + "px",
                        paddingRight: Math.round(o.paddingRight * r) + "px",
                        marginTop: o.marginTop * d + "px",
                        marginBottom: o.marginBottom * d + "px",
                        marginLeft: o.marginLeft * r + "px",
                        marginRight: o.marginRight * r + "px",
                        borderTopWidth: Math.round(o.borderTopWidth * d) + "px",
                        borderBottomWidth: Math.round(o.borderBottomWidth * d) + "px",
                        borderLeftWidth: Math.round(o.borderLeftWidth * r) + "px",
                        borderRightWidth: Math.round(o.borderRightWidth * r) + "px",
                        lineHeight: Math.round(o.lineHeight * d) + "px",
                        overwrite: "auto"
                    }), "rekursive" != t) {
                    var l = "slide" == o.basealign ? e.ulw : e.gridwidth[e.curWinRange],
                        p = "slide" == o.basealign ? e.ulh : e.gridheight[e.curWinRange],
                        h = m(o.maxWidth, r, "none", l),
                        u = m(o.maxHeight, d, "none", p),
                        v = m(o.minWidth, r, "0px", l),
                        f = m(o.minHeight, d, "0px", p);
                    punchgs.TweenLite.set(a, {
                        maxWidth: h,
                        maxHeight: u,
                        minWidth: v,
                        minHeight: f,
                        whiteSpace: o.whiteSpace,
                        overwrite: "auto"
                    }), "nopredefinedcolor" != o.color && punchgs.TweenLite.set(a, {
                        color: o.color,
                        overwrite: "auto"
                    })
                }
                setTimeout(function() {
                    a.css("-webkit-transition", a.data("wan")), a.css("-moz-transition", a.data("moan")), a.css("-ms-transition", a.data("man")), a.css("transition", a.data("ani"))
                }, 30)
            }
        },
        v = function(a, e) {
            if (a.hasClass("rs-pendulum") && void 0 == a.data("loop-timeline")) {
                a.data("loop-timeline", new punchgs.TimelineLite);
                var t = void 0 == a.data("startdeg") ? -20 : a.data("startdeg"),
                    i = void 0 == a.data("enddeg") ? 20 : a.data("enddeg"),
                    n = void 0 == a.data("speed") ? 2 : a.data("speed"),
                    o = void 0 == a.data("origin") ? "50% 50%" : a.data("origin"),
                    r = void 0 == a.data("easing") ? punchgs.Power2.easeInOut : a.data("ease");
                t *= e, i *= e, a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a, n, {
                    force3D: "auto",
                    rotation: t,
                    transformOrigin: o
                }, {
                    rotation: i,
                    ease: r
                })), a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a, n, {
                    force3D: "auto",
                    rotation: i,
                    transformOrigin: o
                }, {
                    rotation: t,
                    ease: r,
                    onComplete: function() {
                        a.data("loop-timeline").restart()
                    }
                }))
            }
            if (a.hasClass("rs-rotate") && void 0 == a.data("loop-timeline")) {
                a.data("loop-timeline", new punchgs.TimelineLite);
                var t = void 0 == a.data("startdeg") ? 0 : a.data("startdeg"),
                    i = void 0 == a.data("enddeg") ? 360 : a.data("enddeg");
                n = void 0 == a.data("speed") ? 2 : a.data("speed"), o = void 0 == a.data("origin") ? "50% 50%" : a.data("origin"), r = void 0 == a.data("easing") ? punchgs.Power2.easeInOut : a.data("easing"), t *= e, i *= e, a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a, n, {
                    force3D: "auto",
                    rotation: t,
                    transformOrigin: o
                }, {
                    rotation: i,
                    ease: r,
                    onComplete: function() {
                        a.data("loop-timeline").restart()
                    }
                }))
            }
            if (a.hasClass("rs-slideloop") && void 0 == a.data("loop-timeline")) {
                a.data("loop-timeline", new punchgs.TimelineLite);
                var d = void 0 == a.data("xs") ? 0 : a.data("xs"),
                    s = void 0 == a.data("ys") ? 0 : a.data("ys"),
                    l = void 0 == a.data("xe") ? 0 : a.data("xe"),
                    p = void 0 == a.data("ye") ? 0 : a.data("ye"),
                    n = void 0 == a.data("speed") ? 2 : a.data("speed"),
                    r = void 0 == a.data("easing") ? punchgs.Power2.easeInOut : a.data("easing");
                d *= e, s *= e, l *= e, p *= e, a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a, n, {
                    force3D: "auto",
                    x: d,
                    y: s
                }, {
                    x: l,
                    y: p,
                    ease: r
                })), a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a, n, {
                    force3D: "auto",
                    x: l,
                    y: p
                }, {
                    x: d,
                    y: s,
                    onComplete: function() {
                        a.data("loop-timeline").restart()
                    }
                }))
            }
            if (a.hasClass("rs-pulse") && void 0 == a.data("loop-timeline")) {
                a.data("loop-timeline", new punchgs.TimelineLite);
                var h = void 0 == a.data("zoomstart") ? 0 : a.data("zoomstart"),
                    c = void 0 == a.data("zoomend") ? 0 : a.data("zoomend"),
                    n = void 0 == a.data("speed") ? 2 : a.data("speed"),
                    r = void 0 == a.data("easing") ? punchgs.Power2.easeInOut : a.data("easing");
                a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a, n, {
                    force3D: "auto",
                    scale: h
                }, {
                    scale: c,
                    ease: r
                })), a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a, n, {
                    force3D: "auto",
                    scale: c
                }, {
                    scale: h,
                    onComplete: function() {
                        a.data("loop-timeline").restart()
                    }
                }))
            }
            if (a.hasClass("rs-wave") && void 0 == a.data("loop-timeline")) {
                a.data("loop-timeline", new punchgs.TimelineLite);
                var g = void 0 == a.data("angle") ? 10 : parseInt(a.data("angle"), 0),
                    m = void 0 == a.data("radius") ? 10 : parseInt(a.data("radius"), 0),
                    n = void 0 == a.data("speed") ? -20 : a.data("speed"),
                    o = void 0 == a.data("origin") ? "50% 50%" : a.data("origin"),
                    u = o.split(" "),
                    v = new Object;
                u.length >= 1 ? (v.x = u[0], v.y = u[1]) : (v.x = "50%", v.y = "50%"), g *= e, m *= e;
                var f = 0 - a.height() / 2 + m * (-1 + parseInt(v.y, 0) / 100),
                    w = a.width() * (-.5 + parseInt(v.x, 0) / 100),
                    y = {
                        a: 0,
                        ang: g,
                        element: a,
                        unit: m,
                        xoffset: w,
                        yoffset: f
                    };
                a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(y, n, {
                    a: 360
                }, {
                    a: 0,
                    force3D: "auto",
                    ease: punchgs.Linear.easeNone,
                    onUpdate: function() {
                        var a = y.a * (Math.PI / 180);
                        punchgs.TweenLite.to(y.element, .1, {
                            force3D: "auto",
                            x: y.xoffset + Math.cos(a) * y.unit,
                            y: y.yoffset + y.unit * (1 - Math.sin(a))
                        })
                    },
                    onComplete: function() {
                        a.data("loop-timeline").restart()
                    }
                }))
            }
        },
        f = function(a) {
            a.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function() {
                var a = jQuery(this);
                void 0 != a.data("loop-timeline") && (a.data("loop-timeline").pause(), a.data("loop-timeline", null))
            })
        }
}(jQuery);