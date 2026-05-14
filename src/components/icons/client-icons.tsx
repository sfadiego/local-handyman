'use client';

import {
  Calendar,
  Clipboard,
  Gauge,
  Heart,
  History,
  Home,
  LucideProps,
  MessageCircle,
  Search,
  Settings,
  User,
} from 'lucide-react';
import { ComponentType } from 'react';

const iconMap: Record<string, ComponentType<LucideProps>> = {
  Home,
  Settings,
  User,
  Calendar,
  Clipboard,
  Gauge,
  Heart,
  History,
  MessageCircle,
  Search,
};

export const DynamicIcon = ({ icon }: { icon: string }) => {
  const Icon = iconMap[icon];
  if (!Icon)
    return <span style={{ width: 15, height: 15, display: 'inline-block' }} />;
  return <Icon width={15} height={15} />;
};
