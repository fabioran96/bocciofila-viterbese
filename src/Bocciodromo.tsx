import React, { useState } from "react";
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
  "/assets/foto1.JPG",
  "/assets/foto2.JPG",
  "/assets/foto3.JPG",
  "/assets/foto4.JPG",
  "/assets/foto6.JPG",
  "/assets/foto7.JPG",
  "/assets/foto8.JPG",
  "/assets/foto9.JPG",
  "/assets/foto10.JPG",
  "/assets/foto11.JPG",
  "/assets/foto12.JPG",
  "/assets/foto13.JPG",
  "/assets/foto14.JPG",
  "/assets/foto15.JPG",
  "/assets/foto16.JPG",
  "/assets/foto17.JPG",
  "/assets/foto18.JPG",
  "/assets/foto19.JPG",
  "/assets/foto20.JPG",

];

const Bocciodromo: React.FC = () => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <Layout>
    <div className="page">
      <h1>Bocciodromo</h1>
      <p></p>

      {/* Gallery */}
      <div className="gallery">
          {imagePaths.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Bocciodromo ${index + 1}`}
              className="gallery-image"
              onClick={() => {
                setFullscreenImage(src);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
        {fullscreenImage && (
          <div className="fullscreen-overlay" onClick={() => setFullscreenImage(null)}>
            <button className="close-button" onClick={() => setFullscreenImage(null)}>×</button>
            <button className="nav-button left" onClick={(e) => {
              e.stopPropagation();
              const prevIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
              setFullscreenImage(imagePaths[prevIndex]);
              setCurrentIndex(prevIndex);
            }}>‹</button>
            <img src={fullscreenImage} alt="Fullscreen" className="fullscreen-image" />
            <button className="nav-button right" onClick={(e) => {
              e.stopPropagation();
              const nextIndex = (currentIndex + 1) % imagePaths.length;
              setFullscreenImage(imagePaths[nextIndex]);
              setCurrentIndex(nextIndex);
            }}>›</button>
          </div>
        )}
    </div>
    </Layout>  
  );
};

export default Bocciodromo;