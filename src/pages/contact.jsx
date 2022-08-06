import Breadcrumb from "../components/contactbreadcumb/Breadcrumb";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import ContactArea from "../components/Contact/ContactArea";
import ContactAreaTwo from "../components/Contact/ContactAreaTwo";
import ContactMap from "../components/Contact/ContactMap";
import SEO from "../components/seo";


const contact = () => {
    return (
        <main>
            <SEO pageTitle="Contact" />
            <Header/>
            <Breadcrumb title=" " subtitle="Our Contact" />
            <ContactArea/>
            <ContactAreaTwo/>
            <ContactMap/>
            <Footer/>
        </main>
    );
};

export default contact;