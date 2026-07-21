import { CharacterVideoSolid } from "@/components/character-video-solid";

export function PinnedCharacter() {
  return (
    <div className="sticky top-[50vh] -translate-y-1/2 pl-10" aria-hidden="true">
      <div className="aspect-square w-[560px] rotate-[9.4deg] xl:w-[640px]">
        <CharacterVideoSolid
          className="h-full w-full object-contain"
          mp4Src="/videos/lego-solid-desktop.mp4"
          webmSrc="/videos/lego-solid-desktop.webm"
          poster="/images/lego-poster-solid-desktop.webp"
        />
      </div>
    </div>
  );
}
