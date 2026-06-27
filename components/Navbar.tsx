"use client";

import * as React from "react";
import { siteData } from "../data/portfolio";
import { Button } from "./ui/Button";
import { Download } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0f19]/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold text-xl">&lt; /&gt;</span>
          <span className="text-white font-bold text-xl tracking-tight">{siteData.name}</span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center">
          <Button asChild variant="default" className="gap-2 hidden md:inline-flex">
            <a href={siteData.resumeUrl} download>
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
