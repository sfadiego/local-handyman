'use client';

import { loginAction, logoutAction } from '@/actions/auth';
import { ILoginValues } from '@/app/auth/login/useLoginForm';
import { IRegisterValues } from '@/app/auth/register/useRegister';
import { comparePassword, encryptPassword } from '@/lib/encript';
import { TokenPayload } from '@/lib/jwt';
import { AuthRoutes } from '@/routes/paths';
import { createUser, searchUser } from '@/services/user/user.service';
import { User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';

export interface AuthContextType {
  user: TokenPayload | null;
  isAuthenticated: boolean;
  login: ({ email, password }: ILoginValues) => Promise<User | boolean>;
  logout: () => void;
  register: (data: IRegisterValues) => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
  initialUser?: TokenPayload | null;
}
export function AuthProvider({
  children,
  initialUser = null,
}: AuthProviderProps) {
  const [user, setUser] = useState<TokenPayload | null>(initialUser || null);
  const router = useRouter();
  const login = async ({
    email,
    password,
  }: ILoginValues): Promise<User | boolean> => {
    const { data, status } = await searchUser({ email });
    if (status !== 200) {
      return false;
    }

    const user = data?.data;
    const isPasswordValid = comparePassword(password, user?.passwordHash);

    if (user && isPasswordValid) {
      await loginAction(user);
      setUser(user);
      return user;
    }
    return false;
  };

  const register = async (data: IRegisterValues): Promise<boolean> => {
    try {
      const newUser: User = {
        id: Date.now().toString(),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        passwordHash: await encryptPassword(data.password),
        avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.firstName}`,
        role: data.role,
        lat: 19.2463, // Default Colima coordinates
        lng: -103.7276,
        city: 'Colima',
        state: 'Colima',
        address: 'Dirección por defecto',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await createUser(newUser);
      await loginAction(newUser);
      setUser(newUser);
      return true;
    } catch (error) {
      // logger.error(error);
      console.log(error);
      return false;
    }
  };

  const logout = useCallback(async () => {
    await logoutAction();
    setUser(null);
    router.replace(AuthRoutes.AUTH);
  }, [router]);

  const isAuthenticated = !!user;
  const contextValue = useMemo(
    () => ({
      user,
      isAuthenticated,
      login,
      logout,
      register,
    }),
    [user, logout]
  );
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
