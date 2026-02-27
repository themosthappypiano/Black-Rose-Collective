import { BrutalButton } from "@/components/BrutalButton";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 py-16">
      <h1 className="text-6xl md:text-8xl font-black mb-12 uppercase tracking-tighter border-b-8 border-foreground pb-4">
        HIT US UP.
      </h1>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="p-8 border-4 border-foreground bg-muted shadow-stamped-white">
            <h2 className="font-display font-black text-4xl text-accent mb-6">LOCATION</h2>
            <p className="font-sans font-bold text-2xl uppercase mb-2">12751 EAST FWY SUITE C</p>
            <p className="font-sans font-bold text-2xl uppercase mb-6">HOUSTON, TX 77015</p>
            <a href="https://maps.google.com/?q=12751+East+Fwy+Suite+C,+Houston,+TX+77015" target="_blank" rel="noopener noreferrer">
              <BrutalButton variant="primary">GET DIRECTIONS</BrutalButton>
            </a>
          </div>

          <div className="border-l-8 border-accent pl-8">
            <h2 className="font-display font-black text-4xl mb-4">HOURS</h2>
            <ul className="font-sans font-bold text-2xl uppercase space-y-2">
              <li className="flex justify-between border-b-2 border-foreground/20 pb-2">
                <span>MON - SAT</span> <span>2PM - 12AM</span>
              </li>
              <li className="flex justify-between border-b-2 border-foreground/20 pb-2">
                <span>SUNDAY</span> <span>CLOSED</span>
              </li>
              <li className="text-accent font-bold mt-4">
                WALK-INS ALWAYS WELCOME!
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-black text-4xl mb-4">DIRECT LINE</h2>
            <a href="tel:8325762172">
              <p className="font-sans font-black text-5xl hover:text-accent transition-colors cursor-pointer">
                (832) 576-2172
              </p>
            </a>
            <p className="font-sans font-bold text-lg text-muted-foreground mt-2 uppercase">
              TATTOOS & PIERCINGS - EAST SIDE HOUSTON - 5.0 ⭐ RATED
            </p>
          </div>

          <div>
            <h2 className="font-display font-black text-4xl mb-4">FOLLOW US</h2>
            <a href="https://www.instagram.com/blackrose_tattoocollective/?hl=en" target="_blank" rel="noopener noreferrer">
              <BrutalButton variant="secondary">INSTAGRAM</BrutalButton>
            </a>
          </div>
        </div>

        {/* Google Maps */}
        <div className="relative border-8 border-foreground bg-muted min-h-[500px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.123456789!2d-95.234567!3d29.756789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s12751+East+Fwy+Suite+C%2C+Houston%2C+TX+77015!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="hover:brightness-110 transition-all duration-300"
            title="Black Rose Tattoo & Piercing Location"
          ></iframe>
          <div className="absolute top-4 right-4">
             <div className="bg-background border-4 border-accent p-3 text-center transform rotate-3 shadow-lg">
               <span className="font-cinzel-decorative font-black text-2xl text-accent">BLACK ROSE</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
