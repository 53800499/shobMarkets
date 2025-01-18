/** @format */

import React, { useState } from "react";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import Container from "@/ui/components/container/container";
import CartTotal from "./cartTotal";

export default function CartTable() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "/assets/images/Slide2.png",
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
    },
    {
      id: 2,
      image: "/assets/images/Slide2.png",
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
    },
    {
      id: 3,
      image: "/assets/images/Slide2.png",
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
    },
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (id, value) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, parseInt(value) || 1) }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Container className="flex flex-wrap gap-8 my-4 md:flex-row md:justify-between md:items-start">
      {/* Tableau des articles */}
      <div className="w-full p-6 bg-white rounded-lg shadow-lg md:w-3/5">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray bg-primary-1">
              <th className="p-4 text-sm font-medium">Produits</th>
              <th className="p-4 text-sm font-medium">Prix</th>
              <th className="p-4 text-sm font-medium">Quantité</th>
              <th className="p-4 text-sm font-medium">Total</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr
                key={item.id}
                className={`${
                  index !== cartItems.length - 1 ? "border-b border-gray-3" : ""
                }`}
              >
                <td className="flex items-center p-4">
                  <div className="relative w-16 h-16 overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <span className="ml-4 text-sm font-medium text-gray-700">
                    {item.name}
                  </span>
                </td>
                <td className="p-4 text-sm text-gray-600">
                  Rs. {item.price.toLocaleString()}
                </td>
                <td className="p-4">
                  <input
                    type="number"
                    min="1"
                    className="w-16 text-center border border-gray-300 rounded"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                  />
                </td>
                <td className="p-4 text-sm text-gray-600">
                  Rs. {(item.price * item.quantity).toLocaleString()}
                </td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-primary hover:text-red-700"
                  >
                    <RiDeleteBinLine size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Affichage du total général */}
      <div className="w-full md:w-1/3">
        <CartTotal totalAmount={calculateTotal()} />
      </div>
    </Container>
  );
}
