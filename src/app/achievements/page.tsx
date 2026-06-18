import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AchievementsSection from "@/components/sections/AchievementsSection";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "View Tannu Priya's certifications, awards, and accomplishments as a Full Stack Developer and Startup Builder. Recognitions from leading organizations in technology and innovation.",
  alternates: { canonical: "https://tannupriya.me/achievements" },
  openGraph: {
    title: "Achievements & Certifications | Tannu Priya",
    description:
      "Tannu Priya's awards, certifications, and accomplishments in Full Stack Development and Startup Building.",
    url: "https://tannupriya.me/achievements",
    images: [{ url: "https://tannupriya.me/portfolio-screenshot.png", width: 1200, height: 630, alt: "Tannu Priya Achievements" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Achievements & Certifications | Tannu Priya",
    description: "Tannu Priya's awards, certifications, and accomplishments as a developer.",
    images: ["https://tannupriya.me/portfolio-screenshot.png"],
  },
};

export default function AchievementsPage() {
  return (
    <>
      <main className="min-h-screen relative pb-20">
        <Navbar />
        <AchievementsSection />
      </main>
      <Footer />
    </>
  );
}
