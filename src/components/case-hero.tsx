import Image from "next/image";
import type { CaseDetail, CaseItem } from "@/data/cases";

export function CaseHero({
  item,
  detail,
}: {
  item: CaseItem;
  detail: CaseDetail;
}) {
  return (
    <section className="flex flex-col gap-8 bg-[#f0f8ff] p-6 lg:h-[349px] lg:flex-row lg:items-center lg:justify-between lg:p-10">
      <div className="flex max-w-[480px] flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="font-sans text-xl font-medium tracking-tight text-body lg:text-4xl">
            {item.title}
          </h1>
          <p className="font-mono text-xs tracking-tight text-body/80 lg:text-base">
            {detail.tagline}
          </p>
          <div className="flex items-center gap-4 font-mono text-xs tracking-tight text-body/80 lg:text-base">
            <span>Роль:</span>
            <span>{detail.role}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {detail.tags.map((tag) => (
            <span
              key={tag}
              className="border border-main p-1.5 font-mono text-sm tracking-tight text-body/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="relative mx-auto h-[220px] w-[220px] shrink-0 lg:mx-0 lg:h-[300px] lg:w-[300px]">
        <Image
          src={detail.heroImage.src}
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}
