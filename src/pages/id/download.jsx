import Breadcrumb from '../../components/id/common/Project';
import Footer from '../../components/id/common/Footer';
import Header from '../../components/id/common/Header';
import SEO from '../../components/seo';
import PricingArea from '../../components/id/download/PricingArea';
import ServicesArea from '../../components/id/download/ServicesArea';
import VideoArea from '../../components/download/VideoArea';
import BlogArea from '../../components/id/download/BlogArea';

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