"use client";

import { DollarSign } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { WelcomeCard } from "@/components/ui/welcome-card";

export default function ExpensePage() {
  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <WelcomeCard
          title="Expense Tracker"
          description="Track your daily expenses, categorize spending, and gain insights into your financial habits. Coming soon with powerful analytics and budget management features."
          icon={DollarSign}
          color="from-green-500 to-emerald-600"
        />
      </div>
    </MainLayout>
  );
}
