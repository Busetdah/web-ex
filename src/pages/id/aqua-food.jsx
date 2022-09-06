import BlogDetailsArea from '../../components/id/aquafood/BlogDetailsArea';
import Breadcrumb from '../../components/id/common/aquafoodplus';
import Footer from '../../components/id/common/Footer';
import Header from '../../components/id/common/Header';
import SEO from '../../components/id/seo';

const BlogDetails = () => {
    return (
        <main>
          <SEO pageTitle="Aqua Food" />
          <Header/>
          <Breadcrumb title=" " subtitle="Makanan Ikan" />  
          <BlogDetailsArea/>
          <Footer/>
        </main>
    );
};

export default BlogDetails;