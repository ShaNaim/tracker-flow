"use client";

import { CheckSquare } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { WelcomeCard } from "@/components/ui/welcome-card";

export default function TasksPage() {
  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <WelcomeCard title="Daily Tasks" description="Manage your daily tasks, set priorities, and track your productivity. Stay organized and accomplish your goals efficiently." icon={CheckSquare} color="from-blue-500 to-cyan-600" />
      </div>
    </MainLayout>
  );
}
