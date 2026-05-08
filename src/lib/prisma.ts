// lib/prisma.ts
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import 'server-only';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);
type LogTypes = 'query' | 'info' | 'warn' | 'error';

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const env = process.env.NODE_ENV === 'production';

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    log: !env ? (['error'] as LogTypes[]) : [],
  });

if (!env) globalForPrisma.prisma = prisma;
