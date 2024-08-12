import { useContext } from "react";
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
    <SlDetails>
      <div className="w-11/12" slot="summary">
        <h3 className="font-medium text-lg">{j.title}</h3>
        <h4 className="text-sm italic flex flex-wrap items-start justify-between">
          <div className="basis-1/3">{j.subtitle}</div>
          <div className="basis-2/3 md:basis-1/3">{j.location}</div>
          <div className="basis-full md:basis-1/3">
            {j.startDate.toFormat("M/yyyy")} -{" "}
            {j.endDate ? j.endDate.toFormat("M/yyyy") : "Present"}
          </div>
        </h4>
      </div>
      <h5 className="-mt-2">Accomplishments:</h5>
      <ul className="list list-disc pl-4">
        {j.accomplishments
          .filter((a) => a[0].includes(ResumeType[selectedResumeType]))
          .map((a) => a[1])
          .flat()
          .map((a, i) => (
            <li key={`accomplishment-${i}`}>{a}</li>
          ))}
      </ul>
      <h5 className="mt-3">Skills used:</h5>
      {j.skillsUsed.map(
        (s, i, su) =>
          `${skills.find((sk) => sk.id === s)?.title}${
            su.length - 1 > i ? ", " : ""
          }`
      )}
    </SlDetails>
  );
}
