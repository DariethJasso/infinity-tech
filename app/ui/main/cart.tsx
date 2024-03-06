/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Badge } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useData } from "@/app/hook/useData";

interface Product {
    idproducts: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

export default function Cart() {
    const { cart, setCart } = useData();

    const removeFromCart = (productId: string) => {
        setCart(cart=> cart.filter(product => product.idproducts !== productId));
    };

    return (
        <Dropdown className="bg-[#18181b]">
            <DropdownTrigger className="pointer">
                <button className="bg-[#18181b] w-[60px] h-[40px] rounded-lg md:w-[80px]">
                    <Badge content={cart.length} color="danger">
                        <FontAwesomeIcon icon={faCartShopping} className="pr-1 h-6" />
                    </Badge>
                </button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
                {cart.map((product: Product) => (
                    <DropdownItem className="text-white" key={product.idproducts}>
                        <div>
                            <p>{product.name}</p>
                            <div className="flex gap-3">
                                <img width={40} src={product.image} alt={product.name} />
                                <p>${product.price}</p>
                                <p>Cantidad: {product.quantity}</p>
                                <Button color="danger" variant="light" size="sm" onClick={() => removeFromCart(product.idproducts)}>Eliminar</Button>
                            </div>
                        </div>
                    </DropdownItem>
                ))}
                <DropdownItem className="text-white">
                    {
                        cart.length > 0 ? (
                            <p>Total: ${cart.reduce((total, product) => total + product.price * product.quantity, 0)}</p>
                        ): (
                            <p>No hay productos en el carrito</p>
                        )
                    }
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
