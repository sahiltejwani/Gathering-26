// Passes.jsx
import React from "react";

const events = [
  {
    name: "Star Night",
    time: "7:00 PM · Main Stage",
    desc: "Celebrity performances, band showdown, and a dazzling light show.",
    image:
      "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Tech Expo",
    time: "11:00 AM · Innovation Hall",
    desc: "Showcase of projects, AR/VR zone, and live tech demos.",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Cultural Fiesta",
    time: "4:00 PM · Open Arena",
    desc: "Dance, drama, and folk performances from across the country.",
    image:
      "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Gaming Arena",
    time: "1:00 PM · Lab Block",
    desc: "E-sports tournaments, casual gaming zone, and mini-prizes.",
    image:
      "https://images.pexels.com/photos/786244/pexels-photo-786244.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Art & Open Mic",
    time: "3:00 PM · Studio Lounge",
    desc: "Live music, poetry, stand-up, and art exhibition corners.",
    image:
      "https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    padding: "3rem 1.5rem 3.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    color: "#f9fafb",
    background:
      "radial-gradient(circle at top, #1d4ed8 0, #020617 55%, #000000 100%)",
    overflow: "hidden"
  },
  bgGradient: {
    position: "absolute",
    inset: "-40%",
    background:
      "radial-gradient(circle at 10% 20%, rgba(56,189,248,0.25), transparent 60%)," +
      "radial-gradient(circle at 80% 0%, rgba(236,72,153,0.3), transparent 55%)," +
      "radial-gradient(circle at 50% 100%, rgba(94,234,212,0.25), transparent 60%)",
    filter: "blur(10px)",
    opacity: 0.9,
    zIndex: 0
  },
  hero: {
    position: "relative",
    textAlign: "center",
    maxWidth: "720px",
    zIndex: 1,
    marginBottom: "2.5rem"
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.25rem 0.8rem",
    borderRadius: "999px",
    fontSize: "0.75rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    background: "rgba(15,23,42,0.75)",
    border: "1px solid rgba(148,163,184,0.4)",
    boxShadow: "0 0 0 1px rgba(15,23,42,0.7)",
    marginBottom: "0.75rem"
  },
  title: {
    fontSize: "2.4rem",
    lineHeight: 1.1,
    margin: 0,
    letterSpacing: "-0.04em"
  },
  subtitle: {
    marginTop: "0.8rem",
    marginBottom: 0,
    fontSize: "0.95rem",
    color: "rgba(226,232,240,0.9)",
    maxWidth: "560px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  main: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    maxWidth: "1200px"
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.6rem"
  },
  card: {
    position: "relative",
    padding: "0", // we will handle padding inside body
    borderRadius: "1.5rem",
    background:
      "linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.78))",
    border: "1px solid rgba(148,163,184,0.25)",
    boxShadow:
      "0 22px 50px rgba(15,23,42,0.95), 0 0 0 1px rgba(15,23,42,0.6)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    overflow: "hidden",
    transition:
      "transform 200ms ease, box-shadow 200ms ease, border 200ms ease",
    cursor: "pointer",
    minHeight: "320px",
    maxWidth: "100%"
  },
  cardGlow: {
    position: "absolute",
    inset: "-50%",
    background:
      "radial-gradient(circle at 10% 0, rgba(56,189,248,0.18), transparent 55%)," +
      "radial-gradient(circle at 80% 100%, rgba(236,72,153,0.24), transparent 55%)",
    opacity: 0,
    transition: "opacity 200ms ease",
    pointerEvents: "none"
  },
  cardImageWrapper: {
    position: "relative",
    height: "150px",
    overflow: "hidden"
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "scale(1.05)",
    transition: "transform 200ms ease"
  },
  cardBody: {
    padding: "1.4rem 1.6rem 1.3rem"
  },
  cardTitle: {
    fontSize: "1.2rem",
    margin: 0,
    marginBottom: "0.3rem"
  },
  cardMeta: {
    margin: 0,
    fontSize: "0.82rem",
    color: "rgba(148,163,184,0.95)",
    marginBottom: "0.9rem"
  },
  cardDesc: {
    margin: 0,
    fontSize: "0.9rem",
    color: "rgba(226,232,240,0.95)",
    marginBottom: "1.1rem"
  },
  cardButton: {
    width: "100%",
    marginTop: "0.2rem",
    padding: "0.7rem 0.9rem",
    borderRadius: "1rem",
    border: "none",
    outline: "none",
    fontSize: "0.8rem",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#e5e7eb",
    background:
      "linear-gradient(120deg, #2563eb, #7c3aed, #ec4899)",
    backgroundSize: "200% 100%",
    boxShadow: "0 14px 32px rgba(37,99,235,0.55)",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    transition:
      "background-position 200ms ease, transform 160ms ease, box-shadow 160ms ease"
  },
  getPassWrapper: {
    marginTop: "3rem",
    textAlign: "center"
  },
  getPassButton: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.9rem 2.1rem",
    borderRadius: "999px",
    border: "1px solid rgba(248,250,252,0.9)",
    background:
      "radial-gradient(circle at 0 0, rgba(56,189,248,0.2), transparent 60%)," +
      "radial-gradient(circle at 100% 100%, rgba(236,72,153,0.3), transparent 60%)," +
      "rgba(15,23,42,0.95)",
    color: "#f9fafb",
    fontSize: "0.9rem",
    fontWeight: 600,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    cursor: "pointer",
    boxShadow:
      "0 22px 60px rgba(15,23,42,0.95), 0 0 0 1px rgba(148,163,184,0.4)",
    overflow: "hidden",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    transition:
      "transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease"
  },
  getPassGlow: {
    position: "absolute",
    inset: "-40%",
    background:
      "conic-gradient(from 180deg, rgba(56,189,248,0.35), rgba(236,72,153,0.45), rgba(52,211,153,0.4), rgba(56,189,248,0.35))",
    opacity: 0,
    mixBlendMode: "screen",
    transition: "opacity 220ms ease",
    pointerEvents: "none"
  }
};

