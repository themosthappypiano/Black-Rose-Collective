import { useState } from "react";

const FAQS = [
  {
    q: "DO YOU TAKE WALK-INS?",
    a: "Yes, but it's first come, first served. If you want guaranteed time, book an appointment. Weekends are usually slammed."
  },
  {
    q: "WHAT'S THE SHOP MINIMUM?",
    a: "Our shop minimum is $100. Good tattoos aren't cheap, and cheap tattoos aren't good. Setting up the station with sterile gear costs money."
  },
  {
    q: "HOW DO I PREPARE FOR MY APPOINTMENT?",
    a: "Eat a solid meal before coming in. Drink water. Do not show up drunk or hungover—you will bleed more and it will suck for both of us. Wear clothes that let us easily access the area."
  },
  {
    q: "DO YOU DO COVER-UPS?",
    a: "Depends on the disaster we're working with. Book a consultation so we can see it in person. Not everything can be covered without laser first."
  },
  {
    q: "CAN I BRING MY FRIENDS?",
    a: "You can bring ONE person for moral support. This isn't a hangout spot. The waiting area is small and we need space to concentrate."
  }
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto w-full px-4 py-16">
      <h1 className="text-6xl md:text-8xl font-black mb-12 uppercase tracking-tighter">
        FAQ.
      </h1>
      
      <div className="border-t-4 border-foreground">
        {FAQS.map((faq, i) => (
          <div key={i} className="border-b-4 border-foreground bg-background hover:bg-muted/50 transition-colors">
            <button 
              onClick={() => setOpenIdx(openIdx === i ? null : i)} 
              className="w-full text-left px-4 py-8 font-display text-2xl md:text-4xl uppercase flex justify-between items-center group"
            >
              <span className="font-bold group-hover:text-accent transition-colors pr-8">
                {faq.q}
              </span>
              <span className="text-accent font-black text-4xl shrink-0">
                {openIdx === i ? '-' : '+'}
              </span>
            </button>
            
            {openIdx === i && (
              <div className="px-4 pb-8 font-sans font-medium text-lg md:text-xl text-foreground/80 leading-relaxed border-t-2 border-foreground/10 pt-6">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-16 p-8 border-4 border-accent text-center bg-accent text-white shadow-stamped">
        <h2 className="font-display font-black text-4xl mb-4">STILL HAVE QUESTIONS?</h2>
        <p className="font-sans font-bold text-xl">CALL THE SHOP OR STOP BY IN PERSON.</p>
      </div>
    </div>
  );
}
