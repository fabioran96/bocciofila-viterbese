import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import ChiSiamo from "./ChiSiamo";
import Bocciodromo from "./Bocciodromo";
import Campionati from "./Campionati";
import Contatti from "./Contatti";
import Sponsor from "./Sponsor";
import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/bocciodromo" element={<Bocciodromo />} />
        <Route path="/campionati" element={<Campionati />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/sponsor" element={<Sponsor />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);