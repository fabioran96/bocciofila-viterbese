import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px", // Altezza della mappa
};

const center = {
  lat: 42.43353206938969, // Latitudine
  lng: 12.105717322717542, // Longitudine
};

const GoogleMapsComponent: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};


export default GoogleMapsComponent;