import { motion, AnimatePresence } from 'framer-motion';

interface IButtonProps {
   label: string;
   action?: () => void | any;
   variant: 'contained' | 'outline';
   size?: 'sm' | 'md' | 'lg';
   type: 'submit' | 'button';
   arialabel: string;
   className?: string;
   noHover?: boolean;
   rounded?: string;
   fontSize?: string;
   disable?: boolean;
}

const buttonVariants = {
   hover: {
      backgroundColor: '#ffffff',
      color: '#013D28',
      transition: {
         duration: 0.5,
      },
   },
};

const Button = ({
   label,
   action,
   variant,
   type,
   arialabel,
   className,
   rounded,
   fontSize,
   disable,
   noHover = false,
}: IButtonProps) => {
   return (
      <AnimatePresence>
         <motion.button
            variants={buttonVariants}
            whileHover={!noHover && variant === 'contained' ? 'hover' : ''}
            exit={{
               background: '#013D28',
               color: '#fff',
            }}
            onClick={action}
            aria-label={arialabel}
            type={type}
            disabled={disable}
            className={` ${
               className
                  ? className
                  : ` 
                  ${
                     fontSize ? fontSize : `text-md`
                  } flex h-full w-full items-center justify-center ${
                       rounded ? rounded : `rounded-full`
                    } p-2 px-5 font-medium  md:p-3 md:px-6  ${
                       variant === 'contained' &&
                       'border-2 border-skin-jade bg-skin-jade font-bold text-white '
                    } 
                    ${variant === 'outline' && ' border border-skin-jade text-skin-jade '}
                    `
            }`}
         >
            {label}
         </motion.button>
      </AnimatePresence>
   );
};

export default Button;
