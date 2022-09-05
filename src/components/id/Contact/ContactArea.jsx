const ContactArea = () => {
  return (
    <>
      <section
        className="contact__area pt-120 pb-80"
        style={{
          background: `url(assets/img/bg/contact-bg.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="contact__item text-center mb-30">
                <div className="contact__icon mb-35">
                  <i className="fal fa-envelope-open-text"></i>
                </div>
                <h5 className="contact__title mb-25">Alamat Email</h5>
                <div className="contact__text">
                  <p>
                    <a href="mailto:info@webmail.com">contact@deltaenginering.com</a>
                  </p>
                
                </div>
                <div className="contact__button mt-30">
                  <a
                    href="mailto:contact@deltaenginering.com"
                    className="tp-btn-white"
                  >
                    Email Us <i className="fa-light fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="contact__item text-center mb-30">
                <div className="contact__icon mb-35">
                  <i className="fa-light fa-phone"></i>
                </div>
                <h5 className="contact__title mb-25">Nomer Telpon</h5>
                <div className="contact__text">
                  <p>
                    <a href="tel: +62 8133040975"> +62 8133040975</a>
                  </p>
                  <p>
                    <a href="tel: +62 82141928597">+62 82141928597</a>
                  </p>
                </div>
                <div className="contact__button mt-30">
                  <a href="tel:+7892516563" className="tp-btn-white">
                    Call Us <i className="fa-light fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="contact__item text-center mb-30">
                <div className="contact__icon mb-35">
                  <i className="fa-light fa-map-location-dot"></i>
                </div>
                <h5 className="contact__title mb-25">Alamat Kantor</h5>
                <div className="contact__text">
                  <p>
                    <a
                      href="#"
                      target="blank"
                    >
                     Main Road Sidoarjo - Krian ,<br/> Puri Indah 61271  , <br /> East Java, Indonesia
                    </a>
                  </p>
                </div>
                <div className="contact__button mt-30">
                  <a
                    href="#"
                    target="blank"
                    className="tp-btn-white"
                  >
                    Direction <i className="fa-light fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="contact__item text-center mb-30">
                <div className="contact__icon mb-35">
                  <i className="fa-light fa-bullseye-arrow"></i>
                </div>
                <h5 className="contact__title mb-25">Sosial Media</h5>
                <div className="contact__social mt-30">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
