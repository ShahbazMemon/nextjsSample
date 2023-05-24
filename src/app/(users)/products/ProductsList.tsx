import { AnySoaRecord } from "dns";
import React from "react";
import { Card } from '../../../components/products/Card';
import { Product } from "../../../../typings";

const fetchData = async () => {

  const timeOut = Math.floor(Math.random() * 5 + 1) * 1000;
  await new Promise((resolve)=> setTimeout(resolve, timeOut));
  
  const res = await fetch("https://api.publicapis.org/entries", {});
  const data = await res.json();
  return data;
};

const ProductsList = async () => {
  const list = await fetchData();
  const data = list?.entries?.splice(0,10);

  return (
    <>
    <div style={{display:"flex", flexWrap: "wrap"}}>
      {data?.map((item: Product, i: number) => {
        return (
          <div style={{margin: "5px"}}>
            <Card data={item}/>
            </div>
        );
      })}
    </div>
    </>
  );
};

export default ProductsList;
