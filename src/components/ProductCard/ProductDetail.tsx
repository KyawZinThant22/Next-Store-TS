import React from 'react';
import { useParams } from 'react-router-dom';
const ProductDetails: React.FC = () => {
   const { productName } = useParams<{ productName: string }>();

   // Find the product based on the productName parameter

   return <div className="h-full w-full bg-red-400">{productName}</div>;
};

export default ProductDetails;
