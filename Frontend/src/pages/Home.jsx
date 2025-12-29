import React, { useState, useEffect, useRef } from "react";
import LightRays from "../components/LightRays";

const Home = () => {
  const [lightRaysOpacity, setLightRaysOpacity] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [hasPlayedVideo, setHasPlayedVideo] = useState(false);
  const videoRef = useRef(null);
  const mobileTimerRef = useRef(null);

  useEffect(() => {
    const videoPlayed = sessionStorage.getItem('homeVideoPlayed');

    // Check if device is mobile based on screen width
    const isMobile = window.innerWidth <= 768;

    if (videoPlayed === 'true') {
      setHasPlayedVideo(true);
      setLightRaysOpacity(1);
      setShowLogo(true);
      setShowTagline(true);

      if (videoRef.current) {
        const setToEnd = () => {
          if (videoRef.current) {
            videoRef.current.currentTime = videoRef.current.duration;
            videoRef.current.pause();
          }
        };

        if (videoRef.current.readyState >= 2) {
          setToEnd();
        } else {
          videoRef.current.addEventListener('loadedmetadata', setToEnd);
        }
      }
      return;
    }

    // Set up mobile video timer - stop after 7 seconds
    if (isMobile) {
      mobileTimerRef.current = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.pause();
          sessionStorage.setItem('homeVideoPlayed', 'true');
          setHasPlayedVideo(true);
        }
      }, 7000);
    }

    // Light rays fade in - starts earlier on mobile for better visibility
    const fadeTimer = setTimeout(() => {
      setLightRaysOpacity(1);
    }, isMobile ? 2000 : 3000);

    // Logo appears
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, isMobile ? 4000 : 6000);

    // Tagline appears
    const taglineTimer = setTimeout(() => {
      setShowTagline(true);
    }, isMobile ? 5000 : 7000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(logoTimer);
      clearTimeout(taglineTimer);
      if (mobileTimerRef.current) {
        clearTimeout(mobileTimerRef.current);
      }
    };
  }, []);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    sessionStorage.setItem('homeVideoPlayed', 'true');
    setHasPlayedVideo(true);

    if (mobileTimerRef.current) {
      clearTimeout(mobileTimerRef.current);
    }
  };

  return (
    <div className="w-full h-screen relative overflow-hidden bg-black">
      {/* Light Rays Effect */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity ease-in z-10" 
        style={{ 
          opacity: lightRaysOpacity,
          transitionDuration: '2000ms'
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

      {/* Logo */}
      <div
        className="absolute top-1/2 left-[47%] transition-all ease-out z-30"
        style={{
          transform: showLogo
            ? "translate(-50%, -60%)"
            : "translate(-50%, -50%)",
          opacity: showLogo ? 1 : 0,
          transitionDuration: '1500ms'
        }}
      >
        <img 
          src="/Logotext.png" 
          alt="Logo" 
          className="w-125 max-w-[80vw]"
        />
      </div>

      {/* Tagline */}
      <div
        className="absolute top-[58%] left-[53%] transition-all font-semibold italic tracking-[3px] bg-clip-text text-transparent z-30 text-2xl sm:text-3xl md:text-4xl px-4"
        style={{
          transform: showTagline
            ? "translate(-30%, 10%)"
            : "translate(-30%, -10%)",
          opacity: showTagline ? 1 : 0,
          filter: showTagline ? "blur(0px)" : "blur(10px)",
          transitionDuration: '1800ms',
          transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          fontFamily: "'Cinzel Decorative', 'Trajan Pro', serif",
          backgroundImage: 'linear-gradient(135deg, #f4e4c1 0%, #e8d4a8 50%, #d4af7a 100%)',
          textShadow: '0 0 20px rgba(244, 228, 193, 0.5)'
        }}
      >
        where cultures unite
      </div>

      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay={!hasPlayedVideo}
        muted
        playsInline
        onEnded={handleVideoEnd}
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/curtains.mp4" type="video/mp4" />
        <source src="/curtains.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Home;