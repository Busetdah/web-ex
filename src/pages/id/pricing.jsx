import Breadcrumb from "../../components/id/common/Breadcrumb";
import Footer from "../../components/id/common/Footer";
import Header from "../../components/id/common/Header";
import Pricing from "../../components/id/HomeTwo/Pricing";
import PricingArea from "../../components/id/Pricing/PricingArea";
import SEO from "../../components/id/seo";

const PricingPage = () => {
  return (
    <main>
      <SEO pageTitle="Pricing" />
      <Header />
      <Breadcrumb title="Pricing" subtitle="Price & Plan" />
      <PricingArea />
      <Pricing />
      <Footer />
    </main>
  );
};

export default PricingPage;
