import Link from 'next/link';
import dynamic from "next/dynamic";
const Collapsible = dynamic(() => import("react-collapsible"), {
  ssr: false,
});
import useGlobalContext from "../../hook/useGlobalContext";

const Footer = () => {
const { showSidebar, setShowSidebar } = useGlobalContext(); 
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
                      <Collapsible
                    trigger={<ul><li><a>Installation</a></li></ul>}
                    triggerTagName="div"
                    triggerOpenedClassName="icon_closeQ"
                    triggerClassName="iconAddQ"
                    open={false}
                  >
                    <ul
                      onClick={() => setShowSidebar(false)}
                      className="sidebar_sub_menuQ"
                    >
                      <li>
                        <Link href="/feedmill">Feedmill</Link>
                      </li>
                      <li>
                            <Link href="/Sillow">
                              <a>Sillo & Grain Dryer</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/Flat">
                              <a>Flat Storage Warehouse</a>

                              </Link>
                          </li>
                          <li>
                            <Link href="/Packaging">
                              <a>Packaging & Robotic Palletizing</a></Link>
                          </li>
                          <li>
                            <Link href="/Automation">
                              <a>Automation</a></Link>
                          </li>
                    </ul>
                  </Collapsible>
                  <Collapsible
                    trigger={<li><a>Product</a></li>}
                    triggerTagName="div"
                    triggerOpenedClassName="icon_closeQ"
                    triggerClassName="iconAddQ"
                    open={false}
                  >
                    <ul
                      onClick={() => setShowSidebar(false)}
                      className="sidebar_sub_menuQ"
                    >
                         <li>
                            <a href="https://www.awila.de/" target="_blank" rel="noopener noreferrer">Awila</a>
                          </li>
                          <li>
                            <a href="https://www.sukup.com/" target="_blank" rel="noopener noreferrer">Sukup</a>
                          </li>
                          <li>
                            <a href="https://www.concetti.com/en-us/" target="_blank" rel="noopener noreferrer">Concetti</a>
                          </li>
                          <li>
                            <a href="https://www.emka-incubators.com/en/" target="_blank" rel="noopener noreferrer">Emka Incubator</a>
                          </li>
                          <li>
                            <a href="https://www.tedom.com/" target="_blank" rel="noopener noreferrer">Tedom</a>
                          </li>
                    </ul>
                  </Collapsible>
                  <Collapsible
                    trigger={<li><a>Process</a></li>}
                    triggerTagName="div"
                    triggerOpenedClassName="icon_closeQ"
                    triggerClassName="iconAddQ"
                    open={false}
                  >
                    <ul
                      onClick={() => setShowSidebar(false)}
                      className="sidebar_sub_menuQ"
                    >
                         <li>
                            <a href="compound-feed">Compound Feed</a>
                          </li>
                          <li>
                            <a href="pet-food">Pet Food</a>
                          </li>
                          <li>
                            <a href="aqua-food">Aqua Feed</a>
                          </li>
                          <li>
                            <a href="pre-mix">Premix & Mash Feed</a>
                          </li>
                          <li>
                            <a href="flat-storage">Grains, Soybean & Flat Storage</a>
                          </li>
                    </ul>
                  </Collapsible>
                        <li>
                          <Link href="Project">Project</Link>
                        </li>
                        <li>
                          <Link href="download">Download</Link>
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
                          <Link href="Project">Project</Link>
                        </li>
                        <li>
                          <Link href="download">Download</Link>
                        <li>
                          <Link href="contact">Contact</Link>
                        </li>
                    
                     
                    
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="footer__widget mb-40">
                  <h5 className="footer__widget-title"> </h5>
                  <div className="footer__widget-content">
                    <div className="footer__links">
                      <ul>
                        <li>
                          <Link href="/services">Services</Link>
                        </li>
                        <li>
                          <Link href="customer1">Customer</Link>
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
                      Subscribe to our newsletter today by click button below to receive updates on
                      the latest news, releases and special offers.
                    </p>
                    <div className="footer__subscribe-form p-relative mb-30">
                      <form action="https://docs.google.com/forms/d/1NLC0o31YAVPeTt-ASS0ZDK48CylhOgGmJAy0kVLHKEU/edit">
                        <button type="submit" className="s-button">
                          Subscribe
                        </button>
                      </form>
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
                      Copyright & Design By <a href="#">Delta Enginering</a> - 2022
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="footer__copyright-links text-sm-end">
                    <Link href="/faq">Faq</Link>
                    <Link href="/contact">Careers </Link>
                    <Link href="/contact">Refund Policy</Link>
                    <Link href="id">Indonesia</Link>
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
