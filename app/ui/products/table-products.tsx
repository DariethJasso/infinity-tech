
import React, { Suspense } from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { fetchProducts } from "@/app/lib/data";
import SkeletonProducts from "../skeletons/skeletonProducts";

export default async function TableProducts() {
  const products = await fetchProducts();

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {products.map((item, index) => (
        

        <Card shadow="sm" key={index} isPressable className="max-w-[250px]">
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
          <CardFooter className="text-small justify-between">
            <b>{item.name}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
