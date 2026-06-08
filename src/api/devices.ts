import axios from "axios";

export const getDevices = async () => {
  const response = await axios.get(
    "http://localhost:3001/devices"
  );

  return response.data;
};