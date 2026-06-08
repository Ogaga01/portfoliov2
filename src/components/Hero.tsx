import React, { FC } from 'react';
import { Link } from 'react-scroll';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';

const Hero: FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-24 lg:pt-32">
      <div className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="eyebrow">Full-stack software engineer</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
            I build reliable web products with thoughtful user experiences.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I am Ogaga Iyara Nicholas, a Lagos-based developer working with React,
            TypeScript, Node.js, and Ruby on Rails to turn product ideas into
            fast, maintainable applications.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3" aria-label="Core technologies">
            {["React", "TypeScript", "Node.js", "Ruby on Rails"].map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                {skill}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            spy
            smooth
            offset={-80}
            duration={500}
            to="projects"
            className="focus-ring inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-cyan-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
          >
            View projects
            <FiArrowRight aria-hidden="true" />
          </Link>
          <a
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-cyan-300 dark:hover:text-cyan-300"
            href="https://docs.google.com/document/d/1Yn69RIL2vPBFdkyI8JOXJ20upzPNz0qL/edit?usp=sharing&ouid=113747237026570318120&rtpof=true&sd=true"
            target="_blank"
            rel="noreferrer"
          >
            Resume
            <FiDownload aria-hidden="true" />
          </a>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/Ogaga01"
              target="_blank"
              rel="noreferrer"
              className="focus-ring text-slate-500 transition hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-300"
              aria-label="Ogaga Iyara on GitHub"
            >
              <FiGithub size={22} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/ogaga-iyara/"
              target="_blank"
              rel="noreferrer"
              className="focus-ring text-slate-500 transition hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-300"
              aria-label="Ogaga Iyara on LinkedIn"
            >
              <FiLinkedin size={22} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft dark:border-white/10 dark:bg-white/5">
            <img
              src="/ogaga.jpeg"
              alt="Ogaga Iyara Nicholas"
              className="aspect-[4/5] w-full rounded-xl object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-xl border border-slate-200 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-slate-900">
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Available for</p>
            <p className="mt-1 text-lg font-bold text-slate-950 dark:text-white">
              Frontend engineering, full-stack features, and product-focused builds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
