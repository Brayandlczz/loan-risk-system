from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.dependencies import get_db
from app.schemas.prediction import (
    PredictionRequest,
    PredictionResponse,
)
from app.services.prediction_service import PredictionService

router = APIRouter()

@router.post(
    "/predict",
    response_model=PredictionResponse,
)
def predict(
    payload: PredictionRequest,
    db: Session = Depends(get_db),
):
    prediction = PredictionService.predict(
        db=db,
        income=payload.income,
        debt=payload.debt,
        credit_score=payload.credit_score,
    )

    return {
        "approval_probability": prediction.approval_probability,
        "risk": prediction.risk,
    }