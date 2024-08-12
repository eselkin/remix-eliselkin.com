import { MetaFunction } from "@remix-run/node";
import ResumeComponent from "~/components/Resume";
import PageWithDrawer from "~/layouts/PageWithDrawer";

export const meta: MetaFunction = () => {
  return [
    { title: "Eli Selkin | Resume" },
    {
      property: "og:title",
      content: "Eli Selkin | Resume",
    },
  ];
};
export default function Resume() {
  return <PageWithDrawer mainChildren={<ResumeComponent />} />;
}
