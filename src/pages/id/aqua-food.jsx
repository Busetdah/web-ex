import BlogDetailsArea from '../components/aquafood/BlogDetailsArea';
import Breadcrumb from '../components/common/aquafoodplus';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import SEO from '../components/seo';

const BlogDetails = () => {
    return (
        <main>
          <SEO pageTitle="Aqua Food" />
          <Header/>
          <Breadcrumb title=" " subtitle="Aqua Feed" />  
          <BlogDetailsArea/>
          <Footer/>
        </main>
    );
};

export default BlogDetails;