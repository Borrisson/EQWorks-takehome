import { MapContainer, TileLayer, MapConsumer } from "react-leaflet";
import MarkerItem from "./MarkerItem";

export default function Map(state) {
  return (
    <MapContainer
      id="map"
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapConsumer>
        {(map) => {
          console.log("map center:", map.getCenter());
          return null;
        }}
      </MapConsumer>
      <MarkerItem />
    </MapContainer>
  );
}
