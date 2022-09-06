import Breadcrumb from "../../components/id/common/Automation";
import Footer from "../../components/id/common/Footer";
import Header from "../../components/id/common/Header";
import SEO from "../../components/id/seo";
import AboutArea from "../../components/id/Automation/AboutArea";
import ServicesDesc from "../../components/id/Automation/ServicesDesc";
import SmServices from "../../components/id/Automation/SmServices";
import Testimonial from "../../components/id/Automation/Testimonial";
import SdBanner from "../../components/id/Automation/SdBanner";


const ServicesDetails = () => {
    return (
        <main>
            <SEO pageTitle="Automation" />
            <Header/>
            <Breadcrumb title=" " subtitle="Otomatisasi" />
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