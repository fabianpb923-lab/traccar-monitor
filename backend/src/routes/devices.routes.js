import { Router } from "express";
import axios from "axios";
import { getSessionCookie } from "../services/traccar.service.js";

const router = Router();

router.get("/", async (req, res) => {
  // If Traccar is configured, fetch devices from Traccar API
  if (process.env.TRACCAR_URL && process.env.TRACCAR_USER) {
    try {
      const cookie = await getSessionCookie();

      const response = await axios.get(
        `${process.env.TRACCAR_URL}/api/devices`,
        {
          headers: {
            Cookie: cookie,
          },
        }
      );

      return res.json(response.data);
    } catch (error) {
      console.error("Error fetching devices from Traccar:", error.message);
      // fall through to return mock data
    }
  }

  // Fallback mock data
  res.json([
    {
      id: 1,
      name: "Camión Bogotá",
      status: "online",
    },
    {
      id: 2,
      name: "Camión Medellín",
      status: "online",
    },
    {
      id: 3,
      name: "Camión Cali",
      status: "offline",
    },
  ]);
});

export default router;