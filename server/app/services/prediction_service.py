from sqlalchemy.orm import Session

from app.ml.predict import loan_model
from app.repositories.prediction_repository import (
    PredictionRepository,
)

class PredictionService:
    @staticmethod
    def predict(
        db: Session,
        income: float,
        debt: float,
        credit_score: int,
    ):
        approval_probability = loan_model.predict_loan(
            income=income,
            debt=debt,
            credit_score=credit_score,
        )

        prediction_data = {
            "income": income,
            "debt": debt,
            "credit_score": credit_score,
            "approval_probability": approval_probability,
            "risk": (
                "low"
                if approval_probability >= 0.5
                else "high"
            ),
        }

        saved_prediction = PredictionRepository.create(
            db=db,
            prediction_data=prediction_data,
        )

        return saved_prediction

    @staticmethod
    def get_predictions(
        db: Session,
    ):
        return PredictionRepository.get_all(db)

    @staticmethod
    def get_prediction(
        db: Session,
        prediction_id: int,
    ):
        return PredictionRepository.get_by_id(
            db,
            prediction_id,
        )

    @staticmethod
    def get_stats(
        db: Session,
    ):
        return PredictionRepository.get_stats(db)
        