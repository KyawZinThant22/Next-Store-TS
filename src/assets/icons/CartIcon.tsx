import { SVGProps } from 'react';
const CartIcon = (props: SVGProps<SVGSVGElement>) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3"
      fill="black"
      viewBox="0 0 24 24"
      {...props}
   >
      <path
         stroke="#fff"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={1.5}
         d="M2 3h2.5l2 14H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6.071 14H18l3-9H4.786M11 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
   </svg>
);
export default CartIcon;
