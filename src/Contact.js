import * as Unicons from "@iconscout/react-unicons";

const Contact = () => {
  return (
    <section className="contant section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contant__information">
            <Unicons.UilPhone className="contact__icon" />
            <div>
              <h3 className="contact__title">Call Me</h3>
              <span className="contact__subtitle">+46 70-251 81 70</span>
            </div>
          </div>

          <div className="contant__information">
            <Unicons.UilEnvelope className="contact__icon" />
            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">vzotikas@gmail.com</span>
            </div>
          </div>

          <div className="contant__information">
            <Unicons.UilMapMarker className="contact__icon" />
            <div>
              <h3 className="contact__title">Address</h3>
              <span className="contact__subtitle">
                Friluftsvägen 35, 172 40 Sundbyberg, Sweden
              </span>
            </div>
          </div>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact__form grid"
        >
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Name
              </label>
              <input type="text" className="contact__input" />
            </div>

            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Email
              </label>
              <input type="email" className="contact__input" />
            </div>
          </div>
          <div className="contact__content">
            <label htmlFor="" className="contact__label">
              Project
            </label>
            <input type="text" className="contact__input" />
          </div>

          <div className="contact__content">
            <label htmlFor="" className="contact__label">
              Message
            </label>
            <textarea
              name=""
              id=""
              cols="0"
              rows="7"
              className="contact__input"
            ></textarea>
          </div>

          <div>
            <a href="/" className="button button--flex">
              Send Message
              <Unicons.UilMessage className="button__icon" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
