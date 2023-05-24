import React, { Suspense } from "react";
import ProductsList from "./ProductsList";
// import { Product } from '../../../../typings';
// import dynamic from "next/dynamic";

const Product = () => {
  // const ProductsList = dynamic(()=>import('./ProductsList'))
  return (
    <>
      <Suspense fallback={<p>loading ho rahi hai </p>}>
        {/* @ts-ignore */}
        <ProductsList />
      </Suspense>
    </>
  );
};

export default Product;
