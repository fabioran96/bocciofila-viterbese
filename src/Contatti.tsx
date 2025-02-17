import React from "react";
import Layout from "./Layout";
import "./Global.css"
import GoogleMapsComponent from "./GoogleMaps";


const Contatti: React.FC = () => {
  return (
    <Layout>
     <div className="page">
       <h1>Contatti</h1>
       <p>Ci troviamo in Via Beata Maria de Mattias, lungo strada Teverina, adiacente alla Polisportiva Tuscia Santa Barbara "Da Meschini". </p>
        <p>Email: </p>
        <p>Telefono: </p>
       <GoogleMapsComponent />
     </div>
    </Layout>  );
};

export default Contatti;