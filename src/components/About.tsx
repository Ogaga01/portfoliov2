import React, { FC } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import ogaga from "./../images/ogaga.jpeg";

const About: FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="about"
      className="section-shell"
    >
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative">
          <img
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-soft"
            src={ogaga}
            alt="Ogaga Iyara Nicholas"
          />
          <div className="absolute -bottom-5 left-5 right-5 rounded-xl border border-slate-200 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-slate-900">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
              Based in Lagos
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Building practical software for teams, founders, and growing products.
            </p>
          </div>
        </div>
        <div>
          <p className="eyebrow">About me</p>
          <h2 className="section-title">A developer focused on useful, polished software.</h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            <p>
              I am a full-stack developer with experience building responsive,
              user-friendly web applications with React, TypeScript, Redux,
              Ruby on Rails, and Node.js.
            </p>
            <p>
              I care about clear interfaces, maintainable code, and turning
              business needs into products that feel simple for people to use.
              My work spans frontend experiences, API-driven apps, and
              production-ready features.
            </p>
            <p>
              If you need an engineer who can contribute across design,
              frontend, and backend implementation,{" "}
              <a
                className="focus-ring font-semibold text-cyan-700 underline underline-offset-4 dark:text-cyan-300"
                href="mailto:iyaraogaga69@gmail.com"
              >
                I am available for hire
              </a>
              .
            </p>
          </div>
          <Link
            spy
            smooth
            offset={-80}
            duration={500}
            to="contact"
            className="focus-ring mt-8 inline-flex cursor-pointer items-center rounded-lg bg-cyan-700 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-950 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
          >
            Start a conversation
          </Link>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["2+", "Years experience"],
              ["10+", "Projects shipped"],
              ["Full-stack", "Product scope"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-2xl font-extrabold text-slate-950 dark:text-white">{value}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
