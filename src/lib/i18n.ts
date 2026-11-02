export type Lang = "ru" | "en";

export const languages: Lang[] = ["ru", "en"];

/**
 * Given a lang-agnostic ("ru") path like "/" or "/cases/cycle", returns the
 * actual URL for that path in the given language. Russian is unprefixed
 * (the site's original/default URLs); English lives under "/en".
 */
export function localizedPath(lang: Lang, path: string): string {
  if (lang === "ru") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

export const ui: Record<
  Lang,
  {
    downloadCv: string;
    switchLabel: string;
    casesHeading: string;
    role: string;
    back: string;
    casePending: string;
    backToHome: string;
    notFoundHeading: string;
    goHome: string;
    newCase: {
      slug: string;
      label: string;
      title: string;
      description: string;
      cta: string;
      close: string;
    };
  }
> = {
  ru: {
    downloadCv: "Скачать CV",
    switchLabel: "ENG",
    casesHeading: "Кейсы",
    role: "Роль:",
    back: "Назад",
    casePending: "Страница кейса пока готовится.",
    backToHome: "← На главную",
    notFoundHeading: "Оооооо нет, страница не найдена, или находится в работе..",
    goHome: "На главную",
    newCase: {
      slug: "croc-k2",
      label: "Новый кейс",
      title: "CROC, K2 и другие бренды",
      description: "Конференции, айдентика и печать для CROC, K2 и ещё трёх брендов.",
      cta: "Посмотреть",
      close: "Закрыть",
    },
  },
  en: {
    downloadCv: "Download CV",
    switchLabel: "RU",
    casesHeading: "Cases",
    role: "Role:",
    back: "Back",
    casePending: "This case page is still being prepared.",
    backToHome: "← Back to home",
    notFoundHeading: "Ooooh no, this page was not found, or is still in progress..",
    goHome: "Go home",
    newCase: {
      slug: "croc-k2",
      label: "New case",
      title: "CROC, K2 & Other brands",
      description: "Conferences, brand identity and print for CROC, K2 and three more brands.",
      cta: "View",
      close: "Close",
    },
  },
};
