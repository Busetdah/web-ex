import Link from 'next/link';
import BlogData from "../../data/blogData";

const BlogArea = () => {
  return (
    <>
      <section className="blog__area pt-120 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="section__wrapper mb-40">
              <h4 className="tp-blog__sm-title mb-20">
                  Project
                    </h4>
                <div className="r-text">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
                  <p>
                  We creates solutions in the design and manufacture of equipment and complete installations for the grain processing and mixed-feed industries. does business in every product as dependable, high-quality component supplier and also as a prime contractor or subcontractor on large-scale projects. Every installation is assigned to a dedicated team of engineers and product specialists, experienced in performance-based design and manufacturing.
                  </p>
                  <p>
                  We design and build installations to meet specific customer needs, according to the latest standards of safety, quality, and reliability. The best solutions are the result of intensive cooperation with our partners and clients.
                  </p>
                  <p>
                  This is a challenge not only for the food industry but also definitely for the feed industry. The better the fodder for the species that give us milk, cheese and meat, the better the food on the table. It's that simple. But this is easier said than done. In a time of rising energy prices, resource shortages, emission targets and changing laws, the compound feed industry is being challenged to become more sustainable. Simultaneously the feed mill manager must meet his goal of maximizing sales or optimizing feed for meat, milk or egg production. Experts predict dramatic changes to the world's feed mills over the next 10 years. And how true this is, we don't have to wait 10 years; it has started Especially Europe for now in asia.
                  The owners have started to think about the future feed mill industry, having very clear goals about what they want to achieve with their new feed mill.
                  The factory built today is a modern feed mill integrated with new industrial technology and a high level of automation is applied to achieve the best in:
                  </p>
                	
                  <p>* Flexibility and efficiency </p>
                  <p>* Cleanliness level</p>
                  <p>* Energy efficiency</p>
                  <p>* Feed mill automation</p>
          <div className="row mt-40">
            {BlogData.slice(0, 5).map((blog) => {
              return (
                <div key={blog.id} className="col-xl-4 col-lg-4 col-md-6">
                  <div className="blog__item-2 blog__item-2-df mb-40">
                    <div className="blog__item-2-image">
                      <div className="blog__item-2-image-inner w-img">
                        <Link href="/blog-details">
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
                          <span>Industry</span>
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
