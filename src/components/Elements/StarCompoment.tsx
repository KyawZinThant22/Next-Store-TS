import { StarIcon, FillStarIcon } from 'assets/icons';

interface IStars {
   star: number;
}

const StarComponent = ({ star }: IStars) => {
   return (
      <div className="flex items-center ">
         {[...Array(star)].map((star, index) => (
            <FillStarIcon key={index} />
         ))}

         {star <= 5 && (
            <>
               {[...Array(5 - star)].map((star, index) => (
                  <StarIcon key={index} />
               ))}
            </>
         )}
         <p className="ml-2 text-xs leading-tight">(123)</p>
      </div>
   );
};

export default StarComponent;
