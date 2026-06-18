import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import FloatingContact from "@/components/FloatingContact";
import Script from "next/script";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://tannupriya.me";
const siteTitle = "Tannu Priya | Aspiring Software Engineer & AI Enthusiast";
const siteDescription =
  "Tannu Priya is a Computer Science Engineering student and Python Intern from Bareilly, India. Transforming Ideas into Intelligent Solutions Through Technology. Building Skills in AI, Data Science & Python.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Tannu Priya",
  },
  description: siteDescription,
  keywords: [
    "Tannu Priya",
    "Python Developer",
    "AI Enthusiast",
    "Data Science",
    "Software Engineer",
    "Python Intern",
    "Aarvion Technologies",
    "Portfolio",
    "Machine Learning",
  ],
  authors: [{ name: "Tannu Priya", url: siteUrl }],
  creator: "Tannu Priya",
  publisher: "Tannu Priya",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Tannu Priya Portfolio",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/portfolio-screenshot.png`,
        width: 1200,
        height: 630,
        alt: "Tannu Priya – Full Stack Developer & Startup Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@tannupriya",
    images: [`${siteUrl}/portfolio-screenshot.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  category: "technology",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tannu Priya",
  url: siteUrl,
  image: `${siteUrl}/portfolio-screenshot.png`,
  jobTitle: "Python Intern & CSE Student",
  worksFor: {
    "@type": "Organization",
    name: "Aarvion Technologies",
  },
  sameAs: [
    "https://linkedin.com/in/tannupriya",
  ],
  knowsAbout: [
    "Python",
    "Artificial Intelligence",
    "Data Science",
    "Machine Learning",
    "Data Analysis",
  ],
  description: siteDescription,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Tannu Priya Portfolio",
  url: siteUrl,
  description: siteDescription,
  author: {
    "@type": "Person",
    name: "Tannu Priya",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/projects?search={search_term_string}`,
    "query-input": "required name=search_term_string",
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
      className={`${outfit.variable} ${inter.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0A101E" />
        <meta name="color-scheme" content="dark" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.country" content="India" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
