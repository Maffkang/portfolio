import Image from "next/image";
import type { CaseDetail, CaseItem } from "@/data/cases";

export function CaseHero({
  item,
  detail,
}: {
  item: CaseItem;
  detail: CaseDetail;
}) {
  const alt = `${item.title} — ${detail.tagline}`;

  return (
    <section>
      <Image
        src={detail.heroBanner.desktop.src}
        alt={alt}
        width={detail.heroBanner.desktop.width}
        height={detail.heroBanner.desktop.height}
        className="hidden h-auto w-full lg:block"
        priority
      />
      <Image
        src={detail.heroBanner.mobile.src}
        alt={alt}
        width={detail.heroBanner.mobile.width}
        height={detail.heroBanner.mobile.height}
        className="h-auto w-full lg:hidden"
        priority
      />
    </section>
  );
}
