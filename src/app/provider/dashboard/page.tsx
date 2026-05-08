import { getUserFromCookie } from '@/actions/auth';
import Header from '@/components/dashboard/header';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Content } from './content';
import './dashboard.css';

export default async function Dashboard() {
  const user = await getUserFromCookie();
  return (
    <div className="main">
      <Sidebar user={user} />
      <Header />
      <Content />
    </div>
  );
}
