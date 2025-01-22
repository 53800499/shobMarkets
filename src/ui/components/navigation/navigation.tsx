/** @format */

import React, { useEffect, useState } from "react";
import Container from "@/ui/components/container/container";
import ActiveLink from "@/ui/components/navigation/active-link";
import Typography from "@/ui/designSystem/typography/typography";
import Button from "@/ui/designSystem/button/button";
import Link from "next/link";
import Avatar from "@/ui/designSystem/avatar/avatar";
import { FaUser } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { useRouter } from "next/router"; // Importer useRouter de Next.js

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false); // Etat pour le focus
  const router = useRouter(); // Remplacer useNavigate par useRouter
  useEffect(() => {
    // Vérifier si l'URL actuelle est "/cart"
    if (router.pathname === "/cart") {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }
  }, [router.pathname]); // Se déclenche lorsque le chemin change

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Recherche de produit :", searchQuery);
  };

  // Fonction pour passer à une autre page
  const navigateToPage = (path: string) => {
    router.push(path); // Utilisation de router.push pour la navigation
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <Container className="flex items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 transition-all duration-300"
        >
          <Avatar
            src="/assets/images/logo.png"
            alt="logo"
            size="small"
            className="avatar-animation"
          />
          <Typography
            variant="h2"
            theme="black"
            component="h2"
            weight="medium"
            className="text-animation "
          >
            Market
          </Typography>
        </Link>

        {/* Desktop Menu */}
        <div className="items-center hidden pb-3 lg:flex gap-7">
          <Typography
            variant="caption4"
            component="div"
            className="space-x-4 text-sm sm:text-base md:text-lg lg:text-xl"
          >
            <ActiveLink href="/">Accueil</ActiveLink>
            <ActiveLink href="/shop">Boutique</ActiveLink>
            <ActiveLink href="/nouveaux-arrivants">Nouveau Arrivant</ActiveLink>
            <ActiveLink href="/contact">Contact</ActiveLink>
          </Typography>
          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="items-center hidden px-3 py-1 bg-gray-100 border lg:flex"
          >
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow text-gray-700 bg-transparent outline-none"
            />
            <button type="submit" className="text-gray-600">
              <FaSearch size={18} />
            </button>
          </form>
        </div>

        {/* Icons */}
        <div className="flex items-center md:gap-3 pb-3">
          <Button
            action={() => navigateToPage("/cart")}
            variant="ico"
            size="large"
            iconTheme="secondary"
            icon={{ icon: HiOutlineShoppingCart }}
            aria-label="Panier"
            className={`${isFocused ? "bg-primary text-white" : ""}`} // Assurez-vous que la classe est correctement conditionnée
          />
          <Button
            variant="ico"
            size="large"
            iconTheme="secondary"
            icon={{ icon: FaUser }}
            aria-label="Profil"
          />

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="block p-2 text-gray-600 rounded-md lg:hidden hover:bg-gray-200 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen pb-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col px-10">
          <div className="flex space-x-4">
            <ActiveLink href="/" className="block py-2 text-lg sm:text-xl">
              Accueil
            </ActiveLink>
            <ActiveLink href="/shop" className="block py-2 text-lg sm:text-xl">
              Boutique
            </ActiveLink>
            {/* <ActiveLink
              href="/nouveaux-arrivants"
              className="block py-2 text-lg sm:text-xl"
            >
              Nouveaux Arrivants
            </ActiveLink> */}
            <ActiveLink
              href="/contact"
              className="block py-2 text-lg sm:text-xl"
            >
              Contact
            </ActiveLink>
          </div>

          {/* Mobile Search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center px-3 py-1 bg-gray-100 border"
          >
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow text-gray-700 bg-transparent outline-none"
            />
            <button type="submit" className="text-gray-600">
              <FaSearch size={18} />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
