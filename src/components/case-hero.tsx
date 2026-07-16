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
    <section>
      {/* Desktop: background photo from Figma, real text overlaid on top */}
      <div className="relative hidden overflow-hidden lg:block lg:h-[349px]">
        <Image
          src={detail.heroBanner.desktopBackground.src}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-[37px] left-[39px] flex max-w-[480px] flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="font-sans text-4xl font-medium tracking-tight text-body">
              {item.title}
            </h1>
            <p className="font-mono text-base tracking-tight text-body/80">
              {detail.tagline}
            </p>
            <div className="flex items-center gap-4 font-mono text-base tracking-tight text-body/80">
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
      </div>

      {/* Mobile: pre-rendered banner (Figma hasn't split this frame into layers yet) */}
      <Image
        src={detail.heroBanner.mobile.src}
        alt={`${item.title} — ${detail.tagline}`}
        width={detail.heroBanner.mobile.width}
        height={detail.heroBanner.mobile.height}
        className="h-auto w-full lg:hidden"
        priority
      />
    </section>
  );
}
