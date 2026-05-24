# Loan Risk System

FS Machine Learning platform for loan risk prediction built with Next.js, FastAPI, PostgreSQL, and Scikit-learn.

---

## Overview

Loan Risk System simulates how financial institutions evaluate loan approval probability using machine learning models.

Users can submit financial information such as:

- Income
- Debt
- Credit score

The system processes the data through a trained ML model and returns:

- Approval probability
- Risk classification
- Real-time analytics
- Historical prediction tracking

The platform includes a modern analytics dashboard with charts, prediction history, and ML-powered financial insights.

---

## Features

- AI-powered loan prediction engine
- Real-time approval probability analysis
- Interactive analytics dashboard
- Risk distribution visualization
- Prediction history table
- Responsive SaaS-style UI
- Toast notifications and UX feedback
- PostgreSQL persistence layer

---

## Tech Stack

### Frontend

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- TanStack Query
- React Hook Form
- Zod
- Recharts
- Sonner
- Lucide React

### Backend

- FastAPI
- Python
- SQLAlchemy
- PostgreSQL
- Pydantic

### Machine Learning

- Scikit-learn
- Logistic Regression
- Pandas
- NumPy
- Joblib

---

## Architecture

```txt
client/
├── src/
│   ├── app/
│   ├── components/
│   ├── features/
│   ├── services/
│   ├── lib/
│   └── types/

server/
├── app/
│   ├── api/
│   ├── db/
│   ├── ml/
│   ├── models/
│   ├── repositories/
│   ├── schemas/
│   ├── services/
│   └── config/
```

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

## Database Setup

Create the PostgreSQL database:

```sql
CREATE DATABASE loan_risk_db;
```

Create a `.env` file inside `server/`:

```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/loan_risk_db
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

## ML Training

Retrain the model:

```bash
python app/ml/train.py
```

---

## Swagger Docs

```txt
http://127.0.0.1:8000/docs
```

---

## Future Improvements

- JWT authentication
- Docker support
- CI/CD
- Cloud deployment
- Model versioning

---

## License

MIT

