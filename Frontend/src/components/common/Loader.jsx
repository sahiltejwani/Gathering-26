import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. Background Ambience (Deep Red/Orange Glow) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-600 rounded-full blur-[150px] opacity-40" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      {/* 2. Logo Animation (Zoom In / Out) */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1], 
            filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="relative"
        >
          {/* Glow behind logo */}
          <div className="absolute inset-0 bg-orange-500 blur-2xl opacity-30 animate-pulse" />
          
          <img 
            src="/Logo.png" 
            alt="Gathering Logo" 
            className="w-32 md:w-48 h-auto object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,69,0,0.5)]"
          />
        </motion.div>

        {/* 3. Text Loader */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <h2 className="text-2xl font-bold font-['Syncopate'] text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 tracking-[0.2em]">
            ANANDOTSAV
          </h2>
          
          {/* Loading Bar */}
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mt-2">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="w-full h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"
            />
          </div>
          
          <p className="text-xs text-gray-500 font-mono mt-2 tracking-widest">
            INITIALIZING EXPERIENCE...
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;