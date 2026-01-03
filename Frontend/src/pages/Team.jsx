import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Sparkles, User } from 'lucide-react';
import teamData from '../data/team.json';

const Team = () => {
  return (
    <div className="min-h-screen relative bg-black overflow-x-hidden pt-28 pb-20">
      
      {/* --- Ambient Background --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-100 bg-linear-to-b from-red-900/20 to-transparent blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-orange-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      </div>

      {/* --- Header --- */}
      <div className="relative z-10 text-center mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h3 className="text-orange-500 tracking-[0.3em] text-[10px] md:text-xs font-bold uppercase mb-4 flex items-center gap-2">
            <Sparkles size={12} /> The Creators <Sparkles size={12} />
          </h3>

          <h1 className="text-4xl md:text-7xl font-black font-['Syncopate'] text-white uppercase drop-shadow-lg text-center leading-tight">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-orange-500">
              Core Team
            </span>
          </h1>

          <div className="w-24 h-1 bg-linear-to-r from-transparent via-orange-500 to-transparent mt-6 rounded-full" />
        </motion.div>
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 space-y-24">
        {teamData.teamSections.map((section, idx) => (
          <TeamSection key={idx} section={section} />
        ))}
      </div>
    </div>
  );
};

/* ================= SECTION ================= */

const TeamSection = ({ section }) => {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-4 mb-10 w-full max-w-2xl"
      >
        <div className="h-px flex-1 bg-linear-to-r from-transparent to-white/20" />
        <h2 className="text-2xl md:text-4xl font-bold text-white font-['Syncopate'] uppercase text-center tracking-wide">
          {section.title}
        </h2>
        <div className="h-px flex-1 bg-linear-to-r from-white/20 to-transparent" />
      </motion.div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 w-full">
        {section.members.map((member, idx) => (
          <MemberCard key={idx} member={member} index={idx} />
        ))}
      </div>
    </div>
  );
};

/* ================= CARD ================= */

const MemberCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="
        group relative w-[45%] md:w-70 aspect-4/5
        bg-[#0a0a0a] rounded-xl overflow-hidden
        border border-white/10 hover:border-white/20
        transition-all duration-500 ease-out
        shadow-lg hover:shadow-2xl
      "
    >
      {/* Image */}
      <div className="absolute inset-0 bg-gray-900">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="
              w-full h-full object-cover
              transition-all duration-700
              group-hover:scale-105
              brightness-90 group-hover:brightness-75
              grayscale-[0.2] group-hover:grayscale-0
            "
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-white/5">
            <User size={40} className="text-white/20" />
          </div>
        )}

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-3 md:p-5 flex flex-col items-center text-center">
        <h3 className="text-sm md:text-lg font-bold text-white font-['Syncopate'] leading-tight group-hover:text-white/90 transition-colors truncate px-1">
          {member.name}
        </h3>

        <p className="text-[10px] md:text-xs text-gray-400 font-bold tracking-widest uppercase mt-1 mb-2 md:mb-3">
          {member.role}
        </p>

        {/* Social Icons */}
        <div
          className="
            flex gap-4 justify-center
            transition-all duration-300
            h-auto opacity-100
            md:h-0 md:opacity-0
            md:group-hover:h-auto md:group-hover:opacity-100
          "
        >
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors hover:scale-110"
            >
              <Linkedin size={16} />
            </a>
          )}
          {member.instagram && (
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors hover:scale-110"
            >
              <Instagram size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-2 right-2 md:top-3 md:right-3 w-2 h-2 border-t border-r border-white/30 opacity-50 group-hover:opacity-80 transition-opacity" />
    </motion.div>
  );
};

export default Team;
