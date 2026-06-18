import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/sections/AboutSection";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Tannu Priya – a Full Stack Developer and Startup Builder from India. Discover his background, skills, and passion for building impactful digital products.",
  alternates: { canonical: "https://tannupriya.me/about" },
  openGraph: {
    title: "About Tannu Priya | Full Stack Developer",
    description:
      "Learn more about Tannu Priya – a Full Stack Developer and Startup Builder from India specializing in React, Next.js, and Node.js.",
    url: "https://tannupriya.me/about",
    images: [{ url: "https://tannupriya.me/portfolio-screenshot.png", width: 1200, height: 630, alt: "About Tannu Priya" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Tannu Priya | Full Stack Developer",
    description: "Learn more about Tannu Priya – Full Stack Developer & Startup Builder.",
    images: ["https://tannupriya.me/portfolio-screenshot.png"],
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
