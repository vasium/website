import * as Unicons from "@iconscout/react-unicons";
import project from "./images/project.png";

const Project = () => {
  return (
    <section className="project section">
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <h2 className="project__title">Do you have a project?</h2>
            <p className="project__description">
              Contact me now and get 25% discount!
            </p>
            <a href="#contact" className="button button--flex button--white">
              Contact Me
              <Unicons.UilMessage className="project__icon button__icon" />
            </a>
          </div>
          <img src={project} alt="Project" className="project__img" />
        </div>
      </div>
    </section>
  );
};

export default Project;
