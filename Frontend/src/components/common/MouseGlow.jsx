import React, { useEffect, useState } from "react";

const MouseGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none rounded-full blur-[130px]"
      style={{
        width: "320px",
        height: "320px",
        left: mousePosition.x - 160,
        top: mousePosition.y - 160,
        background: `
          radial-gradient(
            circle,
            #fb923c 0%,
            #f97316 28%,
            rgba(180, 70, 10, 0.35) 48%,
            rgba(30, 10, 0, 0.18) 65%,
            rgba(0, 0, 0, 0.05) 100%
          )
        `,
        opacity: 0.55,
        zIndex: 1,
        transition: "transform 0.06s ease-out",
      }}
    />
  );
};

export default MouseGlow;
