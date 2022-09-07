import BlogRightSide from "../flatstorage/BlogRightSide";

const BlogDetailsArea = () => {
  return (
    <>
      <div className="blog__details-area pt-120 pb-70">
        <div className="container custom-container-3">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog__wrapper mb-50">
                <div className="tp-blog mb-50">
                  <div className="tp-blog__thumb m-img mb-35">
                    <img src="assets/img/blog/soybean.jpg" alt="blog-img" />
                  </div>
                  <h5 className="tp-blog__sm-title mb-20">
                  Pengolahan kedelai
                  </h5>
                 
                  <p>
                  Kedelai dikenal karena nilai gizinya yang tinggi untuk produksi pangan, dan digunakan dalam produksi pakan ternak. Namun, kacang kedelai juga dikenal karena adanya Faktor Anti Gizi, yang dapat mempengaruhi produktivitas dan kesehatan hewan jika digunakan dalam jumlah yang signifikan.
                  </p>
                  <p>
                  Minat dunia dalam penggunaan kedelai penuh lemak telah meningkat dalam beberapa tahun terakhir. Pengolahan kedelai menjadi kedelai penuh lemak menciptakan bahan baku berkualitas tinggi untuk produksi pakan ternak. Kedelai penuh lemak merupakan sumber protein penting untuk pakan unggas, ruminansia, babi, kelinci, ikan dan krustasea.
                  </p>
                    <p>
                    Karena metode baru untuk menanam kedelai, ketersediaan dan pemanfaatannya meningkat. Kondisi yang lebih baik untuk pertumbuhan, penyimpanan dan pengolahan menyebabkan variasi dalam komposisi dan nilai gizi kedelai penuh lemak.
                    </p>
                  <p>
                  Ada berbagai metode untuk pengolahan kedelai. Metode pengolahan kedelai yang paling efektif terdiri dari kombinasi perlakuan panas dan penghancuran. Metode ini menghilangkan faktor anti-nutrisi dan membuat minyak lebih mudah diakses.
                  </p>
                  <p>
                  Lihat di bawah untuk ikhtisar langkah-langkah dalam pengolahan kedelai:
                  Pembersihan – pada awal pengolahan kedelai, penting untuk menghilangkan batu dengan destoner, bagian logam dengan magnet dan pasir kecil & halus dengan saringan bergetar.
                  </p>
                  <p>
                  Menghancurkan – penghancur akan menghancurkan kacang menjadi 4-8 partikel, meninggalkan kulit dan kedelai yang dihancurkan. Lambung dikeluarkan dari potongan yang dihancurkan melalui saringan angin.
                  </p>
                  <p>
                  Temperatur – kedelai yang dihancurkan dibawa ke suhu dengan menambahkan uap dalam kondisioner. Pemanggang roti digunakan untuk menyimpan kedelai yang dihancurkan pada suhu untuk jangka waktu yang lebih lama.
                  </p>
                  <p>
                  Ekspansi – kami menggunakan expander untuk memperluas kedelai yang dihancurkan dan dikondisikan menjadi kedelai penuh lemak.
                  </p>
                  <p>
                  Steam – aplikasi uap pada kondisioner, pemanggang roti dan expander digunakan untuk memanaskan dan menjaga produk tetap hangat untuk meningkatkan gelatinisasi.
                 </p>
                 <p>
               
                    </p>
               
                  <div className="blog__d-image m-img mb-30">
                    <img src="assets/img/blog/soybean2.jpg" alt="" />
                  </div>
                  <p>
                  Extruders terkenal dan umum digunakan untuk pengolahan kacang kedelai. Extruder menghasilkan panas dan tekanan sebagai akibat dari gaya gesek dan geser yang dihasilkan di dalam barel extruder.
                    </p>
                    <p>
                    Ada 2 cara ekstrusi: ekstrusi kering dan ekstrusi pra-steam (semi-kering).
                 </p>
                 <p>
                 Extruder, seperti yang kami tawarkan, dioperasikan dengan steam-conditioner di depan barel extruder, ketika kapasitas awal 1 t/jam dan lebih diperlukan. Pengkondisian uap ini meningkatkan kapasitas ekstruder, dan mengurangi biaya suku cadang secara signifikan (sambil mempertahankan produk akhir berkualitas tinggi).
                 </p>
                 <h5 className="tp-blog__sm-title mb-20">
                 Penyimpanan silo, Penanganan biji-bijian, pengering
                  </h5>
                 
                  <p className="b-text mb-25">
                  Delta Engineering berfokus pada kualitas luar biasa, kemudahan pemasangan, daya tahan, dan fleksibilitas di seluruh rangkaian lengkap solusi penyimpanan biji-bijian kami. Silo baja termasuk bergelombang, dan penanganan material, alas datar, dan hopper bin. peralatan aerasi dan pengkondisian termasuk kipas aksial dan sentrifugal, kipas industri, sistem auger menyapu, ventilasi dan knalpot, dan lantai aerasi. penanganan biji-bijian & material, konveyor rantai dan penerbangan, elevator ember, dan pembersihan, pengeringan, pembuatan baja.
Peralatan kami menetapkan standar di industri dan menunjukkan komitmen kami terhadap produk dengan kualitas terbaik.

</p>
                  <div className="tp-blog__tag">
                    <span>Post Tags : </span>
                    <a href="#" rel="tag">
                      Hewan
                    </a>
                    <a href="#" rel="tag">
                      Pakan
                    </a>
                    <a href="#" rel="tag">
                      Kedelai
                    </a>
                    <a href="#" rel="tag">
                  Biji-bijian
                    </a>
                    <a href="#" rel="tag">
               Tempat Serbaguna
                    </a>
                  </div>
                </div>
             
              
              </div>
            </div>
            {/* blog right side */}
            <BlogRightSide />
            {/* blog right side */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsArea;
