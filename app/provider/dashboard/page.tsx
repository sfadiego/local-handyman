'use client';

import Header from '@/components/dashboard/header';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Content } from './content';
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
