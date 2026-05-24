from pathlib import Path

import joblib
import pandas as pd

BASE_DIR = Path(__file__).resolve().parent

MODEL_PATH = BASE_DIR / "model.pkl"


class LoanModel:
    def __init__(self):
        self.model = joblib.load(MODEL_PATH)

    def predict_loan(
        self,
        income: float,
        debt: float,
        credit_score: float,
    ) -> float:

        features = pd.DataFrame([
            {
                "income": income,
                "debt": debt,
                "credit_score": credit_score,
            }
        ])

        probability = self.model.predict_proba(
            features
        )[0][1]

        return float(probability)


loan_model = LoanModel()