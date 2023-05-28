import React from 'react';

const Breadcrumb = ({ pathname }: { pathname: string }) => {
   const pathSegments = pathname.split('/').filter(Boolean);

   return (
      <div className="flex ">
         {pathSegments.map((segment, index) => (
            <React.Fragment key={index}>
               {index > 0 && <span className="mx-1 text-sm text-gray-400 ">/</span>}
               <span
                  className={` text-sm capitalize ${
                     index === pathSegments.length - 1 ? 'font-[500] ' : 'text-gray-400'
                  }`}
               >
                  {segment}
               </span>
            </React.Fragment>
         ))}
      </div>
   );
};

export default Breadcrumb;
