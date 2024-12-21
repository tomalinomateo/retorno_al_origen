import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Sesiones from "./components/Sesiones";
import Formaciones from "./components/Formaciones";
import SobreMi from "./components/SobreMi";

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
      <Header
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
      />
      <main>
        <Banner scrollToSection={scrollToSection} />
        <Sesiones />
        <Formaciones />
        <SobreMi />
      </main>
    </div>
  );
}

export default App;