const Passes = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [getPassHover, setGetPassHover] = React.useState(false);

  return (
    <div style={styles.page}>
      <div style={styles.bgGradient} />

      <header style={styles.hero}>
        <p style={styles.badge}>Annual Gathering • 2025</p>
        <h1 style={styles.title}>College Event Passes</h1>
        <p style={styles.subtitle}>
          Pick your favourite events and grab your{" "}
          <span style={{ fontWeight: 600 }}>Get pass</span> to enter the
          celebration.
        </p>
      </header>

      <main style={styles.main}>
        <section style={styles.cardGrid}>
          {events.map((event, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <article
                key={index}
                style={{
                  ...styles.card,
                  transform: isHovered
                    ? "translateY(-8px) scale(1.03)"
                    : "translateY(0) scale(1)",
                  boxShadow: isHovered
                    ? "0 26px 70px rgba(15,23,42,1)"
                    : styles.card.boxShadow,
                  border: isHovered
                    ? "1px solid rgba(129,140,248,0.9)"
                    : styles.card.border
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  style={{
                    ...styles.cardGlow,
                    opacity: isHovered ? 1 : 0
                  }}
                />
                <div style={styles.cardImageWrapper}>
                  <img
                    src={event.image}
                    alt={event.name}
                    style={{
                      ...styles.cardImage,
                      transform: isHovered ? "scale(1.08)" : "scale(1.05)"
                    }}
                  />
                </div>
                <div style={styles.cardBody}>
                  <h2 style={styles.cardTitle}>{event.name}</h2>
                  <p style={styles.cardMeta}>{event.time}</p>
                  <p style={styles.cardDesc}>{event.desc}</p>
                  <button
                    type="button"
                    style={{
                      ...styles.cardButton,
                      backgroundPosition: isHovered ? "0% 0%" : "100% 0%",
                      transform: isHovered
                        ? "translateY(-1px)"
                        : "translateY(0)",
                      boxShadow: isHovered
                        ? "0 18px 40px rgba(79,70,229,0.7)"
                        : styles.cardButton.boxShadow
                    }}
                  >
                    Get Passes
                  </button>
                </div>
              </article>
            );
          })}
        </section>

        {/* Only Get Pass button (footer text removed) */}
        {/* <div style={styles.getPassWrapper}>
          <button
            type="button"
            style={{
              ...styles.getPassButton,
              transform: getPassHover
                ? "translateY(-2px) scale(1.02)"
                : "translateY(0) scale(1)",
              boxShadow: getPassHover
                ? "0 28px 80px rgba(15,23,42,1)"
                : styles.getPassButton.boxShadow,
              borderColor: getPassHover
                ? "rgba(250,250,250,1)"
                : styles.getPassButton.border
            }}
            onMouseEnter={() => setGetPassHover(true)}
            onMouseLeave={() => setGetPassHover(false)}
          >
            Get Pass
            <span
              style={{
                ...styles.getPassGlow,
                opacity: getPassHover ? 1 : 0
              }}
            />
          </button>
        </div> */}
      </main>
    </div>
  );
};

export default Passes;
