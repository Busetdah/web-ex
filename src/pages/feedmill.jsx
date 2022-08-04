import Breadcrumb from "../components/common/Feedmill";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SEO from "../components/seo";
import AboutArea from "../components/Feedmill/AboutArea";
import ServicesDesc from "../components/Feedmill/ServicesDesc";
import SmNavigation from "../components/Feedmill/SmNavigation";
import SmServices from "../components/Feedmill/SmServices";
import Testimonial from "../components/Feedmill/Testimonial";
import SdBanner from "../components/Feedmill/SdBanner";

const ServicesDetails = () => {
    return (
        <main>
            <SEO pageTitle="Feedmill" />
            <Header/>
            <Breadcrumb title="Installations" subtitle="Feedmill" />
            <AboutArea/>
            <SmServices/>
            <Testimonial/>
            <ServicesDesc/>
            <SmNavigation/>
            <SdBanner/>
            <Footer/>
        </main>
    );
};

export default ServicesDetails;