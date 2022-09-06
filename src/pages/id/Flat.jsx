import Breadcrumb from "../../components/id/common/Flat Storage";
import Footer from "../../components/id/common/Footer";
import Header from "../../components/id/common/Header";
import SEO from "../../components/seo";
import AboutArea from "../../components/id/Flat Storage/AboutArea";
import ServicesDesc from "../../components/id/Flat Storage/ServicesDesc";
import SmServices from "../../components/id/Flat Storage/SmServices";
import Testimonial from "../../components/id/Flat Storage/Testimonial";
import SdBanner from "../../components/id/Flat Storage/SdBanner";


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