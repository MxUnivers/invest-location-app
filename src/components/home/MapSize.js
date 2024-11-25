import { useEffect } from "react";
import { useMap } from "react-leaflet";

function MapResize() {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map]);

  return null;
}

// Ajoutez <MapResize /> dans votre composant `MapContainer`
<MapContainer>
  <MapResize />
  {/* Reste des composants */}
</MapContainer>
