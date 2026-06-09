import { create } from "zustand";

interface ThemeStore {
  darkMode: boolean;
  toggleTheme: () => void;
}

const readInitial = () => {
  try {
    if (typeof window === "undefined") return false;
    const v = localStorage.getItem("traccar_darkMode");
    return v === "true";
  } catch {
    return false;
  }
};

export const useThemeStore = create<ThemeStore>((set) => ({
  darkMode: readInitial(),

  toggleTheme: () =>
    set((state) => {
      const next = !state.darkMode;
      try {
        localStorage.setItem("traccar_darkMode", next ? "true" : "false");
      } catch {}
      return { darkMode: next };
    }),
}));