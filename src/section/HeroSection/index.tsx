const HeroSection = () => {
   return (
      <div className=" w-full  bg-blue-100">
         <div className="max-width padding-x  flex h-[600px] flex-col  justify-center">
            <div className="flex flex-col gap-7 ">
               <h1 className="w-[650px] text-[3rem] font-bold leading-snug tracking-normal text-skin-jade md:text-[3.8rem]">
                  Shopping And Department Store.
               </h1>
               <p className="leading-[26px text-[#231f1e]] text-md w-[520px] md:text-lg ">
                  Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the
                  bank balance.
               </p>
            </div>
            <div></div>
         </div>
      </div>
   );
};

export default HeroSection;
