import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import devicesRoutes from "./routes/devices.routes.js";
import positionsRoutes from "./routes/positions.routes.js";

console.log("PORT:", process.env.PORT);
console.log("TRACCAR_URL:", process.env.TRACCAR_URL);

const app = express();

app.use(cors());

app.use(express.json());

app.use("/devices", devicesRoutes);
app.use("/positions", positionsRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});