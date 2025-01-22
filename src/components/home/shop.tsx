/** @format */

import Container from "@/ui/components/container/container";
import Image from "next/image";
import React from "react";
import Typography from "@/ui/designSystem/typography/typography";
import Button from "@/ui/designSystem/button/button";

export default function Decouvrir() {
  return (
    <div className="bg-white">
      <Container className="flex flex-wrap overflow-visible lg:flex-nowrap">
        <div className="flex-1 space-y-6 relative p-10">
          {/* Titre principal */}
          <Typography variant="h2" className="text-gray-900 font-bold">
            TROUVEZ VOTRE PRODUIT FAVORI EN FONCTION
          </Typography>

          {/* Description */}
          <Typography variant="body" className="text-gray-600 text-justify">
            Découvrez notre vaste collection de produits soigneusement conçus,
            pensés pour révéler votre individualité et répondre à votre sens du
            style.
          </Typography>

          {/* Bouton Boutique */}
          <Button
            variant="accent"
            size="medium"
            className="mt-4 sm:self-start rounded-full"
          >
            Visitez la boutique
          </Button>

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {[
              { count: "200+", label: "Marques internationales" },
              { count: "2,000+", label: "Produits de haute qualité" },
              { count: "200+", label: "Clients satisfaits" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <Typography variant="h3" className="text-gray-900">
                  {stat.count}
                </Typography>
                <Typography
                  variant="caption3"
                  theme="gray"
                  className="text-gray-500"
                >
                  {stat.label}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full lg:w-1/2 mt-6 lg:mt-0">
          <div className="relative w-full h-64 lg:h-full">
            <Image
              src="/assets/images/accueil.jpg"
              alt="Decouvrir"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              className="rounded-lg border-4 border-white"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
