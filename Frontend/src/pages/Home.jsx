import React, { useState, useEffect, useRef } from "react";
import LightRays from "../components/LightRays";

const Home = () => {
  const [lightRaysOpacity, setLightRaysOpacity] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setLightRaysOpacity(1);
    }, 3000);

    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 5500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(logoTimer);
    };
  }, []);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh)",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "black"
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: lightRaysOpacity,
          transition: "opacity 2s ease-in",
          zIndex: 1,
          pointerEvents: "none"
        }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>


      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "47%",
          transform: showLogo
            ? "translate(-50%, -60%)"
            : "translate(-50%, -50%)",
          opacity: showLogo ? 1 : 0,
          transition: "all 1.5s ease-out",
          zIndex: 3
        }}
      >
        <img src="/Logotext.png" alt="Logo" style={{ width: "500px" }} />
      </div>


      <video
        ref={videoRef}
        autoPlay
        muted
        onEnded={handleVideoEnd}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none"
        }}
      >
        <source src="/curtains.mp4" type="video/mp4" />
        <source src="/curtains.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Home;