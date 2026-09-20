import { CivicIssue } from '../types';

export const INITIAL_ISSUES: CivicIssue[] = [
  {
    id: 'issue-1',
    ticketNumber: 'CVE-9401',
    title: 'Severe Asphalt Pothole on High-Speed Lane',
    description: 'Deep road cavity (~70cm width, 12cm depth) creating severe hazard for 2-wheeler riders near Badnera flyover descent.',
    category: 'Roads',
    severity: 'CRITICAL',
    priorityScore: 94,
    status: 'In Progress',
    department: 'Roads & Infrastructure',
    locationName: 'Badnera Road, Near Flyover Descent',
    district: 'Badnera Zone',
    lat: 20.9135,
    lng: 77.7490,
    imageUrl: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80',
    resolvedImageUrl: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=800&q=80',
    upvotes: 142,
    reportedAt: '2 hours ago',
    affectedPeople: 2400,
    aiConfidence: 98,
    duplicateCount: 4,
    slaHoursRemaining: 18,
    assignedWorker: 'Rajesh Sharma (Civil Maintenance Team 4)',
    timeline: [
      {
        title: 'Report Submitted',
        date: 'Today, 08:15 AM',
        description: 'Citizen tagged geo-location and uploaded high-resolution damage photo.',
        status: 'Reported',
        actor: 'Citizen #893'
      },
      {
        title: 'AI Classification & Duplicate Cluster',
        date: 'Today, 08:16 AM',
        description: 'AI Vision detected 12cm deep asphalt cavity. Merged with 3 nearby geolocation pings.',
        status: 'Under Review',
        actor: 'CivicEye Neural Engine'
      },
      {
        title: 'Routed to PWD & Priority Score 94/100',
        date: 'Today, 08:30 AM',
        description: 'Automated dispatch sent to Road & Infrastructure Dept. Urgent SLA assigned.',
        status: 'In Progress',
        actor: 'Auto Routing Dispatcher'
      },
      {
        title: 'Repair Crew Deployed',
        date: 'Today, 09:45 AM',
        description: 'Cold asphalt mix patch team dispatched with vehicle #MH-27-BD-4410.',
        status: 'In Progress',
        actor: 'Supervisor V. Kulkarni'
      }
    ],
    comments: [
      {
        id: 'c1',
        user: 'Anand Verma',
        role: 'Citizen',
        text: 'Nearly lost control of my bike here last night! Extremely dangerous spot, glad it got flagged.',
        time: '1 hour ago'
      },
      {
        id: 'c2',
        user: 'Public Works Dept',
        role: 'Authority',
        text: 'Patching unit #4 is currently on site. Estimated completion by 2:00 PM today.',
        time: '30 mins ago'
      }
    ]
  },
  {
    id: 'issue-2',
    ticketNumber: 'CVE-9388',
    title: 'High-Pressure Water Main Burst & Road Erosion',
    description: 'Underground pipeline rupture causing clean drinking water surge onto main arterial road and softening asphalt sub-grade.',
    category: 'Water',
    severity: 'CRITICAL',
    priorityScore: 91,
    status: 'In Progress',
    department: 'Water Supply & Sewerage Board',
    locationName: 'Rajapeth Square, Main Market Corridor',
    district: 'Central Rajapeth',
    lat: 20.9288,
    lng: 77.7540,
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80',
    resolvedImageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    upvotes: 98,
    reportedAt: '3 hours ago',
    affectedPeople: 1850,
    aiConfidence: 96,
    duplicateCount: 2,
    slaHoursRemaining: 6,
    assignedWorker: 'Hydro Rapid Response Unit B',
    timeline: [
      {
        title: 'Report Submitted',
        date: 'Today, 07:10 AM',
        description: 'Photo submitted showing water flow across 3 traffic lanes.',
        status: 'Reported'
      },
      {
        title: 'AI Flow & Valve Isolation Alert',
        date: 'Today, 07:11 AM',
        description: 'AI matched image with hydraulic pipeline distribution map.',
        status: 'Under Review'
      },
      {
        title: 'Sewerage Gate Valve Isolated',
        date: 'Today, 08:00 AM',
        description: 'Water flow controlled to prevent structural sub-base erosion.',
        status: 'In Progress',
        actor: 'Eng. S. Deshmukh'
      }
    ],
    comments: [
      {
        id: 'c3',
        user: 'Priya Joshi',
        role: 'Citizen',
        text: 'Water pressure in surrounding shops dropped completely. Thank you for fast valve shutdown.',
        time: '2 hours ago'
      }
    ]
  },
  {
    id: 'issue-3',
    ticketNumber: 'CVE-9350',
    title: 'Uncollected Commercial Waste & Illegal Dumping',
    description: 'Overflowing waste dump accumulating behind retail block, blocking pedestrian path and causing sanitation concern.',
    category: 'Garbage',
    severity: 'HIGH',
    priorityScore: 82,
    status: 'Under Review',
    department: 'Sanitation & Waste Management',
    locationName: 'Camp Area, Near Girls High School',
    district: 'Camp Zone',
    lat: 20.9372,
    lng: 77.7612,
    imageUrl: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80',
    upvotes: 67,
    reportedAt: '5 hours ago',
    affectedPeople: 820,
    aiConfidence: 95,
    duplicateCount: 1,
    slaHoursRemaining: 28,
    timeline: [
      {
        title: 'Report Submitted',
        date: 'Today, 05:20 AM',
        description: 'Image upload verified via GPS coordinates.',
        status: 'Reported'
      },
      {
        title: 'AI Volume Density Calculation',
        date: 'Today, 05:22 AM',
        description: 'Estimated 1.4 cubic meters refuse pile requiring compactor truck.',
        status: 'Under Review'
      }
    ],
    comments: []
  },
  {
    id: 'issue-4',
    ticketNumber: 'CVE-9210',
    title: 'Streetlight Circuit Failure Across 6 Poles',
    description: 'Complete blackout along residential feeder road creating low-visibility hazard during evening hours.',
    category: 'Lighting',
    severity: 'MEDIUM',
    priorityScore: 68,
    status: 'In Progress',
    department: 'Electrical & Lighting Dept',
    locationName: 'Sai Nagar, 4th Cross Road',
    district: 'Sai Nagar',
    lat: 20.9211,
    lng: 77.7690,
    imageUrl: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80',
    upvotes: 43,
    reportedAt: '12 hours ago',
    affectedPeople: 600,
    aiConfidence: 94,
    duplicateCount: 0,
    slaHoursRemaining: 36,
    assignedWorker: 'MSEDCL Line Technician Team',
    timeline: [
      {
        title: 'Report Submitted',
        date: 'Yesterday, 10:00 PM',
        description: 'Citizen reported total darkness along 300m stretch.',
        status: 'Reported'
      },
      {
        title: 'Transformer Breaker Checked',
        date: 'Today, 09:00 AM',
        description: 'Substation inspection identified faulty automatic relay timer switch.',
        status: 'In Progress'
      }
    ],
    comments: []
  },
  {
    id: 'issue-5',
    ticketNumber: 'CVE-9180',
    title: 'Faulty Traffic Signal Controller at Busy Intersection',
    description: 'Traffic signals stuck on flashing amber causing vehicle deadlock and gridlock during morning rush hour.',
    category: 'Traffic',
    severity: 'HIGH',
    priorityScore: 88,
    status: 'Resolved',
    department: 'Traffic Control & Signals',
    locationName: 'Irwin Hospital Square Junction',
    district: 'Central Circle',
    lat: 20.9320,
    lng: 77.7510,
    imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80',
    resolvedImageUrl: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=800&q=80',
    upvotes: 189,
    reportedAt: '1 day ago',
    resolvedAt: 'Today, 08:30 AM',
    affectedPeople: 5200,
    aiConfidence: 99,
    duplicateCount: 6,
    timeline: [
      {
        title: 'Reported & Flagged High Priority',
        date: 'Yesterday, 08:30 AM',
        description: 'Signal failure flagged by 6 commuters within 10 minutes.',
        status: 'Reported'
      },
      {
        title: 'Signal Logic Board Replaced',
        date: 'Yesterday, 11:15 AM',
        description: 'New PLC controller installed by Smart Traffic Engineers.',
        status: 'In Progress'
      },
      {
        title: 'Full Functionality Restored',
        date: 'Today, 08:30 AM',
        description: 'Signal synchronizer verified operating on automated 90s cycle.',
        status: 'Resolved',
        actor: 'Chief Traffic Engineer'
      }
    ],
    comments: [
      {
        id: 'c4',
        user: 'Vikram Mehta',
        role: 'Citizen',
        text: 'Intersection is smooth again today. Excellent turn-around time!',
        time: '1 day ago'
      }
    ]
  },
  {
    id: 'issue-6',
    ticketNumber: 'CVE-9055',
    title: 'Fallen Tree Branch Obstructing Arterial Footpath',
    description: 'Large banyan branch broken due to strong winds, blocking pedestrian movement and partially covering lane 1.',
    category: 'Infrastructure',
    severity: 'MEDIUM',
    priorityScore: 74,
    status: 'Resolved',
    department: 'Parks & Urban Forestry',
    locationName: 'Rukmini Nagar, Near Central Park',
    district: 'Rukmini Nagar',
    lat: 20.9250,
    lng: 77.7620,
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    resolvedImageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
    upvotes: 54,
    reportedAt: '2 days ago',
    resolvedAt: 'Yesterday, 04:00 PM',
    affectedPeople: 950,
    aiConfidence: 97,
    duplicateCount: 1,
    timeline: [
      {
        title: 'Report Submitted',
        date: '2 days ago',
        description: 'Photo submitted by local resident association.',
        status: 'Reported'
      },
      {
        title: 'Wood Cutter Crew Cleared Obstruction',
        date: 'Yesterday, 04:00 PM',
        description: 'Branch sawn, cleared from walkway, and transported to green recycling plant.',
        status: 'Resolved'
      }
    ],
    comments: []
  }
];

