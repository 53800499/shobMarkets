/** @format */

export interface produitTypes {
  id: number;
  src: string;
  alt: string;
  prix: number;
  nom: string;
  categorie: string;
  dateAjout: string; // Produit ajouté il y a 7 jours
  description: string;
  description1: string;
  images: React.ReactNode;
  colors: React.ReactNode;
  sizes: React.ReactNode;
}

export type produitTyped = {
  id: number;
  src: string;
  alt: string;
  prix: number;
  nom: string;
  categorie: string;
  dateAjout: string;
  description: string;
  description1: string;
  promotion: number;
  images: {
    src: string;
    alt: string;
  }[];
  colors: {
    id: number;
    name: string;
    code: string;
  }[];
  sizes: string[];
};
export type produitType = {
  id: number;
  src: string;
  alt: string;
  prix: number;
  nom: string;
  categorie: string;
  dateAjout: string;
  description: string;
  description1: string;
  quantity?: number;
  promotion: number;
  images: { id:number; src: string; alt: string }[];
  colors: { id: number; name: string; code: string }[];
  sizes: string[];
};
