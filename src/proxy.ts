import { UserRole } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { TokenPayload, verifyToken } from './lib/jwt';
import { AuthRoutes } from './routes/paths';

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
  '/dashboard': {
    roles: [UserRole.customer, UserRole.provider],
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
    const url = new URL(AuthRoutes.AUTH, request.url);
    url.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(new URL(AuthRoutes.AUTH, request.url));
  }

  const payload: TokenPayload | null = await verifyToken(token);

  if (!payload) {
    const url = new URL(AuthRoutes.AUTH, request.url);
    const response = NextResponse.redirect(url);
    response.cookies.delete(COOKIE_NAME);
    return response;
  }

  const routeConfig = getRouteConfig(pathname);

  if (routeConfig && !routeConfig.roles.includes(payload.role as UserRole)) {
    return NextResponse.redirect(new URL(routeConfig.redirect, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/customer/:path*', '/provider/:path*'],
};
