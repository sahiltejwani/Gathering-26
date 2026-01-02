import React, { useState } from "react";
import "./Visionboard.css";
import nightCity from "../assets/night-city.mp4";

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

const Visionboard = () => {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <div className="video-bg-wrapper">

      <video
        className="bg-video"
        src={nightCity}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="video-overlay"></div>

      <section className="gallery-wrapper">
        <h1>Anandotsav</h1>
        <p>Where Cultures Unite</p>

        <div className="masonry">
          {images.map((src, index) => (
            <div
              className="masonry-item"
              key={index}
              onClick={() => setActiveImg(src)}
            >
              <img src={src} alt={`gallery-${index}`} />
            </div>
          ))}
        </div>
      </section>

      {activeImg && (
        <div className="lightbox" onClick={() => setActiveImg(null)}>
          <img src={activeImg} alt="enlarged" />
        </div>
      )}
    </div>
  );
};

export default Visionboard;
