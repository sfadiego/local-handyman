'use client';

import { Content } from '@/components/dashboard/content';
import Header from '@/components/dashboard/header';
import { Sidebar } from '@/components/dashboard/sidebar';
import './dashboard.css';

export default function Dashboard() {
  return (
    <div className="main">
      <Sidebar />
      <Header />
      <Content />
    </div>
  );
}
