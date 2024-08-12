import {
  PageWithDrawer,
  useTheme
} from "/build/_shared/chunk-GX5QH64Y.js";
import "/build/_shared/chunk-WVWEAPAP.js";
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
import "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Home.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Home.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Home.tsx"
  );
  import.meta.hot.lastModified = "1722617342929.4932";
}
function Home() {
  _s();
  const {
    theme
  } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "I'm Eli, founder of",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: `link link-hover underline ${theme === "sl-theme-dark" ? "link-accent" : "link-primary"} `, to: "https://extendtherapy.com", children: "ExtendTherapy" }, void 0, false, {
        fileName: "app/components/Home.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      " ",
      "and cofounder of several other technology companies (Upful, Kopanya, etc.)."
    ] }, void 0, true, {
      fileName: "app/components/Home.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Coming soon... blog/whitepapers, talks, and a revamped resume." }, void 0, false, {
      fileName: "app/components/Home.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Home.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_s(Home, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
  return [useTheme];
});
_c = Home;
var _c;
$RefreshReg$(_c, "Home");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1722281228919.0364";
}
var meta = () => {
  return [{
    title: "Eli Selkin"
  }, {
    property: "og:title",
    content: "Eli Selkin"
  }];
};
function Main() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PageWithDrawer, { title: "Welcome", mainChildren: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Home, {}, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 32,
    columnNumber: 56
  }, this), additionalMenuItems: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-row space-x-2 items-center justify-center" }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 32,
    columnNumber: 87
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c2 = Main;
var _c2;
$RefreshReg$(_c2, "Main");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Main as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-N66HDTFZ.js.map
