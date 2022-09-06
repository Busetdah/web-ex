import Breadcrumb from '../../components/id/common/Breadcrumb';
import Footer from '../../components/id/common/Footer';
import Header from '../../components/id/common/Header';
import SEO from '../../components/seo';
import BlogArea from '../../components/id/Services/BlogArea';
import FactArea from '../../components/id/Team/FactArea';
import TeamArea from '../../components/id/Team/TeamArea';

const team = () => {
    return (
        <main>
            <SEO pageTitle="Team" />
            <Header/>
            <Breadcrumb title="Team" subtitle="Expert Team" />
            <TeamArea/>
            <FactArea/>
            <BlogArea/>
            <Footer/>
        </main>
    );
};

export default team;