import { Button } from 'components/Elements';

const HeroSection = () => {
   return (
      <div className=" w-full  bg-blue-100">
         <div className="max-width padding-x  flex h-[600px] flex-col  justify-center">
            <div className="md:flex">
               <div className="flex flex-col gap-7 ">
                  <h1 className="max-w-[650px] text-[2.4rem] font-bold leading-snug tracking-normal text-skin-jade md:text-[3.8rem]">
                     Shopping And Department Store.
                  </h1>
                  <p className="text-[#231f1e]] max-w-[520px] text-sm leading-[26px] md:text-lg ">
                     Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for
                     the bank balance.
                  </p>
                  <div>
                     <Button
                        variant="contained"
                        label="Learn More"
                        arialabel="learn more button"
                        type="button"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HeroSection;
