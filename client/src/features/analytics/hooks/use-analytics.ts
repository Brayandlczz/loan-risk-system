"use client";

import { useEffect, useState } from "react";

import {
  getPredictions,
  getStats,
} from "../services/analytics-service";

import {
  PredictionHistory,
  PredictionStats,
} from "../types/analytics-types";

export function useAnalytics() {
  const [stats, setStats] =
    useState<PredictionStats | null>(null);

  const [predictions, setPredictions] =
    useState<PredictionHistory[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        const [
          statsData,
          predictionsData,
        ] = await Promise.all([
          getStats(),
          getPredictions(),
        ]);

        setStats(statsData);

        setPredictions(predictionsData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchAnalytics();
  }, []);

  return {
    stats,
    predictions,
    loading,
  };
}