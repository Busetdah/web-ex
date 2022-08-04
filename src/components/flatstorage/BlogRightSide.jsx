import Link from 'next/link';

const BlogRightSide = () => {
  return (
    <>
      <div className="col-lg-4">
        <div className="blog-sidebar__wrapper pl-30">
          <div className="blog-sidebar__widget mb-55 d-none">
            <div className="blog-sidebar__widget-content">
              <div className="blog-sidebar__widget-head mb-30">
                <h3 className="blog-sidebar__widget-title">About me</h3>
              </div>
              <div className="blog-sidebar__about">
                <div className="featured__author text-center">
                  <Link href="/team-details">
                  <a>
                    <img src="assets/img/blog/featured-img.jpg" alt="" />
                  </a>
                  </Link>
                  <h6 className=" featured__author-title mt-20">
                    <Link href="/team-details">Rosalina D. Willaimson</Link>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consect etur adipisicing elit,
                    sed do eiusmod tempor incidi dunt.
                  </p>
                  <div className="featured__author-social">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-sidebar__widget mb-55">
            <div className="blog-sidebar__widget-content">
              <div className="blog-sidebar__widget-head mb-30">
                <h3 className="blog-sidebar__widget-title">Search Here</h3>
              </div>
              <div className="blog-sidebar__search p-relative">
                <form action="#">
                  <input type="text" placeholder="Search your keyword..." />
                  <button type="submit">
                    <i className="fa-light fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="blog-sidebar__widget mb-55">
            <div className="blog-sidebar__widget-head mb-30">
              <h3 className="blog-sidebar__widget-title">Other Process</h3>
            </div>
            <div className="blog-sidebar__widget-content">
              <div className="rc__post-wrapper">
                <div className="rc__post d-flex align-items-start">
                  <div className="rc__thumb mr-20">
                    
                      <a>
                        <img src="assets/img/blog/dog.jpg" alt="" />
                      </a>
                    
                    
                  </div>
                  <div className="rc__content">
                    <h6 className="rc__title">
                      
                        Compound Feed
                      
                    </h6>
                    <div className="sr-button">
                        <a href="compound-feed" target="_blank">Read More</a>
                      </div>
                  </div>
                </div>
                <div className="rc__post d-flex align-items-start">
                  <div className="rc__thumb mr-20">
                
                    <a>
                      <img src="assets/img/blog/ikanmaem.jpg" alt="" />
                    </a>
                  
                  </div>
                  <div className="rc__content">
                    <h6 className="rc__title">
                      
                        Pet Food
                      
                    </h6>
                    <div className="sr-button">
                        <a href="pet-food" target="_blank">Read More</a>
                      </div>
                  </div>
                </div>
                <div className="rc__post d-flex align-items-start">
                  <div className="rc__thumb mr-20">
                  
                    <a>
                      <img src="assets/img/blog/concentrate.jpg" alt="" />
                    </a>
                  
                  </div>
                  <div className="rc__content">
                    <h6 className="rc__title">
                      
                       Aqua Food
                    
                    </h6>
                    <div className="sr-button">
                        <a href="aqua-food" target="_blank">Read More</a>
                      </div>
                  </div>
                </div>
                <div className="rc__post d-flex align-items-start">
                  <div className="rc__thumb mr-20">
                  
                    <a>
                      <img src="assets/img/blog/grain.jpg" alt="" />
                    </a>
                  
                  </div>
                  <div className="rc__content">
                    <h6 className="rc__title">
                      
                      Premix & Mash Feed
                      
                    </h6>
                    <div className="rc__meta">
                      <span>
                      <div className="sr-button">
                        <a href="pre-mix" target="_blank">Read More</a>
                      </div>
                      </span>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="blog-sidebar__widget mb-55">
            <div className="blog-sidebar__widget-head mb-30">
              <h3 className="blog-sidebar__widget-title">Category</h3>
            </div>
            <div className="blog-sidebar__widget-content">
              <ul>
                <li>
                  <Link href="/blog">Home</Link>
                </li>
                <li>
                  <Link href="/blog">Installation (5)</Link>
                </li>
                <li>
                  <Link href="/blog">Product (4)</Link>
                </li>
                <li>
                  <Link href="/blog">Project (5)</Link>
                </li>
                <li>
                  <Link href="/blog">Service (5)</Link>
                </li>
                <li>
                  <Link href="/blog">Downloads (5)</Link>
                </li>
                <li>
                  <Link href="/blog">Contact (5)</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-sidebar__widget mb-55">
            <div className="blog-sidebar__widget-head mb-30">
              <h3 className="blog-sidebar__widget-title">Other Keywords</h3>
            </div>
            <div className="blog-sidebar__widget-content">
              <div className="tagcloud">
                <a href="#">Aqua</a>
                <a href="#">Fish</a>
                <a href="#">Premix</a>
                <a href="#">Concentrate</a>
                <a href="#">Mash</a>
                <a href="#">Compound</a>
                <a href="#">Feed</a>
                <a href="#">Pond</a>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default BlogRightSide;
