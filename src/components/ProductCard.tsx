import { IBestDeal } from 'section/BestDeal/BestDeal';

import StarComponent from './Elements/StarCompoment';
import { Love } from 'assets/icons';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { useAppDispatch } from 'store/hook';
import { addToCart } from 'store/reducers/cartStore';
interface IData {
   data: IBestDeal;
}

const ProductCard: React.FC<IData> = ({ data }) => {
   const dispatch = useAppDispatch();

   const handleAddtoCart = (data: IBestDeal) => {
      const { description, image1, ...dataWithoutDescription } = data;
      const ItemData = { ...dataWithoutDescription, image: image1 };

      dispatch(addToCart(ItemData));
   };
   return (
      <div className="bg relative my-2 flex cursor-pointer flex-col">
         <Link
            to={`/home/products/${slugify(data.name)}`}
            state={{
               id: data.id,
            }}
         >
            <div className="absolute right-5 top-4 z-10 cursor-pointer rounded-full bg-white p-2 hover:bg-[#F9DCDC]">
               <Love />
            </div>
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
         </Link>

         <div className="mt-4 cursor-pointer">
            <button
               onClick={() => handleAddtoCart(data)}
               type="button"
               aria-label="Add to cart botton"
               className="md:p:2 cursor-pointer rounded-full border border-black p-3 text-sm transition-transform delay-100  hover:bg-skin-jade
               hover:text-white md:p-3 md:px-6"
            >
               Add to Cart
            </button>
         </div>
      </div>
   );
};

export default ProductCard;
