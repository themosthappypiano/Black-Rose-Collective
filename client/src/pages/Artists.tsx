import { BrutalButton } from "@/components/BrutalButton";
import { Link } from "wouter";

const ARTISTS = [
  {
    id: "renzo",
    name: "RENZO (LORENZO)",
    role: "LEAD TATTOO ARTIST",
    bio: "Master artist specializing in cover-ups, memorial tattoos, fine line work, and custom designs. Known for being patient, professional, and having exceptional attention to detail. Clients consistently praise his light touch and ability to bring visions to life.",
    image: "placeholder image",
    ig: "@renzo_blackrose"
  },
  {
    id: "bighead",
    name: "BIG HEAD",
    role: "TATTOO ARTIST / PIERCING SPECIALIST",
    bio: "Expert in both tattoos and piercings with amazing attention to detail. Known for staying late for customers and creating lifetime clients. Specializes in ear, nose, eyebrow, and septum piercings. Clients love his welcoming personality and professional approach.",
    image: "placeholder image",
    ig: "@bighead_blackrose"
  },
  {
    id: "jr",
    name: "J.R",
    role: "TATTOO ARTIST",
    bio: "Skilled tattoo artist with a light touch and exceptional customer service. Known for making clients feel comfortable throughout the entire process and delivering exactly what they envision. Praised for professionalism and quality work.",
    image: "placeholder image",
    ig: "@jr_blackrose"
  },
  {
    id: "lopez",
    name: "LOPEZ",
    role: "TATTOO ARTIST",
    bio: "Talented artist known for custom work and professional service. Part of the team that makes Black Rose one of the best tattoo shops in the city. Clients appreciate his skill and friendly approach.",
    image: "placeholder image",
    ig: "@lopez_blackrose"
  }
];

export default function Artists() {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 py-16">
      <h1 className="text-6xl md:text-8xl font-black mb-16 uppercase tracking-tighter border-b-8 border-accent pb-4 text-center md:text-left">
        THE CREW.
      </h1>

      <div className="space-y-24">
        {ARTISTS.map((artist, index) => (
          <div 
            key={artist.id} 
            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="relative border-4 border-foreground p-2 bg-muted">
                <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 -z-10 border-4 border-foreground"></div>
                {artist.image === "placeholder image" ? (
                  <div className="w-full aspect-square bg-muted flex items-center justify-center border-2 border-accent">
                    <span className="font-cinzel text-2xl font-bold text-accent transform -rotate-12">PLACEHOLDER IMAGE</span>
                  </div>
                ) : (
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="w-full aspect-square object-cover grayscale contrast-125"
                  />
                )}
              </div>
            </div>

            {/* Info */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
              <div>
                <h2 className="text-5xl md:text-7xl font-black text-foreground mb-2">{artist.name}</h2>
                <p className="font-display text-2xl text-accent font-bold tracking-widest">{artist.role}</p>
              </div>
              
              <p className="font-sans text-xl font-medium leading-relaxed bg-foreground text-background p-6 border-l-8 border-accent shadow-stamped-white">
                {artist.bio}
              </p>
              
              <div className="font-display text-xl font-bold uppercase pt-4 flex flex-wrap gap-4 items-center">
                <span className="bg-muted px-4 py-2 border-2 border-foreground">{artist.ig}</span>
                <Link href="/book">
                  <BrutalButton>BOOK {artist.name}</BrutalButton>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
