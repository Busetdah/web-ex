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
                        <Link href=" ">Installation</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/feedmill">
                             <a> Feedmill</a></Link>
                          </li>
                          <li>
                            <Link href="/Sillow">
                              <a>Silo & Grains Dryer</a>
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
                      </li>
                      <li className="has-dropdown">
                        <Link href=" ">Product</Link>
                        <ul className="sub-menu">
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
                      </li>
                      <li className="has-dropdown">
                        <Link href=" ">Process</Link>
                        <ul className="sub-menu">
                          <li>
                            <a href="compound-feed"   >Compound Feed </a>
                          </li>
                          <li>
                            <a href="pet-food"  >Pet Food</a>
                          </li>
                          <li>
                            <a href="aqua-food" >Aqua Feed</a>
                          </li>
                          <li>
                            <a href="pre-mix" >Premix & Mash Feed</a>
                          </li>
                          <li>
                            <a href="flat-storage">Grains, Soybean & Flat Storage</a>
                          </li>
                        </ul>
                      </li>
                      <li className=" ">
                        <Link href="/Project">Project</Link>
                      </li>
                      <li className=" ">
                        <a href="services" >Service</a>
                       
                      </li>
                      <li className=" ">
                        <Link href="/download">Download</Link>
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

