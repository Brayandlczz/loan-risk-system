import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

import { PredictionStats } from "../types/analytics-types";

interface Props {
  stats: PredictionStats;
}

export function StatsCards({
  stats,
}: Props) {
  const cards = [
    {
      title: "Total Predictions",
      value: stats.total_predictions,
      icon: BarChart3,
      description: "Predictions processed",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Average Approval",
      value: `${(
        stats.average_probability * 100
      ).toFixed(0)}%`,
      icon: TrendingUp,
      description: "Average approval rate",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      title: "Low Risk",
      value: stats.low_risk_count,
      icon: CheckCircle2,
      description: "Low-risk applications",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "High Risk",
      value: stats.high_risk_count,
      icon: AlertTriangle,
      description: "High-risk applications",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-zinc-200
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            <div
              className="
                absolute
                inset-0
                bg-linear-to-br
                from-white
                to-zinc-50
              "
            />

            <div className="relative z-10">
              <div
                className="
                  flex
                  items-start
                  justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-sm
                      font-medium
                      text-zinc-500
                    "
                  >
                    {card.title}
                  </p>

                  <h2
                    className="
                      mt-4
                      text-4xl
                      font-bold
                      tracking-tight
                      text-zinc-900
                    "
                  >
                    {card.value}
                  </h2>
                </div>

                <div
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    ${card.iconBg}
                  `}
                >
                  <Icon
                    className={`
                      h-7
                      w-7
                      ${card.iconColor}
                    `}
                  />
                </div>
              </div>

              <div
                className="
                  mt-6
                  flex
                  items-center
                  justify-between
                "
              >
                <p
                  className="
                    text-sm
                    text-zinc-500
                  "
                >
                  {card.description}
                </p>

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-zinc-400
                  "
                >
                  Live
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}