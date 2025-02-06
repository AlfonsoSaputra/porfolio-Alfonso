"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4 relative">
          {/* Logo */}
          <Link
            href="#home"
            className={`text-2xl font-bold ${
              scrolling ? "text-black" : "text-primary"
            }`}
          >
            Alfonso Saputra
          </Link>

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col space-y-1"
          >
            <span
              className={`block h-1 w-8 bg-primary transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-8 bg-primary transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-8 bg-primary transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </button>

          {/* Navbar Links */}
          <nav
            className={`absolute top-full right-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:static flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <Link
              href="#about"
              className="text-gray-700 hover:text-primary pl-4 md:pl-0 py-1"
            >
              About
            </Link>
            <Link
              href="#portfolio"
              className="text-gray-700 hover:text-primary pl-4 md:pl-0 py-1"
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-primary pl-4 md:pl-0 py-1"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
