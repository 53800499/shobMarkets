/** @format */

import { dbProduits } from "@/components/home/produits/produitsDB";
import Container from "@/ui/components/container/container";
import Typography from "@/ui/designSystem/typography/typography";
import React from "react";
import {  RiColorFilterFill } from "react-icons/ri";
import { productsPerPage } from "../contain/contain";


export default function Navbar() {
  const totalProduits = dbProduits.length;
  return (
    <Container className="flex items-center justify-between h-16 bg-primary-1 ">
      <Typography variant="caption1" className="flex space-x-4">
        <Typography component="span">Filtre</Typography>
        <Typography component="span" className="mt-2">
          <RiColorFilterFill />
        </Typography>
        <Typography component="span">
          | Projection de {productsPerPage} sur {totalProduits} produits
        </Typography>
      </Typography>
      <Typography>
        <Typography className="pb-5">
          Affiche{" "}
          <input
            type="text"
            disabled
            value={16}
            className="w-auto px-2 bg-white text-gray-3 max-w-10"
          />{" "}
          partie par{" "}
          <input
            type="text"
            disabled
            value="defaut"
            className="w-auto px-2 bg-white text-gray-3 max-w-20"
          />
        </Typography>
      </Typography>
    </Container>
  );
}
