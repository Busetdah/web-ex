import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <section className="about__area pt-120 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="ab-tab-info mb-30">
                <div className="ab-image w-img">
                  <img src="assets/img/about/Aboutdeltaeng3.jpeg" alt="" />
                </div>
              
              
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="ab-left-content">
                <div className="section__wrapper mb-30">
                  <h4 className="section__title">
                    Our Company Delta Engineering.
                  </h4>
                  <div className="r-text">
                    <span>about us</span>
                  </div>
                </div>
                <p className="abd-text">
                “Customers don’t expect you to be perfect.
                 But they do expect you to fix things when they go wrong.INDONESIA”
                </p>
                <div className="ab-author mb-30">
                  <h5>
                    Arif Yulianto, S.T <span>- Founder</span>
                  </h5>
                </div>
                <p className="sm-text mb-45">
                Delta Engineering the core business of is the planning, 
                design and construction of complete, turnkey and, on request, modular small to large animal feed facilities, and grain handling systems.
                </p>
                <div className="ab-button mb-30">
                  <Link href="/about">
                    <a className="tp-btn">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
