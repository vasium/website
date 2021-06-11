import * as Unicons from "@iconscout/react-unicons";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skillsContent, setskillsContent] = useState(null);
  const [skillsHeader, setskillsHeader] = useState(null);

  useEffect(() => {
    setskillsContent(document.getElementsByClassName("skills__content"));
    setskillsHeader(document.querySelectorAll(".skills__header"));
  }, []);

  const toggleSkills = (e) => {
    e.preventDefault();

    let itemClass = e.target.parentElement.parentElement.className;

    for (let i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = "skills__content skills__close";
    }
    if (itemClass === "skills__content skills__close") {
      e.target.parentElement.parentElement.className =
        "skills__content skills__open";
    }
  };

  if (skillsContent && skillsHeader) {
    skillsHeader.forEach((el) => {
      el.addEventListener("click", toggleSkills);
    });
  }

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div>
          {/* ---Section 1--- */}

          <div className="skills__content skills__open">
            <div className="skills__header">
              <Unicons.UilDatabase className="skills__icon" />
              <div>
                <h1 className="skills__title">Frontend Developer</h1>
                <span className="skills__subtitle">More than 4 years</span>
              </div>
              <Unicons.UilAngleDown className="skills__arrow" />
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>
            </div>
          </div>

          {/* ---Section 2--- */}

          <div className="skills__content skills__close">
            <div className="skills__header">
              <Unicons.UilServerNetwork className="skills__icon" />
              <div>
                <h1 className="skills__title">Frontend Developer</h1>
                <span className="skills__subtitle">More than 4 years</span>
              </div>
              <Unicons.UilAngleDown className="skills__arrow" />
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>
            </div>
          </div>

          {/* ---Section 3--- */}

          <div className="skills__content skills__close">
            <div className="skills__header">
              <Unicons.UilSwatchbook className="skills__icon" />
              <div>
                <h1 className="skills__title">Frontend Developer</h1>
                <span className="skills__subtitle">More than 4 years</span>
              </div>
              <Unicons.UilAngleDown className="skills__arrow" />
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
