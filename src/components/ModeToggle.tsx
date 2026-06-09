import { useAppStore } from "../store/appStore";

export const ModeToggle = () => {
  const liveMode = useAppStore((s) => s.liveMode);
  const setLiveMode = useAppStore((s) => s.setLiveMode);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLiveMode(false)}
        className={`px-3 py-1 rounded-md ${!liveMode ? "bg-violet-600 text-white" : "bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300"}`}
      >
        Simulado
      </button>

      <button
        onClick={() => setLiveMode(true)}
        className={`px-3 py-1 rounded-md ${liveMode ? "bg-violet-600 text-white" : "bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300"}`}
      >
        Live
      </button>
    </div>
  );
};

export default ModeToggle;
