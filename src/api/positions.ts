import axios from "axios";

export const getPositions = async (deviceId?: number) => {
  const url = deviceId
    ? `http://localhost:3001/positions?deviceId=${deviceId}`
    : `http://localhost:3001/positions`;

  const response = await axios.get(url);

  return response.data;
};