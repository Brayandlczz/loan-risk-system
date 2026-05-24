const navigation = [
  {
    label: "Dashboard",
    href: "#top",
  },
  {
    label: "Prediction Engine",
    href: "#prediction-engine",
  },
  {
    label: "Analytics",
    href: "#analytics",
  },
  {
    label: "Prediction History",
    href: "#history",
  },
];

export function Sidebar() {
  return (
    <aside
      className="
        sticky
        top-0
        flex
        h-screen
        w-72
        flex-col
        justify-between
        border-r
        border-slate-800
        bg-slate-950
        p-6
        text-white
      "
    >
      <div>
        <div className="mb-12">
          <div
            className="
              mb-4
              inline-flex
              rounded-full
              border
              border-slate-700
              bg-slate-900
              px-3
              py-1
              text-xs
              font-medium
              uppercase
              tracking-wider
              text-slate-400
            "
          >
            ML Dashboard
          </div>

          <h1
            className="
              text-3xl
              font-bold
              tracking-tight
            "
          >
            Loan Risk
          </h1>

          <p
            className="
              mt-3
              text-sm
              leading-relaxed
              text-slate-400
            "
          >
            AI-powered loan approval
            analytics and financial
            risk intelligence.
          </p>
        </div>

        <nav className="space-y-3">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
                block
                w-full
                rounded-2xl
                px-4
                py-4
                text-left
                font-medium
                text-slate-300
                transition-all
                hover:bg-slate-800
                hover:text-white
              "
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div
        className="
          rounded-2xl
          border
          border-slate-800
          bg-slate-900/60
          p-4
        "
      >

        <h3
          className="
            mt-2
            text-lg
            font-semibold
            text-white
            text-center
          "
        >
          yannie.dev
        </h3>
      </div>
    </aside>
  );
}