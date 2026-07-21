import Image from "next/image";
import type { CaseTextCard } from "@/data/cases";

function IntroCard({ card }: { card: CaseTextCard }) {
  return (
    <div
      className={`flex flex-col bg-white p-4 ${
        card.image ? "gap-2.5 lg:gap-4" : "gap-4"
      }`}
    >
      <div className="flex flex-col gap-4">
        <h3 className="font-sans text-lg font-medium tracking-tight text-body lg:text-xl">
          {card.title}
        </h3>
        {card.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="font-sans text-xs tracking-tight text-body/80 lg:text-base"
          >
            {paragraph}
          </p>
        ))}
      </div>
      {card.image && (
        <div
          className="relative w-full"
          style={{ aspectRatio: `${card.image.width} / ${card.image.height}` }}
        >
          <Image src={card.image.src} alt="" fill className="object-cover" />
        </div>
      )}
    </div>
  );
}

export function CaseIntro({
  heading,
  rows,
}: {
  heading: string;
  rows: CaseTextCard[][];
}) {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="font-sans text-xl font-medium tracking-tight text-body lg:text-4xl">
        {heading}
      </h2>
      {rows.map((row, index) => (
        <div key={index} className="contents">
          <div
            className={`grid grid-cols-1 gap-4 lg:gap-8 ${
              row.length > 1 ? "lg:grid-cols-2" : ""
            }`}
          >
            {row.map((card) => (
              <IntroCard key={card.title} card={card} />
            ))}
          </div>
          <div className="h-px w-full bg-grey" />
        </div>
      ))}
    </section>
  );
}
