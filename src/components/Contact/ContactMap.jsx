const ContactMap = () => {
  return (
    <>
      <section className="contact__map">
        <div className="contact__map-wrap">
          <iframe
            id="gmap_canvas"
            src="https://goo.gl/maps/Tvu49yt4g7rnBZsx9"
          ></iframe>
          <div className="contact__map-icon">
            <i className="fa-solid fa-location-dot"></i>
            <img src="assets/img/bg/contact-icon-bg.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMap;
