import { fail, ok } from '@/lib/api-handlers';
import { logger } from '@/lib/logger.plugin';
import { prisma } from '@/lib/prisma';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const phone = searchParams.get('phone');

    if (!phone) {
      return fail('Teléfono es requerido', 400);
    }

    const existingUser = await prisma.user.findFirst({
      where: { phone },
    });

    return ok({ exists: !!existingUser });
  } catch (error: unknown) {
    logger.error(error);
    return fail('Error al verificar teléfono', 500);
  }
}
