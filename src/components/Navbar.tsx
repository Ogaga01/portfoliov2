import React, { FC } from "react";
import { Link } from "react-scroll";
import { FiMoon, FiSun } from "react-icons/fi";
import { Theme } from "../App";

interface Props {
  theme: Theme;
  onToggleTheme: () => void;
}

const navItems = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Testimonials", to: "testimonials" },
  { label: "Contact", to: "contact" },
];

const Navbar: FC<Props> = ({ theme, onToggleTheme }) => {
  return (
    <header className="fixed inset-x-0 top-0 z-40 hidden border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80 lg:block">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-8" aria-label="Primary navigation">
        <Link
          spy
          smooth
          offset={-80}
          duration={500}
          to="hero"
          className="focus-ring cursor-pointer text-lg font-extrabold tracking-tight text-slate-950 dark:text-white"
        >
          Ogaga<span className="text-cyan-600 dark:text-cyan-300">.</span>
        </Link>
        <ul className="flex items-center gap-7">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                spy
                smooth
                offset={-80}
                duration={500}
                to={item.to}
                className="focus-ring cursor-pointer text-sm font-semibold text-slate-600 transition hover:text-cyan-700 dark:text-slate-300 dark:hover:text-cyan-300"
                activeClass="text-cyan-700 dark:text-cyan-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={onToggleTheme}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
