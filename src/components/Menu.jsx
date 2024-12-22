import React from "react";
import "./Menu.css";

const Menu = ({ menuOpen, closeMenu }) => {
  return (
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
              src="/photos//instagram.png"
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
              src="/photos//whatsapp_icon.png"
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
              src="/photos//spotify_white_3.png"
              alt="Spotify"
              style={{ width: "24px", height: "24px" }}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
