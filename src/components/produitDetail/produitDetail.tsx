/** @format */

import React, { JSX, useState } from "react";
import Button from "@/ui/designSystem/button/button";
import Typography from "@/ui/designSystem/typography/typography";
import {
  RiFacebookBoxFill,
  RiLinkedinBoxFill,
  RiStarFill,
  RiTwitterFill
} from "react-icons/ri";

interface ColorOption {
  name: string; // Nom de la couleur (ex. "Rouge")
  code: string; // Code CSS de la couleur (ex. "bg-red-500")
  icon?: JSX.Element; // Optionnel : Icône associée à la couleur
}

interface ProduitDetailProps {
  id: number;
  nom: string;
  description: string;
  categorie: string;
  colors: ColorOption[];
  sizes: (string | number)[];
  prix: number;
  promotion?: number;
  quantity?: number;
}

export default function ProduitDetail({
  id,
  nom,
  description,
  prix,
  promotion,
  colors,
  sizes,
  categorie,
  quantity = 1 // Défaut à 1 si non défini
}: ProduitDetailProps) {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | number | null>(
    null
  );

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    setCurrentQuantity(isNaN(newQuantity) || newQuantity < 1 ? 1 : newQuantity);
  };

  const handleAddToCart = () => {
    console.log(
      `Produit ajouté : ID ${id}, Quantité : ${currentQuantity}, Couleur : ${selectedColor}, Taille : ${selectedSize}`
    );
    // Ajouter la logique pour ajouter au panier
  };

  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h2" component="h2">
        {nom}
      </Typography>
      <div>
        {promotion ? (
          <div className="flex items-center gap-2">
            <Typography
              variant="body"
              component="span"
              className="font-bold text-green-600"
            >
              {promotion}€
            </Typography>
            <Typography
              variant="body"
              component="span"
              className="line-through text-gray-4"
            >
              {prix}€
            </Typography>
          </div>
        ) : (
          <Typography variant="body" component="p" className="text-gray-800">
            {prix}€
          </Typography>
        )}
      </div>
      <div className="flex space-x-2 text-yellow-500">
        <div className="flex items-center gap-1">
          <RiStarFill className="text-yellow " />
          <RiStarFill className="text-yellow " />
          <RiStarFill className="text-yellow " />
          <RiStarFill className="text-yellow " />
          <RiStarFill className="text-yellow " />
        </div>
        <div className="text-gray-4">| 4.5 avis des clients</div>
      </div>
      <Typography
        variant="body"
        component="p"
        className="max-w-[500px] text-justify"
      >
        {description}
      </Typography>
      <hr className="my-2 border-gray-4" />

      {/* Couleur */}
      <div className="space-y-4">
        <Typography variant="body" className="text-gray-4">
          Sélectionnez la couleur
        </Typography>
        <div className="flex gap-4">
          {colors.map((color, index) => (
            <button
              key={index}
              className={`w-10 h-10 rounded-full ${color.code} ${
                selectedColor === color.name ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedColor(color.name)}
              aria-label={`Choisir la couleur ${color.name}`}
            >
              {color.icon && color.icon}
            </button>
          ))}
        </div>
      </div>

      <hr className="my-2 border-gray-4" />

      {/* Taille */}
      <div className="space-y-2">
        <Typography variant="body" className="text-gray-4">
          Sélectionnez la taille
        </Typography>
        <div className="flex gap-4">
          {sizes.map((size, index) => (
            <button
              key={index}
              className={`w-10 h-10 rounded ${
                selectedSize === size
                  ? "bg-primary text-white"
                  : "bg-primary-1 text-gray-600"
              }`}
              onClick={() => setSelectedSize(size)}
              aria-label={`Choisir la taille ${size}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Sélecteur de quantité */}
        <input
          type="number"
          min="1"
          className="w-16 h-12 text-center border rounded border-primary"
          value={currentQuantity}
          onChange={handleQuantityChange}
          aria-label={`Quantité pour ${nom}`}
        />

        {/* Bouton Ajouter au panier */}
        <Button
          variant="outline"
          size="small"
          className="w-[156px] rounded"
          action={handleAddToCart}
          disabled={!selectedColor || !selectedSize}
          aria-label={`Ajouter ${currentQuantity} ${nom} au panier`}
        >
          Ajouter au panier
        </Button>
      </div>
      <hr className="my-2 border-gray-4" />
      <div>
        <table>
          <tbody>
            <tr>
              <td>Catégorie </td>
              <td> : {categorie}</td>
            </tr>
            <tr>
              <td>Partager</td>
              <td>
                <div className="flex gap-2">
                  {"  "}
                  : <RiFacebookBoxFill className="mt-1" />{" "}
                  <RiLinkedinBoxFill className="mt-1" />
                  <RiTwitterFill className="mt-1" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <Typography variant="body" component="h5" className="text-gray-4">
          Information sur la pointure
        </Typography>
        <Typography variant="body" component="div" className="text-gray">
          Prenez une taille au-dessus de votre pointure habituelle
        </Typography>
      </div>
    </div>
  );
}
