import React, { useState } from "react";
import "./Homepage.css"; 
import CursorFollower from "./CursorEffect";
import logo from "./assets/Bocciofila Viterbese logo.png"; 
import heroLogo from "./assets/logo-intero.png";

const Homepage: React.FC = () => {
  

  const [menuOpen, setMenuOpen] = useState(false);

  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };
  return (
    <div className="homepage">
       <CursorFollower /> {/* Cursore personalizzato */}
      {/* Header */}
      <header className="homepage-header">
      <img
          src={logo}
          alt="Logo Bocciofila Viterbese"
          className="homepage-logo"
          onClick={scrollToTop} // Aggiungi l'evento onClick
          style={{ cursor: "pointer" }} // Aggiungi un cursore a forma di mano
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

      {/* Hero Section */}
      <section className="hero">
        <img src= {heroLogo} alt="ASD Bocciofila Viterbese" className="hero-image" />
      </section>

      

       {/* Chi siamo */}
       <section id="about" className="section">
        <h2>Chi siamo</h2>
        <p>Siamo una realtà sportiva dedicata alla passione per le bocce...</p>
      </section>

      {/* Bocciodromo */}
      <section id="bocciodromo" className="section">
        <h2>Bocciodromo</h2>
        <p>Scopri il nostro bocciodromo attrezzato per competizioni e allenamenti...</p>
      </section>

      {/* Campionati */}
      <section id="campionati" className="section">
        <h2>Campionati</h2>
        <p>Partecipa ai nostri campionati e vivi la competizione al massimo...</p>
      </section>

      {/* Contatti */}
      <section id="contact" className="section">
        <h2>Contatti</h2>
        <p>Contattaci per maggiori informazioni o per venire a trovarci...</p>
      </section>

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

export default Homepage;