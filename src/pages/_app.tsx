/** @format */

import { CartProvider } from "@/context/cartContext";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";
import AuthUserProvider from "@/context/AuthUserContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthUserProvider>
      <CartProvider>
      <ToastContainer />
      <Component {...pageProps} />
    </CartProvider>
    </AuthUserProvider>
    
  );
}
