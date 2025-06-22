"use client";

import { PlayCircle } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { WelcomeCard } from "@/components/ui/welcome-card";

export default function WatchPage() {
  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <WelcomeCard title="Things to Watch" description="Organize your watchlist of movies, TV shows, documentaries, and videos. Never forget what you wanted to watch next!" icon={PlayCircle} color="from-purple-500 to-violet-600" />
      </div>
    </MainLayout>
  );
}
