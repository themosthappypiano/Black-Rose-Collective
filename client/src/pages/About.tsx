import { Link } from "wouter";
import { BrutalButton } from "@/components/BrutalButton";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 py-16">
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none">
            ORIGINS.
          </h1>
          <div className="w-24 h-4 bg-accent mb-8"></div>
          <p className="font-sans font-medium text-2xl leading-relaxed mb-6">
            We didn't start in a fancy studio. We started in a concrete garage with a cheap machine and a lot of ambition.
          </p>
          <p className="font-sans font-medium text-xl leading-relaxed text-muted-foreground">
            All Star Ink was founded on the belief that tattoo culture was getting too soft, too commercial. We wanted to bring back the raw energy of early street shops. No pretentious artists, no sterile corporate vibes. Just heavy music, heavy ink, and mutual respect.
          </p>
        </div>
        <div className="border-8 border-foreground p-2 bg-accent shadow-stamped">
           <div className="w-full h-64 bg-muted flex items-center justify-center">
             <span className="font-cinzel text-3xl font-bold text-accent transform -rotate-12">PLACEHOLDER IMAGE</span>
           </div>
        </div>
      </div>

      <div className="bg-foreground text-background p-12 md:p-24 border-b-8 border-accent text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">
          NO MASTERS.
        </h2>
        <p className="font-sans font-bold text-2xl max-w-3xl mx-auto leading-relaxed mb-12">
          We answer to the craft. We push ourselves everyday to make bolder, cleaner, and tougher tattoos. 
          If you want something delicate that fades in a year, go somewhere else. If you want something that lasts a lifetime, you're in the right place.
        </p>
        <Link href="/book">
          <BrutalButton variant="secondary" size="lg">GET INKED</BrutalButton>
        </Link>
      </div>

    </div>
  );
}
