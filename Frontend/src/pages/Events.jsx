import { useEffect, useState } from "react";

export default function Events() {
  const teamMembers = [
    {
      name: "Luffy",
      role: "Founder",
      img: "https://ik.imagekit.io/gopichakradhar/luffy/o1.jpeg"
    },
    {
      name: "Monkey D. Luffy",
      role: "Creative Director",
      img: "https://ik.imagekit.io/gopichakradhar/luffy/o2.jpeg"
    },
    {
      name: "Luffy Chan",
      role: "Lead Developer",
      img: "https://ik.imagekit.io/gopichakradhar/luffy/o4.jpeg"
    },
    {
      name: "Lucy",
      role: "UX Designer",
      img: "https://ik.imagekit.io/gopichakradhar/luffy/o3.jpeg"
    },
    {
      name: "Luffy Kun",
      role: "Marketing Manager",
      img: "https://ik.imagekit.io/gopichakradhar/luffy/o5.jpeg"
    },
    {
      name: "Monkey Chan",
      role: "Product Manager",
      img: "https://ik.imagekit.io/gopichakradhar/luffy/o6.jpeg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const updateCarousel = (index) => {
    if (animating) return;
    setAnimating(true);
    setCurrentIndex((index + teamMembers.length) % teamMembers.length);
    setTimeout(() => setAnimating(false), 800);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowUp") updateCarousel(currentIndex - 1);
      if (e.key === "ArrowDown") updateCarousel(currentIndex + 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  const getCardClass = (i) => {
    const offset =
      (i - currentIndex + teamMembers.length) % teamMembers.length;

    if (offset === 0) return "card center";
    if (offset === 1) return "card down-1";
    if (offset === 2) return "card down-2";
    if (offset === teamMembers.length - 1) return "card up-1";
    if (offset === teamMembers.length - 2) return "card up-2";
    return "card hidden";
  };

  return (
    <>
      <style>{css}</style>

      <div className="events-wrapper">
        <div className="main-container">
          {/* LEFT – CAROUSEL */}
          <div className="carousel-container">
            <div className="carousel-track">
              {teamMembers.map((m, i) => (
                <div
                  key={i}
                  className={getCardClass(i)}
                  onClick={() => updateCarousel(i)}
                >
                  <img src={m.img} alt={m.name} />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – INFO */}
          <div className="controls-section">
            <h2 className="member-name">{teamMembers[currentIndex].name}</h2>
            <p className="member-role">{teamMembers[currentIndex].role}</p>

            <div className="dots">
              {teamMembers.map((_, i) => (
                <div
                  key={i}
                  className={`dot ${i === currentIndex ? "active" : ""}`}
                  onClick={() => updateCarousel(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ======================= CSS ======================= */

const css = `
:root {
  --navbar-height: 80px;
}

* {
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont;
}

/* ---- PAGE WRAPPER (NAVBAR SAFE) ---- */
.events-wrapper {
  min-height: calc(100vh - var(--navbar-height));
  padding-top: var(--navbar-height);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ---- MAIN LAYOUT ---- */
.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;
  max-width: 1400px;
  width: 100%;
  padding: 40px;
}

/* ---- CAROUSEL ---- */
.carousel-container {
  height: 70vh;
  max-width: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1200px;
}

.carousel-track {
  position: relative;
  width: 520px;
  height: 100%;
  transform-style: preserve-3d;
}

/* ---- CARDS ---- */
.card {
  position: absolute;
  width: 460px;
  height: 260px;
  border-radius: 26px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 25px 50px rgba(0,0,0,0.18);
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.center {
  transform: scale(1.1);
  z-index: 10;
}

.up-1 {
  transform: translateY(-170px) scale(0.92);
  opacity: 0.9;
}

.up-2 {
  transform: translateY(-340px) scale(0.82);
  opacity: 0.6;
}

.down-1 {
  transform: translateY(170px) scale(0.92);
  opacity: 0.9;
}

.down-2 {
  transform: translateY(340px) scale(0.82);
  opacity: 0.6;
}

.hidden {
  opacity: 0;
  pointer-events: none;
}

/* ---- RIGHT SECTION ---- */
.controls-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 26px;
}

.member-name {
  font-size: 2.4rem;
  font-weight: 700;
  color: rgb(8, 42, 123);
}

.member-role {
  font-size: 1.2rem;
  color: #848696;
  letter-spacing: 3px;
  text-transform: uppercase;
}

/* ---- DOTS ---- */
.dots {
  display: flex;
  gap: 12px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(8,42,123,0.25);
  cursor: pointer;
  transition: 0.3s;
}

.dot.active {
  background: rgb(8,42,123);
  transform: scale(1.25);
}

/* ---- RESPONSIVE ---- */
@media (max-width: 900px) {
  .main-container {
    flex-direction: column;
    gap: 40px;
  }

  .controls-section {
    align-items: center;
    text-align: center;
  }
}
`;
