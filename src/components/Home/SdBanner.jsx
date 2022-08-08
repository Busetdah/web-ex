import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import SwiperCore, { Autoplay } from "swiper";

const SdBanner = () => {
  const bannerData = [
    {
      id: 1,
      img: "assets/img/banner/deltaeng1.jpeg",
      subtitle: "Automation",
      tittle : "Deltaeng",
      link :  "/Automation"
    },
    {
      id: 2,
      img: "assets/img/banner/deltaeng2.jpeg",
      subtitle: "Feedmill Installation",
      tittle : "Deltaeng1",
      link :  "/feedmill"
    },
    {
      id: 3,
      img: "assets/img/banner/deltaeng3.jpeg",
      subtitle: "Construction",
      tittle : "Deltaeng2",
      link :  "/Sillow"
    },
    {
      id: 4,
      img: "assets/img/banner/deltaeng4.jpeg",
      subtitle: "Flat Storage",
      tittle : "Deltaeng3",
      link :  "/Flat"
    },
  ];
  return (
    <>
      <section className="sd-banner-area pb-110">
        <div className="banner__slider swiper-container">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            className="banner__wrapper"
            autoplay={{ delay: 4000 }}
            modules={[Autoplay]}
          >
            {bannerData.map((banner) => {
              return (
                <SwiperSlide key={banner.id}>
                  <div
                    className="sd-banner__item swiper-slide"
                    style={{
                      background: `url(${banner.img})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="container-0">
                      <div className="row g-0">
                        <div className="col-xl-3 banner-slide-height d-none d-xl-block">
                          <div className="slide-border"></div>
                        </div>
                        <div className="col-xl-3 banner-slide-height">
                          <div className="slide-border"></div>
                          <div className="sd-content">
                          <span className="sd-meta">
                          </span>
                            
                            <h5>
                              <Link href="/portfolio-details">
                              {banner.subtitle}
                              </Link>
                            </h5>
                            <div className="project-info">
                              <Link href={banner.link}>
                                <a href={banner.link}> <i className="fal fa-plus"></i></a>
                              </Link>
                              <span>
                                
                              </span>
                            </div>
                            <div className="sd-bg-icon">
                              <i className="flaticon-industrial"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 banner-slide-height d-none d-xl-block">
                          <div className="slide-border"></div>
                        </div>
                        <div className="col-xl-3 banner-slide-height d-none d-xl-block">
                          <div className="slide-border"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

        </div>
      </section>
    </>
  );
};

export default SdBanner;
