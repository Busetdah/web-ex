import Breadcrumb from "../../components/id/common/Breadcrumb";
import Footer from "../../components/id/common/Footer";
import Header from "../../components/id/common/Header";
import PortfolioDetailsArea from "../../components/id/PortfolioDetails/PortfolioDetailsArea";
import RelatedService from "../../components/id/PortfolioDetails/RelatedService";
import SEO from "../../components/id/seo";


const PortfolioDetails = () => {
    return (
        <main>
            <SEO pageTitle="Portfolio Details" />
            <Header/>
            <Breadcrumb title="Case" subtitle="Case Details" />
            <PortfolioDetailsArea/>
            <RelatedService/>
            <Footer/>
        </main>
    );
};

export default PortfolioDetails;