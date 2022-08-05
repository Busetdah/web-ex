import BlogDetailsArea from '../components/flatstorage/BlogDetailsArea';
import Breadcrumb from '../components/common/flatstorageplus';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import SEO from '../components/seo';

const BlogDetails = () => {
    return (
        <main>
          <SEO pageTitle="flatstorage" />
          <Header/>
          <Breadcrumb title=" " subtitle="Grains,Soybean and Flat Storage" />  
          <BlogDetailsArea/>
          <Footer/>
        </main>
    );
};

export default BlogDetails;