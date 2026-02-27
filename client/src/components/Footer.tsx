import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background border-t-8 border-accent pt-16 pb-8 px-4 md:px-8 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <h2 className="text-5xl font-black mb-4 tracking-tighter font-cinzel-decorative">BLACK ROSE.</h2>
          <p className="font-sans font-medium text-lg max-w-sm mb-4">
            TATTOOS & PIERCINGS <br/>
            EAST SIDE HOUSTON<br/>
            5.0 ⭐ RATED - WALK-INS WELCOME
          </p>
          <div className="mb-6 space-y-2 font-sans font-medium">
            <div className="flex items-center gap-2">
              <span className="text-accent">📍</span>
              <span>12751 East Fwy Suite C, Houston, TX 77015</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">📞</span>
              <a href="tel:8325762172" className="hover:text-accent transition-colors">(832) 576-2172</a>
            </div>
          </div>
          <div className="flex gap-4 font-display text-xl uppercase font-bold">
            <a href="https://www.instagram.com/blackrose_tattoocollective/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors underline underline-offset-4">Instagram</a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold text-accent mb-4">INFO</h3>
          <ul className="flex flex-col gap-3 font-sans font-medium text-lg">
            <li><Link href="/work" className="hover:text-accent transition-colors">The Work</Link></li>
            <li><Link href="/artists" className="hover:text-accent transition-colors">Artists</Link></li>
            <li><Link href="/pricing" className="hover:text-accent transition-colors">Pricing</Link></li>
            <li><Link href="/aftercare" className="hover:text-accent transition-colors">Aftercare</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold text-accent mb-4">HOURS</h3>
          <div className="not-italic font-sans font-medium text-lg space-y-1">
            <p>MONDAY: 2PM - 12AM</p>
            <p>TUESDAY: 2PM - 12AM</p>
            <p>WEDNESDAY: 2PM - 12AM</p>
            <p>THURSDAY: 2PM - 12AM</p>
            <p>FRIDAY: 2PM - 12AM</p>
            <p>SATURDAY: 2PM - 12AM</p>
            <p className="text-accent font-bold">SUNDAY: CLOSED</p>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center font-sans font-bold text-sm tracking-wider uppercase">
        <p>© {new Date().getFullYear()} BLACK ROSE TATTOO & PIERCING. ALL RIGHTS RESERVED.</p>
        <p className="mt-4 md:mt-0 text-background/50">EAST SIDE HOUSTON.</p>
      </div>
    </footer>
  );
}
