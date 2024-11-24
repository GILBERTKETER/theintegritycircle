import { County } from '../types';

export const sampleCountyData: County = {
  id: "nairobi-001",
  name: "Nairobi",
  projects: [
    {
      id: "proj-001",
      name: "Outer Ring Road Expansion",
      category: "Infrastructure",
      status: "Ongoing",
      description: "Expansion of Outer Ring Road to reduce traffic congestion and improve connectivity",
      budget: 5000000,
      startDate: "2024-01-15",
      location: "Eastern Nairobi",
      progress: 65
    },
    {
      id: "proj-002",
      name: "Mama Lucy Hospital Upgrade",
      category: "Health",
      status: "Completed",
      description: "Modernization of facilities and addition of specialized care units",
      budget: 2500000,
      startDate: "2023-06-01",
      endDate: "2024-02-28",
      location: "Umoja",
      progress: 100
    },
    {
      id: "proj-003",
      name: "Clean Water Initiative",
      category: "Water",
      status: "Ongoing",
      description: "Installation of water purification systems in underserved areas",
      budget: 1500000,
      startDate: "2024-02-01",
      location: "Various Locations",
      progress: 30
    }
  ],
  plannedInitiatives: [
    {
      id: "plan-001",
      name: "Digital Learning Centers",
      budget: 3000000,
      expectedCompletion: "2025-12-31",
      goals: [
        "Establish 10 digital learning centers",
        "Train 5000 youth in digital skills",
        "Provide free internet access"
      ],
      description: "Creation of community digital learning hubs",
      stakeholders: ["Education Department", "ICT Authority", "Local Communities"]
    }
  ],
  funding: {
    governmentGrants: 10000000,
    ngoFunding: 2500000,
    pppFunding: 5000000,
    details: [
      {
        source: "National Government",
        amount: 10000000,
        purpose: "Infrastructure Development"
      },
      {
        source: "World Bank",
        amount: 2500000,
        purpose: "Healthcare Projects"
      }
    ]
  },
  publicParticipation: {
    upcomingSessions: [
      {
        date: "2024-12-15",
        location: "City Hall",
        topic: "2025 Budget Allocation"
      },
      {
        date: "2024-12-20",
        location: "Community Center",
        topic: "Environmental Conservation"
      }
    ],
    pastFeedback: [
      {
        date: "2024-11-01",
        topic: "Road Infrastructure",
        summary: "Community input on priority roads",
        outcome: "Identified 5 critical road projects"
      }
    ]
  },
  environmentalProjects: [
    {
      id: "env-001",
      name: "Urban Forestry Initiative",
      type: "Reforestation",
      impact: "High",
      status: "Ongoing",
      startDate: "2024-03-01",
      description: "Planting 10,000 trees across the county",
    }
  ]
};