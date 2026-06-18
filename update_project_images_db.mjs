import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const updates = [
    { contains: "Customer Purchase Behaviour Analysis Dashboard", imageUrl: "/customer-purchase-behaviour.png" },
    { contains: "Smart Energy Meter", imageUrl: "/smart-energy-meter.png" },
    { contains: "Krishi: Smart Advisory", imageUrl: "/krishi-smart-advisory-AI.png" }
  ];

  for (const update of updates) {
    const project = await prisma.project.findFirst({
      where: {
        title: {
          contains: update.contains
        }
      }
    });

    if (project) {
      await prisma.project.update({
        where: { id: project.id },
        data: { imageUrl: update.imageUrl }
      });
      console.log(`Updated project containing "${update.contains}" with image ${update.imageUrl}`);
    } else {
      console.log(`Project containing "${update.contains}" not found.`);
    }
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
