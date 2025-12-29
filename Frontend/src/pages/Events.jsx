import React from "react";
import CircularGallery from '../components/CircularGallery'

const Events = () => {
  return (
    <div
      className="min-h-screen relative pt-[80px] pb-8 px-2 sm:px-4 lg:px-8"
      style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 50%)' }}
    >
      {/* Responsive Subtitle */}
      <h3 className="text-center text-gray-600 text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 tracking-wider">
        - COEP GATHERING -
      </h3>
      
      {/* Responsive Main Heading + Perfect overlap */}
      <h1
        className="mb-0 px-2 sm:px-4 text-center"
        style={{
          fontSize: "clamp(2.2rem, 8vw, 4.5rem)",
          fontWeight: "700",
          background: "linear-gradient(135deg, #FF6B00 0%, #FFD700 50%, #FFA500 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "0.08em",
          marginBottom: "-10rem",  // Perfect overlap with gallery
          fontFamily: "'Pacifico', 'Dancing Script', 'Great Vibes', 'Allura', cursive",
          textShadow: "0 0 30px rgba(255, 165, 0, 0.6)",
        }}
      >
        EVENTS
      </h1>

      {/* 🎯 PERFECT RESPONSIVE GALLERY CONTAINER */}
      <div className="w-full h-[52vh] sm:h-[58vh] md:h-[62vh] lg:h-[68vh] xl:h-[72vh] min-h-[380px] max-h-[680px] mt-[-1rem]">
        <CircularGallery
          bend={0}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.025}
        />
      </div>
    </div>
  );
};

export default Events;
