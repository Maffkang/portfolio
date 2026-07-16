import { socialLinks } from "@/data/cases";
import { MobileSocialMenu } from "@/components/mobile-social-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20">
      <div className="mx-4 mt-5 flex items-center justify-between gap-4 bg-white p-2 backdrop-blur-[7.5px] lg:hidden">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="bg-main px-4 py-1.5 font-mono text-sm tracking-tight text-white"
          >
            ENG
          </button>
          <a
            href="/cv/marchenko-andrey-cv.pdf"
            download
            className="bg-main px-4 py-1.5 font-mono text-sm tracking-tight text-white"
          >
            Скачать CV
          </a>
        </div>
        <MobileSocialMenu />
      </div>

      <div className="hidden bg-white/80 backdrop-blur-sm lg:block">
        <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-4 sm:px-10">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="bg-main px-6 py-3 font-mono text-sm tracking-tight text-white"
            >
              ENG
            </button>
            <a
              href="/cv/marchenko-andrey-cv.pdf"
              download
              className="bg-main px-6 py-3 font-mono text-sm tracking-tight text-white"
            >
              Скачать CV
            </a>
          </div>
          <nav className="flex items-center gap-4 font-mono text-sm tracking-tight text-body">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                className="hover:text-main"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
