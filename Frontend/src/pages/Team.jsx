import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import teamData from '../data/team.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { User, Sparkles, Zap } from 'lucide-react';

/* ================= CURSOR GLOW EFFECT ================= */
const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    // specific gsap settings for smooth mouse following without delay
    gsap.set(glow, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(glow, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(glow, "y", { duration: 0.2, ease: "power3" });

    const moveGlow = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[500px] h-[500px] pointer-events-none z-[60] mix-blend-screen"
      style={{
        background: 'radial-gradient(circle, rgba(255,100,0,0.15) 0%, rgba(255,69,0,0.06) 40%, transparent 70%)',
        filter: 'blur(30px)',
      }}
    />
  );
};

/* ================= TEAM CARD (3D Tilt Effect) ================= */
const TeamCard = ({ image, name, role, instagram, linkedin }) => {
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    const container = containerRef.current;
    if (!card || !container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      gsap.to(card, {
        rotationX: -mouseY / 15, // Increased sensitivity slightly
        rotationY: mouseX / 15,
        transformPerspective: 1000,
        scale: 1.05,
        ease: 'power2.out',
        duration: 0.4
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        transformPerspective: 1000,
        ease: 'power2.out',
        duration: 0.6
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const hasValidImage = image && !imgError;

  return (
    <div
      ref={containerRef}
      className="w-72 h-[26rem] perspective-1000 group cursor-pointer"
    >
      <div
        ref={cardRef}
        className="relative w-full h-full transition-transform duration-300 ease-out transform-style-3d bg-[#111] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group-hover:border-orange-500/50"
      >
        {/* Image Layer */}
        <div className="absolute inset-0 z-0">
          {hasValidImage ? (
            <>
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-70" />
              <img 
                src={image} 
                alt="preload" 
                style={{ display: 'none' }} 
                onError={() => setImgError(true)} 
              />
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900">
              <User size={64} className="text-zinc-700 mb-2" />
              <span className="text-zinc-600 text-xs tracking-widest uppercase">No Image</span>
            </div>
          )}
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

        {/* Content Layer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {/* Animated Line */}
          <div className="w-8 h-1 bg-orange-500 mb-3 transition-all duration-300 group-hover:w-16" />
          
          <h3 className="text-2xl font-bold text-white mb-1 font-['Syncopate'] uppercase leading-none">
            {name}
          </h3>
          
          <p className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-4 opacity-80">
            {role}
          </p>

          <div className="flex gap-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-xl" />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= BACKGROUND PARTICLES (Embers) ================= */
const FloatingEmbers = () => {
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    left: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bottom-0 rounded-full bg-orange-500/60 blur-[1px] shadow-[0_0_10px_orange]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
          }}
          animate={{
            y: [0, -window.innerHeight * 1.2],
            opacity: [0, 0.8, 0],
            x: [0, Math.random() * 50 - 25],
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

/* ================= MAIN TEAMS SECTION ================= */

const TeamsSection = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      
      {/* 0. Cursor Glow */}
      <CursorGlow />

      {/* 1. Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Deep Moving Gradients */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-red-900/30 rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] bg-orange-900/20 rounded-full blur-[150px]" 
        />
        
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay" />
        
        {/* Floating Fire Particles */}
        <FloatingEmbers />
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 pt-32 pb-20 px-4 md:px-8">
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24 relative"
        >
          {/* <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-orange-500" />
            <span className="text-orange-500 font-bold tracking-[0.3em] text-xs md:text-sm uppercase">
              9th Edition
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-orange-500" />
          </div> */}

          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none font-['Syncopate'] drop-shadow-[0_0_25px_rgba(234,88,12,0.5)]">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500">
              Core
            </span>{"  "}

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 animate-gradient-x">
              Team
            </span>
          </h1>
        </motion.div>

        {/* Team Sections */}
        <div className="max-w-7xl mx-auto space-y-32">
          {teamData.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              {/* Section Title */}
              <div className="flex flex-col items-center mb-12">
                {/* <div className="flex items-center gap-2 mb-2 text-white/50">
                  <Zap size={16} className="fill-orange-500 text-orange-500" />
                  <span className="text-xs tracking-widest uppercase font-bold">Department</span>
                </div> */}
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white uppercase tracking-wider font-['Syncopate'] relative z-10">
                  {section.title}
                  {/* Text Underline Decoration */}
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent" />
                </h2>
              </div>

              {/* Cards Grid */}
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {section.members.map((member, idx) => (
                  <TeamCard
                    key={`${member.name}-${idx}`}
                    image={member.image}
                    name={member.name}
                    role={member.role}
                    instagram={member.instagram}
                    linkedin={member.linkedin}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TeamsSection;