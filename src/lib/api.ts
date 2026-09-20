import { CivicIssue } from '../types';

const BACKEND_URL = (import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000').replace(/\/$/, '');

type BackendIssue = {
  id: number;
  ticket_number: string;
  title: string;
  description: string;
  category: CivicIssue['category'];
  severity: CivicIssue['severity'];
  priority_score: number;
  status: CivicIssue['status'];
  department: string;
  location_name: string;
  district: string;
  lat: number;
  lng: number;
  image_url?: string | null;
  upvotes: number;
  affected_people: number;
  ai_confidence: number;
  duplicate_count: number;
  created_at: string;
};

const toCivicIssue = (issue: BackendIssue): CivicIssue => ({
  id: String(issue.id),
  ticketNumber: issue.ticket_number,
  title: issue.title,
  description: issue.description,
  category: issue.category,
  severity: issue.severity,
  priorityScore: issue.priority_score,
  status: issue.status,
  department: issue.department,
  locationName: issue.location_name,
  district: issue.district,
  lat: issue.lat,
  lng: issue.lng,
  imageUrl: issue.image_url || 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80',
  upvotes: issue.upvotes,
  reportedAt: new Date(issue.created_at).toLocaleString(),
  affectedPeople: issue.affected_people,
  aiConfidence: issue.ai_confidence,
  duplicateCount: issue.duplicate_count,
  timeline: [],
  comments: []
});

export async function fetchIssues(): Promise<CivicIssue[]> {
  const response = await fetch(`${BACKEND_URL}/api/issues/`);
  if (!response.ok) throw new Error(`Issue list request failed (${response.status})`);
  const issues = await response.json() as BackendIssue[];
  return issues.map(toCivicIssue);
}

export async function createIssue(issue: Partial<CivicIssue>): Promise<CivicIssue> {
  const response = await fetch(`${BACKEND_URL}/api/issues/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: issue.title || 'Reported Civic Problem',
      description: issue.description || '',
      category: issue.category || 'Roads',
      severity: issue.severity || 'HIGH',
      department: issue.department || 'Public Works Dept',
      location_name: issue.locationName || 'Central District',
      district: issue.district || 'Central Zone',
      lat: issue.lat || 20.9288,
      lng: issue.lng || 77.754,
      image_url: issue.imageUrl || null,
      affected_people: issue.affectedPeople || 0
    })
  });
  if (!response.ok) throw new Error(`Issue creation failed (${response.status})`);
  return toCivicIssue(await response.json() as BackendIssue);
}
