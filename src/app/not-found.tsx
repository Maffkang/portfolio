import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-surface font-sans text-body">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-[1360px] flex-1 flex-col-reverse items-center gap-8 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:py-24">
        <div className="flex flex-col items-start gap-8">
          <p className="max-w-[592px] font-sans text-2xl font-medium tracking-tight text-black lg:text-4xl">
            Оооооо нет, страница не найдена, или находится в работе..
          </p>
          <Link
            href="/"
            className="bg-main px-8 py-3 font-sans text-base font-medium tracking-tight text-white"
          >
            На главную
          </Link>
        </div>
        <div className="relative size-[260px] shrink-0 lg:size-[420px]">
          <Image src="/images/not-found.webp" alt="" fill className="object-contain" />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
