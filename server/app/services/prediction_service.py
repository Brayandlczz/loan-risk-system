from app.ml.predict import loan_model


def calculate_prediction(
    income: float,
    debt: float,
    credit_score: float,
):
    probability = loan_model.predict(
        income=income,
        debt=debt,
        credit_score=credit_score,
    )

    risk = "low"

    if probability < 0.7:
        risk = "high"

    return {
        "approval_probability": probability,
        "risk": risk,
    }