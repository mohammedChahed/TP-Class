import React, { useState } from "react";
import Card from "./Card";

export default function App() {
  const [cart, setCart] = useState(0);

  const products = [
    { id: 1, title: "Produit 1", price: "10€", img: "https://via.placeholder.com/150" },
    { id: 2, title: "Produit 2", price: "20€", img: "https://via.placeholder.com/150" },
    { id: 3, title: "Produit 3", price: "30€", img: "https://via.placeholder.com/150" },
  ];

  const handleAdd = () => setCart(cart + 1);
  const handleDelete = () => setCart(cart > 0 ? cart - 1 : 0);

  return (
    <div className="p-8 ">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Panier: {cart}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            price={product.price}
            img={product.img}
            onAdd={handleAdd}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
