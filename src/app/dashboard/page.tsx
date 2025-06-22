"use client";

import { LayoutDashboard } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { WelcomeCard } from "@/components/ui/welcome-card";

export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <WelcomeCard
          title="Dashboard"
          description="Get a complete overview of your finances, expenses, tasks, and goals. Your central hub for managing your daily life efficiently."
          icon={LayoutDashboard}
          color="from-indigo-500 to-blue-600"
        />
      </div>
    </MainLayout>
  );
}
