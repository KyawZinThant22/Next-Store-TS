import { IService } from '.';

interface IProps {
   data: IService;
}

const ServiceCard = ({ data }: IProps) => {
   return (
      <div className="flex flex-col overflow-hidden rounded-lg bg-[#F5F6F6]">
         <div className="my-4 flex flex-col gap-6 p-5 md:px-12">
            <h1 className="w-[220px] text-xl font-[600] leading-relaxed md:text-2xl">
               {data.heading}
            </h1>
            <p className="text-sm font-medium leading-relaxed md:w-[300px] md:text-[16px] ">
               {data.desc}
            </p>
         </div>
         <div className="h-full w-[100%]">
            <img src={data.image} alt={data.heading} className="h-full w-full" />
         </div>
      </div>
   );
};

export default ServiceCard;
