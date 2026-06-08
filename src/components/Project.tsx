import React, { FC } from "react";
import { projects } from "../types/projects";
import ProjectCard from "./ProjectCard";

const Project: FC = () => {
  return (
    <section id="projects" className="section-shell">
      <div>
        <p className="eyebrow">Selected work</p>
        <h2 className="section-title">Featured projects</h2>
        <p className="section-copy">
          A mix of client-style websites, product interfaces, full-stack apps,
          and API-driven experiences.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
