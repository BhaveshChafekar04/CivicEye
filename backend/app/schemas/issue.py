from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

# Shared properties
class IssueBase(BaseModel):
    title: str
    description: str
    category: str
    severity: str
    department: str
    location_name: str
    district: str
    lat: float
    lng: float
    image_url: Optional[str] = None
    affected_people: Optional[int] = 0

# Properties to receive on issue creation
class IssueCreate(IssueBase):
    pass

# Properties to return to client
class IssueResponse(IssueBase):
    id: int
    ticket_number: str
    priority_score: int
    status: str
    upvotes: int
    ai_confidence: int
    duplicate_count: int
    created_at: datetime
    # fields to match frontend expectation where needed:
    # comments: List[dict] = []
    # timeline: List[dict] = []

    class Config:
        from_attributes = True  # Allows Pydantic to work with SQLAlchemy models
