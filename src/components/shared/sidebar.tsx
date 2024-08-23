'use client';
import DashboardNav from '@/components/shared/dashboard-nav';
import { navItems } from '@/constants/data';
import { useSidebar } from '@/hooks/use-sidebar';
import { cn } from '@/lib/utils';
import { ChevronsLeft, Maximize2, Minimize2 } from 'lucide-react';
import { useState } from 'react';

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const { isMinimized, toggle } = useSidebar();
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus(true);
    toggle();
    setTimeout(() => setStatus(false), 500);
  };
  return (
    <nav
      className={cn(
        `relative z-10 hidden h-screen flex-none bg-black px-3 md:block`,
        status && 'duration-500',
        !isMinimized ? 'w-64' : 'w-[80px]',
        className
      )}
    >
      <div
        className={cn(
          'flex items-center px-0 py-5 text-white md:px-2',
          isMinimized ? 'justify-center ' : 'justify-between'
        )}
      >
        <h1 className={`font-bold ${isMinimized ? 'text-lg' : 'text-2xl'}`}>
          DIA
        </h1>
        {isMinimized ? (
          <Maximize2
            className={cn('cursor-pointer text-sm')}
            onClick={handleToggle}
          />
        ) : (
          <Minimize2
            className={cn('cursor-pointer text-sm')}
            onClick={handleToggle}
          />
        )}
      </div>
      <div className="space-y-4 py-4">
        <div className="px-2 py-2">
          <div className="mt-3 space-y-1">
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </nav>
  );
}
