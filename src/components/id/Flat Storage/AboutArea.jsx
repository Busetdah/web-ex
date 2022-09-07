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
                    Instalasi Penyimpanan Serbaguna
                    </h5>
                  </div>
                  <p>
                  Sistem penyimpanan serbaguna kami dapat dibuat sesuai dengan ukuran dan kebutuhan pelanggan. Mereka menyimpan biji-bijian, produk tepung, SBM, CGM, di titik pengumpulan gudang serbaguna.
Penyimpanan diakses melalui material handling, screw / mobile conveyor yang dapat dipilih oleh pelanggan dengan tujuan akhir memaksimalkan kapasitas penyimpanan. Pelanggan dapat memaksimalkan kapasitas sesuai dengan ukuran dan anggaran biaya mereka.
Desain gudang penyimpanan serbaguna kami memiliki keunggulan untuk mobilitas penyimpanan yang tinggi, perawatan renda, dengan jangkauan penyimpanan dengan akses mudah dalam pilihan untuk beberapa produk massal, di lokasi yang sama, dengan kotak yang berbeda.
Pemilihan tempat penyimpanan dengan kotak yang berbeda dalam satu lokasi dapat menggunakan remote control, atau pada pengontrol ruang kendali.
Debit gudang penyimpanan serbaguna, dapat diakses melalui gerbang. Dengan cara ini, produk non-free flow dapat dipindahkan dengan mudah menggunakan wheel loader, bobcats, menuju intake, dan material handling yang sudah tersedia untuk diteruskan ke feed mill, bagging off, truck loading.

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
