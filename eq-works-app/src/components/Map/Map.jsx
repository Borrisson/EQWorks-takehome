import { MapContainer, TileLayer, MapConsumer, Marker } from "react-leaflet";
import MarkerItem from "./MarkerItem";

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
