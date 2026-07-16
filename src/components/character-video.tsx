"use client";

import { useEffect, useRef, useState } from "react";

// The source video encodes transparency as WebM/VP9 alpha, but some mobile
// browsers (notably iOS Safari) decode the video without compositing that
// alpha channel, showing the solid green backing (~rgb(0, 208, 0)) baked
// into the base frame instead of a transparent one.
//
// We feature-detect this by drawing an early frame over a magenta probe
// canvas: if a corner that should be transparent still comes back green,
// the browser isn't honoring alpha. Reconstructing per-pixel transparency
// from that baked-in green ourselves is lossy (compression noise around
// moving edges keys inconsistently), so rather than show a glitchy result
// we fall back to the static (properly alpha-encoded) poster image on
// browsers that can't play the video with real transparency.
const GREEN_MATCH_TOLERANCE = 40;

function isGreenScreen(r: number, g: number, b: number) {
  return (
    Math.abs(r - 0) < GREEN_MATCH_TOLERANCE &&
    Math.abs(g - 208) < GREEN_MATCH_TOLERANCE &&
    Math.abs(b - 0) < GREEN_MATCH_TOLERANCE
  );
}

export function CharacterVideo({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [supportsAlpha, setSupportsAlpha] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const probe = document.createElement("canvas");
    probe.width = 20;
    probe.height = 20;
    const probeCtx = probe.getContext("2d", { willReadFrequently: true });
    if (!probeCtx) return;

    const runProbe = () => {
      if (video.readyState < video.HAVE_CURRENT_DATA) return;

      probeCtx.fillStyle = "rgb(255, 0, 255)";
      probeCtx.fillRect(0, 0, probe.width, probe.height);
      probeCtx.drawImage(video, 0, 0, probe.width, probe.height);
      const [r, g, b] = probeCtx.getImageData(5, 5, 1, 1).data;

      setSupportsAlpha(!isGreenScreen(r, g, b));
    };

    video.addEventListener("loadeddata", runProbe);
    runProbe();

    return () => video.removeEventListener("loadeddata", runProbe);
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className={supportsAlpha ? className : "sr-only"}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/lego-poster.webp"
      >
        <source src="/videos/lego-alpha.webm" type="video/webm" />
      </video>
      {!supportsAlpha && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/images/lego-poster.webp"
          alt=""
          aria-hidden="true"
          className={className}
        />
      )}
    </>
  );
}
