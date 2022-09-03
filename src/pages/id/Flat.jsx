import Breadcrumb from "../components/common/Flat Storage";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SEO from "../components/seo";
import AboutArea from "../components/Flat Storage/AboutArea";
import ServicesDesc from "../components/Flat Storage/ServicesDesc";
import SmNavigation from "../components/Flat Storage/SmNavigation";
import SmServices from "../components/Flat Storage/SmServices";
import Testimonial from "../components/Flat Storage/Testimonial";
import SdBanner from "../components/Flat Storage/SdBanner";


const ServicesDetails = () => {
    return (
        <main>
            <SEO pageTitle="Flat Details" />
            <Header/>
            <Breadcrumb title=" " subtitle="Flat Storage Warehouse" />
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