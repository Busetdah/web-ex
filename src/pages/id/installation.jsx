import Breadcrumb from '../../components/id/common/Breadcrumb';
import Footer from '../../components/id/common/Footer';
import Header from '../../components/id/common/Header';
import SEO from '../../components/id/seo';
import BlogArea from '../../components/id/Services/BlogArea';
import PricingArea from '../../components/id/Services/PricingArea';
import ServicesArea from '../../components/id/Services/ServicesArea';
import VideoArea from '../../components/id/Services/VideoArea';

const Services = () => {
    return (
        <main>
            <SEO pageTitle="Installation Feedmill" />
            <Header/>
            <Breadcrumb title="Feedmill" subtitle="What we do" />
            <ServicesArea/>
            <PricingArea/>
            <VideoArea/>
            <BlogArea/>
            <Footer/>
        </main>
    );
};

export default Services;