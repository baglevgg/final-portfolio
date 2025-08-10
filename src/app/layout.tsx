import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrlString = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteUrl = new URL(siteUrlString);
const socialSameAs = [
  process.env.NEXT_PUBLIC_GITHUB_URL,
  process.env.NEXT_PUBLIC_LINKEDIN_URL,
  process.env.NEXT_PUBLIC_YOUTUBE_URL,
  process.env.NEXT_PUBLIC_TWITTER_URL,
  process.env.NEXT_PUBLIC_LEETCODE_URL,
  process.env.NEXT_PUBLIC_PORTFOLIO_URL,
].filter(Boolean) as string[];

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Gaurav Dhakal | AI/ML Engineer | Learn Byte",
    template: "%s | Gaurav Dhakal",
  },
  description:
    "Personal site of Gaurav Dhakal — AI/ML/DL engineer. Focused on machine learning, deep learning, and data structures & algorithms. Learn Byte brand.",
  keywords: [
    "Gaurav",
    "Gaurav Dhakal",
    "Learn Byte",
    "AI",
    "Machine Learning",
    "Deep Learning",
    "Data Structures",
    "Algorithms",
  ],
  authors: [{ name: "Gaurav Dhakal" }],
  creator: "Gaurav Dhakal",
  publisher: "Learn Byte",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Gaurav Dhakal | AI/ML Engineer | Learn Byte",
    description:
      "AI/ML/DL engineer building intelligent systems. Explore projects, skills, and contact.",
    siteName: "Gaurav Dhakal",
    images: [
      {
        url: "/globe.svg",
        width: 1200,
        height: 630,
        alt: "Gaurav Dhakal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Dhakal | AI/ML Engineer | Learn Byte",
  description:
      "AI/ML/DL engineer building intelligent systems. Explore projects, skills, and contact.",
    images: ["/globe.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={`${siteUrlString}/`} />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gaurav Dhakal",
              alternateName: ["Gaurav"],
              url: siteUrlString,
              jobTitle: "AI/ML Engineer",
              brand: { "@type": "Brand", name: "Learn Byte" },
              worksFor: { "@type": "Organization", name: "Learn Byte" },
              image: `${siteUrlString}/globe.svg`,
              sameAs: socialSameAs,
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "Deep Learning",
                "Data Structures and Algorithms",
                "Python",
                "NumPy",
                "Pandas",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Learn Byte",
              url: siteUrlString,
              logo: `${siteUrlString}/globe.svg`,
              brand: "Learn Byte",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Gaurav Dhakal",
              url: siteUrlString,
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
