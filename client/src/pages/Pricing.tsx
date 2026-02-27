import { Link } from "wouter";
import { BrutalButton } from "@/components/BrutalButton";

export default function Pricing() {
  return (
    <div className="max-w-4xl mx-auto w-full px-4 py-16">
      <h1 className="text-6xl md:text-8xl font-black mb-12 uppercase tracking-tighter text-center">
        THE DAMAGE.
      </h1>

      <div className="bg-foreground text-background p-8 md:p-16 border-8 border-accent shadow-stamped">
        
        <div className="text-center border-b-4 border-background/20 pb-12 mb-12">
          <h2 className="font-display font-black text-4xl md:text-6xl text-accent mb-2">SHOP MINIMUM</h2>
          <p className="font-sans font-black text-7xl md:text-9xl tracking-tighter">$100</p>
          <p className="font-sans font-bold text-xl uppercase mt-4">NO EXCEPTIONS.</p>
        </div>

        <div className="space-y-8 font-display font-bold uppercase text-2xl md:text-4xl tracking-wider">
          <div className="flex justify-between items-end border-b-2 border-background/20 pb-4">
            <span>HOURLY RATE</span>
            <span className="text-accent">$150 - $200</span>
          </div>
          <div className="flex justify-between items-end border-b-2 border-background/20 pb-4">
            <span>FULL DAY SESSION</span>
            <span className="text-accent">$800 - $1200</span>
          </div>
          <div className="flex justify-between items-end border-b-2 border-background/20 pb-4">
            <span>PIERCINGS (BASIC)</span>
            <span className="text-accent">FROM $40</span>
          </div>
          <div className="flex justify-between items-end border-b-2 border-background/20 pb-4">
            <span>JEWELRY UPGRADES</span>
            <span className="text-accent">VARIES</span>
          </div>
        </div>

        <div className="mt-16 bg-background text-foreground p-8 border-4 border-background">
          <h3 className="font-display font-black text-3xl mb-4 text-accent">THE RULES</h3>
          <ul className="font-sans font-bold text-lg space-y-2 list-disc list-inside">
            <li>CASH IS KING. (WE HAVE AN ATM).</li>
            <li>CARD PAYMENTS INCLUDE A 3% FEE.</li>
            <li>DEPOSITS ARE NON-REFUNDABLE.</li>
            <li>48 HOUR NOTICE FOR RESCHEDULING.</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 flex justify-center">
        <Link href="/book">
          <BrutalButton size="lg">READY? BOOK NOW.</BrutalButton>
        </Link>
      </div>
    </div>
  );
}
