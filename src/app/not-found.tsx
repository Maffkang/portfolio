import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-surface font-sans text-body">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1360px] flex-1 px-6 sm:px-10">
        <div className="flex flex-col gap-12 py-16 lg:relative lg:min-h-[720px] lg:gap-0 lg:py-0">
          <div className="flex flex-col items-start gap-8 lg:absolute lg:top-[140px] lg:max-w-[592px]">
            <p className="font-sans text-2xl font-medium tracking-tight text-black lg:text-4xl">
              Оооооо нет, страница не найдена, или находится в работе..
            </p>
            <Link
              href="/"
              className="bg-main px-8 py-3 font-sans text-base font-medium tracking-tight text-white"
            >
              На главную
            </Link>
          </div>
          <div className="relative mx-auto size-[260px] shrink-0 lg:absolute lg:top-0 lg:right-0 lg:mx-0 lg:size-[680px]">
            <Image
              src="/images/not-found.webp"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
