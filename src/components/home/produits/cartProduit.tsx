/** @format */

import React from "react";
import Image from "next/image";
import Button from "@/ui/designSystem/button/button";
import Typography from "@/ui/designSystem/typography/typography";

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
  const hasPromotion = promotion && Number(promotion) > 0;

  // Vérifie si le produit est récent (ajouté dans la semaine)
  const isNewProduct = React.useMemo(() => {
    if (!date) return false;

    const currentDate = new Date();
    const productDate = new Date(date);

    const differenceInDays =
      (currentDate.getTime() - productDate.getTime()) / (1000 * 3600 * 24);

    return differenceInDays <= 7;
  }, [date]);

  // Calcul du pourcentage de réduction
  const discountPercentage = React.useMemo(() => {
    if (!hasPromotion) return null;

    const prixReduit = Number(promotion);
    if (prix <= 0 || prixReduit <= 0 || prixReduit > prix) return null;

    return ((1 - prixReduit / prix) * 100).toFixed();
  }, [prix, promotion, hasPromotion]);

  // Gestion de l'ajout au panier
  const handleAddToCart = () => {
    const productData = { src, alt, nom, prix, promotion, date, description };
    console.log("Produit ajouté au panier :", productData);
    // Appelle une fonction pour ajouter au panier si nécessaire (ex : via un contexte global)
  };

  return (
    <div className="relative flex flex-col bg-gray-100  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image et badges */}
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="hover:scale-105 transition-transform duration-500"
        />
        {/* Badge promotion */}
        {hasPromotion && discountPercentage && (
          <Typography
            component="span"
            variant="caption3"
            className="absolute flex flex-col items-center justify-center top-4 right-4 bg-white text-gray-900 rounded-full shadow-md text-sm w-[50px] h-[50px]"
          >
            -{discountPercentage}%
          </Typography>
        )}
        {/* Badge nouveauté flex flex-col items-center justify-center  */}
        {isNewProduct && (
          <Typography
            component="span"
            variant="caption4"
            className="absolute flex flex-col items-center justify-center top-4 left-4 bg-secondary bg-opacity-85 text-white rounded-full shadow-md p-5  text-sm w-[50px] h-[50px] "
          >
            New
          </Typography>
        )}
      </div>

      {/* Détails du produit */}
      <div className="flex flex-col p-4">
        <Typography variant="h5" component="h3" className="mb-2">
          {nom}
        </Typography>
        <Typography variant="caption1" className="text-gray-500 mb-4">
          {description}
        </Typography>

        {/* Prix et promotion */}
        <div className="flex items-center mb-4 space-x-4">
          <Typography variant="body" className="text-black font-bold">
            €{prix}
          </Typography>
          {hasPromotion && (
            <Typography
              variant="caption1"
              className="line-through text-gray-400"
            >
              €{promotion}
            </Typography>
          )}
        </div>

        {/* Bouton Ajouter au panier */}
        <Button variant="accent" size="small" action={handleAddToCart}>
          Ajouter au panier
        </Button>
      </div>
    </div>
  );
}
