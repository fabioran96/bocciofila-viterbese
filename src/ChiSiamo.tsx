import React from "react";
import Layout from "./Layout";
import "./Global.css"

const ChiSiamo: React.FC = () => {
  return (
    <Layout>
      <section className="page">
        <h1>Chi Siamo</h1>
        <p>Siamo il punto di riferimento a Viterbo e provincia per il nobile gioco delle bocce. Come società partecipiamo a competizioni di serie A, B, C.</p>
        <h2>I nostri tesserati</h2>

        <table className="simple-table">
          <thead>
            <tr>
              <th>Cognome</th>
              <th>Nome</th>
              <th>Data di Nascita</th>
              <th>Ruolo</th>
              <th>Categoria</th>
              <th>Disciplina</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Antinozzi</td>
              <td>Gianni</td>
              <td>25/02/1969</td>
              <td>Atleta</td>
              <td>Senior</td>
              <td>Petanque - D</td>
            </tr>
            <tr><td>Barisonzi</td><td>Luca</td><td>02/05/1990</td><td>Atleta Paralimpico</td><td>Boccia / BC3</td><td>Boccia</td></tr>
            <tr><td>Basile</td><td>Nicola</td><td>18/07/1969</td><td>Atleta</td><td>Senior</td><td>Raffa - C</td></tr>
            <tr><td>Basile</td><td>Nicola</td><td>18/07/1969</td><td>Dirigente</td><td>Consigliere Societario</td><td>-</td></tr>
            <tr><td>Basile</td><td>Vito</td><td>07/02/1968</td><td>Socio</td><td>-</td><td>-</td></tr>
            <tr><td>Berni</td><td>Elio</td><td>29/09/1935</td><td>Socio</td><td>-</td><td>-</td></tr>
            <tr><td>Berni</td><td>Francesco</td><td>07/07/1965</td><td>Socio</td><td>-</td><td>-</td></tr>
            <tr><td>Bizzarri</td><td>Sandro</td><td>10/12/1957</td><td>Atleta</td><td>Senior</td><td>Raffa - C</td></tr>
            <tr><td>Bizzarri</td><td>Sandro</td><td>10/12/1957</td><td>Dirigente</td><td>Direttore sportivo</td><td>-</td></tr>
            <tr><td>Boni</td><td>Giovanni</td><td>08/02/1944</td><td>Atleta</td><td>Senior</td><td>Raffa - C</td></tr>
            <tr><td>Buzzi</td><td>Aldo</td><td>09/05/1944</td><td>Socio</td><td>-</td><td>Raffa</td></tr>
            <tr><td>Camilli</td><td>Mariano</td><td>03/02/1958</td><td>Atleta</td><td>Senior</td><td>Raffa - C</td></tr>
            <tr><td>Dibartolo</td><td>Lorenzo</td><td>27/08/2006</td><td>Atleta</td><td>Senior</td><td>Raffa - C</td></tr>
            <tr><td>Dibartolo</td><td>Rocco Maria</td><td>02/03/2004</td><td>Atleta</td><td>Senior</td><td>Raffa - C</td></tr>
            <tr><td>Ferri</td><td>Nino</td><td>19/09/1946</td><td>Atleta</td><td>Senior</td><td>Raffa - C</td></tr>
            <tr><td>Liorni</td><td>Luigino</td><td>30/04/1964</td><td>Atleta</td><td>Senior</td><td>Raffa - C</td></tr>
            <tr><td>Liorni</td><td>Luigino</td><td>30/04/1964</td><td>Dirigente</td><td>Vice Presidente Societario</td><td>-</td></tr>
            <tr><td>Lombardi</td><td>Michael</td><td>17/06/1996</td><td>Atleta</td><td>Senior</td><td>Raffa - C</td></tr>
            <tr><td>Monti</td><td>Daniele</td><td>12/09/1973</td><td>Atleta</td><td>Senior</td><td>Raffa - C</td></tr>
            <tr><td>Nardo</td><td>Giuseppe Carmelo</td><td>16/07/1960</td><td>Atleta</td><td>Senior</td><td>Raffa - C</td></tr>
            <tr><td>Montini</td><td>Vincenzo Maria</td><td>18/09/1944</td><td>Socio</td><td>-</td><td>-</td></tr>
            <tr><td>Paglia</td><td>Gianfranco</td><td>17/07/1970</td><td>Atleta Paralimpico</td><td>HF / Sitting</td><td>Fisica Sitting (Bocce per disabili)</td></tr>
            <tr><td>Pallucca</td><td>Marco</td><td>26/01/1983</td><td>Atleta</td><td>Senior</td><td>Raffa - C</td></tr>
            <tr><td>Pallucca</td><td>Marco</td><td>26/01/1983</td><td>Dirigente</td><td>Consigliere Societario</td><td>-</td></tr>
            <tr><td>Pasquali</td><td>Gaetano</td><td>14/04/1957</td><td>Atleta</td><td>Senior</td><td>Raffa - C</td></tr>
            <tr><td>Peruzzi</td><td>Damiano</td><td>20/01/2009</td><td>Atleta</td><td>Under 18</td><td>Raffa</td></tr>
            <tr><td>Proietti</td><td>Giuliano</td><td>14/05/1960</td><td>Atleta</td><td>Senior</td><td>Raffa - D</td></tr>
            <tr><td>Ranocchiari</td><td>Angelo</td><td>11/06/1964</td><td>Atleta</td><td>Senior</td><td>Raffa - C</td></tr>
            <tr><td>Ranocchiari</td><td>Angelo</td><td>11/06/1964</td><td>Dirigente</td><td>Presidente</td><td>-</td></tr>
            <tr><td>Romano</td><td>Rodolfo</td><td>23/11/1977</td><td>Atleta</td><td>Senior</td><td>Raffa - C</td></tr>
            <tr><td>Segatori</td><td>David</td><td>07/11/1974</td><td>Atleta</td><td>Senior</td><td>Raffa - C</td></tr>
            <tr><td>Segatori</td><td>Ermanno</td><td>14/01/1942</td><td>Socio</td><td>-</td><td>-</td></tr>
            <tr><td>Sensi</td><td>Adriano</td><td>24/11/1966</td><td>Atleta</td><td>Senior</td><td>Raffa - C</td></tr>
            <tr><td>Sterpa</td><td>Sesto</td><td>12/12/1950</td><td>Atleta</td><td>Senior</td><td>Raffa - C</td></tr>
            <tr><td>Torzi</td><td>Francesco</td><td>01/07/1975</td><td>Atleta</td><td>Senior</td><td>Raffa - C</td></tr>
            <tr><td>Tumminia</td><td>Salvatore</td><td>01/03/1976</td><td>Atleta</td><td>Senior</td><td>Raffa - D</td></tr>
          </tbody>
          
        </table>

        </section>
    </Layout>
  );
};

export default ChiSiamo;