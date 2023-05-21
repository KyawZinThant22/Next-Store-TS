import { getCategory } from 'apis/category';
import { useEffect, useMemo, useState } from 'react';
import { ICategory } from 'section/Category/CategorySection';

interface IProps {
   setCategoryName: React.Dispatch<React.SetStateAction<string>>;
   categoryName: string;
}

const Category = ({ setCategoryName, categoryName }: IProps) => {
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
      <>
         {data.map((item) => (
            <button
               className={`${
                  categoryName === item.name && 'bg-skin-jade text-white'
               } cursor-pointer  rounded-full border p-2 px-4 text-sm font-medium text-black hover:bg-skin-jade hover:text-white`}
               key={item.id}
               onClick={() => setCategoryName(item.name)}
            >
               {item.name}
            </button>
         ))}
      </>
   );
};

export default Category;
