import Link from 'next/link';
import BlogData from "../../data/downloadData";

const BlogArea = () => {
  return (
    <>
      <section className="blog__area pt-120 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="section__wrapper mb-40">
              <h5 className="tp-blog__sm-title mb-40">
                  Brochure
                    </h5>
                <div className="r-text">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
                  <p>
                  Since the founding of our company, we have acquired more than 21 years of experience in a process of continuous development, improving and enhancing the performance of the equipment and processes by applying modern design standards and employing the latest production techniques.

We design and manufacture all kind of equipment for processing lines and installations like conveying systems, hammer mills, mixers, weighing and dosing installations, sterilization and pelleting systems as well as storage facilities.

Our designers take full account of the norms and directives that apply to the intended installation, including CE, ATEX and GMP.

On this page, you will find our brochures.
                  </p>
                  
                	
                
          <div className="row mt-40">
            {BlogData.slice(0, 5).map((blog) => {
              return (
                <div key={blog.id} className="col-xl-4 col-lg-4 col-md-6">
                  <div className="blog__item-2 blog__item-2-df mb-40">
                    <div className="blog__item-2-image">
                      <div className="blog__item-2-image-inner w-img">
                        <a href={`${blog.link}`} target="_blank">
                          <a><img src={`${blog.imgTwo}`} alt="blog-img" /></a>
                        </a>
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
