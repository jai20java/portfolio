"use client";

import { motion } from "framer-motion";
import { siteData } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";
import { Trophy, Rocket, Cloud, Star } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  trophy: <Trophy className="w-8 h-8 text-purple" />,
  rocket: <Rocket className="w-8 h-8 text-blue-500" />,
  cloud: <Cloud className="w-8 h-8 text-blue-400" />,
  star: <Star className="w-8 h-8 text-primary" />,
};

const iconBgMap: Record<string, string> = {
  trophy: "bg-purple/10",
  rocket: "bg-blue-500/10",
  cloud: "bg-blue-400/10",
  star: "bg-primary/10",
};

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <SectionHeading title="Achievements" subtitle="Milestones" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {siteData.achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${iconBgMap[achievement.icon]}`}>
                  {iconMap[achievement.icon]}
                </div>
                <h4 className="text-3xl font-bold text-slate-900 mb-2">{achievement.value}</h4>
                <p className="text-sm font-medium text-slate-500">{achievement.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
