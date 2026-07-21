export function CaseResultBox({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="flex flex-col gap-4 bg-[rgba(113,194,85,0.25)] p-4 font-sans text-xs tracking-tight text-body/80 lg:text-base">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
