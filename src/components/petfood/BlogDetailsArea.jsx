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
                  Pet Food
                    </h5>
                  <p>
                  The global pet food industry is currently fast growing for asian market, pet food experts agree that this trend will continue into the near future. 
                  Pets are treated as family members, and the “Humanisation of Pets” results in very interesting trends in terms of nutrition and pet food manufacturing, of which the following are just a few examples:
                 </p>
                  <p>&#x2726; Modern-day pet owners call themselves pet parents</p>
                  <p>&#x2726; They refer to their pets as companion animals</p>
                  <p>&#x2726; These and other factors are driving the requirement for novelty ingredients of exceptional variety, quality and freshness to be used in Premium and Ultra Premium</p>
                  <p>&#x2726;  Conventional ingredients will always be there for basic or mainstream nutrition</p>
                  <p>However, novelty ingredients and in particular a very wide variety of fresh meat and ﬁsh ingredients became driving forces in ingredient selection and the subsequent choice of technology to process these ingredients in pet food</p>
               
                 
              
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
