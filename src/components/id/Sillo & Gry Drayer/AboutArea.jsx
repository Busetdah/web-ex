import Link from "next/link";

const AboutArea = () => {
  return (
    <>
      <section className="about__area pt-120 pb-155">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about__image about__image-2">
                <div className="about__image-big">
                  <img src="assets/img/about/silo1.jpeg" alt="" />
                </div>
                <div className="about__image-small about__image-small-2">
                  <img src="assets/img/about/silo2.jpeg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about__right-2">
                <div className="about__info pb-20">
                  <div className="section-2__wrapper mb-30">
                    <h5 className="section__title-sm">
                      Silo & Grains Dryer installations
                    </h5>
                  </div>
                  <p>
                  Delta Engineering is focused on exceptional quality, ease of installation, durability and flexibility across our full range of grain storage solutions Steel silos including corrugated, and material handling, flat-bottom, and hopper bins. aeration and conditioning equipment includes axial and centrifugal fans, industrial fans, sweep auger systems, vents and exhausters, and aeration floors. grains & material handling, chain and flight conveyors, bucket elevators, and cleaning, drying, steel building.
Our equipment set the standard in the industry and show our commitment to the best quality products.
                  </p>
                </div>
                <p className="process__text">
                    Can we help our clients succeed by installations, training and measurement. 
                    From the best materials for your companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
