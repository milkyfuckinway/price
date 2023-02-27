const SimpleBar = (function () {
  let e = function (t, i) {
    return (
      (e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (const i in t) {
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
        }),
      e(t, i)
    );
  };
  const t = !('undefined' === typeof window || !window.document || !window.document.createElement),
    i = 'object' === typeof global && global && global.Object === Object && global,
    s = 'object' === typeof self && self && self.Object === Object && self,
    r = i || s || Function('return this')(),
    l = r.Symbol,
    o = Object.prototype,
    n = o.hasOwnProperty,
    a = o.toString,
    c = l ? l.toStringTag : void 0;
  const h = Object.prototype.toString;
  const u = l ? l.toStringTag : void 0;
  function d(e) {
    return null == e
      ? void 0 === e
        ? '[object Undefined]'
        : '[object Null]'
      : u && u in Object(e)
      ? (function (e) {
          const t = n.call(e, c),
            i = e[c];
          try {
            e[c] = void 0;
            var s = !0;
          } catch (e) {}
          const r = a.call(e);
          return s && (t ? (e[c] = i) : delete e[c]), r;
        })(e)
      : (function (e) {
          return h.call(e);
        })(e);
  }
  const p = /\s/;
  const v = /^\s+/;
  function f(e) {
    return e
      ? e
          .slice(
            0,
            (function (e) {
              for (var t = e.length; t-- && p.test(e.charAt(t)); ) {}
              return t;
            })(e) + 1
          )
          .replace(v, '')
      : e;
  }
  function m(e) {
    const t = typeof e;
    return null != e && ('object' == t || 'function' == t);
  }
  const b = /^[-+]0x[0-9a-f]+$/i,
    g = /^0b[01]+$/i,
    x = /^0o[0-7]+$/i,
    y = parseInt;
  function E(e) {
    if ('number' === typeof e) {
      return e;
    }
    if (
      (function (e) {
        return (
          'symbol' === typeof e ||
          ((function (e) {
            return null != e && 'object' === typeof e;
          })(e) &&
            '[object Symbol]' == d(e))
        );
      })(e)
    ) {
      return NaN;
    }
    if (m(e)) {
      const t = 'function' === typeof e.valueOf ? e.valueOf() : e;
      e = m(t) ? `${t}` : t;
    }
    if ('string' !== typeof e) {
      return 0 === e ? e : +e;
    }
    e = f(e);
    const i = g.test(e);
    return i || x.test(e) ? y(e.slice(2), i ? 2 : 8) : b.test(e) ? NaN : +e;
  }
  const O = function () {
      return r.Date.now();
    },
    w = Math.max,
    S = Math.min;
  function A(e, t, i) {
    let s,
      r,
      l,
      o,
      n,
      a,
      c = 0,
      h = !1,
      u = !1,
      d = !0;
    if ('function' !== typeof e) {
      throw new TypeError('Expected a function');
    }
    function p(t) {
      const i = s,
        l = r;
      return (s = r = void 0), (c = t), (o = e.apply(l, i));
    }
    function v(e) {
      return (c = e), (n = setTimeout(b, t)), h ? p(e) : o;
    }
    function f(e) {
      const i = e - a;
      return void 0 === a || i >= t || i < 0 || (u && e - c >= l);
    }
    function b() {
      const e = O();
      if (f(e)) {
        return g(e);
      }
      n = setTimeout(
        b,
        (function (e) {
          const i = t - (e - a);
          return u ? S(i, l - (e - c)) : i;
        })(e)
      );
    }
    function g(e) {
      return (n = void 0), d && s ? p(e) : ((s = r = void 0), o);
    }
    function x() {
      const e = O(),
        i = f(e);
      if (((s = arguments), (r = this), (a = e), i)) {
        if (void 0 === n) {
          return v(a);
        }
        if (u) {
          return clearTimeout(n), (n = setTimeout(b, t)), p(a);
        }
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
  let k = function () {
      return (
        (k =
          Object.assign ||
          function (e) {
            for (var t, i = 1, s = arguments.length; i < s; i++) {
              for (const r in (t = arguments[i])) {
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
            }
            return e;
          }),
        k.apply(this, arguments)
      );
    },
    W = null,
    M = null;
  function N() {
    if (null === W) {
      if ('undefined' === typeof document) {
        return (W = 0);
      }
      const e = document.body,
        t = document.createElement('div');
      t.classList.add('simplebar-hide-scrollbar'), e.appendChild(t);
      const i = t.getBoundingClientRect().right;
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
    window.addEventListener('resize', () => {
      M !== window.devicePixelRatio && ((M = window.devicePixelRatio), (W = null));
    });
  const C = function (e) {
    return Array.prototype.reduce.call(
      e,
      (e, t) => {
        const i = t.name.match(/data-simplebar-(.+)/);
        if (i) {
          const s = i[1].replace(/\W+(.)/g, (e, t) => t.toUpperCase());
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
    let i;
    e && (i = e.classList).add.apply(i, t.split(' '));
  }
  function R(e, t) {
    e &&
      t.split(' ').forEach((t) => {
        e.classList.remove(t);
      });
  }
  function D(e) {
    return '.'.concat(e.split(' ').join('.'));
  }
  const V = Object.freeze({ __proto__: null, addClasses: T, classNamesToQuery: D, getElementDocument: z, getElementWindow: L, getOptions: C, removeClasses: R }),
    H = L,
    j = z,
    B = C,
    _ = T,
    q = R,
    P = D,
    X = (function () {
      function e(t, i) {
        void 0 === i && (i = {});
        const s = this;
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
            const e = H(s.el);
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
            let t, i;
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
            let i, r, l, o, n, a, c, h, u, d, p;
            if (s.draggedAxis && s.contentWrapperEl) {
              const v = s.axis[s.draggedAxis].track,
                f = null !== (r = null === (i = v.rect) || void 0 === i ? void 0 : i[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== r ? r : 0,
                m = s.axis[s.draggedAxis].scrollbar,
                b = null !== (o = null === (l = s.contentWrapperEl) || void 0 === l ? void 0 : l[s.axis[s.draggedAxis].scrollSizeAttr]) && void 0 !== o ? o : 0,
                g = parseInt(null !== (a = null === (n = s.elStyles) || void 0 === n ? void 0 : n[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== a ? a : '0px', 10);
              t.preventDefault(), t.stopPropagation();
              let x =
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
            const t = j(s.el),
              i = H(s.el);
            e.preventDefault(),
              e.stopPropagation(),
              q(s.el, s.classNames.dragging),
              t.removeEventListener('mousemove', s.drag, !0),
              t.removeEventListener('mouseup', s.onEndDrag, !0),
              (s.removePreventClickId = i.setTimeout(() => {
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
          'object' !== typeof this.el || !this.el.nodeName)
        ) {
          throw new Error('Argument passed to SimpleBar must be an HTML element instead of '.concat(this.el));
        }
        (this.onMouseMove = (function (e, t, i) {
          let s = !0,
            r = !0;
          if ('function' !== typeof e) {
            throw new TypeError('Expected a function');
          }
          return m(i) && ((s = 'leading' in i ? !!i.leading : s), (r = 'trailing' in i ? !!i.trailing : r)), A(e, t, { leading: s, maxWait: t, trailing: r });
        })(this._onMouseMove, 64)),
          (this.onWindowResize = A(this._onWindowResize, 64, { leading: !0 })),
          (this.onStopScrolling = A(this._onStopScrolling, this.stopScrollDelay)),
          (this.onMouseEntered = A(this._onMouseEntered, this.stopScrollDelay)),
          this.init();
      }
      return (
        (e.getRtlHelpers = function () {
          if (e.rtlHelpers) {
            return e.rtlHelpers;
          }
          const t = document.createElement('div');
          t.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
          const i = t.firstElementChild,
            s = null == i ? void 0 : i.firstElementChild;
          if (!s) {
            return null;
          }
          document.body.appendChild(i), (i.scrollLeft = 0);
          const r = e.getOffset(i),
            l = e.getOffset(s);
          i.scrollLeft = -999;
          const o = e.getOffset(s);
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
          const t = e.getBoundingClientRect(),
            i = j(e),
            s = H(e);
          return { top: t.top + (s.pageYOffset || i.documentElement.scrollTop), left: t.left + (s.pageXOffset || i.documentElement.scrollLeft) };
        }),
        (e.prototype.init = function () {
          t && (this.initDOM(), (this.rtlHelpers = e.getRtlHelpers()), (this.scrollbarWidth = this.getScrollbarWidth()), this.recalculate(), this.initListeners());
        }),
        (e.prototype.initDOM = function () {
          let e, t;
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
          let e,
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
              let s = !1,
                r = i.ResizeObserver || ResizeObserver;
              (this.resizeObserver = new r(() => {
                s &&
                  i.requestAnimationFrame(() => {
                    t.recalculate();
                  });
              })),
                this.resizeObserver.observe(this.el),
                this.resizeObserver.observe(this.contentEl),
                i.requestAnimationFrame(() => {
                  s = !0;
                });
            }
            (this.mutationObserver = new i.MutationObserver(() => {
              i.requestAnimationFrame(() => {
                t.recalculate();
              });
            })),
              this.mutationObserver.observe(this.contentEl, { childList: !0, subtree: !0, characterData: !0 });
          }
        }),
        (e.prototype.recalculate = function () {
          if (this.heightAutoObserverEl && this.contentEl && this.contentWrapperEl && this.wrapperEl && this.placeholderEl) {
            const e = H(this.el);
            (this.elStyles = e.getComputedStyle(this.el)), (this.isRtl = 'rtl' === this.elStyles.direction);
            const t = this.contentEl.offsetWidth,
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
            const n = this.contentEl.scrollHeight,
              a = this.contentEl.scrollWidth;
            (this.contentWrapperEl.style.height = i ? 'auto' : '100%'), (this.placeholderEl.style.width = s ? ''.concat(t || a, 'px') : 'auto'), (this.placeholderEl.style.height = ''.concat(n, 'px'));
            const c = this.contentWrapperEl.offsetHeight;
            (this.axis.x.isOverflowing = 0 !== t && a > t),
              (this.axis.y.isOverflowing = n > c),
              (this.axis.x.isOverflowing = 'hidden' !== l && this.axis.x.isOverflowing),
              (this.axis.y.isOverflowing = 'hidden' !== o && this.axis.y.isOverflowing),
              (this.axis.x.forceVisible = 'x' === this.options.forceVisible || !0 === this.options.forceVisible),
              (this.axis.y.forceVisible = 'y' === this.options.forceVisible || !0 === this.options.forceVisible),
              this.hideNativeScrollbar();
            const h = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
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
          let t, i;
          if ((void 0 === e && (e = 'y'), !this.axis[e].isOverflowing || !this.contentEl)) {
            return 0;
          }
          let s,
            r = this.contentEl[this.axis[e].scrollSizeAttr],
            l = null !== (i = null === (t = this.axis[e].track.el) || void 0 === t ? void 0 : t[this.axis[e].offsetSizeAttr]) && void 0 !== i ? i : 0,
            o = l / r;
          return (s = Math.max(~~(o * l), this.options.scrollbarMinSize)), this.options.scrollbarMaxSize && (s = Math.min(s, this.options.scrollbarMaxSize)), s;
        }),
        (e.prototype.positionScrollbar = function (t) {
          let i, s, r;
          void 0 === t && (t = 'y');
          const l = this.axis[t].scrollbar;
          if (this.axis[t].isOverflowing && this.contentWrapperEl && l.el && this.elStyles) {
            let o = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
              n = (null === (i = this.axis[t].track.el) || void 0 === i ? void 0 : i[this.axis[t].offsetSizeAttr]) || 0,
              a = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
              c = this.contentWrapperEl[this.axis[t].scrollOffsetAttr];
            (c = 'x' === t && this.isRtl && (null === (s = e.getRtlHelpers()) || void 0 === s ? void 0 : s.isScrollOriginAtZero) ? -c : c),
              'x' === t && this.isRtl && (c = (null === (r = e.getRtlHelpers()) || void 0 === r ? void 0 : r.isScrollingToNegative) ? c : -c);
            let h = c / (o - a),
              u = ~~((n - l.size) * h);
            (u = 'x' === t && this.isRtl ? -u + (n - l.size) : u), (l.el.style.transform = 'x' === t ? 'translate3d('.concat(u, 'px, 0, 0)') : 'translate3d(0, '.concat(u, 'px, 0)'));
          }
        }),
        (e.prototype.toggleTrackVisibility = function (e) {
          void 0 === e && (e = 'y');
          const t = this.axis[e].track.el,
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
          const t = this.axis[e];
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
          let i;
          void 0 === t && (t = 'y');
          const s = j(this.el),
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
          let i,
            s,
            r,
            l,
            o = this;
          void 0 === t && (t = 'y');
          const n = this.axis[t];
          if (this.options.clickOnTrack && n.scrollbar.el && this.contentWrapperEl) {
            e.preventDefault();
            const a = H(this.el);
            this.axis[t].scrollbar.rect = n.scrollbar.el.getBoundingClientRect();
            let c = null !== (s = null === (i = this.axis[t].scrollbar.rect) || void 0 === i ? void 0 : i[this.axis[t].offsetAttr]) && void 0 !== s ? s : 0,
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
          const e = H(this.el);
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
          const i = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector;
          return Array.prototype.filter.call(e.children, (e) => i.call(e, t))[0];
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
        for (var e = [], s = 0; s < arguments.length; s++) {
          e[s] = arguments[s];
        }
        const r = t.apply(this, e) || this;
        return i.instances.set(e[0], r), r;
      }
      return (
        (function (t, i) {
          if ('function' !== typeof i && null !== i) {
            throw new TypeError(`Class extends value ${String(i)} is not a constructor or null`);
          }
          function s() {
            this.constructor = t;
          }
          e(t, i), (t.prototype = null === i ? Object.create(i) : ((s.prototype = i.prototype), new s()));
        })(i, t),
        (i.initDOMLoadedElements = function () {
          document.removeEventListener('DOMContentLoaded', this.initDOMLoadedElements),
            window.removeEventListener('load', this.initDOMLoadedElements),
            Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]'), (e) => {
              'init' === e.getAttribute('data-simplebar') || i.instances.has(e) || new i(e, F(e.attributes));
            });
        }),
        (i.removeObserver = function () {
          let e;
          null === (e = i.globalObserver) || void 0 === e || e.disconnect();
        }),
        (i.prototype.initDOM = function () {
          let e,
            t,
            i,
            s = this;
          if (!Array.prototype.filter.call(this.el.children, (e) => e.classList.contains(s.classNames.wrapper)).length) {
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

            ) {
              this.contentEl.appendChild(this.el.firstChild);
            }
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
            const r = document.createElement('div'),
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
            'undefined' !== typeof MutationObserver && ((this.globalObserver = new MutationObserver(i.handleMutations)), this.globalObserver.observe(document, { childList: !0, subtree: !0 })),
            'complete' === document.readyState || ('loading' !== document.readyState && !document.documentElement.doScroll)
              ? window.setTimeout(this.initDOMLoadedElements)
              : (document.addEventListener('DOMContentLoaded', this.initDOMLoadedElements), window.addEventListener('load', this.initDOMLoadedElements));
        }),
        (i.handleMutations = function (e) {
          e.forEach((e) => {
            e.addedNodes.forEach((e) => {
              1 === e.nodeType &&
                (e.hasAttribute('data-simplebar')
                  ? !i.instances.has(e) && document.documentElement.contains(e) && new i(e, F(e.attributes))
                  : e.querySelectorAll('[data-simplebar]').forEach((e) => {
                      'init' !== e.getAttribute('data-simplebar') && !i.instances.has(e) && document.documentElement.contains(e) && new i(e, F(e.attributes));
                    }));
            }),
              e.removedNodes.forEach((e) => {
                1 === e.nodeType &&
                  ('init' === e.getAttribute('data-simplebar')
                    ? i.instances.has(e) && !document.documentElement.contains(e) && i.instances.get(e).unMount()
                    : Array.prototype.forEach.call(e.querySelectorAll('[data-simplebar="init"]'), (e) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGVzL3Njcm9sbGJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTaW1wbGVCYXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGxldCBlID0gZnVuY3Rpb24gKHQsIGkpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIChlID1cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJlxyXG4gICAgICAgICAgZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgZS5fX3Byb3RvX18gPSB0O1xyXG4gICAgICAgICAgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBpIGluIHQpIHtcclxuICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIGkpICYmIChlW2ldID0gdFtpXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgIGUodCwgaSlcclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCB0ID0gISgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIHdpbmRvdyB8fCAhd2luZG93LmRvY3VtZW50IHx8ICF3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCksXHJcbiAgICBpID0gJ29iamVjdCcgPT09IHR5cGVvZiBnbG9iYWwgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWwsXHJcbiAgICBzID0gJ29iamVjdCcgPT09IHR5cGVvZiBzZWxmICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmLFxyXG4gICAgciA9IGkgfHwgcyB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpLFxyXG4gICAgbCA9IHIuU3ltYm9sLFxyXG4gICAgbyA9IE9iamVjdC5wcm90b3R5cGUsXHJcbiAgICBuID0gby5oYXNPd25Qcm9wZXJ0eSxcclxuICAgIGEgPSBvLnRvU3RyaW5nLFxyXG4gICAgYyA9IGwgPyBsLnRvU3RyaW5nVGFnIDogdm9pZCAwO1xyXG4gIGNvbnN0IGggPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xyXG4gIGNvbnN0IHUgPSBsID8gbC50b1N0cmluZ1RhZyA6IHZvaWQgMDtcclxuICBmdW5jdGlvbiBkKGUpIHtcclxuICAgIHJldHVybiBudWxsID09IGVcclxuICAgICAgPyB2b2lkIDAgPT09IGVcclxuICAgICAgICA/ICdbb2JqZWN0IFVuZGVmaW5lZF0nXHJcbiAgICAgICAgOiAnW29iamVjdCBOdWxsXSdcclxuICAgICAgOiB1ICYmIHUgaW4gT2JqZWN0KGUpXHJcbiAgICAgID8gKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBjb25zdCB0ID0gbi5jYWxsKGUsIGMpLFxyXG4gICAgICAgICAgICBpID0gZVtjXTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGVbY10gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHZhciBzID0gITA7XHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgICAgICAgY29uc3QgciA9IGEuY2FsbChlKTtcclxuICAgICAgICAgIHJldHVybiBzICYmICh0ID8gKGVbY10gPSBpKSA6IGRlbGV0ZSBlW2NdKSwgcjtcclxuICAgICAgICB9KShlKVxyXG4gICAgICA6IChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgcmV0dXJuIGguY2FsbChlKTtcclxuICAgICAgICB9KShlKTtcclxuICB9XHJcbiAgY29uc3QgcCA9IC9cXHMvO1xyXG4gIGNvbnN0IHYgPSAvXlxccysvO1xyXG4gIGZ1bmN0aW9uIGYoZSkge1xyXG4gICAgcmV0dXJuIGVcclxuICAgICAgPyBlXHJcbiAgICAgICAgICAuc2xpY2UoXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIHQgPSBlLmxlbmd0aDsgdC0tICYmIHAudGVzdChlLmNoYXJBdCh0KSk7ICkge31cclxuICAgICAgICAgICAgICByZXR1cm4gdDtcclxuICAgICAgICAgICAgfSkoZSkgKyAxXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAucmVwbGFjZSh2LCAnJylcclxuICAgICAgOiBlO1xyXG4gIH1cclxuICBmdW5jdGlvbiBtKGUpIHtcclxuICAgIGNvbnN0IHQgPSB0eXBlb2YgZTtcclxuICAgIHJldHVybiBudWxsICE9IGUgJiYgKCdvYmplY3QnID09IHQgfHwgJ2Z1bmN0aW9uJyA9PSB0KTtcclxuICB9XHJcbiAgY29uc3QgYiA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pLFxyXG4gICAgZyA9IC9eMGJbMDFdKyQvaSxcclxuICAgIHggPSAvXjBvWzAtN10rJC9pLFxyXG4gICAgeSA9IHBhcnNlSW50O1xyXG4gIGZ1bmN0aW9uIEUoZSkge1xyXG4gICAgaWYgKCdudW1iZXInID09PSB0eXBlb2YgZSkge1xyXG4gICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICdzeW1ib2wnID09PSB0eXBlb2YgZSB8fFxyXG4gICAgICAgICAgKChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbCAhPSBlICYmICdvYmplY3QnID09PSB0eXBlb2YgZTtcclxuICAgICAgICAgIH0pKGUpICYmXHJcbiAgICAgICAgICAgICdbb2JqZWN0IFN5bWJvbF0nID09IGQoZSkpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSkoZSlcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gTmFOO1xyXG4gICAgfVxyXG4gICAgaWYgKG0oZSkpIHtcclxuICAgICAgY29uc3QgdCA9ICdmdW5jdGlvbicgPT09IHR5cGVvZiBlLnZhbHVlT2YgPyBlLnZhbHVlT2YoKSA6IGU7XHJcbiAgICAgIGUgPSBtKHQpID8gYCR7dH1gIDogdDtcclxuICAgIH1cclxuICAgIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIGUpIHtcclxuICAgICAgcmV0dXJuIDAgPT09IGUgPyBlIDogK2U7XHJcbiAgICB9XHJcbiAgICBlID0gZihlKTtcclxuICAgIGNvbnN0IGkgPSBnLnRlc3QoZSk7XHJcbiAgICByZXR1cm4gaSB8fCB4LnRlc3QoZSkgPyB5KGUuc2xpY2UoMiksIGkgPyAyIDogOCkgOiBiLnRlc3QoZSkgPyBOYU4gOiArZTtcclxuICB9XHJcbiAgY29uc3QgTyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHIuRGF0ZS5ub3coKTtcclxuICAgIH0sXHJcbiAgICB3ID0gTWF0aC5tYXgsXHJcbiAgICBTID0gTWF0aC5taW47XHJcbiAgZnVuY3Rpb24gQShlLCB0LCBpKSB7XHJcbiAgICBsZXQgcyxcclxuICAgICAgcixcclxuICAgICAgbCxcclxuICAgICAgbyxcclxuICAgICAgbixcclxuICAgICAgYSxcclxuICAgICAgYyA9IDAsXHJcbiAgICAgIGggPSAhMSxcclxuICAgICAgdSA9ICExLFxyXG4gICAgICBkID0gITA7XHJcbiAgICBpZiAoJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGUpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBmdW5jdGlvbicpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcCh0KSB7XHJcbiAgICAgIGNvbnN0IGkgPSBzLFxyXG4gICAgICAgIGwgPSByO1xyXG4gICAgICByZXR1cm4gKHMgPSByID0gdm9pZCAwKSwgKGMgPSB0KSwgKG8gPSBlLmFwcGx5KGwsIGkpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHYoZSkge1xyXG4gICAgICByZXR1cm4gKGMgPSBlKSwgKG4gPSBzZXRUaW1lb3V0KGIsIHQpKSwgaCA/IHAoZSkgOiBvO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZihlKSB7XHJcbiAgICAgIGNvbnN0IGkgPSBlIC0gYTtcclxuICAgICAgcmV0dXJuIHZvaWQgMCA9PT0gYSB8fCBpID49IHQgfHwgaSA8IDAgfHwgKHUgJiYgZSAtIGMgPj0gbCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBiKCkge1xyXG4gICAgICBjb25zdCBlID0gTygpO1xyXG4gICAgICBpZiAoZihlKSkge1xyXG4gICAgICAgIHJldHVybiBnKGUpO1xyXG4gICAgICB9XHJcbiAgICAgIG4gPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgIGIsXHJcbiAgICAgICAgKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBjb25zdCBpID0gdCAtIChlIC0gYSk7XHJcbiAgICAgICAgICByZXR1cm4gdSA/IFMoaSwgbCAtIChlIC0gYykpIDogaTtcclxuICAgICAgICB9KShlKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZyhlKSB7XHJcbiAgICAgIHJldHVybiAobiA9IHZvaWQgMCksIGQgJiYgcyA/IHAoZSkgOiAoKHMgPSByID0gdm9pZCAwKSwgbyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB4KCkge1xyXG4gICAgICBjb25zdCBlID0gTygpLFxyXG4gICAgICAgIGkgPSBmKGUpO1xyXG4gICAgICBpZiAoKChzID0gYXJndW1lbnRzKSwgKHIgPSB0aGlzKSwgKGEgPSBlKSwgaSkpIHtcclxuICAgICAgICBpZiAodm9pZCAwID09PSBuKSB7XHJcbiAgICAgICAgICByZXR1cm4gdihhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHUpIHtcclxuICAgICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobiksIChuID0gc2V0VGltZW91dChiLCB0KSksIHAoYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB2b2lkIDAgPT09IG4gJiYgKG4gPSBzZXRUaW1lb3V0KGIsIHQpKSwgbztcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICh0ID0gRSh0KSB8fCAwKSxcclxuICAgICAgbShpKSAmJiAoKGggPSAhIWkubGVhZGluZyksIChsID0gKHUgPSAnbWF4V2FpdCcgaW4gaSkgPyB3KEUoaS5tYXhXYWl0KSB8fCAwLCB0KSA6IGwpLCAoZCA9ICd0cmFpbGluZycgaW4gaSA/ICEhaS50cmFpbGluZyA6IGQpKSxcclxuICAgICAgKHguY2FuY2VsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZvaWQgMCAhPT0gbiAmJiBjbGVhclRpbWVvdXQobiksIChjID0gMCksIChzID0gYSA9IHIgPSBuID0gdm9pZCAwKTtcclxuICAgICAgfSksXHJcbiAgICAgICh4LmZsdXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB2b2lkIDAgPT09IG4gPyBvIDogZyhPKCkpO1xyXG4gICAgICB9KSxcclxuICAgICAgeFxyXG4gICAgKTtcclxuICB9XHJcbiAgbGV0IGsgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgKGsgPVxyXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbiB8fFxyXG4gICAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgdCwgaSA9IDEsIHMgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgZm9yIChjb25zdCByIGluICh0ID0gYXJndW1lbnRzW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIHIpICYmIChlW3JdID0gdFtyXSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBlO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgay5hcHBseSh0aGlzLCBhcmd1bWVudHMpXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgVyA9IG51bGwsXHJcbiAgICBNID0gbnVsbDtcclxuICBmdW5jdGlvbiBOKCkge1xyXG4gICAgaWYgKG51bGwgPT09IFcpIHtcclxuICAgICAgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2YgZG9jdW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gKFcgPSAwKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBlID0gZG9jdW1lbnQuYm9keSxcclxuICAgICAgICB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHQuY2xhc3NMaXN0LmFkZCgnc2ltcGxlYmFyLWhpZGUtc2Nyb2xsYmFyJyksIGUuYXBwZW5kQ2hpbGQodCk7XHJcbiAgICAgIGNvbnN0IGkgPSB0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnJpZ2h0O1xyXG4gICAgICBlLnJlbW92ZUNoaWxkKHQpLCAoVyA9IGkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFc7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIEwoZSkge1xyXG4gICAgcmV0dXJuIGUgJiYgZS5vd25lckRvY3VtZW50ICYmIGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyA/IGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyA6IHdpbmRvdztcclxuICB9XHJcbiAgZnVuY3Rpb24geihlKSB7XHJcbiAgICByZXR1cm4gZSAmJiBlLm93bmVyRG9jdW1lbnQgPyBlLm93bmVyRG9jdW1lbnQgOiBkb2N1bWVudDtcclxuICB9XHJcbiAgdCAmJlxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgTSAhPT0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gJiYgKChNID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8pLCAoVyA9IG51bGwpKTtcclxuICAgIH0pO1xyXG4gIGNvbnN0IEMgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UuY2FsbChcclxuICAgICAgZSxcclxuICAgICAgKGUsIHQpID0+IHtcclxuICAgICAgICBjb25zdCBpID0gdC5uYW1lLm1hdGNoKC9kYXRhLXNpbXBsZWJhci0oLispLyk7XHJcbiAgICAgICAgaWYgKGkpIHtcclxuICAgICAgICAgIGNvbnN0IHMgPSBpWzFdLnJlcGxhY2UoL1xcVysoLikvZywgKGUsIHQpID0+IHQudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICBzd2l0Y2ggKHQudmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAndHJ1ZSc6XHJcbiAgICAgICAgICAgICAgZVtzXSA9ICEwO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdmYWxzZSc6XHJcbiAgICAgICAgICAgICAgZVtzXSA9ICExO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHZvaWQgMDpcclxuICAgICAgICAgICAgICBlW3NdID0gITA7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgZVtzXSA9IHQudmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgICB9LFxyXG4gICAgICB7fVxyXG4gICAgKTtcclxuICB9O1xyXG4gIGZ1bmN0aW9uIFQoZSwgdCkge1xyXG4gICAgbGV0IGk7XHJcbiAgICBlICYmIChpID0gZS5jbGFzc0xpc3QpLmFkZC5hcHBseShpLCB0LnNwbGl0KCcgJykpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBSKGUsIHQpIHtcclxuICAgIGUgJiZcclxuICAgICAgdC5zcGxpdCgnICcpLmZvckVhY2goKHQpID0+IHtcclxuICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUodCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBmdW5jdGlvbiBEKGUpIHtcclxuICAgIHJldHVybiAnLicuY29uY2F0KGUuc3BsaXQoJyAnKS5qb2luKCcuJykpO1xyXG4gIH1cclxuICBjb25zdCBWID0gT2JqZWN0LmZyZWV6ZSh7IF9fcHJvdG9fXzogbnVsbCwgYWRkQ2xhc3NlczogVCwgY2xhc3NOYW1lc1RvUXVlcnk6IEQsIGdldEVsZW1lbnREb2N1bWVudDogeiwgZ2V0RWxlbWVudFdpbmRvdzogTCwgZ2V0T3B0aW9uczogQywgcmVtb3ZlQ2xhc3NlczogUiB9KSxcclxuICAgIEggPSBMLFxyXG4gICAgaiA9IHosXHJcbiAgICBCID0gQyxcclxuICAgIF8gPSBULFxyXG4gICAgcSA9IFIsXHJcbiAgICBQID0gRCxcclxuICAgIFggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICBmdW5jdGlvbiBlKHQsIGkpIHtcclxuICAgICAgICB2b2lkIDAgPT09IGkgJiYgKGkgPSB7fSk7XHJcbiAgICAgICAgY29uc3QgcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgKCh0aGlzLnJlbW92ZVByZXZlbnRDbGlja0lkID0gbnVsbCksXHJcbiAgICAgICAgICAodGhpcy5taW5TY3JvbGxiYXJXaWR0aCA9IDIwKSxcclxuICAgICAgICAgICh0aGlzLnN0b3BTY3JvbGxEZWxheSA9IDE3NSksXHJcbiAgICAgICAgICAodGhpcy5pc1Njcm9sbGluZyA9ICExKSxcclxuICAgICAgICAgICh0aGlzLmlzTW91c2VFbnRlcmluZyA9ICExKSxcclxuICAgICAgICAgICh0aGlzLnNjcm9sbFhUaWNraW5nID0gITEpLFxyXG4gICAgICAgICAgKHRoaXMuc2Nyb2xsWVRpY2tpbmcgPSAhMSksXHJcbiAgICAgICAgICAodGhpcy53cmFwcGVyRWwgPSBudWxsKSxcclxuICAgICAgICAgICh0aGlzLmNvbnRlbnRXcmFwcGVyRWwgPSBudWxsKSxcclxuICAgICAgICAgICh0aGlzLmNvbnRlbnRFbCA9IG51bGwpLFxyXG4gICAgICAgICAgKHRoaXMub2Zmc2V0RWwgPSBudWxsKSxcclxuICAgICAgICAgICh0aGlzLm1hc2tFbCA9IG51bGwpLFxyXG4gICAgICAgICAgKHRoaXMucGxhY2Vob2xkZXJFbCA9IG51bGwpLFxyXG4gICAgICAgICAgKHRoaXMuaGVpZ2h0QXV0b09ic2VydmVyV3JhcHBlckVsID0gbnVsbCksXHJcbiAgICAgICAgICAodGhpcy5oZWlnaHRBdXRvT2JzZXJ2ZXJFbCA9IG51bGwpLFxyXG4gICAgICAgICAgKHRoaXMucnRsSGVscGVycyA9IG51bGwpLFxyXG4gICAgICAgICAgKHRoaXMuc2Nyb2xsYmFyV2lkdGggPSAwKSxcclxuICAgICAgICAgICh0aGlzLnJlc2l6ZU9ic2VydmVyID0gbnVsbCksXHJcbiAgICAgICAgICAodGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbnVsbCksXHJcbiAgICAgICAgICAodGhpcy5lbFN0eWxlcyA9IG51bGwpLFxyXG4gICAgICAgICAgKHRoaXMuaXNSdGwgPSBudWxsKSxcclxuICAgICAgICAgICh0aGlzLm1vdXNlWCA9IDApLFxyXG4gICAgICAgICAgKHRoaXMubW91c2VZID0gMCksXHJcbiAgICAgICAgICAodGhpcy5vbk1vdXNlTW92ZSA9IGZ1bmN0aW9uICgpIHt9KSxcclxuICAgICAgICAgICh0aGlzLm9uV2luZG93UmVzaXplID0gZnVuY3Rpb24gKCkge30pLFxyXG4gICAgICAgICAgKHRoaXMub25TdG9wU2Nyb2xsaW5nID0gZnVuY3Rpb24gKCkge30pLFxyXG4gICAgICAgICAgKHRoaXMub25Nb3VzZUVudGVyZWQgPSBmdW5jdGlvbiAoKSB7fSksXHJcbiAgICAgICAgICAodGhpcy5vblNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgZSA9IEgocy5lbCk7XHJcbiAgICAgICAgICAgIHMuc2Nyb2xsWFRpY2tpbmcgfHwgKGUucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHMuc2Nyb2xsWCksIChzLnNjcm9sbFhUaWNraW5nID0gITApKSxcclxuICAgICAgICAgICAgICBzLnNjcm9sbFlUaWNraW5nIHx8IChlLnJlcXVlc3RBbmltYXRpb25GcmFtZShzLnNjcm9sbFkpLCAocy5zY3JvbGxZVGlja2luZyA9ICEwKSksXHJcbiAgICAgICAgICAgICAgcy5pc1Njcm9sbGluZyB8fCAoKHMuaXNTY3JvbGxpbmcgPSAhMCksIF8ocy5lbCwgcy5jbGFzc05hbWVzLnNjcm9sbGluZykpLFxyXG4gICAgICAgICAgICAgIHMuc2hvd1Njcm9sbGJhcigneCcpLFxyXG4gICAgICAgICAgICAgIHMuc2hvd1Njcm9sbGJhcigneScpLFxyXG4gICAgICAgICAgICAgIHMub25TdG9wU2Nyb2xsaW5nKCk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgICh0aGlzLnNjcm9sbFggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHMuYXhpcy54LmlzT3ZlcmZsb3dpbmcgJiYgcy5wb3NpdGlvblNjcm9sbGJhcigneCcpLCAocy5zY3JvbGxYVGlja2luZyA9ICExKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgKHRoaXMuc2Nyb2xsWSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcy5heGlzLnkuaXNPdmVyZmxvd2luZyAmJiBzLnBvc2l0aW9uU2Nyb2xsYmFyKCd5JyksIChzLnNjcm9sbFlUaWNraW5nID0gITEpO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICAodGhpcy5fb25TdG9wU2Nyb2xsaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBxKHMuZWwsIHMuY2xhc3NOYW1lcy5zY3JvbGxpbmcpLCBzLm9wdGlvbnMuYXV0b0hpZGUgJiYgKHMuaGlkZVNjcm9sbGJhcigneCcpLCBzLmhpZGVTY3JvbGxiYXIoJ3knKSksIChzLmlzU2Nyb2xsaW5nID0gITEpO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICAodGhpcy5vbk1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHMuaXNNb3VzZUVudGVyaW5nIHx8IChfKHMuZWwsIHMuY2xhc3NOYW1lcy5tb3VzZUVudGVyZWQpLCBzLnNob3dTY3JvbGxiYXIoJ3gnKSwgcy5zaG93U2Nyb2xsYmFyKCd5JyksIChzLmlzTW91c2VFbnRlcmluZyA9ICEwKSksIHMub25Nb3VzZUVudGVyZWQoKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgKHRoaXMuX29uTW91c2VFbnRlcmVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBxKHMuZWwsIHMuY2xhc3NOYW1lcy5tb3VzZUVudGVyZWQpLCBzLm9wdGlvbnMuYXV0b0hpZGUgJiYgKHMuaGlkZVNjcm9sbGJhcigneCcpLCBzLmhpZGVTY3JvbGxiYXIoJ3knKSksIChzLmlzTW91c2VFbnRlcmluZyA9ICExKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgKHRoaXMuX29uTW91c2VNb3ZlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgKHMubW91c2VYID0gZS5jbGllbnRYKSxcclxuICAgICAgICAgICAgICAocy5tb3VzZVkgPSBlLmNsaWVudFkpLFxyXG4gICAgICAgICAgICAgIChzLmF4aXMueC5pc092ZXJmbG93aW5nIHx8IHMuYXhpcy54LmZvcmNlVmlzaWJsZSkgJiYgcy5vbk1vdXNlTW92ZUZvckF4aXMoJ3gnKSxcclxuICAgICAgICAgICAgICAocy5heGlzLnkuaXNPdmVyZmxvd2luZyB8fCBzLmF4aXMueS5mb3JjZVZpc2libGUpICYmIHMub25Nb3VzZU1vdmVGb3JBeGlzKCd5Jyk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgICh0aGlzLm9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcy5vbk1vdXNlTW92ZS5jYW5jZWwoKSxcclxuICAgICAgICAgICAgICAocy5heGlzLnguaXNPdmVyZmxvd2luZyB8fCBzLmF4aXMueC5mb3JjZVZpc2libGUpICYmIHMub25Nb3VzZUxlYXZlRm9yQXhpcygneCcpLFxyXG4gICAgICAgICAgICAgIChzLmF4aXMueS5pc092ZXJmbG93aW5nIHx8IHMuYXhpcy55LmZvcmNlVmlzaWJsZSkgJiYgcy5vbk1vdXNlTGVhdmVGb3JBeGlzKCd5JyksXHJcbiAgICAgICAgICAgICAgKHMubW91c2VYID0gLTEpLFxyXG4gICAgICAgICAgICAgIChzLm1vdXNlWSA9IC0xKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgKHRoaXMuX29uV2luZG93UmVzaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAocy5zY3JvbGxiYXJXaWR0aCA9IHMuZ2V0U2Nyb2xsYmFyV2lkdGgoKSksIHMuaGlkZU5hdGl2ZVNjcm9sbGJhcigpO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICAodGhpcy5vblBvaW50ZXJFdmVudCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGxldCB0LCBpO1xyXG4gICAgICAgICAgICBzLmF4aXMueC50cmFjay5lbCAmJlxyXG4gICAgICAgICAgICAgIHMuYXhpcy55LnRyYWNrLmVsICYmXHJcbiAgICAgICAgICAgICAgcy5heGlzLnguc2Nyb2xsYmFyLmVsICYmXHJcbiAgICAgICAgICAgICAgcy5heGlzLnkuc2Nyb2xsYmFyLmVsICYmXHJcbiAgICAgICAgICAgICAgKChzLmF4aXMueC50cmFjay5yZWN0ID0gcy5heGlzLngudHJhY2suZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLFxyXG4gICAgICAgICAgICAgIChzLmF4aXMueS50cmFjay5yZWN0ID0gcy5heGlzLnkudHJhY2suZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLFxyXG4gICAgICAgICAgICAgIChzLmF4aXMueC5pc092ZXJmbG93aW5nIHx8IHMuYXhpcy54LmZvcmNlVmlzaWJsZSkgJiYgKHQgPSBzLmlzV2l0aGluQm91bmRzKHMuYXhpcy54LnRyYWNrLnJlY3QpKSxcclxuICAgICAgICAgICAgICAocy5heGlzLnkuaXNPdmVyZmxvd2luZyB8fCBzLmF4aXMueS5mb3JjZVZpc2libGUpICYmIChpID0gcy5pc1dpdGhpbkJvdW5kcyhzLmF4aXMueS50cmFjay5yZWN0KSksXHJcbiAgICAgICAgICAgICAgKHQgfHwgaSkgJiZcclxuICAgICAgICAgICAgICAgIChlLnN0b3BQcm9wYWdhdGlvbigpLFxyXG4gICAgICAgICAgICAgICAgJ3BvaW50ZXJkb3duJyA9PT0gZS50eXBlICYmXHJcbiAgICAgICAgICAgICAgICAgICd0b3VjaCcgIT09IGUucG9pbnRlclR5cGUgJiZcclxuICAgICAgICAgICAgICAgICAgKHQgJiYgKChzLmF4aXMueC5zY3JvbGxiYXIucmVjdCA9IHMuYXhpcy54LnNjcm9sbGJhci5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSksIHMuaXNXaXRoaW5Cb3VuZHMocy5heGlzLnguc2Nyb2xsYmFyLnJlY3QpID8gcy5vbkRyYWdTdGFydChlLCAneCcpIDogcy5vblRyYWNrQ2xpY2soZSwgJ3gnKSksXHJcbiAgICAgICAgICAgICAgICAgIGkgJiYgKChzLmF4aXMueS5zY3JvbGxiYXIucmVjdCA9IHMuYXhpcy55LnNjcm9sbGJhci5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSksIHMuaXNXaXRoaW5Cb3VuZHMocy5heGlzLnkuc2Nyb2xsYmFyLnJlY3QpID8gcy5vbkRyYWdTdGFydChlLCAneScpIDogcy5vblRyYWNrQ2xpY2soZSwgJ3knKSkpKSk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgICh0aGlzLmRyYWcgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICBsZXQgaSwgciwgbCwgbywgbiwgYSwgYywgaCwgdSwgZCwgcDtcclxuICAgICAgICAgICAgaWYgKHMuZHJhZ2dlZEF4aXMgJiYgcy5jb250ZW50V3JhcHBlckVsKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgdiA9IHMuYXhpc1tzLmRyYWdnZWRBeGlzXS50cmFjayxcclxuICAgICAgICAgICAgICAgIGYgPSBudWxsICE9PSAociA9IG51bGwgPT09IChpID0gdi5yZWN0KSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpW3MuYXhpc1tzLmRyYWdnZWRBeGlzXS5zaXplQXR0cl0pICYmIHZvaWQgMCAhPT0gciA/IHIgOiAwLFxyXG4gICAgICAgICAgICAgICAgbSA9IHMuYXhpc1tzLmRyYWdnZWRBeGlzXS5zY3JvbGxiYXIsXHJcbiAgICAgICAgICAgICAgICBiID0gbnVsbCAhPT0gKG8gPSBudWxsID09PSAobCA9IHMuY29udGVudFdyYXBwZXJFbCkgfHwgdm9pZCAwID09PSBsID8gdm9pZCAwIDogbFtzLmF4aXNbcy5kcmFnZ2VkQXhpc10uc2Nyb2xsU2l6ZUF0dHJdKSAmJiB2b2lkIDAgIT09IG8gPyBvIDogMCxcclxuICAgICAgICAgICAgICAgIGcgPSBwYXJzZUludChudWxsICE9PSAoYSA9IG51bGwgPT09IChuID0gcy5lbFN0eWxlcykgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbltzLmF4aXNbcy5kcmFnZ2VkQXhpc10uc2l6ZUF0dHJdKSAmJiB2b2lkIDAgIT09IGEgPyBhIDogJzBweCcsIDEwKTtcclxuICAgICAgICAgICAgICB0LnByZXZlbnREZWZhdWx0KCksIHQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgbGV0IHggPVxyXG4gICAgICAgICAgICAgICAgICAoJ3knID09PSBzLmRyYWdnZWRBeGlzID8gdC5wYWdlWSA6IHQucGFnZVgpIC1cclxuICAgICAgICAgICAgICAgICAgKG51bGwgIT09IChoID0gbnVsbCA9PT0gKGMgPSB2LnJlY3QpIHx8IHZvaWQgMCA9PT0gYyA/IHZvaWQgMCA6IGNbcy5heGlzW3MuZHJhZ2dlZEF4aXNdLm9mZnNldEF0dHJdKSAmJiB2b2lkIDAgIT09IGggPyBoIDogMCkgLVxyXG4gICAgICAgICAgICAgICAgICBzLmF4aXNbcy5kcmFnZ2VkQXhpc10uZHJhZ09mZnNldCxcclxuICAgICAgICAgICAgICAgIHkgPVxyXG4gICAgICAgICAgICAgICAgICAoKHggPSBzLmlzUnRsID8gKG51bGwgIT09IChkID0gbnVsbCA9PT0gKHUgPSB2LnJlY3QpIHx8IHZvaWQgMCA9PT0gdSA/IHZvaWQgMCA6IHVbcy5heGlzW3MuZHJhZ2dlZEF4aXNdLnNpemVBdHRyXSkgJiYgdm9pZCAwICE9PSBkID8gZCA6IDApIC0gbS5zaXplIC0geCA6IHgpIC8gKGYgLSBtLnNpemUpKSAqXHJcbiAgICAgICAgICAgICAgICAgIChiIC0gZyk7XHJcbiAgICAgICAgICAgICAgJ3gnID09PSBzLmRyYWdnZWRBeGlzICYmIHMuaXNSdGwgJiYgKHkgPSAobnVsbCA9PT0gKHAgPSBlLmdldFJ0bEhlbHBlcnMoKSkgfHwgdm9pZCAwID09PSBwID8gdm9pZCAwIDogcC5pc1Njcm9sbGluZ1RvTmVnYXRpdmUpID8gLXkgOiB5KSxcclxuICAgICAgICAgICAgICAgIChzLmNvbnRlbnRXcmFwcGVyRWxbcy5heGlzW3MuZHJhZ2dlZEF4aXNdLnNjcm9sbE9mZnNldEF0dHJdID0geSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgKHRoaXMub25FbmREcmFnID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgY29uc3QgdCA9IGoocy5lbCksXHJcbiAgICAgICAgICAgICAgaSA9IEgocy5lbCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKSxcclxuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpLFxyXG4gICAgICAgICAgICAgIHEocy5lbCwgcy5jbGFzc05hbWVzLmRyYWdnaW5nKSxcclxuICAgICAgICAgICAgICB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHMuZHJhZywgITApLFxyXG4gICAgICAgICAgICAgIHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHMub25FbmREcmFnLCAhMCksXHJcbiAgICAgICAgICAgICAgKHMucmVtb3ZlUHJldmVudENsaWNrSWQgPSBpLnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHMucHJldmVudENsaWNrLCAhMCksIHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBzLnByZXZlbnRDbGljaywgITApLCAocy5yZW1vdmVQcmV2ZW50Q2xpY2tJZCA9IG51bGwpO1xyXG4gICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgKHRoaXMucHJldmVudENsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpLCBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICAodGhpcy5lbCA9IHQpLFxyXG4gICAgICAgICAgKHRoaXMub3B0aW9ucyA9IGsoayh7fSwgZS5kZWZhdWx0T3B0aW9ucyksIGkpKSxcclxuICAgICAgICAgICh0aGlzLmNsYXNzTmFtZXMgPSBrKGsoe30sIGUuZGVmYXVsdE9wdGlvbnMuY2xhc3NOYW1lcyksIGkuY2xhc3NOYW1lcykpLFxyXG4gICAgICAgICAgKHRoaXMuYXhpcyA9IHtcclxuICAgICAgICAgICAgeDoge1xyXG4gICAgICAgICAgICAgIHNjcm9sbE9mZnNldEF0dHI6ICdzY3JvbGxMZWZ0JyxcclxuICAgICAgICAgICAgICBzaXplQXR0cjogJ3dpZHRoJyxcclxuICAgICAgICAgICAgICBzY3JvbGxTaXplQXR0cjogJ3Njcm9sbFdpZHRoJyxcclxuICAgICAgICAgICAgICBvZmZzZXRTaXplQXR0cjogJ29mZnNldFdpZHRoJyxcclxuICAgICAgICAgICAgICBvZmZzZXRBdHRyOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3dBdHRyOiAnb3ZlcmZsb3dYJyxcclxuICAgICAgICAgICAgICBkcmFnT2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICAgIGlzT3ZlcmZsb3dpbmc6ICEwLFxyXG4gICAgICAgICAgICAgIGZvcmNlVmlzaWJsZTogITEsXHJcbiAgICAgICAgICAgICAgdHJhY2s6IHsgc2l6ZTogbnVsbCwgZWw6IG51bGwsIHJlY3Q6IG51bGwsIGlzVmlzaWJsZTogITEgfSxcclxuICAgICAgICAgICAgICBzY3JvbGxiYXI6IHsgc2l6ZTogbnVsbCwgZWw6IG51bGwsIHJlY3Q6IG51bGwsIGlzVmlzaWJsZTogITEgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeToge1xyXG4gICAgICAgICAgICAgIHNjcm9sbE9mZnNldEF0dHI6ICdzY3JvbGxUb3AnLFxyXG4gICAgICAgICAgICAgIHNpemVBdHRyOiAnaGVpZ2h0JyxcclxuICAgICAgICAgICAgICBzY3JvbGxTaXplQXR0cjogJ3Njcm9sbEhlaWdodCcsXHJcbiAgICAgICAgICAgICAgb2Zmc2V0U2l6ZUF0dHI6ICdvZmZzZXRIZWlnaHQnLFxyXG4gICAgICAgICAgICAgIG9mZnNldEF0dHI6ICd0b3AnLFxyXG4gICAgICAgICAgICAgIG92ZXJmbG93QXR0cjogJ292ZXJmbG93WScsXHJcbiAgICAgICAgICAgICAgZHJhZ09mZnNldDogMCxcclxuICAgICAgICAgICAgICBpc092ZXJmbG93aW5nOiAhMCxcclxuICAgICAgICAgICAgICBmb3JjZVZpc2libGU6ICExLFxyXG4gICAgICAgICAgICAgIHRyYWNrOiB7IHNpemU6IG51bGwsIGVsOiBudWxsLCByZWN0OiBudWxsLCBpc1Zpc2libGU6ICExIH0sXHJcbiAgICAgICAgICAgICAgc2Nyb2xsYmFyOiB7IHNpemU6IG51bGwsIGVsOiBudWxsLCByZWN0OiBudWxsLCBpc1Zpc2libGU6ICExIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgICdvYmplY3QnICE9PSB0eXBlb2YgdGhpcy5lbCB8fCAhdGhpcy5lbC5ub2RlTmFtZSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXJndW1lbnQgcGFzc2VkIHRvIFNpbXBsZUJhciBtdXN0IGJlIGFuIEhUTUwgZWxlbWVudCBpbnN0ZWFkIG9mICcuY29uY2F0KHRoaXMuZWwpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKHRoaXMub25Nb3VzZU1vdmUgPSAoZnVuY3Rpb24gKGUsIHQsIGkpIHtcclxuICAgICAgICAgIGxldCBzID0gITAsXHJcbiAgICAgICAgICAgIHIgPSAhMDtcclxuICAgICAgICAgIGlmICgnZnVuY3Rpb24nICE9PSB0eXBlb2YgZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIGZ1bmN0aW9uJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbShpKSAmJiAoKHMgPSAnbGVhZGluZycgaW4gaSA/ICEhaS5sZWFkaW5nIDogcyksIChyID0gJ3RyYWlsaW5nJyBpbiBpID8gISFpLnRyYWlsaW5nIDogcikpLCBBKGUsIHQsIHsgbGVhZGluZzogcywgbWF4V2FpdDogdCwgdHJhaWxpbmc6IHIgfSk7XHJcbiAgICAgICAgfSkodGhpcy5fb25Nb3VzZU1vdmUsIDY0KSksXHJcbiAgICAgICAgICAodGhpcy5vbldpbmRvd1Jlc2l6ZSA9IEEodGhpcy5fb25XaW5kb3dSZXNpemUsIDY0LCB7IGxlYWRpbmc6ICEwIH0pKSxcclxuICAgICAgICAgICh0aGlzLm9uU3RvcFNjcm9sbGluZyA9IEEodGhpcy5fb25TdG9wU2Nyb2xsaW5nLCB0aGlzLnN0b3BTY3JvbGxEZWxheSkpLFxyXG4gICAgICAgICAgKHRoaXMub25Nb3VzZUVudGVyZWQgPSBBKHRoaXMuX29uTW91c2VFbnRlcmVkLCB0aGlzLnN0b3BTY3JvbGxEZWxheSkpLFxyXG4gICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAoZS5nZXRSdGxIZWxwZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYgKGUucnRsSGVscGVycykge1xyXG4gICAgICAgICAgICByZXR1cm4gZS5ydGxIZWxwZXJzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgdC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cInNpbXBsZWJhci1kdW1teS1zY3JvbGxiYXItc2l6ZVwiPjxkaXY+PC9kaXY+PC9kaXY+JztcclxuICAgICAgICAgIGNvbnN0IGkgPSB0LmZpcnN0RWxlbWVudENoaWxkLFxyXG4gICAgICAgICAgICBzID0gbnVsbCA9PSBpID8gdm9pZCAwIDogaS5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICAgIGlmICghcykge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaSksIChpLnNjcm9sbExlZnQgPSAwKTtcclxuICAgICAgICAgIGNvbnN0IHIgPSBlLmdldE9mZnNldChpKSxcclxuICAgICAgICAgICAgbCA9IGUuZ2V0T2Zmc2V0KHMpO1xyXG4gICAgICAgICAgaS5zY3JvbGxMZWZ0ID0gLTk5OTtcclxuICAgICAgICAgIGNvbnN0IG8gPSBlLmdldE9mZnNldChzKTtcclxuICAgICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGkpLCAoZS5ydGxIZWxwZXJzID0geyBpc1Njcm9sbE9yaWdpbkF0WmVybzogci5sZWZ0ICE9PSBsLmxlZnQsIGlzU2Nyb2xsaW5nVG9OZWdhdGl2ZTogbC5sZWZ0ICE9PSBvLmxlZnQgfSksIGUucnRsSGVscGVycztcclxuICAgICAgICB9KSxcclxuICAgICAgICAoZS5wcm90b3R5cGUuZ2V0U2Nyb2xsYmFyV2lkdGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuY29udGVudFdyYXBwZXJFbCAmJiAnbm9uZScgPT09IGdldENvbXB1dGVkU3R5bGUodGhpcy5jb250ZW50V3JhcHBlckVsLCAnOjotd2Via2l0LXNjcm9sbGJhcicpLmRpc3BsYXkpIHx8XHJcbiAgICAgICAgICAgICAgJ3Njcm9sbGJhcldpZHRoJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgfHxcclxuICAgICAgICAgICAgICAnLW1zLW92ZXJmbG93LXN0eWxlJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGVcclxuICAgICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgICA6IE4oKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE4oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICAoZS5nZXRPZmZzZXQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgY29uc3QgdCA9IGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgICAgICAgIGkgPSBqKGUpLFxyXG4gICAgICAgICAgICBzID0gSChlKTtcclxuICAgICAgICAgIHJldHVybiB7IHRvcDogdC50b3AgKyAocy5wYWdlWU9mZnNldCB8fCBpLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApLCBsZWZ0OiB0LmxlZnQgKyAocy5wYWdlWE9mZnNldCB8fCBpLmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0KSB9O1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIChlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdCAmJiAodGhpcy5pbml0RE9NKCksICh0aGlzLnJ0bEhlbHBlcnMgPSBlLmdldFJ0bEhlbHBlcnMoKSksICh0aGlzLnNjcm9sbGJhcldpZHRoID0gdGhpcy5nZXRTY3JvbGxiYXJXaWR0aCgpKSwgdGhpcy5yZWNhbGN1bGF0ZSgpLCB0aGlzLmluaXRMaXN0ZW5lcnMoKSk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGUucHJvdG90eXBlLmluaXRET00gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBsZXQgZSwgdDtcclxuICAgICAgICAgICh0aGlzLndyYXBwZXJFbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcihQKHRoaXMuY2xhc3NOYW1lcy53cmFwcGVyKSkpLFxyXG4gICAgICAgICAgICAodGhpcy5jb250ZW50V3JhcHBlckVsID0gdGhpcy5vcHRpb25zLnNjcm9sbGFibGVOb2RlIHx8IHRoaXMuZWwucXVlcnlTZWxlY3RvcihQKHRoaXMuY2xhc3NOYW1lcy5jb250ZW50V3JhcHBlcikpKSxcclxuICAgICAgICAgICAgKHRoaXMuY29udGVudEVsID0gdGhpcy5vcHRpb25zLmNvbnRlbnROb2RlIHx8IHRoaXMuZWwucXVlcnlTZWxlY3RvcihQKHRoaXMuY2xhc3NOYW1lcy5jb250ZW50RWwpKSksXHJcbiAgICAgICAgICAgICh0aGlzLm9mZnNldEVsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKFAodGhpcy5jbGFzc05hbWVzLm9mZnNldCkpKSxcclxuICAgICAgICAgICAgKHRoaXMubWFza0VsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKFAodGhpcy5jbGFzc05hbWVzLm1hc2spKSksXHJcbiAgICAgICAgICAgICh0aGlzLnBsYWNlaG9sZGVyRWwgPSB0aGlzLmZpbmRDaGlsZCh0aGlzLndyYXBwZXJFbCwgUCh0aGlzLmNsYXNzTmFtZXMucGxhY2Vob2xkZXIpKSksXHJcbiAgICAgICAgICAgICh0aGlzLmhlaWdodEF1dG9PYnNlcnZlcldyYXBwZXJFbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcihQKHRoaXMuY2xhc3NOYW1lcy5oZWlnaHRBdXRvT2JzZXJ2ZXJXcmFwcGVyRWwpKSksXHJcbiAgICAgICAgICAgICh0aGlzLmhlaWdodEF1dG9PYnNlcnZlckVsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKFAodGhpcy5jbGFzc05hbWVzLmhlaWdodEF1dG9PYnNlcnZlckVsKSkpLFxyXG4gICAgICAgICAgICAodGhpcy5heGlzLngudHJhY2suZWwgPSB0aGlzLmZpbmRDaGlsZCh0aGlzLmVsLCAnJy5jb25jYXQoUCh0aGlzLmNsYXNzTmFtZXMudHJhY2spKS5jb25jYXQoUCh0aGlzLmNsYXNzTmFtZXMuaG9yaXpvbnRhbCkpKSksXHJcbiAgICAgICAgICAgICh0aGlzLmF4aXMueS50cmFjay5lbCA9IHRoaXMuZmluZENoaWxkKHRoaXMuZWwsICcnLmNvbmNhdChQKHRoaXMuY2xhc3NOYW1lcy50cmFjaykpLmNvbmNhdChQKHRoaXMuY2xhc3NOYW1lcy52ZXJ0aWNhbCkpKSksXHJcbiAgICAgICAgICAgICh0aGlzLmF4aXMueC5zY3JvbGxiYXIuZWwgPSAobnVsbCA9PT0gKGUgPSB0aGlzLmF4aXMueC50cmFjay5lbCkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5xdWVyeVNlbGVjdG9yKFAodGhpcy5jbGFzc05hbWVzLnNjcm9sbGJhcikpKSB8fCBudWxsKSxcclxuICAgICAgICAgICAgKHRoaXMuYXhpcy55LnNjcm9sbGJhci5lbCA9IChudWxsID09PSAodCA9IHRoaXMuYXhpcy55LnRyYWNrLmVsKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LnF1ZXJ5U2VsZWN0b3IoUCh0aGlzLmNsYXNzTmFtZXMuc2Nyb2xsYmFyKSkpIHx8IG51bGwpLFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXV0b0hpZGUgfHwgKF8odGhpcy5heGlzLnguc2Nyb2xsYmFyLmVsLCB0aGlzLmNsYXNzTmFtZXMudmlzaWJsZSksIF8odGhpcy5heGlzLnkuc2Nyb2xsYmFyLmVsLCB0aGlzLmNsYXNzTmFtZXMudmlzaWJsZSkpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIChlLnByb3RvdHlwZS5pbml0TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgbGV0IGUsXHJcbiAgICAgICAgICAgIHQgPSB0aGlzLFxyXG4gICAgICAgICAgICBpID0gSCh0aGlzLmVsKTtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgKHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMub25Nb3VzZUVudGVyKSxcclxuICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHRoaXMub25Qb2ludGVyRXZlbnQsICEwKSxcclxuICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKSxcclxuICAgICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbk1vdXNlTGVhdmUpLFxyXG4gICAgICAgICAgICBudWxsID09PSAoZSA9IHRoaXMuY29udGVudFdyYXBwZXJFbCkgfHwgdm9pZCAwID09PSBlIHx8IGUuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCksXHJcbiAgICAgICAgICAgIGkuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSksXHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudEVsKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuUmVzaXplT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICBsZXQgcyA9ICExLFxyXG4gICAgICAgICAgICAgICAgciA9IGkuUmVzaXplT2JzZXJ2ZXIgfHwgUmVzaXplT2JzZXJ2ZXI7XHJcbiAgICAgICAgICAgICAgKHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgcigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzICYmXHJcbiAgICAgICAgICAgICAgICAgIGkucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0LnJlY2FsY3VsYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsKSxcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmNvbnRlbnRFbCksXHJcbiAgICAgICAgICAgICAgICBpLnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHMgPSAhMDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICh0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgaS5NdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcclxuICAgICAgICAgICAgICBpLnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0LnJlY2FsY3VsYXRlKCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmNvbnRlbnRFbCwgeyBjaGlsZExpc3Q6ICEwLCBzdWJ0cmVlOiAhMCwgY2hhcmFjdGVyRGF0YTogITAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGUucHJvdG90eXBlLnJlY2FsY3VsYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuaGVpZ2h0QXV0b09ic2VydmVyRWwgJiYgdGhpcy5jb250ZW50RWwgJiYgdGhpcy5jb250ZW50V3JhcHBlckVsICYmIHRoaXMud3JhcHBlckVsICYmIHRoaXMucGxhY2Vob2xkZXJFbCkge1xyXG4gICAgICAgICAgICBjb25zdCBlID0gSCh0aGlzLmVsKTtcclxuICAgICAgICAgICAgKHRoaXMuZWxTdHlsZXMgPSBlLmdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkpLCAodGhpcy5pc1J0bCA9ICdydGwnID09PSB0aGlzLmVsU3R5bGVzLmRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSB0aGlzLmNvbnRlbnRFbC5vZmZzZXRXaWR0aCxcclxuICAgICAgICAgICAgICBpID0gdGhpcy5oZWlnaHRBdXRvT2JzZXJ2ZXJFbC5vZmZzZXRIZWlnaHQgPD0gMSxcclxuICAgICAgICAgICAgICBzID0gdGhpcy5oZWlnaHRBdXRvT2JzZXJ2ZXJFbC5vZmZzZXRXaWR0aCA8PSAxIHx8IHQgPiAwLFxyXG4gICAgICAgICAgICAgIHIgPSB0aGlzLmNvbnRlbnRXcmFwcGVyRWwub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgICAgICAgbCA9IHRoaXMuZWxTdHlsZXMub3ZlcmZsb3dYLFxyXG4gICAgICAgICAgICAgIG8gPSB0aGlzLmVsU3R5bGVzLm92ZXJmbG93WTtcclxuICAgICAgICAgICAgKHRoaXMuY29udGVudEVsLnN0eWxlLnBhZGRpbmcgPSAnJ1xyXG4gICAgICAgICAgICAgIC5jb25jYXQodGhpcy5lbFN0eWxlcy5wYWRkaW5nVG9wLCAnICcpXHJcbiAgICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmVsU3R5bGVzLnBhZGRpbmdSaWdodCwgJyAnKVxyXG4gICAgICAgICAgICAgIC5jb25jYXQodGhpcy5lbFN0eWxlcy5wYWRkaW5nQm90dG9tLCAnICcpXHJcbiAgICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmVsU3R5bGVzLnBhZGRpbmdMZWZ0KSksXHJcbiAgICAgICAgICAgICAgKHRoaXMud3JhcHBlckVsLnN0eWxlLm1hcmdpbiA9ICctJ1xyXG4gICAgICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmVsU3R5bGVzLnBhZGRpbmdUb3AsICcgLScpXHJcbiAgICAgICAgICAgICAgICAuY29uY2F0KHRoaXMuZWxTdHlsZXMucGFkZGluZ1JpZ2h0LCAnIC0nKVxyXG4gICAgICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmVsU3R5bGVzLnBhZGRpbmdCb3R0b20sICcgLScpXHJcbiAgICAgICAgICAgICAgICAuY29uY2F0KHRoaXMuZWxTdHlsZXMucGFkZGluZ0xlZnQpKTtcclxuICAgICAgICAgICAgY29uc3QgbiA9IHRoaXMuY29udGVudEVsLnNjcm9sbEhlaWdodCxcclxuICAgICAgICAgICAgICBhID0gdGhpcy5jb250ZW50RWwuc2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgICh0aGlzLmNvbnRlbnRXcmFwcGVyRWwuc3R5bGUuaGVpZ2h0ID0gaSA/ICdhdXRvJyA6ICcxMDAlJyksICh0aGlzLnBsYWNlaG9sZGVyRWwuc3R5bGUud2lkdGggPSBzID8gJycuY29uY2F0KHQgfHwgYSwgJ3B4JykgOiAnYXV0bycpLCAodGhpcy5wbGFjZWhvbGRlckVsLnN0eWxlLmhlaWdodCA9ICcnLmNvbmNhdChuLCAncHgnKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGMgPSB0aGlzLmNvbnRlbnRXcmFwcGVyRWwub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICAodGhpcy5heGlzLnguaXNPdmVyZmxvd2luZyA9IDAgIT09IHQgJiYgYSA+IHQpLFxyXG4gICAgICAgICAgICAgICh0aGlzLmF4aXMueS5pc092ZXJmbG93aW5nID0gbiA+IGMpLFxyXG4gICAgICAgICAgICAgICh0aGlzLmF4aXMueC5pc092ZXJmbG93aW5nID0gJ2hpZGRlbicgIT09IGwgJiYgdGhpcy5heGlzLnguaXNPdmVyZmxvd2luZyksXHJcbiAgICAgICAgICAgICAgKHRoaXMuYXhpcy55LmlzT3ZlcmZsb3dpbmcgPSAnaGlkZGVuJyAhPT0gbyAmJiB0aGlzLmF4aXMueS5pc092ZXJmbG93aW5nKSxcclxuICAgICAgICAgICAgICAodGhpcy5heGlzLnguZm9yY2VWaXNpYmxlID0gJ3gnID09PSB0aGlzLm9wdGlvbnMuZm9yY2VWaXNpYmxlIHx8ICEwID09PSB0aGlzLm9wdGlvbnMuZm9yY2VWaXNpYmxlKSxcclxuICAgICAgICAgICAgICAodGhpcy5heGlzLnkuZm9yY2VWaXNpYmxlID0gJ3knID09PSB0aGlzLm9wdGlvbnMuZm9yY2VWaXNpYmxlIHx8ICEwID09PSB0aGlzLm9wdGlvbnMuZm9yY2VWaXNpYmxlKSxcclxuICAgICAgICAgICAgICB0aGlzLmhpZGVOYXRpdmVTY3JvbGxiYXIoKTtcclxuICAgICAgICAgICAgY29uc3QgaCA9IHRoaXMuYXhpcy54LmlzT3ZlcmZsb3dpbmcgPyB0aGlzLnNjcm9sbGJhcldpZHRoIDogMCxcclxuICAgICAgICAgICAgICB1ID0gdGhpcy5heGlzLnkuaXNPdmVyZmxvd2luZyA/IHRoaXMuc2Nyb2xsYmFyV2lkdGggOiAwO1xyXG4gICAgICAgICAgICAodGhpcy5heGlzLnguaXNPdmVyZmxvd2luZyA9IHRoaXMuYXhpcy54LmlzT3ZlcmZsb3dpbmcgJiYgYSA+IHIgLSB1KSxcclxuICAgICAgICAgICAgICAodGhpcy5heGlzLnkuaXNPdmVyZmxvd2luZyA9IHRoaXMuYXhpcy55LmlzT3ZlcmZsb3dpbmcgJiYgbiA+IGMgLSBoKSxcclxuICAgICAgICAgICAgICAodGhpcy5heGlzLnguc2Nyb2xsYmFyLnNpemUgPSB0aGlzLmdldFNjcm9sbGJhclNpemUoJ3gnKSksXHJcbiAgICAgICAgICAgICAgKHRoaXMuYXhpcy55LnNjcm9sbGJhci5zaXplID0gdGhpcy5nZXRTY3JvbGxiYXJTaXplKCd5JykpLFxyXG4gICAgICAgICAgICAgIHRoaXMuYXhpcy54LnNjcm9sbGJhci5lbCAmJiAodGhpcy5heGlzLnguc2Nyb2xsYmFyLmVsLnN0eWxlLndpZHRoID0gJycuY29uY2F0KHRoaXMuYXhpcy54LnNjcm9sbGJhci5zaXplLCAncHgnKSksXHJcbiAgICAgICAgICAgICAgdGhpcy5heGlzLnkuc2Nyb2xsYmFyLmVsICYmICh0aGlzLmF4aXMueS5zY3JvbGxiYXIuZWwuc3R5bGUuaGVpZ2h0ID0gJycuY29uY2F0KHRoaXMuYXhpcy55LnNjcm9sbGJhci5zaXplLCAncHgnKSksXHJcbiAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvblNjcm9sbGJhcigneCcpLFxyXG4gICAgICAgICAgICAgIHRoaXMucG9zaXRpb25TY3JvbGxiYXIoJ3knKSxcclxuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVRyYWNrVmlzaWJpbGl0eSgneCcpLFxyXG4gICAgICAgICAgICAgIHRoaXMudG9nZ2xlVHJhY2tWaXNpYmlsaXR5KCd5Jyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGUucHJvdG90eXBlLmdldFNjcm9sbGJhclNpemUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgbGV0IHQsIGk7XHJcbiAgICAgICAgICBpZiAoKHZvaWQgMCA9PT0gZSAmJiAoZSA9ICd5JyksICF0aGlzLmF4aXNbZV0uaXNPdmVyZmxvd2luZyB8fCAhdGhpcy5jb250ZW50RWwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IHMsXHJcbiAgICAgICAgICAgIHIgPSB0aGlzLmNvbnRlbnRFbFt0aGlzLmF4aXNbZV0uc2Nyb2xsU2l6ZUF0dHJdLFxyXG4gICAgICAgICAgICBsID0gbnVsbCAhPT0gKGkgPSBudWxsID09PSAodCA9IHRoaXMuYXhpc1tlXS50cmFjay5lbCkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdFt0aGlzLmF4aXNbZV0ub2Zmc2V0U2l6ZUF0dHJdKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogMCxcclxuICAgICAgICAgICAgbyA9IGwgLyByO1xyXG4gICAgICAgICAgcmV0dXJuIChzID0gTWF0aC5tYXgofn4obyAqIGwpLCB0aGlzLm9wdGlvbnMuc2Nyb2xsYmFyTWluU2l6ZSkpLCB0aGlzLm9wdGlvbnMuc2Nyb2xsYmFyTWF4U2l6ZSAmJiAocyA9IE1hdGgubWluKHMsIHRoaXMub3B0aW9ucy5zY3JvbGxiYXJNYXhTaXplKSksIHM7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGUucHJvdG90eXBlLnBvc2l0aW9uU2Nyb2xsYmFyID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgIGxldCBpLCBzLCByO1xyXG4gICAgICAgICAgdm9pZCAwID09PSB0ICYmICh0ID0gJ3knKTtcclxuICAgICAgICAgIGNvbnN0IGwgPSB0aGlzLmF4aXNbdF0uc2Nyb2xsYmFyO1xyXG4gICAgICAgICAgaWYgKHRoaXMuYXhpc1t0XS5pc092ZXJmbG93aW5nICYmIHRoaXMuY29udGVudFdyYXBwZXJFbCAmJiBsLmVsICYmIHRoaXMuZWxTdHlsZXMpIHtcclxuICAgICAgICAgICAgbGV0IG8gPSB0aGlzLmNvbnRlbnRXcmFwcGVyRWxbdGhpcy5heGlzW3RdLnNjcm9sbFNpemVBdHRyXSxcclxuICAgICAgICAgICAgICBuID0gKG51bGwgPT09IChpID0gdGhpcy5heGlzW3RdLnRyYWNrLmVsKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpW3RoaXMuYXhpc1t0XS5vZmZzZXRTaXplQXR0cl0pIHx8IDAsXHJcbiAgICAgICAgICAgICAgYSA9IHBhcnNlSW50KHRoaXMuZWxTdHlsZXNbdGhpcy5heGlzW3RdLnNpemVBdHRyXSwgMTApLFxyXG4gICAgICAgICAgICAgIGMgPSB0aGlzLmNvbnRlbnRXcmFwcGVyRWxbdGhpcy5heGlzW3RdLnNjcm9sbE9mZnNldEF0dHJdO1xyXG4gICAgICAgICAgICAoYyA9ICd4JyA9PT0gdCAmJiB0aGlzLmlzUnRsICYmIChudWxsID09PSAocyA9IGUuZ2V0UnRsSGVscGVycygpKSB8fCB2b2lkIDAgPT09IHMgPyB2b2lkIDAgOiBzLmlzU2Nyb2xsT3JpZ2luQXRaZXJvKSA/IC1jIDogYyksXHJcbiAgICAgICAgICAgICAgJ3gnID09PSB0ICYmIHRoaXMuaXNSdGwgJiYgKGMgPSAobnVsbCA9PT0gKHIgPSBlLmdldFJ0bEhlbHBlcnMoKSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5pc1Njcm9sbGluZ1RvTmVnYXRpdmUpID8gYyA6IC1jKTtcclxuICAgICAgICAgICAgbGV0IGggPSBjIC8gKG8gLSBhKSxcclxuICAgICAgICAgICAgICB1ID0gfn4oKG4gLSBsLnNpemUpICogaCk7XHJcbiAgICAgICAgICAgICh1ID0gJ3gnID09PSB0ICYmIHRoaXMuaXNSdGwgPyAtdSArIChuIC0gbC5zaXplKSA6IHUpLCAobC5lbC5zdHlsZS50cmFuc2Zvcm0gPSAneCcgPT09IHQgPyAndHJhbnNsYXRlM2QoJy5jb25jYXQodSwgJ3B4LCAwLCAwKScpIDogJ3RyYW5zbGF0ZTNkKDAsICcuY29uY2F0KHUsICdweCwgMCknKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGUucHJvdG90eXBlLnRvZ2dsZVRyYWNrVmlzaWJpbGl0eSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICB2b2lkIDAgPT09IGUgJiYgKGUgPSAneScpO1xyXG4gICAgICAgICAgY29uc3QgdCA9IHRoaXMuYXhpc1tlXS50cmFjay5lbCxcclxuICAgICAgICAgICAgaSA9IHRoaXMuYXhpc1tlXS5zY3JvbGxiYXIuZWw7XHJcbiAgICAgICAgICB0ICYmXHJcbiAgICAgICAgICAgIGkgJiZcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50V3JhcHBlckVsICYmXHJcbiAgICAgICAgICAgICh0aGlzLmF4aXNbZV0uaXNPdmVyZmxvd2luZyB8fCB0aGlzLmF4aXNbZV0uZm9yY2VWaXNpYmxlXHJcbiAgICAgICAgICAgICAgPyAoKHQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJyksICh0aGlzLmNvbnRlbnRXcmFwcGVyRWwuc3R5bGVbdGhpcy5heGlzW2VdLm92ZXJmbG93QXR0cl0gPSAnc2Nyb2xsJyksIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnJy5jb25jYXQodGhpcy5jbGFzc05hbWVzLnNjcm9sbGFibGUsICctJykuY29uY2F0KGUpKSlcclxuICAgICAgICAgICAgICA6ICgodC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbicpLCAodGhpcy5jb250ZW50V3JhcHBlckVsLnN0eWxlW3RoaXMuYXhpc1tlXS5vdmVyZmxvd0F0dHJdID0gJ2hpZGRlbicpLCB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJycuY29uY2F0KHRoaXMuY2xhc3NOYW1lcy5zY3JvbGxhYmxlLCAnLScpLmNvbmNhdChlKSkpLFxyXG4gICAgICAgICAgICB0aGlzLmF4aXNbZV0uaXNPdmVyZmxvd2luZyA/IChpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snKSA6IChpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICAoZS5wcm90b3R5cGUuc2hvd1Njcm9sbGJhciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICB2b2lkIDAgPT09IGUgJiYgKGUgPSAneScpLFxyXG4gICAgICAgICAgICB0aGlzLmF4aXNbZV0uaXNPdmVyZmxvd2luZyAmJiAhdGhpcy5heGlzW2VdLnNjcm9sbGJhci5pc1Zpc2libGUgJiYgKF8odGhpcy5heGlzW2VdLnNjcm9sbGJhci5lbCwgdGhpcy5jbGFzc05hbWVzLnZpc2libGUpLCAodGhpcy5heGlzW2VdLnNjcm9sbGJhci5pc1Zpc2libGUgPSAhMCkpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIChlLnByb3RvdHlwZS5oaWRlU2Nyb2xsYmFyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHZvaWQgMCA9PT0gZSAmJiAoZSA9ICd5JyksIHRoaXMuYXhpc1tlXS5pc092ZXJmbG93aW5nICYmIHRoaXMuYXhpc1tlXS5zY3JvbGxiYXIuaXNWaXNpYmxlICYmIChxKHRoaXMuYXhpc1tlXS5zY3JvbGxiYXIuZWwsIHRoaXMuY2xhc3NOYW1lcy52aXNpYmxlKSwgKHRoaXMuYXhpc1tlXS5zY3JvbGxiYXIuaXNWaXNpYmxlID0gITEpKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICAoZS5wcm90b3R5cGUuaGlkZU5hdGl2ZVNjcm9sbGJhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHRoaXMub2Zmc2V0RWwgJiZcclxuICAgICAgICAgICAgKCh0aGlzLm9mZnNldEVsLnN0eWxlW3RoaXMuaXNSdGwgPyAnbGVmdCcgOiAncmlnaHQnXSA9IHRoaXMuYXhpcy55LmlzT3ZlcmZsb3dpbmcgfHwgdGhpcy5heGlzLnkuZm9yY2VWaXNpYmxlID8gJy0nLmNvbmNhdCh0aGlzLnNjcm9sbGJhcldpZHRoLCAncHgnKSA6ICcwcHgnKSxcclxuICAgICAgICAgICAgKHRoaXMub2Zmc2V0RWwuc3R5bGUuYm90dG9tID0gdGhpcy5heGlzLnguaXNPdmVyZmxvd2luZyB8fCB0aGlzLmF4aXMueC5mb3JjZVZpc2libGUgPyAnLScuY29uY2F0KHRoaXMuc2Nyb2xsYmFyV2lkdGgsICdweCcpIDogJzBweCcpKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICAoZS5wcm90b3R5cGUub25Nb3VzZU1vdmVGb3JBeGlzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHZvaWQgMCA9PT0gZSAmJiAoZSA9ICd5Jyk7XHJcbiAgICAgICAgICBjb25zdCB0ID0gdGhpcy5heGlzW2VdO1xyXG4gICAgICAgICAgdC50cmFjay5lbCAmJlxyXG4gICAgICAgICAgICB0LnNjcm9sbGJhci5lbCAmJlxyXG4gICAgICAgICAgICAoKHQudHJhY2sucmVjdCA9IHQudHJhY2suZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLFxyXG4gICAgICAgICAgICAodC5zY3JvbGxiYXIucmVjdCA9IHQuc2Nyb2xsYmFyLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSxcclxuICAgICAgICAgICAgdGhpcy5pc1dpdGhpbkJvdW5kcyh0LnRyYWNrLnJlY3QpXHJcbiAgICAgICAgICAgICAgPyAodGhpcy5zaG93U2Nyb2xsYmFyKGUpLFxyXG4gICAgICAgICAgICAgICAgXyh0LnRyYWNrLmVsLCB0aGlzLmNsYXNzTmFtZXMuaG92ZXIpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1dpdGhpbkJvdW5kcyh0LnNjcm9sbGJhci5yZWN0KSA/IF8odC5zY3JvbGxiYXIuZWwsIHRoaXMuY2xhc3NOYW1lcy5ob3ZlcikgOiBxKHQuc2Nyb2xsYmFyLmVsLCB0aGlzLmNsYXNzTmFtZXMuaG92ZXIpKVxyXG4gICAgICAgICAgICAgIDogKHEodC50cmFjay5lbCwgdGhpcy5jbGFzc05hbWVzLmhvdmVyKSwgdGhpcy5vcHRpb25zLmF1dG9IaWRlICYmIHRoaXMuaGlkZVNjcm9sbGJhcihlKSkpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIChlLnByb3RvdHlwZS5vbk1vdXNlTGVhdmVGb3JBeGlzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHZvaWQgMCA9PT0gZSAmJiAoZSA9ICd5JyksIHEodGhpcy5heGlzW2VdLnRyYWNrLmVsLCB0aGlzLmNsYXNzTmFtZXMuaG92ZXIpLCBxKHRoaXMuYXhpc1tlXS5zY3JvbGxiYXIuZWwsIHRoaXMuY2xhc3NOYW1lcy5ob3ZlciksIHRoaXMub3B0aW9ucy5hdXRvSGlkZSAmJiB0aGlzLmhpZGVTY3JvbGxiYXIoZSk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGUucHJvdG90eXBlLm9uRHJhZ1N0YXJ0ID0gZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgIGxldCBpO1xyXG4gICAgICAgICAgdm9pZCAwID09PSB0ICYmICh0ID0gJ3knKTtcclxuICAgICAgICAgIGNvbnN0IHMgPSBqKHRoaXMuZWwpLFxyXG4gICAgICAgICAgICByID0gSCh0aGlzLmVsKSxcclxuICAgICAgICAgICAgbCA9IHRoaXMuYXhpc1t0XS5zY3JvbGxiYXIsXHJcbiAgICAgICAgICAgIG8gPSAneScgPT09IHQgPyBlLnBhZ2VZIDogZS5wYWdlWDtcclxuICAgICAgICAgICh0aGlzLmF4aXNbdF0uZHJhZ09mZnNldCA9IG8gLSAoKG51bGwgPT09IChpID0gbC5yZWN0KSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpW3RoaXMuYXhpc1t0XS5vZmZzZXRBdHRyXSkgfHwgMCkpLFxyXG4gICAgICAgICAgICAodGhpcy5kcmFnZ2VkQXhpcyA9IHQpLFxyXG4gICAgICAgICAgICBfKHRoaXMuZWwsIHRoaXMuY2xhc3NOYW1lcy5kcmFnZ2luZyksXHJcbiAgICAgICAgICAgIHMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnLCAhMCksXHJcbiAgICAgICAgICAgIHMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25FbmREcmFnLCAhMCksXHJcbiAgICAgICAgICAgIG51bGwgPT09IHRoaXMucmVtb3ZlUHJldmVudENsaWNrSWRcclxuICAgICAgICAgICAgICA/IChzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcmV2ZW50Q2xpY2ssICEwKSwgcy5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIHRoaXMucHJldmVudENsaWNrLCAhMCkpXHJcbiAgICAgICAgICAgICAgOiAoci5jbGVhclRpbWVvdXQodGhpcy5yZW1vdmVQcmV2ZW50Q2xpY2tJZCksICh0aGlzLnJlbW92ZVByZXZlbnRDbGlja0lkID0gbnVsbCkpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIChlLnByb3RvdHlwZS5vblRyYWNrQ2xpY2sgPSBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgbGV0IGksXHJcbiAgICAgICAgICAgIHMsXHJcbiAgICAgICAgICAgIHIsXHJcbiAgICAgICAgICAgIGwsXHJcbiAgICAgICAgICAgIG8gPSB0aGlzO1xyXG4gICAgICAgICAgdm9pZCAwID09PSB0ICYmICh0ID0gJ3knKTtcclxuICAgICAgICAgIGNvbnN0IG4gPSB0aGlzLmF4aXNbdF07XHJcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNsaWNrT25UcmFjayAmJiBuLnNjcm9sbGJhci5lbCAmJiB0aGlzLmNvbnRlbnRXcmFwcGVyRWwpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBhID0gSCh0aGlzLmVsKTtcclxuICAgICAgICAgICAgdGhpcy5heGlzW3RdLnNjcm9sbGJhci5yZWN0ID0gbi5zY3JvbGxiYXIuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGxldCBjID0gbnVsbCAhPT0gKHMgPSBudWxsID09PSAoaSA9IHRoaXMuYXhpc1t0XS5zY3JvbGxiYXIucmVjdCkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaVt0aGlzLmF4aXNbdF0ub2Zmc2V0QXR0cl0pICYmIHZvaWQgMCAhPT0gcyA/IHMgOiAwLFxyXG4gICAgICAgICAgICAgIGggPSBwYXJzZUludChudWxsICE9PSAobCA9IG51bGwgPT09IChyID0gdGhpcy5lbFN0eWxlcykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogclt0aGlzLmF4aXNbdF0uc2l6ZUF0dHJdKSAmJiB2b2lkIDAgIT09IGwgPyBsIDogJzBweCcsIDEwKSxcclxuICAgICAgICAgICAgICB1ID0gdGhpcy5jb250ZW50V3JhcHBlckVsW3RoaXMuYXhpc1t0XS5zY3JvbGxPZmZzZXRBdHRyXSxcclxuICAgICAgICAgICAgICBkID0gKCd5JyA9PT0gdCA/IHRoaXMubW91c2VZIC0gYyA6IHRoaXMubW91c2VYIC0gYykgPCAwID8gLTEgOiAxLFxyXG4gICAgICAgICAgICAgIHAgPSAtMSA9PT0gZCA/IHUgLSBoIDogdSArIGgsXHJcbiAgICAgICAgICAgICAgdiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG8uY29udGVudFdyYXBwZXJFbCAmJlxyXG4gICAgICAgICAgICAgICAgICAoLTEgPT09IGRcclxuICAgICAgICAgICAgICAgICAgICA/IHUgPiBwICYmICgodSAtPSA0MCksIChvLmNvbnRlbnRXcmFwcGVyRWxbby5heGlzW3RdLnNjcm9sbE9mZnNldEF0dHJdID0gdSksIGEucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHYpKVxyXG4gICAgICAgICAgICAgICAgICAgIDogdSA8IHAgJiYgKCh1ICs9IDQwKSwgKG8uY29udGVudFdyYXBwZXJFbFtvLmF4aXNbdF0uc2Nyb2xsT2Zmc2V0QXR0cl0gPSB1KSwgYS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodikpKTtcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGUucHJvdG90eXBlLmdldENvbnRlbnRFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudEVsO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIChlLnByb3RvdHlwZS5nZXRTY3JvbGxFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudFdyYXBwZXJFbDtcclxuICAgICAgICB9KSxcclxuICAgICAgICAoZS5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgY29uc3QgZSA9IEgodGhpcy5lbCk7XHJcbiAgICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLm9uTW91c2VFbnRlciksXHJcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLm9uUG9pbnRlckV2ZW50LCAhMCksXHJcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSksXHJcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Nb3VzZUxlYXZlKSxcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50V3JhcHBlckVsICYmIHRoaXMuY29udGVudFdyYXBwZXJFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKSxcclxuICAgICAgICAgICAgZS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKSxcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyICYmIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCksXHJcbiAgICAgICAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgJiYgdGhpcy5yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCksXHJcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZU1vdmUuY2FuY2VsKCksXHJcbiAgICAgICAgICAgIHRoaXMub25XaW5kb3dSZXNpemUuY2FuY2VsKCksXHJcbiAgICAgICAgICAgIHRoaXMub25TdG9wU2Nyb2xsaW5nLmNhbmNlbCgpLFxyXG4gICAgICAgICAgICB0aGlzLm9uTW91c2VFbnRlcmVkLmNhbmNlbCgpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIChlLnByb3RvdHlwZS51bk1vdW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICAoZS5wcm90b3R5cGUuaXNXaXRoaW5Cb3VuZHMgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubW91c2VYID49IGUubGVmdCAmJiB0aGlzLm1vdXNlWCA8PSBlLmxlZnQgKyBlLndpZHRoICYmIHRoaXMubW91c2VZID49IGUudG9wICYmIHRoaXMubW91c2VZIDw9IGUudG9wICsgZS5oZWlnaHQ7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGUucHJvdG90eXBlLmZpbmRDaGlsZCA9IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICBjb25zdCBpID0gZS5tYXRjaGVzIHx8IGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGUubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGUubXNNYXRjaGVzU2VsZWN0b3I7XHJcbiAgICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGUuY2hpbGRyZW4sIChlKSA9PiBpLmNhbGwoZSwgdCkpWzBdO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIChlLnJ0bEhlbHBlcnMgPSBudWxsKSxcclxuICAgICAgICAoZS5kZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgICAgICAgIGZvcmNlVmlzaWJsZTogITEsXHJcbiAgICAgICAgICBjbGlja09uVHJhY2s6ICEwLFxyXG4gICAgICAgICAgc2Nyb2xsYmFyTWluU2l6ZTogMjUsXHJcbiAgICAgICAgICBzY3JvbGxiYXJNYXhTaXplOiAwLFxyXG4gICAgICAgICAgYXJpYUxhYmVsOiAnc2Nyb2xsYWJsZSBjb250ZW50JyxcclxuICAgICAgICAgIGNsYXNzTmFtZXM6IHtcclxuICAgICAgICAgICAgY29udGVudEVsOiAnc2ltcGxlYmFyLWNvbnRlbnQnLFxyXG4gICAgICAgICAgICBjb250ZW50V3JhcHBlcjogJ3NpbXBsZWJhci1jb250ZW50LXdyYXBwZXInLFxyXG4gICAgICAgICAgICBvZmZzZXQ6ICdzaW1wbGViYXItb2Zmc2V0JyxcclxuICAgICAgICAgICAgbWFzazogJ3NpbXBsZWJhci1tYXNrJyxcclxuICAgICAgICAgICAgd3JhcHBlcjogJ3NpbXBsZWJhci13cmFwcGVyJyxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdzaW1wbGViYXItcGxhY2Vob2xkZXInLFxyXG4gICAgICAgICAgICBzY3JvbGxiYXI6ICdzaW1wbGViYXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgdHJhY2s6ICdzaW1wbGViYXItdHJhY2snLFxyXG4gICAgICAgICAgICBoZWlnaHRBdXRvT2JzZXJ2ZXJXcmFwcGVyRWw6ICdzaW1wbGViYXItaGVpZ2h0LWF1dG8tb2JzZXJ2ZXItd3JhcHBlcicsXHJcbiAgICAgICAgICAgIGhlaWdodEF1dG9PYnNlcnZlckVsOiAnc2ltcGxlYmFyLWhlaWdodC1hdXRvLW9ic2VydmVyJyxcclxuICAgICAgICAgICAgdmlzaWJsZTogJ3NpbXBsZWJhci12aXNpYmxlJyxcclxuICAgICAgICAgICAgaG9yaXpvbnRhbDogJ3NpbXBsZWJhci1ob3Jpem9udGFsJyxcclxuICAgICAgICAgICAgdmVydGljYWw6ICdzaW1wbGViYXItdmVydGljYWwnLFxyXG4gICAgICAgICAgICBob3ZlcjogJ3NpbXBsZWJhci1ob3ZlcicsXHJcbiAgICAgICAgICAgIGRyYWdnaW5nOiAnc2ltcGxlYmFyLWRyYWdnaW5nJyxcclxuICAgICAgICAgICAgc2Nyb2xsaW5nOiAnc2ltcGxlYmFyLXNjcm9sbGluZycsXHJcbiAgICAgICAgICAgIHNjcm9sbGFibGU6ICdzaW1wbGViYXItc2Nyb2xsYWJsZScsXHJcbiAgICAgICAgICAgIG1vdXNlRW50ZXJlZDogJ3NpbXBsZWJhci1tb3VzZS1lbnRlcmVkJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzY3JvbGxhYmxlTm9kZTogbnVsbCxcclxuICAgICAgICAgIGNvbnRlbnROb2RlOiBudWxsLFxyXG4gICAgICAgICAgYXV0b0hpZGU6ICEwLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIChlLmdldE9wdGlvbnMgPSBCKSxcclxuICAgICAgICAoZS5oZWxwZXJzID0gViksXHJcbiAgICAgICAgZVxyXG4gICAgICApO1xyXG4gICAgfSkoKSxcclxuICAgIFkgPSBYLmhlbHBlcnMsXHJcbiAgICBGID0gWS5nZXRPcHRpb25zLFxyXG4gICAgSSA9IFkuYWRkQ2xhc3NlcyxcclxuICAgICQgPSAoZnVuY3Rpb24gKHQpIHtcclxuICAgICAgZnVuY3Rpb24gaSgpIHtcclxuICAgICAgICBmb3IgKHZhciBlID0gW10sIHMgPSAwOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XHJcbiAgICAgICAgICBlW3NdID0gYXJndW1lbnRzW3NdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByID0gdC5hcHBseSh0aGlzLCBlKSB8fCB0aGlzO1xyXG4gICAgICAgIHJldHVybiBpLmluc3RhbmNlcy5zZXQoZVswXSwgciksIHI7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAoZnVuY3Rpb24gKHQsIGkpIHtcclxuICAgICAgICAgIGlmICgnZnVuY3Rpb24nICE9PSB0eXBlb2YgaSAmJiBudWxsICE9PSBpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYENsYXNzIGV4dGVuZHMgdmFsdWUgJHtTdHJpbmcoaSl9IGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZ1bmN0aW9uIHMoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSB0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZSh0LCBpKSwgKHQucHJvdG90eXBlID0gbnVsbCA9PT0gaSA/IE9iamVjdC5jcmVhdGUoaSkgOiAoKHMucHJvdG90eXBlID0gaS5wcm90b3R5cGUpLCBuZXcgcygpKSk7XHJcbiAgICAgICAgfSkoaSwgdCksXHJcbiAgICAgICAgKGkuaW5pdERPTUxvYWRlZEVsZW1lbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMuaW5pdERPTUxvYWRlZEVsZW1lbnRzKSxcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0aGlzLmluaXRET01Mb2FkZWRFbGVtZW50cyksXHJcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2ltcGxlYmFyXScpLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICdpbml0JyA9PT0gZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2ltcGxlYmFyJykgfHwgaS5pbnN0YW5jZXMuaGFzKGUpIHx8IG5ldyBpKGUsIEYoZS5hdHRyaWJ1dGVzKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIChpLnJlbW92ZU9ic2VydmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgbGV0IGU7XHJcbiAgICAgICAgICBudWxsID09PSAoZSA9IGkuZ2xvYmFsT2JzZXJ2ZXIpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB9KSxcclxuICAgICAgICAoaS5wcm90b3R5cGUuaW5pdERPTSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGxldCBlLFxyXG4gICAgICAgICAgICB0LFxyXG4gICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICBzID0gdGhpcztcclxuICAgICAgICAgIGlmICghQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKHRoaXMuZWwuY2hpbGRyZW4sIChlKSA9PiBlLmNsYXNzTGlzdC5jb250YWlucyhzLmNsYXNzTmFtZXMud3JhcHBlcikpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICAgIHRoaXMud3JhcHBlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRXcmFwcGVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgICAgIHRoaXMubWFza0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZWhvbGRlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodEF1dG9PYnNlcnZlcldyYXBwZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHRBdXRvT2JzZXJ2ZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICAgICAgSSh0aGlzLndyYXBwZXJFbCwgdGhpcy5jbGFzc05hbWVzLndyYXBwZXIpLFxyXG4gICAgICAgICAgICAgICAgSSh0aGlzLmNvbnRlbnRXcmFwcGVyRWwsIHRoaXMuY2xhc3NOYW1lcy5jb250ZW50V3JhcHBlciksXHJcbiAgICAgICAgICAgICAgICBJKHRoaXMub2Zmc2V0RWwsIHRoaXMuY2xhc3NOYW1lcy5vZmZzZXQpLFxyXG4gICAgICAgICAgICAgICAgSSh0aGlzLm1hc2tFbCwgdGhpcy5jbGFzc05hbWVzLm1hc2spLFxyXG4gICAgICAgICAgICAgICAgSSh0aGlzLmNvbnRlbnRFbCwgdGhpcy5jbGFzc05hbWVzLmNvbnRlbnRFbCksXHJcbiAgICAgICAgICAgICAgICBJKHRoaXMucGxhY2Vob2xkZXJFbCwgdGhpcy5jbGFzc05hbWVzLnBsYWNlaG9sZGVyKSxcclxuICAgICAgICAgICAgICAgIEkodGhpcy5oZWlnaHRBdXRvT2JzZXJ2ZXJXcmFwcGVyRWwsIHRoaXMuY2xhc3NOYW1lcy5oZWlnaHRBdXRvT2JzZXJ2ZXJXcmFwcGVyRWwpLFxyXG4gICAgICAgICAgICAgICAgSSh0aGlzLmhlaWdodEF1dG9PYnNlcnZlckVsLCB0aGlzLmNsYXNzTmFtZXMuaGVpZ2h0QXV0b09ic2VydmVyRWwpO1xyXG4gICAgICAgICAgICAgIHRoaXMuZWwuZmlyc3RDaGlsZDtcclxuXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHRoaXMuY29udGVudEVsLmFwcGVuZENoaWxkKHRoaXMuZWwuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb250ZW50V3JhcHBlckVsLmFwcGVuZENoaWxkKHRoaXMuY29udGVudEVsKSxcclxuICAgICAgICAgICAgICB0aGlzLm9mZnNldEVsLmFwcGVuZENoaWxkKHRoaXMuY29udGVudFdyYXBwZXJFbCksXHJcbiAgICAgICAgICAgICAgdGhpcy5tYXNrRWwuYXBwZW5kQ2hpbGQodGhpcy5vZmZzZXRFbCksXHJcbiAgICAgICAgICAgICAgdGhpcy5oZWlnaHRBdXRvT2JzZXJ2ZXJXcmFwcGVyRWwuYXBwZW5kQ2hpbGQodGhpcy5oZWlnaHRBdXRvT2JzZXJ2ZXJFbCksXHJcbiAgICAgICAgICAgICAgdGhpcy53cmFwcGVyRWwuYXBwZW5kQ2hpbGQodGhpcy5oZWlnaHRBdXRvT2JzZXJ2ZXJXcmFwcGVyRWwpLFxyXG4gICAgICAgICAgICAgIHRoaXMud3JhcHBlckVsLmFwcGVuZENoaWxkKHRoaXMubWFza0VsKSxcclxuICAgICAgICAgICAgICB0aGlzLndyYXBwZXJFbC5hcHBlbmRDaGlsZCh0aGlzLnBsYWNlaG9sZGVyRWwpLFxyXG4gICAgICAgICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyRWwpLFxyXG4gICAgICAgICAgICAgIG51bGwgPT09IChlID0gdGhpcy5jb250ZW50V3JhcHBlckVsKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKSxcclxuICAgICAgICAgICAgICBudWxsID09PSAodCA9IHRoaXMuY29udGVudFdyYXBwZXJFbCkgfHwgdm9pZCAwID09PSB0IHx8IHQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3JlZ2lvbicpLFxyXG4gICAgICAgICAgICAgIG51bGwgPT09IChpID0gdGhpcy5jb250ZW50V3JhcHBlckVsKSB8fCB2b2lkIDAgPT09IGkgfHwgaS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aGlzLm9wdGlvbnMuYXJpYUxhYmVsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghdGhpcy5heGlzLngudHJhY2suZWwgfHwgIXRoaXMuYXhpcy55LnRyYWNrLmVsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgICBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIEkociwgdGhpcy5jbGFzc05hbWVzLnRyYWNrKSxcclxuICAgICAgICAgICAgICBJKGwsIHRoaXMuY2xhc3NOYW1lcy5zY3JvbGxiYXIpLFxyXG4gICAgICAgICAgICAgIHIuYXBwZW5kQ2hpbGQobCksXHJcbiAgICAgICAgICAgICAgKHRoaXMuYXhpcy54LnRyYWNrLmVsID0gci5jbG9uZU5vZGUoITApKSxcclxuICAgICAgICAgICAgICBJKHRoaXMuYXhpcy54LnRyYWNrLmVsLCB0aGlzLmNsYXNzTmFtZXMuaG9yaXpvbnRhbCksXHJcbiAgICAgICAgICAgICAgKHRoaXMuYXhpcy55LnRyYWNrLmVsID0gci5jbG9uZU5vZGUoITApKSxcclxuICAgICAgICAgICAgICBJKHRoaXMuYXhpcy55LnRyYWNrLmVsLCB0aGlzLmNsYXNzTmFtZXMudmVydGljYWwpLFxyXG4gICAgICAgICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5heGlzLngudHJhY2suZWwpLFxyXG4gICAgICAgICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5heGlzLnkudHJhY2suZWwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgWC5wcm90b3R5cGUuaW5pdERPTS5jYWxsKHRoaXMpLCB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnZGF0YS1zaW1wbGViYXInLCAnaW5pdCcpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIChpLnByb3RvdHlwZS51bk1vdW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgWC5wcm90b3R5cGUudW5Nb3VudC5jYWxsKHRoaXMpLCBpLmluc3RhbmNlcy5kZWxldGUodGhpcy5lbCk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKGkuaW5pdEh0bWxBcGkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAodGhpcy5pbml0RE9NTG9hZGVkRWxlbWVudHMgPSB0aGlzLmluaXRET01Mb2FkZWRFbGVtZW50cy5iaW5kKHRoaXMpKSxcclxuICAgICAgICAgICAgJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICYmICgodGhpcy5nbG9iYWxPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGkuaGFuZGxlTXV0YXRpb25zKSksIHRoaXMuZ2xvYmFsT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCwgeyBjaGlsZExpc3Q6ICEwLCBzdWJ0cmVlOiAhMCB9KSksXHJcbiAgICAgICAgICAgICdjb21wbGV0ZScgPT09IGRvY3VtZW50LnJlYWR5U3RhdGUgfHwgKCdsb2FkaW5nJyAhPT0gZG9jdW1lbnQucmVhZHlTdGF0ZSAmJiAhZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsKVxyXG4gICAgICAgICAgICAgID8gd2luZG93LnNldFRpbWVvdXQodGhpcy5pbml0RE9NTG9hZGVkRWxlbWVudHMpXHJcbiAgICAgICAgICAgICAgOiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMuaW5pdERPTUxvYWRlZEVsZW1lbnRzKSwgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0aGlzLmluaXRET01Mb2FkZWRFbGVtZW50cykpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIChpLmhhbmRsZU11dGF0aW9ucyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBlLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgZS5hZGRlZE5vZGVzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAxID09PSBlLm5vZGVUeXBlICYmXHJcbiAgICAgICAgICAgICAgICAoZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2ltcGxlYmFyJylcclxuICAgICAgICAgICAgICAgICAgPyAhaS5pbnN0YW5jZXMuaGFzKGUpICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhlKSAmJiBuZXcgaShlLCBGKGUuYXR0cmlidXRlcykpXHJcbiAgICAgICAgICAgICAgICAgIDogZS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zaW1wbGViYXJdJykuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJ2luaXQnICE9PSBlLmdldEF0dHJpYnV0ZSgnZGF0YS1zaW1wbGViYXInKSAmJiAhaS5pbnN0YW5jZXMuaGFzKGUpICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhlKSAmJiBuZXcgaShlLCBGKGUuYXR0cmlidXRlcykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgZS5yZW1vdmVkTm9kZXMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgMSA9PT0gZS5ub2RlVHlwZSAmJlxyXG4gICAgICAgICAgICAgICAgICAoJ2luaXQnID09PSBlLmdldEF0dHJpYnV0ZSgnZGF0YS1zaW1wbGViYXInKVxyXG4gICAgICAgICAgICAgICAgICAgID8gaS5pbnN0YW5jZXMuaGFzKGUpICYmICFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMoZSkgJiYgaS5pbnN0YW5jZXMuZ2V0KGUpLnVuTW91bnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNpbXBsZWJhcj1cImluaXRcIl0nKSwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaS5pbnN0YW5jZXMuaGFzKGUpICYmICFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMoZSkgJiYgaS5pbnN0YW5jZXMuZ2V0KGUpLnVuTW91bnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIChpLmluc3RhbmNlcyA9IG5ldyBXZWFrTWFwKCkpLFxyXG4gICAgICAgIGlcclxuICAgICAgKTtcclxuICAgIH0pKFgpO1xyXG4gIHJldHVybiB0ICYmICQuaW5pdEh0bWxBcGkoKSwgJDtcclxufSkoKTtcclxuIl0sImZpbGUiOiJzY3JvbGxiYXIuanMifQ==
