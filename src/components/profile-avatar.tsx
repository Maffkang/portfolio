export function ProfileAvatar() {
  return (
    <div className="relative h-[258px] w-[178px] shrink-0 overflow-hidden">
      <div
        className="absolute left-0 top-0 size-[302px]"
        style={{
          backgroundImage:
            "linear-gradient(143.5deg, rgb(217, 217, 217) 0.84%, rgb(233, 233, 233) 71.09%)",
        }}
      />
      <div className="absolute left-[-124px] top-[46px] flex h-[246px] w-[321px] items-center justify-center">
        <div className="relative h-[236px] w-[313px] rotate-[1.95deg] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/profile-photo.png"
            alt=""
            className="absolute max-w-none"
            style={{
              left: "-0.69%",
              top: "-21.73%",
              width: "100.43%",
              height: "133.22%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
