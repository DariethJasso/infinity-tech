import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Divider } from "@nextui-org/react";
import BasicRating from "./rating";
import { faPlus, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useData } from "@/app/hook/useData";

// Define el tipo para el objeto del producto
type Product = {
  idproducts: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  quantity: number;
  category: string;
};

// Props para el componente ModalInfo
type ModalInfoProps = Product;

export default function ModalInfo({ idproducts, name, description, price, image, rating }: ModalInfoProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { setCart, cart } = useData();

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Button onPress={onOpen}>
        <FontAwesomeIcon icon={faPlus} className="w-6" /> Ver Más
      </Button>
      <Modal placement="center" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-[#18181b] text-white">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
              <ModalBody>
                <div className="flex justify-center">
                  <img className="object-cover rounded-lg" src={image} alt={name} width={200} height={200} />
                </div>
                <p>{description}</p>
                <Divider />
                <p>${price}.00</p>
                <Divider />
                <BasicRating rating={rating} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onClick={() => addToCart({ idproducts, name, description, price, image, rating, quantity: 1, category: "category" })}>
                  <FontAwesomeIcon icon={faCartShopping} className="w-6" /> Agregar Carrito
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
