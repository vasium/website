import * as Unicons from "@iconscout/react-unicons";
import { useEffect, useState } from "react";

const Scroll = () => {
  const [scrollTop, setscrollTop] = useState(null);
  useEffect(() => {
    setscrollTop(document.getElementById("scroll-up"));
  }, [scrollTop]);

  const scrollUp = () => {
    if (scrollTop) {
      if (window.scrollY >= 560) {
        scrollTop.classList.add("show-scroll");
      } else {
        scrollTop.classList.remove("show-scroll");
      }
    }
  };

  window.addEventListener("scroll", scrollUp);

  return (
    <a href="#home" className="scrollup" id="scroll-up">
      <Unicons.UilArrowUp className="scrollup__icon" />
    </a>
  );
};

export default Scroll;
