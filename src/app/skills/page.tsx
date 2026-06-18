import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillsSection from "@/components/sections/SkillsSection";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Discover Tannu Priya's tech stack and skills: React, Next.js, Node.js, TypeScript, MongoDB, Python, and more. A versatile Full Stack Developer proficient in 10+ technologies.",
  alternates: { canonical: "https://tannupriya.me/skills" },
  openGraph: {
    title: "Technical Skills | Tannu Priya",
    description:
      "Tannu Priya's complete tech stack: React, Next.js, Node.js, TypeScript, MongoDB, and 10+ more technologies.",
    url: "https://tannupriya.me/skills",
    images: [{ url: "https://tannupriya.me/portfolio-screenshot.png", width: 1200, height: 630, alt: "Tannu Priya Technical Skills" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Skills | Tannu Priya",
    description: "React, Next.js, Node.js, TypeScript, MongoDB and more – Tannu Priya's tech stack.",
    images: ["https://tannupriya.me/portfolio-screenshot.png"],
  },
};

export default function SkillsPage() {
  return (
    <>
      <main className="min-h-screen relative pb-20">
        <Navbar />
        <SkillsSection />
      </main>
      <Footer />
    </>
  );
}
