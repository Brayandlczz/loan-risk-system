export function Topbar() {
  return (
    <header className="bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Loan Risk Dashboard
        </h2>

        <p className="text-slate-500 mt-1">
          Monitor predictions and analytics
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-green-500" />

        <span className="text-sm text-slate-600">
          API Online
        </span>
      </div>
    </header>
  );
}