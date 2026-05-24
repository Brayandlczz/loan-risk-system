from pathlib import Path

import joblib
import pandas as pd

from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler

BASE_DIR = Path(__file__).resolve().parent

DATASET_PATH = BASE_DIR / "dataset.csv"
MODEL_PATH = BASE_DIR / "model.pkl"


def train():
    df = pd.read_csv(DATASET_PATH)

    X = df[
        [
            "income",
            "debt",
            "credit_score",
        ]
    ]

    y = df["approved"]

    X_train, X_test, y_train, y_test = (
        train_test_split(
            X,
            y,
            test_size=0.2,
            random_state=42,
        )
    )

    pipeline = Pipeline([
        (
            "scaler",
            StandardScaler(),
        ),
        (
            "model",
            LogisticRegression(),
        ),
    ])

    pipeline.fit(X_train, y_train)

    predictions = pipeline.predict(X_test)

    accuracy = accuracy_score(
        y_test,
        predictions,
    )

    joblib.dump(
        pipeline,
        MODEL_PATH,
    )

    print(
        "Model trained successfully"
    )

    print(
        f"Accuracy: {accuracy:.2f}"
    )


if __name__ == "__main__":
    train()