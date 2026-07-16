"use client";

import { useEffect, useRef } from "react";

// Fallback for browsers that can't play the alpha WebM with real
// transparency (see character-video.tsx). This is a pre-rendered frame
// grid — captured from the source video with its alpha channel correctly
// composited — so playback here doesn't depend on video codec support at
// all, just WebP decoding, which every modern browser (including Safari)
// handles with real alpha.
const SPRITE_SRC = "/videos/character-sprite.webp";
const COLS = 11;
const FRAME_COUNT = 117;
const FRAME_SIZE = 360;
const FPS = 8;

export function CharacterSprite({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = FRAME_SIZE;
    canvas.height = FRAME_SIZE;

    const sprite = new Image();
    sprite.src = SPRITE_SRC;

    let frameId: number;
    let start: number | null = null;

    const drawFrame = (index: number) => {
      const col = index % COLS;
      const row = Math.floor(index / COLS);
      ctx.clearRect(0, 0, FRAME_SIZE, FRAME_SIZE);
      ctx.drawImage(
        sprite,
        col * FRAME_SIZE,
        row * FRAME_SIZE,
        FRAME_SIZE,
        FRAME_SIZE,
        0,
        0,
        FRAME_SIZE,
        FRAME_SIZE,
      );
    };

    const tick = (timestamp: number) => {
      frameId = requestAnimationFrame(tick);
      if (start === null) start = timestamp;
      const elapsed = (timestamp - start) / 1000;
      const index = Math.floor(elapsed * FPS) % FRAME_COUNT;
      drawFrame(index);
    };

    sprite.onload = () => {
      frameId = requestAnimationFrame(tick);
    };

    return () => cancelAnimationFrame(frameId);
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
