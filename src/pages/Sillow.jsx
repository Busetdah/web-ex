import Breadcrumb from "../components/common/Silow & Gry Drayer";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SEO from "../components/seo";
import AboutArea from "../components/Sillo & Gry Drayer/AboutArea";
import ServicesDesc from "../components/Sillo & Gry Drayer/ServicesDesc";
import SmNavigation from "../components/Sillo & Gry Drayer/SmNavigation";
import SmServices from "../components/Sillo & Gry Drayer/SmServices";
import Testimonial from "../components/Sillo & Gry Drayer/Testimonial";
import SdBanner from "../components/Sillo & Gry Drayer/SdBanner";


const ServicesDetails = () => {
    return (
        <main>
            <SEO pageTitle="Silo & Grains Drayer" />
            <Header/>
            <Breadcrumb title=" " subtitle=" " />
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