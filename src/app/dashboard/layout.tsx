import { getUserFromCookie } from '@/actions/auth';
import { AuthProvider } from '@/contexts/auth-context';
import { AuthRoutes } from '@/routes/paths';
import { redirect } from 'next/navigation';

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUserFromCookie();
  if (!user) redirect(AuthRoutes.AUTH);
  return <AuthProvider>{children}</AuthProvider>;
};

export default DashboardLayout;
