"use client";

import { Heart } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { WelcomeCard } from "@/components/ui/welcome-card";

export default function WishlistPage() {
  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <WelcomeCard title="Wishlist" description="Keep track of items you want to buy, set priorities, and manage your shopping goals. Perfect for planning purchases and gift ideas." icon={Heart} color="from-pink-500 to-rose-600" />
      </div>
    </MainLayout>
  );
}
