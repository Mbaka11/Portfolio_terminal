import React from "react";
import { commands, socials } from "../constants.tsx";
import styles from "./commandManager.module.scss";
import { useState, useEffect } from "react";

function ManageCommands({ input }) {
  const [repoData, setRepoData] = useState([]);

  async function repoDataURL() {
    await fetch("https://api.github.com/users/Mbaka11/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          const list = result.map((item) => ({
            name: item.name,
            description: item.description,
            icon: <i className="fab fa-github"></i>,
          }));
          setRepoData(list);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  useEffect(() => {
    repoDataURL();
  }, []);

  if (input === "help") {
    const helpText = (
      <div>
        <p>Available commands :</p>
        <ul className={styles.list}>
          {commands.map((command, index) => (
            <li key={index}>
              <span className={styles.icon}>{command.icon}</span>
              <span className={styles.name}>{command.name}</span>
              <span className={styles.description}>{command.description}</span>
            </li>
          ))}
        </ul>
      </div>
    );

    return helpText;
  } else if (input === "about") {
    const aboutText = (
      <div className={styles.container}>
        <div>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/Mbaka11"
            alt="GitHub avatar"
          ></img>
          <div className={styles.userInfo}>
            <strong>Marsel Bakashov</strong>
            <div className={styles.loader}></div>
            <a href="https://github.com/Mbaka11">@Mbaka11</a>
          </div>
        </div>
        <p>Hi!👋</p>
        <br></br>
        <p>
          My name is <span className={styles.upfront}>Marsel Bakashov</span> and
          I'm currently pursuing my studies in Sofware Engineering at{" "}
          <span className={styles.upfront}>Polytechnique Montréal</span> :).
        </p>
        <br></br>
        <p>
          I'm passionate about harnessing the power of technology to make life
          simpler and more efficient. My current focus is on{" "}
          <span className={styles.upfront}>cybersecurity and AI</span>,
          exploring their potential to reshape industries. I'm also skilled in{" "}
          <span className={styles.upfront}>
            building full-stack web applications
          </span>
          .
        </p>
        <br></br>
        <p>Let's connect and explore the possibilities of tech together!</p>
        <br></br>
      </div>
    );

    return aboutText;
  } else if (input === "projects") {
    repoDataURL();
    const projectsList = (
      <ul className={styles.list}>
        {repoData.map((repo, index) => (
          <li key={index}>
            <span className={styles.icon}>{repo.icon}</span>
            <span className={styles.name}>{repo.name}</span>
            <span className={styles.description}>{repo.description}</span>
          </li>
        ))}
      </ul>
    );

    return projectsList;
  } else if (input === "contact") {
    const socialsList = (
      <ul className={styles.list}>
        {socials.map((social, index) => (
          <li key={index}>
            <span className={styles.icon}>{social.icon}</span>
            <a className={styles.name} href={social.link}>
              {social.name}
            </a>
            <span className={styles.description}>{social.description}</span>
          </li>
        ))}
      </ul>
    );

    return socialsList;
  } else {
    return (
      "Unknown command: " + input + "\n" + "Type 'help' for a list of commands."
    );
  }
}

export default ManageCommands;
