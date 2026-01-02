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

      
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center gap-4 mb-4">
            <Sparkles className="text-orange-500" />
            <span className="px-4 py-1 text-xs uppercase tracking-widest rounded-full bg-red-500/10 border border-red-500/20">
              Annual Gathering 2026
            </span>
            <Sparkles className="text-red-500" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-red-200 to-gray-400">
            Event Passes
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Pick your favorite events and grab your{" "}
            <span className="text-orange-500 font-semibold">Get Pass</span>.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {passes.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover opacity-85 hover:opacity-100 transition"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{event.name}</h3>

                <div className="flex gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-orange-500" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} className="text-orange-500" />
                    {event.venue}
                  </div>
                </div>

                <p className="text-gray-500 text-sm mb-6">{event.desc}</p>

                <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 transition">
                  <span className="flex items-center justify-center gap-2">
                    <Ticket size={18} /> Get Passes
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
