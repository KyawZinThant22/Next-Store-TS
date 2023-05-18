import { ICategory } from './CategorySection';

interface IData {
   item: ICategory;
}

const Card = ({ item }: IData) => {
   return (
      <div key={item.id} className="relative">
         <div className="">
            <h1 className="absolute top-4 z-10 flex w-full items-center justify-start px-4  text-center  text-2xl font-bold capitalize text-white md:justify-center">
               {item.name}
            </h1>

            <div className="hoverImg overflow-hidden rounded-2xl">
               <img
                  src={item.thumbnailImage}
                  alt={item.name}
                  width={400}
                  height={300}
                  className="max-full h-full cursor-pointer overflow-hidden  rounded-2xl object-cover shadow-lg brightness-100 "
               />
            </div>
         </div>
      </div>
   );
};

export default Card;
