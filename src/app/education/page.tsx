import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EducationSection from "@/components/sections/EducationSection";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Education",
  description:
    "Tannu Priya's academic background and educational qualifications. Computer Science graduate with hands-on training in Full Stack Web Development and Software Engineering.",
  alternates: { canonical: "https://tannupriya.me/education" },
  openGraph: {
    title: "Education | Tannu Priya",
    description:
      "Tannu Priya's academic qualifications in Computer Science and his hands-on journey into Full Stack Development.",
    url: "https://tannupriya.me/education",
    images: [{ url: "https://tannupriya.me/portfolio-screenshot.png", width: 1200, height: 630, alt: "Tannu Priya Education" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Education | Tannu Priya",
    description: "Tannu Priya's academic background in Computer Science and Software Engineering.",
    images: ["https://tannupriya.me/portfolio-screenshot.png"],
  },
};

export default function EducationPage() {
  return (
    <>
      <main className="min-h-screen relative pb-20">
        <Navbar />
        <EducationSection />
      </main>
      <Footer />
    </>
  );
}
