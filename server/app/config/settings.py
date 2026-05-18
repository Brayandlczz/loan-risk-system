from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str
    APP_VERSION: str

    API_PREFIX: str

    FRONTEND_URL: str

    class Config:
        env_file = ".env"


settings = Settings()