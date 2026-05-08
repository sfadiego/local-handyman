'use client';

import { LucideProps } from 'lucide-react';
import { ComponentType, useEffect, useState } from 'react';

export const DynamicIcon = ({
  icon: Icon,
}: {
  icon: ComponentType<LucideProps>;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return <span style={{ width: 15, height: 15, display: 'inline-block' }} />;

  return <Icon width={15} height={15} />;
};
