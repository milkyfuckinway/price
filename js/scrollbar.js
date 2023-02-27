var SimpleBar = (function () {
  'use strict';
  var e = function (t, i) {
    return (
      (e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        }),
      e(t, i)
    );
  };
  var t = !('undefined' == typeof window || !window.document || !window.document.createElement),
    i = 'object' == typeof global && global && global.Object === Object && global,
    s = 'object' == typeof self && self && self.Object === Object && self,
    r = i || s || Function('return this')(),
    l = r.Symbol,
    o = Object.prototype,
    n = o.hasOwnProperty,
    a = o.toString,
    c = l ? l.toStringTag : void 0;
  var h = Object.prototype.toString;
  var u = l ? l.toStringTag : void 0;
  function d(e) {
    return null == e
      ? void 0 === e
        ? '[object Undefined]'
        : '[object Null]'
      : u && u in Object(e)
      ? (function (e) {
          var t = n.call(e, c),
            i = e[c];
          try {
            e[c] = void 0;
            var s = !0;
          } catch (e) {}
          var r = a.call(e);
          return s && (t ? (e[c] = i) : delete e[c]), r;
        })(e)
      : (function (e) {
          return h.call(e);
        })(e);
  }
  var p = /\s/;
  var v = /^\s+/;
  function f(e) {
    return e
      ? e
          .slice(
            0,
            (function (e) {
              for (var t = e.length; t-- && p.test(e.charAt(t)); );
              return t;
            })(e) + 1
          )
          .replace(v, '')
      : e;
  }
  function m(e) {
    var t = typeof e;
    return null != e && ('object' == t || 'function' == t);
  }
  var b = /^[-+]0x[0-9a-f]+$/i,
    g = /^0b[01]+$/i,
    x = /^0o[0-7]+$/i,
    y = parseInt;
  function E(e) {
    if ('number' == typeof e) return e;
    if (
      (function (e) {
        return (
          'symbol' == typeof e ||
          ((function (e) {
            return null != e && 'object' == typeof e;
          })(e) &&
            '[object Symbol]' == d(e))
        );
      })(e)
    )
      return NaN;
    if (m(e)) {
      var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
      e = m(t) ? t + '' : t;
    }
    if ('string' != typeof e) return 0 === e ? e : +e;
    e = f(e);
    var i = g.test(e);
    return i || x.test(e) ? y(e.slice(2), i ? 2 : 8) : b.test(e) ? NaN : +e;
  }
  var O = function () {
      return r.Date.now();
    },
    w = Math.max,
    S = Math.min;
  function A(e, t, i) {
    var s,
      r,
      l,
      o,
      n,
      a,
      c = 0,
      h = !1,
      u = !1,
      d = !0;
    if ('function' != typeof e) throw new TypeError('Expected a function');
    function p(t) {
      var i = s,
        l = r;
      return (s = r = void 0), (c = t), (o = e.apply(l, i));
    }
    function v(e) {
      return (c = e), (n = setTimeout(b, t)), h ? p(e) : o;
    }
    function f(e) {
      var i = e - a;
      return void 0 === a || i >= t || i < 0 || (u && e - c >= l);
    }
    function b() {
      var e = O();
      if (f(e)) return g(e);
      n = setTimeout(
        b,
        (function (e) {
          var i = t - (e - a);
          return u ? S(i, l - (e - c)) : i;
        })(e)
      );
    }
    function g(e) {
      return (n = void 0), d && s ? p(e) : ((s = r = void 0), o);
    }
    function x() {
      var e = O(),
        i = f(e);
      if (((s = arguments), (r = this), (a = e), i)) {
        if (void 0 === n) return v(a);
        if (u) return clearTimeout(n), (n = setTimeout(b, t)), p(a);
      }
      return void 0 === n && (n = setTimeout(b, t)), o;
    }
    return (
      (t = E(t) || 0),
      m(i) && ((h = !!i.leading), (l = (u = 'maxWait' in i) ? w(E(i.maxWait) || 0, t) : l), (d = 'trailing' in i ? !!i.trailing : d)),
      (x.cancel = function () {
        void 0 !== n && clearTimeout(n), (c = 0), (s = a = r = n = void 0);
      }),
      (x.flush = function () {
        return void 0 === n ? o : g(O());
      }),
      x
    );
  }
  var k = function () {
      return (
        (k =
          Object.assign ||
          function (e) {
            for (var t, i = 1, s = arguments.length; i < s; i++) for (var r in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          }),
        k.apply(this, arguments)
      );
    },
    W = null,
    M = null;
  function N() {
    if (null === W) {
      if ('undefined' == typeof document) return (W = 0);
      var e = document.body,
        t = document.createElement('div');
      t.classList.add('simplebar-hide-scrollbar'), e.appendChild(t);
      var i = t.getBoundingClientRect().right;
      e.removeChild(t), (W = i);
    }
    return W;
  }
  function L(e) {
    return e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
  }
  function z(e) {
    return e && e.ownerDocument ? e.ownerDocument : document;
  }
  t &&
    window.addEventListener('resize', function () {
      M !== window.devicePixelRatio && ((M = window.devicePixelRatio), (W = null));
    });
  var C = function (e) {
    return Array.prototype.reduce.call(
      e,
      function (e, t) {
        var i = t.name.match(/data-simplebar-(.+)/);
        if (i) {
          var s = i[1].replace(/\W+(.)/g, function (e, t) {
            return t.toUpperCase();
          });
          switch (t.value) {
            case 'true':
              e[s] = !0;
              break;
            case 'false':
              e[s] = !1;
              break;
            case void 0:
              e[s] = !0;
              break;
            default:
              e[s] = t.value;
          }
        }
        return e;
      },
      {}
    );
  };
  function T(e, t) {
    var i;
    e && (i = e.classList).add.apply(i, t.split(' '));
  }
  function R(e, t) {
    e &&
      t.split(' ').forEach(function (t) {
        e.classList.remove(t);
      });
  }
  function D(e) {
    return '.'.concat(e.split(' ').join('.'));
  }
  var V = Object.freeze({ __proto__: null, addClasses: T, classNamesToQuery: D, getElementDocument: z, getElementWindow: L, getOptions: C, removeClasses: R }),
    H = L,
    j = z,
    B = C,
    _ = T,
    q = R,
    P = D,
    X = (function () {
      function e(t, i) {
        void 0 === i && (i = {});
        var s = this;
        if (
          ((this.removePreventClickId = null),
          (this.minScrollbarWidth = 20),
          (this.stopScrollDelay = 175),
          (this.isScrolling = !1),
          (this.isMouseEntering = !1),
          (this.scrollXTicking = !1),
          (this.scrollYTicking = !1),
          (this.wrapperEl = null),
          (this.contentWrapperEl = null),
          (this.contentEl = null),
          (this.offsetEl = null),
          (this.maskEl = null),
          (this.placeholderEl = null),
          (this.heightAutoObserverWrapperEl = null),
          (this.heightAutoObserverEl = null),
          (this.rtlHelpers = null),
          (this.scrollbarWidth = 0),
          (this.resizeObserver = null),
          (this.mutationObserver = null),
          (this.elStyles = null),
          (this.isRtl = null),
          (this.mouseX = 0),
          (this.mouseY = 0),
          (this.onMouseMove = function () {}),
          (this.onWindowResize = function () {}),
          (this.onStopScrolling = function () {}),
          (this.onMouseEntered = function () {}),
          (this.onScroll = function () {
            var e = H(s.el);
            s.scrollXTicking || (e.requestAnimationFrame(s.scrollX), (s.scrollXTicking = !0)),
              s.scrollYTicking || (e.requestAnimationFrame(s.scrollY), (s.scrollYTicking = !0)),
              s.isScrolling || ((s.isScrolling = !0), _(s.el, s.classNames.scrolling)),
              s.showScrollbar('x'),
              s.showScrollbar('y'),
              s.onStopScrolling();
          }),
          (this.scrollX = function () {
            s.axis.x.isOverflowing && s.positionScrollbar('x'), (s.scrollXTicking = !1);
          }),
          (this.scrollY = function () {
            s.axis.y.isOverflowing && s.positionScrollbar('y'), (s.scrollYTicking = !1);
          }),
          (this._onStopScrolling = function () {
            q(s.el, s.classNames.scrolling), s.options.autoHide && (s.hideScrollbar('x'), s.hideScrollbar('y')), (s.isScrolling = !1);
          }),
          (this.onMouseEnter = function () {
            s.isMouseEntering || (_(s.el, s.classNames.mouseEntered), s.showScrollbar('x'), s.showScrollbar('y'), (s.isMouseEntering = !0)), s.onMouseEntered();
          }),
          (this._onMouseEntered = function () {
            q(s.el, s.classNames.mouseEntered), s.options.autoHide && (s.hideScrollbar('x'), s.hideScrollbar('y')), (s.isMouseEntering = !1);
          }),
          (this._onMouseMove = function (e) {
            (s.mouseX = e.clientX),
              (s.mouseY = e.clientY),
              (s.axis.x.isOverflowing || s.axis.x.forceVisible) && s.onMouseMoveForAxis('x'),
              (s.axis.y.isOverflowing || s.axis.y.forceVisible) && s.onMouseMoveForAxis('y');
          }),
          (this.onMouseLeave = function () {
            s.onMouseMove.cancel(),
              (s.axis.x.isOverflowing || s.axis.x.forceVisible) && s.onMouseLeaveForAxis('x'),
              (s.axis.y.isOverflowing || s.axis.y.forceVisible) && s.onMouseLeaveForAxis('y'),
              (s.mouseX = -1),
              (s.mouseY = -1);
          }),
          (this._onWindowResize = function () {
            (s.scrollbarWidth = s.getScrollbarWidth()), s.hideNativeScrollbar();
          }),
          (this.onPointerEvent = function (e) {
            var t, i;
            s.axis.x.track.el &&
              s.axis.y.track.el &&
              s.axis.x.scrollbar.el &&
              s.axis.y.scrollbar.el &&
              ((s.axis.x.track.rect = s.axis.x.track.el.getBoundingClientRect()),
              (s.axis.y.track.rect = s.axis.y.track.el.getBoundingClientRect()),
              (s.axis.x.isOverflowing || s.axis.x.forceVisible) && (t = s.isWithinBounds(s.axis.x.track.rect)),
              (s.axis.y.isOverflowing || s.axis.y.forceVisible) && (i = s.isWithinBounds(s.axis.y.track.rect)),
              (t || i) &&
                (e.stopPropagation(),
                'pointerdown' === e.type &&
                  'touch' !== e.pointerType &&
                  (t && ((s.axis.x.scrollbar.rect = s.axis.x.scrollbar.el.getBoundingClientRect()), s.isWithinBounds(s.axis.x.scrollbar.rect) ? s.onDragStart(e, 'x') : s.onTrackClick(e, 'x')),
                  i && ((s.axis.y.scrollbar.rect = s.axis.y.scrollbar.el.getBoundingClientRect()), s.isWithinBounds(s.axis.y.scrollbar.rect) ? s.onDragStart(e, 'y') : s.onTrackClick(e, 'y')))));
          }),
          (this.drag = function (t) {
            var i, r, l, o, n, a, c, h, u, d, p;
            if (s.draggedAxis && s.contentWrapperEl) {
              var v = s.axis[s.draggedAxis].track,
                f = null !== (r = null === (i = v.rect) || void 0 === i ? void 0 : i[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== r ? r : 0,
                m = s.axis[s.draggedAxis].scrollbar,
                b = null !== (o = null === (l = s.contentWrapperEl) || void 0 === l ? void 0 : l[s.axis[s.draggedAxis].scrollSizeAttr]) && void 0 !== o ? o : 0,
                g = parseInt(null !== (a = null === (n = s.elStyles) || void 0 === n ? void 0 : n[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== a ? a : '0px', 10);
              t.preventDefault(), t.stopPropagation();
              var x =
                  ('y' === s.draggedAxis ? t.pageY : t.pageX) -
                  (null !== (h = null === (c = v.rect) || void 0 === c ? void 0 : c[s.axis[s.draggedAxis].offsetAttr]) && void 0 !== h ? h : 0) -
                  s.axis[s.draggedAxis].dragOffset,
                y =
                  ((x = s.isRtl ? (null !== (d = null === (u = v.rect) || void 0 === u ? void 0 : u[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== d ? d : 0) - m.size - x : x) / (f - m.size)) *
                  (b - g);
              'x' === s.draggedAxis && s.isRtl && (y = (null === (p = e.getRtlHelpers()) || void 0 === p ? void 0 : p.isScrollingToNegative) ? -y : y),
                (s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr] = y);
            }
          }),
          (this.onEndDrag = function (e) {
            var t = j(s.el),
              i = H(s.el);
            e.preventDefault(),
              e.stopPropagation(),
              q(s.el, s.classNames.dragging),
              t.removeEventListener('mousemove', s.drag, !0),
              t.removeEventListener('mouseup', s.onEndDrag, !0),
              (s.removePreventClickId = i.setTimeout(function () {
                t.removeEventListener('click', s.preventClick, !0), t.removeEventListener('dblclick', s.preventClick, !0), (s.removePreventClickId = null);
              }));
          }),
          (this.preventClick = function (e) {
            e.preventDefault(), e.stopPropagation();
          }),
          (this.el = t),
          (this.options = k(k({}, e.defaultOptions), i)),
          (this.classNames = k(k({}, e.defaultOptions.classNames), i.classNames)),
          (this.axis = {
            x: {
              scrollOffsetAttr: 'scrollLeft',
              sizeAttr: 'width',
              scrollSizeAttr: 'scrollWidth',
              offsetSizeAttr: 'offsetWidth',
              offsetAttr: 'left',
              overflowAttr: 'overflowX',
              dragOffset: 0,
              isOverflowing: !0,
              forceVisible: !1,
              track: { size: null, el: null, rect: null, isVisible: !1 },
              scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
            },
            y: {
              scrollOffsetAttr: 'scrollTop',
              sizeAttr: 'height',
              scrollSizeAttr: 'scrollHeight',
              offsetSizeAttr: 'offsetHeight',
              offsetAttr: 'top',
              overflowAttr: 'overflowY',
              dragOffset: 0,
              isOverflowing: !0,
              forceVisible: !1,
              track: { size: null, el: null, rect: null, isVisible: !1 },
              scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
            },
          }),
          'object' != typeof this.el || !this.el.nodeName)
        )
          throw new Error('Argument passed to SimpleBar must be an HTML element instead of '.concat(this.el));
        (this.onMouseMove = (function (e, t, i) {
          var s = !0,
            r = !0;
          if ('function' != typeof e) throw new TypeError('Expected a function');
          return m(i) && ((s = 'leading' in i ? !!i.leading : s), (r = 'trailing' in i ? !!i.trailing : r)), A(e, t, { leading: s, maxWait: t, trailing: r });
        })(this._onMouseMove, 64)),
          (this.onWindowResize = A(this._onWindowResize, 64, { leading: !0 })),
          (this.onStopScrolling = A(this._onStopScrolling, this.stopScrollDelay)),
          (this.onMouseEntered = A(this._onMouseEntered, this.stopScrollDelay)),
          this.init();
      }
      return (
        (e.getRtlHelpers = function () {
          if (e.rtlHelpers) return e.rtlHelpers;
          var t = document.createElement('div');
          t.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
          var i = t.firstElementChild,
            s = null == i ? void 0 : i.firstElementChild;
          if (!s) return null;
          document.body.appendChild(i), (i.scrollLeft = 0);
          var r = e.getOffset(i),
            l = e.getOffset(s);
          i.scrollLeft = -999;
          var o = e.getOffset(s);
          return document.body.removeChild(i), (e.rtlHelpers = { isScrollOriginAtZero: r.left !== l.left, isScrollingToNegative: l.left !== o.left }), e.rtlHelpers;
        }),
        (e.prototype.getScrollbarWidth = function () {
          try {
            return (this.contentWrapperEl && 'none' === getComputedStyle(this.contentWrapperEl, '::-webkit-scrollbar').display) ||
              'scrollbarWidth' in document.documentElement.style ||
              '-ms-overflow-style' in document.documentElement.style
              ? 0
              : N();
          } catch (e) {
            return N();
          }
        }),
        (e.getOffset = function (e) {
          var t = e.getBoundingClientRect(),
            i = j(e),
            s = H(e);
          return { top: t.top + (s.pageYOffset || i.documentElement.scrollTop), left: t.left + (s.pageXOffset || i.documentElement.scrollLeft) };
        }),
        (e.prototype.init = function () {
          t && (this.initDOM(), (this.rtlHelpers = e.getRtlHelpers()), (this.scrollbarWidth = this.getScrollbarWidth()), this.recalculate(), this.initListeners());
        }),
        (e.prototype.initDOM = function () {
          var e, t;
          (this.wrapperEl = this.el.querySelector(P(this.classNames.wrapper))),
            (this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(P(this.classNames.contentWrapper))),
            (this.contentEl = this.options.contentNode || this.el.querySelector(P(this.classNames.contentEl))),
            (this.offsetEl = this.el.querySelector(P(this.classNames.offset))),
            (this.maskEl = this.el.querySelector(P(this.classNames.mask))),
            (this.placeholderEl = this.findChild(this.wrapperEl, P(this.classNames.placeholder))),
            (this.heightAutoObserverWrapperEl = this.el.querySelector(P(this.classNames.heightAutoObserverWrapperEl))),
            (this.heightAutoObserverEl = this.el.querySelector(P(this.classNames.heightAutoObserverEl))),
            (this.axis.x.track.el = this.findChild(this.el, ''.concat(P(this.classNames.track)).concat(P(this.classNames.horizontal)))),
            (this.axis.y.track.el = this.findChild(this.el, ''.concat(P(this.classNames.track)).concat(P(this.classNames.vertical)))),
            (this.axis.x.scrollbar.el = (null === (e = this.axis.x.track.el) || void 0 === e ? void 0 : e.querySelector(P(this.classNames.scrollbar))) || null),
            (this.axis.y.scrollbar.el = (null === (t = this.axis.y.track.el) || void 0 === t ? void 0 : t.querySelector(P(this.classNames.scrollbar))) || null),
            this.options.autoHide || (_(this.axis.x.scrollbar.el, this.classNames.visible), _(this.axis.y.scrollbar.el, this.classNames.visible));
        }),
        (e.prototype.initListeners = function () {
          var e,
            t = this,
            i = H(this.el);
          if (
            (this.el.addEventListener('mouseenter', this.onMouseEnter),
            this.el.addEventListener('pointerdown', this.onPointerEvent, !0),
            this.el.addEventListener('mousemove', this.onMouseMove),
            this.el.addEventListener('mouseleave', this.onMouseLeave),
            null === (e = this.contentWrapperEl) || void 0 === e || e.addEventListener('scroll', this.onScroll),
            i.addEventListener('resize', this.onWindowResize),
            this.contentEl)
          ) {
            if (window.ResizeObserver) {
              var s = !1,
                r = i.ResizeObserver || ResizeObserver;
              (this.resizeObserver = new r(function () {
                s &&
                  i.requestAnimationFrame(function () {
                    t.recalculate();
                  });
              })),
                this.resizeObserver.observe(this.el),
                this.resizeObserver.observe(this.contentEl),
                i.requestAnimationFrame(function () {
                  s = !0;
                });
            }
            (this.mutationObserver = new i.MutationObserver(function () {
              i.requestAnimationFrame(function () {
                t.recalculate();
              });
            })),
              this.mutationObserver.observe(this.contentEl, { childList: !0, subtree: !0, characterData: !0 });
          }
        }),
        (e.prototype.recalculate = function () {
          if (this.heightAutoObserverEl && this.contentEl && this.contentWrapperEl && this.wrapperEl && this.placeholderEl) {
            var e = H(this.el);
            (this.elStyles = e.getComputedStyle(this.el)), (this.isRtl = 'rtl' === this.elStyles.direction);
            var t = this.contentEl.offsetWidth,
              i = this.heightAutoObserverEl.offsetHeight <= 1,
              s = this.heightAutoObserverEl.offsetWidth <= 1 || t > 0,
              r = this.contentWrapperEl.offsetWidth,
              l = this.elStyles.overflowX,
              o = this.elStyles.overflowY;
            (this.contentEl.style.padding = ''
              .concat(this.elStyles.paddingTop, ' ')
              .concat(this.elStyles.paddingRight, ' ')
              .concat(this.elStyles.paddingBottom, ' ')
              .concat(this.elStyles.paddingLeft)),
              (this.wrapperEl.style.margin = '-'
                .concat(this.elStyles.paddingTop, ' -')
                .concat(this.elStyles.paddingRight, ' -')
                .concat(this.elStyles.paddingBottom, ' -')
                .concat(this.elStyles.paddingLeft));
            var n = this.contentEl.scrollHeight,
              a = this.contentEl.scrollWidth;
            (this.contentWrapperEl.style.height = i ? 'auto' : '100%'), (this.placeholderEl.style.width = s ? ''.concat(t || a, 'px') : 'auto'), (this.placeholderEl.style.height = ''.concat(n, 'px'));
            var c = this.contentWrapperEl.offsetHeight;
            (this.axis.x.isOverflowing = 0 !== t && a > t),
              (this.axis.y.isOverflowing = n > c),
              (this.axis.x.isOverflowing = 'hidden' !== l && this.axis.x.isOverflowing),
              (this.axis.y.isOverflowing = 'hidden' !== o && this.axis.y.isOverflowing),
              (this.axis.x.forceVisible = 'x' === this.options.forceVisible || !0 === this.options.forceVisible),
              (this.axis.y.forceVisible = 'y' === this.options.forceVisible || !0 === this.options.forceVisible),
              this.hideNativeScrollbar();
            var h = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
              u = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
            (this.axis.x.isOverflowing = this.axis.x.isOverflowing && a > r - u),
              (this.axis.y.isOverflowing = this.axis.y.isOverflowing && n > c - h),
              (this.axis.x.scrollbar.size = this.getScrollbarSize('x')),
              (this.axis.y.scrollbar.size = this.getScrollbarSize('y')),
              this.axis.x.scrollbar.el && (this.axis.x.scrollbar.el.style.width = ''.concat(this.axis.x.scrollbar.size, 'px')),
              this.axis.y.scrollbar.el && (this.axis.y.scrollbar.el.style.height = ''.concat(this.axis.y.scrollbar.size, 'px')),
              this.positionScrollbar('x'),
              this.positionScrollbar('y'),
              this.toggleTrackVisibility('x'),
              this.toggleTrackVisibility('y');
          }
        }),
        (e.prototype.getScrollbarSize = function (e) {
          var t, i;
          if ((void 0 === e && (e = 'y'), !this.axis[e].isOverflowing || !this.contentEl)) return 0;
          var s,
            r = this.contentEl[this.axis[e].scrollSizeAttr],
            l = null !== (i = null === (t = this.axis[e].track.el) || void 0 === t ? void 0 : t[this.axis[e].offsetSizeAttr]) && void 0 !== i ? i : 0,
            o = l / r;
          return (s = Math.max(~~(o * l), this.options.scrollbarMinSize)), this.options.scrollbarMaxSize && (s = Math.min(s, this.options.scrollbarMaxSize)), s;
        }),
        (e.prototype.positionScrollbar = function (t) {
          var i, s, r;
          void 0 === t && (t = 'y');
          var l = this.axis[t].scrollbar;
          if (this.axis[t].isOverflowing && this.contentWrapperEl && l.el && this.elStyles) {
            var o = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
              n = (null === (i = this.axis[t].track.el) || void 0 === i ? void 0 : i[this.axis[t].offsetSizeAttr]) || 0,
              a = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
              c = this.contentWrapperEl[this.axis[t].scrollOffsetAttr];
            (c = 'x' === t && this.isRtl && (null === (s = e.getRtlHelpers()) || void 0 === s ? void 0 : s.isScrollOriginAtZero) ? -c : c),
              'x' === t && this.isRtl && (c = (null === (r = e.getRtlHelpers()) || void 0 === r ? void 0 : r.isScrollingToNegative) ? c : -c);
            var h = c / (o - a),
              u = ~~((n - l.size) * h);
            (u = 'x' === t && this.isRtl ? -u + (n - l.size) : u), (l.el.style.transform = 'x' === t ? 'translate3d('.concat(u, 'px, 0, 0)') : 'translate3d(0, '.concat(u, 'px, 0)'));
          }
        }),
        (e.prototype.toggleTrackVisibility = function (e) {
          void 0 === e && (e = 'y');
          var t = this.axis[e].track.el,
            i = this.axis[e].scrollbar.el;
          t &&
            i &&
            this.contentWrapperEl &&
            (this.axis[e].isOverflowing || this.axis[e].forceVisible
              ? ((t.style.visibility = 'visible'), (this.contentWrapperEl.style[this.axis[e].overflowAttr] = 'scroll'), this.el.classList.add(''.concat(this.classNames.scrollable, '-').concat(e)))
              : ((t.style.visibility = 'hidden'), (this.contentWrapperEl.style[this.axis[e].overflowAttr] = 'hidden'), this.el.classList.remove(''.concat(this.classNames.scrollable, '-').concat(e))),
            this.axis[e].isOverflowing ? (i.style.display = 'block') : (i.style.display = 'none'));
        }),
        (e.prototype.showScrollbar = function (e) {
          void 0 === e && (e = 'y'),
            this.axis[e].isOverflowing && !this.axis[e].scrollbar.isVisible && (_(this.axis[e].scrollbar.el, this.classNames.visible), (this.axis[e].scrollbar.isVisible = !0));
        }),
        (e.prototype.hideScrollbar = function (e) {
          void 0 === e && (e = 'y'), this.axis[e].isOverflowing && this.axis[e].scrollbar.isVisible && (q(this.axis[e].scrollbar.el, this.classNames.visible), (this.axis[e].scrollbar.isVisible = !1));
        }),
        (e.prototype.hideNativeScrollbar = function () {
          this.offsetEl &&
            ((this.offsetEl.style[this.isRtl ? 'left' : 'right'] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? '-'.concat(this.scrollbarWidth, 'px') : '0px'),
            (this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? '-'.concat(this.scrollbarWidth, 'px') : '0px'));
        }),
        (e.prototype.onMouseMoveForAxis = function (e) {
          void 0 === e && (e = 'y');
          var t = this.axis[e];
          t.track.el &&
            t.scrollbar.el &&
            ((t.track.rect = t.track.el.getBoundingClientRect()),
            (t.scrollbar.rect = t.scrollbar.el.getBoundingClientRect()),
            this.isWithinBounds(t.track.rect)
              ? (this.showScrollbar(e),
                _(t.track.el, this.classNames.hover),
                this.isWithinBounds(t.scrollbar.rect) ? _(t.scrollbar.el, this.classNames.hover) : q(t.scrollbar.el, this.classNames.hover))
              : (q(t.track.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(e)));
        }),
        (e.prototype.onMouseLeaveForAxis = function (e) {
          void 0 === e && (e = 'y'), q(this.axis[e].track.el, this.classNames.hover), q(this.axis[e].scrollbar.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(e);
        }),
        (e.prototype.onDragStart = function (e, t) {
          var i;
          void 0 === t && (t = 'y');
          var s = j(this.el),
            r = H(this.el),
            l = this.axis[t].scrollbar,
            o = 'y' === t ? e.pageY : e.pageX;
          (this.axis[t].dragOffset = o - ((null === (i = l.rect) || void 0 === i ? void 0 : i[this.axis[t].offsetAttr]) || 0)),
            (this.draggedAxis = t),
            _(this.el, this.classNames.dragging),
            s.addEventListener('mousemove', this.drag, !0),
            s.addEventListener('mouseup', this.onEndDrag, !0),
            null === this.removePreventClickId
              ? (s.addEventListener('click', this.preventClick, !0), s.addEventListener('dblclick', this.preventClick, !0))
              : (r.clearTimeout(this.removePreventClickId), (this.removePreventClickId = null));
        }),
        (e.prototype.onTrackClick = function (e, t) {
          var i,
            s,
            r,
            l,
            o = this;
          void 0 === t && (t = 'y');
          var n = this.axis[t];
          if (this.options.clickOnTrack && n.scrollbar.el && this.contentWrapperEl) {
            e.preventDefault();
            var a = H(this.el);
            this.axis[t].scrollbar.rect = n.scrollbar.el.getBoundingClientRect();
            var c = null !== (s = null === (i = this.axis[t].scrollbar.rect) || void 0 === i ? void 0 : i[this.axis[t].offsetAttr]) && void 0 !== s ? s : 0,
              h = parseInt(null !== (l = null === (r = this.elStyles) || void 0 === r ? void 0 : r[this.axis[t].sizeAttr]) && void 0 !== l ? l : '0px', 10),
              u = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
              d = ('y' === t ? this.mouseY - c : this.mouseX - c) < 0 ? -1 : 1,
              p = -1 === d ? u - h : u + h,
              v = function () {
                o.contentWrapperEl &&
                  (-1 === d
                    ? u > p && ((u -= 40), (o.contentWrapperEl[o.axis[t].scrollOffsetAttr] = u), a.requestAnimationFrame(v))
                    : u < p && ((u += 40), (o.contentWrapperEl[o.axis[t].scrollOffsetAttr] = u), a.requestAnimationFrame(v)));
              };
            v();
          }
        }),
        (e.prototype.getContentElement = function () {
          return this.contentEl;
        }),
        (e.prototype.getScrollElement = function () {
          return this.contentWrapperEl;
        }),
        (e.prototype.removeListeners = function () {
          var e = H(this.el);
          this.el.removeEventListener('mouseenter', this.onMouseEnter),
            this.el.removeEventListener('pointerdown', this.onPointerEvent, !0),
            this.el.removeEventListener('mousemove', this.onMouseMove),
            this.el.removeEventListener('mouseleave', this.onMouseLeave),
            this.contentWrapperEl && this.contentWrapperEl.removeEventListener('scroll', this.onScroll),
            e.removeEventListener('resize', this.onWindowResize),
            this.mutationObserver && this.mutationObserver.disconnect(),
            this.resizeObserver && this.resizeObserver.disconnect(),
            this.onMouseMove.cancel(),
            this.onWindowResize.cancel(),
            this.onStopScrolling.cancel(),
            this.onMouseEntered.cancel();
        }),
        (e.prototype.unMount = function () {
          this.removeListeners();
        }),
        (e.prototype.isWithinBounds = function (e) {
          return this.mouseX >= e.left && this.mouseX <= e.left + e.width && this.mouseY >= e.top && this.mouseY <= e.top + e.height;
        }),
        (e.prototype.findChild = function (e, t) {
          var i = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector;
          return Array.prototype.filter.call(e.children, function (e) {
            return i.call(e, t);
          })[0];
        }),
        (e.rtlHelpers = null),
        (e.defaultOptions = {
          forceVisible: !1,
          clickOnTrack: !0,
          scrollbarMinSize: 25,
          scrollbarMaxSize: 0,
          ariaLabel: 'scrollable content',
          classNames: {
            contentEl: 'simplebar-content',
            contentWrapper: 'simplebar-content-wrapper',
            offset: 'simplebar-offset',
            mask: 'simplebar-mask',
            wrapper: 'simplebar-wrapper',
            placeholder: 'simplebar-placeholder',
            scrollbar: 'simplebar-scrollbar',
            track: 'simplebar-track',
            heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
            heightAutoObserverEl: 'simplebar-height-auto-observer',
            visible: 'simplebar-visible',
            horizontal: 'simplebar-horizontal',
            vertical: 'simplebar-vertical',
            hover: 'simplebar-hover',
            dragging: 'simplebar-dragging',
            scrolling: 'simplebar-scrolling',
            scrollable: 'simplebar-scrollable',
            mouseEntered: 'simplebar-mouse-entered',
          },
          scrollableNode: null,
          contentNode: null,
          autoHide: !0,
        }),
        (e.getOptions = B),
        (e.helpers = V),
        e
      );
    })(),
    Y = X.helpers,
    F = Y.getOptions,
    I = Y.addClasses,
    $ = (function (t) {
      function i() {
        for (var e = [], s = 0; s < arguments.length; s++) e[s] = arguments[s];
        var r = t.apply(this, e) || this;
        return i.instances.set(e[0], r), r;
      }
      return (
        (function (t, i) {
          if ('function' != typeof i && null !== i) throw new TypeError('Class extends value ' + String(i) + ' is not a constructor or null');
          function s() {
            this.constructor = t;
          }
          e(t, i), (t.prototype = null === i ? Object.create(i) : ((s.prototype = i.prototype), new s()));
        })(i, t),
        (i.initDOMLoadedElements = function () {
          document.removeEventListener('DOMContentLoaded', this.initDOMLoadedElements),
            window.removeEventListener('load', this.initDOMLoadedElements),
            Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]'), function (e) {
              'init' === e.getAttribute('data-simplebar') || i.instances.has(e) || new i(e, F(e.attributes));
            });
        }),
        (i.removeObserver = function () {
          var e;
          null === (e = i.globalObserver) || void 0 === e || e.disconnect();
        }),
        (i.prototype.initDOM = function () {
          var e,
            t,
            i,
            s = this;
          if (
            !Array.prototype.filter.call(this.el.children, function (e) {
              return e.classList.contains(s.classNames.wrapper);
            }).length
          ) {
            for (
              this.wrapperEl = document.createElement('div'),
                this.contentWrapperEl = document.createElement('div'),
                this.offsetEl = document.createElement('div'),
                this.maskEl = document.createElement('div'),
                this.contentEl = document.createElement('div'),
                this.placeholderEl = document.createElement('div'),
                this.heightAutoObserverWrapperEl = document.createElement('div'),
                this.heightAutoObserverEl = document.createElement('div'),
                I(this.wrapperEl, this.classNames.wrapper),
                I(this.contentWrapperEl, this.classNames.contentWrapper),
                I(this.offsetEl, this.classNames.offset),
                I(this.maskEl, this.classNames.mask),
                I(this.contentEl, this.classNames.contentEl),
                I(this.placeholderEl, this.classNames.placeholder),
                I(this.heightAutoObserverWrapperEl, this.classNames.heightAutoObserverWrapperEl),
                I(this.heightAutoObserverEl, this.classNames.heightAutoObserverEl);
              this.el.firstChild;

            )
              this.contentEl.appendChild(this.el.firstChild);
            this.contentWrapperEl.appendChild(this.contentEl),
              this.offsetEl.appendChild(this.contentWrapperEl),
              this.maskEl.appendChild(this.offsetEl),
              this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),
              this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
              this.wrapperEl.appendChild(this.maskEl),
              this.wrapperEl.appendChild(this.placeholderEl),
              this.el.appendChild(this.wrapperEl),
              null === (e = this.contentWrapperEl) || void 0 === e || e.setAttribute('tabindex', '0'),
              null === (t = this.contentWrapperEl) || void 0 === t || t.setAttribute('role', 'region'),
              null === (i = this.contentWrapperEl) || void 0 === i || i.setAttribute('aria-label', this.options.ariaLabel);
          }
          if (!this.axis.x.track.el || !this.axis.y.track.el) {
            var r = document.createElement('div'),
              l = document.createElement('div');
            I(r, this.classNames.track),
              I(l, this.classNames.scrollbar),
              r.appendChild(l),
              (this.axis.x.track.el = r.cloneNode(!0)),
              I(this.axis.x.track.el, this.classNames.horizontal),
              (this.axis.y.track.el = r.cloneNode(!0)),
              I(this.axis.y.track.el, this.classNames.vertical),
              this.el.appendChild(this.axis.x.track.el),
              this.el.appendChild(this.axis.y.track.el);
          }
          X.prototype.initDOM.call(this), this.el.setAttribute('data-simplebar', 'init');
        }),
        (i.prototype.unMount = function () {
          X.prototype.unMount.call(this), i.instances.delete(this.el);
        }),
        (i.initHtmlApi = function () {
          (this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
            'undefined' != typeof MutationObserver && ((this.globalObserver = new MutationObserver(i.handleMutations)), this.globalObserver.observe(document, { childList: !0, subtree: !0 })),
            'complete' === document.readyState || ('loading' !== document.readyState && !document.documentElement.doScroll)
              ? window.setTimeout(this.initDOMLoadedElements)
              : (document.addEventListener('DOMContentLoaded', this.initDOMLoadedElements), window.addEventListener('load', this.initDOMLoadedElements));
        }),
        (i.handleMutations = function (e) {
          e.forEach(function (e) {
            e.addedNodes.forEach(function (e) {
              1 === e.nodeType &&
                (e.hasAttribute('data-simplebar')
                  ? !i.instances.has(e) && document.documentElement.contains(e) && new i(e, F(e.attributes))
                  : e.querySelectorAll('[data-simplebar]').forEach(function (e) {
                      'init' !== e.getAttribute('data-simplebar') && !i.instances.has(e) && document.documentElement.contains(e) && new i(e, F(e.attributes));
                    }));
            }),
              e.removedNodes.forEach(function (e) {
                1 === e.nodeType &&
                  ('init' === e.getAttribute('data-simplebar')
                    ? i.instances.has(e) && !document.documentElement.contains(e) && i.instances.get(e).unMount()
                    : Array.prototype.forEach.call(e.querySelectorAll('[data-simplebar="init"]'), function (e) {
                        i.instances.has(e) && !document.documentElement.contains(e) && i.instances.get(e).unMount();
                      }));
              });
          });
        }),
        (i.instances = new WeakMap()),
        i
      );
    })(X);
  return t && $.initHtmlApi(), $;
})();

//# sourceMappingURL=scrollbar.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JvbGxiYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFNpbXBsZUJhciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIHZhciBlID0gZnVuY3Rpb24gKHQsIGkpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIChlID1cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJlxyXG4gICAgICAgICAgZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgZS5fX3Byb3RvX18gPSB0O1xyXG4gICAgICAgICAgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgZm9yICh2YXIgaSBpbiB0KSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCwgaSkgJiYgKGVbaV0gPSB0W2ldKTtcclxuICAgICAgICB9KSxcclxuICAgICAgZSh0LCBpKVxyXG4gICAgKTtcclxuICB9O1xyXG4gIHZhciB0ID0gISgndW5kZWZpbmVkJyA9PSB0eXBlb2Ygd2luZG93IHx8ICF3aW5kb3cuZG9jdW1lbnQgfHwgIXdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KSxcclxuICAgIGkgPSAnb2JqZWN0JyA9PSB0eXBlb2YgZ2xvYmFsICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsLFxyXG4gICAgcyA9ICdvYmplY3QnID09IHR5cGVvZiBzZWxmICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmLFxyXG4gICAgciA9IGkgfHwgcyB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpLFxyXG4gICAgbCA9IHIuU3ltYm9sLFxyXG4gICAgbyA9IE9iamVjdC5wcm90b3R5cGUsXHJcbiAgICBuID0gby5oYXNPd25Qcm9wZXJ0eSxcclxuICAgIGEgPSBvLnRvU3RyaW5nLFxyXG4gICAgYyA9IGwgPyBsLnRvU3RyaW5nVGFnIDogdm9pZCAwO1xyXG4gIHZhciBoID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcclxuICB2YXIgdSA9IGwgPyBsLnRvU3RyaW5nVGFnIDogdm9pZCAwO1xyXG4gIGZ1bmN0aW9uIGQoZSkge1xyXG4gICAgcmV0dXJuIG51bGwgPT0gZVxyXG4gICAgICA/IHZvaWQgMCA9PT0gZVxyXG4gICAgICAgID8gJ1tvYmplY3QgVW5kZWZpbmVkXSdcclxuICAgICAgICA6ICdbb2JqZWN0IE51bGxdJ1xyXG4gICAgICA6IHUgJiYgdSBpbiBPYmplY3QoZSlcclxuICAgICAgPyAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHZhciB0ID0gbi5jYWxsKGUsIGMpLFxyXG4gICAgICAgICAgICBpID0gZVtjXTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGVbY10gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHZhciBzID0gITA7XHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgICAgICAgdmFyIHIgPSBhLmNhbGwoZSk7XHJcbiAgICAgICAgICByZXR1cm4gcyAmJiAodCA/IChlW2NdID0gaSkgOiBkZWxldGUgZVtjXSksIHI7XHJcbiAgICAgICAgfSkoZSlcclxuICAgICAgOiAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHJldHVybiBoLmNhbGwoZSk7XHJcbiAgICAgICAgfSkoZSk7XHJcbiAgfVxyXG4gIHZhciBwID0gL1xccy87XHJcbiAgdmFyIHYgPSAvXlxccysvO1xyXG4gIGZ1bmN0aW9uIGYoZSkge1xyXG4gICAgcmV0dXJuIGVcclxuICAgICAgPyBlXHJcbiAgICAgICAgICAuc2xpY2UoXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIHQgPSBlLmxlbmd0aDsgdC0tICYmIHAudGVzdChlLmNoYXJBdCh0KSk7ICk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIH0pKGUpICsgMVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgLnJlcGxhY2UodiwgJycpXHJcbiAgICAgIDogZTtcclxuICB9XHJcbiAgZnVuY3Rpb24gbShlKSB7XHJcbiAgICB2YXIgdCA9IHR5cGVvZiBlO1xyXG4gICAgcmV0dXJuIG51bGwgIT0gZSAmJiAoJ29iamVjdCcgPT0gdCB8fCAnZnVuY3Rpb24nID09IHQpO1xyXG4gIH1cclxuICB2YXIgYiA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pLFxyXG4gICAgZyA9IC9eMGJbMDFdKyQvaSxcclxuICAgIHggPSAvXjBvWzAtN10rJC9pLFxyXG4gICAgeSA9IHBhcnNlSW50O1xyXG4gIGZ1bmN0aW9uIEUoZSkge1xyXG4gICAgaWYgKCdudW1iZXInID09IHR5cGVvZiBlKSByZXR1cm4gZTtcclxuICAgIGlmIChcclxuICAgICAgKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICdzeW1ib2wnID09IHR5cGVvZiBlIHx8XHJcbiAgICAgICAgICAoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsICE9IGUgJiYgJ29iamVjdCcgPT0gdHlwZW9mIGU7XHJcbiAgICAgICAgICB9KShlKSAmJlxyXG4gICAgICAgICAgICAnW29iamVjdCBTeW1ib2xdJyA9PSBkKGUpKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pKGUpXHJcbiAgICApXHJcbiAgICAgIHJldHVybiBOYU47XHJcbiAgICBpZiAobShlKSkge1xyXG4gICAgICB2YXIgdCA9ICdmdW5jdGlvbicgPT0gdHlwZW9mIGUudmFsdWVPZiA/IGUudmFsdWVPZigpIDogZTtcclxuICAgICAgZSA9IG0odCkgPyB0ICsgJycgOiB0O1xyXG4gICAgfVxyXG4gICAgaWYgKCdzdHJpbmcnICE9IHR5cGVvZiBlKSByZXR1cm4gMCA9PT0gZSA/IGUgOiArZTtcclxuICAgIGUgPSBmKGUpO1xyXG4gICAgdmFyIGkgPSBnLnRlc3QoZSk7XHJcbiAgICByZXR1cm4gaSB8fCB4LnRlc3QoZSkgPyB5KGUuc2xpY2UoMiksIGkgPyAyIDogOCkgOiBiLnRlc3QoZSkgPyBOYU4gOiArZTtcclxuICB9XHJcbiAgdmFyIE8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiByLkRhdGUubm93KCk7XHJcbiAgICB9LFxyXG4gICAgdyA9IE1hdGgubWF4LFxyXG4gICAgUyA9IE1hdGgubWluO1xyXG4gIGZ1bmN0aW9uIEEoZSwgdCwgaSkge1xyXG4gICAgdmFyIHMsXHJcbiAgICAgIHIsXHJcbiAgICAgIGwsXHJcbiAgICAgIG8sXHJcbiAgICAgIG4sXHJcbiAgICAgIGEsXHJcbiAgICAgIGMgPSAwLFxyXG4gICAgICBoID0gITEsXHJcbiAgICAgIHUgPSAhMSxcclxuICAgICAgZCA9ICEwO1xyXG4gICAgaWYgKCdmdW5jdGlvbicgIT0gdHlwZW9mIGUpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgZnVuY3Rpb24nKTtcclxuICAgIGZ1bmN0aW9uIHAodCkge1xyXG4gICAgICB2YXIgaSA9IHMsXHJcbiAgICAgICAgbCA9IHI7XHJcbiAgICAgIHJldHVybiAocyA9IHIgPSB2b2lkIDApLCAoYyA9IHQpLCAobyA9IGUuYXBwbHkobCwgaSkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdihlKSB7XHJcbiAgICAgIHJldHVybiAoYyA9IGUpLCAobiA9IHNldFRpbWVvdXQoYiwgdCkpLCBoID8gcChlKSA6IG87XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmKGUpIHtcclxuICAgICAgdmFyIGkgPSBlIC0gYTtcclxuICAgICAgcmV0dXJuIHZvaWQgMCA9PT0gYSB8fCBpID49IHQgfHwgaSA8IDAgfHwgKHUgJiYgZSAtIGMgPj0gbCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBiKCkge1xyXG4gICAgICB2YXIgZSA9IE8oKTtcclxuICAgICAgaWYgKGYoZSkpIHJldHVybiBnKGUpO1xyXG4gICAgICBuID0gc2V0VGltZW91dChcclxuICAgICAgICBiLFxyXG4gICAgICAgIChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgdmFyIGkgPSB0IC0gKGUgLSBhKTtcclxuICAgICAgICAgIHJldHVybiB1ID8gUyhpLCBsIC0gKGUgLSBjKSkgOiBpO1xyXG4gICAgICAgIH0pKGUpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnKGUpIHtcclxuICAgICAgcmV0dXJuIChuID0gdm9pZCAwKSwgZCAmJiBzID8gcChlKSA6ICgocyA9IHIgPSB2b2lkIDApLCBvKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHgoKSB7XHJcbiAgICAgIHZhciBlID0gTygpLFxyXG4gICAgICAgIGkgPSBmKGUpO1xyXG4gICAgICBpZiAoKChzID0gYXJndW1lbnRzKSwgKHIgPSB0aGlzKSwgKGEgPSBlKSwgaSkpIHtcclxuICAgICAgICBpZiAodm9pZCAwID09PSBuKSByZXR1cm4gdihhKTtcclxuICAgICAgICBpZiAodSkgcmV0dXJuIGNsZWFyVGltZW91dChuKSwgKG4gPSBzZXRUaW1lb3V0KGIsIHQpKSwgcChhKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdm9pZCAwID09PSBuICYmIChuID0gc2V0VGltZW91dChiLCB0KSksIG87XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAodCA9IEUodCkgfHwgMCksXHJcbiAgICAgIG0oaSkgJiYgKChoID0gISFpLmxlYWRpbmcpLCAobCA9ICh1ID0gJ21heFdhaXQnIGluIGkpID8gdyhFKGkubWF4V2FpdCkgfHwgMCwgdCkgOiBsKSwgKGQgPSAndHJhaWxpbmcnIGluIGkgPyAhIWkudHJhaWxpbmcgOiBkKSksXHJcbiAgICAgICh4LmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2b2lkIDAgIT09IG4gJiYgY2xlYXJUaW1lb3V0KG4pLCAoYyA9IDApLCAocyA9IGEgPSByID0gbiA9IHZvaWQgMCk7XHJcbiAgICAgIH0pLFxyXG4gICAgICAoeC5mbHVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdm9pZCAwID09PSBuID8gbyA6IGcoTygpKTtcclxuICAgICAgfSksXHJcbiAgICAgIHhcclxuICAgICk7XHJcbiAgfVxyXG4gIHZhciBrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIChrID1cclxuICAgICAgICAgIE9iamVjdC5hc3NpZ24gfHxcclxuICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHQsIGkgPSAxLCBzID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IHM7IGkrKykgZm9yICh2YXIgciBpbiAodCA9IGFyZ3VtZW50c1tpXSkpIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LCByKSAmJiAoZVtyXSA9IHRbcl0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIGsuYXBwbHkodGhpcywgYXJndW1lbnRzKVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIFcgPSBudWxsLFxyXG4gICAgTSA9IG51bGw7XHJcbiAgZnVuY3Rpb24gTigpIHtcclxuICAgIGlmIChudWxsID09PSBXKSB7XHJcbiAgICAgIGlmICgndW5kZWZpbmVkJyA9PSB0eXBlb2YgZG9jdW1lbnQpIHJldHVybiAoVyA9IDApO1xyXG4gICAgICB2YXIgZSA9IGRvY3VtZW50LmJvZHksXHJcbiAgICAgICAgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB0LmNsYXNzTGlzdC5hZGQoJ3NpbXBsZWJhci1oaWRlLXNjcm9sbGJhcicpLCBlLmFwcGVuZENoaWxkKHQpO1xyXG4gICAgICB2YXIgaSA9IHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQ7XHJcbiAgICAgIGUucmVtb3ZlQ2hpbGQodCksIChXID0gaSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVztcclxuICB9XHJcbiAgZnVuY3Rpb24gTChlKSB7XHJcbiAgICByZXR1cm4gZSAmJiBlLm93bmVyRG9jdW1lbnQgJiYgZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3ID8gZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IDogd2luZG93O1xyXG4gIH1cclxuICBmdW5jdGlvbiB6KGUpIHtcclxuICAgIHJldHVybiBlICYmIGUub3duZXJEb2N1bWVudCA/IGUub3duZXJEb2N1bWVudCA6IGRvY3VtZW50O1xyXG4gIH1cclxuICB0ICYmXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBNICE9PSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyAmJiAoKE0gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyksIChXID0gbnVsbCkpO1xyXG4gICAgfSk7XHJcbiAgdmFyIEMgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UuY2FsbChcclxuICAgICAgZSxcclxuICAgICAgZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICB2YXIgaSA9IHQubmFtZS5tYXRjaCgvZGF0YS1zaW1wbGViYXItKC4rKS8pO1xyXG4gICAgICAgIGlmIChpKSB7XHJcbiAgICAgICAgICB2YXIgcyA9IGlbMV0ucmVwbGFjZSgvXFxXKyguKS9nLCBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBzd2l0Y2ggKHQudmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAndHJ1ZSc6XHJcbiAgICAgICAgICAgICAgZVtzXSA9ICEwO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdmYWxzZSc6XHJcbiAgICAgICAgICAgICAgZVtzXSA9ICExO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHZvaWQgMDpcclxuICAgICAgICAgICAgICBlW3NdID0gITA7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgZVtzXSA9IHQudmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgICB9LFxyXG4gICAgICB7fVxyXG4gICAgKTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIFQoZSwgdCkge1xyXG4gICAgdmFyIGk7XHJcbiAgICBlICYmIChpID0gZS5jbGFzc0xpc3QpLmFkZC5hcHBseShpLCB0LnNwbGl0KCcgJykpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBSKGUsIHQpIHtcclxuICAgIGUgJiZcclxuICAgICAgdC5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUodCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBmdW5jdGlvbiBEKGUpIHtcclxuICAgIHJldHVybiAnLicuY29uY2F0KGUuc3BsaXQoJyAnKS5qb2luKCcuJykpO1xyXG4gIH1cclxuICB2YXIgViA9IE9iamVjdC5mcmVlemUoeyBfX3Byb3RvX186IG51bGwsIGFkZENsYXNzZXM6IFQsIGNsYXNzTmFtZXNUb1F1ZXJ5OiBELCBnZXRFbGVtZW50RG9jdW1lbnQ6IHosIGdldEVsZW1lbnRXaW5kb3c6IEwsIGdldE9wdGlvbnM6IEMsIHJlbW92ZUNsYXNzZXM6IFIgfSksXHJcbiAgICBIID0gTCxcclxuICAgIGogPSB6LFxyXG4gICAgQiA9IEMsXHJcbiAgICBfID0gVCxcclxuICAgIHEgPSBSLFxyXG4gICAgUCA9IEQsXHJcbiAgICBYID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgZnVuY3Rpb24gZSh0LCBpKSB7XHJcbiAgICAgICAgdm9pZCAwID09PSBpICYmIChpID0ge30pO1xyXG4gICAgICAgIHZhciBzID0gdGhpcztcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAoKHRoaXMucmVtb3ZlUHJldmVudENsaWNrSWQgPSBudWxsKSxcclxuICAgICAgICAgICh0aGlzLm1pblNjcm9sbGJhcldpZHRoID0gMjApLFxyXG4gICAgICAgICAgKHRoaXMuc3RvcFNjcm9sbERlbGF5ID0gMTc1KSxcclxuICAgICAgICAgICh0aGlzLmlzU2Nyb2xsaW5nID0gITEpLFxyXG4gICAgICAgICAgKHRoaXMuaXNNb3VzZUVudGVyaW5nID0gITEpLFxyXG4gICAgICAgICAgKHRoaXMuc2Nyb2xsWFRpY2tpbmcgPSAhMSksXHJcbiAgICAgICAgICAodGhpcy5zY3JvbGxZVGlja2luZyA9ICExKSxcclxuICAgICAgICAgICh0aGlzLndyYXBwZXJFbCA9IG51bGwpLFxyXG4gICAgICAgICAgKHRoaXMuY29udGVudFdyYXBwZXJFbCA9IG51bGwpLFxyXG4gICAgICAgICAgKHRoaXMuY29udGVudEVsID0gbnVsbCksXHJcbiAgICAgICAgICAodGhpcy5vZmZzZXRFbCA9IG51bGwpLFxyXG4gICAgICAgICAgKHRoaXMubWFza0VsID0gbnVsbCksXHJcbiAgICAgICAgICAodGhpcy5wbGFjZWhvbGRlckVsID0gbnVsbCksXHJcbiAgICAgICAgICAodGhpcy5oZWlnaHRBdXRvT2JzZXJ2ZXJXcmFwcGVyRWwgPSBudWxsKSxcclxuICAgICAgICAgICh0aGlzLmhlaWdodEF1dG9PYnNlcnZlckVsID0gbnVsbCksXHJcbiAgICAgICAgICAodGhpcy5ydGxIZWxwZXJzID0gbnVsbCksXHJcbiAgICAgICAgICAodGhpcy5zY3JvbGxiYXJXaWR0aCA9IDApLFxyXG4gICAgICAgICAgKHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBudWxsKSxcclxuICAgICAgICAgICh0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBudWxsKSxcclxuICAgICAgICAgICh0aGlzLmVsU3R5bGVzID0gbnVsbCksXHJcbiAgICAgICAgICAodGhpcy5pc1J0bCA9IG51bGwpLFxyXG4gICAgICAgICAgKHRoaXMubW91c2VYID0gMCksXHJcbiAgICAgICAgICAodGhpcy5tb3VzZVkgPSAwKSxcclxuICAgICAgICAgICh0aGlzLm9uTW91c2VNb3ZlID0gZnVuY3Rpb24gKCkge30pLFxyXG4gICAgICAgICAgKHRoaXMub25XaW5kb3dSZXNpemUgPSBmdW5jdGlvbiAoKSB7fSksXHJcbiAgICAgICAgICAodGhpcy5vblN0b3BTY3JvbGxpbmcgPSBmdW5jdGlvbiAoKSB7fSksXHJcbiAgICAgICAgICAodGhpcy5vbk1vdXNlRW50ZXJlZCA9IGZ1bmN0aW9uICgpIHt9KSxcclxuICAgICAgICAgICh0aGlzLm9uU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZSA9IEgocy5lbCk7XHJcbiAgICAgICAgICAgIHMuc2Nyb2xsWFRpY2tpbmcgfHwgKGUucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHMuc2Nyb2xsWCksIChzLnNjcm9sbFhUaWNraW5nID0gITApKSxcclxuICAgICAgICAgICAgICBzLnNjcm9sbFlUaWNraW5nIHx8IChlLnJlcXVlc3RBbmltYXRpb25GcmFtZShzLnNjcm9sbFkpLCAocy5zY3JvbGxZVGlja2luZyA9ICEwKSksXHJcbiAgICAgICAgICAgICAgcy5pc1Njcm9sbGluZyB8fCAoKHMuaXNTY3JvbGxpbmcgPSAhMCksIF8ocy5lbCwgcy5jbGFzc05hbWVzLnNjcm9sbGluZykpLFxyXG4gICAgICAgICAgICAgIHMuc2hvd1Njcm9sbGJhcigneCcpLFxyXG4gICAgICAgICAgICAgIHMuc2hvd1Njcm9sbGJhcigneScpLFxyXG4gICAgICAgICAgICAgIHMub25TdG9wU2Nyb2xsaW5nKCk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgICh0aGlzLnNjcm9sbFggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHMuYXhpcy54LmlzT3ZlcmZsb3dpbmcgJiYgcy5wb3NpdGlvblNjcm9sbGJhcigneCcpLCAocy5zY3JvbGxYVGlja2luZyA9ICExKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgKHRoaXMuc2Nyb2xsWSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcy5heGlzLnkuaXNPdmVyZmxvd2luZyAmJiBzLnBvc2l0aW9uU2Nyb2xsYmFyKCd5JyksIChzLnNjcm9sbFlUaWNraW5nID0gITEpO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICAodGhpcy5fb25TdG9wU2Nyb2xsaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBxKHMuZWwsIHMuY2xhc3NOYW1lcy5zY3JvbGxpbmcpLCBzLm9wdGlvbnMuYXV0b0hpZGUgJiYgKHMuaGlkZVNjcm9sbGJhcigneCcpLCBzLmhpZGVTY3JvbGxiYXIoJ3knKSksIChzLmlzU2Nyb2xsaW5nID0gITEpO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICAodGhpcy5vbk1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHMuaXNNb3VzZUVudGVyaW5nIHx8IChfKHMuZWwsIHMuY2xhc3NOYW1lcy5tb3VzZUVudGVyZWQpLCBzLnNob3dTY3JvbGxiYXIoJ3gnKSwgcy5zaG93U2Nyb2xsYmFyKCd5JyksIChzLmlzTW91c2VFbnRlcmluZyA9ICEwKSksIHMub25Nb3VzZUVudGVyZWQoKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgKHRoaXMuX29uTW91c2VFbnRlcmVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBxKHMuZWwsIHMuY2xhc3NOYW1lcy5tb3VzZUVudGVyZWQpLCBzLm9wdGlvbnMuYXV0b0hpZGUgJiYgKHMuaGlkZVNjcm9sbGJhcigneCcpLCBzLmhpZGVTY3JvbGxiYXIoJ3knKSksIChzLmlzTW91c2VFbnRlcmluZyA9ICExKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgKHRoaXMuX29uTW91c2VNb3ZlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgKHMubW91c2VYID0gZS5jbGllbnRYKSxcclxuICAgICAgICAgICAgICAocy5tb3VzZVkgPSBlLmNsaWVudFkpLFxyXG4gICAgICAgICAgICAgIChzLmF4aXMueC5pc092ZXJmbG93aW5nIHx8IHMuYXhpcy54LmZvcmNlVmlzaWJsZSkgJiYgcy5vbk1vdXNlTW92ZUZvckF4aXMoJ3gnKSxcclxuICAgICAgICAgICAgICAocy5heGlzLnkuaXNPdmVyZmxvd2luZyB8fCBzLmF4aXMueS5mb3JjZVZpc2libGUpICYmIHMub25Nb3VzZU1vdmVGb3JBeGlzKCd5Jyk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgICh0aGlzLm9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcy5vbk1vdXNlTW92ZS5jYW5jZWwoKSxcclxuICAgICAgICAgICAgICAocy5heGlzLnguaXNPdmVyZmxvd2luZyB8fCBzLmF4aXMueC5mb3JjZVZpc2libGUpICYmIHMub25Nb3VzZUxlYXZlRm9yQXhpcygneCcpLFxyXG4gICAgICAgICAgICAgIChzLmF4aXMueS5pc092ZXJmbG93aW5nIHx8IHMuYXhpcy55LmZvcmNlVmlzaWJsZSkgJiYgcy5vbk1vdXNlTGVhdmVGb3JBeGlzKCd5JyksXHJcbiAgICAgICAgICAgICAgKHMubW91c2VYID0gLTEpLFxyXG4gICAgICAgICAgICAgIChzLm1vdXNlWSA9IC0xKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgKHRoaXMuX29uV2luZG93UmVzaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAocy5zY3JvbGxiYXJXaWR0aCA9IHMuZ2V0U2Nyb2xsYmFyV2lkdGgoKSksIHMuaGlkZU5hdGl2ZVNjcm9sbGJhcigpO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICAodGhpcy5vblBvaW50ZXJFdmVudCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0LCBpO1xyXG4gICAgICAgICAgICBzLmF4aXMueC50cmFjay5lbCAmJlxyXG4gICAgICAgICAgICAgIHMuYXhpcy55LnRyYWNrLmVsICYmXHJcbiAgICAgICAgICAgICAgcy5heGlzLnguc2Nyb2xsYmFyLmVsICYmXHJcbiAgICAgICAgICAgICAgcy5heGlzLnkuc2Nyb2xsYmFyLmVsICYmXHJcbiAgICAgICAgICAgICAgKChzLmF4aXMueC50cmFjay5yZWN0ID0gcy5heGlzLngudHJhY2suZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLFxyXG4gICAgICAgICAgICAgIChzLmF4aXMueS50cmFjay5yZWN0ID0gcy5heGlzLnkudHJhY2suZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLFxyXG4gICAgICAgICAgICAgIChzLmF4aXMueC5pc092ZXJmbG93aW5nIHx8IHMuYXhpcy54LmZvcmNlVmlzaWJsZSkgJiYgKHQgPSBzLmlzV2l0aGluQm91bmRzKHMuYXhpcy54LnRyYWNrLnJlY3QpKSxcclxuICAgICAgICAgICAgICAocy5heGlzLnkuaXNPdmVyZmxvd2luZyB8fCBzLmF4aXMueS5mb3JjZVZpc2libGUpICYmIChpID0gcy5pc1dpdGhpbkJvdW5kcyhzLmF4aXMueS50cmFjay5yZWN0KSksXHJcbiAgICAgICAgICAgICAgKHQgfHwgaSkgJiZcclxuICAgICAgICAgICAgICAgIChlLnN0b3BQcm9wYWdhdGlvbigpLFxyXG4gICAgICAgICAgICAgICAgJ3BvaW50ZXJkb3duJyA9PT0gZS50eXBlICYmXHJcbiAgICAgICAgICAgICAgICAgICd0b3VjaCcgIT09IGUucG9pbnRlclR5cGUgJiZcclxuICAgICAgICAgICAgICAgICAgKHQgJiYgKChzLmF4aXMueC5zY3JvbGxiYXIucmVjdCA9IHMuYXhpcy54LnNjcm9sbGJhci5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSksIHMuaXNXaXRoaW5Cb3VuZHMocy5heGlzLnguc2Nyb2xsYmFyLnJlY3QpID8gcy5vbkRyYWdTdGFydChlLCAneCcpIDogcy5vblRyYWNrQ2xpY2soZSwgJ3gnKSksXHJcbiAgICAgICAgICAgICAgICAgIGkgJiYgKChzLmF4aXMueS5zY3JvbGxiYXIucmVjdCA9IHMuYXhpcy55LnNjcm9sbGJhci5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSksIHMuaXNXaXRoaW5Cb3VuZHMocy5heGlzLnkuc2Nyb2xsYmFyLnJlY3QpID8gcy5vbkRyYWdTdGFydChlLCAneScpIDogcy5vblRyYWNrQ2xpY2soZSwgJ3knKSkpKSk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgICh0aGlzLmRyYWcgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICB2YXIgaSwgciwgbCwgbywgbiwgYSwgYywgaCwgdSwgZCwgcDtcclxuICAgICAgICAgICAgaWYgKHMuZHJhZ2dlZEF4aXMgJiYgcy5jb250ZW50V3JhcHBlckVsKSB7XHJcbiAgICAgICAgICAgICAgdmFyIHYgPSBzLmF4aXNbcy5kcmFnZ2VkQXhpc10udHJhY2ssXHJcbiAgICAgICAgICAgICAgICBmID0gbnVsbCAhPT0gKHIgPSBudWxsID09PSAoaSA9IHYucmVjdCkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaVtzLmF4aXNbcy5kcmFnZ2VkQXhpc10uc2l6ZUF0dHJdKSAmJiB2b2lkIDAgIT09IHIgPyByIDogMCxcclxuICAgICAgICAgICAgICAgIG0gPSBzLmF4aXNbcy5kcmFnZ2VkQXhpc10uc2Nyb2xsYmFyLFxyXG4gICAgICAgICAgICAgICAgYiA9IG51bGwgIT09IChvID0gbnVsbCA9PT0gKGwgPSBzLmNvbnRlbnRXcmFwcGVyRWwpIHx8IHZvaWQgMCA9PT0gbCA/IHZvaWQgMCA6IGxbcy5heGlzW3MuZHJhZ2dlZEF4aXNdLnNjcm9sbFNpemVBdHRyXSkgJiYgdm9pZCAwICE9PSBvID8gbyA6IDAsXHJcbiAgICAgICAgICAgICAgICBnID0gcGFyc2VJbnQobnVsbCAhPT0gKGEgPSBudWxsID09PSAobiA9IHMuZWxTdHlsZXMpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG5bcy5heGlzW3MuZHJhZ2dlZEF4aXNdLnNpemVBdHRyXSkgJiYgdm9pZCAwICE9PSBhID8gYSA6ICcwcHgnLCAxMCk7XHJcbiAgICAgICAgICAgICAgdC5wcmV2ZW50RGVmYXVsdCgpLCB0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgIHZhciB4ID1cclxuICAgICAgICAgICAgICAgICAgKCd5JyA9PT0gcy5kcmFnZ2VkQXhpcyA/IHQucGFnZVkgOiB0LnBhZ2VYKSAtXHJcbiAgICAgICAgICAgICAgICAgIChudWxsICE9PSAoaCA9IG51bGwgPT09IChjID0gdi5yZWN0KSB8fCB2b2lkIDAgPT09IGMgPyB2b2lkIDAgOiBjW3MuYXhpc1tzLmRyYWdnZWRBeGlzXS5vZmZzZXRBdHRyXSkgJiYgdm9pZCAwICE9PSBoID8gaCA6IDApIC1cclxuICAgICAgICAgICAgICAgICAgcy5heGlzW3MuZHJhZ2dlZEF4aXNdLmRyYWdPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICB5ID1cclxuICAgICAgICAgICAgICAgICAgKCh4ID0gcy5pc1J0bCA/IChudWxsICE9PSAoZCA9IG51bGwgPT09ICh1ID0gdi5yZWN0KSB8fCB2b2lkIDAgPT09IHUgPyB2b2lkIDAgOiB1W3MuYXhpc1tzLmRyYWdnZWRBeGlzXS5zaXplQXR0cl0pICYmIHZvaWQgMCAhPT0gZCA/IGQgOiAwKSAtIG0uc2l6ZSAtIHggOiB4KSAvIChmIC0gbS5zaXplKSkgKlxyXG4gICAgICAgICAgICAgICAgICAoYiAtIGcpO1xyXG4gICAgICAgICAgICAgICd4JyA9PT0gcy5kcmFnZ2VkQXhpcyAmJiBzLmlzUnRsICYmICh5ID0gKG51bGwgPT09IChwID0gZS5nZXRSdGxIZWxwZXJzKCkpIHx8IHZvaWQgMCA9PT0gcCA/IHZvaWQgMCA6IHAuaXNTY3JvbGxpbmdUb05lZ2F0aXZlKSA/IC15IDogeSksXHJcbiAgICAgICAgICAgICAgICAocy5jb250ZW50V3JhcHBlckVsW3MuYXhpc1tzLmRyYWdnZWRBeGlzXS5zY3JvbGxPZmZzZXRBdHRyXSA9IHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgICh0aGlzLm9uRW5kRHJhZyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0ID0gaihzLmVsKSxcclxuICAgICAgICAgICAgICBpID0gSChzLmVsKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpLFxyXG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCksXHJcbiAgICAgICAgICAgICAgcShzLmVsLCBzLmNsYXNzTmFtZXMuZHJhZ2dpbmcpLFxyXG4gICAgICAgICAgICAgIHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcy5kcmFnLCAhMCksXHJcbiAgICAgICAgICAgICAgdC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgcy5vbkVuZERyYWcsICEwKSxcclxuICAgICAgICAgICAgICAocy5yZW1vdmVQcmV2ZW50Q2xpY2tJZCA9IGkuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcy5wcmV2ZW50Q2xpY2ssICEwKSwgdC5yZW1vdmVFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIHMucHJldmVudENsaWNrLCAhMCksIChzLnJlbW92ZVByZXZlbnRDbGlja0lkID0gbnVsbCk7XHJcbiAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICAodGhpcy5wcmV2ZW50Q2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCksIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgICh0aGlzLmVsID0gdCksXHJcbiAgICAgICAgICAodGhpcy5vcHRpb25zID0gayhrKHt9LCBlLmRlZmF1bHRPcHRpb25zKSwgaSkpLFxyXG4gICAgICAgICAgKHRoaXMuY2xhc3NOYW1lcyA9IGsoayh7fSwgZS5kZWZhdWx0T3B0aW9ucy5jbGFzc05hbWVzKSwgaS5jbGFzc05hbWVzKSksXHJcbiAgICAgICAgICAodGhpcy5heGlzID0ge1xyXG4gICAgICAgICAgICB4OiB7XHJcbiAgICAgICAgICAgICAgc2Nyb2xsT2Zmc2V0QXR0cjogJ3Njcm9sbExlZnQnLFxyXG4gICAgICAgICAgICAgIHNpemVBdHRyOiAnd2lkdGgnLFxyXG4gICAgICAgICAgICAgIHNjcm9sbFNpemVBdHRyOiAnc2Nyb2xsV2lkdGgnLFxyXG4gICAgICAgICAgICAgIG9mZnNldFNpemVBdHRyOiAnb2Zmc2V0V2lkdGgnLFxyXG4gICAgICAgICAgICAgIG9mZnNldEF0dHI6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICBvdmVyZmxvd0F0dHI6ICdvdmVyZmxvd1gnLFxyXG4gICAgICAgICAgICAgIGRyYWdPZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgICAgaXNPdmVyZmxvd2luZzogITAsXHJcbiAgICAgICAgICAgICAgZm9yY2VWaXNpYmxlOiAhMSxcclxuICAgICAgICAgICAgICB0cmFjazogeyBzaXplOiBudWxsLCBlbDogbnVsbCwgcmVjdDogbnVsbCwgaXNWaXNpYmxlOiAhMSB9LFxyXG4gICAgICAgICAgICAgIHNjcm9sbGJhcjogeyBzaXplOiBudWxsLCBlbDogbnVsbCwgcmVjdDogbnVsbCwgaXNWaXNpYmxlOiAhMSB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgc2Nyb2xsT2Zmc2V0QXR0cjogJ3Njcm9sbFRvcCcsXHJcbiAgICAgICAgICAgICAgc2l6ZUF0dHI6ICdoZWlnaHQnLFxyXG4gICAgICAgICAgICAgIHNjcm9sbFNpemVBdHRyOiAnc2Nyb2xsSGVpZ2h0JyxcclxuICAgICAgICAgICAgICBvZmZzZXRTaXplQXR0cjogJ29mZnNldEhlaWdodCcsXHJcbiAgICAgICAgICAgICAgb2Zmc2V0QXR0cjogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3dBdHRyOiAnb3ZlcmZsb3dZJyxcclxuICAgICAgICAgICAgICBkcmFnT2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICAgIGlzT3ZlcmZsb3dpbmc6ICEwLFxyXG4gICAgICAgICAgICAgIGZvcmNlVmlzaWJsZTogITEsXHJcbiAgICAgICAgICAgICAgdHJhY2s6IHsgc2l6ZTogbnVsbCwgZWw6IG51bGwsIHJlY3Q6IG51bGwsIGlzVmlzaWJsZTogITEgfSxcclxuICAgICAgICAgICAgICBzY3JvbGxiYXI6IHsgc2l6ZTogbnVsbCwgZWw6IG51bGwsIHJlY3Q6IG51bGwsIGlzVmlzaWJsZTogITEgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgJ29iamVjdCcgIT0gdHlwZW9mIHRoaXMuZWwgfHwgIXRoaXMuZWwubm9kZU5hbWUpXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcmd1bWVudCBwYXNzZWQgdG8gU2ltcGxlQmFyIG11c3QgYmUgYW4gSFRNTCBlbGVtZW50IGluc3RlYWQgb2YgJy5jb25jYXQodGhpcy5lbCkpO1xyXG4gICAgICAgICh0aGlzLm9uTW91c2VNb3ZlID0gKGZ1bmN0aW9uIChlLCB0LCBpKSB7XHJcbiAgICAgICAgICB2YXIgcyA9ICEwLFxyXG4gICAgICAgICAgICByID0gITA7XHJcbiAgICAgICAgICBpZiAoJ2Z1bmN0aW9uJyAhPSB0eXBlb2YgZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBmdW5jdGlvbicpO1xyXG4gICAgICAgICAgcmV0dXJuIG0oaSkgJiYgKChzID0gJ2xlYWRpbmcnIGluIGkgPyAhIWkubGVhZGluZyA6IHMpLCAociA9ICd0cmFpbGluZycgaW4gaSA/ICEhaS50cmFpbGluZyA6IHIpKSwgQShlLCB0LCB7IGxlYWRpbmc6IHMsIG1heFdhaXQ6IHQsIHRyYWlsaW5nOiByIH0pO1xyXG4gICAgICAgIH0pKHRoaXMuX29uTW91c2VNb3ZlLCA2NCkpLFxyXG4gICAgICAgICAgKHRoaXMub25XaW5kb3dSZXNpemUgPSBBKHRoaXMuX29uV2luZG93UmVzaXplLCA2NCwgeyBsZWFkaW5nOiAhMCB9KSksXHJcbiAgICAgICAgICAodGhpcy5vblN0b3BTY3JvbGxpbmcgPSBBKHRoaXMuX29uU3RvcFNjcm9sbGluZywgdGhpcy5zdG9wU2Nyb2xsRGVsYXkpKSxcclxuICAgICAgICAgICh0aGlzLm9uTW91c2VFbnRlcmVkID0gQSh0aGlzLl9vbk1vdXNlRW50ZXJlZCwgdGhpcy5zdG9wU2Nyb2xsRGVsYXkpKSxcclxuICAgICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgKGUuZ2V0UnRsSGVscGVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmIChlLnJ0bEhlbHBlcnMpIHJldHVybiBlLnJ0bEhlbHBlcnM7XHJcbiAgICAgICAgICB2YXIgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgdC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cInNpbXBsZWJhci1kdW1teS1zY3JvbGxiYXItc2l6ZVwiPjxkaXY+PC9kaXY+PC9kaXY+JztcclxuICAgICAgICAgIHZhciBpID0gdC5maXJzdEVsZW1lbnRDaGlsZCxcclxuICAgICAgICAgICAgcyA9IG51bGwgPT0gaSA/IHZvaWQgMCA6IGkuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgICBpZiAoIXMpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpKSwgKGkuc2Nyb2xsTGVmdCA9IDApO1xyXG4gICAgICAgICAgdmFyIHIgPSBlLmdldE9mZnNldChpKSxcclxuICAgICAgICAgICAgbCA9IGUuZ2V0T2Zmc2V0KHMpO1xyXG4gICAgICAgICAgaS5zY3JvbGxMZWZ0ID0gLTk5OTtcclxuICAgICAgICAgIHZhciBvID0gZS5nZXRPZmZzZXQocyk7XHJcbiAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpKSwgKGUucnRsSGVscGVycyA9IHsgaXNTY3JvbGxPcmlnaW5BdFplcm86IHIubGVmdCAhPT0gbC5sZWZ0LCBpc1Njcm9sbGluZ1RvTmVnYXRpdmU6IGwubGVmdCAhPT0gby5sZWZ0IH0pLCBlLnJ0bEhlbHBlcnM7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGUucHJvdG90eXBlLmdldFNjcm9sbGJhcldpZHRoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmNvbnRlbnRXcmFwcGVyRWwgJiYgJ25vbmUnID09PSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuY29udGVudFdyYXBwZXJFbCwgJzo6LXdlYmtpdC1zY3JvbGxiYXInKS5kaXNwbGF5KSB8fFxyXG4gICAgICAgICAgICAgICdzY3JvbGxiYXJXaWR0aCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlIHx8XHJcbiAgICAgICAgICAgICAgJy1tcy1vdmVyZmxvdy1zdHlsZScgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlXHJcbiAgICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgICAgOiBOKCk7XHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGUuZ2V0T2Zmc2V0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHZhciB0ID0gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgICAgICAgaSA9IGooZSksXHJcbiAgICAgICAgICAgIHMgPSBIKGUpO1xyXG4gICAgICAgICAgcmV0dXJuIHsgdG9wOiB0LnRvcCArIChzLnBhZ2VZT2Zmc2V0IHx8IGkuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCksIGxlZnQ6IHQubGVmdCArIChzLnBhZ2VYT2Zmc2V0IHx8IGkuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQpIH07XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB0ICYmICh0aGlzLmluaXRET00oKSwgKHRoaXMucnRsSGVscGVycyA9IGUuZ2V0UnRsSGVscGVycygpKSwgKHRoaXMuc2Nyb2xsYmFyV2lkdGggPSB0aGlzLmdldFNjcm9sbGJhcldpZHRoKCkpLCB0aGlzLnJlY2FsY3VsYXRlKCksIHRoaXMuaW5pdExpc3RlbmVycygpKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICAoZS5wcm90b3R5cGUuaW5pdERPTSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBlLCB0O1xyXG4gICAgICAgICAgKHRoaXMud3JhcHBlckVsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKFAodGhpcy5jbGFzc05hbWVzLndyYXBwZXIpKSksXHJcbiAgICAgICAgICAgICh0aGlzLmNvbnRlbnRXcmFwcGVyRWwgPSB0aGlzLm9wdGlvbnMuc2Nyb2xsYWJsZU5vZGUgfHwgdGhpcy5lbC5xdWVyeVNlbGVjdG9yKFAodGhpcy5jbGFzc05hbWVzLmNvbnRlbnRXcmFwcGVyKSkpLFxyXG4gICAgICAgICAgICAodGhpcy5jb250ZW50RWwgPSB0aGlzLm9wdGlvbnMuY29udGVudE5vZGUgfHwgdGhpcy5lbC5xdWVyeVNlbGVjdG9yKFAodGhpcy5jbGFzc05hbWVzLmNvbnRlbnRFbCkpKSxcclxuICAgICAgICAgICAgKHRoaXMub2Zmc2V0RWwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoUCh0aGlzLmNsYXNzTmFtZXMub2Zmc2V0KSkpLFxyXG4gICAgICAgICAgICAodGhpcy5tYXNrRWwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoUCh0aGlzLmNsYXNzTmFtZXMubWFzaykpKSxcclxuICAgICAgICAgICAgKHRoaXMucGxhY2Vob2xkZXJFbCA9IHRoaXMuZmluZENoaWxkKHRoaXMud3JhcHBlckVsLCBQKHRoaXMuY2xhc3NOYW1lcy5wbGFjZWhvbGRlcikpKSxcclxuICAgICAgICAgICAgKHRoaXMuaGVpZ2h0QXV0b09ic2VydmVyV3JhcHBlckVsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKFAodGhpcy5jbGFzc05hbWVzLmhlaWdodEF1dG9PYnNlcnZlcldyYXBwZXJFbCkpKSxcclxuICAgICAgICAgICAgKHRoaXMuaGVpZ2h0QXV0b09ic2VydmVyRWwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoUCh0aGlzLmNsYXNzTmFtZXMuaGVpZ2h0QXV0b09ic2VydmVyRWwpKSksXHJcbiAgICAgICAgICAgICh0aGlzLmF4aXMueC50cmFjay5lbCA9IHRoaXMuZmluZENoaWxkKHRoaXMuZWwsICcnLmNvbmNhdChQKHRoaXMuY2xhc3NOYW1lcy50cmFjaykpLmNvbmNhdChQKHRoaXMuY2xhc3NOYW1lcy5ob3Jpem9udGFsKSkpKSxcclxuICAgICAgICAgICAgKHRoaXMuYXhpcy55LnRyYWNrLmVsID0gdGhpcy5maW5kQ2hpbGQodGhpcy5lbCwgJycuY29uY2F0KFAodGhpcy5jbGFzc05hbWVzLnRyYWNrKSkuY29uY2F0KFAodGhpcy5jbGFzc05hbWVzLnZlcnRpY2FsKSkpKSxcclxuICAgICAgICAgICAgKHRoaXMuYXhpcy54LnNjcm9sbGJhci5lbCA9IChudWxsID09PSAoZSA9IHRoaXMuYXhpcy54LnRyYWNrLmVsKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnF1ZXJ5U2VsZWN0b3IoUCh0aGlzLmNsYXNzTmFtZXMuc2Nyb2xsYmFyKSkpIHx8IG51bGwpLFxyXG4gICAgICAgICAgICAodGhpcy5heGlzLnkuc2Nyb2xsYmFyLmVsID0gKG51bGwgPT09ICh0ID0gdGhpcy5heGlzLnkudHJhY2suZWwpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQucXVlcnlTZWxlY3RvcihQKHRoaXMuY2xhc3NOYW1lcy5zY3JvbGxiYXIpKSkgfHwgbnVsbCksXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hdXRvSGlkZSB8fCAoXyh0aGlzLmF4aXMueC5zY3JvbGxiYXIuZWwsIHRoaXMuY2xhc3NOYW1lcy52aXNpYmxlKSwgXyh0aGlzLmF4aXMueS5zY3JvbGxiYXIuZWwsIHRoaXMuY2xhc3NOYW1lcy52aXNpYmxlKSk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGUucHJvdG90eXBlLmluaXRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgZSxcclxuICAgICAgICAgICAgdCA9IHRoaXMsXHJcbiAgICAgICAgICAgIGkgPSBIKHRoaXMuZWwpO1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAodGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5vbk1vdXNlRW50ZXIpLFxyXG4gICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgdGhpcy5vblBvaW50ZXJFdmVudCwgITApLFxyXG4gICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpLFxyXG4gICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uTW91c2VMZWF2ZSksXHJcbiAgICAgICAgICAgIG51bGwgPT09IChlID0gdGhpcy5jb250ZW50V3JhcHBlckVsKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKSxcclxuICAgICAgICAgICAgaS5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKSxcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50RWwpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5SZXNpemVPYnNlcnZlcikge1xyXG4gICAgICAgICAgICAgIHZhciBzID0gITEsXHJcbiAgICAgICAgICAgICAgICByID0gaS5SZXNpemVPYnNlcnZlciB8fCBSZXNpemVPYnNlcnZlcjtcclxuICAgICAgICAgICAgICAodGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyByKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHMgJiZcclxuICAgICAgICAgICAgICAgICAgaS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQucmVjYWxjdWxhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuZWwpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuY29udGVudEVsKSxcclxuICAgICAgICAgICAgICAgIGkucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgcyA9ICEwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBpLk11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIGkucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHQucmVjYWxjdWxhdGUoKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuY29udGVudEVsLCB7IGNoaWxkTGlzdDogITAsIHN1YnRyZWU6ICEwLCBjaGFyYWN0ZXJEYXRhOiAhMCB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICAoZS5wcm90b3R5cGUucmVjYWxjdWxhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5oZWlnaHRBdXRvT2JzZXJ2ZXJFbCAmJiB0aGlzLmNvbnRlbnRFbCAmJiB0aGlzLmNvbnRlbnRXcmFwcGVyRWwgJiYgdGhpcy53cmFwcGVyRWwgJiYgdGhpcy5wbGFjZWhvbGRlckVsKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gSCh0aGlzLmVsKTtcclxuICAgICAgICAgICAgKHRoaXMuZWxTdHlsZXMgPSBlLmdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkpLCAodGhpcy5pc1J0bCA9ICdydGwnID09PSB0aGlzLmVsU3R5bGVzLmRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcy5jb250ZW50RWwub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgICAgICAgaSA9IHRoaXMuaGVpZ2h0QXV0b09ic2VydmVyRWwub2Zmc2V0SGVpZ2h0IDw9IDEsXHJcbiAgICAgICAgICAgICAgcyA9IHRoaXMuaGVpZ2h0QXV0b09ic2VydmVyRWwub2Zmc2V0V2lkdGggPD0gMSB8fCB0ID4gMCxcclxuICAgICAgICAgICAgICByID0gdGhpcy5jb250ZW50V3JhcHBlckVsLm9mZnNldFdpZHRoLFxyXG4gICAgICAgICAgICAgIGwgPSB0aGlzLmVsU3R5bGVzLm92ZXJmbG93WCxcclxuICAgICAgICAgICAgICBvID0gdGhpcy5lbFN0eWxlcy5vdmVyZmxvd1k7XHJcbiAgICAgICAgICAgICh0aGlzLmNvbnRlbnRFbC5zdHlsZS5wYWRkaW5nID0gJydcclxuICAgICAgICAgICAgICAuY29uY2F0KHRoaXMuZWxTdHlsZXMucGFkZGluZ1RvcCwgJyAnKVxyXG4gICAgICAgICAgICAgIC5jb25jYXQodGhpcy5lbFN0eWxlcy5wYWRkaW5nUmlnaHQsICcgJylcclxuICAgICAgICAgICAgICAuY29uY2F0KHRoaXMuZWxTdHlsZXMucGFkZGluZ0JvdHRvbSwgJyAnKVxyXG4gICAgICAgICAgICAgIC5jb25jYXQodGhpcy5lbFN0eWxlcy5wYWRkaW5nTGVmdCkpLFxyXG4gICAgICAgICAgICAgICh0aGlzLndyYXBwZXJFbC5zdHlsZS5tYXJnaW4gPSAnLSdcclxuICAgICAgICAgICAgICAgIC5jb25jYXQodGhpcy5lbFN0eWxlcy5wYWRkaW5nVG9wLCAnIC0nKVxyXG4gICAgICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmVsU3R5bGVzLnBhZGRpbmdSaWdodCwgJyAtJylcclxuICAgICAgICAgICAgICAgIC5jb25jYXQodGhpcy5lbFN0eWxlcy5wYWRkaW5nQm90dG9tLCAnIC0nKVxyXG4gICAgICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmVsU3R5bGVzLnBhZGRpbmdMZWZ0KSk7XHJcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5jb250ZW50RWwuc2Nyb2xsSGVpZ2h0LFxyXG4gICAgICAgICAgICAgIGEgPSB0aGlzLmNvbnRlbnRFbC5zY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgKHRoaXMuY29udGVudFdyYXBwZXJFbC5zdHlsZS5oZWlnaHQgPSBpID8gJ2F1dG8nIDogJzEwMCUnKSwgKHRoaXMucGxhY2Vob2xkZXJFbC5zdHlsZS53aWR0aCA9IHMgPyAnJy5jb25jYXQodCB8fCBhLCAncHgnKSA6ICdhdXRvJyksICh0aGlzLnBsYWNlaG9sZGVyRWwuc3R5bGUuaGVpZ2h0ID0gJycuY29uY2F0KG4sICdweCcpKTtcclxuICAgICAgICAgICAgdmFyIGMgPSB0aGlzLmNvbnRlbnRXcmFwcGVyRWwub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICAodGhpcy5heGlzLnguaXNPdmVyZmxvd2luZyA9IDAgIT09IHQgJiYgYSA+IHQpLFxyXG4gICAgICAgICAgICAgICh0aGlzLmF4aXMueS5pc092ZXJmbG93aW5nID0gbiA+IGMpLFxyXG4gICAgICAgICAgICAgICh0aGlzLmF4aXMueC5pc092ZXJmbG93aW5nID0gJ2hpZGRlbicgIT09IGwgJiYgdGhpcy5heGlzLnguaXNPdmVyZmxvd2luZyksXHJcbiAgICAgICAgICAgICAgKHRoaXMuYXhpcy55LmlzT3ZlcmZsb3dpbmcgPSAnaGlkZGVuJyAhPT0gbyAmJiB0aGlzLmF4aXMueS5pc092ZXJmbG93aW5nKSxcclxuICAgICAgICAgICAgICAodGhpcy5heGlzLnguZm9yY2VWaXNpYmxlID0gJ3gnID09PSB0aGlzLm9wdGlvbnMuZm9yY2VWaXNpYmxlIHx8ICEwID09PSB0aGlzLm9wdGlvbnMuZm9yY2VWaXNpYmxlKSxcclxuICAgICAgICAgICAgICAodGhpcy5heGlzLnkuZm9yY2VWaXNpYmxlID0gJ3knID09PSB0aGlzLm9wdGlvbnMuZm9yY2VWaXNpYmxlIHx8ICEwID09PSB0aGlzLm9wdGlvbnMuZm9yY2VWaXNpYmxlKSxcclxuICAgICAgICAgICAgICB0aGlzLmhpZGVOYXRpdmVTY3JvbGxiYXIoKTtcclxuICAgICAgICAgICAgdmFyIGggPSB0aGlzLmF4aXMueC5pc092ZXJmbG93aW5nID8gdGhpcy5zY3JvbGxiYXJXaWR0aCA6IDAsXHJcbiAgICAgICAgICAgICAgdSA9IHRoaXMuYXhpcy55LmlzT3ZlcmZsb3dpbmcgPyB0aGlzLnNjcm9sbGJhcldpZHRoIDogMDtcclxuICAgICAgICAgICAgKHRoaXMuYXhpcy54LmlzT3ZlcmZsb3dpbmcgPSB0aGlzLmF4aXMueC5pc092ZXJmbG93aW5nICYmIGEgPiByIC0gdSksXHJcbiAgICAgICAgICAgICAgKHRoaXMuYXhpcy55LmlzT3ZlcmZsb3dpbmcgPSB0aGlzLmF4aXMueS5pc092ZXJmbG93aW5nICYmIG4gPiBjIC0gaCksXHJcbiAgICAgICAgICAgICAgKHRoaXMuYXhpcy54LnNjcm9sbGJhci5zaXplID0gdGhpcy5nZXRTY3JvbGxiYXJTaXplKCd4JykpLFxyXG4gICAgICAgICAgICAgICh0aGlzLmF4aXMueS5zY3JvbGxiYXIuc2l6ZSA9IHRoaXMuZ2V0U2Nyb2xsYmFyU2l6ZSgneScpKSxcclxuICAgICAgICAgICAgICB0aGlzLmF4aXMueC5zY3JvbGxiYXIuZWwgJiYgKHRoaXMuYXhpcy54LnNjcm9sbGJhci5lbC5zdHlsZS53aWR0aCA9ICcnLmNvbmNhdCh0aGlzLmF4aXMueC5zY3JvbGxiYXIuc2l6ZSwgJ3B4JykpLFxyXG4gICAgICAgICAgICAgIHRoaXMuYXhpcy55LnNjcm9sbGJhci5lbCAmJiAodGhpcy5heGlzLnkuc2Nyb2xsYmFyLmVsLnN0eWxlLmhlaWdodCA9ICcnLmNvbmNhdCh0aGlzLmF4aXMueS5zY3JvbGxiYXIuc2l6ZSwgJ3B4JykpLFxyXG4gICAgICAgICAgICAgIHRoaXMucG9zaXRpb25TY3JvbGxiYXIoJ3gnKSxcclxuICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uU2Nyb2xsYmFyKCd5JyksXHJcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVUcmFja1Zpc2liaWxpdHkoJ3gnKSxcclxuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVRyYWNrVmlzaWJpbGl0eSgneScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIChlLnByb3RvdHlwZS5nZXRTY3JvbGxiYXJTaXplID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHZhciB0LCBpO1xyXG4gICAgICAgICAgaWYgKCh2b2lkIDAgPT09IGUgJiYgKGUgPSAneScpLCAhdGhpcy5heGlzW2VdLmlzT3ZlcmZsb3dpbmcgfHwgIXRoaXMuY29udGVudEVsKSkgcmV0dXJuIDA7XHJcbiAgICAgICAgICB2YXIgcyxcclxuICAgICAgICAgICAgciA9IHRoaXMuY29udGVudEVsW3RoaXMuYXhpc1tlXS5zY3JvbGxTaXplQXR0cl0sXHJcbiAgICAgICAgICAgIGwgPSBudWxsICE9PSAoaSA9IG51bGwgPT09ICh0ID0gdGhpcy5heGlzW2VdLnRyYWNrLmVsKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0W3RoaXMuYXhpc1tlXS5vZmZzZXRTaXplQXR0cl0pICYmIHZvaWQgMCAhPT0gaSA/IGkgOiAwLFxyXG4gICAgICAgICAgICBvID0gbCAvIHI7XHJcbiAgICAgICAgICByZXR1cm4gKHMgPSBNYXRoLm1heCh+fihvICogbCksIHRoaXMub3B0aW9ucy5zY3JvbGxiYXJNaW5TaXplKSksIHRoaXMub3B0aW9ucy5zY3JvbGxiYXJNYXhTaXplICYmIChzID0gTWF0aC5taW4ocywgdGhpcy5vcHRpb25zLnNjcm9sbGJhck1heFNpemUpKSwgcztcclxuICAgICAgICB9KSxcclxuICAgICAgICAoZS5wcm90b3R5cGUucG9zaXRpb25TY3JvbGxiYXIgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgdmFyIGksIHMsIHI7XHJcbiAgICAgICAgICB2b2lkIDAgPT09IHQgJiYgKHQgPSAneScpO1xyXG4gICAgICAgICAgdmFyIGwgPSB0aGlzLmF4aXNbdF0uc2Nyb2xsYmFyO1xyXG4gICAgICAgICAgaWYgKHRoaXMuYXhpc1t0XS5pc092ZXJmbG93aW5nICYmIHRoaXMuY29udGVudFdyYXBwZXJFbCAmJiBsLmVsICYmIHRoaXMuZWxTdHlsZXMpIHtcclxuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLmNvbnRlbnRXcmFwcGVyRWxbdGhpcy5heGlzW3RdLnNjcm9sbFNpemVBdHRyXSxcclxuICAgICAgICAgICAgICBuID0gKG51bGwgPT09IChpID0gdGhpcy5heGlzW3RdLnRyYWNrLmVsKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpW3RoaXMuYXhpc1t0XS5vZmZzZXRTaXplQXR0cl0pIHx8IDAsXHJcbiAgICAgICAgICAgICAgYSA9IHBhcnNlSW50KHRoaXMuZWxTdHlsZXNbdGhpcy5heGlzW3RdLnNpemVBdHRyXSwgMTApLFxyXG4gICAgICAgICAgICAgIGMgPSB0aGlzLmNvbnRlbnRXcmFwcGVyRWxbdGhpcy5heGlzW3RdLnNjcm9sbE9mZnNldEF0dHJdO1xyXG4gICAgICAgICAgICAoYyA9ICd4JyA9PT0gdCAmJiB0aGlzLmlzUnRsICYmIChudWxsID09PSAocyA9IGUuZ2V0UnRsSGVscGVycygpKSB8fCB2b2lkIDAgPT09IHMgPyB2b2lkIDAgOiBzLmlzU2Nyb2xsT3JpZ2luQXRaZXJvKSA/IC1jIDogYyksXHJcbiAgICAgICAgICAgICAgJ3gnID09PSB0ICYmIHRoaXMuaXNSdGwgJiYgKGMgPSAobnVsbCA9PT0gKHIgPSBlLmdldFJ0bEhlbHBlcnMoKSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5pc1Njcm9sbGluZ1RvTmVnYXRpdmUpID8gYyA6IC1jKTtcclxuICAgICAgICAgICAgdmFyIGggPSBjIC8gKG8gLSBhKSxcclxuICAgICAgICAgICAgICB1ID0gfn4oKG4gLSBsLnNpemUpICogaCk7XHJcbiAgICAgICAgICAgICh1ID0gJ3gnID09PSB0ICYmIHRoaXMuaXNSdGwgPyAtdSArIChuIC0gbC5zaXplKSA6IHUpLCAobC5lbC5zdHlsZS50cmFuc2Zvcm0gPSAneCcgPT09IHQgPyAndHJhbnNsYXRlM2QoJy5jb25jYXQodSwgJ3B4LCAwLCAwKScpIDogJ3RyYW5zbGF0ZTNkKDAsICcuY29uY2F0KHUsICdweCwgMCknKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGUucHJvdG90eXBlLnRvZ2dsZVRyYWNrVmlzaWJpbGl0eSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICB2b2lkIDAgPT09IGUgJiYgKGUgPSAneScpO1xyXG4gICAgICAgICAgdmFyIHQgPSB0aGlzLmF4aXNbZV0udHJhY2suZWwsXHJcbiAgICAgICAgICAgIGkgPSB0aGlzLmF4aXNbZV0uc2Nyb2xsYmFyLmVsO1xyXG4gICAgICAgICAgdCAmJlxyXG4gICAgICAgICAgICBpICYmXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudFdyYXBwZXJFbCAmJlxyXG4gICAgICAgICAgICAodGhpcy5heGlzW2VdLmlzT3ZlcmZsb3dpbmcgfHwgdGhpcy5heGlzW2VdLmZvcmNlVmlzaWJsZVxyXG4gICAgICAgICAgICAgID8gKCh0LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZScpLCAodGhpcy5jb250ZW50V3JhcHBlckVsLnN0eWxlW3RoaXMuYXhpc1tlXS5vdmVyZmxvd0F0dHJdID0gJ3Njcm9sbCcpLCB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJycuY29uY2F0KHRoaXMuY2xhc3NOYW1lcy5zY3JvbGxhYmxlLCAnLScpLmNvbmNhdChlKSkpXHJcbiAgICAgICAgICAgICAgOiAoKHQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nKSwgKHRoaXMuY29udGVudFdyYXBwZXJFbC5zdHlsZVt0aGlzLmF4aXNbZV0ub3ZlcmZsb3dBdHRyXSA9ICdoaWRkZW4nKSwgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCcnLmNvbmNhdCh0aGlzLmNsYXNzTmFtZXMuc2Nyb2xsYWJsZSwgJy0nKS5jb25jYXQoZSkpKSxcclxuICAgICAgICAgICAgdGhpcy5heGlzW2VdLmlzT3ZlcmZsb3dpbmcgPyAoaS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJykgOiAoaS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKSk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGUucHJvdG90eXBlLnNob3dTY3JvbGxiYXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgdm9pZCAwID09PSBlICYmIChlID0gJ3knKSxcclxuICAgICAgICAgICAgdGhpcy5heGlzW2VdLmlzT3ZlcmZsb3dpbmcgJiYgIXRoaXMuYXhpc1tlXS5zY3JvbGxiYXIuaXNWaXNpYmxlICYmIChfKHRoaXMuYXhpc1tlXS5zY3JvbGxiYXIuZWwsIHRoaXMuY2xhc3NOYW1lcy52aXNpYmxlKSwgKHRoaXMuYXhpc1tlXS5zY3JvbGxiYXIuaXNWaXNpYmxlID0gITApKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICAoZS5wcm90b3R5cGUuaGlkZVNjcm9sbGJhciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICB2b2lkIDAgPT09IGUgJiYgKGUgPSAneScpLCB0aGlzLmF4aXNbZV0uaXNPdmVyZmxvd2luZyAmJiB0aGlzLmF4aXNbZV0uc2Nyb2xsYmFyLmlzVmlzaWJsZSAmJiAocSh0aGlzLmF4aXNbZV0uc2Nyb2xsYmFyLmVsLCB0aGlzLmNsYXNzTmFtZXMudmlzaWJsZSksICh0aGlzLmF4aXNbZV0uc2Nyb2xsYmFyLmlzVmlzaWJsZSA9ICExKSk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGUucHJvdG90eXBlLmhpZGVOYXRpdmVTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB0aGlzLm9mZnNldEVsICYmXHJcbiAgICAgICAgICAgICgodGhpcy5vZmZzZXRFbC5zdHlsZVt0aGlzLmlzUnRsID8gJ2xlZnQnIDogJ3JpZ2h0J10gPSB0aGlzLmF4aXMueS5pc092ZXJmbG93aW5nIHx8IHRoaXMuYXhpcy55LmZvcmNlVmlzaWJsZSA/ICctJy5jb25jYXQodGhpcy5zY3JvbGxiYXJXaWR0aCwgJ3B4JykgOiAnMHB4JyksXHJcbiAgICAgICAgICAgICh0aGlzLm9mZnNldEVsLnN0eWxlLmJvdHRvbSA9IHRoaXMuYXhpcy54LmlzT3ZlcmZsb3dpbmcgfHwgdGhpcy5heGlzLnguZm9yY2VWaXNpYmxlID8gJy0nLmNvbmNhdCh0aGlzLnNjcm9sbGJhcldpZHRoLCAncHgnKSA6ICcwcHgnKSk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGUucHJvdG90eXBlLm9uTW91c2VNb3ZlRm9yQXhpcyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICB2b2lkIDAgPT09IGUgJiYgKGUgPSAneScpO1xyXG4gICAgICAgICAgdmFyIHQgPSB0aGlzLmF4aXNbZV07XHJcbiAgICAgICAgICB0LnRyYWNrLmVsICYmXHJcbiAgICAgICAgICAgIHQuc2Nyb2xsYmFyLmVsICYmXHJcbiAgICAgICAgICAgICgodC50cmFjay5yZWN0ID0gdC50cmFjay5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSksXHJcbiAgICAgICAgICAgICh0LnNjcm9sbGJhci5yZWN0ID0gdC5zY3JvbGxiYXIuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLFxyXG4gICAgICAgICAgICB0aGlzLmlzV2l0aGluQm91bmRzKHQudHJhY2sucmVjdClcclxuICAgICAgICAgICAgICA/ICh0aGlzLnNob3dTY3JvbGxiYXIoZSksXHJcbiAgICAgICAgICAgICAgICBfKHQudHJhY2suZWwsIHRoaXMuY2xhc3NOYW1lcy5ob3ZlciksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzV2l0aGluQm91bmRzKHQuc2Nyb2xsYmFyLnJlY3QpID8gXyh0LnNjcm9sbGJhci5lbCwgdGhpcy5jbGFzc05hbWVzLmhvdmVyKSA6IHEodC5zY3JvbGxiYXIuZWwsIHRoaXMuY2xhc3NOYW1lcy5ob3ZlcikpXHJcbiAgICAgICAgICAgICAgOiAocSh0LnRyYWNrLmVsLCB0aGlzLmNsYXNzTmFtZXMuaG92ZXIpLCB0aGlzLm9wdGlvbnMuYXV0b0hpZGUgJiYgdGhpcy5oaWRlU2Nyb2xsYmFyKGUpKSk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGUucHJvdG90eXBlLm9uTW91c2VMZWF2ZUZvckF4aXMgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgdm9pZCAwID09PSBlICYmIChlID0gJ3knKSwgcSh0aGlzLmF4aXNbZV0udHJhY2suZWwsIHRoaXMuY2xhc3NOYW1lcy5ob3ZlciksIHEodGhpcy5heGlzW2VdLnNjcm9sbGJhci5lbCwgdGhpcy5jbGFzc05hbWVzLmhvdmVyKSwgdGhpcy5vcHRpb25zLmF1dG9IaWRlICYmIHRoaXMuaGlkZVNjcm9sbGJhcihlKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICAoZS5wcm90b3R5cGUub25EcmFnU3RhcnQgPSBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICB2b2lkIDAgPT09IHQgJiYgKHQgPSAneScpO1xyXG4gICAgICAgICAgdmFyIHMgPSBqKHRoaXMuZWwpLFxyXG4gICAgICAgICAgICByID0gSCh0aGlzLmVsKSxcclxuICAgICAgICAgICAgbCA9IHRoaXMuYXhpc1t0XS5zY3JvbGxiYXIsXHJcbiAgICAgICAgICAgIG8gPSAneScgPT09IHQgPyBlLnBhZ2VZIDogZS5wYWdlWDtcclxuICAgICAgICAgICh0aGlzLmF4aXNbdF0uZHJhZ09mZnNldCA9IG8gLSAoKG51bGwgPT09IChpID0gbC5yZWN0KSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpW3RoaXMuYXhpc1t0XS5vZmZzZXRBdHRyXSkgfHwgMCkpLFxyXG4gICAgICAgICAgICAodGhpcy5kcmFnZ2VkQXhpcyA9IHQpLFxyXG4gICAgICAgICAgICBfKHRoaXMuZWwsIHRoaXMuY2xhc3NOYW1lcy5kcmFnZ2luZyksXHJcbiAgICAgICAgICAgIHMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnLCAhMCksXHJcbiAgICAgICAgICAgIHMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25FbmREcmFnLCAhMCksXHJcbiAgICAgICAgICAgIG51bGwgPT09IHRoaXMucmVtb3ZlUHJldmVudENsaWNrSWRcclxuICAgICAgICAgICAgICA/IChzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcmV2ZW50Q2xpY2ssICEwKSwgcy5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIHRoaXMucHJldmVudENsaWNrLCAhMCkpXHJcbiAgICAgICAgICAgICAgOiAoci5jbGVhclRpbWVvdXQodGhpcy5yZW1vdmVQcmV2ZW50Q2xpY2tJZCksICh0aGlzLnJlbW92ZVByZXZlbnRDbGlja0lkID0gbnVsbCkpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIChlLnByb3RvdHlwZS5vblRyYWNrQ2xpY2sgPSBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgdmFyIGksXHJcbiAgICAgICAgICAgIHMsXHJcbiAgICAgICAgICAgIHIsXHJcbiAgICAgICAgICAgIGwsXHJcbiAgICAgICAgICAgIG8gPSB0aGlzO1xyXG4gICAgICAgICAgdm9pZCAwID09PSB0ICYmICh0ID0gJ3knKTtcclxuICAgICAgICAgIHZhciBuID0gdGhpcy5heGlzW3RdO1xyXG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jbGlja09uVHJhY2sgJiYgbi5zY3JvbGxiYXIuZWwgJiYgdGhpcy5jb250ZW50V3JhcHBlckVsKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIGEgPSBIKHRoaXMuZWwpO1xyXG4gICAgICAgICAgICB0aGlzLmF4aXNbdF0uc2Nyb2xsYmFyLnJlY3QgPSBuLnNjcm9sbGJhci5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgdmFyIGMgPSBudWxsICE9PSAocyA9IG51bGwgPT09IChpID0gdGhpcy5heGlzW3RdLnNjcm9sbGJhci5yZWN0KSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpW3RoaXMuYXhpc1t0XS5vZmZzZXRBdHRyXSkgJiYgdm9pZCAwICE9PSBzID8gcyA6IDAsXHJcbiAgICAgICAgICAgICAgaCA9IHBhcnNlSW50KG51bGwgIT09IChsID0gbnVsbCA9PT0gKHIgPSB0aGlzLmVsU3R5bGVzKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByW3RoaXMuYXhpc1t0XS5zaXplQXR0cl0pICYmIHZvaWQgMCAhPT0gbCA/IGwgOiAnMHB4JywgMTApLFxyXG4gICAgICAgICAgICAgIHUgPSB0aGlzLmNvbnRlbnRXcmFwcGVyRWxbdGhpcy5heGlzW3RdLnNjcm9sbE9mZnNldEF0dHJdLFxyXG4gICAgICAgICAgICAgIGQgPSAoJ3knID09PSB0ID8gdGhpcy5tb3VzZVkgLSBjIDogdGhpcy5tb3VzZVggLSBjKSA8IDAgPyAtMSA6IDEsXHJcbiAgICAgICAgICAgICAgcCA9IC0xID09PSBkID8gdSAtIGggOiB1ICsgaCxcclxuICAgICAgICAgICAgICB2ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgby5jb250ZW50V3JhcHBlckVsICYmXHJcbiAgICAgICAgICAgICAgICAgICgtMSA9PT0gZFxyXG4gICAgICAgICAgICAgICAgICAgID8gdSA+IHAgJiYgKCh1IC09IDQwKSwgKG8uY29udGVudFdyYXBwZXJFbFtvLmF4aXNbdF0uc2Nyb2xsT2Zmc2V0QXR0cl0gPSB1KSwgYS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodikpXHJcbiAgICAgICAgICAgICAgICAgICAgOiB1IDwgcCAmJiAoKHUgKz0gNDApLCAoby5jb250ZW50V3JhcHBlckVsW28uYXhpc1t0XS5zY3JvbGxPZmZzZXRBdHRyXSA9IHUpLCBhLnJlcXVlc3RBbmltYXRpb25GcmFtZSh2KSkpO1xyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHYoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICAoZS5wcm90b3R5cGUuZ2V0Q29udGVudEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50RWw7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGUucHJvdG90eXBlLmdldFNjcm9sbEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50V3JhcHBlckVsO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIChlLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgZSA9IEgodGhpcy5lbCk7XHJcbiAgICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLm9uTW91c2VFbnRlciksXHJcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLm9uUG9pbnRlckV2ZW50LCAhMCksXHJcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSksXHJcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Nb3VzZUxlYXZlKSxcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50V3JhcHBlckVsICYmIHRoaXMuY29udGVudFdyYXBwZXJFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKSxcclxuICAgICAgICAgICAgZS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKSxcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyICYmIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCksXHJcbiAgICAgICAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgJiYgdGhpcy5yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCksXHJcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZU1vdmUuY2FuY2VsKCksXHJcbiAgICAgICAgICAgIHRoaXMub25XaW5kb3dSZXNpemUuY2FuY2VsKCksXHJcbiAgICAgICAgICAgIHRoaXMub25TdG9wU2Nyb2xsaW5nLmNhbmNlbCgpLFxyXG4gICAgICAgICAgICB0aGlzLm9uTW91c2VFbnRlcmVkLmNhbmNlbCgpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIChlLnByb3RvdHlwZS51bk1vdW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICAoZS5wcm90b3R5cGUuaXNXaXRoaW5Cb3VuZHMgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubW91c2VYID49IGUubGVmdCAmJiB0aGlzLm1vdXNlWCA8PSBlLmxlZnQgKyBlLndpZHRoICYmIHRoaXMubW91c2VZID49IGUudG9wICYmIHRoaXMubW91c2VZIDw9IGUudG9wICsgZS5oZWlnaHQ7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGUucHJvdG90eXBlLmZpbmRDaGlsZCA9IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICB2YXIgaSA9IGUubWF0Y2hlcyB8fCBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlLm1vek1hdGNoZXNTZWxlY3RvciB8fCBlLm1zTWF0Y2hlc1NlbGVjdG9yO1xyXG4gICAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlLmNoaWxkcmVuLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaS5jYWxsKGUsIHQpO1xyXG4gICAgICAgICAgfSlbMF07XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGUucnRsSGVscGVycyA9IG51bGwpLFxyXG4gICAgICAgIChlLmRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgICAgICAgZm9yY2VWaXNpYmxlOiAhMSxcclxuICAgICAgICAgIGNsaWNrT25UcmFjazogITAsXHJcbiAgICAgICAgICBzY3JvbGxiYXJNaW5TaXplOiAyNSxcclxuICAgICAgICAgIHNjcm9sbGJhck1heFNpemU6IDAsXHJcbiAgICAgICAgICBhcmlhTGFiZWw6ICdzY3JvbGxhYmxlIGNvbnRlbnQnLFxyXG4gICAgICAgICAgY2xhc3NOYW1lczoge1xyXG4gICAgICAgICAgICBjb250ZW50RWw6ICdzaW1wbGViYXItY29udGVudCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnRXcmFwcGVyOiAnc2ltcGxlYmFyLWNvbnRlbnQtd3JhcHBlcicsXHJcbiAgICAgICAgICAgIG9mZnNldDogJ3NpbXBsZWJhci1vZmZzZXQnLFxyXG4gICAgICAgICAgICBtYXNrOiAnc2ltcGxlYmFyLW1hc2snLFxyXG4gICAgICAgICAgICB3cmFwcGVyOiAnc2ltcGxlYmFyLXdyYXBwZXInLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ3NpbXBsZWJhci1wbGFjZWhvbGRlcicsXHJcbiAgICAgICAgICAgIHNjcm9sbGJhcjogJ3NpbXBsZWJhci1zY3JvbGxiYXInLFxyXG4gICAgICAgICAgICB0cmFjazogJ3NpbXBsZWJhci10cmFjaycsXHJcbiAgICAgICAgICAgIGhlaWdodEF1dG9PYnNlcnZlcldyYXBwZXJFbDogJ3NpbXBsZWJhci1oZWlnaHQtYXV0by1vYnNlcnZlci13cmFwcGVyJyxcclxuICAgICAgICAgICAgaGVpZ2h0QXV0b09ic2VydmVyRWw6ICdzaW1wbGViYXItaGVpZ2h0LWF1dG8tb2JzZXJ2ZXInLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiAnc2ltcGxlYmFyLXZpc2libGUnLFxyXG4gICAgICAgICAgICBob3Jpem9udGFsOiAnc2ltcGxlYmFyLWhvcml6b250YWwnLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbDogJ3NpbXBsZWJhci12ZXJ0aWNhbCcsXHJcbiAgICAgICAgICAgIGhvdmVyOiAnc2ltcGxlYmFyLWhvdmVyJyxcclxuICAgICAgICAgICAgZHJhZ2dpbmc6ICdzaW1wbGViYXItZHJhZ2dpbmcnLFxyXG4gICAgICAgICAgICBzY3JvbGxpbmc6ICdzaW1wbGViYXItc2Nyb2xsaW5nJyxcclxuICAgICAgICAgICAgc2Nyb2xsYWJsZTogJ3NpbXBsZWJhci1zY3JvbGxhYmxlJyxcclxuICAgICAgICAgICAgbW91c2VFbnRlcmVkOiAnc2ltcGxlYmFyLW1vdXNlLWVudGVyZWQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNjcm9sbGFibGVOb2RlOiBudWxsLFxyXG4gICAgICAgICAgY29udGVudE5vZGU6IG51bGwsXHJcbiAgICAgICAgICBhdXRvSGlkZTogITAsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGUuZ2V0T3B0aW9ucyA9IEIpLFxyXG4gICAgICAgIChlLmhlbHBlcnMgPSBWKSxcclxuICAgICAgICBlXHJcbiAgICAgICk7XHJcbiAgICB9KSgpLFxyXG4gICAgWSA9IFguaGVscGVycyxcclxuICAgIEYgPSBZLmdldE9wdGlvbnMsXHJcbiAgICBJID0gWS5hZGRDbGFzc2VzLFxyXG4gICAgJCA9IChmdW5jdGlvbiAodCkge1xyXG4gICAgICBmdW5jdGlvbiBpKCkge1xyXG4gICAgICAgIGZvciAodmFyIGUgPSBbXSwgcyA9IDA7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIGVbc10gPSBhcmd1bWVudHNbc107XHJcbiAgICAgICAgdmFyIHIgPSB0LmFwcGx5KHRoaXMsIGUpIHx8IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIGkuaW5zdGFuY2VzLnNldChlWzBdLCByKSwgcjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIChmdW5jdGlvbiAodCwgaSkge1xyXG4gICAgICAgICAgaWYgKCdmdW5jdGlvbicgIT0gdHlwZW9mIGkgJiYgbnVsbCAhPT0gaSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2xhc3MgZXh0ZW5kcyB2YWx1ZSAnICsgU3RyaW5nKGkpICsgJyBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsJyk7XHJcbiAgICAgICAgICBmdW5jdGlvbiBzKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGUodCwgaSksICh0LnByb3RvdHlwZSA9IG51bGwgPT09IGkgPyBPYmplY3QuY3JlYXRlKGkpIDogKChzLnByb3RvdHlwZSA9IGkucHJvdG90eXBlKSwgbmV3IHMoKSkpO1xyXG4gICAgICAgIH0pKGksIHQpLFxyXG4gICAgICAgIChpLmluaXRET01Mb2FkZWRFbGVtZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLmluaXRET01Mb2FkZWRFbGVtZW50cyksXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgdGhpcy5pbml0RE9NTG9hZGVkRWxlbWVudHMpLFxyXG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNpbXBsZWJhcl0nKSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAnaW5pdCcgPT09IGUuZ2V0QXR0cmlidXRlKCdkYXRhLXNpbXBsZWJhcicpIHx8IGkuaW5zdGFuY2VzLmhhcyhlKSB8fCBuZXcgaShlLCBGKGUuYXR0cmlidXRlcykpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KSxcclxuICAgICAgICAoaS5yZW1vdmVPYnNlcnZlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBlO1xyXG4gICAgICAgICAgbnVsbCA9PT0gKGUgPSBpLmdsb2JhbE9ic2VydmVyKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGkucHJvdG90eXBlLmluaXRET00gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgZSxcclxuICAgICAgICAgICAgdCxcclxuICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgcyA9IHRoaXM7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICFBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwodGhpcy5lbC5jaGlsZHJlbiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZS5jbGFzc0xpc3QuY29udGFpbnMocy5jbGFzc05hbWVzLndyYXBwZXIpO1xyXG4gICAgICAgICAgICB9KS5sZW5ndGhcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICAgIHRoaXMud3JhcHBlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRXcmFwcGVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFza0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZWhvbGRlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodEF1dG9PYnNlcnZlcldyYXBwZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHRBdXRvT2JzZXJ2ZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICAgICAgSSh0aGlzLndyYXBwZXJFbCwgdGhpcy5jbGFzc05hbWVzLndyYXBwZXIpLFxyXG4gICAgICAgICAgICAgICAgSSh0aGlzLmNvbnRlbnRXcmFwcGVyRWwsIHRoaXMuY2xhc3NOYW1lcy5jb250ZW50V3JhcHBlciksXHJcbiAgICAgICAgICAgICAgICBJKHRoaXMub2Zmc2V0RWwsIHRoaXMuY2xhc3NOYW1lcy5vZmZzZXQpLFxyXG4gICAgICAgICAgICAgICAgSSh0aGlzLm1hc2tFbCwgdGhpcy5jbGFzc05hbWVzLm1hc2spLFxyXG4gICAgICAgICAgICAgICAgSSh0aGlzLmNvbnRlbnRFbCwgdGhpcy5jbGFzc05hbWVzLmNvbnRlbnRFbCksXHJcbiAgICAgICAgICAgICAgICBJKHRoaXMucGxhY2Vob2xkZXJFbCwgdGhpcy5jbGFzc05hbWVzLnBsYWNlaG9sZGVyKSxcclxuICAgICAgICAgICAgICAgIEkodGhpcy5oZWlnaHRBdXRvT2JzZXJ2ZXJXcmFwcGVyRWwsIHRoaXMuY2xhc3NOYW1lcy5oZWlnaHRBdXRvT2JzZXJ2ZXJXcmFwcGVyRWwpLFxyXG4gICAgICAgICAgICAgICAgSSh0aGlzLmhlaWdodEF1dG9PYnNlcnZlckVsLCB0aGlzLmNsYXNzTmFtZXMuaGVpZ2h0QXV0b09ic2VydmVyRWwpO1xyXG4gICAgICAgICAgICAgIHRoaXMuZWwuZmlyc3RDaGlsZDtcclxuXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRFbC5hcHBlbmRDaGlsZCh0aGlzLmVsLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRXcmFwcGVyRWwuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50RWwpLFxyXG4gICAgICAgICAgICAgIHRoaXMub2Zmc2V0RWwuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50V3JhcHBlckVsKSxcclxuICAgICAgICAgICAgICB0aGlzLm1hc2tFbC5hcHBlbmRDaGlsZCh0aGlzLm9mZnNldEVsKSxcclxuICAgICAgICAgICAgICB0aGlzLmhlaWdodEF1dG9PYnNlcnZlcldyYXBwZXJFbC5hcHBlbmRDaGlsZCh0aGlzLmhlaWdodEF1dG9PYnNlcnZlckVsKSxcclxuICAgICAgICAgICAgICB0aGlzLndyYXBwZXJFbC5hcHBlbmRDaGlsZCh0aGlzLmhlaWdodEF1dG9PYnNlcnZlcldyYXBwZXJFbCksXHJcbiAgICAgICAgICAgICAgdGhpcy53cmFwcGVyRWwuYXBwZW5kQ2hpbGQodGhpcy5tYXNrRWwpLFxyXG4gICAgICAgICAgICAgIHRoaXMud3JhcHBlckVsLmFwcGVuZENoaWxkKHRoaXMucGxhY2Vob2xkZXJFbCksXHJcbiAgICAgICAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLndyYXBwZXJFbCksXHJcbiAgICAgICAgICAgICAgbnVsbCA9PT0gKGUgPSB0aGlzLmNvbnRlbnRXcmFwcGVyRWwpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpLFxyXG4gICAgICAgICAgICAgIG51bGwgPT09ICh0ID0gdGhpcy5jb250ZW50V3JhcHBlckVsKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAncmVnaW9uJyksXHJcbiAgICAgICAgICAgICAgbnVsbCA9PT0gKGkgPSB0aGlzLmNvbnRlbnRXcmFwcGVyRWwpIHx8IHZvaWQgMCA9PT0gaSB8fCBpLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRoaXMub3B0aW9ucy5hcmlhTGFiZWwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCF0aGlzLmF4aXMueC50cmFjay5lbCB8fCAhdGhpcy5heGlzLnkudHJhY2suZWwpIHtcclxuICAgICAgICAgICAgdmFyIHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgICBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIEkociwgdGhpcy5jbGFzc05hbWVzLnRyYWNrKSxcclxuICAgICAgICAgICAgICBJKGwsIHRoaXMuY2xhc3NOYW1lcy5zY3JvbGxiYXIpLFxyXG4gICAgICAgICAgICAgIHIuYXBwZW5kQ2hpbGQobCksXHJcbiAgICAgICAgICAgICAgKHRoaXMuYXhpcy54LnRyYWNrLmVsID0gci5jbG9uZU5vZGUoITApKSxcclxuICAgICAgICAgICAgICBJKHRoaXMuYXhpcy54LnRyYWNrLmVsLCB0aGlzLmNsYXNzTmFtZXMuaG9yaXpvbnRhbCksXHJcbiAgICAgICAgICAgICAgKHRoaXMuYXhpcy55LnRyYWNrLmVsID0gci5jbG9uZU5vZGUoITApKSxcclxuICAgICAgICAgICAgICBJKHRoaXMuYXhpcy55LnRyYWNrLmVsLCB0aGlzLmNsYXNzTmFtZXMudmVydGljYWwpLFxyXG4gICAgICAgICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5heGlzLngudHJhY2suZWwpLFxyXG4gICAgICAgICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5heGlzLnkudHJhY2suZWwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgWC5wcm90b3R5cGUuaW5pdERPTS5jYWxsKHRoaXMpLCB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnZGF0YS1zaW1wbGViYXInLCAnaW5pdCcpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIChpLnByb3RvdHlwZS51bk1vdW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgWC5wcm90b3R5cGUudW5Nb3VudC5jYWxsKHRoaXMpLCBpLmluc3RhbmNlcy5kZWxldGUodGhpcy5lbCk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGkuaW5pdEh0bWxBcGkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAodGhpcy5pbml0RE9NTG9hZGVkRWxlbWVudHMgPSB0aGlzLmluaXRET01Mb2FkZWRFbGVtZW50cy5iaW5kKHRoaXMpKSxcclxuICAgICAgICAgICAgJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgJiYgKCh0aGlzLmdsb2JhbE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoaS5oYW5kbGVNdXRhdGlvbnMpKSwgdGhpcy5nbG9iYWxPYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LCB7IGNoaWxkTGlzdDogITAsIHN1YnRyZWU6ICEwIH0pKSxcclxuICAgICAgICAgICAgJ2NvbXBsZXRlJyA9PT0gZG9jdW1lbnQucmVhZHlTdGF0ZSB8fCAoJ2xvYWRpbmcnICE9PSBkb2N1bWVudC5yZWFkeVN0YXRlICYmICFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwpXHJcbiAgICAgICAgICAgICAgPyB3aW5kb3cuc2V0VGltZW91dCh0aGlzLmluaXRET01Mb2FkZWRFbGVtZW50cylcclxuICAgICAgICAgICAgICA6IChkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdGhpcy5pbml0RE9NTG9hZGVkRWxlbWVudHMpLCB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRoaXMuaW5pdERPTUxvYWRlZEVsZW1lbnRzKSk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGkuaGFuZGxlTXV0YXRpb25zID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLmFkZGVkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgIDEgPT09IGUubm9kZVR5cGUgJiZcclxuICAgICAgICAgICAgICAgIChlLmhhc0F0dHJpYnV0ZSgnZGF0YS1zaW1wbGViYXInKVxyXG4gICAgICAgICAgICAgICAgICA/ICFpLmluc3RhbmNlcy5oYXMoZSkgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKGUpICYmIG5ldyBpKGUsIEYoZS5hdHRyaWJ1dGVzKSlcclxuICAgICAgICAgICAgICAgICAgOiBlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNpbXBsZWJhcl0nKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAnaW5pdCcgIT09IGUuZ2V0QXR0cmlidXRlKCdkYXRhLXNpbXBsZWJhcicpICYmICFpLmluc3RhbmNlcy5oYXMoZSkgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKGUpICYmIG5ldyBpKGUsIEYoZS5hdHRyaWJ1dGVzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICBlLnJlbW92ZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAxID09PSBlLm5vZGVUeXBlICYmXHJcbiAgICAgICAgICAgICAgICAgICgnaW5pdCcgPT09IGUuZ2V0QXR0cmlidXRlKCdkYXRhLXNpbXBsZWJhcicpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBpLmluc3RhbmNlcy5oYXMoZSkgJiYgIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhlKSAmJiBpLmluc3RhbmNlcy5nZXQoZSkudW5Nb3VudCgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2ltcGxlYmFyPVwiaW5pdFwiXScpLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpLmluc3RhbmNlcy5oYXMoZSkgJiYgIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhlKSAmJiBpLmluc3RhbmNlcy5nZXQoZSkudW5Nb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGkuaW5zdGFuY2VzID0gbmV3IFdlYWtNYXAoKSksXHJcbiAgICAgICAgaVxyXG4gICAgICApO1xyXG4gICAgfSkoWCk7XHJcbiAgcmV0dXJuIHQgJiYgJC5pbml0SHRtbEFwaSgpLCAkO1xyXG59KSgpO1xyXG4iXSwiZmlsZSI6InNjcm9sbGJhci5qcyJ9