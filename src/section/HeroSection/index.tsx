import { Button } from 'components/Elements';
import ScrollReveal from 'components/ScrollReveal';
import { motion } from 'framer-motion';

const HeroSection = () => {
   const parent = {
      open: {
         transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
            staggerDirection: 1, // 1 forward | -1 backward,
         },
      },
      close: {
         opacity: 1,
      },
   };

   const elements = {
      open: {
         y: 0,
         opacity: 1,
      },
      close: { y: 20, opacity: 0 },
   };

   return (
      <ScrollReveal>
         <section className=" w-full  bg-blue-100">
            <div className="max-width padding-x  flex h-[500px] flex-col justify-center  md:h-[600px]">
               <div className="md:flex">
                  <motion.div
                     variants={parent}
                     initial="close"
                     animate="open"
                     className="flex flex-col gap-7 "
                  >
                     <motion.h1
                        variants={elements}
                        className="max-w-[650px] text-[2.4rem] font-bold leading-snug tracking-normal text-skin-jade md:text-[3.8rem]"
                     >
                        Shopping And Department Store.
                     </motion.h1>
                     <motion.p
                        variants={elements}
                        className="text-[#231f1e]] max-w-[520px] text-sm leading-[26px] md:text-lg "
                     >
                        Shopping is a bit of a relaxing hobby for me, which is sometimes troubling
                        for the bank balance.
                     </motion.p>
                     <motion.div variants={elements} className="w-[200px]">
                        <Button
                           variant="contained"
                           label="Learn More"
                           arialabel="learn more button"
                           type="button"
                        />
                     </motion.div>
                  </motion.div>
               </div>
            </div>
         </section>
      </ScrollReveal>
   );
};

export default HeroSection;
