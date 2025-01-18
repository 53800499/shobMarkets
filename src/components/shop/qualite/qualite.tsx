/** @format */

import Typography from "@/ui/designSystem/typography/typography";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
  description1: string;
  description2: string;
}

export default function Qualite({ src, alt, description1, description2 }: Props) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:w-[calc(50%-2rem)] md:w-[calc(25%-2rem)] space-y-4 sm:space-y-0 sm:space-x-4">
      {/* Image container */}
      <div className="relative w-16 h-16 sm:w-10 sm:h-10">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 transform rounded-lg hover:scale-105"
        />
      </div>

      {/* Descriptions */}
      <div className="space-y-2 sm:space-y-1">
        <Typography variant="caption3" theme="black" className="font-semibold text-center sm:text-left">
          {description1}
        </Typography>
        <Typography variant="caption3" theme="gray" className="text-center sm:text-left">
          {description2}
        </Typography>
      </div>
    </div>
  );
}
