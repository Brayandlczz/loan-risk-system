import psycopg2

try:
    conn = psycopg2.connect(
        host="127.0.0.1",
        port="5432",
        database="loan_risk_db",
        user="postgres",
        password="postgresdb19@",
    )

    print("Connected successfully")

    conn.close()

except Exception as e:
    print(e)