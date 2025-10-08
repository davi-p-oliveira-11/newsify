"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { navbarData } from "../../data/navbarData";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`mt-2 w-full flex items-center justify-between py-6 relative ${className}`}
    >
      {/* Logo Image */}
      <div className="flex-shrink-0 cursor-pointer">
        <Image
          src={navbarData.logo.src}
          alt={navbarData.logo.alt}
          width={130}
          height={22}
        />
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-12">
        {navbarData.links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="font-light text-sm">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Menu */}
      <button
        className="md:hidden block cursor-pointer z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-22 right-0 bg-blue-gray shadow-lg p-4 w-48 rounded-md md:hidden z-40">
          <ul className="flex flex-col gap-4">
            {navbarData.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-light text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
