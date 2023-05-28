import { Divider } from 'components/Elements';
import { Helmet } from 'react-helmet';
import BestDeal from 'section/BestDeal/BestDeal';
import { CategorySection } from 'section/Category';
import HeroSection from 'section/HeroSection';
import Service from 'section/Service';

const Home = () => {
   return (
      <>
         <Helmet>
            <title>Next-Store - Ecommence Project</title>
            <meta name="description" content="Next-Store is an ecommence store for your choice" />
         </Helmet>
         <HeroSection />
         <CategorySection />
         <BestDeal />
         <Service />
         <Divider />
      </>
   );
};

export default Home;
