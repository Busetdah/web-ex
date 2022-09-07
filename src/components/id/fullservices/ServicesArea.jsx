import Link from "next/link";

const ServicesArea = () => {
  const servicesData = [
    {
      id: 1,
      icon: "flaticon-ai",
      title: "Overhaul",
    },
    {
      id: 2,
      icon: "flaticon-warehouse",
      title: (
        <>
        Inspeksi  <br /> Reguler
        </>
      ),
    },
    {
      id: 3,
      icon: "flaticon-crusher",
      title: (
        <>
         Pemeliharaan <br /> Maintenance
        </>
      ),
    },
    {
      id: 4,
      icon: "flaticon-factory",
      title: (
        <>
          Pemeliharaan  <br /> &amp; Pencegahan
        </>
      ),
    },
   
    
  ];
  return (
    <>
      <section className="services__area-2 pt-90 pb-80">
        <div className="container">
          <div className="row mt-30">
            {servicesData.map((service) => {
              return (
                <div key={service.id} className="col-xl-3 col-lg-3 col-md-6">
                  <div className="services__item services__item-grid text-center mb-40">
                    <div className="services__item-content">
                      <div className="ser__icon mb-30">
                        <i className={`${service.icon}`}></i>
                      </div>
                      <h5 className="ser__title mb-10">
                        <Link href="/services-details">{service.title}</Link>
                      </h5>
                      <p></p>
                      <p>
                      Kami membantu bisnis meningkatkan nilainya melalui kebiasaan
                        pengembangan perangkat lunak
                      </p>
                      <div className="ser__more-option mt-15">
                        <Link href="/services-details">
                          <a>Detail Layanan
                          <i className="fal fa-long-arrow-right"></i></a>
                        </Link>
                      </div>
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

export default ServicesArea;
