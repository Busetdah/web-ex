import Breadcrumb from "../../components/id/common/Silow & Gry Drayer";
import Footer from "../../components/id/common/Footer";
import Header from "../../components/id/common/Header";
import SEO from "../../components/id/seo";
import AboutArea from "../../components/id/Sillo & Gry Drayer/AboutArea";
import ServicesDesc from "../../components/id/Sillo & Gry Drayer/ServicesDesc";
import SmNavigation from "../components/Sillo & Gry Drayer/SmNavigation";
import SmServices from "../../components/id/Sillo & Gry Drayer/SmServices";
import Testimonial from "../../components/id/Sillo & Gry Drayer/Testimonial";
import SdBanner from "../../components/id/Sillo & Gry Drayer/SdBanner";


const ServicesDetails = () => {
    return (
        <main>
            <SEO pageTitle="Silo & Grains Drayer" />
            <Header/>
            <Breadcrumb title=" " subtitle="Silo & Grains Drayer" />
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