import { useState } from "react";

const WORK_ITEMS = [
  { id: 1, category: "Traditional", img: "https://i.postimg.cc/ZqwmcqRF/1772194237014.jpg", height: "h-96" },
  { id: 2, category: "Blackwork", img: "https://i.postimg.cc/YSd73S9N/1772194237016.jpg", height: "h-72" },
  { id: 3, category: "Traditional", img: "https://i.postimg.cc/3wthBwRX/1772194237023.jpg", height: "h-[30rem]" },
  { id: 4, category: "Realism", img: "https://i.postimg.cc/VNKwRN6j/1772194237024.jpg", height: "h-80" },
  { id: 5, category: "Blackwork", img: "https://i.postimg.cc/xdfYMm0t/1772194237025.jpg", height: "h-96" },
  { id: 7, category: "Realism", img: "https://i.postimg.cc/ZqbZpNTF/1772194237035.jpg", height: "h-80" },
  { id: 8, category: "Blackwork", img: "https://i.postimg.cc/GpLrGDcF/1772194237040.jpg", height: "h-96" },
  { id: 9, category: "Traditional", img: "https://i.postimg.cc/MG6xVBW0/619500732-17920476852086634-614489186346976432-n.jpg", height: "h-72" },
  { id: 10, category: "Realism", img: "https://i.postimg.cc/Xvj3d5V9/621853854-18034091834574382-8840960382406870773-n.jpg", height: "h-[30rem]" },
  { id: 11, category: "Blackwork", img: "https://i.postimg.cc/q7J0yKk3/622137228-18084923321515670-8464852624547262903-n.jpg", height: "h-80" },
  { id: 12, category: "Traditional", img: "https://i.postimg.cc/9fmVZ9W9/622470526-17977780409980941-1195022894057148726-n.jpg", height: "h-96" },
  { id: 13, category: "Realism", img: "https://i.postimg.cc/tgqyW6X1/624706465-4400606843504083-424113500345906405-n.jpg", height: "h-72" },
  { id: 14, category: "Blackwork", img: "https://i.postimg.cc/W4NjgZ2F/624715247-17997137132731507-4772042101711645177-n.jpg", height: "h-[28rem]" },
  { id: 15, category: "Traditional", img: "https://i.postimg.cc/3w87mGKk/625019850-18135378547499417-7845349866328547759-n.jpg", height: "h-80" },
  { id: 16, category: "Realism", img: "https://i.postimg.cc/9fmVZ9Wz/625058750-18098536642898564-1825763623553157318-n.jpg", height: "h-96" },
  { id: 18, category: "Traditional", img: "https://i.postimg.cc/ZY2T20c4/626125267-18313658902271042-318557191686010935-n.jpg", height: "h-[30rem]" },
  { id: 20, category: "Blackwork", img: "https://i.postimg.cc/y6tVtWP7/627030214-18151480690431429-8090467504932007397-n.jpg", height: "h-96" },
  { id: 21, category: "Traditional", img: "https://i.postimg.cc/qBSkSgLV/629203931-18320473774188272-1602548480943530587-n.jpg", height: "h-72" },
];

const FILTERS = ["All", "Traditional", "Blackwork", "Realism"];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = activeFilter === "All" 
    ? WORK_ITEMS 
    : WORK_ITEMS.filter(item => item.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto w-full px-4 py-16">
      <h1 className="text-6xl md:text-8xl font-black mb-4 uppercase tracking-tighter border-b-8 border-foreground pb-4">
        THE WORK.
      </h1>
      
      {/* FILTERS */}
      <div className="flex flex-wrap gap-4 my-12">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`
              font-display font-bold text-xl px-6 py-2 border-2 border-foreground transition-all
              ${activeFilter === filter 
                ? "bg-foreground text-background shadow-stamped-white" 
                : "bg-transparent text-foreground hover:bg-accent hover:border-accent hover:text-white"
              }
            `}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* MASONRY GRID (CSS Columns) */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className={`relative group border-4 border-foreground break-inside-avoid overflow-hidden bg-muted`}
          >
            <img 
              src={item.img} 
              alt={item.category} 
              className={`w-full ${item.height} object-cover transition-all duration-500 hover:scale-105`}
              loading="lazy"
              style={{ imageRendering: 'high-quality' }}
            />
            {/* Overlay label */}
            <div className="absolute top-4 left-4 bg-background text-foreground border-2 border-foreground px-3 py-1 font-display font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity translate-y-[-10px] group-hover:translate-y-0">
              {item.category}
            </div>
          </div>
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <div className="py-20 text-center border-4 border-dashed border-foreground/30">
          <p className="font-display text-4xl text-muted-foreground uppercase">Nothing to show right now.</p>
        </div>
      )}
    </div>
  );
}
