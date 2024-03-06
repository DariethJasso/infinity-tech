'use client'
import React, { Suspense, use, useEffect,useState } from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { fetchProducts } from "@/app/lib/data";
import SkeletonProducts from "../skeletons/skeletonProducts";
import ModalInfo from "./modalInfo";
import { Products } from "@/app/lib/definitions";
import { useData } from "@/app/hook/useData";

export default function TableProducts() {


  const {products} = useData();
  // const [product, setProduct] = useState<Products[]>([]);
  // useEffect(() => {

  //   const fetchData = async () => {
  //     try {
        
  //       const products= await fetchProducts();
        
  //       setProduct(products);


  //     }
  //     catch(error){
  //       console.error('Database Errror:',error);
  //     }
  //   }
  //   fetchData();
  // },[]);
  

  
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {products.map((item) => (
        

        <Card shadow="sm" key={item.idproducts} isPressable className="max-w-[250px]">
          <CardBody className="overflow-visible p-0 ">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.name}
              className="w-full object-cover h-[140px]"
              src={item.image}
            />
          </CardBody>
          <CardFooter className="text-small justify-between flex flex-col">
            <div>

              <b>{item.name}</b>
              <p className="text-default-500">${item.price}.00</p>
            </div>
            <ModalInfo idproducts={item.idproducts} name={item.name} description={item.description} price={item.price} image={item.image} rating={item.rating} quantity={item.quantity} category={item.category} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );

  
}