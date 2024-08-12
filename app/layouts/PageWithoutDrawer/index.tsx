import { Bars3Icon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Link, useFetcher, useNavigate } from "@remix-run/react";
import { SerializedUser } from "~/utils/types";
import ET from "~/components/icons/ExtendTherapy";
import { useRecoilState, useRecoilValue } from "recoil";
import { darkModeState, slThemeClass } from "~/recoil";
import { useContext, useEffect, useState } from "react";
import { ShoelaceContext } from "~/shoelace";
import extendTherapy from "~/assets/svg/extendTherapy.svg";
import FooterSection from "~/components/Home/Footer";
import { useTheme } from "~/zustand";

/* eslint-disable jsx-a11y/label-has-associated-control */

export type PageWithoutDrawerProps = {
  drawerChildren?: React.ReactNode[]; // array of <li> elements
  mainChildren?: React.ReactNode;
  additionalMenuItems?: React.ReactNode;
  user?: SerializedUser;
  title?: string;
};

export default function PageWithDrawer({
  drawerChildren,
  mainChildren,
  additionalMenuItems,
  user,
  title,
}: PageWithDrawerProps) {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const { theme } = useTheme();
  const logoutFetcher = useFetcher();
  const {
    SlDropdown,
    SlButton,
    SlMenu,
    SlMenuItem,
    SlMenuLabel,
    SlAvatar,
    SlIcon,
    SlDivider,
  } = useContext(ShoelaceContext);

  return (
    <div className={`drawer ${theme} h-full min-h-[100vh] m-0 p-0`} key={theme}>
      <input id="app-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="navbar">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">
              <ET className="h-10 w-auto" />{" "}
              <span className="hidden lg:block">extendTherapy</span>
            </Link>
          </div>
          <div className="mr-4">{additionalMenuItems}</div>
          <SlDropdown>
            <SlButton slot="trigger" caret>
              <SlIcon name="gear-fill" />
            </SlButton>
            <SlMenu
              className="w-48"
              onSlSelect={(e) => {
                switch (e.detail.item.value) {
                  case "darkmode":
                    setDarkMode((dm) => (dm === "off" ? "on" : "off"));
                }
              }}
            >
              <SlMenuItem value="darkmode" className="w-full">
                {darkMode === "on" ? (
                  <>
                    <SlIcon slot="suffix" name="sun-fill" />
                    Light theme
                  </>
                ) : (
                  <>
                    <SlIcon slot="suffix" name="moon-fill" />
                    Dark theme
                  </>
                )}
              </SlMenuItem>
            </SlMenu>
          </SlDropdown>
        </div>
        <div className="main-children-base">
          {!!title && <h1 className="text-3xl font-bold">{title}</h1>}
          {mainChildren}
        </div>
        <FooterSection />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="app-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu  w-80 min-h-full  text-base-content">
          {drawerChildren}
        </ul>
      </div>
    </div>
  );
}
