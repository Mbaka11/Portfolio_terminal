import React from "react";
import { commands } from "../constants.tsx";
import styles from "./commandManager.module.scss";

export function manageCommands(input: string) {
  if (input === "help") {
    console.log("help");
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
  } else {
    return (
      "Unknown command: " + input + "\n" + "Type 'help' for a list of commands."
    );
  }
}
