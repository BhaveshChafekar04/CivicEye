from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
import uuid

from app.database import get_db
from app.models.issue import Issue as IssueModel
from app.schemas.issue import IssueCreate, IssueResponse

router = APIRouter(
    prefix="/api/issues",
    tags=["issues"]
)

@router.get("/", response_model=List[IssueResponse])
def read_issues(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    """
    Retrieve issues from the database.
    """
    issues = db.query(IssueModel).order_by(IssueModel.created_at.desc()).offset(skip).limit(limit).all()
    return issues

@router.post("/", response_model=IssueResponse)
def create_issue(issue: IssueCreate, db: Session = Depends(get_db)):
    """
    Create a new civic issue report.
    """
    # Generate a dummy ticket number for now
    ticket_number = f"CVE-{str(uuid.uuid4())[:6].upper()}"
    
    db_issue = IssueModel(
        **issue.model_dump(),
        ticket_number=ticket_number,
        priority_score=85,  # Placeholder, usually set by AI
        ai_confidence=90    # Placeholder, usually set by AI
    )
    
    db.add(db_issue)
    db.commit()
    db.refresh(db_issue)
    
    return db_issue
