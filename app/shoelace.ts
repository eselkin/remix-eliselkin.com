import {
  SlButton,
  SlDrawer,
  SlIcon,
  SlInput,
  SlTab,
  SlTabGroup,
  SlTabPanel,
  SlSelect,
  SlOption,
  SlDropdown,
  SlMenu,
  SlMenuItem,
  SlMenuLabel,
  SlAvatar,
  SlCard,
  SlIconButton,
  SlTooltip,
  SlCheckbox,
  SlDivider,
  SlAlert,
  SlSpinner,
  SlSwitch,
  SlDetails,
  SlCarousel,
  SlCarouselItem,
} from "@shoelace-style/shoelace/dist/react";
import { createContext, useEffect, useRef, useState } from "react";

const nullComponent = () => null;

type ShoelaceComponents = {
  SlButton: typeof nullComponent | typeof SlButton;
  SlInput: typeof nullComponent | typeof SlInput;
  SlDrawer: typeof nullComponent | typeof SlDrawer;
  SlIcon: typeof nullComponent | typeof SlIcon;
  SlTabGroup: typeof nullComponent | typeof SlTabGroup;
  SlTab: typeof nullComponent | typeof SlTab;
  SlTabPanel: typeof nullComponent | typeof SlTabPanel;
  SlSelect: typeof nullComponent | typeof SlSelect;
  SlOption: typeof nullComponent | typeof SlOption;
  SlDropdown: typeof nullComponent | typeof SlDropdown;
  SlMenu: typeof nullComponent | typeof SlMenu;
  SlMenuItem: typeof nullComponent | typeof SlMenuItem;
  SlMenuLabel: typeof nullComponent | typeof SlMenuLabel;
  SlAvatar: typeof nullComponent | typeof SlAvatar;
  SlCard: typeof nullComponent | typeof SlCard;
  SlIconButton: typeof nullComponent | typeof SlIconButton;
  SlTooltip: typeof nullComponent | typeof SlTooltip;
  SlCheckbox: typeof nullComponent | typeof SlCheckbox;
  SlDivider: typeof nullComponent | typeof SlDivider;
  SlAlert: typeof nullComponent | typeof SlAlert;
  SlSpinner: typeof nullComponent | typeof SlSpinner;
  SlSwitch: typeof nullComponent | typeof SlSwitch;
  SlDetails: typeof nullComponent | typeof SlDetails;
  SlCarousel: typeof nullComponent | typeof SlCarousel;
  SlCarouselItem: typeof nullComponent | typeof SlCarouselItem;
};

const nullComponents: ShoelaceComponents = {
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
  SlCarouselItem: () => null,
};

export const ShoelaceContext = createContext(nullComponents);

export function useShoelace({ URL }: { URL: string }) {
  const loaded = useRef(false);

  const [components, setComponents] =
    useState<ShoelaceComponents>(nullComponents);

  useEffect(() => {
    if (loaded.current) {
      return;
    }

    loaded.current = true;

    import("@shoelace-style/shoelace/dist/utilities/base-path.js").then(
      async ({ setBasePath }) => {
        setBasePath(`${URL}/shoelace`);

        import("@shoelace-style/shoelace/dist/react").then((result) => {
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
            SlCarouselItem: result.SlCarouselItem,
          });
        });
      }
    );
  }, [URL]);

  return components;
}
