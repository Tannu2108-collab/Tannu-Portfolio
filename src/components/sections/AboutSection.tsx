import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import LeetCodeCard from "@/components/LeetCodeCard";
import GithubCalendarCard from "@/components/GithubCalendarCard";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { TypingAnimation } from "@/components/ui/TypingAnimation";

export default async function AboutSection() {
  const profile = await prisma.profileInfo.findFirst();
  const techSkills = await prisma.techSkill.findMany();

  return (
    <div id="about" className="max-w-6xl mx-auto px-6 pt-20 relative z-10 scroll-mt-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <AnimatedHeading as="h1" className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            <TypingAnimation text="About Me" delay={0.1} highlight="Me" />
          </AnimatedHeading>
          <p className="text-lg text-gray-400 leading-relaxed text-justify">
            Hello! I'm Tannu Priya, a dedicated Computer Science Engineering student pursuing my B.Tech from Invertis University. I enjoy exploring new technologies, solving coding challenges, and building practical solutions that create real-world impact. My goal is to develop strong technical expertise while contributing to innovative technology-driven projects.
          </p>
          

        </div>

        <div className="relative h-[300px] lg:h-[380px] w-[85%] max-w-[340px] mx-auto rounded-3xl overflow-hidden glass-card border border-white/10">
          <Image 
            src={profile?.heroImage || "/portfolio-screenshot.png"}
            alt="About me"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-center">
            <p className="text-2xl font-bold text-white mb-2">{profile?.name || "Tannu Priya"}</p>
            <p className="text-neon-blue font-medium">{profile?.titles?.[0] || "Python Intern"}</p>
          </div>
        </div>
      </div>

    </div>
  );
}
