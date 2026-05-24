import {
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

import { PredictionHistory } from "../types/analytics-types";

interface Props {
  predictions: PredictionHistory[];
}

export function PredictionsTable({
  predictions,
}: Props) {
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
          flex
          items-center
          justify-between
          border-b
          border-zinc-200
          px-6
          py-5
        "
      >
        <div>
          <h2
            className="
              text-xl
              font-bold
              text-zinc-900
            "
          >
            Recent Predictions
          </h2>

          <p
            className="
              mt-1
              text-sm
              text-zinc-500
            "
          >
            Latest loan approval analyses
          </p>
        </div>

        <div
          className="
            rounded-xl
            bg-zinc-100
            px-3
            py-2
            text-sm
            font-medium
            text-zinc-600
          "
        >
          {predictions.length} Records
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead
            className="
              sticky
              top-0
              z-10
              border-b
              border-zinc-200
              bg-zinc-50
            "
          >
            <tr>
              <th
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-zinc-500
                "
              >
                Income
              </th>

              <th
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-zinc-500
                "
              >
                Debt
              </th>

              <th
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-zinc-500
                "
              >
                Credit Score
              </th>

              <th
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-zinc-500
                "
              >
                Approval
              </th>

              <th
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-zinc-500
                "
              >
                Risk
              </th>
            </tr>
          </thead>

          <tbody>
            {predictions.map(
              (prediction, index) => {
                const approval =
                  prediction.approval_probability *
                  100;

                const isLowRisk =
                  prediction.risk === "low";

                return (
                  <tr
                    key={prediction.id}
                    className={`
                      transition-colors
                      hover:bg-zinc-50
                      ${
                        index % 2 === 0
                          ? "bg-white"
                          : "bg-zinc-50/40"
                      }
                    `}
                  >
                    <td
                      className="
                        px-6
                        py-5
                        font-medium
                        text-zinc-900
                      "
                    >
                      $
                      {prediction.income.toLocaleString()}
                    </td>

                    <td
                      className="
                        px-6
                        py-5
                        text-zinc-700
                      "
                    >
                      $
                      {prediction.debt.toLocaleString()}
                    </td>

                    <td
                      className="
                        px-6
                        py-5
                      "
                    >
                      <div
                        className="
                          inline-flex
                          rounded-xl
                          bg-zinc-100
                          px-3
                          py-2
                          text-sm
                          font-semibold
                          text-zinc-700
                        "
                      >
                        {
                          prediction.credit_score
                        }
                      </div>
                    </td>

                    <td
                      className="
                        px-6
                        py-5
                      "
                    >
                      <div
                        className="
                          flex
                          min-w-40
                          flex-col
                          gap-2
                        "
                      >
                        <div
                          className="
                            flex
                            items-center
                            justify-between
                          "
                        >
                          <span
                            className="
                              text-sm
                              font-semibold
                              text-zinc-900
                            "
                          >
                            {approval.toFixed(0)}%
                          </span>

                          <span
                            className="
                              text-xs
                              text-zinc-500
                            "
                          >
                            Probability
                          </span>
                        </div>

                        <div
                          className="
                            h-2.5
                            overflow-hidden
                            rounded-full
                            bg-zinc-200
                          "
                        >
                          <div
                            className={`
                              h-full
                              rounded-full
                              transition-all
                              ${
                                approval >= 50
                                  ? "bg-emerald-500"
                                  : "bg-red-500"
                              }
                            `}
                            style={{
                              width: `${approval}%`,
                            }}
                          />
                        </div>
                      </div>
                    </td>

                    <td
                      className="
                        px-6
                        py-5
                      "
                    >
                      <div
                        className={`
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          px-4
                          py-2
                          text-sm
                          font-semibold
                          ${
                            isLowRisk
                              ? `
                                bg-emerald-100
                                text-emerald-700
                              `
                              : `
                                bg-red-100
                                text-red-700
                              `
                          }
                        `}
                      >
                        {isLowRisk ? (
                          <CheckCircle2
                            className="
                              h-4
                              w-4
                            "
                          />
                        ) : (
                          <AlertTriangle
                            className="
                              h-4
                              w-4
                            "
                          />
                        )}

                        {isLowRisk
                          ? "Low Risk"
                          : "High Risk"}
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}