import { Link, useNavigate } from "@remix-run/react";
import { useContext } from "react";
import { ShoelaceContext } from "~/shoelace";
import { useTheme } from "~/zustand";

export default function PageDrawer({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (state: boolean) => void;
}) {
  const { SlDrawer, SlMenuItem } = useContext(ShoelaceContext);
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <SlDrawer
      placement="start"
      open={open}
      onSlAfterHide={() => setOpen(false)}
      className={`${theme}`}
    >
      <SlMenuItem onClick={() => navigate("/")}>About Eli</SlMenuItem>
      <SlMenuItem onClick={() => navigate("/resume")}>Resume</SlMenuItem>
      <SlMenuItem onClick={() => navigate("/simple-pwd-generator")}>
        App: simple-pwd-generator
      </SlMenuItem>
    </SlDrawer>
  );
}
