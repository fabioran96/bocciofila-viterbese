import React from "react";
import "./Homepage.css"
import Layout from "./Layout";

const Bocciodromo: React.FC = () => {
  return (
    <Layout>
    <div className="page">
      <h1>Bocciodromo</h1>
      <p>Scopri tutto sul nostro bocciodromo, i tornei e gli eventi in programma.</p>
    </div>
    </Layout>  
  );
};

export default Bocciodromo;