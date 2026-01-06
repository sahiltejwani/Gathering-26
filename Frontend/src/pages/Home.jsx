import React, { useState, useEffect, useRef } from "react";
import LightRays from "../components/LightRays";

const Home = () => {
  const [lightRaysOpacity, setLightRaysOpacity] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [hasPlayedVideo, setHasPlayedVideo] = useState(false);

  const videoRef = useRef(null);
  const mobileTimerRef = useRef(null);

  // Animation pause/resume refs (kept as-is)
  const animationStartRef = useRef(null);
  const pausedAtRef = useRef(null);
  const remainingTimersRef = useRef({});

  // Video-based trigger refs
  const videoTriggersRef = useRef({
    light: false,
    logo: false,
    tagline: false,
  });

  /* ---------------- INITIAL LOAD LOGIC (MOSTLY UNCHANGED) ---------------- */
  useEffect(() => {
    const videoPlayed = sessionStorage.getItem("homeVideoPlayed");
    const isMobile = window.innerWidth <= 768;

    if (videoPlayed === "true") {
      setHasPlayedVideo(true);
      setLightRaysOpacity(1);
      setShowLogo(true);
      setShowTagline(true);

      if (videoRef.current) {
        const setToEnd = () => {
          videoRef.current.currentTime = videoRef.current.duration;
          videoRef.current.pause();
        };

        if (videoRef.current.readyState >= 2) {
          setToEnd();
        } else {
          videoRef.current.addEventListener("loadedmetadata", setToEnd);
        }
      }
      return;
    }

    // Mobile video cutoff (UNCHANGED)
    if (isMobile) {
      mobileTimerRef.current = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.pause();
          sessionStorage.setItem("homeVideoPlayed", "true");
          setHasPlayedVideo(true);
        }
      }, 7000);
    }

    return () => {
      if (mobileTimerRef.current) clearTimeout(mobileTimerRef.current);
    };
  }, []);

  /* ---------------- VIDEO TIME-BASED ANIMATION TRIGGERS ---------------- */
  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasPlayedVideo) return;

    const isMobile = window.innerWidth <= 768;

    // SAME timings as your original code (converted to seconds)
    const timings = {
      light: isMobile ? 2 : 3,
      logo: isMobile ? 4 : 7,
      tagline: isMobile ? 5 : 8,
    };

    const onTimeUpdate = () => {
      const t = video.currentTime;

      if (t >= timings.light && !videoTriggersRef.current.light) {
        videoTriggersRef.current.light = true;
        setLightRaysOpacity(1);
      }

      if (t >= timings.logo && !videoTriggersRef.current.logo) {
        videoTriggersRef.current.logo = true;
        setShowLogo(true);
      }

      if (t >= timings.tagline && !videoTriggersRef.current.tagline) {
        videoTriggersRef.current.tagline = true;
        setShowTagline(true);
      }
    };

    video.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [hasPlayedVideo]);

  /* ---------------- TAB VISIBILITY PAUSE / RESUME (KEPT INTACT) ---------------- */
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        pausedAtRef.current = Date.now();
        Object.values(remainingTimersRef.current).forEach(clearTimeout);
      } else {
        if (!animationStartRef.current || !pausedAtRef.current) return;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  /* ---------------- VIDEO END ---------------- */
  const handleVideoEnd = () => {
    if (videoRef.current) videoRef.current.pause();
    sessionStorage.setItem("homeVideoPlayed", "true");
    setHasPlayedVideo(true);
    if (mobileTimerRef.current) clearTimeout(mobileTimerRef.current);
  };

  /* ---------------- RENDER ---------------- */
  return (
    <div className="w-full h-screen relative overflow-hidden bg-black">
      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-40"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,1) 100%)",
        }}
      />

      {/* Light Rays */}
      <div
        className="absolute inset-0 pointer-events-none z-10 transition-opacity"
        style={{ opacity: lightRaysOpacity, transitionDuration: "2000ms" }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          mobileIntensityMultiplier={3.0}
        />
      </div>

      {/* Logo */}
      <div
        className="absolute top-1/2 left-[47%] z-30 transition-all ease-out"
        style={{
          transform: showLogo
            ? "translate(-50%, -60%)"
            : "translate(-50%, -50%)",
          opacity: showLogo ? 1 : 0,
          transitionDuration: "1500ms",
        }}
      >
        <img
          src="/Logotext.png"
          alt="Logo"
          loading="lazy"
          decoding="async"
          className="w-125 max-w-[80vw]"
        />
      </div>

      {/* Tagline */}
      <div
        className="absolute top-[58%] left-[61%] z-3 transition-all duration-1800 ease-[cubic-bezier(0.34,1.56,0.64,1)] font-['Cinzel_Decorative','Trajan_Pro',serif] text-[18px] md:text-[36px] font-semibold italic tracking-[2px] md:tracking-[3px] bg-[linear-gradient(135deg,#f4e4c1_0%,#e8d4a8_50%,#d4af7a_100%)] bg-clip-text text-transparent"
        style={{
          transform: showTagline
            ? "translate(-30%, 10%)"
            : "translate(-30%, -10%)",
          opacity: showTagline ? 1 : 0,
          filter: showTagline ? "blur(0px)" : "blur(10px)",
        }}
      >
        -where cultures unite
      </div>

      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay={!hasPlayedVideo}
        muted
        playsInline
        preload="metadata"
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source
          src="https://res.cloudinary.com/didcdkvu7/video/upload/v1767688517/curtains_pumrrh.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/didcdkvu7/video/upload/v1767688517/curtains_pumrrh.mp4"
          type="video/webm"
        />
      </video>
    </div>
  );
};

export default Home;