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
      aria-pressed={darkMode}
      aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px",
        borderRadius: 9999,
        border: "1px solid rgba(255,255,255,0.06)",
        background: darkMode ? "#0f172a" : "#e6e6e6",
        color: darkMode ? "#fff" : "#111",
        cursor: "pointer",
      }}
    >
      <span style={{ fontSize: 14 }}>{darkMode ? "🌙" : "☀️"}</span>
      <span style={{
        width: 36,
        height: 20,
        borderRadius: 9999,
        background: darkMode ? "#4f46e5" : "#94a3b8",
        position: "relative",
        display: "inline-block",
      }}>
        <span style={{
          position: "absolute",
          top: 1,
          left: darkMode ? 16 : 2,
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: "#fff",
          transition: "left 160ms ease",
        }} />
      </span>
    </button>
  );
};
