interface ErrorStateProps {
  onRetry?: () => void;
}

export const ErrorState = ({
  onRetry,
}: ErrorStateProps) => {
  return (
    <div
      className="
        flex
        min-h-[400px]
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-red-900
        bg-slate-900
        p-8
        text-center
      "
    >
      <div className="text-6xl">
        ⚠️
      </div>

      <h2 className="mt-4 text-2xl font-bold text-white">
        No fue posible conectar
      </h2>

      <p className="mt-2 text-slate-400">
        El servidor de Traccar puede estar
        temporalmente fuera de servicio.
      </p>

      <button
        onClick={() => onRetry?.()}
        className="
          mt-6
          rounded-xl
          bg-violet-600
          px-6
          py-3
          text-white
          transition
          hover:bg-violet-500
        "
        aria-label="Reintentar conexión"
      >
        Reintentar
      </button>
    </div>
  );
};