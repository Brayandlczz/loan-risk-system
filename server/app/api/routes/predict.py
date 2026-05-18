from fastapi import APIRouter

router = APIRouter()


@router.post("/predict")
def predict():
    return {
        "approval_probability": 0.87,
        "risk": "low"
    }