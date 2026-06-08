export const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="mb-4 h-10 rounded-xl bg-slate-800" />

      <div className="grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
            <div className="h-6 w-3/4 rounded-md bg-slate-800 mb-4" />

            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-slate-800" />
              <div className="h-4 w-1/3 rounded-md bg-slate-800" />
            </div>

            <div className="mt-6 h-12 w-2/3 rounded-md bg-slate-800" />

            <div className="mt-4 h-4 w-1/2 rounded-md bg-slate-800" />
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="h-[480px] rounded-2xl bg-slate-800" />
        </div>
      </div>
    </div>
  );
};