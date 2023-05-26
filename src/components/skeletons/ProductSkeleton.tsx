const ProductSkeleton = () => {
   return (
      //   <div>
      //      <div className=" border-default rounded-[5px]  border-2 p-2 px-4 dark:border-[#3333]  ">
      //         <div className="flex h-full animate-pulse flex-row items-center justify-between space-x-3">
      //            <div className="h-[60px] w-[60px] rounded-full   bg-gray-300 "></div>
      //            <div className="flex flex-col space-y-3">
      //               <div className="rounded-md bg-gray-300  md:h-3 md:w-[80px] lg:h-5 xl:w-[170px]"></div>
      //            </div>
      //         </div>
      //      </div>
      //   </div>
      <div className="animate-pulse">
         <div className="h-[302px] w-[320px] animate-pulse rounded-xl bg-[#e8ebeb] "></div>
         <div className="mt-4 flex w-full items-center justify-between">
            <div className=" h-[20px] w-[60%] animate-pulse rounded-full bg-[#e8ebeb]"></div>
            <div className=" h-[20px] w-[20%] animate-pulse rounded-full bg-[#e8ebeb]"></div>
         </div>
         <div className="mt-4 h-[14px] w-[85%] animate-pulse rounded-full bg-[#e8ebeb]"></div>
         <div className="flex items-center gap-2">
            <div className="mt-4 h-[14px] w-[5%] animate-pulse rounded-full bg-[#e8ebeb]"></div>
            <div className="mt-4 h-[14px] w-[5%] animate-pulse rounded-full bg-[#e8ebeb]"></div>
            <div className="mt-4 h-[14px] w-[5%] animate-pulse rounded-full bg-[#e8ebeb]"></div>
            <div className="mt-4 h-[14px] w-[5%] animate-pulse rounded-full bg-[#e8ebeb]"></div>
            <div className="mt-4 h-[14px] w-[5%] animate-pulse rounded-full bg-[#e8ebeb]"></div>
         </div>
         <div className="mt-4 h-[40px] w-[35%] animate-pulse rounded-full bg-[#e8ebeb]"></div>
      </div>
   );
};

export default ProductSkeleton;
