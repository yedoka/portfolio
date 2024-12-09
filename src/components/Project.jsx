/* eslint-disable react/prop-types */
const Project = ({ title, description, image, link }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-slate-950 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="w-full md:w-2/5">
        <img
          src={image}
          alt={title}
          className="w-full h-48 md:h-full object-cover"
        />
      </div>
      <div className="flex flex-col p-4 justify-between w-full md:w-3/5">
        <div>
          <h3 className="text-2xl text-slate-200 mb-2">{title}</h3>
          <p className="text-slate-400 mb-4">{description}</p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-300 underline hover:text-teal-500"
        >
          See more
        </a>
      </div>
    </div>
  );
};

export default Project;
