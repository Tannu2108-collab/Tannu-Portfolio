import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const projectData = {
    title: "Customer Purchase Behaviour Analysis Dashboard",
    description: "An interactive Customer Purchase Behaviour Analysis dashboard using Excel to understand customer trends, sales performance, and profit patterns.\n\nProject Highlights:\n- Monthly Sales & Profit Trends\n- Category-wise Profit (Waterfall Chart)\n- Sales Share % by Category\n- State-wise Sales Map\n- Top 10 Product Categories\n- Dynamic Filters (Year, Segment, Region, State)\n\nKey Insights:\n- Technology category gives the highest profit\n- Phones & Chairs are top-selling items\n- Strong sales peak in November–December\n- California, New York & Texas lead in total revenue",
    techStack: ["Excel", "Data Analysis", "Dashboard", "Data Visualization"],
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  };

  const existingProject = await prisma.project.findFirst({
    where: { title: projectData.title }
  });

  if (existingProject) {
    console.log("Project already exists. Updating it...");
    await prisma.project.update({
      where: { id: existingProject.id },
      data: projectData
    });
  } else {
    console.log("Adding new project...");
    await prisma.project.create({
      data: projectData
    });
  }
  
  console.log("Project processing complete!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
