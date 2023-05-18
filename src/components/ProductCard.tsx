import StarComponent from './Elements/StarCompoment';

const ProductCard = () => {
   return (
      <div className="bg my-12 flex flex-col">
         <div className="hoverImg flex w-full items-center justify-center rounded-xl bg-[#f5f6f6]">
            <img
               src={
                  'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5537881bbfcf_instax%20mini%209-min.png'
               }
               alt="product card"
               width={300}
               height={300}
            />
         </div>
         <div className="mt-2 flex w-full items-center justify-between">
            <h3 className="text-lg font-medium">Instax Mini 9</h3>
            <span className="font-bold">$99.00</span>
         </div>
         <p className="mt-4 text-xs font-thin">Selfie mode and selfie mirror , Marco Mode</p>
         <div className="mt-3">
            <StarComponent star={5} />
         </div>

         <div className="mt-4">
            <button
               type="button"
               about="add to cart button"
               aria-label="add to cart button"
               className="md:p:2 cursor-pointer rounded-full border border-black p-3 px-4 text-sm transition-transform  delay-100
          hover:bg-skin-jade hover:text-white md:p-3"
            >
               Add to Cart
            </button>
         </div>
      </div>
   );
};

export default ProductCard;
