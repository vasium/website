import { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Main from "./Main";
import Portfolio from "./Portfolio";
import Project from "./Project";
import Qualifications from "./Qualifications";
import Scroll from "./Scroll";
import Services from "./Services";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import styled from "styled-components";

const Section1Styled = styled.div``;

const Section2Styled = styled.div``;

function App() {
  const [sections, setSections] = useState(null);
  useEffect(() => {
    setSections(document.querySelectorAll("section[id]"));
  }, []);

  const scrollActive = () => {
    const scrollY = window.pageYOffset;

    if (sections) {
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          const test1 = document.querySelector(
            ".nav__menu a[href*=" + sectionId + "]"
          );
          if (test1) {
            test1.classList.add("active-link");
          }
        } else {
          const test2 = document.querySelector(
            ".nav__menu a[href*=" + sectionId + "]"
          );
          if (test2) {
            test2.classList.remove("active-link");
          }
        }
      });
    }
  };
  window.addEventListener("scroll", scrollActive);

  const scrollHeader = () => {
    const nav = document.getElementById("header");
    if (nav) {
      if (window.scrollY > 80) {
        nav.classList.add("scroll-header");
      } else {
        nav.classList.remove("scroll-header");
      }
    }
  };
  window.addEventListener("scroll", scrollHeader);
  return (
    <>
      <Header />
      <Main>
        <Section1Styled id="section1">
          <Home />
        </Section1Styled>
        <Section2Styled id="section2">
          <About />
        </Section2Styled>

        <Skills />
        <Qualifications />
        <Services />
        <Portfolio />
        <Project />
        <Testimonials />
        <Contact />
      </Main>
      <Footer />
      <Scroll />
    </>
  );
}

export default App;
