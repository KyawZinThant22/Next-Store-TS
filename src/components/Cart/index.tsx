import CartIcon from 'assets/icons/CartIcon';

const Cart = () => {
   return (
      <div className="fixed right-0 top-[15rem]">
         <button className="relative h-10 w-10 rounded-l-full bg-white p-1 shadow-sm">
            <span className="absolute right-1 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
               0
            </span>
            <CartIcon className="" />
         </button>
      </div>
   );
};

export default Cart;
