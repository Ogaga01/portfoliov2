import React, { FC, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-scroll";
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

const MobileNavbar: FC<Props> = ({ theme, onToggleTheme }) => {
  const [active, setActive] = useState<boolean>(false);

  const toggleMenu = () => {
    setActive((isActive) => !isActive);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/70 bg-white/90 px-5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85 lg:hidden">
        <div className="flex h-16 items-center justify-between">
          <Link
            spy
            smooth
            offset={-70}
            duration={500}
            to="hero"
            className="focus-ring cursor-pointer text-lg font-extrabold tracking-tight text-slate-950 dark:text-white"
            onClick={() => setActive(false)}
          >
            Ogaga<span className="text-cyan-600 dark:text-cyan-300">.</span>
          </Link>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
            </button>
            <button
              type="button"
              onClick={toggleMenu}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white dark:bg-white dark:text-slate-950"
              aria-label="Open navigation menu"
              aria-expanded={active}
            >
              <AiOutlineMenu aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <nav
        className={`fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm transition lg:hidden ${
          active ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-label="Mobile navigation"
      >
        <div
          className={`ml-auto flex h-full w-full max-w-sm flex-col bg-white p-6 shadow-2xl transition duration-300 dark:bg-slate-950 ${
            active ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-extrabold text-slate-950 dark:text-white">Menu</span>
            <button
              type="button"
              onClick={toggleMenu}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 dark:border-white/10 dark:text-slate-200"
              aria-label="Close navigation menu"
            >
              <AiOutlineClose aria-hidden="true" />
            </button>
          </div>
          <ul className="mt-10 flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                  to={item.to}
                  className="focus-ring block cursor-pointer rounded-lg px-3 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-cyan-700 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-cyan-300"
                  activeClass="text-cyan-700 dark:text-cyan-300"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;
