"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-terracotta dark:bg-gray-950/90 backdrop-blur-md border-b border-terracotta/20 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-4xl font-serif font-medium text-gray-900 dark:text-cream">
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
            onClick={toggleMenu}
            className="text-gray-800 hover:text-terracotta dark:text-cream dark:hover:text-cream/80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-peach dark:bg-gray-950 border-b border-terracotta/20 dark:border-gray-800">
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
