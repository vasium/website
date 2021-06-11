import * as Unicons from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Vasilis</h1>
            <span className="footer__subtitle">Web | XR | iOs Developer</span>
          </div>
          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact Me
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.facebook.com/"
              target="blank"
              className="footer__social"
            >
              <Unicons.UilFacebook className="nav__icon" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="blank"
              className="footer__social"
            >
              <Unicons.UilInstagram className="nav__icon" />
            </a>
            <a
              href="https://www.twitter.com/"
              target="blank"
              className="footer__social"
            >
              <Unicons.UilTwitterAlt className="nav__icon" />
            </a>
          </div>
        </div>
        <p className="footer__copy">
          &#169; Woqomoqo 2021. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
