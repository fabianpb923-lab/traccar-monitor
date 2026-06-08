import { useQuery } from "@tanstack/react-query";
import { getDevices } from "../api/devices";
import { useAppStore } from "../store/appStore";
import type { Device } from "../types/device";

const mockDevices: Device[] = [
  { id: 1, name: "Camión Bogotá", status: "online" },
  { id: 2, name: "Camión Medellín", status: "online" },
  { id: 3, name: "Camión Cali", status: "offline" },
];

export const useDevices = () => {
  const liveMode = useAppStore((s) => s.liveMode);

  return useQuery<Device[]>({
    queryKey: ["devices", liveMode],
    queryFn: () => (liveMode ? getDevices() : Promise.resolve(mockDevices)),
  });
};