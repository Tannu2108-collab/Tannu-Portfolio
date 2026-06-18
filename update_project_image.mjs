import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const project = await prisma.project.findFirst({
    where: {
      title: {
        contains: "Smart Energy Meter"
      }
    }
  });

  if (project) {
    await prisma.project.update({
      where: { id: project.id },
      data: { imageUrl: "/smart-meter-hardware-latest.png" }
    });
    console.log("Updated Smart Energy Meter project image URL to /smart-meter-hardware-latest.png successfully!");
  } else {
    console.log("Project not found!");
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
