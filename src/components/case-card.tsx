import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons/arrow-up-right";
import type { CaseItem } from "@/data/cases";

export function CaseCard({ item }: { item: CaseItem }) {
  return (
    <Link
      href={`/cases/${item.slug}`}
      className="group flex flex-col bg-white sm:flex-row sm:gap-8 sm:pr-8"
    >
      <div className="relative h-[203px] w-full shrink-0 overflow-hidden sm:h-[302px] sm:w-[285px]">
        <Image
          src={item.cover}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-4 px-2 pb-2 pt-4 sm:gap-6 sm:px-0 sm:py-4">
        <div className="flex flex-col gap-2 sm:gap-4">
          <h3 className="font-sans text-xl font-medium tracking-tight text-body">
            {item.title}
          </h3>
          <p className="font-mono text-xs leading-relaxed tracking-tight text-body/80 sm:text-sm">
            {item.description}
          </p>
        </div>
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="border border-grey px-1.5 py-1.5 font-mono text-sm tracking-tight text-body/80"
              >
                {tag}
              </span>
            ))}
          </div>
          <ArrowUpRightIcon className="size-8 shrink-0 text-body transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:size-10" />
        </div>
      </div>
    </Link>
  );
}
