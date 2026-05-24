import { api } from "@/src/lib/api";

import {
  PredictionHistory,
  PredictionStats,
} from "../types/analytics-types";

export async function getStats():
Promise<PredictionStats> {
  const { data } = await api.get(
    "/stats"
  );

  return data;
}

export async function getPredictions():
Promise<PredictionHistory[]> {
  const { data } = await api.get(
    "/predictions"
  );

  return data;
}