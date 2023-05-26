const ProductSkeleton = () => {
   return (
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
