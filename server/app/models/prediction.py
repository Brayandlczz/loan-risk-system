from datetime import datetime

from sqlalchemy import DateTime, Float, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base

class Prediction(Base):
    __tablename__ = "predictions"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    income: Mapped[float] = mapped_column(Float)

    debt: Mapped[float] = mapped_column(Float)

    credit_score: Mapped[int] = mapped_column(Integer)

    approval_probability: Mapped[float] = mapped_column(Float)

    risk: Mapped[str] = mapped_column(String(20))

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
    )