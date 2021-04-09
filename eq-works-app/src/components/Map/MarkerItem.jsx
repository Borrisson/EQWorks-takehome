import { Marker, Popup } from "react-leaflet";

export default function MarkerItem({ lat, lon, name }) {
  return (
    <Marker position={[lat, lon]}>
      <Popup>{name}</Popup>
    </Marker>
  );
}
