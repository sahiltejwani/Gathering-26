import React, { useState } from "react";
import { galleryImages } from "../data/gallery"; // Import the manual list

const PICK_COUNT = 16;

// Shuffle and pick
const displayImages = [...galleryImages]
  .sort(() => Math.random() - 0.5)
  .slice(0, PICK_COUNT);

const GalleryMobile = () => {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <>
      <section className="min-h-screen bg-[#0f0f0f] px-5 py-16 text-center text-white">
        <h1 className="font-serif text-[clamp(2.2rem,5vw,4rem)]">Anandotsav</h1>
        <p className="mt-2 mb-10 text-[#f5c16c]">Where Cultures Unite</p>

        <div className="mx-auto max-w-6xl grid auto-rows-[120px] grid-cols-2 gap-4" style={{ gridAutoFlow: "dense" }}>
          {displayImages.map((img, index) => {
            const variant = index % 5;
            const sizeClass = variant === 0 ? "row-span-1 col-span-1" : variant === 1 ? "row-span-2 col-span-1" : variant === 2 ? "row-span-1 col-span-2" : "row-span-1 col-span-1";

            return (
              <div key={index} onClick={() => setActiveImg(img.src)} className={`cursor-pointer overflow-hidden rounded-2xl ${sizeClass}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    console.warn("Failed to load:", img.src);
                  }}
                  className="w-full h-full object-cover shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all duration-500 hover:scale-[1.06] hover:brightness-110 hover:shadow-[0_0_40px_rgba(245,193,108,0.45)]"
                />
              </div>
            );
          })}
        </div>
      </section>

      {activeImg && (
        <div onClick={() => setActiveImg(null)} className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <img src={activeImg} alt="preview" className="max-h-[90%] max-w-[90%] rounded-2xl shadow-2xl animate-[zoomIn_0.3s_ease]" />
        </div>
      )}
      <style>{`@keyframes zoomIn { from { transform: scale(0.85); opacity: 0; } to { transform: scale(1); opacity: 1; } }`}</style>
    </>
  );
};

export default GalleryMobile;