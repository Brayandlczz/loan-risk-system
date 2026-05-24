"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  predictionSchema,
  PredictionSchema,
} from "@/src/features/prediction/schemas/prediction.schema";

import { usePredictLoan } from "@/src/features/prediction/hooks/use-predict-loan";

export function PredictionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PredictionSchema>({
    resolver: zodResolver(
      predictionSchema
    ),
  });

  const predictionMutation =
    usePredictLoan();

  async function onSubmit(
    values: PredictionSchema
  ) {
    predictionMutation.mutate(values);
  }

  return (
    <div className="w-full max-w-xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm text-black">
      <h1 className="mb-2 text-3xl font-bold text-black">
        Loan Risk Prediction
      </h1>

      <p className="mb-8 text-sm text-zinc-500">
        Predict loan approval probability
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div>
          <input
            type="number"
            placeholder="Income"
            {...register("income", {
              valueAsNumber: true,
            })}
            className="w-full rounded-xl border p-3"
          />

          {errors.income && (
            <p className="mt-1 text-sm text-red-500">
              {errors.income.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="number"
            placeholder="Debt"
            {...register("debt", {
              valueAsNumber: true,
            })}
            className="w-full rounded-xl border p-3"
          />

          {errors.debt && (
            <p className="mt-1 text-sm text-red-500">
              {errors.debt.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="number"
            placeholder="Credit Score"
            {...register(
              "credit_score",
              {
                valueAsNumber: true,
              }
            )}
            className="w-full rounded-xl border p-3"
          />

          {errors.credit_score && (
            <p className="mt-1 text-sm text-red-500">
              {
                errors.credit_score
                  .message
              }
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={
            predictionMutation.isPending
          }
          className="w-full rounded-xl bg-black p-3 text-white transition hover:opacity-90 disabled:opacity-50"
        >
          {predictionMutation.isPending
            ? "Predicting..."
            : "Predict Loan"}
        </button>
      </form>

      {predictionMutation.data && (
        <div className="mt-8 rounded-xl border bg-zinc-50 p-5">
          <h2 className="mb-3 text-lg font-semibold">
            Prediction Result
          </h2>

          <p className="text-sm">
            Approval Probability:
            <strong className="ml-2">
              {(
                predictionMutation.data
                  .approval_probability *
                100
              ).toFixed(0)}
              %
            </strong>
          </p>

          <p className="mt-2 text-sm">
            Risk:
            <strong className="ml-2 capitalize">
              {
                predictionMutation.data
                  .risk
              }
            </strong>
          </p>
        </div>
      )}
    </div>
  );
}