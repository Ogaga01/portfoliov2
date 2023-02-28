import React, { FC } from "react";
import { Link } from "react-scroll";
import styles from "./../sass/_navbar.module.scss";

const Navbar: FC = () => {
  return (
    <div className={styles.navigation}>
      <h1 className={styles["navigation__title"]}>Ogaga.</h1>
      <nav className={styles["navigation__nav"]}>
        <ul className={styles["navigation__list"]}>
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="hero"
            className={styles.navlink}
          >
            Home
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="about"
            className={styles.navlink}
          >
            About
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={styles.navlink}
            to="skills"
          >
            Skills
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="projects"
            className={styles.navlink}
          >
            Projects
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="testimonials"
            className={styles.navlink}
          >
            Testimonials
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={styles.navlink}
            to="contact"
          >
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
