"use client";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "1.5rem 0",
        borderTop: "1px solid #e5e5e5",
        textAlign: "center",
        fontSize: "0.9rem",
        color: "black",
        backgroundColor: "white",
      }}
    >
      <p>Weather App • Built with Next.js & Open‑Meteo</p>
      <p style={{ marginTop: "0.3rem" }}>
        © {new Date().getFullYear()} Jb2developer — All rights reserved
      </p>
    </footer>
  );
}