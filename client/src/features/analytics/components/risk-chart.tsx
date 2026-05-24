"use client";

import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { PredictionStats } from "../types/analytics-types";

interface Props {
  stats: PredictionStats;
}

export function RiskChart({
  stats,
}: Props) {
  const data = [
    {
      name: "Low Risk",
      value: stats.low_risk_count,
    },
    {
      name: "High Risk",
      value: stats.high_risk_count,
    },
  ];

  return (
    <div
      className="
        rounded-2xl
        border
        border-zinc-200
        bg-white
        p-6
        shadow-sm
      "
    >
      <h2
        className="
          mb-4
          text-lg
          font-semibold
          text-zinc-900
        "
      >
        Risk Distribution
      </h2>

      <div className="h-75">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={100}
            />

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}