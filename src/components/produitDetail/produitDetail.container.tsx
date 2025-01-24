import Container from "@/ui/components/container/container";
import ListeImageProduit from "./listeImageProduit";
import Image from "next/image";
import ProduitDetail from "./produitDetail";
import Breadcrumbs from "@/ui/components/breadcrumbs/breadcrumbs";
import ProduitCategorie from "./produitCategorie";
import ProduitComment from "./produitComment";
import { produitType } from "@/types/produitType";

type Props = {
  produit: produitType;
};

export default function ProduitDetailContainer({ produit }: Props) {
  return (
    <>
      <Breadcrumbs nom={produit.nom} className="bg-primary-1 py-auto" />

      <Container>
        <div className="flex flex-wrap justify-center gap-8 my-8 lg:grid-cols-3">
          <div className="flex flex-row space-x-4">
            {/* Liste des images secondaires */}
            <div className="flex flex-col gap-1 min-w-sm:flex-row sm:gap-2">
              {produit.images &&
                produit.images.map((image) => (
                  <ListeImageProduit
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                  />
                ))}
            </div>

            {/* Image principale */}
            <div className="relative w-auto">
              <Image
                src={produit.src}
                alt={produit.alt}
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
            id={produit.id}
            nom={produit.nom}
            prix={produit.prix}
            promotion={produit.promotion}
            description={produit.description1}
            quantity={1}
            sizes={produit.sizes}
            colors={produit.colors}
            categorie={produit.categorie}
          />
        </div>
        <ProduitComment />
        <hr className="my-2 border-gray-4" />
        <ProduitCategorie categorie={produit.categorie} />
      </Container>
    </>
  );
}
