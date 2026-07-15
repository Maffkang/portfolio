export function CharacterVideo({ className }: { className?: string }) {
  return (
    <video
      className={className}
      autoPlay
      loop
      muted
      playsInline
      poster="/images/lego-poster.webp"
    >
      <source src="/videos/lego-alpha.webm" type="video/webm" />
    </video>
  );
}
