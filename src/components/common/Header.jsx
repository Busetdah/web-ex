import Link from "next/link";
import dynamic from 'next/dynamic';
import useSticky from "../../hook/use-sticky";
import useGlobalContext from "../../hook/useGlobalContext";
import Sidebar from "./Sidebar";

const Header = () => {
  const { headerSticky } = useSticky();
  const { setShowSidebar } = useGlobalContext();
  return (
    <>
      <header
        id="header-sticky"
        className={`${ headerSticky ? "header-area header__sticky" : "header-area"}`}
      >
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-md-6 col-6">
              <div className="logo-area">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img src="assets/img/logo/logo-deltaeng7.png" alt="" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-10 col-lg-10 col-md-6 col-6">
              <div className="menu-area menu-padding">
                <div className="main-menu">
                  <nav id="mobile-menu" className="d-none d-lg-block">
                    <ul>
                      <li className=" ">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/services">Installation</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/feedmill">
                             <a> Feedmill</a></Link>
                          </li>
                          <li>
                            <Link href="/Sillow">
                              <a>Sillo & Grain Dryer</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/Flat">
                              <a>Flat Storage Warehaouse</a>

                              </Link>
                          </li>
                          <li>
                            <Link href="/Packging">
                              <a>Packging & Robotic Palletizing</a></Link>
                          </li>
                          <li>
                            <Link href="/Automation">
                              <a>Automation</a></Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/about">Product</Link>
                        <ul className="sub-menu">
                          <li>
                            <a href="https://www.awila.de/">Awila</a>
                          </li>
                          <li>
                            <a href="https://www.sukup.com/">Sukup</a>
                          </li>
                          <li>
                            <a href="https://www.concetti.com/en-us/">Concetti</a>
                          </li>
                          <li>
                            <a href="https://www.emka-incubators.com/en/">Emka Incubator</a>
                          </li>
                          
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <Link href="/blog">Process</Link>
                        <ul className="sub-menu">
                          <li>
                            <a href="compound-feed"   >Compound Feed </a>
                          </li>
                          <li>
                            <a href="pet-food"  >Pet Food</a>
                          </li>
                          <li>
                            <a href="aqua-food" >Aqua Food</a>
                          </li>
                          <li>
                            <a href="pre-mix" >Premix & Mash Feed</a>
                          </li>
                          <li>
                            <a href="flat-storage">Grain, Soybean & Flat Storage</a>
                          </li>
                        </ul>
                      </li>
                      <li className=" ">
                        <Link href="/Project">Project</Link>
                      </li>
                      <li className=" ">
                        <a href="services" >Service</a>
                       
                      </li>
                      <li className="has-dropdown">
                        <Link href="/blog">Download</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/blog">Brochure</Link>
                          </li>
                          <li>
                            <Link href="/blog-details">Pet Food</Link>
                          </li>
                          <li>
                            <Link href="/blog-details">Aqua Food</Link>
                          </li>
                          <li>
                            <Link href="/blog-details">Premix</Link>
                          </li>
                          <li>
                            <Link href="/blog-details">Grain, Soybean & Flat Storage</Link>
                          </li>
                        </ul>
                      </li>
                      <li className=" ">
                        <Link href="/customer1">Customer</Link>
                      </li>
                      <li>
                        <a href="/contact"  >Contact </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div
                onClick={() => setShowSidebar(true)}
                className="side-menu-icon d-lg-none text-end"
              >
                <button
                  className="info-toggle-btn f-right sidebar-toggle-btn"
                >
                  <i className="fal fa-bars"></i>
                </button>
              </div>
            </div>
           
          </div>
        </div>
      </header>

      {/* Sidebar  */}
      <Sidebar />
      {/* Sidebar  */}
    </>
  );
};

export default dynamic(()=> Promise.resolve(Header), {ssr: false});

