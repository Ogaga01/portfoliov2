import React, { FC } from "react";
import { Project } from "../types/types";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import styles from './../sass/_projectcard.module.scss'

interface Props {
  props: Project;
}

const ProjectCard: FC<Props> = ({ props }) => {
  const { name, description, image, github, live, languages } = props;

  return (
    <div className={styles["project"]}>
      <div className={styles["project__icon"]}>
              <img src={image} alt={name} className={styles['project__icon--img']} />
      </div>
      <div className={styles["project__info"]}>
        <h1 className={styles["project__info--title"]}>{name}</h1>
        <ul className={styles["project__info--list"]}>
          {languages.map((language) => (
            <li className={styles["project__info--item"]}>{language}</li>
          ))}
        </ul>
        <p className={styles["project__info--description"]}>{description}</p>
        <div className={styles["project__info--button"]}>
          <a className={styles["project__info--link"]} href={github}>
            <FiGithub />
          </a>
          <a className={styles["project__info--link"]} href={live}>
            <FiExternalLink className={styles["project__info--links"]}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
