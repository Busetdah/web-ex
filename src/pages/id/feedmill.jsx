import Breadcrumb from "../../components/id/common/Feedmill";
import Footer from "../../components/id/common/Footer";
import Header from "../../components/id/common/Header";
import SEO from "../../components/id/seo";
import AboutArea from "../../components/id/Feedmill/AboutArea";
import ServicesDesc from "../../components/id/Feedmill/ServicesDesc";
import SmNavigation from "../components/Feedmill/SmNavigation";
import SmServices from "../../components/id/Feedmill/SmServices";
import Testimonial from "../../components/id/Feedmill/Testimonial";
import SdBanner from "../../components/id/Feedmill/SdBanner";

const ServicesDetails = () => {
    return (
        <main>
            <SEO pageTitle="Feedmill" />
            <Header/>
            <Breadcrumb title=" " subtitle="Feedmill" />
            <AboutArea/>
            <SmServices/>
            <Testimonial/>
            <ServicesDesc/>
            <SdBanner/>
            <Footer/>
        </main>
    );
};

export default ServicesDetails;