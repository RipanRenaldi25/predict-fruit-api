import { PrismaClient } from '@prisma/client';

describe('Prisma Client', () => {
  it('Should be able to connect to database', async () => {
    const prisma = new PrismaClient();
    await prisma.$connect();

    await prisma.$disconnect();
  });
});
