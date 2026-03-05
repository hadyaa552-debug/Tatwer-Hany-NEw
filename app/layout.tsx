import type React from "react"
import type { Metadata } from "next"
import { Cairo, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/toaster"
import StructuredData from "./structured-data"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
})
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IL Monte Galala المونت جلالة - تطوير مصر | أبراج فندقية فاخرة على البحر الأحمر بإدارة Marriott",
  description:
    "IL Monte Galala المونت جلالة من تطوير مصر - أول مشروع من نوعه على البحر الأحمر: 10 أبراج سكنية فندقية فاخرة بارتفاع 22 دور على البحر مباشرة في جبل الجلالة، العين السخنة. بإدارة Marriott International مع مارينا عالمية IGY تسع +150 يخت، ممشى سياحي 1 كم، ومركز معارض ومؤتمرات دولي. وحدات متنوعة: ستوديو، 1-3 غرف نوم، لوفت، بنتهاوس - كلها بتشطيب كامل وإطلالة بانورامية على البحر. نظام سداد مرن: 5% مقدم و 10 سنوات تقسيط. الأسعار تبدأ من 10 مليون جنيه.",
  keywords: [
    "المونت جلالة",
    "IL Monte Galala",
    "Il Monte Galala Tatweer Misr",
    "المونت جلالة تطوير مصر",
    "تطوير مصر",
    "جبل الجلالة",
    "العين السخنة",
    "البحر الأحمر",
    "شقق للبيع العين السخنة",
    "شقق جبل الجلالة",
    "أبراج فندقية البحر الأحمر",
    "عقارات ساحلية مصر",
    "Marriott Egypt",
    "ماريوت مصر",
    "فندق ماريوت الجلالة",
    "Marriott Galala",
    "Branded Residences Egypt",
    "وحدات فندقية للبيع",
    "شقق فندقية بحر أحمر",
    "عقارات البحر الأحمر",
    "عقارات ساحلية فاخرة",
    "Galala Mountain",
    "Galala City",
    "مدينة الجلالة",
    "Tatweer Misr",
    "Tatweer Misr Projects",
    "مشاريع تطوير مصر",
    "وحدات سكنية فاخرة",
    "شقق تشطيب كامل",
    "بنتهاوس للبيع",
    "لوفت للبيع مصر",
    "أنظمة سداد مرنة",
    "تقسيط 10 سنوات",
    "مقدم 5%",
    "مارينا يخوت",
    "IGY Marinas Egypt",
    "مارينا العين السخنة",
    "ممشى سياحي",
    "منتجعات البحر الأحمر",
    "استثمار عقاري مصر",
    "عقارات ساحل البحر الأحمر",
  ],
  authors: [{ name: "تطوير مصر للتطوير العقاري" }],
  creator: "Tatweer Misr",
  publisher: "Tatweer Misr",
  metadataBase: new URL("https://tatweermisr-hossam.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      ar: "/",
      en: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "/",
    title: "IL Monte Galala المونت جلالة | أبراج فندقية فاخرة على البحر الأحمر بإدارة Marriott - تطوير مصر",
    description:
      "أول مشروع من نوعه: 10 أبراج سكنية فندقية فاخرة على البحر الأحمر مباشرة في جبل الجلالة. بإدارة Marriott International مع مارينا عالمية ومركز مؤتمرات دولي. مقدم 5% وتقسيط 10 سنوات. الأسعار من 10 مليون جنيه.",
    siteName: "IL Monte Galala - تطوير مصر",
    images: [
      {
        url: "/images/ilmonte/gallery-main.webp",
        width: 1200,
        height: 630,
        alt: "IL Monte Galala - المونت جلالة تطوير مصر - أبراج فندقية فاخرة على البحر الأحمر بإدارة Marriott",
      },
      {
        url: "/images/ilmonte/aerial-sunset.webp",
        width: 1200,
        height: 630,
        alt: "المونت جلالة - منظر جوي بانورامي للأبراج الفندقية على البحر الأحمر",
      },
      {
        url: "/images/ilmonte/villa-1.webp",
        width: 1200,
        height: 630,
        alt: "فيلا فاخرة في IL Monte Galala بإطلالة مباشرة على البحر الأحمر",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IL Monte Galala المونت جلالة - أبراج Marriott الفندقية على البحر الأحمر",
    description:
      "أول مشروع من نوعه: 10 أبراج فندقية فاخرة بإدارة Marriott على البحر الأحمر مباشرة. مارينا عالمية، تشطيب كامل، مقدم 5% وتقسيط 10 سنوات.",
    images: ["/images/ilmonte/gallery-main.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Real Estate",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <StructuredData />
      </head>
      <body className={`${cairo.variable} font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
