import Navbar from '@/components/dashboard/navbar/navbar';
import { Sidebar } from '@/components/dashboard/sidebar';
// import { Content } from './content';
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
