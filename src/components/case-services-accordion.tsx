"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRightIcon } from "@/components/icons/chevron-right";
import type { CaseService } from "@/data/cases";

export function CaseServicesAccordion({
  services,
}: {
  services: CaseService[];
}) {
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  return (
    <section className="flex flex-col gap-8">
      <h2 className="font-sans text-xl font-medium tracking-tight text-body lg:text-4xl">
        Работа с внутренними сервисами:
      </h2>
      <div className="flex flex-col gap-2">
        {services.map((service) => {
          const isOpen = openTitle === service.title;
          return (
            <div key={service.title} className="bg-white">
              <button
                type="button"
                onClick={() => setOpenTitle(isOpen ? null : service.title)}
                aria-expanded={isOpen}
                className="group flex w-full items-center justify-between gap-4 px-4 py-4 text-left lg:px-8"
              >
                <span className="font-mono text-sm tracking-tight text-body lg:text-2xl">
                  {service.title}
                </span>
                <ChevronRightIcon
                  className={`size-6 shrink-0 text-body transition-transform duration-200 group-hover:translate-x-1 lg:size-14 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="flex flex-col gap-4 px-4 pb-4 lg:px-8 lg:pb-8">
                  <p className="font-mono text-xs tracking-tight text-body/80 lg:text-base">
                    {service.description}
                  </p>
                  <Image
                    src={service.image.src}
                    alt=""
                    width={service.image.width}
                    height={service.image.height}
                    className="h-auto w-full max-w-[836px] object-contain"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
