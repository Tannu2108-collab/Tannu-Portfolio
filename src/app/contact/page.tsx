import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/sections/ContactSection";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tannu Priya – Full Stack Developer & Startup Builder. Available for freelance projects, collaborations, and full-time opportunities. Reach out via email or LinkedIn.",
  alternates: { canonical: "https://tannupriya.me/contact" },
  openGraph: {
    title: "Contact Tannu Priya | Full Stack Developer",
    description:
      "Hire or collaborate with Tannu Priya. Available for freelance, startups, and full-time roles in Full Stack Development.",
    url: "https://tannupriya.me/contact",
    images: [{ url: "https://tannupriya.me/portfolio-screenshot.png", width: 1200, height: 630, alt: "Contact Tannu Priya" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Tannu Priya | Full Stack Developer",
    description: "Get in touch with Tannu Priya for freelance, collaboration, or full-time opportunities.",
    images: ["https://tannupriya.me/portfolio-screenshot.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen relative pb-20">
        <Navbar />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
