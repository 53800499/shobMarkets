/** @format */

import React, { createContext, useContext, useState } from "react";

interface Context {
  children: React.ReactNode;
}

interface Product {
   id: number | string;
  src: string;
  alt: string;
  nom: string;
  prix: number;
  promotion?: string | number;
  date?: string;
  description?: string;
  size?: number| string| undefined;
  quantity: number | string;
  selectedColor?: string;
  selectedSize?: string | number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  updateCartItem: (productId: string, quantity: number) => void;
  removeCartItem: (productId: string) => void; // Nouvelle fonction pour supprimer un produit
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

  // Fonction pour mettre à jour la quantité d'un produit dans le panier
  const updateCartItem = (productId: string, quantity: number) => {
    setCart((prevCart) => 
      prevCart.map((product) => 
        product.id === productId ? { ...product, quantity } : product
      )
    );
  };

  // Fonction pour supprimer un produit du panier
  const removeCartItem = (productId: string) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartItem, removeCartItem }}>
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
