'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  BookMarked,
  Headphones,
  History,
  LayoutDashboard,
  MessageCircleQuestion,
  Mic2,
  Settings,
  Sparkles
} from 'lucide-react';

const navItems = [
  { href: '/reader', label: 'Reader', icon: Headphones },
  { href: '/history', label: 'History', icon: History },
  { href: '/bookmarks', label: 'Bookmarks', icon: BookMarked },
  { href: '/usage', label: 'Usage', icon: LayoutDashboard },
  { href: '/voices', label: 'Voices', icon: Mic2 },
  { href: '/roadmap', label: 'Roadmap', icon: Sparkles },
  { href: '/help', label: 'Help', icon: MessageCircleQuestion },
  { href: '/settings', label: 'Settings', icon: Settings }
];

export default function Sidebar({
  collapsed,
  onToggle
}: {
  collapsed: boolean;
  onToggle: () => void;
}) {
  return (
    <aside
      className={cn(
        'flex h-screen flex-col border-r border-border bg-[hsl(var(--sidebar))] text-[hsl(var(--sidebar-foreground))] transition-all',
        collapsed ? 'w-16' : 'w-56'
      )}
    >
      <div className="flex h-12 items-center justify-between px-3">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <span className="rounded-md bg-[hsl(var(--sidebar-primary))] px-2 py-1 text-xs text-white">
            MS
          </span>
          {!collapsed && <span>Mint Speech</span>}
        </div>
        <button
          type="button"
          onClick={onToggle}
          className="rounded-md px-2 py-1 text-xs text-[hsl(var(--sidebar-foreground))]/70 hover:text-[hsl(var(--sidebar-foreground))]"
        >
          {collapsed ? '»' : '«'}
        </button>
      </div>
      <nav className="flex flex-1 flex-col gap-1 px-2 py-3 text-sm">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-[hsl(var(--sidebar-foreground))]/80 transition hover:bg-[hsl(var(--sidebar-border))]',
                collapsed && 'justify-center px-0'
              )}
            >
              <Icon className="h-4 w-4" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
