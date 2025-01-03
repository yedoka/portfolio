import avatar from "../assets/avatar.jpg";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-16 py-16">
      {/* Text Section */}
      <div className="text-slate-200 basis-full md:basis-3/5 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          I am a Front end developer <br /> Based in Poland
        </h1>
        <p className="text-base md:text-lg tracking-tight">
          I design and build modern, responsive websites that look awesome and
          work perfectly.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center basis-full md:basis-2/5">
        <img
          src={avatar}
          alt="avatar"
          className="w-[80%] md:w-full max-w-[300px] md:max-w-[500px] object-cover h-auto rounded-md"
        />
      </div>
    </section>
  );
};

export default Hero;
