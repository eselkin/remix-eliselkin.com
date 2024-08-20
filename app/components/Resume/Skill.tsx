import React, { useContext, useMemo, useState } from "react";
import { ResumeSkill, ResumeSkillProficiency } from "./types";
import { ShoelaceContext } from "~/shoelace";
import { DateTime } from "luxon";

export default function SkillComponent({
  skill,
  isLast,
}: {
  skill: ResumeSkill;
  isLast: boolean;
}) {
  const { SlTooltip, SlDetails, SlSelect, SlOption } =
    useContext(ShoelaceContext);
  return (
    <React.Fragment key={`skill-${skill.id}`}>
      <SlTooltip>
        <span className="cursor-pointer mr-1 text-sm">
          {skill.title}
          {isLast ? "" : ", "}
        </span>
        <div slot="content">
          <p>Proficiency: {ResumeSkillProficiency[skill.profieciency]}</p>
          <p>
            Length used:{" "}
            {Math.round(
              skill.endDate
                ? skill.endDate.diff(skill.startDate, "years").years
                : DateTime.now().diff(skill.startDate, "years").years
            )}{" "}
            years
          </p>
          {skill.subtitle && <p>{skill.subtitle}</p>}
        </div>
      </SlTooltip>
    </React.Fragment>
  );
}
