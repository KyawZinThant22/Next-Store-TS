import React, { ReactNode, useEffect, useState } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
   children: ReactNode;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children }) => {
   const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.2,
   });
   const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
   const controls = useAnimation();

   useEffect(() => {
      const handleScroll = () => {
         const isScrollingDown = window.scrollY > 0;
         setScrollDirection(isScrollingDown ? 'down' : 'up');
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   useEffect(() => {
      if (inView) {
         controls.start('visible');
      } else {
         controls.start('hidden');
      }
   }, [controls, inView]);

   const animationVariants: Variants = {
      hidden: { opacity: 0, y: scrollDirection === 'down' ? 60 : -60, scale: 0.9 },
      visible: {
         opacity: 1,
         y: 0,
         scale: 1,
         transition: { duration: 0.7, ease: 'easeOut' },
      },
   };

   return (
      <motion.div ref={ref} initial="hidden" animate={controls} variants={animationVariants}>
         {children}
      </motion.div>
   );
};

export default ScrollReveal;
