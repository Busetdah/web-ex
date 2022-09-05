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
                      PLC & Scada  Sistem Instalasi
                    </h5>
                  </div>
                  <p>
                  Rekayasa perangkat lunak membutuhkan wawasan tentang seluruh proses Anda; menjadi pengetahuan tentang aplikasi Anda dan bahkan industri Anda. Tim kami mengkhususkan diri dalam sistem kontrol dan otomatisasi untuk pabrik pakan, premix, penyimpanan Serbaguna, pengeringan biji-bijian dan industri penanganan material.</p>
<p>Otomatisasi pabrik akan mencakup asupan bahan baku, penimbangan, penggilingan, pelet, dan pemuatan massal di truk.</p>
<p>Kontrol PLC atas sensor dan aktuator seperti katup, motor, tombol tekan.
SCADA (Supervisory Control And Data Acquisition)pemantauan, alarm, dan operasi
Kontrol batch atas berbagai bagian di lini produksi(s)
Fungsionalitas seperti kontrol resep, kontrol stok, perutean transportasi, dan lainnya.
Semua fungsi operator ini dapat dijangkau dalam satu klik mouse dari satu proses tunggal yang berjalan di server. Operator tidak perlu menukar program untuk melakukan berbagai tugas.</p>
<p>
Kami menawarkan berbagai solusi untuk pelanggan kami.
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
