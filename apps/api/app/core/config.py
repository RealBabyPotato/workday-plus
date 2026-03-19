from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "workday-plus api"
    environment: str = "development"
    frontend_origin: str = "http://127.0.0.1:5173"
    database_url: str = (
        "postgresql+psycopg://postgres:postgres@127.0.0.1:5432/workday_plus"
    )

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )


@lru_cache
def get_settings() -> Settings:
    return Settings()
