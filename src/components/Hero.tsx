import React, { FC } from 'react';
import { Link } from 'react-scroll';
import styles from './../sass/_hero.module.scss'

const Hero: FC = () => {
  return (
    // <Fade bottom>
      <header id='hero' className={styles["hero"]}>
        <p className={styles["hero__greeting"]}>Hi, my name is</p>
        <h1 className={styles["hero__name"]}>Ogaga Iyara.</h1>
        <ul className={styles["hero__skills"]}>
          <li className={styles["hero__skills--item"]}>NodeJS</li>
          <li className={styles["hero__skills--item"]}>React</li>
          <li className={styles["hero__skills--item"]}>Ruby</li>
          <li className={styles["hero__skills--item"]}>TypeScript</li>
        </ul>
        <p className={styles["hero__action"]}>
          I can help you build a product, feature, or website. Look through some
          of my work and experience! If you like what you see and need help on a
          project, I am available for hire.
        </p>
        <div className={styles["hero__links"]}>
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="projects"
            className={styles["hero__link"]}
          >
            Projects
          </Link>
          <a
            className={styles["hero__link"]}
            href="https://docs.google.com/document/d/1qFzZ41ulkY1H1wA4-e5KH_72SAY_n1FsvedcsLidHjs/edit?usp=sharing"
          >
            Get My Resume
          </a>
        </div>
      </header>
    // </Fade>
  );
};

export default Hero;