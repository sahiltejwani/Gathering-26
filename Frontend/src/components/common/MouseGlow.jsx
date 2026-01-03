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
      className="fixed pointer-events-none rounded-full blur-[220px]"
      style={{
        width: "600px",
        height: "600px",
        left: mousePosition.x - 300,
        top: mousePosition.y - 300,
        background: `
          radial-gradient(
            circle,
            #fb923c 0%,
            #f97316 30%,
            rgba(180, 70, 10, 0.35) 55%,
            rgba(30, 10, 0, 0.2) 75%,
            rgba(0, 0, 0, 0.1) 100%
          )
        `,
        opacity: 0.6,
        zIndex: 1,
        transition: "transform 0.05s ease-out",
      }}
    />
  );
};

export default MouseGlow;
