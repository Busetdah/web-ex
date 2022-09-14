import BlogDetailsArea from '../../components/id/flatstorage/BlogDetailsArea';
import Breadcrumb from '../../components/id/common/flatstorageplus';
import Footer from '../../components/id/common/Footer';
import Header from '../../components/id/common/Header';
import SEO from '../../components/seo';

const BlogDetails = () => {
    return (
        <main>
          <SEO pageTitle="flatstorage" />
          <Header/>
          <Breadcrumb title=" " subtitle=" " />  
          <BlogDetailsArea/>
          <Footer/>
        </main>
    );
};

export default BlogDetails;