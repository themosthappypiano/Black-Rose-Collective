import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BrutalButton } from "./BrutalButton";


const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/artists", label: "Artists" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background border-b-4 border-foreground">
        <div className="flex items-center justify-between px-4 md:px-8 py-2">
          <Link href="/" className="flex items-center gap-4 group justify-start">
            <img src="https://i.postimg.cc/jj35jczJ/Chat-GPT-Image-Feb-27-2026-02-12-05-PM.png" alt="Black Rose Tattoo Logo" className="w-20 md:w-24 h-auto group-hover:scale-110 transition-transform" />
            <span className="hidden sm:block font-cinzel-decorative font-black text-3xl md:text-4xl uppercase tracking-tighter hover:text-accent transition-colors">
              BLACK ROSE.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-display text-xl uppercase tracking-wider">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "hover:text-accent transition-colors decoration-4 underline-offset-8",
                  location === link.href ? "underline text-accent" : ""
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/book">
              <BrutalButton variant="primary" size="sm">Book Now</BrutalButton>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-background flex flex-col p-6 border-8 border-accent">
          <div className="flex justify-between items-center mb-12">
            <span className="font-display font-black text-3xl uppercase tracking-tighter text-accent">
              MENU.
            </span>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 border-2 border-foreground hover:bg-accent hover:border-accent transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          
          <nav className="flex flex-col gap-6 font-display text-4xl uppercase tracking-widest font-black">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-accent hover:translate-x-4 transition-all pb-4 border-b-2 border-foreground/20"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/book" onClick={() => setIsOpen(false)} className="mt-8">
              <BrutalButton className="w-full text-center" size="lg">BOOK APPOINTMENT</BrutalButton>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
