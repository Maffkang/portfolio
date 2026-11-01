"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRightIcon } from "@/components/icons/chevron-right";
import type {
  CaseImage,
  CasePortfolioItem,
  CasePortfolioSection,
} from "@/data/cases";

const DESKTOP_COLS_CLASS: Record<number, string> = {
  4: "lg:grid-cols-4",
  6: "lg:grid-cols-6",
};

function GridImages({
  images,
  desktopColumns,
  blurred,
}: {
  images: CaseImage[];
  desktopColumns: number;
  blurred?: boolean;
}) {
  return (
    <div
      className={`grid w-full grid-cols-2 gap-1 ${
        DESKTOP_COLS_CLASS[desktopColumns] ?? "lg:grid-cols-4"
      } ${blurred ? "blur-sm" : ""}`}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="relative w-full"
          style={{ aspectRatio: `${image.width} / ${image.height}` }}
        >
          <Image src={image.src} alt="" fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}

function LongreadImages({ images }: { images: CaseImage[] }) {
  return (
    <div className="grid w-full grid-cols-2 gap-2 lg:flex lg:gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[168/238] w-full overflow-hidden bg-white lg:aspect-[312/542] lg:w-[312px] lg:flex-1"
        >
          <Image
            src={image.src}
            alt=""
            fill
            className="object-cover object-top"
          />
        </div>
      ))}
    </div>
  );
}

function PrintImages({
  covers,
  banners,
}: {
  covers: CaseImage[];
  banners: CaseImage[];
}) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="grid grid-cols-2 gap-2 lg:flex lg:gap-2">
        {covers.map((image, index) => (
          <div
            key={index}
            className="relative w-full lg:flex-1"
            style={{ aspectRatio: `${image.width} / ${image.height}` }}
          >
            <Image src={image.src} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>
      <div className="flex w-full flex-col gap-1 lg:w-[645px]">
        {banners.map((image, index) => (
          <div
            key={index}
            className="relative w-full"
            style={{ aspectRatio: `${image.width} / ${image.height}` }}
          >
            <Image src={image.src} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

function PortfolioField({ item }: { item: CasePortfolioItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-4 px-4 py-4 text-left lg:px-8"
      >
        <span className="font-mono text-sm tracking-tight text-body lg:text-2xl">
          {item.title}
        </span>
        <ChevronRightIcon
          className={`size-6 shrink-0 text-body transition-transform duration-200 group-hover:translate-x-1 lg:size-14 ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>
      {open && (
        <div className="flex flex-col gap-4 px-4 pb-4 lg:gap-6 lg:px-8 lg:pb-8">
          <p className="font-sans text-xs tracking-tight text-body/80 lg:text-base">
            {item.description}
          </p>
          {item.kind === "grid" && item.secondaryDescription && (
            <p className="-mt-2 font-sans text-xs tracking-tight text-body/50 lg:-mt-4 lg:text-base">
              {item.secondaryDescription}
            </p>
          )}
          {item.kind === "grid" && (
            <GridImages
              images={item.images}
              desktopColumns={item.desktopColumns}
              blurred={item.blurImages}
            />
          )}
          {item.kind === "longreads" && (
            <LongreadImages images={item.longreads} />
          )}
          {item.kind === "print" && (
            <PrintImages covers={item.covers} banners={item.banners} />
          )}
        </div>
      )}
    </div>
  );
}

export function CasePortfolioAccordion({
  section,
}: {
  section: CasePortfolioSection;
}) {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="font-sans text-xl font-medium tracking-tight text-body lg:text-4xl">
        {section.heading}
      </h2>
      <div className="flex flex-col gap-2">
        {section.items.map((item) => (
          <PortfolioField key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
