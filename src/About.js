import about from "./images/about.jpg";
import * as Unicons from "@iconscout/react-unicons";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <img src={about} alt="About" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            I’ve spent the past 12+ years working across different tech areas;
            front-end development, UI/UX design, XR &amp; Game development, 3D
            Architectural Visualization, iOS application development, and much
            more. These days my time is spent freelancing, researching,
            designing, prototyping, and coding. Attention to detail and quality
            has always been my approach for delivering high-quality work.
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">10+</span>
              <span className="about__info-name">
                Years <br /> experience
              </span>
            </div>

            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-name">
                Completed <br /> projects
              </span>
            </div>

            <div>
              <span className="about__info-title">5+</span>
              <span className="about__info-name">
                Companies <br /> worked
              </span>
            </div>
          </div>
          <div className="about__button">
            <a
              download=""
              href="images/CV.jpeg"
              className="button button--flex"
            >
              Download CV
              <Unicons.UilDownloadAlt className="button__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
