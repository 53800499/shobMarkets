/** @format */

import ProduitDetailContainer from "@/components/produitDetail/produitDetail.container";
import QualiteContainer from "@/components/shop/qualite/qualite.container";
import Layout from "@/ui/components/layout/layout";
import Seo from "@/ui/components/seo/seo";
import React from "react";
//interface Props {}

export default function DetailProduit() {
  return (
    <>
      <Seo title="BOUTIQUE" description="E-commerce" />

      <Layout isDisplayCreadCrumbs={false}>
        <ProduitDetailContainer />
        <QualiteContainer />
      </Layout>
    </>
  );
}
