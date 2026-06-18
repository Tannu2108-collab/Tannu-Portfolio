import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const evProject = await prisma.project.findFirst({
    where: { title: { contains: "Smart EV Charging" } }
  });

  if (evProject) {
    await prisma.project.update({
      where: { id: evProject.id },
      data: {
        title: "TripDekho - Travel Planning Platform",
        description: "A modern web application for finding your dream trip, getting instant suggestions for your next adventure, and exploring top travel destinations seamlessly.",
        techStack: ["React", "Next.js", "Web Development", "UI/UX"],
        imageUrl: "/tripdekho.png"
      }
    });
    console.log("Updated project successfully to TripDekho!");
  } else {
    console.log("Smart EV project not found.");
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
