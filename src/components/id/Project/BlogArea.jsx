import Link from 'next/link';
import BlogData from "../../../data/blogData";

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
                
                  <p>&#x2726; Flexibility and efficiency</p>
                  <p>&#x2726; Cleanliness level</p>
                  <p>&#x2726; Energy efficiency</p>
                  <p>&#x2726; Feed mill automation</p>
                  <p>Hygienic production
Not only are they able to provide customized feed for each farmer, everything is done in a very hygienic environment.
</p>
<p>Clean rooms for steam conditioner, batch mixer, pellet mills, finished feeds, and auto packaging robotic palletizing</p>
<p>Energy efficiency is an important feature of the whole project.</p>
<p>Feed factory automation
The entire production process is automated to optimize recipe changes, production times, and the overall performance of the Feed mill thereby enabling  to react more quickly to market developments and customer needs.
</p> 
<p>It only takes 2 operators to track all stages of the Feed Mill production process.
Operators can make adjustments on the spot, using just a tablet.
All silos, bins and mixers are equipped with weighing facilities, to see at any time raw materials or finished products are being processed, as well as monitor actual stock levels.
Automatic sampling of finished products is possible in combination with a fully automatic sample. 
</p>       
<p>Complete packaging line robotic palletizing, hygienic, ergonomic and easy to clean, the all-new , an automatic filling and closing machine for bags at high speeds, was created to ensure the highest product quality in modern food packaging.</p>
<p>Following the latest international machinery hygiene guidelines. From avoiding product retention, using specific contact-part materials and providing convenient access for cleaning, everything is geared towards safeguarding the final product.</p>
<p>The fed integrated scale is completely accessible using quick release panels for more thorough cleaning.
Have provided many innovative installations now with new technology, 
</p>          
<p>&#x2726; Efficient high speed bagging operation</p>
<p>&#x2726; Bag mouth tightly clamped on the filling spout</p>
<p>&#x2726; NO dust, clean and SAFE environment</p>
<p>&#x2726; NO spillage, no clean-up required</p>
<p>&#x2726; Accurate weighing providing BETTER accuracy for each bag</p>
<p>&#x2726; Compact bag, great for pallet stack presentation and stability. SAFE and SECURE
This is the hope of the future industry.
</p>
<p>Hatchery project 
Our team of engineers and technical experts will supply each project with the appropriate design. Each project is looked at carefully and designed to the customers’ specific requirements.
</p>
<p>A lay-out with all electical, water and high pressure lines is drawn up for the customer. These lay-outs are the basis for the architectural plans.</p>
<p>Hatchery Equipment prides itself in being able to run a project as a turn-key delivery from sales through supply to delivery of the fully equipped turn-key hatchery.</p>
<p>Hatchery Projects require at least an alaysis of:</p>
<p>&#x2726; Size and space definition</p>      
<p>&#x2726; Internal egg and chick flow</p>    
<p>&#x2726; Storage space</p>    
<p>&#x2726; Staff and hygiene needs (canteen, showers, office)</p>    
<p>&#x2726; Level of automation</p>    
<p>&#x2726; Technical requirements</p>               
<p>&#x2726; Wall protection and flooring</p>    
<p>&#x2726; Electrical, water and air-supply</p>
<p>&#x2726; Waste management</p>   
<p>&#x2726; Storage needs</p>
<p>&#x2726; Supply and dispatch</p>


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
