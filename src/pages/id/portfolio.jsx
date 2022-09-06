import Breadcrumb from "../../components/id/common/Breadcrumb";
import Footer from "../../components/id/common/Footer";
import Header from "../../components/id/common/Header";
import PortfolioArea from "../../components/id/Portfolio/PortfolioArea";
import SEO from "../../components/seo";


const portfolio = () => {
    return (
        <main>
          <SEO pageTitle="Portfolio" />
          <Header/>
          <Breadcrumb title="Portfolio" subtitle="Case Study" />  
          <PortfolioArea/>
          <Footer/>
        </main>
    );
};

export default portfolio;