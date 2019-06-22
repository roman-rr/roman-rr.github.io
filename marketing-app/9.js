(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-f9db771e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-f9db771e.js ***!
  \***********************************************************************/
/*! exports provided: Swiper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return Swiper; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");

var doc = "undefined" == typeof document ? { body: {}, addEventListener: function () { }, removeEventListener: function () { }, activeElement: { blur: function () { }, nodeName: "" }, querySelector: function () { return null; }, querySelectorAll: function () { return []; }, getElementById: function () { return null; }, createEvent: function () { return { initEvent: function () { } }; }, createElement: function () { return { children: [], childNodes: [], style: {}, setAttribute: function () { }, getElementsByTagName: function () { return []; } }; }, location: { hash: "" } } : document, win = "undefined" == typeof window ? { document: doc, navigator: { userAgent: "" }, location: {}, history: {}, CustomEvent: function () { return this; }, addEventListener: function () { }, removeEventListener: function () { }, getComputedStyle: function () { return { getPropertyValue: function () { return ""; } }; }, Image: function () { }, Date: function () { }, screen: {}, setTimeout: function () { }, clearTimeout: function () { } } : window, Dom7 = function (e) { for (var t = 0; t < e.length; t += 1)
    this[t] = e[t]; return this.length = e.length, this; };
function $(e, t) { var i = [], s = 0; if (e && !t && e instanceof Dom7)
    return e; if (e)
    if ("string" == typeof e) {
        var a = void 0, r = void 0, n = e.trim();
        if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
            var o = "div";
            for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = doc.createElement(o)).innerHTML = n, s = 0; s < r.childNodes.length; s += 1)
                i.push(r.childNodes[s]);
        }
        else
            for (a = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || doc).querySelectorAll(e.trim()) : [doc.getElementById(e.trim().split("#")[1])], s = 0; s < a.length; s += 1)
                a[s] && i.push(a[s]);
    }
    else if (e.nodeType || e === win || e === doc)
        i.push(e);
    else if (e.length > 0 && e[0].nodeType)
        for (s = 0; s < e.length; s += 1)
            i.push(e[s]); return new Dom7(i); }
function unique(e) { for (var t = [], i = 0; i < e.length; i += 1)
    -1 === t.indexOf(e[i]) && t.push(e[i]); return t; }
function addClass(e) { if (void 0 === e)
    return this; for (var t = e.split(" "), i = 0; i < t.length; i += 1)
    for (var s = 0; s < this.length; s += 1)
        void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]); return this; }
function removeClass(e) { for (var t = e.split(" "), i = 0; i < t.length; i += 1)
    for (var s = 0; s < this.length; s += 1)
        void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]); return this; }
function hasClass(e) { return !!this[0] && this[0].classList.contains(e); }
function toggleClass(e) { for (var t = e.split(" "), i = 0; i < t.length; i += 1)
    for (var s = 0; s < this.length; s += 1)
        void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]); return this; }
function attr(e, t) { if (1 === arguments.length && "string" == typeof e)
    return this[0] ? this[0].getAttribute(e) : void 0; for (var i = 0; i < this.length; i += 1)
    if (2 === arguments.length)
        this[i].setAttribute(e, t);
    else
        for (var s in e)
            this[i][s] = e[s], this[i].setAttribute(s, e[s]); return this; }
function removeAttr(e) { for (var t = 0; t < this.length; t += 1)
    this[t].removeAttribute(e); return this; }
function data(e, t) { var i; if (void 0 !== t) {
    for (var s = 0; s < this.length; s += 1)
        (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
    return this;
} if (i = this[0])
    return i.dom7ElementDataStorage && e in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[e] : i.getAttribute("data-" + e) || void 0; }
function transform(e) { for (var t = 0; t < this.length; t += 1) {
    var i = this[t].style;
    i.webkitTransform = e, i.transform = e;
} return this; }
function transition(e) { "string" != typeof e && (e += "ms"); for (var t = 0; t < this.length; t += 1) {
    var i = this[t].style;
    i.webkitTransitionDuration = e, i.transitionDuration = e;
} return this; }
function on() { for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t]; var i = e[0], s = e[1], a = e[2], r = e[3]; function n(e) { var t = e.target; if (t) {
    var i = e.target.dom7EventData || [];
    if (i.indexOf(e) < 0 && i.unshift(e), $(t).is(s))
        a.apply(t, i);
    else
        for (var r = $(t).parents(), n = 0; n < r.length; n += 1)
            $(r[n]).is(s) && a.apply(r[n], i);
} } function o(e) { var t = e && e.target && e.target.dom7EventData || []; t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t); } "function" == typeof e[1] && (i = e[0], a = e[1], r = e[2], s = void 0), r || (r = !1); for (var l, d = i.split(" "), h = 0; h < this.length; h += 1) {
    var p = this[h];
    if (s)
        for (l = 0; l < d.length; l += 1)
            u = d[l], p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[u] || (p.dom7LiveListeners[u] = []), p.dom7LiveListeners[u].push({ listener: a, proxyListener: n }), p.addEventListener(u, n, r);
    else
        for (l = 0; l < d.length; l += 1) {
            var u = d[l];
            p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[u] || (p.dom7Listeners[u] = []), p.dom7Listeners[u].push({ listener: a, proxyListener: o }), p.addEventListener(u, o, r);
        }
} return this; }
function off() { for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t]; var i = e[0], s = e[1], a = e[2], r = e[3]; "function" == typeof e[1] && (i = e[0], a = e[1], r = e[2], s = void 0), r || (r = !1); for (var n = i.split(" "), o = 0; o < n.length; o += 1)
    for (var l = n[o], d = 0; d < this.length; d += 1) {
        var h = this[d], p = void 0;
        if (!s && h.dom7Listeners ? p = h.dom7Listeners[l] : s && h.dom7LiveListeners && (p = h.dom7LiveListeners[l]), p && p.length)
            for (var u = p.length - 1; u >= 0; u -= 1) {
                var c = p[u];
                a && c.listener === a ? (h.removeEventListener(l, c.proxyListener, r), p.splice(u, 1)) : a && c.listener && c.listener.dom7proxy && c.listener.dom7proxy === a ? (h.removeEventListener(l, c.proxyListener, r), p.splice(u, 1)) : a || (h.removeEventListener(l, c.proxyListener, r), p.splice(u, 1));
            }
    } return this; }
function trigger() { for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t]; for (var i = e[0].split(" "), s = e[1], a = 0; a < i.length; a += 1)
    for (var r = i[a], n = 0; n < this.length; n += 1) {
        var o = this[n], l = void 0;
        try {
            l = new win.CustomEvent(r, { detail: s, bubbles: !0, cancelable: !0 });
        }
        catch (e) {
            (l = doc.createEvent("Event")).initEvent(r, !0, !0), l.detail = s;
        }
        o.dom7EventData = e.filter(function (e, t) { return t > 0; }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData;
    } return this; }
function transitionEnd(e) { var t, i = ["webkitTransitionEnd", "transitionend"], s = this; function a(r) { if (r.target === this)
    for (e.call(this, r), t = 0; t < i.length; t += 1)
        s.off(i[t], a); } if (e)
    for (t = 0; t < i.length; t += 1)
        s.on(i[t], a); return this; }
function outerWidth(e) { if (this.length > 0) {
    if (e) {
        var t = this.styles();
        return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
    }
    return this[0].offsetWidth;
} return null; }
function outerHeight(e) { if (this.length > 0) {
    if (e) {
        var t = this.styles();
        return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
    }
    return this[0].offsetHeight;
} return null; }
function offset() { if (this.length > 0) {
    var e = this[0], t = e.getBoundingClientRect(), i = doc.body;
    return { top: t.top + (e === win ? win.scrollY : e.scrollTop) - (e.clientTop || i.clientTop || 0), left: t.left + (e === win ? win.scrollX : e.scrollLeft) - (e.clientLeft || i.clientLeft || 0) };
} return null; }
function styles() { return this[0] ? win.getComputedStyle(this[0], null) : {}; }
function css(e, t) { var i; if (1 === arguments.length) {
    if ("string" != typeof e) {
        for (i = 0; i < this.length; i += 1)
            for (var s in e)
                this[i].style[s] = e[s];
        return this;
    }
    if (this[0])
        return win.getComputedStyle(this[0], null).getPropertyValue(e);
} if (2 === arguments.length && "string" == typeof e) {
    for (i = 0; i < this.length; i += 1)
        this[i].style[e] = t;
    return this;
} return this; }
function each(e) { if (!e)
    return this; for (var t = 0; t < this.length; t += 1)
    if (!1 === e.call(this[t], t, this[t]))
        return this; return this; }
function html(e) { if (void 0 === e)
    return this[0] ? this[0].innerHTML : void 0; for (var t = 0; t < this.length; t += 1)
    this[t].innerHTML = e; return this; }
function text(e) { if (void 0 === e)
    return this[0] ? this[0].textContent.trim() : null; for (var t = 0; t < this.length; t += 1)
    this[t].textContent = e; return this; }
function is(e) { var t, i, s = this[0]; if (!s || void 0 === e)
    return !1; if ("string" == typeof e) {
    if (s.matches)
        return s.matches(e);
    if (s.webkitMatchesSelector)
        return s.webkitMatchesSelector(e);
    if (s.msMatchesSelector)
        return s.msMatchesSelector(e);
    for (t = $(e), i = 0; i < t.length; i += 1)
        if (t[i] === s)
            return !0;
    return !1;
} if (e === doc)
    return s === doc; if (e === win)
    return s === win; if (e.nodeType || e instanceof Dom7) {
    for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1)
        if (t[i] === s)
            return !0;
    return !1;
} return !1; }
function index() { var e, t = this[0]; if (t) {
    for (e = 0; null !== (t = t.previousSibling);)
        1 === t.nodeType && (e += 1);
    return e;
} }
function eq(e) { if (void 0 === e)
    return this; var t, i = this.length; return new Dom7(e > i - 1 ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]]); }
function append() { for (var e, t = [], i = 0; i < arguments.length; i++)
    t[i] = arguments[i]; for (var s = 0; s < t.length; s += 1) {
    e = t[s];
    for (var a = 0; a < this.length; a += 1)
        if ("string" == typeof e) {
            var r = doc.createElement("div");
            for (r.innerHTML = e; r.firstChild;)
                this[a].appendChild(r.firstChild);
        }
        else if (e instanceof Dom7)
            for (var n = 0; n < e.length; n += 1)
                this[a].appendChild(e[n]);
        else
            this[a].appendChild(e);
} return this; }
function prepend(e) { var t, i; for (t = 0; t < this.length; t += 1)
    if ("string" == typeof e) {
        var s = doc.createElement("div");
        for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1)
            this[t].insertBefore(s.childNodes[i], this[t].childNodes[0]);
    }
    else if (e instanceof Dom7)
        for (i = 0; i < e.length; i += 1)
            this[t].insertBefore(e[i], this[t].childNodes[0]);
    else
        this[t].insertBefore(e, this[t].childNodes[0]); return this; }
function next(e) { return this.length > 0 ? e ? this[0].nextElementSibling && $(this[0].nextElementSibling).is(e) ? new Dom7([this[0].nextElementSibling]) : new Dom7([]) : new Dom7(this[0].nextElementSibling ? [this[0].nextElementSibling] : []) : new Dom7([]); }
function nextAll(e) { var t = [], i = this[0]; if (!i)
    return new Dom7([]); for (; i.nextElementSibling;) {
    var s = i.nextElementSibling;
    e ? $(s).is(e) && t.push(s) : t.push(s), i = s;
} return new Dom7(t); }
function prev(e) { if (this.length > 0) {
    var t = this[0];
    return e ? t.previousElementSibling && $(t.previousElementSibling).is(e) ? new Dom7([t.previousElementSibling]) : new Dom7([]) : new Dom7(t.previousElementSibling ? [t.previousElementSibling] : []);
} return new Dom7([]); }
function prevAll(e) { var t = [], i = this[0]; if (!i)
    return new Dom7([]); for (; i.previousElementSibling;) {
    var s = i.previousElementSibling;
    e ? $(s).is(e) && t.push(s) : t.push(s), i = s;
} return new Dom7(t); }
function parent(e) { for (var t = [], i = 0; i < this.length; i += 1)
    null !== this[i].parentNode && (e ? $(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode)); return $(unique(t)); }
function parents(e) { for (var t = [], i = 0; i < this.length; i += 1)
    for (var s = this[i].parentNode; s;)
        e ? $(s).is(e) && t.push(s) : t.push(s), s = s.parentNode; return $(unique(t)); }
function closest(e) { var t = this; return void 0 === e ? new Dom7([]) : (t.is(e) || (t = t.parents(e).eq(0)), t); }
function find(e) { for (var t = [], i = 0; i < this.length; i += 1)
    for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1)
        t.push(s[a]); return new Dom7(t); }
function children(e) { for (var t = [], i = 0; i < this.length; i += 1)
    for (var s = this[i].childNodes, a = 0; a < s.length; a += 1)
        e ? 1 === s[a].nodeType && $(s[a]).is(e) && t.push(s[a]) : 1 === s[a].nodeType && t.push(s[a]); return new Dom7(unique(t)); }
function remove() { for (var e = 0; e < this.length; e += 1)
    this[e].parentNode && this[e].parentNode.removeChild(this[e]); return this; }
function add() { for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t]; var i, s; for (i = 0; i < e.length; i += 1) {
    var a = $(e[i]);
    for (s = 0; s < a.length; s += 1)
        this[this.length] = a[s], this.length += 1;
} return this; }
$.fn = Dom7.prototype, $.Class = Dom7, $.Dom7 = Dom7;
var Methods = { addClass: addClass, removeClass: removeClass, hasClass: hasClass, toggleClass: toggleClass, attr: attr, removeAttr: removeAttr, data: data, transform: transform, transition: transition, on: on, off: off, trigger: trigger, transitionEnd: transitionEnd, outerWidth: outerWidth, outerHeight: outerHeight, offset: offset, css: css, each: each, html: html, text: text, is: is, index: index, eq: eq, append: append, prepend: prepend, next: next, nextAll: nextAll, prev: prev, prevAll: prevAll, parent: parent, parents: parents, closest: closest, find: find, children: children, remove: remove, add: add, styles: styles };
Object.keys(Methods).forEach(function (e) { $.fn[e] = Methods[e]; });
var Utils = { deleteProps: function (e) { var t = e; Object.keys(t).forEach(function (e) { try {
        t[e] = null;
    }
    catch (e) { } try {
        delete t[e];
    }
    catch (e) { } }); }, nextTick: function (e, t) { return void 0 === t && (t = 0), setTimeout(e, t); }, now: function () { return Date.now(); }, getTranslate: function (e, t) { var i, s, a; void 0 === t && (t = "x"); var r = win.getComputedStyle(e, null); return win.WebKitCSSMatrix ? ((s = r.transform || r.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(function (e) { return e.replace(",", "."); }).join(", ")), a = new win.WebKitCSSMatrix("none" === s ? "" : s)) : i = (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = win.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = win.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0; }, parseUrlQuery: function (e) { var t, i, s, a, r = {}, n = e || win.location.href; if ("string" == typeof n && n.length)
        for (a = (i = (n = n.indexOf("?") > -1 ? n.replace(/\S*\?/, "") : "").split("&").filter(function (e) { return "" !== e; })).length, t = 0; t < a; t += 1)
            s = i[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || ""; return r; }, isObject: function (e) { return "object" == typeof e && null !== e && e.constructor && e.constructor === Object; }, extend: function () { for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t]; for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
        var a = e[s];
        if (null != a)
            for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
                var l = r[n], d = Object.getOwnPropertyDescriptor(a, l);
                void 0 !== d && d.enumerable && (Utils.isObject(i[l]) && Utils.isObject(a[l]) ? Utils.extend(i[l], a[l]) : !Utils.isObject(i[l]) && Utils.isObject(a[l]) ? (i[l] = {}, Utils.extend(i[l], a[l])) : i[l] = a[l]);
            }
    } return i; } }, Support = function () { var e, t = doc.createElement("div"); return { touch: win.Modernizr && !0 === win.Modernizr.touch || !!(win.navigator.maxTouchPoints > 0 || "ontouchstart" in win || win.DocumentTouch && doc instanceof win.DocumentTouch), pointerEvents: !!(win.navigator.pointerEnabled || win.PointerEvent || "maxTouchPoints" in win.navigator), prefixedPointerEvents: !!win.navigator.msPointerEnabled, transition: (e = t.style, "transition" in e || "webkitTransition" in e || "MozTransition" in e), transforms3d: win.Modernizr && !0 === win.Modernizr.csstransforms3d || function () { var e = t.style; return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e; }(), flexbox: function () { for (var e = t.style, i = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), s = 0; s < i.length; s += 1)
        if (i[s] in e)
            return !0; return !1; }(), observer: "MutationObserver" in win || "WebkitMutationObserver" in win, passiveListener: function () { var e = !1; try {
        var t = Object.defineProperty({}, "passive", { get: function () { e = !0; } });
        win.addEventListener("testPassiveListener", null, t);
    }
    catch (e) { } return e; }(), gestures: "ongesturestart" in win }; }(), SwiperClass = function () { function e(e) { void 0 === e && (e = {}); var t = this; t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) { t.on(e, t.params.on[e]); }); } return e.prototype.on = function (e, t, i) { var s = this; if ("function" != typeof t)
    return s; var a = i ? "unshift" : "push"; return e.split(" ").forEach(function (e) { s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t); }), s; }, e.prototype.once = function (e, t, i) { var s = this; return "function" != typeof t ? s : s.on(e, function i() { for (var a = [], r = 0; r < arguments.length; r++)
    a[r] = arguments[r]; t.apply(s, a), s.off(e, i); }, i); }, e.prototype.off = function (e, t) { var i = this; return i.eventsListeners ? (e.split(" ").forEach(function (e) { void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach(function (s, a) { s === t && i.eventsListeners[e].splice(a, 1); }); }), i) : i; }, e.prototype.emit = function () { for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t]; var i, s, a, r = this; return r.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r), (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) { if (r.eventsListeners && r.eventsListeners[e]) {
    var t = [];
    r.eventsListeners[e].forEach(function (e) { t.push(e); }), t.forEach(function (e) { e.apply(a, s); });
} }), r) : r; }, e.prototype.useModulesParams = function (e) { var t = this; t.modules && Object.keys(t.modules).forEach(function (i) { var s = t.modules[i]; s.params && Utils.extend(e, s.params); }); }, e.prototype.useModules = function (e) { void 0 === e && (e = {}); var t = this; t.modules && Object.keys(t.modules).forEach(function (i) { var s = t.modules[i], a = e[i] || {}; s.instance && Object.keys(s.instance).forEach(function (e) { var i = s.instance[e]; t[e] = "function" == typeof i ? i.bind(t) : i; }), s.on && t.on && Object.keys(s.on).forEach(function (e) { t.on(e, s.on[e]); }), s.create && s.create.bind(t)(a); }); }, Object.defineProperty(e, "components", { set: function (e) { this.use && this.use(e); }, enumerable: !0, configurable: !0 }), e.installModule = function (e) { for (var t = [], i = 1; i < arguments.length; i++)
    t[i - 1] = arguments[i]; var s = this; s.prototype.modules || (s.prototype.modules = {}); var a = e.name || Object.keys(s.prototype.modules).length + "_" + Utils.now(); return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach(function (t) { s.prototype[t] = e.proto[t]; }), e.static && Object.keys(e.static).forEach(function (t) { s[t] = e.static[t]; }), e.install && e.install.apply(s, t), s; }, e.use = function (e) { for (var t = [], i = 1; i < arguments.length; i++)
    t[i - 1] = arguments[i]; var s = this; return Array.isArray(e) ? (e.forEach(function (e) { return s.installModule(e); }), s) : s.installModule.apply(s, [e].concat(t)); }, e; }();
function updateSize() { var e, t, i = this.$el; t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === (e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth) && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), Utils.extend(this, { width: e, height: t, size: this.isHorizontal() ? e : t })); }
function updateSlides() { var e = this.params, t = this.$wrapperEl, i = this.size, s = this.rtlTranslate, a = this.wrongRTL, r = this.virtual && e.virtual.enabled, n = r ? this.virtual.slides.length : this.slides.length, o = t.children("." + this.params.slideClass), l = r ? this.virtual.slides.length : o.length, d = [], h = [], p = [], u = e.slidesOffsetBefore; "function" == typeof u && (u = e.slidesOffsetBefore.call(this)); var c = e.slidesOffsetAfter; "function" == typeof c && (c = e.slidesOffsetAfter.call(this)); var v = this.snapGrid.length, m = this.snapGrid.length, f = e.spaceBetween, g = -u, w = 0, b = 0; if (void 0 !== i) {
    var S, T;
    "string" == typeof f && f.indexOf("%") >= 0 && (f = parseFloat(f.replace("%", "")) / 100 * i), this.virtualSize = -f, o.css(s ? { marginLeft: "", marginTop: "" } : { marginRight: "", marginBottom: "" }), e.slidesPerColumn > 1 && (S = Math.floor(l / e.slidesPerColumn) === l / this.params.slidesPerColumn ? l : Math.ceil(l / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (S = Math.max(S, e.slidesPerView * e.slidesPerColumn)));
    for (var x, E = e.slidesPerColumn, y = S / E, C = Math.floor(l / e.slidesPerColumn), M = 0; M < l; M += 1) {
        T = 0;
        var $ = o.eq(M);
        if (e.slidesPerColumn > 1) {
            var P = void 0, k = void 0, D = void 0;
            "column" === e.slidesPerColumnFill ? (D = M - (k = Math.floor(M / E)) * E, (k > C || k === C && D === E - 1) && (D += 1) >= E && (D = 0, k += 1), $.css({ "-webkit-box-ordinal-group": P = k + D * S / E, "-moz-box-ordinal-group": P, "-ms-flex-order": P, "-webkit-order": P, order: P })) : k = M - (D = Math.floor(M / y)) * y, $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", k).attr("data-swiper-row", D);
        }
        if ("none" !== $.css("display")) {
            if ("auto" === e.slidesPerView) {
                var z = win.getComputedStyle($[0], null), L = $[0].style.transform, O = $[0].style.webkitTransform;
                if (L && ($[0].style.transform = "none"), O && ($[0].style.webkitTransform = "none"), e.roundLengths)
                    T = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
                else if (this.isHorizontal()) {
                    var I = parseFloat(z.getPropertyValue("width")), A = parseFloat(z.getPropertyValue("padding-left")), B = parseFloat(z.getPropertyValue("padding-right")), X = parseFloat(z.getPropertyValue("margin-left")), G = parseFloat(z.getPropertyValue("margin-right"));
                    T = (Y = z.getPropertyValue("box-sizing")) && "border-box" === Y ? I + X + G : I + A + B + X + G;
                }
                else {
                    var Y, H = parseFloat(z.getPropertyValue("height")), V = parseFloat(z.getPropertyValue("padding-top")), U = parseFloat(z.getPropertyValue("padding-bottom")), F = parseFloat(z.getPropertyValue("margin-top")), N = parseFloat(z.getPropertyValue("margin-bottom"));
                    T = (Y = z.getPropertyValue("box-sizing")) && "border-box" === Y ? H + F + N : H + V + U + F + N;
                }
                L && ($[0].style.transform = L), O && ($[0].style.webkitTransform = O), e.roundLengths && (T = Math.floor(T));
            }
            else
                T = (i - (e.slidesPerView - 1) * f) / e.slidesPerView, e.roundLengths && (T = Math.floor(T)), o[M] && (this.isHorizontal() ? o[M].style.width = T + "px" : o[M].style.height = T + "px");
            o[M] && (o[M].swiperSlideSize = T), p.push(T), e.centeredSlides ? (g = g + T / 2 + w / 2 + f, 0 === w && 0 !== M && (g = g - i / 2 - f), 0 === M && (g = g - i / 2 - f), Math.abs(g) < .001 && (g = 0), e.roundLengths && (g = Math.floor(g)), b % e.slidesPerGroup == 0 && d.push(g), h.push(g)) : (e.roundLengths && (g = Math.floor(g)), b % e.slidesPerGroup == 0 && d.push(g), h.push(g), g = g + T + f), this.virtualSize += T + f, w = T, b += 1;
        }
    }
    if (this.virtualSize = Math.max(this.virtualSize, i) + c, s && a && ("slide" === e.effect || "coverflow" === e.effect) && t.css({ width: this.virtualSize + e.spaceBetween + "px" }), Support.flexbox && !e.setWrapperSize || (this.isHorizontal() ? t.css({ width: this.virtualSize + e.spaceBetween + "px" }) : t.css({ height: this.virtualSize + e.spaceBetween + "px" })), e.slidesPerColumn > 1 && (this.virtualSize = (T + e.spaceBetween) * S, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? t.css({ width: this.virtualSize + e.spaceBetween + "px" }) : t.css({ height: this.virtualSize + e.spaceBetween + "px" }), e.centeredSlides)) {
        for (x = [], M = 0; M < d.length; M += 1) {
            var W = d[M];
            e.roundLengths && (W = Math.floor(W)), d[M] < this.virtualSize + d[0] && x.push(W);
        }
        d = x;
    }
    if (!e.centeredSlides) {
        for (x = [], M = 0; M < d.length; M += 1)
            W = d[M], e.roundLengths && (W = Math.floor(W)), d[M] <= this.virtualSize - i && x.push(W);
        d = x, Math.floor(this.virtualSize - i) - Math.floor(d[d.length - 1]) > 1 && d.push(this.virtualSize - i);
    }
    if (0 === d.length && (d = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? o.css(s ? { marginLeft: f + "px" } : { marginRight: f + "px" }) : o.css({ marginBottom: f + "px" })), e.centerInsufficientSlides) {
        var R = 0;
        if (p.forEach(function (t) { R += t + (e.spaceBetween ? e.spaceBetween : 0); }), (R -= e.spaceBetween) < i) {
            var j = (i - R) / 2;
            d.forEach(function (e, t) { d[t] = e - j; }), h.forEach(function (e, t) { h[t] = e + j; });
        }
    }
    Utils.extend(this, { slides: o, snapGrid: d, slidesGrid: h, slidesSizesGrid: p }), l !== n && this.emit("slidesLengthChange"), d.length !== v && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), h.length !== m && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset();
} }
function updateAutoHeight(e) { var t, i = [], s = 0; if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
    for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
        var a = this.activeIndex + t;
        if (a > this.slides.length)
            break;
        i.push(this.slides.eq(a)[0]);
    }
else
    i.push(this.slides.eq(this.activeIndex)[0]); for (t = 0; t < i.length; t += 1)
    if (void 0 !== i[t]) {
        var r = i[t].offsetHeight;
        s = r > s ? r : s;
    } s && this.$wrapperEl.css("height", s + "px"); }
function updateSlidesOffset() { for (var e = this.slides, t = 0; t < e.length; t += 1)
    e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop; }
function updateSlidesProgress(e) { void 0 === e && (e = this && this.translate || 0); var t = this.params, i = this.slides, s = this.rtlTranslate; if (0 !== i.length) {
    void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
    var a = -e;
    s && (a = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
    for (var r = 0; r < i.length; r += 1) {
        var n = i[r], o = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);
        if (t.watchSlidesVisibility) {
            var l = -(a - n.swiperSlideOffset), d = l + this.slidesSizesGrid[r];
            (l >= 0 && l < this.size || d > 0 && d <= this.size || l <= 0 && d >= this.size) && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(r), i.eq(r).addClass(t.slideVisibleClass));
        }
        n.progress = s ? -o : o;
    }
    this.visibleSlides = $(this.visibleSlides);
} }
function updateProgress(e) { void 0 === e && (e = this && this.translate || 0); var t = this.params, i = this.maxTranslate() - this.minTranslate(), s = this.progress, a = this.isBeginning, r = this.isEnd, n = a, o = r; 0 === i ? (s = 0, a = !0, r = !0) : (a = (s = (e - this.minTranslate()) / i) <= 0, r = s >= 1), Utils.extend(this, { progress: s, isBeginning: a, isEnd: r }), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), a && !n && this.emit("reachBeginning toEdge"), r && !o && this.emit("reachEnd toEdge"), (n && !a || o && !r) && this.emit("fromEdge"), this.emit("progress", s); }
function updateSlidesClasses() { var e, t = this.slides, i = this.params, s = this.$wrapperEl, a = this.activeIndex, r = this.realIndex, n = this.virtual && i.virtual.enabled; t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass)); var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass); i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass); var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass); i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)); }
function updateActiveIndex(e) { var t, i = this.rtlTranslate ? this.translate : -this.translate, s = this.slidesGrid, a = this.snapGrid, r = this.params, n = this.activeIndex, o = this.realIndex, l = this.snapIndex, d = e; if (void 0 === d) {
    for (var h = 0; h < s.length; h += 1)
        void 0 !== s[h + 1] ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2 ? d = h : i >= s[h] && i < s[h + 1] && (d = h + 1) : i >= s[h] && (d = h);
    r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
} if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(d / r.slidesPerGroup)) >= a.length && (t = a.length - 1), d !== n) {
    var p = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
    Utils.extend(this, { snapIndex: t, realIndex: p, previousIndex: n, activeIndex: d }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== p && this.emit("realIndexChange"), this.emit("slideChange");
}
else
    t !== l && (this.snapIndex = t, this.emit("snapIndexChange")); }
function updateClickedSlide(e) { var t = this.params, i = $(e.target).closest("." + t.slideClass)[0], s = !1; if (i)
    for (var a = 0; a < this.slides.length; a += 1)
        this.slides[a] === i && (s = !0); if (!i || !s)
    return this.clickedSlide = void 0, void (this.clickedIndex = void 0); this.clickedSlide = i, this.clickedIndex = this.virtual && this.params.virtual.enabled ? parseInt($(i).attr("data-swiper-slide-index"), 10) : $(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide(); }
var update = { updateSize: updateSize, updateSlides: updateSlides, updateAutoHeight: updateAutoHeight, updateSlidesOffset: updateSlidesOffset, updateSlidesProgress: updateSlidesProgress, updateProgress: updateProgress, updateSlidesClasses: updateSlidesClasses, updateActiveIndex: updateActiveIndex, updateClickedSlide: updateClickedSlide };
function getTranslate(e) { void 0 === e && (e = this.isHorizontal() ? "x" : "y"); var t = this.rtlTranslate, i = this.translate; if (this.params.virtualTranslate)
    return t ? -i : i; var s = Utils.getTranslate(this.$wrapperEl[0], e); return t && (s = -s), s || 0; }
function setTranslate(e, t) { var i = this.rtlTranslate, s = this.params, a = this.$wrapperEl, r = this.progress, n = 0, o = 0; this.isHorizontal() ? n = i ? -e : e : o = e, s.roundLengths && (n = Math.floor(n), o = Math.floor(o)), s.virtualTranslate || a.transform(Support.transforms3d ? "translate3d(" + n + "px, " + o + "px, 0px)" : "translate(" + n + "px, " + o + "px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? n : o; var l = this.maxTranslate() - this.minTranslate(); (0 === l ? 0 : (e - this.minTranslate()) / l) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t); }
function minTranslate() { return -this.snapGrid[0]; }
function maxTranslate() { return -this.snapGrid[this.snapGrid.length - 1]; }
var translate = { getTranslate: getTranslate, setTranslate: setTranslate, minTranslate: minTranslate, maxTranslate: maxTranslate };
function setTransition(e, t) { this.$wrapperEl.transition(e), this.emit("setTransition", e, t); }
function transitionStart(e, t) { void 0 === e && (e = !0); var i = this.activeIndex, s = this.previousIndex; this.params.autoHeight && this.updateAutoHeight(); var a = t; if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionStart"), e && i !== s) {
    if ("reset" === a)
        return void this.emit("slideResetTransitionStart");
    this.emit("slideChangeTransitionStart"), this.emit("next" === a ? "slideNextTransitionStart" : "slidePrevTransitionStart");
} }
function transitionEnd$1(e, t) { void 0 === e && (e = !0); var i = this.activeIndex, s = this.previousIndex; this.animating = !1, this.setTransition(0); var a = t; if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
    if ("reset" === a)
        return void this.emit("slideResetTransitionEnd");
    this.emit("slideChangeTransitionEnd"), this.emit("next" === a ? "slideNextTransitionEnd" : "slidePrevTransitionEnd");
} }
var transition$1 = { setTransition: setTransition, transitionStart: transitionStart, transitionEnd: transitionEnd$1 };
function slideTo(e, t, i, s) { void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0); var a = this, r = e; r < 0 && (r = 0); var n = a.params, o = a.snapGrid, l = a.slidesGrid, d = a.previousIndex, h = a.activeIndex, p = a.rtlTranslate; if (a.animating && n.preventInteractionOnTransition)
    return !1; var u = Math.floor(r / n.slidesPerGroup); u >= o.length && (u = o.length - 1), (h || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart"); var c, v = -o[u]; if (a.updateProgress(v), n.normalizeSlideIndex)
    for (var m = 0; m < l.length; m += 1)
        -Math.floor(100 * v) >= Math.floor(100 * l[m]) && (r = m); if (a.initialized && r !== h) {
    if (!a.allowSlideNext && v < a.translate && v < a.minTranslate())
        return !1;
    if (!a.allowSlidePrev && v > a.translate && v > a.maxTranslate() && (h || 0) !== r)
        return !1;
} return c = r > h ? "next" : r < h ? "prev" : "reset", p && -v === a.translate || !p && v === a.translate ? (a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(v), "reset" !== c && (a.transitionStart(i, c), a.transitionEnd(i, c)), !1) : (0 !== t && Support.transition ? (a.setTransition(t), a.setTranslate(v), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, c), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) { a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(i, c)); }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))) : (a.setTransition(0), a.setTranslate(v), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, c), a.transitionEnd(i, c)), !0); }
function slideToLoop(e, t, i, s) { void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0); var a = e; return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s); }
function slideNext(e, t, i) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); var s = this.params; return s.loop ? !this.animating && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i); }
function slidePrev(e, t, i) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); var s = this.snapGrid, a = this.slidesGrid, r = this.rtlTranslate; if (this.params.loop) {
    if (this.animating)
        return !1;
    this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
} function n(e) { return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e); } var o, l = n(r ? this.translate : -this.translate), d = s.map(function (e) { return n(e); }), h = (a.map(function (e) { return n(e); }), d.indexOf(l), s[d.indexOf(l) - 1]); return void 0 !== h && (o = a.indexOf(h)) < 0 && (o = this.activeIndex - 1), this.slideTo(o, e, t, i); }
function slideReset(e, t, i) { return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i); }
function slideToClosest(e, t, i) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); var s = this.activeIndex, a = Math.floor(s / this.params.slidesPerGroup); if (a < this.snapGrid.length - 1) {
    var r = this.snapGrid[a];
    (this.rtlTranslate ? this.translate : -this.translate) - r > (this.snapGrid[a + 1] - r) / 2 && (s = this.params.slidesPerGroup);
} return this.slideTo(s, e, t, i); }
function slideToClickedSlide() { var e, t = this, i = t.params, s = t.$wrapperEl, a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, r = t.clickedIndex; if (i.loop) {
    if (t.animating)
        return;
    e = parseInt($(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), Utils.nextTick(function () { t.slideTo(r); })) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), Utils.nextTick(function () { t.slideTo(r); })) : t.slideTo(r);
}
else
    t.slideTo(r); }
var slide = { slideTo: slideTo, slideToLoop: slideToLoop, slideNext: slideNext, slidePrev: slidePrev, slideReset: slideReset, slideToClosest: slideToClosest, slideToClickedSlide: slideToClickedSlide };
function loopCreate() { var e = this, t = e.params, i = e.$wrapperEl; i.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(); var s = i.children("." + t.slideClass); if (t.loopFillGroupWithBlank) {
    var a = t.slidesPerGroup - s.length % t.slidesPerGroup;
    if (a !== t.slidesPerGroup) {
        for (var r = 0; r < a; r += 1) {
            var n = $(doc.createElement("div")).addClass(t.slideClass + " " + t.slideBlankClass);
            i.append(n);
        }
        s = i.children("." + t.slideClass);
    }
} "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = s.length), e.loopedSlides = parseInt(t.loopedSlides || t.slidesPerView, 10), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > s.length && (e.loopedSlides = s.length); var o = [], l = []; for (s.each(function (t, i) { var a = $(i); t < e.loopedSlides && l.push(i), t < s.length && t >= s.length - e.loopedSlides && o.push(i), a.attr("data-swiper-slide-index", t); }), r = 0; r < l.length; r += 1)
    i.append($(l[r].cloneNode(!0)).addClass(t.slideDuplicateClass)); for (r = o.length - 1; r >= 0; r -= 1)
    i.prepend($(o[r].cloneNode(!0)).addClass(t.slideDuplicateClass)); }
function loopFix() { var e, t = this.params, i = this.activeIndex, s = this.slides, a = this.loopedSlides, r = this.allowSlidePrev, n = this.allowSlideNext, o = this.snapGrid, l = this.rtlTranslate; this.allowSlidePrev = !0, this.allowSlideNext = !0; var d = -o[i] - this.getTranslate(); i < a ? (e = s.length - 3 * a + i, this.slideTo(e += a, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)) : ("auto" === t.slidesPerView && i >= 2 * a || i >= s.length - a) && (e = -s.length + i + a, this.slideTo(e += a, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)), this.allowSlidePrev = r, this.allowSlideNext = n; }
function loopDestroy() { var e = this.params, t = this.slides; this.$wrapperEl.children("." + e.slideClass + "." + e.slideDuplicateClass + ",." + e.slideClass + "." + e.slideBlankClass).remove(), t.removeAttr("data-swiper-slide-index"); }
var loop = { loopCreate: loopCreate, loopFix: loopFix, loopDestroy: loopDestroy };
function setGrabCursor(e) { if (!(Support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
    var t = this.el;
    t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
} }
function unsetGrabCursor() { Support.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = ""); }
var grabCursor = { setGrabCursor: setGrabCursor, unsetGrabCursor: unsetGrabCursor };
function appendSlide(e) { var t = this.$wrapperEl, i = this.params; if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
    for (var s = 0; s < e.length; s += 1)
        e[s] && t.append(e[s]);
else
    t.append(e); i.loop && this.loopCreate(), i.observer && Support.observer || this.update(); }
function prependSlide(e) { var t = this.params, i = this.$wrapperEl, s = this.activeIndex; t.loop && this.loopDestroy(); var a = s + 1; if ("object" == typeof e && "length" in e) {
    for (var r = 0; r < e.length; r += 1)
        e[r] && i.prepend(e[r]);
    a = s + e.length;
}
else
    i.prepend(e); t.loop && this.loopCreate(), t.observer && Support.observer || this.update(), this.slideTo(a, 0, !1); }
function addSlide(e, t) { var i = this.$wrapperEl, s = this.params, a = this.activeIndex; s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass)); var r = this.slides.length; if (e <= 0)
    this.prependSlide(t);
else if (e >= r)
    this.appendSlide(t);
else {
    for (var n = a > e ? a + 1 : a, o = [], l = r - 1; l >= e; l -= 1) {
        var d = this.slides.eq(l);
        d.remove(), o.unshift(d);
    }
    if ("object" == typeof t && "length" in t) {
        for (l = 0; l < t.length; l += 1)
            t[l] && i.append(t[l]);
        n = a > e ? a + t.length : a;
    }
    else
        i.append(t);
    for (l = 0; l < o.length; l += 1)
        i.append(o[l]);
    s.loop && this.loopCreate(), s.observer && Support.observer || this.update(), this.slideTo(s.loop ? n + this.loopedSlides : n, 0, !1);
} }
function removeSlide(e) { var t = this.params, i = this.$wrapperEl, s = this.activeIndex; t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass)); var a, r = s; if ("object" == typeof e && "length" in e) {
    for (var n = 0; n < e.length; n += 1)
        this.slides[a = e[n]] && this.slides.eq(a).remove(), a < r && (r -= 1);
    r = Math.max(r, 0);
}
else
    this.slides[a = e] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0); t.loop && this.loopCreate(), t.observer && Support.observer || this.update(), this.slideTo(t.loop ? r + this.loopedSlides : r, 0, !1); }
function removeAllSlides() { for (var e = [], t = 0; t < this.slides.length; t += 1)
    e.push(t); this.removeSlide(e); }
var manipulation = { appendSlide: appendSlide, prependSlide: prependSlide, addSlide: addSlide, removeSlide: removeSlide, removeAllSlides: removeAllSlides }, Device = function () { var e = win.navigator.userAgent, t = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: win.cordova || win.phonegap, phonegap: win.cordova || win.phonegap }, i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/), s = e.match(/(Android);?[\s\/]+([\d.]+)?/), a = e.match(/(iPad).*OS\s([\d_]+)/), r = e.match(/(iPod)(.*OS\s([\d_]+))?/), n = !a && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/); if (i && (t.os = "windows", t.osVersion = i[2], t.windows = !0), s && !i && (t.os = "android", t.osVersion = s[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (a || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), a && (t.osVersion = a[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || a || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
    var o = t.osVersion.split("."), l = doc.querySelector('meta[name="viewport"]');
    t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 * o[1] >= 1 : 1 * o[0] > 7) && l && l.getAttribute("content").indexOf("minimal-ui") >= 0;
} return t.pixelRatio = win.devicePixelRatio || 1, t; }();
function onTouchStart(e) { var t = this.touchEventsData, i = this.params, s = this.touches; if (!this.animating || !i.preventInteractionOnTransition) {
    var a = e;
    if (a.originalEvent && (a = a.originalEvent), t.isTouchEvent = "touchstart" === a.type, (t.isTouchEvent || !("which" in a) || 3 !== a.which) && !(!t.isTouchEvent && "button" in a && a.button > 0 || t.isTouched && t.isMoved))
        if (i.noSwiping && $(a.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0])
            this.allowClick = !0;
        else if (!i.swipeHandler || $(a).closest(i.swipeHandler)[0]) {
            s.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, s.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
            var r = s.currentX, n = s.currentY, o = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
            if (!i.edgeSwipeDetection && !i.iOSEdgeSwipeDetection || !(r <= o || r >= win.screen.width - o)) {
                if (Utils.extend(t, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), s.startX = r, s.startY = n, t.touchStartTime = Utils.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, i.threshold > 0 && (t.allowThresholdMove = !1), "touchstart" !== a.type) {
                    var l = !0;
                    $(a.target).is(t.formElements) && (l = !1), doc.activeElement && $(doc.activeElement).is(t.formElements) && doc.activeElement !== a.target && doc.activeElement.blur(), (i.touchStartForcePreventDefault || l && this.allowTouchMove && i.touchStartPreventDefault) && a.preventDefault();
                }
                this.emit("touchStart", a);
            }
        }
} }
function onTouchMove(e) { var t = this.touchEventsData, i = this.params, s = this.touches, a = this.rtlTranslate, r = e; if (r.originalEvent && (r = r.originalEvent), t.isTouched) {
    if (!t.isTouchEvent || "mousemove" !== r.type) {
        var n = "touchmove" === r.type ? r.targetTouches[0].pageX : r.pageX, o = "touchmove" === r.type ? r.targetTouches[0].pageY : r.pageY;
        if (r.preventedByNestedSwiper)
            return s.startX = n, void (s.startY = o);
        if (!this.allowTouchMove)
            return this.allowClick = !1, void (t.isTouched && (Utils.extend(s, { startX: n, startY: o, currentX: n, currentY: o }), t.touchStartTime = Utils.now()));
        if (t.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
            if (this.isVertical()) {
                if (o < s.startY && this.translate <= this.maxTranslate() || o > s.startY && this.translate >= this.minTranslate())
                    return t.isTouched = !1, void (t.isMoved = !1);
            }
            else if (n < s.startX && this.translate <= this.maxTranslate() || n > s.startX && this.translate >= this.minTranslate())
                return;
        if (t.isTouchEvent && doc.activeElement && r.target === doc.activeElement && $(r.target).is(t.formElements))
            return t.isMoved = !0, void (this.allowClick = !1);
        if (t.allowTouchCallbacks && this.emit("touchMove", r), !(r.targetTouches && r.targetTouches.length > 1)) {
            s.currentX = n, s.currentY = o;
            var l = s.currentX - s.startX, d = s.currentY - s.startY;
            if (!(this.params.threshold && Math.sqrt(Math.pow(l, 2) + Math.pow(d, 2)) < this.params.threshold)) {
                if (void 0 === t.isScrolling) {
                    var h = void 0;
                    this.isHorizontal() && s.currentY === s.startY || this.isVertical() && s.currentX === s.startX ? t.isScrolling = !1 : l * l + d * d >= 25 && (h = 180 * Math.atan2(Math.abs(d), Math.abs(l)) / Math.PI, t.isScrolling = this.isHorizontal() ? h > i.touchAngle : 90 - h > i.touchAngle);
                }
                if (t.isScrolling && this.emit("touchMoveOpposite", r), void 0 === t.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (t.startMoving = !0)), t.isScrolling)
                    t.isTouched = !1;
                else if (t.startMoving) {
                    this.allowClick = !1, r.preventDefault(), i.touchMoveStopPropagation && !i.nested && r.stopPropagation(), t.isMoved || (i.loop && this.loopFix(), t.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), t.allowMomentumBounce = !1, !i.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", r)), this.emit("sliderMove", r), t.isMoved = !0;
                    var p = this.isHorizontal() ? l : d;
                    s.diff = p, p *= i.touchRatio, a && (p = -p), this.swipeDirection = p > 0 ? "prev" : "next", t.currentTranslate = p + t.startTranslate;
                    var u = !0, c = i.resistanceRatio;
                    if (i.touchReleaseOnEdges && (c = 0), p > 0 && t.currentTranslate > this.minTranslate() ? (u = !1, i.resistance && (t.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + t.startTranslate + p, c))) : p < 0 && t.currentTranslate < this.maxTranslate() && (u = !1, i.resistance && (t.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - t.startTranslate - p, c))), u && (r.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && t.currentTranslate < t.startTranslate && (t.currentTranslate = t.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && t.currentTranslate > t.startTranslate && (t.currentTranslate = t.startTranslate), i.threshold > 0) {
                        if (!(Math.abs(p) > i.threshold || t.allowThresholdMove))
                            return void (t.currentTranslate = t.startTranslate);
                        if (!t.allowThresholdMove)
                            return t.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, t.currentTranslate = t.startTranslate, void (s.diff = this.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY);
                    }
                    i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), i.freeMode && (0 === t.velocities.length && t.velocities.push({ position: s[this.isHorizontal() ? "startX" : "startY"], time: t.touchStartTime }), t.velocities.push({ position: s[this.isHorizontal() ? "currentX" : "currentY"], time: Utils.now() })), this.updateProgress(t.currentTranslate), this.setTranslate(t.currentTranslate));
                }
            }
        }
    }
}
else
    t.startMoving && t.isScrolling && this.emit("touchMoveOpposite", r); }
function onTouchEnd(e) { var t = this, i = t.touchEventsData, s = t.params, a = t.touches, r = t.rtlTranslate, n = t.$wrapperEl, o = t.slidesGrid, l = t.snapGrid, d = e; if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched)
    return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1); s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1); var h, p = Utils.now(), u = p - i.touchStartTime; if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && p - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = Utils.nextTick(function () { t && !t.destroyed && t.emit("click", d); }, 300)), u < 300 && p - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", d))), i.lastClickTime = Utils.now(), Utils.nextTick(function () { t.destroyed || (t.allowClick = !0); }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate)
    return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1); if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, s.freeMode) {
    if (h < -t.minTranslate())
        return void t.slideTo(t.activeIndex);
    if (h > -t.maxTranslate())
        return void t.slideTo(t.slides.length < l.length ? l.length - 1 : t.slides.length - 1);
    if (s.freeModeMomentum) {
        if (i.velocities.length > 1) {
            var c = i.velocities.pop(), v = i.velocities.pop(), m = c.time - v.time;
            t.velocity = (c.position - v.position) / m, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || Utils.now() - c.time > 300) && (t.velocity = 0);
        }
        else
            t.velocity = 0;
        t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
        var f = 1e3 * s.freeModeMomentumRatio, g = t.translate + t.velocity * f;
        r && (g = -g);
        var w, b = !1, S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio, T = void 0;
        if (g < t.maxTranslate())
            s.freeModeMomentumBounce ? (g + t.maxTranslate() < -S && (g = t.maxTranslate() - S), w = t.maxTranslate(), b = !0, i.allowMomentumBounce = !0) : g = t.maxTranslate(), s.loop && s.centeredSlides && (T = !0);
        else if (g > t.minTranslate())
            s.freeModeMomentumBounce ? (g - t.minTranslate() > S && (g = t.minTranslate() + S), w = t.minTranslate(), b = !0, i.allowMomentumBounce = !0) : g = t.minTranslate(), s.loop && s.centeredSlides && (T = !0);
        else if (s.freeModeSticky) {
            for (var x = void 0, E = 0; E < l.length; E += 1)
                if (l[E] > -g) {
                    x = E;
                    break;
                }
            g = -(g = Math.abs(l[x] - g) < Math.abs(l[x - 1] - g) || "next" === t.swipeDirection ? l[x] : l[x - 1]);
        }
        if (T && t.once("transitionEnd", function () { t.loopFix(); }), 0 !== t.velocity)
            f = r ? Math.abs((-g - t.translate) / t.velocity) : Math.abs((g - t.translate) / t.velocity);
        else if (s.freeModeSticky)
            return void t.slideToClosest();
        s.freeModeMomentumBounce && b ? (t.updateProgress(w), t.setTransition(f), t.setTranslate(g), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () { t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(w), n.transitionEnd(function () { t && !t.destroyed && t.transitionEnd(); })); })) : t.velocity ? (t.updateProgress(g), t.setTransition(f), t.setTranslate(g), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () { t && !t.destroyed && t.transitionEnd(); }))) : t.updateProgress(g), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    else if (s.freeModeSticky)
        return void t.slideToClosest();
    (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
}
else {
    for (var y = 0, C = t.slidesSizesGrid[0], M = 0; M < o.length; M += s.slidesPerGroup)
        void 0 !== o[M + s.slidesPerGroup] ? h >= o[M] && h < o[M + s.slidesPerGroup] && (y = M, C = o[M + s.slidesPerGroup] - o[M]) : h >= o[M] && (y = M, C = o[o.length - 1] - o[o.length - 2]);
    var $ = (h - o[y]) / C;
    if (u > s.longSwipesMs) {
        if (!s.longSwipes)
            return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection && t.slideTo($ >= s.longSwipesRatio ? y + s.slidesPerGroup : y), "prev" === t.swipeDirection && t.slideTo($ > 1 - s.longSwipesRatio ? y + s.slidesPerGroup : y);
    }
    else {
        if (!s.shortSwipes)
            return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection && t.slideTo(y + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(y);
    }
} }
function onResize() { var e = this.params, t = this.el; if (!t || 0 !== t.offsetWidth) {
    e.breakpoints && this.setBreakpoint();
    var i = this.allowSlideNext, s = this.allowSlidePrev, a = this.snapGrid;
    if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) {
        var r = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
        this.setTranslate(r), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight();
    }
    else
        this.updateSlidesClasses(), this.slideTo(("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slides.length - 1 : this.activeIndex, 0, !1, !0);
    this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow();
} }
function onClick(e) { this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation())); }
function attachEvents() { var e = this.params, t = this.touchEvents, i = this.el, s = this.wrapperEl; this.onTouchStart = onTouchStart.bind(this), this.onTouchMove = onTouchMove.bind(this), this.onTouchEnd = onTouchEnd.bind(this), this.onClick = onClick.bind(this); var a = "container" === e.touchEventsTarget ? i : s, r = !!e.nested; if (Support.touch || !Support.pointerEvents && !Support.prefixedPointerEvents) {
    if (Support.touch) {
        var n = !("touchstart" !== t.start || !Support.passiveListener || !e.passiveListeners) && { passive: !0, capture: !1 };
        a.addEventListener(t.start, this.onTouchStart, n), a.addEventListener(t.move, this.onTouchMove, Support.passiveListener ? { passive: !1, capture: r } : r), a.addEventListener(t.end, this.onTouchEnd, n);
    }
    (e.simulateTouch && !Device.ios && !Device.android || e.simulateTouch && !Support.touch && Device.ios) && (a.addEventListener("mousedown", this.onTouchStart, !1), doc.addEventListener("mousemove", this.onTouchMove, r), doc.addEventListener("mouseup", this.onTouchEnd, !1));
}
else
    a.addEventListener(t.start, this.onTouchStart, !1), doc.addEventListener(t.move, this.onTouchMove, r), doc.addEventListener(t.end, this.onTouchEnd, !1); (e.preventClicks || e.preventClicksPropagation) && a.addEventListener("click", this.onClick, !0), this.on(Device.ios || Device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, !0); }
function detachEvents() { var e = this.params, t = this.touchEvents, i = "container" === e.touchEventsTarget ? this.el : this.wrapperEl, s = !!e.nested; if (Support.touch || !Support.pointerEvents && !Support.prefixedPointerEvents) {
    if (Support.touch) {
        var a = !("onTouchStart" !== t.start || !Support.passiveListener || !e.passiveListeners) && { passive: !0, capture: !1 };
        i.removeEventListener(t.start, this.onTouchStart, a), i.removeEventListener(t.move, this.onTouchMove, s), i.removeEventListener(t.end, this.onTouchEnd, a);
    }
    (e.simulateTouch && !Device.ios && !Device.android || e.simulateTouch && !Support.touch && Device.ios) && (i.removeEventListener("mousedown", this.onTouchStart, !1), doc.removeEventListener("mousemove", this.onTouchMove, s), doc.removeEventListener("mouseup", this.onTouchEnd, !1));
}
else
    i.removeEventListener(t.start, this.onTouchStart, !1), doc.removeEventListener(t.move, this.onTouchMove, s), doc.removeEventListener(t.end, this.onTouchEnd, !1); (e.preventClicks || e.preventClicksPropagation) && i.removeEventListener("click", this.onClick, !0), this.off(Device.ios || Device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize); }
var events = { attachEvents: attachEvents, detachEvents: detachEvents };
function setBreakpoint() { var e = this.activeIndex, t = this.initialized, i = this.loopedSlides, s = void 0 === i ? 0 : i, a = this.params, r = a.breakpoints; if (r && (!r || 0 !== Object.keys(r).length)) {
    var n = this.getBreakpoint(r);
    if (n && this.currentBreakpoint !== n) {
        var o = n in r ? r[n] : void 0;
        o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function (e) { var t = o[e]; void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto"); });
        var l = o || this.originalParams, d = a.loop && l.slidesPerView !== a.slidesPerView;
        Utils.extend(this.params, l), Utils.extend(this, { allowTouchMove: this.params.allowTouchMove, allowSlideNext: this.params.allowSlideNext, allowSlidePrev: this.params.allowSlidePrev }), this.currentBreakpoint = n, d && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - s + this.loopedSlides, 0, !1)), this.emit("breakpoint", l);
    }
} }
function getBreakpoint(e) { if (e) {
    var t = !1, i = [];
    Object.keys(e).forEach(function (e) { i.push(e); }), i.sort(function (e, t) { return parseInt(e, 10) - parseInt(t, 10); });
    for (var s = 0; s < i.length; s += 1) {
        var a = i[s];
        this.params.breakpointsInverse ? a <= win.innerWidth && (t = a) : a >= win.innerWidth && !t && (t = a);
    }
    return t || "max";
} }
var breakpoints = { setBreakpoint: setBreakpoint, getBreakpoint: getBreakpoint }, Browser = function () { return { isIE: !!win.navigator.userAgent.match(/Trident/g) || !!win.navigator.userAgent.match(/MSIE/g), isEdge: !!win.navigator.userAgent.match(/Edge/g), isSafari: (e = win.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent) }; var e; }();
function addClasses() { var e = this.classNames, t = this.params, i = this.rtl, s = this.$el, a = []; a.push(t.direction), t.freeMode && a.push("free-mode"), Support.flexbox || a.push("no-flexbox"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && a.push("multirow"), Device.android && a.push("android"), Device.ios && a.push("ios"), (Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents) && a.push("wp8-" + t.direction), a.forEach(function (i) { e.push(t.containerModifierClass + i); }), s.addClass(e.join(" ")); }
function removeClasses() { this.$el.removeClass(this.classNames.join(" ")); }
var classes = { addClasses: addClasses, removeClasses: removeClasses };
function loadImage(e, t, i, s, a, r) { var n; function o() { r && r(); } e.complete && a ? o() : t ? ((n = new win.Image).onload = o, n.onerror = o, s && (n.sizes = s), i && (n.srcset = i), t && (n.src = t)) : o(); }
function preloadImages() { var e = this; function t() { null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady"))); } e.imagesToLoad = e.$el.find("img"); for (var i = 0; i < e.imagesToLoad.length; i += 1) {
    var s = e.imagesToLoad[i];
    e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
} }
var images = { loadImage: loadImage, preloadImages: preloadImages };
function checkOverflow() { var e = this.isLocked; this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update()); }
var checkOverflow$1 = { checkOverflow: checkOverflow }, defaults = { init: !0, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, preventInteractionOnTransition: !1, edgeSwipeDetection: !1, edgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, breakpointsInverse: !1, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, centerInsufficientSlides: !1, watchOverflow: !1, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !0, touchStartPreventDefault: !0, touchStartForcePreventDefault: !1, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0 }, prototypes = { update: update, translate: translate, transition: transition$1, slide: slide, loop: loop, grabCursor: grabCursor, manipulation: manipulation, events: events, breakpoints: breakpoints, checkOverflow: checkOverflow$1, classes: classes, images: images }, extendedDefaults = {}, Swiper = function (e) { function t() { for (var i = [], s = 0; s < arguments.length; s++)
    i[s] = arguments[s]; var a, r, n; 1 === i.length && i[0].constructor && i[0].constructor === Object ? n = i[0] : (r = i[0], n = i[1]), n || (n = {}), n = Utils.extend({}, n), r && !n.el && (n.el = r), a = e.call(this, n) || this, Object.keys(prototypes).forEach(function (e) { Object.keys(prototypes[e]).forEach(function (i) { t.prototype[i] || (t.prototype[i] = prototypes[e][i]); }); }); var o = a; void 0 === o.modules && (o.modules = {}), Object.keys(o.modules).forEach(function (e) { var t = o.modules[e]; if (t.params) {
    var i = Object.keys(t.params)[0], s = t.params[i];
    if ("object" != typeof s || null === s)
        return;
    if (!(i in n && "enabled" in s))
        return;
    !0 === n[i] && (n[i] = { enabled: !0 }), "object" != typeof n[i] || "enabled" in n[i] || (n[i].enabled = !0), n[i] || (n[i] = { enabled: !1 });
} }); var l = Utils.extend({}, defaults); o.useModulesParams(l), o.params = Utils.extend({}, l, extendedDefaults, n), o.originalParams = Utils.extend({}, o.params), o.passedParams = Utils.extend({}, n), o.$ = $; var d = $(o.params.el); if (r = d[0]) {
    if (d.length > 1) {
        var h = [];
        return d.each(function (e, i) { var s = Utils.extend({}, n, { el: i }); h.push(new t(s)); }), h;
    }
    r.swiper = o, d.data("swiper", o);
    var p, u, c = d.children("." + o.params.wrapperClass);
    return Utils.extend(o, { $el: d, el: r, $wrapperEl: c, wrapperEl: c[0], classNames: [], slides: $(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function () { return "horizontal" === o.params.direction; }, isVertical: function () { return "vertical" === o.params.direction; }, rtl: "rtl" === r.dir.toLowerCase() || "rtl" === d.css("direction"), rtlTranslate: "horizontal" === o.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === d.css("direction")), wrongRTL: "-webkit-box" === c.css("display"), activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: o.params.allowSlideNext, allowSlidePrev: o.params.allowSlidePrev, touchEvents: (p = ["touchstart", "touchmove", "touchend"], u = ["mousedown", "mousemove", "mouseup"], Support.pointerEvents ? u = ["pointerdown", "pointermove", "pointerup"] : Support.prefixedPointerEvents && (u = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), o.touchEventsTouch = { start: p[0], move: p[1], end: p[2] }, o.touchEventsDesktop = { start: u[0], move: u[1], end: u[2] }, Support.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: "input, select, option, textarea, button, video", lastClickTime: Utils.now(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, allowTouchMove: o.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), o.useModules(), o.params.init && o.init(), o;
} } return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__extends"](t, e), t.prototype.slidesPerViewDynamic = function () { var e = this.slides, t = this.slidesGrid, i = this.size, s = this.activeIndex, a = 1; if (this.params.centeredSlides) {
    for (var r = e[s].swiperSlideSize, n = void 0, o = s + 1; o < e.length; o += 1)
        e[o] && !n && (a += 1, (r += e[o].swiperSlideSize) > i && (n = !0));
    for (o = s - 1; o >= 0; o -= 1)
        e[o] && !n && (a += 1, (r += e[o].swiperSlideSize) > i && (n = !0));
}
else
    for (o = s + 1; o < e.length; o += 1)
        t[o] - t[s] < i && (a += 1); return a; }, t.prototype.update = function () { var e = this; if (e && !e.destroyed) {
    var t = e.snapGrid, i = e.params;
    i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : e.slideTo(("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slides.length - 1 : e.activeIndex, 0, !1, !0) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
} function s() { var t = Math.min(Math.max(e.rtlTranslate ? -1 * e.translate : e.translate, e.maxTranslate()), e.minTranslate()); e.setTranslate(t), e.updateActiveIndex(), e.updateSlidesClasses(); } }, t.prototype.init = function () { this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.slideTo(this.params.loop ? this.params.initialSlide + this.loopedSlides : this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init")); }, t.prototype.destroy = function (e, t) { void 0 === e && (e = !0), void 0 === t && (t = !0); var i = this, s = i.params, a = i.$el, r = i.$wrapperEl, n = i.slides; return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) { i.off(e); }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), Utils.deleteProps(i)), i.destroyed = !0, null); }, t.extendDefaults = function (e) { Utils.extend(extendedDefaults, e); }, Object.defineProperty(t, "extendedDefaults", { get: function () { return extendedDefaults; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "defaults", { get: function () { return defaults; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "Class", { get: function () { return SwiperClass; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "$", { get: function () { return $; }, enumerable: !0, configurable: !0 }), t; }(SwiperClass), Device$1 = { name: "device", proto: { device: Device }, static: { device: Device } }, Support$1 = { name: "support", proto: { support: Support }, static: { support: Support } }, Browser$1 = { name: "browser", proto: { browser: Browser }, static: { browser: Browser } }, Resize = { name: "resize", create: function () { var e = this; Utils.extend(e, { resize: { resizeHandler: function () { e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize")); }, orientationChangeHandler: function () { e && !e.destroyed && e.initialized && e.emit("orientationchange"); } } }); }, on: { init: function () { win.addEventListener("resize", this.resize.resizeHandler), win.addEventListener("orientationchange", this.resize.orientationChangeHandler); }, destroy: function () { win.removeEventListener("resize", this.resize.resizeHandler), win.removeEventListener("orientationchange", this.resize.orientationChangeHandler); } } }, Observer = { func: win.MutationObserver || win.WebkitMutationObserver, attach: function (e, t) { void 0 === t && (t = {}); var i = this, s = new (0, Observer.func)(function (e) { if (1 !== e.length) {
        var t = function () { i.emit("observerUpdate", e[0]); };
        win.requestAnimationFrame ? win.requestAnimationFrame(t) : win.setTimeout(t, 0);
    }
    else
        i.emit("observerUpdate", e[0]); }); s.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), i.observer.observers.push(s); }, init: function () { if (Support.observer && this.params.observer) {
        if (this.params.observeParents)
            for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
                this.observer.attach(e[t]);
        this.observer.attach(this.$el[0], { childList: this.params.observeSlideChildren }), this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
    } }, destroy: function () { this.observer.observers.forEach(function (e) { e.disconnect(); }), this.observer.observers = []; } }, Observer$1 = { name: "observer", params: { observer: !1, observeParents: !1, observeSlideChildren: !1 }, create: function () { Utils.extend(this, { observer: { init: Observer.init.bind(this), attach: Observer.attach.bind(this), destroy: Observer.destroy.bind(this), observers: [] } }); }, on: { init: function () { this.observer.init(); }, destroy: function () { this.observer.destroy(); } } };
function isEventSupported() { var e = "onwheel" in doc; if (!e) {
    var t = doc.createElement("div");
    t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel;
} return !e && doc.implementation && doc.implementation.hasFeature && !0 !== doc.implementation.hasFeature("", "") && (e = doc.implementation.hasFeature("Events.wheel", "3.0")), e; }
var Mousewheel = { lastScrollTime: Utils.now(), event: win.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : isEventSupported() ? "wheel" : "mousewheel", normalize: function (e) { var t = 0, i = 0, s = 0, a = 0; return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), { spinX: t, spinY: i, pixelX: s, pixelY: a }; }, handleMouseEnter: function () { this.mouseEntered = !0; }, handleMouseLeave: function () { this.mouseEntered = !1; }, handle: function (e) { var t = e, i = this, s = i.params.mousewheel; if (!i.mouseEntered && !s.releaseOnEdges)
        return !0; t.originalEvent && (t = t.originalEvent); var a = 0, r = i.rtlTranslate ? -1 : 1, n = Mousewheel.normalize(t); if (s.forceToAxis)
        if (i.isHorizontal()) {
            if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY)))
                return !0;
            a = n.pixelX * r;
        }
        else {
            if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX)))
                return !0;
            a = n.pixelY;
        }
    else
        a = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY; if (0 === a)
        return !0; if (s.invert && (a = -a), i.params.freeMode) {
        i.params.loop && i.loopFix();
        var o = i.getTranslate() + a * s.sensitivity, l = i.isBeginning, d = i.isEnd;
        if (o >= i.minTranslate() && (o = i.minTranslate()), o <= i.maxTranslate() && (o = i.maxTranslate()), i.setTransition(0), i.setTranslate(o), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!l && i.isBeginning || !d && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = Utils.nextTick(function () { i.slideToClosest(); }, 300)), i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), o === i.minTranslate() || o === i.maxTranslate())
            return !0;
    }
    else {
        if (Utils.now() - i.mousewheel.lastScrollTime > 60)
            if (a < 0)
                if (i.isEnd && !i.params.loop || i.animating) {
                    if (s.releaseOnEdges)
                        return !0;
                }
                else
                    i.slideNext(), i.emit("scroll", t);
            else if (i.isBeginning && !i.params.loop || i.animating) {
                if (s.releaseOnEdges)
                    return !0;
            }
            else
                i.slidePrev(), i.emit("scroll", t);
        i.mousewheel.lastScrollTime = (new win.Date).getTime();
    } return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1; }, enable: function () { if (!Mousewheel.event)
        return !1; if (this.mousewheel.enabled)
        return !1; var e = this.$el; return "container" !== this.params.mousewheel.eventsTarged && (e = $(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(Mousewheel.event, this.mousewheel.handle), this.mousewheel.enabled = !0, !0; }, disable: function () { if (!Mousewheel.event)
        return !1; if (!this.mousewheel.enabled)
        return !1; var e = this.$el; return "container" !== this.params.mousewheel.eventsTarged && (e = $(this.params.mousewheel.eventsTarged)), e.off(Mousewheel.event, this.mousewheel.handle), this.mousewheel.enabled = !1, !0; } }, Pagination = { update: function () { var e = this.rtl, t = this.params.pagination; if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var i, s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length, a = this.pagination.$el, r = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
        if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides), i > r - 1 && (i -= r), i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
            var n, o, l = this.pagination.bullets, d = void 0;
            if (t.dynamicBullets && (this.pagination.bulletSize = l.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), d = ((o = (n = i - this.pagination.dynamicBulletIndex) + (Math.min(l.length, t.dynamicMainBullets) - 1)) + n) / 2), l.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), a.length > 1)
                l.each(function (e, s) { var a = $(s), r = a.index(); r === i && a.addClass(t.bulletActiveClass), t.dynamicBullets && (r >= n && r <= o && a.addClass(t.bulletActiveClass + "-main"), r === n && a.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), r === o && a.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")); });
            else if (l.eq(i).addClass(t.bulletActiveClass), t.dynamicBullets) {
                for (var h = l.eq(n), p = l.eq(o), u = n; u <= o; u += 1)
                    l.eq(u).addClass(t.bulletActiveClass + "-main");
                h.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), p.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
            }
            if (t.dynamicBullets) {
                var c = Math.min(l.length, t.dynamicMainBullets + 4), v = (this.pagination.bulletSize * c - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize, m = e ? "right" : "left";
                l.css(this.isHorizontal() ? m : "top", v + "px");
            }
        }
        if ("fraction" === t.type && (a.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), a.find("." + t.totalClass).text(t.formatFractionTotal(r))), "progressbar" === t.type) {
            var f;
            f = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
            var g = (i + 1) / r, w = 1, b = 1;
            "horizontal" === f ? w = g : b = g, a.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + b + ")").transition(this.params.speed);
        }
        "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)), this.emit("paginationRender", this, a[0])) : this.emit("paginationUpdate", this, a[0]), a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
    } }, render: function () { var e = this.params.pagination; if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.pagination.$el, i = "";
        if ("bullets" === e.type) {
            for (var s = this.params.loop ? Math.ceil(((this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length) - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, a = 0; a < s; a += 1)
                i += e.renderBullet ? e.renderBullet.call(this, a, e.bulletClass) : "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
            t.html(i), this.pagination.bullets = t.find("." + e.bulletClass);
        }
        "fraction" === e.type && (i = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', t.html(i)), "progressbar" === e.type && (i = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', t.html(i)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
    } }, init: function () { var e = this, t = e.params.pagination; if (t.el) {
        var i = $(t.el);
        0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function (t) { t.preventDefault(); var i = $(this).index() * e.params.slidesPerGroup; e.params.loop && (i += e.loopedSlides), e.slideTo(i); }), Utils.extend(e.pagination, { $el: i, el: i[0] }));
    } }, destroy: function () { var e = this.params.pagination; if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.pagination.$el;
        t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass);
    } } }, pagination = { name: "pagination", params: { pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, formatFractionCurrent: function (e) { return e; }, formatFractionTotal: function (e) { return e; }, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", modifierClass: "swiper-pagination-", currentClass: "swiper-pagination-current", totalClass: "swiper-pagination-total", hiddenClass: "swiper-pagination-hidden", progressbarFillClass: "swiper-pagination-progressbar-fill", progressbarOppositeClass: "swiper-pagination-progressbar-opposite", clickableClass: "swiper-pagination-clickable", lockClass: "swiper-pagination-lock" } }, create: function () { Utils.extend(this, { pagination: { init: Pagination.init.bind(this), render: Pagination.render.bind(this), update: Pagination.update.bind(this), destroy: Pagination.destroy.bind(this), dynamicBulletIndex: 0 } }); }, on: { init: function () { this.pagination.init(), this.pagination.render(), this.pagination.update(); }, activeIndexChange: function () { this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update(); }, snapIndexChange: function () { this.params.loop || this.pagination.update(); }, slidesLengthChange: function () { this.params.loop && (this.pagination.render(), this.pagination.update()); }, snapGridLengthChange: function () { this.params.loop || (this.pagination.render(), this.pagination.update()); }, destroy: function () { this.pagination.destroy(); }, click: function (e) { this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !$(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass); } } }, Scrollbar = { setTranslate: function () { if (this.params.scrollbar.el && this.scrollbar.el) {
        var e = this.scrollbar, t = e.dragSize, i = e.trackSize, s = e.$dragEl, a = e.$el, r = this.params.scrollbar, n = t, o = (i - t) * this.progress;
        this.rtlTranslate ? (o = -o) > 0 ? (n = t - o, o = 0) : -o + t > i && (n = i + o) : o < 0 ? (n = t + o, o = 0) : o + t > i && (n = i - o), this.isHorizontal() ? (s.transform(Support.transforms3d ? "translate3d(" + o + "px, 0, 0)" : "translateX(" + o + "px)"), s[0].style.width = n + "px") : (s.transform(Support.transforms3d ? "translate3d(0px, " + o + "px, 0)" : "translateY(" + o + "px)"), s[0].style.height = n + "px"), r.hide && (clearTimeout(this.scrollbar.timeout), a[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () { a[0].style.opacity = 0, a.transition(400); }, 1e3));
    } }, setTransition: function (e) { this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e); }, updateSize: function () { if (this.params.scrollbar.el && this.scrollbar.el) {
        var e = this.scrollbar, t = e.$dragEl, i = e.$el;
        t[0].style.width = "", t[0].style.height = "";
        var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, r = this.size / this.virtualSize, n = r * (a / this.size);
        s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbarHide && (i[0].style.opacity = 0), Utils.extend(e, { trackSize: a, divider: r, moveDivider: n, dragSize: s }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
    } }, setDragPosition: function (e) { var t, i = this.scrollbar, s = this.rtlTranslate, a = i.$el, r = i.dragSize, n = i.trackSize; t = ((this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.offset()[this.isHorizontal() ? "left" : "top"] - r / 2) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t); var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t; this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses(); }, onDragStart: function (e) { var t = this.params.scrollbar, i = this.scrollbar, s = this.$wrapperEl, a = i.$el, r = i.$dragEl; this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.emit("scrollbarDragStart", e); }, onDragMove: function (e) { var t = this.scrollbar, i = this.$wrapperEl, s = t.$el, a = t.$dragEl; this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e)); }, onDragEnd: function (e) { var t = this.params.scrollbar, i = this.scrollbar.$el; this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = Utils.nextTick(function () { i.css("opacity", 0), i.transition(400); }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest()); }, enableDraggable: function () { if (this.params.scrollbar.el) {
        var e = this.touchEventsTouch, t = this.touchEventsDesktop, i = this.params, s = this.scrollbar.$el[0], a = !(!Support.passiveListener || !i.passiveListeners) && { passive: !1, capture: !1 }, r = !(!Support.passiveListener || !i.passiveListeners) && { passive: !0, capture: !1 };
        Support.touch ? (s.addEventListener(e.start, this.scrollbar.onDragStart, a), s.addEventListener(e.move, this.scrollbar.onDragMove, a), s.addEventListener(e.end, this.scrollbar.onDragEnd, r)) : (s.addEventListener(t.start, this.scrollbar.onDragStart, a), doc.addEventListener(t.move, this.scrollbar.onDragMove, a), doc.addEventListener(t.end, this.scrollbar.onDragEnd, r));
    } }, disableDraggable: function () { if (this.params.scrollbar.el) {
        var e = this.touchEventsTouch, t = this.touchEventsDesktop, i = this.params, s = this.scrollbar.$el[0], a = !(!Support.passiveListener || !i.passiveListeners) && { passive: !1, capture: !1 }, r = !(!Support.passiveListener || !i.passiveListeners) && { passive: !0, capture: !1 };
        Support.touch ? (s.removeEventListener(e.start, this.scrollbar.onDragStart, a), s.removeEventListener(e.move, this.scrollbar.onDragMove, a), s.removeEventListener(e.end, this.scrollbar.onDragEnd, r)) : (s.removeEventListener(t.start, this.scrollbar.onDragStart, a), doc.removeEventListener(t.move, this.scrollbar.onDragMove, a), doc.removeEventListener(t.end, this.scrollbar.onDragEnd, r));
    } }, init: function () { if (this.params.scrollbar.el) {
        var e = this.scrollbar, t = this.$el, i = this.params.scrollbar, s = $(i.el);
        this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
        var a = s.find("." + this.params.scrollbar.dragClass);
        0 === a.length && (a = $('<div class="' + this.params.scrollbar.dragClass + '"></div>'), s.append(a)), Utils.extend(e, { $el: s, el: s[0], $dragEl: a, dragEl: a[0] }), i.draggable && e.enableDraggable();
    } }, destroy: function () { this.scrollbar.disableDraggable(); } }, scrollbar = { name: "scrollbar", params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } }, create: function () { Utils.extend(this, { scrollbar: { init: Scrollbar.init.bind(this), destroy: Scrollbar.destroy.bind(this), updateSize: Scrollbar.updateSize.bind(this), setTranslate: Scrollbar.setTranslate.bind(this), setTransition: Scrollbar.setTransition.bind(this), enableDraggable: Scrollbar.enableDraggable.bind(this), disableDraggable: Scrollbar.disableDraggable.bind(this), setDragPosition: Scrollbar.setDragPosition.bind(this), onDragStart: Scrollbar.onDragStart.bind(this), onDragMove: Scrollbar.onDragMove.bind(this), onDragEnd: Scrollbar.onDragEnd.bind(this), isTouched: !1, timeout: null, dragTimeout: null } }); }, on: { init: function () { this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate(); }, update: function () { this.scrollbar.updateSize(); }, resize: function () { this.scrollbar.updateSize(); }, observerUpdate: function () { this.scrollbar.updateSize(); }, setTranslate: function () { this.scrollbar.setTranslate(); }, setTransition: function (e) { this.scrollbar.setTransition(e); }, destroy: function () { this.scrollbar.destroy(); } } }, Zoom = { getDistanceBetweenTouches: function (e) { if (e.targetTouches.length < 2)
        return 1; var t = e.targetTouches[0].pageY, i = e.targetTouches[1].pageY; return Math.sqrt(Math.pow(e.targetTouches[1].pageX - e.targetTouches[0].pageX, 2) + Math.pow(i - t, 2)); }, onGestureStart: function (e) { var t = this.params.zoom, i = this.zoom, s = i.gesture; if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !Support.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
            return;
        i.fakeGestureTouched = !0, s.scaleStart = Zoom.getDistanceBetweenTouches(e);
    } s.$slideEl && s.$slideEl.length || (s.$slideEl = $(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = this.slides.eq(this.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + t.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), this.zoom.isScaling = !0) : s.$imageEl = void 0; }, onGestureChange: function (e) { var t = this.params.zoom, i = this.zoom, s = i.gesture; if (!Support.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
            return;
        i.fakeGestureMoved = !0, s.scaleMove = Zoom.getDistanceBetweenTouches(e);
    } s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Support.gestures ? e.scale * i.currentScale : s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")")); }, onGestureEnd: function (e) { var t = this.params.zoom, i = this.zoom, s = i.gesture; if (!Support.gestures) {
        if (!i.fakeGestureTouched || !i.fakeGestureMoved)
            return;
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !Device.android)
            return;
        i.fakeGestureTouched = !1, i.fakeGestureMoved = !1;
    } s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0)); }, onTouchStart: function (e) { var t = this.zoom, i = t.gesture, s = t.image; i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (Device.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)); }, onTouchMove: function (e) { var t = this.zoom, i = t.gesture, s = t.image, a = t.velocity; if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
        s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = Utils.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = Utils.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
        var r = s.width * t.scale, n = s.height * t.scale;
        if (!(r < i.slideWidth && n < i.slideHeight)) {
            if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
                if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))
                    return void (s.isTouched = !1);
                if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y))
                    return void (s.isTouched = !1);
            }
            e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
        }
    } }, onTouchEnd: function () { var e = this.zoom, t = e.gesture, i = e.image, s = e.velocity; if (t.$imageEl && 0 !== t.$imageEl.length) {
        if (!i.isTouched || !i.isMoved)
            return i.isTouched = !1, void (i.isMoved = !1);
        i.isTouched = !1, i.isMoved = !1;
        var a = 300, r = 300, n = i.currentX + s.x * a, o = i.currentY + s.y * r;
        0 !== s.x && (a = Math.abs((n - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((o - i.currentY) / s.y));
        var l = Math.max(a, r);
        i.currentX = n, i.currentY = o;
        var d = i.height * e.scale;
        i.minX = Math.min(t.slideWidth / 2 - i.width * e.scale / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - d / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(l).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
    } }, onTransitionEnd: function () { var e = this.zoom, t = e.gesture; t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0); }, toggle: function (e) { var t = this.zoom; t.scale && 1 !== t.scale ? t.out() : t.in(e); }, in: function (e) { var t, i, s, a, r, n, o, l, d, h, p, u, c, v = this.zoom, m = this.params.zoom, f = v.gesture, g = v.image; f.$slideEl || (f.$slideEl = this.clickedSlide ? $(this.clickedSlide) : this.slides.eq(this.activeIndex), f.$imageEl = f.$slideEl.find("img, svg, canvas"), f.$imageWrapEl = f.$imageEl.parent("." + m.containerClass)), f.$imageEl && 0 !== f.$imageEl.length && (f.$slideEl.addClass("" + m.zoomedSlideClass), void 0 === g.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = g.touchesStart.x, i = g.touchesStart.y), v.scale = f.$imageWrapEl.attr("data-swiper-zoom") || m.maxRatio, v.currentScale = f.$imageWrapEl.attr("data-swiper-zoom") || m.maxRatio, e ? (u = f.$slideEl[0].offsetWidth, c = f.$slideEl[0].offsetHeight, s = f.$slideEl.offset().left + u / 2 - t, a = f.$slideEl.offset().top + c / 2 - i, o = f.$imageEl[0].offsetHeight * v.scale, l = Math.min(u / 2 - f.$imageEl[0].offsetWidth * v.scale / 2, 0), d = Math.min(c / 2 - o / 2, 0), (r = s * v.scale) < l && (r = l), r > (h = -l) && (r = h), (n = a * v.scale) < d && (n = d), n > (p = -d) && (n = p)) : (r = 0, n = 0), f.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), f.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + v.scale + ")")); }, out: function () { var e = this.zoom, t = this.params.zoom, i = e.gesture; i.$slideEl || (i.$slideEl = this.clickedSlide ? $(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0); }, enable: function () { var e = this.zoom; if (!e.enabled) {
        e.enabled = !0;
        var t = !("touchstart" !== this.touchEvents.start || !Support.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 };
        Support.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove);
    } }, disable: function () { var e = this.zoom; if (e.enabled) {
        this.zoom.enabled = !1;
        var t = !("touchstart" !== this.touchEvents.start || !Support.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 };
        Support.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove);
    } } }, zoom = { name: "zoom", params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }, create: function () { var e = this, t = { enabled: !1, scale: 1, currentScale: 1, isScaling: !1, gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 } }; "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (i) { t[i] = Zoom[i].bind(e); }), Utils.extend(e, { zoom: t }); var i = 1; Object.defineProperty(e.zoom, "scale", { get: function () { return i; }, set: function (t) { i !== t && e.emit("zoomChange", t, e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0, e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0), i = t; } }); }, on: { init: function () { this.params.zoom.enabled && this.zoom.enable(); }, destroy: function () { this.zoom.disable(); }, touchStart: function (e) { this.zoom.enabled && this.zoom.onTouchStart(e); }, touchEnd: function (e) { this.zoom.enabled && this.zoom.onTouchEnd(e); }, doubleTap: function (e) { this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e); }, transitionEnd: function () { this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd(); } } }, Autoplay = { run: function () { var e = this, t = e.slides.eq(e.activeIndex), i = e.params.autoplay.delay; t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = Utils.nextTick(function () { e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")); }, i); }, start: function () { return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0); }, stop: function () { return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0); }, pause: function (e) { this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run()))); } }, autoplay = { name: "autoplay", params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } }, create: function () { var e = this; Utils.extend(e, { autoplay: { running: !1, paused: !1, run: Autoplay.run.bind(e), start: Autoplay.start.bind(e), stop: Autoplay.stop.bind(e), pause: Autoplay.pause.bind(e), onTransitionEnd: function (t) { e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop()); } } }); }, on: { init: function () { this.params.autoplay.enabled && this.autoplay.start(); }, beforeTransitionStart: function (e, t) { this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop()); }, sliderFirstMove: function () { this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause()); }, destroy: function () { this.autoplay.running && this.autoplay.stop(); } } }, components = [Device$1, Support$1, Browser$1, Resize, Observer$1];
void 0 === Swiper.use && (Swiper.use = Swiper.Class.use, Swiper.installModule = Swiper.Class.installModule), Swiper.use(components), Swiper.use([pagination, scrollbar, autoplay, zoom]);




/***/ })

}]);
//# sourceMappingURL=9.js.map