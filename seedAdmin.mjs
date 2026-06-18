import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = 'tannup245@gmail.com';
  const password = 'tannu123';
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const admin = await prisma.admin.upsert({
    where: { email },
    update: { password: hashedPassword, name: 'Tannu Priya' },
    create: { email, password: hashedPassword, name: 'Tannu Priya' },
  });
  console.log('Admin user successfully seeded/updated!');
  console.log('Email:', admin.email);
  console.log('Password:', password);
}
main().catch(console.error).finally(() => prisma.$disconnect());
