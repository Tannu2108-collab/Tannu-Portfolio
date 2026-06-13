import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/sections/AboutSection";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Alok Yadav – a Full Stack Developer and Startup Builder from India. Discover his background, skills, and passion for building impactful digital products.",
  alternates: { canonical: "https://alokyadav.me/about" },
  openGraph: {
    title: "About Alok Yadav | Full Stack Developer",
    description:
      "Learn more about Alok Yadav – a Full Stack Developer and Startup Builder from India specializing in React, Next.js, and Node.js.",
    url: "https://alokyadav.me/about",
    images: [{ url: "https://alokyadav.me/alok-2.jpeg", width: 1200, height: 630, alt: "About Alok Yadav" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Alok Yadav | Full Stack Developer",
    description: "Learn more about Alok Yadav – Full Stack Developer & Startup Builder.",
    images: ["https://alokyadav.me/alok-2.jpeg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen relative pb-20">
        <Navbar />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
