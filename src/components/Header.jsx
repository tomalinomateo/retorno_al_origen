import React from "react";
import Menu from "./Menu";
import "./Header.css";

const Header = ({ menuOpen, toggleMenu, closeMenu }) => {
  return (
    <header>
      <div className="header">
        <img src="/photos//logo-sin-texto.jpg" alt="Logo" />
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
      <Menu menuOpen={menuOpen} closeMenu={closeMenu} />
    </header>
  );
};

export default Header;
