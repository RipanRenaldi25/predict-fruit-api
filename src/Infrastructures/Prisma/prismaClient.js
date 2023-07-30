import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient({
  errorFormat: 'pretty',
  log: ['error', 'warn', 'info', 'query'],
});

export default prismaClient;
