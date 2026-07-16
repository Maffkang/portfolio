import Image from "next/image";
import type { CaseDetail } from "@/data/cases";

export function CaseIntro({ detail }: { detail: CaseDetail }) {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="font-sans text-xl font-medium tracking-tight text-body lg:text-4xl">
        Вводные
      </h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col gap-4 bg-surface p-4">
          <h3 className="font-sans text-lg font-medium tracking-tight text-body lg:text-xl">
            Контекст и специфика
          </h3>
          <p className="font-mono text-xs tracking-tight text-body/80 lg:text-sm">
            {detail.intro.context}
          </p>
        </div>
        <div className="flex flex-col gap-4 bg-surface p-4">
          <h3 className="font-sans text-lg font-medium tracking-tight text-body lg:text-xl">
            Моя роль и вклад
          </h3>
          <p className="font-mono text-xs tracking-tight text-body/80 lg:text-sm">
            {detail.intro.myRole}
          </p>
        </div>
      </div>
      <div className="h-px w-full bg-grey" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col gap-4 bg-surface p-4">
          <h3 className="font-sans text-lg font-medium tracking-tight text-body lg:text-xl">
            Проблема
          </h3>
          <p className="font-mono text-xs tracking-tight text-body/80 lg:text-sm">
            {detail.intro.problem}
          </p>
          <div className="relative w-full">
            <Image
              src={detail.intro.problemImage.src}
              alt=""
              width={detail.intro.problemImage.width}
              height={detail.intro.problemImage.height}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-surface p-4">
          <h3 className="font-sans text-lg font-medium tracking-tight text-body lg:text-xl">
            Цели
          </h3>
          <p className="font-mono text-xs tracking-tight text-body/80 lg:text-sm">
            {detail.intro.goals}
          </p>
        </div>
      </div>
      <div className="h-px w-full bg-grey" />
    </section>
  );
}
