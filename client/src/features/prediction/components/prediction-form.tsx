"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  predictionSchema,
  PredictionSchema,
} from "@/src/features/prediction/schemas/prediction.schema";

import { usePredictLoan } from "@/src/features/prediction/hooks/use-predict-loan";

import {
  AlertTriangle,
  CheckCircle2,
  DollarSign,
  Loader2,
  ShieldCheck,
} from "lucide-react";

export function PredictionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PredictionSchema>({
    resolver: zodResolver(
      predictionSchema,
    ),
  });

  const predictionMutation =
    usePredictLoan();

  async function onSubmit(
    values: PredictionSchema,
  ) {
    predictionMutation.mutate(values);
  }

  const prediction =
    predictionMutation.data;

  const approval =
    prediction
      ? (
          prediction
            .approval_probability * 100
        ).toFixed(0)
      : null;

  const isLowRisk =
    prediction?.risk === "low";

  return (
    <div
      className="
        relative
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
          absolute
          inset-0
          bg-linear-to-br
          from-white
          via-zinc-50
          to-zinc-100
        "
      />

      <div className="relative z-10 p-8">
        <div
          className="
            mb-8
            flex
            items-start
            justify-between
            gap-4
          "
        >
          <div>
            <div
              className="
                mb-4
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-zinc-200
                bg-white
                px-4
                py-2
                text-sm
                font-medium
                text-zinc-600
                shadow-sm
              "
            >
              <ShieldCheck
                className="
                  h-4
                  w-4
                  text-emerald-500
                "
              />

              AI Loan Intelligence
            </div>

            <h1
              className="
                text-4xl
                font-bold
                tracking-tight
                text-zinc-900
              "
            >
              Loan Risk Prediction
            </h1>

            <p
              className="
                mt-3
                max-w-xl
                text-base
                leading-relaxed
                text-zinc-500
              "
            >
              Analyze approval probability
              using machine learning-based
              financial risk assessment.
            </p>
          </div>

          <div
            className="
              hidden
              rounded-3xl
              border
              border-zinc-200
              bg-white/80
              p-4
              shadow-sm
              lg:block
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
                  bg-zinc-100
                "
              >
                <DollarSign
                  className="
                    h-6
                    w-6
                    text-zinc-700
                  "
                />
              </div>

              <div>
                <p
                  className="
                    text-sm
                    text-zinc-500
                  "
                >
                  Live Prediction
                </p>

                <h3
                  className="
                    text-xl
                    font-bold
                    text-zinc-900
                  "
                >
                  ML Engine
                </h3>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(
            onSubmit,
          )}
          className="
            grid
            gap-5
            lg:grid-cols-3
          "
        >
          <div>
            <label
              className="
                mb-2
                block
                text-sm
                font-medium
                text-zinc-700
              "
            >
              Monthly Income
            </label>

            <input
              type="number"
              placeholder="30000"
              {...register("income", {
                valueAsNumber: true,
              })}
              className="
                w-full
                rounded-2xl
                border
                border-zinc-200
                bg-white
                px-4
                py-4
                text-zinc-900
                outline-none
                transition-all
                focus:border-zinc-900
                focus:ring-4
                focus:ring-zinc-200
              "
            />

            {errors.income && (
              <p
                className="
                  mt-2
                  text-sm
                  text-red-500
                "
              >
                {errors.income.message}
              </p>
            )}
          </div>

          <div>
            <label
              className="
                mb-2
                block
                text-sm
                font-medium
                text-zinc-700
              "
            >
              Current Debt
            </label>

            <input
              type="number"
              placeholder="5000"
              {...register("debt", {
                valueAsNumber: true,
              })}
              className="
                w-full
                rounded-2xl
                border
                border-zinc-200
                bg-white
                px-4
                py-4
                text-zinc-900
                outline-none
                transition-all
                focus:border-zinc-900
                focus:ring-4
                focus:ring-zinc-200
              "
            />

            {errors.debt && (
              <p
                className="
                  mt-2
                  text-sm
                  text-red-500
                "
              >
                {errors.debt.message}
              </p>
            )}
          </div>

          <div>
            <label
              className="
                mb-2
                block
                text-sm
                font-medium
                text-zinc-700
              "
            >
              Credit Score
            </label>

            <input
              type="number"
              placeholder="710"
              {...register(
                "credit_score",
                {
                  valueAsNumber: true,
                },
              )}
              className="
                w-full
                rounded-2xl
                border
                border-zinc-200
                bg-white
                px-4
                py-4
                text-zinc-900
                outline-none
                transition-all
                focus:border-zinc-900
                focus:ring-4
                focus:ring-zinc-200
              "
            />

            {errors.credit_score && (
              <p
                className="
                  mt-2
                  text-sm
                  text-red-500
                "
              >
                {
                  errors
                    .credit_score
                    .message
                }
              </p>
            )}
          </div>

          <div
            className="
              lg:col-span-3
            "
          >
            <button
              type="submit"
              disabled={
                predictionMutation.isPending
              }
              className="
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-zinc-900
                px-6
                py-4
                text-base
                font-semibold
                text-white
                transition-all
                hover:bg-zinc-800
                hover:shadow-xl
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {predictionMutation.isPending ? (
                <>
                  <Loader2
                    className="
                      h-5
                      w-5
                      animate-spin
                    "
                  />

                  Predicting Risk...
                </>
              ) : (
                <>
                  <ShieldCheck
                    className="
                      h-5
                      w-5
                    "
                  />

                  Analyze Loan Application
                </>
              )}
            </button>
          </div>
        </form>

        {prediction && (
          <div
            className="
              mt-8
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
                Prediction Result
              </h2>

              <p
                className="
                  mt-1
                  text-sm
                  text-zinc-500
                "
              >
                Real-time ML approval analysis
              </p>
            </div>

            <div
              className="
                grid
                gap-6
                p-6
                lg:grid-cols-2
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
                  Approval Probability
                </p>

                <div
                  className="
                    mt-3
                    flex
                    items-end
                    gap-2
                  "
                >
                  <h3
                    className="
                      text-6xl
                      font-bold
                      tracking-tight
                      text-zinc-900
                    "
                  >
                    {approval}
                  </h3>

                  <span
                    className="
                      mb-2
                      text-2xl
                      font-semibold
                      text-zinc-500
                    "
                  >
                    %
                  </span>
                </div>

                <div
                  className="
                    mt-5
                    h-4
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
                      duration-700
                      ${
                        isLowRisk
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

              <div
                className="
                  flex
                  flex-col
                  justify-center
                "
              >
                <div
                  className={`
                    inline-flex
                    w-fit
                    items-center
                    gap-3
                    rounded-2xl
                    px-5
                    py-4
                    text-lg
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
                        h-6
                        w-6
                      "
                    />
                  ) : (
                    <AlertTriangle
                      className="
                        h-6
                        w-6
                      "
                    />
                  )}

                  {isLowRisk
                    ? "Low Risk Application"
                    : "High Risk Application"}
                </div>

                <p
                  className="
                    mt-4
                    max-w-md
                    text-sm
                    leading-relaxed
                    text-zinc-500
                  "
                >
                  {isLowRisk
                    ? `
                      This loan application
                      demonstrates a favorable
                      approval probability based
                      on the applicant's
                      financial profile.
                    `
                    : `
                      This loan application
                      presents elevated financial
                      risk indicators according
                      to the ML evaluation model.
                    `}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}