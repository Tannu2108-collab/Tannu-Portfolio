import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    // Seed Admin
    const adminExists = await prisma.admin.findUnique({ where: { email: 'admin@tannupriya.com' } });
    if (!adminExists) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      await prisma.admin.create({
        data: {
          email: 'admin@tannupriya.com',
          password: hashedPassword,
          name: 'Tannu Priya',
        }
      });
    }

    // Seed Profile Info
    const profileExists = await prisma.profileInfo.findFirst();
    if (!profileExists) {
      await prisma.profileInfo.create({
        data: {
          name: "Tannu Priya",
          titles: ["Full Stack Developer", "Tech Associate", "Startup Builder"],
          bio: "I build scalable web applications, intelligent software systems, and real-world digital products that solve meaningful problems. Currently serving as a Tech Associate at Invertis Innovation & Incubation.",
          heroImage: "/portfolio-screenshot.png",
          githubUrl: "https://github.com/tannupriya",
          linkedinUrl: "https://linkedin.com/in/tannupriya",
          emailAddress: "admin@tannupriya.com"
        }
      });
    }

    // Seed Stats
    const statsExist = await prisma.stat.findFirst();
    if (!statsExist) {
      await prisma.stat.createMany({
        data: [
          { label: "Projects Built", value: "50+", icon: "Layout" },
          { label: "Technologies", value: "10+", icon: "Code" },
          { label: "Hours of Coding", value: "1000+", icon: "Zap" },
          { label: "Startup Solutions", value: "5+", icon: "Rocket" },
        ]
      });
    }

    return NextResponse.json({ message: 'Seeding completed successfully!' });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}
