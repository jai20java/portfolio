"use client";

import { motion } from "framer-motion";
import { siteData } from "../../data/portfolio";
import { MapPin, Mail, Phone, Calendar } from "lucide-react";
import { Card } from "../ui/Card";

const iconMap: Record<string, React.ReactNode> = {
  Location: <MapPin className="w-5 h-5 text-primary" />,
  Email: <Mail className="w-5 h-5 text-purple" />,
  Phone: <Phone className="w-5 h-5 text-blue-500" />,
  Availability: <Calendar className="w-5 h-5 text-green-500" />,
};

const iconBgMap: Record<string, string> = {
  Location: "bg-primary/10",
  Email: "bg-purple/10",
  Phone: "bg-blue-500/10",
  Availability: "bg-green-500/10",
};

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 text-primary text-xs font-semibold tracking-wider w-max mb-2">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Professional Summary
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {siteData.about.summary}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {siteData.about.details.map((detail, index) => (
              <Card key={detail.label} className="p-6 flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBgMap[detail.label]}`}>
                  {iconMap[detail.label]}
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium mb-1">{detail.label}</p>
                  <p className="text-slate-900 font-semibold whitespace-pre-wrap">{detail.value}</p>
                </div>
              </Card>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
