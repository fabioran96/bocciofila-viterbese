import React, { useEffect } from "react";
import "./CursorFollower.css";
import boccia from "./assets/boccia.png"; // Percorso corretto per l'immagine

const CursorFollower: React.FC = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "cursor-follower";
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      const x = e.pageX; // Coordinate assolute della pagina
      const y = e.pageY; // Coordinate assolute della pagina

      cursor.style.transform = `translate(${x}px, ${y}px)`;
    };

    document.addEventListener("mousemove", moveCursor);

    // Cleanup quando il componente viene smontato
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return null; // Il cursore è gestito via DOM
};

export default CursorFollower;