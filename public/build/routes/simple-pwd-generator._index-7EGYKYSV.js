import {
  PageWithDrawer,
  useTheme
} from "/build/_shared/chunk-GX5QH64Y.js";
import {
  ShoelaceContext
} from "/build/_shared/chunk-WVWEAPAP.js";
import {
  Link
} from "/build/_shared/chunk-MBEN6P25.js";
import {
  createHotContext
} from "/build/_shared/chunk-YW5NJ4SB.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/simple-pwd-generator._index.tsx
var import_react2 = __toESM(require_react(), 1);

// app/assets/img/pw-mac-1.png
var pw_mac_1_default = "/build/_assets/pw-mac-1-HUMCCKZZ.png";

// app/assets/img/pw-mac-2.png
var pw_mac_2_default = "/build/_assets/pw-mac-2-J5QRB7BS.png";

// app/assets/img/pw-mac-3.png
var pw_mac_3_default = "/build/_assets/pw-mac-3-7UL72WLC.png";

// app/assets/img/pw-mac-4.png
var pw_mac_4_default = "/build/_assets/pw-mac-4-UFKYYMVC.png";

// app/routes/simple-pwd-generator._index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/simple-pwd-generator._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/simple-pwd-generator._index.tsx"
  );
  import.meta.hot.lastModified = "1723421012656.4917";
}
var meta = () => {
  return [{
    title: "simple-pwd-generator"
  }, {
    property: "og:title",
    content: "simple-pwd-generator"
  }];
};
function SimplePwdGeneratorHome() {
  _s();
  const {
    theme
  } = useTheme();
  const {
    SlCarousel,
    SlCarouselItem
  } = (0, import_react2.useContext)(ShoelaceContext);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageWithDrawer, { title: "simple-pwd-generator", mainChildren: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold", children: "About" }, void 0, false, {
      fileName: "app/routes/simple-pwd-generator._index.tsx",
      lineNumber: 49,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "This is a simple password generator. It is a work in progress and will be updated over time. I saw that there were other password generators but none were open source. The code fore this project is available on",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: `link link-hover underline ${theme === "sl-theme-dark" ? "link-accent" : "link-primary"}`, to: "https://github.com/eselkin/simple-pwd-generator", children: "GitHub" }, void 0, false, {
        fileName: "app/routes/simple-pwd-generator._index.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/simple-pwd-generator._index.tsx",
      lineNumber: 50,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold mt-4 md:mt-6", children: "Features" }, void 0, false, {
      fileName: "app/routes/simple-pwd-generator._index.tsx",
      lineNumber: 59,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "list list-disc pl-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "generate random character passwords" }, void 0, false, {
        fileName: "app/routes/simple-pwd-generator._index.tsx",
        lineNumber: 62,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "generate random word passwords" }, void 0, false, {
        fileName: "app/routes/simple-pwd-generator._index.tsx",
        lineNumber: 63,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "options for English and/or Spanish dictionaries" }, void 0, false, {
        fileName: "app/routes/simple-pwd-generator._index.tsx",
        lineNumber: 64,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "configurable special characters" }, void 0, false, {
        fileName: "app/routes/simple-pwd-generator._index.tsx",
        lineNumber: 65,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/simple-pwd-generator._index.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/simple-pwd-generator._index.tsx",
      lineNumber: 60,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-11/12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SlCarousel, { loop: true, autoplay: true, navigation: true, pagination: true, mouseDragging: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SlCarouselItem, { className: "m-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: pw_mac_1_default, alt: "unselected password type", className: "h-full" }, void 0, false, {
        fileName: "app/routes/simple-pwd-generator._index.tsx",
        lineNumber: 71,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/simple-pwd-generator._index.tsx",
        lineNumber: 70,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SlCarouselItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: pw_mac_2_default, alt: "character password", className: "w-full" }, void 0, false, {
        fileName: "app/routes/simple-pwd-generator._index.tsx",
        lineNumber: 74,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/simple-pwd-generator._index.tsx",
        lineNumber: 73,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SlCarouselItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: pw_mac_3_default, alt: "word password type", className: "w-full" }, void 0, false, {
        fileName: "app/routes/simple-pwd-generator._index.tsx",
        lineNumber: 77,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/simple-pwd-generator._index.tsx",
        lineNumber: 76,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SlCarouselItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: pw_mac_4_default, alt: "settings", className: "w-full" }, void 0, false, {
        fileName: "app/routes/simple-pwd-generator._index.tsx",
        lineNumber: 80,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/simple-pwd-generator._index.tsx",
        lineNumber: 79,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/simple-pwd-generator._index.tsx",
      lineNumber: 69,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/simple-pwd-generator._index.tsx",
      lineNumber: 68,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold mt-4 md:mt-6", children: "Privacy" }, void 0, false, {
      fileName: "app/routes/simple-pwd-generator._index.tsx",
      lineNumber: 84,
      columnNumber: 11
    }, this),
    "We don't record or store any information about your passwords you generate or your system besides the data that apple already collects on downloads. A full privacy policy is available",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: `link link-hover underline ${theme === "sl-theme-dark" ? "link-accent" : "link-primary"}`, to: "/simple-pwd-generator/privacy", children: "here" }, void 0, false, {
      fileName: "app/routes/simple-pwd-generator._index.tsx",
      lineNumber: 88,
      columnNumber: 11
    }, this),
    "."
  ] }, void 0, true, {
    fileName: "app/routes/simple-pwd-generator._index.tsx",
    lineNumber: 48,
    columnNumber: 69
  }, this), additionalMenuItems: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row space-x-2 items-center justify-center" }, void 0, false, {
    fileName: "app/routes/simple-pwd-generator._index.tsx",
    lineNumber: 92,
    columnNumber: 35
  }, this) }, void 0, false, {
    fileName: "app/routes/simple-pwd-generator._index.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
_s(SimplePwdGeneratorHome, "1duGiKi3VkMBghPiPdvsO/nz+y4=", false, function() {
  return [useTheme];
});
_c = SimplePwdGeneratorHome;
var _c;
$RefreshReg$(_c, "SimplePwdGeneratorHome");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SimplePwdGeneratorHome as default,
  meta
};
//# sourceMappingURL=/build/routes/simple-pwd-generator._index-7EGYKYSV.js.map
