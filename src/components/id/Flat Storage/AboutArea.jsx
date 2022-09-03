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
                  <img src="assets/img/about/flat3.jpeg" alt="" />
                </div>
                <div className="about__image-small about__image-small-2">
                  <img src="assets/img/about/flat1.jpeg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about__right-2">
                <div className="about__info pb-20">
                  <div className="section-2__wrapper mb-30">
                    <h5 className="section__title-sm">
                      Flat Storage Installations
                    </h5>
                  </div>
                  <p>
                  Our flat storage system can be made according to customer's size and requirement. They store grains, flour products, SBM, CGM, in flat warehouse collection points.
Storage is accessed via material handling, screw / mobile conveyor which can be selected by the customer with the ultimate goal of maximizing storage capacity. Customers can maximize capacity according to their size and cost budget.
Our flat storage warehouse design has advantages for high storage mobility, lace care, with storage range with easy access in options for multiple bulk products, in the same location, with different boxes.
The selection of storage with different boxes in one location can use the remote control, or on the control room controller.
Discharge flat storage warehouse, accessible via gate. In this way, non-free flowing product can be moved easily using the wheel loaders, bobcats, toward intakes, and material handling which are already available for forwarding to the feed mill, bagging off, truck loading.

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
