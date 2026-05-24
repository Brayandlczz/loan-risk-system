export interface PredictionStats {
  total_predictions: number;
  average_probability: number;
  low_risk_count: number;
  high_risk_count: number;
}

export interface PredictionHistory {
  id: number;
  income: number;
  debt: number;
  credit_score: number;
  approval_probability: number;
  risk: string;
  created_at: string;
}