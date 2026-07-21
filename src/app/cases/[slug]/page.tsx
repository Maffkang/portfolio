import { notFound } from "next/navigation";
import Link from "next/link";
import { CaseHero } from "@/components/case-hero";
import { CaseIntro } from "@/components/case-intro";
import { CaseSolution } from "@/components/case-solution";
import { CaseServicesAccordion } from "@/components/case-services-accordion";
import { CaseResultBox } from "@/components/case-result-box";
import { CaseResultStats } from "@/components/case-result-stats";
import { CaseRoleResult } from "@/components/case-role-result";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BackButton } from "@/components/back-button";
import { caseDetails, cases } from "@/data/cases";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = cases.find((c) => c.slug === slug);
  if (!item) notFound();

  const detail = caseDetails[slug];

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-surface font-sans text-body">
      <SiteHeader />
      {detail ? (
        <main className="relative flex-1">
          <div className="pointer-events-none absolute inset-0 z-10">
            <div className="pointer-events-auto mx-auto h-full w-full max-w-[1360px] px-6 pt-10 sm:px-10 lg:pt-16">
              <BackButton />
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-18 px-6 pt-10 pb-36 sm:px-10 lg:pt-16">
            <CaseHero item={item} detail={detail} />
            <CaseIntro heading={detail.introHeading} rows={detail.introRows} />
            {detail.solutionHeading &&
              detail.solutionParagraphs &&
              detail.solutionImage && (
                <CaseSolution
                  heading={detail.solutionHeading}
                  paragraphs={detail.solutionParagraphs}
                  image={detail.solutionImage}
                />
              )}
            {detail.roleResultSection && (
              <CaseRoleResult section={detail.roleResultSection} />
            )}
            {detail.accordionHeading && detail.accordionItems && (
              <CaseServicesAccordion
                heading={detail.accordionHeading}
                items={detail.accordionItems}
              />
            )}
            {detail.resultParagraphs && (
              <CaseResultBox paragraphs={detail.resultParagraphs} />
            )}
            {detail.resultStatsSection && (
              <CaseResultStats
                paragraph={detail.resultStatsSection.paragraph}
                stats={detail.resultStatsSection.stats}
              />
            )}
          </div>
        </main>
      ) : (
        <main className="mx-auto flex w-full max-w-[1360px] flex-1 flex-col items-start gap-6 px-6 py-24 sm:px-10">
          <BackButton />
          <h1 className="font-sans text-2xl font-medium tracking-tight text-body lg:text-4xl">
            {item.title}
          </h1>
          <p className="font-sans text-sm tracking-tight text-body/80">
            Страница кейса пока готовится.
          </p>
          <Link href="/" className="font-sans text-sm text-main hover:underline">
            ← На главную
          </Link>
        </main>
      )}
      <SiteFooter />
    </div>
  );
}
