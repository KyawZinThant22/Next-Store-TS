const CaretDownIcon = ({ className = '' }: { className?: string }) => {
   return (
      <svg
         className={`${className} inline-block h-6 w-6 stroke-black stroke-[2px] `}
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
   );
};

export default CaretDownIcon;
