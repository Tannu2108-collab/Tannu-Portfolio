# Tannu Priya - Portfolio


🌐 **Live Demo:** https://tannu-portfolio-m0di.onrender.com

![Portfolio Preview](images/portfolio.png)


Welcome to the open-source repository of my personal portfolio website. This project is a modern, high-performance web application designed to showcase my skills, projects, and professional journey as a Python Intern, AI & Data Science Enthusiast, and B.Tech CSE Student.



## 🌟 Features

- **Modern UI/UX**: Designed with a sleek, dark-themed glassmorphic aesthetic.
- **Dynamic Animations**: Powered by Framer Motion, featuring smooth scroll reveals, custom typing effects, and hover transitions.
- **Full-Stack Architecture**: Built on Next.js 15+ (App Router) with Server-Side Rendering (SSR) for optimal SEO and performance.
- **Database Driven**: Uses Prisma ORM and MongoDB to dynamically render projects, experiences, education, and skills.
- **Admin Dashboard**: A secure, fully functional admin interface to manage and update portfolio content on the fly.
- **Resume Integration**: Direct link to view and download my professional resume.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React 18/19)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
- Node.js (v18 or higher)
- A MongoDB Database URL

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-link>
   cd Tannu-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```env
   DATABASE_URL="your-mongodb-connection-string"
   ```

4. **Initialize the Database**
   Push the Prisma schema to your database and generate the client:
   ```bash
   npx prisma db push
   npx prisma generate
   ```

5. **Seed the Database (Optional)**
   You can seed the initial data (Admin user, Default projects) by running the seed script or navigating to the API route locally:
   ```bash
   node prisma/seed.js
   ```

6. **Start the Development Server**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the live result.

## 📄 License
This project is open-source and available under the MIT License.
