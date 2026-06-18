import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExperienceSection from "@/components/sections/ExperienceSection";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Explore Tannu Priya's professional work experience as a Tech Associate at Invertis Innovation & Incubation and other roles, showcasing his journey in full stack development and startup building.",
  alternates: { canonical: "https://tannupriya.me/experience" },
  openGraph: {
    title: "Work Experience | Tannu Priya",
    description:
      "Tannu Priya's professional experience as a Tech Associate, Full Stack Developer, and Startup Builder.",
    url: "https://tannupriya.me/experience",
    images: [{ url: "https://tannupriya.me/portfolio-screenshot.png", width: 1200, height: 630, alt: "Tannu Priya Work Experience" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Experience | Tannu Priya",
    description: "Tannu Priya's professional experience as a Full Stack Developer & Startup Builder.",
    images: ["https://tannupriya.me/portfolio-screenshot.png"],
  },
};

export default function ExperiencePage() {
  return (
    <>
      <main className="min-h-screen relative pb-20">
        <Navbar />
        <ExperienceSection />
      </main>
      <Footer />
    </>
  );
}
