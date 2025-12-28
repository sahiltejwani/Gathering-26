
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
      {/* Heading */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "700",
          color: "white",
          marginBottom: "40px",
          letterSpacing: "2px"
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


