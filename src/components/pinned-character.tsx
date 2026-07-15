import { CharacterVideo } from "@/components/character-video";

export function PinnedCharacter() {
  return (
    <div className="sticky top-[50vh] -translate-y-1/2 pl-10" aria-hidden="true">
      <div className="aspect-square w-[560px] rotate-[9.4deg] xl:w-[640px]">
        <CharacterVideo className="h-full w-full object-contain" />
      </div>
    </div>
  );
}
