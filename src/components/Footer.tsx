import React, { FC } from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaAngellist,
  FaTwitter,
  FaMediumM,
} from "react-icons/fa";
import styles from "./../sass/_footer.module.scss";

const Footer: FC = () => {
  return (
    <footer id="footer" className={styles["footer"]}>
      <h1 className={styles["footer__heading"]}>Ogaga Iyara Nicholas</h1>
      <h1 className={styles["footer__location"]}>Lagos, Nigeria</h1>
      <div className={styles["footer__contact"]}>
        <p className={styles["footer__contact--para"]}>+2348084249939</p>
        <p className={styles["footer__contact--para"]}>
          iyaraogaga69@gmail.com
        </p>
      </div>
      <ul className={styles["footer__socials"]}>
        <li className={styles["footer__socials--list"]}>
          <a
            className={styles["footer__socials--link"]}
            href="https://github.com/Ogaga01"
          >
            <FaGithub />
          </a>
        </li>
        <li className={styles["footer__socials--list"]}>
          <a
            className={styles["footer__socials--link"]}
            href="https://www.linkedin.com/in/ogaga-iyara/"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className={styles["footer__socials--list"]}>
          <a
            className={styles["footer__socials--link"]}
            href="https://angel.co/profile/edit/overview"
          >
            <FaAngellist />
          </a>
        </li>
        <li className={styles["footer__socials--list"]}>
          <a
            className={styles["footer__socials--link"]}
            href="https://twitter.com/i_ogaga_n"
          >
            <FaTwitter />
          </a>
        </li>
        <li className={styles["footer__socials--list"]}>
          <a
            className={styles["footer__socials--link"]}
            href="https://medium.com/@iyaraogaga69"
          >
            <FaMediumM />
          </a>
        </li>
      </ul>
      <div className={styles["footer__line"]}></div>
      <p className={styles["footer__copyright"]}>&copy; Iyara Ogaga Nicholas</p>
    </footer>
  );
};

export default Footer;
