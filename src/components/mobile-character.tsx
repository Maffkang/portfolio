import { CharacterVideo } from "@/components/character-video";

export function MobileCharacter() {
  return (
    <div className="flex justify-center lg:hidden" aria-hidden="true">
      <div className="aspect-square w-[260px] rotate-[9.4deg] sm:w-[300px]">
        <CharacterVideo className="h-full w-full object-contain" />
      </div>
    </div>
  );
}
