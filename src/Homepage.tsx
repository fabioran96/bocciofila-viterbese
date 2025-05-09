import React, { useState, useEffect } from "react";
import "./Homepage.css"; 
import CursorFollower from "./CursorEffect";
import logo from "./assets/Bocciofila Viterbese logo.png"; 
import heroLogo from "./assets/logo-intero.png";
import GoogleMapsComponent from "./GoogleMaps";


const Homepage: React.FC = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  
  const immagini = [
    "/assets/foto1.JPG",
    "/assets/foto2.JPG",
    "/assets/foto3.JPG",
    "/assets/foto4.JPG",
    "/assets/foto6.JPG",
    "/assets/foto7.JPG",
    "/assets/foto8.JPG",
    "/assets/foto9.JPG",
    "/assets/foto10.JPG"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % immagini.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

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
        <div className="hero-container">
          <div className="background-gallery">
            {immagini.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Bocciodromo ${idx + 1}`}
                className={`background-slide ${idx === currentImageIndex ? "active" : ""}`}
              />
            ))}
          </div>
          <img src={heroLogo} alt="ASD Bocciofila Viterbese" className="hero-image" />
        </div>
      </section>

      

       {/* Chi siamo */}
       <section id="about" className="section">
        <h2>Chi siamo</h2>
        <p>Siamo il punto di riferimento a Viterbo e provincia per il nobile gioco delle bocce. Come società partecipiamo a competizioni di serie A, B, C.</p>
        <button onClick={() => (window.location.href = "/chi-siamo")}>Scopri di più</button>
      </section>

      {/* Bocciodromo */}
      <section id="bocciodromo" className="section">
        <h2>Bocciodromo</h2>
        <p>Scopri il nostro bocciodromo attrezzato per competizioni e allenamenti</p>
        <button onClick={() => (window.location.href = "/bocciodromo")}>Vai alla Gallery</button>
      </section>

      {/* Campionati */}
      <section id="campionati" className="section">
        <h2>Campionati</h2>
        <p>Partecipa ai nostri campionati e vivi la competizione al massimo...</p>
      </section>

      {/* Contatti */}
      <section id="contact" className="section">
        <h2>Contatti</h2>
        <p>Ci troviamo in Via Beata Maria de Mattias, lungo strada Teverina, adiacente alla Polisportiva Tuscia Santa Barbara "Da Meschini". </p>
        <p>Email: </p>
        <p>Telefono: </p>
        <GoogleMapsComponent /> {/* Componente Google Maps */}
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