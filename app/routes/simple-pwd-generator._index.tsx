import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useContext } from "react";
import Home from "~/components/Home";
import PageWithDrawer from "~/layouts/PageWithDrawer";
import { ShoelaceContext } from "~/shoelace";
import { useTheme } from "~/zustand";
import pwMac1 from "~/assets/img/pw-mac-1.png";
import pwMac2 from "~/assets/img/pw-mac-2.png";
import pwMac3 from "~/assets/img/pw-mac-3.png";
import pwMac4 from "~/assets/img/pw-mac-4.png";

export const meta: MetaFunction = () => {
  return [
    { title: "Eli Selkin | simple-pwd-generator" },
    {
      property: "og:title",
      content: "Eli Selkin | simple-pwd-generator",
    },
  ];
};

export default function SimplePwdGeneratorHome() {
  const { theme } = useTheme();
  const { SlCarousel, SlCarouselItem } = useContext(ShoelaceContext);
  return (
    <PageWithDrawer
      title="simple-pwd-generator"
      mainChildren={
        <>
          <h2 className="text-2xl font-bold">About</h2>
          <p>
            This is a simple password generator. It is a work in progress and
            will be updated over time. I saw that there were other password
            generators but none were open source. The code fore this project is
            available on{" "}
            <Link
              className={`link link-hover underline ${
                theme === "sl-theme-dark" ? "link-accent" : "link-primary"
              }`}
              to="https://github.com/eselkin/simple-pwd-generator"
            >
              GitHub
            </Link>
          </p>
          <h2 className="text-2xl font-bold mt-4 md:mt-6">Installation</h2>
          <p>
            Want to try it out. Use testflight and this{" "}
            <Link to="https://testflight.apple.com/join/92DWFv5X">link</Link>
          </p>
          <h2 className="text-2xl font-bold mt-4 md:mt-6">Features</h2>
          <p>
            <ul className="list list-disc pl-6">
              <li>generate random character passwords</li>
              <li>generate random word passwords</li>
              <li>options for English and/or Spanish dictionaries</li>
              <li>configurable special characters</li>
            </ul>
          </p>
          <div className="mx-auto w-full max-w-3xl">
            <SlCarousel loop autoplay pagination mouseDragging>
              <SlCarouselItem className="m-4">
                <img
                  src={pwMac1}
                  alt="unselected password type"
                  className="h-full"
                />
              </SlCarouselItem>
              <SlCarouselItem>
                <img src={pwMac2} alt="character password" className="w-full" />
              </SlCarouselItem>
              <SlCarouselItem>
                <img src={pwMac3} alt="word password type" className="w-full" />
              </SlCarouselItem>
              <SlCarouselItem>
                <img src={pwMac4} alt="settings" className="w-full" />
              </SlCarouselItem>
            </SlCarousel>
          </div>
          <h2 className="text-2xl font-bold mt-4 md:mt-6">Privacy</h2>
          We don't record or store any information about your passwords you
          generate or your system besides the data that apple already collects
          on downloads. A full privacy policy is available{" "}
          <Link
            className={`link link-hover underline ${
              theme === "sl-theme-dark" ? "link-accent" : "link-primary"
            }`}
            to="/simple-pwd-generator/privacy"
          >
            here
          </Link>
          .
        </>
      }
      additionalMenuItems={
        <div className="flex flex-row space-x-2 items-center justify-center"></div>
      }
    />
  );
}
