import BlogDetailsArea from '../../components/id/BlogDetails/BlogDetailsArea';
import Breadcrumb from '../../components/id/common/Breadcrumb';
import Footer from '../../components/id/common/Footer';
import Header from '../../components/id/common/Header';
import SEO from '../../components/id/seo';

const BlogDetails = () => {
    return (
        <main>
          <SEO pageTitle="Blog Details" />
          <Header/>
          <Breadcrumb title="News" subtitle="News Details" />  
          <BlogDetailsArea/>
          <Footer/>
        </main>
    );
};

export default BlogDetails;