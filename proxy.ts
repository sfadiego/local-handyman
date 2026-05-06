import { TokenPayload, verifyToken } from '@/lib/jwt';
import { UserRole } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { AuthRoutes } from './routes/routes';

interface RouteConfig {
  roles: UserRole[];
  redirect: string;
}

const COOKIE_NAME = process.env.AUTH_COOKIE_NAME || 'auth_token';
const protectedRoutes: Record<string, RouteConfig> = {
  '/customer': {
    roles: [UserRole.customer],
    redirect: '/unauthorized',
  },
  '/provider': {
    roles: [UserRole.provider],
    redirect: '/unauthorized',
  },
};

const getRouteConfig = (pathname: string): RouteConfig | null => {
  const match = Object.entries(protectedRoutes).find(([route]) =>
    pathname.startsWith(route)
  );
  return match ? match[1] : null;
};

export async function proxy(request: NextRequest): Promise<NextResponse> {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(COOKIE_NAME)?.value;

  if (!token) {
    return NextResponse.redirect(new URL(AuthRoutes.AUTH, request.url));
  }

  const payload: TokenPayload | null = await verifyToken(token);

  if (!payload) {
    return NextResponse.redirect(new URL(AuthRoutes.AUTH, request.url));
  }

  const routeConfig = getRouteConfig(pathname);

  if (routeConfig && !routeConfig.roles.includes(payload.role as UserRole)) {
    return NextResponse.redirect(new URL(routeConfig.redirect, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/customer/:path*', '/provider/:path*'],
};
