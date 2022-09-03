import dynamic from 'next/dynamic'
import Footer from "../../components/id/common/Footer";
import Header from "../../components/id/common/Header";
import AboutUs from "../../components/id/Home/AboutUs";
import BlogArea from "../../components/id/Home/BlogArea";
import BrandArea from "../../components/id/Home/BrandArea";
import FeatureArea from "../../components/id/Home/FeatureArea";
import HeroSlider from "../../components/id/Home/HeroSlider";
import ProcessArea from "../../components/id/Home/ProcessArea";
import SdBanner from "../../components/id/Home/SdBanner";
import ServicesArea from "../../components/id/Home/ServicesArea";
import TeamArea from "../../components/id/Home/TeamArea";
import Testimonial from "../../components/id/Home/Testimonial";
import SEO from "../../components/seo";

const index = () => {
    return (
        <main>
          <SEO pageTitle="Home Default" />
          <Header/>  
          <HeroSlider/>
          <AboutUs/>
          <ServicesArea/>
          <SdBanner/>
          <BrandArea/>
          <FeatureArea/>
          <Testimonial/>
          <TeamArea/>
          <ProcessArea/>
          <BlogArea/>
          <Footer/>
        </main>
    );
};

export default dynamic(()=> Promise.resolve(index), {ssr: false});