import { Button, Divider } from 'components/Elements';
import StarComponent from 'components/Elements/StarCompoment';
import React, { useState, ChangeEvent, useEffect } from 'react';

import { motion } from 'framer-motion';
import { BussIcon, ReturnIcon } from 'assets/icons';
import { useLocation } from 'react-router-dom';
import { FetchProductDetails } from 'apis/product';
import { Helmet } from 'react-helmet';
import Breadcrumb from 'components/Elements/Breadcrumb';

interface IBestDeal {
   id: string;
   name: string;
   discountPercent: number;
   price: string;
   description: string;
   detail: string;
   stock: number;
   categoryId: string;
   image1: string;
   createdAt: string;
   updatedAt: string | null;
   tagId: string | null;
}

const ProductDetails: React.FC = () => {
   const location = useLocation();

   const [data, setData] = useState<IBestDeal | null>(null);

   const [counter, setCounter] = useState<number>(1);

   const handleIncrement = () => {
      setCounter((prevCounter) => prevCounter + 1);
   };

   const handleDecrement = () => {
      if (counter > 1) {
         setCounter((prevCounter) => prevCounter - 1);
      }
   };

   const handleCounterChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newCounter = parseInt(e.target.value, 10);
      if (!isNaN(newCounter)) {
         setCounter(newCounter);
      }
   };

   const fetchProductDetail = async (id: string) => {
      const response = await FetchProductDetails(id);
      if (response.data.success) {
         setData(response.data.data);
      } else {
         alert('Fetch product details failed');
      }
   };

   useEffect(() => {
      if (location.state) {
         fetchProductDetail(location.state.id);
      }
   }, [location]);

   return (
      <>
         <Helmet>
            <title>Next-Store - Product Details</title>
            <meta name="description" content="Product Details page" />
         </Helmet>
         <div className="padding-x max-width my-6">
            <div className="my-4">
               <Breadcrumb pathname={location.pathname} />
            </div>
            <div className="grid grid-cols-2">
               <div className="col-span-2 items-center justify-center md:col-span-1 md:justify-start ">
                  <div className="hoverImg flex max-h-[600px] max-w-[600px] items-center justify-center rounded-xl bg-[#f5f6f6] md:h-[500px] md:w-[600px]">
                     <img src={data?.image1} alt={data?.name} width={400} height={400} />
                  </div>
                  <div className="mt-4 flex items-end  gap-3  ">
                     {[1, 2, 3, 4].map(() => (
                        <div className="hoverImg  flex max-h-[400px] max-w-[400px] items-center justify-center  rounded-xl bg-[#f5f6f6] md:h-[140px] md:w-[140px]">
                           <img src={data?.image1} alt={data?.name} width={80} height={80} />
                        </div>
                     ))}
                  </div>
               </div>

               <div className="col-span-2 md:col-span-1 ">
                  <h1 className="text-3xl font-[600] leading-normal">{data?.name}</h1>
                  <p className="mt-2 text-sm text-[#777]">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit qui
                     harum, labore quis dolorem quisquam neque quas maiores, exercitationem
                     veritatis vitae obcaecati expedita laudantium, officia incidunt inventore
                     similique in.
                  </p>
                  <div className="mt-4">
                     <StarComponent star={5} />
                  </div>

                  <Divider className="my-6 mt-6 " />
                  <div className="flex flex-col gap-3 ">
                     <h1 className="text-2xl font-semibold">$549.00 or 99.99/month</h1>
                     <p className="text-sm">suggested payment with six months finance</p>
                  </div>
                  <Divider className="my-6 mt-6 " />
                  <div className="flex flex-col gap-4">
                     <div className=" flex items-center gap-4">
                        <div className="text-md flex h-[50px] w-[160px] items-center justify-center overflow-hidden rounded-full bg-[#f5f6f6] text-[#013D28]">
                           <CounterButton onClick={handleDecrement} className="hover:bg-red-400">
                              -
                           </CounterButton>

                           <input
                              className="mx-2 w-[20px] appearance-none border-none   bg-transparent text-center text-black"
                              type="number"
                              min="1"
                              onChange={handleCounterChange}
                              value={counter.toString()}
                           />
                           <CounterButton onClick={handleIncrement} className="hover:bg-red-400">
                              +
                           </CounterButton>
                        </div>
                        <div>
                           <p className="text-sm leading-normal tracking-wider">
                              Only{' '}
                              <span className=" font-bold text-orange-400">
                                 {data?.stock} items
                              </span>{' '}
                              Left! <br />
                              Don't miss it{' '}
                           </p>
                        </div>
                     </div>
                     <div className="mt-4 flex h-[49px] w-[70%] items-center gap-4 ">
                        <Button
                           label="Buy now"
                           type="button"
                           arialabel="buy now button"
                           variant="contained"
                        />

                        <Button
                           label="Add to Cart"
                           type="button"
                           arialabel="buy now button"
                           variant="outline"
                        />
                     </div>
                     <div className="mt-3 w-full rounded border">
                        <div className=" my-4 flex  gap-2 px-4">
                           <BussIcon className="mt-[2px] h-5 w-5 items-start justify-start" />
                           <div>
                              <span className="text-sm font-medium ">Free Delivery</span>
                              <p className="mb-0 cursor-pointer text-xs text-[#333333cd] underline">
                                 Enter your postal code for Delivery Availability
                              </p>
                           </div>
                        </div>
                        <Divider className="my-6 mt-6 border-[1px]" />
                        <div className=" my-4 flex  gap-2 px-4">
                           <ReturnIcon className="mt-[2px] h-5 w-5 items-start justify-start" />
                           <div>
                              <span className="text-sm font-medium ">Return Delivery</span>
                              <p className="cursor-pointer text-xs text-[#333333cd] underline">
                                 Free 30 days delivery return
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ProductDetails;

interface ButtonProps {
   onClick: () => void;
   className?: string;
   children: React.ReactChild;
}

const CounterButton: React.FC<ButtonProps> = ({ onClick, children, className }) => {
   return (
      <motion.button
         onClick={onClick}
         className={`h-full w-full cursor-pointer overflow-hidden text-xl transition-colors duration-300 ${className}`}
         whileHover={{ backgroundColor: '#e9e7e7' }}
      >
         {children}
      </motion.button>
   );
};
