from sqlalchemy.orm import Session

from app.models.prediction import Prediction

class PredictionRepository:
    @staticmethod
    def create(
        db: Session,
        prediction_data: dict,
    ) -> Prediction:
        prediction = Prediction(**prediction_data)

        db.add(prediction)

        db.commit()

        db.refresh(prediction)

        return prediction