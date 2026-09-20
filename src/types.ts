export type IssueCategory = 'Roads' | 'Garbage' | 'Water' | 'Lighting' | 'Traffic' | 'Infrastructure';

export type IssueSeverity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

export type IssueStatus = 'Reported' | 'Under Review' | 'In Progress' | 'Resolved' | 'Verified';

export interface Comment {
  id: string;
  user: string;
  avatar?: string;
  role: 'Citizen' | 'Authority' | 'System';
  text: string;
  time: string;
}

export interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  status: IssueStatus;
  actor?: string;
}

export interface CivicIssue {
  id: string;
  ticketNumber: string;
  title: string;
  description: string;
  category: IssueCategory;
  severity: IssueSeverity;
  priorityScore: number;
  status: IssueStatus;
  department: string;
  locationName: string;
  district: string;
  lat: number;
  lng: number;
  imageUrl: string;
  resolvedImageUrl?: string;
  upvotes: number;
  hasUpvoted?: boolean;
  reportedAt: string;
  resolvedAt?: string;
  affectedPeople: number;
  aiConfidence: number;
  duplicateCount: number;
  slaHoursRemaining?: number;
  assignedWorker?: string;
  timeline: TimelineEvent[];
  comments: Comment[];
}

export interface AIAnalysisResult {
  issueType: string;
  confidence: number;
  severity: IssueSeverity;
  priorityScore: number;
  department: string;
  duplicatesNearby: number;
  recommendedSLAHours: number;
  detectedKeyFeatures: string[];
  summary: string;
}

export interface FilterState {
  category: string;
  priority: string;
  status: string;
  search: string;
  district: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message: string;
}
