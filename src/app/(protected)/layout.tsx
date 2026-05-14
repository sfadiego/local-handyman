import { getUserFromCookie } from '@/actions/auth';
import Navbar from '@/components/dashboard/navbar/navbar';
import { Sidebar } from '@/components/dashboard/sidebar';
import { AuthProvider } from '@/contexts/auth-context';
import { AuthRoutes } from '@/routes/paths';
import { redirect } from 'next/navigation';

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUserFromCookie();
  if (!user) redirect(AuthRoutes.AUTH);
  return (
    <div className="dashboard-layout">
      <AuthProvider initialUser={user}>
        <div className="main">
          <Sidebar />
          <Navbar />
          <div className="content">{children}</div>
        </div>
      </AuthProvider>
    </div>
  );
};

export default DashboardLayout;
