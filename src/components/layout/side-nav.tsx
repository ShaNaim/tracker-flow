"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DollarSign, Heart, PlayCircle, CheckSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Expenses",
    href: "/expense",
    icon: DollarSign,
  },
  {
    label: "Wishlist",
    href: "/wishlist",
    icon: Heart,
  },
  {
    label: "Watch",
    href: "/watch",
    icon: PlayCircle,
  },
  {
    label: "Tasks",
    href: "/tasks",
    icon: CheckSquare,
  },
];

interface SideNavProps {
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

export function SideNav({ isMobileOpen, setIsMobileOpen }: SideNavProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {isMobileOpen && <div className="fixed inset-0 bg-black/50 z-20 md:hidden" onClick={() => setIsMobileOpen(false)} />}
      <aside
        className={cn(
          "fixed left-0 top-16 h-[calc(100vh-4rem)] z-40 glass-nav border-r transition-all duration-300",
          "border-gray-200 dark:border-white/10",
          // Desktop behavior
          "hidden md:block",
          isCollapsed ? "md:w-16" : "md:w-64",
          // Mobile behavior
          "md:translate-x-0",
          isMobileOpen ? "block translate-x-0 w-64" : "block -translate-x-full w-64"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Navigation Items */}
          <nav className="flex-1 p-3 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link key={item.href} href={item.href} onClick={() => setIsMobileOpen(false)}>
                  <div
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      "group relative",
                      isActive ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10"
                    )}
                  >
                    {/* Icon */}
                    <Icon className={cn("w-4 h-4 flex-shrink-0", isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400")} />

                    {/* Label */}
                    {!isCollapsed && <span className="truncate">{item.label}</span>}

                    {/* Active Indicator */}
                    {isActive && <div className="absolute right-2 w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full" />}

                    {/* Tooltip for collapsed state */}
                    {isCollapsed && (
                      <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                        {item.label}
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Collapse Toggle */}
          <div className="p-3 border-t border-gray-200 dark:border-white/10">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="w-full flex items-center justify-center p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
            >
              {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
