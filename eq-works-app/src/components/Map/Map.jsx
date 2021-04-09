import { MapContainer, TileLayer, MapConsumer } from "react-leaflet";
import MarkerItem from "./MarkerItem";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map({ poi }) {
  const parsedMarkers = poi.map((obj) => {
    return <MarkerItem key={obj.poi_id} {...obj} />;
  });
  const bounds = poi.map(({ lat, lon }) => [lat, lon]);
  return (
    <MapContainer id="map" bounds={bounds} zoom={13} scrollWheelZoom={true}>
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
      {parsedMarkers}
    </MapContainer>
  );
}
