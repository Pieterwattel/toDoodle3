(() => {
  'use strict';
  var n = {
      56: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute('nonce', e);
        };
      },
      72: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, o = 0; o < e.length; o++)
            if (e[o].identifier === n) {
              t = o;
              break;
            }
          return t;
        }
        function o(n, o) {
          for (var r = {}, a = [], s = 0; s < n.length; s++) {
            var d = n[s],
              c = o.base ? d[0] + o.base : d[0],
              A = r[c] || 0,
              l = ''.concat(c, ' ').concat(A);
            r[c] = A + 1;
            var p = t(l),
              g = {
                css: d[1],
                media: d[2],
                sourceMap: d[3],
                supports: d[4],
                layer: d[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(g);
            else {
              var u = i(g, o);
              (o.byIndex = s),
                e.splice(s, 0, { identifier: l, updater: u, references: 1 });
            }
            a.push(l);
          }
          return a;
        }
        function i(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, i) {
          var r = o((n = n || []), (i = i || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < r.length; a++) {
              var s = t(r[a]);
              e[s].references--;
            }
            for (var d = o(n, i), c = 0; c < r.length; c++) {
              var A = t(r[c]);
              0 === e[A].references && (e[A].updater(), e.splice(A, 1));
            }
            r = d;
          };
        };
      },
      113: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      207: (n, e, t) => {
        n.exports = t.p + '247da133b202dc67d80d.png';
      },
      314: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = '',
                  o = void 0 !== e[5];
                return (
                  e[4] && (t += '@supports ('.concat(e[4], ') {')),
                  e[2] && (t += '@media '.concat(e[2], ' {')),
                  o &&
                    (t += '@layer'.concat(
                      e[5].length > 0 ? ' '.concat(e[5]) : '',
                      ' {',
                    )),
                  (t += n(e)),
                  o && (t += '}'),
                  e[2] && (t += '}'),
                  e[4] && (t += '}'),
                  t
                );
              }).join('');
            }),
            (e.i = function (n, t, o, i, r) {
              'string' == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (o)
                for (var s = 0; s < this.length; s++) {
                  var d = this[s][0];
                  null != d && (a[d] = !0);
                }
              for (var c = 0; c < n.length; c++) {
                var A = [].concat(n[c]);
                (o && a[A[0]]) ||
                  (void 0 !== r &&
                    (void 0 === A[5] ||
                      (A[1] = '@layer'
                        .concat(A[5].length > 0 ? ' '.concat(A[5]) : '', ' {')
                        .concat(A[1], '}')),
                    (A[5] = r)),
                  t &&
                    (A[2]
                      ? ((A[1] = '@media '
                          .concat(A[2], ' {')
                          .concat(A[1], '}')),
                        (A[2] = t))
                      : (A[2] = t)),
                  i &&
                    (A[4]
                      ? ((A[1] = '@supports ('
                          .concat(A[4], ') {')
                          .concat(A[1], '}')),
                        (A[4] = i))
                      : (A[4] = ''.concat(i))),
                  e.push(A));
              }
            }),
            e
          );
        };
      },
      354: (n) => {
        n.exports = function (n) {
          var e = n[1],
            t = n[3];
          if (!t) return e;
          if ('function' == typeof btoa) {
            var o = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              i =
                'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                  o,
                ),
              r = '/*# '.concat(i, ' */');
            return [e].concat([r]).join('\n');
          }
          return [e].join('\n');
        };
      },
      365: (n, e, t) => {
        t.d(e, { A: () => h });
        var o = t(354),
          i = t.n(o),
          r = t(314),
          a = t.n(r),
          s = t(417),
          d = t.n(s),
          c = new URL(t(819), t.b),
          A = new URL(t(207), t.b),
          l = new URL(t(394), t.b),
          p = a()(i()),
          g = d()(c),
          u = d()(A),
          f = d()(l);
        p.push([
          n.id,
          `body {\n  background-image: url(${g});\n  background-size: auto 100%;\n}\n\n/*content placement*/\n#mainContent {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n\n  padding-left: 4vw;\n  padding-right: 4vw;\n}\n\n#todoControls {\n}\n\n.todoControls {\n  display: flex;\n  flex-direction: column;\n  padding: calc(60px);\n  padding-top: 30px;\n}\n\n#todoTools,\n#todoActions {\n  justify-content: center;\n  align-items: center;\n}\n\n#todoOverview > * {\n  overflow: auto;\n}\n\n/*sizing*/\n#todoControls {\n  width: 35%;\n}\n\n#todoTools,\n#todoActions {\n  min-width: 352px;\n  max-width: 352px;\n\n  height: 460px !important;\n}\n\n#todoOverview {\n  max-width: 90%;\n  max-height: 95vh;\n  margin-left: 50px;\n  width: 100%;\n}\n\n#todoOverview > * {\n  height: 100%;\n  width: 100%;\n  min-height: 200px;\n}\n\n#topbarContainer {\n  width: 100%;\n  height: 100%;\n}\n\n#sidebarContainer {\n  width: 100%;\n  height: 100%;\n}\n\n.topbar {\n  padding-left: 1em;\n  height: 1em;\n  width: auto;\n}\n\n.sidebar {\n  width: 1em;\n  height: 30%;\n}\n\n.lowersection {\n  display: flex;\n  height: 93%;\n  align-items: center;\n}\n\n/*backgrounds*/\n#todoTools {\n  background-image: url(${u});\n  background-size: 100% 100%;\n}\n\n#todoActions {\n  background-image: url(${f});\n  background-size: 100% 100%;\n}\n\n/*container-relative placements*/\n#todoOverview {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto 1fr;\n  gap: 10px;\n  align-items: start;\n  justify-items: start;\n}\n\n#todoOverview {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 30px; /* optional spacing */\n  padding: 0px;\n}\n\n#topbarContainer {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n\n#topbar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n#sidebarContainer {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n}\n\n#sidebar {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n/*media queries*/\n@media only screen and (max-width: 1000px) {\n  #todoControls {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n  }\n\n  #mainContent {\n    display: flex;\n    flex-direction: column;\n    padding-left: 0;\n    align-items: center;\n  }\n\n  #todoOverview {\n    margin-left: 0px;\n    margin-top: 30px;\n  }\n\n  #todoOverview > * {\n    min-width: 300px;\n  }\n}\n\n/*detail formatting*/\n.todoControls > * :not(label) {\n  border: 1px solid rgb(87, 85, 85);\n  border-radius: 0.2em;\n}\n\n#todoOverview > * {\n  border: 2px dashed grey;\n}\n\nbutton {\n  font-weight: 700;\n  font-size: medium;\n}\n\n#sidebar > * {\n  text-orientation: upright;\n}\n\n.sidebar {\n  width: 1em;\n  writing-mode: vertical-rl;\n  transform: rotate(180deg);\n}\n\n.lowersection {\n  display: flex;\n  align-items: center;\n}\n\n.bar {\n  text-align: center;\n  font-weight: 700;\n  font-size: medium;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/*tr {\n  background-color: red;\n  border: 2px solid grey;\n  box-shadow: inset 1px 1px 5px black;\n  display: flex;\n}\n\np {\n  margin: 0;\n}\n\ndiv {\n  min-height: 250px;\n}\n\n#mainContent {\n  display: flex;\n}\n\n#leftSideDiv {\n  display: flex;\n  flex-direction: column;\n  max-width: 180px;\n  max-height: 0%;\n  background-image: url('./otherFiles/todoFrame1.png');\n  background-size: 100% 100%;\n  padding: 14%;\n  border: 3px solid red;\n}\n\n#contentDiv {\n  display: flex;\n  flex-direction: column;\n  max-width: 90%;\n  background-image: url('./otherFiles/todoFrame2.png');\n  background-size: 100% 100%;\n  border: 20px solid rebeccapurple;\n}\n\n#rightSideDiv {\n  width: 100%;\n\n  background-image: url('./otherFiles/todoOrganisation.png');\n  background-size: 100% 100%;\n}\n\n#dc972c2f-992c-51c6-a634-8f72aeb33ee7 {\n  width: 0;\n  height: 0;\n}\n\n\n\nlabel {\n  box-shadow: 0px 0px 30px white;\n  background-color: white;\n}\n*/\n`,
          '',
          {
            version: 3,
            sources: ['webpack://./src/styles.css'],
            names: [],
            mappings:
              'AAAA;EACE,yDAAyD;EACzD,0BAA0B;AAC5B;;AAEA,oBAAoB;AACpB;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;;EAE9B,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;AACA;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;;EAEE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA,SAAS;AACT;EACE,UAAU;AACZ;;AAEA;;EAEE,gBAAgB;EAChB,gBAAgB;;EAEhB,wBAAwB;AAC1B;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,WAAW;AACb;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,aAAa;EACb,WAAW;EACX,mBAAmB;AACrB;;AAEA,cAAc;AACd;EACE,yDAA2D;EAC3D,0BAA0B;AAC5B;;AAEA;EACE,yDAAoD;EACpD,0BAA0B;AAC5B;;AAEA,gCAAgC;AAChC;EACE,aAAa;EACb,+BAA+B;EAC/B,4BAA4B;EAC5B,SAAS;EACT,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;EAC3B,SAAS,EAAE,qBAAqB;EAChC,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA,gBAAgB;AAChB;EACE;IACE,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,6BAA6B;EAC/B;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;EAClB;AACF;;AAEA,oBAAoB;AACpB;EACE,iCAAiC;EACjC,oBAAoB;AACtB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,yCAAyC;AAC3C;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;CAyDC',
            sourcesContent: [
              "body {\n  background-image: url('./otherFiles/gridBackground2.jpg');\n  background-size: auto 100%;\n}\n\n/*content placement*/\n#mainContent {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n\n  padding-left: 4vw;\n  padding-right: 4vw;\n}\n\n#todoControls {\n}\n\n.todoControls {\n  display: flex;\n  flex-direction: column;\n  padding: calc(60px);\n  padding-top: 30px;\n}\n\n#todoTools,\n#todoActions {\n  justify-content: center;\n  align-items: center;\n}\n\n#todoOverview > * {\n  overflow: auto;\n}\n\n/*sizing*/\n#todoControls {\n  width: 35%;\n}\n\n#todoTools,\n#todoActions {\n  min-width: 352px;\n  max-width: 352px;\n\n  height: 460px !important;\n}\n\n#todoOverview {\n  max-width: 90%;\n  max-height: 95vh;\n  margin-left: 50px;\n  width: 100%;\n}\n\n#todoOverview > * {\n  height: 100%;\n  width: 100%;\n  min-height: 200px;\n}\n\n#topbarContainer {\n  width: 100%;\n  height: 100%;\n}\n\n#sidebarContainer {\n  width: 100%;\n  height: 100%;\n}\n\n.topbar {\n  padding-left: 1em;\n  height: 1em;\n  width: auto;\n}\n\n.sidebar {\n  width: 1em;\n  height: 30%;\n}\n\n.lowersection {\n  display: flex;\n  height: 93%;\n  align-items: center;\n}\n\n/*backgrounds*/\n#todoTools {\n  background-image: url('./otherFiles/todoFrame1WhiteBg.png');\n  background-size: 100% 100%;\n}\n\n#todoActions {\n  background-image: url('./otherFiles/todoFrame2.png');\n  background-size: 100% 100%;\n}\n\n/*container-relative placements*/\n#todoOverview {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto 1fr;\n  gap: 10px;\n  align-items: start;\n  justify-items: start;\n}\n\n#todoOverview {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 30px; /* optional spacing */\n  padding: 0px;\n}\n\n#topbarContainer {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n\n#topbar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n\n#sidebarContainer {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n}\n\n#sidebar {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n/*media queries*/\n@media only screen and (max-width: 1000px) {\n  #todoControls {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n  }\n\n  #mainContent {\n    display: flex;\n    flex-direction: column;\n    padding-left: 0;\n    align-items: center;\n  }\n\n  #todoOverview {\n    margin-left: 0px;\n    margin-top: 30px;\n  }\n\n  #todoOverview > * {\n    min-width: 300px;\n  }\n}\n\n/*detail formatting*/\n.todoControls > * :not(label) {\n  border: 1px solid rgb(87, 85, 85);\n  border-radius: 0.2em;\n}\n\n#todoOverview > * {\n  border: 2px dashed grey;\n}\n\nbutton {\n  font-weight: 700;\n  font-size: medium;\n}\n\n#sidebar > * {\n  text-orientation: upright;\n}\n\n.sidebar {\n  width: 1em;\n  writing-mode: vertical-rl;\n  transform: rotate(180deg);\n}\n\n.lowersection {\n  display: flex;\n  align-items: center;\n}\n\n.bar {\n  text-align: center;\n  font-weight: 700;\n  font-size: medium;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/*tr {\n  background-color: red;\n  border: 2px solid grey;\n  box-shadow: inset 1px 1px 5px black;\n  display: flex;\n}\n\np {\n  margin: 0;\n}\n\ndiv {\n  min-height: 250px;\n}\n\n#mainContent {\n  display: flex;\n}\n\n#leftSideDiv {\n  display: flex;\n  flex-direction: column;\n  max-width: 180px;\n  max-height: 0%;\n  background-image: url('./otherFiles/todoFrame1.png');\n  background-size: 100% 100%;\n  padding: 14%;\n  border: 3px solid red;\n}\n\n#contentDiv {\n  display: flex;\n  flex-direction: column;\n  max-width: 90%;\n  background-image: url('./otherFiles/todoFrame2.png');\n  background-size: 100% 100%;\n  border: 20px solid rebeccapurple;\n}\n\n#rightSideDiv {\n  width: 100%;\n\n  background-image: url('./otherFiles/todoOrganisation.png');\n  background-size: 100% 100%;\n}\n\n#dc972c2f-992c-51c6-a634-8f72aeb33ee7 {\n  width: 0;\n  height: 0;\n}\n\n\n\nlabel {\n  box-shadow: 0px 0px 30px white;\n  background-color: white;\n}\n*/\n",
            ],
            sourceRoot: '',
          },
        ]);
        const h = p;
      },
      394: (n, e, t) => {
        n.exports = t.p + '4ec049b6046b1e7306cb.png';
      },
      417: (n) => {
        n.exports = function (n, e) {
          return (
            e || (e = {}),
            n
              ? ((n = String(n.__esModule ? n.default : n)),
                /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                e.hash && (n += e.hash),
                /["'() \t\n]|(%20)/.test(n) || e.needQuotes
                  ? '"'.concat(
                      n.replace(/"/g, '\\"').replace(/\n/g, '\\n'),
                      '"',
                    )
                  : n)
              : n
          );
        };
      },
      540: (n) => {
        n.exports = function (n) {
          var e = document.createElement('style');
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      659: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var o = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          o.appendChild(t);
        };
      },
      819: (n, e, t) => {
        n.exports = t.p + '7120e65feba00c3566a3.jpg';
      },
      825: (n) => {
        n.exports = function (n) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var o = '';
                t.supports && (o += '@supports ('.concat(t.supports, ') {')),
                  t.media && (o += '@media '.concat(t.media, ' {'));
                var i = void 0 !== t.layer;
                i &&
                  (o += '@layer'.concat(
                    t.layer.length > 0 ? ' '.concat(t.layer) : '',
                    ' {',
                  )),
                  (o += t.css),
                  i && (o += '}'),
                  t.media && (o += '}'),
                  t.supports && (o += '}');
                var r = t.sourceMap;
                r &&
                  'undefined' != typeof btoa &&
                  (o +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                      ' */',
                    )),
                  e.styleTagTransform(o, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
    },
    e = {};
  function t(o) {
    var i = e[o];
    if (void 0 !== i) return i.exports;
    var r = (e[o] = { id: o, exports: {} });
    return n[o](r, r.exports, t), r.exports;
  }
  (t.m = n),
    (t.n = (n) => {
      var e = n && n.__esModule ? () => n.default : () => n;
      return t.d(e, { a: e }), e;
    }),
    (t.d = (n, e) => {
      for (var o in e)
        t.o(e, o) &&
          !t.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: e[o] });
    }),
    (t.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (n) {
        if ('object' == typeof window) return window;
      }
    })()),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (() => {
      var n;
      t.g.importScripts && (n = t.g.location + '');
      var e = t.g.document;
      if (
        !n &&
        e &&
        (e.currentScript &&
          'SCRIPT' === e.currentScript.tagName.toUpperCase() &&
          (n = e.currentScript.src),
        !n)
      ) {
        var o = e.getElementsByTagName('script');
        if (o.length)
          for (var i = o.length - 1; i > -1 && (!n || !/^http(s?):/.test(n)); )
            n = o[i--].src;
      }
      if (!n)
        throw new Error(
          'Automatic publicPath is not supported in this browser',
        );
      (n = n
        .replace(/^blob:/, '')
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (t.p = n);
    })(),
    (t.b = document.baseURI || self.location.href),
    (t.nc = void 0);
  var o = t(72),
    i = t.n(o),
    r = t(825),
    a = t.n(r),
    s = t(659),
    d = t.n(s),
    c = t(56),
    A = t.n(c),
    l = t(540),
    p = t.n(l),
    g = t(113),
    u = t.n(g),
    f = t(365),
    h = {};
  (h.styleTagTransform = u()),
    (h.setAttributes = A()),
    (h.insert = d().bind(null, 'head')),
    (h.domAPI = a()),
    (h.insertStyleElement = p()),
    i()(f.A, h),
    f.A && f.A.locals && f.A.locals,
    Math.pow(10, 8);
  const m = Symbol.for('constructDateFrom');
  function y(n, e) {
    return 'function' == typeof n
      ? n(e)
      : n && 'object' == typeof n && m in n
        ? n[m](e)
        : n instanceof Date
          ? new n.constructor(e)
          : new Date(e);
  }
  function B(n, e) {
    return y(e || n, n);
  }
  function C(n, e) {
    const t = B(n, e?.in);
    return t.setHours(23, 59, 59, 999), t;
  }
  function E(n, e, t) {
    const o = B(n, t?.in);
    return isNaN(e)
      ? y(t?.in || n, NaN)
      : e
        ? (o.setDate(o.getDate() + e), o)
        : o;
  }
  class x {
    constructor() {
      this.currentDate = C(new Date());
    }
    static getSingleton() {
      return this.instance || (this.instance = new x()), this.instance;
    }
    parseHtmlDateToFnsFormat(n) {
      return n.replace(/(-)/g, ', ').replace(/(, 0)/g, ', ');
    }
    getDateFnsDate(n) {
      return (n = this.parseHtmlDateToFnsFormat(n)), C(new Date(n));
    }
    getDeadlineDependingOnUrgency(n) {
      switch (n) {
        case 1:
          return E(new Date(), 3);
        case 2:
          return E(new Date(), 10);
        case 3:
          return E(new Date(), 20);
      }
    }
  }
  const b = x.getSingleton();
  function w(n) {
    return !(
      (!(
        (e = n) instanceof Date ||
        ('object' == typeof e &&
          '[object Date]' === Object.prototype.toString.call(e))
      ) &&
        'number' != typeof n) ||
      isNaN(+B(n))
    );
    var e;
  }
  class v {
    static instance;
    static getSingleton() {
      return this.instance || (this.instance = new v()), this.instance;
    }
    #n = [];
    constructor() {}
    get todoArray() {
      return this.orderArrayByDate(this.#n);
    }
    orderArrayByDate(n) {
      n.sort((n, e) => n.deadline - e.deadline);
      for (let e = n.length; e > 0; e--) {
        let t = e - 1;
        n[t].index = t;
      }
      return n;
    }
    addNewTodo(n) {
      switch (!0) {
        case 'string' != typeof n.title:
          return void console.log(`newTodo "${n.title}" title is invalid`);
        case 'number' != typeof n.id:
          return void console.log(`newTodo "${n.title}" id is invalid`);
        case 'string' != typeof n.importance:
          return void console.log(`newTodo "${n.title}" importance is invalid`);
        case 'boolean' != typeof n.dateSpecifiedByUser:
          return void console.log(
            `newTodo "${n.title}" dateSpecifiedByUser is invalid`,
          );
        case w(!n.lastDayOfDeadline):
          return void console.log(
            `newTodo "${n.title}" lastDayOfDeadline is invalid`,
          );
        case 'boolean' != typeof n.finished:
          return void console.log(
            `newTodo "${n.title}" newTodo.finished property is invalid`,
          );
      }
      this.#n.push(n);
    }
    switchTodosInArray(n, e, t) {
      const o = t[n.index];
      (t[n.index] = t[e.index]), (t[e.index] = o);
    }
    getTodosBySpecifications(n) {
      let e = this.todoArray;
      for (const t in n) {
        const o = n[t];
        e.forEach((n) => {
          n[t] != o && (e = e.filter((n) => n[t] == o));
        });
      }
      return console.log(e), e;
    }
  }
  const D = v.getSingleton(),
    T = {
      getTodoDate: function (n) {
        let e = null;
        return (
          n.lastDayOfDeadline
            ? ((e = b.getDateFnsDate(n.lastDayOfDeadline)),
              (n.dateSpecifiedByUser = !0))
            : ((e = b.getDeadlineDependingOnUrgency(n.urgency)),
              (n.dateSpecifiedByUser = !1)),
          e
        );
      },
      getTodoFromIndex: function (n) {
        return D.todoArray.find((e) => e.index == n);
      },
      formatFrontendTodoForBackend(n) {},
    };
  class S {
    #e;
    #t;
    #o;
    #i;
    #r;
    #a;
    #s;
    #d;
    #c;
    constructor(n) {
      (this.#e = S.id++),
        (this.#t = null),
        (this.#o = n.title),
        (this.#i = n.importance),
        (this.#r = n.category),
        (this.#s = !!n.lastDayOfDeadline),
        (this.#a = T.getTodoDate(n)),
        (this.#d = n.description),
        (this.#c = n.finished ? foo : (n.finished = !1));
    }
    get id() {
      return this.#e;
    }
    get index() {
      return this.#t;
    }
    set index(n) {
      'number' == typeof n
        ? (this.#t = n)
        : console.log(
            `${n} is a ${typeof n}, therefore not a valid index for todo ${this.#o}`,
          );
    }
    get title() {
      return this.#o;
    }
    get importance() {
      return this.#i;
    }
    get category() {
      return this.#r;
    }
    get lastDayOfDeadline() {
      return this.#a;
    }
    set lastDayOfDeadline(n) {
      this.#a = n;
    }
    get dateSpecifiedByUser() {
      return this.#s;
    }
    get description() {
      return this.#d;
    }
    get finished() {
      return this.#c;
    }
    static id = 0;
    static create(n) {
      return new S(n);
    }
    store(n) {
      storage.array.push(n);
    }
  }
  const k = {
    moveTodoInUrgency: function (n, e, t) {
      const o = this.getNextTodo(n, e, t);
      if (!o) return !1;
      (n.deadline = o.deadline), D.switchTodosInArray(n, o, t);
    },
    getNextTodo: function (n, e, t) {
      let o;
      'later' === e
        ? (o = 1)
        : 'earlier' === e
          ? (o = -1)
          : console.log(`ERROR direction value: ${e} is invalid!`);
      let i = n.index + o;
      return console.log(i), D.getTodosBySpecifications({ index: i })[0];
    },
  };
  class I {
    constructor() {}
    static instance;
    static getSingleton() {
      return this.instance || (this.instance = new I()), this.instance;
    }
    formatFrontendTodoForBackend(n) {
      return (function (n) {
        const e = {};
        for (const t in n) {
          const o = n[t];
          switch (t) {
            case 'titleInput':
              e.title = o;
              break;
            case 'importanceSelector':
              e.importance = o;
              break;
            case 'urgencySelector':
              4 == o
                ? (console.log('yes'),
                  (e.lastDayOfDeadline = n.urgencyDateInput))
                : (e.urgency = Number(o));
              break;
            case 'urgencyDateInput':
            case 'categoryInput':
              break;
            case 'categorySelector':
              e.category = 'newCategory' == o ? n.categoryInput : o;
              break;
            case 'descriptionInput':
              e.description = o;
              break;
            default:
              console.log('other key: ' + t);
          }
        }
        return e;
      })(n);
    }
    createTodo(n) {
      let e = S.create(n);
      D.addNewTodo(e);
    }
    moveTodoInUrgency(n, e) {
      k.moveTodoInUrgency(n, e, D.todoArray);
    }
    getTodosBySpecifications(n) {
      return D.getTodosBySpecifications(n);
    }
  }
  const O = I.getSingleton();
  let F = {
    todoCreationInputs: {
      titleInput: document.getElementById('titleInput'),
      importanceSelector: document.getElementById('importanceSelector'),
      urgencySelector: document.getElementById('urgencySelector'),
      urgencyDateInput: document.getElementById('urgencyDateInput'),
      categorySelector: document.getElementById('categorySelector'),
      categoryInput: document.getElementById('categoryInput'),
      descriptionInput: document.getElementById('descriptionInput'),
    },
    todoCreationBtn: document.getElementById('todoCreationBtn'),
  };
  class j {
    constructor() {
      this.createEventListeners();
    }
    static instance;
    static getSingleton() {
      return this.instance || (this.instance = new j()), this.instance;
    }
    DomData = class {
      constructor() {}
      static getNewTodoData() {
        const n = {},
          e = F.todoCreationInputs;
        for (const t in e) {
          const o = e[t],
            i = o.id,
            r = o.value;
          n[i] = r;
        }
        return n;
      }
    };
    createEventListeners() {
      F.todoCreationBtn.addEventListener('click', (n) => {
        const e = this.DomData.getNewTodoData(),
          t = O.formatFrontendTodoForBackend(e);
        O.createTodo(t);
      });
    }
  }
  const U = j.getSingleton();
  !(function () {
    console.log('--------------------------\nclick "createTodo":');
    const n = U.DomData.getNewTodoData(),
      e = O.formatFrontendTodoForBackend(n);
    console.log(e),
      O.createTodo(e),
      console.log('--------------------------\ncreate todos:');
    let t = 0;
    [
      {
        title: 'todoNextYear',
        importance: 'high',
        urgency: 3,
        category: 'thing1',
      },
      {
        title: 'todoToday',
        importance: 'low',
        lastDayOfDeadline: '2025, 5, 13',
        category: 'thing1',
      },
      {
        title: 'todoInThePast',
        importance: 'high',
        urgency: 1,
        category: 'thing1',
      },
      {
        title: 'veryChillTodo',
        importance: 'low',
        urgency: 2,
        category: 'thing1',
      },
      {
        title: 'todoLaterToday',
        importance: 'high',
        lastDayOfDeadline: '2025-5-13',
        category: 'thing2',
      },
      {
        title: 'todoTomorrow',
        importance: 'high',
        lastDayOfDeadline: '2025-5-14',
        category: 'thing2',
      },
    ].forEach((n) => {
      O.createTodo(n), t++;
    }),
      console.log(`**${t} todo's made**`),
      console.log('--------------------------\nplace array:'),
      console.log([...D.todoArray]),
      console.log('--------------------------'),
      console.log('move todoTomorrow one place earlier');
    let o = O.getTodosBySpecifications({ title: 'todoTomorrow' })[0];
    O.moveTodoInUrgency(o, 'earlier'), console.log([...D.todoArray]);
  })();
})();
//# sourceMappingURL=main.js.map
