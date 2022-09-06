import BlogDetailsArea from '../../components/id/premix/BlogDetailsArea';
import Breadcrumb from '../../components/id/common/premixplus';
import Footer from '../../components/id/common/Footer';
import Header from '../../components/id/common/Header';
import SEO from '../../components/seo';

const BlogDetails = () => {
    return (
        <main>
          <SEO pageTitle="Premix / concenctrate" />
          <Header/>
          <Breadcrumb title=" " subtitle="Premix and Mash Feed" />  
          <BlogDetailsArea/>
          <Footer/>
        </main>
    );
};

export default BlogDetails;