import React from "react";
import Layout from "./Layout";
import "./Global.css"

const ChiSiamo: React.FC = () => {
  return (
    <Layout>
      <section className="page">
        <h1>Chi Siamo</h1>
        <p>Scopri la nostra storia e la passione per le bocce.</p>
      </section>
    </Layout>
  );
};

export default ChiSiamo;