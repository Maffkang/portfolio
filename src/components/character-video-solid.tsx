export function CharacterVideoSolid({ className }: { className?: string }) {
  return (
    <video
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="/images/lego-poster-solid.webp"
    >
      <source src="/videos/lego-solid-mobile.mp4" type="video/mp4" />
      <source src="/videos/lego-solid-mobile.webm" type="video/webm" />
    </video>
  );
}
