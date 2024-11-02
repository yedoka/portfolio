import gmailIcon from "../assets/gmail.svg";
import telegramIcon from "../assets/telegram.svg";
import linkedinIcon from "../assets/linkedin.svg";
import '../styles/Contact.scss';

const Contact = () => (
  <section className="contact" id="contact">
    <div className="contact__content-text">
      <h4 className="contact__subtitle">Contact</h4>
      <h2 className="contact__title">Get In Touch</h2>
    </div>
    <div className="contact__content__list">
      <div className="contact__content">
        <img src={gmailIcon} alt="gmail" className="contact__content__img" />
        <a href="mailto:akedilbekbolatov@gmail.com" className="contact__content__link">
          Gmail.com
        </a>
      </div>
      <div className="contact__content">
        <img src={telegramIcon} alt="telegram" className="contact__content__img" />
        <a href="https://t.me/yedoka" className="contact__content__link">Telegram</a>
      </div>
      <div className="contact__content">
        <img src={linkedinIcon} alt="linkedin" className="contact__content__img" />
        <a href="https://www.linkedin.com/in/akedil-aidyn-69b54b2a0/" className="contact__content__link">
          LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
