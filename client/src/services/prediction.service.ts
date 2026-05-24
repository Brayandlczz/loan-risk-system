import { api } from "@/src/lib/api";

import {
  PredictionRequest,
  PredictionResponse,
} from "@/src/types/prediction";

export async function predictLoan(
  payload: PredictionRequest
): Promise<PredictionResponse> {
  const { data } = await api.post<PredictionResponse>(
    "/predict",
    payload
  );

  return data;
}