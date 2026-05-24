function getCurrentDate() {
  return new Intl.DateTimeFormat(
    "en-US",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  ).format(new Date());
}

export function Topbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-30
        flex
        items-center
        justify-between
        border-b
        border-zinc-200/70
        bg-white/80
        px-8
        py-5
        backdrop-blur-xl
      "
    >
      <div>
        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-zinc-200
            bg-zinc-50
            px-3
            py-1
            text-xs
            font-medium
            uppercase
            tracking-wider
            text-zinc-500
          "
        >
          Loan Analytics Platform
        </div>

        <h2
          className="
            mt-3
            text-3xl
            font-bold
            tracking-tight
            text-zinc-900
          "
        >
          Loan Risk Dashboard
        </h2>

        <p
          className="
            mt-2
            text-sm
            text-zinc-500
          "
        >
          Monitor predictions, approval
          probability, and financial risk
          insights in real time.
        </p>
      </div>

      <div
        className="
          flex
          items-center
          gap-6
        "
      >
        <div
          className="
            hidden
            rounded-2xl
            border
            border-zinc-200
            bg-white
            px-4
            py-3
            shadow-sm
            lg:block
          "
        >
          <p
            className="
              text-xs
              uppercase
              tracking-wide
              text-zinc-400
            "
          >
            Current Date
          </p>

          <p
            className="
              mt-1
              text-sm
              font-semibold
              text-zinc-800
            "
          >
            {getCurrentDate()}
          </p>
        </div>

        <div
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-emerald-200
            bg-emerald-50
            px-4
            py-3
            shadow-sm
          "
        >
          <div
            className="
              relative
              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                absolute
                h-3
                w-3
                animate-ping
                rounded-full
                bg-emerald-400
                opacity-75
              "
            />

            <div
              className="
                relative
                h-3
                w-3
                rounded-full
                bg-emerald-500
              "
            />
          </div>

          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-wide
                text-emerald-600
              "
            >
              System Status
            </p>

            <p
              className="
                text-sm
                font-semibold
                text-emerald-700
              "
            >
              API Online
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}