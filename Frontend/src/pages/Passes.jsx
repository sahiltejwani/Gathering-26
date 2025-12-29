import React, { useState } from "react";
import { passes } from "../data/passes";

const styles = {
  page: {
    minHeight: "100vh",
    padding: "3rem 1.5rem",
    background:
      "radial-gradient(circle at top, #1e3a8a 0%, #020617 60%)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  title: {
    fontSize: "2.8rem",
    fontWeight: "700",
    marginBottom: "0.5rem"
  },

  subtitle: {
    opacity: 0.8,
    marginBottom: "3rem"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.8rem",
    width: "100%",
    maxWidth: "1200px"
  },

  card: {
    background: "rgba(15,23,42,0.9)",
    borderRadius: "1.2rem",
    overflow: "hidden",
    transition: "0.3s ease",
    cursor: "pointer",
    border: "1px solid rgba(255,255,255,0.1)"
  },

  img: {
    width: "100%",
    height: "180px",
    objectFit: "cover"
  },

  body: {
    padding: "1.2rem"
  },

  name: {
    fontSize: "1.2rem",
    fontWeight: "600"
  },

  time: {
    fontSize: "0.85rem",
    opacity: 0.7,
    margin: "0.3rem 0"
  },

  desc: {
    fontSize: "0.9rem",
    opacity: 0.9,
    marginBottom: "1rem"
  },

  button: {
    padding: "0.5rem 1.2rem",
    borderRadius: "999px",
    border: "none",
    background: "linear-gradient(90deg,#6366f1,#8b5cf6)",
    color: "#fff",
    cursor: "pointer"
  }
};

const Passes = () => {
  const [hover, setHover] = useState(null);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Event Passes</h1>
      <p style={styles.subtitle}>Choose your favorite event</p>

      <div style={styles.grid}>
        {passes.map((event, i) => (
          <div
            key={i}
            style={{
              ...styles.card,
              transform: hover === i ? "translateY(-6px)" : "none",
              boxShadow:
                hover === i
                  ? "0 20px 40px rgba(0,0,0,0.5)"
                  : "none"
            }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
          >
            <img src={event.image} alt={event.name} style={styles.img} />

            <div style={styles.body}>
              <h3 style={styles.name}>{event.name}</h3>
              <p style={styles.time}>{event.time}</p>
              <p style={styles.desc}>{event.desc}</p>

              <button style={styles.button}>Get Pass</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Passes;
