// src/pages/Events.jsx
import { useEffect, useState } from "react";
import CircularGallery from "../components/CircularGallery";
import EventsMobile from "../components/EventsMobile";

export default function Events() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <EventsMobile /> : <CircularGallery />;
}
