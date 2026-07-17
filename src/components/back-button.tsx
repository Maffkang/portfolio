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
      className="flex size-[52px] shrink-0 items-center justify-center text-body"
    >
      <ArrowLeftIcon className="size-[22px]" />
    </button>
  );
}
