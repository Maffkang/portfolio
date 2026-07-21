import type { CaseResultStat } from "@/data/cases";

function ResultStatCard({ stat }: { stat: CaseResultStat }) {
  return (
    <div className="flex flex-col items-start gap-3 border border-grey p-4 lg:p-8">
      <div className="flex h-[83px] w-[140px] shrink-0 items-center justify-center bg-white px-8 py-4">
        <p className="whitespace-nowrap font-sans text-4xl font-medium tracking-tight text-body">
          {stat.value}
        </p>
      </div>
      <p className="font-sans text-xs tracking-tight text-body/80 lg:text-base">
        {stat.description}
      </p>
    </div>
  );
}

export function CaseResultStats({
  paragraph,
  stats,
}: {
  paragraph: string;
  stats: CaseResultStat[];
}) {
  return (
    <div className="flex flex-col gap-4 bg-[#edfae8] p-8 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
      <p className="font-sans text-xs tracking-tight text-body/80 lg:w-[489px] lg:shrink-0 lg:text-base">
        {paragraph}
      </p>
      <div className="flex flex-col gap-2 lg:grid lg:w-[680px] lg:shrink-0 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-[7px]">
        {stats.map((stat, index) => (
          <ResultStatCard key={index} stat={stat} />
        ))}
      </div>
    </div>
  );
}
