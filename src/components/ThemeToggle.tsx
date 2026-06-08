import { useEffect } from "react";
import { useThemeStore } from "../store/themeStore";

export const ThemeToggle = () => {
  const darkMode = useThemeStore((s) => s.darkMode);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  // Apply class on html element
  useEffect(() => {
    try {
      const el = document.documentElement;
      if (darkMode) {
        el.classList.add("dark");
        el.classList.remove("light");
      } else {
        el.classList.remove("dark");
        el.classList.add("light");
      }
    } catch (e) {
      // In some render environments `document` may be undefined.
      // Log a warning instead of swallowing errors silently.
      console.warn("ThemeToggle: failed to update html classes", e);
    }
  }, [darkMode]);

  return (
    <button
      onClick={toggleTheme}
      className={"btn-secondary"}
      style={{
        backgroundColor: "var(--button-bg)",
        color: "var(--button-text)",
      }}
      aria-pressed={darkMode}
    >
      {darkMode ? "Dark" : "Light"}
    </button>
  );
};
