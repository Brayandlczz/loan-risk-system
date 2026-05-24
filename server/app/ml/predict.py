from pathlib import Path

import joblib
import numpy as np

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
        features = np.array([
            [income, debt, credit_score]
        ])

        probability = self.model.predict_proba(features)[0][1]

        return round(float(probability), 2)


loan_model = LoanModel()