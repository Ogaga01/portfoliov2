import React, { FC } from "react";
import {
  FaLaptopCode,
  FaLaptop,
  FaGithub,
  FaRegComments,
} from "react-icons/fa";
import styles from './../sass/_skills.module.scss'

const Skills: FC = () => {
  return (
    <section id="skills" className={styles["skills"]}>
      <h1 className={styles["skills__heading"]}>Technical and Soft Skills</h1>
      <div className={styles['skills__content']}>
        <div className={styles["skills__section"]}>
          <div className={styles["skills__section--icons"]}>
            <FaLaptop className={styles["skills__section--icon"]} />
          </div>
          <ul className={styles["skills__section--list"]}>
            <h1 className={styles["skills__section--heading"]}>Languages</h1>
            <li className={styles["skills__section--item"]}>
              JavaScript (ES5/ES6)
            </li>
            <li className={styles["skills__section--item"]}>Ruby</li>
            <li className={styles["skills__section--item"]}>Node.JS</li>
            <li className={styles["skills__section--item"]}>TypeScript</li>
          </ul>
        </div>
        <div className={styles["skills__section"]}>
          <div className={styles["skills__section--icons"]}>
            <FaLaptopCode className={styles["skills__section--icon"]} />
          </div>
          <ul className={styles["skills__section--list"]}>
            <h1 className={styles["skills__section--heading"]}>Frameworks</h1>
            <li className={styles["skills__section--item"]}>SASS</li>
            <li className={styles["skills__section--item"]}>React</li>
            <li className={styles["skills__section--item"]}>Redux</li>
            <li className={styles["skills__section--item"]}>RoR</li>
          </ul>
        </div>
        <div className={styles["skills__section"]}>
          <div className={styles["skills__section--icons"]}>
            <FaGithub className={styles["skills__section--icon"]} />
          </div>
          <ul className={styles["skills__section--list"]}>
            <h1 className={styles["skills__section--heading"]}>
              Version Control System
            </h1>
            <li className={styles["skills__section--item"]}>Git</li>
            <li className={styles["skills__section--item"]}>GitHub</li>
            <li className={styles["skills__section--item"]}>GitLab</li>
            <li className={styles["skills__section--item"]}>GitFlow</li>
          </ul>
        </div>
        <div className={styles["skills__section"]}>
          <div className={styles["skills__section--icons"]}>
            <FaRegComments className={styles["skills__section--icon"]} />
          </div>
          <ul className={styles["skills__section--list"]}>
            <h1 className={styles["skills__section--heading"]}>Soft Skills</h1>
            <li className={styles["skills__section--item"]}>Remote Working</li>
            <li className={styles["skills__section--item"]}>
              Pair Programming
            </li>
            <li className={styles["skills__section--item"]}>Team Work</li>
            <li className={styles["skills__section--item"]}>Good Communication</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
