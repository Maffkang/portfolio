import { getContent } from "@/data/cases";
import type { Lang } from "@/lib/i18n";

export function SiteFooter({ lang }: { lang: Lang }) {
  const { cases, profile, socialLinks } = getContent(lang);
  const year = new Date().getFullYear();
  const casesLabel = lang === "ru" ? "Кейсы:" : "Cases:";
  const contactsLabel = lang === "ru" ? "Контакты" : "Contacts";

  return (
    <footer className="bg-white px-6 py-9 sm:px-10">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <p className="font-sans text-3xl font-medium tracking-tight text-body">
            {profile.footerThanks}
          </p>
          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <p className="font-sans text-lg font-medium tracking-tight text-body">
                {casesLabel}
              </p>
              <ul className="flex flex-col gap-2 font-sans text-sm tracking-tight text-body">
                {cases.map((item) => (
                  <li key={item.slug}>{item.title}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-sans text-lg font-medium tracking-tight text-body">
                {contactsLabel}
              </p>
              <ul className="flex flex-col gap-2 font-sans text-sm tracking-tight text-body/80">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.label === "Email" ? undefined : "_blank"}
                      rel={
                        link.label === "Email"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="hover:text-main"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between font-sans text-sm tracking-tight text-body/80">
          <p>© {profile.legalName}</p>
          <p>{year}</p>
        </div>
      </div>
    </footer>
  );
}
