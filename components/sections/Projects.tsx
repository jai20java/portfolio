"use client";

import { motion } from "framer-motion";
import { siteData } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading title="Projects" subtitle="Featured Work" />
          <Button variant="link" className="text-primary hidden md:flex items-center gap-2 mb-12">
            View All Projects <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex"
            >
              <Card className="flex flex-col w-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                {/* Project Screenshot */}
                <div className="h-48 w-full relative overflow-hidden border-b border-slate-100 bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                      {project.title}
                    </h3>
                    {project.badge && (
                      <span className="shrink-0 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wide">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-6 flex-grow">
                    {project.description}
                  </p>

                  {project.role && (
                    <p className="text-slate-900 text-sm font-semibold mb-5">
                      Role: <span className="text-slate-600 font-medium">{project.role}</span>
                    </p>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded bg-slate-100 text-slate-600 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    {project.links.demo && (
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                        Live Demo <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.links.website && !project.links.demo && (
                      <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                        Live Website <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    
                    {project.links.caseStudy && (
                      <a href={project.links.caseStudy} className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple hover:text-purple/80 transition-colors ml-auto">
                        Case Study <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors ml-auto">
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
