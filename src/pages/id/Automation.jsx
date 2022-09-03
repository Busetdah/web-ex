import Breadcrumb from "../components/common/Automation";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SEO from "../components/seo";
import AboutArea from "../components/Automation/AboutArea";
import ServicesDesc from "../components/Automation/ServicesDesc";
import SmNavigation from "../components/Automation/SmNavigation";
import SmServices from "../components/Automation/SmServices";
import Testimonial from "../components/Automation/Testimonial";
import SdBanner from "../components/Automation/SdBanner";


const ServicesDetails = () => {
    return (
        <main>
            <SEO pageTitle="Automation" />
            <Header/>
            <Breadcrumb title=" " subtitle="Automation" />
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