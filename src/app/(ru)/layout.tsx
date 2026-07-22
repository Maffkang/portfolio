import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marchenkoandrew.art"),
  title: "Marchenko Andrey — Portfolio",
  description:
    "UX/UI дизайнер с 5 годами опыта в fintech и IT. Портфолио кейсов.",
  alternates: {
    languages: {
      ru: "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "Marchenko Andrey — Portfolio",
    description:
      "UX/UI дизайнер с 5 годами опыта в fintech и IT. Портфолио кейсов.",
    url: "/",
    siteName: "Marchenko Andrey — Portfolio",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/og-card.png",
        width: 1200,
        height: 630,
        alt: "Marchenko Andrey — Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marchenko Andrey — Portfolio",
    description:
      "UX/UI дизайнер с 5 годами опыта в fintech и IT. Портфолио кейсов.",
    images: [
      {
        url: "/images/og-card.png",
        width: 1200,
        height: 630,
        alt: "Marchenko Andrey — Portfolio",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
