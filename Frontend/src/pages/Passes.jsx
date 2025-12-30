import React, { useState, useEffect } from "react";
import { Ticket, Calendar, MapPin, Clock, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

// Sample passes data
const passes = [
  {
    name: "Cultural Night",
    time: "7:00 PM",
    venue: "Main Stage",
    desc: "Experience the rich tapestry of traditions through dance, music, and performances from around the world.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop"
  },
  {
    name: "Art Exhibition",
    time: "10:00 AM",
    venue: "Gallery Hall",
    desc: "Immerse yourself in contemporary and traditional artworks showcasing talent from diverse artists.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop"
  },
  {
    name: "Music Fest",
    time: "6:00 PM",
    venue: "Open Arena",
    desc: "Live performances featuring multiple genres - from classical fusion to modern beats.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop"
  },
  {
    name: "Food Carnival",
    time: "12:00 PM",
    venue: "Food Court",
    desc: "Savor authentic cuisines from different cultures and regions in one spectacular culinary journey.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop"
  },
  {
    name: "Dance Competition",
    time: "3:00 PM",
    venue: "Dance Floor",
    desc: "Watch talented performers compete in various dance styles showcasing grace and energy.",
    image: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800&h=600&fit=crop"
  },
  {
    name: "Theater Workshop",
    time: "11:00 AM",
    venue: "Drama Hall",
    desc: "Interactive sessions exploring the art of storytelling through drama and theatrical performances.",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&h=600&fit=crop"
  }
];

const Passes = () => {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax effects for background elements
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.15, 0.1]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden pt-32 pb-20 px-4 md:px-8">
      
      {/* 1. Enhanced Background Ambience with Animation */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div 
          style={{ 
            y: bgY,
            opacity: bgOpacity,
            x: mousePosition.x,
          }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[120px]"
        />
        <motion.div 
          style={{ 
            y: bgY,
            opacity: bgOpacity,
            x: -mousePosition.x,
          }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-900/15 rounded-full blur-[120px]"
        />
        <motion.div 
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], ['0%', '50%']),
            opacity: bgOpacity,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-900/10 rounded-full blur-[100px]"
        />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      {/* 2. Enhanced Header Section */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Sparkle decoration */}
          <motion.div
            className="flex justify-center gap-4 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="text-orange-500" size={20} />
            <span className="inline-block py-1 px-4 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
              Annual Gathering 2026
            </span>
            <Sparkles className="text-red-500" size={20} />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-gray-400">
              Event Passes
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Secure your spot. Pick your favorite events and grab your <span className="text-orange-500 font-semibold">Get Pass</span> to enter the celebration.
          </motion.p>
        </motion.div>
      </div>

      {/* 3. Cards Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {passes.map((event, index) => (
          <EventCard key={index} event={event} index={index} />
        ))}
      </div>

    </div>
  );
};

// --- Sub-Component: Enhanced Event Card ---
const EventCard = ({ event, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-500 flex flex-col"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
      />
      
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
        <motion.img 
          src={event.image} 
          alt={event.name} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100"
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          animate={isHovered ? { x: "200%" } : { x: "-100%" }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Category Tag */}
        <motion.div 
          className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-xs font-bold text-white uppercase tracking-wider">2026</span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow relative z-10">
        <motion.h3 
          className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300"
          animate={isHovered ? { x: 2 } : { x: 0 }}
        >
          {event.name}
        </motion.h3>
        
        {/* Info Row */}
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <motion.div 
            className="flex items-center gap-1.5"
            whileHover={{ scale: 1.05 }}
          >
            <Clock size={16} className="text-orange-500" />
            <span>{event.time}</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-1.5"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin size={16} className="text-orange-500" />
            <span>{event.venue}</span>
          </motion.div>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 grow">
          {event.desc}
        </p>

        {/* Button */}
        <motion.button 
          className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold tracking-widest uppercase hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-600 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={isHovered ? { x: ['-100%', '100%'] } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <span className="relative z-10 flex items-center gap-2">
            <Ticket size={18} />
            Get Passes
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Passes;