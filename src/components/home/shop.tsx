/** @format */

import Container from "@/ui/components/container/container";
import Image from "next/image";
import React from "react";
import Collection from "./decouvir/collection";

export default function Decouvrir() {
  return (
    <Container className="relative h-[80vh] overflow-visible">
      {/* L'image dépasse du conteneur */}
      <Image
        src="/assets/images/Slide1.png"
        alt="Decouvrir"
        layout="fill" // L'image prend la taille du conteneur
        objectPosition="center" // L'image est centrée dans le conteneur
        objectFit="cover" // L'image couvre le conteneur tout en maintenant ses proportions
        className="absolute top-[-10%] left-[-10%]" // Déplace l'image pour la faire déborder
      />
      {/* Le contenu au-dessus de l'image, positionné en bas à droite */}
      {/*       <Collection className="absolute m-10 right-10 bottom-40 md:right-4 md:bottom-2" />
       */}
      <Collection className="absolute p-5 bg-white bg-opacity-75 rounded-lg shadow-lg bottom-10 right-10" />
    </Container>
  );
}
