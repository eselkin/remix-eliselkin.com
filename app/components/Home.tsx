import { Link } from "@remix-run/react";
import { useTheme } from "~/zustand";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div>
      <p>
        I&apos;m Eli, founder of{" "}
        <Link
          className={`link link-hover underline ${
            theme === "sl-theme-dark" ? "link-accent" : "link-primary"
          } `}
          to="https://extendtherapy.com"
        >
          ExtendTherapy
        </Link>{" "}
        and cofounder of several other technology companies (Upful, Kopanya,
        etc.).
      </p>
      <p>Coming soon... blog/whitepapers, talks, and a revamped resume.</p>
    </div>
  );
}
