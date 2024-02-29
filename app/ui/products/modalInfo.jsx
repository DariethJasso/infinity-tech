'use client'
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

export default function ModalInfo({ name, price, image, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onPress={openModal}>More Info</Button>
      <Modal 
        backdrop="blur" 
        isOpen={isOpen} 
        onClose={closeModal}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}
      >
        <ModalContent className="bg-[#18181b]">
          <ModalHeader className="flex flex-col gap-1 text-white">{name}</ModalHeader>
          <ModalBody className="text-white">
            <img src={image} alt={name} />
            <p>
              {description}
            </p>
            <p>
              ${price}
            </p>
          </ModalBody>
          <ModalFooter>
            <Button className="bg-gray-100 font-bold" color="danger" variant="light" onPress={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
