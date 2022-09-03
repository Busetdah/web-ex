import BlogDetailsArea from '../components/premix/BlogDetailsArea';
import Breadcrumb from '../components/common/premixplus';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import SEO from '../components/seo';

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