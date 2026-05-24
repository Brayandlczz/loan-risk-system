CREATE TABLE predictions (
    id SERIAL PRIMARY KEY,
    income FLOAT NOT NULL,
    debt FLOAT NOT NULL,
    credit_score INTEGER NOT NULL,
    approval_probability FLOAT NOT NULL,
    risk VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);