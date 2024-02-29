
import React from "react";
import { fetchProducts } from "@/app/lib/data";

export default async function TableProducts() {
  const products = await fetchProducts();
  console.log(products);
  return (
    <div>
      
      
     <table>
        <thead className="bg-[#27272a]">
          <th>IMAGE</th>
          <th>NAME</th>
          <th>DESCRIPTION</th>
          <th>QUANTITY</th>
          <th>PRICE</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {
            products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.name} width={50} height={50} className="rounded-2xl" />
                </td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.quantity}</td>
                <td>${product.price}</td>
              </tr>
            ))
          }
        </tbody>
     </table>
      
    </div>
  );
}
