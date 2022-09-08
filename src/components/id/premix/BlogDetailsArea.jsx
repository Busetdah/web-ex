import BlogRightSide from "../premix/BlogRightSide";

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
                    <img src="assets/img/blog/mashfeed.jpg" alt="blog-img" />
                  </div>
                  <h5 className="tp-blog__sm-title mb-20">
                  Pakan Premix & Mash
                  </h5>
                  <p>
                  Sejarah yang sangat panjang di Industri memberi tim kami pengalaman dan keahlian untuk menyediakan solusi yang dibuat khusus untuk spektrum lengkap aplikasi Premix & mash feed. Solusi Rekayasa dan Peralatan berkisar dari operasi penggilingan dan pencampuran kecil hingga pabrik pakan khusus yang besar.

                  </p>

                  <p>
                  Peralatan kami untuk pabrik pakan / konsentrat premix dan mash memenuhi dan melampaui standar internasional dalam hal desain, kebersihan, keamanan, dan efisiensi. Desain inovatif menghasilkan akurasi pencampuran yang luar biasa dan kualitas produk akhir. Tata letak teknik yang canggih dan desain kontrol proses menghasilkan kontaminasi silang yang dapat diabaikan.

                  </p>
                   
                  <div className="tp-blog__tag">
                    <span>Pos Tag : </span>
                    <a href="#" rel="tag">
                      Hewan
                    </a>
                    <a href="#" rel="tag">
                      Makanan
                    </a>
                    <a href="#" rel="tag">
                      Mash
                    </a>
                    <a href="#" rel="tag">
                      Pakan
                    </a>
                    <a href="#" rel="tag">
                      Konsentrat
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
