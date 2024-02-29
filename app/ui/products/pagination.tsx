import React from "react";
import {Pagination} from "@nextui-org/react";

export default function PaginationProducss() {


  return (
    <div className="flex flex-wrap gap-4 items-center">
      
        <Pagination total={10} initialPage={1} variant="bordered" />
    </div>
  );
}
