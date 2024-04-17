import React from "react";
import essentials from "../assets/essentials.png";
import tictactoe from "../assets/tictactoe.png";
import countdown from "../assets/countdown.png";
import projectManagement from "../assets/project-management.png";

const projects = [
  {
    id: 1,
    title: "React Essentials",
    description: "A collection of essential React concepts.",
    imgUrl: essentials,
    demoUrl: "https://yedoka.github.io/react-essentials/",
    githubUrl: "https://github.com/yedoka/react-essentials",
  },
  {
    id: 2,
    title: "Tic Tac Toe",
    description: "A simple tic-tac-toe game built with React.",
    imgUrl: tictactoe,
    demoUrl: "https://yedoka.github.io/tic-tac-toe/",
    githubUrl: "https://github.com/yedoka/tic-tac-toe",
  },
  {
    id: 3,
    title: "Almost Countdown",
    description: "A countdown timer built with React.",
    imgUrl: countdown,
    demoUrl: "https://yedoka.github.io/almost-countdown/",
    githubUrl: "https://github.com/yedoka/almost-countdown",
  },
  {
    id: 4,
    title: "Project Management",
    description: "A project management app built with React.",
    imgUrl: projectManagement,
    demoUrl: "https://yedoka.github.io/project-management/",
    githubUrl: "https://github.com/yedoka/project-management",
  },
];

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="flex flex-col justify-center items-center dark:bg-neutral-900 dark:text-white"
      >
        <div className="flex flex-col w-screen md:w-[1100px] md:h-[1000px] px-5 ">
          <h1 className="md:text-5xl text-2xl font-bold my-10 text-dark-blue">
            Projects
          </h1>
          <div className="md:grid md:grid-cols-3 md:gap-3 flex flex-col space-y-5 md:space-y-0">
            {projects.map((project) => (
              <div
                key={project.id}
                className=" shadow-lg rounded-lg overflow-hidden "
              >
                <img
                  className="w-full h-56 object-cover"
                  src={project.imgUrl}
                  alt={project.title}
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="mb-3">{project.description}</p>
                  <div className="flex justify-between">
                    <a
                      href={project.demoUrl}
                      className="font-bold text-dark-blue hover:underline"
                    >
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="font-bold text-dark-blue hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
