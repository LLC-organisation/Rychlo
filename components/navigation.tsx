"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const productLinks = [
  {
    label: "Akihlee",
    href: "https://akihlee.3uqh.vercel.app",
    description: "Coming soon to app.akihlee.com",
  },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const handleScroll = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="container flex items-center justify-between h-24">
        {/* Logo */}
        <button
          onClick={() => handleScroll("#home")}
          className="flex items-center"
        >
          <div className="relative h-20 w-48">
            <Image
              src="/logo.png"
              alt="Akihlee"
              fill
              className="object-contain object-left"
            />
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => handleScroll("#home")}
            className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
          >
            Home
          </button>

          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              onClick={() => setProductsOpen((prev) => !prev)}
              aria-expanded={productsOpen}
              className="flex items-center gap-1 text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              Products
              <ChevronDown
                size={14}
                className={cn(
                  "transition-transform duration-200",
                  productsOpen && "rotate-180"
                )}
              />
            </button>

            {productsOpen && (
              <div className="absolute left-0 top-full pt-3 w-64">
                <div className="rounded-lg border border-white/10 bg-black/95 backdrop-blur-sm shadow-lg py-2">
                  {productLinks.map((product) => (
                    <a
                      key={product.href}
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 hover:bg-white/5 transition-colors duration-200"
                    >
                      <span className="block text-sm font-medium text-white">
                        {product.label}
                      </span>
                      <span className="block text-xs text-white/50 mt-0.5">
                        {product.description}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks
            .filter((link) => link.href !== "#home")
            .map((link) => (
              <button
                key={link.href}
                onClick={() => handleScroll(link.href)}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button size="sm" onClick={() => handleScroll("#contact")}>
            Book Free Consultation
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/98 border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          <button
            onClick={() => handleScroll("#home")}
            className="text-white/70 hover:text-white text-left text-base font-medium transition-colors duration-200 py-1"
          >
            Home
          </button>

          {/* Products collapsible */}
          <div>
            <button
              onClick={() => setMobileProductsOpen((prev) => !prev)}
              aria-expanded={mobileProductsOpen}
              className="flex items-center justify-between w-full text-white/70 hover:text-white text-left text-base font-medium transition-colors duration-200 py-1"
            >
              Products
              <ChevronDown
                size={16}
                className={cn(
                  "transition-transform duration-200",
                  mobileProductsOpen && "rotate-180"
                )}
              />
            </button>
            {mobileProductsOpen && (
              <div className="mt-2 flex flex-col gap-3 pl-4 border-l border-white/10">
                {productLinks.map((product) => (
                  <a
                    key={product.href}
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="block text-sm font-medium text-white">
                      {product.label}
                    </span>
                    <span className="block text-xs text-white/50 mt-0.5">
                      {product.description}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {navLinks
            .filter((link) => link.href !== "#home")
            .map((link) => (
              <button
                key={link.href}
                onClick={() => handleScroll(link.href)}
                className="text-white/70 hover:text-white text-left text-base font-medium transition-colors duration-200 py-1"
              >
                {link.label}
              </button>
            ))}
          <Button className="w-full mt-2" onClick={() => handleScroll("#contact")}>
            Book Free Consultation
          </Button>
        </div>
      )}
    </header>
  );
}
