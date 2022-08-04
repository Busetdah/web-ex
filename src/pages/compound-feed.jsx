import BlogDetailsArea from '../components/compoundfeed/BlogDetailsArea';
import Breadcrumb from '../components/common/compoundfeedplus';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import SEO from '../components/seo';

const BlogDetails = () => {
    return (
        <main>
          <SEO pageTitle="Compound Feed" />
          <Header/>
          <Breadcrumb title="Process" subtitle="Compound Feed" />  
          <BlogDetailsArea/>
          <Footer/>
        </main>
    );
};

export default BlogDetails;