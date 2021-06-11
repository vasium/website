import { useEffect, useState } from "react";
import * as Unicons from "@iconscout/react-unicons";

const Header = () => {
  const [navMenu, setnavMenu] = useState(null);
  const [navToggle, setnavToggle] = useState(null);
  const [navClose, setnavClose] = useState(null);
  const [navLink, setnavLink] = useState(null);

  useEffect(() => {
    setnavMenu(document.getElementById("nav-menu"));
    setnavToggle(document.getElementById("nav-toggle"));
    setnavClose(document.getElementById("nav-close"));
    setnavLink(document.querySelectorAll(".nav__link"));
  }, []);

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  const linkAction = (e) => {
    // e.preventDefault();
    navMenu.classList.remove("show-menu");
  };

  if (navLink) {
    navLink.forEach((element) => {
      element.addEventListener("click", linkAction);
    });
  }

  const [textField, setTextField] = useState(null);
  const currentElementIdContent = " evzonic ";
  useEffect(() => {
    let i = 0;
    setInterval(() => {
      if (i < currentElementIdContent.length) {
        const text = currentElementIdContent.slice(0, i++);
        text !== currentElementIdContent && setTextField(text);
      }
    }, 100);
  }, []);

  // const scrollHeader = (e) => {
  //   const nav = document.getElementById("header");
  //   if (nav) {
  //     if (this.scrollY > 80) nav.classList.add("scroll-header");
  //     else nav.classList.remove("scroll-header");
  //   }
  // };
  // window.addEventListener("scroll", scrollHeader);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          <div>
            <span className="typeing">
              {textField}
              <span className="blinker"></span>
            </span>
          </div>
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <Unicons.UilEstate className="nav__icon" />
                Home
              </a>

              {/* <a href="#contact" className="button button--flex">
                Contact Me <Unicons.UilMessage className="button__icon uil" />
              </a> */}
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <Unicons.UilUser className="nav__icon" />
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <Unicons.UilFileAlt className="nav__icon" />
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <Unicons.UilBriefcaseAlt className="nav__icon" />
                Sevices
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <Unicons.UilScenery className="nav__icon" />
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <Unicons.UilMessage className="nav__icon" />
                Contact
              </a>
            </li>
          </ul>
          <Unicons.UilTimes className="nav__close" id="nav-close" />
        </div>
        <div className="nav__btns">
          <div className="nav__toggle" id="nav-toggle">
            <Unicons.UilApps />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
