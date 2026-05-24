from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.dependencies import get_db
from app.schemas.prediction import (
    PredictionHistoryResponse,
    PredictionRequest,
    PredictionResponse,
    PredictionStatsResponse,
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

@router.get(
    "/predictions",
    response_model=List[PredictionHistoryResponse],
)
def get_predictions(
    page: int = 1,
    limit: int = 10,
    risk: str | None = None,
    sort: str = "desc",
    db: Session = Depends(get_db),
):
    return PredictionService.get_predictions(
        db=db,
        page=page,
        limit=limit,
        risk=risk,
        sort=sort,
    )

@router.get(
    "/predictions/{prediction_id}",
    response_model=PredictionHistoryResponse,
)

def get_prediction(
    prediction_id: int,
    db: Session = Depends(get_db),
):
    prediction = PredictionService.get_prediction(
        db,
        prediction_id,
    )

    if not prediction:
        raise HTTPException(
            status_code=404,
            detail="Prediction not found",
        )

    return prediction

@router.get(
    "/stats",
    response_model=PredictionStatsResponse,
)
def get_stats(
    db: Session = Depends(get_db),
):
    return PredictionService.get_stats(db)