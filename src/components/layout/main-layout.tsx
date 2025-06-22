"use client";

import { TopNav } from "./top-nav";
import { SideNav } from "./side-nav";

interface MainLayoutProps {
  children: React.ReactNode;
}

import { useState } from "react";

export function MainLayout({ children }: MainLayoutProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative">
      {/* Background Pattern - Different for light/dark */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(156,146,172,0.4)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>

      {/* TopNav */}
      <TopNav isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
      <SideNav isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />

      {/* Main Content */}
      <main className="pt-16 pl-0 md:pl-64 min-h-screen transition-all duration-300">
        <div className="p-6">
          <div className="max-w-7xl mx-auto">{children}</div>
        </div>
      </main>
    </div>
  );
}
