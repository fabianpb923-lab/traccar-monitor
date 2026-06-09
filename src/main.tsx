import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "leaflet/dist/leaflet.css";
import "./index.css";

// Apply initial theme class from localStorage before React mounts
try {
  if (typeof document !== "undefined") {
    const v = localStorage.getItem("traccar_darkMode");
    if (v === "true") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }
} catch (e) {
  // ignore
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);