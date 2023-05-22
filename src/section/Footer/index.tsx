import Divider from 'components/Elements/Divider';
import ScrollReveal from 'components/ScrollReveal';
import { Link } from 'react-router-dom';

const department = ['Fashion', 'Tech', 'Book', 'Travel', 'seankers'];
const about = ['News and Blog', 'Career', 'Help', 'Idea by guide', 'Shop and Location'];
const service = ['Gift card', 'Mobile App', 'Delivery', 'Order pickup'];
const help = ['Return', 'Track Order', 'Contact Us'];

const Footer = () => {
   return (
      <ScrollReveal>
         <footer className="padding-x mx-auto my-12   max-w-[1400px]  ">
            <div className="grid grid-cols-6 gap-4 gap-y-12 md:gap-y-0">
               <div className="col-span-4 flex  flex-col gap-3  md:col-span-2">
                  <Link to="/" className="font-serif text-xl font-[600]  md:text-2xl">
                     Next Store
                  </Link>
                  <p className="mt-4 text-[14px]">
                     Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                     officia consequat duis enim velit mollit.
                  </p>

                  <h2 className="mt-3 text-lg font-medium">Accepted Payments</h2>
               </div>
               <div className="col-span-2   md:col-span-1">
                  <h1 className="text-[16px] font-[500]">Department</h1>
                  <div className="mt-4 flex flex-col gap-1">
                     {department.map((item) => (
                        <a className="cursor-pointer text-sm" key={item}>
                           {item}
                        </a>
                     ))}
                  </div>
               </div>
               <div className="col-span-2  md:col-span-1">
                  <h1 className="text-[16px] font-[500]">About Us</h1>
                  <div className="mt-4 flex flex-col gap-1">
                     {about.map((item) => (
                        <a className="cursor-pointer text-sm" key={item}>
                           {item}
                        </a>
                     ))}
                  </div>
               </div>
               <div className="col-span-2   md:col-span-1">
                  <h1 className="text-[16px] font-[500]">Service</h1>
                  <div className="mt-4 flex flex-col gap-1">
                     {service.map((item) => (
                        <a className="cursor-pointer text-sm" key={item}>
                           {item}
                        </a>
                     ))}
                  </div>
               </div>
               <div className="col-span-2 md:col-span-1">
                  <h1 className="text-[16px] font-[500]">Help</h1>
                  <div className="mt-4 flex flex-col gap-1">
                     {help.map((item) => (
                        <a className="cursor-pointer text-sm" key={item}>
                           {item}
                        </a>
                     ))}
                  </div>
               </div>
            </div>
            <Divider />
         </footer>
      </ScrollReveal>
   );
};

export default Footer;
