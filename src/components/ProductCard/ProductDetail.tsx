import { Divider } from 'components/Elements';
import StarComponent from 'components/Elements/StarCompoment';
import React from 'react';
import { useParams } from 'react-router-dom';
const ProductDetails: React.FC = () => {
   const { name } = useParams<{ name: string }>();

   console.log(name);

   return (
      <div className="padding-x max-width my-12">
         <div className="grid grid-cols-2">
            <div className="col-span-2 items-center justify-center md:col-span-1 md:justify-start ">
               <div className="hoverImg flex max-h-[600px] max-w-[600px] items-center justify-center rounded-xl bg-[#f5f6f6] md:h-[500px] md:w-[600px]">
                  <img
                     src={'https://shorturl.at/EGPTY'}
                     alt="product card"
                     width={400}
                     height={400}
                  />
               </div>
               <div className="mt-4 flex items-end gap-3  ">
                  {[1, 2, 3, 4].map(() => (
                     <div className="hoverImg  flex max-h-[200px] max-w-[200px] items-center justify-center  rounded-xl bg-[#f5f6f6] md:h-[140px] md:w-[140px]">
                        <img
                           src={'https://shorturl.at/EGPTY'}
                           alt="product card"
                           width={80}
                           height={80}
                        />
                     </div>
                  ))}
               </div>
            </div>

            <div className="col-span-2 md:col-span-1 ">
               <h1 className="text-3xl font-[600] leading-normal">AirPod Max</h1>
               <p className="mt-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit qui
                  harum, labore quis dolorem quisquam neque quas maiores, exercitationem veritatis
                  vitae obcaecati expedita laudantium, officia incidunt inventore similique in.
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
            </div>
         </div>
      </div>
   );
};

export default ProductDetails;
