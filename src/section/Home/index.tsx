import Layout from 'Layout';
import Divider from 'components/Elements/Divider';
import BestDeal from 'section/BestDeal/BestDeal';
import { CategorySection } from 'section/Category';
import HeroSection from 'section/HeroSection';
import Service from 'section/Service';

const Home = () => {
   return (
      <Layout>
         <HeroSection />
         <CategorySection />
         <BestDeal />
         <Service />
         <Divider />
      </Layout>
   );
};

export default Home;
