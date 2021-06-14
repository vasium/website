import * as Unicons from "@iconscout/react-unicons";
import portfolio1 from "./images/portfolio1.jpg";
import portfolio2 from "./images/portfolio2.jpg";
import portfolio3 from "./images/portfolio3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My Projects</span>

      <div className="portfolio__container container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          // cssMode={true}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          mousewheel={true}
          keyboard={true}
          loop={true}
          className="mySwiper"
        >
          <div>
            <SwiperSlide>
              <div className="portfolio__content grid">
                <img
                  src={portfolio1}
                  alt="Portfolio1"
                  className="portfolio__img"
                />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">VR ArchViz Interior</h3>
                  <p className="portfolio__description">
                    A photorealistic VR experience! The Besqab Apartment
                    Interior is an architectural visualization project made with
                    Unity. The Architectural project, build in every single
                    detail from scratch is a full navigable interior that
                    includes more than 200 furniture and 4K textures and able to
                    runs on different platforms, from PC, to VR up to Mobile.
                  </p>
                  <a
                    href="/"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <Unicons.UilArrowRight className="button__icon" />
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="portfolio__content grid">
                <img
                  src={portfolio2}
                  alt="Portfolio2"
                  className="portfolio__img"
                />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">
                    Web AR 3D model configurator
                  </h3>
                  <p className="portfolio__description">
                    A Web-Based 3D React Application that utilizes Three.js, a
                    JavaScript 3D Library based on WebGL. With the Studio3Dmodel
                    configurator, you can dynamically change all the properties
                    of any 3D model and then place it in the real-world
                    environment using ARKit and ARCore directly out of your
                    phone's web browser.
                  </p>
                  <a
                    href="/"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <Unicons.UilArrowRight className="button__icon" />
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="portfolio__content grid">
                <img
                  src={portfolio3}
                  alt="Portfolio3"
                  className="portfolio__img"
                />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">Fav8 iOS App</h3>
                  <p className="portfolio__description">
                    A custom iOS app that I designed and developed my self in
                    Xcode using Swift.Listen to your favorite radio stations
                    everywhere! Tune in to music stations, news stations, sports
                    stations and many other free radio stations of your choice.
                    Tune in and... Enjoy listening!
                  </p>
                  <a
                    href="/"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <Unicons.UilArrowRight className="button__icon" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
