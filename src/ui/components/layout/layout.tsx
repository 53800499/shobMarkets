/** @format */

import React from "react";
import Navigation from "../navigation/navigation";
import Footer from "../navigation/footer";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import Navbar from "../navigation/navbar";
interface Props {
  children: React.ReactNode;
  isDisplayCreadCrumbs?: boolean;
}
export default function Layout({ children, isDisplayCreadCrumbs }: Props) {
  return (
    <>
    <Navbar />
      <Navigation />
      {isDisplayCreadCrumbs && <Breadcrumbs className="absolute shadow-lg bottom-10 right-10"/>}
      {children}
      <Footer />
    </>
  );
}
