import { useContext, useMemo, Fragment } from "react";
import { ResumeEducation, ResumeType } from "./types";
import { ShoelaceContext } from "~/shoelace";
import { skills } from "./skills";

export default function School({
  s,
  resumeType,
}: {
  s: ResumeEducation;
  resumeType: ResumeType;
}) {
  const { SlTooltip, SlDetails, SlSelect, SlOption } =
    useContext(ShoelaceContext);
  const accomplishments = useMemo(
    () =>
      s.accomplishments.filter((a) => a[0].includes(ResumeType[resumeType])),
    [s.accomplishments]
  );
  return (
    <div>
      <div className="w-11/12" slot="summary">
        <h3 className="font-medium text-lg">
          {s.title}
          <span className="text-sm ml-2 font-semibold">
            (GPA: {s.GPA.toFixed(2)})
          </span>
        </h3>
        <h4 className="text-sm italic flex flex-wrap items-start justify-between">
          <div className="basis-1/3">{s.subtitle}</div>
          <div className="basis-2/3 md:basis-1/3">{s.location}</div>
          <div className="basis-full md:basis-1/3">
            {s.startDate.toFormat("M/yyyy")} -{" "}
            {s.endDate ? s.endDate.toFormat("M/yyyy") : "Present"}
          </div>
        </h4>
      </div>
      <div className="print:hidden">
        {accomplishments.some((a) => a[1].length > 0) ? (
          <>
            <ul className="list list-disc pl-4">
              {accomplishments
                .map((a) => a[1])
                .flat()
                .map((a, i) => (
                  <li key={`accomplishment-${i}`}>{a}</li>
                ))}
            </ul>
          </>
        ) : null}
      </div>
      <div className="print:hidden">
        <h5
          className={`${
            accomplishments.some((a) => a[1].length > 0) ? "mt-3" : "mt-1"
          }`}
        >
          Skills used:
        </h5>
        {s.skillsUsed.map(
          (skillUsed, i, skillsUsed) =>
            `${skills.find((sk) => sk.id === skillUsed)?.title}${
              skillsUsed.length - 1 > i ? ", " : ""
            }`
        )}
      </div>
    </div>
  );
}
