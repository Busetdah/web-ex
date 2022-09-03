import Link from 'next/link';
import useGlobalContext from '../../../hook/useGlobalContext';
import VideoModal from '../common/VideoModal';

const FeatureArea = () => {
  const {show,handleClose,handleShow} = useGlobalContext();

  return (
    <>

      <section className="feature__area pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="feature__left mb-40">
                <div className="section__wrapper mb-45">
                  <h4 className="section__title">
                    Our Proceses
                  </h4>
               
                </div>
                <div className="feature__list">
                  <ul>
                    <li>
                      <Link href="/compound-feed">
                        <a>Compound Feed
                        <i className="fa-light fa-arrow-right-long"></i></a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/petfood">
                        <a>Pet Food
                        <i className="fa-light fa-arrow-right-long"></i></a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/aqua-feed">
                        <a>Aqua Feed
                        <i className="fa-light fa-arrow-right-long"></i></a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/pre-mix">
                        <a>Premix
                        <i className="fa-light fa-arrow-right-long"></i></a>
                      </Link>
                    </li> <li>
                      <Link href="/flat-storage">
                        <a>Grains, Soybean & Flat Storage
                        <i className="fa-light fa-arrow-right-long"></i></a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="feature__images w-img mb-40">
                <img src="assets/img/feature/fet-01.jpg" alt="" />
                <div className="vide-button">
                  <button onClick={handleShow}
                    href="https://www.youtube.com/watch?v=o4GuSJYSzrY"
                    className="popup-video"
                  >
                    <i className="fa-solid fa-play"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal show={show} handleClose={handleClose} />
    </>
  );
};

export default FeatureArea;
