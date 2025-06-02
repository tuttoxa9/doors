import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAESTRO - Шкафы на заказ в Минске | Встроенные шкафы и мебель по индивидуальным размерам",
  description: "Изготовление шкафов на заказ в Минске. Встроенные шкафы, гардеробные, детские шкафы по индивидуальным размерам. Качественная мебель на заказ с гарантией 5 лет. Бесплатная консультация и 3D-визуализация.",
  keywords: "шкафы на заказ, шкафы Минск, встроенные шкафы, шкафы по размерам, мебель на заказ Минск, изготовление шкафов, шкафы на заказ Минск, встроенная мебель, гардеробные на заказ, детские шкафы, MAESTRO",
  authors: [{ name: "MAESTRO" }],
  creator: "MAESTRO",
  publisher: "MAESTRO",
  openGraph: {
    title: "MAESTRO - Шкафы на заказ в Минске",
    description: "Изготовление качественных шкафов на заказ в Минске. Встроенные шкафы, гардеробные по индивидуальным размерам.",
    url: "https://maestroworks.ru",
    siteName: "MAESTRO",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAESTRO - Шкафы на заказ в Минске",
    description: "Качественные шкафы на заказ по индивидуальным размерам в Минске",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
