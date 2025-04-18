import React from "react";
import {Card, CardFooter, Image, Button, Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";

export default function CardCominSoon({img,name}: {img: string,name: string}) {
  return (
    <Popover placement="right" >
      <PopoverTrigger>
        <Card
        isFooterBlurred
        radius="lg"
        className="border-none"
      >
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={200}
          src={img}
          width={200}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">Available soon.</p>
          <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
            Notify me
          </Button>
        </CardFooter>
      </Card>
      </PopoverTrigger>
      <PopoverContent className="bg-[#18181b]">
        <div className="px-1 py-2">
            <div className="text-small font-bold text-white">Available Soon</div>
            <div className="text-tiny text-gray-200">{name}</div>
          </div>
      </PopoverContent>
    </Popover>
  );
}
