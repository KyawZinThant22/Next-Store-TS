import { getBestdeal } from 'apis/bestdeal';
import Header from 'components/Elements/Headers';
import ProductCard from 'components/ProductCard';
import { useLayoutEffect, useMemo, useState } from 'react';

export interface IBestDeal {
   id: string;
   name: string;
   price: string;
   image1: string;
   description: string;
}

const BestDeal = () => {
   const [data, setData] = useState<IBestDeal[]>([]);

   const memoizedGetCategory = useMemo(() => getBestdeal, []);

   useLayoutEffect(() => {
      const fetchData = async () => {
         try {
            const response = await memoizedGetCategory();
            if (response.data.success) {
               setData(response.data.data);
            }
         } catch (error) {
            console.log(error);
         }
      };

      if (data.length === 0) {
         fetchData();
      }
   }, [data.length, memoizedGetCategory]);

   console.log(data);
   return (
      <div className="max-width padding-x my-12 ">
         <Header>Todays Best Deals For You!</Header>
         <div className="mt-6 grid grid-cols-2 gap-6 overflow-x-scroll md:grid-cols-4">
            {data.map((item) => (
               <ProductCard data={item} />
            ))}
         </div>
      </div>
   );
};

export default BestDeal;
