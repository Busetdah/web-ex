import Link from 'next/link';
import BlogData from "../../../data/downloadData";

const BlogArea = () => {
  return (
    <>
      <section className="blog__area pt-120 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="section__wrapper mb-40">
              <h5 className="tp-blog__sm-title mb-40">
                  Brosur
                    </h5>
                <div className="r-text">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
                  <p>
                  Sejak berdirinya perusahaan kami, kami telah memperoleh lebih dari 21 tahun pengalaman dalam proses pengembangan berkelanjutan, meningkatkan dan meningkatkan kinerja peralatan dan proses dengan menerapkan standar desain modern dan menggunakan teknik produksi terbaru.

Kami merancang dan memproduksi semua jenis peralatan untuk jalur pemrosesan dan instalasi seperti sistem konveyor, hammer mill, mixer, instalasi penimbangan dan dosis, sistem sterilisasi dan pelet serta fasilitas penyimpanan.

Desainer kami memperhitungkan sepenuhnya norma dan arahan yang berlaku untuk pemasangan yang dimaksud, termasuk CE, ATEX, dan GMP.

Di halaman ini, Anda akan menemukan brosur kami.
                  </p>
                  
                	
                
          <div className="row mt-40">
            {BlogData.slice(0, 5).map((blog) => {
              return (
                <div key={blog.id} className="col-xl-4 col-lg-4 col-md-6">
                  <div className="blog__item-2 blog__item-2-df mb-40">
                    <div className="blog__item-2-image">
                      <div className="blog__item-2-image-inner w-img">
                        <Link href={`${blog.link}`} target="_blank" rel="noopener noreferrer">
                          <a><img src={`${blog.imgTwo}`} alt="blog-img" /></a>
                        </Link>
                      </div>
                      
                    </div>
                    <div className="blog__item-2-content">
                      <div className="blog__meta">
                        <div className="blog__author">
                          <i className="fal fa-user"></i>
                          <span>
                            <a href=" ">{blog.authorThree}</a>
                          </span>
                        </div>
                        <div className="blog__catagory">
                          <span>Download</span>
                          
                        </div>
                      </div>
                      <h5 className="blog__sm-title">
                        <a href=" ">{blog.title}</a>
                      </h5>
                    </div>
                   
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;
