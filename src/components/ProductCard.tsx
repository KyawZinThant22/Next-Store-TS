import { IBestDeal } from 'section/BestDeal/BestDeal';
import { Button } from './Elements';
import StarComponent from './Elements/StarCompoment';

interface IData {
   data: IBestDeal;
}

const ProductCard = ({ data }: IData) => {
   return (
      <div className="bg my-12 flex flex-col">
         <div className="hoverImg flex w-full items-center justify-center rounded-xl bg-[#f5f6f6]">
            <img src={data.image1} alt="product card" width={300} height={300} />
         </div>
         <div className="mt-2 flex w-full items-center justify-between">
            <h3 className="text-lg font-medium">{data.name}</h3>
            <span className="font-bold">$ {data.price}</span>
         </div>
         <p className="mt-4 text-xs font-thin">{data.description}</p>
         <div className="mt-3">
            <StarComponent star={5} />
         </div>

         <div className="mt-4">
            <Button
               label="Add to Cart"
               type="button"
               arialabel="Add to cart botton"
               variant="contained"
               className="md:p:2 px-6x cursor-pointer rounded-full border border-black p-3 text-sm transition-transform  delay-100
               hover:bg-skin-jade hover:text-white md:p-3"
            />
         </div>
      </div>
   );
};

export default ProductCard;
