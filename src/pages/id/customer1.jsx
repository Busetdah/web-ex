import Breadcrumb from "../../components/id/common/Silow & Gry Drayer";
import Footer from "../../components/id/common/Footer";
import Header from "../../components/id/common/Header";
import SEO from "../../components/id/seo";
import Blank from "../../components/id/customer1/blank";
import BrandArea from "../../components/id/customer1/BrandArea";



const ServicesDetails = () => {
    return (
        <main>
            <SEO pageTitle="customer" />
            <Header/>
            <Breadcrumb title=" " subtitle="Our Customer" />
             <Blank/>
            <BrandArea/>
           
            <Footer/>
        </main>
    );
};

export default ServicesDetails;