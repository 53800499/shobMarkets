/** @format */

import Container from "@/ui/components/container/container";
import Typography from "@/ui/designSystem/typography/typography";
import React from "react";
import CartProduit from "./cartProduit";
import { dbProduits } from "./produitsDB";
import Button from "@/ui/designSystem/button/button";

export default function Produits() {
  return (
    <Container className="justify-center my-12 bg-white">
      <Typography component="h1" variant="h1" className="text-center">
        Nos Produits
      </Typography>
      <div className="flex flex-wrap justify-center gap-6">
        {dbProduits.map((produit, index) => (
          <CartProduit
            key={index}
            src={produit.src}
            alt={produit.alt}
            nom={produit.nom}
            prix={produit.prix}
            promotion={produit.promotion ?? 0}
            description={produit.description}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button variant="outline"  >Voir plus</Button> 
      </div>
    </Container>
  );
}
