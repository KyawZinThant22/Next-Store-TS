const Divider = ({ className }: { className?: string }) => {
   return (
      <div
         className={` ${
            className ?? ''
         } padding-x mx-auto my-12 mt-20 max-w-[1335px] border border-y  `}
      />
   );
};

export default Divider;
