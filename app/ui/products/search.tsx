import React from "react";
import {Input} from "@nextui-org/react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search() {
  const radius = [
    "full",
    "lg",
    "md",
    "sm",
    "none",
  ];

  return (
    <div className="w-full flex flex-row flex-wrap gap-4">
      
        <Input
          
          radius="lg"
          type="text"
          label="Seach"
          placeholder="Search..."
          className="max-w-[220px]"
          startContent={
            <FontAwesomeIcon icon={faSearch} />
              
          }
        >
        </Input>
     
    </div>
  );
}
