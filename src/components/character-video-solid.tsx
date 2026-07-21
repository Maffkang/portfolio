export function CharacterVideoSolid({
  className,
  mp4Src = "/videos/lego-solid-mobile.mp4",
  webmSrc = "/videos/lego-solid-mobile.webm",
  poster = "/images/lego-poster-solid.webp",
}: {
  className?: string;
  mp4Src?: string;
  webmSrc?: string;
  poster?: string;
}) {
  return (
    <video
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster={poster}
    >
      <source src={mp4Src} type="video/mp4" />
      <source src={webmSrc} type="video/webm" />
    </video>
  );
}
