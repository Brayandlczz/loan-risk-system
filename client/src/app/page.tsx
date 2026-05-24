"use client";

import { DashboardLayout } from "@/src/components/layout/dashboard-layout";

import { PredictionForm } from "@/src/features/prediction/components/prediction-form";

import { StatsCards } from "@/src/features/analytics/components/stats-cards";

import { RiskChart } from "@/src/features/analytics/components/risk-chart";

import { PredictionsTable } from "@/src/features/analytics/components/predictions-table";

import { useAnalytics } from "@/src/features/analytics/hooks/use-analytics";

export default function HomePage() {
  const {
    stats,
    predictions,
    loading,
  } = useAnalytics();

  if (loading || !stats) {
    return (
      <DashboardLayout>
        <main className="p-8">
          <div
            className="
              rounded-2xl
              border
              border-zinc-200
              bg-white
              p-8
              shadow-sm
            "
          >
            <p
              className="
                text-lg
                font-medium
                text-zinc-700
              "
            >
              Loading analytics...
            </p>
          </div>
        </main>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <main
        id="top"
        className="
          min-h-screen
          bg-zinc-100
          p-8
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-8
          "
        >
          <section>
            <h1
              className="
                text-4xl
                font-bold
                text-zinc-900
              "
            >
              Loan Risk Dashboard
            </h1>

            <p
              className="
                mt-2
                text-zinc-500
              "
            >
              ML-powered loan analytics platform
            </p>
          </section>

          <section id="prediction-engine">
            <PredictionForm />
          </section>

          <section
            id="analytics"
            className="space-y-8"
          >
            <StatsCards stats={stats} />

            <RiskChart stats={stats} />
          </section>

          <section id="history">
            <PredictionsTable
              predictions={predictions}
            />
          </section>
        </div>
      </main>
    </DashboardLayout>
  );
}