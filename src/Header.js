import { useEffect, useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import { Link } from "react-scroll";

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
  const [themeButton, setthemeButton] = useState(null);

  const [textField, setTextField] = useState("");

  const currentElementIdContent = " Vasilis Zotikas ";

  useEffect(() => {
    var i = 0;
    var id = setInterval(() => {
      if (i === currentElementIdContent.length) {
        clearInterval(id);
      } else {
        setthemeButton(document.getElementById("theme-button"));
        const text = currentElementIdContent.slice(0, i++);
        text !== currentElementIdContent && setTextField(text);
      }
    }, 100);
  }, []);

  // let i = 0;
  // if (i < currentElementIdContent.length) {
  //   console.log(e);
  //   setInterval((e) => {
  //     const text = currentElementIdContent.slice(0, i++);
  //     text !== currentElementIdContent && setTextField(text);
  //   }, 100);
  // }

  // const scrollHeader = (e) => {
  //   const nav = document.getElementById("header");
  //   if (nav) {
  //     if (this.scrollY > 80) nav.classList.add("scroll-header");
  //     else nav.classList.remove("scroll-header");
  //   }
  // };
  // window.addEventListener("scroll", scrollHeader);

  // const themeButton = document.getElementById("theme-button");

  const selectedTheme = localStorage.getItem("selected-theme");
  // const selectedIcon = localStorage.getItem("selected-icon");

  // useEffect(() => {
  //   setthemeButton(document.getElementById("theme-button"));
  // }, []);

  if (themeButton) {
    console.log("theme", themeButton);
    const getCurrentTheme = () =>
      document.body.classList.contains("dark-theme") ? "dark" : "light";

    // const getCurrentIcon = () =>
    //   themeButton.classList.contains("uil-sun") ? "uil-moon" : "uil-sun";

    if (selectedTheme) {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        "dark-theme"
      );

      //   if (selectedIcon === "uil-moon") {
      //     themeButton.classList.add("uil-sun");
      //     themeButton.classList.remove("uil-moon");
      //   } else if (selectedIcon === "uil-sun") {
      //     themeButton.classList.add("uil-moon");
      //     themeButton.classList.remove("uil-sun");
      //   }
    }

    themeButton.addEventListener("click", () => {
      var para = document.createElement("p");

      document.getElementById("lll").appendChild(para);
      document.body.classList.toggle("dark-theme");
      // themeButton.classList.toggle("uil-moon");
      localStorage.setItem("selected-theme", getCurrentTheme());
      // localStorage.setItem("selected-icon", getCurrentIcon());
    });
  }

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
                <Link
                  // activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Unicons.UilEstate className="nav__icon" />
                  Home
                </Link>
              </a>
              {/* <a href="#home" className="nav__link active-link">
                <Unicons.UilEstate className="nav__icon" />
                Home
              </a> */}

              {/* <a href="#contact" className="button button--flex">
                Contact Me <Unicons.UilMessage className="button__icon uil" />
              </a> */}
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <Link
                  // activeClass="active"
                  to="section2"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Unicons.UilEstate className="nav__icon" />
                  About
                </Link>
              </a>
              {/* <a href="#about" className="nav__link">
                <Unicons.UilUser className="nav__icon" />
                About
              </a> */}
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
          {/* Theme change button */}
          <div id="lll">
            <Unicons.UilMoon
              className="change-theme uil-moon"
              id="theme-button"
            />
          </div>
          <div className="nav__toggle" id="nav-toggle">
            <Unicons.UilApps />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
