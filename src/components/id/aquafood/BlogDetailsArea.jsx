import BlogRightSide from "../aquafood/BlogRightSide";

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
                    <img src="assets/img/blog/iwak lele.jpg" alt="blog-img" />
                  </div>
                  <h5 className="tp-blog__sm-title mb-20">
                 Makanan Ikan
                  </h5>
                  <p>
                  Tantangan dengan produksi pakan aqua adalah untuk mencapai kepadatan yang tepat dan untuk menghasilkan pelet mengambang, tenggelam lambat atau tenggelam, sementara stabilitas air terjamin. Akibat kenaikan harga protein hewani dan tuntutan keberlanjutan produsen pakan melihat bahan alternatif yang mengarah pada pengolahan peningkatan jumlah bahan baku dan bahan.
                 </p>
                  
                  <p>Tergantung pada mesin yang digunakan, tantangan yang berbeda dapat dipenuhi.</p>
                  
                  <p>
                  Kami percaya bahwa berbagi pengetahuan dan kreasi bersama sangat penting dalam menemukan pasangan yang sempurna. Baik Anda ingin memodernisasi atau memperluas produksi pakan aqua Anda, ingin mengganti mesin yang menua dengan inovasi masa depan, atau membutuhkan saran dalam perencanaan dan penyiapan pabrik pakan aqua yang benar-benar baru, Delta Engineering adalah mitra pengetahuan untuk Anda.
                  </p>
               
                 
                  <div className="tp-blog__tag">
                    <span>Posting Tag : </span>
                    <a href="#" rel="tag">
                      Air
                    </a>
                    <a href="#" rel="tag">
                      Makanan
                    </a>
                    <a href="#" rel="tag">
                      Laut
                    </a>
                    <a href="#" rel="tag">
                      Ikan
                    </a>
                    <a href="#" rel="tag">
                      Kolam Ikan
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
