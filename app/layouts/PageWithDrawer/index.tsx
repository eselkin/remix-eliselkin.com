import { Link, useFetcher, useNavigate } from "@remix-run/react";
import { useContext, useEffect, useState } from "react";
import { ShoelaceContext } from "~/shoelace";
import PageDrawer from "./PageDrawer";
import { useTheme } from "~/zustand";

export type PageWithDrawerProps = {
  drawerChildren?: React.ReactNode[]; // array of <li> elements
  mainChildren?: React.ReactNode;
  additionalMenuItems?: React.ReactNode;
  title?: string;
};

export default function PageWithDrawer({
  drawerChildren,
  mainChildren,
  additionalMenuItems,
  title,
}: PageWithDrawerProps) {
  const navigate = useNavigate();
  const [open, setStateOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const {
    SlDropdown,
    SlIconButton,
    SlMenu,
    SlMenuItem,
    SlMenuLabel,
    SlAvatar,
    SlIcon,
    SlSwitch,
  } = useContext(ShoelaceContext);

  const setOpen = (state: boolean) => {
    setStateOpen(state);
  };

  return (
    <>
      <PageDrawer open={open} setOpen={setOpen} />
      <div className={`${theme} h-full min-h-[100vh] m-0 p-0`} key={theme}>
        <div className="navbar">
          <div className="flex-1">
            <SlIconButton
              name="list"
              onClick={() => setStateOpen((open) => !open)}
              className="text-3xl font-extrabold"
            />
            <Link to="/" className="btn btn-ghost text-xl">
              <span className="hidden lg:block">eliselkin</span>
            </Link>
          </div>
          <div className="">{additionalMenuItems}</div>
          <div className="">
            <SlIcon name="brightness-high" className="text-2xl mr-2" />
            <SlSwitch
              checked={theme === "sl-theme-dark"}
              onSlChange={() => toggleTheme()}
            />
            <SlIcon name="moon" className="text-2xl ml-0.5" />
          </div>
        </div>
        <div className="main-children scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-600">
          {!!title && <h1 className="text-3xl font-bold mb-8">{title}</h1>}
          {mainChildren}
        </div>
      </div>
    </>
  );
}
