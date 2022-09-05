import Breadcrumb from "../components/id/contactbreadcumb/Breadcrumb";
import Footer from "../components/id/common/Footer";
import Header from "../components/id/common/Header";
import ContactArea from "../components/id/Contact/ContactArea";
import BlogArea from "../components/id/Contact/BlogArea";
import ContactAreaTwo from "../components/id/Contact/ContactAreaTwo";
import ContactMap from "../components/id/Contact/ContactMap";
import SEO from "../components/id/seo";


const contact = () => {
    return (
        <main>
            <SEO pageTitle="Contact" />
            <Header/>
            <Breadcrumb title=" " subtitle="Kontak Kami" />
            <ContactArea/>
            <BlogArea/>
            <ContactAreaTwo/>
            <ContactMap/>
            <Footer/>
        </main>
    );
};

export default contact;