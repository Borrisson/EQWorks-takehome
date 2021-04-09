import { MapContainer, TileLayer, MapConsumer } from "react-leaflet";
import MarkerItem from "./MarkerItem";
import MarkerClusterGroup from "react-leaflet-markercluster";

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
      <MarkerClusterGroup>{parsedMarkers}</MarkerClusterGroup>
      <MapConsumer>
        {(map) => {
          console.log("map center:", map.getCenter());
          return null;
        }}
      </MapConsumer>
    </MapContainer>
  );
}
