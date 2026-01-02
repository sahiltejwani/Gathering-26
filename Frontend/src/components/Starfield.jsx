import { useEffect, useRef } from "react";

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const stars = [];

    // ⭐ More stars (denser)
    const STAR_COUNT = Math.floor((width * height) / 5000);

    class Star {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        // ⭐ Bigger stars
        this.radius = Math.random() * 1.8 + 0.8;

        // Slow elegant motion
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;

        // ✨ Brighter base opacity
        this.opacity = Math.random() * 0.6 + 0.4;

        // ✨ Twinkle speed
        this.twinkleSpeed = Math.random() * 0.015 + 0.005;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        // ✨ Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(255,255,255,0.9)";
        ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
        ctx.fill();

        ctx.shadowBlur = 0;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // ✨ Smooth twinkling
        this.opacity += Math.sin(Date.now() * this.twinkleSpeed) * 0.01;
        this.opacity = Math.max(0.4, Math.min(1, this.opacity));
      }
    }

    // Create stars
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push(new Star());
    }

    // 🔗 Brighter connections
    const connectStars = () => {
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.strokeStyle = `rgba(255,255,255,${0.6 - dist / 250})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      connectStars();
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
};

export default Starfield;
