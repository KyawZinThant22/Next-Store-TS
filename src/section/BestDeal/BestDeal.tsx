import { getBestdeal } from 'apis/bestdeal';
import Header from 'components/Elements/Headers';
import ProductCard from 'components/ProductCard';
import ScrollReveal from 'components/ScrollReveal';
import Category from 'components/category';
import ProductSkeleton from 'components/skeletons/ProductSkeleton';
import { useEffect, useState } from 'react';

export interface IBestDeal {
   id: string;
   name: string;
   price: string;
   image1: string;
   description: string;
}

const BestDeal = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [data, setData] = useState<IBestDeal[]>([]);
   const [categoryName, setCategoryName] = useState<string>('');

   const fetchData = async (categoryName: string) => {
      try {
         const res = await getBestdeal(categoryName);
         if (res.data.success) {
            setData(res.data.data);
         }
      } catch (err) {
         console.log(err);
      }
   };

   useEffect(() => {
      fetchData(categoryName);
   }, [data.length, categoryName]);

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
   }, []);

   return (
      <ScrollReveal>
         <div className="max-width padding-x my-12 ">
            <Header>Todays Best Deals For You!</Header>
            <div className="my-6 flex flex-wrap items-center gap-3">
               <button
                  className={`${
                     categoryName === '' && 'bg-skin-jade text-white'
                  } cursor-pointer  rounded-full border p-2 px-4 text-sm font-medium text-black hover:bg-skin-jade hover:text-white`}
                  onClick={() => setCategoryName('')}
               >
                  All
               </button>
               <Category setCategoryName={setCategoryName} categoryName={categoryName} />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 overflow-x-scroll md:grid-cols-4">
               {isLoading || !data ? (
                  <>
                     {[...Array(8)].map((_, index) => (
                        <ProductSkeleton key={index} />
                     ))}
                  </>
               ) : (
                  <>
                     {data.length > 0 ? (
                        data.map((item) => <ProductCard key={item.id} data={item} />)
                     ) : (
                        <>
                           <h1>Not Available</h1>
                        </>
                     )}
                  </>
               )}
            </div>
         </div>
      </ScrollReveal>
   );
};

export default BestDeal;
