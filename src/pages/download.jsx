import Breadcrumb from '../components/common/Project';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import SEO from '../components/seo';
import PricingArea from '../components/download/PricingArea';
import ServicesArea from '../components/download/ServicesArea';
import VideoArea from '../components/download/VideoArea';
import BlogArea from '../components/download/BlogArea';

const Services = () => {
    return (
        <main>
            <SEO pageTitle="Project" />
            <Header/>
            <Breadcrumb title=" " subtitle=" " />
            <ServicesArea/>
            <PricingArea/>
            <BlogArea/>
           
            <> </>
            <Footer/>
        </main>
    );
};

export default Services;