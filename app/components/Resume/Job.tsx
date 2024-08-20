import React, { useContext } from "react";
import { skills } from "./skills";
import { ResumeType, ResumeJob } from "./types";
import { ShoelaceContext } from "~/shoelace";

export default function JobComponent({
  j,
  selectedResumeType,
}: {
  j: ResumeJob;
  selectedResumeType: ResumeType;
}) {
  const { SlTooltip, SlDetails, SlSelect, SlOption } =
    useContext(ShoelaceContext);

  return (
    <div>
      <h3 className="font-semibold text-medium">
        {j.title} <span className="text-sm font-normal">- {j.subtitle}</span>
      </h3>
      <h4 className="text-xs italic flex flex-wrap items-start justify-between">
        <div className="basis-1/2">{j.location}</div>
        <div className="basis-1/2">
          {j.startDate.toFormat("M/yyyy")} -{" "}
          {j.endDate ? j.endDate.toFormat("M/yyyy") : "Present"}
        </div>
      </h4>
      <ul className="list list-disc pl-4 print:text-xs">
        {j.accomplishments
          .filter((a) => a[0].includes(ResumeType[selectedResumeType]))
          .map((a) => a[1])
          .flat()
          .map((a, i) => (
            <li key={`accomplishment-${i}`}>{a}</li>
          ))}
      </ul>
      <h5 className="mt-3 print:text-xs">Skills used:</h5>
      <div className="text-sm print:text-xs">
        {j.skillsUsed.map(
          (s, i, su) =>
            `${skills.find((sk) => sk.id === s)?.title}${
              su.length - 1 > i ? ", " : ""
            }`
        )}
      </div>
    </div>
  );
}
