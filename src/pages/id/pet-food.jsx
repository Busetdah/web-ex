import BlogDetailsArea from '../../components/id/petfood/BlogDetailsArea';
import Breadcrumb from '../../components/id/common/petfoodplus';
import Footer from '../../components/id/common/Footer';
import Header from '../../components/id/common/Header';
import SEO from '../../components/id/seo';

const BlogDetails = () => {
    return (
        <main>
          <SEO pageTitle="Pet Food" />
          <Header/>
          <Breadcrumb title=" " subtitle="Pet Food" />  
          <BlogDetailsArea/>
          <Footer/>
        </main>
    );
};

export default BlogDetails;