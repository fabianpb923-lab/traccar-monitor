import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import { type LatLngExpression } from "leaflet";


interface VehicleMapProps {
  latitude?: number;
  longitude?: number;
  vehicleName?: string;
}

export const VehicleMap = ({
  latitude = 4.711,
  longitude = -74.0721,
  vehicleName = ""
}: VehicleMapProps) => {

    const center: LatLngExpression = [latitude, longitude];

  return (
    <div className="h-[600px] w-full overflow-hidden rounded-2xl border border-slate-800 shadow-xl">
      <MapContainer
        center={center}
        zoom={15}
        scrollWheelZoom
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={center}>
          <Popup>
            {vehicleName || "Vehículo seleccionado"}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};