import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Flame } from "lucide-react";
import MouseGlow from "../components/common/MouseGlow";

const Theme = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full bg-black relative flex flex-col items-center justify-center overflow-hidden py-16 md:py-32"
    >
        <MouseGlow />
      {/* ================= BACKGROUND CORE ================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        {/* Core Glow (Controlled, No Wash) */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-40 h-40 md:w-64 md:h-64 bg-orange-600 rounded-full blur-[60px] opacity-30"
        />

        {/* Outer Ring */}
        <div className="absolute w-75 h-75 md:w-150 md:h-150 lg:w-225 lg:h-225 border border-white/10 rounded-full opacity-60 flex items-center justify-center">
          <motion.div
            style={{ rotate }}
            className="w-full h-full border-t border-l border-orange-500/30 rounded-full"
          />
        </div>

        {/* Inner Ring */}
        <div className="absolute w-55 h-55 md:w-112.5 md:h-112.5 lg:w-162.5 lg:h-162.5 border border-white/10 rounded-full opacity-60 flex items-center justify-center">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="w-full h-full border-b border-r border-red-500/40 rounded-full"
          />
        </div>
      </div>
    
      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-6 flex flex-col items-center text-center">

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-10 bg-orange-500" />
          <span className="text-orange-500 font-bold tracking-[0.4em] text-xs uppercase">
            COEP Gathering 2026
          </span>
          <div className="h-px w-10 bg-orange-500" />
        </motion.div>

        {/* Title */}
        <div className="relative w-full py-8">
          <h1
  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
             text-[15vw] font-black text-transparent opacity-20 pointer-events-none"
  style={{
    WebkitTextStroke: "2px rgba(255, 140, 0, 0.8)",
    textShadow: "0 0 20px rgba(255,140,0,0.4)",
    fontFamily: "Syncopate, sans-serif",
  }}
>
  GATHERING
</h1>

          <motion.h2
            initial={{ opacity: 0, scale: 0.85, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="relative text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase drop-shadow-2xl"
            style={{ fontFamily: "Syncopate, sans-serif" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 animate-gradient-x">
              ANANDOTSAV
            </span>
          </motion.h2>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl relative"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black p-3 rounded-full border border-white/10">
            <Flame className="text-orange-500 w-6 h-6" />
          </div>

          <p className="text-gray-300 text-sm md:text-xl leading-relaxed">
            "From the spark of tradition to the roar of celebration.
            This year, we don’t just celebrate joy — we <b className="text-white">ignite</b> it."
          </p>
        </motion.div>
      </div>

      {/* Floating Embers */}
      <FloatingEmbers />
    </div>
  );
};

/* ================= FLOATING EMBERS ================= */

const FloatingEmbers = () => {
  const particles = Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bottom-0 rounded-full bg-orange-500/80 blur-[1px]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
          }}
          animate={{
            y: [0, -window.innerHeight],
            opacity: [0, 0.8, 0],
            x: [0, Math.random() * 30 - 15],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default Theme;
