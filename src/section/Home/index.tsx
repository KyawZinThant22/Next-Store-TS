import Layout from 'Layout';
import { CategorySection } from 'section/Category';
import HeroSection from 'section/HeroSection';

const Home = () => {
   return (
      <Layout>
         <HeroSection />
         <CategorySection />
      </Layout>
   );
};

export default Home;
