import BlogDetailsArea from '../components/id/compoundfeed/BlogDetailsArea';
import Breadcrumb from '../components/id/common/Compoundfeedplus';
import Footer from '../components/id/common/Footer';
import Header from '../components/id/common/Header';
import SEO from '../components/id/seo';

const BlogDetails = () => {
    return (
        <main>
          <SEO pageTitle="Compound Feed" />
          <Header/>
          <Breadcrumb title=" " subtitle="Pakan Majemuk" />  
          <BlogDetailsArea/>
          <Footer/>
        </main>
    );
};

export default BlogDetails;