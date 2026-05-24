export function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-10">
        Loan Risk
      </h1>

      <nav className="space-y-4">
        <button className="w-full text-left px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition">
          Dashboard
        </button>

        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-800 transition">
          Predictions
        </button>

        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-800 transition">
          Analytics
        </button>
      </nav>
    </aside>
  );
}