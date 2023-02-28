import React, { FC, useState } from "react";
import ogaga from "./../images/ogee1.png";
import styles from "./../sass/_contact.module.scss";

const Contact: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    // <Fade bottom>
      <section id="contact" className={styles["contact"]}>
        <h1 className={styles["contact__heading"]}>Contact Me</h1>
        <div className={styles["contact__body"]}>
          <div className={styles["contact__body--image"]}>
            <img
              src={ogaga}
              alt="ogaga"
              className={styles["contact__body--img"]}
            />
          </div>
          <form
            action="https://formspree.io/f/mqkobkdq"
            method="post"
            className={styles["contact__body--form"]}
          >
            <input
              type="text"
              value={name}
              onChange={handleName}
              placeholder="Full Name"
              name="name"
              className={styles["contact__body--name"]}
            />
            <input
              type="email"
              value={email}
              onChange={handleEmail}
              placeholder="Email"
              name="email"
              className={styles["contact__body--email"]}
            />
            <textarea
              value={text}
              onChange={handleText}
              placeholder="Message"
              name="textarea"
              className={styles["contact__body--text"]}
            />
            <button type="submit" className={styles["contact__body--button"]}>
              Send 
            </button>
          </form>
        </div>
      </section>
    // </Fade>
  );
};

export default Contact;
