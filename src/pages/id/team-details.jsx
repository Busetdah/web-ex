import Breadcrumb from "../../components/id/common/Breadcrumb";
import Footer from "../../components/id/common/Footer";
import Header from "../../components/id/common/Header";
import SEO from "../../components/seo";
import TeamDetailsArea from "../../components/id/TeamDetails/TeamDetailsArea";


const TeamDetails = () => {
    return (
        <main>
            <SEO pageTitle="Team Details" />
            <Header/>
            <Breadcrumb title="Team" subtitle="Team Details" />
            <TeamDetailsArea/>
            <Footer/>
        </main>
    );
};

export default TeamDetails;