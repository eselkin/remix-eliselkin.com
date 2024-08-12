import React, { useContext, useMemo, useState } from "react";
import { skills } from "./skills";
import { jobs } from "./jobs";
import {
  ResumeSkill,
  ResumeSkillProficiency,
  ResumeSkillType,
  ResumeType,
} from "./types";
import { round, startCase } from "lodash-es";
import { ShoelaceContext } from "~/shoelace";
import { DateTime } from "luxon";
import SkillComponent from "./Skill";
import JobComponent from "./Job";
import { schools } from "./schools";
import School from "./School";
export default function ResumeComponent() {
  const { SlTooltip, SlDetails, SlSelect, SlOption } =
    useContext(ShoelaceContext);

  const [selectedResumeType, setSelectedResumeType] = useState<ResumeType>(
    ResumeType.Architect
  );
  const skillObject = useMemo(() => {
    const skillsTemp = skills.reduce((acc, skill) => {
      if (skill.resumeTypes.includes(selectedResumeType)) {
        acc[`${skill.skillType}`] = [
          ...(acc[`${skill.skillType}`] || []),
          skill,
        ];
      }
      return acc;
    }, {} as Record<string, ResumeSkill[]>);
    for (const key of Object.keys(skillsTemp)) {
      skillsTemp[key].sort((a, b) => b.profieciency - a.profieciency);
    }
    return skillsTemp;
  }, [skills, selectedResumeType]);
  return (
    <div>
      <h1 className="text-3xl">Eli Selkin</h1>
      <h2 className="mb-4">L.C.S.W. BBS CA #27109, M.S.</h2>
      <SlSelect
        onSlChange={(e) => {
          setSelectedResumeType(ResumeType[e.target.value]);
        }}
        value={`${selectedResumeType}`}
      >
        <h2 className="text-xl mb-2" slot="label">
          Resume Type
        </h2>
        {Object.keys(ResumeType)
          .filter((rt) => rt != ResumeType.Therapist)
          .map((rt, i) =>
            /[0-9]/.test(rt) ? null : (
              <SlOption key={`resume-type-${i}`} value={rt}>
                {startCase(rt)}
              </SlOption>
            )
          )}
      </SlSelect>
      <h2 className="text-xl mt-4 mb-2">Skills (sorted by skill level)</h2>
      {Object.entries(skillObject).map(([key, value]) => (
        <SlDetails key={`skill-type-${key}`}>
          <h3 slot="summary" className="text-lg font-medium">
            {startCase(ResumeSkillType[parseInt(key)])}
          </h3>
          <div className="-mt-2">
            {value.map((skill, i, a) => (
              <SkillComponent
                key={`skill-${skill.id}`}
                skill={skill}
                isLast={a.length - 1 === i}
              />
            ))}
          </div>
        </SlDetails>
      ))}
      <h2 className="text-xl mt-4 mb-2">Employment</h2>
      {jobs
        .filter((j) => j.resumeTypes.includes(selectedResumeType))
        .sort((a, b) => b.startDate.toMillis() - a.startDate.toMillis())
        .map((j) => (
          <JobComponent
            key={`job-${j.id}`}
            j={j}
            selectedResumeType={selectedResumeType}
          />
        ))}
      <h2 className="text-xl mt-4 mb-2">Education</h2>
      {schools
        .filter((s) => s.resumeTypes.includes(selectedResumeType))
        .sort((a, b) => b.startDate.toMillis() - a.startDate.toMillis())
        .map((s) => (
          <School
            key={`school-${s.id}`}
            s={s}
            resumeType={selectedResumeType}
          />
        ))}
    </div>
  );
}
