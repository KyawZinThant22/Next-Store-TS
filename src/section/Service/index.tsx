import ScrollReveal from 'components/ScrollReveal';
import ServiceCard from './ServiceCard';
import Header from 'components/Elements/Headers';

export interface IService {
   heading: string;
   desc: string;
   image: string;
}

const service: IService[] = [
   {
      heading: `Frequently Asked Questions`,
      desc: 'Updates on safe Shopping in our help',
      image: 'https://shorturl.at/BDMQ6',
   },
   {
      heading: 'Online Payment Process',
      desc: 'Updates on safe Shopping in our Stores',
      image: 'https://shorturl.at/IKU03',
   },
   {
      heading: 'Home Delivery Options',
      desc: 'Updates on safe Shopping with our cars',
      image: 'https://shorturl.at/mosvK',
   },
];

const Service = () => {
   return (
      <ScrollReveal>
         <div className="max-width padding-x my-12">
            <Header>Services To Help You Shop</Header>
            <div className="my-12 grid grid-cols-2 gap-5 md:grid-cols-3">
               {service.map((item) => (
                  <ServiceCard key={item.desc} data={item} />
               ))}
            </div>
         </div>
      </ScrollReveal>
   );
};

export default Service;
