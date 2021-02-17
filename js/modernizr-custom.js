/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-contains-es6array-es6collections-es6object-es6string-generators-promises-setclasses !*/
! function(e, n, t) {
    function o(e, n) { return typeof e === n }

    function r() {
        var e, n, t, r, s, p, c;
        for (var f in a)
            if (a.hasOwnProperty(f)) {
                if (e = [], n = a[f], n.name && (e.push(n.name.toLowerCase()),
                        n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (r = o(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++) p = e[s], c = p.split("."), 1 === c.length ? Modernizr[c[0]] = r : (!Modernizr[c[0]] || Modernizr[c[0]] instanceof Boolean || (Modernizr[c[0]] = new Boolean(Modernizr[c[0]])), Modernizr[c[0]][c[1]] = r), i.push((r ? "" : "no-") + c.join("-"))
            }
    }

    function s(e) {
        var n = c.className,
            t = Modernizr._config.classPrefix || "";
        if (f && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(o, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), f ? c.className.baseVal = n : c.className = n)
    }
    var i = [],
        a = [],
        p = {
            _version: "3.6.0",
            _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() { n(t[e]) }, 0)
            },
            addTest: function(e, n, t) { a.push({ name: e, fn: n, options: t }) },
            addAsyncTest: function(e) { a.push({ name: null, fn: e }) }
        },
        Modernizr = function() {};
    Modernizr.prototype = p, Modernizr = new Modernizr, Modernizr.addTest("es6array", !!(Array.prototype && Array.prototype.copyWithin && Array.prototype.fill && Array.prototype.find && Array.prototype.findIndex && Array.prototype.keys && Array.prototype.entries && Array.prototype.values && Array.from && Array.of)), Modernizr.addTest("es6collections", !!(e.Map && e.Set && e.WeakMap && e.WeakSet)), Modernizr.addTest("es6object", !!(Object.assign && Object.is && Object.setPrototypeOf)), Modernizr.addTest("promises", function() { return "Promise" in e && "resolve" in e.Promise && "reject" in e.Promise && "all" in e.Promise && "race" in e.Promise && function() { var n; return new e.Promise(function(e) { n = e }), "function" == typeof n }() }), Modernizr.addTest("es6string", !!(String.fromCodePoint && String.raw && String.prototype.codePointAt && String.prototype.repeat && String.prototype.startsWith && String.prototype.endsWith && String.prototype.includes)), Modernizr.addTest("contains", o(String.prototype.contains, "function"));
    var c = n.documentElement,
        f = "svg" === c.nodeName.toLowerCase();
    Modernizr.addTest("generators", function() { try { new Function("function* test() {}")() } catch (e) { return !1 } return !0 }), r(), s(i), delete p.addTest, delete p.addAsyncTest;
    for (var l = 0; l < Modernizr._q.length; l++) Modernizr._q[l]();
    e.Modernizr = Modernizr
}(window, document);


/**
 * Onload of index.html checks user browser support for ES6 features
 */
window.onload = function() {

    control(Modernizr.es6array);
    control(Modernizr.es6collections);
    control(Modernizr.generators);
    control(Modernizr.es6object);
    control(Modernizr.promises);
    control(Modernizr.es6string);
}

/**
 * If the feature is not supported sends user to other website
 * @param {Modernizr features} param 
 */
function control(param) {
    if (!param) {
        window.location.href = 'odlbrowser.html';
    }
}