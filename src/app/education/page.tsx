import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EducationSection from "@/components/sections/EducationSection";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Education",
  description:
    "Alok Yadav's academic background and educational qualifications. Computer Science graduate with hands-on training in Full Stack Web Development and Software Engineering.",
  alternates: { canonical: "https://alokyadav.me/education" },
  openGraph: {
    title: "Education | Alok Yadav",
    description:
      "Alok Yadav's academic qualifications in Computer Science and his hands-on journey into Full Stack Development.",
    url: "https://alokyadav.me/education",
    images: [{ url: "https://alokyadav.me/alok-2.jpeg", width: 1200, height: 630, alt: "Alok Yadav Education" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Education | Alok Yadav",
    description: "Alok Yadav's academic background in Computer Science and Software Engineering.",
    images: ["https://alokyadav.me/alok-2.jpeg"],
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
