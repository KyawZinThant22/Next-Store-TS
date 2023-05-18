import Header from 'components/Elements/Headers';
import ProductCard from 'components/ProductCard';

const BestDeal = () => {
   return (
      <div className="max-width padding-x my-12 ">
         <Header>Todays Best Deals For You!</Header>
         <div className="mt-12 grid grid-cols-2 gap-6 overflow-x-scroll md:grid-cols-3">
            <ProductCard />
            <ProductCard />
            <ProductCard />
         </div>
      </div>
   );
};

export default BestDeal;
