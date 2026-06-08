import { create } from "zustand";

interface VehicleStore {
  selectedDevice: number | null;
  setSelectedDevice: (id: number) => void;
}

export const useVehicleStore = create<VehicleStore>((set) => ({
  selectedDevice: null,

  setSelectedDevice: (id) =>
    set({
      selectedDevice: id,
    }),
}));