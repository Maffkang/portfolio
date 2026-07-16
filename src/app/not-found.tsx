import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-surface font-sans text-body">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1360px] flex-1 px-6 sm:px-10">
        <div className="flex flex-col gap-8 py-16 lg:relative lg:min-h-[720px] lg:gap-0 lg:py-0">
          <div className="flex flex-col items-start gap-8 lg:absolute lg:top-[140px] lg:max-w-[592px]">
            <p className="max-w-[353px] font-sans text-4xl font-medium tracking-tight text-black lg:max-w-[592px]">
              {"Оооооо"}
              <br className="lg:hidden" />
              {" нет, страница"}
              <br className="lg:hidden" />
              {" не найдена, или находится в работе.."}
            </p>
            <Link
              href="/"
              className="bg-main px-8 py-3 font-sans text-base font-medium tracking-tight text-white"
            >
              На главную
            </Link>
          </div>
          <div className="relative -mx-6 h-[380px] shrink-0 overflow-hidden sm:-mx-10 lg:absolute lg:top-0 lg:right-0 lg:mx-0 lg:size-[680px] lg:overflow-visible">
            <Image
              src="/images/not-found.webp"
              alt=""
              fill
              className="object-cover object-top lg:object-contain"
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
