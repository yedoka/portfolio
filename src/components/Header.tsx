import logo from "../assets/logo.png";
import '../styles/Header.scss';

const Header = () => (
  <header className="header">
    <div className="header__main">
      <img className="header__logo" src={logo} alt="logo" />
      <ul className="header__list">
        <li><a href="#home" className="header__list__item">Home</a></li>
        <li><a href="#about" className="header__list__item">About</a></li>
        <li><a href="#contact" className="header__list__item">Contact</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
