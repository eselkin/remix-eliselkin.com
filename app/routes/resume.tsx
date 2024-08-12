import ResumeComponent from "~/components/Resume";
import PageWithDrawer from "~/layouts/PageWithDrawer";

export default function Resume() {
  return <PageWithDrawer mainChildren={<ResumeComponent />} />;
}
