import React from "react";
import yedoka from "../assets/yedoka.jpg";
import illustration from "../assets/illustration.svg";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="flex flex-col justify-center items-center dark:bg-neutral-900 dark:text-white "
      >
        <div className="flex flex-col md:w-[700px] h-[800px] w-[300px]  justify-center items-center">
          <img src={illustration} alt="Illustration" className="mb-10 w-6/12" />
          <h1 className="text-center md:text-5xl text-2xl font-bold">
            Hi, I'm <span className="text-dark-blue">Akedil Aidyn</span>
          </h1>
          <p className="text-center font-bold md:text-4xl text-lg text-gray-600 dark:text-white">
            I'm a front-end developer who loves building web applications.
          </p>
        </div>

        <div className="flex md:flex-row flex-col md:w-[1100px] w-screen h-[800px] justify-center items-center p-5 md:mb-0 mb-64">
          <div className="md:w-1/2 w-full md:text-lg text-md space-y-3 mb-5 md:mb-0 ">
            <h1 className="font-bold md:text-4xl text-2xl text-dark-blue">
              About me
            </h1>
            <p>
              My name is Akedil Aidyn. I am a student software developer. I
              believe in the importance of small details because that's what
              makes a good product.
            </p>
            <p>
              I am passionate about building web applications that are
              user-friendly and accessible to everyone. I am always looking for
              new opportunities to learn and grow as a developer.
            </p>
            <p>
              I am currently pursuing a bachelor's degree in Computer Science &
              Mathematics at University of Lodz
            </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center">
            <img
              src={yedoka}
              alt="Yedoka"
              className="md:w-[450px] md:h-[450px] rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
