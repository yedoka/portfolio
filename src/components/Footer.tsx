import githubIcon from "../assets/github-white.svg";
import telegramIcon from "../assets/telegram-white.svg";
import linkedinIcon from "../assets/linkedin-white.svg";
import '../styles/Footer.scss';
;
const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <h2 className="footer__content__title">ye.codes</h2>
      <div className="footer__content__contact">
        <ul className="footer__list">
          <li>
            <a href="https://github.com/yedoka">
              <img src={githubIcon} alt="github" />
            </a>
          </li>
          <li>
            <a href="https://t.me/yedoka">
              <img src={telegramIcon} alt="telegram" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/akedil-aidyn-69b54b2a0/">
              <img src={linkedinIcon} alt="linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
