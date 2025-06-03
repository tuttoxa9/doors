import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import StructuredData from "../components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAESTRO - Шкафы на заказ в Минске | Мебель по индивидуальным размерам",
  description: "Изготовление шкафов на заказ в Минске. Шкафы, гардеробные, детские шкафы по индивидуальным размерам. Качественная мебель на заказ с гарантией 5 лет. Бесплатная консультация и 3D-визуализация.",
  keywords: "шкафы на заказ, шкафы Минск, шкафы по размерам, мебель на заказ Минск, изготовление шкафов, шкафы на заказ Минск, гардеробные на заказ, детские шкафы, MAESTRO",
  authors: [{ name: "MAESTRO" }],
  creator: "MAESTRO",
  publisher: "MAESTRO",
  alternates: {
    canonical: "https://maestroworks.ru",
    types: {
      'application/rss+xml': [
        { url: '/api/rss', title: 'MAESTRO RSS Feed' }
      ]
    }
  },
  other: {
    'geo.region': 'BY-HM',
    'geo.placename': 'Минск',
    'geo.position': '53.9045;27.5615',
    'ICBM': '53.9045, 27.5615',
    'business:contact_data:locality': 'Минск',
    'business:contact_data:country_name': 'Беларусь',
    'business:contact_data:phone_number': '+375 (29) 123-45-67',
  },
  openGraph: {
    title: "MAESTRO - Шкафы на заказ в Минске",
    description: "Изготовление качественных шкафов на заказ в Минске. Шкафы, гардеробные по индивидуальным размерам.",
    url: "https://maestroworks.ru",
    siteName: "MAESTRO",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "https://maestroworks.ru/showroom.webp",
        width: 1200,
        height: 630,
        alt: "MAESTRO - Шкафы на заказ в Минске",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAESTRO - Шкафы на заказ в Минске",
    description: "Качественные шкафы на заказ по индивидуальным размерам в Минске",
    images: ["https://maestroworks.ru/showroom.webp"],
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
        <link rel="alternate" type="application/rss+xml" title="MAESTRO RSS Feed" href="/api/rss" />
        <link rel="canonical" href="https://maestroworks.ru" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=+375291234567" />
        <meta property="business:contact_data:street_address" content="ул. Примерная, 123" />
        <meta property="business:contact_data:locality" content="Минск" />
        <meta property="business:contact_data:region" content="Минская область" />
        <meta property="business:contact_data:postal_code" content="220000" />
        <meta property="business:contact_data:country_name" content="Беларусь" />
        <StructuredData />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
