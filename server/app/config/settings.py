from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str = "Loan Risk System"
    APP_VERSION: str = "1.0.0"

    API_PREFIX: str = "/api/v1"

    FRONTEND_URL: str = "http://localhost:3000"

    DATABASE_URL: str

    class Config:
        env_file = ".env"


settings = Settings()