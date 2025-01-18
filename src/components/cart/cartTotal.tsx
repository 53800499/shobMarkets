/** @format */

import Button from "@/ui/designSystem/button/button";
import Typography from "@/ui/designSystem/typography/typography";
import React from "react";

export default function CartTotal({ totalAmount = 2500 }) {
  return (
    <div className="w-full max-w-sm p-6 mx-auto mb-6 text-center rounded-lg shadow-md  bg-primary-1">
      {/* Titre */}
      <Typography
        variant="h3"
        component="h3"
        className="mb-4 text-center text-gray-800"
      >
        Totaux des paniers
      </Typography>

      {/* Ligne de total */}
      <div className="flex items-center justify-between w-full mb-6 px-9">
        <Typography variant="body" component="span" className="text-gray-700">
          Total
        </Typography>
        <Typography
          variant="body"
          theme="primary"
          component="span"
          className="font-bold text-gray-900"
        >
          Rp. {totalAmount.toLocaleString()}
        </Typography>
      </div>

      {/* Bouton pour passer à la caisse */}
      <Button
        variant="outline"
        size="small"
        className="rounded"
        aria-label="Passer à la caisse"
      >
        Caisse
      </Button>
    </div>
  );
}
