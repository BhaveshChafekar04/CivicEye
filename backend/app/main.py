from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine, Base
from app.routes import issues

# Create database tables automatically based on SQLAlchemy models
# Note: In production, you would use Alembic for database migrations instead
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="CivicEye Backend API",
    description="FastAPI Backend for CivicEye Platform",
    version="1.0.0"
)

# Configure CORS so the React frontend can communicate with the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins for development
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

# Include Routers
app.include_router(issues.router)

@app.get("/health", tags=["system"])
def health_check():
    """
    Basic health check endpoint to verify backend is running.
    """
    return {"status": "healthy", "service": "civiceye-api"}
