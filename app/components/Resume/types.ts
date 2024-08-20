import { DateTime } from "luxon";

export enum ResumeType {
  Architect = "Architect",
  SeniorSoftwareEngineer = "SeniorSoftwareEngineer",
  SeniorBackendEngineer = "SeniorBackendEngineer",
  SeniorFullstackEngineer = "SeniorFullstackEngineer",
  MachineLearningEngineer = "MachineLearningEngineer",
  SeniorDataEngineer = "SeniorDataEngineer",
  Therapist = "Therapist",
}
export type ResumeItemBase = { id: number; resumeTypes: ResumeType[] };

export type ResumeItem = ResumeItemBase & {
  startDate: DateTime;
  endDate?: DateTime;
  title: string;
  subtitle?: string;
};

type Accomplishment<T, K> = [T, K];

type Accomplishments<T, K> = Accomplishment<T, K>[];

export type ResumeItemDescription = {
  description: string;
  skillsUsed: number[];
  accomplishments: Accomplishments<ResumeType[], string[]>;
};

export type ResumeItemLocation = {
  location: string;
};

export enum ResumeSkillType {
  Languages,
  FrameworksAndRuntimes,
  Libraries,
  Database,
  DevOps,
  Methodology,
  MachineLearningAndDataEngineering,
  Other,
  TherapyModalities,
}

export enum ResumeSkillProficiency {
  Basic = 0,
  Intermediate = 1,
  Advanced = 2,
  Expert = 3,
}

export type ResumeSkill = ResumeItem & {
  skillType: ResumeSkillType;
  profieciency: ResumeSkillProficiency;
};

export type ResumeJob = ResumeItem & ResumeItemDescription & ResumeItemLocation;
export type ResumeEducation = ResumeItem &
  ResumeItemDescription &
  ResumeItemLocation & {
    GPA: number;
  };

export type Summary = ResumeItemBase & { statements: string[] };
