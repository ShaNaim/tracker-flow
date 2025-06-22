import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface WelcomeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  className?: string;
}

export function WelcomeCard({ title, description, icon: Icon, color, className }: WelcomeCardProps) {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <div className={cn("glass rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-xl max-w-md mx-auto", className)}>
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Icon */}
          <div className={cn("w-16 h-16 rounded-full flex items-center justify-center", `bg-gradient-to-r ${color} shadow-lg`)}>
            <Icon className="w-8 h-8 text-white" />
          </div>

          {/* Content */}
          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
