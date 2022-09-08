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
                  <img src="assets/img/about/semolina.jpg" alt="" />
                </div>
                <div className="about__image-small about__image-small-2">
                  <img src="assets/img/about/fertiliser.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about__right-2">
                <div className="about__info pb-20">
                  <div className="section-2__wrapper mb-30">
                    <h5 className="section__title-sm">
                    Instalasi Pengemasan & Pembuatan Palletisasi Robot
                    </h5>
                  </div>
                  <p>
                  Robotic Palletizing, Tim kami berusaha keras untuk mengembangkan berbagai sistem berkualitas tinggi untuk penimbangan, pengemasan, dan pembuatan palet dalam jumlah besar, produk padat Mesin dan lini pengemasan yang lengkap dan sesuai ukuran untuk pengemasan, andal, tahan lama, dan secara teknologi lebih unggul daripada mesin standar. Sepenuhnya memahami betapa pentingnya memiliki proses produksi yang efisien. Untuk alasan ini, ia merancang jalur lengkap otomatis untuk mengurangi masalah klien dan meningkatkan produktivitas. Setiap desain unik dan muncul dari kolaborasi erat dengan klien - karena tantangan yang dihadapi klien kami juga merupakan tantangan kami. Kami memproduksi lini lengkap berteknologi canggih dengan kualitas build tinggi untuk menimbang, mengantongi, dan membuat palet produk lepas di tas, kotak, dan tempat sampah. Seluruh lini dapat dikelola melalui satu panel kontrol. Di bawah sistem yang sepenuhnya otomatis ini, peralihan dari satu produksi ke produksi lainnya, termasuk perubahan jenis kantong dan penyegelan, dapat dilakukan dalam waktu sekitar 60 detik, tanpa memerlukan intervensi manual. Mesin dan lini lengkap kami siap untuk Industri 4.0 dan dapat dihubungkan ke sistem di pabrik klien.
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
