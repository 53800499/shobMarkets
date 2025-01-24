/** @format */

import React, { createContext, useContext, useState } from "react";

interface Context {
  children: React.ReactNode;
}

interface Product {
  id: string;
  src: string;
  alt: string;
  nom: string;
  prix: number;
  promotion: string | number;
  date?: string;
  description?: string;
  size: number;
  quantity: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
}

// Créez le contexte avec un type explicite ou undefined
const CartContext = createContext<CartContextType | undefined>(undefined);

// Fournisseur du contexte
export function CartProvider({ children }: Context) {
  const [cart, setCart] = useState<Product[]>([]);

  // Fonction pour ajouter un produit au panier
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      // Vérifie si le produit est déjà dans le panier
      const isProductInCart = prevCart.some((item) => item.nom === product.nom);
      if (isProductInCart) {
        return prevCart; // Ne rien faire si le produit est déjà dans le panier
      }
      return [...prevCart, product];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personnalisé pour utiliser le contexte du panier
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
