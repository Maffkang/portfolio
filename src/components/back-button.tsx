"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@/components/icons/arrow-left";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      aria-label="Назад"
      className="pointer-events-auto sticky top-20 z-10 flex size-[52px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/80 text-body backdrop-blur-sm transition-colors hover:bg-white lg:top-24"
    >
      <ArrowLeftIcon className="size-[22px]" />
    </button>
  );
}
