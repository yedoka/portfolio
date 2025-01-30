import projectsData from "../constants";

const Projects = () => {
  return (
    <section className="flex flex-col md:flex-row w-full py-16 px-4 md:px-16 gap-8 bg-slate-950">
      {/* Heading Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl md:text-3xl underline underline-offset-8 text-slate-200 mb-4">
          Featured Projects
        </h1>
        <p className="text-slate-200">
          A curated selection of my web projects.
        </p>
      </div>

      {/* Projects Section */}
      <div className="flex flex-col w-full md:w-1/2 gap-16 md:32">
        {projectsData.slice(0, 3).map((project, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-4 rounded-md"
          >
            <div className="sm:basis-2/5">
              <img
                className="rounded-sm w-full object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className="flex flex-col sm:basis-3/5">
              <h1 className="text-lg mb-2 text-slate-200">{project.title}</h1>
              <p className="mb-2 text-slate-400">{project.description}</p>
              <a
                href={project.link}
                className="underline text-slate-200 hover:text-teal-300 transition-colors duration-200 ease-in-out"
              >
                Live demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
