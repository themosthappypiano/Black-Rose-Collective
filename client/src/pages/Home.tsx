import { Link } from "wouter";
import { BrutalButton } from "@/components/BrutalButton";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";


const REVIEWS = [
  { name: "Be Better", text: "I went to get my first tattoo at this shop and my experience couldn't have been better.", fullText: "I went to get my first tattoo at this shop and my experience couldn't have been better. All the staff is so nice, J.R did a really good job on my tattoo. The owner I believe did my sister's and I's ear piercing and the process was pretty smooth. Would 100% recommend.", time: "9 months ago", image: "https://i.postimg.cc/nLLmT0ZR/image.png", details: "7 reviews·2 photos" },
  { name: "Jose Alfaro", text: "From the moment I walked in both gentlemen at the shop acknowledged me and started assisting me right away.", fullText: "From the moment I walked in both gentlemen at the shop acknowledged me and started assisting me right away. I was a bit apprehensive since I had a tattoo done at another shop and it was not the best experience, but the team here was great. I didn't have an idea right away but the artist worked with my ideas and we finally settled on a piece. He paid a lot of attention to detail and even offered his advice for someone new to tattoos. He made sure I was comfortable throughout the process and made sure to keep everything clean and organized. He made sure I had the proper after care advice as well. Overall great experience and will be coming back for the next one.", time: "7 months ago", image: "https://i.postimg.cc/HLfL52L0/image.png", details: "Local Guide·17 reviews·12 photos" },
  { name: "Efrain", text: "Great place to get a tattoo very professional, honest and very clean.", fullText: "Great place to get a tattoo very professional, honest and very clean. They speak very friendly to their clients.", time: "4 months ago", image: "https://i.postimg.cc/43hfJ91C/image.png", details: "3 reviews·1 photo" }
];


