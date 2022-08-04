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
                 Premix & Mash Feed
                  </h5>
                  <p>
                  A very long history in the Industry gave our teams the experience and expertise to supply tailor-made solutions for the complete spectrum of Premix & mash feed applications.  Engineering and Equipment solutions range from small mill-and-mix operations to large dedicated feed mills.

                  </p>

                  <p>
                  Our equipment for premix and mash feed / concentrate plants meet and exceed international standards in terms of design, hygiene, safety and efficiency.  Innovative design results in exceptional mixing accuracy and end product quality.  State-of-the-art engineering layout and process control design leads to negligible cross contamination.

                  </p>
                   
                  <div className="tp-blog__tag">
                    <span>Keywords: </span>
                    <a href="#" rel="tag">
                      Animal
                    </a>
                    <a href="#" rel="tag">
                      Food
                    </a>
                    <a href="#" rel="tag">
                      Mash
                    </a>
                    <a href="#" rel="tag">
                      Feed
                    </a>
                    <a href="#" rel="tag">
                      Concentrate
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
