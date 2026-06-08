import React, { FC } from "react";
import { motion, Variants } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Project } from "../types/types";

interface Props {
  project: Project;
}

const cardVariants: Variants = {
  offscreen: {
    y: 24,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
    },
  },
};

const ProjectCard: FC<Props> = ({ project }) => {
  const { name, description, image, github, live, languages, role, impact } = project;

  return (
    <motion.article
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.25 }}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/5"
    >
      <div className="overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-900">
        <img
          src={image}
          alt={`${name} project screenshot`}
          className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-300">
          {role}
        </span>
        <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
          {name}
        </h3>
        <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">{impact}</p>
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {languages.map((language) => (
            <li
              key={language}
              className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200"
            >
              {language}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="focus-ring inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-cyan-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
            href={live}
            target="_blank"
            rel="noreferrer"
          >
            Live site
            <FiExternalLink aria-hidden="true" />
          </a>
          <a
            className="focus-ring inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-800 transition hover:border-cyan-400 hover:text-cyan-700 dark:border-white/10 dark:text-white dark:hover:border-cyan-300 dark:hover:text-cyan-300"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            Code
            <FiGithub aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
