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
          ? "bg-[#0b0f19]/90 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-[#0b0f19]/70 backdrop-blur-sm py-4 lg:bg-transparent lg:py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex w-full items-center justify-between gap-3 lg:w-auto">
          <div className="flex min-w-0 items-center gap-2">
            <span className="text-primary font-bold text-lg sm:text-xl">&lt; /&gt;</span>
            <span className="truncate text-white font-bold text-lg sm:text-xl tracking-tight">{siteData.name}</span>
          </div>

          <Button asChild variant="default" size="sm" className="shrink-0 gap-1.5 rounded-full px-3 sm:px-4">
            <a href={siteData.resumeUrl} download>
              <Download className="w-4 h-4" />
              <span className="hidden min-[380px]:inline">Download</span>
              <span>Resume</span>
            </a>
          </Button>
        </div>

        <nav className="flex w-full flex-wrap items-center justify-center gap-x-2 gap-y-2 lg:w-auto lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-2 py-1 text-[11px] font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:text-xs lg:px-0 lg:py-0 lg:text-sm lg:hover:bg-transparent"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
