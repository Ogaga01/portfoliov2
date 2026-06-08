import React, { FC } from "react";
import {
  FaAngellist,
  FaGithub,
  FaLinkedinIn,
  FaMediumM,
  FaTwitter,
} from "react-icons/fa";

const socials = [
  { label: "GitHub", href: "https://github.com/Ogaga01", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ogaga-iyara/", icon: FaLinkedinIn },
  { label: "Wellfound", href: "https://angel.co/profile/edit/overview", icon: FaAngellist },
  { label: "Twitter", href: "https://twitter.com/i_ogaga_n", icon: FaTwitter },
  { label: "Medium", href: "https://medium.com/@iyaraogaga69", icon: FaMediumM },
];

const Footer: FC = () => {
  return (
    <footer id="footer" className="border-t border-slate-200 bg-white py-10 dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-extrabold text-slate-950 dark:text-white">
              Ogaga Iyara Nicholas
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Full-stack software engineer based in Lagos, Nigeria.
            </p>
          </div>
          <ul className="flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-cyan-300 hover:text-cyan-700 dark:border-white/10 dark:text-slate-300 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <a className="focus-ring hover:text-cyan-700 dark:hover:text-cyan-300" href="mailto:iyaraogaga69@gmail.com">
            iyaraogaga69@gmail.com
          </a>
          <p>&copy; {new Date().getFullYear()} Ogaga Iyara Nicholas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
