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
                 Aqua Food
                  </h5>
                  <p>
                  The challenge with aqua feed production is to achieve the right density and to produce floating, slow sinking or sinking pellets, while water stability is ensured. As a result of an increase of prices for animal protein and the call for sustainability feed producers look at alternative ingredients which leads to the processing of an increased number of raw materials and ingredients.
                 </p>
                  
                  <p>Depending on which machinery is used, different challenges can be met.</p>
                  
                  <p>
                  We believe that sharing know-how and co-creation are essential in finding the perfect fit. Whether you are looking to modernize or expand your aqua feed production, want to replace aging machinery with future-proof innovations, or need advice in the planning and setup of a completely new aqua feed mill, Delta Engineering is the knowledge partner for you.
                  </p>
               
                 
                  <div className="tp-blog__tag">
                    <span>Post Tags : </span>
                    <a href="#" rel="tag">
                      Aqua
                    </a>
                    <a href="#" rel="tag">
                      Food
                    </a>
                    <a href="#" rel="tag">
                      Sea
                    </a>
                    <a href="#" rel="tag">
                      Fish
                    </a>
                    <a href="#" rel="tag">
                      Fish Pond
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
