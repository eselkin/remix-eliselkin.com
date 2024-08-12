import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Home from "~/components/Home";
import PageWithDrawer from "~/layouts/PageWithDrawer";

export const meta: MetaFunction = () => {
  return [
    { title: "Eli Selkin" },
    {
      property: "og:title",
      content: "Eli Selkin",
    },
  ];
};

export default function Main() {
  return (
    <PageWithDrawer
      title="Welcome"
      mainChildren={<Home />}
      additionalMenuItems={
        <div className="flex flex-row space-x-2 items-center justify-center"></div>
      }
    />
  );
}
