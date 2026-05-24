from sqlalchemy import func
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

    @staticmethod
    def get_all(
        db: Session,
        page: int = 1,
        limit: int = 10,
        risk: str | None = None,
        sort: str = "desc",
    ):
        query = db.query(Prediction)

        if risk:
            query = query.filter(
                Prediction.risk == risk
            )

        if sort == "asc":
            query = query.order_by(
                Prediction.created_at.asc()
            )
        else:
            query = query.order_by(
                Prediction.created_at.desc()
            )

        offset = (page - 1) * limit

        return (
            query
            .offset(offset)
            .limit(limit)
            .all()
        )

    @staticmethod
    def get_by_id(
        db: Session,
        prediction_id: int,
    ):
        return (
            db.query(Prediction)
            .filter(Prediction.id == prediction_id)
            .first()
        )

    @staticmethod
    def get_stats(
        db: Session,
    ):
        total_predictions = db.query(
            func.count(Prediction.id)
        ).scalar()

        average_probability = db.query(
            func.avg(Prediction.approval_probability)
        ).scalar()

        low_risk_count = db.query(
            func.count(Prediction.id)
        ).filter(
            Prediction.risk == "low"
        ).scalar()

        high_risk_count = db.query(
            func.count(Prediction.id)
        ).filter(
            Prediction.risk == "high"
        ).scalar()

        return {
            "total_predictions": total_predictions,
            "average_probability": round(
                float(average_probability or 0),
                2,
            ),
            "low_risk_count": low_risk_count,
            "high_risk_count": high_risk_count,
        }