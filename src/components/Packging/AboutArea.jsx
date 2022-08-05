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
                  <img src="assets/img/about/roboting7.png" alt="" />
                </div>
                <div className="about__image-small about__image-small-2">
                  <img src="assets/img/about/roboting4.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about__right-2">
                <div className="about__info pb-20">
                  <div className="section-2__wrapper mb-30">
                    <h5 className="section__title-sm">
                      Packging & Roboting Palletizing Installations
                    </h5>
                  </div>
                  <p>
                  Robotic Palletizing, Our teams put passion into developing a wide range of high quality systems for weighing, bagging and palletizing bulk, solid products Complete, made-to-measure machinery and lines for packaging, reliable, durable, and technologically superior to standard machines.
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
