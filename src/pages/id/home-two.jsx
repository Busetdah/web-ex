import AboutArea from "../../components/id/HomeTwo/AboutArea";
import AppointmentCta from "../../components/id/HomeTwo/AppointmentCta";
import BrandAreaTwo from "../../components/id/HomeTwo/BrandAreaTwo";
import FooterTwo from "../../components/id/HomeTwo/FooterTwo";
import HeaderTwo from "../../components/id/HomeTwo/HeaderTwo";
import HeroSliderTwo from "../../components/id/HomeTwo/HeroSliderTwo";
import NewsFeed from "../../components/id/HomeTwo/NewsFeed";
import Pricing from "../../components/id/HomeTwo/Pricing";
import ProjectArea from "../../components/id/HomeTwo/ProjectArea";
import SmServices from "../../components/id/HomeTwo/SmServices";
import Testimonial from "../../components/id/HomeTwo/Testimonial";
import VideoArea from "../../components/id/HomeTwo/VideoArea";
import SEO from "../../components/seo";


const HomeTwo = () => {
    return (
        <main>
            <SEO pageTitle="Home Two" />
            <HeaderTwo/>
            <HeroSliderTwo/>
            <SmServices/>
            <AboutArea/>
            <ProjectArea/>
            <VideoArea/>
            <Testimonial/>
            <Pricing/>
            <AppointmentCta/>
            <BrandAreaTwo/>
            <NewsFeed/>
            <FooterTwo/>
        </main>
    );
};

export default HomeTwo;