const BACKGROUND_IMAGES = [
  "https://i.postimg.cc/wTBmcwVp/image.png",
  "https://i.postimg.cc/QCYVyrbt/image.png", 
  "https://i.postimg.cc/0Q8Q5NXg/image.png"
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoState, setVideoState] = useState('playing'); // 'playing', 'frozen'
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<{[key: number]: boolean}>({});

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const duration = video.duration;
      const currentTime = video.currentTime;
      
      // Stop 3 seconds before the end
      if (currentTime >= duration - 3) {
        video.pause();
        setVideoState('frozen');
        
        // Freeze for 30 seconds, then restart
        setTimeout(() => {
          video.currentTime = 0;
          video.play();
          setVideoState('playing');
        }, 30000);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.play();

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  // Background image cycling
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 8000); // Change every 8 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black border-b-4 border-foreground">
        {/* Animated Background Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <div
              className="w-full h-full bg-cover bg-center animate-slow-zoom"
              style={{
                backgroundImage: `url(${BACKGROUND_IMAGES[currentBgIndex]})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            />
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-60"></div>
        
        {/* Video on the right side - smaller on mobile and moved right */}
        <div className="absolute right-4 sm:right-24 top-16 h-2/5 w-2/5 sm:h-3/4 sm:w-1/3 lg:w-1/4 rounded-lg overflow-hidden border-2 border-accent">
          <video
            ref={videoRef}
            src="/tattoo-transition.mp4"
            className="w-full h-full object-cover opacity-100"
            muted
            playsInline
          />
        </div>
        
        <div className="relative z-10 text-left px-4 max-w-5xl mx-auto flex flex-col items-start w-full">
          <div className="w-1/2 lg:w-3/5">
          <div className="text-accent font-display font-black text-2xl md:text-3xl mb-4 uppercase tracking-wider">
            TATTOOS & PIERCINGS
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] text-white tracking-tighter mb-6 mix-blend-difference uppercase">
            <span className="font-cinzel-decorative">BLACK</span> <br/>
            <span className="text-accent font-cinzel-decorative">ROSE</span>
          </h1>
          <p className="font-sans font-bold text-xl md:text-3xl text-white max-w-2xl uppercase tracking-widest mb-6 border-y-2 border-white/30 py-4">
            EAST SIDE HOUSTON
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto mb-6">
            <Link href="/book">
              <BrutalButton size="sm" className="w-full sm:w-auto sm:text-2xl sm:px-10 sm:py-5">BOOK A SESSION</BrutalButton>
            </Link>
            <Link href="/work">
              <BrutalButton variant="secondary" size="sm" className="w-full sm:w-auto sm:text-2xl sm:px-10 sm:py-5">VIEW THE WORK</BrutalButton>
            </Link>
          </div>
          <div className="text-white font-sans text-lg font-medium">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-accent">📍</span>
              <span>12751 East Fwy Suite C, Houston, TX 77015</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">📞</span>
              <a href="tel:8325762172" className="hover:text-accent transition-colors">(832) 576-2172</a>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden whitespace-nowrap border-b-4 border-foreground py-3 bg-accent text-white flex items-center">
        <div className="animate-marquee inline-block font-display font-black text-2xl tracking-[0.2em]">
          BLACK ROSE • TATTOOS & PIERCINGS • EAST SIDE HOUSTON • WALK-INS WELCOME • 5.0 STARS • APPOINTMENTS ACCEPTED • 
          BLACK ROSE • TATTOOS & PIERCINGS • EAST SIDE HOUSTON • WALK-INS WELCOME • 5.0 STARS • APPOINTMENTS ACCEPTED • 
        </div>
      </div>

      {/* REVIEWS WIDGET */}
      <section className="bg-foreground text-background py-24 px-4 border-b-4 border-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none">
              OUR CLIENTS <br/>
              <span className="text-accent">LOVE US.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {REVIEWS.slice(0, 3).map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background text-foreground p-8 border-4 border-accent relative"
              >
                <div className="absolute -top-4 -left-4 bg-accent text-yellow-400 px-4 py-1 font-black transform -rotate-3 text-xl">
                  ★★★★★
                </div>
                {review.image && (
                  <div className="mb-4">
                    <img 
                      src={review.image} 
                      alt={`Review image by ${review.name}`}
                      className="w-full h-48 object-cover rounded border-2 border-accent"
                    />
                  </div>
                )}
                {review.details && (
                  <div className="text-sm text-accent mb-2 font-medium">
                    {review.details}
                  </div>
                )}
                <p className="font-sans font-bold text-lg mb-6 italic">
                  "{expandedReviews[i] ? (review.fullText || review.text) : review.text}"
                </p>
                {review.fullText && (
                  <button
                    onClick={() => setExpandedReviews(prev => ({ ...prev, [i]: !prev[i] }))}
                    className="text-accent font-bold text-sm mb-4 hover:underline"
                  >
                    {expandedReviews[i] ? "Show Less" : "Read More"}
                  </button>
                )}
                <div className="font-display font-black text-2xl uppercase tracking-tighter">
                  — {review.name}
                </div>
                {review.time && (
                  <div className="font-sans text-sm text-accent mt-2">
                    {review.time}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="https://www.google.com/search?q=black+rose+collective+tatooo+housotn&num=10&client=firefox-b-lm&hs=9HlU&sca_esv=5624d16f735f65e3&hl=en-PT&biw=1920&bih=934&tbm=lcl&sxsrf=ANbL-n6DRMowtVRz1r3lhYg8rAYqNzR6Ag%3A1772189845190&ei=lXihaYCqC6H_ptQPoMOH2Q4&ved=0ahUKEwjAyMnRwfmSAxWhv4kEHaDhIesQ4dUDCAo&uact=5&oq=black+rose+collective+tatooo+housotn&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIiRibGFjayByb3NlIGNvbGxlY3RpdmUgdGF0b29vIGhvdXNvdG4yCBAAGAgYDRgeMggQABgIGA0YHjIIEAAYCBgNGB4yCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMgUQABjvBUjmQlCTE1jJQXAJeACQAQGYAekBoAHhJqoBBjQuMzUuMrgBA8gBAPgBAZgCMaAC7yfCAgUQABiABMICCxAAGIAEGJECGIoFwgIKEAAYgAQYQxiKBcICCRAAGIAEGAoYC8ICBxAAGIAEGArCAgoQABiABBgUGIcCwgIGEAAYFhgewgIHEAAYgAQYDcICCxAAGIAEGIYDGIoFmAMAiAYBkgcGOS4zOC4yoAeQkQKyBwYwLjM4LjK4B8YnwgcGMC40LjQ1yAfKAYAIAA&sclient=gws-wiz-local#lkt=LocalPoiReviews&rlfi=hd:;si:6062377607385004377,l,CiRibGFjayByb3NlIGNvbGxlY3RpdmUgdGF0dG9vIGhvdXN0b25IgrOH5-O6gIAIWkQQABABEAIQAxgAGAEYAhgDGAQiJGJsYWNrIHJvc2UgY29sbGVjdGl2ZSB0YXR0b28gaG91c3RvbioKCAIQABABEAIQA5IBC3RhdHRvb19zaG9w;mv:[[29.772048977319027,-95.2076117550923],[29.771689022680967,-95.20802644490767]]"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-blue-600 text-white font-sans font-medium text-lg px-8 py-4 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
            >
              <div className="flex items-center gap-2">
                <svg className="w-8 h-8" viewBox="0 0 48 48">
                  <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                  <path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                  <path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                  <path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                </svg>
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
              </div>
              <span>5 STARS! READ OUR REVIEWS ON GOOGLE</span>
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED WORK PREVIEW */}
      <section className="py-24 px-4 bg-accent text-white border-b-4 border-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12 border-b-4 border-white pb-6">
            <h2 className="text-5xl md:text-6xl font-black uppercase text-white">Recent Hits</h2>
            <Link href="/work" className="hidden md:block font-display text-2xl font-bold text-black hover:text-white transition-colors underline decoration-4 underline-offset-4">
              SEE ALL WORK
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "https://i.postimg.cc/xdfYMm0t/1772194237025.jpg",
              "https://i.postimg.cc/MG6xVBW0/619500732-17920476852086634-614489186346976432-n.jpg",
              "https://i.postimg.cc/Xvj3d5V9/621853854-18034091834574382-8840960382406870773-n.jpg",
              "https://i.postimg.cc/9fmVZ9W9/622470526-17977780409980941-1195022894057148726-n.jpg"
            ].map((img, i) => (
              <div key={i} className="group relative border-4 border-white overflow-hidden cursor-pointer bg-black">
                <img 
                  src={img} 
                  alt={`Tattoo ${i}`} 
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link href="/work">
                    <span className="font-display font-black text-2xl text-white bg-accent px-4 py-2 border-2 border-white transform rotate-3 cursor-pointer">
                      VIEW
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <Link href="/work" className="mt-12 block md:hidden w-full">
            <BrutalButton variant="outline" className="w-full bg-white text-accent border-white hover:bg-accent hover:text-white">SEE ALL WORK</BrutalButton>
          </Link>
        </div>
      </section>

      {/* PIERCING SECTION */}
      <section className="py-24 px-4 bg-foreground text-background border-b-4 border-accent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black uppercase text-background mb-8">
                PROFESSIONAL <br/>
                <span className="text-accent font-cinzel-decorative">PIERCINGS</span>
              </h2>
              <div className="space-y-6 font-sans text-lg font-medium text-background">
                <p className="text-xl font-bold">
                  High-quality jewelry and professional piercing services in a clean, sterile environment.
                </p>
                <ul className="space-y-3 hidden sm:block">
                  <li className="flex items-center gap-3">
                    <span className="text-accent text-xl">•</span>
                    <span>Ear Piercing (All Types)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent text-xl">•</span>
                    <span>Nose & Septum Piercing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent text-xl">•</span>
                    <span>Eyebrow & Lip Piercing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent text-xl">•</span>
                    <span>Professional Aftercare Guidance</span>
                  </li>
                </ul>
                <p className="text-accent font-bold text-xl">
                  Walk-ins Welcome • Expert Piercers • Sterile Procedures
                </p>
              </div>
            </div>
            
            <div className="h-96 lg:h-[500px] relative border-4 border-accent overflow-hidden">
              <img
                src="https://i.postimg.cc/zDHc0kGV/image.png"
                alt="Professional Piercing Jewelry Collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <div className="bg-accent text-white border-2 border-white px-4 py-2 font-display font-black transform -rotate-3 text-xl">
                  HIGH QUALITY JEWELRY
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="py-24 px-4 bg-accent text-white border-b-4 border-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none text-white">
              FIND US. <br/>
              <span className="text-white">VISIT US.</span>
            </h2>
            <p className="font-sans text-xl font-bold text-white">
              SERVING EAST SIDE HOUSTON • 5.0 ⭐ RATED
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-background/20 backdrop-blur-sm border-2 border-background p-8 rounded-lg">
                <h3 className="font-display font-black text-3xl mb-6 text-white">LOCATION & HOURS</h3>
                <div className="space-y-4 font-sans font-medium text-lg text-white">
                  <div className="flex items-start gap-3">
                    <span className="text-accent text-xl">📍</span>
                    <div>
                      <p className="font-bold">12751 East Fwy Suite C</p>
                      <p>Houston, TX 77015, United States</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent text-xl">📞</span>
                    <a href="tel:8325762172" className="font-bold hover:text-accent transition-colors">(832) 576-2172</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent text-xl">🕒</span>
                    <div className="space-y-1 text-sm">
                      <p><span className="font-bold">Monday-Saturday:</span> 2PM - 12AM</p>
                      <p><span className="font-bold">Sunday:</span> Closed</p>
                      <p className="text-white font-bold mt-2">Walk-ins always welcome!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-96 bg-gray-800 rounded-lg overflow-hidden border-4 border-background">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
