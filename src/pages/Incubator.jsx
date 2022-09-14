import Breadcrumb from "../components/common/Breadcrumb";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SEO from "../components/seo";
import AboutArea from "../components/ServicesDetails/AboutArea";
import ServicesDesc from "../components/ServicesDetails/ServicesDesc";
import SmNavigation from "../components/ServicesDetails/SmNavigation";
import SmServices from "../components/ServicesDetails/SmServices";
import Testimonial from "../components/ServicesDetails/Testimonial";


const ServicesDetails = () => {
    return (
        <main>
            <SEO pageTitle="Incubator Details" />
            <Header/>
            <Breadcrumb title="Incubator" subtitle=" " />
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