import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log("Adding 10th and 12th education...");
  
  await prisma.education.createMany({
    data: [
      {
        degree: "Class XIIth (Intermediate)",
        institution: "Best Model Public School, Hajipur, Vaishali, Bihar",
        startDate: "2023",
        endDate: "2024",
        description: "Completed Class XIIth education."
      },
      {
        degree: "Class Xth (High School) - 80%",
        institution: "Shri Guru Nanak Khalsa Girls Senior Secondary School, Delhi Cantt-10",
        startDate: "2021",
        endDate: "2022",
        description: "Completed Class Xth with 80% marks."
      }
    ]
  });

  console.log("Successfully added education details!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
