import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@/components/google-analytics";
import { GoogleAds } from "@/components/google-ads";
import { generateStructuredData } from "@/lib/seo";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yourwebsite.com'),
  title: {
    default: "Modern Tech Startup Landing Page",
    template: "%s | Your Company"
  },
  description: "Discover our innovative solutions for modern businesses. Explore our services, team, and get in touch.",
  keywords: ["tech startup", "innovation", "solutions", "business", "contact", "software", "development", "consulting"],
  authors: [{ name: "Your Company" }],
  creator: "Your Company",
  publisher: "Your Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "technology",
  classification: "Business Services",
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
  openGraph: {
    title: "Modern Tech Startup Landing Page",
    description: "Discover our innovative solutions for modern businesses.",
    url: "/",
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || "Your Company",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Company Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Tech Startup Landing Page",
    description: "Discover our innovative solutions for modern businesses.",
    images: ["/og-image.jpg"],
    creator: "@yourcompany",
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourwebsite.com'
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Your Company'

  const structuredData = generateStructuredData({
    title: "Modern Tech Startup Landing Page",
    description: "Discover our innovative solutions for modern businesses. Explore our services, team, and get in touch.",
    url: siteUrl,
    image: `${siteUrl}/og-image.jpg`,
    siteName: siteName,
    type: 'website'
  })

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
        <GoogleAds
          GADS_CONVERSION_ID={process.env.NEXT_PUBLIC_GADS_CONVERSION_ID}
          GADS_CONVERSION_LABEL={process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
