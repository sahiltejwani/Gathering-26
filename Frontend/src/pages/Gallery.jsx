import { useEffect, useState } from "react";
import DomeGallery from "../components/DomeGallery";
import GalleryMobile from "../components/GalleryMobile";

export default function Gallery() {
  const [isMobile, setIsMobile] = useState(false);
    const TOTAL_IMAGES = 28;

  const DEFAULT_IMAGES = Array.from({ length: TOTAL_IMAGES }, (_, i) => ({
    src: `https://raw.githubusercontent.com/YashMarke130105/gathering-assets2026/main/gal-${i + 1}.jpg`,
    alt: `Gallery image ${i + 1}`,
  }));
  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const update = () => setIsMobile(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  // ✅ MOBILE VIEW — scroll enabled
  if (isMobile) {
    return (
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          overflowY: "auto",
          background: "#000",
        }}
      >
        <GalleryMobile />
      </div>
    );
  }

  // ✅ DESKTOP VIEW — full screen, no scroll
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#000",
      }}
    >
      <DomeGallery DEFAULT_IMAGES={DEFAULT_IMAGES} grayscale={false} />
    </div>
  );
}
