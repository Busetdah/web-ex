import BlogArea from "../../components/id/Blog/BlogArea";
import Breadcrumb from "../../components/id/common/Breadcrumb";
import Footer from "../../components/id/common/Footer";
import Header from "../../components/id/common/Header";
import SEO from "../../components/id/seo";

const Blog = () => {
    return (
        <main>
            <SEO pageTitle="Blog" />
            <Header/>
            <Breadcrumb title="News" subtitle="News Feeds" />
            <BlogArea/>
            <Footer/>
        </main>
    );
};

export default Blog;