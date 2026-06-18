import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const energyProject = await prisma.project.findFirst({
    where: { title: { contains: "Smart Energy Meter" } }
  });

  if (energyProject) {
    await prisma.project.update({
      where: { id: energyProject.id },
      data: { imageUrl: "/smart-energy-meter.png" }
    });
    console.log("Updated Smart Energy Meter image!");
  }

  const aqiProject = await prisma.project.findFirst({
    where: { title: { contains: "Air Quality" } }
  });

  if (aqiProject) {
    await prisma.project.update({
      where: { id: aqiProject.id },
      data: { imageUrl: "/AQI.png" }
    });
    console.log("Updated AQI image!");
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
