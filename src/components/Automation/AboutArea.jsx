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
                  <img src="assets/img/about/plc3.jpeg" alt="" />
                </div>
                <div className="about__image-small about__image-small-2">
                  <img src="assets/img/about/plc1.jpeg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about__right-2">
                <div className="about__info pb-20">
                  <div className="section-2__wrapper mb-30">
                    <h5 className="section__title-sm">
                      PLC & Scada  System Installations
                    </h5>
                  </div>
                  <p>
                  Software engineering requires insight into your entire process; into knowledge of your application and even your industry. Our teams is specialised in control systems and automation for the feed mill, prmix, flat storage, Grains drying and material handling industry.</p>
<p>The automation of the plant will cover the intake of the raw materials, weighing, grinding, pelleting and bulk loading in the trucks.</p>
<p>PLC control over sensors and actuators such as valves, motors, push buttons.
SCADA (Supervisory Control And Data Acquisition) monitoring, alarm and operation
Batch control over various parts in the production line(s)
Functionalities such as recipe control, stock control, transport routing and more.
All this operator functionality is in reach within a mouse click from one single process running on the server. Operators don’t have to swap programs to perform various tasks.</p>
<p>
We offer a wide range of solutions for our customers.

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
