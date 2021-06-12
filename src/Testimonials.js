import * as Unicons from "@iconscout/react-unicons";
import testimonial1 from "./images/testimonial1.jpg";
import testimonial2 from "./images/testimonial2.jpg";
import testimonial3 from "./images/testimonial3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

const Testimonials = () => {
  return (
    <section className="testimonials section">
      <h2 className="section__title">Testimonials</h2>
      <span className="section__subtitle">What are my clients saying</span>
      <div className="testimonials__container container">
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={50}
          breakpoints={{
            // when window width is >= 568px
            568: {
              slidesPerView: 2,
            },
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <div className="testimonials content">
                <div className="testimonials__data">
                  <div className="testimonials__header">
                    <img
                      src={testimonial1}
                      alt="Testimonial1"
                      className="testimonials__img"
                    />
                    <div>
                      <h3 className="testimonials name">Sara Smith</h3>
                      <span className="testimonials__client">Client</span>
                    </div>
                  </div>
                  <div>
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                  </div>
                </div>
                <p className="testimonials__description">
                  I get a good impression, I carry out my project with all the
                  possible quality and attention and support 24 hours a day.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="testimonials content">
                <div className="testimonials__data">
                  <div className="testimonials__header">
                    <img
                      src={testimonial2}
                      alt="Testimonial1"
                      className="testimonials__img"
                    />
                    <div>
                      <h3 className="testimonials name">Sara Smith</h3>
                      <span className="testimonials__client">Client</span>
                    </div>
                  </div>
                  <div>
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                  </div>
                </div>
                <p className="testimonials__description">
                  I get a good impression, I carry out my project with all the
                  possible quality and attention and support 24 hours a day.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="testimonials content">
                <div className="testimonials__data">
                  <div className="testimonials__header">
                    <img
                      src={testimonial3}
                      alt="Testimonial1"
                      className="testimonials__img"
                    />
                    <div>
                      <h3 className="testimonials name">Sara Smith</h3>
                      <span className="testimonials__client">Client</span>
                    </div>
                  </div>
                  <div>
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                    <Unicons.UilStar className="testimonials__icon-star" />
                  </div>
                </div>
                <p className="testimonials__description">
                  I get a good impression, I carry out my project with all the
                  possible quality and attention and support 24 hours a day.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
