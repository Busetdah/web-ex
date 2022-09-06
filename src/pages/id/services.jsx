import Breadcrumb from '../../components/id/fullservices/Breadcrumb';
import Footer from '../../components/id/common/Footer';
import Header from '../../components/id/common/Header';
import SEO from '../../components/seo';
import BlogArea from '../../components/id/Services/BlogArea';
import ServicesArea from '../../components/id/fullservices/ServicesArea';
import BlogDetailsArea from '../../components/id/fullservices/BlogDetailsArea';


const Services = () => {
    return (
        <main>
            <SEO pageTitle="Services" />
            <Header/>
            <Breadcrumb title=" " subtitle="After Sales Service" />
            <BlogDetailsArea/>
            <ServicesArea/>
        
            <Footer/>
        </main>
    );
};

export default Services;