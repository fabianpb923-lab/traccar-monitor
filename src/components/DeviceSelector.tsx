import { useDevices } from "../hooks/useDevices";
import { useVehicleStore } from "../store/vehicleStore";
import { useAppStore } from "../store/appStore";
import type { Device } from "../types/device";


export const DeviceSelector = () => {
  const { data: devices, isLoading } =
    useDevices();

  const liveMode = useAppStore((s) => s.liveMode);
  const setLiveMode = useAppStore((s) => s.setLiveMode);


  const selectedDevice = useVehicleStore(
    (state) => state.selectedDevice
  );

  const setSelectedDevice = useVehicleStore(
    (state) => state.setSelectedDevice
  );

  if (isLoading) {
    return (
      <div className="mb-6 text-slate-400">
        Cargando vehículos...
      </div>
    );
  }

  return (
    <div className="mb-6">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm text-slate-300">Modo</div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLiveMode(false)}
            className={`px-3 py-1 rounded-md ${!liveMode ? "bg-violet-600 text-white" : "bg-slate-800 text-slate-300"}`}
          >
            Simulado
          </button>

          <button
            onClick={() => setLiveMode(true)}
            className={`px-3 py-1 rounded-md ${liveMode ? "bg-violet-600 text-white" : "bg-slate-800 text-slate-300"}`}
          >
            Live
          </button>
        </div>
      </div>
      <label
        htmlFor="vehicle"
        className="mb-2 block text-sm font-medium text-slate-300"
      >
        Seleccionar vehículo
      </label>

      <select
        id="vehicle"
        value={selectedDevice ?? ""}
        onChange={(e) =>
          setSelectedDevice(Number(e.target.value))
        }
        className="
          w-full
          rounded-xl
          border
          border-slate-700
          bg-slate-900
          px-4
          py-3
          text-white
          outline-none
          transition
          focus:border-violet-500
        "
      >
        <option value="">
          Seleccione un vehículo
        </option>

        {devices?.map((device: Device) => (
          <option
            key={device.id}
            value={device.id}
          >
            {device.name}
          </option>
        ))}
      </select>

      {devices && devices.length === 0 && (
        <div className="mt-3 rounded-md bg-yellow-900/30 px-4 py-3 text-sm text-yellow-300">
          Sin dispositivos en Traccar; usando datos simulados.
        </div>
      )}
    </div>
  );
};