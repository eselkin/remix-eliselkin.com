import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from "@remix-run/react";
import styles from "./tailwind.css";

import shoelaceLightStyles from "@shoelace-style/shoelace/dist/themes/light.css";
import shoelaceDarkStyles from "@shoelace-style/shoelace/dist/themes/dark.css";

import { ShoelaceContext, useShoelace } from "./shoelace";
import { Suspense } from "react";
import { sessionStorage } from "./session.server";
import { authenticator } from "./utils/auth.server";
import Toast from "~/components/Toast";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: shoelaceLightStyles },
  { rel: "stylesheet", href: shoelaceDarkStyles },
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);

  return json({
    BASE_URL: url.origin.includes("localhost")
      ? url.origin
      : url.origin.replace("http:", "https:"),
    GTM_ID: process.env.GTM_ID,
  });
};
export default function App() {
  const { BASE_URL, GTM_ID } = useLoaderData<typeof loader>();
  const shoelace = useShoelace({ URL: BASE_URL });
  return (
    <html lang="en" className="h-[100vh] p-0 m-0">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <style>{`
          body { font-family: var(--sl-font-sans); }
        `}</style>
        <Links />
      </head>
      <body className="h-full p-0 m-0">
        {!GTM_ID ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GTM_ID}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                className="hidden"
              ></iframe>
            </noscript>
          </>
        )}
        <ShoelaceContext.Provider value={shoelace}>
          <Outlet />
        </ShoelaceContext.Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
