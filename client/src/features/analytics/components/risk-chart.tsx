"use client";

import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import {
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

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
      color: "#10b981",
    },
    {
      name: "High Risk",
      value: stats.high_risk_count,
      color: "#ef4444",
    },
  ];

  const total =
    stats.low_risk_count +
    stats.high_risk_count;

  const lowRiskPercentage =
    total > 0
      ? (
          (stats.low_risk_count / total) *
          100
        ).toFixed(0)
      : 0;

  const highRiskPercentage =
    total > 0
      ? (
          (stats.high_risk_count / total) *
          100
        ).toFixed(0)
      : 0;

  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-zinc-200
        bg-white
        shadow-sm
      "
    >
      <div
        className="
          border-b
          border-zinc-200
          px-6
          py-5
        "
      >
        <h2
          className="
            text-xl
            font-bold
            text-zinc-900
          "
        >
          Risk Distribution
        </h2>

        <p
          className="
            mt-1
            text-sm
            text-zinc-500
          "
        >
          Loan approval risk segmentation
        </p>
      </div>

      <div
        className="
          grid
          gap-8
          p-6
          lg:grid-cols-2
        "
      >
        <div className="h-80">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={4}
                strokeWidth={0}
              >
                {data.map((entry) => (
                  <Cell
                    key={entry.name}
                    fill={entry.color}
                  />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  borderRadius: "16px",
                  border:
                    "1px solid #e4e4e7",
                  backgroundColor:
                    "white",
                  boxShadow:
                    "0 10px 25px rgba(0,0,0,0.08)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div
          className="
            flex
            flex-col
            justify-center
            gap-5
          "
        >
          <div
            className="
              rounded-2xl
              border
              border-emerald-200
              bg-emerald-50
              p-5
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-emerald-100
                  "
                >
                  <CheckCircle2
                    className="
                      h-6
                      w-6
                      text-emerald-600
                    "
                  />
                </div>

                <div>
                  <p
                    className="
                      text-sm
                      font-medium
                      text-emerald-700
                    "
                  >
                    Low Risk
                  </p>

                  <h3
                    className="
                      text-3xl
                      font-bold
                      text-emerald-900
                    "
                  >
                    {stats.low_risk_count}
                  </h3>
                </div>
              </div>

              <div
                className="
                  text-right
                "
              >
                <p
                  className="
                    text-2xl
                    font-bold
                    text-emerald-700
                  "
                >
                  {lowRiskPercentage}%
                </p>

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-wide
                    text-emerald-600
                  "
                >
                  Portfolio
                </p>
              </div>
            </div>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-red-200
              bg-red-50
              p-5
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-red-100
                  "
                >
                  <AlertTriangle
                    className="
                      h-6
                      w-6
                      text-red-600
                    "
                  />
                </div>

                <div>
                  <p
                    className="
                      text-sm
                      font-medium
                      text-red-700
                    "
                  >
                    High Risk
                  </p>

                  <h3
                    className="
                      text-3xl
                      font-bold
                      text-red-900
                    "
                  >
                    {stats.high_risk_count}
                  </h3>
                </div>
              </div>

              <div
                className="
                  text-right
                "
              >
                <p
                  className="
                    text-2xl
                    font-bold
                    text-red-700
                  "
                >
                  {highRiskPercentage}%
                </p>

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-wide
                    text-red-600
                  "
                >
                  Portfolio
                </p>
              </div>
            </div>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-zinc-200
              bg-zinc-50
              p-5
            "
          >
            <p
              className="
                text-sm
                text-zinc-500
              "
            >
              Total analyzed applications
            </p>

            <h3
              className="
                mt-2
                text-4xl
                font-bold
                text-zinc-900
              "
            >
              {total}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}