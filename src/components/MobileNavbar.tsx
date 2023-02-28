import React, { FC, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import styles from "./../sass/_mobilenavbar.module.scss";

const MobileNavbar: FC = () => {
  const [active, setActive] = useState<boolean>(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <div className={styles["mobile_navigation"]}>
        <h1 className={styles["mobile_navigation--title"]}>Ogaga.</h1>
        <AiOutlineMenu
          className={styles["mobile_navigation--menu_icon"]}
          onClick={showMenu}
        />
      </div>
      <nav className={styles[active ? "active" : "slider"]}>
        <ul className={styles["slider__nav"]}>
          <div className={styles["slider__closed"]}>
            <AiOutlineClose
              className={styles["slider__close"]}
              onClick={showMenu}
            />
          </div>
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="hero"
            className={styles.navlink}
            onClick={showMenu}
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
            onClick={showMenu}
          >
            About
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={styles.navlink}
            onClick={showMenu}
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
            onClick={showMenu}
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
            onClick={showMenu}
          >
            Testimonials
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={styles.navlink}
            onClick={showMenu}
            to="contact"
          >
            Contact
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default MobileNavbar;
