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

    credit_score: float = Field(
        ge=300,
        le=850,
        description="Credit score",
        example=710,
    )


class PredictionResponse(BaseModel):
    approval_probability: float
    risk: str