export const DEMO_SAMPLE_PHOTOS = [
  {
    id: 'sample-1',
    name: 'Road Pothole Hazard',
    category: 'Roads',
    url: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80',
    analysis: {
      issueType: 'Severe Asphalt Cavity',
      confidence: 98,
      severity: 'HIGH' as const,
      priorityScore: 94,
      department: 'Roads & Infrastructure',
      duplicatesNearby: 3,
      recommendedSLAHours: 24,
      detectedKeyFeatures: [
        'Depth: ~12cm | Diameter: ~75cm',
        'Sub-base gravel erosion visible',
        'Located in primary wheel path'
      ],
      summary: 'Critical road safety risk requiring quick-drying asphalt cold patch.'
    }
  },
  {
    id: 'sample-2',
    name: 'Water Main Pipe Burst',
    category: 'Water',
    url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80',
    analysis: {
      issueType: 'Pressurized Water Line Leak',
      confidence: 96,
      severity: 'CRITICAL' as const,
      priorityScore: 92,
      department: 'Water Supply & Sewerage',
      duplicatesNearby: 2,
      recommendedSLAHours: 12,
      detectedKeyFeatures: [
        'High-flow liquid discharge detected',
        'Erosion hazard to surrounding roadway',
        'Potential potable water supply contamination risk'
      ],
      summary: 'Immediate isolation valve shutdown and pipe clamp replacement needed.'
    }
  },
  {
    id: 'sample-3',
    name: 'Illegal Garbage Overflow',
    category: 'Garbage',
    url: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80',
    analysis: {
      issueType: 'Uncontrolled Solid Waste Accumulation',
      confidence: 95,
      severity: 'HIGH' as const,
      priorityScore: 81,
      department: 'Sanitation & Waste Management',
      duplicatesNearby: 1,
      recommendedSLAHours: 24,
      detectedKeyFeatures: [
        'Estimated mass: ~1.2 metric tons',
        'Blocks public pedestrian footpath',
        'Bio-hazard risk near residential school zone'
      ],
      summary: 'Deploy hydraulic compactor truck #7 and sanitize site.'
    }
  },
  {
    id: 'sample-4',
    name: 'Broken Streetlight Pole',
    category: 'Lighting',
    url: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80',
    analysis: {
      issueType: 'Electrical Feeder Switch Failure',
      confidence: 94,
      severity: 'MEDIUM' as const,
      priorityScore: 68,
      department: 'Electrical & Lighting Dept',
      duplicatesNearby: 0,
      recommendedSLAHours: 48,
      detectedKeyFeatures: [
        '6 adjacent luminaires powered off',
        'Low ambient light index (< 2 Lux)',
        'Pedestrian nocturnal safety hazard'
      ],
      summary: 'Inspect terminal junction box and replace faulty photocell sensor.'
    }
  }
];

export const CITY_DISTRICTS = [
  'All Districts',
  'Central Rajapeth',
  'Camp Zone',
  'Badnera Zone',
  'Sai Nagar',
  'Rukmini Nagar',
  'Central Circle'
];
