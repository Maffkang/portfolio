"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { localizedPath, ui, type Lang } from "@/lib/i18n";

/** How far (px) the visitor has to scroll down before the popup slides in. */
const SCROLL_THRESHOLD = 200;
const DISMISS_KEY = "new-case-popup-dismissed";

/**
 * "New case" popup. Rendered inside the sticky SiteHeader:
 * - desktop (lg+): hangs 56px below the header, aligned to the right edge of the content column;
 * - mobile: pinned to the bottom of the viewport.
 * Appears once the page has been scrolled a little; closing it hides it for the rest of the tab session.
 */
export function NewCasePopup({ lang }: { lang: Lang }) {
  const t = ui[lang].newCase;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isDismissed = () => {
      try {
        return sessionStorage.getItem(DISMISS_KEY) === "1";
      } catch {
        return false;
      }
    };
    // Browsers fire a scroll event when they restore a scrolled position, so no initial call is needed.
    const onScroll = () =>
      setVisible(window.scrollY > SCROLL_THRESHOLD && !isDismissed());
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {}
  };

  return (
    <div className="pointer-events-none fixed inset-x-4 bottom-4 z-30 lg:absolute lg:inset-x-0 lg:bottom-auto lg:top-full lg:mt-14">
      <div className="lg:mx-auto lg:flex lg:max-w-[1360px] lg:justify-end lg:px-10">
        <div
          inert={!visible}
          aria-hidden={!visible}
          className={`relative flex w-full items-start justify-between bg-white p-4 shadow-[0px_0px_16px_0px_rgba(0,0,0,0.06),0px_16px_32px_0px_rgba(0,0,0,0.04)] transition-[opacity,translate] duration-300 ease-out lg:w-[370px] ${
            visible
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "translate-y-4 opacity-0 lg:-translate-y-4"
          }`}
        >
          <Link
            href={localizedPath(lang, `/cases/${t.slug}`)}
            onClick={dismiss}
            className="group flex items-start gap-4 after:absolute after:inset-0"
          >
            <span className="relative size-[82px] shrink-0 overflow-hidden rounded-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/new-case-popup/circle-bg.svg"
                alt=""
                width={82}
                height={82}
                className="absolute inset-0 block"
              />
              <Image
                src="/images/new-case-popup/croc-lego.png"
                alt=""
                width={95}
                height={95}
                className="absolute left-[-3px] top-3 size-[95px] max-w-none object-cover"
              />
            </span>
            <span className="flex w-[187px] flex-col items-start gap-1.5 leading-normal text-body">
              <span className="font-mono text-[10px] leading-[13px] tracking-[-0.3px] opacity-50">
                {t.label}
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="font-sans text-xs font-medium tracking-[-0.12px]">
                  {t.title}
                </span>
                <span className="font-mono text-[10px] leading-[13px] tracking-[-0.3px]">
                  {t.description}
                </span>
              </span>
              <span className="font-mono text-[10px] leading-[13px] tracking-[-0.3px] text-main group-hover:underline">
                {t.cta}
              </span>
            </span>
          </Link>
          <button
            type="button"
            onClick={dismiss}
            aria-label={t.close}
            className="relative z-10 size-6 shrink-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/new-case-popup/x-close.svg"
              alt=""
              width={24}
              height={24}
              className="block"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
