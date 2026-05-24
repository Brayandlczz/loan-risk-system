from datetime import datetime
from pydantic import BaseModel, Field

class PredictionRequest(BaseModel):
    income: float = Field(
        gt=0,
        description="Monthly income",
        example=30000,
    )

    debt: float = Field(
        ge=0,
        description="Current debt",
        example=5000,
    )

    credit_score: int = Field(
        ge=300,
        le=850,
        description="Credit score",
        example=710,
    )
class PredictionResponse(BaseModel):
    approval_probability: float
    risk: str
class PredictionHistoryResponse(BaseModel):
    id: int
    income: float
    debt: float
    credit_score: int
    approval_probability: float
    risk: str
    created_at: datetime

    model_config = {
        "from_attributes": True
    }

class PredictionStatsResponse(BaseModel):
    total_predictions: int
    average_probability: float
    low_risk_count: int
    high_risk_count: int