import Layout from 'Layout';
import BestDeal from 'section/BestDeal/BestDeal';
import { CategorySection } from 'section/Category';
import HeroSection from 'section/HeroSection';

const Home = () => {
   return (
      <Layout>
         <HeroSection />
         <CategorySection />
         <BestDeal />
      </Layout>
   );
};

export default Home;
