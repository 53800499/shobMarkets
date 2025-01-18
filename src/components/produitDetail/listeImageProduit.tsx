/** @format */

import Image from "next/image";
import React from "react";
interface Props {
  src: string;
  alt: string;
}

export default function ListeImageProduit({ src, alt }: Props) {
  return (
    <div className="relative min-w-[86px] min-h-[90px]">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="rounded"
      />
    </div>
  );
}
