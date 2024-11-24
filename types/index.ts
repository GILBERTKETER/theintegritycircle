export type Project = {
    id: string;
    name: string;
    category: 'Infrastructure' | 'Health' | 'Water' | 'Education' | 'Agriculture';
    status: 'Ongoing' | 'Completed';
    description: string;
    budget: number;
    startDate: string;
    endDate?: string;
    location: string;
    progress?: number;
  }
  
  export type PlannedInitiative = {
    id: string;
    name: string;
    budget: number;
    expectedCompletion: string;
    goals: string[];
    description: string;
    stakeholders: string[];
  }
  
  export type FundingSource = {
    governmentGrants: number;
    ngoFunding: number;
    pppFunding: number;
    details: {
      source: string;
      amount: number;
      purpose: string;
    }[];
  }
  
  export type PublicParticipation = {
    upcomingSessions: {
      date: string;
      location: string;
      topic: string;
    }[];
    pastFeedback: {
      date: string;
      topic: string;
      summary: string;
      outcome: string;
    }[];
  }
  
  export type EnvironmentalProject = {
    id: string;
    name: string;
    type: string;
    impact: string;
    status: string;
    startDate: string;
    endDate?: string;
    description: string;
  }
  
  export type County = {
    id: string;
    name: string;
    projects: Project[];
    plannedInitiatives: PlannedInitiative[];
    funding: FundingSource;
    publicParticipation: PublicParticipation;
    environmentalProjects: EnvironmentalProject[];
  }

  export interface OngoingProject {
    id: number;
    title: string;
    description: string;
    progress: number;
    priority: 'High' | 'Medium' | 'Low';
    status: 'On Track' | 'At Risk' | 'Delayed';
    startDate: string;
    endDate: string;
    budget: number;
    spent: number;
    team: number;
    tags: string[];
    risks: number;
    tasks: {
      completed: number;
      total: number;
    };
    department: string;
    leadBy: string;
    lastUpdate: string;
  }
  
  export interface FilterState {
    status: string;
    priority: string;
    department: string;
  }
  
  export interface MetricCardProps {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    value: string;
    change?: number;
  }
  
  export interface ProjectCardProps {
    project: Project;
    onSelect: (project: Project) => void;
  }
  
  export interface FilterDropdownProps {
    label: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
  }