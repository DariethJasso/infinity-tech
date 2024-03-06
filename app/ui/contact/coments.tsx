
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { fetchComments } from "@/app/lib/data";

export default async function CommentCard() {
  const comments = await fetchComments();
  console.log(comments);
  return (
    <>
      {
      comments.map(item => {
        return (
          <div key={item.id} >
            <Card className="max-w-[350px] sm:w-[320px] lg:w-[300px]">
              <CardHeader className="flex gap-3">
                <Image
                  alt={item.name}
                  height={40}
                  radius="sm"
                  src={item.image}
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">{item.name}</p>
                  <p className="text-small text-default-500">{item.date}</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                <p>{item.comment}</p>
              </CardBody>
              <Divider/>
            </Card>
          </div>
        );
      })
    }
    </>
  );
}
