import Image from "next/image";
import type { CaseDetail, CaseItem } from "@/data/cases";

function HeroContent({
  item,
  detail,
}: {
  item: CaseItem;
  detail: CaseDetail;
}) {
  return (
    <>
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
    </>
  );
}

export function CaseHero({
  item,
  detail,
}: {
  item: CaseItem;
  detail: CaseDetail;
}) {
  return (
    <section>
      {/* Desktop: background photo, text positioned to match the Figma offsets */}
      <div className="relative hidden overflow-hidden lg:block lg:h-[349px]">
        <Image
          src={detail.heroBanner.desktopBackground.src}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-[37px] left-[39px] flex max-w-[480px] flex-col gap-8">
          <HeroContent item={item} detail={detail} />
        </div>
      </div>

      {/* Mobile: background photo, text flows in the padded box on top */}
      <div className="relative aspect-[370/477] w-full overflow-hidden lg:hidden">
        <Image
          src={detail.heroBanner.mobileBackground.src}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="relative flex flex-col gap-8 p-8">
          <HeroContent item={item} detail={detail} />
        </div>
      </div>
    </section>
  );
}
