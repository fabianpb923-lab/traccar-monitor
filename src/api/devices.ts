import axios from "axios";

export const getDevices = async () => {
  const response = await axios.get(
    "https://traccar-monitor.onrender.com/devices"
  );

  return response.data;
};