import { logger } from '@/lib/logger.plugin';
import { prisma } from '@/lib/prisma';
import { UserRole } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;

    const id = searchParams.get('id');
    const email = searchParams.get('email');
    const firstName = searchParams.get('firstName');
    const lastName = searchParams.get('lastName');
    const phone = searchParams.get('phone');
    const role = searchParams.get('role');

    const whereClause: {
      id?: string;
      email?: string;
      firstName?: { contains: string; mode: 'insensitive' };
      lastName?: { contains: string; mode: 'insensitive' };
      phone?: { contains: string };
      role?: UserRole;
    } = {};

    if (id) whereClause.id = id;
    if (email) whereClause.email = email;
    if (firstName)
      whereClause.firstName = { contains: firstName, mode: 'insensitive' };
    if (lastName)
      whereClause.lastName = { contains: lastName, mode: 'insensitive' };
    if (phone) whereClause.phone = { contains: phone };
    if (role && Object.values(UserRole).includes(role as UserRole)) {
      whereClause.role = role as UserRole;
    }

    if (Object.keys(whereClause).length === 0) {
      return NextResponse.json(
        {
          error:
            'At least one search parameter is required (id, email, firstName, lastName, phone, role)',
        },
        { status: 400 }
      );
    }

    const users = await prisma.user.findMany({
      where: whereClause,
    });

    // Si se buscó por ID y no hay resultados, retornar null para mantener compatibilidad
    if (id && users.length === 0) {
      return NextResponse.json(null);
    }

    return NextResponse.json(users.length === 1 ? users[0] : users);
  } catch (error: unknown) {
    logger.error(error);
    return NextResponse.json(
      { error: 'Error al obtener usuario' },
      { status: 500 }
    );
  }
}
