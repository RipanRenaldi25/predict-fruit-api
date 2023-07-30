import { PrismaClient } from '@prisma/client';

describe('Prisma Client', () => {
  it('Should connect to database', async () => {
    const prismaClient = new PrismaClient();

    await prismaClient.$connect();

    await prismaClient.$disconnect();
  });
});
