import Link from 'next/link';
import dynamic from "next/dynamic";
const Collapsible = dynamic(() => import("react-collapsible"), {
  ssr: false,
});
import useGlobalContext from "../../../hook/useGlobalContext";

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
                  <h5 className="footer__widget-title">Halaman</h5>
                  <div className="footer__widget-content">
                    <div className="footer__links">
                  <ul>
                    <Collapsible
                    trigger={<ul><li><a>Instalasi</a></li></ul>}
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
                        <Link href="id/feedmill">Pabrik Pakan</Link>
                      </li>
                      <li>
                            <Link href="id/Sillow">
                              <a>Pengering Silo & Biji-bijian</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="id/Flat">
                              <a>Pengemasan & Palletisasi Robot</a>

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
                  </Collapsible>
                  <Collapsible
                    trigger={<li><a>ProduK</a></li>}
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
                    trigger={<li><a>Proses</a></li>}
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
                            <a href="id/compound-feed">Pakan Campuran</a>
                          </li>
                          <li>
                            <a href="id/pet-food">Pakan Hewan</a>
                          </li>
                          <li>
                            <a href="id/aqua-food">Pakan Ikan</a>
                          </li>
                          <li>
                            <a href="id/pre-mix">Premix & Pakan Mash</a>
                          </li>
                          <li>
                            <a href="id/flat-storage">Penyimpanan Biji-bijian, Kedelai & Serbaguna</a>
                          </li>
                    </ul>
                  </Collapsible>
                       
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="footer__widget mb-40">
                  <h5 className="footer__widget-title">Halaman Lainnya</h5>
                  <div className="footer__widget-content">
                    <div className="footer__links">
                      <ul>
                      <li>
                          <Link href="id/Project">Proyek</Link>
                        </li>
                        <li>
                          <Link href="id/download">Unduh</Link>
                        </li>
                        <li>  
                          <Link href="id/contact">Kontak</Link>
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
                          <Link href="id/services">Servis</Link>
                        </li>
                        <li>
                          <Link href="id/customer1">Pelanggan</Link>
                        </li>
                     
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-xl-4 col-lg-4 col-md-8 col-sm-8">
                <div className="footer__widget mb-40">
                  <h5 className="footer__widget-title">Terhubung dengan kami</h5>
                  <div className="footer__widget-content">
                    <p className="ft-text mb-35">
                    Berlangganan buletin kami hari ini dengan mengklik tombol di bawah ini untuk menerima pembaruan tentang
                      berita terbaru, rilis dan penawaran khusus.
                    </p>
                    <div className="footer__subscribe-form p-relative mb-30">
                      <form action="https://docs.google.com/forms/d/1NLC0o31YAVPeTt-ASS0ZDK48CylhOgGmJAy0kVLHKEU/edit">
                        <button type="submit" className="s-button">
                        Berlangganan
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
                    <Link href="/">English</Link>
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
