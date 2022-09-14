import Breadcrumb from '../../components/id/common/Project';
import Footer from '../../components/id/common/Footer';
import Header from '../../components/id/common/Header';
import SEO from '../../components/seo';
import PricingArea from '../../components/id/Project/PricingArea';
import ServicesArea from '../../components/id/Project/ServicesArea';
import VideoArea from '../../components/Project/VideoArea';
import BlogArea from '../../components/id/Project/BlogArea';

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