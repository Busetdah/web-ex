import Breadcrumb from '../components/fullservices/Breadcrumb';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import SEO from '../components/seo';
import BlogArea from '../components/Services/BlogArea';
import ServicesArea from '../components/fullservices/ServicesArea';
import BlogDetailsArea from '../components/fullservices/BlogDetailsArea';


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