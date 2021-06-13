import * as Unicons from "@iconscout/react-unicons";
import prefil from "./images/perfil.png";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/"
              target="blank"
              className="home__social-icon"
            >
              <Unicons.UilLinkedin />
            </a>
            <a
              href="https://www.dribbble.com/"
              target="blank"
              className="home__social-icon"
            >
              <Unicons.UilDribbble />
            </a>
            <a
              href="https://www.github.com/"
              target="blank"
              className="home__social-icon"
            >
              <Unicons.UilGithub />
            </a>
          </div>

          <div className="home__img">
            <svg
              className="home__blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <image className="home__blob-img" xlinkHref={prefil} />
              </g>
            </svg>
          </div>
          <div className="home__data">
            <h1 className="home__title">Hi, I am Vasilis</h1>
            <h3 className="home__subtitle">
              Web <span className="dot"></span> XR <span className="dot"></span>{" "}
              iOS Developer
            </h3>
            <p className="home__description">
              I'm a Web, XR &amp; iOS developer passionate about creating
              intuitive, dynamic user experiences.
            </p>
            <Link
              style={{ cursor: "pointer" }}
              className="button button--flex"
              to="section6"
              spy={true}
              smooth={true}
              duration={500}
            >
              {/* <a href="#contact" className="button button--flex"> */}
              Contact Me <Unicons.UilMessage className="button__icon uil" />
              {/* </a> */}
            </Link>
          </div>
        </div>

        <div className="home__scroll">
          <Link
            style={{ cursor: "pointer" }}
            className="home__scroll-button button--flex"
            to="section2"
            spy={true}
            smooth={true}
            duration={500}
          >
            {/* <a href="#about" className="home__scroll-button button--flex"> */}
            <Unicons.UilMouseAlt className="home__scroll-mouse uil" />
            <span className="home__scroll-name">Scroll down</span>
            <Unicons.UilArrowDown className="home__scroll-arrow uil" />
            {/* </a> */}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
