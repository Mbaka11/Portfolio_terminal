import React from "react";

const github_username = "Mbaka11";
const email = "m.bakashov11@gmail.com";

const socials = [
  {
    name: "Github",
    description: "My Github profile",
    icon: <i className="fab fa-github"></i>,
    link: `https://github.com/Mbaka11`,
  },
  {
    name: "Email",
    description: "Let's get in touch!",
    icon: <i className="fas fa-envelope"></i>,
    link: `mailto:${email}`,
  },
  {
    name: "LinkedIn",
    description: "Let's connect!",
    icon: <i className="fab fa-linkedin"></i>,
    link: `https://www.linkedin.com/in/marsel-bakashov-813643213/`,
  },
  {
    name: "Resume",
    description: "Here lies all my secrets!",
    icon: <i className="fas fa-file"></i>,
    link: `test.com`,
  },
];

const commands = [
  {
    name: "help",
    description: "List all commands",
    icon: <i className="fas fa-question"></i>,
  },
  {
    name: "about",
    description: "About me",
    icon: <i className="fas fa-user"></i>,
  },
  {
    name: "projects",
    description: "List all projects",
    icon: <i className="fas fa-project-diagram"></i>,
  },
  {
    name: "contact",
    description: "Contact me",
    icon: <i className="fas fa-envelope"></i>,
  },
  {
    name: "clear",
    description: "Clear the screen",
    icon: <i className="fas fa-trash"></i>,
  },
];

export { github_username, email, socials, commands };
