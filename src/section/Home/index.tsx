import { Divider } from 'components/Elements';
import BestDeal from 'section/BestDeal/BestDeal';
import { CategorySection } from 'section/Category';
import HeroSection from 'section/HeroSection';
import Service from 'section/Service';

const Home = () => {
   return (
      <>
         <HeroSection />
         <CategorySection />
         <BestDeal />
         <Service />
         <Divider />
      </>
   );
};

export default Home;
