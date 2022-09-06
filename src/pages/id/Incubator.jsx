import Breadcrumb from "../../components/id/common/Breadcrumb";
import Footer from "../../components/id/common/Footer";
import Header from "../../components/id/common/Header";
import SEO from "../../components/seo";
import AboutArea from "../../components/id/ServicesDetails/AboutArea";
import ServicesDesc from "../../components/id/ServicesDetails/ServicesDesc";
import SmNavigation from "../../components/id/ServicesDetails/SmNavigation";
import SmServices from "../../components/id/ServicesDetails/SmServices";
import Testimonial from "../../components/id/ServicesDetails/Testimonial";


const ServicesDetails = () => {
    return (
        <main>
            <SEO pageTitle="Incubator Details" />
            <Header/>
            <Breadcrumb title="Incubator" subtitle="Services Details" />
            <AboutArea/>
            <SmServices/>
            <Testimonial/>
            <ServicesDesc/>
            <SmNavigation/>
            <Footer/>
        </main>
    );
};

export default ServicesDetails;