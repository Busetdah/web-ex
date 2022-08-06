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
                 Our Contact
                    </h5>
                  <p>
                  Our company specializes in providing solutions and meeting all customer needs.
                  </p>
                  <p>
                   Do you have questions about our solutions, installations, equipment in general?
                   </p>
                  <p>
                     Please use the contact form below to submit your detailed inquiry.
                  </p>
                 <p>
                  Please contact us, our team will respond to your request as soon as possible.
                  </p>
                
        
        </div>
      </section>
    </>
  );
};

export default BlogArea;
