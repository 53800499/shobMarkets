/** @format */

import Container from "@/ui/components/container/container";
import React from "react";
import ListeImageProduit from "./listeImageProduit";
import Image from "next/image";
import ProduitDetail from "./produitDetail";
import Breadcrumbs from "@/ui/components/breadcrumbs/breadcrumbs";
import ProduitCategorie from "./produitCategorie";
import ProduitComment from "./produitComment";

export default function ProduitDetailContainer() {
  const dbProduits = {
    id: 1,
    src: "/assets/images/Slide1.png",
    alt: "Slide 1",
    prix: 15000,
    nom: "Produit 1",
    categorie: "Chaussure",
    dateAjout: "2025-01-10T12:00:00Z", // Produit ajouté il y a 7 jours
    description: "Produit récent",
    description1:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi totam fugit, esse ex nostrum facere minus. Reprehenderit laborum eius illo.",
    promotion: 7500,
    images: [
      { src: "/assets/images/Slide1.png", alt: "Image 1 description" },
      { src: "/assets/images/Slide2.jpg", alt: "Image 2 description" },
      { src: "/assets/images/Slide3.png", alt: "Image 3 description" },
      { src: "/assets/images/Slide4.png", alt: "Image 4 description" }
    ],
    colors: [
      { name: "Vert", code: "bg-green" },
      { name: "Bleu", code: "bg-primary" },
      { name: "Rouge", code: "bg-red" }
    ],
    sizes: ["40", "37", "52"]
  };

  return (
    <>
      <Breadcrumbs nom={dbProduits.nom} className="bg-primary-1 py-auto" />

      <Container>
        <div className="flex flex-wrap justify-center gap-8 my-8 lg:grid-cols-3">
          <div className="flex flex-row space-x-4">
            {/* Liste des images secondaires */}
            <div className="flex flex-col gap-1 min-w-sm:flex-row sm:gap-2">
              {dbProduits.images &&
                dbProduits.images.map((image, index) => (
                  <ListeImageProduit
                    key={index}
                    src={image.src}
                    alt={image.alt}
                  />
                ))}
            </div>

            {/* Image principale */}
            <div className="relative w-auto ">
              <Image
                src={dbProduits.src}
                alt={dbProduits.alt}
                layout="responsive"
                width={481}
                height={500}
                objectFit="cover"
                className="shadow-lg min-w-[433px] min-h-[500px] rounded-lg max-w-[600px] max-h-[700px] rounded"
              />
            </div>
          </div>

          {/* Détails du produit */}
          <ProduitDetail
            id={dbProduits.id}
            nom={dbProduits.nom}
            prix={dbProduits.prix}
            promotion={dbProduits.promotion}
            description={dbProduits.description1}
            quantity={1}
            sizes={dbProduits.sizes}
            colors={dbProduits.colors}
            categorie={dbProduits.categorie}
          />
        </div>
        <ProduitComment/>
        <hr className="my-2 border-gray-4" />
        <ProduitCategorie categorie={dbProduits.categorie}/>
      </Container>
    </>
  );
}
