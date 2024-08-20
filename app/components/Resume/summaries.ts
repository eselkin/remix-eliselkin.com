import { ResumeType, Summary } from "./types";

export const summaries: Summary[] = [
  {
    id: 1,
    resumeTypes: [ResumeType.Architect],
    statements: [
      "Software architect with 7 years of experience building technology startups from thr ground up using cutting-edge technologies and data-driven methodologies.",
    ],
  },
  {
    id: 2,
    resumeTypes: [ResumeType.MachineLearningEngineer],
    statements: [
      "Machine learning engineer with 7 years of experience building (PyTorch, TensorFlow) and deploying machine learning models in production environments (Vertex, Sagemaker, EC2, Databricks) for batch and real-time inference.",
    ],
  },
  {
    id: 3,
    resumeTypes: [ResumeType.SeniorBackendEngineer],
    statements: [
      "Senior backend engineer with 7 years of experience building scalable, reliable, and secure RESTful APIs using Node/Express, Python/Django, Ruby/Rails, and Java/Spring.",
      "Experienced in building and deploying microservices using Docker and Kubernetes.",
      "Proficient in designing, optimizing, and scaling SQL and NoSQL databases (PostgreSQL, Cassandra, MongoDB, Redis, Memcached).",
    ],
  },
];
