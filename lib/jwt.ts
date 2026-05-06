import { JWTPayload, SignJWT, jwtVerify } from 'jose';

export interface TokenPayload extends JWTPayload {
  id: string;
  role: string;
  email: string;
}

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);

export const signToken = async (payload: TokenPayload): Promise<string> => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('1d')
    .sign(SECRET);
};

export const verifyToken = async (
  token: string
): Promise<TokenPayload | null> => {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload as TokenPayload;
  } catch {
    return null;
  }
};
