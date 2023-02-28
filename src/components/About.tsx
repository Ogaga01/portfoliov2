import React, { FC } from "react";
import ogaga from "./../images/ogaga.jpeg";
import { Link } from "react-scroll";
import styles from './../sass/_about.module.scss'

const About: FC = () => {
  return (
    // <Fade bottom>
    <section id="about" className={styles["about"]}>
      <h1 className={styles["about__title"]}>About Me</h1>
      <div className={styles["about__info"]}>
        <div className={styles['about__info--art']}>
          <p className={styles["about__one"]}>
            Hello! My name is Ogaga Iyara Nicholas and I'm a creative developer
            who loves to work on appealing websites with a passion for User
            Interfaces and Experience. I love spending my time coding, creating
            things for the web and learning new things.
          </p>
          <p className={styles["about__two"]}>
            I am a relatively new Full-Stack Developer with knowledge in
            TypeScript, React, Redux, Ruby and NodeJS.{"\n"} Since March 2022,
            I've been building my technical, leadership, and collaborative
            skills at{" "}
            <span className={styles["about__microverse"]}>
              <a href="https://www.microverse.org/">Microverse</a>
            </span>{" "}
            through collaborating and pair programming with other students from
            all over the world.
          </p>
          <p className={styles["about__three"]}>
            Developing innovative programs that expedite the efficiency and
            effectiveness of organizational success is something that I am
            passionate about. {"\n"} If you are in need of an experienced
            Software Engineer,{" "}
            <span className={styles["about__mailto"]}>
              <a href="mailto:iyaraogaga69@gmail.com">
                I am available for hire.
              </a>
            </span>
          </p>
          <p className={styles["about__four"]}>
            HAVE A COOL WEBSITE OR APPLICATION IN MIND?{" "}
            <span className={styles["about__contact"]}>
              <Link
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="Contact"
              >
                I'D LOVE TO HEAR ABOUT IT
              </Link>
            </span>{" "}
          </p>
        </div>
        <div className={styles["about__image"]}>
          <img className={styles.image} src={ogaga} alt="Ogaga" />
        </div>
      </div>
    </section>
    // </Fade>
  );
};

export default About;
