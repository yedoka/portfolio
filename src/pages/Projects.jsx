import Project from "../components/Project";

const projectsData = [
  {
    title: "Spotify Stats",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
    image:
      "https://storage.googleapis.com/pr-newsroom-wp/1/2023/04/AppleCompetition-FTRHeader_V1-768x381.png",
    link: "#",
  },
  {
    title: "Fitness App",
    description:
      "Web app for tracking your progress in gym. View your previous sessions, create training routines, and track your progress with graphs.",
    image:
      "https://www.apptunix.com/blog/wp-content/uploads/sites/3/2020/04/Health-Tracking-apps.jpg",
    link: "#",
  },
  {
    title: "Zoom Clone",
    description:
      "A clone of the popular video conferencing app, complete with essential functionality for seamless video calls.",
    image: "https://cdn.mos.cms.futurecdn.net/25UeWUrVGmuXUjnG6Yt7rj.jpg",
    link: "https://github.com/yedoka/zoom-clone",
  },
];

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
