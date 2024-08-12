import { DateTime } from "luxon";
import { ResumeJob, ResumeType } from "./types";
import { yyyyMMdd } from "~/constants/dates";

export const jobs: ResumeJob[] = [
  {
    id: 1,
    resumeTypes: [
      ResumeType.Architect,
      ResumeType.SeniorSoftwareEngineer,
      ResumeType.SeniorBackendEngineer,
      ResumeType.SeniorFullstackEngineer,
      ResumeType.MachineLearningEngineer,
      ResumeType.SeniorDataEngineer,
    ],
    startDate: DateTime.fromFormat("2018-10-01", yyyyMMdd),
    endDate: DateTime.fromFormat("2023-07-01", yyyyMMdd),
    title: "Cofounder and CTO",
    subtitle: "Upful, Inc.",
    description: "",
    location: "Remote (Santa Monica, CA)",
    skillsUsed: [
      1, 2, 3, 6, 7, 8, 13, 16, 18, 19, 20, 21, 23, 24, 25, 27, 28, 29, 30, 31,
      32, 33, 34, 35, 37, 40, 42, 43, 44, 45, 47, 48,
    ],
    accomplishments: [
      [
        [
          ResumeType.Architect,
          ResumeType.MachineLearningEngineer,
          ResumeType.SeniorBackendEngineer,
          ResumeType.SeniorFullstackEngineer,
          ResumeType.SeniorDataEngineer,
          ResumeType.SeniorSoftwareEngineer,
        ],
        [
          "Constructed NLP architecture for real-time language assessment",
          "Constructed a Kubernetes-based system for orchestrating the platform (both GCP GKE and AWS EKS)",
          "Developed gRPC APIs for real-time language assessment",
          "Developed Python real-time NLP pipeline",
          "Developed private gRPC typescript React library for language assessment",
        ],
      ],
    ],
  },
  {
    id: 2,
    resumeTypes: [
      ResumeType.Architect,
      ResumeType.SeniorSoftwareEngineer,
      ResumeType.SeniorBackendEngineer,
      ResumeType.SeniorFullstackEngineer,
    ],
    accomplishments: [
      [
        [
          ResumeType.Architect,
          ResumeType.SeniorSoftwareEngineer,
          ResumeType.MachineLearningEngineer,
          ResumeType.SeniorBackendEngineer,
          ResumeType.SeniorFullstackEngineer,
        ],
        [
          "Built kopanya.org ecosystem for evaluation commissioning using Remix for SSR React",
          "Built international subscription system including GCP functions and pubsub mechanisms for invoicing",
        ],
      ],
    ],
    description: "",
    startDate: DateTime.fromFormat("2023-07-01", yyyyMMdd),
    title: "Cofounder and CTO",
    subtitle: "Kopanya, Inc.",
    location: "Remote (Pasadena, CA)",
    skillsUsed: [
      1, 2, 6, 7, 8, 13, 14, 26, 50, 51, 33, 34, 35, 40, 43, 44, 47, 48,
    ],
  },
  {
    id: 3,
    resumeTypes: [
      ResumeType.Architect,
      ResumeType.SeniorSoftwareEngineer,
      ResumeType.SeniorBackendEngineer,
      ResumeType.SeniorFullstackEngineer,
      ResumeType.SeniorDataEngineer,
      ResumeType.MachineLearningEngineer,
    ],
    accomplishments: [
      [
        [
          ResumeType.Architect,
          ResumeType.SeniorSoftwareEngineer,
          ResumeType.SeniorBackendEngineer,
          ResumeType.SeniorFullstackEngineer,
          ResumeType.SeniorDataEngineer,
          ResumeType.MachineLearningEngineer,
        ],
        [
          "Built statistical anlalysis dashboard for self-report data",
          "Built support for self-report data ingestion and processing",
          "Fine-tuned LLM for batch processing of open-ended self-reports (e.g. thought record patterns)",
        ],
      ],
    ],
    description: "",
    startDate: DateTime.fromFormat("2023-08-01", yyyyMMdd),
    title: "Founder",
    subtitle: "Extend Therapy",
    location: "Remote (Pasadena, CA)",
    skillsUsed: [
      1, 2, 3, 6, 7, 11, 13, 14, 16, 21, 23, 33, 34, 35, 40, 41, 44, 48, 50, 51,
    ],
  },
  {
    id: 4,
    resumeTypes: [
      ResumeType.SeniorSoftwareEngineer,
      ResumeType.SeniorBackendEngineer,
      ResumeType.SeniorFullstackEngineer,
      ResumeType.Architect,
      ResumeType.SeniorDataEngineer,
    ],
    accomplishments: [
      [
        [
          ResumeType.SeniorSoftwareEngineer,
          ResumeType.SeniorBackendEngineer,
          ResumeType.SeniorFullstackEngineer,
          ResumeType.Architect,
          ResumeType.SeniorDataEngineer,
        ],
        [
          "Supported development of VA.gov APIs (RoR) to provide facilities data",
          "Supported accessibility standards for Veterans Administration website",
          "Built support for police statistics data ingestion and deployed Veteran facing pages for future VA Police reporting",
          "Built and deployed components in Liquid templating language and React.js, adhering to stringent accessibility standards",
        ],
      ],
    ],
    description: "",
    startDate: DateTime.fromFormat("2023-07-01", yyyyMMdd),
    title: "Software Engineer III",
    subtitle: "Agile Six Applications, Inc.",
    location: "Remote (San Diego, CA)",
    skillsUsed: [1, 2, 4, 6, 7, 13, 15, 32, 33, 34, 35, 38, 39, 40, 47, 48],
  },
  {
    id: 5,
    resumeTypes: [
      ResumeType.SeniorSoftwareEngineer,
      ResumeType.SeniorBackendEngineer,
      ResumeType.SeniorFullstackEngineer,
      ResumeType.Architect,
      ResumeType.SeniorDataEngineer,
    ],
    accomplishments: [
      [
        [
          ResumeType.SeniorSoftwareEngineer,
          ResumeType.SeniorBackendEngineer,
          ResumeType.SeniorFullstackEngineer,
          ResumeType.Architect,
          ResumeType.SeniorDataEngineer,
        ],
        [
          "Supported raising non-dilutive capital through the Cardano Catalyst project",
          "Built mediators.ai, the marketplace for mediation (FE & BE)",
          "Graph-based recommendations",
          "Constructed bare metal Kubernetes platform to manage interactions with the Cardano blockchain across Unix Domain Sockets",
          "Developed three products for the Cardano community (adatar.me, PAB Log Processor, PMMarketplace)",
          "Taught a course on the Haskell programming language (Haskell <> Coffee on YouTube)",
        ],
      ],
    ],
    description: "",
    startDate: DateTime.fromFormat("2021-11-01", yyyyMMdd),
    endDate: DateTime.fromFormat("2022-10-01", yyyyMMdd),
    title: "Cofounder and CTO",
    subtitle: "Loxe, Inc.",
    location: "Remote (Los Angeles, CA)",
    skillsUsed: [
      52, 53, 54, 1, 2, 5, 6, 7, 13, 29, 32, 33, 34, 35, 40, 41, 48, 49,
    ],
  },
];
