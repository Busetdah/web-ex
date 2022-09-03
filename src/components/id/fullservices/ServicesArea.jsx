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
          Regular  <br /> Inspections
        </>
      ),
    },
    {
      id: 3,
      icon: "flaticon-crusher",
      title: (
        <>
          Spesific  <br /> Maintenance
        </>
      ),
    },
    {
      id: 4,
      icon: "flaticon-factory",
      title: (
        <>
          Prepentive <br /> &amp; Maintenance
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
                        We help businesses elevate their value through custom
                        software development 
                      </p>
                      <div className="ser__more-option mt-15">
                        <Link href="/services-details">
                          <a>Service Details
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
