import { fail, ok } from '@/lib/api-handlers';
import { logger } from '@/lib/logger.plugin';
import { prisma } from '@/lib/prisma';
import { NextRequest } from 'next/server';

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return ok(users);
  } catch (error: unknown) {
    logger.error(error);
    return fail('Error al obtener los usuarios', 500);
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const user = await prisma.user.create({ data });
    return ok(user, 201);
  } catch (error: unknown) {
    logger.error(error);
    return fail('Error al crear usuario', 500);
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { userId, data } = await req.json();
    const user = await prisma.user.update({
      where: { id: userId },
      data,
    });
    return ok(user);
  } catch (error: unknown) {
    logger.error(error);
    return fail('Error al actualizar usuario', 500);
  }
}
