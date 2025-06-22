"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { DollarSign, Heart, PlayCircle, CheckSquare, ArrowRight, TrendingUp, Clock, Target } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Expense Tracker",
    description: "Monitor your spending habits and manage your budget effectively",
    icon: DollarSign,
    color: "from-green-500 to-emerald-600",
    href: "/expense",
    stats: "Track unlimited expenses",
  },
  {
    title: "Wishlist",
    description: "Keep track of items you want to buy and plan your purchases",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    href: "/wishlist",
    stats: "Organize by priority",
  },
  {
    title: "Things to Watch",
    description: "Never forget what movies or shows you wanted to watch",
    icon: PlayCircle,
    color: "from-purple-500 to-violet-600",
    href: "/watch",
    stats: "Unlimited watchlist",
  },
  {
    title: "Daily Tasks",
    description: "Stay productive with organized task management",
    icon: CheckSquare,
    color: "from-blue-500 to-cyan-600",
    href: "/tasks",
    stats: "Boost productivity",
  },
];

const stats = [
  { icon: TrendingUp, label: "Track Progress", value: "Real-time" },
  { icon: Clock, label: "Save Time", value: "Daily" },
  { icon: Target, label: "Achieve Goals", value: "Efficiently" },
];

export default function HomePage() {
  return (
    <MainLayout>
      <div className="space-y-12">
        {/* Hero Section */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center space-y-6 py-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            TrackerFlow
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your all-in-one daily life management platform. Track expenses, manage wishlists, organize your watchlist, and stay on top of your tasks.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="flex flex-wrap justify-center gap-4 pt-4">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }} className="glass rounded-full px-6 py-3 flex items-center gap-2">
                <stat.icon className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">{stat.label}</span>
                <span className="text-xs text-muted-foreground">• {stat.value}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Features Grid */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }} whileHover={{ y: -8, scale: 1.02 }} className="group">
                <Link href={feature.href}>
                  <div className="glass rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                    <div className="flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={cn("w-16 h-16 rounded-xl flex items-center justify-center", `bg-gradient-to-r ${feature.color} shadow-lg`)}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        <motion.div className="text-muted-foreground group-hover:text-foreground transition-colors" whileHover={{ x: 4 }}>
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        <h3 className="text-2xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-foreground group-hover:to-foreground/70 transition-all duration-300">
                          {feature.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>

                      {/* Footer */}
                      <div className="mt-6 pt-4 border-t border-white/10">
                        <span className="text-sm text-muted-foreground">{feature.stats}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.section>

        {/* CTA Section */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }} className="text-center py-12">
          <div className="glass rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold mb-4">Ready to get organized?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Start managing your daily life more efficiently with TrackerFlow. Choose any feature above to begin your productivity journey.</p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link href="/expense" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </MainLayout>
  );
}
