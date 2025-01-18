/** @format */

import Contain from "@/components/shop/contain/contain";
import Navbar from "@/components/shop/navbar/navbar";
import QualiteContainer from "@/components/shop/qualite/qualite.container";
import ShobLink from "@/components/shop/shobLink/shobLink";
import Layout from "@/ui/components/layout/layout";
import Seo from "@/ui/components/seo/seo";
import React from "react";

export default function Shop() {
  return (
    <>
      <Seo title="BOUTIQUE" description="E-commerce" />

      <Layout isDisplayCreadCrumbs={false}>
        <ShobLink />
        <Navbar/>
        <Contain/>
        <QualiteContainer/>
      </Layout>
    </>
  );
}
