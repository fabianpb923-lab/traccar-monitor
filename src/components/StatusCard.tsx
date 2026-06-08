interface StatusCardProps {
  vehicleName?: string;
  online?: boolean | null;
  speed?: number | null;
  lastUpdate?: string | null;
}

export const StatusCard = ({
  vehicleName = "Vehículo",
  online = null,
  speed = null,
  lastUpdate = null,
}: StatusCardProps) => {
  const hasData = lastUpdate !== null || speed !== null || online !== null;
  return (
    <section
      aria-live="polite"
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-6
        shadow-xl
      "
    >
      <h2
        className="
          text-xl
          font-bold
          text-white
        "
      >
        {vehicleName}
      </h2>

      {hasData ? (
        <>
          <div
            className="
              mt-4
              flex
              items-center
              gap-2
            "
          >
            <span
              className={`${
                "h-3 w-3 rounded-full " +
                (online ? "bg-green-500 animate-pulse" : "bg-slate-500")
              }`}
            />

            <span
              className="
                text-sm
                font-medium
                text-slate-300
              "
            >
              {online ? "Online" : "Offline"}
            </span>
          </div>

          <dl className="mt-8 space-y-6">
            <div>
              <dt
                className="
                  text-sm
                  text-slate-400
                "
              >
                Velocidad
              </dt>

              <dd
                className="
                  mt-1
                  text-3xl
                  font-bold
                  text-white
                "
              >
                {speed ?? "—"} km/h
              </dd>
            </div>

            <div>
              <dt
                className="
                  text-sm
                  text-slate-400
                "
              >
                Última actualización
              </dt>

              <dd
                className="
                  mt-1
                  text-lg
                  text-white
                "
              >
                {lastUpdate ? new Date(lastUpdate).toLocaleTimeString() : "—"}
              </dd>
            </div>
          </dl>
        </>
      ) : (
        <div className="mt-6 text-slate-400">Sin datos disponibles para este vehículo.</div>
      )}
    </section>
  );
};