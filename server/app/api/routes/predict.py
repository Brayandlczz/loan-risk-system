from fastapi import APIRouter

from app.schemas.prediction import (
    PredictionRequest,
    PredictionResponse,
)
from app.services.prediction_service import (
    calculate_prediction,
)

router = APIRouter()


@router.post(
    "/predict",
    response_model=PredictionResponse,
)
def predict(payload: PredictionRequest):
    result = calculate_prediction(
        income=payload.income,
        debt=payload.debt,
        credit_score=payload.credit_score,
    )

    return result