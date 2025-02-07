import React, { useState } from "react";
import logo from "./assets/Bocciofila Viterbese logo.png"; // Mantieni il percorso del logo
import "./Homepage.css"; // Usa gli stessi stili

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const goToHomepage = () => {
    window.location.href = "/"; // Reindirizza all'homepage
    setMenuOpen(false);
  };

  return (
    <div className="layout">
      {/* Header */}
      <header className="homepage-header">
        <img
          src={logo}
          alt="Logo Bocciofila Viterbese"
          className="homepage-logo"
          onClick={goToHomepage} // Aggiungi l'evento onClick
          style={{ cursor: "pointer" }} // Cursore a forma di mano
        />
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)} // Mostra/nascondi il menu
        >
          ☰
        </button>
        <nav className={`homepage-nav ${menuOpen ? "open" : ""}`}>
          <button onClick={() => (window.location.href = "/chi-siamo")}>Chi siamo</button>
          <button onClick={() => (window.location.href = "/bocciodromo")}>Bocciodromo</button>
          <button onClick={() => (window.location.href = "/campionati")}>Campionati</button>
          <button onClick={() => (window.location.href = "/contatti")}>Contatti</button>
          <button onClick={() => (window.location.href = "/sponsor")}>Sponsor</button>
        </nav>
      </header>

      {/* Contenuto principale */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="homepage-footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} ASD Bocciofila Viterbese. Tutti i diritti riservati.</p>
          <p>
            <a href="#about">Chi siamo</a> | 
            <a href="#bocciodromo"> Bocciodromo</a> | 
            <a href="#campionati"> Campionati</a> | 
            <a href="#contact"> Contatti</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;