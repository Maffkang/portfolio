import type { CaseRoleResultSection } from "@/data/cases";

export function CaseRoleResult({
  section,
}: {
  section: CaseRoleResultSection;
}) {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="font-sans text-xl font-medium tracking-tight text-body lg:text-4xl">
        {section.heading}
      </h2>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <div className="flex flex-col gap-4 bg-white p-4 lg:flex-1">
          <h3 className="font-sans text-lg font-medium tracking-tight text-body lg:text-xl">
            {section.roleTitle}
          </h3>
          <ul className="flex list-disc flex-col gap-2 pl-[18px] font-mono text-xs tracking-tight text-body/80 lg:gap-4 lg:pl-6 lg:text-base">
            {section.roleList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-8 lg:flex-1">
          <div className="flex flex-col gap-4 bg-[#d7ebd0] p-4">
            <h3 className="font-sans text-lg font-medium tracking-tight text-body lg:text-xl">
              {section.resultTitle}
            </h3>
            {section.resultParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="font-mono text-xs tracking-tight text-body/80 lg:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <a
            href={section.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-main px-6 py-3 font-mono text-base tracking-tight text-white underline"
          >
            {section.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
