import Breadcrumb from "../../components/id/common/Packging";
import Footer from "../../components/id/common/Footer";
import Header from "../../components/id/common/Header";
import SEO from "../../components/seo";
import AboutArea from "../../components/id/Packging/AboutArea";
import ServicesDesc from "../../components/id/Packging/ServicesDesc";
import SmServices from "../../components/id/Packging/SmServices";
import Testimonial from "../../components/id/Packging/Testimonial";
import SdBanner from "../../components/id/Packging/SdBanner";


const ServicesDetails = () => {
    return (
        <main>
            <SEO pageTitle="Packaging" />
            <Header/>
            <Breadcrumb title=" " subtitle="Packaging & Robotic Palletizing" />
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