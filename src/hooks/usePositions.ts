import { useQuery } from "@tanstack/react-query";
import { getPositions } from "../api/positions";
import { useAppStore } from "../store/appStore";
import type { Position } from "../types/position";

const mockPositions: Record<number, Position> = {
  1: {
    deviceId: 1,
    latitude: 4.711,
    longitude: -74.0721,
    speed: 62,
    ignition: true,
    lastUpdate: new Date().toISOString(),
  },
  2: {
    deviceId: 2,
    latitude: 6.2442,
    longitude: -75.5812,
    speed: 48,
    ignition: true,
    lastUpdate: new Date().toISOString(),
  },
  3: {
    deviceId: 3,
    latitude: 3.4516,
    longitude: -76.532,
    speed: 0,
    ignition: false,
    lastUpdate: new Date().toISOString(),
  },
};

export const usePositions = (deviceId?: number) => {
  const liveMode = useAppStore((s) => s.liveMode);

  return useQuery({
    queryKey: ["positions", deviceId, liveMode],
    queryFn: () =>
      liveMode
        ? getPositions(deviceId)
        : Promise.resolve(mockPositions[deviceId ?? 1] || mockPositions[1]),
    refetchInterval: liveMode ? 15000 : false,
  });
};