import githubIcon from "../assets/github.svg";
import telegramIcon from "../assets/telegram.svg";
import profilePic from "../assets/avatar.svg";
import '../styles/Hero.scss';

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero__main">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Software Engineer 👋</h1>
          <p className="hero__text">
            Hi, I'm Akedil Aidyn. A passionate Software Engineer based in Poland.
          </p>
          <div className="hero__social">
            <a href="https://github.com/yedoka">
              <img src={githubIcon} alt="github" />
            </a>
            <a href="https://t.me/yedoka">
              <img src={telegramIcon} alt="telegram" />
            </a>
          </div>
        </div>
        <div className="hero__img">
          <img src={profilePic} alt="pfp" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
