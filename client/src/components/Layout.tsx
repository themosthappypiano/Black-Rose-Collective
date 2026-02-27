import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Link } from "wouter";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Noise Texture Overlay */}
      <div className="grain-overlay" />
      
      <Navbar />
      <main className="flex-grow flex flex-col z-10 relative">
        {children}
      </main>
      <Footer />

      {/* Floating Action Button for Mobile */}
      <Link 
        href="/book" 
        className="fixed bottom-6 right-6 z-40 md:hidden bg-accent text-white border-2 border-foreground p-4 font-display font-bold text-xl shadow-stamped active:translate-y-1 active:shadow-none transition-all"
      >
        BOOK
      </Link>
    </div>
  );
}
