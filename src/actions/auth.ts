'use server';
import { signToken, TokenPayload, verifyToken } from '@/lib/jwt';
import { User } from '@prisma/client';
import { cookies } from 'next/headers';

const COOKIE_NAME = process.env.AUTH_COOKIE_NAME || 'auth_token';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 1; // 1 día

export const loginAction = async (user: User): Promise<void> => {
  const token = await signToken({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    city: user?.city ?? '',
    state: user?.state ?? '',
    address: user?.address ?? '',
    role: user.role,
    email: user.email,
  });

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: COOKIE_MAX_AGE,
    path: '/',
  });
};

export const logoutAction = async (): Promise<void> => {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
};

export const getUserFromCookie = async (): Promise<TokenPayload | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) {
    return null;
  }
  const user = await verifyToken(token);
  return user as TokenPayload;
};
