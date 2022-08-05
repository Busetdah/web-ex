import BlogRightSide from "../flatstorage/BlogRightSide";

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
                    <img src="assets/img/blog/soybean.jpg" alt="blog-img" />
                  </div>
                  <h5 className="tp-blog__sm-title mb-20">
                  Soybean Processing
                  </h5>
                 
                  <p>
                  Soybeans are known for their high nutritional value for food production, and the use in animal feed production. However, soya beans are also known for the presence of Anti Nutritive Factors, which can adversely affect animal productivity and health when used in significant quantities.
                  </p>
                  <p>
                  The worldwide interest in the use of full-fat soya has increased in the last few years. Processing soybeans into full fat soya creates a high-quality raw material for the production of animal feed. Full fat soya is an important protein source to feed poultry, ruminants, pig, rabbit, fish and crustaceans.
                  </p>
                    <p>
                    Because of new methods for growing soybeans the availability and utilization is improving. The improved circumstances for growing, storage and processing is causing a variation in the composition and nutritional values of the full fat soya.
                    </p>
                  <p>
                  There are various methods for the processing of soybeans. The most effective soya processing method consists of a combination of heat treatment and crushing. This method removes the anti-nutritional factor and makes the oil more accessible.
                  </p>
                  <p>
                  See below for an overview of the steps in soybean processing:
Cleaning – at the start of the soybean processing, it is important to remove stones with a destoner, metal parts with a magnet and small grit & fines with a vibrating sieve.
                  </p>
                  <p>
                  Crushing – a crusher will crush the bean in 4-8 particles, leaving the skin and crushed soybean. The hulls are removed from the crushed pieces through a wind sifter.
                  </p>
                  <p>
                  Temperature – the crushed soybeans are brought up to temperature by adding steam in a conditioner. A toaster is used to keep the crushed soybeans at temperature for a longer period of time.
                  </p>
                  <p>
                  Expansion – we use the expander for the expansion of the crushed and conditioned soybean into full-fat soy.
                  </p>
                  <p>
                  Steam – the application of steam on the conditioner, toaster and expander is used to heat up and keep the product warm in order to improve gelatinization.
                 </p>
                 <p>
               
                    </p>
               
                  <div className="blog__d-image m-img mb-30">
                    <img src="assets/img/blog/soybean2.jpg" alt="" />
                  </div>
                  <p>
                  Extruders are well known and commonly used for soya bean treatment. Extruders generate heat and pressure as a result of frictional and shear forces produced within the extruder barrel.
                    </p>
                    <p>
                    There are 2 ways of extrusion: dry extrusion and pre steam-conditioned extrusion (semi-dry).
                 </p>
                 <p>
                 The extruder, as our offered, is operated with a steam-conditioner in front of the extruder barrel, when start capacities of 1 t/h and more are required. This steam conditioning increases the extruder capacity, and reduces the wearing parts cost significantly (whilst maintaining a high quality end product).
                 </p>
                 <h5 className="tp-blog__sm-title mb-20">
                 Silo storage, Grains handling, dryers
                  </h5>
                 
                  <p className="b-text mb-25">
                  Delta Engineering is focused on exceptional quality, ease of installation, durability and flexibility across our full range of grains storage solutions Steel silos including corrugated, and material handling, flat-bottom, and hopper bins. aeration and conditioning equipment includes axial and centrifugal fans, industrial fans, sweep auger systems, vents and exhausters, and aeration floors. grains & material handling, chain and flight conveyors, bucket elevators, and cleaning, drying, steel building.
Our equipment set the standard in the industry and show our commitment to the best quality products.

</p>
                  <div className="tp-blog__tag">
                    <span>Post Tags : </span>
                    <a href="#" rel="tag">
                      Animal
                    </a>
                    <a href="#" rel="tag">
                      Feed
                    </a>
                    <a href="#" rel="tag">
                      Soybean
                    </a>
                    <a href="#" rel="tag">
                      Grains
                    </a>
                    <a href="#" rel="tag">
                      Flat Storage
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
