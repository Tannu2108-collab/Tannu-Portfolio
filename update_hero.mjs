import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const updatedProfile = await prisma.profileInfo.update({
    where: {
      id: '6a2d22095cca3141e9cec158'
    },
    data: {
      heroImage: '/tannu-hero.jpeg'
    }
  });
  console.log('Successfully updated profile image for:', updatedProfile.name);
  console.log('New hero image URL:', updatedProfile.heroImage);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
