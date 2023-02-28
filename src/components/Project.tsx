import React, { FC } from 'react';
import { projects } from '../types/projects';
import ProjectCard from './ProjectCard';
import styles from './../sass/_project.module.scss'

const Project: FC = () => {
    return (
      // <Fade bottom>
        <section id='projects' className={styles["projects"]}>
          <h1 className={styles["projects__head"]}>My Featured Projects</h1>
          <div className={styles["projects__div"]}>
            {projects.map((poject) => (
              <ProjectCard props={poject} />
            ))}
          </div>
        </section>
      // {/* </Fade> */}
    );
};

export default Project;