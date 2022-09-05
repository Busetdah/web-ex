import Link from 'next/link';
import BlogData from "../../data/blogData";

const BlogArea = () => {
  return (
    <>
      <section className="blog__area pt-120 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="section__wrapper mb-20">
              </div>
            </div>
          </div>
          <h5 className="tp-blog__sm-title mb-20">
          Kontak kami
                    </h5>
                  <p>
                  Perusahaan kami mengkhususkan diri dalam memberikan solusi dan memenuhi semua kebutuhan pelanggan.
                  </p>
                  <p>
                  Apakah Anda memiliki pertanyaan tentang solusi, instalasi, peralatan kami secara umum?
                   </p>
                  <p>
                  Silakan gunakan formulir kontak di bawah ini untuk mengirimkan pertanyaan terperinci Anda.
                  </p>
                 <p>
                 Silahkan hubungi kami, tim kami akan merespon permintaan Anda sesegera mungkin.
                  </p>
                
        
        </div>
      </section>
    </>
  );
};

export default BlogArea;
