"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRightIcon } from "@/components/icons/chevron-right";
import type { CaseAccordionItem } from "@/data/cases";

export function CaseServicesAccordion({
  heading,
  items,
}: {
  heading: string;
  items: CaseAccordionItem[];
}) {
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  return (
    <section className="flex flex-col gap-8">
      <h2 className="font-sans text-xl font-medium tracking-tight text-body lg:text-4xl">
        {heading}
      </h2>
      <div className="flex flex-col gap-2">
        {items.map((item) => {
          const isOpen = openTitle === item.title;
          return (
            <div key={item.title} className="bg-white">
              <button
                type="button"
                onClick={() => setOpenTitle(isOpen ? null : item.title)}
                aria-expanded={isOpen}
                className="group flex w-full items-center justify-between gap-4 px-4 py-4 text-left lg:px-8"
              >
                <span className="font-sans text-sm tracking-tight text-body lg:text-2xl">
                  {item.title}
                </span>
                <ChevronRightIcon
                  className={`size-6 shrink-0 text-body transition-transform duration-200 group-hover:translate-x-1 lg:size-14 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="flex flex-col gap-4 px-4 pb-4 lg:px-8 lg:pb-8">
                  <p className="font-sans text-xs tracking-tight text-body/80 lg:text-base">
                    {item.description}
                  </p>
                  <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:gap-8">
                    {item.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative w-full lg:w-auto"
                        style={{
                          aspectRatio: `${image.width} / ${image.height}`,
                          flexGrow: image.weight ?? 1,
                          flexBasis: 0,
                        }}
                      >
                        <Image
                          src={image.src}
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
