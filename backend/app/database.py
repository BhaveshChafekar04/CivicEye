from sqlalchemy import create_engine
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import sessionmaker, declarative_base
import os
from dotenv import load_dotenv

load_dotenv()

# SQLite keeps local development zero-configuration; production can provide PostgreSQL.
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./civiceye.db")


def _create_engine(url: str):
    return create_engine(
        url,
        connect_args={"check_same_thread": False} if url.startswith("sqlite") else {}
    )


engine = _create_engine(SQLALCHEMY_DATABASE_URL)
if SQLALCHEMY_DATABASE_URL.startswith(("postgresql", "postgres")):
    try:
        with engine.connect():
            pass
    except SQLAlchemyError:
        # Keep local development usable when PostgreSQL is not configured or running.
        SQLALCHEMY_DATABASE_URL = "sqlite:///./civiceye.db"
        engine = _create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
