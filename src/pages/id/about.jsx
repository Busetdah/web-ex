import AboutArea from "../components/id/About/AboutArea";
import CompanyAbout from "../components/id/About/CompanyAbout";
import HistoryArea from "../components/id/About/HistoryArea";
import Team from "../components/id/About/Team";
import Breadcrumb from "../components/id/common/Breadcrumb";
import Footer from "../components/id/common/Footer";
import Header from "../components/id/common/Header";
import SEO from "../components/id/seo";


const about = () => {
    return (
        <main>
            <SEO pageTitle="About" />
            <Header/>
            <Breadcrumb title="Tentang Kami" subtitle="Tentang Perushaan" />
            <AboutArea/>
            <HistoryArea/>
            <Team/>
            <CompanyAbout/>
            <Footer/>
        </main>
    );
};

export default about;