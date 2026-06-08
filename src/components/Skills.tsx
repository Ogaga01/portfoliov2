import React, { FC } from "react";
import { FaGithub, FaLaptop, FaLaptopCode, FaRegComments } from "react-icons/fa";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    icon: FaLaptop,
    skills: ["JavaScript", "TypeScript", "Ruby", "Node.js"],
  },
  {
    title: "Frameworks",
    icon: FaLaptopCode,
    skills: ["React", "Redux", "Ruby on Rails", "Tailwind CSS"],
  },
  {
    title: "Version Control",
    icon: FaGithub,
    skills: ["Git", "GitHub", "GitLab", "GitFlow"],
  },
  {
    title: "Collaboration",
    icon: FaRegComments,
    skills: ["Remote work", "Pair programming", "Teamwork", "Clear communication"],
  },
];

const Skills: FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="skills"
      className="section-shell"
    >
      <p className="eyebrow">Capabilities</p>
      <h2 className="section-title">Technical and collaboration skills</h2>
      <p className="section-copy">
        A practical toolkit for building responsive interfaces, API-driven products,
        and collaborative engineering workflows.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {skillGroups.map(({ title, icon: Icon, skills }) => (
          <article
            key={title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-300">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">{title}</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
