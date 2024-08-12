import { LinksFunction } from "@remix-run/node";
import privacyCss from "~/assets/css/privacy.css";
import PageWithDrawer from "~/layouts/PageWithDrawer";
const privacy = require("~/html/privacy.txt");
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: privacyCss },
];
export default function SimplePwdGeneratorPrivacy() {
  return (
    <PageWithDrawer
      mainChildren={
        <div
          className="bg-white p-10"
          dangerouslySetInnerHTML={{ __html: privacy }}
        ></div>
      }
    />
  );
}
