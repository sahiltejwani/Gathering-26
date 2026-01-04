import React, { useMemo } from "react";
import { Ticket, MapPin, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const passes = [
  {
    name: "Cultural Night",
    time: "7:00 PM",
    venue: "Main Stage",
    desc: "Experience traditions through dance, music, and performances.",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
  },
  {
    name: "Art Exhibition",
    time: "10:00 AM",
    venue: "Gallery Hall",
    desc: "Contemporary and traditional artworks from diverse artists.",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
  },
  {
    name: "Music Fest",
    time: "6:00 PM",
    venue: "Open Arena",
    desc: "Live performances across multiple music genres.",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
  },
  {
    name: "Food Carnival",
    time: "12:00 PM",
    venue: "Food Court",
    desc: "Taste cuisines from different cultures.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
  },
  {
    name: "Dance Competition",
    time: "3:00 PM",
    venue: "Dance Floor",
    desc: "High-energy performances from talented dancers.",
    image:
      "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800",
  },
  {
    name: "Theatre Workshop",
    time: "11:00 AM",
    venue: "Drama Hall",
    desc: "Interactive storytelling through theatre.",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800",
  },
];

export default function Passes() {
  /* Stable glowing blobs */
  const blobs = useMemo(
    () =>
      Array.from({ length: 12 }).map(() => ({
        size: 140 + Math.random() * 140,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 30 + Math.random() * 20,
      })),
    []
  );

  return (
    <div className="relative min-h-screen bg-black text-white pt-32 pb-20 px-4 md:px-8">

      <div className="fixed inset-0 pointer-events-none z-0">

        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background:
              "linear-gradient(120deg, rgba(255,0,0,0.18), rgba(255,140,0,0.14), rgba(255,0,80,0.18))",
            backgroundSize: "300% 300%",
          }}
        />

        {blobs.map((b, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: b.size,
              height: b.size,
              left: `${b.left}%`,
              top: `${b.top}%`,
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,120,120,0.8), rgba(200,40,40,0.35), transparent)",
              filter: "blur(50px)",
            }}
            animate={{
              x: [0, 80, -80, 0],
              y: [0, -60, 60, 0],
              opacity: [0.4, 0.7, 0.5],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: b.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />
      </div>
    </div>
  );
};

// --- Sub-Component: Event Card ---
const EventCard = ({ event, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-red-500/50 transition-colors duration-300 flex flex-col"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
        <img 
          src={event.image} 
          alt={event.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        {/* Category Tag */}
        <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <span className="text-xs font-bold text-white uppercase tracking-wider">2026</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-2xl font-bold font-['Syncopate'] text-white mb-4 group-hover:text-red-500 transition-colors">
          {event.name}
        </h3>
        
        {/* Info Row */}
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-1.5">
            <Clock size={16} className="text-orange-500" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={16} className="text-orange-500" />
            <span>{event.venue}</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 grow">
          {event.desc}
        </p>

        {/* Button */}
        <a
  href="https://www.pass-distribution.sdscoeptech.club/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full"
>
  <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold tracking-widest uppercase hover:bg-linear-to-r hover:from-red-600 hover:to-orange-600 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
    <Ticket size={18} />
    Get Passes
  </button>
</a>
      </div>
    </motion.div>
  );
};


