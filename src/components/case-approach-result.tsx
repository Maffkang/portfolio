import type { CaseApproachResultSection } from "@/data/cases";

export function CaseApproachResult({
  section,
}: {
  section: CaseApproachResultSection;
}) {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="font-sans text-xl font-medium tracking-tight text-body lg:text-4xl">
        {section.heading}
      </h2>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch">
        <div className="flex flex-col gap-4 bg-white p-4 lg:flex-1">
          <h3 className="font-sans text-lg font-medium tracking-tight text-body lg:text-xl">
            {section.approachTitle}
          </h3>
          {section.approachParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="font-sans text-xs tracking-tight text-body/80 lg:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-4 bg-[#edfae8] p-4 lg:flex-1">
          <h3 className="font-sans text-lg font-medium tracking-tight text-body lg:text-xl">
            {section.resultTitle}
          </h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {section.stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-1">
                <p className="font-sans text-2xl font-medium tracking-tight text-main/80 lg:text-4xl">
                  {stat.value}
                </p>
                <p className="font-sans text-xs tracking-tight text-body/80 lg:text-base">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
