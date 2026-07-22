import Image from "next/image";
import { getContent } from "@/data/cases";
import type { Lang } from "@/lib/i18n";

export function Hero({ lang }: { lang: Lang }) {
  const { profile, profileTags } = getContent(lang);
  return (
    <div className="flex flex-col items-end gap-4">
      <p className="w-full text-right font-sans text-lg font-medium tracking-tight text-body sm:text-xl">
        {profile.name}
      </p>
      <Image
        src="/images/portfolio-logo.svg"
        alt="Portfolio"
        width={739}
        height={108}
        priority
        className="h-auto w-full"
      />
      <div className="flex flex-wrap justify-end gap-3">
        {profileTags.map((tag) => (
          <span
            key={tag}
            className="border border-main px-6 py-2.5 font-mono text-sm tracking-tight text-body"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
