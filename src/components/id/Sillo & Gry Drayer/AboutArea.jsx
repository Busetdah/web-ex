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
                    Instalasi Silo & Pengering Biji-bijian
                    </h5>
                  </div>
                  <p>
                  Delta Engineering berfokus pada kualitas luar biasa, kemudahan pemasangan, daya tahan, dan fleksibilitas di seluruh rangkaian lengkap solusi penyimpanan biji-bijian kami. Silo baja termasuk bergelombang, dan penanganan material, alas datar, dan hopper bin. peralatan aerasi dan pengkondisian termasuk kipas aksial dan sentrifugal, kipas industri, sistem auger menyapu, ventilasi dan knalpot, dan lantai aerasi. penanganan biji-bijian & material, konveyor rantai dan penerbangan, elevator ember, dan pembersihan, pengeringan, pembuatan baja.
Peralatan kami menetapkan standar di industri dan menunjukkan komitmen kami terhadap produk dengan kualitas terbaik.
                  </p>
                </div>
                <p className="process__text">
                Bisakah kami membantu klien kami sukses dengan pemasangan, pelatihan, dan pengukuran.
                    Dari bahan terbaik untuk perusahaan Anda.
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
