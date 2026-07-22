import { CaseView } from "@/components/case-view";
import { getContent } from "@/data/cases";

export function generateStaticParams() {
  return getContent("en").cases.map((item) => ({ slug: item.slug }));
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CaseView lang="en" slug={slug} />;
}
