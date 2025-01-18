import React, { useState } from "react";
import Container from "@/ui/components/container/container";
import ActiveLink from "@/ui/components/navigation/active-link";
import Typography from "@/ui/designSystem/typography/typography";
import Button from "@/ui/designSystem/button/button";
import Link from "next/link";
import Avatar from "@/ui/designSystem/avatar/avatar";
import { FaUser } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Recherche de produit :", searchQuery);
  };

  return (
    <nav className="bg-white shadow-md ">
      <Container className="flex items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 transition-all duration-300"
        >
          <Avatar
            src="/assets/images/logo.png"
            alt="logo" size="small"
            className="avatar-animation"
          />
          <Typography
            variant="h3"
            theme="black"
            component="h3"
            weight="medium"
            className="text-lg font-bold text-animation sm:text-xl md:text-2xl lg:text-4xl"
          >
            Market
          </Typography>
        </Link>

        {/* Desktop Menu */}
        <div className="items-center hidden pb-3 lg:flex gap-7">
          <Typography
            variant="caption1"
            component="div"
            className="space-x-4 text-sm sm:text-base md:text-lg lg:text-xl"
          >
            <ActiveLink href="/">Accueil</ActiveLink>
            <ActiveLink href="/shop">Boutique</ActiveLink>
            <ActiveLink href="/about">A propos</ActiveLink>
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
        <div className="flex items-center gap-3 pb-3">
          <Button
            variant="ico"
            size="large"
            iconTheme="secondary"
            icon={{ icon: HiOutlineShoppingCart }}
            aria-label="Panier"
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
        <div className="flex flex-col px-10 ">
          <div className="flex space-x-4">
            
          <ActiveLink href="/" className="block py-2 text-lg sm:text-xl">
            Accueil
          </ActiveLink>
          <ActiveLink href="/shop" className="block py-2 text-lg sm:text-xl">
            Boutique
          </ActiveLink>
          <ActiveLink href="/about" className="block py-2 text-lg sm:text-xl">
            A propos
          </ActiveLink>
          <ActiveLink href="/contact" className="block py-2 text-lg sm:text-xl">
            Contact
          </ActiveLink>
          </div>

          {/* Mobile Search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center px-3 py-1 bg-gray-100 border "
          >
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow text-sm text-gray-700 bg-transparent outline-none"
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
