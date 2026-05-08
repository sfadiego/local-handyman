import { logger } from '@/lib/logger.plugin';
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return NextResponse.json(user);
  } catch (error: unknown) {
    logger.error(error);
    return NextResponse.json(
      { error: 'Error al obtener el usuario' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const user = await prisma.user.create({ data });
    return NextResponse.json(user, { status: 201 });
  } catch (error: unknown) {
    logger.error(error);
    return NextResponse.json(
      { error: 'Error al crear usuario' },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { userId, data } = await req.json();
    const user = await prisma.user.update({
      where: { id: userId },
      data,
    });
    return NextResponse.json(user);
  } catch (error: unknown) {
    logger.error(error);
    return NextResponse.json(
      { error: 'Error al actualizar usuario' },
      { status: 500 }
    );
  }
}
