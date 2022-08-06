import Breadcrumb from "../components/common/Silow & Gry Drayer";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SEO from "../components/seo";
import BlogArea from '../components/customer1/BlogArea';
import BrandArea from "../components/customer1/BrandArea";
import Testimonial from "../components/customer1/Testimonial";

const ServicesDetails = () => {
    return (
        <main>
            <SEO pageTitle="customer" />
            <Header/>
            <Breadcrumb title=" " subtitle="Our Customer" />
            
            <BrandArea/>
            <Testimonial/>
            <Footer/>
        </main>
    );
};

export default ServicesDetails;