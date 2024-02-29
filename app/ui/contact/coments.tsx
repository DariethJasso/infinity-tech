import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function CommentCard({
    name,
    comment,
    img,
    
}: {
    name: string;
    comment: string;
    img: string;
}) {
  return (
    <Card className="max-w-[350px] sm:w-[320px] lg:w-[300px]">
      <CardHeader className="flex gap-3">
        <Image
          alt={name}
          height={40}
          radius="sm"
          src={img}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{name}</p>
          <p className="text-small text-default-500">27-06-2022</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{comment}</p>
      </CardBody>
      <Divider/>
      
    </Card>
  );
}
