import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Clock, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { events } from "../data/events";

const AUTO_DELAY = 5000;

const EventsMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextEvent();
    }, AUTO_DELAY);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused]);

  const nextEvent = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const prevEvent = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const activeEvent = events[activeIndex];

  const onDragEnd = (_, info) => {
    if (info.offset.x < -50) nextEvent();
    if (info.offset.x > 50) prevEvent();
  };

  return (
    <div className="relative min-h-dvh w-full overflow-hidden flex flex-col items-center justify-center">

      {/* Background */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeEvent.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={activeEvent.image}
            loading="lazy" decoding="async" //
            className="w-full h-full object-cover blur-[100px] scale-110"
            alt=""
          />
          <div className="absolute inset-0 bg-black/80" />
        </motion.div>
      </AnimatePresence>

      {/* HEADER */}
      <div className="relative z-10 text-center mt-10 mb-6">
        <h3 className="text-orange-500 tracking-[0.4em] text-[10px] font-bold uppercase flex justify-center gap-2">
          <Sparkles size={12} /> COEP Gathering 2026 <Sparkles size={12} />
        </h3>
        <h1 className="text-4xl font-black text-white mt-2">
          Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Showcase</span>
        </h1>
      </div>

      {/* MAIN SLIDER */}
      <div
        className="relative w-full flex items-center justify-center h-[78vh]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeEvent.id}
            custom={direction}
            initial={{ x: direction > 0 ? 120 : -120, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: direction < 0 ? 120 : -120, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.45 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={onDragEnd}
            className="
              w-[88%]
              h-[85%]
              bg-[#0a0a0a]
              rounded-3xl
              overflow-hidden
              border border-white/10
              shadow-[0_30px_60px_-15px_rgba(220,38,38,0.5)]
              relative
            "
          >
            {/* IMAGE */}
            <img
              src={activeEvent.image}
              alt={activeEvent.text}
               loading="lazy" decoding="async"
              className="w-full h-[65%] object-cover opacity-70"
            />

            {/* TEXT CONTENT */}
            <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black via-black/80 to-transparent">
              {/* <div className="flex gap-3 mb-2">
                <span className="text-xs bg-black/50 px-3 py-1 rounded-full text-white flex items-center gap-1">
                  <Clock size={12} /> 7:00 PM
                </span>
                <span className="text-xs bg-black/50 px-3 py-1 rounded-full text-white flex items-center gap-1">
                  <MapPin size={12} /> Main Stage
                </span>
              </div> */}

              <h2 className="text-2xl font-bold text-white mb-2">
                {activeEvent.text}
              </h2>

              <p className="text-sm text-gray-300 line-clamp-2 mb-4">
                {activeEvent.description}
              </p>

              <Link to="/passes">
                <button className="bg-white text-black px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition">
                  Get Passes <ArrowRight size={16} />
                </button>
              </Link>
            </div>

            {/* PROGRESS BAR */}
            {!isPaused && (
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: AUTO_DELAY / 1000, ease: "linear" }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 shadow-[0_0_15px_rgba(168,85,247,0.9)]"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTROLS */}
      <div className="flex items-center gap-4 mt-6">
        <button onClick={prevEvent} className="text-white/70 hover:text-white">
          <ChevronLeft size={28} />
        </button>

        <div className="flex gap-2">
          {events.map((_, i) => (
            <span
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === activeIndex
                  ? "w-8 bg-gradient-to-r from-fuchsia-500 to-cyan-400"
                  : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>

        <button onClick={nextEvent} className="text-white/70 hover:text-white">
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default EventsMobile;
