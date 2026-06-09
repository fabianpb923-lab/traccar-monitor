import axios from "axios";

export const getPositions = async (deviceId?: number) => {
  const url = deviceId
    ? `https://traccar-monitor.onrender.com/positions?deviceId=${deviceId}`
    : `https://traccar-monitor.onrender.com/positions`;

  const response = await axios.get(url);

  return response.data;
};