import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-area black-bg-2 pt-100 fix">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4">
                <div className="footer__widget mb-40">
                  <div className="footer__logo">
                    <Link href="/">
                      <a>
                        <img src="assets/img/logo/logo-deltaeng7.png" alt="" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="footer__widget mb-40">
                  <h5 className="footer__widget-title">Pages</h5>
                  <div className="footer__widget-content">
                    <div className="footer__links">
                      <ul>
                        <li>
                          <Link href="about">About Us</Link>
                        </li>
                        <li>
                          <Link href="isntallation">Installation</Link>
                        </li>
                        <li>
                          <Link href="/about">Product</Link>
                        </li>
                        <li>
                          <Link href="/blog">Process</Link>
                        </li>
                        <li>
                          <Link href="Project">Project</Link>
                        </li>
                        <li>
                          <Link href="/blog">Download</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="footer__widget mb-40">
                  <h5 className="footer__widget-title">Other Pages</h5>
                  <div className="footer__widget-content">
                    <div className="footer__links">
                      <ul>
                        <li>
                          <Link href="contact">Contact</Link>
                        </li>
                        <li>
                          <Link href="customer1">Customer</Link>
                        </li>
                        <li>
                          <Link href="Incubator">Incubator</Link>
                        </li>
                        <li>
                          <Link href="feedmill">Feedmill</Link>
                        </li>
                        <li>
                          <Link href="compound-feed">Compound Feed</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="footer__widget mb-40">
                  <h5 className="footer__widget-title">Our Services</h5>
                  <div className="footer__widget-content">
                    <div className="footer__links">
                      <ul>
                        <li>
                          <Link href="/services">Overhaul</Link>
                        </li>
                        <li>
                          <Link href="/services">Regular Inspections</Link>
                        </li>
                        <li>
                          <Link href="/services">Spesific Maintenance</Link>
                        </li>
                        <li>
                          <Link href="/services">Prepentive & Maintenance</Link>
                        </li>
                        <li>
                          <Link href="/services">Spare Parts Progamme</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-8 col-sm-8">
                <div className="footer__widget mb-40">
                  <h5 className="footer__widget-title">Connect with us</h5>
                  <div className="footer__widget-content">
                    <p className="ft-text mb-35">
                      Subscribe to out newsletter today to receive updates on
                      the latest news, releases and special offers. We respect
                      your privacy. Your information is safe.
                    </p>
                    <div className="footer__subscribe-form p-relative mb-30">
                      <form action="#">
                        <input type="email" placeholder="Email Address" />
                        <button type="submit" className="s-button">
                          Subscribe
                        </button>
                      </form>
                    </div>
                    <div className="footer__social">
                      <div className="footer__social-info">
                        <span>Social Network:</span>
                        <div className="footer__social-icon">
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
                            <i className="fab fa-youtube"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__copyright white-bg mt-60">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="footer__copyright-text">
                    <p>
                      Copyright & Design By <a href="#">Delta Engineering</a> - 2022
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="footer__copyright-links text-sm-end">
                    <Link href="/faq">Faq</Link>
                    <Link href="/contact">Careers </Link>
                    <Link href="/contact">Refund Policy</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__shape-1">
            <img src="assets/img/footer/footer-shape-1.png" alt="" />
          </div>
          <div className="footer__shape-2">
            <img src="assets/img/footer/footer-shape-2.png" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
