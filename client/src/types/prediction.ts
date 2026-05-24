export interface PredictionRequest {
  income: number;
  debt: number;
  credit_score: number;
}

export interface PredictionResponse {
  approval_probability: number;
  risk: string;
}