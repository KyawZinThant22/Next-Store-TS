import { getCategory } from 'apis/category';
import { Headers } from 'components/Elements';
import { useEffect, useState, useMemo } from 'react';
import Card from './Card';

export interface ICategory {
   id: string;
   name: string;
   thumbnailImage: string;
}

const CategorySection = () => {
   const [data, setData] = useState<ICategory[]>([]);

   const memoizedGetCategory = useMemo(() => getCategory, []);

   useEffect(() => {
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

   return (
      <div className="max-width padding-x my-16">
         <Headers>Shop Our Top Categories</Headers>

         <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {data && (
               <>
                  {data?.map((item) => (
                     <Card item={item} />
                  ))}
               </>
            )}
         </div>
      </div>
   );
};

export default CategorySection;
