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
    "UX/UI product designer with 5 years of experience in fintech and IT. Case study portfolio.",
  alternates: {
    languages: {
      ru: "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "Marchenko Andrey — Portfolio",
    description:
      "UX/UI product designer with 5 years of experience in fintech and IT. Case study portfolio.",
    url: "/en",
    siteName: "Marchenko Andrey — Portfolio",
    locale: "en_US",
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
      "UX/UI product designer with 5 years of experience in fintech and IT. Case study portfolio.",
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
