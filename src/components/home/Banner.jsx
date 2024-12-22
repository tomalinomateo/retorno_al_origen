import React from "react";

import "./Banner.css";

const Banner = ({ scrollToSection }) => {
  return (
    <section id="banner">
      <div className="banner-text">
        Un espacio terapéutico diseñado para acompañarte en tu bienestar,
        equilibrio emocional y autodescubrimiento.
      </div>
      <div
        className="scroll-icon"
        onClick={() => scrollToSection("#sesiones")}
      ></div>
    </section>
  );
};

export default Banner;
