import React from "react";
import Breadcrumb from "../../components/id/common/Breadcrumb";
import Footer from "../../components/id/common/Footer";
import Header from "../../components/id/common/Header";
import FaqArea from "../../components/id/Faq/FaqArea";
import FaqAreaTwo from "../../components/id/Faq/FaqAreaTwo";
import BrandArea from "../../components/id/Home/BrandArea";
import SEO from "../../components/seo";

const faq = () => {
  return (
    <main>
      <SEO pageTitle="Faq" />
      <Header />
      <Breadcrumb title="FAQ" subtitle="FAQ Page" />
      <FaqArea />
      <FaqAreaTwo />
      <section className="brand__area pt-110">
        <BrandArea />
      </section>
      <Footer />
    </main>
  );
};

export default faq;
