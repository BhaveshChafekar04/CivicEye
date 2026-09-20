from sqlalchemy import Column, Integer, String, Float, Text, Boolean, DateTime
from sqlalchemy.sql import func
from app.database import Base

class Issue(Base):
    __tablename__ = "issues"

    id = Column(Integer, primary_key=True, index=True)
    ticket_number = Column(String, unique=True, index=True)
    title = Column(String, index=True)
    description = Column(Text)
    category = Column(String, index=True)
    severity = Column(String)
    priority_score = Column(Integer, default=0)
    status = Column(String, default="Reported")
    department = Column(String)
    location_name = Column(String)
    district = Column(String)
    lat = Column(Float)
    lng = Column(Float)
    image_url = Column(String, nullable=True)
    upvotes = Column(Integer, default=1)
    affected_people = Column(Integer, default=0)
    ai_confidence = Column(Integer, default=0)
    duplicate_count = Column(Integer, default=0)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # We will add relationships (like comments and timeline) in future steps
