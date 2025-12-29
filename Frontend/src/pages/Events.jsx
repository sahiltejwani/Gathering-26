
import React from "react";
import CircularGallery from '../components/CircularGallery'
const Events = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        paddingTop: "80px",
      }}
    >
      <h3 className="text-center text-gray-600 text-xl">- COEP GATHERING -</h3>
      {/* Heading */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "700",
          background: "linear-gradient(135deg, #FF6B00 0%, #FFD700 50%, #FFA500 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "4px",
          marginBottom: "-50px",
          fontFamily: "'Pacifico', 'Dancing Script', 'Great Vibes', 'Allura', cursive",
          textShadow: "0 0 30px rgba(255, 165, 0, 0.5)",
        }}
      >
        EVENTS
      </h1>

      {/* Gallery */}
      <div style={{ height: "600px" }}>
        <CircularGallery
          bend={0}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </div>
  );
};

export default Events;


