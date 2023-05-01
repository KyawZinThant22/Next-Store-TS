import { motion, AnimatePresence } from 'framer-motion';

interface IButtonProps {
   label: string;
   action?: () => void | any;
   variant: 'contained' | 'outline';
   size?: 'sm' | 'md' | 'lg';
   type: 'submit' | 'button';
   arialabel: string;
}

const buttonVariants = {
   hover: {
      backgroundColor: '#ffffff',
      color: '#013D28',
      transition: {
         duration: 0.3,
         yoyo: Infinity,
      },
   },
};

const Button = ({ label, action, variant, type, arialabel }: IButtonProps) => {
   return (
      <AnimatePresence>
         <motion.button
            variants={buttonVariants}
            whileHover="hover"
            exit={{
               background: '#013D28',
               color: '#fff',
            }}
            onClick={action}
            aria-label={arialabel}
            type={type}
            className={`text-md rounded-full p-2 px-5 font-medium text-white md:p-3 md:px-6 md:text-lg ${
               variant == 'contained' && 'border-2 border-skin-jade bg-skin-jade   font-bold '
            } `}
         >
            {label}
         </motion.button>
      </AnimatePresence>
   );
};

export default Button;
