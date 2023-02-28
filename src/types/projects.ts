import { Project } from "./types";

export const projects: Project[] = [
  {
    name: "Countries Info",
    image: "/images/countries-info.jpg",
    description:
      "Render live data from the public API. This web application displays the list of all countries and allows the user to click on a country of his/her choice and see some information about that country.",
    languages: ["React", "Countries API", "Redux"],
    github: "https://github.com/Ogaga01/Countries-Info-App",
    live: "https://candid-sfogliatella-37d461.netlify.app/",
  },
  {
    name: "Space Travelers Hub",
    image: "/images/space-traveler.jpg",
    description:
      "Render live data from the SpaceX API. This is web application for a company that provides commercial and scientific space travel services. It allows users to book rockets and join selected space missions.",
    languages: ["React", "Redux", "SpaceX API"],
    github: "https://github.com/Ogaga01/space-travelers-hub",
    live: "https://regal-genie-823357.netlify.app/",
  },
  // {
  //   name: "Todo List",
  //   image: "/images/todo.jpg",
  //   description:
  //     "A todo list app in which the user can add new tasks, edit, complete or delete them. The user can also clear all the completed tasks.",
  //   languages: ["Webpack", "JavaScript"],
  //   github: "https://github.com/Ogaga01/To-do",
  //   live: "https://ogaga01.github.io/To-do/",
  // },
  {
    name: "Awesome Books",
    image: "/images/awesome-books.jpg",
    description:
      "A books library in which we can add/remove books, and view the available books.",
    languages: ["Webpack", "JavaScript"],
    github: "https://github.com/Ogaga01/My-Awesome-Books",
    live: "https://ogaga01.github.io/My-Awesome-Books/",
  },
  {
    name: "Leaders Board",
    image: "/images/leaders-board.jpg",
    description:
      "The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.",
    languages: ["Webpack", "JavaScript", "Leaders Board API"],
    github: "https://github.com/Ogaga01/Microverse-Leadersboard-API",
    live: "https://legendary-kashata-ceb034.netlify.app",
  },
  {
    name: "Roll The Dice Game",
    image: "/images/roll-the-dice.jpg",
    description:
      "Play a game with your friends 🕹. Roll the dice 🎲 till you get 100 points and win the game.",
    languages: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Ogaga01/Roll-The-Dice-Game",
    live: "https://ogaga01.github.io/Roll-The-Dice-Game",
  },
  {
    name: "Bookstore",
    image: "/images/bookstore.jpg",
    description:
      "Similar to Awesome Books. Allows users add/remove books, and view the available books.",
    languages: ["React", "Firebase", "Redux"],
    github: "https://github.com/Ogaga01/Bookstore-React",
    live: "https://amazing-pixie-f339d9.netlify.app",
  },
];
