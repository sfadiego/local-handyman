// import Navbar from '@/components/dashboard/navbar/navbar';
// import { Content } from './content';
// import Navbar from '@/components/landing/Navbar';
import Navbar from '@/components/dashboard/navbar/navbar';
import { Sidebar } from '@/components/dashboard/sidebar';
import './dashboard.css';

export default async function Dashboard() {
  return (
    <div className="main">
      <Sidebar />
      <Navbar />
      {/* <Content /> */}
    </div>
  );
}
