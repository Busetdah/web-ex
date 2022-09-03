import Breadcrumb from '../components/common/Project';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import SEO from '../components/seo';
import PricingArea from '../components/Project/PricingArea';
import ServicesArea from '../components/Project/ServicesArea';
import VideoArea from '../components/Project/VideoArea';
import BlogArea from '../components/Project/BlogArea';

const Services = () => {
    return (
        <main>
            <SEO pageTitle="Project" />
            <Header/>
            <Breadcrumb title=" " subtitle="Our Project" />
            <ServicesArea/>
            <PricingArea/>
            <BlogArea/>
            <VideoArea/>
            <> </>
            <Footer/>
        </main>
    );
};

export default Services;