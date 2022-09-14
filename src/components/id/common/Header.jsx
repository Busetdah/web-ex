import Link from "next/link";
import dynamic from 'next/dynamic';
import useSticky from "../../../hook/use-sticky";
import useGlobalContext from "../../../hook/useGlobalContext";
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
                        <Link href="/">Beranda</Link>
                      </li>
                      <li className="has-dropdown">
                        <Link href=" ">Instalasi</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="id/feedmill">
                             <a> Pabrik Pakan</a></Link>
                          </li>
                          <li>
                            <Link href="id/Sillow">
                              <a>Pengering Silo & Biji-bijian</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="id/Flat">
                              <a>Gudang Penyimpanan Serbaguna</a>

                              </Link>
                          </li>
                          <li>
                            <Link href="id/Packaging">
                              <a>Pengemasan & Palletisasi Robot</a></Link>
                          </li>
                          <li>
                            <Link href="id/Automation">
                              <a>Otomatisasi</a></Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <Link href=" ">Produk</Link>
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
                        <Link href=" ">Proses</Link>
                        <ul className="sub-menu">
                          <li>
                            <a href="id/compound-feed"   >Pakan Campuran</a>
                          </li>
                          <li>
                            <a href="id/pet-food"  >Pakan Hewan</a>
                          </li>
                          <li>
                            <a href="id/aqua-food" >Pakan Ikan</a>
                          </li>
                          <li>
                            <a href="id/pre-mix" >Premix & Pakan Mash</a>
                          </li>
                          <li>
                            <a href="id/flat-storage">Penyimpanan Biji-bijian, Kedelai & Serbaguna</a>
                          </li>
                        </ul>
                      </li>
                      <li className=" ">
                        <Link href="id/Project">Proyek</Link>
                      </li>
                      <li className=" ">
                        <a href="id/services" >Servis</a>
                       
                      </li>
                      <li className=" ">
                        <Link href="id/download">Unduh</Link>
                      </li>
                      <li className=" ">
                        <Link href="id/customer1">Pelanggan</Link>
                      </li>
                      <li>
                        <a href="id/contact"  >Kontak </a>
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

