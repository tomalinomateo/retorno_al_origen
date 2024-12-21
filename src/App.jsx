import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("menu-open", !menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove("menu-open");
  };

  const scrollToSection = (sectionId) => {
    document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src="src/photos/logo-sin-texto.jpg" alt="Logo" />
          <h1 className="header-title">
            Retorno al Origen{" "}
            <span className="subtitle">por M. Cruz Lanteri</span>
          </h1>
        </div>
        <div
          className={`hamburger-menu ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav className="nav-menu">
          <ul className={menuOpen ? "show" : ""}>
            <li>
              <a href="#inicio" onClick={closeMenu}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#sesiones" onClick={closeMenu}>
                Sesiones
              </a>
            </li>
            <li>
              <a href="#formaciones" onClick={closeMenu}>
                Formaciones
              </a>
            </li>
            <li>
              <a href="#sobre-mi" onClick={closeMenu}>
                Sobre mi
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/retornoalorigen__/"
                target="_blank"
                className="social-icon"
              >
                <img
                  src="src/photos/instagram.png"
                  alt="Instagram"
                  style={{ width: "24px", height: "24px" }}
                />
              </a>
              <a
                href="https://wa.me/+5493516326058"
                target="_blank"
                className="social-icon"
              >
                <img
                  src="src/photos/whatsapp_icon.png"
                  alt="WhatsApp"
                  style={{ width: "24px", height: "24px" }}
                />
              </a>
              <a
                href="https://open.spotify.com/show/2FQxlaW3mOl05fHDkAOkl6?si=eaa39b02adde444b"
                target="_blank"
                className="social-icon"
              >
                <img
                  src="src/photos/spotify_white_3.png"
                  alt="Spotify"
                  style={{ width: "24px", height: "24px" }}
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
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
        <section id="sesiones">
          <div className="content">
            <h2>SESIONES</h2>
            <img src="src/photos/cruz_ritual.jpg" alt="Cruz Ritual" />
            <div className="text">
              <p>
                En nuestras sesiones, te acompañamos en un viaje de
                autodescubrimiento y sanación. Utilizamos diversas técnicas
                terapéuticas para ayudarte a encontrar el equilibrio emocional y
                el bienestar.
              </p>
              <a href="#contacto" className="button">
                Reserva tu sesión
              </a>
            </div>
          </div>
        </section>
        <section id="formaciones">
          <h2>Formaciones</h2>
        </section>
        <section id="sobre-mi">
          <h2>Sobre mi</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
