/** @format */

import Button from "@/ui/designSystem/button/button";
import Typography from "@/ui/designSystem/typography/typography";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
  nom: string;
  date?: string;
  description: string;
  prix: number;
  promotion: string | number;
}

export default function CartProduit({
  src,
  alt,
  nom,
  prix,
  promotion,
  date,
  description,
}: Props) {
  // Vérifie si le produit a une promotion active
  function checkProductPromotion(promotion: string | number) {
    return (
      promotion !== 0 &&
      promotion !== "0" &&
      promotion !== null &&
      promotion !== undefined
    );
  }

  // Vérifie si la date d'ajout du produit dépasse une semaine
  function checkProductNew(dateAjout: string | undefined) {
    if (!dateAjout) return false;

    const currentDate = new Date();
    const productDate = new Date(dateAjout);

    const differenceInTime = currentDate.getTime() - productDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return differenceInDays <= 7; // Retourne true si c'est une semaine ou moins
  }

  // Calcul du pourcentage de réduction avec les deux premiers chiffres
  function calculateDiscountPercentage(
    prixOriginal: number,
    prixReduit: number
  ) {
    if (prixOriginal <= 0 || prixReduit < 0 || prixReduit > prixOriginal) {
      throw new Error(
        "Les prix doivent être valides, et le prix réduit ne peut pas être supérieur au prix original."
      );
    }

    const discount = ((prixOriginal - prixReduit) / prixOriginal) * 100;
    return discount.toFixed(2); // Renvoie le pourcentage avec deux décimales
  }

  // Fonction pour gérer l'ajout au panier
  function handleAddToCart() {
    const productData = {
      src,
      alt,
      nom,
      prix,
      promotion,
      date,
      description,
    };

    console.log("Produit ajouté au panier :", productData);

    // Exemple : appeler une fonction pour ajouter le produit au panier
    // addToCart(productData);
  }

  return (
    <div className="relative flex flex-col justify-start overflow-hidden bg-gray-6 w-[285px] h-96 hover:bg-gray-7 rounded-lg shadow-lg transition-all duration-500">
      {/* Conteneur pour l'image */}
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 transform"
        />
        {checkProductPromotion(promotion) && (
          <Typography
            component="span"
            variant="caption3"
            className="absolute flex flex-col items-center justify-center text-gray rounded-full shadow-lg w-[50px] h-[50px] bg-opacity-85 bg-white top-5 right-5"
          >
            {calculateDiscountPercentage(prix, Number(promotion))}%
          </Typography>
        )}
        {checkProductNew(date) && (
          <Typography
            component="span"
            variant="caption3"
            className="absolute flex flex-col items-center justify-center text-white rounded-full shadow-lg w-[50px] h-[50px] bg-opacity-85 bg-secondary top-5 right-5"
          >
            New
          </Typography>
        )}
      </div>

      {/* Conteneur pour le texte */}
      <div className="pb-2 pl-2 mt-4 space-x-2">
        <Typography variant="h5" component="h3" weight="regular">
          {nom}
        </Typography>
        <Typography variant="caption1" theme="gray">
          {description}
        </Typography>
        <Typography className="mb-2 space-x-8">
          <Typography variant="body" theme="black" component="span">
            € {prix}
          </Typography>
          {promotion && (
            <Typography
              variant="caption1"
              component="span"
              theme="gray"
              className="line-through"
            >
              € {promotion}
            </Typography>
          )}
        </Typography>
        <Button variant="accent" size="small" action={handleAddToCart}>
          Ajouter au panier
        </Button>
      </div>
    </div>
  );
}

