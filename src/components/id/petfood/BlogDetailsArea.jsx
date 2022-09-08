import BlogRightSide from "../petfood/BlogRightSide";

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
                    <img src="assets/img/blog/makanan hewan.jpg" alt="blog-img" />
                  </div>
                    <h5 className="tp-blog__sm-title mb-20">
                 Pakan Hewan
                    </h5>
                  <p>
                  Industri makanan hewan peliharaan global saat ini berkembang pesat untuk pasar Asia, para ahli makanan hewan setuju bahwa tren ini akan berlanjut dalam waktu dekat.
                  Hewan peliharaan diperlakukan sebagai anggota keluarga, dan “Humanisasi Hewan Peliharaan” menghasilkan tren yang sangat menarik dalam hal nutrisi dan pembuatan makanan hewan peliharaan, di mana berikut ini adalah beberapa contohnya:

                 </p>
                  <p>&#x2726; Pemilik hewan peliharaan modern menyebut diri mereka sebagai orang tua hewan peliharaan</p>
                  <p>&#x2726; Mereka menyebut hewan peliharaan mereka sebagai hewan pendamping</p>
                  <p>&#x2726; Faktor-faktor ini dan lainnya mendorong kebutuhan bahan-bahan baru dengan variasi, kualitas, dan kesegaran yang luar biasa untuk digunakan dalam Premium dan Ultra Premium</p>
                  <p>&#x2726;  Bahan-bahan konvensional akan selalu ada untuk nutrisi dasar atau mainstream</p>
                  <p>Namun, bahan-bahan baru dan khususnya variasi yang sangat luas dari bahan daging dan ikan segar menjadi kekuatan pendorong dalam pemilihan bahan dan pilihan teknologi selanjutnya untuk memproses bahan-bahan ini dalam makanan hewan.</p>
               
                 
                  <div className="tp-blog__tag">
                    <span>Pos Tag : </span>
                    <a href="#" rel="tag">
                      Hewan
                    </a>
                    <a href="#" rel="tag">
                      Makanan
                    </a>
                    <a href="#" rel="tag">
                      Satwa
                    </a>
                    <a href="#" rel="tag">
                      Anjing
                    </a>
                    <a href="#" rel="tag">
                      Kucing
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
