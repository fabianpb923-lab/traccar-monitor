import { DeviceSelector } from "../components/DeviceSelector";
import { StatusCard } from "../components/StatusCard";
import { VehicleMap } from "../components/VehicleMap";

import { usePositions } from "../hooks/usePositions";
import { LoadingSkeleton } from "../components/LoadingSkeleton";
import { ErrorState } from "../components/ErrorState";
import { useVehicleStore } from "../store/vehicleStore";
import { useDevices } from "../hooks/useDevices";
import { useEffect } from "react";

export const Dashboard = () => {
  const selectedDevice = useVehicleStore((state) => state.selectedDevice);
  const setSelectedDevice = useVehicleStore((state) => state.setSelectedDevice);

  const { data: devices } = useDevices();

  // Ensure there's a selected device (default to first device)
  useEffect(() => {
    if (!selectedDevice && devices && devices.length > 0) {
      setSelectedDevice(devices[0].id);
    }
  }, [selectedDevice, devices, setSelectedDevice]);

  const { data: position, isLoading, isError, refetch } = usePositions(selectedDevice ?? undefined);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (isError) {
    return <ErrorState onRetry={() => refetch()} />;
  }

  const vehicleName =
    devices?.find((d) => d.id === selectedDevice)?.name ?? "Vehículo";

  return (
    <main className="min-h-screen bg-slate-950 p-6">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-6 text-3xl font-bold text-white">
          Vehicle Monitor
        </h1>

        <DeviceSelector />

        <div className="grid gap-6 lg:grid-cols-12">

            <div className="lg:col-span-4">
              <StatusCard
                vehicleName={vehicleName}
                speed={position?.speed ?? null}
                online={position?.ignition ?? null}
                lastUpdate={position?.lastUpdate ?? null}
              />
            </div>

          <div className="lg:col-span-8">
            <VehicleMap
                latitude={position?.latitude}
                longitude={position?.longitude}
            />
          </div>

        </div>

      </div>
    </main>
  );
};