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
        rounded-2xl
        border
        border-zinc-200
        bg-white
        shadow-sm
      "
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead
            className="
              border-b
              border-zinc-200
              bg-zinc-50
            "
          >
            <tr>
              <th className="p-4 text-left">
                Income
              </th>

              <th className="p-4 text-left">
                Debt
              </th>

              <th className="p-4 text-left">
                Credit Score
              </th>

              <th className="p-4 text-left">
                Approval
              </th>

              <th className="p-4 text-left">
                Risk
              </th>
            </tr>
          </thead>

          <tbody>
            {predictions.map(
              (prediction) => (
                <tr
                  key={prediction.id}
                  className="
                    border-b
                    border-zinc-100
                  "
                >
                  <td className="p-4">
                    $
                    {prediction.income.toLocaleString()}
                  </td>

                  <td className="p-4">
                    $
                    {prediction.debt.toLocaleString()}
                  </td>

                  <td className="p-4">
                    {
                      prediction.credit_score
                    }
                  </td>

                  <td className="p-4">
                    {(
                      prediction.approval_probability *
                      100
                    ).toFixed(0)}
                    %
                  </td>

                  <td className="p-4 capitalize">
                    {prediction.risk}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}