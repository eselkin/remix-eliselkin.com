import {
  createHotContext
} from "/build/_shared/chunk-YW5NJ4SB.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/shoelace.ts
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/shoelace.ts"
  );
  import.meta.hot.lastModified = "1723419084187.9653";
}
var nullComponents = {
  SlButton: () => null,
  SlInput: () => null,
  SlDrawer: () => null,
  SlIcon: () => null,
  SlTabGroup: () => null,
  SlTab: () => null,
  SlTabPanel: () => null,
  SlSelect: () => null,
  SlOption: () => null,
  SlDropdown: () => null,
  SlMenu: () => null,
  SlMenuItem: () => null,
  SlMenuLabel: () => null,
  SlAvatar: () => null,
  SlCard: () => null,
  SlIconButton: () => null,
  SlTooltip: () => null,
  SlCheckbox: () => null,
  SlDivider: () => null,
  SlAlert: () => null,
  SlSpinner: () => null,
  SlSwitch: () => null,
  SlDetails: () => null,
  SlCarousel: () => null,
  SlCarouselItem: () => null
};
var ShoelaceContext = (0, import_react.createContext)(nullComponents);
function useShoelace({ URL }) {
  const loaded = (0, import_react.useRef)(false);
  const [components, setComponents] = (0, import_react.useState)(nullComponents);
  (0, import_react.useEffect)(() => {
    if (loaded.current) {
      return;
    }
    loaded.current = true;
    import("/build/_shared/base-path-SSZM7ZI6.js").then(
      async ({ setBasePath }) => {
        setBasePath(`${URL}/shoelace`);
        import("/build/_shared/react-ISEYSYZD.js").then((result) => {
          setComponents({
            SlButton: result.SlButton,
            SlInput: result.SlInput,
            SlDrawer: result.SlDrawer,
            SlIcon: result.SlIcon,
            SlTabGroup: result.SlTabGroup,
            SlTab: result.SlTab,
            SlTabPanel: result.SlTabPanel,
            SlSelect: result.SlSelect,
            SlOption: result.SlOption,
            SlDropdown: result.SlDropdown,
            SlMenu: result.SlMenu,
            SlMenuItem: result.SlMenuItem,
            SlMenuLabel: result.SlMenuLabel,
            SlAvatar: result.SlAvatar,
            SlCard: result.SlCard,
            SlIconButton: result.SlIconButton,
            SlTooltip: result.SlTooltip,
            SlCheckbox: result.SlCheckbox,
            SlDivider: result.SlDivider,
            SlAlert: result.SlAlert,
            SlSpinner: result.SlSpinner,
            SlSwitch: result.SlSwitch,
            SlDetails: result.SlDetails,
            SlCarousel: result.SlCarousel,
            SlCarouselItem: result.SlCarouselItem
          });
        });
      }
    );
  }, [URL]);
  return components;
}

export {
  ShoelaceContext,
  useShoelace
};
//# sourceMappingURL=/build/_shared/chunk-WVWEAPAP.js.map
