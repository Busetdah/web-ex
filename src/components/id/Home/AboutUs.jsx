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
                  Perusahaan Delta Engineering.
                  </h4>
                  <div className="r-text">
                    <span>about us</span>
                  </div>
                </div>
                <p className="abd-text">
                “Pelanggan tidak mengharapkan Anda menjadi sempurna.
                 Tapi mereka mengharapkan Anda untuk memperbaiki hal-hal ketika mereka salah.”
                </p>
                <div className="ab-author mb-30">
                  <h5>
                    Arif Yulianto, S.T <span>- Pendiri</span>
                  </h5>
                </div>
                <p className="sm-text mb-45">
                Delta Engineering adalah jasa perencanaan, desain dan konstruksi lengkap, turnkey dan, berdasarkan permintaan, fasilitas pakan ternak kecil hingga besar modular, dan sistem penanganan biji-bijian.
                </p>
                <div className="ab-button mb-30">
                  <Link href="id/about">
                    <a className="tp-btn">Baca lebih banyak</a>
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
