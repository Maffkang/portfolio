"use client";

import { useEffect, useRef, useState } from "react";
import { socialLinks } from "@/data/cases";

export function MobileSocialMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="font-sans text-base tracking-tight text-body"
      >
        Social media
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 top-full z-30 mt-2 flex flex-col items-start gap-8 whitespace-nowrap bg-white p-8 font-sans text-base tracking-tight text-body shadow-[0px_0px_16px_0px_rgba(0,0,0,0.06),0px_16px_32px_0px_rgba(0,0,0,0.04)]"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              role="menuitem"
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel={link.label === "Email" ? undefined : "noopener noreferrer"}
              className="hover:text-main"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
