import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Divider} from "@nextui-org/react";
import BasicRating from "./rating";

export default function ModalInfo({name,description,price,image,rating}: {name: string,description: string,price: number,image: string,rating: number}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-[#18181b] text-white">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
              <ModalBody>
                <div className="flex justify-center">

                  <img className="object-cover rounded-lg" src={image} alt={name} width={200} height={200} />
                </div>
                <p>{description}</p>
                <Divider/>
                <p> ${price}.00</p>
                <Divider/>
                <BasicRating rating={rating} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
