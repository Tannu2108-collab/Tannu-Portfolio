import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const updatedProject = await prisma.project.update({
    where: {
      id: '6a2d220a5cca3141e9cec163'
    },
    data: {
      imageUrl: '/new-dashboard.jpg'
    }
  });
  console.log('Successfully updated project:', updatedProject.title);
  console.log('New image URL:', updatedProject.imageUrl);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
