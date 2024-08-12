import { DateTime } from "luxon";
import { ResumeEducation, ResumeType } from "./types";
import { yyyyMMdd } from "~/constants/dates";

export const schools: ResumeEducation[] = [
  {
    id: 1,
    resumeTypes: [
      ResumeType.Architect,
      ResumeType.MachineLearningEngineer,
      ResumeType.SeniorBackendEngineer,
      ResumeType.SeniorDataEngineer,
      ResumeType.SeniorFullstackEngineer,
      ResumeType.SeniorSoftwareEngineer,
    ],
    startDate: DateTime.fromFormat("2016-06-01", yyyyMMdd),
    endDate: DateTime.fromFormat("2019-08-01", yyyyMMdd),
    GPA: 4.0,
    title: "Masters in Computer Science",
    subtitle: "California State Polytechnic University, Pomona",
    location: "Pomona, CA",
    description: "",
    skillsUsed: [
      1, 3, 5, 6, 9, 10, 16, 17, 18, 19, 20, 24, 33, 34, 35, 39, 41, 49, 56, 57,
      58, 59,
    ],
    accomplishments: [
      [
        [
          ResumeType.Architect,
          ResumeType.MachineLearningEngineer,
          ResumeType.SeniorBackendEngineer,
          ResumeType.SeniorDataEngineer,
          ResumeType.SeniorFullstackEngineer,
          ResumeType.SeniorSoftwareEngineer,
        ],
        [
          "Thesis: using CNN, RNN, GRU combination to track, localize, and phenotype mouse behavior from video.",
        ],
      ],
    ],
  },
  {
    id: 2,
    resumeTypes: [
      ResumeType.Architect,
      ResumeType.MachineLearningEngineer,
      ResumeType.SeniorBackendEngineer,
      ResumeType.SeniorDataEngineer,
      ResumeType.SeniorFullstackEngineer,
      ResumeType.SeniorSoftwareEngineer,
    ],
    startDate: DateTime.fromFormat("2016-06-01", yyyyMMdd),
    endDate: DateTime.fromFormat("2019-08-01", yyyyMMdd),
    GPA: 3.8,
    title: "Prerequisites for MS in Computer Science",
    subtitle: "Pasadena City College",
    location: "Pasadena, CA",
    description: "",
    skillsUsed: [3, 5, 10, 59],
    accomplishments: [
      [
        [
          ResumeType.Architect,
          ResumeType.MachineLearningEngineer,
          ResumeType.SeniorBackendEngineer,
          ResumeType.SeniorDataEngineer,
          ResumeType.SeniorFullstackEngineer,
          ResumeType.SeniorSoftwareEngineer,
        ],
        [],
      ],
    ],
  },
  {
    id: 3,
    resumeTypes: [
      ResumeType.Architect,
      ResumeType.MachineLearningEngineer,
      ResumeType.SeniorBackendEngineer,
      ResumeType.SeniorDataEngineer,
      ResumeType.SeniorFullstackEngineer,
      ResumeType.SeniorSoftwareEngineer,
    ],
    startDate: DateTime.fromFormat("2001-08-01", yyyyMMdd),
    endDate: DateTime.fromFormat("2003-06-01", yyyyMMdd),
    GPA: 3.763,
    title: "Masters in Social Work (MSW)",
    subtitle: "California State University Los Angeles",
    location: "Los Angeles, CA",
    description: "",
    skillsUsed: [60, 61, 62],
    accomplishments: [
      [
        [
          ResumeType.Architect,
          ResumeType.MachineLearningEngineer,
          ResumeType.SeniorBackendEngineer,
          ResumeType.SeniorDataEngineer,
          ResumeType.SeniorFullstackEngineer,
          ResumeType.SeniorSoftwareEngineer,
        ],
        ["Specialization in Aging and Families", "Thesis: Caregiver burden"],
      ],
    ],
  },
];
