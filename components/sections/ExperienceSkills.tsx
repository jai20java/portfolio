"use client";

import { motion } from "framer-motion";
import { siteData } from "../../data/portfolio";
import { GraduationCap, Briefcase, Code2, MapPin, Calendar } from "lucide-react";
import { Card } from "../ui/Card";

export function ExperienceSkills() {
  const exp = siteData.experience[0];

  return (
    <section id="experience" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Full Width Experience Card */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-slate-900">Experience</h3>
          </div>
          
          <Card className="p-8 md:p-10 border border-slate-100 shadow-sm bg-white">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{exp.role}</h4>
                <p className="text-lg text-primary font-bold mb-4">{exp.company}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {exp.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-slate-700 leading-relaxed mb-8 text-base">
              {exp.summary}
            </p>
            
            <div className="mb-8">
              <h5 className="font-bold text-slate-900 mb-4 text-lg">Key Responsibilities</h5>
              <ul className="text-slate-600 space-y-2 list-disc pl-5">
                {exp.keyResponsibilities?.map((bullet, i) => (
                  <li key={i} className="pl-1 leading-relaxed">{bullet}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold text-slate-900 mb-4 text-lg">Technologies Used</h5>
              <div className="flex flex-wrap gap-2.5">
                {exp.technologies?.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Education and Skills Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="w-6 h-6 text-purple" />
              <h3 className="text-2xl font-bold text-slate-900">Education</h3>
            </div>
            
            <div className="space-y-6">
              {siteData.education.map((edu, index) => (
                <div key={index} className="flex gap-5 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-purple" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 leading-tight mb-2 text-lg">{edu.degree}</h4>
                    <p className="text-base text-slate-500 mb-3 whitespace-pre-wrap">{edu.institution}</p>
                    <p className="text-sm font-semibold text-primary">
                      {edu.type === "degree" ? "Expected Graduation: " : "Completed: "}
                      {edu.expected || edu.completed}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Overview Column */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Code2 className="w-6 h-6 text-blue-500" />
              <h3 className="text-2xl font-bold text-slate-900">Skills Overview</h3>
            </div>
            
            <div className="space-y-6 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
              {siteData.skillsOverview.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-base font-medium text-slate-700">{skill.name}</span>
                    <span className="text-sm font-bold text-slate-400">{skill.percentage}%</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
