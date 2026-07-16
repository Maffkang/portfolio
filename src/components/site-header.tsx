import Link from "next/link";
import { profile, socialLinks } from "@/data/cases";
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
        <div className="mx-auto flex max-w-[1360px] items-center justify-between px-6 py-4 sm:px-10">
          <Link
            href="/"
            className="font-sans text-lg font-medium tracking-tight text-black"
          >
            {profile.name}
          </Link>
          <div className="flex items-center gap-16">
            <nav className="flex items-center gap-8 font-mono text-base tracking-tight text-body">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={
                    link.label === "Email" ? undefined : "noopener noreferrer"
                  }
                  className="hover:text-main"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="bg-main px-6 py-3 font-mono text-base tracking-tight text-white"
              >
                ENG
              </button>
              <a
                href="/cv/marchenko-andrey-cv.pdf"
                download
                className="bg-main px-6 py-3 font-mono text-base tracking-tight text-white"
              >
                Скачать CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
