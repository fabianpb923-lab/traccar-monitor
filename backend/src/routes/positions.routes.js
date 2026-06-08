import { Router } from "express";
import axios from "axios";
import { getSessionCookie } from "../services/traccar.service.js";

const router = Router();

router.get("/", async (req, res) => {
  const deviceId = Number(req.query.deviceId) || 1;

  // If Traccar is configured, fetch latest position for the device
  if (process.env.TRACCAR_URL && process.env.TRACCAR_USER) {
    try {
      const cookie = await getSessionCookie();

      const response = await axios.get(
        `${process.env.TRACCAR_URL}/api/positions?deviceId=${deviceId}&limit=1`,
        {
          headers: {
            Cookie: cookie,
          },
        }
      );

      // Traccar returns an array of positions; use first or return empty
      const data = response.data && response.data.length ? response.data[0] : null;

      if (data) {
        return res.json(data);
      }
    } catch (error) {
      console.error("Error fetching positions from Traccar:", error.response?.status, error.response?.data || error.message);
      // fall through to return mock data
    }
  }

  // Fallback mock positions
  const positions = {
    1: {
      deviceId: 1,
      latitude: 4.711,
      longitude: -74.0721,
      speed: 62,
      ignition: true,
      lastUpdate: new Date(),
    },
    2: {
      deviceId: 2,
      latitude: 6.2442,
      longitude: -75.5812,
      speed: 48,
      ignition: true,
      lastUpdate: new Date(),
    },
    3: {
      deviceId: 3,
      latitude: 3.4516,
      longitude: -76.532,
      speed: 0,
      ignition: false,
      lastUpdate: new Date(),
    },
  };

  const result = positions[deviceId] || positions[1];

  res.json(result);
});

export default router;