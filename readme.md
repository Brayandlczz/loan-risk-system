# Loan Risk System

FS machine learning platform for loan risk prediction built with Next.js, FastAPI, and Scikit-learn.

---

## Overview

This project simulates how financial institutions evaluate loan approval probability using machine learning models.

Users can submit financial information such as:

- Income
- Debt
- Credit score

The system processes the data through a trained ML model and returns:

- Approval probability
- Risk classification

---

## Tech Stack

### Frontend
- Next.js 15
- React
- TypeScript
- Tailwind CSS
- React Query
- React Hook Form
- Zod

### Backend
- FastAPI
- Python
- Scikit-learn
- Pydantic

### Machine Learning
- Logistic Regression
- Pandas
- NumPy
- Joblib

### Planned
- PostgreSQL
- SQLAlchemy
- Alembic
- Docker
- CI/CD

---

## Architecture

```txt
client/
├── src/
│   ├── app/
│   ├── components/
│   ├── features/
│   ├── services/
│   └── lib/

server/
├── app/
│   ├── api/
│   ├── ml/
│   ├── schemas/
│   ├── services/
│   └── config/
```

---

## Features

- ML loan approval prediction
- FastAPI REST API
- Frontend form validation
- Zod + React Hook Form
- React Query integration
- Typed API contracts
- Modular scalable architecture
- Swagger documentation

---

## API Example

### Request

```json
{
  "income": 30000,
  "debt": 5000,
  "credit_score": 710
}
```

### Response

```json
{
  "approval_probability": 0.91,
  "risk": "low"
}
```

---

## Local Development

### Backend

```bash
cd server

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python -m uvicorn app.main:app --reload
```

### Frontend

```bash
cd client

pnpm install

pnpm dev
```

---

## Future Improvements

- PostgreSQL integration
- Prediction history
- Authentication
- ML model versioning
- Advanced analytics dashboard
- Feature engineering
- Real-world datasets
- Docker support
- Deployment pipeline

---

## Learning Goals

This project focuses on:

- Fullstack architecture
- ML integration in production systems
- API design
- Clean code practices
- Scalable frontend structure
- Backend modularization

---

## License

MIT