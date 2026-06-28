"use client";

import { motion } from "framer-motion";
import { siteData } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import Image from "next/image";

// Map of icons for skills using simple images or SVGs
const skillIcons: Record<string, string> = {
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  pycharm: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
  vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  antigravity: "/images/antigravity-icon.png",
  cursor: "/images/cursor.png",
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <SectionHeading title="Technical Skills" subtitle="My Toolkit" />
        
        <div className="flex flex-wrap justify-center gap-6 mt-12 max-w-5xl mx-auto">
          {siteData.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="w-28 h-28 flex flex-col items-center justify-center gap-3 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 relative">
                  <Image 
                    src={skillIcons[skill.icon]} 
                    alt={skill.name}
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-semibold text-slate-700">{skill.name}</span>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
