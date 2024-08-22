import React, { useContext, useMemo, useState } from "react";
import { skills } from "./skills";
import { jobs } from "./jobs";
import { ResumeSkill, ResumeSkillType, ResumeType } from "./types";
import { startCase } from "lodash-es";
import { ShoelaceContext } from "~/shoelace";
import SkillComponent from "./Skill";
import JobComponent from "./Job";
import { schools } from "./schools";
import School from "./School";
import { summaries } from "./summaries";
import Summary from "./Summary";
import { Link } from "@remix-run/react";
import { useTheme } from "~/zustand";
export default function ResumeComponent() {
  const { SlDetails, SlSelect, SlOption } = useContext(ShoelaceContext);
  const { theme } = useTheme();

  const [selectedResumeType, setSelectedResumeType] = useState<ResumeType>(
    ResumeType.Architect
  );
  const summary = useMemo(() => {
    return summaries
      .filter((s) => s.resumeTypes.includes(selectedResumeType))
      .map((s) => s.statements)
      .flat();
  }, [summaries, selectedResumeType]);
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
      <h1 className="text-3xl flex md:flex-row items-baseline">
        <div className="">Eli Selkin</div>
        <div className="ml-2 text-xl">L.C.S.W., M.S.</div>
        <div className="text-xs ml-2">BBS CA #27109</div>
      </h1>
      <h2 className="text-sm mb-2">
        <Link
          to="mailto:eli@eliselkin.com"
          className={`link link-hover ${
            theme === "sl-theme-dark" ? "link-accent" : "link-primary"
          } text-xs`}
        >
          eli@eliselkin.com
        </Link>
        <Link
          to="tel:626-616-2685"
          className={`ml-2 link link-hover ${
            theme === "sl-theme-dark" ? "link-accent" : "link-primary"
          } text-xs`}
        >
          626.616.2685
        </Link>
        <Link
          to="https://github.com/eselkin"
          className={`ml-2 link link-hover ${
            theme === "sl-theme-dark" ? "link-accent" : "link-primary"
          } text-xs`}
        >
          github.com/eselkin
        </Link>
      </h2>
      <SlSelect
        onSlChange={(e) => {
          setSelectedResumeType(ResumeType[e.target.value]);
        }}
        value={`${selectedResumeType}`}
        className="print:hidden"
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
      {(summary?.length || 0) > 0 && (
        <>
          <h2 className="text-xl mt-4 mb-2 font-semibold">Summary</h2>
          <Summary summary={summary} />
        </>
      )}
      <h2 className="text-xl mt-4 mb-2 font-bold print:hidden">Skills</h2>
      {Object.entries(skillObject).map(([key, value]) => (
        <div key={`skill-type-${key}`} className="print:hidden">
          <span className="text-sm font-medium mr-2">
            {startCase(ResumeSkillType[parseInt(key)])}:
          </span>
          {value.map((skill, i, a) => (
            <SkillComponent
              key={`skill-${skill.id}`}
              skill={skill}
              isLast={a.length - 1 === i}
            />
          ))}
        </div>
      ))}
      <h2 className="text-xl font-bold mt-4 mb-2">Employment</h2>
      <div className="flex flex-col space-y-4">
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
      </div>
      <h2 className="text-xl font-bold mt-4 mb-2">Education</h2>
      <div className="flex flex-col space-y-4">
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
    </div>
  );
}
