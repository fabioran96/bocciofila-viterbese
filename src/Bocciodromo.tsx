import React from "react";
import "./Homepage.css"
import Layout from "./Layout";
import "./Global.css";
import "./Gallery.css";

const imagePaths = [
  "/bocciodromo/IMG_5984.jpg",
  "/bocciodromo/IMG_5985.jpg",
  "/bocciodromo/IMG_5986.jpg",
  "/bocciodromo/IMG_5987.jpg",
  "/bocciodromo/IMG_5988.jpg",
];

const Bocciodromo: React.FC = () => {
  return (
    <Layout>
    <div className="page">
      <h1>Bocciodromo</h1>
      <p>Scopri tutto sul nostro bocciodromo, i tornei e gli eventi in programma.</p>

      {/* Gallery */}
      <div className="gallery">
          {imagePaths.map((src, index) => (
            <img key={index} src={src} alt={`Bocciodromo ${index + 1}`} className="gallery-image" />
          ))}
        </div>
    </div>
    </Layout>  
  );
};

export default Bocciodromo;