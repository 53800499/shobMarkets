/** @format */

import React from "react";
import Container from "@/ui/components/container/container";
import Typography from "@/ui/designSystem/typography/typography";
import CartProduit from "./cartProduit";
import { dbProduits } from "./produitsDB";
import Button from "@/ui/designSystem/button/button";

export default function Produits() {
  return (
    <Container className="my-12 bg-white">
      {/* Titre de la section */}
      <Typography component="h2" variant="h2" className="text-center mb-6">
        Nos Produits
      </Typography>

      {/* Grille des produits */}
      <div className="grid grid-cols-1 m:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {dbProduits.map((produit) => (
          <CartProduit
            key={produit.id}
            src={produit.src}
            alt={produit.alt}
            prix={produit.prix}
            nom={produit.nom}
            description={produit.description}
            date={produit.dateAjout}
            promotion={produit.promotion ?? ""} // Fournit une valeur par défaut si "promotion" est undefined
          />
        ))}
      </div>

      {/* Bouton "Voir plus" */}
      <div className="flex justify-center mt-8">
        <Button variant="outline">Voir plus</Button>
      </div>
    </Container>
  );
}
