import Image from "next/image";
import type { CaseDetail } from "@/data/cases";

export function CaseSolution({ detail }: { detail: CaseDetail }) {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="font-sans text-xl font-medium tracking-tight text-body lg:text-4xl">
        Решение
      </h2>
      <div className="flex flex-col gap-2.5 bg-white p-4 lg:flex-row lg:items-center lg:gap-2">
        <div className="flex flex-col gap-4 font-mono text-xs tracking-tight text-body/80 lg:flex-1 lg:gap-2 lg:text-base">
          {detail.solution.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="relative aspect-[2694/1408] w-full lg:aspect-auto lg:h-[348px] lg:w-[665px] lg:shrink-0">
          <Image
            src={detail.solution.image.src}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="h-px w-full bg-grey" />
    </section>
  );
}
