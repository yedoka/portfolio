const Projects = () => {
  return (
    <section className="flex flex-col md:flex-row w-full py-16 px-4 md:px-16 gap-8 bg-slate-950">
      {/* Heading Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl md:text-3xl underline underline-offset-8 text-slate-200 mb-4">
          Featured projects
        </h1>
        <p className="text-slate-200">
          A curated selection of my web projects.
        </p>
      </div>

      {/* Projects Section */}
      <div className="flex flex-col w-full md:w-1/2 gap-16 md:32">
        {/* Project 1 */}
        <div className="flex flex-col sm:flex-row gap-4 rounded-md">
          <div className="sm:basis-2/5">
            <img
              className="rounded-sm w-full object-cover"
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/04/AppleCompetition-FTRHeader_V1-768x381.png"
              alt="Spotify Stats"
            />
          </div>
          <div className="flex flex-col sm:basis-3/5">
            <h1 className="text-lg mb-2 text-slate-200">Spotify Stats</h1>
            <p className="mb-2 text-slate-400">
              Web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track.
            </p>
            <a
              href=""
              className="underline text-slate-200 hover:text-teal-300 transition-colors duration-200 ease-in-out"
            >
              See more
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col sm:flex-row gap-4 rounded-md">
          <div className="sm:basis-2/5">
            <img
              className="rounded-sm w-full object-cover"
              src="https://www.apptunix.com/blog/wp-content/uploads/sites/3/2020/04/Health-Tracking-apps.jpg"
              alt="Fitness App"
            />
          </div>
          <div className="flex flex-col sm:basis-3/5">
            <h1 className="text-lg mb-2 text-slate-200">Fitness App</h1>
            <p className="mb-2 text-slate-400">
              Web app for tracking your progress in gym. View your previous
              sessions, create training routines, see your progress in graphs.
              Handy rest timer between sets.
            </p>
            <a
              href=""
              className="underline text-slate-200 hover:text-teal-300 transition-colors duration-200 ease-in-out"
            >
              See more
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col sm:flex-row gap-4 rounded-md">
          <div className="sm:basis-2/5">
            <img
              className="rounded-sm w-full object-cover"
              src="https://cdn.mos.cms.futurecdn.net/25UeWUrVGmuXUjnG6Yt7rj.jpg"
              alt="Zoom Clone"
            />
          </div>
          <div className="flex flex-col sm:basis-3/5">
            <h1 className="text-lg mb-2 text-slate-200">Zoom Clone</h1>
            <p className="mb-2 text-slate-400">
              Clone app of popular video conferencing app. Includes all main
              functionality.
            </p>
            <a
              href="https://github.com/yedoka/zoom-clone"
              className="underline text-slate-200 hover:text-teal-300 transition-colors duration-200 ease-in-out"
            >
              See more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
