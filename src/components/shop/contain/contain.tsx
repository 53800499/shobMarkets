/** @format */

import CartProduit from "@/components/home/produits/cartProduit";
import { dbProduits } from "@/components/home/produits/produitsDB";
import Container from "@/ui/components/container/container";
import Button from "@/ui/designSystem/button/button";
import React, { useState } from "react";
  // Nombre de produits à afficher par page
  export const productsPerPage = 8;

export default function Contain() {
  // État de la page actuelle
  const [currentPage, setCurrentPage] = useState(1);


  // Calculer les produits à afficher pour la page actuelle
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = dbProduits.slice(indexOfFirstProduct, indexOfLastProduct);

  // Fonction pour changer de page
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Nombre total de pages
  const totalPages = Math.ceil(dbProduits.length / productsPerPage);

  return (
    <Container className="my-8">
      <div className="flex flex-wrap justify-center gap-6 my-10">
        {/* Affichage des produits pour la page actuelle */}
        {currentProducts.map((produit, index) => (
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

      {/* Pagination */}
      <div className="flex justify-center gap-4 ">
        {/* Bouton Précédent */}
        <Button
          variant="suivant"
          className="rounded focus:bg-primary"
          action={() => handlePageChange(currentPage > 1 ? currentPage - 1 : currentPage)}
          disabled={currentPage === 1}
        >
          Précédent
        </Button>

        {/* Boutons de pagination (1, 2, 3, etc.) */}
        {[...Array(totalPages)].map((_, index) => (
          <Button
            key={index}
            variant="suivant"
            className="rounded focus:bg-primary"
            action={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </Button>
        ))}

        {/* Bouton Suivant */}
        <Button
          variant="suivant"
          className="rounded focus:bg-primary"
          action={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : currentPage)}
          disabled={currentPage === totalPages}
        >
          Suivant
        </Button>
      </div>
    </Container>
  );
}
