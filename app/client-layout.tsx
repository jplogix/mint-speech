'use client';

import Sidebar from '@/components/ui/Sidebar';
import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((prev) => !prev)} />
      <div className="flex w-full flex-col">
        <header className="drag-region flex h-12 items-center gap-3 border-b border-border bg-secondary px-3">
          <button
            type="button"
            className="no-drag rounded-md p-2 hover:bg-muted"
            aria-label="Toggle sidebar"
            onClick={() => setCollapsed((prev) => !prev)}
          >
            <Menu className="h-4 w-4" />
          </button>
          <div className="text-sm font-medium">Mint Speech</div>
        </header>
        <main className="flex-1 overflow-auto px-3 py-4">{children}</main>
      </div>
    </div>
  );
}
