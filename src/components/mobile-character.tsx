import { CharacterVideoSolid } from "@/components/character-video-solid";

export function MobileCharacter() {
  return (
    <div className="flex justify-center lg:hidden" aria-hidden="true">
      <div className="aspect-square w-[300px] rotate-[9.4deg] sm:w-[340px]">
        <CharacterVideoSolid className="h-full w-full object-contain" />
      </div>
    </div>
  );
}
