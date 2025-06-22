"use client";

import { useState } from "react";
import Link from "next/link";

import { Bell, ChevronDown, User, Settings, LogOut, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock notifications data
const notifications = [
  { id: 1, title: "New expense added", message: "Coffee - $4.50", time: "2 min ago", read: false },
  { id: 2, title: "Task completed", message: "Review monthly budget", time: "1 hour ago", read: false },
  { id: 3, title: "Wishlist item on sale", message: "MacBook Pro - 15% off", time: "3 hours ago", read: true },
  { id: 4, title: "Weekly summary ready", message: "Your expense report is available", time: "1 day ago", read: true },
  { id: 5, title: "New movie added", message: "Dune: Part Two added to watchlist", time: "2 days ago", read: true },
  { id: 6, title: "Budget alert", message: "80% of monthly budget used", time: "3 days ago", read: true },
  { id: 7, title: "Task reminder", message: "Pay electricity bill due tomorrow", time: "4 days ago", read: true },
  { id: 8, title: "Expense category", message: "Food expenses increased by 20%", time: "5 days ago", read: true },
  { id: 9, title: "Wishlist update", message: "3 items price dropped", time: "1 week ago", read: true },
  { id: 10, title: "Monthly goal", message: "Savings goal achieved!", time: "1 week ago", read: true },
];

interface TopNavProps {
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

export function TopNav({ isMobileOpen, setIsMobileOpen }: TopNavProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 glass-nav border-b border-gray-200 dark:border-white/10">
      <div className="flex items-center justify-between h-full px-6">
        {/* Left - Logo/Home Link */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">TrackerFlow</h1>
        </Link>

        {/* Right - Notifications & Profile */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">{unreadCount}</span>}
            </button>

            {/* Notifications Dropdown */}
            {isNotificationsOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsNotificationsOpen(false)} />
                <div className="absolute right-0 top-full mt-2 w-80 glass rounded-xl border border-gray-200 dark:border-white/10 shadow-2xl z-20 max-h-96 overflow-hidden">
                  <div className="p-4 border-b border-gray-200 dark:border-white/10">
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white">Notifications</h3>
                    {unreadCount > 0 && <p className="text-xs text-gray-600 dark:text-gray-400">{unreadCount} unread</p>}
                  </div>
                  <div className="overflow-y-auto max-h-80">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={cn("p-3 border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer", !notification.read && "bg-blue-50 dark:bg-blue-500/5")}
                      >
                        <div className="flex items-start gap-3">
                          {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate text-gray-900 dark:text-white">{notification.title}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 truncate">{notification.message}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{notification.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-gray-200 dark:border-white/10">
                    <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">View all notifications</button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors">
              <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <ChevronDown className={cn("w-4 h-4 transition-transform text-gray-600 dark:text-gray-300", isProfileOpen && "rotate-180")} />
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsProfileOpen(false)} />
                <div className="absolute right-0 top-full mt-2 w-64 glass rounded-xl border border-gray-200 dark:border-white/10 shadow-2xl z-20 overflow-hidden">
                  {/* Profile Section */}
                  <div className="p-4 border-b border-gray-200 dark:border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-gray-900 dark:text-white">John Doe</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">john@example.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="p-2">
                    {[
                      { icon: User, label: "Profile" },
                      { icon: Settings, label: "Settings" },
                      { icon: LogOut, label: "Logout" },
                    ].map(({ icon: Icon, label }) => (
                      <button
                        key={label}
                        className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors">
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
