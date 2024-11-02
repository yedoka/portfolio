import aboutImage from "../assets/aboutme.webp";
import '../styles/About.scss';

const About = () => (
  <section className="about" id="about">
    <div className="about__main">
      <img src={aboutImage} alt="about" className="about__img" />
      <div className="about__content">
        <h4 className="about__subtitle">About Me</h4>
        <h2 className="about__title">
          A dedicated Software Engineer based in Poland
        </h2>
        <p className="about__text">
          I bring to the table a rich skill set as a Software Engineer in HTML,
          CSS, JavaScript, TypeScript, React, Next.js, Node.js, and SCSS. I am
          capable of designing and developing responsive websites that provide
          a seamless experience for users. I am good at designing dynamic
          interfaces with clean, optimized code by using all advanced
          development tools and techniques. Throughout my career, I have
          successfully collaborated with cross-functional teams and executed the
          delivery of various web applications.
        </p>
      </div>
    </div>
  </section>
);

export default About;
