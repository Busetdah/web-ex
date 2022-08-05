import BlogDetailsArea from '../components/petfood/BlogDetailsArea';
import Breadcrumb from '../components/common/petfoodplus';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import SEO from '../components/seo';

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