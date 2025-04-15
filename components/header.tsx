"use client";

import { useState, useEffect, useRef } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Altezza dell'header + un po' di spazio
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    closeMenu();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-terracotta dark:bg-gray-950/90 backdrop-blur-md border-b border-terracotta/20 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1
          onClick={scrollToTop}
          className="text-4xl font-serif font-medium text-gray-900 dark:text-cream cursor-pointer hover:text-terracotta dark:hover:text-cream/80 transition-colors"
        >
          Sydni Jeffers
        </h1>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-800 hover:text-terracotta dark:text-cream/90 dark:hover:text-cream transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("why-ugc")}
              className="text-gray-800 hover:text-terracotta dark:text-cream/90 dark:hover:text-cream transition-colors"
            >
              UGC
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-800 hover:text-terracotta dark:text-cream/90 dark:hover:text-cream transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-800 hover:text-terracotta dark:text-cream/90 dark:hover:text-cream transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-800 hover:text-terracotta dark:text-cream/90 dark:hover:text-cream transition-colors"
            >
              Contact
            </button>
          </nav>

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="text-gray-800 dark:text-cream"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          )}
        </div>

        <div className="flex items-center md:hidden">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="mr-2 text-gray-800 dark:text-cream"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          )}

          <button
            onClick={isMenuOpen ? closeMenu : openMenu}
            className="text-gray-800 hover:text-terracotta dark:text-cream dark:hover:text-cream/80"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-peach dark:bg-gray-950 border-b border-terracotta/20 dark:border-gray-800"
        >
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-800 hover:text-terracotta dark:text-cream/90 dark:hover:text-cream transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("why-ugc")}
              className="text-gray-800 hover:text-terracotta dark:text-cream/90 dark:hover:text-cream transition-colors py-2"
            >
              UGC
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-800 hover:text-terracotta dark:text-cream/90 dark:hover:text-cream transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-800 hover:text-terracotta dark:text-cream/90 dark:hover:text-cream transition-colors py-2"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-800 hover:text-terracotta dark:text-cream/90 dark:hover:text-cream transition-colors py-2"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
