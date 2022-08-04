import Breadcrumb from "../components/common/Packging";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SEO from "../components/seo";
import AboutArea from "../components/Packging/AboutArea";
import ServicesDesc from "../components/Packging/ServicesDesc";
import SmNavigation from "../components/Packging/SmNavigation";
import SmServices from "../components/Packging/SmServices";
import Testimonial from "../components/Packging/Testimonial";
import SdBanner from "../components/Packging/SdBanner";


const ServicesDetails = () => {
    return (
        <main>
            <SEO pageTitle="Packging" />
            <Header/>
            <Breadcrumb title="Installation" subtitle="Packging & Robotic Palletizing" />
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