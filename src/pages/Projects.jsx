import Project from "../components/Project";
import projectsData from "../constants";


const Projects = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8">
      <h1 className="text-3xl font-bold md:text-4xl text-slate-200 mb-8 text-center">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
