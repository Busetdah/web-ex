import AboutArea from "../../components/id/HomeThree/AboutArea";
import BlogArea from "../../components/id/HomeThree/BlogArea";
import BranAreaThree from "../../components/id/HomeThree/BranAreaThree";
import CtaArea from "../../components/id/HomeThree/CtaArea";
import FooterThree from "../../components/id/HomeThree/FooterThree";
import HeaderThree from "../../components/id/HomeThree/HeaderThree";
import HeroArea from "../../components/id/HomeThree/HeroArea";
import PricingThree from "../../components/id/HomeThree/PricingThree";
import ProcessArea from "../../components/id/HomeThree/ProcessArea";
import ProjectArea from "../../components/id/HomeThree/ProjectArea";
import ServicesArea from "../../components/id/HomeThree/ServicesArea";
import TeamArea from "../../components/id/HomeThree/TeamArea";
import TestimonialArea from "../../components/id/HomeThree/TestimonialArea";
import SEO from "../../components/seo";

const HomeThree = () => {
  return (
    <main>
      <SEO pageTitle="Home Three" />
      <HeaderThree />
      <HeroArea />
      <AboutArea />
      <ServicesArea />
      <ProjectArea />
      <BranAreaThree />
      <TestimonialArea />
      <PricingThree />
      <TeamArea />
      <CtaArea />
      <ProcessArea />
      <BlogArea />
      <FooterThree />
    </main>
  );
};

export default HomeThree;
