import { getBestdeal } from 'apis/bestdeal';
import Header from 'components/Elements/Headers';
import ProductCard from 'components/ProductCard';
import Category from 'components/category';
import { useEffect, useState } from 'react';

export interface IBestDeal {
   id: string;
   name: string;
   price: string;
   image1: string;
   description: string;
}

const BestDeal = () => {
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

   return (
      <div className="max-width padding-x my-12 ">
         <Header>Todays Best Deals For You!</Header>
         <div className="my-6 flex items-center gap-3">
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
         <div className="mt-4 grid grid-cols-2 gap-6 overflow-x-scroll md:grid-cols-4">
            {data.map((item) => (
               <ProductCard data={item} />
            ))}
         </div>
      </div>
   );
};

export default BestDeal;
