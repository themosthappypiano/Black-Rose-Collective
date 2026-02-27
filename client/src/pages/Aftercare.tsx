export default function Aftercare() {
  return (
    <div className="max-w-5xl mx-auto w-full px-4 py-16">
      <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter border-b-8 border-accent pb-4">
        AFTERCARE.
      </h1>
      <p className="font-sans font-bold text-2xl uppercase tracking-widest text-muted-foreground mb-16">
        DON'T RUIN OUR HARD WORK.
      </p>

      <div className="space-y-16">
        {/* Step 1 */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <span className="font-display font-black text-8xl md:text-9xl text-accent leading-none">01</span>
          </div>
          <div className="md:col-span-3 border-l-8 border-foreground pl-8 py-4">
            <h2 className="font-display font-black text-4xl mb-4">KEEP IT CLEAN.</h2>
            <p className="font-sans font-medium text-xl leading-relaxed">
              Remove the bandage after 2-3 hours. Wash your hands FIRST. Gently wash the tattoo with warm water and antibacterial, unscented soap (like Dial Gold). DO NOT scrub. Pat dry with a clean paper towel. Do not use regular bath towels.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <span className="font-display font-black text-8xl md:text-9xl text-accent leading-none">02</span>
          </div>
          <div className="md:col-span-3 border-l-8 border-foreground pl-8 py-4">
            <h2 className="font-display font-black text-4xl mb-4">MOISTURIZE LIGHTLY.</h2>
            <p className="font-sans font-medium text-xl leading-relaxed">
              Apply a very thin layer of Aquaphor or unscented lotion (Lubriderm) 2-3 times a day. If it looks shiny or goopy, you used too much. Less is more. Don't drown the tattoo.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <span className="font-display font-black text-8xl md:text-9xl text-accent leading-none">03</span>
          </div>
          <div className="md:col-span-3 border-l-8 border-foreground pl-8 py-4">
            <h2 className="font-display font-black text-4xl mb-4">NO SUN. NO SWIMMING.</h2>
            <p className="font-sans font-medium text-xl leading-relaxed">
              Stay out of the sun. No pools, hot tubs, oceans, or baths for at least 2 weeks. Showers are fine. Soaking is bad. Sun destroys fresh ink.
            </p>
          </div>
        </div>
        
        {/* Step 4 */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <span className="font-display font-black text-8xl md:text-9xl text-accent leading-none">04</span>
          </div>
          <div className="md:col-span-3 border-l-8 border-foreground pl-8 py-4 bg-muted p-8 shadow-stamped">
            <h2 className="font-display font-black text-4xl mb-4">DO NOT PICK IT.</h2>
            <p className="font-sans font-medium text-xl leading-relaxed">
              It will itch. It will peel. DO NOT PICK OR SCRATCH IT. If you pick off a scab, you pull out the ink. Slap it gently if it itches, or just deal with it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
