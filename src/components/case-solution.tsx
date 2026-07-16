import Image from "next/image";
import type { CaseDetail } from "@/data/cases";

export function CaseSolution({ detail }: { detail: CaseDetail }) {
  return (
    <section className="flex flex-col gap-8 py-16">
      <h2 className="font-sans text-xl font-medium tracking-tight text-body lg:text-4xl">
        Решение
      </h2>
      <div className="flex flex-col gap-4 bg-surface p-4 lg:flex-row lg:items-center lg:gap-8">
        <div className="flex flex-col gap-2 font-mono text-xs tracking-tight text-body/80 lg:w-1/2 lg:shrink-0 lg:text-sm">
          {detail.solution.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="relative w-full lg:w-1/2 lg:shrink-0">
          <Image
            src={detail.solution.image.src}
            alt=""
            width={detail.solution.image.width}
            height={detail.solution.image.height}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
      <div className="h-px w-full bg-grey" />
    </section>
  );
}
