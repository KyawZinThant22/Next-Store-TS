interface IButtonProps {
   label: string;
   action?: () => void | any;
   variant: 'contained' | 'outline';
   size?: 'sm' | 'md' | 'lg';
   type: 'submit' | 'button';
   arialabel: string;
}

const Button = ({ label, action, variant, type, arialabel }: IButtonProps) => {
   return (
      <button
         onClick={action}
         aria-label={arialabel}
         type={type}
         className={`text-md rounded-full p-2 px-5 font-medium text-white md:p-3 md:px-6 md:text-lg ${
            variant == 'contained' &&
            'border-2 border-skin-jade bg-skin-jade font-bold hover:bg-white hover:text-skin-jade'
         } `}
      >
         {label}
      </button>
   );
};

export default Button;
