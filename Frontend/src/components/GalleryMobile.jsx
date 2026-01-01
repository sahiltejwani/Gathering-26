import React, { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
  "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",
  "https://images.unsplash.com/photo-1520974735194-6c5f2f67fa0a",
  "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
  "https://images.unsplash.com/photo-1500534314209-a26db0f5c8b3",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
  "https://images.unsplash.com/photo-1514516870926-206e0e25904e",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7",
];

const GalleryMobile = () => {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <>
      {/* MAIN SCROLLABLE CONTENT */}
      <section className="min-h-screen bg-[#0f0f0f] px-5 py-16 text-center text-white">
        <h1 className="font-serif text-[clamp(2.2rem,5vw,4rem)]">
          Anandotsav
        </h1>

        <p className="mt-2 mb-10 text-[#f5c16c]">
          Where Cultures Unite
        </p>

        <div className="mx-auto max-w-6xl columns-2 gap-4 md:columns-4 md:gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => setActiveImg(src)}
              className="mb-4 break-inside-avoid cursor-pointer"
            >
              <img
                src={src}
                alt={`gallery-${index}`}
                className="
                  w-full rounded-2xl
                  shadow-[0_15px_35px_rgba(0,0,0,0.6)]
                  transition-all duration-300
                  hover:scale-[1.03]
                  hover:brightness-110
                  hover:shadow-[0_0_35px_rgba(245,193,108,0.5)]
                "
              />
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {activeImg && (
        <div
          onClick={() => setActiveImg(null)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90"
        >
          <img
            src={activeImg}
            alt="preview"
            className="max-h-[90%] max-w-[90%] rounded-2xl shadow-2xl animate-[zoomIn_0.3s_ease]"
          />
        </div>
      )}

      {/* Animation */}
      <style>
        {`
          @keyframes zoomIn {
            from {
              transform: scale(0.85);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
};

export default GalleryMobile;
