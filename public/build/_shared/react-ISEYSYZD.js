import {
  __decorateClass,
  __spreadProps,
  __spreadValues,
  __yieldStar,
  getBasePath
} from "/build/_shared/chunk-7H7CYOWP.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __export,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@lit/reactive-element/css-tag.js
var t = globalThis;
var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s = Symbol();
var o = /* @__PURE__ */ new WeakMap();
var n = class {
  constructor(t8, e13, o15) {
    if (this._$cssResult$ = true, o15 !== s)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t8, this.t = e13;
  }
  get styleSheet() {
    let t8 = this.o;
    const s6 = this.t;
    if (e && void 0 === t8) {
      const e13 = void 0 !== s6 && 1 === s6.length;
      e13 && (t8 = o.get(s6)), void 0 === t8 && ((this.o = t8 = new CSSStyleSheet()).replaceSync(this.cssText), e13 && o.set(s6, t8));
    }
    return t8;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t8) => new n("string" == typeof t8 ? t8 : t8 + "", void 0, s);
var i = (t8, ...e13) => {
  const o15 = 1 === t8.length ? t8[0] : e13.reduce((e14, s6, o16) => e14 + ((t9) => {
    if (true === t9._$cssResult$)
      return t9.cssText;
    if ("number" == typeof t9)
      return t9;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t9 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s6) + t8[o16 + 1], t8[0]);
  return new n(o15, t8, s);
};
var S = (s6, o15) => {
  if (e)
    s6.adoptedStyleSheets = o15.map((t8) => t8 instanceof CSSStyleSheet ? t8 : t8.styleSheet);
  else
    for (const e13 of o15) {
      const o16 = document.createElement("style"), n11 = t.litNonce;
      void 0 !== n11 && o16.setAttribute("nonce", n11), o16.textContent = e13.cssText, s6.appendChild(o16);
    }
};
var c = e ? (t8) => t8 : (t8) => t8 instanceof CSSStyleSheet ? ((t9) => {
  let e13 = "";
  for (const s6 of t9.cssRules)
    e13 += s6.cssText;
  return r(e13);
})(t8) : t8;

// node_modules/@lit/reactive-element/reactive-element.js
var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: r2, getOwnPropertyNames: h, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
var a = globalThis;
var c2 = a.trustedTypes;
var l = c2 ? c2.emptyScript : "";
var p = a.reactiveElementPolyfillSupport;
var d = (t8, s6) => t8;
var u = { toAttribute(t8, s6) {
  switch (s6) {
    case Boolean:
      t8 = t8 ? l : null;
      break;
    case Object:
    case Array:
      t8 = null == t8 ? t8 : JSON.stringify(t8);
  }
  return t8;
}, fromAttribute(t8, s6) {
  let i6 = t8;
  switch (s6) {
    case Boolean:
      i6 = null !== t8;
      break;
    case Number:
      i6 = null === t8 ? null : Number(t8);
      break;
    case Object:
    case Array:
      try {
        i6 = JSON.parse(t8);
      } catch (t9) {
        i6 = null;
      }
  }
  return i6;
} };
var f = (t8, s6) => !i2(t8, s6);
var y = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var b = class extends HTMLElement {
  static addInitializer(t8) {
    this._$Ei(), (this.l ??= []).push(t8);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t8, s6 = y) {
    if (s6.state && (s6.attribute = false), this._$Ei(), this.elementProperties.set(t8, s6), !s6.noAccessor) {
      const i6 = Symbol(), r10 = this.getPropertyDescriptor(t8, i6, s6);
      void 0 !== r10 && e2(this.prototype, t8, r10);
    }
  }
  static getPropertyDescriptor(t8, s6, i6) {
    const { get: e13, set: h5 } = r2(this.prototype, t8) ?? { get() {
      return this[s6];
    }, set(t9) {
      this[s6] = t9;
    } };
    return { get() {
      return e13?.call(this);
    }, set(s7) {
      const r10 = e13?.call(this);
      h5.call(this, s7), this.requestUpdate(t8, r10, i6);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t8) {
    return this.elementProperties.get(t8) ?? y;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d("elementProperties")))
      return;
    const t8 = n2(this);
    t8.finalize(), void 0 !== t8.l && (this.l = [...t8.l]), this.elementProperties = new Map(t8.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d("finalized")))
      return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
      const t9 = this.properties, s6 = [...h(t9), ...o2(t9)];
      for (const i6 of s6)
        this.createProperty(i6, t9[i6]);
    }
    const t8 = this[Symbol.metadata];
    if (null !== t8) {
      const s6 = litPropertyMetadata.get(t8);
      if (void 0 !== s6)
        for (const [t9, i6] of s6)
          this.elementProperties.set(t9, i6);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t9, s6] of this.elementProperties) {
      const i6 = this._$Eu(t9, s6);
      void 0 !== i6 && this._$Eh.set(i6, t9);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s6) {
    const i6 = [];
    if (Array.isArray(s6)) {
      const e13 = new Set(s6.flat(1 / 0).reverse());
      for (const s7 of e13)
        i6.unshift(c(s7));
    } else
      void 0 !== s6 && i6.push(c(s6));
    return i6;
  }
  static _$Eu(t8, s6) {
    const i6 = s6.attribute;
    return false === i6 ? void 0 : "string" == typeof i6 ? i6 : "string" == typeof t8 ? t8.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t8) => this.enableUpdating = t8), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t8) => t8(this));
  }
  addController(t8) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t8), void 0 !== this.renderRoot && this.isConnected && t8.hostConnected?.();
  }
  removeController(t8) {
    this._$EO?.delete(t8);
  }
  _$E_() {
    const t8 = /* @__PURE__ */ new Map(), s6 = this.constructor.elementProperties;
    for (const i6 of s6.keys())
      this.hasOwnProperty(i6) && (t8.set(i6, this[i6]), delete this[i6]);
    t8.size > 0 && (this._$Ep = t8);
  }
  createRenderRoot() {
    const t8 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S(t8, this.constructor.elementStyles), t8;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t8) => t8.hostConnected?.());
  }
  enableUpdating(t8) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t8) => t8.hostDisconnected?.());
  }
  attributeChangedCallback(t8, s6, i6) {
    this._$AK(t8, i6);
  }
  _$EC(t8, s6) {
    const i6 = this.constructor.elementProperties.get(t8), e13 = this.constructor._$Eu(t8, i6);
    if (void 0 !== e13 && true === i6.reflect) {
      const r10 = (void 0 !== i6.converter?.toAttribute ? i6.converter : u).toAttribute(s6, i6.type);
      this._$Em = t8, null == r10 ? this.removeAttribute(e13) : this.setAttribute(e13, r10), this._$Em = null;
    }
  }
  _$AK(t8, s6) {
    const i6 = this.constructor, e13 = i6._$Eh.get(t8);
    if (void 0 !== e13 && this._$Em !== e13) {
      const t9 = i6.getPropertyOptions(e13), r10 = "function" == typeof t9.converter ? { fromAttribute: t9.converter } : void 0 !== t9.converter?.fromAttribute ? t9.converter : u;
      this._$Em = e13, this[e13] = r10.fromAttribute(s6, t9.type), this._$Em = null;
    }
  }
  requestUpdate(t8, s6, i6) {
    if (void 0 !== t8) {
      if (i6 ??= this.constructor.getPropertyOptions(t8), !(i6.hasChanged ?? f)(this[t8], s6))
        return;
      this.P(t8, s6, i6);
    }
    false === this.isUpdatePending && (this._$ES = this._$ET());
  }
  P(t8, s6, i6) {
    this._$AL.has(t8) || this._$AL.set(t8, s6), true === i6.reflect && this._$Em !== t8 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t8);
  }
  async _$ET() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t9) {
      Promise.reject(t9);
    }
    const t8 = this.scheduleUpdate();
    return null != t8 && await t8, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t10, s7] of this._$Ep)
          this[t10] = s7;
        this._$Ep = void 0;
      }
      const t9 = this.constructor.elementProperties;
      if (t9.size > 0)
        for (const [s7, i6] of t9)
          true !== i6.wrapped || this._$AL.has(s7) || void 0 === this[s7] || this.P(s7, this[s7], i6);
    }
    let t8 = false;
    const s6 = this._$AL;
    try {
      t8 = this.shouldUpdate(s6), t8 ? (this.willUpdate(s6), this._$EO?.forEach((t9) => t9.hostUpdate?.()), this.update(s6)) : this._$EU();
    } catch (s7) {
      throw t8 = false, this._$EU(), s7;
    }
    t8 && this._$AE(s6);
  }
  willUpdate(t8) {
  }
  _$AE(t8) {
    this._$EO?.forEach((t9) => t9.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t8)), this.updated(t8);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t8) {
    return true;
  }
  update(t8) {
    this._$Ej &&= this._$Ej.forEach((t9) => this._$EC(t9, this[t9])), this._$EU();
  }
  updated(t8) {
  }
  firstUpdated(t8) {
  }
};
b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d("elementProperties")] = /* @__PURE__ */ new Map(), b[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: b }), (a.reactiveElementVersions ??= []).push("2.0.4");

// node_modules/lit-html/lit-html.js
var t2 = globalThis;
var i3 = t2.trustedTypes;
var s2 = i3 ? i3.createPolicy("lit-html", { createHTML: (t8) => t8 }) : void 0;
var e3 = "$lit$";
var h2 = `lit$${Math.random().toFixed(9).slice(2)}$`;
var o3 = "?" + h2;
var n3 = `<${o3}>`;
var r3 = document;
var l2 = () => r3.createComment("");
var c3 = (t8) => null === t8 || "object" != typeof t8 && "function" != typeof t8;
var a2 = Array.isArray;
var u2 = (t8) => a2(t8) || "function" == typeof t8?.[Symbol.iterator];
var d2 = "[ 	\n\f\r]";
var f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var v = /-->/g;
var _ = />/g;
var m = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var p2 = /'/g;
var g = /"/g;
var $ = /^(?:script|style|textarea|title)$/i;
var y2 = (t8) => (i6, ...s6) => ({ _$litType$: t8, strings: i6, values: s6 });
var x = y2(1);
var b2 = y2(2);
var w = Symbol.for("lit-noChange");
var T = Symbol.for("lit-nothing");
var A = /* @__PURE__ */ new WeakMap();
var E = r3.createTreeWalker(r3, 129);
function C(t8, i6) {
  if (!Array.isArray(t8) || !t8.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return void 0 !== s2 ? s2.createHTML(i6) : i6;
}
var P = (t8, i6) => {
  const s6 = t8.length - 1, o15 = [];
  let r10, l5 = 2 === i6 ? "<svg>" : "", c5 = f2;
  for (let i7 = 0; i7 < s6; i7++) {
    const s7 = t8[i7];
    let a4, u5, d3 = -1, y3 = 0;
    for (; y3 < s7.length && (c5.lastIndex = y3, u5 = c5.exec(s7), null !== u5); )
      y3 = c5.lastIndex, c5 === f2 ? "!--" === u5[1] ? c5 = v : void 0 !== u5[1] ? c5 = _ : void 0 !== u5[2] ? ($.test(u5[2]) && (r10 = RegExp("</" + u5[2], "g")), c5 = m) : void 0 !== u5[3] && (c5 = m) : c5 === m ? ">" === u5[0] ? (c5 = r10 ?? f2, d3 = -1) : void 0 === u5[1] ? d3 = -2 : (d3 = c5.lastIndex - u5[2].length, a4 = u5[1], c5 = void 0 === u5[3] ? m : '"' === u5[3] ? g : p2) : c5 === g || c5 === p2 ? c5 = m : c5 === v || c5 === _ ? c5 = f2 : (c5 = m, r10 = void 0);
    const x2 = c5 === m && t8[i7 + 1].startsWith("/>") ? " " : "";
    l5 += c5 === f2 ? s7 + n3 : d3 >= 0 ? (o15.push(a4), s7.slice(0, d3) + e3 + s7.slice(d3) + h2 + x2) : s7 + h2 + (-2 === d3 ? i7 : x2);
  }
  return [C(t8, l5 + (t8[s6] || "<?>") + (2 === i6 ? "</svg>" : "")), o15];
};
var V = class {
  constructor({ strings: t8, _$litType$: s6 }, n11) {
    let r10;
    this.parts = [];
    let c5 = 0, a4 = 0;
    const u5 = t8.length - 1, d3 = this.parts, [f5, v2] = P(t8, s6);
    if (this.el = V.createElement(f5, n11), E.currentNode = this.el.content, 2 === s6) {
      const t9 = this.el.content.firstChild;
      t9.replaceWith(...t9.childNodes);
    }
    for (; null !== (r10 = E.nextNode()) && d3.length < u5; ) {
      if (1 === r10.nodeType) {
        if (r10.hasAttributes())
          for (const t9 of r10.getAttributeNames())
            if (t9.endsWith(e3)) {
              const i6 = v2[a4++], s7 = r10.getAttribute(t9).split(h2), e13 = /([.?@])?(.*)/.exec(i6);
              d3.push({ type: 1, index: c5, name: e13[2], strings: s7, ctor: "." === e13[1] ? k : "?" === e13[1] ? H : "@" === e13[1] ? I : R }), r10.removeAttribute(t9);
            } else
              t9.startsWith(h2) && (d3.push({ type: 6, index: c5 }), r10.removeAttribute(t9));
        if ($.test(r10.tagName)) {
          const t9 = r10.textContent.split(h2), s7 = t9.length - 1;
          if (s7 > 0) {
            r10.textContent = i3 ? i3.emptyScript : "";
            for (let i6 = 0; i6 < s7; i6++)
              r10.append(t9[i6], l2()), E.nextNode(), d3.push({ type: 2, index: ++c5 });
            r10.append(t9[s7], l2());
          }
        }
      } else if (8 === r10.nodeType)
        if (r10.data === o3)
          d3.push({ type: 2, index: c5 });
        else {
          let t9 = -1;
          for (; -1 !== (t9 = r10.data.indexOf(h2, t9 + 1)); )
            d3.push({ type: 7, index: c5 }), t9 += h2.length - 1;
        }
      c5++;
    }
  }
  static createElement(t8, i6) {
    const s6 = r3.createElement("template");
    return s6.innerHTML = t8, s6;
  }
};
function N(t8, i6, s6 = t8, e13) {
  if (i6 === w)
    return i6;
  let h5 = void 0 !== e13 ? s6._$Co?.[e13] : s6._$Cl;
  const o15 = c3(i6) ? void 0 : i6._$litDirective$;
  return h5?.constructor !== o15 && (h5?._$AO?.(false), void 0 === o15 ? h5 = void 0 : (h5 = new o15(t8), h5._$AT(t8, s6, e13)), void 0 !== e13 ? (s6._$Co ??= [])[e13] = h5 : s6._$Cl = h5), void 0 !== h5 && (i6 = N(t8, h5._$AS(t8, i6.values), h5, e13)), i6;
}
var S2 = class {
  constructor(t8, i6) {
    this._$AV = [], this._$AN = void 0, this._$AD = t8, this._$AM = i6;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t8) {
    const { el: { content: i6 }, parts: s6 } = this._$AD, e13 = (t8?.creationScope ?? r3).importNode(i6, true);
    E.currentNode = e13;
    let h5 = E.nextNode(), o15 = 0, n11 = 0, l5 = s6[0];
    for (; void 0 !== l5; ) {
      if (o15 === l5.index) {
        let i7;
        2 === l5.type ? i7 = new M(h5, h5.nextSibling, this, t8) : 1 === l5.type ? i7 = new l5.ctor(h5, l5.name, l5.strings, this, t8) : 6 === l5.type && (i7 = new L(h5, this, t8)), this._$AV.push(i7), l5 = s6[++n11];
      }
      o15 !== l5?.index && (h5 = E.nextNode(), o15++);
    }
    return E.currentNode = r3, e13;
  }
  p(t8) {
    let i6 = 0;
    for (const s6 of this._$AV)
      void 0 !== s6 && (void 0 !== s6.strings ? (s6._$AI(t8, s6, i6), i6 += s6.strings.length - 2) : s6._$AI(t8[i6])), i6++;
  }
};
var M = class {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t8, i6, s6, e13) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t8, this._$AB = i6, this._$AM = s6, this.options = e13, this._$Cv = e13?.isConnected ?? true;
  }
  get parentNode() {
    let t8 = this._$AA.parentNode;
    const i6 = this._$AM;
    return void 0 !== i6 && 11 === t8?.nodeType && (t8 = i6.parentNode), t8;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t8, i6 = this) {
    t8 = N(this, t8, i6), c3(t8) ? t8 === T || null == t8 || "" === t8 ? (this._$AH !== T && this._$AR(), this._$AH = T) : t8 !== this._$AH && t8 !== w && this._(t8) : void 0 !== t8._$litType$ ? this.$(t8) : void 0 !== t8.nodeType ? this.T(t8) : u2(t8) ? this.k(t8) : this._(t8);
  }
  S(t8) {
    return this._$AA.parentNode.insertBefore(t8, this._$AB);
  }
  T(t8) {
    this._$AH !== t8 && (this._$AR(), this._$AH = this.S(t8));
  }
  _(t8) {
    this._$AH !== T && c3(this._$AH) ? this._$AA.nextSibling.data = t8 : this.T(r3.createTextNode(t8)), this._$AH = t8;
  }
  $(t8) {
    const { values: i6, _$litType$: s6 } = t8, e13 = "number" == typeof s6 ? this._$AC(t8) : (void 0 === s6.el && (s6.el = V.createElement(C(s6.h, s6.h[0]), this.options)), s6);
    if (this._$AH?._$AD === e13)
      this._$AH.p(i6);
    else {
      const t9 = new S2(e13, this), s7 = t9.u(this.options);
      t9.p(i6), this.T(s7), this._$AH = t9;
    }
  }
  _$AC(t8) {
    let i6 = A.get(t8.strings);
    return void 0 === i6 && A.set(t8.strings, i6 = new V(t8)), i6;
  }
  k(t8) {
    a2(this._$AH) || (this._$AH = [], this._$AR());
    const i6 = this._$AH;
    let s6, e13 = 0;
    for (const h5 of t8)
      e13 === i6.length ? i6.push(s6 = new M(this.S(l2()), this.S(l2()), this, this.options)) : s6 = i6[e13], s6._$AI(h5), e13++;
    e13 < i6.length && (this._$AR(s6 && s6._$AB.nextSibling, e13), i6.length = e13);
  }
  _$AR(t8 = this._$AA.nextSibling, i6) {
    for (this._$AP?.(false, true, i6); t8 && t8 !== this._$AB; ) {
      const i7 = t8.nextSibling;
      t8.remove(), t8 = i7;
    }
  }
  setConnected(t8) {
    void 0 === this._$AM && (this._$Cv = t8, this._$AP?.(t8));
  }
};
var R = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t8, i6, s6, e13, h5) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t8, this.name = i6, this._$AM = e13, this.options = h5, s6.length > 2 || "" !== s6[0] || "" !== s6[1] ? (this._$AH = Array(s6.length - 1).fill(new String()), this.strings = s6) : this._$AH = T;
  }
  _$AI(t8, i6 = this, s6, e13) {
    const h5 = this.strings;
    let o15 = false;
    if (void 0 === h5)
      t8 = N(this, t8, i6, 0), o15 = !c3(t8) || t8 !== this._$AH && t8 !== w, o15 && (this._$AH = t8);
    else {
      const e14 = t8;
      let n11, r10;
      for (t8 = h5[0], n11 = 0; n11 < h5.length - 1; n11++)
        r10 = N(this, e14[s6 + n11], i6, n11), r10 === w && (r10 = this._$AH[n11]), o15 ||= !c3(r10) || r10 !== this._$AH[n11], r10 === T ? t8 = T : t8 !== T && (t8 += (r10 ?? "") + h5[n11 + 1]), this._$AH[n11] = r10;
    }
    o15 && !e13 && this.j(t8);
  }
  j(t8) {
    t8 === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t8 ?? "");
  }
};
var k = class extends R {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t8) {
    this.element[this.name] = t8 === T ? void 0 : t8;
  }
};
var H = class extends R {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t8) {
    this.element.toggleAttribute(this.name, !!t8 && t8 !== T);
  }
};
var I = class extends R {
  constructor(t8, i6, s6, e13, h5) {
    super(t8, i6, s6, e13, h5), this.type = 5;
  }
  _$AI(t8, i6 = this) {
    if ((t8 = N(this, t8, i6, 0) ?? T) === w)
      return;
    const s6 = this._$AH, e13 = t8 === T && s6 !== T || t8.capture !== s6.capture || t8.once !== s6.once || t8.passive !== s6.passive, h5 = t8 !== T && (s6 === T || e13);
    e13 && this.element.removeEventListener(this.name, this, s6), h5 && this.element.addEventListener(this.name, this, t8), this._$AH = t8;
  }
  handleEvent(t8) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t8) : this._$AH.handleEvent(t8);
  }
};
var L = class {
  constructor(t8, i6, s6) {
    this.element = t8, this.type = 6, this._$AN = void 0, this._$AM = i6, this.options = s6;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t8) {
    N(this, t8);
  }
};
var z = { P: e3, A: h2, C: o3, M: 1, L: P, R: S2, D: u2, V: N, I: M, H: R, N: H, U: I, B: k, F: L };
var Z = t2.litHtmlPolyfillSupport;
Z?.(V, M), (t2.litHtmlVersions ??= []).push("3.1.4");
var j = (t8, i6, s6) => {
  const e13 = s6?.renderBefore ?? i6;
  let h5 = e13._$litPart$;
  if (void 0 === h5) {
    const t9 = s6?.renderBefore ?? null;
    e13._$litPart$ = h5 = new M(i6.insertBefore(l2(), t9), t9, void 0, s6 ?? {});
  }
  return h5._$AI(t8), h5;
};

// node_modules/lit-element/lit-element.js
var s3 = class extends b {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t8 = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t8.firstChild, t8;
  }
  update(t8) {
    const i6 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t8), this._$Do = j(i6, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return w;
  }
};
s3._$litElement$ = true, s3["finalized", "finalized"] = true, globalThis.litElementHydrateSupport?.({ LitElement: s3 });
var r4 = globalThis.litElementPolyfillSupport;
r4?.({ LitElement: s3 });
(globalThis.litElementVersions ??= []).push("4.0.6");

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.V2OL7VMD.js
var tag_styles_default = i`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6I2T3DLI.js
var icon_button_styles_default = i`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js
var library = {
  name: "default",
  resolver: (name) => getBasePath(`assets/icons/${name}.svg`)
};
var library_default_default = library;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js
var icons = {
  caret: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,
  check: `
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
  "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  copy: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,
  eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
  "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
  eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
  "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,
  indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
  "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
  "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
  radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
  "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
  "x-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
  "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
};
var systemLibrary = {
  name: "system",
  resolver: (name) => {
    if (name in icons) {
      return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
    }
    return "";
  }
};
var library_system_default = systemLibrary;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js
var registry = [library_default_default, library_system_default];
var watchedIcons = [];
function watchIcon(icon) {
  watchedIcons.push(icon);
}
function unwatchIcon(icon) {
  watchedIcons = watchedIcons.filter((el) => el !== icon);
}
function getIconLibrary(name) {
  return registry.find((lib) => lib.name === name);
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js
var icon_styles_default = i`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2FB5TK5H.js
function watch(propertyName, options) {
  const resolvedOptions = __spreadValues({
    waitUntilFirstUpdate: false
  }, options);
  return (proto, decoratedFnName) => {
    const { update: update2 } = proto;
    const watchedProperties = Array.isArray(propertyName) ? propertyName : [propertyName];
    proto.update = function(changedProps) {
      watchedProperties.forEach((property) => {
        const key = property;
        if (changedProps.has(key)) {
          const oldValue = changedProps.get(key);
          const newValue = this[key];
          if (oldValue !== newValue) {
            if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
              this[decoratedFnName](oldValue, newValue);
            }
          }
        }
      });
      update2.call(this, changedProps);
    };
  };
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js
var component_styles_default = i`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;

// node_modules/@lit/reactive-element/decorators/property.js
var o4 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
var r5 = (t8 = o4, e13, r10) => {
  const { kind: n11, metadata: i6 } = r10;
  let s6 = globalThis.litPropertyMetadata.get(i6);
  if (void 0 === s6 && globalThis.litPropertyMetadata.set(i6, s6 = /* @__PURE__ */ new Map()), s6.set(r10.name, t8), "accessor" === n11) {
    const { name: o15 } = r10;
    return { set(r11) {
      const n12 = e13.get.call(this);
      e13.set.call(this, r11), this.requestUpdate(o15, n12, t8);
    }, init(e14) {
      return void 0 !== e14 && this.P(o15, void 0, t8), e14;
    } };
  }
  if ("setter" === n11) {
    const { name: o15 } = r10;
    return function(r11) {
      const n12 = this[o15];
      e13.call(this, r11), this.requestUpdate(o15, n12, t8);
    };
  }
  throw Error("Unsupported decorator location: " + n11);
};
function n4(t8) {
  return (e13, o15) => "object" == typeof o15 ? r5(t8, e13, o15) : ((t9, e14, o16) => {
    const r10 = e14.hasOwnProperty(o16);
    return e14.constructor.createProperty(o16, r10 ? { ...t9, wrapped: true } : t9), r10 ? Object.getOwnPropertyDescriptor(e14, o16) : void 0;
  })(t8, e13, o15);
}

// node_modules/@lit/reactive-element/decorators/state.js
function r6(r10) {
  return n4({ ...r10, state: true, attribute: false });
}

// node_modules/@lit/reactive-element/decorators/event-options.js
function t3(t8) {
  return (n11, o15) => {
    const c5 = "function" == typeof n11 ? n11 : n11[o15];
    Object.assign(c5, t8);
  };
}

// node_modules/@lit/reactive-element/decorators/base.js
var e4 = (e13, t8, c5) => (c5.configurable = true, c5.enumerable = true, Reflect.decorate && "object" != typeof t8 && Object.defineProperty(e13, t8, c5), c5);

// node_modules/@lit/reactive-element/decorators/query.js
function e5(e13, r10) {
  return (n11, s6, i6) => {
    const o15 = (t8) => t8.renderRoot?.querySelector(e13) ?? null;
    if (r10) {
      const { get: e14, set: r11 } = "object" == typeof s6 ? n11 : i6 ?? (() => {
        const t8 = Symbol();
        return { get() {
          return this[t8];
        }, set(e15) {
          this[t8] = e15;
        } };
      })();
      return e4(n11, s6, { get() {
        let t8 = e14.call(this);
        return void 0 === t8 && (t8 = o15(this), (null !== t8 || this.hasUpdated) && r11.call(this, t8)), t8;
      } });
    }
    return e4(n11, s6, { get() {
      return o15(this);
    } });
  };
}

// node_modules/@lit/reactive-element/decorators/query-async.js
function r7(r10) {
  return (n11, e13) => e4(n11, e13, { async get() {
    return await this.updateComplete, this.renderRoot?.querySelector(r10) ?? null;
  } });
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.5THGRZAA.js
var ShoelaceElement = class extends s3 {
  constructor() {
    super();
    Object.entries(this.constructor.dependencies).forEach(([name, component]) => {
      this.constructor.define(name, component);
    });
  }
  emit(name, options) {
    const event = new CustomEvent(name, __spreadValues({
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: {}
    }, options));
    this.dispatchEvent(event);
    return event;
  }
  /* eslint-enable */
  static define(name, elementConstructor = this, options = {}) {
    const currentlyRegisteredConstructor = customElements.get(name);
    if (!currentlyRegisteredConstructor) {
      try {
        customElements.define(name, elementConstructor, options);
      } catch (_err) {
        customElements.define(name, class extends elementConstructor {
        }, options);
      }
      return;
    }
    let newVersion = " (unknown version)";
    let existingVersion = newVersion;
    if ("version" in elementConstructor && elementConstructor.version) {
      newVersion = " v" + elementConstructor.version;
    }
    if ("version" in currentlyRegisteredConstructor && currentlyRegisteredConstructor.version) {
      existingVersion = " v" + currentlyRegisteredConstructor.version;
    }
    if (newVersion && existingVersion && newVersion === existingVersion) {
      return;
    }
    console.warn(
      `Attempted to register <${name}>${newVersion}, but <${name}>${existingVersion} has already been registered.`
    );
  }
};
ShoelaceElement.version = "2.16.0";
ShoelaceElement.dependencies = {};
__decorateClass([
  n4()
], ShoelaceElement.prototype, "dir", 2);
__decorateClass([
  n4()
], ShoelaceElement.prototype, "lang", 2);

// node_modules/lit-html/directive-helpers.js
var { I: t4 } = z;
var e6 = (o15, t8) => void 0 === t8 ? void 0 !== o15?._$litType$ : o15?._$litType$ === t8;
var f3 = (o15) => void 0 === o15.strings;
var u3 = {};
var m2 = (o15, t8 = u3) => o15._$AH = t8;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ALSPWWWG.js
var CACHEABLE_ERROR = Symbol();
var RETRYABLE_ERROR = Symbol();
var parser;
var iconCache = /* @__PURE__ */ new Map();
var SlIcon = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.initialRender = false;
    this.svg = null;
    this.label = "";
    this.library = "default";
  }
  /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
  async resolveIcon(url, library2) {
    var _a;
    let fileData;
    if (library2 == null ? void 0 : library2.spriteSheet) {
      this.svg = x`<svg part="svg">
        <use part="use" href="${url}"></use>
      </svg>`;
      await this.updateComplete;
      const svg = this.shadowRoot.querySelector("[part='svg']");
      if (typeof library2.mutator === "function") {
        library2.mutator(svg);
      }
      return this.svg;
    }
    try {
      fileData = await fetch(url, { mode: "cors" });
      if (!fileData.ok)
        return fileData.status === 410 ? CACHEABLE_ERROR : RETRYABLE_ERROR;
    } catch (e13) {
      return RETRYABLE_ERROR;
    }
    try {
      const div = document.createElement("div");
      div.innerHTML = await fileData.text();
      const svg = div.firstElementChild;
      if (((_a = svg == null ? void 0 : svg.tagName) == null ? void 0 : _a.toLowerCase()) !== "svg")
        return CACHEABLE_ERROR;
      if (!parser)
        parser = new DOMParser();
      const doc = parser.parseFromString(svg.outerHTML, "text/html");
      const svgEl = doc.body.querySelector("svg");
      if (!svgEl)
        return CACHEABLE_ERROR;
      svgEl.part.add("svg");
      return document.adoptNode(svgEl);
    } catch (e13) {
      return CACHEABLE_ERROR;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    watchIcon(this);
  }
  firstUpdated() {
    this.initialRender = true;
    this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unwatchIcon(this);
  }
  getIconSource() {
    const library2 = getIconLibrary(this.library);
    if (this.name && library2) {
      return {
        url: library2.resolver(this.name),
        fromLibrary: true
      };
    }
    return {
      url: this.src,
      fromLibrary: false
    };
  }
  handleLabelChange() {
    const hasLabel = typeof this.label === "string" && this.label.length > 0;
    if (hasLabel) {
      this.setAttribute("role", "img");
      this.setAttribute("aria-label", this.label);
      this.removeAttribute("aria-hidden");
    } else {
      this.removeAttribute("role");
      this.removeAttribute("aria-label");
      this.setAttribute("aria-hidden", "true");
    }
  }
  async setIcon() {
    var _a;
    const { url, fromLibrary } = this.getIconSource();
    const library2 = fromLibrary ? getIconLibrary(this.library) : void 0;
    if (!url) {
      this.svg = null;
      return;
    }
    let iconResolver = iconCache.get(url);
    if (!iconResolver) {
      iconResolver = this.resolveIcon(url, library2);
      iconCache.set(url, iconResolver);
    }
    if (!this.initialRender) {
      return;
    }
    const svg = await iconResolver;
    if (svg === RETRYABLE_ERROR) {
      iconCache.delete(url);
    }
    if (url !== this.getIconSource().url) {
      return;
    }
    if (e6(svg)) {
      this.svg = svg;
      return;
    }
    switch (svg) {
      case RETRYABLE_ERROR:
      case CACHEABLE_ERROR:
        this.svg = null;
        this.emit("sl-error");
        break;
      default:
        this.svg = svg.cloneNode(true);
        (_a = library2 == null ? void 0 : library2.mutator) == null ? void 0 : _a.call(library2, this.svg);
        this.emit("sl-load");
    }
  }
  render() {
    return this.svg;
  }
};
SlIcon.styles = [component_styles_default, icon_styles_default];
__decorateClass([
  r6()
], SlIcon.prototype, "svg", 2);
__decorateClass([
  n4({ reflect: true })
], SlIcon.prototype, "name", 2);
__decorateClass([
  n4()
], SlIcon.prototype, "src", 2);
__decorateClass([
  n4()
], SlIcon.prototype, "label", 2);
__decorateClass([
  n4({ reflect: true })
], SlIcon.prototype, "library", 2);
__decorateClass([
  watch("label")
], SlIcon.prototype, "handleLabelChange", 1);
__decorateClass([
  watch(["name", "src", "library"])
], SlIcon.prototype, "setIcon", 1);

// node_modules/lit-html/directive.js
var t5 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
var e7 = (t8) => (...e13) => ({ _$litDirective$: t8, values: e13 });
var i4 = class {
  constructor(t8) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t8, e13, i6) {
    this._$Ct = t8, this._$AM = e13, this._$Ci = i6;
  }
  _$AS(t8, e13) {
    return this.update(t8, e13);
  }
  update(t8, e13) {
    return this.render(...e13);
  }
};

// node_modules/lit-html/directives/class-map.js
var e8 = e7(class extends i4 {
  constructor(t8) {
    if (super(t8), t8.type !== t5.ATTRIBUTE || "class" !== t8.name || t8.strings?.length > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t8) {
    return " " + Object.keys(t8).filter((s6) => t8[s6]).join(" ") + " ";
  }
  update(s6, [i6]) {
    if (void 0 === this.st) {
      this.st = /* @__PURE__ */ new Set(), void 0 !== s6.strings && (this.nt = new Set(s6.strings.join(" ").split(/\s/).filter((t8) => "" !== t8)));
      for (const t8 in i6)
        i6[t8] && !this.nt?.has(t8) && this.st.add(t8);
      return this.render(i6);
    }
    const r10 = s6.element.classList;
    for (const t8 of this.st)
      t8 in i6 || (r10.remove(t8), this.st.delete(t8));
    for (const t8 in i6) {
      const s7 = !!i6[t8];
      s7 === this.st.has(t8) || this.nt?.has(t8) || (s7 ? (r10.add(t8), this.st.add(t8)) : (r10.remove(t8), this.st.delete(t8)));
    }
    return w;
  }
});

// node_modules/lit-html/static.js
var e9 = Symbol.for("");
var o5 = (t8) => {
  if (t8?.r === e9)
    return t8?._$litStatic$;
};
var s4 = (t8, ...r10) => ({ _$litStatic$: r10.reduce((r11, e13, o15) => r11 + ((t9) => {
  if (void 0 !== t9._$litStatic$)
    return t9._$litStatic$;
  throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t9}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
})(e13) + t8[o15 + 1], t8[0]), r: e9 });
var a3 = /* @__PURE__ */ new Map();
var l3 = (t8) => (r10, ...e13) => {
  const i6 = e13.length;
  let s6, l5;
  const n11 = [], u5 = [];
  let c5, $2 = 0, f5 = false;
  for (; $2 < i6; ) {
    for (c5 = r10[$2]; $2 < i6 && void 0 !== (l5 = e13[$2], s6 = o5(l5)); )
      c5 += s6 + r10[++$2], f5 = true;
    $2 !== i6 && u5.push(l5), n11.push(c5), $2++;
  }
  if ($2 === i6 && n11.push(r10[i6]), f5) {
    const t9 = n11.join("$$lit$$");
    void 0 === (r10 = a3.get(t9)) && (n11.raw = n11, a3.set(t9, r10 = n11)), e13 = u5;
  }
  return t8(r10, ...e13);
};
var n5 = l3(x);
var u4 = l3(b2);

// node_modules/lit-html/directives/if-defined.js
var o6 = (o15) => o15 ?? T;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XJILXOW4.js
var SlIconButton = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.hasFocus = false;
    this.label = "";
    this.disabled = false;
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("sl-blur");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("sl-focus");
  }
  handleClick(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  /** Simulates a click on the icon button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the icon button. */
  focus(options) {
    this.button.focus(options);
  }
  /** Removes focus from the icon button. */
  blur() {
    this.button.blur();
  }
  render() {
    const isLink = this.href ? true : false;
    const tag = isLink ? s4`a` : s4`button`;
    return n5`
      <${tag}
        part="base"
        class=${e8({
      "icon-button": true,
      "icon-button--disabled": !isLink && this.disabled,
      "icon-button--focused": this.hasFocus
    })}
        ?disabled=${o6(isLink ? void 0 : this.disabled)}
        type=${o6(isLink ? void 0 : "button")}
        href=${o6(isLink ? this.href : void 0)}
        target=${o6(isLink ? this.target : void 0)}
        download=${o6(isLink ? this.download : void 0)}
        rel=${o6(isLink && this.target ? "noreferrer noopener" : void 0)}
        role=${o6(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${o6(this.name)}
          library=${o6(this.library)}
          src=${o6(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${tag}>
    `;
  }
};
SlIconButton.styles = [component_styles_default, icon_button_styles_default];
SlIconButton.dependencies = { "sl-icon": SlIcon };
__decorateClass([
  e5(".icon-button")
], SlIconButton.prototype, "button", 2);
__decorateClass([
  r6()
], SlIconButton.prototype, "hasFocus", 2);
__decorateClass([
  n4()
], SlIconButton.prototype, "name", 2);
__decorateClass([
  n4()
], SlIconButton.prototype, "library", 2);
__decorateClass([
  n4()
], SlIconButton.prototype, "src", 2);
__decorateClass([
  n4()
], SlIconButton.prototype, "href", 2);
__decorateClass([
  n4()
], SlIconButton.prototype, "target", 2);
__decorateClass([
  n4()
], SlIconButton.prototype, "download", 2);
__decorateClass([
  n4()
], SlIconButton.prototype, "label", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlIconButton.prototype, "disabled", 2);

// node_modules/@shoelace-style/localize/dist/index.js
var connectedElements = /* @__PURE__ */ new Set();
var translations = /* @__PURE__ */ new Map();
var fallback;
var documentDirection = "ltr";
var documentLanguage = "en";
var isClient = typeof MutationObserver !== "undefined" && typeof document !== "undefined" && typeof document.documentElement !== "undefined";
if (isClient) {
  const documentElementObserver = new MutationObserver(update);
  documentDirection = document.documentElement.dir || "ltr";
  documentLanguage = document.documentElement.lang || navigator.language;
  documentElementObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["dir", "lang"]
  });
}
function registerTranslation(...translation2) {
  translation2.map((t8) => {
    const code = t8.$code.toLowerCase();
    if (translations.has(code)) {
      translations.set(code, Object.assign(Object.assign({}, translations.get(code)), t8));
    } else {
      translations.set(code, t8);
    }
    if (!fallback) {
      fallback = t8;
    }
  });
  update();
}
function update() {
  if (isClient) {
    documentDirection = document.documentElement.dir || "ltr";
    documentLanguage = document.documentElement.lang || navigator.language;
  }
  [...connectedElements.keys()].map((el) => {
    if (typeof el.requestUpdate === "function") {
      el.requestUpdate();
    }
  });
}
var LocalizeController = class {
  constructor(host) {
    this.host = host;
    this.host.addController(this);
  }
  hostConnected() {
    connectedElements.add(this.host);
  }
  hostDisconnected() {
    connectedElements.delete(this.host);
  }
  dir() {
    return `${this.host.dir || documentDirection}`.toLowerCase();
  }
  lang() {
    return `${this.host.lang || documentLanguage}`.toLowerCase();
  }
  getTranslationData(lang) {
    var _a, _b;
    const locale = new Intl.Locale(lang.replace(/_/g, "-"));
    const language = locale === null || locale === void 0 ? void 0 : locale.language.toLowerCase();
    const region = (_b = (_a = locale === null || locale === void 0 ? void 0 : locale.region) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : "";
    const primary = translations.get(`${language}-${region}`);
    const secondary = translations.get(language);
    return { locale, language, region, primary, secondary };
  }
  exists(key, options) {
    var _a;
    const { primary, secondary } = this.getTranslationData((_a = options.lang) !== null && _a !== void 0 ? _a : this.lang());
    options = Object.assign({ includeFallback: false }, options);
    if (primary && primary[key] || secondary && secondary[key] || options.includeFallback && fallback && fallback[key]) {
      return true;
    }
    return false;
  }
  term(key, ...args) {
    const { primary, secondary } = this.getTranslationData(this.lang());
    let term;
    if (primary && primary[key]) {
      term = primary[key];
    } else if (secondary && secondary[key]) {
      term = secondary[key];
    } else if (fallback && fallback[key]) {
      term = fallback[key];
    } else {
      console.error(`No translation found for: ${String(key)}`);
      return String(key);
    }
    if (typeof term === "function") {
      return term(...args);
    }
    return term;
  }
  date(dateToFormat, options) {
    dateToFormat = new Date(dateToFormat);
    return new Intl.DateTimeFormat(this.lang(), options).format(dateToFormat);
  }
  number(numberToFormat, options) {
    numberToFormat = Number(numberToFormat);
    return isNaN(numberToFormat) ? "" : new Intl.NumberFormat(this.lang(), options).format(numberToFormat);
  }
  relativeTime(value, unit, options) {
    return new Intl.RelativeTimeFormat(this.lang(), options).format(value, unit);
  }
};

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MAS2SHYD.js
var translation = {
  $code: "en",
  $name: "English",
  $dir: "ltr",
  carousel: "Carousel",
  clearEntry: "Clear entry",
  close: "Close",
  copied: "Copied",
  copy: "Copy",
  currentValue: "Current value",
  error: "Error",
  goToSlide: (slide, count) => `Go to slide ${slide} of ${count}`,
  hidePassword: "Hide password",
  loading: "Loading",
  nextSlide: "Next slide",
  numOptionsSelected: (num) => {
    if (num === 0)
      return "No options selected";
    if (num === 1)
      return "1 option selected";
    return `${num} options selected`;
  },
  previousSlide: "Previous slide",
  progress: "Progress",
  remove: "Remove",
  resize: "Resize",
  scrollToEnd: "Scroll to end",
  scrollToStart: "Scroll to start",
  selectAColorFromTheScreen: "Select a color from the screen",
  showPassword: "Show password",
  slideNum: (slide) => `Slide ${slide}`,
  toggleColorFormat: "Toggle color format"
};
registerTranslation(translation);
var en_default = translation;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WLV3FVBR.js
var LocalizeController2 = class extends LocalizeController {
};
registerTranslation(en_default);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P5KBSNWP.js
var SlTag = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
    this.variant = "neutral";
    this.size = "medium";
    this.pill = false;
    this.removable = false;
  }
  handleRemoveClick() {
    this.emit("sl-remove");
  }
  render() {
    return x`
      <span
        part="base"
        class=${e8({
      tag: true,
      // Types
      "tag--primary": this.variant === "primary",
      "tag--success": this.variant === "success",
      "tag--neutral": this.variant === "neutral",
      "tag--warning": this.variant === "warning",
      "tag--danger": this.variant === "danger",
      "tag--text": this.variant === "text",
      // Sizes
      "tag--small": this.size === "small",
      "tag--medium": this.size === "medium",
      "tag--large": this.size === "large",
      // Modifiers
      "tag--pill": this.pill,
      "tag--removable": this.removable
    })}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable ? x`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            ` : ""}
      </span>
    `;
  }
};
SlTag.styles = [component_styles_default, tag_styles_default];
SlTag.dependencies = { "sl-icon-button": SlIconButton };
__decorateClass([
  n4({ reflect: true })
], SlTag.prototype, "variant", 2);
__decorateClass([
  n4({ reflect: true })
], SlTag.prototype, "size", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlTag.prototype, "pill", 2);
__decorateClass([
  n4({ type: Boolean })
], SlTag.prototype, "removable", 2);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.FVYMCA7A.js
var React = __toESM(require_react(), 1);

// node_modules/@lit/react/create-component.js
var e10 = /* @__PURE__ */ new Set(["children", "localName", "ref", "style", "className"]);
var n6 = /* @__PURE__ */ new WeakMap();
var t6 = (e13, t8, o15, l5, a4) => {
  const s6 = a4?.[t8];
  void 0 === s6 ? (e13[t8] = o15, null == o15 && t8 in HTMLElement.prototype && e13.removeAttribute(t8)) : o15 !== l5 && ((e14, t9, o16) => {
    let l6 = n6.get(e14);
    void 0 === l6 && n6.set(e14, l6 = /* @__PURE__ */ new Map());
    let a5 = l6.get(t9);
    void 0 !== o16 ? void 0 === a5 ? (l6.set(t9, a5 = { handleEvent: o16 }), e14.addEventListener(t9, a5)) : a5.handleEvent = o16 : void 0 !== a5 && (l6.delete(t9), e14.removeEventListener(t9, a5));
  })(e13, s6, o15);
};
var o7 = ({ react: n11, tagName: o15, elementClass: l5, events: a4, displayName: s6 }) => {
  const c5 = new Set(Object.keys(a4 ?? {})), r10 = n11.forwardRef((s7, r11) => {
    const i6 = n11.useRef(/* @__PURE__ */ new Map()), d3 = n11.useRef(null), f5 = {}, u5 = {};
    for (const [n12, t8] of Object.entries(s7))
      e10.has(n12) ? f5["className" === n12 ? "class" : n12] = t8 : c5.has(n12) || n12 in l5.prototype ? u5[n12] = t8 : f5[n12] = t8;
    return n11.useLayoutEffect(() => {
      if (null === d3.current)
        return;
      const e13 = /* @__PURE__ */ new Map();
      for (const n12 in u5)
        t6(d3.current, n12, s7[n12], i6.current.get(n12), a4), i6.current.delete(n12), e13.set(n12, s7[n12]);
      for (const [e14, n12] of i6.current)
        t6(d3.current, e14, void 0, n12, a4);
      i6.current = e13;
    }), n11.useLayoutEffect(() => {
      d3.current?.removeAttribute("defer-hydration");
    }, []), f5.suppressHydrationWarning = true, n11.createElement(o15, { ...f5, ref: n11.useCallback((e13) => {
      d3.current = e13, "function" == typeof r11 ? r11(e13) : null !== r11 && (r11.current = e13);
    }, [r11]) });
  });
  return r10.displayName = s6 ?? l5.name, r10;
};

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.FVYMCA7A.js
var tagName = "sl-tag";
SlTag.define("sl-tag");
var reactWrapper = o7({
  tagName,
  elementClass: SlTag,
  react: React,
  events: {
    onSlRemove: "sl-remove"
  },
  displayName: "SlTag"
});
var tag_default = reactWrapper;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.FW7UWQXB.js
var tooltip_styles_default = i`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3KSWVBQ5.js
var popup_styles_default = i`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v2) => ({
  x: v2,
  y: v2
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x: x2,
    y: y3,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y3,
    left: x2,
    right: x2 + width,
    bottom: y3 + height,
    x: x2,
    y: y3
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x2,
    y: y3
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i6 = 0; i6 < validMiddleware.length; i6++) {
    const {
      name,
      fn
    } = validMiddleware[i6];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x: x2,
      y: y3,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x2 = nextX != null ? nextX : x2;
    y3 = nextY != null ? nextY : y3;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x2,
          y: y3
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i6 = -1;
    }
  }
  return {
    x: x2,
    y: y3,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x2,
    y: y3,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x: x2,
    y: y3,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x: x2,
      y: y3,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x: x2,
      y: y3
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset3 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset3 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset3,
        centerOffset: center - offset3 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d3) => d3.overflows[0] <= 0).sort((a4, b3) => a4.overflows[1] - b3.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d3) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d3.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d3) => [d3.placement, d3.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a4, b3) => a4[1] - b3[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x: x2,
        y: y3,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x2 + diffCoords.x,
        y: y3 + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x: x2,
        y: y3,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x3,
              y: y4
            } = _ref;
            return {
              x: x3,
              y: y4
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x: x2,
        y: y3
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x2,
          y: limitedCoords.y - y3
        }
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isYAxis) {
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e13) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $: $2
  } = getCssDimensions(domElement);
  let x2 = ($2 ? round(rect.width) : rect.width) / width;
  let y3 = ($2 ? round(rect.height) : rect.height) / height;
  if (!x2 || !Number.isFinite(x2)) {
    x2 = 1;
  }
  if (!y3 || !Number.isFinite(y3)) {
    y3 = 1;
  }
  return {
    x: x2,
    y: y3
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x2 = (clientRect.left + visualOffsets.x) / scale.x;
  let y3 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x2 *= iframeScale.x;
      y3 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x2 += left;
      y3 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x2,
    y: y3
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x2 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y3 = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x2 += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y3
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x2 = 0;
  let y3 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x2 = visualViewport.offsetLeft;
      y3 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2,
    y: y3
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x2 = left * scale.x;
  const y3 = top * scale.y;
  return {
    width,
    height,
    x: x2,
    y: y3
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x2 = rect.left + scroll.scrollLeft - offsets.x;
  const y3 = rect.top + scroll.scrollTop - offsets.y;
  return {
    x: x2,
    y: y3,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e13) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update2, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update2, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update2);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update2) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update2();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update2();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update2();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update2);
      ancestorResize && ancestor.removeEventListener("resize", update2);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var arrow2 = arrow;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/composed-offset-position/dist/composed-offset-position.browser.min.mjs
function t7(t8) {
  return r8(t8);
}
function o8(t8) {
  return t8.assignedSlot ? t8.assignedSlot : t8.parentNode instanceof ShadowRoot ? t8.parentNode.host : t8.parentNode;
}
function r8(t8) {
  for (let e13 = t8; e13; e13 = o8(e13))
    if (e13 instanceof Element && "none" === getComputedStyle(e13).display)
      return null;
  for (let e13 = o8(t8); e13; e13 = o8(e13)) {
    if (!(e13 instanceof Element))
      continue;
    const t9 = getComputedStyle(e13);
    if ("contents" !== t9.display) {
      if ("static" !== t9.position || "none" !== t9.filter)
        return e13;
      if ("BODY" === e13.tagName)
        return e13;
    }
  }
  return null;
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.62L7S2LE.js
function isVirtualElement(e13) {
  return e13 !== null && typeof e13 === "object" && "getBoundingClientRect" in e13 && ("contextElement" in e13 ? e13 instanceof Element : true);
}
var SlPopup = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.placement = "top";
    this.strategy = "absolute";
    this.distance = 0;
    this.skidding = 0;
    this.arrow = false;
    this.arrowPlacement = "anchor";
    this.arrowPadding = 10;
    this.flip = false;
    this.flipFallbackPlacements = "";
    this.flipFallbackStrategy = "best-fit";
    this.flipPadding = 0;
    this.shift = false;
    this.shiftPadding = 0;
    this.autoSizePadding = 0;
    this.hoverBridge = false;
    this.updateHoverBridge = () => {
      if (this.hoverBridge && this.anchorEl) {
        const anchorRect = this.anchorEl.getBoundingClientRect();
        const popupRect = this.popup.getBoundingClientRect();
        const isVertical = this.placement.includes("top") || this.placement.includes("bottom");
        let topLeftX = 0;
        let topLeftY = 0;
        let topRightX = 0;
        let topRightY = 0;
        let bottomLeftX = 0;
        let bottomLeftY = 0;
        let bottomRightX = 0;
        let bottomRightY = 0;
        if (isVertical) {
          if (anchorRect.top < popupRect.top) {
            topLeftX = anchorRect.left;
            topLeftY = anchorRect.bottom;
            topRightX = anchorRect.right;
            topRightY = anchorRect.bottom;
            bottomLeftX = popupRect.left;
            bottomLeftY = popupRect.top;
            bottomRightX = popupRect.right;
            bottomRightY = popupRect.top;
          } else {
            topLeftX = popupRect.left;
            topLeftY = popupRect.bottom;
            topRightX = popupRect.right;
            topRightY = popupRect.bottom;
            bottomLeftX = anchorRect.left;
            bottomLeftY = anchorRect.top;
            bottomRightX = anchorRect.right;
            bottomRightY = anchorRect.top;
          }
        } else {
          if (anchorRect.left < popupRect.left) {
            topLeftX = anchorRect.right;
            topLeftY = anchorRect.top;
            topRightX = popupRect.left;
            topRightY = popupRect.top;
            bottomLeftX = anchorRect.right;
            bottomLeftY = anchorRect.bottom;
            bottomRightX = popupRect.left;
            bottomRightY = popupRect.bottom;
          } else {
            topLeftX = popupRect.right;
            topLeftY = popupRect.top;
            topRightX = anchorRect.left;
            topRightY = anchorRect.top;
            bottomLeftX = popupRect.right;
            bottomLeftY = popupRect.bottom;
            bottomRightX = anchorRect.left;
            bottomRightY = anchorRect.bottom;
          }
        }
        this.style.setProperty("--hover-bridge-top-left-x", `${topLeftX}px`);
        this.style.setProperty("--hover-bridge-top-left-y", `${topLeftY}px`);
        this.style.setProperty("--hover-bridge-top-right-x", `${topRightX}px`);
        this.style.setProperty("--hover-bridge-top-right-y", `${topRightY}px`);
        this.style.setProperty("--hover-bridge-bottom-left-x", `${bottomLeftX}px`);
        this.style.setProperty("--hover-bridge-bottom-left-y", `${bottomLeftY}px`);
        this.style.setProperty("--hover-bridge-bottom-right-x", `${bottomRightX}px`);
        this.style.setProperty("--hover-bridge-bottom-right-y", `${bottomRightY}px`);
      }
    };
  }
  async connectedCallback() {
    super.connectedCallback();
    await this.updateComplete;
    this.start();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stop();
  }
  async updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has("active")) {
      if (this.active) {
        this.start();
      } else {
        this.stop();
      }
    }
    if (changedProps.has("anchor")) {
      this.handleAnchorChange();
    }
    if (this.active) {
      await this.updateComplete;
      this.reposition();
    }
  }
  async handleAnchorChange() {
    await this.stop();
    if (this.anchor && typeof this.anchor === "string") {
      const root = this.getRootNode();
      this.anchorEl = root.getElementById(this.anchor);
    } else if (this.anchor instanceof Element || isVirtualElement(this.anchor)) {
      this.anchorEl = this.anchor;
    } else {
      this.anchorEl = this.querySelector('[slot="anchor"]');
    }
    if (this.anchorEl instanceof HTMLSlotElement) {
      this.anchorEl = this.anchorEl.assignedElements({ flatten: true })[0];
    }
    if (this.anchorEl) {
      this.start();
    }
  }
  start() {
    if (!this.anchorEl) {
      return;
    }
    this.cleanup = autoUpdate(this.anchorEl, this.popup, () => {
      this.reposition();
    });
  }
  async stop() {
    return new Promise((resolve) => {
      if (this.cleanup) {
        this.cleanup();
        this.cleanup = void 0;
        this.removeAttribute("data-current-placement");
        this.style.removeProperty("--auto-size-available-width");
        this.style.removeProperty("--auto-size-available-height");
        requestAnimationFrame(() => resolve());
      } else {
        resolve();
      }
    });
  }
  /** Forces the popup to recalculate and reposition itself. */
  reposition() {
    if (!this.active || !this.anchorEl) {
      return;
    }
    const middleware = [
      // The offset middleware goes first
      offset2({ mainAxis: this.distance, crossAxis: this.skidding })
    ];
    if (this.sync) {
      middleware.push(
        size2({
          apply: ({ rects }) => {
            const syncWidth = this.sync === "width" || this.sync === "both";
            const syncHeight = this.sync === "height" || this.sync === "both";
            this.popup.style.width = syncWidth ? `${rects.reference.width}px` : "";
            this.popup.style.height = syncHeight ? `${rects.reference.height}px` : "";
          }
        })
      );
    } else {
      this.popup.style.width = "";
      this.popup.style.height = "";
    }
    if (this.flip) {
      middleware.push(
        flip2({
          boundary: this.flipBoundary,
          // @ts-expect-error - We're converting a string attribute to an array here
          fallbackPlacements: this.flipFallbackPlacements,
          fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
          padding: this.flipPadding
        })
      );
    }
    if (this.shift) {
      middleware.push(
        shift2({
          boundary: this.shiftBoundary,
          padding: this.shiftPadding
        })
      );
    }
    if (this.autoSize) {
      middleware.push(
        size2({
          boundary: this.autoSizeBoundary,
          padding: this.autoSizePadding,
          apply: ({ availableWidth, availableHeight }) => {
            if (this.autoSize === "vertical" || this.autoSize === "both") {
              this.style.setProperty("--auto-size-available-height", `${availableHeight}px`);
            } else {
              this.style.removeProperty("--auto-size-available-height");
            }
            if (this.autoSize === "horizontal" || this.autoSize === "both") {
              this.style.setProperty("--auto-size-available-width", `${availableWidth}px`);
            } else {
              this.style.removeProperty("--auto-size-available-width");
            }
          }
        })
      );
    } else {
      this.style.removeProperty("--auto-size-available-width");
      this.style.removeProperty("--auto-size-available-height");
    }
    if (this.arrow) {
      middleware.push(
        arrow2({
          element: this.arrowEl,
          padding: this.arrowPadding
        })
      );
    }
    const getOffsetParent2 = this.strategy === "absolute" ? (element) => platform.getOffsetParent(element, t7) : platform.getOffsetParent;
    computePosition2(this.anchorEl, this.popup, {
      placement: this.placement,
      middleware,
      strategy: this.strategy,
      platform: __spreadProps(__spreadValues({}, platform), {
        getOffsetParent: getOffsetParent2
      })
    }).then(({ x: x2, y: y3, middlewareData, placement }) => {
      const isRtl = this.matches(":dir(rtl)");
      const staticSide = { top: "bottom", right: "left", bottom: "top", left: "right" }[placement.split("-")[0]];
      this.setAttribute("data-current-placement", placement);
      Object.assign(this.popup.style, {
        left: `${x2}px`,
        top: `${y3}px`
      });
      if (this.arrow) {
        const arrowX = middlewareData.arrow.x;
        const arrowY = middlewareData.arrow.y;
        let top = "";
        let right = "";
        let bottom = "";
        let left = "";
        if (this.arrowPlacement === "start") {
          const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          top = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          right = isRtl ? value : "";
          left = isRtl ? "" : value;
        } else if (this.arrowPlacement === "end") {
          const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          right = isRtl ? "" : value;
          left = isRtl ? value : "";
          bottom = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
        } else if (this.arrowPlacement === "center") {
          left = typeof arrowX === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
          top = typeof arrowY === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
        } else {
          left = typeof arrowX === "number" ? `${arrowX}px` : "";
          top = typeof arrowY === "number" ? `${arrowY}px` : "";
        }
        Object.assign(this.arrowEl.style, {
          top,
          right,
          bottom,
          left,
          [staticSide]: "calc(var(--arrow-size-diagonal) * -1)"
        });
      }
    });
    requestAnimationFrame(() => this.updateHoverBridge());
    this.emit("sl-reposition");
  }
  render() {
    return x`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${e8({
      "popup-hover-bridge": true,
      "popup-hover-bridge--visible": this.hoverBridge && this.active
    })}
      ></span>

      <div
        part="popup"
        class=${e8({
      popup: true,
      "popup--active": this.active,
      "popup--fixed": this.strategy === "fixed",
      "popup--has-arrow": this.arrow
    })}
      >
        <slot></slot>
        ${this.arrow ? x`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
  }
};
SlPopup.styles = [component_styles_default, popup_styles_default];
__decorateClass([
  e5(".popup")
], SlPopup.prototype, "popup", 2);
__decorateClass([
  e5(".popup__arrow")
], SlPopup.prototype, "arrowEl", 2);
__decorateClass([
  n4()
], SlPopup.prototype, "anchor", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlPopup.prototype, "active", 2);
__decorateClass([
  n4({ reflect: true })
], SlPopup.prototype, "placement", 2);
__decorateClass([
  n4({ reflect: true })
], SlPopup.prototype, "strategy", 2);
__decorateClass([
  n4({ type: Number })
], SlPopup.prototype, "distance", 2);
__decorateClass([
  n4({ type: Number })
], SlPopup.prototype, "skidding", 2);
__decorateClass([
  n4({ type: Boolean })
], SlPopup.prototype, "arrow", 2);
__decorateClass([
  n4({ attribute: "arrow-placement" })
], SlPopup.prototype, "arrowPlacement", 2);
__decorateClass([
  n4({ attribute: "arrow-padding", type: Number })
], SlPopup.prototype, "arrowPadding", 2);
__decorateClass([
  n4({ type: Boolean })
], SlPopup.prototype, "flip", 2);
__decorateClass([
  n4({
    attribute: "flip-fallback-placements",
    converter: {
      fromAttribute: (value) => {
        return value.split(" ").map((p3) => p3.trim()).filter((p3) => p3 !== "");
      },
      toAttribute: (value) => {
        return value.join(" ");
      }
    }
  })
], SlPopup.prototype, "flipFallbackPlacements", 2);
__decorateClass([
  n4({ attribute: "flip-fallback-strategy" })
], SlPopup.prototype, "flipFallbackStrategy", 2);
__decorateClass([
  n4({ type: Object })
], SlPopup.prototype, "flipBoundary", 2);
__decorateClass([
  n4({ attribute: "flip-padding", type: Number })
], SlPopup.prototype, "flipPadding", 2);
__decorateClass([
  n4({ type: Boolean })
], SlPopup.prototype, "shift", 2);
__decorateClass([
  n4({ type: Object })
], SlPopup.prototype, "shiftBoundary", 2);
__decorateClass([
  n4({ attribute: "shift-padding", type: Number })
], SlPopup.prototype, "shiftPadding", 2);
__decorateClass([
  n4({ attribute: "auto-size" })
], SlPopup.prototype, "autoSize", 2);
__decorateClass([
  n4()
], SlPopup.prototype, "sync", 2);
__decorateClass([
  n4({ type: Object })
], SlPopup.prototype, "autoSizeBoundary", 2);
__decorateClass([
  n4({ attribute: "auto-size-padding", type: Number })
], SlPopup.prototype, "autoSizePadding", 2);
__decorateClass([
  n4({ attribute: "hover-bridge", type: Boolean })
], SlPopup.prototype, "hoverBridge", 2);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.DHU6MIVB.js
var defaultAnimationRegistry = /* @__PURE__ */ new Map();
var customAnimationRegistry = /* @__PURE__ */ new WeakMap();
function ensureAnimation(animation) {
  return animation != null ? animation : { keyframes: [], options: { duration: 0 } };
}
function getLogicalAnimation(animation, dir) {
  if (dir.toLowerCase() === "rtl") {
    return {
      keyframes: animation.rtlKeyframes || animation.keyframes,
      options: animation.options
    };
  }
  return animation;
}
function setDefaultAnimation(animationName, animation) {
  defaultAnimationRegistry.set(animationName, ensureAnimation(animation));
}
function getAnimation(el, animationName, options) {
  const customAnimation = customAnimationRegistry.get(el);
  if (customAnimation == null ? void 0 : customAnimation[animationName]) {
    return getLogicalAnimation(customAnimation[animationName], options.dir);
  }
  const defaultAnimation = defaultAnimationRegistry.get(animationName);
  if (defaultAnimation) {
    return getLogicalAnimation(defaultAnimation, options.dir);
  }
  return {
    keyframes: [],
    options: { duration: 0 }
  };
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B4BZKR24.js
function waitForEvent(el, eventName) {
  return new Promise((resolve) => {
    function done(event) {
      if (event.target === el) {
        el.removeEventListener(eventName, done);
        resolve();
      }
    }
    el.addEventListener(eventName, done);
  });
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LHI6QEL2.js
function animateTo(el, keyframes, options) {
  return new Promise((resolve) => {
    if ((options == null ? void 0 : options.duration) === Infinity) {
      throw new Error("Promise-based animations must be finite.");
    }
    const animation = el.animate(keyframes, __spreadProps(__spreadValues({}, options), {
      duration: prefersReducedMotion() ? 0 : options.duration
    }));
    animation.addEventListener("cancel", resolve, { once: true });
    animation.addEventListener("finish", resolve, { once: true });
  });
}
function parseDuration(delay) {
  delay = delay.toString().toLowerCase();
  if (delay.indexOf("ms") > -1) {
    return parseFloat(delay);
  }
  if (delay.indexOf("s") > -1) {
    return parseFloat(delay) * 1e3;
  }
  return parseFloat(delay);
}
function prefersReducedMotion() {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  return query.matches;
}
function stopAnimations(el) {
  return Promise.all(
    el.getAnimations().map((animation) => {
      return new Promise((resolve) => {
        animation.cancel();
        requestAnimationFrame(resolve);
      });
    })
  );
}
function shimKeyframesHeightAuto(keyframes, calculatedHeight) {
  return keyframes.map((keyframe) => __spreadProps(__spreadValues({}, keyframe), {
    height: keyframe.height === "auto" ? `${calculatedHeight}px` : keyframe.height
  }));
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.EDMTAZ5E.js
var SlTooltip = class extends ShoelaceElement {
  constructor() {
    super();
    this.localize = new LocalizeController2(this);
    this.content = "";
    this.placement = "top";
    this.disabled = false;
    this.distance = 8;
    this.open = false;
    this.skidding = 0;
    this.trigger = "hover focus";
    this.hoist = false;
    this.handleBlur = () => {
      if (this.hasTrigger("focus")) {
        this.hide();
      }
    };
    this.handleClick = () => {
      if (this.hasTrigger("click")) {
        if (this.open) {
          this.hide();
        } else {
          this.show();
        }
      }
    };
    this.handleFocus = () => {
      if (this.hasTrigger("focus")) {
        this.show();
      }
    };
    this.handleDocumentKeyDown = (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        this.hide();
      }
    };
    this.handleMouseOver = () => {
      if (this.hasTrigger("hover")) {
        const delay = parseDuration(getComputedStyle(this).getPropertyValue("--show-delay"));
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = window.setTimeout(() => this.show(), delay);
      }
    };
    this.handleMouseOut = () => {
      if (this.hasTrigger("hover")) {
        const delay = parseDuration(getComputedStyle(this).getPropertyValue("--hide-delay"));
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = window.setTimeout(() => this.hide(), delay);
      }
    };
    this.addEventListener("blur", this.handleBlur, true);
    this.addEventListener("focus", this.handleFocus, true);
    this.addEventListener("click", this.handleClick);
    this.addEventListener("mouseover", this.handleMouseOver);
    this.addEventListener("mouseout", this.handleMouseOut);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  firstUpdated() {
    this.body.hidden = !this.open;
    if (this.open) {
      this.popup.active = true;
      this.popup.reposition();
    }
  }
  hasTrigger(triggerType) {
    const triggers = this.trigger.split(" ");
    return triggers.includes(triggerType);
  }
  async handleOpenChange() {
    var _a, _b;
    if (this.open) {
      if (this.disabled) {
        return;
      }
      this.emit("sl-show");
      if ("CloseWatcher" in window) {
        (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
        this.closeWatcher = new CloseWatcher();
        this.closeWatcher.onclose = () => {
          this.hide();
        };
      } else {
        document.addEventListener("keydown", this.handleDocumentKeyDown);
      }
      await stopAnimations(this.body);
      this.body.hidden = false;
      this.popup.active = true;
      const { keyframes, options } = getAnimation(this, "tooltip.show", { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.popup.reposition();
      this.emit("sl-after-show");
    } else {
      this.emit("sl-hide");
      (_b = this.closeWatcher) == null ? void 0 : _b.destroy();
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
      await stopAnimations(this.body);
      const { keyframes, options } = getAnimation(this, "tooltip.hide", { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.popup.active = false;
      this.body.hidden = true;
      this.emit("sl-after-hide");
    }
  }
  async handleOptionsChange() {
    if (this.hasUpdated) {
      await this.updateComplete;
      this.popup.reposition();
    }
  }
  handleDisabledChange() {
    if (this.disabled && this.open) {
      this.hide();
    }
  }
  /** Shows the tooltip. */
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "sl-after-show");
  }
  /** Hides the tooltip */
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "sl-after-hide");
  }
  //
  // NOTE: Tooltip is a bit unique in that we're using aria-live instead of aria-labelledby to trick screen readers into
  // announcing the content. It works really well, but it violates an accessibility rule. We're also adding the
  // aria-describedby attribute to a slot, which is required by <sl-popup> to correctly locate the first assigned
  // element, otherwise positioning is incorrect.
  //
  render() {
    return x`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${e8({
      tooltip: true,
      "tooltip--open": this.open
    })}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open ? "polite" : "off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `;
  }
};
SlTooltip.styles = [component_styles_default, tooltip_styles_default];
SlTooltip.dependencies = { "sl-popup": SlPopup };
__decorateClass([
  e5("slot:not([name])")
], SlTooltip.prototype, "defaultSlot", 2);
__decorateClass([
  e5(".tooltip__body")
], SlTooltip.prototype, "body", 2);
__decorateClass([
  e5("sl-popup")
], SlTooltip.prototype, "popup", 2);
__decorateClass([
  n4()
], SlTooltip.prototype, "content", 2);
__decorateClass([
  n4()
], SlTooltip.prototype, "placement", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlTooltip.prototype, "disabled", 2);
__decorateClass([
  n4({ type: Number })
], SlTooltip.prototype, "distance", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlTooltip.prototype, "open", 2);
__decorateClass([
  n4({ type: Number })
], SlTooltip.prototype, "skidding", 2);
__decorateClass([
  n4()
], SlTooltip.prototype, "trigger", 2);
__decorateClass([
  n4({ type: Boolean })
], SlTooltip.prototype, "hoist", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], SlTooltip.prototype, "handleOpenChange", 1);
__decorateClass([
  watch(["content", "distance", "hoist", "placement", "skidding"])
], SlTooltip.prototype, "handleOptionsChange", 1);
__decorateClass([
  watch("disabled")
], SlTooltip.prototype, "handleDisabledChange", 1);
setDefaultAnimation("tooltip.show", {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 150, easing: "ease" }
});
setDefaultAnimation("tooltip.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 150, easing: "ease" }
});

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.VB7KCAX6.js
var React2 = __toESM(require_react(), 1);
var tagName2 = "sl-tooltip";
SlTooltip.define("sl-tooltip");
var reactWrapper2 = o7({
  tagName: tagName2,
  elementClass: SlTooltip,
  react: React2,
  events: {
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide"
  },
  displayName: "SlTooltip"
});
var tooltip_default = reactWrapper2;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.G7B7WU5W.js
var tree_styles_default = i`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BWVSW6TI.js
var tree_item_styles_default = i`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.R3NF57O3.js
var checkbox_styles_default = i`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GI7VDIWX.js
var defaultValue = (propertyName = "value") => (proto, key) => {
  const ctor = proto.constructor;
  const attributeChangedCallback = ctor.prototype.attributeChangedCallback;
  ctor.prototype.attributeChangedCallback = function(name, old, value) {
    var _a;
    const options = ctor.getPropertyOptions(propertyName);
    const attributeName = typeof options.attribute === "string" ? options.attribute : propertyName;
    if (name === attributeName) {
      const converter = options.converter || u;
      const fromAttribute = typeof converter === "function" ? converter : (_a = converter == null ? void 0 : converter.fromAttribute) != null ? _a : u.fromAttribute;
      const newValue = fromAttribute(value, options.type);
      if (this[propertyName] !== newValue) {
        this[key] = newValue;
      }
    }
    attributeChangedCallback.call(this, name, old, value);
  };
};

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SI4ACBFK.js
var form_control_styles_default = i`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KWPBDQ6I.js
var formCollections = /* @__PURE__ */ new WeakMap();
var reportValidityOverloads = /* @__PURE__ */ new WeakMap();
var checkValidityOverloads = /* @__PURE__ */ new WeakMap();
var userInteractedControls = /* @__PURE__ */ new WeakSet();
var interactions = /* @__PURE__ */ new WeakMap();
var FormControlController = class {
  constructor(host, options) {
    this.handleFormData = (event) => {
      const disabled = this.options.disabled(this.host);
      const name = this.options.name(this.host);
      const value = this.options.value(this.host);
      const isButton = this.host.tagName.toLowerCase() === "sl-button";
      if (this.host.isConnected && !disabled && !isButton && typeof name === "string" && name.length > 0 && typeof value !== "undefined") {
        if (Array.isArray(value)) {
          value.forEach((val) => {
            event.formData.append(name, val.toString());
          });
        } else {
          event.formData.append(name, value.toString());
        }
      }
    };
    this.handleFormSubmit = (event) => {
      var _a;
      const disabled = this.options.disabled(this.host);
      const reportValidity = this.options.reportValidity;
      if (this.form && !this.form.noValidate) {
        (_a = formCollections.get(this.form)) == null ? void 0 : _a.forEach((control) => {
          this.setUserInteracted(control, true);
        });
      }
      if (this.form && !this.form.noValidate && !disabled && !reportValidity(this.host)) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };
    this.handleFormReset = () => {
      this.options.setValue(this.host, this.options.defaultValue(this.host));
      this.setUserInteracted(this.host, false);
      interactions.set(this.host, []);
    };
    this.handleInteraction = (event) => {
      const emittedEvents = interactions.get(this.host);
      if (!emittedEvents.includes(event.type)) {
        emittedEvents.push(event.type);
      }
      if (emittedEvents.length === this.options.assumeInteractionOn.length) {
        this.setUserInteracted(this.host, true);
      }
    };
    this.checkFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const elements = this.form.querySelectorAll("*");
        for (const element of elements) {
          if (typeof element.checkValidity === "function") {
            if (!element.checkValidity()) {
              return false;
            }
          }
        }
      }
      return true;
    };
    this.reportFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const elements = this.form.querySelectorAll("*");
        for (const element of elements) {
          if (typeof element.reportValidity === "function") {
            if (!element.reportValidity()) {
              return false;
            }
          }
        }
      }
      return true;
    };
    (this.host = host).addController(this);
    this.options = __spreadValues({
      form: (input) => {
        const formId = input.form;
        if (formId) {
          const root = input.getRootNode();
          const form = root.querySelector(`#${formId}`);
          if (form) {
            return form;
          }
        }
        return input.closest("form");
      },
      name: (input) => input.name,
      value: (input) => input.value,
      defaultValue: (input) => input.defaultValue,
      disabled: (input) => {
        var _a;
        return (_a = input.disabled) != null ? _a : false;
      },
      reportValidity: (input) => typeof input.reportValidity === "function" ? input.reportValidity() : true,
      checkValidity: (input) => typeof input.checkValidity === "function" ? input.checkValidity() : true,
      setValue: (input, value) => input.value = value,
      assumeInteractionOn: ["sl-input"]
    }, options);
  }
  hostConnected() {
    const form = this.options.form(this.host);
    if (form) {
      this.attachForm(form);
    }
    interactions.set(this.host, []);
    this.options.assumeInteractionOn.forEach((event) => {
      this.host.addEventListener(event, this.handleInteraction);
    });
  }
  hostDisconnected() {
    this.detachForm();
    interactions.delete(this.host);
    this.options.assumeInteractionOn.forEach((event) => {
      this.host.removeEventListener(event, this.handleInteraction);
    });
  }
  hostUpdated() {
    const form = this.options.form(this.host);
    if (!form) {
      this.detachForm();
    }
    if (form && this.form !== form) {
      this.detachForm();
      this.attachForm(form);
    }
    if (this.host.hasUpdated) {
      this.setValidity(this.host.validity.valid);
    }
  }
  attachForm(form) {
    if (form) {
      this.form = form;
      if (formCollections.has(this.form)) {
        formCollections.get(this.form).add(this.host);
      } else {
        formCollections.set(this.form, /* @__PURE__ */ new Set([this.host]));
      }
      this.form.addEventListener("formdata", this.handleFormData);
      this.form.addEventListener("submit", this.handleFormSubmit);
      this.form.addEventListener("reset", this.handleFormReset);
      if (!reportValidityOverloads.has(this.form)) {
        reportValidityOverloads.set(this.form, this.form.reportValidity);
        this.form.reportValidity = () => this.reportFormValidity();
      }
      if (!checkValidityOverloads.has(this.form)) {
        checkValidityOverloads.set(this.form, this.form.checkValidity);
        this.form.checkValidity = () => this.checkFormValidity();
      }
    } else {
      this.form = void 0;
    }
  }
  detachForm() {
    if (!this.form)
      return;
    const formCollection = formCollections.get(this.form);
    if (!formCollection) {
      return;
    }
    formCollection.delete(this.host);
    if (formCollection.size <= 0) {
      this.form.removeEventListener("formdata", this.handleFormData);
      this.form.removeEventListener("submit", this.handleFormSubmit);
      this.form.removeEventListener("reset", this.handleFormReset);
      if (reportValidityOverloads.has(this.form)) {
        this.form.reportValidity = reportValidityOverloads.get(this.form);
        reportValidityOverloads.delete(this.form);
      }
      if (checkValidityOverloads.has(this.form)) {
        this.form.checkValidity = checkValidityOverloads.get(this.form);
        checkValidityOverloads.delete(this.form);
      }
      this.form = void 0;
    }
  }
  setUserInteracted(el, hasInteracted) {
    if (hasInteracted) {
      userInteractedControls.add(el);
    } else {
      userInteractedControls.delete(el);
    }
    el.requestUpdate();
  }
  doAction(type, submitter) {
    if (this.form) {
      const button = document.createElement("button");
      button.type = type;
      button.style.position = "absolute";
      button.style.width = "0";
      button.style.height = "0";
      button.style.clipPath = "inset(50%)";
      button.style.overflow = "hidden";
      button.style.whiteSpace = "nowrap";
      if (submitter) {
        button.name = submitter.name;
        button.value = submitter.value;
        ["formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((attr) => {
          if (submitter.hasAttribute(attr)) {
            button.setAttribute(attr, submitter.getAttribute(attr));
          }
        });
      }
      this.form.append(button);
      button.click();
      button.remove();
    }
  }
  /** Returns the associated `<form>` element, if one exists. */
  getForm() {
    var _a;
    return (_a = this.form) != null ? _a : null;
  }
  /** Resets the form, restoring all the control to their default value */
  reset(submitter) {
    this.doAction("reset", submitter);
  }
  /** Submits the form, triggering validation and form data injection. */
  submit(submitter) {
    this.doAction("submit", submitter);
  }
  /**
   * Synchronously sets the form control's validity. Call this when you know the future validity but need to update
   * the host element immediately, i.e. before Lit updates the component in the next update.
   */
  setValidity(isValid) {
    const host = this.host;
    const hasInteracted = Boolean(userInteractedControls.has(host));
    const required = Boolean(host.required);
    host.toggleAttribute("data-required", required);
    host.toggleAttribute("data-optional", !required);
    host.toggleAttribute("data-invalid", !isValid);
    host.toggleAttribute("data-valid", isValid);
    host.toggleAttribute("data-user-invalid", !isValid && hasInteracted);
    host.toggleAttribute("data-user-valid", isValid && hasInteracted);
  }
  /**
   * Updates the form control's validity based on the current value of `host.validity.valid`. Call this when anything
   * that affects constraint validation changes so the component receives the correct validity states.
   */
  updateValidity() {
    const host = this.host;
    this.setValidity(host.validity.valid);
  }
  /**
   * Dispatches a non-bubbling, cancelable custom event of type `sl-invalid`.
   * If the `sl-invalid` event will be cancelled then the original `invalid`
   * event (which may have been passed as argument) will also be cancelled.
   * If no original `invalid` event has been passed then the `sl-invalid`
   * event will be cancelled before being dispatched.
   */
  emitInvalidEvent(originalInvalidEvent) {
    const slInvalidEvent = new CustomEvent("sl-invalid", {
      bubbles: false,
      composed: false,
      cancelable: true,
      detail: {}
    });
    if (!originalInvalidEvent) {
      slInvalidEvent.preventDefault();
    }
    if (!this.host.dispatchEvent(slInvalidEvent)) {
      originalInvalidEvent == null ? void 0 : originalInvalidEvent.preventDefault();
    }
  }
};
var validValidityState = Object.freeze({
  badInput: false,
  customError: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: false,
  valid: true,
  valueMissing: false
});
var valueMissingValidityState = Object.freeze(__spreadProps(__spreadValues({}, validValidityState), {
  valid: false,
  valueMissing: true
}));
var customErrorValidityState = Object.freeze(__spreadProps(__spreadValues({}, validValidityState), {
  valid: false,
  customError: true
}));

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NYIIDP5N.js
var HasSlotController = class {
  constructor(host, ...slotNames) {
    this.slotNames = [];
    this.handleSlotChange = (event) => {
      const slot = event.target;
      if (this.slotNames.includes("[default]") && !slot.name || slot.name && this.slotNames.includes(slot.name)) {
        this.host.requestUpdate();
      }
    };
    (this.host = host).addController(this);
    this.slotNames = slotNames;
  }
  hasDefaultSlot() {
    return [...this.host.childNodes].some((node) => {
      if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== "") {
        return true;
      }
      if (node.nodeType === node.ELEMENT_NODE) {
        const el = node;
        const tagName59 = el.tagName.toLowerCase();
        if (tagName59 === "sl-visually-hidden") {
          return false;
        }
        if (!el.hasAttribute("slot")) {
          return true;
        }
      }
      return false;
    });
  }
  hasNamedSlot(name) {
    return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
  }
  test(slotName) {
    return slotName === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
  }
  hostConnected() {
    this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
  }
  hostDisconnected() {
    this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
  }
};
function getTextContent(slot) {
  if (!slot) {
    return "";
  }
  const nodes = slot.assignedNodes({ flatten: true });
  let text = "";
  [...nodes].forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      text += node.textContent;
    }
  });
  return text;
}

// node_modules/lit-html/directives/live.js
var l4 = e7(class extends i4 {
  constructor(r10) {
    if (super(r10), r10.type !== t5.PROPERTY && r10.type !== t5.ATTRIBUTE && r10.type !== t5.BOOLEAN_ATTRIBUTE)
      throw Error("The `live` directive is not allowed on child or event bindings");
    if (!f3(r10))
      throw Error("`live` bindings can only contain a single expression");
  }
  render(r10) {
    return r10;
  }
  update(i6, [t8]) {
    if (t8 === w || t8 === T)
      return t8;
    const o15 = i6.element, l5 = i6.name;
    if (i6.type === t5.PROPERTY) {
      if (t8 === o15[l5])
        return w;
    } else if (i6.type === t5.BOOLEAN_ATTRIBUTE) {
      if (!!t8 === o15.hasAttribute(l5))
        return w;
    } else if (i6.type === t5.ATTRIBUTE && o15.getAttribute(l5) === t8 + "")
      return w;
    return m2(i6), t8;
  }
});

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6GAVHIFH.js
var SlCheckbox = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      value: (control) => control.checked ? control.value || "on" : void 0,
      defaultValue: (control) => control.defaultChecked,
      setValue: (control, checked) => control.checked = checked
    });
    this.hasSlotController = new HasSlotController(this, "help-text");
    this.hasFocus = false;
    this.title = "";
    this.name = "";
    this.size = "medium";
    this.disabled = false;
    this.checked = false;
    this.indeterminate = false;
    this.defaultChecked = false;
    this.form = "";
    this.required = false;
    this.helpText = "";
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  handleClick() {
    this.checked = !this.checked;
    this.indeterminate = false;
    this.emit("sl-change");
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("sl-blur");
  }
  handleInput() {
    this.emit("sl-input");
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("sl-focus");
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  handleStateChange() {
    this.input.checked = this.checked;
    this.input.indeterminate = this.indeterminate;
    this.formControlController.updateValidity();
  }
  /** Simulates a click on the checkbox. */
  click() {
    this.input.click();
  }
  /** Sets focus on the checkbox. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the checkbox. */
  blur() {
    this.input.blur();
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }
  /**
   * Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
   * the custom validation message, call this method with an empty string.
   */
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  render() {
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    return x`
      <div
        class=${e8({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="base"
          class=${e8({
      checkbox: true,
      "checkbox--checked": this.checked,
      "checkbox--disabled": this.disabled,
      "checkbox--focused": this.hasFocus,
      "checkbox--indeterminate": this.indeterminate,
      "checkbox--small": this.size === "small",
      "checkbox--medium": this.size === "medium",
      "checkbox--large": this.size === "large"
    })}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${o6(this.value)}
            .indeterminate=${l4(this.indeterminate)}
            .checked=${l4(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked ? "true" : "false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked ? " control--checked" : ""}${this.indeterminate ? " control--indeterminate" : ""}"
            class="checkbox__control"
          >
            ${this.checked ? x`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                ` : ""}
            ${!this.checked && this.indeterminate ? x`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                ` : ""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${hasHelpText ? "false" : "true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
SlCheckbox.styles = [component_styles_default, form_control_styles_default, checkbox_styles_default];
SlCheckbox.dependencies = { "sl-icon": SlIcon };
__decorateClass([
  e5('input[type="checkbox"]')
], SlCheckbox.prototype, "input", 2);
__decorateClass([
  r6()
], SlCheckbox.prototype, "hasFocus", 2);
__decorateClass([
  n4()
], SlCheckbox.prototype, "title", 2);
__decorateClass([
  n4()
], SlCheckbox.prototype, "name", 2);
__decorateClass([
  n4()
], SlCheckbox.prototype, "value", 2);
__decorateClass([
  n4({ reflect: true })
], SlCheckbox.prototype, "size", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "disabled", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "checked", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "indeterminate", 2);
__decorateClass([
  defaultValue("checked")
], SlCheckbox.prototype, "defaultChecked", 2);
__decorateClass([
  n4({ reflect: true })
], SlCheckbox.prototype, "form", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "required", 2);
__decorateClass([
  n4({ attribute: "help-text" })
], SlCheckbox.prototype, "helpText", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlCheckbox.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch(["checked", "indeterminate"], { waitUntilFirstUpdate: true })
], SlCheckbox.prototype, "handleStateChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7DUCI5S4.js
var spinner_styles_default = i`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7HOIOSC7.js
var SlSpinner = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
  }
  render() {
    return x`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
};
SlSpinner.styles = [component_styles_default, spinner_styles_default];

// node_modules/lit-html/directives/when.js
function n7(n11, r10, t8) {
  return n11 ? r10(n11) : t8?.(n11);
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.CMCE2D3S.js
var _SlTreeItem = class _SlTreeItem2 extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
    this.indeterminate = false;
    this.isLeaf = false;
    this.loading = false;
    this.selectable = false;
    this.expanded = false;
    this.selected = false;
    this.disabled = false;
    this.lazy = false;
  }
  static isTreeItem(node) {
    return node instanceof Element && node.getAttribute("role") === "treeitem";
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "treeitem");
    this.setAttribute("tabindex", "-1");
    if (this.isNestedItem()) {
      this.slot = "children";
    }
  }
  firstUpdated() {
    this.childrenContainer.hidden = !this.expanded;
    this.childrenContainer.style.height = this.expanded ? "auto" : "0";
    this.isLeaf = !this.lazy && this.getChildrenItems().length === 0;
    this.handleExpandedChange();
  }
  async animateCollapse() {
    this.emit("sl-collapse");
    await stopAnimations(this.childrenContainer);
    const { keyframes, options } = getAnimation(this, "tree-item.collapse", { dir: this.localize.dir() });
    await animateTo(
      this.childrenContainer,
      shimKeyframesHeightAuto(keyframes, this.childrenContainer.scrollHeight),
      options
    );
    this.childrenContainer.hidden = true;
    this.emit("sl-after-collapse");
  }
  // Checks whether the item is nested into an item
  isNestedItem() {
    const parent = this.parentElement;
    return !!parent && _SlTreeItem2.isTreeItem(parent);
  }
  handleChildrenSlotChange() {
    this.loading = false;
    this.isLeaf = !this.lazy && this.getChildrenItems().length === 0;
  }
  willUpdate(changedProperties) {
    if (changedProperties.has("selected") && !changedProperties.has("indeterminate")) {
      this.indeterminate = false;
    }
  }
  async animateExpand() {
    this.emit("sl-expand");
    await stopAnimations(this.childrenContainer);
    this.childrenContainer.hidden = false;
    const { keyframes, options } = getAnimation(this, "tree-item.expand", { dir: this.localize.dir() });
    await animateTo(
      this.childrenContainer,
      shimKeyframesHeightAuto(keyframes, this.childrenContainer.scrollHeight),
      options
    );
    this.childrenContainer.style.height = "auto";
    this.emit("sl-after-expand");
  }
  handleLoadingChange() {
    this.setAttribute("aria-busy", this.loading ? "true" : "false");
    if (!this.loading) {
      this.animateExpand();
    }
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleSelectedChange() {
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  handleExpandedChange() {
    if (!this.isLeaf) {
      this.setAttribute("aria-expanded", this.expanded ? "true" : "false");
    } else {
      this.removeAttribute("aria-expanded");
    }
  }
  handleExpandAnimation() {
    if (this.expanded) {
      if (this.lazy) {
        this.loading = true;
        this.emit("sl-lazy-load");
      } else {
        this.animateExpand();
      }
    } else {
      this.animateCollapse();
    }
  }
  handleLazyChange() {
    this.emit("sl-lazy-change");
  }
  /** Gets all the nested tree items in this node. */
  getChildrenItems({ includeDisabled = true } = {}) {
    return this.childrenSlot ? [...this.childrenSlot.assignedElements({ flatten: true })].filter(
      (item) => _SlTreeItem2.isTreeItem(item) && (includeDisabled || !item.disabled)
    ) : [];
  }
  render() {
    const isRtl = this.matches(":dir(rtl)");
    const showExpandButton = !this.loading && (!this.isLeaf || this.lazy);
    return x`
      <div
        part="base"
        class="${e8({
      "tree-item": true,
      "tree-item--expanded": this.expanded,
      "tree-item--selected": this.selected,
      "tree-item--disabled": this.disabled,
      "tree-item--leaf": this.isLeaf,
      "tree-item--has-expand-button": showExpandButton,
      "tree-item--rtl": this.localize.dir() === "rtl"
    })}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled ? "item--disabled" : ""}
            ${this.expanded ? "item--expanded" : ""}
            ${this.indeterminate ? "item--indeterminate" : ""}
            ${this.selected ? "item--selected" : ""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${e8({
      "tree-item__expand-button": true,
      "tree-item__expand-button--visible": showExpandButton
    })}
            aria-hidden="true"
          >
            ${n7(
      this.loading,
      () => x` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `
    )}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${isRtl ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${isRtl ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
          </div>

          ${n7(
      this.selectable,
      () => x`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${l4(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `
    )}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `;
  }
};
_SlTreeItem.styles = [component_styles_default, tree_item_styles_default];
_SlTreeItem.dependencies = {
  "sl-checkbox": SlCheckbox,
  "sl-icon": SlIcon,
  "sl-spinner": SlSpinner
};
__decorateClass([
  r6()
], _SlTreeItem.prototype, "indeterminate", 2);
__decorateClass([
  r6()
], _SlTreeItem.prototype, "isLeaf", 2);
__decorateClass([
  r6()
], _SlTreeItem.prototype, "loading", 2);
__decorateClass([
  r6()
], _SlTreeItem.prototype, "selectable", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], _SlTreeItem.prototype, "expanded", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], _SlTreeItem.prototype, "selected", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], _SlTreeItem.prototype, "disabled", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], _SlTreeItem.prototype, "lazy", 2);
__decorateClass([
  e5("slot:not([name])")
], _SlTreeItem.prototype, "defaultSlot", 2);
__decorateClass([
  e5("slot[name=children]")
], _SlTreeItem.prototype, "childrenSlot", 2);
__decorateClass([
  e5(".tree-item__item")
], _SlTreeItem.prototype, "itemElement", 2);
__decorateClass([
  e5(".tree-item__children")
], _SlTreeItem.prototype, "childrenContainer", 2);
__decorateClass([
  e5(".tree-item__expand-button slot")
], _SlTreeItem.prototype, "expandButtonSlot", 2);
__decorateClass([
  watch("loading", { waitUntilFirstUpdate: true })
], _SlTreeItem.prototype, "handleLoadingChange", 1);
__decorateClass([
  watch("disabled")
], _SlTreeItem.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("selected")
], _SlTreeItem.prototype, "handleSelectedChange", 1);
__decorateClass([
  watch("expanded", { waitUntilFirstUpdate: true })
], _SlTreeItem.prototype, "handleExpandedChange", 1);
__decorateClass([
  watch("expanded", { waitUntilFirstUpdate: true })
], _SlTreeItem.prototype, "handleExpandAnimation", 1);
__decorateClass([
  watch("lazy", { waitUntilFirstUpdate: true })
], _SlTreeItem.prototype, "handleLazyChange", 1);
var SlTreeItem = _SlTreeItem;
setDefaultAnimation("tree-item.expand", {
  keyframes: [
    { height: "0", opacity: "0", overflow: "hidden" },
    { height: "auto", opacity: "1", overflow: "hidden" }
  ],
  options: { duration: 250, easing: "cubic-bezier(0.4, 0.0, 0.2, 1)" }
});
setDefaultAnimation("tree-item.collapse", {
  keyframes: [
    { height: "auto", opacity: "1", overflow: "hidden" },
    { height: "0", opacity: "0", overflow: "hidden" }
  ],
  options: { duration: 200, easing: "cubic-bezier(0.4, 0.0, 0.2, 1)" }
});

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HF7GESMZ.js
function clamp2(value, min2, max2) {
  const noNegativeZero = (n11) => Object.is(n11, -0) ? 0 : n11;
  if (value < min2) {
    return noNegativeZero(min2);
  }
  if (value > max2) {
    return noNegativeZero(max2);
  }
  return noNegativeZero(value);
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HWE2L2VL.js
function syncCheckboxes(changedTreeItem, initialSync = false) {
  function syncParentItem(treeItem) {
    const children = treeItem.getChildrenItems({ includeDisabled: false });
    if (children.length) {
      const allChecked = children.every((item) => item.selected);
      const allUnchecked = children.every((item) => !item.selected && !item.indeterminate);
      treeItem.selected = allChecked;
      treeItem.indeterminate = !allChecked && !allUnchecked;
    }
  }
  function syncAncestors(treeItem) {
    const parentItem = treeItem.parentElement;
    if (SlTreeItem.isTreeItem(parentItem)) {
      syncParentItem(parentItem);
      syncAncestors(parentItem);
    }
  }
  function syncDescendants(treeItem) {
    for (const childItem of treeItem.getChildrenItems()) {
      childItem.selected = initialSync ? treeItem.selected || childItem.selected : !childItem.disabled && treeItem.selected;
      syncDescendants(childItem);
    }
    if (initialSync) {
      syncParentItem(treeItem);
    }
  }
  syncDescendants(changedTreeItem);
  syncAncestors(changedTreeItem);
}
var SlTree = class extends ShoelaceElement {
  constructor() {
    super();
    this.selection = "single";
    this.clickTarget = null;
    this.initTreeItem = (item) => {
      item.selectable = this.selection === "multiple";
      ["expand", "collapse"].filter((status) => !!this.querySelector(`[slot="${status}-icon"]`)).forEach((status) => {
        const existingIcon = item.querySelector(`[slot="${status}-icon"]`);
        const expandButtonIcon = this.getExpandButtonIcon(status);
        if (!expandButtonIcon)
          return;
        if (existingIcon === null) {
          item.append(expandButtonIcon);
        } else if (existingIcon.hasAttribute("data-default")) {
          existingIcon.replaceWith(expandButtonIcon);
        } else {
        }
      });
    };
    this.handleTreeChanged = (mutations) => {
      for (const mutation of mutations) {
        const addedNodes = [...mutation.addedNodes].filter(SlTreeItem.isTreeItem);
        const removedNodes = [...mutation.removedNodes].filter(SlTreeItem.isTreeItem);
        addedNodes.forEach(this.initTreeItem);
        if (this.lastFocusedItem && removedNodes.includes(this.lastFocusedItem)) {
          this.lastFocusedItem = null;
        }
      }
    };
    this.handleFocusOut = (event) => {
      const relatedTarget = event.relatedTarget;
      if (!relatedTarget || !this.contains(relatedTarget)) {
        this.tabIndex = 0;
      }
    };
    this.handleFocusIn = (event) => {
      const target = event.target;
      if (event.target === this) {
        this.focusItem(this.lastFocusedItem || this.getAllTreeItems()[0]);
      }
      if (SlTreeItem.isTreeItem(target) && !target.disabled) {
        if (this.lastFocusedItem) {
          this.lastFocusedItem.tabIndex = -1;
        }
        this.lastFocusedItem = target;
        this.tabIndex = -1;
        target.tabIndex = 0;
      }
    };
    this.addEventListener("focusin", this.handleFocusIn);
    this.addEventListener("focusout", this.handleFocusOut);
    this.addEventListener("sl-lazy-change", this.handleSlotChange);
  }
  async connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "tree");
    this.setAttribute("tabindex", "0");
    await this.updateComplete;
    this.mutationObserver = new MutationObserver(this.handleTreeChanged);
    this.mutationObserver.observe(this, { childList: true, subtree: true });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.mutationObserver.disconnect();
  }
  // Generates a clone of the expand icon element to use for each tree item
  getExpandButtonIcon(status) {
    const slot = status === "expand" ? this.expandedIconSlot : this.collapsedIconSlot;
    const icon = slot.assignedElements({ flatten: true })[0];
    if (icon) {
      const clone = icon.cloneNode(true);
      [clone, ...clone.querySelectorAll("[id]")].forEach((el) => el.removeAttribute("id"));
      clone.setAttribute("data-default", "");
      clone.slot = `${status}-icon`;
      return clone;
    }
    return null;
  }
  selectItem(selectedItem) {
    const previousSelection = [...this.selectedItems];
    if (this.selection === "multiple") {
      selectedItem.selected = !selectedItem.selected;
      if (selectedItem.lazy) {
        selectedItem.expanded = true;
      }
      syncCheckboxes(selectedItem);
    } else if (this.selection === "single" || selectedItem.isLeaf) {
      const items = this.getAllTreeItems();
      for (const item of items) {
        item.selected = item === selectedItem;
      }
    } else if (this.selection === "leaf") {
      selectedItem.expanded = !selectedItem.expanded;
    }
    const nextSelection = this.selectedItems;
    if (previousSelection.length !== nextSelection.length || nextSelection.some((item) => !previousSelection.includes(item))) {
      Promise.all(nextSelection.map((el) => el.updateComplete)).then(() => {
        this.emit("sl-selection-change", { detail: { selection: nextSelection } });
      });
    }
  }
  getAllTreeItems() {
    return [...this.querySelectorAll("sl-tree-item")];
  }
  focusItem(item) {
    item == null ? void 0 : item.focus();
  }
  handleKeyDown(event) {
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", "Home", "End", "Enter", " "].includes(event.key)) {
      return;
    }
    if (event.composedPath().some((el) => {
      var _a;
      return ["input", "textarea"].includes((_a = el == null ? void 0 : el.tagName) == null ? void 0 : _a.toLowerCase());
    })) {
      return;
    }
    const items = this.getFocusableItems();
    const isLtr = this.matches(":dir(ltr)");
    const isRtl = this.matches(":dir(rtl)");
    if (items.length > 0) {
      event.preventDefault();
      const activeItemIndex = items.findIndex((item) => item.matches(":focus"));
      const activeItem = items[activeItemIndex];
      const focusItemAt = (index) => {
        const item = items[clamp2(index, 0, items.length - 1)];
        this.focusItem(item);
      };
      const toggleExpand = (expanded) => {
        activeItem.expanded = expanded;
      };
      if (event.key === "ArrowDown") {
        focusItemAt(activeItemIndex + 1);
      } else if (event.key === "ArrowUp") {
        focusItemAt(activeItemIndex - 1);
      } else if (isLtr && event.key === "ArrowRight" || isRtl && event.key === "ArrowLeft") {
        if (!activeItem || activeItem.disabled || activeItem.expanded || activeItem.isLeaf && !activeItem.lazy) {
          focusItemAt(activeItemIndex + 1);
        } else {
          toggleExpand(true);
        }
      } else if (isLtr && event.key === "ArrowLeft" || isRtl && event.key === "ArrowRight") {
        if (!activeItem || activeItem.disabled || activeItem.isLeaf || !activeItem.expanded) {
          focusItemAt(activeItemIndex - 1);
        } else {
          toggleExpand(false);
        }
      } else if (event.key === "Home") {
        focusItemAt(0);
      } else if (event.key === "End") {
        focusItemAt(items.length - 1);
      } else if (event.key === "Enter" || event.key === " ") {
        if (!activeItem.disabled) {
          this.selectItem(activeItem);
        }
      }
    }
  }
  handleClick(event) {
    const target = event.target;
    const treeItem = target.closest("sl-tree-item");
    const isExpandButton = event.composedPath().some((el) => {
      var _a;
      return (_a = el == null ? void 0 : el.classList) == null ? void 0 : _a.contains("tree-item__expand-button");
    });
    if (!treeItem || treeItem.disabled || target !== this.clickTarget) {
      return;
    }
    if (isExpandButton) {
      treeItem.expanded = !treeItem.expanded;
    } else {
      this.selectItem(treeItem);
    }
  }
  handleMouseDown(event) {
    this.clickTarget = event.target;
  }
  handleSlotChange() {
    const items = this.getAllTreeItems();
    items.forEach(this.initTreeItem);
  }
  async handleSelectionChange() {
    const isSelectionMultiple = this.selection === "multiple";
    const items = this.getAllTreeItems();
    this.setAttribute("aria-multiselectable", isSelectionMultiple ? "true" : "false");
    for (const item of items) {
      item.selectable = isSelectionMultiple;
    }
    if (isSelectionMultiple) {
      await this.updateComplete;
      [...this.querySelectorAll(":scope > sl-tree-item")].forEach(
        (treeItem) => syncCheckboxes(treeItem, true)
      );
    }
  }
  /** @internal Returns the list of tree items that are selected in the tree. */
  get selectedItems() {
    const items = this.getAllTreeItems();
    const isSelected = (item) => item.selected;
    return items.filter(isSelected);
  }
  /** @internal Gets focusable tree items in the tree. */
  getFocusableItems() {
    const items = this.getAllTreeItems();
    const collapsedItems = /* @__PURE__ */ new Set();
    return items.filter((item) => {
      var _a;
      if (item.disabled)
        return false;
      const parent = (_a = item.parentElement) == null ? void 0 : _a.closest("[role=treeitem]");
      if (parent && (!parent.expanded || parent.loading || collapsedItems.has(parent))) {
        collapsedItems.add(item);
      }
      return !collapsedItems.has(item);
    });
  }
  render() {
    return x`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `;
  }
};
SlTree.styles = [component_styles_default, tree_styles_default];
__decorateClass([
  e5("slot:not([name])")
], SlTree.prototype, "defaultSlot", 2);
__decorateClass([
  e5("slot[name=expand-icon]")
], SlTree.prototype, "expandedIconSlot", 2);
__decorateClass([
  e5("slot[name=collapse-icon]")
], SlTree.prototype, "collapsedIconSlot", 2);
__decorateClass([
  n4()
], SlTree.prototype, "selection", 2);
__decorateClass([
  watch("selection")
], SlTree.prototype, "handleSelectionChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.EFBVBT7U.js
var React3 = __toESM(require_react(), 1);
var tagName3 = "sl-tree";
SlTree.define("sl-tree");
var reactWrapper3 = o7({
  tagName: tagName3,
  elementClass: SlTree,
  react: React3,
  events: {
    onSlSelectionChange: "sl-selection-change"
  },
  displayName: "SlTree"
});
var tree_default = reactWrapper3;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6S3FJ5ZR.js
var React4 = __toESM(require_react(), 1);
var tagName4 = "sl-tree-item";
SlTreeItem.define("sl-tree-item");
var reactWrapper4 = o7({
  tagName: tagName4,
  elementClass: SlTreeItem,
  react: React4,
  events: {
    onSlExpand: "sl-expand",
    onSlAfterExpand: "sl-after-expand",
    onSlCollapse: "sl-collapse",
    onSlAfterCollapse: "sl-after-collapse",
    onSlLazyChange: "sl-lazy-change",
    onSlLazyLoad: "sl-lazy-load"
  },
  displayName: "SlTreeItem"
});
var tree_item_default = reactWrapper4;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.YKKSQ2FG.js
var visually_hidden_styles_default = i`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3N7QX4PF.js
var SlVisuallyHidden = class extends ShoelaceElement {
  render() {
    return x` <slot></slot> `;
  }
};
SlVisuallyHidden.styles = [component_styles_default, visually_hidden_styles_default];

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.E7HUPGHA.js
var React5 = __toESM(require_react(), 1);
var tagName5 = "sl-visually-hidden";
SlVisuallyHidden.define("sl-visually-hidden");
var reactWrapper5 = o7({
  tagName: tagName5,
  elementClass: SlVisuallyHidden,
  react: React5,
  events: {},
  displayName: "SlVisuallyHidden"
});
var visually_hidden_default = reactWrapper5;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.C4C2QMRG.js
var select_styles_default = i`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Suffix */
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RWUUFNUL.js
function getOffset(element, parent) {
  return {
    top: Math.round(element.getBoundingClientRect().top - parent.getBoundingClientRect().top),
    left: Math.round(element.getBoundingClientRect().left - parent.getBoundingClientRect().left)
  };
}
var locks = /* @__PURE__ */ new Set();
function getScrollbarWidth() {
  const documentWidth = document.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}
function getExistingBodyPadding() {
  const padding = Number(getComputedStyle(document.body).paddingRight.replace(/px/, ""));
  if (isNaN(padding) || !padding) {
    return 0;
  }
  return padding;
}
function lockBodyScrolling(lockingEl) {
  locks.add(lockingEl);
  if (!document.documentElement.classList.contains("sl-scroll-lock")) {
    const scrollbarWidth = getScrollbarWidth() + getExistingBodyPadding();
    let scrollbarGutterProperty = getComputedStyle(document.documentElement).scrollbarGutter;
    if (!scrollbarGutterProperty || scrollbarGutterProperty === "auto") {
      scrollbarGutterProperty = "stable";
    }
    if (scrollbarWidth < 2) {
      scrollbarGutterProperty = "";
    }
    document.documentElement.style.setProperty("--sl-scroll-lock-gutter", scrollbarGutterProperty);
    document.documentElement.classList.add("sl-scroll-lock");
    document.documentElement.style.setProperty("--sl-scroll-lock-size", `${scrollbarWidth}px`);
  }
}
function unlockBodyScrolling(lockingEl) {
  locks.delete(lockingEl);
  if (locks.size === 0) {
    document.documentElement.classList.remove("sl-scroll-lock");
    document.documentElement.style.removeProperty("--sl-scroll-lock-size");
  }
}
function scrollIntoView(element, container, direction = "vertical", behavior = "smooth") {
  const offset3 = getOffset(element, container);
  const offsetTop = offset3.top + container.scrollTop;
  const offsetLeft = offset3.left + container.scrollLeft;
  const minX = container.scrollLeft;
  const maxX = container.scrollLeft + container.offsetWidth;
  const minY = container.scrollTop;
  const maxY = container.scrollTop + container.offsetHeight;
  if (direction === "horizontal" || direction === "both") {
    if (offsetLeft < minX) {
      container.scrollTo({ left: offsetLeft, behavior });
    } else if (offsetLeft + element.clientWidth > maxX) {
      container.scrollTo({ left: offsetLeft - container.offsetWidth + element.clientWidth, behavior });
    }
  }
  if (direction === "vertical" || direction === "both") {
    if (offsetTop < minY) {
      container.scrollTo({ top: offsetTop, behavior });
    } else if (offsetTop + element.clientHeight > maxY) {
      container.scrollTo({ top: offsetTop - container.offsetHeight + element.clientHeight, behavior });
    }
  }
}

// node_modules/lit-html/directives/unsafe-html.js
var e11 = class extends i4 {
  constructor(i6) {
    if (super(i6), this.it = T, i6.type !== t5.CHILD)
      throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(r10) {
    if (r10 === T || null == r10)
      return this._t = void 0, this.it = r10;
    if (r10 === w)
      return r10;
    if ("string" != typeof r10)
      throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (r10 === this.it)
      return this._t;
    this.it = r10;
    const s6 = [r10];
    return s6.raw = s6, this._t = { _$litType$: this.constructor.resultType, strings: s6, values: [] };
  }
};
e11.directiveName = "unsafeHTML", e11.resultType = 1;
var o9 = e7(e11);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4SNTZZFN.js
var SlSelect = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      assumeInteractionOn: ["sl-blur", "sl-input"]
    });
    this.hasSlotController = new HasSlotController(this, "help-text", "label");
    this.localize = new LocalizeController2(this);
    this.typeToSelectString = "";
    this.hasFocus = false;
    this.displayLabel = "";
    this.selectedOptions = [];
    this.name = "";
    this.value = "";
    this.defaultValue = "";
    this.size = "medium";
    this.placeholder = "";
    this.multiple = false;
    this.maxOptionsVisible = 3;
    this.disabled = false;
    this.clearable = false;
    this.open = false;
    this.hoist = false;
    this.filled = false;
    this.pill = false;
    this.label = "";
    this.placement = "bottom";
    this.helpText = "";
    this.form = "";
    this.required = false;
    this.getTag = (option) => {
      return x`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${(event) => this.handleTagRemove(event, option)}
      >
        ${option.getTextLabel()}
      </sl-tag>
    `;
    };
    this.handleDocumentFocusIn = (event) => {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    };
    this.handleDocumentKeyDown = (event) => {
      const target = event.target;
      const isClearButton = target.closest(".select__clear") !== null;
      const isIconButton = target.closest("sl-icon-button") !== null;
      if (isClearButton || isIconButton) {
        return;
      }
      if (event.key === "Escape" && this.open && !this.closeWatcher) {
        event.preventDefault();
        event.stopPropagation();
        this.hide();
        this.displayInput.focus({ preventScroll: true });
      }
      if (event.key === "Enter" || event.key === " " && this.typeToSelectString === "") {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (!this.open) {
          this.show();
          return;
        }
        if (this.currentOption && !this.currentOption.disabled) {
          if (this.multiple) {
            this.toggleOptionSelection(this.currentOption);
          } else {
            this.setSelectedOptions(this.currentOption);
          }
          this.updateComplete.then(() => {
            this.emit("sl-input");
            this.emit("sl-change");
          });
          if (!this.multiple) {
            this.hide();
            this.displayInput.focus({ preventScroll: true });
          }
        }
        return;
      }
      if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
        const allOptions = this.getAllOptions();
        const currentIndex = allOptions.indexOf(this.currentOption);
        let newIndex = Math.max(0, currentIndex);
        event.preventDefault();
        if (!this.open) {
          this.show();
          if (this.currentOption) {
            return;
          }
        }
        if (event.key === "ArrowDown") {
          newIndex = currentIndex + 1;
          if (newIndex > allOptions.length - 1)
            newIndex = 0;
        } else if (event.key === "ArrowUp") {
          newIndex = currentIndex - 1;
          if (newIndex < 0)
            newIndex = allOptions.length - 1;
        } else if (event.key === "Home") {
          newIndex = 0;
        } else if (event.key === "End") {
          newIndex = allOptions.length - 1;
        }
        this.setCurrentOption(allOptions[newIndex]);
      }
      if (event.key.length === 1 || event.key === "Backspace") {
        const allOptions = this.getAllOptions();
        if (event.metaKey || event.ctrlKey || event.altKey) {
          return;
        }
        if (!this.open) {
          if (event.key === "Backspace") {
            return;
          }
          this.show();
        }
        event.stopPropagation();
        event.preventDefault();
        clearTimeout(this.typeToSelectTimeout);
        this.typeToSelectTimeout = window.setTimeout(() => this.typeToSelectString = "", 1e3);
        if (event.key === "Backspace") {
          this.typeToSelectString = this.typeToSelectString.slice(0, -1);
        } else {
          this.typeToSelectString += event.key.toLowerCase();
        }
        for (const option of allOptions) {
          const label = option.getTextLabel().toLowerCase();
          if (label.startsWith(this.typeToSelectString)) {
            this.setCurrentOption(option);
            break;
          }
        }
      }
    };
    this.handleDocumentMouseDown = (event) => {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    };
  }
  /** Gets the validity state object */
  get validity() {
    return this.valueInput.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.valueInput.validationMessage;
  }
  connectedCallback() {
    super.connectedCallback();
    this.open = false;
  }
  addOpenListeners() {
    var _a;
    document.addEventListener("focusin", this.handleDocumentFocusIn);
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
    if (this.getRootNode() !== document) {
      this.getRootNode().addEventListener("focusin", this.handleDocumentFocusIn);
    }
    if ("CloseWatcher" in window) {
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
      this.closeWatcher = new CloseWatcher();
      this.closeWatcher.onclose = () => {
        if (this.open) {
          this.hide();
          this.displayInput.focus({ preventScroll: true });
        }
      };
    }
  }
  removeOpenListeners() {
    var _a;
    document.removeEventListener("focusin", this.handleDocumentFocusIn);
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
    if (this.getRootNode() !== document) {
      this.getRootNode().removeEventListener("focusin", this.handleDocumentFocusIn);
    }
    (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
  }
  handleFocus() {
    this.hasFocus = true;
    this.displayInput.setSelectionRange(0, 0);
    this.emit("sl-focus");
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("sl-blur");
  }
  handleLabelClick() {
    this.displayInput.focus();
  }
  handleComboboxMouseDown(event) {
    const path = event.composedPath();
    const isIconButton = path.some((el) => el instanceof Element && el.tagName.toLowerCase() === "sl-icon-button");
    if (this.disabled || isIconButton) {
      return;
    }
    event.preventDefault();
    this.displayInput.focus({ preventScroll: true });
    this.open = !this.open;
  }
  handleComboboxKeyDown(event) {
    if (event.key === "Tab") {
      return;
    }
    event.stopPropagation();
    this.handleDocumentKeyDown(event);
  }
  handleClearClick(event) {
    event.stopPropagation();
    if (this.value !== "") {
      this.setSelectedOptions([]);
      this.displayInput.focus({ preventScroll: true });
      this.updateComplete.then(() => {
        this.emit("sl-clear");
        this.emit("sl-input");
        this.emit("sl-change");
      });
    }
  }
  handleClearMouseDown(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  handleOptionClick(event) {
    const target = event.target;
    const option = target.closest("sl-option");
    const oldValue = this.value;
    if (option && !option.disabled) {
      if (this.multiple) {
        this.toggleOptionSelection(option);
      } else {
        this.setSelectedOptions(option);
      }
      this.updateComplete.then(() => this.displayInput.focus({ preventScroll: true }));
      if (this.value !== oldValue) {
        this.updateComplete.then(() => {
          this.emit("sl-input");
          this.emit("sl-change");
        });
      }
      if (!this.multiple) {
        this.hide();
        this.displayInput.focus({ preventScroll: true });
      }
    }
  }
  handleDefaultSlotChange() {
    const allOptions = this.getAllOptions();
    const value = Array.isArray(this.value) ? this.value : [this.value];
    const values = [];
    if (customElements.get("sl-option")) {
      allOptions.forEach((option) => values.push(option.value));
      this.setSelectedOptions(allOptions.filter((el) => value.includes(el.value)));
    } else {
      customElements.whenDefined("sl-option").then(() => this.handleDefaultSlotChange());
    }
  }
  handleTagRemove(event, option) {
    event.stopPropagation();
    if (!this.disabled) {
      this.toggleOptionSelection(option, false);
      this.updateComplete.then(() => {
        this.emit("sl-input");
        this.emit("sl-change");
      });
    }
  }
  // Gets an array of all <sl-option> elements
  getAllOptions() {
    return [...this.querySelectorAll("sl-option")];
  }
  // Gets the first <sl-option> element
  getFirstOption() {
    return this.querySelector("sl-option");
  }
  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  setCurrentOption(option) {
    const allOptions = this.getAllOptions();
    allOptions.forEach((el) => {
      el.current = false;
      el.tabIndex = -1;
    });
    if (option) {
      this.currentOption = option;
      option.current = true;
      option.tabIndex = 0;
      option.focus();
    }
  }
  // Sets the selected option(s)
  setSelectedOptions(option) {
    const allOptions = this.getAllOptions();
    const newSelectedOptions = Array.isArray(option) ? option : [option];
    allOptions.forEach((el) => el.selected = false);
    if (newSelectedOptions.length) {
      newSelectedOptions.forEach((el) => el.selected = true);
    }
    this.selectionChanged();
  }
  // Toggles an option's selected state
  toggleOptionSelection(option, force) {
    if (force === true || force === false) {
      option.selected = force;
    } else {
      option.selected = !option.selected;
    }
    this.selectionChanged();
  }
  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  selectionChanged() {
    var _a, _b, _c, _d;
    this.selectedOptions = this.getAllOptions().filter((el) => el.selected);
    if (this.multiple) {
      this.value = this.selectedOptions.map((el) => el.value);
      if (this.placeholder && this.value.length === 0) {
        this.displayLabel = "";
      } else {
        this.displayLabel = this.localize.term("numOptionsSelected", this.selectedOptions.length);
      }
    } else {
      this.value = (_b = (_a = this.selectedOptions[0]) == null ? void 0 : _a.value) != null ? _b : "";
      this.displayLabel = (_d = (_c = this.selectedOptions[0]) == null ? void 0 : _c.getTextLabel()) != null ? _d : "";
    }
    this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }
  get tags() {
    return this.selectedOptions.map((option, index) => {
      if (index < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
        const tag = this.getTag(option, index);
        return x`<div @sl-remove=${(e13) => this.handleTagRemove(e13, option)}>
          ${typeof tag === "string" ? o9(tag) : tag}
        </div>`;
      } else if (index === this.maxOptionsVisible) {
        return x`<sl-tag size=${this.size}>+${this.selectedOptions.length - index}</sl-tag>`;
      }
      return x``;
    });
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  handleDisabledChange() {
    if (this.disabled) {
      this.open = false;
      this.handleOpenChange();
    }
  }
  handleValueChange() {
    const allOptions = this.getAllOptions();
    const value = Array.isArray(this.value) ? this.value : [this.value];
    this.setSelectedOptions(allOptions.filter((el) => value.includes(el.value)));
  }
  async handleOpenChange() {
    if (this.open && !this.disabled) {
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption());
      this.emit("sl-show");
      this.addOpenListeners();
      await stopAnimations(this);
      this.listbox.hidden = false;
      this.popup.active = true;
      requestAnimationFrame(() => {
        this.setCurrentOption(this.currentOption);
      });
      const { keyframes, options } = getAnimation(this, "select.show", { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      if (this.currentOption) {
        scrollIntoView(this.currentOption, this.listbox, "vertical", "auto");
      }
      this.emit("sl-after-show");
    } else {
      this.emit("sl-hide");
      this.removeOpenListeners();
      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, "select.hide", { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.listbox.hidden = true;
      this.popup.active = false;
      this.emit("sl-after-hide");
    }
  }
  /** Shows the listbox. */
  async show() {
    if (this.open || this.disabled) {
      this.open = false;
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "sl-after-show");
  }
  /** Hides the listbox. */
  async hide() {
    if (!this.open || this.disabled) {
      this.open = false;
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "sl-after-hide");
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.valueInput.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.valueInput.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    this.valueInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  /** Sets focus on the control. */
  focus(options) {
    this.displayInput.focus(options);
  }
  /** Removes focus from the control. */
  blur() {
    this.displayInput.blur();
  }
  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasClearIcon = this.clearable && !this.disabled && this.value.length > 0;
    const isPlaceholderVisible = this.placeholder && this.value.length === 0;
    return x`
      <div
        part="form-control"
        class=${e8({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${hasLabel ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${e8({
      select: true,
      "select--standard": true,
      "select--filled": this.filled,
      "select--pill": this.pill,
      "select--open": this.open,
      "select--disabled": this.disabled,
      "select--multiple": this.multiple,
      "select--focused": this.hasFocus,
      "select--placeholder-visible": isPlaceholderVisible,
      "select--top": this.placement === "top",
      "select--bottom": this.placement === "bottom",
      "select--small": this.size === "small",
      "select--medium": this.size === "medium",
      "select--large": this.size === "large"
    })}
            placement=${this.placement}
            strategy=${this.hoist ? "fixed" : "absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open ? "true" : "false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled ? "true" : "false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple ? x`<div part="tags" class="select__tags">${this.tags}</div>` : ""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(", ") : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${hasClearIcon ? x`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  ` : ""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? "true" : "false"}
              aria-multiselectable=${this.multiple ? "true" : "false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
SlSelect.styles = [component_styles_default, form_control_styles_default, select_styles_default];
SlSelect.dependencies = {
  "sl-icon": SlIcon,
  "sl-popup": SlPopup,
  "sl-tag": SlTag
};
__decorateClass([
  e5(".select")
], SlSelect.prototype, "popup", 2);
__decorateClass([
  e5(".select__combobox")
], SlSelect.prototype, "combobox", 2);
__decorateClass([
  e5(".select__display-input")
], SlSelect.prototype, "displayInput", 2);
__decorateClass([
  e5(".select__value-input")
], SlSelect.prototype, "valueInput", 2);
__decorateClass([
  e5(".select__listbox")
], SlSelect.prototype, "listbox", 2);
__decorateClass([
  r6()
], SlSelect.prototype, "hasFocus", 2);
__decorateClass([
  r6()
], SlSelect.prototype, "displayLabel", 2);
__decorateClass([
  r6()
], SlSelect.prototype, "currentOption", 2);
__decorateClass([
  r6()
], SlSelect.prototype, "selectedOptions", 2);
__decorateClass([
  n4()
], SlSelect.prototype, "name", 2);
__decorateClass([
  n4({
    converter: {
      fromAttribute: (value) => value.split(" "),
      toAttribute: (value) => value.join(" ")
    }
  })
], SlSelect.prototype, "value", 2);
__decorateClass([
  defaultValue()
], SlSelect.prototype, "defaultValue", 2);
__decorateClass([
  n4({ reflect: true })
], SlSelect.prototype, "size", 2);
__decorateClass([
  n4()
], SlSelect.prototype, "placeholder", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlSelect.prototype, "multiple", 2);
__decorateClass([
  n4({ attribute: "max-options-visible", type: Number })
], SlSelect.prototype, "maxOptionsVisible", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlSelect.prototype, "disabled", 2);
__decorateClass([
  n4({ type: Boolean })
], SlSelect.prototype, "clearable", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlSelect.prototype, "open", 2);
__decorateClass([
  n4({ type: Boolean })
], SlSelect.prototype, "hoist", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlSelect.prototype, "filled", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlSelect.prototype, "pill", 2);
__decorateClass([
  n4()
], SlSelect.prototype, "label", 2);
__decorateClass([
  n4({ reflect: true })
], SlSelect.prototype, "placement", 2);
__decorateClass([
  n4({ attribute: "help-text" })
], SlSelect.prototype, "helpText", 2);
__decorateClass([
  n4({ reflect: true })
], SlSelect.prototype, "form", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlSelect.prototype, "required", 2);
__decorateClass([
  n4()
], SlSelect.prototype, "getTag", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlSelect.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], SlSelect.prototype, "handleValueChange", 1);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], SlSelect.prototype, "handleOpenChange", 1);
setDefaultAnimation("select.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
setDefaultAnimation("select.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.5PDMVFBU.js
var React6 = __toESM(require_react(), 1);
var tagName6 = "sl-select";
SlSelect.define("sl-select");
var reactWrapper6 = o7({
  tagName: tagName6,
  elementClass: SlSelect,
  react: React6,
  events: {
    onSlChange: "sl-change",
    onSlClear: "sl-clear",
    onSlInput: "sl-input",
    onSlFocus: "sl-focus",
    onSlBlur: "sl-blur",
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide",
    onSlInvalid: "sl-invalid"
  },
  displayName: "SlSelect"
});
var select_default = reactWrapper6;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UAYXD3AN.js
var split_panel_styles_default = i`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ESELY2US.js
function drag(container, options) {
  function move(pointerEvent) {
    const dims = container.getBoundingClientRect();
    const defaultView = container.ownerDocument.defaultView;
    const offsetX = dims.left + defaultView.scrollX;
    const offsetY = dims.top + defaultView.scrollY;
    const x2 = pointerEvent.pageX - offsetX;
    const y3 = pointerEvent.pageY - offsetY;
    if (options == null ? void 0 : options.onMove) {
      options.onMove(x2, y3);
    }
  }
  function stop() {
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerup", stop);
    if (options == null ? void 0 : options.onStop) {
      options.onStop();
    }
  }
  document.addEventListener("pointermove", move, { passive: true });
  document.addEventListener("pointerup", stop);
  if ((options == null ? void 0 : options.initialEvent) instanceof PointerEvent) {
    move(options.initialEvent);
  }
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PNQPWBL5.js
var SlSplitPanel = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
    this.position = 50;
    this.vertical = false;
    this.disabled = false;
    this.snapThreshold = 12;
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver((entries) => this.handleResize(entries));
    this.updateComplete.then(() => this.resizeObserver.observe(this));
    this.detectSize();
    this.cachedPositionInPixels = this.percentageToPixels(this.position);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(this);
  }
  detectSize() {
    const { width, height } = this.getBoundingClientRect();
    this.size = this.vertical ? height : width;
  }
  percentageToPixels(value) {
    return this.size * (value / 100);
  }
  pixelsToPercentage(value) {
    return value / this.size * 100;
  }
  handleDrag(event) {
    const isRtl = this.matches(":dir(rtl)");
    if (this.disabled) {
      return;
    }
    if (event.cancelable) {
      event.preventDefault();
    }
    drag(this, {
      onMove: (x2, y3) => {
        let newPositionInPixels = this.vertical ? y3 : x2;
        if (this.primary === "end") {
          newPositionInPixels = this.size - newPositionInPixels;
        }
        if (this.snap) {
          const snaps = this.snap.split(" ");
          snaps.forEach((value) => {
            let snapPoint;
            if (value.endsWith("%")) {
              snapPoint = this.size * (parseFloat(value) / 100);
            } else {
              snapPoint = parseFloat(value);
            }
            if (isRtl && !this.vertical) {
              snapPoint = this.size - snapPoint;
            }
            if (newPositionInPixels >= snapPoint - this.snapThreshold && newPositionInPixels <= snapPoint + this.snapThreshold) {
              newPositionInPixels = snapPoint;
            }
          });
        }
        this.position = clamp2(this.pixelsToPercentage(newPositionInPixels), 0, 100);
      },
      initialEvent: event
    });
  }
  handleKeyDown(event) {
    if (this.disabled) {
      return;
    }
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      let newPosition = this.position;
      const incr = (event.shiftKey ? 10 : 1) * (this.primary === "end" ? -1 : 1);
      event.preventDefault();
      if (event.key === "ArrowLeft" && !this.vertical || event.key === "ArrowUp" && this.vertical) {
        newPosition -= incr;
      }
      if (event.key === "ArrowRight" && !this.vertical || event.key === "ArrowDown" && this.vertical) {
        newPosition += incr;
      }
      if (event.key === "Home") {
        newPosition = this.primary === "end" ? 100 : 0;
      }
      if (event.key === "End") {
        newPosition = this.primary === "end" ? 0 : 100;
      }
      this.position = clamp2(newPosition, 0, 100);
    }
  }
  handleResize(entries) {
    const { width, height } = entries[0].contentRect;
    this.size = this.vertical ? height : width;
    if (isNaN(this.cachedPositionInPixels) || this.position === Infinity) {
      this.cachedPositionInPixels = Number(this.getAttribute("position-in-pixels"));
      this.positionInPixels = Number(this.getAttribute("position-in-pixels"));
      this.position = this.pixelsToPercentage(this.positionInPixels);
    }
    if (this.primary) {
      this.position = this.pixelsToPercentage(this.cachedPositionInPixels);
    }
  }
  handlePositionChange() {
    this.cachedPositionInPixels = this.percentageToPixels(this.position);
    this.positionInPixels = this.percentageToPixels(this.position);
    this.emit("sl-reposition");
  }
  handlePositionInPixelsChange() {
    this.position = this.pixelsToPercentage(this.positionInPixels);
  }
  handleVerticalChange() {
    this.detectSize();
  }
  render() {
    const gridTemplate = this.vertical ? "gridTemplateRows" : "gridTemplateColumns";
    const gridTemplateAlt = this.vertical ? "gridTemplateColumns" : "gridTemplateRows";
    const isRtl = this.matches(":dir(rtl)");
    const primary = `
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `;
    const secondary = "auto";
    if (this.primary === "end") {
      if (isRtl && !this.vertical) {
        this.style[gridTemplate] = `${primary} var(--divider-width) ${secondary}`;
      } else {
        this.style[gridTemplate] = `${secondary} var(--divider-width) ${primary}`;
      }
    } else {
      if (isRtl && !this.vertical) {
        this.style[gridTemplate] = `${secondary} var(--divider-width) ${primary}`;
      } else {
        this.style[gridTemplate] = `${primary} var(--divider-width) ${secondary}`;
      }
    }
    this.style[gridTemplateAlt] = "";
    return x`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${o6(this.disabled ? void 0 : "0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `;
  }
};
SlSplitPanel.styles = [component_styles_default, split_panel_styles_default];
__decorateClass([
  e5(".divider")
], SlSplitPanel.prototype, "divider", 2);
__decorateClass([
  n4({ type: Number, reflect: true })
], SlSplitPanel.prototype, "position", 2);
__decorateClass([
  n4({ attribute: "position-in-pixels", type: Number })
], SlSplitPanel.prototype, "positionInPixels", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlSplitPanel.prototype, "vertical", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlSplitPanel.prototype, "disabled", 2);
__decorateClass([
  n4()
], SlSplitPanel.prototype, "primary", 2);
__decorateClass([
  n4()
], SlSplitPanel.prototype, "snap", 2);
__decorateClass([
  n4({ type: Number, attribute: "snap-threshold" })
], SlSplitPanel.prototype, "snapThreshold", 2);
__decorateClass([
  watch("position")
], SlSplitPanel.prototype, "handlePositionChange", 1);
__decorateClass([
  watch("positionInPixels")
], SlSplitPanel.prototype, "handlePositionInPixelsChange", 1);
__decorateClass([
  watch("vertical")
], SlSplitPanel.prototype, "handleVerticalChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BLU2PR7O.js
var React7 = __toESM(require_react(), 1);
var tagName7 = "sl-split-panel";
SlSplitPanel.define("sl-split-panel");
var reactWrapper7 = o7({
  tagName: tagName7,
  elementClass: SlSplitPanel,
  react: React7,
  events: {
    onSlReposition: "sl-reposition"
  },
  displayName: "SlSplitPanel"
});
var split_panel_default = reactWrapper7;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MCMPKVNH.js
var React8 = __toESM(require_react(), 1);
var tagName8 = "sl-spinner";
SlSpinner.define("sl-spinner");
var reactWrapper8 = o7({
  tagName: tagName8,
  elementClass: SlSpinner,
  react: React8,
  events: {},
  displayName: "SlSpinner"
});
var spinner_default = reactWrapper8;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.EU44RQUN.js
var switch_styles_default = i`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BJK3IM5Z.js
var SlSwitch = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      value: (control) => control.checked ? control.value || "on" : void 0,
      defaultValue: (control) => control.defaultChecked,
      setValue: (control, checked) => control.checked = checked
    });
    this.hasSlotController = new HasSlotController(this, "help-text");
    this.hasFocus = false;
    this.title = "";
    this.name = "";
    this.size = "medium";
    this.disabled = false;
    this.checked = false;
    this.defaultChecked = false;
    this.form = "";
    this.required = false;
    this.helpText = "";
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("sl-blur");
  }
  handleInput() {
    this.emit("sl-input");
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  handleClick() {
    this.checked = !this.checked;
    this.emit("sl-change");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("sl-focus");
  }
  handleKeyDown(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.checked = false;
      this.emit("sl-change");
      this.emit("sl-input");
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      this.checked = true;
      this.emit("sl-change");
      this.emit("sl-input");
    }
  }
  handleCheckedChange() {
    this.input.checked = this.checked;
    this.formControlController.updateValidity();
  }
  handleDisabledChange() {
    this.formControlController.setValidity(true);
  }
  /** Simulates a click on the switch. */
  click() {
    this.input.click();
  }
  /** Sets focus on the switch. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the switch. */
  blur() {
    this.input.blur();
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  render() {
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    return x`
      <div
        class=${e8({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="base"
          class=${e8({
      switch: true,
      "switch--checked": this.checked,
      "switch--disabled": this.disabled,
      "switch--focused": this.hasFocus,
      "switch--small": this.size === "small",
      "switch--medium": this.size === "medium",
      "switch--large": this.size === "large"
    })}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${o6(this.value)}
            .checked=${l4(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked ? "true" : "false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${hasHelpText ? "false" : "true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
SlSwitch.styles = [component_styles_default, form_control_styles_default, switch_styles_default];
__decorateClass([
  e5('input[type="checkbox"]')
], SlSwitch.prototype, "input", 2);
__decorateClass([
  r6()
], SlSwitch.prototype, "hasFocus", 2);
__decorateClass([
  n4()
], SlSwitch.prototype, "title", 2);
__decorateClass([
  n4()
], SlSwitch.prototype, "name", 2);
__decorateClass([
  n4()
], SlSwitch.prototype, "value", 2);
__decorateClass([
  n4({ reflect: true })
], SlSwitch.prototype, "size", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlSwitch.prototype, "disabled", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlSwitch.prototype, "checked", 2);
__decorateClass([
  defaultValue("checked")
], SlSwitch.prototype, "defaultChecked", 2);
__decorateClass([
  n4({ reflect: true })
], SlSwitch.prototype, "form", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlSwitch.prototype, "required", 2);
__decorateClass([
  n4({ attribute: "help-text" })
], SlSwitch.prototype, "helpText", 2);
__decorateClass([
  watch("checked", { waitUntilFirstUpdate: true })
], SlSwitch.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlSwitch.prototype, "handleDisabledChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4X7H7EET.js
var React9 = __toESM(require_react(), 1);
var tagName9 = "sl-switch";
SlSwitch.define("sl-switch");
var reactWrapper9 = o7({
  tagName: tagName9,
  elementClass: SlSwitch,
  react: React9,
  events: {
    onSlBlur: "sl-blur",
    onSlChange: "sl-change",
    onSlInput: "sl-input",
    onSlFocus: "sl-focus",
    onSlInvalid: "sl-invalid"
  },
  displayName: "SlSwitch"
});
var switch_default = reactWrapper9;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LE3KWASX.js
var tab_styles_default = i`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible):not([disabled]) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus-visible) {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZCYUTMNY.js
var id = 0;
var SlTab = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
    this.attrId = ++id;
    this.componentId = `sl-tab-${this.attrId}`;
    this.panel = "";
    this.active = false;
    this.closable = false;
    this.disabled = false;
    this.tabIndex = 0;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "tab");
  }
  handleCloseClick(event) {
    event.stopPropagation();
    this.emit("sl-close");
  }
  handleActiveChange() {
    this.setAttribute("aria-selected", this.active ? "true" : "false");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    if (this.disabled && !this.active) {
      this.tabIndex = -1;
    } else {
      this.tabIndex = 0;
    }
  }
  render() {
    this.id = this.id.length > 0 ? this.id : this.componentId;
    return x`
      <div
        part="base"
        class=${e8({
      tab: true,
      "tab--active": this.active,
      "tab--closable": this.closable,
      "tab--disabled": this.disabled
    })}
      >
        <slot></slot>
        ${this.closable ? x`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            ` : ""}
      </div>
    `;
  }
};
SlTab.styles = [component_styles_default, tab_styles_default];
SlTab.dependencies = { "sl-icon-button": SlIconButton };
__decorateClass([
  e5(".tab")
], SlTab.prototype, "tab", 2);
__decorateClass([
  n4({ reflect: true })
], SlTab.prototype, "panel", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlTab.prototype, "active", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlTab.prototype, "closable", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlTab.prototype, "disabled", 2);
__decorateClass([
  n4({ type: Number, reflect: true })
], SlTab.prototype, "tabIndex", 2);
__decorateClass([
  watch("active")
], SlTab.prototype, "handleActiveChange", 1);
__decorateClass([
  watch("disabled")
], SlTab.prototype, "handleDisabledChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BG3YYZGN.js
var React10 = __toESM(require_react(), 1);
var tagName10 = "sl-tab";
SlTab.define("sl-tab");
var reactWrapper10 = o7({
  tagName: tagName10,
  elementClass: SlTab,
  react: React10,
  events: {
    onSlClose: "sl-close"
  },
  displayName: "SlTab"
});
var tab_default = reactWrapper10;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.G4XIACTT.js
var tab_group_styles_default = i`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.CLVNS6TL.js
var SlTabGroup = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
    this.tabs = [];
    this.focusableTabs = [];
    this.panels = [];
    this.hasScrollControls = false;
    this.placement = "top";
    this.activation = "auto";
    this.noScrollControls = false;
  }
  connectedCallback() {
    const whenAllDefined = Promise.all([
      customElements.whenDefined("sl-tab"),
      customElements.whenDefined("sl-tab-panel")
    ]);
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => {
      this.repositionIndicator();
      this.updateScrollControls();
    });
    this.mutationObserver = new MutationObserver((mutations) => {
      if (mutations.some((m3) => !["aria-labelledby", "aria-controls"].includes(m3.attributeName))) {
        setTimeout(() => this.setAriaLabels());
      }
      if (mutations.some((m3) => m3.attributeName === "disabled")) {
        this.syncTabsAndPanels();
      }
    });
    this.updateComplete.then(() => {
      this.syncTabsAndPanels();
      this.mutationObserver.observe(this, { attributes: true, childList: true, subtree: true });
      this.resizeObserver.observe(this.nav);
      whenAllDefined.then(() => {
        const intersectionObserver = new IntersectionObserver((entries, observer) => {
          var _a;
          if (entries[0].intersectionRatio > 0) {
            this.setAriaLabels();
            this.setActiveTab((_a = this.getActiveTab()) != null ? _a : this.tabs[0], { emitEvents: false });
            observer.unobserve(entries[0].target);
          }
        });
        intersectionObserver.observe(this.tabGroup);
      });
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.mutationObserver.disconnect();
    this.resizeObserver.unobserve(this.nav);
  }
  getAllTabs() {
    const slot = this.shadowRoot.querySelector('slot[name="nav"]');
    return slot.assignedElements();
  }
  getAllPanels() {
    return [...this.body.assignedElements()].filter((el) => el.tagName.toLowerCase() === "sl-tab-panel");
  }
  getActiveTab() {
    return this.tabs.find((el) => el.active);
  }
  handleClick(event) {
    const target = event.target;
    const tab = target.closest("sl-tab");
    const tabGroup = tab == null ? void 0 : tab.closest("sl-tab-group");
    if (tabGroup !== this) {
      return;
    }
    if (tab !== null) {
      this.setActiveTab(tab, { scrollBehavior: "smooth" });
    }
  }
  handleKeyDown(event) {
    const target = event.target;
    const tab = target.closest("sl-tab");
    const tabGroup = tab == null ? void 0 : tab.closest("sl-tab-group");
    if (tabGroup !== this) {
      return;
    }
    if (["Enter", " "].includes(event.key)) {
      if (tab !== null) {
        this.setActiveTab(tab, { scrollBehavior: "smooth" });
        event.preventDefault();
      }
    }
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      const activeEl = this.tabs.find((t8) => t8.matches(":focus"));
      const isRtl = this.matches(":dir(rtl)");
      let nextTab = null;
      if ((activeEl == null ? void 0 : activeEl.tagName.toLowerCase()) === "sl-tab") {
        if (event.key === "Home") {
          nextTab = this.focusableTabs[0];
        } else if (event.key === "End") {
          nextTab = this.focusableTabs[this.focusableTabs.length - 1];
        } else if (["top", "bottom"].includes(this.placement) && event.key === (isRtl ? "ArrowRight" : "ArrowLeft") || ["start", "end"].includes(this.placement) && event.key === "ArrowUp") {
          const currentIndex = this.tabs.findIndex((el) => el === activeEl);
          nextTab = this.findNextFocusableTab(currentIndex, "backward");
        } else if (["top", "bottom"].includes(this.placement) && event.key === (isRtl ? "ArrowLeft" : "ArrowRight") || ["start", "end"].includes(this.placement) && event.key === "ArrowDown") {
          const currentIndex = this.tabs.findIndex((el) => el === activeEl);
          nextTab = this.findNextFocusableTab(currentIndex, "forward");
        }
        if (!nextTab) {
          return;
        }
        nextTab.tabIndex = 0;
        nextTab.focus({ preventScroll: true });
        if (this.activation === "auto") {
          this.setActiveTab(nextTab, { scrollBehavior: "smooth" });
        } else {
          this.tabs.forEach((tabEl) => {
            tabEl.tabIndex = tabEl === nextTab ? 0 : -1;
          });
        }
        if (["top", "bottom"].includes(this.placement)) {
          scrollIntoView(nextTab, this.nav, "horizontal");
        }
        event.preventDefault();
      }
    }
  }
  handleScrollToStart() {
    this.nav.scroll({
      left: this.localize.dir() === "rtl" ? this.nav.scrollLeft + this.nav.clientWidth : this.nav.scrollLeft - this.nav.clientWidth,
      behavior: "smooth"
    });
  }
  handleScrollToEnd() {
    this.nav.scroll({
      left: this.localize.dir() === "rtl" ? this.nav.scrollLeft - this.nav.clientWidth : this.nav.scrollLeft + this.nav.clientWidth,
      behavior: "smooth"
    });
  }
  setActiveTab(tab, options) {
    options = __spreadValues({
      emitEvents: true,
      scrollBehavior: "auto"
    }, options);
    if (tab !== this.activeTab && !tab.disabled) {
      const previousTab = this.activeTab;
      this.activeTab = tab;
      this.tabs.forEach((el) => {
        el.active = el === this.activeTab;
        el.tabIndex = el === this.activeTab ? 0 : -1;
      });
      this.panels.forEach((el) => {
        var _a;
        return el.active = el.name === ((_a = this.activeTab) == null ? void 0 : _a.panel);
      });
      this.syncIndicator();
      if (["top", "bottom"].includes(this.placement)) {
        scrollIntoView(this.activeTab, this.nav, "horizontal", options.scrollBehavior);
      }
      if (options.emitEvents) {
        if (previousTab) {
          this.emit("sl-tab-hide", { detail: { name: previousTab.panel } });
        }
        this.emit("sl-tab-show", { detail: { name: this.activeTab.panel } });
      }
    }
  }
  setAriaLabels() {
    this.tabs.forEach((tab) => {
      const panel = this.panels.find((el) => el.name === tab.panel);
      if (panel) {
        tab.setAttribute("aria-controls", panel.getAttribute("id"));
        panel.setAttribute("aria-labelledby", tab.getAttribute("id"));
      }
    });
  }
  repositionIndicator() {
    const currentTab = this.getActiveTab();
    if (!currentTab) {
      return;
    }
    const width = currentTab.clientWidth;
    const height = currentTab.clientHeight;
    const isRtl = this.matches(":dir(rtl)");
    const allTabs = this.getAllTabs();
    const precedingTabs = allTabs.slice(0, allTabs.indexOf(currentTab));
    const offset3 = precedingTabs.reduce(
      (previous, current) => ({
        left: previous.left + current.clientWidth,
        top: previous.top + current.clientHeight
      }),
      { left: 0, top: 0 }
    );
    switch (this.placement) {
      case "top":
      case "bottom":
        this.indicator.style.width = `${width}px`;
        this.indicator.style.height = "auto";
        this.indicator.style.translate = isRtl ? `${-1 * offset3.left}px` : `${offset3.left}px`;
        break;
      case "start":
      case "end":
        this.indicator.style.width = "auto";
        this.indicator.style.height = `${height}px`;
        this.indicator.style.translate = `0 ${offset3.top}px`;
        break;
    }
  }
  // This stores tabs and panels so we can refer to a cache instead of calling querySelectorAll() multiple times.
  syncTabsAndPanels() {
    this.tabs = this.getAllTabs();
    this.focusableTabs = this.tabs.filter((el) => !el.disabled);
    this.panels = this.getAllPanels();
    this.syncIndicator();
    this.updateComplete.then(() => this.updateScrollControls());
  }
  findNextFocusableTab(currentIndex, direction) {
    let nextTab = null;
    const iterator = direction === "forward" ? 1 : -1;
    let nextIndex = currentIndex + iterator;
    while (currentIndex < this.tabs.length) {
      nextTab = this.tabs[nextIndex] || null;
      if (nextTab === null) {
        if (direction === "forward") {
          nextTab = this.focusableTabs[0];
        } else {
          nextTab = this.focusableTabs[this.focusableTabs.length - 1];
        }
        break;
      }
      if (!nextTab.disabled) {
        break;
      }
      nextIndex += iterator;
    }
    return nextTab;
  }
  updateScrollControls() {
    if (this.noScrollControls) {
      this.hasScrollControls = false;
    } else {
      this.hasScrollControls = ["top", "bottom"].includes(this.placement) && this.nav.scrollWidth > this.nav.clientWidth + 1;
    }
  }
  syncIndicator() {
    const tab = this.getActiveTab();
    if (tab) {
      this.indicator.style.display = "block";
      this.repositionIndicator();
    } else {
      this.indicator.style.display = "none";
    }
  }
  /** Shows the specified tab panel. */
  show(panel) {
    const tab = this.tabs.find((el) => el.panel === panel);
    if (tab) {
      this.setActiveTab(tab, { scrollBehavior: "smooth" });
    }
  }
  render() {
    const isRtl = this.matches(":dir(rtl)");
    return x`
      <div
        part="base"
        class=${e8({
      "tab-group": true,
      "tab-group--top": this.placement === "top",
      "tab-group--bottom": this.placement === "bottom",
      "tab-group--start": this.placement === "start",
      "tab-group--end": this.placement === "end",
      "tab-group--rtl": this.localize.dir() === "rtl",
      "tab-group--has-scroll-controls": this.hasScrollControls
    })}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls ? x`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${isRtl ? "chevron-right" : "chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              ` : ""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls ? x`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${isRtl ? "chevron-left" : "chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              ` : ""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `;
  }
};
SlTabGroup.styles = [component_styles_default, tab_group_styles_default];
SlTabGroup.dependencies = { "sl-icon-button": SlIconButton };
__decorateClass([
  e5(".tab-group")
], SlTabGroup.prototype, "tabGroup", 2);
__decorateClass([
  e5(".tab-group__body")
], SlTabGroup.prototype, "body", 2);
__decorateClass([
  e5(".tab-group__nav")
], SlTabGroup.prototype, "nav", 2);
__decorateClass([
  e5(".tab-group__indicator")
], SlTabGroup.prototype, "indicator", 2);
__decorateClass([
  r6()
], SlTabGroup.prototype, "hasScrollControls", 2);
__decorateClass([
  n4()
], SlTabGroup.prototype, "placement", 2);
__decorateClass([
  n4()
], SlTabGroup.prototype, "activation", 2);
__decorateClass([
  n4({ attribute: "no-scroll-controls", type: Boolean })
], SlTabGroup.prototype, "noScrollControls", 2);
__decorateClass([
  watch("noScrollControls", { waitUntilFirstUpdate: true })
], SlTabGroup.prototype, "updateScrollControls", 1);
__decorateClass([
  watch("placement", { waitUntilFirstUpdate: true })
], SlTabGroup.prototype, "syncIndicator", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QDZEXGMK.js
var React11 = __toESM(require_react(), 1);
var tagName11 = "sl-tab-group";
SlTabGroup.define("sl-tab-group");
var reactWrapper11 = o7({
  tagName: tagName11,
  elementClass: SlTabGroup,
  react: React11,
  events: {
    onSlTabShow: "sl-tab-show",
    onSlTabHide: "sl-tab-hide"
  },
  displayName: "SlTabGroup"
});
var tab_group_default = reactWrapper11;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BQSEJD7X.js
var tab_panel_styles_default = i`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RULXOBUX.js
var id2 = 0;
var SlTabPanel = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.attrId = ++id2;
    this.componentId = `sl-tab-panel-${this.attrId}`;
    this.name = "";
    this.active = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.id = this.id.length > 0 ? this.id : this.componentId;
    this.setAttribute("role", "tabpanel");
  }
  handleActiveChange() {
    this.setAttribute("aria-hidden", this.active ? "false" : "true");
  }
  render() {
    return x`
      <slot
        part="base"
        class=${e8({
      "tab-panel": true,
      "tab-panel--active": this.active
    })}
      ></slot>
    `;
  }
};
SlTabPanel.styles = [component_styles_default, tab_panel_styles_default];
__decorateClass([
  n4({ reflect: true })
], SlTabPanel.prototype, "name", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlTabPanel.prototype, "active", 2);
__decorateClass([
  watch("active")
], SlTabPanel.prototype, "handleActiveChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BLJLFY2M.js
var React12 = __toESM(require_react(), 1);
var tagName12 = "sl-tab-panel";
SlTabPanel.define("sl-tab-panel");
var reactWrapper12 = o7({
  tagName: tagName12,
  elementClass: SlTabPanel,
  react: React12,
  events: {},
  displayName: "SlTabPanel"
});
var tab_panel_default = reactWrapper12;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PS5LPY3Z.js
var textarea_styles_default = i`
  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TLZPMHW.js
var SlTextarea = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      assumeInteractionOn: ["sl-blur", "sl-input"]
    });
    this.hasSlotController = new HasSlotController(this, "help-text", "label");
    this.hasFocus = false;
    this.title = "";
    this.name = "";
    this.value = "";
    this.size = "medium";
    this.filled = false;
    this.label = "";
    this.helpText = "";
    this.placeholder = "";
    this.rows = 4;
    this.resize = "vertical";
    this.disabled = false;
    this.readonly = false;
    this.form = "";
    this.required = false;
    this.spellcheck = true;
    this.defaultValue = "";
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight());
    this.updateComplete.then(() => {
      this.setTextareaHeight();
      this.resizeObserver.observe(this.input);
    });
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.input) {
      this.resizeObserver.unobserve(this.input);
    }
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("sl-blur");
  }
  handleChange() {
    this.value = this.input.value;
    this.setTextareaHeight();
    this.emit("sl-change");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("sl-focus");
  }
  handleInput() {
    this.value = this.input.value;
    this.emit("sl-input");
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  setTextareaHeight() {
    if (this.resize === "auto") {
      this.input.style.height = "auto";
      this.input.style.height = `${this.input.scrollHeight}px`;
    } else {
      this.input.style.height = void 0;
    }
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  handleRowsChange() {
    this.setTextareaHeight();
  }
  async handleValueChange() {
    await this.updateComplete;
    this.formControlController.updateValidity();
    this.setTextareaHeight();
  }
  /** Sets focus on the textarea. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the textarea. */
  blur() {
    this.input.blur();
  }
  /** Selects all the text in the textarea. */
  select() {
    this.input.select();
  }
  /** Gets or sets the textarea's scroll position. */
  scrollPosition(position) {
    if (position) {
      if (typeof position.top === "number")
        this.input.scrollTop = position.top;
      if (typeof position.left === "number")
        this.input.scrollLeft = position.left;
      return void 0;
    }
    return {
      top: this.input.scrollTop,
      left: this.input.scrollTop
    };
  }
  /** Sets the start and end positions of the text selection (0-based). */
  setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
    this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }
  /** Replaces a range of text with a new string. */
  setRangeText(replacement, start, end, selectMode = "preserve") {
    const selectionStart = start != null ? start : this.input.selectionStart;
    const selectionEnd = end != null ? end : this.input.selectionEnd;
    this.input.setRangeText(replacement, selectionStart, selectionEnd, selectMode);
    if (this.value !== this.input.value) {
      this.value = this.input.value;
      this.setTextareaHeight();
    }
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    return x`
      <div
        part="form-control"
        class=${e8({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${hasLabel ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${e8({
      textarea: true,
      "textarea--small": this.size === "small",
      "textarea--medium": this.size === "medium",
      "textarea--large": this.size === "large",
      "textarea--standard": !this.filled,
      "textarea--filled": this.filled,
      "textarea--disabled": this.disabled,
      "textarea--focused": this.hasFocus,
      "textarea--empty": !this.value,
      "textarea--resize-none": this.resize === "none",
      "textarea--resize-vertical": this.resize === "vertical",
      "textarea--resize-auto": this.resize === "auto"
    })}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${o6(this.name)}
              .value=${l4(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${o6(this.placeholder)}
              rows=${o6(this.rows)}
              minlength=${o6(this.minlength)}
              maxlength=${o6(this.maxlength)}
              autocapitalize=${o6(this.autocapitalize)}
              autocorrect=${o6(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${o6(this.spellcheck)}
              enterkeyhint=${o6(this.enterkeyhint)}
              inputmode=${o6(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
SlTextarea.styles = [component_styles_default, form_control_styles_default, textarea_styles_default];
__decorateClass([
  e5(".textarea__control")
], SlTextarea.prototype, "input", 2);
__decorateClass([
  r6()
], SlTextarea.prototype, "hasFocus", 2);
__decorateClass([
  n4()
], SlTextarea.prototype, "title", 2);
__decorateClass([
  n4()
], SlTextarea.prototype, "name", 2);
__decorateClass([
  n4()
], SlTextarea.prototype, "value", 2);
__decorateClass([
  n4({ reflect: true })
], SlTextarea.prototype, "size", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlTextarea.prototype, "filled", 2);
__decorateClass([
  n4()
], SlTextarea.prototype, "label", 2);
__decorateClass([
  n4({ attribute: "help-text" })
], SlTextarea.prototype, "helpText", 2);
__decorateClass([
  n4()
], SlTextarea.prototype, "placeholder", 2);
__decorateClass([
  n4({ type: Number })
], SlTextarea.prototype, "rows", 2);
__decorateClass([
  n4()
], SlTextarea.prototype, "resize", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlTextarea.prototype, "disabled", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlTextarea.prototype, "readonly", 2);
__decorateClass([
  n4({ reflect: true })
], SlTextarea.prototype, "form", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlTextarea.prototype, "required", 2);
__decorateClass([
  n4({ type: Number })
], SlTextarea.prototype, "minlength", 2);
__decorateClass([
  n4({ type: Number })
], SlTextarea.prototype, "maxlength", 2);
__decorateClass([
  n4()
], SlTextarea.prototype, "autocapitalize", 2);
__decorateClass([
  n4()
], SlTextarea.prototype, "autocorrect", 2);
__decorateClass([
  n4()
], SlTextarea.prototype, "autocomplete", 2);
__decorateClass([
  n4({ type: Boolean })
], SlTextarea.prototype, "autofocus", 2);
__decorateClass([
  n4()
], SlTextarea.prototype, "enterkeyhint", 2);
__decorateClass([
  n4({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (value) => !value || value === "false" ? false : true,
      toAttribute: (value) => value ? "true" : "false"
    }
  })
], SlTextarea.prototype, "spellcheck", 2);
__decorateClass([
  n4()
], SlTextarea.prototype, "inputmode", 2);
__decorateClass([
  defaultValue()
], SlTextarea.prototype, "defaultValue", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlTextarea.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("rows", { waitUntilFirstUpdate: true })
], SlTextarea.prototype, "handleRowsChange", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], SlTextarea.prototype, "handleValueChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HD55JXSJ.js
var React13 = __toESM(require_react(), 1);
var tagName13 = "sl-textarea";
SlTextarea.define("sl-textarea");
var reactWrapper13 = o7({
  tagName: tagName13,
  elementClass: SlTextarea,
  react: React13,
  events: {
    onSlBlur: "sl-blur",
    onSlChange: "sl-change",
    onSlFocus: "sl-focus",
    onSlInput: "sl-input",
    onSlInvalid: "sl-invalid"
  },
  displayName: "SlTextarea"
});
var textarea_default = reactWrapper13;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.FKMWLPHV.js
var radio_styles_default = i`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QQTW5PZI.js
var SlRadio = class extends ShoelaceElement {
  constructor() {
    super();
    this.checked = false;
    this.hasFocus = false;
    this.size = "medium";
    this.disabled = false;
    this.handleBlur = () => {
      this.hasFocus = false;
      this.emit("sl-blur");
    };
    this.handleClick = () => {
      if (!this.disabled) {
        this.checked = true;
      }
    };
    this.handleFocus = () => {
      this.hasFocus = true;
      this.emit("sl-focus");
    };
    this.addEventListener("blur", this.handleBlur);
    this.addEventListener("click", this.handleClick);
    this.addEventListener("focus", this.handleFocus);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setInitialAttributes();
  }
  setInitialAttributes() {
    this.setAttribute("role", "radio");
    this.setAttribute("tabindex", "-1");
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleCheckedChange() {
    this.setAttribute("aria-checked", this.checked ? "true" : "false");
    this.setAttribute("tabindex", this.checked ? "0" : "-1");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  render() {
    return x`
      <span
        part="base"
        class=${e8({
      radio: true,
      "radio--checked": this.checked,
      "radio--disabled": this.disabled,
      "radio--focused": this.hasFocus,
      "radio--small": this.size === "small",
      "radio--medium": this.size === "medium",
      "radio--large": this.size === "large"
    })}
      >
        <span part="${`control${this.checked ? " control--checked" : ""}`}" class="radio__control">
          ${this.checked ? x` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> ` : ""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `;
  }
};
SlRadio.styles = [component_styles_default, radio_styles_default];
SlRadio.dependencies = { "sl-icon": SlIcon };
__decorateClass([
  r6()
], SlRadio.prototype, "checked", 2);
__decorateClass([
  r6()
], SlRadio.prototype, "hasFocus", 2);
__decorateClass([
  n4()
], SlRadio.prototype, "value", 2);
__decorateClass([
  n4({ reflect: true })
], SlRadio.prototype, "size", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlRadio.prototype, "disabled", 2);
__decorateClass([
  watch("checked")
], SlRadio.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlRadio.prototype, "handleDisabledChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LBNZ32CW.js
var React14 = __toESM(require_react(), 1);
var tagName14 = "sl-radio";
SlRadio.define("sl-radio");
var reactWrapper14 = o7({
  tagName: tagName14,
  elementClass: SlRadio,
  react: React14,
  events: {
    onSlBlur: "sl-blur",
    onSlFocus: "sl-focus"
  },
  displayName: "SlRadio"
});
var radio_default = reactWrapper14;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MAQXLKQ7.js
var button_styles_default = i`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2P5EQCYK.js
var radio_button_styles_default = i`
  ${button_styles_default}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2VQCGLC7.js
var SlRadioButton = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "[default]", "prefix", "suffix");
    this.hasFocus = false;
    this.checked = false;
    this.disabled = false;
    this.size = "medium";
    this.pill = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "presentation");
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("sl-blur");
  }
  handleClick(e13) {
    if (this.disabled) {
      e13.preventDefault();
      e13.stopPropagation();
      return;
    }
    this.checked = true;
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("sl-focus");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  /** Sets focus on the radio button. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the radio button. */
  blur() {
    this.input.blur();
  }
  render() {
    return n5`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked ? " button--checked" : ""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${e8({
      button: true,
      "button--default": true,
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--checked": this.checked,
      "button--disabled": this.disabled,
      "button--focused": this.hasFocus,
      "button--outline": true,
      "button--pill": this.pill,
      "button--has-label": this.hasSlotController.test("[default]"),
      "button--has-prefix": this.hasSlotController.test("prefix"),
      "button--has-suffix": this.hasSlotController.test("suffix")
    })}
          aria-disabled=${this.disabled}
          type="button"
          value=${o6(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `;
  }
};
SlRadioButton.styles = [component_styles_default, radio_button_styles_default];
__decorateClass([
  e5(".button")
], SlRadioButton.prototype, "input", 2);
__decorateClass([
  e5(".hidden-input")
], SlRadioButton.prototype, "hiddenInput", 2);
__decorateClass([
  r6()
], SlRadioButton.prototype, "hasFocus", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlRadioButton.prototype, "checked", 2);
__decorateClass([
  n4()
], SlRadioButton.prototype, "value", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlRadioButton.prototype, "disabled", 2);
__decorateClass([
  n4({ reflect: true })
], SlRadioButton.prototype, "size", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlRadioButton.prototype, "pill", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlRadioButton.prototype, "handleDisabledChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3K4A3R3Q.js
var React15 = __toESM(require_react(), 1);
var tagName15 = "sl-radio-button";
SlRadioButton.define("sl-radio-button");
var reactWrapper15 = o7({
  tagName: tagName15,
  elementClass: SlRadioButton,
  react: React15,
  events: {
    onSlBlur: "sl-blur",
    onSlFocus: "sl-focus"
  },
  displayName: "SlRadioButton"
});
var radio_button_default = reactWrapper15;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B63YXDJO.js
var radio_group_styles_default = i`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2OUC42YY.js
var button_group_styles_default = i`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AKN2SAUH.js
var SlButtonGroup = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.disableRole = false;
    this.label = "";
  }
  handleFocus(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.toggleAttribute("data-sl-button-group__button--focus", true);
  }
  handleBlur(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.toggleAttribute("data-sl-button-group__button--focus", false);
  }
  handleMouseOver(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.toggleAttribute("data-sl-button-group__button--hover", true);
  }
  handleMouseOut(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.toggleAttribute("data-sl-button-group__button--hover", false);
  }
  handleSlotChange() {
    const slottedElements = [...this.defaultSlot.assignedElements({ flatten: true })];
    slottedElements.forEach((el) => {
      const index = slottedElements.indexOf(el);
      const button = findButton(el);
      if (button) {
        button.toggleAttribute("data-sl-button-group__button", true);
        button.toggleAttribute("data-sl-button-group__button--first", index === 0);
        button.toggleAttribute("data-sl-button-group__button--inner", index > 0 && index < slottedElements.length - 1);
        button.toggleAttribute("data-sl-button-group__button--last", index === slottedElements.length - 1);
        button.toggleAttribute(
          "data-sl-button-group__button--radio",
          button.tagName.toLowerCase() === "sl-radio-button"
        );
      }
    });
  }
  render() {
    return x`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole ? "presentation" : "group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
};
SlButtonGroup.styles = [component_styles_default, button_group_styles_default];
__decorateClass([
  e5("slot")
], SlButtonGroup.prototype, "defaultSlot", 2);
__decorateClass([
  r6()
], SlButtonGroup.prototype, "disableRole", 2);
__decorateClass([
  n4()
], SlButtonGroup.prototype, "label", 2);
function findButton(el) {
  var _a;
  const selector = "sl-button, sl-radio-button";
  return (_a = el.closest(selector)) != null ? _a : el.querySelector(selector);
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TSKLKQOV.js
var SlRadioGroup = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this);
    this.hasSlotController = new HasSlotController(this, "help-text", "label");
    this.customValidityMessage = "";
    this.hasButtonGroup = false;
    this.errorMessage = "";
    this.defaultValue = "";
    this.label = "";
    this.helpText = "";
    this.name = "option";
    this.value = "";
    this.size = "medium";
    this.form = "";
    this.required = false;
  }
  /** Gets the validity state object */
  get validity() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== "";
    if (hasCustomValidityMessage) {
      return customErrorValidityState;
    } else if (isRequiredAndEmpty) {
      return valueMissingValidityState;
    }
    return validValidityState;
  }
  /** Gets the validation message */
  get validationMessage() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== "";
    if (hasCustomValidityMessage) {
      return this.customValidityMessage;
    } else if (isRequiredAndEmpty) {
      return this.validationInput.validationMessage;
    }
    return "";
  }
  connectedCallback() {
    super.connectedCallback();
    this.defaultValue = this.value;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  getAllRadios() {
    return [...this.querySelectorAll("sl-radio, sl-radio-button")];
  }
  handleRadioClick(event) {
    const target = event.target.closest("sl-radio, sl-radio-button");
    const radios = this.getAllRadios();
    const oldValue = this.value;
    if (!target || target.disabled) {
      return;
    }
    this.value = target.value;
    radios.forEach((radio) => radio.checked = radio === target);
    if (this.value !== oldValue) {
      this.emit("sl-change");
      this.emit("sl-input");
    }
  }
  handleKeyDown(event) {
    var _a;
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(event.key)) {
      return;
    }
    const radios = this.getAllRadios().filter((radio) => !radio.disabled);
    const checkedRadio = (_a = radios.find((radio) => radio.checked)) != null ? _a : radios[0];
    const incr = event.key === " " ? 0 : ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
    const oldValue = this.value;
    let index = radios.indexOf(checkedRadio) + incr;
    if (index < 0) {
      index = radios.length - 1;
    }
    if (index > radios.length - 1) {
      index = 0;
    }
    this.getAllRadios().forEach((radio) => {
      radio.checked = false;
      if (!this.hasButtonGroup) {
        radio.setAttribute("tabindex", "-1");
      }
    });
    this.value = radios[index].value;
    radios[index].checked = true;
    if (!this.hasButtonGroup) {
      radios[index].setAttribute("tabindex", "0");
      radios[index].focus();
    } else {
      radios[index].shadowRoot.querySelector("button").focus();
    }
    if (this.value !== oldValue) {
      this.emit("sl-change");
      this.emit("sl-input");
    }
    event.preventDefault();
  }
  handleLabelClick() {
    const radios = this.getAllRadios();
    const checked = radios.find((radio) => radio.checked);
    const radioToFocus = checked || radios[0];
    if (radioToFocus) {
      radioToFocus.focus();
    }
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  async syncRadioElements() {
    var _a, _b;
    const radios = this.getAllRadios();
    await Promise.all(
      // Sync the checked state and size
      radios.map(async (radio) => {
        await radio.updateComplete;
        radio.checked = radio.value === this.value;
        radio.size = this.size;
      })
    );
    this.hasButtonGroup = radios.some((radio) => radio.tagName.toLowerCase() === "sl-radio-button");
    if (radios.length > 0 && !radios.some((radio) => radio.checked)) {
      if (this.hasButtonGroup) {
        const buttonRadio = (_a = radios[0].shadowRoot) == null ? void 0 : _a.querySelector("button");
        if (buttonRadio) {
          buttonRadio.setAttribute("tabindex", "0");
        }
      } else {
        radios[0].setAttribute("tabindex", "0");
      }
    }
    if (this.hasButtonGroup) {
      const buttonGroup = (_b = this.shadowRoot) == null ? void 0 : _b.querySelector("sl-button-group");
      if (buttonGroup) {
        buttonGroup.disableRole = true;
      }
    }
  }
  syncRadios() {
    if (customElements.get("sl-radio") && customElements.get("sl-radio-button")) {
      this.syncRadioElements();
      return;
    }
    if (customElements.get("sl-radio")) {
      this.syncRadioElements();
    } else {
      customElements.whenDefined("sl-radio").then(() => this.syncRadios());
    }
    if (customElements.get("sl-radio-button")) {
      this.syncRadioElements();
    } else {
      customElements.whenDefined("sl-radio-button").then(() => this.syncRadios());
    }
  }
  updateCheckedRadio() {
    const radios = this.getAllRadios();
    radios.forEach((radio) => radio.checked = radio.value === this.value);
    this.formControlController.setValidity(this.validity.valid);
  }
  handleSizeChange() {
    this.syncRadios();
  }
  handleValueChange() {
    if (this.hasUpdated) {
      this.updateCheckedRadio();
    }
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== "";
    if (isRequiredAndEmpty || hasCustomValidityMessage) {
      this.formControlController.emitInvalidEvent();
      return false;
    }
    return true;
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    const isValid = this.validity.valid;
    this.errorMessage = this.customValidityMessage || isValid ? "" : this.validationInput.validationMessage;
    this.formControlController.setValidity(isValid);
    this.validationInput.hidden = true;
    clearTimeout(this.validationTimeout);
    if (!isValid) {
      this.validationInput.hidden = false;
      this.validationInput.reportValidity();
      this.validationTimeout = setTimeout(() => this.validationInput.hidden = true, 1e4);
    }
    return isValid;
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message = "") {
    this.customValidityMessage = message;
    this.errorMessage = message;
    this.validationInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const defaultSlot = x`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;
    return x`
      <fieldset
        part="form-control"
        class=${e8({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--radio-group": true,
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${hasLabel ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup ? x`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${defaultSlot}
                </sl-button-group>
              ` : defaultSlot}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `;
  }
};
SlRadioGroup.styles = [component_styles_default, form_control_styles_default, radio_group_styles_default];
SlRadioGroup.dependencies = { "sl-button-group": SlButtonGroup };
__decorateClass([
  e5("slot:not([name])")
], SlRadioGroup.prototype, "defaultSlot", 2);
__decorateClass([
  e5(".radio-group__validation-input")
], SlRadioGroup.prototype, "validationInput", 2);
__decorateClass([
  r6()
], SlRadioGroup.prototype, "hasButtonGroup", 2);
__decorateClass([
  r6()
], SlRadioGroup.prototype, "errorMessage", 2);
__decorateClass([
  r6()
], SlRadioGroup.prototype, "defaultValue", 2);
__decorateClass([
  n4()
], SlRadioGroup.prototype, "label", 2);
__decorateClass([
  n4({ attribute: "help-text" })
], SlRadioGroup.prototype, "helpText", 2);
__decorateClass([
  n4()
], SlRadioGroup.prototype, "name", 2);
__decorateClass([
  n4({ reflect: true })
], SlRadioGroup.prototype, "value", 2);
__decorateClass([
  n4({ reflect: true })
], SlRadioGroup.prototype, "size", 2);
__decorateClass([
  n4({ reflect: true })
], SlRadioGroup.prototype, "form", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlRadioGroup.prototype, "required", 2);
__decorateClass([
  watch("size", { waitUntilFirstUpdate: true })
], SlRadioGroup.prototype, "handleSizeChange", 1);
__decorateClass([
  watch("value")
], SlRadioGroup.prototype, "handleValueChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NDD7BLNH.js
var React16 = __toESM(require_react(), 1);
var tagName16 = "sl-radio-group";
SlRadioGroup.define("sl-radio-group");
var reactWrapper16 = o7({
  tagName: tagName16,
  elementClass: SlRadioGroup,
  react: React16,
  events: {
    onSlChange: "sl-change",
    onSlInput: "sl-input",
    onSlInvalid: "sl-invalid"
  },
  displayName: "SlRadioGroup"
});
var radio_group_default = reactWrapper16;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.5D6IT2SR.js
var range_styles_default = i`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MMIBHC74.js
var SlRange = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this);
    this.hasSlotController = new HasSlotController(this, "help-text", "label");
    this.localize = new LocalizeController2(this);
    this.hasFocus = false;
    this.hasTooltip = false;
    this.title = "";
    this.name = "";
    this.value = 0;
    this.label = "";
    this.helpText = "";
    this.disabled = false;
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.tooltip = "top";
    this.tooltipFormatter = (value) => value.toString();
    this.form = "";
    this.defaultValue = 0;
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => this.syncRange());
    if (this.value < this.min) {
      this.value = this.min;
    }
    if (this.value > this.max) {
      this.value = this.max;
    }
    this.updateComplete.then(() => {
      this.syncRange();
      this.resizeObserver.observe(this.input);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(this.input);
  }
  handleChange() {
    this.emit("sl-change");
  }
  handleInput() {
    this.value = parseFloat(this.input.value);
    this.emit("sl-input");
    this.syncRange();
  }
  handleBlur() {
    this.hasFocus = false;
    this.hasTooltip = false;
    this.emit("sl-blur");
  }
  handleFocus() {
    this.hasFocus = true;
    this.hasTooltip = true;
    this.emit("sl-focus");
  }
  handleThumbDragStart() {
    this.hasTooltip = true;
  }
  handleThumbDragEnd() {
    this.hasTooltip = false;
  }
  syncProgress(percent) {
    this.input.style.setProperty("--percent", `${percent * 100}%`);
  }
  syncTooltip(percent) {
    if (this.output !== null) {
      const inputWidth = this.input.offsetWidth;
      const tooltipWidth = this.output.offsetWidth;
      const thumbSize = getComputedStyle(this.input).getPropertyValue("--thumb-size");
      const isRtl = this.matches(":dir(rtl)");
      const percentAsWidth = inputWidth * percent;
      if (isRtl) {
        const x2 = `${inputWidth - percentAsWidth}px + ${percent} * ${thumbSize}`;
        this.output.style.translate = `calc((${x2} - ${tooltipWidth / 2}px - ${thumbSize} / 2))`;
      } else {
        const x2 = `${percentAsWidth}px - ${percent} * ${thumbSize}`;
        this.output.style.translate = `calc(${x2} - ${tooltipWidth / 2}px + ${thumbSize} / 2)`;
      }
    }
  }
  handleValueChange() {
    this.formControlController.updateValidity();
    this.input.value = this.value.toString();
    this.value = parseFloat(this.input.value);
    this.syncRange();
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  syncRange() {
    const percent = Math.max(0, (this.value - this.min) / (this.max - this.min));
    this.syncProgress(percent);
    if (this.tooltip !== "none") {
      this.updateComplete.then(() => this.syncTooltip(percent));
    }
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  /** Sets focus on the range. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the range. */
  blur() {
    this.input.blur();
  }
  /** Increments the value of the range by the value of the step attribute. */
  stepUp() {
    this.input.stepUp();
    if (this.value !== Number(this.input.value)) {
      this.value = Number(this.input.value);
    }
  }
  /** Decrements the value of the range by the value of the step attribute. */
  stepDown() {
    this.input.stepDown();
    if (this.value !== Number(this.input.value)) {
      this.value = Number(this.input.value);
    }
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    return x`
      <div
        part="form-control"
        class=${e8({
      "form-control": true,
      "form-control--medium": true,
      // range only has one size
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${hasLabel ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${e8({
      range: true,
      "range--disabled": this.disabled,
      "range--focused": this.hasFocus,
      "range--rtl": this.localize.dir() === "rtl",
      "range--tooltip-visible": this.hasTooltip,
      "range--tooltip-top": this.tooltip === "top",
      "range--tooltip-bottom": this.tooltip === "bottom"
    })}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${o6(this.name)}
              ?disabled=${this.disabled}
              min=${o6(this.min)}
              max=${o6(this.max)}
              step=${o6(this.step)}
              .value=${l4(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip !== "none" && !this.disabled ? x`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter === "function" ? this.tooltipFormatter(this.value) : this.value}
                  </output>
                ` : ""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
SlRange.styles = [component_styles_default, form_control_styles_default, range_styles_default];
__decorateClass([
  e5(".range__control")
], SlRange.prototype, "input", 2);
__decorateClass([
  e5(".range__tooltip")
], SlRange.prototype, "output", 2);
__decorateClass([
  r6()
], SlRange.prototype, "hasFocus", 2);
__decorateClass([
  r6()
], SlRange.prototype, "hasTooltip", 2);
__decorateClass([
  n4()
], SlRange.prototype, "title", 2);
__decorateClass([
  n4()
], SlRange.prototype, "name", 2);
__decorateClass([
  n4({ type: Number })
], SlRange.prototype, "value", 2);
__decorateClass([
  n4()
], SlRange.prototype, "label", 2);
__decorateClass([
  n4({ attribute: "help-text" })
], SlRange.prototype, "helpText", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlRange.prototype, "disabled", 2);
__decorateClass([
  n4({ type: Number })
], SlRange.prototype, "min", 2);
__decorateClass([
  n4({ type: Number })
], SlRange.prototype, "max", 2);
__decorateClass([
  n4({ type: Number })
], SlRange.prototype, "step", 2);
__decorateClass([
  n4()
], SlRange.prototype, "tooltip", 2);
__decorateClass([
  n4({ attribute: false })
], SlRange.prototype, "tooltipFormatter", 2);
__decorateClass([
  n4({ reflect: true })
], SlRange.prototype, "form", 2);
__decorateClass([
  defaultValue()
], SlRange.prototype, "defaultValue", 2);
__decorateClass([
  t3({ passive: true })
], SlRange.prototype, "handleThumbDragStart", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], SlRange.prototype, "handleValueChange", 1);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlRange.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("hasTooltip", { waitUntilFirstUpdate: true })
], SlRange.prototype, "syncRange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SNIDJHWD.js
var React17 = __toESM(require_react(), 1);
var tagName17 = "sl-range";
SlRange.define("sl-range");
var reactWrapper17 = o7({
  tagName: tagName17,
  elementClass: SlRange,
  react: React17,
  events: {
    onSlBlur: "sl-blur",
    onSlChange: "sl-change",
    onSlFocus: "sl-focus",
    onSlInput: "sl-input",
    onSlInvalid: "sl-invalid"
  },
  displayName: "SlRange"
});
var range_default = reactWrapper17;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.X2WW2TWJ.js
var rating_styles_default = i`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;

// node_modules/lit-html/directives/style-map.js
var n8 = "important";
var i5 = " !" + n8;
var o10 = e7(class extends i4 {
  constructor(t8) {
    if (super(t8), t8.type !== t5.ATTRIBUTE || "style" !== t8.name || t8.strings?.length > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(t8) {
    return Object.keys(t8).reduce((e13, r10) => {
      const s6 = t8[r10];
      return null == s6 ? e13 : e13 + `${r10 = r10.includes("-") ? r10 : r10.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s6};`;
    }, "");
  }
  update(e13, [r10]) {
    const { style: s6 } = e13.element;
    if (void 0 === this.ft)
      return this.ft = new Set(Object.keys(r10)), this.render(r10);
    for (const t8 of this.ft)
      null == r10[t8] && (this.ft.delete(t8), t8.includes("-") ? s6.removeProperty(t8) : s6[t8] = null);
    for (const t8 in r10) {
      const e14 = r10[t8];
      if (null != e14) {
        this.ft.add(t8);
        const r11 = "string" == typeof e14 && e14.endsWith(i5);
        t8.includes("-") || r11 ? s6.setProperty(t8, r11 ? e14.slice(0, -11) : e14, r11 ? n8 : "") : s6[t8] = e14;
      }
    }
    return w;
  }
});

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.DPE4HMZR.js
var SlRating = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.hoverValue = 0;
    this.isHovering = false;
    this.label = "";
    this.value = 0;
    this.max = 5;
    this.precision = 1;
    this.readonly = false;
    this.disabled = false;
    this.getSymbol = () => '<sl-icon name="star-fill" library="system"></sl-icon>';
  }
  getValueFromMousePosition(event) {
    return this.getValueFromXCoordinate(event.clientX);
  }
  getValueFromTouchPosition(event) {
    return this.getValueFromXCoordinate(event.touches[0].clientX);
  }
  getValueFromXCoordinate(coordinate) {
    const isRtl = this.matches(":dir(rtl)");
    const { left, right, width } = this.rating.getBoundingClientRect();
    const value = isRtl ? this.roundToPrecision((right - coordinate) / width * this.max, this.precision) : this.roundToPrecision((coordinate - left) / width * this.max, this.precision);
    return clamp2(value, 0, this.max);
  }
  handleClick(event) {
    if (this.disabled) {
      return;
    }
    this.setValue(this.getValueFromMousePosition(event));
    this.emit("sl-change");
  }
  setValue(newValue) {
    if (this.disabled || this.readonly) {
      return;
    }
    this.value = newValue === this.value ? 0 : newValue;
    this.isHovering = false;
  }
  handleKeyDown(event) {
    const isLtr = this.matches(":dir(ltr)");
    const isRtl = this.matches(":dir(rtl)");
    const oldValue = this.value;
    if (this.disabled || this.readonly) {
      return;
    }
    if (event.key === "ArrowDown" || isLtr && event.key === "ArrowLeft" || isRtl && event.key === "ArrowRight") {
      const decrement = event.shiftKey ? 1 : this.precision;
      this.value = Math.max(0, this.value - decrement);
      event.preventDefault();
    }
    if (event.key === "ArrowUp" || isLtr && event.key === "ArrowRight" || isRtl && event.key === "ArrowLeft") {
      const increment = event.shiftKey ? 1 : this.precision;
      this.value = Math.min(this.max, this.value + increment);
      event.preventDefault();
    }
    if (event.key === "Home") {
      this.value = 0;
      event.preventDefault();
    }
    if (event.key === "End") {
      this.value = this.max;
      event.preventDefault();
    }
    if (this.value !== oldValue) {
      this.emit("sl-change");
    }
  }
  handleMouseEnter(event) {
    this.isHovering = true;
    this.hoverValue = this.getValueFromMousePosition(event);
  }
  handleMouseMove(event) {
    this.hoverValue = this.getValueFromMousePosition(event);
  }
  handleMouseLeave() {
    this.isHovering = false;
  }
  handleTouchStart(event) {
    this.isHovering = true;
    this.hoverValue = this.getValueFromTouchPosition(event);
    event.preventDefault();
  }
  handleTouchMove(event) {
    this.hoverValue = this.getValueFromTouchPosition(event);
  }
  handleTouchEnd(event) {
    this.isHovering = false;
    this.setValue(this.hoverValue);
    this.emit("sl-change");
    event.preventDefault();
  }
  roundToPrecision(numberToRound, precision = 0.5) {
    const multiplier = 1 / precision;
    return Math.ceil(numberToRound * multiplier) / multiplier;
  }
  handleHoverValueChange() {
    this.emit("sl-hover", {
      detail: {
        phase: "move",
        value: this.hoverValue
      }
    });
  }
  handleIsHoveringChange() {
    this.emit("sl-hover", {
      detail: {
        phase: this.isHovering ? "start" : "end",
        value: this.hoverValue
      }
    });
  }
  /** Sets focus on the rating. */
  focus(options) {
    this.rating.focus(options);
  }
  /** Removes focus from the rating. */
  blur() {
    this.rating.blur();
  }
  render() {
    const isRtl = this.matches(":dir(rtl)");
    const counter = Array.from(Array(this.max).keys());
    let displayValue = 0;
    if (this.disabled || this.readonly) {
      displayValue = this.value;
    } else {
      displayValue = this.isHovering ? this.hoverValue : this.value;
    }
    return x`
      <div
        part="base"
        class=${e8({
      rating: true,
      "rating--readonly": this.readonly,
      "rating--disabled": this.disabled,
      "rating--rtl": isRtl
    })}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-readonly=${this.readonly ? "true" : "false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled ? "-1" : "0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${counter.map((index) => {
      if (displayValue > index && displayValue < index + 1) {
        return x`
                <span
                  class=${e8({
          rating__symbol: true,
          "rating__partial-symbol-container": true,
          "rating__symbol--hover": this.isHovering && Math.ceil(displayValue) === index + 1
        })}
                  role="presentation"
                >
                  <div
                    style=${o10({
          clipPath: isRtl ? `inset(0 ${(displayValue - index) * 100}% 0 0)` : `inset(0 0 0 ${(displayValue - index) * 100}%)`
        })}
                  >
                    ${o9(this.getSymbol(index + 1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${o10({
          clipPath: isRtl ? `inset(0 0 0 ${100 - (displayValue - index) * 100}%)` : `inset(0 ${100 - (displayValue - index) * 100}% 0 0)`
        })}
                  >
                    ${o9(this.getSymbol(index + 1))}
                  </div>
                </span>
              `;
      }
      return x`
              <span
                class=${e8({
        rating__symbol: true,
        "rating__symbol--hover": this.isHovering && Math.ceil(displayValue) === index + 1,
        "rating__symbol--active": displayValue >= index + 1
      })}
                role="presentation"
              >
                ${o9(this.getSymbol(index + 1))}
              </span>
            `;
    })}
        </span>
      </div>
    `;
  }
};
SlRating.styles = [component_styles_default, rating_styles_default];
SlRating.dependencies = { "sl-icon": SlIcon };
__decorateClass([
  e5(".rating")
], SlRating.prototype, "rating", 2);
__decorateClass([
  r6()
], SlRating.prototype, "hoverValue", 2);
__decorateClass([
  r6()
], SlRating.prototype, "isHovering", 2);
__decorateClass([
  n4()
], SlRating.prototype, "label", 2);
__decorateClass([
  n4({ type: Number })
], SlRating.prototype, "value", 2);
__decorateClass([
  n4({ type: Number })
], SlRating.prototype, "max", 2);
__decorateClass([
  n4({ type: Number })
], SlRating.prototype, "precision", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlRating.prototype, "readonly", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlRating.prototype, "disabled", 2);
__decorateClass([
  n4()
], SlRating.prototype, "getSymbol", 2);
__decorateClass([
  t3({ passive: true })
], SlRating.prototype, "handleTouchMove", 1);
__decorateClass([
  watch("hoverValue")
], SlRating.prototype, "handleHoverValueChange", 1);
__decorateClass([
  watch("isHovering")
], SlRating.prototype, "handleIsHoveringChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.F4DECR2Q.js
var React18 = __toESM(require_react(), 1);
var tagName18 = "sl-rating";
SlRating.define("sl-rating");
var reactWrapper18 = o7({
  tagName: tagName18,
  elementClass: SlRating,
  react: React18,
  events: {
    onSlChange: "sl-change",
    onSlHover: "sl-hover"
  },
  displayName: "SlRating"
});
var rating_default = reactWrapper18;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TOLKYYLB.js
var availableUnits = [
  { max: 276e4, value: 6e4, unit: "minute" },
  // max 46 minutes
  { max: 72e6, value: 36e5, unit: "hour" },
  // max 20 hours
  { max: 5184e5, value: 864e5, unit: "day" },
  // max 6 days
  { max: 24192e5, value: 6048e5, unit: "week" },
  // max 28 days
  { max: 28512e6, value: 2592e6, unit: "month" },
  // max 11 months
  { max: Infinity, value: 31536e6, unit: "year" }
];
var SlRelativeTime = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
    this.isoTime = "";
    this.relativeTime = "";
    this.date = /* @__PURE__ */ new Date();
    this.format = "long";
    this.numeric = "auto";
    this.sync = false;
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this.updateTimeout);
  }
  render() {
    const now = /* @__PURE__ */ new Date();
    const then = new Date(this.date);
    if (isNaN(then.getMilliseconds())) {
      this.relativeTime = "";
      this.isoTime = "";
      return "";
    }
    const diff = then.getTime() - now.getTime();
    const { unit, value } = availableUnits.find((singleUnit) => Math.abs(diff) < singleUnit.max);
    this.isoTime = then.toISOString();
    this.relativeTime = this.localize.relativeTime(Math.round(diff / value), unit, {
      numeric: this.numeric,
      style: this.format
    });
    clearTimeout(this.updateTimeout);
    if (this.sync) {
      let nextInterval;
      if (unit === "minute") {
        nextInterval = getTimeUntilNextUnit("second");
      } else if (unit === "hour") {
        nextInterval = getTimeUntilNextUnit("minute");
      } else if (unit === "day") {
        nextInterval = getTimeUntilNextUnit("hour");
      } else {
        nextInterval = getTimeUntilNextUnit("day");
      }
      this.updateTimeout = window.setTimeout(() => this.requestUpdate(), nextInterval);
    }
    return x` <time datetime=${this.isoTime} title=${this.relativeTime}>${this.relativeTime}</time> `;
  }
};
__decorateClass([
  r6()
], SlRelativeTime.prototype, "isoTime", 2);
__decorateClass([
  r6()
], SlRelativeTime.prototype, "relativeTime", 2);
__decorateClass([
  n4()
], SlRelativeTime.prototype, "date", 2);
__decorateClass([
  n4()
], SlRelativeTime.prototype, "format", 2);
__decorateClass([
  n4()
], SlRelativeTime.prototype, "numeric", 2);
__decorateClass([
  n4({ type: Boolean })
], SlRelativeTime.prototype, "sync", 2);
function getTimeUntilNextUnit(unit) {
  const units = { second: 1e3, minute: 6e4, hour: 36e5, day: 864e5 };
  const value = units[unit];
  return value - Date.now() % value;
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LHHGTIBW.js
var React19 = __toESM(require_react(), 1);
var tagName19 = "sl-relative-time";
SlRelativeTime.define("sl-relative-time");
var reactWrapper19 = o7({
  tagName: tagName19,
  elementClass: SlRelativeTime,
  react: React19,
  events: {},
  displayName: "SlRelativeTime"
});
var relative_time_default = reactWrapper19;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.5VKIB4HA.js
var resize_observer_styles_default = i`
  :host {
    display: contents;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.5DYAXT55.js
var SlResizeObserver = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.observedElements = [];
    this.disabled = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver((entries) => {
      this.emit("sl-resize", { detail: { entries } });
    });
    if (!this.disabled) {
      this.startObserver();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopObserver();
  }
  handleSlotChange() {
    if (!this.disabled) {
      this.startObserver();
    }
  }
  startObserver() {
    const slot = this.shadowRoot.querySelector("slot");
    if (slot !== null) {
      const elements = slot.assignedElements({ flatten: true });
      this.observedElements.forEach((el) => this.resizeObserver.unobserve(el));
      this.observedElements = [];
      elements.forEach((el) => {
        this.resizeObserver.observe(el);
        this.observedElements.push(el);
      });
    }
  }
  stopObserver() {
    this.resizeObserver.disconnect();
  }
  handleDisabledChange() {
    if (this.disabled) {
      this.stopObserver();
    } else {
      this.startObserver();
    }
  }
  render() {
    return x` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }
};
SlResizeObserver.styles = [component_styles_default, resize_observer_styles_default];
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlResizeObserver.prototype, "disabled", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlResizeObserver.prototype, "handleDisabledChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.OELCCKGY.js
var React20 = __toESM(require_react(), 1);
var tagName20 = "sl-resize-observer";
SlResizeObserver.define("sl-resize-observer");
var reactWrapper20 = o7({
  tagName: tagName20,
  elementClass: SlResizeObserver,
  react: React20,
  events: {
    onSlResize: "sl-resize"
  },
  displayName: "SlResizeObserver"
});
var resize_observer_default = reactWrapper20;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HTQNKB5E.js
var skeleton_styles_default = i`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XNGAPZAP.js
var SlSkeleton = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.effect = "none";
  }
  render() {
    return x`
      <div
        part="base"
        class=${e8({
      skeleton: true,
      "skeleton--pulse": this.effect === "pulse",
      "skeleton--sheen": this.effect === "sheen"
    })}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `;
  }
};
SlSkeleton.styles = [component_styles_default, skeleton_styles_default];
__decorateClass([
  n4()
], SlSkeleton.prototype, "effect", 2);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HITAHCWO.js
var React21 = __toESM(require_react(), 1);
var tagName21 = "sl-skeleton";
SlSkeleton.define("sl-skeleton");
var reactWrapper21 = o7({
  tagName: tagName21,
  elementClass: SlSkeleton,
  react: React21,
  events: {},
  displayName: "SlSkeleton"
});
var skeleton_default = reactWrapper21;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KZJNDGFO.js
var menu_item_styles_default = i`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;

// node_modules/lit-html/async-directive.js
var s5 = (i6, t8) => {
  const e13 = i6._$AN;
  if (void 0 === e13)
    return false;
  for (const i7 of e13)
    i7._$AO?.(t8, false), s5(i7, t8);
  return true;
};
var o11 = (i6) => {
  let t8, e13;
  do {
    if (void 0 === (t8 = i6._$AM))
      break;
    e13 = t8._$AN, e13.delete(i6), i6 = t8;
  } while (0 === e13?.size);
};
var r9 = (i6) => {
  for (let t8; t8 = i6._$AM; i6 = t8) {
    let e13 = t8._$AN;
    if (void 0 === e13)
      t8._$AN = e13 = /* @__PURE__ */ new Set();
    else if (e13.has(i6))
      break;
    e13.add(i6), c4(t8);
  }
};
function h3(i6) {
  void 0 !== this._$AN ? (o11(this), this._$AM = i6, r9(this)) : this._$AM = i6;
}
function n9(i6, t8 = false, e13 = 0) {
  const r10 = this._$AH, h5 = this._$AN;
  if (void 0 !== h5 && 0 !== h5.size)
    if (t8)
      if (Array.isArray(r10))
        for (let i7 = e13; i7 < r10.length; i7++)
          s5(r10[i7], false), o11(r10[i7]);
      else
        null != r10 && (s5(r10, false), o11(r10));
    else
      s5(this, i6);
}
var c4 = (i6) => {
  i6.type == t5.CHILD && (i6._$AP ??= n9, i6._$AQ ??= h3);
};
var f4 = class extends i4 {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i6, t8, e13) {
    super._$AT(i6, t8, e13), r9(this), this.isConnected = i6._$AU;
  }
  _$AO(i6, t8 = true) {
    i6 !== this.isConnected && (this.isConnected = i6, i6 ? this.reconnected?.() : this.disconnected?.()), t8 && (s5(this, i6), o11(this));
  }
  setValue(t8) {
    if (f3(this._$Ct))
      this._$Ct._$AI(t8, this);
    else {
      const i6 = [...this._$Ct._$AH];
      i6[this._$Ci] = t8, this._$Ct._$AI(i6, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
};

// node_modules/lit-html/directives/ref.js
var e12 = () => new h4();
var h4 = class {
};
var o12 = /* @__PURE__ */ new WeakMap();
var n10 = e7(class extends f4 {
  render(i6) {
    return T;
  }
  update(i6, [s6]) {
    const e13 = s6 !== this.Y;
    return e13 && void 0 !== this.Y && this.rt(void 0), (e13 || this.lt !== this.ct) && (this.Y = s6, this.ht = i6.options?.host, this.rt(this.ct = i6.element)), T;
  }
  rt(t8) {
    if (this.isConnected || (t8 = void 0), "function" == typeof this.Y) {
      const i6 = this.ht ?? globalThis;
      let s6 = o12.get(i6);
      void 0 === s6 && (s6 = /* @__PURE__ */ new WeakMap(), o12.set(i6, s6)), void 0 !== s6.get(this.Y) && this.Y.call(this.ht, void 0), s6.set(this.Y, t8), void 0 !== t8 && this.Y.call(this.ht, t8);
    } else
      this.Y.value = t8;
  }
  get lt() {
    return "function" == typeof this.Y ? o12.get(this.ht ?? globalThis)?.get(this.Y) : this.Y?.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MUXIBDFW.js
var SubmenuController = class {
  constructor(host, hasSlotController) {
    this.popupRef = e12();
    this.enableSubmenuTimer = -1;
    this.isConnected = false;
    this.isPopupConnected = false;
    this.skidding = 0;
    this.submenuOpenDelay = 100;
    this.handleMouseMove = (event) => {
      this.host.style.setProperty("--safe-triangle-cursor-x", `${event.clientX}px`);
      this.host.style.setProperty("--safe-triangle-cursor-y", `${event.clientY}px`);
    };
    this.handleMouseOver = () => {
      if (this.hasSlotController.test("submenu")) {
        this.enableSubmenu();
      }
    };
    this.handleKeyDown = (event) => {
      switch (event.key) {
        case "Escape":
        case "Tab":
          this.disableSubmenu();
          break;
        case "ArrowLeft":
          if (event.target !== this.host) {
            event.preventDefault();
            event.stopPropagation();
            this.host.focus();
            this.disableSubmenu();
          }
          break;
        case "ArrowRight":
        case "Enter":
        case " ":
          this.handleSubmenuEntry(event);
          break;
        default:
          break;
      }
    };
    this.handleClick = (event) => {
      var _a;
      if (event.target === this.host) {
        event.preventDefault();
        event.stopPropagation();
      } else if (event.target instanceof Element && (event.target.tagName === "sl-menu-item" || ((_a = event.target.role) == null ? void 0 : _a.startsWith("menuitem")))) {
        this.disableSubmenu();
      }
    };
    this.handleFocusOut = (event) => {
      if (event.relatedTarget && event.relatedTarget instanceof Element && this.host.contains(event.relatedTarget)) {
        return;
      }
      this.disableSubmenu();
    };
    this.handlePopupMouseover = (event) => {
      event.stopPropagation();
    };
    this.handlePopupReposition = () => {
      const submenuSlot = this.host.renderRoot.querySelector("slot[name='submenu']");
      const menu = submenuSlot == null ? void 0 : submenuSlot.assignedElements({ flatten: true }).filter((el) => el.localName === "sl-menu")[0];
      const isRtl = this.host.matches(":dir(rtl)");
      if (!menu) {
        return;
      }
      const { left, top, width, height } = menu.getBoundingClientRect();
      this.host.style.setProperty("--safe-triangle-submenu-start-x", `${isRtl ? left + width : left}px`);
      this.host.style.setProperty("--safe-triangle-submenu-start-y", `${top}px`);
      this.host.style.setProperty("--safe-triangle-submenu-end-x", `${isRtl ? left + width : left}px`);
      this.host.style.setProperty("--safe-triangle-submenu-end-y", `${top + height}px`);
    };
    (this.host = host).addController(this);
    this.hasSlotController = hasSlotController;
  }
  hostConnected() {
    if (this.hasSlotController.test("submenu") && !this.host.disabled) {
      this.addListeners();
    }
  }
  hostDisconnected() {
    this.removeListeners();
  }
  hostUpdated() {
    if (this.hasSlotController.test("submenu") && !this.host.disabled) {
      this.addListeners();
      this.updateSkidding();
    } else {
      this.removeListeners();
    }
  }
  addListeners() {
    if (!this.isConnected) {
      this.host.addEventListener("mousemove", this.handleMouseMove);
      this.host.addEventListener("mouseover", this.handleMouseOver);
      this.host.addEventListener("keydown", this.handleKeyDown);
      this.host.addEventListener("click", this.handleClick);
      this.host.addEventListener("focusout", this.handleFocusOut);
      this.isConnected = true;
    }
    if (!this.isPopupConnected) {
      if (this.popupRef.value) {
        this.popupRef.value.addEventListener("mouseover", this.handlePopupMouseover);
        this.popupRef.value.addEventListener("sl-reposition", this.handlePopupReposition);
        this.isPopupConnected = true;
      }
    }
  }
  removeListeners() {
    if (this.isConnected) {
      this.host.removeEventListener("mousemove", this.handleMouseMove);
      this.host.removeEventListener("mouseover", this.handleMouseOver);
      this.host.removeEventListener("keydown", this.handleKeyDown);
      this.host.removeEventListener("click", this.handleClick);
      this.host.removeEventListener("focusout", this.handleFocusOut);
      this.isConnected = false;
    }
    if (this.isPopupConnected) {
      if (this.popupRef.value) {
        this.popupRef.value.removeEventListener("mouseover", this.handlePopupMouseover);
        this.popupRef.value.removeEventListener("sl-reposition", this.handlePopupReposition);
        this.isPopupConnected = false;
      }
    }
  }
  handleSubmenuEntry(event) {
    const submenuSlot = this.host.renderRoot.querySelector("slot[name='submenu']");
    if (!submenuSlot) {
      console.error("Cannot activate a submenu if no corresponding menuitem can be found.", this);
      return;
    }
    let menuItems = null;
    for (const elt of submenuSlot.assignedElements()) {
      menuItems = elt.querySelectorAll("sl-menu-item, [role^='menuitem']");
      if (menuItems.length !== 0) {
        break;
      }
    }
    if (!menuItems || menuItems.length === 0) {
      return;
    }
    menuItems[0].setAttribute("tabindex", "0");
    for (let i6 = 1; i6 !== menuItems.length; ++i6) {
      menuItems[i6].setAttribute("tabindex", "-1");
    }
    if (this.popupRef.value) {
      event.preventDefault();
      event.stopPropagation();
      if (this.popupRef.value.active) {
        if (menuItems[0] instanceof HTMLElement) {
          menuItems[0].focus();
        }
      } else {
        this.enableSubmenu(false);
        this.host.updateComplete.then(() => {
          if (menuItems[0] instanceof HTMLElement) {
            menuItems[0].focus();
          }
        });
        this.host.requestUpdate();
      }
    }
  }
  setSubmenuState(state) {
    if (this.popupRef.value) {
      if (this.popupRef.value.active !== state) {
        this.popupRef.value.active = state;
        this.host.requestUpdate();
      }
    }
  }
  // Shows the submenu. Supports disabling the opening delay, e.g. for keyboard events that want to set the focus to the
  // newly opened menu.
  enableSubmenu(delay = true) {
    if (delay) {
      window.clearTimeout(this.enableSubmenuTimer);
      this.enableSubmenuTimer = window.setTimeout(() => {
        this.setSubmenuState(true);
      }, this.submenuOpenDelay);
    } else {
      this.setSubmenuState(true);
    }
  }
  disableSubmenu() {
    window.clearTimeout(this.enableSubmenuTimer);
    this.setSubmenuState(false);
  }
  // Calculate the space the top of a menu takes-up, for aligning the popup menu-item with the activating element.
  updateSkidding() {
    var _a;
    if (!((_a = this.host.parentElement) == null ? void 0 : _a.computedStyleMap)) {
      return;
    }
    const styleMap = this.host.parentElement.computedStyleMap();
    const attrs = ["padding-top", "border-top-width", "margin-top"];
    const skidding = attrs.reduce((accumulator, attr) => {
      var _a2;
      const styleValue = (_a2 = styleMap.get(attr)) != null ? _a2 : new CSSUnitValue(0, "px");
      const unitValue = styleValue instanceof CSSUnitValue ? styleValue : new CSSUnitValue(0, "px");
      const pxValue = unitValue.to("px");
      return accumulator - pxValue.value;
    }, 0);
    this.skidding = skidding;
  }
  isExpanded() {
    return this.popupRef.value ? this.popupRef.value.active : false;
  }
  renderSubmenu() {
    const isRtl = this.host.matches(":dir(rtl)");
    if (!this.isConnected) {
      return x` <slot name="submenu" hidden></slot> `;
    }
    return x`
      <sl-popup
        ${n10(this.popupRef)}
        placement=${isRtl ? "left-start" : "right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `;
  }
};

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.EBRNZUKR.js
var SlMenuItem = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.type = "normal";
    this.checked = false;
    this.value = "";
    this.loading = false;
    this.disabled = false;
    this.hasSlotController = new HasSlotController(this, "submenu");
    this.submenuController = new SubmenuController(this, this.hasSlotController);
    this.handleHostClick = (event) => {
      if (this.disabled) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };
    this.handleMouseOver = (event) => {
      this.focus();
      event.stopPropagation();
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this.handleHostClick);
    this.addEventListener("mouseover", this.handleMouseOver);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this.handleHostClick);
    this.removeEventListener("mouseover", this.handleMouseOver);
  }
  handleDefaultSlotChange() {
    const textLabel = this.getTextLabel();
    if (typeof this.cachedTextLabel === "undefined") {
      this.cachedTextLabel = textLabel;
      return;
    }
    if (textLabel !== this.cachedTextLabel) {
      this.cachedTextLabel = textLabel;
      this.emit("slotchange", { bubbles: true, composed: false, cancelable: false });
    }
  }
  handleCheckedChange() {
    if (this.checked && this.type !== "checkbox") {
      this.checked = false;
      console.error('The checked attribute can only be used on menu items with type="checkbox"', this);
      return;
    }
    if (this.type === "checkbox") {
      this.setAttribute("aria-checked", this.checked ? "true" : "false");
    } else {
      this.removeAttribute("aria-checked");
    }
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleTypeChange() {
    if (this.type === "checkbox") {
      this.setAttribute("role", "menuitemcheckbox");
      this.setAttribute("aria-checked", this.checked ? "true" : "false");
    } else {
      this.setAttribute("role", "menuitem");
      this.removeAttribute("aria-checked");
    }
  }
  /** Returns a text label based on the contents of the menu item's default slot. */
  getTextLabel() {
    return getTextContent(this.defaultSlot);
  }
  isSubmenu() {
    return this.hasSlotController.test("submenu");
  }
  render() {
    const isRtl = this.matches(":dir(rtl)");
    const isSubmenuExpanded = this.submenuController.isExpanded();
    return x`
      <div
        id="anchor"
        part="base"
        class=${e8({
      "menu-item": true,
      "menu-item--rtl": isRtl,
      "menu-item--checked": this.checked,
      "menu-item--disabled": this.disabled,
      "menu-item--loading": this.loading,
      "menu-item--has-submenu": this.isSubmenu(),
      "menu-item--submenu-expanded": isSubmenuExpanded
    })}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${isSubmenuExpanded ? true : false}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${isRtl ? "chevron-left" : "chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading ? x` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> ` : ""}
      </div>
    `;
  }
};
SlMenuItem.styles = [component_styles_default, menu_item_styles_default];
SlMenuItem.dependencies = {
  "sl-icon": SlIcon,
  "sl-popup": SlPopup,
  "sl-spinner": SlSpinner
};
__decorateClass([
  e5("slot:not([name])")
], SlMenuItem.prototype, "defaultSlot", 2);
__decorateClass([
  e5(".menu-item")
], SlMenuItem.prototype, "menuItem", 2);
__decorateClass([
  n4()
], SlMenuItem.prototype, "type", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlMenuItem.prototype, "checked", 2);
__decorateClass([
  n4()
], SlMenuItem.prototype, "value", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlMenuItem.prototype, "loading", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlMenuItem.prototype, "disabled", 2);
__decorateClass([
  watch("checked")
], SlMenuItem.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled")
], SlMenuItem.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("type")
], SlMenuItem.prototype, "handleTypeChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.CVNYBK7K.js
var React22 = __toESM(require_react(), 1);
var tagName22 = "sl-menu-item";
SlMenuItem.define("sl-menu-item");
var reactWrapper22 = o7({
  tagName: tagName22,
  elementClass: SlMenuItem,
  react: React22,
  events: {},
  displayName: "SlMenuItem"
});
var menu_item_default = reactWrapper22;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ORTZCIID.js
var menu_label_styles_default = i`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6T673YG6.js
var SlMenuLabel = class extends ShoelaceElement {
  render() {
    return x` <slot part="base" class="menu-label"></slot> `;
  }
};
SlMenuLabel.styles = [component_styles_default, menu_label_styles_default];

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6BGVVGUW.js
var React23 = __toESM(require_react(), 1);
var tagName23 = "sl-menu-label";
SlMenuLabel.define("sl-menu-label");
var reactWrapper23 = o7({
  tagName: tagName23,
  elementClass: SlMenuLabel,
  react: React23,
  events: {},
  displayName: "SlMenuLabel"
});
var menu_label_default = reactWrapper23;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2W6X55FG.js
var mutation_observer_styles_default = i`
  :host {
    display: contents;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NRX6ZD33.js
var SlMutationObserver = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.attrOldValue = false;
    this.charData = false;
    this.charDataOldValue = false;
    this.childList = false;
    this.disabled = false;
    this.handleMutation = (mutationList) => {
      this.emit("sl-mutation", {
        detail: { mutationList }
      });
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.mutationObserver = new MutationObserver(this.handleMutation);
    if (!this.disabled) {
      this.startObserver();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopObserver();
  }
  startObserver() {
    const observeAttributes = typeof this.attr === "string" && this.attr.length > 0;
    const attributeFilter = observeAttributes && this.attr !== "*" ? this.attr.split(" ") : void 0;
    try {
      this.mutationObserver.observe(this, {
        subtree: true,
        childList: this.childList,
        attributes: observeAttributes,
        attributeFilter,
        attributeOldValue: this.attrOldValue,
        characterData: this.charData,
        characterDataOldValue: this.charDataOldValue
      });
    } catch (e13) {
    }
  }
  stopObserver() {
    this.mutationObserver.disconnect();
  }
  handleDisabledChange() {
    if (this.disabled) {
      this.stopObserver();
    } else {
      this.startObserver();
    }
  }
  handleChange() {
    this.stopObserver();
    this.startObserver();
  }
  render() {
    return x` <slot></slot> `;
  }
};
SlMutationObserver.styles = [component_styles_default, mutation_observer_styles_default];
__decorateClass([
  n4({ reflect: true })
], SlMutationObserver.prototype, "attr", 2);
__decorateClass([
  n4({ attribute: "attr-old-value", type: Boolean, reflect: true })
], SlMutationObserver.prototype, "attrOldValue", 2);
__decorateClass([
  n4({ attribute: "char-data", type: Boolean, reflect: true })
], SlMutationObserver.prototype, "charData", 2);
__decorateClass([
  n4({ attribute: "char-data-old-value", type: Boolean, reflect: true })
], SlMutationObserver.prototype, "charDataOldValue", 2);
__decorateClass([
  n4({ attribute: "child-list", type: Boolean, reflect: true })
], SlMutationObserver.prototype, "childList", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlMutationObserver.prototype, "disabled", 2);
__decorateClass([
  watch("disabled")
], SlMutationObserver.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("attr", { waitUntilFirstUpdate: true }),
  watch("attr-old-value", { waitUntilFirstUpdate: true }),
  watch("char-data", { waitUntilFirstUpdate: true }),
  watch("char-data-old-value", { waitUntilFirstUpdate: true }),
  watch("childList", { waitUntilFirstUpdate: true })
], SlMutationObserver.prototype, "handleChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NRRHSJ6C.js
var React24 = __toESM(require_react(), 1);
var tagName24 = "sl-mutation-observer";
SlMutationObserver.define("sl-mutation-observer");
var reactWrapper24 = o7({
  tagName: tagName24,
  elementClass: SlMutationObserver,
  react: React24,
  events: {
    onSlMutation: "sl-mutation"
  },
  displayName: "SlMutationObserver"
});
var mutation_observer_default = reactWrapper24;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.FXXKMG2P.js
var option_styles_default = i`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.YCFFWTNH.js
var SlOption = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
    this.current = false;
    this.selected = false;
    this.hasHover = false;
    this.value = "";
    this.disabled = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "option");
    this.setAttribute("aria-selected", "false");
  }
  handleDefaultSlotChange() {
    const textLabel = this.getTextLabel();
    if (typeof this.cachedTextLabel === "undefined") {
      this.cachedTextLabel = textLabel;
      return;
    }
    if (textLabel !== this.cachedTextLabel) {
      this.cachedTextLabel = textLabel;
      this.emit("slotchange", { bubbles: true, composed: false, cancelable: false });
    }
  }
  handleMouseEnter() {
    this.hasHover = true;
  }
  handleMouseLeave() {
    this.hasHover = false;
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleSelectedChange() {
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  handleValueChange() {
    if (typeof this.value !== "string") {
      this.value = String(this.value);
    }
    if (this.value.includes(" ")) {
      console.error(`Option values cannot include a space. All spaces have been replaced with underscores.`, this);
      this.value = this.value.replace(/ /g, "_");
    }
  }
  /** Returns a plain text label based on the option's content. */
  getTextLabel() {
    const nodes = this.childNodes;
    let label = "";
    [...nodes].forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (!node.hasAttribute("slot")) {
          label += node.textContent;
        }
      }
      if (node.nodeType === Node.TEXT_NODE) {
        label += node.textContent;
      }
    });
    return label.trim();
  }
  render() {
    return x`
      <div
        part="base"
        class=${e8({
      option: true,
      "option--current": this.current,
      "option--disabled": this.disabled,
      "option--selected": this.selected,
      "option--hover": this.hasHover
    })}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `;
  }
};
SlOption.styles = [component_styles_default, option_styles_default];
SlOption.dependencies = { "sl-icon": SlIcon };
__decorateClass([
  e5(".option__label")
], SlOption.prototype, "defaultSlot", 2);
__decorateClass([
  r6()
], SlOption.prototype, "current", 2);
__decorateClass([
  r6()
], SlOption.prototype, "selected", 2);
__decorateClass([
  r6()
], SlOption.prototype, "hasHover", 2);
__decorateClass([
  n4({ reflect: true })
], SlOption.prototype, "value", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlOption.prototype, "disabled", 2);
__decorateClass([
  watch("disabled")
], SlOption.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("selected")
], SlOption.prototype, "handleSelectedChange", 1);
__decorateClass([
  watch("value")
], SlOption.prototype, "handleValueChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.FWGGLOK3.js
var React25 = __toESM(require_react(), 1);
var tagName25 = "sl-option";
SlOption.define("sl-option");
var reactWrapper25 = o7({
  tagName: tagName25,
  elementClass: SlOption,
  react: React25,
  events: {},
  displayName: "SlOption"
});
var option_default = reactWrapper25;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SOY7XZM7.js
var React26 = __toESM(require_react(), 1);
var tagName26 = "sl-popup";
SlPopup.define("sl-popup");
var reactWrapper26 = o7({
  tagName: tagName26,
  elementClass: SlPopup,
  react: React26,
  events: {
    onSlReposition: "sl-reposition"
  },
  displayName: "SlPopup"
});
var popup_default = reactWrapper26;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GXC456DW.js
var progress_bar_styles_default = i`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3MEQFODD.js
var SlProgressBar = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
    this.value = 0;
    this.indeterminate = false;
    this.label = "";
  }
  render() {
    return x`
      <div
        part="base"
        class=${e8({
      "progress-bar": true,
      "progress-bar--indeterminate": this.indeterminate,
      "progress-bar--rtl": this.localize.dir() === "rtl"
    })}
        role="progressbar"
        title=${o6(this.title)}
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${o10({ width: `${this.value}%` })}>
          ${!this.indeterminate ? x` <slot part="label" class="progress-bar__label"></slot> ` : ""}
        </div>
      </div>
    `;
  }
};
SlProgressBar.styles = [component_styles_default, progress_bar_styles_default];
__decorateClass([
  n4({ type: Number, reflect: true })
], SlProgressBar.prototype, "value", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlProgressBar.prototype, "indeterminate", 2);
__decorateClass([
  n4()
], SlProgressBar.prototype, "label", 2);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SA66SZUG.js
var React27 = __toESM(require_react(), 1);
var tagName27 = "sl-progress-bar";
SlProgressBar.define("sl-progress-bar");
var reactWrapper27 = o7({
  tagName: tagName27,
  elementClass: SlProgressBar,
  react: React27,
  events: {},
  displayName: "SlProgressBar"
});
var progress_bar_default = reactWrapper27;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XOSELTMG.js
var progress_ring_styles_default = i`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TNNZI4CS.js
var SlProgressRing = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
    this.value = 0;
    this.label = "";
  }
  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has("value")) {
      const radius = parseFloat(getComputedStyle(this.indicator).getPropertyValue("r"));
      const circumference = 2 * Math.PI * radius;
      const offset3 = circumference - this.value / 100 * circumference;
      this.indicatorOffset = `${offset3}px`;
    }
  }
  render() {
    return x`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value / 100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `;
  }
};
SlProgressRing.styles = [component_styles_default, progress_ring_styles_default];
__decorateClass([
  e5(".progress-ring__indicator")
], SlProgressRing.prototype, "indicator", 2);
__decorateClass([
  r6()
], SlProgressRing.prototype, "indicatorOffset", 2);
__decorateClass([
  n4({ type: Number, reflect: true })
], SlProgressRing.prototype, "value", 2);
__decorateClass([
  n4()
], SlProgressRing.prototype, "label", 2);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PFIZMV2G.js
var React28 = __toESM(require_react(), 1);
var tagName28 = "sl-progress-ring";
SlProgressRing.define("sl-progress-ring");
var reactWrapper28 = o7({
  tagName: tagName28,
  elementClass: SlProgressRing,
  react: React28,
  events: {},
  displayName: "SlProgressRing"
});
var progress_ring_default = reactWrapper28;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2IHMH66B.js
var qr_code_styles_default = i`
  :host {
    display: inline-block;
  }
`;

// node_modules/qr-creator/dist/qr-creator.es6.min.js
var G = null;
var H2 = class {
};
H2.render = function(w2, B) {
  G(w2, B);
};
self.QrCreator = H2;
(function(w2) {
  function B(t8, c5, a4, e13) {
    var b3 = {}, h5 = w2(a4, c5);
    h5.u(t8);
    h5.J();
    e13 = e13 || 0;
    var r10 = h5.h(), d3 = h5.h() + 2 * e13;
    b3.text = t8;
    b3.level = c5;
    b3.version = a4;
    b3.O = d3;
    b3.a = function(b4, a5) {
      b4 -= e13;
      a5 -= e13;
      return 0 > b4 || b4 >= r10 || 0 > a5 || a5 >= r10 ? false : h5.a(b4, a5);
    };
    return b3;
  }
  function C2(t8, c5, a4, e13, b3, h5, r10, d3, g2, x2) {
    function u5(b4, a5, f5, c6, d4, r11, g3) {
      b4 ? (t8.lineTo(a5 + r11, f5 + g3), t8.arcTo(a5, f5, c6, d4, h5)) : t8.lineTo(a5, f5);
    }
    r10 ? t8.moveTo(c5 + h5, a4) : t8.moveTo(c5, a4);
    u5(d3, e13, a4, e13, b3, -h5, 0);
    u5(g2, e13, b3, c5, b3, 0, -h5);
    u5(x2, c5, b3, c5, a4, h5, 0);
    u5(r10, c5, a4, e13, a4, 0, h5);
  }
  function z2(t8, c5, a4, e13, b3, h5, r10, d3, g2, x2) {
    function u5(b4, a5, c6, d4) {
      t8.moveTo(b4 + c6, a5);
      t8.lineTo(
        b4,
        a5
      );
      t8.lineTo(b4, a5 + d4);
      t8.arcTo(b4, a5, b4 + c6, a5, h5);
    }
    r10 && u5(c5, a4, h5, h5);
    d3 && u5(e13, a4, -h5, h5);
    g2 && u5(e13, b3, -h5, -h5);
    x2 && u5(c5, b3, h5, -h5);
  }
  function A2(t8, c5) {
    var a4 = c5.fill;
    if ("string" === typeof a4)
      t8.fillStyle = a4;
    else {
      var e13 = a4.type, b3 = a4.colorStops;
      a4 = a4.position.map((b4) => Math.round(b4 * c5.size));
      if ("linear-gradient" === e13)
        var h5 = t8.createLinearGradient.apply(t8, a4);
      else if ("radial-gradient" === e13)
        h5 = t8.createRadialGradient.apply(t8, a4);
      else
        throw Error("Unsupported fill");
      b3.forEach(([b4, a5]) => {
        h5.addColorStop(b4, a5);
      });
      t8.fillStyle = h5;
    }
  }
  function y3(t8, c5) {
    a: {
      var a4 = c5.text, e13 = c5.v, b3 = c5.N, h5 = c5.K, r10 = c5.P;
      b3 = Math.max(1, b3 || 1);
      for (h5 = Math.min(40, h5 || 40); b3 <= h5; b3 += 1)
        try {
          var d3 = B(a4, e13, b3, r10);
          break a;
        } catch (J) {
        }
      d3 = void 0;
    }
    if (!d3)
      return null;
    a4 = t8.getContext("2d");
    c5.background && (a4.fillStyle = c5.background, a4.fillRect(c5.left, c5.top, c5.size, c5.size));
    e13 = d3.O;
    h5 = c5.size / e13;
    a4.beginPath();
    for (r10 = 0; r10 < e13; r10 += 1)
      for (b3 = 0; b3 < e13; b3 += 1) {
        var g2 = a4, x2 = c5.left + b3 * h5, u5 = c5.top + r10 * h5, p3 = r10, q = b3, f5 = d3.a, k2 = x2 + h5, m3 = u5 + h5, D = p3 - 1, E2 = p3 + 1, n11 = q - 1, l5 = q + 1, y4 = Math.floor(Math.min(0.5, Math.max(0, c5.R)) * h5), v3 = f5(p3, q), I2 = f5(D, n11), w3 = f5(D, q);
        D = f5(D, l5);
        var F = f5(p3, l5);
        l5 = f5(E2, l5);
        q = f5(
          E2,
          q
        );
        E2 = f5(E2, n11);
        p3 = f5(p3, n11);
        x2 = Math.round(x2);
        u5 = Math.round(u5);
        k2 = Math.round(k2);
        m3 = Math.round(m3);
        v3 ? C2(g2, x2, u5, k2, m3, y4, !w3 && !p3, !w3 && !F, !q && !F, !q && !p3) : z2(g2, x2, u5, k2, m3, y4, w3 && p3 && I2, w3 && F && D, q && F && l5, q && p3 && E2);
      }
    A2(a4, c5);
    a4.fill();
    return t8;
  }
  var v2 = { minVersion: 1, maxVersion: 40, ecLevel: "L", left: 0, top: 0, size: 200, fill: "#000", background: null, text: "no text", radius: 0.5, quiet: 0 };
  G = function(t8, c5) {
    var a4 = {};
    Object.assign(a4, v2, t8);
    a4.N = a4.minVersion;
    a4.K = a4.maxVersion;
    a4.v = a4.ecLevel;
    a4.left = a4.left;
    a4.top = a4.top;
    a4.size = a4.size;
    a4.fill = a4.fill;
    a4.background = a4.background;
    a4.text = a4.text;
    a4.R = a4.radius;
    a4.P = a4.quiet;
    if (c5 instanceof HTMLCanvasElement) {
      if (c5.width !== a4.size || c5.height !== a4.size)
        c5.width = a4.size, c5.height = a4.size;
      c5.getContext("2d").clearRect(0, 0, c5.width, c5.height);
      y3(c5, a4);
    } else
      t8 = document.createElement("canvas"), t8.width = a4.size, t8.height = a4.size, a4 = y3(t8, a4), c5.appendChild(a4);
  };
})(function() {
  function w2(c5) {
    var a4 = C2.s(c5);
    return { S: function() {
      return 4;
    }, b: function() {
      return a4.length;
    }, write: function(c6) {
      for (var b3 = 0; b3 < a4.length; b3 += 1)
        c6.put(a4[b3], 8);
    } };
  }
  function B() {
    var c5 = [], a4 = 0, e13 = {
      B: function() {
        return c5;
      },
      c: function(b3) {
        return 1 == (c5[Math.floor(b3 / 8)] >>> 7 - b3 % 8 & 1);
      },
      put: function(b3, h5) {
        for (var a5 = 0; a5 < h5; a5 += 1)
          e13.m(1 == (b3 >>> h5 - a5 - 1 & 1));
      },
      f: function() {
        return a4;
      },
      m: function(b3) {
        var h5 = Math.floor(a4 / 8);
        c5.length <= h5 && c5.push(0);
        b3 && (c5[h5] |= 128 >>> a4 % 8);
        a4 += 1;
      }
    };
    return e13;
  }
  function C2(c5, a4) {
    function e13(b4, h6) {
      for (var a5 = -1; 7 >= a5; a5 += 1)
        if (!(-1 >= b4 + a5 || d3 <= b4 + a5))
          for (var c6 = -1; 7 >= c6; c6 += 1)
            -1 >= h6 + c6 || d3 <= h6 + c6 || (r10[b4 + a5][h6 + c6] = 0 <= a5 && 6 >= a5 && (0 == c6 || 6 == c6) || 0 <= c6 && 6 >= c6 && (0 == a5 || 6 == a5) || 2 <= a5 && 4 >= a5 && 2 <= c6 && 4 >= c6 ? true : false);
    }
    function b3(b4, a5) {
      for (var f5 = d3 = 4 * c5 + 17, k2 = Array(f5), m3 = 0; m3 < f5; m3 += 1) {
        k2[m3] = Array(f5);
        for (var p3 = 0; p3 < f5; p3 += 1)
          k2[m3][p3] = null;
      }
      r10 = k2;
      e13(0, 0);
      e13(d3 - 7, 0);
      e13(0, d3 - 7);
      f5 = y3.G(c5);
      for (k2 = 0; k2 < f5.length; k2 += 1)
        for (m3 = 0; m3 < f5.length; m3 += 1) {
          p3 = f5[k2];
          var q = f5[m3];
          if (null == r10[p3][q])
            for (var n11 = -2; 2 >= n11; n11 += 1)
              for (var l5 = -2; 2 >= l5; l5 += 1)
                r10[p3 + n11][q + l5] = -2 == n11 || 2 == n11 || -2 == l5 || 2 == l5 || 0 == n11 && 0 == l5;
        }
      for (f5 = 8; f5 < d3 - 8; f5 += 1)
        null == r10[f5][6] && (r10[f5][6] = 0 == f5 % 2);
      for (f5 = 8; f5 < d3 - 8; f5 += 1)
        null == r10[6][f5] && (r10[6][f5] = 0 == f5 % 2);
      f5 = y3.w(h5 << 3 | a5);
      for (k2 = 0; 15 > k2; k2 += 1)
        m3 = !b4 && 1 == (f5 >> k2 & 1), r10[6 > k2 ? k2 : 8 > k2 ? k2 + 1 : d3 - 15 + k2][8] = m3, r10[8][8 > k2 ? d3 - k2 - 1 : 9 > k2 ? 15 - k2 : 14 - k2] = m3;
      r10[d3 - 8][8] = !b4;
      if (7 <= c5) {
        f5 = y3.A(c5);
        for (k2 = 0; 18 > k2; k2 += 1)
          m3 = !b4 && 1 == (f5 >> k2 & 1), r10[Math.floor(k2 / 3)][k2 % 3 + d3 - 8 - 3] = m3;
        for (k2 = 0; 18 > k2; k2 += 1)
          m3 = !b4 && 1 == (f5 >> k2 & 1), r10[k2 % 3 + d3 - 8 - 3][Math.floor(k2 / 3)] = m3;
      }
      if (null == g2) {
        b4 = t8.I(c5, h5);
        f5 = B();
        for (k2 = 0; k2 < x2.length; k2 += 1)
          m3 = x2[k2], f5.put(4, 4), f5.put(m3.b(), y3.f(4, c5)), m3.write(f5);
        for (k2 = m3 = 0; k2 < b4.length; k2 += 1)
          m3 += b4[k2].j;
        if (f5.f() > 8 * m3)
          throw Error("code length overflow. (" + f5.f() + ">" + 8 * m3 + ")");
        for (f5.f() + 4 <= 8 * m3 && f5.put(0, 4); 0 != f5.f() % 8; )
          f5.m(false);
        for (; !(f5.f() >= 8 * m3); ) {
          f5.put(236, 8);
          if (f5.f() >= 8 * m3)
            break;
          f5.put(17, 8);
        }
        var u6 = 0;
        m3 = k2 = 0;
        p3 = Array(b4.length);
        q = Array(b4.length);
        for (n11 = 0; n11 < b4.length; n11 += 1) {
          var v3 = b4[n11].j, w3 = b4[n11].o - v3;
          k2 = Math.max(k2, v3);
          m3 = Math.max(m3, w3);
          p3[n11] = Array(v3);
          for (l5 = 0; l5 < p3[n11].length; l5 += 1)
            p3[n11][l5] = 255 & f5.B()[l5 + u6];
          u6 += v3;
          l5 = y3.C(w3);
          v3 = z2(p3[n11], l5.b() - 1).l(l5);
          q[n11] = Array(l5.b() - 1);
          for (l5 = 0; l5 < q[n11].length; l5 += 1)
            w3 = l5 + v3.b() - q[n11].length, q[n11][l5] = 0 <= w3 ? v3.c(w3) : 0;
        }
        for (l5 = f5 = 0; l5 < b4.length; l5 += 1)
          f5 += b4[l5].o;
        f5 = Array(f5);
        for (l5 = u6 = 0; l5 < k2; l5 += 1)
          for (n11 = 0; n11 < b4.length; n11 += 1)
            l5 < p3[n11].length && (f5[u6] = p3[n11][l5], u6 += 1);
        for (l5 = 0; l5 < m3; l5 += 1)
          for (n11 = 0; n11 < b4.length; n11 += 1)
            l5 < q[n11].length && (f5[u6] = q[n11][l5], u6 += 1);
        g2 = f5;
      }
      b4 = g2;
      f5 = -1;
      k2 = d3 - 1;
      m3 = 7;
      p3 = 0;
      a5 = y3.F(a5);
      for (q = d3 - 1; 0 < q; q -= 2)
        for (6 == q && --q; ; ) {
          for (n11 = 0; 2 > n11; n11 += 1)
            null == r10[k2][q - n11] && (l5 = false, p3 < b4.length && (l5 = 1 == (b4[p3] >>> m3 & 1)), a5(k2, q - n11) && (l5 = !l5), r10[k2][q - n11] = l5, --m3, -1 == m3 && (p3 += 1, m3 = 7));
          k2 += f5;
          if (0 > k2 || d3 <= k2) {
            k2 -= f5;
            f5 = -f5;
            break;
          }
        }
    }
    var h5 = A2[a4], r10 = null, d3 = 0, g2 = null, x2 = [], u5 = { u: function(b4) {
      b4 = w2(b4);
      x2.push(b4);
      g2 = null;
    }, a: function(b4, a5) {
      if (0 > b4 || d3 <= b4 || 0 > a5 || d3 <= a5)
        throw Error(b4 + "," + a5);
      return r10[b4][a5];
    }, h: function() {
      return d3;
    }, J: function() {
      for (var a5 = 0, h6 = 0, c6 = 0; 8 > c6; c6 += 1) {
        b3(true, c6);
        var d4 = y3.D(u5);
        if (0 == c6 || a5 > d4)
          a5 = d4, h6 = c6;
      }
      b3(false, h6);
    } };
    return u5;
  }
  function z2(c5, a4) {
    if ("undefined" == typeof c5.length)
      throw Error(c5.length + "/" + a4);
    var e13 = function() {
      for (var b4 = 0; b4 < c5.length && 0 == c5[b4]; )
        b4 += 1;
      for (var r10 = Array(c5.length - b4 + a4), d3 = 0; d3 < c5.length - b4; d3 += 1)
        r10[d3] = c5[d3 + b4];
      return r10;
    }(), b3 = { c: function(b4) {
      return e13[b4];
    }, b: function() {
      return e13.length;
    }, multiply: function(a5) {
      for (var h5 = Array(b3.b() + a5.b() - 1), c6 = 0; c6 < b3.b(); c6 += 1)
        for (var g2 = 0; g2 < a5.b(); g2 += 1)
          h5[c6 + g2] ^= v2.i(v2.g(b3.c(c6)) + v2.g(a5.c(g2)));
      return z2(h5, 0);
    }, l: function(a5) {
      if (0 > b3.b() - a5.b())
        return b3;
      for (var c6 = v2.g(b3.c(0)) - v2.g(a5.c(0)), h5 = Array(b3.b()), g2 = 0; g2 < b3.b(); g2 += 1)
        h5[g2] = b3.c(g2);
      for (g2 = 0; g2 < a5.b(); g2 += 1)
        h5[g2] ^= v2.i(v2.g(a5.c(g2)) + c6);
      return z2(h5, 0).l(a5);
    } };
    return b3;
  }
  C2.s = function(c5) {
    for (var a4 = [], e13 = 0; e13 < c5.length; e13++) {
      var b3 = c5.charCodeAt(e13);
      128 > b3 ? a4.push(b3) : 2048 > b3 ? a4.push(192 | b3 >> 6, 128 | b3 & 63) : 55296 > b3 || 57344 <= b3 ? a4.push(224 | b3 >> 12, 128 | b3 >> 6 & 63, 128 | b3 & 63) : (e13++, b3 = 65536 + ((b3 & 1023) << 10 | c5.charCodeAt(e13) & 1023), a4.push(240 | b3 >> 18, 128 | b3 >> 12 & 63, 128 | b3 >> 6 & 63, 128 | b3 & 63));
    }
    return a4;
  };
  var A2 = { L: 1, M: 0, Q: 3, H: 2 }, y3 = function() {
    function c5(b3) {
      for (var a5 = 0; 0 != b3; )
        a5 += 1, b3 >>>= 1;
      return a5;
    }
    var a4 = [
      [],
      [6, 18],
      [6, 22],
      [6, 26],
      [6, 30],
      [6, 34],
      [6, 22, 38],
      [6, 24, 42],
      [6, 26, 46],
      [6, 28, 50],
      [6, 30, 54],
      [6, 32, 58],
      [6, 34, 62],
      [6, 26, 46, 66],
      [6, 26, 48, 70],
      [6, 26, 50, 74],
      [6, 30, 54, 78],
      [6, 30, 56, 82],
      [6, 30, 58, 86],
      [6, 34, 62, 90],
      [6, 28, 50, 72, 94],
      [6, 26, 50, 74, 98],
      [6, 30, 54, 78, 102],
      [6, 28, 54, 80, 106],
      [6, 32, 58, 84, 110],
      [6, 30, 58, 86, 114],
      [6, 34, 62, 90, 118],
      [6, 26, 50, 74, 98, 122],
      [6, 30, 54, 78, 102, 126],
      [6, 26, 52, 78, 104, 130],
      [6, 30, 56, 82, 108, 134],
      [6, 34, 60, 86, 112, 138],
      [6, 30, 58, 86, 114, 142],
      [6, 34, 62, 90, 118, 146],
      [6, 30, 54, 78, 102, 126, 150],
      [6, 24, 50, 76, 102, 128, 154],
      [6, 28, 54, 80, 106, 132, 158],
      [6, 32, 58, 84, 110, 136, 162],
      [6, 26, 54, 82, 110, 138, 166],
      [6, 30, 58, 86, 114, 142, 170]
    ], e13 = { w: function(b3) {
      for (var a5 = b3 << 10; 0 <= c5(a5) - c5(1335); )
        a5 ^= 1335 << c5(a5) - c5(1335);
      return (b3 << 10 | a5) ^ 21522;
    }, A: function(b3) {
      for (var a5 = b3 << 12; 0 <= c5(a5) - c5(7973); )
        a5 ^= 7973 << c5(a5) - c5(7973);
      return b3 << 12 | a5;
    }, G: function(b3) {
      return a4[b3 - 1];
    }, F: function(b3) {
      switch (b3) {
        case 0:
          return function(b4, a5) {
            return 0 == (b4 + a5) % 2;
          };
        case 1:
          return function(b4) {
            return 0 == b4 % 2;
          };
        case 2:
          return function(b4, a5) {
            return 0 == a5 % 3;
          };
        case 3:
          return function(b4, a5) {
            return 0 == (b4 + a5) % 3;
          };
        case 4:
          return function(b4, a5) {
            return 0 == (Math.floor(b4 / 2) + Math.floor(a5 / 3)) % 2;
          };
        case 5:
          return function(b4, a5) {
            return 0 == b4 * a5 % 2 + b4 * a5 % 3;
          };
        case 6:
          return function(b4, a5) {
            return 0 == (b4 * a5 % 2 + b4 * a5 % 3) % 2;
          };
        case 7:
          return function(b4, a5) {
            return 0 == (b4 * a5 % 3 + (b4 + a5) % 2) % 2;
          };
        default:
          throw Error("bad maskPattern:" + b3);
      }
    }, C: function(b3) {
      for (var a5 = z2([1], 0), c6 = 0; c6 < b3; c6 += 1)
        a5 = a5.multiply(z2([1, v2.i(c6)], 0));
      return a5;
    }, f: function(b3, a5) {
      if (4 != b3 || 1 > a5 || 40 < a5)
        throw Error("mode: " + b3 + "; type: " + a5);
      return 10 > a5 ? 8 : 16;
    }, D: function(b3) {
      for (var a5 = b3.h(), c6 = 0, d3 = 0; d3 < a5; d3 += 1)
        for (var g2 = 0; g2 < a5; g2 += 1) {
          for (var e14 = 0, t9 = b3.a(d3, g2), p3 = -1; 1 >= p3; p3 += 1)
            if (!(0 > d3 + p3 || a5 <= d3 + p3))
              for (var q = -1; 1 >= q; q += 1)
                0 > g2 + q || a5 <= g2 + q || (0 != p3 || 0 != q) && t9 == b3.a(d3 + p3, g2 + q) && (e14 += 1);
          5 < e14 && (c6 += 3 + e14 - 5);
        }
      for (d3 = 0; d3 < a5 - 1; d3 += 1)
        for (g2 = 0; g2 < a5 - 1; g2 += 1)
          if (e14 = 0, b3.a(d3, g2) && (e14 += 1), b3.a(d3 + 1, g2) && (e14 += 1), b3.a(d3, g2 + 1) && (e14 += 1), b3.a(d3 + 1, g2 + 1) && (e14 += 1), 0 == e14 || 4 == e14)
            c6 += 3;
      for (d3 = 0; d3 < a5; d3 += 1)
        for (g2 = 0; g2 < a5 - 6; g2 += 1)
          b3.a(d3, g2) && !b3.a(d3, g2 + 1) && b3.a(d3, g2 + 2) && b3.a(d3, g2 + 3) && b3.a(d3, g2 + 4) && !b3.a(d3, g2 + 5) && b3.a(d3, g2 + 6) && (c6 += 40);
      for (g2 = 0; g2 < a5; g2 += 1)
        for (d3 = 0; d3 < a5 - 6; d3 += 1)
          b3.a(d3, g2) && !b3.a(d3 + 1, g2) && b3.a(d3 + 2, g2) && b3.a(d3 + 3, g2) && b3.a(d3 + 4, g2) && !b3.a(d3 + 5, g2) && b3.a(d3 + 6, g2) && (c6 += 40);
      for (g2 = e14 = 0; g2 < a5; g2 += 1)
        for (d3 = 0; d3 < a5; d3 += 1)
          b3.a(d3, g2) && (e14 += 1);
      return c6 += Math.abs(100 * e14 / a5 / a5 - 50) / 5 * 10;
    } };
    return e13;
  }(), v2 = function() {
    for (var c5 = Array(256), a4 = Array(256), e13 = 0; 8 > e13; e13 += 1)
      c5[e13] = 1 << e13;
    for (e13 = 8; 256 > e13; e13 += 1)
      c5[e13] = c5[e13 - 4] ^ c5[e13 - 5] ^ c5[e13 - 6] ^ c5[e13 - 8];
    for (e13 = 0; 255 > e13; e13 += 1)
      a4[c5[e13]] = e13;
    return { g: function(b3) {
      if (1 > b3)
        throw Error("glog(" + b3 + ")");
      return a4[b3];
    }, i: function(b3) {
      for (; 0 > b3; )
        b3 += 255;
      for (; 256 <= b3; )
        b3 -= 255;
      return c5[b3];
    } };
  }(), t8 = function() {
    function c5(b3, c6) {
      switch (c6) {
        case A2.L:
          return a4[4 * (b3 - 1)];
        case A2.M:
          return a4[4 * (b3 - 1) + 1];
        case A2.Q:
          return a4[4 * (b3 - 1) + 2];
        case A2.H:
          return a4[4 * (b3 - 1) + 3];
      }
    }
    var a4 = [
      [1, 26, 19],
      [1, 26, 16],
      [1, 26, 13],
      [1, 26, 9],
      [1, 44, 34],
      [1, 44, 28],
      [1, 44, 22],
      [1, 44, 16],
      [1, 70, 55],
      [1, 70, 44],
      [2, 35, 17],
      [2, 35, 13],
      [1, 100, 80],
      [2, 50, 32],
      [2, 50, 24],
      [4, 25, 9],
      [1, 134, 108],
      [2, 67, 43],
      [2, 33, 15, 2, 34, 16],
      [2, 33, 11, 2, 34, 12],
      [2, 86, 68],
      [4, 43, 27],
      [4, 43, 19],
      [4, 43, 15],
      [2, 98, 78],
      [4, 49, 31],
      [2, 32, 14, 4, 33, 15],
      [4, 39, 13, 1, 40, 14],
      [2, 121, 97],
      [2, 60, 38, 2, 61, 39],
      [4, 40, 18, 2, 41, 19],
      [4, 40, 14, 2, 41, 15],
      [2, 146, 116],
      [
        3,
        58,
        36,
        2,
        59,
        37
      ],
      [4, 36, 16, 4, 37, 17],
      [4, 36, 12, 4, 37, 13],
      [2, 86, 68, 2, 87, 69],
      [4, 69, 43, 1, 70, 44],
      [6, 43, 19, 2, 44, 20],
      [6, 43, 15, 2, 44, 16],
      [4, 101, 81],
      [1, 80, 50, 4, 81, 51],
      [4, 50, 22, 4, 51, 23],
      [3, 36, 12, 8, 37, 13],
      [2, 116, 92, 2, 117, 93],
      [6, 58, 36, 2, 59, 37],
      [4, 46, 20, 6, 47, 21],
      [7, 42, 14, 4, 43, 15],
      [4, 133, 107],
      [8, 59, 37, 1, 60, 38],
      [8, 44, 20, 4, 45, 21],
      [12, 33, 11, 4, 34, 12],
      [3, 145, 115, 1, 146, 116],
      [4, 64, 40, 5, 65, 41],
      [11, 36, 16, 5, 37, 17],
      [11, 36, 12, 5, 37, 13],
      [5, 109, 87, 1, 110, 88],
      [5, 65, 41, 5, 66, 42],
      [5, 54, 24, 7, 55, 25],
      [11, 36, 12, 7, 37, 13],
      [5, 122, 98, 1, 123, 99],
      [
        7,
        73,
        45,
        3,
        74,
        46
      ],
      [15, 43, 19, 2, 44, 20],
      [3, 45, 15, 13, 46, 16],
      [1, 135, 107, 5, 136, 108],
      [10, 74, 46, 1, 75, 47],
      [1, 50, 22, 15, 51, 23],
      [2, 42, 14, 17, 43, 15],
      [5, 150, 120, 1, 151, 121],
      [9, 69, 43, 4, 70, 44],
      [17, 50, 22, 1, 51, 23],
      [2, 42, 14, 19, 43, 15],
      [3, 141, 113, 4, 142, 114],
      [3, 70, 44, 11, 71, 45],
      [17, 47, 21, 4, 48, 22],
      [9, 39, 13, 16, 40, 14],
      [3, 135, 107, 5, 136, 108],
      [3, 67, 41, 13, 68, 42],
      [15, 54, 24, 5, 55, 25],
      [15, 43, 15, 10, 44, 16],
      [4, 144, 116, 4, 145, 117],
      [17, 68, 42],
      [17, 50, 22, 6, 51, 23],
      [19, 46, 16, 6, 47, 17],
      [2, 139, 111, 7, 140, 112],
      [17, 74, 46],
      [7, 54, 24, 16, 55, 25],
      [34, 37, 13],
      [
        4,
        151,
        121,
        5,
        152,
        122
      ],
      [4, 75, 47, 14, 76, 48],
      [11, 54, 24, 14, 55, 25],
      [16, 45, 15, 14, 46, 16],
      [6, 147, 117, 4, 148, 118],
      [6, 73, 45, 14, 74, 46],
      [11, 54, 24, 16, 55, 25],
      [30, 46, 16, 2, 47, 17],
      [8, 132, 106, 4, 133, 107],
      [8, 75, 47, 13, 76, 48],
      [7, 54, 24, 22, 55, 25],
      [22, 45, 15, 13, 46, 16],
      [10, 142, 114, 2, 143, 115],
      [19, 74, 46, 4, 75, 47],
      [28, 50, 22, 6, 51, 23],
      [33, 46, 16, 4, 47, 17],
      [8, 152, 122, 4, 153, 123],
      [22, 73, 45, 3, 74, 46],
      [8, 53, 23, 26, 54, 24],
      [12, 45, 15, 28, 46, 16],
      [3, 147, 117, 10, 148, 118],
      [3, 73, 45, 23, 74, 46],
      [4, 54, 24, 31, 55, 25],
      [11, 45, 15, 31, 46, 16],
      [7, 146, 116, 7, 147, 117],
      [21, 73, 45, 7, 74, 46],
      [1, 53, 23, 37, 54, 24],
      [19, 45, 15, 26, 46, 16],
      [5, 145, 115, 10, 146, 116],
      [19, 75, 47, 10, 76, 48],
      [15, 54, 24, 25, 55, 25],
      [23, 45, 15, 25, 46, 16],
      [13, 145, 115, 3, 146, 116],
      [2, 74, 46, 29, 75, 47],
      [42, 54, 24, 1, 55, 25],
      [23, 45, 15, 28, 46, 16],
      [17, 145, 115],
      [10, 74, 46, 23, 75, 47],
      [10, 54, 24, 35, 55, 25],
      [19, 45, 15, 35, 46, 16],
      [17, 145, 115, 1, 146, 116],
      [14, 74, 46, 21, 75, 47],
      [29, 54, 24, 19, 55, 25],
      [11, 45, 15, 46, 46, 16],
      [13, 145, 115, 6, 146, 116],
      [14, 74, 46, 23, 75, 47],
      [44, 54, 24, 7, 55, 25],
      [59, 46, 16, 1, 47, 17],
      [12, 151, 121, 7, 152, 122],
      [12, 75, 47, 26, 76, 48],
      [39, 54, 24, 14, 55, 25],
      [22, 45, 15, 41, 46, 16],
      [6, 151, 121, 14, 152, 122],
      [6, 75, 47, 34, 76, 48],
      [46, 54, 24, 10, 55, 25],
      [2, 45, 15, 64, 46, 16],
      [17, 152, 122, 4, 153, 123],
      [29, 74, 46, 14, 75, 47],
      [49, 54, 24, 10, 55, 25],
      [24, 45, 15, 46, 46, 16],
      [4, 152, 122, 18, 153, 123],
      [13, 74, 46, 32, 75, 47],
      [48, 54, 24, 14, 55, 25],
      [42, 45, 15, 32, 46, 16],
      [20, 147, 117, 4, 148, 118],
      [40, 75, 47, 7, 76, 48],
      [43, 54, 24, 22, 55, 25],
      [10, 45, 15, 67, 46, 16],
      [19, 148, 118, 6, 149, 119],
      [18, 75, 47, 31, 76, 48],
      [34, 54, 24, 34, 55, 25],
      [20, 45, 15, 61, 46, 16]
    ], e13 = { I: function(b3, a5) {
      var e14 = c5(b3, a5);
      if ("undefined" == typeof e14)
        throw Error("bad rs block @ typeNumber:" + b3 + "/errorCorrectLevel:" + a5);
      b3 = e14.length / 3;
      a5 = [];
      for (var d3 = 0; d3 < b3; d3 += 1)
        for (var g2 = e14[3 * d3], h5 = e14[3 * d3 + 1], t9 = e14[3 * d3 + 2], p3 = 0; p3 < g2; p3 += 1) {
          var q = t9, f5 = {};
          f5.o = h5;
          f5.j = q;
          a5.push(f5);
        }
      return a5;
    } };
    return e13;
  }();
  return C2;
}());
var qr_creator_es6_min_default = QrCreator;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KOOQB5PE.js
var SlQrCode = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.value = "";
    this.label = "";
    this.size = 128;
    this.fill = "black";
    this.background = "white";
    this.radius = 0;
    this.errorCorrection = "H";
  }
  firstUpdated() {
    this.generate();
  }
  generate() {
    if (!this.hasUpdated) {
      return;
    }
    qr_creator_es6_min_default.render(
      {
        text: this.value,
        radius: this.radius,
        ecLevel: this.errorCorrection,
        fill: this.fill,
        background: this.background,
        // We draw the canvas larger and scale its container down to avoid blurring on high-density displays
        size: this.size * 2
      },
      this.canvas
    );
  }
  render() {
    var _a;
    return x`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((_a = this.label) == null ? void 0 : _a.length) > 0 ? this.label : this.value}
        style=${o10({
      width: `${this.size}px`,
      height: `${this.size}px`
    })}
      ></canvas>
    `;
  }
};
SlQrCode.styles = [component_styles_default, qr_code_styles_default];
__decorateClass([
  e5("canvas")
], SlQrCode.prototype, "canvas", 2);
__decorateClass([
  n4()
], SlQrCode.prototype, "value", 2);
__decorateClass([
  n4()
], SlQrCode.prototype, "label", 2);
__decorateClass([
  n4({ type: Number })
], SlQrCode.prototype, "size", 2);
__decorateClass([
  n4()
], SlQrCode.prototype, "fill", 2);
__decorateClass([
  n4()
], SlQrCode.prototype, "background", 2);
__decorateClass([
  n4({ type: Number })
], SlQrCode.prototype, "radius", 2);
__decorateClass([
  n4({ attribute: "error-correction" })
], SlQrCode.prototype, "errorCorrection", 2);
__decorateClass([
  watch(["background", "errorCorrection", "fill", "radius", "size", "value"])
], SlQrCode.prototype, "generate", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.H5NGSEV7.js
var React29 = __toESM(require_react(), 1);
var tagName29 = "sl-qr-code";
SlQrCode.define("sl-qr-code");
var reactWrapper29 = o7({
  tagName: tagName29,
  elementClass: SlQrCode,
  react: React29,
  events: {},
  displayName: "SlQrCode"
});
var qr_code_default = reactWrapper29;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.K6FVXEO2.js
var SlFormatDate = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
    this.date = /* @__PURE__ */ new Date();
    this.hourFormat = "auto";
  }
  render() {
    const date = new Date(this.date);
    const hour12 = this.hourFormat === "auto" ? void 0 : this.hourFormat === "12";
    if (isNaN(date.getMilliseconds())) {
      return void 0;
    }
    return x`
      <time datetime=${date.toISOString()}>
        ${this.localize.date(date, {
      weekday: this.weekday,
      era: this.era,
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      timeZoneName: this.timeZoneName,
      timeZone: this.timeZone,
      hour12
    })}
      </time>
    `;
  }
};
__decorateClass([
  n4()
], SlFormatDate.prototype, "date", 2);
__decorateClass([
  n4()
], SlFormatDate.prototype, "weekday", 2);
__decorateClass([
  n4()
], SlFormatDate.prototype, "era", 2);
__decorateClass([
  n4()
], SlFormatDate.prototype, "year", 2);
__decorateClass([
  n4()
], SlFormatDate.prototype, "month", 2);
__decorateClass([
  n4()
], SlFormatDate.prototype, "day", 2);
__decorateClass([
  n4()
], SlFormatDate.prototype, "hour", 2);
__decorateClass([
  n4()
], SlFormatDate.prototype, "minute", 2);
__decorateClass([
  n4()
], SlFormatDate.prototype, "second", 2);
__decorateClass([
  n4({ attribute: "time-zone-name" })
], SlFormatDate.prototype, "timeZoneName", 2);
__decorateClass([
  n4({ attribute: "time-zone" })
], SlFormatDate.prototype, "timeZone", 2);
__decorateClass([
  n4({ attribute: "hour-format" })
], SlFormatDate.prototype, "hourFormat", 2);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.EUBZWNQ4.js
var React30 = __toESM(require_react(), 1);
var tagName30 = "sl-format-date";
SlFormatDate.define("sl-format-date");
var reactWrapper30 = o7({
  tagName: tagName30,
  elementClass: SlFormatDate,
  react: React30,
  events: {},
  displayName: "SlFormatDate"
});
var format_date_default = reactWrapper30;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.OZFBKUH7.js
var SlFormatNumber = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
    this.value = 0;
    this.type = "decimal";
    this.noGrouping = false;
    this.currency = "USD";
    this.currencyDisplay = "symbol";
  }
  render() {
    if (isNaN(this.value)) {
      return "";
    }
    return this.localize.number(this.value, {
      style: this.type,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: !this.noGrouping,
      minimumIntegerDigits: this.minimumIntegerDigits,
      minimumFractionDigits: this.minimumFractionDigits,
      maximumFractionDigits: this.maximumFractionDigits,
      minimumSignificantDigits: this.minimumSignificantDigits,
      maximumSignificantDigits: this.maximumSignificantDigits
    });
  }
};
__decorateClass([
  n4({ type: Number })
], SlFormatNumber.prototype, "value", 2);
__decorateClass([
  n4()
], SlFormatNumber.prototype, "type", 2);
__decorateClass([
  n4({ attribute: "no-grouping", type: Boolean })
], SlFormatNumber.prototype, "noGrouping", 2);
__decorateClass([
  n4()
], SlFormatNumber.prototype, "currency", 2);
__decorateClass([
  n4({ attribute: "currency-display" })
], SlFormatNumber.prototype, "currencyDisplay", 2);
__decorateClass([
  n4({ attribute: "minimum-integer-digits", type: Number })
], SlFormatNumber.prototype, "minimumIntegerDigits", 2);
__decorateClass([
  n4({ attribute: "minimum-fraction-digits", type: Number })
], SlFormatNumber.prototype, "minimumFractionDigits", 2);
__decorateClass([
  n4({ attribute: "maximum-fraction-digits", type: Number })
], SlFormatNumber.prototype, "maximumFractionDigits", 2);
__decorateClass([
  n4({ attribute: "minimum-significant-digits", type: Number })
], SlFormatNumber.prototype, "minimumSignificantDigits", 2);
__decorateClass([
  n4({ attribute: "maximum-significant-digits", type: Number })
], SlFormatNumber.prototype, "maximumSignificantDigits", 2);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XBJAZSDW.js
var React31 = __toESM(require_react(), 1);
var tagName31 = "sl-format-number";
SlFormatNumber.define("sl-format-number");
var reactWrapper31 = o7({
  tagName: tagName31,
  elementClass: SlFormatNumber,
  react: React31,
  events: {},
  displayName: "SlFormatNumber"
});
var format_number_default = reactWrapper31;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.YEEDYMBW.js
var React32 = __toESM(require_react(), 1);
var tagName32 = "sl-icon";
SlIcon.define("sl-icon");
var reactWrapper32 = o7({
  tagName: tagName32,
  elementClass: SlIcon,
  react: React32,
  events: {
    onSlLoad: "sl-load",
    onSlError: "sl-error"
  },
  displayName: "SlIcon"
});
var icon_default = reactWrapper32;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RCGFCKTU.js
var image_comparer_styles_default = i`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B4YXOTSS.js
var SlImageComparer = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.position = 50;
  }
  handleDrag(event) {
    const { width } = this.base.getBoundingClientRect();
    const isRtl = this.matches(":dir(rtl)");
    event.preventDefault();
    drag(this.base, {
      onMove: (x2) => {
        this.position = parseFloat(clamp2(x2 / width * 100, 0, 100).toFixed(2));
        if (isRtl)
          this.position = 100 - this.position;
      },
      initialEvent: event
    });
  }
  handleKeyDown(event) {
    const isLtr = this.matches(":dir(ltr)");
    const isRtl = this.matches(":dir(rtl)");
    if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      const incr = event.shiftKey ? 10 : 1;
      let newPosition = this.position;
      event.preventDefault();
      if (isLtr && event.key === "ArrowLeft" || isRtl && event.key === "ArrowRight") {
        newPosition -= incr;
      }
      if (isLtr && event.key === "ArrowRight" || isRtl && event.key === "ArrowLeft") {
        newPosition += incr;
      }
      if (event.key === "Home") {
        newPosition = 0;
      }
      if (event.key === "End") {
        newPosition = 100;
      }
      newPosition = clamp2(newPosition, 0, 100);
      this.position = newPosition;
    }
  }
  handlePositionChange() {
    this.emit("sl-change");
  }
  render() {
    const isRtl = this.matches(":dir(rtl)");
    return x`
      <div
        part="base"
        id="image-comparer"
        class=${e8({
      "image-comparer": true,
      "image-comparer--rtl": isRtl
    })}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${o10({
      clipPath: isRtl ? `inset(0 0 0 ${100 - this.position}%)` : `inset(0 ${100 - this.position}% 0 0)`
    })}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${o10({
      left: isRtl ? `${100 - this.position}%` : `${this.position}%`
    })}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `;
  }
};
SlImageComparer.styles = [component_styles_default, image_comparer_styles_default];
SlImageComparer.scopedElement = { "sl-icon": SlIcon };
__decorateClass([
  e5(".image-comparer")
], SlImageComparer.prototype, "base", 2);
__decorateClass([
  e5(".image-comparer__handle")
], SlImageComparer.prototype, "handle", 2);
__decorateClass([
  n4({ type: Number, reflect: true })
], SlImageComparer.prototype, "position", 2);
__decorateClass([
  watch("position", { waitUntilFirstUpdate: true })
], SlImageComparer.prototype, "handlePositionChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.545RLEWA.js
var React33 = __toESM(require_react(), 1);
var tagName33 = "sl-image-comparer";
SlImageComparer.define("sl-image-comparer");
var reactWrapper33 = o7({
  tagName: tagName33,
  elementClass: SlImageComparer,
  react: React33,
  events: {
    onSlChange: "sl-change"
  },
  displayName: "SlImageComparer"
});
var image_comparer_default = reactWrapper33;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.J4FV5AZD.js
var React34 = __toESM(require_react(), 1);
var tagName34 = "sl-icon-button";
SlIconButton.define("sl-icon-button");
var reactWrapper34 = o7({
  tagName: tagName34,
  elementClass: SlIconButton,
  react: React34,
  events: {
    onSlBlur: "sl-blur",
    onSlFocus: "sl-focus"
  },
  displayName: "SlIconButton"
});
var icon_button_default = reactWrapper34;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XNEONNEJ.js
var includeFiles = /* @__PURE__ */ new Map();
function requestInclude(src, mode = "cors") {
  const prev = includeFiles.get(src);
  if (prev !== void 0) {
    return Promise.resolve(prev);
  }
  const fileDataPromise = fetch(src, { mode }).then(async (response) => {
    const res = {
      ok: response.ok,
      status: response.status,
      html: await response.text()
    };
    includeFiles.set(src, res);
    return res;
  });
  includeFiles.set(src, fileDataPromise);
  return fileDataPromise;
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.FY7IKLNL.js
var include_styles_default = i`
  :host {
    display: block;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KMMHL7N2.js
var SlInclude = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.mode = "cors";
    this.allowScripts = false;
  }
  executeScript(script) {
    const newScript = document.createElement("script");
    [...script.attributes].forEach((attr) => newScript.setAttribute(attr.name, attr.value));
    newScript.textContent = script.textContent;
    script.parentNode.replaceChild(newScript, script);
  }
  async handleSrcChange() {
    try {
      const src = this.src;
      const file = await requestInclude(src, this.mode);
      if (src !== this.src) {
        return;
      }
      if (!file.ok) {
        this.emit("sl-error", { detail: { status: file.status } });
        return;
      }
      this.innerHTML = file.html;
      if (this.allowScripts) {
        [...this.querySelectorAll("script")].forEach((script) => this.executeScript(script));
      }
      this.emit("sl-load");
    } catch (e13) {
      this.emit("sl-error", { detail: { status: -1 } });
    }
  }
  render() {
    return x`<slot></slot>`;
  }
};
SlInclude.styles = [component_styles_default, include_styles_default];
__decorateClass([
  n4()
], SlInclude.prototype, "src", 2);
__decorateClass([
  n4()
], SlInclude.prototype, "mode", 2);
__decorateClass([
  n4({ attribute: "allow-scripts", type: Boolean })
], SlInclude.prototype, "allowScripts", 2);
__decorateClass([
  watch("src")
], SlInclude.prototype, "handleSrcChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZDA3YIBB.js
var React35 = __toESM(require_react(), 1);
var tagName35 = "sl-include";
SlInclude.define("sl-include");
var reactWrapper35 = o7({
  tagName: tagName35,
  elementClass: SlInclude,
  react: React35,
  events: {
    onSlLoad: "sl-load",
    onSlError: "sl-error"
  },
  displayName: "SlInclude"
});
var include_default = reactWrapper35;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GGT72J62.js
var input_styles_default = i`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.5LELDSAA.js
var SlInput = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      assumeInteractionOn: ["sl-blur", "sl-input"]
    });
    this.hasSlotController = new HasSlotController(this, "help-text", "label");
    this.localize = new LocalizeController2(this);
    this.hasFocus = false;
    this.title = "";
    this.__numberInput = Object.assign(document.createElement("input"), { type: "number" });
    this.__dateInput = Object.assign(document.createElement("input"), { type: "date" });
    this.type = "text";
    this.name = "";
    this.value = "";
    this.defaultValue = "";
    this.size = "medium";
    this.filled = false;
    this.pill = false;
    this.label = "";
    this.helpText = "";
    this.clearable = false;
    this.disabled = false;
    this.placeholder = "";
    this.readonly = false;
    this.passwordToggle = false;
    this.passwordVisible = false;
    this.noSpinButtons = false;
    this.form = "";
    this.required = false;
    this.spellcheck = true;
  }
  //
  // NOTE: We use an in-memory input for these getters/setters instead of the one in the template because the properties
  // can be set before the component is rendered.
  //
  /**
   * Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted. This will use the native `<input type="{{type}}">` implementation and may result in an error.
   */
  get valueAsDate() {
    var _a;
    this.__dateInput.type = this.type;
    this.__dateInput.value = this.value;
    return ((_a = this.input) == null ? void 0 : _a.valueAsDate) || this.__dateInput.valueAsDate;
  }
  set valueAsDate(newValue) {
    this.__dateInput.type = this.type;
    this.__dateInput.valueAsDate = newValue;
    this.value = this.__dateInput.value;
  }
  /** Gets or sets the current value as a number. Returns `NaN` if the value can't be converted. */
  get valueAsNumber() {
    var _a;
    this.__numberInput.value = this.value;
    return ((_a = this.input) == null ? void 0 : _a.valueAsNumber) || this.__numberInput.valueAsNumber;
  }
  set valueAsNumber(newValue) {
    this.__numberInput.valueAsNumber = newValue;
    this.value = this.__numberInput.value;
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("sl-blur");
  }
  handleChange() {
    this.value = this.input.value;
    this.emit("sl-change");
  }
  handleClearClick(event) {
    event.preventDefault();
    if (this.value !== "") {
      this.value = "";
      this.emit("sl-clear");
      this.emit("sl-input");
      this.emit("sl-change");
    }
    this.input.focus();
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("sl-focus");
  }
  handleInput() {
    this.value = this.input.value;
    this.formControlController.updateValidity();
    this.emit("sl-input");
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  handleKeyDown(event) {
    const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (event.key === "Enter" && !hasModifier) {
      setTimeout(() => {
        if (!event.defaultPrevented && !event.isComposing) {
          this.formControlController.submit();
        }
      });
    }
  }
  handlePasswordToggle() {
    this.passwordVisible = !this.passwordVisible;
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  handleStepChange() {
    this.input.step = String(this.step);
    this.formControlController.updateValidity();
  }
  async handleValueChange() {
    await this.updateComplete;
    this.formControlController.updateValidity();
  }
  /** Sets focus on the input. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the input. */
  blur() {
    this.input.blur();
  }
  /** Selects all the text in the input. */
  select() {
    this.input.select();
  }
  /** Sets the start and end positions of the text selection (0-based). */
  setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
    this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }
  /** Replaces a range of text with a new string. */
  setRangeText(replacement, start, end, selectMode = "preserve") {
    const selectionStart = start != null ? start : this.input.selectionStart;
    const selectionEnd = end != null ? end : this.input.selectionEnd;
    this.input.setRangeText(replacement, selectionStart, selectionEnd, selectMode);
    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
  }
  /** Displays the browser picker for an input element (only works if the browser supports it for the input type). */
  showPicker() {
    if ("showPicker" in HTMLInputElement.prototype) {
      this.input.showPicker();
    }
  }
  /** Increments the value of a numeric input type by the value of the step attribute. */
  stepUp() {
    this.input.stepUp();
    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
  }
  /** Decrements the value of a numeric input type by the value of the step attribute. */
  stepDown() {
    this.input.stepDown();
    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasClearIcon = this.clearable && !this.disabled && !this.readonly;
    const isClearIconVisible = hasClearIcon && (typeof this.value === "number" || this.value.length > 0);
    return x`
      <div
        part="form-control"
        class=${e8({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${hasLabel ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${e8({
      input: true,
      // Sizes
      "input--small": this.size === "small",
      "input--medium": this.size === "medium",
      "input--large": this.size === "large",
      // States
      "input--pill": this.pill,
      "input--standard": !this.filled,
      "input--filled": this.filled,
      "input--disabled": this.disabled,
      "input--focused": this.hasFocus,
      "input--empty": !this.value,
      "input--no-spin-buttons": this.noSpinButtons
    })}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type === "password" && this.passwordVisible ? "text" : this.type}
              title=${this.title}
              name=${o6(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${o6(this.placeholder)}
              minlength=${o6(this.minlength)}
              maxlength=${o6(this.maxlength)}
              min=${o6(this.min)}
              max=${o6(this.max)}
              step=${o6(this.step)}
              .value=${l4(this.value)}
              autocapitalize=${o6(this.autocapitalize)}
              autocomplete=${o6(this.autocomplete)}
              autocorrect=${o6(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${o6(this.pattern)}
              enterkeyhint=${o6(this.enterkeyhint)}
              inputmode=${o6(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${isClearIconVisible ? x`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                ` : ""}
            ${this.passwordToggle && !this.disabled ? x`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible ? "hidePassword" : "showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible ? x`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        ` : x`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                ` : ""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
SlInput.styles = [component_styles_default, form_control_styles_default, input_styles_default];
SlInput.dependencies = { "sl-icon": SlIcon };
__decorateClass([
  e5(".input__control")
], SlInput.prototype, "input", 2);
__decorateClass([
  r6()
], SlInput.prototype, "hasFocus", 2);
__decorateClass([
  n4()
], SlInput.prototype, "title", 2);
__decorateClass([
  n4({ reflect: true })
], SlInput.prototype, "type", 2);
__decorateClass([
  n4()
], SlInput.prototype, "name", 2);
__decorateClass([
  n4()
], SlInput.prototype, "value", 2);
__decorateClass([
  defaultValue()
], SlInput.prototype, "defaultValue", 2);
__decorateClass([
  n4({ reflect: true })
], SlInput.prototype, "size", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlInput.prototype, "filled", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlInput.prototype, "pill", 2);
__decorateClass([
  n4()
], SlInput.prototype, "label", 2);
__decorateClass([
  n4({ attribute: "help-text" })
], SlInput.prototype, "helpText", 2);
__decorateClass([
  n4({ type: Boolean })
], SlInput.prototype, "clearable", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlInput.prototype, "disabled", 2);
__decorateClass([
  n4()
], SlInput.prototype, "placeholder", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlInput.prototype, "readonly", 2);
__decorateClass([
  n4({ attribute: "password-toggle", type: Boolean })
], SlInput.prototype, "passwordToggle", 2);
__decorateClass([
  n4({ attribute: "password-visible", type: Boolean })
], SlInput.prototype, "passwordVisible", 2);
__decorateClass([
  n4({ attribute: "no-spin-buttons", type: Boolean })
], SlInput.prototype, "noSpinButtons", 2);
__decorateClass([
  n4({ reflect: true })
], SlInput.prototype, "form", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlInput.prototype, "required", 2);
__decorateClass([
  n4()
], SlInput.prototype, "pattern", 2);
__decorateClass([
  n4({ type: Number })
], SlInput.prototype, "minlength", 2);
__decorateClass([
  n4({ type: Number })
], SlInput.prototype, "maxlength", 2);
__decorateClass([
  n4()
], SlInput.prototype, "min", 2);
__decorateClass([
  n4()
], SlInput.prototype, "max", 2);
__decorateClass([
  n4()
], SlInput.prototype, "step", 2);
__decorateClass([
  n4()
], SlInput.prototype, "autocapitalize", 2);
__decorateClass([
  n4()
], SlInput.prototype, "autocorrect", 2);
__decorateClass([
  n4()
], SlInput.prototype, "autocomplete", 2);
__decorateClass([
  n4({ type: Boolean })
], SlInput.prototype, "autofocus", 2);
__decorateClass([
  n4()
], SlInput.prototype, "enterkeyhint", 2);
__decorateClass([
  n4({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (value) => !value || value === "false" ? false : true,
      toAttribute: (value) => value ? "true" : "false"
    }
  })
], SlInput.prototype, "spellcheck", 2);
__decorateClass([
  n4()
], SlInput.prototype, "inputmode", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlInput.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("step", { waitUntilFirstUpdate: true })
], SlInput.prototype, "handleStepChange", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], SlInput.prototype, "handleValueChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.VDC3GOE2.js
var React36 = __toESM(require_react(), 1);
var tagName36 = "sl-input";
SlInput.define("sl-input");
var reactWrapper36 = o7({
  tagName: tagName36,
  elementClass: SlInput,
  react: React36,
  events: {
    onSlBlur: "sl-blur",
    onSlChange: "sl-change",
    onSlClear: "sl-clear",
    onSlFocus: "sl-focus",
    onSlInput: "sl-input",
    onSlInvalid: "sl-invalid"
  },
  displayName: "SlInput"
});
var input_default = reactWrapper36;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.VVA35HTY.js
var menu_styles_default = i`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NSN2PIET.js
var SlMenu = class extends ShoelaceElement {
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "menu");
  }
  handleClick(event) {
    const menuItemTypes = ["menuitem", "menuitemcheckbox"];
    const composedPath = event.composedPath();
    const target = composedPath.find((el) => {
      var _a;
      return menuItemTypes.includes(((_a = el == null ? void 0 : el.getAttribute) == null ? void 0 : _a.call(el, "role")) || "");
    });
    if (!target)
      return;
    const closestMenu = composedPath.find((el) => {
      var _a;
      return ((_a = el == null ? void 0 : el.getAttribute) == null ? void 0 : _a.call(el, "role")) === "menu";
    });
    const clickHasSubmenu = closestMenu !== this;
    if (clickHasSubmenu)
      return;
    const item = target;
    if (item.type === "checkbox") {
      item.checked = !item.checked;
    }
    this.emit("sl-select", { detail: { item } });
  }
  handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      const item = this.getCurrentItem();
      event.preventDefault();
      event.stopPropagation();
      item == null ? void 0 : item.click();
    } else if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
      const items = this.getAllItems();
      const activeItem = this.getCurrentItem();
      let index = activeItem ? items.indexOf(activeItem) : 0;
      if (items.length > 0) {
        event.preventDefault();
        event.stopPropagation();
        if (event.key === "ArrowDown") {
          index++;
        } else if (event.key === "ArrowUp") {
          index--;
        } else if (event.key === "Home") {
          index = 0;
        } else if (event.key === "End") {
          index = items.length - 1;
        }
        if (index < 0) {
          index = items.length - 1;
        }
        if (index > items.length - 1) {
          index = 0;
        }
        this.setCurrentItem(items[index]);
        items[index].focus();
      }
    }
  }
  handleMouseDown(event) {
    const target = event.target;
    if (this.isMenuItem(target)) {
      this.setCurrentItem(target);
    }
  }
  handleSlotChange() {
    const items = this.getAllItems();
    if (items.length > 0) {
      this.setCurrentItem(items[0]);
    }
  }
  isMenuItem(item) {
    var _a;
    return item.tagName.toLowerCase() === "sl-menu-item" || ["menuitem", "menuitemcheckbox", "menuitemradio"].includes((_a = item.getAttribute("role")) != null ? _a : "");
  }
  /** @internal Gets all slotted menu items, ignoring dividers, headers, and other elements. */
  getAllItems() {
    return [...this.defaultSlot.assignedElements({ flatten: true })].filter((el) => {
      if (el.inert || !this.isMenuItem(el)) {
        return false;
      }
      return true;
    });
  }
  /**
   * @internal Gets the current menu item, which is the menu item that has `tabindex="0"` within the roving tab index.
   * The menu item may or may not have focus, but for keyboard interaction purposes it's considered the "active" item.
   */
  getCurrentItem() {
    return this.getAllItems().find((i6) => i6.getAttribute("tabindex") === "0");
  }
  /**
   * @internal Sets the current menu item to the specified element. This sets `tabindex="0"` on the target element and
   * `tabindex="-1"` to all other items. This method must be called prior to setting focus on a menu item.
   */
  setCurrentItem(item) {
    const items = this.getAllItems();
    items.forEach((i6) => {
      i6.setAttribute("tabindex", i6 === item ? "0" : "-1");
    });
  }
  render() {
    return x`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `;
  }
};
SlMenu.styles = [component_styles_default, menu_styles_default];
__decorateClass([
  e5("slot")
], SlMenu.prototype, "defaultSlot", 2);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7VKIHEJY.js
var React37 = __toESM(require_react(), 1);
var tagName37 = "sl-menu";
SlMenu.define("sl-menu");
var reactWrapper37 = o7({
  tagName: tagName37,
  elementClass: SlMenu,
  react: React37,
  events: {
    onSlSelect: "sl-select"
  },
  displayName: "SlMenu"
});
var menu_default = reactWrapper37;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.C4BMSSZZ.js
var React38 = __toESM(require_react(), 1);
var tagName38 = "sl-checkbox";
SlCheckbox.define("sl-checkbox");
var reactWrapper38 = o7({
  tagName: tagName38,
  elementClass: SlCheckbox,
  react: React38,
  events: {
    onSlBlur: "sl-blur",
    onSlChange: "sl-change",
    onSlFocus: "sl-focus",
    onSlInput: "sl-input",
    onSlInvalid: "sl-invalid"
  },
  displayName: "SlCheckbox"
});
var checkbox_default = reactWrapper38;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.J7PLVEQM.js
var details_styles_default = i`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LWDZTXXJ.js
var SlDetails = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
    this.open = false;
    this.disabled = false;
  }
  firstUpdated() {
    this.body.style.height = this.open ? "auto" : "0";
    if (this.open) {
      this.details.open = true;
    }
    this.detailsObserver = new MutationObserver((changes) => {
      for (const change of changes) {
        if (change.type === "attributes" && change.attributeName === "open") {
          if (this.details.open) {
            this.show();
          } else {
            this.hide();
          }
        }
      }
    });
    this.detailsObserver.observe(this.details, { attributes: true });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.detailsObserver.disconnect();
  }
  handleSummaryClick(event) {
    event.preventDefault();
    if (!this.disabled) {
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
      this.header.focus();
    }
  }
  handleSummaryKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      this.hide();
    }
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      this.show();
    }
  }
  async handleOpenChange() {
    if (this.open) {
      this.details.open = true;
      const slShow = this.emit("sl-show", { cancelable: true });
      if (slShow.defaultPrevented) {
        this.open = false;
        this.details.open = false;
        return;
      }
      await stopAnimations(this.body);
      const { keyframes, options } = getAnimation(this, "details.show", { dir: this.localize.dir() });
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.style.height = "auto";
      this.emit("sl-after-show");
    } else {
      const slHide = this.emit("sl-hide", { cancelable: true });
      if (slHide.defaultPrevented) {
        this.details.open = true;
        this.open = true;
        return;
      }
      await stopAnimations(this.body);
      const { keyframes, options } = getAnimation(this, "details.hide", { dir: this.localize.dir() });
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.style.height = "auto";
      this.details.open = false;
      this.emit("sl-after-hide");
    }
  }
  /** Shows the details. */
  async show() {
    if (this.open || this.disabled) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "sl-after-show");
  }
  /** Hides the details */
  async hide() {
    if (!this.open || this.disabled) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "sl-after-hide");
  }
  render() {
    const isRtl = this.matches(":dir(rtl)");
    return x`
      <details
        part="base"
        class=${e8({
      details: true,
      "details--open": this.open,
      "details--disabled": this.disabled,
      "details--rtl": isRtl
    })}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open ? "true" : "false"}
          aria-controls="content"
          aria-disabled=${this.disabled ? "true" : "false"}
          tabindex=${this.disabled ? "-1" : "0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${isRtl ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${isRtl ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `;
  }
};
SlDetails.styles = [component_styles_default, details_styles_default];
SlDetails.dependencies = {
  "sl-icon": SlIcon
};
__decorateClass([
  e5(".details")
], SlDetails.prototype, "details", 2);
__decorateClass([
  e5(".details__header")
], SlDetails.prototype, "header", 2);
__decorateClass([
  e5(".details__body")
], SlDetails.prototype, "body", 2);
__decorateClass([
  e5(".details__expand-icon-slot")
], SlDetails.prototype, "expandIconSlot", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlDetails.prototype, "open", 2);
__decorateClass([
  n4()
], SlDetails.prototype, "summary", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlDetails.prototype, "disabled", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], SlDetails.prototype, "handleOpenChange", 1);
setDefaultAnimation("details.show", {
  keyframes: [
    { height: "0", opacity: "0" },
    { height: "auto", opacity: "1" }
  ],
  options: { duration: 250, easing: "linear" }
});
setDefaultAnimation("details.hide", {
  keyframes: [
    { height: "auto", opacity: "1" },
    { height: "0", opacity: "0" }
  ],
  options: { duration: 250, easing: "linear" }
});

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZWLPLK6E.js
var React39 = __toESM(require_react(), 1);
var tagName39 = "sl-details";
SlDetails.define("sl-details");
var reactWrapper39 = o7({
  tagName: tagName39,
  elementClass: SlDetails,
  react: React39,
  events: {
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide"
  },
  displayName: "SlDetails"
});
var details_default = reactWrapper39;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WSSNCNLM.js
var copy_button_styles_default = i`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4WHAFO3R.js
var SlCopyButton = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
    this.isCopying = false;
    this.status = "rest";
    this.value = "";
    this.from = "";
    this.disabled = false;
    this.copyLabel = "";
    this.successLabel = "";
    this.errorLabel = "";
    this.feedbackDuration = 1e3;
    this.tooltipPlacement = "top";
    this.hoist = false;
  }
  async handleCopy() {
    if (this.disabled || this.isCopying) {
      return;
    }
    this.isCopying = true;
    let valueToCopy = this.value;
    if (this.from) {
      const root = this.getRootNode();
      const isProperty = this.from.includes(".");
      const isAttribute = this.from.includes("[") && this.from.includes("]");
      let id3 = this.from;
      let field = "";
      if (isProperty) {
        [id3, field] = this.from.trim().split(".");
      } else if (isAttribute) {
        [id3, field] = this.from.trim().replace(/\]$/, "").split("[");
      }
      const target = "getElementById" in root ? root.getElementById(id3) : null;
      if (target) {
        if (isAttribute) {
          valueToCopy = target.getAttribute(field) || "";
        } else if (isProperty) {
          valueToCopy = target[field] || "";
        } else {
          valueToCopy = target.textContent || "";
        }
      } else {
        this.showStatus("error");
        this.emit("sl-error");
      }
    }
    if (!valueToCopy) {
      this.showStatus("error");
      this.emit("sl-error");
    } else {
      try {
        await navigator.clipboard.writeText(valueToCopy);
        this.showStatus("success");
        this.emit("sl-copy", {
          detail: {
            value: valueToCopy
          }
        });
      } catch (error) {
        this.showStatus("error");
        this.emit("sl-error");
      }
    }
  }
  async showStatus(status) {
    const copyLabel = this.copyLabel || this.localize.term("copy");
    const successLabel = this.successLabel || this.localize.term("copied");
    const errorLabel = this.errorLabel || this.localize.term("error");
    const iconToShow = status === "success" ? this.successIcon : this.errorIcon;
    const showAnimation = getAnimation(this, "copy.in", { dir: "ltr" });
    const hideAnimation = getAnimation(this, "copy.out", { dir: "ltr" });
    this.tooltip.content = status === "success" ? successLabel : errorLabel;
    await this.copyIcon.animate(hideAnimation.keyframes, hideAnimation.options).finished;
    this.copyIcon.hidden = true;
    this.status = status;
    iconToShow.hidden = false;
    await iconToShow.animate(showAnimation.keyframes, showAnimation.options).finished;
    setTimeout(async () => {
      await iconToShow.animate(hideAnimation.keyframes, hideAnimation.options).finished;
      iconToShow.hidden = true;
      this.status = "rest";
      this.copyIcon.hidden = false;
      await this.copyIcon.animate(showAnimation.keyframes, showAnimation.options).finished;
      this.tooltip.content = copyLabel;
      this.isCopying = false;
    }, this.feedbackDuration);
  }
  render() {
    const copyLabel = this.copyLabel || this.localize.term("copy");
    return x`
      <sl-tooltip
        class=${e8({
      "copy-button": true,
      "copy-button--success": this.status === "success",
      "copy-button--error": this.status === "error"
    })}
        content=${copyLabel}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `;
  }
};
SlCopyButton.styles = [component_styles_default, copy_button_styles_default];
SlCopyButton.dependencies = {
  "sl-icon": SlIcon,
  "sl-tooltip": SlTooltip
};
__decorateClass([
  e5('slot[name="copy-icon"]')
], SlCopyButton.prototype, "copyIcon", 2);
__decorateClass([
  e5('slot[name="success-icon"]')
], SlCopyButton.prototype, "successIcon", 2);
__decorateClass([
  e5('slot[name="error-icon"]')
], SlCopyButton.prototype, "errorIcon", 2);
__decorateClass([
  e5("sl-tooltip")
], SlCopyButton.prototype, "tooltip", 2);
__decorateClass([
  r6()
], SlCopyButton.prototype, "isCopying", 2);
__decorateClass([
  r6()
], SlCopyButton.prototype, "status", 2);
__decorateClass([
  n4()
], SlCopyButton.prototype, "value", 2);
__decorateClass([
  n4()
], SlCopyButton.prototype, "from", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlCopyButton.prototype, "disabled", 2);
__decorateClass([
  n4({ attribute: "copy-label" })
], SlCopyButton.prototype, "copyLabel", 2);
__decorateClass([
  n4({ attribute: "success-label" })
], SlCopyButton.prototype, "successLabel", 2);
__decorateClass([
  n4({ attribute: "error-label" })
], SlCopyButton.prototype, "errorLabel", 2);
__decorateClass([
  n4({ attribute: "feedback-duration", type: Number })
], SlCopyButton.prototype, "feedbackDuration", 2);
__decorateClass([
  n4({ attribute: "tooltip-placement" })
], SlCopyButton.prototype, "tooltipPlacement", 2);
__decorateClass([
  n4({ type: Boolean })
], SlCopyButton.prototype, "hoist", 2);
setDefaultAnimation("copy.in", {
  keyframes: [
    { scale: ".25", opacity: ".25" },
    { scale: "1", opacity: "1" }
  ],
  options: { duration: 100 }
});
setDefaultAnimation("copy.out", {
  keyframes: [
    { scale: "1", opacity: "1" },
    { scale: ".25", opacity: "0" }
  ],
  options: { duration: 100 }
});

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AZBPTESY.js
var React40 = __toESM(require_react(), 1);
var tagName40 = "sl-copy-button";
SlCopyButton.define("sl-copy-button");
var reactWrapper40 = o7({
  tagName: tagName40,
  elementClass: SlCopyButton,
  react: React40,
  events: {
    onSlCopy: "sl-copy",
    onSlError: "sl-error"
  },
  displayName: "SlCopyButton"
});
var copy_button_default = reactWrapper40;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SUSCR7CI.js
var divider_styles_default = i`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.VUJZVHCN.js
var SlDivider = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.vertical = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "separator");
  }
  handleVerticalChange() {
    this.setAttribute("aria-orientation", this.vertical ? "vertical" : "horizontal");
  }
};
SlDivider.styles = [component_styles_default, divider_styles_default];
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlDivider.prototype, "vertical", 2);
__decorateClass([
  watch("vertical")
], SlDivider.prototype, "handleVerticalChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AI6M4TWY.js
var React41 = __toESM(require_react(), 1);
var tagName41 = "sl-divider";
SlDivider.define("sl-divider");
var reactWrapper41 = o7({
  tagName: tagName41,
  elementClass: SlDivider,
  react: React41,
  events: {},
  displayName: "SlDivider"
});
var divider_default = reactWrapper41;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LXDTFLWU.js
var computedStyleMap = /* @__PURE__ */ new WeakMap();
function getCachedComputedStyle(el) {
  let computedStyle = computedStyleMap.get(el);
  if (!computedStyle) {
    computedStyle = window.getComputedStyle(el, null);
    computedStyleMap.set(el, computedStyle);
  }
  return computedStyle;
}
function isVisible(el) {
  if (typeof el.checkVisibility === "function") {
    return el.checkVisibility({ checkOpacity: false, checkVisibilityCSS: true });
  }
  const computedStyle = getCachedComputedStyle(el);
  return computedStyle.visibility !== "hidden" && computedStyle.display !== "none";
}
function isOverflowingAndTabbable(el) {
  const computedStyle = getCachedComputedStyle(el);
  const { overflowY, overflowX } = computedStyle;
  if (overflowY === "scroll" || overflowX === "scroll") {
    return true;
  }
  if (overflowY !== "auto" || overflowX !== "auto") {
    return false;
  }
  const isOverflowingY = el.scrollHeight > el.clientHeight;
  if (isOverflowingY && overflowY === "auto") {
    return true;
  }
  const isOverflowingX = el.scrollWidth > el.clientWidth;
  if (isOverflowingX && overflowX === "auto") {
    return true;
  }
  return false;
}
function isTabbable(el) {
  const tag = el.tagName.toLowerCase();
  const tabindex = Number(el.getAttribute("tabindex"));
  const hasTabindex = el.hasAttribute("tabindex");
  if (hasTabindex && (isNaN(tabindex) || tabindex <= -1)) {
    return false;
  }
  if (el.hasAttribute("disabled")) {
    return false;
  }
  if (el.closest("[inert]")) {
    return false;
  }
  if (tag === "input" && el.getAttribute("type") === "radio" && !el.hasAttribute("checked")) {
    return false;
  }
  if (!isVisible(el)) {
    return false;
  }
  if ((tag === "audio" || tag === "video") && el.hasAttribute("controls")) {
    return true;
  }
  if (el.hasAttribute("tabindex")) {
    return true;
  }
  if (el.hasAttribute("contenteditable") && el.getAttribute("contenteditable") !== "false") {
    return true;
  }
  const isNativelyTabbable = [
    "button",
    "input",
    "select",
    "textarea",
    "a",
    "audio",
    "video",
    "summary",
    "iframe"
  ].includes(tag);
  if (isNativelyTabbable) {
    return true;
  }
  return isOverflowingAndTabbable(el);
}
function getTabbableBoundary(root) {
  var _a, _b;
  const tabbableElements = getTabbableElements(root);
  const start = (_a = tabbableElements[0]) != null ? _a : null;
  const end = (_b = tabbableElements[tabbableElements.length - 1]) != null ? _b : null;
  return { start, end };
}
function getSlottedChildrenOutsideRootElement(slotElement, root) {
  var _a;
  return ((_a = slotElement.getRootNode({ composed: true })) == null ? void 0 : _a.host) !== root;
}
function getTabbableElements(root) {
  const walkedEls = /* @__PURE__ */ new WeakMap();
  const tabbableElements = [];
  function walk(el) {
    if (el instanceof Element) {
      if (el.hasAttribute("inert") || el.closest("[inert]")) {
        return;
      }
      if (walkedEls.has(el)) {
        return;
      }
      walkedEls.set(el, true);
      if (!tabbableElements.includes(el) && isTabbable(el)) {
        tabbableElements.push(el);
      }
      if (el instanceof HTMLSlotElement && getSlottedChildrenOutsideRootElement(el, root)) {
        el.assignedElements({ flatten: true }).forEach((assignedEl) => {
          walk(assignedEl);
        });
      }
      if (el.shadowRoot !== null && el.shadowRoot.mode === "open") {
        walk(el.shadowRoot);
      }
    }
    for (const e13 of el.children) {
      walk(e13);
    }
  }
  walk(root);
  return tabbableElements.sort((a4, b3) => {
    const aTabindex = Number(a4.getAttribute("tabindex")) || 0;
    const bTabindex = Number(b3.getAttribute("tabindex")) || 0;
    return bTabindex - aTabindex;
  });
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ODFLWOL6.js
function* activeElements(activeElement = document.activeElement) {
  if (activeElement === null || activeElement === void 0)
    return;
  yield activeElement;
  if ("shadowRoot" in activeElement && activeElement.shadowRoot && activeElement.shadowRoot.mode !== "closed") {
    yield* __yieldStar(activeElements(activeElement.shadowRoot.activeElement));
  }
}
function getDeepestActiveElement() {
  return [...activeElements()].pop();
}
var activeModals = [];
var Modal = class {
  constructor(element) {
    this.tabDirection = "forward";
    this.handleFocusIn = () => {
      if (!this.isActive())
        return;
      this.checkFocus();
    };
    this.handleKeyDown = (event) => {
      var _a;
      if (event.key !== "Tab" || this.isExternalActivated)
        return;
      if (!this.isActive())
        return;
      const currentActiveElement = getDeepestActiveElement();
      this.previousFocus = currentActiveElement;
      if (this.previousFocus && this.possiblyHasTabbableChildren(this.previousFocus)) {
        return;
      }
      if (event.shiftKey) {
        this.tabDirection = "backward";
      } else {
        this.tabDirection = "forward";
      }
      const tabbableElements = getTabbableElements(this.element);
      let currentFocusIndex = tabbableElements.findIndex((el) => el === currentActiveElement);
      this.previousFocus = this.currentFocus;
      const addition = this.tabDirection === "forward" ? 1 : -1;
      while (true) {
        if (currentFocusIndex + addition >= tabbableElements.length) {
          currentFocusIndex = 0;
        } else if (currentFocusIndex + addition < 0) {
          currentFocusIndex = tabbableElements.length - 1;
        } else {
          currentFocusIndex += addition;
        }
        this.previousFocus = this.currentFocus;
        const nextFocus = (
          /** @type {HTMLElement} */
          tabbableElements[currentFocusIndex]
        );
        if (this.tabDirection === "backward") {
          if (this.previousFocus && this.possiblyHasTabbableChildren(this.previousFocus)) {
            return;
          }
        }
        if (nextFocus && this.possiblyHasTabbableChildren(nextFocus)) {
          return;
        }
        event.preventDefault();
        this.currentFocus = nextFocus;
        (_a = this.currentFocus) == null ? void 0 : _a.focus({ preventScroll: false });
        const allActiveElements = [...activeElements()];
        if (allActiveElements.includes(this.currentFocus) || !allActiveElements.includes(this.previousFocus)) {
          break;
        }
      }
      setTimeout(() => this.checkFocus());
    };
    this.handleKeyUp = () => {
      this.tabDirection = "forward";
    };
    this.element = element;
    this.elementsWithTabbableControls = ["iframe"];
  }
  /** Activates focus trapping. */
  activate() {
    activeModals.push(this.element);
    document.addEventListener("focusin", this.handleFocusIn);
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }
  /** Deactivates focus trapping. */
  deactivate() {
    activeModals = activeModals.filter((modal) => modal !== this.element);
    this.currentFocus = null;
    document.removeEventListener("focusin", this.handleFocusIn);
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
  }
  /** Determines if this modal element is currently active or not. */
  isActive() {
    return activeModals[activeModals.length - 1] === this.element;
  }
  /** Activates external modal behavior and temporarily disables focus trapping. */
  activateExternal() {
    this.isExternalActivated = true;
  }
  /** Deactivates external modal behavior and re-enables focus trapping. */
  deactivateExternal() {
    this.isExternalActivated = false;
  }
  checkFocus() {
    if (this.isActive() && !this.isExternalActivated) {
      const tabbableElements = getTabbableElements(this.element);
      if (!this.element.matches(":focus-within")) {
        const start = tabbableElements[0];
        const end = tabbableElements[tabbableElements.length - 1];
        const target = this.tabDirection === "forward" ? start : end;
        if (typeof (target == null ? void 0 : target.focus) === "function") {
          this.currentFocus = target;
          target.focus({ preventScroll: false });
        }
      }
    }
  }
  possiblyHasTabbableChildren(element) {
    return this.elementsWithTabbableControls.includes(element.tagName.toLowerCase()) || element.hasAttribute("controls");
  }
};

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.G5RKA5HF.js
var dialog_styles_default = i`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LXCGA2AO.js
var SlDialog = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "footer");
    this.localize = new LocalizeController2(this);
    this.modal = new Modal(this);
    this.open = false;
    this.label = "";
    this.noHeader = false;
    this.handleDocumentKeyDown = (event) => {
      if (event.key === "Escape" && this.modal.isActive() && this.open) {
        event.stopPropagation();
        this.requestClose("keyboard");
      }
    };
  }
  firstUpdated() {
    this.dialog.hidden = !this.open;
    if (this.open) {
      this.addOpenListeners();
      this.modal.activate();
      lockBodyScrolling(this);
    }
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback();
    this.modal.deactivate();
    unlockBodyScrolling(this);
    (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
  }
  requestClose(source) {
    const slRequestClose = this.emit("sl-request-close", {
      cancelable: true,
      detail: { source }
    });
    if (slRequestClose.defaultPrevented) {
      const animation = getAnimation(this, "dialog.denyClose", { dir: this.localize.dir() });
      animateTo(this.panel, animation.keyframes, animation.options);
      return;
    }
    this.hide();
  }
  addOpenListeners() {
    var _a;
    if ("CloseWatcher" in window) {
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
      this.closeWatcher = new CloseWatcher();
      this.closeWatcher.onclose = () => this.requestClose("keyboard");
    } else {
      document.addEventListener("keydown", this.handleDocumentKeyDown);
    }
  }
  removeOpenListeners() {
    var _a;
    (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  async handleOpenChange() {
    if (this.open) {
      this.emit("sl-show");
      this.addOpenListeners();
      this.originalTrigger = document.activeElement;
      this.modal.activate();
      lockBodyScrolling(this);
      const autoFocusTarget = this.querySelector("[autofocus]");
      if (autoFocusTarget) {
        autoFocusTarget.removeAttribute("autofocus");
      }
      await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
      this.dialog.hidden = false;
      requestAnimationFrame(() => {
        const slInitialFocus = this.emit("sl-initial-focus", { cancelable: true });
        if (!slInitialFocus.defaultPrevented) {
          if (autoFocusTarget) {
            autoFocusTarget.focus({ preventScroll: true });
          } else {
            this.panel.focus({ preventScroll: true });
          }
        }
        if (autoFocusTarget) {
          autoFocusTarget.setAttribute("autofocus", "");
        }
      });
      const panelAnimation = getAnimation(this, "dialog.show", { dir: this.localize.dir() });
      const overlayAnimation = getAnimation(this, "dialog.overlay.show", { dir: this.localize.dir() });
      await Promise.all([
        animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
        animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
      ]);
      this.emit("sl-after-show");
    } else {
      this.emit("sl-hide");
      this.removeOpenListeners();
      this.modal.deactivate();
      await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
      const panelAnimation = getAnimation(this, "dialog.hide", { dir: this.localize.dir() });
      const overlayAnimation = getAnimation(this, "dialog.overlay.hide", { dir: this.localize.dir() });
      await Promise.all([
        animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options).then(() => {
          this.overlay.hidden = true;
        }),
        animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options).then(() => {
          this.panel.hidden = true;
        })
      ]);
      this.dialog.hidden = true;
      this.overlay.hidden = false;
      this.panel.hidden = false;
      unlockBodyScrolling(this);
      const trigger = this.originalTrigger;
      if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
        setTimeout(() => trigger.focus());
      }
      this.emit("sl-after-hide");
    }
  }
  /** Shows the dialog. */
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "sl-after-show");
  }
  /** Hides the dialog */
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "sl-after-hide");
  }
  render() {
    return x`
      <div
        part="base"
        class=${e8({
      dialog: true,
      "dialog--open": this.open,
      "dialog--has-footer": this.hasSlotController.test("footer")
    })}
      >
        <div part="overlay" class="dialog__overlay" @click=${() => this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${o6(this.noHeader ? this.label : void 0)}
          aria-labelledby=${o6(!this.noHeader ? "title" : void 0)}
          tabindex="-1"
        >
          ${!this.noHeader ? x`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${() => this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              ` : ""}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }
};
SlDialog.styles = [component_styles_default, dialog_styles_default];
SlDialog.dependencies = {
  "sl-icon-button": SlIconButton
};
__decorateClass([
  e5(".dialog")
], SlDialog.prototype, "dialog", 2);
__decorateClass([
  e5(".dialog__panel")
], SlDialog.prototype, "panel", 2);
__decorateClass([
  e5(".dialog__overlay")
], SlDialog.prototype, "overlay", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlDialog.prototype, "open", 2);
__decorateClass([
  n4({ reflect: true })
], SlDialog.prototype, "label", 2);
__decorateClass([
  n4({ attribute: "no-header", type: Boolean, reflect: true })
], SlDialog.prototype, "noHeader", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], SlDialog.prototype, "handleOpenChange", 1);
setDefaultAnimation("dialog.show", {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("dialog.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("dialog.denyClose", {
  keyframes: [{ scale: 1 }, { scale: 1.02 }, { scale: 1 }],
  options: { duration: 250 }
});
setDefaultAnimation("dialog.overlay.show", {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 }
});
setDefaultAnimation("dialog.overlay.hide", {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 }
});

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.K3XJA3XZ.js
var React42 = __toESM(require_react(), 1);
var tagName42 = "sl-dialog";
SlDialog.define("sl-dialog");
var reactWrapper42 = o7({
  tagName: tagName42,
  elementClass: SlDialog,
  react: React42,
  events: {
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide",
    onSlInitialFocus: "sl-initial-focus",
    onSlRequestClose: "sl-request-close"
  },
  displayName: "SlDialog"
});
var dialog_default = reactWrapper42;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BRQKZQRB.js
var drawer_styles_default = i`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3G3JQZ4T.js
function uppercaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var SlDrawer = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "footer");
    this.localize = new LocalizeController2(this);
    this.modal = new Modal(this);
    this.open = false;
    this.label = "";
    this.placement = "end";
    this.contained = false;
    this.noHeader = false;
    this.handleDocumentKeyDown = (event) => {
      if (this.contained) {
        return;
      }
      if (event.key === "Escape" && this.modal.isActive() && this.open) {
        event.stopImmediatePropagation();
        this.requestClose("keyboard");
      }
    };
  }
  firstUpdated() {
    this.drawer.hidden = !this.open;
    if (this.open) {
      this.addOpenListeners();
      if (!this.contained) {
        this.modal.activate();
        lockBodyScrolling(this);
      }
    }
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback();
    unlockBodyScrolling(this);
    (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
  }
  requestClose(source) {
    const slRequestClose = this.emit("sl-request-close", {
      cancelable: true,
      detail: { source }
    });
    if (slRequestClose.defaultPrevented) {
      const animation = getAnimation(this, "drawer.denyClose", { dir: this.localize.dir() });
      animateTo(this.panel, animation.keyframes, animation.options);
      return;
    }
    this.hide();
  }
  addOpenListeners() {
    var _a;
    if ("CloseWatcher" in window) {
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
      if (!this.contained) {
        this.closeWatcher = new CloseWatcher();
        this.closeWatcher.onclose = () => this.requestClose("keyboard");
      }
    } else {
      document.addEventListener("keydown", this.handleDocumentKeyDown);
    }
  }
  removeOpenListeners() {
    var _a;
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
  }
  async handleOpenChange() {
    if (this.open) {
      this.emit("sl-show");
      this.addOpenListeners();
      this.originalTrigger = document.activeElement;
      if (!this.contained) {
        this.modal.activate();
        lockBodyScrolling(this);
      }
      const autoFocusTarget = this.querySelector("[autofocus]");
      if (autoFocusTarget) {
        autoFocusTarget.removeAttribute("autofocus");
      }
      await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
      this.drawer.hidden = false;
      requestAnimationFrame(() => {
        const slInitialFocus = this.emit("sl-initial-focus", { cancelable: true });
        if (!slInitialFocus.defaultPrevented) {
          if (autoFocusTarget) {
            autoFocusTarget.focus({ preventScroll: true });
          } else {
            this.panel.focus({ preventScroll: true });
          }
        }
        if (autoFocusTarget) {
          autoFocusTarget.setAttribute("autofocus", "");
        }
      });
      const panelAnimation = getAnimation(this, `drawer.show${uppercaseFirstLetter(this.placement)}`, {
        dir: this.localize.dir()
      });
      const overlayAnimation = getAnimation(this, "drawer.overlay.show", { dir: this.localize.dir() });
      await Promise.all([
        animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
        animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
      ]);
      this.emit("sl-after-show");
    } else {
      this.emit("sl-hide");
      this.removeOpenListeners();
      if (!this.contained) {
        this.modal.deactivate();
        unlockBodyScrolling(this);
      }
      await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
      const panelAnimation = getAnimation(this, `drawer.hide${uppercaseFirstLetter(this.placement)}`, {
        dir: this.localize.dir()
      });
      const overlayAnimation = getAnimation(this, "drawer.overlay.hide", { dir: this.localize.dir() });
      await Promise.all([
        animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options).then(() => {
          this.overlay.hidden = true;
        }),
        animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options).then(() => {
          this.panel.hidden = true;
        })
      ]);
      this.drawer.hidden = true;
      this.overlay.hidden = false;
      this.panel.hidden = false;
      const trigger = this.originalTrigger;
      if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
        setTimeout(() => trigger.focus());
      }
      this.emit("sl-after-hide");
    }
  }
  handleNoModalChange() {
    if (this.open && !this.contained) {
      this.modal.activate();
      lockBodyScrolling(this);
    }
    if (this.open && this.contained) {
      this.modal.deactivate();
      unlockBodyScrolling(this);
    }
  }
  /** Shows the drawer. */
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "sl-after-show");
  }
  /** Hides the drawer */
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "sl-after-hide");
  }
  render() {
    return x`
      <div
        part="base"
        class=${e8({
      drawer: true,
      "drawer--open": this.open,
      "drawer--top": this.placement === "top",
      "drawer--end": this.placement === "end",
      "drawer--bottom": this.placement === "bottom",
      "drawer--start": this.placement === "start",
      "drawer--contained": this.contained,
      "drawer--fixed": !this.contained,
      "drawer--rtl": this.localize.dir() === "rtl",
      "drawer--has-footer": this.hasSlotController.test("footer")
    })}
      >
        <div part="overlay" class="drawer__overlay" @click=${() => this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${o6(this.noHeader ? this.label : void 0)}
          aria-labelledby=${o6(!this.noHeader ? "title" : void 0)}
          tabindex="0"
        >
          ${!this.noHeader ? x`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${() => this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              ` : ""}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }
};
SlDrawer.styles = [component_styles_default, drawer_styles_default];
SlDrawer.dependencies = { "sl-icon-button": SlIconButton };
__decorateClass([
  e5(".drawer")
], SlDrawer.prototype, "drawer", 2);
__decorateClass([
  e5(".drawer__panel")
], SlDrawer.prototype, "panel", 2);
__decorateClass([
  e5(".drawer__overlay")
], SlDrawer.prototype, "overlay", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlDrawer.prototype, "open", 2);
__decorateClass([
  n4({ reflect: true })
], SlDrawer.prototype, "label", 2);
__decorateClass([
  n4({ reflect: true })
], SlDrawer.prototype, "placement", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlDrawer.prototype, "contained", 2);
__decorateClass([
  n4({ attribute: "no-header", type: Boolean, reflect: true })
], SlDrawer.prototype, "noHeader", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], SlDrawer.prototype, "handleOpenChange", 1);
__decorateClass([
  watch("contained", { waitUntilFirstUpdate: true })
], SlDrawer.prototype, "handleNoModalChange", 1);
setDefaultAnimation("drawer.showTop", {
  keyframes: [
    { opacity: 0, translate: "0 -100%" },
    { opacity: 1, translate: "0 0" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.hideTop", {
  keyframes: [
    { opacity: 1, translate: "0 0" },
    { opacity: 0, translate: "0 -100%" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.showEnd", {
  keyframes: [
    { opacity: 0, translate: "100%" },
    { opacity: 1, translate: "0" }
  ],
  rtlKeyframes: [
    { opacity: 0, translate: "-100%" },
    { opacity: 1, translate: "0" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.hideEnd", {
  keyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "100%" }
  ],
  rtlKeyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "-100%" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.showBottom", {
  keyframes: [
    { opacity: 0, translate: "0 100%" },
    { opacity: 1, translate: "0 0" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.hideBottom", {
  keyframes: [
    { opacity: 1, translate: "0 0" },
    { opacity: 0, translate: "0 100%" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.showStart", {
  keyframes: [
    { opacity: 0, translate: "-100%" },
    { opacity: 1, translate: "0" }
  ],
  rtlKeyframes: [
    { opacity: 0, translate: "100%" },
    { opacity: 1, translate: "0" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.hideStart", {
  keyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "-100%" }
  ],
  rtlKeyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "100%" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.denyClose", {
  keyframes: [{ scale: 1 }, { scale: 1.01 }, { scale: 1 }],
  options: { duration: 250 }
});
setDefaultAnimation("drawer.overlay.show", {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 }
});
setDefaultAnimation("drawer.overlay.hide", {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 }
});

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WBVQZAI3.js
var React43 = __toESM(require_react(), 1);
var tagName43 = "sl-drawer";
SlDrawer.define("sl-drawer");
var reactWrapper43 = o7({
  tagName: tagName43,
  elementClass: SlDrawer,
  react: React43,
  events: {
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide",
    onSlInitialFocus: "sl-initial-focus",
    onSlRequestClose: "sl-request-close"
  },
  displayName: "SlDrawer"
});
var drawer_default = reactWrapper43;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LXP7GVU3.js
var dropdown_styles_default = i`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZXJUHGOS.js
var SlDropdown = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
    this.open = false;
    this.placement = "bottom-start";
    this.disabled = false;
    this.stayOpenOnSelect = false;
    this.distance = 0;
    this.skidding = 0;
    this.hoist = false;
    this.sync = void 0;
    this.handleKeyDown = (event) => {
      if (this.open && event.key === "Escape") {
        event.stopPropagation();
        this.hide();
        this.focusOnTrigger();
      }
    };
    this.handleDocumentKeyDown = (event) => {
      var _a;
      if (event.key === "Escape" && this.open && !this.closeWatcher) {
        event.stopPropagation();
        this.focusOnTrigger();
        this.hide();
        return;
      }
      if (event.key === "Tab") {
        if (this.open && ((_a = document.activeElement) == null ? void 0 : _a.tagName.toLowerCase()) === "sl-menu-item") {
          event.preventDefault();
          this.hide();
          this.focusOnTrigger();
          return;
        }
        setTimeout(() => {
          var _a2, _b, _c;
          const activeElement = ((_a2 = this.containingElement) == null ? void 0 : _a2.getRootNode()) instanceof ShadowRoot ? (_c = (_b = document.activeElement) == null ? void 0 : _b.shadowRoot) == null ? void 0 : _c.activeElement : document.activeElement;
          if (!this.containingElement || (activeElement == null ? void 0 : activeElement.closest(this.containingElement.tagName.toLowerCase())) !== this.containingElement) {
            this.hide();
          }
        });
      }
    };
    this.handleDocumentMouseDown = (event) => {
      const path = event.composedPath();
      if (this.containingElement && !path.includes(this.containingElement)) {
        this.hide();
      }
    };
    this.handlePanelSelect = (event) => {
      const target = event.target;
      if (!this.stayOpenOnSelect && target.tagName.toLowerCase() === "sl-menu") {
        this.hide();
        this.focusOnTrigger();
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.containingElement) {
      this.containingElement = this;
    }
  }
  firstUpdated() {
    this.panel.hidden = !this.open;
    if (this.open) {
      this.addOpenListeners();
      this.popup.active = true;
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeOpenListeners();
    this.hide();
  }
  focusOnTrigger() {
    const trigger = this.trigger.assignedElements({ flatten: true })[0];
    if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
      trigger.focus();
    }
  }
  getMenu() {
    return this.panel.assignedElements({ flatten: true }).find((el) => el.tagName.toLowerCase() === "sl-menu");
  }
  handleTriggerClick() {
    if (this.open) {
      this.hide();
    } else {
      this.show();
      this.focusOnTrigger();
    }
  }
  async handleTriggerKeyDown(event) {
    if ([" ", "Enter"].includes(event.key)) {
      event.preventDefault();
      this.handleTriggerClick();
      return;
    }
    const menu = this.getMenu();
    if (menu) {
      const menuItems = menu.getAllItems();
      const firstMenuItem = menuItems[0];
      const lastMenuItem = menuItems[menuItems.length - 1];
      if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        event.preventDefault();
        if (!this.open) {
          this.show();
          await this.updateComplete;
        }
        if (menuItems.length > 0) {
          this.updateComplete.then(() => {
            if (event.key === "ArrowDown" || event.key === "Home") {
              menu.setCurrentItem(firstMenuItem);
              firstMenuItem.focus();
            }
            if (event.key === "ArrowUp" || event.key === "End") {
              menu.setCurrentItem(lastMenuItem);
              lastMenuItem.focus();
            }
          });
        }
      }
    }
  }
  handleTriggerKeyUp(event) {
    if (event.key === " ") {
      event.preventDefault();
    }
  }
  handleTriggerSlotChange() {
    this.updateAccessibleTrigger();
  }
  //
  // Slotted triggers can be arbitrary content, but we need to link them to the dropdown panel with `aria-haspopup` and
  // `aria-expanded`. These must be applied to the "accessible trigger" (the tabbable portion of the trigger element
  // that gets slotted in) so screen readers will understand them. The accessible trigger could be the slotted element,
  // a child of the slotted element, or an element in the slotted element's shadow root.
  //
  // For example, the accessible trigger of an <sl-button> is a <button> located inside its shadow root.
  //
  // To determine this, we assume the first tabbable element in the trigger slot is the "accessible trigger."
  //
  updateAccessibleTrigger() {
    const assignedElements = this.trigger.assignedElements({ flatten: true });
    const accessibleTrigger = assignedElements.find((el) => getTabbableBoundary(el).start);
    let target;
    if (accessibleTrigger) {
      switch (accessibleTrigger.tagName.toLowerCase()) {
        case "sl-button":
        case "sl-icon-button":
          target = accessibleTrigger.button;
          break;
        default:
          target = accessibleTrigger;
      }
      target.setAttribute("aria-haspopup", "true");
      target.setAttribute("aria-expanded", this.open ? "true" : "false");
    }
  }
  /** Shows the dropdown panel. */
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "sl-after-show");
  }
  /** Hides the dropdown panel */
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "sl-after-hide");
  }
  /**
   * Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
   * is activated.
   */
  reposition() {
    this.popup.reposition();
  }
  addOpenListeners() {
    var _a;
    this.panel.addEventListener("sl-select", this.handlePanelSelect);
    if ("CloseWatcher" in window) {
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
      this.closeWatcher = new CloseWatcher();
      this.closeWatcher.onclose = () => {
        this.hide();
        this.focusOnTrigger();
      };
    } else {
      this.panel.addEventListener("keydown", this.handleKeyDown);
    }
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
  }
  removeOpenListeners() {
    var _a;
    if (this.panel) {
      this.panel.removeEventListener("sl-select", this.handlePanelSelect);
      this.panel.removeEventListener("keydown", this.handleKeyDown);
    }
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
    (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
  }
  async handleOpenChange() {
    if (this.disabled) {
      this.open = false;
      return;
    }
    this.updateAccessibleTrigger();
    if (this.open) {
      this.emit("sl-show");
      this.addOpenListeners();
      await stopAnimations(this);
      this.panel.hidden = false;
      this.popup.active = true;
      const { keyframes, options } = getAnimation(this, "dropdown.show", { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.emit("sl-after-show");
    } else {
      this.emit("sl-hide");
      this.removeOpenListeners();
      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, "dropdown.hide", { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.panel.hidden = true;
      this.popup.active = false;
      this.emit("sl-after-hide");
    }
  }
  render() {
    return x`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${o6(this.sync ? this.sync : void 0)}
        class=${e8({
      dropdown: true,
      "dropdown--open": this.open
    })}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open ? "false" : "true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `;
  }
};
SlDropdown.styles = [component_styles_default, dropdown_styles_default];
SlDropdown.dependencies = { "sl-popup": SlPopup };
__decorateClass([
  e5(".dropdown")
], SlDropdown.prototype, "popup", 2);
__decorateClass([
  e5(".dropdown__trigger")
], SlDropdown.prototype, "trigger", 2);
__decorateClass([
  e5(".dropdown__panel")
], SlDropdown.prototype, "panel", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlDropdown.prototype, "open", 2);
__decorateClass([
  n4({ reflect: true })
], SlDropdown.prototype, "placement", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlDropdown.prototype, "disabled", 2);
__decorateClass([
  n4({ attribute: "stay-open-on-select", type: Boolean, reflect: true })
], SlDropdown.prototype, "stayOpenOnSelect", 2);
__decorateClass([
  n4({ attribute: false })
], SlDropdown.prototype, "containingElement", 2);
__decorateClass([
  n4({ type: Number })
], SlDropdown.prototype, "distance", 2);
__decorateClass([
  n4({ type: Number })
], SlDropdown.prototype, "skidding", 2);
__decorateClass([
  n4({ type: Boolean })
], SlDropdown.prototype, "hoist", 2);
__decorateClass([
  n4({ reflect: true })
], SlDropdown.prototype, "sync", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], SlDropdown.prototype, "handleOpenChange", 1);
setDefaultAnimation("dropdown.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
setDefaultAnimation("dropdown.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6AW2CCEU.js
var React44 = __toESM(require_react(), 1);
var tagName44 = "sl-dropdown";
SlDropdown.define("sl-dropdown");
var reactWrapper44 = o7({
  tagName: tagName44,
  elementClass: SlDropdown,
  react: React44,
  events: {
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide"
  },
  displayName: "SlDropdown"
});
var dropdown_default = reactWrapper44;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LPYYKKL4.js
var SlFormatBytes = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
    this.value = 0;
    this.unit = "byte";
    this.display = "short";
  }
  render() {
    if (isNaN(this.value)) {
      return "";
    }
    const bitPrefixes = ["", "kilo", "mega", "giga", "tera"];
    const bytePrefixes = ["", "kilo", "mega", "giga", "tera", "peta"];
    const prefix = this.unit === "bit" ? bitPrefixes : bytePrefixes;
    const index = Math.max(0, Math.min(Math.floor(Math.log10(this.value) / 3), prefix.length - 1));
    const unit = prefix[index] + this.unit;
    const valueToFormat = parseFloat((this.value / Math.pow(1e3, index)).toPrecision(3));
    return this.localize.number(valueToFormat, {
      style: "unit",
      unit,
      unitDisplay: this.display
    });
  }
};
__decorateClass([
  n4({ type: Number })
], SlFormatBytes.prototype, "value", 2);
__decorateClass([
  n4()
], SlFormatBytes.prototype, "unit", 2);
__decorateClass([
  n4()
], SlFormatBytes.prototype, "display", 2);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.H4HCTAG5.js
var React45 = __toESM(require_react(), 1);
var tagName45 = "sl-format-bytes";
SlFormatBytes.define("sl-format-bytes");
var reactWrapper45 = o7({
  tagName: tagName45,
  elementClass: SlFormatBytes,
  react: React45,
  events: {},
  displayName: "SlFormatBytes"
});
var format_bytes_default = reactWrapper45;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WQC6OWUE.js
var badge_styles_default = i`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KJ4WE367.js
var SlBadge = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.variant = "primary";
    this.pill = false;
    this.pulse = false;
  }
  render() {
    return x`
      <span
        part="base"
        class=${e8({
      badge: true,
      "badge--primary": this.variant === "primary",
      "badge--success": this.variant === "success",
      "badge--neutral": this.variant === "neutral",
      "badge--warning": this.variant === "warning",
      "badge--danger": this.variant === "danger",
      "badge--pill": this.pill,
      "badge--pulse": this.pulse
    })}
        role="status"
      >
        <slot></slot>
      </span>
    `;
  }
};
SlBadge.styles = [component_styles_default, badge_styles_default];
__decorateClass([
  n4({ reflect: true })
], SlBadge.prototype, "variant", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlBadge.prototype, "pill", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlBadge.prototype, "pulse", 2);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.E54LGXUL.js
var React46 = __toESM(require_react(), 1);
var tagName46 = "sl-badge";
SlBadge.define("sl-badge");
var reactWrapper46 = o7({
  tagName: tagName46,
  elementClass: SlBadge,
  react: React46,
  events: {},
  displayName: "SlBadge"
});
var badge_default = reactWrapper46;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.Q5P7Y2HU.js
var breadcrumb_item_styles_default = i`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XJRALKVM.js
var SlBreadcrumbItem = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "prefix", "suffix");
    this.rel = "noreferrer noopener";
  }
  render() {
    const isLink = this.href ? true : false;
    return x`
      <div
        part="base"
        class=${e8({
      "breadcrumb-item": true,
      "breadcrumb-item--has-prefix": this.hasSlotController.test("prefix"),
      "breadcrumb-item--has-suffix": this.hasSlotController.test("suffix")
    })}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${isLink ? x`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${o6(this.target ? this.target : void 0)}"
                rel=${o6(this.target ? this.rel : void 0)}
              >
                <slot></slot>
              </a>
            ` : x`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `;
  }
};
SlBreadcrumbItem.styles = [component_styles_default, breadcrumb_item_styles_default];
__decorateClass([
  n4()
], SlBreadcrumbItem.prototype, "href", 2);
__decorateClass([
  n4()
], SlBreadcrumbItem.prototype, "target", 2);
__decorateClass([
  n4()
], SlBreadcrumbItem.prototype, "rel", 2);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WEXIZO23.js
var React47 = __toESM(require_react(), 1);
var tagName47 = "sl-breadcrumb-item";
SlBreadcrumbItem.define("sl-breadcrumb-item");
var reactWrapper47 = o7({
  tagName: tagName47,
  elementClass: SlBreadcrumbItem,
  react: React47,
  events: {},
  displayName: "SlBreadcrumbItem"
});
var breadcrumb_item_default = reactWrapper47;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MR6SHCJO.js
var SlButton = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      assumeInteractionOn: ["click"]
    });
    this.hasSlotController = new HasSlotController(this, "[default]", "prefix", "suffix");
    this.localize = new LocalizeController2(this);
    this.hasFocus = false;
    this.invalid = false;
    this.title = "";
    this.variant = "default";
    this.size = "medium";
    this.caret = false;
    this.disabled = false;
    this.loading = false;
    this.outline = false;
    this.pill = false;
    this.circle = false;
    this.type = "button";
    this.name = "";
    this.value = "";
    this.href = "";
    this.rel = "noreferrer noopener";
  }
  /** Gets the validity state object */
  get validity() {
    if (this.isButton()) {
      return this.button.validity;
    }
    return validValidityState;
  }
  /** Gets the validation message */
  get validationMessage() {
    if (this.isButton()) {
      return this.button.validationMessage;
    }
    return "";
  }
  firstUpdated() {
    if (this.isButton()) {
      this.formControlController.updateValidity();
    }
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("sl-blur");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("sl-focus");
  }
  handleClick() {
    if (this.type === "submit") {
      this.formControlController.submit(this);
    }
    if (this.type === "reset") {
      this.formControlController.reset(this);
    }
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  isButton() {
    return this.href ? false : true;
  }
  isLink() {
    return this.href ? true : false;
  }
  handleDisabledChange() {
    if (this.isButton()) {
      this.formControlController.setValidity(this.disabled);
    }
  }
  /** Simulates a click on the button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the button. */
  focus(options) {
    this.button.focus(options);
  }
  /** Removes focus from the button. */
  blur() {
    this.button.blur();
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    if (this.isButton()) {
      return this.button.checkValidity();
    }
    return true;
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    if (this.isButton()) {
      return this.button.reportValidity();
    }
    return true;
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    if (this.isButton()) {
      this.button.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
  }
  render() {
    const isLink = this.isLink();
    const tag = isLink ? s4`a` : s4`button`;
    return n5`
      <${tag}
        part="base"
        class=${e8({
      button: true,
      "button--default": this.variant === "default",
      "button--primary": this.variant === "primary",
      "button--success": this.variant === "success",
      "button--neutral": this.variant === "neutral",
      "button--warning": this.variant === "warning",
      "button--danger": this.variant === "danger",
      "button--text": this.variant === "text",
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--caret": this.caret,
      "button--circle": this.circle,
      "button--disabled": this.disabled,
      "button--focused": this.hasFocus,
      "button--loading": this.loading,
      "button--standard": !this.outline,
      "button--outline": this.outline,
      "button--pill": this.pill,
      "button--rtl": this.localize.dir() === "rtl",
      "button--has-label": this.hasSlotController.test("[default]"),
      "button--has-prefix": this.hasSlotController.test("prefix"),
      "button--has-suffix": this.hasSlotController.test("suffix")
    })}
        ?disabled=${o6(isLink ? void 0 : this.disabled)}
        type=${o6(isLink ? void 0 : this.type)}
        title=${this.title}
        name=${o6(isLink ? void 0 : this.name)}
        value=${o6(isLink ? void 0 : this.value)}
        href=${o6(isLink ? this.href : void 0)}
        target=${o6(isLink ? this.target : void 0)}
        download=${o6(isLink ? this.download : void 0)}
        rel=${o6(isLink ? this.rel : void 0)}
        role=${o6(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret ? n5` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> ` : ""}
        ${this.loading ? n5`<sl-spinner part="spinner"></sl-spinner>` : ""}
      </${tag}>
    `;
  }
};
SlButton.styles = [component_styles_default, button_styles_default];
SlButton.dependencies = {
  "sl-icon": SlIcon,
  "sl-spinner": SlSpinner
};
__decorateClass([
  e5(".button")
], SlButton.prototype, "button", 2);
__decorateClass([
  r6()
], SlButton.prototype, "hasFocus", 2);
__decorateClass([
  r6()
], SlButton.prototype, "invalid", 2);
__decorateClass([
  n4()
], SlButton.prototype, "title", 2);
__decorateClass([
  n4({ reflect: true })
], SlButton.prototype, "variant", 2);
__decorateClass([
  n4({ reflect: true })
], SlButton.prototype, "size", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlButton.prototype, "caret", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlButton.prototype, "disabled", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlButton.prototype, "loading", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlButton.prototype, "outline", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlButton.prototype, "pill", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlButton.prototype, "circle", 2);
__decorateClass([
  n4()
], SlButton.prototype, "type", 2);
__decorateClass([
  n4()
], SlButton.prototype, "name", 2);
__decorateClass([
  n4()
], SlButton.prototype, "value", 2);
__decorateClass([
  n4()
], SlButton.prototype, "href", 2);
__decorateClass([
  n4()
], SlButton.prototype, "target", 2);
__decorateClass([
  n4()
], SlButton.prototype, "rel", 2);
__decorateClass([
  n4()
], SlButton.prototype, "download", 2);
__decorateClass([
  n4()
], SlButton.prototype, "form", 2);
__decorateClass([
  n4({ attribute: "formaction" })
], SlButton.prototype, "formAction", 2);
__decorateClass([
  n4({ attribute: "formenctype" })
], SlButton.prototype, "formEnctype", 2);
__decorateClass([
  n4({ attribute: "formmethod" })
], SlButton.prototype, "formMethod", 2);
__decorateClass([
  n4({ attribute: "formnovalidate", type: Boolean })
], SlButton.prototype, "formNoValidate", 2);
__decorateClass([
  n4({ attribute: "formtarget" })
], SlButton.prototype, "formTarget", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlButton.prototype, "handleDisabledChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7PHS7DDE.js
var React48 = __toESM(require_react(), 1);
var tagName48 = "sl-button";
SlButton.define("sl-button");
var reactWrapper48 = o7({
  tagName: tagName48,
  elementClass: SlButton,
  react: React48,
  events: {
    onSlBlur: "sl-blur",
    onSlFocus: "sl-focus",
    onSlInvalid: "sl-invalid"
  },
  displayName: "SlButton"
});
var button_default = reactWrapper48;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4PKXGJ3M.js
var React49 = __toESM(require_react(), 1);
var tagName49 = "sl-button-group";
SlButtonGroup.define("sl-button-group");
var reactWrapper49 = o7({
  tagName: tagName49,
  elementClass: SlButtonGroup,
  react: React49,
  events: {},
  displayName: "SlButtonGroup"
});
var button_group_default = reactWrapper49;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.A5D6FTFY.js
var card_styles_default = i`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MHT6RQYX.js
var SlCard = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "footer", "header", "image");
  }
  render() {
    return x`
      <div
        part="base"
        class=${e8({
      card: true,
      "card--has-footer": this.hasSlotController.test("footer"),
      "card--has-image": this.hasSlotController.test("image"),
      "card--has-header": this.hasSlotController.test("header")
    })}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `;
  }
};
SlCard.styles = [component_styles_default, card_styles_default];

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2AYMCIST.js
var React50 = __toESM(require_react(), 1);
var tagName50 = "sl-card";
SlCard.define("sl-card");
var reactWrapper50 = o7({
  tagName: tagName50,
  elementClass: SlCard,
  react: React50,
  events: {},
  displayName: "SlCard"
});
var card_default = reactWrapper50;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NQ44LUGM.js
var carousel_item_styles_default = i`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZSQZTC74.js
var SlCarouselItem = class extends ShoelaceElement {
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "group");
  }
  render() {
    return x` <slot></slot> `;
  }
};
SlCarouselItem.styles = [component_styles_default, carousel_item_styles_default];

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7N6N3ZB.js
var React51 = __toESM(require_react(), 1);
var tagName51 = "sl-carousel-item";
SlCarouselItem.define("sl-carousel-item");
var reactWrapper51 = o7({
  tagName: tagName51,
  elementClass: SlCarouselItem,
  react: React51,
  events: {},
  displayName: "SlCarouselItem"
});
var carousel_item_default = reactWrapper51;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.F4VGSDIW.js
var AutoplayController = class {
  constructor(host, tickCallback) {
    this.timerId = 0;
    this.activeInteractions = 0;
    this.paused = false;
    this.stopped = true;
    this.pause = () => {
      if (!this.activeInteractions++) {
        this.paused = true;
        this.host.requestUpdate();
      }
    };
    this.resume = () => {
      if (!--this.activeInteractions) {
        this.paused = false;
        this.host.requestUpdate();
      }
    };
    host.addController(this);
    this.host = host;
    this.tickCallback = tickCallback;
  }
  hostConnected() {
    this.host.addEventListener("mouseenter", this.pause);
    this.host.addEventListener("mouseleave", this.resume);
    this.host.addEventListener("focusin", this.pause);
    this.host.addEventListener("focusout", this.resume);
    this.host.addEventListener("touchstart", this.pause, { passive: true });
    this.host.addEventListener("touchend", this.resume);
  }
  hostDisconnected() {
    this.stop();
    this.host.removeEventListener("mouseenter", this.pause);
    this.host.removeEventListener("mouseleave", this.resume);
    this.host.removeEventListener("focusin", this.pause);
    this.host.removeEventListener("focusout", this.resume);
    this.host.removeEventListener("touchstart", this.pause);
    this.host.removeEventListener("touchend", this.resume);
  }
  start(interval) {
    this.stop();
    this.stopped = false;
    this.timerId = window.setInterval(() => {
      if (!this.paused) {
        this.tickCallback();
      }
    }, interval);
  }
  stop() {
    clearInterval(this.timerId);
    this.stopped = true;
    this.host.requestUpdate();
  }
};

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BMOWACWC.js
var carousel_styles_default = i`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;

// node_modules/lit-html/directives/map.js
function* o13(o15, f5) {
  if (void 0 !== o15) {
    let i6 = 0;
    for (const t8 of o15)
      yield f5(t8, i6++);
  }
}

// node_modules/lit-html/directives/range.js
function* o14(o15, t8, e13 = 1) {
  const i6 = void 0 === t8 ? 0 : o15;
  t8 ??= o15;
  for (let o16 = i6; e13 > 0 ? o16 < t8 : t8 < o16; o16 += e13)
    yield o16;
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6MN22UMF.js
var debounce = (fn, delay) => {
  let timerId = 0;
  return function(...args) {
    window.clearTimeout(timerId);
    timerId = window.setTimeout(() => {
      fn.call(this, ...args);
    }, delay);
  };
};
var decorate = (proto, method, decorateFn) => {
  const superFn = proto[method];
  proto[method] = function(...args) {
    superFn.call(this, ...args);
    decorateFn.call(this, superFn, ...args);
  };
};
var isSupported = "onscrollend" in window;
if (!isSupported) {
  const pointers = /* @__PURE__ */ new Set();
  const scrollHandlers = /* @__PURE__ */ new WeakMap();
  const handlePointerDown = (event) => {
    for (const touch of event.changedTouches) {
      pointers.add(touch.identifier);
    }
  };
  const handlePointerUp = (event) => {
    for (const touch of event.changedTouches) {
      pointers.delete(touch.identifier);
    }
  };
  document.addEventListener("touchstart", handlePointerDown, true);
  document.addEventListener("touchend", handlePointerUp, true);
  document.addEventListener("touchcancel", handlePointerUp, true);
  decorate(EventTarget.prototype, "addEventListener", function(addEventListener, type) {
    if (type !== "scrollend")
      return;
    const handleScrollEnd = debounce(() => {
      if (!pointers.size) {
        this.dispatchEvent(new Event("scrollend"));
      } else {
        handleScrollEnd();
      }
    }, 100);
    addEventListener.call(this, "scroll", handleScrollEnd, { passive: true });
    scrollHandlers.set(this, handleScrollEnd);
  });
  decorate(EventTarget.prototype, "removeEventListener", function(removeEventListener, type) {
    if (type !== "scrollend")
      return;
    const scrollHandler = scrollHandlers.get(this);
    if (scrollHandler) {
      removeEventListener.call(this, "scroll", scrollHandler, { passive: true });
    }
  });
}
var SlCarousel = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.loop = false;
    this.navigation = false;
    this.pagination = false;
    this.autoplay = false;
    this.autoplayInterval = 3e3;
    this.slidesPerPage = 1;
    this.slidesPerMove = 1;
    this.orientation = "horizontal";
    this.mouseDragging = false;
    this.activeSlide = 0;
    this.scrolling = false;
    this.dragging = false;
    this.autoplayController = new AutoplayController(this, () => this.next());
    this.localize = new LocalizeController2(this);
    this.handleMouseDrag = (event) => {
      if (!this.dragging) {
        this.scrollContainer.style.setProperty("scroll-snap-type", "none");
        this.dragging = true;
      }
      this.scrollContainer.scrollBy({
        left: -event.movementX,
        top: -event.movementY,
        behavior: "instant"
      });
    };
    this.handleMouseDragEnd = () => {
      const scrollContainer = this.scrollContainer;
      document.removeEventListener("pointermove", this.handleMouseDrag, { capture: true });
      const startLeft = scrollContainer.scrollLeft;
      const startTop = scrollContainer.scrollTop;
      scrollContainer.style.removeProperty("scroll-snap-type");
      scrollContainer.style.setProperty("overflow", "hidden");
      const finalLeft = scrollContainer.scrollLeft;
      const finalTop = scrollContainer.scrollTop;
      scrollContainer.style.removeProperty("overflow");
      scrollContainer.style.setProperty("scroll-snap-type", "none");
      scrollContainer.scrollTo({ left: startLeft, top: startTop, behavior: "instant" });
      requestAnimationFrame(async () => {
        if (startLeft !== finalLeft || startTop !== finalTop) {
          scrollContainer.scrollTo({
            left: finalLeft,
            top: finalTop,
            behavior: prefersReducedMotion() ? "auto" : "smooth"
          });
          await waitForEvent(scrollContainer, "scrollend");
        }
        scrollContainer.style.removeProperty("scroll-snap-type");
        this.dragging = false;
        this.handleScrollEnd();
      });
    };
    this.handleSlotChange = (mutations) => {
      const needsInitialization = mutations.some(
        (mutation) => [...mutation.addedNodes, ...mutation.removedNodes].some(
          (el) => this.isCarouselItem(el) && !el.hasAttribute("data-clone")
        )
      );
      if (needsInitialization) {
        this.initializeSlides();
      }
      this.requestUpdate();
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "region");
    this.setAttribute("aria-label", this.localize.term("carousel"));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.mutationObserver.disconnect();
  }
  firstUpdated() {
    this.initializeSlides();
    this.mutationObserver = new MutationObserver(this.handleSlotChange);
    this.mutationObserver.observe(this, {
      childList: true,
      subtree: true
    });
  }
  willUpdate(changedProperties) {
    if (changedProperties.has("slidesPerMove") || changedProperties.has("slidesPerPage")) {
      this.slidesPerMove = Math.min(this.slidesPerMove, this.slidesPerPage);
    }
  }
  getPageCount() {
    const slidesCount = this.getSlides().length;
    const { slidesPerPage, slidesPerMove, loop } = this;
    const pages = loop ? slidesCount / slidesPerMove : (slidesCount - slidesPerPage) / slidesPerMove + 1;
    return Math.ceil(pages);
  }
  getCurrentPage() {
    return Math.ceil(this.activeSlide / this.slidesPerMove);
  }
  canScrollNext() {
    return this.loop || this.getCurrentPage() < this.getPageCount() - 1;
  }
  canScrollPrev() {
    return this.loop || this.getCurrentPage() > 0;
  }
  /** @internal Gets all carousel items. */
  getSlides({ excludeClones = true } = {}) {
    return [...this.children].filter(
      (el) => this.isCarouselItem(el) && (!excludeClones || !el.hasAttribute("data-clone"))
    );
  }
  handleKeyDown(event) {
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      const target = event.target;
      const isRtl = this.matches(":dir(rtl)");
      const isFocusInPagination = target.closest('[part~="pagination-item"]') !== null;
      const isNext = event.key === "ArrowDown" || !isRtl && event.key === "ArrowRight" || isRtl && event.key === "ArrowLeft";
      const isPrevious = event.key === "ArrowUp" || !isRtl && event.key === "ArrowLeft" || isRtl && event.key === "ArrowRight";
      event.preventDefault();
      if (isPrevious) {
        this.previous();
      }
      if (isNext) {
        this.next();
      }
      if (event.key === "Home") {
        this.goToSlide(0);
      }
      if (event.key === "End") {
        this.goToSlide(this.getSlides().length - 1);
      }
      if (isFocusInPagination) {
        this.updateComplete.then(() => {
          var _a;
          const activePaginationItem = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(
            '[part~="pagination-item--active"]'
          );
          if (activePaginationItem) {
            activePaginationItem.focus();
          }
        });
      }
    }
  }
  handleMouseDragStart(event) {
    const canDrag = this.mouseDragging && event.button === 0;
    if (canDrag) {
      event.preventDefault();
      document.addEventListener("pointermove", this.handleMouseDrag, { capture: true, passive: true });
      document.addEventListener("pointerup", this.handleMouseDragEnd, { capture: true, once: true });
    }
  }
  handleScroll() {
    this.scrolling = true;
  }
  /** @internal Synchronizes the slides with the IntersectionObserver API. */
  synchronizeSlides() {
    const io = new IntersectionObserver(
      (entries) => {
        io.disconnect();
        for (const entry of entries) {
          const slide = entry.target;
          slide.toggleAttribute("inert", !entry.isIntersecting);
          slide.classList.toggle("--in-view", entry.isIntersecting);
          slide.setAttribute("aria-hidden", entry.isIntersecting ? "false" : "true");
        }
        const firstIntersecting = entries.find((entry) => entry.isIntersecting);
        if (firstIntersecting) {
          if (this.loop && firstIntersecting.target.hasAttribute("data-clone")) {
            const clonePosition = Number(firstIntersecting.target.getAttribute("data-clone"));
            this.goToSlide(clonePosition, "instant");
          } else {
            const slides = this.getSlides();
            const slideIndex = slides.indexOf(firstIntersecting.target);
            this.activeSlide = Math.ceil(slideIndex / this.slidesPerMove) * this.slidesPerMove;
          }
        }
      },
      {
        root: this.scrollContainer,
        threshold: 0.6
      }
    );
    this.getSlides({ excludeClones: false }).forEach((slide) => {
      io.observe(slide);
    });
  }
  handleScrollEnd() {
    if (!this.scrolling || this.dragging)
      return;
    this.synchronizeSlides();
    this.scrolling = false;
  }
  isCarouselItem(node) {
    return node instanceof Element && node.tagName.toLowerCase() === "sl-carousel-item";
  }
  initializeSlides() {
    this.getSlides({ excludeClones: false }).forEach((slide, index) => {
      slide.classList.remove("--in-view");
      slide.classList.remove("--is-active");
      slide.setAttribute("aria-label", this.localize.term("slideNum", index + 1));
      if (slide.hasAttribute("data-clone")) {
        slide.remove();
      }
    });
    this.updateSlidesSnap();
    if (this.loop) {
      this.createClones();
    }
    this.synchronizeSlides();
    this.goToSlide(this.activeSlide, "auto");
  }
  createClones() {
    const slides = this.getSlides();
    const slidesPerPage = this.slidesPerPage;
    const lastSlides = slides.slice(-slidesPerPage);
    const firstSlides = slides.slice(0, slidesPerPage);
    lastSlides.reverse().forEach((slide, i6) => {
      const clone = slide.cloneNode(true);
      clone.setAttribute("data-clone", String(slides.length - i6 - 1));
      this.prepend(clone);
    });
    firstSlides.forEach((slide, i6) => {
      const clone = slide.cloneNode(true);
      clone.setAttribute("data-clone", String(i6));
      this.append(clone);
    });
  }
  handelSlideChange() {
    const slides = this.getSlides();
    slides.forEach((slide, i6) => {
      slide.classList.toggle("--is-active", i6 === this.activeSlide);
    });
    if (this.hasUpdated) {
      this.emit("sl-slide-change", {
        detail: {
          index: this.activeSlide,
          slide: slides[this.activeSlide]
        }
      });
    }
  }
  updateSlidesSnap() {
    const slides = this.getSlides();
    const slidesPerMove = this.slidesPerMove;
    slides.forEach((slide, i6) => {
      const shouldSnap = (i6 + slidesPerMove) % slidesPerMove === 0;
      if (shouldSnap) {
        slide.style.removeProperty("scroll-snap-align");
      } else {
        slide.style.setProperty("scroll-snap-align", "none");
      }
    });
  }
  handleAutoplayChange() {
    this.autoplayController.stop();
    if (this.autoplay) {
      this.autoplayController.start(this.autoplayInterval);
    }
  }
  /**
   * Move the carousel backward by `slides-per-move` slides.
   *
   * @param behavior - The behavior used for scrolling.
   */
  previous(behavior = "smooth") {
    this.goToSlide(this.activeSlide - this.slidesPerMove, behavior);
  }
  /**
   * Move the carousel forward by `slides-per-move` slides.
   *
   * @param behavior - The behavior used for scrolling.
   */
  next(behavior = "smooth") {
    this.goToSlide(this.activeSlide + this.slidesPerMove, behavior);
  }
  /**
   * Scrolls the carousel to the slide specified by `index`.
   *
   * @param index - The slide index.
   * @param behavior - The behavior used for scrolling.
   */
  goToSlide(index, behavior = "smooth") {
    const { slidesPerPage, loop } = this;
    const slides = this.getSlides();
    const slidesWithClones = this.getSlides({ excludeClones: false });
    if (!slides.length) {
      return;
    }
    const newActiveSlide = loop ? (index + slides.length) % slides.length : clamp2(index, 0, slides.length - 1);
    this.activeSlide = newActiveSlide;
    const nextSlideIndex = clamp2(index + (loop ? slidesPerPage : 0), 0, slidesWithClones.length - 1);
    const nextSlide = slidesWithClones[nextSlideIndex];
    this.scrollToSlide(nextSlide, prefersReducedMotion() ? "auto" : behavior);
  }
  scrollToSlide(slide, behavior = "smooth") {
    const scrollContainer = this.scrollContainer;
    const scrollContainerRect = scrollContainer.getBoundingClientRect();
    const nextSlideRect = slide.getBoundingClientRect();
    const nextLeft = nextSlideRect.left - scrollContainerRect.left;
    const nextTop = nextSlideRect.top - scrollContainerRect.top;
    scrollContainer.scrollTo({
      left: nextLeft + scrollContainer.scrollLeft,
      top: nextTop + scrollContainer.scrollTop,
      behavior
    });
  }
  render() {
    const { slidesPerMove, scrolling } = this;
    const pagesCount = this.getPageCount();
    const currentPage = this.getCurrentPage();
    const prevEnabled = this.canScrollPrev();
    const nextEnabled = this.canScrollNext();
    const isLtr = this.matches(":dir(ltr)");
    return x`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${e8({
      carousel__slides: true,
      "carousel__slides--horizontal": this.orientation === "horizontal",
      "carousel__slides--vertical": this.orientation === "vertical",
      "carousel__slides--dragging": this.dragging
    })}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${scrolling ? "true" : "false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation ? x`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${e8({
      "carousel__navigation-button": true,
      "carousel__navigation-button--previous": true,
      "carousel__navigation-button--disabled": !prevEnabled
    })}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${prevEnabled ? "false" : "true"}"
                  @click=${prevEnabled ? () => this.previous() : null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${isLtr ? "chevron-left" : "chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${e8({
      "carousel__navigation-button": true,
      "carousel__navigation-button--next": true,
      "carousel__navigation-button--disabled": !nextEnabled
    })}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${nextEnabled ? "false" : "true"}"
                  @click=${nextEnabled ? () => this.next() : null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${isLtr ? "chevron-right" : "chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            ` : ""}
        ${this.pagination ? x`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${o13(o14(pagesCount), (index) => {
      const isActive = index === currentPage;
      return x`
                    <button
                      part="pagination-item ${isActive ? "pagination-item--active" : ""}"
                      class="${e8({
        "carousel__pagination-item": true,
        "carousel__pagination-item--active": isActive
      })}"
                      role="tab"
                      aria-selected="${isActive ? "true" : "false"}"
                      aria-label="${this.localize.term("goToSlide", index + 1, pagesCount)}"
                      tabindex=${isActive ? "0" : "-1"}
                      @click=${() => this.goToSlide(index * slidesPerMove)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `;
    })}
              </div>
            ` : ""}
      </div>
    `;
  }
};
SlCarousel.styles = [component_styles_default, carousel_styles_default];
SlCarousel.dependencies = { "sl-icon": SlIcon };
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlCarousel.prototype, "loop", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlCarousel.prototype, "navigation", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlCarousel.prototype, "pagination", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlCarousel.prototype, "autoplay", 2);
__decorateClass([
  n4({ type: Number, attribute: "autoplay-interval" })
], SlCarousel.prototype, "autoplayInterval", 2);
__decorateClass([
  n4({ type: Number, attribute: "slides-per-page" })
], SlCarousel.prototype, "slidesPerPage", 2);
__decorateClass([
  n4({ type: Number, attribute: "slides-per-move" })
], SlCarousel.prototype, "slidesPerMove", 2);
__decorateClass([
  n4()
], SlCarousel.prototype, "orientation", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true, attribute: "mouse-dragging" })
], SlCarousel.prototype, "mouseDragging", 2);
__decorateClass([
  e5(".carousel__slides")
], SlCarousel.prototype, "scrollContainer", 2);
__decorateClass([
  e5(".carousel__pagination")
], SlCarousel.prototype, "paginationContainer", 2);
__decorateClass([
  r6()
], SlCarousel.prototype, "activeSlide", 2);
__decorateClass([
  r6()
], SlCarousel.prototype, "scrolling", 2);
__decorateClass([
  r6()
], SlCarousel.prototype, "dragging", 2);
__decorateClass([
  t3({ passive: true })
], SlCarousel.prototype, "handleScroll", 1);
__decorateClass([
  watch("loop", { waitUntilFirstUpdate: true }),
  watch("slidesPerPage", { waitUntilFirstUpdate: true })
], SlCarousel.prototype, "initializeSlides", 1);
__decorateClass([
  watch("activeSlide")
], SlCarousel.prototype, "handelSlideChange", 1);
__decorateClass([
  watch("slidesPerMove")
], SlCarousel.prototype, "updateSlidesSnap", 1);
__decorateClass([
  watch("autoplay")
], SlCarousel.prototype, "handleAutoplayChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.FAYIPQQS.js
var React52 = __toESM(require_react(), 1);
var tagName52 = "sl-carousel";
SlCarousel.define("sl-carousel");
var reactWrapper52 = o7({
  tagName: tagName52,
  elementClass: SlCarousel,
  react: React52,
  events: {
    onSlSlideChange: "sl-slide-change"
  },
  displayName: "SlCarousel"
});
var carousel_default = reactWrapper52;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.O6CEROC7.js
var color_picker_styles_default = i`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// node_modules/@ctrl/tinycolor/dist/module/util.js
function bound01(n11, max2) {
  if (isOnePointZero(n11)) {
    n11 = "100%";
  }
  const isPercent = isPercentage(n11);
  n11 = max2 === 360 ? n11 : Math.min(max2, Math.max(0, parseFloat(n11)));
  if (isPercent) {
    n11 = parseInt(String(n11 * max2), 10) / 100;
  }
  if (Math.abs(n11 - max2) < 1e-6) {
    return 1;
  }
  if (max2 === 360) {
    n11 = (n11 < 0 ? n11 % max2 + max2 : n11 % max2) / parseFloat(String(max2));
  } else {
    n11 = n11 % max2 / parseFloat(String(max2));
  }
  return n11;
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n11) {
  return typeof n11 === "string" && n11.indexOf(".") !== -1 && parseFloat(n11) === 1;
}
function isPercentage(n11) {
  return typeof n11 === "string" && n11.indexOf("%") !== -1;
}
function boundAlpha(a4) {
  a4 = parseFloat(a4);
  if (isNaN(a4) || a4 < 0 || a4 > 1) {
    a4 = 1;
  }
  return a4;
}
function convertToPercentage(n11) {
  if (Number(n11) <= 1) {
    return `${Number(n11) * 100}%`;
  }
  return n11;
}
function pad2(c5) {
  return c5.length === 1 ? "0" + c5 : String(c5);
}

// node_modules/@ctrl/tinycolor/dist/module/conversion.js
function rgbToRgb(r10, g2, b3) {
  return {
    r: bound01(r10, 255) * 255,
    g: bound01(g2, 255) * 255,
    b: bound01(b3, 255) * 255
  };
}
function rgbToHsl(r10, g2, b3) {
  r10 = bound01(r10, 255);
  g2 = bound01(g2, 255);
  b3 = bound01(b3, 255);
  const max2 = Math.max(r10, g2, b3);
  const min2 = Math.min(r10, g2, b3);
  let h5 = 0;
  let s6 = 0;
  const l5 = (max2 + min2) / 2;
  if (max2 === min2) {
    s6 = 0;
    h5 = 0;
  } else {
    const d3 = max2 - min2;
    s6 = l5 > 0.5 ? d3 / (2 - max2 - min2) : d3 / (max2 + min2);
    switch (max2) {
      case r10:
        h5 = (g2 - b3) / d3 + (g2 < b3 ? 6 : 0);
        break;
      case g2:
        h5 = (b3 - r10) / d3 + 2;
        break;
      case b3:
        h5 = (r10 - g2) / d3 + 4;
        break;
      default:
        break;
    }
    h5 /= 6;
  }
  return { h: h5, s: s6, l: l5 };
}
function hue2rgb(p3, q, t8) {
  if (t8 < 0) {
    t8 += 1;
  }
  if (t8 > 1) {
    t8 -= 1;
  }
  if (t8 < 1 / 6) {
    return p3 + (q - p3) * (6 * t8);
  }
  if (t8 < 1 / 2) {
    return q;
  }
  if (t8 < 2 / 3) {
    return p3 + (q - p3) * (2 / 3 - t8) * 6;
  }
  return p3;
}
function hslToRgb(h5, s6, l5) {
  let r10;
  let g2;
  let b3;
  h5 = bound01(h5, 360);
  s6 = bound01(s6, 100);
  l5 = bound01(l5, 100);
  if (s6 === 0) {
    g2 = l5;
    b3 = l5;
    r10 = l5;
  } else {
    const q = l5 < 0.5 ? l5 * (1 + s6) : l5 + s6 - l5 * s6;
    const p3 = 2 * l5 - q;
    r10 = hue2rgb(p3, q, h5 + 1 / 3);
    g2 = hue2rgb(p3, q, h5);
    b3 = hue2rgb(p3, q, h5 - 1 / 3);
  }
  return { r: r10 * 255, g: g2 * 255, b: b3 * 255 };
}
function rgbToHsv(r10, g2, b3) {
  r10 = bound01(r10, 255);
  g2 = bound01(g2, 255);
  b3 = bound01(b3, 255);
  const max2 = Math.max(r10, g2, b3);
  const min2 = Math.min(r10, g2, b3);
  let h5 = 0;
  const v2 = max2;
  const d3 = max2 - min2;
  const s6 = max2 === 0 ? 0 : d3 / max2;
  if (max2 === min2) {
    h5 = 0;
  } else {
    switch (max2) {
      case r10:
        h5 = (g2 - b3) / d3 + (g2 < b3 ? 6 : 0);
        break;
      case g2:
        h5 = (b3 - r10) / d3 + 2;
        break;
      case b3:
        h5 = (r10 - g2) / d3 + 4;
        break;
      default:
        break;
    }
    h5 /= 6;
  }
  return { h: h5, s: s6, v: v2 };
}
function hsvToRgb(h5, s6, v2) {
  h5 = bound01(h5, 360) * 6;
  s6 = bound01(s6, 100);
  v2 = bound01(v2, 100);
  const i6 = Math.floor(h5);
  const f5 = h5 - i6;
  const p3 = v2 * (1 - s6);
  const q = v2 * (1 - f5 * s6);
  const t8 = v2 * (1 - (1 - f5) * s6);
  const mod = i6 % 6;
  const r10 = [v2, q, p3, p3, t8, v2][mod];
  const g2 = [t8, v2, v2, q, p3, p3][mod];
  const b3 = [p3, p3, t8, v2, v2, q][mod];
  return { r: r10 * 255, g: g2 * 255, b: b3 * 255 };
}
function rgbToHex(r10, g2, b3, allow3Char) {
  const hex = [
    pad2(Math.round(r10).toString(16)),
    pad2(Math.round(g2).toString(16)),
    pad2(Math.round(b3).toString(16))
  ];
  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function rgbaToHex(r10, g2, b3, a4, allow4Char) {
  const hex = [
    pad2(Math.round(r10).toString(16)),
    pad2(Math.round(g2).toString(16)),
    pad2(Math.round(b3).toString(16)),
    pad2(convertDecimalToHex(a4))
  ];
  if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}
function cmykToRgb(c5, m3, y3, k2) {
  const cConv = c5 / 100;
  const mConv = m3 / 100;
  const yConv = y3 / 100;
  const kConv = k2 / 100;
  const r10 = 255 * (1 - cConv) * (1 - kConv);
  const g2 = 255 * (1 - mConv) * (1 - kConv);
  const b3 = 255 * (1 - yConv) * (1 - kConv);
  return { r: r10, g: g2, b: b3 };
}
function rgbToCmyk(r10, g2, b3) {
  let c5 = 1 - r10 / 255;
  let m3 = 1 - g2 / 255;
  let y3 = 1 - b3 / 255;
  let k2 = Math.min(c5, m3, y3);
  if (k2 === 1) {
    c5 = 0;
    m3 = 0;
    y3 = 0;
  } else {
    c5 = (c5 - k2) / (1 - k2) * 100;
    m3 = (m3 - k2) / (1 - k2) * 100;
    y3 = (y3 - k2) / (1 - k2) * 100;
  }
  k2 *= 100;
  return {
    c: Math.round(c5),
    m: Math.round(m3),
    y: Math.round(y3),
    k: Math.round(k2)
  };
}
function convertDecimalToHex(d3) {
  return Math.round(parseFloat(d3) * 255).toString(16);
}
function convertHexToDecimal(h5) {
  return parseIntFromHex(h5) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color) {
  return {
    r: color >> 16,
    g: (color & 65280) >> 8,
    b: color & 255
  };
}

// node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};

// node_modules/@ctrl/tinycolor/dist/module/format-input.js
function inputToRGB(color) {
  let rgb = { r: 0, g: 0, b: 0 };
  let a4 = 1;
  let s6 = null;
  let v2 = null;
  let l5 = null;
  let ok = false;
  let format = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s6 = convertToPercentage(color.s);
      v2 = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s6, v2);
      ok = true;
      format = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s6 = convertToPercentage(color.s);
      l5 = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s6, l5);
      ok = true;
      format = "hsl";
    } else if (isValidCSSUnit(color.c) && isValidCSSUnit(color.m) && isValidCSSUnit(color.y) && isValidCSSUnit(color.k)) {
      rgb = cmykToRgb(color.c, color.m, color.y, color.k);
      ok = true;
      format = "cmyk";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a4 = color.a;
    }
  }
  a4 = boundAlpha(a4);
  return {
    ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a4
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = (
  // eslint-disable-next-line prettier/prettier
  "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?"
);
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  cmyk: new RegExp("cmyk" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  let named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  let match = matchers.rgb.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.cmyk.exec(color);
  if (match) {
    return {
      c: match[1],
      m: match[2],
      y: match[3],
      k: match[4]
    };
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color) {
  if (typeof color === "number") {
    return !Number.isNaN(color);
  }
  return matchers.CSS_UNIT.test(color);
}

// node_modules/@ctrl/tinycolor/dist/module/index.js
var TinyColor = class {
  constructor(color = "", opts = {}) {
    if (color instanceof TinyColor) {
      return color;
    }
    if (typeof color === "number") {
      color = numberInputToObject(color);
    }
    this.originalInput = color;
    const rgb = inputToRGB(color);
    this.originalInput = color;
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;
    this.a = rgb.a;
    this.roundA = Math.round(100 * this.a) / 100;
    this.format = opts.format ?? rgb.format;
    this.gradientType = opts.gradientType;
    if (this.r < 1) {
      this.r = Math.round(this.r);
    }
    if (this.g < 1) {
      this.g = Math.round(this.g);
    }
    if (this.b < 1) {
      this.b = Math.round(this.b);
    }
    this.isValid = rgb.ok;
  }
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return !this.isDark();
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   */
  getBrightness() {
    const rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  }
  /**
   * Returns the perceived luminance of a color, from 0-1.
   */
  getLuminance() {
    const rgb = this.toRgb();
    let R2;
    let G2;
    let B;
    const RsRGB = rgb.r / 255;
    const GsRGB = rgb.g / 255;
    const BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) {
      R2 = RsRGB / 12.92;
    } else {
      R2 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    }
    if (GsRGB <= 0.03928) {
      G2 = GsRGB / 12.92;
    } else {
      G2 = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    }
    if (BsRGB <= 0.03928) {
      B = BsRGB / 12.92;
    } else {
      B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * R2 + 0.7152 * G2 + 0.0722 * B;
  }
  /**
   * Returns the alpha value of a color, from 0-1.
   */
  getAlpha() {
    return this.a;
  }
  /**
   * Sets the alpha value on the current color.
   *
   * @param alpha - The new alpha value. The accepted range is 0-1.
   */
  setAlpha(alpha) {
    this.a = boundAlpha(alpha);
    this.roundA = Math.round(100 * this.a) / 100;
    return this;
  }
  /**
   * Returns whether the color is monochrome.
   */
  isMonochrome() {
    const { s: s6 } = this.toHsl();
    return s6 === 0;
  }
  /**
   * Returns the object as a HSVA object.
   */
  toHsv() {
    const hsv = rgbToHsv(this.r, this.g, this.b);
    return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
  }
  /**
   * Returns the hsva values interpolated into a string with the following format:
   * "hsva(xxx, xxx, xxx, xx)".
   */
  toHsvString() {
    const hsv = rgbToHsv(this.r, this.g, this.b);
    const h5 = Math.round(hsv.h * 360);
    const s6 = Math.round(hsv.s * 100);
    const v2 = Math.round(hsv.v * 100);
    return this.a === 1 ? `hsv(${h5}, ${s6}%, ${v2}%)` : `hsva(${h5}, ${s6}%, ${v2}%, ${this.roundA})`;
  }
  /**
   * Returns the object as a HSLA object.
   */
  toHsl() {
    const hsl = rgbToHsl(this.r, this.g, this.b);
    return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
  }
  /**
   * Returns the hsla values interpolated into a string with the following format:
   * "hsla(xxx, xxx, xxx, xx)".
   */
  toHslString() {
    const hsl = rgbToHsl(this.r, this.g, this.b);
    const h5 = Math.round(hsl.h * 360);
    const s6 = Math.round(hsl.s * 100);
    const l5 = Math.round(hsl.l * 100);
    return this.a === 1 ? `hsl(${h5}, ${s6}%, ${l5}%)` : `hsla(${h5}, ${s6}%, ${l5}%, ${this.roundA})`;
  }
  /**
   * Returns the hex value of the color.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  toHex(allow3Char = false) {
    return rgbToHex(this.r, this.g, this.b, allow3Char);
  }
  /**
   * Returns the hex value of the color -with a # prefixed.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  toHexString(allow3Char = false) {
    return "#" + this.toHex(allow3Char);
  }
  /**
   * Returns the hex 8 value of the color.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  toHex8(allow4Char = false) {
    return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
  }
  /**
   * Returns the hex 8 value of the color -with a # prefixed.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  toHex8String(allow4Char = false) {
    return "#" + this.toHex8(allow4Char);
  }
  /**
   * Returns the shorter hex value of the color depends on its alpha -with a # prefixed.
   * @param allowShortChar will shorten hex value to 3 or 4 char if possible
   */
  toHexShortString(allowShortChar = false) {
    return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
  }
  /**
   * Returns the object as a RGBA object.
   */
  toRgb() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  }
  /**
   * Returns the RGBA values interpolated into a string with the following format:
   * "RGBA(xxx, xxx, xxx, xx)".
   */
  toRgbString() {
    const r10 = Math.round(this.r);
    const g2 = Math.round(this.g);
    const b3 = Math.round(this.b);
    return this.a === 1 ? `rgb(${r10}, ${g2}, ${b3})` : `rgba(${r10}, ${g2}, ${b3}, ${this.roundA})`;
  }
  /**
   * Returns the object as a RGBA object.
   */
  toPercentageRgb() {
    const fmt = (x2) => `${Math.round(bound01(x2, 255) * 100)}%`;
    return {
      r: fmt(this.r),
      g: fmt(this.g),
      b: fmt(this.b),
      a: this.a
    };
  }
  /**
   * Returns the RGBA relative values interpolated into a string
   */
  toPercentageRgbString() {
    const rnd = (x2) => Math.round(bound01(x2, 255) * 100);
    return this.a === 1 ? `rgb(${rnd(this.r)}%, ${rnd(this.g)}%, ${rnd(this.b)}%)` : `rgba(${rnd(this.r)}%, ${rnd(this.g)}%, ${rnd(this.b)}%, ${this.roundA})`;
  }
  toCmyk() {
    return {
      ...rgbToCmyk(this.r, this.g, this.b)
    };
  }
  toCmykString() {
    const { c: c5, m: m3, y: y3, k: k2 } = rgbToCmyk(this.r, this.g, this.b);
    return `cmyk(${c5}, ${m3}, ${y3}, ${k2})`;
  }
  /**
   * The 'real' name of the color -if there is one.
   */
  toName() {
    if (this.a === 0) {
      return "transparent";
    }
    if (this.a < 1) {
      return false;
    }
    const hex = "#" + rgbToHex(this.r, this.g, this.b, false);
    for (const [key, value] of Object.entries(names)) {
      if (hex === value) {
        return key;
      }
    }
    return false;
  }
  toString(format) {
    const formatSet = Boolean(format);
    format = format ?? this.format;
    let formattedString = false;
    const hasAlpha = this.a < 1 && this.a >= 0;
    const needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith("hex") || format === "name");
    if (needsAlphaFormat) {
      if (format === "name" && this.a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format === "hex" || format === "hex6") {
      formattedString = this.toHexString();
    }
    if (format === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format === "name") {
      formattedString = this.toName();
    }
    if (format === "hsl") {
      formattedString = this.toHslString();
    }
    if (format === "hsv") {
      formattedString = this.toHsvString();
    }
    if (format === "cmyk") {
      formattedString = this.toCmykString();
    }
    return formattedString || this.toHexString();
  }
  toNumber() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  }
  clone() {
    return new TinyColor(this.toString());
  }
  /**
   * Lighten the color a given amount. Providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  lighten(amount = 10) {
    const hsl = this.toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor(hsl);
  }
  /**
   * Brighten the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  brighten(amount = 10) {
    const rgb = this.toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return new TinyColor(rgb);
  }
  /**
   * Darken the color a given amount, from 0 to 100.
   * Providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  darken(amount = 10) {
    const hsl = this.toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor(hsl);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  tint(amount = 10) {
    return this.mix("white", amount);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  shade(amount = 10) {
    return this.mix("black", amount);
  }
  /**
   * Desaturate the color a given amount, from 0 to 100.
   * Providing 100 will is the same as calling greyscale
   * @param amount - valid between 1-100
   */
  desaturate(amount = 10) {
    const hsl = this.toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor(hsl);
  }
  /**
   * Saturate the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  saturate(amount = 10) {
    const hsl = this.toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor(hsl);
  }
  /**
   * Completely desaturates a color into greyscale.
   * Same as calling `desaturate(100)`
   */
  greyscale() {
    return this.desaturate(100);
  }
  /**
   * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
   * Values outside of this range will be wrapped into this range.
   */
  spin(amount) {
    const hsl = this.toHsl();
    const hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return new TinyColor(hsl);
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(color, amount = 50) {
    const rgb1 = this.toRgb();
    const rgb2 = new TinyColor(color).toRgb();
    const p3 = amount / 100;
    const rgba = {
      r: (rgb2.r - rgb1.r) * p3 + rgb1.r,
      g: (rgb2.g - rgb1.g) * p3 + rgb1.g,
      b: (rgb2.b - rgb1.b) * p3 + rgb1.b,
      a: (rgb2.a - rgb1.a) * p3 + rgb1.a
    };
    return new TinyColor(rgba);
  }
  analogous(results = 6, slices = 30) {
    const hsl = this.toHsl();
    const part = 360 / slices;
    const ret = [this];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(new TinyColor(hsl));
    }
    return ret;
  }
  /**
   * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
   */
  complement() {
    const hsl = this.toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return new TinyColor(hsl);
  }
  monochromatic(results = 6) {
    const hsv = this.toHsv();
    const { h: h5 } = hsv;
    const { s: s6 } = hsv;
    let { v: v2 } = hsv;
    const res = [];
    const modification = 1 / results;
    while (results--) {
      res.push(new TinyColor({ h: h5, s: s6, v: v2 }));
      v2 = (v2 + modification) % 1;
    }
    return res;
  }
  splitcomplement() {
    const hsl = this.toHsl();
    const { h: h5 } = hsl;
    return [
      this,
      new TinyColor({ h: (h5 + 72) % 360, s: hsl.s, l: hsl.l }),
      new TinyColor({ h: (h5 + 216) % 360, s: hsl.s, l: hsl.l })
    ];
  }
  /**
   * Compute how the color would appear on a background
   */
  onBackground(background) {
    const fg = this.toRgb();
    const bg = new TinyColor(background).toRgb();
    const alpha = fg.a + bg.a * (1 - fg.a);
    return new TinyColor({
      r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
      g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
      b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
      a: alpha
    });
  }
  /**
   * Alias for `polyad(3)`
   */
  triad() {
    return this.polyad(3);
  }
  /**
   * Alias for `polyad(4)`
   */
  tetrad() {
    return this.polyad(4);
  }
  /**
   * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
   * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
   */
  polyad(n11) {
    const hsl = this.toHsl();
    const { h: h5 } = hsl;
    const result = [this];
    const increment = 360 / n11;
    for (let i6 = 1; i6 < n11; i6++) {
      result.push(new TinyColor({ h: (h5 + i6 * increment) % 360, s: hsl.s, l: hsl.l }));
    }
    return result;
  }
  /**
   * compare color vs current color
   */
  equals(color) {
    const comparedColor = new TinyColor(color);
    if (this.format === "cmyk" || comparedColor.format === "cmyk") {
      return this.toCmykString() === comparedColor.toCmykString();
    }
    return this.toRgbString() === comparedColor.toRgbString();
  }
};

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6UIVKIPN.js
var hasEyeDropper = "EyeDropper" in window;
var SlColorPicker = class extends ShoelaceElement {
  constructor() {
    super();
    this.formControlController = new FormControlController(this);
    this.isSafeValue = false;
    this.localize = new LocalizeController2(this);
    this.hasFocus = false;
    this.isDraggingGridHandle = false;
    this.isEmpty = false;
    this.inputValue = "";
    this.hue = 0;
    this.saturation = 100;
    this.brightness = 100;
    this.alpha = 100;
    this.value = "";
    this.defaultValue = "";
    this.label = "";
    this.format = "hex";
    this.inline = false;
    this.size = "medium";
    this.noFormatToggle = false;
    this.name = "";
    this.disabled = false;
    this.hoist = false;
    this.opacity = false;
    this.uppercase = false;
    this.swatches = "";
    this.form = "";
    this.required = false;
    this.handleFocusIn = () => {
      this.hasFocus = true;
      this.emit("sl-focus");
    };
    this.handleFocusOut = () => {
      this.hasFocus = false;
      this.emit("sl-blur");
    };
    this.addEventListener("focusin", this.handleFocusIn);
    this.addEventListener("focusout", this.handleFocusOut);
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  firstUpdated() {
    this.input.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }
  handleCopy() {
    this.input.select();
    document.execCommand("copy");
    this.previewButton.focus();
    this.previewButton.classList.add("color-picker__preview-color--copied");
    this.previewButton.addEventListener("animationend", () => {
      this.previewButton.classList.remove("color-picker__preview-color--copied");
    });
  }
  handleFormatToggle() {
    const formats = ["hex", "rgb", "hsl", "hsv"];
    const nextIndex = (formats.indexOf(this.format) + 1) % formats.length;
    this.format = formats[nextIndex];
    this.setColor(this.value);
    this.emit("sl-change");
    this.emit("sl-input");
  }
  handleAlphaDrag(event) {
    const container = this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha");
    const handle = container.querySelector(".color-picker__slider-handle");
    const { width } = container.getBoundingClientRect();
    let initialValue = this.value;
    let currentValue = this.value;
    handle.focus();
    event.preventDefault();
    drag(container, {
      onMove: (x2) => {
        this.alpha = clamp2(x2 / width * 100, 0, 100);
        this.syncValues();
        if (this.value !== currentValue) {
          currentValue = this.value;
          this.emit("sl-input");
        }
      },
      onStop: () => {
        if (this.value !== initialValue) {
          initialValue = this.value;
          this.emit("sl-change");
        }
      },
      initialEvent: event
    });
  }
  handleHueDrag(event) {
    const container = this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue");
    const handle = container.querySelector(".color-picker__slider-handle");
    const { width } = container.getBoundingClientRect();
    let initialValue = this.value;
    let currentValue = this.value;
    handle.focus();
    event.preventDefault();
    drag(container, {
      onMove: (x2) => {
        this.hue = clamp2(x2 / width * 360, 0, 360);
        this.syncValues();
        if (this.value !== currentValue) {
          currentValue = this.value;
          this.emit("sl-input");
        }
      },
      onStop: () => {
        if (this.value !== initialValue) {
          initialValue = this.value;
          this.emit("sl-change");
        }
      },
      initialEvent: event
    });
  }
  handleGridDrag(event) {
    const grid = this.shadowRoot.querySelector(".color-picker__grid");
    const handle = grid.querySelector(".color-picker__grid-handle");
    const { width, height } = grid.getBoundingClientRect();
    let initialValue = this.value;
    let currentValue = this.value;
    handle.focus();
    event.preventDefault();
    this.isDraggingGridHandle = true;
    drag(grid, {
      onMove: (x2, y3) => {
        this.saturation = clamp2(x2 / width * 100, 0, 100);
        this.brightness = clamp2(100 - y3 / height * 100, 0, 100);
        this.syncValues();
        if (this.value !== currentValue) {
          currentValue = this.value;
          this.emit("sl-input");
        }
      },
      onStop: () => {
        this.isDraggingGridHandle = false;
        if (this.value !== initialValue) {
          initialValue = this.value;
          this.emit("sl-change");
        }
      },
      initialEvent: event
    });
  }
  handleAlphaKeyDown(event) {
    const increment = event.shiftKey ? 10 : 1;
    const oldValue = this.value;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.alpha = clamp2(this.alpha - increment, 0, 100);
      this.syncValues();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      this.alpha = clamp2(this.alpha + increment, 0, 100);
      this.syncValues();
    }
    if (event.key === "Home") {
      event.preventDefault();
      this.alpha = 0;
      this.syncValues();
    }
    if (event.key === "End") {
      event.preventDefault();
      this.alpha = 100;
      this.syncValues();
    }
    if (this.value !== oldValue) {
      this.emit("sl-change");
      this.emit("sl-input");
    }
  }
  handleHueKeyDown(event) {
    const increment = event.shiftKey ? 10 : 1;
    const oldValue = this.value;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.hue = clamp2(this.hue - increment, 0, 360);
      this.syncValues();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      this.hue = clamp2(this.hue + increment, 0, 360);
      this.syncValues();
    }
    if (event.key === "Home") {
      event.preventDefault();
      this.hue = 0;
      this.syncValues();
    }
    if (event.key === "End") {
      event.preventDefault();
      this.hue = 360;
      this.syncValues();
    }
    if (this.value !== oldValue) {
      this.emit("sl-change");
      this.emit("sl-input");
    }
  }
  handleGridKeyDown(event) {
    const increment = event.shiftKey ? 10 : 1;
    const oldValue = this.value;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.saturation = clamp2(this.saturation - increment, 0, 100);
      this.syncValues();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      this.saturation = clamp2(this.saturation + increment, 0, 100);
      this.syncValues();
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      this.brightness = clamp2(this.brightness + increment, 0, 100);
      this.syncValues();
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      this.brightness = clamp2(this.brightness - increment, 0, 100);
      this.syncValues();
    }
    if (this.value !== oldValue) {
      this.emit("sl-change");
      this.emit("sl-input");
    }
  }
  handleInputChange(event) {
    const target = event.target;
    const oldValue = this.value;
    event.stopPropagation();
    if (this.input.value) {
      this.setColor(target.value);
      target.value = this.value;
    } else {
      this.value = "";
    }
    if (this.value !== oldValue) {
      this.emit("sl-change");
      this.emit("sl-input");
    }
  }
  handleInputInput(event) {
    this.formControlController.updateValidity();
    event.stopPropagation();
  }
  handleInputKeyDown(event) {
    if (event.key === "Enter") {
      const oldValue = this.value;
      if (this.input.value) {
        this.setColor(this.input.value);
        this.input.value = this.value;
        if (this.value !== oldValue) {
          this.emit("sl-change");
          this.emit("sl-input");
        }
        setTimeout(() => this.input.select());
      } else {
        this.hue = 0;
      }
    }
  }
  handleInputInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  handleTouchMove(event) {
    event.preventDefault();
  }
  parseColor(colorString) {
    const color = new TinyColor(colorString);
    if (!color.isValid) {
      return null;
    }
    const hslColor = color.toHsl();
    const hsl = {
      h: hslColor.h,
      s: hslColor.s * 100,
      l: hslColor.l * 100,
      a: hslColor.a
    };
    const rgb = color.toRgb();
    const hex = color.toHexString();
    const hexa = color.toHex8String();
    const hsvColor = color.toHsv();
    const hsv = {
      h: hsvColor.h,
      s: hsvColor.s * 100,
      v: hsvColor.v * 100,
      a: hsvColor.a
    };
    return {
      hsl: {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        string: this.setLetterCase(`hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%)`)
      },
      hsla: {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: hsl.a,
        string: this.setLetterCase(
          `hsla(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%, ${hsl.a.toFixed(2).toString()})`
        )
      },
      hsv: {
        h: hsv.h,
        s: hsv.s,
        v: hsv.v,
        string: this.setLetterCase(`hsv(${Math.round(hsv.h)}, ${Math.round(hsv.s)}%, ${Math.round(hsv.v)}%)`)
      },
      hsva: {
        h: hsv.h,
        s: hsv.s,
        v: hsv.v,
        a: hsv.a,
        string: this.setLetterCase(
          `hsva(${Math.round(hsv.h)}, ${Math.round(hsv.s)}%, ${Math.round(hsv.v)}%, ${hsv.a.toFixed(2).toString()})`
        )
      },
      rgb: {
        r: rgb.r,
        g: rgb.g,
        b: rgb.b,
        string: this.setLetterCase(`rgb(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)})`)
      },
      rgba: {
        r: rgb.r,
        g: rgb.g,
        b: rgb.b,
        a: rgb.a,
        string: this.setLetterCase(
          `rgba(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)}, ${rgb.a.toFixed(2).toString()})`
        )
      },
      hex: this.setLetterCase(hex),
      hexa: this.setLetterCase(hexa)
    };
  }
  setColor(colorString) {
    const newColor = this.parseColor(colorString);
    if (newColor === null) {
      return false;
    }
    this.hue = newColor.hsva.h;
    this.saturation = newColor.hsva.s;
    this.brightness = newColor.hsva.v;
    this.alpha = this.opacity ? newColor.hsva.a * 100 : 100;
    this.syncValues();
    return true;
  }
  setLetterCase(string) {
    if (typeof string !== "string") {
      return "";
    }
    return this.uppercase ? string.toUpperCase() : string.toLowerCase();
  }
  async syncValues() {
    const currentColor = this.parseColor(
      `hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha / 100})`
    );
    if (currentColor === null) {
      return;
    }
    if (this.format === "hsl") {
      this.inputValue = this.opacity ? currentColor.hsla.string : currentColor.hsl.string;
    } else if (this.format === "rgb") {
      this.inputValue = this.opacity ? currentColor.rgba.string : currentColor.rgb.string;
    } else if (this.format === "hsv") {
      this.inputValue = this.opacity ? currentColor.hsva.string : currentColor.hsv.string;
    } else {
      this.inputValue = this.opacity ? currentColor.hexa : currentColor.hex;
    }
    this.isSafeValue = true;
    this.value = this.inputValue;
    await this.updateComplete;
    this.isSafeValue = false;
  }
  handleAfterHide() {
    this.previewButton.classList.remove("color-picker__preview-color--copied");
  }
  handleEyeDropper() {
    if (!hasEyeDropper) {
      return;
    }
    const eyeDropper = new EyeDropper();
    eyeDropper.open().then((colorSelectionResult) => {
      const oldValue = this.value;
      this.setColor(colorSelectionResult.sRGBHex);
      if (this.value !== oldValue) {
        this.emit("sl-change");
        this.emit("sl-input");
      }
    }).catch(() => {
    });
  }
  selectSwatch(color) {
    const oldValue = this.value;
    if (!this.disabled) {
      this.setColor(color);
      if (this.value !== oldValue) {
        this.emit("sl-change");
        this.emit("sl-input");
      }
    }
  }
  /** Generates a hex string from HSV values. Hue must be 0-360. All other arguments must be 0-100. */
  getHexString(hue, saturation, brightness, alpha = 100) {
    const color = new TinyColor(`hsva(${hue}, ${saturation}%, ${brightness}%, ${alpha / 100})`);
    if (!color.isValid) {
      return "";
    }
    return color.toHex8String();
  }
  // Prevents nested components from leaking events
  stopNestedEventPropagation(event) {
    event.stopImmediatePropagation();
  }
  handleFormatChange() {
    this.syncValues();
  }
  handleOpacityChange() {
    this.alpha = 100;
  }
  handleValueChange(oldValue, newValue) {
    this.isEmpty = !newValue;
    if (!newValue) {
      this.hue = 0;
      this.saturation = 0;
      this.brightness = 100;
      this.alpha = 100;
    }
    if (!this.isSafeValue) {
      const newColor = this.parseColor(newValue);
      if (newColor !== null) {
        this.inputValue = this.value;
        this.hue = newColor.hsva.h;
        this.saturation = newColor.hsva.s;
        this.brightness = newColor.hsva.v;
        this.alpha = newColor.hsva.a * 100;
        this.syncValues();
      } else {
        this.inputValue = oldValue != null ? oldValue : "";
      }
    }
  }
  /** Sets focus on the color picker. */
  focus(options) {
    if (this.inline) {
      this.base.focus(options);
    } else {
      this.trigger.focus(options);
    }
  }
  /** Removes focus from the color picker. */
  blur() {
    var _a;
    const elementToBlur = this.inline ? this.base : this.trigger;
    if (this.hasFocus) {
      elementToBlur.focus({ preventScroll: true });
      elementToBlur.blur();
    }
    if ((_a = this.dropdown) == null ? void 0 : _a.open) {
      this.dropdown.hide();
    }
  }
  /** Returns the current value as a string in the specified format. */
  getFormattedValue(format = "hex") {
    const currentColor = this.parseColor(
      `hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha / 100})`
    );
    if (currentColor === null) {
      return "";
    }
    switch (format) {
      case "hex":
        return currentColor.hex;
      case "hexa":
        return currentColor.hexa;
      case "rgb":
        return currentColor.rgb.string;
      case "rgba":
        return currentColor.rgba.string;
      case "hsl":
        return currentColor.hsl.string;
      case "hsla":
        return currentColor.hsla.string;
      case "hsv":
        return currentColor.hsv.string;
      case "hsva":
        return currentColor.hsva.string;
      default:
        return "";
    }
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    if (!this.inline && !this.validity.valid) {
      this.dropdown.show();
      this.addEventListener("sl-after-show", () => this.input.reportValidity(), { once: true });
      if (!this.disabled) {
        this.formControlController.emitInvalidEvent();
      }
      return false;
    }
    return this.input.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  render() {
    const gridHandleX = this.saturation;
    const gridHandleY = 100 - this.brightness;
    const swatches = Array.isArray(this.swatches) ? this.swatches : this.swatches.split(";").filter((color) => color.trim() !== "");
    const colorPicker = x`
      <div
        part="base"
        class=${e8({
      "color-picker": true,
      "color-picker--inline": this.inline,
      "color-picker--disabled": this.disabled,
      "color-picker--focused": this.hasFocus
    })}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-labelledby="label"
        tabindex=${this.inline ? "0" : "-1"}
      >
        ${this.inline ? x`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            ` : null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${o10({ backgroundColor: this.getHexString(this.hue, 100, 100) })}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${e8({
      "color-picker__grid-handle": true,
      "color-picker__grid-handle--dragging": this.isDraggingGridHandle
    })}
            style=${o10({
      top: `${gridHandleY}%`,
      left: `${gridHandleX}%`,
      backgroundColor: this.getHexString(this.hue, this.saturation, this.brightness, this.alpha)
    })}
            role="application"
            aria-label="HSV"
            tabindex=${o6(this.disabled ? void 0 : "0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${o10({
      left: `${this.hue === 0 ? 0 : 100 / (360 / this.hue)}%`
    })}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${o6(this.disabled ? void 0 : "0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity ? x`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${o10({
      backgroundImage: `linear-gradient(
                          to right,
                          ${this.getHexString(this.hue, this.saturation, this.brightness, 0)} 0%,
                          ${this.getHexString(this.hue, this.saturation, this.brightness, 100)} 100%
                        )`
    })}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${o10({
      left: `${this.alpha}%`
    })}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${o6(this.disabled ? void 0 : "0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                ` : ""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${o10({
      "--preview-color": this.getHexString(this.hue, this.saturation, this.brightness, this.alpha)
    })}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty ? "" : this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${!this.noFormatToggle ? x`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                ` : ""}
            ${hasEyeDropper ? x`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                ` : ""}
          </sl-button-group>
        </div>

        ${swatches.length > 0 ? x`
              <div part="swatches" class="color-picker__swatches">
                ${swatches.map((swatch) => {
      const parsedColor = this.parseColor(swatch);
      if (!parsedColor) {
        console.error(`Unable to parse swatch color: "${swatch}"`, this);
        return "";
      }
      return x`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${o6(this.disabled ? void 0 : "0")}
                      role="button"
                      aria-label=${swatch}
                      @click=${() => this.selectSwatch(swatch)}
                      @keydown=${(event) => !this.disabled && event.key === "Enter" && this.setColor(parsedColor.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${o10({ backgroundColor: parsedColor.hexa })}
                      ></div>
                    </div>
                  `;
    })}
              </div>
            ` : ""}
      </div>
    `;
    if (this.inline) {
      return colorPicker;
    }
    return x`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled ? "true" : "false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${e8({
      "color-dropdown__trigger": true,
      "color-dropdown__trigger--disabled": this.disabled,
      "color-dropdown__trigger--small": this.size === "small",
      "color-dropdown__trigger--medium": this.size === "medium",
      "color-dropdown__trigger--large": this.size === "large",
      "color-dropdown__trigger--empty": this.isEmpty,
      "color-dropdown__trigger--focused": this.hasFocus,
      "color-picker__transparent-bg": true
    })}
          style=${o10({
      color: this.getHexString(this.hue, this.saturation, this.brightness, this.alpha)
    })}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${colorPicker}
      </sl-dropdown>
    `;
  }
};
SlColorPicker.styles = [component_styles_default, color_picker_styles_default];
SlColorPicker.dependencies = {
  "sl-button-group": SlButtonGroup,
  "sl-button": SlButton,
  "sl-dropdown": SlDropdown,
  "sl-icon": SlIcon,
  "sl-input": SlInput,
  "sl-visually-hidden": SlVisuallyHidden
};
__decorateClass([
  e5('[part~="base"]')
], SlColorPicker.prototype, "base", 2);
__decorateClass([
  e5('[part~="input"]')
], SlColorPicker.prototype, "input", 2);
__decorateClass([
  e5(".color-dropdown")
], SlColorPicker.prototype, "dropdown", 2);
__decorateClass([
  e5('[part~="preview"]')
], SlColorPicker.prototype, "previewButton", 2);
__decorateClass([
  e5('[part~="trigger"]')
], SlColorPicker.prototype, "trigger", 2);
__decorateClass([
  r6()
], SlColorPicker.prototype, "hasFocus", 2);
__decorateClass([
  r6()
], SlColorPicker.prototype, "isDraggingGridHandle", 2);
__decorateClass([
  r6()
], SlColorPicker.prototype, "isEmpty", 2);
__decorateClass([
  r6()
], SlColorPicker.prototype, "inputValue", 2);
__decorateClass([
  r6()
], SlColorPicker.prototype, "hue", 2);
__decorateClass([
  r6()
], SlColorPicker.prototype, "saturation", 2);
__decorateClass([
  r6()
], SlColorPicker.prototype, "brightness", 2);
__decorateClass([
  r6()
], SlColorPicker.prototype, "alpha", 2);
__decorateClass([
  n4()
], SlColorPicker.prototype, "value", 2);
__decorateClass([
  defaultValue()
], SlColorPicker.prototype, "defaultValue", 2);
__decorateClass([
  n4()
], SlColorPicker.prototype, "label", 2);
__decorateClass([
  n4()
], SlColorPicker.prototype, "format", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlColorPicker.prototype, "inline", 2);
__decorateClass([
  n4({ reflect: true })
], SlColorPicker.prototype, "size", 2);
__decorateClass([
  n4({ attribute: "no-format-toggle", type: Boolean })
], SlColorPicker.prototype, "noFormatToggle", 2);
__decorateClass([
  n4()
], SlColorPicker.prototype, "name", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlColorPicker.prototype, "disabled", 2);
__decorateClass([
  n4({ type: Boolean })
], SlColorPicker.prototype, "hoist", 2);
__decorateClass([
  n4({ type: Boolean })
], SlColorPicker.prototype, "opacity", 2);
__decorateClass([
  n4({ type: Boolean })
], SlColorPicker.prototype, "uppercase", 2);
__decorateClass([
  n4()
], SlColorPicker.prototype, "swatches", 2);
__decorateClass([
  n4({ reflect: true })
], SlColorPicker.prototype, "form", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlColorPicker.prototype, "required", 2);
__decorateClass([
  t3({ passive: false })
], SlColorPicker.prototype, "handleTouchMove", 1);
__decorateClass([
  watch("format", { waitUntilFirstUpdate: true })
], SlColorPicker.prototype, "handleFormatChange", 1);
__decorateClass([
  watch("opacity", { waitUntilFirstUpdate: true })
], SlColorPicker.prototype, "handleOpacityChange", 1);
__decorateClass([
  watch("value")
], SlColorPicker.prototype, "handleValueChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.EZXIXFIY.js
var React53 = __toESM(require_react(), 1);
var tagName53 = "sl-color-picker";
SlColorPicker.define("sl-color-picker");
var reactWrapper53 = o7({
  tagName: tagName53,
  elementClass: SlColorPicker,
  react: React53,
  events: {
    onSlBlur: "sl-blur",
    onSlChange: "sl-change",
    onSlFocus: "sl-focus",
    onSlInput: "sl-input",
    onSlInvalid: "sl-invalid"
  },
  displayName: "SlColorPicker"
});
var color_picker_default = reactWrapper53;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.OCMJ7QFW.js
var alert_styles_default = i`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.IBBLL4RX.js
var toastStack = Object.assign(document.createElement("div"), { className: "sl-toast-stack" });
var SlAlert = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "icon", "suffix");
    this.localize = new LocalizeController2(this);
    this.open = false;
    this.closable = false;
    this.variant = "primary";
    this.duration = Infinity;
  }
  firstUpdated() {
    this.base.hidden = !this.open;
  }
  restartAutoHide() {
    clearTimeout(this.autoHideTimeout);
    if (this.open && this.duration < Infinity) {
      this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
    }
  }
  handleCloseClick() {
    this.hide();
  }
  handleMouseMove() {
    this.restartAutoHide();
  }
  async handleOpenChange() {
    if (this.open) {
      this.emit("sl-show");
      if (this.duration < Infinity) {
        this.restartAutoHide();
      }
      await stopAnimations(this.base);
      this.base.hidden = false;
      const { keyframes, options } = getAnimation(this, "alert.show", { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);
      this.emit("sl-after-show");
    } else {
      this.emit("sl-hide");
      clearTimeout(this.autoHideTimeout);
      await stopAnimations(this.base);
      const { keyframes, options } = getAnimation(this, "alert.hide", { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);
      this.base.hidden = true;
      this.emit("sl-after-hide");
    }
  }
  handleDurationChange() {
    this.restartAutoHide();
  }
  /** Shows the alert. */
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "sl-after-show");
  }
  /** Hides the alert */
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "sl-after-hide");
  }
  /**
   * Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
   * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
   * calling this method again. The returned promise will resolve after the alert is hidden.
   */
  async toast() {
    return new Promise((resolve) => {
      if (toastStack.parentElement === null) {
        document.body.append(toastStack);
      }
      toastStack.appendChild(this);
      requestAnimationFrame(() => {
        this.clientWidth;
        this.show();
      });
      this.addEventListener(
        "sl-after-hide",
        () => {
          toastStack.removeChild(this);
          resolve();
          if (toastStack.querySelector("sl-alert") === null) {
            toastStack.remove();
          }
        },
        { once: true }
      );
    });
  }
  render() {
    return x`
      <div
        part="base"
        class=${e8({
      alert: true,
      "alert--open": this.open,
      "alert--closable": this.closable,
      "alert--has-icon": this.hasSlotController.test("icon"),
      "alert--primary": this.variant === "primary",
      "alert--success": this.variant === "success",
      "alert--neutral": this.variant === "neutral",
      "alert--warning": this.variant === "warning",
      "alert--danger": this.variant === "danger"
    })}
        role="alert"
        aria-hidden=${this.open ? "false" : "true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable ? x`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            ` : ""}
      </div>
    `;
  }
};
SlAlert.styles = [component_styles_default, alert_styles_default];
SlAlert.dependencies = { "sl-icon-button": SlIconButton };
__decorateClass([
  e5('[part~="base"]')
], SlAlert.prototype, "base", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlAlert.prototype, "open", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlAlert.prototype, "closable", 2);
__decorateClass([
  n4({ reflect: true })
], SlAlert.prototype, "variant", 2);
__decorateClass([
  n4({ type: Number })
], SlAlert.prototype, "duration", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], SlAlert.prototype, "handleOpenChange", 1);
__decorateClass([
  watch("duration")
], SlAlert.prototype, "handleDurationChange", 1);
setDefaultAnimation("alert.show", {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("alert.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 250, easing: "ease" }
});

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WINZJWDE.js
var React54 = __toESM(require_react(), 1);
var tagName54 = "sl-alert";
SlAlert.define("sl-alert");
var reactWrapper54 = o7({
  tagName: tagName54,
  elementClass: SlAlert,
  react: React54,
  events: {
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide"
  },
  displayName: "SlAlert"
});
var alert_default = reactWrapper54;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.M3A4TKTU.js
var animated_image_styles_default = i`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MFAYXQHE.js
var SlAnimatedImage = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.isLoaded = false;
  }
  handleClick() {
    this.play = !this.play;
  }
  handleLoad() {
    const canvas = document.createElement("canvas");
    const { width, height } = this.animatedImage;
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(this.animatedImage, 0, 0, width, height);
    this.frozenFrame = canvas.toDataURL("image/gif");
    if (!this.isLoaded) {
      this.emit("sl-load");
      this.isLoaded = true;
    }
  }
  handleError() {
    this.emit("sl-error");
  }
  handlePlayChange() {
    if (this.play) {
      this.animatedImage.src = "";
      this.animatedImage.src = this.src;
    }
  }
  handleSrcChange() {
    this.isLoaded = false;
  }
  render() {
    return x`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play ? "false" : "true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded ? x`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play ? "true" : "false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            ` : ""}
      </div>
    `;
  }
};
SlAnimatedImage.styles = [component_styles_default, animated_image_styles_default];
SlAnimatedImage.dependencies = { "sl-icon": SlIcon };
__decorateClass([
  e5(".animated-image__animated")
], SlAnimatedImage.prototype, "animatedImage", 2);
__decorateClass([
  r6()
], SlAnimatedImage.prototype, "frozenFrame", 2);
__decorateClass([
  r6()
], SlAnimatedImage.prototype, "isLoaded", 2);
__decorateClass([
  n4()
], SlAnimatedImage.prototype, "src", 2);
__decorateClass([
  n4()
], SlAnimatedImage.prototype, "alt", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlAnimatedImage.prototype, "play", 2);
__decorateClass([
  watch("play", { waitUntilFirstUpdate: true })
], SlAnimatedImage.prototype, "handlePlayChange", 1);
__decorateClass([
  watch("src")
], SlAnimatedImage.prototype, "handleSrcChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.W4VH5U3N.js
var React55 = __toESM(require_react(), 1);
var tagName55 = "sl-animated-image";
SlAnimatedImage.define("sl-animated-image");
var reactWrapper55 = o7({
  tagName: tagName55,
  elementClass: SlAnimatedImage,
  react: React55,
  events: {
    onSlLoad: "sl-load",
    onSlError: "sl-error"
  },
  displayName: "SlAnimatedImage"
});
var animated_image_default = reactWrapper55;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.K35GSB4N.js
var avatar_styles_default = i`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TP3YSVRB.js
var SlAvatar = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.hasError = false;
    this.image = "";
    this.label = "";
    this.initials = "";
    this.loading = "eager";
    this.shape = "circle";
  }
  handleImageChange() {
    this.hasError = false;
  }
  handleImageLoadError() {
    this.hasError = true;
    this.emit("sl-error");
  }
  render() {
    const avatarWithImage = x`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;
    let avatarWithoutImage = x``;
    if (this.initials) {
      avatarWithoutImage = x`<div part="initials" class="avatar__initials">${this.initials}</div>`;
    } else {
      avatarWithoutImage = x`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `;
    }
    return x`
      <div
        part="base"
        class=${e8({
      avatar: true,
      "avatar--circle": this.shape === "circle",
      "avatar--rounded": this.shape === "rounded",
      "avatar--square": this.shape === "square"
    })}
        role="img"
        aria-label=${this.label}
      >
        ${this.image && !this.hasError ? avatarWithImage : avatarWithoutImage}
      </div>
    `;
  }
};
SlAvatar.styles = [component_styles_default, avatar_styles_default];
SlAvatar.dependencies = {
  "sl-icon": SlIcon
};
__decorateClass([
  r6()
], SlAvatar.prototype, "hasError", 2);
__decorateClass([
  n4()
], SlAvatar.prototype, "image", 2);
__decorateClass([
  n4()
], SlAvatar.prototype, "label", 2);
__decorateClass([
  n4()
], SlAvatar.prototype, "initials", 2);
__decorateClass([
  n4()
], SlAvatar.prototype, "loading", 2);
__decorateClass([
  n4({ reflect: true })
], SlAvatar.prototype, "shape", 2);
__decorateClass([
  watch("image")
], SlAvatar.prototype, "handleImageChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AUUEHXFH.js
var React56 = __toESM(require_react(), 1);
var tagName56 = "sl-avatar";
SlAvatar.define("sl-avatar");
var reactWrapper56 = o7({
  tagName: tagName56,
  elementClass: SlAvatar,
  react: React56,
  events: {
    onSlError: "sl-error"
  },
  displayName: "SlAvatar"
});
var avatar_default = reactWrapper56;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XVVDUPMB.js
var animation_styles_default = i`
  :host {
    display: contents;
  }
`;

// node_modules/@shoelace-style/animations/dist/index.js
var dist_exports = {};
__export(dist_exports, {
  backInDown: () => backInDown,
  backInLeft: () => backInLeft,
  backInRight: () => backInRight,
  backInUp: () => backInUp,
  backOutDown: () => backOutDown,
  backOutLeft: () => backOutLeft,
  backOutRight: () => backOutRight,
  backOutUp: () => backOutUp,
  bounce: () => bounce,
  bounceIn: () => bounceIn,
  bounceInDown: () => bounceInDown,
  bounceInLeft: () => bounceInLeft,
  bounceInRight: () => bounceInRight,
  bounceInUp: () => bounceInUp,
  bounceOut: () => bounceOut,
  bounceOutDown: () => bounceOutDown,
  bounceOutLeft: () => bounceOutLeft,
  bounceOutRight: () => bounceOutRight,
  bounceOutUp: () => bounceOutUp,
  easings: () => easings,
  fadeIn: () => fadeIn,
  fadeInBottomLeft: () => fadeInBottomLeft,
  fadeInBottomRight: () => fadeInBottomRight,
  fadeInDown: () => fadeInDown,
  fadeInDownBig: () => fadeInDownBig,
  fadeInLeft: () => fadeInLeft,
  fadeInLeftBig: () => fadeInLeftBig,
  fadeInRight: () => fadeInRight,
  fadeInRightBig: () => fadeInRightBig,
  fadeInTopLeft: () => fadeInTopLeft,
  fadeInTopRight: () => fadeInTopRight,
  fadeInUp: () => fadeInUp,
  fadeInUpBig: () => fadeInUpBig,
  fadeOut: () => fadeOut,
  fadeOutBottomLeft: () => fadeOutBottomLeft,
  fadeOutBottomRight: () => fadeOutBottomRight,
  fadeOutDown: () => fadeOutDown,
  fadeOutDownBig: () => fadeOutDownBig,
  fadeOutLeft: () => fadeOutLeft,
  fadeOutLeftBig: () => fadeOutLeftBig,
  fadeOutRight: () => fadeOutRight,
  fadeOutRightBig: () => fadeOutRightBig,
  fadeOutTopLeft: () => fadeOutTopLeft,
  fadeOutTopRight: () => fadeOutTopRight,
  fadeOutUp: () => fadeOutUp,
  fadeOutUpBig: () => fadeOutUpBig,
  flash: () => flash,
  flip: () => flip3,
  flipInX: () => flipInX,
  flipInY: () => flipInY,
  flipOutX: () => flipOutX,
  flipOutY: () => flipOutY,
  headShake: () => headShake,
  heartBeat: () => heartBeat,
  hinge: () => hinge,
  jackInTheBox: () => jackInTheBox,
  jello: () => jello,
  lightSpeedInLeft: () => lightSpeedInLeft,
  lightSpeedInRight: () => lightSpeedInRight,
  lightSpeedOutLeft: () => lightSpeedOutLeft,
  lightSpeedOutRight: () => lightSpeedOutRight,
  pulse: () => pulse,
  rollIn: () => rollIn,
  rollOut: () => rollOut,
  rotateIn: () => rotateIn,
  rotateInDownLeft: () => rotateInDownLeft,
  rotateInDownRight: () => rotateInDownRight,
  rotateInUpLeft: () => rotateInUpLeft,
  rotateInUpRight: () => rotateInUpRight,
  rotateOut: () => rotateOut,
  rotateOutDownLeft: () => rotateOutDownLeft,
  rotateOutDownRight: () => rotateOutDownRight,
  rotateOutUpLeft: () => rotateOutUpLeft,
  rotateOutUpRight: () => rotateOutUpRight,
  rubberBand: () => rubberBand,
  shake: () => shake,
  shakeX: () => shakeX,
  shakeY: () => shakeY,
  slideInDown: () => slideInDown,
  slideInLeft: () => slideInLeft,
  slideInRight: () => slideInRight,
  slideInUp: () => slideInUp,
  slideOutDown: () => slideOutDown,
  slideOutLeft: () => slideOutLeft,
  slideOutRight: () => slideOutRight,
  slideOutUp: () => slideOutUp,
  swing: () => swing,
  tada: () => tada,
  wobble: () => wobble,
  zoomIn: () => zoomIn,
  zoomInDown: () => zoomInDown,
  zoomInLeft: () => zoomInLeft,
  zoomInRight: () => zoomInRight,
  zoomInUp: () => zoomInUp,
  zoomOut: () => zoomOut,
  zoomOutDown: () => zoomOutDown,
  zoomOutLeft: () => zoomOutLeft,
  zoomOutRight: () => zoomOutRight,
  zoomOutUp: () => zoomOutUp
});

// node_modules/@shoelace-style/animations/dist/attention_seekers/bounce.js
var bounce = [
  { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)", transform: "translate3d(0, 0, 0)" },
  { offset: 0.2, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)", transform: "translate3d(0, 0, 0)" },
  { offset: 0.4, easing: "cubic-bezier(0.755, 0.05, 0.855, 0.06)", transform: "translate3d(0, -30px, 0) scaleY(1.1)" },
  { offset: 0.43, easing: "cubic-bezier(0.755, 0.05, 0.855, 0.06)", transform: "translate3d(0, -30px, 0) scaleY(1.1)" },
  { offset: 0.53, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)", transform: "translate3d(0, 0, 0)" },
  { offset: 0.7, easing: "cubic-bezier(0.755, 0.05, 0.855, 0.06)", transform: "translate3d(0, -15px, 0) scaleY(1.05)" },
  {
    offset: 0.8,
    "transition-timing-function": "cubic-bezier(0.215, 0.61, 0.355, 1)",
    transform: "translate3d(0, 0, 0) scaleY(0.95)"
  },
  { offset: 0.9, transform: "translate3d(0, -4px, 0) scaleY(1.02)" },
  { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)", transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/attention_seekers/flash.js
var flash = [
  { offset: 0, opacity: "1" },
  { offset: 0.25, opacity: "0" },
  { offset: 0.5, opacity: "1" },
  { offset: 0.75, opacity: "0" },
  { offset: 1, opacity: "1" }
];

// node_modules/@shoelace-style/animations/dist/attention_seekers/headShake.js
var headShake = [
  { offset: 0, transform: "translateX(0)" },
  { offset: 0.065, transform: "translateX(-6px) rotateY(-9deg)" },
  { offset: 0.185, transform: "translateX(5px) rotateY(7deg)" },
  { offset: 0.315, transform: "translateX(-3px) rotateY(-5deg)" },
  { offset: 0.435, transform: "translateX(2px) rotateY(3deg)" },
  { offset: 0.5, transform: "translateX(0)" }
];

// node_modules/@shoelace-style/animations/dist/attention_seekers/heartBeat.js
var heartBeat = [
  { offset: 0, transform: "scale(1)" },
  { offset: 0.14, transform: "scale(1.3)" },
  { offset: 0.28, transform: "scale(1)" },
  { offset: 0.42, transform: "scale(1.3)" },
  { offset: 0.7, transform: "scale(1)" }
];

// node_modules/@shoelace-style/animations/dist/attention_seekers/jello.js
var jello = [
  { offset: 0, transform: "translate3d(0, 0, 0)" },
  { offset: 0.111, transform: "translate3d(0, 0, 0)" },
  { offset: 0.222, transform: "skewX(-12.5deg) skewY(-12.5deg)" },
  { offset: 0.33299999999999996, transform: "skewX(6.25deg) skewY(6.25deg)" },
  { offset: 0.444, transform: "skewX(-3.125deg) skewY(-3.125deg)" },
  { offset: 0.555, transform: "skewX(1.5625deg) skewY(1.5625deg)" },
  { offset: 0.6659999999999999, transform: "skewX(-0.78125deg) skewY(-0.78125deg)" },
  { offset: 0.777, transform: "skewX(0.390625deg) skewY(0.390625deg)" },
  { offset: 0.888, transform: "skewX(-0.1953125deg) skewY(-0.1953125deg)" },
  { offset: 1, transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/attention_seekers/pulse.js
var pulse = [
  { offset: 0, transform: "scale3d(1, 1, 1)" },
  { offset: 0.5, transform: "scale3d(1.05, 1.05, 1.05)" },
  { offset: 1, transform: "scale3d(1, 1, 1)" }
];

// node_modules/@shoelace-style/animations/dist/attention_seekers/rubberBand.js
var rubberBand = [
  { offset: 0, transform: "scale3d(1, 1, 1)" },
  { offset: 0.3, transform: "scale3d(1.25, 0.75, 1)" },
  { offset: 0.4, transform: "scale3d(0.75, 1.25, 1)" },
  { offset: 0.5, transform: "scale3d(1.15, 0.85, 1)" },
  { offset: 0.65, transform: "scale3d(0.95, 1.05, 1)" },
  { offset: 0.75, transform: "scale3d(1.05, 0.95, 1)" },
  { offset: 1, transform: "scale3d(1, 1, 1)" }
];

// node_modules/@shoelace-style/animations/dist/attention_seekers/shake.js
var shake = [
  { offset: 0, transform: "translate3d(0, 0, 0)" },
  { offset: 0.1, transform: "translate3d(-10px, 0, 0)" },
  { offset: 0.2, transform: "translate3d(10px, 0, 0)" },
  { offset: 0.3, transform: "translate3d(-10px, 0, 0)" },
  { offset: 0.4, transform: "translate3d(10px, 0, 0)" },
  { offset: 0.5, transform: "translate3d(-10px, 0, 0)" },
  { offset: 0.6, transform: "translate3d(10px, 0, 0)" },
  { offset: 0.7, transform: "translate3d(-10px, 0, 0)" },
  { offset: 0.8, transform: "translate3d(10px, 0, 0)" },
  { offset: 0.9, transform: "translate3d(-10px, 0, 0)" },
  { offset: 1, transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/attention_seekers/shakeX.js
var shakeX = [
  { offset: 0, transform: "translate3d(0, 0, 0)" },
  { offset: 0.1, transform: "translate3d(-10px, 0, 0)" },
  { offset: 0.2, transform: "translate3d(10px, 0, 0)" },
  { offset: 0.3, transform: "translate3d(-10px, 0, 0)" },
  { offset: 0.4, transform: "translate3d(10px, 0, 0)" },
  { offset: 0.5, transform: "translate3d(-10px, 0, 0)" },
  { offset: 0.6, transform: "translate3d(10px, 0, 0)" },
  { offset: 0.7, transform: "translate3d(-10px, 0, 0)" },
  { offset: 0.8, transform: "translate3d(10px, 0, 0)" },
  { offset: 0.9, transform: "translate3d(-10px, 0, 0)" },
  { offset: 1, transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/attention_seekers/shakeY.js
var shakeY = [
  { offset: 0, transform: "translate3d(0, 0, 0)" },
  { offset: 0.1, transform: "translate3d(0, -10px, 0)" },
  { offset: 0.2, transform: "translate3d(0, 10px, 0)" },
  { offset: 0.3, transform: "translate3d(0, -10px, 0)" },
  { offset: 0.4, transform: "translate3d(0, 10px, 0)" },
  { offset: 0.5, transform: "translate3d(0, -10px, 0)" },
  { offset: 0.6, transform: "translate3d(0, 10px, 0)" },
  { offset: 0.7, transform: "translate3d(0, -10px, 0)" },
  { offset: 0.8, transform: "translate3d(0, 10px, 0)" },
  { offset: 0.9, transform: "translate3d(0, -10px, 0)" },
  { offset: 1, transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/attention_seekers/swing.js
var swing = [
  { offset: 0.2, transform: "rotate3d(0, 0, 1, 15deg)" },
  { offset: 0.4, transform: "rotate3d(0, 0, 1, -10deg)" },
  { offset: 0.6, transform: "rotate3d(0, 0, 1, 5deg)" },
  { offset: 0.8, transform: "rotate3d(0, 0, 1, -5deg)" },
  { offset: 1, transform: "rotate3d(0, 0, 1, 0deg)" }
];

// node_modules/@shoelace-style/animations/dist/attention_seekers/tada.js
var tada = [
  { offset: 0, transform: "scale3d(1, 1, 1)" },
  { offset: 0.1, transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)" },
  { offset: 0.2, transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)" },
  { offset: 0.3, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)" },
  { offset: 0.4, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)" },
  { offset: 0.5, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)" },
  { offset: 0.6, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)" },
  { offset: 0.7, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)" },
  { offset: 0.8, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)" },
  { offset: 0.9, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)" },
  { offset: 1, transform: "scale3d(1, 1, 1)" }
];

// node_modules/@shoelace-style/animations/dist/attention_seekers/wobble.js
var wobble = [
  { offset: 0, transform: "translate3d(0, 0, 0)" },
  { offset: 0.15, transform: "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)" },
  { offset: 0.3, transform: "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)" },
  { offset: 0.45, transform: "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)" },
  { offset: 0.6, transform: "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)" },
  { offset: 0.75, transform: "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)" },
  { offset: 1, transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/back_entrances/backInDown.js
var backInDown = [
  { offset: 0, transform: "translateY(-1200px) scale(0.7)", opacity: "0.7" },
  { offset: 0.8, transform: "translateY(0px) scale(0.7)", opacity: "0.7" },
  { offset: 1, transform: "scale(1)", opacity: "1" }
];

// node_modules/@shoelace-style/animations/dist/back_entrances/backInLeft.js
var backInLeft = [
  { offset: 0, transform: "translateX(-2000px) scale(0.7)", opacity: "0.7" },
  { offset: 0.8, transform: "translateX(0px) scale(0.7)", opacity: "0.7" },
  { offset: 1, transform: "scale(1)", opacity: "1" }
];

// node_modules/@shoelace-style/animations/dist/back_entrances/backInRight.js
var backInRight = [
  { offset: 0, transform: "translateX(2000px) scale(0.7)", opacity: "0.7" },
  { offset: 0.8, transform: "translateX(0px) scale(0.7)", opacity: "0.7" },
  { offset: 1, transform: "scale(1)", opacity: "1" }
];

// node_modules/@shoelace-style/animations/dist/back_entrances/backInUp.js
var backInUp = [
  { offset: 0, transform: "translateY(1200px) scale(0.7)", opacity: "0.7" },
  { offset: 0.8, transform: "translateY(0px) scale(0.7)", opacity: "0.7" },
  { offset: 1, transform: "scale(1)", opacity: "1" }
];

// node_modules/@shoelace-style/animations/dist/back_exits/backOutDown.js
var backOutDown = [
  { offset: 0, transform: "scale(1)", opacity: "1" },
  { offset: 0.2, transform: "translateY(0px) scale(0.7)", opacity: "0.7" },
  { offset: 1, transform: "translateY(700px) scale(0.7)", opacity: "0.7" }
];

// node_modules/@shoelace-style/animations/dist/back_exits/backOutLeft.js
var backOutLeft = [
  { offset: 0, transform: "scale(1)", opacity: "1" },
  { offset: 0.2, transform: "translateX(0px) scale(0.7)", opacity: "0.7" },
  { offset: 1, transform: "translateX(-2000px) scale(0.7)", opacity: "0.7" }
];

// node_modules/@shoelace-style/animations/dist/back_exits/backOutRight.js
var backOutRight = [
  { offset: 0, transform: "scale(1)", opacity: "1" },
  { offset: 0.2, transform: "translateX(0px) scale(0.7)", opacity: "0.7" },
  { offset: 1, transform: "translateX(2000px) scale(0.7)", opacity: "0.7" }
];

// node_modules/@shoelace-style/animations/dist/back_exits/backOutUp.js
var backOutUp = [
  { offset: 0, transform: "scale(1)", opacity: "1" },
  { offset: 0.2, transform: "translateY(0px) scale(0.7)", opacity: "0.7" },
  { offset: 1, transform: "translateY(-700px) scale(0.7)", opacity: "0.7" }
];

// node_modules/@shoelace-style/animations/dist/bouncing_entrances/bounceIn.js
var bounceIn = [
  { offset: 0, opacity: "0", transform: "scale3d(0.3, 0.3, 0.3)" },
  { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.2, transform: "scale3d(1.1, 1.1, 1.1)" },
  { offset: 0.2, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.4, transform: "scale3d(0.9, 0.9, 0.9)" },
  { offset: 0.4, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.6, opacity: "1", transform: "scale3d(1.03, 1.03, 1.03)" },
  { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.8, transform: "scale3d(0.97, 0.97, 0.97)" },
  { offset: 0.8, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 1, opacity: "1", transform: "scale3d(1, 1, 1)" },
  { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
];

// node_modules/@shoelace-style/animations/dist/bouncing_entrances/bounceInDown.js
var bounceInDown = [
  { offset: 0, opacity: "0", transform: "translate3d(0, -3000px, 0) scaleY(3)" },
  { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.6, opacity: "1", transform: "translate3d(0, 25px, 0) scaleY(0.9)" },
  { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.75, transform: "translate3d(0, -10px, 0) scaleY(0.95)" },
  { offset: 0.75, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.9, transform: "translate3d(0, 5px, 0) scaleY(0.985)" },
  { offset: 0.9, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 1, transform: "translate3d(0, 0, 0)" },
  { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
];

// node_modules/@shoelace-style/animations/dist/bouncing_entrances/bounceInLeft.js
var bounceInLeft = [
  { offset: 0, opacity: "0", transform: "translate3d(-3000px, 0, 0) scaleX(3)" },
  { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.6, opacity: "1", transform: "translate3d(25px, 0, 0) scaleX(1)" },
  { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.75, transform: "translate3d(-10px, 0, 0) scaleX(0.98)" },
  { offset: 0.75, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.9, transform: "translate3d(5px, 0, 0) scaleX(0.995)" },
  { offset: 0.9, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 1, transform: "translate3d(0, 0, 0)" },
  { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
];

// node_modules/@shoelace-style/animations/dist/bouncing_entrances/bounceInRight.js
var bounceInRight = [
  { offset: 0, opacity: "0", transform: "translate3d(3000px, 0, 0) scaleX(3)" },
  { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.6, opacity: "1", transform: "translate3d(-25px, 0, 0) scaleX(1)" },
  { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.75, transform: "translate3d(10px, 0, 0) scaleX(0.98)" },
  { offset: 0.75, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.9, transform: "translate3d(-5px, 0, 0) scaleX(0.995)" },
  { offset: 0.9, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 1, transform: "translate3d(0, 0, 0)" },
  { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
];

// node_modules/@shoelace-style/animations/dist/bouncing_entrances/bounceInUp.js
var bounceInUp = [
  { offset: 0, opacity: "0", transform: "translate3d(0, 3000px, 0) scaleY(5)" },
  { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.6, opacity: "1", transform: "translate3d(0, -20px, 0) scaleY(0.9)" },
  { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.75, transform: "translate3d(0, 10px, 0) scaleY(0.95)" },
  { offset: 0.75, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 0.9, transform: "translate3d(0, -5px, 0) scaleY(0.985)" },
  { offset: 0.9, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
  { offset: 1, transform: "translate3d(0, 0, 0)" },
  { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
];

// node_modules/@shoelace-style/animations/dist/bouncing_exits/bounceOut.js
var bounceOut = [
  { offset: 0.2, transform: "scale3d(0.9, 0.9, 0.9)" },
  { offset: 0.5, opacity: "1", transform: "scale3d(1.1, 1.1, 1.1)" },
  { offset: 0.55, opacity: "1", transform: "scale3d(1.1, 1.1, 1.1)" },
  { offset: 1, opacity: "0", transform: "scale3d(0.3, 0.3, 0.3)" }
];

// node_modules/@shoelace-style/animations/dist/bouncing_exits/bounceOutDown.js
var bounceOutDown = [
  { offset: 0.2, transform: "translate3d(0, 10px, 0) scaleY(0.985)" },
  { offset: 0.4, opacity: "1", transform: "translate3d(0, -20px, 0) scaleY(0.9)" },
  { offset: 0.45, opacity: "1", transform: "translate3d(0, -20px, 0) scaleY(0.9)" },
  { offset: 1, opacity: "0", transform: "translate3d(0, 2000px, 0) scaleY(3)" }
];

// node_modules/@shoelace-style/animations/dist/bouncing_exits/bounceOutLeft.js
var bounceOutLeft = [
  { offset: 0.2, opacity: "1", transform: "translate3d(20px, 0, 0) scaleX(0.9)" },
  { offset: 1, opacity: "0", transform: "translate3d(-2000px, 0, 0) scaleX(2)" }
];

// node_modules/@shoelace-style/animations/dist/bouncing_exits/bounceOutRight.js
var bounceOutRight = [
  { offset: 0.2, opacity: "1", transform: "translate3d(-20px, 0, 0) scaleX(0.9)" },
  { offset: 1, opacity: "0", transform: "translate3d(2000px, 0, 0) scaleX(2)" }
];

// node_modules/@shoelace-style/animations/dist/bouncing_exits/bounceOutUp.js
var bounceOutUp = [
  { offset: 0.2, transform: "translate3d(0, -10px, 0) scaleY(0.985)" },
  { offset: 0.4, opacity: "1", transform: "translate3d(0, 20px, 0) scaleY(0.9)" },
  { offset: 0.45, opacity: "1", transform: "translate3d(0, 20px, 0) scaleY(0.9)" },
  { offset: 1, opacity: "0", transform: "translate3d(0, -2000px, 0) scaleY(3)" }
];

// node_modules/@shoelace-style/animations/dist/fading_entrances/fadeIn.js
var fadeIn = [
  { offset: 0, opacity: "0" },
  { offset: 1, opacity: "1" }
];

// node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInBottomLeft.js
var fadeInBottomLeft = [
  { offset: 0, opacity: "0", transform: "translate3d(-100%, 100%, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInBottomRight.js
var fadeInBottomRight = [
  { offset: 0, opacity: "0", transform: "translate3d(100%, 100%, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInDown.js
var fadeInDown = [
  { offset: 0, opacity: "0", transform: "translate3d(0, -100%, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInDownBig.js
var fadeInDownBig = [
  { offset: 0, opacity: "0", transform: "translate3d(0, -2000px, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInLeft.js
var fadeInLeft = [
  { offset: 0, opacity: "0", transform: "translate3d(-100%, 0, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInLeftBig.js
var fadeInLeftBig = [
  { offset: 0, opacity: "0", transform: "translate3d(-2000px, 0, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInRight.js
var fadeInRight = [
  { offset: 0, opacity: "0", transform: "translate3d(100%, 0, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInRightBig.js
var fadeInRightBig = [
  { offset: 0, opacity: "0", transform: "translate3d(2000px, 0, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInTopLeft.js
var fadeInTopLeft = [
  { offset: 0, opacity: "0", transform: "translate3d(-100%, -100%, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInTopRight.js
var fadeInTopRight = [
  { offset: 0, opacity: "0", transform: "translate3d(100%, -100%, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInUp.js
var fadeInUp = [
  { offset: 0, opacity: "0", transform: "translate3d(0, 100%, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInUpBig.js
var fadeInUpBig = [
  { offset: 0, opacity: "0", transform: "translate3d(0, 2000px, 0)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_exits/fadeOut.js
var fadeOut = [
  { offset: 0, opacity: "1" },
  { offset: 1, opacity: "0" }
];

// node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutBottomLeft.js
var fadeOutBottomLeft = [
  { offset: 0, opacity: "1", transform: "translate3d(0, 0, 0)" },
  { offset: 1, opacity: "0", transform: "translate3d(-100%, 100%, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutBottomRight.js
var fadeOutBottomRight = [
  { offset: 0, opacity: "1", transform: "translate3d(0, 0, 0)" },
  { offset: 1, opacity: "0", transform: "translate3d(100%, 100%, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutDown.js
var fadeOutDown = [
  { offset: 0, opacity: "1" },
  { offset: 1, opacity: "0", transform: "translate3d(0, 100%, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutDownBig.js
var fadeOutDownBig = [
  { offset: 0, opacity: "1" },
  { offset: 1, opacity: "0", transform: "translate3d(0, 2000px, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutLeft.js
var fadeOutLeft = [
  { offset: 0, opacity: "1" },
  { offset: 1, opacity: "0", transform: "translate3d(-100%, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutLeftBig.js
var fadeOutLeftBig = [
  { offset: 0, opacity: "1" },
  { offset: 1, opacity: "0", transform: "translate3d(-2000px, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutRight.js
var fadeOutRight = [
  { offset: 0, opacity: "1" },
  { offset: 1, opacity: "0", transform: "translate3d(100%, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutRightBig.js
var fadeOutRightBig = [
  { offset: 0, opacity: "1" },
  { offset: 1, opacity: "0", transform: "translate3d(2000px, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutTopLeft.js
var fadeOutTopLeft = [
  { offset: 0, opacity: "1", transform: "translate3d(0, 0, 0)" },
  { offset: 1, opacity: "0", transform: "translate3d(-100%, -100%, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutTopRight.js
var fadeOutTopRight = [
  { offset: 0, opacity: "1", transform: "translate3d(0, 0, 0)" },
  { offset: 1, opacity: "0", transform: "translate3d(100%, -100%, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutUp.js
var fadeOutUp = [
  { offset: 0, opacity: "1" },
  { offset: 1, opacity: "0", transform: "translate3d(0, -100%, 0)" }
];

// node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutUpBig.js
var fadeOutUpBig = [
  { offset: 0, opacity: "1" },
  { offset: 1, opacity: "0", transform: "translate3d(0, -2000px, 0)" }
];

// node_modules/@shoelace-style/animations/dist/flippers/flip.js
var flip3 = [
  {
    offset: 0,
    transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",
    easing: "ease-out"
  },
  {
    offset: 0.4,
    transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg)",
    easing: "ease-out"
  },
  {
    offset: 0.5,
    transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg)",
    easing: "ease-in"
  },
  {
    offset: 0.8,
    transform: "perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg)",
    easing: "ease-in"
  },
  {
    offset: 1,
    transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",
    easing: "ease-in"
  }
];

// node_modules/@shoelace-style/animations/dist/flippers/flipInX.js
var flipInX = [
  { offset: 0, transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)", easing: "ease-in", opacity: "0" },
  { offset: 0.4, transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)", easing: "ease-in" },
  { offset: 0.6, transform: "perspective(400px) rotate3d(1, 0, 0, 10deg)", opacity: "1" },
  { offset: 0.8, transform: "perspective(400px) rotate3d(1, 0, 0, -5deg)" },
  { offset: 1, transform: "perspective(400px)" }
];

// node_modules/@shoelace-style/animations/dist/flippers/flipInY.js
var flipInY = [
  { offset: 0, transform: "perspective(400px) rotate3d(0, 1, 0, 90deg)", easing: "ease-in", opacity: "0" },
  { offset: 0.4, transform: "perspective(400px) rotate3d(0, 1, 0, -20deg)", easing: "ease-in" },
  { offset: 0.6, transform: "perspective(400px) rotate3d(0, 1, 0, 10deg)", opacity: "1" },
  { offset: 0.8, transform: "perspective(400px) rotate3d(0, 1, 0, -5deg)" },
  { offset: 1, transform: "perspective(400px)" }
];

// node_modules/@shoelace-style/animations/dist/flippers/flipOutX.js
var flipOutX = [
  { offset: 0, transform: "perspective(400px)" },
  { offset: 0.3, transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)", opacity: "1" },
  { offset: 1, transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)", opacity: "0" }
];

// node_modules/@shoelace-style/animations/dist/flippers/flipOutY.js
var flipOutY = [
  { offset: 0, transform: "perspective(400px)" },
  { offset: 0.3, transform: "perspective(400px) rotate3d(0, 1, 0, -15deg)", opacity: "1" },
  { offset: 1, transform: "perspective(400px) rotate3d(0, 1, 0, 90deg)", opacity: "0" }
];

// node_modules/@shoelace-style/animations/dist/lightspeed/lightSpeedInLeft.js
var lightSpeedInLeft = [
  { offset: 0, transform: "translate3d(-100%, 0, 0) skewX(30deg)", opacity: "0" },
  { offset: 0.6, transform: "skewX(-20deg)", opacity: "1" },
  { offset: 0.8, transform: "skewX(5deg)" },
  { offset: 1, transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/lightspeed/lightSpeedInRight.js
var lightSpeedInRight = [
  { offset: 0, transform: "translate3d(100%, 0, 0) skewX(-30deg)", opacity: "0" },
  { offset: 0.6, transform: "skewX(20deg)", opacity: "1" },
  { offset: 0.8, transform: "skewX(-5deg)" },
  { offset: 1, transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/lightspeed/lightSpeedOutLeft.js
var lightSpeedOutLeft = [
  { offset: 0, opacity: "1" },
  { offset: 1, transform: "translate3d(-100%, 0, 0) skewX(-30deg)", opacity: "0" }
];

// node_modules/@shoelace-style/animations/dist/lightspeed/lightSpeedOutRight.js
var lightSpeedOutRight = [
  { offset: 0, opacity: "1" },
  { offset: 1, transform: "translate3d(100%, 0, 0) skewX(30deg)", opacity: "0" }
];

// node_modules/@shoelace-style/animations/dist/rotating_entrances/rotateIn.js
var rotateIn = [
  { offset: 0, transform: "rotate3d(0, 0, 1, -200deg)", opacity: "0" },
  { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" }
];

// node_modules/@shoelace-style/animations/dist/rotating_entrances/rotateInDownLeft.js
var rotateInDownLeft = [
  { offset: 0, transform: "rotate3d(0, 0, 1, -45deg)", opacity: "0" },
  { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" }
];

// node_modules/@shoelace-style/animations/dist/rotating_entrances/rotateInDownRight.js
var rotateInDownRight = [
  { offset: 0, transform: "rotate3d(0, 0, 1, 45deg)", opacity: "0" },
  { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" }
];

// node_modules/@shoelace-style/animations/dist/rotating_entrances/rotateInUpLeft.js
var rotateInUpLeft = [
  { offset: 0, transform: "rotate3d(0, 0, 1, 45deg)", opacity: "0" },
  { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" }
];

// node_modules/@shoelace-style/animations/dist/rotating_entrances/rotateInUpRight.js
var rotateInUpRight = [
  { offset: 0, transform: "rotate3d(0, 0, 1, -90deg)", opacity: "0" },
  { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" }
];

// node_modules/@shoelace-style/animations/dist/rotating_exits/rotateOut.js
var rotateOut = [
  { offset: 0, opacity: "1" },
  { offset: 1, transform: "rotate3d(0, 0, 1, 200deg)", opacity: "0" }
];

// node_modules/@shoelace-style/animations/dist/rotating_exits/rotateOutDownLeft.js
var rotateOutDownLeft = [
  { offset: 0, opacity: "1" },
  { offset: 1, transform: "rotate3d(0, 0, 1, 45deg)", opacity: "0" }
];

// node_modules/@shoelace-style/animations/dist/rotating_exits/rotateOutDownRight.js
var rotateOutDownRight = [
  { offset: 0, opacity: "1" },
  { offset: 1, transform: "rotate3d(0, 0, 1, -45deg)", opacity: "0" }
];

// node_modules/@shoelace-style/animations/dist/rotating_exits/rotateOutUpLeft.js
var rotateOutUpLeft = [
  { offset: 0, opacity: "1" },
  { offset: 1, transform: "rotate3d(0, 0, 1, -45deg)", opacity: "0" }
];

// node_modules/@shoelace-style/animations/dist/rotating_exits/rotateOutUpRight.js
var rotateOutUpRight = [
  { offset: 0, opacity: "1" },
  { offset: 1, transform: "rotate3d(0, 0, 1, 90deg)", opacity: "0" }
];

// node_modules/@shoelace-style/animations/dist/sliding_entrances/slideInDown.js
var slideInDown = [
  { offset: 0, transform: "translate3d(0, -100%, 0)", visibility: "visible" },
  { offset: 1, transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/sliding_entrances/slideInLeft.js
var slideInLeft = [
  { offset: 0, transform: "translate3d(-100%, 0, 0)", visibility: "visible" },
  { offset: 1, transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/sliding_entrances/slideInRight.js
var slideInRight = [
  { offset: 0, transform: "translate3d(100%, 0, 0)", visibility: "visible" },
  { offset: 1, transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/sliding_entrances/slideInUp.js
var slideInUp = [
  { offset: 0, transform: "translate3d(0, 100%, 0)", visibility: "visible" },
  { offset: 1, transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/sliding_exits/slideOutDown.js
var slideOutDown = [
  { offset: 0, transform: "translate3d(0, 0, 0)" },
  { offset: 1, visibility: "hidden", transform: "translate3d(0, 100%, 0)" }
];

// node_modules/@shoelace-style/animations/dist/sliding_exits/slideOutLeft.js
var slideOutLeft = [
  { offset: 0, transform: "translate3d(0, 0, 0)" },
  { offset: 1, visibility: "hidden", transform: "translate3d(-100%, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/sliding_exits/slideOutRight.js
var slideOutRight = [
  { offset: 0, transform: "translate3d(0, 0, 0)" },
  { offset: 1, visibility: "hidden", transform: "translate3d(100%, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/sliding_exits/slideOutUp.js
var slideOutUp = [
  { offset: 0, transform: "translate3d(0, 0, 0)" },
  { offset: 1, visibility: "hidden", transform: "translate3d(0, -100%, 0)" }
];

// node_modules/@shoelace-style/animations/dist/specials/hinge.js
var hinge = [
  { offset: 0, easing: "ease-in-out" },
  { offset: 0.2, transform: "rotate3d(0, 0, 1, 80deg)", easing: "ease-in-out" },
  { offset: 0.4, transform: "rotate3d(0, 0, 1, 60deg)", easing: "ease-in-out", opacity: "1" },
  { offset: 0.6, transform: "rotate3d(0, 0, 1, 80deg)", easing: "ease-in-out" },
  { offset: 0.8, transform: "rotate3d(0, 0, 1, 60deg)", easing: "ease-in-out", opacity: "1" },
  { offset: 1, transform: "translate3d(0, 700px, 0)", opacity: "0" }
];

// node_modules/@shoelace-style/animations/dist/specials/jackInTheBox.js
var jackInTheBox = [
  { offset: 0, opacity: "0", transform: "scale(0.1) rotate(30deg)", "transform-origin": "center bottom" },
  { offset: 0.5, transform: "rotate(-10deg)" },
  { offset: 0.7, transform: "rotate(3deg)" },
  { offset: 1, opacity: "1", transform: "scale(1)" }
];

// node_modules/@shoelace-style/animations/dist/specials/rollIn.js
var rollIn = [
  { offset: 0, opacity: "0", transform: "translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)" },
  { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/specials/rollOut.js
var rollOut = [
  { offset: 0, opacity: "1" },
  { offset: 1, opacity: "0", transform: "translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)" }
];

// node_modules/@shoelace-style/animations/dist/zooming_entrances/zoomIn.js
var zoomIn = [
  { offset: 0, opacity: "0", transform: "scale3d(0.3, 0.3, 0.3)" },
  { offset: 0.5, opacity: "1" }
];

// node_modules/@shoelace-style/animations/dist/zooming_entrances/zoomInDown.js
var zoomInDown = [
  {
    offset: 0,
    opacity: "0",
    transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",
    easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
  },
  {
    offset: 0.6,
    opacity: "1",
    transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
  }
];

// node_modules/@shoelace-style/animations/dist/zooming_entrances/zoomInLeft.js
var zoomInLeft = [
  {
    offset: 0,
    opacity: "0",
    transform: "scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",
    easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
  },
  {
    offset: 0.6,
    opacity: "1",
    transform: "scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
  }
];

// node_modules/@shoelace-style/animations/dist/zooming_entrances/zoomInRight.js
var zoomInRight = [
  {
    offset: 0,
    opacity: "0",
    transform: "scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",
    easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
  },
  {
    offset: 0.6,
    opacity: "1",
    transform: "scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
  }
];

// node_modules/@shoelace-style/animations/dist/zooming_entrances/zoomInUp.js
var zoomInUp = [
  {
    offset: 0,
    opacity: "0",
    transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",
    easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
  },
  {
    offset: 0.6,
    opacity: "1",
    transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
  }
];

// node_modules/@shoelace-style/animations/dist/zooming_exits/zoomOut.js
var zoomOut = [
  { offset: 0, opacity: "1" },
  { offset: 0.5, opacity: "0", transform: "scale3d(0.3, 0.3, 0.3)" },
  { offset: 1, opacity: "0" }
];

// node_modules/@shoelace-style/animations/dist/zooming_exits/zoomOutDown.js
var zoomOutDown = [
  {
    offset: 0.4,
    opacity: "1",
    transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
    easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
  },
  {
    offset: 1,
    opacity: "0",
    transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
  }
];

// node_modules/@shoelace-style/animations/dist/zooming_exits/zoomOutLeft.js
var zoomOutLeft = [
  { offset: 0.4, opacity: "1", transform: "scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)" },
  { offset: 1, opacity: "0", transform: "scale(0.1) translate3d(-2000px, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/zooming_exits/zoomOutRight.js
var zoomOutRight = [
  { offset: 0.4, opacity: "1", transform: "scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)" },
  { offset: 1, opacity: "0", transform: "scale(0.1) translate3d(2000px, 0, 0)" }
];

// node_modules/@shoelace-style/animations/dist/zooming_exits/zoomOutUp.js
var zoomOutUp = [
  {
    offset: 0.4,
    opacity: "1",
    transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
    easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
  },
  {
    offset: 1,
    opacity: "0",
    transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
  }
];

// node_modules/@shoelace-style/animations/dist/easings/easings.js
var easings = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  easeInSine: "cubic-bezier(0.47, 0, 0.745, 0.715)",
  easeOutSine: "cubic-bezier(0.39, 0.575, 0.565, 1)",
  easeInOutSine: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
  easeInQuad: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
  easeOutQuad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  easeInOutQuad: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
  easeInCubic: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
  easeOutCubic: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  easeInQuart: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
  easeOutQuart: "cubic-bezier(0.165, 0.84, 0.44, 1)",
  easeInOutQuart: "cubic-bezier(0.77, 0, 0.175, 1)",
  easeInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  easeOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  easeInOutQuint: "cubic-bezier(0.86, 0, 0.07, 1)",
  easeInExpo: "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
  easeOutExpo: "cubic-bezier(0.19, 1, 0.22, 1)",
  easeInOutExpo: "cubic-bezier(1, 0, 0, 1)",
  easeInCirc: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
  easeOutCirc: "cubic-bezier(0.075, 0.82, 0.165, 1)",
  easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
  easeInBack: "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
  easeOutBack: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  easeInOutBack: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
};

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.E6LZDPMH.js
var SlAnimation = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.hasStarted = false;
    this.name = "none";
    this.play = false;
    this.delay = 0;
    this.direction = "normal";
    this.duration = 1e3;
    this.easing = "linear";
    this.endDelay = 0;
    this.fill = "auto";
    this.iterations = Infinity;
    this.iterationStart = 0;
    this.playbackRate = 1;
    this.handleAnimationFinish = () => {
      this.play = false;
      this.hasStarted = false;
      this.emit("sl-finish");
    };
    this.handleAnimationCancel = () => {
      this.play = false;
      this.hasStarted = false;
      this.emit("sl-cancel");
    };
  }
  /** Gets and sets the current animation time. */
  get currentTime() {
    var _a, _b;
    return (_b = (_a = this.animation) == null ? void 0 : _a.currentTime) != null ? _b : 0;
  }
  set currentTime(time) {
    if (this.animation) {
      this.animation.currentTime = time;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.createAnimation();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.destroyAnimation();
  }
  handleSlotChange() {
    this.destroyAnimation();
    this.createAnimation();
  }
  async createAnimation() {
    var _a, _b;
    const easing = (_a = dist_exports.easings[this.easing]) != null ? _a : this.easing;
    const keyframes = (_b = this.keyframes) != null ? _b : dist_exports[this.name];
    const slot = await this.defaultSlot;
    const element = slot.assignedElements()[0];
    if (!element || !keyframes) {
      return false;
    }
    this.destroyAnimation();
    this.animation = element.animate(keyframes, {
      delay: this.delay,
      direction: this.direction,
      duration: this.duration,
      easing,
      endDelay: this.endDelay,
      fill: this.fill,
      iterationStart: this.iterationStart,
      iterations: this.iterations
    });
    this.animation.playbackRate = this.playbackRate;
    this.animation.addEventListener("cancel", this.handleAnimationCancel);
    this.animation.addEventListener("finish", this.handleAnimationFinish);
    if (this.play) {
      this.hasStarted = true;
      this.emit("sl-start");
    } else {
      this.animation.pause();
    }
    return true;
  }
  destroyAnimation() {
    if (this.animation) {
      this.animation.cancel();
      this.animation.removeEventListener("cancel", this.handleAnimationCancel);
      this.animation.removeEventListener("finish", this.handleAnimationFinish);
      this.hasStarted = false;
    }
  }
  handleAnimationChange() {
    if (!this.hasUpdated) {
      return;
    }
    this.createAnimation();
  }
  handlePlayChange() {
    if (this.animation) {
      if (this.play && !this.hasStarted) {
        this.hasStarted = true;
        this.emit("sl-start");
      }
      if (this.play) {
        this.animation.play();
      } else {
        this.animation.pause();
      }
      return true;
    }
    return false;
  }
  handlePlaybackRateChange() {
    if (this.animation) {
      this.animation.playbackRate = this.playbackRate;
    }
  }
  /** Clears all keyframe effects caused by this animation and aborts its playback. */
  cancel() {
    var _a;
    (_a = this.animation) == null ? void 0 : _a.cancel();
  }
  /** Sets the playback time to the end of the animation corresponding to the current playback direction. */
  finish() {
    var _a;
    (_a = this.animation) == null ? void 0 : _a.finish();
  }
  render() {
    return x` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }
};
SlAnimation.styles = [component_styles_default, animation_styles_default];
__decorateClass([
  r7("slot")
], SlAnimation.prototype, "defaultSlot", 2);
__decorateClass([
  n4()
], SlAnimation.prototype, "name", 2);
__decorateClass([
  n4({ type: Boolean, reflect: true })
], SlAnimation.prototype, "play", 2);
__decorateClass([
  n4({ type: Number })
], SlAnimation.prototype, "delay", 2);
__decorateClass([
  n4()
], SlAnimation.prototype, "direction", 2);
__decorateClass([
  n4({ type: Number })
], SlAnimation.prototype, "duration", 2);
__decorateClass([
  n4()
], SlAnimation.prototype, "easing", 2);
__decorateClass([
  n4({ attribute: "end-delay", type: Number })
], SlAnimation.prototype, "endDelay", 2);
__decorateClass([
  n4()
], SlAnimation.prototype, "fill", 2);
__decorateClass([
  n4({ type: Number })
], SlAnimation.prototype, "iterations", 2);
__decorateClass([
  n4({ attribute: "iteration-start", type: Number })
], SlAnimation.prototype, "iterationStart", 2);
__decorateClass([
  n4({ attribute: false })
], SlAnimation.prototype, "keyframes", 2);
__decorateClass([
  n4({ attribute: "playback-rate", type: Number })
], SlAnimation.prototype, "playbackRate", 2);
__decorateClass([
  watch([
    "name",
    "delay",
    "direction",
    "duration",
    "easing",
    "endDelay",
    "fill",
    "iterations",
    "iterationsStart",
    "keyframes"
  ])
], SlAnimation.prototype, "handleAnimationChange", 1);
__decorateClass([
  watch("play")
], SlAnimation.prototype, "handlePlayChange", 1);
__decorateClass([
  watch("playbackRate")
], SlAnimation.prototype, "handlePlaybackRateChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2QIICALX.js
var React57 = __toESM(require_react(), 1);
var tagName57 = "sl-animation";
SlAnimation.define("sl-animation");
var reactWrapper57 = o7({
  tagName: tagName57,
  elementClass: SlAnimation,
  react: React57,
  events: {
    onSlCancel: "sl-cancel",
    onSlFinish: "sl-finish",
    onSlStart: "sl-start"
  },
  displayName: "SlAnimation"
});
var animation_default = reactWrapper57;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P4NYDBZP.js
var breadcrumb_styles_default = i`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NHYUPGPP.js
var SlBreadcrumb = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
    this.separatorDir = this.localize.dir();
    this.label = "";
  }
  // Generates a clone of the separator element to use for each breadcrumb item
  getSeparator() {
    const separator = this.separatorSlot.assignedElements({ flatten: true })[0];
    const clone = separator.cloneNode(true);
    [clone, ...clone.querySelectorAll("[id]")].forEach((el) => el.removeAttribute("id"));
    clone.setAttribute("data-default", "");
    clone.slot = "separator";
    return clone;
  }
  handleSlotChange() {
    const items = [...this.defaultSlot.assignedElements({ flatten: true })].filter(
      (item) => item.tagName.toLowerCase() === "sl-breadcrumb-item"
    );
    items.forEach((item, index) => {
      const separator = item.querySelector('[slot="separator"]');
      if (separator === null) {
        item.append(this.getSeparator());
      } else if (separator.hasAttribute("data-default")) {
        separator.replaceWith(this.getSeparator());
      } else {
      }
      if (index === items.length - 1) {
        item.setAttribute("aria-current", "page");
      } else {
        item.removeAttribute("aria-current");
      }
    });
  }
  render() {
    if (this.separatorDir !== this.localize.dir()) {
      this.separatorDir = this.localize.dir();
      this.updateComplete.then(() => this.handleSlotChange());
    }
    return x`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir() === "rtl" ? "chevron-left" : "chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `;
  }
};
SlBreadcrumb.styles = [component_styles_default, breadcrumb_styles_default];
SlBreadcrumb.dependencies = { "sl-icon": SlIcon };
__decorateClass([
  e5("slot")
], SlBreadcrumb.prototype, "defaultSlot", 2);
__decorateClass([
  e5('slot[name="separator"]')
], SlBreadcrumb.prototype, "separatorSlot", 2);
__decorateClass([
  n4()
], SlBreadcrumb.prototype, "label", 2);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2PMFHLS5.js
var React58 = __toESM(require_react(), 1);
var tagName58 = "sl-breadcrumb";
SlBreadcrumb.define("sl-breadcrumb");
var reactWrapper58 = o7({
  tagName: tagName58,
  elementClass: SlBreadcrumb,
  react: React58,
  events: {},
  displayName: "SlBreadcrumb"
});
var breadcrumb_default = reactWrapper58;
export {
  alert_default as SlAlert,
  animated_image_default as SlAnimatedImage,
  animation_default as SlAnimation,
  avatar_default as SlAvatar,
  badge_default as SlBadge,
  breadcrumb_default as SlBreadcrumb,
  breadcrumb_item_default as SlBreadcrumbItem,
  button_default as SlButton,
  button_group_default as SlButtonGroup,
  card_default as SlCard,
  carousel_default as SlCarousel,
  carousel_item_default as SlCarouselItem,
  checkbox_default as SlCheckbox,
  color_picker_default as SlColorPicker,
  copy_button_default as SlCopyButton,
  details_default as SlDetails,
  dialog_default as SlDialog,
  divider_default as SlDivider,
  drawer_default as SlDrawer,
  dropdown_default as SlDropdown,
  format_bytes_default as SlFormatBytes,
  format_date_default as SlFormatDate,
  format_number_default as SlFormatNumber,
  icon_default as SlIcon,
  icon_button_default as SlIconButton,
  image_comparer_default as SlImageComparer,
  include_default as SlInclude,
  input_default as SlInput,
  menu_default as SlMenu,
  menu_item_default as SlMenuItem,
  menu_label_default as SlMenuLabel,
  mutation_observer_default as SlMutationObserver,
  option_default as SlOption,
  popup_default as SlPopup,
  progress_bar_default as SlProgressBar,
  progress_ring_default as SlProgressRing,
  qr_code_default as SlQrCode,
  radio_default as SlRadio,
  radio_button_default as SlRadioButton,
  radio_group_default as SlRadioGroup,
  range_default as SlRange,
  rating_default as SlRating,
  relative_time_default as SlRelativeTime,
  resize_observer_default as SlResizeObserver,
  select_default as SlSelect,
  skeleton_default as SlSkeleton,
  spinner_default as SlSpinner,
  split_panel_default as SlSplitPanel,
  switch_default as SlSwitch,
  tab_default as SlTab,
  tab_group_default as SlTabGroup,
  tab_panel_default as SlTabPanel,
  tag_default as SlTag,
  textarea_default as SlTextarea,
  tooltip_default as SlTooltip,
  tree_default as SlTree,
  tree_item_default as SlTreeItem,
  visually_hidden_default as SlVisuallyHidden
};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/react/create-component.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/range.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/build/_shared/react-ISEYSYZD.js.map
