import { Link } from "wouter";
import { BrutalButton } from "@/components/BrutalButton";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center w-full px-4">
      <div className="border-8 border-foreground p-12 md:p-24 text-center bg-muted shadow-stamped-black relative overflow-hidden">
        
        {/* Background glitch effect purely visual */}
        <div className="absolute inset-0 opacity-10 bg-muted mix-blend-overlay pointer-events-none"></div>
        
        <h1 className="text-9xl md:text-[12rem] font-black text-accent leading-none tracking-tighter mb-4 relative z-10">
          404
        </h1>
        
        <div className="relative z-10">
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter mb-6">
            DEAD END.
          </h2>
          <p className="font-sans font-bold text-xl uppercase tracking-widest text-muted-foreground mb-12">
            THE PAGE YOU'RE LOOKING FOR DOESN'T EXIST. <br/>
            YOU TOOK A WRONG TURN.
          </p>
          
          <Link href="/">
            <BrutalButton size="lg">BACK TO HOMEPAGE</BrutalButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
