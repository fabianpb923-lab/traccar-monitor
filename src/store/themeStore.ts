import { create } from "zustand";

interface ThemeStore {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  darkMode: false,

  toggleTheme: () =>
    set((state) => ({
      darkMode: !state.darkMode,
    })),
}));