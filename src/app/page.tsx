import { CaseCard } from "@/components/case-card";
import { Hero } from "@/components/hero";
import { MobileCharacter } from "@/components/mobile-character";
import { PinnedCharacter } from "@/components/pinned-character";
import { ProfileAvatar } from "@/components/profile-avatar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cases, profile } from "@/data/cases";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-surface font-sans text-body">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1360px] flex-1 px-6 pb-24 sm:px-10">
        <div className="grid lg:grid-cols-[739px_1fr] lg:gap-8">
          <div className="flex flex-col gap-[72px] pt-10 lg:pt-16">
            <Hero />

            <MobileCharacter />

            <section className="flex max-w-[705px] flex-col gap-6 bg-white p-8 sm:flex-row">
              <ProfileAvatar />
              <div className="flex min-w-0 flex-1 flex-col gap-4">
                <h2 className="font-sans text-xl font-medium tracking-tight text-body">
                  {profile.greeting}
                </h2>
                <p className="font-sans text-sm leading-relaxed tracking-tight text-body/80">
                  {profile.bio}
                </p>
              </div>
            </section>

            <section className="max-w-[705px]">
              <h2 className="font-sans text-4xl font-medium tracking-tight text-body">
                Кейсы
              </h2>
              <div className="mt-12 flex flex-col gap-8">
                {cases.map((item) => (
                  <CaseCard key={item.slug} item={item} />
                ))}
              </div>
            </section>
          </div>

          <div className="relative hidden lg:block">
            <PinnedCharacter />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
