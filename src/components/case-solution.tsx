import Image from "next/image";
import type { CaseImage } from "@/data/cases";

export function CaseSolution({
  heading,
  paragraphs,
  image,
}: {
  heading: string;
  paragraphs: string[];
  image: CaseImage;
}) {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="font-sans text-xl font-medium tracking-tight text-body lg:text-4xl">
        {heading}
      </h2>
      <div className="flex flex-col gap-2 bg-white p-4 lg:flex-row lg:items-start lg:gap-2">
        <div className="flex flex-col gap-2 font-sans text-xs tracking-tight text-body/80 lg:flex-1 lg:text-base">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div
          className="relative w-full lg:h-[348px] lg:w-[665px] lg:shrink-0"
          style={{ aspectRatio: `${image.width} / ${image.height}` }}
        >
          <Image src={image.src} alt="" fill className="object-cover" />
        </div>
      </div>
      <div className="h-px w-full bg-grey" />
    </section>
  );
}
