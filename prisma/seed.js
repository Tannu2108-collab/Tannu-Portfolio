import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log("Clearing database...");
  await prisma.profileInfo.deleteMany();
  await prisma.project.deleteMany();
  await prisma.techSkill.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.education.deleteMany();
  await prisma.service.deleteMany();
  await prisma.stat.deleteMany();
  await prisma.achievement.deleteMany();

  console.log("Seeding database...");

  // Seed Admin
  const adminExists = await prisma.admin.findUnique({ where: { email: 'tannup245@gmail.com' } });
  if (!adminExists) {
    const hashedPassword = await bcrypt.hash('tannu123', 10);
    await prisma.admin.create({
      data: {
        email: 'tannup245@gmail.com',
        password: hashedPassword,
        name: 'Tannu Priya',
      }
    });
    console.log("Admin created (tannup245@gmail.com / tannu123)");
  }

  // Seed Profile Info
  await prisma.profileInfo.create({
    data: {
      name: "Tannu Priya",
      titles: ["Python Intern", "AI & Data Science Enthusiast", "B.Tech CSE Student"],
      bio: "I am a Computer Science Engineering student at Invertis University with a strong interest in Artificial Intelligence, Data Science, and Python Development. Currently working as a Python Intern at Aarvion Technologies, I am gaining practical experience in programming, problem-solving, and real-world application development. I am passionate about learning emerging technologies and continuously improving my technical skills through projects, internships, and certifications.",
      heroImage: "/portfolio-screenshot.png", 
      resumeLink: "/resume.pdf",
      githubUrl: "", 
      linkedinUrl: "https://www.linkedin.com/in/tannupriya", 
      twitterUrl: "",
      emailAddress: "tannup245@gmail.com"
    }
  });

  // Seed Stats
  await prisma.stat.createMany({
    data: [
      { label: "Projects Built", value: "10+", icon: "Layout" },
      { label: "Technologies", value: "5+", icon: "Code" },
      { label: "Hours of Coding", value: "500+", icon: "Zap" },
      { label: "Certifications", value: "5+", icon: "Award" },
    ]
  });

  // Seed Services (Areas of Interest)
  await prisma.service.createMany({
    data: [
      { title: "Python Programming", description: "Developing Python-based programs and applications with strong logical thinking.", iconName: "Code" },
      { title: "Artificial Intelligence", description: "Exploring AI concepts and implementing beginner-level AI applications.", iconName: "BrainCircuit" },
      { title: "Data Science", description: "Working with datasets to perform analysis, visualization, and derive meaningful insights.", iconName: "Database" },
      { title: "Machine Learning", description: "Learning and implementing Machine Learning models and intelligent systems.", iconName: "Monitor" },
    ]
  });

  // Seed Projects
  await prisma.project.createMany({
    data: [
      {
        title: "🏆 Krishi: Smart Advisory AI (3rd Position – Inverthon 2.0)",
        description: "An AI-powered agricultural assistance platform designed to support small and marginal farmers. Features include an AI-based crop advisory system, soil analysis, smart irrigation guidance, and a voice-enabled chatbot for instant farmer support. Secured 3rd position among multiple teams.\nRole: Team Member – Quanta Byte\nStatus: Academic Project",
        techStack: ["Artificial Intelligence", "Machine Learning", "NLP", "Chatbot", "Web Technologies"],
        featured: true,
        imageUrl: "/krishi-smart-advisory-AI.png",
      },
      {
        title: "🚗 Smart EV Charging Monitoring System",
        description: "Developed a smart monitoring system for Electric Vehicle charging stations to monitor charging performance, energy consumption, and charging status in real time. Improves charging efficiency and energy management.\nRole: Project Developer and Research Contributor\nStatus: Academic Project",
        techStack: ["Python", "IoT", "Sensors", "Data Monitoring"],
        featured: true,
        imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "⚡ Smart Energy Meter",
        description: "Designed a smart energy meter system for monitoring and analyzing electricity consumption. Promotes energy-efficient behavior and better power management.\nRole: Project Developer\nStatus: Academic Project",
        techStack: ["IoT", "Embedded Systems", "Data Analytics"],
        featured: true,
        imageUrl: "/smart-meter-hardware.png",
      },
      {
        title: "🌬 Smart Indoor Air Quality Monitoring System",
        description: "Developed an IoT-based system to monitor indoor air quality and environmental conditions using sensors and cloud-based visualization. Provides real-time environmental awareness.\nRole: Project Team Member\nStatus: Completed Academic Project",
        techStack: ["ThingsBoard", "IoT", "Sensors", "Cloud Monitoring"],
        featured: true,
        imageUrl: "/AQI.png",
      },
      {
        title: "🏎 Team Garud Go-Kart Design & Development",
        description: "Contributed to the design, documentation, safety analysis, and development activities of Electric and Combustion Go-Karts as a member of Team Garud, gaining practical exposure to automotive engineering, vehicle systems, teamwork, and technical project management.",
        techStack: ["Electric Vehicle Technology", "Engineering Design", "Automotive Engineering"],
        featured: true,
        imageUrl: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Customer Purchase Behaviour Analysis Dashboard",
        description: "An interactive Customer Purchase Behaviour Analysis dashboard using Excel to understand customer trends, sales performance, and profit patterns.\n\nProject Highlights:\n- Monthly Sales & Profit Trends\n- Category-wise Profit (Waterfall Chart)\n- Sales Share % by Category\n- State-wise Sales Map\n- Top 10 Product Categories\n- Dynamic Filters (Year, Segment, Region, State)\n\nKey Insights:\n- Technology category gives the highest profit\n- Phones & Chairs are top-selling items\n- Strong sales peak in November–December\n- California, New York & Texas lead in total revenue",
        techStack: ["Excel", "Data Analysis", "Dashboard", "Data Visualization"],
        featured: true,
        imageUrl: "/customer-purchase-behaviour.png",
      }
    ]
  });

  // Seed Technical Skills
  const skills = [
    { name: "Python Programming", category: "Programming" },
    { name: "Programming Fundamentals", category: "Programming" },
    { name: "Data Structures", category: "Programming" },
    { name: "Artificial Intelligence", category: "Specialization" },
    { name: "Machine Learning Basics", category: "Specialization" },
    { name: "Data Analysis", category: "Specialization" },
    { name: "Problem Solving", category: "Soft Skills" },
    { name: "Team Collaboration", category: "Soft Skills" },
    { name: "Communication", category: "Soft Skills" },
    { name: "Quick Learning", category: "Soft Skills" },
    { name: "Adaptability", category: "Soft Skills" },
    { name: "Time Management", category: "Soft Skills" },
  ];

  await prisma.techSkill.createMany({
    data: skills.map(skill => ({ name: skill.name, category: skill.category }))
  });

  // Seed Experience
  await prisma.experience.createMany({
    data: [
      {
        role: "Python Intern",
        company: "Aarvion Technologies",
        startDate: "Jan 2026",
        endDate: "Present",
        current: true,
        description: "Learning and implementing core Python concepts. Developing Python-based programs and applications. Strengthening logical thinking and problem-solving abilities. Working on practical tasks and real-world programming scenarios. Gaining hands-on industry exposure through internship projects."
      }
    ]
  });

  // Seed Education
  await prisma.education.createMany({
    data: [
      {
        degree: "Bachelor of Technology (B.Tech) – Computer Science Engineering",
        institution: "Invertis University",
        startDate: "Aug 2024",
        endDate: "Aug 2028",
        description: "Relevant Areas: Programming Fundamentals, Data Structures, Artificial Intelligence, Machine Learning, Data Analysis"
      },
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

  // Seed Achievements (Certifications)
  await prisma.achievement.createMany({
    data: [
      {
        title: "Getting Started with Artificial Intelligence",
        issuer: "LinkedIn/Microsoft",
        date: "2024",
        description: "AI Basics"
      },
      {
        title: "Programming Foundations: Data Structures",
        issuer: "Certification Provider",
        date: "2023",
        description: "Data Structures"
      },
      {
        title: "AICTE – EduSkills Virtual Internship Program (Data Science Master)",
        issuer: "AICTE / EduSkills",
        date: "2024",
        description: "Data Science Internship"
      },
      {
        title: "Career Essentials in Data Analysis",
        issuer: "Microsoft and LinkedIn",
        date: "2024",
        description: "Data Analysis Essentials"
      },
      {
        title: "Python Essential Training",
        issuer: "Certification Provider",
        date: "2024",
        description: "Python Training"
      }
    ]
  });

  console.log("Seeding complete!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
