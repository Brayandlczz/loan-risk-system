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
    },
    {
      title: "Average Approval",
      value: `${(
        stats.average_probability * 100
      ).toFixed(0)}%`,
    },
    {
      title: "Low Risk",
      value: stats.low_risk_count,
    },
    {
      title: "High Risk",
      value: stats.high_risk_count,
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-4
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      {cards.map((card) => (
        <div
          key={card.title}
          className="
            rounded-2xl
            border
            border-zinc-200
            bg-white
            p-6
            shadow-sm
          "
        >
          <p
            className="
              text-sm
              text-zinc-500
            "
          >
            {card.title}
          </p>

          <h2
            className="
              mt-2
              text-3xl
              font-bold
              text-zinc-900
            "
          >
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}