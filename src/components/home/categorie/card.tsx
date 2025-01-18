/** @format */

import Typography from "@/ui/designSystem/typography/typography";
import Image from "next/image";
import React from "react";
interface Props {
  src: string;
  alt: string;
  nom: string;
}

export default function Card({ src, alt, nom }: Props) {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-gray-200 rounded-lg w-[381px] h-96">
      {/* Conteneur pour l'image */}
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 transform rounded hover:scale-110"
        />
      </div>

      {/* Conteneur pour le texte */}
      <div className="mt-4">
        <Typography variant="h3" component="h3" className="font-bold">
          {nom}
        </Typography>
      </div>
    </div>
  );
}
